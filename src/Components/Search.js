// import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { reqCities, selectCities } from '../features/dataSlice';
import CitiesList from './CitiesList';
const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const cities = useSelector(selectCities);
    return (
        <div className=" rounded-lg h-[4rem] w-[90vw] mt-[2rem] flex items-center mx-auto relative bg-[#4FA095]">
            <label className="text-[#BAD1C2] text-xl mx-4">City :</label>
            <div className="relative" onMouseOver = {()=>{if(cities.length)setOpen(true);}} onMouseLeave={()=>setOpen(false)}>
                <input className=" bg-[#BAD1C2] rounded-lg m-2 w-[16rem] p-2 mx-2 focus:outline-none text-[#153462]"
                    name='searchTerm'
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value); if(cities.length)setOpen(true); }} 
                   />
                {
                    open ?
                        <div >
                            <CitiesList cities={cities} />
                        </div>
                        :
                        null
                }
            </div>
            <div>
                <button className=" rounded-lg bg-[#4FA095] hover:bg-[#BAD1C2] hover:text-[#153462] border-2 border-[#BAD1C2] text-white p-2"
                    onClick={() => { dispatch(reqCities(searchTerm)); setOpen(true); }}>Search</button>
            </div>
        </div>
    )
}

export default Search