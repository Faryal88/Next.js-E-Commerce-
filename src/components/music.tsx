import Image from "next/image";

function Music() {
	return (
		// Container
		<div className="w-full flex justify-center items-center mt-10 mb-1">
			{/* Box */}
			<div className="sm:w-full md:w-[80%] sm:p-5 md:pl-5 bg-gray-950 sm:h-auto md:h-[400px] flex sm:flex-col md:flex-row sm:justify-start md:justify-center sm:items-start md:items-center gap-4">
				{/* Left Box */}
				<div className="sm:w-full md:w-[50%] flex flex-col sm:items-center md:items-start">
					<h3 className="text-green-500 font-bold text-center sm:text-left">Categories</h3>
					<h1 className="text-white font-bold sm:text-md md:text-3xl lg:text-5xl pt-4 text-center sm:text-left">
						Enhance Your Music Experience
					</h1>

					{/* Timer */}
					<div className="flex pt-5 pb-4 gap-4 justify-center sm:justify-start">
						<div className="bg-gray-50 w-[70px] h-[70px] rounded-full flex flex-col justify-center items-center">
							<span className="font-bold text-lg">23</span>
							<span className="sm:text-xs md:text-sm">Hours</span>
						</div>
						<div className="bg-gray-50 w-[70px] h-[70px] rounded-full flex flex-col justify-center items-center">
							<span className="font-bold text-lg">05</span>
							<span className="sm:text-xs md:text-sm">Days</span>
						</div>
						<div className="bg-gray-50 w-[70px] h-[70px] rounded-full flex flex-col justify-center items-center">
							<span className="font-bold text-lg">59</span>
							<span className="sm:text-xs md:text-sm">Minutes</span>
						</div>
						<div className="bg-gray-50 w-[70px] h-[70px] rounded-full flex flex-col justify-center items-center">
							<span className="font-bold text-lg">35</span>
							<span className="sm:text-xs md:text-sm">Seconds</span>
						</div>
					</div>

					<button className="bg-green-500 hover:bg-green-600 sm:hidden md:block sm:px-3 md:px-7 sm:text-sm md:text-sm py-0 text-white font-bold rounded-sm h-10 mt-3">
						Buy Now!
					</button>
				</div>

				{/* Right Box */}
				<div className="sm:w-full md:w-[40%] lg:w-[40%] flex justify-center items-center pl-6">
					<Image
						src={"/music-box/music-speaker.png"}
						width={500}
						height={500}
						alt="Music Speaker"
					/>
				</div>
			</div>

			{/* Button for Mobile */}
			<button className="bg-green-500 hover:bg-green-600 sm:block md:hidden sm:px-3 md:px-7 sm:text-sm md:text-sm py-0 text-white font-bold rounded-sm h-10 mt-3 w-full">
				Buy Now!
			</button>
		</div>
	);
}

export default Music;
