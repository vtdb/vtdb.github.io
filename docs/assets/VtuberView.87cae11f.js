import{g as T,u as q,h as O,i as N,d as B,j as G,k as E,l as R,m as P,n as F,p,r as I,b as e,o as n,c as d,f as a,a as i,q as $,L as C,w as c,s as g,t as m,v as f,x as U,y as b,z as A,A as D,F as w,B as x,C as Y}from"./index.495fe71e.js";import{_ as K,E as j}from"./PageNotFound.ba3337be.js";const z={key:0},M={key:1},H={key:2},J={class:"vtuber-info"},Q={class:"poster"},W=["src","alt","title"],X={setup(Z){const{t:o}=q({useScope:"global"}),h=O(),u=N(),t=B(),l=G(),_=E(),v=R(),V=P();F(()=>{t.listOnceLoaded||t.requestList(),t.namesOnceLoaded||t.requestNames(),t.descriptionsOnceLoaded||t.requestDescriptions(),u.langNamesAreSet||u.setLangNames(),u.knowledgeOnceLoaded||u.requestKnowledge(),_.listOnceLoaded||_.requestList(),_.namesOnceLoaded||_.requestNames(),v.listOnceLoaded||v.requestList(),l.listOnceLoaded||l.requestList(),l.namesOnceLoaded||l.requestNames(),V.listOnceLoaded||V.requestList()});const s=p(()=>t.getById(h.params.id));p(()=>u.getKnowledge(s.value.id)),p(()=>t.getSpecies(s.value.id));const L=2,S=p(()=>t.getGroups(s.value.id).slice(0,L)),k=[];return(ee,te)=>{const y=I("router-link");return e(t).listLoading?(n(),d("div",z,"Loading")):e(s)?(n(),d("div",H,[i("header",null,[i("h1",null,[a($,{names:e(t).getNamesByFormat(e(s).id)},null,8,["names"])]),i("h5",null,[a(y,{to:{name:e(C)}},{default:c(()=>[g(m(e(o)("views.VtuberView.tofulllistlink")),1)]),_:1},8,["to"]),g(" / "+m(e(o)("views.VtuberView.header")),1)])]),i("main",J,[i("div",Q,[i("img",{class:"",src:e(s).avatarUrl,alt:e(t).getFormattedName(e(s).id),title:e(t).getFormattedName(e(s).id)},null,8,W)]),a(f,{class:"about",text:e(o)("views.VtuberView.about")},{default:c(()=>[a(D,{id:e(s).id},null,8,["id"])]),_:1},8,["text"]),a(U,{class:"groups",headlineText:e(o)("views.VtuberView.groups"),type:e(b),headlineTo:e(S).length>L?{name:e(A),query:{vtuber:e(s).id}}:null,store:e(l),tilesetTo:e(b),items:e(S)},null,8,["headlineText","type","headlineTo","store","tilesetTo","items"]),a(f,{class:"description",text:e(o)("views.VtuberView.description")},{default:c(()=>[g(m(e(t).getDescription(e(s).id).text),1)]),_:1},8,["text"]),a(f,{class:"links",text:e(o)("views.VtuberView.links")},{default:c(()=>[(n(!0),d(w,null,x(e(s).links,r=>(n(),Y(j,{key:r.url,url:r.url,title:r.name},null,8,["url","title"]))),128))]),_:1},8,["text"]),a(f,{class:"tags",text:e(o)("views.VtuberView.tags")},{default:c(()=>[(n(),d(w,null,x(k,r=>i("span",{key:r},m(r)+",",1)),64))]),_:1},8,["text"])])])):(n(),d("div",M,[a(K)]))}}};var oe=T(X,[["__scopeId","data-v-66ae1c74"]]);export{oe as default};
