(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Ba="179",cd=0,ml=1,ud=2,Vc=1,Gc=2,Zn=3,mi=0,hn=1,En=2,di=0,cr=1,gl=2,vl=3,_l=4,dd=5,Ri=100,hd=101,fd=102,pd=103,md=104,gd=200,vd=201,_d=202,xd=203,Xo=204,qo=205,yd=206,bd=207,Sd=208,Md=209,Ed=210,Td=211,wd=212,Ad=213,Cd=214,Yo=0,jo=1,$o=2,fr=3,Ko=4,Zo=5,Jo=6,Qo=7,Wc=0,Rd=1,Id=2,hi=0,Pd=1,Ld=2,Dd=3,Ud=4,Nd=5,Od=6,Fd=7,Xc=300,pr=301,mr=302,ea=303,ta=304,js=306,na=1e3,Pi=1001,ia=1002,Dn=1003,kd=1004,ts=1005,Vn=1006,io=1007,Li=1008,Wn=1009,qc=1010,Yc=1011,zr=1012,Ha=1013,Ui=1014,Jn=1015,qr=1016,Va=1017,Ga=1018,Br=1020,jc=35902,$c=1021,Kc=1022,Ln=1023,Hr=1026,Vr=1027,Zc=1028,Wa=1029,Jc=1030,Xa=1031,qa=1033,Ps=33776,Ls=33777,Ds=33778,Us=33779,ra=35840,sa=35841,oa=35842,aa=35843,la=36196,ca=37492,ua=37496,da=37808,ha=37809,fa=37810,pa=37811,ma=37812,ga=37813,va=37814,_a=37815,xa=37816,ya=37817,ba=37818,Sa=37819,Ma=37820,Ea=37821,Ns=36492,Ta=36494,wa=36495,Qc=36283,Aa=36284,Ca=36285,Ra=36286,zd=3200,Bd=3201,eu=0,Hd=1,ci="",dn="srgb",gr="srgb-linear",Bs="linear",ft="srgb",zi=7680,xl=519,Vd=512,Gd=513,Wd=514,tu=515,Xd=516,qd=517,Yd=518,jd=519,Ia=35044,yl="300 es",Gn=2e3,Hs=2001;class Fi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ro=Math.PI/180,Pa=180/Math.PI;function fi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function Je(i,e,t){return Math.max(e,Math.min(t,i))}function $d(i,e){return(i%e+e)%e}function so(i,e,t){return(1-t)*i+t*e}function Hn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==f||c!==p||u!==g){let m=1-a;const h=l*f+c*p+u*g+d*x,E=h>=0?1:-1,M=1-h*h;if(M>Number.EPSILON){const w=Math.sqrt(M),A=Math.atan2(w,h*E);m=Math.sin(m*A)/w,a=Math.sin(a*A)/w}const _=a*E;if(l=l*m+f*_,c=c*m+p*_,u=u*m+g*_,d=d*m+x*_,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=w,c*=w,u*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*d+l*p-c*f,e[t+1]=l*g+u*f+c*d-a*p,e[t+2]=c*g+u*p+a*f-l*d,e[t+3]=u*g-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(s/2),f=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"YZX":this._x=f*u*d+c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d-f*p*g;break;case"XZY":this._x=f*u*d-c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oo.copy(this).projectOnVector(e),this.sub(oo)}reflect(e){return this.sub(oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oo=new P,bl=new Yr;class Ye{constructor(e,t,n,r,s,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],p=n[5],g=n[8],x=r[0],m=r[3],h=r[6],E=r[1],M=r[4],_=r[7],w=r[2],A=r[5],R=r[8];return s[0]=o*x+a*E+l*w,s[3]=o*m+a*M+l*A,s[6]=o*h+a*_+l*R,s[1]=c*x+u*E+d*w,s[4]=c*m+u*M+d*A,s[7]=c*h+u*_+d*R,s[2]=f*x+p*E+g*w,s[5]=f*m+p*M+g*A,s[8]=f*h+p*_+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=t*d+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(r*c-u*n)*x,e[2]=(a*n-r*o)*x,e[3]=f*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ao.makeScale(e,t)),this}rotate(e){return this.premultiply(ao.makeRotation(-e)),this}translate(e,t){return this.premultiply(ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ao=new Ye;function nu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Vs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kd(){const i=Vs("canvas");return i.style.display="block",i}const Sl={};function ur(i){i in Sl||(Sl[i]=!0,console.warn(i))}function Zd(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Ml=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),El=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jd(){const i={enabled:!0,workingColorSpace:gr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ft&&(r.r=Qn(r.r),r.g=Qn(r.g),r.b=Qn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(r.r=dr(r.r),r.g=dr(r.g),r.b=dr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ci?Bs:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ur("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ur("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[gr]:{primaries:e,whitePoint:n,transfer:Bs,toXYZ:Ml,fromXYZ:El,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:Ml,fromXYZ:El,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),i}const st=Jd();function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function dr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bi;class Qd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bi===void 0&&(Bi=Vs("canvas")),Bi.width=e.width,Bi.height=e.height;const r=Bi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Qn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qn(t[n]/255)*255):t[n]=Qn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eh=0;class Ya{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(lo(r[o].image)):s.push(lo(r[o]))}else s=lo(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function lo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let th=0;const co=new P;class ln extends Fi{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,n=Pi,r=Pi,s=Vn,o=Li,a=Ln,l=Wn,c=ln.DEFAULT_ANISOTROPY,u=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=fi(),this.name="",this.source=new Ya(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(co).x}get height(){return this.source.getSize(co).y}get depth(){return this.source.getSize(co).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case na:e.x=e.x-Math.floor(e.x);break;case Pi:e.x=e.x<0?0:1;break;case ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case na:e.y=e.y-Math.floor(e.y);break;case Pi:e.y=e.y<0?0:1;break;case ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Xc;ln.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,r=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,_=(p+1)/2,w=(h+1)/2,A=(u+f)/4,R=(d+x)/4,L=(g+m)/4;return M>_&&M>w?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=A/n,s=R/n):_>w?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=A/r,s=L/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=R/s,r=L/s),this.set(n,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-x)/E,this.z=(f-u)/E,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nh extends Fi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new ln(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ya(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends nh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class iu extends ln{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ih extends ln{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jr{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(s,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ns.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ns.copy(n.boundingBox)),ns.applyMatrix4(e.matrixWorld),this.union(ns)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),is.subVectors(this.max,br),Hi.subVectors(e.a,br),Vi.subVectors(e.b,br),Gi.subVectors(e.c,br),ni.subVectors(Vi,Hi),ii.subVectors(Gi,Vi),bi.subVectors(Hi,Gi);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-bi.z,bi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,bi.z,0,-bi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-bi.y,bi.x,0];return!uo(t,Hi,Vi,Gi,is)||(t=[1,0,0,0,1,0,0,0,1],!uo(t,Hi,Vi,Gi,is))?!1:(rs.crossVectors(ni,ii),t=[rs.x,rs.y,rs.z],uo(t,Hi,Vi,Gi,is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qn=[new P,new P,new P,new P,new P,new P,new P,new P],An=new P,ns=new jr,Hi=new P,Vi=new P,Gi=new P,ni=new P,ii=new P,bi=new P,br=new P,is=new P,rs=new P,Si=new P;function uo(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Si.fromArray(i,s);const a=r.x*Math.abs(Si.x)+r.y*Math.abs(Si.y)+r.z*Math.abs(Si.z),l=e.dot(Si),c=t.dot(Si),u=n.dot(Si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const rh=new jr,Sr=new P,ho=new P;class ja{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);const t=Sr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Sr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ho.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(ho)),this.expandByPoint(Sr.copy(e.center).sub(ho))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Yn=new P,fo=new P,ss=new P,ri=new P,po=new P,os=new P,mo=new P;class ru{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){fo.copy(e).add(t).multiplyScalar(.5),ss.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(fo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ss),a=ri.dot(this.direction),l=-ri.dot(ss),c=ri.lengthSq(),u=Math.abs(1-o*o);let d,f,p,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const x=1/u;d*=x,f*=x,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(fo).addScaledVector(ss,f),p}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),r=Yn.dot(Yn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,r,s){po.subVectors(t,e),os.subVectors(n,e),mo.crossVectors(po,os);let o=this.direction.dot(mo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,e);const l=a*this.direction.dot(os.crossVectors(ri,os));if(l<0)return null;const c=a*this.direction.dot(po.cross(ri));if(c<0||l+c>o)return null;const u=-a*ri.dot(mo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,t,n,r,s,o,a,l,c,u,d,f,p,g,x,m){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,d,f,p,g,x,m)}set(e,t,n,r,s,o,a,l,c,u,d,f,p,g,x,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Wi.setFromMatrixColumn(e,0).length(),s=1/Wi.setFromMatrixColumn(e,1).length(),o=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,g=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,g=c*u,x=c*d;t[0]=f+x*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,g=c*u,x=c*d;t[0]=f-x*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,g=a*u,x=a*d;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-f*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+g,t[10]=f-x*d}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+x,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sh,e,oh)}lookAt(e,t,n){const r=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),si.crossVectors(n,gn),si.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),si.crossVectors(n,gn)),si.normalize(),as.crossVectors(gn,si),r[0]=si.x,r[4]=as.x,r[8]=gn.x,r[1]=si.y,r[5]=as.y,r[9]=gn.y,r[2]=si.z,r[6]=as.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],h=n[14],E=n[3],M=n[7],_=n[11],w=n[15],A=r[0],R=r[4],L=r[8],b=r[12],y=r[1],C=r[5],z=r[9],H=r[13],W=r[2],K=r[6],$=r[10],J=r[14],X=r[3],he=r[7],ve=r[11],Pe=r[15];return s[0]=o*A+a*y+l*W+c*X,s[4]=o*R+a*C+l*K+c*he,s[8]=o*L+a*z+l*$+c*ve,s[12]=o*b+a*H+l*J+c*Pe,s[1]=u*A+d*y+f*W+p*X,s[5]=u*R+d*C+f*K+p*he,s[9]=u*L+d*z+f*$+p*ve,s[13]=u*b+d*H+f*J+p*Pe,s[2]=g*A+x*y+m*W+h*X,s[6]=g*R+x*C+m*K+h*he,s[10]=g*L+x*z+m*$+h*ve,s[14]=g*b+x*H+m*J+h*Pe,s[3]=E*A+M*y+_*W+w*X,s[7]=E*R+M*C+_*K+w*he,s[11]=E*L+M*z+_*$+w*ve,s[15]=E*b+M*H+_*J+w*Pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],h=e[15];return g*(+s*l*d-r*c*d-s*a*f+n*c*f+r*a*p-n*l*p)+x*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+t*c*d-t*a*p-s*o*d+n*o*p+s*a*u-n*c*u)+h*(-r*a*u-t*l*d+t*a*f+r*o*d-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],h=e[15],E=d*m*c-x*f*c+x*l*p-a*m*p-d*l*h+a*f*h,M=g*f*c-u*m*c-g*l*p+o*m*p+u*l*h-o*f*h,_=u*x*c-g*d*c+g*a*p-o*x*p-u*a*h+o*d*h,w=g*d*l-u*x*l-g*a*f+o*x*f+u*a*m-o*d*m,A=t*E+n*M+r*_+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=E*R,e[1]=(x*f*s-d*m*s-x*r*p+n*m*p+d*r*h-n*f*h)*R,e[2]=(a*m*s-x*l*s+x*r*c-n*m*c-a*r*h+n*l*h)*R,e[3]=(d*l*s-a*f*s-d*r*c+n*f*c+a*r*p-n*l*p)*R,e[4]=M*R,e[5]=(u*m*s-g*f*s+g*r*p-t*m*p-u*r*h+t*f*h)*R,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*h-t*l*h)*R,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*R,e[8]=_*R,e[9]=(g*d*s-u*x*s-g*n*p+t*x*p+u*n*h-t*d*h)*R,e[10]=(o*x*s-g*a*s+g*n*c-t*x*c-o*n*h+t*a*h)*R,e[11]=(u*a*s-o*d*s-u*n*c+t*d*c+o*n*p-t*a*p)*R,e[12]=w*R,e[13]=(u*x*r-g*d*r+g*n*f-t*x*f-u*n*m+t*d*m)*R,e[14]=(g*a*r-o*x*r-g*n*l+t*x*l+o*n*m-t*a*m)*R,e[15]=(o*d*r-u*a*r+u*n*l-t*d*l-o*n*f+t*a*f)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,g=s*d,x=o*u,m=o*d,h=a*d,E=l*c,M=l*u,_=l*d,w=n.x,A=n.y,R=n.z;return r[0]=(1-(x+h))*w,r[1]=(p+_)*w,r[2]=(g-M)*w,r[3]=0,r[4]=(p-_)*A,r[5]=(1-(f+h))*A,r[6]=(m+E)*A,r[7]=0,r[8]=(g+M)*R,r[9]=(m-E)*R,r[10]=(1-(f+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Wi.set(r[0],r[1],r[2]).length();const o=Wi.set(r[4],r[5],r[6]).length(),a=Wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const c=1/s,u=1/o,d=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=d,Cn.elements[9]*=d,Cn.elements[10]*=d,t.setFromRotationMatrix(Cn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Gn,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r);let g,x;if(l)g=s/(o-s),x=o*s/(o-s);else if(a===Gn)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Hs)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Gn,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-r),f=-(t+e)/(t-e),p=-(n+r)/(n-r);let g,x;if(l)g=1/(o-s),x=o/(o-s);else if(a===Gn)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===Hs)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Wi=new P,Cn=new wt,sh=new P(0,0,0),oh=new P(1,1,1),si=new P,as=new P,gn=new P,Tl=new wt,wl=new Yr;class wn{constructor(e=0,t=0,n=0,r=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wl.setFromEuler(this),this.setFromQuaternion(wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class $a{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ah=0;const Al=new P,Xi=new Yr,jn=new wt,ls=new P,Mr=new P,lh=new P,ch=new Yr,Cl=new P(1,0,0),Rl=new P(0,1,0),Il=new P(0,0,1),Pl={type:"added"},uh={type:"removed"},qi={type:"childadded",child:null},go={type:"childremoved",child:null};class jt extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new P,t=new wn,n=new Yr,r=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new Ye}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(Cl,e)}rotateY(e){return this.rotateOnAxis(Rl,e)}rotateZ(e){return this.rotateOnAxis(Il,e)}translateOnAxis(e,t){return Al.copy(e).applyQuaternion(this.quaternion),this.position.add(Al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cl,e)}translateY(e){return this.translateOnAxis(Rl,e)}translateZ(e){return this.translateOnAxis(Il,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ls.copy(e):ls.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Mr,ls,this.up):jn.lookAt(ls,Mr,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),Xi.setFromRotationMatrix(jn),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pl),qi.child=e,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uh),go.child=e,this.dispatchEvent(go),go.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pl),qi.child=e,this.dispatchEvent(qi),qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,lh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,ch,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}jt.DEFAULT_UP=new P(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new P,$n=new P,vo=new P,Kn=new P,Yi=new P,ji=new P,Ll=new P,_o=new P,xo=new P,yo=new P,bo=new mt,So=new mt,Mo=new mt;class Tn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Rn.subVectors(e,t),r.cross(Rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Rn.subVectors(r,t),$n.subVectors(n,t),vo.subVectors(e,t);const o=Rn.dot(Rn),a=Rn.dot($n),l=Rn.dot(vo),c=$n.dot($n),u=$n.dot(vo),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return bo.setScalar(0),So.setScalar(0),Mo.setScalar(0),bo.fromBufferAttribute(e,t),So.fromBufferAttribute(e,n),Mo.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(bo,s.x),o.addScaledVector(So,s.y),o.addScaledVector(Mo,s.z),o}static isFrontFacing(e,t,n,r){return Rn.subVectors(n,t),$n.subVectors(e,t),Rn.cross($n).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Rn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Tn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Yi.subVectors(r,n),ji.subVectors(s,n),_o.subVectors(e,n);const l=Yi.dot(_o),c=ji.dot(_o);if(l<=0&&c<=0)return t.copy(n);xo.subVectors(e,r);const u=Yi.dot(xo),d=ji.dot(xo);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Yi,o);yo.subVectors(e,s);const p=Yi.dot(yo),g=ji.dot(yo);if(g>=0&&p<=g)return t.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ji,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Ll.subVectors(s,r),a=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(Ll,a);const h=1/(m+x+f);return o=x*h,a=f*h,t.copy(n).addScaledVector(Yi,o).addScaledVector(ji,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},cs={h:0,s:0,l:0};function Eo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=st.workingColorSpace){if(e=$d(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Eo(o,s,e+1/3),this.g=Eo(o,s,e),this.b=Eo(o,s,e-1/3)}return st.colorSpaceToWorking(this,r),this}setStyle(e,t=dn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){const n=su[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return st.workingToColorSpace(nn.copy(this),e),Math.round(Je(nn.r*255,0,255))*65536+Math.round(Je(nn.g*255,0,255))*256+Math.round(Je(nn.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(nn.copy(this),t);const n=nn.r,r=nn.g,s=nn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=dn){st.workingToColorSpace(nn.copy(this),e);const t=nn.r,n=nn.g,r=nn.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(cs);const n=so(oi.h,cs.h,t),r=so(oi.s,cs.s,t),s=so(oi.l,cs.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new et;et.NAMES=su;let dh=0;class _r extends Fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=cr,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xo,this.blendDst=qo,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==cr&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xo&&(n.blendSrc=this.blendSrc),this.blendDst!==qo&&(n.blendDst=this.blendDst),this.blendEquation!==Ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ei extends _r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new P,us=new be;let hh=0;class Un{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ia,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)us.fromBufferAttribute(this,t),us.applyMatrix3(e),this.setXY(t,us.x,us.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),r=pt(r,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ia&&(e.usage=this.usage),e}}class ou extends Un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class au extends Un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends Un{constructor(e,t,n){super(new Float32Array(e),t,n)}}let fh=0;const Sn=new wt,To=new jt,$i=new P,vn=new jr,Er=new jr,qt=new P;class rn extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nu(e)?au:ou)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return To.lookAt(e),To.updateMatrix(),this.applyMatrix4(To.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ja);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Er.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(vn.min,Er.min),vn.expandByPoint(qt),qt.addVectors(vn.max,Er.max),vn.expandByPoint(qt)):(vn.expandByPoint(Er.min),vn.expandByPoint(Er.max))}vn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)qt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(qt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)qt.fromBufferAttribute(a,c),l&&($i.fromBufferAttribute(e,c),qt.add($i)),r=Math.max(r,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new P,l[L]=new P;const c=new P,u=new P,d=new P,f=new be,p=new be,g=new be,x=new P,m=new P;function h(L,b,y){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,b),d.fromBufferAttribute(n,y),f.fromBufferAttribute(s,L),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,y),u.sub(c),d.sub(c),p.sub(f),g.sub(f);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(C),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),a[L].add(x),a[b].add(x),a[y].add(x),l[L].add(m),l[b].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,b=E.length;L<b;++L){const y=E[L],C=y.start,z=y.count;for(let H=C,W=C+z;H<W;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const M=new P,_=new P,w=new P,A=new P;function R(L){w.fromBufferAttribute(r,L),A.copy(w);const b=a[L];M.copy(b),M.sub(w.multiplyScalar(w.dot(b))).normalize(),_.crossVectors(A,b);const C=_.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,C)}for(let L=0,b=E.length;L<b;++L){const y=E[L],C=y.start,z=y.count;for(let H=C,W=C+z;H<W;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new P,s=new P,o=new P,a=new P,l=new P,c=new P,u=new P,d=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let h=0;h<u;h++)f[g++]=c[p++]}return new Un(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dl=new wt,Mi=new ru,ds=new ja,Ul=new P,hs=new P,fs=new P,ps=new P,wo=new P,ms=new P,Nl=new P,gs=new P;class oe extends jt{constructor(e=new rn,t=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ms.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(wo.fromBufferAttribute(d,e),o?ms.addScaledVector(wo,u):ms.addScaledVector(wo.sub(t),u))}t.add(ms)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(s),Mi.copy(e.ray).recast(e.near),!(ds.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(ds,Ul)===null||Mi.origin.distanceToSquared(Ul)>(e.far-e.near)**2))&&(Dl.copy(s).invert(),Mi.copy(e.ray).applyMatrix4(Dl),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],h=o[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=E,w=M;_<w;_+=3){const A=a.getX(_),R=a.getX(_+1),L=a.getX(_+2);r=vs(this,h,e,n,c,u,d,A,R,L),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const E=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);r=vs(this,o,e,n,c,u,d,E,M,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],h=o[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=E,w=M;_<w;_+=3){const A=_,R=_+1,L=_+2;r=vs(this,h,e,n,c,u,d,A,R,L),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const E=m,M=m+1,_=m+2;r=vs(this,o,e,n,c,u,d,E,M,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function ph(i,e,t,n,r,s,o,a){let l;if(e.side===hn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===mi,a),l===null)return null;gs.copy(a),gs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(gs);return c<t.near||c>t.far?null:{distance:c,point:gs.clone(),object:i}}function vs(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,hs),i.getVertexPosition(l,fs),i.getVertexPosition(c,ps);const u=ph(i,e,t,n,hs,fs,ps,Nl);if(u){const d=new P;Tn.getBarycoord(Nl,hs,fs,ps,d),r&&(u.uv=Tn.getInterpolatedAttribute(r,a,l,c,d,new be)),s&&(u.uv1=Tn.getInterpolatedAttribute(s,a,l,c,d,new be)),o&&(u.normal=Tn.getInterpolatedAttribute(o,a,l,c,d,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new P,materialIndex:0};Tn.getNormal(hs,fs,ps,f.normal),u.face=f,u.barycoord=d}return u}class Jt extends rn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(d,2));function g(x,m,h,E,M,_,w,A,R,L,b){const y=_/R,C=w/L,z=_/2,H=w/2,W=A/2,K=R+1,$=L+1;let J=0,X=0;const he=new P;for(let ve=0;ve<$;ve++){const Pe=ve*C-H;for(let Ke=0;Ke<K;Ke++){const At=Ke*y-z;he[x]=At*E,he[m]=Pe*M,he[h]=W,c.push(he.x,he.y,he.z),he[x]=0,he[m]=0,he[h]=A>0?1:-1,u.push(he.x,he.y,he.z),d.push(Ke/R),d.push(1-ve/L),J+=1}}for(let ve=0;ve<L;ve++)for(let Pe=0;Pe<R;Pe++){const Ke=f+Pe+K*ve,At=f+Pe+K*(ve+1),vt=f+(Pe+1)+K*(ve+1),j=f+(Pe+1)+K*ve;l.push(Ke,At,j),l.push(At,vt,j),X+=6}a.addGroup(p,X,b),p+=X,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function an(i){const e={};for(let t=0;t<i.length;t++){const n=vr(i[t]);for(const r in n)e[r]=n[r]}return e}function mh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function lu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const gh={clone:vr,merge:an};var vh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_h=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends _r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vh,this.fragmentShader=_h,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vr(e.uniforms),this.uniformsGroups=mh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class cu extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new P,Ol=new be,Fl=new be;class xn extends cu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ro*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pa*2*Math.atan(Math.tan(ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,Ol,Fl),t.subVectors(Fl,Ol)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ro*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ki=-90,Zi=1;class xh extends jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(Ki,Zi,e,t);r.layers=this.layers,this.add(r);const s=new xn(Ki,Zi,e,t);s.layers=this.layers,this.add(s);const o=new xn(Ki,Zi,e,t);o.layers=this.layers,this.add(o);const a=new xn(Ki,Zi,e,t);a.layers=this.layers,this.add(a);const l=new xn(Ki,Zi,e,t);l.layers=this.layers,this.add(l);const c=new xn(Ki,Zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class uu extends ln{constructor(e=[],t=pr,n,r,s,o,a,l,c,u){super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yh extends Ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new uu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Jt(5,5,5),s=new gi({name:"CubemapFromEquirect",uniforms:vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:di});s.uniforms.tEquirect.value=t;const o=new oe(r,s),a=t.minFilter;return t.minFilter===Li&&(t.minFilter=Vn),new xh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class Bt extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bh={type:"move"};class Ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bh)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ka{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new et(e),this.density=t}clone(){return new Ka(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Sh extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Mh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ia,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new P;class Gs{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),r=pt(r,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class du extends _r{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ji;const Tr=new P,Qi=new P,er=new P,tr=new be,wr=new be,hu=new wt,_s=new P,Ar=new P,xs=new P,kl=new be,Co=new be,zl=new be;class Eh extends jt{constructor(e=new du){if(super(),this.isSprite=!0,this.type="Sprite",Ji===void 0){Ji=new rn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Mh(t,5);Ji.setIndex([0,1,2,0,2,3]),Ji.setAttribute("position",new Gs(n,3,0,!1)),Ji.setAttribute("uv",new Gs(n,2,3,!1))}this.geometry=Ji,this.material=e,this.center=new be(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qi.setFromMatrixScale(this.matrixWorld),hu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),er.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qi.multiplyScalar(-er.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;ys(_s.set(-.5,-.5,0),er,o,Qi,r,s),ys(Ar.set(.5,-.5,0),er,o,Qi,r,s),ys(xs.set(.5,.5,0),er,o,Qi,r,s),kl.set(0,0),Co.set(1,0),zl.set(1,1);let a=e.ray.intersectTriangle(_s,Ar,xs,!1,Tr);if(a===null&&(ys(Ar.set(-.5,.5,0),er,o,Qi,r,s),Co.set(0,1),a=e.ray.intersectTriangle(_s,xs,Ar,!1,Tr),a===null))return;const l=e.ray.origin.distanceTo(Tr);l<e.near||l>e.far||t.push({distance:l,point:Tr.clone(),uv:Tn.getInterpolation(Tr,_s,Ar,xs,kl,Co,zl,new be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ys(i,e,t,n,r,s){tr.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(wr.x=s*tr.x-r*tr.y,wr.y=r*tr.x+s*tr.y):wr.copy(tr),i.copy(e),i.x+=wr.x,i.y+=wr.y,i.applyMatrix4(hu)}const Ro=new P,Th=new P,wh=new Ye;class Ai{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ro.subVectors(n,t).cross(Th.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ro),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wh.getNormalMatrix(e),r=this.coplanarPoint(Ro).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new ja,Ah=new be(.5,.5),bs=new P;class Za{constructor(e=new Ai,t=new Ai,n=new Ai,r=new Ai,s=new Ai,o=new Ai){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],p=s[7],g=s[8],x=s[9],m=s[10],h=s[11],E=s[12],M=s[13],_=s[14],w=s[15];if(r[0].setComponents(c-o,p-u,h-g,w-E).normalize(),r[1].setComponents(c+o,p+u,h+g,w+E).normalize(),r[2].setComponents(c+a,p+d,h+x,w+M).normalize(),r[3].setComponents(c-a,p-d,h-x,w-M).normalize(),n)r[4].setComponents(l,f,m,_).normalize(),r[5].setComponents(c-l,p-f,h-m,w-_).normalize();else if(r[4].setComponents(c-l,p-f,h-m,w-_).normalize(),t===Gn)r[5].setComponents(c+l,p+f,h+m,w+_).normalize();else if(t===Hs)r[5].setComponents(l,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){Ei.center.set(0,0,0);const t=Ah.distanceTo(e.center);return Ei.radius=.7071067811865476+t,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(bs.x=r.normal.x>0?e.max.x:e.min.x,bs.y=r.normal.y>0?e.max.y:e.min.y,bs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ch extends ln{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fu extends ln{constructor(e,t,n=Ui,r,s,o,a=Dn,l=Dn,c,u=Hr,d=1){if(u!==Hr&&u!==Vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ya(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Di extends rn{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],u=t/2,d=Math.PI/2*e,f=t,p=2*d+f,g=n*2+s,x=r+1,m=new P,h=new P;for(let E=0;E<=g;E++){let M=0,_=0,w=0,A=0;if(E<=n){const b=E/n,y=b*Math.PI/2;_=-u-e*Math.cos(y),w=e*Math.sin(y),A=-e*Math.cos(y),M=b*d}else if(E<=n+s){const b=(E-n)/s;_=-u+b*t,w=e,A=0,M=d+b*f}else{const b=(E-n-s)/n,y=b*Math.PI/2;_=u+e*Math.sin(y),w=e*Math.cos(y),A=e*Math.sin(y),M=d+f+b*d}const R=Math.max(0,Math.min(1,M/p));let L=0;E===0?L=.5/r:E===g&&(L=-.5/r);for(let b=0;b<=r;b++){const y=b/r,C=y*Math.PI*2,z=Math.sin(C),H=Math.cos(C);h.x=-w*H,h.y=_,h.z=w*z,a.push(h.x,h.y,h.z),m.set(-w*H,A,w*z),m.normalize(),l.push(m.x,m.y,m.z),c.push(y+L,R)}if(E>0){const b=(E-1)*x;for(let y=0;y<r;y++){const C=b+y,z=b+y+1,H=E*x+y,W=E*x+y+1;o.push(C,z,H),o.push(z,W,H)}}}this.setIndex(o),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ot extends rn{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],p=[];let g=0;const x=[],m=n/2;let h=0;E(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(f,3)),this.setAttribute("uv",new gt(p,2));function E(){const _=new P,w=new P;let A=0;const R=(t-e)/n;for(let L=0;L<=s;L++){const b=[],y=L/s,C=y*(t-e)+e;for(let z=0;z<=r;z++){const H=z/r,W=H*l+a,K=Math.sin(W),$=Math.cos(W);w.x=C*K,w.y=-y*n+m,w.z=C*$,d.push(w.x,w.y,w.z),_.set(K,R,$).normalize(),f.push(_.x,_.y,_.z),p.push(H,1-y),b.push(g++)}x.push(b)}for(let L=0;L<r;L++)for(let b=0;b<s;b++){const y=x[b][L],C=x[b+1][L],z=x[b+1][L+1],H=x[b][L+1];(e>0||b!==0)&&(u.push(y,C,H),A+=3),(t>0||b!==s-1)&&(u.push(C,z,H),A+=3)}c.addGroup(h,A,0),h+=A}function M(_){const w=g,A=new be,R=new P;let L=0;const b=_===!0?e:t,y=_===!0?1:-1;for(let z=1;z<=r;z++)d.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),g++;const C=g;for(let z=0;z<=r;z++){const W=z/r*l+a,K=Math.cos(W),$=Math.sin(W);R.x=b*$,R.y=m*y,R.z=b*K,d.push(R.x,R.y,R.z),f.push(0,y,0),A.x=K*.5+.5,A.y=$*.5*y+.5,p.push(A.x,A.y),g++}for(let z=0;z<r;z++){const H=w+z,W=C+z;_===!0?u.push(W,W+1,H):u.push(W+1,W,H),L+=3}c.addGroup(h,L,_===!0?1:2),h+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ot(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qt extends ot{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Qt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $s extends rn{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),c(n),u(),this.setAttribute("position",new gt(s,3)),this.setAttribute("normal",new gt(s.slice(),3)),this.setAttribute("uv",new gt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const M=new P,_=new P,w=new P;for(let A=0;A<t.length;A+=3)p(t[A+0],M),p(t[A+1],_),p(t[A+2],w),l(M,_,w,E)}function l(E,M,_,w){const A=w+1,R=[];for(let L=0;L<=A;L++){R[L]=[];const b=E.clone().lerp(_,L/A),y=M.clone().lerp(_,L/A),C=A-L;for(let z=0;z<=C;z++)z===0&&L===A?R[L][z]=b:R[L][z]=b.clone().lerp(y,z/C)}for(let L=0;L<A;L++)for(let b=0;b<2*(A-L)-1;b++){const y=Math.floor(b/2);b%2===0?(f(R[L][y+1]),f(R[L+1][y]),f(R[L][y])):(f(R[L][y+1]),f(R[L+1][y+1]),f(R[L+1][y]))}}function c(E){const M=new P;for(let _=0;_<s.length;_+=3)M.x=s[_+0],M.y=s[_+1],M.z=s[_+2],M.normalize().multiplyScalar(E),s[_+0]=M.x,s[_+1]=M.y,s[_+2]=M.z}function u(){const E=new P;for(let M=0;M<s.length;M+=3){E.x=s[M+0],E.y=s[M+1],E.z=s[M+2];const _=m(E)/2/Math.PI+.5,w=h(E)/Math.PI+.5;o.push(_,1-w)}g(),d()}function d(){for(let E=0;E<o.length;E+=6){const M=o[E+0],_=o[E+2],w=o[E+4],A=Math.max(M,_,w),R=Math.min(M,_,w);A>.9&&R<.1&&(M<.2&&(o[E+0]+=1),_<.2&&(o[E+2]+=1),w<.2&&(o[E+4]+=1))}}function f(E){s.push(E.x,E.y,E.z)}function p(E,M){const _=E*3;M.x=e[_+0],M.y=e[_+1],M.z=e[_+2]}function g(){const E=new P,M=new P,_=new P,w=new P,A=new be,R=new be,L=new be;for(let b=0,y=0;b<s.length;b+=9,y+=6){E.set(s[b+0],s[b+1],s[b+2]),M.set(s[b+3],s[b+4],s[b+5]),_.set(s[b+6],s[b+7],s[b+8]),A.set(o[y+0],o[y+1]),R.set(o[y+2],o[y+3]),L.set(o[y+4],o[y+5]),w.copy(E).add(M).add(_).divideScalar(3);const C=m(w);x(A,y+0,E,C),x(R,y+2,M,C),x(L,y+4,_,C)}}function x(E,M,_,w){w<0&&E.x===1&&(o[M]=E.x-1),_.x===0&&_.z===0&&(o[M]=w/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function h(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.vertices,e.indices,e.radius,e.details)}}class Ja extends $s{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ja(e.radius,e.detail)}}class ti{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new be:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,r=[],s=[],o=[],a=new P,l=new wt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new P)}s[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Je(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Je(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class pu extends ti{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new be){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*d+this.aX,c=f*d+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Rh extends pu{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Qa(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const Ss=new P,Io=new Qa,Po=new Qa,Lo=new Qa;class mu extends ti{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new P){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Ss.subVectors(r[0],r[1]).add(r[0]),c=Ss);const d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Ss.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ss),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Io.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,g,x,m),Po.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,g,x,m),Lo.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Io.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),Po.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),Lo.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return n.set(Io.calc(l),Po.calc(l),Lo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Bl(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function Ih(i,e){const t=1-i;return t*t*e}function Ph(i,e){return 2*(1-i)*i*e}function Lh(i,e){return i*i*e}function Nr(i,e,t,n){return Ih(i,e)+Ph(i,t)+Lh(i,n)}function Dh(i,e){const t=1-i;return t*t*t*e}function Uh(i,e){const t=1-i;return 3*t*t*i*e}function Nh(i,e){return 3*(1-i)*i*i*e}function Oh(i,e){return i*i*i*e}function Or(i,e,t,n,r){return Dh(i,e)+Uh(i,t)+Nh(i,n)+Oh(i,r)}class Fh extends ti{constructor(e=new be,t=new be,n=new be,r=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new be){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Or(e,r.x,s.x,o.x,a.x),Or(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class kh extends ti{constructor(e=new P,t=new P,n=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new P){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Or(e,r.x,s.x,o.x,a.x),Or(e,r.y,s.y,o.y,a.y),Or(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zh extends ti{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bh extends ti{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hh extends ti{constructor(e=new be,t=new be,n=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new be){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Nr(e,r.x,s.x,o.x),Nr(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gu extends ti{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Nr(e,r.x,s.x,o.x),Nr(e,r.y,s.y,o.y),Nr(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vh extends ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return n.set(Bl(a,l.x,c.x,u.x,d.x),Bl(a,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new be().fromArray(r))}return this}}var Gh=Object.freeze({__proto__:null,ArcCurve:Rh,CatmullRomCurve3:mu,CubicBezierCurve:Fh,CubicBezierCurve3:kh,EllipseCurve:pu,LineCurve:zh,LineCurve3:Bh,QuadraticBezierCurve:Hh,QuadraticBezierCurve3:gu,SplineCurve:Vh});class Gr extends $s{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Gr(e.radius,e.detail)}}class Ks extends rn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,p=[],g=[],x=[],m=[];for(let h=0;h<u;h++){const E=h*f-o;for(let M=0;M<c;M++){const _=M*d-s;g.push(_,-E,0),x.push(0,0,1),m.push(M/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<a;E++){const M=E+c*h,_=E+c*(h+1),w=E+1+c*(h+1),A=E+1+c*h;p.push(M,_,A),p.push(_,w,A)}this.setIndex(p),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(x,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.width,e.height,e.widthSegments,e.heightSegments)}}class tt extends rn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new P,f=new P,p=[],g=[],x=[],m=[];for(let h=0;h<=n;h++){const E=[],M=h/n;let _=0;h===0&&o===0?_=.5/t:h===n&&l===Math.PI&&(_=-.5/t);for(let w=0;w<=t;w++){const A=w/t;d.x=-e*Math.cos(r+A*s)*Math.sin(o+M*a),d.y=e*Math.cos(o+M*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+M*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(A+_,1-M),E.push(c++)}u.push(E)}for(let h=0;h<n;h++)for(let E=0;E<t;E++){const M=u[h][E+1],_=u[h][E],w=u[h+1][E],A=u[h+1][E+1];(h!==0||o>0)&&p.push(M,_,A),(h!==n-1||l<Math.PI)&&p.push(_,w,A)}this.setIndex(p),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(x,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Yt extends rn{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new P,d=new P,f=new P;for(let p=0;p<=n;p++)for(let g=0;g<=r;g++){const x=g/r*s,m=p/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=r;g++){const x=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,h=(r+1)*(p-1)+g,E=(r+1)*p+g;o.push(x,m,E),o.push(m,h,E)}this.setIndex(o),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yt(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class el extends rn{constructor(e=1,t=.4,n=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:o},n=Math.floor(n),r=Math.floor(r);const a=[],l=[],c=[],u=[],d=new P,f=new P,p=new P,g=new P,x=new P,m=new P,h=new P;for(let M=0;M<=n;++M){const _=M/n*s*Math.PI*2;E(_,s,o,e,p),E(_+.01,s,o,e,g),m.subVectors(g,p),h.addVectors(g,p),x.crossVectors(m,h),h.crossVectors(x,m),x.normalize(),h.normalize();for(let w=0;w<=r;++w){const A=w/r*Math.PI*2,R=-t*Math.cos(A),L=t*Math.sin(A);d.x=p.x+(R*h.x+L*x.x),d.y=p.y+(R*h.y+L*x.y),d.z=p.z+(R*h.z+L*x.z),l.push(d.x,d.y,d.z),f.subVectors(d,p).normalize(),c.push(f.x,f.y,f.z),u.push(M/n),u.push(w/r)}}for(let M=1;M<=n;M++)for(let _=1;_<=r;_++){const w=(r+1)*(M-1)+(_-1),A=(r+1)*M+(_-1),R=(r+1)*M+_,L=(r+1)*(M-1)+_;a.push(w,A,L),a.push(A,R,L)}this.setIndex(a),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(u,2));function E(M,_,w,A,R){const L=Math.cos(M),b=Math.sin(M),y=w/_*M,C=Math.cos(y);R.x=A*(2+C)*.5*L,R.y=A*(2+C)*b*.5,R.z=A*Math.sin(y)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class tl extends rn{constructor(e=new gu(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,l=new P,c=new be;let u=new P;const d=[],f=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(f,3)),this.setAttribute("uv",new gt(p,2));function x(){for(let M=0;M<t;M++)m(M);m(s===!1?t:0),E(),h()}function m(M){u=e.getPointAt(M/t,u);const _=o.normals[M],w=o.binormals[M];for(let A=0;A<=r;A++){const R=A/r*Math.PI*2,L=Math.sin(R),b=-Math.cos(R);l.x=b*_.x+L*w.x,l.y=b*_.y+L*w.y,l.z=b*_.z+L*w.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,d.push(a.x,a.y,a.z)}}function h(){for(let M=1;M<=t;M++)for(let _=1;_<=r;_++){const w=(r+1)*(M-1)+(_-1),A=(r+1)*M+(_-1),R=(r+1)*M+_,L=(r+1)*(M-1)+_;g.push(w,A,L),g.push(A,R,L)}}function E(){for(let M=0;M<=t;M++)for(let _=0;_<=r;_++)c.x=M/t,c.y=_/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new tl(new Gh[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class vu extends _r{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eu,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wh extends _r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xh extends _r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class nl extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class qh extends nl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Do=new wt,Hl=new P,Vl=new P;class _u{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Za,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Hl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hl),Vl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vl),t.updateMatrixWorld(),Do.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Do,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Do)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Gl=new wt,Cr=new P,Uo=new P;class Yh extends _u{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Cr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Cr),Uo.copy(n.position),Uo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Uo),n.updateMatrixWorld(),r.makeTranslation(-Cr.x,-Cr.y,-Cr.z),Gl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gl,n.coordinateSystem,n.reversedDepth)}}class vi extends nl{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Yh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class xu extends cu{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class jh extends _u{constructor(){super(new xu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $h extends nl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new jh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Kh extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Zh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Wl=new wt;class Jh{constructor(e,t,n=0,r=1/0){this.ray=new ru(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new $a,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wl),this}intersectObject(e,t=!0,n=[]){return La(e,this,n,t),n.sort(Xl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)La(e[r],this,n,t);return n.sort(Xl),n}}function Xl(i,e){return i.distance-e.distance}function La(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)La(s[o],e,t,!0)}}class Qh extends Fi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function ql(i,e,t,n){const r=ef(n);switch(t){case $c:return i*e;case Zc:return i*e/r.components*r.byteLength;case Wa:return i*e/r.components*r.byteLength;case Jc:return i*e*2/r.components*r.byteLength;case Xa:return i*e*2/r.components*r.byteLength;case Kc:return i*e*3/r.components*r.byteLength;case Ln:return i*e*4/r.components*r.byteLength;case qa:return i*e*4/r.components*r.byteLength;case Ps:case Ls:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ds:case Us:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sa:case aa:return Math.max(i,16)*Math.max(e,8)/4;case ra:case oa:return Math.max(i,8)*Math.max(e,8)/2;case la:case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ha:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case fa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ma:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ga:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case va:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case _a:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ya:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ba:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ma:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ea:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ns:case Ta:case wa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Qc:case Aa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ca:case Ra:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ef(i){switch(i){case Wn:case qc:return{byteLength:1,components:1};case zr:case Yc:case qr:return{byteLength:2,components:1};case Va:case Ga:return{byteLength:2,components:4};case Ui:case Ha:case Jn:return{byteLength:4,components:1};case jc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ba);function yu(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function tf(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const x=d[p];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var nf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rf=`#ifdef USE_ALPHAHASH
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
#endif`,sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,af=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cf=`#ifdef USE_AOMAP
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
#endif`,uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,df=`#ifdef USE_BATCHING
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
#endif`,hf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ff=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gf=`#ifdef USE_IRIDESCENCE
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
#endif`,vf=`#ifdef USE_BUMPMAP
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
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wf=`#define PI 3.141592653589793
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
} // validated`,Af=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cf=`vec3 transformedNormal = objectNormal;
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
#endif`,Rf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,If=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Df="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nf=`#ifdef USE_ENVMAP
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
#endif`,Of=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ff=`#ifdef USE_ENVMAP
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
#endif`,kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
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
#endif`,Bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wf=`#ifdef USE_GRADIENTMAP
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
}`,Xf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jf=`uniform bool receiveShadow;
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
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,Kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ep=`PhysicalMaterial material;
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
#endif`,tp=`struct PhysicalMaterial {
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
}`,np=`
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
#endif`,ip=`#if defined( RE_IndirectDiffuse )
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
#endif`,rp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,op=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ap=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,up=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hp=`#if defined( USE_POINTS_UV )
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
#endif`,fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_p=`#ifdef USE_MORPHTARGETS
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
#endif`,xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tp=`#ifdef USE_NORMALMAP
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
#endif`,wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ap=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Up=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hp=`float getShadowMask() {
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
}`,Vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gp=`#ifdef USE_SKINNING
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
#endif`,Wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xp=`#ifdef USE_SKINNING
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
#endif`,qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$p=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kp=`#ifdef USE_TRANSMISSION
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
#endif`,Zp=`#ifdef USE_TRANSMISSION
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
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,im=`uniform sampler2D t2D;
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
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`#include <common>
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
}`,cm=`#if DEPTH_PACKING == 3200
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
}`,um=`#define DISTANCE
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
}`,dm=`#define DISTANCE
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
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`uniform float scale;
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
}`,mm=`uniform vec3 diffuse;
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
}`,gm=`#include <common>
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
}`,vm=`uniform vec3 diffuse;
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
}`,_m=`#define LAMBERT
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
}`,xm=`#define LAMBERT
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
}`,ym=`#define MATCAP
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
}`,bm=`#define MATCAP
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
}`,Sm=`#define NORMAL
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
}`,Mm=`#define NORMAL
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
}`,Em=`#define PHONG
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
}`,Tm=`#define PHONG
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
}`,wm=`#define STANDARD
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
}`,Am=`#define STANDARD
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
}`,Cm=`#define TOON
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
}`,Rm=`#define TOON
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
}`,Im=`uniform float size;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Lm=`#include <common>
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
}`,Dm=`uniform vec3 color;
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
}`,Um=`uniform float rotation;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:nf,alphahash_pars_fragment:rf,alphamap_fragment:sf,alphamap_pars_fragment:of,alphatest_fragment:af,alphatest_pars_fragment:lf,aomap_fragment:cf,aomap_pars_fragment:uf,batching_pars_vertex:df,batching_vertex:hf,begin_vertex:ff,beginnormal_vertex:pf,bsdfs:mf,iridescence_fragment:gf,bumpmap_pars_fragment:vf,clipping_planes_fragment:_f,clipping_planes_pars_fragment:xf,clipping_planes_pars_vertex:yf,clipping_planes_vertex:bf,color_fragment:Sf,color_pars_fragment:Mf,color_pars_vertex:Ef,color_vertex:Tf,common:wf,cube_uv_reflection_fragment:Af,defaultnormal_vertex:Cf,displacementmap_pars_vertex:Rf,displacementmap_vertex:If,emissivemap_fragment:Pf,emissivemap_pars_fragment:Lf,colorspace_fragment:Df,colorspace_pars_fragment:Uf,envmap_fragment:Nf,envmap_common_pars_fragment:Of,envmap_pars_fragment:Ff,envmap_pars_vertex:kf,envmap_physical_pars_fragment:$f,envmap_vertex:zf,fog_vertex:Bf,fog_pars_vertex:Hf,fog_fragment:Vf,fog_pars_fragment:Gf,gradientmap_pars_fragment:Wf,lightmap_pars_fragment:Xf,lights_lambert_fragment:qf,lights_lambert_pars_fragment:Yf,lights_pars_begin:jf,lights_toon_fragment:Kf,lights_toon_pars_fragment:Zf,lights_phong_fragment:Jf,lights_phong_pars_fragment:Qf,lights_physical_fragment:ep,lights_physical_pars_fragment:tp,lights_fragment_begin:np,lights_fragment_maps:ip,lights_fragment_end:rp,logdepthbuf_fragment:sp,logdepthbuf_pars_fragment:op,logdepthbuf_pars_vertex:ap,logdepthbuf_vertex:lp,map_fragment:cp,map_pars_fragment:up,map_particle_fragment:dp,map_particle_pars_fragment:hp,metalnessmap_fragment:fp,metalnessmap_pars_fragment:pp,morphinstance_vertex:mp,morphcolor_vertex:gp,morphnormal_vertex:vp,morphtarget_pars_vertex:_p,morphtarget_vertex:xp,normal_fragment_begin:yp,normal_fragment_maps:bp,normal_pars_fragment:Sp,normal_pars_vertex:Mp,normal_vertex:Ep,normalmap_pars_fragment:Tp,clearcoat_normal_fragment_begin:wp,clearcoat_normal_fragment_maps:Ap,clearcoat_pars_fragment:Cp,iridescence_pars_fragment:Rp,opaque_fragment:Ip,packing:Pp,premultiplied_alpha_fragment:Lp,project_vertex:Dp,dithering_fragment:Up,dithering_pars_fragment:Np,roughnessmap_fragment:Op,roughnessmap_pars_fragment:Fp,shadowmap_pars_fragment:kp,shadowmap_pars_vertex:zp,shadowmap_vertex:Bp,shadowmask_pars_fragment:Hp,skinbase_vertex:Vp,skinning_pars_vertex:Gp,skinning_vertex:Wp,skinnormal_vertex:Xp,specularmap_fragment:qp,specularmap_pars_fragment:Yp,tonemapping_fragment:jp,tonemapping_pars_fragment:$p,transmission_fragment:Kp,transmission_pars_fragment:Zp,uv_pars_fragment:Jp,uv_pars_vertex:Qp,uv_vertex:em,worldpos_vertex:tm,background_vert:nm,background_frag:im,backgroundCube_vert:rm,backgroundCube_frag:sm,cube_vert:om,cube_frag:am,depth_vert:lm,depth_frag:cm,distanceRGBA_vert:um,distanceRGBA_frag:dm,equirect_vert:hm,equirect_frag:fm,linedashed_vert:pm,linedashed_frag:mm,meshbasic_vert:gm,meshbasic_frag:vm,meshlambert_vert:_m,meshlambert_frag:xm,meshmatcap_vert:ym,meshmatcap_frag:bm,meshnormal_vert:Sm,meshnormal_frag:Mm,meshphong_vert:Em,meshphong_frag:Tm,meshphysical_vert:wm,meshphysical_frag:Am,meshtoon_vert:Cm,meshtoon_frag:Rm,points_vert:Im,points_frag:Pm,shadow_vert:Lm,shadow_frag:Dm,sprite_vert:Um,sprite_frag:Nm},ue={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Bn={basic:{uniforms:an([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:an([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new et(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:an([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:an([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:an([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new et(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:an([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:an([ue.points,ue.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:an([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:an([ue.common,ue.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:an([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:an([ue.sprite,ue.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:an([ue.common,ue.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:an([ue.lights,ue.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Bn.physical={uniforms:an([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Ms={r:0,b:0,g:0},Ti=new wn,Om=new wt;function Fm(i,e,t,n,r,s,o){const a=new et(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function g(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?t:e).get(_)),_}function x(M){let _=!1;const w=g(M);w===null?h(a,l):w&&w.isColor&&(h(w,1),_=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,_){const w=g(_);w&&(w.isCubeTexture||w.mapping===js)?(u===void 0&&(u=new oe(new Jt(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:vr(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ti.copy(_.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Om.makeRotationFromEuler(Ti)),u.material.toneMapped=st.getTransfer(w.colorSpace)!==ft,(d!==w||f!==w.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=w,f=w.version,p=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new oe(new Ks(2,2),new gi({name:"BackgroundMaterial",uniforms:vr(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=st.getTransfer(w.colorSpace)!==ft,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||f!==w.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=w,f=w.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function h(M,_){M.getRGB(Ms,lu(i)),n.buffers.color.setClear(Ms.r,Ms.g,Ms.b,_,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),l=_,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,h(a,l)},render:x,addToRenderList:m,dispose:E}}function km(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(y,C,z,H,W){let K=!1;const $=d(H,z,C);s!==$&&(s=$,c(s.object)),K=p(y,H,z,W),K&&g(y,H,z,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,_(y,C,z,H),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function d(y,C,z){const H=z.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let K=W[C.id];K===void 0&&(K={},W[C.id]=K);let $=K[H];return $===void 0&&($=f(l()),K[H]=$),$}function f(y){const C=[],z=[],H=[];for(let W=0;W<t;W++)C[W]=0,z[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:H,object:y,attributes:{},index:null}}function p(y,C,z,H){const W=s.attributes,K=C.attributes;let $=0;const J=z.getAttributes();for(const X in J)if(J[X].location>=0){const ve=W[X];let Pe=K[X];if(Pe===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(Pe=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(Pe=y.instanceColor)),ve===void 0||ve.attribute!==Pe||Pe&&ve.data!==Pe.data)return!0;$++}return s.attributesNum!==$||s.index!==H}function g(y,C,z,H){const W={},K=C.attributes;let $=0;const J=z.getAttributes();for(const X in J)if(J[X].location>=0){let ve=K[X];ve===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor));const Pe={};Pe.attribute=ve,ve&&ve.data&&(Pe.data=ve.data),W[X]=Pe,$++}s.attributes=W,s.attributesNum=$,s.index=H}function x(){const y=s.newAttributes;for(let C=0,z=y.length;C<z;C++)y[C]=0}function m(y){h(y,0)}function h(y,C){const z=s.newAttributes,H=s.enabledAttributes,W=s.attributeDivisors;z[y]=1,H[y]===0&&(i.enableVertexAttribArray(y),H[y]=1),W[y]!==C&&(i.vertexAttribDivisor(y,C),W[y]=C)}function E(){const y=s.newAttributes,C=s.enabledAttributes;for(let z=0,H=C.length;z<H;z++)C[z]!==y[z]&&(i.disableVertexAttribArray(z),C[z]=0)}function M(y,C,z,H,W,K,$){$===!0?i.vertexAttribIPointer(y,C,z,W,K):i.vertexAttribPointer(y,C,z,H,W,K)}function _(y,C,z,H){x();const W=H.attributes,K=z.getAttributes(),$=C.defaultAttributeValues;for(const J in K){const X=K[J];if(X.location>=0){let he=W[J];if(he===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(he=y.instanceColor)),he!==void 0){const ve=he.normalized,Pe=he.itemSize,Ke=e.get(he);if(Ke===void 0)continue;const At=Ke.buffer,vt=Ke.type,j=Ke.bytesPerElement,fe=vt===i.INT||vt===i.UNSIGNED_INT||he.gpuType===Ha;if(he.isInterleavedBufferAttribute){const se=he.data,Oe=se.stride,Fe=he.offset;if(se.isInstancedInterleavedBuffer){for(let Ge=0;Ge<X.locationSize;Ge++)h(X.location+Ge,se.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ge=0;Ge<X.locationSize;Ge++)m(X.location+Ge);i.bindBuffer(i.ARRAY_BUFFER,At);for(let Ge=0;Ge<X.locationSize;Ge++)M(X.location+Ge,Pe/X.locationSize,vt,ve,Oe*j,(Fe+Pe/X.locationSize*Ge)*j,fe)}else{if(he.isInstancedBufferAttribute){for(let se=0;se<X.locationSize;se++)h(X.location+se,he.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let se=0;se<X.locationSize;se++)m(X.location+se);i.bindBuffer(i.ARRAY_BUFFER,At);for(let se=0;se<X.locationSize;se++)M(X.location+se,Pe/X.locationSize,vt,ve,Pe*j,Pe/X.locationSize*se*j,fe)}}else if($!==void 0){const ve=$[J];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(X.location,ve);break;case 3:i.vertexAttrib3fv(X.location,ve);break;case 4:i.vertexAttrib4fv(X.location,ve);break;default:i.vertexAttrib1fv(X.location,ve)}}}}E()}function w(){L();for(const y in n){const C=n[y];for(const z in C){const H=C[z];for(const W in H)u(H[W].object),delete H[W];delete C[z]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const z in C){const H=C[z];for(const W in H)u(H[W].object),delete H[W];delete C[z]}delete n[y.id]}function R(y){for(const C in n){const z=n[C];if(z[y.id]===void 0)continue;const H=z[y.id];for(const W in H)u(H[W].object),delete H[W];delete z[y.id]}}function L(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:b,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function zm(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,n,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*f[x];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Bm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Ln&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===qr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Wn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Jn&&!L)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:w,maxSamples:A}}function Hm(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Ai,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||r;return r=f,n=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,h=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const E=s?0:n,M=E*4;let _=h.clippingState||null;l.value=_,_=u(g,f,M,p);for(let w=0;w!==M;++w)_[w]=t[w];h.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,p,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const h=p+x*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<h)&&(m=new Float32Array(h));for(let M=0,_=p;M!==x;++M,_+=4)o.copy(d[M]).applyMatrix4(E,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Vm(i){let e=new WeakMap;function t(o,a){return a===ea?o.mapping=pr:a===ta&&(o.mapping=mr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ea||a===ta)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new yh(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const ar=4,Yl=[.125,.215,.35,.446,.526,.582],Ii=20,No=new xu,jl=new et;let Oo=null,Fo=0,ko=0,zo=!1;const Ci=(1+Math.sqrt(5))/2,nr=1/Ci,$l=[new P(-Ci,nr,0),new P(Ci,nr,0),new P(-nr,0,Ci),new P(nr,0,Ci),new P(0,Ci,-nr),new P(0,Ci,nr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Gm=new P;class Kl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=Gm}=s;Oo=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oo,Fo,ko),this._renderer.xr.enabled=zo,e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pr||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oo=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:qr,format:Ln,colorSpace:gr,depthBuffer:!1},r=Zl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wm(s)),this._blurMaterial=Xm(s,e,t)}return r}_compileMaterial(e){const t=new oe(this._lodPlanes[0],e);this._renderer.compile(t,No)}_sceneToCubeUV(e,t,n,r,s){const l=new xn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(jl),d.toneMapping=hi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const x=new ei({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),m=new oe(new Jt,x);let h=!1;const E=e.background;E?E.isColor&&(x.color.copy(E),e.background=null,h=!0):(x.color.copy(jl),h=!0);for(let M=0;M<6;M++){const _=M%3;_===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):_===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const w=this._cubeSize;Es(r,_*w,M>2?w:0,w,w),d.setRenderTarget(r),h&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===pr||e.mapping===mr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new oe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Es(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,No)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=$l[(r-s-1)%$l.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new oe(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ii-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Ii;m>Ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);const h=[];let E=0;for(let R=0;R<Ii;++R){const L=R/x,b=Math.exp(-L*L/2);h.push(b),R===0?E+=b:R<m&&(E+=2*b)}for(let R=0;R<h.length;R++)h[R]=h[R]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const _=this._sizeLods[r],w=3*_*(r>M-ar?r-M+ar:0),A=4*(this._cubeSize-_);Es(t,w,A,3*_,2*_),l.setRenderTarget(t),l.render(d,No)}}function Wm(i){const e=[],t=[],n=[];let r=i;const s=i-ar+1+Yl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-ar?l=Yl[o-i+ar-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,x=3,m=2,h=1,E=new Float32Array(x*g*p),M=new Float32Array(m*g*p),_=new Float32Array(h*g*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,L=A>2?0:-1,b=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];E.set(b,x*g*A),M.set(f,m*g*A);const y=[A,A,A,A,A,A];_.set(y,h*g*A)}const w=new rn;w.setAttribute("position",new Un(E,x)),w.setAttribute("uv",new Un(M,m)),w.setAttribute("faceIndex",new Un(_,h)),e.push(w),r>ar&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zl(i,e,t){const n=new Ni(i,e,t);return n.texture.mapping=js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Xm(i,e,t){const n=new Float32Array(Ii),r=new P(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:il(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Jl(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Ql(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function il(){return`

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
	`}function qm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ea||l===ta,u=l===pr||l===mr;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Kl(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Kl(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ym(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ur("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function jm(i,e,t,n){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,g=d.attributes.position;let x=0;if(p!==null){const E=p.array;x=p.version;for(let M=0,_=E.length;M<_;M+=3){const w=E[M+0],A=E[M+1],R=E[M+2];f.push(w,A,A,R,R,w)}}else if(g!==void 0){const E=g.array;x=g.version;for(let M=0,_=E.length/3-1;M<_;M+=3){const w=M+0,A=M+1,R=M+2;f.push(w,A,A,R,R,w)}}else return;const m=new(nu(f)?au:ou)(f,1);m.version=x;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function $m(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,s,f*o),t.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,f*o,g),t.update(p,n,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,n,1)}function d(f,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,x,0,g);let h=0;for(let E=0;E<g;E++)h+=p[E]*x[E];t.update(h,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Km(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Zm(i,e,t){const n=new WeakMap,r=new mt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let y=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let w=a.attributes.position.count*_,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*A*4*d),L=new iu(R,w,A,d);L.type=Jn,L.needsUpdate=!0;const b=_*4;for(let C=0;C<d;C++){const z=h[C],H=E[C],W=M[C],K=w*A*4*C;for(let $=0;$<z.count;$++){const J=$*b;g===!0&&(r.fromBufferAttribute(z,$),R[K+J+0]=r.x,R[K+J+1]=r.y,R[K+J+2]=r.z,R[K+J+3]=0),x===!0&&(r.fromBufferAttribute(H,$),R[K+J+4]=r.x,R[K+J+5]=r.y,R[K+J+6]=r.z,R[K+J+7]=0),m===!0&&(r.fromBufferAttribute(W,$),R[K+J+8]=r.x,R[K+J+9]=r.y,R[K+J+10]=r.z,R[K+J+11]=W.itemSize===4?r.w:1)}}f={count:d,texture:L,size:new be(w,A)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Jm(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const bu=new ln,ec=new fu(1,1),Su=new iu,Mu=new ih,Eu=new uu,tc=[],nc=[],ic=new Float32Array(16),rc=new Float32Array(9),sc=new Float32Array(4);function xr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=tc[r];if(s===void 0&&(s=new Float32Array(r),tc[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Zs(i,e){let t=nc[e];t===void 0&&(t=new Int32Array(e),nc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Qm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function e0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function t0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function n0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function i0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;sc.set(n),i.uniformMatrix2fv(this.addr,!1,sc),Vt(t,n)}}function r0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;rc.set(n),i.uniformMatrix3fv(this.addr,!1,rc),Vt(t,n)}}function s0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;ic.set(n),i.uniformMatrix4fv(this.addr,!1,ic),Vt(t,n)}}function o0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function a0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function l0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function c0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function u0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function d0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function h0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function f0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function p0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ec.compareFunction=tu,s=ec):s=bu,t.setTexture2D(e||s,r)}function m0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Mu,r)}function g0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Eu,r)}function v0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Su,r)}function _0(i){switch(i){case 5126:return Qm;case 35664:return e0;case 35665:return t0;case 35666:return n0;case 35674:return i0;case 35675:return r0;case 35676:return s0;case 5124:case 35670:return o0;case 35667:case 35671:return a0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return u0;case 36294:return d0;case 36295:return h0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return v0}}function x0(i,e){i.uniform1fv(this.addr,e)}function y0(i,e){const t=xr(e,this.size,2);i.uniform2fv(this.addr,t)}function b0(i,e){const t=xr(e,this.size,3);i.uniform3fv(this.addr,t)}function S0(i,e){const t=xr(e,this.size,4);i.uniform4fv(this.addr,t)}function M0(i,e){const t=xr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function E0(i,e){const t=xr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function T0(i,e){const t=xr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function w0(i,e){i.uniform1iv(this.addr,e)}function A0(i,e){i.uniform2iv(this.addr,e)}function C0(i,e){i.uniform3iv(this.addr,e)}function R0(i,e){i.uniform4iv(this.addr,e)}function I0(i,e){i.uniform1uiv(this.addr,e)}function P0(i,e){i.uniform2uiv(this.addr,e)}function L0(i,e){i.uniform3uiv(this.addr,e)}function D0(i,e){i.uniform4uiv(this.addr,e)}function U0(i,e,t){const n=this.cache,r=e.length,s=Zs(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||bu,s[o])}function N0(i,e,t){const n=this.cache,r=e.length,s=Zs(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Mu,s[o])}function O0(i,e,t){const n=this.cache,r=e.length,s=Zs(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Eu,s[o])}function F0(i,e,t){const n=this.cache,r=e.length,s=Zs(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Su,s[o])}function k0(i){switch(i){case 5126:return x0;case 35664:return y0;case 35665:return b0;case 35666:return S0;case 35674:return M0;case 35675:return E0;case 35676:return T0;case 5124:case 35670:return w0;case 35667:case 35671:return A0;case 35668:case 35672:return C0;case 35669:case 35673:return R0;case 5125:return I0;case 36294:return P0;case 36295:return L0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return U0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return F0}}class z0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_0(t.type)}}class B0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=k0(t.type)}}class H0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Bo=/(\w+)(\])?(\[|\.)?/g;function oc(i,e){i.seq.push(e),i.map[e.id]=e}function V0(i,e,t){const n=i.name,r=n.length;for(Bo.lastIndex=0;;){const s=Bo.exec(n),o=Bo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){oc(t,c===void 0?new z0(a,i,e):new B0(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new H0(a),oc(t,d)),t=d}}}class Os{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);V0(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function ac(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const G0=37297;let W0=0;function X0(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const lc=new Ye;function q0(i){st._getMatrix(lc,st.workingColorSpace,i);const e=`mat3( ${lc.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case Bs:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function cc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+X0(i.getShaderSource(e),a)}else return s}function Y0(i,e){const t=q0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function j0(i,e){let t;switch(e){case Pd:t="Linear";break;case Ld:t="Reinhard";break;case Dd:t="Cineon";break;case Ud:t="ACESFilmic";break;case Od:t="AgX";break;case Fd:t="Neutral";break;case Nd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ts=new P;function $0(){st.getLuminanceCoefficients(Ts);const i=Ts.x.toFixed(4),e=Ts.y.toFixed(4),t=Ts.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function Z0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function J0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ir(i){return i!==""}function uc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Q0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(i){return i.replace(Q0,tg)}const eg=new Map;function tg(i,e){let t=$e[e];if(t===void 0){const n=eg.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Da(t)}const ng=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hc(i){return i.replace(ng,ig)}function ig(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function rg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Gc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function sg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case pr:case mr:e="ENVMAP_TYPE_CUBE";break;case js:e="ENVMAP_TYPE_CUBE_UV";break}return e}function og(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===mr&&(e="ENVMAP_MODE_REFRACTION"),e}function ag(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wc:e="ENVMAP_BLENDING_MULTIPLY";break;case Rd:e="ENVMAP_BLENDING_MIX";break;case Id:e="ENVMAP_BLENDING_ADD";break}return e}function lg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function cg(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=rg(t),c=sg(t),u=og(t),d=ag(t),f=lg(t),p=K0(t),g=Z0(s),x=r.createProgram();let m,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),h.length>0&&(h+=`
`)):(m=[fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),h=[fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?$e.tonemapping_pars_fragment:"",t.toneMapping!==hi?j0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Y0("linearToOutputTexel",t.outputColorSpace),$0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),o=Da(o),o=uc(o,t),o=dc(o,t),a=Da(a),a=uc(a,t),a=dc(a,t),o=hc(o),a=hc(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const M=E+m+o,_=E+h+a,w=ac(r,r.VERTEX_SHADER,M),A=ac(r,r.FRAGMENT_SHADER,_);r.attachShader(x,w),r.attachShader(x,A),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(C){if(i.debug.checkShaderErrors){const z=r.getProgramInfoLog(x)||"",H=r.getShaderInfoLog(w)||"",W=r.getShaderInfoLog(A)||"",K=z.trim(),$=H.trim(),J=W.trim();let X=!0,he=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,w,A);else{const ve=cc(r,w,"vertex"),Pe=cc(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+K+`
`+ve+`
`+Pe)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):($===""||J==="")&&(he=!1);he&&(C.diagnostics={runnable:X,programLog:K,vertexShader:{log:$,prefix:m},fragmentShader:{log:J,prefix:h}})}r.deleteShader(w),r.deleteShader(A),L=new Os(r,x),b=J0(r,x)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,G0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=W0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=A,this}let ug=0;class dg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new hg(e),t.set(e,n)),n}}class hg{constructor(e){this.id=ug++,this.code=e,this.usedTimes=0}}function fg(i,e,t,n,r,s,o){const a=new $a,l=new dg,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,C,z,H){const W=z.fog,K=H.geometry,$=b.isMeshStandardMaterial?z.environment:null,J=(b.isMeshStandardMaterial?t:e).get(b.envMap||$),X=J&&J.mapping===js?J.image.height:null,he=g[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const ve=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Pe=ve!==void 0?ve.length:0;let Ke=0;K.morphAttributes.position!==void 0&&(Ke=1),K.morphAttributes.normal!==void 0&&(Ke=2),K.morphAttributes.color!==void 0&&(Ke=3);let At,vt,j,fe;if(he){const ct=Bn[he];At=ct.vertexShader,vt=ct.fragmentShader}else At=b.vertexShader,vt=b.fragmentShader,l.update(b),j=l.getVertexShaderID(b),fe=l.getFragmentShaderID(b);const se=i.getRenderTarget(),Oe=i.state.buffers.depth.getReversed(),Fe=H.isInstancedMesh===!0,Ge=H.isBatchedMesh===!0,Ut=!!b.map,it=!!b.matcap,D=!!J,bt=!!b.aoMap,De=!!b.lightMap,at=!!b.bumpMap,Ie=!!b.normalMap,Ct=!!b.displacementMap,ye=!!b.emissiveMap,Ze=!!b.metalnessMap,Xt=!!b.roughnessMap,Nt=b.anisotropy>0,T=b.clearcoat>0,v=b.dispersion>0,F=b.iridescence>0,Y=b.sheen>0,Q=b.transmission>0,q=Nt&&!!b.anisotropyMap,Ce=T&&!!b.clearcoatMap,re=T&&!!b.clearcoatNormalMap,Te=T&&!!b.clearcoatRoughnessMap,we=F&&!!b.iridescenceMap,ne=F&&!!b.iridescenceThicknessMap,ge=Y&&!!b.sheenColorMap,Be=Y&&!!b.sheenRoughnessMap,Ae=!!b.specularMap,pe=!!b.specularColorMap,qe=!!b.specularIntensityMap,U=Q&&!!b.transmissionMap,ie=Q&&!!b.thicknessMap,ae=!!b.gradientMap,xe=!!b.alphaMap,ee=b.alphaTest>0,Z=!!b.alphaHash,Me=!!b.extensions;let We=hi;b.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(We=i.toneMapping);const St={shaderID:he,shaderType:b.type,shaderName:b.name,vertexShader:At,fragmentShader:vt,defines:b.defines,customVertexShaderID:j,customFragmentShaderID:fe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ge,batchingColor:Ge&&H._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&H.instanceColor!==null,instancingMorph:Fe&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:gr,alphaToCoverage:!!b.alphaToCoverage,map:Ut,matcap:it,envMap:D,envMapMode:D&&J.mapping,envMapCubeUVHeight:X,aoMap:bt,lightMap:De,bumpMap:at,normalMap:Ie,displacementMap:f&&Ct,emissiveMap:ye,normalMapObjectSpace:Ie&&b.normalMapType===Hd,normalMapTangentSpace:Ie&&b.normalMapType===eu,metalnessMap:Ze,roughnessMap:Xt,anisotropy:Nt,anisotropyMap:q,clearcoat:T,clearcoatMap:Ce,clearcoatNormalMap:re,clearcoatRoughnessMap:Te,dispersion:v,iridescence:F,iridescenceMap:we,iridescenceThicknessMap:ne,sheen:Y,sheenColorMap:ge,sheenRoughnessMap:Be,specularMap:Ae,specularColorMap:pe,specularIntensityMap:qe,transmission:Q,transmissionMap:U,thicknessMap:ie,gradientMap:ae,opaque:b.transparent===!1&&b.blending===cr&&b.alphaToCoverage===!1,alphaMap:xe,alphaTest:ee,alphaHash:Z,combine:b.combine,mapUv:Ut&&x(b.map.channel),aoMapUv:bt&&x(b.aoMap.channel),lightMapUv:De&&x(b.lightMap.channel),bumpMapUv:at&&x(b.bumpMap.channel),normalMapUv:Ie&&x(b.normalMap.channel),displacementMapUv:Ct&&x(b.displacementMap.channel),emissiveMapUv:ye&&x(b.emissiveMap.channel),metalnessMapUv:Ze&&x(b.metalnessMap.channel),roughnessMapUv:Xt&&x(b.roughnessMap.channel),anisotropyMapUv:q&&x(b.anisotropyMap.channel),clearcoatMapUv:Ce&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:re&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Be&&x(b.sheenRoughnessMap.channel),specularMapUv:Ae&&x(b.specularMap.channel),specularColorMapUv:pe&&x(b.specularColorMap.channel),specularIntensityMapUv:qe&&x(b.specularIntensityMap.channel),transmissionMapUv:U&&x(b.transmissionMap.channel),thicknessMapUv:ie&&x(b.thicknessMap.channel),alphaMapUv:xe&&x(b.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ie||Nt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!K.attributes.uv&&(Ut||xe),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Oe,skinning:H.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Ke,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:Ut&&b.map.isVideoTexture===!0&&st.getTransfer(b.map.colorSpace)===ft,decodeVideoTextureEmissive:ye&&b.emissiveMap.isVideoTexture===!0&&st.getTransfer(b.emissiveMap.colorSpace)===ft,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===En,flipSided:b.side===hn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Me&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&b.extensions.multiDraw===!0||Ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function h(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const C in b.defines)y.push(C),y.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(E(y,b),M(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function E(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function M(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){const y=g[b.type];let C;if(y){const z=Bn[y];C=gh.clone(z.uniforms)}else C=b.uniforms;return C}function w(b,y){let C;for(let z=0,H=u.length;z<H;z++){const W=u[z];if(W.cacheKey===y){C=W,++C.usedTimes;break}}return C===void 0&&(C=new cg(i,y,b,s),u.push(C)),C}function A(b){if(--b.usedTimes===0){const y=u.indexOf(b);u[y]=u[u.length-1],u.pop(),b.destroy()}}function R(b){l.remove(b)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:_,acquireProgram:w,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:L}}function pg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function mg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function pc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function mc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,f,p,g,x,m){let h=i[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=x,h.group=m),e++,h}function a(d,f,p,g,x,m){const h=o(d,f,p,g,x,m);p.transmission>0?n.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(d,f,p,g,x,m){const h=o(d,f,p,g,x,m);p.transmission>0?n.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||mg),n.length>1&&n.sort(f||pc),r.length>1&&r.sort(f||pc)}function u(){for(let d=e,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function gg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new mc,i.set(n,[o])):r>=s.length?(o=new mc,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function vg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new et};break;case"SpotLight":t={position:new P,direction:new P,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function _g(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let xg=0;function yg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bg(i){const e=new vg,t=_g(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const r=new P,s=new wt,o=new wt;function a(c){let u=0,d=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,x=0,m=0,h=0,E=0,M=0,_=0,w=0,A=0,R=0;c.sort(yg);for(let b=0,y=c.length;b<y;b++){const C=c[b],z=C.color,H=C.intensity,W=C.distance,K=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=z.r*H,d+=z.g*H,f+=z.b*H;else if(C.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(C.sh.coefficients[$],H);R++}else if(C.isDirectionalLight){const $=e.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const J=C.shadow,X=t.get(C);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=C.shadow.matrix,E++}n.directional[p]=$,p++}else if(C.isSpotLight){const $=e.get(C);$.position.setFromMatrixPosition(C.matrixWorld),$.color.copy(z).multiplyScalar(H),$.distance=W,$.coneCos=Math.cos(C.angle),$.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),$.decay=C.decay,n.spot[x]=$;const J=C.shadow;if(C.map&&(n.spotLightMap[w]=C.map,w++,J.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[x]=J.matrix,C.castShadow){const X=t.get(C);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=K,_++}x++}else if(C.isRectAreaLight){const $=e.get(C);$.color.copy(z).multiplyScalar(H),$.halfWidth.set(C.width*.5,0,0),$.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=$,m++}else if(C.isPointLight){const $=e.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),$.distance=C.distance,$.decay=C.decay,C.castShadow){const J=C.shadow,X=t.get(C);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,X.shadowCameraNear=J.camera.near,X.shadowCameraFar=J.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=C.shadow.matrix,M++}n.point[g]=$,g++}else if(C.isHemisphereLight){const $=e.get(C);$.skyColor.copy(C.color).multiplyScalar(H),$.groundColor.copy(C.groundColor).multiplyScalar(H),n.hemi[h]=$,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==h||L.numDirectionalShadows!==E||L.numPointShadows!==M||L.numSpotShadows!==_||L.numSpotMaps!==w||L.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,L.directionalLength=p,L.pointLength=g,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=h,L.numDirectionalShadows=E,L.numPointShadows=M,L.numSpotShadows=_,L.numSpotMaps=w,L.numLightProbes=R,n.version=xg++)}function l(c,u){let d=0,f=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let h=0,E=c.length;h<E;h++){const M=c[h];if(M.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),d++}else if(M.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function gc(i){const e=new bg(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Sg(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new gc(i),e.set(r,[a])):s>=o.length?(a=new gc(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eg=`uniform sampler2D shadow_pass;
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
}`;function Tg(i,e,t){let n=new Za;const r=new be,s=new be,o=new mt,a=new Wh({depthPacking:Bd}),l=new Xh,c={},u=t.maxTextureSize,d={[mi]:hn,[hn]:mi,[En]:En},f=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Mg,fragmentShader:Eg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new rn;g.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new oe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc;let h=this.type;this.render=function(A,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const b=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),z=i.state;z.setBlending(di),z.buffers.depth.getReversed()?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=h!==Zn&&this.type===Zn,W=h===Zn&&this.type!==Zn;for(let K=0,$=A.length;K<$;K++){const J=A[K],X=J.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const he=X.getFrameExtents();if(r.multiply(he),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/he.x),r.x=s.x*he.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/he.y),r.y=s.y*he.y,X.mapSize.y=s.y)),X.map===null||H===!0||W===!0){const Pe=this.type!==Zn?{minFilter:Dn,magFilter:Dn}:{};X.map!==null&&X.map.dispose(),X.map=new Ni(r.x,r.y,Pe),X.map.texture.name=J.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const ve=X.getViewportCount();for(let Pe=0;Pe<ve;Pe++){const Ke=X.getViewport(Pe);o.set(s.x*Ke.x,s.y*Ke.y,s.x*Ke.z,s.y*Ke.w),z.viewport(o),X.updateMatrices(J,Pe),n=X.getFrustum(),_(R,L,X.camera,J,this.type)}X.isPointLightShadow!==!0&&this.type===Zn&&E(X,L),X.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(b,y,C)};function E(A,R){const L=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ni(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,L,f,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,L,p,x,null)}function M(A,R,L,b){let y=null;const C=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)y=C;else if(y=L.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const z=y.uuid,H=R.uuid;let W=c[z];W===void 0&&(W={},c[z]=W);let K=W[H];K===void 0&&(K=y.clone(),W[H]=K,R.addEventListener("dispose",w)),y=K}if(y.visible=R.visible,y.wireframe=R.wireframe,b===Zn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:d[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=i.properties.get(y);z.light=L}return y}function _(A,R,L,b,y){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Zn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const H=e.update(A),W=A.material;if(Array.isArray(W)){const K=H.groups;for(let $=0,J=K.length;$<J;$++){const X=K[$],he=W[X.materialIndex];if(he&&he.visible){const ve=M(A,he,b,y);A.onBeforeShadow(i,A,R,L,H,ve,X),i.renderBufferDirect(L,null,H,ve,A,X),A.onAfterShadow(i,A,R,L,H,ve,X)}}}else if(W.visible){const K=M(A,W,b,y);A.onBeforeShadow(i,A,R,L,H,K,null),i.renderBufferDirect(L,null,H,K,A,null),A.onAfterShadow(i,A,R,L,H,K,null)}}const z=A.children;for(let H=0,W=z.length;H<W;H++)_(z[H],R,L,b,y)}function w(A){A.target.removeEventListener("dispose",w);for(const L in c){const b=c[L],y=A.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const wg={[Yo]:jo,[$o]:Jo,[Ko]:Qo,[fr]:Zo,[jo]:Yo,[Jo]:$o,[Qo]:Ko,[Zo]:fr};function Ag(i,e){function t(){let U=!1;const ie=new mt;let ae=null;const xe=new mt(0,0,0,0);return{setMask:function(ee){ae!==ee&&!U&&(i.colorMask(ee,ee,ee,ee),ae=ee)},setLocked:function(ee){U=ee},setClear:function(ee,Z,Me,We,St){St===!0&&(ee*=We,Z*=We,Me*=We),ie.set(ee,Z,Me,We),xe.equals(ie)===!1&&(i.clearColor(ee,Z,Me,We),xe.copy(ie))},reset:function(){U=!1,ae=null,xe.set(-1,0,0,0)}}}function n(){let U=!1,ie=!1,ae=null,xe=null,ee=null;return{setReversed:function(Z){if(ie!==Z){const Me=e.get("EXT_clip_control");Z?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),ie=Z;const We=ee;ee=null,this.setClear(We)}},getReversed:function(){return ie},setTest:function(Z){Z?se(i.DEPTH_TEST):Oe(i.DEPTH_TEST)},setMask:function(Z){ae!==Z&&!U&&(i.depthMask(Z),ae=Z)},setFunc:function(Z){if(ie&&(Z=wg[Z]),xe!==Z){switch(Z){case Yo:i.depthFunc(i.NEVER);break;case jo:i.depthFunc(i.ALWAYS);break;case $o:i.depthFunc(i.LESS);break;case fr:i.depthFunc(i.LEQUAL);break;case Ko:i.depthFunc(i.EQUAL);break;case Zo:i.depthFunc(i.GEQUAL);break;case Jo:i.depthFunc(i.GREATER);break;case Qo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=Z}},setLocked:function(Z){U=Z},setClear:function(Z){ee!==Z&&(ie&&(Z=1-Z),i.clearDepth(Z),ee=Z)},reset:function(){U=!1,ae=null,xe=null,ee=null,ie=!1}}}function r(){let U=!1,ie=null,ae=null,xe=null,ee=null,Z=null,Me=null,We=null,St=null;return{setTest:function(ct){U||(ct?se(i.STENCIL_TEST):Oe(i.STENCIL_TEST))},setMask:function(ct){ie!==ct&&!U&&(i.stencilMask(ct),ie=ct)},setFunc:function(ct,Xn,Nn){(ae!==ct||xe!==Xn||ee!==Nn)&&(i.stencilFunc(ct,Xn,Nn),ae=ct,xe=Xn,ee=Nn)},setOp:function(ct,Xn,Nn){(Z!==ct||Me!==Xn||We!==Nn)&&(i.stencilOp(ct,Xn,Nn),Z=ct,Me=Xn,We=Nn)},setLocked:function(ct){U=ct},setClear:function(ct){St!==ct&&(i.clearStencil(ct),St=ct)},reset:function(){U=!1,ie=null,ae=null,xe=null,ee=null,Z=null,Me=null,We=null,St=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,h=null,E=null,M=null,_=null,w=null,A=null,R=new et(0,0,0),L=0,b=!1,y=null,C=null,z=null,H=null,W=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,J=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=J>=2);let he=null,ve={};const Pe=i.getParameter(i.SCISSOR_BOX),Ke=i.getParameter(i.VIEWPORT),At=new mt().fromArray(Pe),vt=new mt().fromArray(Ke);function j(U,ie,ae,xe){const ee=new Uint8Array(4),Z=i.createTexture();i.bindTexture(U,Z),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Me=0;Me<ae;Me++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,ee):i.texImage2D(ie+Me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ee);return Z}const fe={};fe[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(i.DEPTH_TEST),o.setFunc(fr),at(!1),Ie(ml),se(i.CULL_FACE),bt(di);function se(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function Oe(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Fe(U,ie){return d[U]!==ie?(i.bindFramebuffer(U,ie),d[U]=ie,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ie),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ge(U,ie){let ae=p,xe=!1;if(U){ae=f.get(ie),ae===void 0&&(ae=[],f.set(ie,ae));const ee=U.textures;if(ae.length!==ee.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,Me=ee.length;Z<Me;Z++)ae[Z]=i.COLOR_ATTACHMENT0+Z;ae.length=ee.length,xe=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,xe=!0);xe&&i.drawBuffers(ae)}function Ut(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const it={[Ri]:i.FUNC_ADD,[hd]:i.FUNC_SUBTRACT,[fd]:i.FUNC_REVERSE_SUBTRACT};it[pd]=i.MIN,it[md]=i.MAX;const D={[gd]:i.ZERO,[vd]:i.ONE,[_d]:i.SRC_COLOR,[Xo]:i.SRC_ALPHA,[Ed]:i.SRC_ALPHA_SATURATE,[Sd]:i.DST_COLOR,[yd]:i.DST_ALPHA,[xd]:i.ONE_MINUS_SRC_COLOR,[qo]:i.ONE_MINUS_SRC_ALPHA,[Md]:i.ONE_MINUS_DST_COLOR,[bd]:i.ONE_MINUS_DST_ALPHA,[Td]:i.CONSTANT_COLOR,[wd]:i.ONE_MINUS_CONSTANT_COLOR,[Ad]:i.CONSTANT_ALPHA,[Cd]:i.ONE_MINUS_CONSTANT_ALPHA};function bt(U,ie,ae,xe,ee,Z,Me,We,St,ct){if(U===di){x===!0&&(Oe(i.BLEND),x=!1);return}if(x===!1&&(se(i.BLEND),x=!0),U!==dd){if(U!==m||ct!==b){if((h!==Ri||_!==Ri)&&(i.blendEquation(i.FUNC_ADD),h=Ri,_=Ri),ct)switch(U){case cr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gl:i.blendFunc(i.ONE,i.ONE);break;case vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _l:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case vl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _l:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,M=null,w=null,A=null,R.set(0,0,0),L=0,m=U,b=ct}return}ee=ee||ie,Z=Z||ae,Me=Me||xe,(ie!==h||ee!==_)&&(i.blendEquationSeparate(it[ie],it[ee]),h=ie,_=ee),(ae!==E||xe!==M||Z!==w||Me!==A)&&(i.blendFuncSeparate(D[ae],D[xe],D[Z],D[Me]),E=ae,M=xe,w=Z,A=Me),(We.equals(R)===!1||St!==L)&&(i.blendColor(We.r,We.g,We.b,St),R.copy(We),L=St),m=U,b=!1}function De(U,ie){U.side===En?Oe(i.CULL_FACE):se(i.CULL_FACE);let ae=U.side===hn;ie&&(ae=!ae),at(ae),U.blending===cr&&U.transparent===!1?bt(di):bt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const xe=U.stencilWrite;a.setTest(xe),xe&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ye(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):Oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(U){y!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),y=U)}function Ie(U){U!==cd?(se(i.CULL_FACE),U!==C&&(U===ml?i.cullFace(i.BACK):U===ud?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Oe(i.CULL_FACE),C=U}function Ct(U){U!==z&&($&&i.lineWidth(U),z=U)}function ye(U,ie,ae){U?(se(i.POLYGON_OFFSET_FILL),(H!==ie||W!==ae)&&(i.polygonOffset(ie,ae),H=ie,W=ae)):Oe(i.POLYGON_OFFSET_FILL)}function Ze(U){U?se(i.SCISSOR_TEST):Oe(i.SCISSOR_TEST)}function Xt(U){U===void 0&&(U=i.TEXTURE0+K-1),he!==U&&(i.activeTexture(U),he=U)}function Nt(U,ie,ae){ae===void 0&&(he===null?ae=i.TEXTURE0+K-1:ae=he);let xe=ve[ae];xe===void 0&&(xe={type:void 0,texture:void 0},ve[ae]=xe),(xe.type!==U||xe.texture!==ie)&&(he!==ae&&(i.activeTexture(ae),he=ae),i.bindTexture(U,ie||fe[U]),xe.type=U,xe.texture=ie)}function T(){const U=ve[he];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(U){At.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),At.copy(U))}function Be(U){vt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),vt.copy(U))}function Ae(U,ie){let ae=c.get(ie);ae===void 0&&(ae=new WeakMap,c.set(ie,ae));let xe=ae.get(U);xe===void 0&&(xe=i.getUniformBlockIndex(ie,U.name),ae.set(U,xe))}function pe(U,ie){const xe=c.get(ie).get(U);l.get(ie)!==xe&&(i.uniformBlockBinding(ie,xe,U.__bindingPointIndex),l.set(ie,xe))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},he=null,ve={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,h=null,E=null,M=null,_=null,w=null,A=null,R=new et(0,0,0),L=0,b=!1,y=null,C=null,z=null,H=null,W=null,At.set(0,0,i.canvas.width,i.canvas.height),vt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:Oe,bindFramebuffer:Fe,drawBuffers:Ge,useProgram:Ut,setBlending:bt,setMaterial:De,setFlipSided:at,setCullFace:Ie,setLineWidth:Ct,setPolygonOffset:ye,setScissorTest:Ze,activeTexture:Xt,bindTexture:Nt,unbindTexture:T,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:we,texImage3D:ne,updateUBOMapping:Ae,uniformBlockBinding:pe,texStorage2D:re,texStorage3D:Te,texSubImage2D:Y,texSubImage3D:Q,compressedTexSubImage2D:q,compressedTexSubImage3D:Ce,scissor:ge,viewport:Be,reset:qe}}function Cg(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return p?new OffscreenCanvas(T,v):Vs("canvas")}function x(T,v,F){let Y=1;const Q=Nt(T);if((Q.width>F||Q.height>F)&&(Y=F/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(Y*Q.width),Ce=Math.floor(Y*Q.height);d===void 0&&(d=g(q,Ce));const re=v?g(q,Ce):d;return re.width=q,re.height=Ce,re.getContext("2d").drawImage(T,0,0,q,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Ce+")."),re}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){return T.generateMipmaps}function h(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,v,F,Y,Q=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=v;if(v===i.RED&&(F===i.FLOAT&&(q=i.R32F),F===i.HALF_FLOAT&&(q=i.R16F),F===i.UNSIGNED_BYTE&&(q=i.R8)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.R8UI),F===i.UNSIGNED_SHORT&&(q=i.R16UI),F===i.UNSIGNED_INT&&(q=i.R32UI),F===i.BYTE&&(q=i.R8I),F===i.SHORT&&(q=i.R16I),F===i.INT&&(q=i.R32I)),v===i.RG&&(F===i.FLOAT&&(q=i.RG32F),F===i.HALF_FLOAT&&(q=i.RG16F),F===i.UNSIGNED_BYTE&&(q=i.RG8)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RG8UI),F===i.UNSIGNED_SHORT&&(q=i.RG16UI),F===i.UNSIGNED_INT&&(q=i.RG32UI),F===i.BYTE&&(q=i.RG8I),F===i.SHORT&&(q=i.RG16I),F===i.INT&&(q=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGB8UI),F===i.UNSIGNED_SHORT&&(q=i.RGB16UI),F===i.UNSIGNED_INT&&(q=i.RGB32UI),F===i.BYTE&&(q=i.RGB8I),F===i.SHORT&&(q=i.RGB16I),F===i.INT&&(q=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),F===i.UNSIGNED_INT&&(q=i.RGBA32UI),F===i.BYTE&&(q=i.RGBA8I),F===i.SHORT&&(q=i.RGBA16I),F===i.INT&&(q=i.RGBA32I)),v===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),v===i.RGBA){const Ce=Q?Bs:st.getTransfer(Y);F===i.FLOAT&&(q=i.RGBA32F),F===i.HALF_FLOAT&&(q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(q=Ce===ft?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function _(T,v){let F;return T?v===null||v===Ui||v===Br?F=i.DEPTH24_STENCIL8:v===Jn?F=i.DEPTH32F_STENCIL8:v===zr&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ui||v===Br?F=i.DEPTH_COMPONENT24:v===Jn?F=i.DEPTH_COMPONENT32F:v===zr&&(F=i.DEPTH_COMPONENT16),F}function w(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Dn&&T.minFilter!==Vn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function A(T){const v=T.target;v.removeEventListener("dispose",A),L(v),v.isVideoTexture&&u.delete(v)}function R(T){const v=T.target;v.removeEventListener("dispose",R),y(v)}function L(T){const v=n.get(T);if(v.__webglInit===void 0)return;const F=T.source,Y=f.get(F);if(Y){const Q=Y[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(T),Object.keys(Y).length===0&&f.delete(F)}n.remove(T)}function b(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const F=T.source,Y=f.get(F);delete Y[v.__cacheKey],o.memory.textures--}function y(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let Q=0;Q<v.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(v.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)i.deleteFramebuffer(v.__webglFramebuffer[Y]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=T.textures;for(let Y=0,Q=F.length;Y<Q;Y++){const q=n.get(F[Y]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(F[Y])}n.remove(T)}let C=0;function z(){C=0}function H(){const T=C;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),C+=1,T}function W(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function K(T,v){const F=n.get(T);if(T.isVideoTexture&&Ze(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(F,T,v);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function $(T,v){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){fe(F,T,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function J(T,v){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){fe(F,T,v);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function X(T,v){const F=n.get(T);if(T.version>0&&F.__version!==T.version){se(F,T,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}const he={[na]:i.REPEAT,[Pi]:i.CLAMP_TO_EDGE,[ia]:i.MIRRORED_REPEAT},ve={[Dn]:i.NEAREST,[kd]:i.NEAREST_MIPMAP_NEAREST,[ts]:i.NEAREST_MIPMAP_LINEAR,[Vn]:i.LINEAR,[io]:i.LINEAR_MIPMAP_NEAREST,[Li]:i.LINEAR_MIPMAP_LINEAR},Pe={[Vd]:i.NEVER,[jd]:i.ALWAYS,[Gd]:i.LESS,[tu]:i.LEQUAL,[Wd]:i.EQUAL,[Yd]:i.GEQUAL,[Xd]:i.GREATER,[qd]:i.NOTEQUAL};function Ke(T,v){if(v.type===Jn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Vn||v.magFilter===io||v.magFilter===ts||v.magFilter===Li||v.minFilter===Vn||v.minFilter===io||v.minFilter===ts||v.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,he[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,he[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,he[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ve[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ve[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Pe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Dn||v.minFilter!==ts&&v.minFilter!==Li||v.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function At(T,v){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));const Y=v.source;let Q=f.get(Y);Q===void 0&&(Q={},f.set(Y,Q));const q=W(v);if(q!==T.__cacheKey){Q[q]===void 0&&(Q[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Q[q].usedTimes++;const Ce=Q[T.__cacheKey];Ce!==void 0&&(Q[T.__cacheKey].usedTimes--,Ce.usedTimes===0&&b(v)),T.__cacheKey=q,T.__webglTexture=Q[q].texture}return F}function vt(T,v,F){return Math.floor(Math.floor(T/F)/v)}function j(T,v,F,Y){const q=T.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,F,Y,v.data);else{q.sort((ne,ge)=>ne.start-ge.start);let Ce=0;for(let ne=1;ne<q.length;ne++){const ge=q[Ce],Be=q[ne],Ae=ge.start+ge.count,pe=vt(Be.start,v.width,4),qe=vt(ge.start,v.width,4);Be.start<=Ae+1&&pe===qe&&vt(Be.start+Be.count-1,v.width,4)===pe?ge.count=Math.max(ge.count,Be.start+Be.count-ge.start):(++Ce,q[Ce]=Be)}q.length=Ce+1;const re=i.getParameter(i.UNPACK_ROW_LENGTH),Te=i.getParameter(i.UNPACK_SKIP_PIXELS),we=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ne=0,ge=q.length;ne<ge;ne++){const Be=q[ne],Ae=Math.floor(Be.start/4),pe=Math.ceil(Be.count/4),qe=Ae%v.width,U=Math.floor(Ae/v.width),ie=pe,ae=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,qe,U,ie,ae,F,Y,v.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,re),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),i.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function fe(T,v,F){let Y=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=i.TEXTURE_3D);const Q=At(T,v),q=v.source;t.bindTexture(Y,T.__webglTexture,i.TEXTURE0+F);const Ce=n.get(q);if(q.version!==Ce.__version||Q===!0){t.activeTexture(i.TEXTURE0+F);const re=st.getPrimaries(st.workingColorSpace),Te=v.colorSpace===ci?null:st.getPrimaries(v.colorSpace),we=v.colorSpace===ci||re===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ne=x(v.image,!1,r.maxTextureSize);ne=Xt(v,ne);const ge=s.convert(v.format,v.colorSpace),Be=s.convert(v.type);let Ae=M(v.internalFormat,ge,Be,v.colorSpace,v.isVideoTexture);Ke(Y,v);let pe;const qe=v.mipmaps,U=v.isVideoTexture!==!0,ie=Ce.__version===void 0||Q===!0,ae=q.dataReady,xe=w(v,ne);if(v.isDepthTexture)Ae=_(v.format===Vr,v.type),ie&&(U?t.texStorage2D(i.TEXTURE_2D,1,Ae,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Ae,ne.width,ne.height,0,ge,Be,null));else if(v.isDataTexture)if(qe.length>0){U&&ie&&t.texStorage2D(i.TEXTURE_2D,xe,Ae,qe[0].width,qe[0].height);for(let ee=0,Z=qe.length;ee<Z;ee++)pe=qe[ee],U?ae&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,pe.width,pe.height,ge,Be,pe.data):t.texImage2D(i.TEXTURE_2D,ee,Ae,pe.width,pe.height,0,ge,Be,pe.data);v.generateMipmaps=!1}else U?(ie&&t.texStorage2D(i.TEXTURE_2D,xe,Ae,ne.width,ne.height),ae&&j(v,ne,ge,Be)):t.texImage2D(i.TEXTURE_2D,0,Ae,ne.width,ne.height,0,ge,Be,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){U&&ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Ae,qe[0].width,qe[0].height,ne.depth);for(let ee=0,Z=qe.length;ee<Z;ee++)if(pe=qe[ee],v.format!==Ln)if(ge!==null)if(U){if(ae)if(v.layerUpdates.size>0){const Me=ql(pe.width,pe.height,v.format,v.type);for(const We of v.layerUpdates){const St=pe.data.subarray(We*Me/pe.data.BYTES_PER_ELEMENT,(We+1)*Me/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,We,pe.width,pe.height,1,ge,St)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,pe.width,pe.height,ne.depth,ge,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,Ae,pe.width,pe.height,ne.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,pe.width,pe.height,ne.depth,ge,Be,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,Ae,pe.width,pe.height,ne.depth,0,ge,Be,pe.data)}else{U&&ie&&t.texStorage2D(i.TEXTURE_2D,xe,Ae,qe[0].width,qe[0].height);for(let ee=0,Z=qe.length;ee<Z;ee++)pe=qe[ee],v.format!==Ln?ge!==null?U?ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,pe.width,pe.height,ge,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,Ae,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ae&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,pe.width,pe.height,ge,Be,pe.data):t.texImage2D(i.TEXTURE_2D,ee,Ae,pe.width,pe.height,0,ge,Be,pe.data)}else if(v.isDataArrayTexture)if(U){if(ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Ae,ne.width,ne.height,ne.depth),ae)if(v.layerUpdates.size>0){const ee=ql(ne.width,ne.height,v.format,v.type);for(const Z of v.layerUpdates){const Me=ne.data.subarray(Z*ee/ne.data.BYTES_PER_ELEMENT,(Z+1)*ee/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,ne.width,ne.height,1,ge,Be,Me)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ge,Be,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,ne.width,ne.height,ne.depth,0,ge,Be,ne.data);else if(v.isData3DTexture)U?(ie&&t.texStorage3D(i.TEXTURE_3D,xe,Ae,ne.width,ne.height,ne.depth),ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ge,Be,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,ne.width,ne.height,ne.depth,0,ge,Be,ne.data);else if(v.isFramebufferTexture){if(ie)if(U)t.texStorage2D(i.TEXTURE_2D,xe,Ae,ne.width,ne.height);else{let ee=ne.width,Z=ne.height;for(let Me=0;Me<xe;Me++)t.texImage2D(i.TEXTURE_2D,Me,Ae,ee,Z,0,ge,Be,null),ee>>=1,Z>>=1}}else if(qe.length>0){if(U&&ie){const ee=Nt(qe[0]);t.texStorage2D(i.TEXTURE_2D,xe,Ae,ee.width,ee.height)}for(let ee=0,Z=qe.length;ee<Z;ee++)pe=qe[ee],U?ae&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ge,Be,pe):t.texImage2D(i.TEXTURE_2D,ee,Ae,ge,Be,pe);v.generateMipmaps=!1}else if(U){if(ie){const ee=Nt(ne);t.texStorage2D(i.TEXTURE_2D,xe,Ae,ee.width,ee.height)}ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Be,ne)}else t.texImage2D(i.TEXTURE_2D,0,Ae,ge,Be,ne);m(v)&&h(Y),Ce.__version=q.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function se(T,v,F){if(v.image.length!==6)return;const Y=At(T,v),Q=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);const q=n.get(Q);if(Q.version!==q.__version||Y===!0){t.activeTexture(i.TEXTURE0+F);const Ce=st.getPrimaries(st.workingColorSpace),re=v.colorSpace===ci?null:st.getPrimaries(v.colorSpace),Te=v.colorSpace===ci||Ce===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const we=v.isCompressedTexture||v.image[0].isCompressedTexture,ne=v.image[0]&&v.image[0].isDataTexture,ge=[];for(let Z=0;Z<6;Z++)!we&&!ne?ge[Z]=x(v.image[Z],!0,r.maxCubemapSize):ge[Z]=ne?v.image[Z].image:v.image[Z],ge[Z]=Xt(v,ge[Z]);const Be=ge[0],Ae=s.convert(v.format,v.colorSpace),pe=s.convert(v.type),qe=M(v.internalFormat,Ae,pe,v.colorSpace),U=v.isVideoTexture!==!0,ie=q.__version===void 0||Y===!0,ae=Q.dataReady;let xe=w(v,Be);Ke(i.TEXTURE_CUBE_MAP,v);let ee;if(we){U&&ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,qe,Be.width,Be.height);for(let Z=0;Z<6;Z++){ee=ge[Z].mipmaps;for(let Me=0;Me<ee.length;Me++){const We=ee[Me];v.format!==Ln?Ae!==null?U?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me,0,0,We.width,We.height,Ae,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me,qe,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me,0,0,We.width,We.height,Ae,pe,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me,qe,We.width,We.height,0,Ae,pe,We.data)}}}else{if(ee=v.mipmaps,U&&ie){ee.length>0&&xe++;const Z=Nt(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,qe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ne){U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ge[Z].width,ge[Z].height,Ae,pe,ge[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,qe,ge[Z].width,ge[Z].height,0,Ae,pe,ge[Z].data);for(let Me=0;Me<ee.length;Me++){const St=ee[Me].image[Z].image;U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me+1,0,0,St.width,St.height,Ae,pe,St.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me+1,qe,St.width,St.height,0,Ae,pe,St.data)}}else{U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ae,pe,ge[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,qe,Ae,pe,ge[Z]);for(let Me=0;Me<ee.length;Me++){const We=ee[Me];U?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me+1,0,0,Ae,pe,We.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Me+1,qe,Ae,pe,We.image[Z])}}}m(v)&&h(i.TEXTURE_CUBE_MAP),q.__version=Q.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Oe(T,v,F,Y,Q,q){const Ce=s.convert(F.format,F.colorSpace),re=s.convert(F.type),Te=M(F.internalFormat,Ce,re,F.colorSpace),we=n.get(v),ne=n.get(F);if(ne.__renderTarget=v,!we.__hasExternalTextures){const ge=Math.max(1,v.width>>q),Be=Math.max(1,v.height>>q);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,q,Te,ge,Be,v.depth,0,Ce,re,null):t.texImage2D(Q,q,Te,ge,Be,0,Ce,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ye(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,ne.__webglTexture,0,Ct(v)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,ne.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(T,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const Y=v.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,q=_(v.stencilBuffer,Q),Ce=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=Ct(v);ye(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,q,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,T)}else{const Y=v.textures;for(let Q=0;Q<Y.length;Q++){const q=Y[Q],Ce=s.convert(q.format,q.colorSpace),re=s.convert(q.type),Te=M(q.internalFormat,Ce,re,q.colorSpace),we=Ct(v);F&&ye(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,Te,v.width,v.height):ye(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,Te,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Te,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ge(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(v.depthTexture);Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K(v.depthTexture,0);const Q=Y.__webglTexture,q=Ct(v);if(v.depthTexture.format===Hr)ye(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(v.depthTexture.format===Vr)ye(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ut(T){const v=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=Y}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const Y=T.texture.mipmaps;Y&&Y.length>0?Ge(v.__webglFramebuffer[0],T):Ge(v.__webglFramebuffer,T)}else if(F){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=i.createRenderbuffer(),Fe(v.__webglDepthbuffer[Y],T,!1);else{const Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,q)}}else{const Y=T.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Fe(v.__webglDepthbuffer,T,!1);else{const Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function it(T,v,F){const Y=n.get(T);v!==void 0&&Oe(Y.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ut(T)}function D(T){const v=T.texture,F=n.get(T),Y=n.get(v);T.addEventListener("dispose",R);const Q=T.textures,q=T.isWebGLCubeRenderTarget===!0,Ce=Q.length>1;if(Ce||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=v.version,o.memory.textures++),q){F.__webglFramebuffer=[];for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[re]=[];for(let Te=0;Te<v.mipmaps.length;Te++)F.__webglFramebuffer[re][Te]=i.createFramebuffer()}else F.__webglFramebuffer[re]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)F.__webglFramebuffer[re]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let re=0,Te=Q.length;re<Te;re++){const we=n.get(Q[re]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&ye(T)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let re=0;re<Q.length;re++){const Te=Q[re];F.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[re]);const we=s.convert(Te.format,Te.colorSpace),ne=s.convert(Te.type),ge=M(Te.internalFormat,we,ne,Te.colorSpace,T.isXRRenderTarget===!0),Be=Ct(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,ge,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,F.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ke(i.TEXTURE_CUBE_MAP,v);for(let re=0;re<6;re++)if(v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)Oe(F.__webglFramebuffer[re][Te],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Te);else Oe(F.__webglFramebuffer[re],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(v)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let re=0,Te=Q.length;re<Te;re++){const we=Q[re],ne=n.get(we);let ge=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ge=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,ne.__webglTexture),Ke(ge,we),Oe(F.__webglFramebuffer,T,we,i.COLOR_ATTACHMENT0+re,ge,0),m(we)&&h(ge)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(re=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,Y.__webglTexture),Ke(re,v),v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)Oe(F.__webglFramebuffer[Te],T,v,i.COLOR_ATTACHMENT0,re,Te);else Oe(F.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,re,0);m(v)&&h(re),t.unbindTexture()}T.depthBuffer&&Ut(T)}function bt(T){const v=T.textures;for(let F=0,Y=v.length;F<Y;F++){const Q=v[F];if(m(Q)){const q=E(T),Ce=n.get(Q).__webglTexture;t.bindTexture(q,Ce),h(q),t.unbindTexture()}}}const De=[],at=[];function Ie(T){if(T.samples>0){if(ye(T)===!1){const v=T.textures,F=T.width,Y=T.height;let Q=i.COLOR_BUFFER_BIT;const q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(T),re=v.length>1;if(re)for(let we=0;we<v.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const Te=T.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let we=0;we<v.length;we++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[we]);const ne=n.get(v[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,F,Y,0,0,F,Y,Q,i.NEAREST),l===!0&&(De.length=0,at.length=0,De.push(i.COLOR_ATTACHMENT0+we),T.depthBuffer&&T.resolveDepthBuffer===!1&&(De.push(q),at.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,at)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let we=0;we<v.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[we]);const ne=n.get(v[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Ct(T){return Math.min(r.maxSamples,T.samples)}function ye(T){const v=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ze(T){const v=o.render.frame;u.get(T)!==v&&(u.set(T,v),T.update())}function Xt(T,v){const F=T.colorSpace,Y=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==gr&&F!==ci&&(st.getTransfer(F)===ft?(Y!==Ln||Q!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function Nt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=$,this.setTexture3D=J,this.setTextureCube=X,this.rebindTextures=it,this.setupRenderTarget=D,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=ye}function Rg(i,e){function t(n,r=ci){let s;const o=st.getTransfer(r);if(n===Wn)return i.UNSIGNED_BYTE;if(n===Va)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ga)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qc)return i.BYTE;if(n===Yc)return i.SHORT;if(n===zr)return i.UNSIGNED_SHORT;if(n===Ha)return i.INT;if(n===Ui)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===qr)return i.HALF_FLOAT;if(n===$c)return i.ALPHA;if(n===Kc)return i.RGB;if(n===Ln)return i.RGBA;if(n===Hr)return i.DEPTH_COMPONENT;if(n===Vr)return i.DEPTH_STENCIL;if(n===Zc)return i.RED;if(n===Wa)return i.RED_INTEGER;if(n===Jc)return i.RG;if(n===Xa)return i.RG_INTEGER;if(n===qa)return i.RGBA_INTEGER;if(n===Ps||n===Ls||n===Ds||n===Us)if(o===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ps)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ps)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ls)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ds)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Us)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ra||n===sa||n===oa||n===aa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ra)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===aa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===la||n===ca||n===ua)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===la||n===ca)return o===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ua)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===da||n===ha||n===fa||n===pa||n===ma||n===ga||n===va||n===_a||n===xa||n===ya||n===ba||n===Sa||n===Ma||n===Ea)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===da)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ha)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fa)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pa)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ma)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ga)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===va)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_a)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xa)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ya)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ba)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sa)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ma)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ea)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ns||n===Ta||n===wa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ns)return o===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ta)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qc||n===Aa||n===Ca||n===Ra)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ns)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Aa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ca)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ra)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Tu extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const Ig=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pg=`
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

}`;class Lg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Tu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new gi({vertexShader:Ig,fragmentShader:Pg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new oe(new Ks(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dg extends Fi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,g=null;const x=new Lg,m={},h=t.getContextAttributes();let E=null,M=null;const _=[],w=[],A=new be;let R=null;const L=new xn;L.viewport=new mt;const b=new xn;b.viewport=new mt;const y=[L,b],C=new Kh;let z=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let fe=_[j];return fe===void 0&&(fe=new Ao,_[j]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(j){let fe=_[j];return fe===void 0&&(fe=new Ao,_[j]=fe),fe.getGripSpace()},this.getHand=function(j){let fe=_[j];return fe===void 0&&(fe=new Ao,_[j]=fe),fe.getHandSpace()};function W(j){const fe=w.indexOf(j.inputSource);if(fe===-1)return;const se=_[fe];se!==void 0&&(se.update(j.inputSource,j.frame,c||o),se.dispatchEvent({type:j.type,data:j.inputSource}))}function K(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",$);for(let j=0;j<_.length;j++){const fe=w[j];fe!==null&&(w[j]=null,_[j].disconnect(fe))}z=null,H=null,x.reset();for(const j in m)delete m[j];e.setRenderTarget(E),p=null,f=null,d=null,r=null,M=null,vt.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",K),r.addEventListener("inputsourceschange",$),h.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(r,t)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Oe=null,Fe=null;h.depth&&(Fe=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=h.stencil?Vr:Hr,Oe=h.stencil?Br:Ui);const Ge={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:s};f=d.createProjectionLayer(Ge),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Ni(f.textureWidth,f.textureHeight,{format:Ln,type:Wn,depthTexture:new fu(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const se={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Ni(p.framebufferWidth,p.framebufferHeight,{format:Ln,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),vt.setContext(r),vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(j){for(let fe=0;fe<j.removed.length;fe++){const se=j.removed[fe],Oe=w.indexOf(se);Oe>=0&&(w[Oe]=null,_[Oe].disconnect(se))}for(let fe=0;fe<j.added.length;fe++){const se=j.added[fe];let Oe=w.indexOf(se);if(Oe===-1){for(let Ge=0;Ge<_.length;Ge++)if(Ge>=w.length){w.push(se),Oe=Ge;break}else if(w[Ge]===null){w[Ge]=se,Oe=Ge;break}if(Oe===-1)break}const Fe=_[Oe];Fe&&Fe.connect(se)}}const J=new P,X=new P;function he(j,fe,se){J.setFromMatrixPosition(fe.matrixWorld),X.setFromMatrixPosition(se.matrixWorld);const Oe=J.distanceTo(X),Fe=fe.projectionMatrix.elements,Ge=se.projectionMatrix.elements,Ut=Fe[14]/(Fe[10]-1),it=Fe[14]/(Fe[10]+1),D=(Fe[9]+1)/Fe[5],bt=(Fe[9]-1)/Fe[5],De=(Fe[8]-1)/Fe[0],at=(Ge[8]+1)/Ge[0],Ie=Ut*De,Ct=Ut*at,ye=Oe/(-De+at),Ze=ye*-De;if(fe.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ze),j.translateZ(ye),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Fe[10]===-1)j.projectionMatrix.copy(fe.projectionMatrix),j.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Xt=Ut+ye,Nt=it+ye,T=Ie-Ze,v=Ct+(Oe-Ze),F=D*it/Nt*Xt,Y=bt*it/Nt*Xt;j.projectionMatrix.makePerspective(T,v,F,Y,Xt,Nt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ve(j,fe){fe===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(fe.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let fe=j.near,se=j.far;x.texture!==null&&(x.depthNear>0&&(fe=x.depthNear),x.depthFar>0&&(se=x.depthFar)),C.near=b.near=L.near=fe,C.far=b.far=L.far=se,(z!==C.near||H!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,H=C.far),C.layers.mask=j.layers.mask|6,L.layers.mask=C.layers.mask&3,b.layers.mask=C.layers.mask&5;const Oe=j.parent,Fe=C.cameras;ve(C,Oe);for(let Ge=0;Ge<Fe.length;Ge++)ve(Fe[Ge],Oe);Fe.length===2?he(C,L,b):C.projectionMatrix.copy(L.projectionMatrix),Pe(j,C,Oe)};function Pe(j,fe,se){se===null?j.matrix.copy(fe.matrixWorld):(j.matrix.copy(se.matrixWorld),j.matrix.invert(),j.matrix.multiply(fe.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(fe.projectionMatrix),j.projectionMatrixInverse.copy(fe.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Pa*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(C)},this.getCameraTexture=function(j){return m[j]};let Ke=null;function At(j,fe){if(u=fe.getViewerPose(c||o),g=fe,u!==null){const se=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Oe=!1;se.length!==C.cameras.length&&(C.cameras.length=0,Oe=!0);for(let it=0;it<se.length;it++){const D=se[it];let bt=null;if(p!==null)bt=p.getViewport(D);else{const at=d.getViewSubImage(f,D);bt=at.viewport,it===0&&(e.setRenderTargetTextures(M,at.colorTexture,at.depthStencilTexture),e.setRenderTarget(M))}let De=y[it];De===void 0&&(De=new xn,De.layers.enable(it),De.viewport=new mt,y[it]=De),De.matrix.fromArray(D.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(D.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(bt.x,bt.y,bt.width,bt.height),it===0&&(C.matrix.copy(De.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Oe===!0&&C.cameras.push(De)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const it=d.getDepthInformation(se[0]);it&&it.isValid&&it.texture&&x.init(it,r.renderState)}if(Fe&&Fe.includes("camera-access")&&(e.state.unbindTexture(),d))for(let it=0;it<se.length;it++){const D=se[it].camera;if(D){let bt=m[D];bt||(bt=new Tu,m[D]=bt);const De=d.getCameraImage(D);bt.sourceTexture=De}}}for(let se=0;se<_.length;se++){const Oe=w[se],Fe=_[se];Oe!==null&&Fe!==void 0&&Fe.update(Oe,fe,c||o)}Ke&&Ke(j,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),g=null}const vt=new yu;vt.setAnimationLoop(At),this.setAnimationLoop=function(j){Ke=j},this.dispose=function(){}}}const wi=new wn,Ug=new wt;function Ng(i,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,lu(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,E,M,_){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,_)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,E,M):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===hn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===hn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const E=e.get(h),M=E.envMap,_=E.envMapRotation;M&&(m.envMap.value=M,wi.copy(_),wi.x*=-1,wi.y*=-1,wi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),m.envMapRotation.value.setFromMatrix4(Ug.makeRotationFromEuler(wi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,E,M){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*E,m.scale.value=M*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,E){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===hn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const E=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Og(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,M){const _=M.program;n.uniformBlockBinding(E,_)}function c(E,M){let _=r[E.id];_===void 0&&(g(E),_=u(E),r[E.id]=_,E.addEventListener("dispose",m));const w=M.program;n.updateUBOMapping(E,w);const A=e.render.frame;s[E.id]!==A&&(f(E),s[E.id]=A)}function u(E){const M=d();E.__bindingPointIndex=M;const _=i.createBuffer(),w=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,w,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const M=r[E.id],_=E.uniforms,w=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,R=_.length;A<R;A++){const L=Array.isArray(_[A])?_[A]:[_[A]];for(let b=0,y=L.length;b<y;b++){const C=L[b];if(p(C,A,b,w)===!0){const z=C.__offset,H=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let K=0;K<H.length;K++){const $=H[K],J=x($);typeof $=="number"||typeof $=="boolean"?(C.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,z+W,C.__data)):$.isMatrix3?(C.__data[0]=$.elements[0],C.__data[1]=$.elements[1],C.__data[2]=$.elements[2],C.__data[3]=0,C.__data[4]=$.elements[3],C.__data[5]=$.elements[4],C.__data[6]=$.elements[5],C.__data[7]=0,C.__data[8]=$.elements[6],C.__data[9]=$.elements[7],C.__data[10]=$.elements[8],C.__data[11]=0):($.toArray(C.__data,W),W+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,M,_,w){const A=E.value,R=M+"_"+_;if(w[R]===void 0)return typeof A=="number"||typeof A=="boolean"?w[R]=A:w[R]=A.clone(),!0;{const L=w[R];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return w[R]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(E){const M=E.uniforms;let _=0;const w=16;for(let R=0,L=M.length;R<L;R++){const b=Array.isArray(M[R])?M[R]:[M[R]];for(let y=0,C=b.length;y<C;y++){const z=b[y],H=Array.isArray(z.value)?z.value:[z.value];for(let W=0,K=H.length;W<K;W++){const $=H[W],J=x($),X=_%w,he=X%J.boundary,ve=X+he;_+=he,ve!==0&&w-ve<J.storage&&(_+=w-ve),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=J.storage}}}const A=_%w;return A>0&&(_+=w-A),E.__size=_,E.__cache={},this}function x(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){const M=E.target;M.removeEventListener("dispose",m);const _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function h(){for(const E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Fg{constructor(e={}){const{canvas:t=Kd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,h=null;const E=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let w=!1;this._outputColorSpace=dn;let A=0,R=0,L=null,b=-1,y=null;const C=new mt,z=new mt;let H=null;const W=new et(0);let K=0,$=t.width,J=t.height,X=1,he=null,ve=null;const Pe=new mt(0,0,$,J),Ke=new mt(0,0,$,J);let At=!1;const vt=new Za;let j=!1,fe=!1;const se=new wt,Oe=new P,Fe=new mt,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function it(){return L===null?X:1}let D=n;function bt(S,N){return t.getContext(S,N)}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ba}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",ee,!1),D===null){const N="webgl2";if(D=bt(N,S),D===null)throw bt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let De,at,Ie,Ct,ye,Ze,Xt,Nt,T,v,F,Y,Q,q,Ce,re,Te,we,ne,ge,Be,Ae,pe,qe;function U(){De=new Ym(D),De.init(),Ae=new Rg(D,De),at=new Bm(D,De,e,Ae),Ie=new Ag(D,De),at.reversedDepthBuffer&&f&&Ie.buffers.depth.setReversed(!0),Ct=new Km(D),ye=new pg,Ze=new Cg(D,De,Ie,ye,at,Ae,Ct),Xt=new Vm(_),Nt=new qm(_),T=new tf(D),pe=new km(D,T),v=new jm(D,T,Ct,pe),F=new Jm(D,v,T,Ct),ne=new Zm(D,at,Ze),re=new Hm(ye),Y=new fg(_,Xt,Nt,De,at,pe,re),Q=new Ng(_,ye),q=new gg,Ce=new Sg(De),we=new Fm(_,Xt,Nt,Ie,F,p,l),Te=new Tg(_,F,at),qe=new Og(D,Ct,at,Ie),ge=new zm(D,De,Ct),Be=new $m(D,De,Ct),Ct.programs=Y.programs,_.capabilities=at,_.extensions=De,_.properties=ye,_.renderLists=q,_.shadowMap=Te,_.state=Ie,_.info=Ct}U();const ie=new Dg(_,D);this.xr=ie,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=De.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=De.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize($,J,!1))},this.getSize=function(S){return S.set($,J)},this.setSize=function(S,N,V=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=S,J=N,t.width=Math.floor(S*X),t.height=Math.floor(N*X),V===!0&&(t.style.width=S+"px",t.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set($*X,J*X).floor()},this.setDrawingBufferSize=function(S,N,V){$=S,J=N,X=V,t.width=Math.floor(S*V),t.height=Math.floor(N*V),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(Pe)},this.setViewport=function(S,N,V,G){S.isVector4?Pe.set(S.x,S.y,S.z,S.w):Pe.set(S,N,V,G),Ie.viewport(C.copy(Pe).multiplyScalar(X).round())},this.getScissor=function(S){return S.copy(Ke)},this.setScissor=function(S,N,V,G){S.isVector4?Ke.set(S.x,S.y,S.z,S.w):Ke.set(S,N,V,G),Ie.scissor(z.copy(Ke).multiplyScalar(X).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(S){Ie.setScissorTest(At=S)},this.setOpaqueSort=function(S){he=S},this.setTransparentSort=function(S){ve=S},this.getClearColor=function(S){return S.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,V=!0){let G=0;if(S){let O=!1;if(L!==null){const te=L.texture.format;O=te===qa||te===Xa||te===Wa}if(O){const te=L.texture.type,me=te===Wn||te===Ui||te===zr||te===Br||te===Va||te===Ga,Se=we.getClearColor(),_e=we.getClearAlpha(),ke=Se.r,He=Se.g,Le=Se.b;me?(g[0]=ke,g[1]=He,g[2]=Le,g[3]=_e,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=ke,x[1]=He,x[2]=Le,x[3]=_e,D.clearBufferiv(D.COLOR,0,x))}else G|=D.COLOR_BUFFER_BIT}N&&(G|=D.DEPTH_BUFFER_BIT),V&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),we.dispose(),q.dispose(),Ce.dispose(),ye.dispose(),Xt.dispose(),Nt.dispose(),F.dispose(),pe.dispose(),qe.dispose(),Y.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Nn),ie.removeEventListener("sessionend",cl),xi.stop()};function ae(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const S=Ct.autoReset,N=Te.enabled,V=Te.autoUpdate,G=Te.needsUpdate,O=Te.type;U(),Ct.autoReset=S,Te.enabled=N,Te.autoUpdate=V,Te.needsUpdate=G,Te.type=O}function ee(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Z(S){const N=S.target;N.removeEventListener("dispose",Z),Me(N)}function Me(S){We(S),ye.remove(S)}function We(S){const N=ye.get(S).programs;N!==void 0&&(N.forEach(function(V){Y.releaseProgram(V)}),S.isShaderMaterial&&Y.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,V,G,O,te){N===null&&(N=Ge);const me=O.isMesh&&O.matrixWorld.determinant()<0,Se=id(S,N,V,G,O);Ie.setMaterial(G,me);let _e=V.index,ke=1;if(G.wireframe===!0){if(_e=v.getWireframeAttribute(V),_e===void 0)return;ke=2}const He=V.drawRange,Le=V.attributes.position;let Qe=He.start*ke,dt=(He.start+He.count)*ke;te!==null&&(Qe=Math.max(Qe,te.start*ke),dt=Math.min(dt,(te.start+te.count)*ke)),_e!==null?(Qe=Math.max(Qe,0),dt=Math.min(dt,_e.count)):Le!=null&&(Qe=Math.max(Qe,0),dt=Math.min(dt,Le.count));const Dt=dt-Qe;if(Dt<0||Dt===1/0)return;pe.setup(O,G,Se,V,_e);let Tt,_t=ge;if(_e!==null&&(Tt=T.get(_e),_t=Be,_t.setIndex(Tt)),O.isMesh)G.wireframe===!0?(Ie.setLineWidth(G.wireframeLinewidth*it()),_t.setMode(D.LINES)):_t.setMode(D.TRIANGLES);else if(O.isLine){let Ue=G.linewidth;Ue===void 0&&(Ue=1),Ie.setLineWidth(Ue*it()),O.isLineSegments?_t.setMode(D.LINES):O.isLineLoop?_t.setMode(D.LINE_LOOP):_t.setMode(D.LINE_STRIP)}else O.isPoints?_t.setMode(D.POINTS):O.isSprite&&_t.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ur("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))_t.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ue=O._multiDrawStarts,It=O._multiDrawCounts,rt=O._multiDrawCount,pn=_e?T.get(_e).bytesPerElement:1,ki=ye.get(G).currentProgram.getUniforms();for(let mn=0;mn<rt;mn++)ki.setValue(D,"_gl_DrawID",mn),_t.render(Ue[mn]/pn,It[mn])}else if(O.isInstancedMesh)_t.renderInstances(Qe,Dt,O.count);else if(V.isInstancedBufferGeometry){const Ue=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,It=Math.min(V.instanceCount,Ue);_t.renderInstances(Qe,Dt,It)}else _t.render(Qe,Dt)};function St(S,N,V){S.transparent===!0&&S.side===En&&S.forceSinglePass===!1?(S.side=hn,S.needsUpdate=!0,es(S,N,V),S.side=mi,S.needsUpdate=!0,es(S,N,V),S.side=En):es(S,N,V)}this.compile=function(S,N,V=null){V===null&&(V=S),h=Ce.get(V),h.init(N),M.push(h),V.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),S!==V&&S.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),h.setupLights();const G=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const te=O.material;if(te)if(Array.isArray(te))for(let me=0;me<te.length;me++){const Se=te[me];St(Se,V,O),G.add(Se)}else St(te,V,O),G.add(te)}),h=M.pop(),G},this.compileAsync=function(S,N,V=null){const G=this.compile(S,N,V);return new Promise(O=>{function te(){if(G.forEach(function(me){ye.get(me).currentProgram.isReady()&&G.delete(me)}),G.size===0){O(S);return}setTimeout(te,10)}De.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let ct=null;function Xn(S){ct&&ct(S)}function Nn(){xi.stop()}function cl(){xi.start()}const xi=new yu;xi.setAnimationLoop(Xn),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(S){ct=S,ie.setAnimationLoop(S),S===null?xi.stop():xi.start()},ie.addEventListener("sessionstart",Nn),ie.addEventListener("sessionend",cl),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(N),N=ie.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,N,L),h=Ce.get(S,M.length),h.init(N),M.push(h),se.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),vt.setFromProjectionMatrix(se,Gn,N.reversedDepth),fe=this.localClippingEnabled,j=re.init(this.clippingPlanes,fe),m=q.get(S,E.length),m.init(),E.push(m),ie.enabled===!0&&ie.isPresenting===!0){const te=_.xr.getDepthSensingMesh();te!==null&&to(te,N,-1/0,_.sortObjects)}to(S,N,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(he,ve),Ut=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ut&&we.addToRenderList(m,S),this.info.render.frame++,j===!0&&re.beginShadows();const V=h.state.shadowsArray;Te.render(V,S,N),j===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,O=m.transmissive;if(h.setupLights(),N.isArrayCamera){const te=N.cameras;if(O.length>0)for(let me=0,Se=te.length;me<Se;me++){const _e=te[me];dl(G,O,S,_e)}Ut&&we.render(S);for(let me=0,Se=te.length;me<Se;me++){const _e=te[me];ul(m,S,_e,_e.viewport)}}else O.length>0&&dl(G,O,S,N),Ut&&we.render(S),ul(m,S,N);L!==null&&R===0&&(Ze.updateMultisampleRenderTarget(L),Ze.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(_,S,N),pe.resetDefaultState(),b=-1,y=null,M.pop(),M.length>0?(h=M[M.length-1],j===!0&&re.setGlobalState(_.clippingPlanes,h.state.camera)):h=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function to(S,N,V,G){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)h.pushLight(S),S.castShadow&&h.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||vt.intersectsSprite(S)){G&&Fe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(se);const me=F.update(S),Se=S.material;Se.visible&&m.push(S,me,Se,V,Fe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||vt.intersectsObject(S))){const me=F.update(S),Se=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Fe.copy(S.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Fe.copy(me.boundingSphere.center)),Fe.applyMatrix4(S.matrixWorld).applyMatrix4(se)),Array.isArray(Se)){const _e=me.groups;for(let ke=0,He=_e.length;ke<He;ke++){const Le=_e[ke],Qe=Se[Le.materialIndex];Qe&&Qe.visible&&m.push(S,me,Qe,V,Fe.z,Le)}}else Se.visible&&m.push(S,me,Se,V,Fe.z,null)}}const te=S.children;for(let me=0,Se=te.length;me<Se;me++)to(te[me],N,V,G)}function ul(S,N,V,G){const O=S.opaque,te=S.transmissive,me=S.transparent;h.setupLightsView(V),j===!0&&re.setGlobalState(_.clippingPlanes,V),G&&Ie.viewport(C.copy(G)),O.length>0&&Qr(O,N,V),te.length>0&&Qr(te,N,V),me.length>0&&Qr(me,N,V),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function dl(S,N,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[G.id]===void 0&&(h.state.transmissionRenderTarget[G.id]=new Ni(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?qr:Wn,minFilter:Li,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const te=h.state.transmissionRenderTarget[G.id],me=G.viewport||C;te.setSize(me.z*_.transmissionResolutionScale,me.w*_.transmissionResolutionScale);const Se=_.getRenderTarget(),_e=_.getActiveCubeFace(),ke=_.getActiveMipmapLevel();_.setRenderTarget(te),_.getClearColor(W),K=_.getClearAlpha(),K<1&&_.setClearColor(16777215,.5),_.clear(),Ut&&we.render(V);const He=_.toneMapping;_.toneMapping=hi;const Le=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),h.setupLightsView(G),j===!0&&re.setGlobalState(_.clippingPlanes,G),Qr(S,V,G),Ze.updateMultisampleRenderTarget(te),Ze.updateRenderTargetMipmap(te),De.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let dt=0,Dt=N.length;dt<Dt;dt++){const Tt=N[dt],_t=Tt.object,Ue=Tt.geometry,It=Tt.material,rt=Tt.group;if(It.side===En&&_t.layers.test(G.layers)){const pn=It.side;It.side=hn,It.needsUpdate=!0,hl(_t,V,G,Ue,It,rt),It.side=pn,It.needsUpdate=!0,Qe=!0}}Qe===!0&&(Ze.updateMultisampleRenderTarget(te),Ze.updateRenderTargetMipmap(te))}_.setRenderTarget(Se,_e,ke),_.setClearColor(W,K),Le!==void 0&&(G.viewport=Le),_.toneMapping=He}function Qr(S,N,V){const G=N.isScene===!0?N.overrideMaterial:null;for(let O=0,te=S.length;O<te;O++){const me=S[O],Se=me.object,_e=me.geometry,ke=me.group;let He=me.material;He.allowOverride===!0&&G!==null&&(He=G),Se.layers.test(V.layers)&&hl(Se,N,V,_e,He,ke)}}function hl(S,N,V,G,O,te){S.onBeforeRender(_,N,V,G,O,te),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(_,N,V,G,S,te),O.transparent===!0&&O.side===En&&O.forceSinglePass===!1?(O.side=hn,O.needsUpdate=!0,_.renderBufferDirect(V,N,G,O,S,te),O.side=mi,O.needsUpdate=!0,_.renderBufferDirect(V,N,G,O,S,te),O.side=En):_.renderBufferDirect(V,N,G,O,S,te),S.onAfterRender(_,N,V,G,O,te)}function es(S,N,V){N.isScene!==!0&&(N=Ge);const G=ye.get(S),O=h.state.lights,te=h.state.shadowsArray,me=O.state.version,Se=Y.getParameters(S,O.state,te,N,V),_e=Y.getProgramCacheKey(Se);let ke=G.programs;G.environment=S.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(S.isMeshStandardMaterial?Nt:Xt).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,ke===void 0&&(S.addEventListener("dispose",Z),ke=new Map,G.programs=ke);let He=ke.get(_e);if(He!==void 0){if(G.currentProgram===He&&G.lightsStateVersion===me)return pl(S,Se),He}else Se.uniforms=Y.getUniforms(S),S.onBeforeCompile(Se,_),He=Y.acquireProgram(Se,_e),ke.set(_e,He),G.uniforms=Se.uniforms;const Le=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Le.clippingPlanes=re.uniform),pl(S,Se),G.needsLights=sd(S),G.lightsStateVersion=me,G.needsLights&&(Le.ambientLightColor.value=O.state.ambient,Le.lightProbe.value=O.state.probe,Le.directionalLights.value=O.state.directional,Le.directionalLightShadows.value=O.state.directionalShadow,Le.spotLights.value=O.state.spot,Le.spotLightShadows.value=O.state.spotShadow,Le.rectAreaLights.value=O.state.rectArea,Le.ltc_1.value=O.state.rectAreaLTC1,Le.ltc_2.value=O.state.rectAreaLTC2,Le.pointLights.value=O.state.point,Le.pointLightShadows.value=O.state.pointShadow,Le.hemisphereLights.value=O.state.hemi,Le.directionalShadowMap.value=O.state.directionalShadowMap,Le.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Le.spotShadowMap.value=O.state.spotShadowMap,Le.spotLightMatrix.value=O.state.spotLightMatrix,Le.spotLightMap.value=O.state.spotLightMap,Le.pointShadowMap.value=O.state.pointShadowMap,Le.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=He,G.uniformsList=null,He}function fl(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=Os.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function pl(S,N){const V=ye.get(S);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function id(S,N,V,G,O){N.isScene!==!0&&(N=Ge),Ze.resetTextureUnits();const te=N.fog,me=G.isMeshStandardMaterial?N.environment:null,Se=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:gr,_e=(G.isMeshStandardMaterial?Nt:Xt).get(G.envMap||me),ke=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,He=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Le=!!V.morphAttributes.position,Qe=!!V.morphAttributes.normal,dt=!!V.morphAttributes.color;let Dt=hi;G.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Dt=_.toneMapping);const Tt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,_t=Tt!==void 0?Tt.length:0,Ue=ye.get(G),It=h.state.lights;if(j===!0&&(fe===!0||S!==y)){const sn=S===y&&G.id===b;re.setState(G,S,sn)}let rt=!1;G.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==It.state.version||Ue.outputColorSpace!==Se||O.isBatchedMesh&&Ue.batching===!1||!O.isBatchedMesh&&Ue.batching===!0||O.isBatchedMesh&&Ue.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ue.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ue.instancing===!1||!O.isInstancedMesh&&Ue.instancing===!0||O.isSkinnedMesh&&Ue.skinning===!1||!O.isSkinnedMesh&&Ue.skinning===!0||O.isInstancedMesh&&Ue.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ue.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ue.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ue.instancingMorph===!1&&O.morphTexture!==null||Ue.envMap!==_e||G.fog===!0&&Ue.fog!==te||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==re.numPlanes||Ue.numIntersection!==re.numIntersection)||Ue.vertexAlphas!==ke||Ue.vertexTangents!==He||Ue.morphTargets!==Le||Ue.morphNormals!==Qe||Ue.morphColors!==dt||Ue.toneMapping!==Dt||Ue.morphTargetsCount!==_t)&&(rt=!0):(rt=!0,Ue.__version=G.version);let pn=Ue.currentProgram;rt===!0&&(pn=es(G,N,O));let ki=!1,mn=!1,yr=!1;const Pt=pn.getUniforms(),yn=Ue.uniforms;if(Ie.useProgram(pn.program)&&(ki=!0,mn=!0,yr=!0),G.id!==b&&(b=G.id,mn=!0),ki||y!==S){Ie.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Pt.setValue(D,"projectionMatrix",S.projectionMatrix),Pt.setValue(D,"viewMatrix",S.matrixWorldInverse);const cn=Pt.map.cameraPosition;cn!==void 0&&cn.setValue(D,Oe.setFromMatrixPosition(S.matrixWorld)),at.logarithmicDepthBuffer&&Pt.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Pt.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,mn=!0,yr=!0)}if(O.isSkinnedMesh){Pt.setOptional(D,O,"bindMatrix"),Pt.setOptional(D,O,"bindMatrixInverse");const sn=O.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Pt.setValue(D,"boneTexture",sn.boneTexture,Ze))}O.isBatchedMesh&&(Pt.setOptional(D,O,"batchingTexture"),Pt.setValue(D,"batchingTexture",O._matricesTexture,Ze),Pt.setOptional(D,O,"batchingIdTexture"),Pt.setValue(D,"batchingIdTexture",O._indirectTexture,Ze),Pt.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&Pt.setValue(D,"batchingColorTexture",O._colorsTexture,Ze));const bn=V.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&ne.update(O,V,pn),(mn||Ue.receiveShadow!==O.receiveShadow)&&(Ue.receiveShadow=O.receiveShadow,Pt.setValue(D,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(yn.envMap.value=_e,yn.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(yn.envMapIntensity.value=N.environmentIntensity),mn&&(Pt.setValue(D,"toneMappingExposure",_.toneMappingExposure),Ue.needsLights&&rd(yn,yr),te&&G.fog===!0&&Q.refreshFogUniforms(yn,te),Q.refreshMaterialUniforms(yn,G,X,J,h.state.transmissionRenderTarget[S.id]),Os.upload(D,fl(Ue),yn,Ze)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Os.upload(D,fl(Ue),yn,Ze),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Pt.setValue(D,"center",O.center),Pt.setValue(D,"modelViewMatrix",O.modelViewMatrix),Pt.setValue(D,"normalMatrix",O.normalMatrix),Pt.setValue(D,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const sn=G.uniformsGroups;for(let cn=0,no=sn.length;cn<no;cn++){const yi=sn[cn];qe.update(yi,pn),qe.bind(yi,pn)}}return pn}function rd(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function sd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,N,V){const G=ye.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),ye.get(S.texture).__webglTexture=N,ye.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:V,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){const V=ye.get(S);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0};const od=D.createFramebuffer();this.setRenderTarget=function(S,N=0,V=0){L=S,A=N,R=V;let G=!0,O=null,te=!1,me=!1;if(S){const _e=ye.get(S);if(_e.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(_e.__webglFramebuffer===void 0)Ze.setupRenderTarget(S);else if(_e.__hasExternalTextures)Ze.rebindTextures(S,ye.get(S.texture).__webglTexture,ye.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Le=S.depthTexture;if(_e.__boundDepthTexture!==Le){if(Le!==null&&ye.has(Le)&&(S.width!==Le.image.width||S.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ze.setupDepthRenderbuffer(S)}}const ke=S.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(me=!0);const He=ye.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(He[N])?O=He[N][V]:O=He[N],te=!0):S.samples>0&&Ze.useMultisampledRTT(S)===!1?O=ye.get(S).__webglMultisampledFramebuffer:Array.isArray(He)?O=He[V]:O=He,C.copy(S.viewport),z.copy(S.scissor),H=S.scissorTest}else C.copy(Pe).multiplyScalar(X).floor(),z.copy(Ke).multiplyScalar(X).floor(),H=At;if(V!==0&&(O=od),Ie.bindFramebuffer(D.FRAMEBUFFER,O)&&G&&Ie.drawBuffers(S,O),Ie.viewport(C),Ie.scissor(z),Ie.setScissorTest(H),te){const _e=ye.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,_e.__webglTexture,V)}else if(me){const _e=N;for(let ke=0;ke<S.textures.length;ke++){const He=ye.get(S.textures[ke]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ke,He.__webglTexture,V,_e)}}else if(S!==null&&V!==0){const _e=ye.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_e.__webglTexture,V)}b=-1},this.readRenderTargetPixels=function(S,N,V,G,O,te,me,Se=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=ye.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e){Ie.bindFramebuffer(D.FRAMEBUFFER,_e);try{const ke=S.textures[Se],He=ke.format,Le=ke.type;if(!at.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-G&&V>=0&&V<=S.height-O&&(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Se),D.readPixels(N,V,G,O,Ae.convert(He),Ae.convert(Le),te))}finally{const ke=L!==null?ye.get(L).__webglFramebuffer:null;Ie.bindFramebuffer(D.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(S,N,V,G,O,te,me,Se=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=ye.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e)if(N>=0&&N<=S.width-G&&V>=0&&V<=S.height-O){Ie.bindFramebuffer(D.FRAMEBUFFER,_e);const ke=S.textures[Se],He=ke.format,Le=ke.type;if(!at.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Qe),D.bufferData(D.PIXEL_PACK_BUFFER,te.byteLength,D.STREAM_READ),S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Se),D.readPixels(N,V,G,O,Ae.convert(He),Ae.convert(Le),0);const dt=L!==null?ye.get(L).__webglFramebuffer:null;Ie.bindFramebuffer(D.FRAMEBUFFER,dt);const Dt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Zd(D,Dt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Qe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,te),D.deleteBuffer(Qe),D.deleteSync(Dt),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,V=0){const G=Math.pow(2,-V),O=Math.floor(S.image.width*G),te=Math.floor(S.image.height*G),me=N!==null?N.x:0,Se=N!==null?N.y:0;Ze.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,me,Se,O,te),Ie.unbindTexture()};const ad=D.createFramebuffer(),ld=D.createFramebuffer();this.copyTextureToTexture=function(S,N,V=null,G=null,O=0,te=null){te===null&&(O!==0?(ur("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=O,O=0):te=0);let me,Se,_e,ke,He,Le,Qe,dt,Dt;const Tt=S.isCompressedTexture?S.mipmaps[te]:S.image;if(V!==null)me=V.max.x-V.min.x,Se=V.max.y-V.min.y,_e=V.isBox3?V.max.z-V.min.z:1,ke=V.min.x,He=V.min.y,Le=V.isBox3?V.min.z:0;else{const bn=Math.pow(2,-O);me=Math.floor(Tt.width*bn),Se=Math.floor(Tt.height*bn),S.isDataArrayTexture?_e=Tt.depth:S.isData3DTexture?_e=Math.floor(Tt.depth*bn):_e=1,ke=0,He=0,Le=0}G!==null?(Qe=G.x,dt=G.y,Dt=G.z):(Qe=0,dt=0,Dt=0);const _t=Ae.convert(N.format),Ue=Ae.convert(N.type);let It;N.isData3DTexture?(Ze.setTexture3D(N,0),It=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ze.setTexture2DArray(N,0),It=D.TEXTURE_2D_ARRAY):(Ze.setTexture2D(N,0),It=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const rt=D.getParameter(D.UNPACK_ROW_LENGTH),pn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ki=D.getParameter(D.UNPACK_SKIP_PIXELS),mn=D.getParameter(D.UNPACK_SKIP_ROWS),yr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Tt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Tt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ke),D.pixelStorei(D.UNPACK_SKIP_ROWS,He),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Le);const Pt=S.isDataArrayTexture||S.isData3DTexture,yn=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){const bn=ye.get(S),sn=ye.get(N),cn=ye.get(bn.__renderTarget),no=ye.get(sn.__renderTarget);Ie.bindFramebuffer(D.READ_FRAMEBUFFER,cn.__webglFramebuffer),Ie.bindFramebuffer(D.DRAW_FRAMEBUFFER,no.__webglFramebuffer);for(let yi=0;yi<_e;yi++)Pt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.get(S).__webglTexture,O,Le+yi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.get(N).__webglTexture,te,Dt+yi)),D.blitFramebuffer(ke,He,me,Se,Qe,dt,me,Se,D.DEPTH_BUFFER_BIT,D.NEAREST);Ie.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||S.isRenderTargetTexture||ye.has(S)){const bn=ye.get(S),sn=ye.get(N);Ie.bindFramebuffer(D.READ_FRAMEBUFFER,ad),Ie.bindFramebuffer(D.DRAW_FRAMEBUFFER,ld);for(let cn=0;cn<_e;cn++)Pt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bn.__webglTexture,O,Le+cn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,bn.__webglTexture,O),yn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,sn.__webglTexture,te,Dt+cn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,sn.__webglTexture,te),O!==0?D.blitFramebuffer(ke,He,me,Se,Qe,dt,me,Se,D.COLOR_BUFFER_BIT,D.NEAREST):yn?D.copyTexSubImage3D(It,te,Qe,dt,Dt+cn,ke,He,me,Se):D.copyTexSubImage2D(It,te,Qe,dt,ke,He,me,Se);Ie.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else yn?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(It,te,Qe,dt,Dt,me,Se,_e,_t,Ue,Tt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(It,te,Qe,dt,Dt,me,Se,_e,_t,Tt.data):D.texSubImage3D(It,te,Qe,dt,Dt,me,Se,_e,_t,Ue,Tt):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,te,Qe,dt,me,Se,_t,Ue,Tt.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,te,Qe,dt,Tt.width,Tt.height,_t,Tt.data):D.texSubImage2D(D.TEXTURE_2D,te,Qe,dt,me,Se,_t,Ue,Tt);D.pixelStorei(D.UNPACK_ROW_LENGTH,rt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ki),D.pixelStorei(D.UNPACK_SKIP_ROWS,mn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,yr),te===0&&N.generateMipmaps&&D.generateMipmap(It),Ie.unbindTexture()},this.copyTextureToTexture3D=function(S,N,V=null,G=null,O=0){return ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,N,V,G,O)},this.initRenderTarget=function(S){ye.get(S).__webglFramebuffer===void 0&&Ze.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ze.setTextureCube(S,0):S.isData3DTexture?Ze.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ze.setTexture2DArray(S,0):Ze.setTexture2D(S,0),Ie.unbindTexture()},this.resetState=function(){A=0,R=0,L=null,Ie.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}const ir=new wn(0,0,0,"YXZ"),rr=new P,kg={type:"change"},zg={type:"lock"},Bg={type:"unlock"},vc=.002,_c=Math.PI/2;class Hg extends Qh{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Vg.bind(this),this._onPointerlockChange=Gg.bind(this),this._onPointerlockError=Wg.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(e){super.connect(e),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;rr.setFromMatrixColumn(t.matrix,0),rr.crossVectors(t.up,rr),t.position.addScaledVector(rr,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;rr.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(rr,e)}lock(e=!1){this.domElement.requestPointerLock({unadjustedMovement:e})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function Vg(i){if(this.enabled===!1||this.isLocked===!1)return;const e=this.object;ir.setFromQuaternion(e.quaternion),ir.y-=i.movementX*vc*this.pointerSpeed,ir.x-=i.movementY*vc*this.pointerSpeed,ir.x=Math.max(_c-this.maxPolarAngle,Math.min(_c-this.minPolarAngle,ir.x)),e.quaternion.setFromEuler(ir),this.dispatchEvent(kg)}function Gg(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(zg),this.isLocked=!0):(this.dispatchEvent(Bg),this.isLocked=!1)}function Wg(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const Xg=.008,xc=Math.PI/2.1;function qg(i,e,t=Xg){return{yaw:i.yaw-e.dx*t,pitch:Math.max(-xc,Math.min(xc,i.pitch-e.dy*t))}}function Yg(i,e){const t=new Set(e);let n=i;for(;n;){if(t.has(n))return n;n=n.parent}return null}function jg(i,e,t,n,r,s){return{id:`book-${i}-chapter-${e}`,title:t,theme:n,rooms:s.map(([o,a],l)=>({id:`b${i}-c${e}-r${l+1}`,title:o,theme:n,puzzle:a,difficulty:Number((r+l*.2).toFixed(1)),status:i===1&&(e===1||e===2&&l<=3||e===3&&l<=3||e===4&&l<=3)||i===2&&e===1&&l<=2?"playable":"planned"}))}}const ht=jg,Fr=[{id:"book-1",number:1,title:"魔法石",subtitle:"霍格沃茨的第一道门",palette:["#7a1f2b","#d3a84b","#19151d"],visualTheme:"温暖烛光、哥特学院、深红与金色、古老石墙",chapters:[ht(1,1,"初入魔法世界","猫头鹰信件、对角巷、魔杖与分院仪式",1,[["猫头鹰来信","重组地址碎片并找出被信件覆盖的隐藏出口"],["对角巷清单","依据课程清单匹配商店、物品和正确数量"],["魔杖选择","组合木材、杖芯、光效和声音反馈"],["分院仪式","排列四学院象征与人物品质打开宴会厅"]]),ht(1,2,"城堡禁区","移动楼梯、画像、巡夜与三头犬活板门",1.5,[["移动楼梯","观察周期并在正确时机连接三段路线"],["会说话的画像","从画像对话矛盾中推导正确口令"],["管理员的巡夜","利用盔甲、猫叫与暗门进行潜行"],["三头犬活板门","组合乐器并复现让守门生物入睡的旋律"]]),ht(1,3,"镜中秘密","飞行课、巨怪、禁书区与厄里斯魔镜",2,[["飞行课遗失物","控制漂浮轨迹把散落物送回正确位置"],["巨怪洗手间","利用悬浮机关移动障碍并建立逃生路线"],["图书馆禁书区","按历史时间线排列书脊并避开尖叫书籍"],["厄里斯魔镜","比较镜像与现实差异选择真正需要的物品"]]),ht(1,4,"地下试炼","魔鬼网、飞钥匙、巫师棋与魔法石",2.5,[["魔鬼网","控制光源与节奏摆脱收缩藤蔓"],["飞钥匙房","依据翅膀损伤、速度和锁孔锁定钥匙"],["巫师棋","规划最少牺牲路线穿过动态棋盘"],["魔法石密室","结合药剂逻辑、镜像线索与章节物品"]])]},{id:"book-2",number:2,title:"密室",subtitle:"蛇语在墙壁深处回响",palette:["#123d32","#7b9361","#0b1412"],visualTheme:"潮湿石窟、蛇形纹样、墨绿冷光、日记墨迹",chapters:[ht(2,1,"不祥警告","精灵封锁、飞车、打人柳与墙上血字",2.4,[["精灵的封锁","修复被干扰物件并找出住宅出口"],["飞车失控","在移动场景中调整动力方向与重量"],["打人柳下","观察树枝攻击规律并匹配安全节拍"],["墙上的血字","利用反射光和水迹还原消失警告"]]),ht(2,2,"决斗与变形","曼德拉草、决斗俱乐部、复方汤剂与伪装",2.9,[["曼德拉草温室","按成熟度、盆土和叫声完成移栽"],["决斗俱乐部","运用护盾、解除和反击的克制关系"],["复方汤剂仓库","按属性、火候与时间调制药剂"],["斯莱特林休息室","在伪装倒计时内筛选有效情报"]]),ht(2,3,"日记中的记忆","盥洗室、日记、蜘蛛巢与被篡改往事",3.4,[["被淹没的盥洗室","调整水管压力显露蛇形入口"],["日记墨迹","在文字消失前连接人物地点与时间"],["禁林蜘蛛巢","依据声音方向和蛛网震动逃生"],["海格往事","对比现实物证与记忆找出篡改"]]),ht(2,4,"蛇怪密室","蛇语石门、管道、凤凰与日记核心",3.9,[["蛇语石门","通过音高和节奏复现门锁序列"],["管道迷宫","依据水流回声和蛇皮判断路线"],["凤凰与毒牙","避开直视威胁并组合治疗与攻击"],["日记核心","在墨迹侵蚀倒计时中定位核心弱点"]])]},{id:"book-3",number:3,title:"阿兹卡班的囚徒",subtitle:"地图、月光与闭合的时间",palette:["#243747","#96a6b4","#17191d"],visualTheme:"暴风雨、月光、旧羊皮地图、旋转钟表",chapters:[ht(3,1,"逃犯阴影","骑士巴士、怪物书、摄魂怪与密道",3.4,[["骑士巴士","在高速变化车厢中固定行李并识别信号"],["怪物书","通过书脊束带和触摸顺序打开教材"],["摄魂怪列车","维持光源和积极记忆阻止冻结"],["霍格莫德密道","使用活点脚印破解隐藏路线"]]),ht(3,2,"时间与恐惧","博格特、月相、占卜与钟楼",3.9,[["博格特衣柜","识别恐惧规则并用荒诞变形解除"],["卢平课堂","根据月相足迹与毛发辨别形态"],["占卜教室","区分随机图案与可重复预兆"],["钟楼机关","同步三个不同时速的钟摆"]]),ht(3,3,"尖叫棚屋","打人柳、身份、斑斑与满月",4.4,[["打人柳密道","组合地图时序和树枝周期进入地道"],["棚屋身份谜题","根据足迹魔杖和证词判断身份"],["斑斑的秘密","追踪体型变化与缺失手指揭示伪装"],["满月倒计时","在环境变化前配置防护与撤离路线"]]),ht(3,4,"时间转换器","守护神、双时间线、塔楼与闭环",4.9,[["湖边守护神","收集记忆碎片构筑完整守护神"],["双时间线救援","让过去与现在的机关保持一致"],["塔楼营救","在不被过去自己发现时改变物件"],["闭环逃脱","同时满足三项事件且不制造时间矛盾"]])]},{id:"book-4",number:4,title:"火焰杯",subtitle:"荣耀背后隐藏着门钥匙",palette:["#1d3f5e","#59a6bd","#d67533"],visualTheme:"国际赛事、蓝色火焰、深湖、龙巢与活体迷宫",chapters:[ht(4,1,"黑魔标记","门钥匙、世界杯营地、骚乱与标记",4.6,[["门钥匙山丘","通过异常触感和空间残影找出门钥匙"],["世界杯营地","依据旗帜语言和空间结构找到营地"],["骚乱撤离","在受限视野中利用声音与地标撤离"],["黑魔标记","重建事件顺序并找出施法位置"]]),ht(4,2,"争霸赛开启","火焰杯、金蛋、龙巢与水下歌声",5.1,[["火焰杯契约","解读年龄线契约符号与参赛规则"],["金蛋线索","按龙种巢穴与护甲选择策略"],["龙巢夺蛋","动态躲避攻击并用场景机关夺蛋"],["水下歌声","改变声音介质后解析旋律密码"]]),ht(4,3,"黑湖营救","鳃囊草、深湖、人鱼村与超额救援",5.6,[["鳃囊草配方","限时辨别水下呼吸材料"],["深湖导航","管理氧气光照和水流寻找地标"],["人鱼村契约","通过符号语言确认人质与规则"],["超额救援","在资源不足时规划多人救援顺序"]]),ht(4,4,"迷宫与墓地","移动树篱、斯芬克斯、奖杯与墓地",6.1,[["会移动的树篱","记录路径变化规律避免循环"],["斯芬克斯问题","在时间压力下完成文字拆分谜题"],["奖杯门钥匙","识别被替换的终点机关并反制"],["墓地决战","组合护盾闪避与环境互动完成逃脱"]])]},{id:"book-5",number:5,title:"凤凰社",subtitle:"规则、反抗与预言之门",palette:["#9e6174","#ead6d6","#111217"],visualTheme:"压抑粉色办公室、秘密训练室、宣传墙与神秘事务司",chapters:[ht(5,1,"审判与监视","巷道、听证会、调查官与血字惩罚",5.8,[["摄魂怪巷道","在照明失效时保护同伴"],["魔法部听证会","按时间证词和法条建立辩护链"],["高级调查官","从不断新增规则中找出逻辑冲突"],["血字惩罚室","利用镜像书写与转印解除机关"]]),ht(5,2,"邓布利多军","有求必应屋、防御阵列、名单与突袭",6.3,[["有求必应屋","用准确需求召唤训练空间"],["基础防御阵列","让位置和咒语方向组成完整护盾"],["秘密成员名单","通过墨水魔法识别泄密路径"],["突袭逃脱","在空间收缩时疏散成员并销毁证据"]]),ht(5,3,"预言梦境","大脑封闭术、壁炉网络、禁林与诱饵",6.8,[["大脑封闭术","区分真实记忆诱导画面与植入信息"],["壁炉网络","连接正确地点并绕过被监控节点"],["禁林审判","利用生物规则化解冲突"],["虚假营救","从不完整梦境中发现诱饵"]]),ht(5,4,"神秘事务司","旋转门厅、时间厅、预言大厅与帷幔",7.3,[["旋转门厅","旋转后依靠非视觉线索确认出口"],["时间厅","控制不同时间方向的物体"],["预言大厅","按人物关系和编号找到预言球"],["帷幔之战","跨房间协同并保护预言撤离"]])]},{id:"book-6",number:6,title:"混血王子",subtitle:"批注、记忆与海边洞穴",palette:["#4c493b","#b89a59","#14221d"],visualTheme:"旧课本批注、液态记忆、暗金墨绿与海边洞穴",chapters:[ht(6,1,"王子的课本","魔药、解毒剂、无声咒与身份批注",6.8,[["魔药教室","比较标准配方与手写批注判断改动"],["解毒剂链","从症状反推毒素与材料"],["无声咒语","依据目标反馈调整施法意图"],["身份批注","分析字迹知识和年代锁定主人"]]),ht(6,2,"记忆之谜","记忆储藏、宴会、篡改与魂器",7.3,[["记忆储藏室","按人物地点和情绪整理液态记忆"],["斯拉格霍恩宴会","从社交关系和回避话题提取线索"],["被篡改的记忆","比较音画不同步与缺失帧"],["魂器真相","连接跨越数十年的物件和人物关系"]]),ht(6,3,"消失柜","有求必应屋、双柜、毒物与入侵计划",7.8,[["有求必应屋迷藏","在堆积物三维迷宫定位同一物件"],["双柜共振","让两个远端房间状态实时联动"],["项链与毒酒","建立受害者传递路径与目标因果图"],["马尔福的计划","在不触发防御时拆解入侵路线"]]),ht(6,4,"海边洞穴","岩壁、黑湖小船、石盆与天文塔",8.3,[["岩壁入口","通过潮汐血液和岩层发现入口"],["黑湖小船","平衡重量人数与魔法强度"],["毒药石盆","规划每次取药后的空间和资源变化"],["天文塔","在多重倒计时中结合洞穴与入侵信息"]])]},{id:"book-7",number:7,title:"死亡圣器",subtitle:"七年线索汇聚于最后一夜",palette:["#252525","#b9b4a4","#7e2e25"],visualTheme:"战争废墟、荒野营地、银色牝鹿、古老符号与燃烧城堡",chapters:[ht(7,1,"逃亡之路","七个波特、婚礼、荒野与魔法部",8,[["七个波特","按身份细节与路线限制分配护送"],["婚礼警报","场景突变后判断出口与可信人物"],["荒野营地","管理保护咒食物方向与广播情报"],["魔法部潜入","三种伪装权限交叉配合完成任务"]]),ht(7,2,"圣器传说","家族遗物、山谷、银色牝鹿与三兄弟",8.5,[["格里莫广场遗物","按家族树和房间历史追踪挂坠盒"],["戈德里克山谷","组合墓碑童话和历史记录"],["银色牝鹿","追踪守护神并管理冰湖资源"],["三兄弟传说","让三件圣器机制在同一模型中成立"]]),ht(7,3,"古灵阁劫案","贝壳小屋、妖精通道、复制金库与巨龙",9,[["贝壳小屋审讯","用魔杖归属和证词制定潜入计划"],["妖精通道","高速切换轨道岔路制动与伪装"],["复制金库","规划最少接触路线避免指数复制"],["巨龙逃生","解除锁链打开穹顶并利用巨龙行为"]]),ht(7,4,"霍格沃茨决战","冠冕、厉火、城堡防线与终局密室",9.4,[["寻找冠冕","整合七部历史线索定位最后魂器"],["厉火密室","在扩散火焰中边移动边改变地形"],["城堡防线","把画像盔甲植物和咒语部署到战区"],["终局密室","综合魔杖归属魂器状态与前关信息"]])]}],$g={books:Fr.length,chapters:Fr.reduce((i,e)=>i+e.chapters.length,0),rooms:Fr.flatMap(i=>i.chapters).reduce((i,e)=>i+e.rooms.length,0)},Wr="hogwarts-escape-progress";function Kg(i){i.removeItem(Wr)}function wu(i){const e=JSON.parse(i.getItem(Wr));return e?{completedChapter:e.completedChapter,continueFrom:e.continueFrom}:null}function Zg(i){const{book:e,chapter:t,room:n}=i.continueFrom;return(e-1)*16+(t-1)*4+n-1}function Jg(i,{book:e,chapter:t}){const n=i?.completedChapter;return n?.book===e&&n.chapter+1===t||n?.book+1===e&&n.chapter===4&&t===1}function lt(i,{book:e,chapter:t,room:n}){const r=JSON.parse(i.getItem(Wr));i.setItem(Wr,JSON.stringify({version:1,...r?.completedChapter?{completedChapter:r.completedChapter}:{},continueFrom:{book:e,chapter:t,room:n}}))}function Js(i,{book:e,chapter:t,room:n}){i.setItem(Wr,JSON.stringify({version:1,completedChapter:{book:e,chapter:t},continueFrom:{book:e,chapter:t,room:n}}))}const Qg={en:{魔法石:"Philosopher's Stone",密室:"Chamber of Secrets",阿兹卡班的囚徒:"Prisoner of Azkaban",火焰杯:"Goblet of Fire",凤凰社:"Order of the Phoenix",混血王子:"Half-Blood Prince",死亡圣器:"Deathly Hallows",霍格沃茨的第一道门:"The First Gate of Hogwarts","温暖烛光、哥特学院、深红与金色、古老石墙":"Warm candlelight, Gothic halls, deep crimson and gold, and ancient stone walls.",初入魔法世界:"Entering the Wizarding World",城堡禁区:"Forbidden Castle Corridors",镜中秘密:"Secrets in the Mirror",地下试炼:"Underground Trials",重组地址碎片并找出被信件覆盖的隐藏出口:"Reassemble address fragments and uncover the hidden exit buried beneath the letters.","依据课程清单匹配商店、物品和正确数量":"Match each shop, item, and quantity to the school supply list.","组合木材、杖芯、光效和声音反馈":"Combine wood, core, light, and sound feedback to find the right wand.",排列四学院象征与人物品质打开宴会厅:"Match the four house emblems with their defining traits to open the Great Hall.",观察周期并在正确时机连接三段路线:"Observe the cycle and connect three route segments at the right moment.",从画像对话矛盾中推导正确口令:"Use contradictions in the portraits’ testimony to deduce the password.","利用盔甲、猫叫与暗门进行潜行":"Use armor, a cat’s bell, and a secret door to slip past the patrol.",组合乐器并复现让守门生物入睡的旋律:"Combine instruments and recreate the melody that sends the guardian to sleep.",控制漂浮轨迹把散落物送回正确位置:"Control floating trajectories to return each lost object to its proper place.",利用悬浮机关移动障碍并建立逃生路线:"Use levitation mechanisms to clear obstacles and build an escape route.",按历史时间线排列书脊并避开尖叫书籍:"Order book spines by historical date while avoiding the screaming volume.",比较镜像与现实差异选择真正需要的物品:"Compare reflection and reality to choose what is truly needed.",控制光源与节奏摆脱收缩藤蔓:"Control light and rhythm to escape the tightening vines.","依据翅膀损伤、速度和锁孔锁定钥匙":"Identify the key by wing damage, speed, and the lock’s keyhole.",规划最少牺牲路线穿过动态棋盘:"Plan a route across the living board with the fewest sacrifices.","结合药剂逻辑、镜像线索与章节物品":"Combine potion logic, mirror clues, and items gathered throughout the chapter.",猫头鹰来信:"Owl Post","目标：按弗农改变藏身处的时间顺序检查四封信":"Objective: inspect the four letters in the order the Dursleys changed hiding places.","地址会追着哈利变化。错误选择会让已确认的信全部重新飞散。":"The address follows Harry wherever he goes. A wrong choice scatters every confirmed letter.",对角巷清单:"Diagon Alley List","目标：按霍格沃茨清单采购四件合规格物品，预算 12 加隆":"Objective: buy four correctly specified school items in list order with a budget of 12 Galleons.","课本 → 二号锡制坩埚 → 猫头鹰 → 魔杖盒。核对规格与价签，买错会清空采购篮。":"Textbook → size 2 pewter cauldron → owl → wand case. Check every specification and price; a wrong purchase empties the basket.",魔杖选择:"The Wand Chooses","目标：第一阶段，从三种木材中找出与你产生稳定共鸣的一种":"Objective: first, find the one wood among three that resonates steadily with you.","木材线索：闪电形旧伤旁，常青叶不会在严冬凋零。选错会触发失控魔法。":"Wood clue: beside the lightning-shaped scar, an evergreen leaf never fades in winter. A wrong choice unleashes wild magic.",分院仪式:"Sorting Ceremony","目标：走近分院帽，观察大厅里的四学院象征":"Objective: approach the Sorting Hat and study the four house emblems in the Great Hall.","勇气、忠诚、智慧与野心各有象征；分院帽正在等待你的选择。":"Courage, loyalty, wisdom, and ambition each have an emblem. The Sorting Hat awaits your choice.",移动楼梯:"Moving Staircases","目标：依据钟摆与月相路线，依次稳定三座移动楼梯":"Objective: use the pendulum and moon-route clues to stabilize three moving staircases in order.","路线铭文：从最低的平台起步；月光桥只在钟摆居中时停驻；最后登上最高塔。选错会让路线复位并增加 5 秒惩罚。":"Route inscription: begin at the lowest landing; the moonlit bridge stops only when the pendulum is centered; finish at the highest tower. A mistake resets the route and adds five seconds.",会说话的画像:"Talking Portraits","目标：比较三幅画像的证词，按可信的发言顺序询问口令":"Objective: compare three portraits’ testimony and question them in the credible order to reveal the password.","学者说骑士不是第一位；骑士承认学者必须先发言；女士说自己在骑士之后。错误询问会惊动走廊并清空推理。":"The scholar says the knight is not first; the knight admits the scholar must speak first; the lady says she follows the knight. A wrong question alerts the corridor and clears your deductions.",管理员的巡夜:"The Caretaker’s Patrol","目标：利用盔甲遮挡、猫铃声与暗门，避开管理员的灯光巡查":"Objective: use the suit of armor, the cat’s bell, and the secret door to evade the caretaker’s lantern patrol.","巡夜图记：灯光先扫过空盔甲；猫铃能把脚步引向反方向；最后掀开独角兽挂毯。走错会清空路线并提高警戒。":"Patrol notes: the light first sweeps the empty armor; the cat’s bell draws footsteps away; finally lift the unicorn tapestry. A wrong move resets the route and raises the alert.",三头犬活板门:"Three-Headed Guardian","目标：按守门生物能接受的层次，奏出完整安眠旋律":"Objective: perform the complete lullaby in the layers the guardian can tolerate.","褪色乐谱写着：先让气息像夜风进入梦乡，再让琴弦托住梦境，最后以发条的轻响封住鼾声。错奏会重置旋律并惊醒守卫。":"The faded score says: let breath drift into sleep like a night wind, let strings cradle the dream, then seal the snoring with a soft clockwork chime. A wrong note resets the melody and wakes the guardian.",飞行课遗失物:"Flying Lesson: Lost Property","目标：借助风向旗判断重量，依次把三件遗失物送入对应的安全轨迹":"Objective: read the windsock and send three lost objects into their safe flight paths in weight order.","风向板写着：最轻的红色织物先借低风归队；有月纹的笔记随后穿过中环；沉重黄铜罗盘最后沿高风落到新生手中。错序会卷起乱流并吹散全部物品。":"The wind board says: the light red cloth rides the low wind first; the moon-marked notebook follows through the middle ring; the heavy brass compass returns last on the high current. A wrong order creates turbulence and scatters everything.",巨怪洗手间:"Troll Washroom","目标：依次稳定漏水、悬浮瓦砾，再放下横梁架出逃生路线":"Objective: stop the leak, levitate the rubble, then lower the beam to build an escape route.","破裂水管正在冲散落脚点。先转动月纹阀止水，再让碎石升起清出通道，最后才能把高处横梁平稳放到沟渠上。错序会让巨怪逼近并震塌路线。":"The burst pipe is washing away every foothold. Turn the moon-marked valve first, raise the rubble to clear the passage, then lower the high beam across the channel. A wrong order brings the troll closer and collapses the route.",图书馆禁书区:"Restricted Section","目标：依据馆藏年代，按从古到今的顺序点亮三本安全书脊":"Objective: use the catalogue dates to illuminate three safe book spines from oldest to newest.","目录铜牌记载：四学院建校录最古老；龙灾账册写于其后数百年；月蚀纪事刚完成修订。避开锁链缠绕、会尖叫的无年卷。":"The brass catalogue says: the Founders’ Record is oldest; the Dragon Calamity Ledger came centuries later; the Eclipse Chronicle was just revised. Avoid the chained, dateless volume that screams.",厄里斯魔镜:"Mirror of Erised","目标：比较镜中欲望与现实处境，依次选择真正需要的三件物品":"Objective: compare desire with reality and choose the three things you truly need, in order.","镜中人戴着王冠、捧着奖杯，却在现实的寒风中发抖。先御寒，再为黑暗出口照路；最后记住：能共同离开的人，比独占的荣誉更重要。":"The reflection wears a crown and holds a trophy, yet shivers in the real cold. Choose warmth first, then light for the dark exit, and remember: a companion who leaves with you matters more than glory kept alone.",魔鬼网:"Devil’s Snare","目标：保持镇静，按正确节奏控制蓝铃火焰，让藤蔓松开地下出口":"Objective: stay calm and control the bluebell flames in the right rhythm to make the vines release the underground exit.","挣扎会让藤蔓收紧。先放松摆脱缠绕，再点燃冷焰，最后维持稳定光照；猛烈爆燃只会惊动整片根网。":"Struggling tightens the vines. Relax first, ignite the cool flame, then hold a steady light; a violent burst only alarms the entire root network.","停止挣扎 · 蓝铃冷焰 · 三拍恒光":"STOP STRUGGLING · BLUEBELL FLAME · THREE STEADY PULSES",放松呼吸:"Relax and breathe","I · 停止挣扎":"I · STOP STRUGGLING",点燃蓝铃冷焰:"Kindle bluebell flame","II · 微光驱藤":"II · COOL LIGHT REPELS VINES",维持恒定光照:"Hold steady light","III · 稳住三拍":"III · HOLD THREE PULSES",猛烈爆燃:"Wild flare","诱饵 · 惊动根网":"DECOY · ALARMS ROOT NET","地下试炼已加载：放松藤蔓缠绕，以蓝铃冷焰和三拍恒光打开根网。":"Underground Trial loaded: relax the vines, then use bluebell flame and three steady pulses to open the root net.","“{label}”打乱节奏！根网骤然收紧至 {count} 级；先放松，再重新开始。":"“{label}” broke the rhythm! The root net tightened to level {count}; begin again by relaxing.","你停止挣扎，第一层藤蔓松开。现在点燃不会灼伤施法者的蓝铃冷焰。":"You stopped struggling and the first vines loosened. Now kindle the bluebell flame that will not burn its caster.","冷焰逼退根须。最后保持三拍恒光，不要让亮度突然爆发。":"The cool flame drives back the roots. Hold three steady pulses now; do not let the light flare.","魔鬼网光照节奏已完成 {count} / 3":"Light rhythm completed: {count} / 3","{label}奏效，地下出口上方的藤蔓正在退缩。":"{label} worked; the vines above the underground exit are retreating.","魔鬼网完成：稳定冷焰驱散根网，通往飞钥匙房的地下出口已经开启":"Devil’s Snare complete: steady cool flame dispersed the root net and opened the underground exit to Flying Keys.","镇静削弱缠绕，蓝铃冷焰逼退藤蔓，三拍恒光打开根网。前方传来成群翅膀的振动声。":"Calm weakened the grip, bluebell flame repelled the vines, and three steady pulses opened the roots. A swarm of wings hums ahead.","第一部 · 第四章 · 第 1 关完成":"Book 1 · Chapter 4 · Room 1 complete",冷焰退藤:"Vines Before Cool Flame","魔鬼网缩回石缝——正在进入飞钥匙房！":"The Devil’s Snare withdraws into the stone—entering Flying Keys!",飞钥匙房:"Flying Keys","目标：依次确认翅膀损伤、飞行轨迹和锁孔材质，锁定唯一真钥匙":"Objective: identify wing damage, flight path, and keyhole material in order to find the one true key.","门锁留下银屑；真正用过的钥匙左翼弯折，负重后会沿顺时针轨迹下沉。先观察损伤，再追踪轨迹，最后核对银色钥匙。":"The lock left silver filings. The used key has a bent left wing and sinks clockwise under weight. Inspect the damage, trace the path, then confirm the silver key.","左翼折痕 · 顺时针下沉 · 银屑锁孔":"BENT LEFT WING · CLOCKWISE DESCENT · SILVER LOCK",左翼弯折的钥影:"Key with a bent left wing","I · 使用损伤":"I · WEAR DAMAGE",顺时针下沉轨迹:"Clockwise descending trail","II · 负重飞行":"II · WEIGHTED FLIGHT",小型银钥匙:"Small silver key","III · 银屑吻合":"III · SILVER MATCH",华丽金钥匙:"Ornate golden key","诱饵 · 锁孔无金屑":"DECOY · NO GOLD IN LOCK","飞钥匙房已加载：依次核对折翼、飞行轨迹和锁孔银屑。":"Flying Keys loaded: inspect the bent wing, clockwise trail, and silver filings in order.","“{label}”惊散了钥匙群！追逐失误升至 {count}，三条证据需要重新确认。":"“{label}” scattered the flock! Pursuit errors rose to {count}; recheck all three clues.","左翼折痕与门框刮痕一致。现在观察负重钥匙群，寻找顺时针下沉的轨迹。":"The bent left wing matches the frame scratch. Now watch the weighted flock for a clockwise descending path.","下沉轨迹锁定了小型钥匙。最后核对锁孔银屑，排除华丽但材质不符的金钥匙。":"The descending path identifies a small key. Compare the lock’s silver filings last and reject the ornate golden mismatch.","飞钥匙证据已确认 {count} / 3":"Flying-key clues confirmed: {count} / 3","{label}与现场证据吻合，钥匙群的范围缩小了。":"{label} matches the physical evidence; the flock narrows.","飞钥匙房完成：折翼银钥匙准确嵌入门锁，通往巫师棋盘的石门已经开启":"Flying Keys complete: the bent-wing silver key fits, opening the stone door to Wizard Chess.","折翼证明它被使用过，顺时针下沉暴露负重，银屑完成最终材质核对。前方传来巨大棋子的脚步声。":"The bent wing proves prior use, the clockwise descent reveals its weight, and the filings confirm silver. Giant chess pieces stir ahead.","第一部 · 第四章 · 第 2 关完成":"Book 1 · Chapter 4 · Room 2 complete",折翼银钥匙:"The Bent-Wing Silver Key","银钥匙旋转一周，棋盘石门轰然开启——正在进入巫师棋盘！":"The silver key turns once and the stone door crashes open—entering Wizard Chess!","巫师棋已加载：先诱敌，再双攻，最后沿空线推进。":"Wizard Chess loaded: decoy first, fork second, then advance along the open file.",巫师棋:"Wizard Chess","目标：用最少牺牲打开通往对岸的安全棋路":"Objective: open a safe route across the board with the fewest sacrifices.","黑后封锁中央。先用边兵引开主教，再让骑士双攻国王与城堡，最后直车沿空出的纵线推进；贸然冲后会让已投入的棋子全部被吃。":"The black queen controls the center. Use the edge pawn to draw off the bishop, fork king and rook with the knight, then advance the rook along the open file. Charging the queen too soon loses every committed piece.","边兵牵制主教 · 骑士双攻 · 城堡穿过空线":"EDGE PAWN DRAWS BISHOP · KNIGHT FORK · ROOK CROSSES OPEN FILE",边兵诱敌:"Edge-pawn decoy","I · 引开主教":"I · DRAW OFF BISHOP",骑士双攻:"Knight fork","II · 将军攻车":"II · CHECK KING AND ROOK",城堡沿空线推进:"Rook along open file","III · 空线抵岸":"III · CROSS THE OPEN FILE",王后强攻:"Queen charge","诱饵 · 暴露全线":"DECOY · EXPOSES THE FILE","“{label}”暴露了棋路！巨棋吃掉已投入棋子，被吃总数升至 {count}。":"“{label}” exposed the route! Giant pieces captured the committed force; {count} pieces lost in total.","边兵引开了黑主教。现在用骑士同时威胁国王与城堡，迫使黑方让出中央。":"The edge pawn drew off the black bishop. Now fork the king and rook with the knight to force the center open.","骑士双攻奏效，纵线已经清空。最后让城堡沿直线推进到对岸。":"The knight fork worked and cleared the file. Send the rook straight across to the far rank.","安全棋步已确认 {count} / 3":"Safe moves confirmed: {count} / 3","{label}成立，巨型黑棋被迫改换阵形。":"{label} works; the giant black pieces are forced to change formation.","巫师棋完成：仅以边兵诱敌，骑士与城堡已安全抵达对岸":"Wizard Chess complete: only the edge pawn was sacrificed; the knight and rook reached the far side safely.","诱敌打开斜线，双攻迫使让位，城堡穿过空线。最后的魔法石密室就在棋盘后方。":"The decoy opened a diagonal, the fork forced a retreat, and the rook crossed the open file. The Stone Chamber lies beyond the board.","第一部 · 第四章 · 第 3 关完成":"Book 1 · Chapter 4 · Room 3 complete",最少牺牲棋路:"The Least-Sacrifice Route","白色城堡抵达对岸，火门显现——正在进入魔法石密室！":"The white rook reaches the far rank and a fire door appears—entering the Stone Chamber!","最终密室已加载：先解药剂逻辑，再辨镜像，最后证明守护意图。":"Final chamber loaded: solve the potions, read the mirror, then prove your protective intent.",魔法石密室:"The Stone Chamber","目标：穿过黑焰，解读镜像，并证明你只想保护魔法石":"Objective: cross the black flames, interpret the mirror, and prove you seek only to protect the Stone.","七瓶药剂中，最小的瓶子可穿过黑焰。镜中真正的守护者口袋仍空着；想夺取魔法石的手只会触发密室腐化。":"Of seven potions, the smallest bottle crosses the black fire. In the mirror, a true guardian’s pocket remains empty; a hand reaching to take the Stone only awakens the chamber’s corruption.","七瓶取最小 · 镜中口袋为空 · 双手只作守护":"SMALLEST OF SEVEN · EMPTY MIRROR POCKET · OPEN HANDS PROTECT","厄里斯 · 欲望倒写显形":"ERISED · DESIRE REVEALED IN REVERSE",最小银瓶:"Smallest silver bottle","I · 穿越黑焰":"I · CROSS BLACK FIRE",空口袋镜影:"Empty-pocket reflection","II · 不占有":"II · CLAIM NOTHING",守护石的誓言:"Vow to protect the Stone","III · 只为保护":"III · PROTECT ONLY",夺取石的手:"Grasping hand","诱饵 · 占有欲":"DECOY · POSSESSIVE INTENT","“{label}”暴露了占有欲！线索消散，腐化诱惑升至 {count}。":"“{label}” revealed possessive intent! The clues dissolved and corruption rose to {count}.","最小银瓶让你穿过黑焰。现在观察镜中衣袋：真正不求占有的人，口袋里不会出现石头。":"The smallest silver bottle carried you through the black fire. Now inspect the reflected pocket: someone who seeks no possession will find no Stone there.","空口袋镜影证明你没有取石欲望。最后明确你的意图：保护它，而不是拥有它。":"The empty reflected pocket proves you do not seek the Stone. Declare your final intent: protect it, never possess it.","魔法石密室线索已确认 {count} / 3":"Stone Chamber clues confirmed: {count} / 3","{label}通过了密室检验，镜面中的金光更加清晰。":"{label} passed the chamber’s test; gold light sharpens in the mirror.","第一部完成：魔法石只向无意占有、决心守护的人显现":"Book One complete: the Stone appears only to one who will protect it without possessing it.","药剂穿过黑焰，空口袋识破欲望，守护誓言让魔法石安全显现。新的绿色干扰正在住宅中聚集。":"The potion crossed the black fire, the empty pocket exposed desire, and the protective vow revealed the Stone safely. Green interference is gathering at Privet Drive.","第一部 · 魔法石完成":"Book 1 · Philosopher’s Stone complete","第二部 · 不祥警告":"Book 2 · An Ominous Warning","守护之石化作金光——正在返回住宅，调查精灵留下的三重封锁！":"The protected Stone dissolves into gold light—returning to Privet Drive to investigate the elf’s triple blockade!","第二部首关已加载：沿邮槽、蛋糕与飞路炉追踪绿色魔力残痕。":"Book Two’s first room loaded: follow the green traces from the letter slot to the cake, then the fireplace.",精灵的封锁:"The Elf’s Blockade","目标：循魔力残痕解除住宅中的三重封锁，赶往国王十字车站":"Objective: follow the magical residue, break the house’s triple blockade, and reach King’s Cross.","绿色干扰从邮槽进入，绕过悬浮蛋糕，最后汇入壁炉封印。错碰尖叫灯会让封锁重新闭合。":"Green interference enters through the letter slot, circles the floating cake, then flows into the fireplace seal. Touching the shrieking lamp closes the blockade again.",飞车失控:"Runaway Flying Car","目标：在撞上高架桥前依次稳定配重、航向与油门":"Objective: stabilize the load, heading, and throttle in order before hitting the viaduct.","后备箱先把车头拉高；红色铁路信号给出航向；发动机过热时只能脉冲给油。猛踩油门会让飞车再次翻滚。":"The boot first pulls the nose high; the red railway signal gives the heading; an overheating engine accepts only pulsed throttle. Flooring it sends the car rolling again.",打人柳下:"Beneath the Whomping Willow","目标：读懂枝条的高扫、低返与露根间隙，安全抵达树洞":"Objective: read the high sweep, low return, and exposed-root opening to reach the hollow safely.","粗枝先从头顶横扫；回摆会贴近地面。只有第二次攻击收势后，发光树根之间才会短暂露出通道。":"A heavy branch sweeps overhead first; its return cuts close to the ground. Only after the second strike settles does a passage briefly open between the glowing roots.","楼梯下 · 楼上小卧室 · 17 号房 · 海上小屋":"STAIRS · BEDROOM · ROOM 17 · ROCK HUT","H. Potter · 楼梯下的储物间":"H. Potter · Cupboard under the Stairs","I · 楼梯下储物间":"I · CUPBOARD UNDER STAIRS","H. Potter · 楼上最小的卧室":"H. Potter · Smallest Bedroom Upstairs","II · 楼上最小卧室":"II · SMALLEST BEDROOM","H. Potter · 铁路景观酒店 17 号房":"H. Potter · Railview Hotel, Room 17","III · 铁路旅馆 17 号房":"III · RAILVIEW ROOM 17","H. Potter · 海上岩礁小屋":"H. Potter · Hut on the Rock, at Sea","IV · 海上岩礁小屋":"IV · HUT ON THE ROCK",楼梯下的储物间:"CUPBOARD UNDER THE STAIRS",通往对角巷:"DOOR TO DIAGON ALLEY","V. Dursley · 女贞路前门":"V. Dursley · Privet Drive Front Door","D. Dursley · 厨房餐桌":"D. Dursley · Kitchen Table","H. Potter · 动物园爬虫馆":"H. Potter · Zoo Reptile House","H. Potter · 石墙中学":"H. Potter · Stonewall High","顺序错误：“{destination}”不是下一处藏身地。四封信重新飞散！":"Wrong chronology: “{destination}” is not the next hiding place. All four letters scatter again!","时间线正确：{destination} · {count} / 4":"Chronology confirmed: {destination} · {count} / 4","时间线完成：循红蜡封印前往通往对角巷的门":"Chronology complete: follow the crimson wax seals to the door into Diagon Alley.","四处藏身地首尾相接，信上的猩红 H 蜡印化成了门钥匙。":"The four hiding places form one journey; the crimson H seals have become a door key.","四封信按时间顺序排列完成——通往对角巷的门已开启！":"The four letters are in chronological order—the door to Diagon Alley is open!","邮槽绿粉 · 蛋糕丝线 · 壁炉三环":"LETTER-SLOT POWDER · CAKE THREAD · THREE HEARTH RINGS",堵塞的黄铜邮槽:"Jammed brass letter slot","I · 绿粉由门外进入":"I · GREEN POWDER ENTERS FROM OUTSIDE",悬浮的紫罗兰布丁蛋糕:"Levitating violet pudding cake","II · 奶油下有绕行丝线":"II · ORBITING THREAD UNDER ICING",三环封印的飞路炉:"Floo fireplace with three seals","III · 三环汇聚于炉心":"III · THREE RINGS CONVERGE AT HEARTH",裂口尖叫油灯:"Cracked shrieking oil lamp","诱饵 · 红线接回警报":"DECOY · RED WIRE CLOSES ALARM","“{label}”接通了报警回路！封锁重置，干扰增强至 {count}。":"“{label}” closed the alarm circuit! The blockade reset; interference rose to {count}.","邮槽里的绿色粉尘来自室外。残痕没有走直线，而是绕向被悬浮咒托起的蛋糕。":"The green powder in the letter slot came from outside. Its trail bends toward the levitating cake instead of crossing the room directly.","蛋糕下方的魔力丝线指向壁炉。最后解除飞路炉上的三环封印。":"The magical thread beneath the cake points to the fireplace. Break the three Floo seals last.","住宅封锁痕迹已确认 {count} / 3":"House-blockade traces confirmed: {count} / 3","{label}的残痕已固定，绿色干扰显露下一段走向。":"The residue on {label} is fixed; the green interference reveals its next direction.","精灵的封锁完成：邮槽、悬浮蛋糕与飞路炉的干扰链已全部解除":"Elf blockade complete: the interference chain through letter slot, levitating cake, and Floo fireplace is broken.","绿色粉尘标出入口，悬浮蛋糕暴露绕行，飞路封印是最终汇聚点。住宅出口重新打开。":"Green powder marked the entrance, the floating cake exposed the detour, and the Floo seals marked the convergence. The house exit is open again.","第二部 · 第一章 · 第 1 关完成":"Book 2 · Chapter 1 · Room 1 complete","三重封锁碎成绿色星屑——正在登上失控飞车，追赶霍格沃茨特快！":"The triple blockade bursts into green sparks—boarding the runaway car to catch the Hogwarts Express!","飞车关卡已加载：先调整行李配重，再对准铁路，最后短促给油。":"Flying Car loaded: shift the luggage, align with the railway, then pulse the throttle."},fr:{魔法石:"La Pierre philosophale",密室:"La Chambre des secrets",阿兹卡班的囚徒:"Le Prisonnier d’Azkaban",火焰杯:"La Coupe de feu",凤凰社:"L’Ordre du Phénix",混血王子:"Le Prince de sang-mêlé",死亡圣器:"Les Reliques de la Mort",霍格沃茨的第一道门:"La première porte de Poudlard","温暖烛光、哥特学院、深红与金色、古老石墙":"Lueurs de bougies, architecture gothique, rouge profond, or et antiques murs de pierre.",初入魔法世界:"Entrée dans le monde des sorciers",城堡禁区:"Les couloirs interdits du château",镜中秘密:"Les secrets du miroir",地下试炼:"Les épreuves souterraines",重组地址碎片并找出被信件覆盖的隐藏出口:"Reconstituez les fragments d’adresse et découvrez la sortie cachée sous les lettres.","依据课程清单匹配商店、物品和正确数量":"Associez chaque boutique, objet et quantité à la liste des fournitures.","组合木材、杖芯、光效和声音反馈":"Combinez bois, cœur, lumière et réactions sonores pour trouver la bonne baguette.",排列四学院象征与人物品质打开宴会厅:"Associez les quatre emblèmes à leurs qualités pour ouvrir la Grande Salle.",观察周期并在正确时机连接三段路线:"Observez le cycle et reliez les trois segments du parcours au bon moment.",从画像对话矛盾中推导正确口令:"Exploitez les contradictions des portraits pour déduire le mot de passe.","利用盔甲、猫叫与暗门进行潜行":"Servez-vous de l’armure, de la clochette du chat et d’une porte secrète pour éviter la ronde.",组合乐器并复现让守门生物入睡的旋律:"Combinez les instruments et reproduisez la mélodie qui endort le gardien.",控制漂浮轨迹把散落物送回正确位置:"Maîtrisez les trajectoires flottantes pour rendre chaque objet perdu.",利用悬浮机关移动障碍并建立逃生路线:"Utilisez la lévitation pour déplacer les obstacles et créer une issue.",按历史时间线排列书脊并避开尖叫书籍:"Classez les dos des livres par époque tout en évitant le volume hurleur.",比较镜像与现实差异选择真正需要的物品:"Comparez le reflet à la réalité pour choisir ce qui est réellement nécessaire.",控制光源与节奏摆脱收缩藤蔓:"Maîtrisez la lumière et le rythme pour échapper aux lianes qui se resserrent.","依据翅膀损伤、速度和锁孔锁定钥匙":"Identifiez la clé grâce à son aile abîmée, sa vitesse et la serrure.",规划最少牺牲路线穿过动态棋盘:"Planifiez un passage sur l’échiquier vivant avec un minimum de sacrifices.","结合药剂逻辑、镜像线索与章节物品":"Combinez la logique des potions, les indices du miroir et les objets du chapitre.",猫头鹰来信:"Le courrier des hiboux","目标：按弗农改变藏身处的时间顺序检查四封信":"Objectif : examinez les quatre lettres dans l’ordre des cachettes choisies par les Dursley.","地址会追着哈利变化。错误选择会让已确认的信全部重新飞散。":"L’adresse suit Harry partout. Une erreur disperse toutes les lettres déjà confirmées.",对角巷清单:"La liste du Chemin de Traverse","目标：按霍格沃茨清单采购四件合规格物品，预算 12 加隆":"Objectif : achetez quatre fournitures conformes, dans l’ordre de la liste, avec douze Gallions.","课本 → 二号锡制坩埚 → 猫头鹰 → 魔杖盒。核对规格与价签，买错会清空采购篮。":"Manuel → chaudron en étain taille 2 → hibou → étui à baguette. Vérifiez les caractéristiques et les prix : une erreur vide le panier.",魔杖选择:"La baguette choisit son sorcier","目标：第一阶段，从三种木材中找出与你产生稳定共鸣的一种":"Objectif : trouvez d’abord, parmi trois bois, celui qui entre en résonance stable avec vous.","木材线索：闪电形旧伤旁，常青叶不会在严冬凋零。选错会触发失控魔法。":"Indice : près d’une ancienne cicatrice en forme d’éclair, une feuille persistante ne fane jamais en hiver. Un mauvais choix déchaîne une magie incontrôlée.",分院仪式:"La cérémonie de la Répartition","目标：走近分院帽，观察大厅里的四学院象征":"Objectif : approchez-vous du Choixpeau et observez les emblèmes des quatre maisons dans la Grande Salle.","勇气、忠诚、智慧与野心各有象征；分院帽正在等待你的选择。":"Courage, loyauté, sagesse et ambition ont chacun leur emblème. Le Choixpeau attend votre décision.",移动楼梯:"Les escaliers mouvants","目标：依据钟摆与月相路线，依次稳定三座移动楼梯":"Objectif : suivez les indices du pendule et de la lune pour stabiliser trois escaliers dans le bon ordre.","路线铭文：从最低的平台起步；月光桥只在钟摆居中时停驻；最后登上最高塔。选错会让路线复位并增加 5 秒惩罚。":"Inscription : partez du palier le plus bas ; le pont lunaire s’immobilise lorsque le pendule est centré ; terminez par la plus haute tour. Une erreur réinitialise le parcours et ajoute cinq secondes.",会说话的画像:"Les portraits bavards","目标：比较三幅画像的证词，按可信的发言顺序询问口令":"Objectif : confrontez les témoignages de trois portraits et interrogez-les dans l’ordre crédible pour obtenir le mot de passe.","学者说骑士不是第一位；骑士承认学者必须先发言；女士说自己在骑士之后。错误询问会惊动走廊并清空推理。":"L’érudit affirme que le chevalier n’est pas le premier ; le chevalier reconnaît que l’érudit doit parler avant lui ; la dame dit venir après le chevalier. Une mauvaise question alerte le couloir et efface vos déductions.",管理员的巡夜:"La ronde du concierge","目标：利用盔甲遮挡、猫铃声与暗门，避开管理员的灯光巡查":"Objectif : utilisez l’armure, la clochette du chat et la porte secrète pour échapper à la lanterne du concierge.","巡夜图记：灯光先扫过空盔甲；猫铃能把脚步引向反方向；最后掀开独角兽挂毯。走错会清空路线并提高警戒。":"Notes de ronde : la lumière balaie d’abord l’armure vide ; la clochette attire les pas ailleurs ; soulevez enfin la tapisserie à la licorne. Une erreur efface l’itinéraire et renforce l’alerte.",三头犬活板门:"Le gardien à trois têtes","目标：按守门生物能接受的层次，奏出完整安眠旋律":"Objectif : jouez la berceuse complète selon les couches sonores que le gardien peut supporter.","褪色乐谱写着：先让气息像夜风进入梦乡，再让琴弦托住梦境，最后以发条的轻响封住鼾声。错奏会重置旋律并惊醒守卫。":"La partition effacée indique : que le souffle mène d’abord au sommeil comme un vent nocturne, que les cordes portent ensuite le rêve, puis qu’un léger mécanisme scelle le ronflement. Une fausse note recommence la mélodie et réveille le gardien.",飞行课遗失物:"Cours de vol : objets perdus","目标：借助风向旗判断重量，依次把三件遗失物送入对应的安全轨迹":"Objectif : lisez la manche à air et renvoyez trois objets perdus sur leur trajectoire sûre, du plus léger au plus lourd.","风向板写着：最轻的红色织物先借低风归队；有月纹的笔记随后穿过中环；沉重黄铜罗盘最后沿高风落到新生手中。错序会卷起乱流并吹散全部物品。":"Le panneau indique : le tissu rouge, très léger, prend d’abord le courant bas ; le carnet marqué d’une lune traverse ensuite l’anneau central ; la lourde boussole en laiton revient enfin par le courant haut. Une erreur soulève des turbulences et disperse tout.",巨怪洗手间:"Les toilettes du troll","目标：依次稳定漏水、悬浮瓦砾，再放下横梁架出逃生路线":"Objectif : stoppez la fuite, faites léviter les gravats, puis abaissez la poutre pour créer une issue.","破裂水管正在冲散落脚点。先转动月纹阀止水，再让碎石升起清出通道，最后才能把高处横梁平稳放到沟渠上。错序会让巨怪逼近并震塌路线。":"La conduite rompue emporte les appuis. Tournez d’abord la vanne marquée d’une lune, soulevez les gravats pour dégager le passage, puis posez la poutre au-dessus du canal. Une erreur rapproche le troll et fait s’effondrer l’itinéraire.",图书馆禁书区:"La Réserve","目标：依据馆藏年代，按从古到今的顺序点亮三本安全书脊":"Objectif : d’après les dates du catalogue, éclairez trois dos de livres sûrs du plus ancien au plus récent.","目录铜牌记载：四学院建校录最古老；龙灾账册写于其后数百年；月蚀纪事刚完成修订。避开锁链缠绕、会尖叫的无年卷。":"Le catalogue de cuivre précise : le Registre des Fondateurs est le plus ancien ; le Livre du Fléau des dragons vient plusieurs siècles après ; la Chronique de l’éclipse vient d’être révisée. Évitez le volume sans date, enchaîné et hurleur.",厄里斯魔镜:"Le Miroir du Riséd","目标：比较镜中欲望与现实处境，依次选择真正需要的三件物品":"Objectif : confrontez le désir du miroir à la réalité et choisissez, dans l’ordre, les trois choses dont vous avez vraiment besoin.","镜中人戴着王冠、捧着奖杯，却在现实的寒风中发抖。先御寒，再为黑暗出口照路；最后记住：能共同离开的人，比独占的荣誉更重要。":"Le reflet porte une couronne et un trophée, mais grelotte dans le froid réel. Choisissez d’abord de quoi vous réchauffer, puis une lumière pour la sortie obscure ; souvenez-vous enfin qu’un compagnon qui part avec vous vaut mieux qu’une gloire solitaire.",魔鬼网:"Le Filet du Diable","目标：保持镇静，按正确节奏控制蓝铃火焰，让藤蔓松开地下出口":"Objectif : gardez votre calme et maîtrisez les flammes bleues au bon rythme pour que les lianes libèrent la sortie souterraine.","挣扎会让藤蔓收紧。先放松摆脱缠绕，再点燃冷焰，最后维持稳定光照；猛烈爆燃只会惊动整片根网。":"Se débattre resserre les lianes. Détendez-vous d’abord, allumez ensuite la flamme froide, puis maintenez une lumière stable ; une flambée brutale alerterait tout le réseau de racines.","停止挣扎 · 蓝铃冷焰 · 三拍恒光":"CESSER DE LUTTER · FLAMME BLEUE · TROIS PULSATIONS STABLES",放松呼吸:"Se détendre et respirer","I · 停止挣扎":"I · CESSER DE LUTTER",点燃蓝铃冷焰:"Allumer la flamme de jacinthe","II · 微光驱藤":"II · LA LUEUR REPOUSSE LES LIANES",维持恒定光照:"Maintenir une lumière stable","III · 稳住三拍":"III · TENIR TROIS PULSATIONS",猛烈爆燃:"Flambée violente","诱饵 · 惊动根网":"LEURRE · ALERTE LE RÉSEAU","地下试炼已加载：放松藤蔓缠绕，以蓝铃冷焰和三拍恒光打开根网。":"Épreuve souterraine chargée : relâchez les lianes, puis ouvrez le réseau avec la flamme bleue et trois pulsations stables.","“{label}”打乱节奏！根网骤然收紧至 {count} 级；先放松，再重新开始。":"« {label} » a brisé le rythme ! Le réseau s’est resserré au niveau {count} ; détendez-vous avant de recommencer.","你停止挣扎，第一层藤蔓松开。现在点燃不会灼伤施法者的蓝铃冷焰。":"Vous cessez de lutter et les premières lianes se relâchent. Allumez maintenant la flamme bleue qui ne brûle pas son lanceur.","冷焰逼退根须。最后保持三拍恒光，不要让亮度突然爆发。":"La flamme froide repousse les racines. Maintenez trois pulsations régulières sans provoquer de flambée.","魔鬼网光照节奏已完成 {count} / 3":"Rythme lumineux accompli : {count} / 3","{label}奏效，地下出口上方的藤蔓正在退缩。":"{label} fonctionne ; les lianes au-dessus de la sortie souterraine reculent.","魔鬼网完成：稳定冷焰驱散根网，通往飞钥匙房的地下出口已经开启":"Filet du Diable terminé : la flamme froide et stable disperse le réseau et ouvre la sortie vers la salle des clés.","镇静削弱缠绕，蓝铃冷焰逼退藤蔓，三拍恒光打开根网。前方传来成群翅膀的振动声。":"Le calme affaiblit l’étreinte, la flamme bleue repousse les lianes et trois pulsations ouvrent les racines. Un essaim d’ailes vrombit plus loin.","第一部 · 第四章 · 第 1 关完成":"Tome 1 · Chapitre 4 · Salle 1 terminée",冷焰退藤:"Les lianes cèdent à la flamme froide","魔鬼网缩回石缝——正在进入飞钥匙房！":"Le Filet du Diable se retire dans la pierre — entrée dans la salle des clés !",飞钥匙房:"La salle des clés volantes","目标：依次确认翅膀损伤、飞行轨迹和锁孔材质，锁定唯一真钥匙":"Objectif : identifiez successivement l’aile abîmée, la trajectoire et le métal de la serrure pour isoler la bonne clé.","门锁留下银屑；真正用过的钥匙左翼弯折，负重后会沿顺时针轨迹下沉。先观察损伤，再追踪轨迹，最后核对银色钥匙。":"La serrure a laissé de la limaille d’argent. La clé déjà utilisée a l’aile gauche tordue et descend en tournant dans le sens horaire. Observez l’usure, suivez la trajectoire, puis confirmez la clé d’argent.","左翼折痕 · 顺时针下沉 · 银屑锁孔":"AILE GAUCHE TORDUE · DESCENTE HORAIRE · SERRURE ARGENTÉE",左翼弯折的钥影:"Clé à l’aile gauche tordue","I · 使用损伤":"I · TRACE D’USURE",顺时针下沉轨迹:"Trajectoire descendante horaire","II · 负重飞行":"II · VOL SOUS CHARGE",小型银钥匙:"Petite clé d’argent","III · 银屑吻合":"III · ARGENT CONFIRMÉ",华丽金钥匙:"Clé dorée ouvragée","诱饵 · 锁孔无金屑":"LEURRE · AUCUNE TRACE D’OR","飞钥匙房已加载：依次核对折翼、飞行轨迹和锁孔银屑。":"Salle des clés chargée : examinez dans l’ordre l’aile tordue, la trajectoire horaire et la limaille d’argent.","“{label}”惊散了钥匙群！追逐失误升至 {count}，三条证据需要重新确认。":"« {label} » a dispersé l’essaim ! Les erreurs montent à {count} ; revérifiez les trois indices.","左翼折痕与门框刮痕一致。现在观察负重钥匙群，寻找顺时针下沉的轨迹。":"L’aile gauche tordue correspond à la rayure du chambranle. Observez maintenant l’essaim chargé et sa descente horaire.","下沉轨迹锁定了小型钥匙。最后核对锁孔银屑，排除华丽但材质不符的金钥匙。":"La descente désigne une petite clé. Comparez enfin la limaille d’argent et écartez la clé dorée, malgré ses ornements.","飞钥匙证据已确认 {count} / 3":"Indices de clé confirmés : {count} / 3","{label}与现场证据吻合，钥匙群的范围缩小了。":"{label} correspond aux traces matérielles ; l’essaim se réduit.","飞钥匙房完成：折翼银钥匙准确嵌入门锁，通往巫师棋盘的石门已经开启":"Salle des clés terminée : la clé d’argent à l’aile tordue ouvre la porte de pierre vers l’échiquier.","折翼证明它被使用过，顺时针下沉暴露负重，银屑完成最终材质核对。前方传来巨大棋子的脚步声。":"L’aile tordue prouve l’usure, la descente horaire révèle le poids et la limaille confirme l’argent. Des pièces géantes s’ébranlent plus loin.","第一部 · 第四章 · 第 2 关完成":"Tome 1 · Chapitre 4 · Salle 2 terminée",折翼银钥匙:"La clé d’argent à l’aile tordue","银钥匙旋转一周，棋盘石门轰然开启——正在进入巫师棋盘！":"La clé d’argent accomplit un tour et la porte de pierre s’ouvre avec fracas — entrée sur l’échiquier !","巫师棋已加载：先诱敌，再双攻，最后沿空线推进。":"Échiquier chargé : diversion, fourchette, puis avancée sur la colonne libre.",巫师棋:"Les échecs version sorcier","目标：用最少牺牲打开通往对岸的安全棋路":"Objectif : ouvrez un passage sûr sur l’échiquier en sacrifiant le moins de pièces possible.","黑后封锁中央。先用边兵引开主教，再让骑士双攻国王与城堡，最后直车沿空出的纵线推进；贸然冲后会让已投入的棋子全部被吃。":"La dame noire verrouille le centre. Attirez d’abord le fou avec le pion de l’aile, réalisez ensuite une fourchette sur le roi et la tour avec le cavalier, puis avancez la tour sur la colonne libérée. Charger la dame trop tôt condamne toutes les pièces engagées.","边兵牵制主教 · 骑士双攻 · 城堡穿过空线":"LE PION ATTIRE LE FOU · FOURCHETTE DU CAVALIER · TOUR SUR COLONNE LIBRE",边兵诱敌:"Diversion du pion","I · 引开主教":"I · ÉCARTER LE FOU",骑士双攻:"Fourchette du cavalier","II · 将军攻车":"II · ROI ET TOUR MENACÉS",城堡沿空线推进:"Tour sur colonne libre","III · 空线抵岸":"III · TRAVERSER LA COLONNE",王后强攻:"Charge de la dame","诱饵 · 暴露全线":"LEURRE · COLONNE EXPOSÉE","“{label}”暴露了棋路！巨棋吃掉已投入棋子，被吃总数升至 {count}。":"« {label} » a exposé le passage ! Les pièces géantes capturent les forces engagées ; {count} pièces perdues au total.","边兵引开了黑主教。现在用骑士同时威胁国王与城堡，迫使黑方让出中央。":"Le pion de l’aile a écarté le fou noir. Menacez maintenant le roi et la tour avec le cavalier pour libérer le centre.","骑士双攻奏效，纵线已经清空。最后让城堡沿直线推进到对岸。":"La fourchette du cavalier a libéré la colonne. Faites enfin avancer la tour en ligne droite jusqu’au bord opposé.","安全棋步已确认 {count} / 3":"Coups sûrs confirmés : {count} / 3","{label}成立，巨型黑棋被迫改换阵形。":"{label} fonctionne ; les pièces noires géantes doivent changer de formation.","巫师棋完成：仅以边兵诱敌，骑士与城堡已安全抵达对岸":"Échiquier terminé : seul le pion de l’aile est sacrifié ; le cavalier et la tour atteignent l’autre bord.","诱敌打开斜线，双攻迫使让位，城堡穿过空线。最后的魔法石密室就在棋盘后方。":"La diversion ouvre une diagonale, la fourchette force le repli et la tour traverse la colonne libre. La chambre de la Pierre se trouve au-delà.","第一部 · 第四章 · 第 3 关完成":"Tome 1 · Chapitre 4 · Salle 3 terminée",最少牺牲棋路:"Le passage au moindre sacrifice","白色城堡抵达对岸，火门显现——正在进入魔法石密室！":"La tour blanche atteint l’autre bord et une porte de feu apparaît — entrée dans la chambre de la Pierre !","最终密室已加载：先解药剂逻辑，再辨镜像，最后证明守护意图。":"Chambre finale chargée : résolvez les potions, lisez le miroir, puis prouvez votre intention protectrice.",魔法石密室:"La chambre de la Pierre","目标：穿过黑焰，解读镜像，并证明你只想保护魔法石":"Objectif : traversez les flammes noires, interprétez le miroir et prouvez que vous voulez seulement protéger la Pierre.","七瓶药剂中，最小的瓶子可穿过黑焰。镜中真正的守护者口袋仍空着；想夺取魔法石的手只会触发密室腐化。":"Parmi les sept potions, le plus petit flacon permet de franchir les flammes noires. Dans le miroir, la poche du véritable gardien reste vide ; une main tendue pour prendre la Pierre ne fait qu’éveiller la corruption de la chambre.","七瓶取最小 · 镜中口袋为空 · 双手只作守护":"LE PLUS PETIT DES SEPT · POCHE VIDE DANS LE MIROIR · MAINS OUVERTES PROTECTRICES","厄里斯 · 欲望倒写显形":"RISÉD · LE DÉSIR SE RÉVÈLE À L’ENVERS",最小银瓶:"Le plus petit flacon d’argent","I · 穿越黑焰":"I · FRANCHIR LE FEU NOIR",空口袋镜影:"Reflet à la poche vide","II · 不占有":"II · NE RIEN POSSÉDER",守护石的誓言:"Serment de protéger la Pierre","III · 只为保护":"III · PROTÉGER SEULEMENT",夺取石的手:"Main avide","诱饵 · 占有欲":"LEURRE · DÉSIR DE POSSESSION","“{label}”暴露了占有欲！线索消散，腐化诱惑升至 {count}。":"« {label} » a révélé un désir de possession ! Les indices se dissipent et la corruption monte à {count}.","最小银瓶让你穿过黑焰。现在观察镜中衣袋：真正不求占有的人，口袋里不会出现石头。":"Le plus petit flacon d’argent vous a fait franchir le feu noir. Observez maintenant la poche dans le miroir : qui ne cherche rien à posséder n’y trouvera aucune Pierre.","空口袋镜影证明你没有取石欲望。最后明确你的意图：保护它，而不是拥有它。":"La poche vide prouve que vous ne convoitez pas la Pierre. Affirmez enfin votre intention : la protéger, jamais la posséder.","魔法石密室线索已确认 {count} / 3":"Indices de la chambre confirmés : {count} / 3","{label}通过了密室检验，镜面中的金光更加清晰。":"{label} réussit l’épreuve de la chambre ; la lumière dorée se précise dans le miroir.","第一部完成：魔法石只向无意占有、决心守护的人显现":"Tome 1 terminé : la Pierre n’apparaît qu’à qui veut la protéger sans la posséder.","药剂穿过黑焰，空口袋识破欲望，守护誓言让魔法石安全显现。新的绿色干扰正在住宅中聚集。":"La potion a franchi le feu noir, la poche vide a démasqué le désir et le serment protecteur a révélé la Pierre sans danger. Une interférence verte se rassemble à Privet Drive.","第一部 · 魔法石完成":"Tome 1 · La Pierre philosophale terminé","第二部 · 不祥警告":"Tome 2 · Un sinistre avertissement","守护之石化作金光——正在返回住宅，调查精灵留下的三重封锁！":"La Pierre protégée se dissout en lumière dorée — retour à Privet Drive pour enquêter sur le triple blocus de l’elfe !","第二部首关已加载：沿邮槽、蛋糕与飞路炉追踪绿色魔力残痕。":"Première salle du tome 2 chargée : suivez les traces vertes de la fente aux lettres au gâteau, puis à la cheminée.",精灵的封锁:"Le blocus de l’elfe","目标：循魔力残痕解除住宅中的三重封锁，赶往国王十字车站":"Objectif : suivez les traces magiques, levez le triple blocus de la maison et rejoignez King’s Cross.","绿色干扰从邮槽进入，绕过悬浮蛋糕，最后汇入壁炉封印。错碰尖叫灯会让封锁重新闭合。":"L’interférence verte entre par la fente aux lettres, contourne le gâteau flottant, puis rejoint le sceau de la cheminée. Toucher la lampe hurlante referme le blocus.",飞车失控:"La voiture volante hors de contrôle","目标：在撞上高架桥前依次稳定配重、航向与油门":"Objectif : stabilisez le chargement, le cap puis l’accélérateur avant de heurter le viaduc.","后备箱先把车头拉高；红色铁路信号给出航向；发动机过热时只能脉冲给油。猛踩油门会让飞车再次翻滚。":"Le coffre cabre d’abord la voiture ; le signal ferroviaire rouge indique le cap ; un moteur en surchauffe exige des impulsions d’accélérateur. Écraser la pédale fait de nouveau tonneau.",打人柳下:"Sous le Saule cogneur","目标：读懂枝条的高扫、低返与露根间隙，安全抵达树洞":"Objectif : déchiffrez le balayage haut, le retour bas et l’ouverture entre les racines pour atteindre le tronc sans danger.","粗枝先从头顶横扫；回摆会贴近地面。只有第二次攻击收势后，发光树根之间才会短暂露出通道。":"Une grosse branche balaie d’abord au-dessus de votre tête ; son retour rase le sol. Le passage entre les racines lumineuses ne s’ouvre brièvement qu’après la fin de la deuxième attaque.","楼梯下 · 楼上小卧室 · 17 号房 · 海上小屋":"ESCALIER · CHAMBRE · N° 17 · CABANE","H. Potter · 楼梯下的储物间":"H. Potter · Placard sous l’escalier","I · 楼梯下储物间":"I · PLACARD SOUS L’ESCALIER","H. Potter · 楼上最小的卧室":"H. Potter · Plus petite chambre à l’étage","II · 楼上最小卧室":"II · PLUS PETITE CHAMBRE","H. Potter · 铁路景观酒店 17 号房":"H. Potter · Hôtel Railview, chambre 17","III · 铁路旅馆 17 号房":"III · CHAMBRE 17 DU RAILVIEW","H. Potter · 海上岩礁小屋":"H. Potter · Cabane sur le rocher, en mer","IV · 海上岩礁小屋":"IV · CABANE SUR LE ROCHER",楼梯下的储物间:"PLACARD SOUS L’ESCALIER",通往对角巷:"PORTE DU CHEMIN DE TRAVERSE","V. Dursley · 女贞路前门":"V. Dursley · Porte d’entrée de Privet Drive","D. Dursley · 厨房餐桌":"D. Dursley · Table de la cuisine","H. Potter · 动物园爬虫馆":"H. Potter · Vivarium du zoo","H. Potter · 石墙中学":"H. Potter · Collège Stonewall","顺序错误：“{destination}”不是下一处藏身地。四封信重新飞散！":"Chronologie incorrecte : « {destination} » n’est pas la prochaine cachette. Les quatre lettres se dispersent à nouveau !","时间线正确：{destination} · {count} / 4":"Chronologie confirmée : {destination} · {count} / 4","时间线完成：循红蜡封印前往通往对角巷的门":"Chronologie terminée : suivez les sceaux de cire cramoisie jusqu’à la porte du Chemin de Traverse.","四处藏身地首尾相接，信上的猩红 H 蜡印化成了门钥匙。":"Les quatre cachettes forment un seul voyage ; les sceaux H cramoisis sont devenus une clé.","四封信按时间顺序排列完成——通往对角巷的门已开启！":"Les quatre lettres sont dans l’ordre chronologique — la porte du Chemin de Traverse est ouverte !","邮槽绿粉 · 蛋糕丝线 · 壁炉三环":"POUDRE DE LA FENTE · FIL DU GÂTEAU · TROIS ANNEAUX DU FOYER",堵塞的黄铜邮槽:"Fente aux lettres en laiton bloquée","I · 绿粉由门外进入":"I · LA POUDRE VERTE VIENT DU DEHORS",悬浮的紫罗兰布丁蛋糕:"Gâteau-pudding violet en lévitation","II · 奶油下有绕行丝线":"II · FIL ORBITAL SOUS LE GLAÇAGE",三环封印的飞路炉:"Cheminée de poudre de Cheminette aux trois sceaux","III · 三环汇聚于炉心":"III · TROIS ANNEAUX VERS LE FOYER",裂口尖叫油灯:"Lampe à huile fendue et hurlante","诱饵 · 红线接回警报":"LEURRE · LE FIL ROUGE FERME L’ALARME","“{label}”接通了报警回路！封锁重置，干扰增强至 {count}。":"« {label} » a refermé le circuit d’alarme ! Le blocus recommence ; l’interférence monte à {count}.","邮槽里的绿色粉尘来自室外。残痕没有走直线，而是绕向被悬浮咒托起的蛋糕。":"La poudre verte de la fente vient du dehors. Sa trace contourne la pièce vers le gâteau en lévitation.","蛋糕下方的魔力丝线指向壁炉。最后解除飞路炉上的三环封印。":"Le fil magique sous le gâteau désigne la cheminée. Brisez enfin les trois sceaux de Cheminette.","住宅封锁痕迹已确认 {count} / 3":"Traces du blocus confirmées : {count} / 3","{label}的残痕已固定，绿色干扰显露下一段走向。":"La trace de {label} est fixée ; l’interférence verte révèle la direction suivante.","精灵的封锁完成：邮槽、悬浮蛋糕与飞路炉的干扰链已全部解除":"Blocus de l’elfe terminé : la chaîne entre la fente, le gâteau flottant et la cheminée est rompue.","绿色粉尘标出入口，悬浮蛋糕暴露绕行，飞路封印是最终汇聚点。住宅出口重新打开。":"La poudre verte marquait l’entrée, le gâteau le détour et les sceaux le point de convergence. La sortie de la maison est rouverte.","第二部 · 第一章 · 第 1 关完成":"Tome 2 · Chapitre 1 · Salle 1 terminée","三重封锁碎成绿色星屑——正在登上失控飞车，追赶霍格沃茨特快！":"Le triple blocus éclate en étincelles vertes — embarquement dans la voiture folle pour rattraper le Poudlard Express !","飞车关卡已加载：先调整行李配重，再对准铁路，最后短促给油。":"Voiture volante chargée : déplacez les bagages, alignez-vous sur la voie, puis accélérez par impulsions."}},Au="hogwarts-escape-language",ev=[{code:"zh-CN",label:"中文",nativeLabel:"简体中文"},{code:"en",label:"English",nativeLabel:"English"},{code:"fr",label:"Français",nativeLabel:"Français"}],yc={"zh-CN":{"document.title":"霍格沃茨密室逃脱 3D","start.brand":"霍格沃茨","start.title":"密室逃脱","start.description":"横跨 7 部曲、28 章与 112 套密室关卡，从第一封猫头鹰来信走到霍格沃茨最终决战。","start.play":"进入第一关","start.continue":"继续游戏","start.restart":"重新开始","start.campaign":"七部曲地图","start.language":"🌐 中文","voice.play":"▶ 播放中文旁白","voice.stop":"■ 停止旁白","voice.ready":"按下后播放，不会自动播放","voice.loading":"正在加载旁白…","voice.playing":"正在播放中文旁白","voice.failed":"旁白暂时不可用，字幕仍可阅读","voice.subtitle":"欢迎来到霍格沃茨。猫头鹰送来的四封信，藏着逃离密室的正确顺序。请观察地址变化，准备好后开始探索。","help.desktop":"WASD 移动 · 鼠标观察 · E 互动 · ESC 释放鼠标","help.mobile":"左侧摇杆移动 · 右半屏滑动观察 · 点击“互动”操作","mobile.look":"滑动转向","mobile.interact":"互动","campaign.title":"七部曲密室地图","campaign.stats":"{books} 部曲 · {chapters} 章 · {rooms} 关","campaign.book":"第 {number} 部","campaign.chapter":"第 {number} 章","campaign.difficulty":"难度 {start}–{end}","campaign.play":"开始本章","campaign.upcoming":"已解锁 · 即将启程","campaign.locked":"尚未解锁","campaign.close":"关闭地图","campaign.selectBook":"选择部曲","hud.roomKicker":"第 {book} 部 · 第 {chapter} 章 · 第 {room} 关","transition.next":"下一关","action.touch":"点击互动","action.keyboard":"按 E","counter.letters":"信件顺序 {count} / 4","counter.shopping":"采购 {count} / 4 · 余 {remaining} G","counter.wand":"匹配阶段 {count} / 3 · 失控反馈 {mistakes}","counter.sorting":"分院线索 {count} / 4 · 误判 {mistakes}","counter.stairs":"路线 {count} / 3 · 时间惩罚 {penalty} 秒","counter.portraits":"证词 {count} / 3 · 怀疑 {value}","counter.patrol":"潜行节点 {count} / 3 · 警戒 {value}","counter.lullaby":"安眠旋律 {count} / 3 · 惊醒 {value}","counter.flying":"安全投递 {count} / 3 · 乱流 {value}","counter.troll":"逃生机关 {count} / 3 · 危险 {value}","counter.library":"历史书脊 {count} / 3 · 尖叫 {value}","counter.mirror":"现实所需 {count} / 3 · 幻象增强 {value}","counter.snare":"光照节奏 {count} / 3 · 藤蔓收紧 {value}","counter.keys":"钥匙线索 {count} / 3 · 追逐失误 {value}","counter.chess":"安全棋路 {count} / 3 · 被吃棋子 {value}","counter.stone":"密室线索 {count} / 3 · 腐化诱惑 {value}","counter.elf":"封锁痕迹 {count} / 3 · 干扰增强 {value}","counter.car":"飞车校准 {count} / 3 · 乱流 {value}","counter.willow":"安全节拍 {count} / 3 · 擦伤 {value}","test.chineseOnly":"仅中文"},en:{"document.title":"Hogwarts Escape Room 3D","start.brand":"HOGWARTS","start.title":"Escape Room","start.description":"A journey across 7 books, 28 chapters, and 112 escape rooms—from the first owl letter to the final battle at Hogwarts.","start.play":"Enter Room One","start.continue":"Continue","start.restart":"Start Over","start.campaign":"Seven-Book Map","start.language":"🌐 English","voice.play":"▶ Play English narration","voice.stop":"■ Stop narration","voice.ready":"Plays only when pressed—never automatically","voice.loading":"Loading narration…","voice.playing":"Playing English narration","voice.failed":"Narration is unavailable; subtitles remain available","voice.subtitle":"Welcome to Hogwarts. Four owl-delivered letters hide the correct order for escaping this chamber. Observe how each address changes, then begin your search.","help.desktop":"WASD move · Mouse look · E interact · ESC release mouse","help.mobile":"Left stick to move · Swipe right to look · Tap Interact","mobile.look":"Swipe to look","mobile.interact":"Interact","campaign.title":"Seven-Book Escape Map","campaign.stats":"{books} books · {chapters} chapters · {rooms} rooms","campaign.book":"Book {number}","campaign.chapter":"Chapter {number}","campaign.difficulty":"Difficulty {start}–{end}","campaign.play":"Begin Chapter","campaign.upcoming":"Unlocked · Coming Soon","campaign.locked":"Locked","campaign.close":"Close map","campaign.selectBook":"Select a book","hud.roomKicker":"Book {book} · Chapter {chapter} · Room {room}","transition.next":"Next Room","action.touch":"Tap","action.keyboard":"Press E to","counter.letters":"Letter order {count} / 4","counter.shopping":"Shopping {count} / 4 · {remaining} G left","counter.wand":"Wand match {count} / 3 · Wild feedback {mistakes}","counter.sorting":"Sorting clues {count} / 4 · Mistakes {mistakes}","counter.stairs":"Route {count} / 3 · Time penalty {penalty}s","counter.portraits":"Testimony {count} / 3 · Suspicion {value}","counter.patrol":"Stealth nodes {count} / 3 · Alert {value}","counter.lullaby":"Lullaby {count} / 3 · Wakefulness {value}","counter.flying":"Safe deliveries {count} / 3 · Turbulence {value}","counter.troll":"Escape devices {count} / 3 · Danger {value}","counter.library":"Historical spines {count} / 3 · Noise {value}","counter.mirror":"Real needs {count} / 3 · Illusion {value}","counter.snare":"Light rhythm {count} / 3 · Constriction {value}","counter.keys":"Key clues {count} / 3 · Pursuit errors {value}","counter.chess":"Safe moves {count} / 3 · Pieces lost {value}","counter.stone":"Chamber clues {count} / 3 · Corruption {value}","counter.elf":"Blockade traces {count} / 3 · Interference {value}","counter.car":"Car calibration {count} / 3 · Turbulence {value}","counter.willow":"Safe rhythm {count} / 3 · Bruises {value}"},fr:{"document.title":"Hogwarts — Salle d’évasion 3D","start.brand":"POUDLARD","start.title":"Salle d’évasion","start.description":"Un voyage à travers 7 tomes, 28 chapitres et 112 salles, de la première lettre apportée par un hibou jusqu’à la bataille finale de Poudlard.","start.play":"Entrer dans la première salle","start.continue":"Continuer","start.restart":"Recommencer","start.campaign":"Carte des sept tomes","start.language":"🌐 Français","voice.play":"▶ Écouter la narration en français","voice.stop":"■ Arrêter la narration","voice.ready":"Lecture uniquement sur demande, jamais automatique","voice.loading":"Chargement de la narration…","voice.playing":"Narration en français en cours","voice.failed":"La narration est indisponible ; les sous-titres restent affichés","voice.subtitle":"Bienvenue à Poudlard. Quatre lettres apportées par des hiboux cachent l’ordre qui permet de quitter cette salle. Observez chaque changement d’adresse, puis commencez vos recherches.","help.desktop":"WASD : avancer · Souris : regarder · E : interagir · Échap : libérer la souris","help.mobile":"Joystick gauche : avancer · Balayer à droite : regarder · Toucher Interagir","mobile.look":"Balayer pour regarder","mobile.interact":"Interagir","campaign.title":"Carte d’évasion des sept tomes","campaign.stats":"{books} tomes · {chapters} chapitres · {rooms} salles","campaign.book":"Tome {number}","campaign.chapter":"Chapitre {number}","campaign.difficulty":"Difficulté {start}–{end}","campaign.play":"Commencer le chapitre","campaign.upcoming":"Déverrouillé · Bientôt disponible","campaign.locked":"Verrouillé","campaign.close":"Fermer la carte","campaign.selectBook":"Choisir un tome","hud.roomKicker":"Tome {book} · Chapitre {chapter} · Salle {room}","transition.next":"Salle suivante","action.touch":"Toucher pour","action.keyboard":"Appuyer sur E pour","counter.letters":"Ordre des lettres {count} / 4","counter.shopping":"Achats {count} / 4 · reste {remaining} G","counter.wand":"Accord de la baguette {count} / 3 · réactions {mistakes}","counter.sorting":"Indices de Répartition {count} / 4 · erreurs {mistakes}","counter.stairs":"Parcours {count} / 3 · pénalité {penalty} s","counter.portraits":"Témoignages {count} / 3 · soupçon {value}","counter.patrol":"Étapes furtives {count} / 3 · alerte {value}","counter.lullaby":"Berceuse {count} / 3 · éveil {value}","counter.flying":"Livraisons sûres {count} / 3 · turbulences {value}","counter.troll":"Mécanismes de fuite {count} / 3 · danger {value}","counter.library":"Dos historiques {count} / 3 · vacarme {value}","counter.mirror":"Besoins réels {count} / 3 · illusion {value}","counter.snare":"Rythme lumineux {count} / 3 · constriction {value}","counter.keys":"Indices de clé {count} / 3 · erreurs {value}","counter.chess":"Coups sûrs {count} / 3 · pièces perdues {value}","counter.stone":"Indices de la chambre {count} / 3 · corruption {value}","counter.elf":"Traces du blocus {count} / 3 · interférence {value}","counter.car":"Réglage de la voiture {count} / 3 · turbulences {value}","counter.willow":"Rythme sûr {count} / 3 · contusions {value}"}};function $r(i){return ev.some(({code:e})=>e===i)?i:"zh-CN"}function tv(i){return $r(i.getItem(Au))}function nv(i,e){const t=$r(e);return i.setItem(Au,t),t}function iv(i,e){return i.replace(/\{(\w+)\}/g,(t,n)=>e[n]??`{${n}}`)}function Kr(i){const e=$r(i);return(t,n={})=>{const r=yc[e][t]??yc["zh-CN"][t]??t;return iv(r,n)}}function ut(i,e){const t=$r(i);return t==="zh-CN"?e:Qg[t]?.[e]??e}function rv(i,{book:e,chapter:t,room:n,name:r,objectiveText:s,hint:o}){const a=$r(i);return{kicker:Kr(a)("hud.roomKicker",{book:e,chapter:t,room:n}),name:ut(a,r),objectiveText:ut(a,s),hint:ut(a,o)}}function sv({progress:i,book:e,chapter:t,playable:n,t:r=Kr("zh-CN")}){const s=e===1&&t===1||Jg(i,{book:e,chapter:t});return n&&s?{className:"chapter-action playable",text:r("campaign.play"),disabled:!1}:s?{className:"chapter-action unlocked",text:r("campaign.upcoming"),disabled:!0}:{className:"chapter-action",text:r("campaign.locked"),disabled:!0}}function ov({onPlay:i,getProgress:e=()=>null,getLanguage:t=()=>"zh-CN",getTranslator:n=()=>Kr(t())}){const r=document.querySelector("#campaign-screen"),s=document.querySelector("#book-tabs"),o=document.querySelector("#chapter-grid"),a=document.querySelector("#campaign-book-title"),l=document.querySelector("#campaign-book-subtitle"),c=document.querySelector("#campaign-theme"),u=document.querySelector("#campaign-stats");let d=0;function f(){const h=n(),E=t();s.replaceChildren(...Fr.map((M,_)=>{const w=document.createElement("button");return w.className=`book-tab${_===d?" active":""}`,w.type="button",w.innerHTML=`<span>${h("campaign.book",{number:M.number})}</span><strong>${ut(E,M.title)}</strong>`,w.addEventListener("click",()=>{d=_,g()}),w}))}function p(h){const E=n(),M=t();o.replaceChildren(...h.chapters.map((_,w)=>{const A=document.createElement("article");A.className="chapter-card";const R=_.rooms[0].difficulty,L=_.rooms.at(-1).difficulty,b=_.rooms.some(W=>W.status==="playable"),y=sv({progress:e(),book:h.number,chapter:w+1,playable:b,t:E});A.classList.toggle("unlocked",y.className.includes("unlocked"));const C=document.createElement("div");C.className="chapter-heading",C.innerHTML=`<span>${E("campaign.chapter",{number:String(w+1).padStart(2,"0")})}</span><strong>${ut(M,_.title)}</strong><em>${E("campaign.difficulty",{start:R,end:L})}</em>`;const z=document.createElement("ol");z.className="room-list";for(const W of _.rooms){const K=document.createElement("li");K.innerHTML=`<span>${ut(M,W.title)}</span><small>${ut(M,W.puzzle)}</small>`,z.appendChild(K)}const H=document.createElement("button");return H.type="button",H.className=y.className,H.textContent=y.text,H.disabled=y.disabled,b&&H.addEventListener("click",()=>{m(),i(_.rooms.find(W=>W.status==="playable"))}),A.append(C,z,H),A}))}function g(){const h=n(),E=t(),M=Fr[d];u.textContent=h("campaign.stats",$g),r.style.setProperty("--campaign-primary",M.palette[0]),r.style.setProperty("--campaign-accent",M.palette[1]),r.style.setProperty("--campaign-dark",M.palette[2]),a.textContent=`${h("campaign.book",{number:M.number})} · ${ut(E,M.title)}`,l.textContent=ut(E,M.subtitle),c.textContent=ut(E,M.visualTheme),f(),p(M)}function x(){g(),r.classList.remove("hidden"),document.body.classList.add("campaign-open")}function m(){r.classList.add("hidden"),document.body.classList.remove("campaign-open")}return document.querySelector("#campaign-button").addEventListener("click",x),document.querySelector("#campaign-close").addEventListener("click",m),addEventListener("keydown",h=>{h.code==="Escape"&&!r.classList.contains("hidden")&&m()}),g(),{openCampaign:x,closeCampaign:m,render:g}}const av={intro:{"zh-CN":"audio/intro-zh-CN.mp3",en:"audio/intro-en.mp3",fr:"audio/intro-fr.mp3"}};function lv(i,e){const t=av[i];return t?t[e]??t["zh-CN"]??null:null}function cv({playbackState:i,muted:e}){return i==="idle"&&!e}async function uv({audio:i,source:e,muted:t}){if(!e)return t?"muted":"unavailable";i.src=e;try{return await i.play(),"playing"}catch{return"failed"}}const bc=["lower","moon","upper"],Sc=["scholar","knight","lady"],Mc=["armor","cat","tapestry"],Ec=["flute","harp","music-box"];function dv(i,e){const t=Ec[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,wakefulness:(i.wakefulness??0)+1,unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Ec.length,accepted:!0}}function hv(i,e){const t=bc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,timePenalty:(i.timePenalty??0)+5,unlocked:!1,accepted:!1};const n=[...i.progress,e];return{progress:n,mistakes:i.mistakes,...i.timePenalty!==void 0?{timePenalty:i.timePenalty}:{},unlocked:n.length===bc.length,accepted:!0}}function fv(i,e){const t=Sc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,suspicion:(i.suspicion??0)+1,unlocked:!1,accepted:!1};const n=[...i.progress,e],r=n.length===Sc.length;return{progress:n,mistakes:i.mistakes,...i.suspicion!==void 0?{suspicion:i.suspicion}:{},unlocked:r,accepted:!0,...r?{password:"月桂之后，银钥先行"}:{}}}function pv(i,e){const t=Mc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,alert:(i.alert??0)+1,unlocked:!1,accepted:!1};const n=[...i.progress,e];return{progress:n,mistakes:i.mistakes,...i.alert!==void 0?{alert:i.alert}:{},unlocked:n.length===Mc.length,accepted:!0}}const Tc=["scarf-keeper","notebook-scholar","compass-first-year"],wc=["seal-pipe","levitate-rubble","lower-beam"],Ac=["founders-index","dragon-ledger","moon-chronicle"],Cc=["wool-cloak","brass-lantern","shared-token"];function mv(i,e){const t=Cc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,illusion:(i.illusion??0)+1,feedback:"desire-not-need",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Cc.length,accepted:!0}}function gv(i,e){const t=Ac[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,noise:(i.noise??0)+1,unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Ac.length,accepted:!0}}function vv(i,e){const t=wc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,danger:(i.danger??0)+1,unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===wc.length,accepted:!0}}function _v(i,e){const t=Tc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,turbulence:(i.turbulence??0)+1,unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Tc.length,accepted:!0}}const Rc=["black-flame-potion","empty-pocket-reflection","protect-the-stone"];function xv(i,e){const t=Rc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,corruption:i.corruption+1,feedback:"intent-rejected",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Rc.length,accepted:!0}}const Ic=["pawn-decoy","knight-fork","rook-advance"];function yv(i,e){const t=Ic[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,captured:i.captured+i.progress.length+1,feedback:"piece-captured",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Ic.length,accepted:!0}}const Pc=["relax-grip","kindle-bluebell","hold-light"],Lc=["bent-wing","clockwise-drift","silver-key"];function bv(i,e){const t=Lc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,pursuit:i.pursuit+1,feedback:"key-swarm-scattered",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Lc.length,accepted:!0}}function Sv(i,e){const t=Pc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,constriction:(i.constriction??0)+1,feedback:"vines-tightened",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Pc.length,accepted:!0}}const Dc=["wait-high-swing","duck-low-return","dash-root-gap"];function Mv(i,e){const t=Dc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,bruises:i.bruises+1,feedback:"branch-hit",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Dc.length,accepted:!0}}const Uc=["balance-luggage","align-railway","pulse-throttle"];function Ev(i,e){const t=Uc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,turbulence:i.turbulence+1,feedback:"car-spinning",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Uc.length,accepted:!0}}const Nc=["jammed-post","levitating-cake","sealed-floo"];function Tv(i,e){const t=Nc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,interference:i.interference+1,feedback:"blockade-strengthened",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Nc.length,accepted:!0}}const wv=[{side:"left",feathers:4,bend:0},{side:"right",feathers:4,bend:0}],ws=(i={})=>({axis:"horizontal",shaftLength:1.55,bowRadius:.42,teeth:3,metal:"steel",wings:wv.map(e=>({...e})),...i}),Av=[{id:"bent-wing",label:"左翼弯折的钥影",clue:"I · 使用损伤",x:-4.8,display:{z:.7},color:9283527,model:ws({wings:[{side:"left",feathers:4,bend:-.48},{side:"right",feathers:4,bend:0}]}),evidence:{damage:"bent-left-wing"}},{id:"clockwise-drift",label:"顺时针下沉轨迹",clue:"II · 负重飞行",x:-1.6,display:{z:.7},color:7507640,model:ws({shaftLength:1.72}),evidence:{motion:"clockwise-descending",orbitMarkers:7}},{id:"silver-key",label:"小型银钥匙",clue:"III · 银屑吻合",x:1.6,display:{z:.7},color:12175579,model:ws({shaftLength:1.4,bowRadius:.36,metal:"silver"}),evidence:{lockMaterial:"silver"}},{id:"gold-key",label:"华丽金钥匙",clue:"诱饵 · 锁孔无金屑",x:4.8,display:{z:.7},color:12093749,model:ws({shaftLength:1.68,bowRadius:.58,teeth:4,metal:"gold"}),evidence:{lockMaterial:"mismatch"}}],Cu={wallClue:"左翼折痕 · 顺时针下沉 · 银屑锁孔",dynamic:{roomLoadedMessage:"飞钥匙房已加载：依次核对折翼、飞行轨迹和锁孔银屑。",wrong:"“{label}”惊散了钥匙群！追逐失误升至 {count}，三条证据需要重新确认。",firstHint:"左翼折痕与门框刮痕一致。现在观察负重钥匙群，寻找顺时针下沉的轨迹。",secondHint:"下沉轨迹锁定了小型钥匙。最后核对锁孔银屑，排除华丽但材质不符的金钥匙。",progress:"飞钥匙证据已确认 {count} / 3",accepted:"{label}与现场证据吻合，钥匙群的范围缩小了。",completeObjective:"飞钥匙房完成：折翼银钥匙准确嵌入门锁，通往巫师棋盘的石门已经开启",completeHint:"折翼证明它被使用过，顺时针下沉暴露负重，银屑完成最终材质核对。前方传来巨大棋子的脚步声。",transitionKicker:"第一部 · 第四章 · 第 2 关完成",transitionTitle:"折翼银钥匙",completionMessage:"银钥匙旋转一周，棋盘石门轰然开启——正在进入巫师棋盘！",nextRoomMessage:"巫师棋已加载：先诱敌，再双攻，最后沿空线推进。"}};function In(i,e,t={}){const n=Cu.dynamic[e];return ut(i,n).replace(/\{(\w+)\}/g,(s,o)=>t[o]??`{${o}}`)}const un=(i,e,t,n=.12,r=4,s=3)=>({id:i,layer:e,points:t,radius:n,leaves:r,thorns:s}),Cv=[un("exit-crown-left","exit",[[-3.8,.2,-2.8],[-2.9,1,-2.3],[-2,2,-2],[-.8,2.6,-1.9]],.2,7,5),un("exit-crown-right","exit",[[3.8,.2,-2.8],[2.9,1,-2.3],[2,2,-2],[.8,2.6,-1.9]],.2,7,5),un("exit-lattice-left","exit",[[-3.5,.1,-1],[-2.6,.9,-1.5],[-1.8,1.4,-2.2],[-1.2,.2,-2.8]],.16,6,4),un("exit-lattice-right","exit",[[3.5,.1,-1],[2.6,.9,-1.5],[1.8,1.4,-2.2],[1.2,.2,-2.8]],.16,6,4),un("west-climber-a","wall",[[-8.6,.1,2.5],[-8.2,1.8,1.7],[-8.5,3.9,.5],[-7.7,6.6,-.6]],.14,6,4),un("west-climber-b","wall",[[-8.5,.1,-5],[-7.9,1.7,-4.1],[-8.4,4.2,-3.2],[-7.6,6.7,-2]],.11,5,4),un("east-climber-a","wall",[[8.6,.1,2.1],[8,2,1.2],[8.5,4,0],[7.7,6.6,-1]],.14,6,4),un("east-climber-b","wall",[[8.5,.1,-5.2],[7.8,1.8,-4.3],[8.4,4,-3.1],[7.5,6.7,-1.8]],.11,5,4),un("ceiling-arch-a","ceiling",[[-7.5,6.7,1.8],[-4.8,6.4,.6],[-1.8,6.8,-.5],[1,6.35,-1.4]],.12,7,4),un("ceiling-arch-b","ceiling",[[7.5,6.7,2.2],[4.8,6.3,.9],[2,6.8,-.4],[-.9,6.35,-1.5]],.12,7,4),un("ceiling-cross-a","ceiling",[[-6.5,6.65,-5.8],[-3.5,6.25,-4.4],[.1,6.75,-3.2],[3.5,6.35,-2.2]],.1,6,3),un("ceiling-cross-b","ceiling",[[6.6,6.65,-5.6],[3.5,6.3,-4.5],[.2,6.7,-3.1],[-3.3,6.3,-2.1]],.1,6,3),un("floor-runner-left","exit",[[-7.8,.08,5.8],[-5.6,.2,3.7],[-4.1,.12,1.1],[-2.7,.3,-1.3]],.15,6,5),un("floor-runner-right","exit",[[7.8,.08,5.8],[5.6,.2,3.7],[4.1,.12,1.1],[2.7,.3,-1.3]],.15,6,5)],Rv=[{id:"relax-grip",label:"放松呼吸",clue:"I · 停止挣扎",x:-3.9,color:7977372,model:{kind:"breath-orb",rings:3,breathColor:11067852}},{id:"kindle-bluebell",label:"点燃蓝铃冷焰",clue:"II · 微光驱藤",x:-1.3,color:5213905,model:{kind:"bluebell-flame",petals:6,flameColor:7584255}},{id:"hold-light",label:"维持恒定光照",clue:"III · 稳住三拍",x:1.3,color:8637672,model:{kind:"steady-lantern",pulses:3,flameColor:10411263}},{id:"flare-brightly",label:"猛烈爆燃",clue:"诱饵 · 惊动根网",x:3.9,color:14048317,model:{kind:"wild-flare",flameCount:7,flameColor:16738866,safe:!1}}],Ru={wallClue:"停止挣扎 · 蓝铃冷焰 · 三拍恒光",dynamic:{roomLoadedMessage:"地下试炼已加载：放松藤蔓缠绕，以蓝铃冷焰和三拍恒光打开根网。",wrong:"“{label}”打乱节奏！根网骤然收紧至 {count} 级；先放松，再重新开始。",firstHint:"你停止挣扎，第一层藤蔓松开。现在点燃不会灼伤施法者的蓝铃冷焰。",secondHint:"冷焰逼退根须。最后保持三拍恒光，不要让亮度突然爆发。",progress:"魔鬼网光照节奏已完成 {count} / 3",accepted:"{label}奏效，地下出口上方的藤蔓正在退缩。",completeObjective:"魔鬼网完成：稳定冷焰驱散根网，通往飞钥匙房的地下出口已经开启",completeHint:"镇静削弱缠绕，蓝铃冷焰逼退藤蔓，三拍恒光打开根网。前方传来成群翅膀的振动声。",transitionKicker:"第一部 · 第四章 · 第 1 关完成",transitionTitle:"冷焰退藤",completionMessage:"魔鬼网缩回石缝——正在进入飞钥匙房！"}};function zn(i,e,t={}){const n=Ru.dynamic[e];return ut(i,n).replace(/\{(\w+)\}/g,(s,o)=>t[o]??`{${o}}`)}const As=(i,e={})=>({piece:i,height:1.75,material:"carved-stone",...e}),Rt={cellSize:1.3,boardStartX:-4.55,boardStartZ:-7.9,galleryZ:3,mobileCameraZ:8.8,mobileWallLabelSize:18},Iv=[{id:"pawn-decoy",label:"边兵诱敌",clue:"I · 引开主教",x:-3.3,display:{z:Rt.galleryZ,labelStyle:"pedestal-plaque"},mobileDisplay:{x:-1.35,z:Rt.galleryZ,scale:.68,plaqueWidth:1.15},color:10455404,model:As("pawn",{headRadius:.24})},{id:"knight-fork",label:"骑士双攻",clue:"II · 将军攻车",x:-1.1,display:{z:Rt.galleryZ,labelStyle:"pedestal-plaque"},mobileDisplay:{x:-.45,z:Rt.galleryZ,scale:.68,plaqueWidth:1.15},color:7902138,model:As("knight",{profile:"horse-head",maneRidges:4})},{id:"rook-advance",label:"城堡沿空线推进",clue:"III · 空线抵岸",x:1.1,display:{z:Rt.galleryZ,labelStyle:"pedestal-plaque"},mobileDisplay:{x:.45,z:Rt.galleryZ,scale:.68,plaqueWidth:1.15},color:8364420,model:As("rook",{battlements:6})},{id:"queen-charge",label:"王后强攻",clue:"诱饵 · 暴露全线",x:3.3,display:{z:Rt.galleryZ,labelStyle:"pedestal-plaque"},mobileDisplay:{x:1.35,z:Rt.galleryZ,scale:.68,plaqueWidth:1.15},color:11686492,model:As("queen",{crownSpikes:6})}],Iu={wallClue:"边兵牵制主教 · 骑士双攻 · 城堡穿过空线",dynamic:{wrong:"“{label}”暴露了棋路！巨棋吃掉已投入棋子，被吃总数升至 {count}。",firstHint:"边兵引开了黑主教。现在用骑士同时威胁国王与城堡，迫使黑方让出中央。",secondHint:"骑士双攻奏效，纵线已经清空。最后让城堡沿直线推进到对岸。",progress:"安全棋步已确认 {count} / 3",accepted:"{label}成立，巨型黑棋被迫改换阵形。",completeObjective:"巫师棋完成：仅以边兵诱敌，骑士与城堡已安全抵达对岸",completeHint:"诱敌打开斜线，双攻迫使让位，城堡穿过空线。最后的魔法石密室就在棋盘后方。",transitionKicker:"第一部 · 第四章 · 第 3 关完成",transitionTitle:"最少牺牲棋路",completionMessage:"白色城堡抵达对岸，火门显现——正在进入魔法石密室！",nextRoomMessage:"最终密室已加载：先解药剂逻辑，再辨镜像，最后证明守护意图。"}};function On(i,e,t={}){const n=Iu.dynamic[e];return ut(i,n).replace(/\{(\w+)\}/g,(s,o)=>t[o]??`{${o}}`)}const _n=Object.freeze({galleryZ:3.05,mobileCameraZ:9,mobileWallLabelSize:18,mobileWallLabelWidth:3.2,potionRow:Object.freeze({count:7,smallestIndex:3,z:-5.65}),blackFlame:Object.freeze({columns:11,height:2.6,z:-3.9}),mirror:Object.freeze({frame:"ornate-gold-arch",inscription:"erised-reversed"})}),Cs=i=>({z:_n.galleryZ,labelStyle:"pedestal-plaque",x:i}),Rs=i=>({x:i,z:_n.galleryZ,scale:.55,plaqueWidth:.85}),Pv=Object.freeze([Object.freeze({id:"black-flame-potion",label:"最小银瓶",clue:"I · 穿越黑焰",x:-3.3,color:8485030,display:Cs(-3.3),mobileDisplay:Rs(-.9),model:Object.freeze({kind:"potion-bottle",rank:"smallest-of-seven",height:.68,liquid:"violet-black-flame-antidote"})}),Object.freeze({id:"empty-pocket-reflection",label:"空口袋镜影",clue:"II · 不占有",x:-1.1,color:6717345,display:Cs(-1.1),mobileDisplay:Rs(-.3),model:Object.freeze({kind:"mirror-figure",pocket:"empty-and-visible",stoneVisible:!1})}),Object.freeze({id:"protect-the-stone",label:"守护石的誓言",clue:"III · 只为保护",x:1.1,color:7705713,display:Cs(1.1),mobileDisplay:Rs(.3),model:Object.freeze({kind:"protective-hands",gesture:"open-shield",stonePosition:"beyond-reach"})}),Object.freeze({id:"seize-the-stone",label:"夺取石的手",clue:"诱饵 · 占有欲",x:3.3,color:10305356,display:Cs(3.3),mobileDisplay:Rs(.9),model:Object.freeze({kind:"grasping-hand",gesture:"closed-grasp",corruption:"red-cracks"})})]),Ua=Object.freeze({wallClue:"七瓶取最小 · 镜中口袋为空 · 双手只作守护",mirrorInscription:"厄里斯 · 欲望倒写显形",dynamic:Object.freeze({wrong:"“{label}”暴露了占有欲！线索消散，腐化诱惑升至 {count}。",firstHint:"最小银瓶让你穿过黑焰。现在观察镜中衣袋：真正不求占有的人，口袋里不会出现石头。",secondHint:"空口袋镜影证明你没有取石欲望。最后明确你的意图：保护它，而不是拥有它。",progress:"魔法石密室线索已确认 {count} / 3",accepted:"{label}通过了密室检验，镜面中的金光更加清晰。",completeObjective:"第一部完成：魔法石只向无意占有、决心守护的人显现",completeHint:"药剂穿过黑焰，空口袋识破欲望，守护誓言让魔法石安全显现。新的绿色干扰正在住宅中聚集。",transitionKicker:"第一部 · 魔法石完成",transitionTitle:"第二部 · 不祥警告",completionMessage:"守护之石化作金光——正在返回住宅，调查精灵留下的三重封锁！",nextRoomMessage:"第二部首关已加载：沿邮槽、蛋糕与飞路炉追踪绿色魔力残痕。"})});function Fn(i,e,t={}){const n=Ua.dynamic[e];return ut(i,n).replace(/\{(\w+)\}/g,(s,o)=>t[o]??`{${o}}`)}const Is=i=>({material:"parchment",seal:"crimson-wax-h",width:.82,height:.5,wear:i}),Lv=[{id:"cupboard",chronology:1,destination:"H. Potter · 楼梯下的储物间",clue:"I · 楼梯下储物间",addressMark:"STAIRS",position:[-6.45,1,-3.1],rotation:[0,.55,0],envelope:Is(["creased-corners","dust-smudges"]),model:{kind:"cupboard-door",landmarks:["sloped-door","stair-treads","brass-vent"]}},{id:"bedroom",chronology:2,destination:"H. Potter · 楼上最小的卧室",clue:"II · 楼上最小卧室",addressMark:"WINDOW",position:[6.3,1.5,3.7],rotation:[0,-.65,0],envelope:Is(["creased-corners","window-scratches"]),model:{kind:"bedroom-window",landmarks:["blue-window","narrow-bed","roofline"]}},{id:"hotel-room-17",chronology:3,destination:"H. Potter · 铁路景观酒店 17 号房",clue:"III · 铁路旅馆 17 号房",addressMark:"ROOM 17",position:[-4.7,1.85,4.35],rotation:[0,.2,0],envelope:Is(["rain-speckles","luggage-scuffs"]),model:{kind:"hotel-key",landmarks:["brass-17","rail-signal","suitcase"]}},{id:"island-hut",chronology:4,destination:"H. Potter · 海上岩礁小屋",clue:"IV · 海上岩礁小屋",addressMark:"ROCK HUT",position:[5.55,2.15,-4.6],rotation:[0,-.3,0],envelope:Is(["salt-stains","torn-edge"]),model:{kind:"storm-hut",landmarks:["black-rock","timber-hut","wave-rings"]}}],Fs={wallClue:"楼梯下 · 楼上小卧室 · 17 号房 · 海上小屋",mobileWallWidth:5,mobileWallFontSize:29,dynamic:{wrong:"顺序错误：“{destination}”不是下一处藏身地。四封信重新飞散！",progress:"时间线正确：{destination} · {count} / 4",completeObjective:"时间线完成：循红蜡封印前往通往对角巷的门",completeHint:"四处藏身地首尾相接，信上的猩红 H 蜡印化成了门钥匙。",completeMessage:"四封信按时间顺序排列完成——通往对角巷的门已开启！"}};function Rr(i,e,t={}){const n=Fs.dynamic[e];return ut(i,n).replace(/\{(\w+)\}/g,(s,o)=>t[o]??`{${o}}`)}const Dv=[{id:"jammed-post",label:"堵塞的黄铜邮槽",clue:"I · 绿粉由门外进入",position:[-4.8,0,2],model:{kind:"brass-letter-slot",landmarks:["hinged-brass-flap","split-envelope","green-powder-trail"],materials:["aged-brass","ivory-parchment","emerald-residue"],damageOrMagic:["powder-packed-hinge"]}},{id:"levitating-cake",label:"悬浮的紫罗兰布丁蛋糕",clue:"II · 奶油下有绕行丝线",position:[-1.6,0,2],model:{kind:"violet-pudding-cake",landmarks:["two-tier-sponge","violet-frosting","sugared-violets"],materials:["golden-sponge","violet-icing","porcelain-plate"],damageOrMagic:["green-thread-orbit"]}},{id:"sealed-floo",label:"三环封印的飞路炉",clue:"III · 三环汇聚于炉心",position:[1.6,0,2],model:{kind:"triple-ring-fireplace-seal",landmarks:["brick-arch","three-rune-rings","cold-green-hearth"],materials:["soot-black-brick","verdigris-copper","floo-embers"],damageOrMagic:["three-converging-residue-streams"]}},{id:"shrieking-lamp",label:"裂口尖叫油灯",clue:"诱饵 · 红线接回警报",position:[4.8,0,2],model:{kind:"shrieking-oil-lamp",landmarks:["loop-handle","cracked-glass","mouth-shaped-flame"],materials:["blackened-iron","smoked-glass","alarm-red-flame"],damageOrMagic:["red-alarm-wire"]}}],sr=Object.freeze({mobileClueWidth:2.45,mobileClueFontSize:23,desktopClueWidth:2.75,desktopClueFontSize:28,mobileWallWidth:5,mobileWallFontSize:24}),Pu={wallClue:"邮槽绿粉 · 蛋糕丝线 · 壁炉三环",dynamic:{wrong:"“{label}”接通了报警回路！封锁重置，干扰增强至 {count}。",firstHint:"邮槽里的绿色粉尘来自室外。残痕没有走直线，而是绕向被悬浮咒托起的蛋糕。",secondHint:"蛋糕下方的魔力丝线指向壁炉。最后解除飞路炉上的三环封印。",progress:"住宅封锁痕迹已确认 {count} / 3",accepted:"{label}的残痕已固定，绿色干扰显露下一段走向。",completeObjective:"精灵的封锁完成：邮槽、悬浮蛋糕与飞路炉的干扰链已全部解除",completeHint:"绿色粉尘标出入口，悬浮蛋糕暴露绕行，飞路封印是最终汇聚点。住宅出口重新打开。",transitionKicker:"第二部 · 第一章 · 第 1 关完成",transitionTitle:"飞车失控",completionMessage:"三重封锁碎成绿色星屑——正在登上失控飞车，追赶霍格沃茨特快！",nextRoomMessage:"飞车关卡已加载：先调整行李配重，再对准铁路，最后短促给油。"}};function kn(i,e,t={}){const n=Pu.dynamic[e];return ut(i,n).replace(/\{(\w+)\}/g,(s,o)=>t[o]??`{${o}}`)}const Na=["cupboard","bedroom","hotel-room-17","island-hut"],Oa=["spellbook","cauldron","owl","wand-box"],Pr=Object.freeze({spellbook:2,cauldron:3,owl:4,"wand-box":3}),Uv=Object.freeze([Object.freeze({id:"owl-letters",name:"猫头鹰来信"}),Object.freeze({id:"diagon-alley-list",name:"对角巷清单"}),Object.freeze({id:"wand-selection",name:"魔杖选择"}),Object.freeze({id:"sorting-ceremony",name:"分院仪式"})]);function rl(i){return Uv[i]??null}function Nv(i,e){const t=Na[i.progress.length];if(e!==t)return{progress:[],unlocked:!1,reset:!0};const n=[...i.progress,e];return{progress:n,unlocked:n.length===Na.length,reset:!1}}function Ov(i,e){const t=Oa[i.progress.length];if(e!==t)return{progress:[],unlocked:!1,spent:0,reset:!0};const n=[...i.progress,e];return{progress:n,spent:(i.spent??0)+Pr[e],unlocked:n.length===Oa.length,reset:!1}}function Fv(i,e){return e!=="holly"?{...i,mistakes:i.mistakes+1,accepted:!1,feedback:"unstable"}:{...i,progress:["wood"],accepted:!0}}function kv(i,e){return i.progress.includes("wood")?e!=="phoenix-feather"?{...i,mistakes:i.mistakes+1,accepted:!1,feedback:"resisted"}:{...i,progress:[...i.progress,"core"],accepted:!0}:{...i,accepted:!1,feedback:"unavailable"}}function zv(i,e){return e===11?{...i,progress:[...i.progress,"length"],unlocked:!0,accepted:!0,feedback:"chosen"}:{...i,mistakes:i.mistakes+1,accepted:!1,feedback:e<11?"too-short":"too-long"}}function Bv(i,e){const t=["lion","badger","eagle","snake"],n={lion:"courage",badger:"loyalty",eagle:"wisdom",snake:"ambition"},r=t[i.progress.length];if(e!==r)return{...i,mistakes:i.mistakes+1,accepted:!1,feedback:"wrong-order"};const s=[...i.progress,e],o=s.length===t.length;return{...i,progress:s,unlocked:o,accepted:!0,trait:n[e],...o?{chapterComplete:!0}:{}}}function Hv({roomIndex:i,unlocked:e}){return e?{roomIndex:i+1,advanced:!0}:{roomIndex:i,advanced:!1}}const Et=new Sh,Ft=new xn(70,innerWidth/innerHeight,.1,100),_i=new Fg({antialias:!0});_i.setPixelRatio(Math.min(devicePixelRatio,2));_i.setSize(innerWidth,innerHeight);_i.shadowMap.enabled=!0;_i.shadowMap.type=Gc;_i.outputColorSpace=dn;document.querySelector("#app").appendChild(_i.domElement);const de=new qh(10201809,2957592,1.05);Et.add(de);const sl=new $h(12899583,1.5);sl.position.set(-4,8,5);sl.castShadow=!0;Et.add(sl);const Pn=new Hg(Ft,document.body),ol=document.querySelector("#start-screen"),Zr=document.querySelector("#start-button"),Qs=document.querySelector("#continue-button"),Ws=document.querySelector("#restart-button"),Vv=document.querySelector("#mobile-controls"),Xe=document.querySelector("#objective"),Lt=document.querySelector("#counter"),Lr=document.querySelector("#prompt"),Ho=document.querySelector("#message"),fn=document.querySelector("#room-kicker"),Gv=document.querySelector("#room-name"),je=document.querySelector("#puzzle-hint"),kt=document.querySelector("#puzzle-progress"),nt=document.querySelector("#room-transition"),$t=document.querySelector("#transition-kicker"),en=document.querySelector("#transition-title"),Xs=document.querySelector("#language-screen"),Lu=document.querySelector("#language-button"),Kt=document.querySelector("#narration-button"),kr=document.querySelector("#narration-status"),Wv=document.querySelector("#narration-subtitle"),hr=document.querySelector("#narration-audio");let Mn="idle",Fa=0;const Zt=matchMedia("(pointer: coarse)").matches||matchMedia("(max-width: 820px)").matches||navigator.maxTouchPoints>0,Oc=wu(localStorage),Dr=Oc?Zg(Oc):null;let ce=tv(localStorage),Ee=Kr(ce),Du,Jr=!1,Re=new Bt;Et.add(Re);let Ve=[],yt=[],pi=null,Ne=null,Mt=0,I={progress:[],unlocked:!1},Fc,ks=!1;const kc={x:8.25,z:8.25},ka=new Jh;ka.far=4.2;function k(i,e={}){return new vu({color:i,roughness:.82,...e})}function B(i,e,t,n,r=!0,s=Re){const o=new oe(new Jt(...e),n);return o.name=i,o.position.set(...t),o.castShadow=r,o.receiveShadow=!0,s.add(o),o}function Xv(i){i.traverse(e=>{e.geometry?.dispose?.();const t=Array.isArray(e.material)?e.material:[e.material];for(const n of t)n&&(n.map?.dispose?.(),n.dispose?.())})}function qv(){Et.remove(Re),Xv(Re),Re=new Bt,Et.add(Re),Ve=[],yt=[],pi=null,Ne=null,Lr.classList.remove("visible")}function ze(i,e,{color:t="#f2d28b",width:n=4.8,size:r=54}={}){i=ut(ce,i);const s=document.createElement("canvas");s.width=1024,s.height=220;const o=s.getContext("2d");o.fillStyle="rgba(7, 5, 10, 0.82)",o.fillRect(0,0,s.width,s.height),o.strokeStyle=t,o.lineWidth=8,o.strokeRect(8,8,s.width-16,s.height-16),o.fillStyle=t,o.font=`600 ${r}px -apple-system, BlinkMacSystemFont, sans-serif`,o.textAlign="center",o.textBaseline="middle",o.fillText(i,s.width/2,s.height/2);const a=new Ch(s);a.colorSpace=dn;const l=new Eh(new du({map:a,transparent:!0,depthTest:!0}));return l.position.set(...e),l.scale.set(n,n*.215,1),Re.add(l),l}function le(i,e=2400){Ho.textContent=ut(ce,i),Ho.classList.add("show"),clearTimeout(Fc),Fc=setTimeout(()=>Ho.classList.remove("show"),e)}function Gt({index:i,name:e,objectiveText:t,hint:n,progress:r}){const s=Mt>=16?{book:2,chapter:1,room:Mt-15}:{book:1,chapter:Math.floor(Mt/4)+1,room:Mt%4+1},o=rv(ce,{...s,name:e,objectiveText:t,hint:n});fn.textContent=o.kicker,Gv.textContent=o.name,Xe.textContent=o.objectiveText,je.textContent=o.hint,kt.textContent=r}function zc(){const i=I.progress.length;Lt.textContent=Ee("counter.letters",{count:i}),kt.textContent=Na.map((e,t)=>t<i?"●":"○").join("  ")}function Bc(){const i=I.progress.length;Lt.textContent=Ee("counter.shopping",{count:i,remaining:12-(I.spent??0)}),kt.textContent=Oa.map((e,t)=>t<i?"✓":"□").join("  ")}function al(){const i=I.progress.includes("wood"),e=I.progress.includes("core"),t=I.progress.includes("length");Lt.textContent=Ee("counter.wand",{count:I.progress.length,mistakes:I.mistakes}),kt.textContent=`木材 ${i?"✓":"○"}  杖芯 ${e?"✓":"○"}  长度 ${t?"✓":"○"}`}function Yv(){Lt.textContent=Ee("counter.sorting",{count:I.progress.length,mistakes:I.mistakes}),kt.textContent=`狮 ${I.progress.includes("lion")?"✓":"○"}  獾 ${I.progress.includes("badger")?"✓":"○"}  鹰 ${I.progress.includes("eagle")?"✓":"○"}  蛇 ${I.progress.includes("snake")?"✓":"○"}`}function Uu(){Lt.textContent=Ee("counter.stairs",{count:I.progress.length,penalty:I.timePenalty}),kt.textContent=["lower","moon","upper"].map((i,e)=>e<I.progress.length?"◆":"◇").join("  ")}function Nu(){Lt.textContent=Ee("counter.portraits",{count:I.progress.length,value:I.suspicion}),kt.textContent=["scholar","knight","lady"].map((i,e)=>e<I.progress.length?"▣":"▢").join("  ")}function Ou(){Lt.textContent=Ee("counter.patrol",{count:I.progress.length,value:I.alert}),kt.textContent=["armor","cat","tapestry"].map((i,e)=>e<I.progress.length?"◆":"◇").join("  ")}function Fu(){Lt.textContent=Ee("counter.lullaby",{count:I.progress.length,value:I.wakefulness}),kt.textContent=["flute","harp","music-box"].map((i,e)=>e<I.progress.length?"♪":"·").join("  ")}function ku(){Lt.textContent=Ee("counter.flying",{count:I.progress.length,value:I.turbulence}),kt.textContent=["围巾","笔记","罗盘"].map((i,e)=>e<I.progress.length?"➤":"○").join("  ")}function zu(){Lt.textContent=Ee("counter.troll",{count:I.progress.length,value:I.danger}),kt.textContent=["止水","清障","架桥"].map((i,e)=>e<I.progress.length?"✦":"◇").join("  ")}function Bu(){Lt.textContent=Ee("counter.library",{count:I.progress.length,value:I.noise}),kt.textContent=["建校","龙灾","月蚀"].map((i,e)=>e<I.progress.length?"▰":"▱").join("  ")}function Hu(){Lt.textContent=Ee("counter.mirror",{count:I.progress.length,value:I.illusion}),kt.textContent=["御寒","照路","同行"].map((i,e)=>e<I.progress.length?"◈":"◇").join("  ")}function Vu(){Lt.textContent=Ee("counter.snare",{count:I.progress.length,value:I.constriction}),kt.textContent=[0,1,2].map((i,e)=>e<I.progress.length?"✺":"○").join("  ")}function Gu(){Lt.textContent=Ee("counter.keys",{count:I.progress.length,value:I.pursuit}),kt.textContent=["折翼","轨迹","锁孔"].map((i,e)=>e<I.progress.length?"🗝":"◇").join("  ")}function Wu(){Lt.textContent=Ee("counter.chess",{count:I.progress.length,value:I.captured}),kt.textContent=["兵诱敌","马双攻","车开路"].map((i,e)=>e<I.progress.length?"♟":"◇").join("  ")}function Xu(){Lt.textContent=Ee("counter.stone",{count:I.progress.length,value:I.corruption}),kt.textContent=["药剂","镜像","意图"].map((i,e)=>e<I.progress.length?"◆":"◇").join("  ")}function qu(){Lt.textContent=Ee("counter.elf",{count:I.progress.length,value:I.interference}),kt.textContent=["邮槽","蛋糕","飞路"].map((i,e)=>e<I.progress.length?"✦":"◇").join("  ")}function Yu(){Lt.textContent=Ee("counter.car",{count:I.progress.length,value:I.turbulence}),kt.textContent=["配重","航向","油门"].map((i,e)=>e<I.progress.length?"➤":"◇").join("  ")}function ju(){Lt.textContent=Ee("counter.willow",{count:I.progress.length,value:I.bruises}),kt.textContent=["等","伏","冲"].map((i,e)=>e<I.progress.length?"♩":"◇").join("  ")}function Wt({wall:i=5787455,floor:e=2892828,ceiling:t=2696479,fog:n=1512207}){Et.background=new et(n),Et.fog=new Ka(n,.028);const r=k(i,{roughness:.96}),s=k(e,{roughness:1});B("地板",[18,.25,18],[0,-.12,0],s,!1),B("天花板",[18,.25,18],[0,7,0],k(t),!1),B("北墙",[18,7,.3],[0,3.5,-9],r,!1),B("南墙",[18,7,.3],[0,3.5,9],r,!1),B("西墙",[.3,7,18],[-9,3.5,0],r,!1),B("东墙",[.3,7,18],[9,3.5,0],r,!1)}function xt(i,e=2.5,t=8){const n=new vi(16753737,e,t,2);n.position.set(...i),n.castShadow=!0,Re.add(n);const r=new oe(new tt(.09,12,12),new ei({color:16762216}));r.position.copy(n.position),Re.add(r)}function ll(i,e){const t=k(5256734,{roughness:.72}),n=k(2430735,{roughness:.75,metalness:.08});B("左门框",[.22,5.5,.42],[-1.72,2.75,-8.63],t),B("右门框",[.22,5.5,.42],[1.72,2.75,-8.63],t),B("上门框",[3.65,.22,.42],[0,5.45,-8.63],t);const r=new Bt;r.position.set(-1.58,0,-8.48),Re.add(r);const s=B(i,[3.16,5.15,.22],[1.58,2.58,0],n,!0,r);return s.userData={type:"door",label:i,unlocked:!1,opening:!1,pivot:r,nextRoomIndex:e},Ve.push(s),pi=s,ze(i,[0,6.05,-8.35],{width:4.2,size:48}),s}function Vo({position:i,rotation:e=[0,0,0],clueId:t=null,destination:n="",addressMark:r="",decoy:s=!1,decorative:o=!1,phase:a=0}){const l=k(15261117,{roughness:.72,emissive:t?2365197:0,emissiveIntensity:t?.35:0}),c=new oe(new Jt(.86,.54,.05),l);c.position.set(...i),c.rotation.set(...e),c.castShadow=!0,Re.add(c);const u=new oe(new ot(.095,.095,.032,18),k(8328736,{roughness:.55}));if(u.rotation.x=Math.PI/2,u.position.set(0,-.05,.055),c.add(u),t){const f=k(14000474,{metalness:.2,roughness:.5});B("H 蜡印左竖",[.018,.095,.014],[-.031,-.05,.078],f,!1,c),B("H 蜡印右竖",[.018,.095,.014],[.031,-.05,.078],f,!1,c),B("H 蜡印横",[.075,.018,.014],[0,-.05,.078],f,!1,c);const p=k(3418917,{roughness:1});for(const[g,x]of[.48,.38,.3].entries())B("地址墨线",[x,.018,.009],[0,.11-g*.065,.041],p,!1,c)}const d=new oe(new rn().setFromPoints([new P(-.38,.22,.031),new P(.38,.22,.031),new P(0,-.05,.031)]),new ei({color:13615775,side:En}));return c.add(d),o||(c.name=n,c.userData={type:"owl-letter",clueId:t,destination:n,addressMark:r,decoy:s,selected:!1},Ve.push(c)),yt.push({object:c,baseY:i[1],phase:a,spin:o?.08:.025,bob:o?.16:.07}),c}function Ur(i,e=1,t=!1){const n=new Bt;n.position.set(...i),n.scale.setScalar(e);const r=k(15328209,{roughness:1}),s=new oe(new tt(.34,18,18),r);s.scale.y=1.35,s.castShadow=!0,n.add(s);const o=new oe(new tt(.29,18,18),r);o.position.y=.48,n.add(o);for(const l of[-.11,.11]){const c=new oe(new tt(.055,12,12),new ei({color:15911244}));c.position.set(l,.53,.25),n.add(c);const u=new oe(new tt(.025,10,10),new ei({color:592137}));u.position.set(l,.53,.295),n.add(u)}const a=new oe(new Qt(.07,.18,4),k(14064444));return a.rotation.x=Math.PI/2,a.position.set(0,.4,.31),n.add(a),Re.add(n),t&&(s.userData={type:"shopping-item",itemId:"owl",label:"雪白猫头鹰"},Ve.push(s)),yt.push({object:n,baseY:i[1],phase:i[0]+i[2],spin:0,bob:.04}),n}function jv(i){const[e,,t]=i.position,n=new Bt;n.position.set(e,0,t),Re.add(n);const r=k(5387551,{roughness:.94}),s=k(12159288,{metalness:.72,roughness:.34}),o=k(4681358,{emissive:1322826,emissiveIntensity:.85,roughness:.28});if(i.model.kind==="cupboard-door"){B("斜顶储物间门",[1.5,1.8,.16],[0,.9,-.28],r,!0,n);for(const a of[.52,.66,.8])B("黄铜通风槽",[.52,.045,.035],[0,a,-.18],s,!1,n);for(let a=0;a<4;a+=1)B("楼梯踏步剪影",[1.8-a*.25,.18,.52],[-.7+a*.15,1.9+a*.18,-.18],r,!0,n)}else if(i.model.kind==="bedroom-window"){B("窄床",[1.65,.28,.72],[0,.35,-.15],k(7107919),!0,n),B("小卧室蓝窗",[1.22,1.28,.1],[0,1.35,-.45],o,!1,n),B("窗棂横",[1.3,.07,.13],[0,1.35,-.37],r,!1,n),B("窗棂竖",[.07,1.35,.13],[0,1.35,-.37],r,!1,n);const a=new oe(new Qt(1.18,.64,4),k(4337704));a.rotation.y=Math.PI/4,a.position.set(0,2.25,-.34),n.add(a)}else if(i.model.kind==="hotel-key"){B("旅行箱",[1.55,.92,.5],[0,.52,-.18],k(6898987),!0,n),B("旅行箱带",[.16,.96,.54],[0,.52,-.18],r,!0,n);const a=new oe(new Yt(.27,.055,10,24),s);a.position.set(0,1.55,-.12),n.add(a),B("17 号黄铜钥匙牌",[.75,.5,.1],[0,1.18,-.12],s,!0,n),ze("ROOM 17",[e,1.2,t+.02],{width:1.1,size:48,color:"#2c2117"}),B("铁路红色信号",[.16,1.4,.16],[-.75,1,-.35],k(3487030),!0,n);const l=new oe(new tt(.16,12,12),k(12991538,{emissive:7999498,emissiveIntensity:1.5}));l.position.set(-.75,1.7,-.35),n.add(l)}else{const a=new oe(new Ja(1.18,0),k(3225661,{roughness:1}));a.scale.set(1.2,.58,.95),a.position.set(0,.55,-.2),n.add(a),B("暴风小屋",[1.25,1.05,.9],[0,1.25,-.2],r,!0,n);const l=new oe(new Qt(1.05,.72,4),k(2498588));l.rotation.y=Math.PI/4,l.position.set(0,2.08,-.2),n.add(l);for(const c of[1.25,1.55]){const u=new oe(new Yt(c,.045,8,36,Math.PI),k(4750739,{emissive:1456973,emissiveIntensity:1}));u.rotation.x=Math.PI/2,u.rotation.z=Math.PI/2,u.position.set(0,.2,.1),n.add(u)}}ze(i.clue,[e,2.85,t],{width:2.25,size:31})}function $v(){de.color.setHex(10985609),de.groundColor.setHex(3352093),Wt({wall:6709064,floor:3745566,ceiling:3881005,fog:1577487}),Gt({index:0,name:"猫头鹰来信",objectiveText:"目标：按弗农改变藏身处的时间顺序检查四封信",hint:"地址会追着哈利变化。错误选择会让已确认的信全部重新飞散。",progress:"○  ○  ○  ○"}),Lt.textContent=Ee("counter.letters",{count:0}),I={progress:[],unlocked:!1};const i=k(4861208),e=k(2956049),t=k(7035201,{roughness:1}),n=k(5975587,{roughness:1});for(let o=0;o<7;o+=1)B("楼梯",[3.8-o*.32,.32,1.05],[-6.7+o*.2,.16+o*.32,-4.6+o*.72],e);B("楼梯下储物间",[2.4,2.15,.16],[-7.7,1.08,-3.7],i),ze("楼梯下的储物间",[-7.42,2.55,-3.52],{width:3.2,size:42}),B("壁炉背板",[4.1,3.6,.38],[0,1.8,-8.58],n),B("壁炉洞口",[2.3,2,.46],[0,1,-8.3],k(1182472)),B("壁炉台",[4.6,.28,.72],[0,3.45,-8.2],i),xt([0,1.05,-7.85],4.2,8);for(const o of[-.55,0,.55])xt([o,.55+Math.abs(o)*.3,-7.75],1.25,4);B("沙发座",[4.2,.65,1.45],[3.9,.62,2.6],t),B("沙发背",[4.2,1.45,.45],[3.9,1.35,3.05],t),B("茶几",[3.1,.22,1.7],[1.7,.75,.2],i);for(const[o,a]of[[.45,-.45],[2.95,-.45],[.45,.85],[2.95,.85]])B("茶几腿",[.16,.75,.16],[o,.37,a],e);const r=k(6455968,{emissive:1915224,emissiveIntensity:1.8,roughness:.25});B("窗户",[5.1,2.7,.12],[0,3.8,8.78],r,!1),B("窗框横",[5.3,.16,.2],[0,3.8,8.65],i),B("窗框竖",[.16,2.9,.2],[0,3.8,8.65],i),Ur([-2,5.4,8.2],.8),Ur([0,5.65,8.2],.72),Ur([2.1,5.25,8.2],.85),Ur([-3.9,2.15,-1.4],1.05),ze("4 PRIVET DRIVE",[0,6.15,8.45],{width:5.2,size:52}),ze("NO POST ON SUNDAYS!",[3.85,4.7,-8.3],{color:"#e4b55e",width:4,size:42}),Lv.forEach((o,a)=>{jv(o),Vo({...o,clueId:o.id,phase:a*1.4})}),[["front-door","V. Dursley · 女贞路前门",[-2.8,1.45,2.3]],["kitchen","D. Dursley · 厨房餐桌",[4.6,1.5,.2]],["zoo","H. Potter · 动物园爬虫馆",[-5.9,1.75,1.9]],["school","H. Potter · 石墙中学",[.1,1.35,3.75]]].forEach(([o,a,l],c)=>Vo({clueId:o,destination:a,position:l,decoy:!0,rotation:[0,c*.7,0],phase:2+c}));for(let o=0;o<34;o+=1){const a=o*.73,l=1.4+o%7*.72;Vo({position:[Math.sin(a)*l,1.1+o%9*.54,-6.8+Math.cos(a)*l*.62],rotation:[Math.sin(o)*.45,a,Math.cos(o*.4)*.3],decorative:!0,phase:o*.37})}ze(Fs.wallClue,[0,6.25,-8.05],{width:Fs.mobileWallWidth,size:Fs.mobileWallFontSize}),ll("通往对角巷",1)}function or(i,e,t,n){const r=k(n,{roughness:.9});B(`${t}店面`,[3.2,5.6,.55],[i,2.8,e],r),B(`${t}橱窗`,[2.15,2.15,.12],[i,2.85,e+(e<0?.34:-.34)],k(4284528,{emissive:1587271,emissiveIntensity:.8,roughness:.2})),ze(t,[i,5.3,e+(e<0?.42:-.42)],{width:3,size:38,color:"#e8c871"})}function li(i,e,t,n,r=9069888){let s;if(i==="cauldron"){s=new oe(new ot(.48,.62,.62,24,1,!0),k(2697771,{metalness:.65,roughness:.38,side:En})),s.position.set(...t),Re.add(s);const o=new oe(new Yt(.5,.06,10,24),k(5592922,{metalness:.8}));o.rotation.x=Math.PI/2,o.position.y=.32,s.add(o)}else i==="owl"?s=Ur(t,1.1,!0).children[0]:i==="broomstick"?(s=new oe(new ot(.055,.055,2.2,10),k(6898719)),s.rotation.z=Math.PI/2.7,s.position.set(...t),Re.add(s)):s=B(e,i==="spellbook"?[1.15,.28,.82]:i==="wand-box"?[1.55,.24,.42]:[.85,.85,.85],t,k(r,{emissive:r,emissiveIntensity:.08}));return s.name=e,s.userData={type:"shopping-item",itemId:i,label:e,price:n},Ve.includes(s)||Ve.push(s),ze(`${e} · ${n} G`,[t[0],t[1]+1.05,t[2]],{width:2.8,size:32}),s}function Kv(){de.color.setHex(7305376),de.groundColor.setHex(1775393),Wt({wall:3156026,floor:3617336,ceiling:1512477,fog:1051927}),Gt({index:1,name:"对角巷清单",objectiveText:"目标：按霍格沃茨清单采购四件合规格物品，预算 12 加隆",hint:"课本 → 二号锡制坩埚 → 猫头鹰 → 魔杖盒。核对规格与价签，买错会清空采购篮。",progress:"□  □  □  □"}),Lt.textContent=Ee("counter.shopping",{count:0,remaining:12}),I={progress:[],unlocked:!1,spent:0},Et.fog.density=.022;for(let i=-7;i<=7;i+=1.1)for(let e=-2.8;e<=2.8;e+=1.1){const t=B("鹅卵石",[.95,.08,.95],[e+i*10%2*.22,.02,i],k(4801613,{roughness:1}),!1);t.rotation.y=(e+i)*.08}or(-6.9,-5.8,"丽痕书店",5058601),or(6.9,-5.8,"坩埚店",2440250),or(-6.9,.3,"咿啦猫头鹰商店",4799784),or(6.9,.3,"奥利凡德魔杖店",3353414),or(-6.9,6.2,"药剂材料铺",4075071),or(6.9,6.2,"魁地奇精品店",4073769);for(const i of[[-3.2,4.5,-4.2],[3.2,4.2,-1.8],[-2.1,4.8,3.8],[2.8,4.4,6.5]])xt(i,2.6,7);li("spellbook","《标准咒语·初级》",[-4.9,1,-5],Pr.spellbook,8070194),li("cauldron","二号锡制坩埚",[5,.7,-4.9],Pr.cauldron),li("owl","雪白猫头鹰",[-5,1.25,.6],Pr.owl),li("wand-box","等待主人的魔杖盒",[5,1,.7],Pr["wand-box"],6966058),li("broomstick","飞天扫帚",[5,1.2,5.8],7),li("crystal-ball","水晶球",[-5,1,5.7],5,6707589),li("gold-scales","黄铜天平",[-3.2,1,-1.8],4,11041845),li("advanced-potions","高级魔药学",[3.1,1,-2.5],6,2706741),ll("进入奥利凡德魔杖店",2)}function Go(i,e,t,n=0){const r=new oe(new ot(.025,.065,e,10),k(t,{roughness:.7}));return r.position.set(...i),r.rotation.z=Math.PI/2,r.rotation.y=n,r.castShadow=!0,Re.add(r),r}function Zv(){de.color.setHex(12032624),de.groundColor.setHex(2365198),Wt({wall:4206623,floor:2365199,ceiling:1511435,fog:1051400}),Et.fog.density=.034,Gt({index:2,name:"魔杖选择",objectiveText:"目标：第一阶段，从三种木材中找出与你产生稳定共鸣的一种",hint:"木材线索：闪电形旧伤旁，常青叶不会在严冬凋零。选错会触发失控魔法。",progress:"木材 ○  杖芯 ○  长度 ○"}),Lt.textContent=Ee("counter.wand",{count:0,mistakes:0}),I={progress:[],unlocked:!1,mistakes:0};const i=k(2824461,{roughness:.88}),e=k(5715741,{roughness:.8}),t=[7230258,5257507,8086080,4008732];for(const u of[-1,1]){B("高魔杖柜",[.72,6.35,16.4],[u*8.35,3.18,0],i);for(let d=0;d<8;d+=1){B("柜架横梁",[.86,.1,16.1],[u*7.92,.55+d*.73,0],e);for(let f=0;f<10;f+=1){const p=t[(d+f+(u>0?1:0))%t.length],g=B("积尘的魔杖盒",[.24,.48,1.25],[u*7.77,.82+d*.73,-7.1+f*1.55],k(p,{roughness:.95}));g.rotation.x=((d+f)%3-1)*.025}}}B("奥利凡德柜台",[8.2,1.15,1.3],[0,.58,-4.5],e),B("柜台台面",[8.65,.18,1.55],[0,1.2,-4.5],k(7753770,{roughness:.55}));for(const[u,d,f]of[[-2.5,6238744,1.1],[0,2692620,1.28],[2.5,10120255,1.42]])B("打开的魔杖盒",[1.8,.16,.48],[u,1.38,-4.42],k(1511435)),Go([u,1.55,-4.42],f,d);ze("木材  ·  杖芯  ·  长度",[0,2.35,-4.95],{width:5.4,size:43});const n=[{id:"oak",label:"橡木",x:-3.2,color:9067051},{id:"holly",label:"冬青木",x:0,color:15656132},{id:"yew",label:"紫杉木",x:3.2,color:4792340}];for(const u of n){B(`${u.label}样本台`,[1.8,.85,1.2],[u.x,.42,1.25],i);const d=Go([u.x,1.16,1.25],1.35,u.color);d.name=`${u.label}木材样本`,d.userData={type:"wand-wood",woodId:u.id,label:u.label,selected:!1},Ve.push(d),ze(u.label,[u.x,2,1.25],{width:1.65,size:40})}const r=[{id:"dragon-heartstring",label:"龙心弦",x:-3.2,color:10959653},{id:"phoenix-feather",label:"凤凰羽毛",x:0,color:15906891},{id:"unicorn-hair",label:"独角兽毛",x:3.2,color:15196623}];for(const u of r){const d=B(`${u.label}杖芯台`,[1.8,.85,1.2],[u.x,.42,-1.15],i);d.visible=!1;const f=new oe(new ot(.14,.14,1.05,14),k(u.color,{emissive:u.color,emissiveIntensity:.45}));f.position.set(u.x,1.25,-1.15),f.name=`${u.label}杖芯样本`,f.userData={type:"wand-core",coreId:u.id,label:u.label,selected:!1,pedestal:d},f.visible=!1,Re.add(f),Ve.push(f)}const s=[{inches:9,label:"九英寸",x:-3.2,length:1.05},{inches:11,label:"十一英寸",x:0,length:1.3},{inches:13,label:"十三英寸",x:3.2,length:1.55}];for(const u of s){const d=B(`${u.label}校准台`,[1.8,.85,1.2],[u.x,.42,3.85],i);d.visible=!1;const f=Go([u.x,1.2,3.85],u.length,15656132);f.name=`${u.label}冬青木魔杖`,f.userData={type:"wand-length",inches:u.inches,label:u.label,selected:!1,pedestal:d},f.visible=!1,Ve.push(f);const p=ze(u.label,[u.x,2.05,3.85],{width:1.7,size:38});p.visible=!1,f.userData.lengthLabel=p}const o=new Bt;o.position.set(4.8,0,-6.15);const a=new oe(new ot(.38,.58,1.7,12),k(2696235));a.position.y=.9,o.add(a);const l=new oe(new tt(.3,16,12),k(13083772));l.position.y=1.95,o.add(l);const c=new oe(new tt(.32,14,10,0,Math.PI*2,0,Math.PI*.58),k(14209213));c.position.y=2.06,o.add(c),Re.add(o),B("后墙梯子左",[.14,5.7,.14],[-4.7,2.85,-8.35],e),B("后墙梯子右",[.14,5.7,.14],[-3.65,2.85,-8.35],e);for(let u=.45;u<5.5;u+=.48)B("梯子横档",[1.2,.1,.12],[-4.18,u,-8.28],e);ze("OLLIVANDERS · 公元前 382 年",[0,6.18,-8.45],{width:6.5,size:42}),xt([-5.2,4.7,-2.3],3.1,9),xt([5.2,4.7,-2.3],3.1,9),xt([0,4.5,-6.4],2.7,7);for(let u=0;u<12;u+=1){const d=new oe(new tt(.025,6,6),new ei({color:15387514})),f=[-5.5+u%6*2.2,1.3+u%4*1.15,-5.7+Math.floor(u/6)*5.8];d.position.set(...f),Re.add(d),yt.push({object:d,baseY:f[1],phase:u*.8,spin:0,bob:.22})}ll("登上霍格沃茨特快",3)}function Jv(){de.color.setHex(9281736),de.groundColor.setHex(1512738),Wt({wall:4208431,floor:2169624,ceiling:1119270,fog:921632}),Et.fog.density=.022,Gt({index:3,name:"分院仪式",objectiveText:"目标：走近分院帽，观察大厅里的四学院象征",hint:"勇气、忠诚、智慧与野心各有象征；分院帽正在等待你的选择。",progress:"狮 ○  獾 ○  鹰 ○  蛇 ○"}),Lt.textContent=Ee("counter.sorting",{count:0,mistakes:0}),I={progress:[],unlocked:!1,mistakes:0};const i=k(4992538,{roughness:.84});for(const n of[-5.6,-1.9,1.9,5.6]){B("学院长桌",[1.45,.65,11.5],[n,.72,.8],i);for(let r=-4;r<=5;r+=1.8){const s=B("悬浮蜡烛",[.08,.5,.08],[n,3.2+(r+4)%3*.3,r],k(16115128));yt.push({object:s,baseY:s.position.y,phase:n+r,spin:0,bob:.08})}}const e=[{id:"lion",symbol:"狮",label:"狮 · 勇气",x:-5.7,color:9184818},{id:"badger",symbol:"獾",label:"獾 · 忠诚",x:-1.9,color:11962927},{id:"eagle",symbol:"鹰",label:"鹰 · 智慧",x:1.9,color:2706554},{id:"snake",symbol:"蛇",label:"蛇 · 野心",x:5.7,color:2579523}];for(const n of e){B(`${n.label}学院旗`,[2.25,3.3,.16],[n.x,4.55,-8.55],k(n.color,{roughness:.9})),ze(n.label,[n.x,4.55,-8.4],{width:2,size:40});const r=B(`${n.label}石徽`,[1.25,1.25,.32],[n.x,1.35,4.2],k(n.color,{emissive:n.color,emissiveIntensity:.12}));r.userData={type:"sorting-clue",symbolId:n.id,label:n.label,selected:!1},Ve.push(r),ze(n.symbol,[n.x,1.35,4],{width:.85,size:74})}B("分院凳",[1.7,.22,1.45],[0,.72,-5.7],i);const t=new oe(new Qt(.62,1.25,10),k(4863268,{roughness:.98}));t.position.set(0,1.45,-5.7),t.rotation.z=-.12,Re.add(t),ze("分院帽",[0,2.55,-5.8],{width:2.2,size:46}),xt([-4.8,4.8,-3],3.2,11),xt([4.8,4.8,-3],3.2,11)}function Qv(){de.color.setHex(8885949),de.groundColor.setHex(1382433),Wt({wall:3883336,floor:2435378,ceiling:1119520,fog:1053725}),Et.fog.density=.019,Gt({index:0,name:"移动楼梯",objectiveText:"目标：依据钟摆与月相路线，依次稳定三座移动楼梯",hint:"路线铭文：从最低的平台起步；月光桥只在钟摆居中时停驻；最后登上最高塔。选错会让路线复位并增加 5 秒惩罚。",progress:"◇  ◇  ◇"}),fn.textContent="第一部 · 第二章 · 第 1 关",I={progress:[],mistakes:0,timePenalty:0,unlocked:!1},Uu();const i=k(5857643,{roughness:.96}),e=k(10390104,{emissive:3221009,emissiveIntensity:.4}),t=[{id:"lower",label:"低塔 · 起点",x:-5.1,z:1.9,height:.3,symbol:"I"},{id:"moon",label:"月光桥 · 居中",x:0,z:-2,height:1,symbol:"☾"},{id:"upper",label:"高塔 · 终点",x:5.1,z:1.9,height:1.7,symbol:"III"}];for(const[s,o]of t.entries()){const a=new Bt;a.position.set(o.x,0,o.z),a.rotation.y=s===1?Math.PI:s===0?-.28:.28,Re.add(a);for(let c=0;c<7;c+=1)B("会移动的石阶",[2.6,.28,.78],[0,.14+c*.27,c*-.7],i,!0,a);B("楼梯平台",[3.2,.3,2.2],[0,2+o.height,-4.6],i,!0,a);const l=B(o.label,[1.25,1.25,.26],[o.x,1.25,o.z+1],e);l.userData={type:"stair-route",stairId:o.id,label:o.label,selected:!1},Ve.push(l),ze(o.symbol,[o.x,1.25,o.z+.84],{width:.8,size:72,color:"#d9c27b"}),yt.push({object:a,baseY:0,phase:s*2.1,spin:0,bob:.16})}for(const s of[-7.1,-3.55,0,3.55,7.1])B("楼梯塔石柱",[.7,6.7,.7],[s,3.35,-7.7],i);for(const[s,o]of[[-6.5,4.8],[-3.2,3.9],[3.1,4.7],[6.4,3.7]])B("会说话的画像",[1.5,2,.18],[s,o,-8.25],k(6965285)),B("画像画布",[1.15,1.62,.1],[s,o,-8.12],k(3752027,{emissive:1515837,emissiveIntensity:.5}));const n=new Bt;n.position.set(0,6.1,-6.8),Re.add(n),B("钟摆杆",[.12,3.4,.12],[0,-1.7,0],e,!0,n);const r=new oe(new tt(.42,16,12),e);r.position.y=-3.4,n.add(r),yt.push({object:n,baseY:6.1,phase:1.2,spin:.12,bob:0}),ze("GRAND STAIRCASE · 月相路线",[0,6.2,-8.35],{width:6.3,size:40}),xt([-5.8,4.8,-2.5],2.5,10),xt([5.8,4.8,-2.5],2.5,10),xt([0,5.5,3.8],2.2,9)}function e_(){de.color.setHex(10192813),de.groundColor.setHex(1774880),Wt({wall:4207940,floor:2366760,ceiling:1314840,fog:1183254}),Et.fog.density=.018,Gt({index:1,name:"会说话的画像",objectiveText:"目标：比较三幅画像的证词，按可信的发言顺序询问口令",hint:"学者说骑士不是第一位；骑士承认学者必须先发言；女士说自己在骑士之后。错误询问会惊动走廊并清空推理。",progress:"▢  ▢  ▢"}),fn.textContent="第一部 · 第二章 · 第 2 关",I={progress:[],mistakes:0,suspicion:0,unlocked:!1},Nu();const i=k(5326680,{roughness:.98}),e=k(9399605,{metalness:.35,roughness:.55});for(const n of[-6,-3,0,3,6])B("画像走廊立柱",[.65,6.5,.65],[n,3.25,-8.45],i);const t=[{id:"scholar",label:"蓝袍学者",quote:"“骑士绝不是第一位；我的月桂框知道开头。”",x:-4.7,color:3166069},{id:"knight",label:"银甲骑士",quote:"“学者必须先发言，女士保管最后一词。”",x:0,color:6975352},{id:"lady",label:"月桂女士",quote:"“我在骑士之后，银钥只为完整证词转动。”",x:4.7,color:7356511}];for(const n of t){B(`${n.label}画框`,[3.15,4.25,.26],[n.x,3.8,-8.42],e);const r=B(n.label,[2.65,3.72,.24],[n.x,3.8,-8.2],k(n.color,{emissive:n.color,emissiveIntensity:.28}));r.userData={type:"portrait-testimony",portraitId:n.id,label:n.label,quote:n.quote,selected:!1},Ve.push(r),ze(n.label,[n.x,6.35,-8.05],{width:2.5,size:42})}B("走廊尽头银钥门",[3.1,5.5,.3],[0,2.75,8.55],k(2433835,{metalness:.5,roughness:.5})),ze("SILVER KEY CORRIDOR",[0,5.9,8.35],{width:5.4,size:38});for(const n of[-6.5,-2.2,2.2,6.5])xt([n,4.6,-2.2],2.2,9)}function t_(){de.color.setHex(7505569),de.groundColor.setHex(1119514),Wt({wall:3423299,floor:2106923,ceiling:1053978,fog:725013}),Et.fog.density=.024,Gt({index:2,name:"管理员的巡夜",objectiveText:"目标：利用盔甲遮挡、猫铃声与暗门，避开管理员的灯光巡查",hint:"巡夜图记：灯光先扫过空盔甲；猫铃能把脚步引向反方向；最后掀开独角兽挂毯。走错会清空路线并提高警戒。",progress:"◇  ◇  ◇"}),fn.textContent="第一部 · 第二章 · 第 3 关",I={progress:[],mistakes:0,alert:0,unlocked:!1},Ou();const i=k(4739674,{roughness:.98}),e=k(9139269,{metalness:.48,roughness:.54});for(const u of[-6.8,-3.4,0,3.4,6.8])B("巡夜拱廊立柱",[.64,6.6,.64],[u,3.3,-8.4],i);for(const u of[-5.8,-2.1,1.6,5.3])B("月光地砖",[14.8,.03,1],[0,.03,u],k(6321546,{emissive:2505037,emissiveIntensity:.32}),!1);const t=new Bt;t.position.set(-5,0,.7),Re.add(t),B("空盔甲底座",[1.55,.3,1.25],[0,.15,0],i,!0,t),B("空盔甲胸甲",[1.05,1.55,.55],[0,1.35,0],e,!0,t);const n=new oe(new tt(.48,12,10),e);n.position.y=2.45,t.add(n);const r=B("空盔甲阴影",[1.8,3.2,.24],[-5,1.6,1.15],k(2436405,{emissive:1515821,emissiveIntensity:.25}));r.userData={type:"patrol-cover",hidingPlaceId:"armor",label:"空盔甲阴影",selected:!1},Ve.push(r),ze("I · 盔甲遮挡",[-5,3.55,1.05],{width:2.4,size:38}),B("猫铃机关台",[1.5,.8,1.5],[0,.4,-1.4],i);const s=new oe(new tt(.48,14,10),k(10122304,{emissive:4796690,emissiveIntensity:.45}));s.position.set(0,1.05,-1.4),s.name="猫铃机关",s.userData={type:"patrol-cover",hidingPlaceId:"cat",label:"猫铃机关",selected:!1},Re.add(s),Ve.push(s),ze("II · 猫铃诱饵",[0,2.2,-1.4],{width:2.5,size:38});const o=B("独角兽暗门挂毯",[3.5,4.7,.22],[5,2.8,-8.15],k(3231074,{emissive:1518908,emissiveIntensity:.35}));o.userData={type:"patrol-cover",hidingPlaceId:"tapestry",label:"独角兽暗门挂毯",selected:!1},Ve.push(o),ze("III · 独角兽挂毯",[5,5.75,-8],{width:3.2,size:38});const a=new Bt;a.position.set(-6.5,2.2,-5.7),Re.add(a);const l=new vi(16766602,3.2,7,2);a.add(l);const c=new oe(new tt(.16,10,8),new ei({color:16763243}));a.add(c),yt.push({object:a,baseY:2.2,phase:.5,spin:.22,bob:.08}),ze("NIGHT PATROL · 保持安静",[0,6.25,-8.35],{width:6,size:39}),xt([-6.8,4.5,5.4],1.5,7),xt([6.8,4.5,5.4],1.5,7)}function n_(){de.color.setHex(6649183),de.groundColor.setHex(1183501),Wt({wall:3487791,floor:2170136,ceiling:1184014,fog:921612}),Et.fog.density=.022,Gt({index:3,name:"三头犬活板门",objectiveText:"目标：按守门生物能接受的层次，奏出完整安眠旋律",hint:"褪色乐谱写着：先让气息像夜风进入梦乡，再让琴弦托住梦境，最后以发条的轻响封住鼾声。错奏会重置旋律并惊醒守卫。",progress:"·  ·  ·"}),fn.textContent="第一部 · 第二章 · 第 4 关",I={progress:[],mistakes:0,wakefulness:0,unlocked:!1},Fu();const i=k(4934206,{roughness:.98}),e=k(3220765,{roughness:1}),t=k(1840401,{roughness:1});for(const o of[-6.4,-3.2,0,3.2,6.4])B("禁区石柱",[.68,6.6,.68],[o,3.3,-8.35],i);const n=new Bt;n.position.set(0,0,-5.6),Re.add(n);const r=new oe(new tt(1.75,16,12),e);r.scale.set(1.65,1.05,.9),r.position.y=2.1,r.castShadow=!0,n.add(r),[-1.35,0,1.35].forEach((o,a)=>{const l=new oe(new tt(.82,14,12),e);l.position.set(o,3.55+(a===1?.25:0),.12),n.add(l);const c=new oe(new tt(.43,12,9),t);c.scale.set(1,.7,.75),c.position.set(o,l.position.y-.18,.72),n.add(c);for(const u of[-.25,.25]){const d=new oe(new tt(.07,8,8),new ei({color:14066493}));d.position.set(o+u,l.position.y+.14,.72),n.add(d)}for(const u of[-.48,.48]){const d=new oe(new Qt(.25,.65,8),e);d.position.set(o+u,l.position.y+.65,.08),n.add(d)}}),yt.push({object:n,baseY:0,phase:.8,spin:.012,bob:.045}),B("活板门边框",[4.8,.18,4.8],[0,.08,-4.9],i,!1),B("活板门",[4.25,.2,4.25],[0,.2,-4.9],k(2299663,{metalness:.12}));const s=[{id:"flute",label:"银木长笛",clue:"I · 夜风之息",x:-4.6,color:11449774},{id:"harp",label:"月弦竖琴",clue:"II · 托梦之弦",x:0,color:10187060},{id:"music-box",label:"星纹音乐盒",clue:"III · 发条封音",x:4.6,color:5859960}];for(const o of s){B(`${o.label}谱架`,[2.25,1,1.7],[o.x,.5,2.3],i);const a=B(o.label,[1.75,.4,1.15],[o.x,1.2,2.3],k(o.color,{emissive:o.color,emissiveIntensity:.28,metalness:.25}));a.userData={type:"lullaby-instrument",instrumentId:o.id,label:o.label,selected:!1},Ve.push(a),ze(o.clue,[o.x,2.15,2.3],{width:2.7,size:36})}ze("FORBIDDEN CORRIDOR · 安眠乐谱",[0,6.2,-8.2],{width:6.3,size:38}),xt([-6.2,4.6,1.2],1.8,8),xt([6.2,4.6,1.2],1.8,8)}function i_(){de.color.setHex(10471392),de.groundColor.setHex(2374701),Wt({wall:5401432,floor:2506540,ceiling:7902886,fog:9417669}),Et.fog.density=.012,Gt({index:0,name:"飞行课遗失物",objectiveText:"目标：借助风向旗判断重量，依次把三件遗失物送入对应的安全轨迹",hint:"风向板写着：最轻的红色织物先借低风归队；有月纹的笔记随后穿过中环；沉重黄铜罗盘最后沿高风落到新生手中。错序会卷起乱流并吹散全部物品。",progress:"○  ○  ○"}),fn.textContent="第一部 · 第三章 · 第 1 关",I={progress:[],mistakes:0,turbulence:0,unlocked:!1},ku();const i=k(3495995,{roughness:1}),e=k(6714219,{roughness:.96}),t=k(10189117,{metalness:.42,roughness:.52});B("飞行训练草坪",[17.6,.18,17.6],[0,.02,0],i,!1);for(const s of[-7.2,-3.6,0,3.6,7.2])B("训练场石柱",[.45,4.8,.45],[s,2.4,-8.35],e);const n=[{id:"scarf-keeper",label:"红色守门员围巾",clue:"I · 低风 · 守门员",x:-4.8,y:1.15,color:10432312},{id:"notebook-scholar",label:"月纹飞行笔记",clue:"II · 中环 · 学者",x:0,y:2.05,color:5072519},{id:"compass-first-year",label:"黄铜航向罗盘",clue:"III · 高风 · 新生",x:4.8,y:2.95,color:10977598}];for(const[s,o]of n.entries()){const a=new oe(new Yt(1.15,.11,10,28),t);a.position.set(o.x,o.y+1.15,-4.6),a.name=`${o.label}安全轨迹环`,Re.add(a);const l=B(o.label,[1.65,.48,.82],[o.x,o.y,1.8],k(o.color,{emissive:o.color,emissiveIntensity:.35}));l.userData={type:"flying-delivery",deliveryId:o.id,label:o.label,selected:!1},Ve.push(l),yt.push({object:l,baseY:o.y,phase:s*1.7,spin:.18,bob:.14}),ze(o.clue,[o.x,5.45,-8.1],{width:3,size:34,color:"#e5d79a"})}const r=new Bt;r.position.set(-6.8,0,5.4),Re.add(r),B("风向旗杆",[.12,5.4,.12],[0,2.7,0],t,!0,r),B("红金风向旗",[2.3,.65,.08],[1.1,4.8,0],k(10958141,{emissive:3477524,emissiveIntensity:.3}),!0,r),yt.push({object:r,baseY:0,phase:.4,spin:.08,bob:0}),ze("FLYING LESSON · 顺风投递",[0,6.2,-8.2],{width:6,size:39}),xt([-5.5,4.2,4.6],1.2,8),xt([5.5,4.2,4.6],1.2,8)}function r_(){de.color.setHex(9217704),de.groundColor.setHex(1517610),Wt({wall:4350052,floor:2373948,ceiling:2308154,fog:1651254}),Et.fog.density=.02,Gt({index:1,name:"巨怪洗手间",objectiveText:"目标：依次稳定漏水、悬浮瓦砾，再放下横梁架出逃生路线",hint:"破裂水管正在冲散落脚点。先转动月纹阀止水，再让碎石升起清出通道，最后才能把高处横梁平稳放到沟渠上。错序会让巨怪逼近并震塌路线。",progress:"◇  ◇  ◇"}),fn.textContent="第一部 · 第三章 · 第 2 关",I={progress:[],mistakes:0,danger:0,unlocked:!1},zu();const i=k(6718599,{roughness:.82}),e=k(3361872,{roughness:.95});B("洗手间湿地砖",[17.6,.18,17.6],[0,.02,0],e,!1);for(const l of[-7.2,-4.8,-2.4,0,2.4,4.8,7.2])B("拱形瓷砖墙柱",[.42,6.4,.5],[l,3.2,-8.35],i);B("溢水沟渠",[15,.08,2.15],[0,.16,-2.6],k(1588555,{emissive:730674,emissiveIntensity:.8}),!1);const t=[{id:"seal-pipe",label:"月纹止水阀",clue:"I · 先止住洪水",x:-4.8,y:1.35,color:5602707},{id:"levitate-rubble",label:"悬浮碎石阵",clue:"II · 再清出通道",x:0,y:1.6,color:7695715},{id:"lower-beam",label:"锁链橡木横梁",clue:"III · 最后架桥",x:4.8,y:2.5,color:8476207}];for(const[l,c]of t.entries()){B(`${c.label}基座`,[2.5,.7,1.8],[c.x,.35,2.6],i);const u=B(c.label,[1.85,.55,1.15],[c.x,c.y,2.6],k(c.color,{emissive:c.color,emissiveIntensity:.32}));u.userData={type:"troll-obstacle",obstacleId:c.id,label:c.label,selected:!1},Ve.push(u),yt.push({object:u,baseY:c.y,phase:l*1.4,spin:.08,bob:.06}),ze(c.clue,[c.x,4.55,-8.05],{width:2.9,size:35,color:"#b9d8d7"})}const n=new Bt;n.position.set(0,0,-6.2),Re.add(n);const r=k(7174246,{roughness:1}),s=new oe(new tt(1.35,14,11),r);s.scale.set(1.25,1.55,.9),s.position.y=2.15,n.add(s);const o=new oe(new tt(.78,12,10),r);o.position.set(0,4.05,.15),n.add(o);const a=B("巨怪木棒",[.48,4.4,.48],[1.5,2.15,0],k(5190689),!0,n);a.rotation.z=-.3,yt.push({object:n,baseY:0,phase:.7,spin:.015,bob:.055}),ze("TROLL WASHROOM · 悬浮逃生",[0,6.2,-8.15],{width:6.2,size:38,color:"#b9d8d7"}),xt([-6.2,4.8,4.5],1.35,8),xt([6.2,4.8,4.5],1.35,8)}function s_(){de.color.setHex(6714779),de.groundColor.setHex(1381149),Wt({wall:3354427,floor:2104100,ceiling:1315098,fog:855060}),Et.fog.density=.024,Gt({index:2,name:"图书馆禁书区",objectiveText:"目标：依据馆藏年代，按从古到今的顺序点亮三本安全书脊",hint:"目录铜牌记载：四学院建校录最古老；龙灾账册写于其后数百年；月蚀纪事刚完成修订。避开锁链缠绕、会尖叫的无年卷。",progress:"▱  ▱  ▱"}),fn.textContent="第一部 · 第三章 · 第 3 关",I={progress:[],mistakes:0,noise:0,unlocked:!1},Bu();const i=k(3023132,{roughness:.92}),e=k(9401668,{metalness:.48,roughness:.5}),t=k(4538699,{roughness:.98});for(const r of[-7.2,-3.6,0,3.6,7.2])B("禁书区拱柱",[.52,6.6,.65],[r,3.3,-8.38],t);for(const r of[-5.8,0,5.8]){B("高层书架",[4.1,5.7,.75],[r,3,-7.9],i);for(const s of[1.25,2.55,3.85,5.15])B("书架横板",[3.8,.13,1.05],[r,s,-7.55],e)}const n=[{id:"founders-index",label:"四学院建校录",clue:"I · 建校之初",x:-5.1,color:8008760},{id:"dragon-ledger",label:"北境龙灾账册",clue:"II · 第七次龙灾",x:-1.7,color:8610107},{id:"moon-chronicle",label:"银月蚀纪事",clue:"III · 本年修订",x:1.7,color:4217722},{id:"screaming-codex",label:"锁链无年卷",clue:"禁 · 年代被抹除",x:5.1,color:4533331}];for(const[r,s]of n.entries()){B(`${s.label}阅览台`,[2.35,.85,1.7],[s.x,.42,2.3],t);const o=B(s.label,[1.45,1.85,.42],[s.x,1.75,2.3],k(s.color,{emissive:s.color,emissiveIntensity:.32}));o.userData={type:"restricted-book",bookId:s.id,label:s.label,selected:!1},Ve.push(o),yt.push({object:o,baseY:1.75,phase:r*1.35,spin:.04,bob:.07}),ze(s.clue,[s.x,3.25,2.3],{width:2.45,size:34,color:"#b9c8ef"})}B("禁书区出口封印",[3.2,5.5,.3],[0,2.75,8.55],k(2499125,{emissive:2370133,emissiveIntensity:.55})),ze("RESTRICTED SECTION · 历史书脊",[0,6.2,-8.15],{width:6.4,size:38,color:"#b9c8ef"}),xt([-6.4,4.7,4.8],1.35,8),xt([6.4,4.7,4.8],1.35,8)}function o_(){de.color.setHex(8885688),de.groundColor.setHex(1578278),Wt({wall:3880268,floor:2170155,ceiling:1512223,fog:1118234}),Et.fog.density=.018,Gt({index:3,name:"厄里斯魔镜",objectiveText:"目标：比较镜中欲望与现实处境，依次选择真正需要的三件物品",hint:"镜中人戴着王冠、捧着奖杯，却在现实的寒风中发抖。先御寒，再为黑暗出口照路；最后记住：能共同离开的人，比独占的荣誉更重要。",progress:"◇  ◇  ◇"}),fn.textContent="第一部 · 第三章 · 第 4 关",I={progress:[],mistakes:0,illusion:0,unlocked:!1},Hu();const i=k(11187398,{metalness:.72,roughness:.24}),e=k(2433335,{roughness:.9});for(const n of[-7.2,-4.8,4.8,7.2])B("镜廊石柱",[.52,6.5,.52],[n,3.25,-8.35],e);B("魔镜银框",[5.7,6.25,.42],[0,3.2,-8.42],i),B("魔镜镜面",[4.75,5.35,.18],[0,3.15,-8.12],k(7373478,{emissive:3754096,emissiveIntensity:.9,metalness:.82,roughness:.16}),!1),ze("镜中所见 ≠ 现实所需",[0,6.35,-8.02],{width:5.5,size:38,color:"#d9ddf2"});const t=[{id:"wool-cloak",label:"旧羊毛斗篷",clue:"I · 现实：寒风",x:-6.1,color:7558730},{id:"brass-lantern",label:"黄铜提灯",clue:"II · 现实：暗路",x:-3.05,color:10779189},{id:"shared-token",label:"同伴木牌",clue:"III · 现实：同行",x:0,color:5207647},{id:"jeweled-crown",label:"镜中宝冠",clue:"欲望 · 独占荣耀",x:3.05,color:9254493},{id:"victory-cup",label:"镜中金杯",clue:"欲望 · 空洞胜利",x:6.1,color:9333553}];for(const[n,r]of t.entries()){B(`${r.label}石台`,[2.45,.8,1.7],[r.x,.4,2.5],e);const s=B(r.label,[1.45,1.05,.8],[r.x,1.45,2.5],k(r.color,{emissive:r.color,emissiveIntensity:.34,metalness:r.id.includes("crown")||r.id.includes("cup")?.45:.08}));s.userData={type:"mirror-choice",itemId:r.id,label:r.label,selected:!1},Ve.push(s),yt.push({object:s,baseY:1.45,phase:n*1.1,spin:.06,bob:.06}),ze(r.clue,[r.x,3,2.5],{width:2.45,size:31,color:"#d9ddf2"})}xt([-6.4,4.8,4.7],1.25,8),xt([6.4,4.8,4.7],1.25,8)}function a_(i,e){const t=i.points.map(l=>new P(...l)),n=new mu(t),r=k(i.layer==="exit"?3234356:2573613,{emissive:1390879,emissiveIntensity:i.layer==="exit"?.58:.36,roughness:.94}),s=new oe(new tl(n,28,i.radius,9,!1),r);s.name=i.id,s.castShadow=!0,s.receiveShadow=!0,Re.add(s);const o=k(5078341,{emissive:1919014,emissiveIntensity:.4,roughness:.9});for(let l=0;l<i.leaves;l+=1){const c=(l+1)/(i.leaves+1),u=new oe(new tt(.18,10,7),o);u.name=`${i.id}-leaf`,u.scale.set(1.65,.32,.72),u.position.copy(n.getPoint(c)),u.rotation.set(e*.31,l*1.7,e%2?.55:-.55),u.castShadow=!0,Re.add(u)}const a=k(7304513,{roughness:.82});for(let l=0;l<i.thorns;l+=1){const c=(l+1)/(i.thorns+1),u=new oe(new Qt(.07,.34,7),a);u.name=`${i.id}-thorn`,u.position.copy(n.getPoint(c)).add(new P(.1,.05,0)),u.rotation.z=e%2?1.05:-1.05,Re.add(u)}yt.push({object:s,baseY:0,phase:e*.43,spin:0,bob:.012})}function l_(i){const e=new oe(new tt(.34,18,14),k(i.color,{emissive:i.color,emissiveIntensity:.5,transparent:!0,opacity:.92}));e.name=i.label;const t=new vu({color:i.model.flameColor??i.model.breathColor,emissive:i.model.flameColor??i.model.breathColor,emissiveIntensity:1.45,roughness:.28,transparent:!0,opacity:.9});if(i.model.kind==="breath-orb")for(let n=0;n<i.model.rings;n+=1){const r=new oe(new Yt(.48+n*.16,.025,8,28),t);r.rotation.set(Math.PI/2,n*.45,n*.32),e.add(r)}else if(i.model.kind==="bluebell-flame"){for(let r=0;r<i.model.petals;r+=1){const s=r/i.model.petals*Math.PI*2,o=new oe(new tt(.22,12,8),t);o.scale.set(.55,1.45,.42),o.position.set(Math.cos(s)*.34,-.12,Math.sin(s)*.34),o.rotation.z=Math.cos(s)*.5,e.add(o)}const n=new oe(new Qt(.25,.82,14),t);n.position.y=.56,e.add(n)}else if(i.model.kind==="steady-lantern"){const n=k(5468288,{metalness:.65,roughness:.35});for(const r of[-.42,.42])for(const s of[-.3,.3])B("恒光灯框",[.07,1.15,.07],[r,0,s],n,!0,e);for(let r=0;r<i.model.pulses;r+=1){const s=new oe(new Yt(.28+r*.12,.035,8,24),t);s.rotation.x=Math.PI/2,s.position.y=-.2+r*.3,e.add(s)}}else for(let n=0;n<i.model.flameCount;n+=1){const r=n/i.model.flameCount*Math.PI*2,s=new oe(new Qt(.16,.82+n%2*.3,9),t);s.position.set(Math.cos(r)*.48,.25+n%2*.18,Math.sin(r)*.48),s.rotation.z=Math.cos(r)*.75,s.rotation.x=Math.sin(r)*.75,e.add(s)}return e}function c_(){de.color.setHex(7179368),de.groundColor.setHex(1317653),Wt({wall:2701100,floor:1516313,ceiling:1120273,fog:857615}),Et.fog.density=.024,Gt({index:0,name:"魔鬼网",objectiveText:"目标：保持镇静，按正确节奏控制蓝铃火焰，让藤蔓松开地下出口",hint:"挣扎会让藤蔓收紧。先放松摆脱缠绕，再点燃冷焰，最后维持稳定光照；猛烈爆燃只会惊动整片根网。",progress:"○  ○  ○"}),I={progress:[],mistakes:0,constriction:0,unlocked:!1},Vu(),B("根网出口",[5,.24,4.5],[0,.06,-2.1],k(461832,{emissive:1524519,emissiveIntensity:.7,roughness:1}),!1);const i=k(5398605,{roughness:.98});for(let t=0;t<18;t+=1){const n=t/18*Math.PI*2,r=B("破裂出口石环",[.62,.32,.76],[Math.cos(n)*2.55,.16,-2.1+Math.sin(n)*2.3],i);r.rotation.y=-n,r.rotation.z=(t%3-1)*.12}Cv.forEach(a_);for(const[t,n]of Rv.entries()){const r=new oe(new ot(1.05,1.22,.62,10),k(2502951,{roughness:.96}));r.name=`${n.label}石台`,r.position.set(n.x,.31,3.6),r.castShadow=!0,r.receiveShadow=!0,Re.add(r);const s=l_(n);s.position.set(n.x,1.5,3.6),s.userData={type:"devils-snare-action",actionId:n.id,label:n.label,selected:!1},Re.add(s),Ve.push(s),yt.push({object:s,baseY:1.5,phase:t*1.2,spin:.07,bob:.06}),ze(n.clue,[n.x,2.85,3.6],{width:1.9,size:27,color:"#b9e2c0"})}ze(Ru.wallClue,[0,6.05,-8.1],{width:7.2,size:34,color:"#b9e2c0"});const e=new vi(7321343,3.2,12,2);e.position.set(0,4.5,1.2),e.castShadow=!0,Re.add(e)}function u_(i){const{model:e}=i,t=k(i.color,{emissive:i.color,emissiveIntensity:.48,metalness:.82,roughness:e.metal==="gold"?.2:.3}),n=new ot(.105,.105,e.shaftLength,14);n.rotateZ(Math.PI/2);const r=new oe(n,t);r.name=i.label,r.castShadow=!0;const s=new oe(new Yt(e.bowRadius,.105,10,28),t);s.name=`${i.label}钥匙环`,s.position.x=-(e.shaftLength/2+e.bowRadius*.72),s.rotation.z=-Math.PI/2,r.add(s);const o=t.clone();for(let l=0;l<e.teeth;l+=1){const c=new oe(new Jt(.16,.22+l*.035,.12),o);c.name=`${i.label}锁齿`,c.position.set(e.shaftLength/2-l*.16,-.14-l*.025,0),r.add(c)}const a=k(11454952,{emissive:4349826,emissiveIntensity:.42,transparent:!0,opacity:.86,roughness:.5,side:En});for(const l of e.wings){const c=l.side==="left"?-1:1,u=new Bt;u.name=`${i.label}${l.side==="left"?"左翼":"右翼"}`,u.position.set(c*.22,.04,0),u.rotation.z=l.bend;for(let d=0;d<l.feathers;d+=1){const f=new oe(new tt(.24,12,8),a);f.name=`${u.name}羽片`,f.scale.set(1.5-d*.12,.34,.18),f.position.set(c*(.22+d*.16),.3+d*.12,0),f.rotation.z=c*(.42+d*.09),u.add(f)}r.add(u)}if(e.metal==="gold")for(let l=0;l<6;l+=1){const c=new oe(new tt(.055,10,8),k(14241123,{emissive:61e5,emissiveIntensity:.7,metalness:.35,roughness:.25})),u=l/6*Math.PI*2;c.position.set(s.position.x+Math.cos(u)*e.bowRadius,Math.sin(u)*e.bowRadius,.08),r.add(c)}return r}function d_(i){const e=k(7907552,{emissive:3234706,emissiveIntensity:1.1});for(let t=0;t<i.evidence.orbitMarkers;t+=1){const n=-t*.72,r=new oe(new tt(.075+t*.008,10,8),e);r.name="顺时针下沉轨迹标记",r.position.set(i.x+Math.cos(n)*(.85-t*.04),2.28-t*.12,i.display.z+Math.sin(n)*.48),Re.add(r)}}function h_(){de.color.setHex(8558262),de.groundColor.setHex(1514283),Wt({wall:3556189,floor:2107450,ceiling:1251367,fog:1120038}),Et.fog.density=.021,Gt({index:1,name:"飞钥匙房",objectiveText:"目标：依次确认翅膀损伤、飞行轨迹和锁孔材质，锁定唯一真钥匙",hint:"门锁留下银屑；真正用过的钥匙左翼弯折，负重后会沿顺时针轨迹下沉。先观察损伤，再追踪轨迹，最后核对银色钥匙。",progress:"◇  ◇  ◇"}),fn.textContent=Ee("hud.roomKicker",{book:1,chapter:4,room:2}),I={progress:[],mistakes:0,pursuit:0,unlocked:!1},Gu();const i=k(6582925,{metalness:.32,roughness:.66});for(const n of[-7.2,-4.8,4.8,7.2])B("钥匙厅高柱",[.55,6.4,.55],[n,3.2,-8.3],i);B("银屑锁门",[4.1,5.4,.3],[0,2.7,-8.45],k(3160138,{metalness:.62,roughness:.35}));const e=k(14280946,{emissive:6256784,emissiveIntensity:.9,metalness:.9,roughness:.22});for(let n=0;n<12;n+=1){const r=new oe(new Gr(.035+n%3*.012),e);r.name="锁孔银屑",r.position.set(-.22+n%4*.13,2.2+Math.floor(n/4)*.11,-8.22),r.rotation.set(n*.3,n*.5,0),Re.add(r)}ze(Cu.wallClue,[0,6.15,-8.05],{width:7.4,size:32,color:"#c9dcff"});for(const[n,r]of Av.entries()){B(`${r.label}观察台`,[2.55,.65,1.55],[r.x,.33,r.display.z],k(2699847));const s=u_(r);s.position.set(r.x,1.75,r.display.z),s.rotation.x=-.16,Re.add(s),r.evidence.motion==="clockwise-descending"&&d_(r),s.userData={type:"flying-key-clue",clueId:r.id,label:r.label,selected:!1},Ve.push(s),yt.push({object:s,baseY:1.75,phase:n*1.35,spin:.1,bob:.18}),ze(r.clue,[r.x,3.05,r.display.z],{width:2.45,size:28,color:"#c9dcff"})}const t=new vi(9091327,3.1,13,2);t.position.set(0,5.7,1.2),Re.add(t)}function Wo(i,e){const t=new oe(new ot(.56,.66,.24,16),e);t.position.y=.12,t.castShadow=!0,t.receiveShadow=!0;const n=(r,s,o=[0,0,0])=>{const a=new oe(r,e);return a.position.set(...s),a.rotation.set(...o),a.castShadow=!0,a.receiveShadow=!0,t.add(a),a};if(n(new ot(.45,.53,.18,16),[0,.23,0]),i.piece==="pawn")n(new ot(.25,.42,.72,14),[0,.65,0]),n(new Yt(.29,.07,8,16),[0,1.02,0],[Math.PI/2,0,0]),n(new tt(i.headRadius??.24,16,10),[0,1.25,0]);else if(i.piece==="rook"){n(new ot(.37,.46,.88,12),[0,.72,0]),n(new ot(.52,.39,.28,12),[0,1.28,0]);const r=i.battlements??6;for(let s=0;s<r;s+=1){const o=s/r*Math.PI*2;n(new Jt(.2,.3,.22),[Math.sin(o)*.38,1.55,Math.cos(o)*.38],[0,o,0])}}else if(i.piece==="knight"){n(new ot(.28,.45,.62,12),[0,.58,0]),n(new Di(.29,.65,5,10),[-.08,1.08,0],[0,0,-.38]),n(new Jt(.62,.38,.46),[.25,1.43,0],[0,0,-.12]),n(new Jt(.42,.2,.38),[.65,1.32,0],[0,0,-.08]);for(const s of[-.14,.14])n(new Qt(.11,.34,8),[.08,1.78,s],[0,0,-.18]);const r=i.maneRidges??4;for(let s=0;s<r;s+=1)n(new Qt(.1,.32,6),[-.35+s*.08,1.5-s*.18,0],[0,0,-1.15])}else if(n(new ot(.27,.45,.86,14),[0,.7,0]),n(new Yt(.32,.07,8,18),[0,1.13,0],[Math.PI/2,0,0]),i.piece==="bishop")n(new tt(.27,14,10),[0,1.4,0]),n(new Qt(.19,.48,12),[0,1.74,0]);else if(i.piece==="queen"){n(new tt(.24,14,10),[0,1.38,0]);const r=i.crownSpikes??6;for(let s=0;s<r;s+=1){const o=s/r*Math.PI*2;n(new Qt(.09,.38,7),[Math.sin(o)*.27,1.72,Math.cos(o)*.27])}n(new tt(.11,10,8),[0,1.94,0])}else n(new tt(.25,14,10),[0,1.39,0]),n(new Jt(.13,.58,.13),[0,1.84,0]),n(new Jt(.48,.13,.13),[0,1.9,0]);return t.scale.setScalar((i.height??1.75)/1.75),t}function f_(){de.color.setHex(10132646),de.groundColor.setHex(1513243),Wt({wall:4013379,floor:2105381,ceiling:1381658,fog:1052692}),Et.fog.density=.018,Zt&&(Ft.position.z=Rt.mobileCameraZ),Gt({index:2,name:"巫师棋",objectiveText:"目标：用最少牺牲打开通往对岸的安全棋路",hint:"黑后封锁中央。先用边兵引开主教，再让骑士双攻国王与城堡，最后直车沿空出的纵线推进；贸然冲后会让已投入的棋子全部被吃。",progress:"◇  ◇  ◇"}),I={progress:[],mistakes:0,captured:0,unlocked:!1},Wu();const i=k(12170666,{roughness:.78}),e=k(2697777,{roughness:.86}),t=k(5592671,{roughness:.96});for(let r=0;r<8;r+=1)for(let s=0;s<8;s+=1)B("巫师棋盘格",[Rt.cellSize,.16,Rt.cellSize],[Rt.boardStartX+s*Rt.cellSize,.05,Rt.boardStartZ+r*Rt.cellSize],(r+s)%2?e:i,!1);const n=["rook","knight","bishop","queen","king","bishop","knight","rook"];for(const[r,s,o]of[[0,"黑方",e],[7,"白方",i]]){for(let l=0;l<8;l+=1){const c=Wo({piece:n[l],height:1.7},o);c.name=`${s}${n[l]}巨型棋子`,c.position.set(Rt.boardStartX+l*Rt.cellSize,.18,Rt.boardStartZ+r*Rt.cellSize),Re.add(c),yt.push({object:c,baseY:.18,phase:l*.55,spin:0,bob:.025})}const a=r===0?1:6;for(let l=0;l<8;l+=1){const c=Wo({piece:"pawn",height:1.48,headRadius:.22},o);c.name=`${s}巨型兵`,c.position.set(Rt.boardStartX+l*Rt.cellSize,.18,Rt.boardStartZ+a*Rt.cellSize),Re.add(c)}}for(const[r,s]of Iv.entries()){const o=Zt?s.mobileDisplay:{x:s.x,z:s.display.z,scale:1,plaqueWidth:2.05};B(`${s.label}棋钟台`,[o.plaqueWidth,.65,1.55],[o.x,.33,o.z],t);const a=Wo(s.model,k(s.color,{emissive:s.color,emissiveIntensity:.36,metalness:.12,roughness:.72}));a.name=s.label,a.scale.multiplyScalar(o.scale),a.position.set(o.x,.58,o.z),Re.add(a),a.userData={type:"wizard-chess-move",moveId:s.id,label:s.label,selected:!1},Ve.push(a),yt.push({object:a,baseY:.58,phase:r*1.25,spin:.025,bob:.055}),ze(s.clue,[o.x,.48,o.z+.82],{width:o.plaqueWidth-.05,size:Zt?21:27,color:"#e1dfd5"})}ze(Iu.wallClue,[0,6.15,-8.15],{width:7.5,size:Zt?Rt.mobileWallLabelSize:31,color:"#e1dfd5"}),xt([-6.2,4.8,5.5],1.5,8),xt([6.2,4.8,5.5],1.5,8)}function $u(i,e=1){const t=k(i.color,{emissive:i.color,emissiveIntensity:.48,metalness:.46,roughness:.28}),n=new oe(new ot(.4,.48,.16,16),t);n.castShadow=!0;const r=k(13223132,{transparent:!0,opacity:.52,metalness:.22,roughness:.12}),s=k(2364975,{emissive:5973880,emissiveIntensity:1.8,transparent:!0,opacity:.88}),o=new oe(new ot(.26,.38,.64,14),r);o.position.y=.48,n.add(o);const a=new oe(new ot(.22,.34,.36,14),s);a.position.y=.36,n.add(a);const l=new oe(new ot(.13,.18,.3,12),r);l.position.y=.92,n.add(l);const c=new oe(new ot(.16,.14,.18,10),k(11052466,{metalness:.78,roughness:.3}));return c.position.y=1.12,n.add(c),n.scale.setScalar(e),n}function p_(i){const e=k(i.color,{emissive:i.color,emissiveIntensity:.4,roughness:.56}),t=new oe(new ot(.54,.64,.2,16),e);t.castShadow=!0;const n=k(11904399,{roughness:.72}),r=k(7440040,{emissive:2570581,emissiveIntensity:.75,metalness:.46,roughness:.18}),s=k(13214043,{emissive:16761948,emissiveIntensity:1.65,metalness:.34,roughness:.24}),o=(a,l,c=n,u=[0,0,0])=>{const d=new oe(a,c);return d.position.set(...l),d.rotation.set(...u),d.castShadow=!0,t.add(d),d};if(i.model.kind==="mirror-figure"){o(new Jt(1.28,1.8,.12),[0,1.15,-.18],r),o(new tt(.25,14,10),[0,1.72,.02]),o(new Qt(.54,1.16,12),[0,.85,.02]);const a=o(new Jt(.5,.38,.08),[.24,.86,.5],k(13811855,{emissive:6115631,emissiveIntensity:.65}));a.rotation.z=-.08,o(new Jt(.32,.18,.08),[.24,.9,.56],k(1512476))}else if(i.model.kind==="protective-hands"){for(const a of[-1,1]){o(new Di(.2,.62,5,10),[a*.56,.82,0],n,[0,0,a*.62]);for(let l=0;l<4;l+=1)o(new Di(.065,.38+l*.025,4,8),[a*(.28+l*.1),1.34+l*.04,0],n,[0,0,a*(.2+l*.07)])}o(new Gr(.34,1),[0,1.2,-.48],s),o(new Yt(.7,.055,8,28),[0,1.15,-.3],k(14204787,{emissive:10254633,emissiveIntensity:1.2}),[Math.PI/2,0,0])}else{o(new Di(.24,.72,6,12),[0,.78,0],n,[0,0,-.28]);for(let a=0;a<5;a+=1){const l=-.9+a*.45;o(new Di(.075,.46,4,8),[Math.sin(l)*.35,1.25+Math.cos(l)*.18,0],n,[0,0,l])}o(new Gr(.31,1),[.1,1.18,.02],k(10824506,{emissive:16719927,emissiveIntensity:2}));for(let a=0;a<5;a+=1)o(new Jt(.035,.62,.04),[-.35+a*.17,.64+a*.12,.27],k(15019589,{emissive:16717359,emissiveIntensity:2.2}),[0,0,-.5+a*.22])}return t}function m_(i){return i.model.kind==="potion-bottle"?$u(i,1.38):p_(i)}function g_(){de.color.setHex(10258354),de.groundColor.setHex(1380635),Wt({wall:3879237,floor:2169640,ceiling:1380379,fog:854290}),Et.fog.density=.019,Gt({index:3,name:"魔法石密室",objectiveText:"目标：穿过黑焰，解读镜像，并证明你只想保护魔法石",hint:"七瓶药剂中，最小的瓶子可穿过黑焰。镜中真正的守护者口袋仍空着；想夺取魔法石的手只会触发密室腐化。",progress:"◇  ◇  ◇"}),fn.textContent=Ee("hud.roomKicker",{book:1,chapter:4,room:4}),I={progress:[],mistakes:0,corruption:0,unlocked:!1},Xu();const i=k(2827314,{roughness:.9}),e=k(11110734,{metalness:.62,roughness:.36});Zt&&(Ft.position.z=_n.mobileCameraZ),B("厄里斯镜面",[4.5,4.55,.18],[0,2.85,-8.1],k(6839426,{emissive:3747160,emissiveIntensity:.95,metalness:.76,roughness:.18}),!1);for(const o of[-2.55,2.55])B("厄里斯镜金柱",[.46,4.75,.42],[o,2.6,-8],e);const t=new oe(new Yt(2.55,.24,12,36,Math.PI),e);t.rotation.z=Math.PI,t.position.set(0,4.95,-8),Re.add(t);for(const o of[-2.85,2.85])for(const a of[1.2,2.35,3.5]){const l=new oe(new el(.14,.045,32,6),e);l.position.set(o,a,-7.88),l.scale.set(1,1.5,.45),Re.add(l)}for(const o of[-7.2,-5,5,7.2])B("密室黑石柱",[.62,6.4,.62],[o,3.2,-8.25],i);const n=[1.18,.96,1.42,.58,1.06,1.3,.88];for(let o=0;o<_n.potionRow.count;o+=1){const a={color:o===_n.potionRow.smallestIndex?10127805:7627346},l=$u(a,n[o]);l.name=o===_n.potionRow.smallestIndex?"七瓶中最小的银瓶":"药剂逻辑候选瓶",l.position.set(-3.6+o*1.2,2.42,_n.potionRow.z),Re.add(l)}B("七瓶药剂长桌",[9.3,.42,1.35],[0,2.28,_n.potionRow.z],i);const r=k(591630,{emissive:2692155,emissiveIntensity:1.8,transparent:!0,opacity:.94});for(let o=0;o<_n.blackFlame.columns;o+=1){const a=new oe(new Qt(.48+o%2*.12,_n.blackFlame.height-o%3*.22,8),r);a.name="黑焰药剂屏障",a.position.set(-5.5+o*1.1,1.25,_n.blackFlame.z),a.rotation.z=o%2?.1:-.1,Re.add(a),yt.push({object:a,baseY:1.25,phase:o*.6,spin:.16,bob:.12})}for(const[o,a]of Pv.entries()){const l=Zt?a.mobileDisplay:a.display;B(`${a.label}石台`,[l.plaqueWidth??2.05,.65,1.45],[l.x,.33,l.z],i);const c=m_(a);c.name=a.label,c.position.set(l.x,.62,l.z),c.scale.multiplyScalar(l.scale??1),Re.add(c),c.userData={type:"stone-chamber-clue",clueId:a.id,label:a.label,selected:!1},Ve.push(c),yt.push({object:c,baseY:.62,phase:o*1.2,spin:.035,bob:.055}),ze(a.clue,[l.x,.58,l.z],{width:Math.min(l.plaqueWidth??2.05,1.9),size:Zt?20:28,color:"#dfcef2"})}ze(Ua.wallClue,[0,6.72,-8.05],{width:Zt?_n.mobileWallLabelWidth:7.4,size:Zt?_n.mobileWallLabelSize:30,color:"#dfcef2"}),ze(Ua.mirrorInscription,[0,6.08,-8.02],{width:Zt?2.8:4.6,size:Zt?17:24,color:"#d9bd78"});const s=new vi(13016319,3,12,2);s.position.set(0,5.5,.5),Re.add(s)}function v_(){de.color.setHex(8494477),de.groundColor.setHex(1121048),Wt({wall:3426111,floor:1911076,ceiling:1581598,fog:725776}),Et.fog.density=.024,Gt({index:0,name:"精灵的封锁",objectiveText:"目标：循魔力残痕解除住宅中的三重封锁，赶往国王十字车站",hint:"绿色干扰从邮槽进入，绕过悬浮蛋糕，最后汇入壁炉封印。错碰尖叫灯会让封锁重新闭合。",progress:"◇  ◇  ◇"}),fn.textContent="第二部 · 第一章 · 第 1 关",I={progress:[],mistakes:0,interference:0,unlocked:!1},qu();const i=k(2704955,{roughness:.86}),e=k(9861959,{metalness:.52,roughness:.42});B("住宅楼梯平台",[3.1,.35,4.8],[-6.8,.18,-3],i);for(let u=0;u<7;u+=1)B("封锁楼梯踏板",[2.5,.28,.72],[-6.8,.35+u*.3,-.8-u*.58],i);B("封死的住宅正门",[3.2,5.1,.28],[0,2.55,-8.45],i),B("黄铜门链",[3.6,.18,.18],[0,3,-8.18],e),B("壁炉背墙",[4.3,4.5,.5],[5.7,2.25,-7.9],k(2634542)),B("壁炉冷焰",[2.4,2.1,.35],[5.7,1.05,-7.55],k(2518871,{emissive:1530951,emissiveIntensity:1.15}));const t=k(4573312,{emissive:1874781,emissiveIntensity:1.35,roughness:.3}),n=k(2696996,{roughness:.96}),r=k(8410245,{roughness:.48}),s=k(14470051,{roughness:.92}),o=k(2500393,{metalness:.64,roughness:.56}),a=k(12006717,{emissive:15017525,emissiveIntensity:1.4}),l=(u,d,f,p,g)=>{const x=new oe(u,d);return x.name=g,x.position.set(...f),x.castShadow=!0,p.add(x),x};for(const[u,d]of Dv.entries()){const[f,,p]=d.position;B(`${d.label}底座`,[2.65,.48,1.55],[f,.24,p],i);const g=new Bt;g.position.set(f,.56,p),Re.add(g);let x;if(d.id==="jammed-post"){B("深绿正门切片",[2.15,2,.24],[0,1,0],i,!0,g),x=B(d.label,[1.5,.42,.16],[0,1.22,.2],e,!0,g),x.rotation.x=-.28,B("被夹裂的象牙信封",[1.02,.48,.06],[.2,.86,.31],s,!0,g).rotation.z=-.14;for(const m of[-.52,-.22,.1,.4])l(new tt(.055,8,6),t,[m,.62-Math.abs(m)*.12,.4],g,"邮槽绿色粉尘")}else if(d.id==="levitating-cake"){l(new ot(.9,.95,.12,24),k(15261906,{roughness:.3}),[0,.24,0],g,"白瓷蛋糕盘"),x=l(new ot(.72,.78,.62,24),r,[0,.62,0],g,d.label),l(new ot(.48,.58,.48,24),k(13804637),[0,1.12,0],g,"金色双层蛋糕芯"),l(new Yt(.86,.045,8,30),t,[0,.7,0],g,"绕行魔力丝线").rotation.x=Math.PI/2;for(const m of[0,2.1,4.2]){const h=l(new tt(.09,8,6),k(11109309),[Math.cos(m)*.34,1.39,Math.sin(m)*.34],g,"糖渍紫罗兰");h.scale.y=.35}}else if(d.id==="sealed-floo"){B("积灰壁炉主体",[2.2,1.85,.46],[0,.94,0],n,!0,g),B("飞路炉冷绿炉膛",[1.4,1.18,.18],[0,.64,.32],t,!0,g),x=l(new Yt(.72,.08,10,28),e,[0,.88,.48],g,d.label);for(const m of[.48,.25])l(new Yt(m,.055,9,28),t,[0,.88,.5],g,"飞路炉封印环");B("壁炉石楣",[2.55,.28,.72],[0,1.88,0],n,!0,g)}else{x=l(new ot(.55,.72,.9,12),k(6768464,{transparent:!0,opacity:.72,emissive:7280675,emissiveIntensity:.5}),[0,.92,0],g,d.label),l(new Yt(.72,.07,8,20),o,[0,1.25,0],g,"油灯环形提手").rotation.x=Math.PI/2,l(new Qt(.42,.85,10),a,[0,.88,.02],g,"嘴形尖叫红焰").rotation.z=Math.PI,B("油灯玻璃裂口",[.06,.78,.05],[.2,.96,.42],a,!1,g).rotation.z=.42;const m=l(new Yt(.9,.035,7,20,Math.PI*1.35),a,[0,.3,0],g,"红色报警回路线");m.rotation.x=Math.PI/2}g.userData={type:"elf-blockade-trace",objectId:d.id,label:d.label,selected:!1},g.material=x.material,Ve.push(g),yt.push({object:g,baseY:.56,phase:u*1.15,spin:.015,bob:.045}),ze(d.clue,[f,2.72,p],{width:Zt?sr.mobileClueWidth:sr.desktopClueWidth,size:Zt?sr.mobileClueFontSize:sr.desktopClueFontSize,color:"#b9ddc8"})}ze(Pu.wallClue,[0,6.1,-8.05],{width:Zt?sr.mobileWallWidth:6.8,size:Zt?sr.mobileWallFontSize:35,color:"#b9ddc8"});const c=new vi(6476957,2.8,13,2);c.position.set(0,5.4,1.2),Re.add(c),xt([-6.4,4.8,5.8],1.4,7)}function __(){de.color.setHex(7440544),de.groundColor.setHex(1120547),Wt({wall:2504260,floor:1515819,ceiling:1450545,fog:659737}),Et.fog.density=.021,Gt({index:1,name:"飞车失控",objectiveText:"目标：在撞上高架桥前依次稳定配重、航向与油门",hint:"后备箱先把车头拉高；红色铁路信号给出航向；发动机过热时只能脉冲给油。猛踩油门会让飞车再次翻滚。",progress:"◇  ◇  ◇"}),fn.textContent="第二部 · 第一章 · 第 2 关",I={progress:[],mistakes:0,turbulence:0,unlocked:!1},Yu();const i=k(4809844,{metalness:.62,roughness:.34}),e=k(3764618,{metalness:.5,roughness:.3,emissive:1060668,emissiveIntensity:.5}),t=k(8631494,{metalness:.35,roughness:.16,transparent:!0,opacity:.72});B("飞车车身",[6.4,1.2,3.2],[0,1.35,-1.8],e),B("飞车车顶",[3.7,1.25,2.75],[-.5,2.55,-1.8],e),B("飞车前窗",[.14,1,2.25],[1.38,2.55,-1.8],t,!1),B("方向盘",[.18,.9,.9],[1,2.05,-.9],i);for(const s of[-2.15,2.15])for(const o of[-3.15,-.45]){const a=new oe(new ot(.58,.58,.34,20),k(1118998));a.rotation.x=Math.PI/2,a.position.set(s,.75,o),Re.add(a)}for(let s=0;s<7;s+=1)B("悬空铁路枕木",[7.8,.16,.46],[0,.35,-7.7+s*2.4],k(5325617));B("左铁轨",[.16,.18,17],[-2.35,.55,0],i),B("右铁轨",[.16,.18,17],[2.35,.55,0],i),B("远方列车红灯",[.55,.55,.22],[0,3.6,-8.55],k(14108479,{emissive:16720925,emissiveIntensity:2.4}));const n=[{id:"balance-luggage",label:"后移行李配重",clue:"I · 抬高车头",x:-6,color:9138254},{id:"align-railway",label:"对准红色铁路灯",clue:"II · 修正航向",x:-2,color:5341075},{id:"pulse-throttle",label:"短促脉冲油门",clue:"III · 冷却加速",x:2,color:6720098},{id:"floor-throttle",label:"一脚踩死油门",clue:"诱饵 · 引擎过热",x:6,color:10305865}];for(const[s,o]of n.entries()){B(`${o.label}仪表台`,[2.7,.72,1.55],[o.x,.36,5],i);const a=B(o.label,[1.28,1.32,.72],[o.x,1.42,5],k(o.color,{emissive:o.color,emissiveIntensity:.4}));a.userData={type:"flying-car-control",controlId:o.id,label:o.label,selected:!1},Ve.push(a),yt.push({object:a,baseY:1.42,phase:s*1.1,spin:.045,bob:.065}),ze(o.clue,[o.x,2.95,5],{width:2.7,size:30,color:"#b9d9e8"})}ze("FLYING CAR · 在铁路上空恢复控制",[0,6.15,-8.05],{width:6.8,size:35,color:"#b9d9e8"});const r=new vi(9423359,3,14,2);r.position.set(0,5.6,1),Re.add(r)}function x_(){de.color.setHex(8228772),de.groundColor.setHex(1515544),Wt({wall:2570285,floor:1714976,ceiling:1582365,fog:726288}),Et.fog.density=.024,Gt({index:2,name:"打人柳下",objectiveText:"目标：读懂枝条的高扫、低返与露根间隙，安全抵达树洞",hint:"粗枝先从头顶横扫；回摆会贴近地面。只有第二次攻击收势后，发光树根之间才会短暂露出通道。",progress:"◇  ◇  ◇"}),fn.textContent="第二部 · 第一章 · 第 3 关",I={progress:[],mistakes:0,bruises:0,unlocked:!1},ju();const i=k(5060648,{roughness:1}),e=k(6832941,{roughness:.9,emissive:2953992,emissiveIntensity:.35}),t=k(3691067,{roughness:1}),n=new oe(new ot(1.7,2.35,6.8,14),i);n.position.set(0,3.4,-5.2),n.castShadow=!0,Re.add(n);for(const[o,a]of[-1,-.45,.35,.95].entries()){const l=new oe(new ot(.24,.52,7.2,9),e);l.rotation.z=a,l.rotation.x=o%2?.5:-.4,l.position.set(Math.sin(a)*2.7,5.4,-4.8+o*.25),Re.add(l),yt.push({object:l,baseY:l.position.y,phase:o*1.4,spin:.025,bob:.12})}for(const o of[-3.8,-2,0,2,3.8]){const a=new oe(new ot(.18,.48,4.2,8),t);a.rotation.z=Math.PI/2,a.rotation.y=o*.12,a.position.set(o,.35,-4.2+Math.abs(o)*.25),Re.add(a)}B("树洞阴影",[1.7,2.4,.22],[0,1.25,-6.8],k(526856,{emissive:1585695,emissiveIntensity:.5}));const r=[{id:"wait-high-swing",label:"等待高枝扫过",clue:"I · 风声在头顶",x:-6,color:5797258},{id:"duck-low-return",label:"俯身避开低返",clue:"II · 落叶贴地",x:-2,color:7045461},{id:"dash-root-gap",label:"冲过露根间隙",clue:"III · 树洞显露",x:2,color:9598019},{id:"run-before-swing",label:"立刻直冲树洞",clue:"诱饵 · 粗枝蓄力",x:6,color:10109249}];for(const[o,a]of r.entries()){B(`${a.label}石台`,[2.65,.64,1.5],[a.x,.32,4.8],t);const l=B(a.label,[1.24,1.28,.7],[a.x,1.38,4.8],k(a.color,{emissive:a.color,emissiveIntensity:.4}));l.userData={type:"willow-rhythm",actionId:a.id,label:a.label,selected:!1},Ve.push(l),yt.push({object:l,baseY:1.38,phase:o*1.05,spin:.04,bob:.06}),ze(a.clue,[a.x,2.85,4.8],{width:2.7,size:30,color:"#c7d9bd"})}ze("WHOMPING WILLOW · 听风辨认三拍攻击",[0,6.2,-8.05],{width:7.2,size:34,color:"#c7d9bd"});const s=new vi(10143619,2.7,14,2);s.position.set(0,5.8,.8),Re.add(s)}function zt(i){qv(),Mt=i,Ft.position.set(0,1.7,6.7),Ft.quaternion.identity(),i===0?$v():i===1?Kv():i===2?Zv():i===3?Jv():i===4?Qv():i===5?e_():i===6?t_():i===7?n_():i===8?i_():i===9?r_():i===10?s_():i===11?o_():i===12?c_():i===13?h_():i===14?f_():i===15?g_():i===16?v_():i===17?__():i===18&&x_(),Ku()}function y_(){for(const i of Ve)i.userData.type==="owl-letter"&&!i.userData.decoy&&(i.visible=!0,i.userData.selected=!1)}function b_(i){if(i.userData.selected)return;const e=Nv(I,i.userData.clueId),t=ut(ce,i.userData.destination);if(e.reset){I=e,y_(),zc(),le(Rr(ce,"wrong",{destination:t}),3200);return}I=e,i.userData.selected=!0,i.visible=!1,zc(),le(Rr(ce,"progress",{destination:t,count:I.progress.length})),I.unlocked&&(pi.userData.unlocked=!0,Xe.textContent=Rr(ce,"completeObjective"),je.textContent=Rr(ce,"completeHint"),le(Rr(ce,"completeMessage"),3800))}function S_(){for(const i of Ve)i.userData.type==="shopping-item"&&(i.visible=!0,i.userData.selected=!1)}function M_(i){if(i.userData.selected)return;const e=Ov(I,i.userData.itemId);if(e.reset){I=e,S_(),Bc(),le(`清单顺序错误：“${i.userData.label}”不该现在购买。采购篮被清空！`,3200);return}I=e,i.userData.selected=!0,i.visible=!1,Bc(),le(`已购入：${i.userData.label}（${i.userData.price} 加隆）`),I.unlocked&&(pi.userData.unlocked=!0,Xe.textContent="采购完成：前往破釜酒吧出口",je.textContent="清单上的四枚墨点连成了一条通往下一段旅程的路线。",le("霍格沃茨采购清单完成——出口已经开启！",3600))}function E_(i){if(!I.progress.includes("wood")){if(I=Fv(I,i.userData.woodId),al(),!I.accepted){de.color.setHex(11745838),i.rotation.y+=Math.PI/5,le(`“${i.userData.label}”迸出危险火花！失控反馈 +1，重新观察常青叶线索。`,3200),setTimeout(()=>{Mt===2&&de.color.setHex(12032624)},480);return}i.userData.selected=!0,Xe.textContent="木材匹配成功：冬青木发出温暖金光，准备进行杖芯匹配",je.textContent="第一阶段完成。冬青木认可了那道闪电形旧伤；下一步要解读杖芯反馈。",i.material.emissive.setHex(14858319),i.material.emissiveIntensity=1.6;for(const e of Ve)e.userData.type==="wand-core"&&(e.visible=!0,e.userData.pedestal.visible=!0);Xe.textContent="第二阶段：在三种杖芯中找出会回应守护、忠诚与重生的一种",je.textContent="杖芯线索：它来自浴火重生的鸟，曾送来两根命运彼此呼应的羽毛。",le("稳定共鸣！冬青木完成了第一阶段匹配。",3600)}}function T_(i){if(!I.progress.includes("core")){if(I=kv(I,i.userData.coreId),al(),!I.accepted){de.color.setHex(7022716),i.rotation.z+=Math.PI/4,le(`“${i.userData.label}”抗拒了冬青木！失控反馈 +1，重新解读浴火重生的线索。`,3400),setTimeout(()=>{Mt===2&&de.color.setHex(12032624)},480);return}i.userData.selected=!0,i.material.emissiveIntensity=1.8,Xe.textContent="杖芯匹配成功：凤凰羽毛与冬青木稳定共鸣，准备校准长度",je.textContent="长度线索：短杖的火星触不到远处，长杖的光弧越过目标；让光准确停在十一道刻痕。";for(const e of Ve)e.userData.type==="wand-length"&&(e.visible=!0,e.userData.pedestal.visible=!0,e.userData.lengthLabel.visible=!0);le("凤凰羽毛释放出温暖金光——第二阶段匹配完成！",3800)}}function w_(i){if(!I.progress.includes("length")){if(I=zv(I,i.userData.inches),al(),!I.accepted){const e=I.feedback==="too-short"?"火星在目标前坠落":"光弧越过了目标";de.color.setHex(3302042),i.rotation.y+=Math.PI/3,le(`“${i.userData.label}”${e}！失控反馈 +1。`,3300),setTimeout(()=>{Mt===2&&de.color.setHex(12032624)},480);return}i.userData.selected=!0,i.material.emissive.setHex(16042333),i.material.emissiveIntensity=2,pi.userData.unlocked=!0,Xe.textContent="魔杖选择完成：带上魔杖，从车站门前往霍格沃茨分院仪式",je.textContent="三阶段共鸣稳定。奥利凡德为魔杖系上金色封签，通往霍格沃茨的门已经开启。",le("十一道刻痕同时亮起——魔杖选择了巫师！前往已开启的车站门。",4600)}}function A_(i){if(!i.userData.selected){if(I=Bv(I,i.userData.symbolId),Yv(),!I.accepted){i.rotation.z+=Math.PI/12;const t=["先找敢于直面恐惧的象征","现在要找不求荣耀、始终守护同伴的象征","现在要找以思考照亮未知的象征","最后要找意志坚定、善于为目标开辟道路的象征"][I.progress.length];le(`“${i.userData.label}”不符合诗谜顺序。分院帽低声提醒：${t}。`,3600);return}if(i.userData.selected=!0,i.material.emissive.setHex(15774780),i.material.emissiveIntensity=1.8,I.trait==="courage"){Xe.textContent="勇气线索已确认：继续解读“留在朋友身边”的学院象征",je.textContent="第一句已解：狮代表直面恐惧的勇气。下一句赞美不求荣耀、始终守护同伴的品格。",le("狮徽亮起金光——勇气是分院诗谜的第一条线索！",3800);return}if(I.trait==="loyalty"){Xe.textContent="忠诚线索已确认：继续寻找“以思考照亮未知”的学院象征",je.textContent="第二句已解：獾代表不求荣耀的忠诚。下一句属于用问题、观察与求知驱散迷雾的人。",le("獾徽泛起暖黄光芒——忠诚是分院诗谜的第二条线索！",3800);return}if(I.trait==="wisdom"){Xe.textContent="智慧线索已确认：继续寻找“为目标开辟道路”的学院象征",je.textContent="第三句已解：鹰代表以思考照亮未知的智慧。最后一句属于意志坚定、善于实现目标的人。",le("鹰徽闪过清澈蓝光——智慧是分院诗谜的第三条线索！",3800);return}Xe.textContent="第一章完成：四种品格共同照亮了你的分院之路",je.textContent="勇气、忠诚、智慧与野心并非互斥；分院帽认可了你完整读懂诗谜的选择。",Js(localStorage,{book:1,chapter:1,room:4}),$t.textContent="第一部 · 第一章完成",en.textContent="霍格沃茨的新生",nt.classList.remove("hidden"),setTimeout(()=>nt.classList.add("hidden"),2200),le("蛇徽亮起翠光——四学院诗谜完成，第一章通关！",5200)}}function C_(i){if(!(i.userData.selected||I.unlocked)){if(I=hv(I,i.userData.stairId),Uu(),!I.accepted){for(const e of Ve)e.userData.type==="stair-route"&&(e.userData.selected=!1,e.material.emissiveIntensity=.4);de.color.setHex(10106950),le(`“${i.userData.label}”转离了路线！三座楼梯重新移动，时间惩罚 +5 秒。`,3600),setTimeout(()=>{Mt===4&&de.color.setHex(8885949)},520);return}if(i.userData.selected=!0,i.material.emissive.setHex(14138724),i.material.emissiveIntensity=1.8,!I.unlocked){const e=["低塔已固定。等待钟摆穿过中央刻线，寻找月牙铭文。","月光桥已固定。最后选择通往最高平台的三道刻痕。"];Xe.textContent=`路线已稳定 ${I.progress.length} / 3`,je.textContent=e[I.progress.length-1],le(`${i.userData.label}停止旋转，路线的一段已稳定。`,3e3);return}Xe.textContent="移动楼梯关卡完成：通往画像走廊的路线已经稳定",je.textContent="低塔、月光桥和高塔首尾相接。路线尽头的三幅画像正在争论一道银钥口令。",lt(localStorage,{book:1,chapter:2,room:1}),$t.textContent="第一部 · 第二章 · 第 1 关完成",en.textContent="通往画像走廊",nt.classList.remove("hidden"),le("三座楼梯在钟声中连接——正在前往“会说话的画像”！",4200),setTimeout(()=>{zt(5),lt(localStorage,{book:1,chapter:2,room:2})},700),setTimeout(()=>{nt.classList.add("hidden"),le("第二关已加载：比较画像证词，推导正确询问顺序。",4200)},1600)}}function R_(i){if(!(i.userData.selected||I.unlocked)){if(I=fv(I,i.userData.portraitId),Nu(),!I.accepted){for(const e of Ve)e.userData.type==="portrait-testimony"&&(e.userData.selected=!1,e.material.emissiveIntensity=.28);de.color.setHex(10697814),le(`${i.userData.label}高声反驳！证词链断裂，画像怀疑 +1。`,3600),setTimeout(()=>{Mt===5&&de.color.setHex(10192813)},520);return}if(i.userData.selected=!0,i.material.emissive.setHex(13940836),i.material.emissiveIntensity=1.5,!I.unlocked){const e=["学者的月桂框亮起。她确认：银甲骑士应当接着发言。","骑士放下剑并指向女士：最后一个词藏在她的银钥之后。"];Xe.textContent=`可信证词已连接 ${I.progress.length} / 3`,je.textContent=e[I.progress.length-1],le(`${i.userData.quote}——这段证词与前文一致。`,3800);return}Xe.textContent="画像谜题完成：银钥口令已经显现",je.textContent=`三段证词一致。完整口令：“${I.password}”。`,lt(localStorage,{book:1,chapter:2,room:2}),$t.textContent="第一部 · 第二章 · 第 2 关完成",en.textContent="银钥口令",nt.classList.remove("hidden"),le(`画像齐声念出：“${I.password}”——正在进入管理员的巡夜路线！`,5200),setTimeout(()=>{zt(6),lt(localStorage,{book:1,chapter:2,room:3})},700),setTimeout(()=>{nt.classList.add("hidden"),le("第三关已加载：借助盔甲、猫铃与挂毯避开巡夜灯光。",4400)},1600)}}function I_(i){if(!(i.userData.selected||I.unlocked)){if(I=pv(I,i.userData.hidingPlaceId),Ou(),!I.accepted){for(const e of Ve)e.userData.type==="patrol-cover"&&(e.userData.selected=!1,e.material.emissiveIntensity=e.userData.hidingPlaceId==="tapestry"?.35:.25);de.color.setHex(10631986),le(`“${i.userData.label}”暴露在灯光下！路线清空，警戒升至 ${I.alert}。`,3800),setTimeout(()=>{Mt===6&&de.color.setHex(7505569)},560);return}if(i.userData.selected=!0,i.material.emissive.setHex(7780260),i.material.emissiveIntensity=1.6,!I.unlocked){const e=["灯光从盔甲旁掠过。趁管理员背对走廊，拨动猫铃把脚步引开。","猫铃在反方向响起。现在沿阴影抵达独角兽挂毯后的暗门。"];Xe.textContent=`潜行路线已完成 ${I.progress.length} / 3`,je.textContent=e[I.progress.length-1],le(`${i.userData.label}生效，巡夜灯光没有发现你。`,3400);return}Xe.textContent="管理员的巡夜完成：独角兽挂毯后的暗门已经打开",je.textContent="盔甲遮住身形，猫铃引开脚步，挂毯后传来三道低沉的呼吸声。",lt(localStorage,{book:1,chapter:2,room:3}),$t.textContent="第一部 · 第二章 · 第 3 关完成",en.textContent="活板门后的呼吸",nt.classList.remove("hidden"),le("暗门无声开启——正在进入三头犬守卫的禁区！",5200),setTimeout(()=>{zt(7),lt(localStorage,{book:1,chapter:2,room:4})},700),setTimeout(()=>{nt.classList.add("hidden"),le("第四关已加载：解读乐谱，用三件乐器让守门生物沉睡。",4400)},1600)}}function P_(i){if(!(i.userData.selected||I.unlocked)){if(I=dv(I,i.userData.instrumentId),Fu(),!I.accepted){for(const e of Ve)e.userData.type==="lullaby-instrument"&&(e.userData.selected=!1,e.material.emissiveIntensity=.28);de.color.setHex(10697519),le(`“${i.userData.label}”打乱了旋律！三颗头同时睁眼，惊醒 ${I.wakefulness} 次。`,3900),setTimeout(()=>{Mt===7&&de.color.setHex(6649183)},620);return}if(i.userData.selected=!0,i.material.emissive.setHex(7907971),i.material.emissiveIntensity=1.7,!I.unlocked){const e=["长笛的气息让左首合眼。现在用琴弦托住刚形成的梦境。","竖琴的和声让中首伏下。最后用稳定的发条节拍封住鼾声。"];Xe.textContent=`安眠旋律已完成 ${I.progress.length} / 3`,je.textContent=e[I.progress.length-1],le(`${i.userData.label}奏效，一颗头缓缓合上双眼。`,3500);return}Xe.textContent="城堡禁区完成：三颗头都已沉睡，活板门安全开启",je.textContent="夜风、琴弦与发条叠成稳定摇篮曲。活板门下方吹来潮湿植物与古老机关的气息。",Js(localStorage,{book:1,chapter:2,room:4}),$t.textContent="第一部 · 第二章完成",en.textContent="禁区守门人",nt.classList.remove("hidden"),le("三头守卫沉入梦乡——第二章通关，正在前往“镜中秘密”！",5600),setTimeout(()=>{zt(8),lt(localStorage,{book:1,chapter:3,room:1})},900),setTimeout(()=>{nt.classList.add("hidden"),le("第三章已加载：在飞行训练场按风向与重量送回三件遗失物。",4800)},1900)}}function L_(i){if(!(i.userData.selected||I.unlocked)){if(I=_v(I,i.userData.deliveryId),ku(),!I.accepted){for(const e of Ve)e.userData.type==="flying-delivery"&&(e.userData.selected=!1,e.material.emissiveIntensity=.35);de.color.setHex(11950946),le(`“${i.userData.label}”撞入逆风！遗失物重新散落，乱流升至 ${I.turbulence}。`,3900),setTimeout(()=>{Mt===8&&de.color.setHex(10471392)},620);return}if(i.userData.selected=!0,i.material.emissive.setHex(15912551),i.material.emissiveIntensity=1.7,!I.unlocked){const e=["轻围巾顺着低风回到守门员手中。接着让月纹笔记穿过中央风环。","笔记平稳落到学者怀里。最后把最重的黄铜罗盘送上高风。"];Xe.textContent=`遗失物已安全送回 ${I.progress.length} / 3`,je.textContent=e[I.progress.length-1],le(`${i.userData.label}沿安全轨迹完成投递。`,3400);return}Xe.textContent="飞行课完成：三件遗失物全部回到主人手中",je.textContent="低风托轻物，中环承纸页，高风送黄铜。远处洗手间传来沉重脚步，下一道悬浮机关即将开启。",lt(localStorage,{book:1,chapter:3,room:1}),$t.textContent="第一部 · 第三章 · 第 1 关完成",en.textContent="顺风归还",nt.classList.remove("hidden"),le("罗盘越过最高风环——正在赶往传出沉重脚步的洗手间！",5200),setTimeout(()=>{zt(9),lt(localStorage,{book:1,chapter:3,room:2})},800),setTimeout(()=>{nt.classList.add("hidden"),le("第二关已加载：稳定三道悬浮机关，在巨怪逼近前架出逃生路线。",4800)},1750)}}function D_(i){if(!(i.userData.selected||I.unlocked)){if(I=vv(I,i.userData.obstacleId),zu(),!I.accepted){for(const e of Ve)e.userData.type==="troll-obstacle"&&(e.userData.selected=!1,e.material.emissiveIntensity=.32);de.color.setHex(11750975),le(`“${i.userData.label}”触发过早！路线震塌，巨怪危险升至 ${I.danger}。`,3900),setTimeout(()=>{Mt===9&&de.color.setHex(9217704)},620);return}if(i.userData.selected=!0,i.material.emissive.setHex(6669746),i.material.emissiveIntensity=1.7,!I.unlocked){const e=["月纹阀合拢，水势减弱。现在悬浮沟渠前的碎石，清出横梁落点。","瓦砾升到巨怪头顶，通道已经清空。最后放下锁链横梁跨过水沟。"];Xe.textContent=`逃生机关已稳定 ${I.progress.length} / 3`,je.textContent=e[I.progress.length-1],le(`${i.userData.label}稳定生效，巨怪被机关拖慢。`,3400);return}Xe.textContent="巨怪洗手间完成：横梁已跨过沟渠，安全逃生路线建立",je.textContent="止水阀保护落脚点，悬浮瓦砾清出通路，横梁连接出口。禁书区的门缝里透出幽蓝微光。",lt(localStorage,{book:1,chapter:3,room:2}),$t.textContent="第一部 · 第三章 · 第 2 关完成",en.textContent="悬浮逃生",nt.classList.remove("hidden"),le("横梁稳稳落下——正在穿过幽蓝门廊，前往图书馆禁书区！",5200),setTimeout(()=>{zt(10),lt(localStorage,{book:1,chapter:3,room:3})},800),setTimeout(()=>{nt.classList.add("hidden"),le("第三关已加载：按历史年代排列安全书脊，千万别惊醒锁链无年卷。",4800)},1750)}}function U_(i){if(!(i.userData.selected||I.unlocked)){if(I=gv(I,i.userData.bookId),Bu(),!I.accepted){for(const e of Ve)e.userData.type==="restricted-book"&&(e.userData.selected=!1,e.material.emissiveIntensity=.32);de.color.setHex(11615587),le(`“${i.userData.label}”发出尖叫！书脊时间线清空，噪声升至 ${I.noise}。`,3900),setTimeout(()=>{Mt===10&&de.color.setHex(6714779)},620);return}if(i.userData.selected=!0,i.material.emissive.setHex(7311316),i.material.emissiveIntensity=1.8,!I.unlocked){const e=["建校录的四枚徽记亮起。下一本应记录数百年后的北境灾变。","龙灾账册安静归位。最后选择本年刚修订的天象纪事。"];Xe.textContent=`历史时间线已恢复 ${I.progress.length} / 3`,je.textContent=e[I.progress.length-1],le(`${i.userData.label}年代吻合，出口封印出现一道裂纹。`,3400);return}Xe.textContent="禁书区完成：三本历史书脊已按年代归位，镜廊出口显现",je.textContent="建校、龙灾、月蚀串成完整时间线。书架深处的银镜映出下一道谜题。",lt(localStorage,{book:1,chapter:3,room:3}),$t.textContent="第一部 · 第三章 · 第 3 关完成",en.textContent="无声时间线",nt.classList.remove("hidden"),le("最后一本纪事归位——银镜正在把你引向镜廊深处！",5200),setTimeout(()=>{zt(11),lt(localStorage,{book:1,chapter:3,room:4})},800),setTimeout(()=>{nt.classList.add("hidden"),le("第四关已加载：比较镜像与现实，选择真正需要而非渴望的物品。",4800)},1750)}}function N_(i){if(!(i.userData.selected||I.unlocked)){if(I=mv(I,i.userData.itemId),Hu(),!I.accepted){for(const e of Ve)e.userData.type==="mirror-choice"&&(e.userData.selected=!1,e.material.emissiveIntensity=.34);de.color.setHex(10303596),le(`“${i.userData.label}”只是镜中的欲望！现实线索消散，幻象增强至 ${I.illusion}。`,4200),setTimeout(()=>{Mt===11&&de.color.setHex(8885688)},650);return}if(i.userData.selected=!0,i.material.emissive.setHex(12114112),i.material.emissiveIntensity=1.8,!I.unlocked){const e=["斗篷挡住镜廊寒风。出口仍一片漆黑，寻找能照清现实道路的物品。","提灯照出两组脚印。最后选择代表共同离开、而非独占荣耀的信物。"];Xe.textContent=`现实所需已确认 ${I.progress.length} / 3`,je.textContent=e[I.progress.length-1],le(`${i.userData.label}没有出现在华丽镜像中，却解决了眼前的真实困境。`,3900);return}Xe.textContent="镜中秘密完成：你选择了御寒、照路与同行，而非王冠和金杯",je.textContent="魔镜的幻象退去，现实出口在同伴木牌的微光中显现。地下传来藤蔓摩擦石壁的声音。",Js(localStorage,{book:1,chapter:3,room:4}),$t.textContent="第一部 · 第三章完成",en.textContent="现实所需",nt.classList.remove("hidden"),le("同伴木牌照亮出口——正在下降至地下试炼的魔鬼网！",5600),setTimeout(()=>{zt(12),lt(localStorage,{book:1,chapter:4,room:1})},900),setTimeout(()=>{nt.classList.add("hidden"),le(zn(ce,"roomLoadedMessage"),5e3)},1900)}}function O_(i){if(!(i.userData.selected||I.unlocked)){if(I=Sv(I,i.userData.actionId),Vu(),!I.accepted){for(const e of Ve)e.userData.type==="devils-snare-action"&&(e.userData.selected=!1,e.material.emissiveIntensity=.5);de.color.setHex(10961976),le(zn(ce,"wrong",{label:ut(ce,i.userData.label),count:I.constriction}),4100),setTimeout(()=>{Mt===12&&de.color.setHex(7179368)},680);return}if(i.userData.selected=!0,i.material.emissive.setHex(7981032),i.material.emissiveIntensity=1.9,!I.unlocked){const e=I.progress.length===1?"firstHint":"secondHint";Xe.textContent=zn(ce,"progress",{count:I.progress.length}),je.textContent=zn(ce,e),le(zn(ce,"accepted",{label:ut(ce,i.userData.label)}),3600);return}Xe.textContent=zn(ce,"completeObjective"),je.textContent=zn(ce,"completeHint"),lt(localStorage,{book:1,chapter:4,room:1}),$t.textContent=zn(ce,"transitionKicker"),en.textContent=zn(ce,"transitionTitle"),nt.classList.remove("hidden"),le(zn(ce,"completionMessage"),5200),setTimeout(()=>{zt(13),lt(localStorage,{book:1,chapter:4,room:2})},900),setTimeout(()=>{nt.classList.add("hidden"),le(In(ce,"roomLoadedMessage"),4800)},1900)}}function F_(i){if(!(i.userData.selected||I.unlocked)){if(I=bv(I,i.userData.clueId),Gu(),!I.accepted){for(const e of Ve)e.userData.type==="flying-key-clue"&&(e.userData.selected=!1,e.material.emissiveIntensity=.48);de.color.setHex(10898514),le(In(ce,"wrong",{label:ut(ce,i.userData.label),count:I.pursuit}),4200),setTimeout(()=>{Mt===13&&de.color.setHex(8558262)},700);return}if(i.userData.selected=!0,i.material.emissive.setHex(12575743),i.material.emissiveIntensity=1.9,!I.unlocked){const e=I.progress.length===1?"firstHint":"secondHint";Xe.textContent=In(ce,"progress",{count:I.progress.length}),je.textContent=In(ce,e),le(In(ce,"accepted",{label:ut(ce,i.userData.label)}),3700);return}Xe.textContent=In(ce,"completeObjective"),je.textContent=In(ce,"completeHint"),lt(localStorage,{book:1,chapter:4,room:2}),$t.textContent=In(ce,"transitionKicker"),en.textContent=In(ce,"transitionTitle"),nt.classList.remove("hidden"),le(In(ce,"completionMessage"),5400),setTimeout(()=>{zt(14),lt(localStorage,{book:1,chapter:4,room:3})},900),setTimeout(()=>{nt.classList.add("hidden"),le(In(ce,"nextRoomMessage"),4800)},1900)}}function k_(i){if(!(i.userData.selected||I.unlocked)){if(I=yv(I,i.userData.moveId),Wu(),!I.accepted){for(const e of Ve)e.userData.type==="wizard-chess-move"&&(e.userData.selected=!1,e.material.emissiveIntensity=.36);de.color.setHex(10569547),le(On(ce,"wrong",{label:ut(ce,i.userData.label),count:I.captured}),4300),setTimeout(()=>{Mt===14&&de.color.setHex(10132646)},720);return}if(i.userData.selected=!0,i.material.emissive.setHex(14214084),i.material.emissiveIntensity=1.9,!I.unlocked){const e=I.progress.length===1?"firstHint":"secondHint";Xe.textContent=On(ce,"progress",{count:I.progress.length}),je.textContent=On(ce,e),le(On(ce,"accepted",{label:ut(ce,i.userData.label)}),3800);return}Xe.textContent=On(ce,"completeObjective"),je.textContent=On(ce,"completeHint"),lt(localStorage,{book:1,chapter:4,room:3}),$t.textContent=On(ce,"transitionKicker"),en.textContent=On(ce,"transitionTitle"),nt.classList.remove("hidden"),le(On(ce,"completionMessage"),5400),setTimeout(()=>{zt(15),lt(localStorage,{book:1,chapter:4,room:4})},900),setTimeout(()=>{nt.classList.add("hidden"),le(On(ce,"nextRoomMessage"),5e3)},1900)}}function z_(i){if(!(i.userData.selected||I.unlocked)){if(I=xv(I,i.userData.clueId),Xu(),!I.accepted){for(const e of Ve)e.userData.type==="stone-chamber-clue"&&(e.userData.selected=!1,e.material.emissiveIntensity=.4);de.color.setHex(11615564),le(Fn(ce,"wrong",{label:ut(ce,i.userData.label),count:I.corruption}),4400),setTimeout(()=>{Mt===15&&de.color.setHex(10258354)},720);return}if(i.userData.selected=!0,i.material.emissive.setHex(14272255),i.material.emissiveIntensity=1.9,!I.unlocked){const e=I.progress.length===1?"firstHint":"secondHint";Xe.textContent=Fn(ce,"progress",{count:I.progress.length}),je.textContent=Fn(ce,e),le(Fn(ce,"accepted",{label:ut(ce,i.userData.label)}),3900);return}Xe.textContent=Fn(ce,"completeObjective"),je.textContent=Fn(ce,"completeHint"),Js(localStorage,{book:1,chapter:4,room:4}),$t.textContent=Fn(ce,"transitionKicker"),en.textContent=Fn(ce,"transitionTitle"),nt.classList.remove("hidden"),le(Fn(ce,"completionMessage"),6500),setTimeout(()=>{zt(16),lt(localStorage,{book:2,chapter:1,room:1})},1e3),setTimeout(()=>{nt.classList.add("hidden"),le(Fn(ce,"nextRoomMessage"),5200)},2100)}}function B_(i){if(!(i.userData.selected||I.unlocked)){if(I=Tv(I,i.userData.objectId),qu(),!I.accepted){for(const e of Ve)e.userData.type==="elf-blockade-trace"&&(e.userData.selected=!1,e.material.emissiveIntensity=.38);de.color.setHex(10764108),le(kn(ce,"wrong",{label:ut(ce,i.userData.label),count:I.interference}),4300),setTimeout(()=>{Mt===16&&de.color.setHex(8494477)},720);return}if(i.userData.selected=!0,i.material.emissive.setHex(11004868),i.material.emissiveIntensity=1.9,!I.unlocked){const e=I.progress.length===1?"firstHint":"secondHint";Xe.textContent=kn(ce,"progress",{count:I.progress.length}),je.textContent=kn(ce,e),le(kn(ce,"accepted",{label:ut(ce,i.userData.label)}),3800);return}Xe.textContent=kn(ce,"completeObjective"),je.textContent=kn(ce,"completeHint"),lt(localStorage,{book:2,chapter:1,room:1}),$t.textContent=kn(ce,"transitionKicker"),en.textContent=kn(ce,"transitionTitle"),nt.classList.remove("hidden"),le(kn(ce,"completionMessage"),6200),setTimeout(()=>{zt(17),lt(localStorage,{book:2,chapter:1,room:2})},900),setTimeout(()=>{nt.classList.add("hidden"),le(kn(ce,"nextRoomMessage"),5e3)},1900)}}function H_(i){if(!(i.userData.selected||I.unlocked)){if(I=Ev(I,i.userData.controlId),Yu(),!I.accepted){for(const e of Ve)e.userData.type==="flying-car-control"&&(e.userData.selected=!1,e.material.emissiveIntensity=.4);de.color.setHex(11617612),Ft.rotation.z=.08,le(`“${i.userData.label}”让引擎过热！飞车翻滚，乱流升至 ${I.turbulence}。`,4300),setTimeout(()=>{Mt===17&&(de.color.setHex(7440544),Ft.rotation.z=0)},720);return}if(i.userData.selected=!0,i.material.emissive.setHex(12052223),i.material.emissiveIntensity=1.9,!I.unlocked){const e=["行李后移后车头恢复水平。现在让车头与铁路尽头的红色信号灯重合。","航向已经锁定，但水温仍在红区。用短促油门越过高架桥，不能持续加速。"];Xe.textContent=`飞车稳定步骤已完成 ${I.progress.length} / 3`,je.textContent=e[I.progress.length-1],le(`${i.userData.label}生效，飞车姿态恢复了一部分。`,3700);return}Xe.textContent="飞车失控完成：配重、航向与脉冲油门让车辆安全追上列车",je.textContent="后移配重压低车尾，铁路红灯校正航向，脉冲油门避免引擎过热。远处的打人柳正在风中挥动枝条。",lt(localStorage,{book:2,chapter:1,room:2}),$t.textContent="第二部 · 第一章 · 第 2 关完成",en.textContent="打人柳下",nt.classList.remove("hidden"),le("飞车擦过高架桥，稳稳落在城堡草地——打人柳的粗枝突然苏醒！",6200),setTimeout(()=>{zt(18),lt(localStorage,{book:2,chapter:1,room:3})},900),setTimeout(()=>{nt.classList.add("hidden"),le("打人柳关卡已加载：等待高扫、俯身避低返，再冲过树根间隙。",5200)},1900)}}function V_(i){if(!(i.userData.selected||I.unlocked)){if(I=Mv(I,i.userData.actionId),ju(),!I.accepted){for(const e of Ve)e.userData.type==="willow-rhythm"&&(e.userData.selected=!1,e.material.emissiveIntensity=.4);de.color.setHex(11750211),Ft.rotation.z=-.07,le(`“${i.userData.label}”踩错节拍！粗枝扫中肩膀，擦伤升至 ${I.bruises}。`,4300),setTimeout(()=>{Mt===18&&(de.color.setHex(8228772),Ft.rotation.z=0)},720);return}if(i.userData.selected=!0,i.material.emissive.setHex(13037485),i.material.emissiveIntensity=1.9,!I.unlocked){const e=["高枝带着破风声从头顶扫过。枝梢正在贴着落叶低低返程，立刻俯身。","低枝擦过背后，主干短暂失去平衡。发光树根之间的缝隙就是第三拍。"];Xe.textContent=`打人柳安全节拍已完成 ${I.progress.length} / 3`,je.textContent=e[I.progress.length-1],le(`${i.userData.label}：动作与枝条节拍吻合。`,3700);return}Xe.textContent="打人柳下完成：高扫、低返、露根三拍全部避开，树洞通道已经打开",je.textContent="破风声预告高扫，贴地落叶暴露低返，两次攻击后的收势形成通往树洞的安全窗口。",lt(localStorage,{book:2,chapter:1,room:3}),$t.textContent="第二部 · 第一章 · 第 3 关完成",en.textContent="树洞开启",nt.classList.remove("hidden"),setTimeout(()=>nt.classList.add("hidden"),3e3),le("你滑入树根下的安全通道。城堡走廊尽头，一行血字正从潮湿石墙上浮现……",6200)}}function G_(i){if(ks)return;const e=rl(i);e&&(ks=!0,$t.textContent=`第一部 · 第一章 · 第 ${i+1} 关`,en.textContent=e.name,nt.classList.remove("hidden"),setTimeout(()=>{zt(i),lt(localStorage,{book:1,chapter:1,room:i+1})},600),setTimeout(()=>{nt.classList.add("hidden"),ks=!1;const n={1:"第二关已加载：进入对角巷，按清单顺序采购。",2:"第三关已加载：你已进入奥利凡德魔杖店。",3:"第四关已加载：你已抵达霍格沃茨礼堂，分院仪式即将开始。"}[i]??`第 ${i+1} 关已加载。`;le(n,4200)},1450))}function W_(i){const e=Hv({roomIndex:Mt,unlocked:i.userData.unlocked});if(!e.advanced){const n=4-I.progress.length;le(`门还没有认可你：还需完成 ${n} 个正确步骤。`);return}if(i.userData.opening)return;i.userData.opening=!0;const t=rl(e.roomIndex);t&&(Xe.textContent=`门正在打开：准备进入第 ${e.roomIndex+1} 关“${t.name}”`,le(`第 ${Mt+1} 关完成！正在前往“${t.name}”……`,2600),setTimeout(()=>G_(e.roomIndex),1050))}function Ku(){ka.setFromCamera(new be(0,0),Ft);const i=Ve.filter(s=>s.visible),e=ka.intersectObjects(i,!0)[0]?.object??null;if(Ne=Yg(e,i),Lr.classList.toggle("visible",!!Ne),!Ne)return;const t=Ee(Zt?"action.touch":"action.keyboard"),n=Ne.userData,r=ut(ce,n.label??n.destination??Ne.name);n.type==="shopping-item"?Lr.textContent=`${t} ${r} · ${n.price} G`:n.type==="door"&&!n.unlocked?Lr.textContent=`${r} · ${Ee("campaign.locked")}`:Lr.textContent=`${t} ${r}`}function Zu(){!Pn.isLocked&&!Jr||!Ne||ks||(Ne.userData.type==="owl-letter"?b_(Ne):Ne.userData.type==="shopping-item"?M_(Ne):Ne.userData.type==="wand-wood"?E_(Ne):Ne.userData.type==="wand-core"?T_(Ne):Ne.userData.type==="wand-length"?w_(Ne):Ne.userData.type==="sorting-clue"?A_(Ne):Ne.userData.type==="stair-route"?C_(Ne):Ne.userData.type==="portrait-testimony"?R_(Ne):Ne.userData.type==="patrol-cover"?I_(Ne):Ne.userData.type==="lullaby-instrument"?P_(Ne):Ne.userData.type==="flying-delivery"?L_(Ne):Ne.userData.type==="troll-obstacle"?D_(Ne):Ne.userData.type==="restricted-book"?U_(Ne):Ne.userData.type==="mirror-choice"?N_(Ne):Ne.userData.type==="devils-snare-action"?O_(Ne):Ne.userData.type==="flying-key-clue"?F_(Ne):Ne.userData.type==="wizard-chess-move"?k_(Ne):Ne.userData.type==="stone-chamber-clue"?z_(Ne):Ne.userData.type==="elf-blockade-trace"?B_(Ne):Ne.userData.type==="flying-car-control"?H_(Ne):Ne.userData.type==="willow-rhythm"?V_(Ne):Ne.userData.type==="door"&&W_(Ne))}function Ju(){document.documentElement.lang=ce,document.title=Ee("document.title"),document.querySelector("#start-brand").textContent=Ee("start.brand"),document.querySelector("#start-title").textContent=Ee("start.title"),document.querySelector("#start-description").textContent=Ee("start.description"),Zr.textContent=Ee("start.play"),Qs.textContent=Ee("start.continue"),Ws.textContent=Ee("start.restart"),document.querySelector("#campaign-button").textContent=Ee("start.campaign"),Lu.textContent=Ee("start.language"),Kt.textContent=Ee(Mn==="playing"?"voice.stop":"voice.play"),Kt.disabled=Mn==="loading",Kt.setAttribute("aria-busy",String(Mn==="loading")),Kt.setAttribute("aria-pressed",String(Mn==="playing")),kr.textContent=Ee(`voice.${Mn==="idle"?"ready":Mn}`),Wv.textContent=Ee("voice.subtitle"),document.querySelector(".desktop-help").textContent=Ee("help.desktop"),document.querySelector(".mobile-help").textContent=Ee("help.mobile"),document.querySelector("#look-zone span").textContent=Ee("mobile.look"),document.querySelector("#interact-button").textContent=Ee("mobile.interact"),document.querySelector(".campaign-header h2").textContent=Ee("campaign.title"),document.querySelector("#campaign-screen").setAttribute("aria-label",Ee("campaign.title")),document.querySelector("#campaign-close").setAttribute("aria-label",Ee("campaign.close")),document.querySelector("#book-tabs").setAttribute("aria-label",Ee("campaign.selectBook")),$t.textContent=Ee("transition.next"),Du?.render()}function eo(){Fa+=1,hr.pause(),hr.currentTime=0,Mn="idle",Kt.disabled=!1,Kt.setAttribute("aria-busy","false"),Kt.setAttribute("aria-pressed","false"),Kt.textContent=Ee("voice.play"),kr.textContent=Ee("voice.ready")}Kt.addEventListener("click",async()=>{if(Mn==="playing"){eo();return}if(!cv({playbackState:Mn,muted:!1}))return;const i=lv("intro",ce),e=++Fa;Mn="loading",Kt.disabled=!0,Kt.setAttribute("aria-busy","true"),kr.textContent=Ee("voice.loading");const t=await uv({audio:hr,source:i?`/Hogwarts-Escape-Room-3D-Play/${i}`:null,muted:!1});if(e!==Fa){hr.pause(),hr.currentTime=0;return}Kt.disabled=!1,Kt.setAttribute("aria-busy","false"),t==="playing"?(Mn="playing",Kt.textContent=Ee("voice.stop"),Kt.setAttribute("aria-pressed","true"),kr.textContent=Ee("voice.playing")):(Mn="idle",Kt.textContent=Ee("voice.play"),Kt.setAttribute("aria-pressed","false"),kr.textContent=Ee("voice.failed"))});hr.addEventListener("ended",eo);for(const i of document.querySelectorAll("[data-language]"))i.addEventListener("click",()=>{eo(),ce=nv(localStorage,i.dataset.language),Ee=Kr(ce),Ju(),zt(Mt),Xs.classList.add("hidden"),Xs.setAttribute("aria-hidden","true")});Lu.addEventListener("click",()=>{Xs.classList.remove("hidden"),Xs.removeAttribute("aria-hidden")});Ju();Zr.addEventListener("click",()=>{eo(),Zt?(Jr=!0,ol.classList.add("hidden"),Vv.classList.add("active")):Pn.lock()});(rl(Dr)||Number.isInteger(Dr)&&Dr>=4&&Dr<=18)&&(Qs.classList.remove("hidden"),Ws.classList.remove("hidden"));Qs.addEventListener("click",()=>{zt(Dr),Zr.click()});Ws.addEventListener("click",()=>{Kg(localStorage),Qs.classList.add("hidden"),Ws.classList.add("hidden"),zt(0),Zr.click()});Pn.addEventListener("lock",()=>ol.classList.add("hidden"));Pn.addEventListener("unlock",()=>ol.classList.remove("hidden"));Du=ov({getProgress:()=>wu(localStorage),getLanguage:()=>ce,getTranslator:()=>Ee,onPlay:i=>{const t={"b1-c2-r1":4,"b1-c2-r2":5,"b1-c2-r3":6,"b1-c2-r4":7,"b1-c3-r1":8,"b1-c3-r2":9,"b1-c3-r3":10,"b1-c3-r4":11,"b1-c4-r1":12,"b1-c4-r2":13,"b1-c4-r3":14,"b1-c4-r4":15,"b2-c1-r1":16,"b2-c1-r2":17,"b2-c1-r3":18}[i.id]??0;zt(t),t>=16?lt(localStorage,{book:2,chapter:1,room:t-15}):t>=12?lt(localStorage,{book:1,chapter:4,room:t-11}):t>=8?lt(localStorage,{book:1,chapter:3,room:t-7}):t>=4&&lt(localStorage,{book:1,chapter:2,room:t-3}),Zr.click()}});const lr={};addEventListener("keydown",i=>{lr[i.code]=!0,i.code==="KeyE"&&Zu()});addEventListener("keyup",i=>{lr[i.code]=!1});const ui={forward:0,right:0},qs=document.querySelector("#joystick"),Qu=document.querySelector("#joystick-knob");let Ys=null,za={x:0,y:0};function ed(i){const e=i.clientX-za.x,t=i.clientY-za.y,n=Math.hypot(e,t)||1,r=34,s=Math.min(1,r/n),o=e*s,a=t*s;Qu.style.transform=`translate(${o}px, ${a}px)`,ui.right=o/r,ui.forward=-a/r}qs.addEventListener("touchstart",i=>{const e=i.changedTouches[0],t=qs.getBoundingClientRect();Ys=e.identifier,za={x:t.left+t.width/2,y:t.top+t.height/2},ed(e),i.preventDefault()},{passive:!1});qs.addEventListener("touchmove",i=>{const e=[...i.changedTouches].find(t=>t.identifier===Ys);e&&ed(e),i.preventDefault()},{passive:!1});qs.addEventListener("touchend",i=>{[...i.changedTouches].some(e=>e.identifier===Ys)&&(Ys=null,ui.forward=0,ui.right=0,Qu.style.transform="translate(0,0)")},{passive:!1});const Oi=document.querySelector("#look-zone");let Xr=null,zs={x:0,y:0};Oi.addEventListener("pointerdown",i=>{!Jr||Xr!==null||(Xr=i.pointerId,zs={x:i.clientX,y:i.clientY},Oi.setPointerCapture(i.pointerId),i.preventDefault())});Oi.addEventListener("pointermove",i=>{if(!Jr||i.pointerId!==Xr)return;const e=new wn().setFromQuaternion(Ft.quaternion,"YXZ"),t=qg({yaw:e.y,pitch:e.x},{dx:i.clientX-zs.x,dy:i.clientY-zs.y});e.y=t.yaw,e.x=t.pitch,Ft.quaternion.setFromEuler(e),zs={x:i.clientX,y:i.clientY},i.preventDefault()});function td(i){i.pointerId===Xr&&(Oi.hasPointerCapture(i.pointerId)&&Oi.releasePointerCapture(i.pointerId),Xr=null)}Oi.addEventListener("pointerup",td);Oi.addEventListener("pointercancel",td);document.querySelector("#interact-button").addEventListener("pointerdown",i=>{i.preventDefault(),Zu()});const Hc=new Zh;function nd(){requestAnimationFrame(nd);const i=Math.min(Hc.getDelta(),.05),e=Hc.elapsedTime;for(const t of yt)t.object.visible&&(t.object.position.y=t.baseY+Math.sin(e*1.35+t.phase)*t.bob,t.spin&&(t.object.rotation.y+=i*t.spin));if(Pn.isLocked||Jr){const t=5*i,n=Ft.position.clone();lr.KeyW&&Pn.moveForward(t),lr.KeyS&&Pn.moveForward(-t),lr.KeyA&&Pn.moveRight(-t),lr.KeyD&&Pn.moveRight(t),ui.forward&&Pn.moveForward(t*ui.forward),ui.right&&Pn.moveRight(t*ui.right),Ft.position.y=1.7,(Math.abs(Ft.position.x)>kc.x||Math.abs(Ft.position.z)>kc.z)&&Ft.position.copy(n),Ku()}pi?.userData.opening&&pi.userData.pivot.rotation.y>-Math.PI*.48&&(pi.userData.pivot.rotation.y-=i*1.55),_i.render(Et,Ft)}zt(0);nd();addEventListener("resize",()=>{Ft.aspect=innerWidth/innerHeight,Ft.updateProjectionMatrix(),_i.setSize(innerWidth,innerHeight)});
