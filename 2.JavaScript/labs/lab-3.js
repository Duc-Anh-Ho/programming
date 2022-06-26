// Lab 3.1
/* 
'9'-'5' -> 4
'19'-'13'+'17' -> '617'
'19'-'13'+17 -> 23
'123'<57 -> true (sai)
5+6+'4'+9-4-2 -> 1143
*/
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

//Lab 3.2

// const numNeighbours = prompt('How many neighbour countries does your country have?')

// if (numNeighbours == 1) console.log('Only 1 border!');
// else if (numNeighbours > 1) console.log('More than 1 border');
// else console.log('No borders');


// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'))

// if (numNeighbours === 1) console.log('Only 1 border!');
// else if (numNeighbours > 1) console.log('More than 1 border');
// else console.log('No borders');

//Lab 3.3
const countryName = "Vietnam";
// const language = "Vietnamese";
let language = "English";
// let population = 90;
let population = 40;
const isIsland = false;
if (language === "English" && population < 50 && isIsland === false) {
    console.log (`You should live in ${countryName} :)`)
} else console.log(`${countryName} does not meet your criteria :(`)

//Lab 3.4
language = 'Vietnamese';
switch (language) {
    case "Chinese":
        console.log("MOST number of native speakers");
        break;
    case "Mandarin":
        console.log("MOST number of native speakers");
        break;
    case "Spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "English":
        console.log("3rd place");
        break;
    case "Hindi":
        console.log("Number 4");
        break;
    case "Arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D");
        break;
}

//Lab 3.5
population = 90;
console.log(population >= 33 ? `${countryName}'s population is above average` : `${countryName}'s population is below average`);

//Lab 3.6.1
let avrDolphins = (97 + 112 + 101) / 3;
let avrKoalas = (109 + 95 + 106) / 3;
let winner = 'No one win!';

if (avrDolphins > avrKoalas && avrDolphins >= 100) winner = "Dolphins win!";
else if (avrDolphins < avrKoalas && avrKoalas >= 100) winner = "Koalas win!";
else if (avrDolphins === avrDolphins && avrDolphins >= 100) winner = "Draw!";

console.log (avrDolphins, avrKoalas)
console.log(winner)

//Lab 3.6.2
const bill = 430;
const tip = 300 >= bill && bill >= 50 ? (15 * bill) / 100 : (20 * bill) / 100;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`);
