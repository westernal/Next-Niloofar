import React from 'react';
import Logo from "../../public/Images/logo.svg"
import PersianTitle from "../../public/Images/persian title.svg"
import Group from "../../public/Images/Group.svg"
import Group1 from "../../public/Images/Group (1).svg"
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Head from 'next/head'


const Contact = () => {

    
    
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
    return ( 
        <div className="contact-page">
            <Header />
            <Head>
    <title>تماس با مطب - کلینیک زیبایی نیلوفر</title>
        </Head>
             <div className="ms-title">
            <h1>ارتباط با ما</h1>
            <img src={Logo} alt="" />
        </div>
        <div className="cp-main">
           
            <div className="cp-forms">
            <p id="done">درخواست شما با موفقیت ثبت شد</p>
                <input type="text" placeholder="نام و نام خانوادگی" id="cname" />
                <input type="text" placeholder="شماره تماس" id="cnumber"/>
                <select name="jobs" id="jobs" defaultValue="خدمت یا خدمات مورد نظر">
                    <option value="botox">بوتاکس</option>
                    <option value="laser">لیزر</option>
                    <option value="korean">پوست کره ای</option>
                    <option value="filler">فیلر</option>
                    <option value="nose">اصلاح فرم بینی</option>
                    <option value="mesotherapy">مزوتراپی</option>
                    <option value="lift">لیفت تخصصی با نخ</option>
                
                  </select>
                <textarea placeholder="توضیحات ..." id="ctext"></textarea>
                <div className="cpf-btn">
                    <button onClick={send}>ثبت درخواست</button>
                </div>
            </div>
            <div className="cp-text">
                <img src={PersianTitle} alt="" />
                <p>با متخصصین ما در ارتباط باشید</p>
                <p>اطلاعات خود را ثبت کرده تا با شما تماس بگیریم</p>
            </div>
        </div>
        <div className="cp-sec2">
            <div className="cps-form">
                <h3>راه های ارتباطی</h3>
                <div className="cp-loc">
                    <p>اندرزگو، کوچه آشتیانی منفرد، پلاک 1 ، واحد 5 </p>
                    <img src={Group} alt=""/>
                </div>
                <div className="cp-phone">
                    <p>021-26428963</p>
                    <img src={Group1} alt=""/>
                </div>
                <p id="mobile">0919-6442926</p>
            </div>
        </div>
        <div className="cp-sec3">
            <img src="/Images/Rectangle.jpg" alt=""/>
        </div>
        <Footer />
        </div>
     );
}
 
export default Contact;