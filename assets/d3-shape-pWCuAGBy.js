function i(n){return function(){return n}}const V=Math.PI,N=2*V;function x(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function z(n,t){return t<n?-1:t>n?1:t>=n?0:NaN}function D(n){return n}function B(){var n=D,t=z,r=null,u=i(0),f=i(N),a=i(0);function o(e){var c,l=(e=x(e)).length,g,p,k=0,v=new Array(l),h=new Array(l),m=+u.apply(this,arguments),d=Math.min(N,Math.max(-N,f.apply(this,arguments)-m)),A,M=Math.min(Math.abs(d)/l,a.apply(this,arguments)),b=M*(d<0?-1:1),s;for(c=0;c<l;++c)(s=h[v[c]=c]=+n(e[c],c,e))>0&&(k+=s);for(t!=null?v.sort(function(O,w){return t(h[O],h[w])}):r!=null&&v.sort(function(O,w){return r(e[O],e[w])}),c=0,p=k?(d-l*b)/k:0;c<l;++c,m=A)g=v[c],s=h[g],A=m+(s>0?s*p:0)+b,h[g]={data:e[g],index:c,value:s,startAngle:m,endAngle:A,padAngle:M};return h}return o.value=function(e){return arguments.length?(n=typeof e=="function"?e:i(+e),o):n},o.sortValues=function(e){return arguments.length?(t=e,r=null,o):t},o.sort=function(e){return arguments.length?(r=e,t=null,o):r},o.startAngle=function(e){return arguments.length?(u=typeof e=="function"?e:i(+e),o):u},o.endAngle=function(e){return arguments.length?(f=typeof e=="function"?e:i(+e),o):f},o.padAngle=function(e){return arguments.length?(a=typeof e=="function"?e:i(+e),o):a},o}function S(n,t){if((o=n.length)>1)for(var r=1,u,f,a=n[t[0]],o,e=a.length;r<o;++r)for(f=a,a=n[t[r]],u=0;u<e;++u)a[u][1]+=a[u][0]=isNaN(f[u][1])?f[u][0]:f[u][1]}function y(n){for(var t=n.length,r=new Array(t);--t>=0;)r[t]=t;return r}function P(n,t){return n[t]}function E(n){const t=[];return t.key=n,t}function C(){var n=i([]),t=y,r=S,u=P;function f(a){var o=Array.from(n.apply(this,arguments),E),e,c=o.length,l=-1,g;for(const p of a)for(e=0,++l;e<c;++e)(o[e][l]=[0,+u(p,o[e].key,l,a)]).data=p;for(e=0,g=x(t(o));e<c;++e)o[g[e]].index=e;return r(o,g),o}return f.keys=function(a){return arguments.length?(n=typeof a=="function"?a:i(Array.from(a)),f):n},f.value=function(a){return arguments.length?(u=typeof a=="function"?a:i(+a),f):u},f.order=function(a){return arguments.length?(t=a==null?y:typeof a=="function"?a:i(Array.from(a)),f):t},f.offset=function(a){return arguments.length?(r=a??S,f):r},f}function F(n,t){if((u=n.length)>0){for(var r,u,f=0,a=n[0].length,o;f<a;++f){for(o=r=0;r<u;++r)o+=n[r][f][1]||0;if(o)for(r=0;r<u;++r)n[r][f][1]/=o}S(n,t)}}function G(n,t){if((c=n.length)>0)for(var r,u=0,f,a,o,e,c,l=n[t[0]].length;u<l;++u)for(o=e=0,r=0;r<c;++r)(a=(f=n[t[r]][u])[1]-f[0])>0?(f[0]=o,f[1]=o+=a):a<0?(f[1]=e,f[0]=e+=a):(f[0]=0,f[1]=a)}function H(n,t){if((f=n.length)>0){for(var r=0,u=n[t[0]],f,a=u.length;r<a;++r){for(var o=0,e=0;o<f;++o)e+=n[o][r][1]||0;u[r][1]+=u[r][0]=-e/2}S(n,t)}}function J(n,t){if(!(!((o=n.length)>0)||!((a=(f=n[t[0]]).length)>0))){for(var r=0,u=1,f,a,o;u<a;++u){for(var e=0,c=0,l=0;e<o;++e){for(var g=n[t[e]],p=g[u][1]||0,k=g[u-1][1]||0,v=(p-k)/2,h=0;h<e;++h){var m=n[t[h]],d=m[u][1]||0,A=m[u-1][1]||0;v+=d-A}c+=p,l+=v*p}f[u-1][1]+=f[u-1][0]=r,c&&(r-=l/c)}f[u-1][1]+=f[u-1][0]=r,S(n,t)}}function R(n){var t=n.map(W);return y(n).sort(function(r,u){return t[r]-t[u]})}function W(n){for(var t=-1,r=0,u=n.length,f,a=-1/0;++t<u;)(f=+n[t][1])>a&&(a=f,r=t);return r}function q(n){var t=n.map(I);return y(n).sort(function(r,u){return t[r]-t[u]})}function I(n){for(var t=0,r=-1,u=n.length,f;++r<u;)(f=+n[r][1])&&(t+=f);return t}function K(n){return q(n).reverse()}function L(n){var t=n.length,r,u,f=n.map(I),a=R(n),o=0,e=0,c=[],l=[];for(r=0;r<t;++r)u=a[r],o<e?(o+=f[u],c.push(u)):(e+=f[u],l.push(u));return l.reverse().concat(c)}function Q(n){return y(n).reverse()}export{q as a,K as b,L as c,R as d,y as e,Q as f,F as g,G as h,S as i,H as j,J as k,C as l,B as m};