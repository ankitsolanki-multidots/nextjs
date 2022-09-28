import Link from 'next/link'
import Header from './component/header'
import Footer from './component/footer'
import Head from 'next/head'

export default function Post( data ){

    // console.log(data.post)
    return (
        <>
            <Header />
            <Head>
            <title>{data.yoast_head_json.title}</title>
            <meta name="description" content={data.yoast_head_json.description} />
            {/* <meta name="robots" content="noindex, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" /> */}
            <meta property="og:locale" content={data.yoast_head_json.og_locale} />
            <meta property="og:type" content={data.yoast_head_json.og_type} />
            <meta property="og:title" content={data.yoast_head_json.og_title} />
            <meta property="og:description" content={data.yoast_head_json.og_description} />
            <meta property="og:url" content={data.yoast_head_json.og_url} />
            <meta property="og:site_name" content={data.yoast_head_json.og_site_name} />
            <meta property="article:modified_time" content={data.yoast_head_json.article_modified_time} />
            <meta name="twitter:card" content={data.yoast_head_json.twitter_card} />
            <meta name="twitter:image" content={data.yoast_head_json.twitter_image} />
            <meta name="twitter:label1" content="Est. reading time" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
            <div
            // className={styles.content}
            dangerouslySetInnerHTML={{ __html: data.post.content.rendered }}
        />
            <Footer>

            </Footer>
      </>
    )

}

export const getServerSideProps = async ({
    params,
  }) => {
    // console.log(params)
    // // const data = await getPostAndMorePosts(params?.slug, preview, previewData)
  
    // return {
    //   props: {
    //     params,
    //   },
    // }

    let query = `https://prj-frontity-tro.md-staging.com/wp-json/wp/v2/pages?slug=` + params?.slug;
    const res = await fetch(query)
    const data = await res.json()
    // console.log(data)
    // Pass data to the page via props
    let post = data.length > 0 ? data[0] : [];
    return { props: { post } }
  }
