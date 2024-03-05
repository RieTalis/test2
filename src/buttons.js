let readmore = document.querySelector('.description__read-more')
let paraghraph = document.querySelector('.description__paragraph')
let readnext =  document.querySelector('.description__read-next')
let arrow = document.querySelector('.description__arrow')
let hidden = false

readmore.onclick = function() {
    if (!hidden) {
        hidden = true
        paraghraph.classList.toggle('description__paragraph--hidden')
        arrow.style.transform = "rotate(180deg)"
        arrow.style.transition = "0.6s"
        readnext.textContent = 'Скрыть'
    } else if (hidden) {
        paraghraph.classList.toggle('description__paragraph--hidden')
        arrow.style.transform = "rotate(360deg)";
        readnext.textContent = 'Читать далее';
        hidden = false
    }
}

let burger = document.querySelector('.navigation__icon--pic1')
let aside = document.querySelector('.aside-menu')
let closemenu = document.querySelector('.feedback__close')
let overlay = document.querySelector('.overlay')
let asideclose = document.querySelector('.svg-image-aside')

burger.onclick = function() {
    aside.classList.add('aside-menu__show')
    overlay.classList.toggle('overlay--show')
    overlay.onclick = function() {
        aside.classList.remove('aside-menu__show')
        overlay.classList.remove('overlay--show')
        feedback.classList.remove('feedback__show')
        modalcall.classList.remove('modal-call__show')
    }
}

asideclose.onclick = function () {
    aside.classList.remove('aside-menu__show')
    overlay.classList.remove('overlay--show')
}

let feedbackbutton = document.querySelector('.svg-image-feedback')
let feedback = document.querySelector('.feedback')
let feedbackbutton2 = document.getElementById('feedback2')
let call = document.getElementById('svg-call')

call.onclick = function () {
    overlay.classList.add('overlay--show')
    modalcall.classList.add('modal-call__show')
    callclose.onclick = function () {
        overlay.classList.remove('overlay--show')
        modalcall.classList.remove('modal-call__show')
        aside.classList.remove('aside-menu__show')
    }
    overlay.onclick = function () {
        overlay.classList.remove('overlay--show')
        modalcall.classList.remove('modal-call__show')
        aside.classList.remove('aside-menu__show')
    }
}

feedbackbutton.onclick = function () {
    feedback.classList.add('feedback__show')
    overlay.classList.add('overlay--show')
    overlay.onclick = function() {
        overlay.classList.remove('overlay--show')
        feedback.classList.remove('feedback__show')
    }
}

feedbackbutton2.onclick = function () {
    feedback.classList.add('feedback__show')
    overlay.classList.add('overlay--show')
    overlay.onclick = function() {
        overlay.classList.remove('overlay--show')
        feedback.classList.remove('feedback__show')
        aside.classList.remove('aside-menu__show')
    }
}

closemenu.onclick = function () {
    feedback.classList.remove('feedback__show')
    overlay.classList.remove('overlay--show')
    aside.classList.remove('aside-menu__show')
}

let callclose = document.querySelector('.modal-call__close')
let callbutton = document.querySelector('.svg-image-call')
let modalcall = document.querySelector('.modal-call')

callbutton.onclick = function () {
    modalcall.classList.add('modal-call__show')
    overlay.classList.add('overlay--show')
    overlay.onclick = function() {
        overlay.classList.remove('overlay--show')
        modalcall.classList.remove('modal-call__show')
    }
}

callclose.onclick = function () {
    modalcall.classList.remove('modal-call__show')
    overlay.classList.remove('overlay--show')
}

let closebutton2 = document.querySelector('.brands__read-more')
let wrapper2 = document.querySelector('.swiper-wrapper--first')
let button2text = document.querySelector('.description__read-next--second')
let arrow2 = document.querySelector('.description__arrow--second')

closebutton2.onclick = function() {
    if (!hidden) {
        hidden = true
        wrapper2.classList.toggle('swiper-wrapper--opened')
        arrow2.style.transform = "rotate(180deg)"
        arrow2.style.transition = "0.6s"
        button2text.textContent = 'Скрыть'
    } else if (hidden) {
        wrapper2.classList.toggle('swiper-wrapper--opened')
        arrow2.style.transform = "rotate(360deg)";
        arrow2.style.transition = "0.6s"
        button2text.textContent = 'Показать все';
        hidden = false
    }
}

let button3text = document.querySelector('.description__read-next--third')
let closebutton3 = document.querySelector('.repair__read-more')
let wrapper3 = document.querySelector('.swiper-wrapper--second')
let arrow3 = document.querySelector('.description__arrow--third')

closebutton3.onclick = function() {
    if (!hidden) {
        hidden = true
        wrapper3.classList.toggle('swiper-wrapper2--opened')
        arrow3.style.transform = "rotate(180deg)"
        arrow3.style.transition = "0.6s"
        button3text.textContent = 'Скрыть'
    } else if (hidden) {
        wrapper3.classList.toggle('swiper-wrapper2--opened')
        arrow3.style.transform = "rotate(360deg)";
        arrow3.style.transition = "0.6s"
        button3text.textContent = 'Показать все';
        hidden = false
    }
}
