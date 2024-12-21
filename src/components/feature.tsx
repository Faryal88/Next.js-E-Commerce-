import Image from "next/image";

export default function Featured() {
	return (
		<div className="w-full flex justify-center items-center pt-7">
			<div className="w-[90%] md:w-[80%]">
				{/* Heading */}
				<div className="w-full">
					<h3 className="text-red-500 font-bold border-l-8 border-red-400 pl-3 ml-1">
						Featured
					</h3>
					<h1 className="text-gray-800 font-bold text-xl md:text-3xl pt-4">
						New Arrival
					</h1>
				</div>
				{/* Container */}
				<div className="flex flex-wrap md:flex-nowrap gap-5 text-white pt-4">
					{/* Left Side */}
					<div className="bg-gray-950 w-full md:w-[60%] relative rounded-lg overflow-hidden">
						{/* Text */}
						<div className="absolute left-3 bottom-3 text-white">
							<h1 className="text-lg md:text-2xl font-bold">PlayStation 5</h1>
							<p className="text-xs py-1">Black and White version of the PS5 coming out on sale.</p>
							<button className="text-sm md:text-md font-sans underline underline-offset-8 hover:font-bold">
								Shop Now
							</button>
						</div>
						{/* Image */}
						<Image
							src={"/feature/playstation.png"}
							width={500}
							height={500}
							alt="PlayStation"
							className="w-full h-full object-cover"
						/>
					</div>
					{/* Right Side */}
					<div className="flex flex-col gap-5 w-full md:w-[35%]">
						{/* Top Section */}
						<div className="bg-gray-950 flex relative items-end h-[200px] md:h-full rounded-lg overflow-hidden">
							{/* Text */}
							<div className="absolute left-2 bottom-3">
								<h1 className="text-lg md:text-2xl font-bold">Women&apos;s Collections</h1>
								<p className="text-xs py-1">Featured women collections that give you another vibe.</p>
								<button className="text-sm md:text-md font-sans underline underline-offset-8 hover:font-bold">
									Shop Now
								</button>
							</div>
							{/* Image */}
							<Image
								src={"/feature/woman-wearing.png"}
								width={500}
								height={300}
								alt="Women Collection"
								className="object-cover w-full h-full"
							/>
						</div>
						{/* Bottom Section */}
						<div className="flex flex-wrap gap-5">
							{/* Left Side */}
							<div className="bg-gray-950 relative flex justify-center items-center w-full md:w-[50%] h-[150px] md:h-[200px] rounded-lg overflow-hidden">
								{/* Text */}
								<div className="absolute left-2 bottom-3">
									<h1 className="text-sm md:text-xl font-bold">Speakers</h1>
									<p className="text-xs py-1">Amazon wireless speakers.</p>
									<button className="text-sm md:text-md font-sans underline underline-offset-8 hover:font-bold">
										Shop Now
									</button>
								</div>
								{/* Image */}
								<Image
									src={"/feature/speakers.png"}
									width={200}
									height={200}
									alt="Speakers"
									className="object-cover w-full h-full"
								/>
							</div>
							{/* Right Side */}
							<div className="bg-gray-950 relative flex justify-center items-center w-full md:w-[50%] h-[150px] md:h-[200px] rounded-lg overflow-hidden">
								{/* Text */}
								<div className="absolute left-2 bottom-3">
									<h1 className="text-sm md:text-xl font-bold">Perfume</h1>
									<p className="text-xs py-1">GUCCI INTENSE OUD EDP.</p>
									<button className="text-sm md:text-md font-sans underline underline-offset-8 hover:font-bold">
										Shop Now
									</button>
								</div>
								{/* Image */}
								<Image
									src={"/feature/perfume.png"}
									width={200}
									height={200}
									alt="Perfume"
									className="object-cover w-full h-full"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
