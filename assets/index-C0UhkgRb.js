(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const ka="179",oh=0,fl=1,ah=2,Bc=1,Hc=2,Kn=3,pi=0,un=1,En=2,ui=0,ar=1,pl=2,ml=3,gl=4,lh=5,Ci=100,ch=101,uh=102,hh=103,dh=104,fh=200,ph=201,mh=202,gh=203,Go=204,Wo=205,_h=206,vh=207,xh=208,yh=209,bh=210,Sh=211,Mh=212,Eh=213,Th=214,Xo=0,qo=1,Yo=2,hr=3,jo=4,$o=5,Ko=6,Zo=7,Vc=0,wh=1,Ah=2,hi=0,Ch=1,Rh=2,Ph=3,Ih=4,Dh=5,Lh=6,Uh=7,Gc=300,dr=301,fr=302,Jo=303,Qo=304,qs=306,ea=1e3,Pi=1001,ta=1002,Ln=1003,Nh=1004,Qr=1005,Hn=1006,to=1007,Ii=1008,Gn=1009,Wc=1010,Xc=1011,Fr=1012,za=1013,Li=1014,Zn=1015,Wr=1016,Ba=1017,Ha=1018,kr=1020,qc=35902,Yc=1021,jc=1022,Dn=1023,zr=1026,Br=1027,$c=1028,Va=1029,Kc=1030,Ga=1031,Wa=1033,Rs=33776,Ps=33777,Is=33778,Ds=33779,na=35840,ia=35841,ra=35842,sa=35843,oa=36196,aa=37492,la=37496,ca=37808,ua=37809,ha=37810,da=37811,fa=37812,pa=37813,ma=37814,ga=37815,_a=37816,va=37817,xa=37818,ya=37819,ba=37820,Sa=37821,Ls=36492,Ma=36494,Ea=36495,Zc=36283,Ta=36284,wa=36285,Aa=36286,Oh=3200,Fh=3201,Jc=0,kh=1,li="",cn="srgb",pr="srgb-linear",ks="linear",ht="srgb",ki=7680,_l=519,zh=512,Bh=513,Hh=514,Qc=515,Vh=516,Gh=517,Wh=518,Xh=519,Ca=35044,vl="300 es",Vn=2e3,zs=2001;class Oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],no=Math.PI/180,Ra=180/Math.PI;function di(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function Je(i,e,t){return Math.max(e,Math.min(t,i))}function qh(i,e){return(i%e+e)%e}function io(i,e,t){return(1-t)*i+t*e}function Bn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],S=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=S;return}if(h!==S||l!==f||c!==p||u!==g){let m=1-a;const d=l*f+c*p+u*g+h*S,E=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const w=Math.sqrt(M),A=Math.atan2(w,d*E);m=Math.sin(m*A)/w,a=Math.sin(a*A)/w}const v=a*E;if(l=l*m+f*v,c=c*m+p*v,u=u*m+g*v,h=h*m+S*v,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ro.copy(this).projectOnVector(e),this.sub(ro)}reflect(e){return this.sub(ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ro=new I,xl=new Xr;class Ye{constructor(e,t,n,r,s,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],S=r[0],m=r[3],d=r[6],E=r[1],M=r[4],v=r[7],w=r[2],A=r[5],R=r[8];return s[0]=o*S+a*E+l*w,s[3]=o*m+a*M+l*A,s[6]=o*d+a*v+l*R,s[1]=c*S+u*E+h*w,s[4]=c*m+u*M+h*A,s[7]=c*d+u*v+h*R,s[2]=f*S+p*E+g*w,s[5]=f*m+p*M+g*A,s[8]=f*d+p*v+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=t*h+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return e[0]=h*S,e[1]=(r*c-u*n)*S,e[2]=(a*n-r*o)*S,e[3]=f*S,e[4]=(u*t-r*l)*S,e[5]=(r*s-a*t)*S,e[6]=p*S,e[7]=(n*l-c*t)*S,e[8]=(o*t-n*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(so.makeScale(e,t)),this}rotate(e){return this.premultiply(so.makeRotation(-e)),this}translate(e,t){return this.premultiply(so.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const so=new Ye;function eu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yh(){const i=Bs("canvas");return i.style.display="block",i}const yl={};function lr(i){i in yl||(yl[i]=!0,console.warn(i))}function jh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const bl=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sl=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $h(){const i={enabled:!0,workingColorSpace:pr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ht&&(r.r=Jn(r.r),r.g=Jn(r.g),r.b=Jn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(r.r=cr(r.r),r.g=cr(r.g),r.b=cr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===li?ks:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return lr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return lr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pr]:{primaries:e,whitePoint:n,transfer:ks,toXYZ:bl,fromXYZ:Sl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:bl,fromXYZ:Sl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),i}const st=$h();function Jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let zi;class Kh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zi===void 0&&(zi=Bs("canvas")),zi.width=e.width,zi.height=e.height;const r=zi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=zi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Jn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Jn(t[n]/255)*255):t[n]=Jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zh=0;class Xa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=di(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(oo(r[o].image)):s.push(oo(r[o]))}else s=oo(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function oo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jh=0;const ao=new I;class on extends Oi{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,n=Pi,r=Pi,s=Hn,o=Ii,a=Dn,l=Gn,c=on.DEFAULT_ANISOTROPY,u=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=di(),this.name="",this.source=new Xa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ao).x}get height(){return this.source.getSize(ao).y}get depth(){return this.source.getSize(ao).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ea:e.x=e.x-Math.floor(e.x);break;case Pi:e.x=e.x<0?0:1;break;case ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ea:e.y=e.y-Math.floor(e.y);break;case Pi:e.y=e.y<0?0:1;break;case ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Gc;on.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,r=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],S=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+S)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,v=(p+1)/2,w=(d+1)/2,A=(u+f)/4,R=(h+S)/4,D=(g+m)/4;return M>v&&M>w?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=A/n,s=R/n):v>w?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=A/r,s=D/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=R/s,r=D/s),this.set(n,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-S)*(h-S)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-S)/E,this.z=(f-u)/E,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qh extends Oi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new on(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Xa(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends Qh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class tu extends on{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ed extends on{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(s,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),es.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),es.copy(n.boundingBox)),es.applyMatrix4(e.matrixWorld),this.union(es)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),ts.subVectors(this.max,xr),Bi.subVectors(e.a,xr),Hi.subVectors(e.b,xr),Vi.subVectors(e.c,xr),ti.subVectors(Hi,Bi),ni.subVectors(Vi,Hi),yi.subVectors(Bi,Vi);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-yi.z,yi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,yi.z,0,-yi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-yi.y,yi.x,0];return!lo(t,Bi,Hi,Vi,ts)||(t=[1,0,0,0,1,0,0,0,1],!lo(t,Bi,Hi,Vi,ts))?!1:(ns.crossVectors(ti,ni),t=[ns.x,ns.y,ns.z],lo(t,Bi,Hi,Vi,ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xn=[new I,new I,new I,new I,new I,new I,new I,new I],An=new I,es=new qr,Bi=new I,Hi=new I,Vi=new I,ti=new I,ni=new I,yi=new I,xr=new I,ts=new I,ns=new I,bi=new I;function lo(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){bi.fromArray(i,s);const a=r.x*Math.abs(bi.x)+r.y*Math.abs(bi.y)+r.z*Math.abs(bi.z),l=e.dot(bi),c=t.dot(bi),u=n.dot(bi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const td=new qr,yr=new I,co=new I;class qa{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):td.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yr.subVectors(e,this.center);const t=yr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(yr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yr.copy(e.center).add(co)),this.expandByPoint(yr.copy(e.center).sub(co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const qn=new I,uo=new I,is=new I,ii=new I,ho=new I,rs=new I,fo=new I;class nu{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){uo.copy(e).add(t).multiplyScalar(.5),is.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(uo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(is),a=ii.dot(this.direction),l=-ii.dot(is),c=ii.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const S=1/u;h*=S,f*=S,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(uo).addScaledVector(is,f),p}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const n=qn.dot(this.direction),r=qn.dot(qn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,r,s){ho.subVectors(t,e),rs.subVectors(n,e),fo.crossVectors(ho,rs);let o=this.direction.dot(fo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,e);const l=a*this.direction.dot(rs.crossVectors(ii,rs));if(l<0)return null;const c=a*this.direction.dot(ho.cross(ii));if(c<0||l+c>o)return null;const u=-a*ii.dot(fo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,t,n,r,s,o,a,l,c,u,h,f,p,g,S,m){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,f,p,g,S,m)}set(e,t,n,r,s,o,a,l,c,u,h,f,p,g,S,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Gi.setFromMatrixColumn(e,0).length(),s=1/Gi.setFromMatrixColumn(e,1).length(),o=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,S=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-S*c,t[9]=-a*l,t[2]=S-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,S=c*h;t[0]=f+S*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=S+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,S=c*h;t[0]=f-S*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=S-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,S=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+S,t[1]=l*h,t[5]=S*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,S=a*c;t[0]=l*u,t[4]=S-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-S*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,S=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+S,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=S*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nd,e,id)}lookAt(e,t,n){const r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),ri.crossVectors(n,pn),ri.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),ri.crossVectors(n,pn)),ri.normalize(),ss.crossVectors(pn,ri),r[0]=ri.x,r[4]=ss.x,r[8]=pn.x,r[1]=ri.y,r[5]=ss.y,r[9]=pn.y,r[2]=ri.z,r[6]=ss.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],S=n[6],m=n[10],d=n[14],E=n[3],M=n[7],v=n[11],w=n[15],A=r[0],R=r[4],D=r[8],y=r[12],x=r[1],C=r[5],k=r[9],B=r[13],W=r[2],K=r[6],$=r[10],J=r[14],X=r[3],he=r[7],ge=r[11],Ie=r[15];return s[0]=o*A+a*x+l*W+c*X,s[4]=o*R+a*C+l*K+c*he,s[8]=o*D+a*k+l*$+c*ge,s[12]=o*y+a*B+l*J+c*Ie,s[1]=u*A+h*x+f*W+p*X,s[5]=u*R+h*C+f*K+p*he,s[9]=u*D+h*k+f*$+p*ge,s[13]=u*y+h*B+f*J+p*Ie,s[2]=g*A+S*x+m*W+d*X,s[6]=g*R+S*C+m*K+d*he,s[10]=g*D+S*k+m*$+d*ge,s[14]=g*y+S*B+m*J+d*Ie,s[3]=E*A+M*x+v*W+w*X,s[7]=E*R+M*C+v*K+w*he,s[11]=E*D+M*k+v*$+w*ge,s[15]=E*y+M*B+v*J+w*Ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],S=e[7],m=e[11],d=e[15];return g*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*p-n*l*p)+S*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+t*c*h-t*a*p-s*o*h+n*o*p+s*a*u-n*c*u)+d*(-r*a*u-t*l*h+t*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],S=e[13],m=e[14],d=e[15],E=h*m*c-S*f*c+S*l*p-a*m*p-h*l*d+a*f*d,M=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,v=u*S*c-g*h*c+g*a*p-o*S*p-u*a*d+o*h*d,w=g*h*l-u*S*l-g*a*f+o*S*f+u*a*m-o*h*m,A=t*E+n*M+r*v+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=E*R,e[1]=(S*f*s-h*m*s-S*r*p+n*m*p+h*r*d-n*f*d)*R,e[2]=(a*m*s-S*l*s+S*r*c-n*m*c-a*r*d+n*l*d)*R,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*p-n*l*p)*R,e[4]=M*R,e[5]=(u*m*s-g*f*s+g*r*p-t*m*p-u*r*d+t*f*d)*R,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*d-t*l*d)*R,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*R,e[8]=v*R,e[9]=(g*h*s-u*S*s-g*n*p+t*S*p+u*n*d-t*h*d)*R,e[10]=(o*S*s-g*a*s+g*n*c-t*S*c-o*n*d+t*a*d)*R,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*p-t*a*p)*R,e[12]=w*R,e[13]=(u*S*r-g*h*r+g*n*f-t*S*f-u*n*m+t*h*m)*R,e[14]=(g*a*r-o*S*r-g*n*l+t*S*l+o*n*m-t*a*m)*R,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,g=s*h,S=o*u,m=o*h,d=a*h,E=l*c,M=l*u,v=l*h,w=n.x,A=n.y,R=n.z;return r[0]=(1-(S+d))*w,r[1]=(p+v)*w,r[2]=(g-M)*w,r[3]=0,r[4]=(p-v)*A,r[5]=(1-(f+d))*A,r[6]=(m+E)*A,r[7]=0,r[8]=(g+M)*R,r[9]=(m-E)*R,r[10]=(1-(f+S))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Gi.set(r[0],r[1],r[2]).length();const o=Gi.set(r[4],r[5],r[6]).length(),a=Gi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const c=1/s,u=1/o,h=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=h,Cn.elements[9]*=h,Cn.elements[10]*=h,t.setFromRotationMatrix(Cn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Vn,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r);let g,S;if(l)g=s/(o-s),S=o*s/(o-s);else if(a===Vn)g=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(a===zs)g=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Vn,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r);let g,S;if(l)g=1/(o-s),S=o/(o-s);else if(a===Vn)g=-2/(o-s),S=-(o+s)/(o-s);else if(a===zs)g=-1/(o-s),S=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Gi=new I,Cn=new wt,nd=new I(0,0,0),id=new I(1,1,1),ri=new I,ss=new I,pn=new I,Ml=new wt,El=new Xr;class wn{constructor(e=0,t=0,n=0,r=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ml.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ml,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return El.setFromEuler(this),this.setFromQuaternion(El,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class Ya{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rd=0;const Tl=new I,Wi=new Xr,Yn=new wt,os=new I,br=new I,sd=new I,od=new Xr,wl=new I(1,0,0),Al=new I(0,1,0),Cl=new I(0,0,1),Rl={type:"added"},ad={type:"removed"},Xi={type:"childadded",child:null},po={type:"childremoved",child:null};class Yt extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new I,t=new wn,n=new Xr,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new Ye}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(wl,e)}rotateY(e){return this.rotateOnAxis(Al,e)}rotateZ(e){return this.rotateOnAxis(Cl,e)}translateOnAxis(e,t){return Tl.copy(e).applyQuaternion(this.quaternion),this.position.add(Tl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wl,e)}translateY(e){return this.translateOnAxis(Al,e)}translateZ(e){return this.translateOnAxis(Cl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?os.copy(e):os.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(br,os,this.up):Yn.lookAt(os,br,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),Wi.setFromRotationMatrix(Yn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rl),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ad),po.child=e,this.dispatchEvent(po),po.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rl),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,e,sd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,od,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new I(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new I,jn=new I,mo=new I,$n=new I,qi=new I,Yi=new I,Pl=new I,go=new I,_o=new I,vo=new I,xo=new pt,yo=new pt,bo=new pt;class Tn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Rn.subVectors(e,t),r.cross(Rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Rn.subVectors(r,t),jn.subVectors(n,t),mo.subVectors(e,t);const o=Rn.dot(Rn),a=Rn.dot(jn),l=Rn.dot(mo),c=jn.dot(jn),u=jn.dot(mo),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return xo.setScalar(0),yo.setScalar(0),bo.setScalar(0),xo.fromBufferAttribute(e,t),yo.fromBufferAttribute(e,n),bo.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(xo,s.x),o.addScaledVector(yo,s.y),o.addScaledVector(bo,s.z),o}static isFrontFacing(e,t,n,r){return Rn.subVectors(n,t),jn.subVectors(e,t),Rn.cross(jn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Rn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Tn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;qi.subVectors(r,n),Yi.subVectors(s,n),go.subVectors(e,n);const l=qi.dot(go),c=Yi.dot(go);if(l<=0&&c<=0)return t.copy(n);_o.subVectors(e,r);const u=qi.dot(_o),h=Yi.dot(_o);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(qi,o);vo.subVectors(e,s);const p=qi.dot(vo),g=Yi.dot(vo);if(g>=0&&p<=g)return t.copy(s);const S=p*c-l*g;if(S<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Yi,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Pl.subVectors(s,r),a=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(Pl,a);const d=1/(m+S+f);return o=S*d,a=f*d,t.copy(n).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},as={h:0,s:0,l:0};function So(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=st.workingColorSpace){if(e=qh(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=So(o,s,e+1/3),this.g=So(o,s,e),this.b=So(o,s,e-1/3)}return st.colorSpaceToWorking(this,r),this}setStyle(e,t=cn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const n=iu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return st.workingToColorSpace(Qt.copy(this),e),Math.round(Je(Qt.r*255,0,255))*65536+Math.round(Je(Qt.g*255,0,255))*256+Math.round(Je(Qt.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Qt.copy(this),t);const n=Qt.r,r=Qt.g,s=Qt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=cn){st.workingToColorSpace(Qt.copy(this),e);const t=Qt.r,n=Qt.g,r=Qt.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(as);const n=io(si.h,as.h,t),r=io(si.s,as.s,t),s=io(si.l,as.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new et;et.NAMES=iu;let ld=0;class gr extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=di(),this.name="",this.type="Material",this.blending=ar,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Go,this.blendDst=Wo,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Go&&(n.blendSrc=this.blendSrc),this.blendDst!==Wo&&(n.blendDst=this.blendDst),this.blendEquation!==Ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_l&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qn extends gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new I,ls=new be;let cd=0;class Un{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ca,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ls.fromBufferAttribute(this,t),ls.applyMatrix3(e),this.setXY(t,ls.x,ls.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),r=dt(r,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ca&&(e.usage=this.usage),e}}class ru extends Un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class su extends Un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends Un{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ud=0;const Sn=new wt,Mo=new Yt,ji=new I,mn=new qr,Sr=new qr,Xt=new I;class tn extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eu(e)?su:ru)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return Mo.lookAt(e),Mo.updateMatrix(),this.applyMatrix4(Mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Sr.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(mn.min,Sr.min),mn.expandByPoint(Xt),Xt.addVectors(mn.max,Sr.max),mn.expandByPoint(Xt)):(mn.expandByPoint(Sr.min),mn.expandByPoint(Sr.max))}mn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Xt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Xt.fromBufferAttribute(a,c),l&&(ji.fromBufferAttribute(e,c),Xt.add(ji)),r=Math.max(r,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new I,l[D]=new I;const c=new I,u=new I,h=new I,f=new be,p=new be,g=new be,S=new I,m=new I;function d(D,y,x){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,x),f.fromBufferAttribute(s,D),p.fromBufferAttribute(s,y),g.fromBufferAttribute(s,x),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(S.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),a[D].add(S),a[y].add(S),a[x].add(S),l[D].add(m),l[y].add(m),l[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let D=0,y=E.length;D<y;++D){const x=E[D],C=x.start,k=x.count;for(let B=C,W=C+k;B<W;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const M=new I,v=new I,w=new I,A=new I;function R(D){w.fromBufferAttribute(r,D),A.copy(w);const y=a[D];M.copy(y),M.sub(w.multiplyScalar(w.dot(y))).normalize(),v.crossVectors(A,y);const C=v.dot(l[D])<0?-1:1;o.setXYZW(D,M.x,M.y,M.z,C)}for(let D=0,y=E.length;D<y;++D){const x=E[D],C=x.start,k=x.count;for(let B=C,W=C+k;B<W;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),S=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,S),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Un(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Il=new wt,Si=new nu,cs=new qa,Dl=new I,us=new I,hs=new I,ds=new I,Eo=new I,fs=new I,Ll=new I,ps=new I;class oe extends Yt{constructor(e=new tn,t=new Qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){fs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Eo.fromBufferAttribute(h,e),o?fs.addScaledVector(Eo,u):fs.addScaledVector(Eo.sub(t),u))}t.add(fs)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(s),Si.copy(e.ray).recast(e.near),!(cs.containsPoint(Si.origin)===!1&&(Si.intersectSphere(cs,Dl)===null||Si.origin.distanceToSquared(Dl)>(e.far-e.near)**2))&&(Il.copy(s).invert(),Si.copy(e.ray).applyMatrix4(Il),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,S=f.length;g<S;g++){const m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,w=M;v<w;v+=3){const A=a.getX(v),R=a.getX(v+1),D=a.getX(v+2);r=ms(this,d,e,n,c,u,h,A,R,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=g,d=S;m<d;m+=3){const E=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);r=ms(this,o,e,n,c,u,h,E,M,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,S=f.length;g<S;g++){const m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,w=M;v<w;v+=3){const A=v,R=v+1,D=v+2;r=ms(this,d,e,n,c,u,h,A,R,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=g,d=S;m<d;m+=3){const E=m,M=m+1,v=m+2;r=ms(this,o,e,n,c,u,h,E,M,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function hd(i,e,t,n,r,s,o,a){let l;if(e.side===un?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===pi,a),l===null)return null;ps.copy(a),ps.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ps);return c<t.near||c>t.far?null:{distance:c,point:ps.clone(),object:i}}function ms(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,us),i.getVertexPosition(l,hs),i.getVertexPosition(c,ds);const u=hd(i,e,t,n,us,hs,ds,Ll);if(u){const h=new I;Tn.getBarycoord(Ll,us,hs,ds,h),r&&(u.uv=Tn.getInterpolatedAttribute(r,a,l,c,h,new be)),s&&(u.uv1=Tn.getInterpolatedAttribute(s,a,l,c,h,new be)),o&&(u.normal=Tn.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};Tn.getNormal(us,hs,ds,f.normal),u.face=f,u.barycoord=h}return u}class Kt extends tn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(h,2));function g(S,m,d,E,M,v,w,A,R,D,y){const x=v/R,C=w/D,k=v/2,B=w/2,W=A/2,K=R+1,$=D+1;let J=0,X=0;const he=new I;for(let ge=0;ge<$;ge++){const Ie=ge*C-B;for(let Ke=0;Ke<K;Ke++){const At=Ke*x-k;he[S]=At*E,he[m]=Ie*M,he[d]=W,c.push(he.x,he.y,he.z),he[S]=0,he[m]=0,he[d]=A>0?1:-1,u.push(he.x,he.y,he.z),h.push(Ke/R),h.push(1-ge/D),J+=1}}for(let ge=0;ge<D;ge++)for(let Ie=0;Ie<R;Ie++){const Ke=f+Ie+K*ge,At=f+Ie+K*(ge+1),gt=f+(Ie+1)+K*(ge+1),j=f+(Ie+1)+K*ge;l.push(Ke,At,j),l.push(At,gt,j),X+=6}a.addGroup(p,X,y),p+=X,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function sn(i){const e={};for(let t=0;t<i.length;t++){const n=mr(i[t]);for(const r in n)e[r]=n[r]}return e}function dd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ou(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const fd={clone:mr,merge:sn};var pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pd,this.fragmentShader=md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mr(e.uniforms),this.uniformsGroups=dd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class au extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new I,Ul=new be,Nl=new be;class vn extends au{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ra*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,Ul,Nl),t.subVectors(Nl,Ul)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(no*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $i=-90,Ki=1;class gd extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn($i,Ki,e,t);r.layers=this.layers,this.add(r);const s=new vn($i,Ki,e,t);s.layers=this.layers,this.add(s);const o=new vn($i,Ki,e,t);o.layers=this.layers,this.add(o);const a=new vn($i,Ki,e,t);a.layers=this.layers,this.add(a);const l=new vn($i,Ki,e,t);l.layers=this.layers,this.add(l);const c=new vn($i,Ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class lu extends on{constructor(e=[],t=dr,n,r,s,o,a,l,c,u){super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _d extends Ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new lu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Kt(5,5,5),s=new mi({name:"CubemapFromEquirect",uniforms:mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:ui});s.uniforms.tEquirect.value=t;const o=new oe(r,s),a=t.minFilter;return t.minFilter===Ii&&(t.minFilter=Hn),new gd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class qt extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vd={type:"move"};class To{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,n),d=this._getHandJoint(c,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vd)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new qt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ja{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new et(e),this.density=t}clone(){return new ja(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class xd extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class yd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ca,this.updateRanges=[],this.version=0,this.uuid=di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new I;class Hs{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),r=dt(r,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Hs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class cu extends gr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Zi;const Mr=new I,Ji=new I,Qi=new I,er=new be,Er=new be,uu=new wt,gs=new I,Tr=new I,_s=new I,Ol=new be,wo=new be,Fl=new be;class bd extends Yt{constructor(e=new cu){if(super(),this.isSprite=!0,this.type="Sprite",Zi===void 0){Zi=new tn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new yd(t,5);Zi.setIndex([0,1,2,0,2,3]),Zi.setAttribute("position",new Hs(n,3,0,!1)),Zi.setAttribute("uv",new Hs(n,2,3,!1))}this.geometry=Zi,this.material=e,this.center=new be(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ji.setFromMatrixScale(this.matrixWorld),uu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Qi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ji.multiplyScalar(-Qi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;vs(gs.set(-.5,-.5,0),Qi,o,Ji,r,s),vs(Tr.set(.5,-.5,0),Qi,o,Ji,r,s),vs(_s.set(.5,.5,0),Qi,o,Ji,r,s),Ol.set(0,0),wo.set(1,0),Fl.set(1,1);let a=e.ray.intersectTriangle(gs,Tr,_s,!1,Mr);if(a===null&&(vs(Tr.set(-.5,.5,0),Qi,o,Ji,r,s),wo.set(0,1),a=e.ray.intersectTriangle(gs,_s,Tr,!1,Mr),a===null))return;const l=e.ray.origin.distanceTo(Mr);l<e.near||l>e.far||t.push({distance:l,point:Mr.clone(),uv:Tn.getInterpolation(Mr,gs,Tr,_s,Ol,wo,Fl,new be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function vs(i,e,t,n,r,s){er.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Er.x=s*er.x-r*er.y,Er.y=r*er.x+s*er.y):Er.copy(er),i.copy(e),i.x+=Er.x,i.y+=Er.y,i.applyMatrix4(uu)}const Ao=new I,Sd=new I,Md=new Ye;class wi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ao.subVectors(n,t).cross(Sd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ao),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Md.getNormalMatrix(e),r=this.coplanarPoint(Ao).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new qa,Ed=new be(.5,.5),xs=new I;class $a{constructor(e=new wi,t=new wi,n=new wi,r=new wi,s=new wi,o=new wi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],p=s[7],g=s[8],S=s[9],m=s[10],d=s[11],E=s[12],M=s[13],v=s[14],w=s[15];if(r[0].setComponents(c-o,p-u,d-g,w-E).normalize(),r[1].setComponents(c+o,p+u,d+g,w+E).normalize(),r[2].setComponents(c+a,p+h,d+S,w+M).normalize(),r[3].setComponents(c-a,p-h,d-S,w-M).normalize(),n)r[4].setComponents(l,f,m,v).normalize(),r[5].setComponents(c-l,p-f,d-m,w-v).normalize();else if(r[4].setComponents(c-l,p-f,d-m,w-v).normalize(),t===Vn)r[5].setComponents(c+l,p+f,d+m,w+v).normalize();else if(t===zs)r[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){Mi.center.set(0,0,0);const t=Ed.distanceTo(e.center);return Mi.radius=.7071067811865476+t,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(xs.x=r.normal.x>0?e.max.x:e.min.x,xs.y=r.normal.y>0?e.max.y:e.min.y,xs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Td extends on{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hu extends on{constructor(e,t,n=Li,r,s,o,a=Ln,l=Ln,c,u=zr,h=1){if(u!==zr&&u!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Di extends tn{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],u=t/2,h=Math.PI/2*e,f=t,p=2*h+f,g=n*2+s,S=r+1,m=new I,d=new I;for(let E=0;E<=g;E++){let M=0,v=0,w=0,A=0;if(E<=n){const y=E/n,x=y*Math.PI/2;v=-u-e*Math.cos(x),w=e*Math.sin(x),A=-e*Math.cos(x),M=y*h}else if(E<=n+s){const y=(E-n)/s;v=-u+y*t,w=e,A=0,M=h+y*f}else{const y=(E-n-s)/n,x=y*Math.PI/2;v=u+e*Math.sin(x),w=e*Math.cos(x),A=e*Math.sin(x),M=h+f+y*h}const R=Math.max(0,Math.min(1,M/p));let D=0;E===0?D=.5/r:E===g&&(D=-.5/r);for(let y=0;y<=r;y++){const x=y/r,C=x*Math.PI*2,k=Math.sin(C),B=Math.cos(C);d.x=-w*B,d.y=v,d.z=w*k,a.push(d.x,d.y,d.z),m.set(-w*B,A,w*k),m.normalize(),l.push(m.x,m.y,m.z),c.push(x+D,R)}if(E>0){const y=(E-1)*S;for(let x=0;x<r;x++){const C=y+x,k=y+x+1,B=E*S+x,W=E*S+x+1;o.push(C,k,B),o.push(k,W,B)}}}this.setIndex(o),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ft extends tn{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],p=[];let g=0;const S=[],m=n/2;let d=0;E(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new mt(h,3)),this.setAttribute("normal",new mt(f,3)),this.setAttribute("uv",new mt(p,2));function E(){const v=new I,w=new I;let A=0;const R=(t-e)/n;for(let D=0;D<=s;D++){const y=[],x=D/s,C=x*(t-e)+e;for(let k=0;k<=r;k++){const B=k/r,W=B*l+a,K=Math.sin(W),$=Math.cos(W);w.x=C*K,w.y=-x*n+m,w.z=C*$,h.push(w.x,w.y,w.z),v.set(K,R,$).normalize(),f.push(v.x,v.y,v.z),p.push(B,1-x),y.push(g++)}S.push(y)}for(let D=0;D<r;D++)for(let y=0;y<s;y++){const x=S[y][D],C=S[y+1][D],k=S[y+1][D+1],B=S[y][D+1];(e>0||y!==0)&&(u.push(x,C,B),A+=3),(t>0||y!==s-1)&&(u.push(C,k,B),A+=3)}c.addGroup(d,A,0),d+=A}function M(v){const w=g,A=new be,R=new I;let D=0;const y=v===!0?e:t,x=v===!0?1:-1;for(let k=1;k<=r;k++)h.push(0,m*x,0),f.push(0,x,0),p.push(.5,.5),g++;const C=g;for(let k=0;k<=r;k++){const W=k/r*l+a,K=Math.cos(W),$=Math.sin(W);R.x=y*$,R.y=m*x,R.z=y*K,h.push(R.x,R.y,R.z),f.push(0,x,0),A.x=K*.5+.5,A.y=$*.5*x+.5,p.push(A.x,A.y),g++}for(let k=0;k<r;k++){const B=w+k,W=C+k;v===!0?u.push(W,W+1,B):u.push(W+1,W,B),D+=3}c.addGroup(d,D,v===!0?1:2),d+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ft(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class en extends ft{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new en(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ys extends tn{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),c(n),u(),this.setAttribute("position",new mt(s,3)),this.setAttribute("normal",new mt(s.slice(),3)),this.setAttribute("uv",new mt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const M=new I,v=new I,w=new I;for(let A=0;A<t.length;A+=3)p(t[A+0],M),p(t[A+1],v),p(t[A+2],w),l(M,v,w,E)}function l(E,M,v,w){const A=w+1,R=[];for(let D=0;D<=A;D++){R[D]=[];const y=E.clone().lerp(v,D/A),x=M.clone().lerp(v,D/A),C=A-D;for(let k=0;k<=C;k++)k===0&&D===A?R[D][k]=y:R[D][k]=y.clone().lerp(x,k/C)}for(let D=0;D<A;D++)for(let y=0;y<2*(A-D)-1;y++){const x=Math.floor(y/2);y%2===0?(f(R[D][x+1]),f(R[D+1][x]),f(R[D][x])):(f(R[D][x+1]),f(R[D+1][x+1]),f(R[D+1][x]))}}function c(E){const M=new I;for(let v=0;v<s.length;v+=3)M.x=s[v+0],M.y=s[v+1],M.z=s[v+2],M.normalize().multiplyScalar(E),s[v+0]=M.x,s[v+1]=M.y,s[v+2]=M.z}function u(){const E=new I;for(let M=0;M<s.length;M+=3){E.x=s[M+0],E.y=s[M+1],E.z=s[M+2];const v=m(E)/2/Math.PI+.5,w=d(E)/Math.PI+.5;o.push(v,1-w)}g(),h()}function h(){for(let E=0;E<o.length;E+=6){const M=o[E+0],v=o[E+2],w=o[E+4],A=Math.max(M,v,w),R=Math.min(M,v,w);A>.9&&R<.1&&(M<.2&&(o[E+0]+=1),v<.2&&(o[E+2]+=1),w<.2&&(o[E+4]+=1))}}function f(E){s.push(E.x,E.y,E.z)}function p(E,M){const v=E*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function g(){const E=new I,M=new I,v=new I,w=new I,A=new be,R=new be,D=new be;for(let y=0,x=0;y<s.length;y+=9,x+=6){E.set(s[y+0],s[y+1],s[y+2]),M.set(s[y+3],s[y+4],s[y+5]),v.set(s[y+6],s[y+7],s[y+8]),A.set(o[x+0],o[x+1]),R.set(o[x+2],o[x+3]),D.set(o[x+4],o[x+5]),w.copy(E).add(M).add(v).divideScalar(3);const C=m(w);S(A,x+0,E,C),S(R,x+2,M,C),S(D,x+4,v,C)}}function S(E,M,v,w){w<0&&E.x===1&&(o[M]=E.x-1),v.x===0&&v.z===0&&(o[M]=w/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.vertices,e.indices,e.radius,e.details)}}class Ka extends Ys{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ka(e.radius,e.detail)}}class ei{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new be:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new I,r=[],s=[],o=[],a=new I,l=new wt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Je(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Je(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class du extends ei{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new be){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class wd extends du{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Za(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const ys=new I,Co=new Za,Ro=new Za,Po=new Za;class fu extends ei{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new I){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(ys.subVectors(r[0],r[1]).add(r[0]),c=ys);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(ys.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ys),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),p),S=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);S<1e-4&&(S=1),g<1e-4&&(g=S),m<1e-4&&(m=S),Co.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,S,m),Ro.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,S,m),Po.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,S,m)}else this.curveType==="catmullrom"&&(Co.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Ro.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Po.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Co.calc(l),Ro.calc(l),Po.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function kl(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function Ad(i,e){const t=1-i;return t*t*e}function Cd(i,e){return 2*(1-i)*i*e}function Rd(i,e){return i*i*e}function Lr(i,e,t,n){return Ad(i,e)+Cd(i,t)+Rd(i,n)}function Pd(i,e){const t=1-i;return t*t*t*e}function Id(i,e){const t=1-i;return 3*t*t*i*e}function Dd(i,e){return 3*(1-i)*i*i*e}function Ld(i,e){return i*i*i*e}function Ur(i,e,t,n,r){return Pd(i,e)+Id(i,t)+Dd(i,n)+Ld(i,r)}class Ud extends ei{constructor(e=new be,t=new be,n=new be,r=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new be){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ur(e,r.x,s.x,o.x,a.x),Ur(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Nd extends ei{constructor(e=new I,t=new I,n=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new I){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ur(e,r.x,s.x,o.x,a.x),Ur(e,r.y,s.y,o.y,a.y),Ur(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Od extends ei{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fd extends ei{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kd extends ei{constructor(e=new be,t=new be,n=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new be){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Lr(e,r.x,s.x,o.x),Lr(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pu extends ei{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Lr(e,r.x,s.x,o.x),Lr(e,r.y,s.y,o.y),Lr(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zd extends ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(kl(a,l.x,c.x,u.x,h.x),kl(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new be().fromArray(r))}return this}}var Bd=Object.freeze({__proto__:null,ArcCurve:wd,CatmullRomCurve3:fu,CubicBezierCurve:Ud,CubicBezierCurve3:Nd,EllipseCurve:du,LineCurve:Od,LineCurve3:Fd,QuadraticBezierCurve:kd,QuadraticBezierCurve3:pu,SplineCurve:zd});class Hr extends Ys{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Hr(e.radius,e.detail)}}class js extends tn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],S=[],m=[];for(let d=0;d<u;d++){const E=d*f-o;for(let M=0;M<c;M++){const v=M*h-s;g.push(v,-E,0),S.push(0,0,1),m.push(M/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){const M=E+c*d,v=E+c*(d+1),w=E+1+c*(d+1),A=E+1+c*d;p.push(M,v,A),p.push(v,w,A)}this.setIndex(p),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(S,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.width,e.height,e.widthSegments,e.heightSegments)}}class it extends tn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new I,f=new I,p=[],g=[],S=[],m=[];for(let d=0;d<=n;d++){const E=[],M=d/n;let v=0;d===0&&o===0?v=.5/t:d===n&&l===Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){const A=w/t;h.x=-e*Math.cos(r+A*s)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(r+A*s)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),S.push(f.x,f.y,f.z),m.push(A+v,1-M),E.push(c++)}u.push(E)}for(let d=0;d<n;d++)for(let E=0;E<t;E++){const M=u[d][E+1],v=u[d][E],w=u[d+1][E],A=u[d+1][E+1];(d!==0||o>0)&&p.push(M,v,A),(d!==n-1||l<Math.PI)&&p.push(v,w,A)}this.setIndex(p),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(S,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new it(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xn extends tn{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new I,h=new I,f=new I;for(let p=0;p<=n;p++)for(let g=0;g<=r;g++){const S=g/r*s,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(S),h.y=(e+t*Math.cos(m))*Math.sin(S),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(S),u.y=e*Math.sin(S),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=r;g++){const S=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,d=(r+1)*(p-1)+g,E=(r+1)*p+g;o.push(S,m,E),o.push(m,d,E)}this.setIndex(o),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ja extends tn{constructor(e=1,t=.4,n=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:o},n=Math.floor(n),r=Math.floor(r);const a=[],l=[],c=[],u=[],h=new I,f=new I,p=new I,g=new I,S=new I,m=new I,d=new I;for(let M=0;M<=n;++M){const v=M/n*s*Math.PI*2;E(v,s,o,e,p),E(v+.01,s,o,e,g),m.subVectors(g,p),d.addVectors(g,p),S.crossVectors(m,d),d.crossVectors(S,m),S.normalize(),d.normalize();for(let w=0;w<=r;++w){const A=w/r*Math.PI*2,R=-t*Math.cos(A),D=t*Math.sin(A);h.x=p.x+(R*d.x+D*S.x),h.y=p.y+(R*d.y+D*S.y),h.z=p.z+(R*d.z+D*S.z),l.push(h.x,h.y,h.z),f.subVectors(h,p).normalize(),c.push(f.x,f.y,f.z),u.push(M/n),u.push(w/r)}}for(let M=1;M<=n;M++)for(let v=1;v<=r;v++){const w=(r+1)*(M-1)+(v-1),A=(r+1)*M+(v-1),R=(r+1)*M+v,D=(r+1)*(M-1)+v;a.push(w,A,D),a.push(A,R,D)}this.setIndex(a),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(u,2));function E(M,v,w,A,R){const D=Math.cos(M),y=Math.sin(M),x=w/v*M,C=Math.cos(x);R.x=A*(2+C)*.5*D,R.y=A*(2+C)*y*.5,R.z=A*Math.sin(x)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Qa extends tn{constructor(e=new pu(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,l=new I,c=new be;let u=new I;const h=[],f=[],p=[],g=[];S(),this.setIndex(g),this.setAttribute("position",new mt(h,3)),this.setAttribute("normal",new mt(f,3)),this.setAttribute("uv",new mt(p,2));function S(){for(let M=0;M<t;M++)m(M);m(s===!1?t:0),E(),d()}function m(M){u=e.getPointAt(M/t,u);const v=o.normals[M],w=o.binormals[M];for(let A=0;A<=r;A++){const R=A/r*Math.PI*2,D=Math.sin(R),y=-Math.cos(R);l.x=y*v.x+D*w.x,l.y=y*v.y+D*w.y,l.z=y*v.z+D*w.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function d(){for(let M=1;M<=t;M++)for(let v=1;v<=r;v++){const w=(r+1)*(M-1)+(v-1),A=(r+1)*M+(v-1),R=(r+1)*M+v,D=(r+1)*(M-1)+v;g.push(w,A,D),g.push(A,R,D)}}function E(){for(let M=0;M<=t;M++)for(let v=0;v<=r;v++)c.x=M/t,c.y=v/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Qa(new Bd[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class mu extends gr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jc,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hd extends gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vd extends gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class el extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Gd extends el{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Io=new wt,zl=new I,Bl=new I;class gu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $a,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zl.setFromMatrixPosition(e.matrixWorld),t.position.copy(zl),Bl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bl),t.updateMatrixWorld(),Io.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Io)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Hl=new wt,wr=new I,Do=new I;class Wd extends gu{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),wr.setFromMatrixPosition(e.matrixWorld),n.position.copy(wr),Do.copy(n.position),Do.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Do),n.updateMatrixWorld(),r.makeTranslation(-wr.x,-wr.y,-wr.z),Hl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hl,n.coordinateSystem,n.reversedDepth)}}class gi extends el{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Wd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class _u extends au{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xd extends gu{constructor(){super(new _u(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qd extends el{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new Xd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Yd extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class jd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Vl=new wt;class $d{constructor(e,t,n=0,r=1/0){this.ray=new nu(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ya,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Vl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vl),this}intersectObject(e,t=!0,n=[]){return Pa(e,this,n,t),n.sort(Gl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Pa(e[r],this,n,t);return n.sort(Gl),n}}function Gl(i,e){return i.distance-e.distance}function Pa(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Pa(s[o],e,t,!0)}}class Kd extends Oi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Wl(i,e,t,n){const r=Zd(n);switch(t){case Yc:return i*e;case $c:return i*e/r.components*r.byteLength;case Va:return i*e/r.components*r.byteLength;case Kc:return i*e*2/r.components*r.byteLength;case Ga:return i*e*2/r.components*r.byteLength;case jc:return i*e*3/r.components*r.byteLength;case Dn:return i*e*4/r.components*r.byteLength;case Wa:return i*e*4/r.components*r.byteLength;case Rs:case Ps:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Is:case Ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ia:case sa:return Math.max(i,16)*Math.max(e,8)/4;case na:case ra:return Math.max(i,8)*Math.max(e,8)/2;case oa:case aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ha:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case da:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case pa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ma:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ga:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _a:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case va:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case xa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ya:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ba:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Sa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ls:case Ma:case Ea:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zc:case Ta:return Math.ceil(i/4)*Math.ceil(e/4)*8;case wa:case Aa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zd(i){switch(i){case Gn:case Wc:return{byteLength:1,components:1};case Fr:case Xc:case Wr:return{byteLength:2,components:1};case Ba:case Ha:return{byteLength:2,components:4};case Li:case za:case Zn:return{byteLength:4,components:1};case qc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ka}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ka);function vu(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Jd(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],S=h[p];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++f,h[f]=S)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const S=h[p];i.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ef=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,of=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,df=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ff=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Mf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ef=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",If=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Df=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ff=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$f=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ep=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,np=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ip=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,op=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_p=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Up=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Op=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,em=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,om=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,am=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ym=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Em=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Im=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:Qd,alphahash_pars_fragment:ef,alphamap_fragment:tf,alphamap_pars_fragment:nf,alphatest_fragment:rf,alphatest_pars_fragment:sf,aomap_fragment:of,aomap_pars_fragment:af,batching_pars_vertex:lf,batching_vertex:cf,begin_vertex:uf,beginnormal_vertex:hf,bsdfs:df,iridescence_fragment:ff,bumpmap_pars_fragment:pf,clipping_planes_fragment:mf,clipping_planes_pars_fragment:gf,clipping_planes_pars_vertex:_f,clipping_planes_vertex:vf,color_fragment:xf,color_pars_fragment:yf,color_pars_vertex:bf,color_vertex:Sf,common:Mf,cube_uv_reflection_fragment:Ef,defaultnormal_vertex:Tf,displacementmap_pars_vertex:wf,displacementmap_vertex:Af,emissivemap_fragment:Cf,emissivemap_pars_fragment:Rf,colorspace_fragment:Pf,colorspace_pars_fragment:If,envmap_fragment:Df,envmap_common_pars_fragment:Lf,envmap_pars_fragment:Uf,envmap_pars_vertex:Nf,envmap_physical_pars_fragment:qf,envmap_vertex:Of,fog_vertex:Ff,fog_pars_vertex:kf,fog_fragment:zf,fog_pars_fragment:Bf,gradientmap_pars_fragment:Hf,lightmap_pars_fragment:Vf,lights_lambert_fragment:Gf,lights_lambert_pars_fragment:Wf,lights_pars_begin:Xf,lights_toon_fragment:Yf,lights_toon_pars_fragment:jf,lights_phong_fragment:$f,lights_phong_pars_fragment:Kf,lights_physical_fragment:Zf,lights_physical_pars_fragment:Jf,lights_fragment_begin:Qf,lights_fragment_maps:ep,lights_fragment_end:tp,logdepthbuf_fragment:np,logdepthbuf_pars_fragment:ip,logdepthbuf_pars_vertex:rp,logdepthbuf_vertex:sp,map_fragment:op,map_pars_fragment:ap,map_particle_fragment:lp,map_particle_pars_fragment:cp,metalnessmap_fragment:up,metalnessmap_pars_fragment:hp,morphinstance_vertex:dp,morphcolor_vertex:fp,morphnormal_vertex:pp,morphtarget_pars_vertex:mp,morphtarget_vertex:gp,normal_fragment_begin:_p,normal_fragment_maps:vp,normal_pars_fragment:xp,normal_pars_vertex:yp,normal_vertex:bp,normalmap_pars_fragment:Sp,clearcoat_normal_fragment_begin:Mp,clearcoat_normal_fragment_maps:Ep,clearcoat_pars_fragment:Tp,iridescence_pars_fragment:wp,opaque_fragment:Ap,packing:Cp,premultiplied_alpha_fragment:Rp,project_vertex:Pp,dithering_fragment:Ip,dithering_pars_fragment:Dp,roughnessmap_fragment:Lp,roughnessmap_pars_fragment:Up,shadowmap_pars_fragment:Np,shadowmap_pars_vertex:Op,shadowmap_vertex:Fp,shadowmask_pars_fragment:kp,skinbase_vertex:zp,skinning_pars_vertex:Bp,skinning_vertex:Hp,skinnormal_vertex:Vp,specularmap_fragment:Gp,specularmap_pars_fragment:Wp,tonemapping_fragment:Xp,tonemapping_pars_fragment:qp,transmission_fragment:Yp,transmission_pars_fragment:jp,uv_pars_fragment:$p,uv_pars_vertex:Kp,uv_vertex:Zp,worldpos_vertex:Jp,background_vert:Qp,background_frag:em,backgroundCube_vert:tm,backgroundCube_frag:nm,cube_vert:im,cube_frag:rm,depth_vert:sm,depth_frag:om,distanceRGBA_vert:am,distanceRGBA_frag:lm,equirect_vert:cm,equirect_frag:um,linedashed_vert:hm,linedashed_frag:dm,meshbasic_vert:fm,meshbasic_frag:pm,meshlambert_vert:mm,meshlambert_frag:gm,meshmatcap_vert:_m,meshmatcap_frag:vm,meshnormal_vert:xm,meshnormal_frag:ym,meshphong_vert:bm,meshphong_frag:Sm,meshphysical_vert:Mm,meshphysical_frag:Em,meshtoon_vert:Tm,meshtoon_frag:wm,points_vert:Am,points_frag:Cm,shadow_vert:Rm,shadow_frag:Pm,sprite_vert:Im,sprite_frag:Dm},ce={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},zn={basic:{uniforms:sn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:sn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new et(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:sn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:sn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:sn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new et(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:sn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:sn([ce.points,ce.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:sn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:sn([ce.common,ce.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:sn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:sn([ce.sprite,ce.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:sn([ce.common,ce.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:sn([ce.lights,ce.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};zn.physical={uniforms:sn([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const bs={r:0,b:0,g:0},Ei=new wn,Lm=new wt;function Um(i,e,t,n,r,s,o){const a=new et(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?t:e).get(v)),v}function S(M){let v=!1;const w=g(M);w===null?d(a,l):w&&w.isColor&&(d(w,1),v=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,v){const w=g(v);w&&(w.isCubeTexture||w.mapping===qs)?(u===void 0&&(u=new oe(new Kt(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:mr(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ei.copy(v.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Lm.makeRotationFromEuler(Ei)),u.material.toneMapped=st.getTransfer(w.colorSpace)!==ht,(h!==w||f!==w.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,p=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new oe(new js(2,2),new mi({name:"BackgroundMaterial",uniforms:mr(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=st.getTransfer(w.colorSpace)!==ht,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function d(M,v){M.getRGB(bs,ou(i)),n.buffers.color.setClear(bs.r,bs.g,bs.b,v,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,d(a,l)},render:S,addToRenderList:m,dispose:E}}function Nm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(x,C,k,B,W){let K=!1;const $=h(B,k,C);s!==$&&(s=$,c(s.object)),K=p(x,B,k,W),K&&g(x,B,k,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,v(x,C,k,B),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function h(x,C,k){const B=k.wireframe===!0;let W=n[x.id];W===void 0&&(W={},n[x.id]=W);let K=W[C.id];K===void 0&&(K={},W[C.id]=K);let $=K[B];return $===void 0&&($=f(l()),K[B]=$),$}function f(x){const C=[],k=[],B=[];for(let W=0;W<t;W++)C[W]=0,k[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:k,attributeDivisors:B,object:x,attributes:{},index:null}}function p(x,C,k,B){const W=s.attributes,K=C.attributes;let $=0;const J=k.getAttributes();for(const X in J)if(J[X].location>=0){const ge=W[X];let Ie=K[X];if(Ie===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(Ie=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(Ie=x.instanceColor)),ge===void 0||ge.attribute!==Ie||Ie&&ge.data!==Ie.data)return!0;$++}return s.attributesNum!==$||s.index!==B}function g(x,C,k,B){const W={},K=C.attributes;let $=0;const J=k.getAttributes();for(const X in J)if(J[X].location>=0){let ge=K[X];ge===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(ge=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(ge=x.instanceColor));const Ie={};Ie.attribute=ge,ge&&ge.data&&(Ie.data=ge.data),W[X]=Ie,$++}s.attributes=W,s.attributesNum=$,s.index=B}function S(){const x=s.newAttributes;for(let C=0,k=x.length;C<k;C++)x[C]=0}function m(x){d(x,0)}function d(x,C){const k=s.newAttributes,B=s.enabledAttributes,W=s.attributeDivisors;k[x]=1,B[x]===0&&(i.enableVertexAttribArray(x),B[x]=1),W[x]!==C&&(i.vertexAttribDivisor(x,C),W[x]=C)}function E(){const x=s.newAttributes,C=s.enabledAttributes;for(let k=0,B=C.length;k<B;k++)C[k]!==x[k]&&(i.disableVertexAttribArray(k),C[k]=0)}function M(x,C,k,B,W,K,$){$===!0?i.vertexAttribIPointer(x,C,k,W,K):i.vertexAttribPointer(x,C,k,B,W,K)}function v(x,C,k,B){S();const W=B.attributes,K=k.getAttributes(),$=C.defaultAttributeValues;for(const J in K){const X=K[J];if(X.location>=0){let he=W[J];if(he===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(he=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(he=x.instanceColor)),he!==void 0){const ge=he.normalized,Ie=he.itemSize,Ke=e.get(he);if(Ke===void 0)continue;const At=Ke.buffer,gt=Ke.type,j=Ke.bytesPerElement,de=gt===i.INT||gt===i.UNSIGNED_INT||he.gpuType===za;if(he.isInterleavedBufferAttribute){const se=he.data,Oe=se.stride,Fe=he.offset;if(se.isInstancedInterleavedBuffer){for(let Ge=0;Ge<X.locationSize;Ge++)d(X.location+Ge,se.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ge=0;Ge<X.locationSize;Ge++)m(X.location+Ge);i.bindBuffer(i.ARRAY_BUFFER,At);for(let Ge=0;Ge<X.locationSize;Ge++)M(X.location+Ge,Ie/X.locationSize,gt,ge,Oe*j,(Fe+Ie/X.locationSize*Ge)*j,de)}else{if(he.isInstancedBufferAttribute){for(let se=0;se<X.locationSize;se++)d(X.location+se,he.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let se=0;se<X.locationSize;se++)m(X.location+se);i.bindBuffer(i.ARRAY_BUFFER,At);for(let se=0;se<X.locationSize;se++)M(X.location+se,Ie/X.locationSize,gt,ge,Ie*j,Ie/X.locationSize*se*j,de)}}else if($!==void 0){const ge=$[J];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(X.location,ge);break;case 3:i.vertexAttrib3fv(X.location,ge);break;case 4:i.vertexAttrib4fv(X.location,ge);break;default:i.vertexAttrib1fv(X.location,ge)}}}}E()}function w(){D();for(const x in n){const C=n[x];for(const k in C){const B=C[k];for(const W in B)u(B[W].object),delete B[W];delete C[k]}delete n[x]}}function A(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const k in C){const B=C[k];for(const W in B)u(B[W].object),delete B[W];delete C[k]}delete n[x.id]}function R(x){for(const C in n){const k=n[C];if(k[x.id]===void 0)continue;const B=k[x.id];for(const W in B)u(B[W].object),delete B[W];delete k[x.id]}}function D(){y(),o=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:m,disableUnusedAttributes:E}}function Om(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let S=0;S<h;S++)g+=u[S]*f[S];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Fm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Dn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===Wr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Gn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Zn&&!D)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:w,maxSamples:A}}function km(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new wi,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,S=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const E=s?0:n,M=E*4;let v=d.clippingState||null;l.value=v,v=u(g,f,M,p);for(let w=0;w!==M;++w)v[w]=t[w];d.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const S=h!==null?h.length:0;let m=null;if(S!==0){if(m=l.value,g!==!0||m===null){const d=p+S*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,v=p;M!==S;++M,v+=4)o.copy(h[M]).applyMatrix4(E,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function zm(i){let e=new WeakMap;function t(o,a){return a===Jo?o.mapping=dr:a===Qo&&(o.mapping=fr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jo||a===Qo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new _d(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const sr=4,Xl=[.125,.215,.35,.446,.526,.582],Ri=20,Lo=new _u,ql=new et;let Uo=null,No=0,Oo=0,Fo=!1;const Ai=(1+Math.sqrt(5))/2,tr=1/Ai,Yl=[new I(-Ai,tr,0),new I(Ai,tr,0),new I(-tr,0,Ai),new I(tr,0,Ai),new I(0,Ai,-tr),new I(0,Ai,tr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Bm=new I;class jl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=Bm}=s;Uo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uo,No,Oo),this._renderer.xr.enabled=Fo,e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Wr,format:Dn,colorSpace:pr,depthBuffer:!1},r=$l(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$l(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hm(s)),this._blurMaterial=Vm(s,e,t)}return r}_compileMaterial(e){const t=new oe(this._lodPlanes[0],e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,n,r,s){const l=new vn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(ql),h.toneMapping=hi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const S=new Qn({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),m=new oe(new Kt,S);let d=!1;const E=e.background;E?E.isColor&&(S.color.copy(E),e.background=null,d=!0):(S.color.copy(ql),d=!0);for(let M=0;M<6;M++){const v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const w=this._cubeSize;Ss(r,v*w,M>2?w:0,w,w),h.setRenderTarget(r),d&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===dr||e.mapping===fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new oe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ss(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Lo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Yl[(r-s-1)%Yl.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new oe(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ri-1),S=s/g,m=isFinite(s)?1+Math.floor(u*S):Ri;m>Ri&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);const d=[];let E=0;for(let R=0;R<Ri;++R){const D=R/S,y=Math.exp(-D*D/2);d.push(y),R===0?E+=y:R<m&&(E+=2*y)}for(let R=0;R<d.length;R++)d[R]=d[R]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const v=this._sizeLods[r],w=3*v*(r>M-sr?r-M+sr:0),A=4*(this._cubeSize-v);Ss(t,w,A,3*v,2*v),l.setRenderTarget(t),l.render(h,Lo)}}function Hm(i){const e=[],t=[],n=[];let r=i;const s=i-sr+1+Xl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-sr?l=Xl[o-i+sr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,S=3,m=2,d=1,E=new Float32Array(S*g*p),M=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,D=A>2?0:-1,y=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];E.set(y,S*g*A),M.set(f,m*g*A);const x=[A,A,A,A,A,A];v.set(x,d*g*A)}const w=new tn;w.setAttribute("position",new Un(E,S)),w.setAttribute("uv",new Un(M,m)),w.setAttribute("faceIndex",new Un(v,d)),e.push(w),r>sr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $l(i,e,t){const n=new Ui(i,e,t);return n.texture.mapping=qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ss(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Vm(i,e,t){const n=new Float32Array(Ri),r=new I(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Kl(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Zl(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function tl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Jo||l===Qo,u=l===dr||l===fr;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new jl(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new jl(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Wm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&lr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Xm(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,g=h.attributes.position;let S=0;if(p!==null){const E=p.array;S=p.version;for(let M=0,v=E.length;M<v;M+=3){const w=E[M+0],A=E[M+1],R=E[M+2];f.push(w,A,A,R,R,w)}}else if(g!==void 0){const E=g.array;S=g.version;for(let M=0,v=E.length/3-1;M<v;M+=3){const w=M+0,A=M+1,R=M+2;f.push(w,A,A,R,R,w)}}else return;const m=new(eu(f)?su:ru)(f,1);m.version=S;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function qm(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,s,f*o),t.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,f*o,g),t.update(p,n,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function h(f,p,g,S){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],S[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,S,0,g);let d=0;for(let E=0;E<g;E++)d+=p[E]*S[E];t.update(d,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Ym(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function jm(i,e,t){const n=new WeakMap,r=new pt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let x=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var p=x;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),S===!0&&(v=2),m===!0&&(v=3);let w=a.attributes.position.count*v,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*A*4*h),D=new tu(R,w,A,h);D.type=Zn,D.needsUpdate=!0;const y=v*4;for(let C=0;C<h;C++){const k=d[C],B=E[C],W=M[C],K=w*A*4*C;for(let $=0;$<k.count;$++){const J=$*y;g===!0&&(r.fromBufferAttribute(k,$),R[K+J+0]=r.x,R[K+J+1]=r.y,R[K+J+2]=r.z,R[K+J+3]=0),S===!0&&(r.fromBufferAttribute(B,$),R[K+J+4]=r.x,R[K+J+5]=r.y,R[K+J+6]=r.z,R[K+J+7]=0),m===!0&&(r.fromBufferAttribute(W,$),R[K+J+8]=r.x,R[K+J+9]=r.y,R[K+J+10]=r.z,R[K+J+11]=W.itemSize===4?r.w:1)}}f={count:h,texture:D,size:new be(w,A)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const S=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",S),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function $m(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const xu=new on,Jl=new hu(1,1),yu=new tu,bu=new ed,Su=new lu,Ql=[],ec=[],tc=new Float32Array(16),nc=new Float32Array(9),ic=new Float32Array(4);function _r(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ql[r];if(s===void 0&&(s=new Float32Array(r),Ql[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function $s(i,e){let t=ec[e];t===void 0&&(t=new Int32Array(e),ec[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Km(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}function Jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}function Qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}function e0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Bt(t,n))return;ic.set(n),i.uniformMatrix2fv(this.addr,!1,ic),Ht(t,n)}}function t0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Bt(t,n))return;nc.set(n),i.uniformMatrix3fv(this.addr,!1,nc),Ht(t,n)}}function n0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Bt(t,n))return;tc.set(n),i.uniformMatrix4fv(this.addr,!1,tc),Ht(t,n)}}function i0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function r0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}function s0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}function o0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}function a0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function l0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}function c0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}function u0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}function h0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Jl.compareFunction=Qc,s=Jl):s=xu,t.setTexture2D(e||s,r)}function d0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||bu,r)}function f0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Su,r)}function p0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||yu,r)}function m0(i){switch(i){case 5126:return Km;case 35664:return Zm;case 35665:return Jm;case 35666:return Qm;case 35674:return e0;case 35675:return t0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return r0;case 35668:case 35672:return s0;case 35669:case 35673:return o0;case 5125:return a0;case 36294:return l0;case 36295:return c0;case 36296:return u0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return d0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return p0}}function g0(i,e){i.uniform1fv(this.addr,e)}function _0(i,e){const t=_r(e,this.size,2);i.uniform2fv(this.addr,t)}function v0(i,e){const t=_r(e,this.size,3);i.uniform3fv(this.addr,t)}function x0(i,e){const t=_r(e,this.size,4);i.uniform4fv(this.addr,t)}function y0(i,e){const t=_r(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function b0(i,e){const t=_r(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function S0(i,e){const t=_r(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function M0(i,e){i.uniform1iv(this.addr,e)}function E0(i,e){i.uniform2iv(this.addr,e)}function T0(i,e){i.uniform3iv(this.addr,e)}function w0(i,e){i.uniform4iv(this.addr,e)}function A0(i,e){i.uniform1uiv(this.addr,e)}function C0(i,e){i.uniform2uiv(this.addr,e)}function R0(i,e){i.uniform3uiv(this.addr,e)}function P0(i,e){i.uniform4uiv(this.addr,e)}function I0(i,e,t){const n=this.cache,r=e.length,s=$s(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),Ht(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||xu,s[o])}function D0(i,e,t){const n=this.cache,r=e.length,s=$s(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),Ht(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||bu,s[o])}function L0(i,e,t){const n=this.cache,r=e.length,s=$s(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),Ht(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Su,s[o])}function U0(i,e,t){const n=this.cache,r=e.length,s=$s(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),Ht(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||yu,s[o])}function N0(i){switch(i){case 5126:return g0;case 35664:return _0;case 35665:return v0;case 35666:return x0;case 35674:return y0;case 35675:return b0;case 35676:return S0;case 5124:case 35670:return M0;case 35667:case 35671:return E0;case 35668:case 35672:return T0;case 35669:case 35673:return w0;case 5125:return A0;case 36294:return C0;case 36295:return R0;case 36296:return P0;case 35678:case 36198:case 36298:case 36306:case 35682:return I0;case 35679:case 36299:case 36307:return D0;case 35680:case 36300:case 36308:case 36293:return L0;case 36289:case 36303:case 36311:case 36292:return U0}}class O0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=m0(t.type)}}class F0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=N0(t.type)}}class k0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const ko=/(\w+)(\])?(\[|\.)?/g;function rc(i,e){i.seq.push(e),i.map[e.id]=e}function z0(i,e,t){const n=i.name,r=n.length;for(ko.lastIndex=0;;){const s=ko.exec(n),o=ko.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){rc(t,c===void 0?new O0(a,i,e):new F0(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new k0(a),rc(t,h)),t=h}}}class Us{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);z0(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function sc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const B0=37297;let H0=0;function V0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const oc=new Ye;function G0(i){st._getMatrix(oc,st.workingColorSpace,i);const e=`mat3( ${oc.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case ks:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ac(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+V0(i.getShaderSource(e),a)}else return s}function W0(i,e){const t=G0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function X0(i,e){let t;switch(e){case Ch:t="Linear";break;case Rh:t="Reinhard";break;case Ph:t="Cineon";break;case Ih:t="ACESFilmic";break;case Lh:t="AgX";break;case Uh:t="Neutral";break;case Dh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ms=new I;function q0(){st.getLuminanceCoefficients(Ms);const i=Ms.x.toFixed(4),e=Ms.y.toFixed(4),t=Ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function j0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Cr(i){return i!==""}function lc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const K0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ia(i){return i.replace(K0,J0)}const Z0=new Map;function J0(i,e){let t=$e[e];if(t===void 0){const n=Z0.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ia(t)}const Q0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uc(i){return i.replace(Q0,eg)}function eg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function ng(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case dr:case fr:e="ENVMAP_TYPE_CUBE";break;case qs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ig(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===fr&&(e="ENVMAP_MODE_REFRACTION"),e}function rg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vc:e="ENVMAP_BLENDING_MULTIPLY";break;case wh:e="ENVMAP_BLENDING_MIX";break;case Ah:e="ENVMAP_BLENDING_ADD";break}return e}function sg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function og(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=tg(t),c=ng(t),u=ig(t),h=rg(t),f=sg(t),p=Y0(t),g=j0(s),S=r.createProgram();let m,d,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cr).join(`
`),d.length>0&&(d+=`
`)):(m=[hc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),d=[hc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?$e.tonemapping_pars_fragment:"",t.toneMapping!==hi?X0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,W0("linearToOutputTexel",t.outputColorSpace),q0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cr).join(`
`)),o=Ia(o),o=lc(o,t),o=cc(o,t),a=Ia(a),a=lc(a,t),a=cc(a,t),o=uc(o),a=uc(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=E+m+o,v=E+d+a,w=sc(r,r.VERTEX_SHADER,M),A=sc(r,r.FRAGMENT_SHADER,v);r.attachShader(S,w),r.attachShader(S,A),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function R(C){if(i.debug.checkShaderErrors){const k=r.getProgramInfoLog(S)||"",B=r.getShaderInfoLog(w)||"",W=r.getShaderInfoLog(A)||"",K=k.trim(),$=B.trim(),J=W.trim();let X=!0,he=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,w,A);else{const ge=ac(r,w,"vertex"),Ie=ac(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+K+`
`+ge+`
`+Ie)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):($===""||J==="")&&(he=!1);he&&(C.diagnostics={runnable:X,programLog:K,vertexShader:{log:$,prefix:m},fragmentShader:{log:J,prefix:d}})}r.deleteShader(w),r.deleteShader(A),D=new Us(r,S),y=$0(r,S)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(S,B0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=H0++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=w,this.fragmentShader=A,this}let ag=0;class lg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cg(e),t.set(e,n)),n}}class cg{constructor(e){this.id=ag++,this.code=e,this.usedTimes=0}}function ug(i,e,t,n,r,s,o){const a=new Ya,l=new lg,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,x,C,k,B){const W=k.fog,K=B.geometry,$=y.isMeshStandardMaterial?k.environment:null,J=(y.isMeshStandardMaterial?t:e).get(y.envMap||$),X=J&&J.mapping===qs?J.image.height:null,he=g[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ge=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ie=ge!==void 0?ge.length:0;let Ke=0;K.morphAttributes.position!==void 0&&(Ke=1),K.morphAttributes.normal!==void 0&&(Ke=2),K.morphAttributes.color!==void 0&&(Ke=3);let At,gt,j,de;if(he){const lt=zn[he];At=lt.vertexShader,gt=lt.fragmentShader}else At=y.vertexShader,gt=y.fragmentShader,l.update(y),j=l.getVertexShaderID(y),de=l.getFragmentShaderID(y);const se=i.getRenderTarget(),Oe=i.state.buffers.depth.getReversed(),Fe=B.isInstancedMesh===!0,Ge=B.isBatchedMesh===!0,Ut=!!y.map,nt=!!y.matcap,L=!!J,bt=!!y.aoMap,Le=!!y.lightMap,ot=!!y.bumpMap,Pe=!!y.normalMap,Ct=!!y.displacementMap,ye=!!y.emissiveMap,Ze=!!y.metalnessMap,Wt=!!y.roughnessMap,Nt=y.anisotropy>0,T=y.clearcoat>0,_=y.dispersion>0,F=y.iridescence>0,Y=y.sheen>0,Q=y.transmission>0,q=Nt&&!!y.anisotropyMap,Ce=T&&!!y.clearcoatMap,re=T&&!!y.clearcoatNormalMap,Te=T&&!!y.clearcoatRoughnessMap,we=F&&!!y.iridescenceMap,ne=F&&!!y.iridescenceThicknessMap,me=Y&&!!y.sheenColorMap,Be=Y&&!!y.sheenRoughnessMap,Ae=!!y.specularMap,fe=!!y.specularColorMap,qe=!!y.specularIntensityMap,U=Q&&!!y.transmissionMap,ie=Q&&!!y.thicknessMap,ae=!!y.gradientMap,xe=!!y.alphaMap,ee=y.alphaTest>0,Z=!!y.alphaHash,Me=!!y.extensions;let We=hi;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(We=i.toneMapping);const St={shaderID:he,shaderType:y.type,shaderName:y.name,vertexShader:At,fragmentShader:gt,defines:y.defines,customVertexShaderID:j,customFragmentShaderID:de,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ge,batchingColor:Ge&&B._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&B.instanceColor!==null,instancingMorph:Fe&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:pr,alphaToCoverage:!!y.alphaToCoverage,map:Ut,matcap:nt,envMap:L,envMapMode:L&&J.mapping,envMapCubeUVHeight:X,aoMap:bt,lightMap:Le,bumpMap:ot,normalMap:Pe,displacementMap:f&&Ct,emissiveMap:ye,normalMapObjectSpace:Pe&&y.normalMapType===kh,normalMapTangentSpace:Pe&&y.normalMapType===Jc,metalnessMap:Ze,roughnessMap:Wt,anisotropy:Nt,anisotropyMap:q,clearcoat:T,clearcoatMap:Ce,clearcoatNormalMap:re,clearcoatRoughnessMap:Te,dispersion:_,iridescence:F,iridescenceMap:we,iridescenceThicknessMap:ne,sheen:Y,sheenColorMap:me,sheenRoughnessMap:Be,specularMap:Ae,specularColorMap:fe,specularIntensityMap:qe,transmission:Q,transmissionMap:U,thicknessMap:ie,gradientMap:ae,opaque:y.transparent===!1&&y.blending===ar&&y.alphaToCoverage===!1,alphaMap:xe,alphaTest:ee,alphaHash:Z,combine:y.combine,mapUv:Ut&&S(y.map.channel),aoMapUv:bt&&S(y.aoMap.channel),lightMapUv:Le&&S(y.lightMap.channel),bumpMapUv:ot&&S(y.bumpMap.channel),normalMapUv:Pe&&S(y.normalMap.channel),displacementMapUv:Ct&&S(y.displacementMap.channel),emissiveMapUv:ye&&S(y.emissiveMap.channel),metalnessMapUv:Ze&&S(y.metalnessMap.channel),roughnessMapUv:Wt&&S(y.roughnessMap.channel),anisotropyMapUv:q&&S(y.anisotropyMap.channel),clearcoatMapUv:Ce&&S(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&S(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&S(y.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&S(y.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&S(y.iridescenceThicknessMap.channel),sheenColorMapUv:me&&S(y.sheenColorMap.channel),sheenRoughnessMapUv:Be&&S(y.sheenRoughnessMap.channel),specularMapUv:Ae&&S(y.specularMap.channel),specularColorMapUv:fe&&S(y.specularColorMap.channel),specularIntensityMapUv:qe&&S(y.specularIntensityMap.channel),transmissionMapUv:U&&S(y.transmissionMap.channel),thicknessMapUv:ie&&S(y.thicknessMap.channel),alphaMapUv:xe&&S(y.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Pe||Nt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&(Ut||xe),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Oe,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Ke,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:Ut&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===ht,decodeVideoTextureEmissive:ye&&y.emissiveMap.isVideoTexture===!0&&st.getTransfer(y.emissiveMap.colorSpace)===ht,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===En,flipSided:y.side===un,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Me&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&y.extensions.multiDraw===!0||Ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function d(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)x.push(C),x.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(E(x,y),M(x,y),x.push(i.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function E(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function M(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const x=g[y.type];let C;if(x){const k=zn[x];C=fd.clone(k.uniforms)}else C=y.uniforms;return C}function w(y,x){let C;for(let k=0,B=u.length;k<B;k++){const W=u[k];if(W.cacheKey===x){C=W,++C.usedTimes;break}}return C===void 0&&(C=new og(i,x,y,s),u.push(C)),C}function A(y){if(--y.usedTimes===0){const x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),y.destroy()}}function R(y){l.remove(y)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:w,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:D}}function hg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function dg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function dc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function fc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,p,g,S,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:S,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=S,d.group=m),e++,d}function a(h,f,p,g,S,m){const d=o(h,f,p,g,S,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(h,f,p,g,S,m){const d=o(h,f,p,g,S,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||dg),n.length>1&&n.sort(f||dc),r.length>1&&r.sort(f||dc)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function fg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new fc,i.set(n,[o])):r>=s.length?(o=new fc,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function pg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new et};break;case"SpotLight":t={position:new I,direction:new I,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function mg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let gg=0;function _g(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function vg(i){const e=new pg,t=mg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const r=new I,s=new wt,o=new wt;function a(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,S=0,m=0,d=0,E=0,M=0,v=0,w=0,A=0,R=0;c.sort(_g);for(let y=0,x=c.length;y<x;y++){const C=c[y],k=C.color,B=C.intensity,W=C.distance,K=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=k.r*B,h+=k.g*B,f+=k.b*B;else if(C.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(C.sh.coefficients[$],B);R++}else if(C.isDirectionalLight){const $=e.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const J=C.shadow,X=t.get(C);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=C.shadow.matrix,E++}n.directional[p]=$,p++}else if(C.isSpotLight){const $=e.get(C);$.position.setFromMatrixPosition(C.matrixWorld),$.color.copy(k).multiplyScalar(B),$.distance=W,$.coneCos=Math.cos(C.angle),$.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),$.decay=C.decay,n.spot[S]=$;const J=C.shadow;if(C.map&&(n.spotLightMap[w]=C.map,w++,J.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[S]=J.matrix,C.castShadow){const X=t.get(C);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,n.spotShadow[S]=X,n.spotShadowMap[S]=K,v++}S++}else if(C.isRectAreaLight){const $=e.get(C);$.color.copy(k).multiplyScalar(B),$.halfWidth.set(C.width*.5,0,0),$.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=$,m++}else if(C.isPointLight){const $=e.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),$.distance=C.distance,$.decay=C.decay,C.castShadow){const J=C.shadow,X=t.get(C);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,X.shadowCameraNear=J.camera.near,X.shadowCameraFar=J.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=C.shadow.matrix,M++}n.point[g]=$,g++}else if(C.isHemisphereLight){const $=e.get(C);$.skyColor.copy(C.color).multiplyScalar(B),$.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[d]=$,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==S||D.rectAreaLength!==m||D.hemiLength!==d||D.numDirectionalShadows!==E||D.numPointShadows!==M||D.numSpotShadows!==v||D.numSpotMaps!==w||D.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=S,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,D.directionalLength=p,D.pointLength=g,D.spotLength=S,D.rectAreaLength=m,D.hemiLength=d,D.numDirectionalShadows=E,D.numPointShadows=M,D.numSpotShadows=v,D.numSpotMaps=w,D.numLightProbes=R,n.version=gg++)}function l(c,u){let h=0,f=0,p=0,g=0,S=0;const m=u.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){const M=c[d];if(M.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(M.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const v=n.hemi[S];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),S++}}}return{setup:a,setupView:l,state:n}}function pc(i){const e=new vg(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function xg(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new pc(i),e.set(r,[a])):s>=o.length?(a=new pc(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Sg(i,e,t){let n=new $a;const r=new be,s=new be,o=new pt,a=new Hd({depthPacking:Fh}),l=new Vd,c={},u=t.maxTextureSize,h={[pi]:un,[un]:pi,[En]:En},f=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:yg,fragmentShader:bg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new tn;g.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new oe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let d=this.type;this.render=function(A,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const y=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),k=i.state;k.setBlending(ui),k.buffers.depth.getReversed()?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=d!==Kn&&this.type===Kn,W=d===Kn&&this.type!==Kn;for(let K=0,$=A.length;K<$;K++){const J=A[K],X=J.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const he=X.getFrameExtents();if(r.multiply(he),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/he.x),r.x=s.x*he.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/he.y),r.y=s.y*he.y,X.mapSize.y=s.y)),X.map===null||B===!0||W===!0){const Ie=this.type!==Kn?{minFilter:Ln,magFilter:Ln}:{};X.map!==null&&X.map.dispose(),X.map=new Ui(r.x,r.y,Ie),X.map.texture.name=J.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const ge=X.getViewportCount();for(let Ie=0;Ie<ge;Ie++){const Ke=X.getViewport(Ie);o.set(s.x*Ke.x,s.y*Ke.y,s.x*Ke.z,s.y*Ke.w),k.viewport(o),X.updateMatrices(J,Ie),n=X.getFrustum(),v(R,D,X.camera,J,this.type)}X.isPointLightShadow!==!0&&this.type===Kn&&E(X,D),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(y,x,C)};function E(A,R){const D=e.update(S);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ui(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,D,f,S,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,D,p,S,null)}function M(A,R,D,y){let x=null;const C=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)x=C;else if(x=D.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const k=x.uuid,B=R.uuid;let W=c[k];W===void 0&&(W={},c[k]=W);let K=W[B];K===void 0&&(K=x.clone(),W[B]=K,R.addEventListener("dispose",w)),x=K}if(x.visible=R.visible,x.wireframe=R.wireframe,y===Kn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:h[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const k=i.properties.get(x);k.light=D}return x}function v(A,R,D,y,x){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===Kn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const B=e.update(A),W=A.material;if(Array.isArray(W)){const K=B.groups;for(let $=0,J=K.length;$<J;$++){const X=K[$],he=W[X.materialIndex];if(he&&he.visible){const ge=M(A,he,y,x);A.onBeforeShadow(i,A,R,D,B,ge,X),i.renderBufferDirect(D,null,B,ge,A,X),A.onAfterShadow(i,A,R,D,B,ge,X)}}}else if(W.visible){const K=M(A,W,y,x);A.onBeforeShadow(i,A,R,D,B,K,null),i.renderBufferDirect(D,null,B,K,A,null),A.onAfterShadow(i,A,R,D,B,K,null)}}const k=A.children;for(let B=0,W=k.length;B<W;B++)v(k[B],R,D,y,x)}function w(A){A.target.removeEventListener("dispose",w);for(const D in c){const y=c[D],x=A.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const Mg={[Xo]:qo,[Yo]:Ko,[jo]:Zo,[hr]:$o,[qo]:Xo,[Ko]:Yo,[Zo]:jo,[$o]:hr};function Eg(i,e){function t(){let U=!1;const ie=new pt;let ae=null;const xe=new pt(0,0,0,0);return{setMask:function(ee){ae!==ee&&!U&&(i.colorMask(ee,ee,ee,ee),ae=ee)},setLocked:function(ee){U=ee},setClear:function(ee,Z,Me,We,St){St===!0&&(ee*=We,Z*=We,Me*=We),ie.set(ee,Z,Me,We),xe.equals(ie)===!1&&(i.clearColor(ee,Z,Me,We),xe.copy(ie))},reset:function(){U=!1,ae=null,xe.set(-1,0,0,0)}}}function n(){let U=!1,ie=!1,ae=null,xe=null,ee=null;return{setReversed:function(Z){if(ie!==Z){const Me=e.get("EXT_clip_control");Z?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),ie=Z;const We=ee;ee=null,this.setClear(We)}},getReversed:function(){return ie},setTest:function(Z){Z?se(i.DEPTH_TEST):Oe(i.DEPTH_TEST)},setMask:function(Z){ae!==Z&&!U&&(i.depthMask(Z),ae=Z)},setFunc:function(Z){if(ie&&(Z=Mg[Z]),xe!==Z){switch(Z){case Xo:i.depthFunc(i.NEVER);break;case qo:i.depthFunc(i.ALWAYS);break;case Yo:i.depthFunc(i.LESS);break;case hr:i.depthFunc(i.LEQUAL);break;case jo:i.depthFunc(i.EQUAL);break;case $o:i.depthFunc(i.GEQUAL);break;case Ko:i.depthFunc(i.GREATER);break;case Zo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=Z}},setLocked:function(Z){U=Z},setClear:function(Z){ee!==Z&&(ie&&(Z=1-Z),i.clearDepth(Z),ee=Z)},reset:function(){U=!1,ae=null,xe=null,ee=null,ie=!1}}}function r(){let U=!1,ie=null,ae=null,xe=null,ee=null,Z=null,Me=null,We=null,St=null;return{setTest:function(lt){U||(lt?se(i.STENCIL_TEST):Oe(i.STENCIL_TEST))},setMask:function(lt){ie!==lt&&!U&&(i.stencilMask(lt),ie=lt)},setFunc:function(lt,Wn,Nn){(ae!==lt||xe!==Wn||ee!==Nn)&&(i.stencilFunc(lt,Wn,Nn),ae=lt,xe=Wn,ee=Nn)},setOp:function(lt,Wn,Nn){(Z!==lt||Me!==Wn||We!==Nn)&&(i.stencilOp(lt,Wn,Nn),Z=lt,Me=Wn,We=Nn)},setLocked:function(lt){U=lt},setClear:function(lt){St!==lt&&(i.clearStencil(lt),St=lt)},reset:function(){U=!1,ie=null,ae=null,xe=null,ee=null,Z=null,Me=null,We=null,St=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,S=!1,m=null,d=null,E=null,M=null,v=null,w=null,A=null,R=new et(0,0,0),D=0,y=!1,x=null,C=null,k=null,B=null,W=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,J=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=J>=2);let he=null,ge={};const Ie=i.getParameter(i.SCISSOR_BOX),Ke=i.getParameter(i.VIEWPORT),At=new pt().fromArray(Ie),gt=new pt().fromArray(Ke);function j(U,ie,ae,xe){const ee=new Uint8Array(4),Z=i.createTexture();i.bindTexture(U,Z),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Me=0;Me<ae;Me++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,ee):i.texImage2D(ie+Me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ee);return Z}const de={};de[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),de[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),de[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(i.DEPTH_TEST),o.setFunc(hr),ot(!1),Pe(fl),se(i.CULL_FACE),bt(ui);function se(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function Oe(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Fe(U,ie){return h[U]!==ie?(i.bindFramebuffer(U,ie),h[U]=ie,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ie),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ge(U,ie){let ae=p,xe=!1;if(U){ae=f.get(ie),ae===void 0&&(ae=[],f.set(ie,ae));const ee=U.textures;if(ae.length!==ee.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,Me=ee.length;Z<Me;Z++)ae[Z]=i.COLOR_ATTACHMENT0+Z;ae.length=ee.length,xe=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,xe=!0);xe&&i.drawBuffers(ae)}function Ut(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const nt={[Ci]:i.FUNC_ADD,[ch]:i.FUNC_SUBTRACT,[uh]:i.FUNC_REVERSE_SUBTRACT};nt[hh]=i.MIN,nt[dh]=i.MAX;const L={[fh]:i.ZERO,[ph]:i.ONE,[mh]:i.SRC_COLOR,[Go]:i.SRC_ALPHA,[bh]:i.SRC_ALPHA_SATURATE,[xh]:i.DST_COLOR,[_h]:i.DST_ALPHA,[gh]:i.ONE_MINUS_SRC_COLOR,[Wo]:i.ONE_MINUS_SRC_ALPHA,[yh]:i.ONE_MINUS_DST_COLOR,[vh]:i.ONE_MINUS_DST_ALPHA,[Sh]:i.CONSTANT_COLOR,[Mh]:i.ONE_MINUS_CONSTANT_COLOR,[Eh]:i.CONSTANT_ALPHA,[Th]:i.ONE_MINUS_CONSTANT_ALPHA};function bt(U,ie,ae,xe,ee,Z,Me,We,St,lt){if(U===ui){S===!0&&(Oe(i.BLEND),S=!1);return}if(S===!1&&(se(i.BLEND),S=!0),U!==lh){if(U!==m||lt!==y){if((d!==Ci||v!==Ci)&&(i.blendEquation(i.FUNC_ADD),d=Ci,v=Ci),lt)switch(U){case ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pl:i.blendFunc(i.ONE,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ml:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,M=null,w=null,A=null,R.set(0,0,0),D=0,m=U,y=lt}return}ee=ee||ie,Z=Z||ae,Me=Me||xe,(ie!==d||ee!==v)&&(i.blendEquationSeparate(nt[ie],nt[ee]),d=ie,v=ee),(ae!==E||xe!==M||Z!==w||Me!==A)&&(i.blendFuncSeparate(L[ae],L[xe],L[Z],L[Me]),E=ae,M=xe,w=Z,A=Me),(We.equals(R)===!1||St!==D)&&(i.blendColor(We.r,We.g,We.b,St),R.copy(We),D=St),m=U,y=!1}function Le(U,ie){U.side===En?Oe(i.CULL_FACE):se(i.CULL_FACE);let ae=U.side===un;ie&&(ae=!ae),ot(ae),U.blending===ar&&U.transparent===!1?bt(ui):bt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const xe=U.stencilWrite;a.setTest(xe),xe&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ye(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):Oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(U){x!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),x=U)}function Pe(U){U!==oh?(se(i.CULL_FACE),U!==C&&(U===fl?i.cullFace(i.BACK):U===ah?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Oe(i.CULL_FACE),C=U}function Ct(U){U!==k&&($&&i.lineWidth(U),k=U)}function ye(U,ie,ae){U?(se(i.POLYGON_OFFSET_FILL),(B!==ie||W!==ae)&&(i.polygonOffset(ie,ae),B=ie,W=ae)):Oe(i.POLYGON_OFFSET_FILL)}function Ze(U){U?se(i.SCISSOR_TEST):Oe(i.SCISSOR_TEST)}function Wt(U){U===void 0&&(U=i.TEXTURE0+K-1),he!==U&&(i.activeTexture(U),he=U)}function Nt(U,ie,ae){ae===void 0&&(he===null?ae=i.TEXTURE0+K-1:ae=he);let xe=ge[ae];xe===void 0&&(xe={type:void 0,texture:void 0},ge[ae]=xe),(xe.type!==U||xe.texture!==ie)&&(he!==ae&&(i.activeTexture(ae),he=ae),i.bindTexture(U,ie||de[U]),xe.type=U,xe.texture=ie)}function T(){const U=ge[he];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(U){At.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),At.copy(U))}function Be(U){gt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),gt.copy(U))}function Ae(U,ie){let ae=c.get(ie);ae===void 0&&(ae=new WeakMap,c.set(ie,ae));let xe=ae.get(U);xe===void 0&&(xe=i.getUniformBlockIndex(ie,U.name),ae.set(U,xe))}function fe(U,ie){const xe=c.get(ie).get(U);l.get(ie)!==xe&&(i.uniformBlockBinding(ie,xe,U.__bindingPointIndex),l.set(ie,xe))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},he=null,ge={},h={},f=new WeakMap,p=[],g=null,S=!1,m=null,d=null,E=null,M=null,v=null,w=null,A=null,R=new et(0,0,0),D=0,y=!1,x=null,C=null,k=null,B=null,W=null,At.set(0,0,i.canvas.width,i.canvas.height),gt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:Oe,bindFramebuffer:Fe,drawBuffers:Ge,useProgram:Ut,setBlending:bt,setMaterial:Le,setFlipSided:ot,setCullFace:Pe,setLineWidth:Ct,setPolygonOffset:ye,setScissorTest:Ze,activeTexture:Wt,bindTexture:Nt,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:we,texImage3D:ne,updateUBOMapping:Ae,uniformBlockBinding:fe,texStorage2D:re,texStorage3D:Te,texSubImage2D:Y,texSubImage3D:Q,compressedTexSubImage2D:q,compressedTexSubImage3D:Ce,scissor:me,viewport:Be,reset:qe}}function Tg(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return p?new OffscreenCanvas(T,_):Bs("canvas")}function S(T,_,F){let Y=1;const Q=Nt(T);if((Q.width>F||Q.height>F)&&(Y=F/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(Y*Q.width),Ce=Math.floor(Y*Q.height);h===void 0&&(h=g(q,Ce));const re=_?g(q,Ce):h;return re.width=q,re.height=Ce,re.getContext("2d").drawImage(T,0,0,q,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Ce+")."),re}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,_,F,Y,Q=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=_;if(_===i.RED&&(F===i.FLOAT&&(q=i.R32F),F===i.HALF_FLOAT&&(q=i.R16F),F===i.UNSIGNED_BYTE&&(q=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.R8UI),F===i.UNSIGNED_SHORT&&(q=i.R16UI),F===i.UNSIGNED_INT&&(q=i.R32UI),F===i.BYTE&&(q=i.R8I),F===i.SHORT&&(q=i.R16I),F===i.INT&&(q=i.R32I)),_===i.RG&&(F===i.FLOAT&&(q=i.RG32F),F===i.HALF_FLOAT&&(q=i.RG16F),F===i.UNSIGNED_BYTE&&(q=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RG8UI),F===i.UNSIGNED_SHORT&&(q=i.RG16UI),F===i.UNSIGNED_INT&&(q=i.RG32UI),F===i.BYTE&&(q=i.RG8I),F===i.SHORT&&(q=i.RG16I),F===i.INT&&(q=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGB8UI),F===i.UNSIGNED_SHORT&&(q=i.RGB16UI),F===i.UNSIGNED_INT&&(q=i.RGB32UI),F===i.BYTE&&(q=i.RGB8I),F===i.SHORT&&(q=i.RGB16I),F===i.INT&&(q=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),F===i.UNSIGNED_INT&&(q=i.RGBA32UI),F===i.BYTE&&(q=i.RGBA8I),F===i.SHORT&&(q=i.RGBA16I),F===i.INT&&(q=i.RGBA32I)),_===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),_===i.RGBA){const Ce=Q?ks:st.getTransfer(Y);F===i.FLOAT&&(q=i.RGBA32F),F===i.HALF_FLOAT&&(q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(q=Ce===ht?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function v(T,_){let F;return T?_===null||_===Li||_===kr?F=i.DEPTH24_STENCIL8:_===Zn?F=i.DEPTH32F_STENCIL8:_===Fr&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Li||_===kr?F=i.DEPTH_COMPONENT24:_===Zn?F=i.DEPTH_COMPONENT32F:_===Fr&&(F=i.DEPTH_COMPONENT16),F}function w(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ln&&T.minFilter!==Hn?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function A(T){const _=T.target;_.removeEventListener("dispose",A),D(_),_.isVideoTexture&&u.delete(_)}function R(T){const _=T.target;_.removeEventListener("dispose",R),x(_)}function D(T){const _=n.get(T);if(_.__webglInit===void 0)return;const F=T.source,Y=f.get(F);if(Y){const Q=Y[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(T),Object.keys(Y).length===0&&f.delete(F)}n.remove(T)}function y(T){const _=n.get(T);i.deleteTexture(_.__webglTexture);const F=T.source,Y=f.get(F);delete Y[_.__cacheKey],o.memory.textures--}function x(T){const _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let Q=0;Q<_.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[Y]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=T.textures;for(let Y=0,Q=F.length;Y<Q;Y++){const q=n.get(F[Y]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(F[Y])}n.remove(T)}let C=0;function k(){C=0}function B(){const T=C;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),C+=1,T}function W(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function K(T,_){const F=n.get(T);if(T.isVideoTexture&&Ze(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(F,T,_);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function $(T,_){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){de(F,T,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function J(T,_){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){de(F,T,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function X(T,_){const F=n.get(T);if(T.version>0&&F.__version!==T.version){se(F,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const he={[ea]:i.REPEAT,[Pi]:i.CLAMP_TO_EDGE,[ta]:i.MIRRORED_REPEAT},ge={[Ln]:i.NEAREST,[Nh]:i.NEAREST_MIPMAP_NEAREST,[Qr]:i.NEAREST_MIPMAP_LINEAR,[Hn]:i.LINEAR,[to]:i.LINEAR_MIPMAP_NEAREST,[Ii]:i.LINEAR_MIPMAP_LINEAR},Ie={[zh]:i.NEVER,[Xh]:i.ALWAYS,[Bh]:i.LESS,[Qc]:i.LEQUAL,[Hh]:i.EQUAL,[Wh]:i.GEQUAL,[Vh]:i.GREATER,[Gh]:i.NOTEQUAL};function Ke(T,_){if(_.type===Zn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Hn||_.magFilter===to||_.magFilter===Qr||_.magFilter===Ii||_.minFilter===Hn||_.minFilter===to||_.minFilter===Qr||_.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,he[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,he[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,he[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ge[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ge[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ie[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ln||_.minFilter!==Qr&&_.minFilter!==Ii||_.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function At(T,_){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",A));const Y=_.source;let Q=f.get(Y);Q===void 0&&(Q={},f.set(Y,Q));const q=W(_);if(q!==T.__cacheKey){Q[q]===void 0&&(Q[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Q[q].usedTimes++;const Ce=Q[T.__cacheKey];Ce!==void 0&&(Q[T.__cacheKey].usedTimes--,Ce.usedTimes===0&&y(_)),T.__cacheKey=q,T.__webglTexture=Q[q].texture}return F}function gt(T,_,F){return Math.floor(Math.floor(T/F)/_)}function j(T,_,F,Y){const q=T.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,Y,_.data);else{q.sort((ne,me)=>ne.start-me.start);let Ce=0;for(let ne=1;ne<q.length;ne++){const me=q[Ce],Be=q[ne],Ae=me.start+me.count,fe=gt(Be.start,_.width,4),qe=gt(me.start,_.width,4);Be.start<=Ae+1&&fe===qe&&gt(Be.start+Be.count-1,_.width,4)===fe?me.count=Math.max(me.count,Be.start+Be.count-me.start):(++Ce,q[Ce]=Be)}q.length=Ce+1;const re=i.getParameter(i.UNPACK_ROW_LENGTH),Te=i.getParameter(i.UNPACK_SKIP_PIXELS),we=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ne=0,me=q.length;ne<me;ne++){const Be=q[ne],Ae=Math.floor(Be.start/4),fe=Math.ceil(Be.count/4),qe=Ae%_.width,U=Math.floor(Ae/_.width),ie=fe,ae=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,qe,U,ie,ae,F,Y,_.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,re),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),i.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function de(T,_,F){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);const Q=At(T,_),q=_.source;t.bindTexture(Y,T.__webglTexture,i.TEXTURE0+F);const Ce=n.get(q);if(q.version!==Ce.__version||Q===!0){t.activeTexture(i.TEXTURE0+F);const re=st.getPrimaries(st.workingColorSpace),Te=_.colorSpace===li?null:st.getPrimaries(_.colorSpace),we=_.colorSpace===li||re===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ne=S(_.image,!1,r.maxTextureSize);ne=Wt(_,ne);const me=s.convert(_.format,_.colorSpace),Be=s.convert(_.type);let Ae=M(_.internalFormat,me,Be,_.colorSpace,_.isVideoTexture);Ke(Y,_);let fe;const qe=_.mipmaps,U=_.isVideoTexture!==!0,ie=Ce.__version===void 0||Q===!0,ae=q.dataReady,xe=w(_,ne);if(_.isDepthTexture)Ae=v(_.format===Br,_.type),ie&&(U?t.texStorage2D(i.TEXTURE_2D,1,Ae,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Ae,ne.width,ne.height,0,me,Be,null));else if(_.isDataTexture)if(qe.length>0){U&&ie&&t.texStorage2D(i.TEXTURE_2D,xe,Ae,qe[0].width,qe[0].height);for(let ee=0,Z=qe.length;ee<Z;ee++)fe=qe[ee],U?ae&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,fe.width,fe.height,me,Be,fe.data):t.texImage2D(i.TEXTURE_2D,ee,Ae,fe.width,fe.height,0,me,Be,fe.data);_.generateMipmaps=!1}else U?(ie&&t.texStorage2D(i.TEXTURE_2D,xe,Ae,ne.width,ne.height),ae&&j(_,ne,me,Be)):t.texImage2D(i.TEXTURE_2D,0,Ae,ne.width,ne.height,0,me,Be,ne.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Ae,qe[0].width,qe[0].height,ne.depth);for(let ee=0,Z=qe.length;ee<Z;ee++)if(fe=qe[ee],_.format!==Dn)if(me!==null)if(U){if(ae)if(_.layerUpdates.size>0){const Me=Wl(fe.width,fe.height,_.format,_.type);for(const We of _.layerUpdates){const St=fe.data.subarray(We*Me/fe.data.BYTES_PER_ELEMENT,(We+1)*Me/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,We,fe.width,fe.height,1,me,St)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,fe.width,fe.height,ne.depth,me,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,Ae,fe.width,fe.height,ne.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,fe.width,fe.height,ne.depth,me,Be,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,Ae,fe.width,fe.height,ne.depth,0,me,Be,fe.data)}else{U&&ie&&t.texStorage2D(i.TEXTURE_2D,xe,Ae,qe[0].width,qe[0].height);for(let ee=0,Z=qe.length;ee<Z;ee++)fe=qe[ee],_.format!==Dn?me!==null?U?ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,fe.width,fe.height,me,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,Ae,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ae&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,fe.width,fe.height,me,Be,fe.data):t.texImage2D(i.TEXTURE_2D,ee,Ae,fe.width,fe.height,0,me,Be,fe.data)}else if(_.isDataArrayTexture)if(U){if(ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Ae,ne.width,ne.height,ne.depth),ae)if(_.layerUpdates.size>0){const ee=Wl(ne.width,ne.height,_.format,_.type);for(const Z of _.layerUpdates){const Me=ne.data.subarray(Z*ee/ne.data.BYTES_PER_ELEMENT,(Z+1)*ee/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,ne.width,ne.height,1,me,Be,Me)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,me,Be,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,ne.width,ne.height,ne.depth,0,me,Be,ne.data);else if(_.isData3DTexture)U?(ie&&t.texStorage3D(i.TEXTURE_3D,xe,Ae,ne.width,ne.height,ne.depth),ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,me,Be,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,ne.width,ne.height,ne.depth,0,me,Be,ne.data);else if(_.isFramebufferTexture){if(ie)if(U)t.texStorage2D(i.TEXTURE_2D,xe,Ae,ne.width,ne.height);else{let ee=ne.width,Z=ne.height;for(let Me=0;Me<xe;Me++)t.texImage2D(i.TEXTURE_2D,Me,Ae,ee,Z,0,me,Be,null),ee>>=1,Z>>=1}}else if(qe.length>0){if(U&&ie){const ee=Nt(qe[0]);t.texStorage2D(i.TEXTURE_2D,xe,Ae,ee.width,ee.height)}for(let ee=0,Z=qe.length;ee<Z;ee++)fe=qe[ee],U?ae&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,me,Be,fe):t.texImage2D(i.TEXTURE_2D,ee,Ae,me,Be,fe);_.generateMipmaps=!1}else if(U){if(ie){const ee=Nt(ne);t.texStorage2D(i.TEXTURE_2D,xe,Ae,ee.width,ee.height)}ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Be,ne)}else t.texImage2D(i.TEXTURE_2D,0,Ae,me,Be,ne);m(_)&&d(Y),Ce.__version=q.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function se(T,_,F){if(_.image.length!==6)return;const Y=At(T,_),Q=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);const q=n.get(Q);if(Q.version!==q.__version||Y===!0){t.activeTexture(i.TEXTURE0+F);const Ce=st.getPrimaries(st.workingColorSpace),re=_.colorSpace===li?null:st.getPrimaries(_.colorSpace),Te=_.colorSpace===li||Ce===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const we=_.isCompressedTexture||_.image[0].isCompressedTexture,ne=_.image[0]&&_.image[0].isDataTexture,me=[];for(let Z=0;Z<6;Z++)!we&&!ne?me[Z]=S(_.image[Z],!0,r.maxCubemapSize):me[Z]=ne?_.image[Z].image:_.image[Z],me[Z]=Wt(_,me[Z]);const Be=me[0],Ae=s.convert(_.format,_.colorSpace),fe=s.convert(_.type),qe=M(_.internalFormat,Ae,fe,_.colorSpace),U=_.isVideoTexture!==!0,ie=q.__version===void 0||Y===!0,ae=Q.dataReady;let xe=w(_,Be);Ke(i.TEXTURE_CUBE_MAP,_);let ee;if(we){U&&ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,qe,Be.width,Be.height);for(let Z=0;Z<6;Z++){ee=me[Z].mipmaps;for(let Me=0;Me<ee.length;Me++){const We=ee[Me];_.format!==Dn?Ae!==null?U?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me,0,0,We.width,We.height,Ae,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me,qe,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me,0,0,We.width,We.height,Ae,fe,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me,qe,We.width,We.height,0,Ae,fe,We.data)}}}else{if(ee=_.mipmaps,U&&ie){ee.length>0&&xe++;const Z=Nt(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,qe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ne){U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,me[Z].width,me[Z].height,Ae,fe,me[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,qe,me[Z].width,me[Z].height,0,Ae,fe,me[Z].data);for(let Me=0;Me<ee.length;Me++){const St=ee[Me].image[Z].image;U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me+1,0,0,St.width,St.height,Ae,fe,St.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me+1,qe,St.width,St.height,0,Ae,fe,St.data)}}else{U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ae,fe,me[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,qe,Ae,fe,me[Z]);for(let Me=0;Me<ee.length;Me++){const We=ee[Me];U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me+1,0,0,Ae,fe,We.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me+1,qe,Ae,fe,We.image[Z])}}}m(_)&&d(i.TEXTURE_CUBE_MAP),q.__version=Q.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Oe(T,_,F,Y,Q,q){const Ce=s.convert(F.format,F.colorSpace),re=s.convert(F.type),Te=M(F.internalFormat,Ce,re,F.colorSpace),we=n.get(_),ne=n.get(F);if(ne.__renderTarget=_,!we.__hasExternalTextures){const me=Math.max(1,_.width>>q),Be=Math.max(1,_.height>>q);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,q,Te,me,Be,_.depth,0,Ce,re,null):t.texImage2D(Q,q,Te,me,Be,0,Ce,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ye(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,ne.__webglTexture,0,Ct(_)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,ne.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(T,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){const Y=_.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,q=v(_.stencilBuffer,Q),Ce=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=Ct(_);ye(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,q,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,q,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,T)}else{const Y=_.textures;for(let Q=0;Q<Y.length;Q++){const q=Y[Q],Ce=s.convert(q.format,q.colorSpace),re=s.convert(q.type),Te=M(q.internalFormat,Ce,re,q.colorSpace),we=Ct(_);F&&ye(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,Te,_.width,_.height):ye(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,Te,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Te,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ge(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(_.depthTexture);Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K(_.depthTexture,0);const Q=Y.__webglTexture,q=Ct(_);if(_.depthTexture.format===zr)ye(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(_.depthTexture.format===Br)ye(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ut(T){const _=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=Y}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const Y=T.texture.mipmaps;Y&&Y.length>0?Ge(_.__webglFramebuffer[0],T):Ge(_.__webglFramebuffer,T)}else if(F){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=i.createRenderbuffer(),Fe(_.__webglDepthbuffer[Y],T,!1);else{const Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,q)}}else{const Y=T.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Fe(_.__webglDepthbuffer,T,!1);else{const Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(T,_,F){const Y=n.get(T);_!==void 0&&Oe(Y.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ut(T)}function L(T){const _=T.texture,F=n.get(T),Y=n.get(_);T.addEventListener("dispose",R);const Q=T.textures,q=T.isWebGLCubeRenderTarget===!0,Ce=Q.length>1;if(Ce||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,o.memory.textures++),q){F.__webglFramebuffer=[];for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[re]=[];for(let Te=0;Te<_.mipmaps.length;Te++)F.__webglFramebuffer[re][Te]=i.createFramebuffer()}else F.__webglFramebuffer[re]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let re=0;re<_.mipmaps.length;re++)F.__webglFramebuffer[re]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let re=0,Te=Q.length;re<Te;re++){const we=n.get(Q[re]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&ye(T)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let re=0;re<Q.length;re++){const Te=Q[re];F.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[re]);const we=s.convert(Te.format,Te.colorSpace),ne=s.convert(Te.type),me=M(Te.internalFormat,we,ne,Te.colorSpace,T.isXRRenderTarget===!0),Be=Ct(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,me,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,F.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ke(i.TEXTURE_CUBE_MAP,_);for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0)for(let Te=0;Te<_.mipmaps.length;Te++)Oe(F.__webglFramebuffer[re][Te],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te);else Oe(F.__webglFramebuffer[re],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(_)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let re=0,Te=Q.length;re<Te;re++){const we=Q[re],ne=n.get(we);let me=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(me=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,ne.__webglTexture),Ke(me,we),Oe(F.__webglFramebuffer,T,we,i.COLOR_ATTACHMENT0+re,me,0),m(we)&&d(me)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(re=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,Y.__webglTexture),Ke(re,_),_.mipmaps&&_.mipmaps.length>0)for(let Te=0;Te<_.mipmaps.length;Te++)Oe(F.__webglFramebuffer[Te],T,_,i.COLOR_ATTACHMENT0,re,Te);else Oe(F.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,re,0);m(_)&&d(re),t.unbindTexture()}T.depthBuffer&&Ut(T)}function bt(T){const _=T.textures;for(let F=0,Y=_.length;F<Y;F++){const Q=_[F];if(m(Q)){const q=E(T),Ce=n.get(Q).__webglTexture;t.bindTexture(q,Ce),d(q),t.unbindTexture()}}}const Le=[],ot=[];function Pe(T){if(T.samples>0){if(ye(T)===!1){const _=T.textures,F=T.width,Y=T.height;let Q=i.COLOR_BUFFER_BIT;const q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(T),re=_.length>1;if(re)for(let we=0;we<_.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const Te=T.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let we=0;we<_.length;we++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[we]);const ne=n.get(_[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,F,Y,0,0,F,Y,Q,i.NEAREST),l===!0&&(Le.length=0,ot.length=0,Le.push(i.COLOR_ATTACHMENT0+we),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Le.push(q),ot.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ot)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Le))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let we=0;we<_.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[we]);const ne=n.get(_[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Ct(T){return Math.min(r.maxSamples,T.samples)}function ye(T){const _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ze(T){const _=o.render.frame;u.get(T)!==_&&(u.set(T,_),T.update())}function Wt(T,_){const F=T.colorSpace,Y=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==pr&&F!==li&&(st.getTransfer(F)===ht?(Y!==Dn||Q!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function Nt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.setTexture2D=K,this.setTexture2DArray=$,this.setTexture3D=J,this.setTextureCube=X,this.rebindTextures=nt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=ye}function wg(i,e){function t(n,r=li){let s;const o=st.getTransfer(r);if(n===Gn)return i.UNSIGNED_BYTE;if(n===Ba)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ha)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wc)return i.BYTE;if(n===Xc)return i.SHORT;if(n===Fr)return i.UNSIGNED_SHORT;if(n===za)return i.INT;if(n===Li)return i.UNSIGNED_INT;if(n===Zn)return i.FLOAT;if(n===Wr)return i.HALF_FLOAT;if(n===Yc)return i.ALPHA;if(n===jc)return i.RGB;if(n===Dn)return i.RGBA;if(n===zr)return i.DEPTH_COMPONENT;if(n===Br)return i.DEPTH_STENCIL;if(n===$c)return i.RED;if(n===Va)return i.RED_INTEGER;if(n===Kc)return i.RG;if(n===Ga)return i.RG_INTEGER;if(n===Wa)return i.RGBA_INTEGER;if(n===Rs||n===Ps||n===Is||n===Ds)if(o===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Rs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Rs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ps)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Is)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ds)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===na||n===ia||n===ra||n===sa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===na)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ia)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ra)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oa||n===aa||n===la)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===oa||n===aa)return o===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===la)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ca||n===ua||n===ha||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===va||n===xa||n===ya||n===ba||n===Sa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ca)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ua)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ha)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===da)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fa)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pa)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ma)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ga)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_a)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===va)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xa)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ya)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ba)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sa)return o===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ls||n===Ma||n===Ea)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ls)return o===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ma)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ea)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zc||n===Ta||n===wa||n===Aa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ls)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ta)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Aa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===kr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Mu extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const Ag=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Rg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Mu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new mi({vertexShader:Ag,fragmentShader:Cg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new oe(new js(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pg extends Oi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const S=new Rg,m={},d=t.getContextAttributes();let E=null,M=null;const v=[],w=[],A=new be;let R=null;const D=new vn;D.viewport=new pt;const y=new vn;y.viewport=new pt;const x=[D,y],C=new Yd;let k=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let de=v[j];return de===void 0&&(de=new To,v[j]=de),de.getTargetRaySpace()},this.getControllerGrip=function(j){let de=v[j];return de===void 0&&(de=new To,v[j]=de),de.getGripSpace()},this.getHand=function(j){let de=v[j];return de===void 0&&(de=new To,v[j]=de),de.getHandSpace()};function W(j){const de=w.indexOf(j.inputSource);if(de===-1)return;const se=v[de];se!==void 0&&(se.update(j.inputSource,j.frame,c||o),se.dispatchEvent({type:j.type,data:j.inputSource}))}function K(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",$);for(let j=0;j<v.length;j++){const de=w[j];de!==null&&(w[j]=null,v[j].disconnect(de))}k=null,B=null,S.reset();for(const j in m)delete m[j];e.setRenderTarget(E),p=null,f=null,h=null,r=null,M=null,gt.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",K),r.addEventListener("inputsourceschange",$),d.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&(h=new XRWebGLBinding(r,t)),h!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Oe=null,Fe=null;d.depth&&(Fe=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=d.stencil?Br:zr,Oe=d.stencil?kr:Li);const Ge={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:s};f=h.createProjectionLayer(Ge),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Ui(f.textureWidth,f.textureHeight,{format:Dn,type:Gn,depthTexture:new hu(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const se={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Ui(p.framebufferWidth,p.framebufferHeight,{format:Dn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),gt.setContext(r),gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function $(j){for(let de=0;de<j.removed.length;de++){const se=j.removed[de],Oe=w.indexOf(se);Oe>=0&&(w[Oe]=null,v[Oe].disconnect(se))}for(let de=0;de<j.added.length;de++){const se=j.added[de];let Oe=w.indexOf(se);if(Oe===-1){for(let Ge=0;Ge<v.length;Ge++)if(Ge>=w.length){w.push(se),Oe=Ge;break}else if(w[Ge]===null){w[Ge]=se,Oe=Ge;break}if(Oe===-1)break}const Fe=v[Oe];Fe&&Fe.connect(se)}}const J=new I,X=new I;function he(j,de,se){J.setFromMatrixPosition(de.matrixWorld),X.setFromMatrixPosition(se.matrixWorld);const Oe=J.distanceTo(X),Fe=de.projectionMatrix.elements,Ge=se.projectionMatrix.elements,Ut=Fe[14]/(Fe[10]-1),nt=Fe[14]/(Fe[10]+1),L=(Fe[9]+1)/Fe[5],bt=(Fe[9]-1)/Fe[5],Le=(Fe[8]-1)/Fe[0],ot=(Ge[8]+1)/Ge[0],Pe=Ut*Le,Ct=Ut*ot,ye=Oe/(-Le+ot),Ze=ye*-Le;if(de.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ze),j.translateZ(ye),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Fe[10]===-1)j.projectionMatrix.copy(de.projectionMatrix),j.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Wt=Ut+ye,Nt=nt+ye,T=Pe-Ze,_=Ct+(Oe-Ze),F=L*nt/Nt*Wt,Y=bt*nt/Nt*Wt;j.projectionMatrix.makePerspective(T,_,F,Y,Wt,Nt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ge(j,de){de===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(de.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let de=j.near,se=j.far;S.texture!==null&&(S.depthNear>0&&(de=S.depthNear),S.depthFar>0&&(se=S.depthFar)),C.near=y.near=D.near=de,C.far=y.far=D.far=se,(k!==C.near||B!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),k=C.near,B=C.far),C.layers.mask=j.layers.mask|6,D.layers.mask=C.layers.mask&3,y.layers.mask=C.layers.mask&5;const Oe=j.parent,Fe=C.cameras;ge(C,Oe);for(let Ge=0;Ge<Fe.length;Ge++)ge(Fe[Ge],Oe);Fe.length===2?he(C,D,y):C.projectionMatrix.copy(D.projectionMatrix),Ie(j,C,Oe)};function Ie(j,de,se){se===null?j.matrix.copy(de.matrixWorld):(j.matrix.copy(se.matrixWorld),j.matrix.invert(),j.matrix.multiply(de.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(de.projectionMatrix),j.projectionMatrixInverse.copy(de.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ra*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(C)},this.getCameraTexture=function(j){return m[j]};let Ke=null;function At(j,de){if(u=de.getViewerPose(c||o),g=de,u!==null){const se=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Oe=!1;se.length!==C.cameras.length&&(C.cameras.length=0,Oe=!0);for(let nt=0;nt<se.length;nt++){const L=se[nt];let bt=null;if(p!==null)bt=p.getViewport(L);else{const ot=h.getViewSubImage(f,L);bt=ot.viewport,nt===0&&(e.setRenderTargetTextures(M,ot.colorTexture,ot.depthStencilTexture),e.setRenderTarget(M))}let Le=x[nt];Le===void 0&&(Le=new vn,Le.layers.enable(nt),Le.viewport=new pt,x[nt]=Le),Le.matrix.fromArray(L.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(L.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(bt.x,bt.y,bt.width,bt.height),nt===0&&(C.matrix.copy(Le.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Oe===!0&&C.cameras.push(Le)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){const nt=h.getDepthInformation(se[0]);nt&&nt.isValid&&nt.texture&&S.init(nt,r.renderState)}if(Fe&&Fe.includes("camera-access")&&(e.state.unbindTexture(),h))for(let nt=0;nt<se.length;nt++){const L=se[nt].camera;if(L){let bt=m[L];bt||(bt=new Mu,m[L]=bt);const Le=h.getCameraImage(L);bt.sourceTexture=Le}}}for(let se=0;se<v.length;se++){const Oe=w[se],Fe=v[se];Oe!==null&&Fe!==void 0&&Fe.update(Oe,de,c||o)}Ke&&Ke(j,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),g=null}const gt=new vu;gt.setAnimationLoop(At),this.setAnimationLoop=function(j){Ke=j},this.dispose=function(){}}}const Ti=new wn,Ig=new wt;function Dg(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,ou(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,E,M,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),S(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,E,M):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===un&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===un&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=e.get(d),M=E.envMap,v=E.envMapRotation;M&&(m.envMap.value=M,Ti.copy(v),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),m.envMapRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(Ti)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=M*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===un&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){const E=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Lg(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){const v=M.program;n.uniformBlockBinding(E,v)}function c(E,M){let v=r[E.id];v===void 0&&(g(E),v=u(E),r[E.id]=v,E.addEventListener("dispose",m));const w=M.program;n.updateUBOMapping(E,w);const A=e.render.frame;s[E.id]!==A&&(f(E),s[E.id]=A)}function u(E){const M=h();E.__bindingPointIndex=M;const v=i.createBuffer(),w=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,w,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const M=r[E.id],v=E.uniforms,w=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,R=v.length;A<R;A++){const D=Array.isArray(v[A])?v[A]:[v[A]];for(let y=0,x=D.length;y<x;y++){const C=D[y];if(p(C,A,y,w)===!0){const k=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let K=0;K<B.length;K++){const $=B[K],J=S($);typeof $=="number"||typeof $=="boolean"?(C.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,k+W,C.__data)):$.isMatrix3?(C.__data[0]=$.elements[0],C.__data[1]=$.elements[1],C.__data[2]=$.elements[2],C.__data[3]=0,C.__data[4]=$.elements[3],C.__data[5]=$.elements[4],C.__data[6]=$.elements[5],C.__data[7]=0,C.__data[8]=$.elements[6],C.__data[9]=$.elements[7],C.__data[10]=$.elements[8],C.__data[11]=0):($.toArray(C.__data,W),W+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,M,v,w){const A=E.value,R=M+"_"+v;if(w[R]===void 0)return typeof A=="number"||typeof A=="boolean"?w[R]=A:w[R]=A.clone(),!0;{const D=w[R];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return w[R]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(E){const M=E.uniforms;let v=0;const w=16;for(let R=0,D=M.length;R<D;R++){const y=Array.isArray(M[R])?M[R]:[M[R]];for(let x=0,C=y.length;x<C;x++){const k=y[x],B=Array.isArray(k.value)?k.value:[k.value];for(let W=0,K=B.length;W<K;W++){const $=B[W],J=S($),X=v%w,he=X%J.boundary,ge=X+he;v+=he,ge!==0&&w-ge<J.storage&&(v+=w-ge),k.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=J.storage}}}const A=v%w;return A>0&&(v+=w-A),E.__size=v,E.__cache={},this}function S(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){const M=E.target;M.removeEventListener("dispose",m);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function d(){for(const E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Ug{constructor(e={}){const{canvas:t=Yh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),S=new Int32Array(4);let m=null,d=null;const E=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let w=!1;this._outputColorSpace=cn;let A=0,R=0,D=null,y=-1,x=null;const C=new pt,k=new pt;let B=null;const W=new et(0);let K=0,$=t.width,J=t.height,X=1,he=null,ge=null;const Ie=new pt(0,0,$,J),Ke=new pt(0,0,$,J);let At=!1;const gt=new $a;let j=!1,de=!1;const se=new wt,Oe=new I,Fe=new pt,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function nt(){return D===null?X:1}let L=n;function bt(b,N){return t.getContext(b,N)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ka}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",ee,!1),L===null){const N="webgl2";if(L=bt(N,b),L===null)throw bt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Le,ot,Pe,Ct,ye,Ze,Wt,Nt,T,_,F,Y,Q,q,Ce,re,Te,we,ne,me,Be,Ae,fe,qe;function U(){Le=new Wm(L),Le.init(),Ae=new wg(L,Le),ot=new Fm(L,Le,e,Ae),Pe=new Eg(L,Le),ot.reversedDepthBuffer&&f&&Pe.buffers.depth.setReversed(!0),Ct=new Ym(L),ye=new hg,Ze=new Tg(L,Le,Pe,ye,ot,Ae,Ct),Wt=new zm(v),Nt=new Gm(v),T=new Jd(L),fe=new Nm(L,T),_=new Xm(L,T,Ct,fe),F=new $m(L,_,T,Ct),ne=new jm(L,ot,Ze),re=new km(ye),Y=new ug(v,Wt,Nt,Le,ot,fe,re),Q=new Dg(v,ye),q=new fg,Ce=new xg(Le),we=new Um(v,Wt,Nt,Pe,F,p,l),Te=new Sg(v,F,ot),qe=new Lg(L,Ct,ot,Pe),me=new Om(L,Le,Ct),Be=new qm(L,Le,Ct),Ct.programs=Y.programs,v.capabilities=ot,v.extensions=Le,v.properties=ye,v.renderLists=q,v.shadowMap=Te,v.state=Pe,v.info=Ct}U();const ie=new Pg(v,L);this.xr=ie,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=Le.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Le.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize($,J,!1))},this.getSize=function(b){return b.set($,J)},this.setSize=function(b,N,H=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,J=N,t.width=Math.floor(b*X),t.height=Math.floor(N*X),H===!0&&(t.style.width=b+"px",t.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set($*X,J*X).floor()},this.setDrawingBufferSize=function(b,N,H){$=b,J=N,X=H,t.width=Math.floor(b*H),t.height=Math.floor(N*H),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(Ie)},this.setViewport=function(b,N,H,V){b.isVector4?Ie.set(b.x,b.y,b.z,b.w):Ie.set(b,N,H,V),Pe.viewport(C.copy(Ie).multiplyScalar(X).round())},this.getScissor=function(b){return b.copy(Ke)},this.setScissor=function(b,N,H,V){b.isVector4?Ke.set(b.x,b.y,b.z,b.w):Ke.set(b,N,H,V),Pe.scissor(k.copy(Ke).multiplyScalar(X).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(b){Pe.setScissorTest(At=b)},this.setOpaqueSort=function(b){he=b},this.setTransparentSort=function(b){ge=b},this.getClearColor=function(b){return b.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,H=!0){let V=0;if(b){let O=!1;if(D!==null){const te=D.texture.format;O=te===Wa||te===Ga||te===Va}if(O){const te=D.texture.type,pe=te===Gn||te===Li||te===Fr||te===kr||te===Ba||te===Ha,Se=we.getClearColor(),_e=we.getClearAlpha(),ke=Se.r,He=Se.g,De=Se.b;pe?(g[0]=ke,g[1]=He,g[2]=De,g[3]=_e,L.clearBufferuiv(L.COLOR,0,g)):(S[0]=ke,S[1]=He,S[2]=De,S[3]=_e,L.clearBufferiv(L.COLOR,0,S))}else V|=L.COLOR_BUFFER_BIT}N&&(V|=L.DEPTH_BUFFER_BIT),H&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),we.dispose(),q.dispose(),Ce.dispose(),ye.dispose(),Wt.dispose(),Nt.dispose(),F.dispose(),fe.dispose(),qe.dispose(),Y.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Nn),ie.removeEventListener("sessionend",al),vi.stop()};function ae(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const b=Ct.autoReset,N=Te.enabled,H=Te.autoUpdate,V=Te.needsUpdate,O=Te.type;U(),Ct.autoReset=b,Te.enabled=N,Te.autoUpdate=H,Te.needsUpdate=V,Te.type=O}function ee(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Z(b){const N=b.target;N.removeEventListener("dispose",Z),Me(N)}function Me(b){We(b),ye.remove(b)}function We(b){const N=ye.get(b).programs;N!==void 0&&(N.forEach(function(H){Y.releaseProgram(H)}),b.isShaderMaterial&&Y.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,H,V,O,te){N===null&&(N=Ge);const pe=O.isMesh&&O.matrixWorld.determinant()<0,Se=eh(b,N,H,V,O);Pe.setMaterial(V,pe);let _e=H.index,ke=1;if(V.wireframe===!0){if(_e=_.getWireframeAttribute(H),_e===void 0)return;ke=2}const He=H.drawRange,De=H.attributes.position;let Qe=He.start*ke,ct=(He.start+He.count)*ke;te!==null&&(Qe=Math.max(Qe,te.start*ke),ct=Math.min(ct,(te.start+te.count)*ke)),_e!==null?(Qe=Math.max(Qe,0),ct=Math.min(ct,_e.count)):De!=null&&(Qe=Math.max(Qe,0),ct=Math.min(ct,De.count));const Lt=ct-Qe;if(Lt<0||Lt===1/0)return;fe.setup(O,V,Se,H,_e);let Tt,_t=me;if(_e!==null&&(Tt=T.get(_e),_t=Be,_t.setIndex(Tt)),O.isMesh)V.wireframe===!0?(Pe.setLineWidth(V.wireframeLinewidth*nt()),_t.setMode(L.LINES)):_t.setMode(L.TRIANGLES);else if(O.isLine){let Ue=V.linewidth;Ue===void 0&&(Ue=1),Pe.setLineWidth(Ue*nt()),O.isLineSegments?_t.setMode(L.LINES):O.isLineLoop?_t.setMode(L.LINE_LOOP):_t.setMode(L.LINE_STRIP)}else O.isPoints?_t.setMode(L.POINTS):O.isSprite&&_t.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)lr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))_t.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ue=O._multiDrawStarts,Pt=O._multiDrawCounts,rt=O._multiDrawCount,dn=_e?T.get(_e).bytesPerElement:1,Fi=ye.get(V).currentProgram.getUniforms();for(let fn=0;fn<rt;fn++)Fi.setValue(L,"_gl_DrawID",fn),_t.render(Ue[fn]/dn,Pt[fn])}else if(O.isInstancedMesh)_t.renderInstances(Qe,Lt,O.count);else if(H.isInstancedBufferGeometry){const Ue=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Pt=Math.min(H.instanceCount,Ue);_t.renderInstances(Qe,Lt,Pt)}else _t.render(Qe,Lt)};function St(b,N,H){b.transparent===!0&&b.side===En&&b.forceSinglePass===!1?(b.side=un,b.needsUpdate=!0,Jr(b,N,H),b.side=pi,b.needsUpdate=!0,Jr(b,N,H),b.side=En):Jr(b,N,H)}this.compile=function(b,N,H=null){H===null&&(H=b),d=Ce.get(H),d.init(N),M.push(d),H.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),b!==H&&b.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights();const V=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const te=O.material;if(te)if(Array.isArray(te))for(let pe=0;pe<te.length;pe++){const Se=te[pe];St(Se,H,O),V.add(Se)}else St(te,H,O),V.add(te)}),d=M.pop(),V},this.compileAsync=function(b,N,H=null){const V=this.compile(b,N,H);return new Promise(O=>{function te(){if(V.forEach(function(pe){ye.get(pe).currentProgram.isReady()&&V.delete(pe)}),V.size===0){O(b);return}setTimeout(te,10)}Le.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let lt=null;function Wn(b){lt&&lt(b)}function Nn(){vi.stop()}function al(){vi.start()}const vi=new vu;vi.setAnimationLoop(Wn),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(b){lt=b,ie.setAnimationLoop(b),b===null?vi.stop():vi.start()},ie.addEventListener("sessionstart",Nn),ie.addEventListener("sessionend",al),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(N),N=ie.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,N,D),d=Ce.get(b,M.length),d.init(N),M.push(d),se.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),gt.setFromProjectionMatrix(se,Vn,N.reversedDepth),de=this.localClippingEnabled,j=re.init(this.clippingPlanes,de),m=q.get(b,E.length),m.init(),E.push(m),ie.enabled===!0&&ie.isPresenting===!0){const te=v.xr.getDepthSensingMesh();te!==null&&Qs(te,N,-1/0,v.sortObjects)}Qs(b,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(he,ge),Ut=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ut&&we.addToRenderList(m,b),this.info.render.frame++,j===!0&&re.beginShadows();const H=d.state.shadowsArray;Te.render(H,b,N),j===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,O=m.transmissive;if(d.setupLights(),N.isArrayCamera){const te=N.cameras;if(O.length>0)for(let pe=0,Se=te.length;pe<Se;pe++){const _e=te[pe];cl(V,O,b,_e)}Ut&&we.render(b);for(let pe=0,Se=te.length;pe<Se;pe++){const _e=te[pe];ll(m,b,_e,_e.viewport)}}else O.length>0&&cl(V,O,b,N),Ut&&we.render(b),ll(m,b,N);D!==null&&R===0&&(Ze.updateMultisampleRenderTarget(D),Ze.updateRenderTargetMipmap(D)),b.isScene===!0&&b.onAfterRender(v,b,N),fe.resetDefaultState(),y=-1,x=null,M.pop(),M.length>0?(d=M[M.length-1],j===!0&&re.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Qs(b,N,H,V){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||gt.intersectsSprite(b)){V&&Fe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(se);const pe=F.update(b),Se=b.material;Se.visible&&m.push(b,pe,Se,H,Fe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||gt.intersectsObject(b))){const pe=F.update(b),Se=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Fe.copy(b.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Fe.copy(pe.boundingSphere.center)),Fe.applyMatrix4(b.matrixWorld).applyMatrix4(se)),Array.isArray(Se)){const _e=pe.groups;for(let ke=0,He=_e.length;ke<He;ke++){const De=_e[ke],Qe=Se[De.materialIndex];Qe&&Qe.visible&&m.push(b,pe,Qe,H,Fe.z,De)}}else Se.visible&&m.push(b,pe,Se,H,Fe.z,null)}}const te=b.children;for(let pe=0,Se=te.length;pe<Se;pe++)Qs(te[pe],N,H,V)}function ll(b,N,H,V){const O=b.opaque,te=b.transmissive,pe=b.transparent;d.setupLightsView(H),j===!0&&re.setGlobalState(v.clippingPlanes,H),V&&Pe.viewport(C.copy(V)),O.length>0&&Zr(O,N,H),te.length>0&&Zr(te,N,H),pe.length>0&&Zr(pe,N,H),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function cl(b,N,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new Ui(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float")?Wr:Gn,minFilter:Ii,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const te=d.state.transmissionRenderTarget[V.id],pe=V.viewport||C;te.setSize(pe.z*v.transmissionResolutionScale,pe.w*v.transmissionResolutionScale);const Se=v.getRenderTarget(),_e=v.getActiveCubeFace(),ke=v.getActiveMipmapLevel();v.setRenderTarget(te),v.getClearColor(W),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),Ut&&we.render(H);const He=v.toneMapping;v.toneMapping=hi;const De=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),j===!0&&re.setGlobalState(v.clippingPlanes,V),Zr(b,H,V),Ze.updateMultisampleRenderTarget(te),Ze.updateRenderTargetMipmap(te),Le.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ct=0,Lt=N.length;ct<Lt;ct++){const Tt=N[ct],_t=Tt.object,Ue=Tt.geometry,Pt=Tt.material,rt=Tt.group;if(Pt.side===En&&_t.layers.test(V.layers)){const dn=Pt.side;Pt.side=un,Pt.needsUpdate=!0,ul(_t,H,V,Ue,Pt,rt),Pt.side=dn,Pt.needsUpdate=!0,Qe=!0}}Qe===!0&&(Ze.updateMultisampleRenderTarget(te),Ze.updateRenderTargetMipmap(te))}v.setRenderTarget(Se,_e,ke),v.setClearColor(W,K),De!==void 0&&(V.viewport=De),v.toneMapping=He}function Zr(b,N,H){const V=N.isScene===!0?N.overrideMaterial:null;for(let O=0,te=b.length;O<te;O++){const pe=b[O],Se=pe.object,_e=pe.geometry,ke=pe.group;let He=pe.material;He.allowOverride===!0&&V!==null&&(He=V),Se.layers.test(H.layers)&&ul(Se,N,H,_e,He,ke)}}function ul(b,N,H,V,O,te){b.onBeforeRender(v,N,H,V,O,te),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(v,N,H,V,b,te),O.transparent===!0&&O.side===En&&O.forceSinglePass===!1?(O.side=un,O.needsUpdate=!0,v.renderBufferDirect(H,N,V,O,b,te),O.side=pi,O.needsUpdate=!0,v.renderBufferDirect(H,N,V,O,b,te),O.side=En):v.renderBufferDirect(H,N,V,O,b,te),b.onAfterRender(v,N,H,V,O,te)}function Jr(b,N,H){N.isScene!==!0&&(N=Ge);const V=ye.get(b),O=d.state.lights,te=d.state.shadowsArray,pe=O.state.version,Se=Y.getParameters(b,O.state,te,N,H),_e=Y.getProgramCacheKey(Se);let ke=V.programs;V.environment=b.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(b.isMeshStandardMaterial?Nt:Wt).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,ke===void 0&&(b.addEventListener("dispose",Z),ke=new Map,V.programs=ke);let He=ke.get(_e);if(He!==void 0){if(V.currentProgram===He&&V.lightsStateVersion===pe)return dl(b,Se),He}else Se.uniforms=Y.getUniforms(b),b.onBeforeCompile(Se,v),He=Y.acquireProgram(Se,_e),ke.set(_e,He),V.uniforms=Se.uniforms;const De=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(De.clippingPlanes=re.uniform),dl(b,Se),V.needsLights=nh(b),V.lightsStateVersion=pe,V.needsLights&&(De.ambientLightColor.value=O.state.ambient,De.lightProbe.value=O.state.probe,De.directionalLights.value=O.state.directional,De.directionalLightShadows.value=O.state.directionalShadow,De.spotLights.value=O.state.spot,De.spotLightShadows.value=O.state.spotShadow,De.rectAreaLights.value=O.state.rectArea,De.ltc_1.value=O.state.rectAreaLTC1,De.ltc_2.value=O.state.rectAreaLTC2,De.pointLights.value=O.state.point,De.pointLightShadows.value=O.state.pointShadow,De.hemisphereLights.value=O.state.hemi,De.directionalShadowMap.value=O.state.directionalShadowMap,De.directionalShadowMatrix.value=O.state.directionalShadowMatrix,De.spotShadowMap.value=O.state.spotShadowMap,De.spotLightMatrix.value=O.state.spotLightMatrix,De.spotLightMap.value=O.state.spotLightMap,De.pointShadowMap.value=O.state.pointShadowMap,De.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=He,V.uniformsList=null,He}function hl(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=Us.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function dl(b,N){const H=ye.get(b);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function eh(b,N,H,V,O){N.isScene!==!0&&(N=Ge),Ze.resetTextureUnits();const te=N.fog,pe=V.isMeshStandardMaterial?N.environment:null,Se=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:pr,_e=(V.isMeshStandardMaterial?Nt:Wt).get(V.envMap||pe),ke=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,He=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),De=!!H.morphAttributes.position,Qe=!!H.morphAttributes.normal,ct=!!H.morphAttributes.color;let Lt=hi;V.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Lt=v.toneMapping);const Tt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,_t=Tt!==void 0?Tt.length:0,Ue=ye.get(V),Pt=d.state.lights;if(j===!0&&(de===!0||b!==x)){const nn=b===x&&V.id===y;re.setState(V,b,nn)}let rt=!1;V.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Pt.state.version||Ue.outputColorSpace!==Se||O.isBatchedMesh&&Ue.batching===!1||!O.isBatchedMesh&&Ue.batching===!0||O.isBatchedMesh&&Ue.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ue.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ue.instancing===!1||!O.isInstancedMesh&&Ue.instancing===!0||O.isSkinnedMesh&&Ue.skinning===!1||!O.isSkinnedMesh&&Ue.skinning===!0||O.isInstancedMesh&&Ue.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ue.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ue.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ue.instancingMorph===!1&&O.morphTexture!==null||Ue.envMap!==_e||V.fog===!0&&Ue.fog!==te||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==re.numPlanes||Ue.numIntersection!==re.numIntersection)||Ue.vertexAlphas!==ke||Ue.vertexTangents!==He||Ue.morphTargets!==De||Ue.morphNormals!==Qe||Ue.morphColors!==ct||Ue.toneMapping!==Lt||Ue.morphTargetsCount!==_t)&&(rt=!0):(rt=!0,Ue.__version=V.version);let dn=Ue.currentProgram;rt===!0&&(dn=Jr(V,N,O));let Fi=!1,fn=!1,vr=!1;const It=dn.getUniforms(),yn=Ue.uniforms;if(Pe.useProgram(dn.program)&&(Fi=!0,fn=!0,vr=!0),V.id!==y&&(y=V.id,fn=!0),Fi||x!==b){Pe.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),It.setValue(L,"projectionMatrix",b.projectionMatrix),It.setValue(L,"viewMatrix",b.matrixWorldInverse);const an=It.map.cameraPosition;an!==void 0&&an.setValue(L,Oe.setFromMatrixPosition(b.matrixWorld)),ot.logarithmicDepthBuffer&&It.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&It.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),x!==b&&(x=b,fn=!0,vr=!0)}if(O.isSkinnedMesh){It.setOptional(L,O,"bindMatrix"),It.setOptional(L,O,"bindMatrixInverse");const nn=O.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),It.setValue(L,"boneTexture",nn.boneTexture,Ze))}O.isBatchedMesh&&(It.setOptional(L,O,"batchingTexture"),It.setValue(L,"batchingTexture",O._matricesTexture,Ze),It.setOptional(L,O,"batchingIdTexture"),It.setValue(L,"batchingIdTexture",O._indirectTexture,Ze),It.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&It.setValue(L,"batchingColorTexture",O._colorsTexture,Ze));const bn=H.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&ne.update(O,H,dn),(fn||Ue.receiveShadow!==O.receiveShadow)&&(Ue.receiveShadow=O.receiveShadow,It.setValue(L,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(yn.envMap.value=_e,yn.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(yn.envMapIntensity.value=N.environmentIntensity),fn&&(It.setValue(L,"toneMappingExposure",v.toneMappingExposure),Ue.needsLights&&th(yn,vr),te&&V.fog===!0&&Q.refreshFogUniforms(yn,te),Q.refreshMaterialUniforms(yn,V,X,J,d.state.transmissionRenderTarget[b.id]),Us.upload(L,hl(Ue),yn,Ze)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Us.upload(L,hl(Ue),yn,Ze),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&It.setValue(L,"center",O.center),It.setValue(L,"modelViewMatrix",O.modelViewMatrix),It.setValue(L,"normalMatrix",O.normalMatrix),It.setValue(L,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const nn=V.uniformsGroups;for(let an=0,eo=nn.length;an<eo;an++){const xi=nn[an];qe.update(xi,dn),qe.bind(xi,dn)}}return dn}function th(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function nh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,N,H){const V=ye.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),ye.get(b.texture).__webglTexture=N,ye.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:H,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){const H=ye.get(b);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0};const ih=L.createFramebuffer();this.setRenderTarget=function(b,N=0,H=0){D=b,A=N,R=H;let V=!0,O=null,te=!1,pe=!1;if(b){const _e=ye.get(b);if(_e.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(L.FRAMEBUFFER,null),V=!1;else if(_e.__webglFramebuffer===void 0)Ze.setupRenderTarget(b);else if(_e.__hasExternalTextures)Ze.rebindTextures(b,ye.get(b.texture).__webglTexture,ye.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const De=b.depthTexture;if(_e.__boundDepthTexture!==De){if(De!==null&&ye.has(De)&&(b.width!==De.image.width||b.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ze.setupDepthRenderbuffer(b)}}const ke=b.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(pe=!0);const He=ye.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(He[N])?O=He[N][H]:O=He[N],te=!0):b.samples>0&&Ze.useMultisampledRTT(b)===!1?O=ye.get(b).__webglMultisampledFramebuffer:Array.isArray(He)?O=He[H]:O=He,C.copy(b.viewport),k.copy(b.scissor),B=b.scissorTest}else C.copy(Ie).multiplyScalar(X).floor(),k.copy(Ke).multiplyScalar(X).floor(),B=At;if(H!==0&&(O=ih),Pe.bindFramebuffer(L.FRAMEBUFFER,O)&&V&&Pe.drawBuffers(b,O),Pe.viewport(C),Pe.scissor(k),Pe.setScissorTest(B),te){const _e=ye.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,_e.__webglTexture,H)}else if(pe){const _e=N;for(let ke=0;ke<b.textures.length;ke++){const He=ye.get(b.textures[ke]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ke,He.__webglTexture,H,_e)}}else if(b!==null&&H!==0){const _e=ye.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_e.__webglTexture,H)}y=-1},this.readRenderTargetPixels=function(b,N,H,V,O,te,pe,Se=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=ye.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(_e=_e[pe]),_e){Pe.bindFramebuffer(L.FRAMEBUFFER,_e);try{const ke=b.textures[Se],He=ke.format,De=ke.type;if(!ot.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-V&&H>=0&&H<=b.height-O&&(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Se),L.readPixels(N,H,V,O,Ae.convert(He),Ae.convert(De),te))}finally{const ke=D!==null?ye.get(D).__webglFramebuffer:null;Pe.bindFramebuffer(L.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(b,N,H,V,O,te,pe,Se=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=ye.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(_e=_e[pe]),_e)if(N>=0&&N<=b.width-V&&H>=0&&H<=b.height-O){Pe.bindFramebuffer(L.FRAMEBUFFER,_e);const ke=b.textures[Se],He=ke.format,De=ke.type;if(!ot.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Qe),L.bufferData(L.PIXEL_PACK_BUFFER,te.byteLength,L.STREAM_READ),b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Se),L.readPixels(N,H,V,O,Ae.convert(He),Ae.convert(De),0);const ct=D!==null?ye.get(D).__webglFramebuffer:null;Pe.bindFramebuffer(L.FRAMEBUFFER,ct);const Lt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await jh(L,Lt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Qe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,te),L.deleteBuffer(Qe),L.deleteSync(Lt),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,H=0){const V=Math.pow(2,-H),O=Math.floor(b.image.width*V),te=Math.floor(b.image.height*V),pe=N!==null?N.x:0,Se=N!==null?N.y:0;Ze.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,pe,Se,O,te),Pe.unbindTexture()};const rh=L.createFramebuffer(),sh=L.createFramebuffer();this.copyTextureToTexture=function(b,N,H=null,V=null,O=0,te=null){te===null&&(O!==0?(lr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=O,O=0):te=0);let pe,Se,_e,ke,He,De,Qe,ct,Lt;const Tt=b.isCompressedTexture?b.mipmaps[te]:b.image;if(H!==null)pe=H.max.x-H.min.x,Se=H.max.y-H.min.y,_e=H.isBox3?H.max.z-H.min.z:1,ke=H.min.x,He=H.min.y,De=H.isBox3?H.min.z:0;else{const bn=Math.pow(2,-O);pe=Math.floor(Tt.width*bn),Se=Math.floor(Tt.height*bn),b.isDataArrayTexture?_e=Tt.depth:b.isData3DTexture?_e=Math.floor(Tt.depth*bn):_e=1,ke=0,He=0,De=0}V!==null?(Qe=V.x,ct=V.y,Lt=V.z):(Qe=0,ct=0,Lt=0);const _t=Ae.convert(N.format),Ue=Ae.convert(N.type);let Pt;N.isData3DTexture?(Ze.setTexture3D(N,0),Pt=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ze.setTexture2DArray(N,0),Pt=L.TEXTURE_2D_ARRAY):(Ze.setTexture2D(N,0),Pt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const rt=L.getParameter(L.UNPACK_ROW_LENGTH),dn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Fi=L.getParameter(L.UNPACK_SKIP_PIXELS),fn=L.getParameter(L.UNPACK_SKIP_ROWS),vr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Tt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Tt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ke),L.pixelStorei(L.UNPACK_SKIP_ROWS,He),L.pixelStorei(L.UNPACK_SKIP_IMAGES,De);const It=b.isDataArrayTexture||b.isData3DTexture,yn=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){const bn=ye.get(b),nn=ye.get(N),an=ye.get(bn.__renderTarget),eo=ye.get(nn.__renderTarget);Pe.bindFramebuffer(L.READ_FRAMEBUFFER,an.__webglFramebuffer),Pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,eo.__webglFramebuffer);for(let xi=0;xi<_e;xi++)It&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.get(b).__webglTexture,O,De+xi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.get(N).__webglTexture,te,Lt+xi)),L.blitFramebuffer(ke,He,pe,Se,Qe,ct,pe,Se,L.DEPTH_BUFFER_BIT,L.NEAREST);Pe.bindFramebuffer(L.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||b.isRenderTargetTexture||ye.has(b)){const bn=ye.get(b),nn=ye.get(N);Pe.bindFramebuffer(L.READ_FRAMEBUFFER,rh),Pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,sh);for(let an=0;an<_e;an++)It?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,bn.__webglTexture,O,De+an):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,bn.__webglTexture,O),yn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,nn.__webglTexture,te,Lt+an):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,nn.__webglTexture,te),O!==0?L.blitFramebuffer(ke,He,pe,Se,Qe,ct,pe,Se,L.COLOR_BUFFER_BIT,L.NEAREST):yn?L.copyTexSubImage3D(Pt,te,Qe,ct,Lt+an,ke,He,pe,Se):L.copyTexSubImage2D(Pt,te,Qe,ct,ke,He,pe,Se);Pe.bindFramebuffer(L.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else yn?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Pt,te,Qe,ct,Lt,pe,Se,_e,_t,Ue,Tt.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Pt,te,Qe,ct,Lt,pe,Se,_e,_t,Tt.data):L.texSubImage3D(Pt,te,Qe,ct,Lt,pe,Se,_e,_t,Ue,Tt):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,te,Qe,ct,pe,Se,_t,Ue,Tt.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,te,Qe,ct,Tt.width,Tt.height,_t,Tt.data):L.texSubImage2D(L.TEXTURE_2D,te,Qe,ct,pe,Se,_t,Ue,Tt);L.pixelStorei(L.UNPACK_ROW_LENGTH,rt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,dn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Fi),L.pixelStorei(L.UNPACK_SKIP_ROWS,fn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,vr),te===0&&N.generateMipmaps&&L.generateMipmap(Pt),Pe.unbindTexture()},this.copyTextureToTexture3D=function(b,N,H=null,V=null,O=0){return lr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,N,H,V,O)},this.initRenderTarget=function(b){ye.get(b).__webglFramebuffer===void 0&&Ze.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ze.setTextureCube(b,0):b.isData3DTexture?Ze.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ze.setTexture2DArray(b,0):Ze.setTexture2D(b,0),Pe.unbindTexture()},this.resetState=function(){A=0,R=0,D=null,Pe.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}const nr=new wn(0,0,0,"YXZ"),ir=new I,Ng={type:"change"},Og={type:"lock"},Fg={type:"unlock"},mc=.002,gc=Math.PI/2;class kg extends Kd{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=zg.bind(this),this._onPointerlockChange=Bg.bind(this),this._onPointerlockError=Hg.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(e){super.connect(e),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;ir.setFromMatrixColumn(t.matrix,0),ir.crossVectors(t.up,ir),t.position.addScaledVector(ir,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;ir.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(ir,e)}lock(e=!1){this.domElement.requestPointerLock({unadjustedMovement:e})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function zg(i){if(this.enabled===!1||this.isLocked===!1)return;const e=this.object;nr.setFromQuaternion(e.quaternion),nr.y-=i.movementX*mc*this.pointerSpeed,nr.x-=i.movementY*mc*this.pointerSpeed,nr.x=Math.max(gc-this.maxPolarAngle,Math.min(gc-this.minPolarAngle,nr.x)),e.quaternion.setFromEuler(nr),this.dispatchEvent(Ng)}function Bg(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(Og),this.isLocked=!0):(this.dispatchEvent(Fg),this.isLocked=!1)}function Hg(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const Vg=.008,_c=Math.PI/2.1;function Gg(i,e,t=Vg){return{yaw:i.yaw-e.dx*t,pitch:Math.max(-_c,Math.min(_c,i.pitch-e.dy*t))}}function Wg(i,e){const t=new Set(e);let n=i;for(;n;){if(t.has(n))return n;n=n.parent}return null}function Xg(i,e,t,n,r,s){return{id:`book-${i}-chapter-${e}`,title:t,theme:n,rooms:s.map(([o,a],l)=>({id:`b${i}-c${e}-r${l+1}`,title:o,theme:n,puzzle:a,difficulty:Number((r+l*.2).toFixed(1)),status:i===1&&(e===1||e===2&&l<=3||e===3&&l<=3||e===4&&l<=3)||i===2&&e===1&&l<=2?"playable":"planned"}))}}const ut=Xg,Nr=[{id:"book-1",number:1,title:"魔法石",subtitle:"霍格沃茨的第一道门",palette:["#7a1f2b","#d3a84b","#19151d"],visualTheme:"温暖烛光、哥特学院、深红与金色、古老石墙",chapters:[ut(1,1,"初入魔法世界","猫头鹰信件、对角巷、魔杖与分院仪式",1,[["猫头鹰来信","重组地址碎片并找出被信件覆盖的隐藏出口"],["对角巷清单","依据课程清单匹配商店、物品和正确数量"],["魔杖选择","组合木材、杖芯、光效和声音反馈"],["分院仪式","排列四学院象征与人物品质打开宴会厅"]]),ut(1,2,"城堡禁区","移动楼梯、画像、巡夜与三头犬活板门",1.5,[["移动楼梯","观察周期并在正确时机连接三段路线"],["会说话的画像","从画像对话矛盾中推导正确口令"],["管理员的巡夜","利用盔甲、猫叫与暗门进行潜行"],["三头犬活板门","组合乐器并复现让守门生物入睡的旋律"]]),ut(1,3,"镜中秘密","飞行课、巨怪、禁书区与厄里斯魔镜",2,[["飞行课遗失物","控制漂浮轨迹把散落物送回正确位置"],["巨怪洗手间","利用悬浮机关移动障碍并建立逃生路线"],["图书馆禁书区","按历史时间线排列书脊并避开尖叫书籍"],["厄里斯魔镜","比较镜像与现实差异选择真正需要的物品"]]),ut(1,4,"地下试炼","魔鬼网、飞钥匙、巫师棋与魔法石",2.5,[["魔鬼网","控制光源与节奏摆脱收缩藤蔓"],["飞钥匙房","依据翅膀损伤、速度和锁孔锁定钥匙"],["巫师棋","规划最少牺牲路线穿过动态棋盘"],["魔法石密室","结合药剂逻辑、镜像线索与章节物品"]])]},{id:"book-2",number:2,title:"密室",subtitle:"蛇语在墙壁深处回响",palette:["#123d32","#7b9361","#0b1412"],visualTheme:"潮湿石窟、蛇形纹样、墨绿冷光、日记墨迹",chapters:[ut(2,1,"不祥警告","精灵封锁、飞车、打人柳与墙上血字",2.4,[["精灵的封锁","修复被干扰物件并找出住宅出口"],["飞车失控","在移动场景中调整动力方向与重量"],["打人柳下","观察树枝攻击规律并匹配安全节拍"],["墙上的血字","利用反射光和水迹还原消失警告"]]),ut(2,2,"决斗与变形","曼德拉草、决斗俱乐部、复方汤剂与伪装",2.9,[["曼德拉草温室","按成熟度、盆土和叫声完成移栽"],["决斗俱乐部","运用护盾、解除和反击的克制关系"],["复方汤剂仓库","按属性、火候与时间调制药剂"],["斯莱特林休息室","在伪装倒计时内筛选有效情报"]]),ut(2,3,"日记中的记忆","盥洗室、日记、蜘蛛巢与被篡改往事",3.4,[["被淹没的盥洗室","调整水管压力显露蛇形入口"],["日记墨迹","在文字消失前连接人物地点与时间"],["禁林蜘蛛巢","依据声音方向和蛛网震动逃生"],["海格往事","对比现实物证与记忆找出篡改"]]),ut(2,4,"蛇怪密室","蛇语石门、管道、凤凰与日记核心",3.9,[["蛇语石门","通过音高和节奏复现门锁序列"],["管道迷宫","依据水流回声和蛇皮判断路线"],["凤凰与毒牙","避开直视威胁并组合治疗与攻击"],["日记核心","在墨迹侵蚀倒计时中定位核心弱点"]])]},{id:"book-3",number:3,title:"阿兹卡班的囚徒",subtitle:"地图、月光与闭合的时间",palette:["#243747","#96a6b4","#17191d"],visualTheme:"暴风雨、月光、旧羊皮地图、旋转钟表",chapters:[ut(3,1,"逃犯阴影","骑士巴士、怪物书、摄魂怪与密道",3.4,[["骑士巴士","在高速变化车厢中固定行李并识别信号"],["怪物书","通过书脊束带和触摸顺序打开教材"],["摄魂怪列车","维持光源和积极记忆阻止冻结"],["霍格莫德密道","使用活点脚印破解隐藏路线"]]),ut(3,2,"时间与恐惧","博格特、月相、占卜与钟楼",3.9,[["博格特衣柜","识别恐惧规则并用荒诞变形解除"],["卢平课堂","根据月相足迹与毛发辨别形态"],["占卜教室","区分随机图案与可重复预兆"],["钟楼机关","同步三个不同时速的钟摆"]]),ut(3,3,"尖叫棚屋","打人柳、身份、斑斑与满月",4.4,[["打人柳密道","组合地图时序和树枝周期进入地道"],["棚屋身份谜题","根据足迹魔杖和证词判断身份"],["斑斑的秘密","追踪体型变化与缺失手指揭示伪装"],["满月倒计时","在环境变化前配置防护与撤离路线"]]),ut(3,4,"时间转换器","守护神、双时间线、塔楼与闭环",4.9,[["湖边守护神","收集记忆碎片构筑完整守护神"],["双时间线救援","让过去与现在的机关保持一致"],["塔楼营救","在不被过去自己发现时改变物件"],["闭环逃脱","同时满足三项事件且不制造时间矛盾"]])]},{id:"book-4",number:4,title:"火焰杯",subtitle:"荣耀背后隐藏着门钥匙",palette:["#1d3f5e","#59a6bd","#d67533"],visualTheme:"国际赛事、蓝色火焰、深湖、龙巢与活体迷宫",chapters:[ut(4,1,"黑魔标记","门钥匙、世界杯营地、骚乱与标记",4.6,[["门钥匙山丘","通过异常触感和空间残影找出门钥匙"],["世界杯营地","依据旗帜语言和空间结构找到营地"],["骚乱撤离","在受限视野中利用声音与地标撤离"],["黑魔标记","重建事件顺序并找出施法位置"]]),ut(4,2,"争霸赛开启","火焰杯、金蛋、龙巢与水下歌声",5.1,[["火焰杯契约","解读年龄线契约符号与参赛规则"],["金蛋线索","按龙种巢穴与护甲选择策略"],["龙巢夺蛋","动态躲避攻击并用场景机关夺蛋"],["水下歌声","改变声音介质后解析旋律密码"]]),ut(4,3,"黑湖营救","鳃囊草、深湖、人鱼村与超额救援",5.6,[["鳃囊草配方","限时辨别水下呼吸材料"],["深湖导航","管理氧气光照和水流寻找地标"],["人鱼村契约","通过符号语言确认人质与规则"],["超额救援","在资源不足时规划多人救援顺序"]]),ut(4,4,"迷宫与墓地","移动树篱、斯芬克斯、奖杯与墓地",6.1,[["会移动的树篱","记录路径变化规律避免循环"],["斯芬克斯问题","在时间压力下完成文字拆分谜题"],["奖杯门钥匙","识别被替换的终点机关并反制"],["墓地决战","组合护盾闪避与环境互动完成逃脱"]])]},{id:"book-5",number:5,title:"凤凰社",subtitle:"规则、反抗与预言之门",palette:["#9e6174","#ead6d6","#111217"],visualTheme:"压抑粉色办公室、秘密训练室、宣传墙与神秘事务司",chapters:[ut(5,1,"审判与监视","巷道、听证会、调查官与血字惩罚",5.8,[["摄魂怪巷道","在照明失效时保护同伴"],["魔法部听证会","按时间证词和法条建立辩护链"],["高级调查官","从不断新增规则中找出逻辑冲突"],["血字惩罚室","利用镜像书写与转印解除机关"]]),ut(5,2,"邓布利多军","有求必应屋、防御阵列、名单与突袭",6.3,[["有求必应屋","用准确需求召唤训练空间"],["基础防御阵列","让位置和咒语方向组成完整护盾"],["秘密成员名单","通过墨水魔法识别泄密路径"],["突袭逃脱","在空间收缩时疏散成员并销毁证据"]]),ut(5,3,"预言梦境","大脑封闭术、壁炉网络、禁林与诱饵",6.8,[["大脑封闭术","区分真实记忆诱导画面与植入信息"],["壁炉网络","连接正确地点并绕过被监控节点"],["禁林审判","利用生物规则化解冲突"],["虚假营救","从不完整梦境中发现诱饵"]]),ut(5,4,"神秘事务司","旋转门厅、时间厅、预言大厅与帷幔",7.3,[["旋转门厅","旋转后依靠非视觉线索确认出口"],["时间厅","控制不同时间方向的物体"],["预言大厅","按人物关系和编号找到预言球"],["帷幔之战","跨房间协同并保护预言撤离"]])]},{id:"book-6",number:6,title:"混血王子",subtitle:"批注、记忆与海边洞穴",palette:["#4c493b","#b89a59","#14221d"],visualTheme:"旧课本批注、液态记忆、暗金墨绿与海边洞穴",chapters:[ut(6,1,"王子的课本","魔药、解毒剂、无声咒与身份批注",6.8,[["魔药教室","比较标准配方与手写批注判断改动"],["解毒剂链","从症状反推毒素与材料"],["无声咒语","依据目标反馈调整施法意图"],["身份批注","分析字迹知识和年代锁定主人"]]),ut(6,2,"记忆之谜","记忆储藏、宴会、篡改与魂器",7.3,[["记忆储藏室","按人物地点和情绪整理液态记忆"],["斯拉格霍恩宴会","从社交关系和回避话题提取线索"],["被篡改的记忆","比较音画不同步与缺失帧"],["魂器真相","连接跨越数十年的物件和人物关系"]]),ut(6,3,"消失柜","有求必应屋、双柜、毒物与入侵计划",7.8,[["有求必应屋迷藏","在堆积物三维迷宫定位同一物件"],["双柜共振","让两个远端房间状态实时联动"],["项链与毒酒","建立受害者传递路径与目标因果图"],["马尔福的计划","在不触发防御时拆解入侵路线"]]),ut(6,4,"海边洞穴","岩壁、黑湖小船、石盆与天文塔",8.3,[["岩壁入口","通过潮汐血液和岩层发现入口"],["黑湖小船","平衡重量人数与魔法强度"],["毒药石盆","规划每次取药后的空间和资源变化"],["天文塔","在多重倒计时中结合洞穴与入侵信息"]])]},{id:"book-7",number:7,title:"死亡圣器",subtitle:"七年线索汇聚于最后一夜",palette:["#252525","#b9b4a4","#7e2e25"],visualTheme:"战争废墟、荒野营地、银色牝鹿、古老符号与燃烧城堡",chapters:[ut(7,1,"逃亡之路","七个波特、婚礼、荒野与魔法部",8,[["七个波特","按身份细节与路线限制分配护送"],["婚礼警报","场景突变后判断出口与可信人物"],["荒野营地","管理保护咒食物方向与广播情报"],["魔法部潜入","三种伪装权限交叉配合完成任务"]]),ut(7,2,"圣器传说","家族遗物、山谷、银色牝鹿与三兄弟",8.5,[["格里莫广场遗物","按家族树和房间历史追踪挂坠盒"],["戈德里克山谷","组合墓碑童话和历史记录"],["银色牝鹿","追踪守护神并管理冰湖资源"],["三兄弟传说","让三件圣器机制在同一模型中成立"]]),ut(7,3,"古灵阁劫案","贝壳小屋、妖精通道、复制金库与巨龙",9,[["贝壳小屋审讯","用魔杖归属和证词制定潜入计划"],["妖精通道","高速切换轨道岔路制动与伪装"],["复制金库","规划最少接触路线避免指数复制"],["巨龙逃生","解除锁链打开穹顶并利用巨龙行为"]]),ut(7,4,"霍格沃茨决战","冠冕、厉火、城堡防线与终局密室",9.4,[["寻找冠冕","整合七部历史线索定位最后魂器"],["厉火密室","在扩散火焰中边移动边改变地形"],["城堡防线","把画像盔甲植物和咒语部署到战区"],["终局密室","综合魔杖归属魂器状态与前关信息"]])]}],qg={books:Nr.length,chapters:Nr.reduce((i,e)=>i+e.chapters.length,0),rooms:Nr.flatMap(i=>i.chapters).reduce((i,e)=>i+e.rooms.length,0)},Vr="hogwarts-escape-progress";function Yg(i){i.removeItem(Vr)}function Eu(i){const e=JSON.parse(i.getItem(Vr));return e?{completedChapter:e.completedChapter,continueFrom:e.continueFrom}:null}function jg(i){const{book:e,chapter:t,room:n}=i.continueFrom;return(e-1)*16+(t-1)*4+n-1}function $g(i,{book:e,chapter:t}){const n=i?.completedChapter;return n?.book===e&&n.chapter+1===t||n?.book+1===e&&n.chapter===4&&t===1}function at(i,{book:e,chapter:t,room:n}){const r=JSON.parse(i.getItem(Vr));i.setItem(Vr,JSON.stringify({version:1,...r?.completedChapter?{completedChapter:r.completedChapter}:{},continueFrom:{book:e,chapter:t,room:n}}))}function Ks(i,{book:e,chapter:t,room:n}){i.setItem(Vr,JSON.stringify({version:1,completedChapter:{book:e,chapter:t},continueFrom:{book:e,chapter:t,room:n}}))}const Kg={en:{魔法石:"Philosopher's Stone",密室:"Chamber of Secrets",阿兹卡班的囚徒:"Prisoner of Azkaban",火焰杯:"Goblet of Fire",凤凰社:"Order of the Phoenix",混血王子:"Half-Blood Prince",死亡圣器:"Deathly Hallows",霍格沃茨的第一道门:"The First Gate of Hogwarts","温暖烛光、哥特学院、深红与金色、古老石墙":"Warm candlelight, Gothic halls, deep crimson and gold, and ancient stone walls.",初入魔法世界:"Entering the Wizarding World",城堡禁区:"Forbidden Castle Corridors",镜中秘密:"Secrets in the Mirror",地下试炼:"Underground Trials",重组地址碎片并找出被信件覆盖的隐藏出口:"Reassemble address fragments and uncover the hidden exit buried beneath the letters.","依据课程清单匹配商店、物品和正确数量":"Match each shop, item, and quantity to the school supply list.","组合木材、杖芯、光效和声音反馈":"Combine wood, core, light, and sound feedback to find the right wand.",排列四学院象征与人物品质打开宴会厅:"Match the four house emblems with their defining traits to open the Great Hall.",观察周期并在正确时机连接三段路线:"Observe the cycle and connect three route segments at the right moment.",从画像对话矛盾中推导正确口令:"Use contradictions in the portraits’ testimony to deduce the password.","利用盔甲、猫叫与暗门进行潜行":"Use armor, a cat’s bell, and a secret door to slip past the patrol.",组合乐器并复现让守门生物入睡的旋律:"Combine instruments and recreate the melody that sends the guardian to sleep.",控制漂浮轨迹把散落物送回正确位置:"Control floating trajectories to return each lost object to its proper place.",利用悬浮机关移动障碍并建立逃生路线:"Use levitation mechanisms to clear obstacles and build an escape route.",按历史时间线排列书脊并避开尖叫书籍:"Order book spines by historical date while avoiding the screaming volume.",比较镜像与现实差异选择真正需要的物品:"Compare reflection and reality to choose what is truly needed.",控制光源与节奏摆脱收缩藤蔓:"Control light and rhythm to escape the tightening vines.","依据翅膀损伤、速度和锁孔锁定钥匙":"Identify the key by wing damage, speed, and the lock’s keyhole.",规划最少牺牲路线穿过动态棋盘:"Plan a route across the living board with the fewest sacrifices.","结合药剂逻辑、镜像线索与章节物品":"Combine potion logic, mirror clues, and items gathered throughout the chapter.",猫头鹰来信:"Owl Post","目标：按弗农改变藏身处的时间顺序检查四封信":"Objective: inspect the four letters in the order the Dursleys changed hiding places.","地址会追着哈利变化。错误选择会让已确认的信全部重新飞散。":"The address follows Harry wherever he goes. A wrong choice scatters every confirmed letter.",对角巷清单:"Diagon Alley List","目标：按霍格沃茨清单采购四件合规格物品，预算 12 加隆":"Objective: buy four correctly specified school items in list order with a budget of 12 Galleons.","课本 → 二号锡制坩埚 → 猫头鹰 → 魔杖盒。核对规格与价签，买错会清空采购篮。":"Textbook → size 2 pewter cauldron → owl → wand case. Check every specification and price; a wrong purchase empties the basket.",魔杖选择:"The Wand Chooses","目标：第一阶段，从三种木材中找出与你产生稳定共鸣的一种":"Objective: first, find the one wood among three that resonates steadily with you.","木材线索：闪电形旧伤旁，常青叶不会在严冬凋零。选错会触发失控魔法。":"Wood clue: beside the lightning-shaped scar, an evergreen leaf never fades in winter. A wrong choice unleashes wild magic.",分院仪式:"Sorting Ceremony","目标：走近分院帽，观察大厅里的四学院象征":"Objective: approach the Sorting Hat and study the four house emblems in the Great Hall.","勇气、忠诚、智慧与野心各有象征；分院帽正在等待你的选择。":"Courage, loyalty, wisdom, and ambition each have an emblem. The Sorting Hat awaits your choice.",移动楼梯:"Moving Staircases","目标：依据钟摆与月相路线，依次稳定三座移动楼梯":"Objective: use the pendulum and moon-route clues to stabilize three moving staircases in order.","路线铭文：从最低的平台起步；月光桥只在钟摆居中时停驻；最后登上最高塔。选错会让路线复位并增加 5 秒惩罚。":"Route inscription: begin at the lowest landing; the moonlit bridge stops only when the pendulum is centered; finish at the highest tower. A mistake resets the route and adds five seconds.",会说话的画像:"Talking Portraits","目标：比较三幅画像的证词，按可信的发言顺序询问口令":"Objective: compare three portraits’ testimony and question them in the credible order to reveal the password.","学者说骑士不是第一位；骑士承认学者必须先发言；女士说自己在骑士之后。错误询问会惊动走廊并清空推理。":"The scholar says the knight is not first; the knight admits the scholar must speak first; the lady says she follows the knight. A wrong question alerts the corridor and clears your deductions.",管理员的巡夜:"The Caretaker’s Patrol","目标：利用盔甲遮挡、猫铃声与暗门，避开管理员的灯光巡查":"Objective: use the suit of armor, the cat’s bell, and the secret door to evade the caretaker’s lantern patrol.","巡夜图记：灯光先扫过空盔甲；猫铃能把脚步引向反方向；最后掀开独角兽挂毯。走错会清空路线并提高警戒。":"Patrol notes: the light first sweeps the empty armor; the cat’s bell draws footsteps away; finally lift the unicorn tapestry. A wrong move resets the route and raises the alert.",三头犬活板门:"Three-Headed Guardian","目标：按守门生物能接受的层次，奏出完整安眠旋律":"Objective: perform the complete lullaby in the layers the guardian can tolerate.","褪色乐谱写着：先让气息像夜风进入梦乡，再让琴弦托住梦境，最后以发条的轻响封住鼾声。错奏会重置旋律并惊醒守卫。":"The faded score says: let breath drift into sleep like a night wind, let strings cradle the dream, then seal the snoring with a soft clockwork chime. A wrong note resets the melody and wakes the guardian.",飞行课遗失物:"Flying Lesson: Lost Property","目标：借助风向旗判断重量，依次把三件遗失物送入对应的安全轨迹":"Objective: read the windsock and send three lost objects into their safe flight paths in weight order.","风向板写着：最轻的红色织物先借低风归队；有月纹的笔记随后穿过中环；沉重黄铜罗盘最后沿高风落到新生手中。错序会卷起乱流并吹散全部物品。":"The wind board says: the light red cloth rides the low wind first; the moon-marked notebook follows through the middle ring; the heavy brass compass returns last on the high current. A wrong order creates turbulence and scatters everything.",巨怪洗手间:"Troll Washroom","目标：依次稳定漏水、悬浮瓦砾，再放下横梁架出逃生路线":"Objective: stop the leak, levitate the rubble, then lower the beam to build an escape route.","破裂水管正在冲散落脚点。先转动月纹阀止水，再让碎石升起清出通道，最后才能把高处横梁平稳放到沟渠上。错序会让巨怪逼近并震塌路线。":"The burst pipe is washing away every foothold. Turn the moon-marked valve first, raise the rubble to clear the passage, then lower the high beam across the channel. A wrong order brings the troll closer and collapses the route.",图书馆禁书区:"Restricted Section","目标：依据馆藏年代，按从古到今的顺序点亮三本安全书脊":"Objective: use the catalogue dates to illuminate three safe book spines from oldest to newest.","目录铜牌记载：四学院建校录最古老；龙灾账册写于其后数百年；月蚀纪事刚完成修订。避开锁链缠绕、会尖叫的无年卷。":"The brass catalogue says: the Founders’ Record is oldest; the Dragon Calamity Ledger came centuries later; the Eclipse Chronicle was just revised. Avoid the chained, dateless volume that screams.",厄里斯魔镜:"Mirror of Erised","目标：比较镜中欲望与现实处境，依次选择真正需要的三件物品":"Objective: compare desire with reality and choose the three things you truly need, in order.","镜中人戴着王冠、捧着奖杯，却在现实的寒风中发抖。先御寒，再为黑暗出口照路；最后记住：能共同离开的人，比独占的荣誉更重要。":"The reflection wears a crown and holds a trophy, yet shivers in the real cold. Choose warmth first, then light for the dark exit, and remember: a companion who leaves with you matters more than glory kept alone.",魔鬼网:"Devil’s Snare","目标：保持镇静，按正确节奏控制蓝铃火焰，让藤蔓松开地下出口":"Objective: stay calm and control the bluebell flames in the right rhythm to make the vines release the underground exit.","挣扎会让藤蔓收紧。先放松摆脱缠绕，再点燃冷焰，最后维持稳定光照；猛烈爆燃只会惊动整片根网。":"Struggling tightens the vines. Relax first, ignite the cool flame, then hold a steady light; a violent burst only alarms the entire root network.","停止挣扎 · 蓝铃冷焰 · 三拍恒光":"STOP STRUGGLING · BLUEBELL FLAME · THREE STEADY PULSES",放松呼吸:"Relax and breathe","I · 停止挣扎":"I · STOP STRUGGLING",点燃蓝铃冷焰:"Kindle bluebell flame","II · 微光驱藤":"II · COOL LIGHT REPELS VINES",维持恒定光照:"Hold steady light","III · 稳住三拍":"III · HOLD THREE PULSES",猛烈爆燃:"Wild flare","诱饵 · 惊动根网":"DECOY · ALARMS ROOT NET","地下试炼已加载：放松藤蔓缠绕，以蓝铃冷焰和三拍恒光打开根网。":"Underground Trial loaded: relax the vines, then use bluebell flame and three steady pulses to open the root net.","“{label}”打乱节奏！根网骤然收紧至 {count} 级；先放松，再重新开始。":"“{label}” broke the rhythm! The root net tightened to level {count}; begin again by relaxing.","你停止挣扎，第一层藤蔓松开。现在点燃不会灼伤施法者的蓝铃冷焰。":"You stopped struggling and the first vines loosened. Now kindle the bluebell flame that will not burn its caster.","冷焰逼退根须。最后保持三拍恒光，不要让亮度突然爆发。":"The cool flame drives back the roots. Hold three steady pulses now; do not let the light flare.","魔鬼网光照节奏已完成 {count} / 3":"Light rhythm completed: {count} / 3","{label}奏效，地下出口上方的藤蔓正在退缩。":"{label} worked; the vines above the underground exit are retreating.","魔鬼网完成：稳定冷焰驱散根网，通往飞钥匙房的地下出口已经开启":"Devil’s Snare complete: steady cool flame dispersed the root net and opened the underground exit to Flying Keys.","镇静削弱缠绕，蓝铃冷焰逼退藤蔓，三拍恒光打开根网。前方传来成群翅膀的振动声。":"Calm weakened the grip, bluebell flame repelled the vines, and three steady pulses opened the roots. A swarm of wings hums ahead.","第一部 · 第四章 · 第 1 关完成":"Book 1 · Chapter 4 · Room 1 complete",冷焰退藤:"Vines Before Cool Flame","魔鬼网缩回石缝——正在进入飞钥匙房！":"The Devil’s Snare withdraws into the stone—entering Flying Keys!",飞钥匙房:"Flying Keys","目标：依次确认翅膀损伤、飞行轨迹和锁孔材质，锁定唯一真钥匙":"Objective: identify wing damage, flight path, and keyhole material in order to find the one true key.","门锁留下银屑；真正用过的钥匙左翼弯折，负重后会沿顺时针轨迹下沉。先观察损伤，再追踪轨迹，最后核对银色钥匙。":"The lock left silver filings. The used key has a bent left wing and sinks clockwise under weight. Inspect the damage, trace the path, then confirm the silver key.","左翼折痕 · 顺时针下沉 · 银屑锁孔":"BENT LEFT WING · CLOCKWISE DESCENT · SILVER LOCK",左翼弯折的钥影:"Key with a bent left wing","I · 使用损伤":"I · WEAR DAMAGE",顺时针下沉轨迹:"Clockwise descending trail","II · 负重飞行":"II · WEIGHTED FLIGHT",小型银钥匙:"Small silver key","III · 银屑吻合":"III · SILVER MATCH",华丽金钥匙:"Ornate golden key","诱饵 · 锁孔无金屑":"DECOY · NO GOLD IN LOCK","飞钥匙房已加载：依次核对折翼、飞行轨迹和锁孔银屑。":"Flying Keys loaded: inspect the bent wing, clockwise trail, and silver filings in order.","“{label}”惊散了钥匙群！追逐失误升至 {count}，三条证据需要重新确认。":"“{label}” scattered the flock! Pursuit errors rose to {count}; recheck all three clues.","左翼折痕与门框刮痕一致。现在观察负重钥匙群，寻找顺时针下沉的轨迹。":"The bent left wing matches the frame scratch. Now watch the weighted flock for a clockwise descending path.","下沉轨迹锁定了小型钥匙。最后核对锁孔银屑，排除华丽但材质不符的金钥匙。":"The descending path identifies a small key. Compare the lock’s silver filings last and reject the ornate golden mismatch.","飞钥匙证据已确认 {count} / 3":"Flying-key clues confirmed: {count} / 3","{label}与现场证据吻合，钥匙群的范围缩小了。":"{label} matches the physical evidence; the flock narrows.","飞钥匙房完成：折翼银钥匙准确嵌入门锁，通往巫师棋盘的石门已经开启":"Flying Keys complete: the bent-wing silver key fits, opening the stone door to Wizard Chess.","折翼证明它被使用过，顺时针下沉暴露负重，银屑完成最终材质核对。前方传来巨大棋子的脚步声。":"The bent wing proves prior use, the clockwise descent reveals its weight, and the filings confirm silver. Giant chess pieces stir ahead.","第一部 · 第四章 · 第 2 关完成":"Book 1 · Chapter 4 · Room 2 complete",折翼银钥匙:"The Bent-Wing Silver Key","银钥匙旋转一周，棋盘石门轰然开启——正在进入巫师棋盘！":"The silver key turns once and the stone door crashes open—entering Wizard Chess!","巫师棋已加载：先诱敌，再双攻，最后沿空线推进。":"Wizard Chess loaded: decoy first, fork second, then advance along the open file.",巫师棋:"Wizard Chess","目标：用最少牺牲打开通往对岸的安全棋路":"Objective: open a safe route across the board with the fewest sacrifices.","黑后封锁中央。先用边兵引开主教，再让骑士双攻国王与城堡，最后直车沿空出的纵线推进；贸然冲后会让已投入的棋子全部被吃。":"The black queen controls the center. Use the edge pawn to draw off the bishop, fork king and rook with the knight, then advance the rook along the open file. Charging the queen too soon loses every committed piece.","边兵牵制主教 · 骑士双攻 · 城堡穿过空线":"EDGE PAWN DRAWS BISHOP · KNIGHT FORK · ROOK CROSSES OPEN FILE",边兵诱敌:"Edge-pawn decoy","I · 引开主教":"I · DRAW OFF BISHOP",骑士双攻:"Knight fork","II · 将军攻车":"II · CHECK KING AND ROOK",城堡沿空线推进:"Rook along open file","III · 空线抵岸":"III · CROSS THE OPEN FILE",王后强攻:"Queen charge","诱饵 · 暴露全线":"DECOY · EXPOSES THE FILE","“{label}”暴露了棋路！巨棋吃掉已投入棋子，被吃总数升至 {count}。":"“{label}” exposed the route! Giant pieces captured the committed force; {count} pieces lost in total.","边兵引开了黑主教。现在用骑士同时威胁国王与城堡，迫使黑方让出中央。":"The edge pawn drew off the black bishop. Now fork the king and rook with the knight to force the center open.","骑士双攻奏效，纵线已经清空。最后让城堡沿直线推进到对岸。":"The knight fork worked and cleared the file. Send the rook straight across to the far rank.","安全棋步已确认 {count} / 3":"Safe moves confirmed: {count} / 3","{label}成立，巨型黑棋被迫改换阵形。":"{label} works; the giant black pieces are forced to change formation.","巫师棋完成：仅以边兵诱敌，骑士与城堡已安全抵达对岸":"Wizard Chess complete: only the edge pawn was sacrificed; the knight and rook reached the far side safely.","诱敌打开斜线，双攻迫使让位，城堡穿过空线。最后的魔法石密室就在棋盘后方。":"The decoy opened a diagonal, the fork forced a retreat, and the rook crossed the open file. The Stone Chamber lies beyond the board.","第一部 · 第四章 · 第 3 关完成":"Book 1 · Chapter 4 · Room 3 complete",最少牺牲棋路:"The Least-Sacrifice Route","白色城堡抵达对岸，火门显现——正在进入魔法石密室！":"The white rook reaches the far rank and a fire door appears—entering the Stone Chamber!","最终密室已加载：先解药剂逻辑，再辨镜像，最后证明守护意图。":"Final chamber loaded: solve the potions, read the mirror, then prove your protective intent.",魔法石密室:"The Stone Chamber","目标：穿过黑焰，解读镜像，并证明你只想保护魔法石":"Objective: cross the black flames, interpret the mirror, and prove you seek only to protect the Stone.","七瓶药剂中，最小的瓶子可穿过黑焰。镜中真正的守护者口袋仍空着；想夺取魔法石的手只会触发密室腐化。":"Of seven potions, the smallest bottle crosses the black fire. In the mirror, a true guardian’s pocket remains empty; a hand reaching to take the Stone only awakens the chamber’s corruption.","七瓶取最小 · 镜中口袋为空 · 双手只作守护":"SMALLEST OF SEVEN · EMPTY MIRROR POCKET · OPEN HANDS PROTECT","厄里斯 · 欲望倒写显形":"ERISED · DESIRE REVEALED IN REVERSE",最小银瓶:"Smallest silver bottle","I · 穿越黑焰":"I · CROSS BLACK FIRE",空口袋镜影:"Empty-pocket reflection","II · 不占有":"II · CLAIM NOTHING",守护石的誓言:"Vow to protect the Stone","III · 只为保护":"III · PROTECT ONLY",夺取石的手:"Grasping hand","诱饵 · 占有欲":"DECOY · POSSESSIVE INTENT","“{label}”暴露了占有欲！线索消散，腐化诱惑升至 {count}。":"“{label}” revealed possessive intent! The clues dissolved and corruption rose to {count}.","最小银瓶让你穿过黑焰。现在观察镜中衣袋：真正不求占有的人，口袋里不会出现石头。":"The smallest silver bottle carried you through the black fire. Now inspect the reflected pocket: someone who seeks no possession will find no Stone there.","空口袋镜影证明你没有取石欲望。最后明确你的意图：保护它，而不是拥有它。":"The empty reflected pocket proves you do not seek the Stone. Declare your final intent: protect it, never possess it.","魔法石密室线索已确认 {count} / 3":"Stone Chamber clues confirmed: {count} / 3","{label}通过了密室检验，镜面中的金光更加清晰。":"{label} passed the chamber’s test; gold light sharpens in the mirror.","第一部完成：魔法石只向无意占有、决心守护的人显现":"Book One complete: the Stone appears only to one who will protect it without possessing it.","药剂穿过黑焰，空口袋识破欲望，守护誓言让魔法石安全显现。新的绿色干扰正在住宅中聚集。":"The potion crossed the black fire, the empty pocket exposed desire, and the protective vow revealed the Stone safely. Green interference is gathering at Privet Drive.","第一部 · 魔法石完成":"Book 1 · Philosopher’s Stone complete","第二部 · 不祥警告":"Book 2 · An Ominous Warning","守护之石化作金光——正在返回住宅，调查精灵留下的三重封锁！":"The protected Stone dissolves into gold light—returning to Privet Drive to investigate the elf’s triple blockade!","第二部首关已加载：沿邮槽、蛋糕与飞路炉追踪绿色魔力残痕。":"Book Two’s first room loaded: follow the green traces from the letter slot to the cake, then the fireplace.",精灵的封锁:"The Elf’s Blockade","目标：循魔力残痕解除住宅中的三重封锁，赶往国王十字车站":"Objective: follow the magical residue, break the house’s triple blockade, and reach King’s Cross.","绿色干扰从邮槽进入，绕过悬浮蛋糕，最后汇入壁炉封印。错碰尖叫灯会让封锁重新闭合。":"Green interference enters through the letter slot, circles the floating cake, then flows into the fireplace seal. Touching the shrieking lamp closes the blockade again.",飞车失控:"Runaway Flying Car","目标：在撞上高架桥前依次稳定配重、航向与油门":"Objective: stabilize the load, heading, and throttle in order before hitting the viaduct.","后备箱先把车头拉高；红色铁路信号给出航向；发动机过热时只能脉冲给油。猛踩油门会让飞车再次翻滚。":"The boot first pulls the nose high; the red railway signal gives the heading; an overheating engine accepts only pulsed throttle. Flooring it sends the car rolling again.",打人柳下:"Beneath the Whomping Willow","目标：读懂枝条的高扫、低返与露根间隙，安全抵达树洞":"Objective: read the high sweep, low return, and exposed-root opening to reach the hollow safely.","粗枝先从头顶横扫；回摆会贴近地面。只有第二次攻击收势后，发光树根之间才会短暂露出通道。":"A heavy branch sweeps overhead first; its return cuts close to the ground. Only after the second strike settles does a passage briefly open between the glowing roots.","楼梯下 · 楼上小卧室 · 17 号房 · 海上小屋":"STAIRS · BEDROOM · ROOM 17 · ROCK HUT","H. Potter · 楼梯下的储物间":"H. Potter · Cupboard under the Stairs","I · 楼梯下储物间":"I · CUPBOARD UNDER STAIRS","H. Potter · 楼上最小的卧室":"H. Potter · Smallest Bedroom Upstairs","II · 楼上最小卧室":"II · SMALLEST BEDROOM","H. Potter · 铁路景观酒店 17 号房":"H. Potter · Railview Hotel, Room 17","III · 铁路旅馆 17 号房":"III · RAILVIEW ROOM 17","H. Potter · 海上岩礁小屋":"H. Potter · Hut on the Rock, at Sea","IV · 海上岩礁小屋":"IV · HUT ON THE ROCK",楼梯下的储物间:"CUPBOARD UNDER THE STAIRS",通往对角巷:"DOOR TO DIAGON ALLEY","V. Dursley · 女贞路前门":"V. Dursley · Privet Drive Front Door","D. Dursley · 厨房餐桌":"D. Dursley · Kitchen Table","H. Potter · 动物园爬虫馆":"H. Potter · Zoo Reptile House","H. Potter · 石墙中学":"H. Potter · Stonewall High","顺序错误：“{destination}”不是下一处藏身地。四封信重新飞散！":"Wrong chronology: “{destination}” is not the next hiding place. All four letters scatter again!","时间线正确：{destination} · {count} / 4":"Chronology confirmed: {destination} · {count} / 4","时间线完成：循红蜡封印前往通往对角巷的门":"Chronology complete: follow the crimson wax seals to the door into Diagon Alley.","四处藏身地首尾相接，信上的猩红 H 蜡印化成了门钥匙。":"The four hiding places form one journey; the crimson H seals have become a door key.","四封信按时间顺序排列完成——通往对角巷的门已开启！":"The four letters are in chronological order—the door to Diagon Alley is open!"},fr:{魔法石:"La Pierre philosophale",密室:"La Chambre des secrets",阿兹卡班的囚徒:"Le Prisonnier d’Azkaban",火焰杯:"La Coupe de feu",凤凰社:"L’Ordre du Phénix",混血王子:"Le Prince de sang-mêlé",死亡圣器:"Les Reliques de la Mort",霍格沃茨的第一道门:"La première porte de Poudlard","温暖烛光、哥特学院、深红与金色、古老石墙":"Lueurs de bougies, architecture gothique, rouge profond, or et antiques murs de pierre.",初入魔法世界:"Entrée dans le monde des sorciers",城堡禁区:"Les couloirs interdits du château",镜中秘密:"Les secrets du miroir",地下试炼:"Les épreuves souterraines",重组地址碎片并找出被信件覆盖的隐藏出口:"Reconstituez les fragments d’adresse et découvrez la sortie cachée sous les lettres.","依据课程清单匹配商店、物品和正确数量":"Associez chaque boutique, objet et quantité à la liste des fournitures.","组合木材、杖芯、光效和声音反馈":"Combinez bois, cœur, lumière et réactions sonores pour trouver la bonne baguette.",排列四学院象征与人物品质打开宴会厅:"Associez les quatre emblèmes à leurs qualités pour ouvrir la Grande Salle.",观察周期并在正确时机连接三段路线:"Observez le cycle et reliez les trois segments du parcours au bon moment.",从画像对话矛盾中推导正确口令:"Exploitez les contradictions des portraits pour déduire le mot de passe.","利用盔甲、猫叫与暗门进行潜行":"Servez-vous de l’armure, de la clochette du chat et d’une porte secrète pour éviter la ronde.",组合乐器并复现让守门生物入睡的旋律:"Combinez les instruments et reproduisez la mélodie qui endort le gardien.",控制漂浮轨迹把散落物送回正确位置:"Maîtrisez les trajectoires flottantes pour rendre chaque objet perdu.",利用悬浮机关移动障碍并建立逃生路线:"Utilisez la lévitation pour déplacer les obstacles et créer une issue.",按历史时间线排列书脊并避开尖叫书籍:"Classez les dos des livres par époque tout en évitant le volume hurleur.",比较镜像与现实差异选择真正需要的物品:"Comparez le reflet à la réalité pour choisir ce qui est réellement nécessaire.",控制光源与节奏摆脱收缩藤蔓:"Maîtrisez la lumière et le rythme pour échapper aux lianes qui se resserrent.","依据翅膀损伤、速度和锁孔锁定钥匙":"Identifiez la clé grâce à son aile abîmée, sa vitesse et la serrure.",规划最少牺牲路线穿过动态棋盘:"Planifiez un passage sur l’échiquier vivant avec un minimum de sacrifices.","结合药剂逻辑、镜像线索与章节物品":"Combinez la logique des potions, les indices du miroir et les objets du chapitre.",猫头鹰来信:"Le courrier des hiboux","目标：按弗农改变藏身处的时间顺序检查四封信":"Objectif : examinez les quatre lettres dans l’ordre des cachettes choisies par les Dursley.","地址会追着哈利变化。错误选择会让已确认的信全部重新飞散。":"L’adresse suit Harry partout. Une erreur disperse toutes les lettres déjà confirmées.",对角巷清单:"La liste du Chemin de Traverse","目标：按霍格沃茨清单采购四件合规格物品，预算 12 加隆":"Objectif : achetez quatre fournitures conformes, dans l’ordre de la liste, avec douze Gallions.","课本 → 二号锡制坩埚 → 猫头鹰 → 魔杖盒。核对规格与价签，买错会清空采购篮。":"Manuel → chaudron en étain taille 2 → hibou → étui à baguette. Vérifiez les caractéristiques et les prix : une erreur vide le panier.",魔杖选择:"La baguette choisit son sorcier","目标：第一阶段，从三种木材中找出与你产生稳定共鸣的一种":"Objectif : trouvez d’abord, parmi trois bois, celui qui entre en résonance stable avec vous.","木材线索：闪电形旧伤旁，常青叶不会在严冬凋零。选错会触发失控魔法。":"Indice : près d’une ancienne cicatrice en forme d’éclair, une feuille persistante ne fane jamais en hiver. Un mauvais choix déchaîne une magie incontrôlée.",分院仪式:"La cérémonie de la Répartition","目标：走近分院帽，观察大厅里的四学院象征":"Objectif : approchez-vous du Choixpeau et observez les emblèmes des quatre maisons dans la Grande Salle.","勇气、忠诚、智慧与野心各有象征；分院帽正在等待你的选择。":"Courage, loyauté, sagesse et ambition ont chacun leur emblème. Le Choixpeau attend votre décision.",移动楼梯:"Les escaliers mouvants","目标：依据钟摆与月相路线，依次稳定三座移动楼梯":"Objectif : suivez les indices du pendule et de la lune pour stabiliser trois escaliers dans le bon ordre.","路线铭文：从最低的平台起步；月光桥只在钟摆居中时停驻；最后登上最高塔。选错会让路线复位并增加 5 秒惩罚。":"Inscription : partez du palier le plus bas ; le pont lunaire s’immobilise lorsque le pendule est centré ; terminez par la plus haute tour. Une erreur réinitialise le parcours et ajoute cinq secondes.",会说话的画像:"Les portraits bavards","目标：比较三幅画像的证词，按可信的发言顺序询问口令":"Objectif : confrontez les témoignages de trois portraits et interrogez-les dans l’ordre crédible pour obtenir le mot de passe.","学者说骑士不是第一位；骑士承认学者必须先发言；女士说自己在骑士之后。错误询问会惊动走廊并清空推理。":"L’érudit affirme que le chevalier n’est pas le premier ; le chevalier reconnaît que l’érudit doit parler avant lui ; la dame dit venir après le chevalier. Une mauvaise question alerte le couloir et efface vos déductions.",管理员的巡夜:"La ronde du concierge","目标：利用盔甲遮挡、猫铃声与暗门，避开管理员的灯光巡查":"Objectif : utilisez l’armure, la clochette du chat et la porte secrète pour échapper à la lanterne du concierge.","巡夜图记：灯光先扫过空盔甲；猫铃能把脚步引向反方向；最后掀开独角兽挂毯。走错会清空路线并提高警戒。":"Notes de ronde : la lumière balaie d’abord l’armure vide ; la clochette attire les pas ailleurs ; soulevez enfin la tapisserie à la licorne. Une erreur efface l’itinéraire et renforce l’alerte.",三头犬活板门:"Le gardien à trois têtes","目标：按守门生物能接受的层次，奏出完整安眠旋律":"Objectif : jouez la berceuse complète selon les couches sonores que le gardien peut supporter.","褪色乐谱写着：先让气息像夜风进入梦乡，再让琴弦托住梦境，最后以发条的轻响封住鼾声。错奏会重置旋律并惊醒守卫。":"La partition effacée indique : que le souffle mène d’abord au sommeil comme un vent nocturne, que les cordes portent ensuite le rêve, puis qu’un léger mécanisme scelle le ronflement. Une fausse note recommence la mélodie et réveille le gardien.",飞行课遗失物:"Cours de vol : objets perdus","目标：借助风向旗判断重量，依次把三件遗失物送入对应的安全轨迹":"Objectif : lisez la manche à air et renvoyez trois objets perdus sur leur trajectoire sûre, du plus léger au plus lourd.","风向板写着：最轻的红色织物先借低风归队；有月纹的笔记随后穿过中环；沉重黄铜罗盘最后沿高风落到新生手中。错序会卷起乱流并吹散全部物品。":"Le panneau indique : le tissu rouge, très léger, prend d’abord le courant bas ; le carnet marqué d’une lune traverse ensuite l’anneau central ; la lourde boussole en laiton revient enfin par le courant haut. Une erreur soulève des turbulences et disperse tout.",巨怪洗手间:"Les toilettes du troll","目标：依次稳定漏水、悬浮瓦砾，再放下横梁架出逃生路线":"Objectif : stoppez la fuite, faites léviter les gravats, puis abaissez la poutre pour créer une issue.","破裂水管正在冲散落脚点。先转动月纹阀止水，再让碎石升起清出通道，最后才能把高处横梁平稳放到沟渠上。错序会让巨怪逼近并震塌路线。":"La conduite rompue emporte les appuis. Tournez d’abord la vanne marquée d’une lune, soulevez les gravats pour dégager le passage, puis posez la poutre au-dessus du canal. Une erreur rapproche le troll et fait s’effondrer l’itinéraire.",图书馆禁书区:"La Réserve","目标：依据馆藏年代，按从古到今的顺序点亮三本安全书脊":"Objectif : d’après les dates du catalogue, éclairez trois dos de livres sûrs du plus ancien au plus récent.","目录铜牌记载：四学院建校录最古老；龙灾账册写于其后数百年；月蚀纪事刚完成修订。避开锁链缠绕、会尖叫的无年卷。":"Le catalogue de cuivre précise : le Registre des Fondateurs est le plus ancien ; le Livre du Fléau des dragons vient plusieurs siècles après ; la Chronique de l’éclipse vient d’être révisée. Évitez le volume sans date, enchaîné et hurleur.",厄里斯魔镜:"Le Miroir du Riséd","目标：比较镜中欲望与现实处境，依次选择真正需要的三件物品":"Objectif : confrontez le désir du miroir à la réalité et choisissez, dans l’ordre, les trois choses dont vous avez vraiment besoin.","镜中人戴着王冠、捧着奖杯，却在现实的寒风中发抖。先御寒，再为黑暗出口照路；最后记住：能共同离开的人，比独占的荣誉更重要。":"Le reflet porte une couronne et un trophée, mais grelotte dans le froid réel. Choisissez d’abord de quoi vous réchauffer, puis une lumière pour la sortie obscure ; souvenez-vous enfin qu’un compagnon qui part avec vous vaut mieux qu’une gloire solitaire.",魔鬼网:"Le Filet du Diable","目标：保持镇静，按正确节奏控制蓝铃火焰，让藤蔓松开地下出口":"Objectif : gardez votre calme et maîtrisez les flammes bleues au bon rythme pour que les lianes libèrent la sortie souterraine.","挣扎会让藤蔓收紧。先放松摆脱缠绕，再点燃冷焰，最后维持稳定光照；猛烈爆燃只会惊动整片根网。":"Se débattre resserre les lianes. Détendez-vous d’abord, allumez ensuite la flamme froide, puis maintenez une lumière stable ; une flambée brutale alerterait tout le réseau de racines.","停止挣扎 · 蓝铃冷焰 · 三拍恒光":"CESSER DE LUTTER · FLAMME BLEUE · TROIS PULSATIONS STABLES",放松呼吸:"Se détendre et respirer","I · 停止挣扎":"I · CESSER DE LUTTER",点燃蓝铃冷焰:"Allumer la flamme de jacinthe","II · 微光驱藤":"II · LA LUEUR REPOUSSE LES LIANES",维持恒定光照:"Maintenir une lumière stable","III · 稳住三拍":"III · TENIR TROIS PULSATIONS",猛烈爆燃:"Flambée violente","诱饵 · 惊动根网":"LEURRE · ALERTE LE RÉSEAU","地下试炼已加载：放松藤蔓缠绕，以蓝铃冷焰和三拍恒光打开根网。":"Épreuve souterraine chargée : relâchez les lianes, puis ouvrez le réseau avec la flamme bleue et trois pulsations stables.","“{label}”打乱节奏！根网骤然收紧至 {count} 级；先放松，再重新开始。":"« {label} » a brisé le rythme ! Le réseau s’est resserré au niveau {count} ; détendez-vous avant de recommencer.","你停止挣扎，第一层藤蔓松开。现在点燃不会灼伤施法者的蓝铃冷焰。":"Vous cessez de lutter et les premières lianes se relâchent. Allumez maintenant la flamme bleue qui ne brûle pas son lanceur.","冷焰逼退根须。最后保持三拍恒光，不要让亮度突然爆发。":"La flamme froide repousse les racines. Maintenez trois pulsations régulières sans provoquer de flambée.","魔鬼网光照节奏已完成 {count} / 3":"Rythme lumineux accompli : {count} / 3","{label}奏效，地下出口上方的藤蔓正在退缩。":"{label} fonctionne ; les lianes au-dessus de la sortie souterraine reculent.","魔鬼网完成：稳定冷焰驱散根网，通往飞钥匙房的地下出口已经开启":"Filet du Diable terminé : la flamme froide et stable disperse le réseau et ouvre la sortie vers la salle des clés.","镇静削弱缠绕，蓝铃冷焰逼退藤蔓，三拍恒光打开根网。前方传来成群翅膀的振动声。":"Le calme affaiblit l’étreinte, la flamme bleue repousse les lianes et trois pulsations ouvrent les racines. Un essaim d’ailes vrombit plus loin.","第一部 · 第四章 · 第 1 关完成":"Tome 1 · Chapitre 4 · Salle 1 terminée",冷焰退藤:"Les lianes cèdent à la flamme froide","魔鬼网缩回石缝——正在进入飞钥匙房！":"Le Filet du Diable se retire dans la pierre — entrée dans la salle des clés !",飞钥匙房:"La salle des clés volantes","目标：依次确认翅膀损伤、飞行轨迹和锁孔材质，锁定唯一真钥匙":"Objectif : identifiez successivement l’aile abîmée, la trajectoire et le métal de la serrure pour isoler la bonne clé.","门锁留下银屑；真正用过的钥匙左翼弯折，负重后会沿顺时针轨迹下沉。先观察损伤，再追踪轨迹，最后核对银色钥匙。":"La serrure a laissé de la limaille d’argent. La clé déjà utilisée a l’aile gauche tordue et descend en tournant dans le sens horaire. Observez l’usure, suivez la trajectoire, puis confirmez la clé d’argent.","左翼折痕 · 顺时针下沉 · 银屑锁孔":"AILE GAUCHE TORDUE · DESCENTE HORAIRE · SERRURE ARGENTÉE",左翼弯折的钥影:"Clé à l’aile gauche tordue","I · 使用损伤":"I · TRACE D’USURE",顺时针下沉轨迹:"Trajectoire descendante horaire","II · 负重飞行":"II · VOL SOUS CHARGE",小型银钥匙:"Petite clé d’argent","III · 银屑吻合":"III · ARGENT CONFIRMÉ",华丽金钥匙:"Clé dorée ouvragée","诱饵 · 锁孔无金屑":"LEURRE · AUCUNE TRACE D’OR","飞钥匙房已加载：依次核对折翼、飞行轨迹和锁孔银屑。":"Salle des clés chargée : examinez dans l’ordre l’aile tordue, la trajectoire horaire et la limaille d’argent.","“{label}”惊散了钥匙群！追逐失误升至 {count}，三条证据需要重新确认。":"« {label} » a dispersé l’essaim ! Les erreurs montent à {count} ; revérifiez les trois indices.","左翼折痕与门框刮痕一致。现在观察负重钥匙群，寻找顺时针下沉的轨迹。":"L’aile gauche tordue correspond à la rayure du chambranle. Observez maintenant l’essaim chargé et sa descente horaire.","下沉轨迹锁定了小型钥匙。最后核对锁孔银屑，排除华丽但材质不符的金钥匙。":"La descente désigne une petite clé. Comparez enfin la limaille d’argent et écartez la clé dorée, malgré ses ornements.","飞钥匙证据已确认 {count} / 3":"Indices de clé confirmés : {count} / 3","{label}与现场证据吻合，钥匙群的范围缩小了。":"{label} correspond aux traces matérielles ; l’essaim se réduit.","飞钥匙房完成：折翼银钥匙准确嵌入门锁，通往巫师棋盘的石门已经开启":"Salle des clés terminée : la clé d’argent à l’aile tordue ouvre la porte de pierre vers l’échiquier.","折翼证明它被使用过，顺时针下沉暴露负重，银屑完成最终材质核对。前方传来巨大棋子的脚步声。":"L’aile tordue prouve l’usure, la descente horaire révèle le poids et la limaille confirme l’argent. Des pièces géantes s’ébranlent plus loin.","第一部 · 第四章 · 第 2 关完成":"Tome 1 · Chapitre 4 · Salle 2 terminée",折翼银钥匙:"La clé d’argent à l’aile tordue","银钥匙旋转一周，棋盘石门轰然开启——正在进入巫师棋盘！":"La clé d’argent accomplit un tour et la porte de pierre s’ouvre avec fracas — entrée sur l’échiquier !","巫师棋已加载：先诱敌，再双攻，最后沿空线推进。":"Échiquier chargé : diversion, fourchette, puis avancée sur la colonne libre.",巫师棋:"Les échecs version sorcier","目标：用最少牺牲打开通往对岸的安全棋路":"Objectif : ouvrez un passage sûr sur l’échiquier en sacrifiant le moins de pièces possible.","黑后封锁中央。先用边兵引开主教，再让骑士双攻国王与城堡，最后直车沿空出的纵线推进；贸然冲后会让已投入的棋子全部被吃。":"La dame noire verrouille le centre. Attirez d’abord le fou avec le pion de l’aile, réalisez ensuite une fourchette sur le roi et la tour avec le cavalier, puis avancez la tour sur la colonne libérée. Charger la dame trop tôt condamne toutes les pièces engagées.","边兵牵制主教 · 骑士双攻 · 城堡穿过空线":"LE PION ATTIRE LE FOU · FOURCHETTE DU CAVALIER · TOUR SUR COLONNE LIBRE",边兵诱敌:"Diversion du pion","I · 引开主教":"I · ÉCARTER LE FOU",骑士双攻:"Fourchette du cavalier","II · 将军攻车":"II · ROI ET TOUR MENACÉS",城堡沿空线推进:"Tour sur colonne libre","III · 空线抵岸":"III · TRAVERSER LA COLONNE",王后强攻:"Charge de la dame","诱饵 · 暴露全线":"LEURRE · COLONNE EXPOSÉE","“{label}”暴露了棋路！巨棋吃掉已投入棋子，被吃总数升至 {count}。":"« {label} » a exposé le passage ! Les pièces géantes capturent les forces engagées ; {count} pièces perdues au total.","边兵引开了黑主教。现在用骑士同时威胁国王与城堡，迫使黑方让出中央。":"Le pion de l’aile a écarté le fou noir. Menacez maintenant le roi et la tour avec le cavalier pour libérer le centre.","骑士双攻奏效，纵线已经清空。最后让城堡沿直线推进到对岸。":"La fourchette du cavalier a libéré la colonne. Faites enfin avancer la tour en ligne droite jusqu’au bord opposé.","安全棋步已确认 {count} / 3":"Coups sûrs confirmés : {count} / 3","{label}成立，巨型黑棋被迫改换阵形。":"{label} fonctionne ; les pièces noires géantes doivent changer de formation.","巫师棋完成：仅以边兵诱敌，骑士与城堡已安全抵达对岸":"Échiquier terminé : seul le pion de l’aile est sacrifié ; le cavalier et la tour atteignent l’autre bord.","诱敌打开斜线，双攻迫使让位，城堡穿过空线。最后的魔法石密室就在棋盘后方。":"La diversion ouvre une diagonale, la fourchette force le repli et la tour traverse la colonne libre. La chambre de la Pierre se trouve au-delà.","第一部 · 第四章 · 第 3 关完成":"Tome 1 · Chapitre 4 · Salle 3 terminée",最少牺牲棋路:"Le passage au moindre sacrifice","白色城堡抵达对岸，火门显现——正在进入魔法石密室！":"La tour blanche atteint l’autre bord et une porte de feu apparaît — entrée dans la chambre de la Pierre !","最终密室已加载：先解药剂逻辑，再辨镜像，最后证明守护意图。":"Chambre finale chargée : résolvez les potions, lisez le miroir, puis prouvez votre intention protectrice.",魔法石密室:"La chambre de la Pierre","目标：穿过黑焰，解读镜像，并证明你只想保护魔法石":"Objectif : traversez les flammes noires, interprétez le miroir et prouvez que vous voulez seulement protéger la Pierre.","七瓶药剂中，最小的瓶子可穿过黑焰。镜中真正的守护者口袋仍空着；想夺取魔法石的手只会触发密室腐化。":"Parmi les sept potions, le plus petit flacon permet de franchir les flammes noires. Dans le miroir, la poche du véritable gardien reste vide ; une main tendue pour prendre la Pierre ne fait qu’éveiller la corruption de la chambre.","七瓶取最小 · 镜中口袋为空 · 双手只作守护":"LE PLUS PETIT DES SEPT · POCHE VIDE DANS LE MIROIR · MAINS OUVERTES PROTECTRICES","厄里斯 · 欲望倒写显形":"RISÉD · LE DÉSIR SE RÉVÈLE À L’ENVERS",最小银瓶:"Le plus petit flacon d’argent","I · 穿越黑焰":"I · FRANCHIR LE FEU NOIR",空口袋镜影:"Reflet à la poche vide","II · 不占有":"II · NE RIEN POSSÉDER",守护石的誓言:"Serment de protéger la Pierre","III · 只为保护":"III · PROTÉGER SEULEMENT",夺取石的手:"Main avide","诱饵 · 占有欲":"LEURRE · DÉSIR DE POSSESSION","“{label}”暴露了占有欲！线索消散，腐化诱惑升至 {count}。":"« {label} » a révélé un désir de possession ! Les indices se dissipent et la corruption monte à {count}.","最小银瓶让你穿过黑焰。现在观察镜中衣袋：真正不求占有的人，口袋里不会出现石头。":"Le plus petit flacon d’argent vous a fait franchir le feu noir. Observez maintenant la poche dans le miroir : qui ne cherche rien à posséder n’y trouvera aucune Pierre.","空口袋镜影证明你没有取石欲望。最后明确你的意图：保护它，而不是拥有它。":"La poche vide prouve que vous ne convoitez pas la Pierre. Affirmez enfin votre intention : la protéger, jamais la posséder.","魔法石密室线索已确认 {count} / 3":"Indices de la chambre confirmés : {count} / 3","{label}通过了密室检验，镜面中的金光更加清晰。":"{label} réussit l’épreuve de la chambre ; la lumière dorée se précise dans le miroir.","第一部完成：魔法石只向无意占有、决心守护的人显现":"Tome 1 terminé : la Pierre n’apparaît qu’à qui veut la protéger sans la posséder.","药剂穿过黑焰，空口袋识破欲望，守护誓言让魔法石安全显现。新的绿色干扰正在住宅中聚集。":"La potion a franchi le feu noir, la poche vide a démasqué le désir et le serment protecteur a révélé la Pierre sans danger. Une interférence verte se rassemble à Privet Drive.","第一部 · 魔法石完成":"Tome 1 · La Pierre philosophale terminé","第二部 · 不祥警告":"Tome 2 · Un sinistre avertissement","守护之石化作金光——正在返回住宅，调查精灵留下的三重封锁！":"La Pierre protégée se dissout en lumière dorée — retour à Privet Drive pour enquêter sur le triple blocus de l’elfe !","第二部首关已加载：沿邮槽、蛋糕与飞路炉追踪绿色魔力残痕。":"Première salle du tome 2 chargée : suivez les traces vertes de la fente aux lettres au gâteau, puis à la cheminée.",精灵的封锁:"Le blocus de l’elfe","目标：循魔力残痕解除住宅中的三重封锁，赶往国王十字车站":"Objectif : suivez les traces magiques, levez le triple blocus de la maison et rejoignez King’s Cross.","绿色干扰从邮槽进入，绕过悬浮蛋糕，最后汇入壁炉封印。错碰尖叫灯会让封锁重新闭合。":"L’interférence verte entre par la fente aux lettres, contourne le gâteau flottant, puis rejoint le sceau de la cheminée. Toucher la lampe hurlante referme le blocus.",飞车失控:"La voiture volante hors de contrôle","目标：在撞上高架桥前依次稳定配重、航向与油门":"Objectif : stabilisez le chargement, le cap puis l’accélérateur avant de heurter le viaduc.","后备箱先把车头拉高；红色铁路信号给出航向；发动机过热时只能脉冲给油。猛踩油门会让飞车再次翻滚。":"Le coffre cabre d’abord la voiture ; le signal ferroviaire rouge indique le cap ; un moteur en surchauffe exige des impulsions d’accélérateur. Écraser la pédale fait de nouveau tonneau.",打人柳下:"Sous le Saule cogneur","目标：读懂枝条的高扫、低返与露根间隙，安全抵达树洞":"Objectif : déchiffrez le balayage haut, le retour bas et l’ouverture entre les racines pour atteindre le tronc sans danger.","粗枝先从头顶横扫；回摆会贴近地面。只有第二次攻击收势后，发光树根之间才会短暂露出通道。":"Une grosse branche balaie d’abord au-dessus de votre tête ; son retour rase le sol. Le passage entre les racines lumineuses ne s’ouvre brièvement qu’après la fin de la deuxième attaque.","楼梯下 · 楼上小卧室 · 17 号房 · 海上小屋":"ESCALIER · CHAMBRE · N° 17 · CABANE","H. Potter · 楼梯下的储物间":"H. Potter · Placard sous l’escalier","I · 楼梯下储物间":"I · PLACARD SOUS L’ESCALIER","H. Potter · 楼上最小的卧室":"H. Potter · Plus petite chambre à l’étage","II · 楼上最小卧室":"II · PLUS PETITE CHAMBRE","H. Potter · 铁路景观酒店 17 号房":"H. Potter · Hôtel Railview, chambre 17","III · 铁路旅馆 17 号房":"III · CHAMBRE 17 DU RAILVIEW","H. Potter · 海上岩礁小屋":"H. Potter · Cabane sur le rocher, en mer","IV · 海上岩礁小屋":"IV · CABANE SUR LE ROCHER",楼梯下的储物间:"PLACARD SOUS L’ESCALIER",通往对角巷:"PORTE DU CHEMIN DE TRAVERSE","V. Dursley · 女贞路前门":"V. Dursley · Porte d’entrée de Privet Drive","D. Dursley · 厨房餐桌":"D. Dursley · Table de la cuisine","H. Potter · 动物园爬虫馆":"H. Potter · Vivarium du zoo","H. Potter · 石墙中学":"H. Potter · Collège Stonewall","顺序错误：“{destination}”不是下一处藏身地。四封信重新飞散！":"Chronologie incorrecte : « {destination} » n’est pas la prochaine cachette. Les quatre lettres se dispersent à nouveau !","时间线正确：{destination} · {count} / 4":"Chronologie confirmée : {destination} · {count} / 4","时间线完成：循红蜡封印前往通往对角巷的门":"Chronologie terminée : suivez les sceaux de cire cramoisie jusqu’à la porte du Chemin de Traverse.","四处藏身地首尾相接，信上的猩红 H 蜡印化成了门钥匙。":"Les quatre cachettes forment un seul voyage ; les sceaux H cramoisis sont devenus une clé.","四封信按时间顺序排列完成——通往对角巷的门已开启！":"Les quatre lettres sont dans l’ordre chronologique — la porte du Chemin de Traverse est ouverte !"}},Tu="hogwarts-escape-language",Zg=[{code:"zh-CN",label:"中文",nativeLabel:"简体中文"},{code:"en",label:"English",nativeLabel:"English"},{code:"fr",label:"Français",nativeLabel:"Français"}],vc={"zh-CN":{"document.title":"霍格沃茨密室逃脱 3D","start.brand":"霍格沃茨","start.title":"密室逃脱","start.description":"横跨 7 部曲、28 章与 112 套密室关卡，从第一封猫头鹰来信走到霍格沃茨最终决战。","start.play":"进入第一关","start.continue":"继续游戏","start.restart":"重新开始","start.campaign":"七部曲地图","start.language":"🌐 中文","voice.play":"▶ 播放中文旁白","voice.stop":"■ 停止旁白","voice.ready":"按下后播放，不会自动播放","voice.loading":"正在加载旁白…","voice.playing":"正在播放中文旁白","voice.failed":"旁白暂时不可用，字幕仍可阅读","voice.subtitle":"欢迎来到霍格沃茨。猫头鹰送来的四封信，藏着逃离密室的正确顺序。请观察地址变化，准备好后开始探索。","help.desktop":"WASD 移动 · 鼠标观察 · E 互动 · ESC 释放鼠标","help.mobile":"左侧摇杆移动 · 右半屏滑动观察 · 点击“互动”操作","mobile.look":"滑动转向","mobile.interact":"互动","campaign.title":"七部曲密室地图","campaign.stats":"{books} 部曲 · {chapters} 章 · {rooms} 关","campaign.book":"第 {number} 部","campaign.chapter":"第 {number} 章","campaign.difficulty":"难度 {start}–{end}","campaign.play":"开始本章","campaign.upcoming":"已解锁 · 即将启程","campaign.locked":"尚未解锁","campaign.close":"关闭地图","campaign.selectBook":"选择部曲","hud.roomKicker":"第 {book} 部 · 第 {chapter} 章 · 第 {room} 关","transition.next":"下一关","action.touch":"点击互动","action.keyboard":"按 E","counter.letters":"信件顺序 {count} / 4","counter.shopping":"采购 {count} / 4 · 余 {remaining} G","counter.wand":"匹配阶段 {count} / 3 · 失控反馈 {mistakes}","counter.sorting":"分院线索 {count} / 4 · 误判 {mistakes}","counter.stairs":"路线 {count} / 3 · 时间惩罚 {penalty} 秒","counter.portraits":"证词 {count} / 3 · 怀疑 {value}","counter.patrol":"潜行节点 {count} / 3 · 警戒 {value}","counter.lullaby":"安眠旋律 {count} / 3 · 惊醒 {value}","counter.flying":"安全投递 {count} / 3 · 乱流 {value}","counter.troll":"逃生机关 {count} / 3 · 危险 {value}","counter.library":"历史书脊 {count} / 3 · 尖叫 {value}","counter.mirror":"现实所需 {count} / 3 · 幻象增强 {value}","counter.snare":"光照节奏 {count} / 3 · 藤蔓收紧 {value}","counter.keys":"钥匙线索 {count} / 3 · 追逐失误 {value}","counter.chess":"安全棋路 {count} / 3 · 被吃棋子 {value}","counter.stone":"密室线索 {count} / 3 · 腐化诱惑 {value}","counter.elf":"封锁痕迹 {count} / 3 · 干扰增强 {value}","counter.car":"飞车校准 {count} / 3 · 乱流 {value}","counter.willow":"安全节拍 {count} / 3 · 擦伤 {value}","test.chineseOnly":"仅中文"},en:{"document.title":"Hogwarts Escape Room 3D","start.brand":"HOGWARTS","start.title":"Escape Room","start.description":"A journey across 7 books, 28 chapters, and 112 escape rooms—from the first owl letter to the final battle at Hogwarts.","start.play":"Enter Room One","start.continue":"Continue","start.restart":"Start Over","start.campaign":"Seven-Book Map","start.language":"🌐 English","voice.play":"▶ Play English narration","voice.stop":"■ Stop narration","voice.ready":"Plays only when pressed—never automatically","voice.loading":"Loading narration…","voice.playing":"Playing English narration","voice.failed":"Narration is unavailable; subtitles remain available","voice.subtitle":"Welcome to Hogwarts. Four owl-delivered letters hide the correct order for escaping this chamber. Observe how each address changes, then begin your search.","help.desktop":"WASD move · Mouse look · E interact · ESC release mouse","help.mobile":"Left stick to move · Swipe right to look · Tap Interact","mobile.look":"Swipe to look","mobile.interact":"Interact","campaign.title":"Seven-Book Escape Map","campaign.stats":"{books} books · {chapters} chapters · {rooms} rooms","campaign.book":"Book {number}","campaign.chapter":"Chapter {number}","campaign.difficulty":"Difficulty {start}–{end}","campaign.play":"Begin Chapter","campaign.upcoming":"Unlocked · Coming Soon","campaign.locked":"Locked","campaign.close":"Close map","campaign.selectBook":"Select a book","hud.roomKicker":"Book {book} · Chapter {chapter} · Room {room}","transition.next":"Next Room","action.touch":"Tap","action.keyboard":"Press E to","counter.letters":"Letter order {count} / 4","counter.shopping":"Shopping {count} / 4 · {remaining} G left","counter.wand":"Wand match {count} / 3 · Wild feedback {mistakes}","counter.sorting":"Sorting clues {count} / 4 · Mistakes {mistakes}","counter.stairs":"Route {count} / 3 · Time penalty {penalty}s","counter.portraits":"Testimony {count} / 3 · Suspicion {value}","counter.patrol":"Stealth nodes {count} / 3 · Alert {value}","counter.lullaby":"Lullaby {count} / 3 · Wakefulness {value}","counter.flying":"Safe deliveries {count} / 3 · Turbulence {value}","counter.troll":"Escape devices {count} / 3 · Danger {value}","counter.library":"Historical spines {count} / 3 · Noise {value}","counter.mirror":"Real needs {count} / 3 · Illusion {value}","counter.snare":"Light rhythm {count} / 3 · Constriction {value}","counter.keys":"Key clues {count} / 3 · Pursuit errors {value}","counter.chess":"Safe moves {count} / 3 · Pieces lost {value}","counter.stone":"Chamber clues {count} / 3 · Corruption {value}","counter.elf":"Blockade traces {count} / 3 · Interference {value}","counter.car":"Car calibration {count} / 3 · Turbulence {value}","counter.willow":"Safe rhythm {count} / 3 · Bruises {value}"},fr:{"document.title":"Hogwarts — Salle d’évasion 3D","start.brand":"POUDLARD","start.title":"Salle d’évasion","start.description":"Un voyage à travers 7 tomes, 28 chapitres et 112 salles, de la première lettre apportée par un hibou jusqu’à la bataille finale de Poudlard.","start.play":"Entrer dans la première salle","start.continue":"Continuer","start.restart":"Recommencer","start.campaign":"Carte des sept tomes","start.language":"🌐 Français","voice.play":"▶ Écouter la narration en français","voice.stop":"■ Arrêter la narration","voice.ready":"Lecture uniquement sur demande, jamais automatique","voice.loading":"Chargement de la narration…","voice.playing":"Narration en français en cours","voice.failed":"La narration est indisponible ; les sous-titres restent affichés","voice.subtitle":"Bienvenue à Poudlard. Quatre lettres apportées par des hiboux cachent l’ordre qui permet de quitter cette salle. Observez chaque changement d’adresse, puis commencez vos recherches.","help.desktop":"WASD : avancer · Souris : regarder · E : interagir · Échap : libérer la souris","help.mobile":"Joystick gauche : avancer · Balayer à droite : regarder · Toucher Interagir","mobile.look":"Balayer pour regarder","mobile.interact":"Interagir","campaign.title":"Carte d’évasion des sept tomes","campaign.stats":"{books} tomes · {chapters} chapitres · {rooms} salles","campaign.book":"Tome {number}","campaign.chapter":"Chapitre {number}","campaign.difficulty":"Difficulté {start}–{end}","campaign.play":"Commencer le chapitre","campaign.upcoming":"Déverrouillé · Bientôt disponible","campaign.locked":"Verrouillé","campaign.close":"Fermer la carte","campaign.selectBook":"Choisir un tome","hud.roomKicker":"Tome {book} · Chapitre {chapter} · Salle {room}","transition.next":"Salle suivante","action.touch":"Toucher pour","action.keyboard":"Appuyer sur E pour","counter.letters":"Ordre des lettres {count} / 4","counter.shopping":"Achats {count} / 4 · reste {remaining} G","counter.wand":"Accord de la baguette {count} / 3 · réactions {mistakes}","counter.sorting":"Indices de Répartition {count} / 4 · erreurs {mistakes}","counter.stairs":"Parcours {count} / 3 · pénalité {penalty} s","counter.portraits":"Témoignages {count} / 3 · soupçon {value}","counter.patrol":"Étapes furtives {count} / 3 · alerte {value}","counter.lullaby":"Berceuse {count} / 3 · éveil {value}","counter.flying":"Livraisons sûres {count} / 3 · turbulences {value}","counter.troll":"Mécanismes de fuite {count} / 3 · danger {value}","counter.library":"Dos historiques {count} / 3 · vacarme {value}","counter.mirror":"Besoins réels {count} / 3 · illusion {value}","counter.snare":"Rythme lumineux {count} / 3 · constriction {value}","counter.keys":"Indices de clé {count} / 3 · erreurs {value}","counter.chess":"Coups sûrs {count} / 3 · pièces perdues {value}","counter.stone":"Indices de la chambre {count} / 3 · corruption {value}","counter.elf":"Traces du blocus {count} / 3 · interférence {value}","counter.car":"Réglage de la voiture {count} / 3 · turbulences {value}","counter.willow":"Rythme sûr {count} / 3 · contusions {value}"}};function Yr(i){return Zg.some(({code:e})=>e===i)?i:"zh-CN"}function Jg(i){return Yr(i.getItem(Tu))}function Qg(i,e){const t=Yr(e);return i.setItem(Tu,t),t}function e_(i,e){return i.replace(/\{(\w+)\}/g,(t,n)=>e[n]??`{${n}}`)}function jr(i){const e=Yr(i);return(t,n={})=>{const r=vc[e][t]??vc["zh-CN"][t]??t;return e_(r,n)}}function vt(i,e){const t=Yr(i);return t==="zh-CN"?e:Kg[t]?.[e]??e}function t_(i,{book:e,chapter:t,room:n,name:r,objectiveText:s,hint:o}){const a=Yr(i);return{kicker:jr(a)("hud.roomKicker",{book:e,chapter:t,room:n}),name:vt(a,r),objectiveText:vt(a,s),hint:vt(a,o)}}function n_({progress:i,book:e,chapter:t,playable:n,t:r=jr("zh-CN")}){const s=e===1&&t===1||$g(i,{book:e,chapter:t});return n&&s?{className:"chapter-action playable",text:r("campaign.play"),disabled:!1}:s?{className:"chapter-action unlocked",text:r("campaign.upcoming"),disabled:!0}:{className:"chapter-action",text:r("campaign.locked"),disabled:!0}}function i_({onPlay:i,getProgress:e=()=>null,getLanguage:t=()=>"zh-CN",getTranslator:n=()=>jr(t())}){const r=document.querySelector("#campaign-screen"),s=document.querySelector("#book-tabs"),o=document.querySelector("#chapter-grid"),a=document.querySelector("#campaign-book-title"),l=document.querySelector("#campaign-book-subtitle"),c=document.querySelector("#campaign-theme"),u=document.querySelector("#campaign-stats");let h=0;function f(){const d=n(),E=t();s.replaceChildren(...Nr.map((M,v)=>{const w=document.createElement("button");return w.className=`book-tab${v===h?" active":""}`,w.type="button",w.innerHTML=`<span>${d("campaign.book",{number:M.number})}</span><strong>${vt(E,M.title)}</strong>`,w.addEventListener("click",()=>{h=v,g()}),w}))}function p(d){const E=n(),M=t();o.replaceChildren(...d.chapters.map((v,w)=>{const A=document.createElement("article");A.className="chapter-card";const R=v.rooms[0].difficulty,D=v.rooms.at(-1).difficulty,y=v.rooms.some(W=>W.status==="playable"),x=n_({progress:e(),book:d.number,chapter:w+1,playable:y,t:E});A.classList.toggle("unlocked",x.className.includes("unlocked"));const C=document.createElement("div");C.className="chapter-heading",C.innerHTML=`<span>${E("campaign.chapter",{number:String(w+1).padStart(2,"0")})}</span><strong>${vt(M,v.title)}</strong><em>${E("campaign.difficulty",{start:R,end:D})}</em>`;const k=document.createElement("ol");k.className="room-list";for(const W of v.rooms){const K=document.createElement("li");K.innerHTML=`<span>${vt(M,W.title)}</span><small>${vt(M,W.puzzle)}</small>`,k.appendChild(K)}const B=document.createElement("button");return B.type="button",B.className=x.className,B.textContent=x.text,B.disabled=x.disabled,y&&B.addEventListener("click",()=>{m(),i(v.rooms.find(W=>W.status==="playable"))}),A.append(C,k,B),A}))}function g(){const d=n(),E=t(),M=Nr[h];u.textContent=d("campaign.stats",qg),r.style.setProperty("--campaign-primary",M.palette[0]),r.style.setProperty("--campaign-accent",M.palette[1]),r.style.setProperty("--campaign-dark",M.palette[2]),a.textContent=`${d("campaign.book",{number:M.number})} · ${vt(E,M.title)}`,l.textContent=vt(E,M.subtitle),c.textContent=vt(E,M.visualTheme),f(),p(M)}function S(){g(),r.classList.remove("hidden"),document.body.classList.add("campaign-open")}function m(){r.classList.add("hidden"),document.body.classList.remove("campaign-open")}return document.querySelector("#campaign-button").addEventListener("click",S),document.querySelector("#campaign-close").addEventListener("click",m),addEventListener("keydown",d=>{d.code==="Escape"&&!r.classList.contains("hidden")&&m()}),g(),{openCampaign:S,closeCampaign:m,render:g}}const r_={intro:{"zh-CN":"audio/intro-zh-CN.mp3",en:"audio/intro-en.mp3",fr:"audio/intro-fr.mp3"}};function s_(i,e){const t=r_[i];return t?t[e]??t["zh-CN"]??null:null}function o_({playbackState:i,muted:e}){return i==="idle"&&!e}async function a_({audio:i,source:e,muted:t}){if(!e)return t?"muted":"unavailable";i.src=e;try{return await i.play(),"playing"}catch{return"failed"}}const xc=["lower","moon","upper"],yc=["scholar","knight","lady"],bc=["armor","cat","tapestry"],Sc=["flute","harp","music-box"];function l_(i,e){const t=Sc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,wakefulness:(i.wakefulness??0)+1,unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Sc.length,accepted:!0}}function c_(i,e){const t=xc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,timePenalty:(i.timePenalty??0)+5,unlocked:!1,accepted:!1};const n=[...i.progress,e];return{progress:n,mistakes:i.mistakes,...i.timePenalty!==void 0?{timePenalty:i.timePenalty}:{},unlocked:n.length===xc.length,accepted:!0}}function u_(i,e){const t=yc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,suspicion:(i.suspicion??0)+1,unlocked:!1,accepted:!1};const n=[...i.progress,e],r=n.length===yc.length;return{progress:n,mistakes:i.mistakes,...i.suspicion!==void 0?{suspicion:i.suspicion}:{},unlocked:r,accepted:!0,...r?{password:"月桂之后，银钥先行"}:{}}}function h_(i,e){const t=bc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,alert:(i.alert??0)+1,unlocked:!1,accepted:!1};const n=[...i.progress,e];return{progress:n,mistakes:i.mistakes,...i.alert!==void 0?{alert:i.alert}:{},unlocked:n.length===bc.length,accepted:!0}}const Mc=["scarf-keeper","notebook-scholar","compass-first-year"],Ec=["seal-pipe","levitate-rubble","lower-beam"],Tc=["founders-index","dragon-ledger","moon-chronicle"],wc=["wool-cloak","brass-lantern","shared-token"];function d_(i,e){const t=wc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,illusion:(i.illusion??0)+1,feedback:"desire-not-need",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===wc.length,accepted:!0}}function f_(i,e){const t=Tc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,noise:(i.noise??0)+1,unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Tc.length,accepted:!0}}function p_(i,e){const t=Ec[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,danger:(i.danger??0)+1,unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Ec.length,accepted:!0}}function m_(i,e){const t=Mc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,turbulence:(i.turbulence??0)+1,unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Mc.length,accepted:!0}}const Ac=["black-flame-potion","empty-pocket-reflection","protect-the-stone"];function g_(i,e){const t=Ac[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,corruption:i.corruption+1,feedback:"intent-rejected",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Ac.length,accepted:!0}}const Cc=["pawn-decoy","knight-fork","rook-advance"];function __(i,e){const t=Cc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,captured:i.captured+i.progress.length+1,feedback:"piece-captured",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Cc.length,accepted:!0}}const Rc=["relax-grip","kindle-bluebell","hold-light"],Pc=["bent-wing","clockwise-drift","silver-key"];function v_(i,e){const t=Pc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,pursuit:i.pursuit+1,feedback:"key-swarm-scattered",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Pc.length,accepted:!0}}function x_(i,e){const t=Rc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,constriction:(i.constriction??0)+1,feedback:"vines-tightened",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Rc.length,accepted:!0}}const Ic=["wait-high-swing","duck-low-return","dash-root-gap"];function y_(i,e){const t=Ic[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,bruises:i.bruises+1,feedback:"branch-hit",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Ic.length,accepted:!0}}const Dc=["balance-luggage","align-railway","pulse-throttle"];function b_(i,e){const t=Dc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,turbulence:i.turbulence+1,feedback:"car-spinning",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Dc.length,accepted:!0}}const Lc=["jammed-post","levitating-cake","sealed-floo"];function S_(i,e){const t=Lc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,interference:i.interference+1,feedback:"blockade-strengthened",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Lc.length,accepted:!0}}const M_=[{side:"left",feathers:4,bend:0},{side:"right",feathers:4,bend:0}],Es=(i={})=>({axis:"horizontal",shaftLength:1.55,bowRadius:.42,teeth:3,metal:"steel",wings:M_.map(e=>({...e})),...i}),E_=[{id:"bent-wing",label:"左翼弯折的钥影",clue:"I · 使用损伤",x:-4.8,display:{z:.7},color:9283527,model:Es({wings:[{side:"left",feathers:4,bend:-.48},{side:"right",feathers:4,bend:0}]}),evidence:{damage:"bent-left-wing"}},{id:"clockwise-drift",label:"顺时针下沉轨迹",clue:"II · 负重飞行",x:-1.6,display:{z:.7},color:7507640,model:Es({shaftLength:1.72}),evidence:{motion:"clockwise-descending",orbitMarkers:7}},{id:"silver-key",label:"小型银钥匙",clue:"III · 银屑吻合",x:1.6,display:{z:.7},color:12175579,model:Es({shaftLength:1.4,bowRadius:.36,metal:"silver"}),evidence:{lockMaterial:"silver"}},{id:"gold-key",label:"华丽金钥匙",clue:"诱饵 · 锁孔无金屑",x:4.8,display:{z:.7},color:12093749,model:Es({shaftLength:1.68,bowRadius:.58,teeth:4,metal:"gold"}),evidence:{lockMaterial:"mismatch"}}],wu={wallClue:"左翼折痕 · 顺时针下沉 · 银屑锁孔",dynamic:{roomLoadedMessage:"飞钥匙房已加载：依次核对折翼、飞行轨迹和锁孔银屑。",wrong:"“{label}”惊散了钥匙群！追逐失误升至 {count}，三条证据需要重新确认。",firstHint:"左翼折痕与门框刮痕一致。现在观察负重钥匙群，寻找顺时针下沉的轨迹。",secondHint:"下沉轨迹锁定了小型钥匙。最后核对锁孔银屑，排除华丽但材质不符的金钥匙。",progress:"飞钥匙证据已确认 {count} / 3",accepted:"{label}与现场证据吻合，钥匙群的范围缩小了。",completeObjective:"飞钥匙房完成：折翼银钥匙准确嵌入门锁，通往巫师棋盘的石门已经开启",completeHint:"折翼证明它被使用过，顺时针下沉暴露负重，银屑完成最终材质核对。前方传来巨大棋子的脚步声。",transitionKicker:"第一部 · 第四章 · 第 2 关完成",transitionTitle:"折翼银钥匙",completionMessage:"银钥匙旋转一周，棋盘石门轰然开启——正在进入巫师棋盘！",nextRoomMessage:"巫师棋已加载：先诱敌，再双攻，最后沿空线推进。"}};function Pn(i,e,t={}){const n=wu.dynamic[e];return vt(i,n).replace(/\{(\w+)\}/g,(s,o)=>t[o]??`{${o}}`)}const ln=(i,e,t,n=.12,r=4,s=3)=>({id:i,layer:e,points:t,radius:n,leaves:r,thorns:s}),T_=[ln("exit-crown-left","exit",[[-3.8,.2,-2.8],[-2.9,1,-2.3],[-2,2,-2],[-.8,2.6,-1.9]],.2,7,5),ln("exit-crown-right","exit",[[3.8,.2,-2.8],[2.9,1,-2.3],[2,2,-2],[.8,2.6,-1.9]],.2,7,5),ln("exit-lattice-left","exit",[[-3.5,.1,-1],[-2.6,.9,-1.5],[-1.8,1.4,-2.2],[-1.2,.2,-2.8]],.16,6,4),ln("exit-lattice-right","exit",[[3.5,.1,-1],[2.6,.9,-1.5],[1.8,1.4,-2.2],[1.2,.2,-2.8]],.16,6,4),ln("west-climber-a","wall",[[-8.6,.1,2.5],[-8.2,1.8,1.7],[-8.5,3.9,.5],[-7.7,6.6,-.6]],.14,6,4),ln("west-climber-b","wall",[[-8.5,.1,-5],[-7.9,1.7,-4.1],[-8.4,4.2,-3.2],[-7.6,6.7,-2]],.11,5,4),ln("east-climber-a","wall",[[8.6,.1,2.1],[8,2,1.2],[8.5,4,0],[7.7,6.6,-1]],.14,6,4),ln("east-climber-b","wall",[[8.5,.1,-5.2],[7.8,1.8,-4.3],[8.4,4,-3.1],[7.5,6.7,-1.8]],.11,5,4),ln("ceiling-arch-a","ceiling",[[-7.5,6.7,1.8],[-4.8,6.4,.6],[-1.8,6.8,-.5],[1,6.35,-1.4]],.12,7,4),ln("ceiling-arch-b","ceiling",[[7.5,6.7,2.2],[4.8,6.3,.9],[2,6.8,-.4],[-.9,6.35,-1.5]],.12,7,4),ln("ceiling-cross-a","ceiling",[[-6.5,6.65,-5.8],[-3.5,6.25,-4.4],[.1,6.75,-3.2],[3.5,6.35,-2.2]],.1,6,3),ln("ceiling-cross-b","ceiling",[[6.6,6.65,-5.6],[3.5,6.3,-4.5],[.2,6.7,-3.1],[-3.3,6.3,-2.1]],.1,6,3),ln("floor-runner-left","exit",[[-7.8,.08,5.8],[-5.6,.2,3.7],[-4.1,.12,1.1],[-2.7,.3,-1.3]],.15,6,5),ln("floor-runner-right","exit",[[7.8,.08,5.8],[5.6,.2,3.7],[4.1,.12,1.1],[2.7,.3,-1.3]],.15,6,5)],w_=[{id:"relax-grip",label:"放松呼吸",clue:"I · 停止挣扎",x:-3.9,color:7977372,model:{kind:"breath-orb",rings:3,breathColor:11067852}},{id:"kindle-bluebell",label:"点燃蓝铃冷焰",clue:"II · 微光驱藤",x:-1.3,color:5213905,model:{kind:"bluebell-flame",petals:6,flameColor:7584255}},{id:"hold-light",label:"维持恒定光照",clue:"III · 稳住三拍",x:1.3,color:8637672,model:{kind:"steady-lantern",pulses:3,flameColor:10411263}},{id:"flare-brightly",label:"猛烈爆燃",clue:"诱饵 · 惊动根网",x:3.9,color:14048317,model:{kind:"wild-flare",flameCount:7,flameColor:16738866,safe:!1}}],Au={wallClue:"停止挣扎 · 蓝铃冷焰 · 三拍恒光",dynamic:{roomLoadedMessage:"地下试炼已加载：放松藤蔓缠绕，以蓝铃冷焰和三拍恒光打开根网。",wrong:"“{label}”打乱节奏！根网骤然收紧至 {count} 级；先放松，再重新开始。",firstHint:"你停止挣扎，第一层藤蔓松开。现在点燃不会灼伤施法者的蓝铃冷焰。",secondHint:"冷焰逼退根须。最后保持三拍恒光，不要让亮度突然爆发。",progress:"魔鬼网光照节奏已完成 {count} / 3",accepted:"{label}奏效，地下出口上方的藤蔓正在退缩。",completeObjective:"魔鬼网完成：稳定冷焰驱散根网，通往飞钥匙房的地下出口已经开启",completeHint:"镇静削弱缠绕，蓝铃冷焰逼退藤蔓，三拍恒光打开根网。前方传来成群翅膀的振动声。",transitionKicker:"第一部 · 第四章 · 第 1 关完成",transitionTitle:"冷焰退藤",completionMessage:"魔鬼网缩回石缝——正在进入飞钥匙房！"}};function kn(i,e,t={}){const n=Au.dynamic[e];return vt(i,n).replace(/\{(\w+)\}/g,(s,o)=>t[o]??`{${o}}`)}const Ts=(i,e={})=>({piece:i,height:1.75,material:"carved-stone",...e}),Rt={cellSize:1.3,boardStartX:-4.55,boardStartZ:-7.9,galleryZ:3,mobileCameraZ:8.8,mobileWallLabelSize:18},A_=[{id:"pawn-decoy",label:"边兵诱敌",clue:"I · 引开主教",x:-3.3,display:{z:Rt.galleryZ,labelStyle:"pedestal-plaque"},mobileDisplay:{x:-1.35,z:Rt.galleryZ,scale:.68,plaqueWidth:1.15},color:10455404,model:Ts("pawn",{headRadius:.24})},{id:"knight-fork",label:"骑士双攻",clue:"II · 将军攻车",x:-1.1,display:{z:Rt.galleryZ,labelStyle:"pedestal-plaque"},mobileDisplay:{x:-.45,z:Rt.galleryZ,scale:.68,plaqueWidth:1.15},color:7902138,model:Ts("knight",{profile:"horse-head",maneRidges:4})},{id:"rook-advance",label:"城堡沿空线推进",clue:"III · 空线抵岸",x:1.1,display:{z:Rt.galleryZ,labelStyle:"pedestal-plaque"},mobileDisplay:{x:.45,z:Rt.galleryZ,scale:.68,plaqueWidth:1.15},color:8364420,model:Ts("rook",{battlements:6})},{id:"queen-charge",label:"王后强攻",clue:"诱饵 · 暴露全线",x:3.3,display:{z:Rt.galleryZ,labelStyle:"pedestal-plaque"},mobileDisplay:{x:1.35,z:Rt.galleryZ,scale:.68,plaqueWidth:1.15},color:11686492,model:Ts("queen",{crownSpikes:6})}],Cu={wallClue:"边兵牵制主教 · 骑士双攻 · 城堡穿过空线",dynamic:{wrong:"“{label}”暴露了棋路！巨棋吃掉已投入棋子，被吃总数升至 {count}。",firstHint:"边兵引开了黑主教。现在用骑士同时威胁国王与城堡，迫使黑方让出中央。",secondHint:"骑士双攻奏效，纵线已经清空。最后让城堡沿直线推进到对岸。",progress:"安全棋步已确认 {count} / 3",accepted:"{label}成立，巨型黑棋被迫改换阵形。",completeObjective:"巫师棋完成：仅以边兵诱敌，骑士与城堡已安全抵达对岸",completeHint:"诱敌打开斜线，双攻迫使让位，城堡穿过空线。最后的魔法石密室就在棋盘后方。",transitionKicker:"第一部 · 第四章 · 第 3 关完成",transitionTitle:"最少牺牲棋路",completionMessage:"白色城堡抵达对岸，火门显现——正在进入魔法石密室！",nextRoomMessage:"最终密室已加载：先解药剂逻辑，再辨镜像，最后证明守护意图。"}};function On(i,e,t={}){const n=Cu.dynamic[e];return vt(i,n).replace(/\{(\w+)\}/g,(s,o)=>t[o]??`{${o}}`)}const gn=Object.freeze({galleryZ:3.05,mobileCameraZ:9,mobileWallLabelSize:18,mobileWallLabelWidth:3.2,potionRow:Object.freeze({count:7,smallestIndex:3,z:-5.65}),blackFlame:Object.freeze({columns:11,height:2.6,z:-3.9}),mirror:Object.freeze({frame:"ornate-gold-arch",inscription:"erised-reversed"})}),ws=i=>({z:gn.galleryZ,labelStyle:"pedestal-plaque",x:i}),As=i=>({x:i,z:gn.galleryZ,scale:.55,plaqueWidth:.85}),C_=Object.freeze([Object.freeze({id:"black-flame-potion",label:"最小银瓶",clue:"I · 穿越黑焰",x:-3.3,color:8485030,display:ws(-3.3),mobileDisplay:As(-.9),model:Object.freeze({kind:"potion-bottle",rank:"smallest-of-seven",height:.68,liquid:"violet-black-flame-antidote"})}),Object.freeze({id:"empty-pocket-reflection",label:"空口袋镜影",clue:"II · 不占有",x:-1.1,color:6717345,display:ws(-1.1),mobileDisplay:As(-.3),model:Object.freeze({kind:"mirror-figure",pocket:"empty-and-visible",stoneVisible:!1})}),Object.freeze({id:"protect-the-stone",label:"守护石的誓言",clue:"III · 只为保护",x:1.1,color:7705713,display:ws(1.1),mobileDisplay:As(.3),model:Object.freeze({kind:"protective-hands",gesture:"open-shield",stonePosition:"beyond-reach"})}),Object.freeze({id:"seize-the-stone",label:"夺取石的手",clue:"诱饵 · 占有欲",x:3.3,color:10305356,display:ws(3.3),mobileDisplay:As(.9),model:Object.freeze({kind:"grasping-hand",gesture:"closed-grasp",corruption:"red-cracks"})})]),Da=Object.freeze({wallClue:"七瓶取最小 · 镜中口袋为空 · 双手只作守护",mirrorInscription:"厄里斯 · 欲望倒写显形",dynamic:Object.freeze({wrong:"“{label}”暴露了占有欲！线索消散，腐化诱惑升至 {count}。",firstHint:"最小银瓶让你穿过黑焰。现在观察镜中衣袋：真正不求占有的人，口袋里不会出现石头。",secondHint:"空口袋镜影证明你没有取石欲望。最后明确你的意图：保护它，而不是拥有它。",progress:"魔法石密室线索已确认 {count} / 3",accepted:"{label}通过了密室检验，镜面中的金光更加清晰。",completeObjective:"第一部完成：魔法石只向无意占有、决心守护的人显现",completeHint:"药剂穿过黑焰，空口袋识破欲望，守护誓言让魔法石安全显现。新的绿色干扰正在住宅中聚集。",transitionKicker:"第一部 · 魔法石完成",transitionTitle:"第二部 · 不祥警告",completionMessage:"守护之石化作金光——正在返回住宅，调查精灵留下的三重封锁！",nextRoomMessage:"第二部首关已加载：沿邮槽、蛋糕与飞路炉追踪绿色魔力残痕。"})});function Fn(i,e,t={}){const n=Da.dynamic[e];return vt(i,n).replace(/\{(\w+)\}/g,(s,o)=>t[o]??`{${o}}`)}const Cs=i=>({material:"parchment",seal:"crimson-wax-h",width:.82,height:.5,wear:i}),R_=[{id:"cupboard",chronology:1,destination:"H. Potter · 楼梯下的储物间",clue:"I · 楼梯下储物间",addressMark:"STAIRS",position:[-6.45,1,-3.1],rotation:[0,.55,0],envelope:Cs(["creased-corners","dust-smudges"]),model:{kind:"cupboard-door",landmarks:["sloped-door","stair-treads","brass-vent"]}},{id:"bedroom",chronology:2,destination:"H. Potter · 楼上最小的卧室",clue:"II · 楼上最小卧室",addressMark:"WINDOW",position:[6.3,1.5,3.7],rotation:[0,-.65,0],envelope:Cs(["creased-corners","window-scratches"]),model:{kind:"bedroom-window",landmarks:["blue-window","narrow-bed","roofline"]}},{id:"hotel-room-17",chronology:3,destination:"H. Potter · 铁路景观酒店 17 号房",clue:"III · 铁路旅馆 17 号房",addressMark:"ROOM 17",position:[-4.7,1.85,4.35],rotation:[0,.2,0],envelope:Cs(["rain-speckles","luggage-scuffs"]),model:{kind:"hotel-key",landmarks:["brass-17","rail-signal","suitcase"]}},{id:"island-hut",chronology:4,destination:"H. Potter · 海上岩礁小屋",clue:"IV · 海上岩礁小屋",addressMark:"ROCK HUT",position:[5.55,2.15,-4.6],rotation:[0,-.3,0],envelope:Cs(["salt-stains","torn-edge"]),model:{kind:"storm-hut",landmarks:["black-rock","timber-hut","wave-rings"]}}],Ns={wallClue:"楼梯下 · 楼上小卧室 · 17 号房 · 海上小屋",mobileWallWidth:5,mobileWallFontSize:29,dynamic:{wrong:"顺序错误：“{destination}”不是下一处藏身地。四封信重新飞散！",progress:"时间线正确：{destination} · {count} / 4",completeObjective:"时间线完成：循红蜡封印前往通往对角巷的门",completeHint:"四处藏身地首尾相接，信上的猩红 H 蜡印化成了门钥匙。",completeMessage:"四封信按时间顺序排列完成——通往对角巷的门已开启！"}};function Ar(i,e,t={}){const n=Ns.dynamic[e];return vt(i,n).replace(/\{(\w+)\}/g,(s,o)=>t[o]??`{${o}}`)}const La=["cupboard","bedroom","hotel-room-17","island-hut"],Ua=["spellbook","cauldron","owl","wand-box"],Rr=Object.freeze({spellbook:2,cauldron:3,owl:4,"wand-box":3}),P_=Object.freeze([Object.freeze({id:"owl-letters",name:"猫头鹰来信"}),Object.freeze({id:"diagon-alley-list",name:"对角巷清单"}),Object.freeze({id:"wand-selection",name:"魔杖选择"}),Object.freeze({id:"sorting-ceremony",name:"分院仪式"})]);function nl(i){return P_[i]??null}function I_(i,e){const t=La[i.progress.length];if(e!==t)return{progress:[],unlocked:!1,reset:!0};const n=[...i.progress,e];return{progress:n,unlocked:n.length===La.length,reset:!1}}function D_(i,e){const t=Ua[i.progress.length];if(e!==t)return{progress:[],unlocked:!1,spent:0,reset:!0};const n=[...i.progress,e];return{progress:n,spent:(i.spent??0)+Rr[e],unlocked:n.length===Ua.length,reset:!1}}function L_(i,e){return e!=="holly"?{...i,mistakes:i.mistakes+1,accepted:!1,feedback:"unstable"}:{...i,progress:["wood"],accepted:!0}}function U_(i,e){return i.progress.includes("wood")?e!=="phoenix-feather"?{...i,mistakes:i.mistakes+1,accepted:!1,feedback:"resisted"}:{...i,progress:[...i.progress,"core"],accepted:!0}:{...i,accepted:!1,feedback:"unavailable"}}function N_(i,e){return e===11?{...i,progress:[...i.progress,"length"],unlocked:!0,accepted:!0,feedback:"chosen"}:{...i,mistakes:i.mistakes+1,accepted:!1,feedback:e<11?"too-short":"too-long"}}function O_(i,e){const t=["lion","badger","eagle","snake"],n={lion:"courage",badger:"loyalty",eagle:"wisdom",snake:"ambition"},r=t[i.progress.length];if(e!==r)return{...i,mistakes:i.mistakes+1,accepted:!1,feedback:"wrong-order"};const s=[...i.progress,e],o=s.length===t.length;return{...i,progress:s,unlocked:o,accepted:!0,trait:n[e],...o?{chapterComplete:!0}:{}}}function F_({roomIndex:i,unlocked:e}){return e?{roomIndex:i+1,advanced:!0}:{roomIndex:i,advanced:!1}}const Et=new xd,Ft=new vn(70,innerWidth/innerHeight,.1,100),_i=new Ug({antialias:!0});_i.setPixelRatio(Math.min(devicePixelRatio,2));_i.setSize(innerWidth,innerHeight);_i.shadowMap.enabled=!0;_i.shadowMap.type=Hc;_i.outputColorSpace=cn;document.querySelector("#app").appendChild(_i.domElement);const ue=new Gd(10201809,2957592,1.05);Et.add(ue);const il=new qd(12899583,1.5);il.position.set(-4,8,5);il.castShadow=!0;Et.add(il);const In=new kg(Ft,document.body),rl=document.querySelector("#start-screen"),$r=document.querySelector("#start-button"),Zs=document.querySelector("#continue-button"),Vs=document.querySelector("#restart-button"),k_=document.querySelector("#mobile-controls"),Xe=document.querySelector("#objective"),Dt=document.querySelector("#counter"),Pr=document.querySelector("#prompt"),zo=document.querySelector("#message"),hn=document.querySelector("#room-kicker"),z_=document.querySelector("#room-name"),je=document.querySelector("#puzzle-hint"),kt=document.querySelector("#puzzle-progress"),tt=document.querySelector("#room-transition"),jt=document.querySelector("#transition-kicker"),Zt=document.querySelector("#transition-title"),Gs=document.querySelector("#language-screen"),Ru=document.querySelector("#language-button"),$t=document.querySelector("#narration-button"),Or=document.querySelector("#narration-status"),B_=document.querySelector("#narration-subtitle"),ur=document.querySelector("#narration-audio");let Mn="idle",Na=0;const _n=matchMedia("(pointer: coarse)").matches||matchMedia("(max-width: 820px)").matches||navigator.maxTouchPoints>0,Uc=Eu(localStorage),Ir=Uc?jg(Uc):null;let ve=Jg(localStorage),Ee=jr(ve),Pu,Kr=!1,Re=new qt;Et.add(Re);let Ve=[],yt=[],fi=null,Ne=null,Mt=0,P={progress:[],unlocked:!1},Nc,Os=!1;const Oc={x:8.25,z:8.25},Oa=new $d;Oa.far=4.2;function z(i,e={}){return new mu({color:i,roughness:.82,...e})}function G(i,e,t,n,r=!0,s=Re){const o=new oe(new Kt(...e),n);return o.name=i,o.position.set(...t),o.castShadow=r,o.receiveShadow=!0,s.add(o),o}function H_(i){i.traverse(e=>{e.geometry?.dispose?.();const t=Array.isArray(e.material)?e.material:[e.material];for(const n of t)n&&(n.map?.dispose?.(),n.dispose?.())})}function V_(){Et.remove(Re),H_(Re),Re=new qt,Et.add(Re),Ve=[],yt=[],fi=null,Ne=null,Pr.classList.remove("visible")}function ze(i,e,{color:t="#f2d28b",width:n=4.8,size:r=54}={}){i=vt(ve,i);const s=document.createElement("canvas");s.width=1024,s.height=220;const o=s.getContext("2d");o.fillStyle="rgba(7, 5, 10, 0.82)",o.fillRect(0,0,s.width,s.height),o.strokeStyle=t,o.lineWidth=8,o.strokeRect(8,8,s.width-16,s.height-16),o.fillStyle=t,o.font=`600 ${r}px -apple-system, BlinkMacSystemFont, sans-serif`,o.textAlign="center",o.textBaseline="middle",o.fillText(i,s.width/2,s.height/2);const a=new Td(s);a.colorSpace=cn;const l=new bd(new cu({map:a,transparent:!0,depthTest:!0}));return l.position.set(...e),l.scale.set(n,n*.215,1),Re.add(l),l}function le(i,e=2400){zo.textContent=vt(ve,i),zo.classList.add("show"),clearTimeout(Nc),Nc=setTimeout(()=>zo.classList.remove("show"),e)}function Vt({index:i,name:e,objectiveText:t,hint:n,progress:r}){const s=Mt>=16?{book:2,chapter:1,room:Mt-15}:{book:1,chapter:Math.floor(Mt/4)+1,room:Mt%4+1},o=t_(ve,{...s,name:e,objectiveText:t,hint:n});hn.textContent=o.kicker,z_.textContent=o.name,Xe.textContent=o.objectiveText,je.textContent=o.hint,kt.textContent=r}function Fc(){const i=P.progress.length;Dt.textContent=Ee("counter.letters",{count:i}),kt.textContent=La.map((e,t)=>t<i?"●":"○").join("  ")}function kc(){const i=P.progress.length;Dt.textContent=Ee("counter.shopping",{count:i,remaining:12-(P.spent??0)}),kt.textContent=Ua.map((e,t)=>t<i?"✓":"□").join("  ")}function sl(){const i=P.progress.includes("wood"),e=P.progress.includes("core"),t=P.progress.includes("length");Dt.textContent=Ee("counter.wand",{count:P.progress.length,mistakes:P.mistakes}),kt.textContent=`木材 ${i?"✓":"○"}  杖芯 ${e?"✓":"○"}  长度 ${t?"✓":"○"}`}function G_(){Dt.textContent=Ee("counter.sorting",{count:P.progress.length,mistakes:P.mistakes}),kt.textContent=`狮 ${P.progress.includes("lion")?"✓":"○"}  獾 ${P.progress.includes("badger")?"✓":"○"}  鹰 ${P.progress.includes("eagle")?"✓":"○"}  蛇 ${P.progress.includes("snake")?"✓":"○"}`}function Iu(){Dt.textContent=Ee("counter.stairs",{count:P.progress.length,penalty:P.timePenalty}),kt.textContent=["lower","moon","upper"].map((i,e)=>e<P.progress.length?"◆":"◇").join("  ")}function Du(){Dt.textContent=Ee("counter.portraits",{count:P.progress.length,value:P.suspicion}),kt.textContent=["scholar","knight","lady"].map((i,e)=>e<P.progress.length?"▣":"▢").join("  ")}function Lu(){Dt.textContent=Ee("counter.patrol",{count:P.progress.length,value:P.alert}),kt.textContent=["armor","cat","tapestry"].map((i,e)=>e<P.progress.length?"◆":"◇").join("  ")}function Uu(){Dt.textContent=Ee("counter.lullaby",{count:P.progress.length,value:P.wakefulness}),kt.textContent=["flute","harp","music-box"].map((i,e)=>e<P.progress.length?"♪":"·").join("  ")}function Nu(){Dt.textContent=Ee("counter.flying",{count:P.progress.length,value:P.turbulence}),kt.textContent=["围巾","笔记","罗盘"].map((i,e)=>e<P.progress.length?"➤":"○").join("  ")}function Ou(){Dt.textContent=Ee("counter.troll",{count:P.progress.length,value:P.danger}),kt.textContent=["止水","清障","架桥"].map((i,e)=>e<P.progress.length?"✦":"◇").join("  ")}function Fu(){Dt.textContent=Ee("counter.library",{count:P.progress.length,value:P.noise}),kt.textContent=["建校","龙灾","月蚀"].map((i,e)=>e<P.progress.length?"▰":"▱").join("  ")}function ku(){Dt.textContent=Ee("counter.mirror",{count:P.progress.length,value:P.illusion}),kt.textContent=["御寒","照路","同行"].map((i,e)=>e<P.progress.length?"◈":"◇").join("  ")}function zu(){Dt.textContent=Ee("counter.snare",{count:P.progress.length,value:P.constriction}),kt.textContent=[0,1,2].map((i,e)=>e<P.progress.length?"✺":"○").join("  ")}function Bu(){Dt.textContent=Ee("counter.keys",{count:P.progress.length,value:P.pursuit}),kt.textContent=["折翼","轨迹","锁孔"].map((i,e)=>e<P.progress.length?"🗝":"◇").join("  ")}function Hu(){Dt.textContent=Ee("counter.chess",{count:P.progress.length,value:P.captured}),kt.textContent=["兵诱敌","马双攻","车开路"].map((i,e)=>e<P.progress.length?"♟":"◇").join("  ")}function Vu(){Dt.textContent=Ee("counter.stone",{count:P.progress.length,value:P.corruption}),kt.textContent=["药剂","镜像","意图"].map((i,e)=>e<P.progress.length?"◆":"◇").join("  ")}function Gu(){Dt.textContent=Ee("counter.elf",{count:P.progress.length,value:P.interference}),kt.textContent=["邮槽","蛋糕","飞路"].map((i,e)=>e<P.progress.length?"✦":"◇").join("  ")}function Wu(){Dt.textContent=Ee("counter.car",{count:P.progress.length,value:P.turbulence}),kt.textContent=["配重","航向","油门"].map((i,e)=>e<P.progress.length?"➤":"◇").join("  ")}function Xu(){Dt.textContent=Ee("counter.willow",{count:P.progress.length,value:P.bruises}),kt.textContent=["等","伏","冲"].map((i,e)=>e<P.progress.length?"♩":"◇").join("  ")}function Gt({wall:i=5787455,floor:e=2892828,ceiling:t=2696479,fog:n=1512207}){Et.background=new et(n),Et.fog=new ja(n,.028);const r=z(i,{roughness:.96}),s=z(e,{roughness:1});G("地板",[18,.25,18],[0,-.12,0],s,!1),G("天花板",[18,.25,18],[0,7,0],z(t),!1),G("北墙",[18,7,.3],[0,3.5,-9],r,!1),G("南墙",[18,7,.3],[0,3.5,9],r,!1),G("西墙",[.3,7,18],[-9,3.5,0],r,!1),G("东墙",[.3,7,18],[9,3.5,0],r,!1)}function xt(i,e=2.5,t=8){const n=new gi(16753737,e,t,2);n.position.set(...i),n.castShadow=!0,Re.add(n);const r=new oe(new it(.09,12,12),new Qn({color:16762216}));r.position.copy(n.position),Re.add(r)}function ol(i,e){const t=z(5256734,{roughness:.72}),n=z(2430735,{roughness:.75,metalness:.08});G("左门框",[.22,5.5,.42],[-1.72,2.75,-8.63],t),G("右门框",[.22,5.5,.42],[1.72,2.75,-8.63],t),G("上门框",[3.65,.22,.42],[0,5.45,-8.63],t);const r=new qt;r.position.set(-1.58,0,-8.48),Re.add(r);const s=G(i,[3.16,5.15,.22],[1.58,2.58,0],n,!0,r);return s.userData={type:"door",label:i,unlocked:!1,opening:!1,pivot:r,nextRoomIndex:e},Ve.push(s),fi=s,ze(i,[0,6.05,-8.35],{width:4.2,size:48}),s}function Bo({position:i,rotation:e=[0,0,0],clueId:t=null,destination:n="",addressMark:r="",decoy:s=!1,decorative:o=!1,phase:a=0}){const l=z(15261117,{roughness:.72,emissive:t?2365197:0,emissiveIntensity:t?.35:0}),c=new oe(new Kt(.86,.54,.05),l);c.position.set(...i),c.rotation.set(...e),c.castShadow=!0,Re.add(c);const u=new oe(new ft(.095,.095,.032,18),z(8328736,{roughness:.55}));if(u.rotation.x=Math.PI/2,u.position.set(0,-.05,.055),c.add(u),t){const f=z(14000474,{metalness:.2,roughness:.5});G("H 蜡印左竖",[.018,.095,.014],[-.031,-.05,.078],f,!1,c),G("H 蜡印右竖",[.018,.095,.014],[.031,-.05,.078],f,!1,c),G("H 蜡印横",[.075,.018,.014],[0,-.05,.078],f,!1,c);const p=z(3418917,{roughness:1});for(const[g,S]of[.48,.38,.3].entries())G("地址墨线",[S,.018,.009],[0,.11-g*.065,.041],p,!1,c)}const h=new oe(new tn().setFromPoints([new I(-.38,.22,.031),new I(.38,.22,.031),new I(0,-.05,.031)]),new Qn({color:13615775,side:En}));return c.add(h),o||(c.name=n,c.userData={type:"owl-letter",clueId:t,destination:n,addressMark:r,decoy:s,selected:!1},Ve.push(c)),yt.push({object:c,baseY:i[1],phase:a,spin:o?.08:.025,bob:o?.16:.07}),c}function Dr(i,e=1,t=!1){const n=new qt;n.position.set(...i),n.scale.setScalar(e);const r=z(15328209,{roughness:1}),s=new oe(new it(.34,18,18),r);s.scale.y=1.35,s.castShadow=!0,n.add(s);const o=new oe(new it(.29,18,18),r);o.position.y=.48,n.add(o);for(const l of[-.11,.11]){const c=new oe(new it(.055,12,12),new Qn({color:15911244}));c.position.set(l,.53,.25),n.add(c);const u=new oe(new it(.025,10,10),new Qn({color:592137}));u.position.set(l,.53,.295),n.add(u)}const a=new oe(new en(.07,.18,4),z(14064444));return a.rotation.x=Math.PI/2,a.position.set(0,.4,.31),n.add(a),Re.add(n),t&&(s.userData={type:"shopping-item",itemId:"owl",label:"雪白猫头鹰"},Ve.push(s)),yt.push({object:n,baseY:i[1],phase:i[0]+i[2],spin:0,bob:.04}),n}function W_(i){const[e,,t]=i.position,n=new qt;n.position.set(e,0,t),Re.add(n);const r=z(5387551,{roughness:.94}),s=z(12159288,{metalness:.72,roughness:.34}),o=z(4681358,{emissive:1322826,emissiveIntensity:.85,roughness:.28});if(i.model.kind==="cupboard-door"){G("斜顶储物间门",[1.5,1.8,.16],[0,.9,-.28],r,!0,n);for(const a of[.52,.66,.8])G("黄铜通风槽",[.52,.045,.035],[0,a,-.18],s,!1,n);for(let a=0;a<4;a+=1)G("楼梯踏步剪影",[1.8-a*.25,.18,.52],[-.7+a*.15,1.9+a*.18,-.18],r,!0,n)}else if(i.model.kind==="bedroom-window"){G("窄床",[1.65,.28,.72],[0,.35,-.15],z(7107919),!0,n),G("小卧室蓝窗",[1.22,1.28,.1],[0,1.35,-.45],o,!1,n),G("窗棂横",[1.3,.07,.13],[0,1.35,-.37],r,!1,n),G("窗棂竖",[.07,1.35,.13],[0,1.35,-.37],r,!1,n);const a=new oe(new en(1.18,.64,4),z(4337704));a.rotation.y=Math.PI/4,a.position.set(0,2.25,-.34),n.add(a)}else if(i.model.kind==="hotel-key"){G("旅行箱",[1.55,.92,.5],[0,.52,-.18],z(6898987),!0,n),G("旅行箱带",[.16,.96,.54],[0,.52,-.18],r,!0,n);const a=new oe(new xn(.27,.055,10,24),s);a.position.set(0,1.55,-.12),n.add(a),G("17 号黄铜钥匙牌",[.75,.5,.1],[0,1.18,-.12],s,!0,n),ze("ROOM 17",[e,1.2,t+.02],{width:1.1,size:48,color:"#2c2117"}),G("铁路红色信号",[.16,1.4,.16],[-.75,1,-.35],z(3487030),!0,n);const l=new oe(new it(.16,12,12),z(12991538,{emissive:7999498,emissiveIntensity:1.5}));l.position.set(-.75,1.7,-.35),n.add(l)}else{const a=new oe(new Ka(1.18,0),z(3225661,{roughness:1}));a.scale.set(1.2,.58,.95),a.position.set(0,.55,-.2),n.add(a),G("暴风小屋",[1.25,1.05,.9],[0,1.25,-.2],r,!0,n);const l=new oe(new en(1.05,.72,4),z(2498588));l.rotation.y=Math.PI/4,l.position.set(0,2.08,-.2),n.add(l);for(const c of[1.25,1.55]){const u=new oe(new xn(c,.045,8,36,Math.PI),z(4750739,{emissive:1456973,emissiveIntensity:1}));u.rotation.x=Math.PI/2,u.rotation.z=Math.PI/2,u.position.set(0,.2,.1),n.add(u)}}ze(i.clue,[e,2.85,t],{width:2.25,size:31})}function X_(){ue.color.setHex(10985609),ue.groundColor.setHex(3352093),Gt({wall:6709064,floor:3745566,ceiling:3881005,fog:1577487}),Vt({index:0,name:"猫头鹰来信",objectiveText:"目标：按弗农改变藏身处的时间顺序检查四封信",hint:"地址会追着哈利变化。错误选择会让已确认的信全部重新飞散。",progress:"○  ○  ○  ○"}),Dt.textContent=Ee("counter.letters",{count:0}),P={progress:[],unlocked:!1};const i=z(4861208),e=z(2956049),t=z(7035201,{roughness:1}),n=z(5975587,{roughness:1});for(let o=0;o<7;o+=1)G("楼梯",[3.8-o*.32,.32,1.05],[-6.7+o*.2,.16+o*.32,-4.6+o*.72],e);G("楼梯下储物间",[2.4,2.15,.16],[-7.7,1.08,-3.7],i),ze("楼梯下的储物间",[-7.42,2.55,-3.52],{width:3.2,size:42}),G("壁炉背板",[4.1,3.6,.38],[0,1.8,-8.58],n),G("壁炉洞口",[2.3,2,.46],[0,1,-8.3],z(1182472)),G("壁炉台",[4.6,.28,.72],[0,3.45,-8.2],i),xt([0,1.05,-7.85],4.2,8);for(const o of[-.55,0,.55])xt([o,.55+Math.abs(o)*.3,-7.75],1.25,4);G("沙发座",[4.2,.65,1.45],[3.9,.62,2.6],t),G("沙发背",[4.2,1.45,.45],[3.9,1.35,3.05],t),G("茶几",[3.1,.22,1.7],[1.7,.75,.2],i);for(const[o,a]of[[.45,-.45],[2.95,-.45],[.45,.85],[2.95,.85]])G("茶几腿",[.16,.75,.16],[o,.37,a],e);const r=z(6455968,{emissive:1915224,emissiveIntensity:1.8,roughness:.25});G("窗户",[5.1,2.7,.12],[0,3.8,8.78],r,!1),G("窗框横",[5.3,.16,.2],[0,3.8,8.65],i),G("窗框竖",[.16,2.9,.2],[0,3.8,8.65],i),Dr([-2,5.4,8.2],.8),Dr([0,5.65,8.2],.72),Dr([2.1,5.25,8.2],.85),Dr([-3.9,2.15,-1.4],1.05),ze("4 PRIVET DRIVE",[0,6.15,8.45],{width:5.2,size:52}),ze("NO POST ON SUNDAYS!",[3.85,4.7,-8.3],{color:"#e4b55e",width:4,size:42}),R_.forEach((o,a)=>{W_(o),Bo({...o,clueId:o.id,phase:a*1.4})}),[["front-door","V. Dursley · 女贞路前门",[-2.8,1.45,2.3]],["kitchen","D. Dursley · 厨房餐桌",[4.6,1.5,.2]],["zoo","H. Potter · 动物园爬虫馆",[-5.9,1.75,1.9]],["school","H. Potter · 石墙中学",[.1,1.35,3.75]]].forEach(([o,a,l],c)=>Bo({clueId:o,destination:a,position:l,decoy:!0,rotation:[0,c*.7,0],phase:2+c}));for(let o=0;o<34;o+=1){const a=o*.73,l=1.4+o%7*.72;Bo({position:[Math.sin(a)*l,1.1+o%9*.54,-6.8+Math.cos(a)*l*.62],rotation:[Math.sin(o)*.45,a,Math.cos(o*.4)*.3],decorative:!0,phase:o*.37})}ze(Ns.wallClue,[0,6.25,-8.05],{width:Ns.mobileWallWidth,size:Ns.mobileWallFontSize}),ol("通往对角巷",1)}function rr(i,e,t,n){const r=z(n,{roughness:.9});G(`${t}店面`,[3.2,5.6,.55],[i,2.8,e],r),G(`${t}橱窗`,[2.15,2.15,.12],[i,2.85,e+(e<0?.34:-.34)],z(4284528,{emissive:1587271,emissiveIntensity:.8,roughness:.2})),ze(t,[i,5.3,e+(e<0?.42:-.42)],{width:3,size:38,color:"#e8c871"})}function ai(i,e,t,n,r=9069888){let s;if(i==="cauldron"){s=new oe(new ft(.48,.62,.62,24,1,!0),z(2697771,{metalness:.65,roughness:.38,side:En})),s.position.set(...t),Re.add(s);const o=new oe(new xn(.5,.06,10,24),z(5592922,{metalness:.8}));o.rotation.x=Math.PI/2,o.position.y=.32,s.add(o)}else i==="owl"?s=Dr(t,1.1,!0).children[0]:i==="broomstick"?(s=new oe(new ft(.055,.055,2.2,10),z(6898719)),s.rotation.z=Math.PI/2.7,s.position.set(...t),Re.add(s)):s=G(e,i==="spellbook"?[1.15,.28,.82]:i==="wand-box"?[1.55,.24,.42]:[.85,.85,.85],t,z(r,{emissive:r,emissiveIntensity:.08}));return s.name=e,s.userData={type:"shopping-item",itemId:i,label:e,price:n},Ve.includes(s)||Ve.push(s),ze(`${e} · ${n} G`,[t[0],t[1]+1.05,t[2]],{width:2.8,size:32}),s}function q_(){ue.color.setHex(7305376),ue.groundColor.setHex(1775393),Gt({wall:3156026,floor:3617336,ceiling:1512477,fog:1051927}),Vt({index:1,name:"对角巷清单",objectiveText:"目标：按霍格沃茨清单采购四件合规格物品，预算 12 加隆",hint:"课本 → 二号锡制坩埚 → 猫头鹰 → 魔杖盒。核对规格与价签，买错会清空采购篮。",progress:"□  □  □  □"}),Dt.textContent=Ee("counter.shopping",{count:0,remaining:12}),P={progress:[],unlocked:!1,spent:0},Et.fog.density=.022;for(let i=-7;i<=7;i+=1.1)for(let e=-2.8;e<=2.8;e+=1.1){const t=G("鹅卵石",[.95,.08,.95],[e+i*10%2*.22,.02,i],z(4801613,{roughness:1}),!1);t.rotation.y=(e+i)*.08}rr(-6.9,-5.8,"丽痕书店",5058601),rr(6.9,-5.8,"坩埚店",2440250),rr(-6.9,.3,"咿啦猫头鹰商店",4799784),rr(6.9,.3,"奥利凡德魔杖店",3353414),rr(-6.9,6.2,"药剂材料铺",4075071),rr(6.9,6.2,"魁地奇精品店",4073769);for(const i of[[-3.2,4.5,-4.2],[3.2,4.2,-1.8],[-2.1,4.8,3.8],[2.8,4.4,6.5]])xt(i,2.6,7);ai("spellbook","《标准咒语·初级》",[-4.9,1,-5],Rr.spellbook,8070194),ai("cauldron","二号锡制坩埚",[5,.7,-4.9],Rr.cauldron),ai("owl","雪白猫头鹰",[-5,1.25,.6],Rr.owl),ai("wand-box","等待主人的魔杖盒",[5,1,.7],Rr["wand-box"],6966058),ai("broomstick","飞天扫帚",[5,1.2,5.8],7),ai("crystal-ball","水晶球",[-5,1,5.7],5,6707589),ai("gold-scales","黄铜天平",[-3.2,1,-1.8],4,11041845),ai("advanced-potions","高级魔药学",[3.1,1,-2.5],6,2706741),ol("进入奥利凡德魔杖店",2)}function Ho(i,e,t,n=0){const r=new oe(new ft(.025,.065,e,10),z(t,{roughness:.7}));return r.position.set(...i),r.rotation.z=Math.PI/2,r.rotation.y=n,r.castShadow=!0,Re.add(r),r}function Y_(){ue.color.setHex(12032624),ue.groundColor.setHex(2365198),Gt({wall:4206623,floor:2365199,ceiling:1511435,fog:1051400}),Et.fog.density=.034,Vt({index:2,name:"魔杖选择",objectiveText:"目标：第一阶段，从三种木材中找出与你产生稳定共鸣的一种",hint:"木材线索：闪电形旧伤旁，常青叶不会在严冬凋零。选错会触发失控魔法。",progress:"木材 ○  杖芯 ○  长度 ○"}),Dt.textContent=Ee("counter.wand",{count:0,mistakes:0}),P={progress:[],unlocked:!1,mistakes:0};const i=z(2824461,{roughness:.88}),e=z(5715741,{roughness:.8}),t=[7230258,5257507,8086080,4008732];for(const u of[-1,1]){G("高魔杖柜",[.72,6.35,16.4],[u*8.35,3.18,0],i);for(let h=0;h<8;h+=1){G("柜架横梁",[.86,.1,16.1],[u*7.92,.55+h*.73,0],e);for(let f=0;f<10;f+=1){const p=t[(h+f+(u>0?1:0))%t.length],g=G("积尘的魔杖盒",[.24,.48,1.25],[u*7.77,.82+h*.73,-7.1+f*1.55],z(p,{roughness:.95}));g.rotation.x=((h+f)%3-1)*.025}}}G("奥利凡德柜台",[8.2,1.15,1.3],[0,.58,-4.5],e),G("柜台台面",[8.65,.18,1.55],[0,1.2,-4.5],z(7753770,{roughness:.55}));for(const[u,h,f]of[[-2.5,6238744,1.1],[0,2692620,1.28],[2.5,10120255,1.42]])G("打开的魔杖盒",[1.8,.16,.48],[u,1.38,-4.42],z(1511435)),Ho([u,1.55,-4.42],f,h);ze("木材  ·  杖芯  ·  长度",[0,2.35,-4.95],{width:5.4,size:43});const n=[{id:"oak",label:"橡木",x:-3.2,color:9067051},{id:"holly",label:"冬青木",x:0,color:15656132},{id:"yew",label:"紫杉木",x:3.2,color:4792340}];for(const u of n){G(`${u.label}样本台`,[1.8,.85,1.2],[u.x,.42,1.25],i);const h=Ho([u.x,1.16,1.25],1.35,u.color);h.name=`${u.label}木材样本`,h.userData={type:"wand-wood",woodId:u.id,label:u.label,selected:!1},Ve.push(h),ze(u.label,[u.x,2,1.25],{width:1.65,size:40})}const r=[{id:"dragon-heartstring",label:"龙心弦",x:-3.2,color:10959653},{id:"phoenix-feather",label:"凤凰羽毛",x:0,color:15906891},{id:"unicorn-hair",label:"独角兽毛",x:3.2,color:15196623}];for(const u of r){const h=G(`${u.label}杖芯台`,[1.8,.85,1.2],[u.x,.42,-1.15],i);h.visible=!1;const f=new oe(new ft(.14,.14,1.05,14),z(u.color,{emissive:u.color,emissiveIntensity:.45}));f.position.set(u.x,1.25,-1.15),f.name=`${u.label}杖芯样本`,f.userData={type:"wand-core",coreId:u.id,label:u.label,selected:!1,pedestal:h},f.visible=!1,Re.add(f),Ve.push(f)}const s=[{inches:9,label:"九英寸",x:-3.2,length:1.05},{inches:11,label:"十一英寸",x:0,length:1.3},{inches:13,label:"十三英寸",x:3.2,length:1.55}];for(const u of s){const h=G(`${u.label}校准台`,[1.8,.85,1.2],[u.x,.42,3.85],i);h.visible=!1;const f=Ho([u.x,1.2,3.85],u.length,15656132);f.name=`${u.label}冬青木魔杖`,f.userData={type:"wand-length",inches:u.inches,label:u.label,selected:!1,pedestal:h},f.visible=!1,Ve.push(f);const p=ze(u.label,[u.x,2.05,3.85],{width:1.7,size:38});p.visible=!1,f.userData.lengthLabel=p}const o=new qt;o.position.set(4.8,0,-6.15);const a=new oe(new ft(.38,.58,1.7,12),z(2696235));a.position.y=.9,o.add(a);const l=new oe(new it(.3,16,12),z(13083772));l.position.y=1.95,o.add(l);const c=new oe(new it(.32,14,10,0,Math.PI*2,0,Math.PI*.58),z(14209213));c.position.y=2.06,o.add(c),Re.add(o),G("后墙梯子左",[.14,5.7,.14],[-4.7,2.85,-8.35],e),G("后墙梯子右",[.14,5.7,.14],[-3.65,2.85,-8.35],e);for(let u=.45;u<5.5;u+=.48)G("梯子横档",[1.2,.1,.12],[-4.18,u,-8.28],e);ze("OLLIVANDERS · 公元前 382 年",[0,6.18,-8.45],{width:6.5,size:42}),xt([-5.2,4.7,-2.3],3.1,9),xt([5.2,4.7,-2.3],3.1,9),xt([0,4.5,-6.4],2.7,7);for(let u=0;u<12;u+=1){const h=new oe(new it(.025,6,6),new Qn({color:15387514})),f=[-5.5+u%6*2.2,1.3+u%4*1.15,-5.7+Math.floor(u/6)*5.8];h.position.set(...f),Re.add(h),yt.push({object:h,baseY:f[1],phase:u*.8,spin:0,bob:.22})}ol("登上霍格沃茨特快",3)}function j_(){ue.color.setHex(9281736),ue.groundColor.setHex(1512738),Gt({wall:4208431,floor:2169624,ceiling:1119270,fog:921632}),Et.fog.density=.022,Vt({index:3,name:"分院仪式",objectiveText:"目标：走近分院帽，观察大厅里的四学院象征",hint:"勇气、忠诚、智慧与野心各有象征；分院帽正在等待你的选择。",progress:"狮 ○  獾 ○  鹰 ○  蛇 ○"}),Dt.textContent=Ee("counter.sorting",{count:0,mistakes:0}),P={progress:[],unlocked:!1,mistakes:0};const i=z(4992538,{roughness:.84});for(const n of[-5.6,-1.9,1.9,5.6]){G("学院长桌",[1.45,.65,11.5],[n,.72,.8],i);for(let r=-4;r<=5;r+=1.8){const s=G("悬浮蜡烛",[.08,.5,.08],[n,3.2+(r+4)%3*.3,r],z(16115128));yt.push({object:s,baseY:s.position.y,phase:n+r,spin:0,bob:.08})}}const e=[{id:"lion",symbol:"狮",label:"狮 · 勇气",x:-5.7,color:9184818},{id:"badger",symbol:"獾",label:"獾 · 忠诚",x:-1.9,color:11962927},{id:"eagle",symbol:"鹰",label:"鹰 · 智慧",x:1.9,color:2706554},{id:"snake",symbol:"蛇",label:"蛇 · 野心",x:5.7,color:2579523}];for(const n of e){G(`${n.label}学院旗`,[2.25,3.3,.16],[n.x,4.55,-8.55],z(n.color,{roughness:.9})),ze(n.label,[n.x,4.55,-8.4],{width:2,size:40});const r=G(`${n.label}石徽`,[1.25,1.25,.32],[n.x,1.35,4.2],z(n.color,{emissive:n.color,emissiveIntensity:.12}));r.userData={type:"sorting-clue",symbolId:n.id,label:n.label,selected:!1},Ve.push(r),ze(n.symbol,[n.x,1.35,4],{width:.85,size:74})}G("分院凳",[1.7,.22,1.45],[0,.72,-5.7],i);const t=new oe(new en(.62,1.25,10),z(4863268,{roughness:.98}));t.position.set(0,1.45,-5.7),t.rotation.z=-.12,Re.add(t),ze("分院帽",[0,2.55,-5.8],{width:2.2,size:46}),xt([-4.8,4.8,-3],3.2,11),xt([4.8,4.8,-3],3.2,11)}function $_(){ue.color.setHex(8885949),ue.groundColor.setHex(1382433),Gt({wall:3883336,floor:2435378,ceiling:1119520,fog:1053725}),Et.fog.density=.019,Vt({index:0,name:"移动楼梯",objectiveText:"目标：依据钟摆与月相路线，依次稳定三座移动楼梯",hint:"路线铭文：从最低的平台起步；月光桥只在钟摆居中时停驻；最后登上最高塔。选错会让路线复位并增加 5 秒惩罚。",progress:"◇  ◇  ◇"}),hn.textContent="第一部 · 第二章 · 第 1 关",P={progress:[],mistakes:0,timePenalty:0,unlocked:!1},Iu();const i=z(5857643,{roughness:.96}),e=z(10390104,{emissive:3221009,emissiveIntensity:.4}),t=[{id:"lower",label:"低塔 · 起点",x:-5.1,z:1.9,height:.3,symbol:"I"},{id:"moon",label:"月光桥 · 居中",x:0,z:-2,height:1,symbol:"☾"},{id:"upper",label:"高塔 · 终点",x:5.1,z:1.9,height:1.7,symbol:"III"}];for(const[s,o]of t.entries()){const a=new qt;a.position.set(o.x,0,o.z),a.rotation.y=s===1?Math.PI:s===0?-.28:.28,Re.add(a);for(let c=0;c<7;c+=1)G("会移动的石阶",[2.6,.28,.78],[0,.14+c*.27,c*-.7],i,!0,a);G("楼梯平台",[3.2,.3,2.2],[0,2+o.height,-4.6],i,!0,a);const l=G(o.label,[1.25,1.25,.26],[o.x,1.25,o.z+1],e);l.userData={type:"stair-route",stairId:o.id,label:o.label,selected:!1},Ve.push(l),ze(o.symbol,[o.x,1.25,o.z+.84],{width:.8,size:72,color:"#d9c27b"}),yt.push({object:a,baseY:0,phase:s*2.1,spin:0,bob:.16})}for(const s of[-7.1,-3.55,0,3.55,7.1])G("楼梯塔石柱",[.7,6.7,.7],[s,3.35,-7.7],i);for(const[s,o]of[[-6.5,4.8],[-3.2,3.9],[3.1,4.7],[6.4,3.7]])G("会说话的画像",[1.5,2,.18],[s,o,-8.25],z(6965285)),G("画像画布",[1.15,1.62,.1],[s,o,-8.12],z(3752027,{emissive:1515837,emissiveIntensity:.5}));const n=new qt;n.position.set(0,6.1,-6.8),Re.add(n),G("钟摆杆",[.12,3.4,.12],[0,-1.7,0],e,!0,n);const r=new oe(new it(.42,16,12),e);r.position.y=-3.4,n.add(r),yt.push({object:n,baseY:6.1,phase:1.2,spin:.12,bob:0}),ze("GRAND STAIRCASE · 月相路线",[0,6.2,-8.35],{width:6.3,size:40}),xt([-5.8,4.8,-2.5],2.5,10),xt([5.8,4.8,-2.5],2.5,10),xt([0,5.5,3.8],2.2,9)}function K_(){ue.color.setHex(10192813),ue.groundColor.setHex(1774880),Gt({wall:4207940,floor:2366760,ceiling:1314840,fog:1183254}),Et.fog.density=.018,Vt({index:1,name:"会说话的画像",objectiveText:"目标：比较三幅画像的证词，按可信的发言顺序询问口令",hint:"学者说骑士不是第一位；骑士承认学者必须先发言；女士说自己在骑士之后。错误询问会惊动走廊并清空推理。",progress:"▢  ▢  ▢"}),hn.textContent="第一部 · 第二章 · 第 2 关",P={progress:[],mistakes:0,suspicion:0,unlocked:!1},Du();const i=z(5326680,{roughness:.98}),e=z(9399605,{metalness:.35,roughness:.55});for(const n of[-6,-3,0,3,6])G("画像走廊立柱",[.65,6.5,.65],[n,3.25,-8.45],i);const t=[{id:"scholar",label:"蓝袍学者",quote:"“骑士绝不是第一位；我的月桂框知道开头。”",x:-4.7,color:3166069},{id:"knight",label:"银甲骑士",quote:"“学者必须先发言，女士保管最后一词。”",x:0,color:6975352},{id:"lady",label:"月桂女士",quote:"“我在骑士之后，银钥只为完整证词转动。”",x:4.7,color:7356511}];for(const n of t){G(`${n.label}画框`,[3.15,4.25,.26],[n.x,3.8,-8.42],e);const r=G(n.label,[2.65,3.72,.24],[n.x,3.8,-8.2],z(n.color,{emissive:n.color,emissiveIntensity:.28}));r.userData={type:"portrait-testimony",portraitId:n.id,label:n.label,quote:n.quote,selected:!1},Ve.push(r),ze(n.label,[n.x,6.35,-8.05],{width:2.5,size:42})}G("走廊尽头银钥门",[3.1,5.5,.3],[0,2.75,8.55],z(2433835,{metalness:.5,roughness:.5})),ze("SILVER KEY CORRIDOR",[0,5.9,8.35],{width:5.4,size:38});for(const n of[-6.5,-2.2,2.2,6.5])xt([n,4.6,-2.2],2.2,9)}function Z_(){ue.color.setHex(7505569),ue.groundColor.setHex(1119514),Gt({wall:3423299,floor:2106923,ceiling:1053978,fog:725013}),Et.fog.density=.024,Vt({index:2,name:"管理员的巡夜",objectiveText:"目标：利用盔甲遮挡、猫铃声与暗门，避开管理员的灯光巡查",hint:"巡夜图记：灯光先扫过空盔甲；猫铃能把脚步引向反方向；最后掀开独角兽挂毯。走错会清空路线并提高警戒。",progress:"◇  ◇  ◇"}),hn.textContent="第一部 · 第二章 · 第 3 关",P={progress:[],mistakes:0,alert:0,unlocked:!1},Lu();const i=z(4739674,{roughness:.98}),e=z(9139269,{metalness:.48,roughness:.54});for(const u of[-6.8,-3.4,0,3.4,6.8])G("巡夜拱廊立柱",[.64,6.6,.64],[u,3.3,-8.4],i);for(const u of[-5.8,-2.1,1.6,5.3])G("月光地砖",[14.8,.03,1],[0,.03,u],z(6321546,{emissive:2505037,emissiveIntensity:.32}),!1);const t=new qt;t.position.set(-5,0,.7),Re.add(t),G("空盔甲底座",[1.55,.3,1.25],[0,.15,0],i,!0,t),G("空盔甲胸甲",[1.05,1.55,.55],[0,1.35,0],e,!0,t);const n=new oe(new it(.48,12,10),e);n.position.y=2.45,t.add(n);const r=G("空盔甲阴影",[1.8,3.2,.24],[-5,1.6,1.15],z(2436405,{emissive:1515821,emissiveIntensity:.25}));r.userData={type:"patrol-cover",hidingPlaceId:"armor",label:"空盔甲阴影",selected:!1},Ve.push(r),ze("I · 盔甲遮挡",[-5,3.55,1.05],{width:2.4,size:38}),G("猫铃机关台",[1.5,.8,1.5],[0,.4,-1.4],i);const s=new oe(new it(.48,14,10),z(10122304,{emissive:4796690,emissiveIntensity:.45}));s.position.set(0,1.05,-1.4),s.name="猫铃机关",s.userData={type:"patrol-cover",hidingPlaceId:"cat",label:"猫铃机关",selected:!1},Re.add(s),Ve.push(s),ze("II · 猫铃诱饵",[0,2.2,-1.4],{width:2.5,size:38});const o=G("独角兽暗门挂毯",[3.5,4.7,.22],[5,2.8,-8.15],z(3231074,{emissive:1518908,emissiveIntensity:.35}));o.userData={type:"patrol-cover",hidingPlaceId:"tapestry",label:"独角兽暗门挂毯",selected:!1},Ve.push(o),ze("III · 独角兽挂毯",[5,5.75,-8],{width:3.2,size:38});const a=new qt;a.position.set(-6.5,2.2,-5.7),Re.add(a);const l=new gi(16766602,3.2,7,2);a.add(l);const c=new oe(new it(.16,10,8),new Qn({color:16763243}));a.add(c),yt.push({object:a,baseY:2.2,phase:.5,spin:.22,bob:.08}),ze("NIGHT PATROL · 保持安静",[0,6.25,-8.35],{width:6,size:39}),xt([-6.8,4.5,5.4],1.5,7),xt([6.8,4.5,5.4],1.5,7)}function J_(){ue.color.setHex(6649183),ue.groundColor.setHex(1183501),Gt({wall:3487791,floor:2170136,ceiling:1184014,fog:921612}),Et.fog.density=.022,Vt({index:3,name:"三头犬活板门",objectiveText:"目标：按守门生物能接受的层次，奏出完整安眠旋律",hint:"褪色乐谱写着：先让气息像夜风进入梦乡，再让琴弦托住梦境，最后以发条的轻响封住鼾声。错奏会重置旋律并惊醒守卫。",progress:"·  ·  ·"}),hn.textContent="第一部 · 第二章 · 第 4 关",P={progress:[],mistakes:0,wakefulness:0,unlocked:!1},Uu();const i=z(4934206,{roughness:.98}),e=z(3220765,{roughness:1}),t=z(1840401,{roughness:1});for(const o of[-6.4,-3.2,0,3.2,6.4])G("禁区石柱",[.68,6.6,.68],[o,3.3,-8.35],i);const n=new qt;n.position.set(0,0,-5.6),Re.add(n);const r=new oe(new it(1.75,16,12),e);r.scale.set(1.65,1.05,.9),r.position.y=2.1,r.castShadow=!0,n.add(r),[-1.35,0,1.35].forEach((o,a)=>{const l=new oe(new it(.82,14,12),e);l.position.set(o,3.55+(a===1?.25:0),.12),n.add(l);const c=new oe(new it(.43,12,9),t);c.scale.set(1,.7,.75),c.position.set(o,l.position.y-.18,.72),n.add(c);for(const u of[-.25,.25]){const h=new oe(new it(.07,8,8),new Qn({color:14066493}));h.position.set(o+u,l.position.y+.14,.72),n.add(h)}for(const u of[-.48,.48]){const h=new oe(new en(.25,.65,8),e);h.position.set(o+u,l.position.y+.65,.08),n.add(h)}}),yt.push({object:n,baseY:0,phase:.8,spin:.012,bob:.045}),G("活板门边框",[4.8,.18,4.8],[0,.08,-4.9],i,!1),G("活板门",[4.25,.2,4.25],[0,.2,-4.9],z(2299663,{metalness:.12}));const s=[{id:"flute",label:"银木长笛",clue:"I · 夜风之息",x:-4.6,color:11449774},{id:"harp",label:"月弦竖琴",clue:"II · 托梦之弦",x:0,color:10187060},{id:"music-box",label:"星纹音乐盒",clue:"III · 发条封音",x:4.6,color:5859960}];for(const o of s){G(`${o.label}谱架`,[2.25,1,1.7],[o.x,.5,2.3],i);const a=G(o.label,[1.75,.4,1.15],[o.x,1.2,2.3],z(o.color,{emissive:o.color,emissiveIntensity:.28,metalness:.25}));a.userData={type:"lullaby-instrument",instrumentId:o.id,label:o.label,selected:!1},Ve.push(a),ze(o.clue,[o.x,2.15,2.3],{width:2.7,size:36})}ze("FORBIDDEN CORRIDOR · 安眠乐谱",[0,6.2,-8.2],{width:6.3,size:38}),xt([-6.2,4.6,1.2],1.8,8),xt([6.2,4.6,1.2],1.8,8)}function Q_(){ue.color.setHex(10471392),ue.groundColor.setHex(2374701),Gt({wall:5401432,floor:2506540,ceiling:7902886,fog:9417669}),Et.fog.density=.012,Vt({index:0,name:"飞行课遗失物",objectiveText:"目标：借助风向旗判断重量，依次把三件遗失物送入对应的安全轨迹",hint:"风向板写着：最轻的红色织物先借低风归队；有月纹的笔记随后穿过中环；沉重黄铜罗盘最后沿高风落到新生手中。错序会卷起乱流并吹散全部物品。",progress:"○  ○  ○"}),hn.textContent="第一部 · 第三章 · 第 1 关",P={progress:[],mistakes:0,turbulence:0,unlocked:!1},Nu();const i=z(3495995,{roughness:1}),e=z(6714219,{roughness:.96}),t=z(10189117,{metalness:.42,roughness:.52});G("飞行训练草坪",[17.6,.18,17.6],[0,.02,0],i,!1);for(const s of[-7.2,-3.6,0,3.6,7.2])G("训练场石柱",[.45,4.8,.45],[s,2.4,-8.35],e);const n=[{id:"scarf-keeper",label:"红色守门员围巾",clue:"I · 低风 · 守门员",x:-4.8,y:1.15,color:10432312},{id:"notebook-scholar",label:"月纹飞行笔记",clue:"II · 中环 · 学者",x:0,y:2.05,color:5072519},{id:"compass-first-year",label:"黄铜航向罗盘",clue:"III · 高风 · 新生",x:4.8,y:2.95,color:10977598}];for(const[s,o]of n.entries()){const a=new oe(new xn(1.15,.11,10,28),t);a.position.set(o.x,o.y+1.15,-4.6),a.name=`${o.label}安全轨迹环`,Re.add(a);const l=G(o.label,[1.65,.48,.82],[o.x,o.y,1.8],z(o.color,{emissive:o.color,emissiveIntensity:.35}));l.userData={type:"flying-delivery",deliveryId:o.id,label:o.label,selected:!1},Ve.push(l),yt.push({object:l,baseY:o.y,phase:s*1.7,spin:.18,bob:.14}),ze(o.clue,[o.x,5.45,-8.1],{width:3,size:34,color:"#e5d79a"})}const r=new qt;r.position.set(-6.8,0,5.4),Re.add(r),G("风向旗杆",[.12,5.4,.12],[0,2.7,0],t,!0,r),G("红金风向旗",[2.3,.65,.08],[1.1,4.8,0],z(10958141,{emissive:3477524,emissiveIntensity:.3}),!0,r),yt.push({object:r,baseY:0,phase:.4,spin:.08,bob:0}),ze("FLYING LESSON · 顺风投递",[0,6.2,-8.2],{width:6,size:39}),xt([-5.5,4.2,4.6],1.2,8),xt([5.5,4.2,4.6],1.2,8)}function ev(){ue.color.setHex(9217704),ue.groundColor.setHex(1517610),Gt({wall:4350052,floor:2373948,ceiling:2308154,fog:1651254}),Et.fog.density=.02,Vt({index:1,name:"巨怪洗手间",objectiveText:"目标：依次稳定漏水、悬浮瓦砾，再放下横梁架出逃生路线",hint:"破裂水管正在冲散落脚点。先转动月纹阀止水，再让碎石升起清出通道，最后才能把高处横梁平稳放到沟渠上。错序会让巨怪逼近并震塌路线。",progress:"◇  ◇  ◇"}),hn.textContent="第一部 · 第三章 · 第 2 关",P={progress:[],mistakes:0,danger:0,unlocked:!1},Ou();const i=z(6718599,{roughness:.82}),e=z(3361872,{roughness:.95});G("洗手间湿地砖",[17.6,.18,17.6],[0,.02,0],e,!1);for(const l of[-7.2,-4.8,-2.4,0,2.4,4.8,7.2])G("拱形瓷砖墙柱",[.42,6.4,.5],[l,3.2,-8.35],i);G("溢水沟渠",[15,.08,2.15],[0,.16,-2.6],z(1588555,{emissive:730674,emissiveIntensity:.8}),!1);const t=[{id:"seal-pipe",label:"月纹止水阀",clue:"I · 先止住洪水",x:-4.8,y:1.35,color:5602707},{id:"levitate-rubble",label:"悬浮碎石阵",clue:"II · 再清出通道",x:0,y:1.6,color:7695715},{id:"lower-beam",label:"锁链橡木横梁",clue:"III · 最后架桥",x:4.8,y:2.5,color:8476207}];for(const[l,c]of t.entries()){G(`${c.label}基座`,[2.5,.7,1.8],[c.x,.35,2.6],i);const u=G(c.label,[1.85,.55,1.15],[c.x,c.y,2.6],z(c.color,{emissive:c.color,emissiveIntensity:.32}));u.userData={type:"troll-obstacle",obstacleId:c.id,label:c.label,selected:!1},Ve.push(u),yt.push({object:u,baseY:c.y,phase:l*1.4,spin:.08,bob:.06}),ze(c.clue,[c.x,4.55,-8.05],{width:2.9,size:35,color:"#b9d8d7"})}const n=new qt;n.position.set(0,0,-6.2),Re.add(n);const r=z(7174246,{roughness:1}),s=new oe(new it(1.35,14,11),r);s.scale.set(1.25,1.55,.9),s.position.y=2.15,n.add(s);const o=new oe(new it(.78,12,10),r);o.position.set(0,4.05,.15),n.add(o);const a=G("巨怪木棒",[.48,4.4,.48],[1.5,2.15,0],z(5190689),!0,n);a.rotation.z=-.3,yt.push({object:n,baseY:0,phase:.7,spin:.015,bob:.055}),ze("TROLL WASHROOM · 悬浮逃生",[0,6.2,-8.15],{width:6.2,size:38,color:"#b9d8d7"}),xt([-6.2,4.8,4.5],1.35,8),xt([6.2,4.8,4.5],1.35,8)}function tv(){ue.color.setHex(6714779),ue.groundColor.setHex(1381149),Gt({wall:3354427,floor:2104100,ceiling:1315098,fog:855060}),Et.fog.density=.024,Vt({index:2,name:"图书馆禁书区",objectiveText:"目标：依据馆藏年代，按从古到今的顺序点亮三本安全书脊",hint:"目录铜牌记载：四学院建校录最古老；龙灾账册写于其后数百年；月蚀纪事刚完成修订。避开锁链缠绕、会尖叫的无年卷。",progress:"▱  ▱  ▱"}),hn.textContent="第一部 · 第三章 · 第 3 关",P={progress:[],mistakes:0,noise:0,unlocked:!1},Fu();const i=z(3023132,{roughness:.92}),e=z(9401668,{metalness:.48,roughness:.5}),t=z(4538699,{roughness:.98});for(const r of[-7.2,-3.6,0,3.6,7.2])G("禁书区拱柱",[.52,6.6,.65],[r,3.3,-8.38],t);for(const r of[-5.8,0,5.8]){G("高层书架",[4.1,5.7,.75],[r,3,-7.9],i);for(const s of[1.25,2.55,3.85,5.15])G("书架横板",[3.8,.13,1.05],[r,s,-7.55],e)}const n=[{id:"founders-index",label:"四学院建校录",clue:"I · 建校之初",x:-5.1,color:8008760},{id:"dragon-ledger",label:"北境龙灾账册",clue:"II · 第七次龙灾",x:-1.7,color:8610107},{id:"moon-chronicle",label:"银月蚀纪事",clue:"III · 本年修订",x:1.7,color:4217722},{id:"screaming-codex",label:"锁链无年卷",clue:"禁 · 年代被抹除",x:5.1,color:4533331}];for(const[r,s]of n.entries()){G(`${s.label}阅览台`,[2.35,.85,1.7],[s.x,.42,2.3],t);const o=G(s.label,[1.45,1.85,.42],[s.x,1.75,2.3],z(s.color,{emissive:s.color,emissiveIntensity:.32}));o.userData={type:"restricted-book",bookId:s.id,label:s.label,selected:!1},Ve.push(o),yt.push({object:o,baseY:1.75,phase:r*1.35,spin:.04,bob:.07}),ze(s.clue,[s.x,3.25,2.3],{width:2.45,size:34,color:"#b9c8ef"})}G("禁书区出口封印",[3.2,5.5,.3],[0,2.75,8.55],z(2499125,{emissive:2370133,emissiveIntensity:.55})),ze("RESTRICTED SECTION · 历史书脊",[0,6.2,-8.15],{width:6.4,size:38,color:"#b9c8ef"}),xt([-6.4,4.7,4.8],1.35,8),xt([6.4,4.7,4.8],1.35,8)}function nv(){ue.color.setHex(8885688),ue.groundColor.setHex(1578278),Gt({wall:3880268,floor:2170155,ceiling:1512223,fog:1118234}),Et.fog.density=.018,Vt({index:3,name:"厄里斯魔镜",objectiveText:"目标：比较镜中欲望与现实处境，依次选择真正需要的三件物品",hint:"镜中人戴着王冠、捧着奖杯，却在现实的寒风中发抖。先御寒，再为黑暗出口照路；最后记住：能共同离开的人，比独占的荣誉更重要。",progress:"◇  ◇  ◇"}),hn.textContent="第一部 · 第三章 · 第 4 关",P={progress:[],mistakes:0,illusion:0,unlocked:!1},ku();const i=z(11187398,{metalness:.72,roughness:.24}),e=z(2433335,{roughness:.9});for(const n of[-7.2,-4.8,4.8,7.2])G("镜廊石柱",[.52,6.5,.52],[n,3.25,-8.35],e);G("魔镜银框",[5.7,6.25,.42],[0,3.2,-8.42],i),G("魔镜镜面",[4.75,5.35,.18],[0,3.15,-8.12],z(7373478,{emissive:3754096,emissiveIntensity:.9,metalness:.82,roughness:.16}),!1),ze("镜中所见 ≠ 现实所需",[0,6.35,-8.02],{width:5.5,size:38,color:"#d9ddf2"});const t=[{id:"wool-cloak",label:"旧羊毛斗篷",clue:"I · 现实：寒风",x:-6.1,color:7558730},{id:"brass-lantern",label:"黄铜提灯",clue:"II · 现实：暗路",x:-3.05,color:10779189},{id:"shared-token",label:"同伴木牌",clue:"III · 现实：同行",x:0,color:5207647},{id:"jeweled-crown",label:"镜中宝冠",clue:"欲望 · 独占荣耀",x:3.05,color:9254493},{id:"victory-cup",label:"镜中金杯",clue:"欲望 · 空洞胜利",x:6.1,color:9333553}];for(const[n,r]of t.entries()){G(`${r.label}石台`,[2.45,.8,1.7],[r.x,.4,2.5],e);const s=G(r.label,[1.45,1.05,.8],[r.x,1.45,2.5],z(r.color,{emissive:r.color,emissiveIntensity:.34,metalness:r.id.includes("crown")||r.id.includes("cup")?.45:.08}));s.userData={type:"mirror-choice",itemId:r.id,label:r.label,selected:!1},Ve.push(s),yt.push({object:s,baseY:1.45,phase:n*1.1,spin:.06,bob:.06}),ze(r.clue,[r.x,3,2.5],{width:2.45,size:31,color:"#d9ddf2"})}xt([-6.4,4.8,4.7],1.25,8),xt([6.4,4.8,4.7],1.25,8)}function iv(i,e){const t=i.points.map(l=>new I(...l)),n=new fu(t),r=z(i.layer==="exit"?3234356:2573613,{emissive:1390879,emissiveIntensity:i.layer==="exit"?.58:.36,roughness:.94}),s=new oe(new Qa(n,28,i.radius,9,!1),r);s.name=i.id,s.castShadow=!0,s.receiveShadow=!0,Re.add(s);const o=z(5078341,{emissive:1919014,emissiveIntensity:.4,roughness:.9});for(let l=0;l<i.leaves;l+=1){const c=(l+1)/(i.leaves+1),u=new oe(new it(.18,10,7),o);u.name=`${i.id}-leaf`,u.scale.set(1.65,.32,.72),u.position.copy(n.getPoint(c)),u.rotation.set(e*.31,l*1.7,e%2?.55:-.55),u.castShadow=!0,Re.add(u)}const a=z(7304513,{roughness:.82});for(let l=0;l<i.thorns;l+=1){const c=(l+1)/(i.thorns+1),u=new oe(new en(.07,.34,7),a);u.name=`${i.id}-thorn`,u.position.copy(n.getPoint(c)).add(new I(.1,.05,0)),u.rotation.z=e%2?1.05:-1.05,Re.add(u)}yt.push({object:s,baseY:0,phase:e*.43,spin:0,bob:.012})}function rv(i){const e=new oe(new it(.34,18,14),z(i.color,{emissive:i.color,emissiveIntensity:.5,transparent:!0,opacity:.92}));e.name=i.label;const t=new mu({color:i.model.flameColor??i.model.breathColor,emissive:i.model.flameColor??i.model.breathColor,emissiveIntensity:1.45,roughness:.28,transparent:!0,opacity:.9});if(i.model.kind==="breath-orb")for(let n=0;n<i.model.rings;n+=1){const r=new oe(new xn(.48+n*.16,.025,8,28),t);r.rotation.set(Math.PI/2,n*.45,n*.32),e.add(r)}else if(i.model.kind==="bluebell-flame"){for(let r=0;r<i.model.petals;r+=1){const s=r/i.model.petals*Math.PI*2,o=new oe(new it(.22,12,8),t);o.scale.set(.55,1.45,.42),o.position.set(Math.cos(s)*.34,-.12,Math.sin(s)*.34),o.rotation.z=Math.cos(s)*.5,e.add(o)}const n=new oe(new en(.25,.82,14),t);n.position.y=.56,e.add(n)}else if(i.model.kind==="steady-lantern"){const n=z(5468288,{metalness:.65,roughness:.35});for(const r of[-.42,.42])for(const s of[-.3,.3])G("恒光灯框",[.07,1.15,.07],[r,0,s],n,!0,e);for(let r=0;r<i.model.pulses;r+=1){const s=new oe(new xn(.28+r*.12,.035,8,24),t);s.rotation.x=Math.PI/2,s.position.y=-.2+r*.3,e.add(s)}}else for(let n=0;n<i.model.flameCount;n+=1){const r=n/i.model.flameCount*Math.PI*2,s=new oe(new en(.16,.82+n%2*.3,9),t);s.position.set(Math.cos(r)*.48,.25+n%2*.18,Math.sin(r)*.48),s.rotation.z=Math.cos(r)*.75,s.rotation.x=Math.sin(r)*.75,e.add(s)}return e}function sv(){ue.color.setHex(7179368),ue.groundColor.setHex(1317653),Gt({wall:2701100,floor:1516313,ceiling:1120273,fog:857615}),Et.fog.density=.024,Vt({index:0,name:"魔鬼网",objectiveText:"目标：保持镇静，按正确节奏控制蓝铃火焰，让藤蔓松开地下出口",hint:"挣扎会让藤蔓收紧。先放松摆脱缠绕，再点燃冷焰，最后维持稳定光照；猛烈爆燃只会惊动整片根网。",progress:"○  ○  ○"}),P={progress:[],mistakes:0,constriction:0,unlocked:!1},zu(),G("根网出口",[5,.24,4.5],[0,.06,-2.1],z(461832,{emissive:1524519,emissiveIntensity:.7,roughness:1}),!1);const i=z(5398605,{roughness:.98});for(let t=0;t<18;t+=1){const n=t/18*Math.PI*2,r=G("破裂出口石环",[.62,.32,.76],[Math.cos(n)*2.55,.16,-2.1+Math.sin(n)*2.3],i);r.rotation.y=-n,r.rotation.z=(t%3-1)*.12}T_.forEach(iv);for(const[t,n]of w_.entries()){const r=new oe(new ft(1.05,1.22,.62,10),z(2502951,{roughness:.96}));r.name=`${n.label}石台`,r.position.set(n.x,.31,3.6),r.castShadow=!0,r.receiveShadow=!0,Re.add(r);const s=rv(n);s.position.set(n.x,1.5,3.6),s.userData={type:"devils-snare-action",actionId:n.id,label:n.label,selected:!1},Re.add(s),Ve.push(s),yt.push({object:s,baseY:1.5,phase:t*1.2,spin:.07,bob:.06}),ze(n.clue,[n.x,2.85,3.6],{width:1.9,size:27,color:"#b9e2c0"})}ze(Au.wallClue,[0,6.05,-8.1],{width:7.2,size:34,color:"#b9e2c0"});const e=new gi(7321343,3.2,12,2);e.position.set(0,4.5,1.2),e.castShadow=!0,Re.add(e)}function ov(i){const{model:e}=i,t=z(i.color,{emissive:i.color,emissiveIntensity:.48,metalness:.82,roughness:e.metal==="gold"?.2:.3}),n=new ft(.105,.105,e.shaftLength,14);n.rotateZ(Math.PI/2);const r=new oe(n,t);r.name=i.label,r.castShadow=!0;const s=new oe(new xn(e.bowRadius,.105,10,28),t);s.name=`${i.label}钥匙环`,s.position.x=-(e.shaftLength/2+e.bowRadius*.72),s.rotation.z=-Math.PI/2,r.add(s);const o=t.clone();for(let l=0;l<e.teeth;l+=1){const c=new oe(new Kt(.16,.22+l*.035,.12),o);c.name=`${i.label}锁齿`,c.position.set(e.shaftLength/2-l*.16,-.14-l*.025,0),r.add(c)}const a=z(11454952,{emissive:4349826,emissiveIntensity:.42,transparent:!0,opacity:.86,roughness:.5,side:En});for(const l of e.wings){const c=l.side==="left"?-1:1,u=new qt;u.name=`${i.label}${l.side==="left"?"左翼":"右翼"}`,u.position.set(c*.22,.04,0),u.rotation.z=l.bend;for(let h=0;h<l.feathers;h+=1){const f=new oe(new it(.24,12,8),a);f.name=`${u.name}羽片`,f.scale.set(1.5-h*.12,.34,.18),f.position.set(c*(.22+h*.16),.3+h*.12,0),f.rotation.z=c*(.42+h*.09),u.add(f)}r.add(u)}if(e.metal==="gold")for(let l=0;l<6;l+=1){const c=new oe(new it(.055,10,8),z(14241123,{emissive:61e5,emissiveIntensity:.7,metalness:.35,roughness:.25})),u=l/6*Math.PI*2;c.position.set(s.position.x+Math.cos(u)*e.bowRadius,Math.sin(u)*e.bowRadius,.08),r.add(c)}return r}function av(i){const e=z(7907552,{emissive:3234706,emissiveIntensity:1.1});for(let t=0;t<i.evidence.orbitMarkers;t+=1){const n=-t*.72,r=new oe(new it(.075+t*.008,10,8),e);r.name="顺时针下沉轨迹标记",r.position.set(i.x+Math.cos(n)*(.85-t*.04),2.28-t*.12,i.display.z+Math.sin(n)*.48),Re.add(r)}}function lv(){ue.color.setHex(8558262),ue.groundColor.setHex(1514283),Gt({wall:3556189,floor:2107450,ceiling:1251367,fog:1120038}),Et.fog.density=.021,Vt({index:1,name:"飞钥匙房",objectiveText:"目标：依次确认翅膀损伤、飞行轨迹和锁孔材质，锁定唯一真钥匙",hint:"门锁留下银屑；真正用过的钥匙左翼弯折，负重后会沿顺时针轨迹下沉。先观察损伤，再追踪轨迹，最后核对银色钥匙。",progress:"◇  ◇  ◇"}),hn.textContent=Ee("hud.roomKicker",{book:1,chapter:4,room:2}),P={progress:[],mistakes:0,pursuit:0,unlocked:!1},Bu();const i=z(6582925,{metalness:.32,roughness:.66});for(const n of[-7.2,-4.8,4.8,7.2])G("钥匙厅高柱",[.55,6.4,.55],[n,3.2,-8.3],i);G("银屑锁门",[4.1,5.4,.3],[0,2.7,-8.45],z(3160138,{metalness:.62,roughness:.35}));const e=z(14280946,{emissive:6256784,emissiveIntensity:.9,metalness:.9,roughness:.22});for(let n=0;n<12;n+=1){const r=new oe(new Hr(.035+n%3*.012),e);r.name="锁孔银屑",r.position.set(-.22+n%4*.13,2.2+Math.floor(n/4)*.11,-8.22),r.rotation.set(n*.3,n*.5,0),Re.add(r)}ze(wu.wallClue,[0,6.15,-8.05],{width:7.4,size:32,color:"#c9dcff"});for(const[n,r]of E_.entries()){G(`${r.label}观察台`,[2.55,.65,1.55],[r.x,.33,r.display.z],z(2699847));const s=ov(r);s.position.set(r.x,1.75,r.display.z),s.rotation.x=-.16,Re.add(s),r.evidence.motion==="clockwise-descending"&&av(r),s.userData={type:"flying-key-clue",clueId:r.id,label:r.label,selected:!1},Ve.push(s),yt.push({object:s,baseY:1.75,phase:n*1.35,spin:.1,bob:.18}),ze(r.clue,[r.x,3.05,r.display.z],{width:2.45,size:28,color:"#c9dcff"})}const t=new gi(9091327,3.1,13,2);t.position.set(0,5.7,1.2),Re.add(t)}function Vo(i,e){const t=new oe(new ft(.56,.66,.24,16),e);t.position.y=.12,t.castShadow=!0,t.receiveShadow=!0;const n=(r,s,o=[0,0,0])=>{const a=new oe(r,e);return a.position.set(...s),a.rotation.set(...o),a.castShadow=!0,a.receiveShadow=!0,t.add(a),a};if(n(new ft(.45,.53,.18,16),[0,.23,0]),i.piece==="pawn")n(new ft(.25,.42,.72,14),[0,.65,0]),n(new xn(.29,.07,8,16),[0,1.02,0],[Math.PI/2,0,0]),n(new it(i.headRadius??.24,16,10),[0,1.25,0]);else if(i.piece==="rook"){n(new ft(.37,.46,.88,12),[0,.72,0]),n(new ft(.52,.39,.28,12),[0,1.28,0]);const r=i.battlements??6;for(let s=0;s<r;s+=1){const o=s/r*Math.PI*2;n(new Kt(.2,.3,.22),[Math.sin(o)*.38,1.55,Math.cos(o)*.38],[0,o,0])}}else if(i.piece==="knight"){n(new ft(.28,.45,.62,12),[0,.58,0]),n(new Di(.29,.65,5,10),[-.08,1.08,0],[0,0,-.38]),n(new Kt(.62,.38,.46),[.25,1.43,0],[0,0,-.12]),n(new Kt(.42,.2,.38),[.65,1.32,0],[0,0,-.08]);for(const s of[-.14,.14])n(new en(.11,.34,8),[.08,1.78,s],[0,0,-.18]);const r=i.maneRidges??4;for(let s=0;s<r;s+=1)n(new en(.1,.32,6),[-.35+s*.08,1.5-s*.18,0],[0,0,-1.15])}else if(n(new ft(.27,.45,.86,14),[0,.7,0]),n(new xn(.32,.07,8,18),[0,1.13,0],[Math.PI/2,0,0]),i.piece==="bishop")n(new it(.27,14,10),[0,1.4,0]),n(new en(.19,.48,12),[0,1.74,0]);else if(i.piece==="queen"){n(new it(.24,14,10),[0,1.38,0]);const r=i.crownSpikes??6;for(let s=0;s<r;s+=1){const o=s/r*Math.PI*2;n(new en(.09,.38,7),[Math.sin(o)*.27,1.72,Math.cos(o)*.27])}n(new it(.11,10,8),[0,1.94,0])}else n(new it(.25,14,10),[0,1.39,0]),n(new Kt(.13,.58,.13),[0,1.84,0]),n(new Kt(.48,.13,.13),[0,1.9,0]);return t.scale.setScalar((i.height??1.75)/1.75),t}function cv(){ue.color.setHex(10132646),ue.groundColor.setHex(1513243),Gt({wall:4013379,floor:2105381,ceiling:1381658,fog:1052692}),Et.fog.density=.018,_n&&(Ft.position.z=Rt.mobileCameraZ),Vt({index:2,name:"巫师棋",objectiveText:"目标：用最少牺牲打开通往对岸的安全棋路",hint:"黑后封锁中央。先用边兵引开主教，再让骑士双攻国王与城堡，最后直车沿空出的纵线推进；贸然冲后会让已投入的棋子全部被吃。",progress:"◇  ◇  ◇"}),P={progress:[],mistakes:0,captured:0,unlocked:!1},Hu();const i=z(12170666,{roughness:.78}),e=z(2697777,{roughness:.86}),t=z(5592671,{roughness:.96});for(let r=0;r<8;r+=1)for(let s=0;s<8;s+=1)G("巫师棋盘格",[Rt.cellSize,.16,Rt.cellSize],[Rt.boardStartX+s*Rt.cellSize,.05,Rt.boardStartZ+r*Rt.cellSize],(r+s)%2?e:i,!1);const n=["rook","knight","bishop","queen","king","bishop","knight","rook"];for(const[r,s,o]of[[0,"黑方",e],[7,"白方",i]]){for(let l=0;l<8;l+=1){const c=Vo({piece:n[l],height:1.7},o);c.name=`${s}${n[l]}巨型棋子`,c.position.set(Rt.boardStartX+l*Rt.cellSize,.18,Rt.boardStartZ+r*Rt.cellSize),Re.add(c),yt.push({object:c,baseY:.18,phase:l*.55,spin:0,bob:.025})}const a=r===0?1:6;for(let l=0;l<8;l+=1){const c=Vo({piece:"pawn",height:1.48,headRadius:.22},o);c.name=`${s}巨型兵`,c.position.set(Rt.boardStartX+l*Rt.cellSize,.18,Rt.boardStartZ+a*Rt.cellSize),Re.add(c)}}for(const[r,s]of A_.entries()){const o=_n?s.mobileDisplay:{x:s.x,z:s.display.z,scale:1,plaqueWidth:2.05};G(`${s.label}棋钟台`,[o.plaqueWidth,.65,1.55],[o.x,.33,o.z],t);const a=Vo(s.model,z(s.color,{emissive:s.color,emissiveIntensity:.36,metalness:.12,roughness:.72}));a.name=s.label,a.scale.multiplyScalar(o.scale),a.position.set(o.x,.58,o.z),Re.add(a),a.userData={type:"wizard-chess-move",moveId:s.id,label:s.label,selected:!1},Ve.push(a),yt.push({object:a,baseY:.58,phase:r*1.25,spin:.025,bob:.055}),ze(s.clue,[o.x,.48,o.z+.82],{width:o.plaqueWidth-.05,size:_n?21:27,color:"#e1dfd5"})}ze(Cu.wallClue,[0,6.15,-8.15],{width:7.5,size:_n?Rt.mobileWallLabelSize:31,color:"#e1dfd5"}),xt([-6.2,4.8,5.5],1.5,8),xt([6.2,4.8,5.5],1.5,8)}function qu(i,e=1){const t=z(i.color,{emissive:i.color,emissiveIntensity:.48,metalness:.46,roughness:.28}),n=new oe(new ft(.4,.48,.16,16),t);n.castShadow=!0;const r=z(13223132,{transparent:!0,opacity:.52,metalness:.22,roughness:.12}),s=z(2364975,{emissive:5973880,emissiveIntensity:1.8,transparent:!0,opacity:.88}),o=new oe(new ft(.26,.38,.64,14),r);o.position.y=.48,n.add(o);const a=new oe(new ft(.22,.34,.36,14),s);a.position.y=.36,n.add(a);const l=new oe(new ft(.13,.18,.3,12),r);l.position.y=.92,n.add(l);const c=new oe(new ft(.16,.14,.18,10),z(11052466,{metalness:.78,roughness:.3}));return c.position.y=1.12,n.add(c),n.scale.setScalar(e),n}function uv(i){const e=z(i.color,{emissive:i.color,emissiveIntensity:.4,roughness:.56}),t=new oe(new ft(.54,.64,.2,16),e);t.castShadow=!0;const n=z(11904399,{roughness:.72}),r=z(7440040,{emissive:2570581,emissiveIntensity:.75,metalness:.46,roughness:.18}),s=z(13214043,{emissive:16761948,emissiveIntensity:1.65,metalness:.34,roughness:.24}),o=(a,l,c=n,u=[0,0,0])=>{const h=new oe(a,c);return h.position.set(...l),h.rotation.set(...u),h.castShadow=!0,t.add(h),h};if(i.model.kind==="mirror-figure"){o(new Kt(1.28,1.8,.12),[0,1.15,-.18],r),o(new it(.25,14,10),[0,1.72,.02]),o(new en(.54,1.16,12),[0,.85,.02]);const a=o(new Kt(.5,.38,.08),[.24,.86,.5],z(13811855,{emissive:6115631,emissiveIntensity:.65}));a.rotation.z=-.08,o(new Kt(.32,.18,.08),[.24,.9,.56],z(1512476))}else if(i.model.kind==="protective-hands"){for(const a of[-1,1]){o(new Di(.2,.62,5,10),[a*.56,.82,0],n,[0,0,a*.62]);for(let l=0;l<4;l+=1)o(new Di(.065,.38+l*.025,4,8),[a*(.28+l*.1),1.34+l*.04,0],n,[0,0,a*(.2+l*.07)])}o(new Hr(.34,1),[0,1.2,-.48],s),o(new xn(.7,.055,8,28),[0,1.15,-.3],z(14204787,{emissive:10254633,emissiveIntensity:1.2}),[Math.PI/2,0,0])}else{o(new Di(.24,.72,6,12),[0,.78,0],n,[0,0,-.28]);for(let a=0;a<5;a+=1){const l=-.9+a*.45;o(new Di(.075,.46,4,8),[Math.sin(l)*.35,1.25+Math.cos(l)*.18,0],n,[0,0,l])}o(new Hr(.31,1),[.1,1.18,.02],z(10824506,{emissive:16719927,emissiveIntensity:2}));for(let a=0;a<5;a+=1)o(new Kt(.035,.62,.04),[-.35+a*.17,.64+a*.12,.27],z(15019589,{emissive:16717359,emissiveIntensity:2.2}),[0,0,-.5+a*.22])}return t}function hv(i){return i.model.kind==="potion-bottle"?qu(i,1.38):uv(i)}function dv(){ue.color.setHex(10258354),ue.groundColor.setHex(1380635),Gt({wall:3879237,floor:2169640,ceiling:1380379,fog:854290}),Et.fog.density=.019,Vt({index:3,name:"魔法石密室",objectiveText:"目标：穿过黑焰，解读镜像，并证明你只想保护魔法石",hint:"七瓶药剂中，最小的瓶子可穿过黑焰。镜中真正的守护者口袋仍空着；想夺取魔法石的手只会触发密室腐化。",progress:"◇  ◇  ◇"}),hn.textContent=Ee("hud.roomKicker",{book:1,chapter:4,room:4}),P={progress:[],mistakes:0,corruption:0,unlocked:!1},Vu();const i=z(2827314,{roughness:.9}),e=z(11110734,{metalness:.62,roughness:.36});_n&&(Ft.position.z=gn.mobileCameraZ),G("厄里斯镜面",[4.5,4.55,.18],[0,2.85,-8.1],z(6839426,{emissive:3747160,emissiveIntensity:.95,metalness:.76,roughness:.18}),!1);for(const o of[-2.55,2.55])G("厄里斯镜金柱",[.46,4.75,.42],[o,2.6,-8],e);const t=new oe(new xn(2.55,.24,12,36,Math.PI),e);t.rotation.z=Math.PI,t.position.set(0,4.95,-8),Re.add(t);for(const o of[-2.85,2.85])for(const a of[1.2,2.35,3.5]){const l=new oe(new Ja(.14,.045,32,6),e);l.position.set(o,a,-7.88),l.scale.set(1,1.5,.45),Re.add(l)}for(const o of[-7.2,-5,5,7.2])G("密室黑石柱",[.62,6.4,.62],[o,3.2,-8.25],i);const n=[1.18,.96,1.42,.58,1.06,1.3,.88];for(let o=0;o<gn.potionRow.count;o+=1){const a={color:o===gn.potionRow.smallestIndex?10127805:7627346},l=qu(a,n[o]);l.name=o===gn.potionRow.smallestIndex?"七瓶中最小的银瓶":"药剂逻辑候选瓶",l.position.set(-3.6+o*1.2,2.42,gn.potionRow.z),Re.add(l)}G("七瓶药剂长桌",[9.3,.42,1.35],[0,2.28,gn.potionRow.z],i);const r=z(591630,{emissive:2692155,emissiveIntensity:1.8,transparent:!0,opacity:.94});for(let o=0;o<gn.blackFlame.columns;o+=1){const a=new oe(new en(.48+o%2*.12,gn.blackFlame.height-o%3*.22,8),r);a.name="黑焰药剂屏障",a.position.set(-5.5+o*1.1,1.25,gn.blackFlame.z),a.rotation.z=o%2?.1:-.1,Re.add(a),yt.push({object:a,baseY:1.25,phase:o*.6,spin:.16,bob:.12})}for(const[o,a]of C_.entries()){const l=_n?a.mobileDisplay:a.display;G(`${a.label}石台`,[l.plaqueWidth??2.05,.65,1.45],[l.x,.33,l.z],i);const c=hv(a);c.name=a.label,c.position.set(l.x,.62,l.z),c.scale.multiplyScalar(l.scale??1),Re.add(c),c.userData={type:"stone-chamber-clue",clueId:a.id,label:a.label,selected:!1},Ve.push(c),yt.push({object:c,baseY:.62,phase:o*1.2,spin:.035,bob:.055}),ze(a.clue,[l.x,.58,l.z],{width:Math.min(l.plaqueWidth??2.05,1.9),size:_n?20:28,color:"#dfcef2"})}ze(Da.wallClue,[0,6.72,-8.05],{width:_n?gn.mobileWallLabelWidth:7.4,size:_n?gn.mobileWallLabelSize:30,color:"#dfcef2"}),ze(Da.mirrorInscription,[0,6.08,-8.02],{width:_n?2.8:4.6,size:_n?17:24,color:"#d9bd78"});const s=new gi(13016319,3,12,2);s.position.set(0,5.5,.5),Re.add(s)}function fv(){ue.color.setHex(8494477),ue.groundColor.setHex(1121048),Gt({wall:3426111,floor:1911076,ceiling:1581598,fog:725776}),Et.fog.density=.024,Vt({index:0,name:"精灵的封锁",objectiveText:"目标：循魔力残痕解除住宅中的三重封锁，赶往国王十字车站",hint:"绿色干扰从邮槽进入，绕过悬浮蛋糕，最后汇入壁炉封印。错碰尖叫灯会让封锁重新闭合。",progress:"◇  ◇  ◇"}),hn.textContent="第二部 · 第一章 · 第 1 关",P={progress:[],mistakes:0,interference:0,unlocked:!1},Gu();const i=z(2704955,{roughness:.86}),e=z(9861959,{metalness:.52,roughness:.42});G("住宅楼梯平台",[3.1,.35,4.8],[-6.8,.18,-3],i);for(let r=0;r<7;r+=1)G("封锁楼梯踏板",[2.5,.28,.72],[-6.8,.35+r*.3,-.8-r*.58],i);G("封死的住宅正门",[3.2,5.1,.28],[0,2.55,-8.45],i),G("黄铜门链",[3.6,.18,.18],[0,3,-8.18],e),G("壁炉背墙",[4.3,4.5,.5],[5.7,2.25,-7.9],z(2634542)),G("壁炉冷焰",[2.4,2.1,.35],[5.7,1.05,-7.55],z(2518871,{emissive:1530951,emissiveIntensity:1.15}));const t=[{id:"jammed-post",label:"堵塞的邮槽",clue:"I · 绿色粉尘入口",x:-5.8,color:7178091},{id:"levitating-cake",label:"悬浮蛋糕",clue:"II · 魔力绕行处",x:-1.9,color:9139797},{id:"sealed-floo",label:"封死的飞路炉",clue:"III · 干扰汇聚点",x:2,color:4162156},{id:"shrieking-lamp",label:"尖叫油灯",clue:"诱饵 · 报警回路",x:5.9,color:9519947}];for(const[r,s]of t.entries()){G(`${s.label}底座`,[2.65,.65,1.55],[s.x,.33,4.5],i);const o=G(s.label,[1.28,1.35,.78],[s.x,1.4,4.5],z(s.color,{emissive:s.color,emissiveIntensity:.38}));o.userData={type:"elf-blockade-trace",objectId:s.id,label:s.label,selected:!1},Ve.push(o),yt.push({object:o,baseY:1.4,phase:r*1.15,spin:.05,bob:.06}),ze(s.clue,[s.x,2.95,4.5],{width:2.75,size:30,color:"#b9ddc8"})}ze("HOUSE BLOCKADE · 追踪绿色魔力残痕",[0,6.1,-8.05],{width:6.8,size:35,color:"#b9ddc8"});const n=new gi(6476957,2.8,13,2);n.position.set(0,5.4,1.2),Re.add(n),xt([-6.4,4.8,5.8],1.4,7)}function pv(){ue.color.setHex(7440544),ue.groundColor.setHex(1120547),Gt({wall:2504260,floor:1515819,ceiling:1450545,fog:659737}),Et.fog.density=.021,Vt({index:1,name:"飞车失控",objectiveText:"目标：在撞上高架桥前依次稳定配重、航向与油门",hint:"后备箱先把车头拉高；红色铁路信号给出航向；发动机过热时只能脉冲给油。猛踩油门会让飞车再次翻滚。",progress:"◇  ◇  ◇"}),hn.textContent="第二部 · 第一章 · 第 2 关",P={progress:[],mistakes:0,turbulence:0,unlocked:!1},Wu();const i=z(4809844,{metalness:.62,roughness:.34}),e=z(3764618,{metalness:.5,roughness:.3,emissive:1060668,emissiveIntensity:.5}),t=z(8631494,{metalness:.35,roughness:.16,transparent:!0,opacity:.72});G("飞车车身",[6.4,1.2,3.2],[0,1.35,-1.8],e),G("飞车车顶",[3.7,1.25,2.75],[-.5,2.55,-1.8],e),G("飞车前窗",[.14,1,2.25],[1.38,2.55,-1.8],t,!1),G("方向盘",[.18,.9,.9],[1,2.05,-.9],i);for(const s of[-2.15,2.15])for(const o of[-3.15,-.45]){const a=new oe(new ft(.58,.58,.34,20),z(1118998));a.rotation.x=Math.PI/2,a.position.set(s,.75,o),Re.add(a)}for(let s=0;s<7;s+=1)G("悬空铁路枕木",[7.8,.16,.46],[0,.35,-7.7+s*2.4],z(5325617));G("左铁轨",[.16,.18,17],[-2.35,.55,0],i),G("右铁轨",[.16,.18,17],[2.35,.55,0],i),G("远方列车红灯",[.55,.55,.22],[0,3.6,-8.55],z(14108479,{emissive:16720925,emissiveIntensity:2.4}));const n=[{id:"balance-luggage",label:"后移行李配重",clue:"I · 抬高车头",x:-6,color:9138254},{id:"align-railway",label:"对准红色铁路灯",clue:"II · 修正航向",x:-2,color:5341075},{id:"pulse-throttle",label:"短促脉冲油门",clue:"III · 冷却加速",x:2,color:6720098},{id:"floor-throttle",label:"一脚踩死油门",clue:"诱饵 · 引擎过热",x:6,color:10305865}];for(const[s,o]of n.entries()){G(`${o.label}仪表台`,[2.7,.72,1.55],[o.x,.36,5],i);const a=G(o.label,[1.28,1.32,.72],[o.x,1.42,5],z(o.color,{emissive:o.color,emissiveIntensity:.4}));a.userData={type:"flying-car-control",controlId:o.id,label:o.label,selected:!1},Ve.push(a),yt.push({object:a,baseY:1.42,phase:s*1.1,spin:.045,bob:.065}),ze(o.clue,[o.x,2.95,5],{width:2.7,size:30,color:"#b9d9e8"})}ze("FLYING CAR · 在铁路上空恢复控制",[0,6.15,-8.05],{width:6.8,size:35,color:"#b9d9e8"});const r=new gi(9423359,3,14,2);r.position.set(0,5.6,1),Re.add(r)}function mv(){ue.color.setHex(8228772),ue.groundColor.setHex(1515544),Gt({wall:2570285,floor:1714976,ceiling:1582365,fog:726288}),Et.fog.density=.024,Vt({index:2,name:"打人柳下",objectiveText:"目标：读懂枝条的高扫、低返与露根间隙，安全抵达树洞",hint:"粗枝先从头顶横扫；回摆会贴近地面。只有第二次攻击收势后，发光树根之间才会短暂露出通道。",progress:"◇  ◇  ◇"}),hn.textContent="第二部 · 第一章 · 第 3 关",P={progress:[],mistakes:0,bruises:0,unlocked:!1},Xu();const i=z(5060648,{roughness:1}),e=z(6832941,{roughness:.9,emissive:2953992,emissiveIntensity:.35}),t=z(3691067,{roughness:1}),n=new oe(new ft(1.7,2.35,6.8,14),i);n.position.set(0,3.4,-5.2),n.castShadow=!0,Re.add(n);for(const[o,a]of[-1,-.45,.35,.95].entries()){const l=new oe(new ft(.24,.52,7.2,9),e);l.rotation.z=a,l.rotation.x=o%2?.5:-.4,l.position.set(Math.sin(a)*2.7,5.4,-4.8+o*.25),Re.add(l),yt.push({object:l,baseY:l.position.y,phase:o*1.4,spin:.025,bob:.12})}for(const o of[-3.8,-2,0,2,3.8]){const a=new oe(new ft(.18,.48,4.2,8),t);a.rotation.z=Math.PI/2,a.rotation.y=o*.12,a.position.set(o,.35,-4.2+Math.abs(o)*.25),Re.add(a)}G("树洞阴影",[1.7,2.4,.22],[0,1.25,-6.8],z(526856,{emissive:1585695,emissiveIntensity:.5}));const r=[{id:"wait-high-swing",label:"等待高枝扫过",clue:"I · 风声在头顶",x:-6,color:5797258},{id:"duck-low-return",label:"俯身避开低返",clue:"II · 落叶贴地",x:-2,color:7045461},{id:"dash-root-gap",label:"冲过露根间隙",clue:"III · 树洞显露",x:2,color:9598019},{id:"run-before-swing",label:"立刻直冲树洞",clue:"诱饵 · 粗枝蓄力",x:6,color:10109249}];for(const[o,a]of r.entries()){G(`${a.label}石台`,[2.65,.64,1.5],[a.x,.32,4.8],t);const l=G(a.label,[1.24,1.28,.7],[a.x,1.38,4.8],z(a.color,{emissive:a.color,emissiveIntensity:.4}));l.userData={type:"willow-rhythm",actionId:a.id,label:a.label,selected:!1},Ve.push(l),yt.push({object:l,baseY:1.38,phase:o*1.05,spin:.04,bob:.06}),ze(a.clue,[a.x,2.85,4.8],{width:2.7,size:30,color:"#c7d9bd"})}ze("WHOMPING WILLOW · 听风辨认三拍攻击",[0,6.2,-8.05],{width:7.2,size:34,color:"#c7d9bd"});const s=new gi(10143619,2.7,14,2);s.position.set(0,5.8,.8),Re.add(s)}function zt(i){V_(),Mt=i,Ft.position.set(0,1.7,6.7),Ft.quaternion.identity(),i===0?X_():i===1?q_():i===2?Y_():i===3?j_():i===4?$_():i===5?K_():i===6?Z_():i===7?J_():i===8?Q_():i===9?ev():i===10?tv():i===11?nv():i===12?sv():i===13?lv():i===14?cv():i===15?dv():i===16?fv():i===17?pv():i===18&&mv(),Yu()}function gv(){for(const i of Ve)i.userData.type==="owl-letter"&&!i.userData.decoy&&(i.visible=!0,i.userData.selected=!1)}function _v(i){if(i.userData.selected)return;const e=I_(P,i.userData.clueId),t=vt(ve,i.userData.destination);if(e.reset){P=e,gv(),Fc(),le(Ar(ve,"wrong",{destination:t}),3200);return}P=e,i.userData.selected=!0,i.visible=!1,Fc(),le(Ar(ve,"progress",{destination:t,count:P.progress.length})),P.unlocked&&(fi.userData.unlocked=!0,Xe.textContent=Ar(ve,"completeObjective"),je.textContent=Ar(ve,"completeHint"),le(Ar(ve,"completeMessage"),3800))}function vv(){for(const i of Ve)i.userData.type==="shopping-item"&&(i.visible=!0,i.userData.selected=!1)}function xv(i){if(i.userData.selected)return;const e=D_(P,i.userData.itemId);if(e.reset){P=e,vv(),kc(),le(`清单顺序错误：“${i.userData.label}”不该现在购买。采购篮被清空！`,3200);return}P=e,i.userData.selected=!0,i.visible=!1,kc(),le(`已购入：${i.userData.label}（${i.userData.price} 加隆）`),P.unlocked&&(fi.userData.unlocked=!0,Xe.textContent="采购完成：前往破釜酒吧出口",je.textContent="清单上的四枚墨点连成了一条通往下一段旅程的路线。",le("霍格沃茨采购清单完成——出口已经开启！",3600))}function yv(i){if(!P.progress.includes("wood")){if(P=L_(P,i.userData.woodId),sl(),!P.accepted){ue.color.setHex(11745838),i.rotation.y+=Math.PI/5,le(`“${i.userData.label}”迸出危险火花！失控反馈 +1，重新观察常青叶线索。`,3200),setTimeout(()=>{Mt===2&&ue.color.setHex(12032624)},480);return}i.userData.selected=!0,Xe.textContent="木材匹配成功：冬青木发出温暖金光，准备进行杖芯匹配",je.textContent="第一阶段完成。冬青木认可了那道闪电形旧伤；下一步要解读杖芯反馈。",i.material.emissive.setHex(14858319),i.material.emissiveIntensity=1.6;for(const e of Ve)e.userData.type==="wand-core"&&(e.visible=!0,e.userData.pedestal.visible=!0);Xe.textContent="第二阶段：在三种杖芯中找出会回应守护、忠诚与重生的一种",je.textContent="杖芯线索：它来自浴火重生的鸟，曾送来两根命运彼此呼应的羽毛。",le("稳定共鸣！冬青木完成了第一阶段匹配。",3600)}}function bv(i){if(!P.progress.includes("core")){if(P=U_(P,i.userData.coreId),sl(),!P.accepted){ue.color.setHex(7022716),i.rotation.z+=Math.PI/4,le(`“${i.userData.label}”抗拒了冬青木！失控反馈 +1，重新解读浴火重生的线索。`,3400),setTimeout(()=>{Mt===2&&ue.color.setHex(12032624)},480);return}i.userData.selected=!0,i.material.emissiveIntensity=1.8,Xe.textContent="杖芯匹配成功：凤凰羽毛与冬青木稳定共鸣，准备校准长度",je.textContent="长度线索：短杖的火星触不到远处，长杖的光弧越过目标；让光准确停在十一道刻痕。";for(const e of Ve)e.userData.type==="wand-length"&&(e.visible=!0,e.userData.pedestal.visible=!0,e.userData.lengthLabel.visible=!0);le("凤凰羽毛释放出温暖金光——第二阶段匹配完成！",3800)}}function Sv(i){if(!P.progress.includes("length")){if(P=N_(P,i.userData.inches),sl(),!P.accepted){const e=P.feedback==="too-short"?"火星在目标前坠落":"光弧越过了目标";ue.color.setHex(3302042),i.rotation.y+=Math.PI/3,le(`“${i.userData.label}”${e}！失控反馈 +1。`,3300),setTimeout(()=>{Mt===2&&ue.color.setHex(12032624)},480);return}i.userData.selected=!0,i.material.emissive.setHex(16042333),i.material.emissiveIntensity=2,fi.userData.unlocked=!0,Xe.textContent="魔杖选择完成：带上魔杖，从车站门前往霍格沃茨分院仪式",je.textContent="三阶段共鸣稳定。奥利凡德为魔杖系上金色封签，通往霍格沃茨的门已经开启。",le("十一道刻痕同时亮起——魔杖选择了巫师！前往已开启的车站门。",4600)}}function Mv(i){if(!i.userData.selected){if(P=O_(P,i.userData.symbolId),G_(),!P.accepted){i.rotation.z+=Math.PI/12;const t=["先找敢于直面恐惧的象征","现在要找不求荣耀、始终守护同伴的象征","现在要找以思考照亮未知的象征","最后要找意志坚定、善于为目标开辟道路的象征"][P.progress.length];le(`“${i.userData.label}”不符合诗谜顺序。分院帽低声提醒：${t}。`,3600);return}if(i.userData.selected=!0,i.material.emissive.setHex(15774780),i.material.emissiveIntensity=1.8,P.trait==="courage"){Xe.textContent="勇气线索已确认：继续解读“留在朋友身边”的学院象征",je.textContent="第一句已解：狮代表直面恐惧的勇气。下一句赞美不求荣耀、始终守护同伴的品格。",le("狮徽亮起金光——勇气是分院诗谜的第一条线索！",3800);return}if(P.trait==="loyalty"){Xe.textContent="忠诚线索已确认：继续寻找“以思考照亮未知”的学院象征",je.textContent="第二句已解：獾代表不求荣耀的忠诚。下一句属于用问题、观察与求知驱散迷雾的人。",le("獾徽泛起暖黄光芒——忠诚是分院诗谜的第二条线索！",3800);return}if(P.trait==="wisdom"){Xe.textContent="智慧线索已确认：继续寻找“为目标开辟道路”的学院象征",je.textContent="第三句已解：鹰代表以思考照亮未知的智慧。最后一句属于意志坚定、善于实现目标的人。",le("鹰徽闪过清澈蓝光——智慧是分院诗谜的第三条线索！",3800);return}Xe.textContent="第一章完成：四种品格共同照亮了你的分院之路",je.textContent="勇气、忠诚、智慧与野心并非互斥；分院帽认可了你完整读懂诗谜的选择。",Ks(localStorage,{book:1,chapter:1,room:4}),jt.textContent="第一部 · 第一章完成",Zt.textContent="霍格沃茨的新生",tt.classList.remove("hidden"),setTimeout(()=>tt.classList.add("hidden"),2200),le("蛇徽亮起翠光——四学院诗谜完成，第一章通关！",5200)}}function Ev(i){if(!(i.userData.selected||P.unlocked)){if(P=c_(P,i.userData.stairId),Iu(),!P.accepted){for(const e of Ve)e.userData.type==="stair-route"&&(e.userData.selected=!1,e.material.emissiveIntensity=.4);ue.color.setHex(10106950),le(`“${i.userData.label}”转离了路线！三座楼梯重新移动，时间惩罚 +5 秒。`,3600),setTimeout(()=>{Mt===4&&ue.color.setHex(8885949)},520);return}if(i.userData.selected=!0,i.material.emissive.setHex(14138724),i.material.emissiveIntensity=1.8,!P.unlocked){const e=["低塔已固定。等待钟摆穿过中央刻线，寻找月牙铭文。","月光桥已固定。最后选择通往最高平台的三道刻痕。"];Xe.textContent=`路线已稳定 ${P.progress.length} / 3`,je.textContent=e[P.progress.length-1],le(`${i.userData.label}停止旋转，路线的一段已稳定。`,3e3);return}Xe.textContent="移动楼梯关卡完成：通往画像走廊的路线已经稳定",je.textContent="低塔、月光桥和高塔首尾相接。路线尽头的三幅画像正在争论一道银钥口令。",at(localStorage,{book:1,chapter:2,room:1}),jt.textContent="第一部 · 第二章 · 第 1 关完成",Zt.textContent="通往画像走廊",tt.classList.remove("hidden"),le("三座楼梯在钟声中连接——正在前往“会说话的画像”！",4200),setTimeout(()=>{zt(5),at(localStorage,{book:1,chapter:2,room:2})},700),setTimeout(()=>{tt.classList.add("hidden"),le("第二关已加载：比较画像证词，推导正确询问顺序。",4200)},1600)}}function Tv(i){if(!(i.userData.selected||P.unlocked)){if(P=u_(P,i.userData.portraitId),Du(),!P.accepted){for(const e of Ve)e.userData.type==="portrait-testimony"&&(e.userData.selected=!1,e.material.emissiveIntensity=.28);ue.color.setHex(10697814),le(`${i.userData.label}高声反驳！证词链断裂，画像怀疑 +1。`,3600),setTimeout(()=>{Mt===5&&ue.color.setHex(10192813)},520);return}if(i.userData.selected=!0,i.material.emissive.setHex(13940836),i.material.emissiveIntensity=1.5,!P.unlocked){const e=["学者的月桂框亮起。她确认：银甲骑士应当接着发言。","骑士放下剑并指向女士：最后一个词藏在她的银钥之后。"];Xe.textContent=`可信证词已连接 ${P.progress.length} / 3`,je.textContent=e[P.progress.length-1],le(`${i.userData.quote}——这段证词与前文一致。`,3800);return}Xe.textContent="画像谜题完成：银钥口令已经显现",je.textContent=`三段证词一致。完整口令：“${P.password}”。`,at(localStorage,{book:1,chapter:2,room:2}),jt.textContent="第一部 · 第二章 · 第 2 关完成",Zt.textContent="银钥口令",tt.classList.remove("hidden"),le(`画像齐声念出：“${P.password}”——正在进入管理员的巡夜路线！`,5200),setTimeout(()=>{zt(6),at(localStorage,{book:1,chapter:2,room:3})},700),setTimeout(()=>{tt.classList.add("hidden"),le("第三关已加载：借助盔甲、猫铃与挂毯避开巡夜灯光。",4400)},1600)}}function wv(i){if(!(i.userData.selected||P.unlocked)){if(P=h_(P,i.userData.hidingPlaceId),Lu(),!P.accepted){for(const e of Ve)e.userData.type==="patrol-cover"&&(e.userData.selected=!1,e.material.emissiveIntensity=e.userData.hidingPlaceId==="tapestry"?.35:.25);ue.color.setHex(10631986),le(`“${i.userData.label}”暴露在灯光下！路线清空，警戒升至 ${P.alert}。`,3800),setTimeout(()=>{Mt===6&&ue.color.setHex(7505569)},560);return}if(i.userData.selected=!0,i.material.emissive.setHex(7780260),i.material.emissiveIntensity=1.6,!P.unlocked){const e=["灯光从盔甲旁掠过。趁管理员背对走廊，拨动猫铃把脚步引开。","猫铃在反方向响起。现在沿阴影抵达独角兽挂毯后的暗门。"];Xe.textContent=`潜行路线已完成 ${P.progress.length} / 3`,je.textContent=e[P.progress.length-1],le(`${i.userData.label}生效，巡夜灯光没有发现你。`,3400);return}Xe.textContent="管理员的巡夜完成：独角兽挂毯后的暗门已经打开",je.textContent="盔甲遮住身形，猫铃引开脚步，挂毯后传来三道低沉的呼吸声。",at(localStorage,{book:1,chapter:2,room:3}),jt.textContent="第一部 · 第二章 · 第 3 关完成",Zt.textContent="活板门后的呼吸",tt.classList.remove("hidden"),le("暗门无声开启——正在进入三头犬守卫的禁区！",5200),setTimeout(()=>{zt(7),at(localStorage,{book:1,chapter:2,room:4})},700),setTimeout(()=>{tt.classList.add("hidden"),le("第四关已加载：解读乐谱，用三件乐器让守门生物沉睡。",4400)},1600)}}function Av(i){if(!(i.userData.selected||P.unlocked)){if(P=l_(P,i.userData.instrumentId),Uu(),!P.accepted){for(const e of Ve)e.userData.type==="lullaby-instrument"&&(e.userData.selected=!1,e.material.emissiveIntensity=.28);ue.color.setHex(10697519),le(`“${i.userData.label}”打乱了旋律！三颗头同时睁眼，惊醒 ${P.wakefulness} 次。`,3900),setTimeout(()=>{Mt===7&&ue.color.setHex(6649183)},620);return}if(i.userData.selected=!0,i.material.emissive.setHex(7907971),i.material.emissiveIntensity=1.7,!P.unlocked){const e=["长笛的气息让左首合眼。现在用琴弦托住刚形成的梦境。","竖琴的和声让中首伏下。最后用稳定的发条节拍封住鼾声。"];Xe.textContent=`安眠旋律已完成 ${P.progress.length} / 3`,je.textContent=e[P.progress.length-1],le(`${i.userData.label}奏效，一颗头缓缓合上双眼。`,3500);return}Xe.textContent="城堡禁区完成：三颗头都已沉睡，活板门安全开启",je.textContent="夜风、琴弦与发条叠成稳定摇篮曲。活板门下方吹来潮湿植物与古老机关的气息。",Ks(localStorage,{book:1,chapter:2,room:4}),jt.textContent="第一部 · 第二章完成",Zt.textContent="禁区守门人",tt.classList.remove("hidden"),le("三头守卫沉入梦乡——第二章通关，正在前往“镜中秘密”！",5600),setTimeout(()=>{zt(8),at(localStorage,{book:1,chapter:3,room:1})},900),setTimeout(()=>{tt.classList.add("hidden"),le("第三章已加载：在飞行训练场按风向与重量送回三件遗失物。",4800)},1900)}}function Cv(i){if(!(i.userData.selected||P.unlocked)){if(P=m_(P,i.userData.deliveryId),Nu(),!P.accepted){for(const e of Ve)e.userData.type==="flying-delivery"&&(e.userData.selected=!1,e.material.emissiveIntensity=.35);ue.color.setHex(11950946),le(`“${i.userData.label}”撞入逆风！遗失物重新散落，乱流升至 ${P.turbulence}。`,3900),setTimeout(()=>{Mt===8&&ue.color.setHex(10471392)},620);return}if(i.userData.selected=!0,i.material.emissive.setHex(15912551),i.material.emissiveIntensity=1.7,!P.unlocked){const e=["轻围巾顺着低风回到守门员手中。接着让月纹笔记穿过中央风环。","笔记平稳落到学者怀里。最后把最重的黄铜罗盘送上高风。"];Xe.textContent=`遗失物已安全送回 ${P.progress.length} / 3`,je.textContent=e[P.progress.length-1],le(`${i.userData.label}沿安全轨迹完成投递。`,3400);return}Xe.textContent="飞行课完成：三件遗失物全部回到主人手中",je.textContent="低风托轻物，中环承纸页，高风送黄铜。远处洗手间传来沉重脚步，下一道悬浮机关即将开启。",at(localStorage,{book:1,chapter:3,room:1}),jt.textContent="第一部 · 第三章 · 第 1 关完成",Zt.textContent="顺风归还",tt.classList.remove("hidden"),le("罗盘越过最高风环——正在赶往传出沉重脚步的洗手间！",5200),setTimeout(()=>{zt(9),at(localStorage,{book:1,chapter:3,room:2})},800),setTimeout(()=>{tt.classList.add("hidden"),le("第二关已加载：稳定三道悬浮机关，在巨怪逼近前架出逃生路线。",4800)},1750)}}function Rv(i){if(!(i.userData.selected||P.unlocked)){if(P=p_(P,i.userData.obstacleId),Ou(),!P.accepted){for(const e of Ve)e.userData.type==="troll-obstacle"&&(e.userData.selected=!1,e.material.emissiveIntensity=.32);ue.color.setHex(11750975),le(`“${i.userData.label}”触发过早！路线震塌，巨怪危险升至 ${P.danger}。`,3900),setTimeout(()=>{Mt===9&&ue.color.setHex(9217704)},620);return}if(i.userData.selected=!0,i.material.emissive.setHex(6669746),i.material.emissiveIntensity=1.7,!P.unlocked){const e=["月纹阀合拢，水势减弱。现在悬浮沟渠前的碎石，清出横梁落点。","瓦砾升到巨怪头顶，通道已经清空。最后放下锁链横梁跨过水沟。"];Xe.textContent=`逃生机关已稳定 ${P.progress.length} / 3`,je.textContent=e[P.progress.length-1],le(`${i.userData.label}稳定生效，巨怪被机关拖慢。`,3400);return}Xe.textContent="巨怪洗手间完成：横梁已跨过沟渠，安全逃生路线建立",je.textContent="止水阀保护落脚点，悬浮瓦砾清出通路，横梁连接出口。禁书区的门缝里透出幽蓝微光。",at(localStorage,{book:1,chapter:3,room:2}),jt.textContent="第一部 · 第三章 · 第 2 关完成",Zt.textContent="悬浮逃生",tt.classList.remove("hidden"),le("横梁稳稳落下——正在穿过幽蓝门廊，前往图书馆禁书区！",5200),setTimeout(()=>{zt(10),at(localStorage,{book:1,chapter:3,room:3})},800),setTimeout(()=>{tt.classList.add("hidden"),le("第三关已加载：按历史年代排列安全书脊，千万别惊醒锁链无年卷。",4800)},1750)}}function Pv(i){if(!(i.userData.selected||P.unlocked)){if(P=f_(P,i.userData.bookId),Fu(),!P.accepted){for(const e of Ve)e.userData.type==="restricted-book"&&(e.userData.selected=!1,e.material.emissiveIntensity=.32);ue.color.setHex(11615587),le(`“${i.userData.label}”发出尖叫！书脊时间线清空，噪声升至 ${P.noise}。`,3900),setTimeout(()=>{Mt===10&&ue.color.setHex(6714779)},620);return}if(i.userData.selected=!0,i.material.emissive.setHex(7311316),i.material.emissiveIntensity=1.8,!P.unlocked){const e=["建校录的四枚徽记亮起。下一本应记录数百年后的北境灾变。","龙灾账册安静归位。最后选择本年刚修订的天象纪事。"];Xe.textContent=`历史时间线已恢复 ${P.progress.length} / 3`,je.textContent=e[P.progress.length-1],le(`${i.userData.label}年代吻合，出口封印出现一道裂纹。`,3400);return}Xe.textContent="禁书区完成：三本历史书脊已按年代归位，镜廊出口显现",je.textContent="建校、龙灾、月蚀串成完整时间线。书架深处的银镜映出下一道谜题。",at(localStorage,{book:1,chapter:3,room:3}),jt.textContent="第一部 · 第三章 · 第 3 关完成",Zt.textContent="无声时间线",tt.classList.remove("hidden"),le("最后一本纪事归位——银镜正在把你引向镜廊深处！",5200),setTimeout(()=>{zt(11),at(localStorage,{book:1,chapter:3,room:4})},800),setTimeout(()=>{tt.classList.add("hidden"),le("第四关已加载：比较镜像与现实，选择真正需要而非渴望的物品。",4800)},1750)}}function Iv(i){if(!(i.userData.selected||P.unlocked)){if(P=d_(P,i.userData.itemId),ku(),!P.accepted){for(const e of Ve)e.userData.type==="mirror-choice"&&(e.userData.selected=!1,e.material.emissiveIntensity=.34);ue.color.setHex(10303596),le(`“${i.userData.label}”只是镜中的欲望！现实线索消散，幻象增强至 ${P.illusion}。`,4200),setTimeout(()=>{Mt===11&&ue.color.setHex(8885688)},650);return}if(i.userData.selected=!0,i.material.emissive.setHex(12114112),i.material.emissiveIntensity=1.8,!P.unlocked){const e=["斗篷挡住镜廊寒风。出口仍一片漆黑，寻找能照清现实道路的物品。","提灯照出两组脚印。最后选择代表共同离开、而非独占荣耀的信物。"];Xe.textContent=`现实所需已确认 ${P.progress.length} / 3`,je.textContent=e[P.progress.length-1],le(`${i.userData.label}没有出现在华丽镜像中，却解决了眼前的真实困境。`,3900);return}Xe.textContent="镜中秘密完成：你选择了御寒、照路与同行，而非王冠和金杯",je.textContent="魔镜的幻象退去，现实出口在同伴木牌的微光中显现。地下传来藤蔓摩擦石壁的声音。",Ks(localStorage,{book:1,chapter:3,room:4}),jt.textContent="第一部 · 第三章完成",Zt.textContent="现实所需",tt.classList.remove("hidden"),le("同伴木牌照亮出口——正在下降至地下试炼的魔鬼网！",5600),setTimeout(()=>{zt(12),at(localStorage,{book:1,chapter:4,room:1})},900),setTimeout(()=>{tt.classList.add("hidden"),le(kn(ve,"roomLoadedMessage"),5e3)},1900)}}function Dv(i){if(!(i.userData.selected||P.unlocked)){if(P=x_(P,i.userData.actionId),zu(),!P.accepted){for(const e of Ve)e.userData.type==="devils-snare-action"&&(e.userData.selected=!1,e.material.emissiveIntensity=.5);ue.color.setHex(10961976),le(kn(ve,"wrong",{label:vt(ve,i.userData.label),count:P.constriction}),4100),setTimeout(()=>{Mt===12&&ue.color.setHex(7179368)},680);return}if(i.userData.selected=!0,i.material.emissive.setHex(7981032),i.material.emissiveIntensity=1.9,!P.unlocked){const e=P.progress.length===1?"firstHint":"secondHint";Xe.textContent=kn(ve,"progress",{count:P.progress.length}),je.textContent=kn(ve,e),le(kn(ve,"accepted",{label:vt(ve,i.userData.label)}),3600);return}Xe.textContent=kn(ve,"completeObjective"),je.textContent=kn(ve,"completeHint"),at(localStorage,{book:1,chapter:4,room:1}),jt.textContent=kn(ve,"transitionKicker"),Zt.textContent=kn(ve,"transitionTitle"),tt.classList.remove("hidden"),le(kn(ve,"completionMessage"),5200),setTimeout(()=>{zt(13),at(localStorage,{book:1,chapter:4,room:2})},900),setTimeout(()=>{tt.classList.add("hidden"),le(Pn(ve,"roomLoadedMessage"),4800)},1900)}}function Lv(i){if(!(i.userData.selected||P.unlocked)){if(P=v_(P,i.userData.clueId),Bu(),!P.accepted){for(const e of Ve)e.userData.type==="flying-key-clue"&&(e.userData.selected=!1,e.material.emissiveIntensity=.48);ue.color.setHex(10898514),le(Pn(ve,"wrong",{label:vt(ve,i.userData.label),count:P.pursuit}),4200),setTimeout(()=>{Mt===13&&ue.color.setHex(8558262)},700);return}if(i.userData.selected=!0,i.material.emissive.setHex(12575743),i.material.emissiveIntensity=1.9,!P.unlocked){const e=P.progress.length===1?"firstHint":"secondHint";Xe.textContent=Pn(ve,"progress",{count:P.progress.length}),je.textContent=Pn(ve,e),le(Pn(ve,"accepted",{label:vt(ve,i.userData.label)}),3700);return}Xe.textContent=Pn(ve,"completeObjective"),je.textContent=Pn(ve,"completeHint"),at(localStorage,{book:1,chapter:4,room:2}),jt.textContent=Pn(ve,"transitionKicker"),Zt.textContent=Pn(ve,"transitionTitle"),tt.classList.remove("hidden"),le(Pn(ve,"completionMessage"),5400),setTimeout(()=>{zt(14),at(localStorage,{book:1,chapter:4,room:3})},900),setTimeout(()=>{tt.classList.add("hidden"),le(Pn(ve,"nextRoomMessage"),4800)},1900)}}function Uv(i){if(!(i.userData.selected||P.unlocked)){if(P=__(P,i.userData.moveId),Hu(),!P.accepted){for(const e of Ve)e.userData.type==="wizard-chess-move"&&(e.userData.selected=!1,e.material.emissiveIntensity=.36);ue.color.setHex(10569547),le(On(ve,"wrong",{label:vt(ve,i.userData.label),count:P.captured}),4300),setTimeout(()=>{Mt===14&&ue.color.setHex(10132646)},720);return}if(i.userData.selected=!0,i.material.emissive.setHex(14214084),i.material.emissiveIntensity=1.9,!P.unlocked){const e=P.progress.length===1?"firstHint":"secondHint";Xe.textContent=On(ve,"progress",{count:P.progress.length}),je.textContent=On(ve,e),le(On(ve,"accepted",{label:vt(ve,i.userData.label)}),3800);return}Xe.textContent=On(ve,"completeObjective"),je.textContent=On(ve,"completeHint"),at(localStorage,{book:1,chapter:4,room:3}),jt.textContent=On(ve,"transitionKicker"),Zt.textContent=On(ve,"transitionTitle"),tt.classList.remove("hidden"),le(On(ve,"completionMessage"),5400),setTimeout(()=>{zt(15),at(localStorage,{book:1,chapter:4,room:4})},900),setTimeout(()=>{tt.classList.add("hidden"),le(On(ve,"nextRoomMessage"),5e3)},1900)}}function Nv(i){if(!(i.userData.selected||P.unlocked)){if(P=g_(P,i.userData.clueId),Vu(),!P.accepted){for(const e of Ve)e.userData.type==="stone-chamber-clue"&&(e.userData.selected=!1,e.material.emissiveIntensity=.4);ue.color.setHex(11615564),le(Fn(ve,"wrong",{label:vt(ve,i.userData.label),count:P.corruption}),4400),setTimeout(()=>{Mt===15&&ue.color.setHex(10258354)},720);return}if(i.userData.selected=!0,i.material.emissive.setHex(14272255),i.material.emissiveIntensity=1.9,!P.unlocked){const e=P.progress.length===1?"firstHint":"secondHint";Xe.textContent=Fn(ve,"progress",{count:P.progress.length}),je.textContent=Fn(ve,e),le(Fn(ve,"accepted",{label:vt(ve,i.userData.label)}),3900);return}Xe.textContent=Fn(ve,"completeObjective"),je.textContent=Fn(ve,"completeHint"),Ks(localStorage,{book:1,chapter:4,room:4}),jt.textContent=Fn(ve,"transitionKicker"),Zt.textContent=Fn(ve,"transitionTitle"),tt.classList.remove("hidden"),le(Fn(ve,"completionMessage"),6500),setTimeout(()=>{zt(16),at(localStorage,{book:2,chapter:1,room:1})},1e3),setTimeout(()=>{tt.classList.add("hidden"),le(Fn(ve,"nextRoomMessage"),5200)},2100)}}function Ov(i){if(!(i.userData.selected||P.unlocked)){if(P=S_(P,i.userData.objectId),Gu(),!P.accepted){for(const e of Ve)e.userData.type==="elf-blockade-trace"&&(e.userData.selected=!1,e.material.emissiveIntensity=.38);ue.color.setHex(10764108),le(`“${i.userData.label}”接通了报警回路！封锁重置，干扰增强至 ${P.interference}。`,4300),setTimeout(()=>{Mt===16&&ue.color.setHex(8494477)},720);return}if(i.userData.selected=!0,i.material.emissive.setHex(11004868),i.material.emissiveIntensity=1.9,!P.unlocked){const e=["邮槽里的绿色粉尘来自室外。残痕没有走直线，而是绕向被悬浮咒托起的蛋糕。","蛋糕下方的魔力丝线指向壁炉。最后解除飞路炉上的三环封印。"];Xe.textContent=`住宅封锁痕迹已确认 ${P.progress.length} / 3`,je.textContent=e[P.progress.length-1],le(`${i.userData.label}的残痕已固定，绿色干扰显露下一段走向。`,3800);return}Xe.textContent="精灵的封锁完成：邮槽、悬浮蛋糕与飞路炉的干扰链已全部解除",je.textContent="绿色粉尘标出入口，悬浮蛋糕暴露绕行，飞路封印是最终汇聚点。住宅出口重新打开。",at(localStorage,{book:2,chapter:1,room:1}),jt.textContent="第二部 · 第一章 · 第 1 关完成",Zt.textContent="飞车失控",tt.classList.remove("hidden"),le("三重封锁碎成绿色星屑——正在登上失控飞车，追赶霍格沃茨特快！",6200),setTimeout(()=>{zt(17),at(localStorage,{book:2,chapter:1,room:2})},900),setTimeout(()=>{tt.classList.add("hidden"),le("飞车关卡已加载：先调整行李配重，再对准铁路，最后短促给油。",5e3)},1900)}}function Fv(i){if(!(i.userData.selected||P.unlocked)){if(P=b_(P,i.userData.controlId),Wu(),!P.accepted){for(const e of Ve)e.userData.type==="flying-car-control"&&(e.userData.selected=!1,e.material.emissiveIntensity=.4);ue.color.setHex(11617612),Ft.rotation.z=.08,le(`“${i.userData.label}”让引擎过热！飞车翻滚，乱流升至 ${P.turbulence}。`,4300),setTimeout(()=>{Mt===17&&(ue.color.setHex(7440544),Ft.rotation.z=0)},720);return}if(i.userData.selected=!0,i.material.emissive.setHex(12052223),i.material.emissiveIntensity=1.9,!P.unlocked){const e=["行李后移后车头恢复水平。现在让车头与铁路尽头的红色信号灯重合。","航向已经锁定，但水温仍在红区。用短促油门越过高架桥，不能持续加速。"];Xe.textContent=`飞车稳定步骤已完成 ${P.progress.length} / 3`,je.textContent=e[P.progress.length-1],le(`${i.userData.label}生效，飞车姿态恢复了一部分。`,3700);return}Xe.textContent="飞车失控完成：配重、航向与脉冲油门让车辆安全追上列车",je.textContent="后移配重压低车尾，铁路红灯校正航向，脉冲油门避免引擎过热。远处的打人柳正在风中挥动枝条。",at(localStorage,{book:2,chapter:1,room:2}),jt.textContent="第二部 · 第一章 · 第 2 关完成",Zt.textContent="打人柳下",tt.classList.remove("hidden"),le("飞车擦过高架桥，稳稳落在城堡草地——打人柳的粗枝突然苏醒！",6200),setTimeout(()=>{zt(18),at(localStorage,{book:2,chapter:1,room:3})},900),setTimeout(()=>{tt.classList.add("hidden"),le("打人柳关卡已加载：等待高扫、俯身避低返，再冲过树根间隙。",5200)},1900)}}function kv(i){if(!(i.userData.selected||P.unlocked)){if(P=y_(P,i.userData.actionId),Xu(),!P.accepted){for(const e of Ve)e.userData.type==="willow-rhythm"&&(e.userData.selected=!1,e.material.emissiveIntensity=.4);ue.color.setHex(11750211),Ft.rotation.z=-.07,le(`“${i.userData.label}”踩错节拍！粗枝扫中肩膀，擦伤升至 ${P.bruises}。`,4300),setTimeout(()=>{Mt===18&&(ue.color.setHex(8228772),Ft.rotation.z=0)},720);return}if(i.userData.selected=!0,i.material.emissive.setHex(13037485),i.material.emissiveIntensity=1.9,!P.unlocked){const e=["高枝带着破风声从头顶扫过。枝梢正在贴着落叶低低返程，立刻俯身。","低枝擦过背后，主干短暂失去平衡。发光树根之间的缝隙就是第三拍。"];Xe.textContent=`打人柳安全节拍已完成 ${P.progress.length} / 3`,je.textContent=e[P.progress.length-1],le(`${i.userData.label}：动作与枝条节拍吻合。`,3700);return}Xe.textContent="打人柳下完成：高扫、低返、露根三拍全部避开，树洞通道已经打开",je.textContent="破风声预告高扫，贴地落叶暴露低返，两次攻击后的收势形成通往树洞的安全窗口。",at(localStorage,{book:2,chapter:1,room:3}),jt.textContent="第二部 · 第一章 · 第 3 关完成",Zt.textContent="树洞开启",tt.classList.remove("hidden"),setTimeout(()=>tt.classList.add("hidden"),3e3),le("你滑入树根下的安全通道。城堡走廊尽头，一行血字正从潮湿石墙上浮现……",6200)}}function zv(i){if(Os)return;const e=nl(i);e&&(Os=!0,jt.textContent=`第一部 · 第一章 · 第 ${i+1} 关`,Zt.textContent=e.name,tt.classList.remove("hidden"),setTimeout(()=>{zt(i),at(localStorage,{book:1,chapter:1,room:i+1})},600),setTimeout(()=>{tt.classList.add("hidden"),Os=!1;const n={1:"第二关已加载：进入对角巷，按清单顺序采购。",2:"第三关已加载：你已进入奥利凡德魔杖店。",3:"第四关已加载：你已抵达霍格沃茨礼堂，分院仪式即将开始。"}[i]??`第 ${i+1} 关已加载。`;le(n,4200)},1450))}function Bv(i){const e=F_({roomIndex:Mt,unlocked:i.userData.unlocked});if(!e.advanced){const n=4-P.progress.length;le(`门还没有认可你：还需完成 ${n} 个正确步骤。`);return}if(i.userData.opening)return;i.userData.opening=!0;const t=nl(e.roomIndex);t&&(Xe.textContent=`门正在打开：准备进入第 ${e.roomIndex+1} 关“${t.name}”`,le(`第 ${Mt+1} 关完成！正在前往“${t.name}”……`,2600),setTimeout(()=>zv(e.roomIndex),1050))}function Yu(){Oa.setFromCamera(new be(0,0),Ft);const i=Ve.filter(s=>s.visible),e=Oa.intersectObjects(i,!0)[0]?.object??null;if(Ne=Wg(e,i),Pr.classList.toggle("visible",!!Ne),!Ne)return;const t=Ee(_n?"action.touch":"action.keyboard"),n=Ne.userData,r=vt(ve,n.label??n.destination??Ne.name);n.type==="shopping-item"?Pr.textContent=`${t} ${r} · ${n.price} G`:n.type==="door"&&!n.unlocked?Pr.textContent=`${r} · ${Ee("campaign.locked")}`:Pr.textContent=`${t} ${r}`}function ju(){!In.isLocked&&!Kr||!Ne||Os||(Ne.userData.type==="owl-letter"?_v(Ne):Ne.userData.type==="shopping-item"?xv(Ne):Ne.userData.type==="wand-wood"?yv(Ne):Ne.userData.type==="wand-core"?bv(Ne):Ne.userData.type==="wand-length"?Sv(Ne):Ne.userData.type==="sorting-clue"?Mv(Ne):Ne.userData.type==="stair-route"?Ev(Ne):Ne.userData.type==="portrait-testimony"?Tv(Ne):Ne.userData.type==="patrol-cover"?wv(Ne):Ne.userData.type==="lullaby-instrument"?Av(Ne):Ne.userData.type==="flying-delivery"?Cv(Ne):Ne.userData.type==="troll-obstacle"?Rv(Ne):Ne.userData.type==="restricted-book"?Pv(Ne):Ne.userData.type==="mirror-choice"?Iv(Ne):Ne.userData.type==="devils-snare-action"?Dv(Ne):Ne.userData.type==="flying-key-clue"?Lv(Ne):Ne.userData.type==="wizard-chess-move"?Uv(Ne):Ne.userData.type==="stone-chamber-clue"?Nv(Ne):Ne.userData.type==="elf-blockade-trace"?Ov(Ne):Ne.userData.type==="flying-car-control"?Fv(Ne):Ne.userData.type==="willow-rhythm"?kv(Ne):Ne.userData.type==="door"&&Bv(Ne))}function $u(){document.documentElement.lang=ve,document.title=Ee("document.title"),document.querySelector("#start-brand").textContent=Ee("start.brand"),document.querySelector("#start-title").textContent=Ee("start.title"),document.querySelector("#start-description").textContent=Ee("start.description"),$r.textContent=Ee("start.play"),Zs.textContent=Ee("start.continue"),Vs.textContent=Ee("start.restart"),document.querySelector("#campaign-button").textContent=Ee("start.campaign"),Ru.textContent=Ee("start.language"),$t.textContent=Ee(Mn==="playing"?"voice.stop":"voice.play"),$t.disabled=Mn==="loading",$t.setAttribute("aria-busy",String(Mn==="loading")),$t.setAttribute("aria-pressed",String(Mn==="playing")),Or.textContent=Ee(`voice.${Mn==="idle"?"ready":Mn}`),B_.textContent=Ee("voice.subtitle"),document.querySelector(".desktop-help").textContent=Ee("help.desktop"),document.querySelector(".mobile-help").textContent=Ee("help.mobile"),document.querySelector("#look-zone span").textContent=Ee("mobile.look"),document.querySelector("#interact-button").textContent=Ee("mobile.interact"),document.querySelector(".campaign-header h2").textContent=Ee("campaign.title"),document.querySelector("#campaign-screen").setAttribute("aria-label",Ee("campaign.title")),document.querySelector("#campaign-close").setAttribute("aria-label",Ee("campaign.close")),document.querySelector("#book-tabs").setAttribute("aria-label",Ee("campaign.selectBook")),jt.textContent=Ee("transition.next"),Pu?.render()}function Js(){Na+=1,ur.pause(),ur.currentTime=0,Mn="idle",$t.disabled=!1,$t.setAttribute("aria-busy","false"),$t.setAttribute("aria-pressed","false"),$t.textContent=Ee("voice.play"),Or.textContent=Ee("voice.ready")}$t.addEventListener("click",async()=>{if(Mn==="playing"){Js();return}if(!o_({playbackState:Mn,muted:!1}))return;const i=s_("intro",ve),e=++Na;Mn="loading",$t.disabled=!0,$t.setAttribute("aria-busy","true"),Or.textContent=Ee("voice.loading");const t=await a_({audio:ur,source:i?`/Hogwarts-Escape-Room-3D-Play/${i}`:null,muted:!1});if(e!==Na){ur.pause(),ur.currentTime=0;return}$t.disabled=!1,$t.setAttribute("aria-busy","false"),t==="playing"?(Mn="playing",$t.textContent=Ee("voice.stop"),$t.setAttribute("aria-pressed","true"),Or.textContent=Ee("voice.playing")):(Mn="idle",$t.textContent=Ee("voice.play"),$t.setAttribute("aria-pressed","false"),Or.textContent=Ee("voice.failed"))});ur.addEventListener("ended",Js);for(const i of document.querySelectorAll("[data-language]"))i.addEventListener("click",()=>{Js(),ve=Qg(localStorage,i.dataset.language),Ee=jr(ve),$u(),zt(Mt),Gs.classList.add("hidden"),Gs.setAttribute("aria-hidden","true")});Ru.addEventListener("click",()=>{Gs.classList.remove("hidden"),Gs.removeAttribute("aria-hidden")});$u();$r.addEventListener("click",()=>{Js(),_n?(Kr=!0,rl.classList.add("hidden"),k_.classList.add("active")):In.lock()});(nl(Ir)||Number.isInteger(Ir)&&Ir>=4&&Ir<=18)&&(Zs.classList.remove("hidden"),Vs.classList.remove("hidden"));Zs.addEventListener("click",()=>{zt(Ir),$r.click()});Vs.addEventListener("click",()=>{Yg(localStorage),Zs.classList.add("hidden"),Vs.classList.add("hidden"),zt(0),$r.click()});In.addEventListener("lock",()=>rl.classList.add("hidden"));In.addEventListener("unlock",()=>rl.classList.remove("hidden"));Pu=i_({getProgress:()=>Eu(localStorage),getLanguage:()=>ve,getTranslator:()=>Ee,onPlay:i=>{const t={"b1-c2-r1":4,"b1-c2-r2":5,"b1-c2-r3":6,"b1-c2-r4":7,"b1-c3-r1":8,"b1-c3-r2":9,"b1-c3-r3":10,"b1-c3-r4":11,"b1-c4-r1":12,"b1-c4-r2":13,"b1-c4-r3":14,"b1-c4-r4":15,"b2-c1-r1":16,"b2-c1-r2":17,"b2-c1-r3":18}[i.id]??0;zt(t),t>=16?at(localStorage,{book:2,chapter:1,room:t-15}):t>=12?at(localStorage,{book:1,chapter:4,room:t-11}):t>=8?at(localStorage,{book:1,chapter:3,room:t-7}):t>=4&&at(localStorage,{book:1,chapter:2,room:t-3}),$r.click()}});const or={};addEventListener("keydown",i=>{or[i.code]=!0,i.code==="KeyE"&&ju()});addEventListener("keyup",i=>{or[i.code]=!1});const ci={forward:0,right:0},Ws=document.querySelector("#joystick"),Ku=document.querySelector("#joystick-knob");let Xs=null,Fa={x:0,y:0};function Zu(i){const e=i.clientX-Fa.x,t=i.clientY-Fa.y,n=Math.hypot(e,t)||1,r=34,s=Math.min(1,r/n),o=e*s,a=t*s;Ku.style.transform=`translate(${o}px, ${a}px)`,ci.right=o/r,ci.forward=-a/r}Ws.addEventListener("touchstart",i=>{const e=i.changedTouches[0],t=Ws.getBoundingClientRect();Xs=e.identifier,Fa={x:t.left+t.width/2,y:t.top+t.height/2},Zu(e),i.preventDefault()},{passive:!1});Ws.addEventListener("touchmove",i=>{const e=[...i.changedTouches].find(t=>t.identifier===Xs);e&&Zu(e),i.preventDefault()},{passive:!1});Ws.addEventListener("touchend",i=>{[...i.changedTouches].some(e=>e.identifier===Xs)&&(Xs=null,ci.forward=0,ci.right=0,Ku.style.transform="translate(0,0)")},{passive:!1});const Ni=document.querySelector("#look-zone");let Gr=null,Fs={x:0,y:0};Ni.addEventListener("pointerdown",i=>{!Kr||Gr!==null||(Gr=i.pointerId,Fs={x:i.clientX,y:i.clientY},Ni.setPointerCapture(i.pointerId),i.preventDefault())});Ni.addEventListener("pointermove",i=>{if(!Kr||i.pointerId!==Gr)return;const e=new wn().setFromQuaternion(Ft.quaternion,"YXZ"),t=Gg({yaw:e.y,pitch:e.x},{dx:i.clientX-Fs.x,dy:i.clientY-Fs.y});e.y=t.yaw,e.x=t.pitch,Ft.quaternion.setFromEuler(e),Fs={x:i.clientX,y:i.clientY},i.preventDefault()});function Ju(i){i.pointerId===Gr&&(Ni.hasPointerCapture(i.pointerId)&&Ni.releasePointerCapture(i.pointerId),Gr=null)}Ni.addEventListener("pointerup",Ju);Ni.addEventListener("pointercancel",Ju);document.querySelector("#interact-button").addEventListener("pointerdown",i=>{i.preventDefault(),ju()});const zc=new jd;function Qu(){requestAnimationFrame(Qu);const i=Math.min(zc.getDelta(),.05),e=zc.elapsedTime;for(const t of yt)t.object.visible&&(t.object.position.y=t.baseY+Math.sin(e*1.35+t.phase)*t.bob,t.spin&&(t.object.rotation.y+=i*t.spin));if(In.isLocked||Kr){const t=5*i,n=Ft.position.clone();or.KeyW&&In.moveForward(t),or.KeyS&&In.moveForward(-t),or.KeyA&&In.moveRight(-t),or.KeyD&&In.moveRight(t),ci.forward&&In.moveForward(t*ci.forward),ci.right&&In.moveRight(t*ci.right),Ft.position.y=1.7,(Math.abs(Ft.position.x)>Oc.x||Math.abs(Ft.position.z)>Oc.z)&&Ft.position.copy(n),Yu()}fi?.userData.opening&&fi.userData.pivot.rotation.y>-Math.PI*.48&&(fi.userData.pivot.rotation.y-=i*1.55),_i.render(Et,Ft)}zt(0);Qu();addEventListener("resize",()=>{Ft.aspect=innerWidth/innerHeight,Ft.updateProjectionMatrix(),_i.setSize(innerWidth,innerHeight)});
