(function(T,H){typeof exports=="object"&&typeof module<"u"?H(exports,require("dayjs"),require("vue")):typeof define=="function"&&define.amd?define(["exports","dayjs","vue"],H):(T=typeof globalThis<"u"?globalThis:T||self,H(T.VueGanttastic={},T.dayjs,T.Vue))})(this,function(T,H,t){"use strict";const $=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(H);var V=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},at={exports:{}};(function(e,d){(function(a,r){e.exports=r()})(V,function(){var a="day";return function(r,y,c){var f=function(n){return n.add(4-n.isoWeekday(),a)},i=y.prototype;i.isoWeekYear=function(){return f(this).year()},i.isoWeek=function(n){if(!this.$utils().u(n))return this.add(7*(n-this.isoWeek()),a);var o,m,u,h,x=f(this),g=(o=this.isoWeekYear(),m=this.$u,u=(m?c.utc:c)().year(o).startOf("year"),h=4-u.isoWeekday(),u.isoWeekday()>4&&(h+=7),u.add(h,a));return x.diff(g,"week")+1},i.isoWeekday=function(n){return this.$utils().u(n)?this.day()||7:this.day(this.day()%7?n:n-7)};var s=i.startOf;i.startOf=function(n,o){var m=this.$utils(),u=!!m.u(o)||o;return m.p(n)==="isoweek"?u?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):s.bind(this)(n,o)}}})})(at);const Lt=at.exports;var it={exports:{}};(function(e,d){(function(a,r){e.exports=r()})(V,function(){return function(a,r){r.prototype.isSameOrBefore=function(y,c){return this.isSame(y,c)||this.isBefore(y,c)}}})})(it);const $t=it.exports;var st={exports:{}};(function(e,d){(function(a,r){e.exports=r()})(V,function(){return function(a,r){r.prototype.isSameOrAfter=function(y,c){return this.isSame(y,c)||this.isAfter(y,c)}}})})(st);const Yt=st.exports;var lt={exports:{}};(function(e,d){(function(a,r){e.exports=r()})(V,function(){return function(a,r,y){r.prototype.isBetween=function(c,f,i,s){var n=y(c),o=y(f),m=(s=s||"()")[0]==="(",u=s[1]===")";return(m?this.isAfter(n,i):!this.isBefore(n,i))&&(u?this.isBefore(o,i):!this.isAfter(o,i))||(m?this.isBefore(n,i):!this.isAfter(n,i))&&(u?this.isAfter(o,i):!this.isBefore(o,i))}}})})(lt);const Gt=lt.exports;var ct={exports:{}};(function(e,d){(function(a,r){e.exports=r()})(V,function(){var a="week",r="year";return function(y,c,f){var i=c.prototype;i.week=function(s){if(s===void 0&&(s=null),s!==null)return this.add(7*(s-this.week()),"day");var n=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var o=f(this).startOf(r).add(1,r).date(n),m=f(this).endOf(a);if(o.isBefore(m))return 1}var u=f(this).startOf(r).date(n).startOf(a).subtract(1,"millisecond"),h=this.diff(u,a,!0);return h<0?f(this).startOf("week").week():Math.ceil(h)},i.weeks=function(s){return s===void 0&&(s=null),this.week(s)}}})})(ct);const Rt=ct.exports;var dt={exports:{}};(function(e,d){(function(a,r){e.exports=r()})(V,function(){return function(a,r,y){var c=r.prototype,f=c.format;y.en.ordinal=function(i){var s=["th","st","nd","rd"],n=i%100;return"["+i+(s[(n-20)%10]||s[n]||s[0])+"]"},c.format=function(i){var s=this,n=this.$locale();if(!this.isValid())return f.bind(this)(i);var o=this.$utils(),m=(i||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(u){switch(u){case"Q":return Math.ceil((s.$M+1)/3);case"Do":return n.ordinal(s.$D);case"gggg":return s.weekYear();case"GGGG":return s.isoWeekYear();case"wo":return n.ordinal(s.week(),"W");case"w":case"ww":return o.s(s.week(),u==="w"?1:2,"0");case"W":case"WW":return o.s(s.isoWeek(),u==="W"?1:2,"0");case"k":case"kk":return o.s(String(s.$H===0?24:s.$H),u==="k"?1:2,"0");case"X":return Math.floor(s.$d.getTime()/1e3);case"x":return s.$d.getTime();case"z":return"["+s.offsetName()+"]";case"zzz":return"["+s.offsetName("long")+"]";default:return u}});return f.bind(this)(m)}}})})(dt);const It=dt.exports;var ft={exports:{}};(function(e,d){(function(a,r){e.exports=r()})(V,function(){var a={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,y=/\d\d/,c=/\d\d?/,f=/\d*[^-_:/,()\s\d]+/,i={},s=function(g){return(g=+g)+(g>68?1900:2e3)},n=function(g){return function(p){this[g]=+p}},o=[/[+-]\d\d:?(\d\d)?|Z/,function(g){(this.zone||(this.zone={})).offset=function(p){if(!p||p==="Z")return 0;var E=p.match(/([+-]|\d\d)/g),b=60*E[1]+(+E[2]||0);return b===0?0:E[0]==="+"?-b:b}(g)}],m=function(g){var p=i[g];return p&&(p.indexOf?p:p.s.concat(p.f))},u=function(g,p){var E,b=i.meridiem;if(b){for(var B=1;B<=24;B+=1)if(g.indexOf(b(B,0,p))>-1){E=B>12;break}}else E=g===(p?"pm":"PM");return E},h={A:[f,function(g){this.afternoon=u(g,!1)}],a:[f,function(g){this.afternoon=u(g,!0)}],S:[/\d/,function(g){this.milliseconds=100*+g}],SS:[y,function(g){this.milliseconds=10*+g}],SSS:[/\d{3}/,function(g){this.milliseconds=+g}],s:[c,n("seconds")],ss:[c,n("seconds")],m:[c,n("minutes")],mm:[c,n("minutes")],H:[c,n("hours")],h:[c,n("hours")],HH:[c,n("hours")],hh:[c,n("hours")],D:[c,n("day")],DD:[y,n("day")],Do:[f,function(g){var p=i.ordinal,E=g.match(/\d+/);if(this.day=E[0],p)for(var b=1;b<=31;b+=1)p(b).replace(/\[|\]/g,"")===g&&(this.day=b)}],M:[c,n("month")],MM:[y,n("month")],MMM:[f,function(g){var p=m("months"),E=(m("monthsShort")||p.map(function(b){return b.slice(0,3)})).indexOf(g)+1;if(E<1)throw new Error;this.month=E%12||E}],MMMM:[f,function(g){var p=m("months").indexOf(g)+1;if(p<1)throw new Error;this.month=p%12||p}],Y:[/[+-]?\d+/,n("year")],YY:[y,function(g){this.year=s(g)}],YYYY:[/\d{4}/,n("year")],Z:o,ZZ:o};function x(g){var p,E;p=g,E=i&&i.formats;for(var b=(g=p.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(v,D,S){var O=S&&S.toUpperCase();return D||E[S]||a[S]||E[O].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(M,Y,I){return Y||I.slice(1)})})).match(r),B=b.length,_=0;_<B;_+=1){var l=b[_],k=h[l],w=k&&k[0],C=k&&k[1];b[_]=C?{regex:w,parser:C}:l.replace(/^\[|\]$/g,"")}return function(v){for(var D={},S=0,O=0;S<B;S+=1){var M=b[S];if(typeof M=="string")O+=M.length;else{var Y=M.regex,I=M.parser,N=v.slice(O),z=Y.exec(N)[0];I.call(D,z),v=v.replace(z,"")}}return function(G){var R=G.afternoon;if(R!==void 0){var j=G.hours;R?j<12&&(G.hours+=12):j===12&&(G.hours=0),delete G.afternoon}}(D),D}}return function(g,p,E){E.p.customParseFormat=!0,g&&g.parseTwoDigitYear&&(s=g.parseTwoDigitYear);var b=p.prototype,B=b.parse;b.parse=function(_){var l=_.date,k=_.utc,w=_.args;this.$u=k;var C=w[1];if(typeof C=="string"){var v=w[2]===!0,D=w[3]===!0,S=v||D,O=w[2];D&&(O=w[2]),i=this.$locale(),!v&&O&&(i=E.Ls[O]),this.$d=function(N,z,G){try{if(["x","X"].indexOf(z)>-1)return new Date((z==="X"?1e3:1)*N);var R=x(z)(N),j=R.year,U=R.month,Be=R.day,ke=R.hours,xe=R.minutes,_e=R.seconds,Ee=R.milliseconds,Mt=R.zone,Z=new Date,J=Be||(j||U?1:Z.getDate()),tt=j||Z.getFullYear(),q=0;j&&!U||(q=U>0?U-1:Z.getMonth());var et=ke||0,nt=xe||0,rt=_e||0,ot=Ee||0;return Mt?new Date(Date.UTC(tt,q,J,et,nt,rt,ot+60*Mt.offset*1e3)):G?new Date(Date.UTC(tt,q,J,et,nt,rt,ot)):new Date(tt,q,J,et,nt,rt,ot)}catch{return new Date("")}}(l,C,k),this.init(),O&&O!==!0&&(this.$L=this.locale(O).$L),S&&l!=this.format(C)&&(this.$d=new Date("")),i={}}else if(C instanceof Array)for(var M=C.length,Y=1;Y<=M;Y+=1){w[1]=C[Y-1];var I=E.apply(this,w);if(I.isValid()){this.$d=I.$d,this.$L=I.$L,this.init();break}Y===M&&(this.$d=new Date(""))}else B.call(this,_)}}})})(ft);const Nt=ft.exports,ut=Symbol("CHART_ROWS_KEY"),mt=Symbol("CONFIG_KEY"),gt=Symbol("EMIT_BAR_EVENT_KEY"),pt=Symbol("BAR_CONTAINER_KEY");function L(){const e=t.inject(mt);if(!e)throw Error("Failed to inject config!");return e}const ht="YYYY-MM-DD HH:mm";function A(e=L()){const{chartStart:d,chartEnd:a,barStart:r,barEnd:y,dateFormat:c}=e,f=t.computed(()=>s(d.value)),i=t.computed(()=>s(a.value)),s=(o,m)=>{let u;if(m!==void 0&&typeof o!="string"&&!(o instanceof Date)&&(u=m==="start"?o[r.value]:o[y.value]),typeof o=="string")u=o;else if(o instanceof Date)return $.default(o);const h=c.value||ht;return $.default(u,h,!0)};return{chartStartDayjs:f,chartEndDayjs:i,toDayjs:s,format:(o,m)=>m===!1?o instanceof Date?o:$.default(o).toDate():(typeof o=="string"||o instanceof Date?s(o):o).format(m)}}function yt(){const{precision:e}=L(),{chartStartDayjs:d,chartEndDayjs:a}=A(),r=t.computed(()=>{switch(e==null?void 0:e.value){case"hour":return"day";case"day":return"month";case"date":case"week":return"month";case"month":return"year";default:throw new Error("Precision prop incorrect. Must be one of the following: 'hour', 'day', 'date', 'week', 'month'")}}),y=t.computed(()=>{switch(e.value){case"date":return"day";case"week":return"isoWeek";default:return e.value}}),c={hour:"HH",date:"DD.MMM",day:"DD.MMM",week:"SWW",month:"MMMM YYYY",year:"YYYY"};return{timeaxisUnits:t.computed(()=>{const i=[],s=[],n=a.value.diff(d.value,"minutes",!0),o=r.value,m=y.value;let u=d.value,h=d.value;for(;h.isSameOrBefore(a.value);){const x=h.endOf(m),p=x.isAfter(a.value)?a.value.diff(h,"minutes",!0)/n*100:x.diff(h,"minutes",!0)/n*100;s.push({label:h.format(c[e==null?void 0:e.value]),value:String(h),date:h.toDate(),width:String(p)+"%"}),h=x.add(1,m==="isoWeek"?"week":m).startOf(m)}for(;u.isSameOrBefore(a.value);){const x=u.endOf(o),p=x.isAfter(a.value)?a.value.diff(u,"minutes",!0)/n*100:x.diff(u,"minutes",!0)/n*100;i.push({label:u.format(c[o]),value:String(u),date:u.toDate(),width:String(p)+"%"}),u=x.add(1,o).startOf(o)}return{upperUnits:i,lowerUnits:s}})}}const zt={class:"g-grid-container"},Ht=t.defineComponent({__name:"GGanttGrid",props:{highlightedUnits:{}},setup(e){const{colors:d}=L(),{timeaxisUnits:a}=yt();return(r,y)=>(t.openBlock(),t.createElementBlock("div",zt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(a).lowerUnits,({label:c,value:f,width:i})=>{var s;return t.openBlock(),t.createElementBlock("div",{key:c,class:"g-grid-line",style:t.normalizeStyle({width:i,background:(s=r.highlightedUnits)!=null&&s.includes(Number(f))?t.unref(d).hoverHighlight:void 0})},null,4)}),128))]))}}),Ce="";function Q(){const e=t.inject(ut);if(!e)throw Error("Failed to inject getChartRows!");return e}const Vt={class:"g-label-column-rows"},jt=t.defineComponent({__name:"GGanttLabelColumn",setup(e){const{font:d,colors:a,labelColumnTitle:r,rowHeight:y}=L(),c=Q();return(f,i)=>(t.openBlock(),t.createElementBlock("div",{class:"g-label-column",style:t.normalizeStyle({fontFamily:t.unref(d),color:t.unref(a).text})},[t.renderSlot(f.$slots,"label-column-title",{},()=>[t.createElementVNode("div",{class:"g-label-column-header",style:t.normalizeStyle({background:t.unref(a).primary})},t.toDisplayString(t.unref(r)),5)]),t.createElementVNode("div",Vt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(c)(),({label:s,bars:n},o)=>(t.openBlock(),t.createElementBlock("div",{key:`${s}_${o}`,class:"g-label-column-row",style:t.normalizeStyle({background:o%2===0?t.unref(a).ternary:t.unref(a).quartenary,height:`${t.unref(y)}px`})},[t.renderSlot(f.$slots,"label-column-row",{label:s,bars:n},()=>[t.createElementVNode("span",null,t.toDisplayString(s),1)])],4))),128))])],4))}}),ve="",At={class:"g-timeaxis"},Ft={class:"g-timeunits-container"},Wt={class:"g-timeunits-container"},Pt=t.defineComponent({__name:"GGanttTimeaxis",setup(e){const{precision:d,colors:a}=L(),{timeaxisUnits:r}=yt();return(y,c)=>(t.openBlock(),t.createElementBlock("div",At,[t.createElementVNode("div",Ft,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(r).upperUnits,({label:f,value:i,date:s,width:n},o)=>(t.openBlock(),t.createElementBlock("div",{key:f,class:"g-upper-timeunit",style:t.normalizeStyle({background:o%2===0?t.unref(a).primary:t.unref(a).secondary,color:t.unref(a).text,width:n})},[t.renderSlot(y.$slots,"upper-timeunit",{label:f,value:i,date:s},()=>[t.createTextVNode(t.toDisplayString(f),1)])],4))),128))]),t.createElementVNode("div",Wt,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(r).lowerUnits,({label:f,value:i,date:s,width:n},o)=>(t.openBlock(),t.createElementBlock("div",{key:f,class:"g-timeunit",style:t.normalizeStyle({background:o%2===0?t.unref(a).ternary:t.unref(a).quartenary,color:t.unref(a).text,flexDirection:t.unref(d)==="hour"?"column":"row",alignItems:t.unref(d)==="hour"?"":"center",width:n})},[t.renderSlot(y.$slots,"timeunit",{label:f,value:i,date:s},()=>[t.createTextVNode(t.toDisplayString(f),1)]),t.unref(d)==="hour"?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-timeaxis-hour-pin",style:t.normalizeStyle({background:t.unref(a).text})},null,4)):t.createCommentVNode("",!0)],4))),128))])]))}}),De="",Ut="cadetblue",qt=t.defineComponent({__name:"GGanttBarTooltip",props:{bar:{},modelValue:{type:Boolean}},setup(e){const d=e,a={hour:"HH:mm",day:"DD. MMM HH:mm",date:"DD. MMMM YYYY",month:"DD. MMMM YYYY",week:"DD. MMMM YYYY (WW)"},{bar:r}=t.toRefs(d),{precision:y,font:c,barStart:f,barEnd:i,rowHeight:s}=L(),n=t.ref("0px"),o=t.ref("0px");t.watch(()=>d.bar,async()=>{var l;await t.nextTick();const p=((l=r==null?void 0:r.value)==null?void 0:l.ganttBarConfig.id)||"";if(!p)return;const E=document.getElementById(p),{top:b,left:B}=(E==null?void 0:E.getBoundingClientRect())||{top:0,left:0},_=Math.max(B,10);n.value=`${b+s.value-10}px`,o.value=`${_}px`},{deep:!0,immediate:!0});const m=t.computed(()=>{var p,E;return((E=(p=r==null?void 0:r.value)==null?void 0:p.ganttBarConfig.style)==null?void 0:E.background)||Ut}),{toDayjs:u}=A(),h=t.computed(()=>{var p;return(p=r.value)==null?void 0:p[f.value]}),x=t.computed(()=>{var p;return(p=r.value)==null?void 0:p[i.value]}),g=t.computed(()=>{if(!(r!=null&&r.value))return"";const p=a[y.value],E=u(h.value).format(p),b=u(x.value).format(p);return`${E} \u2013 ${b}`});return(p,E)=>(t.openBlock(),t.createBlock(t.Teleport,{to:"body"},[t.createVNode(t.Transition,{name:"g-fade",mode:"out-in"},{default:t.withCtx(()=>[p.modelValue?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-tooltip",style:t.normalizeStyle({top:n.value,left:o.value,fontFamily:t.unref(c)})},[t.createElementVNode("div",{class:"g-gantt-tooltip-color-dot",style:t.normalizeStyle({background:m.value})},null,4),t.renderSlot(p.$slots,"default",{bar:t.unref(r),barStart:h.value,barEnd:x.value},()=>[t.createTextVNode(t.toDisplayString(g.value),1)])],4)):t.createCommentVNode("",!0)]),_:3})]))}}),Se="";function P(e=L()){const{dateFormat:d,chartSize:a}=e,{chartStartDayjs:r,chartEndDayjs:y,toDayjs:c,format:f}=A(e),i=t.computed(()=>y.value.diff(r.value,"minutes"));return{mapTimeToPosition:o=>{const m=a.width.value||0,u=c(o).diff(r.value,"minutes",!0);return Math.ceil(u/i.value*m)},mapPositionToTime:o=>{const m=a.width.value||0,u=o/m*i.value;return f(r.value.add(u,"minutes"),d.value)}}}const Qt=t.defineComponent({__name:"GGanttCurrentTime",setup(e){const{mapTimeToPosition:d}=P(),a=t.ref($.default()),{colors:r,dateFormat:y,currentTimeLabel:c}=L(),f=t.computed(()=>{const i=y.value||"YYYY-MM-DD HH:mm";return d($.default(a.value,i).format(i))});return(i,s)=>(t.openBlock(),t.createElementBlock("div",{class:"g-grid-current-time",style:t.normalizeStyle({left:`${f.value}px`})},[t.createElementVNode("div",{class:"g-grid-current-time-marker",style:t.normalizeStyle({border:`1px dashed ${t.unref(r).markerCurrentTime}`})},null,4),t.createElementVNode("span",{class:"g-grid-current-time-text",style:t.normalizeStyle({color:t.unref(r).markerCurrentTime})},[t.renderSlot(i.$slots,"current-time-label",{},()=>[t.createTextVNode(t.toDisplayString(t.unref(c)),1)])],4)],4))}}),Oe="";var bt;const F=typeof window<"u";F&&((bt=window==null?void 0:window.navigator)==null?void 0:bt.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Xt(e){return typeof e=="function"?e():t.unref(e)}function Kt(e){return e}function Zt(e){return t.getCurrentScope()?(t.onScopeDispose(e),!0):!1}function Jt(e,d=!0){t.getCurrentInstance()?t.onMounted(e):d?e():t.nextTick(e)}function wt(e){var d;const a=Xt(e);return(d=a==null?void 0:a.$el)!=null?d:a}const te=F?window:void 0;F&&window.document,F&&window.navigator,F&&window.location;function ee(e,d=!1){const a=t.ref(),r=()=>a.value=Boolean(e());return r(),Jt(r,d),a}const X=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},K="__vueuse_ssr_handlers__";X[K]=X[K]||{},X[K];var Bt=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable,oe=(e,d)=>{var a={};for(var r in e)ne.call(e,r)&&d.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&Bt)for(var r of Bt(e))d.indexOf(r)<0&&re.call(e,r)&&(a[r]=e[r]);return a};function ae(e,d,a={}){const r=a,{window:y=te}=r,c=oe(r,["window"]);let f;const i=ee(()=>y&&"ResizeObserver"in y),s=()=>{f&&(f.disconnect(),f=void 0)},n=t.watch(()=>wt(e),m=>{s(),i.value&&y&&m&&(f=new ResizeObserver(d),f.observe(m,c))},{immediate:!0,flush:"post"}),o=()=>{s(),n()};return Zt(o),{isSupported:i,stop:o}}function ie(e,d={width:0,height:0},a={}){const r=t.ref(d.width),y=t.ref(d.height);return ae(e,([c])=>{r.value=c.contentRect.width,y.value=c.contentRect.height},a),t.watch(()=>wt(e),c=>{r.value=c?d.width:0,y.value=c?d.height:0}),{width:r,height:y}}var kt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(kt||(kt={}));var se=Object.defineProperty,xt=Object.getOwnPropertySymbols,le=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable,_t=(e,d,a)=>d in e?se(e,d,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[d]=a,de=(e,d)=>{for(var a in d||(d={}))le.call(d,a)&&_t(e,a,d[a]);if(xt)for(var a of xt(d))ce.call(d,a)&&_t(e,a,d[a]);return e};de({linear:Kt},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const Et={default:{primary:"#eeeeee",secondary:"#E0E0E0",ternary:"#F5F5F5",quartenary:"#ededed",hoverHighlight:"rgba(204, 216, 219, 0.5)",markerCurrentTime:"#000",text:"#404040",background:"white"},creamy:{primary:"#ffe8d9",secondary:"#fcdcc5",ternary:"#fff6f0",quartenary:"#f7ece6",hoverHighlight:"rgba(230, 221, 202, 0.5)",markerCurrentTime:"#000",text:"#542d05",background:"white"},crimson:{primary:"#a82039",secondary:"#c41238",ternary:"#db4f56",quartenary:"#ce5f64",hoverHighlight:"rgba(196, 141, 141, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},dark:{primary:"#404040",secondary:"#303030",ternary:"#353535",quartenary:"#383838",hoverHighlight:"rgba(159, 160, 161, 0.5)",markerCurrentTime:"#fff",text:"white",background:"#525252",toast:"#1f1f1f"},flare:{primary:"#e08a38",secondary:"#e67912",ternary:"#5e5145",quartenary:"#665648",hoverHighlight:"rgba(196, 141, 141, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},fuchsia:{primary:"#de1d5a",secondary:"#b50b41",ternary:"#ff7da6",quartenary:"#f2799f",hoverHighlight:"rgba(196, 141, 141, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},grove:{primary:"#3d9960",secondary:"#288542",ternary:"#72b585",quartenary:"#65a577",hoverHighlight:"rgba(160, 219, 171, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},"material-blue":{primary:"#0D47A1",secondary:"#1565C0",ternary:"#42a5f5",quartenary:"#409fed",hoverHighlight:"rgba(110, 165, 196, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"},sky:{primary:"#b5e3ff",secondary:"#a1d6f7",ternary:"#d6f7ff",quartenary:"#d0edf4",hoverHighlight:"rgba(193, 202, 214, 0.5)",markerCurrentTime:"#000",text:"#022c47",background:"white"},slumber:{primary:"#2a2f42",secondary:"#2f3447",ternary:"#35394d",quartenary:"#2c3044",hoverHighlight:"rgba(179, 162, 127, 0.5)",markerCurrentTime:"#fff",text:"#ffe0b3",background:"#38383b",toast:"#1f1f1f"},vue:{primary:"#258a5d",secondary:"#41B883",ternary:"#35495E",quartenary:"#2a3d51",hoverHighlight:"rgba(160, 219, 171, 0.5)",markerCurrentTime:"#000",text:"white",background:"white"}},fe={class:"g-gantt-rows-container"},Ct=t.defineComponent({__name:"GGanttChart",props:{chartStart:{},chartEnd:{},precision:{default:"day"},barStart:{},barEnd:{},currentTime:{type:Boolean},currentTimeLabel:{default:""},dateFormat:{type:[String,Boolean],default:ht},width:{default:"100%"},hideTimeaxis:{type:Boolean,default:!1},colorScheme:{default:"default"},grid:{type:Boolean,default:!1},pushOnOverlap:{type:Boolean,default:!1},noOverlap:{type:Boolean,default:!1},rowHeight:{default:40},highlightedUnits:{default:()=>[]},font:{default:"inherit"},labelColumnTitle:{default:""},labelColumnWidth:{default:"150px"}},emits:["click-bar","mousedown-bar","mouseup-bar","dblclick-bar","mouseenter-bar","mouseleave-bar","dragstart-bar","drag-bar","dragend-bar","contextmenu-bar"],setup(e,{emit:d}){const a=e,{width:r,font:y,colorScheme:c}=t.toRefs(a),f=t.useSlots(),i=t.computed(()=>typeof c.value!="string"?c.value:Et[c.value]||Et.default),s=()=>{var _;const b=(_=f.default)==null?void 0:_.call(f),B=[];return b&&b.forEach(l=>{var k;if((k=l.props)!=null&&k.bars){const{label:w,bars:C}=l.props;B.push({label:w,bars:C})}else Array.isArray(l.children)&&l.children.forEach(w=>{var v;const C=w;if((v=C==null?void 0:C.props)!=null&&v.bars){const{label:D,bars:S}=C.props;B.push({label:D,bars:S})}})}),B},n=t.ref(!1),o=t.ref(!1),m=t.ref(void 0);let u;const h=b=>{u&&clearTimeout(u),u=setTimeout(()=>{n.value=!0},800),m.value=b},x=()=>{clearTimeout(u),n.value=!1},g=(b,B,_,l)=>{switch(b.type){case"click":d("click-bar",{bar:B,e:b,datetime:_});break;case"mousedown":d("mousedown-bar",{bar:B,e:b,datetime:_});break;case"mouseup":d("mouseup-bar",{bar:B,e:b,datetime:_});break;case"dblclick":d("dblclick-bar",{bar:B,e:b,datetime:_});break;case"mouseenter":h(B),d("mouseenter-bar",{bar:B,e:b});break;case"mouseleave":x(),d("mouseleave-bar",{bar:B,e:b});break;case"dragstart":o.value=!0,d("dragstart-bar",{bar:B,e:b});break;case"drag":d("drag-bar",{bar:B,e:b});break;case"dragend":o.value=!1,d("dragend-bar",{bar:B,e:b,movedBars:l});break;case"contextmenu":d("contextmenu-bar",{bar:B,e:b,datetime:_});break}},p=t.ref(null),E=ie(p);return t.provide(ut,s),t.provide(mt,{...t.toRefs(a),colors:i,chartSize:E}),t.provide(gt,g),(b,B)=>(t.openBlock(),t.createElementBlock("div",null,[t.createElementVNode("div",{class:t.normalizeClass([{"labels-in-column":!!b.labelColumnTitle}])},[b.labelColumnTitle?(t.openBlock(),t.createBlock(jt,{key:0,style:t.normalizeStyle({width:b.labelColumnWidth})},{"label-column-title":t.withCtx(()=>[t.renderSlot(b.$slots,"label-column-title")]),"label-column-row":t.withCtx(({label:_,bars:l})=>[t.renderSlot(b.$slots,"label-column-row",{label:_,bars:l})]),_:3},8,["style"])):t.createCommentVNode("",!0),t.createElementVNode("div",{ref_key:"ganttChart",ref:p,class:t.normalizeClass(["g-gantt-chart",{"with-column":b.labelColumnTitle}]),style:t.normalizeStyle({width:t.unref(r),background:i.value.background,fontFamily:t.unref(y)})},[b.hideTimeaxis?t.createCommentVNode("",!0):(t.openBlock(),t.createBlock(Pt,{key:0},{"upper-timeunit":t.withCtx(({label:_,value:l,date:k})=>[t.renderSlot(b.$slots,"upper-timeunit",{label:_,value:l,date:k})]),timeunit:t.withCtx(({label:_,value:l,date:k})=>[t.renderSlot(b.$slots,"timeunit",{label:_,value:l,date:k})]),_:3})),b.grid?(t.openBlock(),t.createBlock(Ht,{key:1,"highlighted-units":b.highlightedUnits},null,8,["highlighted-units"])):t.createCommentVNode("",!0),b.currentTime?(t.openBlock(),t.createBlock(Qt,{key:2},{"current-time-label":t.withCtx(()=>[t.renderSlot(b.$slots,"current-time-label")]),_:3})):t.createCommentVNode("",!0),t.createElementVNode("div",fe,[t.renderSlot(b.$slots,"default")])],6)],2),t.createVNode(qt,{"model-value":n.value||o.value,bar:m.value},{default:t.withCtx(()=>[t.renderSlot(b.$slots,"bar-tooltip",{bar:m.value})]),_:3},8,["model-value","bar"])]))}}),Me="";function vt(e,d=()=>null,a=()=>null,r=L()){const{barStart:y,barEnd:c,pushOnOverlap:f}=r,i=t.ref(!1);let s=0,n;const{mapPositionToTime:o}=P(r),{toDayjs:m}=A(r),u=B=>{const _=document.getElementById(e.ganttBarConfig.id);if(!_)return;switch(s=B.clientX-(_.getBoundingClientRect().left||0),B.target.className){case"g-gantt-bar-handle-left":document.body.style.cursor="ew-resize",n=g;break;case"g-gantt-bar-handle-right":document.body.style.cursor="ew-resize",n=p;break;default:n=x}i.value=!0,window.addEventListener("mousemove",n),window.addEventListener("mouseup",b)},h=()=>{var l;const B=document.getElementById(e.ganttBarConfig.id),_=(l=B==null?void 0:B.closest(".g-gantt-row-bars-container"))==null?void 0:l.getBoundingClientRect();return{barElement:B,barContainer:_}},x=B=>{const{barElement:_,barContainer:l}=h();if(!_||!l)return;const k=_.getBoundingClientRect().width,w=B.clientX-l.left-s,C=w+k;E(w,C)||(e[y.value]=o(w),e[c.value]=o(C),d(B,e))},g=B=>{const{barElement:_,barContainer:l}=h();if(!_||!l)return;const k=B.clientX-l.left,w=o(k);m(w).isSameOrAfter(m(e,"end"))||(e[y.value]=w,d(B,e))},p=B=>{const{barElement:_,barContainer:l}=h();if(!_||!l)return;const k=B.clientX-l.left,w=o(k);m(w).isSameOrBefore(m(e,"start"))||(e[c.value]=w,d(B,e))},E=(B,_)=>{if(!f.value)return!1;const l=e.ganttBarConfig.dragLimitLeft,k=e.ganttBarConfig.dragLimitRight;return B&&l!=null&&B<l||_&&k!=null&&_>k},b=B=>{i.value=!1,document.body.style.cursor="",window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",b),a(B,e)};return{isDragging:i,initDrag:u}}function Dt(){const e=t.inject(gt);if(!e)throw Error("Failed to inject emitBarEvent!");return e}function ue(){const e=L(),d=Q(),a=Dt(),{pushOnOverlap:r,barStart:y,barEnd:c,noOverlap:f,dateFormat:i}=e,s=new Map,{toDayjs:n,format:o}=A(),m=(l,k)=>{const{initDrag:w}=vt(l,h,b,e);a({...k,type:"dragstart"},l),w(k),B(l)},u=(l,k)=>{const w=l.ganttBarConfig.bundle;w!=null&&(d().forEach(C=>{C.bars.forEach(v=>{if(v.ganttBarConfig.bundle===w){const D=v===l?b:()=>null,{initDrag:S}=vt(v,h,D,e);S(k),B(v)}})}),a({...k,type:"dragstart"},l))},h=(l,k)=>{a({...l,type:"drag"},k),x(k)},x=l=>{if(!(r!=null&&r.value))return;let k=l,{overlapBar:w,overlapType:C}=g(k);for(;w;){B(w);const v=n(k[y.value]),D=n(k[c.value]),S=n(w[y.value]),O=n(w[c.value]);let M;switch(C){case"left":M=O.diff(v,"minutes",!0),w[c.value]=o(k[y.value],i.value),w[y.value]=o(S.subtract(M,"minutes"),i.value);break;case"right":M=D.diff(S,"minutes",!0),w[y.value]=o(D,i.value),w[c.value]=o(O.add(M,"minutes"),i.value);break;default:console.warn("Vue-Ganttastic: One bar is inside of the other one! This should never occur while push-on-overlap is active!");return}w&&(C==="left"||C==="right")&&p(w,M,C),k=w,{overlapBar:w,overlapType:C}=g(w)}},g=l=>{var Y,I;let k,w,C;const v=(I=(Y=d().find(N=>N.bars.includes(l)))==null?void 0:Y.bars)!=null?I:[],D=n(l[y.value]),S=n(l[c.value]);return{overlapBar:v.find(N=>{if(N===l)return!1;const z=n(N[y.value]),G=n(N[c.value]);return k=D.isBetween(z,G),w=S.isBetween(z,G),C=z.isBetween(D,S)||G.isBetween(D,S),k||w||C}),overlapType:k?"left":w?"right":C?"between":null}},p=(l,k,w)=>{B(l),l.ganttBarConfig.bundle&&d().forEach(C=>{C.bars.forEach(v=>{v.ganttBarConfig.bundle===l.ganttBarConfig.bundle&&v!==l&&(B(v),E(v,k,w))})})},E=(l,k,w)=>{switch(w){case"left":l[y.value]=o(n(l,"start").subtract(k,"minutes"),i.value),l[c.value]=o(n(l,"end").subtract(k,"minutes"),i.value);break;case"right":l[y.value]=o(n(l,"start").add(k,"minutes"),i.value),l[c.value]=o(n(l,"end").add(k,"minutes"),i.value)}x(l)},b=(l,k)=>{_();const w={...l,type:"dragend"};a(w,k,void 0,new Map(s)),s.clear()},B=l=>{if(!s.has(l)){const k=l[y.value],w=l[c.value];s.set(l,{oldStart:k,oldEnd:w})}},_=()=>{if(r.value||!f.value)return;let l=!1;s.forEach((k,w)=>{const{overlapBar:C}=g(w);C!=null&&(l=!0)}),l&&s.forEach(({oldStart:k,oldEnd:w},C)=>{C[y.value]=k,C[c.value]=w})};return{initDragOfBar:m,initDragOfBundle:u}}function me(){const{pushOnOverlap:e}=L(),d=Q(),a=f=>{const i=[];return f!=null&&d().forEach(s=>{s.bars.forEach(n=>{n.ganttBarConfig.bundle===f&&i.push(n)})}),i},r=f=>{if(!e.value||f.ganttBarConfig.pushOnOverlap===!1)return;for(const s of["left","right"]){const n=s,{gapDistanceSoFar:o,bundleBarsAndGapDist:m}=y(f,0,n);let u=o;const h=m;if(!h)continue;for(let g=0;g<h.length;g++){const p=h[g].bar,E=h[g].gapDistance;a(p.ganttBarConfig.bundle).filter(B=>B!==p).forEach(B=>{const _=y(B,E,n),l=_.gapDistanceSoFar,k=_.bundleBarsAndGapDist;l!=null&&(!u||l<u)&&(u=l),k.forEach(w=>{h.find(C=>C.bar===w.bar)||h.push(w)})})}const x=document.getElementById(f.ganttBarConfig.id);u!=null&&n==="left"?f.ganttBarConfig.dragLimitLeft=x.offsetLeft-u:u!=null&&n==="right"&&(f.ganttBarConfig.dragLimitRight=x.offsetLeft+x.offsetWidth+u)}a(f.ganttBarConfig.bundle).forEach(s=>{s.ganttBarConfig.dragLimitLeft=f.ganttBarConfig.dragLimitLeft,s.ganttBarConfig.dragLimitRight=f.ganttBarConfig.dragLimitRight})},y=(f,i=0,s)=>{const n=f.ganttBarConfig.bundle?[{bar:f,gapDistance:i}]:[];let o=f,m=c(o,s);if(s==="left")for(;m;){const u=document.getElementById(o.ganttBarConfig.id),h=document.getElementById(m.ganttBarConfig.id),x=h.offsetLeft+h.offsetWidth;if(i+=u.offsetLeft-x,m.ganttBarConfig.immobile)return{gapDistanceSoFar:i,bundleBarsAndGapDist:n};m.ganttBarConfig.bundle&&n.push({bar:m,gapDistance:i}),o=m,m=c(m,"left")}if(s==="right")for(;m;){const u=document.getElementById(o.ganttBarConfig.id),h=document.getElementById(m.ganttBarConfig.id),x=u.offsetLeft+u.offsetWidth;if(i+=h.offsetLeft-x,m.ganttBarConfig.immobile)return{gapDistanceSoFar:i,bundleBarsAndGapDist:n};m.ganttBarConfig.bundle&&n.push({bar:m,gapDistance:i}),o=m,m=c(m,"right")}return{gapDistanceSoFar:null,bundleBarsAndGapDist:n}},c=(f,i)=>{var m,u;const s=document.getElementById(f.ganttBarConfig.id),n=(u=(m=d().find(h=>h.bars.includes(f)))==null?void 0:m.bars)!=null?u:[];let o=[];return i==="left"?o=n.filter(h=>{const x=document.getElementById(h.ganttBarConfig.id);return x&&x.offsetLeft<s.offsetLeft&&h.ganttBarConfig.pushOnOverlap!==!1}):o=n.filter(h=>{const x=document.getElementById(h.ganttBarConfig.id);return x&&x.offsetLeft>s.offsetLeft&&h.ganttBarConfig.pushOnOverlap!==!1}),o.length>0?o.reduce((h,x)=>{const g=document.getElementById(h.ganttBarConfig.id),p=document.getElementById(x.ganttBarConfig.id),E=Math.abs(g.offsetLeft-s.offsetLeft),b=Math.abs(p.offsetLeft-s.offsetLeft);return E<b?h:x},o[0]):null};return{setDragLimitsOfGanttBar:r}}const ge=["id"],pe={class:"g-gantt-bar-label"},he=["innerHTML"],ye=t.createElementVNode("div",{class:"g-gantt-bar-handle-left"},null,-1),be=t.createElementVNode("div",{class:"g-gantt-bar-handle-right"},null,-1),we=t.defineComponent({__name:"GGanttBar",props:{bar:{}},setup(e){const d=e,a=Dt(),r=L(),{rowHeight:y}=r,{bar:c}=t.toRefs(d),{mapTimeToPosition:f,mapPositionToTime:i}=P(),{initDragOfBar:s,initDragOfBundle:n}=ue(),{setDragLimitsOfGanttBar:o}=me(),m=t.ref(!1),u=t.computed(()=>c.value.ganttBarConfig);function h(v){u.value.bundle!=null?n(c.value,v):s(c.value,v),m.value=!0}const x=()=>{o(c.value),!u.value.immobile&&(window.addEventListener("mousemove",h,{once:!0}),window.addEventListener("mouseup",()=>{window.removeEventListener("mousemove",h),m.value=!1},{once:!0}))},g=t.inject(pt),p=v=>{var O;v.preventDefault(),v.type==="mousedown"&&x();const D=(O=g==null?void 0:g.value)==null?void 0:O.getBoundingClientRect();if(!D)return;const S=i(v.clientX-D.left);a(v,c.value,S)},{barStart:E,barEnd:b,width:B,chartStart:_,chartEnd:l,chartSize:k}=r,w=t.ref(0),C=t.ref(0);return t.onMounted(()=>{t.watch([c,B,_,l,k.width],()=>{w.value=f(c.value[E.value]),C.value=f(c.value[b.value])},{deep:!0,immediate:!0})}),(v,D)=>(t.openBlock(),t.createElementBlock("div",{id:u.value.id,class:t.normalizeClass(["g-gantt-bar",u.value.class||""]),style:t.normalizeStyle({...u.value.style,position:"absolute",top:`${t.unref(y)*.1}px`,left:`${w.value}px`,width:`${C.value-w.value}px`,height:`${t.unref(y)*.8}px`,zIndex:m.value?3:2}),onMousedown:p,onClick:p,onDblclick:p,onMouseenter:p,onMouseleave:p,onContextmenu:p},[t.createElementVNode("div",pe,[t.renderSlot(v.$slots,"default",{bar:t.unref(c)},()=>[t.createElementVNode("div",null,t.toDisplayString(u.value.label||""),1),u.value.html?(t.openBlock(),t.createElementBlock("div",{key:0,innerHTML:u.value.html},null,8,he)):t.createCommentVNode("",!0)])]),u.value.hasHandles?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[ye,be],64)):t.createCommentVNode("",!0)],46,ge))}}),Le="",St=t.defineComponent({__name:"GGanttRow",props:{label:{},bars:{},highlightOnHover:{type:Boolean}},emits:["drop"],setup(e,{emit:d}){const a=e,{rowHeight:r,colors:y,labelColumnTitle:c}=L(),{highlightOnHover:f}=t.toRefs(a),i=t.ref(!1),s=t.computed(()=>({height:`${r.value}px`,background:(f==null?void 0:f.value)&&i.value?y.value.hoverHighlight:null})),{mapPositionToTime:n}=P(),o=t.ref(null);t.provide(pt,o);const m=h=>{var E;const x=(E=o.value)==null?void 0:E.getBoundingClientRect();if(!x){console.error("Vue-Ganttastic: failed to find bar container element for row.");return}const g=h.clientX-x.left,p=n(g);d("drop",{e:h,datetime:p})},u=h=>!h||/^\s*$/.test(h);return(h,x)=>(t.openBlock(),t.createElementBlock("div",{class:"g-gantt-row",style:t.normalizeStyle(s.value),onDragover:x[0]||(x[0]=t.withModifiers(g=>i.value=!0,["prevent"])),onDragleave:x[1]||(x[1]=g=>i.value=!1),onDrop:x[2]||(x[2]=g=>m(g)),onMouseover:x[3]||(x[3]=g=>i.value=!0),onMouseleave:x[4]||(x[4]=g=>i.value=!1)},[!u(h.label)&&!t.unref(c)?(t.openBlock(),t.createElementBlock("div",{key:0,class:"g-gantt-row-label",style:t.normalizeStyle({background:t.unref(y).primary,color:t.unref(y).text})},[t.renderSlot(h.$slots,"label",{},()=>[t.createTextVNode(t.toDisplayString(h.label),1)])],4)):t.createCommentVNode("",!0),t.createElementVNode("div",t.mergeProps({ref_key:"barContainer",ref:o,class:"g-gantt-row-bars-container"},h.$attrs),[t.createVNode(t.TransitionGroup,{name:"bar-transition",tag:"div"},{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(h.bars,g=>(t.openBlock(),t.createBlock(we,{key:g.ganttBarConfig.id,bar:g},{default:t.withCtx(()=>[t.renderSlot(h.$slots,"bar-label",{bar:g})]),_:2},1032,["bar"]))),128))]),_:3})],16)],36))}}),$e="";function Ot(){$.default.extend($t),$.default.extend(Yt),$.default.extend(Gt),$.default.extend(Nt),$.default.extend(Rt),$.default.extend(Lt),$.default.extend(It)}const Tt={install(e,d){Ot(),e.component("GGanttChart",Ct),e.component("GGanttRow",St)}};T.GGanttChart=Ct,T.GGanttRow=St,T.default=Tt,T.extendDayjs=Ot,T.ganttastic=Tt,Object.defineProperties(T,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});function injectStyle(T,H="top"){if(!T||typeof document>"u")return;const t=document.head,W=document.createElement("style");H==="top"&&t.firstChild?t.insertBefore(W,t.firstChild):t.appendChild(W),W.appendChild(document.createTextNode(T))}injectStyle(`
.g-gantt-chart {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
  border-radius: 5px;
}
.with-column {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.g-gantt-rows-container {
  position: relative;
}
.labels-in-column {
  display: flex;
  flex-direction: row;
}
`,"top");injectStyle(`
.g-gantt-row {
  width: 100%;
  transition: background 0.4s;
  position: relative;
}
.g-gantt-row > .g-gantt-row-bars-container {
  position: relative;
  border-top: 1px solid #eaeaea;
  width: 100%;
  border-bottom: 1px solid #eaeaea;
}
.g-gantt-row-label {
  position: absolute;
  top: 0;
  left: 0px;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  height: 60%;
  min-height: 20px;
  font-size: 0.8em;
  font-weight: bold;
  border-bottom-right-radius: 6px;
  background: #f2f2f2;
  z-index: 3;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.6);
}
.bar-transition-leave-active,
.bar-transition-enter-active {
  transition: all 0.2s;
}
.bar-transition-enter-from,
.bar-transition-leave-to {
  transform: scale(0.8);
  opacity: 0;
}
`,"top");injectStyle(`
.g-gantt-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  background: cadetblue;
  overflow: hidden;
}
.g-gantt-bar-label {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 14px 0 14px; /* 14px is the width of the handle */
  display: flex;
  justify-content: center;
  align-items: center;
}
.g-gantt-bar-label > * {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.g-gantt-bar-handle-left,
.g-gantt-bar-handle-right {
  position: absolute;
  width: 10px;
  height: 100%;
  background: white;
  opacity: 0.7;
  border-radius: 0px;
  cursor: ew-resize;
  top: 0;
}
.g-gantt-bar-handle-left {
  left: 0;
}
.g-gantt-bar-handle-right {
  right: 0;
}
.g-gantt-bar-label img {
  pointer-events: none;
}
`,"top");injectStyle(`
.g-grid-container {
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.g-grid-line {
  width: 1px;
  height: 100%;
  border-left: 1px solid #eaeaea;
}
`,"top");injectStyle(`
.g-label-column {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: rgb(64, 64, 64);
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
  font-size: 0.9em;
}
.g-label-column-header {
  width: 100%;
  height: 80px;
  min-height: 80px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 5px;
}
.g-label-column-rows {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 5px;
}
.g-label-column-row {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0.1rem 0.3rem;
  overflow: hidden;
  white-space: normal;
  box-sizing: border-box;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.g-label-column-row:last-child {
  border-bottom-left-radius: 5px;
}
`,"top");injectStyle(`
.g-grid-current-time {
  position: absolute;
  height: 100%;
  display: flex;
  z-index: 5;
}
.g-grid-current-time-marker {
  width: 0px;
  height: calc(100% - 2px);
  display: flex;
}
.g-grid-current-time-text {
  font-size: x-small;
}
`,"top");injectStyle(`
.g-gantt-tooltip {
  position: fixed;
  background: black;
  color: white;
  z-index: 4;
  font-size: 0.85em;
  padding: 5px;
  border-radius: 3px;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
}
.g-gantt-tooltip:before {
  content: "";
  position: absolute;
  top: 0;
  left: 10%;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-bottom-color: black;
  border-top: 0;
  margin-left: -5px;
  margin-top: -5px;
}
.g-gantt-tooltip-color-dot {
  width: 8px;
  height: 8px;
  border-radius: 100%;
  margin-right: 4px;
}
.g-fade-enter-active,
.g-fade-leave-active {
  transition: opacity 0.3s ease;
}
.g-fade-enter-from,
.g-fade-leave-to {
  opacity: 0;
}
`,"top");injectStyle(`
.g-timeaxis {
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  background: white;
  z-index: 4;
  display: flex;
  flex-direction: column;
}
.g-timeunits-container {
  display: flex;
  width: 100%;
  height: 50%;
}
.g-timeunit {
  height: 100%;
  font-size: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.g-upper-timeunit {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.g-timeaxis-hour-pin {
  width: 1px;
  height: 10px;
}
`,"top");
