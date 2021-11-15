import React from 'react';
import Header from '../../components/Header';
import PWAFooter from '../../components/PWAFooter';
import { DatePicker } from "jalali-react-datepicker";
import UserNav from '../../components/UserNav';
import RArrow from "../../public/Images/Arrow---Right.svg"
import Link from "next/link"
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head'
import { useEffect } from 'react';




const UserDash = () => {
  let history = useRouter();


  useEffect(() => {
    if (localStorage.getItem("token") == "" || localStorage.getItem("token") == undefined) {
        history.push("/")
    }
    
},[])
  
   

    
    function handleSurvey(e) {
      e.preventDefault();
      var survey = document.getElementsByClassName("questions1")[0];
      var success = document.querySelector(".questions1 #hidden");
    
      
      var requestOptions = {
        method: 'PUT',
        headers: { 'x-auth-token': `${localStorage.getItem('token')}`,
        "Content-Type": "application/json"
      },
        body: JSON.stringify({
          "survey": survey.outerHTML
        }),
        redirect: 'follow'
      };
     
      fetch("https://server.niloofarclinic.beauty/api/user/survey", requestOptions)
        .then(response => {response.json();

        
          if (response.ok) {
            success.removeAttribute('id','hidden');
          }
        })
        .catch(error => console.log('error', error));
    }

    function handleQ(e) {
      e.preventDefault();
      var survey = document.getElementsByClassName("questions2")[0];
      var success = document.querySelector(".questions2 #hidden");

      var requestOptions = {
        method: 'PUT',
        headers: { 'x-auth-token': `${localStorage.getItem('token')}`,
        "Content-Type": "application/json"
      },
        body: JSON.stringify({
          "questionnaire": survey.outerHTML
        }),
        redirect: 'follow'
      };

      
      
      fetch("https://server.niloofarclinic.beauty/api/user/questionnaire", requestOptions)
        .then(response => {response.json();
         
          if (response.ok) {
            success.removeAttribute('id','hidden');
          }
        })
        .catch(error => console.log('error', error));
      
    }
  




    function q1Handler(e) {
        e.preventDefault();
        var wnav = document.getElementsByClassName('wnav');
        var q1 = document.getElementsByClassName('questions1');
        var q2 = document.getElementsByClassName('questions2');
      

       
            wnav[1].removeAttribute('id');
     
        wnav[1].setAttribute("id","b-nav");
        
        wnav[0].setAttribute("id","active");
     
        
        
        
            q1[0].style.display = "block";
        q2[0].style.display =  "none";
        
        
    }

    function q2Handler(e) {
        e.preventDefault();
        var wnav = document.getElementsByClassName('wnav');
        var q1 = document.getElementsByClassName('questions1');
        var q2 = document.getElementsByClassName('questions2');
       
            wnav[0].removeAttribute('id');
     
        wnav[0].setAttribute("id","b-nav");
        
        wnav[1].setAttribute("id","active");
     
        
        
            q2[0].style.display = "block";
        q1[0].style.display =  "none";
        
            
        
        
    }
    

    function check(e) {
      e.target.setAttribute("checked","true");
    }

    function text(e) {
      e.target.setAttribute("value",e.target.value);
    }

   


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
        <div className="user-dash">
            <Header />
            <Head>
    <title>پروفایل - کلینیک زیبایی نیلوفر</title>
        </Head>
            <div className="survey">
              <Link href="/user-dash/welcome"><a>
            <div className="back-sec">
            <p>پرسشنامه</p>
                <img src={RArrow} alt="right arrow" />
                
        </div>
        </a></Link>
            <div className="dash-main">
                   <div className="dash-sec1">
                     <div className="blog-nav">
                     <div className="mp-nav">
               <ul>
                <li><a href="#" className="wnav" id="active" onMouseEnter={hover2} onMouseLeave={endhover2} onClick={q1Handler}><div className="active-"></div>فرم نظرسنجی</a></li> 
                 <li><a href="#" className="wnav" id="b-nav" onMouseEnter={hover2} onMouseLeave={endhover2} onClick={q2Handler}><div className="active-"></div> فرم پرسشنامه پذیرش کلاینت</a></li> 
               </ul>
           </div> 
           </div>  
                <div className="questions1" >
                  <form onSubmit={handleSurvey}>
                <div className="q1-sec1">
                       
                       <div className="qs1-radio">
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno1" value="خیر" onClick={check}/>
                         <label htmlFor="no" >خیر</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno1" value="بله" onClick={check} />
                         <label htmlFor="yes">بله</label>
                           </div>
                        
                       </div>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno2" value="خیر" onClick={check}/>
                         <label htmlFor="no">خیر</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno2" value="بله" onClick={check}/>
                         <label htmlFor="yes">بله</label>
                           </div>
                        
                       </div>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno3" value="خیر" onClick={check}/>
                         <label htmlFor="no">خیر</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno3" value="بله" onClick={check}/>
                         <label htmlFor="yes">بله</label>
                           </div>
                        
                       </div>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno4" value="خیر" onClick={check}/>
                         <label htmlFor="no">خیر</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno4" value="بله" onClick={check}/>
                         <label htmlFor="yes">بله</label>
                           </div>
                        
                       </div>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno5" value="خیر" onClick={check}/>
                         <label htmlFor="no">خیر</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno5" value="بله" onClick={check}/>
                         <label htmlFor="yes">بله</label>
                           </div>
                        
                       </div>
                       </div>
                       <div className="qs1-q">
                       <p>1. از خدماتی که انجام دادید راضی بودید؟</p>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno1" value="خیر" onClick={check}/>
                         <label htmlFor="no">خیر</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno1" value="بله" onClick={check}/>
                         <label htmlFor="yes">بله</label>
                           </div>
                        
                       </div>
                       <p>2. مایل هستید دوباره به مجموعه ما مراجعه کنید؟ </p>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno2" value="خیر" onClick={check}/>
                         <label htmlFor="no">خیر</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno2" value="بله" onClick={check}/>
                         <label htmlFor="yes">بله</label>
                           </div>
                        
                       </div>
                       <p>3. آیا خدمات ما را به دوستان و آشنایان خود معرفی می کنید؟ </p>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno3" value="خیر" onClick={check}/>
                         <label htmlFor="no">خیر</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno3" value="بله" onClick={check}/>
                         <label htmlFor="yes">بله</label>
                           </div>
                        
                       </div>
                       <p>4. آیا از محیط رضایت داشتید؟ </p>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno4" value="خیر" onClick={check}/>
                         <label htmlFor="no">خیر</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno4" value="بله" onClick={check}/>
                         <label htmlFor="yes">بله</label>
                           </div>
                        
                       </div>
                       <p>5. آیا حس راستی و آرامش در محیط را داشتید؟ </p>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno5" value="خیر" onClick={check}/>
                         <label htmlFor="no">خیر</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno5" value="بله" onClick={check}/>
                         <label htmlFor="yes">بله</label>
                           </div>
                        
                       </div>
                       </div>
                   </div>
                    <div className="q1-sec2">
                        <p>6. دوست دارید از کدام خدمات ما استفاده کنید؟ </p>
                        <div className="qs2-checkbox">
                            <div className="checkbox-item">
                               <input type="checkbox" id="job1" name="job1" value="korean" onClick={check}/>
                               <label htmlFor="job1"> پوست کره ای</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job2" name="job2" value="nose" onClick={check}/>
                               <label htmlFor="job2"> اصلاح فرم بینی</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job3" name="job3" value="botax" onClick={check}/>
                               <label htmlFor="job3">بوتاکس</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job4" name="job4" value="lift" onClick={check}/>
                               <label htmlFor="job4">  لیفت تخصصی با نخ</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job5" name="job5" value="filler" onClick={check}/>
                               <label htmlFor="job5"> انواع فیلرها</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job6" name="job6" value="meso" onClick={check}/>
                               <label htmlFor="job6">  مزوتراپی</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job7" name="job7" value="laser" onClick={check}/>
                               <label htmlFor="job7"> لیزر الکس آلما</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job8" name="job8" value="injection" onClick={check}/>
                               <label htmlFor="job8">تزریق چربی</label>
                            </div>
                        </div>
                    </div>
                    <div className="q1-sec3">
                        <p> 7. چه چیزی را بهتر می توانستیم انجام دهیم؟ </p>
                        <input type="textarea" placeholder="توضیح دهید..." onChange={text}/>
                    </div>
                    <div className="q1-sec3">
                        <p> 8. چه نکاتی را لازم می دانید با ما در میان بگذارید؟</p>
                        <input type="textarea" placeholder="توضیح دهید..."  onChange={text}/>
                    </div>
                    <div className="yesno-q">
                    <div className="yq-radio">
                            <div className="radio-item">
                            <input type="radio" id="bad" name="yesno6" value="bad" onClick={check}/>
                          <label htmlFor="bad">ضعیف</label>
                            </div>
                            <div className="radio-item">
                            <input type="radio" id="medium" name="yesno6" value="medium" onClick={check}/>
                          <label htmlFor="medium">متوسط</label>
                            </div>
                            <div className="radio-item">
                            <input type="radio" id="good" name="yesno6" value="good" onClick={check}/>
                          <label htmlFor="good">خوب</label>
                            </div>
                            <div className="radio-item">
                            <input type="radio" id="great" name="yesno6" value="great" onClick={check}/>
                          <label htmlFor="great">عالی</label>
                            </div>
                         
                        </div>
                        <p>9. نحوه برخورد کارکنان با شما چگونه بود؟</p>
                    </div>
                    <div className="q1-sec3">
                        <p> 10. دوست دارید چه خدماتی به مجموعه اضافه شود؟  </p>
                        <input type="textarea" placeholder="توضیح دهید..." onChange={text}/>
                    </div>
                    <div className="q1-sec3">
                        <p> 11. آیا ایده ای برای بهتر شدن فضای کلینیک دارید؟  </p>
                        <input type="textarea" placeholder="توضیح دهید..." onChange={text}/>
                    </div>
                    <div className="q1-sec3">
                        <p> 12. آیا اطلاع رسانی و راهنمایی لازم به صورت دقیق و شفاف برای انجان خدمات مورد درخواست به شما ارائه شده است؟ </p>
                        <input type="textarea" placeholder="توضیح دهید..." onChange={text} required/>
                    </div>
                    <div className="yesno-q">
                    <div className="yq-radio">
                            <div className="radio-item">
                            <input type="radio" id="no" name="yesno7" value="خیر" onClick={check}/>
                          <label htmlFor="no">خیر</label>
                            </div>
                            <div className="radio-item">
                            <input type="radio" id="yes" name="yesno7" value="بله" onClick={check}/>
                          <label htmlFor="yes">بله</label>
                            </div>
                            </div>
                            <p>13. آیا مایل هستید از تخفیف های مجموعه با خبر شوید؟ </p>
                    </div>
                    <div className="yesno-q" id="yesno">
                        <div className="stars">
                        <div id="wrapper">
  <form action="" method="post">
    <p className="clasificacion">
       <input id="radio1" type="radio" name="estrellas" value="5" onClick={check}/>
      <label htmlFor="radio1">&#9733;</label>
      <input id="radio2" type="radio" name="estrellas" value="4" onClick={check}/>
      <label htmlFor="radio2">&#9733;</label>
      <input id="radio3" type="radio" name="estrellas" value="3" onClick={check}/>
      <label htmlFor="radio3">&#9733;</label>
      <input id="radio4" type="radio" name="estrellas" value="2" onClick={check}/>
      <label htmlFor="radio4">&#9733;</label>
      <input id="radio5" type="radio" name="estrellas" value="1" onClick={check}/>
     <label htmlFor="radio5">&#9733;</label>
    </p>
    
  </form>
</div>
<div>

</div>
                        </div>
                        <h3>امتیاز کاربر به کلینیک</h3>
                    </div>
                    <div className="s7-btn">
                   <button type='submit' >ثبت</button>
                   <p id="hidden">نظر شما با موفقیت ثبت شد</p>
                 </div>
                 </form>
                </div>
                {/* questions1 ends */}
                <div className="questions2" >
                  <form onSubmit={handleQ} > 
                        <div className="q2-info">
                           <div className="qi-sec1">
                           <div className="qi1">
                           <p>تاریخ مراجعه:</p>
                                <DatePicker  />
                               
                            </div>
                            <input type="text" name="year" id="year" placeholder="سن" onChange={text} required/>
                            <input type="text" placeholder="شغل" onChange={text} required/>
                           </div>
                           <input type="textarea" placeholder="آدرس" onChange={text} required/>
                        </div>
                        <div className="q1-sec1">
                       
                       <div className="qs1-radio">
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno8" value="خیر" onClick={check}/>
                         <label htmlFor="no">خیر</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno8" value="بله" onClick={check}/>
                         <label htmlFor="yes">بله</label>
                           </div>
                        
                       </div>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno9" value="خیر" onClick={check}/>
                         <label htmlFor="no">خیر</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno9" value="بله" onClick={check}/>
                         <label htmlFor="yes">بله</label>
                           </div>
                        
                       </div>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno10" value="خیر" onClick={check}/>
                         <label htmlFor="no">خیر</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno10" value="بله" onClick={check}/>
                         <label htmlFor="yes">بله</label>
                           </div>
                        
                       </div>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno11" value="خیر" onClick={check}/>
                         <label htmlFor="no">خیر</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno11" value="بله" onClick={check}/>
                         <label htmlFor="yes">بله</label>
                           </div>
                        
                       </div>
                    
                       </div>
                       <div className="qs1-q">
                       <p>1. آیا مصرف دخانیات ( سیگار یا قلیان ) یا نوشیدنی الکلی دارید؟  </p>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno8" value="خیر" onClick={check} />
                         <label htmlFor="no">خیر</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno8" value="بله" onClick={check}/>
                         <label htmlFor="yes">بله</label>
                           </div>
                        
                       </div>
                       <p> 2. آیا در دوران بارداری یا شیردهی قرار دارید؟  </p>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno9" value="خیر" onClick={check}/>
                         <label htmlFor="no">خیر</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno9" value="بله" onClick={check}/>
                         <label htmlFor="yes">بله</label>
                           </div>
                        
                       </div>
                       <p>3. آیا از قرص های ضد بارداری استفاده می کنید؟ </p>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno10" value="خیر" onClick={check}/>
                         <label htmlFor="no">خیر</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno10" value="بله" onClick={check}/>
                         <label htmlFor="yes">بله</label>
                           </div>
                        
                       </div>
                       <p>4. آیا شخص پر استرسی هستید یا زندگی و کار پر استرسی دارید؟</p>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno11" value="خیر" onClick={check}/>
                         <label htmlFor="no">خیر</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno11" value="بله" onClick={check}/>
                         <label htmlFor="yes">بله</label>
                           </div>
                        
                       </div>
                      
                       </div>
                   </div>
                    <div className="q1-sec2">
                        <p>5. آیا اخیرا اقدامات زیر را انجام داده اید؟</p>
                        <div className="qs2-checkbox">
                            <div className="checkbox-item">
                               <input type="checkbox" id="jobو1" name="job1" value="korean" onClick={check}/>
                               <label htmlFor="job1"> پیلینگ شیمیایی / مکانیکی </label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job2" name="job2" value="nose" onClick={check}/>
                               <label htmlFor="job2"> تزریق ژل / بوتاکس / نخ / چربی</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job3" name="job3" value="botax" onClick={check}/>
                               <label htmlFor="job3">اپیلاسیون</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job4" name="job4" value="lift" onClick={check}/>
                               <label htmlFor="job4">  میکرونیدلینگ یا مزوتراپی</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job5" name="job5" value="filler" onClick={check}/>
                               <label htmlFor="job5">  برنزه کردن</label>
                            </div>
                            
                            
                           
                        </div>
                    </div>
                   <div className="q2-tarea"><input type="textarea" placeholder="سایر اقدامات... " onChange={text}/></div> 
                    <div className="yesno-q">
                    <div className="yq-radio">
                            <div className="radio-item">
                            <input type="radio" id="no" name="yesno12" value="خیر" onClick={check}/>
                          <label htmlFor="no">خیر</label>
                            </div>
                            <div className="radio-item">
                            <input type="radio" id="yes" name="yesno12" value="بله" onClick={check}/>
                          <label htmlFor="yes">بله</label>
                            </div>
                            </div>
                            <p>6. آیا داروی خاصی مصرف می کنید؟ {"("} چه خوراکی چه موضعی {")"} </p>
                    </div>
                  <div className="q2-tarea"><input type="textarea" placeholder="توضیح دهید..." onChange={text}/></div>  
                    <div className="yesno-q">
                    <div className="yq-radio">
                            <div className="radio-item">
                            <input type="radio" id="no" name="yesno13" value="خیر" onClick={check}/>
                          <label htmlFor="no">خیر</label>
                            </div>
                            <div className="radio-item">
                            <input type="radio" id="yes" name="yesno13" value="بله" onClick={check}/>
                          <label htmlFor="yes">بله</label>
                            </div>
                            </div>
                            <p>7. آیا سابقه عمل جراحی دارید؟ </p>
                    </div>
                  <div className="q2-tarea"><input type="textarea" placeholder="توضیح دهید..." onChange={text}/></div>  
                  <div className="checkbox-spec">
                  <div className="q1-sec2">
                        <p> 8. سابقه بیماری:</p>
                        <div className="qs2-checkbox">
                            <div className="checkbox-item">
                               <input type="checkbox" id="job1" name="job1" value="korean" onClick={check}/>
                               <label htmlFor="job1">  بیماری قلبی و عروقی</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job2" name="job2" value="nose" onClick={check}/>
                               <label htmlFor="job2"> کبدی</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job3" name="job3" value="botax" onClick={check}/>
                               <label htmlFor="job3">کلیوی</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job4" name="job4" value="lift" onClick={check}/>
                               <label htmlFor="job4">  دیابت</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job5" name="job5" value="filler" onClick={check}/>
                               <label htmlFor="job5">  فشار خون بالا</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job5" name="job5" value="filler" onClick={check}/>
                               <label htmlFor="job5">   تشنج</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job5" name="job5" value="filler" onClick={check}/>
                               <label htmlFor="job5">   هپاتیت</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job1" name="job1" value="korean" onClick={check}/>
                               <label htmlFor="job1"> تیرویید</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job2" name="job2" value="nose" onClick={check}/>
                               <label htmlFor="job2"> سرطان و شیمی درمانی </label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job3" name="job3" value="botax" onClick={check}/>
                               <label htmlFor="job3">بیماری اعصاب</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job4" name="job4" value="lift" onClick={check}/>
                               <label htmlFor="job4">  کم خونی</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job5" name="job5" value="filler" onClick={check}/>
                               <label htmlFor="job5">  کیست تخمدان</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job5" name="job5" value="filler" onClick={check}/>
                               <label htmlFor="job5">  بیماری صرع</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job5" name="job5" value="filler" onClick={check}/>
                               <label htmlFor="job5">  اختلالات هورمونی (پریودی نامنظم)</label>
                            </div>
                        
                        </div>
                    </div>
                  </div>
                 <div className="q2-tarea"> <input type="textarea" placeholder="سایر..." onChange={text}/></div>
                  <div className="q1-sec2">
                        <p>9. اگر حساسیتی دارید ما را از نوع حساسیتتان مطلع سازید</p>
                        <div className="qs2-checkbox">
                            <div className="checkbox-item">
                               <input type="checkbox" id="job1" name="job1" value="korean" onClick={check}/>
                               <label htmlFor="job1">  زمینه قرمزی پوست</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job2" name="job2" value="nose" onClick={check}/>
                               <label htmlFor="job2"> حساسیت دما</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job3" name="job3" value="botax" onClick={check}/>
                               <label htmlFor="job3">حساسیت دارویی و غذایی</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job4" name="job4" value="lift" onClick={check}/>
                               <label htmlFor="job4">  حساسیت فصلی</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job5" name="job5" value="filler" onClick={check}/>
                               <label htmlFor="job5">  حساسیت به فلزات</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job5" name="job5" value="filler" onClick={check}/>
                               <label htmlFor="job5">   حساسیت به ترکیبات آرایشی</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job5" name="job5" value="filler" onClick={check}/>
                               <label htmlFor="job5">   حساسیت تنفسی</label>
                            </div>
                        </div>
                    </div>
                  <div className="q2-tarea"><input type="textarea" placeholder="سایر..." onChange={text}/></div>  
                    <div className="checkbox-spec">
                  <div className="q1-sec2">
                        <p> 10. لطفا محصولاتی که در منزل استفاده می کنید را بنویسید.</p>
                        <div className="qs2-checkbox">
                            <div className="checkbox-item">
                               <input type="checkbox" id="job1" name="job1" value="korean" onClick={check}/>
                               <label htmlFor="job1">  تونر</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job2" name="job2" value="nose" onClick={check}/>
                               <label htmlFor="job2"> شوینده صورت</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job3" name="job3" value="botax" onClick={check}/>
                               <label htmlFor="job3">کرم دور چشم</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job4" name="job4" value="lift" onClick={check}/>
                               <label htmlFor="job4">  ماسک</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job5" name="job5" value="filler" onClick={check}/>
                               <label htmlFor="job5">    میسلارواتر</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job5" name="job5" value="filler" onClick={check}/>
                               <label htmlFor="job5">   ضد آفتاب</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job5" name="job5" value="filler" onClick={check}/>
                               <label htmlFor="job5">   کرم روز</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job1" name="job1" value="korean" onClick={check}/>
                               <label htmlFor="job1"> کرم شب</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job2" name="job2" value="nose" onClick={check}/>
                               <label htmlFor="job2"> بالم لب</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job3" name="job3" value="botax" onClick={check}/>
                               <label htmlFor="job3">اسکراب</label>
                            </div>
                        
                        </div>
                    </div>
                  </div>
                <div className="q2-tarea"><input type="textarea" placeholder="سایر محصولات و در صورت استفاده از موارد فوق نام محصول را بنویسید." onChange={text}/></div>  
                  <div className="q1-sec3">
                        <p> 11. مشکلات پوستتان را از دیدگاه خودتان بیان کنید.</p>
                        <input type="textarea" placeholder="توضیح دهید..."  onChange={text}/>
                    </div>
                    <div className="q1-sec3">
                        <p> 12. به اختصار درباره شیوه زندگی خود از لحاظ تغذیه، خواب و ورزش توضیح دهید. </p>
                        <input type="textarea" placeholder="توضیح دهید..." onChange={text} />
                    </div>
                    <div className="s7-btn">
                   <button type='submit' >ثبت</button>
                   <p id="hidden">نظر شما با موفقیت ثبت شد</p>
                 </div>
                 </form>
                </div>
                {/* questions2 ends */}
                   </div>
                <UserNav/>
            </div>
            </div>
            <PWAFooter />
        </div>
     );
}
 
export default UserDash;