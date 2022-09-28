import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './component/header'
import Footer from './component/footer'
// import Head from 'next/head'

export default function Home(data) {
  return <>
            <Head dangerouslySetInnerHTML={{ __html: data.post.yoast_head }} />
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