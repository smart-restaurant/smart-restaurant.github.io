(function(t){function e(e){for(var r,s,o=e[0],l=e[1],c=e[2],d=0,u=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&u.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);p&&p(e);while(u.length)u.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},i=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var p=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"09f7":function(t,e,a){},"243a":function(t,e,a){},5570:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("div",{staticClass:"map"},[a("map-loader",{attrs:{markers:t.markers,"map-config":t.mapConfig,apiKey:"AIzaSyAgXa8SXxQA1hrWVUU8p-G351swReg1-5o"}}),a("v-btn",{style:"bottom: "+(t.showMapSearchToggle?95:30)+"px; right: 10px;",attrs:{color:"white",elevation:"2",fab:"",absolute:""},on:{click:function(e){return t.searchText("我附近的餐廳")}}},[a("v-icon",{attrs:{color:"grey darken-3"}},[t._v("mdi-crosshairs-gps")])],1)],1),a("div",{staticClass:"map-search"},[a("v-text-field",{ref:"appSearch",attrs:{placeholder:"搜尋餐廳",solo:"","append-icon":"mdi-magnify",clearable:"","hide-details":"",autocomplete:"off",rounded:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchText(t.keyword)},"click:append":function(e){return t.searchText(t.keyword)},"click:clear":t.close},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),a("div",{staticClass:"mt-3"},[a("v-btn",{staticClass:"mr-2",attrs:{small:"",rounded:""},on:{click:function(e){return t.searchText("附近的餐廳")}}},[t._v(" 附近的餐廳 ")]),a("v-btn",{staticClass:"mr-2",attrs:{small:"",rounded:""},on:{click:function(e){return t.searchText("氣氛好的餐廳")}}},[t._v(" 氣氛好 ")]),a("v-btn",{staticClass:"mr-2",attrs:{small:"",rounded:""},on:{click:function(e){return t.searchText("食物好的餐廳")}}},[t._v(" 食物好 ")])],1)],1),a("keep-alive",[!t.showMapSearchToggle||t.showSearch?a("router-view"):t._e()],1),t.showMapSearchToggle?a("v-btn",{staticStyle:{bottom:"30px",right:"10px"},attrs:{absolute:"",rounded:"","x-large":""},on:{click:function(e){t.showSearch=!t.showSearch}}},[t.showSearch?[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-map")]),t._v("顯示地圖 ")]:[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-view-list")]),t._v("顯示清單 ")]],2):t._e()],1)],1)},i=[],s=(a("d81d"),a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"map"}}),this.google&&this.map?[a("map-provider",{attrs:{google:t.google,map:t.map}},[t._t("default")],2)]:t._e()],2)}),o=[],l=(a("fb6a"),a("a434"),a("2909")),c=a("b85c"),p=a("f464"),d=a.n(p),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._t("default")],2)},h=[],f={props:{google:Object,map:Object},provide:function(){return{google:this.google,map:this.map}}},v=f,g=a("2877"),m=Object(g["a"])(v,u,h,!1,null,null,null),y=m.exports,_=(a("99af"),a("d3b7"),a("bc3a")),x=a.n(_),k=new r["a"]({data:function(){return{resultList:[],keyword:"",lng:null,lat:null,price_level:0,rating:0,start_from:0,sort_by:null,items_per_page:40,mapLng:null,mapLat:null}},methods:{search:function(t){var e=this,a="".concat(window.APIBASE,"/search?keyword=").concat(t.keyword);this.mapLat&&this.mapLng&&(a+="&lat=".concat(this.mapLat,"&lng=").concat(this.mapLng)),"price_level"in t&&(a+="&price_level=".concat(t.price_level)),"rating"in t&&(a+="&rating=".concat(t.rating)),"sort_by"in t&&(a+="&sort_by=".concat(t.sort_by)),a+="&items_per_page=".concat("items_per_page"in t?t.items_per_page:this.items_per_page),a+="&start_from=".concat("start_from"in t?t.start_from:this.start_from),x.a.get(a).then((function(a){var n=a.data;n.error?console.error(n):(r["a"].set(e,"resultList",n.data),e.keyword=t.keyword,e.lat=t.lat||null,e.lng=t.lng||null,e.price_level=t.price_level||0,e.rating=t.rating||0,e.sort_by=t.sort_by,e.start_from=n.start_from,e.items_per_page=n.items_per_page,e.$ga.event({eventCategory:"search",eventAction:"searchDirect",eventLabel:"direct",eventValue:n}))}))},searchNearby:function(t){var e=this,a="".concat(window.APIBASE,"/search?lat=").concat(t.lat,"&lng=").concat(t.lng);"price_level"in t&&(a+="&price_level=".concat(t.price_level)),"rating"in t&&(a+="&rating=".concat(t.rating)),"sort_by"in t&&(a+="&sort_by=".concat(t.sort_by)),a+="&items_per_page=".concat("items_per_page"in t?t.items_per_page:this.items_per_page),a+="&start_from=".concat("start_from"in t?t.start_from:this.start_from),x.a.get(a).then((function(a){var n=a.data;n.error?console.error(n):(r["a"].set(e,"resultList",n.data),e.keyword="",e.lat=t.lat||null,e.lng=t.lng||null,e.price_level=t.price_level||0,e.rating=t.rating||0,e.sort_by=t.sort_by,e.start_from=n.start_from,e.items_per_page=n.items_per_page,e.$ga.event({eventCategory:"search",eventAction:"searchNearby",eventLabel:"nearby",eventValue:n}))}))},nextPage:function(){var t=this,e="".concat(window.APIBASE,"/search?")+"start_from=".concat(this.start_from+this.items_per_page)+"&items_per_page=".concat(this.items_per_page);this.keyword&&(e+="&keyword=".concat(this.keyword)),this.lat&&this.lng&&(e+="&lat=".concat(this.lat),e+="&lng=".concat(this.lng)),this.price_level&&(e+="&price_level=".concat(this.price_level)),this.rating&&(e+="&rating=".concat(this.rating)),x.a.get(e).then((function(e){var a=e.data;a.error?console.error(a):(t.resultList.concat(a.data),t.start_from=a.start_from,t.items_per_page=a.items_per_page)}))},clear:function(){r["a"].set(this,"resultList",[])},geoPermissionQuery:function(){var t=this;new Promise((function(e,a){navigator.permissions.query({name:"geolocation"}).then((function(r){"granted"===r.state?(t.geoPermissionGranted=!0,e(!0)):(t.geoPermissionGranted=!1,a())}))}))},getUserPosition:function(){var t=this;new Promise((function(e,a){navigator.geolocation.getCurrentPosition((function(a){var r=a.coords.latitude+0,n=a.coords.longitude-.008755;t.searchNearby(r,n),e({lat:r,lng:n})}),(function(t){console.error(t),alert("請開啟您的定位功能！"),a(t)}))}))},isReady:function(){this.ready=!0,this.$emit("ready")},wait:function(){var t=this;return new Promise((function(e){!0===t.ready?e():t.$once("ready",(function(){return e()}))}))}},created:function(){}}),b={props:{mapConfig:Object,apiKey:String,markers:Array},components:{MapProvider:y},watch:{markers:function(t){var e=this;this.removeAllMarkers();var a,r=Object(c["a"])(t);try{for(r.s();!(a=r.n()).done;){var n=a.value;this.addMarker(n)}}catch(p){r.e(p)}finally{r.f()}if(t.length>0){var i=t.map((function(t){return t.position.lat+e.adjustLat})),s=t.map((function(t){return t.position.lng+e.adjustLng})),o={south:Math.min.apply(Math,Object(l["a"])(i)),west:Math.min.apply(Math,Object(l["a"])(s)),north:Math.max.apply(Math,Object(l["a"])(i)),east:Math.max.apply(Math,Object(l["a"])(s))};this.fitBounds(o)}}},data:function(){return{google:null,map:null,markersInst:[],markersIds:[],adjustLat:0,adjustLng:.008755}},mounted:function(){var t=this;d()({apiKey:this.apiKey}).then((function(e){t.google=e,t.initializeMap();var a,r=Object(c["a"])(t.markers);try{for(r.s();!(a=r.n()).done;){var n=a.value;t.addMarker(n)}}catch(i){r.e(i)}finally{r.f()}}))},methods:{initializeMap:function(){var t=this,e=this.$el.querySelector("#map"),a=this.google.maps.Map;this.map=new a(e,this.mapConfig),this.map.addListener("zoom_changed",(function(){t.$emit("zoom-changed",t.map.getZoom())}));var r=this.map.getCenter(),n={lat:r.lat()-this.adjustLat,lng:r.lng()-this.adjustLng};k.mapLat=n.lat,k.mapLng=n.lng,this.map.addListener("center_changed",(function(){var e=t.map.getCenter(),a={lat:e.lat()-t.adjustLat,lng:e.lng()-t.adjustLng};t.$emit("center-changed",a),k.mapLat=a.lat,k.mapLng=a.lng})),k.$emit("map-ready")},removeAllMarkers:function(){var t,e=Object(c["a"])(this.markersInst);try{for(e.s();!(t=e.n()).done;){var a=t.value;a.setMap(null)}}catch(s){e.e(s)}finally{e.f()}this.markersInst.splice(0);var r,n=Object(c["a"])(this.markersIds);try{for(n.s();!(r=n.n()).done;){var i=r.value;k.$off("marker-highlight-".concat(i))}}catch(s){n.e(s)}finally{n.f()}},addMarker:function(t){var e=this,a=this.google.maps.Marker,r={lat:t.position.lat+this.adjustLat,lng:t.position.lng+this.adjustLng},n=new a({position:r,map:this.map,title:t.title||"Child marker!!",id:t.id});this.markersInst.push(n);var i=new a({map:this.map,position:r,label:{color:"black",fontSize:"16px",text:t.title.slice(0,30),className:"marker-label"},icon:{url:"https://maps.google.com/mapfiles/kml/shapes/library_maps.png",scaledSize:new this.google.maps.Size(0,0),origin:new this.google.maps.Point(0,0),anchor:new this.google.maps.Point(0,0),labelOrigin:new this.google.maps.Point(25,-30)}});if(this.markersInst.push(i),t.aspectDescription){var s=new a({map:this.map,position:r,label:{color:"#000000",fontSize:"12px",text:t.aspectDescription,className:"marker-label"},icon:{url:"https://maps.google.com/mapfiles/kml/shapes/library_maps.png",scaledSize:new this.google.maps.Size(0,0),origin:new this.google.maps.Point(0,0),anchor:new this.google.maps.Point(0,0),labelOrigin:new this.google.maps.Point(25,-12)}});this.markersInst.push(s)}n.addListener("click",(function(){e.$emit("marker-click",t.id),n.setAnimation(e.google.maps.Animation.BOUNCE),n.setAnimation(null),e.$router.push("/detail/".concat(t.id))})),k.$on("marker-highlight-".concat(t.id),(function(){n.setAnimation(e.google.maps.Animation.BOUNCE),n.setAnimation(null)})),this.markersIds.push(t.id)},setCenter:function(t){this.map.setCenter(t),k.mapLat=t.lat+this.adjustLat,k.mapLng=t.lng+this.adjustLng},fitBounds:function(t){this.map.fitBounds(t,{left:this.$vuetify.breakpoint.mobile?20:450,bottom:20,right:20,top:20})},setZoom:function(t){this.map.setZoom(t)}}},w=b,S=(a("a3f6"),Object(g["a"])(w,s,o,!1,null,null,null)),A=S.exports,L=new r["a"]({}),E=(a("4de4"),[{text:"食物",key:"food"},{text:"服務",key:"service"},{text:"氣氛",key:"atmosphere"},{text:"清潔",key:"cleanliness"},{text:"價值",key:"value"}]),C=function(){var t={};return E.map((function(e){return t[e.key]=e.text})),t}();function I(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];function a(t){return t>=4.5?e?'\n        <span>\n          <i aria-hidden="true" class="v-icon notranslate mdi mdi-check-all theme--light" style="color: green; position: relative; top: -2px;"></i>\n        </span >\n        ':"✔️✔️":t<4.5&&t>=3.5?e?'\n        <span>\n          <i aria-hidden="true" class="v-icon notranslate mdi mdi-check theme--light" style="color: green; position: relative; top: -2px;"></i>\n        </span >\n        ':"✔️":t<3.5&&t>=2.5?e?'\n        <span>\n          <i aria-hidden="true" class="v-icon notranslate mdi mdi-alert theme--light" style="color: #ffe000; position: relative; top: -2px;"></i>\n        </span >\n        ':"⚠️":t<2.5?e?'\n        <span>\n          <i aria-hidden="true" class="v-icon notranslate mdi mdi-close theme--light" style="color: red; position: relative; top: -2px;"></i>\n        </span >\n        ':"❌":void 0}var r=E.map((function(e){return{key:e.key,rating:t["".concat(e.key,"_rating")],count:t["".concat(e.key,"_count")]}}));return r=r.filter((function(t){return t.count>=20})),r.sort((function(t,e){return e.rating-t.rating})),0===r.length?"":1===r.length?C[r[0].key]+a(r[0].rating):C[r[0].key]+a(r[0].rating)+" · "+C[r[r.length-1].key]+a(r[r.length-1].rating)}var R={name:"App",components:{MapLoader:A},data:function(){return{keyword:"",mapConfig:{mapId:"2d966253da63a7e7",zoom:12,center:{lat:24.79612,lng:120.993},fullscreenControl:!1,gestureHandling:"greedy",streetViewControl:!1,mapTypeControl:!1,zoomControl:!1,styles:[{featureType:"road",stylers:[{visibility:"off"}]}]},showSearch:!0}},computed:{showMapSearchToggle:function(){return this.$vuetify.breakpoint.mobile&&"Search"===this.$route.name},SearchEngine:function(){return k},markers:function(){return 0===this.SearchEngine.resultList.length?[]:this.SearchEngine.resultList.map((function(t){return{position:{lat:parseFloat(t.lat),lng:parseFloat(t.lng)},id:t.cid,title:t.name,aspectDescription:I(t,!1)}}))}},methods:{blur:function(){this.$refs.appSearch.blur()},close:function(){this.keyword="",L.$emit("search-clear"),this.$router.push("/"),this.SearchEngine.clear(),this.blur()},searchText:function(t){t&&(console.log("App:",t||this.keyword),t&&(this.keyword=t),this.showSearch=!0,this.$router.push("/search/".concat(this.keyword)),this.blur())}},created:function(){"Search"===this.$router.currentRoute.name&&this.$router.push("/")},mounted:function(){var t=this;L.$on("search-clear",(function(){t.keyword=""}))}},T=R,$=(a("9eff"),a("6544")),P=a.n($),j=a("7496"),D=a("8336"),B=a("132d"),O=a("f6c4"),V=a("8654"),M=Object(g["a"])(T,n,i,!1,null,"3e21b494",null),z=M.exports;P()(M,{VApp:j["a"],VBtn:D["a"],VIcon:B["a"],VMain:O["a"],VTextField:V["a"]});var N=a("8c4f"),F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"panel search",staticStyle:{"padding-bottom":"64px"}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"","pb-3":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"","mb-3":""}},[a("v-text-field",{ref:"searchSearch",attrs:{placeholder:"搜尋",solo:"",clearable:"","hide-details":"","prepend-icon":"mdi-arrow-left","append-icon":"mdi-magnify",autocomplete:"off",rounded:""},on:{"click:prepend":t.close,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchText(t.keyword)},"click:append":function(e){return t.searchText(t.keyword)},"click:clear":t.close},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-layout",[a("v-flex",{attrs:{xs4:"","pr-1":""}},[a("v-select",{attrs:{items:t.ratingItems,dense:"",outlined:"","hide-details":""},on:{change:function(e){return t.search()}},model:{value:t.filterRating,callback:function(e){t.filterRating=e},expression:"filterRating"}})],1),a("v-flex",{attrs:{xs4:"","pl-1":"","pr-1":""}},[a("v-select",{attrs:{items:t.priceLevelItems,dense:"",outlined:"","hide-details":""},on:{change:function(e){return t.search()}},model:{value:t.filterPriceLevel,callback:function(e){t.filterPriceLevel=e},expression:"filterPriceLevel"}})],1),a("v-flex",{attrs:{xs4:"","pl-1":""}},[a("v-select",{attrs:{items:t.sortByList,dense:"",outlined:"","hide-details":""},on:{change:function(e){return t.search()}},model:{value:t.filterSortBy,callback:function(e){t.filterSortBy=e},expression:"filterSortBy"}})],1)],1)],1)],1)],1),a("v-flex",{attrs:{xs12:""}},[a("v-layout",{attrs:{wrap:""}},[0===t.SearchEngine.resultList.length?[a("v-flex",{staticStyle:{"text-align":"center"},attrs:{xs12:"","pt-5":""}},[t._v(" 沒有符合的項目 ")])]:t._e(),t._l(t.SearchEngine.resultList,(function(e,r){return[a("v-flex",{key:r,staticStyle:{cursor:"pointer"},attrs:{xs12:""},on:{click:function(a){t.SearchEngine.$emit("marker-highlight-"+e.cid),t.$router.push("/detail/"+e.cid)}}},[a("v-layout",[a("v-flex",{staticClass:"search-item-content",attrs:{xs8:"","pr-2":"","pt-3":""}},[a("h3",{staticStyle:{height:"28px",overflow:"hidden","text-overflow":"ellipse","text-wrap":"no-wrap"}},[t._v(" "+t._s(e.name)+" ")]),a("div",{staticStyle:{height:"24px",overflow:"hidden"}},[a("span",{staticClass:"yellow--text text--darken-4"},[t._v(" "+t._s(e.rating)+" ")]),e.rating?a("v-rating",{staticStyle:{display:"inline",position:"relative",top:"-2px"},attrs:{dense:"","empty-icon":"mdi-star-outline","full-icon":"mdi-star","half-icon":"mdi-star-half-full",hover:"",length:"5",value:e.rating,readonly:"",size:"18","background-color":"yellow darken-4",color:"yellow darken-4","half-increments":""}}):t._e(),e.user_ratings_total?a("span",{staticClass:"grey--text text--darken-1"},[t._v(" ("+t._s(e.user_ratings_total)+") ")]):t._e(),e.price_level?a("span",{staticClass:"grey--text text--darken-1"},[t._v(" · "+t._s("$".repeat(e.price_level))+" ")]):t._e(),e.user_ratings_total?t._e():a("span",{staticClass:"grey--text text--darken-1"},[t._v(" 評論不足 ")])],1),a("div",{staticClass:"grey--text text--darken-1",staticStyle:{height:"24px",overflow:"hidden"}},[t._v(" "+t._s(e.formatted_address)+" ")]),a("div",{staticStyle:{height:"24px",overflow:"hidden"},domProps:{innerHTML:t._s(t.aspectRatingDescription(e,!0,t.filterSortBy))}})]),a("v-flex",{staticClass:"search-item-img",attrs:{xs4:"","pt-2":"","pb-2":""}},[a("placeholder-image",{staticStyle:{"background-size":"cover","border-radius":"4px"},attrs:{weight:"100%",height:"100%",src:t.APIBASE+"/img/place_header/"+e.cid+".jpg","error-src":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="}})],1)],1),a("v-divider")],1)]})),a("v-flex",[a("v-container",{staticStyle:{"text-align":"center"},attrs:{"pt-3":""}},[t.reportedMissingPlace?[a("p",[t._v("感謝您的回報")])]:[a("v-btn",{attrs:{outlined:""},on:{click:t.feedbackReportMissingPlace}},[t._v("找不到餐廳嗎？")])]],2)],1)],2)],1)],1)],1)},U=[],q=(a("ac1f"),a("841c"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-img",{staticStyle:{},attrs:{"aspect-ratio":t.aspectRatio,height:t.height,weight:t.weight,src:t.srcWrapper},on:{error:t.onError}},[t._t("default")],2)}),G=[],H={name:"PlaceholderImage",props:["height","aspectRatio","src","weight","errorSrc"],data:function(){return{isError:!1}},watch:{src:function(){this.clear()}},computed:{srcWrapper:function(){return!this.src||this.isError?this.errorSrc||"":this.src}},methods:{onError:function(){this.isError=!0,this.$emit("error")},clear:function(){this.isError=!1}}},K=H,Q=a("adda"),Y=Object(g["a"])(K,q,G,!1,null,null,null),W=Y.exports;P()(Y,{VImg:Q["a"]});var Z={mounted:function(){var t=this,e=this.$el;e.addEventListener("scroll",(function(){t.scrollTop=e.scrollTop}))},activated:function(){if(this.scrollTop){var t=this.$el;t.scrollTop=this.scrollTop}},deactivated:function(){}},J={name:"Search",mixins:[Z],components:{PlaceholderImage:W},data:function(){return{text:"",keyword:"",ratingItems:[{text:"評價",value:0},{text:"1⭐+",value:1},{text:"2⭐+",value:2},{text:"3⭐+",value:3},{text:"4⭐+",value:4},{text:"4.5⭐+",value:4.5}],filterRating:0,priceLevelItems:[{text:"價格",value:0},{text:"$+",value:1},{text:"$$+",value:2},{text:"$$$+",value:3},{text:"$$$$+",value:4}],filterPriceLevel:0,filterSortBy:"distance",sortByList:[{text:"距離排序",value:"distance"},{text:"評價排序",value:"rating"},{text:"食物評價排序",value:"food_rating"},{text:"服務評價排序",value:"service_rating"},{text:"氣氛評價排序",value:"atmosphere_rating"},{text:"清潔評價排序",value:"cleanliness_rating"},{text:"價值評價排序",value:"value_rating"}],reportedMissingPlace:!1}},computed:{APIBASE:function(){return window.APIBASE},SearchEngine:function(){return k},aspectRatingsDict:function(){return C},aspectRatingsList:function(){return E},aspectRatingDescription:function(){return I}},methods:{blur:function(){this.$refs.searchSearch.blur()},close:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.keyword="",this.filterRating=0,this.filterPriceLevel=0,this.filterSortBy="distance",L.$emit("search-clear"),this.blur(),t&&this.$router.push("/"),this.SearchEngine.clear(),this.reportedMissingPlace=!1,blur()},search:function(t){t||(t=this.keyword),this.keyword=t,this.blur(),this.SearchEngine.clear(),console.log("perform searching.",t),"附近的餐廳"===t?this.searchNearby(this.SearchEngine.mapLat,this.SearchEngine.mapLng):"我附近的餐廳"===t?this.searchNearbyGPS():"氣氛好的餐廳"===t?(this.filterSortBy="atmosphere_rating",this.searchNearby(this.SearchEngine.mapLat,this.SearchEngine.mapLng)):"食物好的餐廳"===t?(this.filterSortBy="food_rating",this.searchNearby(this.SearchEngine.mapLat,this.SearchEngine.mapLng)):this.SearchEngine.search({keyword:t,rating:this.filterRating,price_level:this.filterPriceLevel,sort_by:this.filterSortBy})},searchNearbyGPS:function(){var t=this;console.log("gps"),navigator.geolocation.getCurrentPosition((function(e){console.log(e);var a=e.coords.latitude+0,r=e.coords.longitude-.008755;t.searchNearby(a,r)}),(function(t){console.error(t),alert("請開啟您的定位功能！")}))},searchNearby:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r={keyword:a,lng:e,lat:t,rating:this.filterRating,price_level:this.filterPriceLevel,sort_by:this.filterSortBy};console.log(r),this.SearchEngine.searchNearby(r)},searchText:function(){console.log("searchText",this.keyword),this.$router.push("/search/".concat(this.keyword))},feedbackReportMissingPlace:function(){var t=this;if(this.keyword)return this.reportedMissingPlace=!0,new Promise((function(e,a){x.a.post("".concat(window.APIBASE,"/feedback/missing_place"),{name:t.keyword}).then((function(t){var r=t.data;if(r.error)return console.error(r),void a(r);e()}))}))}},mounted:function(){var t=this;this.keyword=this.$route.params.query,this.search(this.keyword),console.log("mounted"),L.$on("search-clear",(function(){t.keyword=""}))},created:function(){this.keyword=this.$route.params.query},beforeRouteEnter:function(t,e,a){a((function(e){console.log(e.keyword,t.params.query),e.keyword!==t.params.query&&(console.log("beforeRouteEnter!"),e.keyword=t.params.query,e.search(t.params.query))}))},beforeRouteUpdate:function(t,e,a){console.log("beforeRouteUpdate!",t.params.query),this.search(t.params.query),a()},beforeRouteLeave:function(t,e,a){console.log("beforeRouteLeave!"),"Home"===t.name&&this.close(!1),a()}},X=J,tt=(a("b11a"),a("a523")),et=a("ce7e"),at=a("0e8f"),rt=a("a722"),nt=a("1d4d"),it=a("b974"),st=Object(g["a"])(X,F,U,!1,null,"f040ceda",null),ot=st.exports;P()(st,{VBtn:D["a"],VContainer:tt["a"],VDivider:et["a"],VFlex:at["a"],VLayout:rt["a"],VRating:nt["a"],VSelect:it["a"],VTextField:V["a"]});var lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"panel detail",staticStyle:{"padding-bottom":"64px"},attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"","pb-3":""}},[a("placeholder-image",{attrs:{"aspect-ratio":2,weight:"100%",src:t.imageFilename,"error-src":"https://post.healthline.com/wp-content/uploads/2020/09/healthy-eating-ingredients-1200x628-facebook-1200x628.jpg"}},[a("v-container",[a("v-btn",{staticStyle:{"background-color":"#ffffffdd"},attrs:{depressed:""},on:{click:function(e){return t.$router.back()}}},[a("v-icon",[t._v("mdi-arrow-left")]),t._v(" 返回上一頁 ")],1),a("v-btn",{staticStyle:{"background-color":"#ffffffdd",float:"right"},attrs:{depressed:""},on:{click:t.close}},[a("v-icon",[t._v("mdi-close")]),t._v(" 關閉 ")],1)],1)],1),a("v-layout",{attrs:{wrap:""}},[t.placeInfo?a("v-flex",{attrs:{xs12:""}},[a("v-container",[a("h2",[t._v(t._s(t.placeInfo.name))]),a("p",[a("span",[a("span",{staticClass:"yellow--text text--darken-4"},[t._v(" "+t._s(t.placeInfo.rating)+" ")]),t.placeInfo.rating?a("v-rating",{staticStyle:{display:"inline",position:"relative",top:"-2px"},attrs:{dense:"","empty-icon":"mdi-star-outline","full-icon":"mdi-star","half-icon":"mdi-star-half-full",hover:"",length:"5",value:t.placeInfo.rating,readonly:"",size:"18","background-color":"yellow darken-4",color:"yellow darken-4","half-increments":""}}):t._e(),t.placeInfo.user_ratings_total?a("span",{staticClass:"grey--text text--darken-1"},[t._v(" ("+t._s(t.placeInfo.user_ratings_total)+"則評論) ")]):t._e(),t.placeInfo.price_level?a("span",{staticClass:"grey--text text--darken-1"},[t._v(" · "+t._s("$".repeat(t.placeInfo.price_level))+" ")]):t._e(),t.placeInfo.user_ratings_total?t._e():a("span",{staticClass:"grey--text text--darken-1"},[t._v(" 評論不足 ")])],1),a("br"),a("span",{domProps:{innerHTML:t._s(t.aspectRatingDescription(t.placeInfo,!0))}})])]),a("v-list",[a("v-divider"),a("v-list-item",{attrs:{href:"https://www.google.com.tw/maps/search/"+t.placeInfo.name+" "+(t.placeInfo.formatted_address||""),target:"_blank"}},[a("v-list-item-icon",[a("v-icon",{attrs:{color:"primary"}},[t._v("mdi-map")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" 在 Google Map 中開啟 ")])],1)],1),a("v-divider"),t.placeInfo.formatted_address?a("v-list-item",[a("v-list-item-icon",[a("v-icon",{attrs:{color:"primary"}},[t._v("mdi-map-marker")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(t.placeInfo.formatted_address)+" ")])],1)],1):t._e(),t.placeInfo.formatted_address?a("v-divider"):t._e()],1),t.hasAnyAspectRatings?a("v-container",[a("h3",{staticClass:"mt-3 mb-2"},[t._v("評論摘要")]),a("v-layout",{attrs:{wrap:""}},t._l(t.aspectRatingsList.filter((function(e){return t.placeInfo[e.key+"_rating"]})),(function(e){return a("v-flex",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.key,staticStyle:{"text-align":"center","user-select":"none",cursor:"pointer"},on:{click:function(a){t.reviewsAspect=e.key,t.loadReviews()}}},[a("div",{staticStyle:{"font-size":"15px"}},[t._v(" "+t._s(e.text)+" ")]),a("div",{staticClass:"yellow--text text--darken-4",staticStyle:{"font-size":"24px","line-height":"30px"}},[t._v(" "+t._s(t.placeInfo[e.key+"_rating"].toFixed(1))+" ")]),a("div",{staticClass:"grey--text",staticStyle:{"font-size":"14px"}},[t._v(" ("+t._s(t.placeInfo[e.key+"_count"])+") ")])])})),1)],1):t._e(),t.hasAnyAspectRatings?a("v-divider"):t._e(),t.hasAnyAspectRatings?a("v-container",[t.rated===t.RATED_STATE.NOT_RATED?a("v-layout",[a("v-flex",{staticStyle:{"padding-top":"3px","font-size":"14px"}},[t._v(" 您覺得這些資訊準確嗎？ ")]),a("v-flex",{staticStyle:{width:"175px","text-align":"right"}},[a("v-btn",{staticClass:"mr-3",attrs:{text:"",small:""},on:{click:function(e){return t.feedback(0)}}},[t._v(" 不準確 ")]),a("v-btn",{attrs:{outlined:"",small:""},on:{click:function(e){return t.feedback(1)}}},[t._v(" 準確 ")])],1)],1):t._e(),t.rated===t.RATED_STATE.DETAIL?a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticStyle:{"padding-top":"3px","font-size":"14px"},attrs:{xs12:""}},[a("h3",{staticClass:"mt-3 mb-2"},[t._v("請問您覺得是哪個指標不準確呢？")]),a("span",{staticClass:"grey--text text--darken-1"},[t._v(" 請透過右方的星星來調整您認為的分數 ")])]),t.hasAnyAspectRatings?a("v-flex",{staticClass:"mt-2",attrs:{xs12:""}},[t._l(t.aspectRatingsList.filter((function(e){return t.placeInfo[e.key+"_rating"]})),(function(e){return[a("v-layout",{key:e.key,staticClass:"pt-2"},[a("v-flex",{staticStyle:{"text-align":"left","margin-top":"3px"}},[a("span",{staticClass:"pr-1"},[t._v(" "+t._s(e.text)+" ")]),a("span",{staticClass:"grey--text text--darken-1",staticStyle:{display:"inline",position:"relative",top:"-1px","font-size":"14px"}},[t._v(" 原分數 ")]),a("span",{staticClass:"yellow--text text--darken-4"},[t._v(" "+t._s(t.placeInfo[e.key+"_rating"].toFixed(1))+" ")]),a("v-icon",{staticStyle:{display:"inline",position:"relative",top:"-2px"},attrs:{color:"grey--text text--darken-"}},[t._v(" mdi-arrow-right ")]),a("span",{staticClass:"grey--text text--darken-1",staticStyle:{display:"inline",position:"relative",top:"-1px","font-size":"14px"}},[t._v(" 您認為 ")]),a("span",{staticClass:"yellow--text text--darken-4"},[t._v(" "+t._s(t.feedbackDetail[e.key+"_rating"].toFixed(1))+" ")])],1),a("v-flex",{staticStyle:{"text-align":"right","margin-top":"3px"}},[t.placeInfo[e.key+"_rating"]?a("v-rating",{staticStyle:{display:"inline",position:"relative",top:"-2px"},attrs:{dense:"","empty-icon":"mdi-star-outline","full-icon":"mdi-star","half-icon":"mdi-star-half-full",hover:"",length:"5",size:"24","background-color":"yellow darken-4",color:"yellow darken-4","half-increments":""},model:{value:t.feedbackDetail[e.key+"_rating"],callback:function(a){t.$set(t.feedbackDetail,e.key+"_rating",a)},expression:"feedbackDetail[`${item.key}_rating`]"}}):t._e()],1)],1)]}))],2):t._e(),a("v-flex",{attrs:{xs12:""}},[a("v-textarea",{staticClass:"mt-4",attrs:{label:"其他想法或建議",outlined:"",rows:"2"},model:{value:t.feedbackDetail.memo,callback:function(e){t.$set(t.feedbackDetail,"memo",e)},expression:"feedbackDetail.memo"}})],1),a("v-flex",{staticStyle:{"text-align":"right"},attrs:{xs12:""}},[a("v-btn",{staticClass:"mr-3",attrs:{text:""},on:{click:function(e){t.rated=t.RATED_STATE.RATED}}},[t._v(" 取消 ")]),a("v-btn",{attrs:{text:"",outlined:""},on:{click:function(e){return t.sendFeedbackDetail()}}},[t._v(" 送出 ")])],1)],1):t._e(),t.rated===t.RATED_STATE.RATED?a("v-layout",[a("div",{staticStyle:{margin:"0 auto","text-align":"center"}},[a("img",{staticStyle:{width:"150px"},attrs:{src:"https://chojugiga.com/c/choju54_0031/choju54_0031.png"}}),a("p",[t._v("謝謝你")])])]):t._e()],1):t._e(),t.hasAnyAspectRatings?a("v-divider"):t._e(),a("v-container",[a("h3",{staticClass:"mt-5 mb-2"},[t._v("評論")]),a("v-layout",[a("v-flex",{attrs:{"mr-3":""}},[a("v-select",{attrs:{items:t.reviewsAspectList,dense:"",outlined:"","hide-details":""},on:{change:function(e){return t.loadReviews()}},model:{value:t.reviewsAspect,callback:function(e){t.reviewsAspect=e},expression:"reviewsAspect"}})],1),a("v-flex",[a("v-select",{attrs:{items:t.reviewsSortByList,dense:"",outlined:"","hide-details":""},on:{change:function(e){return t.loadReviews()}},model:{value:t.reviewsSortBy,callback:function(e){t.reviewsSortBy=e},expression:"reviewsSortBy"}})],1)],1)],1),t._l(t.reviews,(function(e){return[a("v-container",{key:e.id},[a("v-layout",[a("v-flex",{staticClass:"pr-3",staticStyle:{"padding-top":"2px"}},[a("v-avatar",{attrs:{color:e.rating>3?"green":"red",size:"42"}},[e.rating>3?a("v-icon",{attrs:{dark:""}},[t._v(" mdi-thumb-up ")]):a("v-icon",{attrs:{dark:""}},[t._v(" mdi-thumb-down ")])],1)],1),a("v-flex",{attrs:{xs12:""}},[a("span",{staticClass:"grey--text text--darken-1",staticStyle:{"font-size":"16px"}},[t._v(" "+t._s(e.author_name)+" ")]),a("br"),a("span",{staticClass:"yellow--text text--darken-4"},[t._v(" "+t._s(e.rating)+" ")]),a("v-rating",{staticStyle:{display:"inline",position:"relative",top:"-2px"},attrs:{dense:"","empty-icon":"mdi-star-outline","full-icon":"mdi-star","half-icon":"mdi-star-half-full",hover:"",length:"5",value:e.rating,readonly:"",size:"18","background-color":"yellow darken-4",color:"yellow darken-4","half-increments":""}}),a("span",{staticClass:"grey--text"},[t._v(" · "+t._s(t.toDate(e.time))+" ")])],1)],1),a("p",{staticClass:"pt-3 pb-0 mb-0",staticStyle:{"word-break":"break-word"},domProps:{innerHTML:t._s(e.text.replace(/\n/g,"<br>"))}})],1),a("v-divider",{key:e.id+"-divider"})]})),0===t.reviews.length?[a("p",{staticClass:"mt-3",staticStyle:{"text-align":"center"}},[t._v("沒有評論")])]:t._e()],2):t._e()],1)],1)],1)},ct=[],pt={food_rating:null,service_rating:null,atmosphere_rating:null,cleanliness_rating:null,value_rating:null,memo:""},dt={NOT_RATED:0,DETAIL:1,RATED:2},ut={name:"Detail",components:{PlaceholderImage:W},data:function(){return{cid:"",placeInfo:{},reviews:[],rated:dt.NOT_RATED,feedbackRating:1,feedbackDetail:Object.assign({},pt),reviewsAspect:"all",reviewsAspectList:[{text:"全部",value:"all"},{text:"食物",value:"food"},{text:"服務",value:"service"},{text:"氣氛",value:"atmosphere"},{text:"清潔",value:"cleanliness"},{text:"價值",value:"value"}],reviewsSortBy:"importance",reviewsSortByList:[{text:"重要性",value:"importance"},{text:"時間",value:"time"},{text:"評價（高至低）",value:"rating_desc"},{text:"評價（低至高）",value:"rating_asc"}]}},computed:{APIBASE:function(){return window.APIBASE},SearchEngine:function(){return k},aspectRatingsDict:function(){return C},aspectRatingsList:function(){return E},aspectRatingDescription:function(){return I},hasAnyAspectRatings:function(){var t,e=Object(c["a"])(this.aspectRatingsList);try{for(e.s();!(t=e.n()).done;){var a=t.value.key;if(this.placeInfo[a+"_count"]>0)return!0}}catch(r){e.e(r)}finally{e.f()}return!1},RATED_STATE:function(){return dt},imageFilename:function(){return"".concat(this.APIBASE,"/img/place_header/").concat(this.cid,".jpg")}},methods:{toDate:function(t){var e=new Date(t);return e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate()},load:function(t){var e=this;x.a.get("".concat(window.APIBASE,"/detail/").concat(t)).then((function(a){var n=a.data;n.error?console.error(n):(e.rated=dt.NOT_RATED,e.reviewsAspect="all",e.reviewsSortBy="importance",r["a"].set(e,"placeInfo",n),e.loadReviews(),e.$ga.event({eventCategory:"detail",eventAction:"detail",eventLabel:"detail",eventValue:t}))}))},loadReviews:function(){var t=this;r["a"].set(this,"reviews",[]);var e="".concat(window.APIBASE,"/reviews/").concat(this.cid,"?aspect=").concat(this.reviewsAspect,"&sort_by=").concat(this.reviewsSortBy);x.a.get(e).then((function(e){var a=e.data;a.error?console.error(a):r["a"].set(t,"reviews",a.data)}))},close:function(){L.$emit("search-clear"),this.SearchEngine.clear(),this.rated=dt.NOT_RATED,this.reviewsAspect="all",this.reviewsSortBy="importance",r["a"].set(this,"reviews",[]),this.$router.push("/")},feedback:function(t){var e=this;this.cid&&x.a.get("".concat(window.APIBASE,"/feedback/place/").concat(this.cid,"/").concat(t)).then((function(a){var n=a.data;if(n.error)console.error(n);else{if(e.rated=1===t?dt.RATED:dt.DETAIL,e.feedbackRating=t,e.hasAnyAspectRatings){r["a"].set(e,"feedbackDetail",Object.assign({},pt));var i,s=Object(c["a"])(e.aspectRatingsList);try{for(s.s();!(i=s.n()).done;){var o=i.value.key;e.feedbackDetail["".concat(o,"_rating")]=e.placeInfo["".concat(o,"_rating")]}}catch(l){s.e(l)}finally{s.f()}}e.$ga.event({eventCategory:"feedback",eventAction:"send",eventLabel:"rating",eventValue:Object.assign({cid:e.cid,rating:t})})}}))},sendFeedbackDetail:function(){var t=this;this.cid&&(this.rated=dt.RATED,x.a.post("".concat(window.APIBASE,"/feedback/detail/").concat(this.cid),this.feedbackDetail).then((function(e){var a=e.data;a.error?console.error(a):t.$ga.event({eventCategory:"feedback",eventAction:"sendDetail",eventLabel:"detail",eventValue:Object.assign({cid:t.cid},t.feedbackDetail)})})))}},mounted:function(){},created:function(){this.cid=this.$route.params.cid,this.load(this.cid)},beforeRouteEnter:function(t,e,a){a((function(e){e.cid!==t.params.cid&&(e.cid=t.params.cid,e.load(t.params.cid))}))},beforeRouteUpdate:function(t,e,a){console.log("beforeRouteUpdate!",t.params.cid),this.cid=t.params.cid,this.load(t.params.cid),a()}},ht=ut,ft=(a("e1d8"),a("8212")),vt=a("8860"),gt=a("da13"),mt=a("5d23"),yt=a("34c3"),_t=a("a844"),xt=a("269a"),kt=a.n(xt),bt=a("5607"),wt=Object(g["a"])(ht,lt,ct,!1,null,"978519d2",null),St=wt.exports;P()(wt,{VAvatar:ft["a"],VBtn:D["a"],VContainer:tt["a"],VDivider:et["a"],VFlex:at["a"],VIcon:B["a"],VLayout:rt["a"],VList:vt["a"],VListItem:gt["a"],VListItemContent:mt["a"],VListItemIcon:yt["a"],VListItemTitle:mt["b"],VRating:nt["a"],VSelect:it["a"],VTextarea:_t["a"]}),kt()(wt,{Ripple:bt["a"]}),r["a"].use(N["a"]);var At=[{path:"/",name:"Home"},{path:"/search/:query",name:"Search",component:ot},{path:"/detail/:cid",name:"Detail",component:St}],Lt=new N["a"]({routes:At}),Et=Lt,Ct=a("f309");r["a"].use(Ct["a"]);var It=new Ct["a"]({}),Rt=a("0284"),Tt=a.n(Rt);r["a"].use(Tt.a,{id:"G-PRN13V8SVN",router:Et}),r["a"].config.productionTip=!1,window.APIBASE="https://smart-restaurant.duckdns.org",document.body.addEventListener("click",(function(t){var e=t.target.nodeName.toLowerCase();"input"!==e&&"textarea"!==e&&"select"!==e&&document.activeElement.blur()})),new r["a"]({router:Et,vuetify:It,render:function(t){return t(z)}}).$mount("#app")},"9eff":function(t,e,a){"use strict";a("243a")},a3f6:function(t,e,a){"use strict";a("09f7")},ab79:function(t,e,a){},b11a:function(t,e,a){"use strict";a("5570")},e1d8:function(t,e,a){"use strict";a("ab79")}});
//# sourceMappingURL=app.837f744b.js.map