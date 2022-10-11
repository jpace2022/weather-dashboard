var btn = document.getElementById("btn")
var seachedcity = document.getElementById("seachedcity")
var cityname = document.getElementById("cityname")
function getcords(event){
    event.preventDefault()
    console.log(seachedcity.value)
var city = seachedcity.value
var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b6a175dbcda214328767ec5bb50e19a1`

fetch(url).then(response=>{
    console.log(response)
    return response.json()
}) .then(data =>{
    
    console.log(data)
    cityname.textContent = data.name
})
}   
function fetchweather(){
    
}
function displaycurrentweather(){

}
function createcitybutton (){

}
function displayforcastweather (){

}
function savecitytols() {
    
}
btn.addEventListener("click", getcords)