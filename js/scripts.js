window.onload = function () {
  const flavors = ["Cotton Candy", "Love Potion 31", "Tonight Dough"];
  let ul = document.createElement("ul")
  document.body.appendChild(ul)


  flavors.forEach(function (flavor) {
    const li = document.createElement("li");
    debugger;
    li.append(flavor);
    ul.append(li);
    console.log(li.innerText)
  }
  );
}
