parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"QdEO":[function(require,module,exports) {
module.exports={props:{name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}};
},{}],"l+Nm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("../../../mixins/interface"));function t(e){return e&&e.__esModule?e:{default:e}}var r={name:"readonly-many-to-many",mixins:[e.default],methods:{render:function(e){return this.$helpers.micromustache.render(this.options.template,e)}}};exports.default=r;
(function(){var e=exports.default||module.exports;"function"==typeof e&&(e=e.options),Object.assign(e,{render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-popover",{attrs:{trigger:"hover"}},[n("div",{staticClass:"readonly-many-to-many"},[e._v(" "+e._s(e.$tc("item_count",(e.value||[]).length,{count:(e.value||[]).length}))+" ")]),e._v(" "),n("template",{slot:"popover"},[n("ul",{staticClass:"list"},e._l(e.value,function(t,o){return n("li",{key:o},[e._v(e._s(e.render(t)))])}))])],2)},staticRenderFns:[],_compiled:!0,_scopeId:"data-v-e8eb15",functional:void 0});})();
},{"../../../mixins/interface":"QdEO"}]},{},["l+Nm"], "__DirectusExtension__")