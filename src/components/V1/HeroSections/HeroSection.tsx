"use client";
import dynamic from "next/dynamic";
import AppButton from "@/components/UI/AppButton";
import styles from "./HeroSections.module.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function HeroSections() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <section id="hero" className={styles.hero}>
      <Slider {...settings}>
        <div className={styles.container}>
          <div className={styles.textBlock}>
            <h1 className={styles.title}>ipsum dolor si</h1>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus
              ut magna velit eleifend. Amet, quis urna, a eu.
            </p>
            <AppButton buttonText="Read more" />
            
            <div className={styles.pagination}></div>
          </div>
          <div className={styles.imageBlock}>
            <img
              src="/pictures/b5d22837e51e86de0acce7ba8a9582e3be31b204.png"
              alt="book"
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.textBlock}>
            <h1 className={styles.title}>ipsum dolor si</h1>
            
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus
              ut magna velit eleifend. Amet, quis urna, a eu.
            </p>
           
            <AppButton buttonText="Read more" />
            <div className={styles.pagination}></div>
          </div>
          <div className={styles.imageBlock}>
            <img
              src="/pictures/book1.jpg"
              alt="book"
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.textBlock}>
            <h1 className={styles.title}>ipsum dolor si</h1>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus
              ut magna velit eleifend. Amet, quis urna, a eu.
            </p>
            <AppButton buttonText="Read more" />
            <div className={styles.pagination}></div>
          </div>
          <div className={styles.imageBlock}>
            <img
              src="/pictures/book2.jpg"
              alt="book"
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.textBlock}>
            <h1 className={styles.title}>ipsum dolor si</h1>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus
              ut magna velit eleifend. Amet, quis urna, a eu.
            </p>
            <AppButton buttonText="Read more" />
            <div className={styles.pagination}></div>
          </div>
          <div className={styles.imageBlock}>
            <img
              src="/pictures/book3.jpg"
              alt="book"
              className={styles.image}
            />
          </div>
        </div>
      </Slider>
    </section>
  );
}
