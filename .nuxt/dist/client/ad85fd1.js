(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{570:function(t,e,r){"use strict";r(22),r(39),r(29),r(64);e.a=function(){document.querySelectorAll(".swiper-pagination")&&document.querySelectorAll(".swiper-pagination").forEach((function(t){t.innerHTML=t.innerHTML.replace(" / ","")}))}},578:function(t,e,r){"use strict";r(22),r(39);e.a=function(element){window.addEventListener("scroll",(function(){var t=window.pageYOffset;element&&element.forEach((function(e){e.style.transform="translate3d(0, "+-.2*t+"px, 0)",e.style.opacity=1-t/600}))}))}},599:function(t){t.exports=JSON.parse('[{"id":1,"title":{"first":"Midnight","second":"Snack"},"image":"/img/portfolio/full/1.jpg","sub":"Design"},{"id":2,"title":{"first":"Fisherman","second":"Portrait"},"image":"/img/portfolio/full/2.jpg","sub":"Design"},{"id":3,"title":{"first":"Tribos","second":"Urbanas"},"image":"/img/portfolio/full/3.jpg","sub":"Design"},{"id":4,"title":{"first":"Monsoon","second":"in the city"},"image":"/img/portfolio/full/4.jpg","sub":"Design"}]')},671:function(t,e,r){"use strict";r.r(e);r(87);var n=r(599),o=r(570),l=r(578),c={props:["sliderRef"],data:function(){return{fullScreenData:n,swiperOptions:{speed:1e3,mousewheel:!0,parallax:!0,centeredSlides:!0,slidesPerView:1,autoplay:!0,spaceBetween:500,navigation:{prevEl:".txt-botm .swiper-button-prev",nextEl:".txt-botm .swiper-button-next"},breakpoints:{0:{spaceBetween:0},640:{spaceBetween:0},768:{spaceBetween:30},1024:{spaceBetween:500}}}}},computed:{swiper:function(){return this.$refs.mySwiper.$swiper}},methods:{handleSwiperReadied:function(t){setTimeout((function(){for(var i=0;i<t.slides.length;i++)t.slides[i].childNodes[0].setAttribute("data-swiper-parallax",.75*t.width)}))}},mounted:function(){Object(o.a)(),Object(l.a)(document.querySelectorAll(".fixed-slider .caption"))}},d=r(86),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"slider circle-slide showcase-carus"},[e("div",{staticClass:"swiper-container",attrs:{id:"content-carousel-container-unq-1"}},[e("swiper",{ref:"mySwiper",staticClass:"swiper-wrapper",attrs:{options:t.swiperOptions},on:{ready:t.handleSwiperReadied}},t._l(t.fullScreenData,(function(r){return e("swiper-slide",{key:r.id,staticClass:"swiper-slide"},[e("div",{staticClass:"full-width"},[e("div",{staticClass:"bg-img valign",style:"background-image: url(".concat(r.image,")"),attrs:{"data-overlay-dark":"1"}},[e("div",{staticClass:"caption ontop valign"},[e("div",{staticClass:"o-hidden"},[e("h1",{attrs:{"data-swiper-parallax":"-2000"}},[e("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[e("div",{staticClass:"stroke"},[t._v(t._s(r.title.first))]),t._v(" "),e("span",[t._v(t._s(r.title.second))])])],1)])]),t._v(" "),e("div",{staticClass:"copy-cap valign"},[e("div",{staticClass:"cap"},[e("h1",{attrs:{"data-swiper-parallax":"-2000"}},[e("NuxtLink",{attrs:{to:"/project-details2/project-details2-dark"}},[e("div",{staticClass:"stroke"},[t._v(t._s(r.title.first))]),t._v(" "),e("span",[t._v(t._s(r.title.second))])])],1)])])])])])})),1)],1),t._v(" "),e("div",{staticClass:"txt-botm"},[e("div",{ref:"navigationNextRef",staticClass:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"},[t._m(0),t._v(" "),t._m(1)]),t._v(" "),e("div",{ref:"navigationPrevRef",staticClass:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"},[t._m(2),t._v(" "),t._m(3)])])])}),[function(){var t=this._self._c;return t("div",[t("span",[this._v("Next Slide")])])},function(){var t=this._self._c;return t("div",[t("i",{staticClass:"fas fa-chevron-right"})])},function(){var t=this._self._c;return t("div",[t("i",{staticClass:"fas fa-chevron-left"})])},function(){var t=this._self._c;return t("div",[t("span",[this._v("Prev Slide")])])}],!1,null,"6d0c5c26",null);e.default=component.exports}}]);