(window.webpackJsonp=window.webpackJsonp||[]).push([[0,25,41,43,46,50,51,52,53,54],{566:function(t,e,n){"use strict";n.r(e);var o={props:["hideBGCOLOR"]},l=n(86),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("footer",{class:"".concat(t.hideBGCOLOR?"":"sub-bg")},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"item md-mb50"},[t._m(1),t._v(" "),e("ul",[e("li",[e("div",{staticClass:"img"},[e("NuxtLink",{attrs:{to:"#"}},[e("img",{attrs:{src:"/img/blog/1.jpg",alt:""}})])],1),t._v(" "),e("div",{staticClass:"sm-post"},[e("NuxtLink",{attrs:{to:"#"}},[e("p",[t._v("\n                    The Start-Up Ultimate Guide to Make Your WordPress\n                    Journal.\n                  ")]),t._v(" "),e("span",{staticClass:"date"},[t._v("14 sep 2022")])])],1)]),t._v(" "),e("li",[e("div",{staticClass:"img"},[e("NuxtLink",{attrs:{to:"#"}},[e("img",{attrs:{src:"/img/blog/2.jpg",alt:""}})])],1),t._v(" "),e("div",{staticClass:"sm-post"},[e("NuxtLink",{attrs:{to:"#"}},[e("p",[t._v("\n                    The Start-Up Ultimate Guide to Make Your WordPress\n                    Journal.\n                  ")]),t._v(" "),e("span",{staticClass:"date"},[t._v("14 sep 2022")])])],1)]),t._v(" "),t._m(2)])])]),t._v(" "),e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"item"},[t._m(3),t._v(" "),e("div",{staticClass:"social"},[e("NuxtLink",{attrs:{to:"#0"}},[e("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),e("NuxtLink",{attrs:{to:"#0"}},[e("i",{staticClass:"fab fa-twitter"})]),t._v(" "),e("NuxtLink",{attrs:{to:"#0"}},[e("i",{staticClass:"fab fa-instagram"})]),t._v(" "),e("NuxtLink",{attrs:{to:"#0"}},[e("i",{staticClass:"fab fa-youtube"})])],1),t._v(" "),e("div",{staticClass:"copy-right"},[e("p",[t._v("\n              © 2022, Vie Template. Made with passion by\n              "),e("NuxtLink",{attrs:{to:"#0"}},[t._v("ThemesCamp")]),t._v(".\n            ")],1)])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-4"},[e("div",{staticClass:"item md-mb50"},[e("div",{staticClass:"title"},[e("h5",[t._v("Contact Us")])]),t._v(" "),e("ul",[e("li",[e("span",{staticClass:"icon pe-7s-map-marker"}),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v("Officeal Address")]),t._v(" "),e("p",[t._v("504 White St . Dawsonville, GA 30534 , New York")])])]),t._v(" "),e("li",[e("span",{staticClass:"icon pe-7s-mail"}),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v("Email Us")]),t._v(" "),e("p",[t._v("support@gmail.com")])])]),t._v(" "),e("li",[e("span",{staticClass:"icon pe-7s-call"}),t._v(" "),e("div",{staticClass:"cont"},[e("h6",[t._v("Call Us")]),t._v(" "),e("p",[t._v("+87986451666")])])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"title"},[t("h5",[this._v("Recent News")])])},function(){var t=this._self._c;return t("li",[t("div",{staticClass:"subscribe"},[t("input",{attrs:{type:"text",placeholder:"Type Your Email"}}),this._v(" "),t("span",{staticClass:"subs pe-7s-paper-plane"})])])},function(){var t=this._self._c;return t("div",{staticClass:"logo"},[t("img",{attrs:{src:"/img/logo-light.png",alt:"logo"}})])}],!1,null,"2e8392e9",null);e.default=component.exports;installComponents(component,{Footer:n(566).default})},567:function(t,e,n){"use strict";e.a=function(t){var e=[];if(!t.parentNode)return e;for(var n=t.parentNode.firstChild;n;)1===n.nodeType&&n!==t&&e.push(n),n=n.nextSibling;return e}},568:function(t,e,n){"use strict";n.r(e);n(48),n(49),n(22);var o=n(567),l={props:["lr","theme","nr"],methods:{handleDropdown:function(t){if(Object(o.a)(t.target.parentElement).filter((function(t){return t.classList.contains("show")})).map((function(t){t.classList.remove("show"),t.childNodes[0]&&t.childNodes[0].setAttribute("aria-expanded",!1),t.childNodes[2]&&t.childNodes[2].classList.remove("show")})),t.target.setAttribute("aria-expanded",!0),t.target.parentElement){t.target.parentElement.classList.toggle("show");var e=t.target.parentElement.childNodes[2];e&&e.classList.toggle("show")}},handleMobileDropdown:function(t){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}}},r=n(86),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("nav",{ref:t.nr,staticClass:"navbar navbar-expand-lg change",class:"light"===t.theme?"light":""},[e("div",{staticClass:"container"},[e("NuxtLink",{staticClass:"logo",attrs:{to:"/"}},["light"===t.theme?e("img",{ref:"lr",attrs:{src:"/img/logo-dark.png",alt:"logo"}}):(t.theme,e("img",{ref:"lr",attrs:{src:"/img/logo-light.png",alt:"logo"}}))]),t._v(" "),e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:t.handleMobileDropdown}},[t._m(0)]),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[e("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Home\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home1-dark"}},[t._v("\n              Main Home\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home2-dark"}},[t._v("\n              Creative Agency\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home5-dark"}},[t._v("\n              Digital Agency\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home4-dark"}},[t._v("\n              Business One Page\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home3-dark"}},[t._v("\n              Corporate Business\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home6-dark"}},[t._v("\n              Modern Agency\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home7-dark"}},[t._v("\n              Freelancer\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/homepage/home8-dark"}},[t._v("\n              Architecture\n            ")])],1)]),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/about/about-dark"}},[t._v(" About ")])],1),t._v(" "),e("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[e("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Works\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/showcase/showcase-dark"}},[t._v("\n              Showcase Parallax\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/showcase3/showcase3-dark"}},[t._v("\n              Showcase Carousel\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/showcase2/showcase2-dark"}},[t._v("\n              Showcase Circle\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/works/works-dark"}},[t._v("\n              Portfolio Masonry\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/works2/works2-dark"}},[t._v("\n              Portfolio Filtering\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/works3/works3-dark"}},[t._v("\n              Portfolio Gallery\n            ")])],1)]),t._v(" "),e("li",{staticClass:"nav-item dropdown",on:{click:t.handleDropdown}},[e("span",{staticClass:"nav-link dropdown-toggle",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n            Blog\n          ")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog/blog-dark"}},[t._v("\n              Blog Standerd\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog-list/blog-list-dark"}},[t._v("\n              Blog List\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog-grid/blog-grid-dark"}},[t._v("\n              Blog Grid\n            ")]),t._v(" "),e("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"/blog-details/blog-details-dark"}},[t._v("\n              Blog Details\n            ")])],1)]),t._v(" "),e("li",{staticClass:"nav-item"},[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/contact/contact-dark"}},[t._v("\n            Contact\n          ")])],1)])])],1)])}),[function(){var t=this._self._c;return t("span",{staticClass:"icon-bar"},[t("i",{staticClass:"fas fa-bars"})])}],!1,null,"99068f48",null);e.default=component.exports},569:function(t,e,n){t.exports={}},572:function(t,e,n){"use strict";n(569)},573:function(t,e,n){"use strict";n.r(e);n(230);var o={props:{videoId:String,channel:String,isOpen:Boolean,youtube:{type:Object,default:function(){return{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark"}}},ratio:{type:String,default:"16:9"},vimeo:{type:Object,default:function(){return{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1}}},allowFullScreen:{type:Boolean,default:!0},animationSpeed:{type:Number,default:300},classNames:{type:Object,default:function(){return{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"}}},aria:{type:Object,default:function(){return{openMessage:"Modal video opened",dismissBtnMessage:"Close the modal video"}}}},methods:{getQueryString:function(t){var e="";for(var n in t)t.hasOwnProperty(n)&&null!==t[n]&&(e+=n+"="+t[n]+"&");return e.substr(0,e.length-1)},getYoutubeUrl:function(t,e){return"//www.youtube.com/embed/"+e+"?"+this.getQueryString(t)},getVimeoUrl:function(t,e){return"//player.vimeo.com/video/"+e+"?"+this.getQueryString(t)},getPadding:function(t){var e=t.split(":"),n=Number(e[0]);return 100*Number(e[1])/n+"%"}},computed:{fullVideoUrl:function(){return"youtube"===this.channel?this.getYoutubeUrl(this.youtube,this.videoId):"vimeo"===this.channel?this.getVimeoUrl(this.vimeo,this.videoId):void 0},paddingBottom:function(){return this.getPadding(this.ratio)}},watch:{isOpen:{handler:function(t){var e=this;this.$nextTick((function(){void 0!==e.$refs.closeBtn&&e.$refs.closeBtn.focus()}))},deep:!0}}},l=(n(572),n(86)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return t.isOpen?e("div",[e("div",{class:t.classNames.modalVideo,attrs:{tabIndex:"-1",role:"dialog","aria-label":t.aria.openMessage},on:{click:function(e){return t.$emit("update:isOpen",!1)},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.$emit("update:isOpen",!1)}}},[e("div",{class:t.classNames.modalVideoBody},[e("button",{ref:"closeBtn",class:t.classNames.modalVideoCloseBtn,attrs:{"aria-label":t.aria.dismissBtnMessage},on:{click:function(e){return t.$emit("update:isOpen",!1)}}}),t._v(" "),e("div",{class:t.classNames.modalVideoInner},[e("div",{class:t.classNames.modalVideoIframeWrap,style:{"padding-bottom":t.paddingBottom}},[e("iframe",{attrs:{src:t.fullVideoUrl,frameBorder:"0",allowFullScreen:t.allowFullScreen,tabIndex:"-1"}})])])])])]):t._e()}),[],!1,null,"fb8a83f8",null);e.default=component.exports},575:function(t,e,n){"use strict";var o=n(5),l=n(27),r=n(15),c=/"/g,d=o("".replace);t.exports=function(t,e,n,o){var v=r(l(t)),m="<"+e;return""!==n&&(m+=" "+n+'="'+d(r(o),c,"&quot;")+'"'),m+">"+v+"</"+e+">"}},576:function(t,e,n){"use strict";var o=n(4);t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},674:function(t,e,n){"use strict";var o=n(3),l=n(575);o({target:"String",proto:!0,forced:n(576)("small")},{small:function(){return l(this,"small","","")}})},675:function(t,e,n){"use strict";var o=n(3),l=n(575);o({target:"String",proto:!0,forced:n(576)("big")},{big:function(){return l(this,"big","","")}})},676:function(t,e,n){"use strict";var o=n(3),l=n(575);o({target:"String",proto:!0,forced:n(576)("link")},{link:function(t){return l(this,"a","href",t)}})},677:function(t,e,n){"use strict";n.r(e);n(674),n(675),n(676),n(50);var o={props:["projectHeaderData"]},l=n(86),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"page-header proj-det bg-img parallaxie valign",style:"background-image: url(".concat(t.projectHeaderData.projectHeaderImage,")"),attrs:{"data-overlay-dark":"4"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-7 col-md-9"},[e("div",{staticClass:"cont"},[e("h6",[t._v(t._s(t.projectHeaderData.title.small))]),t._v(" "),e("h2",[t._v(t._s(t.projectHeaderData.title.big))])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"item mt-30"},[e("h6",[t._v("Client")]),t._v(" "),e("p",[e("NuxtLink",{attrs:{to:t.projectHeaderData.clientURLLink}},[t._v("\n              "+t._s(t.projectHeaderData.clientURLName)+"\n            ")])],1)])]),t._v(" "),e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"item mt-30"},[e("h6",[t._v("Date")]),t._v(" "),e("p",[t._v(t._s(t.projectHeaderData.date))])])]),t._v(" "),e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"item mt-30"},[e("h6",[t._v("Categories")]),t._v(" "),e("p",t._l(t.projectHeaderData.categories,(function(n,o){return e("NuxtLink",{key:n.id,attrs:{to:n.link}},[t._v("\n              "+t._s(n.name)+"\n              "+t._s(t.projectHeaderData.categories.length!=o+1?" ,":"")+"\n            ")])})),1)])]),t._v(" "),e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"item mt-30"},[e("h6",[t._v("Tags")]),t._v(" "),e("p",t._l(t.projectHeaderData.tags,(function(n,o){return e("NuxtLink",{key:n.id,attrs:{to:"tag.link"}},[t._v("\n              "+t._s(n.name)+"\n              "+t._s(t.projectHeaderData.tags.length!=o+1?" ,":"")+"\n            ")])})),1)])])])])])}),[],!1,null,"faa41f94",null);e.default=component.exports},678:function(t,e,n){"use strict";n.r(e);n(50);var o={props:["projectIntroductionData"]},l=n(86),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"intro-section section-padding"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-lg-8 offset-lg-1 col-md-8"},[e("div",{staticClass:"text js-scroll__content"},[e("p",{staticClass:"extra-text"},[t._v("\n            "+t._s(t.projectIntroductionData.content)+"\n          ")]),t._v(" "),e("ul",{staticClass:"smp-list mt-30"},t._l(t.projectIntroductionData.spmList,(function(n){return e("li",{key:n.id},[t._v("\n              "+t._s(n.name)+"\n            ")])})),0)])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-3 col-md-4"},[e("div",{staticClass:"htit"},[e("h4",[e("span",[t._v("01 ")]),t._v(" Introduction")])])])}],!1,null,"aea13d04",null);e.default=component.exports},679:function(t,e,n){"use strict";n.r(e);var o={props:["projectGalleryData"]},l=n(86),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"projdtal"},[e("div",{staticClass:"popup-img"},[e("div",{staticClass:"row"},t._l(t.projectGalleryData,(function(n,o){return e("NuxtLink",{key:o,class:"col-md-".concat(o+1===t.projectGalleryData.length?"12":"3"," popimg"),attrs:{to:"#0"}},[e("img",{attrs:{alt:"",src:n}})])})),1)])])}),[],!1,null,"5a5df6f0",null);e.default=component.exports},680:function(t,e,n){"use strict";n.r(e);var o={props:["projectDescriptionData"]},l=n(86),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"intro-section section-padding"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-lg-8 offset-lg-1 col-md-8"},[e("div",{staticClass:"text js-scroll__content"},[e("p",{staticClass:"extra-text"},[t._v(t._s(t.projectDescriptionData.content))])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-3 col-md-4"},[e("div",{staticClass:"htit"},[e("h4",[e("span",[t._v("02 ")]),t._v(" Description")])])])}],!1,null,"a930a848",null);e.default=component.exports},681:function(t,e,n){"use strict";n.r(e);var o={props:["projectVideoData"],data:function(){return{videoIsOpen:!1}},methods:{openVideo:function(){this.videoIsOpen=!this.videoIsOpen}},computed:{videoChannel:function(){return"vimeo"},videoId:function(){return"127203262"}}},l=n(86),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"video-wrapper section-padding bg-img parallaxie valign",style:"\n          background-image: url(".concat(t.projectVideoData.projectHeaderImage,")"),attrs:{"data-overlay-dark":"4"}},[e("div",{staticClass:"full-width text-center"},[e("ModalVideo",{attrs:{channel:t.videoChannel,videoId:t.videoId,isOpen:t.videoIsOpen},on:{"update:isOpen":function(e){t.videoIsOpen=e},"update:is-open":function(e){t.videoIsOpen=e}}}),t._v(" "),e("a",{staticClass:"vid",on:{click:t.openVideo}},[t._m(0)])],1)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"vid-butn"},[t("span",{staticClass:"icon"},[t("i",{staticClass:"fas fa-play"})])])}],!1,null,"27d4a85e",null);e.default=component.exports;installComponents(component,{ModalVideo:n(573).default})},682:function(t,e,n){"use strict";n.r(e);var o={},l=n(86),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"next-prog section-padding"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"box"},[e("div",{staticClass:"bg-img valign",staticStyle:{"background-image":"url(/img/portfolio/project2/6.jpg)"},attrs:{"data-overlay-dark":"4"}},[e("div",{staticClass:"caption ontop valign"},[e("div",{staticClass:"o-hidden full-width"},[e("h1",[e("NuxtLink",{attrs:{to:"#0"}},[e("div",{staticClass:"stroke"},[t._v("Natural plus modern.")])])],1)])]),t._v(" "),e("div",{staticClass:"copy-cap valign"},[e("div",{staticClass:"cap full-width"},[e("h1",[e("NuxtLink",{attrs:{to:"#0"}},[e("span",[t._v("Natural plus modern.")])])],1)])])])])])])])])}),[],!1,null,"9c586c9c",null);e.default=component.exports},684:function(t){t.exports=JSON.parse('{"id":1,"title":{"small":"art & illustration","big":"Inspiring new space."},"clientURLLink":"#","projectHeaderImage":"/img/portfolio/project2/bg.jpg","videoLink":"https://vimeo.com/127203262","clientURLName":"Envato.com","date":"6 August 2022","categories":[{"id":1,"name":"Web Design","link":"#"},{"id":2,"name":"WordPress","link":"#"}],"tags":[{"id":1,"name":"Minimal","link":"#"},{"id":2,"name":"Modern","link":"#"},{"id":3,"name":"Design","link":"#"}],"intro":{"content":"We are a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success. We specialize in user interface design, including front-end development which we consider to be an integral part.","spmList":[{"id":1,"name":"Aenean sollicitudin"},{"id":2,"name":"lorem quis bibendum auctor"},{"id":31,"name":"nisi elit conseq uat ipsum"},{"id":4,"name":"nec sagittis sem nibh id elit"}]},"gallery":["/img/portfolio/project2/1.jpg","/img/portfolio/project2/2.jpg","/img/portfolio/project2/3.jpg","/img/portfolio/project2/5.jpg","/img/portfolio/project2/7.jpg"],"description":{"content":"We are a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success. We specialize in user interface design, including front-end development which we consider to be an integral part."}}')}}]);