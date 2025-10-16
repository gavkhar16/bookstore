"use client";

import { Button } from "@heroui/react";

export default function AppButton({ buttonText }: { buttonText: string }) {
  return (
    <Button
      variant="bordered"
      style={{
        color: "#393280",
        borderColor: "#393280",
        width: "200px",
        height: "60px",
        textTransform: "uppercase",
      }}
    >
      {buttonText}

      <img src="/pictures/arrow.svg" alt="arrow" />
    </Button>
  );
}
