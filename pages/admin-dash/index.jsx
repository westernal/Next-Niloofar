import React from 'react';
import Header from '../../components/Header';
import delete1 from "../../public/Images/Delete.svg"
import RArrow from "../../public/Images/Arrow---Right.svg"
import edit from "../../public/Images/Edit.svg"
import Link from "next/link"
import PWAFooter from '../../components/PWAFooter';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import moment from 'jalali-moment'
import AdminNav from '../../components/AdminNav';
import Head from 'next/head'


const Dashboard = () => {
   
    
    let history = useRouter();

  

  

    function addItem(event) {
        var div2 = document.getElementsByClassName("sample1")[0].cloneNode(true);
        div2.removeAttribute('id','hidden');
        var image = div2.firstChild;
        image.src = URL.createObjectURL(event.target.files[0]);
        div2.addEventListener('mouseenter',hover2);
        div2.addEventListener('mouseleave',endhover2);
        var div = document.getElementById('dsamples');
        div.appendChild(div2);
     

var formdata = new FormData();
formdata.append("photo", event.target.files[0], "file");
formdata.append("category", "none");
const https = require('https');

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });

var requestOptions = {
  method: 'POST',
  headers: { 'x-auth-token': `${localStorage.getItem('token')}`},
  body: formdata,
  redirect: 'follow',
  agent: httpsAgent
};

console.log(requestOptions.body);

fetch("https://server.niloofarclinic.beauty/api/work/add", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    }

    useEffect(() => {
        if (localStorage.getItem("token") == "" || localStorage.getItem("token") == undefined) {
            history.push("/")
        }
        const https = require('https');

    const httpsAgent = new https.Agent({
        rejectUnauthorized: false,
      });
        var requestOptions = {
            method: 'GET',
            headers: { 'x-auth-token': `${localStorage.getItem('token')}`,
            agent: httpsAgent
        },
            redirect: 'follow'
        };
        
        fetch("https://server.niloofarclinic.beauty/api/user/details", requestOptions)
            .then(response => response.json())
            .then(result => {
            
                localStorage.setItem('name', result.name);
                localStorage.setItem('number', result.mobileNumber);
               

            })
            .catch(error => console.log('error', error));

        var items;
        var size = document.getElementById('show').value;
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            agent: httpsAgent
          };
          
          fetch(`https://server.niloofarclinic.beauty/api/work/list?qty=${size}`, requestOptions)
            .then(response => response.json())
            .then(result => {
            items = result;
            for (let i = 0; i < items.length; i++) {
                
                var div2 = document.getElementsByClassName("sample1")[0].cloneNode(true);
                div2.removeAttribute('id','hidden');
                var image = div2.firstChild;
                image.src = result[i].image;
                div2.addEventListener('mouseenter',hover2);
                div2.addEventListener('mouseleave',endhover2);
                var div = document.getElementById('dsamples');
                div.appendChild(div2);
//
                var div3 = document.getElementsByClassName("dr-row")[0].cloneNode(true);
                div3.removeAttribute('id','hidden');
                var image2 = div3.querySelector('#dr-pro');
                
                 div3.querySelector("#drn").innerText = `${i}`;
                 div3.querySelector('.dr-spec').innerText = result[i].category;
                 div3.querySelector('#dr-date').innerText = moment(result[i].date, 'YYYY-M-D HH:mm:ss').format('jYYYY/jM/jD ');
                 div3.querySelector('#deleter').addEventListener('click',function (e) {
                     e.preventDefault();
                     handleDelete(result[i]._id);
                 })
                image2.src = result[i].image;
                
                var div4 = document.getElementById('dr-rows');
                div4.appendChild(div3);
            }

            
        var files = document.getElementsByClassName("dfile");
        var samples = document.getElementsByClassName("dsample");

      

        for (let i = 0; i < files.length; i++) {
            wrapper(i);
        }
        function wrapper(ilocal) {
            
            files[ilocal].addEventListener('change', function (e) {
              
                loadFile(e,ilocal);
            })
        }

        function loadFile(event,i) {
           
      
         samples[i].src = URL.createObjectURL(event.target.files[0]);
         handleDelete(items[i-1]._id);
         var formdata = new FormData();
            formdata.append("photo", event.target.files[0], "file");
            formdata.append("category", "none");

            var requestOptions = {
            method: 'POST',
            headers: { 'x-auth-token': `${localStorage.getItem('token')}`},
            body: formdata,
            redirect: 'follow',
            agent: httpsAgent
            };

            fetch("https://server.niloofarclinic.beauty/api/work/add", requestOptions)
            .then(response => {response.json()
                if (response.status == 200) {
                    window.location.reload(false);
                }
            })
            .catch(error => console.log('error', error));
        }
            })
            .catch(error => console.log('error', error));

    },[])

   


    function handleDelete(id) {
      
        
        const https = require('https');

    const httpsAgent = new https.Agent({
        rejectUnauthorized: false,
      });

        var requestOptions = {
        method: 'DELETE',
        headers: { 'x-auth-token': `${localStorage.getItem('token')}`},
        redirect: 'follow',
        agent: httpsAgent
        };

        fetch(`https://server.niloofarclinic.beauty/api/work/${id}/remove`, requestOptions)
        .then(response => {response.json()
            if (response.status == 200) {
                window.location.reload(false);
            }
        })
        
        .catch(error => console.log('error', error));
    }


    

    function hover2(e) {
        
        if (e.target.querySelector('.sample-edit') != null  ) {
            e.target.querySelector('.sample-edit').style.opacity = "1";
            
        } else {
            e.target.style.opacity = "1";
            if (e.target.nextSibling != null) {
                e.target.nextSibling.style.opacity = "1";
            }
            
        }
        
    }

    function endhover2(e) {
        if (e.target.querySelector('.sample-edit') != null  ) {
            e.target.querySelector('.sample-edit').style.opacity = "0";
            
        } else {
            for (let index = 0; index < 5; index++) {
                document.getElementsByClassName("sample-edit")[index].style.opacity = "0";
             
                 }   
        } 
    }

   

    
    return ( 
        <div className="dash-page">
            <Header /><Head>
    <title>پروفایل - کلینیک زیبایی نیلوفر</title>
        </Head>
            <Link href="/admin-dash/welcome2"><a>
            <div className="back-sec">
            <p> کاربران</p>
                <img src={RArrow} alt="right arrow" />
                
        </div>
        </a></Link>
            <div className="dash-main" id='dshm'>
           
                   <div className="dash-sec1">
                       <div className="ds1-title">
                       <h4>نمونه کارهای اصلی</h4>
                       </div>
                        <div className="samples1" id="dsamples">
                        
                    
                             <div className="sample1" id="hidden" onMouseEnter={hover2} onMouseLeave={endhover2}>
                             <img src="/Images/Rectangle 16.jpg" alt="" id="sample1"  className="dsample"/> 
                             <div className="sample-edit">
                             <input id="file" type="file" className="dfile" />
                                 <p>تغییر نمونه کار</p>
                                 <img src={edit} alt="" id="output2"/>
                             </div>   
                             
                             </div> 
                           
                        </div>
                        <div className="add-sec">
                           
                            <button id="sop1">افزودن + <input id="file" type="file" onChange={addItem}/></button>
                            <h4>لیست همه نمونه کارها</h4>
                        </div>
                        <div className="df-flex">
                        <div className="dash-filter" id="df-res">
                            <div className="df1">
                            <select name="sort" id="sort" >
                                <option value="new" >از جدیدترین</option>
                                <option value="old">از قدیمی ترین</option>
                            </select>
                            <p>مرتب سازی بر اساس:</p>
                            </div>
                            <div className="df2">
                            <select name="filter" id="filter" >
                                <option value="category">دسته بندی</option>
                                <option value="date">تاریخ بارگزاری</option>
                                <option value="status">وضعیت</option>
                            </select>
                            <p>فیلتر بر اساس:</p>
                            </div>
                        </div>
                        </div>
                        <div className="show-options">
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
                            <p>تعداد نمایش در هر صفحه:</p>
                            </div>
                            <p>نمایش: 11-20 از 64 نتیجه</p>
                        </div>
                        <div className="ds1-main">
                        <div className="dash-filter">
                            <div className="df1">
                            <select name="sort" id="sort" >
                                <option value="new" >از جدیدترین</option>
                                <option value="old">از قدیمی ترین</option>
                            </select>
                            <p>مرتب سازی بر اساس:</p>
                            </div>
                            <div className="df2">
                            <select name="filter" id="filter" >
                                <option value="category">دسته بندی</option>
                                <option value="date">تاریخ بارگزاری</option>
                                <option value="status">وضعیت</option>
                            </select>
                            <p>فیلتر بر اساس:</p>
                            </div>
                        </div>
                        <div className="dash-result">
                            <div className="dr-nav">
                                <p>#</p>
                                <p>تصویر</p>
                                <p>تاریخ</p>
                                <p >دسته بندی</p>
                                <p>وضعیت</p>
                            </div>
                            <div className="dr-rows" id="dr-rows">
                           <div className="dr-row" id="hidden">
                                <p id="drn"></p>
                                <img src="/Images/Rectangle 16.jpg" alt="" id="dr-pro"/>
                                <p id="dr-date"></p>
                                <p className="dr-spec"></p>
                                <p className="dr-spec2">اصلی</p>
                                <a href="#" onClick={handleDelete} id="deleter">  <img src={delete1} alt="" id="dr-del"/> </a> 
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
                            <p >تعداد نمایش در هر صفحه:</p>
                            </div>
                   </div>
                  <AdminNav />
            </div>
            <div className="dash-pagination" id="hidden">
                <p id="dp-prev">{">"}</p>
                <p id="selected">1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p id="dp-next">{"<"}</p>
            </div>
            <div className="add-sec" id="sop2">
                           
                           <button>افزودن + <input id="file" type="file" onChange={addItem}/></button>
                           
                       </div>
            <PWAFooter />
        </div>
     );
}
 
export default Dashboard;