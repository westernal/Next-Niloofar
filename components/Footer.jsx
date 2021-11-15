import React from 'react';
import Telegram from "../public/Images/telegram (1) 1.svg"
import insta from "../public/Images/instagram (1) 1.svg"
import Youtube from "../public/Images/youtube 1.svg"
import Twitter from "../public/Images/twitter (2) 1.svg"
import FooterLogo from "../public/Images/g10.svg"
import Link from "next/link"

const Footer = () => {
    return ( 
        <div className="mp-footer">
        <div className="socials">
            <h5>صفحات رسمی ما در شبکه های اجتماعی</h5>
            <div className="socials-logo">
               {/* <a href="#"> <img src={Telegram} alt="" /></a> 
               <a href="#"> <img src={Youtube} alt="" /></a>  */}
                <a href="https://www.instagram.com/niloofarclinic/">   <img src={insta} alt="" /> </a>
                {/* <a href="#"> <img src={Twitter} alt="" /></a>  */}
            </div>
        </div>
        <div className="footer-logo">
            <img src={FooterLogo} alt="" />
            <h6> تمام حقوق مادی و معنوی این وبسایت برای مطب زیبایی نیلوفر محفوظ است</h6>
        </div>
        <div className="footer-nav">
            <div className="nav1">
                <ul>
                    <li><Link href="/works"><a > نمونه کارها </a></Link> </li>
                    <li><a href="https://nilooz.com/" > نیلوز</a></li>
                    <li><Link href="/contact"><a> درخواست مشاوره </a></Link></li>
                </ul>
            </div>
            <div className="nav1">
             <ul>
                 <li><Link href="/about"><a> درباره مطب </a></Link></li>
                 <li><Link href="/contact"><a> تماس با مطب</a></Link></li>
                 <li><Link href="/service"><a >  خدمات</a></Link></li>
             </ul>
         </div>
        </div> 
        <div className="footer-res">
         <h6> تمام حقوق مادی و معنوی این وبسایت برای مطب زیبایی نیلوفر محفوظ است</h6>
        </div>
     </div>
     );
}
 
export default Footer;