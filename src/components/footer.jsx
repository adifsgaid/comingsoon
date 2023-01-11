import React from 'react'

import { SocialLinks } from './social-links'

export function Footer() {
  return (
    <footer className="bg-primary-400 text-sm leading-5 tracking-normal text-white lg:bg-transparent lg:text-gray-400">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative flex flex-wrap py-10 lg:justify-between">
          <SocialLinks className="mb-6 inline-flex w-full flex-none justify-center lg:flex lg:justify-end" />
          <div className="mb-6 inline-flex w-full flex-none justify-center lg:w-1/2 lg:justify-start">
            &copy; 2023 ModusLab, all rights reserved
          </div>
        </div>
      </div>
    </footer>
  )
}
