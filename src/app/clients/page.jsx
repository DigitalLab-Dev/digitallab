import ClientsPageClient from './ClientsPageClient';

// Revalidate periodically (ISR) so newly-approved reviews/influencers show
// up without a full redeploy, while still SSR-ing real content on first load.
export const revalidate = 3600;

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || 'http://127.0.0.1:4000';

async function fetchInfluencers() {
  try {
    const response = await fetch(`${BACKEND_URL}/api/influencers`);
    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.warn('⚠️ Failed to fetch /api/influencers for SSR:', error.message);
    return [];
  }
}

async function fetchTestimonials() {
  try {
    const response = await fetch(`${BACKEND_URL}/api/review/approved`);
    if (!response.ok) return [];
    const data = await response.json();
    if (!Array.isArray(data)) return [];

    return data.map((review) => ({
      id: review._id,
      name: review.name,
      title: review.role,
      review: review.review,
      image:
        review.image ||
        `https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=ea580c&color=fff&size=150`,
      rating: 5,
      email: review.email,
    }));
  } catch (error) {
    console.warn('⚠️ Failed to fetch /api/review/approved for SSR:', error.message);
    return [];
  }
}

export default async function Clients() {
  const [influencers, testimonials] = await Promise.all([
    fetchInfluencers(),
    fetchTestimonials(),
  ]);

  return (
    <ClientsPageClient
      initialInfluencers={influencers}
      initialTestimonials={testimonials}
    />
  );
}
