import React from 'react'
import { Link } from 'react-router-dom';
import { CiSquarePlus } from "react-icons/ci";
function AddAct() {
  return (
    <div>
        <Link to={"/activites/createAct"}>
            <CiSquarePlus className='font-bold text-4xl'></CiSquarePlus>
        </Link>
    </div>
  )
}

export default AddAct