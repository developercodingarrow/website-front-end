import React, { useState, useEffect } from "react";

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(true);

  useEffect(() => {
    const errorHandler = (error) => {
      console.error("Error caught by ErrorBoundary:", error);
      setHasError(true);
    };

    // Add an error event listener here (for example, global error handling)
    window.addEventListener("error", errorHandler);

    return () => {
      // Clean up the error event listener
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError) {
    // You can render any custom fallback UI
    return <h1>Something went wrong.</h1>;
  }

  return children;
}

export default ErrorBoundary;
