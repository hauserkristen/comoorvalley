webpackJsonp([0],{"+l0V":function(t,e){},"/kHB":function(t,e,s){t.exports=s.p+"static/img/008.4677fb3.jpg"},"/owk":function(t,e,s){t.exports=s.p+"static/img/004.1321eca.jpg"},0:function(t,e){},"44F1":function(t,e,s){t.exports=s.p+"static/files/AntennaRules.pdf"},"5zcC":function(t,e){},"6NoD":function(t,e,s){t.exports=s.p+"static/img/006.4f1040f.jpg"},"76EH":function(t,e,s){t.exports=s.p+"static/files/DeclarationOfCovenants.doc"},"7Otq":function(t,e,s){t.exports=s.p+"static/img/logo.6ccac62.png"},"E/Ca":function(t,e){},F1so:function(t,e){},"FB+H":function(t,e,s){t.exports=s.p+"static/img/060.bb583fe.jpg"},FSvx:function(t,e){},FpHL:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i=s("7Otq"),n=s.n(i),o={data:function(){return{active:!1,coMoorLogo:n.a,navItems:[{item:"Home",route:"/"},{item:"Information",route:"/info"},{item:"News",route:"/news"},{item:"Gallery",route:"/gallery"},{item:"About",route:"/about"},{item:"Contact",route:"/contact"}]}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{staticClass:"navbar is-fixed-top is-dark"},[s("div",{staticClass:"navbar-brand"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[s("img",{attrs:{src:t.coMoorLogo,alt:"Co-Moor Valley",width:"28",height:"28"}})]),t._v(" "),s("div",{staticClass:"navbar-burger burger",class:{"is-active":t.active},attrs:{"data-target":"navbar"},on:{click:function(e){t.active=!t.active}}},[s("span"),t._v(" "),s("span"),t._v(" "),s("span")])],1),t._v(" "),s("div",{staticClass:"navbar-menu",class:{"is-active":t.active},attrs:{id:"navbar"}},[s("div",{staticClass:"navbar-end"},t._l(t.navItems,function(e){return s("router-link",{key:e.item,staticClass:"navbar-item",attrs:{to:e.route}},[t._v("\n          "+t._s(e.item)+"\n        ")])}))])])])},staticRenderFns:[]};var c={name:"app",components:{navbar:s("VU/8")(o,r,!1,function(t){s("5zcC")},"data-v-48f3b4d1",null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("navbar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var d=s("VU/8")(c,l,!1,function(t){s("oww7")},null,null).exports,u=s("/ocq");const m={coMoorLogo:s("jpOh"),subtitle:"Where the convenience of the city meets the beauty of the woods."};var p={name:"home",data:function(){return m}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("section",{staticClass:"hero is-fullheight home-background"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container has-text-centered"},[e("div",{staticClass:"column is-8 is-offset-2 opaque-brown"},[e("img",{attrs:{src:this.coMoorLogo,width:"300",height:"300",alt:"Co-Moor Valley Condo Association"}}),this._v(" "),e("h2",{staticClass:"subtitle has-text-warning"},[this._v("\n              "+this._s(this.subtitle)+"\n          ")])])])])])])},staticRenderFns:[]};var f=s("VU/8")(p,v,!1,function(t){s("FSvx")},"data-v-25616ee0",null).exports,h={name:"page-header",props:{title:{type:String,required:!0},isActiveTab:{type:Function,required:!1},tabClicked:{type:Function,required:!1},tabData:{type:Array,required:!1,default:function(){return[]}}}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero is-dark"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title has-text-centered has-text-primary"},[t._v("\n        "+t._s(t.title)+"\n      ")])])]),t._v(" "),t.tabData.length>0?s("div",{staticClass:"hero-foot"},[s("nav",{staticClass:"tabs is-boxed is-fullwidth"},[s("div",{staticClass:"container"},[s("ul",t._l(t.tabData,function(e){return s("li",{key:e.name,class:{"is-active":t.isActiveTab(e.name)}},[s("a",{on:{click:function(s){t.tabClicked(e.name)}}},[s("span",{staticClass:"icon is-small"},[s("font-awesome-icon",{attrs:{icon:e.icon}})],1),t._v(" "),s("span",[t._v(t._s(e.name))])])])}))])])]):t._e()])},staticRenderFns:[]};var b=s("VU/8")(h,g,!1,function(t){s("QOCp")},"data-v-74df56ff",null).exports;const C={title:"Information",navTab:"Governing Documents",tabs:[{name:"Governing Documents",icon:"file",isDownload:!0,info:{"By-Laws":{content:"Description of document they are downloading goes here.",src:s("yhUY")},Convenants:{content:"Description of document they are downloading goes here.",src:s("76EH")},"Rules and Regulations":{content:"Description of document they are downloading goes here.",src:s("XYtB")},Antennae:{content:"Description of document they are downloading goes here.",src:s("44F1")},"Sandy's Page":{content:"Description of document they are downloading goes here.",src:""}}},{name:"Forms",icon:"check-square",isDownload:!0,info:{"Landscape Change Request":{content:"Description of document they are downloading goes here.",src:""},"Antennae Installation":{content:"Description of document they are downloading goes here.",src:""}}},{name:"Important Numbers",icon:"address-card",isDownload:!1,info:{President:"(123)-456-7890","Vice President":"(123)-456-7890",Schili:"(123)-456-7890","City of Cleveland":"(123)-456-7890"}},{name:"General Information",icon:"info",isDownload:!1,info:{Dues:"Info on dues...",Pool:"Info on pool...",Garbage:"Info on garbage..."}}]};var _={name:"info",components:{"page-header":b},data:function(){return C},computed:{tabData:function(){var t=this.navTab,e=this.tabs.findIndex(function(e){return e.name===t});return this.tabs[e]}},methods:{isActiveTab:function(t){return this.navTab===t},tabClicked:function(t){this.navTab=t}}},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("page-header",{attrs:{title:t.title,tabData:t.tabs,isActiveTab:t.isActiveTab,tabClicked:t.tabClicked}}),t._v(" "),s("section",{staticClass:"section"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-full-width center-parent"},[s("table",{staticClass:"table is-bordered is-striped center-child"},[s("tbody",t._l(t.tabData.info,function(e,a){return s("tr",{key:a},[t.tabData.isDownload?s("td",[s("div",{staticClass:"center-parent"},[s("a",{staticClass:"button is-dark center-child",attrs:{href:e.src,download:""}},[t._v("\n                    "+t._s(a)+"\n                  ")])])]):s("td",[s("div",{staticClass:"center-parent"},[s("p",{staticClass:"center-child"},[t._v(t._s(a))])])]),t._v(" "),t.tabData.isDownload?s("td",[s("div",{staticClass:"center-parent"},[s("p",{staticClass:"center-child"},[t._v(t._s(e.content))])])]):s("td",[s("div",{staticClass:"center-parent"},[s("p",{staticClass:"center-child"},[t._v(t._s(e))])])])])}))])])])])],1)},staticRenderFns:[]};var w=s("VU/8")(_,y,!1,function(t){s("FpHL")},"data-v-d82c23f0",null).exports;const x={title:"News and Events",newsItems:[{title:"Board Meeting",date:"July 27, 2018 at 6:00 PM",location:"Office",content:"Board meeting to discuss upcoming events and budget.",src:""},{title:"July 4th Fireworks",date:"July 4, 2018 at sundown",location:"Foltz Field",content:"Come attend the 2nd best fireworks show in the Cleveland area right here in Strongsville!",src:""},{title:"Board Meeting",date:"May 16, 2018 at 6:00 PM",location:"Office",content:"Board meeting to discuss upcoming events and budget.",src:""}]};var k={name:"news",components:{"page-header":b},data:function(){return x}},I={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("page-header",{attrs:{title:t.title}}),t._v(" "),s("section",{staticClass:"section"},[s("div",{staticClass:"tile is-ancestor grid"},t._l(t.newsItems,function(e,a){return s("div",{key:a,staticClass:"tile is-parent is-6"},[s("article",{staticClass:"tile is-child box"},[s("p",{staticClass:"subtitle"},[s("b",[t._v(t._s(e.title))])]),t._v(" "),s("p",[t._v(t._s(e.date))]),t._v(" "),s("p",[t._v(t._s(e.location))]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"content"},[s("p",[t._v(t._s(e.content))])])])])}))])],1)},staticRenderFns:[]};var F=s("VU/8")(k,I,!1,function(t){s("F1so")},"data-v-15ae7721",null).exports,E=s("9Zon"),D=s.n(E);const M={title:"Photo Gallery",index:null,images:[{src:s("bUzH"),title:""},{src:s("ovny"),title:""},{src:s("/owk"),title:""},{src:s("eR2R"),title:""},{src:s("6NoD"),title:""},{src:s("fYpR"),title:""},{src:s("/kHB"),title:""},{src:s("yUPw"),title:""},{src:s("WoET"),title:""},{src:s("lZKl"),title:""}]};var R={name:"gallery",components:{"gallery-slideshow":D.a,"page-header":b},data:function(){return M},computed:{imageSources:function(){return this.images.map(function(t){return t.src})}},methods:{onClick:function(t){this.index=t}}},P={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("page-header",{attrs:{title:t.title}}),t._v(" "),s("section",[s("div",{staticClass:"content grid"},[t._l(t.images,function(e,a){return s("div",{key:a,staticClass:"card cell"},[s("div",{staticClass:"card-content"},[s("img",{staticClass:"image",attrs:{src:e.src},on:{click:function(e){t.onClick(a)}}}),t._v(" "),s("p",{staticClass:"subtitle"},[t._v("\n            "+t._s(e.title)+"\n          ")])])])}),t._v(" "),s("gallery-slideshow",{attrs:{images:t.imageSources,index:t.index},on:{close:function(e){t.index=null}}})],2)])],1)},staticRenderFns:[]};var j=s("VU/8")(R,P,!1,function(t){s("e36e")},"data-v-7f025ec2",null).exports,N={name:"board-member",props:{name:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},src:{type:String,required:!0}}},S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card cell"},[s("div",{staticClass:"card-image"},[s("figure",{staticClass:"image is-4by3"},[s("img",{attrs:{src:t.src,alt:"No image available."}})])]),t._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-content"},[s("p",{staticClass:"title is-4"},[t._v(t._s(t.name))]),t._v(" "),s("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.title))])])]),t._v(" "),s("div",{staticClass:"content"},[t._v("\n      "+t._s(t.description)+"\n    ")])])])},staticRenderFns:[]};var U=s("VU/8")(N,S,!1,function(t){s("+l0V")},"data-v-69300461",null).exports;const A={title:"About",infoRows:[{src:s("xu2X"),content:"Content topics here: Offerings such as pool, fitness center, etc? City info.",title:"About CoMoor Valley",justification:"left"},{src:s("FB+H"),content:"Content topics here: When was it founded? Home many homes? Different types? Difference from CoMoor?",title:"History",justification:"right"}],boardMemberRow:{title:"Board of Directors",content:"Content topics here: Intro to how many board members, positions and general idea of what they do.",members:[{name:"John Smith",title:"President",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",src:"https://bulma.io/images/placeholders/1280x960.png"},{name:"Jane Smith",title:"Board Member",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",src:"https://bulma.io/images/placeholders/1280x960.png"}]}};var H={name:"about",components:{"page-header":b,"board-member":U},data:function(){return A}},V={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("page-header",{attrs:{title:t.title}}),t._v(" "),s("section",{staticClass:"section"},[t._l(t.infoRows,function(e,a){return s("div",{key:a},["right"==e.justification?s("div",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile is-parent is-8"},[s("article",{staticClass:"tile is-child box"},[s("p",{staticClass:"subtitle"},[s("b",[t._v(t._s(e.title))])]),t._v(" "),s("div",{staticClass:"content"},[s("p",[t._v(t._s(e.content))])])])]),t._v(" "),s("div",{staticClass:"tile is-parent"},[s("article",{staticClass:"tile is-child box"},[s("img",{attrs:{src:e.src,width:"300",height:"300"}})])])]):s("div",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile is-parent"},[s("article",{staticClass:"tile is-child box"},[s("img",{attrs:{src:e.src,width:"300",height:"300"}})])]),t._v(" "),s("div",{staticClass:"tile is-parent is-8"},[s("article",{staticClass:"tile is-child box"},[s("p",{staticClass:"subtitle"},[s("b",[t._v(t._s(e.title))])]),t._v(" "),s("div",{staticClass:"content"},[s("p",[t._v(t._s(e.content))])])])])])])}),t._v(" "),s("div",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile is-parent"},[s("article",{staticClass:"tile is-child box"},[s("p",{staticClass:"subtitle"},[s("b",[t._v(t._s(t.boardMemberRow.title))])]),t._v(" "),s("div",{staticClass:"content"},[s("p",[t._v(t._s(t.boardMemberRow.content))]),t._v(" "),s("div",{staticClass:"content grid"},t._l(t.boardMemberRow.members,function(t,e){return s("board-member",{key:e,attrs:{title:t.title,name:t.name,description:t.description,src:t.src}})}))])])])])],2)],1)},staticRenderFns:[]};var q=s("VU/8")(H,V,!1,function(t){s("sjpv")},null,null).exports,B=s("mvHQ"),T=s.n(B);const $={title:"Contact Us",email:"hausermkristen@gmail.com",formContents:["Name","Email","Phone Number","Subject"],orgUserInput:{Name:"",Email:"","Phone Number":"",Subject:"",Message:""},userInput:{Name:"",Email:"","Phone Number":"",Subject:"",Message:""},formError:!1,showForm:!0};var L={name:"contact",components:{"page-header":b},data:function(){return $},methods:{clearPost:function(){this.userInput=this.orgUserInput},sumbitPost:function(){if(""===this.userInput.Message||""===this.userInput.Name||""===this.userInput.Email)this.formError=!0;else{this.formError=!1;var t={name:this.userInput.Name,email:this.userInput.Email,phone:this.userInput["Phone Number"],title:this.userInput.Subject,body:this.userInput.Message};this.$http.post("http://getsimpleform.com/messages/ajax?form_api_token=c8a65e5d24b6775a02ec99a7ff69c474",T()(t)).then(function(t){this.showForm=!1,this.clearPost()})}}}},O={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("page-header",{attrs:{title:t.title}}),t._v(" "),s("section",{staticClass:"section"},[s("div",{staticClass:"tile is-ancestor centered"},[s("div",{staticClass:"tile is-6 is-parent"},[s("div",{staticClass:"tile is-child box"},[t.formError?s("article",{staticClass:"message is-danger"},[s("div",{staticClass:"message-header"},[s("p",[t._v("Form Error")]),t._v(" "),s("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(e){t.formError=!1}}})]),t._v(" "),s("div",{staticClass:"message-body"},[t._v("\n              Please fill in your Name, Email & Message. These are mandatory fields on the form.\n            ")])]):t._e(),t._v(" "),t.showForm?s("div",[t._l(t.formContents,function(e){return s("div",{key:e,staticClass:"field"},[s("label",{staticClass:"label"},[t._v(t._s(e))]),t._v(" "),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userInput[e],expression:"userInput[formContent]"}],staticClass:"input",attrs:{type:"text",placeholder:"Enter your "+e+"..."},domProps:{value:t.userInput[e]},on:{input:function(s){s.target.composing||t.$set(t.userInput,e,s.target.value)}}})])])}),t._v(" "),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Message")]),t._v(" "),s("div",{staticClass:"control"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.userInput.Message,expression:"userInput.Message"}],staticClass:"textarea",attrs:{type:"text",rows:"10",placeholder:"Enter your Message ..."},domProps:{value:t.userInput.Message},on:{input:function(e){e.target.composing||t.$set(t.userInput,"Message",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"field is-grouped"},[s("div",{staticClass:"control"},[s("button",{staticClass:"button is-dark",on:{click:t.sumbitPost}},[t._v("Submit")])]),t._v(" "),s("div",{staticClass:"control"},[s("button",{staticClass:"button is-dark",on:{click:t.clearPost}},[t._v("Clear")])])])],2):t._e(),t._v(" "),t.showForm?t._e():s("div",{staticClass:"submission-message"},[s("span",{staticClass:"icon is-small submission-message-content"},[s("font-awesome-icon",{attrs:{icon:"thumbs-up"}})],1),t._v(" "),s("h1",{staticClass:"has-text-centered submission-message-content"},[t._v("\n              Thanks for your message, we will get back to you as soon as possible.\n            ")])])])])])])],1)},staticRenderFns:[]};var G=s("VU/8")(L,O,!1,function(t){s("E/Ca")},"data-v-7c83c799",null).exports;a.a.use(u.a);var J=new u.a({mode:"history",routes:[{path:"/",name:"Home",component:f},{path:"/info",name:"Information",component:w},{path:"/news",name:"News",component:F},{path:"/gallery",name:"Gallery",component:j},{path:"/about",name:"About",component:q},{path:"/contact",name:"Contact",component:G}]}),Y=s("NYxO");a.a.use(Y.a);var W=new Y.a.Store({state:{},actions:{},mutations:{},modules:{}}),z=s("8+8L"),X=s("C/JF"),Q=s("fhbW"),Z=s("U0v6");a.a.config.productionTip=!1,a.a.use(z.a),X.library.add(Q.c),X.library.add(Q.a),X.library.add(Q.d),X.library.add(Q.b),X.library.add(Q.e),a.a.component("font-awesome-icon",Z.FontAwesomeIcon),new a.a({el:"#app",router:J,store:W,template:"<App/>",components:{App:d}})},QOCp:function(t,e){},WoET:function(t,e,s){t.exports=s.p+"static/img/010.4d31449.jpg"},XYtB:function(t,e,s){t.exports=s.p+"static/files/RulesandRegulations.doc"},bUzH:function(t,e,s){t.exports=s.p+"static/img/001.d9127f5.png"},e36e:function(t,e){},eR2R:function(t,e,s){t.exports=s.p+"static/img/005.8b5366e.jpg"},fYpR:function(t,e,s){t.exports=s.p+"static/img/007.41b8b5d.jpg"},jpOh:function(t,e,s){t.exports=s.p+"static/img/logo_text.f73aa4a.png"},lZKl:function(t,e,s){t.exports=s.p+"static/img/011.4355b9e.jpg"},ovny:function(t,e,s){t.exports=s.p+"static/img/002.ebb6e63.jpg"},oww7:function(t,e){},sjpv:function(t,e){},xu2X:function(t,e,s){t.exports=s.p+"static/img/019.202f42e.jpg"},yUPw:function(t,e,s){t.exports=s.p+"static/img/009.03157a2.jpg"},yhUY:function(t,e,s){t.exports=s.p+"static/files/ByLaws.doc"}},["NHnr"]);
//# sourceMappingURL=app.ce37ba82615392c8c49d.js.map