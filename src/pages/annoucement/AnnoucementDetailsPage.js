import { useEffect, useState } from "react";
import AnnoucementDetails from "../../components/annoucement/details/AnnoucementDetails"
import { useParams } from "react-router-dom";
import { getVerfiedAnnouncementById } from "../../services/AnnouncementService";

const AnnoucementDetailsPage = ()=>{

    const {id} = useParams()
    const [announcement, setAnnoucement] = useState({});

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                let res = await getVerfiedAnnouncementById(id)
                console.log(res);
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