import ArticlesSection from "./ArticlesSection/ArticlesSection";
import BookReview from "./BookReview/BookReview";
import CategoriesSections from "./CategoriesSections/CategoriesSections";
import HeroSections from "./HeroSections/HeroSection";
import ReleaseSection from "./ReleaseSection/ReleaseSection";
import StackBooksSlider from "./StackBooks/StackBooks";
import SubscibeSection from "./SubscibeSection/SubscibeSection";

export default function Bookstore() {
  return (
    <>
      <HeroSections />
      <CategoriesSections />
      <ReleaseSection />
      <BookReview />
      <StackBooksSlider />
      <SubscibeSection />
      <ArticlesSection />
    </>
  );
}
