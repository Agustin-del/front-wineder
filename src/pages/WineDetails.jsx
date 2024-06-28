import React, { useEffect, useState } from 'react'
import CardWineDetails from '../components/CardWineDetails'
import TextWineDetails from '../components/TextWineDetails'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import StarRating from '../components/StarRating'
import Comment from '../components/Comment'
import { useSelector } from 'react-redux'

const WineDetails = () => {
    const {id} = useParams()
    const [reviews, setReviews] = useState([])
    const [averageRating, setAverageRating] = useState(0)
    const [rating, setRating] = useState(0)
    const token = useSelector(store => store.authReducer.token)

    const formatDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0
        const day = String(date.getDate()).padStart(2, '0');
    
        return `${year}-${month}-${day}`;
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating)
    }

    const handleSubmit = async (comment) => {
        const requestBody = {
            comment: comment,
            rating: rating,
            reviewDate:formatDate(),
            idProd:id
        }
        try {
            const response = await axios.post("http://localhost:8080/api/reviews/create", requestBody, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (e) {
            console.error(e)
        } finally {
            setRating(0)
        }
    }

    const getReviews = async() => {
        try {
            const response = await axios.get("http://localhost:8080/api/reviews/product/" + id)
            setReviews(response.data)
        } catch (e) {
            console.error(e)
        }
    }
    
    useEffect(() => {
        getReviews()
    }, [])

    useEffect(() => {
        const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0)
        const averageRating = totalRating / reviews.length
        setAverageRating(averageRating)
    }, [reviews])

    return (
        <div className='flex flex-col items-center gap-4 my-5 md:justify-center' >
            <h2 className='text-4xl text-center'>Wine Details</h2>

            <h3>Red wine name</h3> 

            {/* Card que contiene una imganen y precio del vino mas el boton de agregar al carrito */}
            <CardWineDetails rating={averageRating}/>

             {/* Componente que contiene los detalles descriptivo del vino */}
            <TextWineDetails title="Wine Region" text="Hailing from the sun-drenched vineyards of Napa Valley, known for producing bold and expressive wines." />
            <TextWineDetails title="Wine Style" text="Rich and full-bodied, showcasing complex fruit flavors and a velvety texture." />
            <TextWineDetails title="Wine Origin" text="Sourced from hand-picked grapes grown in the high-altitude vineyards of the Andes Mountains, imparting unique terroir characteristics." />
            <TextWineDetails title="Wine Color" text="Deep ruby red with hints of garnet, reflecting its aging in oak barrels." />
            <TextWineDetails title="Wine Type" text="Red, dry, and rich with flavors of blackberry, blackcurrant, and white pepper." />

            {reviews.map(review => {
                return  <article className="p-4">
                <div class="flex items-center mb-4">
                    <div class="font-medium dark:text-white">
                        <p>{review.reviewer}</p>
                    </div>
                </div>
                <div class="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                {[...Array(5)].map((_, index) => (    
                    <svg key={index} className={`w-4 h-4 ${index < review.rating ? 'text-yellow-300' : 'text-gray-300'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                ))}
                </div>
                <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in {new Date(review.reviewDate).toLocaleDateString()}</p></footer>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">{review.comment}</p>
                </article>
            })}
            <div className="flex-col flex">
                <div className="flex gap-4 p-4 ">
                    <h2 className="text-xl font-bold mb-4">Leave a comment</h2>
                    <StarRating onRatingChange={handleRatingChange}/>
                </div>
                <Comment onSubmit={handleSubmit}/>
            </div>
        </div>
    )
}

export default WineDetails