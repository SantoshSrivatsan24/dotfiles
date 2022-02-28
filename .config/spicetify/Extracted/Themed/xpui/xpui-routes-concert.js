"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[288],{42811:(e,t,a)=>{a.d(t,{Hr:()=>n,qo:()=>c,GJ:()=>l,B$:()=>i,pf:()=>s,X7:()=>o});var r=a(7073);const n=e=>e?e.reduce(((e,t)=>(e.push(t.releases.items[0]),e)),[]):[],c=e=>`spotify:artist:${e}`,l=e=>`spotify:app:artist:${e}`,i=(e,t,a)=>{var r,n;return{artists:[{uri:t,name:a}],images:(null===(r=e.coverArt)||void 0===r?void 0:r.sources)||[],name:e.name,uri:e.uri,year:null===(n=e.date)||void 0===n?void 0:n.year,type:e.type,sharingInfo:e.sharingInfo}},s=e=>{var t,a,r;return{artists:e.artists.items.map((e=>({uri:e.uri,name:e.profile.name}))),images:(null===(t=e.coverArt)||void 0===t?void 0:t.sources)||[],name:e.name,uri:e.uri,year:null===(a=e.date)||void 0===a?void 0:a.year,type:e.type,sharingInfo:null!==(r=e.sharingInfo)&&void 0!==r?r:null}},o=({track:{uri:e,name:t,playcount:a,duration:{totalMilliseconds:n},contentRating:c,artists:{items:l},album:{coverArt:i,uri:s},playability:{playable:o}}},m)=>{var u;return{uri:e,contextUri:m,totalMilliseconds:n,name:t,contentRating:(null==c?void 0:c.label)||r.KS.None,isPlayable:o,playcount:parseInt(a||"0",10),artists:l.map((e=>({uri:e.uri,name:e.profile.name}))),imageUrl:null!=i&&null!==(u=i.sources)&&void 0!==u&&u.length?i.sources[0].url:"",albumUri:s}}},7679:(e,t,a)=>{a.d(t,{k:()=>k});var r=a(67294),n=a.n(r),c=a(97493),l=a(64656),i=a(96685),s=a(94880),o=a(43315),m=a(25340),u=a(67892);const g="lKqKagNqQ8VlvdFmruT3",d="Z2uK7sMMyCWb6pniuNXi",v="NIMwRV_NRJ13Vqumxn_j",E="t5KPIGEuuRNJCJOxPA1o",h="_32BBOf0wCFJBS35JKFU0",p="vdvOAp_f8lhHOp7y1BqJ",y="qHSZnGIgaXfml2KOzmbd",_="zX69m46sU0G_VEwc4Fiy",b="lKkeD_aRHPt1Sb7cc031",N="hBa5HsnSqAQj7ngrUaoq",f="WD2YMKFx0lQZSbihWLOR",k=n().memo((e=>{const{entity:t,isVirtual:a,shouldCombineRecs:r}=e,{venue:{name:k,location:{name:F}}}=t,L=t.artists[0],I=(0,m.ij)(t),U=new Date(t.date.isoString),w=a?c.q:l.K;return n().createElement(u.r,{to:`/concert/${t.id}`,className:g},L.imageUri?n().createElement(s.Z,null,n().createElement("div",{"data-testid":"image-container",className:f,style:{backgroundImage:`linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(6, 6, 6, 0.6) 60%, rgba(0, 0, 0, 0.7) 100%), url(${L.imageUri})`}})):null,n().createElement("time",{className:d,dateTime:t.date.isoString},n().createElement(i.LF,{as:"h5",variant:"minuetBold",className:v},(0,m.lJ)(U)),n().createElement(i.LF,{as:"h1",variant:"canon",className:E},U.getDate())),n().createElement("div",{className:h,dir:"auto"},n().createElement(i.LF,{as:"h2",className:N,variant:"minuetBold"},(0,o.FO)(U),", ",(0,m.b8)(U)),n().createElement(i.LF,{as:"h2",variant:"cello",weight:"bold",className:p},I),n().createElement("div",{className:y},r?n().createElement(w,{className:_,"aria-label":a?"Virtual Event":"In-Person Event",iconSize:16}):null,n().createElement(i.LF,{as:"h2",className:b,variant:"mesto","data-testid":"location-name"},a?k:`${k}, ${F}`))))}))},63600:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ve});var r=a(67294),n=a.n(r),c=a(65858),l=a(16528),i=a(20657),s=a(6581),o=a(50458),m=a(1663),u=a(67154),g=a.n(u),d=a(96685),v=a(70369),E=a(51574),h=a(16229),p=a(20246),y=a(42922),_=a(31595),b=a(78688),N=a(56802),f=a(42811),k=a(95661),F=a(3634),L=a(94880),I=a(67892);const U="XmR5VFpqXOcxRvhuf6OB",w="FMBuX41vVL9ygMFf52q9",C="jrpzZ1XEfPYmTzzEBH1W",$="kK2jEStQ6AWhN9v162OD",x="y_WhxKf0GOLPKL4N7JcZ",O="OXtphmDJvUgzRVXRIoDb",D=n().memo((e=>{const{entity:t,headliner:a}=e,{imageUri:r,name:c,uri:l}=t;return n().createElement(I.r,{to:l,className:U},r?n().createElement(L.Z,null,n().createElement("div",{"data-testid":"image-container",className:O,style:{backgroundImage:`linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.5) 50.52%, rgba(18, 18, 18, 0.7) 100%), url(${r})`}})):null,n().createElement("div",{className:w},a&&n().createElement("div",{className:$},n().createElement(d.LF,{as:"h4",variant:"minuet",className:x,weight:"bold"},i.ag.get("concert.label.headliner"))),n().createElement(d.LF,{as:"h2",variant:"alto",className:C},c)))}));var R=a(7679);const q={concertsHubCard:"SUrCW3obzIDfsUU5JjUe",metadata:"SvrctMubvuRpFQjGuWuu",title:"mAyOOeCvESEl2oOxbrcZ",image:"x6aKjTdXoh6wEI0FxAc9"},A=i.ag.get("concerts_browse_more"),M=n().memo((()=>n().createElement(I.r,{to:"spotify:concerts",className:q.concertsHubCard},n().createElement(L.Z,null,n().createElement("div",{className:q.image,style:{backgroundImage:"linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.5) 50.52%, rgba(18, 18, 18, 0.7) 100%), url(https://concerts.spotifycdn.com/ConcertHubCard.png)"}})),n().createElement("div",{className:q.metadata},n().createElement(d.LF,{as:"h2",variant:"canon",className:q.name},A)))));var K=a(25340),P=a(30005),B=a(57612),S=a(21366);const Z=n().memo((({uri:e})=>n().createElement(y.ZP,{value:"concert"},n().createElement(P.v,null,n().createElement(S.q,null,n().createElement(B.Jx,{uri:e,displayText:i.ag.get("context-menu.copy-concert-link")}),n().createElement(B.W2,{uri:e})),n().createElement(B.h$,{uri:e})))));var J=a(42273),T=a(59482),X=a(72907),Y=a(19480);const z="bLRQVE03npkoDH4AVgyA",V="aQZuxpEGEQFY8seXG_5u",W="tApwO6Eo2KrY54dPF5rh",j="D6Ii4VMqX8Cy2r3lNGUo",G="uByT09GIHrPLs70q9_RA",H="ynMqv4SpTpsOAMvxXx74",Q="k0YqeWqy42nWqN47Tahi",ee="B5z66MUsuwPzqY1KetM5",te="Njcw2Y4etkXwv9dEIYkn",ae="WjnheotHcKf0viISW86a",re="sRlMw_P5Kl4CLRFxt_rx",ne="lF4si0jLixMy_ly0clVG",ce="BJJKtcNolkRoBpuN8vw8",le="vDv3jeam35Syks1nR2z2",ie="oaLQ0R88z7hv1Vrf4nbB",se=e=>{const t=new Date(Date.parse(e.date));return n().createElement("div",{className:z},n().createElement(d.LF,{as:"h3",variant:"canon",className:V},(0,K.NL)(t)))},oe=e=>{const{clickThrus:t,ticketing:a,date:r,venue:c,location:l,clickThruUrl:s,id:o,category:m,lat:u,lon:g,ticketAvailabilityTranslated:v}=e,E=new Date(Date.parse(r)),y=`spotify:concert:${o}`,_="ONLINE"===m,b=(0,N.o)();let f="";if(!t||!t.length)return null;const F=t[0].partnerDisplayName;f="Songkick"===F?i.ag.get("concert.header.partner_songkick_attribution",F):a&&a[0]&&a[0].minPrice?i.ag.get("concert.header.partner_price_attribution",a[0].minPrice,F):i.ag.get("concert.header.partner_attribution",F),_&&(f=i.ag.get("concert_available_through",F));const L=_?i.ag.get("concert_find_virtual_event"):i.ag.get("concert.button.see_tickets");if((0,K.O1)(E))return n().createElement("div",{className:Q},n().createElement(d.LF,{as:"h3",variant:"canon"},i.ag.get("concert_event_ended")),n().createElement(d.LF,null,n().createElement(I.Z,{to:"spotify:concerts"},i.ag.get("concert_past_message"))));return n().createElement("div",{className:Q},n().createElement(d.LF,{as:"h3",variant:"canon"},(()=>{if(_)return n().createElement(d.LF,{as:"h3",variant:"canon"},c);const e=`https://maps.google.com/?q=${encodeURIComponent(`${c},${l}`)}&ll=${u},${g}`;return n().createElement(I.Z,{to:e,target:"_blank"},n().createElement(d.LF,{as:"h3",variant:"canon"},`${c}, ${l}`))})()),n().createElement(d.LF,{as:"h3",variant:"mesto",className:ie},(0,K.Ms)(E)," • ",(0,K.b8)(E)),n().createElement(d.LF,{as:"h3",className:H,variant:"mesto"},f),v&&v.length>0&&n().createElement(d.LF,{as:"h3",className:H,variant:"mesto"},v),n().createElement("div",{className:ee},n().createElement(I.Z,{draggable:!1,className:te,to:s,target:"_blank"},n().createElement(h.Y,{version:"secondary",onClick:function(){b({targetUri:y,intent:"find-concert",type:"click"})}},L)),n().createElement(p.y,{menu:n().createElement(Z,{uri:y})},n().createElement(k.z,{size:32,className:ae}))))},me=e=>{const{albums:t,artists:a}=e,r=t.reduce(((e,t)=>{const a=t.artistName;return e[a]?e[a].push(t):e[a]=[t],e}),{});return n().createElement("div",{className:re},a.map(((e,t)=>{const a=r[e.name]||[],c=a.length+2;let l=a.map(((t,a)=>n().createElement(F.r,g()({index:a,key:a},((e,t)=>({artists:[{uri:t,name:e.artistName}],images:[{url:e.imageUri,height:100,width:100}],name:e.name,uri:e.uri,sharingInfo:null,type:b.albumType.ALBUM}))(t,e.uri)))));return l=[null,n().createElement(D,{entity:e,headliner:0===t})].concat(l),n().createElement(y.ZP,{value:"headered-grid",index:t},n().createElement(Y.P,{key:t,title:0===t?i.ag.get("concert_lineup"):"",total:c,seeAllUri:`${(0,f.GJ)(e.id)}:discography`,seeAllLabel:i.ag.get("artist-page.show-discography")},l))})))},ue=e=>{const t=e.upcomingConcerts;if(!t||t.length<1)return null;const a=t.map((e=>n().createElement(R.k,{entity:e})));return a.unshift(n().createElement(M,null)),n().createElement("div",{className:le},n().createElement(y.ZP,{value:"headered-grid"},n().createElement(Y.P,{title:i.ag.get("concerts_more_events"),total:t.length+1},a)))},ge=e=>{const{concert:t,upcomingConcerts:a,artists:r,albums:c,color:l,headerImageUri:s,ticketAvailabilityTranslated:o}=e.concert,m=[{url:s,width:100,height:100}];(0,_.Y)(l);const u=(0,N.o)();const d="ONLINE"===t.category?i.ag.get("concert_find_virtual_event"):i.ag.get("concert.button.see_tickets");return n().createElement("section",{className:j},n().createElement(v.$,null,(0,K.Yl)(t)),n().createElement(J.gF,{backgroundImages:m,backgroundColor:l},n().createElement(J.sP,null,n().createElement(J.T0,null,n().createElement(se,t)),n().createElement(J.xd,null,(0,K.Yl)(t))),n().createElement(T.W,null,n().createElement("div",{className:ne},n().createElement(X.i,{text:(0,K.Yl)(t)}),n().createElement(I.Z,{draggable:!1,className:te,to:t.clickThruUrl,target:"_blank"},n().createElement(h.Y,{version:"secondary",className:ce,onClick:function(){u({targetUri:`spotify:concert:${t.id}`,intent:"find-concert",type:"click"})}},d))))),n().createElement("div",{className:W},n().createElement(E.I,{backgroundColor:l}),n().createElement("div",{className:G},n().createElement(oe,g()({},t,{ticketAvailabilityTranslated:o})),n().createElement(me,{artists:r,albums:c}),n().createElement(ue,{upcomingConcerts:a}))))},de=n().memo(ge),ve=n().memo((()=>{const{concertId:e}=(0,l.UO)(),t=(0,c.I0)(),a=`spotify:concert:${e}`,u=(0,c.v9)((e=>(0,o.y)(a,e)));return(0,r.useEffect)((()=>{t((0,s.l$)(e))}),[t,e]),u?n().createElement(de,{concert:u}):n().createElement(m.h,{hasError:!1,errorMessage:i.ag.get("concert.error.concert_not_found_title")})}))},25340:(e,t,a)=>{a.d(t,{Ms:()=>n,b8:()=>c,lJ:()=>l,NL:()=>i,O1:()=>s,Yl:()=>u,ij:()=>g});var r=a(20657);const n=e=>r.ag.formatDate(e,{weekday:"short",month:"short",day:"numeric"}),c=e=>r.ag.formatDate(e,{hour:"numeric",minute:"numeric"}),l=e=>r.ag.formatDate(e,{month:"short"}).toUpperCase(),i=e=>r.ag.formatDate(e,{month:"short",day:"numeric"}).toUpperCase(),s=e=>e<new Date,o={row:{1:e=>r.ag.get("concert.header.entity_title_1",...e),2:e=>r.ag.get("concert.header.entity_title_2",...e),3:e=>r.ag.get("concert.header.entity_title_3",...e),4:e=>r.ag.get("concert.header.entity_title_4",...e),more:e=>r.ag.get("concert.header.entity_title_more",...e)},entity:{1:e=>r.ag.get("concert.header.upcoming_concert_title_1",...e),2:e=>r.ag.get("concert.header.upcoming_concert_title_2",...e),3:e=>r.ag.get("concert.header.upcoming_concert_title_3",...e),4:e=>r.ag.get("concert.header.upcoming_concert_title_4",...e),more:e=>r.ag.get("concert.header.upcoming_concert_title_more",...e)}},m=(e,t)=>{const a=o[t],r=(e=>{try{var t;return!e.title||!e.festival&&null!==(t=e.artists)&&void 0!==t&&t.length?{artists:e.artists.map((e=>e.name||e.profile.name))}:{title:e.title}}catch(e){return null}})(e);if(r){if(r.title)return r.title;if(r.artists)return r.artists.length>4?a.more(r.artists):a[r.artists.length](r.artists)}return""},u=e=>m(e,"row"),g=e=>m(e,"entity")},70369:(e,t,a)=>{a.d(t,{$:()=>r.$});var r=a(22578)},50458:(e,t,a)=>{function r(e,t){return t.concerts.all[e]||null}a.d(t,{y:()=>r})}}]);
//# sourceMappingURL=xpui-routes-concert.js.map