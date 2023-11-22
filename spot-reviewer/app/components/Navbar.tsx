import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const NavItems = [
  {
    name: 'DOT',
    path: '/',
  },
  {
    name: 'Objectives',
    path: '/',
  },
  {
    name: 'Prototype',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
]

const Navbar = () => {
  return (
    <nav className="h-[70px] w-screen bg-slate-900 sticky z-10 top-0 border-b border-white flex flex-col justify-center px-4">
      <ul className="flex justify-between">
        {NavItems.map((item) => (
          <Link href={item.path} key={item.name}>
            {item.name}
          </Link>
        ))}

        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </ul>
    </nav>
  )
}

export default Navbar
