"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[179],{85917:(e,n,t)=>{t.d(n,{k:()=>o});var a=t(67294),i=t.n(a),l=t(96685),r=t(20657),d=t(42922),s=t(28248);const c="nUpwbkL4Yaj31N0emCvb",o=({nrTracks:e,initialTracks:n,usePlayContextItem:t})=>{const[o,m]=(0,a.useState)(!1),u=(0,a.useCallback)((()=>{m(!o)}),[o]),k=(0,a.useCallback)((({uri:e,contextUri:n,totalMilliseconds:a,name:l,artists:r,contentRating:d,isPlayable:c,playcount:o,imageUrl:m,albumUri:u},k)=>i().createElement(s.l0,{key:e,index:k,uri:e,contextUri:n,totalMilliseconds:a,name:l,artists:r,isPlayable:c,contentRating:d,playcount:o||0,imageUrl:m,albumUri:u,usePlayContextItem:t})),[t]),S=(0,a.useCallback)((e=>e.uri),[]),v=(0,a.useMemo)((()=>[s.QD.INDEX,s.QD.TITLE,s.QD.PLAYS,s.QD.DURATION]),[]);return i().createElement(d.ZP,{value:"artist-popular-tracks-list"},i().createElement(s.Pv,{ariaLabel:r.ag.get("tracklist.popular-tracks"),renderRow:k,nrTracks:Math.min(e,o?10:5),tracks:n,resolveUri:S,columns:v}),e>5?i().createElement("button",{"aria-expanded":o,className:c,onClick:u},i().createElement(l.LF,{as:"div",variant:"minuetBold"},o?r.ag.get("artist-page.tracks.showless"):r.ag.get("artist-page.tracks.seemore"))):null)}},75864:(e,n,t)=>{t.r(n),t.d(n,{Track:()=>hn,default:()=>Fn});var a=t(67294),i=t.n(a),l=t(65858),r=t(16528),d=t(69518),s=t.n(d),c=t(20657),o=t(30947),m=t(11414),u=t(55911),k=t(32626),S=t(94233),v=t(63926),p=t(96685),E=t(59713),N=t.n(E),g=t(18172);function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){N()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}let h;!function(e){e.LOADING="LOADING",e.LOADED="LOADED",e.UNAVAILABLE="UNAVAILABLE"}(h||(h={}));const F=(0,g.ZP)(((e,n)=>{switch(n.type){case"LYRICS_LOADING":e[n.uri]={status:h.LOADING};break;case"LYRICS_LOADED":e[n.uri]={status:h.LOADED,data:{lyrics:b({},n.response.lyrics)}};break;case"LYRICS_ERROR":e[n.uri]={status:h.UNAVAILABLE};break;default:throw new Error(`Unhandled lyrics action with type: ${n.type}`)}}));var I=t(80624),f=t(19719);const L={status:h.LOADING},A={status:h.UNAVAILABLE},_=i().createContext(void 0),C=({children:e,initialState:n={}})=>{const t=i().useReducer(F,n);return i().createElement(_.Provider,{value:t,children:e})},O=(e,n)=>{const t=i().useContext(_);if(void 0===t)throw new Error("useSEOLyrics must be used within a LyricsSEOProvider");if(!e||!s().isTrack(e)||n)return A;const[a,l]=t,r=a[e];return r||(l({type:"LYRICS_LOADING",uri:e}),(async e=>{const n=s().from(e);return(await f.Zz.getSEOTrackLyrics(I.b.getInstance(),n.getBase62Id())).body})(e).then((n=>{l({type:"LYRICS_LOADED",uri:e,response:n})})).catch((()=>{l({type:"LYRICS_ERROR",uri:e})})),L)},Z="_WZNTY8cs6JMVcAp9j8A",T="br3AcUgf2WazXovcTr0L",R=({padded:e})=>i().createElement(p.LF,{as:"p",dir:"auto",variant:"finale",className:`${Z} ${e?T:""}`},"Lyrics powered by Musixmatch."),w=({uri:e})=>{const{status:n}=O(e);return n!==h.LOADED?null:i().createElement(R,null)};var D=t(4383),U=t(84242),P=t(55773),j=t(16526);let x,B;!function(e){e.UNAUTH_LYRICS="track-lyrics-unauth-1.0"}(x||(x={})),function(e){e.CONTROL="0",e.UNAUTH_LYRICS="1",e.RTP_HOLDOUT="2"}(B||(B={}));const V=(e,n,t)=>{if(e&&e[n]){const a=e[n];return a.experimentId===x.UNAUTH_LYRICS&&a.treatment===t}return!1};var M=t(56802),Q=t(80322),Y=t(4236),H=t(29255);const G=(0,t(20573).P1)((e=>e.seoExperiment),(e=>null==e?void 0:e.track));var z=t(90110),$=t(95661),W=t(86213),J=t(70369),K=t(42273),q=t(59482),X=t(72907),ee=t(1663),ne=t(55120),te=t(44137),ae=t(67154),ie=t.n(ae);const le="JtmUDerSLCaN8LuQv9tM",re="mQtVA857h95uvEmY9SPP",de="bObO_7Z_b1atmqMnYiU2",se="vHqxBD3S0NJpGMsVRwHT",ce="pxMz7QGxCF9LYKHJzOlY",oe="PTVcqp5lumB25L7FY7ai",me="DqqPRJJPXjVNE52h_cPt";var ue=t(78688),ke=t(48528),Se=t(94184),ve=t.n(Se),pe=t(44887),Ee=t(42781),Ne=t(7469);let ge;!function(e){e.SMALL="small",e.LARGE="large"}(ge||(ge={}));const ye=({art:e,disabled:n=!1,LinkComponent:t,name:a,size:l=ge.SMALL,type:d,uri:o})=>{const m=e?[e]:[],u=l===ge.SMALL?(0,ke.R)(d):function(e){switch(e){case ue.albumType.SINGLE:return c.ag.get("track-page.from-the-single");case ue.albumType.EP:return c.ag.get("track-page.from-the-ep");case ue.albumType.COMPILATION:return c.ag.get("track-page.from-the-compilation");case ue.albumType.ALBUM:default:return c.ag.get("track-page.from-the-album")}}(d),k=(0,r.k6)();return i().createElement("div",{className:ve()(le,{[de]:l===ge.SMALL,[re]:n})},i().createElement("div",{className:se},i().createElement(pe.O,{images:m,size:Ne.m$.SIZE_80,title:a,type:Ee.p.ALBUM})),i().createElement("div",{className:ce},i().createElement(p.LF,{variant:l===ge.SMALL?"minuetBold":"finale"},u),i().createElement(t,{to:o},i().createElement(p.LF,{as:"div",className:oe,variant:"balladBold",dir:"auto"},a))),i().createElement("div",{onClick:()=>{k.push(s().from(o).toURLPath(!0))},className:me}))};var be=t(42922),he=t(7073),Fe=t(85917),Ie=t(42811),fe=t(13768),Le=t(67892),Ae=t(19480),_e=t(98984);const Ce={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getRichTrack"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"trackUnion"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackFields"}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"richTrackFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"album"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackAlbum"}}]}},{kind:"Field",name:{kind:"Name",value:"artistsWithRoles"},arguments:[{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"1"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"artist"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}},{kind:"Field",name:{kind:"Name",value:"discography"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"singles"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"trackItem"}}]}},{kind:"Field",name:{kind:"Name",value:"albums"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"trackItem"}}]}},{kind:"Field",name:{kind:"Name",value:"popularReleasesAlbums"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"albums"}}]}},{kind:"Field",name:{kind:"Name",value:"topTracks"},arguments:[{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"IntValue",value:"0"}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"IntValue",value:"10"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"topTracks"}}]}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"richTrackAlbum"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"type"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"date"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"year"}}]}},{kind:"Field",name:{kind:"Name",value:"tracks"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"track"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"trackNumber"}}]}}]}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackAlbumCoverArt"}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"richTrackAlbumCoverArt"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"extractedColors"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorRaw"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hex"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"trackItem"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AlbumGroupPage"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"releases"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"albums"}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"albums"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AlbumPage"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackAlbum"}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"topTracks"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"TrackPage"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"track"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"topTrack"}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"topTrack"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"artists"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"album"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"FragmentSpread",name:{kind:"Name",value:"richTrackAlbumCoverArt"}}]}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}}]}},{kind:"Field",name:{kind:"Name",value:"playcount"}},{kind:"Field",name:{kind:"Name",value:"previews"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"audioPreviews"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"id"}}]}}]};var Oe=t(75987),Ze=t(36685),Te=t(41734);const Re=({richTrack:e})=>{var n;const t=(0,r.k6)(),l=(0,a.useCallback)((()=>new URLSearchParams(t.location.search.slice(1)).get("highlight")||""),[t.location.search])(),{tracklistRef:d}=(0,Oe.W)(),s=e.album,c=(0,Q.Y)(s.uri),{usePlayContextItem:o}=(0,U.n)({uri:c},{featureIdentifier:"album"}),m=(0,a.useMemo)((()=>({items:[],total_count:0})),[]);return s?i().createElement("div",{ref:d,className:Te.Z.tracklist},i().createElement(Ze.L,{ariaLabel:s.name,nrTracks:null===(n=s.tracks)||void 0===n?void 0:n.totalCount,albumUri:s.uri,highlightUri:l,discs:m,usePlayContextItem:o,hasHeaderRow:!1})):null};var we=t(68569);const De="NyTgQLBMbP0S3tKSRCs9",Ue="hCOVAZTJWusN_w2vFlHb",Pe="GKrQF4Y14e5YsTYK4Shj",je="dBS838bk0cna4pcQ9Q0I",xe="Vfjpe8Q1SyjkZMeqnA5a",Be="iyOEFMEyp7ZcRdlxIZo5",Ve=({album:e,index:n,artistURI:t})=>i().createElement(be.JL,{value:"card",index:n,key:e.uri},i().createElement(fe.i,ie()({index:n,latest:!1,showType:!0},(0,Ie.B$)(e,t,e.name)))),Me=({richTrack:e})=>{var n;const t=e.artistsWithRoles.items[0].artist,a=s().artistURI(t.id).toURI(),l=null===(n=t.discography)||void 0===n?void 0:n.singles;return l?i().createElement(be.JL,{value:"shelf/singles-and-eps"},i().createElement(Ae.P,{total:l.totalCount,title:c.ag.get("track-page.popular-singles-and-eps-by-artist",{artist:t.profile.name}),seeAllUri:`${(0,Ie.GJ)(t.id)}:discography:${he.VZ.Single.toLowerCase()}`,seeAllLabel:c.ag.get("artist-page.show-discography"),alwaysShowSeeAll:!0,className:we.Z.artistShelfSpacer},(0,Ie.Hr)(l.items).map(((e,n)=>i().createElement(Ve,{album:e,index:n,artistURI:a}))))):null},Qe=({richTrack:e})=>{var n;const t=e.artistsWithRoles.items[0].artist,a=s().artistURI(t.id).toURI(),l=null===(n=e.artistsWithRoles.items[0].artist.discography)||void 0===n?void 0:n.albums;return l?i().createElement(be.JL,{value:"shelf/albums"},i().createElement(Ae.P,{total:l.totalCount,title:c.ag.get("track-page.popular-albums-by-artist",{artist:t.profile.name}),seeAllUri:`${(0,Ie.GJ)(t.id)}:discography:${he.VZ.Album.toLowerCase()}`,seeAllLabel:c.ag.get("artist-page.show-discography"),alwaysShowSeeAll:!0,className:we.Z.artistShelfSpacer},(0,Ie.Hr)(l.items).map(((e,n)=>i().createElement(Ve,{album:e,index:n,artistURI:a}))))):null},Ye=({richTrack:e})=>{var n;const t=e.artistsWithRoles.items[0].artist,a=s().artistURI(t.id).toURI(),l=null===(n=t.discography)||void 0===n?void 0:n.popularReleasesAlbums;return l?i().createElement(be.JL,{value:"shelf/releases"},i().createElement(Ae.P,{total:10,title:c.ag.get("track-page.popular-releases-by-artist",{artist:t.profile.name}),seeAllUri:`${(0,Ie.GJ)(t.id)}:discography:${he.VZ.Album.toLowerCase()}`,seeAllLabel:c.ag.get("artist-page.show-discography"),alwaysShowSeeAll:!0,className:we.Z.artistShelfSpacer},l.items.map(((e,n)=>i().createElement(Ve,{album:e,index:n,artistURI:a}))))):null},He=({richTrack:e})=>{var n;const t=e.artistsWithRoles.items[0].artist,l=null===(n=t.discography)||void 0===n?void 0:n.topTracks,r=(0,a.useMemo)((()=>null==l?void 0:l.items.map((n=>(0,Ie.X7)(n,e.uri)))),[l,e]),{usePlayContextItem:d}=(0,U.n)({uri:t.uri},{featureIdentifier:"artist"});return r?i().createElement("div",{className:xe},i().createElement("div",null,i().createElement(p.LF,{variant:"mesto"},c.ag.get("track-page.popular-tracks")),i().createElement(p.LF,{as:"h2",variant:"canon",semanticColor:"textBase",className:we.Z.heading},t.profile.name)),i().createElement(Fe.k,{nrTracks:r.length,initialTracks:r,usePlayContextItem:d})):null},Ge=i().memo((()=>{var e,n;const{trackId:t}=(0,r.UO)(),a=s().trackURI(t).toURI(),l=(d={uri:a},(0,_e.a)(Ce,d,o));var d,o;const m=(0,Y.k)();if(l.loading||null===(e=l.data)||void 0===e||!e.trackUnion)return i().createElement(ee.h,{hasError:null!==l.error,errorMessage:c.ag.get("track-page.error")});const u=l.data.trackUnion,k=u.album,S=null==k||null===(n=k.playability)||void 0===n?void 0:n.playable;return i().createElement("div",{"data-testid":"rich-track"},i().createElement(He,{richTrack:u}),i().createElement(Ye,{richTrack:u}),i().createElement(Qe,{richTrack:u}),i().createElement(Me,{richTrack:u}),i().createElement(ye,{art:k.coverArt?k.coverArt.sources[0]:void 0,disabled:!S||!m,LinkComponent:Le.Z,name:k.name,type:k.type,size:ge.LARGE,uri:k.uri}),i().createElement(Re,{richTrack:u}))}));var ze=t(6479),$e=t.n(ze);const We="FTTfxsCa1sJIu1Y7utDO",Je="vrjrGtquvKnX8rzOuAaA",Ke="HeVBalD_EHmtuqfIkkjo",qe="GQqQDXMybjyriRQKH_ID",Xe="DX4i2V_0jaKraBkfcDnR",en="zCVFaVQz6MUyNwqjGS4c",nn="USV2e_90ZCdBCH9Dr5Vw",tn="PhpDpIcERAEMvFD0NvPk",an=["size","disabled"];let ln;!function(e){e.SMALL="small",e.LARGE="large"}(ln||(ln={}));const rn=e=>{const{disabled:n,images:t,LinkComponent:a,name:l,size:d,uri:o}=e,m=d===ln.SMALL,u=(0,r.k6)();return i().createElement("div",{className:ve()(Je,{[Ke]:n}),"data-testid":"track-artist-link-card"},i().createElement(pe.O,{shape:pe.K.CIRCLE,images:t,size:Ne.m$.SIZE_80,title:l,type:Ee.p.ARTIST}),i().createElement("div",{className:ve()(Xe,{[en]:m})},i().createElement(p.LF,{variant:"minuetBold",className:qe},c.ag.get("card.tag.artist")),i().createElement(a,{to:o},i().createElement(p.LF,{as:"div",dir:"ltr",className:nn,variant:"balladBold"},l))),i().createElement("div",{onClick:()=>{u.push(s().from(o).toURLPath(!0))},className:tn}))},dn=e=>{let{size:n=ln.LARGE,disabled:t=!1}=e,a=$e()(e,an);return i().createElement("div",{className:We},a.artists.map((e=>i().createElement(rn,{key:e.id,name:e.name,uri:e.uri,images:e.images,size:n,LinkComponent:a.LinkComponent,disabled:t}))))};var sn=t(54675),cn=t(21770),on=t(99450);const mn="QhDsXG1Gmo7XmQWLggAO",un="bZgWQj7UxvK8GYKWDA7N",kn="AW61P3tnW5cKJCWtbhFh",Sn=({buttonText:e,onSecondaryButtonClick:n,onPrimaryButtonClick:t,secondaryButtonText:a,text:l})=>i().createElement("div",{className:mn,"data-testid":"static-activation-trigger"},i().createElement(p.LF,{className:un,variant:"cello"},l),i().createElement("div",{className:kn},i().createElement(cn.oM,{onClick:n,semanticColor:"textBase",buttonLegacy:!0},a),i().createElement(on.D,{onClick:t,colorSet:"invertedLight",buttonLegacy:!0},e))),vn="o7c89JiqZPfyQtLPjgrK",pn="uzdLGhPskgWtE64HOVL8",En=({lines:e=[],isRtlLanguage:n=!1})=>0===e.length?null:i().createElement("div",null,i().createElement(p.LF,{as:"h2",variant:"canon",semanticColor:"textBase",className:vn},c.ag.get("web-player.lyrics.title")),e.map((({words:e},t)=>i().createElement(p.LF,{as:"p",dir:n?"rtl":"auto",variant:"ballad",key:`lyrics-seo-line-${t}`,className:pn},e)))),Nn=({uri:e})=>{const{status:n,data:t}=O(e);return n!==h.LOADED?null:i().createElement(En,{lines:null==t?void 0:t.lyrics.lines,isRtlLanguage:null==t?void 0:t.lyrics.isRtlLanguage})};function gn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function yn(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?gn(Object(t),!0).forEach((function(n){N()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):gn(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}const bn=e=>{const{albumArtists:n,columnCount:t,uri:d,isRTPHoldoutSEOEnabled:s,isUnauthLyricsSEOEnabled:o}=e,m=t-2,u={"--column-count":t,"--left-column-end":m-2,"--right-column-start":m},{isAnonymous:k}=(0,l.v9)(H.Gg),S=(0,Y.k)(),v=(0,r.TH)(),[p]=(0,P.j)([j.k.UnauthLyrics],v),{data:E,status:N}=O(d,k),g=o||p,y=g||!!E&&N!==h.UNAVAILABLE;return i().createElement(a.Suspense,{fallback:null},y&&i().createElement("div",{className:ve()(Pe,{[je]:t>5}),style:yn({},u)},k?g&&i().createElement(Sn,{buttonText:c.ag.get("sign_up"),secondaryButtonText:c.ag.get("login"),text:c.ag.get("track-page.sign-in-to-view-lyrics"),onPrimaryButtonClick:sn.L6,onSecondaryButtonClick:sn.h$}):i().createElement(Nn,{uri:d})),!s&&i().createElement("div",{className:ve()(De,{[Ue]:t>5&&y}),style:yn({},u)},i().createElement(dn,{artists:n,LinkComponent:Le.Z,disabled:!S})))},hn=({uri:e,track:n})=>{var t,d;const s=(0,M.o)(),p=(0,Y.k)(),E=(0,r.TH)(),[N]=(0,P.j)([j.k.UnauthLyrics],E),{isAnonymous:g}=(0,l.v9)(H.Gg),{artistsWithRoles:y,album:b,duration:h,name:F}=n,I=b.coverArt,f=b.copyright.items,L=b.courtesyLine,A=null===(t=b.date)||void 0===t?void 0:t.isoString,_=null==I||null===(d=I.extractedColors)||void 0===d?void 0:d.colorRaw.hex,O=((null==I?void 0:I.sources)||[]).map((e=>({url:e.url,width:e.width||void 0,height:e.height||void 0}))),Z=y.items.map((e=>{var n;return{name:e.artist.profile.name,images:((null===(n=e.artist.visuals.avatarImage)||void 0===n?void 0:n.sources)||[]).map((e=>({url:e.url,width:e.width,height:e.height}))),uri:e.artist.uri,id:e.artist.uri}})),T=(0,l.v9)(G),R=V(T,n.id,B.RTP_HOLDOUT),x=V(T,n.id,B.UNAUTH_LYRICS),ee=x||N,te=n.playability.playable,ae=(0,Q.Y)(e),{togglePlay:ie,isPlaying:le}=(0,U.n)({uri:ae},{featureIdentifier:"track"}),[re,de]=(0,D.Z)(e),se=(0,a.useCallback)((async()=>{s({targetUri:e,intent:re?"unsave":"save",type:"click"});try{await de(!re)}catch{}}),[s,e,re,de]),ce=(0,a.useCallback)((()=>ee?`${n.name} - song and lyrics by ${Z.map((e=>e.name)).join(", ")}`:`${n.name} - song by ${Z.map((e=>e.name)).join(", ")}`),[Z,ee,n.name]);return i().createElement("section",{"data-testid":"track-page"},i().createElement(J.$,null,ce()),i().createElement(K.gF,{backgroundColor:_},i().createElement(q.W,null,i().createElement(ne.$,{size:u.qE.sm,onClick:()=>ie(),disabled:!te,isPlaying:le,uri:e}),i().createElement(X.i,{text:F,dragUri:e,dragLabel:F})),i().createElement(k._P,{menu:i().createElement(W.$,{uri:e})},i().createElement(K.Oz,{dragUri:e,images:O,name:F,placeholderType:"album"})),i().createElement(K.sP,null,i().createElement(K.dy,{small:!0,uppercase:!0},c.ag.get("song")),i().createElement(k._P,{menu:i().createElement(W.$,{uri:e})},i().createElement(K.xd,{dragUri:e,dragLabel:F},F)),i().createElement(K.QS,{creators:Z,releaseDate:A,durationMilliseconds:h.totalMilliseconds,isTrack:!0}))),i().createElement(o.o,{backgroundColor:_},i().createElement(o.F,null,i().createElement(K.rn,null,i().createElement(ne.$,{onClick:()=>ie(),isPlaying:le,disabled:!te,size:u.qE.lg,uri:e})),i().createElement(K.rn,null,i().createElement(m.H,{isAdded:!!re,onClick:se,disabled:!p,size:m.q.md})),p?i().createElement(z.o,{uri:e,isFollowing:!!re,onFollow:se,size:z.q.md}):null,i().createElement(k.yj,{menu:i().createElement(W.$,{uri:e})},i().createElement($.z,{label:c.ag.get("more.label.context",F)})))),i().createElement(C,null,i().createElement("div",{className:"contentSpacing"},i().createElement("div",{className:xe},i().createElement(v.T,{render:n=>i().createElement(bn,{albumArtists:Z.slice(0,1),columnCount:n,uri:e,isRTPHoldoutSEOEnabled:R,isUnauthLyricsSEOEnabled:x})})),!R&&i().createElement(Ge,null)),i().createElement("div",{className:"contentSpacing"},i().createElement("div",{className:Be},i().createElement(S.k,{copyrights:f,courtesyLine:L}),!g&&i().createElement(w,{uri:e})))))},Fn=i().memo((()=>{var e,n,t;const{trackId:a}=(0,r.UO)(),l=s().trackURI(a).toURI(),d=(0,te.QN)({uri:l});if(d.loading||null===(e=d.data)||void 0===e||!e.trackUnion||"NotFound"===(null===(n=d.data)||void 0===n||null===(t=n.trackUnion)||void 0===t?void 0:t.__typename))return i().createElement(ee.h,{hasError:null!==d.error,errorMessage:c.ag.get("track-page.error")});const o=d.data.trackUnion;return i().createElement(hn,{uri:l,track:o})}))},44137:(e,n,t)=>{t.d(n,{QN:()=>l});var a=t(98984);const i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getTrack"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uri"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"trackUnion"},arguments:[{kind:"Argument",name:{kind:"Name",value:"uri"},value:{kind:"Variable",name:{kind:"Name",value:"uri"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"trackFields"}},{kind:"FragmentSpread",name:{kind:"Name",value:"trackNotFound"}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"trackFields"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"contentRating"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"label"}}]}},{kind:"Field",name:{kind:"Name",value:"duration"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalMilliseconds"}}]}},{kind:"Field",name:{kind:"Name",value:"playability"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"playable"}},{kind:"Field",name:{kind:"Name",value:"reason"}}]}},{kind:"Field",name:{kind:"Name",value:"trackNumber"}},{kind:"Field",name:{kind:"Name",value:"playcount"}},{kind:"Field",name:{kind:"Name",value:"saved"}},{kind:"Field",name:{kind:"Name",value:"sharingInfo"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"shareUrl"}},{kind:"Field",name:{kind:"Name",value:"shareId"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"trackArtists"}},{kind:"FragmentSpread",name:{kind:"Name",value:"trackAlbum"}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"trackArtists"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"artistsWithRoles"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"role"}},{kind:"Field",name:{kind:"Name",value:"artist"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"visuals"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"avatarImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}},{kind:"Field",name:{kind:"Name",value:"url"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"profile"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"trackAlbum"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Track"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"album"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"uri"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"date"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isoString"}},{kind:"Field",name:{kind:"Name",value:"precision"}}]}},{kind:"Field",name:{kind:"Name",value:"copyright"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"}},{kind:"Field",name:{kind:"Name",value:"items"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"text"}},{kind:"Field",name:{kind:"Name",value:"type"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"courtesyLine"}},{kind:"FragmentSpread",name:{kind:"Name",value:"trackAlbumCoverArt"}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"trackAlbumCoverArt"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Album"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"coverArt"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"extractedColors"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colorRaw"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hex"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"sources"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"width"}},{kind:"Field",name:{kind:"Name",value:"height"}}]}}]}}]}},{kind:"FragmentDefinition",name:{kind:"Name",value:"trackNotFound"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NotFound"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"message"}}]}}]},l=(e,n)=>(0,a.a)(i,e,n)},75987:(e,n,t)=>{t.d(n,{W:()=>i});var a=t(70131);function i(){const{ref:e,inView:n}=(0,a.YD)({initialInView:!1}),{ref:t,inView:i}=(0,a.YD)({initialInView:!1});return{titleRef:e,tracklistRef:t,displayTopBar:!n&&i}}},44887:(e,n,t)=>{t.d(n,{O:()=>I,K:()=>F});var a=t(59713),i=t.n(a),l=t(67294),r=t.n(l),d=t(94184),s=t.n(d),c=t(80418),o=t(7469);const m={xsmall:"g3kBhX1E4EYEC2NFhhxG",small:"O5_0cReFdHe81E0xFAD1",medium:"H71KtIrytVayf_dFofu7",large:"SBpny8HrUTBzSjk7Vtk1",square:"CxurIfvXVb_TqGF4q8Yf",circle:"OadpZJiOaGfX6Qp4j6n5",image:"iJp40IxKg6emF6KYJ414",imageContainer:"vreceNX3ABcxyddeS83B",imagePlaceholder:"p6xU6jAgF1YQ43M1zZbV"},u="Ozitxbqs1vcOukDz3GDw",k="AeEoI6ueagbJtaHl2cRd";var S=t(42781),v=t(45322),p=t(68101),E=t(28151),N=t(79458),g=t(68251);const y=({title:e,type:n,className:t})=>{const a=(e=>{switch(e){case S.p.ALBUM:return r().createElement(v.c,{className:k});case S.p.ARTIST:return r().createElement(p.a,{className:k});case S.p.SHOW:case S.p.EPISODE:return r().createElement(E.J,{className:k});case S.p.USER:return r().createElement(N.f,{className:k});case S.p.PLAYLIST:default:return r().createElement(g.U,{className:k})}})(n);return r().createElement("div",{"aria-label":e,className:s()(u,t)},a)};function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){i()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}let F;!function(e){e[e.ROUNDED_CORNERS=0]="ROUNDED_CORNERS",e[e.CIRCLE=1]="CIRCLE",e[e.SQUARE=2]="SQUARE"}(F||(F={}));const I=r().memo((({type:e,title:n,images:t=[],shape:a=F.SQUARE,size:i=o.m$.SIZE_56,className:l,onContextMenu:d=(()=>{}),onTouchStart:u=(()=>{}),onTouchEnd:k=(()=>{})})=>{const S=function(e=[]){const n=e.filter((e=>Boolean(e.width))),t=n.filter((e=>e.url&&e.width&&e.width>=o.eM[o.m$.SIZE_56])).sort(((e,n)=>e.width-n.width));return t.length?t:n}(t),v=S.length>0?S[0].url:"",p=S.map((({url:e,width:n})=>`${e} ${n/2}w, ${e} ${n}w`)).join(", "),E=()=>({[m.xsmall]:o.pj.includes(i),[m.small]:o.wL.includes(i),[m.medium]:o.VZ.includes(i),[m.large]:o.B_.includes(i)});return r().createElement("div",{className:s()(m.imageContainer,l),onContextMenu:d,onTouchStart:u,onTouchEnd:k,style:{width:`${o.eM[i]}px`,height:`${o.eM[i]}px`}},r().createElement(c.E,{loading:"lazy",src:v,alt:n,ariaHidden:!0,className:s()(m.image,h({[m.roundedCorners]:a===F.ROUNDED_CORNERS,[m.circle]:a===F.CIRCLE,[m.square]:a===F.SQUARE},E())),srcSet:p||void 0,testid:"entity-image"},r().createElement(y,{title:n,type:e,className:s()(h({[m.roundedCorners]:a===F.ROUNDED_CORNERS,[m.circle]:a===F.CIRCLE,[m.square]:a===F.SQUARE},E()))})))}))},7469:(e,n,t)=>{let a;t.d(n,{m$:()=>a,eM:()=>i,pj:()=>l,wL:()=>r,VZ:()=>d,B_:()=>s}),function(e){e[e.SIZE_48=0]="SIZE_48",e[e.SIZE_56=1]="SIZE_56",e[e.SIZE_64=2]="SIZE_64",e[e.SIZE_72=3]="SIZE_72",e[e.SIZE_80=4]="SIZE_80",e[e.SIZE_96=5]="SIZE_96",e[e.SIZE_104=6]="SIZE_104",e[e.SIZE_112=7]="SIZE_112",e[e.SIZE_120=8]="SIZE_120",e[e.SIZE_128=9]="SIZE_128",e[e.SIZE_136=10]="SIZE_136",e[e.SIZE_144=11]="SIZE_144",e[e.SIZE_152=12]="SIZE_152",e[e.SIZE_160=13]="SIZE_160",e[e.SIZE_168=14]="SIZE_168",e[e.SIZE_176=15]="SIZE_176",e[e.SIZE_184=16]="SIZE_184",e[e.SIZE_200=17]="SIZE_200",e[e.SIZE_232=18]="SIZE_232"}(a||(a={}));const i={[a.SIZE_48]:48,[a.SIZE_56]:56,[a.SIZE_64]:64,[a.SIZE_72]:72,[a.SIZE_80]:80,[a.SIZE_96]:96,[a.SIZE_104]:104,[a.SIZE_112]:112,[a.SIZE_120]:120,[a.SIZE_128]:128,[a.SIZE_136]:136,[a.SIZE_144]:144,[a.SIZE_152]:152,[a.SIZE_160]:160,[a.SIZE_168]:168,[a.SIZE_176]:176,[a.SIZE_184]:184,[a.SIZE_200]:200,[a.SIZE_232]:232},l=[a.SIZE_48,a.SIZE_56,a.SIZE_64],r=[a.SIZE_72,a.SIZE_80,a.SIZE_96,a.SIZE_104,a.SIZE_112,a.SIZE_120,a.SIZE_128],d=[a.SIZE_136,a.SIZE_144,a.SIZE_152,a.SIZE_160,a.SIZE_168,a.SIZE_176],s=[a.SIZE_184,a.SIZE_200,a.SIZE_232]},41734:(e,n,t)=>{t.d(n,{Z:()=>a});const a={topBar:"M_Sdhr1fQomXfFpJhlAV",topBarScrolled:"y1_VPBbLK5eyOtpider1",artistName:"jy0edgg9sHX2n0pFa4vj",button:"dLvkpxjslIRQbk1CwUmA",active:"Q4Tjljkt3LIpk7eBBKgp",tracklist:"flODZ8OHLrIZdsmmorij",cardGrid:"cfLzS7jCKWI2Q04gBr1F",headerContainer:"Fz5_rAxpenrV3rKWvEE0",firstAlbum:"ZxsW3oR7Vn5LaJ7V01M9",headerImage:"ul3GJOil7Z8NKLlukZoK",headerMetadata:"xvvNq8f5m_OwRXAXfjGY",headerButtons:"zh6kn35ACwwkQDbuf9dk",headerTitle:"Fs4KnCRGI01L4kCcEQcS"}},68569:(e,n,t)=>{t.d(n,{Z:()=>a});const a={artistOverviewContent:"iB16LxoPzDeVZo8zPhPQ",artistOverviewContainer:"FWzKEQQ9PYhHWOqfnYJV",popularTracks:"uhUnBNQXv7eaTTjCiPnp",artistShelfSpacer:"gS5Yk2DVcvRFAuyG_4r4",sideBlock:"kySHiIHbAOOdeS_SiOKz",popularTracksBlock:"m2I9Af9uHAIhYwi4fyo2",about:"bwNHXCZFo6f46VJEQNEl",events:"N7W_r4ZH8LUdXhpDsQ8c",merch:"jnwkIthi9wxLu9UAyQ7P",merchSmall:"_5tLXPYx42wERUwuJIEcE",overview:"cikURTYDxmyv0HGq10TK",heading:"l6YAKmkzQj4WAyn82MP6"}}}]);
//# sourceMappingURL=xpui-routes-track-v2.js.map