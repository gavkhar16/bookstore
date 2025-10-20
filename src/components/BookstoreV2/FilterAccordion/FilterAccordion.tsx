"use client";
import { useState } from "react";
import "./FilterAccordion.css";

interface FilterAccordionProps {
  title: string;
  children?: React.ReactNode;
  defaultOpen?: boolean;
}

export default function FilterAccordion({ title, children, defaultOpen = false }: FilterAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="accordion">
      <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span className="symbol">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && <div className="accordion-body">{children}</div>}
    </div>
  );
}
