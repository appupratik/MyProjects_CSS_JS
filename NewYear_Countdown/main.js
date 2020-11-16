const countdown = new Date('Jan 1,2021 00:00:00').getTime();

function zero(a) {
    if (a < 10) {
        a = '0' + a;
    } else {
        a = a;
    }
    return a;
}

function vats() {
    const now = new Date().getTime();
    gap = countdown - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / (day));
    const h = Math.floor((gap % (day)) / (hour));
    const m = Math.floor((gap % (hour)) / (minute));
    const s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = zero(d);
    document.getElementById('hour').innerText = zero(h);
    document.getElementById('minute').innerText = zero(m);
    document.getElementById('second').innerText = zero(s);
}

setInterval(() => { vats() }, 1000);