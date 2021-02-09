var division = document.getElementById("weather-container")

division.style.display = "flex";
division.style.justifyContent = "space-evenly";
division.style.flexFlow = "row wrap";
division.style.padding = "1rem";
division.style.flexGrow = 2;
division.style.backgroundColor = "#2F4F4F";




async function weather(geoLocation) {

    var response = await fetch("https://api.openweathermap.org/data/2.5/weather?" + "lat=" + geoLocation[0] +"&lon=" + geoLocation[1] + "&appid=e515c516e91e65d8055d288a99162d82");

    var data = await response.json();
    console.log(data);

    var fahrenheit = data.main.temp / 4;
    var celsius = ((fahrenheit - 32) * (5/9));

    alert("Weather Today :  " + data.weather[0].description + "   Temperature :  " + celsius.toFixed(2) + " *c");
  
}










async function country() {
  
    var response = await fetch("https://restcountries.eu/rest/v2/all");

    var data = await response.json();

    for (let index = 0; index < data.length; index++) {

      var countrygrid = document.createElement("div");
      
      //country style
      countrygrid.style.width = "28em";

      countrygrid.setAttribute("class","country");
      
      //country name
      var para = document.createElement("p");
      para.setAttribute("class","countryname");
      para.innerText = data[index].name;
      

      //country flag
      var image = document.createElement("img");
      image.setAttribute("class","countryflag");
      image.src = data[index].flag;
      image.alt = "flag";

      
      //country details

      var body1 = document.createElement("div");
      body1.setAttribute("class","countrybodysmall");

      var body2 = document.createElement("div");
      body2.setAttribute("class","countrybodybig");


      var button = document.createElement("button");
      button.setAttribute("class","submitbutton");

      button.innerText = "Click for Weather";
      button.style.backgroundImage = "linear-gradient(to right, #696969 , #D2B48C)";

      button.onclick = async function () {
        await weather(data[index].latlng);
        
      }


      var countryCode = "Country Code: "+data[index].alpha3Code;
      var countryRegion = "Region: "+data[index].region;
      var countryCapital = "Capital: "+data[index].capital;

      var h1 = document.createElement("h5");
      h1.setAttribute("class","h5");
      var h2 = document.createElement("h5");
      h1.setAttribute("class","h5");
      var h3 = document.createElement("h5");
      h1.setAttribute("class","h5");
      
      h1.innerText = countryCode;
      h2.innerText = countryCapital;
      h3.innerText = countryRegion;

      body1.append(h2,h3,h1);
      body2.append(body1, button);

      body2.style.textAlign = "center";
      countrygrid.append(para, image, body2);

      countrygrid.style.backgroundImage = "linear-gradient(to right, #696969 , #D2B48C)";
      countrygrid.style.alignContent = "center";

      division.appendChild(countrygrid);
      //console.log(data[index]);

      
    }
  }


country();