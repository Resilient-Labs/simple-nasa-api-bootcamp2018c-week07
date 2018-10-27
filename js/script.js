let date = document.querySelector("#date");
let image = document.querySelector("#pod");
let info = document.querySelector("#describe");
let credit = document.querySelector("#cred");
let border = document.querySelector(".text");
let video = document.querySelector("#vid");

let dateInput = "";

date.addEventListener("change", function(){
  dateInput = date.value
  fetchPicture();
  border.style.borderLeft = "3px solid black";
});

// Get picture from api that matches date user typed in
function fetchPicture(){
  fetch(`https://api.nasa.gov/planetary/apod?date=${dateInput}&api_key=oBEYRtK6Nlj9drByEgNF4UlvQjcSMGoaY1OGTQdt`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
        console.log(response);
        if(response.media_type == "image"){
          info.textContent = response.explanation;
          image.src = response.url;
          credit.textContent = "Photo By: "+response.copyright;
        }else if (response.media_type == "video"){
          video.style.display= "flex";
          video.src = response.url;
          credit.textContent = "Video By: "+response.copyright;
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
}
