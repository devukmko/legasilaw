"use client";

import { useEffect, useState } from "react";
import { visitorCounter } from "@/libs/counter";

export default function Counter() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const canCountVisitor = () => {
    const lastVisitTime = localStorage.getItem("visitor_token");
    if (lastVisitTime) {
      const currentTime = Date.now();
      const savedTime = parseInt(lastVisitTime, 10);
      // Check if 3 minutes (180000 ms) have passed
      if (currentTime - savedTime <  180000 ) {
        return false;
      }
    }
    return true;
  };

  const setVisitorToken = () => {
    const currentTime = Date.now();
    localStorage.setItem("visitor_token", currentTime.toString());
  };

  const handleVisitorCounter = async () => {
    setErrorMessage(null);

    if (!canCountVisitor()) {
      return;
    }

    try {
      await visitorCounter();

      setVisitorToken();
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong while counting the visitor.");
    } finally {
    }
  };

  // Automatically count visitor on component mount
  useEffect(() => {
    handleVisitorCounter();
  }, []); // Empty dependency array ensures it runs only on mount

  return (
    <div>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}
