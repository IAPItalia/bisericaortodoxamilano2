import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://ais-pre-ctsnz7w52ouch5bsonbra6-30414542259.europe-west1.run.app/sitemap.xml',
  };
}
