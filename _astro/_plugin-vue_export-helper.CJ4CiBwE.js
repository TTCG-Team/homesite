import{P as i,K as f}from"./solana-wallets-vue.4Rnzfn79.js";import{b as m}from"./index.pj2VwCcK.js";const b=new i("TTCGkEskz8Coj1U1UHuNnquQxtm9Cj4hzKvbF5HS6Hm"),h=f.fromSecretKey(new Uint8Array([237,116,217,235,225,65,118,184,61,252,84,54,210,225,183,101,192,20,197,53,53,64,51,238,234,185,46,54,245,179,181,213,6,133,230,225,205,54,26,36,122,135,26,171,24,141,131,209,52,89,140,19,143,232,99,209,31,120,224,50,221,165,161,227])),K=new i("526SHGkpwYC5GK3NKMv4QSpAwCrFKjHbbnHs2kkHLus1"),H=new i("HUPFcCmKZFLSyDzrYpJapDDbC5DCwkZkGevbozaEAJf5"),G=new i("3WWrNLibTZsQqnGKNkn4NfKooSsGQGmPRtx5Wdj6BpA2"),M=new i("99qQVnRs9juNhwmr7hcAuGRyYAf1HR6fNiUkFReJaGFD"),N=new i("CCrd6FPk1zu5641ksm4SdXLDiHd2TRd6gSnZCXVrKrMr"),B=new i("CShrvPhcbeLDgSteGgXwJPKDzLNQHbE4WykzSMdQGhYM");var g=(t=>(t[t.DevInitAndSetMineState=0]="DevInitAndSetMineState",t[t.Mine=1]="Mine",t[t.DevSetSeller=2]="DevSetSeller",t[t.DevRefund=3]="DevRefund",t[t.Buy=4]="Buy",t))(g||{});function u(t,e){if(!t)throw new Error("assert "+e)}class _{constructor(e,n){this.size=e,this.name=n}getSize(e){return this.size}encode(e,n){return e.copy(n,0)}decode(e){return[m.Buffer.from(e.slice(0,this.size)),this.size]}}class y{constructor(e){this.name=e}getSize(e){return 1}encode(e,n){return n.set([e?1:0],0),1}decode(e){return u(e.length>0),[!!e.at(0),1]}}class s{constructor(e){this.name=e}getSize(e){return 8}encode(e,n){return n.writeBigUint64LE(BigInt(e)),8}decode(e){u(e.length>=8);let n=e.readBigUInt64LE();return[Number(n),8]}}class c{constructor(e,n){this.layout_arr=e,this.name=n}getSize(e){let n=0;for(let r=0;r<this.layout_arr.length;r++){const a=this.layout_arr[r];if(a.name){const o=a.getSize(e[a.name]);n+=o}else throw new Error("unnamed layout")}return n}encode(e,n){let r=0;for(let a=0;a<this.layout_arr.length;a++){const o=this.layout_arr[a];if(o.name){const l=o.encode(e[o.name],n);r+=l,n=n.slice(l)}else throw new Error("unnamed layout")}return r}decode(e){const n={};let r=0;for(let a=0,o=e;a<this.layout_arr.length;a++){const l=this.layout_arr[a];if(l.name){const[w,d]=l.decode(o);n[l.name]=w,o=o.slice(d),r+=d}else throw new Error("unnamed layout")}return[n,r]}}function S(t,e){const[n,r]=e.decode(t);return u(t.length==r,"decoded length must equal to input buffer length."),n}const p=new c([new s("expiring_time"),new s("max_sol_of_one_order"),new s("token_to_sell_amount"),new s("token_selled_amount"),new s("target_value_in_sol")],"seller"),k=new c([new _(32,"last_nonce"),new s("start_time"),new s("expiring_time"),new s("last_reward_time"),new s("reward_per_second"),new s("pending_reward"),new s("count"),new _(16,"mine_diff_ema")],"mine"),z=new c([new y("is_initialized"),p,k]);function C(t){return S(m.Buffer.from(t.data),z)}async function R(t){let e=await t.getAccountInfo(h.publicKey);return C(e)}const A=(t,e)=>{const n=t.__vccOpts||t;for(const[r,a]of e)n[r]=a;return n};export{B as C,g as I,A as _,H as a,K as b,b as c,N as d,G as e,R as g,M as m,C as p,h as s};
