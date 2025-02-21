import { CompareSection } from "@/components/compare-section";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero";
import { TryFont } from "@/components/try-font";
import { MotionSection } from "@/components/ui/motion-section";

export default function Home() {
	return (
		<main>
			<MotionSection>
				<Hero />
			</MotionSection>

			<MotionSection>
				<TryFont />
			</MotionSection>

			<MotionSection>
				<Features />
			</MotionSection>

			<MotionSection>
				<CompareSection />
			</MotionSection>

			<MotionSection>
				<FAQ />
			</MotionSection>

			<MotionSection>
				<CTASection />
			</MotionSection>

			<Footer />
		</main>
	);
}
