import React from 'react'

const Form = (props) => {
  return (<form action="/send-message" method="POST" class="space-y-4">
    <div  className="p-2">

      <label for={props.name} class="block text-sm font-medium text-gray-700">{props.name}</label>
      <input type={props.type} placeholder={props.placeholder} id={props.name} name={props.name} class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm " />
    </div> 

  </form>
  )
}

export default Form