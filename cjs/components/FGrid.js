"use strict";const e=require("vue"),o=require("../utils/genSize.js"),c=require("../constants/grid.js"),i=e.defineComponent({__name:"FGrid",props:{columns:{default:c.columns},gap:{default:"4px"}},setup(n){const r=n,t=e.computed(()=>({"--fgrid--columns":String(r.columns),"--fgrid--grid-gap":o.genSize(r.gap)}));return(s,l)=>(e.openBlock(),e.createElementBlock("div",{class:"FGrid",style:e.normalizeStyle(e.unref(t))},[e.renderSlot(s.$slots,"default")],4))}});module.exports=i;
