webpackJsonp([1],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("//Fk"),o=n.n(r);window.elm=function(t){var e=document.createElement("div");return e.innerHTML=t,e.firstElementChild},window.include=function(t){return SystemJS.import(t)},window.CallbackFunction=function(t){this._func=t},window.cb=function(t){return new CallbackFunction(t)},window.Html=function(t){this._html=t},window.html=function(t){return new Html(t)},window.Show=function(t){this._el=t},window.show=function(t){return new Show(t)},window.Nothing={},window.NOOP={},window.includeCSS=function(t){var e=document.createElement("link"),n=new o.a(function(t){e.onload=t});return n.type="includeCSS",e.rel="stylesheet",e.href=t,document.body.appendChild(e),n},window.findLib=function(t){return fetch("https://api.cdnjs.com/libraries?search="+t).then(function(t){return t.json()}).then(function(t){return t.results})},window.loadFirst=function(t){return findLib(t).then(function(t){return t[0].latest}).then(function(t){return SystemJS.import(t)})};var i=n("7+uW"),a=n("BO1k"),s=n.n(a),c=n("Xxa5"),u=n.n(c),l=n("mvHQ"),d=n.n(l),h=n("exGp"),f=n.n(h),p=n("Gu7T"),v=n.n(p),m={name:"Input",props:["code","onChange"],updated:function(){this._editor.getValue()!==this.$props.code&&this._editor.setValue(this.$props.code)},methods:{setAutoHeight:function(){var t=this._editor.getSession().getScreenLength();this.$el.style.minHeight=14*Math.min(8,t)+"px",this._editor.resize()}},mounted:function(){var t=this,e=ace.edit(this.$el);this._editor=e,e.session.setMode("ace/mode/javascript"),e.setTheme("ace/theme/monokai"),e.setAutoScrollEditorIntoView(!0),e.setShowPrintMargin(!1),e.getSession().setUseWrapMode(!0),e.getSession().on("change",function(){t.$props.onChange(e.getValue()),t.setAutoHeight()}),this.setAutoHeight()},destroyed:function(){this._editor.destroy()}},w={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"input"},[this._v(this._s(this.code))])},staticRenderFns:[]};var g=n("VU/8")(m,w,!1,function(t){n("h5jq")},"data-v-5ba50e50",null).exports,_=window.returnFormatters=[{handle:{},filter:function(t){return t instanceof Error},formatter:function(t,e){return t.style.whiteSpace="pre-wrap",String(e)+"\n"+e.stack}},{handle:{},filter:function(t){return"string"==typeof t},formatter:function(t,e){return t.appendChild(document.createTextNode(e)),Nothing}},{handle:{},filter:function(t){return t instanceof Html},formatter:function(t,e){return t.innerHTML=e._html,Nothing}},{handle:{},filter:function(t){return t instanceof Show},formatter:function(t,e){if(e._el instanceof Element)return t.appendChild(e._el),Nothing;throw Error("Not an element")}},{handle:{},filter:function(t){return t instanceof CallbackFunction},formatter:function(t,e){try{return e._func(t)===NOOP?NOOP:Nothing}catch(t){return t}}},{handle:{},filter:function(){return!0},formatter:function(t,e){return String(e)}}];window.registerReturnFormatter=function(t,e){return _.unshift({handle:{},filter:t,formatter:e}),"OK"};var y={name:"Output",props:["runState","result"],beforeUpdate:function(){this.$refs.resultContainer.innerHTML=""},updated:function(){!function t(e,n){if(n!==Nothing)for(var r=0;r<_.length;r++)if(_[r].filter(n)){for(var o=_[r].formatter(e,n);o!==Nothing;)o=t(e,o);return o}}(this.$refs.resultContainer,this.$props.result)}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"output"},[e("div",{ref:"resultContainer",staticClass:"result_container"}),this._v("\n  "+this._s((this.result,""))+"\n")])},staticRenderFns:[]};var C={components:{Input:g,Output:n("VU/8")(y,k,!1,function(t){n("eVGn")},"data-v-9b6c009a",null).exports},name:"Cell",props:["code","onRemove","onMerge","onChange","onAddNewCellBelow","isFirst"],data:function(){return{runState:"idle",result:null}},methods:{run:function(){var t=this;this.$data.runState="running";var e=null;try{e=unstrictEval(this.$props.code)}catch(t){e=t}return e instanceof Error?this.$data.runState="error":e instanceof o.a?(window.$$$=null,e.then(function(e){window.$$$=e,t.$data.runState="done"}).catch(function(e){window.$$$=e,t.$data.runState="error"})):this.$data.runState="done",this.$data.result=e,window.$$=e,e},handleMouseDown:function(t){this._dragStartClientY=t.clientY,this._startHeight=parseInt(this.$refs.inputComponent.$el.style.height||this.$refs.inputComponent.$el.style.minHeight),window.addEventListener("mouseup",this.removeListeners,!1),window.addEventListener("mousemove",this.handleMouseMove,!1)},handleMouseMove:function(t){var e=t.clientY-this._dragStartClientY;this.$refs.inputComponent.$el.style.height=this._startHeight+e+"px",this.$refs.inputComponent.setAutoHeight()},removeListeners:function(){window.removeEventListener("mousemove",this.handleMouseMove),window.removeEventListener("mouseup",this.removeListeners)}},beforeDestroy:function(){this.removeListeners()}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["cell",t.runState]},[n("div",{staticClass:"cell--header"},[n("div",{staticClass:"cell--header--left"},[n("i",{staticClass:"material-icons",attrs:{title:"Play"},on:{click:t.run}},[t._v("play_arrow")])]),t._v(" "),n("div",{staticClass:"cell--header-right"},[t.isFirst?n("i",{staticClass:"material-icons disabled"},[t._v("call_merge")]):n("i",{staticClass:"material-icons",attrs:{title:"Merge with above"},on:{click:t.onMerge}},[t._v("call_merge")]),t._v(" "),n("i",{staticClass:"material-icons",attrs:{title:"Remove"},on:{click:t.onRemove}},[t._v("clear")])])]),t._v(" "),n("Input",{ref:"inputComponent",attrs:{code:t.code,onChange:t.onChange}}),t._v(" "),n("Output",{attrs:{runState:t.runState,result:t.result}}),t._v(" "),n("div",{staticClass:"cell--footer"},[n("i",{staticClass:"material-icons",on:{mousedown:t.handleMouseDown}},[t._v("keyboard_arrow_down")]),t._v(" "),n("div",{staticClass:"cell--add-below",attrs:{title:"Insert new cell"},on:{click:function(){return t.onAddNewCellBelow()}}})])],1)},staticRenderFns:[]};var b={components:{Cell:n("VU/8")(C,$,!1,function(t){n("nOMt")},"data-v-cf6c4bba",null).exports},props:["load","autoplay"],name:"Notebook",methods:{onRemove:function(t){var e=this.$data.code.findIndex(function(e){return e.key===t});this.$data.code.splice(e,1)},onMerge:function(t){var e=this.$data.code.findIndex(function(e){return e.key===t});this.$data.code[e-1].value+="\n"+this.$data.code[e].value,this.onRemove(t)},onAddNewCellBelow:function(t){var e=Math.max.apply(Math,v()(this.$data.code.map(function(t){return t.key}))),n=this.$data.code.findIndex(function(e){return e.key===t});this.$data.code.splice(n+1,0,{key:e+1,value:""})},onChange:function(t,e){this.$data.code.find(function(e){return e.key===t}).value=e},save:function(){var t=f()(u.a.mark(function t(){var e,n,r,o,i,a=this,s=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.$data.saving=!0,e="https://us-central1-jsmachine-us.cloudfunctions.net/save",n=d()(this.$data.code.map(function(t){return t.value})),r=null,t.prev=4,t.next=7,fetch(e,{body:n,method:"POST"});case 7:r=t.sent,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(4),console.log(t.t0);case 13:return t.next=15,r.json();case 15:(o=t.sent).error&&14===o.error.code&&!s?setTimeout(function(){return a.save(!0)},500):(this.$data.key=o.key,window.history.pushState(o.key,o.key,"?key="+o.key),(i=localStorage.getItem("saves")?JSON.parse(localStorage.getItem("saves")):[]).push(o.key),localStorage.setItem("saves",d()(i)),this.$data.saving=!1);case 17:case"end":return t.stop()}},t,this,[[4,10]])}));return function(){return t.apply(this,arguments)}}(),playNotebook:function(){var t=f()(u.a.mark(function t(){var e,n,r,o,i,a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=!0,n=!1,r=void 0,t.prev=3,o=s()(this.$refs.cells.$children);case 5:if(e=(i=o.next()).done){t.next=12;break}return a=i.value,t.next=9,a.run();case 9:e=!0,t.next=5;break;case 12:t.next=18;break;case 14:t.prev=14,t.t0=t.catch(3),n=!0,r=t.t0;case 18:t.prev=18,t.prev=19,!e&&o.return&&o.return();case 21:if(t.prev=21,!n){t.next=24;break}throw r;case 24:return t.finish(21);case 25:return t.finish(18);case 26:case"end":return t.stop()}},t,this,[[3,14,18,26],[19,,21,25]])}));return function(){return t.apply(this,arguments)}}()},data:function(){return{code:[],key:null,saving:!1,loading:!0}},created:function(){var t=this;return f()(u.a.mark(function e(){var n,r,o,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.$props.load);case 2:return r=e.sent,e.next=5,r.text();case 5:o=e.sent,i=void 0;try{i=JSON.parse(o)}catch(t){i=o.split("\n\n")}(n=t.$data.code).push.apply(n,v()(i.map(function(t,e){return{value:t,key:e}}))),t.$data.loading=!1,t.$props.autoplay&&setTimeout(function(){return t.playNotebook()},2e3);case 11:case"end":return e.stop()}},e,t)}))()}},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notebook"},[n("div",{staticClass:"notebook--header"},[t._m(0),t._v(" "),n("div",{staticClass:"notebook--header--right"},[t.saving?n("span",{staticClass:"saving"},[t._v("Saving"),n("img",{staticClass:"spinner",attrs:{src:"/static/spinner.gif"}})]):t._e(),t._v(" "),t.loading?n("span",{staticClass:"saving"},[t._v("Loading"),n("img",{staticClass:"spinner",attrs:{src:"/static/spinner.gif"}})]):t._e(),t._v(" "),t.key?n("a",{attrs:{href:"/?key="+t.key}},[t._v(t._s(t.key))]):t._e(),t._v(" "),n("i",{staticClass:"material-icons",attrs:{title:"Play notebook"},on:{click:t.playNotebook}},[t._v("play_arrow")]),t._v(" "),n("i",{staticClass:"material-icons",attrs:{title:"Save notebook"},on:{click:t.save}},[t._v("cloud_upload")])])]),t._v(" "),n("div",{staticClass:"notebook--contents"},[n("transition-group",{ref:"cells",attrs:{name:"list-complete",tag:"div"}},t._l(t.code,function(e,r){return n("Cell",{key:e.key,staticClass:"list-complete-item",attrs:{code:e.value,onRemove:function(){return t.onRemove(e.key)},onMerge:function(){return t.onMerge(e.key)},onChange:function(n){return t.onChange(e.key,n)},onAddNewCellBelow:function(){return t.onAddNewCellBelow(e.key)},isFirst:0===r}})}))],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notebook--header--left"},[this._v("\n      Issues / feedback? "),e("a",{attrs:{href:"https://github.com/tommos0/jsmachine"}},[this._v("Go to GitHub!")])])}]};var x={components:{Notebook:n("VU/8")(b,S,!1,function(t){n("m1uO")},"data-v-fb24e08a",null).exports},name:"App",data:function(){var t=function(t){t=t.split("+").join(" ");for(var e={},n=null,r=/[?&]?([^=]+)=([^&]*)/g;n=r.exec(t);)e[decodeURIComponent(n[1])]=decodeURIComponent(n[2]);return e}(window.location.search),e="autoplay"in t&&[1,"1",!0,"true"].includes(t.autoplay),n="/static/default.js";return"key"in t?n="https://us-central1-jsmachine-us.cloudfunctions.net/get?key="+t.key:e=!0,{url:n,autoplay:e}}},N={render:function(){var t=this.$createElement;return(this._self._c||t)("Notebook",{attrs:{load:this.url,autoplay:this.autoplay}})},staticRenderFns:[]};var M=n("VU/8")(x,N,!1,function(t){n("nShR")},null,null).exports;i.a.config.productionTip=!1,window.Vue=i.a,new i.a({el:"#app",components:{App:M},template:"<App/>"})},eVGn:function(t,e){},h5jq:function(t,e){},m1uO:function(t,e){},nOMt:function(t,e){},nShR:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.67c0c91f8c39f27d1823.js.map