(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[255],{6339:function(e,n,t){"use strict";var r=t(4836);n.Z=void 0;var o=r(t(4938)),i=t(5893),a=(0,o.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"}),"MonetizationOn");n.Z=a},1603:function(e,n,t){"use strict";t.d(n,{Z:function(){return Z}}),t(7294);var r=t(5582),o=t(5616),i=t(5861),a=t(2902),c=t(5893),s=function(){return(0,c.jsx)(o.Z,{component:"footer",sx:{bgcolor:"background.paper",py:6},children:(0,c.jsx)(r.Z,{maxWidth:"lg",children:(0,c.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:[(0,c.jsxs)(o.Z,{component:"a",sx:{display:"flex",alignItems:"center",flexWrap:"wrap",color:"#FFD700",backgroundColor:"#ffffff",padding:"5px 10px",borderRadius:"20px",textDecoration:"none","&:hover":{backgroundColor:"#FFD700",color:"#000000"},margin:"0 10px",maxWidth:"fit-content"},href:"https://www.buymeacoffee.com/matgonzalep",target:"_blank",children:[(0,c.jsx)(a.Z,{}),(0,c.jsx)(i.Z,{variant:"body2",sx:{marginLeft:"5px","@media (min-width:600px)":{display:"inline"}},children:"Support FooTixiFy"})]}),(0,c.jsx)(o.Z,{sx:{mt:2},children:(0,c.jsx)(i.Z,{variant:"caption",color:"text.secondary",children:"Copyright \xa92024 GonzaData"})})]})})})},l=t(1163),d=t(2293),u=t(155),x=t(3946),f=t(326),h=t(9417),m=t(1277),p=t(2457);function g(){var e=(0,l.useRouter)();return(0,c.jsx)(d.Z,{position:"static",children:(0,c.jsxs)(u.Z,{children:[(0,c.jsx)(x.Z,{size:"large",edge:"start",color:"inherit","aria-label":"menu",onClick:function(){return e.push("/")},children:(0,c.jsx)(f.Z,{})}),(0,c.jsx)(i.Z,{variant:"h6",component:"div",sx:{flexGrow:1},children:"FooTixiFy"}),(0,c.jsx)(h.Z,{startIcon:(0,c.jsx)(m.Z,{}),color:"inherit",onClick:function(){return e.push("/predictions")},sx:{color:"#fff",textTransform:"none",fontWeight:"bold"},children:"Predictions"}),(0,c.jsx)(h.Z,{startIcon:(0,c.jsx)(p.Z,{}),color:"inherit",onClick:function(){return e.push("/results")},sx:{color:"#fff",textTransform:"none",fontWeight:"bold"},children:"History"})]})})}var Z=function(e){var n=e.children;return(0,c.jsxs)(o.Z,{display:"flex",flexDirection:"column",minHeight:"100vh",children:[(0,c.jsx)(g,{}),(0,c.jsx)(r.Z,{component:"main",sx:{mt:4,mb:4,flexGrow:1,display:"flex",flexDirection:"column",height:"100%"},children:n}),(0,c.jsx)(s,{})]})}},1400:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return f}});var r=t(6835),o=t(7812),i=t(9520);t(7294);var a=t(1730),c=t(1603),s=t(6339),l=t(4386),d=t(5616),u=t(5861),x=t(5893),f=!0;n.default=function(e){var n=e.results,t=(0,a.Z)("(max-width:600px)"),f=[{field:"date",headerName:"Date",sortable:!0,flex:t?2:1,renderCell:function(e){return(e.value instanceof Date?e.value:new Date(e.value)).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}}].concat((0,o.Z)(t?[{field:"match",headerName:"Match",sortable:!1,flex:3,valueGetter:function(e){return"".concat(e.row.home_team," vs ").concat(e.row.away_team)}}]:[{field:"home_team",headerName:"Home Team",sortable:!1,flex:1},{field:"away_team",headerName:"Away Team",sortable:!1,flex:1}]),[{field:"league",headerName:"League",sortable:!0,flex:t?0:1,hide:t},{field:"prediction",headerName:"Bet outcome",sortable:!0,flex:2,renderCell:function(e){var n=e.row.prediction===e.row.result,t="".concat(e.row.gain.toFixed(2));return(0,x.jsx)(l.Z,{title:"Result: ".concat(e.row.result,", Value Bet: ").concat(e.row.was_value?"Yes":"No"),children:(0,x.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center",color:n?"green":"red"},children:[(0,x.jsxs)("span",{children:[e.row.prediction.toUpperCase()," - ",t]}),n&&(0,x.jsx)(s.Z,{sx:{marginLeft:"5px"}})]})})}}]),h=JSON.parse(n);return h.forEach(function(e){var n=e.date.split("/").map(Number),t=(0,r.Z)(n,3),o=t[0],i=t[1],a=t[2];e.date=new Date(a,i-1,o)}),(0,x.jsxs)(c.Z,{children:[(0,x.jsx)(u.Z,{variant:t?"h6":"h4",style:{margin:"20px 0",textAlign:"center"},children:"Predictions History"}),(0,x.jsx)(i._,{rows:h,columns:f,pageSize:t?10:15,autoHeight:!0,autoPageSize:!0})]})}},2467:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/results",function(){return t(1400)}])}},function(e){e.O(0,[414,805,774,888,179],function(){return e(e.s=2467)}),_N_E=e.O()}]);