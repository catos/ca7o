import SigninButton from "@/components/sign-in-button"

import Link from "@/components/ui/link"
import Navbar from "@/components/ui/navbar"

export default function Nav() {
  return (
    <Navbar>
      <div className="flex items-center flex-shrink-0 text-white mr-6">
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
        <div className="text-sm lg:flex-grow">
          <Link className="no-underline mr-2" href="/recipes">
            Recipes
          </Link>
          <Link className="no-underline" href="/posts">
            Posts
          </Link>
        </div>

        <div className="ml-auto">
          <SigninButton />
        </div>
      </div>
    </Navbar>
  )
}
