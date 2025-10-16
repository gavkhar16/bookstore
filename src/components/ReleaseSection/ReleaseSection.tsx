"use client";
import dynamic from "next/dynamic";
import "./ReleaseSection.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function ReleaseSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <section id="release" className="release-section">
      <p className="release-subtitle">Some quality items</p>
      <h2 className="release-title">New Release Books</h2>

     <Slider {...settings}> 
        <div className="release-card">
          <img
            src="/pictures/book1.jpg"
            alt="Simple Way Of Piece Life"
            className="imgBook"
          />

          <div className="card-info">
            <p className="bookName">Simple Way Of Piece Life</p>
            <p className="bookauthor">Armor Ramsey</p>
            <p className="bookPrice">$ 40.00</p>
          </div>
          <div className="redBox">add to cart</div>
        </div>

        <div className="release-card">
          <img
            src="/pictures/book2.jpg"
            alt="Great Travel At Desert"
            className="imgBook"
          />

          <div className="card-info">
            <p className="bookName">Great Travel At Desert</p>
            <p className="bookauthor">Sanchit Howdy</p>
            <p className="bookPrice">$ 38.00</p>
          </div>
        </div>

        <div className="release-card">
          <img
            src="/pictures/book3.jpg"
            alt="The Lady Beauty Scarlett"
            className="imgBook"
          />

          <div className="card-info">
            <p className="bookName">The Lady Beauty Scarlett</p>
            <p className="bookauthor">Arthur Doyle</p>
            <p className="bookPrice">$ 45.00</p>
          </div>
        </div>

        <div className="release-card">
          <img
            src="/pictures/book4.jpg"
            alt="Once Upon A Time"
            className="imgBook"
          />

          <div className="card-info">
            <p className="bookName">Once Upon A Time</p>
            <p className="bookauthor">Klien Marry</p>
            <p className="bookPrice">$ 35.00</p>
          </div>
          
        </div>

        <div className="release-card">
          <img
            src="/pictures/book1.jpg"
            alt="Simple Way Of Piece Life"
            className="imgBook"
          />

          <div className="card-info">
            <p className="bookName">Simple Way Of Piece Life</p>
            <p className="bookauthor">Armor Ramsey</p>
            <p className="bookPrice">$ 40.00</p>
          </div>
        </div>

        <div className="release-card">
          <img
            src="/pictures/book2.jpg"
            alt="Great Travel At Desert"
            className="imgBook"
          />

          <div className="card-info">
            <p className="bookName">Great Travel At Desert</p>
            <p className="bookauthor">Sanchit Howdy</p>
            <p className="bookPrice">$ 38.00</p>
          </div>
        </div>

        <div className="release-card">
          <img
            src="/pictures/book3.jpg"
            alt="The Lady Beauty Scarlett"
            className="imgBook"
          />

          <div className="card-info">
            <p className="bookName">The Lady Beauty Scarlett</p>
            <p className="bookauthor">Arthur Doyle</p>
            <p className="bookPrice">$ 45.00</p>
          </div>
        </div>

        <div className="release-card">
          <img
            src="/pictures/book4.jpg"
            alt="Once Upon A Time"
            className="imgBook"
          />

          <div className="card-info">
            <p className="bookName">Once Upon A Time</p>
            <p className="bookauthor">Klien Marry</p>
            <p className="bookPrice">$ 35.00</p>
          </div>
          
        </div>


        
     </Slider>
      <div className="line"></div>
      <div className="release-footer">
        <p className="viewAll">View all products</p>
        <img
          src="/pictures/icons/orangeArrow.svg"
          alt="arrow"
          className="arrow-icon"
        />
      </div>
    </section>
  );
}
