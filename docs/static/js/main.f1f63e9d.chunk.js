(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,n){e.exports=n.p+"static/media/logo.12e5964c.svg"},132:function(e,t,n){e.exports=n(264)},258:function(e,t,n){},262:function(e,t,n){},264:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(9),c=n.n(s),u=n(25),l=n(31),i=n(118),o=n(16),E={alert:{isVisible:!1,message:null}},m={userInput:"",isLoading:!1},p=function(e){return{name:e.name,html_url:e.html_url,description:e.description,updated_at:e.updated_at,homepage:e.homepage,stargazers_count:e.stargazers_count,stargazers_count_formatted:e.stargazers_count.toLocaleString("en-GB"),owner:{login:e.owner.login,avatar_url:e.owner.avatar_url,html_url:e.owner.html_url}}},g=Object(l.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_SEARCH":return Object(o.a)({},e,{alert:Object(o.a)({},e.alert,{isVisible:!1})});case"RECIEVE_NO_SEARCH_RESULTS":case"ERROR_SEARCH":return Object(o.a)({},e,{alert:Object(o.a)({},e.alert,{isVisible:!0,message:t.message})});default:return e}},searchForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_SEARCH_INPUT":return Object(o.a)({},e,{userInput:t.input});case"REQUEST_SEARCH":return Object(o.a)({},e,{isLoading:!0});case"RECIEVE_NO_SEARCH_RESULTS":case"RECIEVE_SEARCH_RESULTS":case"ERROR_SEARCH":return Object(o.a)({},e,{isLoading:!1});default:return e}},searchResults:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECIEVE_SEARCH_RESULTS":return t.results.map(p).sort(function(e,t){return t.stargazers_count-e.stargazers_count});default:return e}}}),h=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,_=Object(l.e)(g,h(Object(l.a)(i.a))),d=n(56),f=n(57),b=n(63),R=n(58),S=n(64),O=n(268),v=n(269),C=n(265),j=O.a.Item,y=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(b.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(r)))).submit=function(e){var t=n.props,a=t.userInput,r=t.onSubmit;e.preventDefault(),r(a)},n}return Object(S.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.userInput,n=e.isLoading,a=e.onChange;return r.a.createElement(O.a,{layout:"inline",onSubmit:this.submit},r.a.createElement(j,null,r.a.createElement(v.a,{placeholder:"Search repositories",value:t,onChange:a})),r.a.createElement(j,null,r.a.createElement(C.a,{type:"primary",loading:n,onClick:this.submit},"Search")))}}]),t}(a.Component);y.defaultProps={userInput:null,isLoading:!1};var w=Object(u.b)(function(e,t){return Object(o.a)({},e.searchForm)},function(e,t){return{onChange:function(t){return e({type:"CHANGE_SEARCH_INPUT",input:t.target.value})},onSubmit:function(t){return e(function(e){return function(t){return t({type:"REQUEST_SEARCH"}),fetch("https://api.github.com/search/repositories?q=".concat(e)).then(function(e){return e.json()},function(e){return{type:"ERROR_SEARCH",message:e.message}}).then(function(e){var n=e.items;n&&n.length>0?t({type:"RECIEVE_SEARCH_RESULTS",results:n}):t({type:"RECIEVE_NO_SEARCH_RESULTS",message:"No search results found!"})})}}(t))}}})(y),A=n(267),I=n(30),L=n(266),H=A.a.Item,N=H.Meta,T=function(e){var t=e.type,n=e.text;return r.a.createElement(a.Fragment,null,r.a.createElement(I.a,{type:t,style:{marginRight:8}}),n)},V=Object(u.b)(function(e){return{isLoading:e.searchForm.isLoading,results:e.searchResults}})(function(e){var t=e.isLoading,n=e.results,s=n.length>0?"Showing ".concat(n.length," results"):null;return r.a.createElement(a.Fragment,null,r.a.createElement(A.a,{header:s,loading:t,itemLayout:"vertical",dataSource:n,renderItem:function(e){return r.a.createElement(H,{actions:[r.a.createElement(T,{type:"star-o",text:e.stargazers_count_formatted})]},r.a.createElement(N,{avatar:r.a.createElement(L.a,{src:e.owner.avatar_url}),title:r.a.createElement("a",{href:e.html_url,rel:"noopener"},e.name," ",r.a.createElement("small",null,"(",e.owner.login,")"))}),e.description)}}))}),U=n(270),z=Object(u.b)(function(e){var t=e.ui.alert;return{isVisible:t.isVisible,message:t.message}})(function(e){var t=e.isVisible,n=e.message;return t?r.a.createElement(U.a,{message:n,showIcon:!0}):null}),k=n(129),F=n.n(k),x=(n(258),function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(R.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App__header"},r.a.createElement("img",{src:F.a,className:"App__logo",alt:"logo"}),r.a.createElement(w,null)),r.a.createElement("main",null,r.a.createElement(z,null),r.a.createElement(V,null)))}}]),t}(a.Component));n(260),n(262);c.a.render(r.a.createElement(u.a,{store:_},r.a.createElement(x,null)),document.getElementById("root"))}},[[132,2,1]]]);
//# sourceMappingURL=main.f1f63e9d.chunk.js.map