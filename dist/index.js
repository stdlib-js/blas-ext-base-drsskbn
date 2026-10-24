"use strict";var x=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var b=x(function(I,m){
var k=require('@stdlib/math-base-special-abs/dist');function h(e,r,i,n,v,o,q){var a,d,f,c,s,t,u,y;if(e<=0)return 0;for(d=n,f=q,a=0,u=0,y=0;y<e;y++)c=r[d]-v[f],s=c*c,t=a+s,k(a)>=k(s)?u+=a-t+s:u+=s-t+a,a=t,d+=i,f+=o;return a+u}m.exports=h
});var R=x(function(J,l){
var j=require('@stdlib/strided-base-stride2offset/dist'),w=b();function z(e,r,i,n,v){var o=j(e,i),q=j(e,v);return w(e,r,i,o,n,v,q)}l.exports=z
});var O=x(function(K,E){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=R(),B=b();A(_,"ndarray",B);E.exports=_
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=O(),p,g=D(C(__dirname,"./native.js"));F(g)?p=G:p=g;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
