import { NavLink } from "react-router-dom";

const Navbar = ({setIsLoggedIn}) => {
    function setFalse (){
        localStorage.setItem("isLoggedIn" , "false");
   }

   

    return(
        <nav>
            <div className="container d-flex justify-content-between ">
                <div>
                    <div className="d-flex align-items-center gap-1">
                        <i>
                            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.05273 3.59787C7.62207 4.59823 6.32837 5.78098 5.20532 7.1124C9.79462 6.68633 15.6252 7.38204 22.3944 10.7667C29.623 14.3809 35.4438 14.5031 39.4948 13.7217C39.1272 12.6088 38.6644 11.5392 38.1163 10.5224C33.479 11.0115 27.534 10.3641 20.6056 6.89998C16.206 4.70018 12.3278 3.79401 9.05273 3.59787ZM35.4074 6.66665C31.7453 2.575 26.4234 0 20.5 0C18.7605 0 17.0727 0.222107 15.4637 0.63948C17.6429 1.23409 19.9579 2.10399 22.3944 3.32227C27.467 5.85853 31.8464 6.67516 35.4074 6.66665ZM40.3609 17.6281C35.4669 18.5945 28.7088 18.396 20.6056 14.3444C13.03 10.5566 7.00043 10.6043 2.9339 11.508C2.724 11.5546 2.51904 11.6036 2.31903 11.6546C1.78662 12.8125 1.36163 14.0301 1.0567 15.2945C1.38239 15.2075 1.71893 15.1248 2.06616 15.0476C6.99957 13.9513 13.9701 13.9989 22.3944 18.2111C29.9701 21.9989 35.9996 21.9512 40.0662 21.0475C40.2055 21.0166 40.3428 20.9846 40.4778 20.9516C40.4926 20.6363 40.5 20.319 40.5 20C40.5 19.1975 40.4528 18.406 40.3609 17.6281ZM39.8248 25.1723C34.9783 26.0196 28.417 25.6944 20.6056 21.7888C13.03 18.001 7.00043 18.0487 2.9339 18.9524C2.03125 19.1529 1.21924 19.3972 0.50293 19.6551C0.500977 19.7698 0.5 19.8848 0.5 20C0.5 31.0457 9.45429 40 20.5 40C29.7571 40 37.5453 33.7109 39.8248 25.1723Z" fill="#1C5CFF"/>
                            </svg>
                        </i>
                        <h1><NavLink to="/">Koursely</NavLink></h1>
                    </div>  
                </div>
                <div className="d-flex align-items-center">
                    <ul className="d-flex gap-3">
                        <li><NavLink to="/" className="link" onClick={setFalse()}>Home</NavLink></li>
                        <li><NavLink to="/about" className="link"  onClick={setFalse()}>AboutUs</NavLink></li>
                        <li><NavLink to="/courses" className="link"  onClick={setFalse()}>Courses</NavLink></li>
                        <li><NavLink to="/others" className="link">Authentication</NavLink></li>
                        
                    </ul>
                </div>
                    
            </div>
        </nav>
    );
}
export default Navbar;