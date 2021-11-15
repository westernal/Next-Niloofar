import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Head from 'next/head'
import Logo from "../../public/Images/logo.svg";
import { useEffect } from 'react';




const Works = () => {
    
   const korean1 = "/Images/korean/IMG_0745-rotated.jpg"
   const korean2 = "/Images/korean/IMG_0746.jpg"
   const korean3 = "/Images/korean/IMG_0748.jpg"
   const korean4 = "/Images/korean/IMG_0752.jpg"
   const korean5 = "/Images/korean/IMG_0755.jpg"
   const korean6 = "/Images/korean/IMG_0757-rotated.jpg"
   const korean7 = "/Images/korean/IMG_0759.jpg"
   const korean8 = "/Images/korean/IMG_7328.jpg"
   const korean9 = "/Images/korean/IMG_7331.jpg"
   const korean10 = "/Images/korean/IMG_7333.jpg"
   const korean11 = "/Images/korean/IMG_9265-1.jpg"
   const korean12 = "/Images/korean/IMG_9481.jpg"
   const filler1 = "/Images/filler/IMG_9271.jpg"
   const filler2 = "/Images/filler/IMG_9272.jpg"
   const filler3 = "/Images/filler/IMG_9273.jpg"
   const filler4 = "/Images/filler/IMG_9275.jpg"
   const filler5 = "/Images/filler/IMG_9276.jpg"
   const filler6 = "/Images/filler/IMG_9277.jpg"
   const filler7 = "/Images/filler/photo_2021-07-28_18-39-24.jpg"
   const filler8 = "/Images/filler/photo_2021-07-28_18-39-50.jpg"
   const filler9 = "/Images/filler/photo_2021-07-28_18-39-54.jpg"
   const filler10 = "/Images/filler/photo_2021-07-28_18-39-58.jpg"
   const filler11 = "/Images/filler/photo_2021-07-28_18-40-03.jpg"
   const filler12 = "/Images/filler/photo_2021-07-28_18-40-08-1.jpg"
   const botax1 = "/Images/botax/IMG_8714-1.jpg"
   const botax2 = "/Images/botax/IMG_8716.jpg"
   const botax3 = "/Images/botax/IMG_8730-1.jpg"
   const botax4 = "/Images/botax/IMG_8947.jpg"
   const botax5 = "/Images/botax/IMG_4781.jpg"
   const botax6 = "/Images/botax/IMG_4782.jpg"
   const botax7 = "/Images/botax/IMG_4800.jpg"
   const botax8 = "/Images/botax/IMG_4823.jpg"
   const botax9 = "/Images/botax/IMG_4824.jpg"
   const meso1 = "/Images/meso/IMG_1207.jpg"
   const meso2 = "/Images/meso/IMG_1210.jpg"
   const meso3 = "/Images/meso/IMG_1211.jpg"
   const meso4 = "/Images/meso/IMG_1212.jpg"
   const meso5 = "/Images/meso/IMG_1215.jpg"
   const meso6 = "/Images/meso/IMG_1216.jpg"
   const meso7 = "/Images/meso/IMG_1217.jpg"
   const meso8 = "/Images/meso/IMG_1220.jpg"
   const meso9 = "/Images/meso/IMG_1227.jpg"
   const meso10 = "/Images/meso/IMG_1228.jpg"
   const meso11 = "/Images/meso/IMG_1232.jpg"
   const meso12 = "/Images/meso/IMG_1234.jpg"
   const nose1 = "/Images/nose/download.jpg"
   const nose2 = "/Images/nose/IMG_9269.jpg"
   const nose3 = "/Images/nose/IMG_9274.jpg"
   const nose4 = "/Images/nose/photo_2021-07-28_18-40-14.jpg"
   const nose5 = "/Images/nose/IMG_4778.jpg"
   const nose6 = "/Images/nose/IMG_4775.jpg"
   const nose7 = "/Images/nose/IMG_4776.jpg"
   const nose8 = "/Images/nose/IMG_4777.jpg"
   const nose9 = "/Images/nose/IMG_4779.jpg"
   const nose10 = "/Images/nose/IMG_4780.jpg"
   const nose11 = "/Images/nose/IMG_4783.jpg"
   const nose12 = "/Images/nose/IMG_4785.jpg"
   const lift2 = "/Images/lift/IMG_0066.jpg"
   const lift3 = "/Images/lift/IMG_0069.jpg"
   const lift4 = "/Images/lift/IMG_9979.jpg"

useEffect(() => {
    var wnav = document.getElementsByClassName('wnav');
    var activenav = document.querySelector('.blog-nav #active');
    var works = document.getElementsByClassName('work-pics');
    var activework = document.getElementById('waactive');
    const ul = document.querySelector(".blog-nav .mp-nav ul");
for (var i = 0; i < wnav.length; i++) {
    
      
      wrapper(i);
      
  }
  function wrapper(ilocal) {
    wnav[ilocal].addEventListener('click',function(e){
        e.preventDefault();
        
      wnavHandler(e,ilocal);
    });
  }
  function wnavHandler(e,ilocal) {
   
    e.preventDefault();
  
    var work = works[ilocal];
   
    var nav = wnav[ilocal];
  
  
      activenav.removeAttribute('id');
   
      activenav.setAttribute("id","b-nav");
      
      nav.setAttribute("id","active");
   
      activenav = nav;
    
      activework.removeAttribute('id');
    
      work.setAttribute("id","waactive");
     
      activework = work;
     
    
   
      
  }
},[])
  
 

    function hover(e) {
        
        
        if (e.target.querySelector('.active-') != null) {
            e.target.querySelector('.active-').style.opacity = "1";
        } else {
            e.target.style.opacity = "1";
        }
        
        
    }

    function endhover(e) {
        if (e.target.querySelector('.active-') != null) {
            e.target.querySelector('.active-').style.opacity = "0";
        } else {
            for (let index = 0; index < 8; index++) {
           document.getElementsByClassName("active-")[index].style.opacity = "0";
        
            }
        }
        
        
    }


    return ( 
        <div className="works-page">
            
            <Header />
            <Head>
    <title> نمونه کارها - کلینیک زیبایی نیلوفر</title>
        </Head>
            <div className="works">
            <div className="ms-title">
                <h1>نمونه کارها</h1>
                <img src={Logo} alt=""/>
            </div>
            <div className="blog-nav">
                <div className="mp-nav">
                    <ul>
                        
                        <li  ><a href="" className="navItem wnav" id="active" onMouseEnter={hover} onMouseLeave={endhover}><div className="active-"></div>اصلاح فرم بینی</a></li>
                        <li  ><a href="" className="navItem wnav" id="b-nav" onMouseEnter={hover} onMouseLeave={endhover}><div className="active-"></div>مزوتراپی</a></li>
                        <li  ><a href="" className="navItem wnav" id="b-nav" onMouseEnter={hover} onMouseLeave={endhover}><div className="active-"></div>  بوتاکس</a></li>
                        <li ><a href="" className="navItem wnav" id="b-nav" onMouseEnter={hover} onMouseLeave={endhover}><div className="active-"></div>انواع فیلر</a></li>
                        <li  ><a href="" className="navItem wnav" id="b-nav" onMouseEnter={hover} onMouseLeave={endhover}><div className="active-"></div>  لیفت تخصصی با نخ</a></li>
                        <li  ><a href="" className="navItem wnav" id="b-nav" onMouseEnter={hover} onMouseLeave={endhover}> <div className="active-"></div> پوست کره ای</a></li>
                    </ul>
                </div>
            </div>
           
            <div className="work-pics" id="waactive">
                <img src={nose1} alt=""/>
                <img src={nose2} alt=""/>
                <img src={nose3} alt=""/>
                <img src={nose4} alt=""/>
                <img src={nose5} alt=""/>
                <img src={nose6} alt=""/>
                <img src={nose7} alt=""/>
                <img src={nose8} alt=""/>
                <img src={nose9} alt=""/>
                <img src={nose10} alt=""/>
                <img src={nose11} alt=""/>
                <img src={nose12} alt=""/>
                
            </div>
         
            <div className="work-pics">
                <img src={meso1} alt=""/>
                <img src={meso2} alt=""/>
                <img src={meso3} alt=""/>
                <img src={meso4} alt=""/>
                <img src={meso5} alt=""/>
                <img src={meso6} alt=""/>
                <img src={meso7} alt=""/>
                <img src={meso8} alt=""/>
                <img src={meso9} alt=""/>
                <img src={meso10} alt=""/>
                <img src={meso11} alt=""/>
                <img src={meso12} alt=""/>
            </div>
            <div className="work-pics">
                <img src={botax1} alt=""/>
                <img src={botax2} alt=""/>
                <img src={botax3} alt=""/>
                <img src={botax4} alt=""/>
                <img src={botax5} alt=""/>
                <img src={botax6} alt=""/>
                <img src={botax7} alt=""/>
                <img src={botax8} alt=""/>
                <img src={botax9} alt=""/>
                
            </div>
            <div className="work-pics">
                <img src={filler1} alt=""/>
                <img src={filler2} alt=""/>
                <img src={filler3} alt=""/>
                <img src={filler4} alt=""/>
                <img src={filler5} alt=""/>
                <img src={filler6} alt=""/>
                <img src={filler7} alt=""/>
                <img src={filler8} alt=""/>
                <img src={filler9} alt=""/>
                <img src={filler10} alt=""/>
                <img src={filler11} alt=""/>
                <img src={filler12} alt=""/>
            </div>
            <div className="work-pics">
                
                <img src={lift2}  alt=""/>
                <img src={lift3}  alt=""/>
                <img src={lift4}  alt=""/>
                
            </div>
            <div className="work-pics">
                <img src={korean1} alt=""/>
                <img src={korean2} alt=""/>
                <img src={korean3} alt=""/>
                <img src={korean4} alt=""/>
                <img src={korean5} alt=""/>
                <img src={korean6} alt=""/>
                <img src={korean7} alt=""/>
                <img src={korean8} alt=""/> 
                <img src={korean9} alt=""/>
                <img src={korean10} alt=""/>
                <img src={korean11} alt=""/>
                <img src={korean12} alt=""/>
            </div>
            <div className="work-bck">
                <div className="w-bck">

                </div>
            </div>
        </div>
           
            <Footer />
            </div>
       
     );
}
 
export default Works;