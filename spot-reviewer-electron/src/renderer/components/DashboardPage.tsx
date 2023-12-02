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
    console.log(`Clique na posição: x=${x}, y=${y}`)
  }

  return (
    <div className="components-screen">
      <Navbar imageState={image} />
      <div className="relative w-1/2 h-1/2 p-2 bg-red-400 overflow-hidden">
        {image && (
          <img
            className="object-cover w-full h-full"
            src={`data:image/jpeg;base64, ${image}`}
            alt="Imagem"
            onClick={handleImageClick}
          />
        )}
      </div>
    </div>
  )
}

export default DashboardPage
