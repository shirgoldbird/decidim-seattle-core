/*!

 diff v3.4.0

Software License Agreement (BSD License)

Copyright (c) 2009-2015, Kevin Decker <kpdecker@gmail.com>

All rights reserved.

Redistribution and use of this software in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above
  copyright notice, this list of conditions and the
  following disclaimer.

* Redistributions in binary form must reproduce the above
  copyright notice, this list of conditions and the
  following disclaimer in the documentation and/or other
  materials provided with the distribution.

* Neither the name of Kevin Decker nor the names of its
  contributors may be used to endorse or promote products
  derived from this software without specific prior
  written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT
OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
@license
*/
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.JsDiff=n():e.JsDiff=n()}(this,function(){return function(e){function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}n.__esModule=!0,n.canonicalize=n.convertChangesToXML=n.convertChangesToDMP=n.merge=n.parsePatch=n.applyPatches=n.applyPatch=n.createPatch=n.createTwoFilesPatch=n.structuredPatch=n.diffArrays=n.diffJson=n.diffCss=n.diffSentences=n.diffTrimmedLines=n.diffLines=n.diffWordsWithSpace=n.diffWords=n.diffChars=n.Diff=undefined;var i=r(t(1)),o=t(2),s=t(3),f=t(5),u=t(6),a=t(7),l=t(8),d=t(9),c=t(10),h=t(11),p=t(13),v=t(14),g=t(16),m=t(17);n.Diff=i["default"],n.diffChars=o.diffChars,n.diffWords=s.diffWords,n.diffWordsWithSpace=s.diffWordsWithSpace,n.diffLines=f.diffLines,n.diffTrimmedLines=f.diffTrimmedLines,n.diffSentences=u.diffSentences,n.diffCss=a.diffCss,n.diffJson=l.diffJson,n.diffArrays=d.diffArrays,n.structuredPatch=v.structuredPatch,n.createTwoFilesPatch=v.createTwoFilesPatch,n.createPatch=v.createPatch,n.applyPatch=c.applyPatch,n.applyPatches=c.applyPatches,n.parsePatch=h.parsePatch,n.merge=p.merge,n.convertChangesToDMP=g.convertChangesToDMP,n.convertChangesToXML=m.convertChangesToXML,n.canonicalize=l.canonicalize},function(e,n){"use strict";function t(){}function r(e,n,t,r,i){for(var o=0,s=n.length,f=0,u=0;o<s;o++){var a=n[o];if(a.removed){if(a.value=e.join(r.slice(u,u+a.count)),u+=a.count,o&&n[o-1].added){var l=n[o-1];n[o-1]=n[o],n[o]=l}}else{if(!a.added&&i){var d=t.slice(f,f+a.count);d=d.map(function(e,n){var t=r[u+n];return t.length>e.length?t:e}),a.value=e.join(d)}else a.value=e.join(t.slice(f,f+a.count));f+=a.count,a.added||(u+=a.count)}}var c=n[s-1];return s>1&&"string"==typeof c.value&&(c.added||c.removed)&&e.equals("",c.value)&&(n[s-2].value+=c.value,n.pop()),n}function i(e){return{newPos:e.newPos,components:e.components.slice(0)}}n.__esModule=!0,n["default"]=t,t.prototype={diff:function(e,n){function t(e){return f?(setTimeout(function(){f(undefined,e)},0),!0):e}function o(){for(var o=-1*d;o<=d;o+=2){var s=void 0,f=h[o-1],c=h[o+1],p=(c?c.newPos:0)-o;f&&(h[o-1]=undefined);var v=f&&f.newPos+1<a,g=c&&0<=p&&p<l;if(v||g){if(!v||g&&f.newPos<c.newPos?(s=i(c),u.pushComponent(s.components,undefined,!0)):((s=f).newPos++,u.pushComponent(s.components,!0,undefined)),p=u.extractCommon(s,n,e,o),s.newPos+1>=a&&p+1>=l)return t(r(u,s.components,n,e,u.useLongestToken));h[o]=s}else h[o]=undefined}d++}var s=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{},f=s.callback;"function"==typeof s&&(f=s,s={}),this.options=s;var u=this;e=this.castInput(e),n=this.castInput(n),e=this.removeEmpty(this.tokenize(e));var a=(n=this.removeEmpty(this.tokenize(n))).length,l=e.length,d=1,c=a+l,h=[{newPos:-1,components:[]}],p=this.extractCommon(h[0],n,e,0);if(h[0].newPos+1>=a&&p+1>=l)return t([{value:this.join(n),count:n.length}]);if(f)!function g(){setTimeout(function(){if(d>c)return f();o()||g()},0)}();else for(;d<=c;){var v=o();if(v)return v}},pushComponent:function(e,n,t){var r=e[e.length-1];r&&r.added===n&&r.removed===t?e[e.length-1]={count:r.count+1,added:n,removed:t}:e.push({count:1,added:n,removed:t})},extractCommon:function(e,n,t,r){for(var i=n.length,o=t.length,s=e.newPos,f=s-r,u=0;s+1<i&&f+1<o&&this.equals(n[s+1],t[f+1]);)s++,f++,u++;return u&&e.components.push({count:u}),e.newPos=s,f},equals:function(e,n){return this.options.comparator?this.options.comparator(e,n):e===n||this.options.ignoreCase&&e.toLowerCase()===n.toLowerCase()},removeEmpty:function(e){for(var n=[],t=0;t<e.length;t++)e[t]&&n.push(e[t]);return n},castInput:function(e){return e},tokenize:function(e){return e.split("")},join:function(e){return e.join("")}}},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,n,t){return s.diff(e,n,t)}n.__esModule=!0,n.characterDiff=undefined,n.diffChars=i;var o=r(t(1)),s=n.characterDiff=new o["default"]},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,n,t){return t=(0,f.generateOptions)(t,{ignoreWhitespace:!0}),l.diff(e,n,t)}function o(e,n,t){return l.diff(e,n,t)}n.__esModule=!0,n.wordDiff=undefined,n.diffWords=i,n.diffWordsWithSpace=o;var s=r(t(1)),f=t(4),u=/^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,a=/\S/,l=n.wordDiff=new s["default"];l.equals=function(e,n){return this.options.ignoreCase&&(e=e.toLowerCase(),n=n.toLowerCase()),e===n||this.options.ignoreWhitespace&&!a.test(e)&&!a.test(n)},l.tokenize=function(e){for(var n=e.split(/(\s+|\b)/),t=0;t<n.length-1;t++)!n[t+1]&&n[t+2]&&u.test(n[t])&&u.test(n[t+2])&&(n[t]+=n[t+2],n.splice(t+1,2),t--);return n}},function(e,n){"use strict";function t(e,n){if("function"==typeof e)n.callback=e;else if(e)for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n}n.__esModule=!0,n.generateOptions=t},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,n,t){return u.diff(e,n,t)}function o(e,n,t){var r=(0,f.generateOptions)(t,{ignoreWhitespace:!0});return u.diff(e,n,r)}n.__esModule=!0,n.lineDiff=undefined,n.diffLines=i,n.diffTrimmedLines=o;var s=r(t(1)),f=t(4),u=n.lineDiff=new s["default"];u.tokenize=function(e){var n=[],t=e.split(/(\n|\r\n)/);t[t.length-1]||t.pop();for(var r=0;r<t.length;r++){var i=t[r];r%2&&!this.options.newlineIsToken?n[n.length-1]+=i:(this.options.ignoreWhitespace&&(i=i.trim()),n.push(i))}return n}},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,n,t){return s.diff(e,n,t)}n.__esModule=!0,n.sentenceDiff=undefined,n.diffSentences=i;var o=r(t(1)),s=n.sentenceDiff=new o["default"];s.tokenize=function(e){return e.split(/(\S.+?[.!?])(?=\s+|$)/)}},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,n,t){return s.diff(e,n,t)}n.__esModule=!0,n.cssDiff=undefined,n.diffCss=i;var o=r(t(1)),s=n.cssDiff=new o["default"];s.tokenize=function(e){return e.split(/([{}:;,]|\s+)/)}},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,n,t){return l.diff(e,n,t)}function o(e,n,t){n=n||[],t=t||[];var r=void 0;for(r=0;r<n.length;r+=1)if(n[r]===e)return t[r];var i=void 0;if("[object Array]"===a.call(e)){for(n.push(e),i=new Array(e.length),t.push(i),r=0;r<e.length;r+=1)i[r]=o(e[r],n,t);return n.pop(),t.pop(),i}if(e&&e.toJSON&&(e=e.toJSON()),"object"===(void 0===e?"undefined":s(e))&&null!==e){n.push(e),i={},t.push(i);var f=[],u=void 0;for(u in e)e.hasOwnProperty(u)&&f.push(u);for(f.sort(),r=0;r<f.length;r+=1)i[u=f[r]]=o(e[u],n,t);n.pop(),t.pop()}else i=e;return i}n.__esModule=!0,n.jsonDiff=undefined;var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n.diffJson=i,n.canonicalize=o;var f=r(t(1)),u=t(5),a=Object.prototype.toString,l=n.jsonDiff=new f["default"];l.useLongestToken=!0,l.tokenize=u.lineDiff.tokenize,l.castInput=function(e){var n=this.options.undefinedReplacement;return"string"==typeof e?e:JSON.stringify(o(e),function(e,t){return void 0===t?n:t},"  ")},l.equals=function(e,n){return f["default"].prototype.equals.call(l,e.replace(/,([\r\n])/g,"$1"),n.replace(/,([\r\n])/g,"$1"))}},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,n,t){return s.diff(e,n,t)}n.__esModule=!0,n.arrayDiff=undefined,n.diffArrays=i;var o=r(t(1)),s=n.arrayDiff=new o["default"];s.tokenize=s.join=function(e){return e.slice()},s.removeEmpty=function(e){return e}},function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,n){function t(e,n){for(var t=0;t<e.lines.length;t++){var r=e.lines[t],o=r[0],s=r.substr(1);if(" "===o||"-"===o){if(!a(n+1,i[n],o,s)&&++l>d)return!1;n++}}return!0}var r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};if("string"==typeof n&&(n=(0,s.parsePatch)(n)),Array.isArray(n)){if(n.length>1)throw new Error("applyPatch only works with a single input.");n=n[0]}for(var i=e.split(/\r\n|[\n\v\f\r\x85]/),o=e.match(/\r\n|[\n\v\f\r\x85]/g)||[],u=n.hunks,a=r.compareLine||function(e,n,t,r){return n===r},l=0,d=r.fuzzFactor||0,c=0,h=0,p=void 0,v=void 0,g=0;g<u.length;g++){for(var m=u[g],w=i.length-m.oldLines,y=0,L=h+m.oldStart-1,x=(0,f["default"])(L,c,w);y!==undefined;y=x())if(t(m,L+y)){m.offset=h+=y;break}if(y===undefined)return!1;c=m.offset+m.oldStart+m.oldLines}for(var _=0,S=0;S<u.length;S++){var P=u[S],k=P.oldStart+P.offset+_-1;_+=P.newLines-P.oldLines,k<0&&(k=0);for(var M=0;M<P.lines.length;M++){var F=P.lines[M],C=F[0],b=F.substr(1),N=P.linedelimiters[M];if(" "===C)k++;else if("-"===C)i.splice(k,1),o.splice(k,1);else if("+"===C)i.splice(k,0,b),o.splice(k,0,N),k++;else if("\\"===C){var D=P.lines[M-1]?P.lines[M-1][0]:null;"+"===D?p=!0:"-"===D&&(v=!0)}}}if(p)for(;!i[i.length-1];)i.pop(),o.pop();else v&&(i.push(""),o.push("\n"));for(var H=0;H<i.length-1;H++)i[H]=i[H]+o[H];return i.join("")}function o(e,n){function t(){var o=e[r++];if(!o)return n.complete();n.loadFile(o,function(e,r){if(e)return n.complete(e);var s=i(r,o,n);n.patched(o,s,function(e){if(e)return n.complete(e);t()})})}"string"==typeof e&&(e=(0,s.parsePatch)(e));var r=0;t()}n.__esModule=!0,n.applyPatch=i,n.applyPatches=o;var s=t(11),f=r(t(12))},function(e,n){"use strict";function t(e){function n(){var e={};for(f.push(e);u<o.length;){var n=o[u];if(/^(\-\-\-|\+\+\+|@@)\s/.test(n))break;var s=/^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(n);s&&(e.index=s[1]),u++}for(t(e),t(e),e.hunks=[];u<o.length;){var a=o[u];if(/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(a))break;if(/^@@/.test(a))e.hunks.push(r());else{if(a&&i.strict)throw new Error("Unknown line "+(u+1)+" "+JSON.stringify(a));u++}}}function t(e){var n=/^(---|\+\+\+)\s+([\S ]*)(?:\t(.*?)\s*)?$/.exec(o[u]);if(n){var t="---"===n[1]?"old":"new",r=n[2].replace(/\\\\/g,"\\");/^".*"$/.test(r)&&(r=r.substr(1,r.length-2)),e[t+"FileName"]=r,e[t+"Header"]=n[3],u++}}function r(){for(var e=u,n=o[u++].split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),t={oldStart:+n[1],oldLines:+n[2]||1,newStart:+n[3],newLines:+n[4]||1,lines:[],linedelimiters:[]},r=0,f=0;u<o.length&&!(0===o[u].indexOf("--- ")&&u+2<o.length&&0===o[u+1].indexOf("+++ ")&&0===o[u+2].indexOf("@@"));u++){var a=o[u][0];if("+"!==a&&"-"!==a&&" "!==a&&"\\"!==a)break;t.lines.push(o[u]),t.linedelimiters.push(s[u]||"\n"),"+"===a?r++:"-"===a?f++:" "===a&&(r++,f++)}if(r||1!==t.newLines||(t.newLines=0),f||1!==t.oldLines||(t.oldLines=0),i.strict){if(r!==t.newLines)throw new Error("Added line count did not match for hunk at line "+(e+1));if(f!==t.oldLines)throw new Error("Removed line count did not match for hunk at line "+(e+1))}return t}for(var i=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},o=e.split(/\r\n|[\n\v\f\r\x85]/),s=e.match(/\r\n|[\n\v\f\r\x85]/g)||[],f=[],u=0;u<o.length;)n();return f}n.__esModule=!0,n.parsePatch=t},function(e,n){"use strict";n.__esModule=!0,n["default"]=function(e,n,t){var r=!0,i=!1,o=!1,s=1;return function f(){if(r&&!o){if(i?s++:r=!1,e+s<=t)return s;o=!0}if(!i)return o||(r=!0),n<=e-s?-s++:(i=!0,f())}}},function(e,n,t){"use strict";function r(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function i(e){var n=x(e.lines),t=n.oldLines,r=n.newLines;t!==undefined?e.oldLines=t:delete e.oldLines,r!==undefined?e.newLines=r:delete e.newLines}function o(e,n,t){e=s(e,t),n=s(n,t);var r={};(e.index||n.index)&&(r.index=e.index||n.index),(e.newFileName||n.newFileName)&&(f(e)?f(n)?(r.oldFileName=u(r,e.oldFileName,n.oldFileName),r.newFileName=u(r,e.newFileName,n.newFileName),r.oldHeader=u(r,e.oldHeader,n.oldHeader),r.newHeader=u(r,e.newHeader,n.newHeader)):(r.oldFileName=e.oldFileName,r.newFileName=e.newFileName,r.oldHeader=e.oldHeader,r.newHeader=e.newHeader):(r.oldFileName=n.oldFileName||e.oldFileName,r.newFileName=n.newFileName||e.newFileName,r.oldHeader=n.oldHeader||e.oldHeader,r.newHeader=n.newHeader||e.newHeader)),r.hunks=[];for(var i=0,o=0,c=0,h=0;i<e.hunks.length||o<n.hunks.length;){var p=e.hunks[i]||{oldStart:Infinity},v=n.hunks[o]||{oldStart:Infinity};if(a(p,v))r.hunks.push(l(p,c)),i++,h+=p.newLines-p.oldLines;else if(a(v,p))r.hunks.push(l(v,h)),o++,c+=v.newLines-v.oldLines;else{var g={oldStart:Math.min(p.oldStart,v.oldStart),oldLines:0,newStart:Math.min(p.newStart+c,v.oldStart+h),newLines:0,lines:[]};d(g,p.oldStart,p.lines,v.oldStart,v.lines),o++,i++,r.hunks.push(g)}}return r}function s(e,n){if("string"==typeof e){if(/^@@/m.test(e)||/^Index:/m.test(e))return(0,S.parsePatch)(e)[0];if(!n)throw new Error("Must provide a base reference or pass in a patch");return(0,_.structuredPatch)(undefined,undefined,n,e)}return e}function f(e){return e.newFileName&&e.newFileName!==e.oldFileName}function u(e,n,t){return n===t?n:(e.conflict=!0,{mine:n,theirs:t})}function a(e,n){return e.oldStart<n.oldStart&&e.oldStart+e.oldLines<n.oldStart}function l(e,n){return{oldStart:e.oldStart,oldLines:e.oldLines,newStart:e.newStart+n,newLines:e.newLines,lines:e.lines}}function d(e,n,t,o,s){var f={offset:n,lines:t,index:0},u={offset:o,lines:s,index:0};for(v(e,f,u),v(e,u,f);f.index<f.lines.length&&u.index<u.lines.length;){var a=f.lines[f.index],l=u.lines[u.index];if("-"!==a[0]&&"+"!==a[0]||"-"!==l[0]&&"+"!==l[0])if("+"===a[0]&&" "===l[0]){var d;(d=e.lines).push.apply(d,r(m(f)))}else if("+"===l[0]&&" "===a[0]){var w;(w=e.lines).push.apply(w,r(m(u)))}else"-"===a[0]&&" "===l[0]?h(e,f,u):"-"===l[0]&&" "===a[0]?h(e,u,f,!0):a===l?(e.lines.push(a),f.index++,u.index++):p(e,m(f),m(u));else c(e,f,u)}g(e,f),g(e,u),i(e)}function c(e,n,t){var i=m(n),o=m(t);if(y(i)&&y(o)){var s,f;if((0,P.arrayStartsWith)(i,o)&&L(t,i,i.length-o.length))return void(s=e.lines).push.apply(s,r(i));if((0,P.arrayStartsWith)(o,i)&&L(n,o,o.length-i.length))return void(f=e.lines).push.apply(f,r(o))}else if((0,P.arrayEqual)(i,o)){var u;return void(u=e.lines).push.apply(u,r(i))}p(e,i,o)}function h(e,n,t,i){var o,s=m(n),f=w(t,s);f.merged?(o=e.lines).push.apply(o,r(f.merged)):p(e,i?f:s,i?s:f)}function p(e,n,t){e.conflict=!0,e.lines.push({conflict:!0,mine:n,theirs:t})}function v(e,n,t){for(;n.offset<t.offset&&n.index<n.lines.length;){var r=n.lines[n.index++];e.lines.push(r),n.offset++}}function g(e,n){for(;n.index<n.lines.length;){var t=n.lines[n.index++];e.lines.push(t)}}function m(e){for(var n=[],t=e.lines[e.index][0];e.index<e.lines.length;){var r=e.lines[e.index];if("-"===t&&"+"===r[0]&&(t="+"),t!==r[0])break;n.push(r),e.index++}return n}function w(e,n){for(var t=[],r=[],i=0,o=!1,s=!1;i<n.length&&e.index<e.lines.length;){var f=e.lines[e.index],u=n[i];if("+"===u[0])break;if(o=o||" "!==f[0],r.push(u),i++,"+"===f[0])for(s=!0;"+"===f[0];)t.push(f),f=e.lines[++e.index];u.substr(1)===f.substr(1)?(t.push(f),e.index++):s=!0}if("+"===(n[i]||"")[0]&&o&&(s=!0),s)return t;for(;i<n.length;)r.push(n[i++]);return{merged:r,changes:t}}function y(e){return e.reduce(function(e,n){return e&&"-"===n[0]},!0)}function L(e,n,t){for(var r=0;r<t;r++){var i=n[n.length-t+r].substr(1);if(e.lines[e.index+r]!==" "+i)return!1}return e.index+=t,!0}function x(e){var n=0,t=0;return e.forEach(function(e){if("string"!=typeof e){var r=x(e.mine),i=x(e.theirs);n!==undefined&&(r.oldLines===i.oldLines?n+=r.oldLines:n=undefined),t!==undefined&&(r.newLines===i.newLines?t+=r.newLines:t=undefined)}else t===undefined||"+"!==e[0]&&" "!==e[0]||t++,n===undefined||"-"!==e[0]&&" "!==e[0]||n++}),{oldLines:n,newLines:t}}n.__esModule=!0,n.calcLineCount=i,n.merge=o;var _=t(14),S=t(11),P=t(15)},function(e,n,t){"use strict";function r(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function i(e,n,t,i,o,s,u){function a(e){return e.map(function(e){return" "+e})}u||(u={}),"undefined"==typeof u.context&&(u.context=4);var l=(0,f.diffLines)(t,i,u);l.push({value:"",lines:[]});for(var d=[],c=0,h=0,p=[],v=1,g=1,m=function(e){var n=l[e],o=n.lines||n.value.replace(/\n$/,"").split("\n");if(n.lines=o,n.added||n.removed){var s;if(!c){var f=l[e-1];c=v,h=g,f&&(p=u.context>0?a(f.lines.slice(-u.context)):[],c-=p.length,h-=p.length)}(s=p).push.apply(s,r(o.map(function(e){return(n.added?"+":"-")+e}))),n.added?g+=o.length:v+=o.length}else{if(c)if(o.length<=2*u.context&&e<l.length-2){var m;(m=p).push.apply(m,r(a(o)))}else{var w,y=Math.min(o.length,u.context);(w=p).push.apply(w,r(a(o.slice(0,y))));var L={oldStart:c,oldLines:v-c+y,newStart:h,newLines:g-h+y,lines:p};if(e>=l.length-2&&o.length<=u.context){var x=/\n$/.test(t),_=/\n$/.test(i);0!=o.length||x?x&&_||p.push("\\ No newline at end of file"):p.splice(L.oldLines,0,"\\ No newline at end of file")}d.push(L),c=0,h=0,p=[]}v+=o.length,g+=o.length}},w=0;w<l.length;w++)m(w);return{oldFileName:e,newFileName:n,oldHeader:o,newHeader:s,hunks:d}}function o(e,n,t,r,o,s,f){var u=i(e,n,t,r,o,s,f),a=[];e==n&&a.push("Index: "+e),a.push("==================================================================="),a.push("--- "+u.oldFileName+("undefined"==typeof u.oldHeader?"":"\t"+u.oldHeader)),a.push("+++ "+u.newFileName+("undefined"==typeof u.newHeader?"":"\t"+u.newHeader));for(var l=0;l<u.hunks.length;l++){var d=u.hunks[l];a.push("@@ -"+d.oldStart+","+d.oldLines+" +"+d.newStart+","+d.newLines+" @@"),a.push.apply(a,d.lines)}return a.join("\n")+"\n"}function s(e,n,t,r,i,s){return o(e,e,n,t,r,i,s)}n.__esModule=!0,n.structuredPatch=i,n.createTwoFilesPatch=o,n.createPatch=s;var f=t(5)},function(e,n){"use strict";function t(e,n){return e.length===n.length&&r(e,n)}function r(e,n){if(n.length>e.length)return!1;for(var t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}n.__esModule=!0,n.arrayEqual=t,n.arrayStartsWith=r},function(e,n){"use strict";function t(e){for(var n=[],t=void 0,r=void 0,i=0;i<e.length;i++)r=(t=e[i]).added?1:t.removed?-1:0,n.push([r,t.value]);return n}n.__esModule=!0,n.convertChangesToDMP=t},function(e,n){"use strict";function t(e){for(var n=[],t=0;t<e.length;t++){var i=e[t];i.added?n.push("<ins>"):i.removed&&n.push("<del>"),n.push(r(i.value)),i.added?n.push("</ins>"):i.removed&&n.push("</del>")}return n.join("")}function r(e){var n=e;return n=(n=(n=(n=n.replace(/&/g,"&amp;")).replace(/</g,"&lt;")).replace(/>/g,"&gt;")).replace(/"/g,"&quot;")}n.__esModule=!0,n.convertChangesToXML=t}])}),$(function(){$("#result_decidim_accountability_status_id").change(function(){var e=$(this).find(":selected").data("progress");(e||0===e)&&$("#result_progress").val(e)})}),$(function(){$(".diff-i18n_html, .diff-i18n").each(function(e,n){var t=$(n).find(".diff__value"),r=t.data("old-value").replace(/</g,"&lt;").replace(/>/g,"&gt;"),i=t.data("new-value").replace(/</g,"&lt;").replace(/>/g,"&gt;"),o=JsDiff.diffChars(r,i),s="";o.forEach(function(e){var n=e.added,t=e.removed,r=e.value,i="";n?i="#89ffaa":t&&(i="red"),s+=n||t?'<span style="background-color: '+i+'">'+r+"</span>":r}),s=s.replace(/\n/g,"<br><br>"),t.html(s)})}),$(function(){$(window).width()<768&&$(".category--section").click(function(e){$(e.currentTarget).next(".category--elements").toggleClass("active")})});