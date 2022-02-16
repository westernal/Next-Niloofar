import React from 'react';
import Header from '../../components/Header';
import Link from "next/link";
import PWAFooter from '../../components/PWAFooter';
import AdminNav from '../../components/AdminNav';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';



const Dashboard22 = () => {

  
  let history = useRouter();



 
  useEffect(() => {

    if (localStorage.getItem("token") == "" || localStorage.getItem("token") == undefined) {
        history.push("/")
    }

    var requestOptions = {
        method: 'GET',
        headers:{ 'x-auth-token': `${localStorage.getItem('token')}`},
        redirect: 'follow'
      };
      
      fetch(`https://server.niloofarclinic.beauty/api/user/${localStorage.id}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            
            if (result.user.questionnaire != undefined) {
               document.getElementsByClassName("questions2")[0].innerHTML = result.user.questionnaire;
            } else {
               document.getElementsByClassName("questions2")[0].innerText = "کاربر فرم پرسشنامه خود را پر نکرده است"
            }
            
        })
        .catch(error => console.log('error', error));

},[])

    function hover2(e) {
        
        
        if (e.target.querySelector('.active-') != null) {
            e.target.querySelector('.active-').style.opacity = "1";
        } else {
            e.target.style.opacity = "1";
        }
        
        
    }

    function endhover2(e) {
        if (e.target.querySelector('.active-') != null) {
            e.target.querySelector('.active-').style.opacity = "0";
        } else {
            for (let index = 0; index < 6; index++) {
           document.getElementsByClassName("active-")[index].style.opacity = "0";
        
            }
        }
        
        
    }

    return ( 
        <div className="dash-page2" id="q2v">
            <Header />
            <Head>
    <title>کاربران - کلینیک زیبایی نیلوفر</title>
        </Head>
            <Link href="/admin-dash/dashboard2"><a> <div className="back-sec" id='dbs'>
            <p>  فرم پرسشنامه پذیرش کلاینت</p>
                <img src="/Images/Arrow---Right.svg" alt="right arrow" />
                
        </div>
        </a></Link>
            <div className="survey">
            <div className="dash-main">
                   <div className="dash-sec1">
                   
                     <div className="blog-nav">
                     <div className="mp-nav">
               <ul>
                
                 <li><a href="#" className="wnav" id="active" onMouseEnter={hover2} onMouseLeave={endhover2} ><div className="active-"></div> فرم پرسشنامه پذیرش کلاینت</a></li> 
               </ul>
           </div> 
           </div>  
          
<div className="questions2" >

</div>

               
                   </div>
             <AdminNav />
            </div>
            </div>
            <PWAFooter />
        </div>
     );
}
 
export default Dashboard22

