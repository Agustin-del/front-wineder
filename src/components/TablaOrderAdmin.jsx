import React from 'react'

const TablaOrderAdmin = ({ name, col1, col2, col3, col4, data ,img, id,active}) => {
  const formatField = (field, value) => {
    if (field.toLowerCase().includes('price') && typeof value === 'number') {
        return formatter.format(value);
    }
    return value;
};

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

  return (
    <div className='p-5'>
    <table className='w-full text-left p-5 bg-white shadow-md rounded-lg overflow-hidden text-black'>
      <thead className='bg-gray-200'>
        <tr>
          <th className='py-3 px-4 border-b'>{img}</th>
          <th className='py-3 px-4 border-b'>{name}</th>
          <th className='py-3 px-4 border-b text-right'>{id}</th>
          <th className='py-3 px-4 border-b'>{col1}</th>
          <th className='py-3 px-4 border-b text-right'>{col2}</th>
          <th className='py-3 px-4 border-b text-right'>{col3}</th>
          <th className='py-3 px-4 border-b text-right'>{col4}</th>
          <th className='py-3 px-4 border-b'>{active}</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className='hover:bg-gray-100'>
            <td className='py-3 px-4 border-b'>
              <img src={item.image ? item.image : '/assets/vinoGenerico.png'} alt={item.name} className="w-10 h-10" />
            </td>
            <td className='py-3 px-4 border-b'>{formatField('name', item.productName)}</td>
            <td className='py-3 px-4 border-b text-right'>{formatField('id', item.id)}</td>
            <td className='py-3 px-4 border-b'>{formatField('provider', item.provider)}</td>
            <td className='py-3 px-4 border-b text-right'>{formatField('price', item.price)}</td>
            <td className='py-3 px-4 border-b text-right'>{formatField('stock', item.stock)}</td>
            <td className='py-3 px-4 border-b text-right'>{formatField('quantity', item.quantity)}</td>
            <td className='py-3 px-4 border-b'>{item.active ? 'active' : 'not active'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  )
}

export default TablaOrderAdmin

