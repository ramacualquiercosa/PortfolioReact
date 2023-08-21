import React from "react";
import { useState, useEffect } from "react";
import NavBar from './NavBar'
import axios from 'axios'

export default function Card() {
    const [datos, setDatos] = useState([]);
    var url="https://rickandmortyapi.com/api/character"

    useEffect(()=>{
      getDatos()
    },[])


    //  FETCH CON FUNCIONES ASINCRONICAS
    async function getDatos(){
        const response = await fetch(url)
        const responseApi = await response.json()
        setDatos(responseApi.results)
        
        console.log(responseApi.results)
    }

    /// FETCH CON .THEN
    // function getDatos(){
    //   fetch(url)
    //   .then ((response)=> response.json())
    //   .then ((responseApi)=>{setDatos(responseApi.results)})
    //   .catch((error)=>{
    //     console.log(error)
    //   })
    // }
    
    ///FETCH CON AXIOS
    // async function getDatos(){
    //   const response = await axios.get(url)
    //   setDatos(response.datos.results)
    // }

return (
    <>
      <NavBar/>
      <div className=" bg-east-bay-800">
      <div className=" grid grid-cols-3 gap-4 py-4 grid-flow-row ">
      {datos.map((item)=>(
      
      <div key= {item.id} className="flex justify-center ">
        <div className="w-48  bg-east-bay-900 rounded-3xl shadow-xl overflow-hidden">
          <div className="max-w-md mx-auto ">
            <div className="h-[236px] bg-no-repeat  bg-center bg-cover" style={{backgroundImage: `url(${item.image})`}}>
            </div>
            <div className="p-4 sm:p-6">
              <p  className="text-center font-bold text-white text-[22px] leading-7 mb-1">
              {item.name}
              </p>
              <p className="text-center  text-white font-[15px] mt-6">
                {item.species}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      )
      
      )}
      </div>
      </div>
    </>
  );
}
