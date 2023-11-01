export async function fetchCars () {
    const headers = {
        'X-RapidAPI-Key': '3e13a6a8efmshec3ec60495281bap1d4a7ejsna64a6be11c3b',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });
    const result = await response.json();
    return result;
}