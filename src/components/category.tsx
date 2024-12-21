import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faDesktop, faStopwatch, faCamera, faHeadphones, faGamepad } from '@fortawesome/free-solid-svg-icons';

function Category() {
	return (
		<div className="w-full flex justify-center items-center mt-10 mb-1 px-4">
			{/* container */}
			<div className="sm:w-full md:w-[90%] lg:w-[80%] xl:w-[75%] border-b-2 border-neutral-100 pb-10">
				{/* container boxes */}
				<div className="flex flex-col sm:pl-2 md:pl-0">
					<h3 className="text-red-500 font-bold border-l-8 border-red-400 pl-3 ml-1 text-sm md:text-base lg:text-lg">
						Categories
					</h3>
					<div className="flex">
						<h1 className="text-gray-800 font-bold sm:text-lg md:text-2xl lg:text-3xl pt-4">
							Browse By Category
						</h1>
					</div>
				</div>

				{/* grid container for categories */}
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
					{/* box1 */}
					<div className="group shadow-lg border border-neutral-200 rounded-md hover:bg-red-500 p-5 flex flex-col gap-y-4 justify-center items-center cursor-pointer">
						<FontAwesomeIcon icon={faMobileAlt} size="3x" />
						<p className="text-sm md:text-base lg:text-lg">Phones</p>
					</div>

					{/* box2 */}
					<div className="group shadow-lg border border-neutral-200 rounded-md hover:bg-red-500 p-5 flex flex-col gap-y-4 justify-center items-center cursor-pointer">
						<FontAwesomeIcon icon={faDesktop} size="3x" />
						<p className="text-sm md:text-base lg:text-lg">Computers</p>
					</div>

					{/* box3 */}
					<div className="group shadow-lg border border-neutral-200 rounded-md hover:bg-red-500 p-5 flex flex-col gap-y-4 justify-center items-center cursor-pointer">
						<FontAwesomeIcon icon={faStopwatch} size="3x" />
						<p className="text-sm md:text-base lg:text-lg">SmartWatch</p>
					</div>

					{/* box4 */}
					<div className="group shadow-lg border border-neutral-200 rounded-md hover:bg-red-500 p-5 flex flex-col gap-y-4 justify-center items-center cursor-pointer">
						<FontAwesomeIcon icon={faCamera} size="3x" />
						<p className="text-sm md:text-base lg:text-lg">Camera</p>
					</div>

					{/* box5 */}
					<div className="group shadow-lg border border-neutral-200 rounded-md hover:bg-red-500 p-5 flex flex-col gap-y-4 justify-center items-center cursor-pointer">
						<FontAwesomeIcon icon={faHeadphones} size="3x" />
						<p className="text-sm md:text-base lg:text-lg">Headphones</p>
					</div>

					{/* box6 */}
					<div className="group shadow-lg border border-neutral-200 rounded-md hover:bg-red-500 p-5 flex flex-col gap-y-4 justify-center items-center cursor-pointer">
						<FontAwesomeIcon icon={faGamepad} size="3x" />
						<p className="text-sm md:text-base lg:text-lg">Gaming</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Category;
