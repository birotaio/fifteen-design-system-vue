"use strict";const s=require("vue"),d=s.defineComponent({__name:"FGridItem",props:{xxs:{default:null},xs:{default:null},sm:{default:null},md:{default:null},lg:{default:null},span:{default:1}},setup(n){const e=n;function t(l){return l?String(l):""}const r=s.computed(()=>({"FGridItem--xxs":!!e.xxs,"FGridItem--xs":!!e.xs,"FGridItem--sm":!!e.sm,"FGridItem--md":!!e.md,"FGridItem--lg":!!e.lg})),m=s.computed(()=>({"--fgrid-item--span":t(e.span),"--fgrid-item--span--xxs":t(e.xxs),"--fgrid-item--span--xs":t(e.xs),"--fgrid-item--span--sm":t(e.sm),"--fgrid-item--span--md":t(e.md),"--fgrid-item--span--lg":t(e.lg)}));return(l,i)=>(s.openBlock(),s.createElementBlock("div",{class:s.normalizeClass(["FGridItem",s.unref(r)]),style:s.normalizeStyle(s.unref(m))},[s.renderSlot(l.$slots,"default")],6))}});module.exports=d;
