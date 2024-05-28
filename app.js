// API -> zuugch /
// fetch() -> api ruu huselt/requist yvuulna
// response -> huseltiin hariu
// response -> 200 : approved, 404,300,500: error
// promis -> hariu ireh amlalt -> .then()
// json() -> zambaraagui data g tsegtstei gargaj iruuleh 
fetch('https://fakestoreapi.com/products').then(
	response => response.json()
).then(
	product => {
		console.log(product);
		console.log(product[0].title)
		console.log(product[product.length-1].rating.rate)
	}
)
// [{"id":1,"userId":1,"date":"2020-03-02T00:00:00.000Z,}
fetch('https://fakestoreapi.com/carts').then(
	response => console.log(response)
)
const name = document.querySelector(".name")
const temp = document.querySelector(".temp")
const wind = document.querySelector(".wind")
const desc = document.querySelector(".desc")
const searchBtn = document.getElementsByTagName('button')[0];
const input = document.getElementsByTagName('input')[0];
searchBtn.addEventListener("click",()=>{
	let city = input.value;
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd`).then(
	response => response.json()
).then(
	data => {
		console.log(data);
		console.log(data.name);
		console.log(data.weather[0].description);
		name.innerText = data.name
		temp.innerText = data.main.temp
		desc.innerText = data.weather[0].description
		wind.innerText = data.wind.speed
	}
)
});