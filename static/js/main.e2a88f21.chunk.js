(this["webpackJsonp@windowsterminalthemes/app"]=this["webpackJsonp@windowsterminalthemes/app"]||[]).push([[0],{1:function(e,t,a){e.exports={container:"ThemePreview_container__1-U8v",loading:"ThemePreview_loading__pKpCG",buttons:"ThemePreview_buttons__3oSxA",button:"ThemePreview_button__226iX",primary:"ThemePreview_primary__t_L18",toggles:"ThemePreview_toggles__2K-qU",select:"ThemePreview_select__E3kJP"}},14:function(e,t,a){e.exports={container:"Toast_container__1J5KY",active:"Toast_active__2tk5g",title:"Toast_title__3tgaR"}},17:function(e,t,a){e.exports={matrix:"ColourTest_matrix__F0HjV",cell:"ColourTest_cell__20yhV"}},18:function(e,t,a){e.exports={container:"Home_container__1GjCc",sidebar:"Home_sidebar__nbUf_",content:"Home_content__1Mx1c",title:"Home_title__3pCQy",light:"Home_light__34rtq",dark:"Home_dark__1Clm1",actions:"Home_actions__2ne28",buttons:"Home_buttons__2UQms",help:"Home_help__1KY-J",git:"Home_git__25kkv",download:"Home_download__3z9fY"}},19:function(e,t,a){e.exports={container:"Skeleton_container__rG00n",logo:"Skeleton_logo__18o8T"}},28:function(e,t,a){e.exports=a(46)},3:function(e,t,a){e.exports={container:"ConsoleTest_container__xPJd9",terminal:"ConsoleTest_terminal__WHzsX",light:"ConsoleTest_light__7fhT-",titlebar:"ConsoleTest_titlebar__3rT1E",tabs:"ConsoleTest_tabs__2pKB7",tab:"ConsoleTest_tab__AkTaj",radio:"ConsoleTest_radio__2WhHB",active:"ConsoleTest_active__XtGdk",code:"ConsoleTest_code__39eEx"}},33:function(e,t,a){},4:function(e,t,a){e.exports={container:"ThemeSelect_container__3XHSu",label:"ThemeSelect_label__2vW_I",select:"ThemeSelect_select__1-VpH",arrow:"ThemeSelect_arrow__2C4NM",direction:"ThemeSelect_direction__3Q9ud"}},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),l=a.n(o),i=(a(33),a(27)),c=a(15),s=a.n(c),m=a(23),h=a(2),u=a(24),d=a(6),g=a(16),b=a(13),p=a(17),f=a.n(p),_=a(12),v=["background","black","red","green","yellow","blue","purple","cyan","white","background"],w=["black","brightBlack","red","brightRed","green","brightGreen","yellow","brightYellow","blue","brightBlue","purple","brightPurple","cyan","brightCyan","white","brightWhite"],y=["name","black","red","green","yellow","blue","purple","cyan","white","brightBlack","brightRed","brightGreen","brightYellow","brightBlue","brightPurple","brightCyan","brightWhite","background","foreground","selectionBackground","cursorColor"],E={name:"",black:"",red:"",green:"",yellow:"",blue:"",purple:"",cyan:"",white:"",brightBlack:"",brightRed:"",brightGreen:"",brightYellow:"",brightBlue:"",brightPurple:"",brightCyan:"",brightWhite:"",background:"",foreground:"",selectionBackground:"",cursorColor:""},k=function(e){return r.a.createElement("section",{className:f.a.matrix,"data-testid":"colourtest"},w.map((function(t,a){return v.map((function(n,o){return r.a.createElement("div",{key:a+" "+o,className:f.a.cell,style:{background:e.theme?e.theme[n]:"",color:e.theme?e.theme[t]:""}},"gYw")}))})))},T=a(3),S=a.n(T),C=[{id:"cra/compiled",name:"CRA - compiled",markup:"<green>Compiled successfully!</green>\n\nYou can now view <brightWhite>terminal</brightWhite> in the browser. \n\n  <brightWhite>Local:</brightWhite>           http://localhost:<brightWhite>3000</brightWhite>/themes\n  <brightWhite>On Your Network:</brightWhite> http://192.168.86.37:<brightWhite>3000</brightWhite>/themes \n  \nNote that the development build is not\noptimized. \nTo create a production build, use <cyan>yarn build</cyan>.",defaultColour:"foreground"},{id:"cypress/run",name:"Cypress - run",markup:"<foreground>Running:</foreground>  <brightBlack>themes.spec.js                            (1 of 1)</brightBlack>\n\n<foreground>Windows Terminal Themes - big screen</foreground>\n<cyan>- should download all themes using download button</cyan>\n<green>\u221a</green> should show dark theme by default <red>(705ms)</red>\n    \n<green>(</green><brightGreen>Results</brightGreen><green>)</green>\n\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Tests:        <green>18</green>                                         \u2502\n\u2502 Duration:     <green>10 seconds</green>                                 \u2502\n\u2502 Spec Ran:     <green>themes.spec.js</green>                             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n",defaultColour:"brightBlack"},{id:"jest/failed",name:"Jest - failed",markup:"<foreground:brightRed> FAIL </foreground:brightRed> src/components/Home/Home.test.js (<white:red>17.523s</white:red>)\n  <red>\u25cf should return theme name from search params</red>\n  \n  expect(<red>received</red>).toBe(<green>expected</green>) // Object.is equality\n  \n    Expected: <green>\"synthwave-everything</green><background:brightGreen>error\"</background:brightGreen>\n    Received: <red>\"synthwave-everything\"</red>\n    \n        218 |\n        219 | it(<green>'should return theme name from search params'</green>, () <yellow>=></yellow> {\n      > 220 |   expect(returnInitialTheme(<brightGreen>'?theme=synthwave-everything'</brightGreen>)).toBe(\n            |                                                             ^\n        221 |     <green>'synthwave-everythingerror'</green>\n        222 |   );\n        223 |   expect(returnInitialTheme(<green>'?wrong=synthwave-everything'</green>)).toBe(<cyan>null</cyan>);\n        \n        at Object.toBe (<cyan>src/components/Home/Home.test.js</cyan>:220:61)\n  \n<brightWhite>Test Suites:</brightWhite> <brightRed>1 failed</brightRed>, <brightGreen>1 passed</brightGreen>, 2 total\n<brightWhite>Tests:</brightWhite>       <brightRed>1 failed</brightRed>, <brightYellow>4 skipped</brightYellow>, <brightGreen>2 passed</brightGreen>, 7 total\n<brightWhite>Snapshots:</brightWhite>   0 total\n<brightWhite>Time:</brightWhite>        <brightYellow>22.5s</brightYellow>\nRan all test suites.\n\nWatch Usage: Press w to show more.\n    ",defaultColour:"white"},{id:"jest/runnning",name:"Jest - running",markup:"<brightBlack:brightYellow>  RUNS  </brightBlack:brightYellow> src/components/Home/<brightWhite>Home.test.js</brightWhite>\n<brightBlack:brightYellow>  RUNS  </brightBlack:brightYellow> src/<brightWhite>App.test.tsx</brightWhite>\n    \n<brightWhite>Test Suites:</brightWhite> 0 of 2 total\n<brightWhite>Tests:</brightWhite>       0 total\n<brightWhite>Snapshots:</brightWhite>   0 total\n<brightWhite>Time:</brightWhite>        4s\n\n<background:green>         </background:green><background:foreground>                             </background:foreground>\n\n    ",defaultColour:"foreground"}],N=a(7),x={defaultColour:"foreground",markup:"",id:"default",name:"default"},z=function(e){var t,a,o=Object(n.useState)(C[0].id),l=Object(h.a)(o,2),i=l[0],c=l[1],s=null!==(t=C.find((function(e){return e.id===i})))&&void 0!==t?t:x;return r.a.createElement("section",{className:S.a.container,"data-testid":"consoletest"},r.a.createElement("div",{className:"".concat(S.a.terminal,"  ").concat(e.theme.isDark?"":S.a.light)},r.a.createElement("div",{className:S.a.titlebar},r.a.createElement("div",{className:S.a.tabs},C.map((function(e){return r.a.createElement("div",{key:e.id,className:"".concat(S.a.tab," ").concat(i===e.id?S.a.active:"")},r.a.createElement("input",{className:S.a.radio,id:e.id,name:"tab",type:"radio",value:e.id,checked:e.id===s.id,onChange:function(){c(e.id)}}),r.a.createElement("label",{htmlFor:e.id},r.a.createElement("span",null,e.name)))})))),r.a.createElement("code",{"data-testid":"markup",className:S.a.code,style:{color:e.theme[(e.theme,s.defaultColour)]}},(a=e.theme,s.markup.split(/(<[^/>]+?>[^<]+<[^>]+?>)/g).map((function(e,t){var n=Object(N.a)(e.matchAll(/<(.+?)>(.+)<\/(.+)>/g))[0];if(null!=n){var o=n[1].split(":"),l=o[0],i=o.length>0?o[1]:null,c=n[2];return r.a.createElement("span",{key:t,style:{color:a[l],background:i?a[i]:void 0}},c)}return e}),[])))))},W=a(1),j=a.n(W),O=a(14),H=a.n(O),R=function(e){return r.a.createElement("section",{className:"".concat(H.a.container," ").concat(e.isActive?H.a.active:"")},r.a.createElement("div",{className:H.a.title},e.message))},B=function(e){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:e.size||"18px",width:e.size||"18px",viewBox:"0 0 24 24","aria-labelledby":"share",onClick:e.onClick,className:e.className,style:{stroke:e.colour,backgroundColor:e.backgroundColour,transform:"scaleX(-1)"}},r.a.createElement("title",{id:"share"},"Share theme"),r.a.createElement("path",{d:"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z",fill:e.colour}))},M=function(e){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:e.size||"18px",width:e.size||"18px",viewBox:"0 0 24 24","aria-labelledby":"copy",onClick:e.onClick,className:e.className,style:{stroke:e.colour,backgroundColor:e.backgroundColour}},r.a.createElement("title",{id:"copy"},"Copy theme"),r.a.createElement("path",{fill:e.colour,d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"}))},A=function(e){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:e.size||"24px",width:e.size||"24px",viewBox:"0 0 24 24","aria-labelledby":"title",onClick:e.onClick,className:e.className,style:{stroke:e.colour,outlineColor:e.colour}},r.a.createElement("title",{id:"light-themes"},"Select light themes"),r.a.createElement("path",{d:"M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z",fill:e.colour}))},P=function(e){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:e.size||"24px",width:e.size||"24px",viewBox:"0 0 24 24","aria-labelledby":"title",onClick:e.onClick,className:e.className,style:{stroke:e.colour,outlineColor:e.colour}},r.a.createElement("title",{id:"dark-themes"},"Select dark themes"),r.a.createElement("path",{d:"M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z",fill:e.colour}))},G=function(e){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:e.size||"24px",width:e.size||"24px",viewBox:"0 0 24 24","aria-labelledby":"title",onClick:e.onClick,className:e.className,style:{stroke:e.colour,outlineColor:e.colour}},r.a.createElement("title",{id:"colours-preview"},"Select colours test preview"),r.a.createElement("path",{d:"M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",fill:e.colour}))},V=function(e){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:e.size||"24px",width:e.size||"24px",viewBox:"0 0 24 24","aria-labelledby":"title",onClick:e.onClick,className:e.className,style:{stroke:e.colour,outlineColor:e.colour}},r.a.createElement("title",{id:"codeblock-preview"},"Select codeblock preview"),r.a.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",fill:e.colour}))},D=function(e){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:e.size||"24px",width:e.size||"24px",viewBox:"0 0 24 24","aria-labelledby":"title",onClick:e.onClick,className:e.className,style:{outlineColor:e.colour,transform:"right"===e.direction?"scaleX(-1)":""}},r.a.createElement("title",{id:"arrow"},"Show previous theme"),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",fill:e.colour}))},L=function(e){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:e.size||"24px",width:e.size||"24px",viewBox:"0 0 512 512","aria-labelledby":"title",onClick:e.onClick,className:e.className,style:{outlineColor:e.colour}},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"logo-gradient",x2:"0.35",y2:"1"},e.colours.map((function(e,t,a){return r.a.createElement("stop",{key:t,offset:"".concat(Math.floor(t/(a.length-1)*100),"%"),stopColor:e},r.a.createElement("animate",{attributeName:"stop-color",values:(n=a,o=t,0===o?[].concat(Object(N.a)(n),[n[0]]).join(";"):[].concat(Object(N.a)(n.slice(o)),Object(N.a)(n.slice(0,o-1)),[n[o]]).join(";")),dur:"4s",repeatCount:"indefinite"}));var n,o})))),r.a.createElement("path",{fill:"url(#logo-gradient)",d:"M495.304 61.217H16.696C7.475 61.217 0 68.693 0 77.913v356.174c0 9.22 7.475 16.696 16.696 16.696h478.609c9.22 0 16.696-7.475 16.696-16.696V77.913c-.001-9.22-7.476-16.696-16.697-16.696zm-16.695 356.174H33.391V194.424h445.217v222.967zm0-256.358H33.391V94.609h445.217v66.424z"}),r.a.createElement("path",{fill:"url(#logo-gradient)",d:"M443.568 103.247c-12.275 0-22.261 9.986-22.261 22.261 0 12.275 9.985 22.261 22.261 22.261 12.275 0 22.261-9.986 22.261-22.261 0-12.275-9.986-22.261-22.261-22.261zM382.926 103.247c-12.275 0-22.261 9.986-22.261 22.261 0 12.275 9.986 22.261 22.261 22.261s22.261-9.986 22.261-22.261c0-12.275-9.986-22.261-22.261-22.261zM322.285 103.247c-12.275 0-22.261 9.986-22.261 22.261 0 12.275 9.985 22.261 22.261 22.261 12.275 0 22.261-9.986 22.261-22.261 0-12.275-9.986-22.261-22.261-22.261zM235.45 293.193l-54.653-46.504c-7.022-5.976-17.559-5.128-23.535 1.896-5.976 7.022-5.127 17.559 1.896 23.535l39.709 33.789-39.709 33.789c-7.023 5.976-7.871 16.512-1.896 23.535 5.975 7.022 16.512 7.871 23.535 1.896l54.653-46.504c7.83-6.663 7.83-18.771 0-25.432zM342.022 335.716h-65.954c-9.22 0-16.696 7.475-16.696 16.696s7.475 16.696 16.696 16.696h65.954c9.22 0 16.696-7.475 16.696-16.696s-7.476-16.696-16.696-16.696z"}))},I=function(e){return r.a.createElement("button",{"data-testid":e.testid,className:"".concat(j.a.button," ").concat("primary"===e.type?j.a.primary:""),onClick:function(){e.onClick()}},e.children)},Y=function(e){return r.a.createElement("div",{className:j.a.buttons},r.a.createElement(I,{testid:"copyButton",type:"primary",onClick:e.handleCopy},r.a.createElement(M,{className:j.a.icon,colour:"#ededed"}),"Get theme"),r.a.createElement(I,{testid:"shareButton",onClick:e.handleShare},r.a.createElement(B,{className:j.a.icon,colour:getComputedStyle(document.documentElement).getPropertyValue("--btn__colour")}),"Share theme"))},J=a(8),X=a.n(J),K=function(e){return r.a.createElement("section",{className:X.a.container},e.values.map((function(t){var a=t.value===e.currentValue;return r.a.createElement("label",{key:t.value,className:"".concat(X.a.label," ").concat(a?X.a.active:""),htmlFor:t.value},r.a.createElement("input",{name:e.type,type:"radio",id:t.value,value:t.value,checked:a,onChange:function(){e.dispatch({type:e.type,payload:t.value})},className:X.a.radio}),r.a.createElement("div",{className:X.a.outline},t.icon(a),t.label))})))},U=[{value:"DARK",label:"Dark",icon:function(){return r.a.createElement(P,{size:"18px",colour:document.documentElement.style.getPropertyValue("--toolbar__color")})}},{value:"LIGHT",label:"Light",icon:function(){return r.a.createElement(A,{size:"18px",colour:document.documentElement.style.getPropertyValue("--toolbar__color")})}}],F=[{value:"console",label:"Terminal",icon:function(){return r.a.createElement(V,{size:"18px",colour:document.documentElement.style.getPropertyValue("--toolbar__color")})}},{value:"colour",label:"Colours",icon:function(){return r.a.createElement(G,{size:"18px",colour:document.documentElement.style.getPropertyValue("--toolbar__color")})}}],Q=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,{currentValue:e.themeShade,dispatch:e.dispatch,type:"SHADE",values:U}),r.a.createElement(K,{currentValue:e.previewType,dispatch:e.dispatch,type:"PREVIEW",values:F}))},q=a(4),Z=a.n(q),$=function(e){return r.a.createElement("div",{className:Z.a.container},r.a.createElement("button",{tabIndex:-1,className:Z.a.direction,onClick:function(){e.dispatch({type:"PREV"})}},r.a.createElement(D,{className:Z.a.arrow,colour:getComputedStyle(document.documentElement).getPropertyValue("--btn__colour"),size:"18px"}),"Prev"),r.a.createElement("label",{className:Z.a.label,htmlFor:"theme-select"},r.a.createElement("span",{className:"visually-hidden "},"Select theme"),r.a.createElement("select",{"data-testid":"theme-list",ref:e.themeselectRef,id:"theme-select",className:Z.a.select,value:e.activeTheme,onChange:function(t){t.preventDefault(),t.target&&e.dispatch({type:"SET",theme:t.target.value})}},e.themeNames.map((function(e){return r.a.createElement("option",{"data-testid":"theme-option",value:e,key:e},e)})))),r.a.createElement("button",{tabIndex:-1,className:Z.a.direction,onClick:function(){e.dispatch({type:"NEXT"})}},"Next",r.a.createElement(D,{className:Z.a.arrow,direction:"right",size:"18px",colour:getComputedStyle(document.documentElement).getPropertyValue("--btn__colour")})))},ee=function(e){return"".concat(e," link added your clipboard")},te=function(e){return"".concat(e," theme added to your clipboard")},ae={isActive:!1,title:"Title",message:"A message to be written here for me"},ne=function(e,t){return Object(b.a)(e,(function(e){switch(t.type){case"show":e.title=t.title,e.message=t.message,e.isActive=!0;break;case"hide":e.isActive=!1}}))},re=function(e){var t=Object(n.useReducer)(ne,ae),a=Object(h.a)(t,2),o=a[0],l=a[1];if(!e.theme)return r.a.createElement("div",{style:{background:e.backgroundColour,color:e.primaryColour},className:j.a.loading});return r.a.createElement("section",{className:j.a.container},e.isSmallScreenSize&&r.a.createElement("div",{className:j.a.toggles},r.a.createElement(Q,{themeShade:e.themeShade,previewType:e.previewType,dispatch:e.dispatch})),"colour"===e.previewType?r.a.createElement(k,{theme:e.theme}):r.a.createElement(z,{theme:e.theme}),e.isSmallScreenSize&&r.a.createElement("div",{className:j.a.select},r.a.createElement($,{themeNames:e.themeNames,dispatch:e.dispatch,activeTheme:e.activeTheme,themeselectRef:e.themeselectRef})),r.a.createElement(Y,{themename:e.theme.name,handleCopy:function(){var t;!o.isActive&&e.theme&&(l({type:"show",title:"Copied!",message:te(e.theme.name)}),g.a(JSON.stringify((t=e.theme,y.reduce((function(e,a){return Object(d.a)(Object(d.a)({},e),Object(_.a)({},a,t[a]))}),E)),null,2)),setTimeout((function(){l({type:"hide"})}),1e3))},handleShare:function(){!o.isActive&&e.theme&&(l({type:"show",title:"Shared!",message:ee(e.theme.name)}),g.a("".concat(window.location.origin).concat(window.location.pathname,"?theme=").concat(encodeURIComponent(e.theme.name))),setTimeout((function(){l({type:"hide"})}),1e3))}}),r.a.createElement(R,{color:e.primaryColour,background:e.backgroundColour,title:o.title,isActive:o.isActive,message:o.message}))},oe=a(9),le=a.n(oe),ie=function(e){return r.a.createElement("section",{className:le.a.container},r.a.createElement("a",{href:"/themes",className:le.a.title},r.a.createElement(L,{size:"48px",colours:e.colours,className:le.a.logo}),r.a.createElement("h1",null,"Windows Terminal Themes")),!e.isSmallScreenSize&&r.a.createElement("div",{className:le.a.select},r.a.createElement($,{themeNames:e.themeNames,dispatch:e.dispatch,activeTheme:e.activeTheme,themeselectRef:e.themeselectRef})),!e.isSmallScreenSize&&r.a.createElement("div",{className:le.a.toggles},r.a.createElement(Q,{themeShade:e.themeShade,previewType:e.previewType,dispatch:e.dispatch})))},ce=a(18),se=a.n(ce),me=a(25),he=a.n(me),ue=a(26),de=document.documentElement,ge={"--btn__bg-img":"linear-gradient(-180deg, #535659 0%, #424549 90%)","--btn__bg-border":"1px solid rgba(200, 200, 200, 0.15)","--btn__colour":"#d6d8da","--btn__bg-img--hover":"linear-gradient(-180deg, #535659, #535659 90%)","--btn__bg-color":"#404040","--btn__border-colour__active":"rgba(200, 200, 200, 0.3)","--btn__insert":"inset 0 0.15em 0.3em rgba(20, 22, 23, 0.15)","--btn-primary__bg-img":"linear-gradient(-180deg,#2fcb53,#269f42 90%)","--btn-primary__colour":"#d6d8da","--btn-primary__bg-img---hover":"linear-gradient(180deg, #484 5%, #171 90%)","--toolbar__color":"#ededed","--toolbar__background":"#202020","--link-colour":"#5bb3f4","--link-colour--visited":"#a292ef","--overlay-background":"rgba(7, 7, 7, 0.54)"},be={"--btn__bg-img":"linear-gradient(-180deg, #fafbfc, #eff3f6 90%)","--btn__bg-border":"1px solid rgba(27, 31, 35, .35)","--btn__colour":"#24292e","--btn__bg-img--hover":"linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%)","--btn__bg-color":"#e9ecef","--btn__border-colour__active":"rgba(27, 31, 35, .3)","--btn__insert":"inset 0 .15em .3em rgba(27, 31, 35, .15)","--btn-primary__bg-img":"linear-gradient(-180deg,#2fcb53,#269f42 90%)","--btn-primary__bg-img---hover":"linear-gradient(180deg, #373 0%, #060 90%)","--btn-primary__colour":"#d6d8da","--toolbar__color":"#282c34","--toolbar__background":"#e1e4e8","--link-colour":"#224fd4","--link-colour--visited":"#9e04bf","--overlay-background":"rgba(230, 230, 230, 0.48)"},pe=function(e){Object.entries("LIGHT"===e?be:ge).forEach((function(e){var t=Object(h.a)(e,2),a=t[0],n=t[1];de.style.setProperty(a,n)}))},fe=["black","red","green","yellow","blue","purple","cyan","white"],_e=function(e){if(null==e)return"";var t=fe.sort((function(){return Math.random()-.5})).find((function(t){return he.a.ratio(e[t],e.background)>4.5}));return null!=t?e[t]:e[fe[0]]},ve=function(e){if(e.length>0){var t=new URLSearchParams(e).get("theme");if(null!=t)return t}return null},we="LIGHT",ye="DARK",Ee={themes:[],filteredThemes:[],activeTheme:"",isSmallScreenSize:window.innerWidth<768,themeShade:ye,primaryColour:"#fded02",backgroundColour:"#090300",previewType:"console",isMoreOpen:!1},ke=function(e,t){return Object(b.a)(e,(function(a){switch(t.type){case"LOAD":if(a.themes=t.themes,null!=t.initialTheme){var n=t.themes.find((function(e){return e.name===t.initialTheme}));null!=n&&(a.filteredThemes=t.themes.filter((function(e){return e.isDark===n.isDark})),a.activeTheme=n.name,a.themeShade=n.isDark?"DARK":"LIGHT")}else a.filteredThemes=t.themes.filter((function(e){return e.isDark})),a.activeTheme=a.filteredThemes[0].name;pe(a.themeShade);break;case"SET":a.activeTheme=t.theme;var r=e.themes.find((function(e){return e.name===t.theme}));r&&(a.primaryColour=_e(r),a.backgroundColour=r.background);break;case"PREV":var o,l=e.filteredThemes.findIndex((function(t){return t.name===e.activeTheme}));o=0===l?e.filteredThemes[e.filteredThemes.length-1]:e.filteredThemes[l-1],a.activeTheme=o.name,a.primaryColour=_e(o),a.backgroundColour=o.background;break;case"NEXT":var i,c=e.filteredThemes.findIndex((function(t){return t.name===e.activeTheme}));i=c===e.filteredThemes.length-1?e.filteredThemes[0]:e.filteredThemes[c+1],a.activeTheme=i.name,a.primaryColour=_e(i),a.backgroundColour=i.background;break;case"SIZE":a.isSmallScreenSize=t.isSmallScreenSize;break;case"SHADE":a.themeShade=t.payload,a.themeShade===ye&&(a.filteredThemes=e.themes.filter((function(e){return e.isDark}))),a.themeShade===we&&(a.filteredThemes=e.themes.filter((function(e){return!e.isDark}))),pe(a.themeShade),a.activeTheme=a.filteredThemes[0].name;var s=e.themes.find((function(e){return e.name===a.filteredThemes[0].name}));s&&(a.primaryColour=_e(s),a.backgroundColour=s.background);break;case"PREVIEW":a.previewType=t.payload;break;case"MORE":a.isMoreOpen=!e.isMoreOpen}}))},Te=function(e,t){null!=t.current&&document.activeElement===t.current&&(e.preventDefault(),t.current.blur())},Se=function(e){var t=Object(n.useRef)(null),a=Object(n.useReducer)(ke,Object(d.a)(Object(d.a)({},Ee),{isSmallScreenSize:window.innerWidth<1024})),o=Object(h.a)(a,2),l=o[0],i=o[1];Object(n.useEffect)((function(){i({type:"LOAD",themes:e.themes,initialTheme:ve(window.location.search)});var t=function(e){return new ue.a((function(t){var a=t[0].contentRect.width;a>=1024?e({type:"SIZE",isSmallScreenSize:!1}):a<1024&&e({type:"SIZE",isSmallScreenSize:!0})}))}(i);return t.observe(document.body),function(){t.unobserve(document.body)}}),[e.themes]),Object(n.useEffect)((function(){var e=function(e,t){return function(a){"KeyA"===a.code&&(Te(a,t),e({type:"PREV"})),"KeyD"===a.code&&(Te(a,t),e({type:"NEXT"}))}}(i,t);return document.addEventListener("keypress",e),function(){document.removeEventListener("keypress",e)}}),[]);var c=l.themes.find((function(e){return e.name===l.activeTheme})),s=l.filteredThemes.map((function(e){return e.name})),m=null!=c?JSON.stringify(c):null,u=Object(n.useMemo)((function(){return function(e){return e?[e.red,e.green,e.yellow,e.blue,e.purple,e.cyan].sort((function(){return Math.random()-.5})).slice(3):[]}(null!=m?JSON.parse(m):null)}),[m]);return r.a.createElement("section",{className:se.a.container,style:{background:l.backgroundColour}},r.a.createElement(ie,{themeShade:l.themeShade,previewType:l.previewType,dispatch:i,activeTheme:l.activeTheme,themeNames:s,themeselectRef:t,colours:u,isMoreOpen:l.isMoreOpen,isSmallScreenSize:l.isSmallScreenSize}),r.a.createElement("section",{className:se.a.content},r.a.createElement(re,{dispatch:i,themeShade:l.themeShade,previewType:l.previewType,theme:c,primaryColour:l.primaryColour,backgroundColour:l.backgroundColour,isSmallScreenSize:l.isSmallScreenSize,activeTheme:l.activeTheme,themeNames:s,themeselectRef:t})))},Ce=a(19),Ne=a.n(Ce),xe=function(){return r.a.createElement("section",{className:Ne.a.container},r.a.createElement("h1",null,r.a.createElement(L,{size:"48px",colours:["#8adbb4","#d7af87","#c79ec4"],className:Ne.a.logo}),"Windows Terminal Themes"),r.a.createElement("h4",null,"Loading..."))},ze=a(5),We=a.n(ze),je=function(e){return r.a.createElement("div",{className:We.a.section},r.a.createElement("div",{className:We.a.heading},e.heading),r.a.createElement("hr",{className:We.a.hr}),e.children)},Oe=function(e){return r.a.createElement("section",{"data-testid":"morecontent",className:We.a.container,id:"more"},r.a.createElement(je,{heading:"Download"},r.a.createElement("p",null,"Get all the themes as one big json file, warning: not as useful as it sounds"," ",r.a.createElement("span",{role:"img","aria-label":"person shrugging"},"\ud83e\udd37\u200d\u2640\ufe0f")),r.a.createElement("button",{onClick:e.downloadAllThemes},"Download .json of themes")),r.a.createElement(je,{heading:"Help"},r.a.createElement("p",null,"For how to use the themes see the"," ",r.a.createElement("a",{href:"https://github.com/atomcorp/themes#how-to-use-the-themes"},"help section of this repo"),"."),r.a.createElement("p",null,"See also the"," ",r.a.createElement("a",{href:"https://github.com/microsoft/terminal/blob/master/doc/user-docs/UsingJsonSettings.md"},"Windows Terminal settings official docs"),".")),r.a.createElement(je,{heading:"Credit"},r.a.createElement("p",null,"Most themes come from"," ",r.a.createElement("a",{href:"https://github.com/mbadolato/iTerm2-Color-Schemes"},"iTerm2 Color Schemes"),", so huge thanks to them!"),r.a.createElement("p",null,"Also big thanks to those that have contributed themes directly,"," ",r.a.createElement("a",{href:"https://github.com/atomcorp/themes#credits"},"credits on GitHub"),".")),r.a.createElement(je,{heading:"Contribute"},r.a.createElement("p",null,"New themes are very welcome! To add a new theme to this site either:"," ",r.a.createElement("ul",null,r.a.createElement("li",null,"add it through"," ",r.a.createElement("a",{href:"https://github.com/mbadolato/iTerm2-Color-Schemes#contribute"},"iTerm2 Color Schemes")," ","(preferable, it will automatically be used here)"),r.a.createElement("li",null,"or through a pull request to this site's repo"," ",r.a.createElement("a",{href:"https://github.com/atomcorp/themes#contribute-a-theme"},"Windows Terminal Themes"))))),r.a.createElement(je,{heading:"GitHub"},r.a.createElement("p",null,"Star, Fork or file an issue at the"," ",r.a.createElement("a",{href:"https://github.com/atomcorp/themes"},"Windows Terminal Themes")," ","repository on GitHub.")),r.a.createElement(je,{heading:"Tips"},r.a.createElement("p",null,"You can use keyboard shorcuts, ",r.a.createElement("span",{className:We.a.key},"A")," for previous theme, ",r.a.createElement("span",{className:We.a.key},"D")," for next theme."),r.a.createElement("p",null,"The site should be fully accessible too,"," ",r.a.createElement("a",{href:"https://github.com/atomcorp/themes/issues"},"please open an issue if you notice a problem"),".")))},He=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),o=t[0],l=t[1];Object(n.useEffect)((function(){(function(){var e=Object(m.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://www.atomcorp.dev","/api/v1/themes"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,l(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a.e(3).then(a.t.bind(null,47,3)).then((function(e){l(e.default)}));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[]);return o.length<1?r.a.createElement(xe,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(Se,{themes:o}),r.a.createElement(Oe,{downloadAllThemes:function(){var e=new Blob([JSON.stringify(o.map((function(e){e.isDark;return Object(i.a)(e,["isDark"])})),null,2)],{type:"application/json"});Object(u.saveAs)(e,"windows-terminal-themes.json",{autoBom:!0})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(He,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,t,a){e.exports={container:"More_container__3WQQo",hr:"More_hr__12bOj",section:"More_section__2p6je",heading:"More_heading__3eVBM",key:"More_key__gXvA6"}},8:function(e,t,a){e.exports={container:"Toggle_container__352LE",label:"Toggle_label__3W81D",active:"Toggle_active__3kMzo",radio:"Toggle_radio__RWHXG",outline:"Toggle_outline__3zO8j"}},9:function(e,t,a){e.exports={container:"Toolbar_container__XbNS2",title:"Toolbar_title__QJwvt",select:"Toolbar_select__2Nqio",toggles:"Toolbar_toggles__2PDlS",more:"Toolbar_more__3w801",logo:"Toolbar_logo__1RvRf"}}},[[28,1,2]]]);
//# sourceMappingURL=main.e2a88f21.chunk.js.map