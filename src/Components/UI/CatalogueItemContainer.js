import React, { useState } from 'react'
import { FiHeart } from 'react-icons/fi'
import { Link } from 'react-router-dom'


const CatalogueItemContainer = ({ id, brand, imageFile, price, name, favorite }) => {
    const [favoriteState, setFavoriteState] = useState(favorite);
  return (
    <div className="border cursor-pointer rounded-md">
        <div className="w-full h-72 relative overflow-hidden">
            <div onClick={()=>setFavoriteState(!favoriteState)} className="w-8 h-8 flex flex-row justify-center items-center absolute z-10 right-4 top-4 rounded-md visited:fill-black">
                <FiHeart className={favoriteState ? "cursor-pointer w-6 h-6 fill-black" : "cursor-pointer w-6 h-6"}/>
            </div>
            <img src={imageFile} alt="" className="w-full h-full object-cover object-center"/>
        </div>
        <div className="p-3 border-t">
            <p className="text-sm text-[#777777] font-medium">{brand}</p>
            <p className="font-semibold text-lg">&#8358; {price}</p>
            <p className=" font-semibold h-14 mb-1 text-lg">{name}"</p>
            <Link to={"/shoes/details:"+id} className='w-fit'><p className="bg-black w-full font-semibold text-white rounded-md text-center py-3 hover:bg-[#eff0f2] hover:text-black">Add to Cart </p></Link>
        </div>
    </div>
  )
}

export default CatalogueItemContainer