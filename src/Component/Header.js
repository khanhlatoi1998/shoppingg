import {useState} from "react" ; 
import { BrowserRouter as Router , NavLink} from 'react-router-dom' ;

const Header = (props) => {
	
	const [showUser, setshowUser] = useState(false) ; 
	
	const [showMenu, setshowMenu] = useState(false) ; 
	
	const clickShowUser = () => { setshowUser(!showUser) ; } ; 
	
	const clickShowMenu= () => { setshowMenu(!showMenu) ; } ; 	 

	const { cartItem } = props ; 

	const length = cartItem.length ; 

	return (
		<header>
			<nav>
				<div className="top-header">
					<div className="block_top-header" >
						<div className="decktop-header" >
							<div className="left_top-header">
								<div className="email-header">
									<i className="fas fa-envelope"></i> khanhlatoi1998@gmail.com
								</div> 
								<p> | </p>
								<div className="phone-header">
									<i className="fas fa-phone-alt"></i> 0975481172
								</div>
							</div>
							<div className="right_top-header">
								<div className="login-sigup" >
									<a href="#" > Đăng nhập </a> /  
									<a href="#" > Đăng ký </a>
								</div>
								<form>
									<input type="text" placeholder="Tìm Kiếm..." />
									<i className="fas fa-search"></i>
								</form>
							</div>
						</div>
						<div className="mobile-header" >
							<div className="humberger" onClick={clickShowMenu}>
								<div className="show-humberger" style={showMenu === true ? {display : "none"} : {display : "block"}}>
									<div className="line" ></div>
									<div className="line" ></div>
									<div className="line" ></div>
								</div>
								<div className="close-humberger" style={showMenu === true ? {display : "block"} : {display : "none"}}>
									<i className="fas fa-times"></i>
								</div>
							</div>
							<div className="cart1" >
								<NavLink to="/cart"> 
									<i className="fas fa-shopping-cart"></i>
									<b > Giỏ hàng: </b>
									<span>{length}</span> 
								</NavLink>
							</div>
							<div className="user" onClick={clickShowUser}>
								<i className="fas fa-user"></i>
							</div>
						</div>
					</div>
				</div>
				<div className="dropdown-user" style={showUser === true ? {display : "block", height : "47px", transition : "1s"} : {transition : "1s", height : "0"}} >
					<div >
						<div >
							<a href="#" > Đăng nhập </a> /  
							<a href="#" > Đăng ký </a>
						</div>
					</div>
				</div>
				<div className="mobile_menu-header" style={showMenu === true ? {height : "210px"} : {height : "0"}}>
					<ul >
						<li ><a href="" > Trang chủ </a> </li>
						<li ><a href="" > Giới thiệu </a> </li>
						<li ><a href="" > Sản phẩm <i className="fas fa-angle-down"></i></a></li>
						<li ><a href="" > Tin tức </a></li>
						<li ><a href="" > Liên hệ </a></li>
					</ul>
				</div>
				<div className="bottom-header">
					<div className="block_bottom-header" >
						<div className="logo" >
							<NavLink to="/" >
								<img src="http://runecom01.runtime.vn/Uploads/shop910/images/logo.png" alt="" />
							</NavLink>
						</div>
						<form>
							<input type="text" placeholder="Tìm Kiếm..." />
						</form>
						<div className="menu-header" >
							<nav >
								<ul >
									<li ><a href="" > TRANG CHỦ </a> </li>
									<li ><a href="" > GIỚI THIỆU </a> </li>
									<li >
										<a href="" > SẢN PHẨM <i className="fas fa-angle-down"></i></a>
										<i className="fas fa-caret-up"></i>
										<ul >
											<li><a > sub </a></li>
											<li><a > sub </a></li>
											<li><a > sub </a></li>
										</ul>
									</li>
									<li ><a href="" > TIN TỨC </a></li>
									<li ><a href="" > LIÊN HỆ </a></li>
								</ul>
							</nav>
						</div>
						<div className="cart" >
							<div >	
								<NavLink to="/cart"> 
									<i className="fas fa-shopping-cart"></i>
									<b > Giỏ hàng: </b>
									<span>{length}</span> 
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	) ; 
} ; 

export default Header ; 