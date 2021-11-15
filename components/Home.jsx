
import Head from 'next/head'
import React from "react"
import Footer  from './Footer';
import Header from "./Header"
import Link from "next/link"
import { useEffect } from 'react';
import Countdown from 'react-countdown';
import moment from 'jalali-moment'




const Home = () => {

 
      
    function send(e) {
        const https = require('https');

        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
          });
        var name = document.getElementById("name7").value;
        var number = document.getElementById("cell7").value;
        var job = document.getElementById("jobs").value;
        var text = "."
        

        var requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name : name,
                mobileNumber : number,
                category : job,
                text : text
            }),
            redirect: 'follow',
            agent: httpsAgent
          };

         
  
          
  
         
          
          fetch(`https://server.niloofarclinic.beauty/api/contact/add`, requestOptions)
            .then(response => {response.text();
            if (response.ok) {
                
              document.getElementById("done").style.display = "block"
              
             }})
            .then(result =>  console.log(result))
            .catch(error => console.log('error', error))
        
    }

   
      
      useEffect(() => {

  

       
    const https = require('https');

    const httpsAgent = new https.Agent({
        rejectUnauthorized: false,
      });

    var requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
        agent: httpsAgent
      };
        fetch("https://server.niloofarclinic.beauty/api/blog/recent/", requestOptions)
        .then(response => response.json())
        .then(result => {
            for (let i = 0; i < 3; i++) {
                if (document.getElementsByClassName('s6-post')[0] != undefined && result !== null) {
                    var div = document.getElementsByClassName('s6-post')[0].cloneNode(true);
                    div.removeAttribute('id','hidden');
                    div.querySelector('#main-pic').src = result[i].image;
                    div.querySelector('#s6t').innerText = result[i].title;
                    div.querySelector('#s6c').innerHTML = result[i].text;
                    div.querySelector('#s6d').innerText =  moment(result[i].date, 'YYYY-M-D HH:mm:ss').format('jYYYY/jM/jD ');
                    div.querySelector('#s6l').href = result[i].link;
                    document.getElementsByClassName('s6-posts')[0].appendChild(div);
                }
        
                
            }

        })
        .catch(error => console.log('error', error));

    
      
      
  const post = document.getElementsByClassName("s6-post");

  var x = window.matchMedia("(max-width: 922px)")
  if (x.matches) {
   
  
    for (let i = 0; i < post.length; i++) {
      
        
    
    let touchstartX = 0;
var touchendX = 0;
var margin = 0;

function handleGesture() {
   
  if (touchendX < touchstartX) {
   margin = margin - 400;
   
   if (margin < -400) {
    margin = 400;
  }
      document.getElementsByClassName("s6-posts")[0].style.marginLeft = margin+"px";
  }
  if (touchendX > touchstartX) {
    margin = margin + 400;
    if (margin > 400) {
      margin = -400;
    }
    document.getElementsByClassName("s6-posts")[0].style.marginLeft = margin+"px";
  }
 
}

post[i].addEventListener('touchstart',touchhandler);

function touchhandler(e) {
  
    touchstartX = e.changedTouches[0].screenX;
  
}



post[i].addEventListener('touchend', touchend);

function touchend(e) {

    touchendX = e.changedTouches[0].screenX;
    handleGesture();
  
  
}

post[i].addEventListener('mousedown', mousehandler);

function mousehandler(e) {
 
    touchstartX = e.x;
  
  
}

post[i].addEventListener('mouseup',mouseup);

function mouseup(e) {
  
    touchendX = e.x;
    handleGesture();
  
}


    }
}

},[])
const renderer = ({ total,days, hours, minutes, seconds }) => {
    if (total) {
      // Render a countdown
      return (
          <>
        <div id="cdays">
          {days}
        </div>
        <div id="cdots">
        :
      </div>
      <div id="chours">
          {hours}
        </div>
        <div id="cdots">
          :
        </div>
        <div id="cminutes">
          {minutes}
        </div>
        <div id="cdots">
          :
        </div>
        <div id="cseconds">
          {seconds}
        </div>
      </>
      );
    } 
  };
    return ( <div className="App">
    
    <div className="main-page">
       <Header />

       <Head>
    <title>کلینیک زیبایی نیلوفر</title>
        </Head>
        <div className="section1">
            <div className="s1-text">
                <img src="/Images/persian title.svg" alt="" />
                    <p>ما در کلینیک تمام خدمات زیبایی ‌و پوستی را با بهترین دستگاه ها و مواد انجام داده و همیشه سعی بر این داریم که از جدید ترین امکانات و دستگاه های موجود استفاده کنیم. </p>
                <div className="s1b">  <Link href="/contact"><a >  <button>ثبت درخواست مشاوره</button> </a></Link> <Link href="/contact"><a>  <button>  رزرو نوبت</button> </a></Link>
                <a href="https://app.niloofarclinic.beauty/">  <button>   دانلود اپ نیلوفر</button> </a></div>
            </div>
            <div className="s1-pic">
                <img src="/Images/young-beautiful-woman-with-flowers-near-face 1.png" alt="" />
            </div>
        </div> 
        <div className="section2">
            <div className="s2-pic">
            <video width="300" height="300" controls>
  <source src="/Videos/video.mp4" type="video/mp4" />

Your browser does not support the video tag.
</video>
            </div>
            <div className="s2-text">
                <img src="/Images/logo2.svg" alt=""/>
                <Link href="/about"><a>  <h4>درباره مطب نیلوفر</h4> </a></Link>
                <p>مطب زیبایی نیلوفر از سال ۱۳۹۸ توسط نیلوفر صلحی و امیرحسین طبیب زاده شروع به کار کرده است. ما در مطب، تمام خدمات زیبایی و پوستی را با بهترین دستگاه ها و مواد انجام داده و همیشه سعی بر این داریم که از جدیدترین امکانات و دستگاه های موجود استفاده کنیم. علاوه بر انجام درست خدمات، برای ما بسیار مهم است که شما نیز تجربه خوشایندی از حضور در کلینیک نیلوفر داشته باشید. امیدواریم کنار شما عزیزان در راستای رسیدن به این اهداف موفق باشیم.</p>
               <Link href="/about"><a > <button>بیشتر بدانید</button> </a></Link> 
            </div>
        </div>
        <Link href="/campaign/yalda"><a>
        <div className="ym">
        <div className="yalda-main">
            <img src="/Images/Asset 1@5x-8.png" alt="" />
            <div className="yalda-text">
            <h1>جشنواره یلدایی نیلوفر</h1>
            <div className="yalda-timer">
            <Countdown date={"Dec 22, 2021 00:00:00"} renderer={renderer}/>
            </div>
            <p>با استفاده از خدمات ما به ازای هر 1 میلیون، 1 شانس برای شرکت در جشنواره داشته باشید </p>
            </div>
            
        </div>
        </div>
        </a></Link>
        <div className="section3">
        <img src="/Images/logo2.svg" alt=""/>
            <Link href="/service"><a> <h4>خدمات</h4> </a></Link>
            <h2>مطب زیبایی نیلوفر</h2>
            <div className="s3-container">
                <div className="s3-product">
                    <div className="product-title">
                      <Link href="/service/service4"><a> <h3>بوتاکس</h3> </a></Link> 
                        <img src="/Images/Frame 35 (2).svg" alt=""/>
                    </div>
                    <p>بوتاکس سم بوتولونیوم نوع A هست که با فلج کردن موقتی عضلات باعث از بین بردن خطوط پوستی و چین و چروک‌ها می‌شود. علت اصلی ایجاد چین و چروک‌های صورت، حرکت عضلات است.</p>
                </div>
                <div className="s3-product">
                    <div className="product-title">
                    <Link href="/service/service3"><a ><h3>انواع فیلر</h3> </a></Link>
                        <img src="/Images/Frame 35.svg" alt=""/>
                    </div>
                    <p>فیلر به قسمت‌های مختلف بدن از جمله صورت تزریق می‌شود. بیش‌ترین کاربردهای تزریق فیلر برای زاویه‌سازی فک، گونه هست، همچنین در ناحیه زیر چشم و لب هم از فیلر استفاده می‌کنند.</p>
                </div>
                <div className="s3-product">
                    <div className="product-title">
                    <Link href="/service/service2"><a > <h3>لیفت تخصصی با نخ</h3> </a></Link>
                        <img src="/Images/Frame 35 (1).svg" alt="" />
                    </div>
                    <p>این روش مناسب برای کسانی هست که صورتشون افتادگی داره و یا می‌خواهند پوستشون کشیده و سفت بشه.</p>
                </div>
                <div className="s3-product">
                    <div className="product-title">
                    <Link href="/service/service1"><a>  <h3>پوست کره ای</h3> </a></Link>
                        <img src="/Images/Frame 35 (3).svg" alt="" />
                    </div>
                    <p> از این روش برای کسانی استفاده می‌شود که از مشکلات پوستی نظیر: التهابات پوستی شدید، زخم‌های آکنه‌ که جای آن‌ها بر روی پوست‌شان باقی مانده، دو رنگ بودن پوست، لک‌های پوستی و ... رنج می‌برند، یا به هر دلیلی از کرم‌پودر زیاد استفاده می‌کنند.</p>
                </div>
                <div className="s3-product">
                    <div className="product-title">
                    <Link href="/service/service8"><a >  <h3>لیزر الکس آلما</h3> </a></Link>
                        <img src="/Images/Frame 35 (4).svg" alt="" />
                    </div>
                    <p> این اصلی لیزر کلینیک نیلوفر، دستگاه السکاندرایت آلمان ۲۰۱۹ و ۲۰۲۰ هست. این دستگاه مجهز به کولینگ داخلی هست و همزمان با خنک کردن ناحیه‌ی موردنظر باعث می‌شود تا شما دردی رو احساس نکنید. بهترین نتیجه از استفاده این دستگاه ۹ تا ۱۰ هست که به فاصله یک ماه انجام می‌شود.</p>
                </div>
                <div className="s3-product">
                    <div className="product-title">
                    <Link href="/service/service7"><a>  <h3>اصلاح فرم بینی</h3> </a></Link>
                        <img src="/Images/Frame 35 (5).svg" alt="" />
                    </div>
                    <p> لیفت بینی روشی است که برای برطرف کردن ایرادهای ظاهری بینی یا برخی مشکلات پزشکی نظیر انحراف و مشکلات تنفسی استفاده می‌شود.</p>
                </div>
                <div className="s3-product">
                    <div className="product-title">
                    <Link href="/service/service6"><a> <h3>تزریق چربی</h3> </a></Link>
                        <img src="/Images/Frame 35 (6).svg" alt="" />
                    </div>
                    <p>فیلر به قسمت‌های مختلف بدن از جمله صورت تزریق می‌شود. بیش‌ترین کاربردهای تزریق فیلر برای زاویه‌سازی فک، گونه هست، همچنین در ناحیه زیر چشم و لب هم از فیلر استفاده می‌کنند.</p>
                </div>
                <div className="s3-product">
                    <div className="product-title">
                    <Link href="/service/service5"><a> <h3>مزوتراپی</h3> </a></Link>
                        <img src="/Images/Frame 35 (7).svg" alt="" />
                    </div>
                    <p> مزوتراپی به طیف وسیعی از درمان‌های تزریقی با حداقل تهاجم گفته می‌شود که کاربردهای بسیاری دارند. یکی از کاربردهای این روش درمانی است که باعث توقف ریزش مو و تحریک رشد موها می‌شود.</p>
                </div>
                
            </div>
        </div>
        <div className="section4">
            <div className="s4-pic">
                <img src="/Images/main/photo_2021-06-29_11-47-27-e1627375148854.jpg" alt="" id="s4-pic1" />
                <img src="/Images/main/photo_2021-06-29_11-47-56.jpg" alt="" id="s4-pic2" />
            </div>
            <div className="s4-text">
                <h1>این اعتماد به یک دنیا میارزه</h1>
                <div className="s4-contact">
                    <div className="contact-sec">
                    <a href="tel:09196442926">
                        <div className="cs-text">
                            <h4>0919-6442926</h4>
                            <h5>مشاوره انلاین در واتس اپ  </h5>
                        </div>
                        </a>
                        <div className="cs-pic">
                            <img src="/Images/whatsapp (1) 2.svg" alt=""/>
                        </div>
                    </div>
                    <div className="contact-sec">
                      <a href="tel:021264428963">
                        <div className="cs-text">
                            <h4>021-264428963</h4>
                            <h5>مشاوره و رزرو نوبت</h5>
                        </div>
                        </a>
                        <div className="cs-pic">
                            <img src="/Images/Phone-2.svg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="s4t-pic">
                    <img src="/Images/main/photo_2021-06-29_11-47-24.jpg" alt="" id="s4-pic3"/>
                    <img src="/Images/main/photo_2021-06-29_11-47-42.jpg" alt="" id="s4-pic4" />
                </div>
           </div>
        </div>
        <div className="section5">
            <img src="/Images/logo2.svg" alt="" />
            <Link href="/works"><a > <h4>نمونه کارها</h4> </a></Link>
            <div className="s5-container">
              <Link href="/works"><a > <button>همه نمونه کارها</button></a></Link> 
                <div className="s5-bck"><div className="s5-bck2"></div></div>
                <div className="s5-pic">
                    <img src="/Images/botax/IMG_8714-1.jpg" alt="" />
                    <img src="/Images/lift/IMG_0066.jpg" alt="" />
                    <img src="/Images/filler/IMG_9271.jpg" alt="" />
                    <img src="/Images/nose/download.jpg" alt="" id="pic-4" />
                    <img src="/Images/meso/IMG_1207.jpg" alt="" id="pic-5" />
                </div> 
            </div>
        </div>
        <div className="section6">
            <img src="/Images/logo2.svg" alt="" />
            <a href="https://nilooz.com/" >  <h4>نیلوز</h4> </a>
            <h2>نیلوز مجله مد و زیبایی  </h2>
            <div className="s6-posts">
                <div className="s6-post" id="hidden">
                    <div className="s6-pic">
                        <img src="/Images/document 1.svg" alt="" id="category" />
                        <img src="" alt="" id="main-pic" />
                    </div>
                    <div className="s6-text">
                        <h3 id="s6t">  </h3>
                        <div className="s6-date">
                          <h5 id="s6d"></h5>
                          <img src="/Images/Calendar 2.svg" alt="" id="s6i"/>
                        </div>
                        <p id="s6c"></p>
                      <a id="s6l"> <pre>  {"<"}  ادامه مطلب</pre> </a> 
                    </div>
                </div>
               
                    
                
            </div>
        <a href="https://nilooz.com/" >    <button>نیلوز بخوانید</button></a>
        </div>
        <img src="/Images/logo3.svg" alt="" id="logo-bck" />
        <div className="section7">
            <div className="s7-text">
                <div className="s7t">
                <img src="/Images/logo2.svg" alt="" id="s7-logo" />
                <h1>در کنارتون هستیم</h1>
                <h3>اطلاعات خود را ثبت کرده تا با شما تماس بگیریم</h3>
            </div>
                <div className="s7-forms">
               
                    <input type="text" placeholder="شماره تماس" id="cell7" />
                    <select name="jobs" id="jobs"  defaultValue="خدمت یا خدمات مورد نظر">
                    <option value="botox">بوتاکس</option>
                    <option value="laser">لیزر</option>
                    <option value="korean">پوست کره ای</option>
                    <option value="filler">فیلر</option>
                    <option value="nose">اصلاح فرم بینی</option>
                    <option value="mesotherapy">مزوتراپی</option>
                    <option value="lift">لیفت تخصصی با نخ</option>
                
                  </select>
                    <input type="text" placeholder="نام و نام خانوادگی" id="name7" />
                </div>
                <p id="done">درخواست شما با موفقیت ثبت شد</p>
                <div className="s7-btn">
                    <button onClick={send}>ثبت اطلاعات</button>
                    <p> بر اساس سیاست محرمانگی، اطلاعات شما محرمانه تلقی شده و فقط برای ارتباط با شما استفاده می شود </p>
                </div>
            </div>
            <div className="s7-pic">
                <img src="/Images/IMG_8518.jpg" alt=""/>
            </div>
        </div>
      
      <Footer />
    </div>
    </div> );
}
 
export default Home;