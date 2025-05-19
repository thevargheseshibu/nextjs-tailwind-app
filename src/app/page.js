import Header from "./Header/Header";
import BlogHero from "./components/blogs/BlogHero";
import BlogList from "./components/blogs/BlogList";
import CTASection from "./components/blogs/CTASection";
import Footer from "./Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <BlogHero />
      <BlogList />
      <CTASection />
      <Footer />
    </>
  );
}
