var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){   
     $('.top-header').removeClass('fixed');
   } else {
     $('.top-header').addClass('fixed');
   }
   lastScrollTop = st;
});

fetch('http://api.openweathermap.org/data/2.5/weather?q=Vinnytsia,ua&APPID=42a456b2341ea5ea195bc8c1cc554386').then(function (resp) {return resp.json() }).then(function (data) {

  let dateNow = new Date();
  let monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let day = dateNow.getDate(),
  month = monthes[dateNow.getMonth()],
  year = dateNow.getFullYear();
  
  document.getElementById('dateId').innerHTML = day + ' ' + month + ' ' + year;

    document.getElementById('city-name').textContent = data.name;

    document.getElementById('weather').textContent = Math.round(data.main.temp - 273);

    document.getElementById('cloud').textContent = data.wind.deg;

    document.getElementById('snow').textContent = data.main.humidity;

    document.getElementById('wind').textContent = data.wind.speed;
    });