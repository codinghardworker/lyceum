(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{569:function(t,e,n){"use strict";n(22),n(39),n(29),n(64);e.a=function(){document.querySelectorAll(".swiper-pagination")&&document.querySelectorAll(".swiper-pagination").forEach((function(t){t.innerHTML=t.innerHTML.replace(" / ","")}))}},577:function(t,e,n){"use strict";n(22),n(39);e.a=function(element){window.addEventListener("scroll",(function(){var t=window.pageYOffset;element&&element.forEach((function(e){e.style.transform="translate3d(0, "+-.2*t+"px, 0)",e.style.opacity=1-t/600}))}))}},625:function(t){t.exports=JSON.parse('[{"id":1,"image":"/img/arch/slid/3.jpg","title":"FLOATING HOUSE MESSINIA","date":"14 Sep 2022"},{"id":2,"image":"/img/arch/slid/2.jpg","title":"IN THE PINE FOREST","date":"14 Sep 2022"},{"id":3,"image":"/img/arch/slid/1.jpg","title":"BUGANVILLA HOUSE","date":"14 Sep 2022"}]')},664:function(t,e,n){"use strict";n.r(e);var r=n(625),c=n(569),o=n(577),l={props:["sliderRef"],data:function(){return{caseStudyData:r,swiperOptions:{speed:1e3,effect:"fade",navigation:{prevEl:".controls .swiper-button-prev",nextEl:".controls .swiper-button-next"}}}},computed:{swiper:function(){return this.$refs.mySwiper.$swiper}},mounted:function(){Object(c.a)(),Object(o.a)(document.querySelectorAll(".fixed-slider .caption"))}},d=n(86),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"case-study"},[e("div",{staticClass:"swiper-container",attrs:{id:"content-carousel-container-unq-1","data-swiper":"container"}},[e("swiper",{ref:"mySwiper",staticClass:"swiper-wrapper",attrs:{options:t.swiperOptions}},t._l(t.caseStudyData,(function(n){return e("swiper-slide",{key:n.id,staticClass:"swiper-slide bg-img",style:"background-image: url(".concat(n.image,") "),attrs:{"data-overlay-dark":"7"}},[e("div",{staticClass:"container d-flex align-items-end"},[e("div",{staticClass:"cont"},[e("NuxtLink",{attrs:{to:"#"}},[e("span",[t._v("Case Study")]),t._v(" "),e("h6",{staticClass:"main-color"},[t._v(t._s(n.date))]),t._v(" "),e("h4",[t._v(t._s(n.title))])])],1)])])})),1),t._v(" "),e("div",{staticClass:"controls"},[e("div",{ref:"navigationNextRef",staticClass:"swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"},[e("i",{staticClass:"fas fa-chevron-right"})]),t._v(" "),e("div",{ref:"navigationPrevRef",staticClass:"swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"},[e("i",{staticClass:"fas fa-chevron-left"})])])],1)])}),[],!1,null,"6763a43f",null);e.default=component.exports}}]);