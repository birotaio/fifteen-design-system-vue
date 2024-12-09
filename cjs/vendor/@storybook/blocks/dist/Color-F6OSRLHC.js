"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const E=require("./chunk-2PTXLE6R.js"),g=require("../../../react/index.js"),H=require("../../core/dist/components/index.js"),k=require("../../core/dist/theming/index.js"),ce=require("../../icons/dist/index.js");var fe=E.__commonJS({"../../node_modules/color-name/index.js"(n,l){l.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}}}),U=E.__commonJS({"../../node_modules/color-convert/conversions.js"(n,l){var c=fe(),f={};for(let e of Object.keys(c))f[c[e]]=e;var i={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};l.exports=i;for(let e of Object.keys(i)){if(!("channels"in i[e]))throw new Error("missing channels property: "+e);if(!("labels"in i[e]))throw new Error("missing channel labels property: "+e);if(i[e].labels.length!==i[e].channels)throw new Error("channel and label counts mismatch: "+e);let{channels:r,labels:t}=i[e];delete i[e].channels,delete i[e].labels,Object.defineProperty(i[e],"channels",{value:r}),Object.defineProperty(i[e],"labels",{value:t})}i.rgb.hsl=function(e){let r=e[0]/255,t=e[1]/255,a=e[2]/255,o=Math.min(r,t,a),u=Math.max(r,t,a),s=u-o,d,p;u===o?d=0:r===u?d=(t-a)/s:t===u?d=2+(a-r)/s:a===u&&(d=4+(r-t)/s),d=Math.min(d*60,360),d<0&&(d+=360);let b=(o+u)/2;return u===o?p=0:b<=.5?p=s/(u+o):p=s/(2-u-o),[d,p*100,b*100]},i.rgb.hsv=function(e){let r,t,a,o,u,s=e[0]/255,d=e[1]/255,p=e[2]/255,b=Math.max(s,d,p),m=b-Math.min(s,d,p),v=function(w){return(b-w)/6/m+1/2};return m===0?(o=0,u=0):(u=m/b,r=v(s),t=v(d),a=v(p),s===b?o=a-t:d===b?o=1/3+r-a:p===b&&(o=2/3+t-r),o<0?o+=1:o>1&&(o-=1)),[o*360,u*100,b*100]},i.rgb.hwb=function(e){let r=e[0],t=e[1],a=e[2],o=i.rgb.hsl(e)[0],u=1/255*Math.min(r,Math.min(t,a));return a=1-1/255*Math.max(r,Math.max(t,a)),[o,u*100,a*100]},i.rgb.cmyk=function(e){let r=e[0]/255,t=e[1]/255,a=e[2]/255,o=Math.min(1-r,1-t,1-a),u=(1-r-o)/(1-o)||0,s=(1-t-o)/(1-o)||0,d=(1-a-o)/(1-o)||0;return[u*100,s*100,d*100,o*100]};function h(e,r){return(e[0]-r[0])**2+(e[1]-r[1])**2+(e[2]-r[2])**2}i.rgb.keyword=function(e){let r=f[e];if(r)return r;let t=1/0,a;for(let o of Object.keys(c)){let u=c[o],s=h(e,u);s<t&&(t=s,a=o)}return a},i.keyword.rgb=function(e){return c[e]},i.rgb.xyz=function(e){let r=e[0]/255,t=e[1]/255,a=e[2]/255;r=r>.04045?((r+.055)/1.055)**2.4:r/12.92,t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,a=a>.04045?((a+.055)/1.055)**2.4:a/12.92;let o=r*.4124+t*.3576+a*.1805,u=r*.2126+t*.7152+a*.0722,s=r*.0193+t*.1192+a*.9505;return[o*100,u*100,s*100]},i.rgb.lab=function(e){let r=i.rgb.xyz(e),t=r[0],a=r[1],o=r[2];t/=95.047,a/=100,o/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,a=a>.008856?a**(1/3):7.787*a+16/116,o=o>.008856?o**(1/3):7.787*o+16/116;let u=116*a-16,s=500*(t-a),d=200*(a-o);return[u,s,d]},i.hsl.rgb=function(e){let r=e[0]/360,t=e[1]/100,a=e[2]/100,o,u,s;if(t===0)return s=a*255,[s,s,s];a<.5?o=a*(1+t):o=a+t-a*t;let d=2*a-o,p=[0,0,0];for(let b=0;b<3;b++)u=r+1/3*-(b-1),u<0&&u++,u>1&&u--,6*u<1?s=d+(o-d)*6*u:2*u<1?s=o:3*u<2?s=d+(o-d)*(2/3-u)*6:s=d,p[b]=s*255;return p},i.hsl.hsv=function(e){let r=e[0],t=e[1]/100,a=e[2]/100,o=t,u=Math.max(a,.01);a*=2,t*=a<=1?a:2-a,o*=u<=1?u:2-u;let s=(a+t)/2,d=a===0?2*o/(u+o):2*t/(a+t);return[r,d*100,s*100]},i.hsv.rgb=function(e){let r=e[0]/60,t=e[1]/100,a=e[2]/100,o=Math.floor(r)%6,u=r-Math.floor(r),s=255*a*(1-t),d=255*a*(1-t*u),p=255*a*(1-t*(1-u));switch(a*=255,o){case 0:return[a,p,s];case 1:return[d,a,s];case 2:return[s,a,p];case 3:return[s,d,a];case 4:return[p,s,a];case 5:return[a,s,d]}},i.hsv.hsl=function(e){let r=e[0],t=e[1]/100,a=e[2]/100,o=Math.max(a,.01),u,s;s=(2-t)*a;let d=(2-t)*o;return u=t*o,u/=d<=1?d:2-d,u=u||0,s/=2,[r,u*100,s*100]},i.hwb.rgb=function(e){let r=e[0]/360,t=e[1]/100,a=e[2]/100,o=t+a,u;o>1&&(t/=o,a/=o);let s=Math.floor(6*r),d=1-a;u=6*r-s,s&1&&(u=1-u);let p=t+u*(d-t),b,m,v;switch(s){default:case 6:case 0:b=d,m=p,v=t;break;case 1:b=p,m=d,v=t;break;case 2:b=t,m=d,v=p;break;case 3:b=t,m=p,v=d;break;case 4:b=p,m=t,v=d;break;case 5:b=d,m=t,v=p;break}return[b*255,m*255,v*255]},i.cmyk.rgb=function(e){let r=e[0]/100,t=e[1]/100,a=e[2]/100,o=e[3]/100,u=1-Math.min(1,r*(1-o)+o),s=1-Math.min(1,t*(1-o)+o),d=1-Math.min(1,a*(1-o)+o);return[u*255,s*255,d*255]},i.xyz.rgb=function(e){let r=e[0]/100,t=e[1]/100,a=e[2]/100,o,u,s;return o=r*3.2406+t*-1.5372+a*-.4986,u=r*-.9689+t*1.8758+a*.0415,s=r*.0557+t*-.204+a*1.057,o=o>.0031308?1.055*o**(1/2.4)-.055:o*12.92,u=u>.0031308?1.055*u**(1/2.4)-.055:u*12.92,s=s>.0031308?1.055*s**(1/2.4)-.055:s*12.92,o=Math.min(Math.max(0,o),1),u=Math.min(Math.max(0,u),1),s=Math.min(Math.max(0,s),1),[o*255,u*255,s*255]},i.xyz.lab=function(e){let r=e[0],t=e[1],a=e[2];r/=95.047,t/=100,a/=108.883,r=r>.008856?r**(1/3):7.787*r+16/116,t=t>.008856?t**(1/3):7.787*t+16/116,a=a>.008856?a**(1/3):7.787*a+16/116;let o=116*t-16,u=500*(r-t),s=200*(t-a);return[o,u,s]},i.lab.xyz=function(e){let r=e[0],t=e[1],a=e[2],o,u,s;u=(r+16)/116,o=t/500+u,s=u-a/200;let d=u**3,p=o**3,b=s**3;return u=d>.008856?d:(u-16/116)/7.787,o=p>.008856?p:(o-16/116)/7.787,s=b>.008856?b:(s-16/116)/7.787,o*=95.047,u*=100,s*=108.883,[o,u,s]},i.lab.lch=function(e){let r=e[0],t=e[1],a=e[2],o;o=Math.atan2(a,t)*360/2/Math.PI,o<0&&(o+=360);let u=Math.sqrt(t*t+a*a);return[r,u,o]},i.lch.lab=function(e){let r=e[0],t=e[1],a=e[2]/360*2*Math.PI,o=t*Math.cos(a),u=t*Math.sin(a);return[r,o,u]},i.rgb.ansi16=function(e,r=null){let[t,a,o]=e,u=r===null?i.rgb.hsv(e)[2]:r;if(u=Math.round(u/50),u===0)return 30;let s=30+(Math.round(o/255)<<2|Math.round(a/255)<<1|Math.round(t/255));return u===2&&(s+=60),s},i.hsv.ansi16=function(e){return i.rgb.ansi16(i.hsv.rgb(e),e[2])},i.rgb.ansi256=function(e){let r=e[0],t=e[1],a=e[2];return r===t&&t===a?r<8?16:r>248?231:Math.round((r-8)/247*24)+232:16+36*Math.round(r/255*5)+6*Math.round(t/255*5)+Math.round(a/255*5)},i.ansi16.rgb=function(e){let r=e%10;if(r===0||r===7)return e>50&&(r+=3.5),r=r/10.5*255,[r,r,r];let t=(~~(e>50)+1)*.5,a=(r&1)*t*255,o=(r>>1&1)*t*255,u=(r>>2&1)*t*255;return[a,o,u]},i.ansi256.rgb=function(e){if(e>=232){let u=(e-232)*10+8;return[u,u,u]}e-=16;let r,t=Math.floor(e/36)/5*255,a=Math.floor((r=e%36)/6)/5*255,o=r%6/5*255;return[t,a,o]},i.rgb.hex=function(e){let r=(((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255)).toString(16).toUpperCase();return"000000".substring(r.length)+r},i.hex.rgb=function(e){let r=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!r)return[0,0,0];let t=r[0];r[0].length===3&&(t=t.split("").map(d=>d+d).join(""));let a=parseInt(t,16),o=a>>16&255,u=a>>8&255,s=a&255;return[o,u,s]},i.rgb.hcg=function(e){let r=e[0]/255,t=e[1]/255,a=e[2]/255,o=Math.max(Math.max(r,t),a),u=Math.min(Math.min(r,t),a),s=o-u,d,p;return s<1?d=u/(1-s):d=0,s<=0?p=0:o===r?p=(t-a)/s%6:o===t?p=2+(a-r)/s:p=4+(r-t)/s,p/=6,p%=1,[p*360,s*100,d*100]},i.hsl.hcg=function(e){let r=e[1]/100,t=e[2]/100,a=t<.5?2*r*t:2*r*(1-t),o=0;return a<1&&(o=(t-.5*a)/(1-a)),[e[0],a*100,o*100]},i.hsv.hcg=function(e){let r=e[1]/100,t=e[2]/100,a=r*t,o=0;return a<1&&(o=(t-a)/(1-a)),[e[0],a*100,o*100]},i.hcg.rgb=function(e){let r=e[0]/360,t=e[1]/100,a=e[2]/100;if(t===0)return[a*255,a*255,a*255];let o=[0,0,0],u=r%1*6,s=u%1,d=1-s,p=0;switch(Math.floor(u)){case 0:o[0]=1,o[1]=s,o[2]=0;break;case 1:o[0]=d,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=s;break;case 3:o[0]=0,o[1]=d,o[2]=1;break;case 4:o[0]=s,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=d}return p=(1-t)*a,[(t*o[0]+p)*255,(t*o[1]+p)*255,(t*o[2]+p)*255]},i.hcg.hsv=function(e){let r=e[1]/100,t=e[2]/100,a=r+t*(1-r),o=0;return a>0&&(o=r/a),[e[0],o*100,a*100]},i.hcg.hsl=function(e){let r=e[1]/100,t=e[2]/100*(1-r)+.5*r,a=0;return t>0&&t<.5?a=r/(2*t):t>=.5&&t<1&&(a=r/(2*(1-t))),[e[0],a*100,t*100]},i.hcg.hwb=function(e){let r=e[1]/100,t=e[2]/100,a=r+t*(1-r);return[e[0],(a-r)*100,(1-a)*100]},i.hwb.hcg=function(e){let r=e[1]/100,t=1-e[2]/100,a=t-r,o=0;return a<1&&(o=(t-a)/(1-a)),[e[0],a*100,o*100]},i.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},i.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},i.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},i.gray.hsl=function(e){return[0,0,e[0]]},i.gray.hsv=i.gray.hsl,i.gray.hwb=function(e){return[0,100,e[0]]},i.gray.cmyk=function(e){return[0,0,0,e[0]]},i.gray.lab=function(e){return[e[0],0,0]},i.gray.hex=function(e){let r=Math.round(e[0]/100*255)&255,t=((r<<16)+(r<<8)+r).toString(16).toUpperCase();return"000000".substring(t.length)+t},i.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}}}),de=E.__commonJS({"../../node_modules/color-convert/route.js"(n,l){var c=U();function f(){let r={},t=Object.keys(c);for(let a=t.length,o=0;o<a;o++)r[t[o]]={distance:-1,parent:null};return r}function i(r){let t=f(),a=[r];for(t[r].distance=0;a.length;){let o=a.pop(),u=Object.keys(c[o]);for(let s=u.length,d=0;d<s;d++){let p=u[d],b=t[p];b.distance===-1&&(b.distance=t[o].distance+1,b.parent=o,a.unshift(p))}}return t}function h(r,t){return function(a){return t(r(a))}}function e(r,t){let a=[t[r].parent,r],o=c[t[r].parent][r],u=t[r].parent;for(;t[u].parent;)a.unshift(t[u].parent),o=h(c[t[u].parent][u],o),u=t[u].parent;return o.conversion=a,o}l.exports=function(r){let t=i(r),a={},o=Object.keys(t);for(let u=o.length,s=0;s<u;s++){let d=o[s];t[d].parent!==null&&(a[d]=e(d,t))}return a}}}),he=E.__commonJS({"../../node_modules/color-convert/index.js"(n,l){var c=U(),f=de(),i={},h=Object.keys(c);function e(t){let a=function(...o){let u=o[0];return u==null?u:(u.length>1&&(o=u),t(o))};return"conversion"in t&&(a.conversion=t.conversion),a}function r(t){let a=function(...o){let u=o[0];if(u==null)return u;u.length>1&&(o=u);let s=t(o);if(typeof s=="object")for(let d=s.length,p=0;p<d;p++)s[p]=Math.round(s[p]);return s};return"conversion"in t&&(a.conversion=t.conversion),a}h.forEach(t=>{i[t]={},Object.defineProperty(i[t],"channels",{value:c[t].channels}),Object.defineProperty(i[t],"labels",{value:c[t].labels});let a=f(t);Object.keys(a).forEach(o=>{let u=a[o];i[t][o]=r(u),i[t][o].raw=e(u)})}),l.exports=i}}),_=E.__toESM(he());function M(){return(M=Object.assign||function(n){for(var l=1;l<arguments.length;l++){var c=arguments[l];for(var f in c)Object.prototype.hasOwnProperty.call(c,f)&&(n[f]=c[f])}return n}).apply(this,arguments)}function K(n,l){if(n==null)return{};var c,f,i={},h=Object.keys(n);for(f=0;f<h.length;f++)l.indexOf(c=h[f])>=0||(i[c]=n[c]);return i}function P(n){var l=g.reactExports.useRef(n),c=g.reactExports.useRef(function(f){l.current&&l.current(f)});return l.current=n,c.current}var $=function(n,l,c){return l===void 0&&(l=0),c===void 0&&(c=1),n>c?c:n<l?l:n},S=function(n){return"touches"in n},L=function(n){return n&&n.ownerDocument.defaultView||self},F=function(n,l,c){var f=n.getBoundingClientRect(),i=S(l)?function(h,e){for(var r=0;r<h.length;r++)if(h[r].identifier===e)return h[r];return h[0]}(l.touches,c):l;return{left:$((i.pageX-(f.left+L(n).pageXOffset))/f.width),top:$((i.pageY-(f.top+L(n).pageYOffset))/f.height)}},G=function(n){!S(n)&&n.preventDefault()},D=g.default.memo(function(n){var l=n.onMove,c=n.onKey,f=K(n,["onMove","onKey"]),i=g.reactExports.useRef(null),h=P(l),e=P(c),r=g.reactExports.useRef(null),t=g.reactExports.useRef(!1),a=g.reactExports.useMemo(function(){var d=function(m){G(m),(S(m)?m.touches.length>0:m.buttons>0)&&i.current?h(F(i.current,m,r.current)):b(!1)},p=function(){return b(!1)};function b(m){var v=t.current,w=L(i.current),y=m?w.addEventListener:w.removeEventListener;y(v?"touchmove":"mousemove",d),y(v?"touchend":"mouseup",p)}return[function(m){var v=m.nativeEvent,w=i.current;if(w&&(G(v),!function(I,se){return se&&!S(I)}(v,t.current)&&w)){if(S(v)){t.current=!0;var y=v.changedTouches||[];y.length&&(r.current=y[0].identifier)}w.focus(),h(F(w,v,r.current)),b(!0)}},function(m){var v=m.which||m.keyCode;v<37||v>40||(m.preventDefault(),e({left:v===39?.05:v===37?-.05:0,top:v===40?.05:v===38?-.05:0}))},b]},[e,h]),o=a[0],u=a[1],s=a[2];return g.reactExports.useEffect(function(){return s},[s]),g.default.createElement("div",M({},f,{onTouchStart:o,onMouseDown:o,className:"react-colorful__interactive",ref:i,onKeyDown:u,tabIndex:0,role:"slider"}))}),O=function(n){return n.filter(Boolean).join(" ")},V=function(n){var l=n.color,c=n.left,f=n.top,i=f===void 0?.5:f,h=O(["react-colorful__pointer",n.className]);return g.default.createElement("div",{className:h,style:{top:100*i+"%",left:100*c+"%"}},g.default.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:l}}))},x=function(n,l,c){return l===void 0&&(l=0),c===void 0&&(c=Math.pow(10,l)),Math.round(c*n)/c},ge={grad:.9,turn:360,rad:360/(2*Math.PI)},pe=function(n){return Z(T(n))},T=function(n){return n[0]==="#"&&(n=n.substring(1)),n.length<6?{r:parseInt(n[0]+n[0],16),g:parseInt(n[1]+n[1],16),b:parseInt(n[2]+n[2],16),a:n.length===4?x(parseInt(n[3]+n[3],16)/255,2):1}:{r:parseInt(n.substring(0,2),16),g:parseInt(n.substring(2,4),16),b:parseInt(n.substring(4,6),16),a:n.length===8?x(parseInt(n.substring(6,8),16)/255,2):1}},be=function(n,l){return l===void 0&&(l="deg"),Number(n)*(ge[l]||1)},ve=function(n){var l=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(n);return l?me({h:be(l[1],l[2]),s:Number(l[3]),l:Number(l[4]),a:l[5]===void 0?1:Number(l[5])/(l[6]?100:1)}):{h:0,s:0,v:0,a:1}},me=function(n){var l=n.s,c=n.l;return{h:n.h,s:(l*=(c<50?c:100-c)/100)>0?2*l/(c+l)*100:0,v:c+l,a:n.a}},xe=function(n){return we(Q(n))},Y=function(n){var l=n.s,c=n.v,f=n.a,i=(200-l)*c/100;return{h:x(n.h),s:x(i>0&&i<200?l*c/100/(i<=100?i:200-i)*100:0),l:x(i/2),a:x(f,2)}},X=function(n){var l=Y(n);return"hsl("+l.h+", "+l.s+"%, "+l.l+"%)"},q=function(n){var l=Y(n);return"hsla("+l.h+", "+l.s+"%, "+l.l+"%, "+l.a+")"},Q=function(n){var l=n.h,c=n.s,f=n.v,i=n.a;l=l/360*6,c/=100,f/=100;var h=Math.floor(l),e=f*(1-c),r=f*(1-(l-h)*c),t=f*(1-(1-l+h)*c),a=h%6;return{r:x(255*[f,r,e,e,t,f][a]),g:x(255*[t,f,f,r,e,e][a]),b:x(255*[e,e,t,f,f,r][a]),a:x(i,2)}},ye=function(n){var l=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(n);return l?Z({r:Number(l[1])/(l[2]?100/255:1),g:Number(l[3])/(l[4]?100/255:1),b:Number(l[5])/(l[6]?100/255:1),a:l[7]===void 0?1:Number(l[7])/(l[8]?100:1)}):{h:0,s:0,v:0,a:1}},N=function(n){var l=n.toString(16);return l.length<2?"0"+l:l},we=function(n){var l=n.r,c=n.g,f=n.b,i=n.a,h=i<1?N(x(255*i)):"";return"#"+N(l)+N(c)+N(f)+h},Z=function(n){var l=n.r,c=n.g,f=n.b,i=n.a,h=Math.max(l,c,f),e=h-Math.min(l,c,f),r=e?h===l?(c-f)/e:h===c?2+(f-l)/e:4+(l-c)/e:0;return{h:x(60*(r<0?r+6:r)),s:x(h?e/h*100:0),v:x(h/255*100),a:i}},ee=g.default.memo(function(n){var l=n.hue,c=n.onChange,f=O(["react-colorful__hue",n.className]);return g.default.createElement("div",{className:f},g.default.createElement(D,{onMove:function(i){c({h:360*i.left})},onKey:function(i){c({h:$(l+360*i.left,0,360)})},"aria-label":"Hue","aria-valuenow":x(l),"aria-valuemax":"360","aria-valuemin":"0"},g.default.createElement(V,{className:"react-colorful__hue-pointer",left:l/360,color:X({h:l,s:100,v:100,a:1})})))}),te=g.default.memo(function(n){var l=n.hsva,c=n.onChange,f={backgroundColor:X({h:l.h,s:100,v:100,a:1})};return g.default.createElement("div",{className:"react-colorful__saturation",style:f},g.default.createElement(D,{onMove:function(i){c({s:100*i.left,v:100-100*i.top})},onKey:function(i){c({s:$(l.s+100*i.left,0,100),v:$(l.v-100*i.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+x(l.s)+"%, Brightness "+x(l.v)+"%"},g.default.createElement(V,{className:"react-colorful__saturation-pointer",top:1-l.v/100,left:l.s/100,color:X(l)})))}),re=function(n,l){if(n===l)return!0;for(var c in n)if(n[c]!==l[c])return!1;return!0},ne=function(n,l){return n.replace(/\s/g,"")===l.replace(/\s/g,"")},_e=function(n,l){return n.toLowerCase()===l.toLowerCase()||re(T(n),T(l))};function ae(n,l,c){var f=P(c),i=g.reactExports.useState(function(){return n.toHsva(l)}),h=i[0],e=i[1],r=g.reactExports.useRef({color:l,hsva:h});g.reactExports.useEffect(function(){if(!n.equal(l,r.current.color)){var a=n.toHsva(l);r.current={hsva:a,color:l},e(a)}},[l,n]),g.reactExports.useEffect(function(){var a;re(h,r.current.hsva)||n.equal(a=n.fromHsva(h),r.current.color)||(r.current={hsva:h,color:a},f(a))},[h,n,f]);var t=g.reactExports.useCallback(function(a){e(function(o){return Object.assign({},o,a)})},[]);return[h,t]}var ke=typeof window<"u"?g.reactExports.useLayoutEffect:g.reactExports.useEffect,Ee=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},W=new Map,oe=function(n){ke(function(){var l=n.current?n.current.ownerDocument:document;if(l!==void 0&&!W.has(l)){var c=l.createElement("style");c.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,W.set(l,c);var f=Ee();f&&c.setAttribute("nonce",f),l.head.appendChild(c)}},[])},Me=function(n){var l=n.className,c=n.colorModel,f=n.color,i=f===void 0?c.defaultColor:f,h=n.onChange,e=K(n,["className","colorModel","color","onChange"]),r=g.reactExports.useRef(null);oe(r);var t=ae(c,i,h),a=t[0],o=t[1],u=O(["react-colorful",l]);return g.default.createElement("div",M({},e,{ref:r,className:u}),g.default.createElement(te,{hsva:a,onChange:o}),g.default.createElement(ee,{hue:a.h,onChange:o,className:"react-colorful__last-control"}))},Ce={defaultColor:"000",toHsva:pe,fromHsva:function(n){return xe({h:n.h,s:n.s,v:n.v,a:1})},equal:_e},$e=function(n){return g.default.createElement(Me,M({},n,{colorModel:Ce}))},Se=function(n){var l=n.className,c=n.hsva,f=n.onChange,i={backgroundImage:"linear-gradient(90deg, "+q(Object.assign({},c,{a:0}))+", "+q(Object.assign({},c,{a:1}))+")"},h=O(["react-colorful__alpha",l]),e=x(100*c.a);return g.default.createElement("div",{className:h},g.default.createElement("div",{className:"react-colorful__alpha-gradient",style:i}),g.default.createElement(D,{onMove:function(r){f({a:r.left})},onKey:function(r){f({a:$(c.a+r.left)})},"aria-label":"Alpha","aria-valuetext":e+"%","aria-valuenow":e,"aria-valuemin":"0","aria-valuemax":"100"},g.default.createElement(V,{className:"react-colorful__alpha-pointer",left:c.a,color:q(c)})))},le=function(n){var l=n.className,c=n.colorModel,f=n.color,i=f===void 0?c.defaultColor:f,h=n.onChange,e=K(n,["className","colorModel","color","onChange"]),r=g.reactExports.useRef(null);oe(r);var t=ae(c,i,h),a=t[0],o=t[1],u=O(["react-colorful",l]);return g.default.createElement("div",M({},e,{ref:r,className:u}),g.default.createElement(te,{hsva:a,onChange:o}),g.default.createElement(ee,{hue:a.h,onChange:o}),g.default.createElement(Se,{hsva:a,onChange:o,className:"react-colorful__last-control"}))},Oe={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:ve,fromHsva:q,equal:ne},Ne=function(n){return g.default.createElement(le,M({},n,{colorModel:Oe}))},je={defaultColor:"rgba(0, 0, 0, 1)",toHsva:ye,fromHsva:function(n){var l=Q(n);return"rgba("+l.r+", "+l.g+", "+l.b+", "+l.a+")"},equal:ne},Re=function(n){return g.default.createElement(le,M({},n,{colorModel:je}))},qe=k.styled.div({position:"relative",maxWidth:250,'&[aria-readonly="true"]':{opacity:.5}}),ze=k.styled(H.WithTooltip)({position:"absolute",zIndex:1,top:4,left:4,"[aria-readonly=true] &":{cursor:"not-allowed"}}),He=k.styled.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),Ie=k.styled(H.TooltipNote)(({theme:n})=>({fontFamily:n.typography.fonts.base})),Pe=k.styled.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),Le=k.styled.div(({theme:n,active:l})=>({width:16,height:16,boxShadow:l?`${n.appBorderColor} 0 0 0 1px inset, ${n.textMutedColor}50 0 0 0 4px`:`${n.appBorderColor} 0 0 0 1px inset`,borderRadius:n.appBorderRadius})),Te=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,J=({value:n,style:l,...c})=>{let f=`linear-gradient(${n}, ${n}), ${Te}, linear-gradient(#fff, #fff)`;return g.default.createElement(Le,{...c,style:{...l,backgroundImage:f}})},Xe=k.styled(H.Form.Input)(({theme:n,readOnly:l})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:n.typography.fonts.base})),Be=k.styled(ce.MarkupIcon)(({theme:n})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:n.input.color})),ue=(n=>(n.RGB="rgb",n.HSL="hsl",n.HEX="hex",n))(ue||{}),j=Object.values(ue),Ke=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,De=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,Ve=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,B=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,Fe=/^\s*#?([0-9a-f]{3})\s*$/i,Ge={hex:$e,rgb:Re,hsl:Ne},R={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},A=n=>{let l=n?.match(Ke);if(!l)return[0,0,0,1];let[,c,f,i,h=1]=l;return[c,f,i,h].map(Number)},C=n=>{if(!n)return;let l=!0;if(De.test(n)){let[e,r,t,a]=A(n),[o,u,s]=_.default.rgb.hsl([e,r,t])||[0,0,0];return{valid:l,value:n,keyword:_.default.rgb.keyword([e,r,t]),colorSpace:"rgb",rgb:n,hsl:`hsla(${o}, ${u}%, ${s}%, ${a})`,hex:`#${_.default.rgb.hex([e,r,t]).toLowerCase()}`}}if(Ve.test(n)){let[e,r,t,a]=A(n),[o,u,s]=_.default.hsl.rgb([e,r,t])||[0,0,0];return{valid:l,value:n,keyword:_.default.hsl.keyword([e,r,t]),colorSpace:"hsl",rgb:`rgba(${o}, ${u}, ${s}, ${a})`,hsl:n,hex:`#${_.default.hsl.hex([e,r,t]).toLowerCase()}`}}let c=n.replace("#",""),f=_.default.keyword.rgb(c)||_.default.hex.rgb(c),i=_.default.rgb.hsl(f),h=n;if(/[^#a-f0-9]/i.test(n)?h=c:B.test(n)&&(h=`#${c}`),h.startsWith("#"))l=B.test(h);else try{_.default.keyword.hex(h)}catch{l=!1}return{valid:l,value:h,keyword:_.default.rgb.keyword(f),colorSpace:"hex",rgb:`rgba(${f[0]}, ${f[1]}, ${f[2]}, 1)`,hsl:`hsla(${i[0]}, ${i[1]}%, ${i[2]}%, 1)`,hex:h}},We=(n,l,c)=>{if(!n||!l?.valid)return R[c];if(c!=="hex")return l?.[c]||R[c];if(!l.hex.startsWith("#"))try{return`#${_.default.keyword.hex(l.hex)}`}catch{return R.hex}let f=l.hex.match(Fe);if(!f)return B.test(l.hex)?l.hex:R.hex;let[i,h,e]=f[1].split("");return`#${i}${i}${h}${h}${e}${e}`},Je=(n,l)=>{let[c,f]=g.reactExports.useState(n||""),[i,h]=g.reactExports.useState(()=>C(c)),[e,r]=g.reactExports.useState(i?.colorSpace||"hex");g.reactExports.useEffect(()=>{let u=n||"",s=C(u);f(u),h(s),r(s?.colorSpace||"hex")},[n]);let t=g.reactExports.useMemo(()=>We(c,i,e).toLowerCase(),[c,i,e]),a=g.reactExports.useCallback(u=>{let s=C(u),d=s?.value||u||"";f(d),d===""&&(h(void 0),l(void 0)),s&&(h(s),r(s.colorSpace),l(s.value))},[l]),o=g.reactExports.useCallback(()=>{let u=j.indexOf(e)+1;u>=j.length&&(u=0),r(j[u]);let s=i?.[j[u]]||"";f(s),l(s)},[i,e,l]);return{value:c,realValue:t,updateValue:a,color:i,colorSpace:e,cycleColorSpace:o}},z=n=>n.replace(/\s*/,"").toLowerCase(),Ae=(n,l,c)=>{let[f,i]=g.reactExports.useState(l?.valid?[l]:[]);g.reactExports.useEffect(()=>{l===void 0&&i([])},[l]);let h=g.reactExports.useMemo(()=>(n||[]).map(r=>typeof r=="string"?C(r):r.title?{...C(r.color),keyword:r.title}:C(r.color)).concat(f).filter(Boolean).slice(-27),[n,f]),e=g.reactExports.useCallback(r=>{r?.valid&&(h.some(t=>z(t[c])===z(r[c]))||i(t=>t.concat(r)))},[c,h]);return{presets:h,addPreset:e}},ie=({name:n,value:l,onChange:c,onFocus:f,onBlur:i,presetColors:h,startOpen:e=!1,argType:r})=>{let t=g.reactExports.useCallback(E.debounce(c,200),[c]),{value:a,realValue:o,updateValue:u,color:s,colorSpace:d,cycleColorSpace:p}=Je(l,t),{presets:b,addPreset:m}=Ae(h,s,d),v=Ge[d],w=!!r?.table?.readonly;return g.default.createElement(qe,{"aria-readonly":w},g.default.createElement(ze,{startOpen:e,trigger:w?[null]:void 0,closeOnOutsideClick:!0,onVisibleChange:()=>m(s),tooltip:g.default.createElement(He,null,g.default.createElement(v,{color:o==="transparent"?"#000000":o,onChange:u,onFocus:f,onBlur:i}),b.length>0&&g.default.createElement(Pe,null,b.map((y,I)=>g.default.createElement(H.WithTooltip,{key:`${y.value}-${I}`,hasChrome:!1,tooltip:g.default.createElement(Ie,{note:y.keyword||y.value})},g.default.createElement(J,{value:y[d],active:s&&z(y[d])===z(s[d]),onClick:()=>u(y.value)})))))},g.default.createElement(J,{value:o,style:{margin:4}})),g.default.createElement(Xe,{id:E.getControlId(n),value:a,onChange:y=>u(y.target.value),onFocus:y=>y.target.select(),readOnly:w,placeholder:"Choose color..."}),a?g.default.createElement(Be,{onClick:p}):null)},Ue=ie;exports.ColorControl=ie;exports.default=Ue;