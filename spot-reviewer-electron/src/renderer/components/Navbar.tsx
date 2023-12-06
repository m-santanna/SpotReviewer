import React from 'react'

const Navbar = ({
  imageState,
  spotCreatable,
  spotPosition,
  formState,
}: {
  imageState: string
  spotCreatable: boolean
  spotPosition: { x: number | null; y: number | null }
  formState: string
}) => {
  //
  // Please note that everytime you add/edit/remove any of the items,
  // you must also update their case handling in the navbar-message channel in src/main/main.ts
  //
  const items = [
    {
      name: 'Select User',
      id: 'selectUserNavbarButton',
      message: 'select-user',
      disabled: false,
    },
    {
      name: 'Create User',
      id: 'createUserNavbarButton',
      message: 'create-user',
      disabled:
        formState === 'create-user' || spotCreatable || imageState !== null,
    },
    {
      name: 'Open Mapper',
      id: 'openMapperNavbarButton',
      message: 'open-mapper',
      disabled: false,
    },
    {
      name: 'Close Mapper',
      id: 'closeMapperNavbarButton',
      message: 'close-mapper',
      disabled: imageState === null,
    },
    {
      name: 'Create Spot',
      id: 'createSpotNavbarButton',
      message: 'create-spot',
      disabled: spotCreatable || imageState === null,
    },
    {
      name: 'Save New Spot',
      id: 'saveSpotNavbarButton',
      message: 'save-new-spot-position',
      disabled: spotPosition.x === null || spotPosition.y === null,
    },
  ]
  return (
    <nav className="sticky flex items-center justify-between w-full h-12 bg-slate-800 text-white p-4 border-b border-black z-10">
      <div>
        {items.map((item) => (
          <button
            className="p-2 font-light hover:text-white/60 disabled:text-white/60"
            key={item.id}
            id={item.id}
            onClick={() => window.api.navbarMessage(item.message)}
            disabled={item.disabled}
          >
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
