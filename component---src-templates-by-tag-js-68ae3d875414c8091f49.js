(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return u});n(76),n(77);var a=n(159),r=n(0),o=n.n(r),c=n(158),l=n(156),i=n(167);t.default=function(e){var t=e.data,n=e.location,r=e.pageContext,u=t.allMarkdownRemark.edges;return o.a.createElement(a.a,{location:n},o.a.createElement("h3",null,"Tag: ",o.a.createElement(i.a,{tag:r.tag})),u.filter(function(e){return!(e.node.frontmatter.tags||[]).includes("_draft")}).map(function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return o.a.createElement("div",{key:t.fields.slug},o.a.createElement("h3",{style:{marginBottom:Object(l.b)(.25)}},o.a.createElement(c.a,{to:t.fields.slug},n)),o.a.createElement("small",null,t.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))}))};var u="3106002869"},156:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"c",function(){return u}),n.d(t,"a",function(){return s});var a=n(165),r=n.n(a),o=n(166),c=n.n(o);c.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete c.a.googleFonts;var l=new r.a(c.a);var i=l.rhythm,u=l.scale,s="#007acc"},157:function(e,t,n){var a;e.exports=(a=n(161))&&a.default||a},158:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),c=n.n(o),l=n(33),i=n.n(l);n.d(t,"a",function(){return i.a});n(157),r.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},159:function(e,t,n){"use strict";n(34);var a=n(160),r=n(0),o=n.n(r),c=n(158),l=n(156),i=n(162),u=function(e){var t=e.title;return o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},o.a.createElement(c.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},t))},s=i.a.ul({listStyleType:"none"}),d=i.a.li(Object.assign({},Object(l.c)(.25),{display:"inline-block","&:after":{margin:Object(l.b)(.25),content:'"\\2014"'},"&:last-child:after":{content:'""'}}));function m(e){var t=e.to,n=e.current,a=e.children;return o.a.createElement(d,null,o.a.createElement(c.a,{style:n===t?{boxShadow:"none"}:null,to:t},a))}t.a=function(e){var t=e.children,n=e.location,r=a.data.site.siteMetadata.title,c=n&&n.pathname;return o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.b)(24),padding:Object(l.b)(1.5)+" "+Object(l.b)(.75)}},o.a.createElement("header",null,o.a.createElement(u,{title:r}),o.a.createElement(s,null,o.a.createElement(m,{current:c,to:"/experiences/"},"About"),o.a.createElement(m,{current:c,to:"/projects/"},"Projects"),o.a.createElement(m,{current:c,to:"/blog/"},"Blog"))),o.a.createElement("main",null,t),o.a.createElement("footer",null))}},160:function(e){e.exports={data:{site:{siteMetadata:{title:"alextren.dev",author:"Alexandre Trendel"}}}}},161:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),l=n(55),i=n(2),u=function(e){var t=e.location,n=i.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},167:function(e,t,n){"use strict";n.d(t,"a",function(){return m}),n.d(t,"b",function(){return f});var a=n(74),r=n.n(a),o=n(162),c=n(156),l=n(0),i=n.n(l),u=n(158),s=o.a.span({border:"1px solid "+c.a,color:c.a,borderRadius:"4px",padding:Object(c.b)(.1)+" "+Object(c.b)(.2)}),d=o.a.div({margin:Object(c.b)(1)+" 0","> *":{marginRight:Object(c.b)(.5)}});function m(e){var t=e.tag,n=r()(e,["tag"]);return i.a.createElement(s,n,i.a.createElement(u.a,{style:{boxShadow:"none"},to:"/tags/"+t.toLowerCase()},t.toLowerCase()))}function f(e){var t=e.tags;return i.a.createElement(d,null,t.map(function(e){return i.a.createElement(m,{key:e,tag:e})}))}}}]);
//# sourceMappingURL=component---src-templates-by-tag-js-68ae3d875414c8091f49.js.map