//when they click submit, they get value from input
const clickNasa = document.querySelector('button');

clickNasa.addEventListener('click', function () {
  const dateNasa = document.querySelector('input').value;
  const nasaPic = document.querySelector('.pic');
  fetch(`https://api.nasa.gov/planetary/apod?date=${dateNasa}&api_key=ZukP91Dy7erR5QnmOyiXdzrLdprsJfFNc5it12Mp`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
          nasaPic.src = response.url;
          console.log(response);
      //     console.log(response.url;
      //     response.date.forEach(el => {
      //       imgArr.push(el.dateNasa)
      //     })
      //     setInterval(() => {
      //       document.querySelector("img").src = imgArr[count]
      //       count++
      //     }, 2000)
      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });
},false);
