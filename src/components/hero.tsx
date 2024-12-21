import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Hero() {
	return (
		<div className="w-full flex justify-center items-center py-10 bg-gray-50">
			<div className="container mx-auto flex flex-col lg:flex-row gap-8 px-4 lg:px-0">
				{/* Left Side - Categories List */}
				<div className="lg:w-[40%] hidden sm:hidden md:block">
					<ul className="space-y-2">
						<li className="flex items-center justify-between leading-loose hover:underline cursor-pointer">
							Woman&apos;s Fashion
							<FontAwesomeIcon icon={faChevronRight} className="text-xs ml-2" />
						</li>
						<li className="flex items-center justify-between leading-loose hover:underline cursor-pointer">
							Men&apos;s Fashion
							<FontAwesomeIcon icon={faChevronRight} className="text-xs ml-2" />
						</li>
						<li className="leading-loose hover:underline cursor-pointer">Electronics</li>
						<li className="leading-loose hover:underline cursor-pointer">Home & Lifestyle</li>
						<li className="leading-loose hover:underline cursor-pointer">Medicine</li>
						<li className="leading-loose hover:underline cursor-pointer">Sports & Outdoor</li>
						<li className="leading-loose hover:underline cursor-pointer">Baby&apos;s & Toys</li>
						<li className="leading-loose hover:underline cursor-pointer">Groceries & Pets</li>
						<li className="leading-loose hover:underline cursor-pointer">Health & Beauty</li>
					</ul>
				</div>

				{/* Right Side - Hero Image */}
				<div className="lg:w-[60%] w-full flex justify-center items-center">
					<Image
						src={"/home/herro.png"}
						width={900}
						height={600}
						alt="Hero Image"
						className="object-contain w-full h-auto rounded-lg shadow-md"
					/>
				</div>
			</div>
		</div>
	);
}

export default Hero;
