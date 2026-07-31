export const ORGANIZATION_ID = 'https://www.digitallabservices.com/#organization';

// Canonical Organization entity for JSON-LD. Render this full object once
// per page (via <script type="application/ld+json">) on every page that
// references it with organizationRef below - @id links only resolve
// within the same page's structured data, not across separate URLs, so
// the full definition has to be co-located with each reference.
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@id': ORGANIZATION_ID,
  // Multi-type: Digital Lab is both a general Organization (referenced as
  // author/publisher on blog posts etc.) and a LocalBusiness with a real
  // physical address - schema.org supports declaring both on one entity
  // rather than duplicating the same address/telephone in a second block.
  '@type': ['Organization', 'LocalBusiness'],
  name: 'Digital Lab',
  url: 'https://www.digitallabservices.com',
  logo: 'https://res.cloudinary.com/dt9wziort/image/upload/v1761450806/logo_t7iupv.png',
  sameAs: [
    'https://www.facebook.com/home.of.professionals',
    'https://www.instagram.com/digitallabservices',
    'https://www.linkedin.com/company/digtal-lab/',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ali Hussain Abad, Bata Factory, Multan Road',
    addressLocality: 'Lahore',
    addressCountry: 'Pakistan',
  },
  telephone: '+92 326 5929677',
  email: 'info@digitallabservices.com',
  // The address above is where Digital Lab is physically based, not who
  // it targets - areaServed signals the intended market, matching the
  // United States targeting already declared on 5 of the 6 service pages.
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
};

// Use this to reference the Organization from another schema object
// (provider, publisher, author) instead of re-embedding the full object.
export const organizationRef = { '@id': ORGANIZATION_ID };
