import{g as z,u as M,h as H,j as J,d as K,m as Q,n as W,e as u,r as X,b as e,o as n,c,f as l,a,q as Z,z as G,w as p,s as T,t as _,v as m,C as h,y as g,x as f,D as x,P as U,L as ee,E as te,F as $,B as D}from"./index.495fe71e.js";import{_ as se,E as oe}from"./PageNotFound.ba3337be.js";const ae={key:0},ie={key:1},re={key:2},ne={class:"the-grid"},le={class:"left-grid"},ue={class:"poster"},de=["src","alt","title"],ce={class:"mid-grid"},pe={class:"right-grid"},_e={setup(me){const{t:i}=M({useScope:"global"}),Y=H(),t=J(),d=K(),y=Q();W(()=>{t.listOnceLoaded||t.requestList(),t.namesOnceLoaded||t.requestNames(),t.descriptionsOnceLoaded||t.requestDescriptions(),d.listOnceLoaded||d.requestList(),d.namesOnceLoaded||d.requestNames(),y.listOnceLoaded||y.requestList()});const s=u(()=>t.getById(Y.params.id)),V=2,w=u(()=>{var r;return t.getParentGroups((r=s.value)==null?void 0:r.id)}),k=u(()=>w.value.slice(0,V)),L=2,b=u(()=>{var r;return t.getChildGroups((r=s.value)==null?void 0:r.id)}),E=u(()=>b.value.slice(0,L)),P=6,S=u(()=>{var r;return t.getVtubers((r=s.value)==null?void 0:r.id)}),q=u(()=>S.value.slice(0,P)),A=[];return(r,he)=>{var B,C,N,O,R,F,I;const j=X("router-link");return e(t).listLoading?(n(),c("div",ae,"Loading")):e(s)?(n(),c("div",re,[a("header",null,[a("h1",null,[l(Z,{names:e(t).getNamesByFormat((B=e(s))==null?void 0:B.id)},null,8,["names"])]),a("h5",null,[l(j,{to:{name:e(G)}},{default:p(()=>[T(_(e(i)("views.GroupView.tofulllistlink")),1)]),_:1},8,["to"]),T(" / "+_(e(i)("views.GroupView.header")),1)])]),a("main",ne,[a("div",le,[a("div",ue,[a("img",{class:"",src:(C=e(s))==null?void 0:C.avatarUrl,alt:e(t).getFormattedName((N=e(s))==null?void 0:N.id),title:e(t).getFormattedName((O=e(s))==null?void 0:O.id)},null,8,de)]),l(m,{class:"about",text:e(i)("views.GroupView.about")},{default:p(()=>{var o;return[l(te,{id:(o=e(s))==null?void 0:o.id},null,8,["id"])]}),_:1},8,["text"]),e(k).length>0?(n(),h(f,{key:0,class:"parent-groups",type:e(g),headlineText:e(i)("views.GroupView.parentGroups"),headlineTo:e(w).length>V?{name:e(G),query:{child:(R=e(s))==null?void 0:R.id}}:null,store:e(t),tilesetTo:e(g),items:e(k)},null,8,["type","headlineText","headlineTo","store","tilesetTo","items"])):x("",!0)]),a("div",ce,[l(m,{class:"description",text:e(i)("views.GroupView.description")},{default:p(()=>{var o;return[T(_(e(t).getDescription((o=e(s))==null?void 0:o.id).text),1)]}),_:1},8,["text"]),e(q).length>0?(n(),h(f,{key:0,class:"vtubers",type:e(U),headlineText:e(i)("views.GroupView.vtubers"),headlineTo:e(S).length>P?{name:e(ee),query:{group:(F=e(s))==null?void 0:F.id}}:null,store:e(d),tilesetTo:e(U),items:e(q)},null,8,["type","headlineText","headlineTo","store","tilesetTo","items"])):x("",!0),e(E).length>0?(n(),h(f,{key:1,class:"child-groups",type:e(g),headlineText:e(i)("views.GroupView.childGroups"),headlineTo:e(b).length>L?{name:e(G),query:{parent:(I=e(s))==null?void 0:I.id}}:null,store:e(t),tilesetTo:e(g),items:e(E)},null,8,["type","headlineText","headlineTo","store","tilesetTo","items"])):x("",!0)]),a("div",pe,[l(m,{class:"links",text:e(i)("views.GroupView.links")},{default:p(()=>{var o;return[(n(!0),c($,null,D((o=e(s))==null?void 0:o.links,v=>(n(),h(oe,{key:v.url,url:v.url,title:v.name},null,8,["url","title"]))),128))]}),_:1},8,["text"]),l(m,{class:"tags",text:e(i)("views.GroupView.tags")},{default:p(()=>[(n(),c($,null,D(A,o=>a("span",{key:o},_(o)+",",1)),64))]),_:1},8,["text"])])])])):(n(),c("div",ie,[l(se)]))}}};var Ge=z(_e,[["__scopeId","data-v-4833d432"]]);export{Ge as default};
