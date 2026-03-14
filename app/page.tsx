import FeedbackSection from "@/components/shared/Feedback";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/shared/HeroSection";
import Navbar from "@/components/shared/Navbar";
import WhyVirbic from "@/components/shared/WhyVirbic";

export default function Home() {
	return (
		<>
			<HeroSection />
			<WhyVirbic />
			<FeedbackSection />
		</>
	);
}
