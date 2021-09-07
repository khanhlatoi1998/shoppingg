import {useEffect} from 'react' ; 
const Cart = (props) => {

	const { cartItem, onDelete } = props ; 

	const fullPrice = document.getElementsByClassName("fullprice") ;
	const allPrice = document.getElementsByClassName("all-price") ;

	let allPrice1 = 0 ; 

	for(let i of cartItem) {
		allPrice1 += i.price ; 
	} ; 

	const onChangeInput = (e, item, index) => {
		fullPrice[index].textContent = (e.target.value * item.price) + ",000đ" ;
		upDataPrice() ;
	}

	const clickDeleteItem = (index) => {
		onDelete(index) ; 
	} ;

	useEffect(() => {
		upDataPrice() ; 
	}) ; 

	const upDataPrice = () => {
		allPrice1 = 0 ; 
		for(let i of fullPrice) {
			allPrice1 += Number(i.textContent.slice(0, i.textContent.length - 5)) ; 
		} ; 
		allPrice[0].textContent = allPrice1 + ",000đ" ;
	} ; 


	return (
		<section className="cart-link" >
			<div className="container" >
				<div className="header" >
					<ul>
						<li> Trang Chủ  </li>
						<li> &raquo; </li>
						<li> Giỏ hàng </li>
					</ul>
					<h1 > GIỎ HÀNG CỦA TÔI </h1>
				</div>
				<div className="content" >
					<div className="tiendo" >
						<div className="block" >
							<div className="singer-progress" >
								<span> <i className="fas fa-shopping-cart"></i> </span>
								<p> Giỏ hàng của tôi </p>
								<div className="straigh" >
									<i> 1 </i>
									<div></div>
								</div>
							</div>
							<div className="singer-progress" >
								<span> <i className="fas fa-dollar-sign"></i> </span>
								<p> Thanh toán </p>
								<div className="straigh" >
									<i> 2 </i>
									<div></div>
								</div>
							</div>
							<div className="singer-progress" >
								<span> <i className="fas fa-check"></i> </span>
								<p> Hoàn tất </p>
								<div className="straigh" >
									<i> 3  </i>
									<div></div>
								</div>
							</div>
						</div>
					</div>
					<div className="table-content">
						<div className="block-table" >
							<table>
								<thead>
									<tr>
										<th> SẢN PHẨM </th>
										<th> HÌNH ẢNH </th>
										<th> GIA </th>
										<th> SỐ LƯỢNG </th>
										<th> THÀNH TIỀN </th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									{	
										cartItem.length > 0 
										? cartItem.map((item, index) => {
											return (
												<tr key={index} >
													<td > <p className="name-pro" > {item.name}</p> </td>
													<td className="img" > <img src={item.img} alt="logo" /> </td>
													<td > <p className="price" >{item.price},000đ</p> </td>
													<td className="input" > <input  className="value-input" type="number" min="0" defaultValue="1" onChange={(e) => onChangeInput(e, item, index)} /> </td>
													<td > <p className="fullprice">{item.price},000đ</p> </td>
													<td className="btn-delete" > <i onClick={() => clickDeleteItem(index)} className="far fa-trash-alt"></i> </td>
												</tr>
											)
										})
										: <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
									}
								</tbody>
							</table>
						</div>
						<div className="pay" >
							<p> Tổng thanh toán: </p>
							<p className="all-price" >{allPrice1},000đ</p>
						</div>
						<div className="btn-pay" >
							<button> TIẾP TỤC MUA HÀNG </button>
							<button> TIẾN HÀNH THANH TOÁN </button>
						</div>
					</div>
				</div>
			</div>
		</section>
	) ; 
} ;

export default  Cart ;  