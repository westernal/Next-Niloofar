import React from 'react';
import Header from '../../components/Header';
import { useEffect } from 'react';
import title from "../../public/Images/persian title.svg"
import PWAFooter from '../../components/PWAFooter';
import UserNav from '../../components/UserNav';
import profile2 from "../../public/Images/Group 12998.svg"
import Link from "next/link"
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head'



const Welcome = () => {
   

    let history = useRouter();
    var name;
   
    function logOut(e) {
        e.preventDefault();
        localStorage.setItem('type', "");
        localStorage.setItem('token', "");
        localStorage.setItem('name', "");
          localStorage.setItem('number', "");
          history.push('/');
      }

   

useEffect(() => {
    name = localStorage.getItem('name');
    if (localStorage.getItem("token") == "" || localStorage.getItem("token") == undefined) {
        history.push("/")
    }
    var requestOptions = {
    method: 'GET',
    headers: { 'x-auth-token': `${localStorage.getItem('token')}`
  },
    redirect: 'follow'
  };
  
  fetch("https://server.niloofarclinic.beauty/api/user/details", requestOptions)
    .then(response => response.json())
    .then(result => {
        
        localStorage.setItem('name', result.name);
        localStorage.setItem('number', result.mobileNumber);
        
        document.getElementById('username2').innerText = result.name;

    })
    .catch(error => console.log('error', error));
},[])




    


    return ( 
        <div className="welcome">
            <Header />
            <Head>
    <title> خوش آمدید - کلینیک زیبایی نیلوفر</title>
        </Head>
            <div className="survey">
                <div className="wlc-res">
                <div className="ws-user">
            <img src={profile2} alt="" />
            <h2> {name && name}</h2>
        
        </div>
        <div className="ws-nav">
        
        <Link href="/user-dash/userprofile"><div className="ws">
        <p id="rarrow">{"<"}</p>
             <div className="ws-users" >
             <p>پروفایل</p>
             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<path fillRule="evenodd" clipRule="evenodd" d="M16.533 15.1609C16.533 17.9075 12.7663 18.225 9.93384 18.225L9.73115 18.2248C7.92651 18.2205 3.33301 18.1065 3.33301 15.1442C3.33301 12.4536 6.9483 12.094 9.75925 12.0804L10.1365 12.0802C11.941 12.0846 16.533 12.1985 16.533 15.1609ZM9.93384 13.33C6.38301 13.33 4.58301 13.94 4.58301 15.1442C4.58301 16.3592 6.38301 16.975 9.93384 16.975C13.4838 16.975 15.283 16.365 15.283 15.1609C15.283 13.9459 13.4838 13.33 9.93384 13.33ZM9.93384 1.66635C12.3738 1.66635 14.358 3.65135 14.358 6.09135C14.358 8.53135 12.3738 10.5155 9.93384 10.5155H9.90718C7.47218 10.508 5.49967 8.52218 5.50798 6.08885C5.50798 3.65135 7.49301 1.66635 9.93384 1.66635ZM9.93384 2.85635C8.14968 2.85635 6.69799 4.30718 6.69799 6.09135C6.69218 7.86968 8.13301 9.31968 9.90968 9.32635L9.93384 9.92135V9.32635C11.7172 9.32635 13.168 7.87468 13.168 6.09135C13.168 4.30718 11.7172 2.85635 9.93384 2.85635Z" fill="#949494"/>
</svg>

         </div>
         
         </div></Link>
         <Link href="/user-dash/userdash"><div className="ws">
         <p id="rarrow">{"<"}</p>
              <div className="ws-blog" >
             <p>پرسشنامه</p>
             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<path fillRule="evenodd" clipRule="evenodd" d="M11.6461 1.66699C11.6819 1.66699 11.7169 1.67001 11.7511 1.67579L11.8651 1.67649C12.0351 1.67649 12.1976 1.74566 12.316 1.86816L16.5368 6.26566C16.6485 6.38149 16.7111 6.53733 16.7111 6.69816V14.3365C16.726 16.4273 15.0976 18.1357 13.0035 18.2207L6.32098 18.2215H6.23014C4.18852 18.1754 2.55111 16.5242 2.50123 14.5025L2.50098 5.40899C2.54931 3.34149 4.25681 1.67649 6.30931 1.67649L11.541 1.67579C11.5752 1.67001 11.6103 1.66699 11.6461 1.66699ZM11.021 2.92616L6.31098 2.92649C4.93014 2.92649 3.78348 4.04483 3.75098 5.42399V14.3365C3.72014 15.764 4.84514 16.9398 6.25848 16.9715H12.9785C14.3693 16.914 15.471 15.7582 15.461 14.3415L15.461 7.48616L13.7861 7.48699C12.2611 7.48283 11.0211 6.23949 11.0211 4.71616L11.021 2.92616ZM11.4904 12.1737C11.8354 12.1737 12.1154 12.4537 12.1154 12.7987C12.1154 13.1437 11.8354 13.4237 11.4904 13.4237H6.99039C6.64539 13.4237 6.36539 13.1437 6.36539 12.7987C6.36539 12.4537 6.64539 12.1737 6.99039 12.1737H11.4904ZM9.78631 9.04708C10.1313 9.04708 10.4113 9.32708 10.4113 9.67208C10.4113 10.0171 10.1313 10.2971 9.78631 10.2971H6.98964C6.64464 10.2971 6.36464 10.0171 6.36464 9.67208C6.36464 9.32708 6.64464 9.04708 6.98964 9.04708H9.78631ZM12.271 3.62699L12.2711 4.71616C12.2711 5.55283 12.9519 6.23449 13.7877 6.23699L14.776 6.23616L12.271 3.62699Z" fill="#949494"/>
</svg>

         </div>
       
         </div></Link>
         <Link href="/user-dash/yalda"><div className="ws">
              <p id="rarrow">{"<"}</p>
                  <div className="ws-yalda" >
             <p>شانس و قرعه کشی</p>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
<path d="M19.9707 10H3.9707V18C3.9707 21 4.9707 22 7.97071 22H15.9707C18.9707 22 19.9707 21 19.9707 18V10Z" stroke="#949494" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.501 6.99966V7.99966C21.501 9.09966 20.971 9.99966 19.501 9.99966H4.50098C2.97098 9.99966 2.50098 9.09966 2.50098 7.99966V6.99966C2.50098 5.89966 2.97098 4.99966 4.50098 4.99966H19.501C20.971 4.99966 21.501 5.89966 21.501 6.99966Z" stroke="#949494" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.6408 4.99975H6.12076C5.78076 4.62976 5.79076 4.05976 6.15076 3.69976L7.57076 2.27976C7.94076 1.90976 8.55076 1.90976 8.92076 2.27976L11.6408 4.99975Z" stroke="#949494" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.8706 4.99975H12.3506L15.0706 2.27976C15.4406 1.90976 16.0506 1.90976 16.4206 2.27976L17.8406 3.69976C18.2006 4.05976 18.2106 4.62976 17.8706 4.99975Z" stroke="#949494" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.94043 10V15.14C8.94043 15.94 9.82043 16.41 10.4904 15.98L11.4304 15.36C11.7704 15.14 12.2004 15.14 12.5304 15.36L13.4204 15.96C14.0804 16.4 14.9704 15.93 14.9704 15.13V10H8.94043Z" stroke="#949494" strokeWidth="1.2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

         </div>
         
         </div></Link>
       
         
         <a href="#" onClick={logOut}><div className="ws">
         <p id="rarrow">{"<"}</p>
             <div className="ws-out"  >
             <p>خروج از حساب</p>
             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<path fillRule="evenodd" clipRule="evenodd" d="M9.42366 1.66666C11.462 1.66666 13.1203 3.32499 13.1203 5.36332V6.13999C13.1203 6.48499 12.8403 6.76499 12.4953 6.76499C12.1503 6.76499 11.8703 6.48499 11.8703 6.13999V5.36332C11.8703 4.01332 10.7728 2.91666 9.42366 2.91666H5.36116C4.01366 2.91666 2.91699 4.01332 2.91699 5.36332V14.6375C2.91699 15.9867 4.01366 17.0833 5.36116 17.0833H9.43283C10.7762 17.0833 11.8703 15.99 11.8703 14.6467V13.8608C11.8703 13.5158 12.1503 13.2358 12.4953 13.2358C12.8403 13.2358 13.1203 13.5158 13.1203 13.8608V14.6467C13.1203 16.68 11.4653 18.3333 9.43283 18.3333H5.36116C3.32449 18.3333 1.66699 16.6758 1.66699 14.6375V5.36332C1.66699 3.32499 3.32449 1.66666 5.36116 1.66666H9.42366ZM16.1571 7.12832L18.5971 9.55749C18.6188 9.57909 18.6383 9.60155 18.6562 9.62532L18.5971 9.55749C18.6266 9.5866 18.6529 9.61841 18.6756 9.65233C18.6857 9.6677 18.6953 9.68359 18.7043 9.69992C18.7116 9.71268 18.7183 9.726 18.7245 9.73954C18.7297 9.75151 18.7348 9.76348 18.7395 9.77563C18.7458 9.79147 18.7513 9.80775 18.7561 9.82425C18.7597 9.83724 18.7631 9.85021 18.766 9.86333C18.7697 9.87924 18.7726 9.89526 18.775 9.91139C18.7763 9.92188 18.7775 9.93288 18.7785 9.94396C18.7804 9.96296 18.7812 9.98144 18.7812 9.99999L18.777 10.0517L18.7753 10.0848C18.7751 10.0862 18.7749 10.0876 18.7747 10.089L18.7812 9.99999C18.7812 10.0462 18.7761 10.0921 18.7662 10.1366C18.7631 10.1498 18.7597 10.1627 18.756 10.1755C18.7513 10.1922 18.7458 10.2085 18.7396 10.2245C18.7348 10.2365 18.7297 10.2485 18.7243 10.2602C18.7183 10.274 18.7116 10.2873 18.7044 10.3004C18.6953 10.3164 18.6857 10.3323 18.6753 10.3477C18.6695 10.3568 18.6631 10.3658 18.6564 10.3747C18.6366 10.4008 18.6149 10.4254 18.5915 10.4481L16.1571 12.8725C16.0354 12.9942 15.8754 13.055 15.7162 13.055C15.5562 13.055 15.3954 12.9942 15.2737 12.8708C15.0304 12.6258 15.0312 12.2308 15.2754 11.9875L16.642 10.625H8.12183C7.77683 10.625 7.49683 10.345 7.49683 9.99999C7.49683 9.65499 7.77683 9.37499 8.12183 9.37499H16.6437L15.2754 8.01332C15.0312 7.76999 15.0296 7.37499 15.2737 7.12999C15.5171 6.88499 15.9121 6.88499 16.1571 7.12832Z" fill="#4E4E4E"/>
</svg>
         </div>
         </div>
         </a>
         <Link href="/user-dash/yalda"><div className="yalda-pic"><img src="/Images/Rectangle 160.jpg" alt="" />
         <p>جشنواره یلدایی  <br /> نیلوفر</p>
         </div></Link> 
     </div>
                </div>
            <div className="dash-main">
                   <div className="dash-sec1">
                     <h2><p id="username2"></p> عزیز به</h2>
                     <img src={title} alt="" id="ds-title" />
                     <h2>خوش آمدید</h2>
                     <img src="/Images/pixeltrue-welcome-1 1.jpg" alt="" id="wlc-pic"/>
                
                   </div>
              <UserNav />
            </div>
            </div>
            <PWAFooter />
        </div>
     );
}
 
export default Welcome;