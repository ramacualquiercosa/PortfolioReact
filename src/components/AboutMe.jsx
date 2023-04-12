import React from "react";
import NavBar from './NavBar'
import Footer from './Footer'
import Tecnologies from "./tecnologies";

export default function About () {
  return (
 <>
    <NavBar/>

    <div class="overflow-y-auto sm:p-0 pt-4 pr-4 pb-20 pl-4 bg-east-bay-800">
    <div class="flex justify-center items-end text-center min-h-fit sm:block">
    <div class="bg-gray-500 transition-opacity bg-opacity-75"></div>
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen">​</span>
    <div class= "inline-block text-left bg-east-bay-900 rounded-lg overflow-hidden align-bottom transition-all transform shadow-2xl sm:my-8 sm:align-middle max-w-4xl sm:w-full">
      <div class="items-center w-full mr-auto ml-auto relative max-w-7xl md:px-12 lg:px-24">
        <div class="grid grid-cols-1">
          <div class="mt-4 mr-auto mb-4 ml-auto bg-east-bay-900 max-w-lg">
            <div class="flex flex-col items-center pt-6 pr-6 pb-6 pl-6 ">
              <img class="rounded-full"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Charly_garcia_by_hildalizarazu.jpg/640px-Charly_garcia_by_hildalizarazu.jpg"/>
              <p class="mt-8 text-2xl font-semibold leading-none text-white tracking-tighter lg:text-3xl">Charly Garcia</p>
              <p class="mt-3 text-base leading-relaxed text-justify text-gray-200">Como programador front-end, me considero altamente capacitado y creativo en la entrega de soluciones de diseño web visualmente atractivas y altamente funcionales. Mi sólida formación en HTML, CSS y JavaScript me permite crear interfaces de usuario dinámicas e intuitivas, capaces de proporcionar una experiencia de usuario excepcional. Además, cuento con experiencia en la implementación de soluciones de diseño responsivo, asegurando que los sitios web sean compatibles con diferentes dispositivos y pantallas.

Me apasiona trabajar en equipo y disfruto colaborar en proyectos de desarrollo web. Siempre estoy en la búsqueda de nuevas herramientas y tecnologías para mejorar mi habilidad y eficacia en el trabajo, y me esfuerzo por mantenerme actualizado en las tendencias actuales del diseño y la programación web. En resumen, soy un programador front-end comprometido, apasionado y siempre dispuesto a superar desafíos.</p>
              <div class="w-full mt-6">
                <a href= "/contact" class="flex text-center items-center justify-center bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600 ">Hablemos</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    <Tecnologies/>


    <Footer/>
   
    </>  
    )}