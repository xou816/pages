(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{149:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return d});n(170),n(182),n(35),n(184),n(34);var a=n(161),r=n(0),i=n.n(r),o=n(164),c=n(171),l=n(160),u=n(157),s=l.a.blockquote(Object.assign({},Object(u.c)(.02)));function m(t){return t.toString().padStart(2,"0")}function g(t){var e=t.github.repository.ref.target,n=new Date(e.committedDate),a=m(n.getDate())+"/"+m(n.getMonth())+"/"+n.getFullYear();return i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,"Latest activity on Github"),i.a.createElement("a",{href:e.url},a),i.a.createElement(s,null,"(",e.abbreviatedOid,") ",e.author.name,": ",e.message))}e.default=function(t){var e=t.data,n=t.location,r=(t.pageContext,e.github),l=e.details;return i.a.createElement(a.a,{location:n},i.a.createElement(o.a,{title:l.frontmatter.name}),i.a.createElement(c.a,Object.assign({},l.frontmatter,{description:l.html,fullDesc:!0})),r.repository&&i.a.createElement(g,{github:r}))};var d="2529950561"},157:function(t,e,n){"use strict";n.d(e,"b",function(){return l}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return s});var a=n(167),r=n.n(a),i=n(168),o=n.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var c=new r.a(o.a);var l=c.rhythm,u=c.scale,s="#007acc"},158:function(t,e,n){"use strict";var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(33),l=n.n(c);n.d(e,"a",function(){return l.a});n(159),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},159:function(t,e,n){var a;t.exports=(a=n(163))&&a.default||a},161:function(t,e,n){"use strict";n(34);var a=n(162),r=n(0),i=n.n(r),o=n(158),c=n(157),l=n(160),u=l.a.h3({fontFamily:"Montserrat, sans-serif",marginTop:0}),s=l.a.footer({color:"#999"}),m=l.a.ul({listStyleType:"none"}),g=l.a.li(Object.assign({},Object(c.c)(.25),{display:"inline-block","&:after":{margin:Object(c.b)(.25),content:'"\\2014"'},"&:last-child:after":{content:'""'}}));function d(t){var e=t.to,n=t.current,a=t.children;return i.a.createElement(g,null,i.a.createElement(o.a,{style:n===e?{boxShadow:"none"}:null,to:e},a))}e.a=function(t){var e=t.children,n=t.location,r=a.data.site.siteMetadata.title,l=n&&n.pathname;return i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.b)(24),padding:Object(c.b)(1.5)+" "+Object(c.b)(.75)}},i.a.createElement("header",null,i.a.createElement(u,null,i.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),i.a.createElement(m,null,i.a.createElement(d,{current:l,to:"/experiences/"},"About"),i.a.createElement(d,{current:l,to:"/projects/"},"Projects"),i.a.createElement(d,{current:l,to:"/blog/"},"Stuff"))),i.a.createElement("main",null,e),i.a.createElement(s,null,i.a.createElement("small",null,"Contact: trendel.alexandre[at]gmail.com")))}},162:function(t){t.exports={data:{site:{siteMetadata:{title:"alextren.dev",author:"Alexandre Trendel"}}}}},163:function(t,e,n){"use strict";n.r(e);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(55),l=n(2),u=function(t){var e=t.location,n=l.default.getResourcesForPathnameSync(e.pathname);return n?r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json)):null};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},164:function(t,e,n){"use strict";var a=n(165),r=n(0),i=n.n(r),o=n(4),c=n.n(o),l=n(169),u=n.n(l);function s(t){var e=t.description,n=t.lang,r=t.meta,o=t.title,c=a.data.site,l=e||c.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(r)})}s.defaultProps={lang:"en",meta:[],description:""},s.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},e.a=s},165:function(t){t.exports={data:{site:{siteMetadata:{title:"alextren.dev",description:"Personal website",author:"Alexandre Trendel"}}}}},166:function(t,e,n){"use strict";n.d(e,"a",function(){return g}),n.d(e,"b",function(){return d});var a=n(74),r=n.n(a),i=n(160),o=n(157),c=n(0),l=n.n(c),u=n(158),s=i.a.span({border:"1px solid "+o.a,color:o.a,borderRadius:"4px",padding:Object(o.b)(.1)+" "+Object(o.b)(.2)}),m=i.a.div({margin:Object(o.b)(1)+" 0","> *":{marginRight:Object(o.b)(.5)}});function g(t){var e=t.tag,n=r()(t,["tag"]);return l.a.createElement(s,n,l.a.createElement(u.a,{style:{boxShadow:"none"},to:"/tags/"+e.toLowerCase()},e.toLowerCase()))}function d(t){var e=t.label,n=t.tags;return l.a.createElement(m,null,e,n.map(function(t){return l.a.createElement(g,{key:t,tag:t})}))}},170:function(t,e,n){var a=n(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(18)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},171:function(t,e,n){"use strict";n(170);var a=n(166),r=n(0),i=n.n(r),o=n(160),c=n(157),l=n(158),u=o.a.h1({marginBottom:Object(c.b)(1/3)}),s=o.a.h3({marginBottom:Object(c.b)(1/3)});e.a=function(t){var e=t.title,n=t.slug,r=t.url,o=t.repository,c=t.description,m=t.tags,g=t.fullDesc;return i.a.createElement("div",null,g?i.a.createElement(u,null,e):i.a.createElement(s,null,e),i.a.createElement("p",null,r&&i.a.createElement(i.a.Fragment,null,i.a.createElement("a",{href:r},"View")," — "),!g&&n&&i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{to:n},"Learn more")," — "),i.a.createElement("a",{href:"https://github.com/"+o.owner+"/"+o.name},"Github")),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}}),i.a.createElement("small",null,i.a.createElement(a.b,{tags:m})))}},182:function(t,e,n){"use strict";n(183);var a=n(5),r=n(75),i=n(18),o=/./.toString,c=function(t){n(15)(RegExp.prototype,"toString",t,!0)};n(20)(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?c(function(){var t=a(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?r.call(t):void 0)}):"toString"!=o.name&&c(function(){return o.call(this)})},183:function(t,e,n){n(18)&&"g"!=/./g.flags&&n(25).f(RegExp.prototype,"flags",{configurable:!0,get:n(75)})},184:function(t,e,n){"use strict";var a=n(11),r=n(185),i=n(77),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);a(a.P+a.F*o,"String",{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},185:function(t,e,n){var a=n(14),r=n(186),i=n(19);t.exports=function(t,e,n,o){var c=String(i(t)),l=c.length,u=void 0===n?" ":String(n),s=a(e);if(s<=l||""==u)return c;var m=s-l,g=r.call(u,Math.ceil(m/u.length));return g.length>m&&(g=g.slice(0,m)),o?g+c:c+g}},186:function(t,e,n){"use strict";var a=n(26),r=n(19);t.exports=function(t){var e=String(r(this)),n="",i=a(t);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}}}]);
//# sourceMappingURL=component---src-templates-project-js-5b36275ae4f4c3132501.js.map