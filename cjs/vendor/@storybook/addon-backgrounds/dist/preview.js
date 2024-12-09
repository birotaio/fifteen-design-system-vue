"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const F=require("../../../ts-dedent/esm/index.js"),{useEffect:h,useMemo:E}=__STORYBOOK_MODULE_PREVIEW_API__,{global:Y}=__STORYBOOK_MODULE_GLOBAL__,{logger:H}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var g="backgrounds",R={light:{name:"light",value:"#F8F8F8"},dark:{name:"dark",value:"#333"}},{document:u,window:P}=Y,C=()=>!!P?.matchMedia("(prefers-reduced-motion: reduce)")?.matches,_=a=>{(Array.isArray(a)?a:[a]).forEach(j)},j=a=>{let e=u.getElementById(a);e&&e.parentElement?.removeChild(e)},I=(a,e)=>{let t=u.getElementById(a);if(t)t.innerHTML!==e&&(t.innerHTML=e);else{let o=u.createElement("style");o.setAttribute("id",a),o.innerHTML=e,u.head.appendChild(o)}},z=(a,e,t)=>{let o=u.getElementById(a);if(o)o.innerHTML!==e&&(o.innerHTML=e);else{let r=u.createElement("style");r.setAttribute("id",a),r.innerHTML=e;let d=`addon-backgrounds-grid${t?`-docs-${t}`:""}`,n=u.getElementById(d);n?n.parentElement?.insertBefore(r,n):u.head.appendChild(r)}},K={cellSize:100,cellAmount:10,opacity:.8},G="addon-backgrounds",L="addon-backgrounds-grid",X=C()?"":"transition: background-color 0.3s;",N=(a,e)=>{let{globals:t,parameters:o,viewMode:r,id:d}=e,{options:n=R,disable:i,grid:l=K}=o[g]||{},p=t[g]||{},c=p.value,b=c?n[c]:void 0,$=b?.value||"transparent",f=p.grid||!1,m=!!b&&!i,S=r==="docs"?`#anchor--${d} .docs-story`:".sb-show-main",O=r==="docs"?`#anchor--${d} .docs-story`:".sb-show-main",U=o.layout===void 0||o.layout==="padded",w=r==="docs"?20:U?16:0,{cellAmount:y,cellSize:s,opacity:k,offsetX:x=w,offsetY:v=w}=l,A=r==="docs"?`${G}-docs-${d}`:`${G}-color`,T=r==="docs"?d:null;h(()=>{let M=`
    ${S} {
      background: ${$} !important;
      ${X}
      }`;if(!m){_(A);return}z(A,M,T)},[S,A,T,m,$]);let B=r==="docs"?`${L}-docs-${d}`:`${L}`;return h(()=>{if(!f){_(B);return}let M=[`${s*y}px ${s*y}px`,`${s*y}px ${s*y}px`,`${s}px ${s}px`,`${s}px ${s}px`].join(", "),D=`
        ${O} {
          background-size: ${M} !important;
          background-position: ${x}px ${v}px, ${x}px ${v}px, ${x}px ${v}px, ${x}px ${v}px !important;
          background-blend-mode: difference !important;
          background-image: linear-gradient(rgba(130, 130, 130, ${k}) 1px, transparent 1px),
           linear-gradient(90deg, rgba(130, 130, 130, ${k}) 1px, transparent 1px),
           linear-gradient(rgba(130, 130, 130, ${k/2}) 1px, transparent 1px),
           linear-gradient(90deg, rgba(130, 130, 130, ${k/2}) 1px, transparent 1px) !important;
        }
      `;I(B,D)},[y,s,O,B,f,x,v,k]),a()},q=(a,e=[],t)=>{if(a==="transparent")return"transparent";if(e.find(r=>r.value===a)||a)return a;let o=e.find(r=>r.name===t);if(o)return o.value;if(t){let r=e.map(d=>d.name).join(", ");H.warn(F.dedent`
        Backgrounds Addon: could not find the default color "${t}".
        These are the available colors for your story based on your configuration:
        ${r}.
      `)}return"transparent"},W=(a,e)=>{let{globals:t,parameters:o}=e,r=t[g]?.value,d=o[g],n=E(()=>d.disable?"transparent":q(r,d.values,d.default),[d,r]),i=E(()=>n&&n!=="transparent",[n]),l=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",p=E(()=>`
      ${l} {
        background: ${n} !important;
        ${C()?"":"transition: background-color 0.3s;"}
      }
    `,[n,l]);return h(()=>{let c=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!i){_(c);return}z(c,p,e.viewMode==="docs"?e.id:null)},[i,p,e]),a()},J=(a,e)=>{let{globals:t,parameters:o}=e,r=o[g].grid,d=t[g]?.grid===!0&&r.disable!==!0,{cellAmount:n,cellSize:i,opacity:l}=r,p=e.viewMode==="docs",c=o.layout===void 0||o.layout==="padded"?16:0,b=r.offsetX??(p?20:c),$=r.offsetY??(p?20:c),f=E(()=>{let m=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",S=[`${i*n}px ${i*n}px`,`${i*n}px ${i*n}px`,`${i}px ${i}px`,`${i}px ${i}px`].join(", ");return`
      ${m} {
        background-size: ${S} !important;
        background-position: ${b}px ${$}px, ${b}px ${$}px, ${b}px ${$}px, ${b}px ${$}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${l}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${l}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${l/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${l/2}) 1px, transparent 1px) !important;
      }
    `},[i]);return h(()=>{let m=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!d){_(m);return}I(m,f)},[d,f,e]),a()},Q=FEATURES?.backgroundsStoryGlobals?[N]:[J,W],Z={[g]:{grid:{cellSize:20,opacity:.5,cellAmount:5},disable:!1,...!FEATURES?.backgroundsStoryGlobals&&{values:Object.values(R)}}},V={[g]:{value:void 0,grid:!1}},ee=FEATURES?.backgroundsStoryGlobals?V:{[g]:null};exports.decorators=Q;exports.initialGlobals=ee;exports.parameters=Z;
