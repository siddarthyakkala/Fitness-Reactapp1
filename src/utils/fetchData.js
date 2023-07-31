export const exerciseOptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': '2b00ea479emsha99f49c2d112f51p1e0033jsne68269bccaac',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'c40cc1d2cdmsh7832d0c5b8179d4p17abc9jsn13e03a35e07d',
    },
  };

export const fetchData=async (url,options) => {
   const res=await fetch(url,options);
   const data=await res.json();

   return data;
}