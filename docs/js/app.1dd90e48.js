(function(t){function o(o){for(var e,n,r=o[0],l=o[1],c=o[2],d=0,p=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&p.push(s[n][0]),s[n]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(t[e]=l[e]);h&&h(o);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,o=0;o<i.length;o++){for(var a=i[o],e=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(e=!1)}e&&(i.splice(o--,1),t=n(n.s=a[0]))}return t}var e={},s={app:0},i=[];function n(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,o,a){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var e in t)n.d(a,e,function(o){return t[o]}.bind(null,e));return a},n.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="/Monty-Hall/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=o,r=r.slice();for(var c=0;c<r.length;c++)o(r[c]);var h=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,o,a){t.exports=a("56d7")},"199f":function(t,o,a){t.exports=a.p+"img/youlose.459a589e.png"},"45d3":function(t,o,a){t.exports=a.p+"img/door-selected.a927b667.png"},"515d":function(t,o,a){t.exports=a.p+"img/door-goat-selected.1fdd2718.png"},"56d7":function(t,o,a){"use strict";a.r(o);a("e260"),a("e6cf"),a("cca6"),a("a79d");var e=a("2b0e"),s=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("v-app",[a("v-app-bar",{staticClass:"headline",attrs:{app:"",color:"primary",dark:""}},[a("span",[t._v(" Monty Hall ")]),a("v-spacer"),a("v-btn",{staticStyle:{"margin-top":"-5px"},attrs:{fab:"",dark:"",small:"",color:"primary"},on:{click:function(o){t.showTutorial=!0}}},[a("v-icon",[t._v("mdi-help")])],1)],1),a("v-main",[a("mainDeck",{attrs:{showTutorial:t.showTutorial}})],1)],1)},i=[],n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-container",[e("v-row",{staticClass:"text-center"},[e("v-col",{attrs:{cols:"8"}},[e("v-container",[e("v-row",{staticClass:"text-center"},[e("v-col",{staticClass:"text-h6",attrs:{cols:"12"}},[t._v(" "+t._s(t.instruction)+" ")]),e("v-col",{attrs:{cols:"12"}},[e("v-window",{attrs:{reverse:""},model:{value:t.controls,callback:function(o){t.controls=o},expression:"controls"}},[e("v-window-item",[e("v-btn",{staticClass:"mx-3",attrs:{color:t.btnColors[0],width:"150px",disabled:"start"!=t.globalState&&!t.doors[0].selected},on:{click:function(o){return t.pickADoor(0)}}},[t._v("Door 1")]),e("v-btn",{staticClass:"mx-3",attrs:{color:t.btnColors[1],width:"150px",disabled:"start"!=t.globalState&&!t.doors[1].selected},on:{click:function(o){return t.pickADoor(1)}}},[t._v("Door 2")]),e("v-btn",{staticClass:"mx-3",attrs:{color:t.btnColors[2],width:"150px",disabled:"start"!=t.globalState&&!t.doors[2].selected},on:{click:function(o){return t.pickADoor(2)}}},[t._v("Door 3")])],1),e("v-window-item",[e("v-btn",{staticClass:"mx-3",attrs:{width:"200px",disabled:"confirm"!=t.globalState},on:{click:function(o){return t.confirmDoor(!0)}}},[t._v("Keep")]),e("v-btn",{staticClass:"mx-3",attrs:{width:"200px",dark:"",disabled:"confirm"!=t.globalState},on:{click:function(o){return t.confirmDoor(!1)}}},[t._v("Change")])],1)],1)],1),t._l(t.doors,(function(o,s){return e("v-col",{key:s,attrs:{cols:"4"}},[o.open||o.selected?t._e():e("v-img",{attrs:{src:a("b2d7")}}),!o.open&&o.selected?e("v-img",{attrs:{src:a("45d3")}}):t._e(),o.open&&o.win&&!o.selected?e("v-img",{attrs:{src:a("62d9")}}):t._e(),o.open&&o.win&&o.selected?e("v-img",{attrs:{src:a("e983")}}):t._e(),!o.open||o.win||o.selected?t._e():e("v-img",{attrs:{src:a("b0ef")}}),o.open&&!o.win&&o.selected?e("v-img",{attrs:{src:a("515d")}}):t._e()],1)}))],2)],1)],1),e("v-col",{attrs:{cols:"4"}},[e("v-container",[e("v-row",[e("v-col",{staticClass:"text-h6",attrs:{cols:"12"}},[t._v(" Stats ")]),e("v-col",{staticClass:"pa-0",staticStyle:{display:"flex","align-items":"center","justify-content":"center"},attrs:{cols:"6"}},[e("v-card",{staticStyle:{display:"flex","align-items":"center","justify-content":"center"},attrs:{width:"150px",height:"50px",color:"white"}},[t._v(" Kept ")])],1),e("v-col",{staticClass:"pa-0",staticStyle:{display:"flex","align-items":"center","justify-content":"center"},attrs:{cols:"6"}},[e("v-card",{staticStyle:{display:"flex","align-items":"center","justify-content":"center"},attrs:{width:"150px",height:"50px",color:"black",dark:""}},[t._v(" Changed ")])],1),e("v-col",{staticClass:"text-h6",attrs:{cols:"6"}},[t._v(" "+t._s(t.keepRatio)+" ")]),e("v-col",{staticClass:"text-h6",attrs:{cols:"6"}},[t._v(" "+t._s(t.changeRatio)+" ")]),e("v-col",{staticStyle:{display:"flex","justify-content":"center"},attrs:{cols:"6"}},[e("div",{staticClass:"historyPan"},[t._l(t.history.keepWin,(function(t){return e("div",{key:"keepWin-"+t,staticStyle:{width:"20px",height:"20px",background:"rgb(0,255,0)",margin:"1px 1px 0px 1px"}})})),t._l(t.history.keepLose,(function(t){return e("div",{key:"keeplose-"+t,staticStyle:{width:"20px",height:"20px",background:"rgb(255,0,0)",margin:"1px 1px 0px 1px"}})}))],2)]),e("v-col",{staticStyle:{display:"flex","justify-content":"center"},attrs:{cols:"6"}},[e("div",{staticClass:"historyPan"},[t._l(t.history.changeWin,(function(t){return e("div",{key:"changeWin-"+t,staticStyle:{width:"20px",height:"20px",background:"rgb(0,255,0)",margin:"1px 1px 0px 1px"}})})),t._l(t.history.changeLose,(function(t){return e("div",{key:"changelose-"+t,staticStyle:{width:"20px",height:"20px",background:"rgb(255,0,0)",margin:"1px 1px 0px 1px"}})}))],2)])],1)],1)],1),e("v-dialog",{attrs:{"overlay-color":"white","content-class":"elevation-0"},model:{value:t.winDialog,callback:function(o){t.winDialog=o},expression:"winDialog"}},[e("v-img",{staticStyle:{margin:"auto"},attrs:{src:a("6b95"),width:"350px"}}),e("v-img",{staticStyle:{margin:"auto"},attrs:{src:a("62d9"),width:"250px"}})],1),e("v-dialog",{attrs:{"content-class":"elevation-0"},model:{value:t.loseDialog,callback:function(o){t.loseDialog=o},expression:"loseDialog"}},[e("v-img",{staticStyle:{margin:"auto"},attrs:{src:a("199f"),width:"350px"}}),e("v-img",{staticStyle:{margin:"auto"},attrs:{src:a("b0ef"),width:"250px"}})],1),e("v-col",{attrs:{cols:"4"}},[e("v-btn",{staticClass:"mx-4",attrs:{rounded:"",outlined:"",block:""},on:{click:t.toggleDoors}},[t._v(" "+t._s(t.openBtnDisplay)+" ")])],1),e("v-col",{staticClass:"text-center",attrs:{cols:"4"}},[e("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(o){var a=o.on,s=o.attrs;return[e("v-btn",t._g(t._b({staticClass:"mx-4",attrs:{rounded:"",outlined:"",block:""}},"v-btn",s,!1),a),[t._v(" Autoplay ")])]}}]),model:{value:t.autoDialog,callback:function(o){t.autoDialog=o},expression:"autoDialog"}},[e("v-card",[e("v-card-title",{staticClass:"headline"},[t._v(" Lauch Autoplay ")]),e("v-card-text",[t._v(" Play the game automatically multiple times "),e("v-text-field",{staticClass:"mt-3",attrs:{label:"Repetitions",type:"number",outlined:"",min:"1",max:"400"},model:{value:t.autoPlayTimes,callback:function(o){t.autoPlayTimes=o},expression:"autoPlayTimes"}})],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{staticClass:"mx-1",attrs:{color:"error",width:"150px",dark:""},on:{click:function(o){t.autoDialog=!1}}},[t._v(" Cancel ")]),e("v-btn",{staticClass:"mx-1",attrs:{color:"success",width:"150px",dark:""},on:{click:t.launchAutoPlay}},[t._v(" GO ! ")])],1)],1)],1)],1),e("v-col",{attrs:{cols:"4"}},[e("v-btn",{staticClass:"mx-4",attrs:{rounded:"",outlined:"",block:""},on:{click:t.resetStats}},[t._v(" Reset Stats ")])],1)],1),e("tutorial",{attrs:{showTutorial:t.showTutorial}})],1)},r=[],l=(a("4160"),a("159b"),function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-dialog",{attrs:{persistent:""},model:{value:t.showTutorial,callback:function(o){t.showTutorial=o},expression:"showTutorial"}},[e("v-card",[e("v-card-title",{staticClass:"display-2 font-weight-bold"},[t._v(" The Monty Hall Problem ")]),e("v-window",{model:{value:t.onboarding,callback:function(o){t.onboarding=o},expression:"onboarding"}},[e("v-window-item",{key:"card-0"},[e("v-card",{staticClass:"px-6 py-2",attrs:{flat:"",height:"600"}},[e("v-row",{staticClass:"fill-height"},[e("v-col",{attrs:{cols:"8"}},[e("v-row",[e("v-col",{staticClass:"headline",attrs:{cols:"12"}},[t._v(" You are presented with three doors ")]),t._l(3,(function(t){return e("v-col",{key:"doors-1-"+t,attrs:{cols:"4"}},[e("v-img",{attrs:{"max-height":"180px",contain:"",src:a("b2d7")}})],1)})),e("v-col",{staticClass:"headline",attrs:{cols:"12"}},[t._v(" Two of the doors hide a goat and one of the doors hides a car ")]),e("v-col",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center"},attrs:{cols:"6"}},[e("v-img",{attrs:{"max-height":"180px",contain:"",src:a("b0ef")}}),e("span",{staticClass:"display-3 font-weight-bold"},[t._v(" ×2 ")])],1),e("v-col",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center"},attrs:{cols:"6"}},[e("v-img",{attrs:{"max-height":"180px",contain:"",src:a("62d9")}}),e("span",{staticClass:"display-3 font-weight-bold"},[t._v(" ×1 ")])],1)],2)],1),e("v-col",{staticClass:"display-2 fill-height",staticStyle:{display:"flex","align-items":"center"},attrs:{cols:"4"}},[t._v(" The Setup ")])],1)],1)],1),e("v-window-item",{key:"card-1"},[e("v-card",{staticClass:"px-6 py-2",attrs:{flat:"",height:"600"}},[e("v-row",{staticClass:"fill-height"},[e("v-col",{attrs:{cols:"8"}},[e("v-row",[e("v-col",{staticClass:"headline",attrs:{cols:"12"}},[t._v(" The goal is to pick the right door. ")]),e("v-col",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center"},attrs:{cols:"6"}},[e("span",{staticClass:"headline"},[t._v(" If you pick the car, you win. ")]),e("v-img",{attrs:{"max-height":"180px",contain:"",src:a("e983")}}),e("v-img",{attrs:{"max-height":"180px",contain:"",src:a("6b95")}})],1),e("v-col",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center"},attrs:{cols:"6"}},[e("span",{staticClass:"headline"},[t._v(" If you pick the goat, you lose. ")]),e("v-img",{attrs:{"max-height":"180px",contain:"",src:a("515d")}}),e("v-img",{attrs:{"max-height":"180px",contain:"",src:a("199f")}})],1)],1)],1),e("v-col",{staticClass:"display-2 fill-height",staticStyle:{display:"flex","align-items":"center"},attrs:{cols:"4"}},[t._v(" The Goal ")])],1)],1)],1),e("v-window-item",{key:"card-2"},[e("v-card",{staticClass:"px-6 py-2",attrs:{flat:"",height:"600"}},[e("v-row",{staticClass:"fill-height"},[e("v-col",{attrs:{cols:"8"}},[e("v-row",[e("v-col",{staticClass:"headline",attrs:{cols:"12"}},[t._v(" The game goes like this : You start by picking a door ")]),e("v-col",{attrs:{cols:"4"}},[e("v-img",{attrs:{"max-height":"180px",contain:"",src:a("45d3")}})],1),t._l(2,(function(t){return e("v-col",{key:"doors-3-"+t,attrs:{cols:"4"}},[e("v-img",{attrs:{"max-height":"180px",contain:"",src:a("b2d7")}})],1)})),e("v-col",{staticClass:"headline",attrs:{cols:"12"}},[t._v(" Then the host opens another door, revealing a goat ")]),e("v-col",{attrs:{cols:"4"}},[e("v-img",{attrs:{"max-height":"180px",contain:"",src:a("45d3")}})],1),e("v-col",{attrs:{cols:"4"}},[e("v-img",{attrs:{"max-height":"180px",contain:"",src:a("b0ef")}})],1),e("v-col",{attrs:{cols:"4"}},[e("v-img",{attrs:{"max-height":"180px",contain:"",src:a("b2d7")}})],1)],2)],1),e("v-col",{staticClass:"display-2 fill-height",staticStyle:{display:"flex","align-items":"center"},attrs:{cols:"4"}},[t._v(" First Choice ")])],1)],1)],1),e("v-window-item",{key:"card-3"},[e("v-card",{staticClass:"px-6 py-2",attrs:{flat:"",height:"600"}},[e("v-row",{staticClass:"fill-height"},[e("v-col",{attrs:{cols:"8"}},[e("v-row",[e("v-col",{staticClass:"headline",attrs:{cols:"12"}},[t._v(" You now have a choice : ")]),e("v-col",{attrs:{cols:"12"}},[e("v-row",[e("v-col",{staticClass:"text-center",attrs:{cols:"4"}},[e("v-btn",{attrs:{width:"200px"}},[t._v("Keep")]),e("div",[t._v(" your door ")])],1),e("v-col",{staticClass:"display-1 text-center",attrs:{cols:"4"}},[t._v(" OR ")]),e("v-col",{staticClass:"text-center",attrs:{cols:"4"}},[e("v-btn",{attrs:{width:"200px",dark:""}},[t._v("Change")]),e("div",[t._v(" your door ")])],1),e("v-col",{attrs:{cols:"4"}},[e("v-img",{attrs:{"max-height":"180px",contain:"",src:a("45d3")}})],1),e("v-col",{attrs:{cols:"4"}},[e("v-img",{attrs:{"max-height":"180px",contain:"",src:a("b0ef")}})],1),e("v-col",{attrs:{cols:"4"}},[e("v-img",{attrs:{"max-height":"180px",contain:"",src:a("b2d7")}})],1)],1)],1),e("v-col",{staticClass:"headline mt-8 pb-0",attrs:{cols:"12"}},[t._v(" Which one of the following phrases is correct ? ")]),e("v-col",{staticClass:"headline",attrs:{cols:"4"}},[e("span",{staticClass:"font-weight-bold"},[t._v("1)")]),t._v(" You have better chances of winning if you "),e("v-chip",{staticClass:"elevation-5",attrs:{label:"",color:"white",small:""}},[t._v("KEEP")]),t._v(" your door. ")],1),e("v-col",{staticClass:"headline",attrs:{cols:"4"}},[e("span",{staticClass:"font-weight-bold"},[t._v("2)")]),t._v(" You have better chances of winning if you "),e("v-chip",{staticClass:"elevation-5",attrs:{label:"",color:"black","text-color":"white",small:""}},[t._v("CHANGE")]),t._v(" door. ")],1),e("v-col",{staticClass:"headline",attrs:{cols:"4"}},[e("span",{staticClass:"font-weight-bold"},[t._v("3)")]),t._v(" It does not matter, it's a 50-50 choice. ")]),e("v-col",{attrs:{cols:"12"}})],1)],1),e("v-col",{staticClass:"display-2 fill-height",staticStyle:{display:"flex","align-items":"center"},attrs:{cols:"4"}},[t._v(" The Dilemma ")])],1)],1)],1),e("v-window-item",{key:"card-4"},[e("v-card",{staticClass:"px-6 py-2",attrs:{flat:"",height:"600"}},[e("v-row",{staticClass:"fill-height"},[e("v-col",{staticClass:"headline",attrs:{cols:"8"}},[e("v-row",[e("v-col",{staticClass:"text-justify",attrs:{cols:"8"}},[e("b",[t._v("Monty Hall")]),t._v(" (1921-2017) was a Canadian radio and television show host who moved to the United States in 1955 to pursue a career in broadcasting. After working as a radio newsreader and sportscaster, Hall returned to television in the U.S., this time in game shows. Starting in 1963, he was best known as the game show host and producer of "),e("b",[t._v("Let's Make a Deal")]),t._v(". As a celebrity, he had a conundrum with game theory and psychology aspects named after him, the Monty Hall problem. Behind the scenes, Hall also carried on an active life of philanthropy. ")]),e("v-col",{attrs:{cols:"4"}},[e("v-img",{attrs:{"max-height":"320px",contain:"",src:a("9592")}})],1)],1),t._v(" This game was derived from "),e("b",[t._v("Monty Hall")]),t._v("'s show by an american statistician named "),e("b",[t._v("Steve Selvin")]),t._v(" (who also gave it the name he now has). ")],1),e("v-col",{staticClass:"display-2 fill-height",staticStyle:{display:"flex","align-items":"center"},attrs:{cols:"4"}},[t._v(" The History ")])],1)],1)],1)],1),e("v-card-actions",{staticStyle:{display:"block"}},[e("div",{staticStyle:{display:"flex","justify-content":"space-around"}},[e("v-btn",{attrs:{text:""},on:{click:t.prev}},[e("v-icon",[t._v("mdi-chevron-left")])],1),e("v-item-group",{staticClass:"text-center",attrs:{mandatory:""},model:{value:t.onboarding,callback:function(o){t.onboarding=o},expression:"onboarding"}},t._l(t.length,(function(o){return e("v-item",{key:"btn-"+o,scopedSlots:t._u([{key:"default",fn:function(o){var a=o.active,s=o.toggle;return[e("v-btn",{attrs:{"input-value":a,icon:""},on:{click:s}},[e("v-icon",[t._v("mdi-record")])],1)]}}],null,!0)})})),1),e("v-btn",{attrs:{text:""},on:{click:t.next}},[e("v-icon",[t._v("mdi-chevron-right")])],1)],1),e("div",{staticStyle:{display:"flex"}},[e("v-spacer"),e("v-btn",{staticStyle:{width:"200px"},attrs:{color:"primary"},on:{click:t.hideTutorial}},[t._v(" Got it ! ")])],1)])],1)],1)}),c=[],h={name:"tutorial",props:{showTutorial:Boolean},data:function(){return{length:5,onboarding:0}},methods:{next:function(){this.onboarding=this.onboarding+1===this.length?0:this.onboarding+1},prev:function(){this.onboarding=this.onboarding-1<0?this.length-1:this.onboarding-1},hideTutorial:function(){this.eventBus.$emit("toggleTutorial",!1)}}},d=h,p=a("2877"),v=a("6544"),u=a.n(v),g=a("8336"),f=a("b0af"),m=a("99d9"),y=a("cc20"),x=a("62ad"),b=a("169a"),w=a("132d"),_=a("adda"),k=a("d903"),C=a("604c"),S=a("0fd9"),T=a("2fa4"),D=a("f665"),V=a("1e6c"),P=Object(p["a"])(d,l,c,!1,null,null,null),A=P.exports;u()(P,{VBtn:g["a"],VCard:f["a"],VCardActions:m["a"],VCardTitle:m["c"],VChip:y["a"],VCol:x["a"],VDialog:b["a"],VIcon:w["a"],VImg:_["a"],VItem:k["a"],VItemGroup:C["b"],VRow:S["a"],VSpacer:T["a"],VWindow:D["a"],VWindowItem:V["a"]});var M={name:"mainDeck",components:{tutorial:A},props:{showTutorial:Boolean},data:function(){return{globalState:"start",controls:0,instruction:"Pick a door",doors:[],doorNames:[],btnColors:["primary","primary","primary"],history:{changeWin:0,changeLose:0,keepWin:0,keepLose:0},winDialog:!1,loseDialog:!1,autoDialog:!1,forceUpdate:0,onAutoPlay:!1,autoPlayTimes:100,openBtnDisplay:"open doors",tutorial:!0}},computed:{changeRatio:function(){if(this.forceUpdate,this.history.changeWin+this.history.changeLose==0)return"--";var t=Math.floor(100*this.history.changeWin/(this.history.changeWin+this.history.changeLose),2);return"".concat(t,"%")},keepRatio:function(){if(this.forceUpdate,this.history.keepWin+this.history.keepLose==0)return"--";var t=Math.floor(100*this.history.keepWin/(this.history.keepWin+this.history.keepLose));return"".concat(t,"%")}},mounted:function(){this.reset()},methods:{reset:function(){this.globalState="start",this.controls=0,this.btnColors=["primary","primary","primary"],this.pickedDoor=0,this.instruction="Pick a door";var t=Math.floor(3*Math.random());this.doors=[];for(var o=0;o<3;o++)o==t?this.doors.push({open:!1,win:!0,selected:!1}):this.doors.push({open:!1,win:!1,selected:!1})},pickADoor:function(t){var o=this;if("start"==this.globalState){this.globalState="",this.pickedDoor=t,this.doors[t].selected=!0,this.btnColors[t]="success",setTimeout((function(){var t=Math.floor(3*Math.random());while(o.doors[t].win||o.doors[t].selected)t=(t+1)%3;o.doors[t].open=!0}),500);var a=this.onAutoPlay?0:500;setTimeout((function(){o.globalState="confirm",o.controls=1,o.instruction="Keep the same door ?"}),a)}},confirmDoor:function(t){var o=this;if("confirm"==this.globalState){this.globalState="";var a=!1;t||this.doors.forEach((function(t){t.selected=!t.open&&!t.selected})),this.doors.forEach((function(t){t.selected&&!t.open&&(t.open=!0,t.win&&(a=!0))}));var e=this.onAutoPlay?50:1;a?(this.onAutoPlay||(setTimeout((function(){return o.winDialog=!0}),500),setTimeout((function(){return o.winDialog=!1}),1500)),t?this.history.keepWin++:this.history.changeWin++):(this.onAutoPlay||(setTimeout((function(){return o.loseDialog=!0}),500),setTimeout((function(){return o.loseDialog=!1}),1500)),t?this.history.keepLose++:this.history.changeLose++),this.forceUpdate++,setTimeout(this.reset,1500/e)}},autoPlay:function(t){var o=this;t>0?(this.pickADoor(Math.floor(3*Math.random())),this.confirmDoor(0==Math.floor(2*Math.random())),setTimeout((function(){return o.autoPlay(--t)}),100)):(this.onAutoPlay=!1,setTimeout((function(){return o.reset()}),500))},launchAutoPlay:function(){this.autoDialog=!1,this.reset(),this.history={changeWin:0,changeLose:0,keepWin:0,keepLose:0},this.onAutoPlay=!0,this.autoPlay(Math.min(this.autoPlayTimes,400))},resetStats:function(){this.history={changeWin:0,changeLose:0,keepWin:0,keepLose:0}},toggleDoors:function(){"open doors"==this.openBtnDisplay?(this.doors.forEach((function(t){return t.open=!0})),this.openBtnDisplay="reset doors"):(this.reset(),this.openBtnDisplay="open doors")}}},W=M,j=(a("6347"),a("a523")),L=a("8654"),O=Object(p["a"])(W,n,r,!1,null,"39e85c73",null),B=O.exports;u()(O,{VBtn:g["a"],VCard:f["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCol:x["a"],VContainer:j["a"],VDialog:b["a"],VImg:_["a"],VRow:S["a"],VSpacer:T["a"],VTextField:L["a"],VWindow:D["a"],VWindowItem:V["a"]});var H={name:"App",components:{mainDeck:B},data:function(){return{showTutorial:!0}},mounted:function(){var t=this;this.eventBus.$on("toggleTutorial",(function(o){return t.showTutorial=o}))}},I=H,E=a("7496"),R=a("40dc"),U=a("f6c4"),$=Object(p["a"])(I,s,i,!1,null,null,null),G=$.exports;u()($,{VApp:E["a"],VAppBar:R["a"],VBtn:g["a"],VIcon:w["a"],VMain:U["a"],VSpacer:T["a"]});var K=a("f309");e["a"].use(K["a"]);var Y=new K["a"]({});e["a"].config.productionTip=!1;var F=new e["a"];e["a"].mixin({data:function(){return{eventBus:F}}}),new e["a"]({vuetify:Y,render:function(t){return t(G)}}).$mount("#app")},"62d9":function(t,o,a){t.exports=a.p+"img/door-car.c1efaf13.png"},6347:function(t,o,a){"use strict";a("d6b2")},"6b95":function(t,o,a){t.exports=a.p+"img/youwin.c9e1ad49.png"},9592:function(t,o,a){t.exports=a.p+"img/MontyHall.e57aa7e1.png"},b0ef:function(t,o,a){t.exports=a.p+"img/door-goat.594ae11f.png"},b2d7:function(t,o,a){t.exports=a.p+"img/door.21c2cc4b.png"},d6b2:function(t,o,a){},e983:function(t,o,a){t.exports=a.p+"img/door-car-selected.f078baac.png"}});
//# sourceMappingURL=app.1dd90e48.js.map