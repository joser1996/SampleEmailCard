import React from "react";
import Img from "../assets/images/image.jpg";

const Test = () => {
	return (
		<div className="bg-zinc-800 text-white flex flex-col md:flex-row p-2 mx-6 rounded-2xl">
			<img
				alt=""
				src={Img}
				className="h-80 md:h-64 rounded-xl md:rounded-r-none md:rounded-l-2xl
				hover:scale-105 duration-500"
			/>

			{/* content */}
			<div className="p-6 md:p-12">
				<h2 className="font-serif font-medium text-center md:text-left text-lg  mt-4">
					Get diet and fitness tips in your inbox!
				</h2>
				<p className="max-w-sm leading-5 tracking-wide text-center md:text-left mt-4">
					Eat better and excersice better. Sign up for the diet & Fitness
					newsletter
				</p>

				<div className="flex flex-col my-4 space-y-4 md:flex-row md:space-x-2 md:space-y-0">
					<input
						className=" text-center md:placeholder:text-left placeholder:text-center placeholder:text-xs 
						bg-zinc-800 focus:outline-none border border-zinc-500 py-2 px-4"
						placeholder="Enter your email address"
					/>
					<button
						className="bg-lime-500 hover:bg-lime-700 
					duration-200 my-4 py-3 px-4 text-black hover:text-white 
					rounded-md"
					>
						Subscribe
					</button>
				</div>
			</div>
		</div>
	);
};

export default Test;
