import React from 'react'
import {FcGoogle} from "react-icons/fc"
export default function OAuth() {
  return (
    <button className="flex items-center justify-center w-full bg-violet-600 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-violet-700 active:bg-violet-800 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded">
        <FcGoogle className="text-2xl mr-2 bg-white rounded-full"/>
        Continue with Google
    </button>
  )
}
