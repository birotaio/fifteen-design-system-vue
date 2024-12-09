"use strict";const e=require("vue"),p=require("../utils/genSize.js"),S=require("../utils/getCssColor.js"),z=["viewBox"],n=4.8,L=e.defineComponent({__name:"FLogoAnimatable",props:{width:{default:116},color:{default:"primary"},delta:{default:()=>({})}},setup(h){const v=[{x1:58.012,y1:74.038,x2:58.033,y2:115.391},{x1:64.787,y1:72.586,x2:81.63,y2:110.362},{x1:70.383,y1:68.504,x2:101.142,y2:96.171},{x1:73.855,y1:62.511,x2:113.194,y2:75.27},{x1:74.579,y1:55.618,x2:115.704,y2:51.274},{x1:72.423,y1:49.034,x2:108.236,y2:28.332},{x1:67.784,y1:43.892,x2:92.083,y2:10.411},{x1:61.46,y1:41.064,x2:70.037,y2:.609},{x1:54.529,y1:41.068,x2:45.91,y2:.622},{x1:48.208,y1:43.902,x2:23.875,y2:10.446},{x1:43.574,y1:49.048,x2:7.74,y2:28.384},{x1:41.425,y1:55.635,x2:.296,y2:51.334},{x1:42.157,y1:62.527,x2:2.831,y2:75.327},{x1:45.635,y1:68.517,x2:14.905,y2:96.215},{x1:51.234,y1:72.593,x2:34.431,y2:110.387}],l=h,a=e.computed(()=>v.map(({x1:t,y1:o,x2:c,y2:i},y)=>{const _=(i-o)/(c-t);let s=Math.atan(_);y>=8&&(s=s-Math.PI);const d=l.delta[y+1]??0,b=d*Math.cos(s),C=d*Math.sin(s);return{x1:t,y1:o,x2:c+b,y2:i+C}})),u=e.computed(()=>Math.min(...a.value.map(({x1:t,x2:o})=>Math.min(t,o)))-n/2),x=e.computed(()=>Math.min(...a.value.map(({y1:t,y2:o})=>Math.min(t,o)))-n/2),g=e.computed(()=>Math.max(...a.value.map(({x1:t,x2:o})=>Math.max(t,o)))+n/2),f=e.computed(()=>Math.max(...a.value.map(({y1:t,y2:o})=>Math.max(t,o)))+n/2),r=e.computed(()=>g.value-u.value),m=e.computed(()=>f.value-x.value),w=e.computed(()=>[u.value,x.value,r.value,m.value].join(" ")),M=e.computed(()=>l.width/116*r.value),B=e.computed(()=>l.width/116*m.value),k=e.computed(()=>({"--flogoanimatable--width":p.genSize(M),"--flogoanimatable--height":p.genSize(B),"--flogoanimatable--color":S.getCssColor(l.color),"--flogoanimatable--stroke-width":String(n)}));return(t,o)=>(e.openBlock(),e.createElementBlock("svg",{class:"FLogoAnimatable",style:e.normalizeStyle(e.unref(k)),xmlns:"http://www.w3.org/2000/svg",viewBox:e.unref(w)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(a),(c,i)=>(e.openBlock(),e.createElementBlock("line",e.mergeProps({key:i,ref_for:!0},c),null,16))),128))],12,z))}});module.exports=L;