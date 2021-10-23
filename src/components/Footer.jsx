import React from 'react'
import { DiscordFooter, Twitter } from "./AssetsComponent"

const Footer = () => {
  return (
    <footer className="flex items-center justify-center space-x-6 py-16 lg:py-24">
      <a href="#">
        <Twitter />
      </a>
      <a href="#">
        <DiscordFooter />
      </a>
    </footer>
  )
}

export default Footer
