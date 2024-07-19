import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from '../utils/config'
import { useSelector } from 'react-redux';

const TablaReviewsAdmin = () => {
    
    const [reviews, setReviews] = useState(null);
    const token = useSelector(store => store.authReducer.token);

  
    useEffect(() => {
      getReviews();
    }, [])

    async function getReviews() {
      const response = await axios.get(`${API_BASE_URL}/api/reviews/admin/all`, {
        headers: {
            Authorization:`Bearer ${token}`
        }
      });
      setReviews(response.data);
      console.log(response)
    }

    async function deleteComment(id) {
        await axios.delete(`${API_BASE_URL}/api/reviews/delete/${id}`, {
            headers: {
                Authorization:`Bearer ${token}`
            }
        })
        getReviews();
    }
  return (
    <div className='p-5'>
    <table className='w-full text-left p-5 text-black bg-white shadow-md rounded-lg overflow-hidden'>
      <thead className='bg-gray-200'>
        <tr>
          <th className='py-3 px-4 border-b'>Comment</th>
          <th className='py-3 px-4 border-b'>Product</th>
          <th className='py-3 px-4 border-b'>User</th>
          <th className='py-3 px-4 border-b'></th>
        </tr>
      </thead>
      <tbody>
          {reviews && reviews.map (review => {
            return (
                <tr key={review.id}> 
                     <td className='py-3 px-4 border-b'>{review.comment}</td>
                    <td className='py-3 px-4 border-b'></td>
                    <td className='py-3 px-4 border-b'>{review.reviewerEmail}</td>
                    <td className='py-3 px-4 border-b'><button onClick={() => deleteComment(review.id)} className="p-2">
                                            <img
                                                className="w-8"
                                                src="/assets/deleteRed.png"
                                                alt="cart icon"
                                            />
                                        </button>
                                    </td> 
                </tr>
            )
          })}
      </tbody>
    </table>
  </div>
  
  );
};

export default TablaReviewsAdmin;
