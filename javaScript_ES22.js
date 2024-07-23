//Förändringar i JavaScript för ES22

//.at() metoden
//.at() är vanligt i andra programmeringspråk som python nu får JavaScript det äntligen

//Om man till exempel tar en array
//Frågan är hur du får fram näst sista numret i arrayen
const arr = [100, 200, 400, 5000, 10];

//Det förra sättet var att skriva: arr[arr.lengt - 2]
arr.at(-2); //Ger oss det näst sista numret i arrayen "5000"


arr.at(0) //Ger oss det första talet i arrayen "100"
arr.at(-1) //Ger oss det sista eftersom vi räknar bakifrån som blir "10"
