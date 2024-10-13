

const Main = () => {
  

  return (
    <div className="min-h-screen text-white">
      
      {/* Hero Section */}
      <div className="relative h-screen">
        <img src="/api/placeholder/1920/1080" alt="Beach scenery" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Tous nos voyages</h1>
          <p className="text-lg md:text-xl mb-8">Réservez des visites et activités dans le monde entier</p>
          
          {/* Search Form */}
          <div className="bg-white rounded-lg p-4 w-full max-w-4xl flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 text-black">
            <div className="w-full md:w-1/4">
              <label className="block text-sm text-gray-600">Location</label>
              <input type="text" placeholder="Search For A Destination" className="w-full mt-1 p-2 border rounded" />
            </div>
            <div className="w-full md:w-1/4">
              <label className="block text-sm text-gray-600">Guests</label>
              <input type="text" placeholder="How many Guests?" className="w-full mt-1 p-2 border rounded" />
            </div>
            <div className="w-full md:w-1/4">
              <label className="block text-sm text-gray-600">Date</label>
              <input type="text" placeholder="Pick a date" className="w-full mt-1 p-2 border rounded" />
            </div>
            <button className="w-full md:w-auto bg-yellow-400 text-black px-6 py-3 rounded-lg mt-5 md:mt-0">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;