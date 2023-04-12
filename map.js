const url = `https://jsonplaceholder.typicode.com/photos`;
const main = document.querySelector(".main");

const output = document.querySelector(".output");
const krug = document.querySelector(".squary");

// function showLoader() {
//   krug.style.display = "block";
//   document.body.style.background = "black";
// }

// function hideLoader() {
//   krug.style.display = "none";
//   document.body.style.background = "white";
// }

// showLoader();

fetch(url)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    let html = "";
    data.forEach((e) => {
      html += `<div class="card">
      <img
        src="${e.url}"
        alt=""
      />
    </div>`;
    });
    main.innerHTML = html;
    // hideLoader();
  });
