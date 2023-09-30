import React from "react";
import Link from "next/link";

export default function success() {
	return (
		<div className="flex justify-center items-center text-4xl flex-col h-[75vh]">
			<p className="mb-5 w-[60%] text-center">
				Your email has been received. Thank you for reaching out. I will
				reply as soon as possible.
			</p>
			<Link
				className="font-bold text-[#09c] hover:text-[#006699] transition-all"
				href="/contact"
			>
				Back
			</Link>
		</div>
	);
}
