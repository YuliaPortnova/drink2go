var c=document.querySelector(".slider__controls"),u=document.querySelector(".slider__control--prev"),_=document.querySelector(".slider__control--next"),r=document.querySelectorAll(".slider__item"),n=document.querySelectorAll(".slider__pagination-button"),l=e=>{r[e].classList.remove("slider__item--active"),n[e].classList.remove("slider__pagination-button--active"),n[e].disabled=!1},d=e=>{r[e].classList.add("slider__item--active"),n[e].classList.add("slider__pagination-button--active"),n[e].disabled=!0},a=e=>{u.disabled=e===0,_.disabled=e===r.length-1},m=()=>{if(r.length===0||!n||!c)return;let e=0;c.addEventListener("click",t=>{t.target.matches(".slider__control")&&(l(e),t.target.contains(u)&&(e-=1),t.target.contains(_)&&(e+=1),a(e),d(e))}),n.forEach((t,g)=>{t.addEventListener("click",()=>{l(e),e=g,a(e),d(e)})})};var i=document.querySelector(".form__slider"),o=document.querySelector(".form__input--min-price"),s=document.querySelector(".form__input--max-price");document.head.insertAdjacentHTML("beforeend",'<link rel="stylesheet" href="vendor/nouislider/nouislider.css">');var S=e=>{let t;return e<768?t=977:e<1440?t=1e3:t=966,{min:[0],max:[t]}};noUiSlider.create(i,{range:S(window.innerWidth),start:[0,900],step:1,connect:!0,format:{to:e=>e.toFixed(0),from:e=>parseFloat(e)}});var E=()=>{i.noUiSlider.on("slide",()=>{let[e,t]=i.noUiSlider.get();o.value=e,s.value=t}),o.addEventListener("input",()=>{i.noUiSlider.set([o.value,s.value])}),s.addEventListener("input",()=>{i.noUiSlider.set([o.value,s.value])}),window.addEventListener("resize",()=>{i.noUiSlider.updateOptions({range:S(window.innerWidth)})})},p=()=>{i.noUiSlider.set([0,900])};var v=document.querySelector(".main-header"),I=v.querySelector(".main-header__toggle"),M=()=>{let e=()=>{v.classList.toggle("is-open")};I.addEventListener("click",e)};var P=document.querySelector(".form__button-reset");m();E();M();P.addEventListener("click",()=>p());
