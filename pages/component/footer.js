import Link from 'next/link'

export default function Footer(data) {
    return <>
        <footer id="colophon" className="site-footer section-col">
   <div className="container">
      <div className="site-footer-raw section-col">
         <div className="footer-section-left">
            <Link href="/" rel="home" aria-current="page">
            <img src="https://prj-tropicana.md-staging.com/wp-content/uploads/2022/01/Tropicana-Brands-Group-Footer-300x85.webp" className="main_footer_logo" alt="Tropicana Footer Logo" loading="lazy" srcSet="https://prj-tropicana.md-staging.com/wp-content/uploads/2022/01/Tropicana-Brands-Group-Footer-300x85.webp 300w, https://prj-tropicana.md-staging.com/wp-content/uploads/2022/01/Tropicana-Brands-Group-Footer-768x218.webp 768w, https://prj-tropicana.md-staging.com/wp-content/uploads/2022/01/Tropicana-Brands-Group-Footer-150x43.webp 150w, https://prj-tropicana.md-staging.com/wp-content/uploads/2022/01/Tropicana-Brands-Group-Footer-408x116.webp 408w, https://prj-tropicana.md-staging.com/wp-content/uploads/2022/01/Tropicana-Brands-Group-Footer-90x26.webp 90w, https://prj-tropicana.md-staging.com/wp-content/uploads/2022/01/Tropicana-Brands-Group-Footer.webp 1000w" sizes="(max-width: 300px) 100vw, 300px" width="300" height="85" /></Link>
         </div>
         <div className="footer-section-center">
            <nav id="site-navigation" className="main-navigation">
               <button className="menu-toggle" aria-controls="primary-menu" aria-expanded="false">Primary Menu</button>
               <div className="menu-footer-menu-container">
                  <ul id="footer-menu" className="menu">
                  {data.footers.map((item) => {
                     return (
                        <li key={item.node.databaseId} id={"menu-item-" + item.node.databaseId} className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-" + item.node.databaseId}><Link href={item.node.path}>{item.node.label}</Link></li>
                     )
                  })}
                     {/* <li id="menu-item-56" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56"><Link href="/brands/">Brands</Link></li>
                     <li id="menu-item-58" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-58"><Link href="/news/">News</Link></li>
                     <li id="menu-item-1351" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1351"><Link href="/careers/">Careers</Link></li>
                     <li id="menu-item-57" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-57"><Link href="/contact/">Contact</Link></li>
                     <li id="menu-item-55" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-55"><Link href="/privacy-policy/">Privacy Policy</Link></li>
                     <li id="menu-item-59" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-59"><Link href="/terms-of-use/">Terms of Use</Link></li> */}
                  </ul>
               </div>
            </nav>
         </div>
         <div className="footer-section-right">
            <div className="social-brandlogo section">
               <div className="copyright-logo">
                  <img src="https://prj-tropicana.md-staging.com/wp-content/uploads/2022/01/Tropicana-symbol-footer-90x135.webp" className="copyright_logo" alt="Tropicana-symbol" loading="lazy" srcSet="https://prj-tropicana.md-staging.com/wp-content/uploads/2022/01/Tropicana-symbol-footer-90x135.webp 90w, https://prj-tropicana.md-staging.com/wp-content/uploads/2022/01/Tropicana-symbol-footer-150x225.webp 150w, https://prj-tropicana.md-staging.com/wp-content/uploads/2022/01/Tropicana-symbol-footer.webp 180w" sizes="(max-width: 90px) 100vw, 90px" width="90" height="135" />                     
               </div>
            </div>
            <div className="copyright-content section-col">
               <div className="site-info">
                  ©Tropicana Brands Group and its licensors. All rights reserved.                           
               </div>
            </div>
         </div>
      </div>
   </div>
</footer>
    </>
}

export async function getStaticProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    }
  }