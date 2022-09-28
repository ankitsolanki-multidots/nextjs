import Link from 'next/link'
import Header from './component/header'
import Footer from './component/footer'

export default function Post( data ){

    // console.log(data.post)
    return (
        <>
            <Header />
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
