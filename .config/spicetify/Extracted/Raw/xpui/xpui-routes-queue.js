"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[727],{70369:(e,t,a)=>{a.d(t,{$:()=>r.$});var r=a(22578)},8416:(e,t,a)=>{a.r(t),a.d(t,{QueueHistoryRoutes:()=>Ce,default:()=>Pe});var r=a(67294),n=a.n(r),l=a(73305),i=a(46886),s=a(9832),u=a(96685),c=a(20657),o=a(31);const m="atsVsq_V4TOEd6m8v4dy",d="rUaDGpvrpIlwpDrPRQbL",p="l9_FyRGTEmDOyjWBmHiZ",E=()=>n().createElement("div",{className:m},n().createElement(o.l,{iconSize:64}),n().createElement(u.LF,{as:"h1",variant:"alto",semanticColor:"textBase",className:d},c.ag.get("history.empty-title")),n().createElement("p",null,c.ag.get("history.empty-description")));var g=a(69518),v=a.n(g),y=a(42922),b=a(59713),f=a.n(b),h=a(19719),O=a(80624);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach((function(t){f()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const N=[];function x(e,t=!0){const[a,n]=(0,r.useState)({});return(0,r.useEffect)((()=>{if(!t)return;const r=Array.from(new Set(e)),l=r.filter((e=>v().isTrack(e)&&!a[e])),i=r.filter((e=>v().isEpisode(e)&&!a[e])),s=l.length?h.fQ.getTracks(O.b.getInstance(),l.map((e=>v().from(e).getBase62Id()))).then((e=>e.body.tracks||N)):Promise.resolve(N),u=i.map((e=>h.UY.getEpisodeGraphQL(O.b.getInstance(),v().from(e).getBase62Id()).then((e=>(null==e?void 0:e.body)||{})).catch((t=>(console.error(t),{uri:e})))));Promise.all([s,...u]).then((([e,...t])=>{const a={},r={};e.forEach((e=>{var t;a[(null==e||null===(t=e.linked_from)||void 0===t?void 0:t.uri)||e.uri]=e})),t.forEach((e=>{r[e.uri]=e})),(e.length>0||t.length>0)&&n((e=>w(w(w({},e),a),r)))}))}),[e,a,t]),e.map((e=>a[e]))}var C=a(42781),P=a(49961),I=a(47991),q=a(28248),L=a(78041);const D=n().memo((({items:e})=>{const t=x(e.map((e=>e.uri))),a=(0,r.useMemo)((()=>t.map(((t,a)=>e[a].isLocal?e[a]:t))),[t,e]),l=(0,r.useCallback)(((e,t)=>{if((r=e).type===C.p.TRACK&&v().isTrack(r.uri)){var a;const r=(0,P.X)(null===(a=e.album)||void 0===a?void 0:a.images,{desiredSize:40});return n().createElement(L.Lk,{key:t+e.uri,index:t,uri:(0,I.$V)(e),name:e.name,duration_ms:e.duration_ms,imgUrl:(null==r?void 0:r.url)||"",album:e.album,artists:e.artists,isExplicit:e.explicit,isMOGEFRestricted:(e.tags||[]).includes("MOGEF-19+")})}var r,l,i;if((e=>e.type===C.p.EPISODE)(e)){var s;const a=(0,P.X)(null===(s=e.show)||void 0===s?void 0:s.images,{desiredSize:40});return n().createElement(L.Lk,{key:t+e.uri,index:t,uri:(0,I.$V)(e),name:e.name,duration_ms:e.duration_ms,imgUrl:(null==a?void 0:a.url)||"",album:{name:e.show.name,uri:e.show.uri},artists:[{name:e.show.publisher,uri:""}],isExplicit:e.explicit,isMOGEFRestricted:!1})}return(e=>e.type===C.p.TRACK&&v().isLocalTrack(e.uri))(e)?n().createElement(L.Lk,{key:t+e.uri,index:t,uri:e.uri,name:e.name,duration_ms:e.duration,imgUrl:e.imageUrl||"",album:{name:(null===(l=e.album)||void 0===l?void 0:l.name)||"",uri:""},artists:[{name:(null===(i=e.artist)||void 0===i?void 0:i.name)||"",uri:""}],isExplicit:e.isExplicit,isMOGEFRestricted:!1}):n().createElement(q.hU,{height:`${q.dN}px`})}),[]),i=(0,r.useMemo)((()=>[q.QD.TITLE,q.QD.ALBUM_OR_PODCAST,q.QD.DURATION]),[]),s=(0,r.useCallback)((e=>e.uri),[]);return n().createElement(n().Fragment,null,n().createElement(y.ZP,{value:"play-history-tracklist"},n().createElement(q.Pv,{ariaLabel:"play-history",hasHeaderRow:!0,columns:i,renderRow:l,resolveUri:s,tracks:a,nrTracks:a.length,rowPlaceholder:q.hU,limit:50})))})),S="lKD15PN9kUzmXgvbqyku",U="QyHCIHEiCu2GI4iwPEiv",j=()=>{const e=(0,s.U5)();return e&&e.items.length>0?n().createElement("div",{className:S},n().createElement(u.LF,{as:"h1",variant:"canon",semanticColor:"textBase",className:U},c.ag.get("view.recently-played")),n().createElement(D,{items:e.items})):n().createElement(E,null)};var F=a(94184),T=a.n(F),A=a(23716),Q=a(84242),B=a(34891),R=a(86081);var _=a(14472),G=a(70369),M=a(67892),$=a(62890);const V="vPcEtsKAuDcjwDdk6DVI",z=({onClick:e})=>n().createElement($.z,{className:V,version:"outlined",onClick:e,title:c.ag.get("queue.clear-queue")},n().createElement(u.LF,{variant:"minuetBold"},c.ag.get("queue.clear-queue")));var K=a(21770),W=a(99450),H=a(16229),Y=a(18061),X=a(8247),Z=a(85105);const J="ekxwDBqjmLy3ViXWVZAm",ee="ecu2GBw9UEtlqvmNtWqQ",te="K4EGJOvv5EFhspqNNTbN",ae="WSOVmnq4TEJc21APfUsw",re="gNHB91piJ8hkdioBOTb6",ne=n().memo((({onClose:e,onConfirm:t,isOpen:a,itemCount:l})=>{const i=(0,r.useCallback)((a=>{t(),e(a)}),[t,e]),s=c.ag.get("queue.confirm-title",l);return n().createElement(Z.Z,{shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,onRequestClose:e,contentLabel:s,isOpen:a},n().createElement("div",{className:J},n().createElement(u.LF,{as:"h2",variant:"cello",className:ee},s),n().createElement(u.LF,{as:"p",variant:"mesto",className:te},c.ag.get("queue.confirm-message")),n().createElement("div",{className:ae},n().createElement(Y.F,{property:X.iY,renderOldExperience:()=>n().createElement(H.Y,{className:re,version:"tertiary",onClick:e},c.ag.get("queue.cancel-button")),renderNewExperience:()=>n().createElement(K.oM,{onClick:e},c.ag.get("queue.cancel-button"))}),n().createElement(Y.F,{property:X.iY,renderOldExperience:()=>n().createElement(H.Y,{version:"primary",onClick:i},c.ag.get("queue.confirm-button")),renderNewExperience:()=>n().createElement(W.D,{onClick:i},c.ag.get("queue.confirm-button"))}))))}));var le=a(40160),ie=a(83993);const se=()=>n().createElement("div",{className:m},n().createElement(ie.j,{iconSize:64}),n().createElement(u.LF,{as:"h1",variant:"alto",semanticColor:"textBase",className:d},c.ag.get("queue.empty-title")),n().createElement("p",null,c.ag.get("queue.empty-description")),n().createElement(le.OL,{to:"/search",className:p},n().createElement(H.Y,{version:"secondary"},c.ag.get("queue.fine-something"))));var ue=a(11956),ce=a(99995),oe=a(56802);function me(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function de(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?me(Object(a),!0).forEach((function(t){f()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):me(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const pe=(e,t)=>{const a=x(e.slice(0,50).map((e=>e.uri)),t);return t?e.reduce(((e,t,r)=>(a[r]&&e.push(((e,t)=>(0,ce.G_)(e)&&(e=>"track"===e.type)(t)?de(de({},e),{},{name:t.name,album:de(de({},e.album),{},{name:t.album.name,images:t.album.images,uri:t.album.uri}),artists:t.artists.map((e=>({name:e.name,uri:e.uri,type:C.p.ARTIST}))),duration:{milliseconds:t.duration_ms},isExplicit:t.explicit,is19PlusOnly:(t.tags||[]).includes("MOGEF-19+")}):(0,ce.iw)(e)&&(e=>"episode"===e.type)(t)?de(de({},e),{},{name:t.name,show:de(de({},e.show),{},{name:t.show.name,images:t.show.images,uri:t.show.uri}),duration:{milliseconds:t.duration_ms}}):e)(t,a[r])),e)),[]):e},Ee=n().memo((({tracks:e,ariaLabel:t,contextUri:a,rowNumberOffset:l=0,section:i,usePlayContextItem:s})=>{const u=(0,oe.o)(),c=(0,A.g)(),o=pe(e,!c.getCapabilities().hasDecoratedQueue),m=(0,r.useCallback)(((e,t)=>{u({intent:"remove-from-queue",type:"click"}),c.removeFromQueue(e.map((e=>({uid:e.id,uri:e.uri})))).then(t)}),[c,u]),d=(0,r.useCallback)(((e,t)=>{if((0,ce.iw)(e)){var r,u;const c=(0,P.X)(null===(r=e.show)||void 0===r?void 0:r.images,{desiredSize:40});return n().createElement(q.pD,{key:`${t}${l}${e.uid}`,index:t,rowNumberOffset:l,imgUrl:(null==c?void 0:c.url)||"",uri:(0,I.$V)(e),uid:null!==(u=e.uid)&&void 0!==u?u:e.uri,contextUri:a,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.show.name,uri:e.show.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:q.jO.EPISODE,section:i,usePlayContextItem:s,isAutoPlay:"autoplay"===e.provider})}if((0,ce.G7)(e)){var c;const r=(0,P.X)(e.images||void 0,{desiredSize:40});return n().createElement(q.pD,{key:`${t}${l}${e.uid}`,index:t,rowNumberOffset:l,imgUrl:(null==r?void 0:r.url)||"",uri:(0,I.$V)(e),uid:null!==(c=e.uid)&&void 0!==c?c:e.uri,contextUri:a,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.book.name,uri:e.book.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:q.jO.CHAPTER,section:i,usePlayContextItem:s,isAutoPlay:"autoplay"===e.provider})}if((0,ce.G_)(e)){var o,m,d,p;const r=(0,P.X)(null==e||null===(o=e.album)||void 0===o?void 0:o.images,{desiredSize:40});return n().createElement(q.pD,{key:`${t}${l}${e.uid}`,index:t,rowNumberOffset:l,imgUrl:(null==r?void 0:r.url)||"",uri:(0,I.$V)(e),uid:null!==(m=e.uid)&&void 0!==m?m:e.uri,contextUri:a,duration_ms:e.duration.milliseconds,name:e.name,artists:e.artists,album:e.album,isExplicit:null!==(d=e.isExplicit)&&void 0!==d&&d,isPlayable:!0,isMOGEFRestricted:null!==(p=e.is19PlusOnly)&&void 0!==p&&p,type:e.isLocal?q.jO.LOCAL:q.jO.TRACK,section:i,usePlayContextItem:s,isAutoPlay:"autoplay"===e.provider})}return n().createElement(q.Lb,{height:`${q.dN}px`})}),[l,a,i,s]),p=(0,r.useMemo)((()=>[q.QD.INDEX,q.QD.TITLE,q.QD.ALBUM,q.QD.DURATION]),[]),E=(0,r.useCallback)((e=>e.uri),[]),g=(0,r.useCallback)((e=>{var t;return null!==(t=e.uid)&&void 0!==t?t:e.uri}),[]);return o&&n().createElement(q.Pv,{ariaLabel:t,tracks:o,nrTracks:o.length,onRemove:m,renderRow:d,resolveUri:E,resolveUid:g,columns:p})})),ge="j9gyOcTuf365d_rG7ack",ve="hwrIbokMLNi_FwQfqYcX",ye="OSrSKCORKBO4JZclYmQ5",be="cTyAlv13Ivw6nbqmJ3rI",fe="EfpNdSaTi80IzFTHBH66",he=()=>{const{uri:e,description:t}=(0,_.$)(),a=(0,A.g)(),{current:l,nextUp:i,queued:s}=function(){const e=(0,A.g)(),[t,a]=(0,r.useState)(e.getQueue());return(0,R.G)(B.rg.QUEUE_UPDATE,(e=>a(e.data))),t}(),[o,m]=(0,r.useState)(!1),d=(0,r.useCallback)((()=>{m(!1)}),[m]),p=(0,r.useCallback)((()=>{a.clearQueue(),m(!1)}),[a]),E=(0,r.useCallback)((()=>{m(!0)}),[m]),{usePlayContextItem:g}=(0,Q.n)({uri:null!=e?e:""},{featureIdentifier:"queue"}),v="autoplay"===(null==l?void 0:l.provider),b=i.filter((e=>v?e:"autoplay"!==e.provider)),f=!(null==s||!s.length),h=!(null==b||!b.length);return!1===(l||f||h)?n().createElement(se,null):n().createElement("section",{className:ge},n().createElement(G.$,null,c.ag.get("queue.page-title")),n().createElement(u.LF,{as:"h1",variant:"canon",semanticColor:"textBase",className:ve},c.ag.get("playback-control.queue")),l&&e&&n().createElement(n().Fragment,null,n().createElement(u.LF,{as:"h2",variant:"balladBold",semanticColor:"textSubdued"},c.ag.get("queue.now-playing")),n().createElement(y.ZP,{value:"now-playing"},n().createElement(Ee,{ariaLabel:c.ag.get("queue.now-playing"),tracks:[l],contextUri:e,section:ue.h.NowPlaying,usePlayContextItem:g}))),f&&e&&n().createElement(n().Fragment,null,n().createElement("div",{className:T()(fe,ye)},n().createElement(u.LF,{as:"h2",variant:"balladBold",semanticColor:"textSubdued"},c.ag.get("queue.next-in-queue")),f&&n().createElement(z,{onClick:E})),n().createElement(y.ZP,{value:"next-in-queue"},n().createElement(Ee,{ariaLabel:c.ag.get("queue.next-in-queue"),tracks:s,rowNumberOffset:1,contextUri:"spotify:app:queue:NextInQueue",section:ue.h.NextInQueue,usePlayContextItem:g}))),h&&e&&n().createElement(n().Fragment,null,n().createElement(u.LF,{as:"h2",variant:"balladBold",semanticColor:"textSubdued",className:T()(ye,"standalone-ellipsis-one-line")},t&&!v?n().createElement(n().Fragment,null,c.ag.get("queue.next-from")," ",n().createElement(M.r,{className:be,to:e},t)):c.ag.get("queue.next-up")),n().createElement(y.ZP,{value:"next-up"},n().createElement(Ee,{ariaLabel:c.ag.get("queue.next-up"),tracks:b,rowNumberOffset:1+((null==s?void 0:s.length)||0),contextUri:"spotify:app:queue:NextUp",section:ue.h.NextUp,usePlayContextItem:g}))),n().createElement(ne,{itemCount:(null==s?void 0:s.length)||0,isOpen:o,onClose:d,onConfirm:p}))};var Oe=a(69559),ke=a(9746),we=a(28638);const Ne="VBjBuss7tKOa3VZ_3tQI",xe=()=>{const[e,t]=(0,r.useState)(window.innerWidth);(0,Oe.a)((()=>{t(window.innerWidth)}));const a=(0,r.useMemo)((()=>[{title:c.ag.get("playback-control.queue"),itemId:"queue",to:"/queue",uri:"spotify:app:queue"},{title:c.ag.get("view.recently-played"),itemId:"history",to:"/history",uri:"spotify:app:history"}]),[]);return n().createElement(we.w,null,n().createElement(ke.n,{className:Ne,links:a,windowSize:e}))},Ce=()=>{const e=(0,s.nF)();return n().createElement("section",{className:"contentSpacing"},e&&n().createElement(i.No,{path:"/history",pageId:l.W.NOWPLAYING_HISTORY},n().createElement(j,null)),n().createElement(i.No,{path:"/queue",pageId:l.W.NOWPLAYING_QUEUE},n().createElement(r.Suspense,{fallback:null},n().createElement(he,null))),e&&n().createElement(xe,null))},Pe=Ce},9746:(e,t,a)=>{a.d(t,{n:()=>C});var r=a(67294),n=a.n(r),l=a(94184),i=a.n(l),s=a(96685),u=a(26115),c=a(74594),o=a(20657),m=a(32626),d=a(43031),p=a(30005),E=a(21691);const g="BkpKedcdaMGbvgXMlmcg",v="muYk5XIwKmqR9iNibk_f",y="queue-tabBar-header",b="m20ShRDiGGDpJ5LSABTi",f="Hvv0e7WKQ4kyftgSQJhg",h="yxf_6IsQEmHjijEBUMTP",O="oaNVBli46GtVjaQKB15g",k="JdlKTdpMquftpMwwegZo",w="Nts_ArOCGeROTDZND3M6",N="FvDsfgxSvLvL3q8d7nQv",x=({items:e,activeItemId:t,setActiveDropdownItem:a})=>n().createElement(p.v,null,e.map((e=>n().createElement(E.s,{key:e.to,role:"menuitemradio",to:e.to,exact:!0,"aria-checked":e.itemId===t,className:h,activeClassName:O,isActive:t=>!!t&&(a(e),!0),onClick:()=>{var t;null===(t=e.handleClick)||void 0===t||t.call(e),a(e)}},e.title)))),C=n().memo((({isCentered:e,links:t,landmarkLabel:a,className:l,windowSize:p=1/0})=>{const[E,h]=(0,r.useState)(null),C=(0,r.useRef)(null),[P,I]=(0,r.useState)([]),[q,L]=(0,r.useState)(0),[D,S]=(0,r.useState)([]);(0,r.useEffect)((()=>{C.current&&L(C.current.clientWidth)}),[p]),(0,r.useEffect)((()=>{if(!C.current)return;const e=Array.from(C.current.children).map((e=>e.clientWidth));I(e)}),[t]),(0,r.useEffect)((()=>{if(!C.current)return;if(P.slice(0,-1).reduce(((e,t)=>e+t),0)<=q)return void S([]);const e=P.reduce(((e,t)=>e>t?e:t),0),t=[];let a=e;P.forEach(((e,r)=>{q>=a+e?a+=e:t.push(r)})),S(t)}),[q,P]);const U=(0,r.useCallback)((e=>!!e&&(h(null),!0)),[]);return n().createElement("nav",{className:i()(l,g),"aria-label":a},n().createElement("ul",{className:e?v:w,ref:C},t.filter(((e,t)=>!D.includes(t))).map((e=>n().createElement("li",{key:e.to,className:y},n().createElement(d.O,{exact:!0,className:k,activeClassName:O,to:e.to,isActive:U,onClick:e.handleClick},n().createElement(s.LF,{variant:"mestoBold"},e.title))))),D.length||0===P.length?n().createElement("li",{className:y},n().createElement(m.xV,{renderInline:!0,menu:n().createElement(x,{items:t.filter(((e,t)=>D.includes(t))),activeItemId:null==E?void 0:E.itemId,setActiveDropdownItem:h})},((e,t,a)=>n().createElement("button",{className:i()(b,{[f]:E}),type:"button",onClick:t,ref:a},n().createElement(s.LF,{variant:"mestoBold"},E?E.title:o.ag.get("more")),e?n().createElement(u.q,{iconSize:16,className:N}):n().createElement(c.m,{iconSize:16,className:N}))))):null))}))}}]);
//# sourceMappingURL=xpui-routes-queue.js.map