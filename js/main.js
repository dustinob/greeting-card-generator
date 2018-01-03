let cardContainer = document.getElementById('card-container');
let cardImage = document.getElementById('card-image');
let cardTitle = document.getElementById('card-title');
let cardMsg = document.getElementById('card-msg');
let cardFrom = document.getElementById('card-from');

let formTitle = document.getElementById('title');
let formFrom = document.getElementById('from');
let formMsg = document.getElementById('msg');
let formImage = document.getElementById('image');

let saveButton = document.getElementById('save-button');

formTitle.addEventListener('keyup', function(event) {
  cardTitle.innerText = event.target.value;
})

formFrom.addEventListener('keyup', function(event) {
  cardFrom.innerText = event.target.value;
})

formMsg.addEventListener('keyup', function(event) {
  cardMsg.innerText = event.target.value;
})

formImage.addEventListener('change', function(event) {
  cardImage.src = event.target.value;
})

saveButton.addEventListener('click', function(event) {
  event.preventDefault();

  html2canvas(cardContainer, {
    onrendered: function(canvas) {
      let myImage = canvas.toDataURL("image/png");
      downloadURI("data:" + myImage, "HappyHolidays.png");
    }
  });
});

function downloadURI(uri, name) {
  let link = document.createElement("a");
  link.download = name;
  link.href = uri;
  link.click();
}
