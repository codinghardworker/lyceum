(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{575:function(t,e,r){"use strict";var n=r(5),c=r(27),o=r(15),l=/"/g,v=n("".replace);t.exports=function(t,e,r,n){var d=o(c(t)),_="<"+e;return""!==r&&(_+=" "+r+'="'+v(o(n),l,"&quot;")+'"'),_+">"+d+"</"+e+">"}},576:function(t,e,r){"use strict";var n=r(4);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},674:function(t,e,r){"use strict";var n=r(3),c=r(575);n({target:"String",proto:!0,forced:r(576)("small")},{small:function(){return c(this,"small","","")}})},675:function(t,e,r){"use strict";var n=r(3),c=r(575);n({target:"String",proto:!0,forced:r(576)("big")},{big:function(){return c(this,"big","","")}})},676:function(t,e,r){"use strict";var n=r(3),c=r(575);n({target:"String",proto:!0,forced:r(576)("link")},{link:function(t){return c(this,"a","href",t)}})},677:function(t,e,r){"use strict";r.r(e);r(674),r(675),r(676),r(50);var n={props:["projectHeaderData"]},c=r(86),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"page-header proj-det bg-img parallaxie valign",style:"background-image: url(".concat(t.projectHeaderData.projectHeaderImage,")"),attrs:{"data-overlay-dark":"4"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-7 col-md-9"},[e("div",{staticClass:"cont"},[e("h6",[t._v(t._s(t.projectHeaderData.title.small))]),t._v(" "),e("h2",[t._v(t._s(t.projectHeaderData.title.big))])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"item mt-30"},[e("h6",[t._v("Client")]),t._v(" "),e("p",[e("NuxtLink",{attrs:{to:t.projectHeaderData.clientURLLink}},[t._v("\n              "+t._s(t.projectHeaderData.clientURLName)+"\n            ")])],1)])]),t._v(" "),e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"item mt-30"},[e("h6",[t._v("Date")]),t._v(" "),e("p",[t._v(t._s(t.projectHeaderData.date))])])]),t._v(" "),e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"item mt-30"},[e("h6",[t._v("Categories")]),t._v(" "),e("p",t._l(t.projectHeaderData.categories,(function(r,n){return e("NuxtLink",{key:r.id,attrs:{to:r.link}},[t._v("\n              "+t._s(r.name)+"\n              "+t._s(t.projectHeaderData.categories.length!=n+1?" ,":"")+"\n            ")])})),1)])]),t._v(" "),e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"item mt-30"},[e("h6",[t._v("Tags")]),t._v(" "),e("p",t._l(t.projectHeaderData.tags,(function(r,n){return e("NuxtLink",{key:r.id,attrs:{to:"tag.link"}},[t._v("\n              "+t._s(r.name)+"\n              "+t._s(t.projectHeaderData.tags.length!=n+1?" ,":"")+"\n            ")])})),1)])])])])])}),[],!1,null,"faa41f94",null);e.default=component.exports}}]);