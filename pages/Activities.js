

export default function Activities() {
    return (
    <div className= "justify-evenly flex sm:flex-grow lg:flex-cols" >
      <div >
       
          <div className="pt-6 space-y-4">
            <blockquote>
              <p className="text-lg font-semibold">
                Travaux simple
            </p>
            </blockquote>
          </div>
      </div>
      <div >
        
          <div className="pt-6 space-y-4">
            <blockquote>
              <p className="text-lg font-semibold">
                Travaux Lourd
            </p>
            </blockquote>
          </div>
      </div>
      <div>
        
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