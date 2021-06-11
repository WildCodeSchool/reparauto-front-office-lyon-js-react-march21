import Image from 'next/image';

export default function Activities() {
  return (
<main class="px-3 mb-6">
    <div class="text-4xl sm:text-5xl text-center my-10">Nos prestations</div>

    <div class="grid md:grid-cols-3 gap-2 max-w-5xl m-auto mx-5px">
      <div class="bg-white">
      <Image src='/images/diag.jpg' alt="carwash" class="w-full" width={500} height={250} layout="responsive"/>

        <div class="px-10 py-6 mb-10 text-center">
          <div class="text-2xl font-bold text-yellow-500 mb-4">DIAGNOSTICS</div>
          <span class="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate tempore eligendi magnam distinctio molestias. Incidunt at consequuntur consequatur 
            officiis repudiandae! Culpa cum vel tenetur itaque eius provident voluptatum similique impedit?
          </span>
        </div>

        <button class="w-full text-lg h-16 text-white font-extrabold bg-yellow-500 rounded-lg">à partir de <span class="text-4xl">35€</span></button>
      </div>

      <div class="bg-white">
      <Image src='/images/vidange.jpg' alt="carwash" class="w-full" width={500} height={250} layout="responsive"/>
        <div class="px-10 py-6 mb-10 text-center">
          <div class="text-2xl font-bold text-yellow-600 mb-4">VIDANGE</div>
          <span class="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate tempore eligendi magnam distinctio molestias. Incidunt 
            at consequuntur consequatur officiis repudiandae! Culpa cum vel tenetur itaque eius provident voluptatum similique impedit?</span>
        </div>
        <button class="w-full text-lg h-16 text-white font-extrabold bg-yellow-600 rounded-lg">à partir de <span class="text-4xl">55€</span></button>
      </div>

      <div class="bg-white">
      <Image src='/images/carwash.jpg' alt="carwash" class="w-full" width={500} height={250} layout="responsive"/>
        <div class="px-10 py-6 mb-10 text-center">
          <div class="text-2xl font-bold text-red-500 mb-4">NETTOYAGE</div>

          <span class="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate tempore eligendi magnam distinctio molestias. Incidunt
             at consequuntur consequatur officiis repudiandae! Culpa cum vel tenetur itaque eius provident voluptatum similique impedit?</span>
        </div>

        <button class="w-full text-lg h-16 text-white font-extrabold bg-red-500 rounded-lg">à partir de <span class="text-4xl">35€</span></button>
      </div>
    </div>
  </main>
)
}
