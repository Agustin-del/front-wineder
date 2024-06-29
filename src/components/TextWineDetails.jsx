import React from 'react'


// Componente que contiene los detalles descriptivo del vino
const TextWineDetails = (props) => {

    let message = null
    const generateVarietalMessage = (varietal) => {
        switch(varietal) {
            case 'CABERNET_SAUVIGNON':
                return 'It is an intense wine with notes of blackcurrant, green pepper, and cedar.';
            case 'CABERNET_FRANC':
                return 'It is an elegant wine with aromas of green pepper, herbs, and red fruits.';
            case 'BONARDA':
                return 'It is a smooth and fruity wine, with aromas of cherry and violet.';
            case 'MALBEC':
                return 'It is a robust wine with notes of plum, blackberry, and spices.';
            case 'MERLOT':
                return 'It is a soft and velvety wine with flavors of plums, black cherries, and herbs.';
            case 'PINOT_NOIR':
                return 'It is a delicate wine with aromas of red berries, roses, and earthy undertones.';
            case 'SYRAH':
                return 'It is a bold wine with flavors of dark fruits, spices, and a peppery finish.';
            case 'TEMPRANILLO':
                return 'It is a rich and fruity wine with notes of berries, vanilla, and leather.';
            case 'CHARDONNAY':
                return 'It is a full-bodied wine with flavors of citrus, tropical fruits, and oak.';
            case 'CHENIN':
                return 'It is a versatile wine with aromas of apple, pear, and honey.';
            case 'SAUVIGNON_BLANC':
                return 'It is a crisp wine with aromas of gooseberry, lime, and herbs.';
            case 'SEMILLON':
                return 'It is a rich wine with flavors of fig, honey, and toasted nuts.';
            case 'TORRONTES':
                return 'It is a floral wine with aromas of roses, citrus, and lychee.';
            case 'VIOGNER':
                return 'It is an aromatic wine with notes of peach, apricot, and floral undertones.';
            case 'PROSECCO':
                return 'It is a sparkling wine with flavors of green apple, pear, and white flowers.';
            case 'BRUT_NATURE':
                return 'It is a bone-dry sparkling wine with crisp acidity and no added sugar.';
            case 'BRUT':
                return 'It is a dry sparkling wine with balanced acidity and flavors of apple and bread crust.';
            case 'EXTRA_BRUT':
                return 'It is an extra dry sparkling wine with a touch of sweetness and crisp acidity.';
            default:
                return 'It is a wine with unique characteristics.';
        }
    };
      
    return (
        <section className='w-[80%] '>
            <h3 className="text-xl mb-3 ">{props.title}</h3>
            <p className="mb-3">{props.text}</p>
        </section>
    )
}

export default TextWineDetails