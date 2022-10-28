import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

interface MoleculesMetaHeaderProps {
  title: string
  description: string
  keywords: string
  image: string
}

const MoleculesMetaHeader: React.FC<MoleculesMetaHeaderProps> = ({
  title,
  description,
  keywords,
  image,
}) => {
  const router = useRouter()

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={process.env.NEXT_PUBLIC_URL + router.pathname} />
      <meta name="robots" content="index,follow" />
      <meta name="keywords" content={keywords} />
      <meta name="theme-color" content="#0E78F9" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:domain" content="www.pintu.com" />
      <meta name="twitter:site" content="@pintu" />
      <meta name="twitter:creator" content="@pintu" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_URL + router.pathname} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="pintu" />
      <meta property="og:locale" content="id_ID" />
    </Head>
  )
}
export default MoleculesMetaHeader
