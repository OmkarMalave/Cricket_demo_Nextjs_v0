'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Trophy, Users, Calendar, Home } from "lucide-react"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-green-100">
      <header className="bg-green-700 text-white shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Trophy className="h-8 w-8 mr-2" />
                <span className="text-2xl font-bold">CricketPro</span>
              </Link>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <NavLink href="/" icon={<Home className="h-5 w-5" />} active={pathname === '/'}>
                  Home
                </NavLink>
                <NavLink href="/matches" icon={<Calendar className="h-5 w-5" />} active={pathname === '/matches'}>
                  Matches
                </NavLink>
                <NavLink href="/teams" icon={<Users className="h-5 w-5" />} active={pathname === '/teams'}>
                  Teams
                </NavLink>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/signup"> <Button variant="outline" className="mr-2 bg-green-600 text-white hover:bg-green-700">Log in</Button></Link> 
             <Link href="/login"><Button className="bg-yellow-500 text-green-800 hover:bg-yellow-600">Sign up</Button></Link> 
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      <footer className="bg-green-800 text-white mt-auto">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm">
            © 2023 CricketPro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

function NavLink({ href, icon, active, children }: { href: string; icon: React.ReactNode; active: boolean; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className={`${
        active ? 'border-yellow-500 text-yellow-500' : 'border-transparent text-green-100 hover:border-green-300 hover:text-green-300'
      } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
    >
      {icon}
      <span className="ml-2">{children}</span>
    </Link>
  )
}