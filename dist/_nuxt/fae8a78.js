(window.webpackJsonp=window.webpackJsonp||[]).push([[123,45,64],{567:function(t,e,n){"use strict";e.a=function(t){var e=[];if(!t.parentNode)return e;for(var n=t.parentNode.firstChild;n;)1===n.nodeType&&n!==t&&e.push(n),n=n.nextSibling;return e}},569:function(t,e,n){"use strict";n(22),n(39),n(29),n(64);e.a=function(){document.querySelectorAll(".swiper-pagination")&&document.querySelectorAll(".swiper-pagination").forEach((function(t){t.innerHTML=t.innerHTML.replace(" / ","")}))}},573:function(t,e,n){"use strict";var l=n(5),o=n(27),r=n(15),c=/"/g,d=l("".replace);t.exports=function(t,e,n,l){var v=r(o(t)),m="<"+e;return""!==n&&(m+=" "+n+'="'+d(r(l),c,"&quot;")+'"'),m+">"+v+"</"+e+">"}},574:function(t,e,n){"use strict";var l=n(4);t.exports=function(t){return l((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},578:function(t,e,n){"use strict";n(22),n(39),n(87),n(230);var l=0,o=0;function r(t,time){setInterval(function(t){l=Number(window.getComputedStyle(t).getPropertyValue("opacity")),l<1?(l+=1,t.style.opacity=l):clearInterval(o)}(t),time)}function c(t,time){setInterval(function(t){l=Number(window.getComputedStyle(t).getPropertyValue("opacity")),l>0?(l=0,t.style.opacity=l):clearInterval(o)}(t),time)}e.a=function(){var t=document.createElement("div");t.classList.add("div-tooltip-tit"),document.body.appendChild(t);var e=document.createElement("div");e.classList.add("div-tooltip-sub"),document.body.appendChild(e),document.querySelectorAll("[data-tooltip-tit]").forEach((function(e){t=document.querySelector(".div-tooltip-tit"),e.addEventListener("mouseover",(function(){t.innerText=e.getAttribute("data-tooltip-tit")})),e.addEventListener("mousemove",(function(e){r(t,800),t.style.top=e.pageY+10+"px",t.style.left=e.pageX+20+"px",t.style.padding="0px 10px"})),e.addEventListener("mouseleave",(function(){c(t,800),t.style.padding=0}))})),document.querySelectorAll("[data-tooltip-sub]").forEach((function(t){e=document.querySelector(".div-tooltip-sub"),t.addEventListener("mouseover",(function(){e.innerText=t.getAttribute("data-tooltip-sub")})),t.addEventListener("mousemove",(function(t){r(e,800),e.style.top=t.pageY-15+"px",e.style.left=t.pageX+30+"px",e.style.padding="5px 10px"})),t.addEventListener("mouseleave",(function(){c(e,800),e.style.padding=0}))}))}},579:function(t,e,n){"use strict";var l=n(3),o=n(573);l({target:"String",proto:!0,forced:n(574)("sub")},{sub:function(){return o(this,"sub","","")}})},594:function(t,e,n){"use strict";n.r(e);n(22),n(39);var l=n(567),o=function(t,e){t.style.left=e},r=(n(87),function(time,t){setTimeout((function(){}),time)}),c=function(){function t(){window.scrollTo(0,0)}var e=!1,n=document.querySelector(".topnav.dark"),c=document.querySelector(".topnav.dark .logo img"),d=document.querySelector(".topnav .menu-icon"),v=document.querySelector(".topnav .menu-icon .text");d&&(d.addEventListener("click",(function(){e=!e,document.querySelector(".hamenu").classList.toggle("open"),e?(o(document.querySelector(".hamenu"),"0px"),v.classList.add("open"),n&&n.classList.add("navlit"),c&&c.setAttribute("src","/img/logo-light.png"),window.addEventListener("scroll",t)):(r(300,o(document.querySelector(".hamenu"),"-100%")),v.classList.remove("open"),n&&n.classList.remove("navlit"),c&&c.setAttribute("src","/img/logo-dark.png"),window.removeEventListener("scroll",t))})),document.querySelectorAll(".main-menu a").forEach((function(e){e.addEventListener("click",(function(){r(300,o(document.querySelector(".hamenu"),"-100%")),v.classList.remove("open"),n&&n.classList.remove("navlit"),c&&c.setAttribute("src","/img/logo-dark.png"),window.removeEventListener("scroll",t)}))}))),document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach((function(t){t.addEventListener("mouseenter",(function(){this.style.opacity="1",Object(l.a)(this).forEach((function(t){t.style.opacity=".5"}))})),t.addEventListener("mouseleave",(function(){document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach((function(t){t.style.opacity="1"}))}))})),document.querySelectorAll(".main-menu > li .dmenu").length&&document.querySelectorAll(".main-menu > li .dmenu").forEach((function(t){t.addEventListener("click",(function(){document.querySelector(".main-menu").classList.add("gosub"),Object(l.a)(this.parentNode.parentNode).forEach((function(t){t.childNodes[2]&&t.childNodes[2].classList.remove("sub-open")})),this.parentNode.parentNode.childNodes[2].classList.add("sub-open")}))})),document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").length&&document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").forEach((function(t){t.addEventListener("click",(function(){document.querySelector(".main-menu").classList.remove("gosub"),document.querySelector(".main-menu").classList.remove("sub-open")}))}))},d={props:["theme"],mounted:function(){c()}},v=n(86),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("div",{class:"topnav ".concat(t.theme&&"light"===t.theme?"light":""),attrs:{id:"navi"}},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"logo"},[e("NuxtLink",{attrs:{to:"#0"}},["light"===t.theme?e("img",{attrs:{src:"/img/logo-dark.png",alt:"logo"}}):e("img",{attrs:{src:"/img/logo-light.png",alt:"logo"}})])],1),t._v(" "),t._m(0)])]),t._v(" "),e("div",{staticClass:"hamenu"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-9 col-md-8"},[e("div",{staticClass:"menu-links"},[e("ul",{staticClass:"main-menu"},[e("li",[t._m(1),t._v(" "),e("div",{staticClass:"sub-menu"},[e("ul",[t._m(2),t._v(" "),e("li",[e("div",{staticClass:"o-hidden"},[e("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home1-dark"}},[e("span",{staticClass:"nm"},[t._v("01.")]),t._v("Main Home\n                        ")])],1)]),t._v(" "),e("li",[e("div",{staticClass:"o-hidden"},[e("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home2-dark"}},[e("span",{staticClass:"nm"},[t._v("02.")]),t._v("Creative Agency\n                        ")])],1)]),t._v(" "),e("li",[e("div",{staticClass:"o-hidden"},[e("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home5-dark"}},[e("span",{staticClass:"nm"},[t._v("03.")]),t._v("Digital Agency\n                        ")])],1)]),t._v(" "),e("li",[e("div",{staticClass:"o-hidden"},[e("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home4-dark"}},[e("span",{staticClass:"nm"},[t._v("04.")]),t._v("Business One Page\n                        ")])],1)]),t._v(" "),e("li",[e("div",{staticClass:"o-hidden"},[e("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home3-dark"}},[e("span",{staticClass:"nm"},[t._v("05.")]),t._v("Corporate\n                        ")])],1)]),t._v(" "),e("li",[e("div",{staticClass:"o-hidden"},[e("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home6-dark"}},[e("span",{staticClass:"nm"},[t._v("06.")]),t._v("Modern Agency\n                        ")])],1)]),t._v(" "),e("li",[e("div",{staticClass:"o-hidden"},[e("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home7-dark"}},[e("span",{staticClass:"nm"},[t._v("07.")]),t._v("Freelancer\n                        ")])],1)]),t._v(" "),e("li",[e("div",{staticClass:"o-hidden"},[e("NuxtLink",{staticClass:"sub-link",attrs:{to:"/homepage/home8-dark"}},[e("span",{staticClass:"nm"},[t._v("08.")]),t._v("Architecture\n                        ")])],1)])])])]),t._v(" "),e("li",[e("div",{staticClass:"o-hidden"},[e("NuxtLink",{staticClass:"link",attrs:{to:"/about/about-dark"}},[e("span",{staticClass:"nm"},[t._v("02.")]),t._v("About Us\n                  ")])],1)]),t._v(" "),e("li",[t._m(3),t._v(" "),e("div",{staticClass:"sub-menu"},[e("ul",[t._m(4),t._v(" "),e("li",[e("div",{staticClass:"o-hidden"},[e("NuxtLink",{staticClass:"sub-link",attrs:{to:"/showcase/showcase-dark"}},[e("span",{staticClass:"nm"},[t._v("01.")]),t._v("ShowCase Parallax\n                        ")])],1)]),t._v(" "),e("li",[e("div",{staticClass:"o-hidden"},[e("NuxtLink",{staticClass:"sub-link",attrs:{to:"/showcase3/showcase3-dark"}},[e("span",{staticClass:"nm"},[t._v("02.")]),t._v("ShowCase Carousel\n                        ")])],1)]),t._v(" "),e("li",[e("div",{staticClass:"o-hidden"},[e("NuxtLink",{staticClass:"sub-link",attrs:{to:"/showcase2/showcase2-dark"}},[e("span",{staticClass:"nm"},[t._v("03.")]),t._v("ShowCase Circle\n                        ")])],1)]),t._v(" "),e("li",[e("div",{staticClass:"o-hidden"},[e("NuxtLink",{staticClass:"sub-link",attrs:{to:"/works/works-dark"}},[e("span",{staticClass:"nm"},[t._v("04.")]),t._v("Portfolio Masonry\n                        ")])],1)]),t._v(" "),e("li",[e("div",{staticClass:"o-hidden"},[e("NuxtLink",{staticClass:"sub-link",attrs:{to:"/works2/works2-dark"}},[e("span",{staticClass:"nm"},[t._v("05.")]),t._v("Portfolio Filtering\n                        ")])],1)]),t._v(" "),e("li",[e("div",{staticClass:"o-hidden"},[e("NuxtLink",{staticClass:"sub-link",attrs:{to:"/works3/works3-dark"}},[e("span",{staticClass:"nm"},[t._v("06.")]),t._v("Portfolio Gallery\n                        ")])],1)])])])]),t._v(" "),e("li",[t._m(5),t._v(" "),e("div",{staticClass:"sub-menu"},[e("ul",[t._m(6),t._v(" "),e("li",[e("div",{staticClass:"o-hidden"},[e("NuxtLink",{staticClass:"sub-link",attrs:{to:"/blog/blog-dark"}},[e("span",{staticClass:"nm"},[t._v("01.")]),t._v("Blog Standerd\n                        ")])],1)]),t._v(" "),e("li",[e("div",{staticClass:"o-hidden"},[e("NuxtLink",{staticClass:"sub-link",attrs:{to:"/blog-list/blog-list-dark"}},[e("span",{staticClass:"nm"},[t._v("02.")]),t._v("Blog List\n                        ")])],1)]),t._v(" "),e("li",[e("div",{staticClass:"o-hidden"},[e("NuxtLink",{staticClass:"sub-link",attrs:{to:"/blog-grid/blog-grid-dark"}},[e("span",{staticClass:"nm"},[t._v("03.")]),t._v("Blog Grid\n                        ")])],1)]),t._v(" "),e("li",[e("div",{staticClass:"o-hidden"},[e("NuxtLink",{staticClass:"sub-link",attrs:{to:"/blog-details/blog-details-dark"}},[e("span",{staticClass:"nm"},[t._v("04.")]),t._v("Blog Details\n                        ")])],1)])])])]),t._v(" "),e("li",[e("div",{staticClass:"o-hidden"},[e("NuxtLink",{staticClass:"link",attrs:{to:"/contact/contact-dark"}},[e("span",{staticClass:"nm"},[t._v("05.")]),t._v("Contact\n                  ")])],1)])])])]),t._v(" "),t._m(7)])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"menu-icon"},[e("span",{staticClass:"icon"},[e("i"),t._v(" "),e("i")]),t._v(" "),e("span",{staticClass:"text",attrs:{"data-splitting":""}},[e("span",{staticClass:"menu-text"},[t._v("Menu")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-hidden"},[e("span",{staticClass:"link dmenu"},[e("span",{staticClass:"nm"},[t._v("01.")]),t._v("Home\n                    "),e("i",{staticClass:"fas fa-angle-right"})])])},function(){var t=this._self._c;return t("li",[t("div",{staticClass:"o-hidden"},[t("span",{staticClass:"sub-link back"},[t("i",{staticClass:"pe-7s-angle-left"}),this._v(" Go Back\n                        ")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-hidden"},[e("span",{staticClass:"link dmenu"},[e("span",{staticClass:"nm"},[t._v("03.")]),t._v("Works\n                    "),e("i",{staticClass:"fas fa-angle-right"})])])},function(){var t=this._self._c;return t("li",[t("div",{staticClass:"o-hidden"},[t("span",{staticClass:"sub-link back"},[t("i",{staticClass:"pe-7s-angle-left"}),this._v(" Go Back\n                        ")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"o-hidden"},[e("span",{staticClass:"link dmenu"},[e("span",{staticClass:"nm"},[t._v("04.")]),t._v("Blogs\n                    "),e("i",{staticClass:"fas fa-angle-right"})])])},function(){var t=this._self._c;return t("li",[t("div",{staticClass:"o-hidden"},[t("span",{staticClass:"sub-link back"},[t("i",{staticClass:"pe-7s-angle-left"}),this._v(" Go Back\n                        ")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-3 col-md-4"},[e("div",{staticClass:"cont-info"},[e("div",{staticClass:"item"},[e("h6",[t._v("Phone :")]),t._v(" "),e("p",[t._v("+03 762-2367-723")])]),t._v(" "),e("div",{staticClass:"item"},[e("h6",[t._v("Address :")]),t._v(" "),e("p",[t._v("541 Melville Ave, Palo Alto, CA 94301, ask@ohio.colabr.io")])]),t._v(" "),e("div",{staticClass:"item"},[e("h6",[t._v("Email :")]),t._v(" "),e("p",[e("a",{attrs:{href:"#0"}},[t._v("Vie_website@gmail.com")])])])])])}],!1,null,"113f96cd",null);e.default=component.exports},598:function(t){t.exports=JSON.parse('[{"id":1,"title":{"first":"Midnight","second":"Snack"},"image":"/img/portfolio/full/1.jpg","sub":"Design"},{"id":2,"title":{"first":"Fisherman","second":"Portrait"},"image":"/img/portfolio/full/2.jpg","sub":"Design"},{"id":3,"title":{"first":"Tribos","second":"Urbanas"},"image":"/img/portfolio/full/3.jpg","sub":"Design"},{"id":4,"title":{"first":"Monsoon","second":"in the city"},"image":"/img/portfolio/full/4.jpg","sub":"Design"}]')},672:function(t,e,n){"use strict";n.r(e);n(579);var l=n(598),o=n(569),r=n(578),c={props:["sliderRef"],data:function(){return{fullScreenData:l,swiperOptions:{slidesPerView:4,speed:1e3,mousewheel:!0,autoplay:!0,loop:!0,spaceBetween:30,breakpoints:{0:{slidesPerView:1},640:{slidesPerView:2},768:{slidesPerView:2},1024:{slidesPerView:4}},navigation:{prevEl:".txt-botm .swiper-button-prev",nextEl:".txt-botm .swiper-button-next"}}}},computed:{swiper:function(){return this.$refs.mySwiper.$swiper}},mounted:function(){Object(r.a)(),Object(o.a)()}},d=n(86),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("header",{ref:t.sliderRef,staticClass:"slider showcase-grid"},[e("div",{attrs:{id:"content-carousel-container-unq-1"}},[e("swiper",{ref:"mySwiper",attrs:{options:t.swiperOptions}},t._l(t.fullScreenData,(function(t){return e("swiper-slide",{key:t.id,staticClass:"swiper-slide"},[e("div",{staticClass:"nbo-link"},[e("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[e("div",{staticClass:"bg-img",style:"background-image: url(".concat(t.image,")"),attrs:{"data-tooltip-tit":t.title.first+" "+t.title.second,"data-tooltip-sub":t.sub}})])],1)])})),1),t._v(" "),e("div",{staticClass:"txt-botm"},[e("div",{ref:"navigationNextRef",staticClass:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"},[t._m(0),t._v(" "),t._m(1)]),t._v(" "),e("div",{ref:"navigationPrevRef",staticClass:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"},[t._m(2),t._v(" "),t._m(3)]),t._v(" "),e("div",{ref:"paginationRef",staticClass:"swiper-pagination dots"})])],1)])}),[function(){var t=this._self._c;return t("div",[t("span",[this._v("Next Slide")])])},function(){var t=this._self._c;return t("div",[t("i",{staticClass:"fas fa-chevron-right"})])},function(){var t=this._self._c;return t("div",[t("i",{staticClass:"fas fa-chevron-left"})])},function(){var t=this._self._c;return t("div",[t("span",[this._v("Prev Slide")])])}],!1,null,"5c528eb1",null);e.default=component.exports},730:function(t,e,n){"use strict";n.r(e);var l={layout:"light",head:function(){return{titleTemplate:"%s - Showcase 3 Light"}}},o=n(86),component=Object(o.a)(l,(function(){var t=this._self._c;return t("div",[t("NavbarFullMenu",{attrs:{theme:"light"}}),this._v(" "),t("ShowcasesGrid")],1)}),[],!1,null,"013a344c",null);e.default=component.exports;installComponents(component,{NavbarFullMenu:n(594).default,ShowcasesGrid:n(672).default})}}]);