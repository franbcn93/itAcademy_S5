
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
let d: Date;
let joke: Joke;


class Joke{
  public text: string;
  public score: number;
  public date: Date;
  

  constructor(text: string, score: number, date: Date){
    this.text = text;
    this.score = score;
    this.date = date;
  }

  
  register(){
    console.log(`${this.text} with puntuation ${this.score} is registered at ${this.date}`);
  }
}


document.querySelector(".score-1").addEventListener("click", ()=> {
  d = new Date();
  joke = new Joke(sentence, 3, d);
  reportAcudits.push(joke);
  console.log(reportAcudits);
})

document.querySelector(".score-2").addEventListener("click", ()=> {
  d = new Date();
  joke = new Joke(sentence,2, d);
  reportAcudits.push(joke);
  console.log(reportAcudits);
})

document.querySelector(".score-3").addEventListener("click", ()=> {
  d = new Date();
  joke = new Joke(sentence,1, d);
  reportAcudits.push(joke);
  console.log(reportAcudits);
})

/* NIVELL 2 - EXERCICI 5 */
function getJokeBB (){
  const p = document.createElement("p");
  p.id = "author";
  
  fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
        .then(response => response.json())
        .then(json => {
          changeText.innerHTML = `"${json[0].quote}"`
          p.innerHTML= `<strong>${json[0].author}</strong>`
          changeText.appendChild(p);
          document.getElementById("author").style.paddingTop="20px";
        });
}


/* CAMBIEM A FRASES DE BREAKING BAD 
  https://breaking-bad-quotes.herokuapp.com/v1/quotes */
buttonJoke.addEventListener("click", getJokeBB);

