import { useEffect, useState } from "react";
import AnnoucementDetails from "../../components/annoucement/details/AnnoucementDetails"
import { useParams } from "react-router-dom";
import { getAnnouncementById } from "../../services/AnnouncementService";

const AnnoucementDetailsPage = ()=>{

    const {id} = useParams()
    const [announcement, setAnnoucement] = useState({});

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                let res = await getAnnouncementById(id)
                setAnnoucement(res);
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    },[id])

    return <AnnoucementDetails announcement={announcement}/>
     
}

export default AnnoucementDetailsPage;