// import Head from 'next/head'
// import Layout, { siteTitle } from '../components/layout'
// import utilStyles from '../styles/utils.module.css'

export default function Occasions() {
    return (
<>
  <div class="flex my-10">
    <div class="bg-white w-1/5 m-auto border-1  border-dashed border-gray-100 shadow-md rounded-lg overflow-hidden ">
      <img src="https://via.placeholder.com/150" alt="" class="w-full object-cover object-center" />
      <div class="p-4">
        <p class="mb-1 text-gray-900 font-semibold">Ferrari F50s</p>

        <span class="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugit hic ab quos eos
          quisquam labore minus, dignissimos porro explicabo distinctio.</span>
        <br></br>
        <br></br>

        <span class="text-gray-700">Prix : <span class="text-xl font-medium">20 000€</span> </span>

        <div class="mt-8 mb-3">
          <a href="#"
            class=" bg-yellow-300 px-4 py-2 bg-teal-500 shadow-lg border rounded-lg text-grey uppercase font-semibold tracking-wider focus:outline-none focus:shadow-outline hover:bg-teal-400 active:bg-teal-400 align-center">Détails</a>
        </div>
      </div>
    </div>
    <div class="bg-white w-1/5 m-auto border-1  border-dashed border-gray-100 shadow-md rounded-lg overflow-hidden">
      <img src="https://via.placeholder.com/150" alt="" class="w-full object-cover object-center" />
      <div class="p-4">
        <p class="mb-1 text-gray-900 font-semibold">Peugeot  2CV</p>

        <span class="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugit hic ab quos eos
          quisquam labore minus, dignissimos porro explicabo distinctio.</span>
        <br></br>
        <br></br>

        <span class="text-gray-700">Prix : <span class="text-xl font-medium">2 000€</span> </span>

        <div class="mt-8 mb-3">
          <a href="#"
            class="bg-yellow-300 px-4 py-2 bg-teal-500 shadow-lg border rounded-lg text-grey uppercase font-semibold tracking-wider focus:outline-none focus:shadow-outline hover:bg-teal-400 active:bg-teal-400 self-center">Détails</a>
        </div>
      </div>
    </div>
    <div class="bg-white w-1/5 m-auto border-1  border-dashed border-gray-100 shadow-md rounded-lg overflow-hidden ">
      <img src="https://via.placeholder.com/150" alt="" class="w-full object-cover object-center" />
      <div class="p-4">
        <p class="mb-1 text-gray-900 font-semibold">Ford Mondeo Break</p>

        <span class="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugit hic ab quos eos
          quisquam labore minus, dignissimos porro explicabo distinctio.</span>
        <br></br>
        <br></br>

        <span class="text-gray-700">Prix : <span class="text-xl font-medium">10 000€</span> </span>

        <div class="mt-8 mb-3">
          <a href="#"
            class="bg-yellow-300 px-4 py-2 bg-teal-500 shadow-lg border rounded-lg text-grey uppercase font-semibold tracking-wider focus:outline-none focus:shadow-outline hover:bg-teal-400 active:bg-teal-400 align-center">Détails</a>
        </div>
      </div>
    </div>
    <div class="bg-white w-1/5 m-auto border-1  border-dashed border-gray-100 shadow-md rounded-lg overflow-hidden ">
      <img src="https://via.placeholder.com/150" alt="" class="w-full object-cover object-center" />
      <div class="p-4">
        <p class="mb-1 text-gray-900 font-semibold">Ferrari F50s</p>

        <span class="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugit hic ab quos eos
          quisquam labore minus, dignissimos porro explicabo distinctio.</span>
        <br></br>
        <br></br>

        <span class="text-gray-700">Prix : <span class="text-xl font-medium">20 000€</span> </span>

        <div class="mt-8 mb-3">
          <a href="#"
            class=" bg-yellow-300 px-4 py-2 bg-teal-500 shadow-lg border rounded-lg text-grey uppercase font-semibold tracking-wider focus:outline-none focus:shadow-outline hover:bg-teal-400 active:bg-teal-400 align-center">Détails</a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
  <div class="flex-1 flex justify-between sm:hidden">
    <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
      Previous
    </a>
    <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
      Next
    </a>
  </div>
  <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
    <div>
      <p class="text-sm text-gray-700">
        Pages
        <span class="font-medium"> 1 </span>
        sur  
        <span class="font-medium"> 10 </span>
      </p>
    </div>
    <div>
      <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          <span class="sr-only">Previous</span>
          

          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </a>
       
        <a href="#" aria-current="page" class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
          1
        </a>
        <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
          2
        </a>
        <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
          3
        </a>
        <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
          ...
        </span>
        <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
          8
        </a>
        <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
          9
        </a>
        <a href="#" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
          10
        </a>
        <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
          <span class="sr-only">Next</span>
         
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </a>
      </nav>
    </div>
  </div>
</div>

  </>

  

  
  

    )
  }