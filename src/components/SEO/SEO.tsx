import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description: string;
  url?: string;
};
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "The Aeris Hotel",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Patna",
      addressRegion: "Bihar",
      addressCountry: "India",
    },
    telephone: "+91 9661111107",
    url: "https://yourdomain.com",
  })}
</script>
const SEO = ({ title, description, url }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || ""} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />

      {/* Canonical */}
      {url && <link rel="canonical" href={url} />}
    </Helmet>
  );
};

export default SEO;