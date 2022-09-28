import Link from 'next/link'

export default function Header(data) {
    // console.log(data)
    return <>
        <header id="masthead" className="site-header">
   <div className="container">
      <div className="header-raw">
         <div className="site-branding">
            <Link href="/" className="custom-logo-link" rel="home" aria-current="page">
            <img src="https://prj-tropicana.md-staging.com/wp-content/uploads/2022/01/Tropicana-Brands-Group-408x116.webp" className="main_logo_header" alt="Tropicana Brands" srcSet="https://prj-tropicana.md-staging.com/wp-content/uploads/2022/01/Tropicana-Brands-Group-408x116.webp 408w, https://prj-tropicana.md-staging.com/wp-content/uploads/2022/01/Tropicana-Brands-Group-300x85.webp 300w, https://prj-tropicana.md-staging.com/wp-content/uploads/2022/01/Tropicana-Brands-Group-768x218.webp 768w, https://prj-tropicana.md-staging.com/wp-content/uploads/2022/01/Tropicana-Brands-Group-150x43.webp 150w, https://prj-tropicana.md-staging.com/wp-content/uploads/2022/01/Tropicana-Brands-Group-90x26.webp 90w, https://prj-tropicana.md-staging.com/wp-content/uploads/2022/01/Tropicana-Brands-Group.webp 1000w" sizes="(max-width: 408px) 100vw, 408px" width="408" height="116" /></Link>
         </div>
         <nav id="site-navigation" className="main-navigation">
            <button className="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
            <span className="screen-reader-text">Mobile Menu</span>
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
            </button>
            <div className="menu-main-menu-container">
               <ul id="primary-menu" className="menu nav-menu">
                  {/* {state.theme.headerMenu.map((item) => {
                     return (
                        <li id={"menu-item-" + item.ID} className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-" + item.ID}><Link href={item.url}>{item.title}</Link></li>
                     )
                  })} */}
                  {/* {
                     state.theme.HeaderMenuGraph && state.theme.HeaderMenuGraph.menuItems.edges.map((item) => {
                        return (
                           <li id={"menu-item-" + item.node.databaseId} className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-" + item.node.databaseId}><Link href={item.node.path}>{item.node.label}</Link></li>
                        )
                     })
                  } */}
                  {/* <li id="menu-item-33" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-33"><Link href="/contact-demo/">Contact Custom</Link></li> */}
                  <li id="menu-item-31" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-31"><Link href="/about-us/">About Us</Link></li>
                  <li id="menu-item-32" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-32"><Link href="/brands/">Brands</Link></li>
                  <li id="menu-item-34" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-34"><Link href="/news/">News</Link></li>
                  <li id="menu-item-1352" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1352"><Link href="/careers/">Careers</Link></li>
                  <li id="menu-item-33" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-33"><Link href="/contact/">Contact</Link></li>
               </ul>
            </div>
         </nav>
      </div>
   </div>
</header>
    </>
}

export async function getServerSideProps(context) {

    // const data = await getHeaderMenu();
    const query = `
    {
        query GETMenus {
            menus {
              nodes {
                id
                databaseId
                name
                menuItems {
                  edges {
                    node {
                      id
                      databaseId
                      label
                      parentId
                      path
                    }
                  }
                }
              }
            }
          }
    }
  `
    const headers = { 'Content-Type': 'application/json' }
    const res = await fetch('https://prj-frontity-tro.md-staging.com/graphql', {
        headers,
        method: 'POST',
        body: JSON.stringify({
          query,
        }),
      })
      console.log('query', query)
    
      const json = await res.json()
      console.log('json', json)
    // console.log('dsdsds',post)
    return {
      props: {data}, // will be passed to the page component as props
    }
  }