import React from 'react'
import TextWineDetails from '../components/TextWineDetails'
import CartsWines from '../components/CartsWines'

const Client = () => {
  return (
    <div>

        <h2 className='text-3xl text-center'>Welcome to the Client Page</h2>
{/*        
        <section className="my-5">
                    <div className="flex justify-center">
                        <video className="w-[90%] max-w-xl" autoPlay loop muted>
                            <source src="./assets/videoSirviendoCopa.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </section> */}
       
        <h3  className='text-2xl text-center pt-5 '>Compras</h3>
       <section className='flex flex-wrap justify-center gap-5 my-5 relative z-10'>
        <CartsWines bgColor="RED" image="./assets/vino-tinto.png" name="Wine name" price="100.00" />
        <CartsWines bgColor="RED" image="./assets/vino-tinto.png" name="Wine name" price="100.00" />
        <CartsWines bgColor="RED" image="./assets/vino-tinto.png" name="Wine name" price="100.00" />
        <CartsWines bgColor="RED" image="./assets/vino-tinto.png" name="Wine name" price="100.00" />

       </section>


       
       <section className="my-5">
                    <div className="flex justify-center">
                        <video className="w-[90%] max-w-xl" autoPlay loop muted>
                            <source src="./assets/videoClientPromo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </section> 


        
        
        

    </div>
  )
}

export default Client