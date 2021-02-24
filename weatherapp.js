//var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
//var clouds = document.querySelector('.clouds');



//button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=f5412ce135120acb227a74439b364374')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  //var cloudsValue = data['clouds'][0];

  main.innerHTML = nameValue;
  desc.innerHTML = "Description - "+descValue.toUpperCase();
  temp.innerHTML = "Temp - "+Math.round(tempValue -273)+"\t° Celsius";
  //clouds.innerHTML= "Cloud condition :"+(cloudsValue;
  //input.value ="";

})

//.catch(err => alert("The Weather is displayed here"));

