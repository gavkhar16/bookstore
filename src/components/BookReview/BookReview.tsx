"use client";
import dynamic from "next/dynamic";
import AppButton from "../UI/AppButton";
import "./BookReview.css";


const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function BookReview() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section id="book" className="bookReview-section">
      <Slider {...settings}>

        <div className="bookReview-slide">
          <div className="bookReview-imageWrapper">
            <img
              src="/pictures/bookReview.jpg"
              alt="Featured book"
              className="bookReview-image"
            />
          </div>
          <div className="bookReview-content">
            <h2 className="bookReview-title">Featured book</h2>
            <div className="bookReview-strip"></div>
            <p className="bookReview-author">By Timbur Hood</p>
            <h3 className="bookReview-heading">Birds gonna be happy</h3>
            <span className="bookReview-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              feugiat amet, libero ipsum enim pharetra hac.
            </span>
            <p className="bookReview-price">$ 20.00</p>
            <div className="bookReview-buttonWrapper">
              <AppButton buttonText="View more" />
            </div>
          </div>
        </div>


        <div className="bookReview-slide">
          <div className="bookReview-imageWrapper">
            <img
              src="/pictures/book1.jpg"
              alt="Book 1"
              className="bookReview-image"
            />
          </div>
          <div className="bookReview-content">
            <h2 className="bookReview-title">Featured book</h2>
            <div className="bookReview-strip"></div>
            <p className="bookReview-author">By Timbur Hood</p>
            <h3 className="bookReview-heading">Simple Way Of Piece Life</h3>
            <span className="bookReview-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              feugiat amet, libero ipsum enim pharetra hac.
            </span>
            <p className="bookReview-price">$ 98.00</p>
            <div className="bookReview-buttonWrapper">
              <AppButton buttonText="View more" />
            </div>
          </div>
        </div>


        <div className="bookReview-slide">
          <div className="bookReview-imageWrapper">
            <img
              src="/pictures/book2.jpg"
              alt="Book 2"
              className="bookReview-image"
            />
          </div>
          <div className="bookReview-content">
            <h2 className="bookReview-title">Featured book</h2>
            <div className="bookReview-strip"></div>
            <p className="bookReview-author">By Timbur Hood</p>
            <h3 className="bookReview-heading">Great Travel At Desert</h3>
            <span className="bookReview-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              feugiat amet, libero ipsum enim pharetra hac.
            </span>
            <p className="bookReview-price">$ 478.00</p>
            <div className="bookReview-buttonWrapper">
              <AppButton buttonText="View more" />
            </div>
          </div>
        </div>


        <div className="bookReview-slide">
          <div className="bookReview-imageWrapper">
            <img
              src="/pictures/book3.jpg"
              alt="Book 3"
              className="bookReview-image"
            />
          </div>
          <div className="bookReview-content">
            <h2 className="bookReview-title">Featured book</h2>
            <div className="bookReview-strip"></div>
            <p className="bookReview-author">By Timbur Hood</p>
            <h3 className="bookReview-heading">The Lady Beauty Scarlett</h3>
            <span className="bookReview-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              feugiat amet, libero ipsum enim pharetra hac.
            </span>
            <p className="bookReview-price">$ 57.00</p>
            <div className="bookReview-buttonWrapper">
              <AppButton buttonText="View more" />
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
}
