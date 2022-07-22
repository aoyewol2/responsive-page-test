const colours = ['Purple', 'Magenta', 'Peach', 'Aqua'];

// for loops

let text = "";

for (let i = 0; i < colours.length; i++) {
  text += colours[i] + "<br>"
};

console.log(text);

document.getElementById("demo").innerHTML = text;
document.getElementById("demo-2").innerHTML = text;