(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{2207:function(e,o,n){"use strict";n.r(o);var i=n(0),t=Object(i.a)({},(function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("Api",{attrs:{props:[["fixed","true","Boolean","Sets sidebar position to fixed. Prop is disabled if 'overlaid' prop is true."],["unfoldable","false","Boolean","[PRO] Sets sidebar to unfoldable mode. Use instead of minimized prop."],["overlaid","false","Boolean","[PRO] Sets sidebar position to overlaid. Prop have precedens over fixed prop."],["breakpoint","'lg'","String","slot_breakpoint"],["minimize","false","Boolean","Sets minimized state. You can track the curent state by .sync modifier."],["show","'responsive'","Boolean/ String","slot_show"],["size","undefined","String","Set custom width of the sidebar. Available sizes: 'sm', 'lg', 'xl'."],["hideOnMobileClick","true","Boolean","slot_hideOnMobileClick"],["aside","false","Boolean","Sets sidebar to placement to right side."],["colorScheme","'dark'","String","Sets sidebar color scheme."],["dropdownMode","'openActive'","String","slot_dropdown"]],slots:[["default","undefined","Content of the sidebar."]],events:[["update:show","'responsive'","Event emitted on mobile state change. (hideOnMobileClick prop)"]]},scopedSlots:e._u([{key:"slot_breakpoint",fn:function(){return[e._v("\n    Breakpoint of the transition between mobile and non-mobile mode.\n    Valid values: 'sm', 'md', 'lg', 'xl'.\n  ")]},proxy:!0},{key:"slot_dropdown",fn:function(){return[e._v("\n    Define CSidebarNavDropown components behavior on route change.\n    CSidebarNavDropdown route state is active, if its 'route' prop \n    is included in current vue-router route.\n    Valid values: \n      "),n("ul",[n("li",[e._v("openActive - opens dropdown when route state is active ")]),e._v(" "),n("li",[e._v("close - closes every dropdown on route change")]),e._v(" "),n("li",[e._v("closeInactive - closes every inactive dropdown on route change, opens dropdown when route state is active")]),e._v(" "),n("li",[e._v("noAction - no automatic dropdowns toggling")])])]},proxy:!0},{key:"slot_show",fn:function(){return[e._v("\n    Sets state of the sidebar, available values:\n    "),n("ul",[n("li",[e._v("true - sidebar is opened on all widths")]),e._v(" "),n("li",[e._v("false - sidebar is closed on all widths")]),e._v(" "),n("li",[e._v("\n        responsive - sidebar is closed on widths below set breakpoint, \n        and open above breakpoint width. \n        "),n("br"),e._v("\n        Option is not available when 'overlaid' prop is set to true\n      ")])]),e._v("        \n      \n    You can track the curent state by .sync modifier.\n\n  ")]},proxy:!0},{key:"slot_hideOnMobileClick",fn:function(){return[e._v("\n    Enables mobile sidebar closing trigger. \n    Trigger works on clicking on CSidebarNavItem link,\n    or any other 'a' tag element with class 'c-sidebar-nav-link' \n    inside sidebar wrapper.\n  ")]},proxy:!0}])})}),[],!1,null,null,null);o.default=t.exports}}]);