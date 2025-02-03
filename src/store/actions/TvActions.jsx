import { loadTvShow } from "../reducers/TvSlice";
import axios from "../../utils/axios";

export const asyncLoadTv= (id) =>async(dispatch,getState) =>{
    try {
        let detail =await axios.get(`/tv/${id}`);
        let externalid =await axios.get(`/tv/${id}/external_ids`);
        let recommendations = await axios.get(`/tv/${id}/recommendations`);
        let similar =await axios.get(`/tv/${id}/similar`);
        let videos =await axios.get(`/tv/${id}/videos`);
        let watchproviders =await axios.get(`/tv/${id}/watch/providers`);
        let translations = await axios.get(`/tv/${id}/translations`);

        const theultimatedata = {
            details:detail.data,
            externalid:externalid.data,
            recommendations:recommendations.data.results.map((m)=>m),
            similar:similar.data.results,
            videos:videos.data.results.find((m)=>m.type === "Trailer"),
            watchproviders:watchproviders.data.results.IN,
            translations:translations.data.translations
        }
        dispatch(loadTvShow(theultimatedata));
    } catch (error) {
        console.log("Error : ",error);
    }
}
