import React from 'react';
import g10 from "../../public/Images/g10 (2).svg"
import Link from "next/link"
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head'


const LogIn = () => {
    let history = useRouter();
    
    function logIn(e) {
     
        const number = fixNumbers(document.getElementById("number").value);
        const https = require('https');

    const httpsAgent = new https.Agent({
        rejectUnauthorized: false,
      });
        
        
        var requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              mobileNumber : number
          }),
          redirect: 'follow',
          agent: httpsAgent
        };

        

       
        
        fetch(`https://server.niloofarclinic.beauty/api/user/signInByMobilePhone/`, requestOptions)
          .then(response => {response.json();
          if (response.ok) {
              
            document.getElementById("after").style.display = "block";
            document.getElementById("before").style.display = "none";
            
           }
          
           if (!response.ok) {
            document.getElementById('error').style.display = "block";
          }})
          .then(result =>  console.log(result))
          .catch(error => console.log('error', error))
      }

      var
      persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
      arabicNumbers  = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
      fixNumbers = function (str)
      {
        if(typeof str === 'string')
        {
          for(var i=0; i<10; i++)
          {
            str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
          }
        }
        return str;
      };



      function inside() {
          const numbers = document.getElementsByClassName("scode");
          let number = document.getElementById("number").value;
          var code = "";
          
          for (let i = 0; i < numbers.length; i++) {
            code = code + numbers[i].value;
              
          }
          number=fixNumbers(number);
          
          const https = require('https');

          const httpsAgent = new https.Agent({
              rejectUnauthorized: false,
            });
          var requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                mobileNumber : number,
                code : code
            }),
            redirect: 'follow',
            agent: httpsAgent
          };
        
          
          fetch("https://server.niloofarclinic.beauty/api/user/validatecode/", requestOptions)
            .then(response =>response.json() )
            .then(result => {
                
                if (result.msg) {
                  document.getElementById('error2').style.display = "block"
                }
                    if (result != undefined) {
                     
                      localStorage.setItem('token', result.token);
                      localStorage.setItem('type', result.type);
                   
                      if (result.type == "end-user") {
                          history.push('/user-dash/welcome');
                      } 
                      if (result.type == "admin") {
                        history.push('/admin-dash/welcome2');
                      }
                    }
               
                    
                    
                    
                   })
            .catch(error =>  document.getElementById('error2').style.display = "block");
      }


     function nextInput(e) {

          if (e.keyCode==8 && e.target.previousSibling != null) {
            e.target.previousSibling.focus();
          }
            if (e.target.nextSibling != null && e.keyCode != 8) {
                e.target.nextSibling.focus();
            }
           
        }

        function paste(event) {
          event.preventDefault();
          let paste = (event.clipboardData || window.clipboardData).getData('text');
          let inp = document.getElementsByClassName("scode");
          for (let i = 0; i < paste.length; i++) {
            inp[i].value = paste[i]; 
            
          }
        }
        
    
   

 
    return ( 
        <div className="login-page" >
          <Head>
    <title>ورود - کلینیک زیبایی نیلوفر</title>
        </Head>
            <div className="lp-header">
            <Link href="/"><a> {"<"} <p> بازگشت به صفحه اصلی </p> </a></Link> 
            </div>
            
             
            <div className="su-main">
                <div className="su-one">
                    <div className="su-forms" id="before">
                        <div className="suf-header">
                          
                        <img src={g10} alt="" />
                        <h3>خوش آمدید</h3>
                        </div>
                        <p id="error">شماره ثبت نشده است</p>
                        <input type="text" placeholder="شماره تلفن همراه" id="number"/>
                      <div className="suf-btn"> <button  onClick={logIn}>ورود </button></div> 
                      <h5>هنوز ثبت نام نکردید؟ <Link href="/signup"><a > از اینجا ثبت نام کنید </a></Link> </h5>
                       
                    </div>
                    <div className="su-forms" id="after">
                        <div className="suf-header">
                        <img src={g10} alt="" />
                        <h3>خوش آمدید</h3>
                        </div>
                        
                        <h4>کد ارسال شده به شماره موبایلتان را وارد نمایید</h4>
                        <p id="error2">کد وارد شده اشتباه است</p>
                        <div className="sent-code">
                        <input type="number" pattern="^([0-9]+([\.][0-9]+)?)|([\u0660-\u0669]+([\.][\u0660-\u0669]+)?)$"onKeyUp={nextInput} className="scode" onPaste={paste}/>
                        <input type="number" pattern="^([0-9]+([\.][0-9]+)?)|([\u0660-\u0669]+([\.][\u0660-\u0669]+)?)$"onKeyUp={nextInput} className="scode"  onPaste={paste}/>
                        <input type="number" pattern="^([0-9]+([\.][0-9]+)?)|([\u0660-\u0669]+([\.][\u0660-\u0669]+)?)$"onKeyUp={nextInput} className="scode" onPaste={paste}/>
                        <input type="number" pattern="^([0-9]+([\.][0-9]+)?)|([\u0660-\u0669]+([\.][\u0660-\u0669]+)?)$"onKeyUp={nextInput} className="scode" onPaste={paste}/>
                        <input type="number" pattern="^([0-9]+([\.][0-9]+)?)|([\u0660-\u0669]+([\.][\u0660-\u0669]+)?)$"onKeyUp={nextInput} className="scode" onPaste={paste}/>
                        <input type="number" pattern="^([0-9]+([\.][0-9]+)?)|([\u0660-\u0669]+([\.][\u0660-\u0669]+)?)$"onKeyUp={nextInput} className="scode" onPaste={paste}/>
                        </div>
                      <div className="suf-btn"> <button onClick={inside}> ورود</button></div> 
                        <h5>هنوز ثبت نام نکردید؟ <Link href="/signup"><a> از اینجا ثبت نام کنید </a></Link> </h5>
                       
                    </div>
                    <div className="su-socials">
                       
                     <a href="https://instagram.com/niloofarclinic">  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.8281 20C23.8281 22.1143 22.1143 23.8281 20 23.8281C17.8857 23.8281 16.1719 22.1143 16.1719 20C16.1719 17.8857 17.8857 16.1719 20 16.1719C22.1143 16.1719 23.8281 17.8857 23.8281 20Z" fill="white"/>
<path d="M28.9519 13.227C28.7679 12.7283 28.4743 12.277 28.0928 11.9065C27.7224 11.525 27.2713 11.2314 26.7723 11.0474C26.3677 10.8903 25.7598 10.7032 24.6401 10.6522C23.4288 10.597 23.0657 10.5851 19.9993 10.5851C16.9326 10.5851 16.5694 10.5967 15.3585 10.6519C14.2388 10.7032 13.6306 10.8903 13.2262 11.0474C12.7272 11.2314 12.2759 11.525 11.9057 11.9065C11.5242 12.277 11.2307 12.728 11.0463 13.227C10.8892 13.6317 10.7021 14.2399 10.6511 15.3596C10.5959 16.5705 10.584 16.9337 10.584 20.0004C10.584 23.0668 10.5959 23.4299 10.6511 24.6412C10.7021 25.7609 10.8892 26.3688 11.0463 26.7734C11.2307 27.2724 11.5239 27.7234 11.9054 28.0939C12.2759 28.4754 12.7269 28.769 13.2259 28.953C13.6306 29.1105 14.2388 29.2975 15.3585 29.3485C16.5694 29.4037 16.9323 29.4153 19.999 29.4153C23.066 29.4153 23.4291 29.4037 24.6398 29.3485C25.7595 29.2975 26.3677 29.1105 26.7723 28.953C27.7739 28.5666 28.5656 27.775 28.9519 26.7734C29.1091 26.3688 29.2961 25.7609 29.3474 24.6412C29.4027 23.4299 29.4142 23.0668 29.4142 20.0004C29.4142 16.9337 29.4027 16.5705 29.3474 15.3596C29.2965 14.2399 29.1094 13.6317 28.9519 13.227ZM19.9993 25.8973C16.7421 25.8973 14.1017 23.2572 14.1017 20.0001C14.1017 16.7429 16.7421 14.1028 19.9993 14.1028C23.2561 14.1028 25.8965 16.7429 25.8965 20.0001C25.8965 23.2572 23.2561 25.8973 19.9993 25.8973ZM26.1296 15.2479C25.3685 15.2479 24.7515 14.6308 24.7515 13.8697C24.7515 13.1086 25.3685 12.4915 26.1296 12.4915C26.8908 12.4915 27.5078 13.1086 27.5078 13.8697C27.5075 14.6308 26.8908 15.2479 26.1296 15.2479Z" fill="white"/>
<path d="M20 0C8.95599 0 0 8.95599 0 20C0 31.044 8.95599 40 20 40C31.044 40 40 31.044 40 20C40 8.95599 31.044 0 20 0ZM31.4151 24.7348C31.3596 25.9573 31.1652 26.792 30.8813 27.5226C30.2847 29.0652 29.0652 30.2847 27.5226 30.8813C26.7923 31.1652 25.9573 31.3593 24.7351 31.4151C23.5104 31.4709 23.1192 31.4844 20.0003 31.4844C16.8811 31.4844 16.4902 31.4709 15.2652 31.4151C14.043 31.3593 13.208 31.1652 12.4777 30.8813C11.7111 30.593 11.0172 30.141 10.4434 29.5566C9.85931 28.9832 9.40735 28.2889 9.11896 27.5226C8.83514 26.7923 8.64075 25.9573 8.58521 24.7351C8.52875 23.5101 8.51562 23.1189 8.51562 20C8.51562 16.8811 8.52875 16.4899 8.5849 15.2652C8.64044 14.0427 8.83453 13.208 9.11835 12.4774C9.40674 11.7111 9.85901 11.0168 10.4434 10.4434C11.0168 9.85901 11.7111 9.40704 12.4774 9.11865C13.208 8.83484 14.0427 8.64075 15.2652 8.5849C16.4899 8.52905 16.8811 8.51562 20 8.51562C23.1189 8.51562 23.5101 8.52905 24.7348 8.58521C25.9573 8.64075 26.792 8.83484 27.5226 9.11835C28.2889 9.40674 28.9832 9.85901 29.5569 10.4434C30.141 11.0172 30.5933 11.7111 30.8813 12.4774C31.1655 13.208 31.3596 14.0427 31.4154 15.2652C31.4713 16.4899 31.4844 16.8811 31.4844 20C31.4844 23.1189 31.4713 23.5101 31.4151 24.7348Z" fill="white"/>
</svg>
 </a>
                       
                    </div>
                </div>
                <div className="su-bck">
                <img src="/Images/Group 275.jpg"  />
            </div>
            </div>
            </div>
        
     );
}
 
export default LogIn;