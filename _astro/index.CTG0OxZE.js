/* empty css                                   */import{g as w,A as Ye,x as Xe,X as Je,Y as Ae,Z as qe,d as _,l as Q,j as M,M as pe,o as R,c as de,a as Me,w as $,h as N,_ as Ze,$ as u,m as ee,a0 as O,F as ue,r as Qe,e as et,a1 as me,z as ce,J as tt,a2 as F,a3 as rt,a4 as nt,E as ot,a5 as be,a6 as at,G as lt,a7 as it,a8 as st,y as Se,a9 as dt}from"./solana-wallets-vue.BQV4QrwB.js";import{_ as ut}from"./_plugin-vue_export-helper.ByfqkwuR.js";function Pe(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=Pe(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function ct(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=Pe(e))&&(n&&(n+=" "),n+=t);return n}const Ce=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,ke=ct,ft=(e,t)=>r=>{var n;if(t?.variants==null)return ke(e,r?.class,r?.className);const{variants:a,defaultVariants:l}=t,o=Object.keys(a).map(s=>{const f=r?.[s],g=l?.[s];if(f===null)return null;const h=Ce(f)||Ce(g);return a[s][h]}),i=r&&Object.entries(r).reduce((s,f)=>{let[g,h]=f;return h===void 0||(s[g]=h),s},{}),p=t==null||(n=t.compoundVariants)===null||n===void 0?void 0:n.reduce((s,f)=>{let{class:g,className:h,...c}=f;return Object.entries(c).every(m=>{let[d,b]=m;return Array.isArray(b)?b.includes({...l,...i}[d]):{...l,...i}[d]===b})?[...s,g,h]:s},[]);return ke(e,o,p,r?.class,r?.className)};function ae(e,t){const r=typeof e=="string"&&!t?`${e}Context`:t,n=Symbol(r);return[a=>{const l=lt(n,a);if(l||l===null)return l;throw new Error(`Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(e)?`one of the following components: ${e.join(", ")}`:`\`${e}\``}`)},a=>(it(n,a),a)]}function _e(e,t=Number.NEGATIVE_INFINITY,r=Number.POSITIVE_INFINITY){return Math.min(Math.max(e,t),r)}function pt(e){let t=!1,r;const n=Xe(!0);return(...a)=>(t||(r=n.run(()=>e(...a)),t=!0),r)}function Ie(e){return typeof e=="function"?e():u(e)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const mt=e=>typeof e<"u";function le(e){var t;const r=Ie(e);return(t=r?.$el)!=null?t:r}function bt(){const e=M(!1),t=F();return t&&be(()=>{e.value=!0},t),e}function vt(e){return JSON.parse(JSON.stringify(e))}function gt(e,t,r,n={}){var a,l,o;const{clone:i=!1,passive:p=!1,eventName:s,deep:f=!1,defaultValue:g,shouldEmit:h}=n,c=F(),m=r||c?.emit||((a=c?.$emit)==null?void 0:a.bind(c))||((o=(l=c?.proxy)==null?void 0:l.$emit)==null?void 0:o.bind(c?.proxy));let d=s;d=d||`update:${t.toString()}`;const b=E=>i?typeof i=="function"?i(E):vt(E):E,k=()=>mt(e[t])?b(e[t]):g,A=E=>{h?h(E)&&m(d,E):m(d,E)};if(p){const E=k(),D=M(E);let P=!1;return ce(()=>e[t],V=>{P||(P=!0,D.value=b(V),tt(()=>P=!1))}),ce(D,V=>{!P&&(V!==e[t]||f)&&A(V)},{deep:f}),D}else return w({get(){return k()},set(E){A(E)}})}function Re(e){return e?e.flatMap(t=>t.type===ue?Re(t.children):[t]):[]}const[ht,Pr]=ae("ConfigProvider");function yt(e){const t=ht({dir:M("ltr")});return w(()=>{var r;return e?.value||((r=t.dir)==null?void 0:r.value)||"ltr"})}function xt(e){const t=F(),r=t?.type.emits,n={};return r!=null&&r.length||console.warn(`No emitted event found. Please check component: ${t?.type.__name}`),r?.forEach(a=>{n[Je(Ae(a))]=(...l)=>e(a,...l)}),n}function wt(e){return w(()=>{var t;return Ie(e)?!!((t=le(e))!=null&&t.closest("form")):!0})}function St(e){const t=F(),r=Object.keys(t?.type.props??{}).reduce((a,l)=>{const o=(t?.type.props[l]).default;return o!==void 0&&(a[l]=o),a},{}),n=qe(e);return w(()=>{const a={},l=t?.vnode.props??{};return Object.keys(l).forEach(o=>{a[Ae(o)]=l[o]}),Object.keys({...r,...a}).reduce((o,i)=>(n.value[i]!==void 0&&(o[i]=n.value[i]),o),{})})}function _r(e,t){const r=St(e),n=t?xt(t):{};return w(()=>({...r.value,...n}))}function H(){const e=F(),t=M(),r=w(()=>{var o,i;return["#text","#comment"].includes((o=t.value)==null?void 0:o.$el.nodeName)?(i=t.value)==null?void 0:i.$el.nextElementSibling:le(t)}),n=Object.assign({},e.exposed),a={};for(const o in e.props)Object.defineProperty(a,o,{enumerable:!0,configurable:!0,get:()=>e.props[o]});if(Object.keys(n).length>0)for(const o in n)Object.defineProperty(a,o,{enumerable:!0,configurable:!0,get:()=>n[o]});Object.defineProperty(a,"$el",{enumerable:!0,configurable:!0,get:()=>e.vnode.el}),e.exposed=a;function l(o){t.value=o,!(o instanceof Element||!o)&&(Object.defineProperty(a,"$el",{enumerable:!0,configurable:!0,get:()=>o.$el}),e.exposed=a)}return{forwardRef:l,currentRef:t,currentElement:r}}function Ct(e){const t=M(),r=w(()=>{var a;return((a=t.value)==null?void 0:a.width)??0}),n=w(()=>{var a;return((a=t.value)==null?void 0:a.height)??0});return be(()=>{const a=le(e);if(a){t.value={width:a.offsetWidth,height:a.offsetHeight};const l=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let p,s;if("borderBoxSize"in i){const f=i.borderBoxSize,g=Array.isArray(f)?f[0]:f;p=g.inlineSize,s=g.blockSize}else p=a.offsetWidth,s=a.offsetHeight;t.value={width:p,height:s}});return l.observe(a,{box:"border-box"}),()=>l.unobserve(a)}else t.value=void 0}),{width:r,height:n}}const ve=_({name:"PrimitiveSlot",inheritAttrs:!1,setup(e,{attrs:t,slots:r}){return()=>{var n,a;if(!r.default)return null;const l=Re(r.default()),o=l.findIndex(f=>f.type!==rt);if(o===-1)return l;const i=l[o];(n=i.props)==null||delete n.ref;const p=i.props?ee(t,i.props):t;t.class&&(a=i.props)!=null&&a.class&&delete i.props.class;const s=nt(i,p);for(const f in p)f.startsWith("on")&&(s.props||(s.props={}),s.props[f]=p[f]);return l.length===1?s:(l[o]=s,l)}}}),te=_({name:"Primitive",inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"div"}},setup(e,{attrs:t,slots:r}){const n=e.asChild?"template":e.as;return typeof n=="string"&&["area","img","input"].includes(n)?()=>Q(n,t):n!=="template"?()=>Q(e.as,t,{default:r.default}):()=>Q(ve,t,{default:r.default})}});function $e(){const e=M(),t=w(()=>{var r,n;return["#text","#comment"].includes((r=e.value)==null?void 0:r.$el.nodeName)?(n=e.value)==null?void 0:n.$el.nextElementSibling:le(e)});return{primitiveElement:e,currentElement:t}}Ye({layersRoot:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set});pt(()=>M([]));const kt="data-radix-vue-collection-item",[ge,zt]=ae("CollectionProvider");function Et(e=kt){const t=M(new Map),r=M(),n=zt({collectionRef:r,itemMap:t,attrName:e}),{getItems:a}=Ve(n),l=w(()=>Array.from(n.itemMap.value.values())),o=w(()=>n.itemMap.value.size);return{getItems:a,reactiveItems:l,itemMapSize:o}}const At=_({name:"CollectionSlot",setup(e,{slots:t}){const r=ge(),{primitiveElement:n,currentElement:a}=$e();return ce(a,()=>{r.collectionRef.value=a.value}),()=>Q(ve,{ref:n},t)}}),Mt=_({name:"CollectionItem",setup(e,{slots:t,attrs:r}){const n=ge(),{primitiveElement:a,currentElement:l}=$e(),o=F();return st(i=>{var p;if(l.value){const s=Se(l.value);n.itemMap.value.set(s,{ref:l.value,...Se(((p=o?.parent)==null?void 0:p.props)??{})}),i(()=>n.itemMap.value.delete(s))}}),()=>Q(ve,{...r,[n.attrName]:"",ref:a},t)}});function Ve(e){const t=e??ge();return{getItems:()=>{const r=t.collectionRef.value;if(!r)return[];const n=Array.from(r.querySelectorAll(`[${t.attrName}]`));return Array.from(t.itemMap.value.values()).sort((a,l)=>n.indexOf(a.ref)-n.indexOf(l.ref))}}}function Pt(e=[],t,r){const n=[...e];return n[r]=t,n.sort((a,l)=>a-l)}function je(e,t,r){const n=100/(r-t)*(e-t);return _e(n,0,100)}function _t(e,t){return t>2?`Value ${e+1} of ${t}`:t===2?["Minimum","Maximum"][e]:void 0}function It(e,t){if(e.length===1)return 0;const r=e.map(a=>Math.abs(a-t)),n=Math.min(...r);return r.indexOf(n)}function Rt(e,t,r){const n=e/2,a=he([0,50],[0,n]);return(n-a(t)*r)*r}function $t(e){return e.slice(0,-1).map((t,r)=>e[r+1]-t)}function Vt(e,t){if(t>0){const r=$t(e);return Math.min(...r)>=t}return!0}function he(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(r-e[0])}}function jt(e){return(String(e).split(".")[1]||"").length}function Dt(e,t){const r=10**t;return Math.round(e*r)/r}const De=["PageUp","PageDown"],Te=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],Ne={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},[Oe,Ke]=ae(["SliderVertical","SliderHorizontal"]),Be=_({__name:"SliderImpl",props:{asChild:{type:Boolean},as:{default:"span"}},emits:["slideStart","slideMove","slideEnd","homeKeyDown","endKeyDown","stepKeyDown"],setup(e,{emit:t}){const r=e,n=t,a=ie();return(l,o)=>(R(),N(u(te),ee({"data-slider-impl":""},r,{onKeydown:o[0]||(o[0]=i=>{i.key==="Home"?(n("homeKeyDown",i),i.preventDefault()):i.key==="End"?(n("endKeyDown",i),i.preventDefault()):u(De).concat(u(Te)).includes(i.key)&&(n("stepKeyDown",i),i.preventDefault())}),onPointerdown:o[1]||(o[1]=i=>{const p=i.target;p.setPointerCapture(i.pointerId),i.preventDefault(),u(a).thumbElements.value.includes(p)?p.focus():n("slideStart",i)}),onPointermove:o[2]||(o[2]=i=>{i.target.hasPointerCapture(i.pointerId)&&n("slideMove",i)}),onPointerup:o[3]||(o[3]=i=>{const p=i.target;p.hasPointerCapture(i.pointerId)&&(p.releasePointerCapture(i.pointerId),n("slideEnd",i))})}),{default:$(()=>[O(l.$slots,"default")]),_:3},16))}}),Tt=_({__name:"SliderHorizontal",props:{dir:{},min:{},max:{},inverted:{type:Boolean}},emits:["slideEnd","slideStart","slideMove","homeKeyDown","endKeyDown","stepKeyDown"],setup(e,{emit:t}){const r=e,n=t,{max:a,min:l,dir:o,inverted:i}=pe(r),{forwardRef:p,currentElement:s}=H(),f=M(),g=w(()=>o?.value==="ltr"&&!i.value||o?.value!=="ltr"&&i.value);function h(c){const m=f.value||s.value.getBoundingClientRect(),d=[0,m.width],b=g.value?[l.value,a.value]:[a.value,l.value],k=he(d,b);return f.value=m,k(c-m.left)}return Ke({startEdge:g.value?"left":"right",endEdge:g.value?"right":"left",direction:g.value?1:-1,size:"width"}),(c,m)=>(R(),N(Be,{ref:u(p),dir:u(o),"data-orientation":"horizontal",style:me({"--radix-slider-thumb-transform":"translateX(-50%)"}),onSlideStart:m[0]||(m[0]=d=>{const b=h(d.clientX);n("slideStart",b)}),onSlideMove:m[1]||(m[1]=d=>{const b=h(d.clientX);n("slideMove",b)}),onSlideEnd:m[2]||(m[2]=()=>{f.value=void 0,n("slideEnd")}),onStepKeyDown:m[3]||(m[3]=d=>{const b=g.value?"from-left":"from-right",k=u(Ne)[b].includes(d.key);n("stepKeyDown",d,k?-1:1)}),onEndKeyDown:m[4]||(m[4]=d=>n("endKeyDown",d)),onHomeKeyDown:m[5]||(m[5]=d=>n("homeKeyDown",d))},{default:$(()=>[O(c.$slots,"default")]),_:3},8,["dir","style"]))}}),Nt=_({__name:"SliderVertical",props:{min:{},max:{},inverted:{type:Boolean}},emits:["slideEnd","slideStart","slideMove","homeKeyDown","endKeyDown","stepKeyDown"],setup(e,{emit:t}){const r=e,n=t,{max:a,min:l,inverted:o}=pe(r),{forwardRef:i,currentElement:p}=H(),s=M(),f=w(()=>!o.value);function g(h){const c=s.value||p.value.getBoundingClientRect(),m=[0,c.height],d=f.value?[a.value,l.value]:[l.value,a.value],b=he(m,d);return s.value=c,b(h-c.top)}return Ke({startEdge:f.value?"bottom":"top",endEdge:f.value?"top":"bottom",size:"height",direction:f.value?1:-1}),(h,c)=>(R(),N(Be,{ref:u(i),"data-orientation":"vertical",style:me({"--radix-slider-thumb-transform":"translateY(50%)"}),onSlideStart:c[0]||(c[0]=m=>{const d=g(m.clientY);n("slideStart",d)}),onSlideMove:c[1]||(c[1]=m=>{const d=g(m.clientY);n("slideMove",d)}),onSlideEnd:c[2]||(c[2]=()=>{s.value=void 0,n("slideEnd")}),onStepKeyDown:c[3]||(c[3]=m=>{const d=f.value?"from-bottom":"from-top",b=u(Ne)[d].includes(m.key);n("stepKeyDown",m,b?-1:1)}),onEndKeyDown:c[4]||(c[4]=m=>n("endKeyDown",m)),onHomeKeyDown:c[5]||(c[5]=m=>n("homeKeyDown",m))},{default:$(()=>[O(h.$slots,"default")]),_:3},8,["style"]))}}),Ot=["value","name","disabled","step"],[ie,Kt]=ae("SliderRoot"),Ir=_({inheritAttrs:!1,__name:"SliderRoot",props:{name:{},defaultValue:{default:()=>[0]},modelValue:{},disabled:{type:Boolean,default:!1},orientation:{default:"horizontal"},dir:{},inverted:{type:Boolean,default:!1},min:{default:0},max:{default:100},step:{default:1},minStepsBetweenThumbs:{default:0},asChild:{type:Boolean},as:{}},emits:["update:modelValue","valueCommit"],setup(e,{emit:t}){const r=e,n=t,{min:a,max:l,step:o,minStepsBetweenThumbs:i,orientation:p,disabled:s,dir:f}=pe(r),g=yt(f),{forwardRef:h,currentElement:c}=H(),m=wt(c);Et();const d=gt(r,"modelValue",n,{defaultValue:r.defaultValue,passive:r.modelValue===void 0}),b=M(0),k=M(d.value);function A(C){const S=It(d.value,C);P(C,S)}function E(C){P(C,b.value)}function D(){const C=k.value[b.value];d.value[b.value]!==C&&n("valueCommit",ot(d.value))}function P(C,S,{commit:z}={commit:!1}){var j;const G=jt(o.value),y=Dt(Math.round((C-a.value)/o.value)*o.value+a.value,G),W=_e(y,a.value,l.value),I=Pt(d.value,W,S);if(Vt(I,i.value*o.value)){b.value=I.indexOf(W);const Y=String(I)!==String(d.value);Y&&z&&n("valueCommit",I),Y&&((j=V.value[b.value])==null||j.focus(),d.value=I)}}const V=M([]);return Kt({modelValue:d,valueIndexToChangeRef:b,thumbElements:V,orientation:p,min:a,max:l,disabled:s}),(C,S)=>(R(),de(ue,null,[Me(u(At),null,{default:$(()=>[(R(),N(Ze(u(p)==="horizontal"?Tt:Nt),ee(C.$attrs,{ref:u(h),"as-child":C.asChild,as:C.as,min:u(a),max:u(l),dir:u(g),inverted:C.inverted,"aria-disabled":u(s),"data-disabled":u(s)?"":void 0,onPointerdown:S[0]||(S[0]=()=>{u(s)||(k.value=u(d))}),onSlideStart:S[1]||(S[1]=z=>!u(s)&&A(z)),onSlideMove:S[2]||(S[2]=z=>!u(s)&&E(z)),onSlideEnd:S[3]||(S[3]=z=>!u(s)&&D()),onHomeKeyDown:S[4]||(S[4]=z=>!u(s)&&P(u(a),0,{commit:!0})),onEndKeyDown:S[5]||(S[5]=z=>!u(s)&&P(u(l),u(d).length-1,{commit:!0})),onStepKeyDown:S[6]||(S[6]=(z,j)=>{if(!u(s)){const G=u(De).includes(z.key)||z.shiftKey&&u(Te).includes(z.key)?10:1,y=b.value,W=u(d)[y],I=u(o)*G*j;P(W+I,y,{commit:!0})}})}),{default:$(()=>[O(C.$slots,"default",{modelValue:u(d)})]),_:3},16,["as-child","as","min","max","dir","inverted","aria-disabled","data-disabled"]))]),_:3}),u(m)?(R(!0),de(ue,{key:0},Qe(u(d),(z,j)=>(R(),de("input",{key:j,value:z,type:"number",style:{display:"none"},name:C.name?C.name+(u(d).length>1?"[]":""):void 0,disabled:u(s),step:u(o)},null,8,Ot))),128)):et("",!0)],64))}}),Bt=_({inheritAttrs:!1,__name:"SliderThumbImpl",props:{index:{},asChild:{type:Boolean},as:{}},setup(e){const t=e,r=ie(),n=Oe(),{forwardRef:a,currentElement:l}=H(),o=w(()=>{var c,m;return(m=(c=r.modelValue)==null?void 0:c.value)==null?void 0:m[t.index]}),i=w(()=>o.value===void 0?0:je(o.value,r.min.value??0,r.max.value??100)),p=w(()=>{var c,m;return _t(t.index,((m=(c=r.modelValue)==null?void 0:c.value)==null?void 0:m.length)??0)}),s=Ct(l),f=w(()=>s[n.size].value),g=w(()=>f.value?Rt(f.value,i.value,n.direction):0),h=bt();return be(()=>{r.thumbElements.value.push(l.value)}),at(()=>{const c=r.thumbElements.value.findIndex(m=>m===l.value)??-1;r.thumbElements.value.splice(c,1)}),(c,m)=>(R(),N(u(Mt),null,{default:$(()=>[Me(u(te),ee(c.$attrs,{ref:u(a),role:"slider","data-radix-vue-collection-item":"",tabindex:u(r).disabled.value?void 0:0,"aria-label":c.$attrs["aria-label"]||p.value,"data-disabled":u(r).disabled.value?"":void 0,"data-orientation":u(r).orientation.value,"aria-valuenow":o.value,"aria-valuemin":u(r).min.value,"aria-valuemax":u(r).max.value,"aria-orientation":u(r).orientation.value,"as-child":c.asChild,as:c.as,style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[u(n).startEdge]:`calc(${i.value}% + ${g.value}px)`,display:!u(h)&&o.value===void 0?"none":void 0},onFocus:m[0]||(m[0]=()=>{u(r).valueIndexToChangeRef.value=c.index})}),{default:$(()=>[O(c.$slots,"default")]),_:3},16,["tabindex","aria-label","data-disabled","data-orientation","aria-valuenow","aria-valuemin","aria-valuemax","aria-orientation","as-child","as","style"])]),_:3}))}}),Rr=_({__name:"SliderThumb",props:{asChild:{type:Boolean},as:{}},setup(e){const t=e,{getItems:r}=Ve(),{forwardRef:n,currentElement:a}=H(),l=w(()=>a.value?r().findIndex(o=>o.ref===a.value):-1);return(o,i)=>(R(),N(Bt,ee({ref:u(n)},t,{index:l.value}),{default:$(()=>[O(o.$slots,"default")]),_:3},16,["index"]))}}),$r=_({__name:"SliderTrack",props:{asChild:{type:Boolean},as:{default:"span"}},setup(e){const t=ie();return H(),(r,n)=>(R(),N(u(te),{"as-child":r.asChild,as:r.as,"data-disabled":u(t).disabled.value?"":void 0,"data-orientation":u(t).orientation.value},{default:$(()=>[O(r.$slots,"default")]),_:3},8,["as-child","as","data-disabled","data-orientation"]))}}),Vr=_({__name:"SliderRange",props:{asChild:{type:Boolean},as:{default:"span"}},setup(e){const t=ie(),r=Oe();H();const n=w(()=>{var o,i;return(i=(o=t.modelValue)==null?void 0:o.value)==null?void 0:i.map(p=>je(p,t.min.value,t.max.value))}),a=w(()=>t.modelValue.value.length>1?Math.min(...n.value):0),l=w(()=>100-Math.max(...n.value));return(o,i)=>(R(),N(u(te),{"data-disabled":u(t).disabled.value?"":void 0,"data-orientation":u(t).orientation.value,"as-child":o.asChild,as:o.as,style:me({[u(r).startEdge]:`${a.value}%`,[u(r).endEdge]:`${l.value}%`})},{default:$(()=>[O(o.$slots,"default")]),_:3},8,["data-disabled","data-orientation","as-child","as","style"]))}});function Gt(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}Gt();function Ge(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=Ge(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Wt(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=Ge(e))&&(n&&(n+=" "),n+=t);return n}const ye="-";function Lt(e){const t=Ft(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:n}=e;function a(o){const i=o.split(ye);return i[0]===""&&i.length!==1&&i.shift(),We(i,t)||Ht(o)}function l(o,i){const p=r[o]||[];return i&&n[o]?[...p,...n[o]]:p}return{getClassGroupId:a,getConflictingClassGroupIds:l}}function We(e,t){if(e.length===0)return t.classGroupId;const r=e[0],n=t.nextPart.get(r),a=n?We(e.slice(1),n):void 0;if(a)return a;if(t.validators.length===0)return;const l=e.join(ye);return t.validators.find(({validator:o})=>o(l))?.classGroupId}const ze=/^\[(.+)\]$/;function Ht(e){if(ze.test(e)){const t=ze.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}}function Ft(e){const{theme:t,prefix:r}=e,n={nextPart:new Map,validators:[]};return Yt(Object.entries(e.classGroups),r).forEach(([l,o])=>{fe(o,n,l,t)}),n}function fe(e,t,r,n){e.forEach(a=>{if(typeof a=="string"){const l=a===""?t:Ee(t,a);l.classGroupId=r;return}if(typeof a=="function"){if(Ut(a)){fe(a(n),t,r,n);return}t.validators.push({validator:a,classGroupId:r});return}Object.entries(a).forEach(([l,o])=>{fe(o,Ee(t,l),r,n)})})}function Ee(e,t){let r=e;return t.split(ye).forEach(n=>{r.nextPart.has(n)||r.nextPart.set(n,{nextPart:new Map,validators:[]}),r=r.nextPart.get(n)}),r}function Ut(e){return e.isThemeGetter}function Yt(e,t){return t?e.map(([r,n])=>{const a=n.map(l=>typeof l=="string"?t+l:typeof l=="object"?Object.fromEntries(Object.entries(l).map(([o,i])=>[t+o,i])):l);return[r,a]}):e}function Xt(e){if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,n=new Map;function a(l,o){r.set(l,o),t++,t>e&&(t=0,n=r,r=new Map)}return{get(l){let o=r.get(l);if(o!==void 0)return o;if((o=n.get(l))!==void 0)return a(l,o),o},set(l,o){r.has(l)?r.set(l,o):a(l,o)}}}const Le="!";function Jt(e){const t=e.separator,r=t.length===1,n=t[0],a=t.length;return function(o){const i=[];let p=0,s=0,f;for(let d=0;d<o.length;d++){let b=o[d];if(p===0){if(b===n&&(r||o.slice(d,d+a)===t)){i.push(o.slice(s,d)),s=d+a;continue}if(b==="/"){f=d;continue}}b==="["?p++:b==="]"&&p--}const g=i.length===0?o:o.substring(s),h=g.startsWith(Le),c=h?g.substring(1):g,m=f&&f>s?f-s:void 0;return{modifiers:i,hasImportantModifier:h,baseClassName:c,maybePostfixModifierPosition:m}}}function qt(e){if(e.length<=1)return e;const t=[];let r=[];return e.forEach(n=>{n[0]==="["?(t.push(...r.sort(),n),r=[]):r.push(n)}),t.push(...r.sort()),t}function Zt(e){return{cache:Xt(e.cacheSize),splitModifiers:Jt(e),...Lt(e)}}const Qt=/\s+/;function er(e,t){const{splitModifiers:r,getClassGroupId:n,getConflictingClassGroupIds:a}=t,l=new Set;return e.trim().split(Qt).map(o=>{const{modifiers:i,hasImportantModifier:p,baseClassName:s,maybePostfixModifierPosition:f}=r(o);let g=n(f?s.substring(0,f):s),h=!!f;if(!g){if(!f)return{isTailwindClass:!1,originalClassName:o};if(g=n(s),!g)return{isTailwindClass:!1,originalClassName:o};h=!1}const c=qt(i).join(":");return{isTailwindClass:!0,modifierId:p?c+Le:c,classGroupId:g,originalClassName:o,hasPostfixModifier:h}}).reverse().filter(o=>{if(!o.isTailwindClass)return!0;const{modifierId:i,classGroupId:p,hasPostfixModifier:s}=o,f=i+p;return l.has(f)?!1:(l.add(f),a(p,s).forEach(g=>l.add(i+g)),!0)}).reverse().map(o=>o.originalClassName).join(" ")}function tr(){let e=0,t,r,n="";for(;e<arguments.length;)(t=arguments[e++])&&(r=He(t))&&(n&&(n+=" "),n+=r);return n}function He(e){if(typeof e=="string")return e;let t,r="";for(let n=0;n<e.length;n++)e[n]&&(t=He(e[n]))&&(r&&(r+=" "),r+=t);return r}function rr(e,...t){let r,n,a,l=o;function o(p){const s=t.reduce((f,g)=>g(f),e());return r=Zt(s),n=r.cache.get,a=r.cache.set,l=i,i(p)}function i(p){const s=n(p);if(s)return s;const f=er(p,r);return a(p,f),f}return function(){return l(tr.apply(null,arguments))}}function x(e){const t=r=>r[e]||[];return t.isThemeGetter=!0,t}const Fe=/^\[(?:([a-z-]+):)?(.+)\]$/i,nr=/^\d+\/\d+$/,or=new Set(["px","full","screen"]),ar=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,lr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ir=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,sr=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,dr=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function T(e){return L(e)||or.has(e)||nr.test(e)}function K(e){return U(e,"length",gr)}function L(e){return!!e&&!Number.isNaN(Number(e))}function oe(e){return U(e,"number",L)}function q(e){return!!e&&Number.isInteger(Number(e))}function ur(e){return e.endsWith("%")&&L(e.slice(0,-1))}function v(e){return Fe.test(e)}function B(e){return ar.test(e)}const cr=new Set(["length","size","percentage"]);function fr(e){return U(e,cr,Ue)}function pr(e){return U(e,"position",Ue)}const mr=new Set(["image","url"]);function br(e){return U(e,mr,yr)}function vr(e){return U(e,"",hr)}function Z(){return!0}function U(e,t,r){const n=Fe.exec(e);return n?n[1]?typeof t=="string"?n[1]===t:t.has(n[1]):r(n[2]):!1}function gr(e){return lr.test(e)&&!ir.test(e)}function Ue(){return!1}function hr(e){return sr.test(e)}function yr(e){return dr.test(e)}function xr(){const e=x("colors"),t=x("spacing"),r=x("blur"),n=x("brightness"),a=x("borderColor"),l=x("borderRadius"),o=x("borderSpacing"),i=x("borderWidth"),p=x("contrast"),s=x("grayscale"),f=x("hueRotate"),g=x("invert"),h=x("gap"),c=x("gradientColorStops"),m=x("gradientColorStopPositions"),d=x("inset"),b=x("margin"),k=x("opacity"),A=x("padding"),E=x("saturate"),D=x("scale"),P=x("sepia"),V=x("skew"),C=x("space"),S=x("translate"),z=()=>["auto","contain","none"],j=()=>["auto","hidden","clip","visible","scroll"],G=()=>["auto",v,t],y=()=>[v,t],W=()=>["",T,K],I=()=>["auto",L,v],Y=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],re=()=>["solid","dashed","dotted","double","none"],xe=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],se=()=>["start","end","center","between","around","evenly","stretch"],X=()=>["","0",v],we=()=>["auto","avoid","all","avoid-page","page","left","right","column"],J=()=>[L,oe],ne=()=>[L,v];return{cacheSize:500,separator:":",theme:{colors:[Z],spacing:[T,K],blur:["none","",B,v],brightness:J(),borderColor:[e],borderRadius:["none","","full",B,v],borderSpacing:y(),borderWidth:W(),contrast:J(),grayscale:X(),hueRotate:ne(),invert:X(),gap:y(),gradientColorStops:[e],gradientColorStopPositions:[ur,K],inset:G(),margin:G(),opacity:J(),padding:y(),saturate:J(),scale:J(),sepia:X(),skew:ne(),space:y(),translate:y()},classGroups:{aspect:[{aspect:["auto","square","video",v]}],container:["container"],columns:[{columns:[B]}],"break-after":[{"break-after":we()}],"break-before":[{"break-before":we()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Y(),v]}],overflow:[{overflow:j()}],"overflow-x":[{"overflow-x":j()}],"overflow-y":[{"overflow-y":j()}],overscroll:[{overscroll:z()}],"overscroll-x":[{"overscroll-x":z()}],"overscroll-y":[{"overscroll-y":z()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[d]}],"inset-x":[{"inset-x":[d]}],"inset-y":[{"inset-y":[d]}],start:[{start:[d]}],end:[{end:[d]}],top:[{top:[d]}],right:[{right:[d]}],bottom:[{bottom:[d]}],left:[{left:[d]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",q,v]}],basis:[{basis:G()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",v]}],grow:[{grow:X()}],shrink:[{shrink:X()}],order:[{order:["first","last","none",q,v]}],"grid-cols":[{"grid-cols":[Z]}],"col-start-end":[{col:["auto",{span:["full",q,v]},v]}],"col-start":[{"col-start":I()}],"col-end":[{"col-end":I()}],"grid-rows":[{"grid-rows":[Z]}],"row-start-end":[{row:["auto",{span:[q,v]},v]}],"row-start":[{"row-start":I()}],"row-end":[{"row-end":I()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",v]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",v]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...se()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...se(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...se(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[A]}],px:[{px:[A]}],py:[{py:[A]}],ps:[{ps:[A]}],pe:[{pe:[A]}],pt:[{pt:[A]}],pr:[{pr:[A]}],pb:[{pb:[A]}],pl:[{pl:[A]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[C]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[C]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",v,t]}],"min-w":[{"min-w":[v,t,"min","max","fit"]}],"max-w":[{"max-w":[v,t,"none","full","min","max","fit","prose",{screen:[B]},B]}],h:[{h:[v,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[v,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[v,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[v,t,"auto","min","max","fit"]}],"font-size":[{text:["base",B,K]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",oe]}],"font-family":[{font:[Z]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",v]}],"line-clamp":[{"line-clamp":["none",L,oe]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",T,v]}],"list-image":[{"list-image":["none",v]}],"list-style-type":[{list:["none","disc","decimal",v]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[k]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[k]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...re(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",T,K]}],"underline-offset":[{"underline-offset":["auto",T,v]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:y()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",v]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",v]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[k]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Y(),pr]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",fr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},br]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[m]}],"gradient-via-pos":[{via:[m]}],"gradient-to-pos":[{to:[m]}],"gradient-from":[{from:[c]}],"gradient-via":[{via:[c]}],"gradient-to":[{to:[c]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[k]}],"border-style":[{border:[...re(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[k]}],"divide-style":[{divide:re()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...re()]}],"outline-offset":[{"outline-offset":[T,v]}],"outline-w":[{outline:[T,K]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:W()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[k]}],"ring-offset-w":[{"ring-offset":[T,K]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",B,vr]}],"shadow-color":[{shadow:[Z]}],opacity:[{opacity:[k]}],"mix-blend":[{"mix-blend":[...xe(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":xe()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[n]}],contrast:[{contrast:[p]}],"drop-shadow":[{"drop-shadow":["","none",B,v]}],grayscale:[{grayscale:[s]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[g]}],saturate:[{saturate:[E]}],sepia:[{sepia:[P]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[p]}],"backdrop-grayscale":[{"backdrop-grayscale":[s]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[k]}],"backdrop-saturate":[{"backdrop-saturate":[E]}],"backdrop-sepia":[{"backdrop-sepia":[P]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",v]}],duration:[{duration:ne()}],ease:[{ease:["linear","in","out","in-out",v]}],delay:[{delay:ne()}],animate:[{animate:["none","spin","ping","pulse","bounce",v]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[D]}],"scale-x":[{"scale-x":[D]}],"scale-y":[{"scale-y":[D]}],rotate:[{rotate:[q,v]}],"translate-x":[{"translate-x":[S]}],"translate-y":[{"translate-y":[S]}],"skew-x":[{"skew-x":[V]}],"skew-y":[{"skew-y":[V]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",v]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",v]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":y()}],"scroll-mx":[{"scroll-mx":y()}],"scroll-my":[{"scroll-my":y()}],"scroll-ms":[{"scroll-ms":y()}],"scroll-me":[{"scroll-me":y()}],"scroll-mt":[{"scroll-mt":y()}],"scroll-mr":[{"scroll-mr":y()}],"scroll-mb":[{"scroll-mb":y()}],"scroll-ml":[{"scroll-ml":y()}],"scroll-p":[{"scroll-p":y()}],"scroll-px":[{"scroll-px":y()}],"scroll-py":[{"scroll-py":y()}],"scroll-ps":[{"scroll-ps":y()}],"scroll-pe":[{"scroll-pe":y()}],"scroll-pt":[{"scroll-pt":y()}],"scroll-pr":[{"scroll-pr":y()}],"scroll-pb":[{"scroll-pb":y()}],"scroll-pl":[{"scroll-pl":y()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",v]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[T,K,oe]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const wr=rr(xr);function Sr(...e){return wr(Wt(e))}const Cr=_({__name:"Button",props:{variant:{},size:{},class:{},asChild:{type:Boolean},as:{default:"button"}},setup(e,{expose:t}){t();const n={props:e,get Primitive(){return te},get buttonVariants(){return zr},get cn(){return Sr}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}});function kr(e,t,r,n,a,l){return R(),N(n.Primitive,{as:r.as,"as-child":r.asChild,class:dt(n.cn(n.buttonVariants({variant:r.variant,size:r.size}),n.props.class))},{default:$(()=>[O(e.$slots,"default")]),_:3},8,["as","as-child","class"])}const jr=ut(Cr,[["render",kr]]),zr=ft("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",xs:"h-7 rounded px-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}});export{jr as B,$r as C,Rr as b,Sr as c,Ir as g,Vr as w,_r as x};
