(this["webpackJsonpchattingstar-spa"]=this["webpackJsonpchattingstar-spa"]||[]).push([[0],{10:function(e,t,a){},22:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(16),r=a.n(c),l=(a(27),a(7)),s=a(5),i=(a(10),a(11)),u=a.n(i),m=a(17),p=a(20),d={isAuthenticated:!1,authenticate:function(e){d.isAuthenticated=!0,setTimeout(e,100)},signout:function(e){d.isAuthenticated=!1,setTimeout(e,100)}},h=function(){var e=Object(n.useState)(),t=Object(p.a)(e,2),a=(t[0],t[1]),c=Object(s.g)(),r=(Object(s.h)().state||{from:{pathname:"/"}}).from,l=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.prev=1,e.next=4,void d.authenticate((function(){c.replace(r)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:a(!1);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement("video",{className:"video-background",autoPlay:!0,loop:!0,muted:!0},o.a.createElement("source",{src:"/assets/video/starfield.mp4",type:"video/mp4"}),"Your browser does not support HTML5 video."),o.a.createElement("div",{className:"logo-container"},o.a.createElement("img",{src:"/assets/img/logo512.png",className:"App-logo",alt:"logo"})),o.a.createElement("div",{className:"content-bottom"},o.a.createElement("h1",null,"Chatting Star"),o.a.createElement("button",{className:"btn-transp-round",onClick:function(e){console.log("signup")}},"+"),o.a.createElement("input",{type:"email",className:"input-transp",placeholder:"email"}),o.a.createElement("input",{type:"password",className:"input-transp",placeholder:"password"}),o.a.createElement("button",{className:"btn-transp",onClick:l},"Log In")))},v=function(){return o.a.createElement("div",null,o.a.createElement("video",{className:"video-background",autoPlay:!0,loop:!0,muted:!0},o.a.createElement("source",{src:"/assets/video/starfield.mp4",type:"video/mp4"}),"Your browser does not support HTML5 video."),o.a.createElement("div",{className:"panels"},o.a.createElement("div",{className:"panel-ad"}),o.a.createElement("div",{className:"panel-main"}),o.a.createElement("div",{className:"panel-chat"})))},E=a(21);function g(e){var t=e.children,a=Object(E.a)(e,["children"]);return o.a.createElement(s.b,Object.assign({},a,{render:function(e){var a=e.location;return d.isAuthenticated?t:o.a.createElement(s.a,{to:{pathname:"/login",state:{from:a}}})}}))}var f=function(){return o.a.createElement(l.a,null,o.a.createElement(s.d,null,o.a.createElement(s.b,{exact:!0,path:"/login"},o.a.createElement(h,null)),o.a.createElement(g,{path:"/"},o.a.createElement(v,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.8f918bba.chunk.js.map