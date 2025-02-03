import { loadPerson } from "../reducers/Personslice";
import axios from '../../utils/axios';
export const asyncperson = (id)=>async(dispatch,getState)=>{
    try {
        const details = await axios.get(`/person/${id}`);
        const movie_credits = await axios.get(`/person/${id}/movie_credits`);
        const images = await axios.get(`/person/${id}/images`);
        const tv_credits = await axios.get(`/person/${id}/tv_credits`);
        const combined_credits = await axios.get(`/person/${id}/combined_credits`);
        const external_ids = await axios.get(`/person/${id}/external_ids`);
        const tagged_images = await axios.get(`/person/${id}/tagged_images`);

        const theultimatedata = {
            details:details.data,
            movie_credits:movie_credits.data,
            images:images.data,
            tv_credits:tv_credits.data,
            combined_credits:combined_credits.data,
            external_ids:external_ids.data,
            tagged_images:tagged_images.data
        }
        
        dispatch(loadPerson(theultimatedata));        
    } catch (error) {
        console.log("Error: ",error);
        
    }
}