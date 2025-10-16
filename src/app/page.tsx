import ArticlesSection from "@/components/ArticlesSection/ArticlesSection";
import BookReview from "@/components/BookReview/BookReview";
import CategoriesSections from "@/components/CategoriesSections/CategoriesSections";
import HeroSections from "@/components/HeroSections/HeroSection";
import ReleaseSection from "@/components/ReleaseSection/ReleaseSection";
import StackBooks from "@/components/StackBooks/StackBooks";
import SubscibeSection from "@/components/SubscibeSection/SubscibeSection";



export default function Home() {
  return (
    <>
      <HeroSections />
      <CategoriesSections />
      <ReleaseSection/>
      <BookReview/>
      <StackBooks/>
      <SubscibeSection/>
      <ArticlesSection/>
    </>
  );
}
