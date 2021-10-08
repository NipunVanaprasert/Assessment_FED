var btn_purchase = document.querySelector(".purchase");
var btn_close = document.querySelector(".close");
var btn_close2 = document.querySelector(".close2");
var modal = document.querySelector(".modal");
var modal2 = document.querySelector(".modal2");

fetch("information.json")
  .then(function (res) {
    console.log(res);
    return res.json();
  })
  .then(function (data) {
    console.log(data.product);
    appendData(data.product);
    addCart(data.product);
  })
  .catch(function (err) {
    console.log("error" + err);
  });

function appendData(data) {
  var mainContainer = document.querySelector(".card-wrap-inner");
  data.map((info) => {
    var img = document.createElement("img");
    var card = document.createElement("div");
    var card_header = document.createElement("div");
    var card_content = document.createElement("div");
    var price = document.createElement("div");
    var btn = document.createElement("button");
    var h3 = document.createElement("h3");
    var head_topic = document.createElement("h3");

    price.className = "price";
    btn.className = "btn-order";
    btn.innerText = "Order";
    h3.innerText = "$" + info.price;
    price.appendChild(h3);
    price.appendChild(btn);

    card_header.className = "card-header";
    img.src = info.picture;
    img.className = "img-iphone";
    card_header.appendChild(img);
    card_content.className = "card-content";
    head_topic.style.padding = "1rem";
    head_topic.innerHTML = info.name;
    card_content.appendChild(head_topic);
    card_content.appendChild(price);

    card.id = "card";
    card.appendChild(card_header);
    card.appendChild(card_content);

    mainContainer.appendChild(card);

    btn.addEventListener("click", function () {
      modal2.style.display = "initial";
      var name = document.getElementById("name");
      var brand = document.getElementById("brand");
      var description = document.getElementById("description");
      var price = document.getElementById("price");
      var picture = document.getElementById("picture");
      console.log("this is product", info);
      name.innerHTML = info.name;
      picture.className = "img-iphone";
      picture.style.borderRadius = "0";
      picture.src = info.picture;
      brand.innerHTML = info.brand;
      description.innerHTML = info.description;
      price.innerHTML = "$" + info.price;
      addCart(info);
    });
  });
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

btn_purchase.addEventListener("click", function () {
  modal.style.display = "initial";
});

btn_close.addEventListener("click", function () {
  modal.style.display = "none";
  modal2.style.display = "none";
});

btn_close2.addEventListener("click", function () {
  modal.style.display = "none";
  modal2.style.display = "none";
});

function addCart(data) {
  var btnAdd = document.getElementById("btn-add");

  btnAdd.addEventListener("click", function () {
    var list = [];
    list.push(data.price);
    console.log(list);
    console.log("cart2", data.name);
  });
}
