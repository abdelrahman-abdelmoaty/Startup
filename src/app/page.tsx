import Hero from "@/components/sections/hero/Hero";
import Features from "@/components/sections/features/Features";
import Video from "@/components/sections/video/Video";
import Partners from "@/components/sections/partners/Partners";
import SaaS_1 from "@/components/sections/SaaS_1/SaaS_1";
import SaaS_2 from "@/components/sections/SaaS_2/SaaS_2";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Pricing from "@/components/sections/pricing/Pricing";
import Blogs from "@/components/sections/blogs/Blogs";
import CTA from "@/components/sections/cta/CTA";
import Footer from "@/components/sections/footer/Footer";
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
