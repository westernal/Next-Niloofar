import gift from "../../public/Images/gift (2).svg"
import UserNav from "../../components/UserNav"
import Countdown from 'react-countdown';
import RArrow from "../../public/Images/Arrow---Right.svg"
import Link from "next/link"
import { useEffect,useState } from 'react';
import PWAFooter from "../../components/PWAFooter";
import Header from '../../components/Header';
import moment from 'jalali-moment'
import NumberFormat from 'react-number-format'
import { useRouter } from "next/dist/client/router";


const Yalda = () => {
  const [posts,setPosts] = useState([]);
  let history = useRouter();

  useEffect(() => {

    if (localStorage.getItem("token") == "" || localStorage.getItem("token") == undefined) {
      history.push("/")
  }

var requestOptions = {
  method: 'GET',
  headers: { 'x-auth-token': `${localStorage.getItem('token')}`},
  redirect: 'follow'
};

fetch("https://server.niloofarclinic.beauty/api/user/festival", requestOptions)
  .then(response => response.json())
  .then(result => {
    setPosts(result);
    

  })
  .catch(error => console.log('error', error));

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
    

    return ( <div className="yalda">
      <Header />
          <Link href="/user-dash/welcome"><div className="back-sec">
            <p>شانس و قرعه کشی</p>
                <img src={RArrow} alt="right arrow" />
                
        </div></Link>
        <div className="dash-main">
        <div className="dash-sec1">
        <div className="yalda-chance">
            <h4>{posts && posts.score}</h4>
            <p>شانس شما برای شرکت در جشنواره:</p>
            <img src={gift} alt="" />
        </div>
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

        <div className="dash-result">
                            <div className="dr-nav">
                                <p>#</p>
                                <p>تاریخ مراجعه</p>
                                <p>نوع خدمات</p>
                                <p >جلسه </p>
                                <p>مبلغ پرداخت شده</p>
                            </div>
                            <div className="dr-rows" id="dr-rows">
                            {posts.sessions &&
                           posts.sessions.map((post,index) => {
                               return(
                                <div className="dr-row" key={index}>
                                <p id="drn">{index + 1}</p>
                                <p id="dr-date">{moment(post.date, 'YYYY-M-D HH:mm:ss').format('jYYYY/jM/jD ')}</p>
                                <p id="dr-work">{post.category}</p>
                                <p className="dr-spec"> {post.qty} </p>
                                <p className="dr-spec3">  <NumberFormat value={post.price} displayType={'text'} thousandSeparator={true} /> </p>
                                
                            </div>
                               )
                           })}
                           
                            </div>
                        </div>
</div>
<UserNav />
        </div>
        <PWAFooter />
    </div> );
}
 
export default Yalda;