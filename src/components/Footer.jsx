import React from 'react'
import AnchorSocialFooter from './AnchorSocialFooter'

const Footer = () => {
  return (
    <div className="bg-[#8f5459] h-[400px] p-5 flex flex-col justify-between ">
      <div className="flex flex-col gap-3 justify-between items-center  md:flex-row lg:flex-row">
        <h2 className="text-3xl text-white">Wineder &copy;</h2>
      <a href="#top" className='animate-bounce'><img src="./assets/uvasBlanco.png" alt="" className='] w-[50px] md:w-[60px]' /></a>  
        <div className="flex flex-row gap-4 ">
          <AnchorSocialFooter href="https://github.com/Agustin-del/front-wineder.git" src="/assets/githubBlanco.png" alt="github" />
          <AnchorSocialFooter href="https://discord.com" src="/assets/discordBlanco.png" alt="discord" />
          <AnchorSocialFooter href="https://wa.me/5491165353547" src="/assets/whatsappBlanco.png" alt="whatsapp" />

        </div>
      </div>

      
    </div>
  )
}

export default Footer
