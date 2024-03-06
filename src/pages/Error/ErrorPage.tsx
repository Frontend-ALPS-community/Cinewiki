const ErrorPage = () => {
  const goBack = () => {
    window.history.back()
  }

  return (
    <div className="w-content bg-yellow-100 flex flex-col m-auto justify-center">
      <div className="ml-5 text-lg font-bold mb-6">Fixing Error...</div>
      <div className="flex flex-col items-center justify-center text-center h-screen ">
        <span className="text-4xl font-bold text-red-500 mb-4">이미지 자리입니다</span>
        <button
          className="px-4 py-2 bg-gray-200 font-bold rounded hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-400"
          onClick={goBack}
        >
          Back
        </button>
      </div>
    </div>
  )
}

export default ErrorPage
