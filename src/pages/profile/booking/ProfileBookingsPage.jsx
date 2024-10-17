import Sidebar from "../../../components/manageProfile/Sidebar";
import ProfileBookingsList from "../../../components/profile/booking/ProfileBookingsList";


const ProfileBookingsPage = ()=>{

    return (
        <div className="min-h-screen flex justify-center items-center">
          <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl flex">
            {/* Barre latérale */}
            <Sidebar/>
    
            <div className="w-3/4 p-10">
              {/* En-tête */}
              <h2 className="text-3xl font-semibold text-[#347928] mb-8">Mes Réservations</h2>
    
              <ProfileBookingsList/>

            </div>
          </div>
        </div>
      );

}


export default ProfileBookingsPage;
