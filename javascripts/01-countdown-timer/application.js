const date = new Date("1 January 2022");

function calculate(date){
    var current = new Date();
    var difference = date - current   // miliseconds 1s = 1000ms

    return {
        seconds: format(Math.floor(difference / 1000) % 60),
        minutes: format(Math.floor(difference / 1000 / 60) % 60),
        hours: format(Math.floor(difference / 1000 / 60 / 60) % 24),
        days: format(Math.floor(difference / 1000/ 60 / 60 /24) % 365),
    }
}

function format(value){
    return value < 10 ? `0${value}` : value;
}

function counter(){
    numbers = calculate(date)
    document.getElementById('days').innerText = numbers.days;
    document.getElementById('hours').innerText = numbers.hours;
    document.getElementById('minutes').innerText = numbers.minutes;
    document.getElementById('seconds').innerText = numbers.seconds;
}

function start(){
    counter();
    setInterval(counter, 1000);
    document.getElementById('container').style.display = '';
}