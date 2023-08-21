import React, { useState, useEffect } from "react";
import NavBar from './NavBar'

export default function InputComponent() {
    ///declaro las variables con estado inicial
    //declaro el estado de la variable value como un string vacío
    const [value, setValue]= useState("");
    //declaro el estado de la variable click como false
    const[click, setclick]=useState(false);
    ///capturo los cambios de estado de la varable value y le seteo el valor introducido en el input
    const handleValue = (event) => {
        setValue(event.target.value);
      };
    ///capturo el cambio de estado en el valor la variable click y lo cambia a su booleano contrario (verdadero o falso)
    const handleClick = ()=>{
        setclick(state => !state) 
    };
    ///agrega al parrafo el valor de la variable value
    useEffect(()=> {
        document.getElementById("mostrarValor").textContent = "Hola " + value;
    },[click]);//la dependencia se fija si se hay modificaciones en el valor de la variable click, por lo que ejecuta el codigo si nota un cambio





  
  return (
    <>
    <NavBar/>
    {/* toma el valor introducido y ante algun cambio, setea el nuevo valor en la variable value */}
    <input   type="text" value={value} onChange={handleValue}
    // estilos del input
    className="block w-full rounded-md border-0 px-3.5 py-2  text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
    <br />
    {/* captura el click */}
    <button onClick={handleClick}
    // estilos del bonton    
    className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">click</button>

    <p id="mostrarValor"class="mt-8 text-2xl font-semibold leading-none tracking-tighter lg:text-3xl"></p>
    </>

  );
}

