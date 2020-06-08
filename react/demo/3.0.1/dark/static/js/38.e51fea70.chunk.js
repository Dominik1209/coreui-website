(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[38],{1089:function(e,a){},1365:function(e,a,l){"use strict";l.r(a);var t=l(619),n=l(1),r=l.n(n),c=l(618),u=l(622),o=l(1368),m=(l(1078),l(1127)),d=(l(1181),[{value:"AL",label:"Alabama",disabled:!0},{value:"AK",label:"Alaska"},{value:"AS",label:"American Samoa"},{value:"AZ",label:"Arizona"},{value:"AR",label:"Arkansas"},{value:"CA",label:"California"},{value:"CO",label:"Colorado"},{value:"CT",label:"Connecticut"},{value:"DE",label:"Delaware"},{value:"DC",label:"District Of Columbia"},{value:"FM",label:"Federated States Of Micronesia"},{value:"FL",label:"Florida"},{value:"GA",label:"Georgia"},{value:"GU",label:"Guam"},{value:"HI",label:"Hawaii"},{value:"ID",label:"Idaho"},{value:"IL",label:"Illinois"},{value:"IN",label:"Indiana"},{value:"IA",label:"Iowa"},{value:"KS",label:"Kansas"},{value:"KY",label:"Kentucky"},{value:"LA",label:"Louisiana"},{value:"ME",label:"Maine"},{value:"MH",label:"Marshall Islands"},{value:"MD",label:"Maryland"},{value:"MA",label:"Massachusetts"},{value:"MI",label:"Michigan"},{value:"MN",label:"Minnesota"},{value:"MS",label:"Mississippi"},{value:"MO",label:"Missouri"},{value:"MT",label:"Montana"},{value:"NE",label:"Nebraska"},{value:"NV",label:"Nevada"},{value:"NH",label:"New Hampshire"},{value:"NJ",label:"New Jersey"},{value:"NM",label:"New Mexico"},{value:"NY",label:"New York"},{value:"NC",label:"North Carolina"},{value:"ND",label:"North Dakota"},{value:"MP",label:"Northern Mariana Islands"},{value:"OH",label:"Ohio"},{value:"OK",label:"Oklahoma"},{value:"OR",label:"Oregon"},{value:"PW",label:"Palau"},{value:"PA",label:"Pennsylvania"},{value:"PR",label:"Puerto Rico"},{value:"RI",label:"Rhode Island"},{value:"SC",label:"South Carolina"},{value:"SD",label:"South Dakota"},{value:"TN",label:"Tennessee"},{value:"TX",label:"Texas"},{value:"UT",label:"Utah"},{value:"VT",label:"Vermont"},{value:"VI",label:"Virgin Islands"},{value:"VA",label:"Virginia"},{value:"WA",label:"Washington"},{value:"WV",label:"West Virginia"},{value:"WI",label:"Wisconsin"},{value:"WY",label:"Wyoming"}]),s=l(1360);a.default=function(){var e=r.a.useState([{value:"TX",label:"Texas"},{value:"UT",label:"Utah"}]),a=Object(t.a)(e,2),l=a[0],n=a[1],i=r.a.useState({startDate:null,endDate:null}),b=Object(t.a)(i,2),E=b[0],v=b[1],h=r.a.useState(),p=Object(t.a)(h,2),N=p[0],C=p[1];return r.a.createElement(c.wb,null,r.a.createElement(c.u,{sm:12,md:6,style:{flexBasis:"auto"}},r.a.createElement(c.j,null,r.a.createElement(c.n,null,"Masked Input",r.a.createElement("small",null," React Text Mask")," ",r.a.createElement(c.b,{href:"https://coreui.io/pro/react/",color:"danger",target:"_blank",rel:"noreferrer noopener"},"CoreUI Pro Component")),r.a.createElement(c.k,null,r.a.createElement(c.K,null,r.a.createElement(c.cb,null,"Date input"),r.a.createElement(c.V,null,r.a.createElement(c.X,null,r.a.createElement(c.Y,null,r.a.createElement(u.a,{name:"cil-calendar"}))),r.a.createElement(o.b,{mask:[/\d/,/\d/,"/",/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/],Component:o.a,className:"form-control"})),r.a.createElement(c.L,{color:"muted"},"ex. 99/99/9999")),r.a.createElement(c.K,null,r.a.createElement(c.cb,null,"Phone input"),r.a.createElement(c.V,null,r.a.createElement(c.X,null,r.a.createElement(c.Y,null,r.a.createElement(u.a,{name:"cil-phone"}))),r.a.createElement(o.b,{mask:["(",/[1-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],Component:o.a,className:"form-control"})),r.a.createElement(c.L,{color:"muted"},"ex. (999) 999-9999")),r.a.createElement(c.K,null,r.a.createElement(c.cb,null,"Taxpayer Identification Numbers"),r.a.createElement(c.V,null,r.a.createElement(c.X,null,r.a.createElement(c.Y,null,r.a.createElement(u.a,{name:"cil-dollar"}))),r.a.createElement(o.b,{mask:[/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/],Component:o.a,className:"form-control"})),r.a.createElement(c.L,{color:"muted"},"ex. 99-9999999")),r.a.createElement(c.K,null,r.a.createElement(c.cb,null,"Social Security Number"),r.a.createElement(c.V,null,r.a.createElement(c.X,null,r.a.createElement(c.Y,null,r.a.createElement(u.a,{name:"cil-user"}))),r.a.createElement(o.b,{mask:[/\d/,/\d/,/\d/,"-",/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],Component:o.a,className:"form-control"})),r.a.createElement(c.L,{color:"muted"},"ex. 999-99-9999")),r.a.createElement(c.K,null,r.a.createElement(c.cb,null,"Eye Script"),r.a.createElement(c.V,null,r.a.createElement(c.X,null,r.a.createElement(c.Y,null,r.a.createElement(u.a,{name:"cil-asterisk"}))),r.a.createElement(o.b,{mask:["~",/\d/,".",/\d/,/\d/," ","~",/\d/,".",/\d/,/\d/," ",/\d/,/\d/,/\d/],Component:o.a,className:"form-control"})),r.a.createElement(c.L,{color:"muted"},"ex. ~9.99 ~9.99 999")),r.a.createElement(c.K,null,r.a.createElement(c.cb,null,"Credit Card Number"),r.a.createElement(c.V,null,r.a.createElement(c.X,null,r.a.createElement(c.Y,null,r.a.createElement(u.a,{name:"cil-credit-card"}))),r.a.createElement(o.b,{mask:[/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/],Component:o.a,className:"form-control"})),r.a.createElement(c.L,{color:"muted"},"ex. 9999 9999 9999 9999"))))),r.a.createElement(c.u,{sm:12,md:6},r.a.createElement(c.j,null,r.a.createElement(c.n,null,"React-Select"," ",r.a.createElement(c.b,{href:"https://coreui.io/pro/react/",color:"danger"},"CoreUI Pro Component"),r.a.createElement("div",{className:"card-header-actions"},r.a.createElement("a",{href:"https://github.com/JedWatson/react-select",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},r.a.createElement("small",{className:"text-muted"},"docs")))),r.a.createElement(c.k,null,r.a.createElement(s.a,{name:"form-field-name2",value:l,options:d,onChange:n,isMulti:!0}))),r.a.createElement(c.j,null,r.a.createElement(c.n,null,"React-Dates"," ",r.a.createElement(c.b,{href:"https://coreui.io/pro/react/",color:"danger"},"CoreUI Pro Component"),r.a.createElement("div",{className:"card-header-actions"},r.a.createElement("a",{href:"https://github.com/airbnb/react-dates",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},r.a.createElement("small",{className:"text-muted"},"docs")))),r.a.createElement(c.k,null,r.a.createElement(m.DateRangePicker,{startDate:E.startDate,startDateId:"startDate",endDate:E.endDate,endDateId:"endDate",onDatesChange:function(e){return v(e)},focusedInput:N,onFocusChange:function(e){return C(e)},orientation:"horizontal",openDirection:"down"})))))}}}]);
//# sourceMappingURL=38.e51fea70.chunk.js.map