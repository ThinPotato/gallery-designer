(()=>{"use strict";var e={2298:e=>{e.exports=require("electron")}},r={};function n(o){var i=r[o];if(void 0!==i)return i.exports;var t=r[o]={exports:{}};return e[o](t,t.exports,n),t.exports}var o={};(()=>{var e=o;Object.defineProperty(e,"__esModule",{value:!0});const r=n(2298);r.contextBridge.exposeInMainWorld("electron",{ipcRenderer:{myPing(){r.ipcRenderer.send("ipc-example","ping")},on(e,n){if(["ipc-example"].includes(e)){const o=(e,...r)=>n(...r);return r.ipcRenderer.on(e,o),()=>r.ipcRenderer.removeListener(e,o)}},once(e,n){["ipc-example"].includes(e)&&r.ipcRenderer.once(e,((e,...r)=>n(...r)))}}})})(),module.exports=o})();