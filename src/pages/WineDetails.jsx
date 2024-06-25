import React from 'react'
import CardWineDetails from '../components/CardWineDetails'
import TextWineDetails from '../components/TextWineDetails'

const WineDetails = () => {
    return (
        <div className='flex flex-col items-center gap-4 my-5' >
            <h2 className='text-4xl text-center'>Wine Details</h2>

            <h3>Red wine name</h3> 

            {/* Card que contiene una imganen y precio del vino mas el boton de agregar al carrito */}
            <CardWineDetails />

             {/* Componente que contiene los detalles descriptivo del vino */}
            <TextWineDetails title="Wine Region" text="Hailing from the sun-drenched vineyards of Napa Valley, known for producing bold and expressive wines." />
            <TextWineDetails title="Wine Style" text="Rich and full-bodied, showcasing complex fruit flavors and a velvety texture." />
            <TextWineDetails title="Wine Origin" text="Sourced from hand-picked grapes grown in the high-altitude vineyards of the Andes Mountains, imparting unique terroir characteristics." />
            <TextWineDetails title="Wine Color" text="Deep ruby red with hints of garnet, reflecting its aging in oak barrels." />
            <TextWineDetails title="Wine Type" text="Red, dry, and rich with flavors of blackberry, blackcurrant, and white pepper." />
        </div>
    )
}

export default WineDetails