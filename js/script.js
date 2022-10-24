
//создаём кнопку "ещё", если количество вариантов времени больше 4-х
//если происходит клик на кнопку "ещё" блок со временем раскрывается
//на всю высоту.
let timeBoxes = document.querySelectorAll('.description__time-box');
timeBoxes.forEach(function (timeBox) {
    // console.log(timeBox.children.length);
    // console.log(timeBox.childElementCount);

    if (timeBox.childElementCount > 4) {
        timeBox.children[3].textContent = "ещё...";

        timeBox.children[3].addEventListener('click', function () {
            timeBox.classList.toggle('big-size');
        });
    }
});

//вставляем картинку
let imgPiter = document.querySelectorAll('.card__img');
for (let i = 1; i <= imgPiter.length; i++) {

    imgPiter[i - 1].style.background = `url(./assets/images/питер${[i]}.jpg)`;
    imgPiter[i-1].style.backgroundRepeat = 'no-repeat';
    imgPiter[i-1].style.backgroundSize = 'cover';
}
