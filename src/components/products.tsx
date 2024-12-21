import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import Image from "next/image";
import Link from 'next/link';

function Products() {
  return (
    <main>
      <div className="w-full flex justify-center items-center mt-10 mb-1">
        {/* Container */}
        <div className="w-[90%] sm:w-[85%] lg:w-[80%] xl:w-[75%]">
          {/* Container Boxes */}
          <div className="flex flex-col">
            <h3 className="text-red-500 font-bold border-l-8 border-red-400 pl-3 ml-1">This Month</h3>
            <div className="flex justify-between items-center mt-4">
              <h1 className="text-gray-800 font-bold text-2xl sm:text-xl md:text-3xl lg:text-3xl">Best Selling Products</h1>
              <Link href={"#products"} className='bg-red-500 hover:bg-red-600 sm:px-3 md:px-7 sm:text-sm md:text-sm py-2 text-white rounded-sm h-10'>
                View All
              </Link>
            </div>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {/* Box1 */}
            <div className="group shadow-md bg-neutral-100 p-4 flex flex-col items-center justify-center relative">
              <Image src={"/bestselling/shirt.png"} width={150} height={100} alt="shirt" />
              <span className='absolute top-1 right-1 text-red rounded-full'>
                <FontAwesomeIcon icon={faHeart} className='text-xl' />
              </span>
              <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Add to Cart
              </button>
              <h1 className="font-bold font-sans pt-2 text-center">The north coat</h1>
              <span className="text-red-500 font-bold">$260</span>
              <span className="text-gray-400 font-bold line-through ml-2">$360</span>
              <div className="flex space-x-1 text-yellow-400 text-md pt-1 mb-5">
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={regularStar} />
                <span className='text-gray-400'>(88)</span>
              </div>
            </div>

            {/* Box2 */}
            <div className="group shadow-md bg-neutral-100 p-4 flex flex-col items-center justify-center relative">
              <Image src={"/bestselling/prs.png"} width={150} height={100} alt="prs" />
              <span className='absolute top-1 right-1 text-red rounded-full'>
                <FontAwesomeIcon icon={faHeart} className='text-xl' />
              </span>
              <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Add to Cart
              </button>
              <h1 className="font-bold font-sans pt-2 text-center">Gucci duffle bag</h1>
              <span className="text-red-500 font-bold">$960</span>
              <span className="text-gray-400 font-bold line-through ml-2">$1160</span>
              <div className="flex space-x-1 text-yellow-400 text-md pt-1 mb-5">
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={regularStar} />
                <span className='text-gray-400'>(90)</span>
              </div>
            </div>

            {/* Box3 */}
            <div className="group shadow-md bg-neutral-100 p-4 flex flex-col items-center justify-center relative">
              <Image src={"/bestselling/speaker.png"} width={150} height={100} alt="speaker" />
              <span className='absolute top-1 right-1 text-red rounded-full'>
                <FontAwesomeIcon icon={faHeart} className='text-xl' />
              </span>
              <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Add to Cart
              </button>
              <h1 className="font-bold font-sans pt-2 text-center">RGB liquid CPU Cooler</h1>
              <span className="text-red-500 font-bold">$160</span>
              <span className="text-gray-400 font-bold line-through ml-2">$170</span>
              <div className="flex space-x-1 text-yellow-400 text-md pt-1 mb-5">
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={regularStar} />
                <span className='text-gray-400'>(95)</span>
              </div>
            </div>

            {/* Box4 */}
            <div className="group shadow-md bg-neutral-100 p-4 flex flex-col items-center justify-center relative">
              <Image src={"/bestselling/table.png"} width={150} height={100} alt="table" />
              <span className='absolute top-1 right-1 text-red rounded-full'>
                <FontAwesomeIcon icon={faHeart} className='text-xl' />
              </span>
              <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Add to Cart
              </button>
              <h1 className="font-bold font-sans pt-2 text-center">Small BookShelf</h1>
              <span className="text-red-500 font-bold">$320</span>
              <div className="flex space-x-1 text-yellow-400 text-md pt-1">
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={solidStar} />
                <FontAwesomeIcon icon={regularStar} />
                <span className='text-gray-400'>(99)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Products;
