(function(t){function e(e){for(var r,s,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},i=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var p=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"09f7":function(t,e,a){},2125:function(t,e,a){"use strict";a("76b7")},"41cc":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("div",{staticClass:"map"},[a("map-loader",{attrs:{markers:t.markers,"map-config":t.mapConfig,apiKey:"AIzaSyBz512sd4Re60aeviBUjHX8X03lAi3UZBs"}}),a("v-btn",{style:"bottom: "+(t.showMapSearchToggle?95:30)+"px; right: 10px;",attrs:{color:"white",elevation:"2",fab:"",absolute:""},on:{click:function(e){return t.searchText("我附近的餐廳")}}},[a("v-icon",{attrs:{color:"grey darken-3"}},[t._v("mdi-crosshairs-gps")])],1)],1),a("div",{staticClass:"map-search"},[a("v-text-field",{ref:"appSearch",attrs:{placeholder:"搜尋餐廳",solo:"","append-icon":"mdi-magnify",clearable:"","hide-details":"",autocomplete:"off",rounded:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchText(t.keyword)},"click:append":function(e){return t.searchText(t.keyword)},"click:clear":t.close},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),a("div",{staticClass:"mt-3"},[a("v-btn",{staticClass:"mr-2",attrs:{small:"",rounded:""},on:{click:function(e){return t.searchText("附近的餐廳")}}},[t._v(" 附近的餐廳 ")]),a("v-btn",{staticClass:"mr-2",attrs:{small:"",rounded:""},on:{click:function(e){return t.searchText("氣氛好的餐廳")}}},[t._v(" 氣氛好 ")]),a("v-btn",{staticClass:"mr-2",attrs:{small:"",rounded:""},on:{click:function(e){return t.searchText("食物好的餐廳")}}},[t._v(" 食物好 ")])],1)],1),a("keep-alive",[!t.showMapSearchToggle||t.showSearch?a("router-view"):t._e()],1),t.showMapSearchToggle?a("v-btn",{staticStyle:{bottom:"30px",right:"10px"},attrs:{absolute:"",rounded:"","x-large":""},on:{click:function(e){t.showSearch=!t.showSearch}}},[t.showSearch?[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-map")]),t._v("顯示地圖 ")]:[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-view-list")]),t._v("顯示清單 ")]],2):t._e()],1)],1)},i=[],s=(a("d81d"),a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"map"}}),this.google&&this.map?[a("map-provider",{attrs:{google:t.google,map:t.map}},[t._t("default")],2)]:t._e()],2)}),o=[],l=(a("fb6a"),a("a434"),a("2909")),c=a("b85c"),p=a("f464"),u=a.n(p),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._t("default")],2)},h=[],f={props:{google:Object,map:Object},provide:function(){return{google:this.google,map:this.map}}},v=f,m=a("2877"),g=Object(m["a"])(v,d,h,!1,null,null,null),y=g.exports,_=(a("99af"),a("bc3a")),x=a.n(_),k=new r["a"]({data:function(){return{resultList:[],keyword:"",lng:null,lat:null,price_level:0,rating:0,start_from:0,sort_by:null,items_per_page:20,mapLng:null,mapLat:null}},methods:{search:function(t){var e=this,a="".concat(window.APIBASE,"/search?keyword=").concat(t.keyword);this.mapLat&&this.mapLng&&(a+="&lat=".concat(this.mapLat,"&lng=").concat(this.mapLng)),"price_level"in t&&(a+="&price_level=".concat(t.price_level)),"rating"in t&&(a+="&rating=".concat(t.rating)),"sort_by"in t&&(a+="&sort_by=".concat(t.sort_by)),a+="&items_per_page=".concat("items_per_page"in t?t.items_per_page:this.items_per_page),a+="&start_from=".concat("start_from"in t?t.start_from:this.start_from),x.a.get(a).then((function(a){var n=a.data;n.error?console.error(n):(r["a"].set(e,"resultList",n.data),e.keyword=t.keyword,e.lat=t.lat||null,e.lng=t.lng||null,e.price_level=t.price_level||0,e.rating=t.rating||0,e.sort_by=t.sort_by,e.start_from=n.start_from,e.items_per_page=n.items_per_page)}))},searchNearby:function(t){var e=this,a="".concat(window.APIBASE,"/search?lat=").concat(t.lat,"&lng=").concat(t.lng);"price_level"in t&&(a+="&price_level=".concat(t.price_level)),"rating"in t&&(a+="&rating=".concat(t.rating)),"sort_by"in t&&(a+="&sort_by=".concat(t.sort_by)),a+="&items_per_page=".concat("items_per_page"in t?t.items_per_page:this.items_per_page),a+="&start_from=".concat("start_from"in t?t.start_from:this.start_from),x.a.get(a).then((function(a){var n=a.data;n.error?console.error(n):(r["a"].set(e,"resultList",n.data),e.keyword="",e.lat=t.lat||null,e.lng=t.lng||null,e.price_level=t.price_level||0,e.rating=t.rating||0,e.sort_by=t.sort_by,e.start_from=n.start_from,e.items_per_page=n.items_per_page)}))},nextPage:function(){var t=this,e="".concat(window.APIBASE,"/search?")+"start_from=".concat(this.start_from+this.items_per_page)+"&items_per_page=".concat(this.items_per_page);this.keyword&&(e+="&keyword=".concat(this.keyword)),this.lat&&this.lng&&(e+="&lat=".concat(this.lat),e+="&lng=".concat(this.lng)),this.price_level&&(e+="&price_level=".concat(this.price_level)),this.rating&&(e+="&rating=".concat(this.rating)),x.a.get(e).then((function(e){var a=e.data;a.error?console.error(a):(t.resultList.concat(a.data),t.start_from=a.start_from,t.items_per_page=a.items_per_page)}))},clear:function(){r["a"].set(this,"resultList",[])}}}),w={props:{mapConfig:Object,apiKey:String,markers:Array},components:{MapProvider:y},watch:{markers:function(t){var e=this;this.removeAllMarkers();var a,r=Object(c["a"])(t);try{for(r.s();!(a=r.n()).done;){var n=a.value;this.addMarker(n)}}catch(p){r.e(p)}finally{r.f()}if(t.length>0){var i=t.map((function(t){return t.position.lat+e.adjustLat})),s=t.map((function(t){return t.position.lng+e.adjustLng})),o={south:Math.min.apply(Math,Object(l["a"])(i)),west:Math.min.apply(Math,Object(l["a"])(s)),north:Math.max.apply(Math,Object(l["a"])(i)),east:Math.max.apply(Math,Object(l["a"])(s))};this.fitBounds(o)}}},data:function(){return{google:null,map:null,markersInst:[],adjustLat:0,adjustLng:.008755}},mounted:function(){var t=this;u()({apiKey:this.apiKey}).then((function(e){t.google=e,t.initializeMap();var a,r=Object(c["a"])(t.markers);try{for(r.s();!(a=r.n()).done;){var n=a.value;t.addMarker(n)}}catch(i){r.e(i)}finally{r.f()}}))},methods:{initializeMap:function(){var t=this,e=this.$el.querySelector("#map"),a=this.google.maps.Map;this.map=new a(e,this.mapConfig),this.map.addListener("zoom_changed",(function(){t.$emit("zoom-changed",t.map.getZoom())}));var r=this.map.getCenter(),n={lat:r.lat()-this.adjustLat,lng:r.lng()-this.adjustLng};k.mapLat=n.lat,k.mapLng=n.lng,this.map.addListener("center_changed",(function(){var e=t.map.getCenter(),a={lat:e.lat()-t.adjustLat,lng:e.lng()-t.adjustLng};t.$emit("center-changed",a),k.mapLat=a.lat,k.mapLng=a.lng})),k.$emit("map-ready")},removeAllMarkers:function(){var t,e=Object(c["a"])(this.markersInst);try{for(e.s();!(t=e.n()).done;){var a=t.value;a.setMap(null)}}catch(r){e.e(r)}finally{e.f()}this.markersInst.splice(0)},addMarker:function(t){var e=this,a=this.google.maps.Marker,r={lat:t.position.lat+this.adjustLat,lng:t.position.lng+this.adjustLng},n=new a({position:r,map:this.map,title:t.title||"Child marker!!",id:t.id});this.markersInst.push(n);var i=new a({map:this.map,position:r,label:{color:"black",fontSize:"16px",text:t.title.slice(0,30),className:"marker-label"},icon:{url:"https://maps.google.com/mapfiles/kml/shapes/library_maps.png",scaledSize:new this.google.maps.Size(0,0),origin:new this.google.maps.Point(0,0),anchor:new this.google.maps.Point(0,0),labelOrigin:new this.google.maps.Point(25,-30)}});if(this.markersInst.push(i),t.aspectDescription){var s=new a({map:this.map,position:r,label:{color:"#000000",fontSize:"12px",text:t.aspectDescription,className:"marker-label"},icon:{url:"https://maps.google.com/mapfiles/kml/shapes/library_maps.png",scaledSize:new this.google.maps.Size(0,0),origin:new this.google.maps.Point(0,0),anchor:new this.google.maps.Point(0,0),labelOrigin:new this.google.maps.Point(25,-12)}});this.markersInst.push(s)}n.addListener("click",(function(){e.$emit("marker-click",t.id),n.setAnimation(e.google.maps.Animation.BOUNCE),n.setAnimation(null),e.$router.push("/detail/".concat(t.id))}))},setCenter:function(t){this.map.setCenter(t),k.mapLat=t.lat+this.adjustLat,k.mapLng=t.lng+this.adjustLng},fitBounds:function(t){this.map.fitBounds(t,{left:this.$vuetify.breakpoint.mobile?20:450,bottom:20,right:20,top:20})},setZoom:function(t){this.map.setZoom(t)}}},b=w,S=(a("a3f6"),Object(m["a"])(b,s,o,!1,null,null,null)),L=S.exports,C=new r["a"]({}),I=(a("4de4"),[{text:"食物",key:"food"},{text:"服務",key:"service"},{text:"氣氛",key:"atmosphere"},{text:"清潔",key:"cleanliness"},{text:"價值",key:"value"}]),A=function(){var t={};return I.map((function(e){return t[e.key]=e.text})),t}();function $(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];function a(t){return t>=4.5?e?'\n        <span>\n          <i aria-hidden="true" class="v-icon notranslate mdi mdi-check-all theme--light" style="color: green; position: relative; top: -2px;"></i>\n        </span >\n        ':"✔️✔️":t<4.5&&t>=3.5?e?'\n        <span>\n          <i aria-hidden="true" class="v-icon notranslate mdi mdi-check theme--light" style="color: green; position: relative; top: -2px;"></i>\n        </span >\n        ':"✔️":t<3.5&&t>=2.5?e?'\n        <span>\n          <i aria-hidden="true" class="v-icon notranslate mdi mdi-alert theme--light" style="color: #ffe000; position: relative; top: -2px;"></i>\n        </span >\n        ':"⚠️":t<2.5?e?'\n        <span>\n          <i aria-hidden="true" class="v-icon notranslate mdi mdi-close theme--light" style="color: red; position: relative; top: -2px;"></i>\n        </span >\n        ':"❌":void 0}var r=I.map((function(e){return{key:e.key,rating:t["".concat(e.key,"_rating")],count:t["".concat(e.key,"_count")]}}));return r=r.filter((function(t){return t.count>=20})),r.sort((function(t,e){return e.rating-t.rating})),0===r.length?"":1===r.length?A[r[0].key]+a(r[0].rating):A[r[0].key]+a(r[0].rating)+" · "+A[r[r.length-1].key]+a(r[r.length-1].rating)}var R={name:"App",components:{MapLoader:L},data:function(){return{keyword:"",mapConfig:{mapId:"2d966253da63a7e7",zoom:12,center:{lat:24.79612,lng:120.993},fullscreenControl:!1,gestureHandling:"greedy",streetViewControl:!1,mapTypeControl:!1,zoomControl:!1,styles:[{featureType:"road",stylers:[{visibility:"off"}]}]},showSearch:!0}},computed:{showMapSearchToggle:function(){return this.$vuetify.breakpoint.mobile&&"Search"===this.$route.name},SearchEngine:function(){return k},markers:function(){return 0===this.SearchEngine.resultList.length?[]:this.SearchEngine.resultList.map((function(t){return{position:{lat:parseFloat(t.lat),lng:parseFloat(t.lng)},id:t.cid,title:t.name,aspectDescription:$(t,!1)}}))}},methods:{blur:function(){this.$refs.appSearch.blur()},close:function(){this.keyword="",C.$emit("search-clear"),this.$router.push("/"),this.SearchEngine.clear(),this.blur()},searchText:function(t){t&&(console.log("App:",t||this.keyword),t&&(this.keyword=t),this.showSearch=!0,this.$router.push("/search/".concat(this.keyword)),this.blur())}},created:function(){this.$router.push("/")},mounted:function(){var t=this;C.$on("search-clear",(function(){t.keyword=""}))}},j=R,E=(a("2125"),a("6544")),B=a.n(E),P=a("7496"),M=a("8336"),V=a("132d"),T=a("f6c4"),O=a("8654"),z=Object(m["a"])(j,n,i,!1,null,"5897bf74",null),N=z.exports;B()(z,{VApp:P["a"],VBtn:M["a"],VIcon:V["a"],VMain:T["a"],VTextField:O["a"]});var D=a("8c4f"),q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"panel search",staticStyle:{"padding-bottom":"64px"}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"","pb-3":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"","mb-3":""}},[a("v-text-field",{ref:"searchSearch",attrs:{placeholder:"搜尋",solo:"",clearable:"","hide-details":"","prepend-icon":"mdi-arrow-left","append-icon":"mdi-magnify",autocomplete:"off",rounded:""},on:{"click:prepend":t.close,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchText(t.keyword)},"click:append":function(e){return t.searchText(t.keyword)},"click:clear":t.close},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-layout",[a("v-flex",{attrs:{xs4:"","pr-1":""}},[a("v-select",{attrs:{items:t.ratingItems,dense:"",outlined:"","hide-details":""},on:{change:function(e){return t.search()}},model:{value:t.filterRating,callback:function(e){t.filterRating=e},expression:"filterRating"}})],1),a("v-flex",{attrs:{xs4:"","pl-1":"","pr-1":""}},[a("v-select",{attrs:{items:t.priceLevelItems,dense:"",outlined:"","hide-details":""},on:{change:function(e){return t.search()}},model:{value:t.filterPriceLevel,callback:function(e){t.filterPriceLevel=e},expression:"filterPriceLevel"}})],1),a("v-flex",{attrs:{xs4:"","pl-1":""}},[a("v-select",{attrs:{items:t.sortByList,dense:"",outlined:"","hide-details":""},on:{change:function(e){return t.search()}},model:{value:t.filterSortBy,callback:function(e){t.filterSortBy=e},expression:"filterSortBy"}})],1)],1)],1)],1)],1),a("v-flex",{attrs:{xs12:""}},[a("v-layout",{attrs:{wrap:""}},[0===t.SearchEngine.resultList.length?[a("v-flex",{staticStyle:{"text-align":"center"},attrs:{xs12:"","pt-5":""}},[t._v(" 沒有符合的項目 ")])]:t._e(),t._l(t.SearchEngine.resultList,(function(e,r){return[a("v-flex",{key:r,staticStyle:{cursor:"pointer"},attrs:{xs12:""},on:{click:function(a){return t.$router.push("/detail/"+e.cid)}}},[a("v-layout",[a("v-flex",{staticClass:"search-item-img",staticStyle:{display:"none","background-image":"url(https://lh5.googleusercontent.com/p/AF1QipNUa5VRyTSXLuyL0eTX_4Et2ixZp_Gs0uaf3Wf3=w122-h92-k-no)"},attrs:{xs4:"","mr-3":""}}),a("v-flex",{staticClass:"search-item-content",attrs:{xs12:"","pt-3":""}},[a("h3",{staticStyle:{height:"28px",overflow:"hidden","text-overflow":"ellipse","text-wrap":"no-wrap"}},[t._v(" "+t._s(e.name)+" ")]),a("div",{staticStyle:{height:"24px",overflow:"hidden"}},[a("span",{staticClass:"yellow--text text--darken-4"},[t._v(" "+t._s(e.rating)+" ")]),e.rating?a("v-rating",{staticStyle:{display:"inline",position:"relative",top:"-2px"},attrs:{dense:"","empty-icon":"mdi-star-outline","full-icon":"mdi-star","half-icon":"mdi-star-half-full",hover:"",length:"5",value:e.rating,readonly:"",size:"18","background-color":"yellow darken-4",color:"yellow darken-4","half-increments":""}}):t._e(),e.user_ratings_total?a("span",{staticClass:"grey--text text--darken-1"},[t._v(" ("+t._s(e.user_ratings_total)+") ")]):t._e(),e.price_level?a("span",{staticClass:"grey--text text--darken-1"},[t._v(" · "+t._s("$".repeat(e.price_level))+" ")]):t._e(),e.user_ratings_total?t._e():a("span",{staticClass:"grey--text text--darken-1"},[t._v(" 評論不足 ")])],1),a("div",{staticClass:"grey--text text--darken-1",staticStyle:{height:"24px",overflow:"hidden"}},[t._v(" "+t._s(e.formatted_address)+" ")]),a("div",{staticStyle:{height:"24px",overflow:"hidden"},domProps:{innerHTML:t._s(t.aspectRatingDescription(e,!0,t.filterSortBy))}})])],1),a("v-divider")],1)]}))],2)],1)],1)],1)},F=[],U=(a("ac1f"),a("841c"),{mounted:function(){var t=this,e=this.$el;e.addEventListener("scroll",(function(){t.scrollTop=e.scrollTop}))},activated:function(){if(this.scrollTop){var t=this.$el;t.scrollTop=this.scrollTop}},deactivated:function(){}}),H={name:"Search",mixins:[U],data:function(){return{text:"",keyword:"",ratingItems:[{text:"評價",value:0},{text:"1⭐+",value:1},{text:"2⭐+",value:2},{text:"3⭐+",value:3},{text:"4⭐+",value:4},{text:"4.5⭐+",value:4.5}],filterRating:0,priceLevelItems:[{text:"價格",value:0},{text:"$+",value:1},{text:"$$+",value:2},{text:"$$$+",value:3},{text:"$$$$+",value:4}],filterPriceLevel:0,filterSortBy:"distance",sortByList:[{text:"距離排序",value:"distance"},{text:"評價排序",value:"rating"},{text:"食物評價排序",value:"food_rating"},{text:"服務評價排序",value:"service_rating"},{text:"氣氛評價排序",value:"atmosphere_rating"},{text:"清潔評價排序",value:"cleanliness_rating"},{text:"價值評價排序",value:"value_rating"}]}},components:{},computed:{SearchEngine:function(){return k},aspectRatingsDict:function(){return A},aspectRatingsList:function(){return I},aspectRatingDescription:function(){return $}},methods:{blur:function(){this.$refs.searchSearch.blur()},close:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.keyword="",this.filterRating=0,this.filterPriceLevel=0,this.filterSortBy="distance",C.$emit("search-clear"),this.blur(),t&&this.$router.push("/"),this.SearchEngine.clear(),blur()},search:function(t){t||(t=this.keyword),this.keyword=t,this.blur(),this.SearchEngine.clear(),console.log("perform searching.",t),"附近的餐廳"===t?this.searchNearby(this.SearchEngine.mapLat,this.SearchEngine.mapLng):"我附近的餐廳"===t?this.searchNearbyGPS():"氣氛好的餐廳"===t?(this.filterSortBy="atmosphere_rating",this.searchNearby(this.SearchEngine.mapLat,this.SearchEngine.mapLng)):"食物好的餐廳"===t?(this.filterSortBy="food_rating",this.searchNearby(this.SearchEngine.mapLat,this.SearchEngine.mapLng)):this.SearchEngine.search({keyword:t,rating:this.filterRating,price_level:this.filterPriceLevel,sort_by:this.filterSortBy})},searchNearbyGPS:function(){var t=this;console.log("gps"),navigator.geolocation.getCurrentPosition((function(e){console.log(e);var a=e.coords.latitude+0,r=e.coords.longitude-.008755;t.searchNearby(a,r)}),(function(t){console.error(t),alert("請開啟您的定位功能！")}))},searchNearby:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r={keyword:a,lng:e,lat:t,rating:this.filterRating,price_level:this.filterPriceLevel,sort_by:this.filterSortBy};console.log(r),this.SearchEngine.searchNearby(r)},searchText:function(){console.log("searchText",this.keyword),this.$router.push("/search/".concat(this.keyword))}},mounted:function(){var t=this;this.keyword=this.$route.params.query,this.search(this.keyword),console.log("mounted"),C.$on("search-clear",(function(){t.keyword=""}))},created:function(){this.keyword=this.$route.params.query},beforeRouteEnter:function(t,e,a){a((function(e){console.log(e.keyword,t.params.query),e.keyword!==t.params.query&&(console.log("beforeRouteEnter!"),e.keyword=t.params.query,e.search(t.params.query))}))},beforeRouteUpdate:function(t,e,a){console.log("beforeRouteUpdate!",t.params.query),this.search(t.params.query),a()},beforeRouteLeave:function(t,e,a){console.log("beforeRouteLeave!"),"Home"===t.name&&this.close(!1),a()}},Q=H,G=(a("d1fb"),a("a523")),K=a("ce7e"),Z=a("0e8f"),X=a("a722"),J=a("1d4d"),W=a("b974"),Y=Object(m["a"])(Q,q,F,!1,null,"313c8d2f",null),tt=Y.exports;B()(Y,{VContainer:G["a"],VDivider:K["a"],VFlex:Z["a"],VLayout:X["a"],VRating:J["a"],VSelect:W["a"],VTextField:O["a"]});var et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"panel detail",staticStyle:{"padding-bottom":"64px"},attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"","pb-3":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"detail-cover",staticStyle:{"background-image":"url(https://lh5.googleusercontent.com/p/AF1QipNQdMzkcM-kCtxRQ8897hVVqQFWSPQIKf8CpqiB=w408-h306-k-no)"},attrs:{xs12:""}},[a("v-container",[a("v-btn",{staticStyle:{"background-color":"#ffffffdd"},attrs:{depressed:""},on:{click:function(e){return t.$router.back()}}},[a("v-icon",[t._v("mdi-arrow-left")]),t._v(" 返回上一頁 ")],1),a("v-btn",{staticStyle:{"background-color":"#ffffffdd",float:"right"},attrs:{depressed:""},on:{click:t.close}},[a("v-icon",[t._v("mdi-close")]),t._v(" 關閉 ")],1)],1)],1),t.placeInfo?a("v-flex",{attrs:{xs12:""}},[a("v-container",[a("h2",[t._v(t._s(t.placeInfo.name))]),a("p",[a("span",[a("span",{staticClass:"yellow--text text--darken-4"},[t._v(" "+t._s(t.placeInfo.rating)+" ")]),t.placeInfo.rating?a("v-rating",{staticStyle:{display:"inline",position:"relative",top:"-2px"},attrs:{dense:"","empty-icon":"mdi-star-outline","full-icon":"mdi-star","half-icon":"mdi-star-half-full",hover:"",length:"5",value:t.placeInfo.rating,readonly:"",size:"18","background-color":"yellow darken-4",color:"yellow darken-4","half-increments":""}}):t._e(),t.placeInfo.user_ratings_total?a("span",{staticClass:"grey--text text--darken-1"},[t._v(" ("+t._s(t.placeInfo.user_ratings_total)+"則評論) ")]):t._e(),t.placeInfo.price_level?a("span",{staticClass:"grey--text text--darken-1"},[t._v(" · "+t._s("$".repeat(t.placeInfo.price_level))+" ")]):t._e(),t.placeInfo.user_ratings_total?t._e():a("span",{staticClass:"grey--text text--darken-1"},[t._v(" 評論不足 ")])],1),a("br"),a("span",{domProps:{innerHTML:t._s(t.aspectRatingDescription(t.placeInfo,!0))}})])]),a("v-list",[a("v-divider"),a("v-list-item",{attrs:{href:"https://www.google.com.tw/maps/search/"+t.placeInfo.name+" "+(t.placeInfo.formatted_address||""),target:"_blank"}},[a("v-list-item-icon",[a("v-icon",{attrs:{color:"primary"}},[t._v("mdi-map")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" 在 Google Map 中開啟 ")])],1)],1),a("v-divider"),t.placeInfo.formatted_address?a("v-list-item",[a("v-list-item-icon",[a("v-icon",{attrs:{color:"primary"}},[t._v("mdi-map-marker")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(t.placeInfo.formatted_address)+" ")])],1)],1):t._e(),t.placeInfo.formatted_address?a("v-divider"):t._e()],1),t.hasAnyAspectRatings?a("v-container",[a("h3",{staticClass:"mt-3 mb-2"},[t._v("評論摘要")]),a("v-layout",{attrs:{wrap:""}},t._l(t.aspectRatingsList.filter((function(e){return t.placeInfo[e.key+"_rating"]})),(function(e){return a("v-flex",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.key,staticStyle:{"text-align":"center","user-select":"none",cursor:"pointer"},on:{click:function(a){t.reviewsAspect=e.key,t.loadReviews()}}},[a("div",{staticStyle:{"font-size":"15px"}},[t._v(" "+t._s(e.text)+" ")]),a("div",{staticClass:"yellow--text text--darken-4",staticStyle:{"font-size":"24px","line-height":"30px"}},[t._v(" "+t._s(t.placeInfo[e.key+"_rating"].toFixed(1))+" ")]),a("div",{staticClass:"grey--text",staticStyle:{"font-size":"14px"}},[t._v(" ("+t._s(t.placeInfo[e.key+"_count"])+") ")])])})),1)],1):t._e(),t.hasAnyAspectRatings?a("v-container",{attrs:{"mb-3":""}},[a("v-card",[a("v-card-title",[t._v(" 您覺得這些資訊有用嗎？ ")]),t.rated?a("v-card-actions",[a("div",{staticStyle:{margin:"0 auto","text-align":"center"}},[1===t.feedbackRating?a("img",{staticStyle:{width:"200px"},attrs:{src:"https://chojugiga.com/c/choju54_0031/choju54_0031.png"}}):a("img",{staticStyle:{width:"200px"},attrs:{src:"https://chojugiga.com/c/choju51_0035/choju51_0035.png"}}),a("p",[t._v("謝謝你")])])]):a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(e){return t.feedback(0)}}},[a("v-icon",{staticClass:"mr-1"},[t._v("mdi-emoticon-sad-outline")]),t._v("沒有用 ")],1),a("v-btn",{attrs:{outlined:""},on:{click:function(e){return t.feedback(1)}}},[a("v-icon",{staticClass:"mr-1"},[t._v("mdi-emoticon-happy-outline")]),t._v("有幫助 ")],1)],1)],1)],1):t._e(),t.hasAnyAspectRatings?a("v-divider"):t._e(),a("v-container",[a("h3",{staticClass:"mt-5 mb-2"},[t._v("評論")]),a("v-layout",[a("v-flex",{attrs:{"mr-3":""}},[a("v-select",{attrs:{items:t.reviewsAspectList,dense:"",outlined:"","hide-details":""},on:{change:function(e){return t.loadReviews()}},model:{value:t.reviewsAspect,callback:function(e){t.reviewsAspect=e},expression:"reviewsAspect"}})],1),a("v-flex",[a("v-select",{attrs:{items:t.reviewsSortByList,dense:"",outlined:"","hide-details":""},on:{change:function(e){return t.loadReviews()}},model:{value:t.reviewsSortBy,callback:function(e){t.reviewsSortBy=e},expression:"reviewsSortBy"}})],1)],1)],1),t._l(t.reviews,(function(e){return[a("v-container",{key:e.id},[a("v-layout",[a("v-flex",{staticClass:"pr-3",staticStyle:{"padding-top":"2px"}},[a("v-avatar",{attrs:{color:e.rating>3?"green":"red",size:"42"}},[e.rating>3?a("v-icon",{attrs:{dark:""}},[t._v(" mdi-thumb-up ")]):a("v-icon",{attrs:{dark:""}},[t._v(" mdi-thumb-down ")])],1)],1),a("v-flex",{attrs:{xs12:""}},[a("span",{staticClass:"grey--text text--darken-1",staticStyle:{"font-size":"16px"}},[t._v(" "+t._s(e.author_name)+" ")]),a("br"),a("span",{staticClass:"yellow--text text--darken-4"},[t._v(" "+t._s(e.rating)+" ")]),a("v-rating",{staticStyle:{display:"inline",position:"relative",top:"-2px"},attrs:{dense:"","empty-icon":"mdi-star-outline","full-icon":"mdi-star","half-icon":"mdi-star-half-full",hover:"",length:"5",value:e.rating,readonly:"",size:"18","background-color":"yellow darken-4",color:"yellow darken-4","half-increments":""}}),a("span",{staticClass:"grey--text"},[t._v(" · "+t._s(t.toDate(e.time))+" ")])],1)],1),a("p",{staticClass:"pt-3 pb-0 mb-0",domProps:{innerHTML:t._s(e.text.replace(/\n/g,"<br>"))}})],1),a("v-divider",{key:e.id+"-divider"})]}))],2):t._e()],1)],1)],1)},at=[],rt={name:"Detail",data:function(){return{cid:"",placeInfo:{},rated:!1,feedbackRating:1,reviews:[],reviewsAspect:"all",reviewsAspectList:[{text:"全部",value:"all"},{text:"食物",value:"food"},{text:"服務",value:"service"},{text:"氣氛",value:"atmosphere"},{text:"清潔",value:"cleanliness"},{text:"價值",value:"value"}],reviewsSortBy:"importance",reviewsSortByList:[{text:"重要性",value:"importance"},{text:"時間",value:"time"},{text:"評價（高至低）",value:"rating_desc"},{text:"評價（低至高）",value:"rating_asc"}]}},computed:{SearchEngine:function(){return k},aspectRatingsDict:function(){return A},aspectRatingsList:function(){return I},aspectRatingDescription:function(){return $},hasAnyAspectRatings:function(){var t,e=Object(c["a"])(this.aspectRatingsList);try{for(e.s();!(t=e.n()).done;){var a=t.value.key;if(this.placeInfo[a+"_count"]>0)return!0}}catch(r){e.e(r)}finally{e.f()}return!1}},methods:{toDate:function(t){var e=new Date(t);return e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate()},load:function(t){var e=this;x.a.get("".concat(window.APIBASE,"/detail/").concat(t)).then((function(t){var a=t.data;a.error?console.error(a):(e.rated=!1,e.reviewsAspect="all",e.reviewsSortBy="importance",r["a"].set(e,"placeInfo",a),e.loadReviews())}))},loadReviews:function(){var t=this;r["a"].set(this,"reviews",[]);var e="".concat(window.APIBASE,"/reviews/").concat(this.cid,"?aspect=").concat(this.reviewsAspect,"&sort_by=").concat(this.reviewsSortBy);x.a.get(e).then((function(e){var a=e.data;a.error?console.error(a):r["a"].set(t,"reviews",a.data)}))},close:function(){C.$emit("search-clear"),this.SearchEngine.clear(),this.rated=!1,this.reviewsAspect="all",this.reviewsSortBy="importance",r["a"].set(this,"reviews",[]),this.$router.push("/")},feedback:function(t){var e=this;this.cid&&x.a.get("".concat(window.APIBASE,"/feedback/place/").concat(this.cid,"/").concat(t)).then((function(a){var r=a.data;r.error?console.error(r):(e.rated=!0,e.feedbackRating=t)}))}},mounted:function(){},created:function(){this.cid=this.$route.params.cid,this.load(this.cid)},beforeRouteEnter:function(t,e,a){a((function(e){e.cid!==t.params.cid&&(e.cid=t.params.cid,e.load(t.params.cid))}))},beforeRouteUpdate:function(t,e,a){console.log("beforeRouteUpdate!",t.params.cid),this.cid=t.params.cid,this.load(t.params.cid),a()}},nt=rt,it=(a("e830"),a("8212")),st=a("b0af"),ot=a("99d9"),lt=a("8860"),ct=a("da13"),pt=a("5d23"),ut=a("34c3"),dt=a("2fa4"),ht=a("269a"),ft=a.n(ht),vt=a("5607"),mt=Object(m["a"])(nt,et,at,!1,null,"9d90b978",null),gt=mt.exports;B()(mt,{VAvatar:it["a"],VBtn:M["a"],VCard:st["a"],VCardActions:ot["a"],VCardTitle:ot["b"],VContainer:G["a"],VDivider:K["a"],VFlex:Z["a"],VIcon:V["a"],VLayout:X["a"],VList:lt["a"],VListItem:ct["a"],VListItemContent:pt["a"],VListItemIcon:ut["a"],VListItemTitle:pt["b"],VRating:J["a"],VSelect:W["a"],VSpacer:dt["a"]}),ft()(mt,{Ripple:vt["a"]}),r["a"].use(D["a"]);var yt=[{path:"/",name:"Home"},{path:"/search/:query",name:"Search",component:tt},{path:"/detail/:cid",name:"Detail",component:gt}],_t=new D["a"]({routes:yt}),xt=_t,kt=a("f309");r["a"].use(kt["a"]);var wt=new kt["a"]({}),bt=a("0284"),St=a.n(bt);r["a"].use(St.a,{id:"G-PRN13V8SVN",router:xt}),r["a"].config.productionTip=!1,window.APIBASE="https://smart-restaurant.duckdns.org",document.body.addEventListener("click",(function(t){var e=t.target.nodeName.toLowerCase();"input"!==e&&"textarea"!==e&&"select"!==e&&document.activeElement.blur()})),new r["a"]({router:xt,vuetify:wt,render:function(t){return t(N)}}).$mount("#app")},"76b7":function(t,e,a){},"8ece":function(t,e,a){},a3f6:function(t,e,a){"use strict";a("09f7")},d1fb:function(t,e,a){"use strict";a("41cc")},e830:function(t,e,a){"use strict";a("8ece")}});
//# sourceMappingURL=app.4b71b41d.js.map