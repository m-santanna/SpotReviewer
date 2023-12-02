import React from 'react'

const Navbar = ({ imageState }: { imageState: string }) => {
  //
  // Please note that everytime you add/edit/remove any of the items,
  // you must also update their case handling in the navbar-message channel in src/main/main.ts
  //
  const items = [
    {
      name: 'Open Image',
      id: 'openImageNavbarButton',
      message: 'open-image',
      disabled: false,
    },
    {
      name: 'Remove Image',
      id: 'removeImageNavbarButton',
      message: 'remove-image',
      disabled: imageState === null,
    },
    {
      name: 'Create Spot',
      id: 'createSpotNavbarButton',
      message: 'create-spot',
      disabled: imageState === null,
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
