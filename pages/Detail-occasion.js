/* eslint-disable jsx-a11y/anchor-is-valid */
// import Head from 'next/head'
// import Layout, { siteTitle } from '../components/layout'
// import utilStyles from '../styles/utils.module.css'

export default function Detail_occasions() {
  return (
    <div className="flex my-10">
      <div className="bg-white w-1/2 m-auto border-1  border-dashed border-gray-100 shadow-md rounded-lg overflow-hidden ">
        <img
          src="https://via.placeholder.com/150"
          alt=""
          className="w-full object-cover object-center"
        />
        <div className="p-4">
          <p className="mb-1 text-gray-900 font-semibold">Ferrari F50s</p>

          <span className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugit
            hic ab quos eos quisquam labore minus, dignissimos porro explicabo
            distinctio.
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
  );
}
