import {useState} from 'react' ; 
import {DataShop} from "./DataShop.js" ; 
const MainContent = (props) => {

	const { allfashion, shirt, trousers, allcosmetics, cream, son, accessory, bag, nail, makeup } = DataShop ; 


	const [active,  setactive] = useState(1) ; 
	const [active2,  setactive2] = useState(1) ;
	const [showMenu1, setshowMenu1] = useState(false) ;
	const [showMenu2, setshowMenu2] = useState(false) ;
	const [filter1, setFilter1] = useState(allfashion) ;
	const [filter2, setFilter2] = useState(allcosmetics) ; 

	const clickActive = (a, f) => { setactive(a) ; setFilter1(f) ; } ; 

	const clickActive2 = (a, f) => { setactive2(a) ; setFilter2(f) ; } ;

	const clickShowMenu1 = () => { setshowMenu1(!showMenu1) ;} ;

	const clickShowMenu2 = () => { setshowMenu2(!showMenu2);} ;

	const { cartItem, onAdd } = props ; 


	const addPro = (item, index) => {
		onAdd(item) ;
	} ;

	return (
		<section className="maincontent">
			<div className="block-maincontent">
				<div className="fashion-content" >
					<div className="container-maincontent">
						<div className="menu-maincontent" >
							<div className="title-menu" > 
								<h1 onClick={clickShowMenu1} > 
									<span><i className="fa fa-female"></i></span> THỜI TRANG 
									<span className="span-right" ><i className="fas fa-angle-down"></i></span>
								</h1>
							</div>
							<nav style={showMenu1 === true ? {display : "block"} : {}} >
								<ul>
									<li onClick={() => clickActive(1, allfashion)} style={active === 1 ? {backgroundColor : "#ebb651" , color : "white"} : {}} > Tất cả </li>
									<li onClick={() => clickActive(2, shirt)} style={active === 2 ? {backgroundColor : "#ebb651" , color : "white"} : {}} > Áo </li>
									<li onClick={() => clickActive(3, trousers)} style={active === 3 ? {backgroundColor : "#ebb651" , color : "white"} : {}} > Quần </li>
									<li onClick={() => clickActive(4, accessory)} style={active === 4 ? {backgroundColor : "#ebb651" , color : "white"} : {}} > Phụ kiện </li>
									<li onClick={() => clickActive(5, bag)} style={active === 5 ? {backgroundColor : "#ebb651" , color : "white"} : {}} > Túi </li>
								</ul>
							</nav>
						</div>
						<div className="products" >
							<div className="block-products" >
								{
									filter1.map((item, index) => {
										return (
											<div key={index} className="single-pro" >
												<div className="block-single" >
													<div className="img" >
														<img src={item.img} alt="" />
														<div className="div-img">
															<span className="block-span">
																<span className="span-cart">
																	<i onClick={() => addPro(item, index)} id="hover-cart" className="fas fa-shopping-cart"></i>
																	<i className="fas fa-caret-down"></i>
																	<p > Gio hàng </p>
																</span>
																<span className="span-add">
																	<i id="hover-add" className="fas fa-align-center"></i>
																	<i className="fas fa-caret-down"></i>
																	<p> Chi tiết </p>
																</span>
															</span>
														</div>
														<p > -52% </p>
													</div>
													<div className="detail" >
														<p > {item.name} </p>
														<span className="price">
															<span className="amount">{item.price}.000₫</span>
														</span>
													</div>
												</div>
											</div>
										)
									})
								}
							</div>
						</div>
						<div className="background-img">
							<img src="http://runecom01.runtime.vn/Uploads/shop910/images/products/tabs_1_slider_img_1.jpg" alt="logo" />
						</div>
					</div>
				</div>
				<div className="cosmetics-content">
					<div className="container-maincontent">
						<div className="menu-maincontent" >
							<div className="title-menu" > 
								<h1 onClick={clickShowMenu2} > 
									<span><i className="fas fa-heart"></i></span> MỸ PHẨM
									<span className="span-right" ><i className="fas fa-angle-down"></i></span>
								</h1>
								
							</div>
							<nav style={showMenu2 === true ? {display : "block"} : {}}>
								<ul>
									<li onClick={() => clickActive2(1, allcosmetics)} style={active2 === 1 ? {backgroundColor : "#ef939e" , color : "white"} : {}} > Tất cả </li>
									<li onClick={() => clickActive2(2, cream)} style={active2 === 2 ? {backgroundColor : "#ef939e" , color : "white"} : {}} > Kem dưỡng ẩm  </li>
									<li onClick={() => clickActive2(3, son)} style={active2 === 3 ? {backgroundColor : "#ef939e" , color : "white"} : {}} > Son môi </li>
									<li onClick={() => clickActive2(4, makeup)} style={active2 === 4 ? {backgroundColor : "#ef939e" , color : "white"} : {}} > Trang điểm </li>
									<li onClick={() => clickActive2(5, nail)} style={active2 === 5 ? {backgroundColor : "#ef939e" , color : "white"} : {}} > Móng tay </li>
								</ul>
							</nav>
						</div>
						<div className="products" >
							<div className="block-products" >
								{
									filter2.map((item, index) => {
										return (
											<div key={index} className="single-pro" >
												<div className="block-single" >
													<div className="img" >
														<img src={item.img} alt="" />
														<div className="div-img">
															<span className="block-span">
																<span className="span-cart">
																	<i onClick={() => addPro(item, index)} id="hover-cart" className="fas fa-shopping-cart"></i>
																	<i className="fas fa-caret-down"></i>
																	<p> Gio hàng </p>
																</span>
																<span className="span-add">
																	<i id="hover-add" className="fas fa-align-center"></i>
																	<i className="fas fa-caret-down"></i>
																	<p> Chi tiết </p>
																</span>
															</span>
														</div>
														<p > -52% </p>
													</div>
													<div className="detail" >
														<p > {item.name} </p>
														<span className="price">
															<span className="amount">{item.price}.000₫</span>
														</span>
													</div>
												</div>
											</div>
										)
									})
								}
							</div>
						</div>
						<div className="background-img">
							<img src="http://runecom01.runtime.vn/Uploads/shop910/images/tabs_2_slider_img_3.jpg" alt="logo" />
						</div>
					</div>
				</div>
			</div>
		</section>
	) ; 
} ; 

export default MainContent ; 