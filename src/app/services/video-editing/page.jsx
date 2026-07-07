import VideoPageClient from './VideoPageClient';

// Revalidate periodically (ISR) so newly-added videos show up without a
// full redeploy, while still SSR-ing real content on first load.
export const revalidate = 3600;

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || 'http://127.0.0.1:4000';

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

  return <VideoPageClient shortVideos={shortVideos} longVideos={longVideos} />;
}
