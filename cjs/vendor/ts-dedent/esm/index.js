"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});function s(u){for(var d=[],i=1;i<arguments.length;i++)d[i-1]=arguments[i];var n=Array.from(typeof u=="string"?[u]:u);n[n.length-1]=n[n.length-1].replace(/\r?\n([\t ]*)$/,"");var l=n.reduce(function(t,c){var a=c.match(/\n([\t ]+|(?!\s).)/g);return a?t.concat(a.map(function(g){var e,r;return(r=(e=g.match(/[\t ]/g))===null||e===void 0?void 0:e.length)!==null&&r!==void 0?r:0})):t},[]);if(l.length){var f=new RegExp(`
[	 ]{`+Math.min.apply(Math,l)+"}","g");n=n.map(function(t){return t.replace(f,`
`)})}n[0]=n[0].replace(/^\r?\n/,"");var o=n[0];return d.forEach(function(t,c){var a=o.match(/(?:^|\n)( *)$/),g=a?a[1]:"",e=t;typeof t=="string"&&t.includes(`
`)&&(e=String(t).split(`
`).map(function(r,v){return v===0?r:""+g+r}).join(`
`)),o+=e+n[c+1]}),o}exports.dedent=s;exports.default=s;
