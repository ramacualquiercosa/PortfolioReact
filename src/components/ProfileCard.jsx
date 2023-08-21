import React from "react";
import NavBar from './NavBar'
import Footer from './Footer'


const ProfileCard = () => {
  return (
    <>
    <NavBar/>
    <div class="h-screen bg-east-bay-800 flex items-center ">
	<section className="bg-cover bg-center py-32 w-full">
		<div class="container mx-auto text-left text-white">
			<div class="flex items-center">
				<div class="w-1/2">
					<h1 class="text-5xl font-medium mb-6">Hola, soy Carlos!</h1>
					<p class="text-xl mb-12">me especializo en el desarrollo de interfaces de usuario dinámicas y responsivas para sitios web y aplicaciones, manteniéndome actualizado en las últimas tendencias del diseño y la programación web.</p>
					<a href="/about" class="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600">Conoceme</a>
				</div>
				<div class="w-1/2 pl-16">
					<img src="https://historia-biografia.com/wp-content/uploads/2022/10/Charly-Garcia-2.webp" class="h-64 w-full object-cover rounded-xl" alt="Layout Image"/>
                    </div>
				</div>
			</div>
	</section>
</div>
<Footer/>
    </>
)
}

export default ProfileCard;