"use strict";

//Lab 15.1

const imgContainer = document.querySelector(".images");
function wait(secs) {
  return new Promise(function (res) {
    setTimeout(res, secs * 1000);
  });
}

function createImage(imgPath) {
  return new Promise(function (res, rej) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      // console.log(img);
      imgContainer.append(img);
      res(img);
    });

    img.addEventListener("error", function () {
      rej(new Error("Image not found"));
    });
  });
}
let currentImg;
createImage("img/img-1.jpg")
  .then((img) => {
    currentImg = img;
    console.log("Image 1 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then((img) => {
    currentImg = img;
    console.log("Image 2 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
  })
  .catch((err) => console.error(err));
