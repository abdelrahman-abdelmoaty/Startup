import Video from "@/components/Video/Video";
import SaaS_1 from "@/components/SaaS_1/SaaS_1";
import SaaS_2 from "@/components/SaaS_2/SaaS_2";
import Footer from "@/components/Footer/Footer";
import BackToTop from "@/components/BackToTop/BackToTop";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";
import Partners from "@/components/Partners/Partners";
import Testimonials from "@/components/Testimonials/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import Blogs from "@/components/Blogs/Blogs";
import CTA from "@/components/CTA/CTA";

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
