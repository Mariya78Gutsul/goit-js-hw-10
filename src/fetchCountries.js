function fetchCountries(name) {
   const BASE_URL= `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;
return fetch(BASE_URL).then(response => {
   if(response.status === 404) {
      removeEl();
      throw new Error(error);
   }
   return response.json();
})
 };

 export default fetchCountries;