import Link from "next/link";
import React from "react";

export default function Header() {
	return (
		<nav className="flex items-center mb-0 gap-3 h-24 text-xl">
			<Link className="flex-1 justify-start font-bold" href="/">
				Ahmed
			</Link>

			<ul className="flix-2 flex justify-end gap-14">
				<Link className="font-bold" href="/about">
					About
				</Link>
				<Link className="font-bold" href="/contact">
					Contact me
				</Link>
			</ul>
		</nav>
	);
}
