import React, { useEffect, useState } from "react";
import ErrorBoundary from "../../Utils/ErrorBoundary/ErrorBoundary";

export default function TestPage() {
  const [triggerError, setTriggerError] = useState(true);

  useEffect(() => {
    if (triggerError) {
      // Simulate an error after initial render
      throw new Error("Intentional error triggered for testing");
    }
  }, [triggerError]);

  return (
    <>
      <ErrorBoundary>
        <div>index</div>
      </ErrorBoundary>
    </>
  );
}
