import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

const NavItems = [
  {
    name: 'Vision',
    path: '/#vision',
  },
  {
    name: 'Prototype',
    path: '/#prototype',
  },
  {
    name: 'Background',
    path: '/#background',
  },
]

const Navbar = () => {
  return (
    <nav className="h-[70px] w-screen bg-slate-900 sticky z-10 top-0 border-b border-white flex flex-col justify-center px-4">
      <ul className="flex justify-between">
        <Link href="/" className="font-semibold text-2xl">
          DOT
        </Link>
        <div>
          {NavItems.map((item) => (
            <Link href={item.path} key={item.name} className="px-4">
              {item.name}
            </Link>
          ))}
        </div>

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
