import React from 'react'

const InitialPage = ({ setPage }: { setPage: (page: string) => void }) => {
  return (
    <div className="components-screen flex flex-col justify-center items-center">
      <h1 className="heading mb-8">Welcome, doctor!</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
        onClick={() => setPage('dashboard')}
      >
        Start
      </button>
    </div>
  )
}

export default InitialPage
