(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{605:function(t,e,r){"use strict";r.r(e);var n=function(){var t=document.querySelector(".progress-wrap path"),e=t.getTotalLength();t.style.transition=t.style.WebkitTransition="none",t.style.strokeDasharray=e+" "+e,t.style.strokeDashoffset=e,t.getBoundingClientRect(),t.style.transition=t.style.WebkitTransition="stroke-dashoffset 10ms linear";var r=function(){var r=window.pageYOffset,n=document.documentElement.scrollHeight-window.innerHeight,progress=e-r*e/n;t.style.strokeDashoffset=progress};r(),window.addEventListener("scroll",r);var n=document.querySelector(".progress-wrap");window.addEventListener("scroll",(function(){window.pageYOffset>150?n.classList.add("active-progress"):document.querySelector(".progress-wrap").classList.remove("active-progress")})),n.addEventListener("click",(function(t){return t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1}))},o={mounted:function(){n()}},c=r(86),component=Object(c.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"progress-wrap cursor-pointer"},[t("svg",{staticClass:"progress-circle svg-content",attrs:{width:"100%",height:"100%",viewBox:"-1 -1 102 102"}},[t("path",{attrs:{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"}})])])}),[],!1,null,"7aa31b2b",null);e.default=component.exports}}]);