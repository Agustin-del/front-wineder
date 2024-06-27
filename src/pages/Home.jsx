import React from 'react'
import CardHomeWine from '../components/CardHomeWine'
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <>
            <div className="bg-[#F0E9E1]">

                <div className="bg-cover object-cover bg-center  h-[300px] bg-no-repeat bg-fixed " style={{ backgroundImage: `url('./assets/img-home.jpg')` }}>
                    <div className="p-5 bg-black bg-opacity-50 flex items-center flex-col">
                        <h1 className="text-3xl text-white">Welcome to Wineder!</h1>
                        <h2 className="text-xl pt-5 text-white">Where every sip tells a story</h2>
                        <h3 className="text-white">At Wineder, we believe that wine is more than just a drink: it’s an experience, a tradition, and a celebration of life. We are dedicated to offering you a carefully curated selection of the finest wines from the most prestigious wineries, both national and international.</h3>
                    </div>
                </div>

                <div className="w-[90%] mx-auto flex justify-center bg-slate-400 h-2 my-5"></div>

                <section className="my-5">
                    <div className="flex justify-center">
                        <video className="w-[90%] max-w-xl" autoPlay loop muted>
                            <source src="./assets/videoSirviendoCopa.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </section>


                <section className="m-5 ">
                    <h3 className='text-3xl'>Our Selection</h3>
                    <p>Discover our wide range of red, white, rosé, and sparkling wines, carefully chosen to satisfy the most discerning palates. From classics to the latest innovations in winemaking, here you will find the perfect bottle for every occasion.</p>

                    <h3 className='text-3xl'>Our Promise</h3>
                    <p>Quality: Every wine in our collection has been selected for its exceptional quality and taste.
                        Passion: We are passionate about the world of wine and want to share that passion with you through every bottle.
                        Exclusivity: We work directly with wineries and producers to offer you exclusive wines that you won’t find anywhere else.</p>

                    <h3 className='text-3xl'>Join Our Community</h3>
                    <p>We don’t just sell wine; we invite you to be part of our community of wine lovers. Subscribe to our newsletter to receive the latest news, personalized recommendations, and access to exclusive events.</p>
                    <p>Raise your glass and celebrate life with Wineder!</p>
                </section>

                <div>


                </div>

                <div className="w-[90%] mx-auto flex justify-center bg-slate-400 h-2 my-5"></div>

                <section className="flex flex-col justify-around items-center my-5 gap-5">
                    <Link to={'/winesType/RED'}><CardHomeWine bgColor="bg-[#70383F]" name="Red wine" image="./assets/tinto.png" /></Link>
                    <Link to={'/winesType/WHITE'} ><CardHomeWine bgColor="bg-[#D4B891]" name="White wine" image="./assets/blanco.png" /> </Link>
                    <Link to={'/winesType/SPARKLING'} ><CardHomeWine bgColor="bg-[#D0C9BD]" name="Sparkling wine" image="./assets/espumante.png" /></Link>
                    <Link to={'/winesType/PINK'}><CardHomeWine bgColor="bg-[#DCC8C9]" name="Rose wine" image="./assets/rosado.png" /></Link>
                </section>

                <div className="w-[90%] mx-auto flex justify-center bg-slate-400 h-2 my-5"></div>



            </div>

        </>
    )
}

export default Home