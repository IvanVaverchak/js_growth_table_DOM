parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";addEventListener("click",function(e){var r=document.querySelector(".append-row"),n=document.querySelector(".remove-row"),t=document.querySelector(".append-column"),d=document.querySelector(".remove-column"),l=document.querySelectorAll("tr");switch(e.target){case r:l.length>=9&&(r.disabled=!0),l.length>=2&&(n.disabled=!1),l[0].before(l[0].cloneNode(!0));break;case n:l.length<=10&&(r.disabled=!1),l.length<=3&&(n.disabled=!0),l[0].remove();break;case t:l[0].children.length>=9&&(t.disabled=!0),l[0].children.length>=2&&(d.disabled=!1),l.forEach(function(e){return e.insertAdjacentHTML("beforeend","\n        <td></td>\n      ")});break;case d:l[0].children.length<=10&&(t.disabled=!1),l[0].children.length<=3&&(d.disabled=!0),l.forEach(function(e){return e.lastElementChild.remove()});break;default:return}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.7ef59261.js.map