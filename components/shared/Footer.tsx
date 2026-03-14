// ... keep your existing imports
import { MessageSquare, ExternalLink } from "lucide-react";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
			<div className="max-w-4xl mx-auto px-6 py-16 text-center">
				{/* ... keep your Beta Badge and Core Identity sections ... */}

				{/* Actionable Links */}
				<div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
					{/* Updated Feedback Link */}
					<a
						href="https://forms.gle/cLqw9eyN57uSX5wT8"
						target="_blank"
						rel="noopener noreferrer"
						className="group flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
					>
						<MessageSquare size={16} />
						Provide Feedback
						<ExternalLink size={12} className="opacity-50" />
					</a>

					<a
						href="https://amplivate.in"
						target="_blank"
						rel="noopener noreferrer"
						className="group flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
					>
						Crafted by Amplivate
						<ExternalLink size={14} className="opacity-50" />
					</a>
				</div>

				{/* Footer Bottom */}
				<div className="pt-8 border-t border-slate-200 dark:border-slate-900">
					<p className="text-sm text-slate-500 dark:text-slate-600 font-medium">
						Virbic {currentYear} © All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
