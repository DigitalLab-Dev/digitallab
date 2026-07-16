import VideoPageClient from './VideoPageClient';

// Revalidate periodically (ISR) so newly-added videos show up without a
// full redeploy, while still SSR-ing real content on first load.
export const revalidate = 3600;

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || 'http://127.0.0.1:4000';

const videoEditingServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Video Editing Services',
  name: 'Video Editing Agency & Corporate Video Production Company',
  provider: {
    '@type': 'Organization',
    name: 'Digital Lab',
    url: 'https://www.digitallabservices.com',
    logo: 'https://www.digitallabservices.com/images/logo.png',
    sameAs: [
      'https://www.facebook.com/home.of.professionals',
      'https://www.instagram.com/digitallabservices',
      'https://www.linkedin.com/company/digtal-lab/',
    ],
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  url: 'https://www.digitallabservices.com/services/video-editing',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Video Editing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Short-Form Content (Reels/Shorts/TikToks)',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Long-Form Content (YouTube & Podcasts)',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Documentary-Style Editing' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Motion Graphics' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: '2D & 3D Animation' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Cinematic Editing' },
      },
    ],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.digitallabservices.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://www.digitallabservices.com/services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Video Editing',
      item: 'https://www.digitallabservices.com/services/video-editing',
    },
  ],
};

function buildVideoSchema(video, isLongForm) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title || 'Short-Form Video Editing Sample — Digital Lab',
    description: isLongForm
      ? `${video.title} — a long-form video editing project by Digital Lab.`
      : 'A short-form vertical video editing sample by Digital Lab, showcasing fast-paced cuts and trending effects.',
    thumbnailUrl: [
      `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`,
      `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`,
    ],
    uploadDate: video.createdAt,
    embedUrl: `https://www.youtube.com/embed/${video.videoId}`,
    contentUrl: `https://www.youtube.com/watch?v=${video.videoId}`,
    publisher: {
      '@type': 'Organization',
      name: 'Digital Lab',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.digitallabservices.com/images/logo.png',
      },
    },
  };
}

async function fetchVideos(path) {
  try {
    const response = await fetch(`${BACKEND_URL}${path}`);
    if (!response.ok) return [];
    const data = await response.json();
    return data.success && Array.isArray(data.videos) ? data.videos : [];
  } catch (error) {
    console.warn(`⚠️ Failed to fetch ${path} for SSR:`, error.message);
    return [];
  }
}

export default async function VideoPage() {
  const [shortVideos, longVideos] = await Promise.all([
    fetchVideos('/api/short-videos'),
    fetchVideos('/api/long-videos'),
  ]);

  const videoSchemas = [
    ...shortVideos.map((video) => buildVideoSchema(video, false)),
    ...longVideos.map((video) => buildVideoSchema(video, true)),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoEditingServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {videoSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <VideoPageClient shortVideos={shortVideos} longVideos={longVideos} />
    </>
  );
}
