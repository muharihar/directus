parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"QdEO":[function(require,module,exports) {
module.exports={props:{name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}};
},{}],"iKSR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=i(require("../../../mixins/interface")),t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};function i(e){return e&&e.__esModule?e:{default:e}}function n(e,t){return o(e)||s(e,t)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(e,t){var i=[],n=!0,r=!1,s=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(i.push(o.value),!t||i.length!==t);n=!0);}catch(a){r=!0,s=a}finally{try{n||null==l.return||l.return()}finally{if(r)throw s}}return i}function o(e){if(Array.isArray(e))return e}function l(e){return c(e)||u(e)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function c(e){if(Array.isArray(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}function h(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var f={name:"interface-many-to-one",mixins:[e.default],data:function(){return{loading:!1,error:null,items:[],count:null,showListing:!1,selectionSaving:!1,newSelected:null,viewOptionsOverride:{},viewTypeOverride:null,viewQueryOverride:{},filtersOverride:[]}},computed:{relationSetup:function(){return!!this.relation},relatedPrimaryKeyField:function(){return this.$lodash.find(this.relation.collection_one.fields,{primary_key:!0}).field},valuePK:function(){return this.$lodash.isObject(this.value)?this.value[this.relatedPrimaryKeyField]:this.value},render:function(){return this.$helpers.micromustache.compile(this.options.template)},selection:function(){return this.value?this.newSelected?[this.newSelected]:this.valuePK?[h({},this.relatedPrimaryKeyField,this.valuePK)]:[]:[]},selectOptions:function(){var e=this;return 0===this.items.length?{}:this.$lodash.mapValues(this.$lodash.keyBy(this.items,this.relatedPrimaryKeyField),function(t){return e.render(t)})},preferences:function(){return"string"==typeof this.options.preferences?JSON.parse(this.options.preferences):this.options.preferences},filters:function(){return!1===this.relationSetup?null:l(this.preferences&&this.preferences.filters||[]).concat(l(this.filtersOverride))},viewOptions:function(){if(!1===this.relationSetup)return null;var e=this.preferences&&this.preferences.viewOptions||{};return t({},e,this.viewOptionsOverride)},viewType:function(){return!1===this.relationSetup?null:this.viewTypeOverride?this.viewTypeOverride:this.preferences&&this.preferences.viewType||"tabular"},viewQuery:function(){if(!1===this.relationSetup)return null;var e=this.preferences&&this.preferences.viewQuery||{};return t({},e,this.viewQueryOverride)}},created:function(){this.relationSetup&&this.fetchItems()},watch:{relation:function(){this.relationSetup&&this.fetchItems()}},methods:{emitValue:function(e){1===e.length?this.newSelected=e[0]:0===e.length?this.newSelected=null:this.newSelected=e[e.length-1],this.$emit("input",this.newSelected)},fetchItems:function(){var e=this;if(null!=this.relation){var t=this.relation.collection_one.collection;this.loading=!0;return Promise.all([this.$api.getItems(t,{fields:"*.*",meta:"total_count",limit:10}),this.value?this.$api.getItem(t,this.valuePK):null]).then(function(t){var i=n(t,2),r=i[0],s=r.meta,o=r.data,a=i[1];e.items=a?l(o).concat([a.data]):o,e.loading=!1,e.count=s.total_count}).catch(function(t){console.error(t),e.error=t,e.loading=!1})}},populateDropdown:function(){var e=this,t=!1;this.selectionSaving=!0,this.items.forEach(function(i){i[e.relatedPrimaryKeyField]===e.newSelected[e.relatedPrimaryKeyField]&&(t=!0)}),!1===t?this.$api.getItem(this.relation.collection_one.collection,this.newSelected[this.relatedPrimaryKeyField]).then(function(e){return e.data}).then(function(t){e.$emit("input",e.newSelected),e.items=l(e.items).concat([t]),e.selectionSaving=!1,e.showListing=!1}).catch(function(t){console.error(t),e.$events.emit("error",{notify:e.$t("something_went_wrong_body"),error:t})}):(this.$emit("input",this.newSelected),this.selectionSaving=!1,this.showListing=!1)},dismissModal:function(){this.showListing=!1,this.selectionSaving=!1,this.newSelected=null},setViewOptions:function(e){this.viewOptionsOverride=t({},this.viewOptionsOverride,e)},setViewQuery:function(e){this.viewQueryOverride=t({},this.viewQueryOverride,e)}}};exports.default=f;
(function(){var e=exports.default||module.exports;"function"==typeof e&&(e=e.options),Object.assign(e,{render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"interface-many-to-one"},[!1===e.relationSetup?i("div",{staticClass:"notice"},[i("p",[i("i",{staticClass:"material-icons"},[e._v("warning")]),e._v(" "+e._s(e.$t("interfaces-many-to-many-relation_not_setup"))+" ")])]):[i("v-select",{attrs:{name:e.name,id:e.name,placeholder:e.options.placeholder||"",options:e.selectOptions,value:e.valuePK,icon:e.options.icon},on:{input:function(t){e.$emit("input",t)}}}),e._v(" "),e.count>10?i("button",{attrs:{type:"button"},on:{click:function(t){e.showListing=!0}}}):e._e(),e._v(" "),i("v-spinner",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"spinner",attrs:{"line-fg-color":"var(--light-gray)","line-bg-color":"var(--lighter-gray)"}}),e._v(" "),e.showListing?i("portal",{attrs:{to:"modal"}},[i("v-modal",{attrs:{title:e.$t("select_existing"),buttons:{save:{text:"save",color:"accent",loading:e.selectionSaving,disabled:null===e.newSelected}}},on:{close:e.dismissModal,save:e.populateDropdown}},[i("v-items",{attrs:{collection:e.relation.collection_one.collection,selection:e.selection,filters:e.filters,"view-query":e.viewQuery,"view-type":e.viewType,"view-options":e.viewOptions},on:{options:e.setViewOptions,query:e.setViewQuery,select:e.emitValue}})],1)],1):e._e()]],2)},staticRenderFns:[],_compiled:!0,_scopeId:"data-v-868eed",functional:void 0});})();
},{"../../../mixins/interface":"QdEO"}]},{},["iKSR"], "__DirectusExtension__")