import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './component/header'
import Footer from './component/footer'
// import Head from 'next/head'

export default function Home(data) {
  return <>
            <Head dangerouslySetInnerHTML={{ __html: data.post.yoast_head }} >
            <title>Home - Tropicana Brands Group</title>
            <meta name="description" content="here is the description of meta." />
            <meta name="robots" content="noindex, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="Home - Tropicana Brands Group" />
            <meta property="og:description" content="here is the description of meta." />
            <meta property="og:url" content="https://prj-frontity-tro.md-staging.com/" />
            <meta property="og:site_name" content="Tropicana Brands Group" />
            <meta property="article:modified_time" content="2022-05-19T10:17:16+00:00" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content="https://prj-frontity-tro.md-staging.com/wp-content/uploads/2022/01/fruits_orange-1.webp" />
            <meta name="twitter:label1" content="Est. reading time" />
            
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
            <Header />
            <div
            // className={styles.content}
            dangerouslySetInnerHTML={{ __html: data.post.content.rendered }}
        />
            <Footer>

            </Footer>
      </>
}

export const getServerSideProps = async ({
  params,
}) => {
  let query = `https://prj-frontity-tro.md-staging.com/wp-json/wp/v2/pages?slug=home`;
  const res = await fetch(query)
  const data = await res.json()
  console.log(data)
  // Pass data to the page via props
  let post = data.length > 0 ? data[0] : [];
  return { props: { post } }
}