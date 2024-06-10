import { useState, useEffect } from "react";

export default function StatusBar() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
      console.log("Online");
    }
    function handleOffline() {
      setIsOnline(false);
      console.log("Offline");
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  console.log("Current status:", isOnline);

  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}
