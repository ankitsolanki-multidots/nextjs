import Link from 'next/link'
import Header from './component/header'
import Footer from './component/footer'
import Head from 'next/head'
import Script from 'next/script'


export default function Post( data ){

    console.log(data)
    return (
        <>
            <Header headers={data.headers} />
            <Script src="/js/contact-form-submit.js"></Script>
            <Head>
            {/* <script src="/js/contact-form-submit.js" /> */}
            <title>{data.post.yoast_head_json.title}</title>
            <meta name="description" content={data.post.yoast_head_json.description} />
            {/* <meta name="robots" content="noindex, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" /> */}
            <meta property="og:locale" content={data.post.yoast_head_json.og_locale} />
            <meta property="og:type" content={data.post.yoast_head_json.og_type} />
            <meta property="og:title" content={data.post.yoast_head_json.og_title} />
            <meta property="og:description" content={data.post.yoast_head_json.og_description} />
            <meta property="og:url" content={data.post.yoast_head_json.og_url} />
            <meta property="og:site_name" content={data.post.yoast_head_json.og_site_name} />
            <meta property="article:modified_time" content={data.post.yoast_head_json.article_modified_time} />
            <meta name="twitter:card" content={data.post.yoast_head_json.twitter_card} />
            <meta name="twitter:image" content={data.post.yoast_head_json.twitter_image} />
            <meta name="twitter:label1" content="Est. reading time" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
            <div
            // className={styles.content}
            dangerouslySetInnerHTML={{ __html: data.post.content.rendered }}
        />
            <Footer footers={data.footer}>

            </Footer>
      </>
    )

}

export const getStaticProps = async ({
    params,
  }) => {
    console.log(params)
    // const data = await getPostAndMorePosts(params?.slug, preview, previewData)
  
    // return {
    //   props: {
    //     params,
    //   },
    // }
    const queryy = `
    {
        menus {
          nodes {
            id
            databaseId
            name
            menuItems {
              edges {
                node {
                  id
                  label
                  path
                  parentId
                }
              }
            }
          }
        }
      }
  `
  const variables = {
    onlyEnabled: false,
    };
    const headers = { 'Content-Type': 'application/json' }
    const ress = await fetch('https://prj-frontity-tro.md-staging.com/graphql', {
        headers,
        method: 'POST',
        body: JSON.stringify({
            query: queryy,
        }),
      })
      console.log('queryy', queryy)
    
      const json = await ress.json()
      console.log('json', json.data.menus.nodes[0].menuItems.edges)
      console.log('json', json.data.menus.nodes[1].menuItems.edges)

    let query = `https://prj-frontity-tro.md-staging.com/wp-json/wp/v2/pages?slug=` + params?.slug;
    const res = await fetch(query)
    const data = await res.json()
    // console.log(data)
    // Pass data to the page via props
    let post = data.length > 0 ? data[0] : [];
    return { props: { post, headers: json.data.menus.nodes[1].menuItems.edges, footer: json.data.menus.nodes[0].menuItems.edges } }
  }

  export async function getStaticPaths() {

    const queryy = `
    {
      pages(first: 1000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `
  const variables = {
    onlyEnabled: false,
    };
    const headers = { 'Content-Type': 'application/json' }
    const ress = await fetch('https://prj-frontity-tro.md-staging.com/graphql', {
        headers,
        method: 'POST',
        body: JSON.stringify({
            query: queryy,
        }),
      })
      console.log('queryy', queryy)
    
      const json = await ress.json()
      console.log(json.data.pages.edges)

    const pathsData = [];

    json.data.pages.edges.map((product) => {
        pathsData.push({ params: { slug: `${product.node.slug}` } });
    });

    return {
        paths: pathsData,
        fallback: false
    };
}