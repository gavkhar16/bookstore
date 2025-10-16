"use client";
import "./ArticlesSection.css";

export default function ArticlesSection() {
  return (
    <section id="article" className="articles-section">
      <div className="container">
        <p className="section-pretitle">Read our articles</p>

        <div className="heading-row">
          <div className="line" aria-hidden="true" />
          <h2 className="section-title">Latest Articles</h2>
          <div className="line" aria-hidden="true" />
        </div>

        <div className="articles-grid">
          {/* карточка 1 */}
          <article className="article-card">
            <img
              className="thumb"
              src="/pictures/ArticlesSection.jpg"
              alt="article 1"
            />
            <div className="card-body">
              <p className="date">2 Aug, 2021</p>
              <h3 className="card-title">
                Reading books always makes the moments happy
              </h3>
              <div className="card-sep" />
              <div className="socials">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <img src="/pictures/icons/facebook.svg" alt="facebook" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <img src="/pictures/icons/instagram.svg" alt="instagram" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <img src="/pictures/icons/twitter.svg" alt="twitter" />
                </a>
              </div>
            </div>
          </article>

          <article className="article-card">
            <img
              className="thumb"
              src="/pictures/ArticlesSection2.jpg"
              alt="article 2"
            />
            <div className="card-body">
              <p className="date">2 Aug, 2021</p>
              <h3 className="card-title">
                Reading Books Always Makes The Moments Happy
              </h3>
              <div className="card-sep" />
              <div className="socials">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <img src="/pictures/icons/facebook.svg" alt="facebook" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <img src="/pictures/icons/instagram.svg" alt="instagram" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <img src="/pictures/icons/twitter.svg" alt="twitter" />
                </a>
              </div>
            </div>
          </article>


          <article className="article-card">
            <img
              className="thumb"
              src="/pictures/ArticlesSection3.jpg"
              alt="article 3"
            />
            <div className="card-body">
              <p className="date">2 Aug, 2021</p>
              <h3 className="card-title">
                Reading Books Always Makes The Moments Happy
              </h3>
              <div className="card-sep" />
              <div className="socials">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <img src="/pictures/icons/facebook.svg" alt="facebook" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <img src="/pictures/icons/instagram.svg" alt="instagram" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <img src="/pictures/icons/twitter.svg" alt="twitter" />
                </a>
              </div>
            </div>
          </article>
        </div>

        <div className="read-all-wrap">
          <button className="read-all">READ ALL ARTICLES →</button>
        </div>
      </div>
    </section>
  );
}
