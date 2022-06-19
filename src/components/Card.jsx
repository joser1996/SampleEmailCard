import React from "react";
import img from "../assets/images/image.jpg";
const Card = () => {
	return (
		<div className="bg-zinc-800 text-white mx-6 p-2 rounded-2xl flex flex-col md:flex-row">
			<img
				src={img}
				className="object-cover rounded-xl h-80 md:h-64 md:rouded-l-xl md:rounded-r-none hover:scale-105 hover:rounded-xl duration-200"
				alt=""
			/>

			<div className="p-6 md:p-12">
				<h2 className="font-serif text-xl font-medium text-center text-white md:text-center">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
					ipsum accusamus quibus
				</h2>
				<p className="max-w-xs my-4 leading-5 tracking-wide text-center md:text-left">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
					doloribus.
				</p>
				<div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
					<input
						type="text"
						placeHolder="Enter Your email"
						className="p-2 px-4 text-center bg-zinc-800 text-white border border-zinc-600 placeholder:text-center placeholder:text-xs md:text-left placeholder:md:text-left focus:outline-none"
					/>

					<button className="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500">
						Subscribe
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
