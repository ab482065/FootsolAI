(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[255],{6339:function(e,t,a){"use strict";var r=a(4836);t.Z=void 0;var n=r(a(4938)),o=a(5893),i=(0,n.default)((0,o.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"}),"MonetizationOn");t.Z=i},1400:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return f}});var r=a(6835),n=a(7812),o=a(5863),i=a(7294),c=a(8396),l=a(6339),s=a(4386),u=a(7357),d=a(5861),h=a(5893),f=!0;t.default=function(e){var t=e.results,a=(0,c.Z)("(max-width:600px)"),f=[{field:"date",headerName:"Date",sortable:!0,flex:a?2:1,renderCell:function(e){return(e.value instanceof Date?e.value:new Date(e.value)).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}}].concat((0,n.Z)(a?[{field:"match",headerName:"Match",sortable:!1,flex:3,valueGetter:function(e){return"".concat(e.row.home_team," vs ").concat(e.row.away_team)}}]:[{field:"home_team",headerName:"Home Team",sortable:!1,flex:1},{field:"away_team",headerName:"Away Team",sortable:!1,flex:1}]),[{field:"league",headerName:"League",sortable:!0,flex:a?0:1,hide:a},{field:"prediction",headerName:"Bet outcome",sortable:!0,flex:2,renderCell:function(e){var t=e.row.prediction===e.row.result,a="".concat(e.row.gain.toFixed(2));return(0,h.jsx)(s.Z,{title:"Result: ".concat(e.row.result,", Value Bet: ").concat(e.row.was_value?"Yes":"No"),children:(0,h.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center",color:t?"green":"red"},children:[(0,h.jsxs)("span",{children:[e.row.prediction.toUpperCase()," - ",a]}),t&&(0,h.jsx)(l.Z,{sx:{marginLeft:"5px"}})]})})}}]),m=JSON.parse(t);return m.forEach(function(e){var t=e.date.split("/").map(Number),a=(0,r.Z)(t,3),n=a[0],o=a[1],i=a[2];e.date=new Date(i,o-1,n)}),(0,h.jsx)(i.Fragment,{children:(0,h.jsxs)("div",{style:{width:"100%"},children:[(0,h.jsx)(d.Z,{variant:a?"h6":"h4",style:{margin:"20px 0",textAlign:"center"},children:"Prediction History"}),(0,h.jsx)(o._,{rows:m,columns:f,pageSize:a?8:10,autoHeight:!0})]})})}},2467:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/results",function(){return a(1400)}])}},function(e){e.O(0,[725,644,774,888,179],function(){return e(e.s=2467)}),_N_E=e.O()}]);