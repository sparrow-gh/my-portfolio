import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Portfolio - مطور ومصمم مواقع ويب',
  description = 'موقع شخصي لعرض الأعمال والمشاريع والخدمات التقنية',
  keywords = 'تطوير مواقع, تصميم ويب, برمجة, React, Next.js, مطور ويب, تطبيقات موبايل',
  image = '/og-image.jpg',
  url = 'https://your-domain.com',
  type = 'website',
  author = 'Portfolio Developer',
  publishedTime,
  modifiedTime,
}) => {
  const fullTitle = title.includes('Portfolio') ? title : `${title} | Portfolio`;
  const fullImageUrl = image.startsWith('http') ? image : `${url}${image}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Arabic" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Portfolio" />
      <meta property="og:locale" content="ar_SA" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content="@your_twitter" />

      {/* Article Meta Tags (for blog posts) */}
      {type === 'article' && (
        <>
          <meta property="article:author" content={author} />
          {publishedTime && (
            <meta property="article:published_time" content={publishedTime} />
          )}
          {modifiedTime && (
            <meta property="article:modified_time" content={modifiedTime} />
          )}
        </>
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Theme Color */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": type === 'article' ? 'Article' : 'WebSite',
            "name": fullTitle,
            "description": description,
            "url": url,
            "image": fullImageUrl,
            "author": {
              "@type": "Person",
              "name": author
            },
            ...(type === 'website' && {
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${url}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string"
              }
            }),
            ...(publishedTime && {
              "datePublished": publishedTime
            }),
            ...(modifiedTime && {
              "dateModified": modifiedTime
            })
          })
        }}
      />
    </Head>
  );
};

export default SEOHead;
