"use client";
import "./BookstoreV2.css";
import FilterAccordion from "./FilterAccordion/FilterAccordion";

export default function BookstoreV2() {
  return (
    <section className="bookstore-v2">
      <aside className="filter-panel">
        <FilterAccordion title="Price" defaultOpen={true}>
          <div className="price-inputs">
            $ <input type="text"  />
            <span>to</span>
            $ <input type="text"  />
          </div>
          <button className="filter-btn">Filter</button>
        </FilterAccordion>

        <FilterAccordion title="Product type" />
        <FilterAccordion title="Availability" />
        <FilterAccordion title="Brand" />
        <FilterAccordion title="Color" />
        <FilterAccordion title="Material" />
      </aside>

      <div className="product-section">
        <div className="top-bar">
          <p>Sort by: Alphabetically, A–Z</p>
          <p>Showing 1–12 of 26 results</p>
          <p>Show: 12</p>
        </div>

        <div className="products-grid">
          <div className="product-card">
            <div className="photo">
              <img src="/pictures/book1.jpg" alt="Book" />
            </div>
            <h3>Simple Way Of Piece Life</h3>
            <p>Armor Ramsey</p>
            <span>$40.00</span>
          </div>
          <div className="product-card">
            <div className="photo">
              <img src="/BookstoreV2/Book2.png" alt="Book" />
            </div>
            <h3>The Lady Beauty Scarlett</h3>
            <p>Arthur Doyle</p>
            <span>$45.00</span>
          </div>
          <div className="product-card">
            <div className="photo">
              <img src="/BookstoreV2/Book3.png" alt="Book" />
            </div>
            <h3>The Lady Beauty Scarlett</h3>
            <p>Arthur Doyle</p>
            <span>$45.00</span>
          </div>
          <div className="product-card">
            <div className="photo">
              <img src="/pictures/book2.jpg" alt="Book" />
            </div>
            <h3>The Lady Beauty Scarlett</h3>
            <p>Arthur Doyle</p>
            <span>$45.00</span>
          </div>
          <div className="product-card">
            <div className="photo">
              <img src="/BookstoreV2/Book5.png" alt="Book" />
            </div>
            <h3>The Lady Beauty Scarlett</h3>
            <p>Arthur Doyle</p>
            <span>$45.00</span>
          </div>
          <div className="product-card">
            <div className="photo">
              <img src="/pictures/book3.jpg" alt="Book" />
            </div>
            <h3>Great Travel At Desert</h3>
            <p>Sanchit Howdy</p>
            <span>$38.00</span>
          </div>
        </div>

        <div className="pagination">
          <button>&lt;</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>&gt;</button>
        </div>
      </div>
    </section>
  );
}
