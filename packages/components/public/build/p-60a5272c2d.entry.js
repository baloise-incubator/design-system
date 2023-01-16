import{r as s,h as l,H as a,g as e}from"./p-a880f6ce.js";import{t as r}from"./p-0028d0db.js";const t=class{constructor(l){s(this,l)}render(){const s=r.color,e=[],t=["primary","black","white","grey","light-blue","purple","green","red","yellow","success","warning","danger"];for(const l of t)e.push({name:l,value:s[l]});return l(a,null,l("bal-doc-app",null,l("table",{class:"table tokens",style:{width:"100%"}},l("thead",null,l("tr",null,l("th",{style:{minWidth:"200px"}},"Example"),l("th",null,"Description"),l("th",{style:{minWidth:"220px"}},"Token"))),e.map((s=>l("tbody",null,l("tr",null,l("td",{style:{verticalAlign:"top"}},l("div",{class:`has-background-${s.name} p-x-small mb-x-small has-radius-normal`},l("p",{class:`title is-size-large has-text-${s.name}-inverted`},"Aa"),l("p",{class:`mt-none mb-xx-small is-size-small has-text-${s.name}-inverted`},s.value.hex),l("p",{class:`m-none is-size-small has-text-${s.name}-inverted`},function(s){let l;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(s))return l=s.substring(1).split(""),3==l.length&&(l=[l[0],l[0],l[1],l[1],l[2],l[2]]),l="0x"+l.join(""),"rgba("+[l>>16&255,l>>8&255,255&l].join(",")+",1)";throw new Error("Bad Hex")}(s.value.hex)))),l("td",{style:{verticalAlign:"top"}},l("p",{class:"is-bold is-size-large mt-none mb-xx-small"},s.name),l("p",{class:"m-none is-size-small"},s.value.description)),l("td",{style:{verticalAlign:"top"}},l("p",{class:"mt-none mb-x-small is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal is-bold"},"var(--bal-color-",s.name,")"),l("p",{class:"m-none is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal"},"$",s.name))),"black"!==s.name&&"white"!==s.name?l("tr",null,l("td",{colSpan:3},l("p",{class:"is-bold is-size-normal"},"Shades"),l("span",{class:"is-size-small py-xx-small px-x-small has-background-grey-2 has-radius-normal is-bold"},"var(--bal-color-",s.name,"-x)"),l("div",{class:"is-flex fg-x-small mt-x-small"},l("div",{class:`has-background-${s.name}-1 has-radius-normal p-x-small is-flex-grow-1`},l("span",{class:`has-text-${s.name}-1-inverted is-bold`},"1")),l("div",{class:`has-background-${s.name}-2 has-radius-normal p-x-small is-flex-grow-1`},l("span",{class:`has-text-${s.name}-2-inverted is-bold`},"2")),l("div",{class:`has-background-${s.name}-3 has-radius-normal p-x-small is-flex-grow-1`},l("span",{class:`has-text-${s.name}-3-inverted is-bold`},"3")),l("div",{class:`has-background-${s.name}-4 has-radius-normal p-x-small is-flex-grow-1`},l("span",{class:`has-text-${s.name}-4-inverted is-bold`},"4")),l("div",{class:`has-background-${s.name}-5 has-radius-normal p-x-small is-flex-grow-1`},l("span",{class:`has-text-${s.name}-5-inverted is-bold`},"5")),l("div",{class:`has-background-${s.name}-6 has-radius-normal p-x-small is-flex-grow-1`},l("span",{class:`has-text-${s.name}-6-inverted is-bold`},"6"))))):"",l("tr",null,l("td",{colSpan:3,class:"pb-large"}))))))))}get el(){return e(this)}};export{t as bal_doc_tokens_colors}