
async function getSilentLocation() {
    try{
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok){
            throw new Error()
        }
        const data = await response.json();
        return data.city
        

    }
    catch(error){
        console.error("Error getting location")
        return null
    }
    
    // console.log(`Silent City: ${data.city}`);
    // console.log(`Country: ${data.country_name}`);
}
export default getSilentLocation;
