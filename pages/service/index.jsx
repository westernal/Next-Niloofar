import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Logo from "../../public/Images/logo.svg"
import Link from "next/link"
import Frame5 from "../../public/Images/Frame 35 (4).svg"
import Head from 'next/head'


const Service = () => {
    
    return (  
        <div className="service-page">
            
            <Header />
            <Head>
    <title>خدمات - کلینیک زیبایی نیلوفر</title>
        </Head>
              <div className="main-service">
            <div className="ms-title">
                <h1>خدمات ما</h1>
                <img src={Logo} alt=""/>
            </div>
            <div className="services">
                <div className="ms-pic" id="spic">
                    <img src="/Images/korean/IMG_0746.jpg" alt=""/>
                    <div className="sbck1"></div>
                    <div className="sbck2"></div>
                </div>
                <div className="ms-text" >
                <Link href="service/service1"><a>   <h2>پوست کره ای</h2> </a></Link> 
                <p>  از این روش برای کسانی استفاده می‌شود که از مشکلات پوستی نظیر التهابات پوستی شدید، زخم‌های آکنه‌ که جای آن‌ها بر روی پوست‌شان باقی مانده، دو رنگ بودن پوست، لک‌های پوستی و ... رنج می‌برند یا به هر دلیلی از کرم‌پودر زیاد استفاده می‌کنند. این روش بسیار نتیجه‌بخش هست و بهتون پیشنهاد می‌کنیم که امتحانش کنید.</p>
                    <Link href="service/service1"><a> <pre>{"<"}    جزییات بیشتر </pre> </a></Link>
                </div>
                <div className="ms-text">
                <Link href="service/service2"><a>   <h2>  لیفت تخصصی با نخ</h2> </a></Link>
                <p>   لیفت با نخ یک روش جوانسازی است که در آن از نخ‌های بخیه‌ی موقت یا جذبی برای لیفت یا بالا بردن پوست استفاده می‌شود.  این روش مناسب برای کسانی هست که صورتشون افتادگی داره و یا می‌خواهند پوستشون کشیده و سفت بشه.  علاوه بر موارد بالا از این روش برای زاویه‌سازی صورت و یا از بین بردن افتادگی ابرو هم استفاده می‌کنند. </p>
                    <Link href="service/service2"><a> <pre>{"<"}    جزییات بیشتر </pre> </a></Link>
                </div>
                <div className="ms-pic" id="spic2">
                    <img src="/Images/lift/IMG_0066.jpg" alt=""/>
                    <div className="sbck1"></div>
                    <div className="sbck2"></div>
                </div>
                <div className="ms-pic" id="spic">
                    <img src="/Images/filler/IMG_9271.jpg" alt=""/>
                    <div className="sbck1"></div>
                    <div className="sbck2"></div>
                </div>
                <div className="ms-text" >
                <Link href="service/service3"><a>   <h2>  انواع فیلر ها</h2> </a></Link>
                <p>  فیلر به قسمت‌های مختلف بدن از جمله صورت تزریق می‌شود. بیش‌ترین کاربردهای تزریق فیلر برای زاویه‌سازی فک، گونه هست، همچنین در ناحیه زیر چشم و لب هم از فیلر استفاده می‌کنند.</p>
                    <Link href="service/service3"><a > <pre>{"<"}    جزییات بیشتر </pre> </a></Link>
                </div>
                <div className="ms-text">
                <Link href="service/service4"><a>   <h2>  بوتاکس</h2> </a></Link>
                <p>  بوتاکس سم بوتولونیوم نوع A هست که با فلج کردن موقتی عضلات باعث از بین بردن خطوط پوستی و چین و چروک‌ها می‌شود. علت اصلی ایجاد چین و چروک‌های صورت، حرکت عضلات است. پس اگر آن‌ها را فلج کنیم، خطوط صورت هم محو می‌شوند.</p>
                    <Link href="service/service4"><a > <pre>{"<"}    جزییات بیشتر </pre> </a></Link>
                </div>
                <div className="ms-pic" id="spic4">
                    <img src="/Images/botax/IMG_8714-1.jpg" alt=""/>
                    <div className="sbck1"></div>
                    <div className="sbck2"></div>
                </div>
                <div className="ms-pic" id="spic">
                    <img src="/Images/meso/IMG_1207.jpg" alt=""/>
                    <div className="sbck1"></div>
                    <div className="sbck2"></div>
                </div>
                <div className="ms-text">
                <Link href="service/service5"><a>   <h2>  مزوتراپی</h2> </a></Link>
                <p>  مزوتراپی به طیف وسیعی از درمان‌های تزریقی با حداقل تهاجم گفته می‌شود که کاربردهای بسیاری دارند. یکی از کاربردهای این روش درمانی این است که باعث توقف ریزش مو و تحریک رشد موها می‌شود. </p>
                    <Link href="service/service5"><a> <pre>   جزییات بیشتر </pre> </a></Link>
                </div>
                <div className="ms-text">
                <Link href="service/service8"><a>    <h2>  لیزر الکس آلما</h2> </a></Link>
                <p>  بسیاری از ما در مورد لیزر موهای زائد شنیده‌ایم. برخی آن را معجزه‌ای می‌دانند، برخی می‌گویند که هیچ فایده‌ای ندارد و برخی هم از لیزر و عوارضش می‌ترسند!  لاین اصلی لیزر کلینیک نیلوفر، دستگاه السکاندرایت آلمان ۲۰۱۹ و ۲۰۲۰ هست. این دستگاه مجهز به کولینگ داخلی هست و همزمان با خنک کردن ناحیه‌ی موردنظر باعث می‌شود تا شما دردی رو احساس نکنید. بهترین نتیجه از استفاده این  دستگاه ۹ تا ۱۰ جلسه هست که به فاصله یک ماه انجام می‌شود.</p>
                    <Link href="service/service8"><a> <pre>{"<"}    جزییات بیشتر </pre> </a></Link>
                </div>
                <div className="ms-pic" id="spic6">
                   <img src={Frame5} alt="" id='laser1'/>
                    <div className="sbck1"></div>
                    <div className="sbck2"></div>
                </div>
                <div className="ms-pic" id="spic">
                    <img src="/Images/nose/download.jpg" alt=""/>
                    <div className="sbck1"></div>
                    <div className="sbck2"></div>
                </div>
                <div className="ms-text" >
                <Link href="service/service7"><a>    <h2>  اصلاح فرم بینی</h2> </a></Link>
                <p>  لیفت بینی روشی است که برای برطرف کردن ایرادهای ظاهری بینی یا برخی مشکلات پزشکی نظیر انحراف و مشکلات تنفسی استفاده می‌شود. با استفاده از این روش می‌توان در بخش‌های مختلف بینی تغییر ایجاد کرده و تناسب میان بینی و دیگر اجزای صورت را بیشتر کرد. </p>
                    <Link href="service/service7"><a> <pre>{"<"}   جزییات بیشتر </pre> </a></Link>
                </div>
                
                
            </div>
           
        </div>
        
        <Footer />
        </div>
       
     );
}
 
export default Service;