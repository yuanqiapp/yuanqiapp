(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-payGateWay-payGateWay"],{"0498":function(n,e,t){"use strict";t("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={data:function(){return{apply:""}},onLoad:function(){var n=uni.getStorageSync("alipay");console.log(n),document.querySelector("body").innerHTML=n,document.forms[0].submit();var e=getCurrentPages(),t=e[e.length-1].route;console.log("路由当前页面路径"+t)}};e.default=u},"6c41":function(n,e,t){"use strict";t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){}));var u=function(){var n=this.$createElement,e=this._self._c||n;return e("v-uni-view")},r=[]},e0ef:function(n,e,t){"use strict";t.r(e);var u=t("0498"),r=t.n(u);for(var a in u)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return u[n]}))}(a);e["default"]=r.a},e746:function(n,e,t){"use strict";t.r(e);var u=t("6c41"),r=t("e0ef");for(var a in r)["default"].indexOf(a)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(a);var o=t("f0c5"),c=Object(o["a"])(r["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],void 0);e["default"]=c.exports}}]);