import React from 'react'

const WineDetails = () => {
    return (
        <div className='flex flex-col items-center gap-4 my-5' >
            <h2 className='text-4xl text-center'>Wine Details</h2>

            <h3>Red wine name</h3>
            <div className='flex flex-row items-center border-2 rounded-lg w-full bg-[#E5D1D2]'>

                <img className='w-[200px]' src="./assets/vino-tinto.png" alt="" />
                <div className='flex flex-col gap-2'>
                    <p>Description</p>

                    <div className='flex flex-col p-4 rounded-lg justify-between bg-slate-100 w-[200px]'>
                        <p className='text-xl mb-3' >Price</p>
                        <button className='bg-[#5e2a30] px-4 py-2 rounded-lg text-white'>Add to Cart</button>
                    </div>
                </div>
            </div>
            <section className='w-[80%] '>
                <h3 className="text-xl mb-3 ">Wine Style</h3>
                <p className="mb-3">Rich and full-bodied, showcasing complex fruit flavors and a velvety texture.</p>

                <h3 className="text-xl mb-3">Wine Region</h3>
                <p className="mb-3">Hailing from the sun-drenched vineyards of Napa Valley, known for producing bold and expressive wines.</p>

                <h3 className="text-xl mb-3">Wine Origin</h3>
                <p className="mb-3">Sourced from hand-picked grapes grown in the high-altitude vineyards of the Andes Mountains, imparting unique terroir characteristics.</p>

                <h3 className="text-xl mb-3">Wine Color</h3>
                <p className="mb-3">Deep ruby red with hints of garnet, reflecting its aging in oak barrels.</p>

                <h3 className="text-xl mb-3">Wine Flavor</h3>
                <p className="mb-3">Notes of ripe blackberry, dark chocolate, and a hint of vanilla, balanced by subtle oak undertones.</p>

                <h3 className="text-xl mb-3">Wine Tannins</h3>
                <p className="mb-3">Smooth and integrated tannins, providing structure without overwhelming the palate.</p>

                <h3 className="text-xl mb-3">Wine Alcohol Content</h3>
                <p className="mb-3">Moderate alcohol content of 13.5%, harmoniously supporting the wine's richness and complexity.</p>
            </section>


        </div>
    )
}

export default WineDetails