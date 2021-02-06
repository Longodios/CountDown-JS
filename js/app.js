const mybirthday = "7 June 2021"
const daysEl = document.getElementById('dias');
const hoursEl = document.getElementById('horas');
const minutesEl = document.getElementById('minutos');
const secondsEl = document.getElementById('segundos');

function transform() {

    const myBirthdayDate = new Date(mybirthday);
    const actualDay = new Date();

    const totalSeconds = (myBirthdayDate - actualDay)

    const dias = Math.floor(totalSeconds / (1000 * 60 * 60 * 24));
    const horas = Math.floor((totalSeconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((totalSeconds % (1000 * 60 * 60) / (1000 * 60)));
    const segundos = Math.floor((totalSeconds % (1000 * 60)) / 1000);

    daysEl.innerHTML = dias;
    hoursEl.innerHTML = horas;
    minutesEl.innerHTML = minutos;
    secondsEl.innerHTML = segundos;

    console.log(dias, horas, minutos, segundos)
}



transform();
setInterval(transform, 1000);