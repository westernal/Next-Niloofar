import yc1 from "../../public/Images/Group 3186.jpg"
import vec5 from "../../public/Images/Vector 5.svg"
import vec6 from "../../public/Images/Group 3162.svg"
import {Link} from "react-router-dom"
import logo from "../../public/Images/logo.svg"
import fourth from "../../public/Images/Group 3175 (1) 1.jpg"
import third from "../../../public/Images/Group 3174 1.jpg"
import second from "../../public/Images/Group 3173 1.jpg"
import first from "../../public/Images/Group 3172 1.jpg"
import yc4 from "../../public/Images/Group 3177.jpg"
import {ReactComponent as Document} from "../../public/Images/Document.svg"
import {ReactComponent as Logout} from "../../public/Images/Logout.svg"
import {ReactComponent as Works} from "../../public/Images/Combined-Shape.svg"
import yc5 from "../../public/Images/Frame 30.jpg"
import Footer from '../../components/Footer';
import Header from '../../components/Header';



const YaldaCampaign = () => {
    return ( <div className="yalda-campaign">
        <Header />
        <div className="yc-sec1">
            <img src={yc1} alt="" />
            <div className="yc1-text">
                <h2>از خدمات کلینیک استفاده کن، <span>سکه <img src={vec5} alt="" /></span> جایزه ببر!!!</h2>
                <p> تیم کلینیک زیبایی نیلوفر تصمیم گرفته برای قدردانی از شما همراهان عزیز و به مناسبت سالگرد افتتاحیه کلینیک جوایزی را به صورت قرعه کشی تقدیم شما عزیزان کند. </p>
                <h4> هر یک میلیون هزینه در کلینیک از تاریخ 8 مهر 1400 تا 30 آذر 1400</h4>
                <h4 id="yc1h4"> 1 شانس حضور در قرعه کشی <img src={vec6} alt="" id="v6"/></h4>
                <div className="yc1-btns">
                  <Link href="/service"><a > <button id="yc-btn1">خدمات کلینیک نیلوفر</button> </a></Link>
                 <Link href="/signup"> <a ><button id="yc-btn2">ثبت نام</button> </a></Link> 
                </div>
            </div>
        </div>
        <div className="yc-sec2">
            <img src={logo} alt="" />
            <p id="yc2p">جشنواره</p>
            <h3>درباره جشنواره یلدایی</h3>
            <p>تیم کلینیک زیبایی نیلوفر تصمیم گرفته برای قدردانی از شما همراهان عزیز و به مناسبت سالگرد افتتاحیه کلینیک جوایزی را به صورت قرعه کشی تقدیم شما عزیزان کند. خوبیه این قرعه کشی اینه که شما لازم نیست که تمام 1 میلیون رو یکجا هزینه کنید، شما می توانید در طول این 3 ماه از خدمات مختلف کلینیک استفاده کنید و با مجموع حداقل 1 میلیون تومان هزینه 1 شانس برای شرکت در قرعه کشی به دست بیارید. البته لازم به ذکر هست دوستانی که بیشتر از این مبلغ هزینه می کنن شانس بیشتری برای براده شدن دارن. به عنوان مثال اگر کسی 5 میلیون تومان هزینه کنه 5 شانس برای حضور در قرعه کشی به دست میاره.</p>
        </div>
        <div className="yc-sec3">
        <img src={logo} alt="" />
            <p id="yc2p">جوایز</p>
            <p>تیم نیلوفر سعی کرده علاوه بر جایزه های اصلی که به 3 نفر اول میرسه، تعداد جوایز رو بیشتر کنه که بتونیم تعداد نفرات بیشتری رو خوشحال کنیم.</p>
            <div className="prizes">
                <div className="prize" id="p4">
                    <div className="prize-title">
                        <p>نفرات چهارم تا دهم</p>
                        <img src={fourth} alt="" />
                    </div>
                    <h4>30 تا 50 درصد بن تخفیف استفاده از خدمات کلینیک</h4>
                </div>
                <div className="prize" id="p3">
                    <div className="prize-title">
                       <p>نفر سوم</p>
                        <img src={third} alt="" />
                    </div>
                    <h4>یک ربع سکه تمام بهار آزادی</h4>
                </div>
                <div className="prize" id="p2">
                    <div className="prize-title">
                        <p>نفر دوم</p>
                        <img src={second} alt="" />
                    </div>
                    <h4>یک نیم سکه تمام بهار آزادی</h4>
                </div>
                <div className="prize" id="p1">
                    <div className="prize-title">
                        <p>نفر اول</p>
                        <img src={first} alt="" />
                    </div>
                    <h4>یک سکه تمام بهار آزادی</h4>
                </div>
            </div>
        </div>
        <div className="yc-sec4">

        </div>
        <div className="yc-sec4">
            <img src={yc4} alt="" id="y4img"/>
            <div className="yc5-text">
           <div className="yc5-title"> <img src={logo} alt="" />
            <p id="yc2p">شرایط</p>
            <h3>شرایط شرکت در قرعه کشی</h3></div>
                <div className="yc-su">
                    <Logout />
                    <p>ثبت نام در سایت کلینیک</p>
                </div>
                <div className="yc-su" id="yc41">
                    <Document />
                    <p>شرکت در نظرسنجی</p>
                </div>
                <div className="yc-su" id="yc42">
                    <Works />
                    <p> استفاده از خدمات کلینیک به ارزش حداقل 1 میلیون تومان </p>
                </div>
            </div>
        </div>
        <div className="yc-sec5">
            <img src={yc5} alt="" />
            <h4>توجه داشته باشید که این جشنواره از 8 مهر تا 30 آذر 1400 برقرار است <br/> و قرعه کشی در 30 آذر، شب یلدار مصادف با سالگرد افتتاحیه کلینیک برگزار خواهد شد </h4>
        </div>
        <Footer />
    </div> );
}
 
export default YaldaCampaign;