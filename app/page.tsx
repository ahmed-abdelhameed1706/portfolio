import Image from "next/image";
import { useEffect } from "react";
import $ from "jquery";

export default function Home() {
	return (
		<div className="flex w-[95%] mx-auto">
			<div className="w-1/2 p-4">
				<Image
					src="/images/me-real.jpg"
					alt="Ahmed Abd El Hameed"
					className="mx-auto"
					width={100}
					height={100}
					layout="responsive"
				/>
			</div>
			<div className="w-1/2 p-4 flex flex-col justify-center">
				<p className="text-center text-4xl ">
					Hello, My name is Ahmed Abd ElHameed and I am a Software
					Engineer!
				</p>
			</div>
		</div>
	);
}
