import{$ as I,A as y,B as m,C as u,D as h,E as b,F as _,G as v,I as k,M as F,O as E,c,ca as P,e as g,ma as S,wa as w}from"./chunk-S6IZPALI.mjs";import"./chunk-JR5VT52U.mjs";import{c as t}from"./chunk-RIUMFBNJ.mjs";var L="default"in m?y:m,d={},D=L;d.createRoot=D.createRoot;d.hydrateRoot=D.hydrateRoot;var O=d.createRoot,V=d.hydrateRoot;var f={augiA20Il:{elements:{JYpaApGJR:"our-story-1",o7EboZC4Q:"tokenomics",Pg_YI8Q1q:"faq-1",uKvnd9OyZ:"faq",yDGgrn5ut:"our-story"},page:u(()=>import("./5xnxJbECgXsd9kaL4rau1V3MSckfknVV-9EUnHiJQJ4.GRJW65UD.mjs")),path:"/"}},U=[{code:"en-US",id:"default",name:"English",slug:""}];async function q({routeId:a,pathVariables:o,localeId:r}){await f[a].page.preload();let n=c(P,{isWebsite:!0,routeId:a,pathVariables:o,routes:f,collectionUtils:{},framerSiteId:"53bc3bc3534af62d4e5b6fc771c6bf83e9aecc4e8a6fb56db20380ce727c6238",notFoundPage:u(()=>import("./SitesNotFoundPage.js@1.1-3KJKOYTI.mjs")),isReducedMotion:void 0,localeId:r,locales:U,preserveQueryParams:void 0}),s=c(I,{children:n,value:{enableAsyncURLUpdates:!0,replaceNestedLinks:!0,useGranularSuspense:!0,wrapUpdatesInTransitions:!1}});return c(h,{children:s,value:{routes:{}}})}var H=typeof document<"u";if(H){t.__framer_importFromPackage=(o,r)=>()=>c(F,{error:'Package component not supported: "'+r+'" in "'+o+'"'}),t.process={...t.process,env:{...t.process?t.process.env:void 0,NODE_ENV:"production"}},t.__framer_events=t.__framer_events||[],E();let a=document.getElementById("main");"framerHydrateV2"in a.dataset?M(!0,a):M(!1,a)}function x(){H&&t.__framer_events.push(arguments)}async function M(a,o){try{let R=function(e,N){let l=N?.componentStack;console.warn("Recoverable error during hydration. Please check any custom code or code overrides to fix server/client mismatches.",e,l),!(Math.random()>.01)&&x("published_site_load_recoverable_error",{message:String(e),componentStack:l,stack:l?void 0:e instanceof Error&&typeof e.stack=="string"?e.stack:null})},r,n,s,i;if(a){let e=JSON.parse(o.dataset.framerHydrateV2);r=e.routeId,n=e.localeId,s=e.pathVariables,i=e.breakpoints}else{let e=k(f,decodeURIComponent(location.pathname),!0,U);r=e.routeId,n=e.localeId,s=e.pathVariables}let p=await q({routeId:r,localeId:n,pathVariables:s});a?(w("framer-rewrite-breakpoints",()=>{S(i),t.__framer_onRewriteBreakpoints?.(i)}),g(()=>{b(),v(),_(),V(o,p,{onRecoverableError:R})})):O(o,{onRecoverableError:R}).render(p)}catch(r){throw x("published_site_load_error",{message:String(r),stack:r instanceof Error&&typeof r.stack=="string"?r.stack:null}),r}}export{q as getPageRoot};
//# sourceMappingURL=script_main.D73RA3KR.mjs.map
