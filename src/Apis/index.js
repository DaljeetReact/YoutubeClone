import axios from 'axios';
export const youtTube = (query='Love Songs')=>{
   return  axios.get('https://youtube-v31.p.rapidapi.com/search',{ 
       params: {
            part:'snippet',
            maxResults: 5,
            q:query,
            safeSearch:'moderate'
        },
        headers: {
            'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
            'x-rapidapi-key': 'f074a64f16msh0b559fcfb6b71f4p1dc602jsn91bb5100c3bf'
        }
    });
}