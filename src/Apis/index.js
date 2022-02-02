import axios from 'axios';
export const youtTube = (query='')=>{
   return  axios.get('https://www.googleapis.com/youtube/v3/search',{ 
       params: {
            part:'snippet',
            maxResults: 10,
            key:'AIzaSyA0JeivyTh1g8iR1KiCKzzma7rfdjuFBFI',
            q:query,
            safeSearch:'moderate'
        }
    });
}