import { useState, MouseEvent, useEffect } from 'react'
import React from 'react'
import Navbar from './Navbar'

const DashboardPage = ({ setPage }: { setPage: (page: string) => void }) => {
  const [image, setImage] = useState(null)
  const [spotCreatable, setSpotCreatable] = useState(false)
  const [newSpotPosition, setNewSpotPosition] = useState({ x: null, y: null })

  useEffect(() => {
    const handleImageOpened = (image: string) => {
      setImage(image)
    }

    const handleImageRemoved = () => {
      setImage(null)
      setSpotCreatable(false)
      setNewSpotPosition({ x: null, y: null })
    }

    const handleCreateSpotTriggered = () => {
      setSpotCreatable(true)
    }

    window.api.onImageOpened(handleImageOpened)
    window.api.onImageRemoved(handleImageRemoved)
    window.api.onCreateSpotTriggered(handleCreateSpotTriggered)

    // Remova os ouvintes quando o componente for desmontado
    return () => {
      window.api.removeAllListeners()
    }
  }, [])

  const handleImageClick = (e: MouseEvent<HTMLImageElement>) => {
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

  return (
    <div className="components-screen">
      <Navbar imageState={image} spotCreatable={spotCreatable} />
      <div className="relative w-1/2 h-1/2 p-2 overflow-hidden">
        {image ? (
          <img
            className={
              'object-cover w-full h-full border-2 border-white/30' +
              (spotCreatable ? ' cursor-crosshair' : '')
            }
            src={`data:image/jpeg;base64, ${image}`}
            alt="Imagem"
            onClick={handleImageClick}
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-2xl font-light text-white bg-slate-500 border-2 border-white/10">
            No image selected
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
    </div>
  )
}

export default DashboardPage
