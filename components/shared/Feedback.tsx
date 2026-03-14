"use client";
import { motion } from "framer-motion";
import { MessageSquare, ExternalLink } from "lucide-react";

export default function FeedbackSection() {
	const GOOGLE_FORM_URL =
		"https://docs.google.com/forms/d/e/1FAIpQLSdmuyTNX7oiYj3L6tQ27x7DFv-tV3XUPN7zgLTgx0K9pbCODw/viewform";

	return (
		<section className="relative w-full py-24 transition-colors duration-300 bg-white dark:bg-slate-950 overflow-hidden">
			{/* Background Decorative Elements */}
			{/* The overflow-hidden on the parent prevents these from expanding the page width */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-indigo-500/5 blur-[120px] dark:bg-indigo-500/10" />
				<div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-[120px] dark:bg-purple-600/10" />
			</div>

			<div className="relative max-w-4xl mx-auto px-6 text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					{/* Badge */}
					<div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 dark:border-indigo-500/20 bg-indigo-50/50 dark:bg-indigo-500/5 px-4 py-1.5 mb-8">
						<MessageSquare
							size={16}
							className="text-indigo-600 dark:text-indigo-400"
						/>
						<span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
							Help Shape Virbic
						</span>
					</div>

					{/* Heading & Text */}
					<h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8">
						Your Feedback Matters
					</h2>
					<p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
						This is an early version of the platform. Your insights help us
						prioritize features that truly matter for your MBA career journey.
						It takes just 2–3 minutes.
					</p>

					{/* Button matching Hero style */}
					<motion.a
						href={GOOGLE_FORM_URL}
						target="_blank"
						rel="noopener noreferrer"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all"
					>
						Open Feedback Form
						<ExternalLink size={16} />
					</motion.a>

					<p className="mt-8 text-sm text-slate-400 dark:text-slate-500">
						All responses are anonymous.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
