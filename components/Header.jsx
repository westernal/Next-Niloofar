import React, { useState } from 'react';
import { useEffect } from 'react';
import Link from "next/link"
import { useRouter } from 'next/dist/client/router';

const Header = () => {

  let history = useRouter();
    
    
    useEffect(() => {   
      
      if (localStorage.getItem('token') != "" && localStorage.getItem('token') != null ) {
        
        const https = require('https');

        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
          });
        var requestOptions = {
          method: 'GET',
          headers: { 'x-auth-token': `${localStorage.getItem('token')}`
        },
          redirect: 'follow',
          agent: httpsAgent
        };
        
        fetch("https://server.niloofarclinic.beauty/api/user/details", requestOptions)
          .then(response => response.json())
          .then(result => {
              
              localStorage.setItem('name', result.name);
              localStorage.setItem('number', result.mobileNumber);
              if (result.name != undefined) {
                document.getElementById('mpp').style.display = "flex";
              document.getElementById('mpi').style.display = "none";
              document.getElementById('username').innerText = result.name;
              }
              
              
             
      
          })
          .catch(error => console.log('error', error));
      }
        
   
        
            
             
            

            

  },[])

  
  function logOut(e) {
    e.preventDefault();
    localStorage.setItem('type', "");
    localStorage.setItem('token', "");
    localStorage.setItem('name', "");
    localStorage.setItem('number', "");
    history.push('/');
  }
 

    function hover(e) {
        
        
        if (e.target.querySelector('.active-') != null) {
            e.target.querySelector('.active-').style.opacity = "1";
        } else {
            e.target.style.opacity = "1";
        }
        
        
    }

    function endhover(e) {
        if (e.target.querySelector('.active-') != null) {
            e.target.querySelector('.active-').style.opacity = "0";
        } else {
            for (let index = 0; index < 6; index++) {
           document.getElementsByClassName("active-")[index].style.opacity = "0";
        
            }
        }
        
        
    }

    function opennav(e) {
        e.preventDefault();
        document.getElementById("myNav").style.width = "100%";
        document.getElementById("myNav").style.height = "100%";
      }
      
      function closenav() {
        document.getElementById("myNav").style.width = "0%";
      }

      function goToDash(e) {
          e.preventDefault();
          if(localStorage.getItem("type") == "end-user"){
            history.push('/user-dash/userprofile');
          } 

          if(localStorage.getItem("type") == "admin") {
            history.push('/admin-dash');
          }
      }


    return ( 
        <div className="header">
        <div id="myNav" className="overlay">
        <a href="#" className="closebtn" onClick={closenav} >&times;</a>
        <div className="overlay-content">
        <Link href="/"  className="mactive">   صفحه اصلی </Link>
            <Link href="/service" className="sactive">   خدمات  </Link>
            <Link href="/works"  className="wactive"> نمونه کارها </Link>
            <Link href="/about" className="aactive">  درباره مطب </Link>
            <Link href="/contact" className="cactive"> تماس با مطب </Link>
            <a href="https://nilooz.com/" className="bactive">  بلاگ</a>
            <Link href="/login">ورود به حساب کاربری</Link>
            <Link href="/signup">ثبت  حساب کاربری</Link>
            <a  href="#" onClick={logOut}>خروج از حساب کاربری</a>
        </div>
      </div>
    
   
        <div className="mp-header">
            <div className="mpr">
                
                <a href="#" onClick={goToDash} className="mp-profile"   id="mpp"> <img src="/Images/Group 238 (2).svg" alt="" /> <p id="username"> </p>
                  </a>
                
            <div className="mp-responsive">
           <a > <img src="/Images/Burger.svg" alt="" className="burger-menu" onClick={opennav}/> </a>
           </div>
           <div className="mp-responsive">
           <a href="https://instagram.com/niloofarclinic"> <img src="/Images/instagram.png" alt="" id="insta" /> </a>
           </div>
          
     
            <div className="mph-info" id="mpi">
                 <Link href="/signup"><button>ثبت نام</button></Link>  
                   <Link href="/login"><a > <p>ورود</p> </a></Link> 
                    <div className="mp-responsive">
                   <a href="tel:02126428963"><img src="/Images/Phone.svg" alt="" /> </a> 
            </div>
        </div>
        </div>
        
            <div className="mp-nav">
                
               
               <ul>
                <li><a href="https://nilooz.com/" className="navItem" id="bactive" onMouseEnter={hover} onMouseLeave={endhover}><div className="active-"></div>بلاگ</a></li> 
                 <li><Link href="/contact" className="navItem" id="cactive" onMouseEnter={hover} onMouseLeave={endhover}><a><div className="active-"></div>تماس با مطب </a></Link></li> 
                <li><Link href="/about" className="navItem" id="aactive" onMouseEnter={hover} onMouseLeave={endhover}><a><div className="active-"></div>درباره مطب </a></Link></li> 
                 <li><Link href="/works" className="navItem" id="wactive" onMouseEnter={hover} onMouseLeave={endhover}><a><div className="active-"></div>نمونه کارها </a></Link></li> 
                  <li><Link href="/service"  className="navItem" id="sactive" onMouseEnter={hover} onMouseLeave={endhover}><a><div className="active-"></div>خدمات </a></Link></li> 
                <li><Link href="/" className="navItem" id="mactive" onMouseEnter={hover} onMouseLeave={endhover}><a><div className="active-"></div>صفحه اصلی </a></Link></li> 
               </ul>
           </div>
           <div className="mp-logo">
             <Link href="/"><img src="/Images/header-logo.svg" alt=""/></Link>
           </div>
        </div>
        </div>
     );
}
 
export default Header;