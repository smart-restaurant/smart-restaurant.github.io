(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var p=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0523":function(t,e,a){},"09f7":function(t,e,a){},"158d":function(t,e,a){"use strict";a("0523")},3882:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("div",{staticClass:"map"},[a("map-loader",{attrs:{markers:t.markers,"map-config":t.mapConfig,apiKey:"AIzaSyBz512sd4Re60aeviBUjHX8X03lAi3UZBs"}}),a("v-btn",{style:"bottom: "+(t.showMapSearchToggle?95:30)+"px; right: 10px;",attrs:{color:"white",elevation:"2",fab:"",absolute:""},on:{click:function(e){return t.searchText("我附近的餐廳")}}},[a("v-icon",{attrs:{color:"grey darken-3"}},[t._v("mdi-crosshairs-gps")])],1)],1),a("div",{staticClass:"map-search"},[a("v-text-field",{attrs:{placeholder:"搜尋",solo:"","append-icon":"mdi-magnify",clearable:"","hide-details":"",autocomplete:"off",rounded:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchText(t.keyword)},"click:append":function(e){return t.searchText(t.keyword)},"click:clear":t.close},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),a("div",{staticClass:"mt-3"},[a("v-btn",{staticClass:"mr-2",attrs:{small:"",rounded:""},on:{click:function(e){return t.searchText("附近的餐廳")}}},[t._v(" 附近的餐廳 ")]),a("v-btn",{staticClass:"mr-2",attrs:{small:"",rounded:""},on:{click:function(e){return t.searchText("氣氛好的餐廳")}}},[t._v(" 氣氛好 ")]),a("v-btn",{staticClass:"mr-2",attrs:{small:"",rounded:""},on:{click:function(e){return t.searchText("食物好的餐廳")}}},[t._v(" 食物好 ")])],1)],1),a("keep-alive",[!t.showMapSearchToggle||t.showSearch?a("router-view"):t._e()],1),t.showMapSearchToggle?a("v-btn",{staticStyle:{bottom:"30px",right:"10px"},attrs:{absolute:"",rounded:"","x-large":""},on:{click:function(e){t.showSearch=!t.showSearch}}},[t.showSearch?[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-map")]),t._v("顯示地圖 ")]:[a("v-icon",{staticClass:"mr-2"},[t._v("mdi-view-list")]),t._v("顯示清單 ")]],2):t._e()],1)],1)},i=[],o=(a("d81d"),a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"map"}}),this.google&&this.map?[a("map-provider",{attrs:{google:t.google,map:t.map}},[t._t("default")],2)]:t._e()],2)}),s=[],l=(a("fb6a"),a("a434"),a("2909")),c=a("b85c"),p=a("f464"),u=a.n(p),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._t("default")],2)},h=[],f={props:{google:Object,map:Object},provide:function(){return{google:this.google,map:this.map}}},m=f,v=a("2877"),g=Object(v["a"])(m,d,h,!1,null,null,null),y=g.exports,k=(a("99af"),a("bc3a")),_=a.n(k),x=new n["a"]({data:function(){return{resultList:[],keyword:"",lng:null,lat:null,price_level:0,rating:0,startFrom:0,itemsPerPage:10,mapLng:null,mapLat:null}},methods:{search:function(t){var e=this,a="".concat(window.APIBASE,"/search?keyword=").concat(t.keyword);"price_level"in t&&(a+="&price_level=".concat(t["price_level"])),"rating"in t&&(a+="&rating=".concat(t["rating"])),"sort_by"in t&&(a+="&sort_by=".concat(t["sort_by"])),_.a.get(a).then((function(a){var r=a.data;n["a"].set(e,"resultList",r.data),e.keyword=t.keyword,e.lat=t.lat||null,e.lng=t.lng||null,e.price_level=t.price_level||0,e.rating=t.rating||0,e.startFrom=r.start_from,e.itemsPerPage=r.items_per_page}))},searchNearby:function(t){var e=this,a="".concat(window.APIBASE,"/search?lat=").concat(t.lat,"&lng=").concat(t.lng);"price_level"in t&&(a+="&price_level=".concat(t["price_level"])),"rating"in t&&(a+="&rating=".concat(t["rating"])),"sort_by"in t&&(a+="&sort_by=".concat(t["sort_by"])),_.a.get(a).then((function(a){var r=a.data;n["a"].set(e,"resultList",r.data),e.keyword="",e.lat=t.lat||null,e.lng=t.lng||null,e.price_level=t.price_level||0,e.rating=t.rating||0,e.startFrom=r.start_from,e.itemsPerPage=r.items_per_page}))},nextPage:function(){var t=this,e="".concat(window.APIBASE,"/search?")+"start_from=".concat(this.startFrom+this.itemsPerPage)+"&items_per_page=".concat(this.itemsPerPage);this.keyword&&(e+="&keyword=".concat(this.keyword)),this.lat&&this.lng&&(e+="&lat=".concat(this.lat),e+="&lng=".concat(this.lng)),this.price_level&&(e+="&price_level=".concat(this.price_level)),this.rating&&(e+="&rating=".concat(this.rating)),_.a.get(e).then((function(e){var a=e.data;t.resultList.concat(a.data),t.startFrom=a.start_from,t.itemsPerPage=a.items_per_page}))},clear:function(){n["a"].set(this,"resultList",[])}}}),b={props:{mapConfig:Object,apiKey:String,markers:Array},components:{MapProvider:y},watch:{markers:function(t){var e=this;this.removeAllMarkers();var a,n=Object(c["a"])(t);try{for(n.s();!(a=n.n()).done;){var r=a.value;this.addMarker(r)}}catch(p){n.e(p)}finally{n.f()}if(t.length>0){var i=t.map((function(t){return t.position.lat+e.adjustLat})),o=t.map((function(t){return t.position.lng+e.adjustLng})),s={south:Math.min.apply(Math,Object(l["a"])(i)),west:Math.min.apply(Math,Object(l["a"])(o)),north:Math.max.apply(Math,Object(l["a"])(i)),east:Math.max.apply(Math,Object(l["a"])(o))};this.fitBounds(s)}}},data:function(){return{google:null,map:null,markersInst:[],adjustLat:0,adjustLng:.008755}},mounted:function(){var t=this;u()({apiKey:this.apiKey}).then((function(e){t.google=e,t.initializeMap();var a,n=Object(c["a"])(t.markers);try{for(n.s();!(a=n.n()).done;){var r=a.value;t.addMarker(r)}}catch(i){n.e(i)}finally{n.f()}}))},methods:{initializeMap:function(){var t=this,e=this.$el.querySelector("#map"),a=this.google.maps.Map;this.map=new a(e,this.mapConfig),this.map.addListener("zoom_changed",(function(){t.$emit("zoom-changed",t.map.getZoom())}));var n=this.map.getCenter(),r={lat:n.lat()-this.adjustLat,lng:n.lng()-this.adjustLng};x.mapLat=r.lat,x.mapLng=r.lng,this.map.addListener("center_changed",(function(){var e=t.map.getCenter(),a={lat:e.lat()-t.adjustLat,lng:e.lng()-t.adjustLng};t.$emit("center-changed",a),x.mapLat=a.lat,x.mapLng=a.lng}))},removeAllMarkers:function(){var t,e=Object(c["a"])(this.markersInst);try{for(e.s();!(t=e.n()).done;){var a=t.value;a.setMap(null)}}catch(n){e.e(n)}finally{e.f()}this.markersInst.splice(0)},addMarker:function(t){var e=this,a=this.google.maps.Marker,n={lat:t.position.lat+this.adjustLat,lng:t.position.lng+this.adjustLng},r=new a({position:n,map:this.map,title:t.title||"Child marker!!",id:t.id});this.markersInst.push(r);var i=new a({map:this.map,position:n,label:{color:"black",fontSize:"16px",text:t.title.slice(0,10),className:"marker-label"},icon:{url:"https://maps.google.com/mapfiles/kml/shapes/library_maps.png",scaledSize:new this.google.maps.Size(0,0),origin:new this.google.maps.Point(0,0),anchor:new this.google.maps.Point(0,0),labelOrigin:new this.google.maps.Point(25,-30)}});if(this.markersInst.push(i),t.aspectDescription){var o=new a({map:this.map,position:n,label:{color:"#000000",fontSize:"12px",text:t.aspectDescription,className:"marker-label"},icon:{url:"https://maps.google.com/mapfiles/kml/shapes/library_maps.png",scaledSize:new this.google.maps.Size(0,0),origin:new this.google.maps.Point(0,0),anchor:new this.google.maps.Point(0,0),labelOrigin:new this.google.maps.Point(25,-12)}});this.markersInst.push(o)}r.addListener("click",(function(){e.$emit("marker-click",t.id),r.setAnimation(e.google.maps.Animation.BOUNCE),r.setAnimation(null),e.$router.push("/detail/".concat(t.id))}))},setCenter:function(t){this.map.setCenter(t),x.mapLat=t.lat+this.adjustLat,x.mapLng=t.lng+this.adjustLng},fitBounds:function(t){this.map.fitBounds(t,{left:this.$vuetify.breakpoint.mobile?20:450,bottom:20,right:20,top:20})},setZoom:function(t){this.map.setZoom(t)}}},w=b,S=(a("a3f6"),Object(v["a"])(w,o,s,!1,null,null,null)),L=S.exports,C=new n["a"]({}),P=(a("4de4"),[{text:"食物",key:"food"},{text:"服務",key:"service"},{text:"氣氛",key:"atmosphere"},{text:"清潔",key:"cleanliness"},{text:"價值",key:"value"}]),$=function(){var t={};return P.map((function(e){return t[e.key]=e.text})),t}();function I(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];function a(t){return t>=4.5?e?'\n        <span>\n          <i aria-hidden="true" class="v-icon notranslate mdi mdi-check-all theme--light" style="color: green; position: relative; top: -2px;"></i>\n        </span >\n        ':"✔️✔️":t<4.5&&t>=3.5?e?'\n        <span>\n          <i aria-hidden="true" class="v-icon notranslate mdi mdi-check theme--light" style="color: green; position: relative; top: -2px;"></i>\n        </span >\n        ':"✔️":t<3.5&&t>=2.5?e?'\n        <span>\n          <i aria-hidden="true" class="v-icon notranslate mdi mdi-alert theme--light" style="color: #ffe000; position: relative; top: -2px;"></i>\n        </span >\n        ':"⚠️":t<2.5?e?'\n        <span>\n          <i aria-hidden="true" class="v-icon notranslate mdi mdi-close theme--light" style="color: red; position: relative; top: -2px;"></i>\n        </span >\n        ':"❌":void 0}var n=P.map((function(e){return{key:e.key,rating:t["".concat(e.key,"_rating")],count:t["".concat(e.key,"_count")]}}));return n=n.filter((function(t){return t.count>=20})),n.sort((function(t,e){return e.rating-t.rating})),0===n.length?"":1===n.length?$[n[0].key]+a(n[0].rating):$[n[0].key]+a(n[0].rating)+" · "+$[n[n.length-1].key]+a(n[n.length-1].rating)}var j={name:"App",components:{MapLoader:L},data:function(){return{keyword:"",mapConfig:{mapId:"2d966253da63a7e7",zoom:12,center:{lat:24.79612,lng:120.993},fullscreenControl:!1,gestureHandling:"greedy",streetViewControl:!1,mapTypeControl:!1,zoomControl:!1,styles:[{featureType:"road",stylers:[{visibility:"off"}]}]},showSearch:!0}},computed:{showMapSearchToggle:function(){return this.$vuetify.breakpoint.mobile&&"Search"===this.$route.name},SearchEngine:function(){return x},markers:function(){return 0===this.SearchEngine.resultList.length?[]:this.SearchEngine.resultList.map((function(t){return{position:{lat:parseFloat(t.lat),lng:parseFloat(t.lng)},id:t.cid,title:t.name,aspectDescription:I(t,!1)}}))}},methods:{close:function(){this.keyword="",C.$emit("search-clear"),this.$router.push("/"),this.SearchEngine.clear()},searchText:function(t){console.log("App:",t||this.keyword),t&&(this.keyword=t),this.showSearch=!0,this.$router.push("/search/".concat(this.keyword))}},mounted:function(){var t=this;C.$on("search-clear",(function(){t.keyword=""}))}},E=j,M=(a("7db8"),a("6544")),T=a.n(M),V=a("7496"),O=a("8336"),R=a("132d"),B=a("f6c4"),A=a("8654"),z=Object(v["a"])(E,r,i,!1,null,"453350f6",null),F=z.exports;T()(z,{VApp:V["a"],VBtn:O["a"],VIcon:R["a"],VMain:B["a"],VTextField:A["a"]});var N=a("8c4f"),D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"panel search"},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"","pb-3":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"","mb-3":""}},[a("v-text-field",{attrs:{placeholder:"搜尋",solo:"",clearable:"","hide-details":"","prepend-icon":"mdi-arrow-left","append-icon":"mdi-magnify",autocomplete:"off",rounded:""},on:{"click:prepend":t.close,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchText(t.keyword)},"click:append":function(e){return t.searchText(t.keyword)},"click:clear":t.close},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-layout",[a("v-flex",{attrs:{xs4:"","pr-1":""}},[a("v-select",{attrs:{items:t.ratingItems,dense:"",outlined:"","hide-details":""},on:{change:function(e){return t.search()}},model:{value:t.filterRating,callback:function(e){t.filterRating=e},expression:"filterRating"}})],1),a("v-flex",{attrs:{xs4:"","pl-1":"","pr-1":""}},[a("v-select",{attrs:{items:t.priceLevelItems,dense:"",outlined:"","hide-details":""},on:{change:function(e){return t.search()}},model:{value:t.filterPriceLevel,callback:function(e){t.filterPriceLevel=e},expression:"filterPriceLevel"}})],1),a("v-flex",{attrs:{xs4:"","pl-1":""}},[a("v-select",{attrs:{items:t.sortByList,dense:"",outlined:"","hide-details":""},on:{change:function(e){return t.search()}},model:{value:t.filterSortBy,callback:function(e){t.filterSortBy=e},expression:"filterSortBy"}})],1)],1)],1)],1)],1),a("v-flex",{attrs:{xs12:""}},[a("v-layout",{attrs:{wrap:""}},[t._l(t.SearchEngine.resultList,(function(e,n){return[a("v-flex",{key:n,staticStyle:{cursor:"pointer"},attrs:{xs12:""},on:{click:function(a){return t.$router.push("/detail/"+e.cid)}}},[a("v-layout",[a("v-flex",{staticClass:"search-item-img",staticStyle:{"background-image":"url(https://lh5.googleusercontent.com/p/AF1QipNUa5VRyTSXLuyL0eTX_4Et2ixZp_Gs0uaf3Wf3=w122-h92-k-no)"},attrs:{xs4:"","mr-3":""}}),a("v-flex",{staticClass:"search-item-content",attrs:{xs8:"","pt-3":""}},[a("h3",{staticStyle:{height:"28px",overflow:"hidden","text-overflow":"ellipse","text-wrap":"no-wrap"}},[t._v(" "+t._s(e.name)+" ")]),a("div",{staticStyle:{height:"24px",overflow:"hidden"}},[a("span",{staticClass:"yellow--text text--darken-4"},[t._v(" "+t._s(e.rating)+" ")]),a("v-rating",{staticStyle:{display:"inline",position:"relative",top:"-2px"},attrs:{dense:"","empty-icon":"mdi-star-outline","full-icon":"mdi-star","half-icon":"mdi-star-half-full",hover:"",length:"5",value:e.rating,readonly:"",size:"18","background-color":"yellow darken-4",color:"yellow darken-4","half-increments":""}}),a("span",{staticClass:"grey--text text--darken-1"},[t._v(" ("+t._s(e.user_ratings_total)+") ")]),e.price_level?a("span",{staticClass:"grey--text text--darken-1"},[t._v(" · "+t._s("$".repeat(e.price_level))+" ")]):t._e()],1),a("div",{staticClass:"grey--text text--darken-1",staticStyle:{height:"24px",overflow:"hidden"}},[t._v(" "+t._s(e.formatted_address)+" ")]),a("div",{staticStyle:{height:"24px",overflow:"hidden"},domProps:{innerHTML:t._s(t.aspectRatingDescription(e,!0))}})])],1),a("v-divider")],1)]}))],2)],1)],1)],1)},q=[],U=(a("ac1f"),a("841c"),{mounted:function(){var t=this,e=this.$el;e.addEventListener("scroll",(function(){t.scrollTop=e.scrollTop}))},activated:function(){if(this.scrollTop){var t=this.$el;t.scrollTop=this.scrollTop}},deactivated:function(){}}),Q={name:"Search",mixins:[U],data:function(){return{keyword:"",ratingItems:[{text:"評價",value:0},{text:"1⭐+",value:1},{text:"2⭐+",value:2},{text:"3⭐+",value:3},{text:"4⭐+",value:4},{text:"4.5⭐+",value:4.5}],filterRating:0,priceLevelItems:[{text:"價格",value:0},{text:"$+",value:1},{text:"$$+",value:2},{text:"$$$+",value:3},{text:"$$$$+",value:4}],filterPriceLevel:0,filterSortBy:"distance",sortByList:[{text:"距離",value:"distance"},{text:"評價",value:"rating"},{text:"食物評價",value:"food_rating"},{text:"服務評價",value:"service_rating"},{text:"氣氛評價",value:"atmosphere_rating"},{text:"清潔評價",value:"cleanliness_rating"},{text:"價值評價",value:"value_rating"}]}},components:{},computed:{SearchEngine:function(){return x},aspectRatingsDict:function(){return $},aspectRatingsList:function(){return P},aspectRatingDescription:function(){return I}},methods:{close:function(){this.keyword="",this.filterRating=0,this.filterPriceLevel=0,this.filterSortBy="distance",C.$emit("search-clear"),this.$router.push("/"),this.SearchEngine.clear()},search:function(t){t||(t=this.keyword),this.keyword=t,this.SearchEngine.clear(),console.log("perform searching.",t),"附近的餐廳"===t?this.searchNearby(this.SearchEngine.mapLat,this.SearchEngine.mapLng):"我附近的餐廳"===t?this.searchNearbyGPS():"氣氛好的餐廳"===t?(this.filterSortBy="atmosphere_rating",this.searchNearby(this.SearchEngine.mapLat,this.SearchEngine.mapLng)):"食物好的餐廳"===t?(this.filterSortBy="food_rating",this.searchNearby(this.SearchEngine.mapLat,this.SearchEngine.mapLng)):this.SearchEngine.search({keyword:t,rating:this.filterRating,price_level:this.filterPriceLevel,sort_by:this.filterSortBy})},searchNearbyGPS:function(){var t=this;console.log("gps"),navigator.geolocation.getCurrentPosition((function(e){console.log(e);var a=e.coords.latitude,n=e.coords.longitude;t.searchNearby(a,n)}),(function(t){console.error(t),alert("請開啟您的定位功能！")}))},searchNearby:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n={keyword:a,lng:e,lat:t,rating:this.filterRating,price_level:this.filterPriceLevel,sort_by:this.filterSortBy};console.log(n),this.SearchEngine.searchNearby(n)},searchText:function(){console.log("searchText",this.keyword),this.$router.push("/search/".concat(this.keyword))}},mounted:function(){var t=this;this.keyword=this.$route.params.query,this.search(this.keyword),console.log("mounted"),C.$on("search-clear",(function(){t.keyword=""}))},created:function(){this.keyword=this.$route.params.query},beforeRouteEnter:function(t,e,a){a((function(e){e.keyword!==t.params.query&&(console.log("beforeRouteEnter"),e.keyword=t.params.query,e.search(t.params.query))}))},beforeRouteUpdate:function(t,e,a){console.log("beforeRouteUpdate!",t.params.query),this.search(t.params.query),a()}},H=Q,K=(a("158d"),a("a523")),Z=a("ce7e"),G=a("0e8f"),X=a("a722"),J=a("1d4d"),W=a("b974"),Y=Object(v["a"])(H,D,q,!1,null,"a0fef9e2",null),tt=Y.exports;T()(Y,{VContainer:K["a"],VDivider:Z["a"],VFlex:G["a"],VLayout:X["a"],VRating:J["a"],VSelect:W["a"],VTextField:A["a"]});var et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"panel detail",attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"","pb-3":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"detail-cover",staticStyle:{"background-image":"url(https://lh5.googleusercontent.com/p/AF1QipNQdMzkcM-kCtxRQ8897hVVqQFWSPQIKf8CpqiB=w408-h306-k-no)"},attrs:{xs12:""}},[a("v-container",[a("v-btn",{staticStyle:{"background-color":"#ffffffdd"},attrs:{depressed:""},on:{click:function(e){return t.$router.back()}}},[a("v-icon",[t._v("mdi-arrow-left")]),t._v(" 返回上一頁 ")],1),a("v-btn",{staticStyle:{"background-color":"#ffffffdd",float:"right"},attrs:{depressed:""},on:{click:t.close}},[a("v-icon",[t._v("mdi-close")]),t._v(" 關閉 ")],1)],1)],1),t.placeInfo?a("v-flex",{attrs:{xs12:""}},[a("v-container",[a("h2",[t._v(t._s(t.placeInfo.name))]),a("p",[a("span",[a("span",{staticClass:"yellow--text text--darken-4"},[t._v(" "+t._s(t.placeInfo.rating)+" ")]),a("v-rating",{staticStyle:{display:"inline",position:"relative",top:"-2px"},attrs:{dense:"","empty-icon":"mdi-star-outline","full-icon":"mdi-star","half-icon":"mdi-star-half-full",hover:"",length:"5",value:t.placeInfo.rating,readonly:"",size:"18","background-color":"yellow darken-4",color:"yellow darken-4","half-increments":""}}),a("span",{staticClass:"grey--text text--darken-1"},[t._v(" ("+t._s(t.placeInfo.user_ratings_total)+") ")]),t.placeInfo.price_level?a("span",{staticClass:"grey--text text--darken-1"},[t._v(" · "+t._s("$".repeat(t.placeInfo.price_level))+" ")]):t._e()],1),a("br"),a("span",{domProps:{innerHTML:t._s(t.aspectRatingDescription(t.placeInfo,!0))}})])]),a("v-list",[a("v-divider"),a("v-list-item",{attrs:{href:"https://www.google.com.tw/maps/search/"+t.placeInfo.name+" "+t.placeInfo.formatted_address,target:"_blank"}},[a("v-list-item-icon",[a("v-icon",{attrs:{color:"primary"}},[t._v("mdi-map")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" 在 Google Map 中開啟 ")])],1)],1),a("v-divider"),a("v-list-item",[a("v-list-item-icon",[a("v-icon",{attrs:{color:"primary"}},[t._v("mdi-map-marker")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(t.placeInfo.formatted_address)+" ")])],1)],1),a("v-divider"),a("v-list-item",[a("v-list-item-icon",[a("v-icon",{attrs:{color:"primary"}},[t._v("mdi-pencil")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" 提出修改建議 ")])],1)],1),a("v-divider")],1),a("v-container",[a("h3",{staticClass:"mt-3 mb-2"},[t._v("評論摘要")]),a("v-layout",{attrs:{wrap:""}},t._l(t.aspectRatingsList.filter((function(e){return t.placeInfo[e.key+"_rating"]})),(function(e){return a("v-flex",{key:e.key,staticStyle:{"text-align":"center"}},[a("div",{staticStyle:{"font-size":"15px"}},[t._v(" "+t._s(e.text)+" ")]),a("div",{staticClass:"yellow--text text--darken-4",staticStyle:{"font-size":"24px","line-height":"30px"}},[t._v(" "+t._s(t.placeInfo[e.key+"_rating"].toFixed(1))+" ")]),a("div",{staticClass:"grey--text",staticStyle:{"font-size":"14px"}},[t._v(" ("+t._s(t.placeInfo[e.key+"_count"])+") ")])])})),1)],1),a("v-container",{attrs:{"mb-3":""}},[a("v-card",[a("v-card-title",[t._v("您覺得這些資訊有用嗎？")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""}},[a("v-icon",{staticClass:"mr-1"},[t._v("mdi-emoticon-sad-outline")]),t._v("沒有用 ")],1),a("v-btn",{attrs:{outlined:""}},[a("v-icon",{staticClass:"mr-1"},[t._v("mdi-emoticon-happy-outline")]),t._v("有幫助 ")],1)],1)],1)],1),a("v-divider"),a("v-container",{staticStyle:{display:"none"}},[a("h3",{staticClass:"mt-3 mb-2"},[t._v("評論摘要")])])],1):t._e()],1)],1)],1)},at=[],nt={name:"Detail",data:function(){return{cid:"",placeInfo:{}}},components:{},computed:{SearchEngine:function(){return x},aspectRatingsDict:function(){return $},aspectRatingsList:function(){return P},aspectRatingDescription:function(){return I}},methods:{load:function(t){var e=this;_.a.get("".concat(window.APIBASE,"/detail/").concat(t)).then((function(t){n["a"].set(e,"placeInfo",t.data)}))},close:function(){C.$emit("search-clear"),this.SearchEngine.clear(),this.$router.push("/")}},mounted:function(){},created:function(){this.cid=this.$route.params.cid,this.load(this.cid)},beforeRouteEnter:function(t,e,a){a((function(e){e.cid!==t.params.cid&&(e.cid=t.params.cid,e.load(t.params.cid))}))},beforeRouteUpdate:function(t,e,a){console.log("beforeRouteUpdate!",t.params.cid),this.cid=t.params.cid,this.load(t.params.cid),a()}},rt=nt,it=(a("890d"),a("b0af")),ot=a("99d9"),st=a("8860"),lt=a("da13"),ct=a("5d23"),pt=a("34c3"),ut=a("2fa4"),dt=Object(v["a"])(rt,et,at,!1,null,"074011ba",null),ht=dt.exports;T()(dt,{VBtn:O["a"],VCard:it["a"],VCardActions:ot["a"],VCardTitle:ot["b"],VContainer:K["a"],VDivider:Z["a"],VFlex:G["a"],VIcon:R["a"],VLayout:X["a"],VList:st["a"],VListItem:lt["a"],VListItemContent:ct["a"],VListItemIcon:pt["a"],VListItemTitle:ct["b"],VRating:J["a"],VSpacer:ut["a"]}),n["a"].use(N["a"]);var ft=[{path:"/",name:"Home"},{path:"/search/:query",name:"Search",component:tt},{path:"/detail/:cid",name:"Detail",component:ht}],mt=new N["a"]({routes:ft}),vt=mt,gt=a("f309");n["a"].use(gt["a"]);var yt=new gt["a"]({});n["a"].config.productionTip=!1,window.APIBASE="https://smart-restaurant.duckdns.org",new n["a"]({router:vt,vuetify:yt,render:function(t){return t(F)}}).$mount("#app")},"7db8":function(t,e,a){"use strict";a("3882")},"890d":function(t,e,a){"use strict";a("bec9")},a3f6:function(t,e,a){"use strict";a("09f7")},bec9:function(t,e,a){}});
//# sourceMappingURL=app.589de336.js.map