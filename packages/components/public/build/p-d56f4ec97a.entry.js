import{r as t,c as s,h as i,H as h,g as e}from"./p-a880f6ce.js";import{i as c,e as a,s as l,c as o,d as r}from"./p-27ef59b5.js";import{i as n,h as b}from"./p-77b56332.js";import{i as d}from"./p-9a929c20.js";import{B as u}from"./p-61996a75.js";import{m as j}from"./p-8f313b4b.js";import"./p-2e55b95c.js";import"./p-a66809ee.js";import"./p-3e8ff66b.js";const p=class{constructor(i){t(this,i),this.balFocus=s(this,"balFocus",7),this.balBlur=s(this,"balBlur",7),this.balChange=s(this,"balChange",7),this.balClick=s(this,"balClick",7),this.inputId="bal-cb-"+O++,this.inheritedAttributes={},this.initialValue=!1,this.updateState=()=>{this.group&&this.group.control&&(this.checked=this.group.value.includes(this.value))},this.onInputFocus=t=>c(this,t),this.onInputBlur=t=>a(this,t),this.onClick=t=>{const s=t.target;s.href||("INPUT"===s.nodeName||this.disabled||this.readonly?l(t):(this.checked=!this.checked,this.balChange.emit(this.checked),this.balClick.emit(t),t.preventDefault()))},this.hasFocus=!1,this.hasLabel=!0,this.name=this.inputId,this.labelHidden=!1,this.flat=!1,this.interface="checkbox",this.value="on",this.checked=!1,this.disabled=!1,this.readonly=!1,this.required=!1,this.hidden=!1,this.invalid=!1}listenOnClick(t){(this.disabled||this.readonly)&&t.target&&(t.target===this.el||n(this.el,t.target))&&l(t)}resetHandler(t){const s=t.target;(null==s?void 0:s.contains(this.el))&&(this.checked=this.initialValue)}connectedCallback(){this.group&&(this.updateState(),this.group.addEventListener("balChange",(()=>this.updateState()))),this.initialValue=this.checked}componentWillLoad(){this.inheritedAttributes=d(this.el,["aria-label","tabindex","title"])}disconnectedCallback(){this.group&&this.group.removeEventListener("balChange",(()=>this.updateState()))}async setFocus(){o(this)}async setBlur(){r(this)}getInputElement(){return Promise.resolve(this.nativeInput)}get group(){return this.el.closest("bal-checkbox-group")}render(){const t=u.block("radio-checkbox"),s=t.element("input"),e=t.element("label"),c=e.element("text");return i(h,Object.assign({role:"checkbox","aria-checked":`${this.checked}`,"aria-disabled":this.disabled?"true":null,"aria-hidden":this.disabled?"true":null,"aria-focused":this.hasFocus?"true":null,class:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},t.class()),t.modifier("checkbox").class()),t.modifier("select-button").class("select-button"===this.interface)),t.modifier("switch").class("switch"===this.interface)),t.modifier("focused").class(this.hasFocus)),t.modifier("invalid").class(this.invalid)),t.modifier("checked").class(this.checked)),t.modifier("flat").class(this.flat)),t.modifier("disabled").class(this.disabled||this.readonly)),onClick:this.onClick,onFocus:this.onInputFocus,onBlur:this.onInputBlur},this.inheritedAttributes),i("input",{class:Object.assign(Object.assign(Object.assign({},s.class()),s.modifier("select-button").class("select-button"===this.interface)),{"data-test-checkbox-input":!0}),type:"checkbox",id:this.inputId,name:this.name,value:this.value,checked:this.checked,"aria-checked":`${this.checked}`,disabled:this.disabled||this.hidden,readonly:this.readonly,required:this.required,onFocus:this.onInputFocus,onBlur:this.onInputBlur,ref:t=>this.nativeInput=t}),i("label",{class:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},e.class()),e.modifier("checked").class(this.checked)),e.modifier("switch").class("switch"===this.interface)),e.modifier("checkbox").class()),{"data-test-checkbox-label":!0}),htmlFor:this.inputId},i("span",{class:Object.assign(Object.assign({},c.class()),c.modifier("hidden").class(this.labelHidden))},i("slot",null))))}get el(){return e(this)}};let O=0;const k=class{constructor(i){t(this,i),this.balChange=s(this,"balChange",7),this.inputId="bal-cg-"+g++,this.inheritedAttributes={},this.onClick=t=>{if(!this.control)return;if(t.target.href)return;t.preventDefault();const s=t.target&&t.target.closest("bal-checkbox");if(s&&(s.disabled||s.readonly))return void t.stopPropagation();const i=[];this.children.forEach((t=>{t.checked&&i.push(t.value)})),j(this.value,i)||(this.value=[...i],this.balChange.emit(this.value))},this.interface=void 0,this.control=!1,this.name=this.inputId,this.vertical=!1,this.verticalOnMobile=!1,this.expanded=!1,this.disabled=void 0,this.readonly=void 0,this.value=[]}disabledChanged(t){this.control&&void 0!==t&&this.children.forEach((s=>{s.disabled=t}))}readonlyChanged(t){this.control&&void 0!==t&&this.children.forEach((s=>{s.readonly=t}))}valueChanged(t,s){this.control&&j(this.value,s)||this.sync()}listenOnClick(t){this.control&&n(this.el,t.target)&&l(t)}resetHandler(t){const s=t.target;(null==s?void 0:s.contains(this.el))&&(this.control&&(this.value=[]),this.sync())}componentWillLoad(){this.control&&(this.inheritedAttributes=d(this.el,["aria-label","tabindex","title"]),this.disabledChanged(this.disabled),this.readonlyChanged(this.readonly)),this.sync()}get children(){return Array.from(this.el.querySelectorAll("bal-checkbox"))}async setValue(t){this.control&&(this.value=t)}sync(){if(this.control){const t=t=>{for(let s=0;s<this.value.length;s++)if(this.value[s].toString()===t.value.toString())return!0;return!1};this.children.forEach((s=>{s.checked=t(s)}))}this.children.forEach((t=>{this.interface&&(t.interface=this.interface)}))}render(){const t=b(this.el),s=u.block("radio-checkbox-group"),e=s.element("inner");return i(h,Object.assign({class:Object.assign({},s.class()),role:"group","aria-labelledby":null==t?void 0:t.id,"aria-disabled":this.disabled?"true":null,onClick:this.onClick},this.inheritedAttributes),i("div",{class:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},e.class()),e.modifier("vertical-mobile").class(this.verticalOnMobile)),e.modifier("vertical").class(this.vertical)),e.modifier("expanded").class(this.expanded)),e.modifier("select-button").class("select-button"===this.interface))},i("slot",null)))}get el(){return e(this)}static get watchers(){return{disabled:["disabledChanged"],readonly:["readonlyChanged"],value:["valueChanged"]}}};let g=0;export{p as bal_checkbox,k as bal_checkbox_group}