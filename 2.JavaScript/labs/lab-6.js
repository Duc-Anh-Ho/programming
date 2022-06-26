"use strict";

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (temp) {
  let notice = "";
  for (let i = 0; i < temp.length; i++) {
    notice = notice + `${temp[i]}ºC in ${i + 1} days ... `;
  }
  //   console.log(`... 17ºC in 1 day ... 21ºC in 2 days ... 23ºC in 3 days ...`);
  console.log("... " + notice);
};
printForecast(data1);
printForecast(data2);
