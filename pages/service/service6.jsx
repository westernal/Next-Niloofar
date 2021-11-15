import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Logo from "../../public/Images/logo.svg"
import {Link} from "next/link"
import Head from 'next/head'

const Service6 = () => {
    return ( 
        <div className="service-page">
            <Header />
            <Head>
    <title>تزریق چربی - کلینیک زیبایی نیلوفر </title>
        </Head>
                <div className="serv-header">
            <div className="st-title">
            <h1> تزریق چربی    </h1>
                <img src={Logo} alt=""/>
            </div>
            <img src="../Images/Rectangle 15.jpg" alt="" id="serv-pic"/>
        </div>
        <div className="serv-main">
            <p> لورم ایپسوم متن ساختگی با تولید سادگی نا مفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقیو فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید سادگی نا مفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقیو فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
        </div>

        <div className="serv-footer">
            <div className="serv-pics">
                <img src="../Images/Rectangle 13.jpg" alt=""/>
                <img src="../Images/Rectangle 14.jpg" alt=""/>
                <img src="../Images/Rectangle 15.jpg" alt=""/>
                <img src="../Images/Rectangle 16.jpg" alt=""/>
                <img src="../Images/Rectangle 17.jpg" alt=""/>
            </div>
            <div className="serv-bck2">
                <div className="serv-bck">

                </div>
            </div>
            <div className="serv-btn">
            <Link href="/works"><a >  <button>دیدن همه نمونه کارها</button> </a></Link> 
            </div>
        </div>
            <Footer />
        </div>
     );
}
 
export default Service6