import useTheme from "../context/Theme";

function Card() {
  const { themeMode } = useTheme();

  return (
    <div
      className={`p-6 rounded-xl shadow-md mb-4 ${
        themeMode === "dark"
          ? "bg-slate-800 text-white"
          : "bg-white text-black"
      }`}
    >
      <h2 className="text-xl font-semibold mb-2">Card Component</h2>
      <p>This card changes with theme 🌗</p>
    </div>
  );
}

export default Card;