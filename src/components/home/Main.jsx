import SearchFrom from "../search/SearchForm";
import heroImg from "../../assets/images/hero.png";

const MainSection = () => {


  return (
    <div className="min-h-screen text-white mb-12">

      {/* Hero Section */}
      <div className="relative h-screen ">
        <img src={heroImg} alt="Beach scenery" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-10" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Tous nos voyages</h1>
          <p className="text-lg md:text-xl mb-8">Réservez des visites et activités dans le monde entier</p>

          {/* Search Form */}
          <div style={{marginBottom:"-60px"}} className="absolute inset-3 flex flex-col justify-end items-center text-center p-4">
            <SearchFrom />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;