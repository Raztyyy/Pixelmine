import { Helmet } from "react-helmet-async";

function SEOHelmet({
  title = "Pixelmine",
  description = "Pixelmine is a decentralized social network built on transparency, fairness, and user empowerment.",
  url = "https://www.pixelmine.org", // update to your production domain
  image = "/social-sharing.jpg", // ideal OG image URL
}) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
}

export default SEOHelmet;
