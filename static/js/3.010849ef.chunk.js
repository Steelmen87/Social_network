(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{373:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__66zCH",dialogsItems:"Dialogs_dialogsItems__3ZIMZ",active:"Dialogs_active__n2jAc",messages:"Dialogs_messages__2IqDY",message:"Dialogs_message__3uWR_",b:"Dialogs_b__2Z_Jd",inputMar:"Dialogs_inputMar__pTuht"}},375:function(e,a,t){"use strict";t.r(a);var n=t(151),s=t(0),i=t.n(s),o=t(373),r=t.n(o),c=t(41),l=function(e){var a="/dialogs/"+e.id;return i.a.createElement("div",{className:r.a.dialog},i.a.createElement("img",{src:"https://main-cdn.goods.ru/hlr-system/1722315217/600001112185b0.jpeg",alt:""}),i.a.createElement(c.c,{to:a},e.name))},m=function(e){return i.a.createElement("div",{className:r.a.message},e.message)},u=t(182),g=t(183),d=t(148),b=t(134),_=Object(b.a)(12),p=Object(g.a)({form:"DialogMessageTextForm"})(function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement(u.a,{name:"newMessageText",component:d.b,validate:[b.b,_]}),i.a.createElement("button",null,"add message"))}),f=function(e){var a=e.dialogPage,t=a.dialogs.map(function(e){return i.a.createElement(l,{name:e.name,id:e.id})}),n=a.messages.map(function(e){return i.a.createElement(m,{message:e.message})});return i.a.createElement("div",{className:r.a.dialogs},i.a.createElement("div",{className:r.a.dialogsItems},t),i.a.createElement("div",{className:r.a.messages},n),i.a.createElement(p,{onSubmit:function(a){e.onSendMessageClick(a.newMessageText)}}))},E=t(21),v=t(17),h=t(66),j=t(67),w=t(69),M=t(68),O=t(18),D=function(e){return{isAuth:e.auth.isAuth}};a.default=Object(v.d)(Object(E.b)(function(e){return{dialogPage:e.dialogPage,newMessageText:e.dialogPage.newMessageText}},function(e){return{onSendMessageClick:function(a){e(Object(n.a)(a))}}}),function(e){var a=function(a){Object(w.a)(n,a);var t=Object(M.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(O.a,{to:"/login"})}}]),n}(i.a.Component);return Object(E.b)(D)(a)})(f)}}]);
//# sourceMappingURL=3.010849ef.chunk.js.map