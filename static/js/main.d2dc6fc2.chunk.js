(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(t,e,n){t.exports={btn:"FeedbackOptions_btn__ptEqA",btnGood:"FeedbackOptions_btnGood__2uL-p FeedbackOptions_btn__ptEqA",btnNeutral:"FeedbackOptions_btnNeutral__1hp8a FeedbackOptions_btn__ptEqA",btnBad:"FeedbackOptions_btnBad__12spq FeedbackOptions_btn__ptEqA"}},,,function(t,e,n){t.exports={container:"Counter_container__1KZAl",listStat:"Counter_listStat__28893"}},,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),s=n.n(a),i=n(6),o=n.n(i),l=(n(12),n(13),n(3)),r=n(5),b=n.n(r),d=n(2),j=n.n(d),u=function(t){var e=t.onGoodBtn,n=t.onNeutralBtn,a=t.onBadBtn;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{className:j.a.btnGood,onClick:e,children:"Good"}),Object(c.jsx)("button",{className:j.a.btnNeutral,onClick:n,children:"Neutral"}),Object(c.jsx)("button",{className:j.a.btnBad,onClick:a,children:"Bad"})]})},O=function(t){var e=t.good,n=t.neutral,a=t.bad,s=t.total,i=t.percentage;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("li",{className:"itemStat",children:["Good: ",Object(c.jsx)("span",{className:"countStat",children:e})]}),Object(c.jsxs)("li",{className:"itemStat",children:["Neutral: ",Object(c.jsx)("span",{className:"countStat",children:n})]}),Object(c.jsxs)("li",{className:"itemStat",children:["Bad: ",Object(c.jsx)("span",{className:"countStat",children:a})]}),Object(c.jsxs)("li",{className:"itemStat",children:["Total: ",Object(c.jsx)("span",{className:"countStat",children:s})]}),Object(c.jsxs)("li",{className:"itemStat",children:["Positive feedback:",Object(c.jsxs)("span",{className:"countStat",children:[" ",i," %"]})]})]})})};function h(t){var e=t.title,n=t.children;return Object(c.jsxs)("section",{children:["Please leave feedback"===e?Object(c.jsx)("h2",{children:"Please leave feedback"}):Object(c.jsx)("h3",{children:"Statistics"}),n]})}function x(){var t=Object(a.useState)(0),e=Object(l.a)(t,2),n=e[0],s=e[1],i=Object(a.useState)(0),o=Object(l.a)(i,2),r=o[0],d=o[1],j=Object(a.useState)(0),x=Object(l.a)(j,2),p=x[0],m=x[1],_=n+r+p,f=Math.round(100*n/_);return Object(a.useEffect)((function(){console.log("op")}),[n,r,p]),Object(c.jsx)("div",{className:b.a.container,children:Object(c.jsxs)("div",{className:"feedback",children:[Object(c.jsx)(h,{title:"Please leave feedback",children:Object(c.jsx)(u,{onGoodBtn:function(){s((function(t){return t+1}))},onNeutralBtn:function(){d((function(t){return t+1}))},onBadBtn:function(){m((function(t){return t+1}))}})}),Object(c.jsx)(h,{title:"Statistics",children:Object(c.jsx)("ul",{className:b.a.listStat,children:Object(c.jsx)(O,{good:n,neutral:r,bad:p,total:_,percentage:f})})})]})})}var p=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(x,{good:0,neutral:0,bad:0})})};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.d2dc6fc2.chunk.js.map