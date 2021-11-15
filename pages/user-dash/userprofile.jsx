import React from 'react';
import Header from '../../components/Header';
import { useEffect,useState } from 'react';
import PWAFooter from '../../components/PWAFooter';
import UserNav from '../../components/UserNav';
import RArrow from "../../public/Images/Arrow---Right.svg"
import Link from "next/link"
import Loader from "react-loader-spinner"
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head'



const UserProfile = () => {
    
    let history = useRouter();


  
    

    const [loader,SetLoader] = useState(false);
    const [success,SetSuccess] = useState(false);
    const [fail,SetFail] = useState(false);

 


useEffect(() => {
    if (localStorage.getItem("token") == "" || localStorage.getItem("token") == undefined) {
        history.push("/")
    }
    document.getElementById("ename").placeholder = localStorage.getItem('name');
    document.getElementById("enumber").placeholder = localStorage.getItem('number');
},[])



    function changeName(e) {
        SetLoader(true);
        SetFail(false);
        SetSuccess(false); 
        let name = document.getElementById("ename").value;
        const https = require('https');

        if (name=="") {
            name = document.getElementById("ename").placeholder;
        }

    const httpsAgent = new https.Agent({
        rejectUnauthorized: false,
      });

        var requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json',
            'x-auth-token': `${localStorage.getItem('token')}`,
            agent: httpsAgent
        },
          body: JSON.stringify({
              name : name
          }),
            redirect: 'follow'
          };
          
          fetch("https://server.niloofarclinic.beauty/api/user/update", requestOptions)
            .then(response => {response.json() 
                SetLoader(false);
                if (response.status == 200) {
                   SetSuccess(true);
                   window.location.reload(false);
                    localStorage.setItem('name', name);
                } else SetFail(true)
            }
           
            )
           
            .catch(error => console.log('error', error));
        
    }


    return ( 
        <div className="user-profile">
            <Header />
            <Head>
    <title>پروفایل - کلینیک زیبایی نیلوفر</title>
        </Head>
            <div className="survey">
            <Link href="/user-dash/welcome"><div className="back-sec">
            <p>پروفایل</p>
                <img src={RArrow} alt="right arrow" />
                
        </div></Link>
            <div className="dash-main">
                   <div className="dash-sec1">
                    
                     <div className="edit-main">
                    
                     <div className="edit-form">
                         
                         <input type="text" id="ename"/>
                         <input type="text" id="enumber" readOnly />
                        <div className="edit-btn2"><button onClick={changeName}>ویرایش اطلاعات</button></div> 
                        {loader && <div className="loader"><Loader color="#F03861" width={20} type="ThreeDots"/></div>}
                       {success && <p id="usit2">اطلاعات با موفقیت بروز شد</p>} 
                       {fail &&  <div className="loader"><p id="usit3">مشکلی پیش آمده لطفا مجددا تلاش کنید.</p></div>}
                     </div>
                     </div>
                  
                
                   </div>
                   <UserNav />
            </div>
            </div>
            <PWAFooter />
        </div>
     );
}
 
export default UserProfile;