(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],{10:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(3),s=n.n(i),o=(n(8),n(0));var d=function(){const[t,e]=Object(c.useState)([]),[n,a]=Object(c.useState)("");Object(c.useEffect)((()=>{i()}),[]);const i=async()=>{const t=await fetch("/api/tasks"),n=await t.json();e(n)},s=async(n,c)=>{const a=await fetch(`/api/tasks/${n}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}),i=await a.json();e(t.map((t=>t.id===n?i:t)))};return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"To-Do List"}),Object(o.jsxs)("form",{onSubmit:async c=>{c.preventDefault();const i=await fetch("/api/tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:n})}),s=await i.json();e([...t,s]),a("")},children:[Object(o.jsx)("input",{type:"text",value:n,onChange:t=>a(t.target.value),placeholder:"New task",required:!0}),Object(o.jsx)("button",{type:"submit",children:"Add Task"})]}),Object(o.jsx)("ul",{children:t.map((n=>Object(o.jsxs)("li",{children:[Object(o.jsx)("input",{type:"text",value:n.title,onChange:t=>s(n.id,{...n,title:t.target.value})}),Object(o.jsx)("input",{type:"checkbox",checked:n.completed,onChange:t=>s(n.id,{...n,completed:t.target.checked})}),Object(o.jsx)("button",{onClick:()=>(async n=>{await fetch(`/api/tasks/${n}`,{method:"DELETE"}),e(t.filter((t=>t.id!==n)))})(n.id),children:"Delete"})]},n.id)))})]})};var j=t=>{t&&t instanceof Function&&n.e(3).then(n.bind(null,11)).then((e=>{let{getCLS:n,getFID:c,getFCP:a,getLCP:i,getTTFB:s}=e;n(t),c(t),a(t),i(t),s(t)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),j()},8:function(t,e,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.a108e1de.chunk.js.map