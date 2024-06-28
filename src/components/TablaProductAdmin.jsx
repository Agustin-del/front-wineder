import React from 'react'

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

const TablaProductAdmin = ({ name, col1, col2, col3, col4, data }) => {
    const formatField = (field, value) => {
        if (field.toLowerCase().includes('price') && typeof value === 'number') {
            return formatter.format(value);
        }
        return value;
    };

    const getAlignmentClass = (value) => {
        return typeof value === 'number' ? 'text-right' : 'text-left';
    };

    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                {name}
                            </th>
                            <th scope="col" className="px-6 py-3">
                                {col1}
                            </th>
                            <th scope="col" className="px-6 py-3">
                                {col2}
                            </th>
                            <th scope="col" className="px-6 py-3">
                                {col3}
                            </th>
                            <th scope="col" className="px-6 py-3">
                                {col4}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.name || item.id}
                                </th>
                                <td className={`px-6 py-4 ${getAlignmentClass(item.provider || item.lastName || item.active)}`}>
                                    {item.provider || item.lastName || item.active}
                                </td>
                                <td className={`px-6 py-4 ${getAlignmentClass(item.price || item.address || item.productName)}`}>
                                    {formatField(col2, item.price) || item.address || item.productName}
                                </td>
                                <td className={`px-6 py-4 ${getAlignmentClass(item.stock || item.quantity)}`}>
                                    {item.stock || item.quantity}
                                </td>
                                <td className={`px-6 py-4 ${getAlignmentClass(item.provider || '')}`}>
                                    {item.provider || ''}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TablaProductAdmin
