import ArticlesSection from "@/components/ArticlesSection/ArticlesSection";
import BookReview from "@/components/BookReview/BookReview";
import BookstoreV2 from "@/components/BookstoreV2/BookstoreV2";
import CategoriesSections from "@/components/CategoriesSections/CategoriesSections";
import HeroSections from "@/components/HeroSections/HeroSection";
import ReleaseSection from "@/components/ReleaseSection/ReleaseSection";
import SectionSwich from "@/components/SectionSwich/SectionSwich";
import StackBooksSlider from "@/components/StackBooks/StackBooks";
import SubscibeSection from "@/components/SubscibeSection/SubscibeSection";

export default function Home() {
  return (
    <>
    <SectionSwich/>
    <BookstoreV2/>
      {/* <HeroSections />
      <CategoriesSections />
      <ReleaseSection />
      <BookReview />
      <StackBooksSlider />
      <SubscibeSection />
      <ArticlesSection /> */}
    </>
  );
}
