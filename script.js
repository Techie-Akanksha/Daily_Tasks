// Select elements
let div = document.querySelector("div");
let h1 = document.querySelector("h1");

// Modify heading
h1.innerText = "Alisa Karimiboroujeni";
h1.style.textAlign = "center";
h1.style.fontWeight = "400";

// Create image
let img = document.createElement("img");

// Set image source
img.setAttribute("src", "https://images.pexels.com/photos/15617836/pexels-photo-15617836.jpeg");

// Style image
img.style.width = "300px";
img.style.height = "200px";
img.style.objectFit = "cover";

// Add image inside div (top)
div.append(img);

let p = document.createElement("p");
p.innerText = "Alisa Karimiboroujeni is a passionate web developer focused on creating clean, user-friendly digital experiences. He enjoys learning new technologies and continuously improving his skills."
p.style.margin = "20px"
div.append(p)