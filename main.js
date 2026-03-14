const slider = document.querySelector('.slider .big');
const prevBtn = document.querySelector('.slider .btn.prev');
const nextBtn = document.querySelector('.slider .btn.next');
const radio = document.querySelectorAll('.slider .radio input');
const items = document.querySelectorAll('.slider .big .item');

let cur = 0;

nextBtn.onclick = () => {
    cur -= 100;
    cur == items.length * -100 ? cur = 0 : '';
    slider.style.left = `${cur}%`; 
    radio[cur / -100].checked = true;
};

prevBtn.onclick = () => {
    cur += 100;
    cur > 0 ? cur = (items.length - 1) * -100 : '';
    slider.style.left = `${cur}%`;
    radio[cur / -100].checked = true;
};

for (let i = 0; i < radio.length; i++) {
    radio[i].onchange = () => {
        cur = i * -100;
        slider.style.left = `${cur}%`;
    };
};