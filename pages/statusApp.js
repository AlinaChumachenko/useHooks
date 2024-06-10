import { useOnlineStatus } from "@/hooks/useOnlineStatus.js";

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}

function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log("✅ Progress saved");
  }

  return (
    <button
      disabled={!isOnline}
      onClick={handleSaveClick}
      className={`py-2 px-4 rounded-lg ${
        isOnline
          ? "bg-green-500 text-white"
          : "bg-gray-300 text-gray-700 cursor-not-allowed"
      }`}
    >
      {isOnline ? "Save progress" : "Reconnecting..."}
    </button>
  );
}

export default function App() {
  return (
    <>
      <SaveButton />
      <StatusBar />
    </>
  );
}
