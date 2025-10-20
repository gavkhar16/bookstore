"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import "./StackBooks.css";

interface TimerProps {
  targetDate: Date;
}

function Timer({ targetDate }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      const format = (num: number) => (num <= 9 ? `0${num}` : String(num));

      setTimeLeft({
        days: format(days),
        hours: format(hours),
        minutes: format(minutes),
        seconds: format(seconds),
      });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="stackBooks-timer">
      <div className="timer-item">
        <p>{timeLeft.days}</p>
        <p>Days</p>
      </div>
      <div className="timer-item">
        <p>{timeLeft.hours}</p>
        <p>Hour</p>
      </div>
      <div className="timer-item">
        <p>{timeLeft.minutes}</p>
        <p>Min</p>
      </div>
      <div className="timer-item">
        <p>{timeLeft.seconds}</p>
        <p>Sec</p>
      </div>
    </div>
  );
}

export default function StackBooksSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="stackBooks-slider-section">
      <Slider {...settings}>
        <div>
          <div className="stackBooks-section">
            <div className="stackBooks-content">
              <h2 className="stackBooks-title">
                All books are 50% off now! Don’t miss such a deal!
              </h2>
              <span className="stackBooks-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                feugiat amet, libero ipsum enim pharetra hac.
              </span>
              <Timer targetDate={new Date(2025, 10, 8, 14)} />
            </div>
            <div className="stackBooks-image">
              <img src="/pictures/StackBooks.png" alt="StackBooks" />
            </div>
          </div>
        </div>

        <div>
          <div className="stackBooks-section">
            <div className="stackBooks-content">
              <h2 className="stackBooks-title">
                Special offer for limited time — up to 40% off!
              </h2>
              <span className="stackBooks-text">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </span>
              <Timer targetDate={new Date(2025, 10, 9, 20)} />
            </div>
            <div className="stackBooks-image">
              <img src="/pictures/StackBooks.png" alt="StackBooks 2" />
            </div>
          </div>
        </div>

        <div>
          <div className="stackBooks-section">
            <div className="stackBooks-content">
              <h2 className="stackBooks-title">
                Holiday Sale — grab your favorite books today!
              </h2>
              <span className="stackBooks-text">
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus. Nulla quis lorem ut libero malesuada feugiat.
              </span>
              <Timer targetDate={new Date(2025, 10, 10, 18)} />
            </div>
            <div className="stackBooks-image">
              <img src="/pictures/StackBooks.png" alt="StackBooks 3" />
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
}
