(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{56:function(e,t,n){},76:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(45),r=n.n(s),o=n(14),l=n.n(o),i=n(18),u=n(16),j=n(25),b=n(8),p=(n(56),n(21)),d=n(93),h=n(95),O=n(17),m=n.n(O),f=n(49),x=n(94),g=(n(76),n(4));function v(e){var t=e.setShowRegister,n=Object(a.useState)(!1),c=Object(b.a)(n,2),s=c[0],r=c[1],o=Object(a.useState)(!1),i=Object(b.a)(o,2),j=i[0],p=i[1],h=Object(a.useRef)(),O=Object(a.useRef)(),f=Object(a.useRef)(),v=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:h.current.value,email:O.current.value,password:f.current.value},e.prev=2,"https://my-travel-api.herokuapp.com/api",e.next=6,m.a.post("https://my-travel-api.herokuapp.com/api/users/register",n);case 6:p(!1),r(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),p(!0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"registerContainer",children:[Object(g.jsxs)("div",{className:"logo",children:[Object(g.jsx)(d.a,{className:"logoIcon"}),Object(g.jsx)("span",{children:"GaryPin"})]}),Object(g.jsxs)("form",{onSubmit:v,children:[Object(g.jsx)("input",{autoFocus:!0,placeholder:"username",ref:h}),Object(g.jsx)("input",{type:"email",placeholder:"email",ref:O}),Object(g.jsx)("input",{type:"password",min:"6",placeholder:"password",ref:f}),Object(g.jsx)("button",{className:"registerBtn",type:"submit",children:"Register"}),s&&Object(g.jsx)("span",{className:"success",children:"Successfull. You can login now!"}),j&&Object(g.jsx)("span",{className:"failure",children:"Something went wrong!"})]}),Object(g.jsx)(x.a,{className:"registerCancel",onClick:function(){return t(!1)}})]})}n(80);function y(e){var t=e.setShowLogin,n=e.setCurrentUsername,c=e.myStorage,s=Object(a.useState)(!1),r=Object(b.a)(s,2),o=r[0],i=r[1],j=Object(a.useRef)(),p=Object(a.useRef)(),h=function(){var e=Object(u.a)(l.a.mark((function e(a){var s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),s={username:j.current.value,password:p.current.value},e.prev=2,"https://my-travel-api.herokuapp.com/api",e.next=6,m.a.post("https://my-travel-api.herokuapp.com/api/users/login",s);case 6:r=e.sent,n(r.data.username),c.setItem("user",r.data.username),t(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),i(!0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"loginContainer",children:[Object(g.jsxs)("div",{className:"logo",children:[Object(g.jsx)(d.a,{className:"logoIcon"}),Object(g.jsx)("span",{children:"GaryPin"})]}),Object(g.jsxs)("form",{onSubmit:h,children:[Object(g.jsx)("input",{autoFocus:!0,placeholder:"username",ref:j}),Object(g.jsx)("input",{type:"password",min:"6",placeholder:"password",ref:p}),Object(g.jsx)("button",{className:"loginBtn",type:"submit",children:"Login"}),o&&Object(g.jsx)("span",{className:"failure",children:"Something went wrong!"})]}),Object(g.jsx)(x.a,{className:"loginCancel",onClick:function(){return t(!1)}})]})}var w=function(){var e=window.localStorage,t=Object(a.useState)(e.getItem("user")),n=Object(b.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)([]),o=Object(b.a)(r,2),O=o[0],x=o[1],w=Object(a.useState)(null),k=Object(b.a)(w,2),S=k[0],N=k[1],C=Object(a.useState)(null),R=Object(b.a)(C,2),I=R[0],D=R[1],z=Object(a.useState)(null),L=Object(b.a)(z,2),B=L[0],F=L[1],A=Object(a.useState)(null),P=Object(b.a)(A,2),_=P[0],J=P[1],T=Object(a.useState)(0),Y=Object(b.a)(T,2),E=Y[0],G=Y[1],Q=Object(a.useState)({latitude:47.040182,longitude:17.071727,zoom:4}),W=Object(b.a)(Q,2),Z=W[0],K=W[1],U=Object(a.useState)(!1),X=Object(b.a)(U,2),q=X[0],H=X[1],M=Object(a.useState)(!1),V=Object(b.a)(M,2),$=V[0],ee=V[1],te=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:c,title:B,desc:_,rating:E,lat:I.lat,long:I.long},e.prev=2,"https://my-travel-api.herokuapp.com/api",e.next=6,m.a.post("https://my-travel-api.herokuapp.com/api/pins",n);case 6:a=e.sent,x([].concat(Object(i.a)(O),[a.data])),D(null),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://my-travel-api.herokuapp.com/api",e.next=4,m.a.get("https://my-travel-api.herokuapp.com/api/pins");case 4:t=e.sent,x(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(g.jsx)("div",{style:{height:"100vh",width:"100%"},children:Object(g.jsxs)(p.c,Object(j.a)(Object(j.a)({},Z),{},{mapboxApiAccessToken:"pk.eyJ1IjoiZ2lyaXNoZ29kYWdlIiwiYSI6ImNrcm15ZDNjODBybXkyb25vNGR1NDJ0aWwifQ.QDPYmKFCIQW9l6_KeHRo2w",width:"100%",height:"100%",transitionDuration:"200",mapStyle:"mapbox://styles/girishgodage/ckrn1wkhp0d8h17ny0qx2t609",onViewportChange:function(e){return K(e)},onDblClick:c&&function(e){var t=Object(b.a)(e.lngLat,2),n=t[0],a=t[1];D({lat:a,long:n})},children:[O.map((function(e){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(p.a,{latitude:e.lat,longitude:e.long,offsetLeft:-3.5*Z.zoom,offsetTop:-7*Z.zoom,children:Object(g.jsx)(d.a,{style:{fontSize:7*Z.zoom,color:c===e.username?"tomato":"slateblue",cursor:"pointer"},onClick:function(){return t=e._id,n=e.lat,a=e.long,N(t),void K(Object(j.a)(Object(j.a)({},Z),{},{latitude:n,longitude:a}));var t,n,a}})},e._id),e._id===S&&Object(g.jsx)(p.b,{latitude:e.lat,longitude:e.long,closeButton:!0,closeOnClick:!1,onClose:function(){return N(null)},anchor:"left",children:Object(g.jsxs)("div",{className:"card",children:[Object(g.jsx)("label",{children:"Place"}),Object(g.jsx)("h4",{className:"place",children:e.title}),Object(g.jsx)("label",{children:"Review"}),Object(g.jsx)("p",{className:"desc",children:e.desc}),Object(g.jsx)("label",{children:"Rating"}),Object(g.jsx)("div",{className:"stars",children:Array(e.rating).fill(Object(g.jsx)(h.a,{className:"star"}))}),Object(g.jsx)("label",{children:"Information"}),Object(g.jsxs)("span",{className:"username",children:["Created by ",Object(g.jsx)("b",{children:e.username})]}),Object(g.jsx)("span",{className:"date",children:Object(f.a)(e.createdAt)})]})},e._id)]})})),I&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(p.a,{latitude:I.lat,longitude:I.long,offsetLeft:-3.5*Z.zoom,offsetTop:-7*Z.zoom,children:Object(g.jsx)(d.a,{style:{fontSize:7*Z.zoom,color:"tomato",cursor:"pointer"}})}),Object(g.jsx)(p.b,{latitude:I.lat,longitude:I.long,closeButton:!0,closeOnClick:!1,onClose:function(){return D(null)},anchor:"left",children:Object(g.jsx)("div",{children:Object(g.jsxs)("form",{onSubmit:te,children:[Object(g.jsx)("label",{children:"Title"}),Object(g.jsx)("input",{placeholder:"Enter a title",autoFocus:!0,onChange:function(e){return F(e.target.value)}}),Object(g.jsx)("label",{children:"Description"}),Object(g.jsx)("textarea",{placeholder:"Say us something about this place.",onChange:function(e){return J(e.target.value)}}),Object(g.jsx)("label",{children:"Rating"}),Object(g.jsxs)("select",{onChange:function(e){return G(e.target.value)},children:[Object(g.jsx)("option",{value:"1",children:"1"}),Object(g.jsx)("option",{value:"2",children:"2"}),Object(g.jsx)("option",{value:"3",children:"3"}),Object(g.jsx)("option",{value:"4",children:"4"}),Object(g.jsx)("option",{value:"5",children:"5"})]}),Object(g.jsx)("button",{type:"submit",className:"submitButton",children:"Add Pin"})]})})})]}),c?Object(g.jsx)("button",{className:"button logout",onClick:function(){s(null),e.removeItem("user")},children:"Log out"}):Object(g.jsxs)("div",{className:"buttons",children:[Object(g.jsx)("button",{className:"button login",onClick:function(){return ee(!0)},children:"Log in"}),Object(g.jsx)("button",{className:"button register",onClick:function(){return H(!0)},children:"Register"})]}),q&&Object(g.jsx)(v,{setShowRegister:H}),$&&Object(g.jsx)(y,{setShowLogin:ee,setCurrentUsername:s,myStorage:e})]}))})};r.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(w,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.0bbcc370.chunk.js.map