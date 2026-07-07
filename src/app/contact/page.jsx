import ContactPageClient from './ContactPageClient';

// Revalidate periodically (ISR) so FAQ edits show up without a full redeploy.
export const revalidate = 3600;

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || 'http://127.0.0.1:4000';

async function fetchFaqs() {
  try {
    const response = await fetch(`${BACKEND_URL}/api/faq`);
    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.warn('⚠️ Failed to fetch /api/faq for SSR:', error.message);
    return [];
  }
}

export default async function Page() {
  const faqs = await fetchFaqs();

  return <ContactPageClient initialFaqs={faqs} />;
}
