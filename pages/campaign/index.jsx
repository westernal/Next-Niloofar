import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import rec76 from "../../public/Images/Rectangle 76.svg"
import video from "./Videos/Campaign.mp4"
import g218 from "../../public/Images/Group 218.png"
import g2 from "../../public/Images/Group (2).svg"
import loc from "../../public/Images/Location.svg"
import v26 from "../../public/Images/Vector 26.svg"
import play from "../../public/Images/Polygon 1.svg"
import bb from "../../public/Images/NC-000401-Photo-5.jpg"
import g256 from "../../public/Images/Group 256.png"
import g238 from "../../public/Images/Group 238.svg"
import v262 from "../../public/Images/Vector 26 (2).svg"
import v261 from "../../public/Images/Vector 26 (1).svg"
import g258 from "../../public/Images/Group 258.png"
import ptitle from "../../public/Images/persian title.svg"
import g239 from "../../public/Images/Group 239.svg"
import loc1 from "../../public/Images/Location (1).svg"
import call from "../../public/Images/Calling.svg"
import wp from "../../public/Images/whatsapp (1) 3.svg"
import insta from "../../public/Images/instagram-logo 1.svg"


const Campaign = () => {
    
    function send(e) {
        var name = document.getElementById("cname").value;
        var number = document.getElementById("cnumber").value;
        var job = document.getElementById("jobs").value;
        var text = document.getElementById("ctext").value;
       

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
          };
  
          
  
         
          
          fetch(`https://server.niloofarclinic.beauty/api/contact/add`, requestOptions)
            .then(response => {response.text();
            if (response.ok) {
                
              document.getElementById("done").style.display = "block"
              
             }})
            .then(result =>  console.log(result))
            .catch(error => console.log('error', error))
        
    }

   function openModal1(params) {
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
    
function openModal2(params) {
    var modal = document.getElementById("myModal2");

    
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
function openModal3(params) {
    var modal = document.getElementById("myModal3");

    
    var span = document.getElementsByClassName("close")[2];
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
function openModal4(params) {
    var modal = document.getElementById("myModal4");

    
    var span = document.getElementsByClassName("close")[3];
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
    
    
   


    return (
         <div className="campaign">
        <Header />
        <img src={rec76} alt="" id="summer-bck"/>
        
        <div className="campaign-sec1">
        <div id="myModal" className="modal">

<div className="modal-content">
  <span className="close">&times;</span>
  <div className="modal-main">



<div className="modal-main2">
    <p>        <video width="300" height="300" controls>
  <source src={video} type="video/mp4" />

Your browser does not support the video tag.
</video></p>
   
</div>
</div>
</div>
</div>
<div id="myModal2" className="modal">

<div className="modal-content">
  <span className="close">&times;</span>
  <div className="modal-main">



<div className="modal-main2">
    <p>    کاموفلاژ در واقع تکنیکی است که با آن میتوان معایب صورت و بدن را که تا بحال نمیتوانستیم به طور کامل پوشش بدهیم مثل ماه گرفتگی، لک و آکنه، جای تاتو، سیاهی دور چشم، استرچ مارک های بدن و تمام روشنی و تیرگی های پوست را پوشش دهیم. همچنین این تکنیک برای خانم هایی که دارای پوست نازکی هستند و رگهای صورتشان مشخص است بسیار مفید بوده و پوشش دهی کامل را انجام می دهد. تکنیک کاموفلاژ با ایجاد سایه روشن بر پوست صورت زیبایی خاصی به شما می دهد، لازم به ذکر است یکی از ویژگی های کاموفلاژ روح دادن به صورت می باشد. در نهایت عمده ترین تاثیر کاموفلاژ برای برطرف شدن سیاهی دور چشم بوده و یک روش دائمی در این مورد می‌باشد.   </p>
   
</div>
</div>
</div>
</div>
<div id="myModal3" className="modal">

<div className="modal-content">
  <span className="close">&times;</span>
  <div className="modal-main">



<div className="modal-main2">
    <p>   بسیاری از افراد دوست دارند حالت بینی خود را کمی تغییر داده و ایراد و مشکلات ظاهری آن را برطرف کنند. اما مسئله اینجا است که جراحی همواره راه حلی استرس آور و گران قیمت بوده و هرکسی حاضر نیست آن را امتحان کند. خوشبختانه پیشرفت تکنولوژی، روش های مختلفی را برای زیباتر کردن بینی شما بدون نیاز به جراحی معرفی کرده است. یکی از بهترین و موثرترین این روش ها لیفت بینی است. روشی که بدون نیاز به جراحی و حتی بیهوشی با کمترین عوارض شما را به نتیجه دلخواهتان خواهد رساند. لیفت بینی روشی موثر با اثراتی ماندگار است. لیفت بینی چیست؟ لیفت بینی روشی است که برای برطرف کردن ایرادهای ظاهری بینی یا برخی مشکلات پزشکی نظیر انحراف و مشکلات تنفسی استفاده می شود. با استفاده از این روش می توان در بخش های مختلف بینی تغییر ایجاد کرده و تناسب میان بینی و دیگر اجزای صورت را بیشتر کرد. نکته مهم این است که این روش برای رفع برخی مشکلات مادرزادی یا آسیب های ورزشی نیز قابل استفاده است. این عمل با روش های مختلفی انجام می شود که بیشتر آن ها نیاز به جراحی ندارند. اما ممکن است با توجه به شرایط شما پزشک در برخی موارد لیفت با جراحی را به شما توصیه کند. معمولا انجام لیفت بینی محدودیت خاصی نداشته و هرکسی که احساس می کند که بینی او نیاز به اصلاح دارد می تواند از نتایج لذت بخش این روش استفاده کند. توجه کنید که عمل لیفت بینی بر روی نقاط مختلف بینی نظیر تیغه، نوک، قوز، پره و پوست آن انجام می شود. همچنین از روش های مختلف لیفت بینی می توان برای ترمیم یا بهبود نتایج جراحی نیز استفاده کرد. اما در برخی موارد ممکن است پزشک به شما جراحی بینی را توصیه کند. این موضوع معمولا در مواردی که انحراف یا مشکلات بینی شدیدتر است به شما توصیه می شود. بر اساس توضیحات داده شده می توان گفت که تصمیم گیری درباره اینکه شما کاندید خوبی برای لیفت بینی هستید یا نه، بر عهده پزشک است. او با توجه به موارد مطرح شده در جلسات مشاوره تعیین می کند که کدام روش برای شما بهتر بوده و کدام روش برای شما مناسب نیست. پس شرکت در جلسات مشاوره پیش از انجام عمل را جدی بگیرید. به طورکلی روش های لیفت بینی به دو دسته با جراحی و بدون جراحی تقسیم می شوند. در شیوه های بدون جراحی بیمار بی هوش نشده و عمل در زمان خیلی کوتاهی انجام می شود. - لیفت بینی با نخ: برای کسانی مناسب هست که فقط نوک بینی آنها افتادگی دارد. - لیفت بینی با تزریق ژل: برای کسانی مناسب هست که علاوه بر افتادگی، جای شکستگی و قوز دارند. - لیفت بینی به همراه پلکسرو تزریق آنزیم: برای کسانی مناسب هست که نوک بینی گوشتی دارند.    </p>
   
</div>
</div>
</div>
</div>
<div id="myModal4" className="modal">

<div className="modal-content">
  <span className="close">&times;</span>
  <div className="modal-main">



<div className="modal-main2">
    <p>     نکته مهم این است که سوزن‌های نانویی که در این روش مورد استفاده قرار می‌گیرند، به شکلی وارد پوست می‌شوند که پوست به میزان بسیار ناچیزی خونریزی می‌کند؛ با این حال آسیبی به لایه‌های اپیدرمی پوست وارد نشده و پوست شما به دور از هر گونه آسیبی تحت درمان قرار می‌گیرد در این روش منافذ پوست کاملا آزاد خواهند بود و مسدود نخواهند شد و در نهایت امکان نفوذ اکسیژن به بافت‌های پوست شما وجود داشته و راه تنفس برای سلول‌های پوستی شما باز خواهد شد. دو دلیل اصلی برای جذابیت بی‌بی‌گلو وجود دارد، اول اینکه این درمان باعث میشود پوست شما بدون لک باشد، درست مثل زمانی که از کرم پودر استفاده می کنید. و این موضوع میتواند تاثیر زیادی در اعتماد به نفس شما داشته باشد. از طرفی ترکیب میکرونیدلینگ و بی‌بی‌گلو، به دلیل تولید کلاژن و الاستین میتواند اثرات ضد پیری نیز برای صورت داشته باشد. یکی دیگر از مزایای درمان با این روش این است که این سرم ها دارای انواع مواد مغذی هستند و می توانند مواد مورد نیاز برای پوست را تامین کنند. اما ماده کلاژن (Cоllаgеn ) چیست؟ و چرا تا این حد برای سلامت پوست مهم است؟ کلاژن یک ماده طبیعی در پوست است که در انواع مختلفی از گیاهان هم یافت می شود. این ماده میتواند قابلیت ارتجاعی و شادابی پوست را افزایش دهد. میزان کلاژن در سنین جوانی بیشتر است و به طور طبیعی در بدن تولید میشود. اما با افزایش سن، میزان تولید این ماده کاهش یافته و به این ترتیب احتمال ایجاد چین و چروک ها هم بیشتر میشود. اما در روش بی‌بی‌گلو با وارد شدن سوزن ها، پوست شما تحریک میشود تا کلاژن بیشتر را تولید کند. نتایج حاصل از این درمان بلافاصله پس از جلسه اول نمایان خواهد شد. بی‌بی‌گلو برای تاثیرگذاری باید چندین جلسه تکرار شود. اما شما در همان هفته های اول تغییرات طبیعی پوست به خصوص جوان شدن آن را تجربه خواهید کرد. این روش درمان می تواند تمامی نقایص مربوط به پوست از جمله قرمزی ها، دایره های تیره زیر چشم، جوش های سرسیاه و حتی منافذ پوستی را بپوشاند. برخی دیگر از تاثیرات این درمان عبارتند از : یکنواختی و یک دست شدن رنگ پوست روشنی و درخشان شدن پوست از بین بردن کک و مک ها آب رسانی پوست بی‌بی‌گلو دور چشم برای کاهش تیرگی های زیر چشم تزریق آنتی اکسیدان ها، ویتامین ها به پوست تغییر رنگ شدید پوست همچنین از این روش برای برطرف کردن تیرگی آرنج و زانو نیز می‌توان استفاده کرد به طور کلی بی‌بی‌گلو یک درمان غیر تهاجمی بسیار ایمن است، اما انتخاب یک مرکز مناسب برای انجام آن بسیار مهم است. از آنجایی که در این روش میکرونیدل ها به داخل پوست نفوذ می کنند، اگر درمان را در شرایطی که مسائل بهداشتی به خوبی رعایت نمی شود انجام دهید، ممکن است پیامد های ناخوشایندی را به همراه داشته باشد. به همین منظور باید از انجام این کار در آرایشگاه ها یا مراکز زیبایی پرهیز کنید و حتما این درمان را در یک کلینیک زیبایی و تحت نظر متخصص زیبایی انجام دهید. در این صورت میتوان گفت درمان بی خطر خواهید داشت و نتیجه کار مثبت ارزیابی می شود. در چه مواردی نمی‌توان از این روش استفاده کرد؟ در گذشته دچار تبخال شده اید. استفاده از یک دارو ضد این ویروس میتواند جلوی آن را بگیرد. این دارو را باید دو روز قبل و دو روز بعد از مراقبت استفاده کنید. افرادی که سیگار میکشند (به دلیل پراکسیداسیون لیپید) دیابت های کنترل نشده از آنجایی که خوب نشدن زخم ممکن است ریسک ایجاد عفونت دوم را افزایش بدهد کلوئید و یا فزون گوشت آکنه های فعال مراقبت‌های لازم بعد از انجام این روش چیست؟ بسته به سطح حساسیت پوست، ممکن است قرمزی ملایمی ایجاد شود. با این حال معمولاً به سرعت رفع میشود. به طور معمول توصیه میشود تا چند روز از آرایش کردن و ورزش های سنگین که تعریق زیادی ایجاد می کند؛ پرهیز کنید. دوری از نور مستقیم خورشید استفاده از ضد آفتاب حداقل با SPF30 (ممنوعیت آفتاب گرفتن) پرهیز از عطر زدن و آرایش کردن پرهیز از سونا، وان گرم، حمام گرم و زدن سشوار تا مدتی پرهیز از شنا کردن برای حداقل 7 روز عوارض جانبی احتمالی در این روش چیست؟ در پاسخ به این سوال باید بگوییم تا به حال از این درمان هیچ عوارضی گزارش نشده است. زیرا سرمی که به پوست تزریق میشود، حاوی انواع ویتامین ها و مواد معدنی است و نه تنها ضرری برای پوست ندارد، بلکه میتواند تاثیرات مثبتی بسیاری در جوان سازی پوست شما داشته باشد. البته ایجاد عوارضی مثل قرمزی پوست کاملاً طبیعی است و بعد از گذشت چند روز برطرف خواهد شد.  </p>
   
</div>
</div>
</div>
</div>

           
                <div className="summer-pic" id="summer">
                <img src={g218} alt="" id="summer-main"/>
                <div className="summerbck1"></div>
                <div className="summerbck2"></div>
                <div className="summerbck3"></div>
                </div>
                <div className="summer-text">
                   <div className="smr-title">
                   <h1 id="smr2">نیلوفر</h1>
                       <h1 id="smr1">کمپین افتتاح وبسایت</h1>
                      
                       <img src={g2} alt="" />
                   </div>
                   <p>زیبایی پوست شما تخصص ماست</p>
                   <div className="smr-loc">
                       <h5>تهران، بلوار اندرزگو</h5>
                       <img src={loc} alt=""/>
                   </div>
                 <a href="#ccontact">  <button id="ckorean2">ثبت درخواست مشاوره</button> </a>
                </div>
                

                <div className="bb-text" >
                    <div className="bb-title">
                        <h2> BB Glow پوست کره ای </h2>
                        <img src={v26} alt=""/>
                    </div>
                    <p> یکی از پیشرفته‌ترین تکنولوژی‌ها برای بهبود وضعیت پوست، شادابی و روشن شدن آن و مبارزه با مشکلات پوستی درمان پوست با روش بی‌بی‌گلو است.این درمان به سرعت به یکی از پرطرفدار ترین درمان ها در صنعت زیبایی تبدیل شده است و با استفاده از تکنیک میکرونیدلینگ انجام می‌شود که با کمک سوزن‌های نانو، پیگمنت‌های طبیعی را که متناسب با بافت‌های پوست ساخته شده‌اند به داخل بافت‌ها و لایه‌های مختلف پوست تزریق و به روشن سازی پوست کمک بسیار زیادی می‌کنند.</p>
                    <div className="bb-btns">
                        <button id="bb-btn1" onClick={openModal1}> <img src={play} alt=""/> مشاهده ویدیو</button> 
                        <button id="bb-btn4" onClick={openModal4}>  بیشتر بدانید </button> 
                    </div>
                    
</div>
     
                <div className="bb-pic" id="ckorea">
                <img src={bb} alt="" id="bb-main"/>
                
            
                </div>

                <div className="kamo-pic" id="kamo">
               
                <img src={g256} alt="" id="kamo-main"/>
                <img src={g238} alt="" id="kamo-bck"/>
                </div>
                <div className="kamo-text" id="kamo2" >
                    <div className="kamo-title">
                        <h2>کاموفلاژ</h2>
                        <img src={v262} alt="" id="kamotbck"/>
                    </div>
                    <p> 
کاموفلاژ در واقع تکنیکی است که با آن میتوان معایب صورت و بدن را که تا بحال نمیتوانستیم به طور کامل پوشش بدهیم مثل ماه گرفتگی، لک و آکنه، جای تاتو، سیاهی دور چشم، استرچ مارک های بدن و تمام روشنی و تیرگی های پوست را پوشش دهیم. همچنین این تکنیک برای خانم هایی که دارای پوست نازکی هستند و رگهای صورتشان مشخص است بسیار مفید بوده و پوشش دهی کامل را انجام می دهد. تکنیک کاموفلاژ با ایجاد سایه روشن بر پوست صورت زیبایی خاصی به شما می دهد، لازم به ذکر است یکی از ویژگی های کاموفلاژ روح دادن به صورت می باشد. در نهایت عمده ترین تاثیر کاموفلاژ برای برطرف شدن سیاهی دور چشم بوده و یک روش دائمی در این مورد می‌باشد.</p>
                    <div className="bb-btns">
                    <button id="bb-btn2" onClick={openModal2}>  بیشتر بدانید </button> 
                        
                    </div>
                    </div>

                    <div className="cnose-text" id="cnose2">
                        <div className="cnose-title">
                            <h2>اصلاح فرم بینی</h2>
                            <img src={v261} alt="" id="cnose-line"/>
                        </div>
                        <p>بسیاری از افراد دوست دارند حالت بینی خود را کمی تغییر داده و ایراد و مشکلات ظاهری آن را برطرف کنند. اما مسئله اینجا است که جراحی همواره راه حلی استرس آور و گران قیمت بوده و هرکسی حاضر نیست آن را امتحان کند. خوشبختانه پیشرفت تکنولوژی، روش های مختلفی را برای زیباتر کردن بینی شما بدون نیاز به جراحی معرفی کرده است. یکی از بهترین و موثرترین این روش ها لیفت بینی است. روشی که بدون نیاز به جراحی و حتی بیهوشی با کمترین عوارض شما را به نتیجه دلخواهتان خواهد رساند. لیفت بینی روشی موثر با اثراتی ماندگار است. لیفت بینی چیست؟ لیفت بینی روشی است که برای برطرف کردن ایرادهای ظاهری بینی یا برخی مشکلات پزشکی نظیر انحراف و مشکلات تنفسی استفاده می شود. </p>
                    <div className="bb-btns">
                    <button id="bb-btn3" onClick={openModal3}>  بیشتر بدانید </button> 
                      
                    </div>
                    </div>
                    <div className="cnose-pic" id="cnose">
                    <img src={g258} alt="" id="cnose-main"/>
                   
</div>      
        </div>

        <div className="campaign-sec2" id="ccontact">
        <div className="cp-text">
                <img src={ptitle} alt=""/>
                <p>با متخصصین ما در ارتباط باشید</p>
                <p>اطلاعاتتون را ثبت کنید تا باهاتون تماس بگیریم</p>
            </div>
            <div className="campaign-contact">
            <div className="cp-forms">
                <div className="cc1">درخواست مشاوره رایگان</div>
               <input type="text" id="cname" placeholder="نام و نام خانوادگی"/>
               <input type="text" id="cnumber" placeholder="شماره تماس" />
               <select name="job"  id="jobs" ><option value="بوتاکس">بوتاکس</option><option value="لیزر">لیزر</option><option value="اصلاح فرم بینی">اصلاح فرم بینی</option><option value="لیزر الکس آلما">لیزر الکس آلما</option><option value="تزریق چربی">تزریق چربی</option><option value="فیلر">فیلر</option><option value="لیفت تخصصی با نخ">لیفت تخصصی با نخ</option><option value="بیبی گلو (پوست کره ای)">بیبی گلو (پوست کره ای)</option></select>
               <textarea name="" id="ctext" cols="30" rows="10" placeholder="توضیحات..."></textarea>
               <div className="cpf-btn">
                  <button onClick={send}>ثبت درخواست</button>
               </div>
               <img src={g239} alt="" id="cntct-bck"/>
            </div>
            
            <div className="campaign-info">
                <div className="ci-loc">
                    <p>تهران، بلوار اندرزگو</p>
                    <img src={loc1} alt=""/>
                </div>
                <div className="ci-loc" id="cin">
                   <div className="ci-numbers">
                      <a href="tel:02126428963"><p>021-26428963</p></a> 
                     <a href="tel:09196442926">  <p>0919-6442926</p> </a>
                   </div>
                    <img src={call} alt=""/>
                </div>
                <div className="ci-loc">
                    <p> مشاوره آنلاین در واتس اپ : <a href="tel:09196442926">  6442926-0919 </a> </p>
                    <img src={wp} alt="" />
                </div>
                <div className="ci-loc">
                    <p>آدرس اینستاگرام : <a href="https://www.instagram.com/niloofarclinic/">niloofarclinic </a> </p>
                    <img src={insta} alt="" />
                </div>
            </div>
            </div>
          
        </div>
        
        <Footer />

    </div> );
}
 
export default Campaign;