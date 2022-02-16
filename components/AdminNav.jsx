import profile2 from "../public/Images/Group 238 (2).svg"
import Link from "next/link"
import { useRouter } from "next/dist/client/router"
import { useEffect } from "react"
import { useState } from "react"




const AdminNav = () => {

    let history = useRouter();
    const [name,setName] = useState("");

    useEffect(() => {
        setName(localStorage.getItem('name'))
    },[])

    function logOut(e) {
        e.preventDefault();
        localStorage.setItem('type', "");
        localStorage.setItem('token', "");
        localStorage.setItem('name', "");
          localStorage.setItem('number', "");
          history.push('/');
      }

      function hover(e) {
        
        
        if (e.target.querySelector('p') != null && e.target.querySelector('svg path') != null ) {
            e.target.querySelector('p').style.color = "black";
            e.target.querySelector('svg path').style.fill = "black";
        } else {
            e.target.style.color = "black";
            e.target.style.fill = "black";
        }
        
        
    }

    function endhover(e) {
        if (e.target.querySelector('p') != null && e.target.querySelector('svg path') != null ) {
            e.target.querySelector('p').style.color = "#949494";
            e.target.querySelector('svg path').style.fill = "#949494";
        } else {
            e.target.style.color = "#949494";
            e.target.style.fill = "#949494";
        }
        
        
    }

    return ( 
        <div className="dash-sec2">
        <div className="ds2-user">
            <img src={profile2} alt="" />
            <h2> {name && name}</h2>
        
        </div>
        <div className="ds2-nav">
        
           <Link href="/admin-dash"><a > <div className="ds2-works" onMouseEnter={hover} onMouseLeave={endhover}>
           <p>نمونه کارها</p>
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
<path fillRule="evenodd" clipRule="evenodd" d="M14.7008 2C18.0928 2 20.0388 3.679 20.0388 6.604V21.14C20.0388 21.75 19.7248 22.299 19.1968 22.606C18.6708 22.914 18.0368 22.92 17.5048 22.62L11.5448 19.253L5.52976 22.627C5.26976 22.773 4.98476 22.847 4.69876 22.847C4.40376 22.847 4.10876 22.768 3.84076 22.61C3.31376 22.303 2.99976 21.754 2.99976 21.145V6.421C2.99976 3.611 4.94676 2 8.34176 2H14.7008ZM14.7008 3.5H8.34176C5.79276 3.5 4.49976 4.482 4.49976 6.421V21.145C4.49976 21.239 4.55376 21.29 4.59876 21.316C4.64376 21.344 4.71476 21.364 4.79676 21.318L11.1788 17.738C11.4068 17.611 11.6858 17.61 11.9148 17.739L18.2418 21.313C18.3248 21.361 18.3958 21.339 18.4408 21.312C18.4858 21.285 18.5388 21.234 18.5388 21.14L18.5384 6.49004C18.5308 5.62937 18.3643 3.5 14.7008 3.5ZM15.1396 8.7285C15.5536 8.7285 15.8896 9.0645 15.8896 9.4785C15.8896 9.8925 15.5536 10.2285 15.1396 10.2285H7.82156C7.40756 10.2285 7.07156 9.8925 7.07156 9.4785C7.07156 9.0645 7.40756 8.7285 7.82156 8.7285H15.1396Z" fill="#949494"/>
</svg>
            </div> </a></Link>
         <Link href="/admin-dash/dashboard2"><a >  <div className="ds2-users" onMouseEnter={hover} onMouseLeave={endhover}>
         <p>کاربران</p>
         <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M9.9056 12.0117L9.9997 12.0117L10.2102 12.0124C11.819 12.023 15.4956 12.1855 15.4956 14.6775C15.4956 17.1531 11.9472 17.3146 10.2353 17.3251L9.60101 17.3251C7.99209 17.3145 4.31477 17.1522 4.31477 14.6633C4.31477 12.1846 7.99209 12.023 9.60101 12.0124L9.81151 12.0117C9.84416 12.0117 9.87555 12.0117 9.9056 12.0117ZM9.9056 13.2617C7.9256 13.2617 5.56477 13.505 5.56477 14.6633C5.56477 15.7955 7.78469 16.0601 9.72463 16.0751L9.9056 16.0758C11.8856 16.0758 14.2456 15.8333 14.2456 14.6775C14.2456 13.5075 11.8856 13.2617 9.9056 13.2617ZM16.5336 11.6735C18.5528 11.976 18.9769 12.9243 18.9769 13.6668C18.9769 14.1202 18.7986 14.9477 17.6069 15.4018C17.5336 15.4293 17.4586 15.4427 17.3844 15.4427C17.1328 15.4427 16.8953 15.2893 16.8003 15.0402C16.6769 14.7177 16.8394 14.356 17.1619 14.2335C17.7269 14.0185 17.7269 13.781 17.7269 13.6668C17.7269 13.3018 17.2628 13.0468 16.3478 12.9102C16.0069 12.8585 15.7711 12.541 15.8219 12.1985C15.8728 11.8568 16.1894 11.6293 16.5336 11.6735ZM3.98844 12.1985C4.03927 12.541 3.80344 12.8585 3.4626 12.9102C2.5476 13.0468 2.08344 13.3018 2.08344 13.6668C2.08344 13.781 2.08344 14.0177 2.64927 14.2335C2.97177 14.356 3.13427 14.7177 3.01094 15.0402C2.91594 15.2893 2.67844 15.4427 2.42677 15.4427C2.3526 15.4427 2.2776 15.4293 2.20427 15.4018C1.01177 14.9468 0.833435 14.1193 0.833435 13.6668C0.833435 12.9252 1.2576 11.976 3.2776 11.6735C3.62177 11.6302 3.93677 11.8568 3.98844 12.1985ZM9.9056 3.33334C12.0056 3.33334 13.7131 5.04168 13.7131 7.14084C13.7131 9.24001 12.0056 10.9483 9.9056 10.9483H9.8831C8.86644 10.945 7.91394 10.5467 7.2006 9.82668C6.4856 9.10751 6.09477 8.15251 6.0989 7.13834C6.0989 5.04168 7.80644 3.33334 9.9056 3.33334ZM9.9056 4.58334C8.4956 4.58334 7.34892 5.73084 7.34892 7.14084C7.34644 7.82418 7.6081 8.46334 8.08727 8.94584C8.56644 9.42834 9.20477 9.69584 9.88477 9.69834L9.9056 10.3233V9.69834C11.3156 9.69834 12.4631 8.55168 12.4631 7.14084C12.4631 5.73084 11.3156 4.58334 9.9056 4.58334ZM15.0631 4.14959C16.5281 4.39043 17.5923 5.64376 17.5923 7.12959C17.5889 8.62543 16.4714 9.90876 14.9923 10.1163C14.9631 10.1204 14.9339 10.1221 14.9056 10.1221C14.5989 10.1221 14.3314 9.89626 14.2873 9.58376C14.2398 9.24126 14.4773 8.92543 14.8198 8.87793C15.6864 8.75626 16.3406 8.00459 16.3423 7.12793C16.3423 6.25876 15.7189 5.52376 14.8598 5.38293C14.5198 5.32709 14.2889 5.00543 14.3448 4.66459C14.4014 4.32376 14.7206 4.09543 15.0631 4.14959ZM5.46644 4.66459C5.52227 5.00543 5.29144 5.32709 4.95144 5.38293C4.09227 5.52376 3.46894 6.25876 3.46894 7.12959C3.4706 8.00459 4.12477 8.75709 4.9906 8.87793C5.3331 8.92543 5.5706 9.24126 5.5231 9.58376C5.47894 9.89626 5.21144 10.1221 4.90477 10.1221C4.87644 10.1221 4.84727 10.1204 4.8181 10.1163C3.33894 9.90876 2.22227 8.62543 2.21894 7.13126C2.21894 5.64376 3.2831 4.39043 4.7481 4.14959C5.09894 4.09459 5.40977 4.32543 5.46644 4.66459Z" fill="#949494"/>
</svg>
            </div>
            </a></Link>
            <a href="https://nilooz.com/"> <div className="ds2-blog" onMouseEnter={hover} onMouseLeave={endhover}>
            <p>بلاگ</p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
<path fillRule="evenodd" clipRule="evenodd" d="M15.9086 2C19.0526 2 21.1646 4.153 21.1646 7.357V16.553C21.1646 19.785 19.1176 21.887 15.9496 21.907L8.25663 21.91C5.11263 21.91 2.99963 19.757 2.99963 16.553V7.357C2.99963 4.124 5.04663 2.023 8.21463 2.004L15.9076 2H15.9086ZM15.9086 3.5L8.21963 3.504C5.89163 3.518 4.49963 4.958 4.49963 7.357V16.553C4.49963 18.968 5.90463 20.41 8.25563 20.41L15.9446 20.407C18.2726 20.393 19.6646 18.951 19.6646 16.553V7.357C19.6646 4.942 18.2606 3.5 15.9086 3.5ZM15.7157 15.4737C16.1297 15.4737 16.4657 15.8097 16.4657 16.2237C16.4657 16.6377 16.1297 16.9737 15.7157 16.9737H8.49573C8.08173 16.9737 7.74573 16.6377 7.74573 16.2237C7.74573 15.8097 8.08173 15.4737 8.49573 15.4737H15.7157ZM15.7157 11.2872C16.1297 11.2872 16.4657 11.6232 16.4657 12.0372C16.4657 12.4512 16.1297 12.7872 15.7157 12.7872H8.49573C8.08173 12.7872 7.74573 12.4512 7.74573 12.0372C7.74573 11.6232 8.08173 11.2872 8.49573 11.2872H15.7157ZM11.2504 7.1104C11.6644 7.1104 12.0004 7.4464 12.0004 7.8604C12.0004 8.2744 11.6644 8.6104 11.2504 8.6104H8.49543C8.08143 8.6104 7.74543 8.2744 7.74543 7.8604C7.74543 7.4464 8.08143 7.1104 8.49543 7.1104H11.2504Z" fill="#949494"/>
</svg>
            </div></a>
            
            <a href="#" onClick={logOut}><div className="ds2-out"  >
                <p>خروج از حساب</p>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
<path fillRule="evenodd" clipRule="evenodd" d="M9.42366 1.66666C11.462 1.66666 13.1203 3.32499 13.1203 5.36332V6.13999C13.1203 6.48499 12.8403 6.76499 12.4953 6.76499C12.1503 6.76499 11.8703 6.48499 11.8703 6.13999V5.36332C11.8703 4.01332 10.7728 2.91666 9.42366 2.91666H5.36116C4.01366 2.91666 2.91699 4.01332 2.91699 5.36332V14.6375C2.91699 15.9867 4.01366 17.0833 5.36116 17.0833H9.43283C10.7762 17.0833 11.8703 15.99 11.8703 14.6467V13.8608C11.8703 13.5158 12.1503 13.2358 12.4953 13.2358C12.8403 13.2358 13.1203 13.5158 13.1203 13.8608V14.6467C13.1203 16.68 11.4653 18.3333 9.43283 18.3333H5.36116C3.32449 18.3333 1.66699 16.6758 1.66699 14.6375V5.36332C1.66699 3.32499 3.32449 1.66666 5.36116 1.66666H9.42366ZM16.1571 7.12832L18.5971 9.55749C18.6188 9.57909 18.6383 9.60155 18.6562 9.62532L18.5971 9.55749C18.6266 9.5866 18.6529 9.61841 18.6756 9.65233C18.6857 9.6677 18.6953 9.68359 18.7043 9.69992C18.7116 9.71268 18.7183 9.726 18.7245 9.73954C18.7297 9.75151 18.7348 9.76348 18.7395 9.77563C18.7458 9.79147 18.7513 9.80775 18.7561 9.82425C18.7597 9.83724 18.7631 9.85021 18.766 9.86333C18.7697 9.87924 18.7726 9.89526 18.775 9.91139C18.7763 9.92188 18.7775 9.93288 18.7785 9.94396C18.7804 9.96296 18.7812 9.98144 18.7812 9.99999L18.777 10.0517L18.7753 10.0848C18.7751 10.0862 18.7749 10.0876 18.7747 10.089L18.7812 9.99999C18.7812 10.0462 18.7761 10.0921 18.7662 10.1366C18.7631 10.1498 18.7597 10.1627 18.756 10.1755C18.7513 10.1922 18.7458 10.2085 18.7396 10.2245C18.7348 10.2365 18.7297 10.2485 18.7243 10.2602C18.7183 10.274 18.7116 10.2873 18.7044 10.3004C18.6953 10.3164 18.6857 10.3323 18.6753 10.3477C18.6695 10.3568 18.6631 10.3658 18.6564 10.3747C18.6366 10.4008 18.6149 10.4254 18.5915 10.4481L16.1571 12.8725C16.0354 12.9942 15.8754 13.055 15.7162 13.055C15.5562 13.055 15.3954 12.9942 15.2737 12.8708C15.0304 12.6258 15.0312 12.2308 15.2754 11.9875L16.642 10.625H8.12183C7.77683 10.625 7.49683 10.345 7.49683 9.99999C7.49683 9.65499 7.77683 9.37499 8.12183 9.37499H16.6437L15.2754 8.01332C15.0312 7.76999 15.0296 7.37499 15.2737 7.12999C15.5171 6.88499 15.9121 6.88499 16.1571 7.12832Z" fill="#4E4E4E"/>
</svg>
            </div>
            </a>
        </div>
   </div>

     );
}
 
export default AdminNav;