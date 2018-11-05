window.addEventListener('load',() => {
   let img = document.querySelector('#img')
   let imgSec = document.querySelector('.imgSec');

   const dateCheck = (from,to,check) => {
      let fDate = Date.parse(from);
      let lDate =  Date.parse(to);
      let cDate = Date.parse(check);

      if((cDate <= lDate && cDate >= fDate)) {
          return true;
      } else {
         return false;
      }
   }

   const requestImg = x => {
      if(!x.includes('-')) {
         alert("wrong format");
         imgSec.style.display = 'none';
      } else {
         fetch("https://api.nasa.gov/planetary/apod?api_key=" + "19bDUl7xNf4xU7WyuFHflwRuLF4EstBCziflq6c2" + "&date=" + x)
         .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
         .then(response => {
            imgSec.style.display = 'block';
            img.style.display = 'block';
            img.src = response.url
            console.log(response);
         })
         .catch(error => {
               console.error('Error:', error);
            }
         );
      }
   }

   document.querySelector('button').addEventListener('click', () => {
      let date = document.querySelector('#date').value;
      console.log(date)
      if(dateCheck("06/16/1990","10/31/2100", date)) {
         requestImg(date);
      } else {
         imgSec.style.display = 'none';
         alert("not a valid date");
      }
   });

});
