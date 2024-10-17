import AnnoucementSlider from './AnnoucementSlider';
import AnnoucmentBooking from './AnnoucmentBooking';
import AnnoucementDescription from './AnnoucementDescription';
import AnnoucementFeatures from './AnnoucementFeatures';

const AnnoucementDetails = ({ annoucement }) => {
  return (
    <div className="max-w-7xl mt-20 mx-auto p-4 font-sans">
      <h1 className="text-3xl font-bold mb-2">{annoucement?.title}</h1>
      {/* <div className="flex items-center mb-4">
        <span className="mr-2">Gothenburg</span>
        <div className="flex text-yellow-400">
          {'★'.repeat(5)}
          <span className="text-gray-600 ml-1">(348 reviews)</span>
        </div>
      </div> */}

      <div className="flex flex-col md:flex-row gap-6">
        <AnnoucementSlider />
        <div className="md:w-1/3">
          <AnnoucmentBooking />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          <AnnoucementFeatures />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <AnnoucementDescription description={annoucement?.description} />
      </div>
    </div>
  );
};

export default AnnoucementDetails;