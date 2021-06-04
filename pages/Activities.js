export default function Activities() {
  return (
    <main className="px-3">
      <div className="text-4xl sm:text-5xl text-center my-10">
        Nos prestations
      </div>

      <div className="grid md:grid-cols-3 gap-8 m-5 max-w-5xl m-auto">
        <div className="bg-white">
          <img
            src="https://via.placeholder.com/150"
            alt=""
            className="w-full h-48 sm:h-56 object-cover"
          />

          <div className="px-10 py-6 mb-10 text-center">
            <div className="text-2xl font-bold text-yellow-500 mb-4">
              DIAGNOSTICS
            </div>
            <span className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate tempore eligendi magnam distinctio molestias. Incidunt
              at consequuntur consequatur officiis repudiandae! Culpa cum vel
              tenetur itaque eius provident voluptatum similique impedit?
            </span>
          </div>

          <button className="w-full text-lg h-16 text-white font-extrabold bg-yellow-500 rounded-lg">
            à partir de <span className="text-4xl">35€</span>
          </button>
        </div>

        <div className="bg-white">
          <img
            src="https://via.placeholder.com/150"
            alt=""
            className="w-full h-48 sm:h-56 object-cover"
          />
          <div className="px-10 py-6 mb-10 text-center">
            <div className="text-2xl font-bold text-yellow-600 mb-4">
              VIDANGE
            </div>
            <span className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate tempore eligendi magnam distinctio molestias. Incidunt
              at consequuntur consequatur officiis repudiandae! Culpa cum vel
              tenetur itaque eius provident voluptatum similique impedit?
            </span>
          </div>
          <button className="w-full text-lg h-16 text-white font-extrabold bg-yellow-600 rounded-lg">
            à partir de <span className="text-4xl">55€</span>
          </button>
        </div>

        <div className="bg-white">
          <img
            src="https://via.placeholder.com/150"
            alt=""
            className="w-full h-48 sm:h-56 object-cover"
          />
          <div className="px-10 py-6 mb-10 text-center">
            <div className="text-2xl font-bold text-red-500 mb-4">
              NETTOYAGE
            </div>

            <span className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate tempore eligendi magnam distinctio molestias. Incidunt
              at consequuntur consequatur officiis repudiandae! Culpa cum vel
              tenetur itaque eius provident voluptatum similique impedit?
            </span>
          </div>

          <button className="w-full text-lg h-16 text-white font-extrabold bg-red-500 rounded-lg">
            à partir de <span className="text-4xl">35€</span>
          </button>
        </div>
      </div>
    </main>
  );
}
