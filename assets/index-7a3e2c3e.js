import{j as u,r as f,U as h,L as m,G as a,T as g,a as p,F as S,B as b,H as y,N as c,S as k,C as w,M as x,A as G,R as v,b as C,c as R,d as L,e as N}from"./vendor-62c8e971.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function l(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=l(r);fetch(r.href,o)}})();const e=u.jsx,d=u.jsxs;const P="/TRPGCharacterGenerator/assets/cthulhu-e4b4b7ad.svg",T="/TRPGCharacterGenerator/assets/dungeon-gate-06f76814.svg";function j({icon:n,color:t,label:l,link:i}){return e(h,{component:m,to:i,sx:r=>({display:"block",width:"100%",padding:r.spacing.xs,borderRadius:r.radius.sm,color:r.colorScheme==="dark"?r.colors.dark[0]:r.black,"&:hover":{backgroundColor:r.colorScheme==="dark"?r.colors.dark[6]:r.colors.gray[0]}}),children:d(a,{children:[e(g,{color:t,variant:"light",children:n}),e(p,{size:"sm",children:l})]})})}const A=[{icon:e("img",{src:P,alt:"cthulhu"}),color:"#000000",label:"Call of Cthulhu",link:"/coc"},{icon:e("img",{src:T,alt:"sun"}),color:"#000000",label:"Dungeon World",link:"/dw"}];function B(){const n=A.map(t=>f.createElement(j,{...t,key:t.label}));return e("div",{children:n})}function M(){window.confirm("삭제 하시겠습니까?")&&(localStorage.clear(),window.location.reload())}function E(){return e(S,{height:{base:20,md:40},p:"md",children:e(a,{position:"left",children:e(b,{compact:!0,variant:"light",size:"xs",color:"gray",onClick:()=>{M()},children:"Clear LocalStorage"})})})}const H="/TRPGCharacterGenerator/assets/dice20-07174400.png";function z(){return e(y,{height:80,p:"md",children:e(h,{component:m,to:"/",children:d(a,{position:"center",mt:"md",children:[e("img",{src:H,alt:"dice20",width:26.6}),e(p,{size:"lg",children:"TRPG Character Generator"})]})})})}function F(){return d(c,{width:{base:250,maximum:1100},p:"xs",children:[e(c.Section,{children:e(z,{})}),e(c.Section,{grow:!0,mt:"md",component:k,children:e(B,{})}),e(c.Section,{children:e(E,{})})]})}function O(){return e(w,{withBorder:!0,radius:"md",children:e(a,{position:"left",children:e("h3",{children:" Hello, Generator "})})})}function I(){return e(x,{theme:{colorScheme:"dark"},withGlobalStyles:!0,withNormalizeCSS:!0,children:e(G,{padding:"md",navbar:e(F,{}),children:e(v,{children:e(C,{path:"/",element:e(O,{})})})})})}R.createRoot(document.getElementById("root")).render(e(L.StrictMode,{children:e(N,{children:e(I,{})})}));
