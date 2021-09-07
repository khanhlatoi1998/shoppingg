import {useState,useEffect} from 'react' ; 
const Partner = () => {

	const [sliderPartner, setsliderPartner] = useState(0) ; 

	const WITH = window.innerWidth ; 


	useEffect(() => {
		if(WITH <= 414) {
			setInterval(function() {
				if(sliderPartner > 55)
					setsliderPartner(0) ; 
				else { setsliderPartner(sliderPartner + 16.66) ; }  
			}, 5000) ; 
		}
	} , [sliderPartner]) ; 

	return (
		<section className="partner" >
			<div className="container" >
				<div className="block" style={{transition : "2s" , transform : `translate(-${sliderPartner}% , 0)`}}>
					<div className="div" >
						<a href="#"> <img src="http://runecom01.runtime.vn/Uploads/shop910/images/partner_img_1.png" alt="logo" /> </a>
					</div>
					<div className="div" >
						<a href="#"> <img src="http://runecom01.runtime.vn/Uploads/shop910/images/partner_img_2.png" alt="logo" /> </a>
					</div>
					<div className="div" >
						<a href="#"> <img src="http://runecom01.runtime.vn/Uploads/shop910/images/partner_img_3.png" alt="logo" /> </a>
					</div>
					<div className="div" >
						<a href="#"> <img src="http://runecom01.runtime.vn/Uploads/shop910/images/partner_img_4.png" alt="logo" /> </a>
					</div>
					<div className="div" >
						<a href="#"> <img src="http://runecom01.runtime.vn/Uploads/shop910/images/partner_img_5.png" alt="logo" /> </a>
					</div>
					<div className="div" >
						<a href="#"> <img src="http://runecom01.runtime.vn/Uploads/shop910/images/partner_img_6.png" alt="logo" /> </a>
					</div>
				</div>
			</div>		
		</section>
	) ; 
} ; 

export default Partner ; 