
/*  Nivell 1 -Exercici 1 */
let buttonJoke = document.getElementById("next");
let changeText = document.getElementById("textJoke");

let header: object = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};
let sentence:string;

let apiUrl: Request = new Request("https://icanhazdadjoke.com");


//Function complete for exercise 2
const getJoke = async () => {
  const response = await fetch(apiUrl, header);
  const data = await response.json(); // Convert the response into JSON
  const { joke } = data; // Get the joke from the JSON Object
  sentence = joke;
  console.log(joke);
  const nextJoke = (changeText.innerHTML = `"${joke}"`);
  return nextJoke;
};
/* CAMBIEM A FRASES DE BREAKING BAD */
// buttonJoke.addEventListener("click", getJoke);

/*  Nivell 2 -Exercici 4 */
let weather = document.querySelector(".weatherTime");
let apiUrlWeather: Request = new Request("https://www.el-tiempo.net/api/json/v2/provincias/08");

const getWeather = async () => {
  const response = await fetch(apiUrlWeather, header);
  const data = await response.json(); // Convert the response into JSON
  const {today, title, ciudades} = data // Desestructuring data
  const temp = ciudades[6].temperatures
  const {p} = today
  weather.innerHTML = `<strong>${title} : </strong> ${name} ${p}
                        <p class=temp>Temp. máx: ${temp.max}<span>&#176;</span> C</p>
                        <p class=temp>Temp. min: ${temp.min}<span>&#176;</span> C</p>`;
  return data;
};
getWeather()

/*  Nivell 1 -Exercici 3 */
let reportAcudits: Array<object> = []
let d: Date = new Date();
let resultDate: string =  d.toISOString().split('T')[0];
let joke: Joke;


class Joke{
  public text: string;
  public score: number;
  public date: string;
  

  constructor(text: string, score: number, date: string){
    this.text = text;
    this.score = score;
    this.date = date;
  }

  
  register(){
    console.log(`${this.text} with puntuation ${this.score} is registered at ${this.date}`);
  }
}


document.querySelector(".score-1").addEventListener("click", ()=> {
  joke = new Joke(sentence, 3, resultDate);
  nextJoke(joke)
})

document.querySelector(".score-2").addEventListener("click", ()=> {
  joke = new Joke(sentence,2, resultDate);
  nextJoke(joke)
})

document.querySelector(".score-3").addEventListener("click", ()=> {
  joke = new Joke(sentence,1, resultDate);
  nextJoke(joke)
})

function nextJoke(joke: Joke){
  reportAcudits.push(joke);
  console.log(reportAcudits);
  getJokeBB();
  return null;
}

/* NIVELL 2 - EXERCICI 5 */
const getJokeBB = async () =>{
  let apiUrl: Request = new Request("https://breaking-bad-quotes.herokuapp.com/v1/quotes");

  const p = document.createElement("p");
  p.id = "author";

  const response = await fetch(apiUrl, header);
  const data = await response.json();
  sentence = data[0].quote;
  changeText.innerHTML = `"${sentence}"`
  p.innerHTML= `<strong>${data[0].author}</strong>`
  changeText.appendChild(p);
  document.getElementById("author").style.paddingTop="20px";
  return sentence;
}


/* CAMBIEM A FRASES DE BREAKING BAD 
  https://breaking-bad-quotes.herokuapp.com/v1/quotes */
buttonJoke.addEventListener("click", getJokeBB);

