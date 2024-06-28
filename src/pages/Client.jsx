import React from 'react'
import TextWineDetails from '../components/TextWineDetails'
import CartsWines from '../components/CartsWines'

const Client = () => {
  return (
    <div>

      <h2 className='text-3xl text-center lg:text-5xl lg:mt-5'><strong>Welcome to the Client Page </strong></h2>
      {/*        
        <section className="my-5">
                    <div className="flex justify-center">
                        <video className="w-[90%] max-w-xl" autoPlay loop muted>
                            <source src="./assets/videoSirviendoCopa.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </section> */}

      <h3 className='text-2xl text-center pt-5 lg:text-3xl '>Compras</h3>
      <section className='flex flex-wrap justify-center gap-5 my-5 relative z-10'>
        <CartsWines bgColor="RED" image="./assets/vino-tinto.png" name="Wine name" price="100.00" />
        <CartsWines bgColor="RED" image="./assets/vino-tinto.png" name="Wine name" price="100.00" />
        <CartsWines bgColor="RED" image="./assets/vino-tinto.png" name="Wine name" price="100.00" />
        <CartsWines bgColor="RED" image="./assets/vino-tinto.png" name="Wine name" price="100.00" />

      </section>


{/* 
      <section className="my-5">
        <div className="flex justify-center">
          <video className="w-[90%] max-w-xl" autoPlay loop muted>
            <source src="./assets/videoClientPromo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section> */}

   
      <img className=' w-[90%] flex items-center mx-auto mb-5 lg:w-[70%]  shadow-[0_3px_10px_rgb(0,0,0,0.2)] ' src="./assets/imgClient.jpg" alt="" />

 






    </div>
  )
}

export default Client