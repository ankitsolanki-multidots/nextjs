import Link from 'next/link'
import Image from 'next/image'


export default function Header(data) {
    return <>
        <header id="masthead" className="site-header">
   <div className="container">
      <div className="header-raw">
         <div className="site-branding">
            <Link href="/" className="custom-logo-link" rel="home" aria-current="page">
            <Image src="https://prj-tropicana.md-staging.com/wp-content/uploads/2022/01/Tropicana-Brands-Group-408x116.webp" className="main_logo_header" alt="Tropicana Brands" width={408} height={116} /></Link>
         </div>
         <nav id="site-navigation" className="main-navigation">
            <button className="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
            <span className="screen-reader-text">Mobile Menu</span>
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
            </button>
            <div className="menu-main-menu-container">
               <ul key={Math.random()} id="primary-menu" className="menu nav-menu">
                  {/* {state.theme.headerMenu.map((item) => {
                     return (
                        <li id={"menu-item-" + item.ID} className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-" + item.ID}><Link href={item.url}>{item.title}</Link></li>
                     )
                  })} */}
                  {
                     data.headers && data.headers.map((item) => {
                        return (
                           <li key={Math.random()} id={"menu-item-" + item.node.databaseId} className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-" + item.node.databaseId}><Link href={item.node.path}>{item.node.label}</Link></li>
                        )
                     })
                  }
                  {/* <li id="menu-item-33" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-33"><Link href="/contact-demo/">Contact Custom</Link></li> */}
                  {/* <li id="menu-item-31" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-31"><Link href="/about-us/">About Us</Link></li>
                  <li id="menu-item-32" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-32"><Link href="/brands/">Brands</Link></li>
                  <li id="menu-item-34" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-34"><Link href="/news/">News</Link></li>
                  <li id="menu-item-1352" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1352"><Link href="/careers/">Careers</Link></li>
                  <li id="menu-item-33" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-33"><Link href="/contact/">Contact</Link></li> */}
               </ul>
            </div>
         </nav>
      </div>
   </div>
</header>
    </>
}