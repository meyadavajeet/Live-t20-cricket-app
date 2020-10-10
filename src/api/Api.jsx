const API_KEY = "RlaN51jTPzYsFXwuQ3vFcYdLpZ53";

//get all match 
export const getUpcommingMatches = async () => {
    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        return console.log("Error :", error);
    }
};

//getmatch detail associated with id

export const getMatchDetails = (id) => {
    const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;

    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error));
} 
