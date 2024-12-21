import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function AnnouncementBar() {
	return (
		<div className="w-full bg-black text-white flex justify-between items-center px-4 sm:px-6 lg:px-8 py-2">
			{/* Left side */}
			<div className="flex items-center gap-2">
				<h1 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium">
					{/* Short message for small screens */}
					<span className="block md:hidden">
						Summer Sale - OFF 50%!
					</span>
					{/* Full message for medium and larger screens */}
					<span className="hidden md:block">
						Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
					</span>
				</h1>
				<button className="font-bold underline text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl hover:text-gray-300">
					Shop Now
				</button>
			</div>

			{/* Right side */}
			<div className="flex items-center gap-2">
				<p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium">
					English
				</p>
				<FontAwesomeIcon
					icon={faChevronDown}
					className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"
				/>
			</div>
		</div>
	);
}

export default AnnouncementBar;
