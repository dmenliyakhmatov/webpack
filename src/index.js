import { anotherHello } from "./another-index.js";
import "./index.css";
import image from "./image.png";

console.log("Hello webpack");
anotherHello();

const h1 = document.createElement("h1");
h1.innerText = "Hot load";

document.body.append(h1);

const arr = [1, 3, 2];

const splicedArr = [...arr].splice(0, 2, 190);

console.log(arr);
console.log(splicedArr);
///comment

const imageElement = document.createElement("img");
imageElement.src = image;

document.body.append(imageElement);
