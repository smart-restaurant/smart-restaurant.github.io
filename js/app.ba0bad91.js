(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1f63":function(t,e,a){},"363d":function(t,e,a){},"3cde":function(t,e,a){"use strict";a("1f63")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("div",{staticClass:"map"},[a("map-loader",{attrs:{markers:t.markers,"map-config":t.mapConfig,apiKey:""}}),a("v-btn",{staticStyle:{bottom:"120px",right:"10px"},attrs:{color:"white",elevation:"2",fab:"",absolute:"",small:""},on:{click:t.searchNearbyGPS}},[a("v-icon",{attrs:{color:"grey darken-3"}},[t._v("mdi-crosshairs-gps")])],1)],1),a("div",{staticClass:"map-search"},[a("v-text-field",{attrs:{placeholder:"搜尋",solo:"","append-icon":"mdi-magnify",clearable:"","hide-details":""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchText(e)},"click:append":t.searchText},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),a("div",{staticClass:"mt-3"},[a("v-btn",{staticClass:"mr-2",attrs:{small:"",rounded:""},on:{click:function(e){return t.$router.push("/search/附近的餐廳")}}},[t._v(" 附近的餐廳 ")]),a("v-btn",{staticClass:"mr-2",attrs:{small:"",rounded:""},on:{click:function(e){return t.$router.push("/search/氣氛好的餐廳")}}},[t._v(" 氣氛好 ")]),a("v-btn",{staticClass:"mr-2",attrs:{small:"",rounded:""},on:{click:function(e){return t.$router.push("/search/食物好的餐廳")}}},[t._v(" 食物好 ")])],1)],1),a("keep-alive",[a("router-view")],1)],1)],1)},i=[],s=(a("d81d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"map"}}),this.google&&this.map?[a("map-provider",{attrs:{google:t.google,map:t.map}},[t._t("default")],2)]:t._e()],2)}),o=[],c=(a("a434"),a("2909")),l=a("b85c"),u=a("f464"),p=a.n(u),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._t("default")],2)},h=[],f={props:{google:Object,map:Object},provide:function(){return{google:this.google,map:this.map}}},g=f,v=a("2877"),m=Object(v["a"])(g,d,h,!1,null,null,null),y=m.exports,k=(a("99af"),a("bc3a")),_=a.n(k),x=new n["a"]({data:function(){return{resultList:[],keyword:"",lng:null,lat:null,price_level:0,rating:0,startFrom:0,itemsPerPage:10,mapLng:null,mapLat:null}},methods:{search:function(t){var e=this,a="".concat(window.APIBASE,"/search?keyword=").concat(t.keyword);"price_level"in t&&(a+="&price_level=".concat(t["price_level"])),"rating"in t&&(a+="&rating=".concat(t["rating"])),"sort_by"in t&&(a+="&sort_by=".concat(t["sort_by"])),_.a.get(a).then((function(a){var r=a.data;n["a"].set(e,"resultList",r.data),e.keyword=t.keyword,e.lat=t.lat||null,e.lng=t.lng||null,e.price_level=t.price_level||0,e.rating=t.rating||0,e.startFrom=r.start_from,e.itemsPerPage=r.items_per_page}))},searchNearby:function(t){var e=this,a="".concat(window.APIBASE,"/search?lat=").concat(t.lat,"&lng=").concat(t.lng);"price_level"in t&&(a+="&price_level=".concat(t["price_level"])),"rating"in t&&(a+="&rating=".concat(t["rating"])),"sort_by"in t&&(a+="&sort_by=".concat(t["sort_by"])),_.a.get(a).then((function(a){var r=a.data;n["a"].set(e,"resultList",r.data),e.keyword="",e.lat=t.lat||null,e.lng=t.lng||null,e.price_level=t.price_level||0,e.rating=t.rating||0,e.startFrom=r.start_from,e.itemsPerPage=r.items_per_page}))},nextPage:function(){var t=this,e="".concat(window.APIBASE,"/search?")+"start_from=".concat(this.startFrom+this.itemsPerPage)+"&items_per_page=".concat(this.itemsPerPage);this.keyword&&(e+="&keyword=".concat(this.keyword)),this.lat&&this.lng&&(e+="&lat=".concat(this.lat),e+="&lng=".concat(this.lng)),this.price_level&&(e+="&price_level=".concat(this.price_level)),this.rating&&(e+="&rating=".concat(this.rating)),_.a.get(e).then((function(e){var a=e.data;t.resultList.concat(a.data),t.startFrom=a.start_from,t.itemsPerPage=a.items_per_page}))},clear:function(){n["a"].set(this,"resultList",[])}}}),b={props:{mapConfig:Object,apiKey:String,markers:Array},components:{MapProvider:y},watch:{markers:function(t){this.removeAllMarkers();var e,a=Object(l["a"])(t);try{for(a.s();!(e=a.n()).done;){var n=e.value;this.addMarker(n)}}catch(o){a.e(o)}finally{a.f()}if(t.length>0){var r=t.map((function(t){return t.position.lat})),i=t.map((function(t){return t.position.lng})),s={south:Math.min.apply(Math,Object(c["a"])(r)),west:Math.min.apply(Math,Object(c["a"])(i)),north:Math.max.apply(Math,Object(c["a"])(r)),east:Math.max.apply(Math,Object(c["a"])(i))};this.fitBounds(s)}}},data:function(){return{google:null,map:null,markersInst:[]}},mounted:function(){var t=this;p()({apiKey:this.apiKey}).then((function(e){t.google=e,t.initializeMap();var a,n=Object(l["a"])(t.markers);try{for(n.s();!(a=n.n()).done;){var r=a.value;t.addMarker(r)}}catch(i){n.e(i)}finally{n.f()}}))},methods:{initializeMap:function(){var t=this,e=this.$el.querySelector("#map"),a=this.google.maps.Map;this.map=new a(e,this.mapConfig),this.map.addListener("zoom_changed",(function(){t.$emit("zoom-changed",t.map.getZoom())}));var n=this.map.getCenter();x.mapLat=n.lat(),x.mapLng=n.lng(),this.map.addListener("mouseup",(function(){var e=t.map.getCenter();t.$emit("center-changed",{lat:e.lat(),lng:e.lng()}),x.mapLat=e.lat(),x.mapLng=e.lng()}))},removeAllMarkers:function(){var t,e=Object(l["a"])(this.markersInst);try{for(e.s();!(t=e.n()).done;){var a=t.value;a.setMap(null)}}catch(n){e.e(n)}finally{e.f()}this.markersInst.splice(0)},addMarker:function(t){var e=this,a=this.google.maps.Marker,n=new a({position:t.position,map:this.map,title:"Child marker!!",id:t.id});n.addListener("click",(function(){e.$emit("marker-click",t.id),n.setAnimation(e.google.maps.Animation.BOUNCE),n.setAnimation(null),e.$router.push("/detail/".concat(t.id))})),this.markersInst.push(n)},setCenter:function(t){this.map.setCenter(t),x.mapLat=t.lat,x.mapLng=t.lng},fitBounds:function(t){this.map.fitBounds(t,{left:this.$vuetify.breakpoint.mobile?20:450,bottom:20,right:20,top:20})},setZoom:function(t){this.map.setZoom(t)}}},w=b,S=(a("9d8a"),Object(v["a"])(w,s,o,!1,null,"02a70610",null)),L=S.exports,$={name:"App",components:{MapLoader:L},data:function(){return{keyword:"",mapConfig:{zoom:12,center:{lat:24.79612,lng:120.993},fullscreenControl:!1},adjustLat:0,adjustLng:.008755}},computed:{SearchEngine:function(){return x},markers:function(){var t=this;return 0===this.SearchEngine.resultList.length?[]:this.SearchEngine.resultList.map((function(e){return{position:{lat:parseFloat(e.lat)+t.adjustLat,lng:parseFloat(e.lng)+t.adjustLng},id:e.cid}}))}},methods:{searchText:function(){console.log("App:",this.keyword),this.$router.push("/search/".concat(this.keyword))},searchNearbyGPS:function(){console.log("search nearby gps"),this.$router.push("/search/我附近的餐廳")}},mounted:function(){}},P=$,C=(a("e065"),a("6544")),R=a.n(C),E=a("7496"),I=a("8336"),O=a("132d"),j=a("f6c4"),V=a("8654"),M=Object(v["a"])(P,r,i,!1,null,"bdddaca8",null),B=M.exports;R()(M,{VApp:E["a"],VBtn:I["a"],VIcon:O["a"],VMain:j["a"],VTextField:V["a"]});var T=a("8c4f"),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"panel search"},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"","pb-3":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"","mb-3":""}},[a("v-text-field",{attrs:{placeholder:"搜尋",solo:"",clearable:"","hide-details":"","prepend-icon":"mdi-arrow-left","append-icon":"mdi-magnify"},on:{"click:prepend":t.close,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchText(e)},"click:append":t.searchText},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-layout",[a("v-flex",{attrs:{xs4:"","pr-1":""}},[a("v-select",{attrs:{items:t.ratingItems,dense:"",outlined:"","hide-details":""},on:{change:function(e){return t.search()}},model:{value:t.filterRating,callback:function(e){t.filterRating=e},expression:"filterRating"}})],1),a("v-flex",{attrs:{xs4:"","pl-1":"","pr-1":""}},[a("v-select",{attrs:{items:t.priceLevelItems,dense:"",outlined:"","hide-details":""},on:{change:function(e){return t.search()}},model:{value:t.filterPriceLevel,callback:function(e){t.filterPriceLevel=e},expression:"filterPriceLevel"}})],1),a("v-flex",{attrs:{xs4:"","pl-1":""}},[a("v-select",{attrs:{items:t.sortByList,dense:"",outlined:"","hide-details":""},on:{change:function(e){return t.search()}},model:{value:t.filterSortBy,callback:function(e){t.filterSortBy=e},expression:"filterSortBy"}})],1)],1)],1)],1)],1),a("v-flex",{attrs:{xs12:""}},[a("v-layout",{attrs:{wrap:""}},[t._l(t.SearchEngine.resultList,(function(e,n){return[a("v-flex",{key:n,staticStyle:{cursor:"pointer"},attrs:{xs12:""},on:{click:function(a){return t.$router.push("/detail/"+e.cid)}}},[a("v-layout",[a("v-flex",{staticClass:"search-item-img",staticStyle:{"background-image":"url(https://lh5.googleusercontent.com/p/AF1QipNUa5VRyTSXLuyL0eTX_4Et2ixZp_Gs0uaf3Wf3=w122-h92-k-no)"},attrs:{xs4:"","mr-3":""}}),a("v-flex",{staticClass:"search-item-content",attrs:{xs8:"","pt-3":""}},[a("h3",{staticStyle:{height:"28px",overflow:"hidden"}},[t._v(" "+t._s(e.name)+" ")]),a("div",{staticStyle:{height:"24px",overflow:"hidden"}},[a("span",{staticClass:"yellow--text text--darken-4"},[t._v(" "+t._s(e.rating)+" ")]),a("v-rating",{staticStyle:{display:"inline",position:"relative",top:"-2px"},attrs:{dense:"","empty-icon":"mdi-star-outline","full-icon":"mdi-star","half-icon":"mdi-star-half-full",hover:"",length:"5",value:e.rating,readonly:"",size:"18","background-color":"yellow darken-4",color:"yellow darken-4","half-increments":""}}),a("span",{staticClass:"grey--text text--darken-1"},[t._v(" ("+t._s(e.user_ratings_total)+") ")]),e.price_level?a("span",{staticClass:"grey--text text--darken-1"},[t._v(" · "+t._s("$".repeat(e.price_level))+" ")]):t._e()],1),a("div",{staticClass:"grey--text text--darken-1",staticStyle:{height:"24px",overflow:"hidden"}},[t._v(" "+t._s(e.formatted_address)+" ")]),a("div",{staticStyle:{height:"24px",overflow:"hidden"}},[t._v(" "+t._s(t.aspectRatingDescription(e))+" ")])])],1),a("v-divider")],1)]}))],2)],1)],1)],1)},D=[],F=(a("4de4"),a("ac1f"),a("841c"),{mounted:function(){var t=this,e=this.$el;e.addEventListener("scroll",(function(){t.scrollTop=e.scrollTop}))},activated:function(){if(this.scrollTop){var t=this.$el;t.scrollTop=this.scrollTop}},deactivated:function(){}}),N={name:"Search",mixins:[F],data:function(){return{keyword:"",ratingItems:[{text:"評價",value:0},{text:"1⭐+",value:1},{text:"2⭐+",value:2},{text:"3⭐+",value:3},{text:"4⭐+",value:4},{text:"4.5⭐+",value:4.5}],filterRating:0,priceLevelItems:[{text:"價格",value:0},{text:"$+",value:1},{text:"$$+",value:2},{text:"$$$+",value:3},{text:"$$$$+",value:4}],filterPriceLevel:0,aspectRatingsList:[{text:"食物",key:"food"},{text:"服務",key:"service"},{text:"氣氛",key:"atmosphere"},{text:"清潔",key:"cleanliness"},{text:"價值",key:"value"}],filterSortBy:"distance",sortByList:[{text:"距離",value:"distance"},{text:"評價",value:"rating"},{text:"食物評價",value:"food_rating"},{text:"服務評價",value:"service_rating"},{text:"氣氛評價",value:"atmosphere_rating"},{text:"清潔評價",value:"cleanliness_rating"},{text:"價值評價",value:"value_rating"}]}},components:{},computed:{SearchEngine:function(){return x},aspectRatingsDict:function(){var t={};return this.aspectRatingsList.map((function(e){return t[e.key]=e.text})),t}},methods:{close:function(){this.keyword="",this.filterRating=0,this.filterPriceLevel=0,this.filterSortBy="distance",this.$router.push("/")},search:function(t){t||(t=this.keyword),this.SearchEngine.clear(),console.log("perform searching.",t),"附近的餐廳"!==t?"我附近的餐廳"!==t?"氣氛好的餐廳"===t?(this.filterSortBy="atmosphere_rating",this.searchNearby(this.SearchEngine.mapLat,this.SearchEngine.mapLng)):"食物好的餐廳"===t?(this.filterSortBy="food_rating",this.searchNearby(this.SearchEngine.mapLat,this.SearchEngine.mapLng)):this.SearchEngine.search({keyword:t,rating:this.filterRating,price_level:this.filterPriceLevel,sort_by:this.filterSortBy}):this.searchNearbyGPS():this.searchNearby(this.SearchEngine.mapLat,this.SearchEngine.mapLng)},searchNearbyGPS:function(){var t=this;console.log("gps"),navigator.geolocation.getCurrentPosition((function(e){console.log(e);var a=e.coords.latitude,n=e.coords.longitude;t.searchNearby(a,n)}),(function(t){console.error(t),alert("請開啟您的定位功能！")}))},searchNearby:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n={keyword:a,lng:e,lat:t,rating:this.filterRating,price_level:this.filterPriceLevel,sort_by:this.filterSortBy};console.log(n),this.SearchEngine.searchNearby(n)},searchText:function(){console.log("searchText",this.keyword),this.$router.push("/search/".concat(this.keyword)),this.search(this.keyword)},aspectRatingDescription:function(t){function e(t){return t>=4.5?"✔✔":t<4.5&&t>=3.5?"✔":t<3.5&&t>=2.5?"⚠️":t<2.5&&t>=1.5?"❌":t<1.5?"❌❌":void 0}var a=this.aspectRatingsList.map((function(e){return{key:e.key,rating:t["".concat(e.key,"_rating")],count:t["".concat(e.key,"_count")]}}));return a=a.filter((function(t){return t.count>=20})),a.sort((function(t,e){return e.rating-t.rating})),0===a.length?"":1===a.length?this.aspectRatingsDict[a[0].key]+e(a[0].rating):this.aspectRatingsDict[a[0].key]+e(a[0].rating)+" · "+this.aspectRatingsDict[a[a.length-1].key]+e(a[a.length-1].rating)}},mounted:function(){this.keyword=this.$route.params.query,this.search(this.keyword)},created:function(){this.keyword=this.$route.params.query},beforeRouteEnter:function(t,e,a){a((function(e){e.keyword!==t.params.query&&(e.keyword=t.params.query,e.search(t.params.query))}))},beforeRouteUpdate:function(t,e,a){console.log("beforeRouteUpdate!",t.params.query),this.search(t.params.query),a()}},z=N,q=(a("3cde"),a("a523")),U=a("ce7e"),G=a("0e8f"),Z=a("a722"),K=a("1d4d"),X=a("b974"),J=Object(v["a"])(z,A,D,!1,null,"4f53353e",null),Q=J.exports;R()(J,{VContainer:q["a"],VDivider:U["a"],VFlex:G["a"],VLayout:Z["a"],VRating:K["a"],VSelect:X["a"],VTextField:V["a"]});var W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"panel detail",attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"","pb-3":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"detail-cover",staticStyle:{"background-image":"url(https://lh5.googleusercontent.com/p/AF1QipNUa5VRyTSXLuyL0eTX_4Et2ixZp_Gs0uaf3Wf3=w122-h92-k-no)"},attrs:{xs12:""}},[a("v-container",[a("v-btn",{staticStyle:{"background-color":"#ffffffdd"},attrs:{depressed:""},on:{click:function(e){return t.$router.back()}}},[a("v-icon",[t._v("mdi-arrow-left")]),t._v(" 返回上一頁 ")],1),a("v-btn",{staticStyle:{"background-color":"#ffffffdd",float:"right"},attrs:{depressed:""},on:{click:function(e){t.$router.push("/"),t.SearchEngine.clear()}}},[a("v-icon",[t._v("mdi-close")]),t._v(" 關閉 ")],1)],1)],1),t.placeInfo?a("v-flex",{attrs:{xs12:""}},[a("v-container",[a("h2",[t._v(t._s(t.placeInfo.name))]),a("p",[a("span",[a("span",{staticClass:"yellow--text text--darken-4"},[t._v(" "+t._s(t.placeInfo.rating)+" ")]),a("v-rating",{staticStyle:{display:"inline",position:"relative",top:"-2px"},attrs:{dense:"","empty-icon":"mdi-star-outline","full-icon":"mdi-star","half-icon":"mdi-star-half-full",hover:"",length:"5",value:t.placeInfo.rating,readonly:"",size:"18","background-color":"yellow darken-4",color:"yellow darken-4","half-increments":""}}),a("span",{staticClass:"grey--text text--darken-1"},[t._v(" ("+t._s(t.placeInfo.user_ratings_total)+") ")]),t.placeInfo.price_level?a("span",{staticClass:"grey--text text--darken-1"},[t._v(" · "+t._s("$".repeat(t.placeInfo.price_level))+" ")]):t._e()],1),a("br"),a("span",[t._v(" "+t._s(t.aspectRatingDescription(t.placeInfo))+" ")])])]),a("v-divider"),a("v-list",[a("v-list-item",[a("v-list-item-icon",[a("v-icon",[t._v("mdi-map-marker")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" "+t._s(t.placeInfo.formatted_address)+" ")])],1)],1)],1),a("v-divider"),a("v-container",[a("h3",{staticClass:"mt-3 mb-2"},[t._v("各項度分數")]),a("v-layout",{attrs:{wrap:""}},t._l(t.aspectRatingsList.filter((function(e){return t.placeInfo[e.key+"_rating"]})),(function(e){return a("v-flex",{key:e.key,staticStyle:{"text-align":"center"}},[a("div",{staticStyle:{"font-size":"15px"}},[t._v(" "+t._s(e.text)+" ")]),a("div",{staticStyle:{"font-size":"24px","line-height":"30px"}},[t._v(" "+t._s(t.placeInfo[e.key+"_rating"].toFixed(1))+" ")]),a("div",{staticClass:"grey--text",staticStyle:{"font-size":"14px"}},[t._v(" ("+t._s(t.placeInfo[e.key+"_count"])+") ")])])})),1)],1)],1):t._e()],1)],1)],1)},H=[],Y={name:"Detail",data:function(){return{cid:"",placeInfo:{},aspectRatingsList:[{text:"食物",key:"food"},{text:"服務",key:"service"},{text:"氣氛",key:"atmosphere"},{text:"清潔",key:"cleanliness"},{text:"價值",key:"value"}]}},components:{},computed:{SearchEngine:function(){return x},aspectRatingsDict:function(){var t={};return this.aspectRatingsList.map((function(e){return t[e.key]=e.text})),t}},methods:{load:function(t){var e=this;_.a.get("".concat(window.APIBASE,"/detail/").concat(t)).then((function(t){console.log(t.data),n["a"].set(e,"placeInfo",t.data)}))},aspectRatingDescription:function(t){function e(t){return t>=4.5?"✔✔":t<4.5&&t>=3.5?"✔":t<3.5&&t>=2.5?"⚠️":t<2.5&&t>=1.5?"❌":t<1.5?"❌❌":void 0}var a=this.aspectRatingsList.map((function(e){return{key:e.key,rating:t["".concat(e.key,"_rating")],count:t["".concat(e.key,"_count")]}}));return a=a.filter((function(t){return t.count>=20})),a.sort((function(t,e){return e.rating-t.rating})),0===a.length?"":1===a.length?this.aspectRatingsDict[a[0].key]+e(a[0].rating):this.aspectRatingsDict[a[0].key]+e(a[0].rating)+" · "+this.aspectRatingsDict[a[a.length-1].key]+e(a[a.length-1].rating)}},mounted:function(){},created:function(){this.cid=this.$route.params.cid,this.load(this.cid)},beforeRouteEnter:function(t,e,a){a((function(e){e.cid!==t.params.cid&&(e.cid=t.params.cid,e.load(t.params.cid))}))},beforeRouteUpdate:function(t,e,a){console.log("beforeRouteUpdate!",t.params.cid),this.cid=t.params.cid,this.load(t.params.cid),a()}},tt=Y,et=(a("9725"),a("8860")),at=a("da13"),nt=a("5d23"),rt=a("34c3"),it=Object(v["a"])(tt,W,H,!1,null,"04cee86c",null),st=it.exports;R()(it,{VBtn:I["a"],VContainer:q["a"],VDivider:U["a"],VFlex:G["a"],VIcon:O["a"],VLayout:Z["a"],VList:et["a"],VListItem:at["a"],VListItemContent:nt["a"],VListItemIcon:rt["a"],VListItemTitle:nt["b"],VRating:K["a"]}),n["a"].use(T["a"]);var ot=[{path:"/",name:"Home"},{path:"/search/:query",name:"Search",component:Q},{path:"/detail/:cid",name:"Detail",component:st}],ct=new T["a"]({routes:ot}),lt=ct,ut=a("f309");n["a"].use(ut["a"]);var pt=new ut["a"]({});n["a"].config.productionTip=!1,window.APIBASE="http://localhost:5000",new n["a"]({router:lt,vuetify:pt,render:function(t){return t(B)}}).$mount("#app")},9725:function(t,e,a){"use strict";a("bf65")},"9d8a":function(t,e,a){"use strict";a("363d")},add8:function(t,e,a){},bf65:function(t,e,a){},e065:function(t,e,a){"use strict";a("add8")}});
//# sourceMappingURL=app.ba0bad91.js.map