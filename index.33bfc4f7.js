!function(){const e=document.querySelector(".header__menu"),c=document.querySelector(".header__menu-shadow"),o=document.querySelector(".hamburger"),t=document.querySelector(".close");function n(n){e.classList.toggle("show",n),c.classList.toggle("show",n),o.style.display=n?"none":"block",t.style.display=n?"block":"none"}o.addEventListener("click",(()=>n(!0))),t.addEventListener("click",(()=>n(!1))),Array.from(e.children).forEach((e=>e.addEventListener("click",(()=>n(!1)))))}();
//# sourceMappingURL=index.33bfc4f7.js.map
