(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{571:function(t,e,o){"use strict";o(22),o(39);e.a=function(){var t,e=document.querySelectorAll(".gallery");e.length>=1&&e.forEach((function(e){t=new Isotope(e,{itemSelector:".items"})}));var o=document.querySelectorAll(".gallery-mons");o.length>=1&&o.forEach((function(e){t=new Isotope(e,{itemSelector:".items",masonry:{columnWidth:".width2"}})}));var r=document.querySelector(".filtering");if(r){var l=function(t){t.addEventListener("click",(function(e){matchesSelector(e.target,"span")&&(t.querySelector(".active").classList.remove("active"),e.target.classList.add("active"))}))};r.addEventListener("click",(function(e){if(matchesSelector(e.target,"span")){var o=e.target.getAttribute("data-filter");t.arrange({filter:o})}}));for(var c=document.querySelectorAll(".filtering"),i=0,n=c.length;i<n;i++){l(c[i])}}}},595:function(t,e,o){"use strict";o.r(e);o(87);var r=o(571),l={props:["grid","filterPosition"],mounted:function(){setTimeout((function(){Object(r.a)()}),1e3)}},c=o(86),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"portfolio section-padding pb-70"},[t._m(0),t._v(" "),e("div",{class:"".concat(3==t.grid?"container-fluid":"container")},[e("div",{staticClass:"row"},[e("div",{class:"filtering ".concat("center"===t.filterPosition?"text-center":"left"===t.filterPosition?"text-left":"text-right"," col-12")},[t._m(1)]),t._v(" "),e("div",{staticClass:"gallery full-width"},[e("div",{class:"".concat(3==t.grid?"col-lg-4 col-md-6":2==t.grid?"col-md-6 lg-mr":"col-12"," items graphic wow fadeInUp"),attrs:{"data-wow-delay":".4s"}},[e("div",{staticClass:"item-img"},[e("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[e("img",{attrs:{src:"/img/portfolio/portfolio/1/1.jpg",alt:"image"}}),t._v(" "),e("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v("Creativity Demand")]),t._v(" "),e("span",[e("NuxtLink",{attrs:{to:"#0"}},[t._v("Design")]),t._v(",\n              "),e("NuxtLink",{attrs:{to:"#0"}},[t._v("WordPress")])],1)])]),t._v(" "),e("div",{class:"".concat(3==t.grid?"col-lg-4 col-md-6":2==t.grid?"col-md-6":"col-12"," items web wow fadeInUp"),attrs:{"data-wow-delay":".4s"}},[e("div",{staticClass:"item-img"},[e("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[e("img",{attrs:{src:"/img/portfolio/portfolio/1/2.jpg",alt:"image"}}),t._v(" "),e("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v("Through The Breaking")]),t._v(" "),e("span",[e("NuxtLink",{attrs:{to:"#0"}},[t._v("Design")]),t._v(",\n              "),e("NuxtLink",{attrs:{to:"#0"}},[t._v("WordPress")])],1)])]),t._v(" "),e("div",{class:"".concat(3==t.grid?"col-lg-4 col-md-6":2==t.grid?"col-md-6":"col-12"," items brand wow fadeInUp"),attrs:{"data-wow-delay":".4s"}},[e("div",{staticClass:"item-img"},[e("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[e("img",{attrs:{src:"/img/portfolio/portfolio/1/3.jpg",alt:"image"}}),t._v(" "),e("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v("Create With Creatives")]),t._v(" "),e("span",[e("NuxtLink",{attrs:{to:"#0"}},[t._v("Design")]),t._v(",\n              "),e("NuxtLink",{attrs:{to:"#0"}},[t._v("WordPress")])],1)])]),t._v(" "),e("div",{class:"".concat(3==t.grid?"col-lg-4 col-md-6":2==t.grid?"col-md-6":"col-12"," items graphic wow fadeInUp"),attrs:{"data-wow-delay":".4s"}},[e("div",{staticClass:"item-img"},[e("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[e("img",{attrs:{src:"/img/portfolio/portfolio/1/4.jpg",alt:"image"}}),t._v(" "),e("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v("Energies of Love")]),t._v(" "),e("span",[e("NuxtLink",{attrs:{to:"#"}},[t._v("Design")]),t._v(",\n              "),e("NuxtLink",{attrs:{to:"#"}},[t._v("WordPress")])],1)])]),t._v(" "),e("div",{class:"".concat(3==t.grid?"col-lg-4 col-md-6":2==t.grid?"col-md-6":"col-12"," items web wow fadeInUp"),attrs:{"data-wow-delay":".4s"}},[e("div",{staticClass:"item-img"},[e("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[e("img",{attrs:{src:"/img/portfolio/portfolio/1/5.jpg",alt:"image"}}),t._v(" "),e("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v("See It Yourself")]),t._v(" "),e("span",[e("NuxtLink",{attrs:{to:"#0"}},[t._v("Design")]),t._v(",\n              "),e("NuxtLink",{attrs:{to:"#0"}},[t._v("WordPress")])],1)])]),t._v(" "),e("div",{class:"".concat(3==t.grid?"col-lg-4 col-md-6":2==t.grid?"col-md-6":"col-12"," items brand wow fadeInUp"),attrs:{"data-wow-delay":".4s"}},[e("div",{staticClass:"item-img"},[e("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[e("img",{attrs:{src:"/img/portfolio/portfolio/1/6.jpg",alt:"image"}}),t._v(" "),e("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v("Blast From The Past")]),t._v(" "),e("span",[e("NuxtLink",{attrs:{to:"#0"}},[t._v("Design")]),t._v(",\n              "),e("NuxtLink",{attrs:{to:"#0"}},[t._v("WordPress")])],1)])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-8 col-md-10"},[e("div",{staticClass:"sec-head text-center"},[e("h6",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":".5s"}},[t._v("Portfolio")]),t._v(" "),e("h3",{staticClass:"wow color-font"},[t._v("\n            Our Recent Web Design & "),e("br"),t._v("\n            Some Past Projects.\n          ")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"filter"},[e("span",{staticClass:"active",attrs:{"data-filter":"*"}},[t._v(" All ")]),t._v(" "),e("span",{attrs:{"data-filter":".brand"}},[t._v("Branding")]),t._v(" "),e("span",{attrs:{"data-filter":".web"}},[t._v("Mobile App")]),t._v(" "),e("span",{attrs:{"data-filter":".graphic"}},[t._v("Creative")])])}],!1,null,"5d3906da",null);e.default=component.exports}}]);