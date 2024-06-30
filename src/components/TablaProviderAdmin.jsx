import React from 'react';

const TablaProviderAdmin = ({ name, col1, col2, data }) => {
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
            <th className='py-3 px-4 border-b'>{name}</th>
            <th className='py-3 px-4 border-b'>{col1}</th>
            <th className='py-3 px-4 border-b'>{col2}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className='hover:bg-gray-100'>
              <td className='py-3 px-4 border-b'>{formatField('Company Name', item.companyName)}</td>
              <td className='py-3 px-4 border-b'>{formatField('address', item.address)}</td>
              <td className='py-3 px-4 border-b'>{formatField('cuit', item.cuit)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaProviderAdmin;
