import AdminNav from "../../components/AdminNav"
import profile2 from "../../public/Images/Group 12998.svg"
import Link from "next/link"
import star from "../../public/Images/Star.svg"
import RArrow from "../../public/Images/Arrow---Right.svg"
import Header from '../../components/Header';
import { DatePicker } from "jalali-react-datepicker";
import PWAFooter from "../../components/AdminNav"
import { useEffect, useState } from 'react';
import moment from 'jalali-moment'
import Loader from "react-loader-spinner"
import NumberFormat from 'react-number-format'
import { useRouter } from "next/dist/client/router"



const User = () => {

    var status;
    const [loader,SetLoader] = useState(false);
    const [success,SetSuccess] = useState(false);
    const [fail,SetFail] = useState(false);
    const [posts,setPosts] = useState([]);
    const [index,setIndex] = useState(0);
    let history = useRouter();


  
    

    useEffect(() => {
        if (localStorage.getItem("token") == "" || localStorage.getItem("token") == undefined) {
            history.push("/")
        }

        var users;
        
        var requestOptions = {
            method: 'GET',
            headers:{ 'x-auth-token': `${localStorage.getItem('token')}`},
            redirect: 'follow'
          };
          
          fetch(`https://server.niloofarclinic.beauty/api/user/${localStorage.id}`, requestOptions)
            .then(response => response.json())
            .then(result => {
               
                users = result.sessions;
                status = result.user;
                setPosts(result);
            })
            .catch(error => console.log('error', error));

    },[])

    function addWork() {
        SetLoader(true);
        SetFail(false);
        SetSuccess(false);
        var date =  moment(document.getElementsByClassName("dp__input")[0].value, 'jYYYY/jM/jD HH:mm').format('YYYY-MM-DD') ;
        var price = document.getElementById("ufname").value;
        var category = document.getElementById("ujobs").value;
        var qty = document.getElementById("session").value
        
        var requestOptions = {
            method: 'POST',
            headers:  { 'x-auth-token': `${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'},
            body:  JSON.stringify({
                category : category,
                qty : qty,
                price : price,
                date : date 
               
                
            }),
            redirect: 'follow'
          };

          console.log(requestOptions.body);
          
          fetch(`https://server.niloofarclinic.beauty/api/contact/add/${localStorage.id}`, requestOptions)
            .then(response => {response.json()
                SetLoader(false);
                if (response.status == 200) {
                    SetSuccess(true);
                   
                    window.location.reload(false);
                }else SetFail(true);
            })
            .then(res => setPosts(res))
            
            .catch(error => console.log('error', error));
    }

    function addWork2() {
        SetLoader(true);
        SetFail(false);
        SetSuccess(false);
        var price = document.getElementById("ufname2").value;
     
        var qty = document.getElementById("session2").value

        var requestOptions = {
            method: 'PUT',
            headers:  { 'x-auth-token': `${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'},
            body:  JSON.stringify({
                price : price,
                qty : qty
            }),
            redirect: 'follow'
          };

          
          
          fetch(`https://server.niloofarclinic.beauty/api/contact/${localStorage.id2}`, requestOptions)
            .then(response => {response.json()
              SetLoader(false);
                if (response.status == 200) {
                    SetSuccess(true);
                    window.location.reload(false);
                    
                } else SetFail(true);
            })
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }


    function openModal1() {
        var modal = document.getElementById("myModal");
    
        
        var span = document.getElementsByClassName("close")[0];
          modal.style.display = "block";
       
        
        
        span.onclick = function() {
          modal.style.display = "none";
        }
        
        
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
    }

    function openModal2(e) {
        setIndex(e.target.className);
        var modal = document.getElementById("myModal2");
        localStorage.setItem("id2",e.target.querySelector("#hiddenID").innerText)
        
        var span = document.getElementsByClassName("close")[1];
          modal.style.display = "block";
       
        
        
        span.onclick = function() {
          modal.style.display = "none";
        }
        
        
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
    }



    return ( <div className="user-page1">
        <Header />
        
        <div id="myModal" className="modal">

<div className="modal-content">
<span className="close">&times;</span>
  <div className="modal-main">

 <h3>افزودن خدمات جدید </h3>
 <div className="new-forms">
 <input type="text" placeholder="مبلغ پرداخت شده" id="ufname" />
 <select name="session" id="session">
 <option value="0"  >جلسه</option>
     <option value="1">1</option>
     <option value="2">2</option>
     <option value="3">3</option>
     <option value="4">4</option>
     <option value="5">5</option>
     <option value="6">6</option>
     <option value="7">7</option>
     <option value="8">8</option>
     <option value="9">9</option>
     <option value="10">10</option>
 </select>
<select name="jobs" id="ujobs">
<option value="بوتاکس">بوتاکس</option>
                    <option value="لیزر">لیزر</option>
                    <option value="پوست کره ای">پوست کره ای</option>
                    <option value="فیلر">فیلر</option>
                    <option value="اصلاح فرم بینی">اصلاح فرم بینی</option>
                    <option value="مزوتراپی">مزوتراپی</option>
                    <option value="لیفت تخصصی با نخ">لیفت تخصصی با نخ</option>
</select>
 <div className="qi1">
   <p>تاریخ مراجعه:</p>
       <DatePicker />
       
    </div>
    
 </div>


 
 {loader && <div className="loader"><Loader color="#F03861" width={20} type="ThreeDots"/></div>}
 {success &&  <div className="loader"><p id="usit2">با موفقیت ثبت شد</p></div>}
 {fail &&  <div className="loader"><p id="usit3">مشکلی پیش آمده لطفا مجددا تلاش کنید.</p></div>}
 <div className="mm-btn"><button className="close1" onClick={addWork}> ثبت</button>  </div>
 



</div>
</div>
</div>
<div id="myModal2" className="modal">

<div className="modal-content">
<span className="close">&times;</span>
  <div className="modal-main">

 <h3> ویرایش</h3>
 <div className="new-forms">
 <input type="text"  id="ufname2" placeholder={posts && posts.sessions && posts.sessions[0] && posts.sessions[index].price} />
 <select name="session" id="session2">
 <option value="0"  >جلسه</option>
     <option value="1">1</option>
     <option value="2">2</option>
     <option value="3">3</option>
     <option value="4">4</option>
     <option value="5">5</option>
     <option value="6">6</option>
     <option value="7">7</option>
     <option value="8">8</option>
     <option value="9">9</option>
     <option value="10">10</option>
 </select>


    
 </div>
 {success &&  <div className="loader"><p id="usit2">با موفقیت ثبت شد</p></div>}
 {fail &&  <div className="loader"><p id="usit3">مشکلی پیش آمده لطفا مجددا تلاش کنید.</p></div>}
 <div className="mm-btn"><button className="close1" onClick={addWork2}> ثبت</button>  </div>
 



</div>
</div>
</div>
           <Link href="/admin-dash/dashboard2"><a>
            <div className="back-sec" id='dbs'>
            <p> مشاهده جزئیات</p>
                <img src={RArrow} alt="right arrow" />
                
        </div>
        </a></Link>
      <div className="user-page">
            <div className="user-sec1">
                <div className="us">
                <div className="user-forms">
                    <div className="uf-survey">
                        <h4>فرم پرسشنامه پذیرش کلاینت</h4>
                        <div className="uii">
                     {status &&  <p id="usit2">کامل</p>}
                     {!status &&  <p id="usit3">ناقص</p>}
                            <p id="uid">وضعیت:</p>
                        </div>
                        <Link href="/admin-dash/dashboard22"><a> <p>{">"}</p> مشاهده فرم </a></Link>
                    </div>
                    <div className="uf-survey">
                        <h4>فرم نظرسنجی</h4>
                        <div className="uii">
                        {status &&  <p id="usit2">کامل</p>}
                     {!status &&  <p id="usit3">ناقص</p>}
                            <p id="uid">وضعیت:</p>
                        </div>
                        <Link href="/admin-dash/dashboard21"><a > <p>{">"}</p> مشاهده فرم </a></Link>
                    </div>
                </div>
                <div className="user-info">
                    <div className="ui-title">
                        <h3>مشخصات فردی</h3>
                    </div>
                    <div className="ui-main">
                        <div className="ui-info">
                            <div className="uii">
                                <p id="uname">{posts && posts.user && posts.user.name} </p>
                                <p id="uid">نام و نام خانوادگی:</p>
                            </div>
                            <div className="uii">
                                <p id="unumber">{posts && posts.user && posts.user.mobileNumber}</p>
                                <p id="uid">شماره تماس:</p>
                            </div>
                            <div className="uii">
                                <p id="uage"></p>
                                <p id="uid"> سن:  </p>
                            </div>
                            <div className="uii">
                                <p id="ujob"> </p>
                                <p id="uid">شغل:</p>
                            </div>
                            <div className="uii">
                                <p id="uadd">   </p>
                                <p id="uid">ادرس:</p>
                            </div>
                        </div>
                        <div className="ui-pro">
                            <img src={profile2} alt="user's profile picture" />
                        </div>
                    </div>
                </div>
                </div>
                <button onClick={openModal1}>+ افزودن خدمات جدید </button>
                <h3>خدمات کاربر</h3>
                <div className="dash-result">
                            <div className="dr-nav">
                                <p>#</p>
                                <p>تاریخ مراجعه</p>
                                <p>نوع خدمات</p>
                                <p >جلسه </p>
                                <p id="uspec">مبلغ پرداخت شده</p>
                            </div>
                            <div className="dr-rows" id="dr-rows">
                           {posts && posts.sessions &&
                           posts.sessions.map((post,index) => {
                               return(
                                <div className="dr-row" key={index}>
                                <p id="drn">{index + 1}</p>
                                <p id="dr-date">{moment(post.date, 'YYYY-M-D HH:mm:ss').format('jYYYY/jM/jD ')}</p>
                                <p id="dr-work">{post.category}</p>
                                <p className="dr-spec"> {post.qty} </p>
                                <p className="dr-spec3">  <NumberFormat value={post.price} displayType={'text'} thousandSeparator={true} /> </p>
                                <button id="uedit" onClick={openModal2} className={index}>  <p id="hiddenID">{post._id}</p>   ویرایش <svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<path d="M16.6581 15.7944C17.1224 15.7944 17.5 16.1769 17.5 16.6472C17.5 17.1184 17.1224 17.5 16.6581 17.5H11.8997C11.4355 17.5 11.0579 17.1184 11.0579 16.6472C11.0579 16.1769 11.4355 15.7944 11.8997 15.7944H16.6581ZM13.3582 3.08255L14.5874 4.05899C15.0914 4.45314 15.4275 4.97271 15.5424 5.51916C15.6751 6.12025 15.5336 6.71059 15.1357 7.2212L7.81366 16.6899C7.47763 17.1199 6.98242 17.3618 6.45185 17.3707L3.53366 17.4066C3.37449 17.4066 3.24184 17.2991 3.20647 17.1468L2.54325 14.2712C2.42829 13.7427 2.54325 13.1963 2.87928 12.7752L8.07011 6.05664C8.15854 5.94915 8.31771 5.93213 8.42383 6.01185L10.608 7.74973C10.7495 7.86618 10.9441 7.92889 11.1475 7.90201C11.5808 7.84827 11.8726 7.45411 11.8284 7.03308C11.8018 6.81808 11.6957 6.63892 11.5542 6.50455C11.51 6.46872 9.43193 4.80251 9.43193 4.80251C9.29929 4.69501 9.27276 4.49793 9.37887 4.36446L10.2013 3.29755C10.9618 2.32111 12.2882 2.23153 13.3582 3.08255Z" fill="white"/>
</svg>
</button> 
                            </div>
                               )
                           })}
                           
                            </div>
                        </div>
                        <div className="user-points">
                            <p id="upoints">{posts && posts.score}</p>
                            <p id="up">امتیاز کل کاربر:</p>
                            <img src={star} alt="" />
                        </div>
            </div>
            <AdminNav />
            </div>
            <PWAFooter />
    </div> );
}
 
export default User;