var l=document.querySelector(".slider__controls"),_=document.querySelector(".slider__control--prev"),m=document.querySelector(".slider__control--next"),o=document.querySelectorAll(".slider__item"),i=document.querySelectorAll(".slider__pagination-button"),a=e=>{o[e].classList.remove("slider__item--active"),i[e].classList.remove("slider__pagination-button--active"),i[e].disabled=!1},d=e=>{o[e].classList.add("slider__item--active"),i[e].classList.add("slider__pagination-button--active"),i[e].disabled=!0},u=e=>{_.disabled=e===0,m.disabled=e===o.length-1},S=()=>{if(o.length===0||!i||!l)return;let e=0;l.addEventListener("click",t=>{t.target.matches(".slider__control")&&(a(e),t.target.contains(_)&&(e-=1),t.target.contains(m)&&(e+=1),u(e),d(e))}),i.forEach((t,s)=>{t.addEventListener("click",()=>{a(e),e=s,u(e),d(e)})})};var n=document.querySelector(".form__slider"),r=document.querySelector(".form__input--min-price"),c=document.querySelector(".form__input--max-price"),p=()=>{document.head.insertAdjacentHTML("beforeend",'<link rel="stylesheet" href="vendor/nouislider/nouislider.css">');let e=977;document.documentElement.clientWidth>768&&(e=1e3),noUiSlider.create(n,{range:{min:[0],max:[e]},start:[0,900],step:1,connect:!0,format:{to:t=>t.toFixed(0),from:t=>parseFloat(t)}}),n.noUiSlider.on("slide",()=>{let[t,s]=n.noUiSlider.get();r.value=t,c.value=s}),r.addEventListener("input",()=>{n.noUiSlider.set([r.value,c.value])}),c.addEventListener("input",()=>{n.noUiSlider.set([r.value,c.value])})};var v=document.querySelector(".main-header"),g=v.querySelector(".main-header__toggle"),E=()=>{let e=()=>{v.classList.toggle("is-open")};g.addEventListener("click",e)};S();p();E();
