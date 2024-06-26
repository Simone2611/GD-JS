// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"75sNA":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"gLLPy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _bgJpeg = require("../assets/bg.jpeg");
var _bgJpegDefault = parcelHelpers.interopDefault(_bgJpeg);
var _icon1Png = require("../assets/icon_1.png");
var _icon1PngDefault = parcelHelpers.interopDefault(_icon1Png);
var _block1Png = require("../assets/Block_1.png");
var _block1PngDefault = parcelHelpers.interopDefault(_block1Png);
var _slabPng = require("../assets/slab.png");
var _slabPngDefault = parcelHelpers.interopDefault(_slabPng);
var _blockdefaultPng = require("../assets/blockdefault.png");
var _blockdefaultPngDefault = parcelHelpers.interopDefault(_blockdefaultPng);
var _spikePng = require("../assets/spike.png");
var _spikePngDefault = parcelHelpers.interopDefault(_spikePng);
var _spikeflipPng = require("../assets/spikeflip.png");
var _spikeflipPngDefault = parcelHelpers.interopDefault(_spikeflipPng);
var _orbYellowPng = require("../assets/orb_yellow.png");
var _orbYellowPngDefault = parcelHelpers.interopDefault(_orbYellowPng);
var _miniportalPng = require("../assets/miniportal.png");
var _miniportalPngDefault = parcelHelpers.interopDefault(_miniportalPng);
var _normalportalPng = require("../assets/normalportal.png");
var _normalportalPngDefault = parcelHelpers.interopDefault(_normalportalPng);
var _ufoPng = require("../assets/ufo.png");
var _ufoPngDefault = parcelHelpers.interopDefault(_ufoPng);
var _wavePng = require("../assets/wave.png");
var _wavePngDefault = parcelHelpers.interopDefault(_wavePng);
var _cubeportalPng = require("../assets/cubeportal.png");
var _cubeportalPngDefault = parcelHelpers.interopDefault(_cubeportalPng);
var _waveportalPng = require("../assets/waveportal.png");
var _waveportalPngDefault = parcelHelpers.interopDefault(_waveportalPng);
var _ufoportalPng = require("../assets/ufoportal.png");
var _ufoportalPngDefault = parcelHelpers.interopDefault(_ufoportalPng);
var _speed05Png = require("../assets/speed05.png");
var _speed05PngDefault = parcelHelpers.interopDefault(_speed05Png);
var _2SpeedPng = require("../assets/2speed.png");
var _2SpeedPngDefault = parcelHelpers.interopDefault(_2SpeedPng);
var _speed1Png = require("../assets/speed1.png");
var _speed1PngDefault = parcelHelpers.interopDefault(_speed1Png);
var _speed3Png = require("../assets/speed3.png");
var _speed3PngDefault = parcelHelpers.interopDefault(_speed3Png);
var _speed4Png = require("../assets/speed4.png");
var _speed4PngDefault = parcelHelpers.interopDefault(_speed4Png);
var _sawPng = require("../assets/Saw.png");
var _sawPngDefault = parcelHelpers.interopDefault(_sawPng);
var _slope1Png = require("../assets/slope-1.png");
var _slope1PngDefault = parcelHelpers.interopDefault(_slope1Png);
var _slope11Png = require("../assets/slope-1-1.png");
var _slope11PngDefault = parcelHelpers.interopDefault(_slope11Png);
var _slope2Png = require("../assets/slope-2.png");
var _slope2PngDefault = parcelHelpers.interopDefault(_slope2Png);
var _slope21Png = require("../assets/slope-2-1.png");
var _slope21PngDefault = parcelHelpers.interopDefault(_slope21Png);
var global = arguments[3];
global.Phaser = require("fe65fea63b13e015");
var slope;
var slope1;
var slope2;
var slope22;
var slopeH;
var n = 0;
var trail;
var speed05;
var waveR;
var prevX;
var prevY;
var speed1;
var gravity = "normal";
var jumpwave = -300;
var speed2;
var speed3;
var speed4;
var normp;
var wavep;
var miniplayer = false;
var ufop;
var keyEsc;
var cubep;
var noclipAcc = "off";
var player;
if (localStorage.getItem("speedhack") == null) localStorage.setItem("speedhack", 1);
var speedhack = 1;
var jump = -250;
var cheat = "";
var platforms;
var mode = "cube";
var Deaths;
var k = true;
var w = true;
var l = true;
if (localStorage.getItem("morti") == null) localStorage.setItem("morti", 0);
if (localStorage.getItem("gamekey") == null) {
    localStorage.setItem("gamekey", "arrow");
    window.location.reload;
}
var minip;
var morti = localStorage.getItem("morti");
var spikes;
var fps;
var cursors;
var speed = 200 * speedhack;
var SpeedX = "05";
var keyW;
var keyR;
var keySpace;
if (localStorage.getItem("fps") == null) localStorage.setItem("fps", "60");
var fps = localStorage.getItem("fps");
var config = {
    type: Phaser.AUTO,
    fps: {
        target: fps,
        forceSetTimeOut: true
    },
    width: 800,
    height: 600,
    backgroundColor: "#000026",
    parent: "game",
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 700
            },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
var game = new Phaser.Game(config);
function preload() {
    this.load.image("bg", (0, _bgJpegDefault.default));
    this.load.image("saw", (0, _sawPngDefault.default));
    this.load.image("slab", (0, _slabPngDefault.default));
    this.load.image("slope", (0, _slope1PngDefault.default));
    this.load.image("slope1", (0, _slope11PngDefault.default));
    this.load.image("slope2", (0, _slope2PngDefault.default));
    this.load.image("slope22", (0, _slope21PngDefault.default));
    this.load.image("idle", (0, _icon1PngDefault.default));
    this.load.image("block", (0, _block1PngDefault.default));
    this.load.image("block2", (0, _blockdefaultPngDefault.default));
    this.load.image("spike", (0, _spikePngDefault.default));
    this.load.image("spikeflip", (0, _spikeflipPngDefault.default));
    this.load.image("orby", (0, _orbYellowPngDefault.default));
    this.load.image("miniportal", (0, _miniportalPngDefault.default));
    this.load.image("normalportal", (0, _normalportalPngDefault.default));
    this.load.image("ufo", (0, _ufoPngDefault.default));
    this.load.image("wave", (0, _wavePngDefault.default));
    this.load.image("ufoportal", (0, _ufoportalPngDefault.default));
    this.load.image("waveportal", (0, _waveportalPngDefault.default));
    this.load.image("cubeportal", (0, _cubeportalPngDefault.default));
    this.load.image("speed05", (0, _speed05PngDefault.default));
    this.load.image("speed1", (0, _speed1PngDefault.default));
    this.load.image("speed2", (0, _2SpeedPngDefault.default));
    this.load.image("speed3", (0, _speed3PngDefault.default));
    this.load.image("speed4", (0, _speed4PngDefault.default));
}
function create() {
    // cheat check
    if (localStorage.getItem("hitbox") == 1) {
        Phaser.Physics.Arcade.StaticBody.prototype.drawDebug = Phaser.Physics.Arcade.Body.prototype.drawDebug;
        this.physics.world.createDebugGraphic(true);
        cheat = "on";
    } else cheat = "off";
    // Platform
    platforms = this.physics.add.staticGroup();
    //grass
    for(let i = -400; i < 300000; i += 100)platforms.create(i, 600, "block");
    // spike
    spikes = this.physics.add.staticGroup();
    spikes.create(360, 480, "spikeflip").setSize(6, 12, true);
    spikes.create(400, 537, "spike").setSize(6, 12, true);
    spikes.create(430, 537, "spike").setSize(6, 12, true);
    spikes.create(460, 537, "spike").setSize(6, 12, true);
    spikes.create(600, 537, "spike").setSize(6, 12, true);
    spikes.create(630, 537, "spike").setSize(6, 12, true);
    spikes.create(660, 537, "spike").setSize(6, 12, true);
    spikes.create(1100, 500, "spikeflip").setSize(6, 12, true);
    spikes.create(1125, 537, "spike").setSize(6, 12, true);
    spikes.create(1125, 544, "spike").setSize(6, 12, true).scale = 0.5;
    spikes.create(1150, 500, "spikeflip").setSize(6, 12, true);
    spikes.create(1175, 537, "spike").setSize(6, 12, true);
    spikes.create(1175, 544, "spike").setSize(6, 12, true).scale = 0.5;
    spikes.create(1200, 500, "spikeflip").setSize(6, 12, true);
    spikes.create(1225, 537, "spike").setSize(6, 12, true);
    spikes.create(1225, 544, "spike").setSize(6, 12, true).scale = 0.5;
    // //orb
    // this.orby = this.physics.add.staticGroup();
    // this.orby.create(800, 490, "orby").setCircle(10).refreshBody();
    // //slab
    // platforms.create(649, 500, "slab");
    // platforms.create(500, 480, "slab");
    // platforms.create(400, 440, "slab");
    // platforms.create(380, 340, "slab");
    // //blocchi
    // platforms.create(300, 560, "block2");
    // platforms.create(300, 520, "block2");
    // END
    // this.end = this.physics.add.staticGroup();
    // this.end.create(380, 318, "end").setScale(0.5).refreshBody().setSize(20, 30);
    // this.physics.add.overlap(player, this.end, nextlvl, null, this);
    // mini
    minip = this.physics.add.staticGroup();
    minip.create(800, 500, "miniportal");
    minip.create(1050, 500, "miniportal");
    // normal
    normp = this.physics.add.staticGroup();
    normp.create(900, 500, "normalportal");
    // player
    player = this.physics.add.sprite(20, 300, "idle");
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(player, spikes, hitspike, null, this);
    this.physics.add.overlap(player, minip, mini, null, this);
    this.physics.add.overlap((0, _ufoPngDefault.default), minip, mini, null, this);
    this.physics.add.overlap(player, normp, normal, null, this);
    this.physics.add.overlap((0, _ufoPngDefault.default), normp, normal, null, this);
    // this.physics.add.overlap(player, this.orby);
    cursors = this.input.keyboard.createCursorKeys();
    //score
    fps = this.add.text(20, 300, Math.round(game.loop.actualFps) + " FPS", {
        fontSize: "1.2rem",
        fill: "whitesmoke",
        fontFamily: "Arial"
    });
    Deaths = this.add.text(20, 470, morti + " Attempt", {
        fontSize: "1.2rem",
        fill: "whitesmoke",
        fontFamily: "Arial"
    });
    //portals
    wavep = this.physics.add.staticGroup();
    cubep = this.physics.add.staticGroup();
    ufop = this.physics.add.staticGroup();
    wavep.create(1000, 500, "waveportal");
    cubep.create(1400, 500, "cubeportal");
    ufop.create(1800, 500, "ufoportal");
    this.physics.add.overlap(player, wavep, wavemode, null, this);
    this.physics.add.overlap(player, cubep, cubemode, null, this);
    this.physics.add.overlap(player, ufop, ufomode, null, this);
    // speed
    speed05 = this.physics.add.staticGroup();
    speed1 = this.physics.add.staticGroup();
    speed2 = this.physics.add.staticGroup();
    speed3 = this.physics.add.staticGroup();
    speed4 = this.physics.add.staticGroup();
    speed05.create(2900, 500, "speed05");
    speed1.create(2600, 400, "speed1");
    speed2.create(2500, 300, "speed2");
    speed3.create(2700, 200, "speed3");
    speed4.create(2800, 100, "speed4");
    this.physics.add.overlap(player, speed05, speedchangeN, null, this);
    this.physics.add.overlap(player, speed1, speedchange1, null, this);
    this.physics.add.overlap(player, speed2, speedchange2, null, this);
    this.physics.add.overlap(player, speed3, speedchange3, null, this);
    this.physics.add.overlap(player, speed4, speedchange4, null, this);
    // WASD
    keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    keyEsc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
    this.cameras.main.startFollow(player);
    this.cameras.main.setDeadzone(null, 400);
    player.setY(510);
    trail = this.add.graphics();
    prevX = player.x;
    prevY = player.y;
    // slope
    slope = this.physics.add.staticGroup();
    // x = + 30 y = -60 sopra
    // x = -30 y = +60 sotto
    slope.create(2565, 473, "slope1").setOrigin(0.3, 0.35).setSize(10, 30);
    slope.create(2570, 535, "slope").setOrigin(0.7, 0.7).setSize(10, 30);
    slope.create(2600, 475, "slope").setOrigin(0.7, 0.7).setSize(10, 30);
    slope.create(2619, 473, "slope2").setOrigin(0.3, 0.65).setSize(10, 30);
    slope.create(2649, 533, "slope2").setOrigin(0.3, 0.65).setSize(10, 30);
    this.physics.add.collider(player, slope, slopehit, null, this);
}
function update() {
    gravity;
    if (miniplayer == true) {
        jump = -200;
        if (mode == "wave") {
            waveR = 1.3;
            if (SpeedX == "05") jumpwave = -400;
            else if (SpeedX == "1") jumpwave = -450;
            else if (SpeedX == "2") jumpwave = -600;
            else if (SpeedX == "3") jumpwave = -700;
            else if (SpeedX == "4") jumpwave = -900;
        }
    } else {
        waveR = 1;
        jumpwave = -200;
        if (SpeedX == "05") jumpwave = -200;
        else if (SpeedX == "1") jumpwave = -250;
        else if (SpeedX == "2") jumpwave = -350;
        else if (SpeedX == "3") jumpwave = -450;
        else if (SpeedX == "4") jumpwave = -500;
    }
    if (speedhack != 1) cheat = "on";
    noclipAcc = localStorage.getItem("noclip");
    speedhack = localStorage.getItem("speedhack");
    //spike
    let controls = localStorage.getItem("gamekey");
    let space = localStorage.getItem("spacebar");
    player.setVelocityX(speed * speedhack);
    // Player movement
    // this.checkpoint.anims.play("flag", true);
    if (mode != "cube") {
        if (mode == "ufo") {
            player.setTexture("ufo");
            player.setSize(20, 20);
            if (controls == "arrow") {
                if (!player.body.touching.down) {
                    player.setVelocityX(speed * speedhack);
                    this.tweens.add({
                        targets: player,
                        rotation: 0,
                        duration: 0,
                        persist: true
                    });
                } else {
                    player.setVelocityX(speed * speedhack);
                    this.tweens.add({
                        targets: player,
                        rotation: 0,
                        duration: 0,
                        persist: true
                    });
                }
                if (cursors.up.isDown && l == false) {
                    player.setVelocityY(jump);
                    this.tweens.add({
                        targets: player,
                        rotation: 0.5,
                        duration: 400,
                        persist: true
                    });
                    l = true;
                }
                if (cursors.up.isUp) l = false;
            } else if (controls == "wad") {
                if (!player.body.touching.down) {
                    player.setVelocityX(speed * speedhack);
                    this.tweens.add({
                        targets: player,
                        rotation: 0,
                        duration: 400,
                        persist: true
                    });
                } else player.setVelocityX(speed * speedhack);
                if (keyW.isDown && w == false) {
                    player.setVelocityY(jump);
                    w = true;
                    this.tweens.add({
                        targets: player,
                        rotation: 0.5,
                        duration: 400,
                        persist: true
                    });
                }
                if (keyW.isUp) w = false;
            }
            if (space == "on") {
                if (keySpace.isDown && k == false) {
                    player.setVelocityY(jump);
                    k = true;
                    this.tweens.add({
                        targets: player,
                        rotation: 0.5,
                        duration: 400,
                        persist: true
                    });
                }
                if (keySpace.isUp) k = false;
            }
        } else if (mode == "wave") {
            player.setTexture("wave");
            player.setSize(12, 12);
            if (controls == "arrow") {
                if (!player.body.touching.down) {
                    player.setVelocityX(speed * speedhack);
                    player.setVelocityY(-jumpwave);
                    this.tweens.add({
                        targets: player,
                        rotation: waveR,
                        duration: 20,
                        persist: true
                    });
                } else {
                    player.setVelocityX(speed * speedhack);
                    this.tweens.add({
                        targets: player,
                        rotation: 0,
                        duration: 0,
                        persist: true
                    });
                }
                if (cursors.up.isDown) {
                    player.setVelocityY(jumpwave);
                    this.tweens.add({
                        targets: player,
                        rotation: -waveR,
                        duration: 20,
                        persist: true
                    });
                }
                cursors.up.isUp;
            } else if (controls == "wad") {
                if (!player.body.touching.down) player.setVelocityX(speed * speedhack);
                else player.setVelocityX(speed * speedhack);
                if (keyW.isDown) {
                    player.setVelocityY(jumpwave);
                    this.tweens.add({
                        targets: player,
                        rotation: -1,
                        duration: 20,
                        persist: true
                    });
                }
                keyW.isUp;
            }
            if (space == "on") {
                if (keySpace.isDown) {
                    player.setVelocityY(jumpwave);
                    this.tweens.add({
                        targets: player,
                        rotation: -1,
                        duration: 20,
                        persist: true
                    });
                }
                keySpace.isUp;
            }
        }
    } else {
        player.setTexture("idle");
        player.setSize(30, 30);
        if (controls == "arrow") {
            if (!player.body.touching.down) player.setVelocityX(speed * speedhack);
            else {
                player.setVelocityX(speed * speedhack);
                this.tweens.add({
                    targets: player,
                    rotation: 0,
                    duration: 0,
                    persist: true
                });
            }
            if (cursors.up.isDown && player.body.touching.down) {
                player.setVelocityY(jump);
                this.tweens.add({
                    targets: player,
                    rotation: 1.55,
                    duration: 400,
                    persist: true
                });
            }
        } else if (controls == "wad") {
            if (!player.body.touching.down) {
                player.setVelocityX(speed * speedhack);
                this.tweens.add({
                    targets: player,
                    rotation: 0,
                    duration: 400,
                    persist: true
                });
            } else player.setVelocityX(speed * speedhack);
            if (keyW.isDown && player.body.touching.down) {
                player.setVelocityY(jump);
                this.tweens.add({
                    targets: player,
                    rotation: 1.55,
                    duration: 400,
                    persist: true
                });
            }
        }
        if (space == "on") {
            if (keySpace.isDown && player.body.touching.down) {
                player.setVelocityY(jump);
                this.tweens.add({
                    targets: player,
                    rotation: 1.55,
                    duration: 400,
                    persist: true
                });
            }
        }
    }
    if (keyR.isDown) {
        mode = "cube";
        player.scale = 1;
        speed = 200;
        jump = -250;
        SpeedX = "05";
        miniplayer = false;
        player.setX(20);
        player.setY(300);
        player.setY(510);
        trail.clear();
    }
    fps.setText(Math.round(game.loop.actualFps) + " FPS");
    Deaths.setText(morti + " Attempts");
    if (localStorage.getItem("noclip") == "on") {
        this.physics.add.overlap(player, platforms);
        this.physics.add.overlap(player, spikes, hitspike, null, this);
    }
    if (mode == "wave") {
        trail.lineStyle(2, 0xffffff, 0.5);
        trail.moveTo(player.x, player.y);
        trail.lineTo(prevX, prevY);
        trail.strokePath();
        prevX = player.x;
        prevY = player.y;
        n++;
        if (n == 200) {
            trail.clear();
            n = 0;
        }
    } else {
        trail.clear();
        prevX = player.x;
        prevY = player.y;
    }
}
function hitspike(player, spikes) {
    morti++;
    localStorage.setItem("morti", morti);
    if (noclipAcc == "on") cheat = "on";
    else {
        player.scale = 1;
        mode = "cube";
        jump = -250;
        speed = 200;
        SpeedX = "05";
        miniplayer = false;
        player.setX(20);
        player.setY(300);
        player.setY(510);
    }
}
function slopehit() {
    if (mode == "wave") {
        player.scale = 1;
        mode = "cube";
        jump = -250;
        speed = 200;
        SpeedX = "05";
        miniplayer = false;
        player.setX(20);
        player.setY(300);
        player.setY(510);
    }
}
function nextlvl() {
    if (cheat == "on") ;
    else window.location.href = window.location.origin + "/level1.html";
}
function checkpointsave() {
    if (cheat == "on") ;
    else {
        localStorage.setItem("tuto-x", 20);
        localStorage.setItem("tuto-y", 380);
    }
}
function mini(player, minip) {
    // player.setSize(10, 10);
    miniplayer = true;
    player.scale = 0.6;
}
function normal(player, minip) {
    // player.setSize(10, 10);
    miniplayer = false;
    jump = -250;
    if (player.scale != 1) player.setY(player.body.position.y - 20);
    player.scale = 1;
}
function ufomode(player, ufop) {
    mode = "ufo";
}
function wavemode(player, ufop) {
    mode = "wave";
}
function cubemode(player, ufop) {
    mode = "cube";
}
function speedchangeN() {
    SpeedX = "05";
    speed = 200;
    jump = -250;
}
function speedchange1() {
    SpeedX = "1";
    speed = 250;
    jump = -240;
}
function speedchange2() {
    SpeedX = "2";
    speed = 300;
    jump = -230;
}
function speedchange3() {
    SpeedX = "3";
    speed = 400;
    jump = -220;
}
function speedchange4() {
    SpeedX = "4";
    speed = 500;
    jump = -210;
}

},{"fe65fea63b13e015":"9U0wC","../assets/bg.jpeg":"lqosZ","../assets/icon_1.png":"7tYvB","../assets/Block_1.png":"4yKgI","../assets/slab.png":"2DGBQ","../assets/blockdefault.png":"fUTUi","../assets/spike.png":"lAmj6","../assets/spikeflip.png":"4iGIb","../assets/orb_yellow.png":"4jyk1","../assets/miniportal.png":"dRbXy","../assets/normalportal.png":"kxxTd","../assets/ufo.png":"eGHpI","../assets/wave.png":"2dc1e","../assets/cubeportal.png":"9v16N","../assets/waveportal.png":"3tIpi","../assets/ufoportal.png":"fZZNE","../assets/speed05.png":"31IVo","../assets/2speed.png":"4CUui","../assets/speed1.png":"hX416","../assets/speed3.png":"gDtjE","../assets/speed4.png":"aq3i2","../assets/Saw.png":"kmGNd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../assets/slope-1.png":"esoZQ","../assets/slope-1-1.png":"6aNn5","../assets/slope-2.png":"c3ZWn","../assets/slope-2-1.png":"ggcTy"}],"lqosZ":[function(require,module,exports) {
module.exports = require("15137a19056ba2d2").getBundleURL("gnRNX") + "bg.371e0999.jpeg" + "?" + Date.now();

},{"15137a19056ba2d2":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"7tYvB":[function(require,module,exports) {
module.exports = require("618c91be7437e4ab").getBundleURL("gnRNX") + "icon_1.3d15e527.png" + "?" + Date.now();

},{"618c91be7437e4ab":"lgJ39"}],"4yKgI":[function(require,module,exports) {
module.exports = require("1a9839a4ce0cdff6").getBundleURL("gnRNX") + "Block_1.99fcd2ba.png" + "?" + Date.now();

},{"1a9839a4ce0cdff6":"lgJ39"}],"2DGBQ":[function(require,module,exports) {
module.exports = require("4e5c0ff339fa1ab1").getBundleURL("gnRNX") + "slab.f11e382f.png" + "?" + Date.now();

},{"4e5c0ff339fa1ab1":"lgJ39"}],"fUTUi":[function(require,module,exports) {
module.exports = require("8fa0bf181e699fe7").getBundleURL("gnRNX") + "blockdefault.a84c609c.png" + "?" + Date.now();

},{"8fa0bf181e699fe7":"lgJ39"}],"lAmj6":[function(require,module,exports) {
module.exports = require("e72bd015244d240c").getBundleURL("gnRNX") + "spike.bb8b98bc.png" + "?" + Date.now();

},{"e72bd015244d240c":"lgJ39"}],"4iGIb":[function(require,module,exports) {
module.exports = require("2fc3c391647b56c1").getBundleURL("gnRNX") + "spikeflip.14d07562.png" + "?" + Date.now();

},{"2fc3c391647b56c1":"lgJ39"}],"4jyk1":[function(require,module,exports) {
module.exports = require("1aca4bee01474bd3").getBundleURL("gnRNX") + "orb_yellow.9e800d4f.png" + "?" + Date.now();

},{"1aca4bee01474bd3":"lgJ39"}],"dRbXy":[function(require,module,exports) {
module.exports = require("af3fedddf716afbf").getBundleURL("gnRNX") + "miniportal.e8af8b0a.png" + "?" + Date.now();

},{"af3fedddf716afbf":"lgJ39"}],"kxxTd":[function(require,module,exports) {
module.exports = require("fccaebffd2b48028").getBundleURL("gnRNX") + "normalportal.ad588adc.png" + "?" + Date.now();

},{"fccaebffd2b48028":"lgJ39"}],"eGHpI":[function(require,module,exports) {
module.exports = require("f36b53fe6ebf3805").getBundleURL("gnRNX") + "ufo.2d4aa920.png" + "?" + Date.now();

},{"f36b53fe6ebf3805":"lgJ39"}],"2dc1e":[function(require,module,exports) {
module.exports = require("5cfcb79422ac514b").getBundleURL("gnRNX") + "wave.b45e4a25.png" + "?" + Date.now();

},{"5cfcb79422ac514b":"lgJ39"}],"9v16N":[function(require,module,exports) {
module.exports = require("90b298cc1c4192cc").getBundleURL("gnRNX") + "cubeportal.4bcce80e.png" + "?" + Date.now();

},{"90b298cc1c4192cc":"lgJ39"}],"3tIpi":[function(require,module,exports) {
module.exports = require("cbd648b39496308e").getBundleURL("gnRNX") + "waveportal.bfbd4b0e.png" + "?" + Date.now();

},{"cbd648b39496308e":"lgJ39"}],"fZZNE":[function(require,module,exports) {
module.exports = require("8a187ff7c6860316").getBundleURL("gnRNX") + "ufoportal.7ee327c8.png" + "?" + Date.now();

},{"8a187ff7c6860316":"lgJ39"}],"31IVo":[function(require,module,exports) {
module.exports = require("62e6dcbe5b9a79d").getBundleURL("gnRNX") + "speed05.669ada45.png" + "?" + Date.now();

},{"62e6dcbe5b9a79d":"lgJ39"}],"4CUui":[function(require,module,exports) {
module.exports = require("241d35de17f674af").getBundleURL("gnRNX") + "2speed.fc052f01.png" + "?" + Date.now();

},{"241d35de17f674af":"lgJ39"}],"hX416":[function(require,module,exports) {
module.exports = require("30b4fd5a30080e38").getBundleURL("gnRNX") + "speed1.f33cb68c.png" + "?" + Date.now();

},{"30b4fd5a30080e38":"lgJ39"}],"gDtjE":[function(require,module,exports) {
module.exports = require("3115b62508befc40").getBundleURL("gnRNX") + "speed3.f856ae76.png" + "?" + Date.now();

},{"3115b62508befc40":"lgJ39"}],"aq3i2":[function(require,module,exports) {
module.exports = require("e79ea0f00fa30687").getBundleURL("gnRNX") + "speed4.0bca990a.png" + "?" + Date.now();

},{"e79ea0f00fa30687":"lgJ39"}],"kmGNd":[function(require,module,exports) {
module.exports = require("8a6a2298551f3e27").getBundleURL("gnRNX") + "Saw.539913ac.png" + "?" + Date.now();

},{"8a6a2298551f3e27":"lgJ39"}],"esoZQ":[function(require,module,exports) {
module.exports = require("dbfd322773c8f16a").getBundleURL("gnRNX") + "slope-1.a8bb95d3.png" + "?" + Date.now();

},{"dbfd322773c8f16a":"lgJ39"}],"6aNn5":[function(require,module,exports) {
module.exports = require("b822f8aff214338c").getBundleURL("gnRNX") + "slope-1-1.04fa4eee.png" + "?" + Date.now();

},{"b822f8aff214338c":"lgJ39"}],"c3ZWn":[function(require,module,exports) {
module.exports = require("6f5280b5e745ac74").getBundleURL("gnRNX") + "slope-2.3514290d.png" + "?" + Date.now();

},{"6f5280b5e745ac74":"lgJ39"}],"ggcTy":[function(require,module,exports) {
module.exports = require("23b4649e52f6cfd3").getBundleURL("gnRNX") + "slope-2-1.1a8652ca.png" + "?" + Date.now();

},{"23b4649e52f6cfd3":"lgJ39"}]},["75sNA","gLLPy"], "gLLPy", "parcelRequire94c2")

//# sourceMappingURL=index.4d6bcbeb.js.map
