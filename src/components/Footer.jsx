import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#502a2e] h-[400px] p-5 flex flex-col justify-between">
      <div className="flex flex-row justify-between items-center mb-5">
        <h2 className="text-3xl text-white">Wineder &copy;</h2>
        <div className="flex flex-row gap-4">
          <a href=""><img src="./assets/github.png" className="w-[50px]" alt="github" /></a>
          <a href=""><img src="./assets/discord.png" className="w-[50px]" alt="discord" /></a>
          <a href=""><img src="./assets/whatsapp.png" className="w-[50px]" alt="whatsapp" /></a>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-white">Join our community and be part of the Wineder family!</p>
        <form className="flex flex-col gap-2" action="">
          <input type="email" placeholder="Enter your email" className="p-2 border border-white rounded-lg" />
          <button className="bg-[#73383E] px-4 py-2 rounded-lg text-white">Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Footer
