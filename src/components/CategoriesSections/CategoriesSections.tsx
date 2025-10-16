"use client";
import dynamic from "next/dynamic";
import AppButton from "../UI/AppButton";
import "./CategoriesSections.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function CategoriesSections() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section  id="categorie" className="section">
      <div className="section-header">
        <p className="subtitle">Categories</p>
        <h4 className="title">Explore our Top Categories</h4>
      </div>
      
      <Slider {...settings}>
        <div className="category-card">
          <img src="/pictures/books.png" alt="books" />
          <p>Higher Education</p>
        </div>
        
        <div className="category-card">
          <img src="/pictures/table.png" alt="table" />
          <p>Management Books</p>
        </div>
        
        <div className="category-card">
          <img src="/pictures/cofe.png" alt="cofe" />
          <p>Engineering Books</p>
        </div>
        
        <div className="category-card">
          <img src="/pictures/books.png" alt="books" />
          <p>Science Books</p>
        </div>
        
        <div className="category-card">
          <img src="/pictures/table.png" alt="books" />
          <p>Business Books</p>
        </div>
        
        <div className="category-card">
          <img src="/pictures/cofe.png" alt="books" />
          <p>Technology Books</p>
        </div>
      </Slider>
      
      <div className="button-wrapper">
        <AppButton buttonText="View more" />
      </div>
    </section>
  );
}