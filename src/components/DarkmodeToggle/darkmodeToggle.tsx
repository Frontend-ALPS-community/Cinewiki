interface DarkModeToggleProps {
  toggleDarkMode: () => void
  darkmode: boolean
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ toggleDarkMode, darkmode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-4 left-10 z-50 p-1 rounded-full border bg-white dark:bg-gray-800"
    >
      {darkmode ? (
        <span className="text-black text-lg dark:text-white">🌞</span>
      ) : (
        <span className="text-black text-lg dark:text-black">🌙</span>
      )}
    </button>
  )
}

export default DarkModeToggle
