document.addEventListener("DOMContentLoaded", function () {
  let addSquareBtn = document.createElement("button");
  let sqrText = document.createTextNode("Add Square");
  let container = document.createElement("div");
  let sqrId = 1;
  addSquareBtn.appendChild(sqrText);
  document.body.appendChild(addSquareBtn);
  document.body.appendChild(container);

  addSquareBtn.addEventListener("click", function () {
    let square = document.createElement("div");
    let sqrText = document.createElement("h1");
    square.classList.add("square");
    sqrText.classList.add("square-text");

    container.appendChild(square);
    square.id = sqrId++;
    sqrText.appendChild(document.createTextNode(`${square.id}`));
    square.appendChild(sqrText);

    square.addEventListener("click", function () {
      let colors = [
        "red",
        "blue",
        "green",
        "orange",
        "brown",
        "yellow",
        "pink",
      ];
      let randomNum = Math.floor(Math.random() * colors.length);
      square.style.backgroundColor = colors[randomNum];
    });

    square.addEventListener("dblclick", function () {
      if (square.nextSibling && square.id % 2 == 0) {
        square.nextSibling.remove();
      } else if (!square.nextSibling && square.id % 2 == 0) {
        alert("Nothing after this to remove!");
      } else if (square.previousSibling && square.id % 2 !== 0) {
        square.previousSibling.remove();
      } else if (!square.previousSibling && square.id % 2 !== 0) {
        alert("Nothing before this to remove!");
      }
    });

    sqrText.style.display = "none";

    square.addEventListener("mouseover", function () {
      sqrText.style.display = "flex";
      sqrText.style.justifyContent = "center";
    });
    square.addEventListener("mouseout", function () {
      sqrText.style.display = "none";
    });
  });
});
