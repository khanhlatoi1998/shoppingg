import {useState} from 'react' ; 

const TitleContent = () => {

	const [slider, setslider] = useState(0) ; 
	const [showMenu, setshowMenu] = useState(false) ; 

	const bxSlider = (a) => {  setslider(a) ; } ; 

	const clickShowMenu =  () => { setshowMenu(!showMenu) ; } ; 

	return (
		<section className="title-content">
			<div className="container" >
				<div className="menu" >
					<div className="block-menu" >
						<div className="content-menu" >
							<div className="list" >
								<h3 > <i onClick={clickShowMenu} className="fas fa-list"></i> DANH MỤC </h3>
							</div>
							<nav >
								<ul style={showMenu === true ? {display : "block"} : {}}>
									<li > 
										<a >
											<span className="menu-icon">
												<i className="fa fa-female"></i>
											</span>
											<span className="menu-label">Thời trang</span>
											<span className="span-right" ><i className="fas fa-angle-right"></i></span>
										</a>
										<ul className="ul">
											<li><a > Áo sơ mi  </a></li>
											<li><a > Quần kaki  </a></li>
											<li><a > Giày  </a></li>
										</ul>
									</li>
									<li > 
										<a href="/san-pham/thuc-pham-15149">
											<span className="menu-icon">
												<i className="fas fa-utensils"></i>
											</span>
											<span className="menu-label">Thực phẩm</span>
											<span className="span-right" ><i className="fas fa-angle-right"></i></span>
										</a>
										<ul className="ul">
											<li><a > sub </a></li>
											<li><a > sub </a></li>
											<li><a > sub </a></li>
										</ul>
									</li>
									<li > 
										<a href="/san-pham/dien-tu-15150">
											<span className="menu-icon">
												<i className="fa fa-camera"></i>
											</span>
											<span className="menu-label">Điện tử</span>
											<span className="span-right" ><i className="fas fa-angle-right"></i></span>
										</a>
										<ul className="ul">
											<li><a > sub </a></li>
											<li><a > sub </a></li>
											<li><a > sub </a></li>
										</ul>
									</li>
									<li > 
										<a href="/san-pham/noi-that-15151">
											<span className="menu-icon">
												<i className="fa fa-suitcase"></i>
											</span>
											<span className="menu-label">Nội thất</span>
											<span className="span-right" ><i className="fas fa-angle-right"></i></span>
										</a>
									</li>
									<li > 
										<a href="/san-pham/nu-trang-15152">
											<span className="menu-icon">
												<i className="fa fa-female"></i>
											</span>
											<span className="menu-label">Nữ trang</span>
											<span className="span-right" ><i className="fas fa-angle-right"></i></span>
										</a>
									</li>
									<li > 
										<a href="/san-pham/my-pham-15153">
											<span className="menu-icon">
												<i className="fa fa-heart"></i>
											</span>
											<span className="menu-label">Mỹ phẩm</span>
											<span className="span-right" ><i className="fas fa-angle-right"></i></span>
										</a>
									</li>
									<li >
										<a href="/san-pham/qua-tang-15154">
											<span className="menu-icon">
												<i className="fa fa-puzzle-piece"></i>
											</span>
											<span className="menu-label">Quà tặng</span>
											<span className="span-right" ><i className="fas fa-angle-right"></i></span>
										</a>
									</li>
								</ul>
							</nav>
						</div>
						<div className="img-menu" >
							<div className="block_img-menu">
								<img src="http://runecom01.runtime.vn/Uploads/shop910/images/banner_img_1.jpg" alt="" />
								<div></div>
							</div>
							<div className="block_img-menu">
								<img src="http://runecom01.runtime.vn/Uploads/shop910/images/banner_img_2.jpg" alt="" />
								<div></div>
							</div>
						</div>
					</div>
				</div>
				<div className="slider" >
					<div className="img-slider">
						<div className="block_img-slider">
							<div style={{ transition : "2s", transform : `translate(-${slider}%, 0)`}}>
								<a href="#" ><img src="http://runecom01.runtime.vn/Uploads/shop910/images/slideshow_1.jpg" alt="" /></a>
								<a href="#" ><img src="http://runecom01.runtime.vn/Uploads/shop910/images/slideshow_2.jpg" alt="" /></a>
								<a href="#" ><img src="http://runecom01.runtime.vn/Uploads/shop910/images/slideshow_3.jpg" alt="" /></a>
							</div>
						</div>
						<div className="bxslider">
							<i onClick={() => bxSlider(0)} style={ slider === 0 ? {backgroundColor : "white"} : {}} className="far fa-circle"></i>
							<i onClick={() => bxSlider(33.333)} style={ slider === 33.333 ? {backgroundColor : "white"} : {}}  className="far fa-circle"></i>
							<i onClick={() => bxSlider(66.666)} style={ slider === 66.666 ? {backgroundColor : "white"} : {}}  className="far fa-circle"></i>
						</div>
					</div>
					<div className="infoproduct-pro" >
						<div className="title" >
							<a href="#"><i className="fas fa-angle-left"></i></a>
							<h3 > ƯU ĐÃI LỚN </h3>
							<a href="#"><i className="fas fa-angle-right"></i></a>
							<i className="fas fa-caret-up"></i>
						</div>
						<div className="content-info" >
							<div className="block-img" >
								<a hef="#" >
									<img src="http://runecom01.runtime.vn/Uploads/shop910/images/products/ao-belike1_master.jpg" alt="" />
									<div className="div-img">
										<span className="block-span">
											<span className="span-cart">
												<i id="hover-cart" className="fas fa-shopping-cart"></i>
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
								</a>
								<p > -52% </p> 
								
							</div> 
							<div className="content" >
								<h3 className="product-name"> Áo thun nữ Belike </h3>
								<span className="price">
                                    <del><span className="amount">200.000₫</span></del>
                                    <ins><span className="amount">95.200₫</span></ins>
                                </span>
								<p>Trẻ trung và cuốn hút theo phong cách đường phố thu-đông với áo nỉ thêu hình động vật của thương hiệu Asos.- Chất liệu cotton pha- Cổ 3cm- Tay dài, suông- Không lót trong- Màu sắc: XámHướng dẫn sử dụng:- Giặt bằng tay với nhiệt độ không quá 30°C- Không được tẩy- Không được sấy khô- Ủi với nhiệt độ...</p>
								<div className="day" >
									<div> <i>0</i> <p>NGÀY</p> </div>
									<div> <i>00</i> <p>GIỜ</p> </div>
									<div> <i>00</i> <p>PHÚT</p> </div>
									<div> <i>00</i> <p>GIÂY</p> </div>
								</div>
								<button>
									Thêm gio hàng 
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="promotion" >
					<div className="top-pro" >
						<div className="h3-pro" >
							<h3 > SẢN PHẨM KHUYẾN MÃI </h3>
							<i className="fas fa-caret-up"></i>
						</div>
						<div className="content-pro" >
							<div className="img-pro">
								<img src="http://runecom01.runtime.vn/Uploads/shop910/images/products/ao-belike1_master.jpg" alt="" />
							</div>
							<div className="content" >
								<p > Áo thun nữ Belike </p>
								<span className="price">
									<del><span className="amount">200.000₫</span></del>
									<ins><span className="amount">95.200₫</span></ins>
								</span>
							</div>
						</div>
						<div className="content-pro" >
							<div className="img-pro">
								<img src="http://runecom01.runtime.vn/Uploads/shop910/images/products/1200_6_451_master.jpg" alt="http://runecom01.runtime.vn/Uploads/shop910/images/products/ao-belike1_master.jpg" />
							</div>
							<div className="content" >
								<p > Áo thun nữ Belike </p>
								<span className="price">
									<del><span className="amount">200.000₫</span></del>
									<ins><span className="amount">95.200₫</span></ins>
								</span>
							</div>
						</div>
						<div className="content-pro" >
							<div className="img-pro">
								<img src="http://runecom01.runtime.vn/Uploads/shop910/images/products/pr23_d88c715b-a920-42e1-613e-7d7ba1317762_master.jpg" alt="" />
							</div>
							<div className="content" >
								<p > Áo thun nữ Belike </p>
								<span className="price">
									<del><span className="amount">200.000₫</span></del>
									<ins><span className="amount">95.200₫</span></ins>
								</span>
							</div>
						</div>
						<div className="content-pro" >
							<div className="img-pro">
								<img src="http://runecom01.runtime.vn/Uploads/shop910/images/products/pr9_80450716-2b66-4b4b-76ed-5c1534a804fa_master.jpg" alt="http://runecom01.runtime.vn/Uploads/shop910/images/products/ao-belike1_master.jpg" />
							</div>
							<div className="content" >
								<p > Áo thun nữ Belike </p>
								<span className="price">
									<del><span className="amount">200.000₫</span></del>
									<ins><span className="amount">95.200₫</span></ins>
								</span>
							</div>
						</div>
					</div>
					<div className="bottom-pro" >
						<h3 > ĐĂNG KÝ NHẬN TIN </h3>
						<form > <input type="text" placeholder="Email của bạn" /></form>
						<button type="button" > ĐĂNG KÝ </button>
					</div>
				</div>
			</div>
		</section>
	) ; 
} ; 

export default TitleContent ; 