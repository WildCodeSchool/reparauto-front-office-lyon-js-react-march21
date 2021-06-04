// import Head from 'next/head'
// import Layout, { siteTitle } from '../components/layout'
// import utilStyles from '../styles/utils.module.css'

export default function Occasions() {
  return (
    <div>
      <div className="flex my-10">
        <div className="bg-white w-1/5 m-auto border-1  border-dashed border-gray-100 shadow-md rounded-lg overflow-hidden ">
          <img
            src="https://via.placeholder.com/150"
            alt=""
            className="w-full object-cover object-center"
          />
          <div className="p-4">
            <p className="mb-1 text-gray-900 font-semibold">Ferrari F50s</p>

            <span className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              fugit hic ab quos eos quisquam labore minus, dignissimos porro
              explicabo distinctio.
            </span>
            <br />
            <br />

            <span className="text-gray-700">
              Prix : <span className="text-xl font-medium">20 000€</span>{' '}
            </span>

            <div className="mt-8 mb-3">
              <a
                href="#"
                className=" bg-yellow-300 px-4 py-2 bg-teal-500 shadow-lg border rounded-lg text-grey uppercase font-semibold tracking-wider focus:outline-none focus:shadow-outline hover:bg-teal-400 active:bg-teal-400 align-center"
              >
                Détails
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white w-1/5 m-auto border-1  border-dashed border-gray-100 shadow-md rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/150"
            alt=""
            className="w-full object-cover object-center"
          />
          <div className="p-4">
            <p className="mb-1 text-gray-900 font-semibold">Peugeot 2CV</p>

            <span className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              fugit hic ab quos eos quisquam labore minus, dignissimos porro
              explicabo distinctio.
            </span>
            <br />
            <br />

            <span className="text-gray-700">
              Prix : <span className="text-xl font-medium">2 000€</span>{' '}
            </span>

            <div className="mt-8 mb-3">
              <a
                href="#"
                className="bg-yellow-300 px-4 py-2 bg-teal-500 shadow-lg border rounded-lg text-grey uppercase font-semibold tracking-wider focus:outline-none focus:shadow-outline hover:bg-teal-400 active:bg-teal-400 self-center"
              >
                Détails
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white w-1/5 m-auto border-1  border-dashed border-gray-100 shadow-md rounded-lg overflow-hidden ">
          <img
            src="https://via.placeholder.com/150"
            alt=""
            className="w-full object-cover object-center"
          />
          <div className="p-4">
            <p className="mb-1 text-gray-900 font-semibold">
              Ford Mondeo Break
            </p>

            <span className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              fugit hic ab quos eos quisquam labore minus, dignissimos porro
              explicabo distinctio.
            </span>
            <br />
            <br />

            <span className="text-gray-700">
              Prix : <span className="text-xl font-medium">10 000€</span>{' '}
            </span>

            <div className="mt-8 mb-3">
              <a
                href="#"
                className="bg-yellow-300 px-4 py-2 bg-teal-500 shadow-lg border rounded-lg text-grey uppercase font-semibold tracking-wider focus:outline-none focus:shadow-outline hover:bg-teal-400 active:bg-teal-400 align-center"
              >
                Détails
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white w-1/5 m-auto border-1  border-dashed border-gray-100 shadow-md rounded-lg overflow-hidden ">
          <img
            src="https://via.placeholder.com/150"
            alt=""
            className="w-full object-cover object-center"
          />
          <div className="p-4">
            <p className="mb-1 text-gray-900 font-semibold">Ferrari F50s</p>

            <span className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              fugit hic ab quos eos quisquam labore minus, dignissimos porro
              explicabo distinctio.
            </span>
            <br />
            <br />

            <span className="text-gray-700">
              Prix : <span className="text-xl font-medium">20 000€</span>{' '}
            </span>

            <div className="mt-8 mb-3">
              <a
                href="#"
                className=" bg-yellow-300 px-4 py-2 bg-teal-500 shadow-lg border rounded-lg text-grey uppercase font-semibold tracking-wider focus:outline-none focus:shadow-outline hover:bg-teal-400 active:bg-teal-400 align-center"
              >
                Détails
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Pages
              <span className="font-medium"> 1 </span>
              sur
              <span className="font-medium"> 10 </span>
            </p>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>

                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="#"
                aria-current="page"
                className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                1
              </a>
              <a
                href="#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                2
              </a>
              <a
                href="#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
              >
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                ...
              </span>
              <a
                href="#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
              >
                8
              </a>
              <a
                href="#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                9
              </a>
              <a
                href="#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                10
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>

                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
