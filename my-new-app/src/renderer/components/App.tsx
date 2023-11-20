import InitialPage from './InitialPage'
import React from 'react'
import { ClerkProvider } from '@clerk/clerk-react'

const clerkPubKey = 'pk_test_bW92aW5nLWNoaWdnZXItNDcuY2xlcmsuYWNjb3VudHMuZGV2JA'

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <div className="w-screen h-screen">
        <InitialPage />
      </div>
    </ClerkProvider>
  )
}

export default App
