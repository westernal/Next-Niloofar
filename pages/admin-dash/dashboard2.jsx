import React from 'react';
import Header from '../../components/Header';
import moment from 'jalali-moment'
import RArrow from "../../public/Images/Arrow---Right.svg"
import Link from "next/link"
import { useEffect } from 'react';
import AdminNav from '../../components/AdminNav';
import PWAFooter from '../../components/PWAFooter';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head'



const Dashboard2 = () => {
    
    let history = useRouter();

   
    

    useEffect(() => {
        if (localStorage.getItem("token") == "" || localStorage.getItem("token") == undefined) {
            history.push("/")
        }
        var users;
        const https = require('https');

    const httpsAgent = new https.Agent({
        rejectUnauthorized: false,
      });

        var requestOptions = {
            method: 'GET',
            headers:  { 'x-auth-token': `${localStorage.getItem('token')}`},
            redirect: 'follow',
            agent: httpsAgent
          };
          
          fetch("https://server.niloofarclinic.beauty/api/user/list", requestOptions)
            .then(response => response.json())
            .then(result => {
             users = result; 
             
             for (let i = 0; i < users.length; i++) {
                var div3 = document.getElementsByClassName("dr-row")[0].cloneNode(true);
                div3.removeAttribute('id','hidden');
                 div3.querySelector("#drn").innerText = `${i}`;
                 div3.querySelector('#dr-name').innerText = result[i].name;
                 div3.querySelector('#dr-spec').innerText = result[i].mobileNumber;
                 div3.querySelector('#dr-date').innerText = moment(result[i].date, 'YYYY-M-D HH:mm:ss').format('jYYYY/jM/jD ');
                 div3.querySelector('#hiddenID').innerText = result[i]._id
                 div3.querySelector('button').addEventListener('click',getID);
                var div4 = document.getElementsByClassName('dr-rows')[0];
                div4.appendChild(div3);
                
             }  
            })
            .catch(error => console.log('error', error));
            
    },[])
   

   function getID(e) {
    
       localStorage.setItem('id', e.target.querySelector("#hiddenID").innerText);
       history.push('/admin-dash/user');

   }


  

    return ( 
        <div className="dash-page2">
            <Header />
            <Head>
    <title>?????????????? - ???????????? ???????????? ????????????</title>
        </Head>
            <Link href="/admin-dash/welcome2"><a >
            <div className="back-sec">
            <p>?????????? ??????????</p>
                <img src={RArrow} alt="right arrow" />
                
        </div>
        </a></Link>
            <div className="dash-main">
           
                   <div className="dash-sec1">
                     
                        <div className="add-sec1">
                           
                           
                            <h4>???????? ?????? ??????????????</h4>
                        </div>
                        <div className="df-flex">
                        <div className="dash-filter" id="df-res">
                            <div className="df1">
                            <select name="sort" id="sort" >
                                <option value="new" >???? ????????????????</option>
                                <option value="old">???? ?????????? ????????</option>
                            </select>
                            <p>???????? ???????? ???? ????????:</p>
                            </div>
                            <div className="df2">
                            <select name="filter" id="filter" >
                                <option value="category">???????? ????????</option>
                                <option value="date">?????????? ????????????????</option>
                                <option value="status">??????????</option>
                            </select>
                            <p>?????????? ???? ????????:</p>
                            </div>
                        </div>
                        </div>
                        <div className="show-options" >
                            <div className="so-number" id="sop1">
                            <select name="show" id="show" >
                                <option value="10" >10</option>
                                <option value="9">9</option>
                                <option value="8">8</option>
                                <option value="7">7</option>
                                <option value="6">6</option>
                                <option value="5">5</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                            </select>
                            <p>?????????? ?????????? ???? ???? ????????:</p>
                            </div>
                            <p >??????????: 11-20 ???? 64 ??????????</p>
                        </div>
                        <div className="ds1-main">
                        <div className="dash-filter">
                            <div className="df1">
                            <select name="sort" id="sort" >
                                <option value="new" >???? ????????????????</option>
                                <option value="old">???? ?????????? ????????</option>
                            </select>
                            <p>???????? ???????? ???? ????????:</p>
                            </div>
                            <div className="df2">
                            <select name="filter" id="filter" >
                                <option value="category">???????? ????????</option>
                                <option value="date">?????????? ????????????????</option>
                                <option value="status">??????????</option>
                            </select>
                            <p>?????????? ???? ????????:</p>
                            </div>
                        </div>
                        <div className="drslt">
                        <div className="dash-result">
                            <div className="dr-nav">
                                <p>#</p>
                                <p>?????? ?? ?????? ????????????????</p>
                                <p>?????????? ???????? ??????????</p>
                                <p > ??????????</p>
                                <p>????????????</p>
                                <p>????????????</p>
                            </div>
                            <div className="dr-rows">
                           <div className="dr-row" id="hidden" >
                                <p id="drn"></p>
                             <p id="dr-name"></p> 
                                <p id="dr-spec"></p>
                                <p id="dr-date"></p>
                                <p className="dr-spec3"></p>
                                <button onClick={getID}> <p id="hiddenID"></p> ???????????? ????????????</button>  
                            </div>
                           
                            </div>
                        </div>
                        </div>
                        <div className="so-number" id="sop2">
                            <select name="show" id="show" >
                                <option value="10" >10</option>
                                <option value="9">9</option>
                                <option value="8">8</option>
                                <option value="7">7</option>
                                <option value="6">6</option>
                                <option value="5">5</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                            </select>
                            <p >?????????? ?????????? ???? ???? ????????:</p>
                            </div>
                        </div>
                   </div>
         <AdminNav />
            </div>
            <div className="dash-pagination">
                <p id="dp-prev">{">"}</p>
                <p id="selected">1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p id="dp-next">{"<"}</p>
            </div>
            <PWAFooter />
        </div>
     );
}
 
export default Dashboard2;