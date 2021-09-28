
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  var input = document.getElementById("city-input").value;
  console.log(input);
  const apiWeather = new API_WEATHER(input);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    
    .getThreeDayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      console.log(data);

      // On récupère l'information principal
   
      for(let a=0;a<=3;a++)
      {
       document.getElementById(a.toString().concat("-forecast-main")).innerHTML = data.list[a].weather[0].main;
       document.getElementById(a.toString().concat("-forecast-more-info")).innerHTML = data.list[a].weather[0].description;
       document.getElementById(a.toString().concat("-forecast-temp")).innerHTML = apiWeather.getHTMLElementFromIcon(data.list[a].weather[0].icon);
       document.getElementById(a.toString().concat("-weather-container")).innerHTML = `${data.list[a].temp.day}°C`;
       
      }
    
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
