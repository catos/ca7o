import SigninButton from "@/components/sign-in-button"
import React, { ReactNode } from "react"

import Link from "@/components/ui/link"
import Navbar from "@/components/ui/navbar"

export default function Nav() {
  return (
    <Navbar>
      <div className="flex items-center flex-shrink-0 text-white mr-4">
        <Link href="/">
          <svg
            className="h-8 w-8 mr-2"
            width="100%"
            height="100%"
            viewBox="0 0 81 81"
            version="1.1"
          >
            <g transform="matrix(0.449977,-0.449977,0.449977,0.449977,-2128.39,1925.9)">
              <g transform="matrix(1,0,0,1,3940,-1120.56)">
                <path
                  d="M520,1390.57L560,1390.57L560,1400.57L530,1400.57L530,1420.57L560,1420.57L560,1430.57L520,1430.57L520,1390.57Z"
                  className="fill-slate-400"
                />
              </g>
              <g transform="matrix(1,0,0,1,3930,-1120.56)">
                <path
                  d="M620,1390.57L620,1430.57L610,1430.57L610,1400.57L590,1400.57L590,1430.57L580,1430.57L580,1390.57L620,1390.57Z"
                  className="fill-slate-400"
                />
              </g>
              <g transform="matrix(1,0,0,1,3940,-1120.56)">
                <path
                  className="fill-slate-600"
                  d="M520,1440.57L560,1440.57L560,1480.57L550,1480.57L550,1450.57L520,1450.57L520,1440.57Z"
                />
              </g>
              <g transform="matrix(1,0,0,1,3930,-1120.56)">
                <path
                  d="M590,1470.57L610,1470.57L610,1450.57L590,1450.57L590,1470.57ZM580,1440.57L620,1440.57L620,1480.57L580,1480.57L580,1440.57Z"
                  className="fill-slate-400"
                />
              </g>
            </g>
          </svg>
        </Link>
      </div>

      <div className="flex-grow flex items-center">
        <div className="text-base lg:flex-grow">
          <NavLink href="/recipes">Recipes</NavLink>
          <NavLink href="/posts">Posts</NavLink>
        </div>

        <div className="ml-auto">
          <SigninButton />
        </div>
      </div>
    </Navbar>
  )
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      className="no-underline font-semibold mr-2 hover:bg-primary-200 px-2 py-1 rounded inline-block"
      href={href}
    >
      {children}
    </Link>
  )
}
