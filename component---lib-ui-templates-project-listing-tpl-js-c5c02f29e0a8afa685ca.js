"use strict";(self.webpackChunkbiffud_com=self.webpackChunkbiffud_com||[]).push([[199],{4877:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(7387),l=n(4810),r=n(2532),i=n(6540),o=n(7581),s=n(3021),c=n(8082),m=n(1229),p=n(3510);const d=o.default.ol.withConfig({displayName:"ProjectListingTpl__Projects",componentId:"sc-1idpeta-0"})(["","{display:grid;grid-gap:40px;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));margin-left:auto;margin-right:auto;}","{grid-template-columns:repeat(auto-fill,minmax(380px,1fr));}"],m.C9.tabletUp,m.C9.desktopUp),u=o.default.span.withConfig({displayName:"ProjectListingTpl__Flag",componentId:"sc-1idpeta-1"})(["",";",";color:",";font-weight:800;text-transform:uppercase;"],(0,p.dv)("x"),(0,p.hP)("mlx"),(e=>{let{theme:t}=e;return t.dimmedColor})),h=o.default.li.withConfig({displayName:"ProjectListingTpl__Project",componentId:"sc-1idpeta-2"})(["grid-row-end:span 1;","{",";}","{&:nth-child(even){transform:translateY(30px);}}"],m.C9.phone,(0,p.hP)("mbl"),m.C9.tabletUp),f=o.default.div.withConfig({displayName:"ProjectListingTpl__ProjectCover",componentId:"sc-1idpeta-3"})(["",";border:2px solid ",";position:relative;",";"],(0,p.hP)("mbm"),(e=>{let{theme:t}=e;return t.actionColor}),(e=>{let{$hasPlaceholder:t,theme:n}=e;return t?`\n  .thinking {\n    color: ${n.actionColor};\n    display: inline-block;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    i {\n      font-size: 80px !important;\n    }\n  }`:""})),g=o.default.div.withConfig({displayName:"ProjectListingTpl__ProjectHd",componentId:"sc-1idpeta-4"})(["",";display:flex;flex-direction:row;justify-content:space-between;span{font-weight:800;text-transform:uppercase;}span.code{align-items:center;color:",";display:flex;}span.date{color:",";}"],(0,p.hP)("mbm"),(e=>{let{theme:t}=e;return t.titleColor}),(e=>{let{theme:t}=e;return t.dimmedColor})),E=o.default.div.withConfig({displayName:"ProjectListingTpl__ProjectBd",componentId:"sc-1idpeta-5"})(["align-items:flex-start;display:flex;justify-content:space-between;h2,span{",";color:",";font-weight:800;text-transform:uppercase;}h2{max-width:75%;}span{display:none;}","{span{display:inline-block;}}"],(0,p.dv)("l"),(e=>{let{theme:t}=e;return t.actionColor}),m.C9.desktopUp),C=o.default.div.withConfig({displayName:"ProjectListingTpl__ProjectFt",componentId:"sc-1idpeta-6"})(["color:",";p.summary{",";}"],(e=>{let{theme:t}=e;return t.titleColor}),(0,p.hP)("mts"));let y=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={},n}return(0,a.A)(t,e),t.prototype.render=function(){const{defaultCover:e,projects:t,markdownRemark:n}=this.props.data,a=e.edges[0].node.childImageSharp,{frontmatter:o}=n;return i.createElement(i.Fragment,null,i.createElement(c.mg,Object.assign({},this.props,{title:o.title})),i.createElement(c.PE,this.props,i.createElement(c.Y9,null,i.createElement("h1",{className:"hero"},o.heading),i.createElement("p",{className:"para"},o.subheading)),i.createElement(c.nB,null,i.createElement(d,null,t.edges.map((e=>{let{node:t}=e;const{active:n,cover:o,date:c,code:m,tagline:p,title:d,uid:y}=t.frontmatter;return i.createElement(h,{key:y,as:"li"},i.createElement(s.FA,{as:l.N_,to:`/projects/${y}`},i.createElement(g,null,i.createElement("span",{className:"code"},m," ",n?null:i.createElement(u,null,"(Hibernated)")),i.createElement("span",{className:"date"},c)),i.createElement(f,{$hasPlaceholder:!o},i.createElement(r.G,{image:o?o.childImageSharp.gatsbyImageData:a.gatsbyImageData,alt:d}),o?null:i.createElement("span",{className:"thinking"},i.createElement(s.In,{name:"thinking",size:"h"}))),i.createElement(E,null,i.createElement("h2",{className:"title"},d),i.createElement("span",null,i.createElement(s.In,{name:"arrow-right",text:"Read more…"}))),i.createElement(C,null,i.createElement("p",{className:"summary"},p))))}))))))},t}(i.Component)}}]);
//# sourceMappingURL=component---lib-ui-templates-project-listing-tpl-js-c5c02f29e0a8afa685ca.js.map