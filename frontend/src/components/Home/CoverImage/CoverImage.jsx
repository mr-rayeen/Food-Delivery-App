import React from 'react'
import './CoverImage.css'
const CoverImage = () => {
  return (
		<>
			<div className="cover-Image width-full rounded-t-lg relative">
				<div className="absolute bottom-32 search-bar w-full">
					<form className="form relative w-1/2 mx-auto shadow-2xl rounded-full ">
						<button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
							<svg
								width="17"
								height="16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								aria-labelledby="search"
								className="w-5 h-5 text-gray-700"
							>
								<path
									d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
									stroke="currentColor"
									strokeWidth="1.333"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
							</svg>
						</button>
						<input
							className="input w-full rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-orange-500 placeholder-gray-400 focus:scale-110  transition-all duration-300 shadow-2xl"
							placeholder="Search..."
							required=""
							type="text"
						/>
						<button
							type="reset"
							class="absolute right-3 -translate-y-1/2 top-1/2 p-1"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-5 h-5 text-gray-700"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								></path>
							</svg>
						</button>
					</form>
				</div>
			</div>
		</>
  );
}

export default CoverImage