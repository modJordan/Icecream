window.onload = function () {
  const flavors = ["Cotton Candy", "Love Potion 31", "Tonight Dough"];
  let div = document.createElement("div")
  document.body.appendChild(div)


  flavors.forEach(function (flavor) {
    const p = document.createElement("p");
    debugger;
    p.append("Favorite flavors: ", flavor);
    div.append(p);
    console.log(p.innerText)
  }
  );
}
