import{l as n}from"./p-a66809ee.js";function t(t){return Array.isArray(t)?t.filter((t=>!n(t))):[]}function r(n){return t(n).length}function o(n,r){return t(n).filter((n=>n!==r))}function u(n,r,u){const s=t(n);return u?s.includes(r)?o(n,r):[...s,r]:[r]}function s(r,o,s){const c=t(r);if(c.length>0){const t=o.get(c[0]);if(n(t)||s!==t.label)return[]}else{const t=e(o,s);if(!n(t))return u(r,t.value,!1)}return c}function c(t,r){const{value:o,done:u}=t.next();return n(o)||o.label!==r?u?void 0:c(t,r):o}function e(n,t){return c(n.values(),t)}function i(t,r){const o=t.get(r);return n(o)?"":o.label}function f(n,t){const r=n.trim().toLowerCase(),o=t.trim().toLowerCase();return r.startsWith(o)}function a(n,t){const r=n.trim().toLowerCase(),o=t.trim().toLowerCase();return r.includes(o)}function l(n){n.preventDefault(),n.stopPropagation()}export{u as a,e as b,i as f,t as g,a as i,r as l,l as p,o as r,f as s,s as v}