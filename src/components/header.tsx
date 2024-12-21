"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { useState } from 'react';

function Header() {
	const [open, setOpen] = useState(false);
	const toggle = () => {
		setOpen(!open);
	};

	return (
		<main className='border-b-2 bg-neutral-100'>
			{/* Header container */}
			<div className='w-full flex items-center justify-center bg-white h-[70px]'>
				<div className='sm:w-full md:w-[90%] lg:w-[80%] flex items-center justify-between h-[50px]'>

					{/* Logo */}
					<div>
						<h1 className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold ml-1'>Exclusive</h1>
					</div>

					{/* Links - Responsive Navigation */}
					<div
						className={`${open ? "translate-x-0" : "-translate-x-full"}
							md:flex md:translate-x-0 md:static w-[60%] md:w-auto bg-gray-800 md:bg-transparent fixed top-0 left-0 h-full md:h-auto z-40 transition-transform duration-500 ease-in-out`}
					>
						<ul className='flex flex-col md:flex-row md:gap-x-4 lg:gap-x-6 xl:gap-x-8 text-white md:text-black md:bg-transparent h-full md:h-auto justify-center items-center'>
							<li className='p-4 md:p-2 lg:p-2 hover:underline'>
								<Link href="/">Home</Link>
							</li>
							<li className='p-4 md:p-2 lg:p-2 hover:underline'>
								<Link href="/contact">Contact</Link>
							</li>
							<li className='p-4 md:p-2 lg:p-2 hover:underline'>
								<Link href="/about">About</Link>
							</li>
							<li className='p-4 md:p-2 lg:p-2 hover:underline'>
								<Link href="/signup">Sign Up</Link>
							</li>
						</ul>
					</div>

					{/* Icons and Search Bar */}
					<div className='flex gap-x-4 items-center'>
						{/* Search bar - Hidden on small screens */}
						<div className='hidden lg:flex w-full bg-gray-200 rounded-md items-center'>
							<input
								className='w-full p-2 rounded-md bg-gray-200 outline-none'
								type="search"
								placeholder='What are you looking for?'
							/>
							<FontAwesomeIcon
								icon={faSearch}
								className="text-xl ml-2"
							/>
						</div>

						{/* Icons */}
						<FontAwesomeIcon icon={faHeart} className='text-2xl text-gray-700'></FontAwesomeIcon>
						<FontAwesomeIcon icon={faShoppingCart} className='text-gray-700 text-2xl'></FontAwesomeIcon>

						{/* Toggle Button */}
						<button
							className="text-black block md:hidden text-3xl z-50"
							onClick={toggle}
						>
							☰
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Header;
