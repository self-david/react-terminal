import*as e from"react";import n from"prop-types";import{isMobile as t}from"react-device-detect";var o=function(){return o=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},o.apply(this,arguments)};function r(e,n,t,o){return new(t||(t=Promise))((function(r,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function l(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}c((o=o.apply(e,n||[])).next())}))}function a(e,n){var t,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(l){return function(c){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(i=0)),i;)try{if(t=1,o&&(r=2&l[0]?o.return:l[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,l[1])).done)return r;switch(o=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,o=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(r=i.trys,(r=r.length>0&&r[r.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){i.label=l[1];break}if(6===l[0]&&i.label<r[1]){i.label=r[1],r=l;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(l);break}r[2]&&i.ops.pop(),i.trys.pop();continue}l=n.call(e,i)}catch(e){l=[6,e],o=0}finally{t=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}}!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===t&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}('@import url("https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap");\n#index_terminalContainer__4seT6 {\n  --control-default-bg-color: #ccc;\n  --control-close-bg-color: #fc5b57;\n  --control-minimize-bg-color: #e5bf3c;\n  --control-maximize-bg-color: #57c038;\n}\n\n.index_controls__sXDjs {\n  text-align: left;\n  height: 26px;\n  position: relative;\n  top: 4px;\n  margin-left: 4px;\n}\n.index_controls__sXDjs .index_consoleCtrl__DI2H1 {\n  display: inline-block;\n  width: 13px;\n  height: 13px;\n  margin: 0 3px;\n  border-radius: 50%;\n  background: var(--control-default-bg-color);\n}\n.index_controls__sXDjs .index_close__XGN9U {\n  background: var(--control-close-bg-color);\n}\n.index_controls__sXDjs .index_minimize__pZYTU {\n  background: var(--control-minimize-bg-color);\n}\n.index_controls__sXDjs .index_maximize__szRK7 {\n  background: var(--control-maximize-bg-color);\n}\n\n.index_editor__JoDSg {\n  text-align: left;\n  height: 100%;\n  padding: 10px 15px;\n  overflow-wrap: break-word;\n  overflow-y: scroll;\n  outline: none;\n  font-family: "Source Code Pro", monospace;\n  font-size: 18px;\n  line-height: 22px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.index_editor__JoDSg .index_mobileInput__WloSq {\n  position: absolute;\n  top: -2000px;\n  left: -2000px;\n}\n.index_editor__JoDSg .index_lineText__j6qNj {\n  display: inline;\n  position: relative;\n  top: -1px;\n  margin-left: 8px;\n}\n.index_editor__JoDSg .index_preWhiteSpace__7KwuG {\n  white-space: pre-wrap;\n}\n.index_editor__JoDSg .index_caret__VS4iV {\n  position: relative;\n  -webkit-animation: index_blink__FJp0- 0.75s ease-in-out infinite;\n  -moz-animation: index_blink__FJp0- 0.75s ease-in-out infinite;\n  -o-animation: index_blink__FJp0- 0.75s ease-in-out infinite;\n  -ms-animation: index_blink__FJp0- 0.75s ease-in-out infinite;\n  animation: index_blink__FJp0- 0.75s ease-in-out infinite;\n}\n.index_editor__JoDSg .index_caret__VS4iV .index_caretAfter__6aXPx {\n  content: "";\n  position: absolute;\n  top: 2px;\n  width: 10px;\n  height: 22px;\n  z-index: 10;\n}\n@-moz-keyframes index_blink__FJp0- {\n  0% {\n    opacity: 0;\n    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";\n    filter: alpha(opacity=0);\n  }\n  100% {\n    opacity: 1;\n    -ms-filter: none;\n    filter: none;\n  }\n}\n@-webkit-keyframes index_blink__FJp0- {\n  0% {\n    opacity: 0;\n    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";\n    filter: alpha(opacity=0);\n  }\n  100% {\n    opacity: 1;\n    -ms-filter: none;\n    filter: none;\n  }\n}\n@-o-keyframes index_blink__FJp0- {\n  0% {\n    opacity: 0;\n    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";\n    filter: alpha(opacity=0);\n  }\n  100% {\n    opacity: 1;\n    -ms-filter: none;\n    filter: none;\n  }\n}\n@keyframes index_blink__FJp0- {\n  0% {\n    opacity: 0;\n    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";\n    filter: alpha(opacity=0);\n  }\n  100% {\n    opacity: 1;\n    -ms-filter: none;\n    filter: none;\n  }\n}\n.index_editor__JoDSg a {\n  color: #1a87b5;\n}\n\n.index_editorWithTopBar__L6XKw {\n  height: calc(100% - 46px);\n}\n\n.index_curvedTop__LX9XS {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n#index_terminalContainer__4seT6 {\n  height: 100%;\n}\n\n.index_terminal__teubZ {\n  height: 100%;\n  width: 100%;\n  margin: auto;\n  border-radius: 5px;\n}');var i={terminalContainer:"index_terminalContainer__4seT6",controls:"index_controls__sXDjs",consoleCtrl:"index_consoleCtrl__DI2H1",close:"index_close__XGN9U",minimize:"index_minimize__pZYTU",maximize:"index_maximize__szRK7",editor:"index_editor__JoDSg",mobileInput:"index_mobileInput__WloSq",lineText:"index_lineText__j6qNj",preWhiteSpace:"index_preWhiteSpace__7KwuG",caret:"index_caret__VS4iV",blink:"index_blink__FJp0-",caretAfter:"index_caretAfter__6aXPx",editorWithTopBar:"index_editorWithTopBar__L6XKw",curvedTop:"index_curvedTop__LX9XS",terminal:"index_terminal__teubZ"},l=e.createContext(null),c=function(n){var t=n.children;return e.createElement(l.Provider,{value:i},t)},s={dark:{themeBGColor:"#022833",themeToolbarColor:"#131519",themeColor:"#839496",themePromptColor:"#a917a8"},light:{themeBGColor:"#fdf6e4",themeToolbarColor:"#d8d8d8",themeColor:"#333333",themePromptColor:"#a917a8"},dracula:{themeBGColor:"#272B36",themeToolbarColor:"#DBDBDB",themeColor:"#FFFEFC",themePromptColor:"#a917a8"},"material-dark":{themeBGColor:"#151515",themeToolbarColor:"#424242",themeColor:"#fff",themePromptColor:"#42A5F5"},"material-light":{themeBGColor:"#fafafa",themeToolbarColor:"#424242",themeColor:"#151515",themePromptColor:"#42A5F5"},"material-ocean":{themeBGColor:"#263238",themeToolbarColor:"#37474F",themeColor:"#fff",themePromptColor:"#C3D82C"},matrix:{themeBGColor:"#0D0208",themeToolbarColor:"#0D0208",themeColor:"#00FF41",themePromptColor:"#008F11"}},u=e.createContext(null),m=function(n){var t=n.children,r=o(o({},s),t.props.themes||{}),a=r[t.props.theme]||r.light;return e.createElement(u.Provider,{value:a},t)},d=function(n,o,r){var a=function(e){n.current&&!n.current.contains(e.target)?r(!1):r(!t||!o)};e.useEffect((function(){return document.addEventListener("mousedown",a),function(){document.removeEventListener("mousedown",a)}}))};function p(n){var t=e.useContext(l),o=n.controlButtonLabels,r=n.showControlButtons?o.map((function(n){return e.createElement("div",{key:n,className:"".concat(t.consoleCtrl," ").concat(t[n])})})):null;return e.createElement("div",{className:t.controls},r)}var f=e.createContext(null);var _=function(){function e(){}return e.splitStringAtIndex=function(e,n){return e?[e.substring(0,n),e.substring(n)]:["",""]},e}(),h=function(n,o,i,c,s,m,d,p){var h=e.useContext(l),x=e.useContext(u),g=e.useContext(f),C=g.appendCommandToHistory,b=g.processCurrentLine,v=g.setProcessCurrentLine,y=e.useRef(null),w=e.useState(""),E=w[0],T=w[1],S=e.useState(0),k=S[0],B=S[1],D=e.useState(""),F=D[0],P=D[1],N=e.useState(""),A=N[0],I=N[1];e.useEffect((function(){}),[o]),e.useEffect((function(){b&&C(E)}),[b]),e.useEffect((function(){null!==p.current&&null!==y.current&&(p.current.onclick=function(){y.current.focus()})}),[]);var L=t&&m?e.createElement("div",{className:h.mobileInput},e.createElement("input",{type:"text",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",value:E,onChange:function(e){return T(e.target.value)},ref:y,"data-testid":"editor-input"})):null,X=b?e.createElement(e.Fragment,null,L,e.createElement("div",{className:h.lineText},o&&n?e.createElement("span",{className:h.caret},e.createElement("span",{className:h.caretAfter,style:{background:x.themeColor}})):null)):e.createElement(e.Fragment,null,L,e.createElement("span",{style:{color:x.themePromptColor}},i),e.createElement("div",{className:h.lineText},e.createElement("span",{className:h.preWhiteSpace},F),o&&n?e.createElement("span",{className:h.caret},e.createElement("span",{className:h.caretAfter,style:{background:x.themeColor}})):null,e.createElement("span",{className:h.preWhiteSpace},A)));return function(n,t,o,r,a,i,l,c,s){var u=e.useContext(f),m=u.getPreviousCommand,d=u.getNextCommand,p=function(e){if(n&&s){e.preventDefault();var l=e.key;if("Enter"!==l){var c=null;if("Backspace"===l){var u=_.splitStringAtIndex(t,a),p=u[0],f=u[1];c=p.slice(0,-1)+f,t&&0!==t.length&&i(a-1)}else if("ArrowUp"===l)(c=m())&&i(c.length);else if("ArrowDown"===l)c=d(),i(c?c.length:0);else if("ArrowLeft"===l)a>0&&i(a-1),c=t;else if("ArrowRight"===l)a<t.length&&i(a+1),c=t;else if((e.metaKey||e.ctrlKey)&&"v"===l.toLowerCase())navigator.clipboard.readText().then((function(e){var n=_.splitStringAtIndex(t||"",a),r=n[0],l=n[1];c=r+e+l,i(a+e.length),o(c)}));else if((e.metaKey||e.ctrlKey)&&"c"===l.toLowerCase()){var h=window.getSelection().toString();navigator.clipboard.writeText(h).then((function(){o(c=t)}))}else if(l&&1===l.length){var x=_.splitStringAtIndex(t,a);p=x[0],f=x[1],c=p+l+f,i(a+1)}else c=t;o(c),r(!1)}else r(!0)}};e.useEffect((function(){return document.addEventListener("keydown",p),function(){document.removeEventListener("keydown",p)}})),e.useEffect((function(){var e=_.splitStringAtIndex(t,a),n=e[0],o=e[1];l(n),c(o)}),[t,a])}(o,E,T,v,k,B,P,I,m),function(n,t,o,i,c,s,m,d,p,_,h){var x=e.useContext(f),g=x.bufferedContent,C=x.setBufferedContent,b=e.useContext(l),v=e.useContext(u);e.useEffect((function(){var l;n&&(l=i,r(void 0,void 0,void 0,(function(){var n,r,u,f,x,y,w,E;return a(this,(function(a){switch(a.label){case 0:return n=l.trim().split(" "),r=n[0],u=n.slice(1),f="","clear"===r||"limpiar"===r?(C(""),c(""),t(!1),s(0),m(""),d(""),[2]):(x=e.createElement(e.Fragment,null,g,e.createElement("span",{style:{color:v.themePromptColor}},o),e.createElement("span",{className:"".concat(b.lineText," ").concat(b.preWhiteSpace)},i),e.createElement("br",null)),C(x),c(""),s(0),m(""),d(""),l?(y=u.join(" "),r&&p[r]?"function"!=typeof(w=p[r])?[3,2]:[4,w(y)]:[3,4]):[3,9]);case 1:return f=a.sent(),[3,3];case 2:f=w,a.label=3;case 3:return[3,9];case 4:return"function"!=typeof h?[3,6]:[4,h(r,y)];case 5:return f=a.sent(),[3,9];case 6:return"function"!=typeof _?[3,8]:[4,_(r,y)];case 7:return f=a.sent(),[3,9];case 8:f=_,a.label=9;case 9:return E=e.createElement(e.Fragment,null,g,e.createElement("span",{style:{color:v.themePromptColor}},o),e.createElement("span",{className:"".concat(b.lineText," ").concat(b.preWhiteSpace)},i),f?e.createElement("span",null,e.createElement("br",null),f):null,e.createElement("br",null)),C(E),t(!1),[2]}}))})))}),[n])}(b,v,i,E,T,B,P,I,c,s,d),X},x=function(n,t){e.useEffect((function(){t.current&&(t.current.scrollTop=t.current.scrollHeight)}),[n])};function g(n){var t=e.useRef(null),o=e.useContext(l),r=e.useContext(u),a=e.useContext(f).bufferedContent;x(a,t);var i=n.enableInput,c=n.caret,s=n.consoleFocused,m=n.prompt,d=n.commands,p=n.welcomeMessage,_=n.errorMessage,g=n.showControlBar,C=n.defaultHandler,b=h(c,s,m,d,_,i,C,t);return e.createElement("div",{id:"terminalEditor",ref:t,className:"".concat(o.editor," ").concat(g?null:o.curvedTop," ").concat(g?o.editorWithTopBar:null),style:{background:r.themeBGColor}},p,a,b)}function C(n){var o=e.useRef(null),r=e.useState(!t),a=r[0],i=r[1],c=e.useContext(l),s=e.useContext(u);d(o,a,i);var m=n.caret,f=n.theme,_=n.showControlBar,h=n.showControlButtons,x=n.controlButtonLabels,C=n.prompt,b=n.commands,v=n.welcomeMessage,y=n.errorMessage,w=n.enableInput,E=n.defaultHandler,T=_?e.createElement(p,{consoleFocused:a,showControlButtons:h,controlButtonLabels:x}):null,S=e.createElement(g,{caret:m,consoleFocused:a,prompt:C,commands:b,welcomeMessage:v,errorMessage:y,enableInput:w,showControlBar:_,defaultHandler:E});return e.createElement("div",{ref:o,id:c.terminalContainer,className:c["theme--".concat(f)],"data-testid":"terminal"},e.createElement("div",{className:"".concat(c.terminal),style:{background:s.themeToolbarColor,color:s.themeColor}},T,S))}function b(n){var t=n.children;return e.createElement(c,null,e.createElement(m,null,t))}function v(n){return e.createElement(b,null,e.createElement(C,o({},n)))}C.propTypes={enableInput:n.bool,caret:n.bool,theme:n.string,showControlBar:n.bool,showControlButtons:n.bool,controlButtonLabels:n.arrayOf(n.string),prompt:n.string,commands:n.objectOf(n.oneOfType([n.string,n.func,n.node])),welcomeMessage:n.oneOfType([n.string,n.func,n.node]),errorMessage:n.oneOfType([n.string,n.func,n.node]),defaultHandler:n.func},C.defaultProps={enableInput:!0,caret:!0,theme:"light",showControlBar:!0,showControlButtons:!0,controlButtonLabels:["close","minimize","maximize"],prompt:">>>",commands:{},welcomeMessage:"",errorMessage:"not found!",defaultHandler:null};var y=function(n){var t=n.children,o=e.useState(""),r=o[0],a=o[1],i=e.useState([]),l=i[0],c=i[1],s=e.useState(null),u=s[0],m=s[1],d=e.useState(!1),p=d[0],_=d[1];return e.useEffect((function(){m(l.length)}),[l]),e.createElement(f.Provider,{value:{bufferedContent:r,setBufferedContent:a,appendCommandToHistory:function(e){e&&c(l.concat(e))},getPreviousCommand:function(){if(0===u)return 0===l.length?"":l[0];var e=l[u-1];return u>0&&m(u-1),e},getNextCommand:function(){if(u+1<=l.length){var e=l[u+1];return m(u+1),e}return""},processCurrentLine:p,setProcessCurrentLine:_}},t)},w=f,E={ReactTerminal:v,TerminalContextProvider:y,TerminalContext:w};export{v as ReactTerminal,w as TerminalContext,y as TerminalContextProvider,E as default};
