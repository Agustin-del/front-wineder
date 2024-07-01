import React from "react";
import CardHomeWine from "../components/CardHomeWine";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <main className="">
      {loading ? (
        <div className="flex items-center  justify-center w-full h-screen bg-[#232323]">
          <img className="w-[300px]" src="./assets/copa.gif" alt="" />
        </div>
      ) : (
        <div className="bg-[#F0E9E1] ">
          
          <div
            className="bg-cover object-cover bg-center pt-16 h-[450px] bg-no-repeat bg-fixed "
            style={{ backgroundImage: `url('./assets/img-home.jpg')` }}
          >
            <div className="p-5 bg-black bg-opacity-70 pt-5 flex items-center flex-col md:rounded-lg lg:w-[60%] lg:ml-[20%] ">
              <h1 className="text-3xl text-white lg:text-5xl my-10">
                Welcome to Wineder!
              </h1>
              <h2 className="text-xl  text-white lg:text-3xl italic lg:pb-5">
                Where every sip tells a story
              </h2>
              <h3 className="text-white lg:text-xl mt-5">
                At Wineder, we believe that wine is more than just a drink: it’s
                an experience, a tradition, and a celebration of life. We are
                dedicated to offering you a carefully curated selection of the
                finest wines from the most prestigious wineries, both national
                and international.
              </h3>
            </div>
          </div>

          <div className="w-[90%] mx-auto flex justify-center bg-slate-400 h-2 m-10 my-5"></div>

          <div className="flex flex-col  md:flex-row md:justify-around">
            <section className="md:pl-9 justify-center">
              <video
                className="relative h-full w-full z-10 bg-black rounded-md"
                autoPlay
                loop
                muted
              >
                <source src="./assets/videoClientPromo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </section>



            <section className="m-5 lg:w-[80%] lg:justify-center lg:pl-[10%] p-9">
              <h3 className="text-2xl italic text-[#5E2A30] ">Our Selection</h3>
              <p className="pb-5  ">
                Discover our wide range of red, white, rosé, and sparkling
                wines, carefully chosen to satisfy the most discerning palates.
                From classics to the latest innovations in winemaking, here you
                will find the perfect bottle for every occasion.
              </p>

              <h3 className="text-2xl italic text-[#5E2A30] ">Our Promise</h3>
              <p className="pb-5  ">
                Quality: Every wine in our collection has been selected for its
                exceptional quality and taste. Passion: We are passionate about
                the world of wine and want to share that passion with you
                through every bottle. Exclusivity: We work directly with
                wineries and producers to offer you exclusive wines that you
                won’t find anywhere else.
              </p>

              <h3 className="text-2xl italic text-[#5E2A30] ">
                Join Our Community
              </h3>
              <p>
                We don’t just sell wine; we invite you to be part of our
                community of wine lovers. Subscribe to our newsletter to receive
                the latest news, personalized recommendations, and access to
                exclusive events.
              </p>
              <p className="pb-5 ">
                Raise your glass and celebrate life with Wineder!
              </p>
            </section>
          </div>

          <div className="w-[90%] mx-auto flex justify-center bg-slate-400 h-2 my-5"></div>

          <h3 className="text-3xl italic text-center text-[#5E2A30] ">
            Our Types of Wines
          </h3>

          <section className="flex flex-col md:flex-row md:flex-wrap justify-around items-center pb-8 pt-8 gap-4 pl-8 pr-8">
            <Link to={"/winesType/RED"}>
              <CardHomeWine
                bgColor="bg-[#8f585d]"
                name="Red Wine"
                image="./assets/tinto.png"
              />
            </Link>
            <Link to={"/winesType/WHITE"}>
              <CardHomeWine
                bgColor="bg-[#D4B891]"
                name="White Wine"
                image="./assets/blanco.png"
              />{" "}
            </Link>
            <Link to={"/winesType/SPARKLING"}>
              <CardHomeWine
                bgColor="bg-[#a39d92] "
                name="Sparkling Wine"
                image="./assets/espumante.png"
              />
            </Link>
            <Link to={"/winesType/PINK"}>
              <CardHomeWine
                bgColor="bg-[#af9fa0]"
                name="Rose Wine"
                image="./assets/rosado.png"
              />
            </Link>
          </section>
        </div>
      )}
    </main>
  );
};

export default Home;
