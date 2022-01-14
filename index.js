var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
/*  Nivell 1 -Exercici 1 */
var buttonJoke = document.getElementById("next");
var changeText = document.getElementById("textJoke");
var header = {
    method: "GET",
    headers: {
        Accept: "application/json"
    }
};
var sentence;
var apiUrl = new Request("https://icanhazdadjoke.com");
//Function complete for exercise 2
var getJoke = function () { return __awaiter(_this, void 0, void 0, function () {
    var response, data, joke, nextJoke;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(apiUrl, header)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                joke = data.joke;
                sentence = joke;
                console.log(joke);
                nextJoke = (changeText.innerHTML = "\"".concat(joke, "\""));
                return [2 /*return*/, nextJoke];
        }
    });
}); };
/* CAMBIEM A FRASES DE BREAKING BAD */
// buttonJoke.addEventListener("click", getJoke);
/*  Nivell 2 -Exercici 4 */
var weather = document.querySelector(".weatherTime");
var apiUrlWeather = new Request("https://www.el-tiempo.net/api/json/v2/provincias/08");
var getWeather = function () { return __awaiter(_this, void 0, void 0, function () {
    var response, data, today, title, ciudades, temp, p;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(apiUrlWeather, header)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                today = data // Desestructuring data
                .today, title = data // Desestructuring data
                .title, ciudades = data // Desestructuring data
                .ciudades;
                temp = ciudades[6].temperatures;
                p = today.p;
                weather.innerHTML = "<strong>".concat(title, " : </strong> ").concat(name, " ").concat(p, "\n                        <p class=temp>Temp. m\u00E1x: ").concat(temp.max, "<span>&#176;</span> C</p>\n                        <p class=temp>Temp. min: ").concat(temp.min, "<span>&#176;</span> C</p>");
                return [2 /*return*/, data];
        }
    });
}); };
getWeather();
/*  Nivell 1 -Exercici 3 */
var reportAcudits = [];
var d = new Date();
var resultDate = d.toISOString().split('T')[0];
var joke;
var Joke = /** @class */ (function () {
    function Joke(text, score, date) {
        this.text = text;
        this.score = score;
        this.date = date;
    }
    Joke.prototype.register = function () {
        console.log("".concat(this.text, " with puntuation ").concat(this.score, " is registered at ").concat(this.date));
    };
    return Joke;
}());
document.querySelector(".score-1").addEventListener("click", function () {
    joke = new Joke(sentence, 3, resultDate);
    nextJoke(joke);
});
document.querySelector(".score-2").addEventListener("click", function () {
    joke = new Joke(sentence, 2, resultDate);
    nextJoke(joke);
});
document.querySelector(".score-3").addEventListener("click", function () {
    joke = new Joke(sentence, 1, resultDate);
    nextJoke(joke);
});
function nextJoke(joke) {
    reportAcudits.push(joke);
    console.log(reportAcudits);
    getJokeBB();
    return null;
}
/* NIVELL 2 - EXERCICI 5 */
var getJokeBB = function () { return __awaiter(_this, void 0, void 0, function () {
    var apiUrl, p, response, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                apiUrl = new Request("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
                p = document.createElement("p");
                p.id = "author";
                return [4 /*yield*/, fetch(apiUrl, header)];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                sentence = data[0].quote;
                changeText.innerHTML = "\"".concat(sentence, "\"");
                p.innerHTML = "<strong>".concat(data[0].author, "</strong>");
                changeText.appendChild(p);
                document.getElementById("author").style.paddingTop = "20px";
                return [2 /*return*/, sentence];
        }
    });
}); };
/* CAMBIEM A FRASES DE BREAKING BAD
  https://breaking-bad-quotes.herokuapp.com/v1/quotes */
buttonJoke.addEventListener("click", getJokeBB);
