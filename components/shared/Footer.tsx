// ... keep your existing imports

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
			<div className="max-w-4xl mx-auto px-6 py-16 text-center">
				{/* ... keep your Beta Badge and Core Identity sections ... */}

				{/* Footer Bottom */}
				<div className="pt-8 border-t border-slate-200 dark:border-slate-900">
					<p className="text-sm text-slate-500 dark:text-slate-600 font-medium">
						Vantage {currentYear} © All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
