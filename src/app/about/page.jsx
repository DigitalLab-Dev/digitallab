import AboutPageClient from './AboutPageClient';

// Team members change rarely, so a longer ISR window than the video/FAQ
// pages is appropriate here.
export const revalidate = 86400; // 24h

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || 'http://127.0.0.1:4000';

async function fetchTeam() {
  try {
    const response = await fetch(`${BACKEND_URL}/api/team`);
    if (!response.ok) return [];

    const data = await response.json();
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.data)) return data.data;
    if (data && Array.isArray(data.members)) return data.members;
    if (data && typeof data === 'object') return [data];
    return [];
  } catch (error) {
    console.warn('⚠️ Failed to fetch /api/team for SSR:', error.message);
    return [];
  }
}

export default async function Page() {
  const team = await fetchTeam();

  return <AboutPageClient initialTeam={team} />;
}
