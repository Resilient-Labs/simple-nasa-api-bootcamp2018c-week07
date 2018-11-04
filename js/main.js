// 1. Enable user to enter a date
// 2. Return NASA's Picture of the day for that date
document.querySelector('button').onclick = function (){
  //variables for API attributes
    let date = document.querySelector('#date').value;
    let apiKey = "19bDUl7xNf4xU7WyuFHflwRuLF4EstBCziflq6c2";
    let apiURL = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey + "&date=" + date;
    let img = document.querySelector('#img')
    let title = document.querySelector('#title')
    let copy = document.querySelector('#copy')
    let exp = document.querySelector('#exp')
    let vid = document.querySelector('#vid')

    //function to fetch API info
    fetch(apiURL)

    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      // grabs url property of JSON file, sets equal to DOM image source
      if (response.media_type === "image"){
        img.src = response.url
        img.classList.remove("hidden");
        vid.classList.add("hidden");
        title.textContent = response.title
        copy.textContent = response.copyright
        exp.textContent = response.explanation
      }else{
        vid.src = response.url
        vid.classList.remove("hidden")
        img.classList.add("hidden")
        title.textContent = response.title
        copy.textContent = response.copyright
        exp.textContent = response.explanation
      }


    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("Date must be between June 15, 1995 and the present day. Must also be written in YYYY-MM-DD form.")
    });
  }
