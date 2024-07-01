import React from 'react'

const TablaClientAdmin = ({ name, col1, col2, col3, col4, data }) => {


  return (
    <div className='p-5'>
    <table className='w-full text-left p-5 text-black bg-white shadow-md rounded-lg overflow-hidden'>
      <thead className='bg-gray-200'>
        <tr>
          <th className='py-3 px-4 border-b'>{name}</th>
          <th className='py-3 px-4 border-b'>{col1}</th>
          <th className='py-3 px-4 border-b'>{col2}</th>
          <th className='py-3 px-4 border-b'>{col3}</th>
          <th className='py-3  border-b'>{col4}</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className='hover:bg-gray-100'>
            <td className='py-3 px-4 border-b'>
              {item.name}
            </td>
            <td className='py-3 px-4 border-b'>
              {item.lastName}
            </td>
            <td className='py-3  border-b'>
              {item.address}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  );
};

export default TablaClientAdmin;
