(window.webpackJsonp=window.webpackJsonp||[]).push([[129,25,43,72,74],{566:function(t,e,o){"use strict";o.r(e);var r={props:["hideBGCOLOR"]},l=o(86),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("footer",{class:"".concat(t.hideBGCOLOR?"":"sub-bg")},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"item md-mb50"},[t._m(1),t._v(" "),e("ul",[e("li",[e("div",{staticClass:"img"},[e("NuxtLink",{attrs:{to:"#"}},[e("img",{attrs:{src:"/img/blog/1.jpg",alt:""}})])],1),t._v(" "),e("div",{staticClass:"sm-post"},[e("NuxtLink",{attrs:{to:"#"}},[e("p",[t._v("\n                    The Start-Up Ultimate Guide to Make Your WordPress\n                    Journal.\n                  ")]),t._v(" "),e("span",{staticClass:"date"},[t._v("14 sep 2022")])])],1)]),t._v(" "),e("li",[e("div",{staticClass:"img"},[e("NuxtLink",{attrs:{to:"#"}},[e("img",{attrs:{src:"/img/blog/2.jpg",alt:""}})])],1),t._v(" "),e("div",{staticClass:"sm-post"},[e("NuxtLink",{attrs:{to:"#"}},[e("p",[t._v("\n                    The Start-Up Ultimate Guide to Make Your WordPress\n                    Journal.\n                  ")]),t._v(" "),e("span",{staticClass:"date"},[t._v("14 sep 2022")])])],1)]),t._v(" "),t._m(2)])])]),t._v(" "),e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"item"},[t._m(3),t._v(" "),e("div",{staticClass:"social"},[e("NuxtLink",{attrs:{to:"#0"}},[e("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),e("NuxtLink",{attrs:{to:"#0"}},[e("i",{staticClass:"fab fa-twitter"})]),t._v(" "),e("NuxtLink",{attrs:{to:"#0"}},[e("i",{staticClass:"fab fa-instagram"})]),t._v(" "),e("NuxtLink",{attrs:{to:"#0"}},[e("i",{staticClass:"fab fa-youtube"})])],1),t._v(" "),e("div",{staticClass:"copy-right"},[e("p",[t._v("\n              © 2022, Vie Template. Made with passion by\n              "),e("NuxtLink",{attrs:{to:"#0"}},[t._v("ThemesCamp")]),t._v(".\n            ")],1)])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"item md-mb50"},[e("div",{staticClass:"title"},[e("h5",[t._v("Contact Us")])]),t._v(" "),e("ul",[e("li",[e("span",{staticClass:"icon pe-7s-map-marker"}),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v("Officeal Address")]),t._v(" "),e("p",[t._v("504 White St . Dawsonville, GA 30534 , New York")])])]),t._v(" "),e("li",[e("span",{staticClass:"icon pe-7s-mail"}),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v("Email Us")]),t._v(" "),e("p",[t._v("support@gmail.com")])])]),t._v(" "),e("li",[e("span",{staticClass:"icon pe-7s-call"}),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v("Call Us")]),t._v(" "),e("p",[t._v("+87986451666")])])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"title"},[t("h5",[this._v("Recent News")])])},function(){var t=this._self._c;return t("li",[t("div",{staticClass:"subscribe"},[t("input",{attrs:{type:"text",placeholder:"Type Your Email"}}),this._v(" "),t("span",{staticClass:"subs pe-7s-paper-plane"})])])},function(){var t=this._self._c;return t("div",{staticClass:"logo"},[t("img",{attrs:{src:"/img/logo-light.png",alt:"logo"}})])}],!1,null,"2e8392e9",null);e.default=component.exports;installComponents(component,{Footer:o(566).default})},567:function(t,e,o){"use strict";e.a=function(t){var e=[];if(!t.parentNode)return e;for(var o=t.parentNode.firstChild;o;)1===o.nodeType&&o!==t&&e.push(o),o=o.nextSibling;return e}},568:function(t,e,o){"use strict";o.r(e);o(48),o(49),o(22);var r=o(567),l={props:["lr","theme","nr"],methods:{handleDropdown:function(t){if(Object(r.a)(t.target.parentElement).filter((function(t){return t.classList.contains("show")})).map((function(t){t.classList.remove("show"),t.childNodes[0]&&t.childNodes[0].setAttribute("aria-expanded",!1),t.childNodes[2]&&t.childNodes[2].classList.remove("show")})),t.target.setAttribute("aria-expanded",!0),t.target.parentElement){t.target.parentElement.classList.toggle("show");var e=t.target.parentElement.childNodes[2];e&&e.classList.toggle("show")}},handleMobileDropdown:function(t){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}}},n=o(86),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("nav",{ref:t.nr,staticClass:"navbar navbar-expand-lg change",class:"light"===t.theme?"light":""},[e("div",{staticClass:"container"},[e("NuxtLink",{staticClass:"logo",attrs:{to:"/"}},["light"===t.theme?e("img",{ref:"lr",attrs:{src:"/img/logo-dark.png",alt:"logo"}}):(t.theme,e("img",{ref:"lr",attrs:{src:"/img/logo-light.png",alt:"logo"}}))]),t._v(" "),e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:t.handleMobileDropdown}},[t._m(0)]),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[e("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Home\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home1-dark"}},[t._v("\n              Main Home\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home2-dark"}},[t._v("\n              Creative Agency\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home5-dark"}},[t._v("\n              Digital Agency\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home4-dark"}},[t._v("\n              Business One Page\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home3-dark"}},[t._v("\n              Corporate Business\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home6-dark"}},[t._v("\n              Modern Agency\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home7-dark"}},[t._v("\n              Freelancer\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home8-dark"}},[t._v("\n              Architecture\n            ")])],1)]),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/about/about-dark"}},[t._v(" About ")])],1),t._v(" "),e("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[e("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Works\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/showcase/showcase-dark"}},[t._v("\n              Showcase Parallax\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/showcase3/showcase3-dark"}},[t._v("\n              Showcase Carousel\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/showcase2/showcase2-dark"}},[t._v("\n              Showcase Circle\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/works/works-dark"}},[t._v("\n              Portfolio Masonry\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/works2/works2-dark"}},[t._v("\n              Portfolio Filtering\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/works3/works3-dark"}},[t._v("\n              Portfolio Gallery\n            ")])],1)]),t._v(" "),e("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[e("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Blog\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog/blog-dark"}},[t._v("\n              Blog Standerd\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog-list/blog-list-dark"}},[t._v("\n              Blog List\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog-grid/blog-grid-dark"}},[t._v("\n              Blog Grid\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog-details/blog-details-dark"}},[t._v("\n              Blog Details\n            ")])],1)]),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/contact/contact-dark"}},[t._v("\n            Contact\n          ")])],1)])])],1)])}),[function(){var t=this._self._c;return t("span",{staticClass:"icon-bar"},[t("i",{staticClass:"fas fa-bars"})])}],!1,null,"99068f48",null);e.default=component.exports},571:function(t,e,o){"use strict";o(22),o(39);e.a=function(){var t,e=document.querySelectorAll(".gallery");e.length>=1&&e.forEach((function(e){t=new Isotope(e,{itemSelector:".items"})}));var o=document.querySelectorAll(".gallery-mons");o.length>=1&&o.forEach((function(e){t=new Isotope(e,{itemSelector:".items",masonry:{columnWidth:".width2"}})}));var r=document.querySelector(".filtering");if(r){var l=function(t){t.addEventListener("click",(function(e){matchesSelector(e.target,"span")&&(t.querySelector(".active").classList.remove("active"),e.target.classList.add("active"))}))};r.addEventListener("click",(function(e){if(matchesSelector(e.target,"span")){var o=e.target.getAttribute("data-filter");t.arrange({filter:o})}}));for(var n=document.querySelectorAll(".filtering"),i=0,c=n.length;i<c;i++){l(n[i])}}}},596:function(t,e,o){"use strict";o.r(e);var r={props:["sliderRef"]},l=o(86),component=Object(l.a)(r,(function(){var t=this;return(0,t._self._c)("header",{ref:t.sliderRef,staticClass:"works-header fixed-slider hfixd valign sub-bg"},[t._m(0)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-7 col-md-9 static"},[e("div",{staticClass:"capt mt-50"},[e("div",{staticClass:"parlx text-center"},[e("h1",{staticClass:"color-font"},[t._v("amazing works")]),t._v(" "),e("p",[t._v("\n              Creativity involves breaking out of expected & repeatable\n              patterns in order to look at things in different way than ever\n              before.\n            ")])]),t._v(" "),e("div",{staticClass:"bactxt custom-font valign"},[e("span",{staticClass:"full-width"},[t._v("Works")])])])])])])}],!1,null,"18cdfddc",null);e.default=component.exports},610:function(t,e,o){"use strict";o.r(e);o(87);var r=o(571),l={props:["grid","filterPosition","hideFilter"],mounted:function(){setTimeout((function(){Object(r.a)()}),1e3)}},n=o(86),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("section",{class:"".concat(t.grid&&3===t.grid?"three-column":null," portfolio section-padding pb-70")},[t.hideFilter?t._e():e("div",{staticClass:"container"},[t._m(0)]),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t.hideFilter?t._e():e("div",{class:"filtering ".concat("center"===t.filterPosition?"text-center":"left"===t.filterPosition?"text-left":"text-right"," col-12")},[t._m(1)]),t._v(" "),e("div",{staticClass:"gallery full-width"},[e("div",{class:"".concat(3===t.grid?"col-lg-4 col-md-6":2===t.grid?"col-md-6":"col-12"," items graphic wow fadeInUp"),attrs:{"data-wow-delay":".4s"}},[e("div",{staticClass:"item-img"},[e("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[e("img",{attrs:{src:"/img/portfolio/portfolio/1/1.jpg",alt:"image"}}),t._v(" "),e("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),t._m(2)]),t._v(" "),e("div",{class:"".concat(3===t.grid?"col-lg-4 col-md-6":2===t.grid?"col-md-6":"col-12"," items web wow fadeInUp"),attrs:{"data-wow-delay":".4s"}},[e("div",{staticClass:"item-img"},[e("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[e("img",{attrs:{src:"/img/portfolio/portfolio/1/2.jpg",alt:"image"}}),t._v(" "),e("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),t._m(3)]),t._v(" "),e("div",{class:"".concat(3===t.grid?"col-lg-4 col-md-6":2===t.grid?"col-md-6":"col-12"," items brand wow fadeInUp"),attrs:{"data-wow-delay":".4s"}},[e("div",{staticClass:"item-img"},[e("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[e("img",{attrs:{src:"/img/portfolio/portfolio/1/3.jpg",alt:"image"}}),t._v(" "),e("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),t._m(4)]),t._v(" "),e("div",{class:"".concat(3===t.grid?"col-lg-4 col-md-6":2===t.grid?"col-md-6":"col-12"," items graphic wow fadeInUp"),attrs:{"data-wow-delay":".4s"}},[e("div",{staticClass:"item-img"},[e("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[e("img",{attrs:{src:"/img/portfolio/portfolio/1/4.jpg",alt:"image"}}),t._v(" "),e("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),t._m(5)]),t._v(" "),e("div",{class:"".concat(3===t.grid?"col-lg-4 col-md-6":2===t.grid?"col-md-6":"col-12"," items web wow fadeInUp"),attrs:{"data-wow-delay":".4s"}},[e("div",{staticClass:"item-img"},[e("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[e("img",{attrs:{src:"/img/portfolio/portfolio/1/5.jpg",alt:"image"}}),t._v(" "),e("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),t._m(6)]),t._v(" "),e("div",{class:"".concat(3===t.grid?"col-lg-4 col-md-6":2===t.grid?"col-md-6":"col-12"," items brand wow fadeInUp"),attrs:{"data-wow-delay":".4s"}},[e("div",{staticClass:"item-img"},[e("NuxtLink",{staticClass:"imago wow",attrs:{to:"/project-details2/project-details2-dark"}},[e("img",{attrs:{src:"/img/portfolio/portfolio/1/6.jpg",alt:"image"}}),t._v(" "),e("div",{staticClass:"item-img-overlay"})])],1),t._v(" "),t._m(7)])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-8 col-md-10"},[e("div",{staticClass:"sec-head text-center"},[e("h6",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":".5s"}},[t._v("Portfolio")]),t._v(" "),e("h3",{staticClass:"wow color-font"},[t._v("\n            Our Recent Web Design & "),e("br"),t._v("\n            Some Past Projects.\n          ")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"filter"},[e("span",{staticClass:"active",attrs:{"data-filter":"*"}},[t._v(" All ")]),t._v(" "),e("span",{attrs:{"data-filter":".brand"}},[t._v("Branding")]),t._v(" "),e("span",{attrs:{"data-filter":".web"}},[t._v("Mobile App")]),t._v(" "),e("span",{attrs:{"data-filter":".graphic"}},[t._v("Creative")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"cont"},[e("h6",[t._v("Creativity Demand")]),t._v(" "),e("span",[e("a",{attrs:{href:"#0"}},[t._v("Design")]),t._v(", "),e("a",{attrs:{href:"#0"}},[t._v("WordPress")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"cont"},[e("h6",[t._v("Through The Breaking")]),t._v(" "),e("span",[e("a",{attrs:{href:"#0"}},[t._v("Design")]),t._v(", "),e("a",{attrs:{href:"#0"}},[t._v("WordPress")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"cont"},[e("h6",[t._v("Create With Creatives")]),t._v(" "),e("span",[e("a",{attrs:{href:"#0"}},[t._v("Design")]),t._v(", "),e("a",{attrs:{href:"#0"}},[t._v("WordPress")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"cont"},[e("h6",[t._v("Energies of Love")]),t._v(" "),e("span",[e("a",{attrs:{href:"#0"}},[t._v("Design")]),t._v(", "),e("a",{attrs:{href:"#0"}},[t._v("WordPress")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"cont"},[e("h6",[t._v("See It Yourself")]),t._v(" "),e("span",[e("a",{attrs:{href:"#0"}},[t._v("Design")]),t._v(", "),e("a",{attrs:{href:"#0"}},[t._v("WordPress")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"cont"},[e("h6",[t._v("Blast From The Past")]),t._v(" "),e("span",[e("a",{attrs:{href:"#0"}},[t._v("Design")]),t._v(", "),e("a",{attrs:{href:"#0"}},[t._v("WordPress")])])])}],!1,null,"b3e5e8de",null);e.default=component.exports},736:function(t,e,o){"use strict";o.r(e);var r={layout:"light",head:function(){return{titleTemplate:"%s - Works 3 Light"}},mounted:function(){if(this.$refs.fixedSlider.$el&&this.$refs.MainContent){var t=this.$refs.fixedSlider.$el.offsetHeight;this.$refs.MainContent.style.marginTop=t+"px"}var e=this.$refs.navbar.$el;window.pageYOffset>300?e.classList.add("nav-scroll"):e.classList.remove("nav-scroll"),window.addEventListener("scroll",(function(){window.pageYOffset>300?e.classList.add("nav-scroll"):e.classList.remove("nav-scroll")}))}},l=o(86),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("Navbar",{ref:"navbar",attrs:{lr:"logoRef",theme:"light"}}),t._v(" "),e("WorksHeader",{ref:"fixedSlider"}),t._v(" "),e("div",{ref:"MainContent",staticClass:"main-content"},[e("WorksStyle2",{attrs:{grid:2,hideFilter:!0,filterPosition:"center"}}),t._v(" "),e("Footer")],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"circle-bg"},[t("div",{staticClass:"circle-color fixed"},[t("div",{staticClass:"gradient-circle"}),this._v(" "),t("div",{staticClass:"gradient-circle two"})])])}],!1,null,"4cadbcf3",null);e.default=component.exports;installComponents(component,{Navbar:o(568).default,WorksHeader:o(596).default,WorksStyle2:o(610).default,Footer:o(566).default})}}]);