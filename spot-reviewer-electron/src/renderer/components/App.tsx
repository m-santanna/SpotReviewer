import DashboardPage from './DashboardPage'
import InitialPage from './InitialPage'
import React from 'react'

function App() {
  const [page, setPage] = React.useState('initial')
  return (
    <div className="w-screen h-screen background">
      <header
        id="titlebar"
        className="flex justify-center items-center h-8 font-semibold text-white background"
      >
        SpotReviewer
      </header>

      {page === 'initial' && <InitialPage setPage={setPage} />}
      {page === 'dashboard' && <DashboardPage setPage={setPage} />}
    </div>
  )
}

export default App
