import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faHeadphonesAlt, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

export default function Freedelivery() {
	return (
		<div className="w-full flex justify-center items-center py-7">
			<div className="w-[90%] sm:w-full lg:w-[70%] flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
				{/* box 1 */}
				<div className="w-[260px] sm:w-full md:w-[45%] lg:w-[30%] h-[150px] flex justify-center items-center flex-col gap-y-3 bg-gray-100 p-4 rounded-lg">
					<div className="w-[50px] h-[50px] rounded-full bg-gray-400 flex justify-center items-center">
						<span><FontAwesomeIcon icon={faTruckFast} className="text-2xl" /></span>
					</div>
					<div>
						<h1 className="font-bold text-center text-lg">FREE AND FAST DELIVERY</h1>
						<p className="text-sm text-center">Free delivery for all orders over $140</p>
					</div>
				</div>

				{/* box 2 */}
				<div className="w-[260px] sm:w-full md:w-[45%] lg:w-[30%] h-[150px] flex justify-center items-center flex-col gap-y-3 bg-gray-100 p-4 rounded-lg">
					<div className="w-[50px] h-[50px] rounded-full bg-gray-400 flex justify-center items-center">
						<span><FontAwesomeIcon icon={faHeadphonesAlt} className="text-2xl" /></span>
					</div>
					<div>
						<h1 className="font-bold text-center text-lg">24/7 CUSTOMER SERVICE</h1>
						<p className="text-sm text-center">Friendly 24/7 customer support</p>
					</div>
				</div>

				{/* box 3 */}
				<div className="w-[260px] sm:w-full md:w-[45%] lg:w-[30%] h-[150px] flex justify-center items-center flex-col gap-y-3 bg-gray-100 p-4 rounded-lg">
					<div className="w-[50px] h-[50px] rounded-full bg-gray-400 flex justify-center items-center">
						<span><FontAwesomeIcon icon={faCheckSquare} className="text-2xl" /></span>
					</div>
					<div>
						<h1 className="font-bold text-center text-lg">MONEY BACK GUARANTEE</h1>
						<p className="text-sm text-center">We return money within 30 days</p>
					</div>
				</div>
			</div>
		</div>
	);
}
