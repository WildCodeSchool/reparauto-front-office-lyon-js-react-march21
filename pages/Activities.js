

export default function Activities() {
    return (
    <div className= "justify-evenly flex sm:flex-grow lg:flex-cols" >
      <div >
        <img className=" mx-auto" src="https://www.ecoleauto.com/wp-content/uploads/2017/08/image001-2.jpg" alt="" width="384" height="512" />
          <div className="pt-6 space-y-4">
            <blockquote>
              <p className="text-lg font-semibold">
                Travaux simple
            </p>
            </blockquote>
          </div>
      </div>
      <div >
        <img className="mx-auto w-17 md:w-35 lg:w-46" src="https://www.ecoleauto.com/wp-content/uploads/2017/08/image001-2.jpg" alt="" width="384" height="512" />
          <div className="pt-6 space-y-4">
            <blockquote>
              <p className="text-lg font-semibold">
                Travaux Lourd
            </p>
            </blockquote>
          </div>
      </div>
      <div>
        <img className=" mx-auto" src="https://www.ecoleauto.com/wp-content/uploads/2017/08/image001-2.jpg" alt="" width="384" height="512" />
          <div className="pt-6 space-y-4">
            <blockquote>
              <p className="text-lg font-semibold">
                Travaux divers
            </p>
            </blockquote>
          </div>
      </div>
    </div>
  )
}