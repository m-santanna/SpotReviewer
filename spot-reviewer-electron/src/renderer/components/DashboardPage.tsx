import { useState, MouseEvent, useEffect } from 'react'
import React from 'react'
import Navbar from './Navbar'

const DashboardPage = ({ setPage }: { setPage: (page: string) => void }) => {
  const [mapper, setMapper] = useState(null)
  const [spotCreatable, setSpotCreatable] = useState(false)
  const [newSpotPosition, setNewSpotPosition] = useState({ x: null, y: null })
  const [formState, setFormState] = useState('none')

  useEffect(() => {
    window.api.onMapperOpened((mapper: string) => {
      setMapper(mapper)
      setFormState('mapper')
    })
    window.api.onCreateSpotTriggered(() => {
      setSpotCreatable(true)
      setFormState('create-spot')
    })
    window.api.onMapperClosed(() => {
      setMapper(null)
      setSpotCreatable(false)
      setFormState('none')
      setNewSpotPosition({ x: null, y: null })
    })

    // Remova os ouvintes quando o componente for desmontado
    return () => {
      window.api.removeAllListeners()
    }
  }, [])

  const handleMapperClick = (e: MouseEvent<HTMLImageElement>) => {
    if (!spotCreatable) return
    const currentImage = e.currentTarget
    let boundingBox = currentImage.getBoundingClientRect()
    //
    // The x and y coordinates reference the top left corner of the image
    //
    let x = e.clientX - boundingBox.left
    let y = e.clientY - boundingBox.top

    setNewSpotPosition({ x, y })
    console.log(`Spot position: x=${x}, y=${y}`)
  }

  const handleFormState = (state: string) => {
    switch (state) {
      case 'create-user':
        return (
          <div className="flex items-center justify-center w-full h-full text-2xl font-light text-white bg-slate-500 border-2 border-white/10">
            create-user
          </div>
        )
      case 'mapper':
        return (
          <div className="flex items-center justify-center w-full h-full text-2xl font-light text-white bg-slate-500 border-2 border-white/10">
            mapper
          </div>
        )
      case 'create-spot':
        return (
          <div className="flex items-center justify-center w-full h-full text-2xl font-light text-white bg-slate-500 border-2 border-white/10">
            create-spot
          </div>
        )
      default:
        return (
          <div className="flex items-center justify-center w-full h-full text-2xl font-light text-white bg-slate-500 border-2 border-white/10">
            No mapper selected
          </div>
        )
    }
  }

  return (
    <div className="components-screen">
      <Navbar
        imageState={mapper}
        spotCreatable={spotCreatable}
        spotPosition={newSpotPosition}
        formState={formState}
      />
      <div className="flex w-full h-1/2">
        <div className="relative w-1/2 h-full py-2 pr-1 pl-2 overflow-hidden">
          {mapper ? (
            <img
              className={
                'object-cover w-full h-full border-2 border-white/30' +
                (spotCreatable ? ' cursor-crosshair' : '')
              }
              src={`data:image/jpeg;base64, ${mapper}`}
              alt="Mapper"
              onClick={handleMapperClick}
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-2xl font-light text-white bg-slate-500 border-2 border-white/10">
              No mapper selected
            </div>
          )}
          {newSpotPosition.x !== null && newSpotPosition.y !== null && (
            <button
              className="absolute w-2 h-2 bg-blue-500 rounded-full"
              style={{
                left: newSpotPosition.x + 4,
                top: newSpotPosition.y + 4,
              }}
            />
          )}
        </div>
        <div className="w-1/2 h-full py-2 pr-2 pl-1">
          {handleFormState(formState)}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
