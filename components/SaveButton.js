import { useState, useEffect } from "react";

export default function SaveButton() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  function handleSaveClick() {
    console.log("✅ Progress saved");
  }

  return (
    <button
      disabled={!isOnline}
      onClick={handleSaveClick}
      className={`py-2 px-4 rounded-lg ${
        isOnline
          ? "bg-blue-500 text-white"
          : "bg-gray-300 text-gray-700 cursor-not-allowed"
      }`}
    >
      {isOnline ? "Save progress" : "Reconnecting..."}
    </button>
  );
}
