(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{108:function(e,s,a){var t=a(5),n=a(109);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var r={insert:"head",singleton:!1};t(n,r);e.exports=n.locals||{}},109:function(e,s,a){(s=a(6)(!1)).push([e.i,".readmessages-module__readmessages___23EPS{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%}.readmessages-module__readmessages___23EPS h3{color:#b12643}.readmessages-module__messageslist___23_aT{height:100%;width:350px;overflow-y:auto;display:flex;flex-direction:column;align-items:center}@media screen and (min-width: 500px){.readmessages-module__messageslist___23_aT{width:600px}}\n",""]),s.locals={readmessages:"readmessages-module__readmessages___23EPS",messageslist:"readmessages-module__messageslist___23_aT"},e.exports=s},110:function(e,s,a){var t=a(5),n=a(111);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var r={insert:"head",singleton:!1};t(n,r);e.exports=n.locals||{}},111:function(e,s,a){(s=a(6)(!1)).push([e.i,".message-module__message___2_nDT{box-sizing:border-box;border:2px solid #b12643;border-radius:10px;margin:10px auto;width:100%;height:100px;display:flex;flex-direction:column}.message-module__collapsedmessage___x-19H{box-sizing:border-box;background-color:#b12643;color:#fff;width:100%;border-radius:10px;margin:10px auto;padding:5px 5px;font-size:1.2em;word-wrap:break-word}.message-module__msgInfo___3xNK5{flex:3;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-around}.message-module__msgInfo___3xNK5 span{margin:2px}.message-module__msgInfo___3xNK5 span:nth-child(1){color:#b12643;font-weight:bold}.message-module__msgInfo___3xNK5 span:nth-child(2),.message-module__msgInfo___3xNK5 span:nth-child(3){font-weight:bold}.message-module__collapseicon___32Wcj{background-color:#eee;border-radius:0 0 10px 10px;flex:1;text-align:center;font-weight:bold;border-top:1px solid #b12643}.message-module__collapseicon___32Wcj img{width:20px}\n",""]),s.locals={message:"message-module__message___2_nDT",collapsedmessage:"message-module__collapsedmessage___x-19H",msgInfo:"message-module__msgInfo___3xNK5",collapseicon:"message-module__collapseicon___32Wcj"},e.exports=s},124:function(e,s,a){"use strict";a.r(s);var t=a(0),n=a.n(t),r=a(108),o=a.n(r),l=a(110),i=a.n(l),c=a.p+"157a18a57b4650ad1b65bf0790b75631.svg",m=a.p+"0c1b14a0a92f9039299a2a8b79c68d49.svg",d=a(42);function u(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],t=!0,n=!1,r=void 0;try{for(var o,l=e[Symbol.iterator]();!(t=(o=l.next()).done)&&(a.push(o.value),!s||a.length!==s);t=!0);}catch(e){n=!0,r=e}finally{try{t||null==l.return||l.return()}finally{if(n)throw r}}return a}(e,s)||function(e,s){if(!e)return;if("string"==typeof e)return _(e,s);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _(e,s)}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,s){(null==s||s>e.length)&&(s=e.length);for(var a=0,t=new Array(s);a<s;a++)t[a]=e[a];return t}var g=function(e){var s=u(Object(t.useState)(!1),2),a=s[0],r=s[1];return Object(t.useEffect)((function(){console.log("[Message.js] rendered...")})),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:i.a.message},n.a.createElement("div",{className:i.a.msgInfo},n.a.createElement("span",null,e.sender),n.a.createElement("span",null,e.contact),n.a.createElement("span",null,e.timestamp)),n.a.createElement("div",{onClick:function(){r(!a)},className:i.a.collapseicon},a?n.a.createElement("img",{src:m}):n.a.createElement("img",{src:c}))),a?n.a.createElement("div",{className:i.a.collapsedmessage},n.a.createElement("p",null,e.message),n.a.createElement("div",{style:{display:"flex",justifyContent:"center",cursor:"pointer"},onClick:function(){return e.onDelete(e.uid)}},n.a.createElement("img",{src:d.a}))):null)},f=a(15),p=a(21),b=a(19);s.default=Object(f.b)((function(e){return{messagesList:e.fetchMessages.messages}}),(function(e){return{fetchMessages:function(){return e(p.e())},deleteMessage:function(s){return e(p.c(s))}}}))((function(e){var s=n.a.createElement(b.a,null),a=function(s){e.deleteMessage(s),setTimeout((function(){e.fetchMessages()}),500)};return e.messagesList.length>0&&(s=e.messagesList.map((function(e){return n.a.createElement(g,{onDelete:a,key:e.id,uid:e.id,sender:e.senderName,contact:e.senderContact,message:e.messageBody,timestamp:e.timestamp})}))),Object(t.useEffect)((function(){e.fetchMessages()}),[]),Object(t.useEffect)((function(){console.log("[ReadMessages.js] rendered...")})),n.a.createElement("div",{className:o.a.readmessages},n.a.createElement("h3",null,"INBOX"),n.a.createElement("div",{className:o.a.messageslist},s))}))}}]);
//# sourceMappingURL=3.bundle.js.map