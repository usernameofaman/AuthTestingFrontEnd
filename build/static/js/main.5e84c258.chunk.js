(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{35:function(A,e,n){},43:function(A,e,n){},44:function(A,e,n){},45:function(A,e,n){},46:function(A,e,n){},47:function(A,e,n){},48:function(A,e,n){"use strict";n.r(e);var t,a,r,i,c,s,o,d=n(0),l=n.n(d),g=n(18),E=n.n(g),p=n(16),u=n(5),C=n(10),j=n.n(C),h=n(15),b=n(19),x=n(23),O=n(13),f=n(3),w=(n(35),n(4)),B=w.a.div(t||(t=Object(f.a)(["\n    width : 100%;\n    border-radius: 8px;\n    background-color: white;\n    height: 40px;\n    line-height: 40px;\n    margin: 0 10px 0 10px;\n    text-align: center;\n    font-weight: 700;\n    color: #939191;\n    cursor: pointer;\n"]))),m=w.a.div(a||(a=Object(f.a)(["\n    width : 93.5%;\n    border-radius: 8px;\n    background-color: #eb5e55;\n    height: 40px;\n    line-height: 40px;\n    padding: 10px 10px 10px 20px;\n    text-align: center;\n    font-weight: 700;\n    color: white;\n    margin-top: 10px;\n    cursor: pointer;\n"]))),Q=n(1),I=w.a.div(r||(r=Object(f.a)(["\npadding-top: 200px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),v=w.a.div(i||(i=Object(f.a)(["\n  width: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\njustify-content: center;\n"]))),D=w.a.div(c||(c=Object(f.a)(["\n  width: 100%;\n  font-size: 40px;\n  font-weight: bold;\n  align-self: center;\n  text-align: center;\n  margin-bottom: 10px;\n"]))),P=w.a.div(s||(s=Object(f.a)(["\n  width: 100%;\n  font-size: 20px;\n  align-self: center;\n  text-align: center;\n  margin-bottom: 40px;\n"]))),Y=w.a.input(o||(o=Object(f.a)(["\n  width: 93%;\n  height: 50px;\n  padding: 10px 10px 10px 20px;\n  outline: none;\n  border: 1.2px solid #e7e3e3;\n  border-radius: 5px;\n  margin-top: 10px;\n"])));var k,y,N,q,S,V=function(){Object(u.f)();var A,e,n=Object(d.useState)(!1),t=Object(O.a)(n,2),a=t[0],r=t[1],i=Object(d.useState)(0),c=Object(O.a)(i,2),s=c[0],o=c[1],l=Object(d.useState)({email:"",firstName:"",lastName:"",password:"",confirmPassword:""}),g=Object(O.a)(l,2),E=g[0],p=g[1],C=function(n){A=n.target.name,console.log(A),e=n.target.value,p(Object(x.a)(Object(x.a)({},E),{},Object(b.a)({},A,e)))};function f(A){return!!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(A)}console.log(E);var w=function(){f(E.email)?o(1):window.alert("Invalid email")},B=function(){var A=Object(h.a)(j.a.mark((function A(e){var n,t,a,i,c,s;return j.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:if(e.preventDefault(),n=E.email,t=E.firstName,a=E.lastName,i=E.password,c=E.confirmPassword,f(n)){A.next=5;break}return window.alert("Invalid email"),A.abrupt("return");case 5:if(i===c){A.next=8;break}return window.alert("Passwords don't match"),A.abrupt("return");case 8:if(""!==n&&""!==t&&""!==a&&""!==i&&""!==c){A.next=11;break}return window.alert("Fill all the details"),A.abrupt("return");case 11:return A.next=13,fetch("https://node-microservice-task.herokuapp.com/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:i,firstName:t,lastName:a})}).then((function(A){return A.json()}));case 13:(s=A.sent).responseData&&s.responseData.error&&window.alert(s.responseData.error),s.responseData&&"success"===s.responseData.status&&r(!0);case 16:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}();return Object(Q.jsx)(Q.Fragment,{children:a?Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsx)(I,{children:Object(Q.jsxs)(v,{children:[Object(Q.jsx)(D,{children:"Thank You"}),Object(Q.jsxs)(P,{style:{color:"#adadad",fontSize:"15px"},children:["We sent an email to ",E.email," ",Object(Q.jsx)("br",{}),"Click confirmation link in the email to verify the account."]}),Object(Q.jsx)(m,{onClick:w,children:"Open Email App & Confirm"})]})})}):Object(Q.jsx)(I,{children:Object(Q.jsxs)(v,{children:[Object(Q.jsx)(D,{children:"Sign Up To Get Started"}),Object(Q.jsx)(P,{children:"Enter your details below"}),Object(Q.jsx)(Y,{type:"email",name:"email",id:"email",autoComplete:"off",placeholder:"Enter Your Email Id",value:E.email,onChange:C,required:!0}),1===s&&Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)("div",{style:{display:"flex",width:"100%"},children:[Object(Q.jsx)(Y,{style:{marginRight:"10px"},type:"text",name:"firstName",id:"firstName",autoComplete:"off",placeholder:"First Name",value:E.firstName,onChange:C,required:!0}),Object(Q.jsx)(Y,{type:"text",name:"lastName",id:"lastName",autoComplete:"off",placeholder:"Last Name",value:E.lastName,onChange:C,required:!0})]}),Object(Q.jsx)(Y,{type:"password",name:"password",id:"password",autoComplete:"off",placeholder:"Password",value:E.password,onChange:C,required:!0}),Object(Q.jsx)(Y,{type:"password",name:"confirmPassword",id:"confirmPassword",autoComplete:"off",placeholder:"Confirm Password",value:E.confirmPassword,onChange:C,required:!0})]}),0===s?Object(Q.jsx)(m,{onClick:w,children:"Sign Up"}):Object(Q.jsx)(m,{onClick:B,children:"Sign Up"})]})})})},z=(n(43),w.a.div(k||(k=Object(f.a)(["\npadding-top: 200px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])))),G=w.a.div(y||(y=Object(f.a)(["\n  width: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\njustify-content: center;\n"]))),T=w.a.div(N||(N=Object(f.a)(["\n  width: 100%;\n  font-size: 40px;\n  font-weight: bold;\n  align-self: center;\n  text-align: center;\n  margin-bottom: 10px;\n"]))),M=w.a.div(q||(q=Object(f.a)(["\n  width: 100%;\n  font-size: 20px;\n  align-self: center;\n  text-align: center;\n  margin-bottom: 40px;\n"]))),R=w.a.input(S||(S=Object(f.a)(["\n  width: 100%;\n  height: 50px;\n  padding: 10px 10px 10px 20px;\n  outline: none;\n  border: 1.2px solid #e7e3e3;\n  border-radius: 5px;\n  margin-top: 10px;\n"])));var X,F,J,H,W,U,L,K,Z=function(){var A=Object(u.f)(),e=Object(d.useState)(""),n=Object(O.a)(e,2),t=n[0],a=n[1],r=Object(d.useState)(""),i=Object(O.a)(r,2),c=i[0],s=i[1],o=function(){var e=Object(h.a)(j.a.mark((function e(n){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),""===t&&window.alert("Enter credentials"),e.next=4,fetch("https://node-microservice-task.herokuapp.com/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:c})}).then((function(A){return A.json()}));case 4:"ok"===(a=e.sent).status?(window.alert("Login Sucessfull"),A.push("/home")):window.alert(a.error);case 6:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}();return Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsx)(z,{children:Object(Q.jsxs)(G,{children:[Object(Q.jsx)(T,{children:"Sign In To Get Started"}),Object(Q.jsx)(M,{children:"Enter your details below"}),Object(Q.jsx)(R,{type:"email",name:"email",id:"email",value:t,onChange:function(A){return a(A.target.value)},placeholder:"Email"}),Object(Q.jsx)(R,{type:"password",name:"email",id:"email",value:c,onChange:function(A){return s(A.target.value)},placeholder:"Your Password"}),Object(Q.jsx)(m,{onClick:o,children:"Sign In"})]})})})},_=(n(44),w.a.div(X||(X=Object(f.a)(["\n  width: 100%;\n"])))),$=w.a.div(F||(F=Object(f.a)(["\n  width: 100%;\n  background-image: url('images/backdrop.jpg');\n  background-size: cover;\n  height: 100vh;\n  padding: 200px 30px 30px 50px;\n  color: #3a3335;\n"]))),AA=w.a.div(J||(J=Object(f.a)(["\n  /* margin-top : 30%; */\n  font-size: 48px;\n  font-weight: 700;\n  width: 500px;\n"]))),eA=w.a.div(H||(H=Object(f.a)(["\n  width: 506px;\n  height: 60px;\n  background-color: white;\n  display: flex;\n  margin-top: 20px;\n"]))),nA=w.a.div(W||(W=Object(f.a)(["\n  /* width: 60px; */\n  padding: 10px;\n  color: #868686;\n    font-size: 14px;\n    display: flex;\n    flex-direction: column;\n    border-top: 1px solid #939191;\n    border-left: 1px solid #939191;\n    border-bottom: 1px solid #939191;\n\n"]))),tA=w.a.select(U||(U=Object(f.a)(["\n    outline: none;\n    border: none;\n    width: 200px;\n    margin-top: 5px;\n"]))),aA=w.a.input(L||(L=Object(f.a)(["\noutline: none;\n    border: none;\n    width: 90px;\n    margin-top: 5px;\n"]))),rA=w.a.img(K||(K=Object(f.a)(["\n    width : 40px;\n    height: 40px;\n    border-radius: 5px;\n"])));var iA=function(){return Object(Q.jsx)(_,{children:Object(Q.jsxs)($,{children:[Object(Q.jsx)(AA,{children:"Find homes or hotels in a few clicks"}),Object(Q.jsxs)(eA,{children:[Object(Q.jsxs)(nA,{children:[Object(Q.jsx)("span",{style:{marginLeft:"4px"},children:"Location"}),Object(Q.jsx)(tA,{value:"Philedelphia",children:Object(Q.jsx)("option",{children:"Philedelphia"})})]}),Object(Q.jsxs)(nA,{children:[Object(Q.jsx)("span",{style:{marginLeft:"4px"},children:"Check In"}),Object(Q.jsx)(aA,{type:"date"})]}),Object(Q.jsxs)(nA,{children:[Object(Q.jsx)("span",{style:{marginLeft:"4px"},children:"Check In"}),Object(Q.jsx)(aA,{type:"date"})]}),Object(Q.jsx)(nA,{style:{borderRight:"1px solid #939191"},children:Object(Q.jsx)(rA,{src:"/images/download.png"})})]})]})})};n(45);var cA,sA,oA,dA=function(){return new Promise(function(){var A=Object(h.a)(j.a.mark((function A(e,n){return j.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,fetch("/testAPI").then((function(A){return A.json()}));case 2:"Successful"===A.sent.status?e("API Fetch is Successful"):n("Could not fetch API");case 4:case"end":return A.stop()}}),A)})));return function(e,n){return A.apply(this,arguments)}}()).then((function(A){console.log(A)})).catch((function(A){console.log(A)})),Object(Q.jsx)(Q.Fragment,{})},lA=(n(46),n(17)),gA=function(){var A=Object(lA.c)((function(A){return A.changeNumber})),e=Object(lA.b)();return Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsxs)("div",{className:"quantity",children:[Object(Q.jsxs)("div",{className:"cart-containter",children:[Object(Q.jsx)("img",{id:"cart",src:"data:image/png;base64,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",alt:""}),Object(Q.jsx)("input",{id:"count",type:"text",className:"quantity_input",value:A})]}),Object(Q.jsx)("h1",{children:"Welcome To Redux"}),Object(Q.jsx)("p",{children:"This is a simple example of Redux showing cart number of items"}),Object(Q.jsxs)("div",{className:"buttons",children:[Object(Q.jsx)("h3",{children:"Oneplus 7T Pro"}),Object(Q.jsx)("a",{href:"#profile",onClick:function(){return e({type:"DECREMENT"})},className:"quantity_minus",children:Object(Q.jsx)("img",{src:"data:image/png;base64,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",alt:""})}),Object(Q.jsx)("a",{href:"#Nothing/",onClick:function(){return e({type:"INCREMENT"})},className:"quantity_minus",children:Object(Q.jsx)("img",{src:"data:image/png;base64,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",alt:""})})]})]})})},EA=(n(47),w.a.div(cA||(cA=Object(f.a)(["\n    width : 100%;\n    height : 60px;\n    background: transparent;\n    display: flex;\n    justify-content: space-between;\n    position: absolute;\n    padding: 10px 0 0 0 ;\n"])))),pA=w.a.img(sA||(sA=Object(f.a)(["\n    width : 40px;\n    height: 40px;\n    margin-left: 50px;\n    border-radius: 5px;\n"]))),uA=w.a.div(oA||(oA=Object(f.a)(["\n    width: 300px;\n    padding: 10px;\n    justify-content: space-between;\n    display: flex;\n    margin-right: 30px;\n"])));var CA=function(){return console.log(),Object(Q.jsx)(Q.Fragment,{children:Object(Q.jsxs)(EA,{children:[Object(Q.jsx)(pA,{src:"/images/house.jpg"}),Object(Q.jsxs)(uA,{children:[!window.location.pathname.includes("Register")&&Object(Q.jsx)("a",{href:"Register",children:Object(Q.jsx)(B,{children:"Sign Up"})}),!window.location.pathname.includes("signin")&&Object(Q.jsx)("a",{href:"signin",children:Object(Q.jsx)(B,{children:"Sign In"})})]})]})})};var jA=function(){return Object(Q.jsxs)(p.a,{children:[Object(Q.jsx)(CA,{}),Object(Q.jsxs)(u.c,{children:[Object(Q.jsx)(u.a,{exact:!0,path:"/register",component:V}),Object(Q.jsx)(u.a,{exact:!0,path:"/testAPI",component:dA}),Object(Q.jsx)(u.a,{path:"/signin",component:Z}),Object(Q.jsx)(u.a,{path:"/Home",component:iA}),Object(Q.jsx)(u.a,{path:"/Redux",component:gA})]})]})},hA=n(20),bA=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"INCREMENT":return A+1;case"DECREMENT":return 0===A?A:A-1;default:return A}},xA=Object(hA.a)({changeNumber:bA}),OA=Object(hA.b)(xA,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());OA.subscribe((function(){return console.log(OA.getState())})),E.a.render(Object(Q.jsx)(l.a.StrictMode,{children:Object(Q.jsx)(lA.a,{store:OA,children:Object(Q.jsx)(jA,{})})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.5e84c258.chunk.js.map