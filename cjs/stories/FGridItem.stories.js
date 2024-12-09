"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const o=require("../components/FGrid.js");;/* empty css                    */const s=require("../components/FCard.js");;/* empty css                    */const t=require("../components/FGridItem.js");;/* empty css                        */const d={title:"Components/FGridItem",component:t,argTypes:{columns:{type:"number"},gutter:{type:"number"}}},r=n=>({components:{FGrid:o,FGridItem:t,FCard:s},setup:()=>({args:n}),template:`
    <div style="position: relative">
      <FGrid>
      <FGrid style="position: absolute; top: 0; left: 0; right: 0; bottom: 0;">
        <div v-for="i in 12" :key="i" style="background: aliceblue"></div>
      </FGrid>
        <FGridItem v-bind="args">
          <FCard color="primary" style="padding: 16px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </FCard>
        </FGridItem>
      </FGrid>
      <FGrid style="position: absolute; left: 0; right: 0;">
        <div v-for="i in 12" :key="i" style="background: aliceblue; text-align: center">{{ i }}</div>
      </FGrid>
    </div>
    `}),e=r.bind({});e.args={};const i=r.bind({});i.args={span:2,xxs:12,xs:9,sm:6,md:4,lg:3};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: FGridItemProps) => ({
  components: {
    FGrid,
    FGridItem,
    FCard
  },
  setup: () => ({
    args
  }),
  template: \`
    <div style="position: relative">
      <FGrid>
      <FGrid style="position: absolute; top: 0; left: 0; right: 0; bottom: 0;">
        <div v-for="i in 12" :key="i" style="background: aliceblue"></div>
      </FGrid>
        <FGridItem v-bind="args">
          <FCard color="primary" style="padding: 16px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </FCard>
        </FGridItem>
      </FGrid>
      <FGrid style="position: absolute; left: 0; right: 0;">
        <div v-for="i in 12" :key="i" style="background: aliceblue; text-align: center">{{ i }}</div>
      </FGrid>
    </div>
    \`
})`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: FGridItemProps) => ({
  components: {
    FGrid,
    FGridItem,
    FCard
  },
  setup: () => ({
    args
  }),
  template: \`
    <div style="position: relative">
      <FGrid>
      <FGrid style="position: absolute; top: 0; left: 0; right: 0; bottom: 0;">
        <div v-for="i in 12" :key="i" style="background: aliceblue"></div>
      </FGrid>
        <FGridItem v-bind="args">
          <FCard color="primary" style="padding: 16px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </FCard>
        </FGridItem>
      </FGrid>
      <FGrid style="position: absolute; left: 0; right: 0;">
        <div v-for="i in 12" :key="i" style="background: aliceblue; text-align: center">{{ i }}</div>
      </FGrid>
    </div>
    \`
})`,...i.parameters?.docs?.source}}};const a=["Default","Responsive"];exports.Default=e;exports.Responsive=i;exports.__namedExportsOrder=a;exports.default=d;
