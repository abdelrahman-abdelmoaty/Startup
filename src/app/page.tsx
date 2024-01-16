import Hero from "@/components/hero/Hero";
import Features from "@/components/features/Features";
import Video from "@/components/video/Video";
import Partners from "@/components/partners/Partners";
import SaaS_1 from "@/components/SaaS_1/SaaS_1";
import SaaS_2 from "@/components/SaaS_2/SaaS_2";
import Testimonials from "@/components/testimonials/Testimonials";
import Pricing from "@/components/pricing/Pricing";
import Blogs from "@/components/blogs/Blogs";
import CTA from "@/components/cta/CTA";
import Footer from "@/components/Footer/Footer";
import BackToTop from "@/components/BackToTop/BackToTop";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Video />
      <Partners />
      <SaaS_1 />
      <hr className="container" />
      <SaaS_2 />
      <Testimonials />
      <Pricing />
      <Blogs />
      <CTA />
      <Footer />
      <BackToTop />
    </main>
  );
}
