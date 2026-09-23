const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/fs-42.1.1.js","assets/fs-4.1.1.js","assets/preload-helper-4.1.1.js"])))=>i.map(i=>d[i]);
import{i as e,n as t,t as n}from"./rolldown-runtime-4.1.1.js";import{$ as r,$r as i,$t as a,A as o,An as s,Ar as c,At as l,B as u,Bn as d,Br as f,Bt as p,C as m,Cn as h,Cr as g,Ct as _,D as v,Dn as y,Dt as b,E as x,En as S,Er as C,Et as w,F as T,Fn as E,Fr as D,Ft as ee,G as O,Gn as k,Gr as te,Gt as A,H as ne,Hn as re,Hr as ie,Ht as ae,I as oe,In as j,Ir as se,It as ce,J as le,Jn as ue,Jr as de,Jt as fe,K as pe,Kn as me,Kr as he,Kt as ge,L as _e,Ln as ve,Lr as ye,Lt as be,M as xe,Mn as M,Mr as Se,Mt as Ce,N as we,Nn as Te,Nr as Ee,Nt as De,O as Oe,On as ke,Or as N,Ot as Ae,P as je,Pn as Me,Pr as Ne,Pt as Pe,Q as Fe,Qr as Ie,Qt as Le,R as Re,Rn as ze,Rr as Be,Rt as Ve,S as He,Sn as Ue,Sr as We,St as Ge,T as Ke,Tn as qe,Tr as Je,Tt as Ye,U as Xe,Un as Ze,Ur as Qe,Ut as $e,V as et,Vn as tt,Vr as nt,Vt as rt,W as it,Wn as at,Wr as ot,Wt as st,X as ct,Xr as lt,Xt as ut,Y as dt,Yr as ft,Yt as pt,Z as mt,Zn as ht,Zr as gt,Zt as _t,_ as vt,_i as yt,_n as bt,_t as xt,ai as St,an as Ct,at as wt,b as Tt,br as Et,bt as Dt,ci as Ot,ct as kt,d as At,di as jt,dr as P,dt as Mt,ei as Nt,en as Pt,et as Ft,f as It,fi as Lt,fn as Rt,ft as zt,g as Bt,gi as Vt,gt as Ht,h as Ut,hi as Wt,hn as Gt,hr as Kt,ht as qt,i as Jt,ii as Yt,in as Xt,ir as Zt,it as Qt,j as $t,jn as F,jr as en,jt as tn,k as nn,kn as rn,kr as an,kt as on,li as I,lr as L,lt as sn,m as cn,mi as R,mt as ln,n as un,ni as dn,nn as fn,nt as pn,oi as mn,on as hn,or as gn,ot as _n,p as vn,pi as z,pn as yn,pr as bn,pt as xn,q as Sn,qr as Cn,qt as wn,r as Tn,ri as En,rn as Dn,rr as B,rt as On,s as kn,si as An,sn as jn,sr as Mn,st as Nn,t as Pn,ti as Fn,tn as In,tt as Ln,ui as V,ur as Rn,ut as zn,v as Bn,vn as Vn,vr as Hn,vt as Un,w as Wn,wn as H,wr as Gn,wt as Kn,x as qn,xr as Jn,xt as Yn,y as Xn,yn as Zn,yr as Qn,yt as $n,z as er,zn as tr,zr as nr,zt as rr}from"./json-4.1.1.js";import{t as ir}from"./preload-helper-4.1.1.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var ar=class extends Error{range;constructor(e,t){super(e),this.range=t}};function U(e,t){return new ar(e,t)}function or(e){let t=e.split(`@`,2);return t.length===2&&t[0]===``&&/^\w/.test(t[1])}var sr=new Map;function cr(e,t){for(;e.length>0;){let n=e.shift();if(n===void 0)throw new L(`Docstring.parseAllTags`,`Atomicity violation: doc lines changed while parsing?`);let{line:r,range:i}=n;if(!or(r))throw U(`Expected only tags at the end of docstring, but encountered a non-tag: ${r}`,i);let[a,...o]=r.split(` `);t.push(ur(a,o.join(` `),i))}}function lr(e,t){sr.set(e,t)}function ur(e,t,n){let r=sr.get(e);if(r===void 0)throw U(`Unknown doc tag: ${e}`,n);return r(t,n)}function dr(e){return Array.isArray(e.contents)&&e.contents.every(e=>typeof e==`string`)}lr(`@category`,(e,t)=>{let n=e.split(`,`).map(e=>e.trim()).filter(e=>e.length>0);if(n.length===0)throw U(`Error in @category tag: expected at least one category`,t);return{tag:`@category`,contents:n,range:t}});var fr=(e,t)=>{let n=t.loadModule(e.name,e.kind,e.alias);return n.tag===`trace`&&t.advanceStmt(),n},pr=(e,t)=>(t.addExports(e.names),t.advanceStmt(),W),mr=(e,t)=>t.isProcessingBlk?t.hasFramesRemaining()?t.stepFrame():(Et(t.lastResult)&&(t.lastResult.name===void 0||t.lastResult.name===`##anonymous##`)&&(t.lastResult.name=e.name),t.topLevelEnv=t.topLevelEnv.extendWithTopLevel([e.name,t.lastResult]),t.advanceStmt(),W):(t.beginProcessingBlk(e.expr),W),hr=(e,t)=>t.isProcessingBlk?t.hasFramesRemaining()?t.stepFrame():(t.advanceStmt(),jr):(t.beginProcessingBlk(e.expr),W),gr=(e,t)=>t.isProcessingBlk?t.hasFramesRemaining()?t.stepFrame():(t.advanceStmt(),W):(t.beginProcessingBlk(e.expr),W),_r=class{name;env;values;ops;callRange;stepOver;home;constructor(e,t,n,r=Vt.none,i=!1,a){this.name=e,this.env=t,this.values=[],this.ops=n.toReversed(),this.callRange=r,this.stepOver=i,this.home=a}isFinished(){return this.ops.length===0}canTailCall(){return this.ops.every(e=>e.tag===`pop-scope`)}pushBlk(e){this.ops.push(...e.toReversed())}popInstr(){let e=this.ops.pop();if(!e)throw new L(`Frame.popInstr`,`Attempted to pop operation off frame ${this.name} when none remain`);return e}},vr=(e,t)=>(t.values.push(e.value),Mr),yr=(e,t)=>{if(!t.env.has(e.name))throw new P(`Runtime`,`Variable not found: ${e.name}`);return t.values.push(t.env.get(e.name)),Mr},br=(e,t,n)=>(t.values.push(Ee(e.params,e.body,t.env.getScopes(),()=>{throw new L(`Fiber.ClsHandler`,`Closure.call was deprecated!`)},e.name,e.restParam,n.stepOverClosures,t.home)),Mr);function xr(e,t,n,r,i){if(We(e))try{return n.values.push(e(...t)),W}catch(t){let r=!n.name.startsWith(`##`),a=r?n.callRange:i;throw t instanceof bn?((r||!n.stepOver)&&(t.range??=a),t):t instanceof P?(t.range??=a,t.source??=r?n.name:e.name,t):new P(`Runtime`,`Unexpected error in Javascript function call: ${t instanceof Error?t.toString():String(t)}`,void 0,i,void 0)}if(Et(e)){if(t.length<e.params.length||!e.restParam&&t.length!==e.params.length)throw new P(`Runtime`,`Arity mismatch in function call: expected ${e.params.length.toString()} arguments, got ${t.length.toString()}`,void 0,i,void 0);let a=t.slice(0,e.params.length),o=e.params.map((e,t)=>[e,a[t]]).concat(e.restParam?[[e.restParam,V(t.slice(e.params.length))]]:[]),s=new Map(o),c=new _r(e.name??`##anonymous##`,(e.home??r.topLevelEnv).withLocalScopes([...e.locals,s]),e.code,i,e.stepOver??!1,e.home);return n.canTailCall()?r.replaceFrame(c):r.pushFrame(c),W}throw new P(`Runtime`,`Not a function or closure: ${JSON.stringify(e)}`,void 0,i,void 0)}var Sr=(e,t,n)=>{if(t.values.length<e.numArgs+1)throw new L(`Fiber.ApHandler`,`Not enough values for application: expected ${(e.numArgs+1).toString()}, currently have ${t.values.length.toString()}`);let r=t.values.splice(-(e.numArgs+1)),i=r[0];return xr(i,e.numArgs===0?[]:r.splice(-e.numArgs),t,n,e.range)},Cr=(e,t,n)=>{if(t.values.length<2)throw new L(`Fiber.ApSpreadHandler`,`Not enough values for ap-spread: expected 2, currently have ${t.values.length.toString()}`);let[r,i]=t.values.splice(-2);if(!g(i))throw new P(`Runtime`,`expected a list, received ${I(i)}`,void 0,e.range,`apply`);return xr(r,an(i),t,n,e.range)},wr=(e,t)=>{if(t.values.length===0)throw new L(`Fiber.MatchHandler`,`Match requires at least one value`);let n=t.values.pop();e.currBranchIdx??=0;let r=e.branches.at(e.currBranchIdx++);if(!r)throw new P(`Runtime`,`Inexhaustive pattern match failure`);let[i,a]=r,o=Yt(n,i);return o?(t.env=t.env.pushScope(o),e.currBranchIdx=0,t.pushBlk(a)):(t.pushBlk([e]),t.values.push(n)),W},Tr=(e,t)=>{let n=e.bindings.length;if(e.idx===0)t.env=t.env.declareScope(e.bindings.flatMap(e=>St(e.pat)));else{if(t.values.length===0)throw new L(`Fiber.LetHandler`,`let binding value missing from the stack`);let n=t.values.pop(),r=e.bindings[e.idx-1],i=Yt(n,r.pat);if(!i)throw new P(`Runtime`,r.failMsg??`let: value did not match its pattern`);for(let[e,n]of i)t.env.assign(e,n)}return e.idx<n?t.pushBlk([...e.bindings[e.idx].value,nt(e.bindings,e.body,e.range,e.idx+1,e.provenance)]):t.pushBlk(e.body),W},Er=(e,t)=>{if(t.values.length===0)throw new L(`Fiber.IfHandler`,`if requires a guard value`);let n=t.values.pop();if(n===!0)t.pushBlk(e.thenB);else if(n===!1)t.pushBlk(e.elseB);else throw new P(`Runtime`,`if: expected a boolean guard, received ${I(n)}`);return W},Dr=(e,t)=>(t.env=t.env.popScope(),Mr),Or=(e,t,n)=>{if(t.values.length<2)throw new L(`Fiber.PushHandlerHandler`,`Expected a handler and a guarded function on the stack`);return n.handlerStack.push({frameDepth:n.frames.length,baseDepth:t.values.length-2,handler:t.values[t.values.length-2]}),Mr},kr=(e,t,n)=>{if(t.values.length<2)throw new L(`Fiber.PopHandlerHandler`,`Expected a handler and a result on the stack`);let r=mn(t.values,`the frame's value stack`);return t.values.pop(),t.values.push(r),n.handlerStack.pop(),Mr},Ar=new Map,jr={tag:`display`},W={tag:`trace`},Mr={tag:`minor`};function Nr(e,t){return{tag:`import-file`,filename:e,...t===void 0?{}:{alias:t}}}function Pr(e,t){return{tag:`block-on`,action:e,range:t}}var Fr=class{topLevelEnv;frames=[];lastResult=null;handlerStack=[];prog;currStmtIdx=0;_isProcessingBlk=!1;maxCallStackDepth=1e4;_exportedNames=new Set;stepOverClosures;constructor(e,t=jt.empty,n=!1){this.prog=e,this.topLevelEnv=t,this.stepOverClosures=n}step(){let e=this.prog.at(this.currStmtIdx);if(!e)throw new L(`Fiber.step`,`Attempted to step but no statements remain!`);switch(e.tag){case`import`:return fr(e,this);case`define`:return mr(e,this);case`export`:return pr(e,this);case`disp`:return hr(e,this);case`stmtexp`:return gr(e,this)}}addExports(e){for(let t of e)this._exportedNames.add(t)}getModule(){let e=this.topLevelEnv.getTopLevelAsModule(this._exportedNames);return e.allBindings=this.topLevelEnv.getTopLevelAsModule().bindings,e}advanceStmt(){this.frames=[],this.currStmtIdx++,this._isProcessingBlk=!1}get isProcessingBlk(){return this._isProcessingBlk}isDone(){return this.currStmtIdx>=this.prog.length}get stmtIndex(){return this.currStmtIdx}get statementCount(){return this.prog.length}statementAt(e){return this.prog.at(e)}get lastStatement(){let e=this.prog.at(this.currStmtIdx-1);if(!e)throw new L(`Fiber.lastStatement`,`Attempted to get the last completed statement in fiber when none exist at index ${(this.currStmtIdx-1).toString()}`);return e}beginProcessingBlk(e){this._isProcessingBlk=!0,this.pushFrame(new _r(`##stmt-${this.currStmtIdx.toString()}##`,this.topLevelEnv,e))}get currentFrame(){return this.frames.at(-1)}pushFrame(e){if(this.frames.length>=this.maxCallStackDepth)throw new P(`Runtime`,`Max call stack depth ${this.maxCallStackDepth.toString()} exceeded!`);this.frames.push(e)}popFrame(){this.frames.pop()}replaceFrame(e){this.popFrame(),this.pushFrame(e)}hasFramesRemaining(){return this.frames.length>0}completeCurrentFrame(){let e=this.currentFrame;if(!e)throw new L(`Fiber.completeCurrentFrame`,`Attempted to complete a frame when none remain`);if(e.values.length!==1)throw new L(`Fiber.stepFrame`,`Frame must finish with exactly one value on the stack, finished with ${e.values.length.toString()} instead`);let t=e.values.pop();this.popFrame(),this.hasFramesRemaining()?this.currentFrame.values.push(t):this.lastResult=t}handleError(e){let t=this.handlerStack.pop();if(t===void 0)return!1;this.frames.length=t.frameDepth;let n=this.currentFrame;if(n===void 0)throw new L(`Fiber.handleError`,`Handler unwound past the bottom of the frame stack`);let r=0,i=n.popInstr();for(;i.tag!==`pop-handler`||r>0;)i.tag===`push-handler`?r++:i.tag===`pop-handler`&&r--,i=n.popInstr();return n.values.length=t.baseDepth,xr(t.handler,[e.message],n,this,e.range??Vt.none),!0}resumeWithValue(e){let t=this.currentFrame;if(t===void 0)throw new L(`Fiber.resumeWithValue`,`Attempted to resume a fiber with no current frame`);t.values.push(e),t.isFinished()&&this.completeCurrentFrame()}stepFrame(){if(!this.currentFrame)throw new P(`Runtime`,`Attempted to step stack frame when none exist!`);let e=this.currentFrame.popInstr(),t;switch(e.tag){case`lit`:t=vr(e,this.currentFrame,this);break;case`var`:t=yr(e,this.currentFrame,this);break;case`cls`:t=br(e,this.currentFrame,this);break;case`ap`:t=Sr(e,this.currentFrame,this);break;case`match`:t=wr(e,this.currentFrame,this);break;case`let`:t=Tr(e,this.currentFrame,this);break;case`if`:t=Er(e,this.currentFrame,this);break;case`pop-scope`:t=Dr(e,this.currentFrame,this);break;case`ap-spread`:t=Cr(e,this.currentFrame,this);break;case`push-handler`:t=Or(e,this.currentFrame,this);break;case`pop-handler`:t=kr(e,this.currentFrame,this);break}return this.currentFrame.isFinished()&&this.completeCurrentFrame(),t}loadModule(e,t,n){if(t===`builtin`){let t=Ar.get(e);if(!t)throw new P(`Runtime`,`No such built-in library: ${e}`);return this.topLevelEnv=n===void 0?this.topLevelEnv.extendWithImport(e,t):this.topLevelEnv.extendWithQualifiedImport(n,t),W}else return Nr(e,n)}},Ir=globalThis.scheduler;function Lr(){return Ir&&typeof Ir.yield==`function`?Ir.yield():new Promise(e=>{let t=new MessageChannel;t.port1.onmessage=()=>{t.port1.close(),t.port2.close(),e()},t.port2.postMessage(void 0)})}function Rr(e,t){return Nt(`trace-start`,[`preamble`,`output`],[e,t])}Mn.registerCustomRenderer(e=>N(e,`trace-start`),e=>{let t=e,n=t.preamble===``?0:t.preamble.length+1,r=t.output?Mn.render(t.output,n):``;return[t.preamble,r].filter(e=>e!==``).join(` `)});function zr(e){return Nt(`trace-output`,[`output`],[e])}var Br=`--> `;Mn.registerCustomRenderer(e=>N(e,`trace-output`),e=>`${Br}${Mn.render(e.output,4)}`);function Vr(e){switch(e.tag){case`pwild`:return de(e.range);case`id`:return he(e.name,e.range);case`plit`:return te(e.value,e.range);case`pctor`:return ot(e.name.name,e.args.map(Vr),e.range);case`pvec`:return Cn(e.args.map(Vr),e.range)}}function G(e){switch(e.tag){case`lit`:return[ie(e.value,e.range,e.provenance)];case`id`:return[Fn(e.name,e.range)];case`app`:return e.head.tag===`id`&&e.head.name===`##ap-spread##`?[...G(e.args[0]),...G(e.args[1]),en(e.range)]:[...G(e.head),...e.args.flatMap(G),c(e.args.length,e.range,e.provenance)];case`lam`:return[Ne(e.params.map(e=>e.name),G(e.body),`##anonymous##`,e.range,e.restParam?.name,e.provenance)];case`let`:return[nt(e.bindings.map(e=>({pat:Vr(e.pat),value:G(e.value),failMsg:`let: value did not match pattern ${ue(e.pat)}`})),G(e.body),e.range,0,e.provenance),gt(e.range)];case`if`:return[...G(e.guard),nr(G(e.ifB),G(e.elseB),e.range,e.provenance)];case`match`:return[...G(e.scrutinee),Qe(e.branches.map(({pat:e,body:t})=>[Vr(e),G(t)]),e.range),gt(e.range)];default:throw new L(`lowerExpr`,`Non-core expression encountered: ${e.tag}`)}}function Hr(e,t=!0){switch(e.tag){case`import`:return f(e.module,e.kind,e.range,e.alias);case`export`:return Be(e.names.map(e=>e.name),e.range);case`define`:return se(e.name.name,G(e.value),e.range);case`display`:return ye(G(e.value),e.range);case`stmtexp`:return t?ye(G(e.expr),e.range):i(G(e.expr),e.range);default:throw new L(`lowerStmt`,`Unknown expected statement type: ${e.tag}`)}}function Ur(e,t=!0){return e.map(e=>Hr(e,t))}function Wr(e,t){let n=e=>Wr(e,t);switch(e.tag){case`lit`:return e;case`id`:return e.name===`%&`?(t.hasRest=!0,e):e.name===`%`?(t.maxNum=Math.max(t.maxNum,1),F(`%1`,e.range)):(/^%[1-9][0-9]*$/.test(e.name)&&(t.maxNum=Math.max(t.maxNum,parseInt(e.name.slice(1),10))),e);case`app`:return H(n(e.head),e.args.map(n),e.range,e.provenance);case`lam`:return Me(e.params,n(e.body),e.range,e.restParam,e.provenance);case`let`:return E(e.bindings.map(e=>({pat:e.pat,value:n(e.value)})),n(e.body),e.range,e.provenance);case`if`:return M(n(e.guard),n(e.ifB),n(e.elseB),e.range,e.provenance);case`match`:return ve(n(e.scrutinee),e.branches.map(e=>({pat:e.pat,body:n(e.body)})),e.range);default:throw new L(`collectAndNormalizePercent`,`Unexpected form: ${e.tag}`)}}function K(e){switch(e.tag){case`id`:return e;case`lit`:return e;case`app`:return H(K(e.head),e.args.map(K),e.range);case`lam`:return Me(e.params,K(e.body),e.range,e.restParam);case`let`:return E(e.bindings.map(e=>({pat:e.pat,value:K(e.value)})),K(e.body),e.range);case`if`:return M(K(e.guard),K(e.ifB),K(e.elseB),e.range);case`match`:return ve(K(e.scrutinee),e.branches.map(e=>({pat:e.pat,body:K(e.body)})),e.range);case`begin`:{let t=e.exps.map(K),n=t[t.length-1];for(let r=t.length-2;r>=0;r--)n=E([{pat:Ze(e.range),value:t[r]}],n,e.range,`begin`);return n}case`and`:{let t=e.exps.map(K),n=j(!0,e.range,`and`);for(let r=t.length-1;r>=0;r--)n=M(t[r],n,j(!1,e.range,`and`),e.range,`and`);return n}case`or`:{let t=e.exps.map(K),n=j(!1,e.range,`or`);for(let r=t.length-1;r>=0;r--)n=M(t[r],j(!0,e.range,`or`),n,e.range,`or`);return n}case`cond`:{let t=e.branches.map(e=>({test:K(e.test),body:K(e.body)})),n=H(F(`##error##`,e.range),[j(`No matching clause in cond`,e.range)],e.range,`cond`);for(let r=t.length-1;r>=0;r--)n=M(t[r].test,t[r].body,n,e.range,`cond`);return n}case`anonfn`:{let t={maxNum:0,hasRest:!1},n=Wr(K(e.body),t),r=[];for(let n=1;n<=t.maxNum;n++)r.push(F(`%${String(n)}`,e.range));let i=t.hasRest?F(`%&`,e.range):void 0;return Me(r,n,e.range,i,`anon-fn`)}case`vec`:return H(F(`##mkVec##`,e.range),e.exps.map(K),e.range,`vector-lit`);case`obj`:return H(F(`##mkObj##`,e.range),e.pairs.flatMap(({key:e,value:t})=>[K(e),K(t)]),e.range,`obj-lit`)}}function Gr(e){switch(e.tag){case`import`:return[e];case`define`:return[y(e.name,K(e.value),e.range,e.docComments)];case`export`:return[e];case`defexport`:return[y(e.name,K(e.value),e.range,e.docComments,`define-export`),s([e.name],e.range,`define-export`)];case`display`:return[rn(K(e.value),e.range)];case`struct`:return[y(e.name,H(F(`##mkCtorFn##`),[j(e.name.name),j(e.fields.map(e=>e.name))],e.range),e.range),y(F(`${e.name.name}?`,e.range),H(F(`##mkPredFn##`),[j(e.name.name)],e.range),e.range),...e.fields.map(t=>y(F(`${e.name.name}-${t.name}`,e.range),H(F(`##mkGetFn##`),[j(e.name.name),j(t.name)]),e.range))];case`stmtexp`:return[at(K(e.expr),e.range)]}}function Kr(e){return e.flatMap(Gr)}function q(e,t,n,r){return{phase:e,severity:t,message:n,range:r}}function qr(e){return new P(e.phase===`Docstring`?`Docstring`:`Parser`,e.message,e.modName,e.range,e.source)}var Jr=/^[+-]?\d+$/,Yr=/^[+-]?(\d+|(\d*\.\d+)|(\d+\.\d*))([eE][+-]?\d+)?$/;function Xr(e){return Jr.test(e)?parseInt(e):parseFloat(e)}function Zr(e,t){if(e.length===0)throw new L(`parseStringLiteral`,`Empty string literal (with no quote!)`);if(!e.startsWith(`"`))throw new P(`Parser`,`String literal must begin with a quote`,void 0,t);let n=``;for(let r=1;r<e.length;r++)if(e[r]===`"`)return n;else if(e[r]===`\\`){if(r+1>=e.length)throw new P(`Parser`,`Escape character "\\" cannot occur at the end of a string.`,void 0,t);let i=e[r+1];switch(i){case`a`:n+=`\x07`;break;case`b`:n+=`\b`;break;case`t`:n+=`	`;break;case`n`:n+=`
`;break;case`v`:n+=`\v`;break;case`f`:n+=`\f`;break;case`r`:n+=`\r`;break;case`e`:n+=`\x1B`;break;case`"`:n+=`"`;break;case`'`:n+=`'`;break;case`\\`:n+=`\\`;break;default:if(i>=`0`&&i<=`9`)throw new P(`Parser`,`Octal escape codes not supported`,void 0,t);if(i===`x`)throw new P(`Parser`,`Hex escape codes not supported`,void 0,t);if(i===`u`||i===`U`)throw new P(`Parser`,`Unicode escape codes not supported`,void 0,t);i===`
`||(n+=i)}r+=1}else n+=e[r];return n}function Qr(e,t){let n=e.slice(2);if(n.length===1)return Se(n);if(En.has(n))return Se(En.get(n));throw new P(`Parser`,`Invalid character literal: ${e}`,void 0,t)}function $r(e){return!Jr.test(e)&&!Yr.test(e)&&e!==`#t`&&e!==`#f`&&e!==`null`&&!e.startsWith(`"`)&&!e.startsWith(`#\\`)&&e.length>0}var ei=[`and`,`begin`,`cond`,`define`,`define-export`,`export`,`if`,`import`,`display`,`lambda`,`let`,`match`,`or`,`struct`];function ti(e,t){try{return e()}catch(e){if(t(e))throw e;return}}var ni=Symbol(`##SCAMPER_TAGGED##`);function ri(e,t){return{[ni]:e,value:t}}function ii(e){return typeof e==`object`&&!!e&&ni in e}function ai(e,t){return ii(e)&&e[ni]===t}function oi(e){let t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}var si=e=>/\s/.test(e),ci={Beginning:`beginning`,PrePredicate:`pre-predicate`},li=class extends ar{constructor(e,t){super(`Error while parsing param in doc string: ${e}`,t)}},ui=class extends li{loc;constructor(e,t,n){super(t,n),this.loc=e}},di=class extends li{},fi=class extends li{};function pi(e){let t=e.shift();if(t===void 0)throw new L(`Docstring.parseSingleParam`,`Doc lines expected to be not empty when calling parseSingleParam`);let n=ti(()=>gi(t),bi);if(!n)return e.unshift(t),Ii.Description;let{param:r,beginningWhitespaces:i}=n,a=e.shift();if(a===void 0)throw U(`Doc string is missing function description`,t.range);if(r.description=ti(()=>vi(a,i),bi),r.description===void 0)return e.unshift(a),r;let o=a.range;for(;e.length>0;){let t=e.shift();if(t===void 0)throw U(`Doc string is missing function description`,a.range);o=t.range;let n=ti(()=>vi(t,i),bi);if(n===void 0)return e.unshift(t),r;r.description+=` `+n}throw U(`Doc string is missing function description`,o)}var mi=1,hi=1;function gi(e){let t=yi(e,mi,ci.Beginning),{line:n,range:r}=e,i=n.slice(t).split(`:`);if(i.length<2)throw new di(`Line is missing separating colon between name and predicate`,r);let[a,...o]=i,s=o.join(`:`),c=a.trimEnd(),l=[];$r(c)?c.startsWith(`_`)?l.push(`Identifiers cannot begin with "_" unless inside of patterns`):ei.includes(c)&&l.push(`The identifier "${c}" is a reserved word and cannot be used as a variable name`):l.push(`Expected an identifier`);let u=l.length>0?`<error>`:c;if(l.length>0)throw new fi(`Name field is malformed, ${l[0]}`,r);let d=yi({line:s,range:r},hi,ci.PrePredicate),{program:f,diagnostics:p}=gs(s.slice(d).trim());if(!f||p.length>0||f.length>1)throw new fi(`Predicate field is malformed${p.length>0?`, `+p[0].message:``}`,r);if(f.length<1)throw new di(`Predicate field is missing`,r);let m=f[0];if(!Vn(m))throw new fi(`Predicate should be an expression`,r);if(!Pi(m.expr))throw new fi(`Predicate should be either a simple predicate identifier or a complex predicate application`,r);let h=m.expr;return h.range=r,{param:{name:u,predicate:h,range:r},beginningWhitespaces:t}}var _i=1;function vi(e,t){let n=yi(e,t+_i,ci.Beginning);return e.line.slice(n).trim()}function yi({line:e,range:t},n,r){let i=0;for(let a of e){if(si(a)){i++;continue}if(i<n)throw new ui(r,`Line does not have enough ${r} whitespace, expected at least ${n.toString()} but got ${i.toString()}`,t);break}return i}function bi(e){return!(e instanceof ui)||e.loc!==ci.Beginning}function xi(e){let t=``;for(;e.length>0;){let n=e.shift();if(n===void 0)throw new L(`Docstring.parseFunctionDescription`,`Atomicity violation: doc lines changed while parsing?`);if(n.line.startsWith(`@`))return e.unshift(n),{stage:Ii.Tags,description:t.trim()};t+=n.line+` `}return t.trim()}function Si(e){return typeof e.contents==`object`&&e.contents!==null&&`functionCall`in e.contents&&`result`in e.contents}var Ci=` -> `;function wi(e,t,n){throw U(`Error in @example tag: ${e}${n?`, ${n}`:``}`,t)}function Ti(e,t,n){let{program:r,diagnostics:i}=gs(e.trim());(!r||i.length>0)&&wi(`${n} is malformed`,t,i[0]?.message),r.length<1&&wi(`${n} is missing`,t),r.length>1&&wi(`more than one expression found in ${n}`,t);let a=r[0];return a.range=t,a}lr(`@example`,(e,t)=>{let n=e.split(Ci);n.length<2&&wi(`missing separator, expected "expression -> result"`,t);let r=n[0],i=n.slice(1).join(Ci),a=Ti(r,t,`function call`);Vn(a)||wi(`function call should be an expression`,t);let o=a.expr;yn(o)||wi(`function call should be an application expression`,t);let s=Ti(i,t,`result`);return Vn(s)||wi(`result should be an expression`,t),{tag:`@example`,contents:{functionCall:o,result:s.expr},range:t}});var Ei=[`null`];function Di(e,t,n=!1){if(!$r(e)&&!(n&&Ei.includes(e)))throw U(`Expected an identifier`,t);if(e.startsWith(`_`))throw U(`Identifiers cannot begin with "_" unless inside of patterns`,t);if(ei.includes(e))throw U(`The identifier "${e}" is a reserved word and cannot be used as a variable name`,t)}function Oi({line:e,range:t}){if(e.startsWith(` `))throw U(`Function signature cannot start with whitespace`,t);if(!e.startsWith(`(`)||!e.endsWith(`)`))throw U(`Malformed function signature`,t);let n=e.slice(1,-1).trim().split(/\s+/).filter(e=>e.length>0);if(n.length===0)throw U(`Function signature is missing`,t);let[r,...i]=n;Di(r,t);let a=i.indexOf(`&`),o,s;if(a===-1)o=i;else{if(a!==i.length-2)throw U(`Malformed rest parameter: expected a single "&" immediately before the final (rest) parameter name`,t);o=i.slice(0,a),s=i[a+1]}if(i.filter(e=>e===`&`).length>1)throw U(`Malformed function signature: more than one "&" found`,t);o.forEach(e=>{Di(e,t)});let c=o.map(e=>F(e,t)),l;return s!==void 0&&(Di(s,t),l=F(s,t)),{tag:`app`,head:F(r,t),args:c,restParam:l,range:t}}function ki({line:e,range:t}){let{program:n,diagnostics:r}=gs(e);if(!n||r.length>0||n.length>1)throw U(`Malformed predicate field`,t);if(n.length<1)throw U(`Predicate field is missing`,t);let i=n[0];if(!Vn(i))throw U(`Not a contract signature`,t);if(!Pi(i.expr))throw U(`Not a contract signature. Expected a variable or variable application`,t);let a=i.expr;return a.range=t,a}function Ai({line:e,range:t}){return e.trimStart().startsWith(`(`)?ji(e,t):Mi(e,t)}function ji(e,t){let n=` -> `,[r,...i]=e.split(n);if(e.split(n).length<2)throw U(`Missing separator in doc string signature`,t);return{function:Oi({line:r,range:t}),predicate:ki({line:i.join(n),range:t}),range:t,isConstant:!1}}function Mi(e,t){let n=e.indexOf(`:`);if(n===-1)throw U(`Missing separator in doc string signature: expected "(name ...) -> predicate" or "name: predicate"`,t);let r=e.slice(0,n).trim();if(r.includes(` `))throw U(`A constant signature names one binding and takes no parameters`,t);Di(r,t,!0);let i=ki({line:e.slice(n+1),range:t});return{function:{tag:`app`,head:F(r,t),args:[],range:t},predicate:i,range:t,isConstant:!0}}function Ni(e){return Zn(e.head)&&e.args.every(e=>Zn(e)||yn(e)&&Ni(e))}function Pi(e){return Zn(e)||yn(e)&&Ni(e)}var Fi=Symbol(`ParseStageTag`),Ii={Params:ri(Fi,`params`),Description:ri(Fi,`description`),Tags:ri(Fi,`tags`)};function Li(e){let t=e.shift();if(t===void 0)throw new L(`Docstring.parseDocString`,`Attempted to parse docstring from comment block with no doc lines!`);let n=t.range,r=(e.at(-1)??t).range,i=Ai(t),a=[],o,s=``,c=[],l=Ii.Params;for(;e.length>0;)switch(l){case Ii.Params:{let t=pi(e);if(ai(t,Fi)){let e=i.function.args.length+ +!!i.function.restParam;if(a.length+ +!!o!==e)throw U(i.function.restParam&&!o?`Rest parameter "${i.function.restParam.name}" was declared in the signature but not documented`:`Encountered function description before all parameters were described`,n);l=t}else t.name===i.function.restParam?.name?o=t:a.push(t);break}case Ii.Description:{let t=xi(e);typeof t==`object`&&`stage`in t?{stage:l,description:s}=t:s=t;break}case Ii.Tags:cr(e,c);break}if(s===``)throw U(`Docstring must have a function description`,r);return{signature:i,params:a,restParam:o,description:s,tags:c,range:new Vt(n.begin,r.end)}}var Ri=`;;; `;function zi({line:e,range:t}){let[n,...r]=e.split(Ri);if(!(r.length===0||n!==``))return{line:r.join(Ri),range:t}}function Bi(e){return e.map(zi).filter(e=>e!==void 0)}function Vi(e){let t=Bi(e);if(t.length===0)return{diagnostics:[]};try{return{doc:Li(t),diagnostics:[]}}catch(e){if(e instanceof ar)return{diagnostics:[q(`Docstring`,`warning`,e.message,e.range)]};throw e}}var Hi=1024,Ui=0,Wi=class{constructor(e,t){this.from=e,this.to=t}},J=class{constructor(e={}){this.id=Ui++,this.perNode=!!e.perNode,this.deserialize=e.deserialize||(()=>{throw Error(`This node type doesn't define a deserialize function`)}),this.combine=e.combine||null}add(e){if(this.perNode)throw RangeError(`Can't add per-node props to node types`);return typeof e!=`function`&&(e=qi.match(e)),t=>{let n=e(t);return n===void 0?null:[this,n]}}};J.closedBy=new J({deserialize:e=>e.split(` `)}),J.openedBy=new J({deserialize:e=>e.split(` `)}),J.group=new J({deserialize:e=>e.split(` `)}),J.isolate=new J({deserialize:e=>{if(e&&e!=`rtl`&&e!=`ltr`&&e!=`auto`)throw RangeError(`Invalid value for isolate: `+e);return e||`auto`}}),J.contextHash=new J({perNode:!0}),J.lookAhead=new J({perNode:!0}),J.mounted=new J({perNode:!0});var Gi=class{constructor(e,t,n,r=!1){this.tree=e,this.overlay=t,this.parser=n,this.bracketed=r}static get(e){return e&&e.props&&e.props[J.mounted.id]}},Ki=Object.create(null),qi=class e{constructor(e,t,n,r=0){this.name=e,this.props=t,this.id=n,this.flags=r}static define(t){let n=t.props&&t.props.length?Object.create(null):Ki,r=!!t.top|(t.skipped?2:0)|(t.error?4:0)|(t.name==null?8:0),i=new e(t.name||``,n,t.id,r);if(t.props){for(let e of t.props)if(Array.isArray(e)||(e=e(i)),e){if(e[0].perNode)throw RangeError(`Can't store a per-node prop on a node type`);n[e[0].id]=e[1]}}return i}prop(e){return this.props[e.id]}get isTop(){return(this.flags&1)>0}get isSkipped(){return(this.flags&2)>0}get isError(){return(this.flags&4)>0}get isAnonymous(){return(this.flags&8)>0}is(e){if(typeof e==`string`){if(this.name==e)return!0;let t=this.prop(J.group);return t?t.indexOf(e)>-1:!1}return this.id==e}static match(e){let t=Object.create(null);for(let n in e)for(let r of n.split(` `))t[r]=e[n];return e=>{for(let n=e.prop(J.group),r=-1;r<(n?n.length:0);r++){let i=t[r<0?e.name:n[r]];if(i)return i}}}};qi.none=new qi(``,Object.create(null),0,8);var Ji=class e{constructor(e){this.types=e;for(let t=0;t<e.length;t++)if(e[t].id!=t)throw RangeError(`Node type ids should correspond to array positions when creating a node set`)}extend(...t){let n=[];for(let e of this.types){let r=null;for(let n of t){let t=n(e);if(t){r||=Object.assign({},e.props);let n=t[1],i=t[0];i.combine&&i.id in r&&(n=i.combine(r[i.id],n)),r[i.id]=n}}n.push(r?new qi(e.name,r,e.id,e.flags):e)}return new e(n)}},Yi=new WeakMap,Xi=new WeakMap,Y;(function(e){e[e.ExcludeBuffers=1]=`ExcludeBuffers`,e[e.IncludeAnonymous=2]=`IncludeAnonymous`,e[e.IgnoreMounts=4]=`IgnoreMounts`,e[e.IgnoreOverlays=8]=`IgnoreOverlays`,e[e.EnterBracketed=16]=`EnterBracketed`})(Y||={});var X=class e{constructor(e,t,n,r,i){if(this.type=e,this.children=t,this.positions=n,this.length=r,this.props=null,i&&i.length){this.props=Object.create(null);for(let[e,t]of i)this.props[typeof e==`number`?e:e.id]=t}}toString(){let e=Gi.get(this);if(e&&!e.overlay)return e.tree.toString();let t=``;for(let e of this.children){let n=e.toString();n&&(t&&(t+=`,`),t+=n)}return this.type.name?(/\W/.test(this.type.name)&&!this.type.isError?JSON.stringify(this.type.name):this.type.name)+(t.length?`(`+t+`)`:``):t}cursor(e=0){return new ua(this.topNode,e)}cursorAt(e,t=0,n=0){let r=new ua(Yi.get(this)||this.topNode);return r.moveTo(e,t),Yi.set(this,r._tree),r}get topNode(){return new na(this,0,0,null)}resolve(e,t=0){let n=ea(Yi.get(this)||this.topNode,e,t,!1);return Yi.set(this,n),n}resolveInner(e,t=0){let n=ea(Xi.get(this)||this.topNode,e,t,!0);return Xi.set(this,n),n}resolveStack(e,t=0){return la(this,e,t)}iterate(e){let{enter:t,leave:n,from:r=0,to:i=this.length}=e,a=e.mode||0,o=(a&Y.IncludeAnonymous)>0;for(let e=this.cursor(a|Y.IncludeAnonymous);;){let a=!1;if(e.from<=i&&e.to>=r&&(!o&&e.type.isAnonymous||t(e)!==!1)){if(e.firstChild())continue;a=!0}for(;a&&n&&(o||!e.type.isAnonymous)&&n(e),!e.nextSibling();){if(!e.parent())return;a=!0}}}prop(e){return e.perNode?this.props?this.props[e.id]:void 0:this.type.prop(e)}get propValues(){let e=[];if(this.props)for(let t in this.props)e.push([+t,this.props[t]]);return e}balance(t={}){return this.children.length<=8?this:ha(qi.none,this.children,this.positions,0,this.children.length,0,this.length,(t,n,r)=>new e(this.type,t,n,r,this.propValues),t.makeTree||((t,n,r)=>new e(qi.none,t,n,r)))}static build(e){return fa(e)}};X.empty=new X(qi.none,[],[],0);var Zi=class e{constructor(e,t){this.buffer=e,this.index=t}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}get pos(){return this.index}next(){this.index-=4}fork(){return new e(this.buffer,this.index)}},Qi=class e{constructor(e,t,n){this.buffer=e,this.length=t,this.set=n}get type(){return qi.none}toString(){let e=[];for(let t=0;t<this.buffer.length;)e.push(this.childString(t)),t=this.buffer[t+3];return e.join(`,`)}childString(e){let t=this.buffer[e],n=this.buffer[e+3],r=this.set.types[t],i=r.name;if(/\W/.test(i)&&!r.isError&&(i=JSON.stringify(i)),e+=4,n==e)return i;let a=[];for(;e<n;)a.push(this.childString(e)),e=this.buffer[e+3];return i+`(`+a.join(`,`)+`)`}findChild(e,t,n,r,i){let{buffer:a}=this,o=-1;for(let s=e;s!=t&&!($i(i,r,a[s+1],a[s+2])&&(o=s,n>0));s=a[s+3]);return o}slice(t,n,r){let i=this.buffer,a=new Uint16Array(n-t),o=0;for(let e=t,s=0;e<n;){a[s++]=i[e++],a[s++]=i[e++]-r;let n=a[s++]=i[e++]-r;a[s++]=i[e++]-t,o=Math.max(o,n)}return new e(a,o,this.set)}};function $i(e,t,n,r){switch(e){case-2:return n<t;case-1:return r>=t&&n<t;case 0:return n<t&&r>t;case 1:return n<=t&&r>t;case 2:return r>t;case 4:return!0}}function ea(e,t,n,r){for(;e.from==e.to||(n<1?e.from>=t:e.from>t)||(n>-1?e.to<=t:e.to<t);){let t=!r&&e instanceof na&&e.index<0?null:e.parent;if(!t)return e;e=t}let i=r?0:Y.IgnoreOverlays;if(r)for(let r=e,a=r.parent;a;r=a,a=r.parent)r instanceof na&&r.index<0&&a.enter(t,n,i)?.from!=r.from&&(e=a);for(;;){let r=e.enter(t,n,i);if(!r)return e;e=r}}var ta=class{cursor(e=0){return new ua(this,e)}getChild(e,t=null,n=null){let r=ra(this,e,t,n);return r.length?r[0]:null}getChildren(e,t=null,n=null){return ra(this,e,t,n)}resolve(e,t=0){return ea(this,e,t,!1)}resolveInner(e,t=0){return ea(this,e,t,!0)}matchContext(e){return ia(this.parent,e)}enterUnfinishedNodesBefore(e){let t=this.childBefore(e),n=this;for(;t;){let e=t.lastChild;if(!e||e.to!=t.to)break;e.type.isError&&e.from==e.to?(n=t,t=e.prevSibling):t=e}return n}get node(){return this}get next(){return this.parent}},na=class e extends ta{constructor(e,t,n,r){super(),this._tree=e,this.from=t,this.index=n,this._parent=r}get type(){return this._tree.type}get name(){return this._tree.type.name}get to(){return this.from+this._tree.length}nextChild(t,n,r,i,a=0){for(let o=this;;){for(let{children:s,positions:c}=o._tree,l=n>0?s.length:-1;t!=l;t+=n){let l=s[t],u=c[t]+o.from,d;if(!(!(a&Y.EnterBracketed&&l instanceof X&&(d=Gi.get(l))&&!d.overlay&&d.bracketed&&r>=u&&r<=u+l.length)&&!$i(i,r,u,u+l.length))){if(l instanceof Qi){if(a&Y.ExcludeBuffers)continue;let e=l.findChild(0,l.buffer.length,n,r-u,i);if(e>-1)return new oa(new aa(o,l,t,u),null,e)}else if(a&Y.IncludeAnonymous||!l.type.isAnonymous||da(l)){let s;if(!(a&Y.IgnoreMounts)&&(s=Gi.get(l))&&!s.overlay)return new e(s.tree,u,t,o);let c=new e(l,u,t,o);return a&Y.IncludeAnonymous||!c.type.isAnonymous?c:c.nextChild(n<0?l.children.length-1:0,n,r,i,a)}}}if(a&Y.IncludeAnonymous||!o.type.isAnonymous||(t=o.index>=0?o.index+n:n<0?-1:o._parent._tree.children.length,o=o._parent,!o))return null}}get firstChild(){return this.nextChild(0,1,0,4)}get lastChild(){return this.nextChild(this._tree.children.length-1,-1,0,4)}childAfter(e){return this.nextChild(0,1,e,2)}childBefore(e){return this.nextChild(this._tree.children.length-1,-1,e,-2)}prop(e){return this._tree.prop(e)}enter(t,n,r=0){let i;if(!(r&Y.IgnoreOverlays)&&(i=Gi.get(this._tree))&&i.overlay){let a=t-this.from,o=r&Y.EnterBracketed&&i.bracketed;for(let{from:t,to:r}of i.overlay)if((n>0||o?t<=a:t<a)&&(n<0||o?r>=a:r>a))return new e(i.tree,i.overlay[0].from+this.from,-1,this)}return this.nextChild(0,1,t,n,r)}nextSignificantParent(){let e=this;for(;e.type.isAnonymous&&e._parent;)e=e._parent;return e}get parent(){return this._parent?this._parent.nextSignificantParent():null}get nextSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index+1,1,0,4):null}get prevSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index-1,-1,0,4):null}get tree(){return this._tree}toTree(){return this._tree}toString(){return this._tree.toString()}};function ra(e,t,n,r){let i=e.cursor(),a=[];if(!i.firstChild())return a;if(n!=null){for(let e=!1;!e;)if(e=i.type.is(n),!i.nextSibling())return a}for(;;){if(r!=null&&i.type.is(r))return a;if(i.type.is(t)&&a.push(i.node),!i.nextSibling())return r==null?a:[]}}function ia(e,t,n=t.length-1){for(let r=e;n>=0;r=r.parent){if(!r)return!1;if(!r.type.isAnonymous){if(t[n]&&t[n]!=r.name)return!1;n--}}return!0}var aa=class{constructor(e,t,n,r){this.parent=e,this.buffer=t,this.index=n,this.start=r}},oa=class e extends ta{get name(){return this.type.name}get from(){return this.context.start+this.context.buffer.buffer[this.index+1]}get to(){return this.context.start+this.context.buffer.buffer[this.index+2]}constructor(e,t,n){super(),this.context=e,this._parent=t,this.index=n,this.type=e.buffer.set.types[e.buffer.buffer[n]]}child(t,n,r){let{buffer:i}=this.context,a=i.findChild(this.index+4,i.buffer[this.index+3],t,n-this.context.start,r);return a<0?null:new e(this.context,this,a)}get firstChild(){return this.child(1,0,4)}get lastChild(){return this.child(-1,0,4)}childAfter(e){return this.child(1,e,2)}childBefore(e){return this.child(-1,e,-2)}prop(e){return this.type.prop(e)}enter(t,n,r=0){if(r&Y.ExcludeBuffers)return null;let{buffer:i}=this.context,a=i.findChild(this.index+4,i.buffer[this.index+3],n>0?1:-1,t-this.context.start,n);return a<0?null:new e(this.context,this,a)}get parent(){return this._parent||this.context.parent.nextSignificantParent()}externalSibling(e){return this._parent?null:this.context.parent.nextChild(this.context.index+e,e,0,4)}get nextSibling(){let{buffer:t}=this.context,n=t.buffer[this.index+3];return n<(this._parent?t.buffer[this._parent.index+3]:t.buffer.length)?new e(this.context,this._parent,n):this.externalSibling(1)}get prevSibling(){let{buffer:t}=this.context,n=this._parent?this._parent.index+4:0;return this.index==n?this.externalSibling(-1):new e(this.context,this._parent,t.findChild(n,this.index,-1,0,4))}get tree(){return null}toTree(){let e=[],t=[],{buffer:n}=this.context,r=this.index+4,i=n.buffer[this.index+3];if(i>r){let a=n.buffer[this.index+1];e.push(n.slice(r,i,a)),t.push(0)}return new X(this.type,e,t,this.to-this.from)}toString(){return this.context.buffer.childString(this.index)}};function sa(e){if(!e.length)return null;let t=0,n=e[0];for(let r=1;r<e.length;r++){let i=e[r];(i.from>n.from||i.to<n.to)&&(n=i,t=r)}let r=n instanceof na&&n.index<0?null:n.parent,i=e.slice();return r?i[t]=r:i.splice(t,1),new ca(i,n)}var ca=class{constructor(e,t){this.heads=e,this.node=t}get next(){return sa(this.heads)}};function la(e,t,n){let r=e.resolveInner(t,n),i=null;for(let e=r instanceof na?r:r.context.parent;e;e=e.parent)if(e.index<0){let a=e.parent;(i||=[r]).push(a.resolve(t,n)),e=a}else{let a=Gi.get(e.tree);if(a&&a.overlay&&a.overlay[0].from<=t&&a.overlay[a.overlay.length-1].to>=t){let o=new na(a.tree,a.overlay[0].from+e.from,-1,e);(i||=[r]).push(ea(o,t,n,!1))}}return i?sa(i):r}var ua=class{get name(){return this.type.name}constructor(e,t=0){if(this.buffer=null,this.stack=[],this.index=0,this.bufferNode=null,this.mode=t&~Y.EnterBracketed,e instanceof na)this.yieldNode(e);else{this._tree=e.context.parent,this.buffer=e.context;for(let t=e._parent;t;t=t._parent)this.stack.unshift(t.index);this.bufferNode=e,this.yieldBuf(e.index)}}yieldNode(e){return e?(this._tree=e,this.type=e.type,this.from=e.from,this.to=e.to,!0):!1}yieldBuf(e,t){this.index=e;let{start:n,buffer:r}=this.buffer;return this.type=t||r.set.types[r.buffer[e]],this.from=n+r.buffer[e+1],this.to=n+r.buffer[e+2],!0}yield(e){return e?e instanceof na?(this.buffer=null,this.yieldNode(e)):(this.buffer=e.context,this.yieldBuf(e.index,e.type)):!1}toString(){return this.buffer?this.buffer.buffer.childString(this.index):this._tree.toString()}enterChild(e,t,n){if(!this.buffer)return this.yield(this._tree.nextChild(e<0?this._tree._tree.children.length-1:0,e,t,n,this.mode));let{buffer:r}=this.buffer,i=r.findChild(this.index+4,r.buffer[this.index+3],e,t-this.buffer.start,n);return i<0?!1:(this.stack.push(this.index),this.yieldBuf(i))}firstChild(){return this.enterChild(1,0,4)}lastChild(){return this.enterChild(-1,0,4)}childAfter(e){return this.enterChild(1,e,2)}childBefore(e){return this.enterChild(-1,e,-2)}enter(e,t,n=this.mode){return this.buffer?n&Y.ExcludeBuffers?!1:this.enterChild(1,e,t):this.yield(this._tree.enter(e,t,n))}parent(){if(!this.buffer)return this.yieldNode(this.mode&Y.IncludeAnonymous?this._tree._parent:this._tree.parent);if(this.stack.length)return this.yieldBuf(this.stack.pop());let e=this.mode&Y.IncludeAnonymous?this.buffer.parent:this.buffer.parent.nextSignificantParent();return this.buffer=null,this.yieldNode(e)}sibling(e){if(!this.buffer)return this._tree._parent?this.yield(this._tree.index<0?null:this._tree._parent.nextChild(this._tree.index+e,e,0,4,this.mode)):!1;let{buffer:t}=this.buffer,n=this.stack.length-1;if(e<0){let e=n<0?0:this.stack[n]+4;if(this.index!=e)return this.yieldBuf(t.findChild(e,this.index,-1,0,4))}else{let e=t.buffer[this.index+3];if(e<(n<0?t.buffer.length:t.buffer[this.stack[n]+3]))return this.yieldBuf(e)}return n<0&&this.yield(this.buffer.parent.nextChild(this.buffer.index+e,e,0,4,this.mode))}nextSibling(){return this.sibling(1)}prevSibling(){return this.sibling(-1)}atLastNode(e){let t,n,{buffer:r}=this;if(r){if(e>0){if(this.index<r.buffer.buffer.length)return!1}else for(let e=0;e<this.index;e++)if(r.buffer.buffer[e+3]<this.index)return!1;({index:t,parent:n}=r)}else({index:t,_parent:n}=this._tree);for(;n;{index:t,_parent:n}=n)if(t>-1)for(let r=t+e,i=e<0?-1:n._tree.children.length;r!=i;r+=e){let e=n._tree.children[r];if(this.mode&Y.IncludeAnonymous||e instanceof Qi||!e.type.isAnonymous||da(e))return!1}return!0}move(e,t){if(t&&this.enterChild(e,0,4))return!0;for(;;){if(this.sibling(e))return!0;if(this.atLastNode(e)||!this.parent())return!1}}next(e=!0){return this.move(1,e)}prev(e=!0){return this.move(-1,e)}moveTo(e,t=0){for(;(this.from==this.to||(t<1?this.from>=e:this.from>e)||(t>-1?this.to<=e:this.to<e))&&this.parent(););for(;this.enterChild(1,e,t););return this}get node(){if(!this.buffer)return this._tree;let e=this.bufferNode,t=null,n=0;if(e&&e.context==this.buffer)scan:for(let r=this.index,i=this.stack.length;i>=0;){for(let a=e;a;a=a._parent)if(a.index==r){if(r==this.index)return a;t=a,n=i+1;break scan}r=this.stack[--i]}for(let e=n;e<this.stack.length;e++)t=new oa(this.buffer,t,this.stack[e]);return this.bufferNode=new oa(this.buffer,t,this.index)}get tree(){return this.buffer?null:this._tree._tree}iterate(e,t){for(let n=0;;){let r=!1;if(this.type.isAnonymous||e(this)!==!1){if(this.firstChild()){n++;continue}this.type.isAnonymous||(r=!0)}for(;;){if(r&&t&&t(this),r=this.type.isAnonymous,!n)return;if(this.nextSibling())break;this.parent(),n--,r=!0}}}matchContext(e){if(!this.buffer)return ia(this.node.parent,e);let{buffer:t}=this.buffer,{types:n}=t.set;for(let r=e.length-1,i=this.stack.length-1;r>=0;i--){if(i<0)return ia(this._tree,e,r);let a=n[t.buffer[this.stack[i]]];if(!a.isAnonymous){if(e[r]&&e[r]!=a.name)return!1;r--}}return!0}};function da(e){return e.children.some(e=>e instanceof Qi||!e.type.isAnonymous||da(e))}function fa(e){let{buffer:t,nodeSet:n,maxBufferLength:r=Hi,reused:i=[],minRepeatType:a=n.types.length}=e,o=Array.isArray(t)?new Zi(t,t.length):t,s=n.types,c=0,l=0;function u(e,t,_,v,y,b){let{id:x,start:S,end:C,size:w}=o,T=l,E=c;if(w<0)if(o.next(),w==-1){let t=i[x];_.push(t),v.push(S-e);return}else if(w==-3){c=x;return}else if(w==-4){l=x;return}else throw RangeError(`Unrecognized record size: ${w}`);let D=s[x],ee,O,k=S-e;if(C-S<=r&&(O=h(o.pos-t,y))){let t=new Uint16Array(O.size-O.skip),r=o.pos-O.size,i=t.length;for(;o.pos>r;)i=g(O.start,t,i);ee=new Qi(t,C-O.start,n),k=O.start-e}else{let e=o.pos-w;o.next();let t=[],n=[],i=x>=a?x:-1,s=0,c=C;for(;o.pos>e;)i>=0&&o.id==i&&o.size>=0?(o.end<=c-r&&(p(t,n,S,s,o.end,c,i,T,E),s=t.length,c=o.end),o.next()):b>2500?d(S,e,t,n):u(S,e,t,n,i,b+1);if(i>=0&&s>0&&s<t.length&&p(t,n,S,s,S,c,i,T,E),t.reverse(),n.reverse(),i>-1&&s>0){let e=f(D,E);ee=ha(D,t,n,0,t.length,0,C-S,e,e)}else ee=m(D,t,n,C-S,T-C,E)}_.push(ee),v.push(k)}function d(e,t,i,a){let s=[],c=0,l=-1;for(;o.pos>t;){let{id:e,start:t,end:n,size:i}=o;if(i>4)o.next();else if(l>-1&&t<l)break;else l<0&&(l=n-r),s.push(e,t,n),c++,o.next()}if(c){let t=new Uint16Array(c*4),r=s[s.length-2];for(let e=s.length-3,n=0;e>=0;e-=3)t[n++]=s[e],t[n++]=s[e+1]-r,t[n++]=s[e+2]-r,t[n++]=n;i.push(new Qi(t,s[2]-r,n)),a.push(r-e)}}function f(e,t){return(n,r,i)=>{let a=0,o=n.length-1,s,c;if(o>=0&&(s=n[o])instanceof X){if(!o&&s.type==e&&s.length==i)return s;(c=s.prop(J.lookAhead))&&(a=r[o]+s.length+c)}return m(e,n,r,i,a,t)}}function p(e,t,r,i,a,o,s,c,l){let u=[],d=[];for(;e.length>i;)u.push(e.pop()),d.push(t.pop()+r-a);e.push(m(n.types[s],u,d,o-a,c-o,l)),t.push(a-r)}function m(e,t,n,r,i,a,o){if(a){let e=[J.contextHash,a];o=o?[e].concat(o):[e]}if(i>25){let e=[J.lookAhead,i];o=o?[e].concat(o):[e]}return new X(e,t,n,r,o)}function h(e,t){let n=o.fork(),i=0,s=0,c=0,l=n.end-r,u={size:0,start:0,skip:0};scan:for(let r=n.pos-e;n.pos>r;){let e=n.size;if(n.id==t&&e>=0){u.size=i,u.start=s,u.skip=c,c+=4,i+=4,n.next();continue}let o=n.pos-e;if(e<0||o<r||n.start<l)break;let d=n.id>=a?4:0,f=n.start;for(n.next();n.pos>o;){if(n.size<0)if(n.size==-3||n.size==-4)d+=4;else break scan;else n.id>=a&&(d+=4);n.next()}s=f,i+=e,c+=d}return(t<0||i==e)&&(u.size=i,u.start=s,u.skip=c),u.size>4?u:void 0}function g(e,t,n){let{id:r,start:i,end:s,size:u}=o;if(o.next(),u>=0&&r<a){let a=n;if(u>4){let r=o.pos-(u-4);for(;o.pos>r;)n=g(e,t,n)}t[--n]=a,t[--n]=s-e,t[--n]=i-e,t[--n]=r}else u==-3?c=r:u==-4&&(l=r);return n}let _=[],v=[];for(;o.pos>0;)u(e.start||0,e.bufferStart||0,_,v,-1,0);let y=e.length??(_.length?v[0]+_[0].length:0);return new X(s[e.topID],_.reverse(),v.reverse(),y)}var pa=new WeakMap;function ma(e,t){if(!e.isAnonymous||t instanceof Qi||t.type!=e)return 1;let n=pa.get(t);if(n==null){n=1;for(let r of t.children){if(r.type!=e||!(r instanceof X)){n=1;break}n+=ma(e,r)}pa.set(t,n)}return n}function ha(e,t,n,r,i,a,o,s,c){let l=0;for(let n=r;n<i;n++)l+=ma(e,t[n]);let u=Math.ceil(l*1.5/8),d=[],f=[];function p(t,n,r,i,o){for(let s=r;s<i;){let r=s,l=n[s],m=ma(e,t[s]);for(s++;s<i;s++){let n=ma(e,t[s]);if(m+n>=u)break;m+=n}if(s==r+1){if(m>u){let e=t[r];p(e.children,e.positions,0,e.children.length,n[r]+o);continue}d.push(t[r])}else{let i=n[s-1]+t[s-1].length-l;d.push(ha(e,t,n,r,s,l,i,null,c))}f.push(l+o-a)}}return p(t,n,r,i,0),(s||c)(d,f,o)}var ga=class{constructor(){this.map=new WeakMap}setBuffer(e,t,n){let r=this.map.get(e);r||this.map.set(e,r=new Map),r.set(t,n)}getBuffer(e,t){let n=this.map.get(e);return n&&n.get(t)}set(e,t){e instanceof oa?this.setBuffer(e.context.buffer,e.index,t):e instanceof na&&this.map.set(e.tree,t)}get(e){return e instanceof oa?this.getBuffer(e.context.buffer,e.index):e instanceof na?this.map.get(e.tree):void 0}cursorSet(e,t){e.buffer?this.setBuffer(e.buffer.buffer,e.index,t):this.map.set(e.tree,t)}cursorGet(e){return e.buffer?this.getBuffer(e.buffer.buffer,e.index):this.map.get(e.tree)}},_a=class e{constructor(e,t,n,r,i=!1,a=!1){this.from=e,this.to=t,this.tree=n,this.offset=r,this.open=!!i|(a?2:0)}get openStart(){return(this.open&1)>0}get openEnd(){return(this.open&2)>0}static addTree(t,n=[],r=!1){let i=[new e(0,t.length,t,0,!1,r)];for(let e of n)e.to>t.length&&i.push(e);return i}static applyChanges(t,n,r=128){if(!n.length)return t;let i=[],a=1,o=t.length?t[0]:null;for(let s=0,c=0,l=0;;s++){let u=s<n.length?n[s]:null,d=u?u.fromA:1e9;if(d-c>=r)for(;o&&o.from<d;){let n=o;if(c>=n.from||d<=n.to||l){let t=Math.max(n.from,c)-l,r=Math.min(n.to,d)-l;n=t>=r?null:new e(t,r,n.tree,n.offset+l,s>0,!!u)}if(n&&i.push(n),o.to>d)break;o=a<t.length?t[a++]:null}if(!u)break;c=u.toA,l=u.toA-u.toB}return i}},va=class{startParse(e,t,n){return typeof e==`string`&&(e=new ya(e)),n=n?n.length?n.map(e=>new Wi(e.from,e.to)):[new Wi(0,0)]:[new Wi(0,e.length)],this.createParse(e,t||[],n)}parse(e,t,n){let r=this.startParse(e,t,n);for(;;){let e=r.advance();if(e)return e}}},ya=class{constructor(e){this.string=e}get length(){return this.string.length}chunk(e){return this.string.slice(e)}get lineChunks(){return!1}read(e,t){return this.string.slice(e,t)}};function ba(e){return(t,n,r,i)=>new Ta(t,e,n,r,i)}var xa=class{constructor(e,t,n,r,i,a){this.parser=e,this.parse=t,this.overlay=n,this.bracketed=r,this.target=i,this.from=a}};function Sa(e){if(!e.length||e.some(e=>e.from>=e.to))throw RangeError(`Invalid inner parse ranges given: `+JSON.stringify(e))}var Ca=class{constructor(e,t,n,r,i,a,o,s){this.parser=e,this.predicate=t,this.mounts=n,this.index=r,this.start=i,this.bracketed=a,this.target=o,this.prev=s,this.depth=0,this.ranges=[]}},wa=new J({perNode:!0}),Ta=class{constructor(e,t,n,r,i){this.nest=t,this.input=n,this.fragments=r,this.ranges=i,this.inner=[],this.innerDone=0,this.baseTree=null,this.stoppedAt=null,this.baseParse=e}advance(){if(this.baseParse){let e=this.baseParse.advance();if(!e)return null;if(this.baseParse=null,this.baseTree=e,this.startInner(),this.stoppedAt!=null)for(let e of this.inner)e.parse.stopAt(this.stoppedAt)}if(this.innerDone==this.inner.length){let e=this.baseTree;return this.stoppedAt!=null&&(e=new X(e.type,e.children,e.positions,e.length,e.propValues.concat([[wa,this.stoppedAt]]))),e}let e=this.inner[this.innerDone],t=e.parse.advance();if(t){this.innerDone++;let n=Object.assign(Object.create(null),e.target.props);n[J.mounted.id]=new Gi(t,e.overlay,e.parser,e.bracketed),e.target.props=n}return null}get parsedPos(){if(this.baseParse)return 0;let e=this.input.length;for(let t=this.innerDone;t<this.inner.length;t++)this.inner[t].from<e&&(e=Math.min(e,this.inner[t].parse.parsedPos));return e}stopAt(e){if(this.stoppedAt=e,this.baseParse)this.baseParse.stopAt(e);else for(let t=this.innerDone;t<this.inner.length;t++)this.inner[t].parse.stopAt(e)}startInner(){let e=new Aa(this.fragments),t=null,n=null,r=new ua(new na(this.baseTree,this.ranges[0].from,0,null),Y.IncludeAnonymous|Y.IgnoreMounts);scan:for(let i,a;;){let o=!0,s;if(this.stoppedAt!=null&&r.from>=this.stoppedAt)o=!1;else if(e.hasNode(r)){if(t){let e=t.mounts.find(e=>e.frag.from<=r.from&&e.frag.to>=r.to&&e.mount.overlay);if(e)for(let n of e.mount.overlay){let i=n.from+e.pos,a=n.to+e.pos;i>=r.from&&a<=r.to&&!t.ranges.some(e=>e.from<a&&e.to>i)&&t.ranges.push({from:i,to:a})}}o=!1}else if(n&&(a=Ea(n.ranges,r.from,r.to)))o=a!=2;else if(!r.type.isAnonymous&&(i=this.nest(r,this.input))&&(r.from<r.to||!i.overlay)){r.tree||(Oa(r),t&&t.depth++,n&&n.depth++);let a=e.findMounts(r.from,i.parser);if(typeof i.overlay==`function`)t=new Ca(i.parser,i.overlay,a,this.inner.length,r.from,!!i.bracketed,r.tree,t);else{let e=ja(this.ranges,i.overlay||(r.from<r.to?[new Wi(r.from,r.to)]:[]));e.length&&Sa(e),(e.length||!i.overlay)&&this.inner.push(new xa(i.parser,e.length?i.parser.startParse(this.input,Na(a,e),e):i.parser.startParse(``),i.overlay?i.overlay.map(e=>new Wi(e.from-r.from,e.to-r.from)):null,!!i.bracketed,r.tree,e.length?e[0].from:r.from)),i.overlay?e.length&&(n={ranges:e,depth:0,prev:n}):o=!1}}else if(t&&(s=t.predicate(r))&&(s===!0&&(s=new Wi(r.from,r.to)),s.from<s.to)){let e=t.ranges.length-1;e>=0&&t.ranges[e].to==s.from?t.ranges[e]={from:t.ranges[e].from,to:s.to}:t.ranges.push(s)}if(o&&r.firstChild())t&&t.depth++,n&&n.depth++;else for(;!r.nextSibling();){if(!r.parent())break scan;if(t&&!--t.depth){let e=ja(this.ranges,t.ranges);e.length&&(Sa(e),this.inner.splice(t.index,0,new xa(t.parser,t.parser.startParse(this.input,Na(t.mounts,e),e),t.ranges.map(e=>new Wi(e.from-t.start,e.to-t.start)),t.bracketed,t.target,e[0].from))),t=t.prev}n&&!--n.depth&&(n=n.prev)}}}};function Ea(e,t,n){for(let r of e){if(r.from>=n)break;if(r.to>t)return r.from<=t&&r.to>=n?2:1}return 0}function Da(e,t,n,r,i,a){if(t<n){let o=e.buffer[t+1];r.push(e.slice(t,n,o)),i.push(o-a)}}function Oa(e){let{node:t}=e,n=[],r=t.context.buffer;do n.push(e.index),e.parent();while(!e.tree);let i=e.tree,a=i.children.indexOf(r),o=i.children[a],s=o.buffer,c=[a];function l(e,r,i,a,u,d){let f=n[d],p=[],m=[];Da(o,e,f,p,m,a);let h=s[f+1],g=s[f+2];c.push(p.length);let _=d?l(f+4,s[f+3],o.set.types[s[f]],h,g-h,d-1):t.toTree();return p.push(_),m.push(h-a),Da(o,s[f+3],r,p,m,a),new X(i,p,m,u)}i.children[a]=l(0,s.length,qi.none,0,o.length,n.length-1);for(let t of c){let n=e.tree.children[t],r=e.tree.positions[t];e.yield(new na(n,r+e.from,t,e._tree))}}var ka=class{constructor(e,t){this.offset=t,this.done=!1,this.cursor=e.cursor(Y.IncludeAnonymous|Y.IgnoreMounts)}moveTo(e){let{cursor:t}=this,n=e-this.offset;for(;!this.done&&t.from<n;)if(!(t.to>=e&&t.enter(n,1,Y.IgnoreOverlays|Y.ExcludeBuffers)))if(t.to<=e)t.next(!1)||(this.done=!0);else break}hasNode(e){if(this.moveTo(e.from),!this.done&&this.cursor.from+this.offset==e.from&&this.cursor.tree)for(let t=this.cursor.tree;;){if(t==e.tree)return!0;if(t.children.length&&t.positions[0]==0&&t.children[0]instanceof X)t=t.children[0];else break}return!1}},Aa=class{constructor(e){if(this.fragments=e,this.curTo=0,this.fragI=0,e.length){let t=this.curFrag=e[0];this.curTo=t.tree.prop(wa)??t.to,this.inner=new ka(t.tree,-t.offset)}else this.curFrag=this.inner=null}hasNode(e){for(;this.curFrag&&e.from>=this.curTo;)this.nextFrag();return this.curFrag&&this.curFrag.from<=e.from&&this.curTo>=e.to&&this.inner.hasNode(e)}nextFrag(){if(this.fragI++,this.fragI==this.fragments.length)this.curFrag=this.inner=null;else{let e=this.curFrag=this.fragments[this.fragI];this.curTo=e.tree.prop(wa)??e.to,this.inner=new ka(e.tree,-e.offset)}}findMounts(e,t){let n=[];if(this.inner){this.inner.cursor.moveTo(e,1);for(let e=this.inner.cursor.node;e;e=e.parent){let r=e.tree?.prop(J.mounted);if(r&&r.parser==t)for(let t=this.fragI;t<this.fragments.length;t++){let i=this.fragments[t];if(i.from>=e.to)break;i.tree==this.curFrag.tree&&n.push({frag:i,pos:e.from-i.offset,mount:r})}}}return n}};function ja(e,t){let n=null,r=t;for(let i=1,a=0;i<e.length;i++){let o=e[i-1].to,s=e[i].from;for(;a<r.length;a++){let e=r[a];if(e.from>=s)break;e.to<=o||(n||(r=n=t.slice()),e.from<o?(n[a]=new Wi(e.from,o),e.to>s&&n.splice(a+1,0,new Wi(s,e.to))):e.to>s?n[a--]=new Wi(s,e.to):n.splice(a--,1))}}return r}function Ma(e,t,n,r){let i=0,a=0,o=!1,s=!1,c=-1e9,l=[];for(;;){let u=i==e.length?1e9:o?e[i].to:e[i].from,d=a==t.length?1e9:s?t[a].to:t[a].from;if(o!=s){let e=Math.max(c,n),t=Math.min(u,d,r);e<t&&l.push(new Wi(e,t))}if(c=Math.min(u,d),c==1e9)break;u==c&&(o?(o=!1,i++):o=!0),d==c&&(s?(s=!1,a++):s=!0)}return l}function Na(e,t){let n=[];for(let{pos:r,mount:i,frag:a}of e){let e=r+(i.overlay?i.overlay[0].from:0),o=e+i.tree.length,s=Math.max(a.from,e),c=Math.min(a.to,o);if(i.overlay){let o=Ma(t,i.overlay.map(e=>new Wi(e.from+r,e.to+r)),s,c);for(let t=0,r=s;;t++){let s=t==o.length,l=s?c:o[t].from;if(l>r&&n.push(new _a(r,l,i.tree,-e,a.from>=r||a.openStart,a.to<=l||a.openEnd)),s)break;r=o[t].to}}else n.push(new _a(s,c,i.tree,-e,a.from>=e||a.openStart,a.to<=o||a.openEnd))}return n}var Pa=class e{constructor(e,t,n,r,i,a,o,s,c,l=0,u){this.p=e,this.stack=t,this.state=n,this.reducePos=r,this.pos=i,this.score=a,this.buffer=o,this.bufferBase=s,this.curContext=c,this.lookAhead=l,this.parent=u}toString(){return`[${this.stack.filter((e,t)=>t%3==0).concat(this.state)}]@${this.pos}${this.score?`!`+this.score:``}`}static start(t,n,r=0){let i=t.parser.context;return new e(t,[],n,r,r,0,[],0,i?new Fa(i,i.start):null,0,null)}get context(){return this.curContext?this.curContext.context:null}pushState(e,t){this.stack.push(this.state,t,this.bufferBase+this.buffer.length),this.state=e}reduce(e){let t=e>>19,n=e&65535,{parser:r}=this.p,i=this.reducePos<this.pos-25;i&&this.setLookAhead(this.pos);let a=r.dynamicPrecedence(n);if(a&&(this.score+=a),t==0){this.pushState(r.getGoto(this.state,n,!0),this.reducePos),n<r.minRepeatTerm&&this.storeNode(n,this.reducePos,this.reducePos,i?8:4,!0),this.reduceContext(n,this.reducePos);return}let o=this.stack.length-(t-1)*3-(e&262144?6:0),s=o?this.stack[o-2]:this.p.ranges[0].from,c=this.reducePos-s;c>=2e3&&!this.p.parser.nodeSet.types[n]?.isAnonymous&&(s==this.p.lastBigReductionStart?(this.p.bigReductionCount++,this.p.lastBigReductionSize=c):this.p.lastBigReductionSize<c&&(this.p.bigReductionCount=1,this.p.lastBigReductionStart=s,this.p.lastBigReductionSize=c));let l=o?this.stack[o-1]:0,u=this.bufferBase+this.buffer.length-l;if(n<r.minRepeatTerm||e&131072){let e=r.stateFlag(this.state,1)?this.pos:this.reducePos;this.storeNode(n,s,e,u+4,!0)}if(e&262144)this.state=this.stack[o];else{let e=this.stack[o-3];this.state=r.getGoto(e,n,!0)}for(;this.stack.length>o;)this.stack.pop();this.reduceContext(n,s)}storeNode(e,t,n,r=4,i=!1){if(e==0&&(!this.stack.length||this.stack[this.stack.length-1]<this.buffer.length+this.bufferBase)){let e=this,r=this.buffer.length;if(r==0&&e.parent&&(r=e.bufferBase-e.parent.bufferBase,e=e.parent),r>0&&e.buffer[r-4]==0&&e.buffer[r-1]>-1){if(t==n)return;if(e.buffer[r-2]>=t){e.buffer[r-2]=n;return}}}if(!i||this.pos==n)this.buffer.push(e,t,n,r);else{let i=this.buffer.length;if(i>0&&this.buffer[i-4]!=0){let e=!1;for(let t=i;t>0&&this.buffer[t-2]>n;t-=4)if(this.buffer[t-1]>=0){e=!0;break}if(e)for(;i>0&&this.buffer[i-2]>n;)this.buffer[i]=this.buffer[i-4],this.buffer[i+1]=this.buffer[i-3],this.buffer[i+2]=this.buffer[i-2],this.buffer[i+3]=this.buffer[i-1],i-=4,r>4&&(r-=4)}this.buffer[i]=e,this.buffer[i+1]=t,this.buffer[i+2]=n,this.buffer[i+3]=r}}shift(e,t,n,r){if(e&131072)this.pushState(e&65535,this.pos);else if(e&262144)this.pos=r,this.shiftContext(t,n),t<=this.p.parser.maxNode&&this.buffer.push(t,n,r,4);else{let i=e,{parser:a}=this.p;(r>this.pos||t<=a.maxNode)&&(this.pos=r,a.stateFlag(i,1)||(this.reducePos=r)),this.pushState(i,n),this.shiftContext(t,n),t<=a.maxNode&&this.buffer.push(t,n,r,4)}}apply(e,t,n,r){e&65536?this.reduce(e):this.shift(e,t,n,r)}useNode(e,t){let n=this.p.reused.length-1;(n<0||this.p.reused[n]!=e)&&(this.p.reused.push(e),n++);let r=this.pos;this.reducePos=this.pos=r+e.length,this.pushState(t,r),this.buffer.push(n,r,this.reducePos,-1),this.curContext&&this.updateContext(this.curContext.tracker.reuse(this.curContext.context,e,this,this.p.stream.reset(this.pos-e.length)))}split(){let t=this,n=t.buffer.length;for(;n>0&&t.buffer[n-2]>t.reducePos;)n-=4;let r=t.buffer.slice(n),i=t.bufferBase+n;for(;t&&i==t.bufferBase;)t=t.parent;return new e(this.p,this.stack.slice(),this.state,this.reducePos,this.pos,this.score,r,i,this.curContext,this.lookAhead,t)}recoverByDelete(e,t){let n=e<=this.p.parser.maxNode;n&&this.storeNode(e,this.pos,t,4),this.storeNode(0,this.pos,t,n?8:4),this.pos=this.reducePos=t,this.score-=190}canShift(e){for(let t=new Ia(this);;){let n=this.p.parser.stateSlot(t.state,4)||this.p.parser.hasAction(t.state,e);if(n==0)return!1;if(!(n&65536))return!0;t.reduce(n)}}recoverByInsert(e){if(this.stack.length>=300)return[];let t=this.p.parser.nextStates(this.state);if(t.length>8||this.stack.length>=120){let n=[];for(let r=0,i;r<t.length;r+=2)(i=t[r+1])!=this.state&&this.p.parser.hasAction(i,e)&&n.push(t[r],i);if(this.stack.length<120)for(let e=0;n.length<8&&e<t.length;e+=2){let r=t[e+1];n.some((e,t)=>t&1&&e==r)||n.push(t[e],r)}t=n}let n=[];for(let e=0;e<t.length&&n.length<4;e+=2){let r=t[e+1];if(r==this.state)continue;let i=this.split();i.pushState(r,this.pos),i.storeNode(0,i.pos,i.pos,4,!0),i.shiftContext(t[e],this.pos),i.reducePos=this.pos,i.score-=200,n.push(i)}return n}forceReduce(){let{parser:e}=this.p,t=e.stateSlot(this.state,5);if(!(t&65536))return!1;if(!e.validAction(this.state,t)){let n=t>>19,r=t&65535,i=this.stack.length-n*3;if(i<0||e.getGoto(this.stack[i],r,!1)<0){let e=this.findForcedReduction();if(e==null)return!1;t=e}this.storeNode(0,this.pos,this.pos,4,!0),this.score-=100}return this.reducePos=this.pos,this.reduce(t),!0}findForcedReduction(){let{parser:e}=this.p,t=[],n=(r,i)=>{if(!t.includes(r))return t.push(r),e.allActions(r,t=>{if(!(t&393216))if(t&65536){let n=(t>>19)-i;if(n>1){let r=t&65535,i=this.stack.length-n*3;if(i>=0&&e.getGoto(this.stack[i],r,!1)>=0)return n<<19|65536|r}}else{let e=n(t,i+1);if(e!=null)return e}})};return n(this.state,0)}forceAll(){for(;!this.p.parser.stateFlag(this.state,2);)if(!this.forceReduce()){this.storeNode(0,this.pos,this.pos,4,!0);break}return this}get deadEnd(){if(this.stack.length!=3)return!1;let{parser:e}=this.p;return e.data[e.stateSlot(this.state,1)]==65535&&!e.stateSlot(this.state,4)}restart(){this.storeNode(0,this.pos,this.pos,4,!0),this.state=this.stack[0],this.stack.length=0}sameState(e){if(this.state!=e.state||this.stack.length!=e.stack.length)return!1;for(let t=0;t<this.stack.length;t+=3)if(this.stack[t]!=e.stack[t])return!1;return!0}get parser(){return this.p.parser}dialectEnabled(e){return this.p.parser.dialect.flags[e]}shiftContext(e,t){this.curContext&&this.updateContext(this.curContext.tracker.shift(this.curContext.context,e,this,this.p.stream.reset(t)))}reduceContext(e,t){this.curContext&&this.updateContext(this.curContext.tracker.reduce(this.curContext.context,e,this,this.p.stream.reset(t)))}emitContext(){let e=this.buffer.length-1;(e<0||this.buffer[e]!=-3)&&this.buffer.push(this.curContext.hash,this.pos,this.pos,-3)}emitLookAhead(){let e=this.buffer.length-1;(e<0||this.buffer[e]!=-4)&&this.buffer.push(this.lookAhead,this.pos,this.pos,-4)}updateContext(e){if(e!=this.curContext.context){let t=new Fa(this.curContext.tracker,e);t.hash!=this.curContext.hash&&this.emitContext(),this.curContext=t}}setLookAhead(e){e>this.lookAhead&&(this.emitLookAhead(),this.lookAhead=e)}close(){this.curContext&&this.curContext.tracker.strict&&this.emitContext(),this.lookAhead>0&&this.emitLookAhead()}},Fa=class{constructor(e,t){this.tracker=e,this.context=t,this.hash=e.strict?e.hash(t):0}},Ia=class{constructor(e){this.start=e,this.state=e.state,this.stack=e.stack,this.base=this.stack.length}reduce(e){let t=e&65535,n=e>>19;n==0?(this.stack==this.start.stack&&(this.stack=this.stack.slice()),this.stack.push(this.state,0,0),this.base+=3):this.base-=(n-1)*3;let r=this.start.p.parser.getGoto(this.stack[this.base-3],t,!0);this.state=r}},La=class e{constructor(e,t,n){this.stack=e,this.pos=t,this.index=n,this.buffer=e.buffer,this.index==0&&this.maybeNext()}static create(t,n=t.bufferBase+t.buffer.length){return new e(t,n,n-t.bufferBase)}maybeNext(){let e=this.stack.parent;e!=null&&(this.index=this.stack.bufferBase-e.bufferBase,this.stack=e,this.buffer=e.buffer)}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}next(){this.index-=4,this.pos-=4,this.index==0&&this.maybeNext()}fork(){return new e(this.stack,this.pos,this.index)}};function Ra(e,t=Uint16Array){if(typeof e!=`string`)return e;let n=null;for(let r=0,i=0;r<e.length;){let a=0;for(;;){let t=e.charCodeAt(r++),n=!1;if(t==126){a=65535;break}t>=92&&t--,t>=34&&t--;let i=t-32;if(i>=46&&(i-=46,n=!0),a+=i,n)break;a*=46}n?n[i++]=a:n=new t(a)}return n}var za=class{constructor(){this.start=-1,this.value=-1,this.end=-1,this.extended=-1,this.lookAhead=0,this.mask=0,this.context=0}},Ba=new za,Va=class{constructor(e,t){this.input=e,this.ranges=t,this.chunk=``,this.chunkOff=0,this.chunk2=``,this.chunk2Pos=0,this.next=-1,this.token=Ba,this.rangeIndex=0,this.pos=this.chunkPos=t[0].from,this.range=t[0],this.end=t[t.length-1].to,this.readNext()}resolveOffset(e,t){let n=this.range,r=this.rangeIndex,i=this.pos+e;for(;i<n.from;){if(!r)return null;let e=this.ranges[--r];i-=n.from-e.to,n=e}for(;t<0?i>n.to:i>=n.to;){if(r==this.ranges.length-1)return null;let e=this.ranges[++r];i+=e.from-n.to,n=e}return i}clipPos(e){if(e>=this.range.from&&e<this.range.to)return e;for(let t of this.ranges)if(t.to>e)return Math.max(e,t.from);return this.end}peek(e){let t=this.chunkOff+e,n,r;if(t>=0&&t<this.chunk.length)n=this.pos+e,r=this.chunk.charCodeAt(t);else{let t=this.resolveOffset(e,1);if(t==null)return-1;if(n=t,n>=this.chunk2Pos&&n<this.chunk2Pos+this.chunk2.length)r=this.chunk2.charCodeAt(n-this.chunk2Pos);else{let e=this.rangeIndex,t=this.range;for(;t.to<=n;)t=this.ranges[++e];this.chunk2=this.input.chunk(this.chunk2Pos=n),n+this.chunk2.length>t.to&&(this.chunk2=this.chunk2.slice(0,t.to-n)),r=this.chunk2.charCodeAt(0)}}return n>=this.token.lookAhead&&(this.token.lookAhead=n+1),r}acceptToken(e,t=0){let n=t?this.resolveOffset(t,-1):this.pos;if(n==null||n<this.token.start)throw RangeError(`Token end out of bounds`);this.token.value=e,this.token.end=n}acceptTokenTo(e,t){this.token.value=e,this.token.end=t}getChunk(){if(this.pos>=this.chunk2Pos&&this.pos<this.chunk2Pos+this.chunk2.length){let{chunk:e,chunkPos:t}=this;this.chunk=this.chunk2,this.chunkPos=this.chunk2Pos,this.chunk2=e,this.chunk2Pos=t,this.chunkOff=this.pos-this.chunkPos}else{this.chunk2=this.chunk,this.chunk2Pos=this.chunkPos;let e=this.input.chunk(this.pos),t=this.pos+e.length;this.chunk=t>this.range.to?e.slice(0,this.range.to-this.pos):e,this.chunkPos=this.pos,this.chunkOff=0}}readNext(){return this.chunkOff>=this.chunk.length&&(this.getChunk(),this.chunkOff==this.chunk.length)?this.next=-1:this.next=this.chunk.charCodeAt(this.chunkOff)}advance(e=1){for(this.chunkOff+=e;this.pos+e>=this.range.to;){if(this.rangeIndex==this.ranges.length-1)return this.setDone();e-=this.range.to-this.pos,this.range=this.ranges[++this.rangeIndex],this.pos=this.range.from}return this.pos+=e,this.pos>=this.token.lookAhead&&(this.token.lookAhead=this.pos+1),this.readNext()}setDone(){return this.pos=this.chunkPos=this.end,this.range=this.ranges[this.rangeIndex=this.ranges.length-1],this.chunk=``,this.next=-1}reset(e,t){if(t?(this.token=t,t.start=e,t.lookAhead=e+1,t.value=t.extended=-1):this.token=Ba,this.pos!=e){if(this.pos=e,e==this.end)return this.setDone(),this;for(;e<this.range.from;)this.range=this.ranges[--this.rangeIndex];for(;e>=this.range.to;)this.range=this.ranges[++this.rangeIndex];e>=this.chunkPos&&e<this.chunkPos+this.chunk.length?this.chunkOff=e-this.chunkPos:(this.chunk=``,this.chunkOff=0),this.readNext()}return this}read(e,t){if(e>=this.chunkPos&&t<=this.chunkPos+this.chunk.length)return this.chunk.slice(e-this.chunkPos,t-this.chunkPos);if(e>=this.chunk2Pos&&t<=this.chunk2Pos+this.chunk2.length)return this.chunk2.slice(e-this.chunk2Pos,t-this.chunk2Pos);if(e>=this.range.from&&t<=this.range.to)return this.input.read(e,t);let n=``;for(let r of this.ranges){if(r.from>=t)break;r.to>e&&(n+=this.input.read(Math.max(r.from,e),Math.min(r.to,t)))}return n}},Ha=class{constructor(e,t){this.data=e,this.id=t}token(e,t){let{parser:n}=t.p;Ga(this.data,e,t,this.id,n.data,n.tokenPrecTable)}};Ha.prototype.contextual=Ha.prototype.fallback=Ha.prototype.extend=!1;var Ua=class{constructor(e,t,n){this.precTable=t,this.elseToken=n,this.data=typeof e==`string`?Ra(e):e}token(e,t){let n=e.pos,r=0;for(;;){let n=e.next<0,i=e.resolveOffset(1,1);if(Ga(this.data,e,t,0,this.data,this.precTable),e.token.value>-1)break;if(this.elseToken==null)return;if(n||r++,i==null)break;e.reset(i,e.token)}r&&(e.reset(n,e.token),e.acceptToken(this.elseToken,r))}};Ua.prototype.contextual=Ha.prototype.fallback=Ha.prototype.extend=!1;var Wa=class{constructor(e,t={}){this.token=e,this.contextual=!!t.contextual,this.fallback=!!t.fallback,this.extend=!!t.extend}};function Ga(e,t,n,r,i,a){let o=0,s=1<<r,{dialect:c}=n.p.parser;scan:for(;(s&e[o])!=0;){let n=e[o+1];for(let r=o+3;r<n;r+=2)if((e[r+1]&s)>0){let n=e[r];if(c.allows(n)&&(t.token.value==-1||t.token.value==n||qa(n,t.token.value,i,a))){t.acceptToken(n);break}}let r=t.next,l=0,u=e[o+2];if(t.next<0&&u>l&&e[n+u*3-3]==65535){o=e[n+u*3-1];continue scan}for(;l<u;){let i=l+u>>1,a=n+i+(i<<1),s=e[a],c=e[a+1]||65536;if(r<s)u=i;else if(r>=c)l=i+1;else{o=e[a+2],t.advance();continue scan}}break}}function Ka(e,t,n){for(let r=t,i;(i=e[r])!=65535;r++)if(i==n)return r-t;return-1}function qa(e,t,n,r){let i=Ka(n,r,t);return i<0||Ka(n,r,e)<i}var Z=typeof process<`u`&&/\bparse\b/.test({}.LOG),Ja=null;function Ya(e,t,n){let r=e.cursor(Y.IncludeAnonymous);for(r.moveTo(t);;)if(!(n<0?r.childBefore(t):r.childAfter(t)))for(;;){if((n<0?r.to<t:r.from>t)&&!r.type.isError)return n<0?Math.max(0,Math.min(r.to-1,t-25)):Math.min(e.length,Math.max(r.from+1,t+25));if(n<0?r.prevSibling():r.nextSibling())break;if(!r.parent())return n<0?0:e.length}}var Xa=class{constructor(e,t){this.fragments=e,this.nodeSet=t,this.i=0,this.fragment=null,this.safeFrom=-1,this.safeTo=-1,this.trees=[],this.start=[],this.index=[],this.nextFragment()}nextFragment(){let e=this.fragment=this.i==this.fragments.length?null:this.fragments[this.i++];if(e){for(this.safeFrom=e.openStart?Ya(e.tree,e.from+e.offset,1)-e.offset:e.from,this.safeTo=e.openEnd?Ya(e.tree,e.to+e.offset,-1)-e.offset:e.to;this.trees.length;)this.trees.pop(),this.start.pop(),this.index.pop();this.trees.push(e.tree),this.start.push(-e.offset),this.index.push(0),this.nextStart=this.safeFrom}else this.nextStart=1e9}nodeAt(e){if(e<this.nextStart)return null;for(;this.fragment&&this.safeTo<=e;)this.nextFragment();if(!this.fragment)return null;for(;;){let t=this.trees.length-1;if(t<0)return this.nextFragment(),null;let n=this.trees[t],r=this.index[t];if(r==n.children.length){this.trees.pop(),this.start.pop(),this.index.pop();continue}let i=n.children[r],a=this.start[t]+n.positions[r];if(a>e)return this.nextStart=a,null;if(i instanceof X){if(a==e){if(a<this.safeFrom)return null;let e=a+i.length;if(e<=this.safeTo){let t=i.prop(J.lookAhead);if(!t||e+t<this.fragment.to)return i}}this.index[t]++,a+i.length>=Math.max(this.safeFrom,e)&&(this.trees.push(i),this.start.push(a),this.index.push(0))}else this.index[t]++,this.nextStart=a+i.length}}},Za=class{constructor(e,t){this.stream=t,this.tokens=[],this.mainToken=null,this.actions=[],this.tokens=e.tokenizers.map(e=>new za)}getActions(e){let t=0,n=null,{parser:r}=e.p,{tokenizers:i}=r,a=r.stateSlot(e.state,3),o=e.curContext?e.curContext.hash:0,s=0;for(let r=0;r<i.length;r++){if(!(1<<r&a))continue;let c=i[r],l=this.tokens[r];if(!(n&&!c.fallback)&&((c.contextual||l.start!=e.pos||l.mask!=a||l.context!=o)&&(this.updateCachedToken(l,c,e),l.mask=a,l.context=o),l.lookAhead>l.end+25&&(s=Math.max(l.lookAhead,s)),l.value!=0)){let r=t;if(l.extended>-1&&(t=this.addActions(e,l.extended,l.end,t)),t=this.addActions(e,l.value,l.end,t),!c.extend&&(n=l,t>r))break}}for(;this.actions.length>t;)this.actions.pop();return s&&e.setLookAhead(s),!n&&e.pos==this.stream.end&&(n=new za,n.value=e.p.parser.eofTerm,n.start=n.end=e.pos,t=this.addActions(e,n.value,n.end,t)),this.mainToken=n,this.actions}getMainToken(e){if(this.mainToken)return this.mainToken;let t=new za,{pos:n,p:r}=e;return t.start=n,t.end=Math.min(n+1,r.stream.end),t.value=n==r.stream.end?r.parser.eofTerm:0,t}updateCachedToken(e,t,n){let r=this.stream.clipPos(n.pos);if(t.token(this.stream.reset(r,e),n),e.value>-1){let{parser:t}=n.p;for(let r=0;r<t.specialized.length;r++)if(t.specialized[r]==e.value){let i=t.specializers[r](this.stream.read(e.start,e.end),n);if(i>=0&&n.p.parser.dialect.allows(i>>1)){i&1?e.extended=i>>1:e.value=i>>1;break}}}else e.value=0,e.end=this.stream.clipPos(r+1)}putAction(e,t,n,r){for(let t=0;t<r;t+=3)if(this.actions[t]==e)return r;return this.actions[r++]=e,this.actions[r++]=t,this.actions[r++]=n,r}addActions(e,t,n,r){let{state:i}=e,{parser:a}=e.p,{data:o}=a;for(let e=0;e<2;e++)for(let s=a.stateSlot(i,e?2:1);;s+=3){if(o[s]==65535)if(o[s+1]==1)s=io(o,s+2);else{r==0&&o[s+1]==2&&(r=this.putAction(io(o,s+2),t,n,r));break}o[s]==t&&(r=this.putAction(io(o,s+1),t,n,r))}return r}},Qa=class{constructor(e,t,n,r){this.parser=e,this.input=t,this.ranges=r,this.recovering=0,this.nextStackID=9812,this.minStackPos=0,this.reused=[],this.stoppedAt=null,this.lastBigReductionStart=-1,this.lastBigReductionSize=0,this.bigReductionCount=0,this.stream=new Va(t,r),this.tokens=new Za(e,this.stream),this.topTerm=e.top[1];let{from:i}=r[0];this.stacks=[Pa.start(this,e.top[0],i)],this.fragments=n.length&&this.stream.end-i>e.bufferLength*4?new Xa(n,e.nodeSet):null}get parsedPos(){return this.minStackPos}advance(){let e=this.stacks,t=this.minStackPos,n=this.stacks=[],r,i;if(this.bigReductionCount>300&&e.length==1){let[t]=e;for(;t.forceReduce()&&t.stack.length&&t.stack[t.stack.length-2]>=this.lastBigReductionStart;);this.bigReductionCount=this.lastBigReductionSize=0}for(let a=0;a<e.length;a++){let o=e[a];for(;;){if(this.tokens.mainToken=null,o.pos>t)n.push(o);else if(this.advanceStack(o,n,e))continue;else{r||(r=[],i=[]),r.push(o);let e=this.tokens.getMainToken(o);i.push(e.value,e.end)}break}}if(!n.length){let e=r&&ao(r);if(e)return Z&&console.log(`Finish with `+this.stackID(e)),this.stackToTree(e);if(this.parser.strict)throw Z&&r&&console.log(`Stuck with token `+(this.tokens.mainToken?this.parser.getName(this.tokens.mainToken.value):`none`)),SyntaxError(`No parse at `+t);this.recovering||=5}if(this.recovering&&r){let e=this.stoppedAt!=null&&r[0].pos>this.stoppedAt?r[0]:this.runRecovery(r,i,n);if(e)return Z&&console.log(`Force-finish `+this.stackID(e)),this.stackToTree(e.forceAll())}if(this.recovering){let e=this.recovering==1?1:this.recovering*3;if(n.length>e)for(n.sort((e,t)=>t.score-e.score);n.length>e;)n.pop();n.some(e=>e.reducePos>t)&&this.recovering--}else if(n.length>1){outer:for(let e=0;e<n.length-1;e++){let t=n[e];for(let r=e+1;r<n.length;r++){let i=n[r];if(t.sameState(i)||t.buffer.length>500&&i.buffer.length>500)if((t.score-i.score||t.buffer.length-i.buffer.length)>0)n.splice(r--,1);else{n.splice(e--,1);continue outer}}}n.length>12&&n.splice(12,n.length-12)}this.minStackPos=n[0].pos;for(let e=1;e<n.length;e++)n[e].pos<this.minStackPos&&(this.minStackPos=n[e].pos);return null}stopAt(e){if(this.stoppedAt!=null&&this.stoppedAt<e)throw RangeError(`Can't move stoppedAt forward`);this.stoppedAt=e}advanceStack(e,t,n){let r=e.pos,{parser:i}=this,a=Z?this.stackID(e)+` -> `:``;if(this.stoppedAt!=null&&r>this.stoppedAt)return e.forceReduce()?e:null;if(this.fragments){let t=e.curContext&&e.curContext.tracker.strict,n=t?e.curContext.hash:0;for(let o=this.fragments.nodeAt(r);o;){let r=this.parser.nodeSet.types[o.type.id]==o.type?i.getGoto(e.state,o.type.id):-1;if(r>-1&&o.length&&(!t||(o.prop(J.contextHash)||0)==n))return e.useNode(o,r),Z&&console.log(a+this.stackID(e)+` (via reuse of ${i.getName(o.type.id)})`),!0;if(!(o instanceof X)||o.children.length==0||o.positions[0]>0)break;let s=o.children[0];if(s instanceof X&&o.positions[0]==0)o=s;else break}}let o=i.stateSlot(e.state,4);if(o>0)return e.reduce(o),Z&&console.log(a+this.stackID(e)+` (via always-reduce ${i.getName(o&65535)})`),!0;if(e.stack.length>=8400)for(;e.stack.length>6e3&&e.forceReduce(););let s=this.tokens.getActions(e);for(let o=0;o<s.length;){let c=s[o++],l=s[o++],u=s[o++],d=o==s.length||!n,f=d?e:e.split(),p=this.tokens.mainToken;if(f.apply(c,l,p?p.start:f.pos,u),Z&&console.log(a+this.stackID(f)+` (via ${c&65536?`reduce of ${i.getName(c&65535)}`:`shift`} for ${i.getName(l)} @ ${r}${f==e?``:`, split`})`),d)return!0;f.pos>r?t.push(f):n.push(f)}return!1}advanceFully(e,t){let n=e.pos;for(;;){if(!this.advanceStack(e,null,null))return!1;if(e.pos>n)return $a(e,t),!0}}runRecovery(e,t,n){let r=null,i=!1;for(let a=0;a<e.length;a++){let o=e[a],s=t[a<<1],c=t[(a<<1)+1],l=Z?this.stackID(o)+` -> `:``;if(o.deadEnd&&(i||(i=!0,o.restart(),Z&&console.log(l+this.stackID(o)+` (restarted)`),this.advanceFully(o,n))))continue;let u=o.split(),d=l;for(let e=0;u.forceReduce()&&e<10&&(Z&&console.log(d+this.stackID(u)+` (via force-reduce)`),!this.advanceFully(u,n));e++)Z&&(d=this.stackID(u)+` -> `);for(let e of o.recoverByInsert(s))Z&&console.log(l+this.stackID(e)+` (via recover-insert)`),this.advanceFully(e,n);this.stream.end>o.pos?(c==o.pos&&(c++,s=0),o.recoverByDelete(s,c),Z&&console.log(l+this.stackID(o)+` (via recover-delete ${this.parser.getName(s)})`),$a(o,n)):(!r||r.score<o.score)&&(r=o)}return r}stackToTree(e){return e.close(),X.build({buffer:La.create(e),nodeSet:this.parser.nodeSet,topID:this.topTerm,maxBufferLength:this.parser.bufferLength,reused:this.reused,start:this.ranges[0].from,length:e.pos-this.ranges[0].from,minRepeatType:this.parser.minRepeatTerm})}stackID(e){let t=(Ja||=new WeakMap).get(e);return t||Ja.set(e,t=String.fromCodePoint(this.nextStackID++)),t+e}};function $a(e,t){for(let n=0;n<t.length;n++){let r=t[n];if(r.pos==e.pos&&r.sameState(e)){t[n].score<e.score&&(t[n]=e);return}}t.push(e)}var eo=class{constructor(e,t,n){this.source=e,this.flags=t,this.disabled=n}allows(e){return!this.disabled||this.disabled[e]==0}},to=e=>e,no=class{constructor(e){this.start=e.start,this.shift=e.shift||to,this.reduce=e.reduce||to,this.reuse=e.reuse||to,this.hash=e.hash||(()=>0),this.strict=e.strict!==!1}},ro=class e extends va{constructor(e){if(super(),this.wrappers=[],e.version!=14)throw RangeError(`Parser version (${e.version}) doesn't match runtime version (14)`);let t=e.nodeNames.split(` `);this.minRepeatTerm=t.length;for(let n=0;n<e.repeatNodeCount;n++)t.push(``);let n=Object.keys(e.topRules).map(t=>e.topRules[t][1]),r=[];for(let e=0;e<t.length;e++)r.push([]);function i(e,t,n){r[e].push([t,t.deserialize(String(n))])}if(e.nodeProps)for(let t of e.nodeProps){let e=t[0];typeof e==`string`&&(e=J[e]);for(let n=1;n<t.length;){let r=t[n++];if(r>=0)i(r,e,t[n++]);else{let a=t[n+-r];for(let o=-r;o>0;o--)i(t[n++],e,a);n++}}}this.nodeSet=new Ji(t.map((t,i)=>qi.define({name:i>=this.minRepeatTerm?void 0:t,id:i,props:r[i],top:n.indexOf(i)>-1,error:i==0,skipped:e.skippedNodes&&e.skippedNodes.indexOf(i)>-1}))),e.propSources&&(this.nodeSet=this.nodeSet.extend(...e.propSources)),this.strict=!1,this.bufferLength=Hi;let a=Ra(e.tokenData);this.context=e.context,this.specializerSpecs=e.specialized||[],this.specialized=new Uint16Array(this.specializerSpecs.length);for(let e=0;e<this.specializerSpecs.length;e++)this.specialized[e]=this.specializerSpecs[e].term;this.specializers=this.specializerSpecs.map(oo),this.states=Ra(e.states,Uint32Array),this.data=Ra(e.stateData),this.goto=Ra(e.goto),this.maxTerm=e.maxTerm,this.tokenizers=e.tokenizers.map(e=>typeof e==`number`?new Ha(a,e):e),this.topRules=e.topRules,this.dialects=e.dialects||{},this.dynamicPrecedences=e.dynamicPrecedences||null,this.tokenPrecTable=e.tokenPrec,this.termNames=e.termNames||null,this.maxNode=this.nodeSet.types.length-1,this.dialect=this.parseDialect(),this.top=this.topRules[Object.keys(this.topRules)[0]]}createParse(e,t,n){let r=new Qa(this,e,t,n);for(let i of this.wrappers)r=i(r,e,t,n);return r}getGoto(e,t,n=!1){let r=this.goto;if(t>=r[0])return-1;for(let i=r[t+1];;){let t=r[i++],a=t&1,o=r[i++];if(a&&n)return o;for(let n=i+(t>>1);i<n;i++)if(r[i]==e)return o;if(a)return-1}}hasAction(e,t){let n=this.data;for(let r=0;r<2;r++)for(let i=this.stateSlot(e,r?2:1),a;;i+=3){if((a=n[i])==65535)if(n[i+1]==1)a=n[i=io(n,i+2)];else if(n[i+1]==2)return io(n,i+2);else break;if(a==t||a==0)return io(n,i+1)}return 0}stateSlot(e,t){return this.states[e*6+t]}stateFlag(e,t){return(this.stateSlot(e,0)&t)>0}validAction(e,t){return!!this.allActions(e,e=>e==t||null)}allActions(e,t){let n=this.stateSlot(e,4),r=n?t(n):void 0;for(let n=this.stateSlot(e,1);r==null;n+=3){if(this.data[n]==65535)if(this.data[n+1]==1)n=io(this.data,n+2);else break;r=t(io(this.data,n+1))}return r}nextStates(e){let t=[];for(let n=this.stateSlot(e,1);;n+=3){if(this.data[n]==65535)if(this.data[n+1]==1)n=io(this.data,n+2);else break;if(!(this.data[n+2]&1)){let e=this.data[n+1];t.some((t,n)=>n&1&&t==e)||t.push(this.data[n],e)}}return t}configure(t){let n=Object.assign(Object.create(e.prototype),this);if(t.props&&(n.nodeSet=this.nodeSet.extend(...t.props)),t.top){let e=this.topRules[t.top];if(!e)throw RangeError(`Invalid top rule name ${t.top}`);n.top=e}return t.tokenizers&&(n.tokenizers=this.tokenizers.map(e=>{let n=t.tokenizers.find(t=>t.from==e);return n?n.to:e})),t.specializers&&(n.specializers=this.specializers.slice(),n.specializerSpecs=this.specializerSpecs.map((e,r)=>{let i=t.specializers.find(t=>t.from==e.external);if(!i)return e;let a=Object.assign(Object.assign({},e),{external:i.to});return n.specializers[r]=oo(a),a})),t.contextTracker&&(n.context=t.contextTracker),t.dialect&&(n.dialect=this.parseDialect(t.dialect)),t.strict!=null&&(n.strict=t.strict),t.wrap&&(n.wrappers=n.wrappers.concat(t.wrap)),t.bufferLength!=null&&(n.bufferLength=t.bufferLength),n}hasWrappers(){return this.wrappers.length>0}getName(e){return this.termNames?this.termNames[e]:String(e<=this.maxNode&&this.nodeSet.types[e].name||e)}get eofTerm(){return this.maxNode+1}get topNode(){return this.nodeSet.types[this.top[1]]}dynamicPrecedence(e){let t=this.dynamicPrecedences;return t==null?0:t[e]||0}parseDialect(e){let t=Object.keys(this.dialects),n=t.map(()=>!1);if(e)for(let r of e.split(` `)){let e=t.indexOf(r);e>=0&&(n[e]=!0)}let r=null;for(let e=0;e<t.length;e++)if(!n[e])for(let n=this.dialects[t[e]],i;(i=this.data[n++])!=65535;)(r||=new Uint8Array(this.maxTerm+1))[i]=1;return new eo(e,n,r)}static deserialize(t){return new e(t)}};function io(e,t){return e[t]|e[t+1]<<16}function ao(e){let t=null;for(let n of e){let e=n.p.stoppedAt;(n.pos==n.p.stream.end||e!=null&&n.pos>e)&&n.p.parser.stateFlag(n.state,2)&&(!t||t.score<n.score)&&(t=n)}return t}function oo(e){if(e.external){let t=+!!e.extend;return(n,r)=>e.external(n,r)<<1|t}return e.get}var so=new Wa(e=>{e.next===35&&e.peek(1)===40&&e.acceptToken(1,1)}),co={__proto__:null,import:12,define:18,lambda:32,if:40,and:44,or:48,begin:52,cond:56,let:66,match:78,export:84,"define-export":88,display:92,struct:96},lo=ro.deserialize({version:14,states:"4dQYQROOOOQP'#C`'#C`O!fQRO'#CiO!mQRO'#CjOOQP'#Ck'#CkOOQP'#Co'#CoOOQP'#Cq'#CqOOQP'#Cs'#CsOOQP'#Cu'#CuOOQP'#Cw'#CwOwQRO'#CzO!tQRO'#D}OOQP'#C{'#C{OOQP'#C|'#C|OOQP'#DS'#DSOOQP'#Dp'#DpOOQP'#Cd'#CdOOQP'#DV'#DVOOQP'#DX'#DXOOQP'#DZ'#DZOOQP'#D]'#D]OOQP'#D`'#D`OOQP'#Dk'#DkOOQP'#Da'#DaQYQROOOOQP'#Db'#DbO#wQRO,59TOOQP,59T,59TO$OQRO'#D}O$oQRO,59UOOQP,59U,59UOOQP,59f,59fO$vQRO,5:iOOQP,5:i,5:iO$}QQO,5:WO%VQQO,5:aOwQRO,5:dO%[QRO,5:eO%cQRO,5:fOwQRO,5:gO%jQQO,5:hO%rQQO,5:jOwQRO,5:nO%wQQO,5:ZO%|QQO,5:oO&UQQO,5:pOwQRO,5:qO&ZQQO,5:rOOQP-E7_-E7_OOQP-E7`-E7`OOQP1G.o1G.oOOQP1G.p1G.pOOQP1G0T1G0TO&`QQO1G/rO&hQQO'#DvOOQP'#Cm'#CmOwQRO1G/{OwQRO1G0OO&sQRO1G0POOQP1G0P1G0PO&zQRO1G0QOOQP1G0Q1G0QO'RQRO1G0ROwQRO'#CyOOQO'#Dd'#DdO'YQQO1G0SOOQP1G0S1G0SO'bQQO'#EPOOQP'#DO'#DOOwQRO1G0UO'jQQO1G0YOwQRO1G/uOOQO'#Dc'#DcO'rQQO1G0ZOOQP1G0Z1G0ZOwQRO1G0[O'zQQO1G0]O(PQQO1G0^OOQP7+%^7+%^O(UQQO7+%^O(ZQQO,5:bOOQP,5:b,5:bO(fQQO,5:cO(kQQO7+%gOwQRO7+%jOOQP7+%k7+%kOOQP7+%l7+%lO(pQRO7+%mOOQP7+%m7+%mOwQRO,59eOOQO-E7b-E7bOOQP7+%n7+%nO(wQQO'#DPOOQO'#De'#DeO)`QQO,5:kOOQP,5:k,5:kO)hQQO7+%pO(wQQO'#DUOOQO'#Dg'#DgO)mQQO7+%tOOQP7+%t7+%tO)uQQO7+%aOOQO-E7a-E7aOOQP7+%u7+%uO)zQQO7+%vOOQP7+%w7+%wO*PQQO'#DvOOQO'#D_'#D_O*XQQO7+%xOOQP<<Hx<<HxOOQP1G/|1G/|O*^QQO1G/}O*cQQO1G/}OOQP<<IR<<IRO*hQQO<<IUOOQP<<IX<<IXO*mQQO1G/PO*rQQO'#EROOQP'#DQ'#DQO*yQQO'#DROOQP'#EQ'#EQOwQRO,59kOOQO-E7c-E7cOOQP1G0V1G0VOOQP<<I[<<I[OwQRO,59pOOQO-E7e-E7eOOQP<<I`<<I`OOQP<<H{<<H{OOQP<<Ib<<IbO+QQQO,5:bOOQP<<Id<<IdO+YQQO7+%iOOQP7+%i7+%iOOQPAN>pAN>pOOQO7+$k7+$kOOQO'#Df'#DfO+_QQO,5:mOOQP,5:m,5:mO+fQQO,59mOOQP,59m,59mO+mQQO1G/VO+rQQO1G/[OOQP<<IT<<ITOOQO-E7d-E7dOOQP1G0X1G0XOOQP1G/X1G/XOOQO7+$q7+$qOOQO7+$v7+$v",stateData:"+}~O!^OSQOS~OPYOT_OV_OY_OZ_O[_O!aZO!fQO!hRO~OPYOT_OV_OY_OZ_O[_O!alO!fQO!hRO~O!ekO~PwO!gnO~PwOUrOX{O`sOdtOfuOhvOjwOlxOqyOwzOz|O|}O!O!OO!Q!PO!bqO~PwO!e!SO~PwO`sOdtOfuOhvOjwOlxOqyOwzO!bqO~PwO!g!TO~PwO!b!UO~PwOT!VOV!VO~O!a!WO~O!b!]O~PwO!b!_O~PwO!b!dO!f!aO~O!a!eO~OT!iO~OT!jO!b!lO~OT!mO~OT!oO~OT!qO!b!pO~OT!jOb!tO!b!sO~O!b!wO~PwO!b!xO~PwO!b!zO~PwO!b!}O!f!aO~O!b#RO!f#OO~O!b#WO!f#TO~OT!jO!b#ZO~O!b#]O~O!a#^O~O!b#aO~OT!jOb#cO!b#bO~OT#dO~O!b#eO~O!b#gO~PwOT#lOV#lOY#lOZ#lO[#lO!a#iO!f#kO~O!b#oO!f#OO~O!b#pO~O!b#sO!f#TO~O!b#tO~O!b#uO~OT!jO!b!sO~O!b#wO~OT#xO~O!b#yO~O!b#zO~O!e#{O~O!b$OO~P(wO!e$QO~P(wOT!jO!b#bO~O!b$TO~O!b$VO~P(wO!e$WO~P(wO!e$XO~O!e$YO~OYZ[T[~",goto:".|!{PPPP!|PPP!|PPPP#Q#Q#QP#rP#QP#QP#QP#QP#QP#u#Q#Q#QP#y#|$Q$Q#QP$Y!|P!|P!|P!|P$^!|$a$g%S%b%h%n%xPPP&O&SPP&W&[PPPP'n(`(f(i)Z){*m+_,P,q-c-f-r-z.l.p.t.xTfOh!__OQRYZhjlmptuvwz!O!Y!Z![!^!`!a!g!i!m!v!y!{#m#qR!YsT!bx!cR!gyT#P!e#Q]#l#O#T#i#k#}$PT#U!h#VR#`!oQhOR!QhQjQQmRSpZl[!Rjmp![!^!yQ![uQ!^vR!y!`Q!k|Q!r!WU#Y!k!r#vR#v#^Q!cxR!|!cQ#Q!eR#n#QQ#}#iQ$P#kT$U#}$PQ#V!hR#r#VTgOhTPOhT`OhSeOhjiQRZjlmpuv![!^!`!yQoYQ!ZtQ!`wQ!hzQ!n!OQ!u!YQ!v!ZQ!{!aQ#S!gQ#X!iQ#[!mQ#f!vQ#h!{Q$R#mR$S#q!_SOQRYZhjlmptuvwz!O!Y!Z![!^!`!a!g!i!m!v!y!{#m#qQ!XsR#_!oR!Xs!_TOQRYZhjlmptuvwz!O!Y!Z![!^!`!a!g!i!m!v!y!{#m#q!_UOQRYZhjlmptuvwz!O!Y!Z![!^!`!a!g!i!m!v!y!{#m#q!_VOQRYZhjlmptuvwz!O!Y!Z![!^!`!a!g!i!m!v!y!{#m#q!_WOQRYZhjlmptuvwz!O!Y!Z![!^!`!a!g!i!m!v!y!{#m#q!_XOQRYZhjlmptuvwz!O!Y!Z![!^!`!a!g!i!m!v!y!{#m#q!_[OQRYZhjlmptuvwz!O!Y!Z![!^!`!a!g!i!m!v!y!{#m#q!_]OQRYZhjlmptuvwz!O!Y!Z![!^!`!a!g!i!m!v!y!{#m#qR!fyQ#m#OQ#q#TX#|#i#k#}$P]#j#O#T#i#k#}$P!_^OQRYZhjlmptuvwz!O!Y!Z![!^!`!a!g!i!m!v!y!{#m#qTaOhTbOhTcOhTdOh",nodeNames:`⚠ AnonHash LineComment Program Import Identifier import String Define define Number Boolean Char Vector Obj Lambda lambda ArgList Amp If if And and Or or Begin begin Cond cond CondClause AnonFn Application Let let Bindings Binding PApp PVector Match match MatchClause Export export DefineExport define-export Display display Struct struct FieldList SExpr`,maxTerm:88,skippedNodes:[0,2],repeatNodeCount:7,tokenData:"De~RsOX#`XY'wYZ'wZ]#`]^'w^p#`pq'wqr#`rs(Yst)vtu#`uv2lvw3sxy3xyz3}z{#`{|4S|}#`}!O4S!O!PBh!P!Q#`!Q![;m![!]#`!]!^Ch!^!}#`!}#ODP#O#P#`#P#QDU#Q#o#`#o#pDZ#p#q#`#q#rD`#r;'S#`;'S;=`'q<%lO#`~#e_T~OX#`Z]#`^p#`qr#`sv#`z!O#`!O!P$d!P!]#`!^!}#`#O#P#`#Q#o#`#p#q#`#r;'S#`;'S;=`'q<%lO#`~$g_OX%fZ]%f^p%fqr%fsu%fuv&mz!O%f!P!]%f!^!}%f#O#P%f#Q#o%f#p#q%f#r;'S%f;'S;=`&g<%lO%f~%k^T~OX%fZ]%f^p%fqr%fsv%fz!O%f!P!]%f!^!}%f#O#P%f#Q#o%f#p#q%f#r;'S%f;'S;=`&g<%lO%f~&jP;=`<%l%f~&r_T~OX%fZ]%f^p%fqr%fsv%fvw%fz!O%f!P!]%f!^!}%f#O#P%f#Q#o%f#p#q%f#r;'S%f;'S;=`&g<%lO%f~'tP;=`<%l#`~'|S!^~XY'wYZ'w]^'wpq'w~(]VOr(Yrs(rs#O(Y#O#P(w#P;'S(Y;'S;=`)p<%lO(Y~(wOV~~(zRO;'S(Y;'S;=`)T;=`O(Y~)WWOr(Yrs(rs#O(Y#O#P(w#P;'S(Y;'S;=`)p;=`<%l(Y<%lO(Y~)sP;=`<%l(Y~){cT~OX#`Z]#`^p#`qr#`sv#`z!O#`!O!P$d!P!]#`!^!}#`#O#P+W#Q#Y#`#Y#Z1f#Z#h#`#h#i1f#i#o#`#p#q#`#r;'S#`;'S;=`'q<%lO#`~+]mT~OX-WZ]-W^p-Wqr-Wrs.^sv-Wvx.^z{.c{|.c|}-W}!O.c!O!P0[!P!Q-W!Q![.c![!]-W!]!^.^!^!_-W!_!`.c!`!c-W!c!}.c#O#P-W#Q#R-W#R#S.c#S#T-W#T#o.c#p#q-W#r;'S-W;'S;=`1`<%lO-W~-__[~T~OX#`Z]#`^p#`qr#`sv#`z!O#`!O!P$d!P!]#`!^!}#`#O#P#`#Q#o#`#p#q#`#r;'S#`;'S;=`'q<%lO#`~.cO[~~.jj[~T~OX#`Z]#`^p#`qr#`sv#`z{.c{|.c|}#`}!O.c!O!P$d!P!Q#`!Q![.c![!]#`!^!_#`!_!`.c!`!c#`!c!}.c#O#P#`#Q#R#`#R#S.c#S#T#`#T#o.c#p#q#`#r;'S#`;'S;=`'q<%lO#`~0a_[~OX%fZ]%f^p%fqr%fsu%fuv&mz!O%f!P!]%f!^!}%f#O#P%f#Q#o%f#p#q%f#r;'S%f;'S;=`&g<%lO%f~1cP;=`<%l-W~1m_Z~T~OX#`Z]#`^p#`qr#`sv#`z!O#`!O!P$d!P!]#`!^!}#`#O#P#`#Q#o#`#p#q#`#r;'S#`;'S;=`'q<%lO#`~2q`T~OX#`Z]#`^p#`qr#`sv#`vw#`z!O#`!O!P$d!P!]#`!^!}#`#O#P#`#Q#o#`#p#q#`#r;'S#`;'S;=`'q<%lO#`~3xOb~~3}O!a~~4SO!b~~4XaT~OX#`Z]#`^p#`qr#`sv#`z!O#`!O!P5^!P!Q#`!Q![;m![!]#`!^!}#`#O#P#`#Q#o#`#p#q#`#r;'S#`;'S;=`'q<%lO#`~5aaOX%fZ]%f^p%fqr%fsu%fuv&mz!O%f!P!Q%f!Q![6f![!]%f!^!}%f#O#P%f#Q#o%f#p#q%f#r;'S%f;'S;=`&g<%lO%f~6mdY~T~OX%fZ]%f^p%fqr%fsv%fz!O%f!P!Q%f!Q![6f![!]%f!^!g%f!g!h7{!h!}%f#O#P%f#Q#X%f#X#Y7{#Y#o%f#p#q%f#r;'S%f;'S;=`&g<%lO%f~8QcT~OX%fZ]%f^p%fqr%fsv%fz{%f{|9]|}%f}!O9]!P!Q%f!Q![:d![!]%f!^!}%f#O#P%f#Q#o%f#p#q%f#r;'S%f;'S;=`&g<%lO%f~9b`T~OX%fZ]%f^p%fqr%fsv%fz!O%f!P!Q%f!Q![:d![!]%f!^!}%f#O#P%f#Q#o%f#p#q%f#r;'S%f;'S;=`&g<%lO%f~:k`Y~T~OX%fZ]%f^p%fqr%fsv%fz!O%f!P!Q%f!Q![:d![!]%f!^!}%f#O#P%f#Q#o%f#p#q%f#r;'S%f;'S;=`&g<%lO%f~;teY~T~OX#`Z]#`^p#`qr#`sv#`z!O#`!O!P=V!P!Q#`!Q![;m![!]#`!^!g#`!g!h>m!h!}#`#O#P#`#Q#X#`#X#Y>m#Y#o#`#p#q#`#r;'S#`;'S;=`'q<%lO#`~=[eY~OX%fZ]%f^p%fqr%fsu%fuv&mz!O%f!P!Q%f!Q![6f![!]%f!^!g%f!g!h7{!h!}%f#O#P%f#Q#X%f#X#Y7{#Y#o%f#p#q%f#r;'S%f;'S;=`&g<%lO%f~>rdT~OX#`Z]#`^p#`qr#`sv#`z{#`{|@Q|}#`}!O@Q!O!P$d!P!Q#`!Q![A[![!]#`!^!}#`#O#P#`#Q#o#`#p#q#`#r;'S#`;'S;=`'q<%lO#`~@VaT~OX#`Z]#`^p#`qr#`sv#`z!O#`!O!P$d!P!Q#`!Q![A[![!]#`!^!}#`#O#P#`#Q#o#`#p#q#`#r;'S#`;'S;=`'q<%lO#`~AcaY~T~OX#`Z]#`^p#`qr#`sv#`z!O#`!O!P$d!P!Q#`!Q![A[![!]#`!^!}#`#O#P#`#Q#o#`#p#q#`#r;'S#`;'S;=`'q<%lO#`~BkP!Q![Bn~BsRY~!Q![Bn!g!hB|#X#YB|~CPR{|CY}!OCY!Q![C`~C]P!Q![C`~CePY~!Q![C`~CmSQ~OYChZ;'SCh;'S;=`Cy<%lOCh~C|P;=`<%lCh~DUO!f~~DZO!e~~D`O!h~~DeO!g~",tokenizers:[so,0],topRules:{Program:[0,3]},specialized:[{term:5,get:e=>co[e]||-1}],tokenPrec:499});function uo(e){let t=[0];for(let n=0;n<e.length;n++)e[n]===`
`&&t.push(n+1);return t}function fo(e,t){let n=0,r=t.length-1;for(;n<r;){let i=n+r+1>>1;t[i]<=e?n=i:r=i-1}return new Wt(n+1,e-t[n]+1,e)}var po=class{src;lineStarts;diagnostics;allowInternalNames;anonFnDepth=0;constructor(e,t,n,r=!1){this.src=e,this.lineStarts=t,this.diagnostics=n,this.allowInternalNames=r}range(e){return new Vt(fo(e.from,this.lineStarts),fo(Math.max(e.from,e.to-1),this.lineStarts))}text(e){return this.src.slice(e.from,e.to)}};function mo(e){let t=[],n=e.firstChild;for(;n;)n.type.name!==`LineComment`&&t.push(n),n=n.nextSibling;return t}var ho=new Set([`ArgList`,`FieldList`,`Bindings`,`Binding`,`CondClause`,`MatchClause`]);function go(e){return e.flatMap(e=>ho.has(e.type.name)?[e,...go(mo(e))]:[e])}var _o={Lambda:`lambda expression (a list of parameters and a body)`,If:`if expression (a guard, an if-branch, and an else-branch)`,Let:`let expression (a list of bindings and a body)`,Cond:`cond expression (a list of [test body] branches)`,Match:`match expression (a scrutinee and a list of [pattern body] branches)`,And:`and expression`,Or:`or expression`,Begin:`begin expression (at least one sub-expression)`,AnonFn:`anonymous function #(...)`,Application:`function application`,Vector:`vector literal`,Obj:`map literal (an even number of key/value expressions)`,PApp:`constructor pattern`,PVector:`vector pattern`,Import:`import statement (a built-in library name, or a quoted file name)`,Define:`define statement (a name and a value)`,Export:`export statement (a list of names to export)`,DefineExport:`define-export statement (a name and a value)`,Display:`display statement (a value to display)`,Struct:`struct statement (a name and a list of fields)`};function vo(e,t){if(t.type.isError){e.diagnostics.push(q(`Parse`,`error`,`Malformed syntax.`,e.range(t)));return}let n=_o[t.type.name]??`${t.type.name.toLowerCase()} expression`;e.diagnostics.push(q(`Parse`,`error`,`Malformed ${n}.`,e.range(t)))}function yo(e,t,n,r){if(t.type.isError||n.some(e=>e.type.isError))return vo(e,t),r}function bo(e,t){let n=e.text(t);switch(t.type.name){case`Number`:return Xr(n);case`String`:return Zr(n,e.range(t));case`Boolean`:return n===`#t`;case`Char`:return Qr(n,e.range(t));default:throw new L(`lezer-bridge.leafValue`,`Unexpected leaf node: ${t.type.name}`)}}var xo=(e,t)=>t.type.name===`Identifier`&&e.text(t)===`null`;function So(e){return e===`%`||e===`%&`||/^%[1-9][0-9]*$/.test(e)}function Co(e){return e.length>4&&e.startsWith(`##`)&&e.endsWith(`##`)}function wo(e,t,n){let{qualifier:r,member:i}=ht(n);for(let a of[r,i])if(ei.includes(a)||a.startsWith(`%`))return e.diagnostics.push(q(`Parse`,`error`,`The qualified name "${n}" is invalid: "${a}" is not a valid name`,e.range(t))),`<error>`;return n}function To(e,t,n=`Expected an identifier`,r=!1,i=!1){let a=e.text(t);if(ei.includes(a))return e.diagnostics.push(q(`Parse`,`error`,`The identifier "${a}" is a reserved word and cannot be used as a variable name`,e.range(t))),`<error>`;if(t.type.name!==`Identifier`)return e.diagnostics.push(q(`Parse`,`error`,n,e.range(t))),`<error>`;if(bt(a))return i?wo(e,t,a):(e.diagnostics.push(q(`Parse`,`error`,`Qualified names (like "${a}") may only be used as variable references, not as a binding name`,e.range(t))),`<error>`);if(Co(a)&&!r&&!e.allowInternalNames)return e.diagnostics.push(q(`Parse`,`error`,`The identifier "${a}" is reserved for Scamper's internal use and cannot be used as a binding name`,e.range(t))),`<error>`;if(a.startsWith(`%`)){if(!So(a))return e.diagnostics.push(q(`Parse`,`error`,`The identifier "${a}" is invalid: identifiers cannot begin with "%" (only "%", "%1", ..., "%k", and "%&" may, and only inside an anonymous function #(...))`,e.range(t))),`<error>`;if(!r)return e.diagnostics.push(q(`Parse`,`error`,`The identifier "${a}" cannot be used as a binding name`,e.range(t))),`<error>`;if(e.anonFnDepth===0)return e.diagnostics.push(q(`Parse`,`error`,`The identifier "${a}" can only be used inside an anonymous function #(...)`,e.range(t))),`<error>`}return a}function Eo(e,t,n=`Expected an identifier`,r=!1,i=!1){return F(To(e,t,n,r,i),e.range(t))}function Do(e,t){let n=[],r=e.range(t).begin.line-1,i=t.prevSibling;for(;i?.type.name===`LineComment`;){let t=e.range(i);if(t.begin.line!==r)break;let a=i.prevSibling;if(a!==null&&e.range(a).end.line===t.begin.line)break;n.unshift({line:e.text(i),range:t}),r=t.begin.line-1,i=a}return n.length>0?n:void 0}function Oo(e,t){let n=e.range(t),r=mo(t),i=yo(e,t,r,tt(`<error>`,n));if(i)return i;switch(t.type.name){case`Number`:case`String`:case`Boolean`:case`Char`:return tt(bo(e,t),n);case`Identifier`:{if(xo(e,t))return tt(null,n);let r=Eo(e,t,`Expected a valid constructor name`);return r.name===`_`?Ze(n):r}case`PApp`:return r.length===0?tt(null,n):d(Eo(e,r[0],`The first element of a pattern list must be a constructor name`),r.slice(1).map(t=>Oo(e,t)),n);case`PVector`:return re(r.map(t=>Oo(e,t)),n);default:throw new L(`lezer-bridge.patFromNode`,`Unexpected pattern node: ${t.type.name}`)}}function Q(e,t){let n=e.range(t),r=mo(t),i=yo(e,t,go(r),j(void 0,n));if(i)return i;switch(t.type.name){case`Number`:case`String`:case`Boolean`:case`Char`:return j(bo(e,t),n);case`Identifier`:return xo(e,t)?j(null,n):Eo(e,t,`Expected an identifier`,!0,!0);case`Vector`:return me(r.map(t=>Q(e,t)),n);case`Obj`:return r.length%2==0?ze(oi(r.map(t=>Q(e,t))).map(([e,t])=>({key:e,value:t})),n):(e.diagnostics.push(q(`Parse`,`error`,`A map literal must have an even number of expressions (alternating keys and values), but this one has ${r.length.toString()}`,n)),j(void 0,n));case`Lambda`:{let[t,i]=r.slice(1),a=Q(e,i),o=mo(t),s=o.findIndex(e=>e.type.name===`Amp`);return s===-1?Me(o.map(t=>Eo(e,t)),a,n):Me(o.slice(0,s).map(t=>Eo(e,t)),a,n,Eo(e,o[s+1]))}case`If`:{let t=r.slice(1);return M(Q(e,t[0]),Q(e,t[1]),Q(e,t[2]),n)}case`And`:return Ue(r.slice(1).map(t=>Q(e,t)),n);case`Or`:return tr(r.slice(1).map(t=>Q(e,t)),n);case`Begin`:return qe(r.slice(1).map(t=>Q(e,t)),n);case`AnonFn`:{e.anonFnDepth>0&&e.diagnostics.push(q(`Parse`,`error`,`Anonymous functions #(...) cannot be nested`,n)),e.anonFnDepth++;let t=Q(e,r[1]);return e.anonFnDepth--,h(t,n)}case`Application`:return r.length===0?j(null,n):H(Q(e,r[0]),r.slice(1).map(t=>Q(e,t)),n);case`Let`:{let[t,i]=r.slice(1),a=Q(e,i);return E(mo(t).map(t=>{let[n,r]=mo(t);return{pat:Oo(e,n),value:Q(e,r)}}),a,n)}case`Cond`:return S(r.slice(1).map(t=>{let[n,r]=mo(t);return{test:Q(e,n),body:Q(e,r)}}),n);case`Match`:{let t=r.slice(1);return ve(Q(e,t[0]),t.slice(1).map(t=>{let[n,r]=mo(t);return{pat:Oo(e,n),body:Q(e,r)}}),n)}default:throw new L(`lezer-bridge.expFromNode`,`Unexpected expression node: ${t.type.name}`)}}function ko(e,t){let n=e.range(t),r=mo(t),i=yo(e,t,r,at(j(void 0,n),n));if(i)return i;switch(t.type.name){case`Import`:{let t=r[1],i=r.length>2?To(e,r[2],`Expected a module alias`):void 0;if(t.type.name===`String`)return Te(bo(e,t),`file`,n,i);let a=e.text(t);return t.type.name===`Identifier`&&bt(a)?(e.diagnostics.push(q(`Parse`,`error`,`Malformed import statement: a file name like "${a}" must be quoted, e.g. (import "${a}")`,e.range(t))),at(j(void 0,n),n)):Te(To(e,t),`builtin`,n,i)}case`Define`:{let i=r.slice(1);return y(Eo(e,i[0]),Q(e,i[1]),n,Do(e,t))}case`Export`:return s(r.slice(1).map(t=>Eo(e,t)),n);case`DefineExport`:{let i=r.slice(1);return ke(Eo(e,i[0]),Q(e,i[1]),n,Do(e,t))}case`Display`:return rn(Q(e,r[1]),n);case`Struct`:{let[t,i]=r.slice(1);return k(Eo(e,t),mo(i).map(t=>Eo(e,t)),n)}case`SExpr`:return at(Q(e,r[0]),n);default:throw new L(`lezer-bridge.stmtFromNode`,`Unexpected statement node: ${t.type.name}`)}}function Ao(e,t,n={}){let r=lo.parse(t),i=new po(t,uo(t),e,n.allowInternalNames),a=[];for(let e of mo(r.topNode)){if(e.type.isError){vo(i,e);continue}a.push(ko(i,e))}return a}var jo;function Mo(){if(!jo)throw Error(`SymbolDB used before initialize()`);return jo}function No(){jo||(jo=new Map,Sf.forEach((e,t)=>{Po(t,e)}))}function Po(e,t){let n=[];t.bindings.forEach((e,t)=>{n.push(F(t))}),Mo().set(e,n)}async function Fo(e){let{getFS:t}=await ir(async()=>{let{getFS:e}=await import(`./fs-42.1.1.js`);return{getFS:e}},__vite__mapDeps([0,1,2])),n=await t().loadFile(e),r=[],i=Ao(r,n);if(r.length>0)throw qr(r[0]);return i}function Io(e){let t=new Map,n=new Set,r=e=>t.set(e.name,e);for(let t of e)switch(t.tag){case`define`:r(t.name);break;case`defexport`:r(t.name),n.add(t.name.name);break;case`struct`:r(t.name),r(F(`${t.name.name}?`,t.name.range));for(let e of t.fields)r(F(`${t.name.name}-${e.name}`,t.name.range));break;case`export`:for(let e of t.names)n.add(e.name);break}let i=[];for(let e of n){let n=t.get(e);n!==void 0&&i.push(n)}return i}function Lo(e){return e.filter(e=>e.tag===`import`&&e.kind===`file`)}async function Ro(e){let t=[],n=new Set,r=async(e,i,a)=>{for(let o of Lo(e)){let e=o.module;if(!n.has(e)){n.add(e);try{let t=await Fo(e);Mo().set(e,Io(t)),await r(t,e,a??o)}catch{i!==void 0&&a!==void 0&&t.push({filename:e,importer:i,range:a.range})}}}};return await r(e,void 0,void 0),t}function zo(e){return Mo().get(e)}function Bo(e,t,n){let r=new Set;for(let i of t)r.has(i)&&e.push(q(`Scope`,`warning`,`Duplicate variable '${i}' encountered in binding list`,n)),r.add(i)}function Vo(e,t,n){switch(n.tag){case`id`:t.has(n.name)?e.push(q(`Scope`,`warning`,`Duplicate binding variable '${n.name}' encountered in pattern`,n.range)):t.add(n.name);return;case`pwild`:return;case`plit`:return;case`pctor`:case`pvec`:n.args.forEach(n=>{Vo(e,t,n)});return}}function $(e,t,n,r,i){switch(i.tag){case`id`:if(bt(i.name)){let{qualifier:t,member:r}=ht(i.name),a=n.get(t);a===void 0?e.push(q(`Scope`,`warning`,`No imported module is qualified as '${t}'`,i.range)):a.exports.has(r)||e.push(q(`Scope`,`warning`,`Module '${t}' (${a.module}) has no exported binding '${r}'`,i.range));return}!r.includes(i.name)&&!t.includes(i.name)&&e.push(q(`Scope`,`warning`,`Undefined variable '${i.name}'`,i.range));return;case`lit`:return;case`app`:$(e,t,n,r,i.head),i.args.forEach(i=>{$(e,t,n,r,i)});return;case`lam`:{let a=(i.restParam?[...i.params,i.restParam]:i.params).map(e=>e.name);Bo(e,a,i.range),$(e,t,n,[...r,...a],i.body);return}case`let`:{let a=new Set;i.bindings.forEach(t=>{let n=new Set;Vo(e,n,t.pat);for(let t of n)a.has(t)&&e.push(q(`Scope`,`error`,`Duplicate binding '${t}' in let`,i.range)),a.add(t)});let o=[...r,...a];i.bindings.forEach(r=>{$(e,t,n,o,r.value)}),$(e,t,n,o,i.body);return}case`if`:$(e,t,n,r,i.guard),$(e,t,n,r,i.ifB),$(e,t,n,r,i.elseB);return;case`match`:$(e,t,n,r,i.scrutinee),i.branches.forEach(i=>{let a=new Set;Vo(e,a,i.pat),$(e,t,n,[...r,...a],i.body)});return;default:throw new L(`scopeCheckExp`,`Non-core expression encountered ${i.tag}`)}}function Ho(e,t,n){Zn(t)?n.includes(t.name)||e.push(q(`Docstring`,`warning`,`Undefined predicate "${t.name}"`,t.range)):Uo(e,t,n)}function Uo(e,{head:{name:t},args:n,range:r},i){i.includes(t)||e.push(q(`Docstring`,`warning`,`Undefined predicate "${t}"`,r));for(let t of n)Ho(e,t,i)}function Wo(e,t,{name:n,value:r},i){let a=n.name;if(!Gt(r)){e.push(q(`Docstring`,`warning`,`Function docstring attached to non-function definition`,t.range));return}let o=r.params.map(e=>e.name),{signature:{function:{head:{name:s},args:c},predicate:l,range:u},params:d,range:f}=t,p=[...c.map(e=>e.name)];a!==s&&e.push(q(`Docstring`,`warning`,`Docstring function name "${s}" does not match defined name "${a}"`,u));for(let t of o){let n=p.shift();if(n===void 0){e.push(q(`Docstring`,`warning`,`Expected function parameter "${t}" to be defined in docstring signature`,u));continue}t!==n&&e.push(q(`Docstring`,`warning`,`Function signature defines parameter "${t}" in this position but docstring signature instead defines "${n}"`,u))}Ho(e,l,i);let m=new Map([...o].map(e=>[e,!1]));for(let{name:t,predicate:n,range:r}of d)o.includes(t)||e.push(q(`Docstring`,`warning`,`Docstring describes unknown function parameter "${t}"`,r)),m.set(t,!0),Ho(e,n,i);for(let[t,n]of m)n||e.push(q(`Docstring`,`warning`,`Description of function parameter "${t}" missing`,f))}async function Go(e,t){if(t.kind===`builtin`){let n=zo(t.module);return n===void 0&&e.push(q(`Scope`,`warning`,`No such built-in library: '${t.module}'`,t.range)),n}let{getFS:n}=await ir(async()=>{let{getFS:e}=await import(`./fs-42.1.1.js`);return{getFS:e}},__vite__mapDeps([0,1,2])),r;try{r=await n().fileExists(t.module)}catch(n){e.push(q(`Scope`,`warning`,n instanceof Error?n.message:String(n),t.range));return}if(!r){e.push(q(`Scope`,`warning`,`File '${t.module}' does not exist`,t.range));return}let i=zo(t.module);return i===void 0&&e.push(q(`Scope`,`warning`,`Could not load module '${t.module}'`,t.range)),i}async function Ko(e,t,n,r,i){switch(i.tag){case`import`:{let a=await Go(e,i);if(a===void 0)return;if(i.alias!==void 0){let t=n.get(i.alias);t!==void 0&&t.module!==i.module?e.push(q(`Scope`,`warning`,`Qualified name '${i.alias}' is already bound to module '${t.module}'`,i.range)):t===void 0&&n.set(i.alias,{module:i.module,exports:new Set(a.map(e=>e.name))});return}for(let{name:n}of a){let a=r.get(n);a!==void 0&&a!==i.module?e.push(q(`Scope`,`warning`,`Global variable '${n}' is already defined`,i.range)):a===void 0&&(t.includes(n)||t.push(n),r.set(n,i.module))}return}case`define`:{let n=i.name.name;t.includes(n)?e.push(q(`Scope`,`warning`,`Global variable '${n}' is already defined`,i.range)):t.push(n),r.set(n,null);return}case`export`:case`display`:case`stmtexp`:return;default:throw new L(`collectTopLevelBindings`,`Non-core statement encountered ${i.tag}`)}}function qo(e,t,n,r,i){switch(i.tag){case`import`:return;case`export`:for(let n of i.names)r.get(n.name)!==null&&e.push(q(`Scope`,`warning`,t.includes(n.name)?`Cannot export '${n.name}': it is not defined in this module`:`Exporting undefined variable '${n.name}'`,n.range));return;case`define`:if($(e,t,n,[],i.value),i.docComments){let{doc:n,diagnostics:r}=Vi(i.docComments);e.push(...r),n&&Wo(e,n,i,t)}return;case`display`:$(e,t,n,[],i.value);return;case`stmtexp`:$(e,t,n,[],i.expr);return;default:throw new L(`scopeCheckStmtBodies`,`Non-core statement encountered ${i.tag}`)}}async function Jo(e,t){for(let n of await Ro(t))e.push(q(`Scope`,`warning`,`Could not load module '${n.filename}' (imported by '${n.importer}')`,n.range));let n=[];for(let e of zo(`runtime`))n.push(e.name);for(let e of zo(`prelude`))n.push(e.name);let r=new Map,i=new Map;for(let a of t)await Ko(e,n,i,r,a);for(let a of t)qo(e,n,i,r,a)}function Yo(e){switch(e.tag){case`pwild`:return Ze(e.range);case`plit`:return tt(e.value,e.range);case`pvar`:return F(e.name,e.range);case`pctor`:return d(F(e.name,e.range),e.args.map(Yo),e.range);case`pvec`:return re(e.args.map(Yo),e.range)}}function Xo(e){return e.map(e=>(Jn(e)||Et(e))&&e.name?F(e.name):j(e))}function Zo(e,t,n){for(let r=n.length-1;r>=0;r--){let i=n[r];switch(i.tag){case`lit`:e.push(j(i.value,i.range,i.provenance));break;case`var`:{let n=t.lookup(i.name);n.found&&n.slot!==Lt&&!Jn(n.slot)?e.push(j(n.slot)):e.push(F(i.name));break}case`cls`:{let n=i.restParam?[...i.params,i.restParam]:i.params,r=Zo([],t.withoutLocals(...n),i.body.toReversed());i.provenance===`anon-fn`?e.push(Me(i.params.map(e=>F(e)),r,i.range,i.restParam?F(i.restParam):void 0,`anon-fn`)):i.name?e.push(F(i.name)):e.push(Me(i.params.map(e=>F(e)),r,void 0,i.restParam?F(i.restParam):void 0));break}case`ap`:{let t=e.splice(-(i.numArgs+1)),n=t[0],r=i.numArgs===0?[]:t.slice(1);e.push(H(n,r,i.range,i.provenance));break}case`match`:{let n=mn(e,`the raise stack`),r=i.branches.map(([e,n])=>{let r=Zo([],t.withoutLocals(...St(e)),n.toReversed());return{pat:Yo(e),body:r}});e.push(ve(n,r));break}case`let`:if(i.idx===0){let n=t.withoutLocals(...i.bindings.flatMap(e=>St(e.pat))),r=i.bindings.map(e=>({pat:Yo(e.pat),value:Zo([],n,e.value.toReversed())}));e.push(E(r,Zo([],n,i.body.toReversed()),i.range,i.provenance))}else{let n=mn(e,`the raise stack`),r=i.bindings.slice(i.idx-1),a=t.withoutLocals(...r.flatMap(e=>St(e.pat))),o=r.map((e,t)=>({pat:Yo(e.pat),value:t===0?n:Zo([],a,e.value.toReversed())}));e.push(E(o,Zo([],a,i.body.toReversed()),i.range,i.provenance))}break;case`if`:{let n=mn(e,`the raise stack`),r=Zo([],t,i.thenB.toReversed()),a=Zo([],t,i.elseB.toReversed());e.push(M(n,r,a,i.range,i.provenance));break}case`pop-scope`:break;case`ap-spread`:{let[t,n]=e.splice(-2);e.push(H(F(`apply`),[t,n]));break}case`push-handler`:break;case`pop-handler`:{let t=mn(e,`the raise stack`);e.pop(),e.push(t);break}}}return mn(e,`the raise stack`)}function Qo(e){if(e.length===0)throw new L(`raiseFrames`,`no frames to raise`);let t=e[e.length-1],n=Zo(Xo(t.values),t.env,t.ops);for(let t=e.length-2;t>=0;t--){let r=Xo(e[t].values);r.push(n),n=Zo(r,e[t].env,e[t].ops)}return n}function $o(e){return Qo(e.frames)}function es(e,t){let n=e.findIndex(e=>e.range.contains(t));if(n<0)return{ok:!1,diagnostic:q(`Query`,`error`,`Received invalid query location: ${t.toString()}`)};let{stmt:r,range:i}=ts(e[n],t);return{ok:!0,prog:e.map((e,t)=>t===n?r:e),range:i}}function ts(e,t){switch(e.tag){case`define`:{let n=rs(e.value,t);return{stmt:y(e.name,n.exp,e.range,e.docComments),range:n.range}}case`defexport`:{let n=rs(e.value,t);return{stmt:ke(e.name,n.exp,e.range,e.docComments),range:n.range}}case`display`:{let n=rs(e.value,t);return{stmt:rn(n.exp,e.range),range:n.range}}case`stmtexp`:{let n=rs(e.expr,t);return{stmt:at(n.exp,e.range),range:n.range}}case`import`:case`struct`:case`export`:return{stmt:e,range:e.range}}}function ns(e){switch(e.tag){case`lit`:case`id`:return[];case`app`:return[{exp:e.head,rebuild:t=>H(t,e.args,e.range)},...e.args.map((t,n)=>({exp:t,rebuild:t=>H(e.head,e.args.map((e,r)=>r===n?t:e),e.range)}))];case`lam`:return[{exp:e.body,rebuild:t=>Me(e.params,t,e.range,e.restParam)}];case`if`:return[{exp:e.guard,rebuild:t=>M(t,e.ifB,e.elseB,e.range)},{exp:e.ifB,rebuild:t=>M(e.guard,t,e.elseB,e.range)},{exp:e.elseB,rebuild:t=>M(e.guard,e.ifB,t,e.range)}];case`and`:case`or`:case`begin`:{let t={and:Ue,or:tr,begin:qe}[e.tag];return e.exps.map((n,r)=>({exp:n,rebuild:n=>t(e.exps.map((e,t)=>t===r?n:e),e.range)}))}case`anonfn`:return[{exp:e.body,rebuild:t=>h(t,e.range)}];case`let`:return[...e.bindings.map((t,n)=>({exp:t.value,rebuild:t=>E(e.bindings.map((e,r)=>r===n?{pat:e.pat,value:t}:e),e.body,e.range)})),{exp:e.body,rebuild:t=>E(e.bindings,t,e.range)}];case`cond`:return e.branches.flatMap((t,n)=>[{exp:t.test,rebuild:t=>S(e.branches.map((e,r)=>r===n?{test:t,body:e.body}:e),e.range)},{exp:t.body,rebuild:t=>S(e.branches.map((e,r)=>r===n?{test:e.test,body:t}:e),e.range)}]);case`match`:return[{exp:e.scrutinee,rebuild:t=>ve(t,e.branches,e.range)},...e.branches.map((t,n)=>({exp:t.body,rebuild:t=>ve(e.scrutinee,e.branches.map((e,r)=>r===n?{pat:e.pat,body:t}:e),e.range)}))];case`vec`:return e.exps.map((t,n)=>({exp:t,rebuild:t=>me(e.exps.map((e,r)=>r===n?t:e),e.range)}));case`obj`:return e.pairs.flatMap((t,n)=>[{exp:t.key,rebuild:t=>ze(e.pairs.map((e,r)=>r===n?{key:t,value:e.value}:e),e.range)},{exp:t.value,rebuild:t=>ze(e.pairs.map((e,r)=>r===n?{key:e.key,value:t}:e),e.range)}])}}function rs(e,t){for(let n of ns(e))if(n.exp.range.contains(t)){let e=rs(n.exp,t);return{exp:n.rebuild(e.exp),range:e.range}}return{exp:H(F(`##report##`,e.range),[e],e.range),range:e.range}}function is(e){let t=[];for(let n of e){if(n.tag!==`define`&&n.tag!==`defexport`||n.docComments===void 0)continue;let{doc:e}=Vi(n.docComments);if(e!==void 0)for(let n of e.tags)Si(n)&&t.push({range:n.range,call:n.contents.functionCall,expected:n.contents.result})}return t}function as(e,t){let n=me([t.call,t.expected]);return[...e,at(H(F(`##report##`),[n]))]}function os(e){let t=e.at(0);if(t===void 0||!(t instanceof Rn))return{status:`error`,message:t?.message??`The example never produced a value.`};let n=t.value;if(!Hn(n)||n.length!==2)return{status:`error`,message:`The example never produced a value.`};let[r,i]=n;return Kt(r,i)?{status:`pass`}:{status:`fail`,actual:r,expected:i}}var ss=`##contract-target##`;function cs(e){return e.name.endsWith(`?`)?e.name.slice(0,-1):e.name}function ls(e){if(e.tag!==`id`){let t=e.args;if(e.head.name===`or/p`&&t.length>0&&t.every(Zn)){let e=t.map(cs);return e.length===1?e[0]:e.length===2?`${e[0]} or ${e[1]}`:`${e.slice(0,-1).join(`, `)}, or ${e[e.length-1]}`}return`a value matching \`${Rt(e)}\``}let t=cs(e);return`${/^[aeiou]/i.test(t)?`an`:`a`} ${t}`}function us(e,t,n){return H(F(`string-append`,n),[j(`expected `,n),j(e,n),j(`, received `,n),H(F(`##typeOf##`,n),[F(t,n)],n)],n)}function ds(e,t,n){return H(F(`string-append`,n),[j(`expected every value of ${t} to be `,n),j(e,n),j(`, but at least one was not`,n)],n)}function fs(e,t,n){if(!t)return H(F(ss,n),e.map(e=>F(e.name,n)),n);let r=e.reduceRight((e,t)=>H(F(`cons`,n),[F(t.name,n),e],n),F(t.name,n));return H(F(`##ap-spread##`,n),[F(ss,n),r],n)}function ps(e,t,n){let r=fs(e,t,n),i=t?M(H(F(`all-satisfy?`,n),[t.predicate,F(t.name,n)],n),r,H(F(`##error##`,n),[ds(ls(t.predicate),t.name,n)],n),n):r,a=t=>{if(t===e.length)return i;let{name:r,predicate:o}=e[t];return M(H(o,[F(r,n)],n),a(t+1),H(F(`##error##`,n),[us(ls(o),r,n)],n),n)};return a(0)}function ms(e){if(e.tag!==`define`&&e.tag!==`defexport`||!e.docComments)return e;let{doc:t}=Vi(e.docComments);if(!t||t.params.length===0&&!t.restParam)return e;let n=E([{pat:F(ss,e.range),value:e.value}],Me(t.params.map(t=>F(t.name,e.range)),ps(t.params,t.restParam,e.range),e.range,t.restParam?F(t.restParam.name,e.range):void 0),e.range);return e.tag===`define`?y(e.name,n,e.range,e.docComments):ke(e.name,n,e.range,e.docComments)}function hs(e){return e.map(ms)}function gs(e,t,n={}){let r=[],i=Ao(r,e,n);if(r.length>0)return{diagnostics:r};if(!t)return{program:i,diagnostics:r};let a=es(i,t);if(!a.ok)return{diagnostics:[a.diagnostic]};let o=a.prog,s=a.range.firstLineSpan(e),c=o.find(e=>e.range.contains(t));if(c?.tag!==`define`&&c?.tag!==`defexport`||c.docComments===void 0)return{diagnostics:[q(`Query`,`error`,`Querying is only allowed within function definitions with docstrings`)]};let{doc:l,diagnostics:u}=Vi(c.docComments);if(u.length>0)return{diagnostics:u};if(l===void 0)return{diagnostics:[q(`Query`,`error`,`Querying is only allowed within function definitions with docstrings`)]};let d=l.tags.filter(e=>Si(e)).at(0);return d?(o.push(rn(d.contents.functionCall)),{program:o,queriedRange:s,diagnostics:[]}):{diagnostics:[q(`Query`,`error`,`Querying requires an example tag`)]}}async function _s(e,t={}){let{queryLoc:n,insertContracts:r=!1,scopeCheck:i=!1,allowInternalNames:a=!1}=t,o=n?gs(e,n,{allowInternalNames:a}):gs(e,void 0,{allowInternalNames:a}),s=[...o.diagnostics];if(o.program===void 0)return n?{queriedRange:void 0,diagnostics:s}:{diagnostics:s};let c=o.program;i&&await Jo(s,Kr(c));let l=Ur(Kr(r?hs(c):c));return n?{prog:l,queriedRange:o.queriedRange,diagnostics:s}:{prog:l,diagnostics:s}}function vs(e){let{program:t,diagnostics:n}=gs(e);return t===void 0?{examples:[],diagnostics:n}:{examples:is(t).map(e=>({range:e.range,prog:Ur(Kr(as(t,e)))})),diagnostics:n}}function ys(e){return gs(e).program?.length}function bs(){return jt.empty.extendWithImport(`runtime`,Ar.get(`runtime`)).extendWithImport(`prelude`,Ar.get(`prelude`))}var xs=60,Ss=class{tasks=[];steppingGates=new Map;tracesStarted=new Set;nextCaption=new Map;isRunning=!1;steppingTaskId;currTaskIdx=0;timeQuantum=1e3/xs;controller=new AbortController;currentTaskId(){return this.steppingTaskId}schedule(e){if(e.fiber.isDone())throw new L(`Scheduler.schedule`,`Scheduling invariant violated: scheduling completed fibers is disallowed!`);Cs(e)&&e.stepping&&!this.steppingGates.has(e.id)&&this.steppingGates.set(e.id,{task:e,mode:`step`,resolve:()=>{},lastStmtIdx:e.fiber.stmtIndex,parked:!1}),this.tasks.push(e),this.resumeExecution()}cancelTask(e){let t=this.wasPaused();this.pauseExecution();let n=this.steppingGates.get(e),r=this.tasks.findIndex(t=>t.id===e);if(n===void 0&&r===-1){t||this.resumeExecution();return}(n?.task.err??this.tasks[r].err).report(new P(`Runtime`,`Evaluation cancelled`)),r!==-1&&this.tasks.splice(r,1),n&&(this.steppingGates.delete(e),n.resolve()),this.tracesStarted.delete(e),this.nextCaption.delete(e),t||this.resumeExecution()}pauseExecution(){this.controller.abort(),this.isRunning=!1}resumeExecution(){this.isRunning||(this.controller=new AbortController,this.isRunning=!0,this.execute())}stepTask(e){let{fiber:t}=e;if(t.isDone())throw new L(`Scheduler.execute`,`Scheduling invariant violated: a completed fiber remains in the task queue!`);try{return t.step()}catch(n){if(n instanceof bn)return Pr(n.action,n.range);if(!(n instanceof P))throw n;if(!(n instanceof Rn)&&t.handleError(n))return;if(ws(e)){console.debug(n),e.err.report(n),this.endCurrFiber();return}this.reportAndUnwind(n,e);return}}async processStepResult(e,t){let n=t.fiber;if(!e)return!1;if(e.tag===`import-file`){let{getFS:r}=await ir(async()=>{let{getFS:e}=await import(`./fs-42.1.1.js`);return{getFS:e}},__vite__mapDeps([0,1,2])),i;try{i=await r().fileExists(e.filename)}catch(n){return t.err.report(n instanceof P?n:new P(`Runtime`,`Attempted to import file "${e.filename}" but it could not be read!`)),this.endCurrFiber(),!0}return i?(this.removeTaskFromQueue(this.currTaskIdx),r().loadFile(e.filename).then(async r=>{let{prog:i,diagnostics:a}=await _s(r);if(a.forEach(e=>{t.err.report(qr(e))}),i===void 0){n.advanceStmt(),this.resumeOrComplete(t);return}let o=new Fr(i,bs(),!0),s=crypto.randomUUID(),c=()=>{let r=o.getModule();n.topLevelEnv=e.alias===void 0?n.topLevelEnv.extendWithImport(e.filename,r):n.topLevelEnv.extendWithQualifiedImport(e.alias,r),n.advanceStmt(),this.resumeOrComplete(t)};if(o.isDone()){c();return}this.schedule({id:s,fiber:o,err:t.err,onFatal:r=>{t.err.report(new P(`Runtime`,`Attempted to import file "${e.filename}" but it failed to run: ${r instanceof Error?r.toString():String(r)}`)),n.advanceStmt(),this.resumeOrComplete(t)},onComplete:c})},r=>{t.err.report(new P(`Runtime`,`Attempted to import file "${e.filename}" but it failed to load!`)),n.advanceStmt(),this.resumeOrComplete(t)})):(t.err.report(new P(`Runtime`,`Attempted to import file "${e.filename}" but it does not exist!`)),this.endCurrFiber()),!0}if(e.tag===`block-on`)return this.removeTaskFromQueue(this.currTaskIdx),e.action().then(e=>{n.resumeWithValue(e),this.schedule(t)},r=>{let i=r instanceof P?r:new P(`Runtime`,r instanceof Error?r.message:String(r));i.range??=e.range,n.handleError(i)||(t.err.report(i),n.advanceStmt()),this.resumeOrComplete(t)}),!0;if(!Cs(t))return!1;let{out:r}=t,i=t.stepping?this.steppingGates.get(t.id):void 0,a=e.tag===`minor`||e.tag===`yield`,o=!1;if(e.tag===`display`)if(t.isTracing&&t.stepper&&n.lastResult!==null){let e=t.stepper.final(n.lastResult);e!==void 0&&(this.captionUpTo(t,n.stmtIndex-1),r.send(this.mkTraceValue(t,e)),o=!0)}else this.captionUpTo(t,n.stmtIndex-1),r.send(n.lastResult);else if(!a&&t.isTracing&&t.stepper){let e=t.stepper.render(n);e!==void 0&&(this.captionUpTo(t,n.stmtIndex),r.send(this.mkTraceValue(t,e)),o=!0)}if(i){let e=n.stmtIndex>i.lastStmtIdx;if(i.lastStmtIdx=n.stmtIndex,!n.isDone()&&(i.mode===`step`?o:i.mode===`statement`&&e))return this.parkInGate(t),!0}return!1}mkTraceValue(e,t){return this.tracesStarted.has(e.id)?zr(t):(this.tracesStarted.add(e.id),Rr(``,t))}captionUpTo(e,t){let n=e.src,r=e.out.beginStatement;if(n===void 0||r===void 0)return;let i=this.nextCaption.get(e.id)??0,a=i>0?e.fiber.statementAt(i-1)?.range:void 0;for(;i<=t;i++){let t=e.fiber.statementAt(i);if(t===void 0)break;let{begin:o,end:s}=t.range;if(o.idx<0||s.idx<o.idx||s.idx>=n.length||a!==void 0&&yt(a,t.range))continue;let c=n.slice(o.idx,s.idx+1).trim();c.length>0&&(r.call(e.out,c,i),a=t.range)}this.nextCaption.set(e.id,i)}captionRemaining(e){Cs(e)&&e.fiber.isDone()&&this.captionUpTo(e,e.fiber.statementCount-1)}parkInGate(e){this.removeTaskFromQueue(this.currTaskIdx);let t=this.steppingGates.get(e.id);if(t){t.parked=!0;let e=t.resolve;t.resolve=()=>{},e()}}wakeGate(e){let t=this.steppingGates.get(e);if(t?.parked){if(t.task.fiber.isDone()){this.steppingGates.delete(e),this.tracesStarted.delete(e),this.nextCaption.delete(e);let n=t.resolve;t.task.onComplete?.(),n();return}t.parked=!1,this.schedule(t.task)}}step(e){let t=this.steppingGates.get(e);t&&(t.mode=`step`,this.wakeGate(e))}resume(e,t){let n=this.steppingGates.get(e);if(!n)return Promise.resolve();let r=n.resolve;return n.resolve=()=>{},r(),new Promise(r=>{n.mode=t,n.resolve=r,this.wakeGate(e)})}pauseStepping(e){let t=this.steppingGates.get(e);t&&(t.mode=`step`)}async execute(){for(;!this.wasPaused();){if(this.tasks.length===0){this.isRunning=!1;return}await Lr();let e=performance.now();for(;performance.now()-e<this.timeQuantum&&!this.wasPaused();){if(this.currTaskIdx>=this.tasks.length){if(this.tasks.length===0)break;this.currTaskIdx=0}let e=this.tasks.at(this.currTaskIdx);if(!e)throw new L(`Scheduler.execute`,`Scheduler attempted to execute task #${this.currTaskIdx.toString()} when there are only ${this.tasks.length.toString()} tasks!`);try{this.steppingTaskId=e.id;let t;try{t=this.stepTask(e)}finally{this.steppingTaskId=void 0}await this.processStepResult(t,e)||this.moveNextTask(e.fiber)}catch(t){if(this.dropTask(e),e.onFatal===void 0)throw this.isRunning=!1,t;e.onFatal(t)}}}}dropTask(e){let t=this.tasks.findIndex(t=>t.id===e.id);t!==-1&&this.tasks.splice(t,1);let n=this.steppingGates.get(e.id);n&&(this.steppingGates.delete(e.id),n.resolve()),this.tracesStarted.delete(e.id),this.nextCaption.delete(e.id)}removeTaskFromQueue(e){let t=this.tasks.at(this.tasks.length-1);if(!t)throw new L(`Scheduler.removeTaskFromQueue`,`Loop iteration atomicity error: somehow scheduler's tasks changed mid-iteration!`);if(e>=this.tasks.length)throw new L(`Scheduler.removeTaskFromQueue`,`Loop iteration atomicity error: asked to remove task #${e.toString()} of ${this.tasks.length.toString()}!`);let n=this.tasks[e];return this.tasks[e]=t,this.tasks.pop(),n}endCurrFiber(){let e=this.removeTaskFromQueue(this.currTaskIdx);if(e){this.captionRemaining(e),this.tracesStarted.delete(e.id),this.nextCaption.delete(e.id);let t=this.steppingGates.get(e.id);t&&(this.steppingGates.delete(e.id),t.resolve()),e.onComplete?.()}}resumeOrComplete(e){e.fiber.isDone()?(this.captionRemaining(e),this.tracesStarted.delete(e.id),this.nextCaption.delete(e.id),e.onComplete?.()):this.schedule(e)}moveNextTask(e){if(!e.isDone()){this.currTaskIdx++;return}this.endCurrFiber()}reportAndUnwind(e,t){this.captionUpTo(t,t.fiber.stmtIndex),t.err.report(e),t.fiber.advanceStmt()}wasPaused(){return!this.isRunning||this.controller.signal.aborted}async setTimeQuantumFromFPS(){let e=await new Promise(e=>{let t=0,n=performance.now();function r(){t++;let i=performance.now()-n;if(i>=1e3){e(1e3/Math.floor(t*1e3/i));return}requestAnimationFrame(r)}requestAnimationFrame(r)});this.timeQuantum=e}};function Cs(e){return typeof e==`object`&&`out`in e&&`isTracing`in e}function ws(e){return!Cs(e)}var Ts=0;function Es(e,t){if(e.isDone())return Promise.resolve();let n=new Ss;return new Promise((r,i)=>{n.schedule({id:`run-${(Ts++).toString()}`,fiber:e,out:t.out,err:t.err,isTracing:t.isTracing??!1,stepper:t.stepper,src:t.src,onComplete:r,onFatal:i})}).finally(()=>{n.pauseExecution()})}var Ds=t({canvas_animateWith:()=>Rs,canvas_canvasCircle:()=>Ps,canvas_canvasDrawing:()=>Is,canvas_canvasEllipse:()=>Ns,canvas_canvasGetPixel:()=>Bs,canvas_canvasHeight:()=>As,canvas_canvasOnclick:()=>zs,canvas_canvasPath:()=>Ls,canvas_canvasQ:()=>Os,canvas_canvasRectangle:()=>Ms,canvas_canvasSetPixels:()=>Ws,canvas_canvasText:()=>Fs,canvas_canvasToPixels:()=>Hs,canvas_canvasWidth:()=>ks,canvas_makeCanvas:()=>js,canvas_pixelsQ:()=>Vs,canvas_pixelsToCanvas:()=>Us});function Os(e){return e instanceof HTMLCanvasElement}function ks(e){return e.width}function As(e){return e.height}function js(e,t){let n=document.createElement(`canvas`);return n.width=e,n.height=t,n}function Ms(e,t,n,r,i,a,o){let s=qt(e);if(s.fillStyle=Ct(Ge(o)),s.strokeStyle=Ct(Ge(o)),a===`solid`)s.fillRect(t,n,r,i);else if(a===`outline`)s.strokeRect(t,n,r,i);else throw new P(`Runtime`,`canvas-rectangle!: expected "solid" or "outline", but got ${a}`)}function Ns(e,t,n,r,i,a,o,s,c,l){let u=qt(e);if(u.fillStyle=Ct(Ge(l)),u.strokeStyle=Ct(Ge(l)),u.beginPath(),u.ellipse(t,n,r,i,a,o,s),c===`solid`)u.fill();else if(c===`outline`)u.stroke();else throw new P(`Runtime`,`canvas-ellipse!: expected "solid" or "outline", but got ${c}`)}function Ps(e,t,n,r,i,a){let o=qt(e);if(o.fillStyle=Ct(Ge(a)),o.strokeStyle=Ct(Ge(a)),o.beginPath(),o.arc(t,n,r,0,2*Math.PI),i===`solid`)o.fill();else if(i===`outline`)o.stroke();else throw new P(`Runtime`,`canvas-circle!: expected "solid" or "outline", but got ${i}`)}function Fs(e,t,n,r,i,a,o,...s){let c=Ht(`Arial`);if(s.length>1)throw new P(`Runtime`,`wrong number of arguments to canvas-text! provided. Expected 7 or 8, received ${arguments.length}.`);if(s.length==1)if(xt(s[0]))c=s[0];else throw new P(`Runtime`,`expected a font, received ${I(s[0])}`);let l=qt(e);if(l.fillStyle=Ct(Ge(o)),l.strokeStyle=Ct(Ge(o)),l.font=Un(c,i),a===`solid`)l.fillText(r,t,n);else if(a===`outline`)l.strokeText(r,t,n);else throw new P(`Runtime`,`canvas-text!: expected "solid" or "outline", but got ${a}`)}function Is(e,t,n,r){pn(t,n,r,e)}function Ls(e,t,n,r){let i=qt(e),a=an(t);if(n!==`solid`&&n!==`outline`)throw new P(`Runtime`,`canvas-path!: expected "solid" or "outline", but got ${n}`);if(a.length===0)return;i.fillStyle=Ct(Ge(r)),i.strokeStyle=Ct(Ge(r)),i.beginPath();let o=a[0];i.moveTo(o.fst,o.snd);for(let e=1;e<a.length;e++)o=a[e],i.lineTo(o.fst,o.snd);n===`solid`?i.fill():i.stroke()}function Rs(e){let t=B();function n(r){t.signal?.aborted||t.spawn(e,[r],e=>{e===!0&&!t.signal?.aborted&&window.requestAnimationFrame(n)})}window.requestAnimationFrame(n)}function zs(e,t){let n=B();e.addEventListener(`click`,e=>{n.spawn(t,[e.offsetX,e.offsetY])},{signal:n.signal})}function Bs(e,t,n){let r=qt(e).getImageData(t,n,1,1).data;return ce(r[0],r[1],r[2],r[3])}function Vs(e){return Hn(e)&&e.every(e=>N(e,`rgba`))}function Hs(e){let t=qt(e).getImageData(0,0,e.width,e.height).data,n=[];for(let e=0;e<t.length;e+=4)n.push(ce(t[e],t[e+1],t[e+2],t[e+3]));return n}function Us(e,t,n){let r=document.createElement(`canvas`);r.width=t,r.height=n;let i=qt(r),a=i.createImageData(t,n),o=a.data;for(let t=0;t<e.length;t++){let n=e[t];o[t*4]=n.red,o[t*4+1]=n.green,o[t*4+2]=n.blue,o[t*4+3]=n.alpha}return i.putImageData(a,0,0),r}function Ws(e,t){let n=qt(e),r=n.createImageData(e.width,e.height),i=r.data;for(let e=0;e<t.length;e++){let n=t[e];i[e*4]=n.red,i[e*4+1]=n.green,i[e*4+2]=n.blue,i[e*4+3]=n.alpha}n.putImageData(r,0,0)}var Gs=e(n(((e,t)=>{((n,r)=>{typeof define==`function`&&define.amd?define([],r):typeof t==`object`&&e!==void 0?t.exports=r():n.Papa=r()})(e,function e(){var t=typeof self<`u`?self:typeof window<`u`?window:t===void 0?{}:t,n,r=!t.document&&!!t.postMessage,i=t.IS_PAPA_WORKER||!1,a={},o=0,s={};function c(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine=``,this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=y(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new p(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,n){var r=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<r){let t=this._config.newline;t||=(a=this._config.quoteChar||`"`,this._handle.guessLineEndings(e,a)),e=[...e.split(t).slice(r)].join(t)}this.isFirstChunk&&x(this._config.beforeFirstChunk)&&(a=this._config.beforeFirstChunk(e))!==void 0&&(e=a),this.isFirstChunk=!1,this._halted=!1;var r=this._partialLine+e,a=(this._partialLine=``,this._handle.parse(r,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(e=a.meta.cursor,r=(this._finished||(this._partialLine=r.substring(e-this._baseIndex),this._baseIndex=e),a&&a.data&&(this._rowCount+=a.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),i)t.postMessage({results:a,workerId:s.WORKER_ID,finished:r});else if(x(this._config.chunk)&&!n){if(this._config.chunk(a,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=a=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(a.data),this._completeResults.errors=this._completeResults.errors.concat(a.errors),this._completeResults.meta=a.meta),this._completed||!r||!x(this._config.complete)||a&&a.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),r||a&&a.meta.paused||this._nextChunk(),a}this._halted=!0},this._sendError=function(e){x(this._config.error)?this._config.error(e):i&&this._config.error&&t.postMessage({workerId:s.WORKER_ID,error:e,finished:!1})}}function l(e){var t;(e||={}).chunkSize||(e.chunkSize=s.RemoteChunkSize),c.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)),t.open(this._config.downloadRequestBody?`POST`:`GET`,this._input,!r),this._config.downloadRequestHeaders){var e,n=this._config.downloadRequestHeaders;for(e in n)t.setRequestHeader(e,n[e])}var i;this._config.chunkSize&&(i=this._start+this._config.chunkSize-1,t.setRequestHeader(`Range`,`bytes=`+this._start+`-`+i));try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}r&&t.status===0&&this._chunkError()}},this._chunkLoaded=function(){t.readyState===4&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize||t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(e=>(e=e.getResponseHeader(`Content-Range`))===null?-1:parseInt(e.substring(e.lastIndexOf(`/`)+1)))(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){e=t.statusText||e,this._sendError(Error(e))}}function u(e){(e||={}).chunkSize||(e.chunkSize=s.LocalChunkSize),c.call(this,e);var t,n,r=typeof FileReader<`u`;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,r?((t=new FileReader).onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input,i=(this._config.chunkSize&&(i=Math.min(this._start+this._config.chunkSize,this._input.size),e=n.call(e,this._start,i)),t.readAsText(e,this._config.encoding));r||this._chunkLoaded({target:{result:i}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function d(e){var t;c.call(this,e||={}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){var e,n;if(!this._finished)return e=this._config.chunkSize,t=e?(n=t.substring(0,e),t.substring(e)):(n=t,``),this._finished=!t,this.parseChunk(n)}}function f(e){c.call(this,e||={});var t=[],n=!0,r=!1;this.pause=function(){c.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){c.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on(`data`,this._streamData),this._input.on(`end`,this._streamEnd),this._input.on(`error`,this._streamError)},this._checkIsFinished=function(){r&&t.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):n=!0},this._streamData=b(function(e){try{t.push(typeof e==`string`?e:e.toString(this._config.encoding)),n&&(n=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=b(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=b(function(){this._streamCleanUp(),r=!0,this._streamData(``)},this),this._streamCleanUp=b(function(){this._input.removeListener(`data`,this._streamData),this._input.removeListener(`end`,this._streamEnd),this._input.removeListener(`error`,this._streamError)},this)}function p(e){var t,n,r,i,a=2**53,o=-a,c=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,l=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,u=this,d=0,f=0,p=!1,g=!1,_=[],v={data:[],errors:[],meta:{}};function b(t){return e.skipEmptyLines===`greedy`?t.join(``).trim()===``:t.length===1&&t[0].length===0}function S(){if(v&&r&&(w(`Delimiter`,`UndetectableDelimiter`,`Unable to auto-detect delimiting character; defaulted to '`+s.DefaultDelimiter+`'`),r=!1),e.skipEmptyLines&&(v.data=v.data.filter(function(e){return!b(e)})),C()){if(v)if(Array.isArray(v.data[0])){for(var t=0;C()&&t<v.data.length;t++)v.data[t].forEach(n);v.data.splice(0,1)}else v.data.forEach(n);function n(t,n){x(e.transformHeader)&&(t=e.transformHeader(t,n)),_.push(t)}}function n(t,n){for(var r=e.header?{}:[],i=0;i<t.length;i++){var s=i,u=t[i],u=((t,n)=>(t=>(e.dynamicTypingFunction&&e.dynamicTyping[t]===void 0&&(e.dynamicTyping[t]=e.dynamicTypingFunction(t)),!0===(e.dynamicTyping[t]||e.dynamicTyping)))(t)?n===`true`||n===`TRUE`||n!==`false`&&n!==`FALSE`&&((e=>{if(c.test(e)&&(e=parseFloat(e),o<e&&e<a))return 1})(n)?parseFloat(n):l.test(n)?new Date(n):n===``?null:n):n)(s=e.header?i>=_.length?`__parsed_extra`:_[i]:s,u=e.transform?e.transform(u,s):u);s===`__parsed_extra`?(r[s]=r[s]||[],r[s].push(u)):r[s]=u}return e.header&&(i>_.length?w(`FieldMismatch`,`TooManyFields`,`Too many fields: expected `+_.length+` fields but parsed `+i,f+n):i<_.length&&w(`FieldMismatch`,`TooFewFields`,`Too few fields: expected `+_.length+` fields but parsed `+i,f+n)),r}var i;v&&(e.header||e.dynamicTyping||e.transform)&&(i=1,!v.data.length||Array.isArray(v.data[0])?(v.data=v.data.map(n),i=v.data.length):v.data=n(v.data,0),e.header&&v.meta&&(v.meta.fields=_),f+=i)}function C(){return e.header&&_.length===0}function w(e,t,n,r){e={type:e,code:t,message:n},r!==void 0&&(e.row=r),v.errors.push(e)}x(e.step)&&(i=e.step,e.step=function(t){v=t,C()?S():(S(),v.data.length!==0&&(d+=t.data.length,e.preview&&d>e.preview?n.abort():(v.data=v.data[0],i(v,u))))}),this.parse=function(i,a,o){var c=e.quoteChar||`"`,c=(e.newline||=this.guessLineEndings(i,c),r=!1,e.delimiter?x(e.delimiter)&&(e.delimiter=e.delimiter(i),v.meta.delimiter=e.delimiter):((c=((t,n,r,i,a)=>{var o,c,l,u;a||=[`,`,`	`,`|`,`;`,s.RECORD_SEP,s.UNIT_SEP];for(var d=0;d<a.length;d++){for(var f,p=a[d],m=0,g=0,_=0,v=(l=void 0,new h({comments:i,delimiter:p,newline:n,preview:10}).parse(t)),y=0;y<v.data.length;y++)r&&b(v.data[y])?_++:(f=v.data[y].length,g+=f,l===void 0?l=f:0<f&&(m+=Math.abs(f-l),l=f));0<v.data.length&&(g/=v.data.length-_),(c===void 0||m<=c)&&(u===void 0||u<g)&&1.99<g&&(c=m,o=p,u=g)}return{successful:!!(e.delimiter=o),bestDelimiter:o}})(i,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess)).successful?e.delimiter=c.bestDelimiter:(r=!0,e.delimiter=s.DefaultDelimiter),v.meta.delimiter=e.delimiter),y(e));return e.preview&&e.header&&c.preview++,t=i,n=new h(c),v=n.parse(t,a,o),S(),p?{meta:{paused:!0}}:v||{meta:{paused:!1}}},this.paused=function(){return p},this.pause=function(){p=!0,n.abort(),t=x(e.chunk)?``:t.substring(n.getCharIndex())},this.resume=function(){u.streamer._halted?(p=!1,u.streamer.parseChunk(t,!0)):setTimeout(u.resume,3)},this.aborted=function(){return g},this.abort=function(){g=!0,n.abort(),v.meta.aborted=!0,x(e.complete)&&e.complete(v),t=``},this.guessLineEndings=function(e,t){e=e.substring(0,1048576);var t=RegExp(m(t)+`([^]*?)`+m(t),`gm`),n=(e=e.replace(t,``)).split(`\r`),t=e.split(`
`),e=1<t.length&&t[0].length<n[0].length;if(n.length===1||e)return`
`;for(var r=0,i=0;i<n.length;i++)n[i][0]===`
`&&r++;return r>=n.length/2?`\r
`:`\r`}}function m(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function h(e){var t=(e||={}).delimiter,n=e.newline,r=e.comments,i=e.step,a=e.preview,o=e.fastMode,c=null,l=!1,u=e.quoteChar==null?`"`:e.quoteChar,d=u;if(e.escapeChar!==void 0&&(d=e.escapeChar),(typeof t!=`string`||-1<s.BAD_DELIMITERS.indexOf(t))&&(t=`,`),r===t)throw Error(`Comment character same as delimiter`);!0===r?r=`#`:(typeof r!=`string`||-1<s.BAD_DELIMITERS.indexOf(r))&&(r=!1),n!==`
`&&n!==`\r`&&n!==`\r
`&&(n=`
`);var f=0,p=!1;this.parse=function(s,h,g){if(typeof s!=`string`)throw Error(`Input must be a string`);var _=s.length,v=t.length,y=n.length,b=r.length,S=x(i),C=[],w=[],T=[],E=f=0;if(!s)return j();if(o||!1!==o&&s.indexOf(u)===-1){for(var D=s.split(n),ee=0;ee<D.length;ee++){if(T=D[ee],f+=T.length,ee!==D.length-1)f+=n.length;else if(g)return j();if(!r||T.substring(0,b)!==r){if(S){if(C=[],re(T.split(t)),se(),p)return j()}else re(T.split(t));if(a&&a<=ee)return C=C.slice(0,a),j(!0)}}return j()}for(var O=s.indexOf(t,f),k=s.indexOf(n,f),te=new RegExp(m(d)+m(u),`g`),A=s.indexOf(u,f);;)if(s[f]===u)for(A=f,f++;;){if((A=s.indexOf(u,A+1))===-1)return g||w.push({type:`Quotes`,code:`MissingQuotes`,message:`Quoted field unterminated`,row:C.length,index:f}),ae();if(A===_-1)return ae(s.substring(f,A).replace(te,u));if(u===d&&s[A+1]===d)A++;else if(u===d||A===0||s[A-1]!==d){O!==-1&&O<A+1&&(O=s.indexOf(t,A+1));var ne=ie((k=k!==-1&&k<A+1?s.indexOf(n,A+1):k)===-1?O:Math.min(O,k));if(s.substr(A+1+ne,v)===t){T.push(s.substring(f,A).replace(te,u)),s[f=A+1+ne+v]!==u&&(A=s.indexOf(u,f)),O=s.indexOf(t,f),k=s.indexOf(n,f);break}if(ne=ie(k),s.substring(A+1+ne,A+1+ne+y)===n){if(T.push(s.substring(f,A).replace(te,u)),oe(A+1+ne+y),O=s.indexOf(t,f),A=s.indexOf(u,f),S&&(se(),p))return j();if(a&&C.length>=a)return j(!0);break}w.push({type:`Quotes`,code:`InvalidQuotes`,message:`Trailing quote on quoted field is malformed`,row:C.length,index:f}),A++}}else if(r&&T.length===0&&s.substring(f,f+b)===r){if(k===-1)return j();f=k+y,k=s.indexOf(n,f),O=s.indexOf(t,f)}else if(O!==-1&&(O<k||k===-1))T.push(s.substring(f,O)),f=O+v,O=s.indexOf(t,f);else{if(k===-1)break;if(T.push(s.substring(f,k)),oe(k+y),S&&(se(),p))return j();if(a&&C.length>=a)return j(!0)}return ae();function re(e){C.push(e),E=f}function ie(e){var t=0;return t=e!==-1&&(e=s.substring(A+1,e))&&e.trim()===``?e.length:t}function ae(e){return g||(e===void 0&&(e=s.substring(f)),T.push(e),f=_,re(T),S&&se()),j()}function oe(e){f=e,re(T),T=[],k=s.indexOf(n,f)}function j(r){if(e.header&&!h&&C.length&&!l){var i=C[0],a=Object.create(null),o=new Set(i);let t=!1;for(let n=0;n<i.length;n++){let r=i[n];if(a[r=x(e.transformHeader)?e.transformHeader(r,n):r]){let e,s=a[r];for(;e=r+`_`+s,s++,o.has(e););o.add(e),i[n]=e,a[r]++,t=!0,(c=c===null?{}:c)[e]=r}else a[r]=1,i[n]=r;o.add(r)}t&&console.warn(`Duplicate headers found and renamed.`),l=!0}return{data:C,errors:w,meta:{delimiter:t,linebreak:n,aborted:p,truncated:!!r,cursor:E+(h||0),renamedHeaders:c}}}function se(){i(j()),C=[],w=[]}},this.abort=function(){p=!0},this.getCharIndex=function(){return f}}function g(e){var t=e.data,n=a[t.workerId],r=!1;if(t.error)n.userError(t.error,t.file);else if(t.results&&t.results.data){var i={abort:function(){r=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v};if(x(n.userStep)){for(var o=0;o<t.results.data.length&&(n.userStep({data:t.results.data[o],errors:t.results.errors,meta:t.results.meta},i),!r);o++);delete t.results}else x(n.userChunk)&&(n.userChunk(t.results,i,t.file),delete t.results)}t.finished&&!r&&_(t.workerId,t.results)}function _(e,t){var n=a[e];x(n.userComplete)&&n.userComplete(t),n.terminate(),delete a[e]}function v(){throw Error(`Not implemented.`)}function y(e){if(typeof e!=`object`||!e)return e;var t,n=Array.isArray(e)?[]:{};for(t in e)n[t]=y(e[t]);return n}function b(e,t){return function(){e.apply(t,arguments)}}function x(e){return typeof e==`function`}return s.parse=function(n,r){var i=(r||={}).dynamicTyping||!1;if(x(i)&&(r.dynamicTypingFunction=i,i={}),r.dynamicTyping=i,r.transform=!!x(r.transform)&&r.transform,!r.worker||!s.WORKERS_SUPPORTED)return i=null,s.NODE_STREAM_INPUT,typeof n==`string`?(n=(e=>e.charCodeAt(0)===65279?e.slice(1):e)(n),i=new(r.download?l:d)(r)):!0===n.readable&&x(n.read)&&x(n.on)?i=new f(r):(t.File&&n instanceof File||n instanceof Object)&&(i=new u(r)),i.stream(n);(i=(()=>{var n;return!!s.WORKERS_SUPPORTED&&(n=(()=>{var n=t.URL||t.webkitURL||null,r=e.toString();return s.BLOB_URL||=n.createObjectURL(new Blob([`var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; `,`(`,r,`)();`],{type:`text/javascript`}))})(),(n=new t.Worker(n)).onmessage=g,n.id=o++,a[n.id]=n)})()).userStep=r.step,i.userChunk=r.chunk,i.userComplete=r.complete,i.userError=r.error,r.step=x(r.step),r.chunk=x(r.chunk),r.complete=x(r.complete),r.error=x(r.error),delete r.worker,i.postMessage({input:n,config:r,workerId:i.id})},s.unparse=function(e,t){var n=!1,r=!0,i=`,`,a=`\r
`,o=`"`,c=o+o,l=!1,u=null,d=!1,f=((()=>{if(typeof t==`object`){if(typeof t.delimiter!=`string`||s.BAD_DELIMITERS.filter(function(e){return t.delimiter.indexOf(e)!==-1}).length||(i=t.delimiter),typeof t.quotes!=`boolean`&&typeof t.quotes!=`function`&&!Array.isArray(t.quotes)||(n=t.quotes),typeof t.skipEmptyLines!=`boolean`&&typeof t.skipEmptyLines!=`string`||(l=t.skipEmptyLines),typeof t.newline==`string`&&(a=t.newline),typeof t.quoteChar==`string`&&(o=t.quoteChar),typeof t.header==`boolean`&&(r=t.header),Array.isArray(t.columns)){if(t.columns.length===0)throw Error(`Option columns is empty`);u=t.columns}t.escapeChar!==void 0&&(c=t.escapeChar+o),t.escapeFormulae instanceof RegExp?d=t.escapeFormulae:typeof t.escapeFormulae==`boolean`&&t.escapeFormulae&&(d=/^[=+\-@\t\r].*$/)}})(),new RegExp(m(o),`g`));if(typeof e==`string`&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return p(null,e,l);if(typeof e[0]==`object`)return p(u||Object.keys(e[0]),e,l)}else if(typeof e==`object`)return typeof e.data==`string`&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||=e.meta&&e.meta.fields||u,e.fields||=Array.isArray(e.data[0])?e.fields:typeof e.data[0]==`object`?Object.keys(e.data[0]):[],Array.isArray(e.data[0])||typeof e.data[0]==`object`||(e.data=[e.data])),p(e.fields||[],e.data||[],l);throw Error(`Unable to serialize unrecognized input`);function p(e,t,n){var o=``,s=(typeof e==`string`&&(e=JSON.parse(e)),typeof t==`string`&&(t=JSON.parse(t)),Array.isArray(e)&&0<e.length),c=!Array.isArray(t[0]);if(s&&r){for(var l=0;l<e.length;l++)0<l&&(o+=i),o+=h(e[l],l);0<t.length&&(o+=a)}for(var u=0;u<t.length;u++){var d=(s?e:t[u]).length,f=!1,p=s?Object.keys(t[u]).length===0:t[u].length===0;if(n&&!s&&(f=n===`greedy`?t[u].join(``).trim()===``:t[u].length===1&&t[u][0].length===0),n===`greedy`&&s){for(var m=[],g=0;g<d;g++){var _=c?e[g]:g;m.push(t[u][_])}f=m.join(``).trim()===``}if(!f){for(var v=0;v<d;v++){0<v&&!p&&(o+=i);var y=s&&c?e[v]:v;o+=h(t[u][y],v)}u<t.length-1&&(!n||0<d&&!p)&&(o+=a)}}return o}function h(e,t){var r,a;return e==null?``:e.constructor===Date?JSON.stringify(e).slice(1,25):(a=!1,d&&typeof e==`string`&&d.test(e)&&(e=`'`+e,a=!0),r=e.toString().replace(f,c),(a=a||!0===n||typeof n==`function`&&n(e,t)||Array.isArray(n)&&n[t]||((e,t)=>{for(var n=0;n<t.length;n++)if(-1<e.indexOf(t[n]))return!0;return!1})(r,s.BAD_DELIMITERS)||-1<r.indexOf(i)||r.charAt(0)===` `||r.charAt(r.length-1)===` `)?o+r+o:r)}},s.RECORD_SEP=``,s.UNIT_SEP=``,s.BYTE_ORDER_MARK=`﻿`,s.BAD_DELIMITERS=[`\r`,`
`,`"`,s.BYTE_ORDER_MARK],s.WORKERS_SUPPORTED=!r&&!!t.Worker,s.NODE_STREAM_INPUT=1,s.LocalChunkSize=10485760,s.RemoteChunkSize=5242880,s.DefaultDelimiter=`,`,s.Parser=h,s.ParserHandle=p,s.NetworkStreamer=l,s.FileStreamer=u,s.StringStreamer=d,s.ReadableStreamStreamer=f,t.jQuery&&((n=t.jQuery).fn.parse=function(e){var r=e.config||{},i=[];return this.each(function(e){if(!(n(this).prop(`tagName`).toUpperCase()===`INPUT`&&n(this).attr(`type`).toLowerCase()===`file`&&t.FileReader)||!this.files||this.files.length===0)return!0;for(var a=0;a<this.files.length;a++)i.push({file:this.files[a],inputElem:this,instanceConfig:n.extend({},r)})}),a(),this;function a(){if(i.length===0)x(e.complete)&&e.complete();else{var t,r,a,c,l=i[0];if(x(e.before)){var u=e.before(l.file,l.inputElem);if(typeof u==`object`){if(u.action===`abort`)return t=`AbortError`,r=l.file,a=l.inputElem,c=u.reason,void(x(e.error)&&e.error({name:t},r,a,c));if(u.action===`skip`)return void o();typeof u.config==`object`&&(l.instanceConfig=n.extend(l.instanceConfig,u.config))}else if(u===`skip`)return void o()}var d=l.instanceConfig.complete;l.instanceConfig.complete=function(e){x(d)&&d(e,l.file,l.inputElem),o()},s.parse(l.file,l.instanceConfig)}}function o(){i.splice(0,1),a()}}),i&&(t.onmessage=function(e){e=e.data,s.WORKER_ID===void 0&&e&&(s.WORKER_ID=e.workerId),typeof e.input==`string`?t.postMessage({workerId:s.WORKER_ID,results:s.parse(e.input,e.config),finished:!0}):(t.File&&e.input instanceof File||e.input instanceof Object)&&(e=s.parse(e.input,e.config))&&t.postMessage({workerId:s.WORKER_ID,results:e,finished:!0})}),(l.prototype=Object.create(c.prototype)).constructor=l,(u.prototype=Object.create(c.prototype)).constructor=u,(d.prototype=Object.create(d.prototype)).constructor=d,(f.prototype=Object.create(c.prototype)).constructor=f,s})}))(),1);function Ks(e){let t=Gs.default.parse(e,{header:!1});if(t.errors.length>0)throw new P(`Runtime`,`Error(s) parsing CSV files:\n${t.errors.map(e=>`${e.type} (row ${e.row}): ${e.message}`).join(`
`)}`);return V(t.data.map(V))}function qs(e){return V(Array.from(e).map(e=>Se(e)))}function Js(e){return V(e.split(/\r?\n/g))}var Ys=class{data;constructor(){this.data=[]}update(e,t,n){for(let n of this.data)if(Kt(n.key,e)){n.value=t(n.value);return}this.data.push({key:e,value:n})}};function Xs(e){let t=new Ys,n=e;for(;n!==null;){let e=n.head;t.update(e,e=>e+1,1),n=n.tail}return V(t.data.map(e=>ft(e.key,e.value)))}var Zs=t({data_datasetBar:()=>cn,data_datasetBubble:()=>Ut,data_datasetLine:()=>Bt,data_datasetPie:()=>vt,data_datasetPolar:()=>Bn,data_datasetQ:()=>Xn,data_datasetRadar:()=>Tt,data_datasetScatter:()=>qn,data_parseCsv:()=>Ks,data_plotCategory:()=>He,data_plotLinear:()=>m,data_plotQ:()=>Wn,data_plotRadial:()=>Ke,data_stringToChars:()=>qs,data_stringToLines:()=>Js,data_tallyAll:()=>Xs,data_withDatasetOptions:()=>x,data_withPlotOptions:()=>v}),Qs=t({file_fileExistsQ:()=>nc,file_fileToLines:()=>ic,file_fileToString:()=>rc,file_linesToFile:()=>oc,file_stringToFile:()=>ac});async function $s(e){let{getFS:t}=await ir(async()=>{let{getFS:e}=await import(`./fs-42.1.1.js`);return{getFS:e}},__vite__mapDeps([0,1,2])),n=t();if(!await n.fileExists(e))throw new P(`Runtime`,`File "${e}" does not exist`);try{return await n.loadFile(e)}catch(t){throw t instanceof P?t:new P(`Runtime`,`Could not read the file "${e}"`)}}async function ec(e,t){let{getFS:n}=await ir(async()=>{let{getFS:e}=await import(`./fs-42.1.1.js`);return{getFS:e}},__vite__mapDeps([0,1,2]));try{await n().saveFile(e,t)}catch(t){throw t instanceof P?t:new P(`Runtime`,`Could not write to the file "${e}"`)}}function tc(e){let t=e.split(/\r?\n/g);return t[t.length-1]===``&&t.pop(),t}function nc(e){throw new bn(async()=>{let{getFS:t}=await ir(async()=>{let{getFS:e}=await import(`./fs-42.1.1.js`);return{getFS:e}},__vite__mapDeps([0,1,2]));return t().fileExists(e)})}function rc(e){throw new bn(async()=>$s(e))}function ic(e){throw new bn(async()=>V(tc(await $s(e))))}function ac(e,t){throw new bn(async()=>{await ec(t,e)})}function oc(e,t){throw new bn(async()=>{let n=an(e).map(e=>{if(typeof e!=`string`)throw new P(`Runtime`,`lines->file: expected a list of strings, but the list contains ${I(e)}`);return e});await ec(t,n.length===0?``:`${n.join(`
`)}\n`)})}var sc=t({html_button:()=>pc,html_buttonQ:()=>uc,html_isElement:()=>cc,html_onKeydown:()=>gc,html_tag:()=>mc,html_tagSetChildren:()=>hc,html_textArea:()=>dc,html_textAreaGet:()=>fc,html_textAreaQ:()=>lc});function cc(e){return e instanceof HTMLElement}function lc(e){return e instanceof HTMLTextAreaElement}function uc(e){return e instanceof HTMLButtonElement}function dc(e){let t=document.createElement(`textarea`);return t.id=e,t}function fc(e){return e.textContent}function pc(e,t){let n=document.createElement(`button`);n.textContent=e;let r=B();return n.addEventListener(`click`,()=>{r.spawn(t,[])},{signal:r.signal}),n}function mc(e,...t){let n=document.createElement(e);if(t.length>0&&g(t[0])){let e=an(t[0]);for(let t of e)if(Je(t)){let e=t;if(!C(e.fst))throw new P(`Runtime`,`attribute must be a string: ${Ot(e.fst)}`);if(C(e.snd))n.setAttribute(e.fst,e.snd);else throw new P(`Runtime`,`attribute value must be a string: ${Ot(e.snd)}`)}t=t.slice(1)}for(let e of t)e instanceof HTMLElement?n.appendChild(e):n.textContent=e;return n}function hc(e,...t){if(e instanceof HTMLElement){t.forEach((t,n)=>{if(!(t instanceof HTMLElement))throw new P(`Runtime`,`tag-set-children! expects all children to be HTML elements, but position ${n} is a ${I(e)}$.`)}),e.replaceChildren(t),e.textContent=``;for(let n of t)e.appendChild(n)}else throw new P(`Runtime`,`tag-set-children! expects an HTML element, but received ${I(e)}`)}function gc(e){let t=B();window.addEventListener(`keydown`,n=>{t.spawn(e,[n.key])},{signal:t.signal})}var _c=t({color_allColorNames:()=>$n,color_colorNameToRgb:()=>Dt,color_colorQ:()=>Yn,color_colorToRgb:()=>Ge,color_findColors:()=>_,color_hsv:()=>Kn,color_hsvAlpha:()=>Ye,color_hsvComplement:()=>w,color_hsvHue:()=>b,color_hsvSaturation:()=>Ae,color_hsvToRgb:()=>on,color_hsvToString:()=>l,color_hsvValue:()=>tn,color_isColorName:()=>Ce,color_isHsv:()=>De,color_isRgb:()=>Pe,color_isRgbComponent:()=>ee,color_rgb:()=>ce,color_rgbAdd:()=>be,color_rgbAlpha:()=>Ve,color_rgbAverage:()=>rr,color_rgbBlue:()=>p,color_rgbBluer:()=>rt,color_rgbDarker:()=>ae,color_rgbDistance:()=>$e,color_rgbGreen:()=>st,color_rgbGreener:()=>A,color_rgbGreyscale:()=>ge,color_rgbHue:()=>wn,color_rgbLighter:()=>fe,color_rgbPhaseshift:()=>pt,color_rgbPseudoComplement:()=>ut,color_rgbRed:()=>_t,color_rgbRedder:()=>Le,color_rgbRotateComponents:()=>a,color_rgbSaturation:()=>Pt,color_rgbSubtract:()=>In,color_rgbThicken:()=>fn,color_rgbThin:()=>Dn,color_rgbToHsv:()=>Xt,color_rgbToString:()=>Ct,color_rgbValue:()=>hn,drawing_above:()=>Oe,drawing_aboveAlign:()=>nn,drawing_beside:()=>o,drawing_besideAlign:()=>$t,drawing_canvasAriaLabel:()=>xe,drawing_circle:()=>we,drawing_clearDrawing:()=>je,drawing_drawingColor:()=>T,drawing_drawingHeight:()=>oe,drawing_drawingQ:()=>_e,drawing_drawingRecolor:()=>Re,drawing_drawingToCanvas:()=>er,drawing_drawingToPixels:()=>u,drawing_drawingWidth:()=>et,drawing_ellipse:()=>ne,drawing_fillModeQ:()=>Xe,drawing_isoscelesTriangle:()=>it,drawing_outlinedCircle:()=>O,drawing_outlinedEllipse:()=>pe,drawing_outlinedIsoscelesTriangle:()=>Sn,drawing_outlinedRectangle:()=>le,drawing_outlinedSquare:()=>dt,drawing_outlinedTriangle:()=>ct,drawing_overlay:()=>mt,drawing_overlayAlign:()=>Fe,drawing_overlayOffset:()=>r,drawing_path:()=>Ft,drawing_rectangle:()=>Ln,drawing_render:()=>pn,drawing_renderer:()=>On,drawing_rotate:()=>Qt,drawing_solidCircle:()=>wt,drawing_solidEllipse:()=>_n,drawing_solidIsoscelesTriangle:()=>Nn,drawing_solidRectangle:()=>kt,drawing_solidSquare:()=>sn,drawing_solidTriangle:()=>zn,drawing_square:()=>Mt,drawing_text:()=>zt,drawing_triangle:()=>xn,drawing_withDash:()=>ln,font_font:()=>Ht,font_fontQ:()=>xt,font_fontToFontString:()=>Un,image_blockOnFetchImage:()=>At,image_isReactiveImageFile:()=>It,image_withImageFile:()=>vn}),vc=t({lab_description:()=>Sc,lab_part:()=>bc,lab_problem:()=>xc,lab_title:()=>yc});function yc(e){let t=document.createElement(`h1`);return t.innerText=e,t}function bc(e){let t=document.createElement(`h2`);return t.innerText=e,t}function xc(e){let t=document.createElement(`h3`);return t.innerText=e,t}function Sc(e){let t=document.createElement(`p`),n=document.createElement(`em`);return n.innerText=e,t.appendChild(n),t}function Cc(e){throw new bn(async()=>{let{getFS:t}=await ir(async()=>{let{getFS:e}=await import(`./fs-42.1.1.js`);return{getFS:e}},__vite__mapDeps([0,1,2])),n=t();if(!await n.fileExists(e))throw new P(`Runtime`,`File "${e}" does not exist`);return n.loadFile(e)})}function wc(e){return{[z]:`struct`,[R]:`reactive-file-chooser`,callback:e,[Zt]:B()}}var Tc=t({prelude_abs:()=>Xc,prelude_acos:()=>hl,prelude_append:()=>Il,prelude_apply:()=>Dc,prelude_asin:()=>ml,prelude_assocKey:()=>Ul,prelude_assocRef:()=>Wl,prelude_assocSet:()=>Gl,prelude_atan:()=>gl,prelude_blockOnReadFile:()=>Cc,prelude_booleanQ:()=>yl,prelude_car:()=>Dl,prelude_cdr:()=>Ol,prelude_ceiling:()=>tl,prelude_charCompareFns:()=>Jl,prelude_charDowncase:()=>nu,prelude_charFoldcase:()=>ru,prelude_charPredicateFns:()=>Xl,prelude_charQ:()=>Kl,prelude_charToInteger:()=>$l,prelude_charUpcase:()=>tu,prelude_cons:()=>Tl,prelude_cos:()=>fl,prelude_deref:()=>Wu,prelude_digitalValue:()=>Ql,prelude_div:()=>Yc,prelude_elseConst:()=>!0,prelude_eq:()=>Rc,prelude_equalQ:()=>kc,prelude_equalsEps:()=>_l,prelude_error:()=>Ec,prelude_evenQ:()=>Uc,prelude_exp:()=>ll,prelude_expt:()=>ol,prelude_floor:()=>el,prelude_geq:()=>Lc,prelude_gt:()=>Ic,prelude_hashCount:()=>ed,prelude_hashHasKeyQ:()=>Xu,prelude_hashKeys:()=>td,prelude_hashQ:()=>qu,prelude_hashRef:()=>Ju,prelude_hashRefOr:()=>Yu,prelude_hashRemove:()=>$u,prelude_hashSet:()=>Zu,prelude_hashSetBang:()=>Qu,prelude_hashToList:()=>rd,prelude_hashValues:()=>nd,prelude_ignore:()=>zu,prelude_implies:()=>Sl,prelude_indexOf:()=>Hl,prelude_integerQ:()=>Mc,prelude_integerToChar:()=>eu,prelude_isRef:()=>Uu,prelude_length:()=>Pl,prelude_leq:()=>Fc,prelude_list:()=>Ml,prelude_listDrop:()=>Bl,prelude_listQ:()=>Al,prelude_listRef:()=>Vl,prelude_listTail:()=>Rl,prelude_listTake:()=>zl,prelude_listToHash:()=>id,prelude_listToString:()=>_u,prelude_listToVector:()=>ju,prelude_log:()=>ul,prelude_lt:()=>Pc,prelude_makeList:()=>Nl,prelude_makeString:()=>au,prelude_makeVector:()=>Tu,prelude_max:()=>Wc,prelude_min:()=>Gc,prelude_minus:()=>qc,prelude_modulo:()=>$c,prelude_nanQ:()=>Nc,prelude_nand:()=>bl,prelude_negativeQ:()=>Vc,prelude_nonemptyListQ:()=>jl,prelude_nor:()=>xl,prelude_not:()=>vl,prelude_nullConst:()=>null,prelude_nullQ:()=>kl,prelude_numberQ:()=>Ac,prelude_numberToString:()=>sl,prelude_oddQ:()=>Hc,prelude_pair:()=>El,prelude_pairQ:()=>wl,prelude_piConst:()=>ad,prelude_plus:()=>Kc,prelude_positiveQ:()=>Bc,prelude_procedureQ:()=>Pu,prelude_qq:()=>Iu,prelude_quotient:()=>Zc,prelude_random:()=>Ru,prelude_range:()=>Lu,prelude_realQ:()=>jc,prelude_ref:()=>Hu,prelude_refSet:()=>Gu,prelude_remainder:()=>Qc,prelude_reverse:()=>Ll,prelude_round:()=>rl,prelude_setMaximumRecursionDepth:()=>Bu,prelude_sin:()=>dl,prelude_sqrt:()=>al,prelude_square:()=>il,prelude_string:()=>ou,prelude_stringAppend:()=>hu,prelude_stringCompareFns:()=>lu,prelude_stringContains:()=>bu,prelude_stringDowncase:()=>fu,prelude_stringFoldcase:()=>pu,prelude_stringLength:()=>su,prelude_stringQ:()=>iu,prelude_stringRef:()=>cu,prelude_stringSplit:()=>xu,prelude_stringSplitVector:()=>Su,prelude_stringToList:()=>gu,prelude_stringToNumber:()=>cl,prelude_stringToVector:()=>vu,prelude_stringToWords:()=>Vu,prelude_stringUpcase:()=>du,prelude_substring:()=>mu,prelude_tan:()=>pl,prelude_times:()=>Jc,prelude_truncate:()=>nl,prelude_vector:()=>wu,prelude_vectorAppend:()=>Nu,prelude_vectorFill:()=>ku,prelude_vectorLength:()=>Eu,prelude_vectorQ:()=>Cu,prelude_vectorRange:()=>Mu,prelude_vectorRef:()=>Du,prelude_vectorSet:()=>Ou,prelude_vectorToList:()=>Au,prelude_vectorToString:()=>yu,prelude_voidConst:()=>void 0,prelude_voidQ:()=>Fu,prelude_withFileChooser:()=>wc,prelude_withHandler:()=>Oc,prelude_xor:()=>Cl,prelude_zeroQ:()=>zc}),Ec=dn(`error`,e=>{throw typeof e==`string`?new P(`Runtime`,e,void 0,void 0,`error`):new P(`Runtime`,`expected a string, received ${I(e)}`,void 0,void 0,`error`)}),Dc=Ee([`f`,`args`],[Fn(`f`),Fn(`args`),en()],[],()=>{throw new L(`prelude_apply`,`apply closure.call must never be invoked`)},`apply`,void 0,!0),Oc=Ee([`handler`,`thunk`],[Fn(`handler`),Fn(`thunk`),Ie(),c(0),lt()],[],()=>{throw new L(`prelude_withHandler`,`closure.call must never be invoked`)},`with-handler`,void 0,!0);function kc(e,t){return Kt(e,t)}function Ac(e){return typeof e==`number`}function jc(e){return typeof e==`number`&&Number.isFinite(e)}function Mc(e){return typeof e==`number`&&Number.isInteger(e)}function Nc(e){return Number.isNaN(e)}function Pc(e,t){return e<t}function Fc(e,t){return e<=t}function Ic(e,t){return e>t}function Lc(e,t){return e>=t}function Rc(e,t){return e===t}function zc(e){return e===0}function Bc(e){return e>0}function Vc(e){return e<0}function Hc(e){return(e&1)==1}function Uc(e){return(e&1)!=1}function Wc(...e){return Math.max(...e)}function Gc(...e){return Math.min(...e)}function Kc(...e){return e.reduce((e,t)=>e+t,0)}function qc(...e){return e.length===1?-e[0]:e.reduce((e,t)=>e-t)}function Jc(...e){return e.reduce((e,t)=>e*t,1)}function Yc(...e){let t=(e,t)=>{if(t===0)throw new P(`Runtime`,`/: division by zero`);return e/t};return e.length===1?t(1,e[0]):e.reduce(t)}function Xc(e){return Math.abs(e)}function Zc(e,t){if(t===0)throw new P(`Runtime`,`quotient: division by zero`);return Math.trunc(e/t)}function Qc(e,t){if(t===0)throw new P(`Runtime`,`remainder: division by zero`);return e%t}function $c(e,t){if(t===0)throw new P(`Runtime`,`modulo: division by zero`);return(e%t+t)%t}function el(e){return Math.floor(e)}function tl(e){return Math.ceil(e)}function nl(e){return Math.trunc(e)}function rl(e){return Math.round(e)}function il(e){return e*e}function al(e){return Math.sqrt(e)}function ol(e,t){return e**+t}function sl(e){return e.toString()}function cl(e){return/^[+-]?\d+$/.test(e)?parseInt(e):/^[+-]?(\d+|(\d*\.\d+)|(\d+\.\d*))([eE][+-]?\d+)?$/.test(e)?parseFloat(e):!1}function ll(e){return Math.exp(e)}function ul(e){return Math.log(e)}function dl(e){return Math.sin(e)}function fl(e){return Math.cos(e)}function pl(e){return Math.tan(e)}function ml(e){return Math.asin(e)}function hl(e){return Math.acos(e)}function gl(e){return Math.atan(e)}function _l(e){let t=`=-(${e})`,n=function(t,n){return Math.abs(t-n)<=e};return dn(t,n),n}function vl(e){return!e}function yl(e){return typeof e==`boolean`}function bl(...e){return!e.reduce((e,t)=>e&&t,!0)}function xl(...e){return!e.reduce((e,t)=>e||t,!1)}function Sl(e,t){return!e||t}function Cl(e,t){return e&&!t||!e&&t}function wl(e){return Je(e)}function Tl(e,t){return D(e,t)}function El(e,t){return ft(e,t)}function Dl(e){if(Je(e))return e.fst;if(N(e,`cons`))return e.head;throw new P(`Runtime`,`car: expected a pair or a non-empty list`)}function Ol(e){if(Je(e))return e.snd;if(N(e,`cons`))return e.tail;throw new P(`Runtime`,`cdr: expected a pair or a non-empty list`)}function kl(e){return e===null}function Al(e){return g(e)}function jl(e){return Al(e)&&e!==null}function Ml(...e){let t=null;for(let n=e.length-1;n>=0;n--)t=D(e[n],t);return t}function Nl(e,t){let n=null;for(let r=0;r<e;r++)n=D(t,n);return n}function Pl(e){let t=0;for(;e!==null;)t+=1,e=e.tail;return t}function Fl(e,t){if(e===null)return t;{let n=D(e.head,null),r=n,i=e.tail;for(;i!==null;)r.tail=D(i.head,null),r=r.tail,i=i.tail;return r.tail=t,n}}function Il(e,...t){let n=e;for(let e of t)n=Fl(n,e);return n}function Ll(e){let t=[];for(;e!==null;)t.push(e),e=e.tail;t.reverse();let n=null;for(;t.length>0;)n=D(mn(t,`the list being built`).head,n);return n}function Rl(e,t){for(;e!==null&&t>0;)e=e.tail,--t;return e}function zl(e,t){let n=[];for(;e!==null&&t>0;)n.push(e.head),e=e.tail,--t;let r=null;for(let e=n.length-1;e>=0;e--)r=D(n[e],r);return r}function Bl(e,t){for(;e!==null&&t>0;)e=e.tail,--t;return e}function Vl(e,t){let n=t;for(;e!==null&&n>0;)e=e.tail,--n;if(e===null)throw new P(`Runtime`,`list-ref: index ${t} out of bounds of list`);return e.head}function Hl(e,t){let n=0;for(;t!==null;){if(Kt(t.head,e))return n;t=t.tail,n+=1}return-1}function Ul(e,t){for(;t!==null;){if(Kt(t.head.fst,e))return!0;t=t.tail}return!1}function Wl(e,t){for(;t!==null;){if(Kt(t.head.fst,e))return t.head.snd;t=t.tail}throw new P(`Runtime`,`assoc-ref: key ${Mn.render(e)} not found in association list`)}function Gl(e,t,n){let r=[];for(;n!==null;){let i=n.head;if(Kt(i.fst,e)){r.push(ft(e,t));let i=n.tail;for(let e=r.length-1;e>=0;e--)i=D(r[e],i);return i}else r.push(n.head),n=n.tail}return V(r.concat([ft(e,t)]))}function Kl(e){return Qn(e)}function ql(e,t){if(t.length<=1)return!0;for(let n=0;n<t.length-1;n++)if(!e(t[n],t[n+1]))return!1;return!0}var Jl={};function Yl(e,t){let n=function(...e){return ql((e,n)=>t(e.value,n.value),e)};dn(e,n),Jl[`prelude_${e}`]=n}Yl(`char=?`,(e,t)=>e===t),Yl(`char<?`,(e,t)=>e<t),Yl(`char>?`,(e,t)=>e>t),Yl(`char<=?`,(e,t)=>e<=t),Yl(`char>=?`,(e,t)=>e>=t),Yl(`char-ci=?`,(e,t)=>e.toLowerCase()===t.toLowerCase()),Yl(`char-ci<?`,(e,t)=>e.toLowerCase()<t.toLowerCase()),Yl(`char-ci>?`,(e,t)=>e.toLowerCase()>t.toLowerCase()),Yl(`char-ci<=?`,(e,t)=>e.toLowerCase()<=t.toLowerCase()),Yl(`char-ci>=?`,(e,t)=>e.toLowerCase()>=t.toLowerCase());var Xl={};function Zl(e,t){let n=function(e){return t(e.value)};dn(e,n),Xl[`prelude_${e}`]=n}Zl(`char-alphabetic?`,e=>/\p{L}/gu.test(e)),Zl(`char-numeric?`,e=>/\p{N}/gu.test(e)),Zl(`char-whitespace?`,e=>/\p{Z}/gu.test(e)),Zl(`char-upper-case?`,e=>/\p{Lu}/gu.test(e)),Zl(`char-lower-case?`,e=>/\p{Ll}/gu.test(e));function Ql(e){let t=parseInt(e.value,10);if(isNaN(t))throw new P(`Runtime`,`digit-value: ${e.value} is not a decimal digit`);return t}function $l(e){let t=e.value.codePointAt(0);if(t===void 0)throw new L(`prelude_charToInteger`,`a character with no code point`);return t}function eu(e){return Se(String.fromCodePoint(e))}function tu(e){return Se(e.value.toUpperCase())}function nu(e){return Se(e.value.toLowerCase())}function ru(e){return Se(e.value.toLowerCase())}function iu(e){return typeof e==`string`}function au(e,t){return t.value.repeat(e)}function ou(e,...t){return[e,...t].map(e=>e.value).join(``)}function su(e){return e.length}function cu(e,t){return Se(e[t])}var lu={};function uu(e,t){let n=function(...e){return ql((e,n)=>t(e,n),e)};dn(e,n),lu[`prelude_${e}`]=n}uu(`string=?`,(e,t)=>e===t),uu(`string<?`,(e,t)=>e<t),uu(`string>?`,(e,t)=>e>t),uu(`string<=?`,(e,t)=>e<=t),uu(`string>=?`,(e,t)=>e>=t),uu(`string-ci=?`,(e,t)=>e.toLowerCase()===t.toLowerCase()),uu(`string-ci<?`,(e,t)=>e.toLowerCase()<t.toLowerCase()),uu(`string-ci>?`,(e,t)=>e.toLowerCase()>t.toLowerCase()),uu(`string-ci<=?`,(e,t)=>e.toLowerCase()<=t.toLowerCase()),uu(`string-ci>=?`,(e,t)=>e.toLowerCase()>=t.toLowerCase());function du(e){return e.toUpperCase()}function fu(e){return e.toLowerCase()}function pu(e){return e.toLowerCase()}function mu(e,t,n){return e.substring(t,n)}function hu(...e){return e.join(``)}function gu(e){let t=null;for(let n=e.length-1;n>=0;n--)t=D(Se(e[n]),t);return t}function _u(e){let t=``;for(;e!==null;){if(!Qn(e.head))throw new P(`Runtime`,`list->string: list contains non-character element: ${I(e.head)}`);t+=e.head.value,e=e.tail}return t}function vu(e){let t=[];for(let n=0;n<e.length;n++)t.push(Se(e[n]));return t}function yu(e){let t=``;for(let n of e)t+=n.value;return t}function bu(e,t){return e.includes(t)}function xu(e,t){let n=e.split(t),r=null;for(let e=n.length-1;e>=0;e--)r=D(n[e],r);return r}function Su(e,t){return e.split(t)}function Cu(e){return Hn(e)}function wu(...e){return e}function Tu(e,t){let n=[];for(let r=0;r<e;r++)n.push(t);return n}function Eu(e){return e.length}function Du(e,t){if(t<0||t>=e.length)throw new P(`Runtime`,`vector-ref: index ${t} out of bounds of vector`);return e[t]}function Ou(e,t,n){if(t<0||t>=e.length)throw new P(`Runtime`,`vector-set!: index ${t} out of bounds of vector`);e[t]=n}function ku(e,t){for(let n=0;n<e.length;n++)e[n]=t}function Au(e){let t=null;for(let n=e.length-1;n>=0;n--)t=D(e[n],t);return t}function ju(e){let t=[];for(;e!==null;)t.push(e.head),e=e.tail;return t}function Mu(...e){if(e.length===0||e.length>3)throw new P(`Runtime`,`1, 2, or 3 numbers must be passed to function`);{let t=e.length===1?0:e[0],n=e.length===1?e[0]:e[1],r=e.length<3?1:e[2],i=[];if(r===0)throw new P(`Runtime`,`"step" argument must be non-zero`);for(let e=t;r>0?e<n:e>n;e+=r)i.push(e);return i}}function Nu(...e){let t=[];for(let n of e)for(let e of n)t.push(e);return t}function Pu(e){return Et(e)||We(e)}function Fu(e){return e===void 0}function Iu(){throw new P(`Runtime`,`Hole encountered in program!`)}function Lu(...e){if(e.length===0||e.length>3)throw new P(`Runtime`,`1, 2, or 3 numbers must be passed to function`);{let t=e.length===1?0:e[0],n=e.length===1?e[0]:e[1],r=e.length<3?1:e[2],i=[];if(r===0)throw new P(`Runtime`,`"step" argument must be non-zero`);for(let e=t;r>0?e<n:e>n;e+=r)i.push(e);return V(i)}}function Ru(e){return Math.floor(Math.random()*e)}function zu(e){let t=document.createElement(`div`);return t.style.display=`non`,t}function Bu(e){return{[z]:`set-maximum-recursion-depth`,value:e}}function Vu(e){let t=e.split(/\s+/);for(let e=0;e<t.length;e++)t[e]=t[e].replace(/[.,;?:!]$/,``);return V(t.filter(e=>e.length>0))}function Hu(e){return{[z]:`struct`,[R]:`ref`,value:e}}function Uu(e){return N(e,`ref`)}function Wu(e){return e.value}function Gu(e,t){e.value=t}function Ku(e,t){if(typeof t!=`string`)throw new P(`Runtime`,`${e}: a map key must be a string, received ${I(t)}`);return t}function qu(e){return Gn(e)}function Ju(e,t){let n=Ku(`hash-ref`,t);if(!Object.prototype.hasOwnProperty.call(e,n))throw new P(`Runtime`,`hash-ref: no value for key "${n}"`);return e[n]}function Yu(e,t,n){let r=Ku(`hash-ref-or`,t);return Object.prototype.hasOwnProperty.call(e,r)?e[r]:n}function Xu(e,t){return Object.prototype.hasOwnProperty.call(e,Ku(`hash-has-key?`,t))}function Zu(e,t,n){return{...e,[Ku(`hash-set`,t)]:n}}function Qu(e,t,n){e[Ku(`hash-set!`,t)]=n}function $u(e,t){let n=Ku(`hash-remove`,t),r={};for(let t of Object.keys(e))t!==n&&(r[t]=e[t]);return r}function ed(e){return Object.keys(e).length}function td(e){return V(Object.keys(e))}function nd(e){return V(Object.keys(e).map(t=>e[t]))}function rd(e){return V(Object.keys(e).map(t=>ft(t,e[t])))}function id(e){let t={};for(let n of an(e)){if(!Je(n))throw new P(`Runtime`,`list->hash: expected a list of pairs, but the list contains ${I(n)}`);t[Ku(`list->hash`,n.fst)]=n.snd}return t}var ad=Math.PI,od=t({reactive_onButtonClick:()=>pd,reactive_onKeyDown:()=>gd,reactive_onKeyUp:()=>_d,reactive_onMouseClick:()=>md,reactive_onMouseHover:()=>hd,reactive_onNote:()=>yd,reactive_onTimer:()=>vd,reactive_reactiveCanvas:()=>ld,reactive_reactiveContainer:()=>dd,reactive_subscriptionQ:()=>sd});function sd(e){return N(e,`subscription`)}var cd=class{run=B();canvas;state;viewFunc;updateFunc;isDirty;finished;queue=[];updating=!1;drawing=!1;constructor(e,t,n,r,i){this.canvas=document.createElement(`canvas`),this.canvas.width=e,this.canvas.height=t,this.state=n,this.viewFunc=r,this.updateFunc=i,this.isDirty=!0,this.finished=!1,this.run.signal?.addEventListener(`abort`,()=>{this.finished=!0});let a=e=>{this.draw(),this.finished||requestAnimationFrame(a)};requestAnimationFrame(a)}getState(){return this.state}draw(){this.finished||this.drawing||!this.isDirty||(this.drawing=!0,this.isDirty=!1,qt(this.canvas).clearRect(0,0,this.canvas.width,this.canvas.height),this.run.spawn(this.viewFunc,[this.state,this.canvas],e=>{this.drawing=!1,e===null&&(this.finished=!0)}))}update(e){this.finished||(this.queue.push(e),this.processQueue())}processQueue(){if(this.updating||this.finished||this.queue.length===0)return;this.updating=!0;let e=An(this.queue,`the message queue`);this.run.spawn(this.updateFunc,[e,this.state],e=>{e===null?this.finished=!0:(this.state=e,this.isDirty=!0),this.updating=!1,this.processQueue()})}getElement(){return this.canvas}};function ld(e,t,n,r,i,...a){let o=new cd(e,t,n,r,i);return a.forEach(e=>{e.register(o)}),o.getElement()}var ud=class{run=B();container;state;viewFunc;updateFunc;finished;queue=[];processing=!1;constructor(e,t,n){this.container=document.createElement(`div`),this.state=e,this.viewFunc=t,this.updateFunc=n,this.finished=!1,this.run.signal?.addEventListener(`abort`,()=>{this.finished=!0})}renderView(e){this.run.spawn(this.viewFunc,[this.state],t=>{t instanceof HTMLElement&&(this.container.innerHTML=``,this.container.appendChild(t)),e?.()})}draw(){this.renderView()}update(e){this.finished||(this.queue.push(e),this.processQueue())}processQueue(){if(this.processing||this.finished||this.queue.length===0)return;this.processing=!0;let e=An(this.queue,`the message queue`);this.run.spawn(this.updateFunc,[e,this.state],e=>{if(e===null){this.finished=!0,this.processing=!1;return}this.state=e,this.renderView(()=>{this.processing=!1,this.processQueue()})})}getElement(){return this.container}};function dd(e,t,n,...r){let i=new ud(e,t,n);return r.forEach(e=>{e.register(i)}),i.draw(),i.getElement()}function fd(e){return{[z]:`struct`,[R]:`subscription`,register:e}}function pd(e){let t=B();return fd(n=>{e.addEventListener(`click`,()=>{n.update({[z]:`struct`,[R]:`event-button-click`,id:e.id})},{signal:t.signal})})}function md(){let e=B();return fd(t=>{t.getElement().addEventListener(`click`,e=>{let n=t.getElement().getBoundingClientRect();t.update({[z]:`struct`,[R]:`event-mouse-click`,button:e.button,x:e.clientX-n.left,y:e.clientY-n.top})},{signal:e.signal})})}function hd(){let e=B();return fd(t=>{t.getElement().addEventListener(`mousemove`,e=>{let n=t.getElement().getBoundingClientRect();t.update({[z]:`struct`,[R]:`event-mouse-hover`,x:e.clientX-n.left,y:e.clientY-n.top})},{signal:e.signal})})}function gd(){let e=B();return fd(t=>{document.addEventListener(`keydown`,e=>{t.update({[z]:`struct`,[R]:`event-key-down`,key:e.key})},{signal:e.signal})})}function _d(){let e=B();return fd(t=>{document.addEventListener(`keyup`,e=>{t.update({[z]:`struct`,[R]:`event-key-up`,key:e.key})},{signal:e.signal})})}function vd(e){let t=B();return fd(n=>{let r=performance.now(),i=t.signal,a=setInterval(()=>{let e=performance.now();n.update({[z]:`struct`,[R]:`event-timer`,time:e,elapsed:e-r}),r=e},e);i?.addEventListener(`abort`,()=>{clearInterval(a)})})}function yd(e){return fd(t=>{e.push(e=>{t.update(e)})})}var bd=t({rex_isRegex:()=>Fd,rex_rexAnyChar:()=>Vd,rex_rexAnyOf:()=>Gd,rex_rexCharAntiset:()=>Ud,rex_rexCharRange:()=>Wd,rex_rexCharSet:()=>Hd,rex_rexConcat:()=>Bd,rex_rexEmpty:()=>Id,rex_rexFindMatches:()=>Jd,rex_rexMatches:()=>Yd,rex_rexOptional:()=>Kd,rex_rexRegex:()=>qd,rex_rexRepeat:()=>Rd,rex_rexRepeat0:()=>zd,rex_rexSplitString:()=>Xd,rex_rexString:()=>Ld,rex_rexToString:()=>Zd}),xd=RegExp(`(\\`+[`/`,`.`,`*`,`+`,`?`,`|`,`(`,`)`,`[`,`]`,`{`,`}`,`\\`].join(`|\\`)+`)`,`g`);function Sd(e){return e.replace(xd,`\\$1`)}var Cd=class{[z]=`struct`;[R]=`rex-empty`;toRegexString(){return``}},wd=class{[z]=`struct`;[R]=`rex-string`;value;constructor(e){this.value=e}toRegexString(){return Sd(this.value)}},Td=class{[z]=`struct`;[R]=`rex-repeat`;value;constructor(e){this.value=e}toRegexString(){return`(?:${this.value.toRegexString()})+`}},Ed=class{[z]=`struct`;[R]=`rex-repeat-0`;value;constructor(e){this.value=e}toRegexString(){return`(?:${this.value.toRegexString()})*`}},Dd=class{[z]=`struct`;[R]=`rex-concat`;values;constructor(e){this.values=e}toRegexString(){return this.values.map(e=>e.toRegexString()).join(``)}},Od=class{[z]=`struct`;[R]=`rex-any-char`;toRegexString(){return`.`}},kd=class{[z]=`struct`;[R]=`rex-char-set`;chars;constructor(e){this.chars=e}toRegexString(){return`[${Sd(this.chars)}]`}},Ad=class{[z]=`struct`;[R]=`rex-char-antiset`;chars;constructor(e){this.chars=e}toRegexString(){return`[^${Sd(this.chars)}]`}},jd=class{[z]=`struct`;[R]=`rex-char-range`;start;end;constructor(e,t){this.start=e,this.end=t}toRegexString(){return`[${Sd(this.start.value)}-${Sd(this.end.value)}]`}},Md=class{[z]=`struct`;[R]=`rex-any-of`;values;constructor(e){this.values=e}toRegexString(){return`(?:${this.values.map(e=>e.toRegexString()).join(`|`)})`}},Nd=class{[z]=`struct`;[R]=`rex-optional`;value;constructor(e){this.value=e}toRegexString(){return`(?:${this.value.toRegexString()})?`}},Pd=class{[z]=`struct`;[R]=`regex`;pattern;constructor(e){this.pattern=e}toRegexString(){return this.pattern}};function Fd(e){return N(e,`rex-empty`)||N(e,`rex-string`)||N(e,`rex-repeat`)||N(e,`rex-repeat-0`)||N(e,`rex-concat`)||N(e,`rex-any-char`)||N(e,`rex-char-set`)||N(e,`rex-char-antiset`)||N(e,`rex-char-range`)||N(e,`rex-any-of`)||N(e,`rex-optional`)||N(e,`regex`)}function Id(){return new Cd}function Ld(e){return new wd(e)}function Rd(e){return new Td(e)}function zd(e){return new Ed(e)}function Bd(...e){return new Dd(e)}function Vd(){return new Od}function Hd(e){return new kd(e)}function Ud(e){return new Ad(e)}function Wd(e,t){return new jd(e,t)}function Gd(...e){return new Md(e)}function Kd(e){return new Nd(e)}function qd(e){return new Pd(e)}function Jd(e,t){let n=new RegExp(e.toRegexString(),`g`),r=[],i;for(;(i=n.exec(t))!==null;)r.push(i[0]),i.index===n.lastIndex&&n.lastIndex++;return V(r)}function Yd(e,t){return RegExp(`^${e.toRegexString()}$`).test(t)}function Xd(e,t){let n=new RegExp(e.toRegexString(),`g`);return V(t.split(n))}function Zd(e){return e.toRegexString()}var Qd=t({runtime_any:()=>of,runtime_error:()=>ef,runtime_mkCtorFn:()=>nf,runtime_mkGetFn:()=>rf,runtime_mkObj:()=>cf,runtime_mkPredFn:()=>tf,runtime_mkVec:()=>sf,runtime_report:()=>$d,runtime_typeOf:()=>af});function $d(e){throw new Rn(e,Vt.none)}var ef=dn(`error`,e=>{throw typeof e==`string`?new P(`Runtime`,e,void 0,void 0,`error`):new P(`Runtime`,`expected a string, received ${I(e)}`,void 0,void 0,`error`)});function tf(e){return t=>N(t,e)}function nf(e,t){return(...n)=>{if(n.length!==t.length)throw new P(`Runtime`,`Constructor ${e} expects ${t.length} arguments, received ${n.length}`);return Nt(e,t,n)}}function rf(e,t){return n=>{if(N(n,e)){if(!(t in n))throw new P(`Runtime`,`Accessor expects field ${t} but it is not present in the given struct value`);return n[t]}else throw new P(`Runtime`,`Accessor function expects a ${e}, received ${I(n)}`)}}function af(e){return I(e)}function of(e){return!0}function sf(...e){return e}function cf(...e){if(e.length%2!=0)throw new P(`Runtime`,`A map requires an even number of arguments (alternating keys and values), received ${e.length.toString()}`);let t={};for(let n=0;n<e.length;n+=2){let r=e[n];if(typeof r!=`string`)throw new P(`Runtime`,`A map key must be a string, received ${I(r)}`);t[r]=e[n+1]}return t}Mn.registerCustomRenderer(un,Tn),Mn.registerCustomRenderer(Pn,Tn);var{prelude_charCompareFns:lf,prelude_charPredicateFns:uf,prelude_stringCompareFns:df,...ff}=Tc,pf=new Map([...Object.entries(jn),...Object.entries(Ds),...Object.entries(Zs),...Object.entries(Qs),...Object.entries(sc),...Object.entries(_c),...Object.entries(vc),...Object.entries(kn),...Object.entries(ff),...Object.entries(lf),...Object.entries(uf),...Object.entries(df),...Object.entries(od),...Object.entries(bd),...Object.entries(Qd),...Object.entries(Jt)]);function mf(e){if(!pf.has(e))throw new P(`Runtime`,`Attempted to look up "${e}" but it is not bound!`);return pf.get(e)}var hf=dn(`js-var`,e=>mf(e)),gf=[[`audio`,`;;; (sample? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is an audio sample.
(define-export sample? (js-var "audio_sampleQ"))

;;; (sample-node v) -> sample?
;;;  v : any
;;;   vector? of numbers between -1.0 and 1.0
;;; Returns an audio sample generated from the provided example.
;;; @category audio, sound
(define-export sample-node (js-var "audio_sampleNode"))

;;; (context? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is an audio context.
(define-export context? (js-var "audio_contextQ"))

;;; (audio-context sampleRate) -> context?
;;;  sampleRate : integer?
;;;   positive
;;; Creates an audio context with the given sample rate.
;;; @category audio, sound
(define-export audio-context (js-var "audio_audioContext"))

;;; (audio-node? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is an audio node.
(define-export audio-node? (js-var "audio_audioNodeQ"))

;;; (pipeline? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is an audio pipeline.
(define-export pipeline? (js-var "audio_pipelineQ"))

;;; (audio-pipeline ctx pipeline & n1) -> pipeline?
;;;  ctx : context?
;;;  pipeline : (or/p audio-node? sample?)
;;;  n1 : (or/p audio-node? sample?)
;;; Creates an audio pipeline from the given audio nodes, connecting the nodes in sequence.
;;; The first argument is what the pipeline plays and may be a sample; the rest are what
;;; it plays through, and must be audio nodes. A sample is played at \`ctx\`'s sample rate,
;;; one frame per element, so the context decides its pitch and duration.
;;; @category audio, sound
(define-export audio-pipeline (js-var "audio_audioPipeline"))

;;; (oscillator-node ctx type freq) -> audio-node?
;;;  ctx : context?
;;;  type : string?
;;;  freq : number?
;;;   positive
;;; Creates an oscillator node with the given type and frequency.
;;; @category audio, sound
(define-export oscillator-node (js-var "audio_oscillatorNode"))

;;; (audio-file-node ctx path) -> audio-node?
;;;  ctx : context?
;;;  path : string?
;;; Creates an audio source node connected to the audio file at the given path.
;;; @category audio, sound
(define-export audio-file-node (js-var "audio_audioFileNode"))

;;; (delay-node ctx delay) -> audio-node?
;;;  ctx : context?
;;;  delay : number?
;;;   positive
;;; Creates a delay node with the given delay time.
;;; @category audio, sound
(define-export delay-node (js-var "audio_delayNode"))

;;; (play-sample sample) -> void?
;;;  sample : sample?
;;; Plays the given audio sample. Note that due to browser limitations, the call to this function must be guarded by user input, _e.g._, by invoking it with a button press.
;;; @category audio, sound
(define-export play-sample (js-var "audio_playSample"))
`],[`canvas`,`;;; (canvas? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is a canvas.
;;; @category canvas, image, typecheck, make-canvas
(define-export canvas? (js-var "canvas_canvasQ"))

;;; (color? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is a valid color: a string containing a named color, an \`rgb\` value, or an \`hsv\` value.
;;; @category color, hsv, image, predicates, rgb, typecheck
(define-export color? (js-var "color_colorQ"))

;;; (drawing? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is a drawing: the kind of value the shape constructors build.
;;; @category image, predicates, typecheck
(define-export drawing? (js-var "drawing_drawingQ"))

;;; (fill-mode? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is a fill mode: the string \`"solid"\` or \`"outline"\`.
;;; @category canvas, shapes, typecheck, predicates
;; N.B., re-exported here (like color? and drawing?) because this module's own
;; contracts name it, and a contract predicate must resolve in the module that
;; uses it -- see the cross-module predicate test in test/libs/canvas.test.ts.
(define-export fill-mode? (js-var "drawing_fillModeQ"))

;;; (make-canvas width height) -> canvas?
;;;  width : integer?
;;;   positive
;;;  height : integer?
;;;   positive
;;; Creates a canvas with the given width and height.
;;; @category canvas, canvas?
(define-export make-canvas (js-var "canvas_makeCanvas"))

;;; (canvas-rectangle! canvas x y width height mode color) -> void?
;;;  canvas : canvas?
;;;  x : integer?
;;;  y : integer?
;;;  width : integer?
;;;   non-negative
;;;  height : integer?
;;;   non-negative
;;;  mode : fill-mode?
;;;   either \`"solid"\` or \`"outline"\`
;;;  color : color?
;;; Renders a rectangle whose upper-left corner is at \`(x, y)\`.
;;; @category canvas, mutation, predicates, shapes, canvas-ellipse!, canvas-circle!
(define-export canvas-rectangle! (js-var "canvas_canvasRectangle"))

;;; (canvas-ellipse! canvas x y radiusX radiusY rotation startAngle endAngle mode color) -> void?
;;;  canvas : canvas?
;;;  x : number?
;;;  y : number?
;;;  radiusX : number?
;;;   non-negative
;;;  radiusY : number?
;;;   non-negative
;;;  rotation : number?
;;;  startAngle : number?
;;;  endAngle : number?
;;;  mode : fill-mode?
;;;   either \`"solid"\` or \`"outline"\`
;;;  color : color?
;;; Renders an ellipse whose center is at \`(x, y)\`, radii \`radiusX\` and \`radiusY\`, \`rotation\`, \`startAngle\`, and \`endAngle\`.
;;; @category canvas, mutation, predicates, shapes, canvas-rectangle!, canvas-circle!
(define-export canvas-ellipse! (js-var "canvas_canvasEllipse"))

;;; (canvas-circle! canvas x y radius mode color) -> void?
;;;  canvas : canvas?
;;;  x : number?
;;;  y : number?
;;;  radius : number?
;;;   non-negative
;;;  mode : fill-mode?
;;;   either \`"solid"\` or \`"outline"\`
;;;  color : color?
;;; Renders a circle whose center is at \`(x, y)\` and radius \`radius\`.
;;; @category canvas, mutation, predicates, shapes, canvas-rectangle!, canvas-ellipse!
(define-export canvas-circle! (js-var "canvas_canvasCircle"))

;;; (canvas-text! canvas x y text size mode color & font) -> void?
;;;  canvas : canvas?
;;;  x : integer?
;;;  y : integer?
;;;  text : string?
;;;  size : number?
;;;   positive
;;;  mode : fill-mode?
;;;   either \`"solid"\` or \`"outline"\`
;;;  color : color?
;;;  font : string?
;;;   a css font string, e.g., \`"24px sans-serif"\`
;;; Renders the given text at the given coordinates.
;;; @category canvas, mutation, predicates, canvas-drawing!, canvas-path!
(define-export canvas-text! (js-var "canvas_canvasText"))

;;; (canvas-drawing! canvas x y drawing) -> void?
;;;  canvas : canvas?
;;;  x : integer?
;;;  y : integer?
;;;  drawing : drawing?
;;; Draws the given drawing (created via the \`image\` library) at the given coordinates.
;;; @category canvas, mutation, predicates, canvas-text!, canvas-path!
(define-export canvas-drawing! (js-var "canvas_canvasDrawing"))

;;; (canvas-path! canvas pairs mode color) -> void?
;;;  canvas : canvas?
;;;  pairs : list?
;;;   a list of pairs of numbers
;;;  mode : fill-mode?
;;;   either \`"solid"\` or \`"outline"\`
;;;  color : color?
;;; Renders a path from the given list of pairs of numbers.
;;; @category canvas, mutation, path, predicates, canvas-text!, canvas-drawing!
(define-export canvas-path! (js-var "canvas_canvasPath"))

;;; (animate-with proc) -> void?
;;;  proc : procedure?
;;;   a procedure that takes the current time in milliseconds as input.
;;; Repeatedly calls \`proc\` approximately once every 60 seconds, creating the effect of animation. \`proc\` should return a boolean. If \`proc\` returns \`#t\` the loop of calls continues, otherwise, it stops.
;;; @category canvas, canvas-onclick!
(define-export animate-with (js-var "canvas_animateWith"))

;;; (canvas-onclick! canvas proc) -> void?
;;;  canvas : canvas?
;;;  proc : procedure?
;;;   a procedure that takes two arguments: numbers representing the x and y coordinate of the mouse click on the canvas.
;;; Sets the given procedure to be called when the canvas is clicked by the user.
;;; @category canvas, mutation, predicates, animate-with-proc
(define-export canvas-onclick! (js-var "canvas_canvasOnclick"))
`],[`data`,`;;; (parse-csv data) -> list?
;;;  data : string?
;;; Parses \`data\` as a CSV-formatted string and returns a list of rows where each row is a list of fields as strings.
;;; @category data, parse
(define-export parse-csv (js-var "data_parseCsv"))

;;; (string->chars s) -> list?
;;;  s : string?
;;; Converts the string \`s\` into a list of char values.
;;; @category data, string->lines, string->words, tally-all
(define-export string->chars (js-var "data_stringToChars"))

;;; (string->lines s) -> list?
;;;  s : string?
;;; Splits the string \`s\` into a list of strings, where each string is a line of text.
;;; @category data, string->chars, string->words, tally-all
(define-export string->lines (js-var "data_stringToLines"))

;;; (tally-all lst) -> list?
;;;  lst : list?
;;; Takes a list \`lst\` and returns a list of pairs where each pair consists of an element from \`lst\` and the number of times that element appears in \`lst\`.
;;; @category data, string->chars, string->lines
(define-export tally-all (js-var "data_tallyAll"))

;;; (dataset? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if \`v\` is a dataset, \`#f\` otherwise.
;;; @category data, create, plot?
(define-export dataset? (js-var "data_datasetQ"))

;;; (plot? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if \`v\` is a plot, \`#f\` otherwise.
;;; @category data, create, plot, dataset?
(define-export plot? (js-var "data_plotQ"))

;;; (with-plot-options options plot) -> plot?
;;;  options : any
;;;   list of key-value pairs
;;;  plot : plot?
;;; Takes an association list of options and a plot, and returns a new plot with the specified options applied. Valid options include: - 'x-min': sets the minimum x-axis value - 'x-max': sets the maximum x-axis value - 'y-min': sets the minimum y-axis value - 'y-max': sets the maximum y-axis value - 'x-label': sets the label for the x-axis - 'y-label': sets the label for the y-axis
;;; @category data, create, plot, with-dataset-options
(define-export with-plot-options (js-var "data_withPlotOptions"))

;;; (with-dataset-options options dataset) -> dataset?
;;;  options : any
;;;   list of key-value pairs
;;;  dataset : dataset?
;;; Takes an association list of options and a dataset, and returns a new dataset with the specified options applied. Valid options include: - 'background-color': sets the background color of the dataset - 'border-color': sets the border color of the dataset
;;; @category data, create, with-plot-options
(define-export with-dataset-options (js-var "data_withDatasetOptions"))

;;; (plot-linear & datasets) -> plot?
;;;  datasets : any
;;;   list of datasets
;;; Creates a linear plot from the provided list of datasets. Valid datasets for this plot include line, bar, scatter, and bubble datasets.
;;; @category data, create, plot, plot-category, plot-radial
(define-export plot-linear (js-var "data_plotLinear"))

;;; (plot-category labels & datasets) -> plot?
;;;  labels : any
;;;   list of strings
;;;  datasets : any
;;;   list of datasets
;;; Creates a categorical plot from the provided list of labels and datasets. It is assumed that the dataset provides a value for each label. Valid datasets for this plot include line and bar datasets.
;;; @category data, create, plot, plot-linear, plot-radial
(define-export plot-category (js-var "data_plotCategory"))

;;; (plot-radial labels & datasets) -> plot?
;;;  labels : any
;;;   list of strings
;;;  datasets : any
;;;   list of datasets
;;; Creates a radial plot from the provided list of labels and datasets. It is assumed that the dataset provides a value for each label. Valid datasets for this plot include line and bar datasets.
;;; @category data, create, plot, plot-category, plot-linear
(define-export plot-radial (js-var "data_plotRadial"))

;;; (dataset-line title data) -> dataset?
;;;  title : string?
;;;  data : any
;;;   list of numbers or list of pairs of numbers
;;; Creates a line dataset with the given \`title\` and \`data\` points. If the dataset is used in a numeric (e.g., linear) plot, the data points must be a list of pairs of numbers. If the dataset is used in a categorical plot, the data points must be a list of numbers.
;;; @category data, create, dataset-bar, dataset-bubble, dataset-pie, dataset-polar, dataset-radar, dataset-scatter
(define-export dataset-line (js-var "data_datasetLine"))

;;; (dataset-bar title data) -> dataset?
;;;  title : string?
;;;  data : any
;;;   list of numbers
;;; Creates a bar dataset with the given \`title\` and \`data\` points.
;;; @category data, create, dataset-bubble, dataset-line, dataset-pie, dataset-polar, dataset-radar, dataset-scatter
(define-export dataset-bar (js-var "data_datasetBar"))

;;; (dataset-scatter title data) -> dataset?
;;;  title : string?
;;;  data : any
;;;   list of numbers
;;; Creates a scatter dataset with the given \`title\` and \`data\` points.
;;; @category data, create, dataset-bar, dataset-bubble, dataset-line, dataset-pie, dataset-polar, dataset-radar
(define-export dataset-scatter (js-var "data_datasetScatter"))

;;; (dataset-bubble title data) -> dataset?
;;;  title : string?
;;;  data : any
;;;   list of lists of three numbers
;;; Creates a bubble dataset with the given \`title\` and \`data\` points. The three numbers of each data point represent x-coordinate, y-coordinate, and radius of each point.
;;; @category data, create, dataset-bar, dataset-line, dataset-pie, dataset-polar, dataset-radar, dataset-scatter
(define-export dataset-bubble (js-var "data_datasetBubble"))

;;; (dataset-pie title data) -> dataset?
;;;  title : string?
;;;  data : any
;;;   list of numbers
;;; Creates a pie dataset with the given \`title\` and \`data\` points.
;;; @category data, create, dataset-bar, dataset-bubble, dataset-line, dataset-polar, dataset-radar, dataset-scatter
(define-export dataset-pie (js-var "data_datasetPie"))

;;; (dataset-polar title data) -> dataset?
;;;  title : string?
;;;  data : any
;;;   list of numbers
;;; Creates a polar dataset with the given \`title\` and \`data\` points.
;;; @category data, create, dataset-bar, dataset-bubble, dataset-line, dataset-pie, dataset-radar, dataset-scatter
(define-export dataset-polar (js-var "data_datasetPolar"))

;;; (dataset-radar title data) -> dataset?
;;;  title : string?
;;;  data : any
;;;   list of numbers
;;; Creates a radar dataset with the given \`title\` and \`data\` points.
;;; @category data, create, dataset-bar, dataset-bubble, dataset-line, dataset-pie, dataset-polar, dataset-scatter
(define-export dataset-radar (js-var "data_datasetRadar"))
`],[`file`,`;;; (file-exists? fname) -> boolean?
;;;  fname : string?
;;; Returns \`#t\` if \`fname\` names something in storage and \`#f\` otherwise. Note that a directory counts as existing, so a \`#t\` here does not guarantee that \`file->string\` will succeed.
;;; @category file, file->string, file->lines, string->file, lines->file
(define-export file-exists? (js-var "file_fileExistsQ"))

;;; (file->string fname) -> string?
;;;  fname : string?
;;; Reads the contents of the file named \`fname\` and returns it as a string. Raises an error if the file does not exist, so use \`file-exists?\` first if that is a possibility.
;;; @category file, file-exists?, file->lines, string->file, lines->file, with-file
(define-export file->string (js-var "file_fileToString"))

;;; (file->lines fname) -> list?
;;;  fname : string?
;;; Reads the contents of the file named \`fname\` and returns it as a list of strings, one per line. A trailing newline at the end of the file does not produce a final empty line. Raises an error if the file does not exist, so use \`file-exists?\` first if that is a possibility.
;;; @category file, file-exists?, file->string, lines->file, string->file, with-file
(define-export file->lines (js-var "file_fileToLines"))

;;; (string->file str fname) -> void?
;;;  str : string?
;;;  fname : string?
;;; Writes the string \`str\` to the file named \`fname\`, creating the file if it does not exist and replacing its contents if it does.
;;; @category file, lines->file, file->string, file->lines, file-exists?
(define-export string->file (js-var "file_stringToFile"))

;;; (lines->file lines fname) -> void?
;;;  lines : list?
;;;  fname : string?
;;; Writes \`lines\`, a list of strings, to the file named \`fname\`, one line each, creating the file if it does not exist and replacing its contents if it does. A non-empty list is written with a trailing newline, so that \`file->lines\` reads it back unchanged; the empty list writes an empty file. A string that itself contains a newline is written as-is, so it reads back as more than one line.
;;; @category file, string->file, file->lines, file->string, file-exists?
(define-export lines->file (js-var "file_linesToFile"))
`],[`gradescope`,`;; The Gradescope autograder library (issue #404).
;;
;; A \`gradescope-test-suite-output\` prints as exactly the JSON blob Gradescope
;; reads from \`results/results.json\`, so an autograder is a Scamper program
;; whose last expression is a call to \`gradescope-test-suite\`. The harness that
;; runs one lives in \`gradescope/\` at the root of this repository.
;;
;; N.B., the two struct types are built from the runtime's struct primitives
;; rather than declared with \`struct\`, so that each of their functions carries
;; a docstring (and, from it, a contract) as the rest of the standard library
;; does. \`struct\` is sugar for exactly these calls -- see expansion.ts.

;;; (gradescope-test-result name status score max-score output) -> gradescope-test-result?
;;;  name : string?
;;;   the name Gradescope shows for the case
;;;  status : string?
;;;   "passed" or "failed"
;;;  score : number?
;;;  max-score : number?
;;;  output : any
;;;   the text shown under the case; a string is used as it is, and any other
;;;   value is rendered the way Scamper prints it
;;; Returns a single Gradescope test case. Build one directly for a case that
;;; is not simply one point -- a bonus mark, or work you scored by hand -- and
;;; hand it to \`gradescope-test-suite\` alongside your test results.
;;; @category testing
(define-export gradescope-test-result
  ((js-var "runtime_mkCtorFn")
    "gradescope-test-result"
    ((js-var "prelude_vector") "name" "status" "score" "max-score" "output")))

;;; (gradescope-test-result? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is a Gradescope test case.
(define-export gradescope-test-result?
  ((js-var "runtime_mkPredFn") "gradescope-test-result"))

;;; (gradescope-test-result-name c) -> string?
;;;  c : gradescope-test-result?
;;; Returns the name Gradescope shows for the case \`c\`.
;;; @category testing
(define-export gradescope-test-result-name
  ((js-var "runtime_mkGetFn") "gradescope-test-result" "name"))

;;; (gradescope-test-result-status c) -> string?
;;;  c : gradescope-test-result?
;;; Returns the status of the case \`c\`, either "passed" or "failed".
;;; @category testing
(define-export gradescope-test-result-status
  ((js-var "runtime_mkGetFn") "gradescope-test-result" "status"))

;;; (gradescope-test-result-score c) -> number?
;;;  c : gradescope-test-result?
;;; Returns the points the case \`c\` awards.
;;; @category testing
(define-export gradescope-test-result-score
  ((js-var "runtime_mkGetFn") "gradescope-test-result" "score"))

;;; (gradescope-test-result-max-score c) -> number?
;;;  c : gradescope-test-result?
;;; Returns the points the case \`c\` is out of.
;;; @category testing
(define-export gradescope-test-result-max-score
  ((js-var "runtime_mkGetFn") "gradescope-test-result" "max-score"))

;;; (gradescope-test-result-output c) -> any
;;;  c : gradescope-test-result?
;;; Returns the value shown as the output of the case \`c\`.
;;; @category testing
(define-export gradescope-test-result-output
  ((js-var "runtime_mkGetFn") "gradescope-test-result" "output"))

;; N.B., the suite constructor is deliberately *not* exported.
;; \`gradescope-test-suite\` is the only way to build one, so every case a suite
;; holds has been checked to be one -- the renderer
;; (src/js/gradescope/renderers/json.ts) reads their fields without re-checking,
;; and a suite built by hand from the wrong values would otherwise print JSON
;; missing the fields Gradescope needs, which it accepts without complaint.
(define mk-suite-output
  ((js-var "runtime_mkCtorFn")
    "gradescope-test-suite-output"
    ((js-var "prelude_vector") "tests")))

;;; (gradescope-test-suite-output? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is the results of a whole Gradescope test
;;; suite.
(define-export gradescope-test-suite-output?
  ((js-var "runtime_mkPredFn") "gradescope-test-suite-output"))

;;; (gradescope-test-suite-output-tests s) -> list?
;;;  s : gradescope-test-suite-output?
;;; Returns the list of \`gradescope-test-result?\` cases the suite \`s\` holds.
;;; @category testing
(define-export gradescope-test-suite-output-tests
  ((js-var "runtime_mkGetFn") "gradescope-test-suite-output" "tests"))

;; A test result as the Gradescope test case it becomes: worth one point,
;; awarded only when it passed, with the result itself as the case's output so
;; the student reads the same message the IDE would have shown them. A case
;; built by hand is already in its final form and passes straight through.
(define test-result->case
  (lambda (r)
    (match r
      [(gradescope-test-result _ _ _ _ _) r]
      [(test-result-ok desc)
       (gradescope-test-result desc "passed" 1 1 r)]
      [(test-result-error-expected desc _ _)
       (gradescope-test-result desc "failed" 0 1 r)]
      [(test-result-error-exn desc _)
       (gradescope-test-result desc "failed" 0 1 r)]
      [(test-result-error-gen desc _)
       (gradescope-test-result desc "failed" 0 1 r)]
      [_ (error "gradescope-test-suite: expected a list of test results")])))

;;; (gradescope-test-suite tests) -> gradescope-test-suite-output?
;;;  tests : list?
;;;   a list of test-result? values, and any gradescope-test-result? cases
;;;   built by hand
;;; Collects \`tests\` into the results Gradescope expects of an autograder: each
;;; test result is worth one point, awarded only if it passed, and carries its
;;; usual message as its output; a hand-built case is kept as it is. The result
;;; prints as the JSON blob to write to \`results/results.json\`.
;;; @category testing
(define-export gradescope-test-suite
  (lambda (tests)
    (mk-suite-output (map test-result->case tests))))
`],[`html`,`;;; (element? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is an HTML element.
;;; @category html, html?, on-keydown!
(define-export element? (js-var "html_isElement"))

;;; (text-area? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is a text area.
;;; @category html, text-area, text-area-get
(define-export text-area? (js-var "html_textAreaQ"))

;;; (text-area id) -> text-area?
;;;  id : string?
;;; Creates a text area with the given id.
;;; @category html, text-area?, text-area-get
(define-export text-area (js-var "html_textArea"))

;;; (text-area-get text-area) -> string?
;;;  text-area : text-area?
;;; Returns the text in the given text area.
;;; @category html, text-area, text-area?
(define-export text-area-get (js-var "html_textAreaGet"))

;;; (button? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is a button.
;;; @category html, button
(define-export button? (js-var "html_buttonQ"))

;;; (button label fn) -> button?
;;;  label : string?
;;;  fn : procedure?
;;; Creates a button with the given label and function that is called when the button is pressed.
;;; @category html, button?
(define-export button (js-var "html_button"))

;;; (tag name & c) -> element?
;;;  name : string?
;;;  c : any
;;; Creates an HTML element with the given name and children.
;;; @category html, tag-set-children?
(define-export tag (js-var "html_tag"))

;;; (tag-set-children! elt & c) -> element?
;;;  elt : any
;;;   an HTML element
;;;  c : any
;;;   an HTML element or string
;;; Sets \`elt\`'s children to be \`c1\`, \`c2\`, ..
;;; @category html, mutation, predicates, tag-func
(define-export tag-set-children! (js-var "html_tagSetChildren"))

;;; (on-keydown! fn) -> void?
;;;  fn : procedure?
;;; Calls \`fn\` whenever a key is pressed while the page is focused. \`fn\` takes a single argument, the key pressed by the user as a string.
;;; @category html, mutation, predicates, element?
(define-export on-keydown! (js-var "html_onKeydown"))
`],[`image`,`;;; (canvas? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is a canvas.
;;; @category canvas, image, typecheck, predicates, html?
(define-export canvas? (js-var "canvas_canvasQ"))

;;; (html? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is an HTML element.
;;; @category html, typecheck, predicates, canvas?
(define-export html? (js-var "html_isElement"))

;;; (color? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is a valid color: a string containing a named color, an \`rgb\` value, or an \`hsv\` value.
;;; @category color, hsv, image, predicates, rgb, typecheck, color-func, find-colors, all-color-names
(define-export color? (js-var "color_colorQ"))

;;; (rgb-component? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is an integer between 0 and 255.
;;; @category color, image, predicates, rgb, typecheck, rgb-func, color-func, rgb?, rgb-distance
(define-export rgb-component? (js-var "color_isRgbComponent"))

;;; (rgb? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is a rgb value.
;;; @category color, image, predicates, rgb, typecheck, rgb-func, color-func, rgb-component?, rgb-distance
(define-export rgb? (js-var "color_isRgb"))

;;; (rgb r g b & a) -> rgb?
;;;  r : rgb-component?
;;;  g : rgb-component?
;;;  b : rgb-component?
;;;  a : rgb-component?
;;;   optional
;;; Returns an rgb value with the specified components.
;;; @category color, image, rgb, color-func, rgb?, rgb-component?, rgb-distance
(define-export rgb (js-var "color_rgb"))

;;; (rgb-red rgb) -> rgb-component?
;;;  rgb : rgb?
;;; Returns the red component of the rgb value.
;;; @category color, image, rgb, rgb-blue, rgb-green
(define-export rgb-red (js-var "color_rgbRed"))

;;; (rgb-green rgb) -> rgb-component?
;;;  rgb : rgb?
;;; Returns the green component of the rgb value.
;;; @category color, image, rgb, rgb-blue, rgb-red
(define-export rgb-green (js-var "color_rgbGreen"))

;;; (rgb-blue rgb) -> rgb-component?
;;;  rgb : rgb?
;;; Returns the blue component of the rgb value.
;;; @category color, image, rgb, rgb-green, rgb-red
(define-export rgb-blue (js-var "color_rgbBlue"))

;;; (rgb-alpha rgb) -> rgb-component?
;;;  rgb : rgb?
;;; Returns the alpha component of the rgb value.
;;; @category color, image, rgb, rgb-hue, rgb-pseudo-complement, rgb-saturation, rgb-value
(define-export rgb-alpha (js-var "color_rgbAlpha"))

;;; (rgb-distance rgb1 rgb2) -> number?
;;;  rgb1 : rgb?
;;;  rgb2 : rgb?
;;; Returns the Euclidean distance between the two rgb values.
;;; @category color, image, rgb, rgb-func, color-func, rgb?, rgb-component?
(define-export rgb-distance (js-var "color_rgbDistance"))

;;; (color-name? v) -> boolean?
;;;  v : string?
;;; Returns \`#t\` if and only if \`v\` is a valid color name.
;;; @category color, image, predicates, typecheck, color-func, all-color-names, find-colors
(define-export color-name? (js-var "color_isColorName"))

;;; (all-color-names x1) -> list?
;;;  x1 : any
;;; Returns a list of all valid color names.
;;; @category color, constants, image, color-func, color?, find-colors, color-name?
(define-export all-color-names (js-var "color_allColorNames"))

;;; (find-colors color-name) -> list?
;;;  color-name : string?
;;; Returns a list of all color names that contain \`color\`, case-insensitive.
;;; @category image, color-func, color?, all-color-names, color-name?
(define-export find-colors (js-var "color_findColors"))

;;; (rgb->string rgb) -> string?
;;;  rgb : rgb?
;;; Returns a string representation of the rgb value, e.g., approrpiate for use as a shape color.
;;; @category color, image, rgb, color-name->rgb, hsv->rgb, rgb->hsv, hsv->string
(define-export rgb->string (js-var "color_rgbToString"))

;;; (hsv? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is a hsv value.
;;; @category color, image, hsv, predicates, typecheck, hsv-func
(define-export hsv? (js-var "color_isHsv"))

;;; (hsv h s v & a) -> hsv?
;;;  h : number?
;;;   0 <= h <= 360
;;;  s : number?
;;;   0 <= s <= 100
;;;  v : number?
;;;   0 <= v <= 100
;;;  a : number?
;;;   0 <= a <= 255
;;; Returns a hsv value with the specified components.
;;; @category color, hsv, image, hsv?
(define-export hsv (js-var "color_hsv"))

;;; (hsv-hue hsv) -> number?
;;;  hsv : hsv?
;;; Returns the hue component of the hsv value.
;;; @category color, hsv, image, hsv-alpha, hsv-complement, hsv-saturation, hsv-value
(define-export hsv-hue (js-var "color_hsvHue"))

;;; (hsv-saturation hsv) -> number?
;;;  hsv : hsv?
;;; Returns the saturation component of the hsv value.
;;; @category color, hsv, image, hsv-alpha, hsv-hue, hsv-complement, hsv-value
(define-export hsv-saturation (js-var "color_hsvSaturation"))

;;; (hsv-value hsv) -> number?
;;;  hsv : hsv?
;;; Returns the value component of the hsv value.
;;; @category color, hsv, image, hsv-alpha, hsv-hue, hsv-complement, hsv-saturation
(define-export hsv-value (js-var "color_hsvValue"))

;;; (hsv-alpha hsv) -> number?
;;;  hsv : hsv?
;;; Returns the alpha component of the hsv value.
;;; @category color, hsv, image, hsv-hue, hsv-complement, hsv-saturation, hsv-value
(define-export hsv-alpha (js-var "color_hsvAlpha"))

;;; (hsv-complement hsv) -> hsv?
;;;  hsv : hsv?
;;; Returns the complement of the hsv value.
;;; @category color, hsv, image, hsv-alpha, hsv-hue, hsv-saturation, hsv-value
(define-export hsv-complement (js-var "color_hsvComplement"))

;;; (rgb-hue rgb) -> number?
;;;  rgb : rgb?
;;; Returns the hue component of the rgb value.
;;; @category color, hsv, image, rgb, rgb-alpha, rgb-pseudo-complement, rgb-saturation, rgb-value
(define-export rgb-hue (js-var "color_rgbHue"))

;;; (rgb-saturation rgb) -> number?
;;;  rgb : rgb?
;;; Returns the saturation component of the rgb value.
;;; @category color, hsv, image, rgb, rgb-alpha, rgb-hue, rgb-pseudo-complement, rgb-value
(define-export rgb-saturation (js-var "color_rgbSaturation"))

;;; (rgb-value rgb) -> number?
;;;  rgb : rgb?
;;; Returns the value component of the rgb value.
;;; @category color, hsv, image, rgb, rgb-alpha, rgb-hue, rgb-pseudo-complement, rgb-saturation
(define-export rgb-value (js-var "color_rgbValue"))

;;; (rgb->hsv rgb) -> hsv?
;;;  rgb : rgb?
;;; Converts the rgb value to an hsv value.
;;; @category color, hsv, image, rgb, color-name->rgb, hsv->rgb, rgb->string
(define-export rgb->hsv (js-var "color_rgbToHsv"))

;;; (hsv->string hsv) -> string?
;;;  hsv : hsv?
;;; Returns a string representation of the hsv value.
;;; @category color, hsv, image, rgb->hsv, hcv->rgb
(define-export hsv->string (js-var "color_hsvToString"))

;;; (color-name->rgb color-name) -> rgb?
;;;  color-name : string?
;;; Returns the rgb value of the color name.
;;; @category color, image, rgb, hsv->rgb, rgb->hsv, rgb->string
(define-export color-name->rgb (js-var "color_colorNameToRgb"))

;;; (hsv->rgb hsv) -> rgb?
;;;  hsv : hsv?
;;; Converts the hsv value to an rgb value.
;;; @category color, hsv, image, rgb, color-name->rgb, rgb->hsv, rgb->string, hsv->string
(define-export hsv->rgb (js-var "color_hsvToRgb"))

;;; (rgb-darker rgb) -> rgb?
;;;  rgb : rgb?
;;; Returns a darker version of the rgb value.
;;; @category color, image, rgb, rgb-lighter
(define-export rgb-darker (js-var "color_rgbDarker"))

;;; (rgb-lighter rgb) -> rgb?
;;;  rgb : rgb?
;;; Returns a lighter version of the rgb value.
;;; @category color, image, rgb, rgb-lighter
(define-export rgb-lighter (js-var "color_rgbLighter"))

;;; (rgb-redder rgb) -> rgb?
;;;  rgb : rgb?
;;; Returns a redder version of the rgb value.
;;; @category color, image, rgb, rgb-bluer, rgb-greener
(define-export rgb-redder (js-var "color_rgbRedder"))

;;; (rgb-bluer rgb) -> rgb?
;;;  rgb : rgb?
;;; Returns a bluer version of the rgb value.
;;; @category color, image, rgb, rgb-greener, rgb-redder
(define-export rgb-bluer (js-var "color_rgbBluer"))

;;; (rgb-greener rgb) -> rgb?
;;;  rgb : rgb?
;;; Returns a greener version of the rgb value.
;;; @category color, image, rgb, rgb-bluer, rgb-redder
(define-export rgb-greener (js-var "color_rgbGreener"))

;;; (rgb-pseudo-complement rgb) -> rgb?
;;;  rgb : rgb?
;;; Returns a pseudo-complement of the rgb value.
;;; @category color, image, rgb, rgb-greyscale, rgb-phaseshift, rgb-rotate-components
(define-export rgb-pseudo-complement (js-var "color_rgbPseudoComplement"))

;;; (rgb-greyscale rgb) -> rgb?
;;;  rgb : rgb?
;;; Returns a greyscale version of the rgb value.
;;; @category color, image, rgb, rgb-phaseshift, rgb-rotate-components
(define-export rgb-greyscale (js-var "color_rgbGreyscale"))

;;; (rgb-phaseshift rgb) -> rgb?
;;;  rgb : rgb?
;;; Returns a phaseshifted version of the rgb value.
;;; @category color, image, rgb, rgb-greyscale, rgb-rotate-components
(define-export rgb-phaseshift (js-var "color_rgbPhaseshift"))

;;; (rgb-rotate-components rgb) -> rgb?
;;;  rgb : rgb?
;;; Returns a rotated version of the rgb value.
;;; @category color, image, rgb, rgb-greyscale, rgb-phaseshift
(define-export rgb-rotate-components (js-var "color_rgbRotateComponents"))

;;; (rgb-thin rgb) -> rgb?
;;;  rgb : rgb?
;;; Returns a thinner version of the rgb value.
;;; @category color, image, rgb, rgb-thicken
(define-export rgb-thin (js-var "color_rgbThin"))

;;; (rgb-thicken rgb) -> rgb?
;;;  rgb : rgb?
;;; Returns a thicker version of the rgb value.
;;; @category color, image, rgb, rgb-thin
(define-export rgb-thicken (js-var "color_rgbThicken"))

;;; (rgb-add rgb1 rgb2) -> rgb?
;;;  rgb1 : rgb?
;;;  rgb2 : rgb?
;;; Returns the sum of the two rgb values.
;;; @category color, image, rgb, rgb-subtract, rgb-average
(define-export rgb-add (js-var "color_rgbAdd"))

;;; (rgb-subtract rgb1 rgb2) -> rgb?
;;;  rgb1 : rgb?
;;;  rgb2 : rgb?
;;; Returns the difference of the two rgb values.
;;; @category color, image, rgb, rgb-add, rgb-average
(define-export rgb-subtract (js-var "color_rgbSubtract"))

;;; (rgb-average rgb1 rgb2) -> rgb?
;;;  rgb1 : rgb?
;;;  rgb2 : rgb?
;;; Returns the average of the two rgb values.
;;; @category color, image, rgb, rgb-add, rgb-subtract
(define-export rgb-average (js-var "color_rgbAverage"))

;;; (font? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is a font.
;;; @category image, typecheck, font, text
(define-export font? (js-var "font_fontQ"))

;;; (font face system-face bold? italic?) -> font?
;;;  face : any
;;;   string? A valid font name
;;;  system-face : any
;;;   string? A generic font family name (optional, default "sans-serif")
;;;  bold? : any
;;;   boolean? (optional, default #f)
;;;  italic? : any
;;;   boolean? (optional, default #f)
;;; Returns a new font value with the given arguments. The \`system-face\` name is drawn from one of the possible system font families, a list can be found on [MDN (font-family)](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#syntax)
;;; @category image, font?, text
(define-export font (js-var "font_font"))

;;; (drawing? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is a drawing: the kind of value the shape constructors build. A canvas is not a drawing, and neither is a loaded image file.
;;; @category image, predicates, typecheck, shapes, canvas?
(define-export drawing? (js-var "drawing_drawingQ"))

;;; (fill-mode? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is a fill mode: the string \`"solid"\` or \`"outline"\`.
;;; @category image, shapes, typecheck, predicates, ellipse, rectangle
(define-export fill-mode? (js-var "drawing_fillModeQ"))

;;; (ellipse width height fill color) -> drawing?
;;;  width : integer?
;;;  height : integer?
;;;  fill : fill-mode?
;;;  color : color?
;;; Returns a new drawing containing an ellipse with dimensions \`width × height\`.
;;; @category image, shapes, solid-ellipse, outlined-ellipse
(define-export ellipse (js-var "drawing_ellipse"))

;;; (circle radius fill color) -> drawing?
;;;  radius : number?
;;;  fill : fill-mode?
;;;   either "solid" or "outline"
;;;  color : color?
;;;   either a color name or the form "rgba(r, g, b, a)"
;;; Returns a drawing consisting of a circle of radius \`radius\`.
;;; @category image, shapes, solid-circle, outlined-circle
(define-export circle (js-var "drawing_circle"))

;;; (rectangle width height fill color) -> drawing?
;;;  width : number?
;;;  height : number?
;;;  fill : fill-mode?
;;;   either "solid" or "outline"
;;;  color : color?
;;;   either a color name or the form "rgba(r, g, b, a)"
;;; Returns a drawing consisting of a rectangle with dimensions \`width × height\`.
;;; @category image, shapes, solid-rectangle, outlined-rectangle
(define-export rectangle (js-var "drawing_rectangle"))

;;; (square width fill color) -> drawing?
;;;  width : number?
;;;  fill : fill-mode?
;;;   either "solid" or "outline"
;;;  color : color?
;;;   either a color name or the form "rgba(r, g, b, a)"
;;; Returns a drawing consisting of a square with length \`width\`.
;;; @category image, shapes, solid-square, outlined-square
(define-export square (js-var "drawing_square"))

;;; (triangle length fill color) -> drawing?
;;;  length : number?
;;;  fill : fill-mode?
;;;   either "solid" or "outline"
;;;  color : color?
;;;   either a color name or the form "rgba(r, g, b, a)"
;;; Returns a drawing consisting of a equilateral triangle with length \`length\`.
;;; @category image, shapes, solid-triangle, outlined-triangle
(define-export triangle (js-var "drawing_triangle"))

;;; (isosceles-triangle width height fill color) -> drawing?
;;;  width : number?
;;;  height : number?
;;;  fill : fill-mode?
;;;   either "solid" or "outline"
;;;  color : color?
;;;   either a color name or the form "rgba(r, g, b, a)"
;;; Returns a drawing consisting of a isosceles triangle with base \`base\` and height \`height\`.
;;; @category image, shapes, solid-isosceles-triangle, outlined-isosceles-triangle
(define-export isosceles-triangle (js-var "drawing_isoscelesTriangle"))

;;; (path width height points fill color) -> drawing?
;;;  width : number?
;;;  height : number?
;;;  points : list?
;;;   a list of points, pairs of numbers
;;;  fill : fill-mode?
;;;   either "solid" or "outline"
;;;  color : color?
;;;   either a color name or the form "rgba(r, g, b, a)"
;;; Returns a drawing with dimensions \`width × height\` formed by connecting the points in \`points\` with straight lines. The points are specified as a \`pair\` of coordinates.
;;; @category image, path, with-dash
(define-export path (js-var "drawing_path"))

;;; (beside & d1) -> drawing?
;;;  d1 : drawing?
;;; Creates a new drawing formed by places the drawing \`d1\`, \`d2\`, ..., beside each other (horizontally).
;;; @category composition/placement, image, beside/align, above, above/align, overlay, overlay/align, overlay/offset, rotate
(define-export beside (js-var "drawing_beside"))

;;; (beside/align align & d1) -> drawing?
;;;  align : string?
;;;   either "top", "center", or "bottom"
;;;  d1 : drawing?
;;; Creates a new drawing formed by places the drawing \`d1\`, \`d2\`, ..., beside each other on the x-axis, aligning them along the y-axis according to \`align\`.
;;; @category composition/placement, image, beside, above, above/align, overlay, overlay/align, overlay/offset, rotate
(define-export beside/align (js-var "drawing_besideAlign"))

;;; (above & d1) -> drawing?
;;;  d1 : drawing?
;;; Creates a new drawing formed by places the drawing \`d1\`, \`d2\`, ..., above each other (vertically in descending order).
;;; @category composition/placement, image, beside, beside/align, above/align, overlay, overlay/align, overlay/offset, rotate
(define-export above (js-var "drawing_above"))

;;; (above/align align & d1) -> drawing?
;;;  align : string?
;;;   either "left", "middle", or "right"
;;;  d1 : drawing?
;;; Creates a new drawing formed by places the drawing \`d1\`, \`d2\`, ..., above each other on the y-axis, aligning them along the x-axis according to \`align\`.
;;; @category composition/placement, image, beside, beside/align, above, overlay, overlay/align, overlay/offset, rotate
(define-export above/align (js-var "drawing_aboveAlign"))

;;; (overlay & d1) -> drawing?
;;;  d1 : drawing?
;;; Creates a new drawing formed by places the drawing \`d1\`, \`d2\`, ..., on top of each other. (\`d1\` is the topmost drawing).
;;; @category composition/placement, image, beside, beside/align, above, above/align, overlay/align, overlay/offset, rotate
(define-export overlay (js-var "drawing_overlay"))

;;; (overlay/align xAlign yAlign & d1) -> drawing?
;;;  xAlign : string?
;;;   either "left", "middle", or "right"
;;;  yAlign : string?
;;;   either "top", "center", or "bottom"
;;;  d1 : drawing?
;;; Creates a new drawing formed by places the drawing \`d1\`, \`d2\`, ..., on top of each other, aligning them according to \`xAlign\` and \`yAlign\`.
;;; @category composition/placement, image, beside, beside/align, above, above/align, overlay, overlay/offset, rotate
(define-export overlay/align (js-var "drawing_overlayAlign"))

;;; (overlay/offset dx dy d1 d2) -> drawing?
;;;  dx : number?
;;;  dy : number?
;;;  d1 : drawing?
;;;  d2 : drawing?
;;; Creates a new drawing formed by places the drawing \`d1\` on top of \`d2\`, offset by \`(dx, dy)\`.
;;; @category composition/placement, image, beside, beside/align, above, above/align, overlay, overlay/align, rotate
(define-export overlay/offset (js-var "drawing_overlayOffset"))

;;; (rotate angle d) -> drawing?
;;;  angle : number?
;;;   in degrees
;;;  d : drawing?
;;; Returns a new drawing formed by rotating drawing \`d\` by \`angle\` degrees around the center of its bounding box. Note: currently buggy and shifts off-center.
;;; @category image, beside, beside/align, above, above/align, overlay, overlay/align, overlay/offset
(define-export rotate (js-var "drawing_rotate"))

;;; (with-dash dash-spec d) -> drawing?
;;;  dash-spec : list?
;;;   a list of numbers
;;;  d : drawing?
;;; Returns a new drawing formed by drawing \`d\` but with lines drawn according to \`dash-spec\`. \`dash-spec\` is an list of numbers where each successive pair of numbers describe the length of a dash and the length of the subsequent gap.
;;; @category canvas, image, shapes, path-func
(define-export with-dash (js-var "drawing_withDash"))

;;; (text str size color & font) -> drawing?
;;;  str : string?
;;;  size : any
;;;   number? A valid font size (in px)
;;;  color : color?
;;;  font : any
;;;   font? (optional, default (font "Arial"))
;;; Returns a new drawing formed by drawing \`str\` with the given arguments.
;;; @category image, font, font?
(define-export text (js-var "drawing_text"))

;;; (solid-square width color) -> drawing?
;;;  width : number?
;;;  color : color?
;;;   either a color name or the form "rgba(r, g, b, a)"
;;; Returns a drawing consisting of a solid square with length \`width\`.
;;; @category image, shapes, square, outlined-square
(define-export solid-square (js-var "drawing_solidSquare"))

;;; (outlined-square width color) -> drawing?
;;;  width : number?
;;;  color : color?
;;;   either a color name or the form "rgba(r, g, b, a)"
;;; Returns a drawing consisting of an outline square with length \`width\`.
;;; @category image, shapes, square, solid-square
(define-export outlined-square (js-var "drawing_outlinedSquare"))

;;; (solid-rectangle width height color) -> drawing?
;;;  width : number?
;;;  height : number?
;;;  color : color?
;;;   either a color name or the form "rgba(r, g, b, a)"
;;; Returns a drawing consisting of a solid rectangle with dimensions \`width × height\`.
;;; @category image, shapes, rectangle, outlined-rectangle
(define-export solid-rectangle (js-var "drawing_solidRectangle"))

;;; (outlined-rectangle width height color) -> drawing?
;;;  width : number?
;;;  height : number?
;;;  color : color?
;;;   either a color name or the form "rgba(r, g, b, a)"
;;; Returns a drawing consisting of an outlined rectangle with dimensions \`width × height\`.
;;; @category image, shapes, rectangle, solid-rectangle
(define-export outlined-rectangle (js-var "drawing_outlinedRectangle"))

;;; (solid-circle radius color) -> drawing?
;;;  radius : number?
;;;  color : color?
;;;   either a color name or the form "rgba(r, g, b, a)"
;;; Returns a drawing consisting of a solid circle of radius \`radius\`.
;;; @category image, shapes, circle, outlined-circle
(define-export solid-circle (js-var "drawing_solidCircle"))

;;; (outlined-circle radius color) -> drawing?
;;;  radius : number?
;;;  color : color?
;;;   either a color name or the form "rgba(r, g, b, a)"
;;; Returns a drawing consisting of an outlined circle of radius \`radius\`.
;;; @category image, shapes, circle, solid-circle
(define-export outlined-circle (js-var "drawing_outlinedCircle"))

;;; (solid-ellipse width height color) -> drawing?
;;;  width : integer?
;;;  height : integer?
;;;  color : color?
;;; Returns a new drawing containing a solid ellipse with dimensions \`width × height\`.
;;; @category image, shapes, ellipse, outlined-ellipse
(define-export solid-ellipse (js-var "drawing_solidEllipse"))

;;; (outlined-ellipse width height color) -> drawing?
;;;  width : integer?
;;;  height : integer?
;;;  color : color?
;;; Returns a new drawing containing an outlined ellipse with dimensions \`width × height\`.
;;; @category image, shapes, ellipse, solid-ellipse
(define-export outlined-ellipse (js-var "drawing_outlinedEllipse"))

;;; (solid-triangle length color) -> drawing?
;;;  length : number?
;;;  color : color?
;;;   either a color name or the form "rgba(r, g, b, a)"
;;; Returns a drawing consisting of a solid equilateral triangle with length \`length\`.
;;; @category image, shapes, triangle, outlined-triangle
(define-export solid-triangle (js-var "drawing_solidTriangle"))

;;; (outlined-triangle length color) -> drawing?
;;;  length : number?
;;;  color : color?
;;;   either a color name or the form "rgba(r, g, b, a)"
;;; Returns a drawing consisting of an outlined equilateral triangle with length \`length\`.
;;; @category image, shapes, triangle, solid-triangle
(define-export outlined-triangle (js-var "drawing_outlinedTriangle"))

;;; (solid-isosceles-triangle width height color) -> drawing?
;;;  width : number?
;;;  height : number?
;;;  color : color?
;;;   either a color name or the form "rgba(r, g, b, a)"
;;; Returns a drawing consisting of a solid isosceles triangle with base \`base\` and height \`height\`.
;;; @category image, shapes, isosceles-triangle, outlined-isosceles-triangle
(define-export solid-isosceles-triangle (js-var "drawing_solidIsoscelesTriangle"))

;;; (outlined-isosceles-triangle width height color) -> drawing?
;;;  width : number?
;;;  height : number?
;;;  color : color?
;;;   either a color name or the form "rgba(r, g, b, a)"
;;; Returns a drawing consisting of an outlined isosceles triangle with base \`base\` and height \`height\`.
;;; @category image, shapes, isosceles-triangle, solid-isosceles-triangle
(define-export outlined-isosceles-triangle (js-var "drawing_outlinedIsoscelesTriangle"))

;;; (drawing-width drawing) -> number?
;;;  drawing : drawing?
;;; Returns the width of the drawing.
;;; @category image, drawing-height
(define-export drawing-width (js-var "drawing_drawingWidth"))

;;; (drawing-height drawing) -> number?
;;;  drawing : drawing?
;;; Returns the height of the drawing.
;;; @category image, drawing-width
(define-export drawing-height (js-var "drawing_drawingHeight"))

;;; (drawing-color drawing) -> rgb?
;;;  drawing : drawing?
;;; Returns the color of the drawing. For a composite drawing, this is the average of its parts' colors.
;;; @category image, drawing-recolor
(define-export drawing-color (js-var "drawing_drawingColor"))

;;; (drawing-recolor drawing color) -> drawing?
;;;  drawing : drawing?
;;;  color : color?
;;; Returns a new drawing with the same dimensions as \`drawing\` but with the color \`color\`.
;;; @category image, drawing-color
(define-export drawing-recolor (js-var "drawing_drawingRecolor"))

;;; (drawing->pixels d) -> vector?
;;;  d : drawing?
;;; Returns a vector of rgb values corresponding to the pixels of the given drawing.
;;; @category image, pixel, drawing->canvas
(define-export drawing->pixels (js-var "drawing_drawingToPixels"))

;;; (drawing->canvas drawing) -> canvas?
;;;  drawing : drawing?
;;; Renders \`drawing\` onto a new canvas and returns it.
;;; @category image, pixel, drawing->pixels
(define-export drawing->canvas (js-var "drawing_drawingToCanvas"))

;;; (with-image-file callback) -> html?
;;;  callback : procedure?
;;; Returns a container with a file chooser that, when used, calls \`callback\` with the selected image and replaces the container's contentsr with the output produced by \`callback\`.
;;; @category image, with-image-from-url
(define-export with-image-file (js-var "image_withImageFile"))

;;; (with-image-from-url url callback) -> any
;;;  url : string?
;;;  callback : procedure?
;;; Loads the image at \`url\` and passes it (as a canvas) to \`callback\`. The output of \`callback\` is returned (and rendered to the screen if this is a top-level expression).
;;; @category image, with-image-file
(define-export with-image-from-url
  (lambda (url callback)
    (callback ((js-var "image_blockOnFetchImage") url))))

;;; (pixel-map fn canvas) -> canvas?
;;;  fn : procedure?
;;;  canvas : canvas?
;;; Returns a new canvas that is the result of applying \`fn\` to each pixel (an rgb value) of \`canvas\`. \`canvas\` itself is unchanged.
;;; @category image, pixel, canvas-get-pixel, canvas->pixels, pixels->canvas, canvas-set-pixels!
(define-export pixel-map
  (lambda (fn img)
    (pixels->canvas (vector-map fn (canvas->pixels img))
                   (canvas-width img)
                   (canvas-height img))))

;;; (canvas-get-pixel img x y) -> rgb?
;;;  img : drawing?
;;;  x : integer?
;;;  y : integer?
;;; Returns the rgb value of the pixel at position \`(x, y)\` of \`canvas\`.
;;; @category color, image, pixel, rgb, pixel-map, canvas->pixels, pixels->canvas, canvas-set-pixels! 
(define-export canvas-get-pixel (js-var "canvas_canvasGetPixel"))

;;; (pixels? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is a vector of \`rgb\` values, the representation \`canvas->pixels\` produces and \`pixels->canvas\` consumes.
;;; @category image, pixel, typecheck, predicates, canvas->pixels, pixels->canvas
(define-export pixels? (js-var "canvas_pixelsQ"))

;;; (canvas->pixels canvas) -> pixels?
;;;  canvas : canvas?
;;; Returns the pixels of \`canvas\` as a vector of \`rgb\` values, read left-to-right and top-to-bottom. The result is a snapshot: changing it does not change \`canvas\`. Use \`canvas-set-pixels!\` to write pixels back.
;;; @category image, pixel-map, canvas-get-pixel, pixels->canvas, canvas-set-pixels! 
(define-export canvas->pixels (js-var "canvas_canvasToPixels"))

;;; (pixels->canvas pixels width height) -> canvas?
;;;  pixels : pixels?
;;;  width : integer?
;;;  height : integer?
;;; Returns a new canvas with the given \`pixels\` and dimensions \`width × height\`.
;;; @category image, pixel, pixel-map, canvas-get-pixel, canvas->pixels, canvas-set-pixels! 
(define-export pixels->canvas (js-var "canvas_pixelsToCanvas"))

;;; (canvas-set-pixels! canvas pixels) -> void?
;;;  canvas : canvas?
;;;  pixels : pixels?
;;; Sets the pixels of \`canvas\` to \`pixels\`, mutating it in place.
;;; @category canvas, image, mutation, pixel, predicates, pixel-map, canvas-get-pixel, canvas->pixels, pixels->canvas
(define-export canvas-set-pixels! (js-var "canvas_canvasSetPixels"))

;;; (canvas-width canvas) -> integer?
;;;  canvas : canvas?
;;; Returns the width of the canvas in pixels.
;;; @category canvas, image
(define-export canvas-width (js-var "canvas_canvasWidth"))

;;; (canvas-height canvas) -> integer?
;;;  canvas : canvas?
;;; Returns the height of the canvas in pixels.
;;; @category canvas, image
(define-export canvas-height (js-var "canvas_canvasHeight"))
`],[`lab`,`;;; (html? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is an HTML element.
(define-export html? (js-var "html_isElement"))

;;; (title text) -> html?
;;;  text : string?
;;; Returns a title element.
;;; @category formatting, html?, part, problem, description
(define-export title (js-var "lab_title"))

;;; (part text) -> html?
;;;  text : string?
;;; Returns a part element.
;;; @category formatting, html?, title, problem, description
(define-export part (js-var "lab_part"))

;;; (problem text) -> html?
;;;  text : string?
;;; Returns a problem element.
;;; @category formatting, html?, title, part, description
(define-export problem (js-var "lab_problem"))

;;; (description text) -> html?
;;;  text : string?
;;; Returns a description element.
;;; @category formatting, html?, title, part, problem
(define-export description (js-var "lab_description"))
`],[`music`,`;;; (dur? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is a duration.
;;; @category duration, music, predicates, sound, typecheck, dur
(define-export dur? (js-var "music_durQ"))

;;; (dur num den) -> dur?
;;;  num : integer?
;;;  den : integer?
;;; Creates a new duration object representing the ratio \`num/den\`.
;;; @category duration, music, sound, dur?
(define-export dur (js-var "music_dur"))

;;; (numerator dur) -> integer?
;;;  dur : dur?
;;; Returns the numerator of \`dur\`.
;;; @category duration, music, sound, denominator
(define-export numerator (js-var "music_numerator"))

;;; (denominator dur) -> integer?
;;;  dur : dur?
;;; Returns the denominator of \`dur\`.
;;; @category duration, music, sound, numerator
(define-export denominator (js-var "music_denominator"))

;;; (pitch? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only \`v\` is a valid pitch, a string denoting a pitch class, e.g., \`"Ab"\`.
;;; @category modifications, music, predicates, sound, typecheck, octave?
(define-export pitch? (js-var "music_isPitchClass"))

;;; (octave? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only \`v\` is a valid octave, an integer in the range (0, 10).
;;; @category modifications, music, predicates, sound, typecheck, pitch?
(define-export octave? (js-var "music_isOctave"))

;;; (note-value? n) -> boolean?
;;;  n : number?
;;; Returns \`#t\` if and only \`n\` is a valid MIDI note value (0--127).
;;; @category music, note, predicates, sound, typecheck, note
(define-export note-value? (js-var "music_isValidMidiNote"))

;;; (note midi-note dur) -> composition?
;;;  midi-note : note-value?
;;;  dur : dur?
;;; Creates a new composition consisting of a single note from the given MIDI note value and duration.
;;; @category music, note, sound, note-value?, composition?, empty, instrument, mod, note-event, note-freq, play-composition, repeat, rest, trigger
(define-export note (js-var "music_note"))

;;; (note-freq freq dur) -> composition?
;;;  freq : integer?
;;;   0 <= frequency <= 4000
;;;  dur : dur?
;;; Creates a new composition consisting of a single note of the given frequency and duration.
;;; @category music, note, sound, composition?, empty, instrument, mod, note, note-event, play-composition, repeat, rest, trigger
(define-export note-freq (js-var "music_noteFreq"))

;;; (repeat n comp) -> composition?
;;;  n : integer?
;;;   n >= 0
;;;  comp : composition?
;;; Creates a new composition formed by repeating \`comp\` \`n\` times sequentially.
;;; @category music, sound, composition?, empty, instrument, mod, note, note-event, note-freq, play-composition, rest, trigger
(define-export repeat (js-var "music_repeat"))

;;; (empty) -> composition?
;;; The empty composition.
;;; @category constants, music, note, sound, composition?, instrument, mod, note, note-event, note-freq, play-composition, repeat, rest, trigger
(define-export empty (js-var "music_empty"))

;;; (rest dur) -> composition?
;;;  dur : dur?
;;; Creates a new composition consisting of a single rest from the given duration.
;;; @category music, note, sound, composition?, empty, instrument, mod, note, note-event, note-freq, play-composition, repeat, trigger
(define-export rest (js-var "music_rest"))

;;; (trigger proc) -> composition?
;;;  proc : procedure?
;;;   a procedure that takes no arguments
;;; Creates a new composition that calls the function \`proc\` when played.
;;; @category constants, interactive, music, sound, composition?, empty, instrument, mod, note, note-event, note-freq, play-composition, repeat, rest
(define-export trigger (js-var "music_trigger"))

;;; (par & comp1) -> composition?
;;;  comp1 : composition?
;;; Creates a new composition that plays \`comp1\`, \`comp2\`, ..., in parallel.
;;; @category music, sound, pickup, seq
(define-export par (js-var "music_par"))

;;; (seq & comp1) -> composition?
;;;  comp1 : composition?
;;; Creates a new composition that plays \`comp1\`, \`comp2\`, ..., in sequence.
;;; @category music, sound, par, pickup
(define-export seq (js-var "music_seq"))

;;; (pickup c1 c2) -> composition?
;;;  c1 : composition?
;;;  c2 : composition?
;;; Creates a new composition that plays \`c2\` preceded by \`c1\`. \`c1\`'s duration is not factored into the duration of the overall composition.
;;; @category pickup, par, seq
(define-export pickup (js-var "music_pickup"))

;;; (mod? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only \`v\` is a valid modification.
;;; @category modifications, music, predicates, sound, typecheck, dynamics, mod, note-handlers, percussion, tempo
(define-export mod? (js-var "music_modQ"))

;;; (percussion) -> mod?
;;; A modification that switches playback to percussion mode (MIDI channel 9). In percussion mode, each note corresponds to one percussion instrument.
;;; @category constants, modifications, music, sound, load-percussion, dynamics, mod, mod?, note-handlers, tempo
(define-export percussion (js-var "music_percussion"))

;;; (tempo beat bpm) -> mod?
;;;  beat : dur?
;;;   the pulse of the tempo
;;;  bpm : number?
;;;   beats per minute
;;; A modification that plays the modified composition at the given \`beat\` and \`bpm\`.
;;; @category modifications, music, duration, sound, dynamics, mod, mod?, note-handlers, percussion
(define-export tempo (js-var "music_tempo"))

;;; (dynamics velocity) -> mod?
;;;  velocity : integer?
;;;   0 <= level <= 127
;;; A modification that plays the modified composition at the given MIDI \`velocity\` level. Note than a \`velocity\` of \`127\` corresponds to full volume for that note.
;;; @category modifications, music, sound, mod, mod?, note-handlers, percussion, tempo
(define-export dynamics (js-var "music_dynamics"))

;;; (instrument prog) -> composition?
;;;  prog : integer?
;;;   a valid MIDI program number (0--127)
;;; Creates a new composition that plays composition \`comp\` played with MIDI sound or program \`prog\`. See the "General MIDI" Wikipedia article for a complete list of MIDI program numbers to sound mappings. Additionally, you should call \`load-instrument\` at the top-level of your program to download the desired instrument's soundfont before using this function.
;;; @category instruments, music, sound, load-instrument, use-high-quality-instruments, composition?, empty, mod, note, note-event, note-freq, play-composition, repeat, rest, trigger
(define-export instrument (js-var "music_instrument"))

;;; (note-handlers handlers) -> mod?
;;;  handlers : vector?
;;; Create a new modification that plays the composition with the given note handlers. This modification should be used at the top-level of a composition as nested handlers will take precedence over outer handlers.
;;; @category music, note, sound, make-note-handlers, dynamics, mod, mod?, percussion, tempo
(define-export note-handlers (js-var "music_noteHandlers"))

;;; (mod kind comp) -> composition?
;;;  kind : mod?
;;;  comp : composition?
;;; Creates a new composition that plays \`comp\` with the given modification \`mod\`.
;;; @category modifications, music, sound, dynamics, mod?, note-handlers, percussion, tempo, play-composition
(define-export mod (js-var "music_mod"))

;;; (note-event id) -> composition?
;;;  id : any
;;; Creates a new zero-length composition that triggers an event with the given \`id\`.
;;; @category music, note, sound, composition?, empty, instrument, mod, note, note-freq, play-composition, repeat, rest, trigger
(define-export note-event (js-var "music_noteEvent"))

;;; (composition? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only \`v\` is a valid composition.
;;; @category music, predicates, sound, typecheck, empty, instrument, mod, note, note-event, note-freq, play-composition, repeat, rest, trigger
(define-export composition? (js-var "music_compositionQ"))

;;; (load-instrument prog) -> void?
;;;  prog : integer?
;;;   a valid MIDI program number (0--127)
;;; Downloads and loads the requested MIDI instrument soundfont.
;;; @category instruments, music, sound, instrument, use-high-quality-instruments
(define-export load-instrument (js-var "music_loadInstrument"))

;;; (load-percussion prog) -> void?
;;;  prog : integer?
;;;   a valid MIDI program number (0--127)
;;; Loads the requested percussion MIDI instrument soundfont.
;;; @category instruments, music, sound, percussion
(define-export load-percussion (js-var "music_loadPercussion"))

;;; (use-high-quality-instruments enable) -> void?
;;;  enable : boolean?
;;;   whether to use high-quality MIDI instruments
;;; Enables (or disables) the use of high-quality MIDI instruments. Note that high-quality instruments are much bigger and take longer to load.
;;; @category instruments, music, sound, instrument, load-instrument
(define-export use-high-quality-instruments (js-var "music_useHighQualityInstruments"))

;;; (make-note-handlers) -> vector?
;;; Makes an empty vector of note handlers appropriate for use with \`note-handler\` and \`on-note\`
;;; @category music, note, sound, note-handlers
(define-export make-note-handlers (js-var "music_makeNoteHandlers"))

;;; (play-composition comp) -> void?
;;;  comp : composition?
;;; Plays the given composition. Note that this function must be triggered from some user action on the screen, _e.g._, a button click. Otherwise, the browser will silently block audio playback.
;;; @category music, sound, composition?, empty, instrument, mod, note, note-event, note-freq, repeat, rest, trigger
(define-export play-composition (js-var "music_playComposition"))

;;; (wn) -> dur?
;;; A whole note duration (4/4).
;;; @category constants, duration, music, sound, hn, qn, en, sn, tn
(define-export wn (js-var "music_wn"))

;;; (hn) -> dur?
;;; A half note duration (2/4).
;;; @category constants, duration, music, sound, wn, qn, en, sn, tn
(define-export hn (js-var "music_hn"))

;;; (qn) -> dur?
;;; A quarter note duration (1/4).
;;; @category constants, music, note, sound, wn, hn, en, sn, tn
(define-export qn (js-var "music_qn"))

;;; (en) -> dur?
;;; An eighth note duration (1/8).
;;; @category constants, duration, music, sound, wn, hn, qn, sn, tn
(define-export en (js-var "music_en"))

;;; (sn) -> dur?
;;; A sixteenth note duration (1/16).
;;; @category constants, duration, music, sound, wn, hn, qn, en, tn
(define-export sn (js-var "music_sn"))

;;; (tn) -> dur?
;;; A thirty-secondth note duration (1/32).
;;; @category duration, music, sound, wn, hn, qn, en, sn
(define-export tn (js-var "music_tn"))
`],[`prelude`,`; \`apply\` is a first-class procedure backed by the ap-spread VM primitive
; (native implementation: prelude_apply in src/js/prelude/index.ts).
(define-export apply (js-var "prelude_apply"))

;;; (with-handler handler thunk) -> any?
;;;  handler : procedure?
;;;  thunk : procedure?
;;; Runs \`(thunk)\`. Returns its value if it completes normally; if it raises an
;;; error, calls \`(handler msg)\` with the error's message string and returns that
;;; instead. \`handler\`/\`thunk\` being procedures is enforced by this contract,
;;; which runs before the handler is installed. Native impl: prelude_withHandler.
;;; @category function
(define-export with-handler (js-var "prelude_withHandler"))

; \`error\` raises a runtime error with the given message; a first-class
; procedure backed by prelude_error.
(define-export error (js-var "prelude_error"))

;;; (and☀︎ v1 v2) -> boolean?
;;;  v1 : any
;;;  v2 : any
;;; Returns \`#t\` if and only \`v1\` and \`v2\` are both true.
;;; @category boolean/logic
(define-export and☀︎ (js-var "prelude_equalQ"))

;;; (if☀︎ v1 v2) -> any?
;;;  v1 : any
;;;  v2 : any
;;; Executes \`v2\` if \`v1\` is true
;;; @category boolean/logic
(define-export if☀︎ (js-var "prelude_equalQ"))

;;; (or☀︎ v1 v2) -> boolean?
;;;  v1 : any
;;;  v2 : any
;;; Returns \`#t\` if either \`v1\` or \`v2\` are true.
;;; @category boolean/logic
(define-export or☀︎ (js-var "prelude_equalQ"))

;;; (apply☀︎ v1 v2) -> any?
;;;  v1 : function
;;;  v2 : list
;;; Applies function \`v1\` to every element of \`v2\`
;;; @category list manipulation
(define-export apply☀︎ (js-var "prelude_equalQ"))

;;; (equal? v1 v2) -> boolean?
;;;  v1 : any
;;;  v2 : any
;;; Returns \`#t\` if and only \`v1\` and \`v2\` are (structurally) equal values.
;;; @category predicates
(define-export equal? (js-var "prelude_equalQ"))

;;; (number? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only \`v\` is a number.
;;; @category math, comparator, typecheck, predicates, even?, integer?, negative?, odd?, positive?, real?, zero?
(define-export number? (js-var "prelude_numberQ"))

;;; (real? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only \`v\` is a real number.
;;; @category math, comparator, typecheck, predicates, even?, integer?, negative?, number?, odd?, positive?, zero?
(define-export real? (js-var "prelude_realQ"))

;;; (integer? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only \`v\` is an integer.
;;; @category math, comparator, typecheck, predicates, boolean?, char?, string?, even?, negative?, number?, odd?, positive?, real?, zero?
(define-export integer? (js-var "prelude_integerQ"))

;;; (nan? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only \`v\` is the number \`NaN\`.
;;; @category math, comparator, typecheck, predicates, min, max, >=, >, <=, <, = 
(define-export nan? (js-var "prelude_nanQ"))

;;; (< v1 v2) -> boolean?
;;;  v1 : number?
;;;  v2 : number?
;;; Returns \`#t\` if and only \`v1\` is strictly less than \`v2\`.
;;; @category math, comparator, min, max, nan?, >=, >, <=, =
(define-export < (js-var "prelude_lt"))

;;; (<= v1 v2) -> boolean?
;;;  v1 : number?
;;;  v2 : number?
;;; Returns \`#t\` if and only \`v1\` is less than or equal to \`v2\`.
;;; @category math, comparator, min, max, nan?, >=, >, <, =
(define-export <= (js-var "prelude_leq"))

;;; (> v1 v2) -> boolean?
;;;  v1 : number?
;;;  v2 : number?
;;; Returns \`#t\` if and only \`v1\` is strictly greater than \`v2\`.
;;; @category math, comparator, min, max, nan?, >=, <=, <, =
(define-export > (js-var "prelude_gt"))

;;; (>= v1 v2) -> boolean?
;;;  v1 : number?
;;;  v2 : number?
;;; Returns \`#t\` if and only \`v1\` is greater than or equal to \`v2\`.
;;; @category math, comparator, min, max, nan?, >, <=, <, =
(define-export >= (js-var "prelude_geq"))

;;; (= v1 v2) -> boolean?
;;;  v1 : number?
;;;  v2 : number?
;;; Returns \`#t\` if and only \`v1\` is equal to \`v2\`.
;;; @category math, comparator, min, max, nan?, >=, >, <=, <
(define-export = (js-var "prelude_eq"))

;;; (=-eps n) -> procedure?
;;;  n : number?
;;; Returns a function that takes two numbers \`x\` and \`y\` as input returns \`#t\` if \`|x - y| < n\`.
;;; @category function composition, all-of, any-of, compose, o, |>
(define-export =-eps (js-var "prelude_equalsEps"))

;;; (zero? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only \`v\` is zero.
;;; @category comparator, math, predicates, typecheck, even?, integer?, negative?, number?, odd?, positive?, real?
(define-export zero? (js-var "prelude_zeroQ"))

;;; (positive? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only \`v\` is positive.
;;; @category math, comparator, typecheck, predicates, even?, integer?, negative?, number?, odd?, real?, zero?
(define-export positive? (js-var "prelude_positiveQ"))

;;; (negative? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only \`v\` is negative.
;;; @category math, comparator, typecheck, predicates, even?, integer?, number?, odd?, positive?, real?, zero?
(define-export negative? (js-var "prelude_negativeQ"))

;;; (odd? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only \`v\` is odd.
;;; @category math, comparator, typecheck, predicates, even?, integer?, negative?, number?, positive?, real?, zero?
(define-export odd? (js-var "prelude_oddQ"))

;;; (even? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only \`v\` is even.
;;; @category math, comparator, predicates, integer?, negative?, number?, odd?, positive?, real?, zero?
(define-export even? (js-var "prelude_evenQ"))

;;; (max & v) -> number?
;;;  v : number?
;;; Returns the maximum of the given numbers.
;;; @category math, comparator, min, nan?, >=, >, <=, <, =
(define-export max (js-var "prelude_max"))

;;; (min & v) -> number?
;;;  v : number?
;;; Returns the minimum of the given numbers.
;;; @category math, comparator, max, nan?, >=, >, <=, <, =
(define-export min (js-var "prelude_min"))

;;; (+ & v1) -> number?
;;;  v1 : number?
;;; Returns the sum of \`v1\`, \`v2\`, ... .
;;; @category math, algebra, -, *, /, modulo, quotient, remainder 
(define-export + (js-var "prelude_plus"))

;;; (- & v1) -> number?
;;;  v1 : number?
;;; Returns the difference of \`v1\`, \`v2\`, ... .
;;; @category math, algebra, +, *, /, modulo, quotient, remainder
(define-export - (js-var "prelude_minus"))

;;; (* & v1) -> number?
;;;  v1 : number?
;;; Returns the product of \`v1\`, \`v2\`, ... .
;;; @category math, algebra, +, -, /, modulo, quotient, remainder
(define-export * (js-var "prelude_times"))

;;; (/ & v1) -> number?
;;;  v1 : number?
;;; Returns the quotient of \`v1\`, \`v2\`, ... .
;;; @category math, algebra, +, -, *, modulo, quotient, remainder
(define-export / (js-var "prelude_div"))

;;; (abs v) -> number?
;;;  v : number?
;;; Returns the absolute value of \`v\`.
;;; @category math, algebra, ceiling, floor, round, truncate
(define-export abs (js-var "prelude_abs"))

;;; (quotient v1 v2) -> number?
;;;  v1 : integer?
;;;  v2 : integer?
;;; Returns the quotient of \`v1\` and \`v2\`, _i.e._, the whole number part of \`v1 / v2\`.
;;; @category math, algebra, +, -, *, /, modulo, remainder
(define-export quotient (js-var "prelude_quotient"))

;;; (remainder v1 v2) -> number?
;;;  v1 : integer?
;;;  v2 : integer?
;;; Returns the remainder of \`v1\` and \`v2\`, _i.e._, the remainder of \`v1 / v2\`.
;;; @category math, algebra, +, -, *, /, modulo, quotient
(define-export remainder (js-var "prelude_remainder"))

;;; (modulo v1 v2) -> number?
;;;  v1 : number?
;;;  v2 : number?
;;; Returns \`k = n - d * q\` where \`q\` is the integer such that \`k\` has the same sign as the divisor \`d\` while being as close to 0 as possible. (Source: [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder).)
;;; @category math, algebra, +, -, *, /, quotient, remainder
(define-export modulo (js-var "prelude_modulo"))

;;; (floor v) -> integer?
;;;  v : number?
;;; Returns the largest integer less than or equal to \`v\`.
;;; @category math, algebra, abs, ceiling, round, truncate
(define-export floor (js-var "prelude_floor"))

;;; (ceiling v) -> integer?
;;;  v : number?
;;; Returns the smallest integer greater than or equal to \`v\`.
;;; @category math, algebra, abs, floor, round, truncate
(define-export ceiling (js-var "prelude_ceiling"))

;;; (truncate v) -> integer?
;;;  v : number?
;;; Returns the integer closest to \`v\` less than or equal to \`v\`.
;;; @category math, algebra, abs, ceiling, floor, round
(define-export truncate (js-var "prelude_truncate"))

;;; (round v) -> integer?
;;;  v : number?
;;; Returns the integer closest to \`v\`.
;;; @category math, algebra, abs, ceiling, floor, truncate
(define-export round (js-var "prelude_round"))

;;; (square v) -> number?
;;;  v : number?
;;; Returns the square of \`v\`.
;;; @category math, algebra, exp, expt, sqrt, log
(define-export square (js-var "prelude_square"))

;;; (sqrt v) -> number?
;;;  v : number?
;;; Returns the square root of \`v\`.
;;; @category math, algebra, exp, expt, square, log
(define-export sqrt (js-var "prelude_sqrt"))

;;; (expt x y) -> number?
;;;  x : number?
;;;  y : number?
;;; Returns \`x\` raised to the power of \`y\`.
;;; @category math, algebra, exp, square, sqrt, log  
(define-export expt (js-var "prelude_expt"))

;;; (number->string v) -> string?
;;;  v : number?
;;; Returns the string representation of \`v\`.
;;; @category string, char->integer, digit-value, integer->char, string->number
(define-export number->string (js-var "prelude_numberToString"))

;;; (string->number s) -> number?
;;;  s : string?
;;; Returns the number denoted by \`s\`, or \`#f\` if \`s\`
;;; does not denote a number.
;;; @category string, number->string, string->list, string->words, string->vector, char->integer, digit-value, integer->char
(define-export string->number (js-var "prelude_stringToNumber"))

;;; (exp v) -> number?
;;;  v : number?
;;; Returns the exponential of \`v\`.
;;; @category math, algebra, expt, square, sqrt, log
(define-export exp (js-var "prelude_exp"))

;;; (log v) -> number?
;;;  v : number?
;;; Returns the natural logarithm of \`v\`.
;;; @category math, algebra, exp, expt, square, sqrt
(define-export log (js-var "prelude_log"))

;;; (sin v) -> number?
;;;  v : number?
;;; Returns the sine of \`v\`.
;;; @category math, trigonometry, acos, asin, atan, cos, tan, pi, π  
(define-export sin (js-var "prelude_sin"))

;;; (cos v) -> number?
;;;  v : number?
;;; Returns the cosine of \`v\`.
;;; @category math, trigonometry, acos, asin, atan, sin, tan, pi, π  
(define-export cos (js-var "prelude_cos"))

;;; (tan v) -> number?
;;;  v : number?
;;; Returns the tangent of \`v\`.
;;; @category math, trigonometry, acos, asin, atan, cos, sin, pi, π  
(define-export tan (js-var "prelude_tan"))

;;; (asin v) -> number?
;;;  v : number?
;;; Returns the arc sine of \`v\`.
;;; @category math, trigonometry, acos, atan, cos, sin, tan, pi, π  
(define-export asin (js-var "prelude_asin"))

;;; (acos v) -> number?
;;;  v : number?
;;; Returns the arc cosine of \`v\`.
;;; @category math, trigonometry, asin, atan, cos, sin, tan, pi, π  
(define-export acos (js-var "prelude_acos"))

;;; (atan v) -> number?
;;;  v : number?
;;; Returns the arc tangent of \`v\`.
;;; @category math, trigonometry, acos, asin, cos, sin, tan, pi, π  
(define-export atan (js-var "prelude_atan"))

;;; (not v) -> boolean?
;;;  v : boolean?
;;; Returns \`#t\` if and only \`v\` is \`#f\`.
;;; @category boolean/logic, and, nand, nor, xor, or
(define-export not (js-var "prelude_not"))

;;; (boolean? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only \`v\` is a boolean.
;;; @category typecheck, boolean/logic, predicates, char?, string?, integer?
(define-export boolean? (js-var "prelude_booleanQ"))

;;; (nand & v1) -> boolean?
;;;  v1 : boolean?
;;; Equivalent to \`(not (and v1 v2 ...))\`.
;;; @category boolean/logic, and, nor, not, xor, or
(define-export nand (js-var "prelude_nand"))

;;; (nor & v1) -> boolean?
;;;  v1 : boolean?
;;; Equivalent to \`(not (or v1 v2 ...))\`.
;;; @category boolean/logic, and, nand, not, xor, or
(define-export nor (js-var "prelude_nor"))

;;; (implies v1 v2) -> boolean?
;;;  v1 : boolean?
;;;  v2 : boolean?
;;; Equivalent to \`(if v1 v2 #t)\`.
;;; @category boolean/logic, predicates
(define-export implies (js-var "prelude_implies"))

;;; (xor v1 v2) -> boolean?
;;;  v1 : boolean?
;;;  v2 : boolean?
;;; Equivalent to \`(or (and v1 (not v2)) (and (not v1) v2))\`.
;;; @category boolean/logic, and, nand, nor, not, or
(define-export xor (js-var "prelude_xor"))

;;; (any-of & f1) -> procedure?
;;;  f1 : any
;;;   procedure? that takes a value as input and returns a boolean.
;;; Returns a unary function that returns \`#t\` if and only one of \`f1\`, \`f2\`, ... is \`#t\` for its argument.
;;; @category function composition, boolean/logic, all-of, compose, =-eps, o, |>
(define-export any-of
  (lambda (f & fs)
    (lambda (v)
      (some-satisfy? (lambda (g) (g v)) (cons f fs)))))

;;; (all-of & f1) -> procedure?
;;;  f1 : any
;;;   procedure? that takes a value as input and returns a boolean.
;;; Returns a unary function that returns \`#t\` if and only all of \`f1\`, \`f2\`, ... are \`#t\` for its argument.
;;; @category function composition, boolean/logic, any-of, compose, =-eps, o, |>
(define-export all-of
  (lambda (f & fs)
    (lambda (v)
      (all-satisfy? (lambda (g) (g v)) (cons f fs)))))

;;; (pair? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only \`v\` is a pair.
;;; @category typecheck, predicates, list?, null?, procedure?, ref?, rex?, vector?, void?
(define-export pair? (js-var "prelude_pairQ"))

;;; (list-of p) -> procedure?
;;;  p : procedure?
;;;   returns \`#t\` if its argument is of the desired type
;;; Returns a new predicate that tests whether its argument is a list of elements that satisfy the predicate \`p\`.
;;; @category list, function composition, association list, apply, filter, fold, fold-left, fold-right, for-range, map, reduce, reduce-right
(define-export list-of
  (lambda (p)
    (lambda (l)
      (and (list? l) (all-satisfy? p l)))))

;; N.B., deliberately plain Scamper (not js-var-backed): the contract-check
;; codegen (contract.ts) needs to call an arbitrary predicate -- possibly a
;; user-defined closure -- once per element of a variadic argument's
;; collected rest-list, and JS code can no longer call back into Scamper
;; (Closure.call/callScamperFn are both disabled). Written in Scamper, the
;; call to pred? is ordinary application, so it works uniformly whether
;; pred? is a closure or a js-var-backed primitive.
;; N.B., left undocumented like "any", for the same reason: it's
;; compiler-support infrastructure, not a documented user-facing binding.
(define-export all-satisfy?
  (lambda (pred? lst)
    (if (null? lst)
        #t
        (if (pred? (car lst))
            (all-satisfy? pred? (cdr lst))
            #f))))

;;; (cons v1 v2) -> pair?
;;;  v1 : any
;;;  v2 : any
;;; Returns a new cons cell containing \`v1\` and \`v2\`.
;;; @category list, list manipulation, association list, car, cdr
(define-export cons (js-var "prelude_cons"))

;;; (pair v1 v2) -> pair?
;;;  v1 : any
;;;  v2 : any
;;; Returns a new pair containing \`v1\` and \`v2\`.
;;; @category list, list creation, list, string, regex, vector, void
(define-export pair (js-var "prelude_pair"))

;; N.B., left undocumented, like all-satisfy?: it's contract-support
;; infrastructure (or/p's fold over its predicates), not a user-facing
;; binding. Documenting it would make contract.ts wrap it in a checking
;; lambda whose own checks call all-satisfy? -> car/cdr -> back into the
;; contracted car/cdr, so it MUST stay undocumented to avoid that cycle.
;; Uses match (not car/cdr) to walk the list for the same reason: match
;; decomposes via the runtime's pMatch, so it never reaches contracted car/cdr.
(define-export some-satisfy?
  (lambda (pred? lst)
    (match lst
      [null #f]
      [(cons x rest) (if (pred? x) #t (some-satisfy? pred? rest))])))

;; N.B., or/p combines predicates disjunctively: (or/p p q) is a predicate
;; that holds when p OR q holds. Written in plain Scamper (not a js-var) so
;; that applying each predicate is ordinary Scamper application -- JS code can
;; no longer call back into Scamper (Closure.call/callScamperFn are disabled).
;; Left UNDOCUMENTED for the same reason as some-satisfy?: a docstring would
;; make contract.ts wrap it, and that wrapper's checks would recurse through
;; car/cdr into or/p (which car/cdr's own contract references), re-creating the
;; cycle. Requires at least one predicate: the arglist grammar has no
;; zero-fixed-param rest form, and or/p over no predicates is never needed.
(define-export or/p
  (lambda (first & rest)
    (lambda (x) (some-satisfy? (lambda (p) (p x)) (cons first rest)))))

;;; (car v) -> any
;;;  v : (or/p pair? nonempty-list?)
;;; Returns the first element of \`v\`.
;;; @category list, list manipulation, association list, cdr, cons
(define-export car (js-var "prelude_car"))

;;; (cdr v) -> any
;;;  v : (or/p pair? nonempty-list?)
;;; Returns the second element of \`v\`.
;;; @category list, list manipulation, association list, car, cons
(define-export cdr (js-var "prelude_cdr"))

;;; (null? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only \`v\` is the empty list.
;;; @category list, association list, typecheck, predicates, pair?, list?, procedure?, ref?, vector?, void?
(define-export null? (js-var "prelude_nullQ"))

;;; (list? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only \`v\` is a list.
;;; @category list, association list, typecheck, predicates, pair?, null?, procedure?, ref?, rex?, vector?, void?
(define-export list? (js-var "prelude_listQ"))

;;; (nonempty-list? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is a non-empty list.
;;; @category typecheck, predicates
(define-export nonempty-list? (js-var "prelude_nonemptyListQ"))

;;; (list & v1) -> list?
;;;  v1 : any
;;; Returns a new list containing \`v1\`, \`v2\`, ... .
;;; @category list, list creation, association list, pair, string, regex, vector, void
(define-export list (js-var "prelude_list"))

;;; (make-list n v) -> list?
;;;  n : integer?
;;;  v : any
;;; Returns a new list containing \`n\` copies of \`v\`.
;;; @category list, list creation, association list, make-string, make-vector, append, list-drop, list-tail, list-take, range, reverse, sort
(define-export make-list (js-var "prelude_makeList"))

;;; (length v) -> integer?
;;;  v : list?
;;; Returns the length of \`v\`.
;;; @category list, list manipulation, index-of, range, string-length, vector-length, vector-range, vector-ref 
(define-export length (js-var "prelude_length"))

;;; (append & l1) -> list?
;;;  l1 : list?
;;; Returns a new list containing the elements of lists \`l1\`, \`l2\`, ... in sequence.
;;; @category list, list manipulation, list-drop, list-tail, list-take, make-list, range, reverse, sort
(define-export append (js-var "prelude_append"))

;;; (reverse l) -> list?
;;;  l : list?
;;; Returns a new list containing the elements of \`l\` in reverse order.
;;; @category list, list manipulation, append, list-drop, list-tail, list-take, make-list, make-string, range, sort
(define-export reverse (js-var "prelude_reverse"))

;;; (list-tail l k) -> list?
;;;  l : list?
;;;  k : integer?
;;;   0 <= k <= (length l)
;;; Returns \`l\` but with the first \`k\` elements of \`l\` omitted.
;;; @category list, list manipulation, association list, append, list-drop, list-take, make-list, range, reverse, sort
(define-export list-tail (js-var "prelude_listTail"))

;;; (list-take l k) -> list?
;;;  l : list?
;;;  k : integer?
;;;   0 <= k <= (length l)
;;; Returns a new list containing the first \`k\` elements of \`l\`.
;;; @category list, list manipulation, association list, append, list-drop, list-tail, make-list, range, reverse, sort
(define-export list-take (js-var "prelude_listTake"))

;;; (list-drop l k) -> list?
;;;  l : list?
;;;  k : integer?
;;;   0 <= k <= (length l)
;;; An alias for \`(list-tail l k)\`.
;;; @category list, list manipulation, association list, append, list-tail, list-take, make-list, range, reverse, sort
(define-export list-drop (js-var "prelude_listDrop"))

;;; (list-ref l n) -> any
;;;  l : list?
;;;  n : integer?
;;;   0 <= n < (length l)
;;; Returns the \`n\`th element of \`l\`.
;;; @category list, association list, assoc-ref, deref, ref, ref-set!, string-ref
(define-export list-ref (js-var "prelude_listRef"))

;;; (index-of v l) -> integer?
;;;  v : any
;;;  l : list?
;;; Returns the index of the first occurrence of \`v\` in \`l\` or \`-1\` if \`v\` is not in \`l\`.
;;; @category list, list manipulation, association list, range, string-length, vector-length, vector-range, vector-ref 
(define-export index-of (js-var "prelude_indexOf"))

;;; (assoc-key? k l) -> any
;;;  k : any
;;;  l : list?
;;;   an association list
;;; Returns \`#t\` if \`k\` is a key in association list \`l\`.
;;; @category list, list manipulation, association list, predicates, assoc-ref, assoc-set
(define-export assoc-key? (js-var "prelude_assocKey"))

;;; (assoc-ref k l) -> any
;;;  k : any
;;;  l : list?
;;;   an association list
;;; Returns the value associated with key \`k\` in association list \`l\`.
;;; @category list, list manipulation, association list, deref, list-ref, ref, ref-set!, string-ref, assoc-key?
(define-export assoc-ref (js-var "prelude_assocRef"))

;;; (assoc-set k v l) -> list?
;;;  k : any
;;;  v : any
;;;  l : list?
;;;   an association list
;;; Returns a new association list containing the same key-value pairs as \`l\` except that \`k\` is associated with \`v\`.
;;; @category list, list manipulation, association list, assoc-key?, assoc-ref
(define-export assoc-set (js-var "prelude_assocSet"))

;; N.B., internal helper for sort: merges two lists that are each already
;; sorted by lt? into one sorted list. Undocumented (like all-satisfy?) so the
;; contract-check codegen leaves it alone. Ties favor xs (the left list) to
;; keep sort stable.
(define-export sort-merge
  (lambda (lt? xs ys)
    (cond
      [(null? xs) ys]
      [(null? ys) xs]
      [(lt? (car ys) (car xs)) (cons (car ys) (sort-merge lt? xs (cdr ys)))]
      [else (cons (car xs) (sort-merge lt? (cdr xs) ys))])))

;;; (sort l lt?) -> list?
;;;  l : list?
;;;  lt? : procedure?
;;;   returns \`#t\` if the first arg is less than the second
;;; Returns a new list containing the elements of \`l\` sorted in ascending order according to the comparison function \`lt?\`.
;;; @category list, list manipulation, association list, append, list-drop, list-tail, list-take, make-list, make-string, range, reverse
(define-export sort
  (lambda (l lt?)
    (if (<= (length l) 1)
        l
        (let ([mid (quotient (length l) 2)])
          (sort-merge lt?
                      (sort (list-take l mid) lt?)
                      (sort (list-drop l mid) lt?))))))

;;; (char? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only \`v\` is a character.
;;; @category typecheck, char, predicates, boolean?, string?, integer?
(define-export char? (js-var "prelude_charQ"))

;;; (digit-value c) -> integer?
;;;  c : char?
;;; Returns the numeric value of \`c\` if \`c\` is a decimal digit (0-10), otherwise raises an error.
;;; @category typecheck, char, char->integer, integer->char, number->string, string->number
(define-export digit-value (js-var "prelude_digitalValue"))

;;; (char->integer c) -> integer?
;;;  c : char?
;;; Returns the codepoint value of character \`c\`.
;;; @category char, digit-value, integer->char, number->string, string->number
(define-export char->integer (js-var "prelude_charToInteger"))

;;; (integer->char n) -> char?
;;;  n : integer?
;;; Returns the character with codepoint value \`n\`.
;;; @category char, char->integer, digit-value, number->string, string->number
(define-export integer->char (js-var "prelude_integerToChar"))

;;; (char-upcase c) -> char?
;;;  c : char?
;;; Returns the upper-case equivalent of \`c\`.
;;; @category char, char-downcase, char-foldcase
(define-export char-upcase (js-var "prelude_charUpcase"))

;;; (char-downcase c) -> char?
;;;  c : char?
;;; Returns the lower-case equivalent of \`c\`.
;;; @category char, char-upcase, char-foldcase
(define-export char-downcase (js-var "prelude_charDowncase"))

;;; (char-foldcase c) -> char?
;;;  c : char?
;;; Returns the case-folded equivalent of \`c\`. This is a version of \`c\` that is appropriate for case-insensitive comparison.
;;; @category char, char-upcase, char-downcase
(define-export char-foldcase (js-var "prelude_charFoldcase"))

;;; (string? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only \`v\` is a string.
;;; @category typecheck, string, predicates, boolean?, char?, integer? 
(define-export string? (js-var "prelude_stringQ"))

;;; (make-string k c) -> string?
;;;  k : integer?
;;;  c : char?
;;; Returns a string of length \`k\` with each character set to \`c\`.
;;; @category string, make-list, make-vector, string-append, string-map
(define-export make-string (js-var "prelude_makeString"))

;;; (string & c1) -> string?
;;;  c1 : char?
;;; Returns a string consisting of the characters \`c1\`, \`c2\`, ...
;;; @category string, list, pair, rex, vector
(define-export string (js-var "prelude_string"))

;;; (string-length v) -> integer?
;;;  v : string?
;;; Returns the length of \`v\`.
;;; @category string, index-of, length, range, string-length, vector-range, vector-ref 
(define-export string-length (js-var "prelude_stringLength"))

;;; (string-ref s n) -> char?
;;;  s : string?
;;;  n : integer?
;;; Returns the character at index \`n\` of string \`s\`.
;;; @category string, assoc-ref, deref, list-ref, ref, ref-set!
(define-export string-ref (js-var "prelude_stringRef"))

;;; (string-upcase s) -> string?
;;;  s : string?
;;; Returns the upper-case version of \`s\`.
;;; @category string, string-downcase, string-foldcase, substring, string-split, string-split-vector
(define-export string-upcase (js-var "prelude_stringUpcase"))

;;; (string-downcase s) -> string?
;;;  s : string?
;;; Returns the lower-case version of \`s\`.
;;; @category string, string-upcase, string-foldcase, substring, string-split, string-split-vector
(define-export string-downcase (js-var "prelude_stringDowncase"))

;;; (string-foldcase s) -> string?
;;;  s : string?
;;; Returns the case-folded version of \`s\`. This is a version of \`s\` that is appropriate for case-insensitive comparison.
;;; @category string, string-downcase, string-upcase, substring, string-split, string-split-vector
(define-export string-foldcase (js-var "prelude_stringFoldcase"))

;;; (substring s start end) -> string?
;;;  s : string?
;;;  start : integer?
;;;  end : integer?
;;; Returns the substring of \`s\` from index \`start\` (inclusive) to index \`end\` (exclusive).
;;; @category string, string-downcase, string-upcase, string-foldcase, string-split, string-split-vector
(define-export substring (js-var "prelude_substring"))

;;; (string-append & s1) -> string?
;;;  s1 : string?
;;; Returns a string made by joining \`s1\`, \`s2\`, ... together.
;;; @category string, append, make-string, range, string-map
(define-export string-append (js-var "prelude_stringAppend"))

;;; (string->list s) -> list?
;;;  s : string?
;;; Returns a list of the characters in \`s\`.
;;; @category list, list creation, string, list->string, string->number, string->words, string->vector
(define-export string->list (js-var "prelude_stringToList"))

;;; (list->string l) -> string?
;;;  l : list?
;;; Returns a string made by joining the characters in \`l\` together.
;;; @category list, list manipulation, association list, string->list, list->vector
(define-export list->string (js-var "prelude_listToString"))

;;; (string->vector s) -> vector?
;;;  s : string?
;;; Returns a vector of the characters in \`s\`.
;;; @category string, vectors, vector->string, string->list, string->number, string->words
(define-export string->vector (js-var "prelude_stringToVector"))

;;; (vector->string v) -> string?
;;;  v : vector?
;;; Returns a string made by joining the characters in \`v\` together.
;;; @category vectors, string->vector, vector->list
(define-export vector->string (js-var "prelude_vectorToString"))

;;; (string-contains s1 s2) -> boolean?
;;;  s1 : string?
;;;  s2 : string?
;;; Returns \`#t\` if and only if string \`s1\` contains string \`s2\`.
;;; @category string, string=?, string>=?, string>?, string<=?, string<?, string-ci=?, string-ci>=?, string-ci>?, string-ci<=?, string-ci<?
(define-export string-contains (js-var "prelude_stringContains"))

;;; (string-split s sep) -> list?
;;;  s : string?
;;;  sep : string?
;;; Returns a list of strings obtained by splitting \`s\` at occurrences of \`sep\`.
;;; @category string, string-downcase, string-upcase, string-foldcase, substring, string-split-vector
(define-export string-split (js-var "prelude_stringSplit"))

;;; (string-split-vector s sep) -> vector?
;;;  s : string?
;;;  sep : string?
;;; Returns a vector of strings obtained by splitting \`s\` at occurrences of \`sep\`.
;;; @category string, vectors, string-downcase, string-upcase, string-foldcase, substring, string-split 
(define-export string-split-vector (js-var "prelude_stringSplitVector"))

;;; (vector? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only \`v\` is a vector.
;;; @category typecheck, vectors, predicates, pair?, list?, null?, procedure?, ref?, rex?, void?
(define-export vector? (js-var "prelude_vectorQ"))

;;; (vector & v1) -> vector?
;;;  v1 : any
;;; Returns a vector consisting of the values \`v1\`, \`v2\`, ...
;;; @category vectors, list, pair, string, regex, void
(define-export vector (js-var "prelude_vector"))

;;; (make-vector k v) -> vector?
;;;  k : integer?
;;;  v : any
;;; Returns a vector of length \`k\` with each element set to \`v\`.
;;; @category vectors, make-list, make-string
(define-export make-vector (js-var "prelude_makeVector"))

;;; (vector-length v) -> integer?
;;;  v : vector?
;;; Returns the length of vector \`v\`.
;;; @category vectors, vector-range, vector-ref, string-length, index-of, length, range
(define-export vector-length (js-var "prelude_vectorLength"))

;;; (vector-ref v n) -> any
;;;  v : vector?
;;;  n : integer?
;;;   a valid index into v
;;; Returns the value at index \`n\` of vector \`v\`.
;;; @category vectors, index-of, length, range, string-length, vector-length, vector-range
(define-export vector-ref (js-var "prelude_vectorRef"))

;;; (vector-set! v n x) -> void?
;;;  v : vector?
;;;  n : integer?
;;;   a valid index into v
;;;  x : any
;;; Sets the value at index \`n\` of vector \`v\` to \`x\`.
;;; @category vectors, mutation, predicates, vector-append, vector-fill!, vector-filter, vector-for-each, vector-map, vector-map!
(define-export vector-set! (js-var "prelude_vectorSet"))

;;; (vector-fill! v x) -> void?
;;;  v : vector?
;;;  x : any
;;; Sets each element of vector \`v\` to \`x\`.
;;; @category vectors, mutation, predicates, vector-append, vector-filter, vector-for-each, vector-map, vector-map!, vector-set!
(define-export vector-fill! (js-var "prelude_vectorFill"))

;;; (vector->list v) -> list?
;;;  v : vector?
;;; Returns a list consisting of the values in vector \`v\`.
;;; @category list, list creation, vectors, list->vector, vector->string
(define-export vector->list (js-var "prelude_vectorToList"))

;;; (list->vector l) -> vector?
;;;  l : list?
;;; Returns a vector consisting of the values in list \`l\`.
;;; @category list, list manipulation, association list, vectors, list->vector, vector->list
(define-export list->vector (js-var "prelude_listToVector"))

;;; (vector-range & args) -> vector?
;;;  args : integer?
;;; Can be called with one, two, or three arguments, all of which are integers.
;;; (vector-range end) returns a vector containing the numbers from 0 to \`end\` (exclusive).
;;; (vector-range beg end) returns a vector containing the numbers from \`beg\` to \`end\`
;;; (exclusive). (vector-range beg end step) returns a vector containing the numbers from
;;; \`beg\` to \`end\` (exclusive) with a step size of \`step\`. \`step\` must be non-zero
;;; to avoid an infinite loop.
;;; @category vectors,  index-of, length, range, string-length, vector-length, vector-ref 
(define-export vector-range (js-var "prelude_vectorRange"))

;;; (vector-append & v1) -> vector?
;;;  v1 : vector?
;;; Returns a new vector containing the elements of \`v1\`, ..., \`vk\` in order.
;;; @category vectors, vector-fill!, vector-filter, vector-for-each, vector-map, vector-map!, vector-set!
(define-export vector-append (js-var "prelude_vectorAppend"))

;;; (procedure? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only \`v\` is a procedure.
;;; @category typecheck, predicates, pair?, list?, null?, ref?, rex?, vector?, void?
(define-export procedure? (js-var "prelude_procedureQ"))

;;; (string-map f s) -> string?
;;;  f : procedure?
;;;  s : string?
;;; Returns a new string containing the results of applying \`f\` to each character of \`s\`.
;;; @category string, make-string, string-append, map, vector-map, vector-map!
(define-export string-map
  (lambda (f s)
    (list->string (map f (string->list s)))))

;; N.B., internal helpers for n-ary map: given a list of lists, collect the
;; cars (heads) or cdrs (tails) of each. Undocumented (like all-satisfy?) so
;; the contract-check codegen leaves them alone.
(define-export lists-cars
  (lambda (lsts)
    (if (null? lsts)
        null
        (cons (car (car lsts)) (lists-cars (cdr lsts))))))

(define-export lists-cdrs
  (lambda (lsts)
    (if (null? lsts)
        null
        (cons (cdr (car lsts)) (lists-cdrs (cdr lsts))))))

;;; (map f & l) -> list?
;;;  f : procedure?
;;;  l : list?
;;; Returns a new list containing the results of applying \`f\` to each element of \`l\`. When several lists are given, \`f\` is applied element-wise across them and all lists must have the same length.
;;; @category list, list manipulation, association list, reduce, reduce-right, set-maximum-recursion-depth!, string-map, vector-map, vector-map!
(define-export map
  (lambda (f & lsts)
    (cond
      [(null? lsts) null]
      [(some-satisfy? null? lsts)
       (if (all-satisfy? null? lsts)
           null
           (error "map: all lists must have the same length"))]
      [else (cons (apply f (lists-cars lsts))
                  (apply map (cons f (lists-cdrs lsts))))])))

;;; (filter f l) -> list?
;;;  f : procedure?
;;;  l : list?
;;; Returns a new list containing the elements of \`l\` for which \`f\` returns \`#t\`.
;;; @category list, list manipulation, association list, apply, fold, fold-left, fold-right, for-range, list-of, map, reduce, reduce-right
(define-export filter
  (lambda (f l)
    (cond
      [(null? l) null]
      [(f (car l)) (cons (car l) (filter f (cdr l)))]
      [else (filter f (cdr l))])))

;;; (fold f v l) -> any
;;;  f : procedure?
;;;  v : any
;;;  l : list?
;;; Returns the result of accumulating the result of applying \`f\` to each element of \`l\`, starting with initial value \`v\`. The function \`f\` takes two arguments, the first is the accumulated value and the second is the current element.
;;; @category list, list manipulation, association list, fold-left, fold-right, for-range, list-of, map, reduce, reduce-right, apply, filter
(define-export fold
  (lambda (f v l)
    (if (null? l)
        v
        (fold f (f v (car l)) (cdr l)))))

;;; (reduce f l) -> any
;;;  f : procedure?
;;;  l : list?
;;; Like \`fold\` but uses the first element of \`l\` as the initial value.
;;; @category list, list manipulation, reduce-right, apply, filter, fold, fold-left, fold-right, for-range, list-of, map, set-maximum-recursion-depth!
(define-export reduce
  (lambda (f l)
    (fold f (car l) (cdr l))))

;;; (fold-left f v l) -> any
;;;  f : procedure?
;;;  v : any
;;;  l : list?
;;; Like \`fold\`, but the combining function \`f\` takes the current element as its first argument and the accumulated value as its second.
;;; @category list, list manipulation, association list, fold, fold-right, for-range, list-of, map, reduce, reduce-right, apply, filter
(define-export fold-left
  (lambda (f v l)
    (if (null? l) v (fold-left f (f (car l) v) (cdr l)))))

;;; (fold-right f v l) -> any
;;;  f : procedure?
;;;  v : any
;;;  l : list?
;;; Returns the result of accumulating the result of applying \`f\` to each element of \`l\` in reverse order, starting with initial value \`v\`. The function \`f\` takes two arguments, the first is the current element and the second is the accumulated value.
;;; @category list, list manipulation, association list, fold, fold-left, for-range, list-of, map, reduce, reduce-right, apply, filter
(define-export fold-right
  (lambda (f v l)
    (if (null? l)
        v
        (f (car l) (fold-right f v (cdr l))))))

;;; (reduce-right f l) -> any
;;;  f : procedure?
;;;  l : list?
;;; Like \`fold-right\` but uses the last element of \`l\` as the initial value.
;;; @category list, list manipulation, range, apply, filter, fold, fold-left, fold-right, for-range, list-of, map, set-maximum-recursion-depth!
(define-export reduce-right
  (lambda (f l)
    (match l
      [(cons x null) x]
      [(cons x rest) (f x (reduce-right f rest))])))

;;; (vector-map f & v) -> vector?
;;;  f : procedure?
;;;  v : vector?
;;; Returns a new vector containing the results of applying \`f\` to each element of \`v1\`, ..., \`vk\` in a element-wise fashion.
;;; @category vectors, map, string-map, vector-append, vector-fill!, vector-filter, vector-for-each, vector-map!, vector-set!
(define-export vector-map
  (lambda (f & vs)
    (list->vector (apply map (cons f (map vector->list vs))))))

;;; (vector-map! f v) -> void?
;;;  f : procedure?
;;;  v : vector?
;;; Mutates \`v\` in place, replacing each element with the result of applying \`f\` to it.
;;; @category vectors, mutation, predicates, map, string-map, vector-append, vector-fill!, vector-filter, vector-for-each, vector-map, vector-set!
(define-export vector-map!
  (lambda (f v)
    (for-range (lambda (i) (vector-set! v i (f (vector-ref v i))))
      0 (vector-length v))))

;;; (vector-for-each f v) -> void?
;;;  f : procedure?
;;;  v : vector?
;;; Runs \`f\` on each element of \`v\` in order, for its side effects.
;;; @category vectors, vector-append, vector-fill!, vector-filter, vector-map, vector-map!, vector-set!
(define-export vector-for-each
  (lambda (f v)
    (for-range (lambda (i) (f (vector-ref v i)))
      0 (vector-length v))))

;;; (for-range f beg end) -> void?
;;;  f : procedure?
;;;  beg : number?
;;;  end : number?
;;; Runs \`f\` on each integer in the range \`[beg, end)\`. \`f\` takes one argument, the current value of integer.
;;; @category other, fold-left, fold-right, list-of, map, reduce, reduce-right, apply, filter
(define-export for-range
  (lambda (f beg end)
    (cond
      [(< beg end) (begin (f beg) (for-range f (+ beg 1) end))]
      [(> beg end) (begin (f beg) (for-range f (- beg 1) end))]
      [else void])))

;;; (vector-filter f v) -> vector?
;;;  f : procedure?
;;;  v : vector?
;;; Returns a new vector containing the elements of \`v\` for which \`f\` returns \`#t\`.
;;; @category vectors, vector-append, vector-fill!, vector-for-each, vector-map, vector-map!, vector-set!
(define-export vector-filter
  (lambda (f v)
    (list->vector (filter f (vector->list v)))))

;;; (void? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is the void value.
;;; @category predicates, typecheck, pair?, list?, null?, procedure?, ref?, vector?
(define-export void? (js-var "prelude_voidQ"))

;;; ??: any
;;; A placeholder for an expression that is not yet implemented.
;;; @category constants, other
(define-export ?? (js-var "prelude_qq"))

;;; (compose & f1) -> procedure?
;;;  f1 : procedure?
;;; Returns a new procedure that is the composition of the given functions, _i.e._, \`f(x) = f1(f2(...(fk(x))))\`.
;;; @category function composition, all-of, any-of, =-eps, o, |>
(define-export compose
  (lambda (f & fs)
    (lambda (x)
      (fold-right (lambda (g acc) (g acc)) x (cons f fs)))))

;;; (o & f) -> procedure?
;;;  f : procedure?
;;; A synonym for \`compose\`.
;;; @category function composition, all-of, any-of, compose, =-eps, |>
(define-export o
  (lambda (f & fs)
    (apply compose (cons f fs))))

;;; (|> v & f1) -> any
;;;  v : any
;;;  f1 : procedure?
;;; Returns the result of applying the given function in sequence, starting with initial value \`v\`, _i.e._, \`(fk (fk-1(...(f1 v)))\`.
;;; @category function composition, all-of, any-of, compose, =-eps, o
(define-export |>
  (lambda (v & fs)
    (fold (lambda (acc f) (f acc)) v fs)))

;;; (range & args) -> list?
;;;  args : integer?
;;; Can be called with one, two, or three arguments, all of which are integers.
;;; (range end) returns a list containing the numbers from 0 to \`end\` (exclusive).
;;; (range beg end) returns a list containing the numbers from \`beg\` to \`end\`
;;; (exclusive). (range beg end step) returns a list containing the numbers from
;;; \`beg\` to \`end\` (exclusive) with a step size of \`step\`. \`step\` must be non-zero
;;; to avoid an infinite loop.
;;; @category list, list creation, append, list-drop, list-tail, list-take, make-list, reverse, sort, index-of, length, string-length, vector-length, vector-range, vector-ref 
(define-export range (js-var "prelude_range"))

;;; (random n) -> number?
;;;  n : integer?
;;;   n >= 0
;;; Returns a random number in the range 0 to n (exclusive).
;;; @category other
(define-export random (js-var "prelude_random"))

;; N.B., \`with-handler\` is now a reserved-word special form, not a library
;; binding -- it must install an exception handler in the bytecode, which a
;; js-var-backed procedure cannot do. Its handler/function/args are ordinary
;; sub-expressions; on a raised runtime error the fiber unwinds to the handler
;; and applies it to the error's message string. Parsing lives in
;; syntax.grammar (WithHandler) + lezer-bridge; the AST node is WithHandlerExp;
;; codegen lowers it to push-handler/apply/pop-handler (see the LPM handler
;; stack in src/lpm/fiber.ts). As it is no longer a documented define, it does
;; not appear on the generated docs site (like \`error\`/\`if\`/\`cond\`).

;;; (ignore v) -> void?
;;;  v : any
;;; Suppresses the output of value \`v\` to the page.
;;; @category other
(define-export ignore (js-var "prelude_ignore"))

;;; (set-maximum-recursion-depth! n) -> void?
;;;  n : any
;;;   number? n >= 0
;;; Sets the maximum recursion depth of Scamper to n. Note that tail call-optimized functions do _not_ count towards this limit.
;;; @category mutation, predicates, map, reduce, reduce-right
(define-export set-maximum-recursion-depth! (js-var "prelude_setMaximumRecursionDepth"))

;;; (string->words s) -> list?
;;;  s : string?
;;; Returns a list of the words in \`s\`, stripping whitespace and punctuation.
;;; @category string, string->list, string->number, string->vector, string->chars, string->lines
(define-export string->words (js-var "prelude_stringToWords"))

;;; (ref v) -> ref?
;;;  v : any
;;; Returns a reference cell initially containing \`v\`.
;;; @category other
(define-export ref (js-var "prelude_ref"))

;;; (ref? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only \`v\` is a reference cell.
;;; @category typecheck, predicates, pair?, list?, null?, procedure?, rex?, vector?, void?
(define-export ref? (js-var "prelude_isRef"))

;;; (deref r) -> any
;;;  r : ref?
;;; Returns the value contained in reference cell \`r\`.
;;; @category other, assoc-ref, list-ref, ref-set!, string-ref
(define-export deref (js-var "prelude_deref"))

;;; (ref-set! r v) -> void?
;;;  r : ref?
;;;  v : any
;;; Sets the value contained in reference cell \`r\` to \`v\`.
;;; @category mutation, assoc-ref, deref, list-ref, string-ref
(define-export ref-set! (js-var "prelude_refSet"))

;;; (hash? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is a map, the kind of value a \`{ ... }\` literal produces.
;;; @category hashmap, typecheck, predicates, hash-ref, hash-set, hash-keys
(define-export hash? (js-var "prelude_hashQ"))

;;; (hash-ref h k) -> any
;;;  h : hash?
;;;  k : string?
;;; Returns the value that map \`h\` associates with key \`k\`. Raises an error if \`h\` has no such key; use \`hash-ref-or\` to supply a default instead.
;;; @category hashmap, hash-ref-or, hash-has-key?, hash-set, hash-keys
(define-export hash-ref (js-var "prelude_hashRef"))

;;; (hash-ref-or h k default) -> any
;;;  h : hash?
;;;  k : string?
;;;  default : any
;;; Returns the value that map \`h\` associates with key \`k\`, or \`default\` if \`h\` has no such key.
;;; @category hashmap, hash-ref, hash-has-key?, hash-set
(define-export hash-ref-or (js-var "prelude_hashRefOr"))

;;; (hash-has-key? h k) -> boolean?
;;;  h : hash?
;;;  k : string?
;;; Returns \`#t\` if and only if map \`h\` associates a value with key \`k\`.
;;; @category hashmap, typecheck, predicates, hash-ref, hash-ref-or, hash-keys
(define-export hash-has-key? (js-var "prelude_hashHasKeyQ"))

;;; (hash-set h k v) -> hash?
;;;  h : hash?
;;;  k : string?
;;;  v : any
;;; Returns a new map like \`h\` but with key \`k\` associated with \`v\`. \`h\` itself is unchanged.
;;; @category hashmap, hash-remove, hash-ref, hash-count
(define-export hash-set (js-var "prelude_hashSet"))

;;; (hash-set! h k v) -> void?
;;;  h : hash?
;;;  k : string?
;;;  v : any
;;; Mutates map \`h\` in place, associating key \`k\` with \`v\`. Unlike \`hash-set\`, no new map is made, so every binding that refers to \`h\` sees the change.
;;; @category hashmap, mutation, hash-set, hash-ref, hash-remove
(define-export hash-set! (js-var "prelude_hashSetBang"))

;;; (hash-remove h k) -> hash?
;;;  h : hash?
;;;  k : string?
;;; Returns a new map like \`h\` but with key \`k\` removed. \`h\` itself is unchanged, and removing a key that is not present is not an error.
;;; @category hashmap, hash-set, hash-ref, hash-count
(define-export hash-remove (js-var "prelude_hashRemove"))

;;; (hash-count h) -> integer?
;;;  h : hash?
;;; Returns the number of key-value pairs in map \`h\`.
;;; @category hashmap, hash-keys, hash-values, hash-set
(define-export hash-count (js-var "prelude_hashCount"))

;;; (hash-keys h) -> list?
;;;  h : hash?
;;; Returns a list of the keys of map \`h\`.
;;; @category hashmap, hash-values, hash->list, hash-count, hash-has-key?
(define-export hash-keys (js-var "prelude_hashKeys"))

;;; (hash-values h) -> list?
;;;  h : hash?
;;; Returns a list of the values of map \`h\`, in the same order as \`hash-keys\`.
;;; @category hashmap, hash-keys, hash->list, hash-count
(define-export hash-values (js-var "prelude_hashValues"))

;;; (hash->list h) -> list?
;;;  h : hash?
;;; Returns the contents of map \`h\` as a list of key-value pairs.
;;; @category hashmap, list->hash, hash-keys, hash-values
(define-export hash->list (js-var "prelude_hashToList"))

;;; (list->hash l) -> hash?
;;;  l : list?
;;; Returns a map built from \`l\`, a list of key-value pairs whose keys are strings. If a key appears more than once, the last pair wins.
;;; @category hashmap, hash->list, hash-set, hash-keys
(define-export list->hash (js-var "prelude_listToHash"))

;;; else: boolean?
;;; A synonym for \`#t\` appropriate for use as the final guard of a \`cond\` expression.
;;; @category boolean/logic, constants
(define-export else (js-var "prelude_elseConst"))

;;; null: list?
;;; The empty list.
;;; @category list, list creation, association list, constants
(define-export null (js-var "prelude_nullConst"))

;;; pi: number?
;;; The constant π.
;;; @category math, algebra, constants, acos, asin, atan, cos, sin, tan, π  
(define-export pi (js-var "prelude_piConst"))

;;; π: number?
;;; The constant π.
;;; @category math, algebra, constants, acos, asin, atan, cos, sin, tan, pi  
(define-export π (js-var "prelude_piConst"))

;;; void: void?
;;; The void value.
;;; @category constants, list, pair, vector
(define-export void (js-var "prelude_voidConst"))

;;; (with-file filename fn) -> any
;;;  filename : string?
;;;  fn : procedure?
;;; Loads \`filename\` from storage and passes its contents to \`fn\` as input. The output of \`fn\` is returned (and rendered to the screen if this is a top-level expression).
;;; @category other, with-file-chooser, with-handler, file->lines, file->string
(define-export with-file
  (lambda (filename fn)
    (fn ((js-var "prelude_blockOnReadFile") filename))))

;;; (with-file-chooser fn) -> void?
;;;  fn : procedure?
;;; Renders a file chooser widget. When the user selects a file, its contents are passed to \`fn\` as input. The output of \`fn\` is then rendered to the screen.
;;; @category interactive, with-file, with-handler, file->lines, file->string
(define-export with-file-chooser (js-var "prelude_withFileChooser"))

;;; (caar v) -> any
;;;  v : any
;;; Equivalent to \`(car (car v))\`.
;;; @category list, list manipulation, association list
(define-export caar (lambda (v) (car (car v))))

;;; (cadr v) -> any
;;;  v : any
;;; Equivalent to \`(car (cdr v))\`.
;;; @category list, list manipulation, association list
(define-export cadr (lambda (v) (car (cdr v))))

;;; (cdar v) -> any
;;;  v : any
;;; Equivalent to \`(cdr (car v))\`.
;;; @category list, list manipulation, association list
(define-export cdar (lambda (v) (cdr (car v))))

;;; (cddr v) -> any
;;;  v : any
;;; Equivalent to \`(cdr (cdr v))\`.
;;; @category list, list manipulation, association list
(define-export cddr (lambda (v) (cdr (cdr v))))

;;; (caaar v) -> any
;;;  v : any
;;; Equivalent to \`(car (car (car v)))\`.
;;; @category list, list manipulation, association list
(define-export caaar (lambda (v) (car (car (car v)))))

;;; (cadar v) -> any
;;;  v : any
;;; Equivalent to \`(car (cdr (car v)))\`.
;;; @category list, list manipulation, association list
(define-export cadar (lambda (v) (car (cdr (car v)))))

;;; (cdaar v) -> any
;;;  v : any
;;; Equivalent to \`(cdr (car (car v)))\`.
;;; @category list, list manipulation, association list
(define-export cdaar (lambda (v) (cdr (car (car v)))))

;;; (cddar v) -> any
;;;  v : any
;;; Equivalent to \`(cdr (cdr (car v)))\`.
;;; @category list, list manipulation, association list
(define-export cddar (lambda (v) (cdr (cdr (car v)))))

;;; (caadr v) -> any
;;;  v : any
;;; Equivalent to \`(car (car (cdr v)))\`.
;;; @category list, list manipulation, association list
(define-export caadr (lambda (v) (car (car (cdr v)))))

;;; (caddr v) -> any
;;;  v : any
;;; Equivalent to \`(car (cdr (cdr v)))\`.
;;; @category list, list manipulation, association list
(define-export caddr (lambda (v) (car (cdr (cdr v)))))

;;; (cdadr v) -> any
;;;  v : any
;;; Equivalent to \`(cdr (car (cdr v)))\`.
;;; @category list, list manipulation, association list
(define-export cdadr (lambda (v) (cdr (car (cdr v)))))

;;; (cdddr v) -> any
;;;  v : any
;;; Equivalent to \`(cdr (cdr (cdr v)))\`.
;;; @category list, list manipulation, association list
(define-export cdddr (lambda (v) (cdr (cdr (cdr v)))))

;;; (caaaar v) -> any
;;;  v : any
;;; Equivalent to \`(car (car (car (car v))))\`.
;;; @category list, list manipulation, association list
(define-export caaaar (lambda (v) (car (car (car (car v))))))

;;; (cadaar v) -> any
;;;  v : any
;;; Equivalent to \`(car (cdr (car (car v))))\`.
;;; @category list, list manipulation, association list
(define-export cadaar (lambda (v) (car (cdr (car (car v))))))

;;; (cdaaar v) -> any
;;;  v : any
;;; Equivalent to \`(cdr (car (car (car v))))\`.
;;; @category list, list manipulation, association list
(define-export cdaaar (lambda (v) (cdr (car (car (car v))))))

;;; (cddaar v) -> any
;;;  v : any
;;; Equivalent to \`(cdr (cdr (car (car v))))\`.
;;; @category list, list manipulation, association list
(define-export cddaar (lambda (v) (cdr (cdr (car (car v))))))

;;; (caadar v) -> any
;;;  v : any
;;; Equivalent to \`(car (car (cdr (car v))))\`.
;;; @category list, list manipulation, association list
(define-export caadar (lambda (v) (car (car (cdr (car v))))))

;;; (caddar v) -> any
;;;  v : any
;;; Equivalent to \`(car (cdr (cdr (car v))))\`.
;;; @category list, list manipulation, association list
(define-export caddar (lambda (v) (car (cdr (cdr (car v))))))

;;; (cdadar v) -> any
;;;  v : any
;;; Equivalent to \`(cdr (car (cdr (car v))))\`.
;;; @category list, list manipulation, association list
(define-export cdadar (lambda (v) (cdr (car (cdr (car v))))))

;;; (cdddar v) -> any
;;;  v : any
;;; Equivalent to \`(cdr (cdr (cdr (car v))))\`.
;;; @category list, list manipulation, association list
(define-export cdddar (lambda (v) (cdr (cdr (cdr (car v))))))

;;; (caaadr v) -> any
;;;  v : any
;;; Equivalent to \`(car (car (car (cdr v))))\`.
;;; @category list, list manipulation, association list
(define-export caaadr (lambda (v) (car (car (car (cdr v))))))

;;; (cadadr v) -> any
;;;  v : any
;;; Equivalent to \`(car (cdr (car (cdr v))))\`.
;;; @category list, list manipulation, association list
(define-export cadadr (lambda (v) (car (cdr (car (cdr v))))))

;;; (cdaadr v) -> any
;;;  v : any
;;; Equivalent to \`(cdr (car (car (cdr v))))\`.
;;; @category list, list manipulation, association list
(define-export cdaadr (lambda (v) (cdr (car (car (cdr v))))))

;;; (cddadr v) -> any
;;;  v : any
;;; Equivalent to \`(cdr (cdr (car (cdr v))))\`.
;;; @category list, list manipulation, association list
(define-export cddadr (lambda (v) (cdr (cdr (car (cdr v))))))

;;; (caaddr v) -> any
;;;  v : any
;;; Equivalent to \`(car (car (cdr (cdr v))))\`.
;;; @category list, list manipulation, association list
(define-export caaddr (lambda (v) (car (car (cdr (cdr v))))))

;;; (cadddr v) -> any
;;;  v : any
;;; Equivalent to \`(car (cdr (cdr (cdr v))))\`.
;;; @category list, list manipulation, association list
(define-export cadddr (lambda (v) (car (cdr (cdr (cdr v))))))

;;; (cdaddr v) -> any
;;;  v : any
;;; Equivalent to \`(cdr (car (cdr (cdr v))))\`.
;;; @category list, list manipulation, association list
(define-export cdaddr (lambda (v) (cdr (car (cdr (cdr v))))))

;;; (cddddr v) -> any
;;;  v : any
;;; Equivalent to \`(cdr (cdr (cdr (cdr v))))\`.
;;; @category list, list manipulation, association list
(define-export cddddr (lambda (v) (cdr (cdr (cdr (cdr v))))))

;;; (char=? & c1) -> boolean?
;;;  c1 : char?
;;; Returns \`#t\` if and only \`c1\`, \`c2\`, ... are all equivalent characters.
;;; @category char, predicates, char>=?, char>?, char<=?, char<?
(define-export char=? (js-var "prelude_char=?"))

;;; (char<? & c1) -> boolean?
;;;  c1 : char?
;;; Returns \`#t\` if and only \`c1\`, \`c2\`, ... have strictly increasing character values.
;;; @category char, predicates, char=?, char>=?, char>?, char<=?
(define-export char<? (js-var "prelude_char<?"))

;;; (char>? & c1) -> boolean?
;;;  c1 : char?
;;; Returns \`#t\` if and only \`c1\`, \`c2\`, ... have strictly decreasing character values.
;;; @category char, predicates, char=?, char>=?, char<=?, char<?
(define-export char>? (js-var "prelude_char>?"))

;;; (char<=? & c1) -> boolean?
;;;  c1 : char?
;;; Returns \`#t\` if and only \`c1\`, \`c2\`, ... have non-decreasing character values.
;;; @category char, predicates, char=?, char>=?, char>?, char<?
(define-export char<=? (js-var "prelude_char<=?"))

;;; (char>=? & c1) -> boolean?
;;;  c1 : char?
;;; Returns \`#t\` if and only \`c1\`, \`c2\`, ... have non-increasing character values.
;;; @category char, predicates, char=?, char>?, char<=?, char<?
(define-export char>=? (js-var "prelude_char>=?"))

;;; (char-ci=? & c1) -> boolean?
;;;  c1 : char?
;;; Returns \`#t\` if and only \`c1\`, \`c2\`, ... are all equivalent characters, ignoring case.
;;; @category char, predicates, char-ci>=?, char-ci>?, char-ci<=?, char-ci<?
(define-export char-ci=? (js-var "prelude_char-ci=?"))

;;; (char-ci<? & c1) -> boolean?
;;;  c1 : char?
;;; Returns \`#t\` if and only \`c1\`, \`c2\`, ... have strictly increasing character values, ignoring case.
;;; @category char, predicates, char-ci=?, char-ci>=?, char-ci>?, char-ci<=?
(define-export char-ci<? (js-var "prelude_char-ci<?"))

;;; (char-ci>? & c1) -> boolean?
;;;  c1 : char?
;;; Returns \`#t\` if and only \`c1\`, \`c2\`, ... have strictly decreasing character values, ignoring case.
;;; @category char, predicates, char-ci=?, char-ci>=?, char-ci<=?, char-ci<?
(define-export char-ci>? (js-var "prelude_char-ci>?"))

;;; (char-ci<=? & c1) -> boolean?
;;;  c1 : char?
;;; Returns \`#t\` if and only \`c1\`, \`c2\`, ... have non-decreasing character values, ignoring case.
;;; @category char, predicates, char-ci=?, char-ci>=?, char-ci>?, char-ci<?
(define-export char-ci<=? (js-var "prelude_char-ci<=?"))

;;; (char-ci>=? & c1) -> boolean?
;;;  c1 : char?
;;; Returns \`#t\` if and only \`c1\`, \`c2\`, ... have non-increasing character values, ignoring case.
;;; @category char, predicates, char-ci=?, char-ci>?, char-ci<=?, char-ci<?
(define-export char-ci>=? (js-var "prelude_char-ci>=?"))

;;; (char-alphabetic? c) -> boolean?
;;;  c : char?
;;; Returns \`#t\` if and only \`c\` is an alphabetic character.
;;; @category typecheck, char, predicates, char-numeric?, char-lower-case?, char-upper-case?, char-whitespace?
(define-export char-alphabetic? (js-var "prelude_char-alphabetic?"))

;;; (char-numeric? c) -> boolean?
;;;  c : char?
;;; Returns \`#t\` if and only \`c\` is a numeric character.
;;; @category typecheck, char, predicates, char-alphabetic?, char-lower-case?, char-upper-case?, char-whitespace?
(define-export char-numeric? (js-var "prelude_char-numeric?"))

;;; (char-whitespace? c) -> boolean?
;;;  c : char?
;;; Returns \`#t\` if and only \`c\` is a whitespace character.
;;; @category typecheck, char, predicates, char-alphabetic?, char-numeric?, char-lower-case?, char-upper-case?
(define-export char-whitespace? (js-var "prelude_char-whitespace?"))

;;; (char-upper-case? c) -> boolean?
;;;  c : char?
;;; Returns \`#t\` if and only \`c\` is an upper-case character.
;;; @category typecheck, char, predicates, char-alphabetic?, char-numeric?, char-lower-case?, char-whitespace?
(define-export char-upper-case? (js-var "prelude_char-upper-case?"))

;;; (char-lower-case? c) -> boolean?
;;;  c : char?
;;; Returns \`#t\` if and only \`c\` is a lower-case character.
;;; @category char, predicates, char-alphabetic?, char-numeric?, char-upper-case?, char-whitespace?
(define-export char-lower-case? (js-var "prelude_char-lower-case?"))

;;; (string=? & s1) -> boolean?
;;;  s1 : string?
;;; Returns \`#t\` if and only \`s1\`, \`s2\`, ... are equivalent strings.
;;; @category string, predicates, string>=?, string>?, string<=?, string<?, string-contains
(define-export string=? (js-var "prelude_string=?"))

;;; (string<? & s1) -> boolean?
;;;  s1 : string?
;;; Returns \`#t\` if and only \`s1\`, \`s2\`, ... are in strictly lexicographically increasing order.
;;; @category string, predicates, string=?, string>=?, string>?, string<=?, string-contains
(define-export string<? (js-var "prelude_string<?"))

;;; (string>? & s1) -> boolean?
;;;  s1 : string?
;;; Returns \`#t\` if and only \`s1\`, \`s2\`, ... are in strictly lexicographically decreasing order.
;;; @category string, predicates, string=?, string>=?, string<=?, string<?, string-contains
(define-export string>? (js-var "prelude_string>?"))

;;; (string<=? & s1) -> boolean?
;;;  s1 : string?
;;; Returns \`#t\` if and only \`s1\`, \`s2\`, ... are in lexicographical order.
;;; @category string, predicates, string=?, string>=?, string>?, string<?, string-contains
(define-export string<=? (js-var "prelude_string<=?"))

;;; (string>=? & s1) -> boolean?
;;;  s1 : string?
;;; Returns \`#t\` if and only \`s1\`, \`s2\`, ... are in reverse lexicographical order.
;;; @category string, predicates, string=?, string>?, string<=?, string<?, string-contains
(define-export string>=? (js-var "prelude_string>=?"))

;;; (string-ci=? & s1) -> boolean?
;;;  s1 : string?
;;; Returns \`#t\` if and only \`s1\`, \`s2\`, ... are equivalent strings, ignoring case.
;;; @category string, predicates, string-ci>=?, string-ci>?, string-ci<=?, string-ci<?, string-contains
(define-export string-ci=? (js-var "prelude_string-ci=?"))

;;; (string-ci<? & s1) -> boolean?
;;;  s1 : string?
;;; Returns \`#t\` if and only \`s1\`, \`s2\`, ... are in strictly lexicographically increasing order, ignoring case.
;;; @category string, predicates, string-ci=?, string-ci>=?, string-ci>?, string-ci<=?, string-contains
(define-export string-ci<? (js-var "prelude_string-ci<?"))

;;; (string-ci>? & s1) -> boolean?
;;;  s1 : string?
;;; Returns \`#t\` if and only \`s1\`, \`s2\`, ... are in strictly lexicographically decreasing order, ignoring case.
;;; @category string, predicates, string-ci=?, string-ci>=?, string-ci<=?, string-ci<?, string-contains
(define-export string-ci>? (js-var "prelude_string-ci>?"))

;;; (string-ci<=? & s1) -> boolean?
;;;  s1 : string?
;;; Returns \`#t\` if and only \`s1\`, \`s2\`, ... are in lexicographical order, ignoring case.
;;; @category string, predicates, string-ci=?, string-ci>=?, string-ci>?, string-ci<?, string-contains
(define-export string-ci<=? (js-var "prelude_string-ci<=?"))

;;; (string-ci>=? & s1) -> boolean?
;;;  s1 : string?
;;; Returns \`#t\` if and only \`s1\`, \`s2\`, ... are in reverse lexicographical order, ignoring case.
;;; @category string, predicates, string-ci=?, string-ci>?, string-ci<=?, string-ci<?, string-contains
(define-export string-ci>=? (js-var "prelude_string-ci>=?"))
`],[`reactive`,`;;; (html? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is an HTML element.
(define-export html? (js-var "html_isElement"))

;;; (button? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is a button.
(define-export button? (js-var "html_buttonQ"))

;;; (subscription? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is a subscription.
;;; @category reactive, html?, canvas?
(define-export subscription? (js-var "reactive_subscriptionQ"))

;;; (reactive-canvas width height initial view update & sub1) -> html?
;;;  width : number?
;;;  height : number?
;;;  initial : any
;;;  view : any
;;;   function? takes a state and canvas as input and renders that state to the canvas.
;;;  update : any
;;;   function? takes a message and state as input and returns a new state as output.
;;;  sub1 : subscription?
;;; Creates a reactive canvas with the given width and height. The canvas renders as model with the given \`initial\` value and \`view\` function. The \`update\` function handles all messages generated by the given subscriptions.
;;; @category reactive, canvas, html, html?, reactive-container
(define-export reactive-canvas (js-var "reactive_reactiveCanvas"))

;;; (reactive-container initial view update & sub1) -> html?
;;;  initial : any
;;;  view : any
;;;   function? takes a state as input and outputs an HTML element as output.
;;;  update : any
;;;   function? takes a message and state as input and returns a new state as output.
;;;  sub1 : subscription?
;;; Creates a reactive HTML container. The canvas renders as model with the given \`initial\` value and \`view\` function. The \`view\` function outputs an HTML tree that the container displays. The \`update\` function handles all messages generated by the given subscriptions.
;;; @category reactive, html, html?, reactive-canvas
(define-export reactive-container (js-var "reactive_reactiveContainer"))

;;; (on-button-click button) -> subscription?
;;;  button : button?
;;; Returns a subscription that emits a message of the form \`(event-button-click id)\` whenever the given button is clicked. The \`id\` is the given button's id or \`void\` is no \`id\` assigned to the button.
;;; @category reactive, subscription?, on-mouse-click, on-mouse-hover
(define-export on-button-click (js-var "reactive_onButtonClick"))

;;; (on-mouse-click) -> subscription?
;;; Returns a subscription that emits a message of the form \`(event-mouse-click button x y)\` whenever the canvas is clicked. \`button\` indicates which mouse button was clicked and \`(x, y)\` are the coordinates where the click occurred.
;;; @category reactive, subscription?, on-button-click, on-mouse-hover
(define-export on-mouse-click (js-var "reactive_onMouseClick"))

;;; (on-mouse-hover) -> subscription?
;;; Returns a subscription that emits a message of the form \`(event-mouse-hover x y)\` whenever the mouse moves over the reactive element. \`(x, y)\` are the coordinates of the mouse.
;;; @category reactive, subscription?, on-button-click, on-mouse-click
(define-export on-mouse-hover (js-var "reactive_onMouseHover"))

;;; (on-key-down) -> subscription?
;;; Returns a subscription that emits a message of the form \`(event-key-down key)\` whenever a key is pressed. \`key\` indicates the key that was pressed.
;;; @category reactive, subscription?, on-key-up
(define-export on-key-down (js-var "reactive_onKeyDown"))

;;; (on-key-up) -> subscription?
;;; Returns a subscription that emits a message of the form \`(event-key-up key)\` whenever a key is released. \`key\` indicates the key that was released.
;;; @category reactive, subscription?, on-key-down
(define-export on-key-up (js-var "reactive_onKeyUp"))

;;; (on-timer interval) -> subscription?
;;;  interval : any
;;;   non-negative integer
;;; Returns a subscription that emits a message of the form \`(event-timer time elapsed)\` every \`interval\` milliseconds. \`time\` is the current time since the page was loaded and \`elapsed\` is the time since the last timer message, all in milliseconds.
;;; @category reactive, subscription?, on-note
(define-export on-timer (js-var "reactive_onTimer"))

;;; (on-note handlers) -> subscription?
;;;  handlers : vector?
;;; Returns a subscription that emits a message of the form \`(event-note id)\` whenever \`(note-event id)\` is played in a composition that users \`handlers\` to handle events.
;;; @category reactive, subscription?, on-timer
(define-export on-note (js-var "reactive_onNote"))
`],[`rex`,`;;; (rex? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if \`v\` is a regex, \`#f\` otherwise.
;;; @category predicates, regexes, typecheck, rex-matches?, pair?, list?, procedure?, ref?, vector?
(define-export rex? (js-var "rex_isRegex"))

;;; (rex-empty) -> rex?
;;; Returns a regex that matches the empty string.
;;; @category regexes, rex-empty, rex-split-string, rex-string, rex->string
(define-export rex-empty (js-var "rex_rexEmpty"))

;;; (rex-string s) -> rex?
;;;  s : string?
;;; Returns a regex that matches the exact string \`s\`.
;;; @category regexes, rex-empty, rex-split-string, rex->string
(define-export rex-string (js-var "rex_rexString"))

;;; (rex-repeat r) -> rex?
;;;  r : rex?
;;; Returns a regex that matches one or more repetitions of the regex \`r\`.
;;; @category regexes, rex-concat, rex-repeat-o
(define-export rex-repeat (js-var "rex_rexRepeat"))

;;; (rex-repeat-0 r) -> rex?
;;;  r : rex?
;;; Returns a regex that matches zero or more repetitions of the regex \`r\`.
;;; @category regexes, rex-concat, rex-repeat
(define-export rex-repeat-0 (js-var "rex_rexRepeat0"))

;;; (rex-concat & xs) -> rex?
;;;  xs : rex?
;;; Returns a regex that matches the concatenation of the regexes \`rs\` in order.
;;; @category regexes, rex-repeat, rex-repeat-o
(define-export rex-concat (js-var "rex_rexConcat"))

;;; (rex-any-char) -> rex?
;;; Returns a regex that matches any single character.
;;; @category regexes, rex-char-antiset, rex-char-range, rex-char-set
(define-export rex-any-char (js-var "rex_rexAnyChar"))

;;; (rex-char-set s) -> rex?
;;;  s : string?
;;; Returns a regex that matches any single character in the string \`s\`.
;;; @category regexes, rex-any-char, rex-char-antiset, rex-char-range
(define-export rex-char-set (js-var "rex_rexCharSet"))

;;; (rex-char-antiset s) -> rex?
;;;  s : string?
;;; Returns a regex that matches any single character not in the string \`s\`.
;;; @category regexes, rex-any-char, rex-char-range, rex-char-set
(define-export rex-char-antiset (js-var "rex_rexCharAntiset"))

;;; (rex-char-range start end) -> rex?
;;;  start : char?
;;;  end : char?
;;; Returns a regex that matches any single character in the inclusive range from \`start\` to \`end\`.
;;; @category regexes, rex-any-char, rex-char-antiset, rex-char-set
(define-export rex-char-range (js-var "rex_rexCharRange"))

;;; (rex-any-of & xs) -> rex?
;;;  xs : rex?
;;; Returns a regex that matches any one of the regexes \`rs\`.
;;; @category regexes, rex-optional
(define-export rex-any-of (js-var "rex_rexAnyOf"))

;;; (rex-optional r) -> rex?
;;;  r : rex?
;;; Returns a regex that matches either the regex \`r\` or the empty string.
;;; @category regexes, rex-any-of
(define-export rex-optional (js-var "rex_rexOptional"))

;;; (regex pattern flags) -> rex?
;;;  pattern : string?
;;;  flags : string?
;;; Returns a regex that matches a Javascript regex \`pattern\`. See [the MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions) for more details.
;;; @category regexes, list, pair, string, vector
(define-export regex (js-var "rex_rexRegex"))

;;; (rex-find-matches r s) -> list?
;;;  r : rex?
;;;  s : string?
;;; Returns a list of all non-overlapping matches of the regex \`r\` in the string \`s\`.
;;; @category regexes, rex-matches?, rex-split-string
(define-export rex-find-matches (js-var "rex_rexFindMatches"))

;;; (rex-matches? r s) -> boolean?
;;;  r : rex?
;;;  s : string?
;;; Returns \`#t\` if the regex \`r\` matches the entire string \`s\`, \`#f\` otherwise.
;;; @category predicates, regexes, typecheck, rex-find-matches, rex?
(define-export rex-matches? (js-var "rex_rexMatches"))

;;; (rex-split-string r s) -> list?
;;;  r : rex?
;;;  s : string?
;;; Splits the string \`s\` at each match of the regex \`r\` and returns a list of the resulting substrings.
;;; @category regexes, rex-empty, rex-string, rex->string, rex-find-matches
(define-export rex-split-string (js-var "rex_rexSplitString"))

;;; (rex->string r) -> string?
;;;  r : rex?
;;; Returns the Javascript regex string representation of the regex \`r\`.
;;; @category regexes, rex-empty, rex-split-string, rex-string
(define-export rex->string (js-var "rex_rexToString"))
`],[`runtime`,`(define-export ##mkPredFn## (js-var "runtime_mkPredFn"))

(define-export ##mkCtorFn## (js-var "runtime_mkCtorFn"))

(define-export ##mkGetFn## (js-var "runtime_mkGetFn"))

(define-export ##typeOf## (js-var "runtime_typeOf"))

; Internal: builds the vector a vector literal [e1 ... ek] denotes, and the
; Javascript object a map literal {k1 v1 ... kn vn} denotes. Expansion rewrites
; every [...] / {...} into a call to these. They are internal (rather than the
; prelude's \`vector\`) so that a user binding cannot change what a literal means.
(define-export ##mkVec## (js-var "runtime_mkVec"))

(define-export ##mkObj## (js-var "runtime_mkObj"))

; Internal: raises a runtime error carrying its argument. Expansion injects it
; for a \`cond\` fall-through, and contract insertion for a failed check. It is
; internal (rather than the prelude's \`error\`) so that a user binding named
; \`error\` cannot change what those forms do.
(define-export ##error## (js-var "runtime_error"))

; Internal: aborts the running fiber and reports its argument as the answer to a
; live-evaluation query. A query wraps its target sub-expression in
; (##report## <expr>).
(define-export ##report## (js-var "runtime_report"))

(define-export any (js-var "runtime_any"))
`],[`test`,`;;; (test-result-ok desc) -> test-result?
;;;  desc : string?
;;; Returns a test result indicating that the test named \`desc\` passed.
;;; @category testing
(define-export test-result-ok (js-var "test_testResultOk"))

;;; (test-result-error-expected desc expected actual) -> test-result?
;;;  desc : string?
;;;  expected : any
;;;  actual : any
;;; Returns a test result indicating that the test named \`desc\` failed because
;;; it produced \`actual\` instead of the \`expected\` value.
;;; @category testing
(define-export test-result-error-expected (js-var "test_testResultErrorExpected"))

;;; (test-result-error-exn desc exn) -> test-result?
;;;  desc : string?
;;;  exn : any
;;; Returns a test result indicating that the test named \`desc\` failed because
;;; it raised the unexpected exception \`exn\`.
;;; @category testing
(define-export test-result-error-exn (js-var "test_testResultErrorExn"))

;;; (test-result-error-gen desc reason) -> test-result?
;;;  desc : string?
;;;  reason : string?
;;; Returns a test result indicating that the test named \`desc\` failed for the
;;; given \`reason\`. (This constructor was formerly named \`test-error\`.)
;;; @category testing
(define-export test-result-error-gen (js-var "test_testResultErrorGeneric"))

;;; (test-result? v) -> boolean?
;;;  v : any
;;; Returns \`#t\` if and only if \`v\` is a test result.
(define-export test-result? (js-var "test_isResult"))

;;; (test-case desc eq? expected test-fn) -> test-result?
;;;  desc : string?
;;;  eq? : procedure?
;;;   a function that tests for equality between two values
;;;  expected : any
;;;  test-fn : procedure?
;;;   a function that produces the actual value to be tested
;;; Returns a test result indicating whether the given equality test passed: \`(eq? expected (test-fn))\`.
;;; @category testing
(define-export test-case
  (lambda (desc eq? expected test-fn)
    (with-handler
      (lambda (err) (test-result-error-exn desc err))
      (lambda ()
        (let ([actual (test-fn)]
              [is-equal (eq? expected actual)])
          (cond
            [(equal? is-equal #t) (test-result-ok desc)]
            [(equal? is-equal #f) (test-result-error-expected desc expected actual)]
            [else (error "Test case function should have produced a boolean")]))))))

;;; (test-exn desc test-fn) -> test-result?
;;;  desc : string?
;;;  test-fn : procedure?
;;;   a function that should throw an exception
;;; Returns a test result indicating whether the given function threw an exception.
;;; @category testing
(define-export test-exn
  (lambda (desc test-fn)
    (with-handler
      (lambda (err) (test-result-ok desc))
      (lambda ()
        (begin
          (test-fn)
          (test-result-error-gen desc "Test case did not throw an exception"))))))
`]];async function _f(e,t){let{prog:n,diagnostics:r}=await _s(t,{insertContracts:!0,allowInternalNames:e===`runtime`});if(n===void 0||r.length>0)throw new L(`lib.loadLibrary`,`Failed to compile builtin library "${e}": ${r.map(e=>e.message).join(`; `)}`);let i=new Fr(n,jt.empty.extendWithTopLevel([`js-var`,hf]),!0),a=new gn(!1,!1);if(await Es(i,{out:a,err:a}),a.errLog.length>0)throw new L(`lib.loadLibrary`,`Failed to run builtin library "${e}": ${a.errLog.join(`; `)}`);return i.addExports([`js-var`]),i.getModule()}function vf(e){let t=new Map;for(let n of e){if(n.tag!==`define`&&n.tag!==`defexport`||!n.docComments)continue;let{doc:e}=Vi(n.docComments);e&&t.set(n.name.name,e)}return t}var yf=new Map,bf=!1;async function xf(){if(!bf){for(let[e,t]of await Promise.all(gf.map(async([e,t])=>[e,await _f(e,t)])))Ar.set(e,t);for(let[e,t]of gf){let{program:n}=gs(t,void 0,{allowInternalNames:e===`runtime`});yf.set(e,n?vf(n):new Map)}bf=!0}}var Sf=Ar;export{oi as A,qi as C,_a as D,X as E,Fr as F,Ar as I,dr as L,qr as M,q as N,ba as O,Kr as P,Ji as S,va as T,Wa as _,vs as a,Y as b,os as c,zo as d,No as f,no as g,lo as h,_s as i,ei as j,Vi as k,$o as l,Ao as m,xf as n,ys as o,Ro as p,Ss as r,gs as s,yf as t,Jo as u,ro as v,ga as w,J as x,Ua as y};