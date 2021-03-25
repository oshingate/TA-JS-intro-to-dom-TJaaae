let gal = document.querySelector(".gal");
got.houses.forEach((house) => {
  house.people.forEach((people) => {
    let article = document.createElement("article");
    article.classList.add("card", "flex-30");

    let top = document.createElement("div");
    top.classList.add("flex");

    // let imgdiv = document.createElement("div");
    // imgdiv.classList.add("imageDiv", "flex-20");
    let img = document.createElement("img");
    img.classList.add("flexible-img", "flex-20");
    img.src = people.image;

    let name = document.createElement("h4");
    name.innerText = people.name;
    name.classList.add("flex-70");
    top.append(img, name);

    let detail = document.createElement("p");
    detail.innerText = people.description;
    let btn = document.createElement("button");
    btn.classList.add("btn", "btn-sec");
    btn.innerText = "Learn More";

    article.append(top, detail, btn);
    gal.append(article);
  });
});
