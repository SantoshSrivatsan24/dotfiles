"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[106],{36685:(e,a,n)=>{n.d(a,{L:()=>m});var i=n(67294),t=n.n(i),l=n(42922),r=n(91802),o=n(29064),d=n(9554),s=n(28248);n(98984);const u={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"queryAlbumTracks"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"offset"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"album"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"tracks"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"Variable",name:{kind:"Name",value:"offset"}}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uid"}},{kind:"Field",name:{kind:"Name",value:"track"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"saved"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"playcount"}},{kind:"Field",name:{kind:"Name",value:"discNumber"}},{kind:"Field",name:{kind:"Name",value:"trackNumber"}},{kind:"Field",name:{kind:"Name",value:"contentRating"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"}}]}},{kind:"Field",name:{kind:"Name",value:"relinkingInformation"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"isRelinked"}}]}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"artists"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"IntValue",value:"0"}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"10"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}}]}}]}}]}}]}}]}}]};function c(e){return e.total_count>=2&&e.total_count<=10}const m=t().memo((({ariaLabel:e,nrTracks:a,discs:n,albumUri:m,highlightUri:k,scrollToIndex:v,usePlayContextItem:g,hasHeaderRow:N=!0})=>{const b=(0,o.ZO)()===d.W.Web,{request:p}=(0,i.useContext)(r.Ax),f=(0,i.useRef)(null),y=(0,i.useRef)(!1),[S,E]=(0,i.useState)(null);(0,i.useEffect)((()=>{f.current&&(S?f.current.scrollToIndex(S):v&&f.current.scrollToIndex(v))}),[S,v]);const w=(0,i.useMemo)((()=>function(e){return c(e)?e.items.reduce(((e,a)=>(e.push(a.number-1),e.concat(Array(a.total_tracks).fill(a.number)))),[]):null}(n)),[n]),h=(0,i.useCallback)(((e,a)=>p(u,{uri:m,offset:null!==w?e-w[e]:e,limit:a}).then((e=>{var a,i;if(k&&!S){var t,l,r;const a=null==e||null===(t=e.data)||void 0===t||null===(l=t.album)||void 0===l||null===(r=l.tracks.items)||void 0===r?void 0:r.findIndex((e=>e.track.uri===k));E(a||-1)}return((e,a)=>{if(!c(a)||!e)return e;let n=0;return e.reduce(((e,a)=>((a.track.trackNumber<n||1===a.track.trackNumber)&&e.push({discNumber:a.track.discNumber}),e.push(a),n=a.track.trackNumber,e)),[])})(null==e||null===(a=e.data)||void 0===a||null===(i=a.album)||void 0===i?void 0:i.tracks.items,n)||[]}))),[p,m,w,k,S,n]),I=(0,i.useCallback)(((e,a)=>{var n,i,l;if("discNumber"in e)return t().createElement(s.UT,{key:a+e.discNumber,discNumber:e.discNumber});const{uid:r,track:o}=e;let d;d=null!==(n=o.relinkingInformation)&&void 0!==n&&n.isRelinked?o.relinkingInformation.uri:o.uri;const u=o.playcount?parseInt(o.playcount,10):0,c=!y.current&&(k===o.uri||k===(null===(i=o.relinkingInformation)||void 0===i?void 0:i.uri));return c&&(y.current=!0),t().createElement(s.Ym,{key:a+o.uri,index:a,trackNumber:o.trackNumber,contextUri:m,uri:d,uid:r,duration_ms:o.duration.totalMilliseconds,name:o.name,isPlayable:o.playability.playable,artists:o.artists.items,contentRating:null===(l=o.contentRating)||void 0===l?void 0:l.label,playcount:u,shouldRenderPlayCount:!b,shouldHighLight:c,usePlayContextItem:g})}),[k,m,b,g]),D=(0,i.useMemo)((()=>(e=>e?[s.QD.INDEX,s.QD.TITLE,s.QD.DURATION]:[s.QD.INDEX,s.QD.TITLE,s.QD.PLAYS,s.QD.DURATION])(b)),[b]),F=(0,i.useCallback)((e=>"track"in e?e.track.uri:""),[]);return t().createElement(l.ZP,{value:"album-tracklist"},t().createElement(s.Pv,{key:m,ariaLabel:e,hasHeaderRow:N,rowPlaceholder:s.uD,columns:D,renderRow:I,resolveUri:F,nrTracks:c(n)?n.total_count+a:a,fetchTracks:h,limit:300,outerRef:f}))}))},42811:(e,a,n)=>{n.d(a,{Hr:()=>t,qo:()=>l,GJ:()=>r,B$:()=>o,pf:()=>d,X7:()=>s});var i=n(7073);const t=e=>e?e.reduce(((e,a)=>(e.push(a.releases.items[0]),e)),[]):[],l=e=>`spotify:artist:${e}`,r=e=>`spotify:app:artist:${e}`,o=(e,a,n)=>{var i,t;return{artists:[{uri:a,name:n}],images:(null===(i=e.coverArt)||void 0===i?void 0:i.sources)||[],name:e.name,uri:e.uri,year:null===(t=e.date)||void 0===t?void 0:t.year,type:e.type,sharingInfo:e.sharingInfo}},d=e=>{var a,n,i;return{artists:e.artists.items.map((e=>({uri:e.uri,name:e.profile.name}))),images:(null===(a=e.coverArt)||void 0===a?void 0:a.sources)||[],name:e.name,uri:e.uri,year:null===(n=e.date)||void 0===n?void 0:n.year,type:e.type,sharingInfo:null!==(i=e.sharingInfo)&&void 0!==i?i:null}},s=({track:{uri:e,name:a,playcount:n,duration:{totalMilliseconds:t},contentRating:l,artists:{items:r},album:{coverArt:o,uri:d},playability:{playable:s}}},u)=>{var c;return{uri:e,contextUri:u,totalMilliseconds:t,name:a,contentRating:(null==l?void 0:l.label)||i.KS.None,isPlayable:s,playcount:parseInt(n||"0",10),artists:r.map((e=>({uri:e.uri,name:e.profile.name}))),imageUrl:null!=o&&null!==(c=o.sources)&&void 0!==c&&c.length?o.sources[0].url:"",albumUri:d}}},90110:(e,a,n)=>{n.d(a,{q:()=>D,o:()=>C});var i=n(67294),t=n.n(i),l=n(94184),r=n.n(l),o=n(69518),d=n.n(o),s=n(50020),u=n(96895),c=n(20657),m=n(83692),k=n(24656),v=n(69010),g=n(80946),N=n(6116),b=n(38209),p=n(40080);const f="l_MW0G9qeeCKlVJwBykT",y="BKsbV2Xl786X9a09XROH",S="HbKLiGoYM4dpuK8L4TMX",E="_APVWqivXc4YqgsnpFkP",w="VmwiDoU6RpqyzK_n7XRO",h="rEx3EYgBzS8SoY7dmC6x",I="z3zia5snl987x676qe5w";let D;!function(e){e[e.sm=24]="sm",e[e.md=32]="md"}(D||(D={}));const F=e=>{const{currentTarget:a,detail:n}=e;n>0&&a&&a.blur()},C=({uri:e,isFollowing:a,onFollow:n,size:l=D.sm,className:o,onClick:C=(()=>{})})=>{const T={"--size":`${l}px`},{useDownloading:A,useDownloadCapability:L}=(0,i.useContext)(k.I),[O,P]=(0,i.useState)(!1),[R,x]=L(d().isEpisode(e)),[V,_]=(0,i.useState)(!1),{currentAvailability:U,progress:M,beginDownload:z,clearDownload:W}=A(e);((e,a)=>{const n=(0,b.r)(),t=(0,i.useRef)(!1);(0,i.useEffect)((()=>{e===v.V8.DOWNLOADING&&!1===t.current&&(t.current=!0,n.say(c.ag.get("download.downloading",a.totalItems)))}),[n,e,a]);const l=(0,p.D)(e);(0,i.useEffect)((()=>{l===v.V8.DOWNLOADING&&e===v.V8.YES&&(t.current=!1,n.say(c.ag.get("download.complete")))}),[n,l,e])})(U,M);const $=(0,i.useCallback)((e=>{x===v.v$.DOWNLOADING_NOT_ALLOWED?_(!0):!1===a?(n(),P(!0)):z(),C(e),F(e)}),[z,x,a,C,n]),q=(0,i.useCallback)((e=>{W(),F(e),C(e)}),[W,C]);return(0,i.useEffect)((()=>{!0===O&&!0===a&&(z(),P(!1))}),[a,O,z]),R===v.PQ.NO_DOWNLOAD_CAPABILITY?null:x===v.v$.DOWNLOADING_NOT_ALLOWED?t().createElement("div",{className:y},t().createElement(m.w,{label:c.ag.get("download.download")},t().createElement("button",{className:r()(S,o),role:"switch",onClick:$,"aria-label":c.ag.get("download.download"),"aria-checked":!1},t().createElement(s.a,{iconSize:l}))),V&&t().createElement("div",{className:I},t().createElement(g.E,{withTopLeftPointer:!0,horizontal:!0,onClose:()=>{_(!1)}},c.ag.get("download.upsell")))):U===v.V8.YES?t().createElement(m.w,{label:c.ag.get("download.remove")},t().createElement("button",{className:r()(S,o,E),role:"switch",onClick:q,"aria-label":c.ag.get("download.remove"),"aria-checked":!0},t().createElement(u.C,{iconSize:l}))):U===v.V8.NO?t().createElement(m.w,{label:c.ag.get("download.download")},t().createElement("button",{className:r()(S,o),role:"switch",onClick:$,"aria-label":c.ag.get("download.download"),"aria-checked":!1},t().createElement(s.a,{iconSize:l}))):t().createElement("div",{className:r()(w,o),role:"switch","aria-checked":!0},t().createElement(m.w,{label:c.ag.get("download.cancel")},t().createElement("button",{style:T,className:r()(S,f,o),onClick:q,"aria-label":c.ag.get("download.cancel")})),t().createElement("span",{style:T,className:r()(h,f)},t().createElement(N.e,{"aria-valuetext":c.ag.get("progress.downloading-tracks"),percentage:M.percentage,size:l})))}},13768:(e,a,n)=>{n.d(a,{i:()=>m});var i=n(67294),t=n.n(i),l=n(20657),r=n(18261),o=n(48528),d=n(4232),s=n(36590),u=n(8498),c=n(27298);const m=t().memo((function(e){const{images:a,name:n,uri:i,type:m,year:k,sharingInfo:v,latest:g,showType:N,onClick:b,delegatePlayback:p=!1,isPlaying:f,onPlay:y,index:S,navigationUrl:E}=e,w=g?l.ag.get("artist.latest-release"):k;return t().createElement(r._,{menu:t().createElement(d.Y,{uri:i,sharingInfo:v})},t().createElement(s.C,{onClick:b,featureIdentifier:"album",headerText:n,uri:i,index:S,delegatePlayback:p,isPlaying:f,onPlay:y,navigationUrl:E,renderCardImage:()=>t().createElement(u.x,{images:a}),renderSubHeaderContent:()=>t().createElement(t().Fragment,null,w&&t().createElement("time",{dateTime:(k||"").toString()},w),N&&t().createElement("span",{className:c.Z.type},(0,o.R)(m)))}))}))},70369:(e,a,n)=>{n.d(a,{$:()=>i.$});var i=n(22578)},94233:(e,a,n)=>{n.d(a,{k:()=>o});var i=n(67294),t=n.n(i),l=n(96685);const r="rTMkDBDp47Eo12ZEQv4U",o=({copyrights:e,courtesyLine:a})=>{const n=(e||[]).map(((e,a)=>{const n=e.text.replace(/^(\(C\)\s+)/,"").replace(/^(\(P\)\s+)/,"").replace(/^(©\s+)/,"").replace(/^(℗\s+)/,"");let i;return i="C"===e.type?"©":"P"===e.type?"℗":`(${e.type})`,t().createElement(l.LF,{as:"p",variant:"finale",key:a,dir:"auto"},`${i} ${n}`)}));return a&&n.unshift(t().createElement(l.LF,{as:"p",variant:"finale",key:n.length,dir:"auto"},a)),t().createElement("div",{className:r},n)}},40080:(e,a,n)=>{n.d(a,{D:()=>t});var i=n(67294);function t(e){const a=(0,i.useRef)();return(0,i.useEffect)((()=>{a.current=e}),[e]),a.current}},48528:(e,a,n)=>{n.d(a,{R:()=>l});var i=n(20657),t=n(15066);function l(e){switch(e){case t.n.SINGLE:return i.ag.get("single");case t.n.EP:return i.ag.get("ep");case t.n.COMPILATION:return i.ag.get("compilation");case t.n.ALBUM:default:return i.ag.get("album")}}}}]);
//# sourceMappingURL=106.js.map