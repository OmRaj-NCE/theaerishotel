import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description: string;
  url?: string;
};

const SEO = ({ title, description, url }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      {/* Open Graph (for WhatsApp / Facebook preview) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />

      {/* Basic SEO */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default SEO;