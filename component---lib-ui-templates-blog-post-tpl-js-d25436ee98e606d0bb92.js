(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h}),a.d(t,"pageQuery",function(){return f});a(23);var n=a(6),r=a.n(n),i=a(33),s=a.n(i),c=a(1),l=a(0),m=a.n(l),o=a(160),d=a.n(o),u=a(159),p=a(158),h=function(e){function t(t){var a;a=e.call(this,t)||this;var n=300*Math.random();return"undefined"!=typeof window&&(a.tick=a.tick.bind(s()(s()(a))),setInterval(a.tick,3e3)),a.state={readingTime:n},a}r()(t,e);var a=t.prototype;return a.tick=function(){this.setState(function(e){return{readingTime:e.readingTime+15*Math.random()-4}})},a.render=function(){var e=this.props.data.markdownRemark,t=e.frontmatter,a=e.html,n=t.cover,r=t.date,i=t.title;return m.a.createElement(m.a.Fragment,null,m.a.createElement(u.c,Object.assign({},this.props,{title:i})),m.a.createElement(u.d,this.props,m.a.createElement(u.b,null,m.a.createElement("span",{className:"small"},"Reading Time: ",this.state.readingTime.toFixed(2)," seconds"),m.a.createElement("h1",{className:"hero"},i),m.a.createElement("span",{className:"small"},r)),m.a.createElement(u.a,{style:{marginLeft:"auto",marginRight:"auto",maxWidth:"900px"}},n?m.a.createElement(d.a,{fluid:n.childImageSharp.fluid,alt:i}):null,m.a.createElement(p.j,{space:"h"},m.a.createElement(p.c,{dangerouslySetInnerHTML:{__html:a}})))))},t}(l.Component);h.propTypes={data:Object(c.shape)({markdownRemark:c.object.isRequired}).isRequired};var f="4200144033"}}]);
//# sourceMappingURL=component---lib-ui-templates-blog-post-tpl-js-d25436ee98e606d0bb92.js.map