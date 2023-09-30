"use client";
import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaPaperPlane } from "react-icons/fa";
import { SendEmail } from "@/actions/sendEmail";
import { useRouter } from "next/navigation";
export default async function Contact() {
	const router = useRouter();
	return (
		<div className="text-center mt-12 ">
			<div className="contant-info border-b-2 pb-9">
				<h1 className="font-bold text-3xl">Contact Info</h1>
				<br />
				<div>
					<p className="text-xl">
						Email:
						<a
							href="mailto:ahmed.abdelhameed1706@gmail.com
"
							className="text-[#0074cc]"
						>
							{" "}
							ahmed.abdelhameed1706@gmail.com
						</a>
					</p>
				</div>
				<br />
				<div>
					<p className="text-xl">
						Phone:{" "}
						<span className="text-[#009933]">+201007888028</span>
					</p>
				</div>
				<br />
				<div className="text-xl">
					Socials:
					<div className=" flex justify-center gap-3 mt-5">
						<a
							href="https://www.linkedin.com/in/ahmed-abdelhameed1706/"
							className="text-[#FFD700]"
							target="_blank"
						>
							{" "}
							<AiOutlineLinkedin
								size={35}
								className="transition-all hover:scale-[1.25] hover:text-[#19F8FF]"
							/>
						</a>

						<a
							href="
						https://github.com/ahmed-abdelhameed1706"
							className="text-[#FFD700]"
							target="_blank"
						>
							{" "}
							<AiOutlineGithub
								size={35}
								className="transition-all hover:scale-[1.25] hover:text-[#19F8FF]"
							/>
						</a>
						<a
							href="https://twitter.com/ajvhz"
							className="text-[#FFD700]"
							target="_blank"
						>
							{" "}
							<AiOutlineTwitter
								size={35}
								className="transition-all hover:scale-[1.25] hover:text-[#19F8FF]"
							/>
						</a>
						<a
							href="https://www.facebook.com/ajvhall3n"
							className="text-[#FFD700]"
							target="_blank"
						>
							{" "}
							<AiOutlineFacebook
								size={35}
								className="transition-all hover:scale-[1.25] hover:text-[#19F8FF]"
							/>
						</a>
					</div>
				</div>
			</div>
			<div className="send-message mt-6 w-[min(100%,38rem)] mx-auto">
				<h1 className="font-bold text-3xl capitalize">
					Or send me a direct message!
				</h1>

				<form
					className="mt-10 flex flex-col"
					action={(formData) => {
						SendEmail(formData);
						router.push("/success");
					}}
				>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Your Email"
						required
						maxLength={60}
						className="focus:border-white border border-gray-400 rounded-md p-2 mb-3 outline-none text-[#333] focus:ring-2 focus:ring-white focus:ring-opacity-75"
					/>
					<textarea
						name="message"
						id="message"
						required
						maxLength={3500}
						placeholder="Your Message"
						className="focus:border-white border border-gray-400 rounded-md p-2 mb-3 h-36 outline-none text-[#333] focus:ring-2 focus:ring-white focus:ring-opacity-75"
					></textarea>
					<button
						type="submit"
						className="bg-[#009933] text-white font-bold py-2 px-4 rounded flex justify-center items-center gap-2 w-[12rem] group transition-all hover:bg-[#007722] hover:scale-105 focus:scale-105 active:scale-105"
					>
						Send Message
						<FaPaperPlane className="text-sm opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
					</button>
				</form>
			</div>
		</div>
	);
}
