(this.webpackJsonphealth=this.webpackJsonphealth||[]).push([[0],{16:function(n,e,t){n.exports=t(28)},28:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(10),i=t.n(o),l=t(1),c=t(2),u=t(5),s=t(3),m=t(13),f=t(29);function d(){var n=Object(l.a)(["\n  height: 80%;\n  margin: auto 0;\n"]);return d=function(){return n},n}var p=c.b.img(d()),b=function(){return r.a.createElement(f.a,{as:p,src:"navbar.png",alt:"Watt Health"})};function h(){var n=Object(l.a)(["\n  position: relative;\n  margin-top: .7rem;\n  cursor: pointer;\n  display: block;\n  outline: none;\n\n  &[tabindex]:focus {\n    outline: none;\n    border: none;\n    box-shadow: none;\n  }\n\n  &:focus:after {\n    content: '';\n    display: block;\n    position: absolute;\n    top: -0.7rem;\n    right: -0.7rem;\n    left: -0.7rem;\n    bottom: -0.7rem;\n    border: 1px solid #ffec00;\n    box-shadow: 0px 0px 5px  #ffec00;\n    pointer-events: none;\n  }\n\n  & span {\n    background: #ffec00;\n    display: block;\n    position: relative;\n    width: 3.5rem;\n    height: .4rem;\n    margin-bottom: .7rem;\n    transition: all ease-in-out 0.2s;\n  }\n\n  .open span:nth-child(2) {\n      opacity: 0;\n    }\n\n  .open span:nth-child(3) {\n    transform: rotate(45deg);\n    top: -11px;\n  }\n\n  .open span:nth-child(1) {\n    transform: rotate(-45deg);\n    top: 11px;\n  }\n\n"]);return h=function(){return n},n}var v=c.b.div(h()),g=function(n){var e=n.handleNavbar,t=n.navbarState;return r.a.createElement(f.a,{as:v,onClick:e},r.a.createElement("div",{className:t?"open":""},r.a.createElement("span",null,"\xa0"),r.a.createElement("span",null,"\xa0"),r.a.createElement("span",null,"\xa0")))};function E(){var n=Object(l.a)(["\n  list-style-type: none;\n  padding: 2rem 1rem 2rem 2rem;\n\n  & li {\n    transition: all 300ms linear 0s;\n  }       \n\n  & a {\n    font-size: 1.4rem;\n    line-height: 2;\n    color: #000000;\n    text-transform: uppercase;\n    text-decoration: none;\n    cursor: pointer;\n\n    &:hover {\n      color: #ffec00;\n      border-bottom: 1px solid #ffec00;\n    }\n  }\n"]);return E=function(){return n},n}function x(){var n=Object(l.a)(["\n  background: #ffffff;\n  position: fixed;\n  top: 6.5rem;\n  left: 0;\n  right: 0;\n  z-index: 1;\n"]);return x=function(){return n},n}var y=c.b.div(x()),w=c.b.ul(E()),j=function(n){var e=n.navbarState;return r.a.createElement(s.b,{from:{css:{transform:"translate3d(0, 0, 0)"}},to:{css:{transform:"translate3d(0, -200px, 0)"}},playState:e?"reverse":"play",duration:.35},r.a.createElement(y,null,r.a.createElement(w,null,r.a.createElement(f.a,{as:"li"},r.a.createElement("a",{href:"/"},"Musique,")),r.a.createElement(f.a,{as:"li"},r.a.createElement("a",{href:"/"},"Sport,")),r.a.createElement(f.a,{as:"li"},r.a.createElement("a",{href:"/"},"Sant\xe9,")),r.a.createElement(f.a,{as:"li"},r.a.createElement("a",{href:"/"},"\u2026 quoi d\u2019autre ?")))))};function k(){var n=Object(l.a)(["\n  margin: auto 0;\n\n  @media (min-width: 769px) {\n    display: none;\n  }\n"]);return k=function(){return n},n}function O(){var n=Object(l.a)(["\n  justify-self: end;\n  list-style-type: none;\n  margin: auto 0;\n\n  & a {\n    color: #000000;\n    text-transform: uppercase;\n    font-weight: 600;\n    border-bottom: 1px solid transparent;\n    margin: 0 1.5rem;\n    transition: all 300ms linear 0s;\n    text-decoration: none;\n    cursor: pointer;\n\n    &:hover {\n      color: #ffec00;\n      border-bottom: 1px solid #ffec00;\n    }\n\n    @media (max-width: 768px) {\n      display: none;\n    }\n  }\n"]);return O=function(){return n},n}function S(){var n=Object(l.a)(["\n  max-width: 120rem;\n  display: flex;\n  margin: auto;\n  padding: 0 2rem;\n  justify-content: space-between;\n  height: 7rem;\n"]);return S=function(){return n},n}function z(){var n=Object(l.a)(["\n  position: fixed;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background: #ffffff;\n  z-index: 2;\n  font-size: 1.4rem;\n"]);return z=function(){return n},n}var q=c.b.nav(z()),M=c.b.div(S()),I=c.b.ul(O()),C=c.b.div(k()),N=function(){var n=Object(a.useState)(!1),e=Object(m.a)(n,2),t=e[0],o=e[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{from:{transform:"translate3d(0, -10rem, 0)"},to:{transform:"translate3d(0, 0, 0)"}},r.a.createElement(q,null,r.a.createElement(M,null,r.a.createElement(b,null),r.a.createElement(s.b,{from:{transform:"translate3d(0, 30px, 0)",opacity:0},to:{transform:"translate3d(0, 0, 0)",opacity:1},delay:.8,ease:"Elastic.easeInOut"},r.a.createElement(I,null,r.a.createElement(f.a,{as:"a"},"Musique,"),r.a.createElement(f.a,{as:"a"},"Sport,"),r.a.createElement(f.a,{as:"a"},"Sant\xe9,"),r.a.createElement(f.a,{as:"a"},"\u2026 quoi d\u2019autre ?"))),r.a.createElement(C,null,r.a.createElement(g,{navbarState:t,handleNavbar:function(){return o((function(n){return!n}))}}))))),r.a.createElement(j,{navbarState:t}))};function W(){var n=Object(l.a)(["\n"]);return W=function(){return n},n}function B(){var n=Object(l.a)(["\n"]);return B=function(){return n},n}function H(){var n=Object(l.a)(["\n  background: rgba(255, 255, 255, 0.3);\n  min-height: 33%;\n  padding: 2rem 3rem;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n\n  h1 {\n    font-size: 5rem;\n  }\n\n  p {\n    font-size: 2rem;\n  }\n"]);return H=function(){return n},n}function J(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n"]);return J=function(){return n},n}var L=c.b.div(J(),(function(n){return n.bgImg})),A=c.b.div(H()),F=c.b.div(B()),U=c.b.div(W()),$=function(){return r.a.createElement(L,null,"Sport")};function D(){var n=Object(l.a)(["\n  display: inline-flex;\n  justify-content: start;\n  align-items: center;\n  height: 30vh;\n  max-height: 100px;\n  min-width: 100px;\n  width: 30vw;\n  background: none;\n  outline: none;\n  padding: 1rem;\n  border-radius: 5px;\n\n  img {\n    height: 100%;\n    object-fit: contain;\n    object-position: left;\n  }\n"]);return D=function(){return n},n}var G=c.b.button(D()),K=function(n){var e=n.children,t=void 0===e?"":e;return r.a.createElement(G,null,r.a.createElement("img",{src:"button.png",alt:"Cliquez ici"}),t)},P=function(){return r.a.createElement(L,{bgImg:"https://loremflickr.com/640/360"},r.a.createElement(A,null,r.a.createElement(F,null,r.a.createElement("h1",null,"Musique"),r.a.createElement("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut iste accusantium sint excepturi velit eligendi laborum veniam facere, nulla pariatur dicta odio non laudantium voluptate inventore porro culpa sunt possimus.")),r.a.createElement(U,null,r.a.createElement(K,null,"Concert"))))},Q=function(){return r.a.createElement(L,null,"Sante")},R=function(){return r.a.createElement(L,null,"Autre")};function T(){var n=Object(l.a)(["\n\n  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');\n\n  *,\n  *::after,\n  *::before {\n    margin: 0px;\n    padding: 0px;\n    box-sizing: inherit;\n  }\n\n  [tabindex]:focus {\n    outline: 0;\n    border: 1px solid #ffec00;\n    box-shadow: 0px 0px 5px  #ffec00;\n  }\n\n  html {\n    font-size: 62.5%;\n  }\n\n  body {\n    box-sizing: border-box;\n    font-family: 'Montserrat', sans-serif;\n  }\n"]);return T=function(){return n},n}var V=Object(c.a)(T());function X(){var n=Object(l.a)(["\n  overflow: hidden;\n  \n  #container {\n    height: calc(100vh - 6.5rem);\n    width: 100vw;\n    overflow: hidden;\n    padding-top: 6.5rem;\n  }\n\n  #container section {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: #fff;\n  }\n"]);return X=function(){return n},n}var Y=c.b.div(X());var Z=function(){return r.a.createElement(Y,null,r.a.createElement(N,null),r.a.createElement(u.a,null,r.a.createElement(u.b,{triggerHook:"onLeave",duration:"300%",pin:!0},r.a.createElement(s.a,{wrapper:r.a.createElement("div",{id:"container"})},r.a.createElement("section",null,r.a.createElement(P,null)),r.a.createElement(s.b,{from:{x:"-100%",opacity:0},to:{x:"0%",opacity:1}},r.a.createElement("section",null,r.a.createElement($,null))),r.a.createElement(s.b,{from:{x:"100%",opacity:0},to:{x:"0%",opacity:1}},r.a.createElement("section",null,r.a.createElement(Q,null))),r.a.createElement(s.b,{from:{y:"-100%",opacity:0},to:{y:"1%",opacity:1}},r.a.createElement("section",null,r.a.createElement(R,null)))))),r.a.createElement(V,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.1558e1c4.chunk.js.map