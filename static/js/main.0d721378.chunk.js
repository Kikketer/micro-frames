(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){},108:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);a(65),a(96),a(101);var n=a(0),r=a.n(n),i=a(59),c=a.n(i),o=(a(107),a(12)),l=a(13),s=a(15),u=a(14),m=a(16),p=a(61),h=a(10),d=(a(108),a(60)),b=a.n(d),f=a(17),k=a.n(f),g=a(29),E=a(8),v=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={feedback:""},e.showDetail=e.showDetail.bind(Object(E.a)(e)),e.getToken=e.getToken.bind(Object(E.a)(e)),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"showDetail",value:function(){this.props.app.showDetail({url:"".concat(window.location.origin,"#/detail"),title:"Starter Detail"}),this.setState({feedback:"Show Detail Sent"})}},{key:"getToken",value:function(){var e=this;this.setState({feedback:"Asking for Token..."}),setTimeout(Object(g.a)(k.a.mark(function t(){var a;return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.app.getToken();case 2:a=t.sent,e.setState({feedback:"Got Token ".concat(a.length)});case 4:case"end":return t.stop()}},t)})),1e3)}},{key:"render",value:function(){var e=this.state.feedback;return r.a.createElement("div",{className:"App"},r.a.createElement("p",null,"MicroApp iFrame Test"),r.a.createElement("pre",null,e),r.a.createElement("a",{href:"https://www.bing.com?q=\ud83e\udd2a",target:"_blank",rel:"noopener noreferrer"},"See Something"),r.a.createElement("br",null),r.a.createElement("a",{href:"tel:1-000-000-0000",target:"_top"},"Call Someone"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",style:{width:"80%",padding:8,margin:15}}),r.a.createElement("div",{className:"ActionBar"},r.a.createElement("button",{onClick:this.showDetail},"Show Detail"),r.a.createElement("button",{onClick:this.getToken},"Get Token")))}}]),t}(n.Component),w=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={url:"",feedback:"Loaded"},e.hideDetail=e.hideDetail.bind(Object(E.a)(e)),e.getToken=e.getToken.bind(Object(E.a)(e)),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.toNavigate=4,this.ticker=setInterval(function(){e.setState({feedback:"Navigating in ".concat(e.toNavigate--)})},1e3),setTimeout(function(){clearInterval(e.ticker),e.toNavigate=5,e.setState({url:"https://kikketer.github.io/"})},5e3)}},{key:"hideDetail",value:function(){this.props.app.hideDetail(),this.setState({feedback:"Detail hidden"})}},{key:"getToken",value:function(){var e=this;this.setState({feedback:"Asking for Token..."}),setTimeout(Object(g.a)(k.a.mark(function t(){var a;return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.app.getToken();case 2:a=t.sent,e.setState({feedback:"Got Token ".concat(a.length)});case 4:case"end":return t.stop()}},t)})),1e3)}},{key:"render",value:function(){var e=this.state.feedback;return r.a.createElement("div",{className:"App"},r.a.createElement("h3",null,"Detail"),r.a.createElement("pre",null,e),r.a.createElement("a",{href:"https://www.google.com?q=\ud83e\udd2a",target:"_blank",rel:"noopener noreferrer"},"See Something"),r.a.createElement("br",null),r.a.createElement("a",{href:"tel:1-715-570-2543",target:"_top"},"Call Someone"),r.a.createElement("br",null),r.a.createElement("p",null,"Empty iframe:"),r.a.createElement("iframe",{title:"shinanigans",src:this.state.url}),r.a.createElement("input",{type:"text",style:{width:"80%",padding:8,margin:15}}),r.a.createElement("div",{className:"ActionBar"},r.a.createElement("button",{onClick:this.hideDetail},"Hide Detail"),r.a.createElement("button",{onClick:this.getToken},"Get Token")))}}]),t}(n.Component),j=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).microapp=new b.a({audience:window.location.origin}),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.microapp.initialize()}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",render:function(){return r.a.createElement(h.a,{to:"/summary"})}}),r.a.createElement(h.b,{exact:!0,path:"/summary",render:function(t){return r.a.createElement(v,Object.assign({},t,{app:e.microapp}))}}),r.a.createElement(h.b,{exact:!0,path:"/detail",render:function(t){return r.a.createElement(w,Object.assign({},t,{app:e.microapp}))}}),r.a.createElement(h.b,{render:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"No Route found"))}}))))}}]),t}(n.Component);c.a.render(r.a.createElement(j,null),document.getElementById("root"))},64:function(e,t,a){e.exports=a(119)}},[[64,1,2]]]);
//# sourceMappingURL=main.0d721378.chunk.js.map