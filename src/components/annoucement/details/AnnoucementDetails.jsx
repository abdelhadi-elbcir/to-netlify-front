import AnnoucementSlider from './AnnoucementSlider';
import AnnoucmentBooking from './AnnoucmentBooking';
import AnnoucementDescription from './AnnoucementDescription';
import AnnoucementFeatures from './AnnoucementFeatures';
import StopsList from '../stops/StopsList'
const AnnoucementDetails = ({ announcement }) => {


  return (
    <div className="max-w-7xl mt-20 mx-auto p-4 font-sans bg-white w-full">
      <h1 className="text-3xl font-bold mb-2">{announcement?.title}</h1>
      {/* <div className="flex items-center mb-4">
        <span className="mr-2">Gothenburg</span>
        <div className="flex text-yellow-400">
          {'★'.repeat(5)}
          <span className="text-gray-600 ml-1">(348 reviews)</span>
        </div>
      </div> */}

      <div className="flex flex-col md:flex-row gap-6">
        <AnnoucementSlider stops={announcement?.stops}/>
        <div className="md:w-1/3">
          <AnnoucmentBooking announcementId={announcement?.id} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          <AnnoucementFeatures announcement={announcement}  />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <AnnoucementDescription description={announcement?.description} />
      </div>
      <div className="flex flex-col md:flex-row gap-6  mt-6">
      <div className="md:w-2/3">
        <StopsList/>
        </div>
      </div>
    </div>
  );
};

export default AnnoucementDetails;