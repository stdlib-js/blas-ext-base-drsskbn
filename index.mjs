// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.3-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.3-esm/index.mjs";function t(e,r,t,n,d,i,a){var m,o,f,l,p,j,u,b;if(e<=0)return 0;for(o=n,f=a,m=0,u=0,b=0;b<e;b++)j=m+(p=(l=r[o]-d[f])*l),s(m)>=s(p)?u+=m-j+p:u+=p-j+m,m=j,o+=t,f+=i;return m+u}function n(e,s,n,d,i){return t(e,s,n,r(e,n),d,i,r(e,i))}e(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
