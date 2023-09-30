import React from "react";
import { HiDownload } from "react-icons/hi";

export default function About() {
	return (
		<div>
			<div className="border-b-2">
				<h1 className="text-5xl text-center mb-20">About me</h1>
				<p className="text-2xl mb-3">My name is Ahmed Abd ElHameed.</p>
				<p className="text-2xl mb-3">
					I am a passionate software engineer from Egypt.
				</p>

				<p className="lg:text-2xl md:text-lg xxs:text-sm mb-3 leading-loose">
					After Graduating with a Degree in Accounting I decided to
					pursue my passion for programming, I Enrolled in 3 months
					FWD programme and after that I Enrolled in the 15 months ALX
					Software Engineering Programme which was the best thing ever
					happened to me. <br /> I worked as a localization Engineer
					to further enhance my programming skills in varios fields.
					my favourite part of programming is problem solving, I{" "}
					<b>LOVE </b>
					the feeling when I finally find the answer of a problem I
					was looking for. Mainly I am a python developer, I use Flask
					and Django. at the meantime I am also picking up NextJS for
					the frontend. when I am not programming I like playing
					Online games and watching Anime.
				</p>
			</div>
			<div className="mt-6">
				<h2 className="lg:text-3xl md:text-lg xxs:text-sm mb-10">
					you can download my CV here
				</h2>
				<div className="text-center flex justify-center xxs:mb-[35px] xs:mb-[35px]">
					<div className="text-center xxs:mb-[35px] xs:mb-[35px]">
						<a
							href="/Ahmed-AbdElHameed-CV.pdf"
							download
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center gap-2 w-[12rem] group transition-all  "
						>
							Download CV
							<HiDownload className="text-sm opacity-70 transition-all group-hover:translate-y-1" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
