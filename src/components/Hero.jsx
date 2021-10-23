import React from 'react'
import ConnectWallet from "./ConnectWallet"
import { Discord, Twitter } from "./AssetsComponent";
import HeroImageAnimation from "./HeroImageAnimation";

const Hero = () => {
  return (
    <div className="h-screen p-6 md:p-12 overflow-hidden">
      <div className="flex items-center justify-end space-x-6 md:space-x-10">
        <Twitter />
        <Discord />
        <ConnectWallet />
      </div>

      <div className="max-w-6xl mx-auto text-center mt-12 py-16 space-y-8 lg:px-9 ">
        <h1 className="text-4xl lg:text-6xl font-bold leading-relaxed">
          Meet the Piggies!
        </h1>
        <p className="text-lg lg:text-4xl leading-normal">
          10,000 cute & cruel piggies living on the Solana lands. Each of them are randomly generated with more than 90+ hand drawn traits!
        </p>

        <button type="button" className="bg-white hover:bg-blue-400 hover:text-white text-3xl leading-9 font-bold text-black rounded-2xl p-6 md:px-8">
          Get Your Piggy
        </button>
      </div>

      <HeroImageAnimation />
    </div>
  )
}

export default Hero
