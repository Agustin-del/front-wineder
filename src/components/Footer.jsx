import React from 'react'
import AnchorSocialFooter from './AnchorSocialFooter'

const Footer = () => {
  return (
    <div className="bg-[#723a3f] h-[400px] p-5 flex flex-col justify-between ">
      <div className="flex flex-col gap-3 justify-between items-center  md:flex-row lg:flex-row">
        <h2 className="text-3xl text-white">Wineder &copy;</h2>
        <img src="./assets/iconsUva.png" alt="" className='lg:w-[60px] w-[30px] md:w-[50px]' />
        <div className="flex flex-row gap-4 ">
          <AnchorSocialFooter href="https://github.com/Agustin-del/front-wineder.git" src="./assets/github.png" alt="github" />
          <AnchorSocialFooter href="https://discord.com" src="./assets/discord.png" alt="discord" />
          <AnchorSocialFooter href="https://wa.me/5491165353547" src="./assets/whatsapp.png" alt="whatsapp" />
         
        </div>
      </div>
      
      {/* <div className="flex flex-col gap-3">
        <p className="text-white">Join our community and be part of the Wineder family!</p>
        <form className="flex flex-col gap-2" action="">
          <input type="email" placeholder="Enter your email" className="p-2 border border-white rounded-lg" />
          <button className="bg-[#73383E] px-4 py-2 rounded-lg text-white">Subscribe</button>
        </form>
      </div> */}
    </div>
  )
}

export default Footer
