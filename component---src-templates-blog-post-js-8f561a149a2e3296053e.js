(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{148:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return s});n(34),n(171);var a=n(0),r=n.n(a),i=n(159),o=n(163),c=n(156),l=n(167);e.default=function(t){var e=t.data,n=t.location,a=(t.pageContext,e.markdownRemark),s=(a.frontmatter.tags||[]).filter(function(t){return!t.startsWith("_")});return r.a.createElement(i.a,{location:n},r.a.createElement(o.a,{title:a.frontmatter.title,description:a.frontmatter.description||a.excerpt}),r.a.createElement("h1",null,a.frontmatter.title),r.a.createElement("p",{style:Object.assign({},Object(c.c)(-.2),{display:"block",marginBottom:Object(c.b)(1),marginTop:Object(c.b)(-1)})},a.frontmatter.date),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.html}}),r.a.createElement("h3",null,"Related"),r.a.createElement(l.b,{tags:s}))};var s="181058792"},156:function(t,e,n){"use strict";n.d(e,"b",function(){return l}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return u});var a=n(165),r=n.n(a),i=n(166),o=n.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var c=new r.a(o.a);var l=c.rhythm,s=c.scale,u="#007acc"},157:function(t,e,n){var a;t.exports=(a=n(161))&&a.default||a},158:function(t,e,n){"use strict";var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(33),l=n.n(c);n.d(e,"a",function(){return l.a});n(157),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},159:function(t,e,n){"use strict";n(34);var a=n(160),r=n(0),i=n.n(r),o=n(158),c=n(156),l=n(162),s=function(t){var e=t.title;return i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},i.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},e))},u=l.a.ul({listStyleType:"none"}),d=l.a.li(Object.assign({},Object(c.c)(.25),{display:"inline-block","&:after":{margin:Object(c.b)(.25),content:'"\\2014"'},"&:last-child:after":{content:'""'}}));function m(t){var e=t.to,n=t.current,a=t.children;return i.a.createElement(d,null,i.a.createElement(o.a,{style:n===e?{boxShadow:"none"}:null,to:e},a))}e.a=function(t){var e=t.children,n=t.location,r=a.data.site.siteMetadata.title,o=n&&n.pathname;return i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.b)(24),padding:Object(c.b)(1.5)+" "+Object(c.b)(.75)}},i.a.createElement("header",null,i.a.createElement(s,{title:r}),i.a.createElement(u,null,i.a.createElement(m,{current:o,to:"/experiences/"},"About"),i.a.createElement(m,{current:o,to:"/projects/"},"Projects"),i.a.createElement(m,{current:o,to:"/blog/"},"Blog"))),i.a.createElement("main",null,e),i.a.createElement("footer",null))}},160:function(t){t.exports={data:{site:{siteMetadata:{title:"alextren.dev",author:"Alexandre Trendel"}}}}},161:function(t,e,n){"use strict";n.r(e);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(55),l=n(2),s=function(t){var e=t.location,n=l.default.getResourcesForPathnameSync(e.pathname);return n?r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},163:function(t,e,n){"use strict";var a=n(164),r=n(0),i=n.n(r),o=n(4),c=n.n(o),l=n(168),s=n.n(l);function u(t){var e=t.description,n=t.lang,r=t.meta,o=t.title,c=a.data.site,l=e||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},e.a=u},164:function(t){t.exports={data:{site:{siteMetadata:{title:"alextren.dev",description:"Personal website",author:"Alexandre Trendel"}}}}},167:function(t,e,n){"use strict";n.d(e,"a",function(){return m}),n.d(e,"b",function(){return p});var a=n(74),r=n.n(a),i=n(162),o=n(156),c=n(0),l=n.n(c),s=n(158),u=i.a.span({border:"1px solid "+o.a,color:o.a,borderRadius:"4px",padding:Object(o.b)(.1)+" "+Object(o.b)(.2)}),d=i.a.div({margin:Object(o.b)(1)+" 0","> *":{marginRight:Object(o.b)(.5)}});function m(t){var e=t.tag,n=r()(t,["tag"]);return l.a.createElement(u,n,l.a.createElement(s.a,{style:{boxShadow:"none"},to:"/tags/"+e.toLowerCase()},e.toLowerCase()))}function p(t){var e=t.tags;return l.a.createElement(d,null,e.map(function(t){return l.a.createElement(m,{key:t,tag:t})}))}},171:function(t,e,n){"use strict";var a=n(11),r=n(14),i=n(78),o="".startsWith;a(a.P+a.F*n(79)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),a=String(t);return o?o.call(e,a,n):e.slice(n,n+a.length)===a}})}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-8f561a149a2e3296053e.js.map