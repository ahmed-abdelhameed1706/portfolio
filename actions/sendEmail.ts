"use server";

import { Resend } from "resend";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";

const resend = new Resend(process.env.RESEND_API_KEY);

function validateString(value: unknown, maxLength: number) {
	if (!value || typeof value !== "string" || value.length > maxLength) {
		return false;
	}

	return true;
}

export async function SendEmail(formData: FormData) {
	const message = formData.get("message") as string;
	const senderEmail = formData.get("email") as string;

	if (!validateString(message, 3500)) {
		return {
			error: "Invalid Message",
		};
	}
	if (!validateString(senderEmail, 60)) {
		return {
			error: "Invalid Sender Email",
		};
	}

	try {
		await resend.emails.send({
			from: "eng-ahmed.me <onboarding@resend.dev>",
			to: "ahmed.abdelhameed1706@gmail.com",
			subject: "New Message from eng-ahmed.me",
			reply_to: senderEmail,
			text: message,
		});
		return {
			success: true,
		};
	} catch (error) {
		return {
			error: "Something went wrong with sending your email",
		};
	}
}

const renderSuccessPage = () => {
	"use client";
	const router = useRouter();
	router.push("/success");
};
