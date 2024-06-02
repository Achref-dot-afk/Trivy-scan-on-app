import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowBack } from "react-icons/io";


function BackButton() {
  return (
    <div className="">
        <Link to={"/"}>
           <a className='border bg-red-400 rounded text-center text-white p-2 mt-4'>Retour</a>
        </Link>
    </div>
  )
}

export default BackButton