(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{143:function(e,t,r){"use strict";(function(e){function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=n(o),l=n(r(5)),a=r(46),s=r(117),u=n(r(38)),c=n(r(50)),d=n(r(39)),p=n(r(174)),f=n(r(36)),h=r(47),b=n(r(173)),m=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},v=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},g=function(e){var t=e.node,r=e.style,n=e.handlers,o=e.theme;return r.r<=0?null:i.createElement("g",{transform:"translate("+r.x+","+r.y+")"},i.createElement("circle",y({r:r.r},n,{fill:r.fill?r.fill:r.color,stroke:r.borderColor,strokeWidth:r.borderWidth})),!1!==t.label&&i.createElement("text",{textAnchor:"middle",alignmentBaseline:"central",style:y({},o.labels.text,{fill:r.labelTextColor,pointerEvents:"none"})},t.label))};g.propTypes={node:l.object.isRequired,style:l.shape({r:l.number.isRequired,x:l.number.isRequired,y:l.number.isRequired,color:l.string.isRequired,fill:l.string,borderWidth:l.number.isRequired,borderColor:l.string.isRequired,labelTextColor:l.string.isRequired}).isRequired,handlers:l.object.isRequired,theme:a.themePropType.isRequired};var x=function(e){var t=e.node,r=e.style,n=e.handlers;return r.r<=0?null:i.createElement("div",y({id:(t.data&&t.data.id?t.data.id:t.id).replace(/[^\w]/gi,"-"),style:{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",background:r.color,color:r.labelTextColor,borderWidth:r.borderWidth,borderColor:r.borderColor,top:r.y-r.r,left:r.x-r.r,width:2*r.r,height:2*r.r,borderStyle:"solid",borderRadius:r.r}},n),!1!==t.label&&t.label)};x.propTypes={node:l.object.isRequired,style:l.shape({r:l.number.isRequired,x:l.number.isRequired,y:l.number.isRequired,color:l.string.isRequired,fill:l.string,borderWidth:l.number.isRequired,borderColor:l.string.isRequired,labelTextColor:l.string.isRequired}).isRequired,handlers:l.object.isRequired};var C={identity:l.oneOfType([l.string,l.func]).isRequired,leavesOnly:l.bool.isRequired,padding:l.number.isRequired,borderWidth:l.number.isRequired,borderColor:l.any.isRequired,enableLabel:l.bool.isRequired,label:l.oneOfType([l.string,l.func]).isRequired,labelFormat:l.string,labelTextColor:l.any.isRequired,labelSkipRadius:l.number.isRequired,isInteractive:l.bool.isRequired,onClick:l.func.isRequired,isZoomable:l.bool.isRequired,tooltipFormat:l.oneOfType([l.func,l.string]),tooltip:l.func},E=y({},C,{nodeComponent:l.func.isRequired},a.defsPropTypes),w=y({},C,{nodeComponent:l.func.isRequired}),R=y({},C,{pixelRatio:l.number.isRequired}),T={identity:"id",leavesOnly:!1,padding:1,borderWidth:0,borderColor:"inherit",enableLabel:!0,label:"id",labelTextColor:"inherit:darker(1)",labelSkipRadius:8,isInteractive:!0,onClick:a.noop,isZoomable:!0},B=y({},T,{nodeComponent:g,defs:[],fill:[]}),q=y({},T,{nodeComponent:x}),P=y({},T,{pixelRatio:e.window&&e.window.devicePixelRatio?e.window.devicePixelRatio:1}),k=Object.freeze({BubblePropTypes:E,BubbleHtmlPropTypes:w,BubbleCanvasPropTypes:R,BubbleDefaultProps:B,BubbleHtmlDefaultProps:q,BubbleCanvasDefaultProps:P}),O=[a.withHierarchy(),a.withDimensions(),a.withTheme(),a.withColors({defaultColorBy:"depth"}),d(["width","height","padding"],function(e){var t=e.width,r=e.height,n=e.padding;return{pack:s.pack().size([t,r]).padding(n)}}),d(["identity"],function(e){var t=e.identity;return{getIdentity:a.getAccessorFor(t)}}),d(["borderColor"],function(e){var t=e.borderColor;return{getBorderColor:a.getInheritedColorGenerator(t)}}),d(["label","labelFormat"],function(e){var t=e.label,r=e.labelFormat;return{getLabel:a.getLabelGenerator(t,r)}}),d(["labelTextColor"],function(e){var t=e.labelTextColor;return{getLabelTextColor:a.getInheritedColorGenerator(t)}}),p(function(e){var t=e.currentNodePath;return{currentNodePath:void 0===t?null:t}},{zoomToNode:function(e){var t=e.currentNodePath;return function(e){return e===t?{currentNodePath:null}:{currentNodePath:e}}}}),d(["root","pack","leavesOnly","getIdentity","getColor"],function(e){return{nodes:function(e){var t=e.root,r=e.pack,n=e.leavesOnly,o=e.getIdentity,i=e.getColor;t.each(function(e){e.id=o(e.data),e.path=function(e,t){return e.ancestors().map(function(e){return t(e.data)}).join(".")}(e,o)}),r(t);var l=n?t.leaves():t.descendants();return l=l.map(function(e){return e.color=i(y({},e.data,{depth:e.depth})),e.label=!1,e})}({root:e.root,pack:e.pack,leavesOnly:e.leavesOnly,getIdentity:e.getIdentity,getColor:e.getColor})}}),d(["enableLabel","nodes","getLabel","labelSkipRadius"],function(e){var t=e.enableLabel,r=e.nodes,n=e.getLabel,o=e.labelSkipRadius;if(t)return{nodes:r.map(function(e){return 0!==e.height||o>0&&e.r<o?e:y({},e,{label:n(e)})})}}),d(["nodes","isZoomable","currentNodePath"],function(e){var t=e.nodes,r=e.isZoomable,n=e.currentNodePath,o=e.width,i=e.height;if(n&&r)return{nodes:function(e,t,r,n){var o=e.find(function(e){return e.path===t});if(!o)return e;var i=Math.min(r,n)/(2*o.r),l=r/2-o.x*i,a=n/2-o.y*i;return e.map(function(e){return y({},e,{r:e.r*i,x:e.x*i+l,y:e.y*i+a})})}(t,n,o,i)}})],I=[d(["nodes","defs","fill"],function(e){var t=e.nodes,r=e.defs,n=e.fill;return{defs:a.bindDefs(r,t,n,{targetKey:"fill"})}})],S=function(e){var t=k[e.displayName+"PropTypes"],r=k[e.displayName+"DefaultProps"];switch(e.propTypes=t,e.displayName){case"Bubble":return u.apply(void 0,[c(r)].concat(O,I,[a.withMotion(),f]))(e);case"BubbleHtml":return u.apply(void 0,[c(r)].concat(O,[a.withMotion(),f]))(e);case"BubbleCanvas":return u.apply(void 0,[c(r)].concat(O,[f]))(e)}return e},W=function(e){var t=e.data;return y({scale:0,r:0,x:t.x,y:t.y},a.colorMotionSpring(t.color))},N=function(e){return function(t){var r=t.data;return y({scale:h.spring(0,e),r:h.spring(0,e),x:h.spring(r.x,e),y:h.spring(r.y,e)},a.colorMotionSpring(r.color,e))}},L=function(e,t){var r=t.isInteractive,n=t.onClick,o=t.showTooltip,l=t.hideTooltip,s=t.isZoomable,u=t.zoomToNode,c=t.theme,d=t.tooltipFormat,p=t.tooltip;if(!r)return{};var f=function(t){o(i.createElement(a.BasicTooltip,{id:e.id,value:e.value,enableChip:!0,color:e.color,theme:c,format:d,renderContent:"function"==typeof p?p.bind(null,y({node:e},e)):null}),t)};return{onMouseEnter:f,onMouseMove:f,onMouseLeave:l,onClick:s?function(t){n(e,t),u(e.path)}:function(t){n(e,t)}}},j=function(e){var t=e.nodes,r=e.nodeComponent,n=e.margin,o=e.outerWidth,l=e.outerHeight,s=e.theme,u=e.borderWidth,c=e.getBorderColor,d=e.defs,p=e.getLabelTextColor,f=e.animate,m=e.motionStiffness,v=e.motionDamping,g=e.isInteractive,x=e.onClick,C=e.tooltipFormat,E=e.tooltip,w=e.isZoomable,R=e.zoomToNode,T={stiffness:m,damping:v},B=function(e,t,r){return L(e,{isInteractive:g,onClick:x,showTooltip:t,hideTooltip:r,isZoomable:w,zoomToNode:R,theme:s,tooltipFormat:C,tooltip:E})};return i.createElement(a.Container,{isInteractive:g,theme:s},function(e){var m=e.showTooltip,v=e.hideTooltip;return i.createElement(a.SvgWrapper,{width:o,height:l,margin:n,defs:d,theme:s},!f&&i.createElement("g",null,t.map(function(e){return i.createElement(r,{key:e.path,node:e,style:y({},b(e,["scale","r","x","y","color"]),{fill:e.fill,borderWidth:u,borderColor:c(e),labelTextColor:p(e)}),handlers:B(e,m,v),theme:s})})),f&&i.createElement(h.TransitionMotion,{willEnter:W,willLeave:N(T),styles:t.map(function(e){return{key:e.path,data:e,style:y({scale:h.spring(1,T),r:h.spring(e.r,T),x:h.spring(e.x,T),y:h.spring(e.y,T),opacity:h.spring(1,T)},a.colorMotionSpring(e.color,T))}})},function(e){return i.createElement("g",null,e.map(function(e){var t=e.style,n=e.data;return t.color=a.getInterpolatedColor(t),i.createElement(r,{key:n.path,node:n,style:y({},t,{fill:n.fill,borderWidth:u,borderColor:c(t),labelTextColor:p(t)}),handlers:B(n,m,v),theme:s})}))}))})};j.displayName="Bubble";var _=S(j);_.displayName="Bubble";var M=function(e){var t=e.nodes,r=e.nodeComponent,n=e.margin,o=e.outerWidth,l=e.outerHeight,s=e.theme,u=e.borderWidth,c=e.getBorderColor,d=e.getLabelTextColor,p=e.animate,f=e.motionStiffness,m=e.motionDamping,v=e.isInteractive,g=e.onClick,x=e.isZoomable,C=e.zoomToNode,E=e.tooltipFormat,w=e.tooltip,R={stiffness:f,damping:m},T=function(e,t,r){return L(e,{isInteractive:v,onClick:g,showTooltip:t,hideTooltip:r,isZoomable:x,zoomToNode:C,theme:s,tooltipFormat:E,tooltip:w})};return i.createElement(a.Container,{isInteractive:v,theme:s},function(e){var s=e.showTooltip,f=e.hideTooltip;return i.createElement("div",{style:{position:"relative",width:o,height:l}},!p&&i.createElement("div",{style:{position:"absolute",top:n.top,left:n.left}},t.map(function(e){return i.createElement(r,{key:e.path,node:e,style:y({},b(e,["scale","r","x","y","color"]),{borderWidth:u,borderColor:c(e),labelTextColor:d(e)}),handlers:T(e,s,f)})})),p&&i.createElement(h.TransitionMotion,{willEnter:W,willLeave:N(R),styles:t.map(function(e){return{key:e.path,data:e,style:y({scale:h.spring(1,R),r:h.spring(e.r,R),x:h.spring(e.x,R),y:h.spring(e.y,R),opacity:h.spring(1,R)},a.colorMotionSpring(e.color,R))}})},function(e){return i.createElement("div",{style:{position:"absolute",top:n.top,left:n.left}},e.map(function(e){var t=e.style,n=e.data;return t.color=a.getInterpolatedColor(t),i.createElement(r,{key:n.path,node:n,style:y({},t,{borderWidth:u,borderColor:c(t),labelTextColor:d(t)}),handlers:T(n,s,f)})}))}))})};M.displayName="BubbleHtml";var D=S(M);D.displayName="BubbleHtml";var H=function(e){function t(){return m(this,t),v(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this.ctx=this.surface.getContext("2d"),this.draw(this.props)},t.prototype.componentDidUpdate=function(){this.ctx=this.surface.getContext("2d"),this.draw(this.props)},t.prototype.draw=function(e){var t=this,r=e.nodes,n=e.pixelRatio,o=e.margin,i=e.outerWidth,l=e.outerHeight,a=e.theme,s=e.borderWidth,u=e.getBorderColor,c=e.enableLabel,d=e.getLabel,p=e.labelSkipRadius,f=e.getLabelTextColor;this.surface.width=i*n,this.surface.height=l*n,this.ctx.scale(n,n),this.ctx.fillStyle=a.background,this.ctx.fillRect(0,0,i,l),this.ctx.translate(o.left,o.top),r.forEach(function(e){t.ctx.save(),s>0&&(t.ctx.strokeStyle=u(e),t.ctx.lineWidth=s),t.ctx.beginPath(),t.ctx.arc(e.x,e.y,e.r,0,2*Math.PI),t.ctx.fillStyle=e.color,t.ctx.fill(),s>0&&t.ctx.stroke()}),c&&(this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.font=a.labels.text.fontSize+"px sans-serif",r.filter(function(e){return e.r>p}).forEach(function(e){var r=d(e),n=f(e);t.ctx.fillStyle=n,t.ctx.fillText(r,e.x,e.y)}))},t.prototype.render=function(){var e=this,t=this.props,r=t.outerWidth,n=t.outerHeight,o=t.pixelRatio,l=t.isInteractive,s=t.theme;return i.createElement(a.Container,{isInteractive:l,theme:s},function(){return i.createElement("canvas",{ref:function(t){e.surface=t},width:r*o,height:n*o,style:{width:r,height:n}})})},t}(o.Component);H.displayName="BubbleCanvas";var Z=S(H);Z.displayName="BubbleCanvas";t.Bubble=_,t.ResponsiveBubble=function(e){return i.createElement(a.ResponsiveWrapper,null,function(t){var r=t.width,n=t.height;return i.createElement(_,y({width:r,height:n},e))})},t.BubbleHtml=D,t.ResponsiveBubbleHtml=function(e){return i.createElement(a.ResponsiveWrapper,null,function(t){var r=t.width,n=t.height;return i.createElement(D,y({width:r,height:n},e))})},t.BubbleCanvas=Z,t.ResponsiveBubbleCanvas=function(e){return i.createElement(a.ResponsiveWrapper,null,function(t){var r=t.width,n=t.height;return i.createElement(Z,y({width:r,height:n},e))})},t.BubblePropTypes=E,t.BubbleHtmlPropTypes=w,t.BubbleCanvasPropTypes=R,t.BubbleDefaultProps=B,t.BubbleHtmlDefaultProps=q,t.BubbleCanvasDefaultProps=P}).call(this,r(22))},174:function(e,t,r){"use strict";t.__esModule=!0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(0),i=(a(r(17)),a(r(25)),a(r(101))),l=a(r(81));function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.default=function(e,t){return function(r){var a=(0,o.createFactory)(r),u=function(e){function t(){var r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),l=0;l<o;l++)i[l]=arguments[l];return r=n=s(this,e.call.apply(e,[this].concat(i))),c.call(n),s(n,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e,t){var r=e!==this.props,n=!(0,i.default)(t,this.state);return r||n},t.prototype.render=function(){return a(n({},this.props,this.state,this.stateUpdaters))},t}(o.Component),c=function(){var r=this;this.state="function"==typeof e?e(this.props):e,this.stateUpdaters=(0,l.default)(t,function(e){return function(t){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];t&&"function"==typeof t.persist&&t.persist(),r.setState(function(r,n){return e(r,n).apply(void 0,[t].concat(o))})}})};return u}}},29:function(e,t,r){e.exports=r(143)},491:function(e,t,r){__NEXT_REGISTER_PAGE("/bubbles",function(){return e.exports=r(530),{page:e.exports.default}})},530:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),i=r(19),l=r(29),a=function(e,t){for(var r=[],n=0;n<e;n++)r.push({name:n.toString(),color:t,loc:1});return r},s=a(1256,"blue");s[0].children=a(12,"white");var u=a(178,"#fc9550");u[0].children=a(1,"white");var c=a(1251,"#f96d85");c[0].children=a(12,"white");var d={children:[{name:"Bubble1",children:s},{name:"Bubble2",children:u},{name:"Bubble3",children:c}]},p=function(){return o.a.createElement(l.ResponsiveBubble,{root:d,margin:{top:20,right:20,bottom:20,left:20},identity:"name",value:"loc",colors:"nivo",colorBy:function(e){return e.color},enableLabel:!0,isInteractive:!0,isZoomable:!1,padding:6,leavesOnly:!0,labelTextColor:"inherit:darker(0.8)",borderWidth:2,animate:!0,motionStiffness:90,motionDamping:12})},f={name:"main",children:[{name:"Publications",loc:423,color:"#942963"},{name:"Projets",loc:398,color:"#30c378"},{name:"Brevets",loc:177,color:"#f64a4a"},{name:"Thèses",loc:83,color:"#f68d4a"}]},h=function(){return o.a.createElement(l.ResponsiveBubble,{root:f,margin:{top:20,right:20,bottom:20,left:20},identity:"name",value:"loc",colorBy:function(e){return e.color},enableLabel:!0,isInteractive:!0,isZoomable:!1,padding:15,leavesOnly:!0,label:function(e){return"".concat(e.id,": ").concat(e.value)},labelTextColor:"inherit:darker(1)",borderWidth:2,animate:!0,motionStiffness:90,motionDamping:12})},b=function(e,t){for(var r=[],n=0;n<e;n++)r.push({name:n.toString(),loc:n,color:n%3==0?"#fc9550":t});return r},m=b(32,"blue"),y=b(8,"#ffd100");b(1200)[0].children=b(12);var v={name:"main",children:[{name:"children1",children:m,colors:"blue"},{name:"children2",children:y,color:"yellow"}]},g=function(){return o.a.createElement(l.ResponsiveBubble,{root:v,margin:{top:20,right:20,bottom:20,left:20},identity:"name",value:"loc",colorBy:function(e){return e.color},enableLabel:!1,isInteractive:!0,isZoomable:!1,padding:15,leavesOnly:!0,labelTextColor:"inherit:darker(0.8)",borderWidth:2,animate:!0,motionStiffness:90,motionDamping:12})};t.default=function(){return o.a.createElement(i.a,null,o.a.createElement("h1",null,"Bulles"),o.a.createElement("div",{style:{height:"600px"}},o.a.createElement("h2",null," Nombre de productions "),o.a.createElement(p,null)),o.a.createElement("strong",null," Remarques : "),o.a.createElement("ul",null,o.a.createElement("li",null,"Les cercles ne sont pas parfaits"),o.a.createElement("li",null,'Ils sont contenus dans une "bulles" plus grandes et ne peuvent pas être horizontalisé'),o.a.createElement("li",null,"Pas sur de pouvoir mettre la légende bien comme il faut")),o.a.createElement("div",{style:{height:"500px"}},o.a.createElement("h2",null," Nombre total de productions "),o.a.createElement(h,null)),o.a.createElement("strong",null," Remarques : "),o.a.createElement("ul",null,o.a.createElement("li",null,"Je ne sais pas comment augmenter la taille des labels")),o.a.createElement("div",{style:{height:"500px"}},o.a.createElement("h2",null,"Ecosystème"),o.a.createElement(g,null)),o.a.createElement("strong",null," Remarques : "),o.a.createElement("ul",null,o.a.createElement("li",null,"Le diamètre des bulles ne signifie rien ici => quelle est sa signification sur la maquette ?"),o.a.createElement("li",null,"Le couleur des bulles est ici plus ou moins aléatoire (quand on a un multiple de 3) pour un effet visuel mais on peut mettre n'importe quelle fonction pour déterminer la couleur")))}},81:function(e,t,r){"use strict";t.__esModule=!0;t.default=function(e,t){var r={};for(var n in e)e.hasOwnProperty(n)&&(r[n]=t(e[n],n));return r}}},[[491,1,0]]]);