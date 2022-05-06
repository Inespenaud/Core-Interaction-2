
const M1 = document.querySelector('#message-1')
const M2 = document.querySelector('#message-2')
const M3 = document.querySelector('#message-3')
const weatherImage = document.querySelector('#weather-image')
const body = document.querySelector('body')
const navbar = document.querySelector('nav')
const footer = document.querySelector('footer')

window.onload = () =>{

    const code ='<div class="spinner-border text-primary" role="status">'+
    '<span class="sr-only">Loading...</span>'+'</div>'
    M1.textContent = 'Loading..'
    M2.innerHTML = code

    fetch('/weather?address='+encodeURIComponent("new york")).then((response) => {
        response.json().then((data) => {
            if(data.error){
                M1.textContent = data.error
            }else{
                var date = new Date();
                var str = date.toLocaleString('en-US', { timeZone: 'America/New_York' });

                if ((data.forecast).includes("Partly cloudy") == true){
                  weatherImage.src = "img/partly-cloudy.png"
                  body.classList.add("partly-cloudy");
                  navbar.classList.add("partly-cloudy-theme");
                  footer.classList.add("partly-cloudy-theme");
                }
                else if ((data.forecast).includes("sunny") == true){
                  weatherImage.src = "img/sunny.webp"
                  body.classList.add("sunny");
                  navbar.classList.add("sunny-theme");
                }
                else if ((data.forecast).includes("Clear with periodic clouds") == true){
                  weatherImage.src = "img/partly-cloudy.png"
                  body.classList.add("partly-cloudy");
                }
                else{
                  weatherImage.src = "img/rain.png"
                  body.classList.add("rain");
                }

                M1.textContent = "New York, United States"
                M2.textContent = data.forecast
                M3.textContent = str;
              }
        })
    })
}
