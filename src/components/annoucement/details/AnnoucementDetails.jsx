import AnnoucementSlider from './AnnoucementSlider';
import AnnoucmentBooking from './AnnoucmentBooking';
import AnnoucementDescription from './AnnoucementDescription';
import AnnoucementFeatures from './AnnoucementFeatures';
import StopsList from '../stops/StopsList';

const AnnoucementDetails = ({ annoucement }) => {
  // Vérifiez si annoucement et stops existent avant de mapper
  const stopImages = annoucement?.stops ? annoucement.stops.map(stop => stop.picture.urlImage) : [];

  return (
    <div className="max-w-7xl mt-20 mx-auto p-4 font-sans bg-white w-full">
      <h1 className="text-3xl font-bold mb-2 text-left break-words">{annoucement?.title}</h1>
        <br />
      <div className="flex flex-col md:flex-row gap-6">
        <AnnoucementSlider images={stopImages} />
        <div className="md:w-1/3">
          <AnnoucmentBooking />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          <AnnoucementFeatures annoucement={annoucement} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <AnnoucementDescription description={annoucement?.description} />
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <div className="md:w-2/3">
          <StopsList stops={annoucement?.stops} />
        </div>
      </div>
    </div>
  );
};

export default AnnoucementDetails;
