"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[289],{90110:(e,t,a)=>{a.d(t,{q:()=>f,o:()=>P});var l=a(67294),r=a.n(l),n=a(94184),o=a.n(n),i=a(69518),s=a.n(i),c=a(50020),E=a(96895),A=a(20657),u=a(83692),d=a(24656),m=a(69010),D=a(80946),g=a(6116),L=a(38209),C=a(40080);const T="l_MW0G9qeeCKlVJwBykT",p="BKsbV2Xl786X9a09XROH",_="HbKLiGoYM4dpuK8L4TMX",y="_APVWqivXc4YqgsnpFkP",S="VmwiDoU6RpqyzK_n7XRO",b="rEx3EYgBzS8SoY7dmC6x",O="z3zia5snl987x676qe5w";let f;!function(e){e[e.sm=24]="sm",e[e.md=32]="md"}(f||(f={}));const N=e=>{const{currentTarget:t,detail:a}=e;a>0&&t&&t.blur()},P=({uri:e,isFollowing:t,onFollow:a,size:n=f.sm,className:i,onClick:P=(()=>{})})=>{const k={"--size":`${n}px`},{useDownloading:h,useDownloadCapability:I}=(0,l.useContext)(d.I),[R,v]=(0,l.useState)(!1),[M,w]=I(s().isEpisode(e)),[B,x]=(0,l.useState)(!1),{currentAvailability:Q,progress:H,beginDownload:U,clearDownload:Y}=h(e);((e,t)=>{const a=(0,L.r)(),r=(0,l.useRef)(!1);(0,l.useEffect)((()=>{e===m.V8.DOWNLOADING&&!1===r.current&&(r.current=!0,a.say(A.ag.get("download.downloading",t.totalItems)))}),[a,e,t]);const n=(0,C.D)(e);(0,l.useEffect)((()=>{n===m.V8.DOWNLOADING&&e===m.V8.YES&&(r.current=!1,a.say(A.ag.get("download.complete")))}),[a,n,e])})(Q,H);const W=(0,l.useCallback)((e=>{w===m.v$.DOWNLOADING_NOT_ALLOWED?x(!0):!1===t?(a(),v(!0)):U(),P(e),N(e)}),[U,w,t,P,a]),z=(0,l.useCallback)((e=>{Y(),N(e),P(e)}),[Y,P]);return(0,l.useEffect)((()=>{!0===R&&!0===t&&(U(),v(!1))}),[t,R,U]),M===m.PQ.NO_DOWNLOAD_CAPABILITY?null:w===m.v$.DOWNLOADING_NOT_ALLOWED?r().createElement("div",{className:p},r().createElement(u.w,{label:A.ag.get("download.download")},r().createElement("button",{className:o()(_,i),role:"switch",onClick:W,"aria-label":A.ag.get("download.download"),"aria-checked":!1},r().createElement(c.a,{iconSize:n}))),B&&r().createElement("div",{className:O},r().createElement(D.E,{withTopLeftPointer:!0,horizontal:!0,onClose:()=>{x(!1)}},A.ag.get("download.upsell")))):Q===m.V8.YES?r().createElement(u.w,{label:A.ag.get("download.remove")},r().createElement("button",{className:o()(_,i,y),role:"switch",onClick:z,"aria-label":A.ag.get("download.remove"),"aria-checked":!0},r().createElement(E.C,{iconSize:n}))):Q===m.V8.NO?r().createElement(u.w,{label:A.ag.get("download.download")},r().createElement("button",{className:o()(_,i),role:"switch",onClick:W,"aria-label":A.ag.get("download.download"),"aria-checked":!1},r().createElement(c.a,{iconSize:n}))):r().createElement("div",{className:o()(S,i),role:"switch","aria-checked":!0},r().createElement(u.w,{label:A.ag.get("download.cancel")},r().createElement("button",{style:k,className:o()(_,T,i),onClick:z,"aria-label":A.ag.get("download.cancel")})),r().createElement("span",{style:k,className:o()(b,T)},r().createElement(g.e,{"aria-valuetext":A.ag.get("progress.downloading-tracks"),percentage:H.percentage,size:n})))}},37483:(e,t,a)=>{a.d(t,{p:()=>A,q:()=>c.q});var l=a(67294),r=a.n(l),n=a(65858),o=a(4383),i=a(8475),s=a(56802),c=a(90110);const E=r().memo((({uri:e,size:t=c.q.md,className:a})=>{const[E,A]=(0,o.Z)(e),u=(0,n.I0)(),d=(0,s.o)(),m=(0,l.useCallback)((()=>{d({targetUri:e,intent:E?"remove-from-library":"add-to-library",type:"click"}),A(!E),u(E?(0,i.SS)():(0,i.kK)())}),[d,e,E,A,u]);return r().createElement(c.o,{className:a,isFollowing:E,onFollow:m,uri:e,size:t})})),A=r().memo((e=>r().createElement(E,e)))},14590:(e,t,a)=>{a.d(t,{Q:()=>i,$:()=>s});var l=a(67294),r=a.n(l),n=a(22583),o=a(5292);const i=(0,l.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a LibrarySortProvider")},sortState:o.oT.ADDED_AT}),s=r().memo((function({uri:e,children:t,defaultSortOption:a}){return r().createElement(n.r,{uri:e,defaultState:a,sortContext:i},t)}))},88852:(e,t,a)=>{a.d(t,{E:()=>m});var l=a(67294),r=a.n(l),n=a(98816),o=a(45342),i=a(1496),s=a(61048),c=a(95289),E=a(5292),A=a(14590);const u=r().memo((({sortOptions:e,onSort:t})=>{const{sortState:a,setSortState:n}=(0,l.useContext)(A.Q),o=(0,l.useCallback)((e=>{const a=E.ei[e];null==t||t(a),n(a)}),[t,n]),i=e.map((e=>E.MY[e])),s=E.MY[a];return r().createElement(c.A,{options:i,onSelect:o,selected:s})})),d="QhF9ZR7YOiJeFiEnfkOr",m=r().memo((({filterPlaceholder:e,sortOptions:t})=>{const{spec:a,logger:c}=(0,i.fU)(n.createDesktopSearchBarEventFactory,{}),E=(0,l.useContext)(o.H),A=(0,l.useCallback)((()=>{c.logInteraction(a.filterFieldFactory().keyStrokeFilter())}),[c,a]),m=(0,l.useCallback)((()=>{c.logInteraction(a.filterFieldFactory().hitClearFilter())}),[c,a]),D=(0,l.useCallback)((()=>{c.logInteraction(a.sortButtonFactory().hitSort())}),[c,a]);return r().createElement("div",{className:d},null!=E&&E.getCapabilities().canFilter?r().createElement(l.Suspense,{fallback:null},r().createElement(s.K,{placeholder:e,onFilter:A,onClear:m})):null,null!=E&&E.getCapabilities().canSort?r().createElement(u,{sortOptions:t,onSort:D}):null)}))},19565:(e,t,a)=>{a.d(t,{u:()=>D});var l=a(67294),r=a.n(l),n=a(94184),o=a.n(n),i=a(96685),s=a(39561),c=a(62890);const E="FvfvGU3jvHRskUU9v9_8",A="Q9AlbZn2EGzy3MTWXa8X",u="mxmxS0y8LiwSs5nueKPT",d="GXxVAveNFStY3pBI_NO4",m="eHcXC2s97InYP7rMNT0H",D=r().memo((e=>{const{children:t,message:a,title:l,linkTitle:n,linkTo:D,onClick:g,renderInline:L=!1}=e,{isXSOnly:C,isSMOnly:T}=(0,s.e)(),p=C||T;return r().createElement("section",{className:o()(E,{[A]:L})},t,r().createElement(i.LF,{as:"h1",variant:p?"cello":"alto",className:d},l),r().createElement(i.LF,{variant:p?"mesto":"ballad",className:m},a),n&&(D||g)&&r().createElement(c.z,{version:"secondary",className:u,linkTo:D,onClick:g},n))}))},5292:(e,t,a)=>{a.d(t,{oT:()=>c,ei:()=>A,MY:()=>u,Ru:()=>d,Aq:()=>D,o$:()=>g,e3:()=>C,a6:()=>T,EY:()=>_,ZP:()=>y,G5:()=>b,$2:()=>O,sv:()=>N,_s:()=>P,w0:()=>k,pT:()=>I,WQ:()=>w,mE:()=>B});var l=a(20657),r=a(74483),n=a(9659),o=a(36132),i=a(28248),s=a(78462);let c;!function(e){e.SHOW_ALPHABETICAL="SHOW_ALPHABETICAL",e.BOOK_ALPHABETICAL="BOOK_ALPHABETICAL",e.EPISODE_ALPHABETICAL="EPISODE_ALPHABETICAL",e.PLAYLIST_ALPHABETICAL="PLAYLIST_ALPHABETICAL",e.ALBUM_ALPHABETICAL="ALBUM_ALPHABETICAL",e.ADDED_AT="ADDED_AT",e.CREATOR_NAME="CREATOR_NAME",e.CREATOR_NAME_ALPHABETICAL="CREATOR_NAME_ALPHABETICAL",e.ALBUM_CREATOR_NAME="ALBUM_CREATOR_NAME",e.RECENTLY_PLAYED="RECENTLY_PLAYED",e.MOST_RELEVANT="MOST_RELEVANT",e.CUSTOM_ORDER="CUSTOM_ORDER"}(c||(c={}));const E={[r.yW.NAME]:o.hI.TITLE,[r.yW.SHOW_NAME]:o.hI.SHOW,[r.yW.ADDED_AT]:o.hI.ADDED_AT},A={"show-alphabetical":c.SHOW_ALPHABETICAL,"book-alphabetical":c.BOOK_ALPHABETICAL,"episode-alphabetical":c.EPISODE_ALPHABETICAL,"playlist-alphabetical":c.PLAYLIST_ALPHABETICAL,"album-alphabetical":c.ALBUM_ALPHABETICAL,"recently-added":c.ADDED_AT,"creator-name":c.CREATOR_NAME,"creator-name-alphabetical":c.CREATOR_NAME_ALPHABETICAL,"album-creator-name":c.ALBUM_CREATOR_NAME,"recently-played":c.RECENTLY_PLAYED,"playlist-most-relevant":c.MOST_RELEVANT,"playlist-custom-order":c.CUSTOM_ORDER},u={[c.RECENTLY_PLAYED]:{key:"recently-played",value:l.ag.get("collection.sort.recently-played")},[c.ADDED_AT]:{key:"recently-added",value:l.ag.get("collection.sort.recently-added")},[c.SHOW_ALPHABETICAL]:{key:"show-alphabetical",value:l.ag.get("collection.sort.alphabetical")},[c.BOOK_ALPHABETICAL]:{key:"book-alphabetical",value:l.ag.get("collection.sort.alphabetical")},[c.EPISODE_ALPHABETICAL]:{key:"episode-alphabetical",value:l.ag.get("collection.sort.alphabetical")},[c.PLAYLIST_ALPHABETICAL]:{key:"playlist-alphabetical",value:l.ag.get("collection.sort.alphabetical")},[c.ALBUM_CREATOR_NAME]:{key:"album-creator-name",value:l.ag.get("collection.sort.creator")},[c.CREATOR_NAME]:{key:"creator-name",value:l.ag.get("collection.sort.creator")},[c.CREATOR_NAME_ALPHABETICAL]:{key:"creator-name-alphabetical",value:l.ag.get("collection.sort.alphabetical")},[c.ALBUM_ALPHABETICAL]:{key:"album-alphabetical",value:l.ag.get("collection.sort.alphabetical")},[c.MOST_RELEVANT]:{key:"playlist-most-relevant",value:l.ag.get("collection.sort.most-relevant")},[c.CUSTOM_ORDER]:{key:"playlist-custom-order",value:l.ag.get("collection.sort.custom-order")}},d=[c.ADDED_AT,c.ALBUM_ALPHABETICAL,c.CREATOR_NAME],m={[c.ADDED_AT]:{field:r.lY.ADDED_AT,order:r.As.DESC},[c.ALBUM_ALPHABETICAL]:{field:r.lY.NAME,order:r.As.ASC},[c.CREATOR_NAME]:{field:r.lY.ARTIST_NAME,order:r.As.ASC}},D=e=>{if(d.includes(e))return m[e]},g=[c.ADDED_AT,c.CREATOR_NAME_ALPHABETICAL],L={[c.ADDED_AT]:{field:r.hx.ADDED_AT,order:r.As.DESC},[c.CREATOR_NAME_ALPHABETICAL]:{field:r.hx.NAME,order:r.As.ASC}},C=e=>{if(g.includes(e))return L[e]},T=[c.ADDED_AT,c.SHOW_ALPHABETICAL],p={[c.ADDED_AT]:{field:r.hx.ADDED_AT,order:r.As.DESC},[c.SHOW_ALPHABETICAL]:{field:r.aW.NAME,order:r.As.ASC}},_=e=>{if(T.includes(e))return p[e]},y=[c.ADDED_AT,c.BOOK_ALPHABETICAL],S={[c.ADDED_AT]:r.VN.ADDED_AT,[c.BOOK_ALPHABETICAL]:r.VN.NAME},b=e=>{if(y.includes(e))return S[e]},O=[c.ADDED_AT,c.CREATOR_NAME,c.EPISODE_ALPHABETICAL],f={[c.ADDED_AT]:{field:r.yW.ADDED_AT,order:r.As.DESC},[c.CREATOR_NAME]:{field:r.yW.SHOW_NAME,order:r.As.ASC},[c.EPISODE_ALPHABETICAL]:{field:r.yW.NAME,order:r.As.ASC}},N=e=>{if(O.includes(e))return f[e]},P=e=>{if(!O.includes(e))return;const t=N(e);if(null==t||!t.field)return;const a=E[t.field];if(!a)return;return o.Vd[a].map((e=>t.order?`${e} ${t.order}`:e)).join(",")},k=[c.MOST_RELEVANT,c.RECENTLY_PLAYED,c.ADDED_AT,c.PLAYLIST_ALPHABETICAL,c.CUSTOM_ORDER],h={[c.ADDED_AT]:{field:n.bD.ADDED_AT,order:n.As.DESC},[c.RECENTLY_PLAYED]:{field:n.bD.RECENTLY_PLAYED,order:n.As.ASC},[c.PLAYLIST_ALPHABETICAL]:{field:n.bD.NAME,order:n.As.ASC},[c.MOST_RELEVANT]:{field:n.bD.RELEVANCE,order:n.As.DESC},[c.CUSTOM_ORDER]:void 0},I=e=>{if(k.includes(e))return h[e]},R={"custom-order":s.I5,title:{column:i.QD.TITLE,order:i.kn.ASC},artist:{column:i.QD.TITLE,order:i.kn.SECONDARY_ASC},"added-by":{column:i.QD.ADDED_BY,order:i.kn.ASC},"added-at":{column:i.QD.ADDED_AT,order:i.kn.ASC},duration:{column:i.QD.DURATION,order:i.kn.ASC},album:{column:i.QD.ALBUM,order:i.kn.ASC},"album-or-podcast":{column:i.QD.ALBUM_OR_PODCAST,order:i.kn.ASC},"album-or-show":{column:i.QD.ALBUM_OR_SHOW,order:i.kn.ASC}},v={title:i.QD.TITLE,artist:i.QD.TITLE,"added-by":i.QD.ADDED_BY,"added-at":i.QD.ADDED_AT,duration:i.QD.DURATION,album:i.QD.ALBUM,"album-or-podcast":i.QD.ALBUM_OR_PODCAST,"album-or-show":i.QD.ALBUM_OR_SHOW},M={[i.kn.NONE]:i.kn.NONE,[i.kn.ASC]:i.kn.DESC,[i.kn.DESC]:i.kn.ASC,[i.kn.SECONDARY_ASC]:i.kn.SECONDARY_DESC,[i.kn.SECONDARY_DESC]:i.kn.SECONDARY_ASC},w=(e,t,a)=>e?t!==v[e]||"artist"===e&&[i.kn.ASC,i.kn.DESC].includes(a)||"title"===e&&[i.kn.SECONDARY_ASC,i.kn.SECONDARY_DESC].includes(a)?R[e]:{column:v[e],order:M[a]}:s.I5,B={[i.QD.INDEX]:{key:"custom-order",value:l.ag.get("sort.custom-order")},[i.QD.TITLE]:{key:"title",value:l.ag.get("sort.title")},[i.QD.ARTIST]:{key:"artist",value:l.ag.get("sort.artist")},[i.QD.ADDED_BY]:{key:"added-by",value:l.ag.get("sort.added-by")},[i.QD.ADDED_AT]:{key:"added-at",value:l.ag.get("sort.date-added")},[i.QD.DURATION]:{key:"duration",value:l.ag.get("sort.duration")},[i.QD.EVENT_DATE]:null,[i.QD.ALBUM]:{key:"album",value:l.ag.get("sort.album")},[i.QD.ALBUM_OR_PODCAST]:{key:"album-or-podcast",value:l.ag.get("sort.album-or-podcast")},[i.QD.ALBUM_OR_SHOW]:{key:"album-or-show",value:l.ag.get("sort.album-or-show")},[i.QD.PLAYS]:null,[i.QD.RELEASE_DATE]:null,[i.QD.ADD]:null,[i.QD.ACTIONS]:null}},78462:(e,t,a)=>{a.d(t,{P0:()=>s,MI:()=>c,RJ:()=>E,zq:()=>A,I5:()=>u,Gb:()=>d,kz:()=>m});var l=a(67294),r=a.n(l),n=a(22583),o=a(28248),i=a(73785);const s=[o.QD.INDEX,o.QD.TITLE,o.QD.ALBUM,o.QD.ADDED_AT],c=[o.QD.INDEX,o.QD.TITLE,o.QD.ALBUM,o.QD.DURATION],E=[o.QD.INDEX,o.QD.TITLE,o.QD.ALBUM,o.QD.DURATION],A=[o.QD.INDEX,o.QD.TITLE,o.QD.ALBUM,o.QD.ALBUM_OR_PODCAST,o.QD.ADDED_BY,o.QD.ADDED_AT,o.QD.DURATION],u={column:null,order:i.k.NONE},d=(0,l.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a TracksSortProvider")},sortState:u}),m=r().memo((function({uri:e,children:t}){return r().createElement(n.r,{uri:e,defaultState:u,sortContext:d},t)}))},72831:(e,t,a)=>{a.r(t),a.d(t,{YourEpisodes:()=>ie,YourEpisodesContainer:()=>se,default:()=>ce});var l=a(67294),r=a.n(l),n=a(9296),o=a(20657),i=a(30947),s=a(55911),c=a(44887),E=a(53646),A=a(45342),u=a(84242),d=a(99995),m=a(4236),D=a(36132),g=a(14590),L=a(88852),C=a(19565),T=a(42273),p=a(59482),_=a(72907),y=a(1663),S=a(55120),b=a(22423),O=a(5292),f=a(56347),N=a(64624),P=a(59713),k=a.n(P),h=a(33241),I=a(42922),R=a(18864),v=a(37763),M=a.n(v),w=a(20246),B=a(18261),x=a(87257),Q=a(57978),H=a(75016),U=a(4383),Y=a(24656),W=a(8341),z=a(5944),F=a(42781),V=a(84788),X=a(15212),$=a(56802),q=a(95661),G=a(25988),K=a(63133),j=a(95806),Z=a(78920),J=a(16783);const ee={small:64,standard:300,large:640,xlarge:1024},te=r().memo((({index:e,contextUri:t,episode:a,onRemove:n,usePlayContextItem:i})=>{var s,c,E,A;const d=(0,l.useRef)(a.duration.milliseconds-a.timeLeft.milliseconds),D=a.uri,[g,L]=(0,l.useState)(0===a.timeLeft.milliseconds),{filter:C}=(0,l.useContext)(b.fo),T=(0,Z.P)(),p=(0,X.O1)(),_=(0,R.jh)(),y=(0,$.o)(),[S]=(0,U.Z)(D,!0),{useCurrentAvailability:O}=(0,l.useContext)(Y.I),[f]=O(D),N=(0,m.k)(),P=(0,W.Y)((e=>{var t;if((null==e||null===(t=e.item)||void 0===t?void 0:t.uri)===a.uri){var l;const t=null!==(l=(0,z.k)(e))&&void 0!==l?l:0;return d.current=t,t}return 0})),{isPlaying:k,isActive:h,togglePlay:v}=i({uri:D,index:e}),{isPlaying:te,isActive:ae,togglePlay:le}=(0,u.n)({uri:D,pages:[{items:[{type:F.p.EPISODE,uri:D,uid:null,provider:null}]}]},{featureIdentifier:"your_library",referrerIdentifier:"your_library"});(0,l.useEffect)((()=>{S||n()}),[S,n]),(0,l.useEffect)((()=>{k||a.duration.milliseconds<=d.current&&L(!0)}),[k,a.duration.milliseconds]);const re=(0,l.useCallback)((e=>{e||(d.current=0),L(e)}),[]),ne=(0,l.useCallback)((()=>{y({type:"click",targetUri:D,intent:"navigate"})}),[D,y]),oe=(0,l.useCallback)((()=>{N?(y({type:"click",intent:k?"pause":"play"}),v()):(y({type:"click",intent:te?"pause":"play"}),le())}),[N,k,te,y,v,le]),ie=(0,l.useCallback)((e=>r().createElement(M(),{searchWords:[C],textToHighlight:e,findChunks:T,highlightClassName:J.Z.filterHighlight})),[C,T]),se=null!==(s=null===(c=a.podcastSubscription)||void 0===c?void 0:c.isPaywalled)&&void 0!==s&&s,ce=null!==(E=null===(A=a.podcastSubscription)||void 0===A?void 0:A.isUserSubscribed)&&void 0!==E&&E,{badges:Ee}=(0,V.r)({isExplicit:a.isExplicit,isMOGEFRestricted:a.is19PlusOnly,isPaywalled:se});let Ae=!1;return(h||!N&&ae)&&(Ae=!0),S?r().createElement(I.ZP,{value:"row",index:e},r().createElement(B._,{menu:r().createElement(G.k,{uri:D,showUri:a.show.uri,isPlayed:g,onMarkAsPlayed:re})},r().createElement(K.X,{index:e,uri:D,uid:D,size:_,images:a.images.map((e=>({url:e.url,width:e.width||(e.label?ee[e.label]:null),height:e.height||(e.label?ee[e.label]:null)}))),isPaywalled:se,isUserSubscribed:ce,name:a.name,highlightText:ie,showName:a.show.name,showUri:a.show.uri,description:a.description,isPlayable:a.isPlayable&&f,fullyPlayed:g,durationMs:a.duration.milliseconds,releaseDate:a.release.date.toString()||"",resumePositionMs:d.current,handleDragStart:e=>{if(e.target!==e.currentTarget)return;const l=`${a.name} · ${a.show.name}`;p(e,[D],l,t)},handlePlaybackClick:oe,handleClick:ne,isCurrentlyPlaying:Ae,isPlaying:N?k:te,position:Ae?P:void 0,episodeSharingInfo:null,onMarkAsPlayed:re,badges:r().createElement(r().Fragment,null,Ee.explicit&&r().createElement(x.N,null),Ee.paid&&r().createElement(H.g,null),Ee.nineteen&&r().createElement(Q.X,{size:16})),playButtonWrapper:e=>r().createElement(j.l,{enabled:se&&!ce,showUri:a.show.uri},e),topActionButtons:r().createElement(w.y,{menu:r().createElement(G.k,{uri:D,showUri:a.show.uri,isPlayed:g,onMarkAsPlayed:re})},r().createElement(q.z,{size:q.q.sm,label:o.ag.get("more.label.context",a.name)}))}))):null})),ae="ybohLfAC_k3fYjRJHzKA",le="rQL2Hxclr2PkKkrBfr8T";function re(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function ne(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?re(Object(a),!0).forEach((function(t){k()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):re(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const oe=r().memo((({contextUri:e,usePlayContextItem:t})=>{const a=(0,l.useContext)(A.H),{sortState:n}=(0,l.useContext)(g.Q),[o,i]=(0,l.useState)({totalLength:0,offset:0,items:[],limit:50}),s=(0,l.useRef)(!1),c=(0,l.useRef)(0),E=(0,l.useRef)(0),{filter:u}=(0,l.useContext)(b.fo),d=(0,l.useCallback)((()=>{E.current++}),[]),{ref:m,breakpoint:D}=(0,R.Db)({[R.Uo.MEDIUM]:0,[R.Uo.LARGE]:600}),L=(0,l.useCallback)(((e=!1)=>{const t=c.current;null!==t&&(s.current||(s.current=!0,(async e=>{const t=await a.getEpisodes({offset:e-E.current,limit:50,sort:(0,O.sv)(n),filter:u});return E.current=0,t})(Number(t)).then((a=>{i((l=>{const r=Number(a.offset)+a.items.length,n=e?[]:[...l.items];return n.splice(Number(t),a.items.length,...a.items),c.current=r<a.totalLength?r:null,ne(ne({},a),{},{items:n})})),s.current=!1}))))}),[u,a,n]);return(0,l.useEffect)((()=>{c.current=0,L(!0)}),[L]),r().createElement(R.ZU.Provider,{value:D},r().createElement(I.ZP,{value:"track-list"},r().createElement("div",{ref:m},r().createElement(h.C,{onReachBottom:L,triggerOnInitialLoad:!0},o.items.map(((a,l)=>r().createElement("div",{className:le,key:`${l}${a.uri}`},r().createElement("hr",{className:ae,"aria-hidden":!0}),r().createElement(te,{key:`${a.uri}/${l}`,index:l,episode:a,contextUri:e,onRemove:d,usePlayContextItem:t}))))))))})),ie=({metadata:e,canSort:t})=>{const a=(0,E.Y5)("#006450"),{sortState:A}=(0,l.useContext)(g.Q),{filter:y}=(0,l.useContext)(b.fo),f=(0,m.k)(),{isPlaying:P,togglePlay:k,usePlayContextItem:h}=(0,u.n)({uri:e.uri,metadata:{[d.sb.SORTING_CRITERIA]:(0,O._s)(A),[d.sb.FILTERING_PREDICATE]:(0,D.aK)(y)}},{featureIdentifier:"your_library",referrerIdentifier:"your_library"}),I=()=>k(),{uri:R,name:v,images:M,totalLength:w,owner:B}=e,x=(0,l.useMemo)((()=>({id:B.username,uri:B.uri,name:B.username,displayName:B.displayName||void 0,images:B.images||[]})),[B]),Q=e.totalLength>0;return r().createElement("section",{className:J.Z.yourEpisodes,"data-testid":"your-episodes-page"},r().createElement(T.gF,{backgroundColor:a},r().createElement(p.W,null,r().createElement(S.$,{size:s.qE.sm,onClick:I,isPlaying:P,uri:R,disabled:!f,ariaPlayLabel:o.ag.get("playlist.a11y.play",v),ariaPauseLabel:o.ag.get("playlist.a11y.pause",v)}),r().createElement(_.i,{text:v})),r().createElement(T.Oz,{images:M,name:v,shape:c.K.ROUNDED_CORNERS,renderImage:()=>r().createElement(N.$,null)}),r().createElement(T.sP,null,r().createElement(T.dy,{small:!0,uppercase:!0},o.ag.get("playlist")),r().createElement(T.xd,{canEdit:!1,onClick:()=>{}},v),r().createElement(T.QS,{creators:[x],totalEpisodes:w}))),r().createElement("div",{className:J.Z.yourEpisodesContentWrapper},r().createElement(i.o,{backgroundColor:a},r().createElement(i.F,null,Q&&r().createElement(S.$,{onClick:I,isPlaying:P,size:s.qE.lg,uri:R,disabled:!f,ariaPlayLabel:o.ag.get("playlist.a11y.play",v),ariaPauseLabel:o.ag.get("playlist.a11y.pause",v)}),t&&r().createElement("div",{className:J.Z.searchBoxContainer},r().createElement(L.E,{filterPlaceholder:o.ag.get("playlist.search_in_playlist"),sortOptions:O.$2})))),r().createElement("div",{className:"contentSpacing"},e.totalLength>0&&r().createElement(oe,{contextUri:R,usePlayContextItem:h}))),0===e.totalLength&&r().createElement("div",{className:"contentSpacing"},r().createElement(C.u,{message:o.ag.get("collection.empty-page.episodes-subtitle"),title:o.ag.get("collection.empty-page.episodes-title"),linkTo:"/genre/podcasts-web",linkTitle:o.ag.get("collection.empty-page.shows-cta"),renderInline:!0},r().createElement(n.Z,null))))},se=r().memo((()=>{const e=(0,l.useContext)(A.H).getCapabilities(),t=(0,f.x)();return t?r().createElement(g.$,{uri:t.uri,defaultSortOption:O.oT.ADDED_AT},r().createElement(b.hz,{uri:t.uri},r().createElement(ie,{metadata:t,canSort:e.canSort&&t.totalLength>0}))):r().createElement(y.h,{hasError:!1,errorMessage:o.ag.get("error.not_found.title.page"),loadOffline:e.canModifyOffline})})),ce=se},40080:(e,t,a)=>{a.d(t,{D:()=>r});var l=a(67294);function r(e){const t=(0,l.useRef)();return(0,l.useEffect)((()=>{t.current=e}),[e]),t.current}},92408:(e,t,a)=>{a.d(t,{E:()=>P,$:()=>N});var l=a(67294),r=a.n(l),n=a(43315),o=a(59713),i=a.n(o);const s="wIA_5Ypq0rltNPeZQpM4",c="Swi6YtNEFCCVz8l4y75v",E="pklLPOhfigdytL9bPoth",A="sb24Y8kdMZInJ8aI8dXT";class u extends l.PureComponent{render(){const{ariaValueText:e,max:t,current:a}=this.props,l=t&&a?100*Math.min(1,a/t):0,n={transform:`translateX(-${100-l}%)`},o=e||`${Math.round(l)}%`;return r().createElement("div",{className:s,role:"progressbar",tabIndex:0,"aria-valuenow":a,"aria-valuemin":0,"aria-valuemax":t,"aria-valuetext":o},r().createElement("div",{className:c}),r().createElement("div",{className:E},r().createElement("div",{className:A,style:n})))}}i()(u,"defaultProps",{current:0,max:1});const d=u,m="qfYkuLpETFW3axnfMntO",D="jOd7lbjiyc_kvRJaAbeL",g="_q93agegdE655O5zPz6l",L="z7Yl7CIT1AB0y91f_moh",C="iLIlkUcfIq56KncGtX7u",T="nV50yZ6BR_TIuWP3l7b1",p="qLjIx_SzBEpDRA_q7kxQ";var _=a(96685),y=a(40378),S=a(20657),b=a(94184),O=a.n(b),f=a(33985);let N;!function(e){e[e.LARGE=0]="LARGE",e[e.SMALL=1]="SMALL"}(N||(N={}));const P=e=>{const{resumePositionMs:t=0,releaseDate:a,isPlaying:l,fullyPlayed:o,durationMs:i,size:s=N.SMALL,position:c=t}=e;return r().createElement("div",{className:O()(m,{[D]:s===N.LARGE})},a?r().createElement(_.LF,{as:"p",variant:"mesto",className:g},(0,n.rL)((0,n.RX)(a))):null,(()=>{if(o&&!l)return r().createElement("div",{className:C},r().createElement(_.LF,{as:"p",variant:"mesto",className:L},S.ag.get("episode.played")),r().createElement(y.R,{iconSize:16,className:p}));if(c>0||l){const e=Math.ceil(Math.max(i-c,0));return r().createElement("div",{className:C},r().createElement(_.LF,{as:"p",variant:"mesto",className:L},r().createElement(f.ng,{durationMs:e})))}return r().createElement(_.LF,{as:"p",variant:"mesto",className:g},r().createElement(f.nL,{durationMs:i}))})(),!o&&c>0||l?r().createElement("div",{className:T},r().createElement(d,{current:c,max:i,isEnabled:!1})):null)}}}]);
//# sourceMappingURL=xpui-routes-collection-episodes.js.map