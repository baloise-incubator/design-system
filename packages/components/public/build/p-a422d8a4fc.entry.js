import{r as l,h as s,H as t,g as a}from"./p-a880f6ce.js";import{t as e}from"./p-0028d0db.js";const i=class{constructor(s){l(this,s)}render(){const l=e.radius,a=[];for(const s in l)a.push({name:s,value:l[s]});return s(t,null,s("bal-doc-app",null,s("table",{class:"table tokens",style:{width:"100%"}},s("thead",null,s("tr",null,s("th",{style:{minWidth:"120px"}},"Example"),s("th",null,"Description"),s("th",{style:{minWidth:"230px"}},"Token"),s("th",{style:{minWidth:"80px"}},"Value"))),s("tbody",null,a.map((l=>s("tr",null,s("td",{style:{verticalAlign:"top"}},s("div",{style:{height:"48px",width:"80px"},class:`has-radius-${l.name} mt-x-small has-background-purple`})),s("td",{style:{verticalAlign:"top"}},s("p",{class:"is-bold is-size-large mt-none mb-x-small"},l.name),s("p",{class:"m-none is-size-small"},l.value.description)),s("td",{style:{verticalAlign:"top"}},s("p",{class:"mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal is-bold"},"var(--bal-radius",`-${l.name}`,")")),s("td",{style:{verticalAlign:"top"}},s("p",{class:"mt-none mb-x-small is-size-small is-bold py-xx-small"},l.value.value)))))))))}get el(){return a(this)}};export{i as bal_doc_tokens_radius}