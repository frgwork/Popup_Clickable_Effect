const popupBtn = document.querySelector('.popup-btn');
const popupWrap = document.querySelector('.popup-wrap');
const popupClose = document.querySelector('.popup-close');

let flag = false;

popupBtn.addEventListener('click', () => {
  fadeIn(popupWrap, 1000);
  flag = true;
});
popupClose.addEventListener('click', () => {
  fadeOut(popupWrap, 1000);
  flag = false;
});

const fadeIn = (el, timeout) => {
  el.style.opacity = 0;
  el.style.display = 'block';
  el.style.transition = `opacity ${timeout}ms`;
  setTimeout(() => {
    el.style.opacity = 1;
  }, 10);
};

const fadeOut = (el, timeout) => {
  el.style.opacity = 1;
  el.style.transition = `opacity ${timeout}ms`;
  el.style.opacity = 0;

  setTimeout(() => {
    el.style.display = 'none';
  }, timeout);
};



// $(document).ready(function () {
//   $('.popup-btn').click(function (e) {
//     $('.popup-wrap').fadeIn(500);
//     $('.popup-box').removeClass('.transform-out').addClass('.transform-in');
//     e.preventDefault();
//   });

//   $('.popup-close').click(function (e) {
//     $('.popup-wrap').fadeOut(500);
//     $('.popup-box').removeClass('.transform-in').addClass('.transform-out');
//     e.preventDefault();
//   });
// });
