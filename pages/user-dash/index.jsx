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
    <title>?????????????? - ???????????? ???????????? ????????????</title>
        </Head>
            <div className="survey">
              <Link href="/user-dash/welcome"><a>
            <div className="back-sec">
            <p>????????????????</p>
                <img src={RArrow} alt="right arrow" />
                
        </div>
        </a></Link>
            <div className="dash-main">
                   <div className="dash-sec1">
                     <div className="blog-nav">
                     <div className="mp-nav">
               <ul>
                <li><a href="#" className="wnav" id="active" onMouseEnter={hover2} onMouseLeave={endhover2} onClick={q1Handler}><div className="active-"></div>?????? ??????????????</a></li> 
                 <li><a href="#" className="wnav" id="b-nav" onMouseEnter={hover2} onMouseLeave={endhover2} onClick={q2Handler}><div className="active-"></div> ?????? ???????????????? ?????????? ????????????</a></li> 
               </ul>
           </div> 
           </div>  
                <div className="questions1" >
                  <form onSubmit={handleSurvey}>
                <div className="q1-sec1">
                       
                       <div className="qs1-radio">
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno1" value="??????" onClick={check}/>
                         <label htmlFor="no" >??????</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno1" value="??????" onClick={check} />
                         <label htmlFor="yes">??????</label>
                           </div>
                        
                       </div>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno2" value="??????" onClick={check}/>
                         <label htmlFor="no">??????</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno2" value="??????" onClick={check}/>
                         <label htmlFor="yes">??????</label>
                           </div>
                        
                       </div>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno3" value="??????" onClick={check}/>
                         <label htmlFor="no">??????</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno3" value="??????" onClick={check}/>
                         <label htmlFor="yes">??????</label>
                           </div>
                        
                       </div>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno4" value="??????" onClick={check}/>
                         <label htmlFor="no">??????</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno4" value="??????" onClick={check}/>
                         <label htmlFor="yes">??????</label>
                           </div>
                        
                       </div>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno5" value="??????" onClick={check}/>
                         <label htmlFor="no">??????</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno5" value="??????" onClick={check}/>
                         <label htmlFor="yes">??????</label>
                           </div>
                        
                       </div>
                       </div>
                       <div className="qs1-q">
                       <p>1. ???? ???????????? ???? ?????????? ?????????? ???????? ????????????</p>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno1" value="??????" onClick={check}/>
                         <label htmlFor="no">??????</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno1" value="??????" onClick={check}/>
                         <label htmlFor="yes">??????</label>
                           </div>
                        
                       </div>
                       <p>2. ???????? ?????????? ???????????? ???? ???????????? ???? ???????????? ?????????? </p>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno2" value="??????" onClick={check}/>
                         <label htmlFor="no">??????</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno2" value="??????" onClick={check}/>
                         <label htmlFor="yes">??????</label>
                           </div>
                        
                       </div>
                       <p>3. ?????? ?????????? ???? ???? ???? ???????????? ?? ?????????????? ?????? ?????????? ???? ?????????? </p>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno3" value="??????" onClick={check}/>
                         <label htmlFor="no">??????</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno3" value="??????" onClick={check}/>
                         <label htmlFor="yes">??????</label>
                           </div>
                        
                       </div>
                       <p>4. ?????? ???? ???????? ?????????? ?????????????? </p>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno4" value="??????" onClick={check}/>
                         <label htmlFor="no">??????</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno4" value="??????" onClick={check}/>
                         <label htmlFor="yes">??????</label>
                           </div>
                        
                       </div>
                       <p>5. ?????? ???? ?????????? ?? ?????????? ???? ???????? ???? ?????????????? </p>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno5" value="??????" onClick={check}/>
                         <label htmlFor="no">??????</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno5" value="??????" onClick={check}/>
                         <label htmlFor="yes">??????</label>
                           </div>
                        
                       </div>
                       </div>
                   </div>
                    <div className="q1-sec2">
                        <p>6. ???????? ?????????? ???? ???????? ?????????? ???? ?????????????? ?????????? </p>
                        <div className="qs2-checkbox">
                            <div className="checkbox-item">
                               <input type="checkbox" id="job1" name="job1" value="korean" onClick={check}/>
                               <label htmlFor="job1"> ???????? ?????? ????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job2" name="job2" value="nose" onClick={check}/>
                               <label htmlFor="job2"> ?????????? ?????? ????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job3" name="job3" value="botax" onClick={check}/>
                               <label htmlFor="job3">????????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job4" name="job4" value="lift" onClick={check}/>
                               <label htmlFor="job4">  ???????? ?????????? ???? ????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job5" name="job5" value="filler" onClick={check}/>
                               <label htmlFor="job5"> ?????????? ????????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job6" name="job6" value="meso" onClick={check}/>
                               <label htmlFor="job6">  ????????????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job7" name="job7" value="laser" onClick={check}/>
                               <label htmlFor="job7"> ???????? ???????? ????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job8" name="job8" value="injection" onClick={check}/>
                               <label htmlFor="job8">?????????? ????????</label>
                            </div>
                        </div>
                    </div>
                    <div className="q1-sec3">
                        <p> 7. ???? ???????? ???? ???????? ???? ???????????????? ?????????? ?????????? </p>
                        <input type="textarea" placeholder="?????????? ????????..." onChange={text}/>
                    </div>
                    <div className="q1-sec3">
                        <p> 8. ???? ?????????? ???? ???????? ???? ?????????? ???? ???? ???? ???????? ????????????????</p>
                        <input type="textarea" placeholder="?????????? ????????..."  onChange={text}/>
                    </div>
                    <div className="yesno-q">
                    <div className="yq-radio">
                            <div className="radio-item">
                            <input type="radio" id="bad" name="yesno6" value="bad" onClick={check}/>
                          <label htmlFor="bad">????????</label>
                            </div>
                            <div className="radio-item">
                            <input type="radio" id="medium" name="yesno6" value="medium" onClick={check}/>
                          <label htmlFor="medium">??????????</label>
                            </div>
                            <div className="radio-item">
                            <input type="radio" id="good" name="yesno6" value="good" onClick={check}/>
                          <label htmlFor="good">??????</label>
                            </div>
                            <div className="radio-item">
                            <input type="radio" id="great" name="yesno6" value="great" onClick={check}/>
                          <label htmlFor="great">????????</label>
                            </div>
                         
                        </div>
                        <p>9. ???????? ???????????? ?????????????? ???? ?????? ?????????? ????????</p>
                    </div>
                    <div className="q1-sec3">
                        <p> 10. ???????? ?????????? ???? ???????????? ???? ???????????? ?????????? ????????  </p>
                        <input type="textarea" placeholder="?????????? ????????..." onChange={text}/>
                    </div>
                    <div className="q1-sec3">
                        <p> 11. ?????? ???????? ???? ???????? ???????? ?????? ???????? ???????????? ????????????  </p>
                        <input type="textarea" placeholder="?????????? ????????..." onChange={text}/>
                    </div>
                    <div className="q1-sec3">
                        <p> 12. ?????? ?????????? ?????????? ?? ???????????????? ???????? ???? ???????? ???????? ?? ???????? ???????? ?????????? ?????????? ???????? ?????????????? ???? ?????? ?????????? ?????? ???????? </p>
                        <input type="textarea" placeholder="?????????? ????????..." onChange={text} required/>
                    </div>
                    <div className="yesno-q">
                    <div className="yq-radio">
                            <div className="radio-item">
                            <input type="radio" id="no" name="yesno7" value="??????" onClick={check}/>
                          <label htmlFor="no">??????</label>
                            </div>
                            <div className="radio-item">
                            <input type="radio" id="yes" name="yesno7" value="??????" onClick={check}/>
                          <label htmlFor="yes">??????</label>
                            </div>
                            </div>
                            <p>13. ?????? ???????? ?????????? ???? ?????????? ?????? ???????????? ???? ?????? ?????????? </p>
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
                        <h3>???????????? ?????????? ???? ????????????</h3>
                    </div>
                    <div className="s7-btn">
                   <button type='submit' >??????</button>
                   <p id="hidden">?????? ?????? ???? ???????????? ?????? ????</p>
                 </div>
                 </form>
                </div>
                {/* questions1 ends */}
                <div className="questions2" >
                  <form onSubmit={handleQ} > 
                        <div className="q2-info">
                           <div className="qi-sec1">
                           <div className="qi1">
                           <p>?????????? ????????????:</p>
                                <DatePicker  />
                               
                            </div>
                            <input type="text" name="year" id="year" placeholder="????" onChange={text} required/>
                            <input type="text" placeholder="??????" onChange={text} required/>
                           </div>
                           <input type="textarea" placeholder="????????" onChange={text} required/>
                        </div>
                        <div className="q1-sec1">
                       
                       <div className="qs1-radio">
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno8" value="??????" onClick={check}/>
                         <label htmlFor="no">??????</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno8" value="??????" onClick={check}/>
                         <label htmlFor="yes">??????</label>
                           </div>
                        
                       </div>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno9" value="??????" onClick={check}/>
                         <label htmlFor="no">??????</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno9" value="??????" onClick={check}/>
                         <label htmlFor="yes">??????</label>
                           </div>
                        
                       </div>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno10" value="??????" onClick={check}/>
                         <label htmlFor="no">??????</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno10" value="??????" onClick={check}/>
                         <label htmlFor="yes">??????</label>
                           </div>
                        
                       </div>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno11" value="??????" onClick={check}/>
                         <label htmlFor="no">??????</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno11" value="??????" onClick={check}/>
                         <label htmlFor="yes">??????</label>
                           </div>
                        
                       </div>
                    
                       </div>
                       <div className="qs1-q">
                       <p>1. ?????? ???????? ?????????????? ( ?????????? ???? ?????????? ) ???? ?????????????? ?????????? ????????????  </p>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno8" value="??????" onClick={check} />
                         <label htmlFor="no">??????</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno8" value="??????" onClick={check}/>
                         <label htmlFor="yes">??????</label>
                           </div>
                        
                       </div>
                       <p> 2. ?????? ???? ?????????? ?????????????? ???? ???????????? ???????? ????????????  </p>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno9" value="??????" onClick={check}/>
                         <label htmlFor="no">??????</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno9" value="??????" onClick={check}/>
                         <label htmlFor="yes">??????</label>
                           </div>
                        
                       </div>
                       <p>3. ?????? ???? ?????? ?????? ???? ?????????????? ?????????????? ???? ?????????? </p>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno10" value="??????" onClick={check}/>
                         <label htmlFor="no">??????</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno10" value="??????" onClick={check}/>
                         <label htmlFor="yes">??????</label>
                           </div>
                        
                       </div>
                       <p>4. ?????? ?????? ???? ???????????? ?????????? ???? ?????????? ?? ?????? ???? ???????????? ????????????</p>
                       <div className="yq-radio">
                           <div className="radio-item">
                           <input type="radio" id="no" name="yesno11" value="??????" onClick={check}/>
                         <label htmlFor="no">??????</label>
                           </div>
                           <div className="radio-item">
                           <input type="radio" id="yes" name="yesno11" value="??????" onClick={check}/>
                         <label htmlFor="yes">??????</label>
                           </div>
                        
                       </div>
                      
                       </div>
                   </div>
                    <div className="q1-sec2">
                        <p>5. ?????? ?????????? ?????????????? ?????? ???? ?????????? ???????? ????????</p>
                        <div className="qs2-checkbox">
                            <div className="checkbox-item">
                               <input type="checkbox" id="job??1" name="job1" value="korean" onClick={check}/>
                               <label htmlFor="job1"> ???????????? ?????????????? / ?????????????? </label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job2" name="job2" value="nose" onClick={check}/>
                               <label htmlFor="job2"> ?????????? ???? / ???????????? / ???? / ????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job3" name="job3" value="botax" onClick={check}/>
                               <label htmlFor="job3">??????????????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job4" name="job4" value="lift" onClick={check}/>
                               <label htmlFor="job4">  ???????????????????????? ???? ????????????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job5" name="job5" value="filler" onClick={check}/>
                               <label htmlFor="job5">  ?????????? ????????</label>
                            </div>
                            
                            
                           
                        </div>
                    </div>
                   <div className="q2-tarea"><input type="textarea" placeholder="???????? ??????????????... " onChange={text}/></div> 
                    <div className="yesno-q">
                    <div className="yq-radio">
                            <div className="radio-item">
                            <input type="radio" id="no" name="yesno12" value="??????" onClick={check}/>
                          <label htmlFor="no">??????</label>
                            </div>
                            <div className="radio-item">
                            <input type="radio" id="yes" name="yesno12" value="??????" onClick={check}/>
                          <label htmlFor="yes">??????</label>
                            </div>
                            </div>
                            <p>6. ?????? ?????????? ???????? ???????? ???? ?????????? {"("} ???? ???????????? ???? ?????????? {")"} </p>
                    </div>
                  <div className="q2-tarea"><input type="textarea" placeholder="?????????? ????????..." onChange={text}/></div>  
                    <div className="yesno-q">
                    <div className="yq-radio">
                            <div className="radio-item">
                            <input type="radio" id="no" name="yesno13" value="??????" onClick={check}/>
                          <label htmlFor="no">??????</label>
                            </div>
                            <div className="radio-item">
                            <input type="radio" id="yes" name="yesno13" value="??????" onClick={check}/>
                          <label htmlFor="yes">??????</label>
                            </div>
                            </div>
                            <p>7. ?????? ?????????? ?????? ?????????? ???????????? </p>
                    </div>
                  <div className="q2-tarea"><input type="textarea" placeholder="?????????? ????????..." onChange={text}/></div>  
                  <div className="checkbox-spec">
                  <div className="q1-sec2">
                        <p> 8. ?????????? ????????????:</p>
                        <div className="qs2-checkbox">
                            <div className="checkbox-item">
                               <input type="checkbox" id="job1" name="job1" value="korean" onClick={check}/>
                               <label htmlFor="job1">  ???????????? ???????? ?? ??????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job2" name="job2" value="nose" onClick={check}/>
                               <label htmlFor="job2"> ????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job3" name="job3" value="botax" onClick={check}/>
                               <label htmlFor="job3">??????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job4" name="job4" value="lift" onClick={check}/>
                               <label htmlFor="job4">  ??????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job5" name="job5" value="filler" onClick={check}/>
                               <label htmlFor="job5">  ???????? ?????? ????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job5" name="job5" value="filler" onClick={check}/>
                               <label htmlFor="job5">   ????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job5" name="job5" value="filler" onClick={check}/>
                               <label htmlFor="job5">   ????????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job1" name="job1" value="korean" onClick={check}/>
                               <label htmlFor="job1"> ??????????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job2" name="job2" value="nose" onClick={check}/>
                               <label htmlFor="job2"> ?????????? ?? ???????? ???????????? </label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job3" name="job3" value="botax" onClick={check}/>
                               <label htmlFor="job3">???????????? ??????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job4" name="job4" value="lift" onClick={check}/>
                               <label htmlFor="job4">  ???? ????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job5" name="job5" value="filler" onClick={check}/>
                               <label htmlFor="job5">  ???????? ????????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job5" name="job5" value="filler" onClick={check}/>
                               <label htmlFor="job5">  ???????????? ??????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job5" name="job5" value="filler" onClick={check}/>
                               <label htmlFor="job5">  ???????????????? ?????????????? (???????????? ????????????)</label>
                            </div>
                        
                        </div>
                    </div>
                  </div>
                 <div className="q2-tarea"> <input type="textarea" placeholder="????????..." onChange={text}/></div>
                  <div className="q1-sec2">
                        <p>9. ?????? ?????????????? ?????????? ???? ???? ???? ?????? ?????????????????? ???????? ??????????</p>
                        <div className="qs2-checkbox">
                            <div className="checkbox-item">
                               <input type="checkbox" id="job1" name="job1" value="korean" onClick={check}/>
                               <label htmlFor="job1">  ?????????? ?????????? ????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job2" name="job2" value="nose" onClick={check}/>
                               <label htmlFor="job2"> ???????????? ??????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job3" name="job3" value="botax" onClick={check}/>
                               <label htmlFor="job3">???????????? ???????????? ?? ??????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job4" name="job4" value="lift" onClick={check}/>
                               <label htmlFor="job4">  ???????????? ????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job5" name="job5" value="filler" onClick={check}/>
                               <label htmlFor="job5">  ???????????? ???? ??????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job5" name="job5" value="filler" onClick={check}/>
                               <label htmlFor="job5">   ???????????? ???? ?????????????? ????????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job5" name="job5" value="filler" onClick={check}/>
                               <label htmlFor="job5">   ???????????? ??????????</label>
                            </div>
                        </div>
                    </div>
                  <div className="q2-tarea"><input type="textarea" placeholder="????????..." onChange={text}/></div>  
                    <div className="checkbox-spec">
                  <div className="q1-sec2">
                        <p> 10. ???????? ???????????????? ???? ???? ???????? ?????????????? ???? ???????? ???? ??????????????.</p>
                        <div className="qs2-checkbox">
                            <div className="checkbox-item">
                               <input type="checkbox" id="job1" name="job1" value="korean" onClick={check}/>
                               <label htmlFor="job1">  ????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job2" name="job2" value="nose" onClick={check}/>
                               <label htmlFor="job2"> ???????????? ????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job3" name="job3" value="botax" onClick={check}/>
                               <label htmlFor="job3">?????? ?????? ??????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job4" name="job4" value="lift" onClick={check}/>
                               <label htmlFor="job4">  ????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job5" name="job5" value="filler" onClick={check}/>
                               <label htmlFor="job5">    ????????????????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job5" name="job5" value="filler" onClick={check}/>
                               <label htmlFor="job5">   ???? ??????????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job5" name="job5" value="filler" onClick={check}/>
                               <label htmlFor="job5">   ?????? ??????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job1" name="job1" value="korean" onClick={check}/>
                               <label htmlFor="job1"> ?????? ????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job2" name="job2" value="nose" onClick={check}/>
                               <label htmlFor="job2"> ???????? ????</label>
                            </div>
                            <div className="checkbox-item">
                               <input type="checkbox" id="job3" name="job3" value="botax" onClick={check}/>
                               <label htmlFor="job3">????????????</label>
                            </div>
                        
                        </div>
                    </div>
                  </div>
                <div className="q2-tarea"><input type="textarea" placeholder="???????? ?????????????? ?? ???? ???????? ?????????????? ???? ?????????? ?????? ?????? ?????????? ???? ??????????????." onChange={text}/></div>  
                  <div className="q1-sec3">
                        <p> 11. ???????????? ?????????????? ???? ???? ???????????? ???????????? ???????? ????????.</p>
                        <input type="textarea" placeholder="?????????? ????????..."  onChange={text}/>
                    </div>
                    <div className="q1-sec3">
                        <p> 12. ???? ???????????? ???????????? ???????? ?????????? ?????? ???? ???????? ???????????? ???????? ?? ???????? ?????????? ????????. </p>
                        <input type="textarea" placeholder="?????????? ????????..." onChange={text} />
                    </div>
                    <div className="s7-btn">
                   <button type='submit' >??????</button>
                   <p id="hidden">?????? ?????? ???? ???????????? ?????? ????</p>
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