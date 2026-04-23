import useTheme from "../context/Theme";

function Themebtn() {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const toggle = () => {
    themeMode === "light" ? darkTheme() : lightTheme();
  };

  return (
    <button
      onClick={toggle}
      className="px-6 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition mb-4"
    >
      Toggle Theme
    </button>
  );
}

export default Themebtn;