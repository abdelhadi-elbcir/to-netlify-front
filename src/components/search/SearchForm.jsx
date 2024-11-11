
const SearchFrom = () => {

    return (<div className="bg-white rounded-lg p-4 w-full max-w-4xl flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 text-black">
        <div className="w-full md:w-1/4">
            <label className="block text-sm text-primary">Location</label>
            <input type="text" placeholder="Search For A Destination" className="w-full mt-1 p-2 border rounded" />
        </div>
        <div className="w-full md:w-1/4">
            <label className="block text-sm text-primary">Guests</label>
            <input type="text" placeholder="How many Guests?" className="w-full mt-1 p-2 border rounded" />
        </div>
        <div className="w-full md:w-1/4">
            <label className="block text-sm text-primary">Date</label>
            <input type="text" placeholder="Pick a date" className="w-full mt-1 p-2 border rounded" />
        </div>
        <button className="w-full md:w-auto bg-primary text-white px-6 py-3 rounded-lg mt-5 md:mt-0">Search</button>
    </div>)
}

export default SearchFrom;