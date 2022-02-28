"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[309],{49115:(e,t,a)=>{a.r(t),a.d(t,{Collection:()=>Ot,default:()=>St});var r=a(67294),l=a.n(r),n=a(65858),o=a(44794),c=a(73305),s=a(44503),i=a(46886),u=a(20657),m=a(13983);const E=(0,a(20573).P1)((e=>e.features),(e=>(null==e?void 0:e.enableShows)||!1));var d=a(70369),A=a(96685),p=a(72803),g=a(42922),f=a(45342),D=a(1496),y=a(3634),b=a(94522),C=a(19565),O=a(84200),S=a(1663),h=a(22423),L=a(5292),T=a(14590),v=a(88852),k=a(59713),_=a.n(k),I=a(6489),R=a(76391);function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(Object(a),!0).forEach((function(t){_()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function B(e,t,a){const r=N({},a);return r.entities=t?e.items||[]:r.entities.concat(e.items||[]),r.total=e.totalLength,r.next=e.next,r}function w(e,t){const a=N({},t),r=t.entities.filter((t=>t.uri!==e));return a.total=(t.total||0)-(t.entities.length-r.length),a.entities=r,a}const M={offset:0,limit:1},x=()=>{const e=(0,r.useContext)(f.H);return(e=>{const[t,a]=(0,r.useState)(null),l=(0,r.useCallback)((async()=>{if(!e)return;const t=await e();a((null==t?void 0:t.totalLength)||0)}),[e]);return(0,r.useEffect)((()=>{null===t&&l()}),[t,l]),{total:t}})((0,r.useCallback)((()=>e?null==e?void 0:e.getShows(M):Promise.resolve({totalLength:0})),[e]))},Y=L.oT.ADDED_AT,U=L.oT.ADDED_AT,H=L.oT.ADDED_AT,Q=L.oT.MOST_RELEVANT,j=L.oT.ADDED_AT;var F=a(55084);const W=l().memo((({nrAlbums:e})=>{const t=(0,r.useContext)(f.H),{filter:a}=(0,r.useContext)(h.fo),{sortState:n}=(0,r.useContext)(T.Q),o=(0,r.useRef)(null),[s,i]=(0,r.useState)(e),{spec:m,UBIFragment:E}=(0,D.fU)(p.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:albums",identifier:c.W.YOURLIBRARY_ALBUMS}}),d=(0,r.useMemo)((()=>m.headerFactory()),[m]),C=(0,r.useCallback)((async(e,r)=>{const l=await t.getAlbums({offset:e,limit:r,filter:a,sort:(0,L.Aq)(n)});return l.totalLength!==s&&i(l.totalLength),l.items}),[t,a,n,s]),O=(0,r.useCallback)(((e,t)=>l().createElement(g.ZP,{key:e.uri,value:"card",index:t},l().createElement(y.r,{index:t,uri:e.uri,name:e.name,images:e.images,artists:e.artists,sharingInfo:e.sharingInfo}))),[]);return(0,r.useEffect)((()=>{o.current&&o.current.update()}),[n,a,e]),l().createElement(E,{spec:m},l().createElement(E,{spec:d},l().createElement("div",{className:F.Z.header},l().createElement(A.LF,{as:"h1",variant:"canon"},u.ag.get("albums")),l().createElement(r.Suspense,{fallback:null},l().createElement(v.E,{filterPlaceholder:u.ag.get("collection.filter.albums"),sortOptions:L.Ru})))),l().createElement(b.g,{nrCards:s,renderCard:O,fetchData:C,cardGridApiRef:o}))})),Z=l().memo((()=>{const{total:e}=(()=>{const e=(0,r.useContext)(f.H),[t,a]=(0,r.useState)(null),l=(0,r.useCallback)((async()=>{if(!e)return;const t=await(null==e?void 0:e.getAlbums(M));a((null==t?void 0:t.totalLength)||0)}),[e]);return(0,r.useEffect)((()=>{null===t&&l()}),[t,l]),(0,R.b)(I.EW.UPDATE,l),{total:t}})();return null===e?l().createElement(S.h,{hasError:!1,errorMessage:u.ag.get("error.request-collection-albums-failure")}):e?l().createElement(W,{nrAlbums:e}):l().createElement(C.u,{linkTo:"/search",linkTitle:u.ag.get("collection.empty-page.albums-cta"),message:u.ag.get("collection.empty-page.albums-subtitle"),title:u.ag.get("collection.empty-page.albums-title")},l().createElement(O.Z,null))})),G=l().memo((()=>l().createElement(T.$,{uri:"collection/albums",defaultSortOption:Y},l().createElement(h.hz,{uri:"collection/albums"},l().createElement(Z,null)))));var V=a(63926),z=a(64230),K=a(33241),X=a(89477),q=a(43782);const $=l().memo((({nrArtists:e})=>{const t=(0,r.useContext)(f.H),{filter:a}=(0,r.useContext)(h.fo),{sortState:n}=(0,r.useContext)(T.Q),o=(0,r.useRef)(null),[s,i]=(0,r.useState)(e),{spec:m,UBIFragment:E}=(0,D.fU)(p.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:artists",identifier:c.W.YOURLIBRARY_ARTISTS}}),d=(0,r.useMemo)((()=>m.headerFactory()),[m]),y=(0,r.useCallback)((async(e,r)=>{const l=await t.getArtists({offset:e,limit:r,filter:a,sort:(0,L.e3)(n)});return l.totalLength!==s&&i(l.totalLength),l.items}),[t,a,n,s]),C=(0,r.useCallback)(((e,t)=>l().createElement(g.ZP,{key:e.uri,value:"card",index:t},l().createElement(X.I,{index:t,name:e.name,uri:e.uri,images:e.images}))),[]);return(0,r.useEffect)((()=>{o.current&&o.current.update()}),[n,a,e]),l().createElement(E,{spec:m},l().createElement(E,{spec:d},l().createElement("div",{className:F.Z.header},l().createElement(A.LF,{as:"h1",variant:"canon"},u.ag.get("artists")),l().createElement(r.Suspense,{fallback:null},l().createElement(v.E,{filterPlaceholder:u.ag.get("collection.filter.artists"),sortOptions:L.o$})))),l().createElement(b.g,{nrCards:s,renderCard:C,fetchData:y,cardGridApiRef:o}))})),J=l().memo((({nrArtists:e})=>{const t=(0,r.useContext)(f.H),[a,n]=(0,r.useState)({entities:[],total:e}),o=(0,r.useRef)(!1),c=(0,r.useRef)(!1),s=(0,r.useCallback)((async()=>{if(!c.current&&!o.current){var e;o.current=!0;const r=await t.getArtists({offset:null!==(e=a.next)&&void 0!==e?e:void 0});r.next||(c.current=!0),o.current=!1,a.next&&r.next===a.next||n(B(r,!1,a))}}),[t,a]),i=(0,r.useCallback)((e=>{n(w(e,a))}),[a]);return l().createElement(K.C,{onReachBottom:s,triggerOnInitialLoad:!0},l().createElement("div",{className:F.Z.header},l().createElement(A.LF,{as:"h1",variant:"canon"},u.ag.get("artists"))),l().createElement(q.Y,{onCollectionItemRemove:i},l().createElement(g.ZP,{value:"EntitiesGrid"},l().createElement(V.T,{render:()=>a.entities.map(((e,t)=>l().createElement(g.ZP,{key:e.uri,value:"card",index:t},l().createElement(X.I,{index:t,uri:e.uri,name:e.name,images:e.images}))))}))))})),ee=l().memo((()=>{const{total:e}=(()=>{const e=(0,r.useContext)(f.H),[t,a]=(0,r.useState)(null),l=(0,r.useCallback)((async()=>{if(!e)return;const t=await(null==e?void 0:e.getArtists(M));a((null==t?void 0:t.totalLength)||0)}),[e]);return(0,r.useEffect)((()=>{null===t&&l()}),[t,l]),(0,R.b)(I.EW.UPDATE,l),{total:t}})(),t=(0,r.useContext)(f.H),{canFetchArtistsWithOffset:a}=t.getCapabilities();return null===e?l().createElement(S.h,{hasError:!1,errorMessage:u.ag.get("error.request-collection-artists-failure")}):e>0?a?l().createElement($,{nrArtists:e}):l().createElement(J,{nrArtists:e}):l().createElement(C.u,{message:u.ag.get("collection.empty-page.artists-subtitle"),title:u.ag.get("collection.empty-page.artists-title"),linkTo:"/search",linkTitle:u.ag.get("collection.empty-page.artists-cta")},l().createElement(z.d,{size:64,viewBox:"0 0 64 64"}))})),te=l().memo((()=>l().createElement(T.$,{uri:"collection/artists",defaultSortOption:U},l().createElement(h.hz,{uri:"collection/artists"},l().createElement(ee,null)))));var ae=a(41632),re=a(48064);const le=l().memo((({nrBooks:e})=>{const t=(0,r.useContext)(f.H),{filter:a}=(0,r.useContext)(h.fo),{sortState:n}=(0,r.useContext)(T.Q),[o,s]=(0,r.useState)(e),{spec:i,UBIFragment:u}=(0,D.fU)(p.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:audiobooks",identifier:c.W.YOURLIBRARY_AUDIOBOOKS}}),m=(0,r.useMemo)((()=>i.headerFactory()),[i]),E=(0,r.useRef)(null),d=(0,r.useCallback)((async(e,r)=>{const l=await t.getBooks({offset:e,limit:r,filter:a,sort:(0,L.G5)(n)});return l.totalLength!==o&&s(l.totalLength),l.items}),[t,a,n,o]),y=(0,r.useCallback)(((e,t)=>l().createElement(g.ZP,{key:e.uri,value:"card",index:t},l().createElement(ae.c,{index:t,uri:e.uri,name:e.name,images:e.images,authorName:e.authorName}))),[]);return(0,r.useEffect)((()=>{E.current&&E.current.update()}),[n,a,e]),l().createElement(u,{spec:i},l().createElement(u,{spec:m},l().createElement("div",{className:F.Z.header},l().createElement(A.LF,{as:"h1",variant:"canon"},"Audiobooks"),l().createElement(v.E,{filterPlaceholder:"Search in Audiobooks",sortOptions:L.ZP}))),l().createElement(b.g,{nrCards:o,renderCard:y,fetchData:d,cardGridApiRef:E}))})),ne=l().memo((()=>{const{total:e}=(()=>{const e=(0,r.useContext)(f.H),[t,a]=(0,r.useState)(null),l=(0,r.useCallback)((async()=>{if(!e)return;const t=await(null==e?void 0:e.getBooks(M));a((null==t?void 0:t.totalLength)||0)}),[e]);return(0,r.useEffect)((()=>{null===t&&l()}),[t,l]),(0,R.b)(I.EW.UPDATE,l),{total:t}})();return null===e?l().createElement(S.h,{hasError:!1,errorMessage:u.ag.get("error.request-collection-albums-failure")}):e>0?l().createElement(le,{nrBooks:e}):l().createElement(C.u,{linkTo:"/search",linkTitle:u.ag.get("collection.empty-page.books-cta"),message:u.ag.get("collection.empty-page.books-subtitle"),title:u.ag.get("collection.empty-page.books-title")},l().createElement(re.Z,null))})),oe=l().memo((()=>l().createElement(T.$,{uri:"collection/albums",defaultSortOption:j},l().createElement(h.hz,{uri:"collection/books"},l().createElement(ne,null)))));var ce=a(46309),se=a(29419),ie=a(45788),ue=a(23248),me=a(72138),Ee=a(63282),de=a(42781),Ae=a(38470),pe=a(98620),ge=a(29255),fe=a(94184),De=a.n(fe),ye=a(92374),be=a(47418);const Ce="ASepBXU_s_s3OBsVlwbq",Oe="W5JUlxsbMsaSi4DGjoPN",Se="oT0etGSj2ty3qjhnnd4c",he="u9YiS9YAKsCSkybiGf4y",Le="emTGVMj1hTjsvPuvTV7d",Te="vwyZuyz_XfcATIyity1S",ve="lmxbSdxMbxbmYhXnB7C0",ke="Wvq907VgY5OISrPgjpbP";function _e(e,t=null){return Array.from(new Array(e).keys()).map((e=>l().createElement("div",{className:Te,style:{width:t?`${t}ch`:void 0},key:e})))}const Ie=({index:e,onClick:t})=>{const a=(0,ye.MY)({limit:7}),{user:r}=(0,n.v9)(ge.Gg),o=(0,pe.I2)(null==r?void 0:r.id);return o?l().createElement(be.Z,{index:e,className:De()(Ce,Oe),onClick:t,headerText:o.name,featureIdentifier:"your_library",uri:o.uri,ariaPlayLabel:u.ag.get("playlist.a11y.play",o.name),ariaPauseLabel:u.ag.get("playlist.a11y.pause",o.name),renderCardImage:()=>l().createElement("div",{className:he},l().createElement("div",{className:Le},a?a.items.map((({uri:e,name:t,artists:[a]},r)=>l().createElement("span",{key:e},l().createElement("span",{className:ke},r?" • ":""),l().createElement("span",{dir:"auto"},a.name),l().createElement("span",{dir:"auto",className:ke},t)))):_e(3))),renderSubHeaderContent:()=>l().createElement("div",{className:ve},a?`${a.totalLength} ${o.name}`:_e(1,o.name.length))}):null},Re=({index:e})=>{const t=(0,ye.j$)({limit:7}),{user:a}=(0,n.v9)(ge.Gg),r=(0,pe.bl)(null==a?void 0:a.id);return r?l().createElement(be.Z,{index:e,className:De()(Ce,Se),headerText:r.name,featureIdentifier:"your_library",uri:r.uri,ariaPlayLabel:u.ag.get("playlist.a11y.play",r.name),ariaPauseLabel:u.ag.get("playlist.a11y.pause",r.name),renderCardImage:()=>l().createElement("div",{className:he},l().createElement("div",{className:Le},t?t.items.map((({uri:e,name:t,show:a},r)=>l().createElement("span",{key:e},l().createElement("span",{className:ke},r?" • ":""),l().createElement("span",{dir:"auto"},t),l().createElement("span",{dir:"auto",className:ke},a.name)))):_e(3))),renderSubHeaderContent:()=>l().createElement("div",{className:ve},t?u.ag.get("tracklist-header.episodes-counter",t.totalLength):_e(1,r.name.length))}):null};var Pe=a(55508),Ne=a(13947),Be=a(64005),we=a(83280),Me=a(72131),xe=a(66393),Ye=a(84242),Ue=a(69691),He=a(36590),Qe=a(8498),je=a(68942),Fe=a(23802);const We="wfFs4LpuSSZfVAgUx67H",Ze="kN4uALHijLKGpORXRMN9",Ge=()=>{const e=(0,Fe.g)("images/playlist-folder-filled.svg");return l().createElement("div",{className:We},l().createElement("img",{src:e,alt:u.ag.get("local-files"),className:Ze}))};function Ve(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function ze(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ve(Object(a),!0).forEach((function(t){_()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ve(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const Ke=function({uri:e,name:t,images:a,index:n}){var o;const c=(0,ie.u)(),s=(0,r.useRef)(null),i=(0,r.useRef)(!0),m=(0,r.useContext)(xe.t),{isPlaying:E}=(0,Ue.cR)(Me.b),{togglePlay:d}=(0,Ye.n)({uri:Me.b,pages:[{items:(null===(o=s.current)||void 0===o?void 0:o.map((e=>ze(ze({},e),{},{provider:null}))))||[]}]},{featureIdentifier:"local_files"});(0,r.useEffect)((()=>(i.current=!0,()=>{i.current=!1})),[]);const[A]=(0,ue.z)(je.J,!1),p=(0,Be.y)((async()=>{if(!s.current){var e,t;const a=await m.getTracks({});s.current=null!==(e=null===(t=a.data)||void 0===t?void 0:t.item.map(we.cr))&&void 0!==e?e:null}var a;i&&d(void 0,{uri:Me.b,pages:[{items:(null===(a=s.current)||void 0===a?void 0:a.map((e=>ze(ze({},e),{},{provider:null}))))||[]}]})}),Ne.s_);return c.canFetchAllTracks&&A?l().createElement(He.Z,{index:n,delegatePlayback:!0,delegateLogging:!0,isPlaying:E,onPlay:p,headerText:t,featureIdentifier:"local_files",uri:e,renderCardImage:()=>l().createElement(Qe.x,{images:a,fallback:{Component:Ge}}),renderSubHeaderContent:()=>l().createElement("span",null,u.ag.get("local-files.description"))}):null},Xe=({index:e})=>{const t=(0,pe.gB)();return l().createElement(r.Suspense,{fallback:null},l().createElement(Ke,{index:e,name:t.name,uri:t.uri,images:t.images}))};var qe=a(56347),$e=a(10711);const Je=(e,t,a)=>l().createElement(g.ZP,{key:e.uri,value:"card",index:t},a),et=(e,t,a)=>{var r;switch(e.type){case de.p.LIKED_SONGS:return Je(e,t,a>1?l().createElement(Ie,{index:t}):l().createElement(se.p,{index:t}));case de.p.YOUR_EPISODES:return Je(e,t,l().createElement($e.T,{index:t}));case de.p.LOCAL_FILES:return Je(e,t,l().createElement(Xe,{index:t}));case de.p.PLAYLIST:return Je(e,t,l().createElement(ce.Z,{index:t,name:e.name,uri:e.uri,images:e.images,description:e.description,authorName:null===(r=e.owner)||void 0===r?void 0:r.displayName}));case"placeholder":return Je(e,t,l().createElement(ce.Z,{index:t,uri:e.uri,name:"",images:[],description:"",authorName:""}));case"empty":return l().createElement(l().Fragment,null);case"folder":return null;default:return(0,Ae._)(e),null}},tt=l().memo((function({nrPlaylists:e,showYourEpisodesCard:t,showLocalFilesCard:a}){const{filter:o}=(0,r.useContext)(h.fo),{sortState:s}=(0,r.useContext)(T.Q),i=(0,r.useContext)(me.BS),[m,E]=(0,r.useState)(e),d=(0,r.useRef)(null),g=(0,n.v9)(ge.Gg).user,{spec:f,UBIFragment:y}=(0,D.fU)(p.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:playlists",identifier:c.W.YOURLIBRARY_PLAYLISTS}}),C=(0,r.useMemo)((()=>f.headerFactory()),[f]),O=(0,r.useMemo)((()=>{const e=[];if(o)return e;const r=(0,pe.I2)(null==g?void 0:g.id);r&&(e.push(r),e.push({uri:"",type:"empty"}));const l=t?(0,pe.bl)(null==g?void 0:g.id):null;l&&e.push(l);const n=a?(0,pe.gB)():null;return n&&e.push(n),e}),[o,a,t,g]),S=(0,r.useCallback)((()=>{null!=d&&d.current&&d.current.update()}),[d]);(0,me.iu)(S);const k=(0,r.useCallback)((async(e,t)=>{const a=O.slice(e),r=e-(O.length-a.length),l=await i.getContents({offset:r,limit:t,filter:o,sort:(0,L.pT)(s),flatten:!0,decorateImagesAndOwner:!0});return l.totalItemCount!==m&&E(l.totalItemCount),a.concat(l.items)}),[O,i,o,s,m]);return(0,r.useEffect)((()=>{d.current&&d.current.update()}),[s,o,e]),l().createElement(y,{spec:f},l().createElement(y,{spec:C},l().createElement("div",{className:F.Z.header},l().createElement(A.LF,{as:"h1",variant:"canon"},u.ag.get("playlists")),l().createElement(r.Suspense,{fallback:null},l().createElement(v.E,{filterPlaceholder:u.ag.get("collection.filter.playlists"),sortOptions:L.w0})))),l().createElement(b.g,{nrCards:m+O.length,renderCard:et,fetchData:k,cardGridApiRef:d}))})),at=l().memo((()=>{const e=(0,me.Rt)(),t=(0,qe.x)(),a=(0,ie.u)(),{createPlaylist:n}=(0,Ee.K)(),[o]=(0,ue.z)(je.J,!1),c=(0,r.useCallback)((()=>{n()}),[n]);return null===e||null===t?l().createElement(S.h,{hasError:!1,errorMessage:u.ag.get("error.request-collection-albums-failure")}):null!=e&&e.playlistCount?l().createElement(tt,{nrPlaylists:e.playlistCount,showYourEpisodesCard:t.totalLength>0,showLocalFilesCard:a.canFetchAllTracks&&o}):l().createElement(C.u,{linkTitle:u.ag.get("collection.empty-page.playlists-cta"),onClick:c,title:u.ag.get("collection.empty-page.playlists-title"),message:u.ag.get("collection.empty-page.playlists-subtitle")},l().createElement(Pe.Z,null))})),rt=l().memo((()=>l().createElement(T.$,{uri:"collection/playlists",defaultSortOption:Q},l().createElement(h.hz,{uri:"collection/playlists"},l().createElement(at,null)))));var lt=a(95332),nt=a(21794),ot=a(35808),ct=a(143),st=a(19480);const it=()=>{const e="ginger-audio-shows-top-20-web",{view:t}=(0,ot.P)(e);if(!t)return null;const{content:a,name:r}=t,{total:n=0,items:o}=a;return l().createElement(st.P,{title:r,total:n,seeAllUri:(0,nt.pL)(e)},o.filter((e=>"show"===e.type)).map(((e,t)=>{var a;return l().createElement(lt._,{key:e.uri,name:e.name,uri:e.uri,images:e.images,publisher:e.publisher,mediaType:null!==(a={audio:ct.E.AUDIO,video:ct.E.VIDEO,mixed:ct.E.MIXED}[e.media_type])&&void 0!==a?a:ct.E.AUDIO,sharingInfo:null,index:t})})))},ut=l().memo((({nrShows:e})=>{const t=(0,r.useContext)(f.H),{filter:a}=(0,r.useContext)(h.fo),{sortState:o}=(0,r.useContext)(T.Q),s=(0,r.useRef)(!1),i=(0,r.useRef)({entities:[],total:e}),[m,E]=(0,r.useState)(0),{user:d}=(0,n.v9)(ge.Gg),{spec:y,UBIFragment:b}=(0,D.fU)(p.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:podcasts",identifier:c.W.YOURLIBRARY_SHOWS}}),C=(0,r.useMemo)((()=>y.headerFactory()),[y]),O=(0,r.useCallback)((async(e,r,l=!1)=>{if(!s.current){s.current=!l;const n=await t.getShows({offset:e,limit:r,filter:a,sort:(0,L.EY)(o)});i.current=B(n,l,i.current),s.current=!1,E((e=>e+1))}}),[t,a,o,i]),S=(0,r.useCallback)((e=>{i.current=w(e,i.current),E((e=>e+1))}),[]);(0,r.useEffect)((()=>{O(0,50,!!m)}),[a,o]);const k=(0,r.useCallback)((()=>{i.current.entities.length!==i.current.total&&O(i.current.entities.length,50)}),[O,i]);return l().createElement(b,{spec:y},l().createElement(K.C,{onReachBottom:k},l().createElement(b,{spec:C},l().createElement("div",{className:F.Z.header},l().createElement(A.LF,{as:"h1",variant:"canon"},u.ag.get("podcasts")),l().createElement(r.Suspense,{fallback:null},l().createElement(v.E,{filterPlaceholder:u.ag.get("collection.filter.podcasts"),sortOptions:L.a6})))),l().createElement(q.Y,{onCollectionItemRemove:S},l().createElement(g.ZP,{value:"EntitiesGrid"},l().createElement(V.T,{render:()=>{const e=(0,pe.bl)(null==d?void 0:d.id),t=a||!e||0===i.current.entities.length?[]:[l().createElement(r.Suspense,{fallback:null,key:"your-episodes-card"},l().createElement(Re,{index:0}))],n=t.length>0;return t.concat(i.current.entities.map(((e,t)=>{const a=n?t+1:t;return l().createElement(g.ZP,{key:e.uri,value:"card",index:a},l().createElement(lt._,{index:a,name:e.name,uri:e.uri,images:e.images,publisher:e.publisher,mediaType:e.mediaType,sharingInfo:null}))})))}})))))})),mt=l().memo((()=>{const{total:e}=x();return null===e?l().createElement(S.h,{hasError:!1,errorMessage:u.ag.get("error.request-collection-shows-failure")}):e?l().createElement(ut,{nrShows:e}):l().createElement("div",{className:"CollectionShowsContainer"},l().createElement(C.u,{linkTo:"/genre/podcasts-web",linkTitle:u.ag.get("collection.empty-page.shows-cta"),message:u.ag.get("collection.empty-page.shows-subtitle"),title:u.ag.get("collection.empty-page.shows-title")},l().createElement(re.Z,null)),l().createElement(it,null))})),Et=l().memo((()=>l().createElement(T.$,{uri:"collection/podcasts",defaultSortOption:H},l().createElement(h.hz,{uri:"collection/podcasts"},l().createElement(mt,null)))));var dt=a(48414),At=a(32648),pt=a(85951);var gt=a(9746),ft=a(28638);function Dt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function yt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Dt(Object(a),!0).forEach((function(t){_()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Dt(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const bt=({isAudiobooksEnabled:e})=>{const t=function(){const[e,t]=(0,r.useState)(window.innerWidth),{scrollNodeChildRef:a}=(0,r.useContext)(At.VX),l=(0,Be.y)((e=>{null!=e&&e.width&&t(e.width)}),250);return(0,pt.y)({refOrElement:a,observeOnly:"width",onResize:l}),e}(),a=(0,n.v9)(E),{spec:o,logger:c}=(0,D.fU)(dt.createDesktopLibraryTopbarEventFactory,{data:{identifier:"collection",uri:"spotify:app:collection"}}),s=(0,r.useMemo)((()=>[{title:u.ag.get("playlists"),itemId:"collection.tab-playlists",to:"/collection/playlists",uri:"spotify:app:collection:playlists"},...a?[{title:u.ag.get("podcasts"),itemId:"collection.tab-podcasts",to:"/collection/podcasts",uri:"spotify:app:collection:podcasts"}]:[],...e?[{title:"Audiobooks",itemId:"collection.tab-audiobooks",to:"/collection/audiobooks",uri:"spotify:app:collection:audiobooks"}]:[],{title:u.ag.get("artists"),itemId:"collection.tab-artists",to:"/collection/artists",uri:"spotify:app:collection:artists"},{title:u.ag.get("albums"),itemId:"collection.tab-albums",to:"/collection/albums",uri:"spotify:app:collection:albums"}].map(((e,t)=>{const a=e.uri;return yt(yt({},e),{},{handleClick:()=>{const e=o.linkFactory({position:t,uri:a}).hitUiNavigate({destination:a});c.logInteraction(e)}})}))),[a,e,c,o]);return l().createElement(ft.w,null,l().createElement(gt.n,{className:F.Z.tabBar,links:s,windowSize:t}))},Ct=l().lazy((async()=>await a.e(246).then(a.bind(a,30990)))),Ot=()=>{const e=(0,n.v9)(E),t=(0,o.W6)(s.uB);return(0,m.z)("your_library"),l().createElement("section",{className:"contentSpacing"},l().createElement(d.$,null,u.ag.get("collection.page-title")),l().createElement(i.No,{path:"/collection/artists",pageId:c.W.YOURLIBRARY_ARTISTS},l().createElement(te,null)),l().createElement(i.No,{path:"/collection/albums",pageId:c.W.YOURLIBRARY_ALBUMS},l().createElement(G,null)),l().createElement(i.No,{path:"/collection/playlists",pageId:c.W.YOURLIBRARY_PLAYLISTS},l().createElement(rt,null)),e&&l().createElement(i.No,{path:"/collection/podcasts",pageId:c.W.YOURLIBRARY_SHOWS},l().createElement(Et,null)),t&&l().createElement(i.No,{path:"/collection/audiobooks",pageId:c.W.YOURLIBRARY_AUDIOBOOKS},l().createElement(oe,null)),l().createElement(i.No,{path:"/collection/music-downloads",pageId:c.W.YOURLIBRARY_DOWNLOADS},l().createElement(Ct,null)),l().createElement(bt,{isAudiobooksEnabled:t}))},St=Ot},14590:(e,t,a)=>{a.d(t,{Q:()=>c,$:()=>s});var r=a(67294),l=a.n(r),n=a(22583),o=a(5292);const c=(0,r.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a LibrarySortProvider")},sortState:o.oT.ADDED_AT}),s=l().memo((function({uri:e,children:t,defaultSortOption:a}){return l().createElement(n.r,{uri:e,defaultState:a,sortContext:c},t)}))},88852:(e,t,a)=>{a.d(t,{E:()=>A});var r=a(67294),l=a.n(r),n=a(98816),o=a(45342),c=a(1496),s=a(61048),i=a(95289),u=a(5292),m=a(14590);const E=l().memo((({sortOptions:e,onSort:t})=>{const{sortState:a,setSortState:n}=(0,r.useContext)(m.Q),o=(0,r.useCallback)((e=>{const a=u.ei[e];null==t||t(a),n(a)}),[t,n]),c=e.map((e=>u.MY[e])),s=u.MY[a];return l().createElement(i.A,{options:c,onSelect:o,selected:s})})),d="QhF9ZR7YOiJeFiEnfkOr",A=l().memo((({filterPlaceholder:e,sortOptions:t})=>{const{spec:a,logger:i}=(0,c.fU)(n.createDesktopSearchBarEventFactory,{}),u=(0,r.useContext)(o.H),m=(0,r.useCallback)((()=>{i.logInteraction(a.filterFieldFactory().keyStrokeFilter())}),[i,a]),A=(0,r.useCallback)((()=>{i.logInteraction(a.filterFieldFactory().hitClearFilter())}),[i,a]),p=(0,r.useCallback)((()=>{i.logInteraction(a.sortButtonFactory().hitSort())}),[i,a]);return l().createElement("div",{className:d},null!=u&&u.getCapabilities().canFilter?l().createElement(r.Suspense,{fallback:null},l().createElement(s.K,{placeholder:e,onFilter:m,onClear:A})):null,null!=u&&u.getCapabilities().canSort?l().createElement(E,{sortOptions:t,onSort:p}):null)}))},70369:(e,t,a)=>{a.d(t,{$:()=>r.$});var r=a(22578)},19565:(e,t,a)=>{a.d(t,{u:()=>p});var r=a(67294),l=a.n(r),n=a(94184),o=a.n(n),c=a(96685),s=a(39561),i=a(62890);const u="FvfvGU3jvHRskUU9v9_8",m="Q9AlbZn2EGzy3MTWXa8X",E="mxmxS0y8LiwSs5nueKPT",d="GXxVAveNFStY3pBI_NO4",A="eHcXC2s97InYP7rMNT0H",p=l().memo((e=>{const{children:t,message:a,title:r,linkTitle:n,linkTo:p,onClick:g,renderInline:f=!1}=e,{isXSOnly:D,isSMOnly:y}=(0,s.e)(),b=D||y;return l().createElement("section",{className:o()(u,{[m]:f})},t,l().createElement(c.LF,{as:"h1",variant:b?"cello":"alto",className:d},r),l().createElement(c.LF,{variant:b?"mesto":"ballad",className:A},a),n&&(p||g)&&l().createElement(i.z,{version:"secondary",className:E,linkTo:p,onClick:g},n))}))},95289:(e,t,a)=>{a.d(t,{A:()=>b});var r=a(67294),l=a.n(r),n=a(94184),o=a.n(n),c=a(96685),s=a(26115),i=a(74594),u=a(20246),m=a(62012),E=a(6577),d=a(30005),A=a(36652),p=a(21691),g=a(28248);const f=({heading:e,selected:t,onSelect:a,options:r,sortOrder:n})=>{let o;return n&&(n===g.kn.ASC||n===g.kn.SECONDARY_ASC?o=l().createElement(m.e,{iconSize:16}):n!==g.kn.DESC&&n!==g.kn.SECONDARY_DESC||(o=l().createElement(E.c,{iconSize:16}))),l().createElement(d.v,null,e?l().createElement(A.F,null,e):null,r.map((({key:e,value:r})=>l().createElement(p.s,{role:"menuitemradio","aria-checked":e===t.key&&!o,key:e,onClick:()=>a(e),icon:e===t.key&&o},l().createElement(c.LF,{variant:"mesto"},r)))))},D="w6j_vX6SF5IxSXrrkYw5",y="CbHJjxYxldG7uUPMYMaP";const b=({heading:e,options:t,selected:a,onSelect:r,isSelectionChanged:n,sortOrder:m,variant:E=c.LF.mesto,semanticColor:d})=>{const[A]=t;a||(a=A);const p=n?n(a):a!==A;return l().createElement(u.y,{menu:l().createElement(f,{selected:a,options:t,onSelect:r,sortOrder:m,heading:e})},((e,t,r)=>l().createElement("button",{className:o()(D,{[y]:p}),onClick:t,ref:r,type:"button"},l().createElement(c.LF,{semanticColor:d,variant:E},a.value),e?l().createElement(s.q,{iconSize:16}):l().createElement(i.m,{iconSize:16}))))}},5292:(e,t,a)=>{a.d(t,{oT:()=>i,ei:()=>m,MY:()=>E,Ru:()=>d,Aq:()=>p,o$:()=>g,e3:()=>D,a6:()=>y,EY:()=>C,ZP:()=>O,G5:()=>h,$2:()=>L,sv:()=>v,_s:()=>k,w0:()=>_,pT:()=>R,WQ:()=>w,mE:()=>M});var r=a(20657),l=a(74483),n=a(9659),o=a(36132),c=a(28248),s=a(78462);let i;!function(e){e.SHOW_ALPHABETICAL="SHOW_ALPHABETICAL",e.BOOK_ALPHABETICAL="BOOK_ALPHABETICAL",e.EPISODE_ALPHABETICAL="EPISODE_ALPHABETICAL",e.PLAYLIST_ALPHABETICAL="PLAYLIST_ALPHABETICAL",e.ALBUM_ALPHABETICAL="ALBUM_ALPHABETICAL",e.ADDED_AT="ADDED_AT",e.CREATOR_NAME="CREATOR_NAME",e.CREATOR_NAME_ALPHABETICAL="CREATOR_NAME_ALPHABETICAL",e.ALBUM_CREATOR_NAME="ALBUM_CREATOR_NAME",e.RECENTLY_PLAYED="RECENTLY_PLAYED",e.MOST_RELEVANT="MOST_RELEVANT",e.CUSTOM_ORDER="CUSTOM_ORDER"}(i||(i={}));const u={[l.yW.NAME]:o.hI.TITLE,[l.yW.SHOW_NAME]:o.hI.SHOW,[l.yW.ADDED_AT]:o.hI.ADDED_AT},m={"show-alphabetical":i.SHOW_ALPHABETICAL,"book-alphabetical":i.BOOK_ALPHABETICAL,"episode-alphabetical":i.EPISODE_ALPHABETICAL,"playlist-alphabetical":i.PLAYLIST_ALPHABETICAL,"album-alphabetical":i.ALBUM_ALPHABETICAL,"recently-added":i.ADDED_AT,"creator-name":i.CREATOR_NAME,"creator-name-alphabetical":i.CREATOR_NAME_ALPHABETICAL,"album-creator-name":i.ALBUM_CREATOR_NAME,"recently-played":i.RECENTLY_PLAYED,"playlist-most-relevant":i.MOST_RELEVANT,"playlist-custom-order":i.CUSTOM_ORDER},E={[i.RECENTLY_PLAYED]:{key:"recently-played",value:r.ag.get("collection.sort.recently-played")},[i.ADDED_AT]:{key:"recently-added",value:r.ag.get("collection.sort.recently-added")},[i.SHOW_ALPHABETICAL]:{key:"show-alphabetical",value:r.ag.get("collection.sort.alphabetical")},[i.BOOK_ALPHABETICAL]:{key:"book-alphabetical",value:r.ag.get("collection.sort.alphabetical")},[i.EPISODE_ALPHABETICAL]:{key:"episode-alphabetical",value:r.ag.get("collection.sort.alphabetical")},[i.PLAYLIST_ALPHABETICAL]:{key:"playlist-alphabetical",value:r.ag.get("collection.sort.alphabetical")},[i.ALBUM_CREATOR_NAME]:{key:"album-creator-name",value:r.ag.get("collection.sort.creator")},[i.CREATOR_NAME]:{key:"creator-name",value:r.ag.get("collection.sort.creator")},[i.CREATOR_NAME_ALPHABETICAL]:{key:"creator-name-alphabetical",value:r.ag.get("collection.sort.alphabetical")},[i.ALBUM_ALPHABETICAL]:{key:"album-alphabetical",value:r.ag.get("collection.sort.alphabetical")},[i.MOST_RELEVANT]:{key:"playlist-most-relevant",value:r.ag.get("collection.sort.most-relevant")},[i.CUSTOM_ORDER]:{key:"playlist-custom-order",value:r.ag.get("collection.sort.custom-order")}},d=[i.ADDED_AT,i.ALBUM_ALPHABETICAL,i.CREATOR_NAME],A={[i.ADDED_AT]:{field:l.lY.ADDED_AT,order:l.As.DESC},[i.ALBUM_ALPHABETICAL]:{field:l.lY.NAME,order:l.As.ASC},[i.CREATOR_NAME]:{field:l.lY.ARTIST_NAME,order:l.As.ASC}},p=e=>{if(d.includes(e))return A[e]},g=[i.ADDED_AT,i.CREATOR_NAME_ALPHABETICAL],f={[i.ADDED_AT]:{field:l.hx.ADDED_AT,order:l.As.DESC},[i.CREATOR_NAME_ALPHABETICAL]:{field:l.hx.NAME,order:l.As.ASC}},D=e=>{if(g.includes(e))return f[e]},y=[i.ADDED_AT,i.SHOW_ALPHABETICAL],b={[i.ADDED_AT]:{field:l.hx.ADDED_AT,order:l.As.DESC},[i.SHOW_ALPHABETICAL]:{field:l.aW.NAME,order:l.As.ASC}},C=e=>{if(y.includes(e))return b[e]},O=[i.ADDED_AT,i.BOOK_ALPHABETICAL],S={[i.ADDED_AT]:l.VN.ADDED_AT,[i.BOOK_ALPHABETICAL]:l.VN.NAME},h=e=>{if(O.includes(e))return S[e]},L=[i.ADDED_AT,i.CREATOR_NAME,i.EPISODE_ALPHABETICAL],T={[i.ADDED_AT]:{field:l.yW.ADDED_AT,order:l.As.DESC},[i.CREATOR_NAME]:{field:l.yW.SHOW_NAME,order:l.As.ASC},[i.EPISODE_ALPHABETICAL]:{field:l.yW.NAME,order:l.As.ASC}},v=e=>{if(L.includes(e))return T[e]},k=e=>{if(!L.includes(e))return;const t=v(e);if(null==t||!t.field)return;const a=u[t.field];if(!a)return;return o.Vd[a].map((e=>t.order?`${e} ${t.order}`:e)).join(",")},_=[i.MOST_RELEVANT,i.RECENTLY_PLAYED,i.ADDED_AT,i.PLAYLIST_ALPHABETICAL,i.CUSTOM_ORDER],I={[i.ADDED_AT]:{field:n.bD.ADDED_AT,order:n.As.DESC},[i.RECENTLY_PLAYED]:{field:n.bD.RECENTLY_PLAYED,order:n.As.ASC},[i.PLAYLIST_ALPHABETICAL]:{field:n.bD.NAME,order:n.As.ASC},[i.MOST_RELEVANT]:{field:n.bD.RELEVANCE,order:n.As.DESC},[i.CUSTOM_ORDER]:void 0},R=e=>{if(_.includes(e))return I[e]},P={"custom-order":s.I5,title:{column:c.QD.TITLE,order:c.kn.ASC},artist:{column:c.QD.TITLE,order:c.kn.SECONDARY_ASC},"added-by":{column:c.QD.ADDED_BY,order:c.kn.ASC},"added-at":{column:c.QD.ADDED_AT,order:c.kn.ASC},duration:{column:c.QD.DURATION,order:c.kn.ASC},album:{column:c.QD.ALBUM,order:c.kn.ASC},"album-or-podcast":{column:c.QD.ALBUM_OR_PODCAST,order:c.kn.ASC},"album-or-show":{column:c.QD.ALBUM_OR_SHOW,order:c.kn.ASC}},N={title:c.QD.TITLE,artist:c.QD.TITLE,"added-by":c.QD.ADDED_BY,"added-at":c.QD.ADDED_AT,duration:c.QD.DURATION,album:c.QD.ALBUM,"album-or-podcast":c.QD.ALBUM_OR_PODCAST,"album-or-show":c.QD.ALBUM_OR_SHOW},B={[c.kn.NONE]:c.kn.NONE,[c.kn.ASC]:c.kn.DESC,[c.kn.DESC]:c.kn.ASC,[c.kn.SECONDARY_ASC]:c.kn.SECONDARY_DESC,[c.kn.SECONDARY_DESC]:c.kn.SECONDARY_ASC},w=(e,t,a)=>e?t!==N[e]||"artist"===e&&[c.kn.ASC,c.kn.DESC].includes(a)||"title"===e&&[c.kn.SECONDARY_ASC,c.kn.SECONDARY_DESC].includes(a)?P[e]:{column:N[e],order:B[a]}:s.I5,M={[c.QD.INDEX]:{key:"custom-order",value:r.ag.get("sort.custom-order")},[c.QD.TITLE]:{key:"title",value:r.ag.get("sort.title")},[c.QD.ARTIST]:{key:"artist",value:r.ag.get("sort.artist")},[c.QD.ADDED_BY]:{key:"added-by",value:r.ag.get("sort.added-by")},[c.QD.ADDED_AT]:{key:"added-at",value:r.ag.get("sort.date-added")},[c.QD.DURATION]:{key:"duration",value:r.ag.get("sort.duration")},[c.QD.EVENT_DATE]:null,[c.QD.ALBUM]:{key:"album",value:r.ag.get("sort.album")},[c.QD.ALBUM_OR_PODCAST]:{key:"album-or-podcast",value:r.ag.get("sort.album-or-podcast")},[c.QD.ALBUM_OR_SHOW]:{key:"album-or-show",value:r.ag.get("sort.album-or-show")},[c.QD.PLAYS]:null,[c.QD.RELEASE_DATE]:null,[c.QD.ADD]:null,[c.QD.ACTIONS]:null}},9746:(e,t,a)=>{a.d(t,{n:()=>T});var r=a(67294),l=a.n(r),n=a(94184),o=a.n(n),c=a(96685),s=a(26115),i=a(74594),u=a(20657),m=a(32626),E=a(43031),d=a(30005),A=a(21691);const p="BkpKedcdaMGbvgXMlmcg",g="muYk5XIwKmqR9iNibk_f",f="queue-tabBar-header",D="m20ShRDiGGDpJ5LSABTi",y="Hvv0e7WKQ4kyftgSQJhg",b="yxf_6IsQEmHjijEBUMTP",C="oaNVBli46GtVjaQKB15g",O="JdlKTdpMquftpMwwegZo",S="Nts_ArOCGeROTDZND3M6",h="FvDsfgxSvLvL3q8d7nQv",L=({items:e,activeItemId:t,setActiveDropdownItem:a})=>l().createElement(d.v,null,e.map((e=>l().createElement(A.s,{key:e.to,role:"menuitemradio",to:e.to,exact:!0,"aria-checked":e.itemId===t,className:b,activeClassName:C,isActive:t=>!!t&&(a(e),!0),onClick:()=>{var t;null===(t=e.handleClick)||void 0===t||t.call(e),a(e)}},e.title)))),T=l().memo((({isCentered:e,links:t,landmarkLabel:a,className:n,windowSize:d=1/0})=>{const[A,b]=(0,r.useState)(null),T=(0,r.useRef)(null),[v,k]=(0,r.useState)([]),[_,I]=(0,r.useState)(0),[R,P]=(0,r.useState)([]);(0,r.useEffect)((()=>{T.current&&I(T.current.clientWidth)}),[d]),(0,r.useEffect)((()=>{if(!T.current)return;const e=Array.from(T.current.children).map((e=>e.clientWidth));k(e)}),[t]),(0,r.useEffect)((()=>{if(!T.current)return;if(v.slice(0,-1).reduce(((e,t)=>e+t),0)<=_)return void P([]);const e=v.reduce(((e,t)=>e>t?e:t),0),t=[];let a=e;v.forEach(((e,r)=>{_>=a+e?a+=e:t.push(r)})),P(t)}),[_,v]);const N=(0,r.useCallback)((e=>!!e&&(b(null),!0)),[]);return l().createElement("nav",{className:o()(n,p),"aria-label":a},l().createElement("ul",{className:e?g:S,ref:T},t.filter(((e,t)=>!R.includes(t))).map((e=>l().createElement("li",{key:e.to,className:f},l().createElement(E.O,{exact:!0,className:O,activeClassName:C,to:e.to,isActive:N,onClick:e.handleClick},l().createElement(c.LF,{variant:"mestoBold"},e.title))))),R.length||0===v.length?l().createElement("li",{className:f},l().createElement(m.xV,{renderInline:!0,menu:l().createElement(L,{items:t.filter(((e,t)=>R.includes(t))),activeItemId:null==A?void 0:A.itemId,setActiveDropdownItem:b})},((e,t,a)=>l().createElement("button",{className:o()(D,{[y]:A}),type:"button",onClick:t,ref:a},l().createElement(c.LF,{variant:"mestoBold"},A?A.title:u.ag.get("more")),e?l().createElement(s.q,{iconSize:16,className:h}):l().createElement(i.m,{iconSize:16,className:h}))))):null))}))},78462:(e,t,a)=>{a.d(t,{P0:()=>s,MI:()=>i,RJ:()=>u,zq:()=>m,I5:()=>E,Gb:()=>d,kz:()=>A});var r=a(67294),l=a.n(r),n=a(22583),o=a(28248),c=a(73785);const s=[o.QD.INDEX,o.QD.TITLE,o.QD.ALBUM,o.QD.ADDED_AT],i=[o.QD.INDEX,o.QD.TITLE,o.QD.ALBUM,o.QD.DURATION],u=[o.QD.INDEX,o.QD.TITLE,o.QD.ALBUM,o.QD.DURATION],m=[o.QD.INDEX,o.QD.TITLE,o.QD.ALBUM,o.QD.ALBUM_OR_PODCAST,o.QD.ADDED_BY,o.QD.ADDED_AT,o.QD.DURATION],E={column:null,order:c.k.NONE},d=(0,r.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a TracksSortProvider")},sortState:E}),A=l().memo((function({uri:e,children:t}){return l().createElement(n.r,{uri:e,defaultState:E,sortContext:d},t)}))},35808:(e,t,a)=>{a.d(t,{P:()=>d});var r=a(59713),l=a.n(r),n=a(94321),o=a(29255),c=a(67294),s=a(65858),i=a(43088),u=a(44794),m=a(8247);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}const d=e=>{const t=(0,i.n)(),[a,r]=(0,c.useState)((()=>t.getViewFromCache(e))),d=(0,u.W6)(m.Xf),A=(0,s.v9)(n.rZ),{locale:p,overrides:g}=(0,s.v9)(o.Gg),f=(null==g?void 0:g.country)||A,D=(null==g?void 0:g.locale)||p;(0,c.useEffect)((()=>{t.getView(e,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({country:f,locale:D},d&&{extraTypes:["uri_link"]})).then((e=>{r(e)}))}),[f,D,e,t,d]);return{view:a,getNextPage:(0,c.useCallback)((()=>{t.getMore(e).then((e=>{e&&r(e)}))}),[e,t]),refreshContents:(0,c.useCallback)((()=>{t.getView(e,{country:f,locale:D,ignoreCache:!0}).then((e=>{r(e)}))}),[f,D,e,t])}}},55084:(e,t,a)=>{a.d(t,{Z:()=>r});const r={header:"Kqd6YgAEH_L9D3UK44p0",tabBar:"yPDOWTfndoixSqsbq6Re",AddToPlaylistIcon:"k84l_utp2OugbjNwAneO"}}}]);
//# sourceMappingURL=xpui-routes-collection.js.map