import { loadMovie } from "../reducers/MovieSlice";
import axios from "../../utils/axios";

export const asyncLoadMovie = (id) =>async(dispatch,getState) =>{
    try {
        let detail =await axios.get(`/movie/${id}`);
        let externalid =await axios.get(`/movie/${id}/external_ids`);
        let recommendations = await axios.get(`/movie/${id}/recommendations`);
        let similar =await axios.get(`/movie/${id}/similar`);
        let videos =await axios.get(`/movie/${id}/videos`);
        let watchproviders =await axios.get(`/movie/${id}/watch/providers`);
        let translations = await axios.get(`/movie/${id}/translations`);

        const theultimatedata = {
            details:detail.data,
            externalid:externalid.data,
            recommendations:recommendations.data.results.map((m)=>m),
            similar:similar.data.results,
            videos:videos.data.results.find((m)=>m.type === "Trailer"),
            watchproviders:watchproviders.data.results.IN,
            translations:translations.data.translations
        }
        dispatch(loadMovie(theultimatedata));
    } catch (error) {
        console.log("Error : ",error);
    }
}