import{b as h,n as L,o as b,r as g,_ as P,j as e,c as _,p as $,d as w,g as G,s as W,u as T,q as E,t as z,v as B,M as I,B as x,w as c,x as R,k as v,y as q,z as D,R as O,A as F,D as J}from"./index-2UtJU14g.js";import{D as Y,a as Z,b as H}from"./DialogTitle-DQVSKqfZ.js";import{s as K,S as y}from"./Stack-BqGRcPk_.js";const Q=["className","component","disableGutters","fixed","maxWidth","classes"],V=L(),X=K("div",{name:"MuiContainer",slot:"Root",overridesResolver:(i,s)=>{const{ownerState:a}=i;return[s.root,s[`maxWidth${b(String(a.maxWidth))}`],a.fixed&&s.fixed,a.disableGutters&&s.disableGutters]}}),tt=i=>$({props:i,name:"MuiContainer",defaultTheme:V}),et=(i,s)=>{const a=d=>G(s,d),{classes:r,fixed:l,disableGutters:t,maxWidth:n}=i,o={root:["root",n&&`maxWidth${b(String(n))}`,l&&"fixed",t&&"disableGutters"]};return w(o,a,r)};function at(i={}){const{createStyledComponent:s=X,useThemeProps:a=tt,componentName:r="MuiContainer"}=i,l=s(({theme:n,ownerState:o})=>h({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!o.disableGutters&&{paddingLeft:n.spacing(2),paddingRight:n.spacing(2),[n.breakpoints.up("sm")]:{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}}),({theme:n,ownerState:o})=>o.fixed&&Object.keys(n.breakpoints.values).reduce((d,p)=>{const m=p,u=n.breakpoints.values[m];return u!==0&&(d[n.breakpoints.up(m)]={maxWidth:`${u}${n.breakpoints.unit}`}),d},{}),({theme:n,ownerState:o})=>h({},o.maxWidth==="xs"&&{[n.breakpoints.up("xs")]:{maxWidth:Math.max(n.breakpoints.values.xs,444)}},o.maxWidth&&o.maxWidth!=="xs"&&{[n.breakpoints.up(o.maxWidth)]:{maxWidth:`${n.breakpoints.values[o.maxWidth]}${n.breakpoints.unit}`}}));return g.forwardRef(function(o,d){const p=a(o),{className:m,component:u="div",disableGutters:S=!1,fixed:N=!1,maxWidth:k="lg"}=p,A=P(p,Q),C=h({},p,{component:u,disableGutters:S,fixed:N,maxWidth:k}),M=et(C,r);return e.jsx(l,h({as:u,ownerState:C,className:_(M.root,m),ref:d},A))})}const it=at({createStyledComponent:W("div",{name:"MuiContainer",slot:"Root",overridesResolver:(i,s)=>{const{ownerState:a}=i;return[s.root,s[`maxWidth${b(String(a.maxWidth))}`],a.fixed&&s.fixed,a.disableGutters&&s.disableGutters]}}),useThemeProps:i=>T({props:i,name:"MuiContainer"})}),nt=it;var j={},st=z;Object.defineProperty(j,"__esModule",{value:!0});var U=j.default=void 0,ot=st(E()),rt=e;U=j.default=(0,ot.default)((0,rt.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");function lt(i){const[s,a]=g.useState(null),r=()=>{B(i,l=>{var t;l&&a((t=i==null?void 0:i.currentUser)==null?void 0:t.providerData)})};return g.useEffect(()=>{r()},[]),s}const dt=W(Y)(({theme:i})=>({"& .MuiDialogContent-root":{padding:i.spacing(2)},"& .MuiDialogActions-root":{padding:i.spacing(1)}})),ct=({open:i,handleClose:s})=>{const[a,r]=g.useState({displayName:"",photoURL:""}),l=async t=>{var n;if(t.preventDefault(),(a==null?void 0:a.displayName)===""&&(a==null?void 0:a.photoURL)===""){v.error("Please fill at least one property");return}try{await q((n=D)==null?void 0:n.currentUser,a),v.success("Profie updated successfully"),s(),r({...a,displayName:"",photoURL:""})}catch(o){v.error(o.message),s()}};return e.jsxs(dt,{open:i,children:[e.jsx(Z,{sx:{m:0,p:2},id:"customized-dialog-title",children:"Edit Your Account"}),e.jsx(I,{"aria-label":"close",onClick:s,sx:{position:"absolute",right:8,top:8,color:t=>t.palette.grey[500]},children:e.jsx(U,{})}),e.jsx(H,{dividers:!0,children:e.jsx(x,{sx:{display:"flex",flexDirection:"column",padding:"10px",justifyContent:"center",alignItems:"center"},children:e.jsxs("form",{onSubmit:l,children:[e.jsx(x,{children:e.jsx(c,{onChange:()=>r({...a,displayName:event.target.value}),variant:"standard",sx:{width:400,mb:3},placeholder:"Display Name - John Doe",className:"input",type:"text"})}),e.jsx(c,{onChange:()=>r({...a,photoURL:event.target.value}),variant:"standard",sx:{width:400},placeholder:"Image URL",className:"input",type:"text"}),e.jsx(x,{children:e.jsx(R,{fullWidth:!0,variant:"contained",type:"submit",children:"Update"})})]})})})]})},f={margin:"16px"},mt=()=>{const[i,s]=O.useState(!1),a=()=>s(!0),r=()=>s(!1),l=lt(D);return e.jsxs(nt,{children:[e.jsxs(y,{direction:"row",children:[e.jsx(y,{padding:2,direction:"column",width:500,alignItems:"center",justifyContent:"center",children:l&&l.map(t=>e.jsxs(x,{width:400,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",children:[e.jsx(F,{src:t==null?void 0:t.photoURL,sx:{width:150,height:150,fontSize:"70px",m:4},children:(t==null?void 0:t.displayName)||"Z"}),e.jsx(c,{style:f,variant:"outlined",label:"Display Name",fullWidth:!0,value:(t==null?void 0:t.displayName)||"NA",disabled:!0}),e.jsx(c,{style:f,variant:"outlined",label:"Email",fullWidth:!0,value:t==null?void 0:t.email,disabled:!0}),e.jsx(c,{style:f,variant:"outlined",label:"Phone",fullWidth:!0,value:(t==null?void 0:t.phoneNumber)||"NA",disabled:!0}),e.jsx(c,{style:f,variant:"outlined",label:"Avatar URL",fullWidth:!0,value:(t==null?void 0:t.photoURL)||"NA",disabled:!0}),e.jsx(R,{fullWidth:!0,onClick:a,variant:"contained",color:"info",sx:{fontWeight:"700",fontSize:20},children:"Edit"})]},t==null?void 0:t.email))}),e.jsx(x,{children:e.jsx(J,{orientation:"vertical",sx:{mt:9},variant:"fullWidth"})})]}),e.jsx(ct,{open:i,handleClose:r})]})};export{mt as default};
