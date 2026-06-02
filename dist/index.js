"use strict";var x=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var b=x(function(I,m){
var k=require('@stdlib/math-base-special-abs/dist');function h(r,e,s,n,v,o,q){var a,d,f,c,i,t,u,y;if(r<=0)return 0;for(d=n,f=q,a=0,u=0,y=0;y<r;y++)c=e[d]-v[f],i=c*c,t=a+i,k(a)>=k(i)?u+=a-t+i:u+=i-t+a,a=t,d+=s,f+=o;return a+u}m.exports=h
});var R=x(function(J,l){
var j=require('@stdlib/strided-base-stride2offset/dist'),w=b();function z(r,e,s,n,v){var o=j(r,s),q=j(r,v);return w(r,e,s,o,n,v,q)}l.exports=z
});var O=x(function(K,E){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=R(),B=b();A(_,"ndarray",B);E.exports=_
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=O(),p,g=D(C(__dirname,"./native.js"));F(g)?p=G:p=g;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
