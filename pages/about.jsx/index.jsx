import React from 'react';
import Logo from "../../public/Images/logo.svg"
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Link from "next/link"
import Head from 'next/head'


const About = () => {
   
    return ( 
        <div className="about-page">
            <Header />
            
        <Head>
    <title> درباره مطب - کلینیک زیبایی نیلوفر </title>
        </Head>
             <div className="specialist">
            <div className="spec-pic">
                <img src="/Images/about/DSC02569-2.jpg" alt="" />
            </div>
            <div className="spec-text">
                <div className="st-title">
                    <h1>نیلوفر  صلحی</h1>
                    <img src={Logo} alt="" />
                </div>
                <h4>مشاور تخصصی شما در مطب زیبایی نیلوفر</h4>
                <p>من نیلوفر صلحی مشاور تخصصی شما در مطب زیبایی نیلوفر هستم. حدود ۵ سال است که در این زمینه فعالیت می‌کنم و هم‌اکنون به عنوان دوست و همراه و نه فقط مشاور پوستی و زیبایی، سعی دارم بر اساس نیاز های صورت و پوست شما بهترین مشاوره و خدمات رو ارائه بدهم. اینجا در کلینیک انواع کارهای پوستی و پزشکی با جدیدترین متد قابل انجام است.  طبق تشخیص های پوستی که زیر نظر من و گاها اقای دکتر انجام می‌شود نیاز است چندین تکنیک پوستی همزمان انجام شده تا به نتیجه مورد نظر و پوستی نرمال برسیم و این مورد می‌تواند حسن مطب زیبایی نیلوفر نسبت به سایر مطب های زیبایی و کلینیک‌ها باشد که تکنیک های مختلف در اینجا بر اساس نیاز پوست شما قابل انجام است.</p>
            </div>
        </div>
        <div className="salon-pics">
                <img src="/Images/about/DSC03462-Edit-1-scaled.jpg" alt="" />
                <img src="/Images/about/DSC03466-Edit-1-scaled.jpg" alt="" />
                <img src="/Images/DSC02936.jpg" alt="" />
                <img src="/Images/about/DSC02891-scaled.jpg" alt="" id="sp4"/>
            </div>
        <div className="salon">
            <div className="st-title">
                <h1> درباره مطب زیبایی نیلوفر </h1>
                <img src={Logo} alt="" />
            </div>
            <p>مطب زیبایی نیلوفر از سال ۱۳۹۸ توسط نیلوفر صلحی و امیرحسین طبیب زاده شروع به کار کرده است. ما در مطب، تمام خدمات زیبایی و پوستی را با بهترین دستگاه ها و مواد انجام داده و همیشه سعی بر این داریم که از جدیدترین امکانات و دستگاه های موجود استفاده کنیم. علاوه بر انجام درست خدمات، برای ما بسیار مهم است که شما نیز تجربه خوشایندی از حضور در کلینیک نیلوفر داشته باشید. امیدواریم کنار شما عزیزان در راستای رسیدن به این اهداف موفق باشیم.</p>
            
            <div className="salon-btn">
            <Link href="/contact"><a>   <button>درخواست وقت مشاوره</button> </a></Link> 
            </div>
  
        </div>
        <Footer />
        </div>
     );
}
 
export default About;