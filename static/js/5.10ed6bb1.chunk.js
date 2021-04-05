(this["webpackJsonpaccount-info"]=this["webpackJsonpaccount-info"]||[]).push([[5],{54:function(t,n,r){"use strict";r.d(n,"a",(function(){return a})),r.d(n,"b",(function(){return s}));var e,c,o=r(10),i=r(11),a=i.a.ul(e||(e=Object(o.a)(["\n    margin: auto;    \n    width: 85%;\n    padding: 0px;\n    @media (max-width: 500px) {\n        width: 100%;\n    }\n"]))),s=i.a.li(c||(c=Object(o.a)(["\n    padding: 10px;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n    list-style-type: none;\n    &:hover {\n        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n    }\n"])))},55:function(t,n,r){"use strict";r.d(n,"a",(function(){return e})),r.d(n,"c",(function(){return c})),r.d(n,"b",(function(){return o})),r.d(n,"e",(function(){return i})),r.d(n,"d",(function(){return a})),r.d(n,"g",(function(){return s})),r.d(n,"f",(function(){return u}));var e=function(t){return t.accounts.accounts},c=function(t){return t.accounts.error},o=function(t){return t.accounts.errorResponse},i=function(t){return t.accounts.transactions},a=function(t){return function(n){return n.accounts.transactions.filter((function(n){return n.id===t}))[0]}},s=function(t){return t.accounts.error},u=function(t){return t.accounts.errorResponse}},56:function(t){t.exports=JSON.parse('{"could_not_load_title":"Could not load information","could_not_load_body":"Please try again later, if the issue persists please reach out to the support team.","network_error_title":"Network Error","network_error_body":"Please check your network connection and try again later."}')},57:function(t,n,r){"use strict";r.d(n,"a",(function(){return i})),r.d(n,"b",(function(){return a}));var e=r(14),c=r(59),o=r.n(c),i=function(){return function(t){o.a.get("accounts.json").then((function(n){var r;t((r=n.data,{type:e.c,accounts:r}))})).catch((function(n){t(function(t){return{type:e.a,error:t}}(n))}))}},a=function(t){return function(n){o.a.get("transactions-".concat(t,".json")).then((function(t){var r;n((r=t.data,{type:e.d,transactions:r}))})).catch((function(t){n(function(t){return{type:e.b,error:t}}(t))}))}}},58:function(t,n,r){"use strict";var e,c=r(10),o=(r(0),r(56)),i=new Set([400,404,405,406,408,500,501,502,503,504]),a=r(54),s=r(11),u=r(2),d=Object(s.a)(a.b)(e||(e=Object(c.a)(["\n  margin: auto;\n  width: 60%;\n  @media (max-width: 700px) {\n    width: 90%;\n  }\n"])));n.a=function(t){var n,r=t.errorStatus,e=(n=r,i.has(n)?{title:o.could_not_load_title,body:o.could_not_load_body}:{title:o.network_error_title,body:o.network_error_body});return Object(u.jsxs)(d,{children:[Object(u.jsx)("h2",{children:e.title}),Object(u.jsx)("h4",{children:e.body})]})}},88:function(t,n,r){"use strict";r.r(n);var e=r(0),c=r(3),o=r(26),i=r(57),a=r(54),s=r(15),u=r(2),d=function(t){return Object(u.jsxs)(a.a,{"data-testid":"transaction-list",children:[Object(u.jsx)("h2",{children:t.listItems[0].from}),t.listItems.map((function(n){return Object(u.jsx)(a.b,{"data-testid":"transaction-list-item",onClick:function(){return t.onClick(n)},children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Transaction Date"}),Object(u.jsx)("h4",{children:Object(s.a)(n.transaction_date)}),Object(u.jsx)("h3",{children:"Transaction Processed"}),Object(u.jsx)("h4",{children:n.transaction_processed?"Yes":"No"}),Object(u.jsx)("h3",{children:"Ammount"}),Object(u.jsx)("h4",{children:n.amount})]})},n.id)}))]})},f=r(58),l=r(55);n.default=Object(c.g)((function(t){var n=Object(o.b)(),r=Object(o.c)(l.e),c=Object(o.c)(l.g),a=Object(o.c)(l.f),s=Object(e.useCallback)((function(t){return n(i.b(t))}),[n]);Object(e.useEffect)((function(){var n=t.location.state.id;s(n)}),[s]);var b=Object(u.jsx)("h1",{children:"Loading Transactions ..."});return c&&(b=Object(u.jsx)(f.a,{errorStatus:a.response.status})),r&&(b=Object(u.jsx)(d,{listItems:r,onClick:function(n){t.history.push({pathname:"/transactionDetail/".concat(n.id),state:n})}})),Object(u.jsx)("div",{children:b})}))}}]);
//# sourceMappingURL=5.10ed6bb1.chunk.js.map