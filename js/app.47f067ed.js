(function(t){function e(e){for(var r,s,o=e[0],l=e[1],c=e[2],d=0,u=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&u.push(i[s][0]),i[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);p&&p(e);while(u.length)u.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},i={app:0},n=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var p=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0633":function(t,e,a){"use strict";a("20d2")},"09f7":function(t,e,a){},"20d2":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("div",{staticClass:"map"},[a("map-loader",{attrs:{markers:t.markers,"map-config":t.mapConfig,apiKey:"AIzaSyAgXa8SXxQA1hrWVUU8p-G351swReg1-5o"}}),a("v-btn",{style:"bottom: "+(t.showMapSearchToggle?95:30)+"px; right: 10px;",attrs:{color:"white",elevation:"2",fab:"",absolute:""},on:{click:function(e){return t.searchText("我附近的餐廳")}}},[a("v-icon",{attrs:{color:"grey darken-3"}},[t._v("mdi-crosshairs-gps")])],1)],1),a("div",{staticClass:"map-search"},[a("v-text-field",{ref:"appSearch",attrs:{placeholder:"搜尋餐廳",solo:"","append-icon":"mdi-magnify",clearable:"","hide-details":"",autocomplete:"off",rounded:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchText(t.keyword)},"click:append":function(e){return t.searchText(t.keyword)},"click:clear":t.close},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),a("div",{staticClass:"mt-3"},[t._l(t.QUICK_DIRECT,(function(e){return[a("v-btn",{key:e.text,staticClass:"mr-2",attrs:{small:"",rounded:""},on:{click:function(a){return t.searchText(e.searchText)}}},[t._v(" "+t._s(e.text)+" ")])]}))],2)],1),a("keep-alive",[!t.showMapSearchToggle||t.showSearch?a("router-view"):t._e()],1),t.showMapSearchToggle?a("v-btn",{staticStyle:{bottom:"30px",right:"10px"},attrs:{absolute:"",rounded:"","x-large":""},on:{click:function(e){t.showSearch=!t.showSearch}}},[t.showSearch?[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-map")]),t._v("顯示地圖 ")]:[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-view-list")]),t._v("顯示清單 ")]],2):t._e()],1)],1)},n=[],s=(a("d81d"),a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"map"}}),this.google&&this.map?[a("map-provider",{attrs:{google:t.google,map:t.map}},[t._t("default")],2)]:t._e()],2)}),o=[],l=(a("fb6a"),a("a434"),a("2909")),c=a("b85c"),p=a("f464"),d=a.n(p),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._t("default")],2)},h=[],f={props:{google:Object,map:Object},provide:function(){return{google:this.google,map:this.map}}},v=f,g=a("2877"),m=Object(g["a"])(v,u,h,!1,null,null,null),y=m.exports,_=(a("99af"),a("d3b7"),a("bc3a")),x=a.n(_),k="http://localhost",b=[{key:"food",title:"食物"},{key:"service",title:"服務"},{key:"atmosphere",title:"氣氛"},{key:"cleanliness",title:"清潔"},{key:"value",title:"價值"}],w=[{text:"附近的餐廳",searchText:"附近的餐廳"},{text:"食物好",searchText:"食物好的餐廳"},{text:"高CP值",searchText:"價值好的餐廳"},{text:"氣氛好",searchText:"氣氛好的餐廳"},{text:"服務好",searchText:"服務好的餐廳"}],S=new r["a"]({data:function(){return{resultList:[],keyword:"",lng:null,lat:null,price_level:0,rating:0,start_from:0,sort_by:null,items_per_page:40,mapLng:null,mapLat:null}},methods:{search:function(t){var e=this;console.log(t);var a="".concat(k,"/search?keyword=").concat(t.keyword);this.mapLat&&this.mapLng&&(a+="&lat=".concat(this.mapLat,"&lng=").concat(this.mapLng)),"price_level"in t&&(a+="&price_level=".concat(t.price_level)),"filter_by"in t&&(a+="&filter_by=".concat(t.filter_by)),"rating"in t&&(a+="&rating=".concat(t.rating)),"sort_by"in t&&(a+="&sort_by=".concat(t.sort_by)),a+="&items_per_page=".concat("items_per_page"in t?t.items_per_page:this.items_per_page),a+="&start_from=".concat("start_from"in t?t.start_from:this.start_from),x.a.get(a).then((function(a){var i=a.data;i.error?console.error(i):(r["a"].set(e,"resultList",i.data),e.keyword=t.keyword,e.lat=t.lat||null,e.lng=t.lng||null,e.price_level=t.price_level||0,e.rating=t.rating||0,e.sort_by=t.sort_by,e.start_from=i.start_from,e.items_per_page=i.items_per_page,e.$ga.event({eventCategory:"search",eventAction:"searchDirect",eventLabel:"direct",eventValue:i}))}))},searchNearby:function(t){var e=this,a="".concat(k,"/search?lat=").concat(t.lat,"&lng=").concat(t.lng);"price_level"in t&&(a+="&price_level=".concat(t.price_level)),"rating"in t&&t["rating"]&&(a+="&rating=".concat(t.rating)),"filter_by"in t&&t["filter_by"]&&(a+="&filter_by=".concat(t.filter_by)),"sort_by"in t&&t["sort_by"]&&(a+="&sort_by=".concat(t.sort_by)),a+="&items_per_page=".concat("items_per_page"in t?t.items_per_page:this.items_per_page),a+="&start_from=".concat("start_from"in t?t.start_from:this.start_from),x.a.get(a).then((function(a){var i=a.data;i.error?console.error(i):(r["a"].set(e,"resultList",i.data),e.keyword="",e.lat=t.lat||null,e.lng=t.lng||null,e.price_level=t.price_level||0,e.rating=t.rating||0,e.sort_by=t.sort_by,e.start_from=i.start_from,e.items_per_page=i.items_per_page,e.$ga.event({eventCategory:"search",eventAction:"searchNearby",eventLabel:"nearby",eventValue:i}))}))},nextPage:function(){var t=this,e="".concat(k,"/search?")+"start_from=".concat(this.start_from+this.items_per_page)+"&items_per_page=".concat(this.items_per_page);this.keyword&&(e+="&keyword=".concat(this.keyword)),this.lat&&this.lng&&(e+="&lat=".concat(this.lat),e+="&lng=".concat(this.lng)),this.price_level&&(e+="&price_level=".concat(this.price_level)),this.rating&&(e+="&rating=".concat(this.rating)),x.a.get(e).then((function(e){var a=e.data;a.error?console.error(a):(t.resultList.concat(a.data),t.start_from=a.start_from,t.items_per_page=a.items_per_page)}))},clear:function(){r["a"].set(this,"resultList",[])},geoPermissionQuery:function(){var t=this;new Promise((function(e,a){navigator.permissions.query({name:"geolocation"}).then((function(r){"granted"===r.state?(t.geoPermissionGranted=!0,e(!0)):(t.geoPermissionGranted=!1,a())}))}))},getUserPosition:function(){var t=this;new Promise((function(e,a){navigator.geolocation.getCurrentPosition((function(a){var r=a.coords.latitude+0,i=a.coords.longitude-.008755;t.searchNearby(r,i),e({lat:r,lng:i})}),(function(t){console.error(t),alert("請開啟您的定位功能！"),a(t)}))}))},isReady:function(){this.ready=!0,this.$emit("ready")},wait:function(){var t=this;return new Promise((function(e){!0===t.ready?e():t.$once("ready",(function(){return e()}))}))}},created:function(){}}),A={props:{mapConfig:Object,apiKey:String,markers:Array},components:{MapProvider:y},watch:{markers:function(t){var e=this;this.removeAllMarkers();var a,r=Object(c["a"])(t);try{for(r.s();!(a=r.n()).done;){var i=a.value;this.addMarker(i)}}catch(p){r.e(p)}finally{r.f()}if(t.length>0){var n=t.map((function(t){return t.position.lat+e.adjustLat})),s=t.map((function(t){return t.position.lng+e.adjustLng})),o={south:Math.min.apply(Math,Object(l["a"])(n)),west:Math.min.apply(Math,Object(l["a"])(s)),north:Math.max.apply(Math,Object(l["a"])(n)),east:Math.max.apply(Math,Object(l["a"])(s))};this.fitBounds(o)}}},data:function(){return{google:null,map:null,markersInst:[],markersIds:[],adjustLat:0,adjustLng:.008755}},mounted:function(){var t=this;d()({apiKey:this.apiKey}).then((function(e){t.google=e,t.initializeMap();var a,r=Object(c["a"])(t.markers);try{for(r.s();!(a=r.n()).done;){var i=a.value;t.addMarker(i)}}catch(n){r.e(n)}finally{r.f()}}))},methods:{initializeMap:function(){var t=this,e=this.$el.querySelector("#map"),a=this.google.maps.Map;this.map=new a(e,this.mapConfig),this.map.addListener("zoom_changed",(function(){t.$emit("zoom-changed",t.map.getZoom())}));var r=this.map.getCenter(),i={lat:r.lat()-this.adjustLat,lng:r.lng()-this.adjustLng};S.mapLat=i.lat,S.mapLng=i.lng,this.map.addListener("center_changed",(function(){var e=t.map.getCenter(),a={lat:e.lat()-t.adjustLat,lng:e.lng()-t.adjustLng};t.$emit("center-changed",a),S.mapLat=a.lat,S.mapLng=a.lng})),S.$emit("map-ready")},removeAllMarkers:function(){var t,e=Object(c["a"])(this.markersInst);try{for(e.s();!(t=e.n()).done;){var a=t.value;a.setMap(null)}}catch(s){e.e(s)}finally{e.f()}this.markersInst.splice(0);var r,i=Object(c["a"])(this.markersIds);try{for(i.s();!(r=i.n()).done;){var n=r.value;S.$off("marker-highlight-".concat(n))}}catch(s){i.e(s)}finally{i.f()}},addMarker:function(t){var e=this,a=this.google.maps.Marker,r={lat:t.position.lat+this.adjustLat,lng:t.position.lng+this.adjustLng},i=new a({position:r,map:this.map,title:t.title||"Child marker!!",id:t.id});this.markersInst.push(i);var n=new a({map:this.map,position:r,label:{color:"black",fontSize:"16px",text:t.title.slice(0,30),className:"marker-label"},icon:{url:"https://maps.google.com/mapfiles/kml/shapes/library_maps.png",scaledSize:new this.google.maps.Size(0,0),origin:new this.google.maps.Point(0,0),anchor:new this.google.maps.Point(0,0),labelOrigin:new this.google.maps.Point(25,-30)}});if(this.markersInst.push(n),t.aspectDescription){var s=new a({map:this.map,position:r,label:{color:"#000000",fontSize:"12px",text:t.aspectDescription,className:"marker-label"},icon:{url:"https://maps.google.com/mapfiles/kml/shapes/library_maps.png",scaledSize:new this.google.maps.Size(0,0),origin:new this.google.maps.Point(0,0),anchor:new this.google.maps.Point(0,0),labelOrigin:new this.google.maps.Point(25,-12)}});this.markersInst.push(s)}i.addListener("click",(function(){e.$emit("marker-click",t.id),i.setAnimation(e.google.maps.Animation.BOUNCE),i.setAnimation(null),e.$router.push("/detail/".concat(t.id))})),S.$on("marker-highlight-".concat(t.id),(function(){i.setAnimation(e.google.maps.Animation.BOUNCE),i.setAnimation(null)})),this.markersIds.push(t.id)},setCenter:function(t){this.map.setCenter(t),S.mapLat=t.lat+this.adjustLat,S.mapLng=t.lng+this.adjustLng},fitBounds:function(t){this.map.fitBounds(t,{left:this.$vuetify.breakpoint.mobile?20:450,bottom:20,right:20,top:20})},setZoom:function(t){this.map.setZoom(t)}}},C=A,E=(a("a3f6"),Object(g["a"])(C,s,o,!1,null,null,null)),L=E.exports,T=new r["a"]({}),I=(a("4de4"),function(){var t={};return b.map((function(e){return t[e.key]=e.title})),t}());function $(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];function a(t){return t>=4.5?e?'\n        <span>\n          <i aria-hidden="true" class="v-icon notranslate mdi mdi-check-all theme--light" style="color: green; position: relative; top: -2px;"></i>\n        </span >\n        ':"✔️✔️":t<4.5&&t>=3.5?e?'\n        <span>\n          <i aria-hidden="true" class="v-icon notranslate mdi mdi-check theme--light" style="color: green; position: relative; top: -2px;"></i>\n        </span >\n        ':"✔️":t<3.5&&t>=2.5?e?'\n        <span>\n          <i aria-hidden="true" class="v-icon notranslate mdi mdi-alert theme--light" style="color: #ffe000; position: relative; top: -2px;"></i>\n        </span >\n        ':"⚠️":t<2.5?e?'\n        <span>\n          <i aria-hidden="true" class="v-icon notranslate mdi mdi-close theme--light" style="color: red; position: relative; top: -2px;"></i>\n        </span >\n        ':"❌":void 0}var r=b.map((function(e){return{key:e.key,rating:t["".concat(e.key,"_rating")],count:t["".concat(e.key,"_count")]}}));return r=r.filter((function(t){return t.count>=20})),r.sort((function(t,e){return e.rating-t.rating})),0===r.length?"":1===r.length?I[r[0].key]+a(r[0].rating):I[r[0].key]+a(r[0].rating)+" · "+I[r[r.length-1].key]+a(r[r.length-1].rating)}var P={name:"App",components:{MapLoader:L},data:function(){return{keyword:"",mapConfig:{mapId:"2d966253da63a7e7",zoom:12,center:{lat:24.79612,lng:120.993},fullscreenControl:!1,gestureHandling:"greedy",streetViewControl:!1,mapTypeControl:!1,zoomControl:!1,styles:[{featureType:"road",stylers:[{visibility:"off"}]}]},showSearch:!0}},computed:{QUICK_DIRECT:function(){return w},showMapSearchToggle:function(){return this.$vuetify.breakpoint.mobile&&"Search"===this.$route.name},SearchEngine:function(){return S},markers:function(){return 0===this.SearchEngine.resultList.length?[]:this.SearchEngine.resultList.map((function(t){return{position:{lat:parseFloat(t.lat),lng:parseFloat(t.lng)},id:t.cid,title:t.name,aspectDescription:$(t,!1)}}))}},methods:{blur:function(){this.$refs.appSearch.blur()},close:function(){this.keyword="",T.$emit("search-clear"),this.$router.push("/"),this.SearchEngine.clear(),this.blur()},searchText:function(t){t&&(console.log("App:",t||this.keyword),t&&(this.keyword=t),this.showSearch=!0,this.$router.push("/search/".concat(this.keyword)),this.blur())}},created:function(){"Search"===this.$router.currentRoute.name&&this.$router.push("/")},mounted:function(){var t=this;T.$on("search-clear",(function(){t.keyword=""}))}},R=P,j=(a("0633"),a("6544")),D=a.n(j),O=a("7496"),B=a("8336"),V=a("132d"),M=a("f6c4"),z=a("8654"),N=Object(g["a"])(R,i,n,!1,null,"0d92b05c",null),F=N.exports;D()(N,{VApp:O["a"],VBtn:B["a"],VIcon:V["a"],VMain:M["a"],VTextField:z["a"]});var U=a("8c4f"),q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"panel search",staticStyle:{"padding-bottom":"64px"}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"","pb-3":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"","mb-3":""}},[a("v-text-field",{ref:"searchSearch",attrs:{placeholder:"搜尋",solo:"",clearable:"","hide-details":"","prepend-icon":"mdi-arrow-left","append-icon":"mdi-magnify",autocomplete:"off",rounded:""},on:{"click:prepend":t.close,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchText(t.keyword)},"click:append":function(e){return t.searchText(t.keyword)},"click:clear":t.close},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-layout",[a("v-flex",{attrs:{xs4:"","pr-1":""}},[a("v-select",{attrs:{items:t.filterByItems,dense:"",outlined:"","hide-details":""},on:{change:function(e){return t.search()}},model:{value:t.filterFilterBy,callback:function(e){t.filterFilterBy=e},expression:"filterFilterBy"}})],1),a("v-flex",{attrs:{xs4:"","pl-1":"","pr-1":""}},[a("v-select",{attrs:{items:t.priceLevelItems,dense:"",outlined:"","hide-details":""},on:{change:function(e){return t.search()}},model:{value:t.filterPriceLevel,callback:function(e){t.filterPriceLevel=e},expression:"filterPriceLevel"}})],1),a("v-flex",{attrs:{xs4:"","pl-1":""}},[a("v-select",{attrs:{items:t.sortByList,dense:"",outlined:"","hide-details":""},on:{change:function(e){return t.search()}},model:{value:t.filterSortBy,callback:function(e){t.filterSortBy=e},expression:"filterSortBy"}})],1)],1)],1)],1)],1),a("v-flex",{attrs:{xs12:""}},[a("v-layout",{attrs:{wrap:""}},[0===t.SearchEngine.resultList.length?[a("v-flex",{staticStyle:{"text-align":"center"},attrs:{xs12:"","pt-5":""}},[t._v(" 沒有符合的項目 ")])]:t._e(),t._l(t.SearchEngine.resultList,(function(e,r){return[a("v-flex",{key:r,staticStyle:{cursor:"pointer"},attrs:{xs12:""},on:{click:function(a){t.SearchEngine.$emit("marker-highlight-"+e.cid),t.$router.push("/detail/"+e.cid)}}},[a("v-layout",[a("v-flex",{staticClass:"search-item-content",attrs:{xs8:"","pr-2":"","pt-3":""}},[a("h3",{staticStyle:{height:"28px",overflow:"hidden","text-overflow":"ellipse","text-wrap":"no-wrap"}},[t._v(" "+t._s(e.name)+" ")]),a("div",{staticStyle:{height:"24px",overflow:"hidden"}},[a("span",{staticClass:"yellow--text text--darken-4"},[t._v(" "+t._s(e.rating)+" ")]),e.rating?a("v-rating",{staticStyle:{display:"inline",position:"relative",top:"-2px"},attrs:{dense:"","empty-icon":"mdi-star-outline","full-icon":"mdi-star","half-icon":"mdi-star-half-full",hover:"",length:"5",value:e.rating,readonly:"",size:"18","background-color":"yellow darken-4",color:"yellow darken-4","half-increments":""}}):t._e(),e.user_ratings_total?a("span",{staticClass:"grey--text text--darken-1"},[t._v(" ("+t._s(e.user_ratings_total)+") ")]):t._e(),e.price_level?a("span",{staticClass:"grey--text text--darken-1"},[t._v(" · "+t._s("$".repeat(e.price_level))+" ")]):t._e(),e.user_ratings_total?t._e():a("span",{staticClass:"grey--text text--darken-1"},[t._v(" 評論不足 ")])],1),a("div",{staticClass:"grey--text text--darken-1",staticStyle:{height:"24px",overflow:"hidden"}},[t._v(" "+t._s(e.formatted_address)+" ")]),a("div",{staticStyle:{height:"24px",overflow:"hidden"},domProps:{innerHTML:t._s(t.aspectRatingDescription(e,!0,t.filterSortBy))}})]),a("v-flex",{staticClass:"search-item-img",attrs:{xs4:"","pt-2":"","pb-2":""}},[a("placeholder-image",{staticStyle:{"background-size":"cover","border-radius":"4px"},attrs:{weight:"100%",height:"100%",src:t.APIBASE+"/img/place_header/"+e.cid+".jpg","error-src":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="}})],1)],1),a("v-divider")],1)]})),a("v-flex",[a("v-container",{staticStyle:{"text-align":"center"},attrs:{"pt-3":""}},[t.reportedMissingPlace?[a("p",[t._v("感謝您的回報")])]:[a("v-btn",{attrs:{outlined:""},on:{click:t.feedbackReportMissingPlace}},[t._v("找不到餐廳嗎？")])]],2)],1)],2)],1)],1)],1)},G=[],K=(a("ac1f"),a("841c"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-img",{staticStyle:{},attrs:{"aspect-ratio":t.aspectRatio,height:t.height,weight:t.weight,src:t.srcWrapper},on:{error:t.onError}},[t._t("default")],2)}),H=[],Q={name:"PlaceholderImage",props:["height","aspectRatio","src","weight","errorSrc"],data:function(){return{isError:!1}},watch:{src:function(){this.clear()}},computed:{srcWrapper:function(){return!this.src||this.isError?this.errorSrc||"":this.src}},methods:{onError:function(){this.isError=!0,this.$emit("error")},clear:function(){this.isError=!1}}},Y=Q,W=a("adda"),Z=Object(g["a"])(Y,K,H,!1,null,null,null),J=Z.exports;D()(Z,{VImg:W["a"]});var X={mounted:function(){var t=this,e=this.$el;e.addEventListener("scroll",(function(){t.scrollTop=e.scrollTop}))},activated:function(){if(this.scrollTop){var t=this.$el;t.scrollTop=this.scrollTop}},deactivated:function(){}},tt={name:"Search",mixins:[X],components:{PlaceholderImage:J},data:function(){return{text:"",keyword:"",ratingItems:[{text:"評價",value:0},{text:"1⭐+",value:1},{text:"2⭐+",value:2},{text:"3⭐+",value:3},{text:"4⭐+",value:4},{text:"4.5⭐+",value:4.5}],filterRating:0,filterByItems:[{text:"篩選",value:""},{text:"總分 4⭐+",value:"rating"}].concat(Object(l["a"])(b.map((function(t){return{text:"".concat(t.title," 4⭐+"),value:t.key}})))),filterFilterBy:"",priceLevelItems:[{text:"價格",value:0},{text:"$+",value:1},{text:"$$+",value:2},{text:"$$$+",value:3},{text:"$$$$+",value:4}],filterPriceLevel:0,filterSortBy:"distance",sortByList:[{text:"距離排序",value:"distance"},{text:"評價排序",value:"rating"}],reportedMissingPlace:!1}},computed:{APIBASE:function(){return k},SearchEngine:function(){return S},aspectRatingsDict:function(){return I},aspectRatingDescription:function(){return $}},methods:{blur:function(){this.$refs.searchSearch.blur()},close:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.keyword="",this.filterRating=0,this.filterPriceLevel=0,this.filterFilterBy="",this.filterSortBy="distance",T.$emit("search-clear"),this.blur(),t&&this.$router.push("/"),this.SearchEngine.clear(),this.reportedMissingPlace=!1,blur()},search:function(t){t||(t=this.keyword),this.keyword=t,this.blur(),this.SearchEngine.clear(),console.log("perform searching.",t);var e,a=Object(c["a"])(b);try{for(a.s();!(e=a.n()).done;){var r=e.value,i=r.key,n=r.title;if(t===n+"好的餐廳")return this.filterFilterBy=i,void this.searchNearby(this.SearchEngine.mapLat,this.SearchEngine.mapLng)}}catch(s){a.e(s)}finally{a.f()}"附近的餐廳"===t?this.searchNearby(this.SearchEngine.mapLat,this.SearchEngine.mapLng):"我附近的餐廳"===t?this.searchNearbyGPS():this.SearchEngine.search({keyword:t,rating:this.filterRating,price_level:this.filterPriceLevel,sort_by:this.filterSortBy,filter_by:this.filterFilterBy})},searchNearbyGPS:function(){var t=this;console.log("gps"),navigator.geolocation.getCurrentPosition((function(e){console.log(e);var a=e.coords.latitude+0,r=e.coords.longitude-.008755;t.searchNearby(a,r)}),(function(t){console.error(t),alert("請開啟您的定位功能！")}))},searchNearby:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r={keyword:a,lng:e,lat:t,rating:this.filterRating,filter_by:this.filterFilterBy,price_level:this.filterPriceLevel,sort_by:this.filterSortBy};this.SearchEngine.searchNearby(r)},searchText:function(){console.log("searchText",this.keyword),this.$router.push("/search/".concat(this.keyword))},feedbackReportMissingPlace:function(){var t=this;if(this.keyword)return this.reportedMissingPlace=!0,new Promise((function(e,a){x.a.post("".concat(t.APIBASE,"/feedback/missing_place"),{name:t.keyword}).then((function(t){var r=t.data;if(r.error)return console.error(r),void a(r);e()}))}))}},mounted:function(){var t=this;this.keyword=this.$route.params.query,this.search(this.keyword),T.$on("search-clear",(function(){t.keyword=""}))},created:function(){this.keyword=this.$route.params.query},beforeRouteEnter:function(t,e,a){a((function(e){e.keyword!==t.params.query&&(e.keyword=t.params.query,e.search(t.params.query))}))},beforeRouteUpdate:function(t,e,a){this.search(t.params.query),a()},beforeRouteLeave:function(t,e,a){"Home"===t.name&&this.close(!1),a()}},et=tt,at=(a("f643"),a("a523")),rt=a("ce7e"),it=a("0e8f"),nt=a("a722"),st=a("1d4d"),ot=a("b974"),lt=Object(g["a"])(et,q,G,!1,null,"a00010aa",null),ct=lt.exports;D()(lt,{VBtn:B["a"],VContainer:at["a"],VDivider:rt["a"],VFlex:it["a"],VLayout:nt["a"],VRating:st["a"],VSelect:ot["a"],VTextField:z["a"]});var pt,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"panel detail",staticStyle:{"padding-bottom":"64px"},attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"","pb-3":""}},[a("placeholder-image",{attrs:{"aspect-ratio":2,weight:"100%",src:t.imageFilename,"error-src":"https://post.healthline.com/wp-content/uploads/2020/09/healthy-eating-ingredients-1200x628-facebook-1200x628.jpg"}},[a("v-container",[a("v-btn",{staticStyle:{"background-color":"#ffffffdd"},attrs:{depressed:""},on:{click:function(e){return t.$router.back()}}},[a("v-icon",[t._v("mdi-arrow-left")]),t._v(" 返回上一頁 ")],1),a("v-btn",{staticStyle:{"background-color":"#ffffffdd",float:"right"},attrs:{depressed:""},on:{click:t.close}},[a("v-icon",[t._v("mdi-close")]),t._v(" 關閉 ")],1)],1)],1),a("v-layout",{attrs:{wrap:""}},[t.placeInfo?a("v-flex",{attrs:{xs12:""}},[a("v-container",[a("h2",[t._v(t._s(t.placeInfo.name))]),a("p",[a("span",[a("span",{staticClass:"yellow--text text--darken-4"},[t._v(" "+t._s(t.placeInfo.rating)+" ")]),t.placeInfo.rating?a("v-rating",{staticStyle:{display:"inline",position:"relative",top:"-2px"},attrs:{dense:"","empty-icon":"mdi-star-outline","full-icon":"mdi-star","half-icon":"mdi-star-half-full",hover:"",length:"5",value:t.placeInfo.rating,readonly:"",size:"18","background-color":"yellow darken-4",color:"yellow darken-4","half-increments":""}}):t._e(),t.placeInfo.user_ratings_total?a("span",{staticClass:"grey--text text--darken-1"},[t._v(" ("+t._s(t.placeInfo.user_ratings_total)+"則評論) ")]):t._e(),t.placeInfo.price_level?a("span",{staticClass:"grey--text text--darken-1"},[t._v(" · "+t._s("$".repeat(t.placeInfo.price_level))+" ")]):t._e(),t.placeInfo.user_ratings_total?t._e():a("span",{staticClass:"grey--text text--darken-1"},[t._v(" 評論不足 ")])],1),a("br"),a("span",{domProps:{innerHTML:t._s(t.aspectRatingDescription(t.placeInfo,!0))}})])]),a("v-list",[a("v-divider"),a("v-list-item",{attrs:{href:"https://www.google.com.tw/maps/search/"+t.placeInfo.name+" "+(t.placeInfo.formatted_address||""),target:"_blank"}},[a("v-list-item-icon",[a("v-icon",{attrs:{color:"primary"}},[t._v("mdi-map")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" 在 Google Map 中開啟 ")])],1)],1),a("v-divider"),t.placeInfo.formatted_address?a("v-list-item",[a("v-list-item-icon",[a("v-icon",{attrs:{color:"primary"}},[t._v("mdi-map-marker")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(t.placeInfo.formatted_address)+" ")])],1)],1):t._e(),t.placeInfo.formatted_address?a("v-divider"):t._e()],1),t.hasAnyAspectRatings?a("v-container",[a("h3",{staticClass:"mt-3 mb-2"},[t._v("評論摘要")]),a("v-layout",{attrs:{wrap:""}},t._l(t.ASPECTS.filter((function(e){return t.placeInfo[e.key+"_rating"]})),(function(e){return a("v-flex",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.key,staticStyle:{"text-align":"center","user-select":"none",cursor:"pointer"},on:{click:function(a){t.reviewsAspect=e.key,t.loadReviews()}}},[a("div",{staticStyle:{"font-size":"15px"}},[t._v(" "+t._s(e.text)+" ")]),a("div",{staticClass:"yellow--text text--darken-4",staticStyle:{"font-size":"24px","line-height":"30px"}},[t._v(" "+t._s(t.placeInfo[e.key+"_rating"].toFixed(1))+" ")]),a("div",{staticClass:"grey--text",staticStyle:{"font-size":"14px"}},[t._v(" ("+t._s(t.placeInfo[e.key+"_count"])+") ")])])})),1)],1):t._e(),t.hasAnyAspectRatings?a("v-divider"):t._e(),t.hasAnyAspectRatings?a("v-container",[t.rated===t.RATED_STATE.NOT_RATED?a("v-layout",[a("v-flex",{staticStyle:{"padding-top":"3px","font-size":"14px"}},[t._v(" 您覺得這些資訊準確嗎？ ")]),a("v-flex",{staticStyle:{width:"175px","text-align":"right"}},[a("v-btn",{staticClass:"mr-3",attrs:{text:"",small:""},on:{click:function(e){return t.feedback(0)}}},[t._v(" 不準確 ")]),a("v-btn",{attrs:{outlined:"",small:""},on:{click:function(e){return t.feedback(1)}}},[t._v(" 準確 ")])],1)],1):t._e(),t.rated===t.RATED_STATE.DETAIL?a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticStyle:{"padding-top":"3px","font-size":"14px"},attrs:{xs12:""}},[a("h3",{staticClass:"mt-3 mb-2"},[t._v("請問您覺得是哪個指標不準確呢？")]),a("span",{staticClass:"grey--text text--darken-1"},[t._v(" 請透過右方的星星來調整您認為的分數 ")])]),t.hasAnyAspectRatings?a("v-flex",{staticClass:"mt-2",attrs:{xs12:""}},[t._l(t.ASPECTS.filter((function(e){return t.placeInfo[e.key+"_rating"]})),(function(e){return[a("v-layout",{key:e.key,staticClass:"pt-2"},[a("v-flex",{staticStyle:{"text-align":"left","margin-top":"3px"}},[a("span",{staticClass:"pr-1"},[t._v(" "+t._s(e.text)+" ")]),a("span",{staticClass:"grey--text text--darken-1",staticStyle:{display:"inline",position:"relative",top:"-1px","font-size":"14px"}},[t._v(" 原分數 ")]),a("span",{staticClass:"yellow--text text--darken-4"},[t._v(" "+t._s(t.placeInfo[e.key+"_rating"].toFixed(1))+" ")]),a("v-icon",{staticStyle:{display:"inline",position:"relative",top:"-2px"},attrs:{color:"grey--text text--darken-"}},[t._v(" mdi-arrow-right ")]),a("span",{staticClass:"grey--text text--darken-1",staticStyle:{display:"inline",position:"relative",top:"-1px","font-size":"14px"}},[t._v(" 您認為 ")]),a("span",{staticClass:"yellow--text text--darken-4"},[t._v(" "+t._s(t.feedbackDetail[e.key+"_rating"].toFixed(1))+" ")])],1),a("v-flex",{staticStyle:{"text-align":"right","margin-top":"3px"}},[t.placeInfo[e.key+"_rating"]?a("v-rating",{staticStyle:{display:"inline",position:"relative",top:"-2px"},attrs:{dense:"","empty-icon":"mdi-star-outline","full-icon":"mdi-star","half-icon":"mdi-star-half-full",hover:"",length:"5",size:"24","background-color":"yellow darken-4",color:"yellow darken-4","half-increments":""},model:{value:t.feedbackDetail[e.key+"_rating"],callback:function(a){t.$set(t.feedbackDetail,e.key+"_rating",a)},expression:"feedbackDetail[`${item.key}_rating`]"}}):t._e()],1)],1)]}))],2):t._e(),a("v-flex",{attrs:{xs12:""}},[a("v-textarea",{staticClass:"mt-4",attrs:{label:"其他想法或建議",outlined:"",rows:"2"},model:{value:t.feedbackDetail.memo,callback:function(e){t.$set(t.feedbackDetail,"memo",e)},expression:"feedbackDetail.memo"}})],1),a("v-flex",{staticStyle:{"text-align":"right"},attrs:{xs12:""}},[a("v-btn",{staticClass:"mr-3",attrs:{text:""},on:{click:function(e){t.rated=t.RATED_STATE.RATED}}},[t._v(" 取消 ")]),a("v-btn",{attrs:{text:"",outlined:""},on:{click:function(e){return t.sendFeedbackDetail()}}},[t._v(" 送出 ")])],1)],1):t._e(),t.rated===t.RATED_STATE.RATED?a("v-layout",[a("div",{staticStyle:{margin:"0 auto","text-align":"center"}},[a("img",{staticStyle:{width:"150px"},attrs:{src:"https://chojugiga.com/c/choju54_0031/choju54_0031.png"}}),a("p",[t._v("謝謝你")])])]):t._e()],1):t._e(),t.hasAnyAspectRatings?a("v-divider"):t._e(),a("v-container",[a("h3",{staticClass:"mt-5 mb-2"},[t._v("評論")]),a("v-layout",[a("v-flex",{attrs:{"mr-3":""}},[a("v-select",{attrs:{items:t.reviewsAspectList,dense:"",outlined:"","hide-details":""},on:{change:function(e){return t.loadReviews()}},model:{value:t.reviewsAspect,callback:function(e){t.reviewsAspect=e},expression:"reviewsAspect"}})],1),a("v-flex",[a("v-select",{attrs:{items:t.reviewsSortByList,dense:"",outlined:"","hide-details":""},on:{change:function(e){return t.loadReviews()}},model:{value:t.reviewsSortBy,callback:function(e){t.reviewsSortBy=e},expression:"reviewsSortBy"}})],1)],1)],1),t._l(t.reviews,(function(e){return[a("v-container",{key:e.id},[a("v-layout",[a("v-flex",{staticClass:"pr-3",staticStyle:{"padding-top":"2px"}},[a("v-avatar",{attrs:{color:e.rating>3?"green":"red",size:"42"}},[e.rating>3?a("v-icon",{attrs:{dark:""}},[t._v(" mdi-thumb-up ")]):a("v-icon",{attrs:{dark:""}},[t._v(" mdi-thumb-down ")])],1)],1),a("v-flex",{attrs:{xs12:""}},[a("span",{staticClass:"grey--text text--darken-1",staticStyle:{"font-size":"16px"}},[t._v(" "+t._s(e.author_name)+" ")]),a("br"),a("span",{staticClass:"yellow--text text--darken-4"},[t._v(" "+t._s(e.rating)+" ")]),a("v-rating",{staticStyle:{display:"inline",position:"relative",top:"-2px"},attrs:{dense:"","empty-icon":"mdi-star-outline","full-icon":"mdi-star","half-icon":"mdi-star-half-full",hover:"",length:"5",value:e.rating,readonly:"",size:"18","background-color":"yellow darken-4",color:"yellow darken-4","half-increments":""}}),a("span",{staticClass:"grey--text"},[t._v(" · "+t._s(t.toDate(e.time))+" ")])],1)],1),a("p",{staticClass:"pt-3 pb-0 mb-0",staticStyle:{"word-break":"break-word"},domProps:{innerHTML:t._s(e.text.replace(/\n/g,"<br>"))}})],1),a("v-divider",{key:e.id+"-divider"})]})),0===t.reviews.length?[a("p",{staticClass:"mt-3",staticStyle:{"text-align":"center"}},[t._v("沒有評論")])]:t._e()],2):t._e()],1)],1)],1)},ut=[],ht={memo:""},ft=Object(c["a"])(b);try{for(ft.s();!(pt=ft.n()).done;){var vt=pt.value.key;ht[vt+"_rating"]=null}}catch(Bt){ft.e(Bt)}finally{ft.f()}var gt={NOT_RATED:0,DETAIL:1,RATED:2},mt={name:"Detail",components:{PlaceholderImage:J},data:function(){return{cid:"",placeInfo:{},reviews:[],rated:gt.NOT_RATED,feedbackRating:1,feedbackDetail:Object.assign({},ht),reviewsAspect:"all",reviewsAspectList:[{text:"全部",value:"all"}].concat(Object(l["a"])(b.map((function(t){return{text:t.title,value:t.key}})))),reviewsSortBy:"importance",reviewsSortByList:[{text:"重要性",value:"importance"},{text:"時間",value:"time"},{text:"評價（高至低）",value:"rating_desc"},{text:"評價（低至高）",value:"rating_asc"}]}},computed:{APIBASE:function(){return k},ASPECTS:function(){return b},SearchEngine:function(){return S},aspectRatingsDict:function(){return I},aspectRatingDescription:function(){return $},hasAnyAspectRatings:function(){var t,e=Object(c["a"])(this.ASPECTS);try{for(e.s();!(t=e.n()).done;){var a=t.value.key;if(this.placeInfo[a+"_count"]>0)return!0}}catch(Bt){e.e(Bt)}finally{e.f()}return!1},RATED_STATE:function(){return gt},imageFilename:function(){return"".concat(this.APIBASE,"/img/place_header/").concat(this.cid,".jpg")}},methods:{toDate:function(t){var e=new Date(t);return e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate()},load:function(t){var e=this;x.a.get("".concat(this.APIBASE,"/detail/").concat(t)).then((function(a){var i=a.data;i.error?console.error(i):(e.rated=gt.NOT_RATED,e.reviewsAspect="all",e.reviewsSortBy="importance",r["a"].set(e,"placeInfo",i),e.loadReviews(),e.$ga.event({eventCategory:"detail",eventAction:"detail",eventLabel:"detail",eventValue:t}))}))},loadReviews:function(){var t=this;r["a"].set(this,"reviews",[]);var e="".concat(this.APIBASE,"/reviews/").concat(this.cid,"?aspect=").concat(this.reviewsAspect,"&sort_by=").concat(this.reviewsSortBy);x.a.get(e).then((function(e){var a=e.data;a.error?console.error(a):r["a"].set(t,"reviews",a.data)}))},close:function(){T.$emit("search-clear"),this.SearchEngine.clear(),this.rated=gt.NOT_RATED,this.reviewsAspect="all",this.reviewsSortBy="importance",r["a"].set(this,"reviews",[]),this.$router.push("/")},feedback:function(t){var e=this;this.cid&&x.a.get("".concat(this.APIBASE,"/feedback/place/").concat(this.cid,"/").concat(t)).then((function(a){var i=a.data;if(i.error)console.error(i);else{if(e.rated=1===t?gt.RATED:gt.DETAIL,e.feedbackRating=t,e.hasAnyAspectRatings){r["a"].set(e,"feedbackDetail",Object.assign({},ht));var n,s=Object(c["a"])(e.ASPECTS);try{for(s.s();!(n=s.n()).done;){var o=n.value.key;e.feedbackDetail["".concat(o,"_rating")]=e.placeInfo["".concat(o,"_rating")]}}catch(Bt){s.e(Bt)}finally{s.f()}}e.$ga.event({eventCategory:"feedback",eventAction:"send",eventLabel:"rating",eventValue:Object.assign({cid:e.cid,rating:t})})}}))},sendFeedbackDetail:function(){var t=this;this.cid&&(this.rated=gt.RATED,x.a.post("".concat(this.APIBASE,"/feedback/detail/").concat(this.cid),this.feedbackDetail).then((function(e){var a=e.data;a.error?console.error(a):t.$ga.event({eventCategory:"feedback",eventAction:"sendDetail",eventLabel:"detail",eventValue:Object.assign({cid:t.cid},t.feedbackDetail)})})))}},mounted:function(){},created:function(){this.cid=this.$route.params.cid,this.load(this.cid)},beforeRouteEnter:function(t,e,a){a((function(e){e.cid!==t.params.cid&&(e.cid=t.params.cid,e.load(t.params.cid))}))},beforeRouteUpdate:function(t,e,a){console.log("beforeRouteUpdate!",t.params.cid),this.cid=t.params.cid,this.load(t.params.cid),a()}},yt=mt,_t=(a("5fa8"),a("8212")),xt=a("8860"),kt=a("da13"),bt=a("5d23"),wt=a("34c3"),St=a("a844"),At=a("269a"),Ct=a.n(At),Et=a("5607"),Lt=Object(g["a"])(yt,dt,ut,!1,null,"255fafc6",null),Tt=Lt.exports;D()(Lt,{VAvatar:_t["a"],VBtn:B["a"],VContainer:at["a"],VDivider:rt["a"],VFlex:it["a"],VIcon:V["a"],VLayout:nt["a"],VList:xt["a"],VListItem:kt["a"],VListItemContent:bt["a"],VListItemIcon:wt["a"],VListItemTitle:bt["b"],VRating:st["a"],VSelect:ot["a"],VTextarea:St["a"]}),Ct()(Lt,{Ripple:Et["a"]}),r["a"].use(U["a"]);var It=[{path:"/",name:"Home"},{path:"/search/:query",name:"Search",component:ct},{path:"/detail/:cid",name:"Detail",component:Tt}],$t=new U["a"]({routes:It}),Pt=$t,Rt=a("f309");r["a"].use(Rt["a"]);var jt=new Rt["a"]({}),Dt=a("0284"),Ot=a.n(Dt);r["a"].use(Ot.a,{id:"G-PRN13V8SVN",router:Pt}),r["a"].config.productionTip=!1,document.body.addEventListener("click",(function(t){var e=t.target.nodeName.toLowerCase();"input"!==e&&"textarea"!==e&&"select"!==e&&document.activeElement.blur()})),new r["a"]({router:Pt,vuetify:jt,render:function(t){return t(F)}}).$mount("#app")},"5fa8":function(t,e,a){"use strict";a("8fe1")},"8fe1":function(t,e,a){},a3f6:function(t,e,a){"use strict";a("09f7")},df3b:function(t,e,a){},f643:function(t,e,a){"use strict";a("df3b")}});
//# sourceMappingURL=app.47f067ed.js.map