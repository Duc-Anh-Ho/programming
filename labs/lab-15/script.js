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
// createImage("img/img-1.jpg")
//   .then((img) => {
//     currentImg = img;
//     console.log("Image 1 loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//     return createImage("img/img-2.jpg");
//   })
//   .then((img) => {
//     currentImg = img;
//     console.log("Image 2 loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//   })
//   .catch((err) => console.error(err));

//Lab 15.2.1
const loadNPause = async function () {
  try {
    let img = await createImage("img/img-1.jpg");
    console.log("Img 1 loaded");
    await wait(2);
    img.style.display = "none";

    img = await createImage("img/img-2.jpg");
    console.log("Img 2 loaded");
    await wait(2);
    img.style.display = "none";
  } catch (err) {
    console.log(err);
  }
};

// loadNPause();

//Lab 15.2.2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));
    console.log(imgs);
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach((img) => img.classList.add("parallel"));
  } catch (err) {
    console.log(err);
  }
};
loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
