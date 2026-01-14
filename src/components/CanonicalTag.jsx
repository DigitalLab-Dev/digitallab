'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function CanonicalTag() {
    const pathname = usePathname();

    useEffect(() => {
        // Remove any existing canonical tags that might be duplicates
        const existingCanonicals = document.querySelectorAll('link[rel="canonical"]');
        existingCanonicals.forEach(tag => tag.remove());

        // Create and append the new canonical tag
        const canonicalUrl = `https://www.digitallabservices.com${pathname}`;
        const link = document.createElement('link');
        link.rel = 'canonical';
        link.href = canonicalUrl;
        document.head.appendChild(link);

        // Cleanup function
        return () => {
            const currentCanonical = document.querySelector(`link[rel="canonical"][href="${canonicalUrl}"]`);
            if (currentCanonical) {
                currentCanonical.remove();
            }
        };
    }, [pathname]);

    return null;
}
