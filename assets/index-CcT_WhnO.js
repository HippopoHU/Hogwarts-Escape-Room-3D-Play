(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const ul="179",kd=0,Ol=1,Fd=2,uu=1,du=2,ui=3,Ti=0,mn=1,Sn=2,Si=0,Ss=1,kl=2,Fl=3,zl=4,zd=5,zi=100,Bd=101,Hd=102,Gd=103,Vd=104,Wd=200,Xd=201,qd=202,jd=203,ua=204,da=205,Yd=206,Kd=207,$d=208,Zd=209,Jd=210,Qd=211,eh=212,th=213,nh=214,ha=0,fa=1,pa=2,Ts=3,ma=4,ga=5,va=6,_a=7,hu=0,ih=1,sh=2,Mi=0,rh=1,oh=2,ah=3,lh=4,ch=5,uh=6,dh=7,fu=300,As=301,Cs=302,xa=303,ba=304,po=306,ya=1e3,Gi=1001,Sa=1002,On=1003,hh=1004,_r=1005,Zn=1006,Eo=1007,Vi=1008,Qn=1009,pu=1010,mu=1011,tr=1012,dl=1013,Wi=1014,di=1015,cr=1016,hl=1017,fl=1018,nr=1020,gu=35902,vu=1021,_u=1022,Nn=1023,ir=1026,sr=1027,xu=1028,pl=1029,bu=1030,ml=1031,gl=1033,Kr=33776,$r=33777,Zr=33778,Jr=33779,Ma=35840,Ea=35841,wa=35842,Ta=35843,Aa=36196,Ca=37492,Ra=37496,Ia=37808,La=37809,Pa=37810,Da=37811,Ua=37812,Na=37813,Oa=37814,ka=37815,Fa=37816,za=37817,Ba=37818,Ha=37819,Ga=37820,Va=37821,Qr=36492,Wa=36494,Xa=36495,yu=36283,qa=36284,ja=36285,Ya=36286,fh=3200,ph=3201,Su=0,mh=1,bi="",pn="srgb",Rs="srgb-linear",so="linear",_t="srgb",Ki=7680,Bl=519,gh=512,vh=513,_h=514,Mu=515,xh=516,bh=517,yh=518,Sh=519,Ka=35044,Hl="300 es",Jn=2e3,ro=2001;class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wo=Math.PI/180,$a=180/Math.PI;function Ei(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function it(i,e,t){return Math.max(e,Math.min(t,i))}function Mh(i,e){return(i%e+e)%e}function To(i,e,t){return(1-t)*i+t*e}function $n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ur{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3];const f=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(d!==v||c!==f||l!==m||u!==g){let p=1-a;const h=c*f+l*m+u*g+d*v,M=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const w=Math.sqrt(b),T=Math.atan2(w,h*M);p=Math.sin(p*T)/w,a=Math.sin(a*T)/w}const _=a*M;if(c=c*p+f*_,l=l*p+m*_,u=u*p+g*_,d=d*p+v*_,p===1-a){const w=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=w,l*=w,u*=w,d*=w}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*d+c*m-l*f,e[t+1]=c*g+u*f+l*d-a*m,e[t+2]=l*g+u*m+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),d=a(r/2),f=c(n/2),m=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*d+l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d+f*m*g;break;case"YZX":this._x=f*u*d+l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d-f*m*g;break;case"XZY":this._x=f*u*d-l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ao.copy(this).projectOnVector(e),this.sub(Ao)}reflect(e){return this.sub(Ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ao=new L,Gl=new ur;class Je{constructor(e,t,n,s,r,o,a,c,l){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],m=n[5],g=n[8],v=s[0],p=s[3],h=s[6],M=s[1],b=s[4],_=s[7],w=s[2],T=s[5],C=s[8];return r[0]=o*v+a*M+c*w,r[3]=o*p+a*b+c*T,r[6]=o*h+a*_+c*C,r[1]=l*v+u*M+d*w,r[4]=l*p+u*b+d*T,r[7]=l*h+u*_+d*C,r[2]=f*v+m*M+g*w,r[5]=f*p+m*b+g*T,r[8]=f*h+m*_+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*r,m=l*r-o*c,g=t*d+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(s*l-u*n)*v,e[2]=(a*n-s*o)*v,e[3]=f*v,e[4]=(u*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=m*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Co.makeScale(e,t)),this}rotate(e){return this.premultiply(Co.makeRotation(-e)),this}translate(e,t){return this.premultiply(Co.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Co=new Je;function Eu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function oo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Eh(){const i=oo("canvas");return i.style.display="block",i}const Vl={};function Ms(i){i in Vl||(Vl[i]=!0,console.warn(i))}function wh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Wl=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xl=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Th(){const i={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(s.r=hi(s.r),s.g=hi(s.g),s.b=hi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(s.r=Es(s.r),s.g=Es(s.g),s.b=Es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?so:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ms("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ms("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Rs]:{primaries:e,whitePoint:n,transfer:so,toXYZ:Wl,fromXYZ:Xl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:Wl,fromXYZ:Xl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),i}const ct=Th();function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let $i;class Ah{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$i===void 0&&($i=oo("canvas")),$i.width=e.width,$i.height=e.height;const s=$i.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=$i}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hi(t[n]/255)*255):t[n]=hi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ch=0;class vl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Ei(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ro(s[o].image)):r.push(Ro(s[o]))}else r=Ro(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ro(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ah.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rh=0;const Io=new L;class dn extends ji{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,n=Gi,s=Gi,r=Zn,o=Vi,a=Nn,c=Qn,l=dn.DEFAULT_ANISOTROPY,u=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Ei(),this.name="",this.source=new vl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Io).x}get height(){return this.source.getSize(Io).y}get depth(){return this.source.getSize(Io).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ya:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case Sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ya:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case Sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=fu;dn.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,s=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],m=c[5],g=c[9],v=c[2],p=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,_=(m+1)/2,w=(h+1)/2,T=(u+f)/4,C=(d+v)/4,D=(g+p)/4;return b>_&&b>w?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=C/n):_>w?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=D/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=C/r,s=D/r),this.set(n,s,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(d-v)/M,this.z=(f-u)/M,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ih extends ji{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new dn(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new vl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Ih{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wu extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lh extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dr{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,In):In.fromBufferAttribute(r,o),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xr.copy(n.boundingBox)),xr.applyMatrix4(e.matrixWorld),this.union(xr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),br.subVectors(this.max,Ns),Zi.subVectors(e.a,Ns),Ji.subVectors(e.b,Ns),Qi.subVectors(e.c,Ns),pi.subVectors(Ji,Zi),mi.subVectors(Qi,Ji),Li.subVectors(Zi,Qi);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Li.z,Li.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Li.z,0,-Li.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Li.y,Li.x,0];return!Lo(t,Zi,Ji,Qi,br)||(t=[1,0,0,0,1,0,0,0,1],!Lo(t,Zi,Ji,Qi,br))?!1:(yr.crossVectors(pi,mi),t=[yr.x,yr.y,yr.z],Lo(t,Zi,Ji,Qi,br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ii=[new L,new L,new L,new L,new L,new L,new L,new L],In=new L,xr=new dr,Zi=new L,Ji=new L,Qi=new L,pi=new L,mi=new L,Li=new L,Ns=new L,br=new L,yr=new L,Pi=new L;function Lo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Pi.fromArray(i,r);const a=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),c=e.dot(Pi),l=t.dot(Pi),u=n.dot(Pi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Ph=new dr,Os=new L,Po=new L;class _l{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ph.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);const t=Os.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Os,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Po.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(Po)),this.expandByPoint(Os.copy(e.center).sub(Po))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const si=new L,Do=new L,Sr=new L,gi=new L,Uo=new L,Mr=new L,No=new L;class Tu{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Do.copy(e).add(t).multiplyScalar(.5),Sr.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(Do);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Sr),a=gi.dot(this.direction),c=-gi.dot(Sr),l=gi.lengthSq(),u=Math.abs(1-o*o);let d,f,m,g;if(u>0)if(d=o*c-a,f=o*a-c,g=r*u,d>=0)if(f>=-g)if(f<=g){const v=1/u;d*=v,f*=v,m=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Do).addScaledVector(Sr,f),m}intersectSphere(e,t){si.subVectors(e.center,this.origin);const n=si.dot(this.direction),s=si.dot(si)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,n,s,r){Uo.subVectors(t,e),Mr.subVectors(n,e),No.crossVectors(Uo,Mr);let o=this.direction.dot(No),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,e);const c=a*this.direction.dot(Mr.crossVectors(gi,Mr));if(c<0)return null;const l=a*this.direction.dot(Uo.cross(gi));if(l<0||c+l>o)return null;const u=-a*gi.dot(No);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,t,n,s,r,o,a,c,l,u,d,f,m,g,v,p){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,d,f,m,g,v,p)}set(e,t,n,s,r,o,a,c,l,u,d,f,m,g,v,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=g,h[11]=v,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/es.setFromMatrixColumn(e,0).length(),r=1/es.setFromMatrixColumn(e,1).length(),o=1/es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,m=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,m=c*d,g=l*u,v=l*d;t[0]=f+v*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,m=c*d,g=l*u,v=l*d;t[0]=f-v*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,m=o*d,g=a*u,v=a*d;t[0]=c*u,t[4]=g*l-m,t[8]=f*l+v,t[1]=c*d,t[5]=v*l+f,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,m=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-f*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*d+g,t[10]=f-v*d}else if(e.order==="XZY"){const f=o*c,m=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+v,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dh,e,Uh)}lookAt(e,t,n){const s=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),vi.crossVectors(n,_n),vi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),vi.crossVectors(n,_n)),vi.normalize(),Er.crossVectors(_n,vi),s[0]=vi.x,s[4]=Er.x,s[8]=_n.x,s[1]=vi.y,s[5]=Er.y,s[9]=_n.y,s[2]=vi.z,s[6]=Er.z,s[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],m=n[13],g=n[2],v=n[6],p=n[10],h=n[14],M=n[3],b=n[7],_=n[11],w=n[15],T=s[0],C=s[4],D=s[8],S=s[12],y=s[1],R=s[5],H=s[9],G=s[13],q=s[2],J=s[6],Z=s[10],ee=s[14],j=s[3],he=s[7],xe=s[11],Ne=s[15];return r[0]=o*T+a*y+c*q+l*j,r[4]=o*C+a*R+c*J+l*he,r[8]=o*D+a*H+c*Z+l*xe,r[12]=o*S+a*G+c*ee+l*Ne,r[1]=u*T+d*y+f*q+m*j,r[5]=u*C+d*R+f*J+m*he,r[9]=u*D+d*H+f*Z+m*xe,r[13]=u*S+d*G+f*ee+m*Ne,r[2]=g*T+v*y+p*q+h*j,r[6]=g*C+v*R+p*J+h*he,r[10]=g*D+v*H+p*Z+h*xe,r[14]=g*S+v*G+p*ee+h*Ne,r[3]=M*T+b*y+_*q+w*j,r[7]=M*C+b*R+_*J+w*he,r[11]=M*D+b*H+_*Z+w*xe,r[15]=M*S+b*G+_*ee+w*Ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],m=e[14],g=e[3],v=e[7],p=e[11],h=e[15];return g*(+r*c*d-s*l*d-r*a*f+n*l*f+s*a*m-n*c*m)+v*(+t*c*m-t*l*f+r*o*f-s*o*m+s*l*u-r*c*u)+p*(+t*l*d-t*a*m-r*o*d+n*o*m+r*a*u-n*l*u)+h*(-s*a*u-t*c*d+t*a*f+s*o*d-n*o*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],m=e[11],g=e[12],v=e[13],p=e[14],h=e[15],M=d*p*l-v*f*l+v*c*m-a*p*m-d*c*h+a*f*h,b=g*f*l-u*p*l-g*c*m+o*p*m+u*c*h-o*f*h,_=u*v*l-g*d*l+g*a*m-o*v*m-u*a*h+o*d*h,w=g*d*c-u*v*c-g*a*f+o*v*f+u*a*p-o*d*p,T=t*M+n*b+s*_+r*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=M*C,e[1]=(v*f*r-d*p*r-v*s*m+n*p*m+d*s*h-n*f*h)*C,e[2]=(a*p*r-v*c*r+v*s*l-n*p*l-a*s*h+n*c*h)*C,e[3]=(d*c*r-a*f*r-d*s*l+n*f*l+a*s*m-n*c*m)*C,e[4]=b*C,e[5]=(u*p*r-g*f*r+g*s*m-t*p*m-u*s*h+t*f*h)*C,e[6]=(g*c*r-o*p*r-g*s*l+t*p*l+o*s*h-t*c*h)*C,e[7]=(o*f*r-u*c*r+u*s*l-t*f*l-o*s*m+t*c*m)*C,e[8]=_*C,e[9]=(g*d*r-u*v*r-g*n*m+t*v*m+u*n*h-t*d*h)*C,e[10]=(o*v*r-g*a*r+g*n*l-t*v*l-o*n*h+t*a*h)*C,e[11]=(u*a*r-o*d*r-u*n*l+t*d*l+o*n*m-t*a*m)*C,e[12]=w*C,e[13]=(u*v*s-g*d*s+g*n*f-t*v*f-u*n*p+t*d*p)*C,e[14]=(g*a*s-o*v*s-g*n*c+t*v*c+o*n*p-t*a*p)*C,e[15]=(o*d*s-u*a*s+u*n*c-t*d*c-o*n*f+t*a*f)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,d=a+a,f=r*l,m=r*u,g=r*d,v=o*u,p=o*d,h=a*d,M=c*l,b=c*u,_=c*d,w=n.x,T=n.y,C=n.z;return s[0]=(1-(v+h))*w,s[1]=(m+_)*w,s[2]=(g-b)*w,s[3]=0,s[4]=(m-_)*T,s[5]=(1-(f+h))*T,s[6]=(p+M)*T,s[7]=0,s[8]=(g+b)*C,s[9]=(p-M)*C,s[10]=(1-(f+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=es.set(s[0],s[1],s[2]).length();const o=es.set(s[4],s[5],s[6]).length(),a=es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ln.copy(this);const l=1/r,u=1/o,d=1/a;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=d,Ln.elements[9]*=d,Ln.elements[10]*=d,t.setFromRotationMatrix(Ln),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Jn,c=!1){const l=this.elements,u=2*r/(t-e),d=2*r/(n-s),f=(t+e)/(t-e),m=(n+s)/(n-s);let g,v;if(c)g=r/(o-r),v=o*r/(o-r);else if(a===Jn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===ro)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Jn,c=!1){const l=this.elements,u=2/(t-e),d=2/(n-s),f=-(t+e)/(t-e),m=-(n+s)/(n-s);let g,v;if(c)g=1/(o-r),v=o/(o-r);else if(a===Jn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===ro)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const es=new L,Ln=new Lt,Dh=new L(0,0,0),Uh=new L(1,1,1),vi=new L,Er=new L,_n=new L,ql=new Lt,jl=new ur;class Rn{constructor(e=0,t=0,n=0,s=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ql.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ql,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jl.setFromEuler(this),this.setFromQuaternion(jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class xl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nh=0;const Yl=new L,ts=new ur,ri=new Lt,wr=new L,ks=new L,Oh=new L,kh=new ur,Kl=new L(1,0,0),$l=new L(0,1,0),Zl=new L(0,0,1),Jl={type:"added"},Fh={type:"removed"},ns={type:"childadded",child:null},Oo={type:"childremoved",child:null};class Jt extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new L,t=new Rn,n=new ur,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Lt},normalMatrix:{value:new Je}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(Kl,e)}rotateY(e){return this.rotateOnAxis($l,e)}rotateZ(e){return this.rotateOnAxis(Zl,e)}translateOnAxis(e,t){return Yl.copy(e).applyQuaternion(this.quaternion),this.position.add(Yl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kl,e)}translateY(e){return this.translateOnAxis($l,e)}translateZ(e){return this.translateOnAxis(Zl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wr.copy(e):wr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(ks,wr,this.up):ri.lookAt(wr,ks,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),ts.setFromRotationMatrix(ri),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jl),ns.child=e,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fh),Oo.child=e,this.dispatchEvent(Oo),Oo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jl),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,e,Oh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,kh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Jt.DEFAULT_UP=new L(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new L,oi=new L,ko=new L,ai=new L,is=new L,ss=new L,Ql=new L,Fo=new L,zo=new L,Bo=new L,Ho=new bt,Go=new bt,Vo=new bt;class An{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Pn.subVectors(e,t),s.cross(Pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Pn.subVectors(s,t),oi.subVectors(n,t),ko.subVectors(e,t);const o=Pn.dot(Pn),a=Pn.dot(oi),c=Pn.dot(ko),l=oi.dot(oi),u=oi.dot(ko),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ai.x),c.addScaledVector(o,ai.y),c.addScaledVector(a,ai.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ho.setScalar(0),Go.setScalar(0),Vo.setScalar(0),Ho.fromBufferAttribute(e,t),Go.fromBufferAttribute(e,n),Vo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ho,r.x),o.addScaledVector(Go,r.y),o.addScaledVector(Vo,r.z),o}static isFrontFacing(e,t,n,s){return Pn.subVectors(n,t),oi.subVectors(e,t),Pn.cross(oi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Pn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return An.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;is.subVectors(s,n),ss.subVectors(r,n),Fo.subVectors(e,n);const c=is.dot(Fo),l=ss.dot(Fo);if(c<=0&&l<=0)return t.copy(n);zo.subVectors(e,s);const u=is.dot(zo),d=ss.dot(zo);if(u>=0&&d<=u)return t.copy(s);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(is,o);Bo.subVectors(e,r);const m=is.dot(Bo),g=ss.dot(Bo);if(g>=0&&m<=g)return t.copy(r);const v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(ss,a);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return Ql.subVectors(r,s),a=(d-u)/(d-u+(m-g)),t.copy(s).addScaledVector(Ql,a);const h=1/(p+v+f);return o=v*h,a=f*h,t.copy(n).addScaledVector(is,o).addScaledVector(ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function Wo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=Mh(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Wo(o,r,e+1/3),this.g=Wo(o,r,e),this.b=Wo(o,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=pn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){const n=Au[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return ct.workingToColorSpace(sn.copy(this),e),Math.round(it(sn.r*255,0,255))*65536+Math.round(it(sn.g*255,0,255))*256+Math.round(it(sn.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(sn.copy(this),t);const n=sn.r,s=sn.g,r=sn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=pn){ct.workingToColorSpace(sn.copy(this),e);const t=sn.r,n=sn.g,s=sn.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(Tr);const n=To(_i.h,Tr.h,t),s=To(_i.s,Tr.s,t),r=To(_i.l,Tr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new rt;rt.NAMES=Au;let zh=0;class Ps extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=Ss,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ua,this.blendDst=da,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ua&&(n.blendSrc=this.blendSrc),this.blendDst!==da&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fn extends Ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=hu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new L,Ar=new we;let Bh=0;class kn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ka,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix3(e),this.setXY(t,Ar.x,Ar.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$n(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$n(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$n(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ka&&(e.usage=this.usage),e}}class Cu extends kn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ru extends kn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class St extends kn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Hh=0;const wn=new Lt,Xo=new Jt,rs=new L,xn=new dr,Fs=new dr,Zt=new L;class on extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Eu(e)?Ru:Cu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return Xo.lookAt(e),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new St(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _l);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(xn.min,Fs.min),xn.expandByPoint(Zt),Zt.addVectors(xn.max,Fs.max),xn.expandByPoint(Zt)):(xn.expandByPoint(Fs.min),xn.expandByPoint(Fs.max))}xn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Zt.fromBufferAttribute(a,l),c&&(rs.fromBufferAttribute(e,l),Zt.add(rs)),s=Math.max(s,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new L,c[D]=new L;const l=new L,u=new L,d=new L,f=new we,m=new we,g=new we,v=new L,p=new L;function h(D,S,y){l.fromBufferAttribute(n,D),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,y),f.fromBufferAttribute(r,D),m.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),u.sub(l),d.sub(l),m.sub(f),g.sub(f);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(R),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(R),a[D].add(v),a[S].add(v),a[y].add(v),c[D].add(p),c[S].add(p),c[y].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let D=0,S=M.length;D<S;++D){const y=M[D],R=y.start,H=y.count;for(let G=R,q=R+H;G<q;G+=3)h(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const b=new L,_=new L,w=new L,T=new L;function C(D){w.fromBufferAttribute(s,D),T.copy(w);const S=a[D];b.copy(S),b.sub(w.multiplyScalar(w.dot(S))).normalize(),_.crossVectors(T,S);const R=_.dot(c[D])<0?-1:1;o.setXYZW(D,b.x,b.y,b.z,R)}for(let D=0,S=M.length;D<S;++D){const y=M[D],R=y.start,H=y.count;for(let G=R,q=R+H;G<q;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,u=new L,d=new L;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let m=0,g=0;for(let v=0,p=c.length;v<p;v++){a.isInterleavedBufferAttribute?m=c[v]*a.data.stride+a.offset:m=c[v]*u;for(let h=0;h<u;h++)f[g++]=l[m++]}return new kn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],m=e(f,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ec=new Lt,Di=new Tu,Cr=new _l,tc=new L,Rr=new L,Ir=new L,Lr=new L,qo=new L,Pr=new L,nc=new L,Dr=new L;class X extends Jt{constructor(e=new on,t=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Pr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(qo.fromBufferAttribute(d,e),o?Pr.addScaledVector(qo,u):Pr.addScaledVector(qo.sub(t),u))}t.add(Pr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(r),Di.copy(e.ray).recast(e.near),!(Cr.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Cr,tc)===null||Di.origin.distanceToSquared(tc)>(e.far-e.near)**2))&&(ec.copy(r).invert(),Di.copy(e.ray).applyMatrix4(ec),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],h=o[p.materialIndex],M=Math.max(p.start,m.start),b=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let _=M,w=b;_<w;_+=3){const T=a.getX(_),C=a.getX(_+1),D=a.getX(_+2);s=Ur(this,h,e,n,l,u,d,T,C,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,h=v;p<h;p+=3){const M=a.getX(p),b=a.getX(p+1),_=a.getX(p+2);s=Ur(this,o,e,n,l,u,d,M,b,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],h=o[p.materialIndex],M=Math.max(p.start,m.start),b=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let _=M,w=b;_<w;_+=3){const T=_,C=_+1,D=_+2;s=Ur(this,h,e,n,l,u,d,T,C,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=g,h=v;p<h;p+=3){const M=p,b=p+1,_=p+2;s=Ur(this,o,e,n,l,u,d,M,b,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Gh(i,e,t,n,s,r,o,a){let c;if(e.side===mn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Ti,a),c===null)return null;Dr.copy(a),Dr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Dr);return l<t.near||l>t.far?null:{distance:l,point:Dr.clone(),object:i}}function Ur(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Rr),i.getVertexPosition(c,Ir),i.getVertexPosition(l,Lr);const u=Gh(i,e,t,n,Rr,Ir,Lr,nc);if(u){const d=new L;An.getBarycoord(nc,Rr,Ir,Lr,d),s&&(u.uv=An.getInterpolatedAttribute(s,a,c,l,d,new we)),r&&(u.uv1=An.getInterpolatedAttribute(r,a,c,l,d,new we)),o&&(u.normal=An.getInterpolatedAttribute(o,a,c,l,d,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new L,materialIndex:0};An.getNormal(Rr,Ir,Lr,f.normal),u.face=f,u.barycoord=d}return u}class mt extends on{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new St(l,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(d,2));function g(v,p,h,M,b,_,w,T,C,D,S){const y=_/C,R=w/D,H=_/2,G=w/2,q=T/2,J=C+1,Z=D+1;let ee=0,j=0;const he=new L;for(let xe=0;xe<Z;xe++){const Ne=xe*R-G;for(let tt=0;tt<J;tt++){const Pt=tt*y-H;he[v]=Pt*M,he[p]=Ne*b,he[h]=q,l.push(he.x,he.y,he.z),he[v]=0,he[p]=0,he[h]=T>0?1:-1,u.push(he.x,he.y,he.z),d.push(tt/C),d.push(1-xe/D),ee+=1}}for(let xe=0;xe<D;xe++)for(let Ne=0;Ne<C;Ne++){const tt=f+Ne+J*xe,Pt=f+Ne+J*(xe+1),Mt=f+(Ne+1)+J*(xe+1),$=f+(Ne+1)+J*xe;c.push(tt,Pt,$),c.push(Pt,Mt,$),j+=6}a.addGroup(m,j,S),m+=j,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Is(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function un(i){const e={};for(let t=0;t<i.length;t++){const n=Is(i[t]);for(const s in n)e[s]=n[s]}return e}function Vh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Iu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const Wh={clone:Is,merge:un};var Xh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends Ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xh,this.fragmentShader=qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=Vh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Lu extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new L,ic=new we,sc=new we;class yn extends Lu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$a*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,ic,sc),t.subVectors(sc,ic)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const os=-90,as=1;class jh extends Jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new yn(os,as,e,t);s.layers=this.layers,this.add(s);const r=new yn(os,as,e,t);r.layers=this.layers,this.add(r);const o=new yn(os,as,e,t);o.layers=this.layers,this.add(o);const a=new yn(os,as,e,t);a.layers=this.layers,this.add(a);const c=new yn(os,as,e,t);c.layers=this.layers,this.add(c);const l=new yn(os,as,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Pu extends dn{constructor(e=[],t=As,n,s,r,o,a,c,l,u){super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yh extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Pu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new mt(5,5,5),r=new Ai({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:Si});r.uniforms.tEquirect.value=t;const o=new X(s,r),a=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Zn),new jh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class ht extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kh={type:"move"};class jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),h=this._getHandJoint(l,v);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kh)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class bl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new rt(e),this.density=t}clone(){return new bl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class $h extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Zh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ka,this.updateRanges=[],this.version=0,this.uuid=Ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ln=new L;class ao{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=$n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new kn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ao(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Du extends Ps{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ls;const zs=new L,cs=new L,us=new L,ds=new we,Bs=new we,Uu=new Lt,Nr=new L,Hs=new L,Or=new L,rc=new we,Yo=new we,oc=new we;class Jh extends Jt{constructor(e=new Du){if(super(),this.isSprite=!0,this.type="Sprite",ls===void 0){ls=new on;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Zh(t,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new ao(n,3,0,!1)),ls.setAttribute("uv",new ao(n,2,3,!1))}this.geometry=ls,this.material=e,this.center=new we(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),Uu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),us.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-us.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;kr(Nr.set(-.5,-.5,0),us,o,cs,s,r),kr(Hs.set(.5,-.5,0),us,o,cs,s,r),kr(Or.set(.5,.5,0),us,o,cs,s,r),rc.set(0,0),Yo.set(1,0),oc.set(1,1);let a=e.ray.intersectTriangle(Nr,Hs,Or,!1,zs);if(a===null&&(kr(Hs.set(-.5,.5,0),us,o,cs,s,r),Yo.set(0,1),a=e.ray.intersectTriangle(Nr,Or,Hs,!1,zs),a===null))return;const c=e.ray.origin.distanceTo(zs);c<e.near||c>e.far||t.push({distance:c,point:zs.clone(),uv:An.getInterpolation(zs,Nr,Hs,Or,rc,Yo,oc,new we),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function kr(i,e,t,n,s,r){ds.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Bs.x=r*ds.x-s*ds.y,Bs.y=s*ds.x+r*ds.y):Bs.copy(ds),i.copy(e),i.x+=Bs.x,i.y+=Bs.y,i.applyMatrix4(Uu)}const Ko=new L,Qh=new L,ef=new Je;class ki{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ko.subVectors(n,t).cross(Qh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ko),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ef.getNormalMatrix(e),s=this.coplanarPoint(Ko).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new _l,tf=new we(.5,.5),Fr=new L;class yl{constructor(e=new ki,t=new ki,n=new ki,s=new ki,r=new ki,o=new ki){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],f=r[6],m=r[7],g=r[8],v=r[9],p=r[10],h=r[11],M=r[12],b=r[13],_=r[14],w=r[15];if(s[0].setComponents(l-o,m-u,h-g,w-M).normalize(),s[1].setComponents(l+o,m+u,h+g,w+M).normalize(),s[2].setComponents(l+a,m+d,h+v,w+b).normalize(),s[3].setComponents(l-a,m-d,h-v,w-b).normalize(),n)s[4].setComponents(c,f,p,_).normalize(),s[5].setComponents(l-c,m-f,h-p,w-_).normalize();else if(s[4].setComponents(l-c,m-f,h-p,w-_).normalize(),t===Jn)s[5].setComponents(l+c,m+f,h+p,w+_).normalize();else if(t===ro)s[5].setComponents(c,f,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){Ui.center.set(0,0,0);const t=tf.distanceTo(e.center);return Ui.radius=.7071067811865476+t,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Fr.x=s.normal.x>0?e.max.x:e.min.x,Fr.y=s.normal.y>0?e.max.y:e.min.y,Fr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class nf extends dn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nu extends dn{constructor(e,t,n=Wi,s,r,o,a=On,c=On,l,u=ir,d=1){if(u!==ir&&u!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Cn extends on{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],u=t/2,d=Math.PI/2*e,f=t,m=2*d+f,g=n*2+r,v=s+1,p=new L,h=new L;for(let M=0;M<=g;M++){let b=0,_=0,w=0,T=0;if(M<=n){const S=M/n,y=S*Math.PI/2;_=-u-e*Math.cos(y),w=e*Math.sin(y),T=-e*Math.cos(y),b=S*d}else if(M<=n+r){const S=(M-n)/r;_=-u+S*t,w=e,T=0,b=d+S*f}else{const S=(M-n-r)/n,y=S*Math.PI/2;_=u+e*Math.sin(y),w=e*Math.cos(y),T=e*Math.sin(y),b=d+f+S*d}const C=Math.max(0,Math.min(1,b/m));let D=0;M===0?D=.5/s:M===g&&(D=-.5/s);for(let S=0;S<=s;S++){const y=S/s,R=y*Math.PI*2,H=Math.sin(R),G=Math.cos(R);h.x=-w*G,h.y=_,h.z=w*H,a.push(h.x,h.y,h.z),p.set(-w*G,T,w*H),p.normalize(),c.push(p.x,p.y,p.z),l.push(y+D,C)}if(M>0){const S=(M-1)*v;for(let y=0;y<s;y++){const R=S+y,H=S+y+1,G=M*v+y,q=M*v+y+1;o.push(R,H,G),o.push(H,q,G)}}}this.setIndex(o),this.setAttribute("position",new St(a,3)),this.setAttribute("normal",new St(c,3)),this.setAttribute("uv",new St(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cn(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Se extends on{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],m=[];let g=0;const v=[],p=n/2;let h=0;M(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new St(d,3)),this.setAttribute("normal",new St(f,3)),this.setAttribute("uv",new St(m,2));function M(){const _=new L,w=new L;let T=0;const C=(t-e)/n;for(let D=0;D<=r;D++){const S=[],y=D/r,R=y*(t-e)+e;for(let H=0;H<=s;H++){const G=H/s,q=G*c+a,J=Math.sin(q),Z=Math.cos(q);w.x=R*J,w.y=-y*n+p,w.z=R*Z,d.push(w.x,w.y,w.z),_.set(J,C,Z).normalize(),f.push(_.x,_.y,_.z),m.push(G,1-y),S.push(g++)}v.push(S)}for(let D=0;D<s;D++)for(let S=0;S<r;S++){const y=v[S][D],R=v[S+1][D],H=v[S+1][D+1],G=v[S][D+1];(e>0||S!==0)&&(u.push(y,R,G),T+=3),(t>0||S!==r-1)&&(u.push(R,H,G),T+=3)}l.addGroup(h,T,0),h+=T}function b(_){const w=g,T=new we,C=new L;let D=0;const S=_===!0?e:t,y=_===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,p*y,0),f.push(0,y,0),m.push(.5,.5),g++;const R=g;for(let H=0;H<=s;H++){const q=H/s*c+a,J=Math.cos(q),Z=Math.sin(q);C.x=S*Z,C.y=p*y,C.z=S*J,d.push(C.x,C.y,C.z),f.push(0,y,0),T.x=J*.5+.5,T.y=Z*.5*y+.5,m.push(T.x,T.y),g++}for(let H=0;H<s;H++){const G=w+H,q=R+H;_===!0?u.push(q,q+1,G):u.push(q+1,q,G),D+=3}l.addGroup(h,D,_===!0?1:2),h+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Se(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ut extends Se{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ut(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mo extends on{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new St(r,3)),this.setAttribute("normal",new St(r.slice(),3)),this.setAttribute("uv",new St(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const b=new L,_=new L,w=new L;for(let T=0;T<t.length;T+=3)m(t[T+0],b),m(t[T+1],_),m(t[T+2],w),c(b,_,w,M)}function c(M,b,_,w){const T=w+1,C=[];for(let D=0;D<=T;D++){C[D]=[];const S=M.clone().lerp(_,D/T),y=b.clone().lerp(_,D/T),R=T-D;for(let H=0;H<=R;H++)H===0&&D===T?C[D][H]=S:C[D][H]=S.clone().lerp(y,H/R)}for(let D=0;D<T;D++)for(let S=0;S<2*(T-D)-1;S++){const y=Math.floor(S/2);S%2===0?(f(C[D][y+1]),f(C[D+1][y]),f(C[D][y])):(f(C[D][y+1]),f(C[D+1][y+1]),f(C[D+1][y]))}}function l(M){const b=new L;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(M),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function u(){const M=new L;for(let b=0;b<r.length;b+=3){M.x=r[b+0],M.y=r[b+1],M.z=r[b+2];const _=p(M)/2/Math.PI+.5,w=h(M)/Math.PI+.5;o.push(_,1-w)}g(),d()}function d(){for(let M=0;M<o.length;M+=6){const b=o[M+0],_=o[M+2],w=o[M+4],T=Math.max(b,_,w),C=Math.min(b,_,w);T>.9&&C<.1&&(b<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),w<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function m(M,b){const _=M*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function g(){const M=new L,b=new L,_=new L,w=new L,T=new we,C=new we,D=new we;for(let S=0,y=0;S<r.length;S+=9,y+=6){M.set(r[S+0],r[S+1],r[S+2]),b.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),T.set(o[y+0],o[y+1]),C.set(o[y+2],o[y+3]),D.set(o[y+4],o[y+5]),w.copy(M).add(b).add(_).divideScalar(3);const R=p(w);v(T,y+0,M,R),v(C,y+2,b,R),v(D,y+4,_,R)}}function v(M,b,_,w){w<0&&M.x===1&&(o[b]=M.x-1),_.x===0&&_.z===0&&(o[b]=w/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function h(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.vertices,e.indices,e.radius,e.details)}}class rr extends mo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new rr(e.radius,e.detail)}}class fi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],f=n[s+1]-u,m=(o-u)/f;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new we:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new L,s=[],r=[],o=[],a=new L,c=new Lt;for(let m=0;m<=e;m++){const g=m/e;s[m]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(it(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(it(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ou extends fi{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new we){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,m=l-this.aY;c=f*u-m*d+this.aX,l=f*d+m*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class sf extends Ou{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Sl(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,m=(a-o)/u-(c-o)/(u+d)+(c-a)/d;f*=u,m*=u,s(o,a,f,m)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const zr=new L,$o=new Sl,Zo=new Sl,Jo=new Sl;class lo extends fi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(zr.subVectors(s[0],s[1]).add(s[0]),l=zr);const d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(zr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=zr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),m),v=Math.pow(d.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(u),m);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),$o.initNonuniformCatmullRom(l.x,d.x,f.x,u.x,g,v,p),Zo.initNonuniformCatmullRom(l.y,d.y,f.y,u.y,g,v,p),Jo.initNonuniformCatmullRom(l.z,d.z,f.z,u.z,g,v,p)}else this.curveType==="catmullrom"&&($o.initCatmullRom(l.x,d.x,f.x,u.x,this.tension),Zo.initCatmullRom(l.y,d.y,f.y,u.y,this.tension),Jo.initCatmullRom(l.z,d.z,f.z,u.z,this.tension));return n.set($o.calc(c),Zo.calc(c),Jo.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ac(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function rf(i,e){const t=1-i;return t*t*e}function of(i,e){return 2*(1-i)*i*e}function af(i,e){return i*i*e}function $s(i,e,t,n){return rf(i,e)+of(i,t)+af(i,n)}function lf(i,e){const t=1-i;return t*t*t*e}function cf(i,e){const t=1-i;return 3*t*t*i*e}function uf(i,e){return 3*(1-i)*i*i*e}function df(i,e){return i*i*i*e}function Zs(i,e,t,n,s){return lf(i,e)+cf(i,t)+uf(i,n)+df(i,s)}class hf extends fi{constructor(e=new we,t=new we,n=new we,s=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new we){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zs(e,s.x,r.x,o.x,a.x),Zs(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ff extends fi{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zs(e,s.x,r.x,o.x,a.x),Zs(e,s.y,r.y,o.y,a.y),Zs(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class pf extends fi{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mf extends fi{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gf extends fi{constructor(e=new we,t=new we,n=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new we){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set($s(e,s.x,r.x,o.x),$s(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ku extends fi{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set($s(e,s.x,r.x,o.x),$s(e,s.y,r.y,o.y),$s(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vf extends fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(ac(a,c.x,l.x,u.x,d.x),ac(a,c.y,l.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new we().fromArray(s))}return this}}var _f=Object.freeze({__proto__:null,ArcCurve:sf,CatmullRomCurve3:lo,CubicBezierCurve:hf,CubicBezierCurve3:ff,EllipseCurve:Ou,LineCurve:pf,LineCurve3:mf,QuadraticBezierCurve:gf,QuadraticBezierCurve3:ku,SplineCurve:vf});class Ls extends mo{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ls(e.radius,e.detail)}}class go extends on{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,d=e/a,f=t/c,m=[],g=[],v=[],p=[];for(let h=0;h<u;h++){const M=h*f-o;for(let b=0;b<l;b++){const _=b*d-r;g.push(_,-M,0),v.push(0,0,1),p.push(b/a),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let M=0;M<a;M++){const b=M+l*h,_=M+l*(h+1),w=M+1+l*(h+1),T=M+1+l*h;m.push(b,_,T),m.push(_,w,T)}this.setIndex(m),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(v,3)),this.setAttribute("uv",new St(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.width,e.height,e.widthSegments,e.heightSegments)}}class ge extends on{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new L,f=new L,m=[],g=[],v=[],p=[];for(let h=0;h<=n;h++){const M=[],b=h/n;let _=0;h===0&&o===0?_=.5/t:h===n&&c===Math.PI&&(_=-.5/t);for(let w=0;w<=t;w++){const T=w/t;d.x=-e*Math.cos(s+T*r)*Math.sin(o+b*a),d.y=e*Math.cos(o+b*a),d.z=e*Math.sin(s+T*r)*Math.sin(o+b*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),p.push(T+_,1-b),M.push(l++)}u.push(M)}for(let h=0;h<n;h++)for(let M=0;M<t;M++){const b=u[h][M+1],_=u[h][M],w=u[h+1][M],T=u[h+1][M+1];(h!==0||o>0)&&m.push(b,_,T),(h!==n-1||c<Math.PI)&&m.push(_,w,T)}this.setIndex(m),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(v,3)),this.setAttribute("uv",new St(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ge(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xe extends on{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new L,d=new L,f=new L;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){const v=g/s*r,p=m/n*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(v),d.y=(e+t*Math.cos(p))*Math.sin(v),d.z=t*Math.sin(p),a.push(d.x,d.y,d.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),f.subVectors(d,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){const v=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,h=(s+1)*(m-1)+g,M=(s+1)*m+g;o.push(v,p,M),o.push(p,h,M)}this.setIndex(o),this.setAttribute("position",new St(a,3)),this.setAttribute("normal",new St(c,3)),this.setAttribute("uv",new St(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xe(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class vo extends on{constructor(e=1,t=.4,n=64,s=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:s,p:r,q:o},n=Math.floor(n),s=Math.floor(s);const a=[],c=[],l=[],u=[],d=new L,f=new L,m=new L,g=new L,v=new L,p=new L,h=new L;for(let b=0;b<=n;++b){const _=b/n*r*Math.PI*2;M(_,r,o,e,m),M(_+.01,r,o,e,g),p.subVectors(g,m),h.addVectors(g,m),v.crossVectors(p,h),h.crossVectors(v,p),v.normalize(),h.normalize();for(let w=0;w<=s;++w){const T=w/s*Math.PI*2,C=-t*Math.cos(T),D=t*Math.sin(T);d.x=m.x+(C*h.x+D*v.x),d.y=m.y+(C*h.y+D*v.y),d.z=m.z+(C*h.z+D*v.z),c.push(d.x,d.y,d.z),f.subVectors(d,m).normalize(),l.push(f.x,f.y,f.z),u.push(b/n),u.push(w/s)}}for(let b=1;b<=n;b++)for(let _=1;_<=s;_++){const w=(s+1)*(b-1)+(_-1),T=(s+1)*b+(_-1),C=(s+1)*b+_,D=(s+1)*(b-1)+_;a.push(w,T,D),a.push(T,C,D)}this.setIndex(a),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(l,3)),this.setAttribute("uv",new St(u,2));function M(b,_,w,T,C){const D=Math.cos(b),S=Math.sin(b),y=w/_*b,R=Math.cos(y);C.x=T*(2+R)*.5*D,C.y=T*(2+R)*S*.5,C.z=T*Math.sin(y)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class or extends on{constructor(e=new ku(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,c=new L,l=new we;let u=new L;const d=[],f=[],m=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new St(d,3)),this.setAttribute("normal",new St(f,3)),this.setAttribute("uv",new St(m,2));function v(){for(let b=0;b<t;b++)p(b);p(r===!1?t:0),M(),h()}function p(b){u=e.getPointAt(b/t,u);const _=o.normals[b],w=o.binormals[b];for(let T=0;T<=s;T++){const C=T/s*Math.PI*2,D=Math.sin(C),S=-Math.cos(C);c.x=S*_.x+D*w.x,c.y=S*_.y+D*w.y,c.z=S*_.z+D*w.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,d.push(a.x,a.y,a.z)}}function h(){for(let b=1;b<=t;b++)for(let _=1;_<=s;_++){const w=(s+1)*(b-1)+(_-1),T=(s+1)*b+(_-1),C=(s+1)*b+_,D=(s+1)*(b-1)+_;g.push(w,T,D),g.push(T,C,D)}}function M(){for(let b=0;b<=t;b++)for(let _=0;_<=s;_++)l.x=b/t,l.y=_/s,m.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new or(new _f[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Fu extends Ps{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Su,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xf extends Ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bf extends Ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ml extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class yf extends Ml{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Qo=new Lt,lc=new L,cc=new L;class zu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yl,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;lc.setFromMatrixPosition(e.matrixWorld),t.position.copy(lc),cc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cc),t.updateMatrixWorld(),Qo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const uc=new Lt,Gs=new L,ea=new L;class Sf extends zu{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new bt(2,1,1,1),new bt(0,1,1,1),new bt(3,1,1,1),new bt(1,1,1,1),new bt(3,0,1,1),new bt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Gs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gs),ea.copy(n.position),ea.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ea),n.updateMatrixWorld(),s.makeTranslation(-Gs.x,-Gs.y,-Gs.z),uc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uc,n.coordinateSystem,n.reversedDepth)}}class ei extends Ml{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Sf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Bu extends Lu{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Mf extends zu{constructor(){super(new Bu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ef extends Ml{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new Mf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wf extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Tf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const dc=new Lt;class Af{constructor(e,t,n=0,s=1/0){this.ray=new Tu(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new xl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return dc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dc),this}intersectObject(e,t=!0,n=[]){return Za(e,this,n,t),n.sort(hc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Za(e[s],this,n,t);return n.sort(hc),n}}function hc(i,e){return i.distance-e.distance}function Za(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Za(r[o],e,t,!0)}}class Cf extends ji{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function fc(i,e,t,n){const s=Rf(n);switch(t){case vu:return i*e;case xu:return i*e/s.components*s.byteLength;case pl:return i*e/s.components*s.byteLength;case bu:return i*e*2/s.components*s.byteLength;case ml:return i*e*2/s.components*s.byteLength;case _u:return i*e*3/s.components*s.byteLength;case Nn:return i*e*4/s.components*s.byteLength;case gl:return i*e*4/s.components*s.byteLength;case Kr:case $r:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zr:case Jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ea:case Ta:return Math.max(i,16)*Math.max(e,8)/4;case Ma:case wa:return Math.max(i,8)*Math.max(e,8)/2;case Aa:case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case La:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ka:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Va:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Qr:case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case yu:case qa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ja:case Ya:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rf(i){switch(i){case Qn:case pu:return{byteLength:1,components:1};case tr:case mu:case cr:return{byteLength:2,components:1};case hl:case fl:return{byteLength:2,components:4};case Wi:case dl:case di:return{byteLength:4,components:1};case gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ul);function Hu(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function If(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],v=d[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const v=d[m];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Lf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pf=`#ifdef USE_ALPHAHASH
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
#endif`,Df=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kf=`#ifdef USE_AOMAP
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
#endif`,Ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zf=`#ifdef USE_BATCHING
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
#endif`,Bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wf=`#ifdef USE_IRIDESCENCE
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
#endif`,Xf=`#ifdef USE_BUMPMAP
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
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ep=`#define PI 3.141592653589793
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
} // validated`,tp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,np=`vec3 transformedNormal = objectNormal;
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
#endif`,ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",lp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cp=`#ifdef USE_ENVMAP
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
#endif`,up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dp=`#ifdef USE_ENVMAP
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
#endif`,hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
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
#endif`,pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_p=`#ifdef USE_GRADIENTMAP
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
}`,xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sp=`uniform bool receiveShadow;
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
#endif`,Mp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cp=`PhysicalMaterial material;
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
#endif`,Rp=`struct PhysicalMaterial {
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
}`,Ip=`
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
#endif`,Lp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Up=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Np=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Op=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bp=`#if defined( USE_POINTS_UV )
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
#endif`,Hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qp=`#ifdef USE_MORPHTARGETS
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
#endif`,jp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qp=`#ifdef USE_NORMALMAP
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
#endif`,em=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mm=`float getShadowMask() {
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
}`,gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vm=`#ifdef USE_SKINNING
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
#endif`,_m=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xm=`#ifdef USE_SKINNING
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
#endif`,bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Em=`#ifdef USE_TRANSMISSION
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
#endif`,wm=`#ifdef USE_TRANSMISSION
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
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Im=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lm=`uniform sampler2D t2D;
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
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`#include <common>
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
}`,km=`#if DEPTH_PACKING == 3200
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
}`,Fm=`#define DISTANCE
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
}`,zm=`#define DISTANCE
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
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`uniform float scale;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Wm=`#include <common>
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
}`,Xm=`uniform vec3 diffuse;
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
}`,qm=`#define LAMBERT
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
}`,jm=`#define LAMBERT
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
}`,Ym=`#define MATCAP
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
}`,Km=`#define MATCAP
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
}`,$m=`#define NORMAL
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
}`,Zm=`#define NORMAL
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
}`,Jm=`#define PHONG
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
}`,Qm=`#define PHONG
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
}`,e0=`#define STANDARD
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
}`,t0=`#define STANDARD
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
}`,n0=`#define TOON
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
}`,i0=`#define TOON
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
}`,s0=`uniform float size;
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
}`,r0=`uniform vec3 diffuse;
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
}`,o0=`#include <common>
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
}`,a0=`uniform vec3 color;
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
}`,l0=`uniform float rotation;
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
}`,c0=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Lf,alphahash_pars_fragment:Pf,alphamap_fragment:Df,alphamap_pars_fragment:Uf,alphatest_fragment:Nf,alphatest_pars_fragment:Of,aomap_fragment:kf,aomap_pars_fragment:Ff,batching_pars_vertex:zf,batching_vertex:Bf,begin_vertex:Hf,beginnormal_vertex:Gf,bsdfs:Vf,iridescence_fragment:Wf,bumpmap_pars_fragment:Xf,clipping_planes_fragment:qf,clipping_planes_pars_fragment:jf,clipping_planes_pars_vertex:Yf,clipping_planes_vertex:Kf,color_fragment:$f,color_pars_fragment:Zf,color_pars_vertex:Jf,color_vertex:Qf,common:ep,cube_uv_reflection_fragment:tp,defaultnormal_vertex:np,displacementmap_pars_vertex:ip,displacementmap_vertex:sp,emissivemap_fragment:rp,emissivemap_pars_fragment:op,colorspace_fragment:ap,colorspace_pars_fragment:lp,envmap_fragment:cp,envmap_common_pars_fragment:up,envmap_pars_fragment:dp,envmap_pars_vertex:hp,envmap_physical_pars_fragment:Mp,envmap_vertex:fp,fog_vertex:pp,fog_pars_vertex:mp,fog_fragment:gp,fog_pars_fragment:vp,gradientmap_pars_fragment:_p,lightmap_pars_fragment:xp,lights_lambert_fragment:bp,lights_lambert_pars_fragment:yp,lights_pars_begin:Sp,lights_toon_fragment:Ep,lights_toon_pars_fragment:wp,lights_phong_fragment:Tp,lights_phong_pars_fragment:Ap,lights_physical_fragment:Cp,lights_physical_pars_fragment:Rp,lights_fragment_begin:Ip,lights_fragment_maps:Lp,lights_fragment_end:Pp,logdepthbuf_fragment:Dp,logdepthbuf_pars_fragment:Up,logdepthbuf_pars_vertex:Np,logdepthbuf_vertex:Op,map_fragment:kp,map_pars_fragment:Fp,map_particle_fragment:zp,map_particle_pars_fragment:Bp,metalnessmap_fragment:Hp,metalnessmap_pars_fragment:Gp,morphinstance_vertex:Vp,morphcolor_vertex:Wp,morphnormal_vertex:Xp,morphtarget_pars_vertex:qp,morphtarget_vertex:jp,normal_fragment_begin:Yp,normal_fragment_maps:Kp,normal_pars_fragment:$p,normal_pars_vertex:Zp,normal_vertex:Jp,normalmap_pars_fragment:Qp,clearcoat_normal_fragment_begin:em,clearcoat_normal_fragment_maps:tm,clearcoat_pars_fragment:nm,iridescence_pars_fragment:im,opaque_fragment:sm,packing:rm,premultiplied_alpha_fragment:om,project_vertex:am,dithering_fragment:lm,dithering_pars_fragment:cm,roughnessmap_fragment:um,roughnessmap_pars_fragment:dm,shadowmap_pars_fragment:hm,shadowmap_pars_vertex:fm,shadowmap_vertex:pm,shadowmask_pars_fragment:mm,skinbase_vertex:gm,skinning_pars_vertex:vm,skinning_vertex:_m,skinnormal_vertex:xm,specularmap_fragment:bm,specularmap_pars_fragment:ym,tonemapping_fragment:Sm,tonemapping_pars_fragment:Mm,transmission_fragment:Em,transmission_pars_fragment:wm,uv_pars_fragment:Tm,uv_pars_vertex:Am,uv_vertex:Cm,worldpos_vertex:Rm,background_vert:Im,background_frag:Lm,backgroundCube_vert:Pm,backgroundCube_frag:Dm,cube_vert:Um,cube_frag:Nm,depth_vert:Om,depth_frag:km,distanceRGBA_vert:Fm,distanceRGBA_frag:zm,equirect_vert:Bm,equirect_frag:Hm,linedashed_vert:Gm,linedashed_frag:Vm,meshbasic_vert:Wm,meshbasic_frag:Xm,meshlambert_vert:qm,meshlambert_frag:jm,meshmatcap_vert:Ym,meshmatcap_frag:Km,meshnormal_vert:$m,meshnormal_frag:Zm,meshphong_vert:Jm,meshphong_frag:Qm,meshphysical_vert:e0,meshphysical_frag:t0,meshtoon_vert:n0,meshtoon_frag:i0,points_vert:s0,points_frag:r0,shadow_vert:o0,shadow_frag:a0,sprite_vert:l0,sprite_frag:c0},ue={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Kn={basic:{uniforms:un([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:un([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new rt(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:un([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:un([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:un([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new rt(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:un([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:un([ue.points,ue.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:un([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:un([ue.common,ue.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:un([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:un([ue.sprite,ue.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:un([ue.common,ue.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:un([ue.lights,ue.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Kn.physical={uniforms:un([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Br={r:0,b:0,g:0},Ni=new Rn,u0=new Lt;function d0(i,e,t,n,s,r,o){const a=new rt(0);let c=r===!0?0:1,l,u,d=null,f=0,m=null;function g(b){let _=b.isScene===!0?b.background:null;return _&&_.isTexture&&(_=(b.backgroundBlurriness>0?t:e).get(_)),_}function v(b){let _=!1;const w=g(b);w===null?h(a,c):w&&w.isColor&&(h(w,1),_=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,_){const w=g(_);w&&(w.isCubeTexture||w.mapping===po)?(u===void 0&&(u=new X(new mt(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:Is(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ni.copy(_.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(u0.makeRotationFromEuler(Ni)),u.material.toneMapped=ct.getTransfer(w.colorSpace)!==_t,(d!==w||f!==w.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=w,f=w.version,m=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new X(new go(2,2),new Ai({name:"BackgroundMaterial",uniforms:Is(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ct.getTransfer(w.colorSpace)!==_t,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||f!==w.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=w,f=w.version,m=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function h(b,_){b.getRGB(Br,Iu(i)),n.buffers.color.setClear(Br.r,Br.g,Br.b,_,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,_=1){a.set(b),c=_,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,h(a,c)},render:v,addToRenderList:p,dispose:M}}function h0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(y,R,H,G,q){let J=!1;const Z=d(G,H,R);r!==Z&&(r=Z,l(r.object)),J=m(y,G,H,q),J&&g(y,G,H,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,_(y,R,H,G),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function d(y,R,H){const G=H.wireframe===!0;let q=n[y.id];q===void 0&&(q={},n[y.id]=q);let J=q[R.id];J===void 0&&(J={},q[R.id]=J);let Z=J[G];return Z===void 0&&(Z=f(c()),J[G]=Z),Z}function f(y){const R=[],H=[],G=[];for(let q=0;q<t;q++)R[q]=0,H[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:H,attributeDivisors:G,object:y,attributes:{},index:null}}function m(y,R,H,G){const q=r.attributes,J=R.attributes;let Z=0;const ee=H.getAttributes();for(const j in ee)if(ee[j].location>=0){const xe=q[j];let Ne=J[j];if(Ne===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(Ne=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(Ne=y.instanceColor)),xe===void 0||xe.attribute!==Ne||Ne&&xe.data!==Ne.data)return!0;Z++}return r.attributesNum!==Z||r.index!==G}function g(y,R,H,G){const q={},J=R.attributes;let Z=0;const ee=H.getAttributes();for(const j in ee)if(ee[j].location>=0){let xe=J[j];xe===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(xe=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(xe=y.instanceColor));const Ne={};Ne.attribute=xe,xe&&xe.data&&(Ne.data=xe.data),q[j]=Ne,Z++}r.attributes=q,r.attributesNum=Z,r.index=G}function v(){const y=r.newAttributes;for(let R=0,H=y.length;R<H;R++)y[R]=0}function p(y){h(y,0)}function h(y,R){const H=r.newAttributes,G=r.enabledAttributes,q=r.attributeDivisors;H[y]=1,G[y]===0&&(i.enableVertexAttribArray(y),G[y]=1),q[y]!==R&&(i.vertexAttribDivisor(y,R),q[y]=R)}function M(){const y=r.newAttributes,R=r.enabledAttributes;for(let H=0,G=R.length;H<G;H++)R[H]!==y[H]&&(i.disableVertexAttribArray(H),R[H]=0)}function b(y,R,H,G,q,J,Z){Z===!0?i.vertexAttribIPointer(y,R,H,q,J):i.vertexAttribPointer(y,R,H,G,q,J)}function _(y,R,H,G){v();const q=G.attributes,J=H.getAttributes(),Z=R.defaultAttributeValues;for(const ee in J){const j=J[ee];if(j.location>=0){let he=q[ee];if(he===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&(he=y.instanceColor)),he!==void 0){const xe=he.normalized,Ne=he.itemSize,tt=e.get(he);if(tt===void 0)continue;const Pt=tt.buffer,Mt=tt.type,$=tt.bytesPerElement,fe=Mt===i.INT||Mt===i.UNSIGNED_INT||he.gpuType===dl;if(he.isInterleavedBufferAttribute){const ae=he.data,He=ae.stride,Ge=he.offset;if(ae.isInstancedInterleavedBuffer){for(let Ye=0;Ye<j.locationSize;Ye++)h(j.location+Ye,ae.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ye=0;Ye<j.locationSize;Ye++)p(j.location+Ye);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let Ye=0;Ye<j.locationSize;Ye++)b(j.location+Ye,Ne/j.locationSize,Mt,xe,He*$,(Ge+Ne/j.locationSize*Ye)*$,fe)}else{if(he.isInstancedBufferAttribute){for(let ae=0;ae<j.locationSize;ae++)h(j.location+ae,he.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ae=0;ae<j.locationSize;ae++)p(j.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let ae=0;ae<j.locationSize;ae++)b(j.location+ae,Ne/j.locationSize,Mt,xe,Ne*$,Ne/j.locationSize*ae*$,fe)}}else if(Z!==void 0){const xe=Z[ee];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(j.location,xe);break;case 3:i.vertexAttrib3fv(j.location,xe);break;case 4:i.vertexAttrib4fv(j.location,xe);break;default:i.vertexAttrib1fv(j.location,xe)}}}}M()}function w(){D();for(const y in n){const R=n[y];for(const H in R){const G=R[H];for(const q in G)u(G[q].object),delete G[q];delete R[H]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const R=n[y.id];for(const H in R){const G=R[H];for(const q in G)u(G[q].object),delete G[q];delete R[H]}delete n[y.id]}function C(y){for(const R in n){const H=n[R];if(H[y.id]===void 0)continue;const G=H[y.id];for(const q in G)u(G[q].object),delete G[q];delete H[y.id]}}function D(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function f0(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),t.update(u,n,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];t.update(m,n,1)}function c(l,u,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*f[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function p0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Nn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const D=C===cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Qn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==di&&!D)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:w,maxSamples:T}}function m0(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new ki,a=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,h=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{const M=r?0:n,b=M*4;let _=h.clippingState||null;c.value=_,_=u(g,f,b,m);for(let w=0;w!==b;++w)_[w]=t[w];h.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=c.value,g!==!0||p===null){const h=m+v*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<h)&&(p=new Float32Array(h));for(let b=0,_=m;b!==v;++b,_+=4)o.copy(d[b]).applyMatrix4(M,a),o.normal.toArray(p,_),p[_+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function g0(i){let e=new WeakMap;function t(o,a){return a===xa?o.mapping=As:a===ba&&(o.mapping=Cs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===xa||a===ba)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Yh(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const bs=4,pc=[.125,.215,.35,.446,.526,.582],Bi=20,ta=new Bu,mc=new rt;let na=null,ia=0,sa=0,ra=!1;const Fi=(1+Math.sqrt(5))/2,hs=1/Fi,gc=[new L(-Fi,hs,0),new L(Fi,hs,0),new L(-hs,0,Fi),new L(hs,0,Fi),new L(0,Fi,-hs),new L(0,Fi,hs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],v0=new L;class vc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=v0}=r;na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel(),ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(na,ia,sa),this._renderer.xr.enabled=ra,e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),sa=this._renderer.getActiveMipmapLevel(),ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:cr,format:Nn,colorSpace:Rs,depthBuffer:!1},s=_c(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_c(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_0(r)),this._blurMaterial=x0(r,e,t)}return s}_compileMaterial(e){const t=new X(this._lodPlanes[0],e);this._renderer.compile(t,ta)}_sceneToCubeUV(e,t,n,s,r){const c=new yn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(mc),d.toneMapping=Mi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const v=new Fn({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),p=new X(new mt,v);let h=!1;const M=e.background;M?M.isColor&&(v.color.copy(M),e.background=null,h=!0):(v.color.copy(mc),h=!0);for(let b=0;b<6;b++){const _=b%3;_===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[b],r.y,r.z)):_===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[b]));const w=this._cubeSize;Hr(s,_*w,b>2?w:0,w,w),d.setRenderTarget(s),h&&d.render(p,c),d.render(e,c)}p.geometry.dispose(),p.material.dispose(),d.toneMapping=m,d.autoClear=f,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===As||e.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new X(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Hr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ta)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=gc[(s-r-1)%gc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new X(this._lodPlanes[s],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Bi-1),v=r/g,p=isFinite(r)?1+Math.floor(u*v):Bi;p>Bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Bi}`);const h=[];let M=0;for(let C=0;C<Bi;++C){const D=C/v,S=Math.exp(-D*D/2);h.push(S),C===0?M+=S:C<p&&(M+=2*S)}for(let C=0;C<h.length;C++)h[C]=h[C]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const _=this._sizeLods[s],w=3*_*(s>b-bs?s-b+bs:0),T=4*(this._cubeSize-_);Hr(t,w,T,3*_,2*_),c.setRenderTarget(t),c.render(d,ta)}}function _0(i){const e=[],t=[],n=[];let s=i;const r=i-bs+1+pc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-bs?c=pc[o-i+bs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,v=3,p=2,h=1,M=new Float32Array(v*g*m),b=new Float32Array(p*g*m),_=new Float32Array(h*g*m);for(let T=0;T<m;T++){const C=T%3*2/3-1,D=T>2?0:-1,S=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];M.set(S,v*g*T),b.set(f,p*g*T);const y=[T,T,T,T,T,T];_.set(y,h*g*T)}const w=new on;w.setAttribute("position",new kn(M,v)),w.setAttribute("uv",new kn(b,p)),w.setAttribute("faceIndex",new kn(_,h)),e.push(w),s>bs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _c(i,e,t){const n=new Xi(i,e,t);return n.texture.mapping=po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function x0(i,e,t){const n=new Float32Array(Bi),s=new L(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:El(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function xc(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function bc(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function El(){return`

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
	`}function b0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===xa||c===ba,u=c===As||c===Cs;if(l||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new vc(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return l&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new vc(i)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function y0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ms("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function S0(i,e,t,n){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER)}function l(d){const f=[],m=d.index,g=d.attributes.position;let v=0;if(m!==null){const M=m.array;v=m.version;for(let b=0,_=M.length;b<_;b+=3){const w=M[b+0],T=M[b+1],C=M[b+2];f.push(w,T,T,C,C,w)}}else if(g!==void 0){const M=g.array;v=g.version;for(let b=0,_=M.length/3-1;b<_;b+=3){const w=b+0,T=b+1,C=b+2;f.push(w,T,T,C,C,w)}}else return;const p=new(Eu(f)?Ru:Cu)(f,1);p.version=v;const h=r.get(d);h&&e.remove(h),r.set(d,p)}function u(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function M0(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,m){i.drawElements(n,m,r,f*o),t.update(m,n,1)}function l(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,f*o,g),t.update(m,n,g))}function u(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];t.update(p,n,1)}function d(f,m,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)l(f[h]/o,m[h],v[h]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,v,0,g);let h=0;for(let M=0;M<g;M++)h+=m[M]*v[M];t.update(h,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function E0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function w0(i,e,t){const n=new WeakMap,s=new bt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let y=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var m=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),p===!0&&(_=3);let w=a.attributes.position.count*_,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*T*4*d),D=new wu(C,w,T,d);D.type=di,D.needsUpdate=!0;const S=_*4;for(let R=0;R<d;R++){const H=h[R],G=M[R],q=b[R],J=w*T*4*R;for(let Z=0;Z<H.count;Z++){const ee=Z*S;g===!0&&(s.fromBufferAttribute(H,Z),C[J+ee+0]=s.x,C[J+ee+1]=s.y,C[J+ee+2]=s.z,C[J+ee+3]=0),v===!0&&(s.fromBufferAttribute(G,Z),C[J+ee+4]=s.x,C[J+ee+5]=s.y,C[J+ee+6]=s.z,C[J+ee+7]=0),p===!0&&(s.fromBufferAttribute(q,Z),C[J+ee+8]=s.x,C[J+ee+9]=s.y,C[J+ee+10]=s.z,C[J+ee+11]=q.itemSize===4?s.w:1)}}f={count:d,texture:D,size:new we(w,T)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function T0(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Gu=new dn,yc=new Nu(1,1),Vu=new wu,Wu=new Lh,Xu=new Pu,Sc=[],Mc=[],Ec=new Float32Array(16),wc=new Float32Array(9),Tc=new Float32Array(4);function Ds(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Sc[s];if(r===void 0&&(r=new Float32Array(s),Sc[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function _o(i,e){let t=Mc[e];t===void 0&&(t=new Int32Array(e),Mc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function A0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function C0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),jt(t,e)}}function R0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),jt(t,e)}}function I0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),jt(t,e)}}function L0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(qt(t,n))return;Tc.set(n),i.uniformMatrix2fv(this.addr,!1,Tc),jt(t,n)}}function P0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(qt(t,n))return;wc.set(n),i.uniformMatrix3fv(this.addr,!1,wc),jt(t,n)}}function D0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(qt(t,n))return;Ec.set(n),i.uniformMatrix4fv(this.addr,!1,Ec),jt(t,n)}}function U0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function N0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),jt(t,e)}}function O0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),jt(t,e)}}function k0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),jt(t,e)}}function F0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function z0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),jt(t,e)}}function B0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),jt(t,e)}}function H0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),jt(t,e)}}function G0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(yc.compareFunction=Mu,r=yc):r=Gu,t.setTexture2D(e||r,s)}function V0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Wu,s)}function W0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Xu,s)}function X0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Vu,s)}function q0(i){switch(i){case 5126:return A0;case 35664:return C0;case 35665:return R0;case 35666:return I0;case 35674:return L0;case 35675:return P0;case 35676:return D0;case 5124:case 35670:return U0;case 35667:case 35671:return N0;case 35668:case 35672:return O0;case 35669:case 35673:return k0;case 5125:return F0;case 36294:return z0;case 36295:return B0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return G0;case 35679:case 36299:case 36307:return V0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return X0}}function j0(i,e){i.uniform1fv(this.addr,e)}function Y0(i,e){const t=Ds(e,this.size,2);i.uniform2fv(this.addr,t)}function K0(i,e){const t=Ds(e,this.size,3);i.uniform3fv(this.addr,t)}function $0(i,e){const t=Ds(e,this.size,4);i.uniform4fv(this.addr,t)}function Z0(i,e){const t=Ds(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function J0(i,e){const t=Ds(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Q0(i,e){const t=Ds(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function eg(i,e){i.uniform1iv(this.addr,e)}function tg(i,e){i.uniform2iv(this.addr,e)}function ng(i,e){i.uniform3iv(this.addr,e)}function ig(i,e){i.uniform4iv(this.addr,e)}function sg(i,e){i.uniform1uiv(this.addr,e)}function rg(i,e){i.uniform2uiv(this.addr,e)}function og(i,e){i.uniform3uiv(this.addr,e)}function ag(i,e){i.uniform4uiv(this.addr,e)}function lg(i,e,t){const n=this.cache,s=e.length,r=_o(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Gu,r[o])}function cg(i,e,t){const n=this.cache,s=e.length,r=_o(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Wu,r[o])}function ug(i,e,t){const n=this.cache,s=e.length,r=_o(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Xu,r[o])}function dg(i,e,t){const n=this.cache,s=e.length,r=_o(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Vu,r[o])}function hg(i){switch(i){case 5126:return j0;case 35664:return Y0;case 35665:return K0;case 35666:return $0;case 35674:return Z0;case 35675:return J0;case 35676:return Q0;case 5124:case 35670:return eg;case 35667:case 35671:return tg;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return sg;case 36294:return rg;case 36295:return og;case 36296:return ag;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return ug;case 36289:case 36303:case 36311:case 36292:return dg}}class fg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=q0(t.type)}}class pg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hg(t.type)}}class mg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const oa=/(\w+)(\])?(\[|\.)?/g;function Ac(i,e){i.seq.push(e),i.map[e.id]=e}function gg(i,e,t){const n=i.name,s=n.length;for(oa.lastIndex=0;;){const r=oa.exec(n),o=oa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ac(t,l===void 0?new fg(a,i,e):new pg(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new mg(a),Ac(t,d)),t=d}}}class eo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);gg(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Cc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const vg=37297;let _g=0;function xg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Rc=new Je;function bg(i){ct._getMatrix(Rc,ct.workingColorSpace,i);const e=`mat3( ${Rc.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case so:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ic(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+xg(i.getShaderSource(e),a)}else return r}function yg(i,e){const t=bg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Sg(i,e){let t;switch(e){case rh:t="Linear";break;case oh:t="Reinhard";break;case ah:t="Cineon";break;case lh:t="ACESFilmic";break;case uh:t="AgX";break;case dh:t="Neutral";break;case ch:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gr=new L;function Mg(){ct.getLuminanceCoefficients(Gr);const i=Gr.x.toFixed(4),e=Gr.y.toFixed(4),t=Gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Eg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function wg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function js(i){return i!==""}function Lc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ag=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(i){return i.replace(Ag,Rg)}const Cg=new Map;function Rg(i,e){let t=Qe[e];if(t===void 0){const n=Cg.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ja(t)}const Ig=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dc(i){return i.replace(Ig,Lg)}function Lg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Pg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===uu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===du?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function Dg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case As:case Cs:e="ENVMAP_TYPE_CUBE";break;case po:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ug(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Cs&&(e="ENVMAP_MODE_REFRACTION"),e}function Ng(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hu:e="ENVMAP_BLENDING_MULTIPLY";break;case ih:e="ENVMAP_BLENDING_MIX";break;case sh:e="ENVMAP_BLENDING_ADD";break}return e}function Og(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function kg(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Pg(t),l=Dg(t),u=Ug(t),d=Ng(t),f=Og(t),m=Eg(t),g=wg(r),v=s.createProgram();let p,h,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(js).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(js).join(`
`),h.length>0&&(h+=`
`)):(p=[Uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),h=[Uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Mi?Sg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,yg("linearToOutputTexel",t.outputColorSpace),Mg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(js).join(`
`)),o=Ja(o),o=Lc(o,t),o=Pc(o,t),a=Ja(a),a=Lc(a,t),a=Pc(a,t),o=Dc(o),a=Dc(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=M+p+o,_=M+h+a,w=Cc(s,s.VERTEX_SHADER,b),T=Cc(s,s.FRAGMENT_SHADER,_);s.attachShader(v,w),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(R){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(v)||"",G=s.getShaderInfoLog(w)||"",q=s.getShaderInfoLog(T)||"",J=H.trim(),Z=G.trim(),ee=q.trim();let j=!0,he=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,w,T);else{const xe=Ic(s,w,"vertex"),Ne=Ic(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+J+`
`+xe+`
`+Ne)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(Z===""||ee==="")&&(he=!1);he&&(R.diagnostics={runnable:j,programLog:J,vertexShader:{log:Z,prefix:p},fragmentShader:{log:ee,prefix:h}})}s.deleteShader(w),s.deleteShader(T),D=new eo(s,v),S=Tg(s,v)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,vg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_g++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=T,this}let Fg=0;class zg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Bg(e),t.set(e,n)),n}}class Bg{constructor(e){this.id=Fg++,this.code=e,this.usedTimes=0}}function Hg(i,e,t,n,s,r,o){const a=new xl,c=new zg,l=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function p(S,y,R,H,G){const q=H.fog,J=G.geometry,Z=S.isMeshStandardMaterial?H.environment:null,ee=(S.isMeshStandardMaterial?t:e).get(S.envMap||Z),j=ee&&ee.mapping===po?ee.image.height:null,he=g[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const xe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ne=xe!==void 0?xe.length:0;let tt=0;J.morphAttributes.position!==void 0&&(tt=1),J.morphAttributes.normal!==void 0&&(tt=2),J.morphAttributes.color!==void 0&&(tt=3);let Pt,Mt,$,fe;if(he){const pt=Kn[he];Pt=pt.vertexShader,Mt=pt.fragmentShader}else Pt=S.vertexShader,Mt=S.fragmentShader,c.update(S),$=c.getVertexShaderID(S),fe=c.getFragmentShaderID(S);const ae=i.getRenderTarget(),He=i.state.buffers.depth.getReversed(),Ge=G.isInstancedMesh===!0,Ye=G.isBatchedMesh===!0,Bt=!!S.map,at=!!S.matcap,U=!!ee,At=!!S.aoMap,ke=!!S.lightMap,dt=!!S.bumpMap,Ue=!!S.normalMap,Dt=!!S.displacementMap,Ee=!!S.emissiveMap,nt=!!S.metalnessMap,$t=!!S.roughnessMap,Ht=S.anisotropy>0,A=S.clearcoat>0,x=S.dispersion>0,B=S.iridescence>0,K=S.sheen>0,te=S.transmission>0,Y=Ht&&!!S.anisotropyMap,Pe=A&&!!S.clearcoatMap,oe=A&&!!S.clearcoatNormalMap,Re=A&&!!S.clearcoatRoughnessMap,Ie=B&&!!S.iridescenceMap,se=B&&!!S.iridescenceThicknessMap,ve=K&&!!S.sheenColorMap,We=K&&!!S.sheenRoughnessMap,Le=!!S.specularMap,pe=!!S.specularColorMap,Ze=!!S.specularIntensityMap,O=te&&!!S.transmissionMap,re=te&&!!S.thicknessMap,ce=!!S.gradientMap,Me=!!S.alphaMap,ne=S.alphaTest>0,Q=!!S.alphaHash,Ae=!!S.extensions;let Ke=Mi;S.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Ke=i.toneMapping);const Ct={shaderID:he,shaderType:S.type,shaderName:S.name,vertexShader:Pt,fragmentShader:Mt,defines:S.defines,customVertexShaderID:$,customFragmentShaderID:fe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ye,batchingColor:Ye&&G._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&G.instanceColor!==null,instancingMorph:Ge&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Rs,alphaToCoverage:!!S.alphaToCoverage,map:Bt,matcap:at,envMap:U,envMapMode:U&&ee.mapping,envMapCubeUVHeight:j,aoMap:At,lightMap:ke,bumpMap:dt,normalMap:Ue,displacementMap:f&&Dt,emissiveMap:Ee,normalMapObjectSpace:Ue&&S.normalMapType===mh,normalMapTangentSpace:Ue&&S.normalMapType===Su,metalnessMap:nt,roughnessMap:$t,anisotropy:Ht,anisotropyMap:Y,clearcoat:A,clearcoatMap:Pe,clearcoatNormalMap:oe,clearcoatRoughnessMap:Re,dispersion:x,iridescence:B,iridescenceMap:Ie,iridescenceThicknessMap:se,sheen:K,sheenColorMap:ve,sheenRoughnessMap:We,specularMap:Le,specularColorMap:pe,specularIntensityMap:Ze,transmission:te,transmissionMap:O,thicknessMap:re,gradientMap:ce,opaque:S.transparent===!1&&S.blending===Ss&&S.alphaToCoverage===!1,alphaMap:Me,alphaTest:ne,alphaHash:Q,combine:S.combine,mapUv:Bt&&v(S.map.channel),aoMapUv:At&&v(S.aoMap.channel),lightMapUv:ke&&v(S.lightMap.channel),bumpMapUv:dt&&v(S.bumpMap.channel),normalMapUv:Ue&&v(S.normalMap.channel),displacementMapUv:Dt&&v(S.displacementMap.channel),emissiveMapUv:Ee&&v(S.emissiveMap.channel),metalnessMapUv:nt&&v(S.metalnessMap.channel),roughnessMapUv:$t&&v(S.roughnessMap.channel),anisotropyMapUv:Y&&v(S.anisotropyMap.channel),clearcoatMapUv:Pe&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:se&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:We&&v(S.sheenRoughnessMap.channel),specularMapUv:Le&&v(S.specularMap.channel),specularColorMapUv:pe&&v(S.specularColorMap.channel),specularIntensityMapUv:Ze&&v(S.specularIntensityMap.channel),transmissionMapUv:O&&v(S.transmissionMap.channel),thicknessMapUv:re&&v(S.thicknessMap.channel),alphaMapUv:Me&&v(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ue||Ht),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!J.attributes.uv&&(Bt||Me),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:He,skinning:G.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:tt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Bt&&S.map.isVideoTexture===!0&&ct.getTransfer(S.map.colorSpace)===_t,decodeVideoTextureEmissive:Ee&&S.emissiveMap.isVideoTexture===!0&&ct.getTransfer(S.emissiveMap.colorSpace)===_t,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Sn,flipSided:S.side===mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ae&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&S.extensions.multiDraw===!0||Ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function h(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)y.push(R),y.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(M(y,S),b(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function M(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function b(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){const y=g[S.type];let R;if(y){const H=Kn[y];R=Wh.clone(H.uniforms)}else R=S.uniforms;return R}function w(S,y){let R;for(let H=0,G=u.length;H<G;H++){const q=u[H];if(q.cacheKey===y){R=q,++R.usedTimes;break}}return R===void 0&&(R=new kg(i,y,S,r),u.push(R)),R}function T(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function C(S){c.remove(S)}function D(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:_,acquireProgram:w,releaseProgram:T,releaseShaderCache:C,programs:u,dispose:D}}function Gg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Vg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Nc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Oc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,f,m,g,v,p){let h=i[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},i[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=v,h.group=p),e++,h}function a(d,f,m,g,v,p){const h=o(d,f,m,g,v,p);m.transmission>0?n.push(h):m.transparent===!0?s.push(h):t.push(h)}function c(d,f,m,g,v,p){const h=o(d,f,m,g,v,p);m.transmission>0?n.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function l(d,f){t.length>1&&t.sort(d||Vg),n.length>1&&n.sort(f||Nc),s.length>1&&s.sort(f||Nc)}function u(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Wg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Oc,i.set(n,[o])):s>=r.length?(o=new Oc,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Xg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new rt};break;case"SpotLight":t={position:new L,direction:new L,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function qg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let jg=0;function Yg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Kg(i){const e=new Xg,t=qg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new Lt,o=new Lt;function a(l){let u=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,g=0,v=0,p=0,h=0,M=0,b=0,_=0,w=0,T=0,C=0;l.sort(Yg);for(let S=0,y=l.length;S<y;S++){const R=l[S],H=R.color,G=R.intensity,q=R.distance,J=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=H.r*G,d+=H.g*G,f+=H.b*G;else if(R.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(R.sh.coefficients[Z],G);C++}else if(R.isDirectionalLight){const Z=e.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const ee=R.shadow,j=t.get(R);j.shadowIntensity=ee.intensity,j.shadowBias=ee.bias,j.shadowNormalBias=ee.normalBias,j.shadowRadius=ee.radius,j.shadowMapSize=ee.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=J,n.directionalShadowMatrix[m]=R.shadow.matrix,M++}n.directional[m]=Z,m++}else if(R.isSpotLight){const Z=e.get(R);Z.position.setFromMatrixPosition(R.matrixWorld),Z.color.copy(H).multiplyScalar(G),Z.distance=q,Z.coneCos=Math.cos(R.angle),Z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Z.decay=R.decay,n.spot[v]=Z;const ee=R.shadow;if(R.map&&(n.spotLightMap[w]=R.map,w++,ee.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[v]=ee.matrix,R.castShadow){const j=t.get(R);j.shadowIntensity=ee.intensity,j.shadowBias=ee.bias,j.shadowNormalBias=ee.normalBias,j.shadowRadius=ee.radius,j.shadowMapSize=ee.mapSize,n.spotShadow[v]=j,n.spotShadowMap[v]=J,_++}v++}else if(R.isRectAreaLight){const Z=e.get(R);Z.color.copy(H).multiplyScalar(G),Z.halfWidth.set(R.width*.5,0,0),Z.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=Z,p++}else if(R.isPointLight){const Z=e.get(R);if(Z.color.copy(R.color).multiplyScalar(R.intensity),Z.distance=R.distance,Z.decay=R.decay,R.castShadow){const ee=R.shadow,j=t.get(R);j.shadowIntensity=ee.intensity,j.shadowBias=ee.bias,j.shadowNormalBias=ee.normalBias,j.shadowRadius=ee.radius,j.shadowMapSize=ee.mapSize,j.shadowCameraNear=ee.camera.near,j.shadowCameraFar=ee.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=R.shadow.matrix,b++}n.point[g]=Z,g++}else if(R.isHemisphereLight){const Z=e.get(R);Z.skyColor.copy(R.color).multiplyScalar(G),Z.groundColor.copy(R.groundColor).multiplyScalar(G),n.hemi[h]=Z,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==m||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==p||D.hemiLength!==h||D.numDirectionalShadows!==M||D.numPointShadows!==b||D.numSpotShadows!==_||D.numSpotMaps!==w||D.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=_+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,D.directionalLength=m,D.pointLength=g,D.spotLength=v,D.rectAreaLength=p,D.hemiLength=h,D.numDirectionalShadows=M,D.numPointShadows=b,D.numSpotShadows=_,D.numSpotMaps=w,D.numLightProbes=C,n.version=jg++)}function c(l,u){let d=0,f=0,m=0,g=0,v=0;const p=u.matrixWorldInverse;for(let h=0,M=l.length;h<M;h++){const b=l[h];if(b.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),d++}else if(b.isSpotLight){const _=n.spot[m];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),o.identity(),r.copy(b.matrixWorld),r.premultiply(p),o.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(p),v++}}}return{setup:a,setupView:c,state:n}}function kc(i){const e=new Kg(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function $g(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new kc(i),e.set(s,[a])):r>=o.length?(a=new kc(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Zg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jg=`uniform sampler2D shadow_pass;
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
}`;function Qg(i,e,t){let n=new yl;const s=new we,r=new we,o=new bt,a=new xf({depthPacking:ph}),c=new bf,l={},u=t.maxTextureSize,d={[Ti]:mn,[mn]:Ti,[Sn]:Sn},f=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Zg,fragmentShader:Jg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new on;g.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new X(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uu;let h=this.type;this.render=function(T,C,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Si),H.buffers.depth.getReversed()?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const G=h!==ui&&this.type===ui,q=h===ui&&this.type!==ui;for(let J=0,Z=T.length;J<Z;J++){const ee=T[J],j=ee.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const he=j.getFrameExtents();if(s.multiply(he),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/he.x),s.x=r.x*he.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/he.y),s.y=r.y*he.y,j.mapSize.y=r.y)),j.map===null||G===!0||q===!0){const Ne=this.type!==ui?{minFilter:On,magFilter:On}:{};j.map!==null&&j.map.dispose(),j.map=new Xi(s.x,s.y,Ne),j.map.texture.name=ee.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const xe=j.getViewportCount();for(let Ne=0;Ne<xe;Ne++){const tt=j.getViewport(Ne);o.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),H.viewport(o),j.updateMatrices(ee,Ne),n=j.getFrustum(),_(C,D,j.camera,ee,this.type)}j.isPointLightShadow!==!0&&this.type===ui&&M(j,D),j.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(S,y,R)};function M(T,C){const D=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Xi(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,D,f,v,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,D,m,v,null)}function b(T,C,D,S){let y=null;const R=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)y=R;else if(y=D.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const H=y.uuid,G=C.uuid;let q=l[H];q===void 0&&(q={},l[H]=q);let J=q[G];J===void 0&&(J=y.clone(),q[G]=J,C.addEventListener("dispose",w)),y=J}if(y.visible=C.visible,y.wireframe=C.wireframe,S===ui?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:d[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const H=i.properties.get(y);H.light=D}return y}function _(T,C,D,S,y){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===ui)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const G=e.update(T),q=T.material;if(Array.isArray(q)){const J=G.groups;for(let Z=0,ee=J.length;Z<ee;Z++){const j=J[Z],he=q[j.materialIndex];if(he&&he.visible){const xe=b(T,he,S,y);T.onBeforeShadow(i,T,C,D,G,xe,j),i.renderBufferDirect(D,null,G,xe,T,j),T.onAfterShadow(i,T,C,D,G,xe,j)}}}else if(q.visible){const J=b(T,q,S,y);T.onBeforeShadow(i,T,C,D,G,J,null),i.renderBufferDirect(D,null,G,J,T,null),T.onAfterShadow(i,T,C,D,G,J,null)}}const H=T.children;for(let G=0,q=H.length;G<q;G++)_(H[G],C,D,S,y)}function w(T){T.target.removeEventListener("dispose",w);for(const D in l){const S=l[D],y=T.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const ev={[ha]:fa,[pa]:va,[ma]:_a,[Ts]:ga,[fa]:ha,[va]:pa,[_a]:ma,[ga]:Ts};function tv(i,e){function t(){let O=!1;const re=new bt;let ce=null;const Me=new bt(0,0,0,0);return{setMask:function(ne){ce!==ne&&!O&&(i.colorMask(ne,ne,ne,ne),ce=ne)},setLocked:function(ne){O=ne},setClear:function(ne,Q,Ae,Ke,Ct){Ct===!0&&(ne*=Ke,Q*=Ke,Ae*=Ke),re.set(ne,Q,Ae,Ke),Me.equals(re)===!1&&(i.clearColor(ne,Q,Ae,Ke),Me.copy(re))},reset:function(){O=!1,ce=null,Me.set(-1,0,0,0)}}}function n(){let O=!1,re=!1,ce=null,Me=null,ne=null;return{setReversed:function(Q){if(re!==Q){const Ae=e.get("EXT_clip_control");Q?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),re=Q;const Ke=ne;ne=null,this.setClear(Ke)}},getReversed:function(){return re},setTest:function(Q){Q?ae(i.DEPTH_TEST):He(i.DEPTH_TEST)},setMask:function(Q){ce!==Q&&!O&&(i.depthMask(Q),ce=Q)},setFunc:function(Q){if(re&&(Q=ev[Q]),Me!==Q){switch(Q){case ha:i.depthFunc(i.NEVER);break;case fa:i.depthFunc(i.ALWAYS);break;case pa:i.depthFunc(i.LESS);break;case Ts:i.depthFunc(i.LEQUAL);break;case ma:i.depthFunc(i.EQUAL);break;case ga:i.depthFunc(i.GEQUAL);break;case va:i.depthFunc(i.GREATER);break;case _a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=Q}},setLocked:function(Q){O=Q},setClear:function(Q){ne!==Q&&(re&&(Q=1-Q),i.clearDepth(Q),ne=Q)},reset:function(){O=!1,ce=null,Me=null,ne=null,re=!1}}}function s(){let O=!1,re=null,ce=null,Me=null,ne=null,Q=null,Ae=null,Ke=null,Ct=null;return{setTest:function(pt){O||(pt?ae(i.STENCIL_TEST):He(i.STENCIL_TEST))},setMask:function(pt){re!==pt&&!O&&(i.stencilMask(pt),re=pt)},setFunc:function(pt,ni,zn){(ce!==pt||Me!==ni||ne!==zn)&&(i.stencilFunc(pt,ni,zn),ce=pt,Me=ni,ne=zn)},setOp:function(pt,ni,zn){(Q!==pt||Ae!==ni||Ke!==zn)&&(i.stencilOp(pt,ni,zn),Q=pt,Ae=ni,Ke=zn)},setLocked:function(pt){O=pt},setClear:function(pt){Ct!==pt&&(i.clearStencil(pt),Ct=pt)},reset:function(){O=!1,re=null,ce=null,Me=null,ne=null,Q=null,Ae=null,Ke=null,Ct=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},f=new WeakMap,m=[],g=null,v=!1,p=null,h=null,M=null,b=null,_=null,w=null,T=null,C=new rt(0,0,0),D=0,S=!1,y=null,R=null,H=null,G=null,q=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ee=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(j)[1]),Z=ee>=1):j.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Z=ee>=2);let he=null,xe={};const Ne=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),Pt=new bt().fromArray(Ne),Mt=new bt().fromArray(tt);function $(O,re,ce,Me){const ne=new Uint8Array(4),Q=i.createTexture();i.bindTexture(O,Q),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<ce;Ae++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(re+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return Q}const fe={};fe[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(i.DEPTH_TEST),o.setFunc(Ts),dt(!1),Ue(Ol),ae(i.CULL_FACE),At(Si);function ae(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function He(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function Ge(O,re){return d[O]!==re?(i.bindFramebuffer(O,re),d[O]=re,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=re),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=re),!0):!1}function Ye(O,re){let ce=m,Me=!1;if(O){ce=f.get(re),ce===void 0&&(ce=[],f.set(re,ce));const ne=O.textures;if(ce.length!==ne.length||ce[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Ae=ne.length;Q<Ae;Q++)ce[Q]=i.COLOR_ATTACHMENT0+Q;ce.length=ne.length,Me=!0}}else ce[0]!==i.BACK&&(ce[0]=i.BACK,Me=!0);Me&&i.drawBuffers(ce)}function Bt(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const at={[zi]:i.FUNC_ADD,[Bd]:i.FUNC_SUBTRACT,[Hd]:i.FUNC_REVERSE_SUBTRACT};at[Gd]=i.MIN,at[Vd]=i.MAX;const U={[Wd]:i.ZERO,[Xd]:i.ONE,[qd]:i.SRC_COLOR,[ua]:i.SRC_ALPHA,[Jd]:i.SRC_ALPHA_SATURATE,[$d]:i.DST_COLOR,[Yd]:i.DST_ALPHA,[jd]:i.ONE_MINUS_SRC_COLOR,[da]:i.ONE_MINUS_SRC_ALPHA,[Zd]:i.ONE_MINUS_DST_COLOR,[Kd]:i.ONE_MINUS_DST_ALPHA,[Qd]:i.CONSTANT_COLOR,[eh]:i.ONE_MINUS_CONSTANT_COLOR,[th]:i.CONSTANT_ALPHA,[nh]:i.ONE_MINUS_CONSTANT_ALPHA};function At(O,re,ce,Me,ne,Q,Ae,Ke,Ct,pt){if(O===Si){v===!0&&(He(i.BLEND),v=!1);return}if(v===!1&&(ae(i.BLEND),v=!0),O!==zd){if(O!==p||pt!==S){if((h!==zi||_!==zi)&&(i.blendEquation(i.FUNC_ADD),h=zi,_=zi),pt)switch(O){case Ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kl:i.blendFunc(i.ONE,i.ONE);break;case Fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Fl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,b=null,w=null,T=null,C.set(0,0,0),D=0,p=O,S=pt}return}ne=ne||re,Q=Q||ce,Ae=Ae||Me,(re!==h||ne!==_)&&(i.blendEquationSeparate(at[re],at[ne]),h=re,_=ne),(ce!==M||Me!==b||Q!==w||Ae!==T)&&(i.blendFuncSeparate(U[ce],U[Me],U[Q],U[Ae]),M=ce,b=Me,w=Q,T=Ae),(Ke.equals(C)===!1||Ct!==D)&&(i.blendColor(Ke.r,Ke.g,Ke.b,Ct),C.copy(Ke),D=Ct),p=O,S=!1}function ke(O,re){O.side===Sn?He(i.CULL_FACE):ae(i.CULL_FACE);let ce=O.side===mn;re&&(ce=!ce),dt(ce),O.blending===Ss&&O.transparent===!1?At(Si):At(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const Me=O.stencilWrite;a.setTest(Me),Me&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ee(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):He(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(O){y!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),y=O)}function Ue(O){O!==kd?(ae(i.CULL_FACE),O!==R&&(O===Ol?i.cullFace(i.BACK):O===Fd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):He(i.CULL_FACE),R=O}function Dt(O){O!==H&&(Z&&i.lineWidth(O),H=O)}function Ee(O,re,ce){O?(ae(i.POLYGON_OFFSET_FILL),(G!==re||q!==ce)&&(i.polygonOffset(re,ce),G=re,q=ce)):He(i.POLYGON_OFFSET_FILL)}function nt(O){O?ae(i.SCISSOR_TEST):He(i.SCISSOR_TEST)}function $t(O){O===void 0&&(O=i.TEXTURE0+J-1),he!==O&&(i.activeTexture(O),he=O)}function Ht(O,re,ce){ce===void 0&&(he===null?ce=i.TEXTURE0+J-1:ce=he);let Me=xe[ce];Me===void 0&&(Me={type:void 0,texture:void 0},xe[ce]=Me),(Me.type!==O||Me.texture!==re)&&(he!==ce&&(i.activeTexture(ce),he=ce),i.bindTexture(O,re||fe[O]),Me.type=O,Me.texture=re)}function A(){const O=xe[he];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(O){Pt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Pt.copy(O))}function We(O){Mt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Mt.copy(O))}function Le(O,re){let ce=l.get(re);ce===void 0&&(ce=new WeakMap,l.set(re,ce));let Me=ce.get(O);Me===void 0&&(Me=i.getUniformBlockIndex(re,O.name),ce.set(O,Me))}function pe(O,re){const Me=l.get(re).get(O);c.get(re)!==Me&&(i.uniformBlockBinding(re,Me,O.__bindingPointIndex),c.set(re,Me))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},he=null,xe={},d={},f=new WeakMap,m=[],g=null,v=!1,p=null,h=null,M=null,b=null,_=null,w=null,T=null,C=new rt(0,0,0),D=0,S=!1,y=null,R=null,H=null,G=null,q=null,Pt.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ae,disable:He,bindFramebuffer:Ge,drawBuffers:Ye,useProgram:Bt,setBlending:At,setMaterial:ke,setFlipSided:dt,setCullFace:Ue,setLineWidth:Dt,setPolygonOffset:Ee,setScissorTest:nt,activeTexture:$t,bindTexture:Ht,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:B,texImage2D:Ie,texImage3D:se,updateUBOMapping:Le,uniformBlockBinding:pe,texStorage2D:oe,texStorage3D:Re,texSubImage2D:K,texSubImage3D:te,compressedTexSubImage2D:Y,compressedTexSubImage3D:Pe,scissor:ve,viewport:We,reset:Ze}}function nv(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new we,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return m?new OffscreenCanvas(A,x):oo("canvas")}function v(A,x,B){let K=1;const te=Ht(A);if((te.width>B||te.height>B)&&(K=B/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor(K*te.width),Pe=Math.floor(K*te.height);d===void 0&&(d=g(Y,Pe));const oe=x?g(Y,Pe):d;return oe.width=Y,oe.height=Pe,oe.getContext("2d").drawImage(A,0,0,Y,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Y+"x"+Pe+")."),oe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function p(A){return A.generateMipmaps}function h(A){i.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,x,B,K,te=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=x;if(x===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),x===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),x===i.RGBA){const Pe=te?so:ct.getTransfer(K);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=Pe===_t?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(A,x){let B;return A?x===null||x===Wi||x===nr?B=i.DEPTH24_STENCIL8:x===di?B=i.DEPTH32F_STENCIL8:x===tr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Wi||x===nr?B=i.DEPTH_COMPONENT24:x===di?B=i.DEPTH_COMPONENT32F:x===tr&&(B=i.DEPTH_COMPONENT16),B}function w(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==On&&A.minFilter!==Zn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function T(A){const x=A.target;x.removeEventListener("dispose",T),D(x),x.isVideoTexture&&u.delete(x)}function C(A){const x=A.target;x.removeEventListener("dispose",C),y(x)}function D(A){const x=n.get(A);if(x.__webglInit===void 0)return;const B=A.source,K=f.get(B);if(K){const te=K[x.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(A),Object.keys(K).length===0&&f.delete(B)}n.remove(A)}function S(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const B=A.source,K=f.get(B);delete K[x.__cacheKey],o.memory.textures--}function y(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let te=0;te<x.__webglFramebuffer[K].length;te++)i.deleteFramebuffer(x.__webglFramebuffer[K][te]);else i.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)i.deleteFramebuffer(x.__webglFramebuffer[K]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=A.textures;for(let K=0,te=B.length;K<te;K++){const Y=n.get(B[K]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(B[K])}n.remove(A)}let R=0;function H(){R=0}function G(){const A=R;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),R+=1,A}function q(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function J(A,x){const B=n.get(A);if(A.isVideoTexture&&nt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(B,A,x);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function Z(A,x){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){fe(B,A,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function ee(A,x){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){fe(B,A,x);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function j(A,x){const B=n.get(A);if(A.version>0&&B.__version!==A.version){ae(B,A,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}const he={[ya]:i.REPEAT,[Gi]:i.CLAMP_TO_EDGE,[Sa]:i.MIRRORED_REPEAT},xe={[On]:i.NEAREST,[hh]:i.NEAREST_MIPMAP_NEAREST,[_r]:i.NEAREST_MIPMAP_LINEAR,[Zn]:i.LINEAR,[Eo]:i.LINEAR_MIPMAP_NEAREST,[Vi]:i.LINEAR_MIPMAP_LINEAR},Ne={[gh]:i.NEVER,[Sh]:i.ALWAYS,[vh]:i.LESS,[Mu]:i.LEQUAL,[_h]:i.EQUAL,[yh]:i.GEQUAL,[xh]:i.GREATER,[bh]:i.NOTEQUAL};function tt(A,x){if(x.type===di&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Zn||x.magFilter===Eo||x.magFilter===_r||x.magFilter===Vi||x.minFilter===Zn||x.minFilter===Eo||x.minFilter===_r||x.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,he[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,he[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,he[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,xe[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,xe[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Ne[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===On||x.minFilter!==_r&&x.minFilter!==Vi||x.type===di&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Pt(A,x){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",T));const K=x.source;let te=f.get(K);te===void 0&&(te={},f.set(K,te));const Y=q(x);if(Y!==A.__cacheKey){te[Y]===void 0&&(te[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),te[Y].usedTimes++;const Pe=te[A.__cacheKey];Pe!==void 0&&(te[A.__cacheKey].usedTimes--,Pe.usedTimes===0&&S(x)),A.__cacheKey=Y,A.__webglTexture=te[Y].texture}return B}function Mt(A,x,B){return Math.floor(Math.floor(A/B)/x)}function $(A,x,B,K){const Y=A.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,K,x.data);else{Y.sort((se,ve)=>se.start-ve.start);let Pe=0;for(let se=1;se<Y.length;se++){const ve=Y[Pe],We=Y[se],Le=ve.start+ve.count,pe=Mt(We.start,x.width,4),Ze=Mt(ve.start,x.width,4);We.start<=Le+1&&pe===Ze&&Mt(We.start+We.count-1,x.width,4)===pe?ve.count=Math.max(ve.count,We.start+We.count-ve.start):(++Pe,Y[Pe]=We)}Y.length=Pe+1;const oe=i.getParameter(i.UNPACK_ROW_LENGTH),Re=i.getParameter(i.UNPACK_SKIP_PIXELS),Ie=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let se=0,ve=Y.length;se<ve;se++){const We=Y[se],Le=Math.floor(We.start/4),pe=Math.ceil(We.count/4),Ze=Le%x.width,O=Math.floor(Le/x.width),re=pe,ce=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,Ze,O,re,ce,B,K,x.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,oe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Re),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ie)}}function fe(A,x,B){let K=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=i.TEXTURE_3D);const te=Pt(A,x),Y=x.source;t.bindTexture(K,A.__webglTexture,i.TEXTURE0+B);const Pe=n.get(Y);if(Y.version!==Pe.__version||te===!0){t.activeTexture(i.TEXTURE0+B);const oe=ct.getPrimaries(ct.workingColorSpace),Re=x.colorSpace===bi?null:ct.getPrimaries(x.colorSpace),Ie=x.colorSpace===bi||oe===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let se=v(x.image,!1,s.maxTextureSize);se=$t(x,se);const ve=r.convert(x.format,x.colorSpace),We=r.convert(x.type);let Le=b(x.internalFormat,ve,We,x.colorSpace,x.isVideoTexture);tt(K,x);let pe;const Ze=x.mipmaps,O=x.isVideoTexture!==!0,re=Pe.__version===void 0||te===!0,ce=Y.dataReady,Me=w(x,se);if(x.isDepthTexture)Le=_(x.format===sr,x.type),re&&(O?t.texStorage2D(i.TEXTURE_2D,1,Le,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Le,se.width,se.height,0,ve,We,null));else if(x.isDataTexture)if(Ze.length>0){O&&re&&t.texStorage2D(i.TEXTURE_2D,Me,Le,Ze[0].width,Ze[0].height);for(let ne=0,Q=Ze.length;ne<Q;ne++)pe=Ze[ne],O?ce&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,pe.width,pe.height,ve,We,pe.data):t.texImage2D(i.TEXTURE_2D,ne,Le,pe.width,pe.height,0,ve,We,pe.data);x.generateMipmaps=!1}else O?(re&&t.texStorage2D(i.TEXTURE_2D,Me,Le,se.width,se.height),ce&&$(x,se,ve,We)):t.texImage2D(i.TEXTURE_2D,0,Le,se.width,se.height,0,ve,We,se.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){O&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Le,Ze[0].width,Ze[0].height,se.depth);for(let ne=0,Q=Ze.length;ne<Q;ne++)if(pe=Ze[ne],x.format!==Nn)if(ve!==null)if(O){if(ce)if(x.layerUpdates.size>0){const Ae=fc(pe.width,pe.height,x.format,x.type);for(const Ke of x.layerUpdates){const Ct=pe.data.subarray(Ke*Ae/pe.data.BYTES_PER_ELEMENT,(Ke+1)*Ae/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,Ke,pe.width,pe.height,1,ve,Ct)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,se.depth,ve,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Le,pe.width,pe.height,se.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ce&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,se.depth,ve,We,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Le,pe.width,pe.height,se.depth,0,ve,We,pe.data)}else{O&&re&&t.texStorage2D(i.TEXTURE_2D,Me,Le,Ze[0].width,Ze[0].height);for(let ne=0,Q=Ze.length;ne<Q;ne++)pe=Ze[ne],x.format!==Nn?ve!==null?O?ce&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,pe.width,pe.height,ve,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Le,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ce&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,pe.width,pe.height,ve,We,pe.data):t.texImage2D(i.TEXTURE_2D,ne,Le,pe.width,pe.height,0,ve,We,pe.data)}else if(x.isDataArrayTexture)if(O){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Le,se.width,se.height,se.depth),ce)if(x.layerUpdates.size>0){const ne=fc(se.width,se.height,x.format,x.type);for(const Q of x.layerUpdates){const Ae=se.data.subarray(Q*ne/se.data.BYTES_PER_ELEMENT,(Q+1)*ne/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,se.width,se.height,1,ve,We,Ae)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ve,We,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,se.width,se.height,se.depth,0,ve,We,se.data);else if(x.isData3DTexture)O?(re&&t.texStorage3D(i.TEXTURE_3D,Me,Le,se.width,se.height,se.depth),ce&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ve,We,se.data)):t.texImage3D(i.TEXTURE_3D,0,Le,se.width,se.height,se.depth,0,ve,We,se.data);else if(x.isFramebufferTexture){if(re)if(O)t.texStorage2D(i.TEXTURE_2D,Me,Le,se.width,se.height);else{let ne=se.width,Q=se.height;for(let Ae=0;Ae<Me;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Le,ne,Q,0,ve,We,null),ne>>=1,Q>>=1}}else if(Ze.length>0){if(O&&re){const ne=Ht(Ze[0]);t.texStorage2D(i.TEXTURE_2D,Me,Le,ne.width,ne.height)}for(let ne=0,Q=Ze.length;ne<Q;ne++)pe=Ze[ne],O?ce&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ve,We,pe):t.texImage2D(i.TEXTURE_2D,ne,Le,ve,We,pe);x.generateMipmaps=!1}else if(O){if(re){const ne=Ht(se);t.texStorage2D(i.TEXTURE_2D,Me,Le,ne.width,ne.height)}ce&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,We,se)}else t.texImage2D(i.TEXTURE_2D,0,Le,ve,We,se);p(x)&&h(K),Pe.__version=Y.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ae(A,x,B){if(x.image.length!==6)return;const K=Pt(A,x),te=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);const Y=n.get(te);if(te.version!==Y.__version||K===!0){t.activeTexture(i.TEXTURE0+B);const Pe=ct.getPrimaries(ct.workingColorSpace),oe=x.colorSpace===bi?null:ct.getPrimaries(x.colorSpace),Re=x.colorSpace===bi||Pe===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ie=x.isCompressedTexture||x.image[0].isCompressedTexture,se=x.image[0]&&x.image[0].isDataTexture,ve=[];for(let Q=0;Q<6;Q++)!Ie&&!se?ve[Q]=v(x.image[Q],!0,s.maxCubemapSize):ve[Q]=se?x.image[Q].image:x.image[Q],ve[Q]=$t(x,ve[Q]);const We=ve[0],Le=r.convert(x.format,x.colorSpace),pe=r.convert(x.type),Ze=b(x.internalFormat,Le,pe,x.colorSpace),O=x.isVideoTexture!==!0,re=Y.__version===void 0||K===!0,ce=te.dataReady;let Me=w(x,We);tt(i.TEXTURE_CUBE_MAP,x);let ne;if(Ie){O&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,Ze,We.width,We.height);for(let Q=0;Q<6;Q++){ne=ve[Q].mipmaps;for(let Ae=0;Ae<ne.length;Ae++){const Ke=ne[Ae];x.format!==Nn?Le!==null?O?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae,0,0,Ke.width,Ke.height,Le,Ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae,Ze,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae,0,0,Ke.width,Ke.height,Le,pe,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae,Ze,Ke.width,Ke.height,0,Le,pe,Ke.data)}}}else{if(ne=x.mipmaps,O&&re){ne.length>0&&Me++;const Q=Ht(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,Ze,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(se){O?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ve[Q].width,ve[Q].height,Le,pe,ve[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ze,ve[Q].width,ve[Q].height,0,Le,pe,ve[Q].data);for(let Ae=0;Ae<ne.length;Ae++){const Ct=ne[Ae].image[Q].image;O?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae+1,0,0,Ct.width,Ct.height,Le,pe,Ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae+1,Ze,Ct.width,Ct.height,0,Le,pe,Ct.data)}}else{O?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Le,pe,ve[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ze,Le,pe,ve[Q]);for(let Ae=0;Ae<ne.length;Ae++){const Ke=ne[Ae];O?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae+1,0,0,Le,pe,Ke.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ae+1,Ze,Le,pe,Ke.image[Q])}}}p(x)&&h(i.TEXTURE_CUBE_MAP),Y.__version=te.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function He(A,x,B,K,te,Y){const Pe=r.convert(B.format,B.colorSpace),oe=r.convert(B.type),Re=b(B.internalFormat,Pe,oe,B.colorSpace),Ie=n.get(x),se=n.get(B);if(se.__renderTarget=x,!Ie.__hasExternalTextures){const ve=Math.max(1,x.width>>Y),We=Math.max(1,x.height>>Y);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,Y,Re,ve,We,x.depth,0,Pe,oe,null):t.texImage2D(te,Y,Re,ve,We,0,Pe,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Ee(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,te,se.__webglTexture,0,Dt(x)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,te,se.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(A,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const K=x.depthTexture,te=K&&K.isDepthTexture?K.type:null,Y=_(x.stencilBuffer,te),Pe=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=Dt(x);Ee(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,Y,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,A)}else{const K=x.textures;for(let te=0;te<K.length;te++){const Y=K[te],Pe=r.convert(Y.format,Y.colorSpace),oe=r.convert(Y.type),Re=b(Y.internalFormat,Pe,oe,Y.colorSpace),Ie=Dt(x);B&&Ee(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Re,x.width,x.height):Ee(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,Re,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Re,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ye(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(x.depthTexture);K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),J(x.depthTexture,0);const te=K.__webglTexture,Y=Dt(x);if(x.depthTexture.format===ir)Ee(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(x.depthTexture.format===sr)Ee(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Bt(A){const x=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const te=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),x.__depthDisposeCallback=te}x.__boundDepthTexture=K}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const K=A.texture.mipmaps;K&&K.length>0?Ye(x.__webglFramebuffer[0],A):Ye(x.__webglFramebuffer,A)}else if(B){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=i.createRenderbuffer(),Ge(x.__webglDepthbuffer[K],A,!1);else{const te=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,Y)}}else{const K=A.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ge(x.__webglDepthbuffer,A,!1);else{const te=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function at(A,x,B){const K=n.get(A);x!==void 0&&He(K.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Bt(A)}function U(A){const x=A.texture,B=n.get(A),K=n.get(x);A.addEventListener("dispose",C);const te=A.textures,Y=A.isWebGLCubeRenderTarget===!0,Pe=te.length>1;if(Pe||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=x.version,o.memory.textures++),Y){B.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[oe]=[];for(let Re=0;Re<x.mipmaps.length;Re++)B.__webglFramebuffer[oe][Re]=i.createFramebuffer()}else B.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let oe=0;oe<x.mipmaps.length;oe++)B.__webglFramebuffer[oe]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let oe=0,Re=te.length;oe<Re;oe++){const Ie=n.get(te[oe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Ee(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let oe=0;oe<te.length;oe++){const Re=te[oe];B.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[oe]);const Ie=r.convert(Re.format,Re.colorSpace),se=r.convert(Re.type),ve=b(Re.internalFormat,Ie,se,Re.colorSpace,A.isXRRenderTarget===!0),We=Dt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,We,ve,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,B.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Ge(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),tt(i.TEXTURE_CUBE_MAP,x);for(let oe=0;oe<6;oe++)if(x.mipmaps&&x.mipmaps.length>0)for(let Re=0;Re<x.mipmaps.length;Re++)He(B.__webglFramebuffer[oe][Re],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Re);else He(B.__webglFramebuffer[oe],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);p(x)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let oe=0,Re=te.length;oe<Re;oe++){const Ie=te[oe],se=n.get(Ie);let ve=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ve=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,se.__webglTexture),tt(ve,Ie),He(B.__webglFramebuffer,A,Ie,i.COLOR_ATTACHMENT0+oe,ve,0),p(Ie)&&h(ve)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(oe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,K.__webglTexture),tt(oe,x),x.mipmaps&&x.mipmaps.length>0)for(let Re=0;Re<x.mipmaps.length;Re++)He(B.__webglFramebuffer[Re],A,x,i.COLOR_ATTACHMENT0,oe,Re);else He(B.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,oe,0);p(x)&&h(oe),t.unbindTexture()}A.depthBuffer&&Bt(A)}function At(A){const x=A.textures;for(let B=0,K=x.length;B<K;B++){const te=x[B];if(p(te)){const Y=M(A),Pe=n.get(te).__webglTexture;t.bindTexture(Y,Pe),h(Y),t.unbindTexture()}}}const ke=[],dt=[];function Ue(A){if(A.samples>0){if(Ee(A)===!1){const x=A.textures,B=A.width,K=A.height;let te=i.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(A),oe=x.length>1;if(oe)for(let Ie=0;Ie<x.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Re=A.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ie=0;Ie<x.length;Ie++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ie]);const se=n.get(x[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,B,K,0,0,B,K,te,i.NEAREST),c===!0&&(ke.length=0,dt.length=0,ke.push(i.COLOR_ATTACHMENT0+Ie),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ke.push(Y),dt.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,dt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let Ie=0;Ie<x.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ie]);const se=n.get(x[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Dt(A){return Math.min(s.maxSamples,A.samples)}function Ee(A){const x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function nt(A){const x=o.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function $t(A,x){const B=A.colorSpace,K=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Rs&&B!==bi&&(ct.getTransfer(B)===_t?(K!==Nn||te!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function Ht(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.setTexture2D=J,this.setTexture2DArray=Z,this.setTexture3D=ee,this.setTextureCube=j,this.rebindTextures=at,this.setupRenderTarget=U,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=He,this.useMultisampledRTT=Ee}function iv(i,e){function t(n,s=bi){let r;const o=ct.getTransfer(s);if(n===Qn)return i.UNSIGNED_BYTE;if(n===hl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pu)return i.BYTE;if(n===mu)return i.SHORT;if(n===tr)return i.UNSIGNED_SHORT;if(n===dl)return i.INT;if(n===Wi)return i.UNSIGNED_INT;if(n===di)return i.FLOAT;if(n===cr)return i.HALF_FLOAT;if(n===vu)return i.ALPHA;if(n===_u)return i.RGB;if(n===Nn)return i.RGBA;if(n===ir)return i.DEPTH_COMPONENT;if(n===sr)return i.DEPTH_STENCIL;if(n===xu)return i.RED;if(n===pl)return i.RED_INTEGER;if(n===bu)return i.RG;if(n===ml)return i.RG_INTEGER;if(n===gl)return i.RGBA_INTEGER;if(n===Kr||n===$r||n===Zr||n===Jr)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ma||n===Ea||n===wa||n===Ta)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Aa||n===Ca||n===Ra)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Aa||n===Ca)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ra)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ia||n===La||n===Pa||n===Da||n===Ua||n===Na||n===Oa||n===ka||n===Fa||n===za||n===Ba||n===Ha||n===Ga||n===Va)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ia)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===La)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pa)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Da)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ua)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Na)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oa)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ka)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fa)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===za)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ba)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ha)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ga)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Va)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qr||n===Wa||n===Xa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Qr)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yu||n===qa||n===ja||n===Ya)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class qu extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rv=`
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

}`;class ov{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new qu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ai({vertexShader:sv,fragmentShader:rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new X(new go(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class av extends ji{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,m=null,g=null;const v=new ov,p={},h=t.getContextAttributes();let M=null,b=null;const _=[],w=[],T=new we;let C=null;const D=new yn;D.viewport=new bt;const S=new yn;S.viewport=new bt;const y=[D,S],R=new wf;let H=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let fe=_[$];return fe===void 0&&(fe=new jo,_[$]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function($){let fe=_[$];return fe===void 0&&(fe=new jo,_[$]=fe),fe.getGripSpace()},this.getHand=function($){let fe=_[$];return fe===void 0&&(fe=new jo,_[$]=fe),fe.getHandSpace()};function q($){const fe=w.indexOf($.inputSource);if(fe===-1)return;const ae=_[fe];ae!==void 0&&(ae.update($.inputSource,$.frame,l||o),ae.dispatchEvent({type:$.type,data:$.inputSource}))}function J(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",Z);for(let $=0;$<_.length;$++){const fe=w[$];fe!==null&&(w[$]=null,_[$].disconnect(fe))}H=null,G=null,v.reset();for(const $ in p)delete p[$];e.setRenderTarget(M),m=null,f=null,d=null,s=null,b=null,Mt.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",J),s.addEventListener("inputsourceschange",Z),h.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(T),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(s,t)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,He=null,Ge=null;h.depth&&(Ge=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=h.stencil?sr:ir,He=h.stencil?nr:Wi);const Ye={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:r};f=d.createProjectionLayer(Ye),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Xi(f.textureWidth,f.textureHeight,{format:Nn,type:Qn,depthTexture:new Nu(f.textureWidth,f.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ae={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Xi(m.framebufferWidth,m.framebufferHeight,{format:Nn,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Mt.setContext(s),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z($){for(let fe=0;fe<$.removed.length;fe++){const ae=$.removed[fe],He=w.indexOf(ae);He>=0&&(w[He]=null,_[He].disconnect(ae))}for(let fe=0;fe<$.added.length;fe++){const ae=$.added[fe];let He=w.indexOf(ae);if(He===-1){for(let Ye=0;Ye<_.length;Ye++)if(Ye>=w.length){w.push(ae),He=Ye;break}else if(w[Ye]===null){w[Ye]=ae,He=Ye;break}if(He===-1)break}const Ge=_[He];Ge&&Ge.connect(ae)}}const ee=new L,j=new L;function he($,fe,ae){ee.setFromMatrixPosition(fe.matrixWorld),j.setFromMatrixPosition(ae.matrixWorld);const He=ee.distanceTo(j),Ge=fe.projectionMatrix.elements,Ye=ae.projectionMatrix.elements,Bt=Ge[14]/(Ge[10]-1),at=Ge[14]/(Ge[10]+1),U=(Ge[9]+1)/Ge[5],At=(Ge[9]-1)/Ge[5],ke=(Ge[8]-1)/Ge[0],dt=(Ye[8]+1)/Ye[0],Ue=Bt*ke,Dt=Bt*dt,Ee=He/(-ke+dt),nt=Ee*-ke;if(fe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(nt),$.translateZ(Ee),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ge[10]===-1)$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const $t=Bt+Ee,Ht=at+Ee,A=Ue-nt,x=Dt+(He-nt),B=U*at/Ht*$t,K=At*at/Ht*$t;$.projectionMatrix.makePerspective(A,x,B,K,$t,Ht),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function xe($,fe){fe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(fe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let fe=$.near,ae=$.far;v.texture!==null&&(v.depthNear>0&&(fe=v.depthNear),v.depthFar>0&&(ae=v.depthFar)),R.near=S.near=D.near=fe,R.far=S.far=D.far=ae,(H!==R.near||G!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,G=R.far),R.layers.mask=$.layers.mask|6,D.layers.mask=R.layers.mask&3,S.layers.mask=R.layers.mask&5;const He=$.parent,Ge=R.cameras;xe(R,He);for(let Ye=0;Ye<Ge.length;Ye++)xe(Ge[Ye],He);Ge.length===2?he(R,D,S):R.projectionMatrix.copy(D.projectionMatrix),Ne($,R,He)};function Ne($,fe,ae){ae===null?$.matrix.copy(fe.matrixWorld):($.matrix.copy(ae.matrixWorld),$.matrix.invert(),$.matrix.multiply(fe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=$a*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function($){c=$,f!==null&&(f.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(R)},this.getCameraTexture=function($){return p[$]};let tt=null;function Pt($,fe){if(u=fe.getViewerPose(l||o),g=fe,u!==null){const ae=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let He=!1;ae.length!==R.cameras.length&&(R.cameras.length=0,He=!0);for(let at=0;at<ae.length;at++){const U=ae[at];let At=null;if(m!==null)At=m.getViewport(U);else{const dt=d.getViewSubImage(f,U);At=dt.viewport,at===0&&(e.setRenderTargetTextures(b,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(b))}let ke=y[at];ke===void 0&&(ke=new yn,ke.layers.enable(at),ke.viewport=new bt,y[at]=ke),ke.matrix.fromArray(U.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(U.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(At.x,At.y,At.width,At.height),at===0&&(R.matrix.copy(ke.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),He===!0&&R.cameras.push(ke)}const Ge=s.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const at=d.getDepthInformation(ae[0]);at&&at.isValid&&at.texture&&v.init(at,s.renderState)}if(Ge&&Ge.includes("camera-access")&&(e.state.unbindTexture(),d))for(let at=0;at<ae.length;at++){const U=ae[at].camera;if(U){let At=p[U];At||(At=new qu,p[U]=At);const ke=d.getCameraImage(U);At.sourceTexture=ke}}}for(let ae=0;ae<_.length;ae++){const He=w[ae],Ge=_[ae];He!==null&&Ge!==void 0&&Ge.update(He,fe,l||o)}tt&&tt($,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),g=null}const Mt=new Hu;Mt.setAnimationLoop(Pt),this.setAnimationLoop=function($){tt=$},this.dispose=function(){}}}const Oi=new Rn,lv=new Lt;function cv(i,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,Iu(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,M,b,_){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),d(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,_)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),v(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?c(p,h,M,b):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===mn&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===mn&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const M=e.get(h),b=M.envMap,_=M.envMapRotation;b&&(p.envMap.value=b,Oi.copy(_),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),p.envMapRotation.value.setFromMatrix4(lv.makeRotationFromEuler(Oi)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,M,b){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*M,p.scale.value=b*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,M){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===mn&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function v(p,h){const M=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function uv(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,b){const _=b.program;n.uniformBlockBinding(M,_)}function l(M,b){let _=s[M.id];_===void 0&&(g(M),_=u(M),s[M.id]=_,M.addEventListener("dispose",p));const w=b.program;n.updateUBOMapping(M,w);const T=e.render.frame;r[M.id]!==T&&(f(M),r[M.id]=T)}function u(M){const b=d();M.__bindingPointIndex=b;const _=i.createBuffer(),w=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,w,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,_),_}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const b=s[M.id],_=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,C=_.length;T<C;T++){const D=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,y=D.length;S<y;S++){const R=D[S];if(m(R,T,S,w)===!0){const H=R.__offset,G=Array.isArray(R.value)?R.value:[R.value];let q=0;for(let J=0;J<G.length;J++){const Z=G[J],ee=v(Z);typeof Z=="number"||typeof Z=="boolean"?(R.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,H+q,R.__data)):Z.isMatrix3?(R.__data[0]=Z.elements[0],R.__data[1]=Z.elements[1],R.__data[2]=Z.elements[2],R.__data[3]=0,R.__data[4]=Z.elements[3],R.__data[5]=Z.elements[4],R.__data[6]=Z.elements[5],R.__data[7]=0,R.__data[8]=Z.elements[6],R.__data[9]=Z.elements[7],R.__data[10]=Z.elements[8],R.__data[11]=0):(Z.toArray(R.__data,q),q+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,b,_,w){const T=M.value,C=b+"_"+_;if(w[C]===void 0)return typeof T=="number"||typeof T=="boolean"?w[C]=T:w[C]=T.clone(),!0;{const D=w[C];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return w[C]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function g(M){const b=M.uniforms;let _=0;const w=16;for(let C=0,D=b.length;C<D;C++){const S=Array.isArray(b[C])?b[C]:[b[C]];for(let y=0,R=S.length;y<R;y++){const H=S[y],G=Array.isArray(H.value)?H.value:[H.value];for(let q=0,J=G.length;q<J;q++){const Z=G[q],ee=v(Z),j=_%w,he=j%ee.boundary,xe=j+he;_+=he,xe!==0&&w-xe<ee.storage&&(_+=w-xe),H.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=_,_+=ee.storage}}}const T=_%w;return T>0&&(_+=w-T),M.__size=_,M.__cache={},this}function v(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function p(M){const b=M.target;b.removeEventListener("dispose",p);const _=o.indexOf(b.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function h(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:h}}class dv{constructor(e={}){const{canvas:t=Eh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,h=null;const M=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let w=!1;this._outputColorSpace=pn;let T=0,C=0,D=null,S=-1,y=null;const R=new bt,H=new bt;let G=null;const q=new rt(0);let J=0,Z=t.width,ee=t.height,j=1,he=null,xe=null;const Ne=new bt(0,0,Z,ee),tt=new bt(0,0,Z,ee);let Pt=!1;const Mt=new yl;let $=!1,fe=!1;const ae=new Lt,He=new L,Ge=new bt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function at(){return D===null?j:1}let U=n;function At(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ul}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",ne,!1),U===null){const F="webgl2";if(U=At(F,E),U===null)throw At(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ke,dt,Ue,Dt,Ee,nt,$t,Ht,A,x,B,K,te,Y,Pe,oe,Re,Ie,se,ve,We,Le,pe,Ze;function O(){ke=new y0(U),ke.init(),Le=new iv(U,ke),dt=new p0(U,ke,e,Le),Ue=new tv(U,ke),dt.reversedDepthBuffer&&f&&Ue.buffers.depth.setReversed(!0),Dt=new E0(U),Ee=new Gg,nt=new nv(U,ke,Ue,Ee,dt,Le,Dt),$t=new g0(_),Ht=new b0(_),A=new If(U),pe=new h0(U,A),x=new S0(U,A,Dt,pe),B=new T0(U,x,A,Dt),se=new w0(U,dt,nt),oe=new m0(Ee),K=new Hg(_,$t,Ht,ke,dt,pe,oe),te=new cv(_,Ee),Y=new Wg,Pe=new $g(ke),Ie=new d0(_,$t,Ht,Ue,B,m,c),Re=new Qg(_,B,dt),Ze=new uv(U,Dt,dt,Ue),ve=new f0(U,ke,Dt),We=new M0(U,ke,Dt),Dt.programs=K.programs,_.capabilities=dt,_.extensions=ke,_.properties=Ee,_.renderLists=Y,_.shadowMap=Re,_.state=Ue,_.info=Dt}O();const re=new av(_,U);this.xr=re,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=ke.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ke.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(Z,ee,!1))},this.getSize=function(E){return E.set(Z,ee)},this.setSize=function(E,F,V=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=E,ee=F,t.width=Math.floor(E*j),t.height=Math.floor(F*j),V===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(Z*j,ee*j).floor()},this.setDrawingBufferSize=function(E,F,V){Z=E,ee=F,j=V,t.width=Math.floor(E*V),t.height=Math.floor(F*V),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(Ne)},this.setViewport=function(E,F,V,W){E.isVector4?Ne.set(E.x,E.y,E.z,E.w):Ne.set(E,F,V,W),Ue.viewport(R.copy(Ne).multiplyScalar(j).round())},this.getScissor=function(E){return E.copy(tt)},this.setScissor=function(E,F,V,W){E.isVector4?tt.set(E.x,E.y,E.z,E.w):tt.set(E,F,V,W),Ue.scissor(H.copy(tt).multiplyScalar(j).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(E){Ue.setScissorTest(Pt=E)},this.setOpaqueSort=function(E){he=E},this.setTransparentSort=function(E){xe=E},this.getClearColor=function(E){return E.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,V=!0){let W=0;if(E){let z=!1;if(D!==null){const ie=D.texture.format;z=ie===gl||ie===ml||ie===pl}if(z){const ie=D.texture.type,me=ie===Qn||ie===Wi||ie===tr||ie===nr||ie===hl||ie===fl,Te=Ie.getClearColor(),be=Ie.getClearAlpha(),Ve=Te.r,qe=Te.g,Oe=Te.b;me?(g[0]=Ve,g[1]=qe,g[2]=Oe,g[3]=be,U.clearBufferuiv(U.COLOR,0,g)):(v[0]=Ve,v[1]=qe,v[2]=Oe,v[3]=be,U.clearBufferiv(U.COLOR,0,v))}else W|=U.COLOR_BUFFER_BIT}F&&(W|=U.DEPTH_BUFFER_BIT),V&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),Ie.dispose(),Y.dispose(),Pe.dispose(),Ee.dispose(),$t.dispose(),Ht.dispose(),B.dispose(),pe.dispose(),Ze.dispose(),K.dispose(),re.dispose(),re.removeEventListener("sessionstart",zn),re.removeEventListener("sessionend",Il),Ri.stop()};function ce(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=Dt.autoReset,F=Re.enabled,V=Re.autoUpdate,W=Re.needsUpdate,z=Re.type;O(),Dt.autoReset=E,Re.enabled=F,Re.autoUpdate=V,Re.needsUpdate=W,Re.type=z}function ne(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Q(E){const F=E.target;F.removeEventListener("dispose",Q),Ae(F)}function Ae(E){Ke(E),Ee.remove(E)}function Ke(E){const F=Ee.get(E).programs;F!==void 0&&(F.forEach(function(V){K.releaseProgram(V)}),E.isShaderMaterial&&K.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,V,W,z,ie){F===null&&(F=Ye);const me=z.isMesh&&z.matrixWorld.determinant()<0,Te=Ld(E,F,V,W,z);Ue.setMaterial(W,me);let be=V.index,Ve=1;if(W.wireframe===!0){if(be=x.getWireframeAttribute(V),be===void 0)return;Ve=2}const qe=V.drawRange,Oe=V.attributes.position;let st=qe.start*Ve,gt=(qe.start+qe.count)*Ve;ie!==null&&(st=Math.max(st,ie.start*Ve),gt=Math.min(gt,(ie.start+ie.count)*Ve)),be!==null?(st=Math.max(st,0),gt=Math.min(gt,be.count)):Oe!=null&&(st=Math.max(st,0),gt=Math.min(gt,Oe.count));const Ft=gt-st;if(Ft<0||Ft===1/0)return;pe.setup(z,W,Te,V,be);let It,Et=ve;if(be!==null&&(It=A.get(be),Et=We,Et.setIndex(It)),z.isMesh)W.wireframe===!0?(Ue.setLineWidth(W.wireframeLinewidth*at()),Et.setMode(U.LINES)):Et.setMode(U.TRIANGLES);else if(z.isLine){let Fe=W.linewidth;Fe===void 0&&(Fe=1),Ue.setLineWidth(Fe*at()),z.isLineSegments?Et.setMode(U.LINES):z.isLineLoop?Et.setMode(U.LINE_LOOP):Et.setMode(U.LINE_STRIP)}else z.isPoints?Et.setMode(U.POINTS):z.isSprite&&Et.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))Et.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Fe=z._multiDrawStarts,Ot=z._multiDrawCounts,lt=z._multiDrawCount,gn=be?A.get(be).bytesPerElement:1,Yi=Ee.get(W).currentProgram.getUniforms();for(let vn=0;vn<lt;vn++)Yi.setValue(U,"_gl_DrawID",vn),Et.render(Fe[vn]/gn,Ot[vn])}else if(z.isInstancedMesh)Et.renderInstances(st,Ft,z.count);else if(V.isInstancedBufferGeometry){const Fe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ot=Math.min(V.instanceCount,Fe);Et.renderInstances(st,Ft,Ot)}else Et.render(st,Ft)};function Ct(E,F,V){E.transparent===!0&&E.side===Sn&&E.forceSinglePass===!1?(E.side=mn,E.needsUpdate=!0,vr(E,F,V),E.side=Ti,E.needsUpdate=!0,vr(E,F,V),E.side=Sn):vr(E,F,V)}this.compile=function(E,F,V=null){V===null&&(V=E),h=Pe.get(V),h.init(F),b.push(h),V.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(h.pushLight(z),z.castShadow&&h.pushShadow(z))}),E!==V&&E.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(h.pushLight(z),z.castShadow&&h.pushShadow(z))}),h.setupLights();const W=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ie=z.material;if(ie)if(Array.isArray(ie))for(let me=0;me<ie.length;me++){const Te=ie[me];Ct(Te,V,z),W.add(Te)}else Ct(ie,V,z),W.add(ie)}),h=b.pop(),W},this.compileAsync=function(E,F,V=null){const W=this.compile(E,F,V);return new Promise(z=>{function ie(){if(W.forEach(function(me){Ee.get(me).currentProgram.isReady()&&W.delete(me)}),W.size===0){z(E);return}setTimeout(ie,10)}ke.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let pt=null;function ni(E){pt&&pt(E)}function zn(){Ri.stop()}function Il(){Ri.start()}const Ri=new Hu;Ri.setAnimationLoop(ni),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(E){pt=E,re.setAnimationLoop(E),E===null?Ri.stop():Ri.start()},re.addEventListener("sessionstart",zn),re.addEventListener("sessionend",Il),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(F),F=re.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,F,D),h=Pe.get(E,b.length),h.init(F),b.push(h),ae.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Mt.setFromProjectionMatrix(ae,Jn,F.reversedDepth),fe=this.localClippingEnabled,$=oe.init(this.clippingPlanes,fe),p=Y.get(E,M.length),p.init(),M.push(p),re.enabled===!0&&re.isPresenting===!0){const ie=_.xr.getDepthSensingMesh();ie!==null&&So(ie,F,-1/0,_.sortObjects)}So(E,F,0,_.sortObjects),p.finish(),_.sortObjects===!0&&p.sort(he,xe),Bt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Bt&&Ie.addToRenderList(p,E),this.info.render.frame++,$===!0&&oe.beginShadows();const V=h.state.shadowsArray;Re.render(V,E,F),$===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=p.opaque,z=p.transmissive;if(h.setupLights(),F.isArrayCamera){const ie=F.cameras;if(z.length>0)for(let me=0,Te=ie.length;me<Te;me++){const be=ie[me];Pl(W,z,E,be)}Bt&&Ie.render(E);for(let me=0,Te=ie.length;me<Te;me++){const be=ie[me];Ll(p,E,be,be.viewport)}}else z.length>0&&Pl(W,z,E,F),Bt&&Ie.render(E),Ll(p,E,F);D!==null&&C===0&&(nt.updateMultisampleRenderTarget(D),nt.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(_,E,F),pe.resetDefaultState(),S=-1,y=null,b.pop(),b.length>0?(h=b[b.length-1],$===!0&&oe.setGlobalState(_.clippingPlanes,h.state.camera)):h=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function So(E,F,V,W){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Mt.intersectsSprite(E)){W&&Ge.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ae);const me=B.update(E),Te=E.material;Te.visible&&p.push(E,me,Te,V,Ge.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Mt.intersectsObject(E))){const me=B.update(E),Te=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ge.copy(E.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ge.copy(me.boundingSphere.center)),Ge.applyMatrix4(E.matrixWorld).applyMatrix4(ae)),Array.isArray(Te)){const be=me.groups;for(let Ve=0,qe=be.length;Ve<qe;Ve++){const Oe=be[Ve],st=Te[Oe.materialIndex];st&&st.visible&&p.push(E,me,st,V,Ge.z,Oe)}}else Te.visible&&p.push(E,me,Te,V,Ge.z,null)}}const ie=E.children;for(let me=0,Te=ie.length;me<Te;me++)So(ie[me],F,V,W)}function Ll(E,F,V,W){const z=E.opaque,ie=E.transmissive,me=E.transparent;h.setupLightsView(V),$===!0&&oe.setGlobalState(_.clippingPlanes,V),W&&Ue.viewport(R.copy(W)),z.length>0&&gr(z,F,V),ie.length>0&&gr(ie,F,V),me.length>0&&gr(me,F,V),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function Pl(E,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[W.id]===void 0&&(h.state.transmissionRenderTarget[W.id]=new Xi(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?cr:Qn,minFilter:Vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const ie=h.state.transmissionRenderTarget[W.id],me=W.viewport||R;ie.setSize(me.z*_.transmissionResolutionScale,me.w*_.transmissionResolutionScale);const Te=_.getRenderTarget(),be=_.getActiveCubeFace(),Ve=_.getActiveMipmapLevel();_.setRenderTarget(ie),_.getClearColor(q),J=_.getClearAlpha(),J<1&&_.setClearColor(16777215,.5),_.clear(),Bt&&Ie.render(V);const qe=_.toneMapping;_.toneMapping=Mi;const Oe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),h.setupLightsView(W),$===!0&&oe.setGlobalState(_.clippingPlanes,W),gr(E,V,W),nt.updateMultisampleRenderTarget(ie),nt.updateRenderTargetMipmap(ie),ke.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let gt=0,Ft=F.length;gt<Ft;gt++){const It=F[gt],Et=It.object,Fe=It.geometry,Ot=It.material,lt=It.group;if(Ot.side===Sn&&Et.layers.test(W.layers)){const gn=Ot.side;Ot.side=mn,Ot.needsUpdate=!0,Dl(Et,V,W,Fe,Ot,lt),Ot.side=gn,Ot.needsUpdate=!0,st=!0}}st===!0&&(nt.updateMultisampleRenderTarget(ie),nt.updateRenderTargetMipmap(ie))}_.setRenderTarget(Te,be,Ve),_.setClearColor(q,J),Oe!==void 0&&(W.viewport=Oe),_.toneMapping=qe}function gr(E,F,V){const W=F.isScene===!0?F.overrideMaterial:null;for(let z=0,ie=E.length;z<ie;z++){const me=E[z],Te=me.object,be=me.geometry,Ve=me.group;let qe=me.material;qe.allowOverride===!0&&W!==null&&(qe=W),Te.layers.test(V.layers)&&Dl(Te,F,V,be,qe,Ve)}}function Dl(E,F,V,W,z,ie){E.onBeforeRender(_,F,V,W,z,ie),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(_,F,V,W,E,ie),z.transparent===!0&&z.side===Sn&&z.forceSinglePass===!1?(z.side=mn,z.needsUpdate=!0,_.renderBufferDirect(V,F,W,z,E,ie),z.side=Ti,z.needsUpdate=!0,_.renderBufferDirect(V,F,W,z,E,ie),z.side=Sn):_.renderBufferDirect(V,F,W,z,E,ie),E.onAfterRender(_,F,V,W,z,ie)}function vr(E,F,V){F.isScene!==!0&&(F=Ye);const W=Ee.get(E),z=h.state.lights,ie=h.state.shadowsArray,me=z.state.version,Te=K.getParameters(E,z.state,ie,F,V),be=K.getProgramCacheKey(Te);let Ve=W.programs;W.environment=E.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(E.isMeshStandardMaterial?Ht:$t).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ve===void 0&&(E.addEventListener("dispose",Q),Ve=new Map,W.programs=Ve);let qe=Ve.get(be);if(qe!==void 0){if(W.currentProgram===qe&&W.lightsStateVersion===me)return Nl(E,Te),qe}else Te.uniforms=K.getUniforms(E),E.onBeforeCompile(Te,_),qe=K.acquireProgram(Te,be),Ve.set(be,qe),W.uniforms=Te.uniforms;const Oe=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Oe.clippingPlanes=oe.uniform),Nl(E,Te),W.needsLights=Dd(E),W.lightsStateVersion=me,W.needsLights&&(Oe.ambientLightColor.value=z.state.ambient,Oe.lightProbe.value=z.state.probe,Oe.directionalLights.value=z.state.directional,Oe.directionalLightShadows.value=z.state.directionalShadow,Oe.spotLights.value=z.state.spot,Oe.spotLightShadows.value=z.state.spotShadow,Oe.rectAreaLights.value=z.state.rectArea,Oe.ltc_1.value=z.state.rectAreaLTC1,Oe.ltc_2.value=z.state.rectAreaLTC2,Oe.pointLights.value=z.state.point,Oe.pointLightShadows.value=z.state.pointShadow,Oe.hemisphereLights.value=z.state.hemi,Oe.directionalShadowMap.value=z.state.directionalShadowMap,Oe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Oe.spotShadowMap.value=z.state.spotShadowMap,Oe.spotLightMatrix.value=z.state.spotLightMatrix,Oe.spotLightMap.value=z.state.spotLightMap,Oe.pointShadowMap.value=z.state.pointShadowMap,Oe.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=qe,W.uniformsList=null,qe}function Ul(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=eo.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Nl(E,F){const V=Ee.get(E);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Ld(E,F,V,W,z){F.isScene!==!0&&(F=Ye),nt.resetTextureUnits();const ie=F.fog,me=W.isMeshStandardMaterial?F.environment:null,Te=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Rs,be=(W.isMeshStandardMaterial?Ht:$t).get(W.envMap||me),Ve=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,qe=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Oe=!!V.morphAttributes.position,st=!!V.morphAttributes.normal,gt=!!V.morphAttributes.color;let Ft=Mi;W.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ft=_.toneMapping);const It=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Et=It!==void 0?It.length:0,Fe=Ee.get(W),Ot=h.state.lights;if($===!0&&(fe===!0||E!==y)){const an=E===y&&W.id===S;oe.setState(W,E,an)}let lt=!1;W.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Ot.state.version||Fe.outputColorSpace!==Te||z.isBatchedMesh&&Fe.batching===!1||!z.isBatchedMesh&&Fe.batching===!0||z.isBatchedMesh&&Fe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Fe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Fe.instancing===!1||!z.isInstancedMesh&&Fe.instancing===!0||z.isSkinnedMesh&&Fe.skinning===!1||!z.isSkinnedMesh&&Fe.skinning===!0||z.isInstancedMesh&&Fe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Fe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Fe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Fe.instancingMorph===!1&&z.morphTexture!==null||Fe.envMap!==be||W.fog===!0&&Fe.fog!==ie||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==oe.numPlanes||Fe.numIntersection!==oe.numIntersection)||Fe.vertexAlphas!==Ve||Fe.vertexTangents!==qe||Fe.morphTargets!==Oe||Fe.morphNormals!==st||Fe.morphColors!==gt||Fe.toneMapping!==Ft||Fe.morphTargetsCount!==Et)&&(lt=!0):(lt=!0,Fe.__version=W.version);let gn=Fe.currentProgram;lt===!0&&(gn=vr(W,F,z));let Yi=!1,vn=!1,Us=!1;const kt=gn.getUniforms(),Mn=Fe.uniforms;if(Ue.useProgram(gn.program)&&(Yi=!0,vn=!0,Us=!0),W.id!==S&&(S=W.id,vn=!0),Yi||y!==E){Ue.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),kt.setValue(U,"projectionMatrix",E.projectionMatrix),kt.setValue(U,"viewMatrix",E.matrixWorldInverse);const hn=kt.map.cameraPosition;hn!==void 0&&hn.setValue(U,He.setFromMatrixPosition(E.matrixWorld)),dt.logarithmicDepthBuffer&&kt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&kt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,vn=!0,Us=!0)}if(z.isSkinnedMesh){kt.setOptional(U,z,"bindMatrix"),kt.setOptional(U,z,"bindMatrixInverse");const an=z.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),kt.setValue(U,"boneTexture",an.boneTexture,nt))}z.isBatchedMesh&&(kt.setOptional(U,z,"batchingTexture"),kt.setValue(U,"batchingTexture",z._matricesTexture,nt),kt.setOptional(U,z,"batchingIdTexture"),kt.setValue(U,"batchingIdTexture",z._indirectTexture,nt),kt.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&kt.setValue(U,"batchingColorTexture",z._colorsTexture,nt));const En=V.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&se.update(z,V,gn),(vn||Fe.receiveShadow!==z.receiveShadow)&&(Fe.receiveShadow=z.receiveShadow,kt.setValue(U,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Mn.envMap.value=be,Mn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Mn.envMapIntensity.value=F.environmentIntensity),vn&&(kt.setValue(U,"toneMappingExposure",_.toneMappingExposure),Fe.needsLights&&Pd(Mn,Us),ie&&W.fog===!0&&te.refreshFogUniforms(Mn,ie),te.refreshMaterialUniforms(Mn,W,j,ee,h.state.transmissionRenderTarget[E.id]),eo.upload(U,Ul(Fe),Mn,nt)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(eo.upload(U,Ul(Fe),Mn,nt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&kt.setValue(U,"center",z.center),kt.setValue(U,"modelViewMatrix",z.modelViewMatrix),kt.setValue(U,"normalMatrix",z.normalMatrix),kt.setValue(U,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const an=W.uniformsGroups;for(let hn=0,Mo=an.length;hn<Mo;hn++){const Ii=an[hn];Ze.update(Ii,gn),Ze.bind(Ii,gn)}}return gn}function Pd(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Dd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,F,V){const W=Ee.get(E);W.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Ee.get(E.texture).__webglTexture=F,Ee.get(E.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:V,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const V=Ee.get(E);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0};const Ud=U.createFramebuffer();this.setRenderTarget=function(E,F=0,V=0){D=E,T=F,C=V;let W=!0,z=null,ie=!1,me=!1;if(E){const be=Ee.get(E);if(be.__useDefaultFramebuffer!==void 0)Ue.bindFramebuffer(U.FRAMEBUFFER,null),W=!1;else if(be.__webglFramebuffer===void 0)nt.setupRenderTarget(E);else if(be.__hasExternalTextures)nt.rebindTextures(E,Ee.get(E.texture).__webglTexture,Ee.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Oe=E.depthTexture;if(be.__boundDepthTexture!==Oe){if(Oe!==null&&Ee.has(Oe)&&(E.width!==Oe.image.width||E.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(E)}}const Ve=E.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(me=!0);const qe=Ee.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qe[F])?z=qe[F][V]:z=qe[F],ie=!0):E.samples>0&&nt.useMultisampledRTT(E)===!1?z=Ee.get(E).__webglMultisampledFramebuffer:Array.isArray(qe)?z=qe[V]:z=qe,R.copy(E.viewport),H.copy(E.scissor),G=E.scissorTest}else R.copy(Ne).multiplyScalar(j).floor(),H.copy(tt).multiplyScalar(j).floor(),G=Pt;if(V!==0&&(z=Ud),Ue.bindFramebuffer(U.FRAMEBUFFER,z)&&W&&Ue.drawBuffers(E,z),Ue.viewport(R),Ue.scissor(H),Ue.setScissorTest(G),ie){const be=Ee.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,be.__webglTexture,V)}else if(me){const be=F;for(let Ve=0;Ve<E.textures.length;Ve++){const qe=Ee.get(E.textures[Ve]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ve,qe.__webglTexture,V,be)}}else if(E!==null&&V!==0){const be=Ee.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,be.__webglTexture,V)}S=-1},this.readRenderTargetPixels=function(E,F,V,W,z,ie,me,Te=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(be=be[me]),be){Ue.bindFramebuffer(U.FRAMEBUFFER,be);try{const Ve=E.textures[Te],qe=Ve.format,Oe=Ve.type;if(!dt.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-W&&V>=0&&V<=E.height-z&&(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Te),U.readPixels(F,V,W,z,Le.convert(qe),Le.convert(Oe),ie))}finally{const Ve=D!==null?Ee.get(D).__webglFramebuffer:null;Ue.bindFramebuffer(U.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(E,F,V,W,z,ie,me,Te=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(be=be[me]),be)if(F>=0&&F<=E.width-W&&V>=0&&V<=E.height-z){Ue.bindFramebuffer(U.FRAMEBUFFER,be);const Ve=E.textures[Te],qe=Ve.format,Oe=Ve.type;if(!dt.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,st),U.bufferData(U.PIXEL_PACK_BUFFER,ie.byteLength,U.STREAM_READ),E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Te),U.readPixels(F,V,W,z,Le.convert(qe),Le.convert(Oe),0);const gt=D!==null?Ee.get(D).__webglFramebuffer:null;Ue.bindFramebuffer(U.FRAMEBUFFER,gt);const Ft=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await wh(U,Ft,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,st),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ie),U.deleteBuffer(st),U.deleteSync(Ft),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,V=0){const W=Math.pow(2,-V),z=Math.floor(E.image.width*W),ie=Math.floor(E.image.height*W),me=F!==null?F.x:0,Te=F!==null?F.y:0;nt.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,me,Te,z,ie),Ue.unbindTexture()};const Nd=U.createFramebuffer(),Od=U.createFramebuffer();this.copyTextureToTexture=function(E,F,V=null,W=null,z=0,ie=null){ie===null&&(z!==0?(Ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=z,z=0):ie=0);let me,Te,be,Ve,qe,Oe,st,gt,Ft;const It=E.isCompressedTexture?E.mipmaps[ie]:E.image;if(V!==null)me=V.max.x-V.min.x,Te=V.max.y-V.min.y,be=V.isBox3?V.max.z-V.min.z:1,Ve=V.min.x,qe=V.min.y,Oe=V.isBox3?V.min.z:0;else{const En=Math.pow(2,-z);me=Math.floor(It.width*En),Te=Math.floor(It.height*En),E.isDataArrayTexture?be=It.depth:E.isData3DTexture?be=Math.floor(It.depth*En):be=1,Ve=0,qe=0,Oe=0}W!==null?(st=W.x,gt=W.y,Ft=W.z):(st=0,gt=0,Ft=0);const Et=Le.convert(F.format),Fe=Le.convert(F.type);let Ot;F.isData3DTexture?(nt.setTexture3D(F,0),Ot=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(nt.setTexture2DArray(F,0),Ot=U.TEXTURE_2D_ARRAY):(nt.setTexture2D(F,0),Ot=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const lt=U.getParameter(U.UNPACK_ROW_LENGTH),gn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Yi=U.getParameter(U.UNPACK_SKIP_PIXELS),vn=U.getParameter(U.UNPACK_SKIP_ROWS),Us=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,It.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,It.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ve),U.pixelStorei(U.UNPACK_SKIP_ROWS,qe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Oe);const kt=E.isDataArrayTexture||E.isData3DTexture,Mn=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const En=Ee.get(E),an=Ee.get(F),hn=Ee.get(En.__renderTarget),Mo=Ee.get(an.__renderTarget);Ue.bindFramebuffer(U.READ_FRAMEBUFFER,hn.__webglFramebuffer),Ue.bindFramebuffer(U.DRAW_FRAMEBUFFER,Mo.__webglFramebuffer);for(let Ii=0;Ii<be;Ii++)kt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ee.get(E).__webglTexture,z,Oe+Ii),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ee.get(F).__webglTexture,ie,Ft+Ii)),U.blitFramebuffer(Ve,qe,me,Te,st,gt,me,Te,U.DEPTH_BUFFER_BIT,U.NEAREST);Ue.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||Ee.has(E)){const En=Ee.get(E),an=Ee.get(F);Ue.bindFramebuffer(U.READ_FRAMEBUFFER,Nd),Ue.bindFramebuffer(U.DRAW_FRAMEBUFFER,Od);for(let hn=0;hn<be;hn++)kt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,En.__webglTexture,z,Oe+hn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,En.__webglTexture,z),Mn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,an.__webglTexture,ie,Ft+hn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,an.__webglTexture,ie),z!==0?U.blitFramebuffer(Ve,qe,me,Te,st,gt,me,Te,U.COLOR_BUFFER_BIT,U.NEAREST):Mn?U.copyTexSubImage3D(Ot,ie,st,gt,Ft+hn,Ve,qe,me,Te):U.copyTexSubImage2D(Ot,ie,st,gt,Ve,qe,me,Te);Ue.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Mn?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Ot,ie,st,gt,Ft,me,Te,be,Et,Fe,It.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Ot,ie,st,gt,Ft,me,Te,be,Et,It.data):U.texSubImage3D(Ot,ie,st,gt,Ft,me,Te,be,Et,Fe,It):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ie,st,gt,me,Te,Et,Fe,It.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ie,st,gt,It.width,It.height,Et,It.data):U.texSubImage2D(U.TEXTURE_2D,ie,st,gt,me,Te,Et,Fe,It);U.pixelStorei(U.UNPACK_ROW_LENGTH,lt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Yi),U.pixelStorei(U.UNPACK_SKIP_ROWS,vn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Us),ie===0&&F.generateMipmaps&&U.generateMipmap(Ot),Ue.unbindTexture()},this.copyTextureToTexture3D=function(E,F,V=null,W=null,z=0){return Ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,V,W,z)},this.initRenderTarget=function(E){Ee.get(E).__webglFramebuffer===void 0&&nt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?nt.setTextureCube(E,0):E.isData3DTexture?nt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?nt.setTexture2DArray(E,0):nt.setTexture2D(E,0),Ue.unbindTexture()},this.resetState=function(){T=0,C=0,D=null,Ue.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}const fs=new Rn(0,0,0,"YXZ"),ps=new L,hv={type:"change"},fv={type:"lock"},pv={type:"unlock"},Fc=.002,zc=Math.PI/2;class mv extends Cf{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=gv.bind(this),this._onPointerlockChange=vv.bind(this),this._onPointerlockError=_v.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(e){super.connect(e),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;ps.setFromMatrixColumn(t.matrix,0),ps.crossVectors(t.up,ps),t.position.addScaledVector(ps,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;ps.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(ps,e)}lock(e=!1){this.domElement.requestPointerLock({unadjustedMovement:e})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function gv(i){if(this.enabled===!1||this.isLocked===!1)return;const e=this.object;fs.setFromQuaternion(e.quaternion),fs.y-=i.movementX*Fc*this.pointerSpeed,fs.x-=i.movementY*Fc*this.pointerSpeed,fs.x=Math.max(zc-this.maxPolarAngle,Math.min(zc-this.minPolarAngle,fs.x)),e.quaternion.setFromEuler(fs),this.dispatchEvent(hv)}function vv(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(fv),this.isLocked=!0):(this.dispatchEvent(pv),this.isLocked=!1)}function _v(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const xv=.008,Bc=Math.PI/2.1;function bv(i,e,t=xv){return{yaw:i.yaw-e.dx*t,pitch:Math.max(-Bc,Math.min(Bc,i.pitch-e.dy*t))}}function yv(i,e){const t=new Set(e);let n=i;for(;n;){if(t.has(n))return n;n=n.parent}return null}function Sv(i,e,t,n,s,r){return{id:`book-${i}-chapter-${e}`,title:t,theme:n,rooms:r.map(([o,a],c)=>({id:`b${i}-c${e}-r${c+1}`,title:o,theme:n,puzzle:a,difficulty:Number((s+c*.2).toFixed(1)),status:i===1&&(e===1||e===2&&c<=3||e===3&&c<=3||e===4&&c<=3)||i===2&&e===1&&c<=2?"playable":"planned"}))}}const vt=Sv,Js=[{id:"book-1",number:1,title:"魔法石",subtitle:"霍格沃茨的第一道门",palette:["#7a1f2b","#d3a84b","#19151d"],visualTheme:"温暖烛光、哥特学院、深红与金色、古老石墙",chapters:[vt(1,1,"初入魔法世界","猫头鹰信件、对角巷、魔杖与分院仪式",1,[["猫头鹰来信","重组地址碎片并找出被信件覆盖的隐藏出口"],["对角巷清单","依据课程清单匹配商店、物品和正确数量"],["魔杖选择","组合木材、杖芯、光效和声音反馈"],["分院仪式","排列四学院象征与人物品质打开宴会厅"]]),vt(1,2,"城堡禁区","移动楼梯、画像、巡夜与三头犬活板门",1.5,[["移动楼梯","观察周期并在正确时机连接三段路线"],["会说话的画像","从画像对话矛盾中推导正确口令"],["管理员的巡夜","利用盔甲、猫叫与暗门进行潜行"],["三头犬活板门","组合乐器并复现让守门生物入睡的旋律"]]),vt(1,3,"镜中秘密","飞行课、巨怪、禁书区与厄里斯魔镜",2,[["飞行课遗失物","控制漂浮轨迹把散落物送回正确位置"],["巨怪洗手间","利用悬浮机关移动障碍并建立逃生路线"],["图书馆禁书区","按历史时间线排列书脊并避开尖叫书籍"],["厄里斯魔镜","比较镜像与现实差异选择真正需要的物品"]]),vt(1,4,"地下试炼","魔鬼网、飞钥匙、巫师棋与魔法石",2.5,[["魔鬼网","控制光源与节奏摆脱收缩藤蔓"],["飞钥匙房","依据翅膀损伤、速度和锁孔锁定钥匙"],["巫师棋","规划最少牺牲路线穿过动态棋盘"],["魔法石密室","结合药剂逻辑、镜像线索与章节物品"]])]},{id:"book-2",number:2,title:"密室",subtitle:"蛇语在墙壁深处回响",palette:["#123d32","#7b9361","#0b1412"],visualTheme:"潮湿石窟、蛇形纹样、墨绿冷光、日记墨迹",chapters:[vt(2,1,"不祥警告","精灵封锁、飞车、打人柳与墙上血字",2.4,[["精灵的封锁","修复被干扰物件并找出住宅出口"],["飞车失控","在移动场景中调整动力方向与重量"],["打人柳下","观察树枝攻击规律并匹配安全节拍"],["墙上的血字","利用反射光和水迹还原消失警告"]]),vt(2,2,"决斗与变形","曼德拉草、决斗俱乐部、复方汤剂与伪装",2.9,[["曼德拉草温室","按成熟度、盆土和叫声完成移栽"],["决斗俱乐部","运用护盾、解除和反击的克制关系"],["复方汤剂仓库","按属性、火候与时间调制药剂"],["斯莱特林休息室","在伪装倒计时内筛选有效情报"]]),vt(2,3,"日记中的记忆","盥洗室、日记、蜘蛛巢与被篡改往事",3.4,[["被淹没的盥洗室","调整水管压力显露蛇形入口"],["日记墨迹","在文字消失前连接人物地点与时间"],["禁林蜘蛛巢","依据声音方向和蛛网震动逃生"],["海格往事","对比现实物证与记忆找出篡改"]]),vt(2,4,"蛇怪密室","蛇语石门、管道、凤凰与日记核心",3.9,[["蛇语石门","通过音高和节奏复现门锁序列"],["管道迷宫","依据水流回声和蛇皮判断路线"],["凤凰与毒牙","避开直视威胁并组合治疗与攻击"],["日记核心","在墨迹侵蚀倒计时中定位核心弱点"]])]},{id:"book-3",number:3,title:"阿兹卡班的囚徒",subtitle:"地图、月光与闭合的时间",palette:["#243747","#96a6b4","#17191d"],visualTheme:"暴风雨、月光、旧羊皮地图、旋转钟表",chapters:[vt(3,1,"逃犯阴影","骑士巴士、怪物书、摄魂怪与密道",3.4,[["骑士巴士","在高速变化车厢中固定行李并识别信号"],["怪物书","通过书脊束带和触摸顺序打开教材"],["摄魂怪列车","维持光源和积极记忆阻止冻结"],["霍格莫德密道","使用活点脚印破解隐藏路线"]]),vt(3,2,"时间与恐惧","博格特、月相、占卜与钟楼",3.9,[["博格特衣柜","识别恐惧规则并用荒诞变形解除"],["卢平课堂","根据月相足迹与毛发辨别形态"],["占卜教室","区分随机图案与可重复预兆"],["钟楼机关","同步三个不同时速的钟摆"]]),vt(3,3,"尖叫棚屋","打人柳、身份、斑斑与满月",4.4,[["打人柳密道","组合地图时序和树枝周期进入地道"],["棚屋身份谜题","根据足迹魔杖和证词判断身份"],["斑斑的秘密","追踪体型变化与缺失手指揭示伪装"],["满月倒计时","在环境变化前配置防护与撤离路线"]]),vt(3,4,"时间转换器","守护神、双时间线、塔楼与闭环",4.9,[["湖边守护神","收集记忆碎片构筑完整守护神"],["双时间线救援","让过去与现在的机关保持一致"],["塔楼营救","在不被过去自己发现时改变物件"],["闭环逃脱","同时满足三项事件且不制造时间矛盾"]])]},{id:"book-4",number:4,title:"火焰杯",subtitle:"荣耀背后隐藏着门钥匙",palette:["#1d3f5e","#59a6bd","#d67533"],visualTheme:"国际赛事、蓝色火焰、深湖、龙巢与活体迷宫",chapters:[vt(4,1,"黑魔标记","门钥匙、世界杯营地、骚乱与标记",4.6,[["门钥匙山丘","通过异常触感和空间残影找出门钥匙"],["世界杯营地","依据旗帜语言和空间结构找到营地"],["骚乱撤离","在受限视野中利用声音与地标撤离"],["黑魔标记","重建事件顺序并找出施法位置"]]),vt(4,2,"争霸赛开启","火焰杯、金蛋、龙巢与水下歌声",5.1,[["火焰杯契约","解读年龄线契约符号与参赛规则"],["金蛋线索","按龙种巢穴与护甲选择策略"],["龙巢夺蛋","动态躲避攻击并用场景机关夺蛋"],["水下歌声","改变声音介质后解析旋律密码"]]),vt(4,3,"黑湖营救","鳃囊草、深湖、人鱼村与超额救援",5.6,[["鳃囊草配方","限时辨别水下呼吸材料"],["深湖导航","管理氧气光照和水流寻找地标"],["人鱼村契约","通过符号语言确认人质与规则"],["超额救援","在资源不足时规划多人救援顺序"]]),vt(4,4,"迷宫与墓地","移动树篱、斯芬克斯、奖杯与墓地",6.1,[["会移动的树篱","记录路径变化规律避免循环"],["斯芬克斯问题","在时间压力下完成文字拆分谜题"],["奖杯门钥匙","识别被替换的终点机关并反制"],["墓地决战","组合护盾闪避与环境互动完成逃脱"]])]},{id:"book-5",number:5,title:"凤凰社",subtitle:"规则、反抗与预言之门",palette:["#9e6174","#ead6d6","#111217"],visualTheme:"压抑粉色办公室、秘密训练室、宣传墙与神秘事务司",chapters:[vt(5,1,"审判与监视","巷道、听证会、调查官与血字惩罚",5.8,[["摄魂怪巷道","在照明失效时保护同伴"],["魔法部听证会","按时间证词和法条建立辩护链"],["高级调查官","从不断新增规则中找出逻辑冲突"],["血字惩罚室","利用镜像书写与转印解除机关"]]),vt(5,2,"邓布利多军","有求必应屋、防御阵列、名单与突袭",6.3,[["有求必应屋","用准确需求召唤训练空间"],["基础防御阵列","让位置和咒语方向组成完整护盾"],["秘密成员名单","通过墨水魔法识别泄密路径"],["突袭逃脱","在空间收缩时疏散成员并销毁证据"]]),vt(5,3,"预言梦境","大脑封闭术、壁炉网络、禁林与诱饵",6.8,[["大脑封闭术","区分真实记忆诱导画面与植入信息"],["壁炉网络","连接正确地点并绕过被监控节点"],["禁林审判","利用生物规则化解冲突"],["虚假营救","从不完整梦境中发现诱饵"]]),vt(5,4,"神秘事务司","旋转门厅、时间厅、预言大厅与帷幔",7.3,[["旋转门厅","旋转后依靠非视觉线索确认出口"],["时间厅","控制不同时间方向的物体"],["预言大厅","按人物关系和编号找到预言球"],["帷幔之战","跨房间协同并保护预言撤离"]])]},{id:"book-6",number:6,title:"混血王子",subtitle:"批注、记忆与海边洞穴",palette:["#4c493b","#b89a59","#14221d"],visualTheme:"旧课本批注、液态记忆、暗金墨绿与海边洞穴",chapters:[vt(6,1,"王子的课本","魔药、解毒剂、无声咒与身份批注",6.8,[["魔药教室","比较标准配方与手写批注判断改动"],["解毒剂链","从症状反推毒素与材料"],["无声咒语","依据目标反馈调整施法意图"],["身份批注","分析字迹知识和年代锁定主人"]]),vt(6,2,"记忆之谜","记忆储藏、宴会、篡改与魂器",7.3,[["记忆储藏室","按人物地点和情绪整理液态记忆"],["斯拉格霍恩宴会","从社交关系和回避话题提取线索"],["被篡改的记忆","比较音画不同步与缺失帧"],["魂器真相","连接跨越数十年的物件和人物关系"]]),vt(6,3,"消失柜","有求必应屋、双柜、毒物与入侵计划",7.8,[["有求必应屋迷藏","在堆积物三维迷宫定位同一物件"],["双柜共振","让两个远端房间状态实时联动"],["项链与毒酒","建立受害者传递路径与目标因果图"],["马尔福的计划","在不触发防御时拆解入侵路线"]]),vt(6,4,"海边洞穴","岩壁、黑湖小船、石盆与天文塔",8.3,[["岩壁入口","通过潮汐血液和岩层发现入口"],["黑湖小船","平衡重量人数与魔法强度"],["毒药石盆","规划每次取药后的空间和资源变化"],["天文塔","在多重倒计时中结合洞穴与入侵信息"]])]},{id:"book-7",number:7,title:"死亡圣器",subtitle:"七年线索汇聚于最后一夜",palette:["#252525","#b9b4a4","#7e2e25"],visualTheme:"战争废墟、荒野营地、银色牝鹿、古老符号与燃烧城堡",chapters:[vt(7,1,"逃亡之路","七个波特、婚礼、荒野与魔法部",8,[["七个波特","按身份细节与路线限制分配护送"],["婚礼警报","场景突变后判断出口与可信人物"],["荒野营地","管理保护咒食物方向与广播情报"],["魔法部潜入","三种伪装权限交叉配合完成任务"]]),vt(7,2,"圣器传说","家族遗物、山谷、银色牝鹿与三兄弟",8.5,[["格里莫广场遗物","按家族树和房间历史追踪挂坠盒"],["戈德里克山谷","组合墓碑童话和历史记录"],["银色牝鹿","追踪守护神并管理冰湖资源"],["三兄弟传说","让三件圣器机制在同一模型中成立"]]),vt(7,3,"古灵阁劫案","贝壳小屋、妖精通道、复制金库与巨龙",9,[["贝壳小屋审讯","用魔杖归属和证词制定潜入计划"],["妖精通道","高速切换轨道岔路制动与伪装"],["复制金库","规划最少接触路线避免指数复制"],["巨龙逃生","解除锁链打开穹顶并利用巨龙行为"]]),vt(7,4,"霍格沃茨决战","冠冕、厉火、城堡防线与终局密室",9.4,[["寻找冠冕","整合七部历史线索定位最后魂器"],["厉火密室","在扩散火焰中边移动边改变地形"],["城堡防线","把画像盔甲植物和咒语部署到战区"],["终局密室","综合魔杖归属魂器状态与前关信息"]])]}],Mv={books:Js.length,chapters:Js.reduce((i,e)=>i+e.chapters.length,0),rooms:Js.flatMap(i=>i.chapters).reduce((i,e)=>i+e.rooms.length,0)},ar="hogwarts-escape-progress";function Ev(i){i.removeItem(ar)}function ju(i){const e=JSON.parse(i.getItem(ar));return e?{completedChapter:e.completedChapter,continueFrom:e.continueFrom}:null}function wv(i){const{book:e,chapter:t,room:n}=i.continueFrom;return(e-1)*16+(t-1)*4+n-1}function Tv(i,{book:e,chapter:t}){const n=i?.completedChapter;return n?.book===e&&n.chapter+1===t||n?.book+1===e&&n.chapter===4&&t===1}function ft(i,{book:e,chapter:t,room:n}){const s=JSON.parse(i.getItem(ar));i.setItem(ar,JSON.stringify({version:1,...s?.completedChapter?{completedChapter:s.completedChapter}:{},continueFrom:{book:e,chapter:t,room:n}}))}function xo(i,{book:e,chapter:t,room:n}){i.setItem(ar,JSON.stringify({version:1,completedChapter:{book:e,chapter:t},continueFrom:{book:e,chapter:t,room:n}}))}const Av={en:{"《标准咒语·初级》":"The Standard Book of Spells, Grade 1",二号锡制坩埚:"Size 2 pewter cauldron",雪白猫头鹰:"Snowy owl",等待主人的魔杖盒:"Wand case awaiting its wizard",飞天扫帚:"Flying broomstick",水晶球:"Crystal ball",黄铜天平:"Brass scales",高级魔药学:"Advanced Potion-Making","霍格沃茨一年级采购清单 · 预算 12 加隆":"Hogwarts first-year shopping list · Budget: 12 Galleons","按清单顺序：课本 → 二号锡制坩埚 → 猫头鹰 → 魔杖盒":"Follow the list: textbook → Size 2 pewter cauldron → owl → wand case","清单顺序错误：“{label}”不该现在购买。采购篮被清空！":"Wrong order: “{label}” should not be purchased yet. The basket was emptied!","已购入：{label}（{price} 加隆）":"Purchased: {label} ({price} Galleons)","采购完成：前往破釜酒吧出口":"Shopping complete: head for the Leaky Cauldron exit","清单上的四枚墨点连成了一条通往下一段旅程的路线。":"The four ink marks on the list now form a route toward the next stage of the journey.","霍格沃茨采购清单完成——出口已经开启！":"The Hogwarts shopping list is complete—the exit is open!",魔法石:"Philosopher's Stone",密室:"Chamber of Secrets",阿兹卡班的囚徒:"Prisoner of Azkaban",火焰杯:"Goblet of Fire",凤凰社:"Order of the Phoenix",混血王子:"Half-Blood Prince",死亡圣器:"Deathly Hallows",霍格沃茨的第一道门:"The First Gate of Hogwarts","温暖烛光、哥特学院、深红与金色、古老石墙":"Warm candlelight, Gothic halls, deep crimson and gold, and ancient stone walls.",初入魔法世界:"Entering the Wizarding World",城堡禁区:"Forbidden Castle Corridors",镜中秘密:"Secrets in the Mirror",地下试炼:"Underground Trials",重组地址碎片并找出被信件覆盖的隐藏出口:"Reassemble address fragments and uncover the hidden exit buried beneath the letters.","依据课程清单匹配商店、物品和正确数量":"Match each shop, item, and quantity to the school supply list.","组合木材、杖芯、光效和声音反馈":"Combine wood, core, light, and sound feedback to find the right wand.",排列四学院象征与人物品质打开宴会厅:"Match the four house emblems with their defining traits to open the Great Hall.",观察周期并在正确时机连接三段路线:"Observe the cycle and connect three route segments at the right moment.",从画像对话矛盾中推导正确口令:"Use contradictions in the portraits’ testimony to deduce the password.","利用盔甲、猫叫与暗门进行潜行":"Use armor, a cat’s bell, and a secret door to slip past the patrol.",组合乐器并复现让守门生物入睡的旋律:"Combine instruments and recreate the melody that sends the guardian to sleep.",控制漂浮轨迹把散落物送回正确位置:"Control floating trajectories to return each lost object to its proper place.",利用悬浮机关移动障碍并建立逃生路线:"Use levitation mechanisms to clear obstacles and build an escape route.",按历史时间线排列书脊并避开尖叫书籍:"Order book spines by historical date while avoiding the screaming volume.",比较镜像与现实差异选择真正需要的物品:"Compare reflection and reality to choose what is truly needed.",控制光源与节奏摆脱收缩藤蔓:"Control light and rhythm to escape the tightening vines.","依据翅膀损伤、速度和锁孔锁定钥匙":"Identify the key by wing damage, speed, and the lock’s keyhole.",规划最少牺牲路线穿过动态棋盘:"Plan a route across the living board with the fewest sacrifices.","结合药剂逻辑、镜像线索与章节物品":"Combine potion logic, mirror clues, and items gathered throughout the chapter.",猫头鹰来信:"Owl Post","目标：按弗农改变藏身处的时间顺序检查四封信":"Objective: inspect the four letters in the order the Dursleys changed hiding places.","地址会追着哈利变化。错误选择会让已确认的信全部重新飞散。":"The address follows Harry wherever he goes. A wrong choice scatters every confirmed letter.",对角巷清单:"Diagon Alley List","目标：按霍格沃茨清单采购四件合规格物品，预算 12 加隆":"Objective: buy four correctly specified school items in list order with a budget of 12 Galleons.","课本 → 二号锡制坩埚 → 猫头鹰 → 魔杖盒。核对规格与价签，买错会清空采购篮。":"Textbook → size 2 pewter cauldron → owl → wand case. Check every specification and price; a wrong purchase empties the basket.",魔杖选择:"The Wand Chooses","目标：第一阶段，从三种木材中找出与你产生稳定共鸣的一种":"Objective: first, find the one wood among three that resonates steadily with you.","木材线索：闪电形旧伤旁，常青叶不会在严冬凋零。选错会触发失控魔法。":"Wood clue: beside the lightning-shaped scar, an evergreen leaf never fades in winter. A wrong choice unleashes wild magic.","木材  ·  杖芯  ·  长度":"WOOD · CORE · LENGTH","木材 {wood}  杖芯 {core}  长度 {length}":"WOOD {wood}  CORE {core}  LENGTH {length}","奥利凡德 · 公元前 382 年":"OLLIVANDERS · MAKERS OF FINE WANDS SINCE 382 BC",登上霍格沃茨特快:"Board the Hogwarts Express",橡木:"Oak",冬青木:"Holly",紫杉木:"Yew",龙心弦:"Dragon heartstring",凤凰羽毛:"Phoenix feather",独角兽毛:"Unicorn hair",九英寸:"Nine inches",十一英寸:"Eleven inches",十三英寸:"Thirteen inches","{label}迸出危险火花——木材匹配仍未完成。":"{label} releases a violent shower of sparks—the wood match remains open.","第二阶段：在三种杖芯中找出会回应守护、忠诚与重生的一种":"Stage two: choose the core that answers protection, loyalty, and rebirth.","杖芯线索：它来自浴火重生的鸟，曾送来两根命运彼此呼应的羽毛。":"Core clue: it comes from a bird reborn in fire, which once gave two feathers bound to echoing destinies.","稳定共鸣！冬青木完成了第一阶段匹配。":"Stable resonance! Holly completes the first stage.","{label}抗拒了冬青木——重新解读浴火重生的线索。":"{label} resists the holly—read the clue about rebirth in fire again.","杖芯匹配成功：凤凰羽毛与冬青木稳定共鸣，准备校准长度":"Core matched: phoenix feather resonates with holly. Calibrate the length.","长度线索：短杖的火星触不到远处，长杖的光弧越过目标；让光准确停在十一道刻痕。":"Length clue: a short wand falls shy and a long wand overshoots; stop the light exactly at eleven engraved marks.","凤凰羽毛释放出温暖金光——第二阶段匹配完成！":"The phoenix feather releases warm gold light—stage two is complete!",火星在目标前坠落:"the sparks fall short of the target",光弧越过了目标:"the arc overshoots the target","{label}：{direction}！重新校准长度。":"{label}: {direction}! Calibrate the length again.","魔杖选择完成：带上魔杖，从车站门前往霍格沃茨分院仪式":"Wand chosen: take it through the station door to the Hogwarts Sorting Ceremony.","三阶段共鸣稳定。奥利凡德为魔杖系上金色封签，通往霍格沃茨的门已经开启。":"All three resonances are stable. Ollivander ties on a gold seal and opens the way to Hogwarts.","十一道刻痕同时亮起——魔杖选择了巫师！前往已开启的车站门。":"All eleven marks ignite—the wand has chosen the wizard! Head for the open station door.","第一部 · 第一章 · 第 {room} 关":"Book 1 · Chapter 1 · Room {room}","门正在打开：准备进入第 {room} 关“{name}”":"The door is opening: prepare to enter Room {room}, “{name}”.","魔杖店完成！正在前往“{name}”……":"Wand shop complete! Travelling to “{name}”…","第四关已加载：你已抵达霍格沃茨礼堂，分院仪式即将开始。":"Room Four loaded: you have reached the Great Hall, and the Sorting Ceremony is about to begin.","共鸣已确认：{count} / 3 · 失误：{mistakes}":"Matches confirmed: {count} / 3 · mistakes: {mistakes}",分院仪式:"Sorting Ceremony","目标：走近分院帽，观察大厅里的四学院象征":"Objective: approach the Sorting Hat and study the four house emblems in the Great Hall.","勇气、忠诚、智慧与野心各有象征；分院帽正在等待你的选择。":"Courage, loyalty, wisdom, and ambition each have an emblem. The Sorting Hat awaits your choice.","目标：读懂分院帽诗谜，依次触碰勇气、忠诚、智慧与野心的动物徽章":"Objective: solve the Sorting Hat’s verse and touch the animal crests for courage, loyalty, wisdom, and ambition in order.","观察动物轮廓：先直面恐惧，再守护同伴；随后以思考照亮未知，最后以意志开辟道路。选错不会清空已解线索。":"Read the animal silhouettes: face fear first, then protect companions; next illuminate the unknown through thought, and finally forge a path through will. A mistake preserves solved clues.","直面恐惧 · 守护同伴 · 思考照明 · 开辟道路":"FACE FEAR · PROTECT COMPANIONS · THINK AND ILLUMINATE · FORGE A PATH","狮 · 勇气":"Lion · Courage","I · 直面恐惧":"I · FACE FEAR","獾 · 忠诚":"Badger · Loyalty","II · 守护同伴":"II · PROTECT COMPANIONS","鹰 · 智慧":"Eagle · Wisdom","III · 思考照明":"III · THINK AND ILLUMINATE","蛇 · 野心":"Serpent · Ambition","IV · 开辟道路":"IV · FORGE A PATH",先找敢于直面恐惧的象征:"seek courage first","现在要找不求荣耀、始终守护同伴的象征":"now seek the one who protects companions without seeking glory",现在要找以思考照亮未知的象征:"now seek the one whose thought illuminates the unknown","最后要找意志坚定、善于为目标开辟道路的象征":"finally seek the one whose determined will forges a path","“{label}”不符合诗谜顺序。分院帽低声提醒：{reminder}。":"“{label}” breaks the riddle’s order. The Sorting Hat whispers: {reminder}.","分院线索已确认 {count} / 4":"Sorting clues confirmed: {count} / 4","勇气线索已确认：继续解读“留在朋友身边”的学院象征":"Courage confirmed: now interpret the house that stays beside its friends.","第一句已解：狮代表直面恐惧的勇气。下一句赞美不求荣耀、始终守护同伴的品格。":"First verse solved: the lion embodies courage before fear. The next praises one who protects companions without seeking glory.","狮徽亮起金光——勇气是分院诗谜的第一条线索！":"The lion crest shines gold—courage is the riddle’s first clue!","忠诚线索已确认：继续寻找“以思考照亮未知”的学院象征":"Loyalty confirmed: now seek the house that illuminates the unknown through thought.","第二句已解：獾代表不求荣耀的忠诚。下一句属于用问题、观察与求知驱散迷雾的人。":"Second verse solved: the badger embodies loyal service without glory. The next belongs to those who dispel fog through questions, observation, and learning.","獾徽泛起暖黄光芒——忠诚是分院诗谜的第二条线索！":"The badger crest glows warm yellow—loyalty is the riddle’s second clue!","智慧线索已确认：继续寻找“为目标开辟道路”的学院象征":"Wisdom confirmed: now seek the house that forges a path toward its goal.","第三句已解：鹰代表以思考照亮未知的智慧。最后一句属于意志坚定、善于实现目标的人。":"Third verse solved: the eagle embodies wisdom that illuminates the unknown. The last belongs to determined achievers.","鹰徽闪过清澈蓝光——智慧是分院诗谜的第三条线索！":"The eagle crest flashes clear blue—wisdom is the riddle’s third clue!","第一章完成：四种品格共同照亮了你的分院之路":"Chapter One complete: four qualities illuminate your Sorting path together.","勇气、忠诚、智慧与野心并非互斥；分院帽认可了你完整读懂诗谜的选择。":"Courage, loyalty, wisdom, and ambition are not mutually exclusive; the Sorting Hat accepts your complete reading of the verse.","第一部 · 第一章完成":"Book 1 · Chapter 1 complete",霍格沃茨的新生:"A New Hogwarts Student","蛇徽亮起翠光——四学院诗谜完成，第一章通关！":"The serpent crest shines emerald—the four-house riddle is complete and Chapter One is cleared!",移动楼梯:"Moving Staircases","目标：依据钟摆与月相路线，依次稳定三座移动楼梯":"Objective: use the pendulum and moon-route clues to stabilize three moving staircases in order.","路线铭文：从最低的平台起步；月光桥只在钟摆居中时停驻；最后登上最高塔。选错会让路线复位并增加 5 秒惩罚。":"Route inscription: begin at the lowest landing; the moonlit bridge stops only when the pendulum is centered; finish at the highest tower. A mistake resets the route and adds five seconds.",会说话的画像:"Talking Portraits","目标：比较三幅画像的证词，按可信的发言顺序询问口令":"Objective: compare three portraits’ testimony and question them in the credible order to reveal the password.","学者说骑士不是第一位；骑士承认学者必须先发言；女士说自己在骑士之后。错误询问会惊动走廊并清空推理。":"The scholar says the knight is not first; the knight admits the scholar must speak first; the lady says she follows the knight. A wrong question alerts the corridor and clears your deductions.",蓝袍月桂学者:"Blue-robed laurel scholar","“骑士绝不是第一位；我的月桂框知道开头。”":"“The knight is never first; my laurel frame knows the beginning.”","I · 月桂开篇 · 展卷求证":"I · LAUREL BEGINS · OPEN MANUSCRIPT",放下长剑的银甲骑士:"Silver-armored knight with lowered sword","“学者必须先发言，女士保管最后一词。”":"“The scholar must speak first; the lady guards the final word.”","II · 银甲承接 · 剑尖向下":"II · SILVER FOLLOWS · SWORD LOWERED",持银钥的月桂女士:"Laurel lady holding the silver key","“我在骑士之后，银钥只为完整证词转动。”":"“I follow the knight; the silver key turns only for complete testimony.”","III · 月桂收尾 · 银钥转门":"III · LAUREL ENDS · SILVER KEY TURNS","证词链 · 月桂开篇 → 银剑承接 → 银钥收尾":"TESTIMONY CHAIN · LAUREL BEGINS → SILVER SWORD FOLLOWS → SILVER KEY ENDS",银钥证词门:"SILVER-KEY TESTIMONY DOOR","“{label}”高声反驳！证词链断裂，画像怀疑升至 {count}。":"“{label}” protests loudly! The testimony chain breaks; portrait suspicion rises to {count}.","学者的月桂框亮起。她确认：放下长剑的银甲骑士应当接着发言。":"The scholar’s laurel frame glows. She confirms that the silver-armored knight with the lowered sword must speak next.","骑士让剑尖垂地并指向女士：最后一个词藏在她举起的银钥之后。":"The knight lowers his sword and points to the lady: the final word waits behind her raised silver key.","可信证词已连接 {count} / 3":"Reliable testimonies linked: {count} / 3","{quote}——这段证词与前文一致。":"{quote}—this testimony agrees with the chain.","画像谜题完成：银钥口令已经显现":"Portrait puzzle complete: the silver-key password has appeared.","三段证词一致。完整口令：“{password}”。":"All three testimonies agree. Complete password: “{password}”.","月桂之后，银钥先行":"After the laurel, the silver key leads","第一部 · 第二章 · 第 2 关完成":"Book 1 · Chapter 2 · Room 2 complete",银钥口令:"The Silver-Key Password","画像齐声念出：“{password}”——正在进入管理员的巡夜路线！":"The portraits recite “{password}” together—entering the caretaker’s patrol route!","第三关已加载：借助盔甲、猫铃与挂毯避开巡夜灯光。":"Room Three loaded: use the armor, cat bell, and tapestry to evade the patrol light.",管理员的巡夜:"The Caretaker’s Patrol","目标：利用盔甲遮挡、猫铃声与暗门，避开管理员的灯光巡查":"Objective: use the suit of armor, the cat’s bell, and the secret door to evade the caretaker’s lantern patrol.","巡夜图记：灯光先扫过空盔甲；猫铃能把脚步引向反方向；最后掀开独角兽挂毯。走错会清空路线并提高警戒。":"Patrol notes: the light first sweeps the empty armor; the cat’s bell draws footsteps away; finally lift the unicorn tapestry. A wrong move resets the route and raises the alert.",三头犬活板门:"Three-Headed Guardian","目标：按守门生物能接受的层次，奏出完整安眠旋律":"Objective: perform the complete lullaby in the layers the guardian can tolerate.","褪色乐谱写着：先让气息像夜风进入梦乡，再让琴弦托住梦境，最后以发条的轻响封住鼾声。错奏会重置旋律并惊醒守卫。":"The faded score says: let breath drift into sleep like a night wind, let strings cradle the dream, then seal the snoring with a soft clockwork chime. A wrong note resets the melody and wakes the guardian.",飞行课遗失物:"Flying Lesson: Lost Property","目标：借助风向旗判断重量，依次把三件遗失物送入对应的安全轨迹":"Objective: read the windsock and send three lost objects into their safe flight paths in weight order.","风向板写着：最轻的红色织物先借低风归队；有月纹的笔记随后穿过中环；沉重黄铜罗盘最后沿高风落到新生手中。错序会卷起乱流并吹散全部物品。":"The wind board says: the light red cloth rides the low wind first; the moon-marked notebook follows through the middle ring; the heavy brass compass returns last on the high current. A wrong order creates turbulence and scatters everything.",巨怪洗手间:"Troll Washroom","目标：依次稳定漏水、悬浮瓦砾，再放下横梁架出逃生路线":"Objective: stop the leak, levitate the rubble, then lower the beam to build an escape route.","破裂水管正在冲散落脚点。先转动月纹阀止水，再让碎石升起清出通道，最后才能把高处横梁平稳放到沟渠上。错序会让巨怪逼近并震塌路线。":"The burst pipe is washing away every foothold. Turn the moon-marked valve first, raise the rubble to clear the passage, then lower the high beam across the channel. A wrong order brings the troll closer and collapses the route.","裂管月阀止水 · 蓝光悬石清障 · 双链横梁架桥":"MOON VALVE SEALS PIPE · BLUE MAGIC LIFTS RUBBLE · TWIN CHAINS LOWER BRIDGE","月阀 · 悬石 · 双链桥":"MOON VALVE · FLOATING STONES · CHAIN BRIDGE",月纹止水阀:"Moon-marked shutoff valve","I · 裂管月阀 · 先止水":"I · BURST PIPE · SEAL FIRST",悬浮碎石阵:"Levitating rubble cluster","II · 蓝光悬石 · 再清障":"II · BLUE LIFT · CLEAR RUBBLE",锁链橡木横梁:"Chain-suspended oak beam","III · 双链横梁 · 最后架桥":"III · TWIN CHAINS · BRIDGE LAST","“{label}”触发过早！路线震塌，巨怪危险升至 {count}。":"“{label}” moved too soon! The route collapsed and troll danger rose to {count}.","月纹阀咬合裂管，喷流终于停住。现在让蓝光托起沟渠前的五块碎石。":"The moon valve grips the burst pipe and stops the spray. Now use the blue glow to lift the five stones beside the channel.","五块碎石悬到巨怪头顶，桥位已经清空。最后松开双链，把橡木横梁降到沟渠上。":"Five stones hover above the troll and the bridge landing is clear. Release both chains and lower the oak beam across the channel.","逃生机关已稳定 {count} / 3":"Escape mechanisms stabilized: {count} / 3","{label}稳定生效，巨怪被机关拖慢。":"{label} is stable; the mechanism slows the troll.","巨怪洗手间完成：双链横梁已跨过沟渠，安全逃生路线建立":"Troll Washroom complete: the twin-chain beam spans the channel and the escape route is secure.","月阀封住裂管，悬浮碎石清出桥位，双链横梁连接出口。禁书区门缝透出幽蓝微光。":"The moon valve sealed the pipe, floating rubble cleared the landing, and the twin-chain beam reached the exit. Blue light leaks from the Restricted Section.","第一部 · 第三章 · 第 2 关完成":"Book 1 · Chapter 3 · Room 2 complete",悬浮逃生:"Levitation Escape","双链横梁稳稳落下——正在穿过幽蓝门廊，前往图书馆禁书区！":"The twin-chain beam settles into place—crossing the blue-lit doorway toward the Restricted Section!","第三关已加载：按历史年代排列安全书脊，千万别惊醒锁链无年卷。":"Room Three loaded: order the safe spines by date, and do not wake the chained, dateless volume.",图书馆禁书区:"Restricted Section","目标：依据馆藏年代，按从古到今的顺序点亮三本安全书脊":"Objective: use the catalogue dates to illuminate three safe book spines from oldest to newest.","目录铜牌记载：四学院建校录最古老；龙灾账册写于其后数百年；月蚀纪事刚完成修订。避开锁链缠绕、会尖叫的无年卷。":"The brass catalogue says: the Founders’ Record is oldest; the Dragon Calamity Ledger came centuries later; the Eclipse Chronicle was just revised. Avoid the chained, dateless volume that screams.",厄里斯魔镜:"Mirror of Erised","目标：比较镜中欲望与现实处境，依次选择真正需要的三件物品":"Objective: compare desire with reality and choose the three things you truly need, in order.","镜中人戴着王冠、捧着奖杯，却在现实的寒风中发抖。先御寒，再为黑暗出口照路；最后记住：能共同离开的人，比独占的荣誉更重要。":"The reflection wears a crown and holds a trophy, yet shivers in the real cold. Choose warmth first, then light for the dark exit, and remember: a companion who leaves with you matters more than glory kept alone.",魔鬼网:"Devil’s Snare","目标：保持镇静，按正确节奏控制蓝铃火焰，让藤蔓松开地下出口":"Objective: stay calm and control the bluebell flames in the right rhythm to make the vines release the underground exit.","挣扎会让藤蔓收紧。先放松摆脱缠绕，再点燃冷焰，最后维持稳定光照；猛烈爆燃只会惊动整片根网。":"Struggling tightens the vines. Relax first, ignite the cool flame, then hold a steady light; a violent burst only alarms the entire root network.","停止挣扎 · 蓝铃冷焰 · 三拍恒光":"STOP STRUGGLING · BLUEBELL FLAME · THREE STEADY PULSES",放松呼吸:"Relax and breathe","I · 停止挣扎":"I · STOP STRUGGLING",点燃蓝铃冷焰:"Kindle bluebell flame","II · 微光驱藤":"II · COOL LIGHT REPELS VINES",维持恒定光照:"Hold steady light","III · 稳住三拍":"III · HOLD THREE PULSES",猛烈爆燃:"Wild flare","诱饵 · 惊动根网":"DECOY · ALARMS ROOT NET","地下试炼已加载：放松藤蔓缠绕，以蓝铃冷焰和三拍恒光打开根网。":"Underground Trial loaded: relax the vines, then use bluebell flame and three steady pulses to open the root net.","“{label}”打乱节奏！根网骤然收紧至 {count} 级；先放松，再重新开始。":"“{label}” broke the rhythm! The root net tightened to level {count}; begin again by relaxing.","你停止挣扎，第一层藤蔓松开。现在点燃不会灼伤施法者的蓝铃冷焰。":"You stopped struggling and the first vines loosened. Now kindle the bluebell flame that will not burn its caster.","冷焰逼退根须。最后保持三拍恒光，不要让亮度突然爆发。":"The cool flame drives back the roots. Hold three steady pulses now; do not let the light flare.","魔鬼网光照节奏已完成 {count} / 3":"Light rhythm completed: {count} / 3","{label}奏效，地下出口上方的藤蔓正在退缩。":"{label} worked; the vines above the underground exit are retreating.","魔鬼网完成：稳定冷焰驱散根网，通往飞钥匙房的地下出口已经开启":"Devil’s Snare complete: steady cool flame dispersed the root net and opened the underground exit to Flying Keys.","镇静削弱缠绕，蓝铃冷焰逼退藤蔓，三拍恒光打开根网。前方传来成群翅膀的振动声。":"Calm weakened the grip, bluebell flame repelled the vines, and three steady pulses opened the roots. A swarm of wings hums ahead.","第一部 · 第四章 · 第 1 关完成":"Book 1 · Chapter 4 · Room 1 complete",冷焰退藤:"Vines Before Cool Flame","魔鬼网缩回石缝——正在进入飞钥匙房！":"The Devil’s Snare withdraws into the stone—entering Flying Keys!",飞钥匙房:"Flying Keys","目标：依次确认翅膀损伤、飞行轨迹和锁孔材质，锁定唯一真钥匙":"Objective: identify wing damage, flight path, and keyhole material in order to find the one true key.","门锁留下银屑；真正用过的钥匙左翼弯折，负重后会沿顺时针轨迹下沉。先观察损伤，再追踪轨迹，最后核对银色钥匙。":"The lock left silver filings. The used key has a bent left wing and sinks clockwise under weight. Inspect the damage, trace the path, then confirm the silver key.","左翼折痕 · 顺时针下沉 · 银屑锁孔":"BENT LEFT WING · CLOCKWISE DESCENT · SILVER LOCK",左翼弯折的钥影:"Key with a bent left wing","I · 使用损伤":"I · WEAR DAMAGE",顺时针下沉轨迹:"Clockwise descending trail","II · 负重飞行":"II · WEIGHTED FLIGHT",小型银钥匙:"Small silver key","III · 银屑吻合":"III · SILVER MATCH",华丽金钥匙:"Ornate golden key","诱饵 · 锁孔无金屑":"DECOY · NO GOLD IN LOCK","飞钥匙房已加载：依次核对折翼、飞行轨迹和锁孔银屑。":"Flying Keys loaded: inspect the bent wing, clockwise trail, and silver filings in order.","“{label}”惊散了钥匙群！追逐失误升至 {count}，三条证据需要重新确认。":"“{label}” scattered the flock! Pursuit errors rose to {count}; recheck all three clues.","左翼折痕与门框刮痕一致。现在观察负重钥匙群，寻找顺时针下沉的轨迹。":"The bent left wing matches the frame scratch. Now watch the weighted flock for a clockwise descending path.","下沉轨迹锁定了小型钥匙。最后核对锁孔银屑，排除华丽但材质不符的金钥匙。":"The descending path identifies a small key. Compare the lock’s silver filings last and reject the ornate golden mismatch.","飞钥匙证据已确认 {count} / 3":"Flying-key clues confirmed: {count} / 3","{label}与现场证据吻合，钥匙群的范围缩小了。":"{label} matches the physical evidence; the flock narrows.","飞钥匙房完成：折翼银钥匙准确嵌入门锁，通往巫师棋盘的石门已经开启":"Flying Keys complete: the bent-wing silver key fits, opening the stone door to Wizard Chess.","折翼证明它被使用过，顺时针下沉暴露负重，银屑完成最终材质核对。前方传来巨大棋子的脚步声。":"The bent wing proves prior use, the clockwise descent reveals its weight, and the filings confirm silver. Giant chess pieces stir ahead.","第一部 · 第四章 · 第 2 关完成":"Book 1 · Chapter 4 · Room 2 complete",折翼银钥匙:"The Bent-Wing Silver Key","银钥匙旋转一周，棋盘石门轰然开启——正在进入巫师棋盘！":"The silver key turns once and the stone door crashes open—entering Wizard Chess!","巫师棋已加载：先诱敌，再双攻，最后沿空线推进。":"Wizard Chess loaded: decoy first, fork second, then advance along the open file.",巫师棋:"Wizard Chess","目标：用最少牺牲打开通往对岸的安全棋路":"Objective: open a safe route across the board with the fewest sacrifices.","黑后封锁中央。先用边兵引开主教，再让骑士双攻国王与城堡，最后直车沿空出的纵线推进；贸然冲后会让已投入的棋子全部被吃。":"The black queen controls the center. Use the edge pawn to draw off the bishop, fork king and rook with the knight, then advance the rook along the open file. Charging the queen too soon loses every committed piece.","边兵牵制主教 · 骑士双攻 · 城堡穿过空线":"EDGE PAWN DRAWS BISHOP · KNIGHT FORK · ROOK CROSSES OPEN FILE",边兵诱敌:"Edge-pawn decoy","I · 引开主教":"I · DRAW OFF BISHOP",骑士双攻:"Knight fork","II · 将军攻车":"II · CHECK KING AND ROOK",城堡沿空线推进:"Rook along open file","III · 空线抵岸":"III · CROSS THE OPEN FILE",王后强攻:"Queen charge","诱饵 · 暴露全线":"DECOY · EXPOSES THE FILE","“{label}”暴露了棋路！巨棋吃掉已投入棋子，被吃总数升至 {count}。":"“{label}” exposed the route! Giant pieces captured the committed force; {count} pieces lost in total.","边兵引开了黑主教。现在用骑士同时威胁国王与城堡，迫使黑方让出中央。":"The edge pawn drew off the black bishop. Now fork the king and rook with the knight to force the center open.","骑士双攻奏效，纵线已经清空。最后让城堡沿直线推进到对岸。":"The knight fork worked and cleared the file. Send the rook straight across to the far rank.","安全棋步已确认 {count} / 3":"Safe moves confirmed: {count} / 3","{label}成立，巨型黑棋被迫改换阵形。":"{label} works; the giant black pieces are forced to change formation.","巫师棋完成：仅以边兵诱敌，骑士与城堡已安全抵达对岸":"Wizard Chess complete: only the edge pawn was sacrificed; the knight and rook reached the far side safely.","诱敌打开斜线，双攻迫使让位，城堡穿过空线。最后的魔法石密室就在棋盘后方。":"The decoy opened a diagonal, the fork forced a retreat, and the rook crossed the open file. The Stone Chamber lies beyond the board.","第一部 · 第四章 · 第 3 关完成":"Book 1 · Chapter 4 · Room 3 complete",最少牺牲棋路:"The Least-Sacrifice Route","白色城堡抵达对岸，火门显现——正在进入魔法石密室！":"The white rook reaches the far rank and a fire door appears—entering the Stone Chamber!","最终密室已加载：先解药剂逻辑，再辨镜像，最后证明守护意图。":"Final chamber loaded: solve the potions, read the mirror, then prove your protective intent.",魔法石密室:"The Stone Chamber","目标：穿过黑焰，解读镜像，并证明你只想保护魔法石":"Objective: cross the black flames, interpret the mirror, and prove you seek only to protect the Stone.","七瓶药剂中，最小的瓶子可穿过黑焰。镜中真正的守护者口袋仍空着；想夺取魔法石的手只会触发密室腐化。":"Of seven potions, the smallest bottle crosses the black fire. In the mirror, a true guardian’s pocket remains empty; a hand reaching to take the Stone only awakens the chamber’s corruption.","七瓶取最小 · 镜中口袋为空 · 双手只作守护":"SMALLEST OF SEVEN · EMPTY MIRROR POCKET · OPEN HANDS PROTECT","厄里斯 · 欲望倒写显形":"ERISED · DESIRE REVEALED IN REVERSE",最小银瓶:"Smallest silver bottle","I · 穿越黑焰":"I · CROSS BLACK FIRE",空口袋镜影:"Empty-pocket reflection","II · 不占有":"II · CLAIM NOTHING",守护石的誓言:"Vow to protect the Stone","III · 只为保护":"III · PROTECT ONLY",夺取石的手:"Grasping hand","诱饵 · 占有欲":"DECOY · POSSESSIVE INTENT","“{label}”暴露了占有欲！线索消散，腐化诱惑升至 {count}。":"“{label}” revealed possessive intent! The clues dissolved and corruption rose to {count}.","最小银瓶让你穿过黑焰。现在观察镜中衣袋：真正不求占有的人，口袋里不会出现石头。":"The smallest silver bottle carried you through the black fire. Now inspect the reflected pocket: someone who seeks no possession will find no Stone there.","空口袋镜影证明你没有取石欲望。最后明确你的意图：保护它，而不是拥有它。":"The empty reflected pocket proves you do not seek the Stone. Declare your final intent: protect it, never possess it.","魔法石密室线索已确认 {count} / 3":"Stone Chamber clues confirmed: {count} / 3","{label}通过了密室检验，镜面中的金光更加清晰。":"{label} passed the chamber’s test; gold light sharpens in the mirror.","第一部完成：魔法石只向无意占有、决心守护的人显现":"Book One complete: the Stone appears only to one who will protect it without possessing it.","药剂穿过黑焰，空口袋识破欲望，守护誓言让魔法石安全显现。新的绿色干扰正在住宅中聚集。":"The potion crossed the black fire, the empty pocket exposed desire, and the protective vow revealed the Stone safely. Green interference is gathering at Privet Drive.","第一部 · 魔法石完成":"Book 1 · Philosopher’s Stone complete","第二部 · 不祥警告":"Book 2 · An Ominous Warning","守护之石化作金光——正在返回住宅，调查精灵留下的三重封锁！":"The protected Stone dissolves into gold light—returning to Privet Drive to investigate the elf’s triple blockade!","第二部首关已加载：沿邮槽、蛋糕与飞路炉追踪绿色魔力残痕。":"Book Two’s first room loaded: follow the green traces from the letter slot to the cake, then the fireplace.",精灵的封锁:"The Elf’s Blockade","目标：循魔力残痕解除住宅中的三重封锁，赶往国王十字车站":"Objective: follow the magical residue, break the house’s triple blockade, and reach King’s Cross.","绿色干扰从邮槽进入，绕过悬浮蛋糕，最后汇入壁炉封印。错碰尖叫灯会让封锁重新闭合。":"Green interference enters through the letter slot, circles the floating cake, then flows into the fireplace seal. Touching the shrieking lamp closes the blockade again.",飞车失控:"Runaway Flying Car","目标：在撞上高架桥前依次稳定配重、航向与油门":"Objective: stabilize the load, heading, and throttle in order before hitting the viaduct.","后备箱先把车头拉高；红色铁路信号给出航向；发动机过热时只能脉冲给油。猛踩油门会让飞车再次翻滚。":"The boot first pulls the nose high; the red railway signal gives the heading; an overheating engine accepts only pulsed throttle. Flooring it sends the car rolling again.",打人柳下:"Beneath the Whomping Willow","目标：读懂枝条的高扫、低返与露根间隙，安全抵达树洞":"Objective: read the high sweep, low return, and exposed-root opening to reach the hollow safely.","粗枝先从头顶横扫；回摆会贴近地面。只有第二次攻击收势后，发光树根之间才会短暂露出通道。":"A heavy branch sweeps overhead first; its return cuts close to the ground. Only after the second strike settles does a passage briefly open between the glowing roots.","楼梯下 · 楼上小卧室 · 17 号房 · 海上小屋":"STAIRS · BEDROOM · ROOM 17 · ROCK HUT","H. Potter · 楼梯下的储物间":"H. Potter · Cupboard under the Stairs","I · 楼梯下储物间":"I · CUPBOARD UNDER STAIRS","H. Potter · 楼上最小的卧室":"H. Potter · Smallest Bedroom Upstairs","II · 楼上最小卧室":"II · SMALLEST BEDROOM","H. Potter · 铁路景观酒店 17 号房":"H. Potter · Railview Hotel, Room 17","III · 铁路旅馆 17 号房":"III · RAILVIEW ROOM 17","H. Potter · 海上岩礁小屋":"H. Potter · Hut on the Rock, at Sea","IV · 海上岩礁小屋":"IV · HUT ON THE ROCK",楼梯下的储物间:"CUPBOARD UNDER THE STAIRS",通往对角巷:"DOOR TO DIAGON ALLEY","V. Dursley · 女贞路前门":"V. Dursley · Privet Drive Front Door","D. Dursley · 厨房餐桌":"D. Dursley · Kitchen Table","H. Potter · 动物园爬虫馆":"H. Potter · Zoo Reptile House","H. Potter · 石墙中学":"H. Potter · Stonewall High","顺序错误：“{destination}”不是下一处藏身地。四封信重新飞散！":"Wrong chronology: “{destination}” is not the next hiding place. All four letters scatter again!","时间线正确：{destination} · {count} / 4":"Chronology confirmed: {destination} · {count} / 4","时间线完成：循红蜡封印前往通往对角巷的门":"Chronology complete: follow the crimson wax seals to the door into Diagon Alley.","四处藏身地首尾相接，信上的猩红 H 蜡印化成了门钥匙。":"The four hiding places form one journey; the crimson H seals have become a door key.","四封信按时间顺序排列完成——通往对角巷的门已开启！":"The four letters are in chronological order—the door to Diagon Alley is open!","邮槽绿粉 · 蛋糕丝线 · 壁炉三环":"LETTER-SLOT POWDER · CAKE THREAD · THREE HEARTH RINGS",堵塞的黄铜邮槽:"Jammed brass letter slot","I · 绿粉由门外进入":"I · GREEN POWDER ENTERS FROM OUTSIDE",悬浮的紫罗兰布丁蛋糕:"Levitating violet pudding cake","II · 奶油下有绕行丝线":"II · ORBITING THREAD UNDER ICING",三环封印的飞路炉:"Floo fireplace with three seals","III · 三环汇聚于炉心":"III · THREE RINGS CONVERGE AT HEARTH",裂口尖叫油灯:"Cracked shrieking oil lamp","诱饵 · 红线接回警报":"DECOY · RED WIRE CLOSES ALARM","“{label}”接通了报警回路！封锁重置，干扰增强至 {count}。":"“{label}” closed the alarm circuit! The blockade reset; interference rose to {count}.","邮槽里的绿色粉尘来自室外。残痕没有走直线，而是绕向被悬浮咒托起的蛋糕。":"The green powder in the letter slot came from outside. Its trail bends toward the levitating cake instead of crossing the room directly.","蛋糕下方的魔力丝线指向壁炉。最后解除飞路炉上的三环封印。":"The magical thread beneath the cake points to the fireplace. Break the three Floo seals last.","住宅封锁痕迹已确认 {count} / 3":"House-blockade traces confirmed: {count} / 3","{label}的残痕已固定，绿色干扰显露下一段走向。":"The residue on {label} is fixed; the green interference reveals its next direction.","精灵的封锁完成：邮槽、悬浮蛋糕与飞路炉的干扰链已全部解除":"Elf blockade complete: the interference chain through letter slot, levitating cake, and Floo fireplace is broken.","绿色粉尘标出入口，悬浮蛋糕暴露绕行，飞路封印是最终汇聚点。住宅出口重新打开。":"Green powder marked the entrance, the floating cake exposed the detour, and the Floo seals marked the convergence. The house exit is open again.","第二部 · 第一章 · 第 1 关完成":"Book 2 · Chapter 1 · Room 1 complete","三重封锁碎成绿色星屑——正在登上失控飞车，追赶霍格沃茨特快！":"The triple blockade bursts into green sparks—boarding the runaway car to catch the Hogwarts Express!","飞车关卡已加载：先调整行李配重，再对准铁路，最后短促给油。":"Flying Car loaded: shift the luggage, align with the railway, then pulse the throttle.","禁区守卫 · 三首同眠 · 活板门在爪下":"FORBIDDEN GUARD · THREE HEADS ASLEEP · HATCH BENEATH THE PAWS","褪色乐谱：气息 → 琴弦 → 发条":"FADED SCORE: BREATH → STRINGS → CLOCKWORK",银木横笛:"Silverwood flute","I · 七孔夜风之息":"I · NIGHT WIND THROUGH SEVEN HOLES",月弦竖琴:"Moon-string harp","II · 新月琴框托梦":"II · CRESCENT FRAME CRADLES DREAMS",星纹发条音乐盒:"Star-inlaid music box","III · 黄铜滚筒封住鼾声":"III · BRASS CYLINDER SEALS THE SNORE","“{label}”打乱了旋律！三颗头同时睁眼，惊醒次数：{count}。":"“{label}” broke the melody! All three heads opened their eyes; wake-ups: {count}.","横笛的七孔送出夜风，左首已经合眼。现在用月弦托住刚形成的梦境。":"Night wind passed through the flute’s seven holes and closed the left head’s eyes. Now cradle the forming dream with moon strings.","竖琴的九根银弦让中首伏下。最后转动黄铜滚筒，以稳定发条节拍封住鼾声。":"The harp’s nine silver strings lowered the middle head. Finally turn the brass cylinder and seal the snoring with steady clockwork.","安眠旋律已完成 {count} / 3":"Lullaby completed: {count} / 3","{label}奏效，一颗头缓缓合上琥珀色双眼。":"{label} worked; one head slowly closes its amber eyes.","城堡禁区完成：三颗头都已沉睡，爪下的活板门安全开启":"Forbidden Corridor complete: all three heads sleep and the hatch beneath their paws is safe to open.","七孔夜风、九根月弦与黄铜发条叠成摇篮曲。铁箍活板门下吹来潮湿植物的气息。":"Seven-hole night wind, nine moon strings, and brass clockwork form the lullaby. Damp plant air rises through the iron-braced hatch.","第一部 · 第二章完成":"Book 1 · Chapter 2 complete",禁区守门人:"Guardian of the Forbidden Corridor","三头守卫沉入梦乡——第二章通关，正在前往“镜中秘密”！":"The three-headed guardian falls asleep—Chapter 2 complete; entering Secrets in the Mirror!","第三章已加载：在飞行训练场按风向与重量送回三件遗失物。":"Chapter 3 loaded: return three lost objects by wind direction and weight on the flying field.","行李后移 · 红灯校向 · 蓝区脉冲":"LUGGAGE BACK · ALIGN RED SIGNAL · PULSE IN BLUE",后移行李配重:"Shift luggage rearward","I · 皮箱压低车尾":"I · TRUNK WEIGHS DOWN REAR",对准红色铁路灯:"Align with red rail signal","II · 准星重合红灯":"II · SIGHT MEETS RED SIGNAL",短促脉冲油门:"Pulse the throttle","III · 蓝区三次短推":"III · THREE SHORT BLUE PULSES",一脚踩死油门:"Floor the throttle","诱饵 · 红区持续过热":"DECOY · REDLINE OVERHEAT","“{label}”让引擎过热！飞车翻滚，乱流升至 {count}。":"“{label}” overheated the engine! The car rolled and turbulence rose to {count}.","皮箱后移后车尾下沉，车头恢复水平。现在让方向盘准星与铁路尽头的红色信号灯重合。":"The rearward trunk lowers the tail and levels the nose. Now align the steering-wheel sight with the red signal at the end of the track.","航向已经锁定，但水温仍在红区。把细油门杆短推三次，不能踩住宽踏板。":"The heading is locked, but the temperature remains in the red. Give the slender throttle three short pushes; do not hold down the wide pedal.","飞车稳定步骤已完成 {count} / 3":"Stabilization steps completed: {count} / 3","{label}生效，飞车姿态恢复了一部分。":"{label} worked; the flying car regained some stability.","飞车失控完成：配重、航向与脉冲油门让车辆安全追上列车":"Flying Car complete: balanced weight, corrected heading, and pulsed throttle safely caught the train.","皮箱后移压低车尾，红灯准星校正航向，蓝区三次脉冲避免引擎过热。远处的打人柳正在挥动枝条。":"The rearward trunk lowered the tail, the red-signal sight corrected the heading, and three blue-zone pulses prevented overheating. The Whomping Willow thrashes ahead.","第二部 · 第一章 · 第 2 关完成":"Book 2 · Chapter 1 · Room 2 complete","飞车擦过高架桥，稳稳落在城堡草地——打人柳的粗枝突然苏醒！":"The car skims the viaduct and lands on the castle lawn—the Whomping Willow’s heavy branches suddenly awaken!","打人柳关卡已加载：等待高扫、俯身避低返，再冲过树根间隙。":"Whomping Willow loaded: wait for the high sweep, duck under the low return, then dash through the root gap.","破风高扫 · 落叶低返 · 绿根开隙":"HIGH SWEEP IN THE WIND · LOW RETURN THROUGH LEAVES · GREEN ROOT GAP",等待高枝扫过:"Wait for the high sweep","I · 风声在头顶":"I · WIND OVERHEAD",俯身避开低返:"Duck under the low return","II · 落叶贴地":"II · LEAVES SKIM THE GROUND",冲过露根间隙:"Dash through the root gap","III · 树洞显露":"III · THE HOLLOW OPENS",立刻直冲树洞:"Charge straight at the hollow","诱饵 · 粗枝蓄力":"DECOY · HEAVY BRANCH COCKED","“{label}”踩错节拍！粗枝扫中肩膀，擦伤升至 {count}。":"“{label}” broke the rhythm! A branch struck your shoulder; bruises: {count}.","高枝带着破风声从头顶扫过。枝梢正在贴着落叶低低返程，立刻俯身。":"The high branch tears through the air overhead. Its tip is returning low through the fallen leaves—duck now.","低枝擦过背后，主干短暂失去平衡。发光树根之间的缝隙就是第三拍。":"The low branch scrapes past your back and the trunk loses balance. The gap between the glowing roots is the third beat.","打人柳安全节拍已完成 {count} / 3":"Safe beats confirmed: {count} / 3","{label}：动作与枝条节拍吻合。":"{label}: your movement matches the branch rhythm.","打人柳下完成：高扫、低返、露根三拍全部避开，树洞通道已经打开":"Whomping Willow complete: high sweep, low return, and root-gap beats avoided; the hollow passage is open.","破风声预告高扫，贴地落叶暴露低返，两次攻击后的收势形成通往树洞的安全窗口。":"Rushing air warned of the high sweep, ground-skimming leaves revealed the low return, and the pause after both attacks opened a safe window to the hollow.","第二部 · 第一章 · 第 3 关完成":"Book 2 · Chapter 1 · Room 3 complete",树洞开启:"The Hollow Opens","你滑入树根下的安全通道。城堡走廊尽头，一行血字正从潮湿石墙上浮现……":"You slip into the passage beneath the roots. At the end of a castle corridor, bloody writing is emerging on the damp stone…","大楼梯 · 低台至月桥再至高塔":"GRAND STAIRCASE · LOW LANDING TO MOON BRIDGE TO HIGH TOWER","路线石板：I 低台 → II 月桥居中 → III 三尖高塔":"ROUTE SLATE: I LOW LANDING → II CENTERED MOON BRIDGE → III TRIPLE-SPIRE TOWER","低塔石阶 · 起点":"Low stair · starting landing","I · 七阶从最低平台升起":"I · SEVEN STEPS RISE FROM THE LOWEST LANDING","月光桥 · 中央刻线":"Moon bridge · center line","II · 钟摆居中时月桥停驻":"II · MOON BRIDGE STOPS WHEN THE PENDULUM CENTERS","高塔石阶 · 三尖塔":"High stair · triple spires","III · 三道刻痕指向最高塔":"III · THREE MARKS POINT TO THE HIGHEST TOWER","“{label}”转离了路线！三座楼梯重新移动，时间惩罚 +5 秒。":"“{label}” swung away from the route! All three stairs move again; time penalty +5 seconds.","低塔七阶已固定。等待钟摆尖端穿过中央银线，再寻找新月拱桥。":"The seven low steps are fixed. Wait for the pendulum tip to cross the central silver line, then find the crescent arch.","月光桥已固定。最后选择有三座尖塔与三道黄铜刻痕的最高平台。":"The moon bridge is fixed. Finally choose the highest landing with three spires and three brass marks.","路线已稳定 {count} / 3":"Segments stabilized: {count} / 3","{label}停止旋转，路线的一段已稳定。":"{label} stops rotating; one route segment is stable.","移动楼梯关卡完成：低台、月桥和三尖高塔已连接至画像走廊":"Moving Staircases complete: the low landing, moon bridge, and triple-spire tower now connect to the portrait corridor.","七级低塔、钟摆中央线与三尖高塔首尾相接。路线尽头的三幅画像正在争论银钥口令。":"The seven-step low stair, pendulum center line, and triple-spire tower now join. Three portraits argue over a silver-key password ahead.","第一部 · 第二章 · 第 1 关完成":"Book 1 · Chapter 2 · Room 1 complete",通往画像走廊:"The Route to the Portrait Corridor","三座楼梯在钟声中连接——正在前往“会说话的画像”！":"The three staircases connect as the clock chimes—entering Talking Portraits!","第二关已加载：比较画像证词，推导正确询问顺序。":"Room Two loaded: compare the portraits’ testimony and deduce the correct questioning order."},fr:{"《标准咒语·初级》":"Le Livre des sorts et enchantements, niveau 1",二号锡制坩埚:"Chaudron en étain, taille 2",雪白猫头鹰:"Harfang des neiges",等待主人的魔杖盒:"Écrin de baguette en attente de son sorcier",飞天扫帚:"Balai volant",水晶球:"Boule de cristal",黄铜天平:"Balance en laiton",高级魔药学:"Manuel avancé de potions","霍格沃茨一年级采购清单 · 预算 12 加隆":"Liste de fournitures de première année · Budget : 12 Gallions","按清单顺序：课本 → 二号锡制坩埚 → 猫头鹰 → 魔杖盒":"Suivez la liste : manuel → chaudron en étain taille 2 → hibou → écrin de baguette","清单顺序错误：“{label}”不该现在购买。采购篮被清空！":"Mauvais ordre : « {label} » ne doit pas encore être achetée. Le panier a été vidé !","已购入：{label}（{price} 加隆）":"Achat effectué : {label} ({price} Gallions)","采购完成：前往破釜酒吧出口":"Achats terminés : rejoignez la sortie du Chaudron Baveur","清单上的四枚墨点连成了一条通往下一段旅程的路线。":"Les quatre taches d’encre de la liste dessinent désormais le chemin vers la prochaine étape.","霍格沃茨采购清单完成——出口已经开启！":"La liste de fournitures de Poudlard est complète : la sortie est ouverte !",魔法石:"La Pierre philosophale",密室:"La Chambre des secrets",阿兹卡班的囚徒:"Le Prisonnier d’Azkaban",火焰杯:"La Coupe de feu",凤凰社:"L’Ordre du Phénix",混血王子:"Le Prince de sang-mêlé",死亡圣器:"Les Reliques de la Mort",霍格沃茨的第一道门:"La première porte de Poudlard","温暖烛光、哥特学院、深红与金色、古老石墙":"Lueurs de bougies, architecture gothique, rouge profond, or et antiques murs de pierre.",初入魔法世界:"Entrée dans le monde des sorciers",城堡禁区:"Les couloirs interdits du château",镜中秘密:"Les secrets du miroir",地下试炼:"Les épreuves souterraines",重组地址碎片并找出被信件覆盖的隐藏出口:"Reconstituez les fragments d’adresse et découvrez la sortie cachée sous les lettres.","依据课程清单匹配商店、物品和正确数量":"Associez chaque boutique, objet et quantité à la liste des fournitures.","组合木材、杖芯、光效和声音反馈":"Combinez bois, cœur, lumière et réactions sonores pour trouver la bonne baguette.",排列四学院象征与人物品质打开宴会厅:"Associez les quatre emblèmes à leurs qualités pour ouvrir la Grande Salle.",观察周期并在正确时机连接三段路线:"Observez le cycle et reliez les trois segments du parcours au bon moment.",从画像对话矛盾中推导正确口令:"Exploitez les contradictions des portraits pour déduire le mot de passe.","利用盔甲、猫叫与暗门进行潜行":"Servez-vous de l’armure, de la clochette du chat et d’une porte secrète pour éviter la ronde.",组合乐器并复现让守门生物入睡的旋律:"Combinez les instruments et reproduisez la mélodie qui endort le gardien.",控制漂浮轨迹把散落物送回正确位置:"Maîtrisez les trajectoires flottantes pour rendre chaque objet perdu.",利用悬浮机关移动障碍并建立逃生路线:"Utilisez la lévitation pour déplacer les obstacles et créer une issue.",按历史时间线排列书脊并避开尖叫书籍:"Classez les dos des livres par époque tout en évitant le volume hurleur.",比较镜像与现实差异选择真正需要的物品:"Comparez le reflet à la réalité pour choisir ce qui est réellement nécessaire.",控制光源与节奏摆脱收缩藤蔓:"Maîtrisez la lumière et le rythme pour échapper aux lianes qui se resserrent.","依据翅膀损伤、速度和锁孔锁定钥匙":"Identifiez la clé grâce à son aile abîmée, sa vitesse et la serrure.",规划最少牺牲路线穿过动态棋盘:"Planifiez un passage sur l’échiquier vivant avec un minimum de sacrifices.","结合药剂逻辑、镜像线索与章节物品":"Combinez la logique des potions, les indices du miroir et les objets du chapitre.",猫头鹰来信:"Le courrier des hiboux","目标：按弗农改变藏身处的时间顺序检查四封信":"Objectif : examinez les quatre lettres dans l’ordre des cachettes choisies par les Dursley.","地址会追着哈利变化。错误选择会让已确认的信全部重新飞散。":"L’adresse suit Harry partout. Une erreur disperse toutes les lettres déjà confirmées.",对角巷清单:"La liste du Chemin de Traverse","目标：按霍格沃茨清单采购四件合规格物品，预算 12 加隆":"Objectif : achetez quatre fournitures conformes, dans l’ordre de la liste, avec douze Gallions.","课本 → 二号锡制坩埚 → 猫头鹰 → 魔杖盒。核对规格与价签，买错会清空采购篮。":"Manuel → chaudron en étain taille 2 → hibou → étui à baguette. Vérifiez les caractéristiques et les prix : une erreur vide le panier.",魔杖选择:"La baguette choisit son sorcier","目标：第一阶段，从三种木材中找出与你产生稳定共鸣的一种":"Objectif : trouvez d’abord, parmi trois bois, celui qui entre en résonance stable avec vous.","木材线索：闪电形旧伤旁，常青叶不会在严冬凋零。选错会触发失控魔法。":"Indice : près d’une ancienne cicatrice en forme d’éclair, une feuille persistante ne fane jamais en hiver. Un mauvais choix déchaîne une magie incontrôlée.","木材  ·  杖芯  ·  长度":"BOIS · CŒUR · LONGUEUR","木材 {wood}  杖芯 {core}  长度 {length}":"BOIS {wood}  CŒUR {core}  LONGUEUR {length}","奥利凡德 · 公元前 382 年":"OLLIVANDER · FABRICANT DE BAGUETTES DEPUIS 382 AV. J.-C.",登上霍格沃茨特快:"Monter à bord du Poudlard Express",橡木:"Chêne",冬青木:"Houx",紫杉木:"If",龙心弦:"Ventricule de dragon",凤凰羽毛:"Plume de phénix",独角兽毛:"Crin de licorne",九英寸:"Neuf pouces",十一英寸:"Onze pouces",十三英寸:"Treize pouces","{label}迸出危险火花——木材匹配仍未完成。":"{label} projette une violente gerbe d’étincelles : l’accord du bois reste à trouver.","第二阶段：在三种杖芯中找出会回应守护、忠诚与重生的一种":"Deuxième étape : choisissez le cœur qui répond à la protection, la loyauté et la renaissance.","杖芯线索：它来自浴火重生的鸟，曾送来两根命运彼此呼应的羽毛。":"Indice du cœur : il vient d’un oiseau qui renaît du feu et donna deux plumes aux destins liés.","稳定共鸣！冬青木完成了第一阶段匹配。":"Résonance stable ! Le houx termine la première étape.","{label}抗拒了冬青木——重新解读浴火重生的线索。":"{label} résiste au houx : relisez l’indice de la renaissance par le feu.","杖芯匹配成功：凤凰羽毛与冬青木稳定共鸣，准备校准长度":"Cœur accordé : la plume de phénix résonne avec le houx. Calibrez la longueur.","长度线索：短杖的火星触不到远处，长杖的光弧越过目标；让光准确停在十一道刻痕。":"Indice de longueur : une baguette courte manque la cible et une longue la dépasse ; arrêtez la lumière sur onze encoches.","凤凰羽毛释放出温暖金光——第二阶段匹配完成！":"La plume de phénix libère une lumière dorée : deuxième étape accomplie !",火星在目标前坠落:"les étincelles tombent avant la cible",光弧越过了目标:"l’arc lumineux dépasse la cible","{label}：{direction}！重新校准长度。":"{label} : {direction} ! Recalibrez la longueur.","魔杖选择完成：带上魔杖，从车站门前往霍格沃茨分院仪式":"Baguette choisie : emportez-la vers la porte de la gare et la cérémonie de Répartition.","三阶段共鸣稳定。奥利凡德为魔杖系上金色封签，通往霍格沃茨的门已经开启。":"Les trois résonances sont stables. Ollivander noue un sceau doré et ouvre la voie vers Poudlard.","十一道刻痕同时亮起——魔杖选择了巫师！前往已开启的车站门。":"Les onze encoches s’illuminent : la baguette a choisi son sorcier ! Rejoignez la porte ouverte.","第一部 · 第一章 · 第 {room} 关":"Tome 1 · Chapitre 1 · Salle {room}","门正在打开：准备进入第 {room} 关“{name}”":"La porte s’ouvre : préparez-vous à entrer dans la salle {room}, « {name} ».","魔杖店完成！正在前往“{name}”……":"Boutique de baguettes terminée ! En route vers « {name} »…","第四关已加载：你已抵达霍格沃茨礼堂，分院仪式即将开始。":"Salle quatre chargée : vous êtes dans la Grande Salle et la cérémonie de Répartition va commencer.","共鸣已确认：{count} / 3 · 失误：{mistakes}":"Accords confirmés : {count} / 3 · erreurs : {mistakes}",分院仪式:"La cérémonie de la Répartition","目标：走近分院帽，观察大厅里的四学院象征":"Objectif : approchez-vous du Choixpeau et observez les emblèmes des quatre maisons dans la Grande Salle.","勇气、忠诚、智慧与野心各有象征；分院帽正在等待你的选择。":"Courage, loyauté, sagesse et ambition ont chacun leur emblème. Le Choixpeau attend votre décision.","目标：读懂分院帽诗谜，依次触碰勇气、忠诚、智慧与野心的动物徽章":"Objectif : résolvez l’énigme du Choixpeau et touchez dans l’ordre les emblèmes animaux du courage, de la loyauté, de la sagesse et de l’ambition.","观察动物轮廓：先直面恐惧，再守护同伴；随后以思考照亮未知，最后以意志开辟道路。选错不会清空已解线索。":"Lisez les silhouettes animales : affrontez d’abord la peur, protégez ensuite vos compagnons, éclairez l’inconnu par la réflexion, puis ouvrez la voie par la volonté. Une erreur conserve les indices résolus.","直面恐惧 · 守护同伴 · 思考照明 · 开辟道路":"AFFRONTER LA PEUR · PROTÉGER SES COMPAGNONS · ÉCLAIRER PAR LA PENSÉE · OUVRIR LA VOIE","狮 · 勇气":"Lion · Courage","I · 直面恐惧":"I · AFFRONTER LA PEUR","獾 · 忠诚":"Blaireau · Loyauté","II · 守护同伴":"II · PROTÉGER SES COMPAGNONS","鹰 · 智慧":"Aigle · Sagesse","III · 思考照明":"III · ÉCLAIRER PAR LA PENSÉE","蛇 · 野心":"Serpent · Ambition","IV · 开辟道路":"IV · OUVRIR LA VOIE",先找敢于直面恐惧的象征:"cherchez d’abord le courage qui affronte la peur","现在要找不求荣耀、始终守护同伴的象征":"cherchez maintenant celui qui protège ses compagnons sans chercher la gloire",现在要找以思考照亮未知的象征:"cherchez maintenant celui dont la pensée éclaire l’inconnu","最后要找意志坚定、善于为目标开辟道路的象征":"cherchez enfin celui dont la volonté ouvre la voie","“{label}”不符合诗谜顺序。分院帽低声提醒：{reminder}。":"« {label} » rompt l’ordre de l’énigme. Le Choixpeau murmure : {reminder}.","分院线索已确认 {count} / 4":"Indices de Répartition confirmés : {count} / 4","勇气线索已确认：继续解读“留在朋友身边”的学院象征":"Courage confirmé : interprétez maintenant la maison qui reste auprès de ses amis.","第一句已解：狮代表直面恐惧的勇气。下一句赞美不求荣耀、始终守护同伴的品格。":"Premier vers résolu : le lion incarne le courage face à la peur. Le suivant célèbre celui qui protège ses compagnons sans rechercher la gloire.","狮徽亮起金光——勇气是分院诗谜的第一条线索！":"L’emblème du lion brille d’or : le courage est le premier indice !","忠诚线索已确认：继续寻找“以思考照亮未知”的学院象征":"Loyauté confirmée : cherchez maintenant la maison qui éclaire l’inconnu par la pensée.","第二句已解：獾代表不求荣耀的忠诚。下一句属于用问题、观察与求知驱散迷雾的人。":"Deuxième vers résolu : le blaireau incarne une loyauté sans gloire. Le suivant appartient à ceux qui dissipent le brouillard par les questions, l’observation et le savoir.","獾徽泛起暖黄光芒——忠诚是分院诗谜的第二条线索！":"L’emblème du blaireau rayonne d’un jaune chaleureux : la loyauté est le deuxième indice !","智慧线索已确认：继续寻找“为目标开辟道路”的学院象征":"Sagesse confirmée : cherchez maintenant la maison qui ouvre la voie vers son objectif.","第三句已解：鹰代表以思考照亮未知的智慧。最后一句属于意志坚定、善于实现目标的人。":"Troisième vers résolu : l’aigle incarne la sagesse qui éclaire l’inconnu. Le dernier appartient aux volontés déterminées qui accomplissent leurs objectifs.","鹰徽闪过清澈蓝光——智慧是分院诗谜的第三条线索！":"L’emblème de l’aigle lance un éclair bleu limpide : la sagesse est le troisième indice !","第一章完成：四种品格共同照亮了你的分院之路":"Chapitre un terminé : les quatre qualités éclairent ensemble votre Répartition.","勇气、忠诚、智慧与野心并非互斥；分院帽认可了你完整读懂诗谜的选择。":"Courage, loyauté, sagesse et ambition ne s’excluent pas ; le Choixpeau reconnaît votre lecture complète de l’énigme.","第一部 · 第一章完成":"Tome 1 · Chapitre 1 terminé",霍格沃茨的新生:"Un nouvel élève à Poudlard","蛇徽亮起翠光——四学院诗谜完成，第一章通关！":"L’emblème du serpent brille d’émeraude : l’énigme des quatre maisons est résolue et le chapitre est terminé !",移动楼梯:"Les escaliers mouvants","目标：依据钟摆与月相路线，依次稳定三座移动楼梯":"Objectif : suivez les indices du pendule et de la lune pour stabiliser trois escaliers dans le bon ordre.","路线铭文：从最低的平台起步；月光桥只在钟摆居中时停驻；最后登上最高塔。选错会让路线复位并增加 5 秒惩罚。":"Inscription : partez du palier le plus bas ; le pont lunaire s’immobilise lorsque le pendule est centré ; terminez par la plus haute tour. Une erreur réinitialise le parcours et ajoute cinq secondes.",会说话的画像:"Les portraits bavards","目标：比较三幅画像的证词，按可信的发言顺序询问口令":"Objectif : confrontez les témoignages de trois portraits et interrogez-les dans l’ordre crédible pour obtenir le mot de passe.","学者说骑士不是第一位；骑士承认学者必须先发言；女士说自己在骑士之后。错误询问会惊动走廊并清空推理。":"L’érudit affirme que le chevalier n’est pas le premier ; le chevalier reconnaît que l’érudit doit parler avant lui ; la dame dit venir après le chevalier. Une mauvaise question alerte le couloir et efface vos déductions.",蓝袍月桂学者:"Érudit en robe bleue et laurier","“骑士绝不是第一位；我的月桂框知道开头。”":"« Le chevalier n’est jamais le premier ; mon cadre de laurier connaît le début. »","I · 月桂开篇 · 展卷求证":"I · LE LAURIER COMMENCE · MANUSCRIT OUVERT",放下长剑的银甲骑士:"Chevalier d’argent à l’épée abaissée","“学者必须先发言，女士保管最后一词。”":"« L’érudit doit parler en premier ; la dame garde le dernier mot. »","II · 银甲承接 · 剑尖向下":"II · L’ARGENT SUIT · ÉPÉE ABAISSÉE",持银钥的月桂女士:"Dame au laurier tenant la clé d’argent","“我在骑士之后，银钥只为完整证词转动。”":"« Je viens après le chevalier ; la clé d’argent ne tourne que pour un témoignage complet. »","III · 月桂收尾 · 银钥转门":"III · LE LAURIER CONCLUT · LA CLÉ TOURNE","证词链 · 月桂开篇 → 银剑承接 → 银钥收尾":"CHAÎNE DES TÉMOIGNAGES · LAURIER → ÉPÉE D’ARGENT → CLÉ D’ARGENT",银钥证词门:"PORTE DES TÉMOIGNAGES À CLÉ D’ARGENT","“{label}”高声反驳！证词链断裂，画像怀疑升至 {count}。":"« {label} » proteste vivement ! La chaîne se brise ; la méfiance des portraits monte à {count}.","学者的月桂框亮起。她确认：放下长剑的银甲骑士应当接着发言。":"Le cadre de laurier de l’érudit s’illumine. Il confirme que le chevalier d’argent à l’épée abaissée doit parler ensuite.","骑士让剑尖垂地并指向女士：最后一个词藏在她举起的银钥之后。":"Le chevalier abaisse son épée et désigne la dame : le dernier mot attend derrière sa clé d’argent levée.","可信证词已连接 {count} / 3":"Témoignages fiables reliés : {count} / 3","{quote}——这段证词与前文一致。":"{quote} — ce témoignage concorde avec la chaîne.","画像谜题完成：银钥口令已经显现":"Énigme des portraits résolue : le mot de passe de la clé d’argent est révélé.","三段证词一致。完整口令：“{password}”。":"Les trois témoignages concordent. Mot de passe complet : « {password} ».","月桂之后，银钥先行":"Après le laurier, la clé d’argent ouvre la voie","第一部 · 第二章 · 第 2 关完成":"Tome 1 · Chapitre 2 · Salle 2 terminée",银钥口令:"Le mot de passe de la clé d’argent","画像齐声念出：“{password}”——正在进入管理员的巡夜路线！":"Les portraits récitent « {password} » ensemble — entrée sur le parcours du concierge !","第三关已加载：借助盔甲、猫铃与挂毯避开巡夜灯光。":"Salle trois chargée : utilisez l’armure, la clochette et la tapisserie pour éviter la lanterne.",管理员的巡夜:"La ronde du concierge","目标：利用盔甲遮挡、猫铃声与暗门，避开管理员的灯光巡查":"Objectif : utilisez l’armure, la clochette du chat et la porte secrète pour échapper à la lanterne du concierge.","巡夜图记：灯光先扫过空盔甲；猫铃能把脚步引向反方向；最后掀开独角兽挂毯。走错会清空路线并提高警戒。":"Notes de ronde : la lumière balaie d’abord l’armure vide ; la clochette attire les pas ailleurs ; soulevez enfin la tapisserie à la licorne. Une erreur efface l’itinéraire et renforce l’alerte.",三头犬活板门:"Le gardien à trois têtes","目标：按守门生物能接受的层次，奏出完整安眠旋律":"Objectif : jouez la berceuse complète selon les couches sonores que le gardien peut supporter.","褪色乐谱写着：先让气息像夜风进入梦乡，再让琴弦托住梦境，最后以发条的轻响封住鼾声。错奏会重置旋律并惊醒守卫。":"La partition effacée indique : que le souffle mène d’abord au sommeil comme un vent nocturne, que les cordes portent ensuite le rêve, puis qu’un léger mécanisme scelle le ronflement. Une fausse note recommence la mélodie et réveille le gardien.",飞行课遗失物:"Cours de vol : objets perdus","目标：借助风向旗判断重量，依次把三件遗失物送入对应的安全轨迹":"Objectif : lisez la manche à air et renvoyez trois objets perdus sur leur trajectoire sûre, du plus léger au plus lourd.","风向板写着：最轻的红色织物先借低风归队；有月纹的笔记随后穿过中环；沉重黄铜罗盘最后沿高风落到新生手中。错序会卷起乱流并吹散全部物品。":"Le panneau indique : le tissu rouge, très léger, prend d’abord le courant bas ; le carnet marqué d’une lune traverse ensuite l’anneau central ; la lourde boussole en laiton revient enfin par le courant haut. Une erreur soulève des turbulences et disperse tout.",巨怪洗手间:"Les toilettes du troll","目标：依次稳定漏水、悬浮瓦砾，再放下横梁架出逃生路线":"Objectif : stoppez la fuite, faites léviter les gravats, puis abaissez la poutre pour créer une issue.","破裂水管正在冲散落脚点。先转动月纹阀止水，再让碎石升起清出通道，最后才能把高处横梁平稳放到沟渠上。错序会让巨怪逼近并震塌路线。":"La conduite rompue emporte les appuis. Tournez d’abord la vanne marquée d’une lune, soulevez les gravats pour dégager le passage, puis posez la poutre au-dessus du canal. Une erreur rapproche le troll et fait s’effondrer l’itinéraire.","裂管月阀止水 · 蓝光悬石清障 · 双链横梁架桥":"VANNE LUNAIRE · GRAVATS EN LÉVITATION · POUTRE À DEUX CHAÎNES","月阀 · 悬石 · 双链桥":"VANNE · GRAVATS · PONT À CHAÎNES",月纹止水阀:"Vanne d’arrêt marquée d’une lune","I · 裂管月阀 · 先止水":"I · CONDUITE ROMPUE · FERMER D’ABORD",悬浮碎石阵:"Amas de gravats en lévitation","II · 蓝光悬石 · 再清障":"II · LUEUR BLEUE · DÉGAGER",锁链橡木横梁:"Poutre de chêne suspendue","III · 双链横梁 · 最后架桥":"III · DEUX CHAÎNES · PONT EN DERNIER","“{label}”触发过早！路线震塌，巨怪危险升至 {count}。":"« {label} » a bougé trop tôt ! Le passage s’est effondré et le danger du troll monte à {count}.","月纹阀咬合裂管，喷流终于停住。现在让蓝光托起沟渠前的五块碎石。":"La vanne lunaire serre la conduite rompue et coupe le jet. Soulevez maintenant les cinq pierres près du canal avec la lueur bleue.","五块碎石悬到巨怪头顶，桥位已经清空。最后松开双链，把橡木横梁降到沟渠上。":"Les cinq pierres flottent au-dessus du troll et l’appui du pont est libre. Relâchez les deux chaînes et abaissez la poutre de chêne.","逃生机关已稳定 {count} / 3":"Mécanismes stabilisés : {count} / 3","{label}稳定生效，巨怪被机关拖慢。":"{label} est stabilisé ; le mécanisme ralentit le troll.","巨怪洗手间完成：双链横梁已跨过沟渠，安全逃生路线建立":"Toilettes du troll terminées : la poutre à deux chaînes franchit le canal et sécurise la fuite.","月阀封住裂管，悬浮碎石清出桥位，双链横梁连接出口。禁书区门缝透出幽蓝微光。":"La vanne a fermé la conduite, les gravats ont libéré l’appui et la poutre rejoint la sortie. Une lueur bleue filtre de la Réserve.","第一部 · 第三章 · 第 2 关完成":"Tome 1 · Chapitre 3 · Salle 2 terminée",悬浮逃生:"Évasion en lévitation","双链横梁稳稳落下——正在穿过幽蓝门廊，前往图书馆禁书区！":"La poutre à deux chaînes se pose — passage par la porte bleutée vers la Réserve !","第三关已加载：按历史年代排列安全书脊，千万别惊醒锁链无年卷。":"Salle 3 chargée : classez les dos sûrs par date sans réveiller le volume sans date enchaîné.",图书馆禁书区:"La Réserve","目标：依据馆藏年代，按从古到今的顺序点亮三本安全书脊":"Objectif : d’après les dates du catalogue, éclairez trois dos de livres sûrs du plus ancien au plus récent.","目录铜牌记载：四学院建校录最古老；龙灾账册写于其后数百年；月蚀纪事刚完成修订。避开锁链缠绕、会尖叫的无年卷。":"Le catalogue de cuivre précise : le Registre des Fondateurs est le plus ancien ; le Livre du Fléau des dragons vient plusieurs siècles après ; la Chronique de l’éclipse vient d’être révisée. Évitez le volume sans date, enchaîné et hurleur.",厄里斯魔镜:"Le Miroir du Riséd","目标：比较镜中欲望与现实处境，依次选择真正需要的三件物品":"Objectif : confrontez le désir du miroir à la réalité et choisissez, dans l’ordre, les trois choses dont vous avez vraiment besoin.","镜中人戴着王冠、捧着奖杯，却在现实的寒风中发抖。先御寒，再为黑暗出口照路；最后记住：能共同离开的人，比独占的荣誉更重要。":"Le reflet porte une couronne et un trophée, mais grelotte dans le froid réel. Choisissez d’abord de quoi vous réchauffer, puis une lumière pour la sortie obscure ; souvenez-vous enfin qu’un compagnon qui part avec vous vaut mieux qu’une gloire solitaire.",魔鬼网:"Le Filet du Diable","目标：保持镇静，按正确节奏控制蓝铃火焰，让藤蔓松开地下出口":"Objectif : gardez votre calme et maîtrisez les flammes bleues au bon rythme pour que les lianes libèrent la sortie souterraine.","挣扎会让藤蔓收紧。先放松摆脱缠绕，再点燃冷焰，最后维持稳定光照；猛烈爆燃只会惊动整片根网。":"Se débattre resserre les lianes. Détendez-vous d’abord, allumez ensuite la flamme froide, puis maintenez une lumière stable ; une flambée brutale alerterait tout le réseau de racines.","停止挣扎 · 蓝铃冷焰 · 三拍恒光":"CESSER DE LUTTER · FLAMME BLEUE · TROIS PULSATIONS STABLES",放松呼吸:"Se détendre et respirer","I · 停止挣扎":"I · CESSER DE LUTTER",点燃蓝铃冷焰:"Allumer la flamme de jacinthe","II · 微光驱藤":"II · LA LUEUR REPOUSSE LES LIANES",维持恒定光照:"Maintenir une lumière stable","III · 稳住三拍":"III · TENIR TROIS PULSATIONS",猛烈爆燃:"Flambée violente","诱饵 · 惊动根网":"LEURRE · ALERTE LE RÉSEAU","地下试炼已加载：放松藤蔓缠绕，以蓝铃冷焰和三拍恒光打开根网。":"Épreuve souterraine chargée : relâchez les lianes, puis ouvrez le réseau avec la flamme bleue et trois pulsations stables.","“{label}”打乱节奏！根网骤然收紧至 {count} 级；先放松，再重新开始。":"« {label} » a brisé le rythme ! Le réseau s’est resserré au niveau {count} ; détendez-vous avant de recommencer.","你停止挣扎，第一层藤蔓松开。现在点燃不会灼伤施法者的蓝铃冷焰。":"Vous cessez de lutter et les premières lianes se relâchent. Allumez maintenant la flamme bleue qui ne brûle pas son lanceur.","冷焰逼退根须。最后保持三拍恒光，不要让亮度突然爆发。":"La flamme froide repousse les racines. Maintenez trois pulsations régulières sans provoquer de flambée.","魔鬼网光照节奏已完成 {count} / 3":"Rythme lumineux accompli : {count} / 3","{label}奏效，地下出口上方的藤蔓正在退缩。":"{label} fonctionne ; les lianes au-dessus de la sortie souterraine reculent.","魔鬼网完成：稳定冷焰驱散根网，通往飞钥匙房的地下出口已经开启":"Filet du Diable terminé : la flamme froide et stable disperse le réseau et ouvre la sortie vers la salle des clés.","镇静削弱缠绕，蓝铃冷焰逼退藤蔓，三拍恒光打开根网。前方传来成群翅膀的振动声。":"Le calme affaiblit l’étreinte, la flamme bleue repousse les lianes et trois pulsations ouvrent les racines. Un essaim d’ailes vrombit plus loin.","第一部 · 第四章 · 第 1 关完成":"Tome 1 · Chapitre 4 · Salle 1 terminée",冷焰退藤:"Les lianes cèdent à la flamme froide","魔鬼网缩回石缝——正在进入飞钥匙房！":"Le Filet du Diable se retire dans la pierre — entrée dans la salle des clés !",飞钥匙房:"La salle des clés volantes","目标：依次确认翅膀损伤、飞行轨迹和锁孔材质，锁定唯一真钥匙":"Objectif : identifiez successivement l’aile abîmée, la trajectoire et le métal de la serrure pour isoler la bonne clé.","门锁留下银屑；真正用过的钥匙左翼弯折，负重后会沿顺时针轨迹下沉。先观察损伤，再追踪轨迹，最后核对银色钥匙。":"La serrure a laissé de la limaille d’argent. La clé déjà utilisée a l’aile gauche tordue et descend en tournant dans le sens horaire. Observez l’usure, suivez la trajectoire, puis confirmez la clé d’argent.","左翼折痕 · 顺时针下沉 · 银屑锁孔":"AILE GAUCHE TORDUE · DESCENTE HORAIRE · SERRURE ARGENTÉE",左翼弯折的钥影:"Clé à l’aile gauche tordue","I · 使用损伤":"I · TRACE D’USURE",顺时针下沉轨迹:"Trajectoire descendante horaire","II · 负重飞行":"II · VOL SOUS CHARGE",小型银钥匙:"Petite clé d’argent","III · 银屑吻合":"III · ARGENT CONFIRMÉ",华丽金钥匙:"Clé dorée ouvragée","诱饵 · 锁孔无金屑":"LEURRE · AUCUNE TRACE D’OR","飞钥匙房已加载：依次核对折翼、飞行轨迹和锁孔银屑。":"Salle des clés chargée : examinez dans l’ordre l’aile tordue, la trajectoire horaire et la limaille d’argent.","“{label}”惊散了钥匙群！追逐失误升至 {count}，三条证据需要重新确认。":"« {label} » a dispersé l’essaim ! Les erreurs montent à {count} ; revérifiez les trois indices.","左翼折痕与门框刮痕一致。现在观察负重钥匙群，寻找顺时针下沉的轨迹。":"L’aile gauche tordue correspond à la rayure du chambranle. Observez maintenant l’essaim chargé et sa descente horaire.","下沉轨迹锁定了小型钥匙。最后核对锁孔银屑，排除华丽但材质不符的金钥匙。":"La descente désigne une petite clé. Comparez enfin la limaille d’argent et écartez la clé dorée, malgré ses ornements.","飞钥匙证据已确认 {count} / 3":"Indices de clé confirmés : {count} / 3","{label}与现场证据吻合，钥匙群的范围缩小了。":"{label} correspond aux traces matérielles ; l’essaim se réduit.","飞钥匙房完成：折翼银钥匙准确嵌入门锁，通往巫师棋盘的石门已经开启":"Salle des clés terminée : la clé d’argent à l’aile tordue ouvre la porte de pierre vers l’échiquier.","折翼证明它被使用过，顺时针下沉暴露负重，银屑完成最终材质核对。前方传来巨大棋子的脚步声。":"L’aile tordue prouve l’usure, la descente horaire révèle le poids et la limaille confirme l’argent. Des pièces géantes s’ébranlent plus loin.","第一部 · 第四章 · 第 2 关完成":"Tome 1 · Chapitre 4 · Salle 2 terminée",折翼银钥匙:"La clé d’argent à l’aile tordue","银钥匙旋转一周，棋盘石门轰然开启——正在进入巫师棋盘！":"La clé d’argent accomplit un tour et la porte de pierre s’ouvre avec fracas — entrée sur l’échiquier !","巫师棋已加载：先诱敌，再双攻，最后沿空线推进。":"Échiquier chargé : diversion, fourchette, puis avancée sur la colonne libre.",巫师棋:"Les échecs version sorcier","目标：用最少牺牲打开通往对岸的安全棋路":"Objectif : ouvrez un passage sûr sur l’échiquier en sacrifiant le moins de pièces possible.","黑后封锁中央。先用边兵引开主教，再让骑士双攻国王与城堡，最后直车沿空出的纵线推进；贸然冲后会让已投入的棋子全部被吃。":"La dame noire verrouille le centre. Attirez d’abord le fou avec le pion de l’aile, réalisez ensuite une fourchette sur le roi et la tour avec le cavalier, puis avancez la tour sur la colonne libérée. Charger la dame trop tôt condamne toutes les pièces engagées.","边兵牵制主教 · 骑士双攻 · 城堡穿过空线":"LE PION ATTIRE LE FOU · FOURCHETTE DU CAVALIER · TOUR SUR COLONNE LIBRE",边兵诱敌:"Diversion du pion","I · 引开主教":"I · ÉCARTER LE FOU",骑士双攻:"Fourchette du cavalier","II · 将军攻车":"II · ROI ET TOUR MENACÉS",城堡沿空线推进:"Tour sur colonne libre","III · 空线抵岸":"III · TRAVERSER LA COLONNE",王后强攻:"Charge de la dame","诱饵 · 暴露全线":"LEURRE · COLONNE EXPOSÉE","“{label}”暴露了棋路！巨棋吃掉已投入棋子，被吃总数升至 {count}。":"« {label} » a exposé le passage ! Les pièces géantes capturent les forces engagées ; {count} pièces perdues au total.","边兵引开了黑主教。现在用骑士同时威胁国王与城堡，迫使黑方让出中央。":"Le pion de l’aile a écarté le fou noir. Menacez maintenant le roi et la tour avec le cavalier pour libérer le centre.","骑士双攻奏效，纵线已经清空。最后让城堡沿直线推进到对岸。":"La fourchette du cavalier a libéré la colonne. Faites enfin avancer la tour en ligne droite jusqu’au bord opposé.","安全棋步已确认 {count} / 3":"Coups sûrs confirmés : {count} / 3","{label}成立，巨型黑棋被迫改换阵形。":"{label} fonctionne ; les pièces noires géantes doivent changer de formation.","巫师棋完成：仅以边兵诱敌，骑士与城堡已安全抵达对岸":"Échiquier terminé : seul le pion de l’aile est sacrifié ; le cavalier et la tour atteignent l’autre bord.","诱敌打开斜线，双攻迫使让位，城堡穿过空线。最后的魔法石密室就在棋盘后方。":"La diversion ouvre une diagonale, la fourchette force le repli et la tour traverse la colonne libre. La chambre de la Pierre se trouve au-delà.","第一部 · 第四章 · 第 3 关完成":"Tome 1 · Chapitre 4 · Salle 3 terminée",最少牺牲棋路:"Le passage au moindre sacrifice","白色城堡抵达对岸，火门显现——正在进入魔法石密室！":"La tour blanche atteint l’autre bord et une porte de feu apparaît — entrée dans la chambre de la Pierre !","最终密室已加载：先解药剂逻辑，再辨镜像，最后证明守护意图。":"Chambre finale chargée : résolvez les potions, lisez le miroir, puis prouvez votre intention protectrice.",魔法石密室:"La chambre de la Pierre","目标：穿过黑焰，解读镜像，并证明你只想保护魔法石":"Objectif : traversez les flammes noires, interprétez le miroir et prouvez que vous voulez seulement protéger la Pierre.","七瓶药剂中，最小的瓶子可穿过黑焰。镜中真正的守护者口袋仍空着；想夺取魔法石的手只会触发密室腐化。":"Parmi les sept potions, le plus petit flacon permet de franchir les flammes noires. Dans le miroir, la poche du véritable gardien reste vide ; une main tendue pour prendre la Pierre ne fait qu’éveiller la corruption de la chambre.","七瓶取最小 · 镜中口袋为空 · 双手只作守护":"LE PLUS PETIT DES SEPT · POCHE VIDE DANS LE MIROIR · MAINS OUVERTES PROTECTRICES","厄里斯 · 欲望倒写显形":"RISÉD · LE DÉSIR SE RÉVÈLE À L’ENVERS",最小银瓶:"Le plus petit flacon d’argent","I · 穿越黑焰":"I · FRANCHIR LE FEU NOIR",空口袋镜影:"Reflet à la poche vide","II · 不占有":"II · NE RIEN POSSÉDER",守护石的誓言:"Serment de protéger la Pierre","III · 只为保护":"III · PROTÉGER SEULEMENT",夺取石的手:"Main avide","诱饵 · 占有欲":"LEURRE · DÉSIR DE POSSESSION","“{label}”暴露了占有欲！线索消散，腐化诱惑升至 {count}。":"« {label} » a révélé un désir de possession ! Les indices se dissipent et la corruption monte à {count}.","最小银瓶让你穿过黑焰。现在观察镜中衣袋：真正不求占有的人，口袋里不会出现石头。":"Le plus petit flacon d’argent vous a fait franchir le feu noir. Observez maintenant la poche dans le miroir : qui ne cherche rien à posséder n’y trouvera aucune Pierre.","空口袋镜影证明你没有取石欲望。最后明确你的意图：保护它，而不是拥有它。":"La poche vide prouve que vous ne convoitez pas la Pierre. Affirmez enfin votre intention : la protéger, jamais la posséder.","魔法石密室线索已确认 {count} / 3":"Indices de la chambre confirmés : {count} / 3","{label}通过了密室检验，镜面中的金光更加清晰。":"{label} réussit l’épreuve de la chambre ; la lumière dorée se précise dans le miroir.","第一部完成：魔法石只向无意占有、决心守护的人显现":"Tome 1 terminé : la Pierre n’apparaît qu’à qui veut la protéger sans la posséder.","药剂穿过黑焰，空口袋识破欲望，守护誓言让魔法石安全显现。新的绿色干扰正在住宅中聚集。":"La potion a franchi le feu noir, la poche vide a démasqué le désir et le serment protecteur a révélé la Pierre sans danger. Une interférence verte se rassemble à Privet Drive.","第一部 · 魔法石完成":"Tome 1 · La Pierre philosophale terminé","第二部 · 不祥警告":"Tome 2 · Un sinistre avertissement","守护之石化作金光——正在返回住宅，调查精灵留下的三重封锁！":"La Pierre protégée se dissout en lumière dorée — retour à Privet Drive pour enquêter sur le triple blocus de l’elfe !","第二部首关已加载：沿邮槽、蛋糕与飞路炉追踪绿色魔力残痕。":"Première salle du tome 2 chargée : suivez les traces vertes de la fente aux lettres au gâteau, puis à la cheminée.",精灵的封锁:"Le blocus de l’elfe","目标：循魔力残痕解除住宅中的三重封锁，赶往国王十字车站":"Objectif : suivez les traces magiques, levez le triple blocus de la maison et rejoignez King’s Cross.","绿色干扰从邮槽进入，绕过悬浮蛋糕，最后汇入壁炉封印。错碰尖叫灯会让封锁重新闭合。":"L’interférence verte entre par la fente aux lettres, contourne le gâteau flottant, puis rejoint le sceau de la cheminée. Toucher la lampe hurlante referme le blocus.",飞车失控:"La voiture volante hors de contrôle","目标：在撞上高架桥前依次稳定配重、航向与油门":"Objectif : stabilisez le chargement, le cap puis l’accélérateur avant de heurter le viaduc.","后备箱先把车头拉高；红色铁路信号给出航向；发动机过热时只能脉冲给油。猛踩油门会让飞车再次翻滚。":"Le coffre cabre d’abord la voiture ; le signal ferroviaire rouge indique le cap ; un moteur en surchauffe exige des impulsions d’accélérateur. Écraser la pédale fait de nouveau tonneau.",打人柳下:"Sous le Saule cogneur","目标：读懂枝条的高扫、低返与露根间隙，安全抵达树洞":"Objectif : déchiffrez le balayage haut, le retour bas et l’ouverture entre les racines pour atteindre le tronc sans danger.","粗枝先从头顶横扫；回摆会贴近地面。只有第二次攻击收势后，发光树根之间才会短暂露出通道。":"Une grosse branche balaie d’abord au-dessus de votre tête ; son retour rase le sol. Le passage entre les racines lumineuses ne s’ouvre brièvement qu’après la fin de la deuxième attaque.","楼梯下 · 楼上小卧室 · 17 号房 · 海上小屋":"ESCALIER · CHAMBRE · N° 17 · CABANE","H. Potter · 楼梯下的储物间":"H. Potter · Placard sous l’escalier","I · 楼梯下储物间":"I · PLACARD SOUS L’ESCALIER","H. Potter · 楼上最小的卧室":"H. Potter · Plus petite chambre à l’étage","II · 楼上最小卧室":"II · PLUS PETITE CHAMBRE","H. Potter · 铁路景观酒店 17 号房":"H. Potter · Hôtel Railview, chambre 17","III · 铁路旅馆 17 号房":"III · CHAMBRE 17 DU RAILVIEW","H. Potter · 海上岩礁小屋":"H. Potter · Cabane sur le rocher, en mer","IV · 海上岩礁小屋":"IV · CABANE SUR LE ROCHER",楼梯下的储物间:"PLACARD SOUS L’ESCALIER",通往对角巷:"PORTE DU CHEMIN DE TRAVERSE","V. Dursley · 女贞路前门":"V. Dursley · Porte d’entrée de Privet Drive","D. Dursley · 厨房餐桌":"D. Dursley · Table de la cuisine","H. Potter · 动物园爬虫馆":"H. Potter · Vivarium du zoo","H. Potter · 石墙中学":"H. Potter · Collège Stonewall","顺序错误：“{destination}”不是下一处藏身地。四封信重新飞散！":"Chronologie incorrecte : « {destination} » n’est pas la prochaine cachette. Les quatre lettres se dispersent à nouveau !","时间线正确：{destination} · {count} / 4":"Chronologie confirmée : {destination} · {count} / 4","时间线完成：循红蜡封印前往通往对角巷的门":"Chronologie terminée : suivez les sceaux de cire cramoisie jusqu’à la porte du Chemin de Traverse.","四处藏身地首尾相接，信上的猩红 H 蜡印化成了门钥匙。":"Les quatre cachettes forment un seul voyage ; les sceaux H cramoisis sont devenus une clé.","四封信按时间顺序排列完成——通往对角巷的门已开启！":"Les quatre lettres sont dans l’ordre chronologique — la porte du Chemin de Traverse est ouverte !","邮槽绿粉 · 蛋糕丝线 · 壁炉三环":"POUDRE DE LA FENTE · FIL DU GÂTEAU · TROIS ANNEAUX DU FOYER",堵塞的黄铜邮槽:"Fente aux lettres en laiton bloquée","I · 绿粉由门外进入":"I · LA POUDRE VERTE VIENT DU DEHORS",悬浮的紫罗兰布丁蛋糕:"Gâteau-pudding violet en lévitation","II · 奶油下有绕行丝线":"II · FIL ORBITAL SOUS LE GLAÇAGE",三环封印的飞路炉:"Cheminée de poudre de Cheminette aux trois sceaux","III · 三环汇聚于炉心":"III · TROIS ANNEAUX VERS LE FOYER",裂口尖叫油灯:"Lampe à huile fendue et hurlante","诱饵 · 红线接回警报":"LEURRE · LE FIL ROUGE FERME L’ALARME","“{label}”接通了报警回路！封锁重置，干扰增强至 {count}。":"« {label} » a refermé le circuit d’alarme ! Le blocus recommence ; l’interférence monte à {count}.","邮槽里的绿色粉尘来自室外。残痕没有走直线，而是绕向被悬浮咒托起的蛋糕。":"La poudre verte de la fente vient du dehors. Sa trace contourne la pièce vers le gâteau en lévitation.","蛋糕下方的魔力丝线指向壁炉。最后解除飞路炉上的三环封印。":"Le fil magique sous le gâteau désigne la cheminée. Brisez enfin les trois sceaux de Cheminette.","住宅封锁痕迹已确认 {count} / 3":"Traces du blocus confirmées : {count} / 3","{label}的残痕已固定，绿色干扰显露下一段走向。":"La trace de {label} est fixée ; l’interférence verte révèle la direction suivante.","精灵的封锁完成：邮槽、悬浮蛋糕与飞路炉的干扰链已全部解除":"Blocus de l’elfe terminé : la chaîne entre la fente, le gâteau flottant et la cheminée est rompue.","绿色粉尘标出入口，悬浮蛋糕暴露绕行，飞路封印是最终汇聚点。住宅出口重新打开。":"La poudre verte marquait l’entrée, le gâteau le détour et les sceaux le point de convergence. La sortie de la maison est rouverte.","第二部 · 第一章 · 第 1 关完成":"Tome 2 · Chapitre 1 · Salle 1 terminée","三重封锁碎成绿色星屑——正在登上失控飞车，追赶霍格沃茨特快！":"Le triple blocus éclate en étincelles vertes — embarquement dans la voiture folle pour rattraper le Poudlard Express !","飞车关卡已加载：先调整行李配重，再对准铁路，最后短促给油。":"Voiture volante chargée : déplacez les bagages, alignez-vous sur la voie, puis accélérez par impulsions.","禁区守卫 · 三首同眠 · 活板门在爪下":"GARDIEN INTERDIT · TROIS TÊTES ENDORMIES · TRAPPE SOUS LES PATTES","褪色乐谱：气息 → 琴弦 → 发条":"PARTITION EFFACÉE : SOUFFLE → CORDES → MÉCANISME",银木横笛:"Flûte traversière en bois argenté","I · 七孔夜风之息":"I · VENT NOCTURNE PAR SEPT TROUS",月弦竖琴:"Harpe aux cordes lunaires","II · 新月琴框托梦":"II · LE CROISSANT PORTE LE RÊVE",星纹发条音乐盒:"Boîte à musique étoilée","III · 黄铜滚筒封住鼾声":"III · LE CYLINDRE SCELLE LE RONFLEMENT","“{label}”打乱了旋律！三颗头同时睁眼，惊醒次数：{count}。":"« {label} » a brisé la mélodie ! Les trois têtes ouvrent les yeux ; réveils : {count}.","横笛的七孔送出夜风，左首已经合眼。现在用月弦托住刚形成的梦境。":"Le vent nocturne traverse les sept trous de la flûte et ferme les yeux de la tête gauche. Portez maintenant le rêve naissant avec les cordes lunaires.","竖琴的九根银弦让中首伏下。最后转动黄铜滚筒，以稳定发条节拍封住鼾声。":"Les neuf cordes d’argent abaissent la tête centrale. Tournez enfin le cylindre de laiton pour sceller le ronflement sur un rythme régulier.","安眠旋律已完成 {count} / 3":"Berceuse accomplie : {count} / 3","{label}奏效，一颗头缓缓合上琥珀色双眼。":"{label} fonctionne ; une tête ferme lentement ses yeux ambrés.","城堡禁区完成：三颗头都已沉睡，爪下的活板门安全开启":"Couloir interdit terminé : les trois têtes dorment et la trappe sous leurs pattes peut être ouverte.","七孔夜风、九根月弦与黄铜发条叠成摇篮曲。铁箍活板门下吹来潮湿植物的气息。":"Le vent des sept trous, neuf cordes lunaires et le mécanisme de laiton composent la berceuse. Un air de plantes humides monte de la trappe ferrée.","第一部 · 第二章完成":"Tome 1 · Chapitre 2 terminé",禁区守门人:"Le gardien du couloir interdit","三头守卫沉入梦乡——第二章通关，正在前往“镜中秘密”！":"Le gardien à trois têtes s’endort — chapitre 2 terminé, en route vers Les secrets du miroir !","第三章已加载：在飞行训练场按风向与重量送回三件遗失物。":"Chapitre 3 chargé : rendez trois objets perdus selon le vent et leur poids sur le terrain de vol.","行李后移 · 红灯校向 · 蓝区脉冲":"BAGAGES À L’ARRIÈRE · SIGNAL ROUGE · IMPULSIONS BLEUES",后移行李配重:"Reculer les bagages","I · 皮箱压低车尾":"I · LA MALLE ABAISSE L’ARRIÈRE",对准红色铁路灯:"S’aligner sur le signal rouge","II · 准星重合红灯":"II · VISEUR SUR LE SIGNAL ROUGE",短促脉冲油门:"Accélérer par impulsions","III · 蓝区三次短推":"III · TROIS BREVES IMPULSIONS BLEUES",一脚踩死油门:"Écraser l’accélérateur","诱饵 · 红区持续过热":"LEURRE · SURCHAUFFE DANS LE ROUGE","“{label}”让引擎过热！飞车翻滚，乱流升至 {count}。":"« {label} » a fait surchauffer le moteur ! La voiture a fait un tonneau et les turbulences montent à {count}.","皮箱后移后车尾下沉，车头恢复水平。现在让方向盘准星与铁路尽头的红色信号灯重合。":"La malle reculée abaisse l’arrière et remet le capot à niveau. Alignez maintenant le viseur du volant sur le signal rouge au bout de la voie.","航向已经锁定，但水温仍在红区。把细油门杆短推三次，不能踩住宽踏板。":"Le cap est verrouillé, mais la température reste dans le rouge. Poussez trois fois brièvement la fine manette ; ne maintenez pas la large pédale.","飞车稳定步骤已完成 {count} / 3":"Étapes de stabilisation : {count} / 3","{label}生效，飞车姿态恢复了一部分。":"{label} fonctionne ; la voiture volante retrouve une partie de sa stabilité.","飞车失控完成：配重、航向与脉冲油门让车辆安全追上列车":"Voiture volante terminée : le lest, le cap et les impulsions d’accélérateur permettent de rattraper le train sans danger.","皮箱后移压低车尾，红灯准星校正航向，蓝区三次脉冲避免引擎过热。远处的打人柳正在挥动枝条。":"La malle reculée a abaissé l’arrière, le viseur rouge a corrigé le cap et trois impulsions bleues ont évité la surchauffe. Le Saule cogneur s’agite au loin.","第二部 · 第一章 · 第 2 关完成":"Tome 2 · Chapitre 1 · Salle 2 terminée","飞车擦过高架桥，稳稳落在城堡草地——打人柳的粗枝突然苏醒！":"La voiture frôle le viaduc et se pose sur la pelouse du château — les lourdes branches du Saule cogneur s’éveillent soudain !","打人柳关卡已加载：等待高扫、俯身避低返，再冲过树根间隙。":"Saule cogneur chargé : attendez le balayage haut, baissez-vous sous le retour bas, puis foncez entre les racines.","破风高扫 · 落叶低返 · 绿根开隙":"BALAYAGE HAUT DANS LE VENT · RETOUR BAS DANS LES FEUILLES · PASSAGE VERT",等待高枝扫过:"Attendre le balayage haut","I · 风声在头顶":"I · VENT AU-DESSUS",俯身避开低返:"Se baisser sous le retour bas","II · 落叶贴地":"II · FEUILLES AU RAS DU SOL",冲过露根间隙:"Foncer entre les racines","III · 树洞显露":"III · LE CREUX S’OUVRE",立刻直冲树洞:"Foncer tout de suite vers le creux","诱饵 · 粗枝蓄力":"LEURRE · GROSSE BRANCHE ARMÉE","“{label}”踩错节拍！粗枝扫中肩膀，擦伤升至 {count}。":"« {label} » a rompu le rythme ! Une branche frappe votre épaule ; contusions : {count}.","高枝带着破风声从头顶扫过。枝梢正在贴着落叶低低返程，立刻俯身。":"La branche haute fend l’air au-dessus de vous. Son extrémité revient bas parmi les feuilles mortes : baissez-vous.","低枝擦过背后，主干短暂失去平衡。发光树根之间的缝隙就是第三拍。":"La branche basse frôle votre dos et le tronc perd brièvement l’équilibre. Le passage entre les racines lumineuses forme le troisième temps.","打人柳安全节拍已完成 {count} / 3":"Temps sûrs confirmés : {count} / 3","{label}：动作与枝条节拍吻合。":"{label} : votre mouvement suit le rythme des branches.","打人柳下完成：高扫、低返、露根三拍全部避开，树洞通道已经打开":"Saule cogneur terminé : balayage haut, retour bas et passage entre les racines évités ; le creux est ouvert.","破风声预告高扫，贴地落叶暴露低返，两次攻击后的收势形成通往树洞的安全窗口。":"L’air fendu annonçait le balayage haut, les feuilles au sol révélaient le retour bas et la pause après les deux attaques ouvrait une fenêtre sûre vers le creux.","第二部 · 第一章 · 第 3 关完成":"Tome 2 · Chapitre 1 · Salle 3 terminée",树洞开启:"Le creux s’ouvre","你滑入树根下的安全通道。城堡走廊尽头，一行血字正从潮湿石墙上浮现……":"Vous vous glissez dans le passage sous les racines. Au bout d’un couloir du château, une inscription sanglante apparaît sur la pierre humide…","大楼梯 · 低台至月桥再至高塔":"GRAND ESCALIER · PALIER BAS, PONT LUNAIRE, TOUR HAUTE","路线石板：I 低台 → II 月桥居中 → III 三尖高塔":"CARTE : I PALIER BAS → II PONT LUNAIRE CENTRÉ → III TOUR AUX TROIS FLÈCHES","低塔石阶 · 起点":"Escalier bas · départ","I · 七阶从最低平台升起":"I · SEPT MARCHES DEPUIS LE PALIER LE PLUS BAS","月光桥 · 中央刻线":"Pont lunaire · ligne centrale","II · 钟摆居中时月桥停驻":"II · LE PONT S’ARRÊTE QUAND LE PENDULE EST CENTRÉ","高塔石阶 · 三尖塔":"Escalier haut · trois flèches","III · 三道刻痕指向最高塔":"III · TROIS MARQUES DÉSIGNENT LA PLUS HAUTE TOUR","“{label}”转离了路线！三座楼梯重新移动，时间惩罚 +5 秒。":"« {label} » s’est écarté du parcours ! Les trois escaliers bougent à nouveau ; pénalité de 5 secondes.","低塔七阶已固定。等待钟摆尖端穿过中央银线，再寻找新月拱桥。":"Les sept marches basses sont fixées. Attendez que la pointe du pendule traverse la ligne d’argent, puis cherchez l’arche en croissant.","月光桥已固定。最后选择有三座尖塔与三道黄铜刻痕的最高平台。":"Le pont lunaire est fixé. Choisissez enfin le plus haut palier, marqué de trois flèches et trois traits de laiton.","路线已稳定 {count} / 3":"Segments stabilisés : {count} / 3","{label}停止旋转，路线的一段已稳定。":"{label} cesse de tourner ; un segment du parcours est stable.","移动楼梯关卡完成：低台、月桥和三尖高塔已连接至画像走廊":"Escaliers mouvants terminés : le palier bas, le pont lunaire et la tour aux trois flèches rejoignent la galerie des portraits.","七级低塔、钟摆中央线与三尖高塔首尾相接。路线尽头的三幅画像正在争论银钥口令。":"Les sept marches basses, la ligne du pendule et la tour aux trois flèches sont reliées. Trois portraits débattent d’un mot de passe plus loin.","第一部 · 第二章 · 第 1 关完成":"Tome 1 · Chapitre 2 · Salle 1 terminée",通往画像走廊:"Le chemin vers la galerie des portraits","三座楼梯在钟声中连接——正在前往“会说话的画像”！":"Les trois escaliers se rejoignent au son de l’horloge — entrée chez les portraits bavards !","第二关已加载：比较画像证词，推导正确询问顺序。":"Salle deux chargée : comparez les témoignages et déduisez le bon ordre des questions."}},Yu="hogwarts-escape-language",Cv=[{code:"zh-CN",label:"中文",nativeLabel:"简体中文"},{code:"en",label:"English",nativeLabel:"English"},{code:"fr",label:"Français",nativeLabel:"Français"}],Hc={"zh-CN":{"document.title":"霍格沃茨密室逃脱 3D","start.brand":"霍格沃茨","start.title":"密室逃脱","start.description":"横跨 7 部曲、28 章与 112 套密室关卡，从第一封猫头鹰来信走到霍格沃茨最终决战。","start.play":"进入第一关","start.continue":"继续游戏","start.restart":"重新开始","start.campaign":"七部曲地图","start.language":"🌐 中文","voice.play":"▶ 播放中文旁白","voice.stop":"■ 停止旁白","voice.ready":"按下后播放，不会自动播放","voice.loading":"正在加载旁白…","voice.playing":"正在播放中文旁白","voice.failed":"旁白暂时不可用，字幕仍可阅读","voice.subtitle":"欢迎来到霍格沃茨。猫头鹰送来的四封信，藏着逃离密室的正确顺序。请观察地址变化，准备好后开始探索。","help.desktop":"WASD 移动 · 鼠标观察 · E 互动 · ESC 释放鼠标","help.mobile":"左侧摇杆移动 · 右半屏滑动观察 · 点击“互动”操作","mobile.look":"滑动转向","mobile.interact":"互动","campaign.title":"七部曲密室地图","campaign.stats":"{books} 部曲 · {chapters} 章 · {rooms} 关","campaign.book":"第 {number} 部","campaign.chapter":"第 {number} 章","campaign.difficulty":"难度 {start}–{end}","campaign.play":"开始本章","campaign.upcoming":"已解锁 · 即将启程","campaign.locked":"尚未解锁","campaign.close":"关闭地图","campaign.selectBook":"选择部曲","hud.roomKicker":"第 {book} 部 · 第 {chapter} 章 · 第 {room} 关","transition.next":"下一关","action.touch":"点击互动","action.keyboard":"按 E","counter.letters":"信件顺序 {count} / 4","counter.shopping":"采购 {count} / 4 · 余 {remaining} G","counter.wand":"匹配阶段 {count} / 3 · 失控反馈 {mistakes}","counter.sorting":"分院线索 {count} / 4 · 误判 {mistakes}","counter.stairs":"路线 {count} / 3 · 时间惩罚 {penalty} 秒","counter.portraits":"证词 {count} / 3 · 怀疑 {value}","counter.patrol":"潜行节点 {count} / 3 · 警戒 {value}","counter.lullaby":"安眠旋律 {count} / 3 · 惊醒 {value}","counter.flying":"安全投递 {count} / 3 · 乱流 {value}","counter.troll":"逃生机关 {count} / 3 · 危险 {value}","counter.library":"历史书脊 {count} / 3 · 尖叫 {value}","counter.mirror":"现实所需 {count} / 3 · 幻象增强 {value}","counter.snare":"光照节奏 {count} / 3 · 藤蔓收紧 {value}","counter.keys":"钥匙线索 {count} / 3 · 追逐失误 {value}","counter.chess":"安全棋路 {count} / 3 · 被吃棋子 {value}","counter.stone":"密室线索 {count} / 3 · 腐化诱惑 {value}","counter.elf":"封锁痕迹 {count} / 3 · 干扰增强 {value}","counter.car":"飞车校准 {count} / 3 · 乱流 {value}","counter.willow":"安全节拍 {count} / 3 · 擦伤 {value}","test.chineseOnly":"仅中文"},en:{"document.title":"Hogwarts Escape Room 3D","start.brand":"HOGWARTS","start.title":"Escape Room","start.description":"A journey across 7 books, 28 chapters, and 112 escape rooms—from the first owl letter to the final battle at Hogwarts.","start.play":"Enter Room One","start.continue":"Continue","start.restart":"Start Over","start.campaign":"Seven-Book Map","start.language":"🌐 English","voice.play":"▶ Play English narration","voice.stop":"■ Stop narration","voice.ready":"Plays only when pressed—never automatically","voice.loading":"Loading narration…","voice.playing":"Playing English narration","voice.failed":"Narration is unavailable; subtitles remain available","voice.subtitle":"Welcome to Hogwarts. Four owl-delivered letters hide the correct order for escaping this chamber. Observe how each address changes, then begin your search.","help.desktop":"WASD move · Mouse look · E interact · ESC release mouse","help.mobile":"Left stick to move · Swipe right to look · Tap Interact","mobile.look":"Swipe to look","mobile.interact":"Interact","campaign.title":"Seven-Book Escape Map","campaign.stats":"{books} books · {chapters} chapters · {rooms} rooms","campaign.book":"Book {number}","campaign.chapter":"Chapter {number}","campaign.difficulty":"Difficulty {start}–{end}","campaign.play":"Begin Chapter","campaign.upcoming":"Unlocked · Coming Soon","campaign.locked":"Locked","campaign.close":"Close map","campaign.selectBook":"Select a book","hud.roomKicker":"Book {book} · Chapter {chapter} · Room {room}","transition.next":"Next Room","action.touch":"Tap","action.keyboard":"Press E to","counter.letters":"Letter order {count} / 4","counter.shopping":"Shopping {count} / 4 · {remaining} G left","counter.wand":"Wand match {count} / 3 · Wild feedback {mistakes}","counter.sorting":"Sorting clues {count} / 4 · Mistakes {mistakes}","counter.stairs":"Route {count} / 3 · Time penalty {penalty}s","counter.portraits":"Testimony {count} / 3 · Suspicion {value}","counter.patrol":"Stealth nodes {count} / 3 · Alert {value}","counter.lullaby":"Lullaby {count} / 3 · Wakefulness {value}","counter.flying":"Safe deliveries {count} / 3 · Turbulence {value}","counter.troll":"Escape devices {count} / 3 · Danger {value}","counter.library":"Historical spines {count} / 3 · Noise {value}","counter.mirror":"Real needs {count} / 3 · Illusion {value}","counter.snare":"Light rhythm {count} / 3 · Constriction {value}","counter.keys":"Key clues {count} / 3 · Pursuit errors {value}","counter.chess":"Safe moves {count} / 3 · Pieces lost {value}","counter.stone":"Chamber clues {count} / 3 · Corruption {value}","counter.elf":"Blockade traces {count} / 3 · Interference {value}","counter.car":"Car calibration {count} / 3 · Turbulence {value}","counter.willow":"Safe rhythm {count} / 3 · Bruises {value}"},fr:{"document.title":"Hogwarts — Salle d’évasion 3D","start.brand":"POUDLARD","start.title":"Salle d’évasion","start.description":"Un voyage à travers 7 tomes, 28 chapitres et 112 salles, de la première lettre apportée par un hibou jusqu’à la bataille finale de Poudlard.","start.play":"Entrer dans la première salle","start.continue":"Continuer","start.restart":"Recommencer","start.campaign":"Carte des sept tomes","start.language":"🌐 Français","voice.play":"▶ Écouter la narration en français","voice.stop":"■ Arrêter la narration","voice.ready":"Lecture uniquement sur demande, jamais automatique","voice.loading":"Chargement de la narration…","voice.playing":"Narration en français en cours","voice.failed":"La narration est indisponible ; les sous-titres restent affichés","voice.subtitle":"Bienvenue à Poudlard. Quatre lettres apportées par des hiboux cachent l’ordre qui permet de quitter cette salle. Observez chaque changement d’adresse, puis commencez vos recherches.","help.desktop":"WASD : avancer · Souris : regarder · E : interagir · Échap : libérer la souris","help.mobile":"Joystick gauche : avancer · Balayer à droite : regarder · Toucher Interagir","mobile.look":"Balayer pour regarder","mobile.interact":"Interagir","campaign.title":"Carte d’évasion des sept tomes","campaign.stats":"{books} tomes · {chapters} chapitres · {rooms} salles","campaign.book":"Tome {number}","campaign.chapter":"Chapitre {number}","campaign.difficulty":"Difficulté {start}–{end}","campaign.play":"Commencer le chapitre","campaign.upcoming":"Déverrouillé · Bientôt disponible","campaign.locked":"Verrouillé","campaign.close":"Fermer la carte","campaign.selectBook":"Choisir un tome","hud.roomKicker":"Tome {book} · Chapitre {chapter} · Salle {room}","transition.next":"Salle suivante","action.touch":"Toucher pour","action.keyboard":"Appuyer sur E pour","counter.letters":"Ordre des lettres {count} / 4","counter.shopping":"Achats {count} / 4 · reste {remaining} G","counter.wand":"Accord de la baguette {count} / 3 · réactions {mistakes}","counter.sorting":"Indices de Répartition {count} / 4 · erreurs {mistakes}","counter.stairs":"Parcours {count} / 3 · pénalité {penalty} s","counter.portraits":"Témoignages {count} / 3 · soupçon {value}","counter.patrol":"Étapes furtives {count} / 3 · alerte {value}","counter.lullaby":"Berceuse {count} / 3 · éveil {value}","counter.flying":"Livraisons sûres {count} / 3 · turbulences {value}","counter.troll":"Mécanismes de fuite {count} / 3 · danger {value}","counter.library":"Dos historiques {count} / 3 · vacarme {value}","counter.mirror":"Besoins réels {count} / 3 · illusion {value}","counter.snare":"Rythme lumineux {count} / 3 · constriction {value}","counter.keys":"Indices de clé {count} / 3 · erreurs {value}","counter.chess":"Coups sûrs {count} / 3 · pièces perdues {value}","counter.stone":"Indices de la chambre {count} / 3 · corruption {value}","counter.elf":"Traces du blocus {count} / 3 · interférence {value}","counter.car":"Réglage de la voiture {count} / 3 · turbulences {value}","counter.willow":"Rythme sûr {count} / 3 · contusions {value}"}};function hr(i){return Cv.some(({code:e})=>e===i)?i:"zh-CN"}function Rv(i){return hr(i.getItem(Yu))}function Iv(i,e){const t=hr(e);return i.setItem(Yu,t),t}function Lv(i,e){return i.replace(/\{(\w+)\}/g,(t,n)=>e[n]??`{${n}}`)}function fr(i){const e=hr(i);return(t,n={})=>{const s=Hc[e][t]??Hc["zh-CN"][t]??t;return Lv(s,n)}}function ye(i,e){const t=hr(i);return t==="zh-CN"?e:Av[t]?.[e]??e}function Pv(i,{book:e,chapter:t,room:n,name:s,objectiveText:r,hint:o}){const a=hr(i);return{kicker:fr(a)("hud.roomKicker",{book:e,chapter:t,room:n}),name:ye(a,s),objectiveText:ye(a,r),hint:ye(a,o)}}function Dv({progress:i,book:e,chapter:t,playable:n,t:s=fr("zh-CN")}){const r=e===1&&t===1||Tv(i,{book:e,chapter:t});return n&&r?{className:"chapter-action playable",text:s("campaign.play"),disabled:!1}:r?{className:"chapter-action unlocked",text:s("campaign.upcoming"),disabled:!0}:{className:"chapter-action",text:s("campaign.locked"),disabled:!0}}function Uv({onPlay:i,getProgress:e=()=>null,getLanguage:t=()=>"zh-CN",getTranslator:n=()=>fr(t())}){const s=document.querySelector("#campaign-screen"),r=document.querySelector("#book-tabs"),o=document.querySelector("#chapter-grid"),a=document.querySelector("#campaign-book-title"),c=document.querySelector("#campaign-book-subtitle"),l=document.querySelector("#campaign-theme"),u=document.querySelector("#campaign-stats");let d=0;function f(){const h=n(),M=t();r.replaceChildren(...Js.map((b,_)=>{const w=document.createElement("button");return w.className=`book-tab${_===d?" active":""}`,w.type="button",w.innerHTML=`<span>${h("campaign.book",{number:b.number})}</span><strong>${ye(M,b.title)}</strong>`,w.addEventListener("click",()=>{d=_,g()}),w}))}function m(h){const M=n(),b=t();o.replaceChildren(...h.chapters.map((_,w)=>{const T=document.createElement("article");T.className="chapter-card";const C=_.rooms[0].difficulty,D=_.rooms.at(-1).difficulty,S=_.rooms.some(q=>q.status==="playable"),y=Dv({progress:e(),book:h.number,chapter:w+1,playable:S,t:M});T.classList.toggle("unlocked",y.className.includes("unlocked"));const R=document.createElement("div");R.className="chapter-heading",R.innerHTML=`<span>${M("campaign.chapter",{number:String(w+1).padStart(2,"0")})}</span><strong>${ye(b,_.title)}</strong><em>${M("campaign.difficulty",{start:C,end:D})}</em>`;const H=document.createElement("ol");H.className="room-list";for(const q of _.rooms){const J=document.createElement("li");J.innerHTML=`<span>${ye(b,q.title)}</span><small>${ye(b,q.puzzle)}</small>`,H.appendChild(J)}const G=document.createElement("button");return G.type="button",G.className=y.className,G.textContent=y.text,G.disabled=y.disabled,S&&G.addEventListener("click",()=>{p(),i(_.rooms.find(q=>q.status==="playable"))}),T.append(R,H,G),T}))}function g(){const h=n(),M=t(),b=Js[d];u.textContent=h("campaign.stats",Mv),s.style.setProperty("--campaign-primary",b.palette[0]),s.style.setProperty("--campaign-accent",b.palette[1]),s.style.setProperty("--campaign-dark",b.palette[2]),a.textContent=`${h("campaign.book",{number:b.number})} · ${ye(M,b.title)}`,c.textContent=ye(M,b.subtitle),l.textContent=ye(M,b.visualTheme),f(),m(b)}function v(){g(),s.classList.remove("hidden"),document.body.classList.add("campaign-open")}function p(){s.classList.add("hidden"),document.body.classList.remove("campaign-open")}return document.querySelector("#campaign-button").addEventListener("click",v),document.querySelector("#campaign-close").addEventListener("click",p),addEventListener("keydown",h=>{h.code==="Escape"&&!s.classList.contains("hidden")&&p()}),g(),{openCampaign:v,closeCampaign:p,render:g}}const Nv={intro:{"zh-CN":"audio/intro-zh-CN.mp3",en:"audio/intro-en.mp3",fr:"audio/intro-fr.mp3"}};function Ov(i,e){const t=Nv[i];return t?t[e]??t["zh-CN"]??null:null}function kv({playbackState:i,muted:e}){return i==="idle"&&!e}async function Fv({audio:i,source:e,muted:t}){if(!e)return t?"muted":"unavailable";i.src=e;try{return await i.play(),"playing"}catch{return"failed"}}const Gc=["lower","moon","upper"],Vc=["scholar","knight","lady"],Wc=["armor","cat","tapestry"],Xc=["flute","harp","music-box"];function zv(i,e){const t=Xc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,wakefulness:(i.wakefulness??0)+1,unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Xc.length,accepted:!0}}function Bv(i,e){const t=Gc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,timePenalty:(i.timePenalty??0)+5,unlocked:!1,accepted:!1};const n=[...i.progress,e];return{progress:n,mistakes:i.mistakes,...i.timePenalty!==void 0?{timePenalty:i.timePenalty}:{},unlocked:n.length===Gc.length,accepted:!0}}function Hv(i,e){const t=Vc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,suspicion:(i.suspicion??0)+1,unlocked:!1,accepted:!1};const n=[...i.progress,e],s=n.length===Vc.length;return{progress:n,mistakes:i.mistakes,...i.suspicion!==void 0?{suspicion:i.suspicion}:{},unlocked:s,accepted:!0,...s?{password:"月桂之后，银钥先行"}:{}}}function Gv(i,e){const t=Wc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,alert:(i.alert??0)+1,unlocked:!1,accepted:!1};const n=[...i.progress,e];return{progress:n,mistakes:i.mistakes,...i.alert!==void 0?{alert:i.alert}:{},unlocked:n.length===Wc.length,accepted:!0}}const qc=["scarf-keeper","notebook-scholar","compass-first-year"],jc=["seal-pipe","levitate-rubble","lower-beam"],Yc=["founders-index","dragon-ledger","moon-chronicle"],Kc=["wool-cloak","brass-lantern","shared-token"];function Vv(i,e){const t=Kc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,illusion:(i.illusion??0)+1,feedback:"desire-not-need",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Kc.length,accepted:!0}}function Wv(i,e){const t=Yc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,noise:(i.noise??0)+1,unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Yc.length,accepted:!0}}function Xv(i,e){const t=jc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,danger:(i.danger??0)+1,unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===jc.length,accepted:!0}}function qv(i,e){const t=qc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,turbulence:(i.turbulence??0)+1,unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===qc.length,accepted:!0}}const $c=["black-flame-potion","empty-pocket-reflection","protect-the-stone"];function jv(i,e){const t=$c[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,corruption:i.corruption+1,feedback:"intent-rejected",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===$c.length,accepted:!0}}const Zc=["pawn-decoy","knight-fork","rook-advance"];function Yv(i,e){const t=Zc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,captured:i.captured+i.progress.length+1,feedback:"piece-captured",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Zc.length,accepted:!0}}const Jc=["relax-grip","kindle-bluebell","hold-light"],Qc=["bent-wing","clockwise-drift","silver-key"];function Kv(i,e){const t=Qc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,pursuit:i.pursuit+1,feedback:"key-swarm-scattered",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Qc.length,accepted:!0}}function $v(i,e){const t=Jc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,constriction:(i.constriction??0)+1,feedback:"vines-tightened",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Jc.length,accepted:!0}}const eu=["wait-high-swing","duck-low-return","dash-root-gap"];function Zv(i,e){const t=eu[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,bruises:i.bruises+1,feedback:"branch-hit",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===eu.length,accepted:!0}}const tu=["balance-luggage","align-railway","pulse-throttle"];function Jv(i,e){const t=tu[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,turbulence:i.turbulence+1,feedback:"car-spinning",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===tu.length,accepted:!0}}const nu=["jammed-post","levitating-cake","sealed-floo"];function Qv(i,e){const t=nu[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,interference:i.interference+1,feedback:"blockade-strengthened",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===nu.length,accepted:!0}}const e_=[{id:"seal-pipe",label:"月纹止水阀",clue:"I · 裂管月阀 · 先止水",position:[-4.8,1.45,2.6],model:{kind:"burst-pipe-moon-valve",landmarks:["split-copper-pipe","six-spoke-valve-wheel","crescent-shaped-handle"],materials:["verdigris-copper","blue-enamel","wet-iron"],damageOrMagic:["pressurized-water-spray","glowing-moon-rune"]}},{id:"levitate-rubble",label:"悬浮碎石阵",clue:"II · 蓝光悬石 · 再清障",position:[0,1.65,2.6],model:{kind:"levitating-rubble-cluster",landmarks:["five-jagged-stones","clear-ground-gap","spiralling-magic-rings"],materials:["fractured-granite","blue-magic","mortar-dust"],damageOrMagic:["levitation-glow","fresh-impact-cracks"]}},{id:"lower-beam",label:"锁链橡木横梁",clue:"III · 双链横梁 · 最后架桥",position:[4.8,2.35,2.6],model:{kind:"chain-suspended-oak-bridge",landmarks:["long-oak-crossbeam","two-hanging-chains","iron-end-brackets"],materials:["splintered-oak","rusted-iron","wet-rope"],damageOrMagic:["lowering-direction-runes","troll-club-dent"]}}],li=Object.freeze({mobileCameraZ:7.4,mobileMechanismScale:.8,mobileLabelWidth:2,mobileLabelFontSize:23,desktopLabelWidth:2.8,desktopLabelFontSize:31,mobileWallWidth:3.6,mobileWallFontSize:46,mobileWallLabelZ:-7.55}),Ku={wallClue:"月阀 · 悬石 · 双链桥",dynamic:{wrong:"“{label}”触发过早！路线震塌，巨怪危险升至 {count}。",firstHint:"月纹阀咬合裂管，喷流终于停住。现在让蓝光托起沟渠前的五块碎石。",secondHint:"五块碎石悬到巨怪头顶，桥位已经清空。最后松开双链，把橡木横梁降到沟渠上。",progress:"逃生机关已稳定 {count} / 3",accepted:"{label}稳定生效，巨怪被机关拖慢。",completeObjective:"巨怪洗手间完成：双链横梁已跨过沟渠，安全逃生路线建立",completeHint:"月阀封住裂管，悬浮碎石清出桥位，双链横梁连接出口。禁书区门缝透出幽蓝微光。",transitionKicker:"第一部 · 第三章 · 第 2 关完成",transitionTitle:"悬浮逃生",completionMessage:"双链横梁稳稳落下——正在穿过幽蓝门廊，前往图书馆禁书区！",nextRoomMessage:"第三关已加载：按历史年代排列安全书脊，千万别惊醒锁链无年卷。"}};function Bn(i,e,t={}){const n=Ku.dynamic[e];return ye(i,n).replace(/\{(\w+)\}/g,(r,o)=>t[o]??`{${o}}`)}const t_=[{side:"left",feathers:4,bend:0},{side:"right",feathers:4,bend:0}],Vr=(i={})=>({axis:"horizontal",shaftLength:1.55,bowRadius:.42,teeth:3,metal:"steel",wings:t_.map(e=>({...e})),...i}),n_=[{id:"bent-wing",label:"左翼弯折的钥影",clue:"I · 使用损伤",x:-4.8,display:{z:.7},color:9283527,model:Vr({wings:[{side:"left",feathers:4,bend:-.48},{side:"right",feathers:4,bend:0}]}),evidence:{damage:"bent-left-wing"}},{id:"clockwise-drift",label:"顺时针下沉轨迹",clue:"II · 负重飞行",x:-1.6,display:{z:.7},color:7507640,model:Vr({shaftLength:1.72}),evidence:{motion:"clockwise-descending",orbitMarkers:7}},{id:"silver-key",label:"小型银钥匙",clue:"III · 银屑吻合",x:1.6,display:{z:.7},color:12175579,model:Vr({shaftLength:1.4,bowRadius:.36,metal:"silver"}),evidence:{lockMaterial:"silver"}},{id:"gold-key",label:"华丽金钥匙",clue:"诱饵 · 锁孔无金屑",x:4.8,display:{z:.7},color:12093749,model:Vr({shaftLength:1.68,bowRadius:.58,teeth:4,metal:"gold"}),evidence:{lockMaterial:"mismatch"}}],$u={wallClue:"左翼折痕 · 顺时针下沉 · 银屑锁孔",dynamic:{roomLoadedMessage:"飞钥匙房已加载：依次核对折翼、飞行轨迹和锁孔银屑。",wrong:"“{label}”惊散了钥匙群！追逐失误升至 {count}，三条证据需要重新确认。",firstHint:"左翼折痕与门框刮痕一致。现在观察负重钥匙群，寻找顺时针下沉的轨迹。",secondHint:"下沉轨迹锁定了小型钥匙。最后核对锁孔银屑，排除华丽但材质不符的金钥匙。",progress:"飞钥匙证据已确认 {count} / 3",accepted:"{label}与现场证据吻合，钥匙群的范围缩小了。",completeObjective:"飞钥匙房完成：折翼银钥匙准确嵌入门锁，通往巫师棋盘的石门已经开启",completeHint:"折翼证明它被使用过，顺时针下沉暴露负重，银屑完成最终材质核对。前方传来巨大棋子的脚步声。",transitionKicker:"第一部 · 第四章 · 第 2 关完成",transitionTitle:"折翼银钥匙",completionMessage:"银钥匙旋转一周，棋盘石门轰然开启——正在进入巫师棋盘！",nextRoomMessage:"巫师棋已加载：先诱敌，再双攻，最后沿空线推进。"}};function Dn(i,e,t={}){const n=$u.dynamic[e];return ye(i,n).replace(/\{(\w+)\}/g,(r,o)=>t[o]??`{${o}}`)}const fn=(i,e,t,n=.12,s=4,r=3)=>({id:i,layer:e,points:t,radius:n,leaves:s,thorns:r}),i_=[fn("exit-crown-left","exit",[[-3.8,.2,-2.8],[-2.9,1,-2.3],[-2,2,-2],[-.8,2.6,-1.9]],.2,7,5),fn("exit-crown-right","exit",[[3.8,.2,-2.8],[2.9,1,-2.3],[2,2,-2],[.8,2.6,-1.9]],.2,7,5),fn("exit-lattice-left","exit",[[-3.5,.1,-1],[-2.6,.9,-1.5],[-1.8,1.4,-2.2],[-1.2,.2,-2.8]],.16,6,4),fn("exit-lattice-right","exit",[[3.5,.1,-1],[2.6,.9,-1.5],[1.8,1.4,-2.2],[1.2,.2,-2.8]],.16,6,4),fn("west-climber-a","wall",[[-8.6,.1,2.5],[-8.2,1.8,1.7],[-8.5,3.9,.5],[-7.7,6.6,-.6]],.14,6,4),fn("west-climber-b","wall",[[-8.5,.1,-5],[-7.9,1.7,-4.1],[-8.4,4.2,-3.2],[-7.6,6.7,-2]],.11,5,4),fn("east-climber-a","wall",[[8.6,.1,2.1],[8,2,1.2],[8.5,4,0],[7.7,6.6,-1]],.14,6,4),fn("east-climber-b","wall",[[8.5,.1,-5.2],[7.8,1.8,-4.3],[8.4,4,-3.1],[7.5,6.7,-1.8]],.11,5,4),fn("ceiling-arch-a","ceiling",[[-7.5,6.7,1.8],[-4.8,6.4,.6],[-1.8,6.8,-.5],[1,6.35,-1.4]],.12,7,4),fn("ceiling-arch-b","ceiling",[[7.5,6.7,2.2],[4.8,6.3,.9],[2,6.8,-.4],[-.9,6.35,-1.5]],.12,7,4),fn("ceiling-cross-a","ceiling",[[-6.5,6.65,-5.8],[-3.5,6.25,-4.4],[.1,6.75,-3.2],[3.5,6.35,-2.2]],.1,6,3),fn("ceiling-cross-b","ceiling",[[6.6,6.65,-5.6],[3.5,6.3,-4.5],[.2,6.7,-3.1],[-3.3,6.3,-2.1]],.1,6,3),fn("floor-runner-left","exit",[[-7.8,.08,5.8],[-5.6,.2,3.7],[-4.1,.12,1.1],[-2.7,.3,-1.3]],.15,6,5),fn("floor-runner-right","exit",[[7.8,.08,5.8],[5.6,.2,3.7],[4.1,.12,1.1],[2.7,.3,-1.3]],.15,6,5)],s_=[{id:"relax-grip",label:"放松呼吸",clue:"I · 停止挣扎",x:-3.9,color:7977372,model:{kind:"breath-orb",rings:3,breathColor:11067852}},{id:"kindle-bluebell",label:"点燃蓝铃冷焰",clue:"II · 微光驱藤",x:-1.3,color:5213905,model:{kind:"bluebell-flame",petals:6,flameColor:7584255}},{id:"hold-light",label:"维持恒定光照",clue:"III · 稳住三拍",x:1.3,color:8637672,model:{kind:"steady-lantern",pulses:3,flameColor:10411263}},{id:"flare-brightly",label:"猛烈爆燃",clue:"诱饵 · 惊动根网",x:3.9,color:14048317,model:{kind:"wild-flare",flameCount:7,flameColor:16738866,safe:!1}}],Zu={wallClue:"停止挣扎 · 蓝铃冷焰 · 三拍恒光",dynamic:{roomLoadedMessage:"地下试炼已加载：放松藤蔓缠绕，以蓝铃冷焰和三拍恒光打开根网。",wrong:"“{label}”打乱节奏！根网骤然收紧至 {count} 级；先放松，再重新开始。",firstHint:"你停止挣扎，第一层藤蔓松开。现在点燃不会灼伤施法者的蓝铃冷焰。",secondHint:"冷焰逼退根须。最后保持三拍恒光，不要让亮度突然爆发。",progress:"魔鬼网光照节奏已完成 {count} / 3",accepted:"{label}奏效，地下出口上方的藤蔓正在退缩。",completeObjective:"魔鬼网完成：稳定冷焰驱散根网，通往飞钥匙房的地下出口已经开启",completeHint:"镇静削弱缠绕，蓝铃冷焰逼退藤蔓，三拍恒光打开根网。前方传来成群翅膀的振动声。",transitionKicker:"第一部 · 第四章 · 第 1 关完成",transitionTitle:"冷焰退藤",completionMessage:"魔鬼网缩回石缝——正在进入飞钥匙房！"}};function Yn(i,e,t={}){const n=Zu.dynamic[e];return ye(i,n).replace(/\{(\w+)\}/g,(r,o)=>t[o]??`{${o}}`)}const Wr=(i,e={})=>({piece:i,height:1.75,material:"carved-stone",...e}),Ut={cellSize:1.3,boardStartX:-4.55,boardStartZ:-7.9,galleryZ:3,mobileCameraZ:8.8,mobileWallLabelSize:18},r_=[{id:"pawn-decoy",label:"边兵诱敌",clue:"I · 引开主教",x:-3.3,display:{z:Ut.galleryZ,labelStyle:"pedestal-plaque"},mobileDisplay:{x:-1.35,z:Ut.galleryZ,scale:.68,plaqueWidth:1.15},color:10455404,model:Wr("pawn",{headRadius:.24})},{id:"knight-fork",label:"骑士双攻",clue:"II · 将军攻车",x:-1.1,display:{z:Ut.galleryZ,labelStyle:"pedestal-plaque"},mobileDisplay:{x:-.45,z:Ut.galleryZ,scale:.68,plaqueWidth:1.15},color:7902138,model:Wr("knight",{profile:"horse-head",maneRidges:4})},{id:"rook-advance",label:"城堡沿空线推进",clue:"III · 空线抵岸",x:1.1,display:{z:Ut.galleryZ,labelStyle:"pedestal-plaque"},mobileDisplay:{x:.45,z:Ut.galleryZ,scale:.68,plaqueWidth:1.15},color:8364420,model:Wr("rook",{battlements:6})},{id:"queen-charge",label:"王后强攻",clue:"诱饵 · 暴露全线",x:3.3,display:{z:Ut.galleryZ,labelStyle:"pedestal-plaque"},mobileDisplay:{x:1.35,z:Ut.galleryZ,scale:.68,plaqueWidth:1.15},color:11686492,model:Wr("queen",{crownSpikes:6})}],Ju={wallClue:"边兵牵制主教 · 骑士双攻 · 城堡穿过空线",dynamic:{wrong:"“{label}”暴露了棋路！巨棋吃掉已投入棋子，被吃总数升至 {count}。",firstHint:"边兵引开了黑主教。现在用骑士同时威胁国王与城堡，迫使黑方让出中央。",secondHint:"骑士双攻奏效，纵线已经清空。最后让城堡沿直线推进到对岸。",progress:"安全棋步已确认 {count} / 3",accepted:"{label}成立，巨型黑棋被迫改换阵形。",completeObjective:"巫师棋完成：仅以边兵诱敌，骑士与城堡已安全抵达对岸",completeHint:"诱敌打开斜线，双攻迫使让位，城堡穿过空线。最后的魔法石密室就在棋盘后方。",transitionKicker:"第一部 · 第四章 · 第 3 关完成",transitionTitle:"最少牺牲棋路",completionMessage:"白色城堡抵达对岸，火门显现——正在进入魔法石密室！",nextRoomMessage:"最终密室已加载：先解药剂逻辑，再辨镜像，最后证明守护意图。"}};function Hn(i,e,t={}){const n=Ju.dynamic[e];return ye(i,n).replace(/\{(\w+)\}/g,(r,o)=>t[o]??`{${o}}`)}const bn=Object.freeze({galleryZ:3.05,mobileCameraZ:9,mobileWallLabelSize:18,mobileWallLabelWidth:3.2,potionRow:Object.freeze({count:7,smallestIndex:3,z:-5.65}),blackFlame:Object.freeze({columns:11,height:2.6,z:-3.9}),mirror:Object.freeze({frame:"ornate-gold-arch",inscription:"erised-reversed"})}),Xr=i=>({z:bn.galleryZ,labelStyle:"pedestal-plaque",x:i}),qr=i=>({x:i,z:bn.galleryZ,scale:.55,plaqueWidth:.85}),o_=Object.freeze([Object.freeze({id:"black-flame-potion",label:"最小银瓶",clue:"I · 穿越黑焰",x:-3.3,color:8485030,display:Xr(-3.3),mobileDisplay:qr(-.9),model:Object.freeze({kind:"potion-bottle",rank:"smallest-of-seven",height:.68,liquid:"violet-black-flame-antidote"})}),Object.freeze({id:"empty-pocket-reflection",label:"空口袋镜影",clue:"II · 不占有",x:-1.1,color:6717345,display:Xr(-1.1),mobileDisplay:qr(-.3),model:Object.freeze({kind:"mirror-figure",pocket:"empty-and-visible",stoneVisible:!1})}),Object.freeze({id:"protect-the-stone",label:"守护石的誓言",clue:"III · 只为保护",x:1.1,color:7705713,display:Xr(1.1),mobileDisplay:qr(.3),model:Object.freeze({kind:"protective-hands",gesture:"open-shield",stonePosition:"beyond-reach"})}),Object.freeze({id:"seize-the-stone",label:"夺取石的手",clue:"诱饵 · 占有欲",x:3.3,color:10305356,display:Xr(3.3),mobileDisplay:qr(.9),model:Object.freeze({kind:"grasping-hand",gesture:"closed-grasp",corruption:"red-cracks"})})]),Qa=Object.freeze({wallClue:"七瓶取最小 · 镜中口袋为空 · 双手只作守护",mirrorInscription:"厄里斯 · 欲望倒写显形",dynamic:Object.freeze({wrong:"“{label}”暴露了占有欲！线索消散，腐化诱惑升至 {count}。",firstHint:"最小银瓶让你穿过黑焰。现在观察镜中衣袋：真正不求占有的人，口袋里不会出现石头。",secondHint:"空口袋镜影证明你没有取石欲望。最后明确你的意图：保护它，而不是拥有它。",progress:"魔法石密室线索已确认 {count} / 3",accepted:"{label}通过了密室检验，镜面中的金光更加清晰。",completeObjective:"第一部完成：魔法石只向无意占有、决心守护的人显现",completeHint:"药剂穿过黑焰，空口袋识破欲望，守护誓言让魔法石安全显现。新的绿色干扰正在住宅中聚集。",transitionKicker:"第一部 · 魔法石完成",transitionTitle:"第二部 · 不祥警告",completionMessage:"守护之石化作金光——正在返回住宅，调查精灵留下的三重封锁！",nextRoomMessage:"第二部首关已加载：沿邮槽、蛋糕与飞路炉追踪绿色魔力残痕。"})});function Gn(i,e,t={}){const n=Qa.dynamic[e];return ye(i,n).replace(/\{(\w+)\}/g,(r,o)=>t[o]??`{${o}}`)}const jr=i=>({material:"parchment",seal:"crimson-wax-h",width:.82,height:.5,wear:i}),a_=[{id:"cupboard",chronology:1,destination:"H. Potter · 楼梯下的储物间",clue:"I · 楼梯下储物间",addressMark:"STAIRS",position:[-6.45,1,-3.1],rotation:[0,.55,0],envelope:jr(["creased-corners","dust-smudges"]),model:{kind:"cupboard-door",landmarks:["sloped-door","stair-treads","brass-vent"]}},{id:"bedroom",chronology:2,destination:"H. Potter · 楼上最小的卧室",clue:"II · 楼上最小卧室",addressMark:"WINDOW",position:[6.3,1.5,3.7],rotation:[0,-.65,0],envelope:jr(["creased-corners","window-scratches"]),model:{kind:"bedroom-window",landmarks:["blue-window","narrow-bed","roofline"]}},{id:"hotel-room-17",chronology:3,destination:"H. Potter · 铁路景观酒店 17 号房",clue:"III · 铁路旅馆 17 号房",addressMark:"ROOM 17",position:[-4.7,1.85,4.35],rotation:[0,.2,0],envelope:jr(["rain-speckles","luggage-scuffs"]),model:{kind:"hotel-key",landmarks:["brass-17","rail-signal","suitcase"]}},{id:"island-hut",chronology:4,destination:"H. Potter · 海上岩礁小屋",clue:"IV · 海上岩礁小屋",addressMark:"ROCK HUT",position:[5.55,2.15,-4.6],rotation:[0,-.3,0],envelope:jr(["salt-stains","torn-edge"]),model:{kind:"storm-hut",landmarks:["black-rock","timber-hut","wave-rings"]}}],to={wallClue:"楼梯下 · 楼上小卧室 · 17 号房 · 海上小屋",mobileWallWidth:5,mobileWallFontSize:29,dynamic:{wrong:"顺序错误：“{destination}”不是下一处藏身地。四封信重新飞散！",progress:"时间线正确：{destination} · {count} / 4",completeObjective:"时间线完成：循红蜡封印前往通往对角巷的门",completeHint:"四处藏身地首尾相接，信上的猩红 H 蜡印化成了门钥匙。",completeMessage:"四封信按时间顺序排列完成——通往对角巷的门已开启！"}};function Vs(i,e,t={}){const n=to.dynamic[e];return ye(i,n).replace(/\{(\w+)\}/g,(r,o)=>t[o]??`{${o}}`)}const l_=[{id:"jammed-post",label:"堵塞的黄铜邮槽",clue:"I · 绿粉由门外进入",position:[-4.8,0,2],model:{kind:"brass-letter-slot",landmarks:["hinged-brass-flap","split-envelope","green-powder-trail"],materials:["aged-brass","ivory-parchment","emerald-residue"],damageOrMagic:["powder-packed-hinge"]}},{id:"levitating-cake",label:"悬浮的紫罗兰布丁蛋糕",clue:"II · 奶油下有绕行丝线",position:[-1.6,0,2],model:{kind:"violet-pudding-cake",landmarks:["two-tier-sponge","violet-frosting","sugared-violets"],materials:["golden-sponge","violet-icing","porcelain-plate"],damageOrMagic:["green-thread-orbit"]}},{id:"sealed-floo",label:"三环封印的飞路炉",clue:"III · 三环汇聚于炉心",position:[1.6,0,2],model:{kind:"triple-ring-fireplace-seal",landmarks:["brick-arch","three-rune-rings","cold-green-hearth"],materials:["soot-black-brick","verdigris-copper","floo-embers"],damageOrMagic:["three-converging-residue-streams"]}},{id:"shrieking-lamp",label:"裂口尖叫油灯",clue:"诱饵 · 红线接回警报",position:[4.8,0,2],model:{kind:"shrieking-oil-lamp",landmarks:["loop-handle","cracked-glass","mouth-shaped-flame"],materials:["blackened-iron","smoked-glass","alarm-red-flame"],damageOrMagic:["red-alarm-wire"]}}],ms=Object.freeze({mobileClueWidth:2.45,mobileClueFontSize:23,desktopClueWidth:2.75,desktopClueFontSize:28,mobileWallWidth:5,mobileWallFontSize:24}),Qu={wallClue:"邮槽绿粉 · 蛋糕丝线 · 壁炉三环",dynamic:{wrong:"“{label}”接通了报警回路！封锁重置，干扰增强至 {count}。",firstHint:"邮槽里的绿色粉尘来自室外。残痕没有走直线，而是绕向被悬浮咒托起的蛋糕。",secondHint:"蛋糕下方的魔力丝线指向壁炉。最后解除飞路炉上的三环封印。",progress:"住宅封锁痕迹已确认 {count} / 3",accepted:"{label}的残痕已固定，绿色干扰显露下一段走向。",completeObjective:"精灵的封锁完成：邮槽、悬浮蛋糕与飞路炉的干扰链已全部解除",completeHint:"绿色粉尘标出入口，悬浮蛋糕暴露绕行，飞路封印是最终汇聚点。住宅出口重新打开。",transitionKicker:"第二部 · 第一章 · 第 1 关完成",transitionTitle:"飞车失控",completionMessage:"三重封锁碎成绿色星屑——正在登上失控飞车，追赶霍格沃茨特快！",nextRoomMessage:"飞车关卡已加载：先调整行李配重，再对准铁路，最后短促给油。"}};function Vn(i,e,t={}){const n=Qu.dynamic[e];return ye(i,n).replace(/\{(\w+)\}/g,(r,o)=>t[o]??`{${o}}`)}const c_=[{id:"balance-luggage",label:"后移行李配重",clue:"I · 皮箱压低车尾",position:[-4.8,0,3.45],model:{kind:"strapped-luggage-trunk",landmarks:["brown-travel-trunk","crossed-leather-straps","brass-corner-guards"],materials:["scuffed-leather","aged-brass"],damageOrMagic:["rearward-motion-arrow"]}},{id:"align-railway",label:"对准红色铁路灯",clue:"II · 准星重合红灯",position:[-1.6,0,3.45],model:{kind:"railway-alignment-wheel",landmarks:["three-spoke-steering-wheel","glass-sighting-ring","red-signal-needle"],materials:["black-leather","chrome","red-enamel"],damageOrMagic:["needle-points-to-rail-signal"]}},{id:"pulse-throttle",label:"短促脉冲油门",clue:"III · 蓝区三次短推",position:[1.6,0,3.45],model:{kind:"cool-pulse-throttle",landmarks:["slender-throttle-lever","three-blue-notch-marks","coolant-temperature-dial"],materials:["brushed-steel","blue-enamel","clear-glass"],damageOrMagic:["three-cool-pulse-glows"]}},{id:"floor-throttle",label:"一脚踩死油门",clue:"诱饵 · 红区持续过热",position:[4.8,0,3.45],model:{kind:"overheated-throttle-decoy",landmarks:["wide-floor-pedal","redline-temperature-dial","split-radiator-hose"],materials:["scorched-steel","warning-red-enamel","black-rubber"],damageOrMagic:["steam-burst","orange-overheat-cracks"]}}],gs=Object.freeze({mobileClueWidth:1.55,mobileClueFontSize:18,desktopClueWidth:2.45,desktopClueFontSize:25,mobileWallWidth:3.8,mobileWallFontSize:20}),ed={wallClue:"行李后移 · 红灯校向 · 蓝区脉冲",dynamic:{wrong:"“{label}”让引擎过热！飞车翻滚，乱流升至 {count}。",firstHint:"皮箱后移后车尾下沉，车头恢复水平。现在让方向盘准星与铁路尽头的红色信号灯重合。",secondHint:"航向已经锁定，但水温仍在红区。把细油门杆短推三次，不能踩住宽踏板。",progress:"飞车稳定步骤已完成 {count} / 3",accepted:"{label}生效，飞车姿态恢复了一部分。",completeObjective:"飞车失控完成：配重、航向与脉冲油门让车辆安全追上列车",completeHint:"皮箱后移压低车尾，红灯准星校正航向，蓝区三次脉冲避免引擎过热。远处的打人柳正在挥动枝条。",transitionKicker:"第二部 · 第一章 · 第 2 关完成",transitionTitle:"打人柳下",completionMessage:"飞车擦过高架桥，稳稳落在城堡草地——打人柳的粗枝突然苏醒！",nextRoomMessage:"打人柳关卡已加载：等待高扫、俯身避低返，再冲过树根间隙。"}};function Wn(i,e,t={}){const n=ed.dynamic[e];return ye(i,n).replace(/\{(\w+)\}/g,(r,o)=>t[o]??`{${o}}`)}const u_=[{id:"wait-high-swing",label:"等待高枝扫过",clue:"I · 风声在头顶",position:[-4.8,0,1.6],color:5797258,model:{kind:"overhead-branch-arc",landmarks:["raised-forked-branch","curved-wind-arc","airborne-willow-leaves"],materials:["dark-bark","blue-wind-glass","green-leaves"],damageOrMagic:["overhead-motion-streaks"]}},{id:"duck-low-return",label:"俯身避开低返",clue:"II · 落叶贴地",position:[-1.6,0,1.6],color:7045461,model:{kind:"ground-skimming-return",landmarks:["low-horizontal-branch","bent-crouching-arch","ground-level-leaf-trail"],materials:["mossy-bark","worn-stone","olive-leaves"],damageOrMagic:["scraped-ground-line"]}},{id:"dash-root-gap",label:"冲过露根间隙",clue:"III · 树洞显露",position:[1.6,0,1.6],color:9598019,model:{kind:"illuminated-root-passage",landmarks:["paired-arched-roots","dark-hollow-opening","forward-footprint-path"],materials:["root-bark","black-hollow","luminous-green-resin"],damageOrMagic:["green-safe-window-glow"]}},{id:"run-before-swing",label:"立刻直冲树洞",clue:"诱饵 · 粗枝蓄力",position:[4.8,0,1.6],color:10109249,model:{kind:"splintered-impact-decoy",landmarks:["cocked-heavy-branch","shattered-warning-post","red-impact-burst"],materials:["angry-bark","fresh-splinter-wood","warning-red-magic"],damageOrMagic:["fresh-impact-splinters","red-danger-pulse"]}}],vs=Object.freeze({mobileClueWidth:1.8,mobileClueFontSize:19,desktopClueWidth:2.7,desktopClueFontSize:28,mobileWallWidth:4.2,mobileWallFontSize:20}),td={wallClue:"破风高扫 · 落叶低返 · 绿根开隙",dynamic:{wrong:"“{label}”踩错节拍！粗枝扫中肩膀，擦伤升至 {count}。",firstHint:"高枝带着破风声从头顶扫过。枝梢正在贴着落叶低低返程，立刻俯身。",secondHint:"低枝擦过背后，主干短暂失去平衡。发光树根之间的缝隙就是第三拍。",progress:"打人柳安全节拍已完成 {count} / 3",accepted:"{label}：动作与枝条节拍吻合。",completeObjective:"打人柳下完成：高扫、低返、露根三拍全部避开，树洞通道已经打开",completeHint:"破风声预告高扫，贴地落叶暴露低返，两次攻击后的收势形成通往树洞的安全窗口。",transitionKicker:"第二部 · 第一章 · 第 3 关完成",transitionTitle:"树洞开启",completionMessage:"你滑入树根下的安全通道。城堡走廊尽头，一行血字正从潮湿石墙上浮现……"}};function ci(i,e,t={}){const n=td.dynamic[e];return ye(i,n).replace(/\{(\w+)\}/g,(r,o)=>t[o]??`{${o}}`)}const d_=[{id:"flute",label:"银木横笛",clue:"I · 七孔夜风之息",position:[-5.1,1.45,2.8],model:{kind:"silverwood-transverse-flute",landmarks:["slender-bore","seven-tone-holes","silver-mouthpiece"],materials:["pale-silverwood","tarnished-silver"],soundCue:["blue-breath-ribbon"]}},{id:"harp",label:"月弦竖琴",clue:"II · 新月琴框托梦",position:[-1.9,1.25,2.8],model:{kind:"crescent-frame-harp",landmarks:["crescent-pillar","arched-neck","nine-vertical-strings"],materials:["warm-walnut","moon-silver-strings"],soundCue:["golden-string-ripples"]}},{id:"music-box",label:"星纹发条音乐盒",clue:"III · 黄铜滚筒封住鼾声",position:[4.4,1.25,2.8],model:{kind:"star-inlaid-clockwork-box",landmarks:["open-hinged-lid","pinned-brass-cylinder","side-winding-key"],materials:["midnight-blue-lacquer","polished-brass"],soundCue:["three-clockwork-note-stars"]}}],_s=Object.freeze({mobileCameraZ:7.5,mobileGuardianScale:.72,mobileInstrumentX:[0,-1.4,1.4],mobileInstrumentScale:.68,mobileLabelWidth:2.1,mobileLabelFontSize:22}),el={wallClue:"禁区守卫 · 三首同眠 · 活板门在爪下",scoreClue:"褪色乐谱：气息 → 琴弦 → 发条",dynamic:{wrong:"“{label}”打乱了旋律！三颗头同时睁眼，惊醒次数：{count}。",firstHint:"横笛的七孔送出夜风，左首已经合眼。现在用月弦托住刚形成的梦境。",secondHint:"竖琴的九根银弦让中首伏下。最后转动黄铜滚筒，以稳定发条节拍封住鼾声。",progress:"安眠旋律已完成 {count} / 3",accepted:"{label}奏效，一颗头缓缓合上琥珀色双眼。",completeObjective:"城堡禁区完成：三颗头都已沉睡，爪下的活板门安全开启",completeHint:"七孔夜风、九根月弦与黄铜发条叠成摇篮曲。铁箍活板门下吹来潮湿植物的气息。",transitionKicker:"第一部 · 第二章完成",transitionTitle:"禁区守门人",completionMessage:"三头守卫沉入梦乡——第二章通关，正在前往“镜中秘密”！",nextRoomMessage:"第三章已加载：在飞行训练场按风向与重量送回三件遗失物。"}};function Xn(i,e,t={}){const n=el.dynamic[e];return ye(i,n).replace(/\{(\w+)\}/g,(r,o)=>t[o]??`{${o}}`)}const iu=[{id:"lower",label:"低塔石阶 · 起点",clue:"I · 七阶从最低平台升起",position:[-4.35,0,1.9],model:{kind:"low-landing-seven-step-stair",landmarks:["seven-broad-steps","low-square-landing","single-roman-one-pillar"],materials:["dark-castle-stone","worn-brass-edge"],symbols:["roman-one"]}},{id:"moon",label:"月光桥 · 中央刻线",clue:"II · 钟摆居中时月桥停驻",position:[0,0,-2],model:{kind:"moon-bridge-pendulum-stair",landmarks:["split-seven-step-bridge","crescent-arch","center-alignment-needle"],materials:["blue-moonstone","silver-inlay"],symbols:["crescent-moon"]}},{id:"upper",label:"高塔石阶 · 三尖塔",clue:"III · 三道刻痕指向最高塔",position:[4.35,0,1.9],model:{kind:"high-tower-triple-spire-stair",landmarks:["seven-steep-steps","raised-octagonal-landing","three-gothic-spires"],materials:["pale-high-tower-stone","golden-brass-edge"],symbols:["roman-three"]}}],Ws=Object.freeze({mobileCameraZ:7.4,mobileRouteScale:.76,mobileRouteX:[-3.4,0,3.4],mobileLabelWidth:2.1,mobileLabelFontSize:24}),tl={wallClue:"大楼梯 · 低台至月桥再至高塔",routeInscription:"路线石板：I 低台 → II 月桥居中 → III 三尖高塔",dynamic:{wrong:"“{label}”转离了路线！三座楼梯重新移动，时间惩罚 +5 秒。",firstHint:"低塔七阶已固定。等待钟摆尖端穿过中央银线，再寻找新月拱桥。",secondHint:"月光桥已固定。最后选择有三座尖塔与三道黄铜刻痕的最高平台。",progress:"路线已稳定 {count} / 3",accepted:"{label}停止旋转，路线的一段已稳定。",completeObjective:"移动楼梯关卡完成：低台、月桥和三尖高塔已连接至画像走廊",completeHint:"七级低塔、钟摆中央线与三尖高塔首尾相接。路线尽头的三幅画像正在争论银钥口令。",transitionKicker:"第一部 · 第二章 · 第 1 关完成",transitionTitle:"通往画像走廊",completionMessage:"三座楼梯在钟声中连接——正在前往“会说话的画像”！",nextRoomMessage:"第二关已加载：比较画像证词，推导正确询问顺序。"}};function qn(i,e,t={}){const n=tl.dynamic[e];return ye(i,n).replace(/\{(\w+)\}/g,(r,o)=>t[o]??`{${o}}`)}const h_=[{id:"scholar",label:"蓝袍月桂学者",quote:"“骑士绝不是第一位；我的月桂框知道开头。”",clue:"I · 月桂开篇 · 展卷求证",position:[-4.7,3.75,-8.05],model:{kind:"blue-robed-scholar-with-laurel-manuscript",landmarks:["blue-pointed-cap","open-parchment-manuscript","round-spectacles","laurel-corner-frame"],materials:["midnight-blue-velvet","aged-parchment","antique-gold-leaf"],symbols:["laurel-beginning"]}},{id:"knight",label:"放下长剑的银甲骑士",quote:"“学者必须先发言，女士保管最后一词。”",clue:"II · 银甲承接 · 剑尖向下",position:[0,3.75,-8.05],model:{kind:"silver-armored-knight-with-lowered-sword",landmarks:["crested-closed-helm","layered-silver-breastplate","lowered-long-sword","blue-shield-chevron"],materials:["brushed-silver-plate","dark-steel-blade","royal-blue-enamel"],symbols:["lowered-sword-second"]}},{id:"lady",label:"持银钥的月桂女士",quote:"“我在骑士之后，银钥只为完整证词转动。”",clue:"III · 月桂收尾 · 银钥转门",position:[4.7,3.75,-8.05],model:{kind:"burgundy-lady-with-silver-key-and-laurel",landmarks:["burgundy-gown","braided-hair","oversized-silver-key","laurel-wreath"],materials:["burgundy-brocade","polished-silver","green-laurel-leaf"],symbols:["silver-key-last"]}}],Xs=Object.freeze({mobileCameraZ:7.4,mobilePortraitScale:.84,mobileLabelWidth:2.35,mobileLabelFontSize:25,interactionCanvasHeight:4.3,interactionCanvasCenterY:-.2}),nl={wallClue:"证词链 · 月桂开篇 → 银剑承接 → 银钥收尾",doorLabel:"银钥证词门",dynamic:{wrong:"“{label}”高声反驳！证词链断裂，画像怀疑升至 {count}。",firstHint:"学者的月桂框亮起。她确认：放下长剑的银甲骑士应当接着发言。",secondHint:"骑士让剑尖垂地并指向女士：最后一个词藏在她举起的银钥之后。",progress:"可信证词已连接 {count} / 3",accepted:"{quote}——这段证词与前文一致。",completeObjective:"画像谜题完成：银钥口令已经显现",completeHint:"三段证词一致。完整口令：“{password}”。",transitionKicker:"第一部 · 第二章 · 第 2 关完成",transitionTitle:"银钥口令",completionMessage:"画像齐声念出：“{password}”——正在进入管理员的巡夜路线！",nextRoomMessage:"第三关已加载：借助盔甲、猫铃与挂毯避开巡夜灯光。"}};function jn(i,e,t={}){const n=nl.dynamic[e];return ye(i,n).replace(/\{(\w+)\}/g,(r,o)=>t[o]??`{${o}}`)}const nd=[{id:"spellbook",label:"《标准咒语·初级》",position:[-4.9,1,-5],labelHeight:1.2,color:8070194,model:{kind:"embossed-hardback-spellbook",landmarks:["thick-page-block","raised-leather-covers","gold-spell-star-emblem","ribbon-bookmark"],materials:["burgundy-leather","aged-paper","gold-leaf"]}},{id:"cauldron",label:"二号锡制坩埚",position:[5,.7,-4.9],labelHeight:1.45,model:{kind:"pewter-size-two-cauldron",landmarks:["deep-open-bowl","thick-rolled-rim","two-ring-handles","three-short-legs","size-two-stamp"],materials:["hammered-pewter","soot-darkened-iron"]}},{id:"owl",label:"雪白猫头鹰",position:[-5,1.25,.6],labelHeight:1.65,model:{kind:"snowy-owl-on-perch",landmarks:["round-feathered-body","two-folded-wings","facial-disc-and-beak","talons-on-perch"],materials:["snow-white-feathers","amber-eyes","dark-wood-perch"]}},{id:"wand-box",label:"等待主人的魔杖盒",position:[5,1,.7],labelHeight:1.35,color:6966058,model:{kind:"open-velvet-wand-case",landmarks:["long-narrow-case","open-hinged-lid","velvet-lined-channel","visible-wand-in-velvet-channel"],materials:["walnut","violet-velvet","holly-wood"]}},{id:"broomstick",label:"飞天扫帚",position:[5,1.2,5.8],labelHeight:1.2,model:{kind:"bound-twig-broomstick",landmarks:["long-tapered-shaft","dense-twig-bristles","brass-binding-bands","small-footrests"],materials:["polished-ash","birch-twigs","brass"]}},{id:"crystal-ball",label:"水晶球",position:[-5,1,5.7],labelHeight:1.7,color:6707589,model:{kind:"glass-orb-on-tripod",landmarks:["translucent-glass-orb","inner-violet-mist","three-claw-cradle","tripod-base"],materials:["clear-crystal","violet-mist","antique-brass"]}},{id:"gold-scales",label:"黄铜天平",position:[-3.2,1,-1.8],labelHeight:2.05,color:11041845,model:{kind:"balanced-brass-scales",landmarks:["central-pillar","horizontal-balance-beam","two-chain-sets","two-hanging-pans"],materials:["polished-brass","dark-mahogany"]}},{id:"advanced-potions",label:"高级魔药学",position:[3.1,1,-2.5],labelHeight:1.25,color:2706741,model:{kind:"green-potions-textbook",landmarks:["thick-page-block","green-leather-covers","silver-cauldron-emblem","bottle-shaped-clasp"],materials:["green-leather","aged-paper","silver-inlay"]}}],il={wallClue:"霍格沃茨一年级采购清单 · 预算 12 加隆",listTitle:"按清单顺序：课本 → 二号锡制坩埚 → 猫头鹰 → 魔杖盒",dynamic:{wrong:"清单顺序错误：“{label}”不该现在购买。采购篮被清空！",purchased:"已购入：{label}（{price} 加隆）",completeObjective:"采购完成：前往破釜酒吧出口",completeHint:"清单上的四枚墨点连成了一条通往下一段旅程的路线。",completeMessage:"霍格沃茨采购清单完成——出口已经开启！"}};function f_(i){return nd.find(e=>e.id===i)}function qs(i,e,t={}){const n=il.dynamic[e];return ye(i,n).replace(/\{(\w+)\}/g,(r,o)=>t[o]??`{${o}}`)}const id=[{id:"lion",label:"狮 · 勇气",clue:"I · 直面恐惧",x:-4.8,colors:[9184818,14002239],labelHeight:2.75,model:{kind:"rampant-lion-heraldry",landmarks:["mane-disc","muzzled-head","raised-forepaws","long-curved-tail"],materials:["crimson-enamel","hammered-gold"]}},{id:"badger",label:"獾 · 忠诚",clue:"II · 守护同伴",x:-1.6,colors:[1513239,14137421],labelHeight:2.55,model:{kind:"crouching-badger-heraldry",landmarks:["low-stocky-body","white-facial-stripe","short-rounded-ears","four-clawed-paws"],materials:["blackened-bronze","ivory-enamel"]}},{id:"eagle",label:"鹰 · 智慧",clue:"III · 思考照明",x:1.6,colors:[2706554,12166781],labelHeight:2.85,model:{kind:"spread-wing-eagle-heraldry",landmarks:["hooked-beak","spread-feathered-wings","layered-flight-feathers","gripping-talons"],materials:["blue-enamel","antique-bronze"]}},{id:"snake",label:"蛇 · 野心",clue:"IV · 开辟道路",x:4.8,colors:[2579523,12567997],labelHeight:2.7,model:{kind:"coiled-serpent-heraldry",landmarks:["coiled-tail","raised-s-neck","wedge-shaped-head","forked-tongue"],materials:["emerald-enamel","silver-inlay"]}}],Qs={name:"分院仪式",objective:"目标：读懂分院帽诗谜，依次触碰勇气、忠诚、智慧与野心的动物徽章",hint:"观察动物轮廓：先直面恐惧，再守护同伴；随后以思考照亮未知，最后以意志开辟道路。选错不会清空已解线索。",reminders:["先找敢于直面恐惧的象征","现在要找不求荣耀、始终守护同伴的象征","现在要找以思考照亮未知的象征","最后要找意志坚定、善于为目标开辟道路的象征"],dynamic:{wrong:"“{label}”不符合诗谜顺序。分院帽低声提醒：{reminder}。",progress:"分院线索已确认 {count} / 4",courageObjective:"勇气线索已确认：继续解读“留在朋友身边”的学院象征",courageHint:"第一句已解：狮代表直面恐惧的勇气。下一句赞美不求荣耀、始终守护同伴的品格。",courageMessage:"狮徽亮起金光——勇气是分院诗谜的第一条线索！",loyaltyObjective:"忠诚线索已确认：继续寻找“以思考照亮未知”的学院象征",loyaltyHint:"第二句已解：獾代表不求荣耀的忠诚。下一句属于用问题、观察与求知驱散迷雾的人。",loyaltyMessage:"獾徽泛起暖黄光芒——忠诚是分院诗谜的第二条线索！",wisdomObjective:"智慧线索已确认：继续寻找“为目标开辟道路”的学院象征",wisdomHint:"第三句已解：鹰代表以思考照亮未知的智慧。最后一句属于意志坚定、善于实现目标的人。",wisdomMessage:"鹰徽闪过清澈蓝光——智慧是分院诗谜的第三条线索！",completeObjective:"第一章完成：四种品格共同照亮了你的分院之路",completeHint:"勇气、忠诚、智慧与野心并非互斥；分院帽认可了你完整读懂诗谜的选择。",completeKicker:"第一部 · 第一章完成",completeTitle:"霍格沃茨的新生",completeMessage:"蛇徽亮起翠光——四学院诗谜完成，第一章通关！"}};function cn(i,e,t={}){const n=Qs.dynamic[e];return ye(i,n).replace(/\{(\w+)\}/g,(r,o)=>t[o]??`{${o}}`)}const p_=[{id:"oak",label:"橡木",x:-3.2,color:9067051,labelHeight:2.45,model:{kind:"oak-bark-wand-blank",landmarks:["thick-knotted-bark","acorn-cap-pommel","broad-cut-tip"],materials:["warm-oak-heartwood","dark-fissured-bark"]}},{id:"holly",label:"冬青木",x:0,color:15656132,labelHeight:2.45,model:{kind:"holly-evergreen-wand-blank",landmarks:["pale-straight-grain","evergreen-leaf-inlay","three-red-berry-studs"],materials:["ivory-holly-wood","green-and-crimson-enamel"]}},{id:"yew",label:"紫杉木",x:3.2,color:4792340,labelHeight:2.45,model:{kind:"yew-berry-wand-blank",landmarks:["dark-twisted-grain","forked-root-grip","poison-red-berry-stud"],materials:["dark-yew-heartwood","blood-red-resin"]}}],m_=[{id:"dragon-heartstring",label:"龙心弦",x:-3.2,color:10959653,labelHeight:2.35,model:{kind:"coiled-dragon-heartstring",landmarks:["thick-sinew-coil","charred-scale-clasp","ember-red-pulse"],materials:["crimson-sinew","blackened-scale"]}},{id:"phoenix-feather",label:"凤凰羽毛",x:0,color:15906891,labelHeight:2.55,model:{kind:"barbed-phoenix-feather",landmarks:["long-golden-quill","paired-fire-barbs","ember-bright-tip"],materials:["golden-keratin","orange-fire-plumage"]}},{id:"unicorn-hair",label:"独角兽毛",x:3.2,color:15196623,labelHeight:2.35,model:{kind:"luminous-unicorn-hair",landmarks:["three-fine-silver-strands","braided-center","pearl-clasp"],materials:["moonlit-silver-hair","pearl-white-clasp"]}}],g_=[{inches:9,label:"九英寸",x:-3.2,length:1.05,labelHeight:2.25,model:{kind:"nine-inch-holly-wand",landmarks:["engraved-inch-ticks","short-light-stop","evergreen-leaf-grip"]}},{inches:11,label:"十一英寸",x:0,length:1.3,labelHeight:2.25,model:{kind:"eleven-inch-holly-wand",landmarks:["engraved-inch-ticks","gold-target-mark","evergreen-leaf-grip"]}},{inches:13,label:"十三英寸",x:3.2,length:1.55,labelHeight:2.25,model:{kind:"thirteen-inch-holly-wand",landmarks:["engraved-inch-ticks","long-light-overshoot","evergreen-leaf-grip"]}}],Hi={name:"魔杖选择",objective:"目标：第一阶段，从三种木材中找出与你产生稳定共鸣的一种",hint:"木材线索：闪电形旧伤旁，常青叶不会在严冬凋零。选错会触发失控魔法。",wallClue:"木材  ·  杖芯  ·  长度",shopSign:"奥利凡德 · 公元前 382 年",progress:"木材 {wood}  杖芯 {core}  长度 {length}",dynamic:{checklist:"木材 {wood}  杖芯 {core}  长度 {length}",wrongWood:"{label}迸出危险火花——木材匹配仍未完成。",coreObjective:"第二阶段：在三种杖芯中找出会回应守护、忠诚与重生的一种",coreHint:"杖芯线索：它来自浴火重生的鸟，曾送来两根命运彼此呼应的羽毛。",woodSuccess:"稳定共鸣！冬青木完成了第一阶段匹配。",wrongCore:"{label}抗拒了冬青木——重新解读浴火重生的线索。",lengthObjective:"杖芯匹配成功：凤凰羽毛与冬青木稳定共鸣，准备校准长度",lengthHint:"长度线索：短杖的火星触不到远处，长杖的光弧越过目标；让光准确停在十一道刻痕。",coreSuccess:"凤凰羽毛释放出温暖金光——第二阶段匹配完成！",tooShort:"火星在目标前坠落",tooLong:"光弧越过了目标",wrongLength:"{label}：{direction}！重新校准长度。",completeObjective:"魔杖选择完成：带上魔杖，从车站门前往霍格沃茨分院仪式",completeHint:"三阶段共鸣稳定。奥利凡德为魔杖系上金色封签，通往霍格沃茨的门已经开启。",completeMessage:"十一道刻痕同时亮起——魔杖选择了巫师！前往已开启的车站门。",transitionKicker:"第一部 · 第一章 · 第 {room} 关",doorOpening:"门正在打开：准备进入第 {room} 关“{name}”",roomComplete:"魔杖店完成！正在前往“{name}”……",arrival:"第四关已加载：你已抵达霍格沃茨礼堂，分院仪式即将开始。",progress:"共鸣已确认：{count} / 3 · 失误：{mistakes}"}};function Xt(i,e,t={}){const n=Hi.dynamic[e]??Hi[e];return ye(i,n).replace(/\{(\w+)\}/g,(r,o)=>t[o]??`{${o}}`)}const sl=["cupboard","bedroom","hotel-room-17","island-hut"],rl=["spellbook","cauldron","owl","wand-box"],sd=Object.freeze({spellbook:2,cauldron:3,owl:4,"wand-box":3}),v_=Object.freeze([Object.freeze({id:"owl-letters",name:"猫头鹰来信"}),Object.freeze({id:"diagon-alley-list",name:"对角巷清单"}),Object.freeze({id:"wand-selection",name:"魔杖选择"}),Object.freeze({id:"sorting-ceremony",name:"分院仪式"})]);function wl(i){return v_[i]??null}function __(i,e){const t=sl[i.progress.length];if(e!==t)return{progress:[],unlocked:!1,reset:!0};const n=[...i.progress,e];return{progress:n,unlocked:n.length===sl.length,reset:!1}}function x_(i,e){const t=rl[i.progress.length];if(e!==t)return{progress:[],unlocked:!1,spent:0,reset:!0};const n=[...i.progress,e];return{progress:n,spent:(i.spent??0)+sd[e],unlocked:n.length===rl.length,reset:!1}}function b_(i,e){return e!=="holly"?{...i,mistakes:i.mistakes+1,accepted:!1,feedback:"unstable"}:{...i,progress:["wood"],accepted:!0}}function y_(i,e){return i.progress.includes("wood")?e!=="phoenix-feather"?{...i,mistakes:i.mistakes+1,accepted:!1,feedback:"resisted"}:{...i,progress:[...i.progress,"core"],accepted:!0}:{...i,accepted:!1,feedback:"unavailable"}}function S_(i,e){return e===11?{...i,progress:[...i.progress,"length"],unlocked:!0,accepted:!0,feedback:"chosen"}:{...i,mistakes:i.mistakes+1,accepted:!1,feedback:e<11?"too-short":"too-long"}}function M_(i,e){const t=["lion","badger","eagle","snake"],n={lion:"courage",badger:"loyalty",eagle:"wisdom",snake:"ambition"},s=t[i.progress.length];if(e!==s)return{...i,mistakes:i.mistakes+1,accepted:!1,feedback:"wrong-order"};const r=[...i.progress,e],o=r.length===t.length;return{...i,progress:r,unlocked:o,accepted:!0,trait:n[e],...o?{chapterComplete:!0}:{}}}function E_({roomIndex:i,unlocked:e}){return e?{roomIndex:i+1,advanced:!0}:{roomIndex:i,advanced:!1}}const Rt=new $h,Nt=new yn(70,innerWidth/innerHeight,.1,100),Ci=new dv({antialias:!0});Ci.setPixelRatio(Math.min(devicePixelRatio,2));Ci.setSize(innerWidth,innerHeight);Ci.shadowMap.enabled=!0;Ci.shadowMap.type=du;Ci.outputColorSpace=pn;document.querySelector("#app").appendChild(Ci.domElement);const de=new yf(10201809,2957592,1.05);Rt.add(de);const Tl=new Ef(12899583,1.5);Tl.position.set(-4,8,5);Tl.castShadow=!0;Rt.add(Tl);const Un=new mv(Nt,document.body),Al=document.querySelector("#start-screen"),pr=document.querySelector("#start-button"),bo=document.querySelector("#continue-button"),co=document.querySelector("#restart-button"),w_=document.querySelector("#mobile-controls"),$e=document.querySelector("#objective"),zt=document.querySelector("#counter"),Ys=document.querySelector("#prompt"),aa=document.querySelector("#message"),ti=document.querySelector("#room-kicker"),T_=document.querySelector("#room-name"),et=document.querySelector("#puzzle-hint"),Vt=document.querySelector("#puzzle-progress"),ot=document.querySelector("#room-transition"),Qt=document.querySelector("#transition-kicker"),tn=document.querySelector("#transition-title"),uo=document.querySelector("#language-screen"),rd=document.querySelector("#language-button"),en=document.querySelector("#narration-button"),er=document.querySelector("#narration-status"),A_=document.querySelector("#narration-subtitle"),ws=document.querySelector("#narration-audio");let Tn="idle",ol=0;const Be=matchMedia("(pointer: coarse)").matches||matchMedia("(max-width: 820px)").matches||navigator.maxTouchPoints>0,su=ju(localStorage),Ks=su?wv(su):null;let N=Rv(localStorage),Ce=fr(N),od,mr=!1,_e=new ht;Rt.add(_e);let je=[],Tt=[],wi=null,ze=null,yt=0,P={progress:[],unlocked:!1},ru,no=!1;const ou={x:8.25,z:8.25},al=new Af;al.far=4.2;function I(i,e={}){return new Fu({color:i,roughness:.82,...e})}function k(i,e,t,n,s=!0,r=_e){const o=new X(new mt(...e),n);return o.name=i,o.position.set(...t),o.castShadow=s,o.receiveShadow=!0,r.add(o),o}function C_(i){i.traverse(e=>{e.geometry?.dispose?.();const t=Array.isArray(e.material)?e.material:[e.material];for(const n of t)n&&(n.map?.dispose?.(),n.dispose?.())})}function R_(){Rt.remove(_e),C_(_e),_e=new ht,Rt.add(_e),je=[],Tt=[],wi=null,ze=null,Ys.classList.remove("visible")}function De(i,e,{color:t="#f2d28b",width:n=4.8,size:s=54}={}){i=ye(N,i);const r=document.createElement("canvas");r.width=1024,r.height=220;const o=r.getContext("2d");o.fillStyle="rgba(7, 5, 10, 0.82)",o.fillRect(0,0,r.width,r.height),o.strokeStyle=t,o.lineWidth=8,o.strokeRect(8,8,r.width-16,r.height-16),o.fillStyle=t,o.font=`600 ${s}px -apple-system, BlinkMacSystemFont, sans-serif`,o.textAlign="center",o.textBaseline="middle",o.fillText(i,r.width/2,r.height/2);const a=new nf(r);a.colorSpace=pn;const c=new Jh(new Du({map:a,transparent:!0,depthTest:!0}));return c.position.set(...e),c.scale.set(n,n*.215,1),_e.add(c),c}function le(i,e=2400){aa.textContent=ye(N,i),aa.classList.add("show"),clearTimeout(ru),ru=setTimeout(()=>aa.classList.remove("show"),e)}function Yt({index:i,name:e,objectiveText:t,hint:n,progress:s}){const r=yt>=16?{book:2,chapter:1,room:yt-15}:{book:1,chapter:Math.floor(yt/4)+1,room:yt%4+1},o=Pv(N,{...r,name:e,objectiveText:t,hint:n});ti.textContent=o.kicker,T_.textContent=o.name,$e.textContent=o.objectiveText,et.textContent=o.hint,Vt.textContent=s}function au(){const i=P.progress.length;zt.textContent=Ce("counter.letters",{count:i}),Vt.textContent=sl.map((e,t)=>t<i?"●":"○").join("  ")}function lu(){const i=P.progress.length;zt.textContent=Ce("counter.shopping",{count:i,remaining:12-(P.spent??0)}),Vt.textContent=rl.map((e,t)=>t<i?"✓":"□").join("  ")}function Cl(){const i=P.progress.includes("wood"),e=P.progress.includes("core"),t=P.progress.includes("length");zt.textContent=Ce("counter.wand",{count:P.progress.length,mistakes:P.mistakes}),Vt.textContent=Xt(N,"checklist",{wood:i?"✓":"○",core:e?"✓":"○",length:t?"✓":"○"})}function ad(){zt.textContent=Ce("counter.sorting",{count:P.progress.length,mistakes:P.mistakes}),Vt.textContent=id.map(i=>`${ye(N,i.label)} ${P.progress.includes(i.id)?"✓":"○"}`).join("  ")}function ld(){zt.textContent=Ce("counter.stairs",{count:P.progress.length,penalty:P.timePenalty}),Vt.textContent=["lower","moon","upper"].map((i,e)=>e<P.progress.length?"◆":"◇").join("  ")}function cd(){zt.textContent=Ce("counter.portraits",{count:P.progress.length,value:P.suspicion}),Vt.textContent=["scholar","knight","lady"].map((i,e)=>e<P.progress.length?"▣":"▢").join("  ")}function ud(){zt.textContent=Ce("counter.patrol",{count:P.progress.length,value:P.alert}),Vt.textContent=["armor","cat","tapestry"].map((i,e)=>e<P.progress.length?"◆":"◇").join("  ")}function dd(){zt.textContent=Ce("counter.lullaby",{count:P.progress.length,value:P.wakefulness}),Vt.textContent=["flute","harp","music-box"].map((i,e)=>e<P.progress.length?"♪":"·").join("  ")}function hd(){zt.textContent=Ce("counter.flying",{count:P.progress.length,value:P.turbulence}),Vt.textContent=["围巾","笔记","罗盘"].map((i,e)=>e<P.progress.length?"➤":"○").join("  ")}function fd(){zt.textContent=Ce("counter.troll",{count:P.progress.length,value:P.danger}),Vt.textContent=["止水","清障","架桥"].map((i,e)=>e<P.progress.length?"✦":"◇").join("  ")}function pd(){zt.textContent=Ce("counter.library",{count:P.progress.length,value:P.noise}),Vt.textContent=["建校","龙灾","月蚀"].map((i,e)=>e<P.progress.length?"▰":"▱").join("  ")}function md(){zt.textContent=Ce("counter.mirror",{count:P.progress.length,value:P.illusion}),Vt.textContent=["御寒","照路","同行"].map((i,e)=>e<P.progress.length?"◈":"◇").join("  ")}function gd(){zt.textContent=Ce("counter.snare",{count:P.progress.length,value:P.constriction}),Vt.textContent=[0,1,2].map((i,e)=>e<P.progress.length?"✺":"○").join("  ")}function vd(){zt.textContent=Ce("counter.keys",{count:P.progress.length,value:P.pursuit}),Vt.textContent=["折翼","轨迹","锁孔"].map((i,e)=>e<P.progress.length?"🗝":"◇").join("  ")}function _d(){zt.textContent=Ce("counter.chess",{count:P.progress.length,value:P.captured}),Vt.textContent=["兵诱敌","马双攻","车开路"].map((i,e)=>e<P.progress.length?"♟":"◇").join("  ")}function xd(){zt.textContent=Ce("counter.stone",{count:P.progress.length,value:P.corruption}),Vt.textContent=["药剂","镜像","意图"].map((i,e)=>e<P.progress.length?"◆":"◇").join("  ")}function bd(){zt.textContent=Ce("counter.elf",{count:P.progress.length,value:P.interference}),Vt.textContent=["邮槽","蛋糕","飞路"].map((i,e)=>e<P.progress.length?"✦":"◇").join("  ")}function yd(){zt.textContent=Ce("counter.car",{count:P.progress.length,value:P.turbulence}),Vt.textContent=["配重","航向","油门"].map((i,e)=>e<P.progress.length?"➤":"◇").join("  ")}function Sd(){zt.textContent=Ce("counter.willow",{count:P.progress.length,value:P.bruises}),Vt.textContent=["等","伏","冲"].map((i,e)=>e<P.progress.length?"♩":"◇").join("  ")}function Kt({wall:i=5787455,floor:e=2892828,ceiling:t=2696479,fog:n=1512207}){Rt.background=new rt(n),Rt.fog=new bl(n,.028);const s=I(i,{roughness:.96}),r=I(e,{roughness:1});k("地板",[18,.25,18],[0,-.12,0],r,!1),k("天花板",[18,.25,18],[0,7,0],I(t),!1),k("北墙",[18,7,.3],[0,3.5,-9],s,!1),k("南墙",[18,7,.3],[0,3.5,9],s,!1),k("西墙",[.3,7,18],[-9,3.5,0],s,!1),k("东墙",[.3,7,18],[9,3.5,0],s,!1)}function wt(i,e=2.5,t=8){const n=new ei(16753737,e,t,2);n.position.set(...i),n.castShadow=!0,_e.add(n);const s=new X(new ge(.09,12,12),new Fn({color:16762216}));s.position.copy(n.position),_e.add(s)}function Rl(i,e){const t=I(5256734,{roughness:.72}),n=I(2430735,{roughness:.75,metalness:.08});k("左门框",[.22,5.5,.42],[-1.72,2.75,-8.63],t),k("右门框",[.22,5.5,.42],[1.72,2.75,-8.63],t),k("上门框",[3.65,.22,.42],[0,5.45,-8.63],t);const s=new ht;s.position.set(-1.58,0,-8.48),_e.add(s);const r=k(i,[3.16,5.15,.22],[1.58,2.58,0],n,!0,s);return r.userData={type:"door",label:i,unlocked:!1,opening:!1,pivot:s,nextRoomIndex:e},je.push(r),wi=r,De(i,[0,6.05,-8.35],{width:4.2,size:48}),r}function la({position:i,rotation:e=[0,0,0],clueId:t=null,destination:n="",addressMark:s="",decoy:r=!1,decorative:o=!1,phase:a=0}){const c=I(15261117,{roughness:.72,emissive:t?2365197:0,emissiveIntensity:t?.35:0}),l=new X(new mt(.86,.54,.05),c);l.position.set(...i),l.rotation.set(...e),l.castShadow=!0,_e.add(l);const u=new X(new Se(.095,.095,.032,18),I(8328736,{roughness:.55}));if(u.rotation.x=Math.PI/2,u.position.set(0,-.05,.055),l.add(u),t){const f=I(14000474,{metalness:.2,roughness:.5});k("H 蜡印左竖",[.018,.095,.014],[-.031,-.05,.078],f,!1,l),k("H 蜡印右竖",[.018,.095,.014],[.031,-.05,.078],f,!1,l),k("H 蜡印横",[.075,.018,.014],[0,-.05,.078],f,!1,l);const m=I(3418917,{roughness:1});for(const[g,v]of[.48,.38,.3].entries())k("地址墨线",[v,.018,.009],[0,.11-g*.065,.041],m,!1,l)}const d=new X(new on().setFromPoints([new L(-.38,.22,.031),new L(.38,.22,.031),new L(0,-.05,.031)]),new Fn({color:13615775,side:Sn}));return l.add(d),o||(l.name=n,l.userData={type:"owl-letter",clueId:t,destination:n,addressMark:s,decoy:r,selected:!1},je.push(l)),Tt.push({object:l,baseY:i[1],phase:a,spin:o?.08:.025,bob:o?.16:.07}),l}function Yr(i,e=1,t=!1){const n=new ht;n.position.set(...i),n.scale.setScalar(e);const s=I(15328209,{roughness:1}),r=new X(new ge(.34,18,18),s);r.scale.y=1.35,r.castShadow=!0,n.add(r);const o=new X(new ge(.29,18,18),s);o.position.y=.48,n.add(o);for(const c of[-.11,.11]){const l=new X(new ge(.055,12,12),new Fn({color:15911244}));l.position.set(c,.53,.25),n.add(l);const u=new X(new ge(.025,10,10),new Fn({color:592137}));u.position.set(c,.53,.295),n.add(u)}const a=new X(new ut(.07,.18,4),I(14064444));return a.rotation.x=Math.PI/2,a.position.set(0,.4,.31),n.add(a),_e.add(n),t&&(r.userData={type:"shopping-item",itemId:"owl",label:"雪白猫头鹰"},je.push(r)),Tt.push({object:n,baseY:i[1],phase:i[0]+i[2],spin:0,bob:.04}),n}function I_(i){const[e,,t]=i.position,n=new ht;n.position.set(e,0,t),_e.add(n);const s=I(5387551,{roughness:.94}),r=I(12159288,{metalness:.72,roughness:.34}),o=I(4681358,{emissive:1322826,emissiveIntensity:.85,roughness:.28});if(i.model.kind==="cupboard-door"){k("斜顶储物间门",[1.5,1.8,.16],[0,.9,-.28],s,!0,n);for(const a of[.52,.66,.8])k("黄铜通风槽",[.52,.045,.035],[0,a,-.18],r,!1,n);for(let a=0;a<4;a+=1)k("楼梯踏步剪影",[1.8-a*.25,.18,.52],[-.7+a*.15,1.9+a*.18,-.18],s,!0,n)}else if(i.model.kind==="bedroom-window"){k("窄床",[1.65,.28,.72],[0,.35,-.15],I(7107919),!0,n),k("小卧室蓝窗",[1.22,1.28,.1],[0,1.35,-.45],o,!1,n),k("窗棂横",[1.3,.07,.13],[0,1.35,-.37],s,!1,n),k("窗棂竖",[.07,1.35,.13],[0,1.35,-.37],s,!1,n);const a=new X(new ut(1.18,.64,4),I(4337704));a.rotation.y=Math.PI/4,a.position.set(0,2.25,-.34),n.add(a)}else if(i.model.kind==="hotel-key"){k("旅行箱",[1.55,.92,.5],[0,.52,-.18],I(6898987),!0,n),k("旅行箱带",[.16,.96,.54],[0,.52,-.18],s,!0,n);const a=new X(new Xe(.27,.055,10,24),r);a.position.set(0,1.55,-.12),n.add(a),k("17 号黄铜钥匙牌",[.75,.5,.1],[0,1.18,-.12],r,!0,n),De("ROOM 17",[e,1.2,t+.02],{width:1.1,size:48,color:"#2c2117"}),k("铁路红色信号",[.16,1.4,.16],[-.75,1,-.35],I(3487030),!0,n);const c=new X(new ge(.16,12,12),I(12991538,{emissive:7999498,emissiveIntensity:1.5}));c.position.set(-.75,1.7,-.35),n.add(c)}else{const a=new X(new rr(1.18,0),I(3225661,{roughness:1}));a.scale.set(1.2,.58,.95),a.position.set(0,.55,-.2),n.add(a),k("暴风小屋",[1.25,1.05,.9],[0,1.25,-.2],s,!0,n);const c=new X(new ut(1.05,.72,4),I(2498588));c.rotation.y=Math.PI/4,c.position.set(0,2.08,-.2),n.add(c);for(const l of[1.25,1.55]){const u=new X(new Xe(l,.045,8,36,Math.PI),I(4750739,{emissive:1456973,emissiveIntensity:1}));u.rotation.x=Math.PI/2,u.rotation.z=Math.PI/2,u.position.set(0,.2,.1),n.add(u)}}De(i.clue,[e,2.85,t],{width:2.25,size:31})}function L_(){de.color.setHex(10985609),de.groundColor.setHex(3352093),Kt({wall:6709064,floor:3745566,ceiling:3881005,fog:1577487}),Yt({index:0,name:"猫头鹰来信",objectiveText:"目标：按弗农改变藏身处的时间顺序检查四封信",hint:"地址会追着哈利变化。错误选择会让已确认的信全部重新飞散。",progress:"○  ○  ○  ○"}),zt.textContent=Ce("counter.letters",{count:0}),P={progress:[],unlocked:!1};const i=I(4861208),e=I(2956049),t=I(7035201,{roughness:1}),n=I(5975587,{roughness:1});for(let o=0;o<7;o+=1)k("楼梯",[3.8-o*.32,.32,1.05],[-6.7+o*.2,.16+o*.32,-4.6+o*.72],e);k("楼梯下储物间",[2.4,2.15,.16],[-7.7,1.08,-3.7],i),De("楼梯下的储物间",[-7.42,2.55,-3.52],{width:3.2,size:42}),k("壁炉背板",[4.1,3.6,.38],[0,1.8,-8.58],n),k("壁炉洞口",[2.3,2,.46],[0,1,-8.3],I(1182472)),k("壁炉台",[4.6,.28,.72],[0,3.45,-8.2],i),wt([0,1.05,-7.85],4.2,8);for(const o of[-.55,0,.55])wt([o,.55+Math.abs(o)*.3,-7.75],1.25,4);k("沙发座",[4.2,.65,1.45],[3.9,.62,2.6],t),k("沙发背",[4.2,1.45,.45],[3.9,1.35,3.05],t),k("茶几",[3.1,.22,1.7],[1.7,.75,.2],i);for(const[o,a]of[[.45,-.45],[2.95,-.45],[.45,.85],[2.95,.85]])k("茶几腿",[.16,.75,.16],[o,.37,a],e);const s=I(6455968,{emissive:1915224,emissiveIntensity:1.8,roughness:.25});k("窗户",[5.1,2.7,.12],[0,3.8,8.78],s,!1),k("窗框横",[5.3,.16,.2],[0,3.8,8.65],i),k("窗框竖",[.16,2.9,.2],[0,3.8,8.65],i),Yr([-2,5.4,8.2],.8),Yr([0,5.65,8.2],.72),Yr([2.1,5.25,8.2],.85),Yr([-3.9,2.15,-1.4],1.05),De("4 PRIVET DRIVE",[0,6.15,8.45],{width:5.2,size:52}),De("NO POST ON SUNDAYS!",[3.85,4.7,-8.3],{color:"#e4b55e",width:4,size:42}),a_.forEach((o,a)=>{I_(o),la({...o,clueId:o.id,phase:a*1.4})}),[["front-door","V. Dursley · 女贞路前门",[-2.8,1.45,2.3]],["kitchen","D. Dursley · 厨房餐桌",[4.6,1.5,.2]],["zoo","H. Potter · 动物园爬虫馆",[-5.9,1.75,1.9]],["school","H. Potter · 石墙中学",[.1,1.35,3.75]]].forEach(([o,a,c],l)=>la({clueId:o,destination:a,position:c,decoy:!0,rotation:[0,l*.7,0],phase:2+l}));for(let o=0;o<34;o+=1){const a=o*.73,c=1.4+o%7*.72;la({position:[Math.sin(a)*c,1.1+o%9*.54,-6.8+Math.cos(a)*c*.62],rotation:[Math.sin(o)*.45,a,Math.cos(o*.4)*.3],decorative:!0,phase:o*.37})}De(to.wallClue,[0,6.25,-8.05],{width:to.mobileWallWidth,size:to.mobileWallFontSize}),Rl("通往对角巷",1)}function xs(i,e,t,n){const s=I(n,{roughness:.9});k(`${t}店面`,[3.2,5.6,.55],[i,2.8,e],s),k(`${t}橱窗`,[2.15,2.15,.12],[i,2.85,e+(e<0?.34:-.34)],I(4284528,{emissive:1587271,emissiveIntensity:.8,roughness:.2})),De(t,[i,5.3,e+(e<0?.42:-.42)],{width:3,size:38,color:"#e8c871"})}function P_(i,e,t,n,s=9069888){const r=f_(i),o=new ht;o.position.set(...t),o.scale.setScalar(1.18),o.name=e,_e.add(o);const a=(l,u,d,f=[0,0,0],m=[0,0,0])=>{const g=new X(u,d);return g.name=l,g.position.set(...f),g.rotation.set(...m),g.castShadow=!0,g.receiveShadow=!0,o.add(g),g},c=({cover:l,emblem:u,potion:d=!1})=>{const f=I(l,{roughness:.82});if(a("厚实书页",new mt(1.18,.22,.78),I(14206877,{roughness:1})),a("上层皮革封面",new mt(1.3,.08,.88),f,[0,.15,0]),a("下层皮革封面",new mt(1.3,.08,.88),f,[0,-.15,0]),a("圆脊书背",new Se(.13,.13,.88,12),f,[-.63,0,0],[Math.PI/2,0,0]),d)a("银色坩埚徽记",new Se(.2,.15,.13,16),I(u,{metalness:.75}),[.08,.22,0],[0,0,Math.PI/2]),a("药瓶形书扣",new Se(.06,.09,.26,10),I(u,{metalness:.75}),[.52,.22,0],[0,0,Math.PI/2]);else{for(let m=0;m<5;m+=1){const g=m*Math.PI*.8;a("金色咒语星纹",new ge(.055,8,8),I(u,{metalness:.7,emissive:6044680,emissiveIntensity:.45}),[Math.cos(g)*.22,.22,Math.sin(g)*.22])}a("红色书签",new mt(.09,.03,.58),I(10299186),[.35,-.18,.22])}};if(i==="spellbook")c({cover:8070194,emblem:13936965});else if(i==="advanced-potions")c({cover:2706741,emblem:12042950,potion:!0});else if(i==="cauldron"){const l=I(7830397,{metalness:.72,roughness:.42,side:Sn});a("二号深腹锅身",new Se(.56,.38,.74,28,1,!0),l,[0,.38,0]),a("坩埚黑色内腔",new Se(.49,.49,.035,28),I(1118997),[0,.77,0]),a("厚卷边",new Xe(.55,.065,10,30),l,[0,.78,0],[Math.PI/2,0,0]);for(const u of[-1,1])a("锡制环形提手",new Xe(.22,.04,8,20,Math.PI*1.55),l,[u*.58,.5,0],[0,Math.PI/2,u*Math.PI/2]);for(const u of[0,Math.PI*2/3,Math.PI*4/3])a("三脚支架",new Se(.065,.09,.34,9),I(3487544,{metalness:.6}),[Math.cos(u)*.31,-.12,Math.sin(u)*.31],[0,0,Math.cos(u)*.18]);a("II 号压印",new mt(.18,.16,.035),I(12699077,{metalness:.8}),[0,.48,.52])}else if(i==="owl"){const l=I(15920868,{roughness:1});a("雪鸮圆润身体",new ge(.38,18,16),l,[0,.28,0]).scale.set(1,1.35,.88),a("雪鸮面盘",new ge(.32,18,16),l,[0,.84,.03]).scale.set(1.08,.95,.72);for(const u of[-1,1])a("收拢的雪白羽翼",new ge(.24,14,12),l,[u*.28,.04,-.03],[0,0,u*.2]).scale.set(.45,1.25,.65);for(const u of[-1,1])a("琥珀色眼睛",new ge(.065,12,10),new Fn({color:14792258}),[u*.12,.88,.25]),a("黑色瞳孔",new ge(.03,10,8),new Fn({color:592137}),[u*.12,.88,.305]);a("弯曲短喙",new ut(.075,.2,5),I(2894116),[0,.75,.31],[Math.PI/2,0,0]),a("猫头鹰木栖架",new Se(.055,.055,1.15,10),I(6833188),[0,-.52,0],[0,0,Math.PI/2]);for(const u of[-1,1])a("抓住栖架的脚爪",new Xe(.08,.018,6,12,Math.PI),I(13672777),[u*.12,-.46,.04],[Math.PI/2,0,0])}else if(i==="wand-box"){const l=I(5650207,{roughness:.72}),u=I(3416125,{roughness:1});a("胡桃木长盒底",new mt(1.8,.22,.52),l),a("紫绒内衬凹槽",new mt(1.58,.07,.32),u,[0,.15,0]),a("打开的铰链盒盖",new mt(1.8,.12,.52),l,[0,.47,-.35],[-.7,0,0]),a("盒盖紫绒衬里",new mt(1.58,.04,.34),u,[0,.43,-.31],[-.7,0,0]),a("绒槽中的冬青木魔杖",new Se(.025,.052,1.46,10),I(14272932),[0,.25,0],[0,0,Math.PI/2])}else if(i==="broomstick"){a("长锥形白蜡木柄",new Se(.045,.075,2.5,12),I(8015141),[.35,.35,0],[0,0,Math.PI/2]),a("密集桦木枝束",new ut(.42,1.12,18),I(10121280,{roughness:1}),[-1.25,.35,0],[0,0,-Math.PI/2]);for(const l of[-.74,-.62])a("黄铜捆扎环",new Xe(.18,.035,8,20),I(12094013,{metalness:.7}),[l,.35,0],[0,Math.PI/2,0]);for(const l of[-1,1])a("扫帚脚踏",new mt(.46,.045,.08),I(12094013,{metalness:.7}),[.25,.13,l*.18],[0,l*.28,0])}else if(i==="crystal-ball"){a("透明水晶球",new ge(.52,28,22),I(12048361,{transparent:!0,opacity:.42,roughness:.05,metalness:.08}),[0,.65,0]),a("球内紫色星雾",new ge(.35,16,12),I(8415402,{transparent:!0,opacity:.55,emissive:5059192,emissiveIntensity:1.5}),[0,.65,0]);const l=I(11041845,{metalness:.78,roughness:.35});a("三爪托环",new Xe(.42,.055,10,28),l,[0,.28,0],[Math.PI/2,0,0]);for(const u of[0,Math.PI*2/3,Math.PI*4/3])a("三脚底座",new Se(.045,.07,.65,8),l,[Math.cos(u)*.26,-.02,Math.sin(u)*.26],[Math.sin(u)*.3,0,Math.cos(u)*.3])}else if(i==="gold-scales"){const l=I(12159541,{metalness:.82,roughness:.28});a("红木秤座",new Se(.46,.58,.18,16),I(4859928),[0,.08,0]),a("黄铜中央立柱",new Se(.055,.075,1.45,12),l,[0,.86,0]),a("水平平衡梁",new mt(1.75,.08,.08),l,[0,1.5,0]),a("梁顶指针",new ut(.08,.38,8),l,[0,1.76,0]);for(const u of[-1,1]){for(const d of[-.16,.16])a("垂挂细链",new Se(.012,.012,.62,6),l,[u*.72,1.13,d]);a("黄铜秤盘",new ge(.34,18,8,0,Math.PI*2,0,Math.PI/2),l,[u*.72,.82,0],[Math.PI,0,0])}}return o.userData={type:"shopping-item",itemId:i,label:e,price:n,selected:!1,modelKind:r?.model.kind},je.push(o),De(`${e} · ${n} G`,[t[0],t[1]+(r?.labelHeight??1.12),t[2]],{width:2.2,size:25}),o}function D_(){de.color.setHex(7305376),de.groundColor.setHex(1775393),Kt({wall:3156026,floor:3617336,ceiling:1512477,fog:1051927}),Yt({index:1,name:"对角巷清单",objectiveText:"目标：按霍格沃茨清单采购四件合规格物品，预算 12 加隆",hint:"课本 → 二号锡制坩埚 → 猫头鹰 → 魔杖盒。核对规格与价签，买错会清空采购篮。",progress:"□  □  □  □"}),zt.textContent=Ce("counter.shopping",{count:0,remaining:12}),P={progress:[],unlocked:!1,spent:0},Rt.fog.density=.022;for(let e=-7;e<=7;e+=1.1)for(let t=-2.8;t<=2.8;t+=1.1){const n=k("鹅卵石",[.95,.08,.95],[t+e*10%2*.22,.02,e],I(4801613,{roughness:1}),!1);n.rotation.y=(t+e)*.08}xs(-6.9,-5.8,"丽痕书店",5058601),xs(6.9,-5.8,"坩埚店",2440250),xs(-6.9,.3,"咿啦猫头鹰商店",4799784),xs(6.9,.3,"奥利凡德魔杖店",3353414),xs(-6.9,6.2,"药剂材料铺",4075071),xs(6.9,6.2,"魁地奇精品店",4073769);for(const e of[[-3.2,4.5,-4.2],[3.2,4.2,-1.8],[-2.1,4.8,3.8],[2.8,4.4,6.5]])wt(e,2.6,7);for(const[e,t]of[[-5,-5],[5,-5],[-5,.6],[5,.7],[-5,5.7],[5,5.8]]){const n=new ei(16766618,1.45,4.2,2);n.position.set(e,2.4,t+.35),_e.add(n)}const i={...sd,broomstick:7,"crystal-ball":5,"gold-scales":4,"advanced-potions":6};for(const e of nd)P_(e.id,e.label,e.position,i[e.id],e.color);De(il.wallClue,[0,6.2,8.45],{width:6.4,size:38}),De(il.listTitle,[0,5.55,8.43],{width:7.8,size:32,color:"#f0d99c"}),Rl("进入奥利凡德魔杖店",2)}function rn(i,e,t,n,s=[0,0,0],r=[1,1,1]){const o=new X(e,t);return o.position.set(...n),o.rotation.set(...s),o.scale.set(...r),o.castShadow=!0,i.add(o),o}function ll(i,e,t){const n=new ht;n.position.set(...i);const s=I(t,{roughness:.68,emissive:t,emissiveIntensity:0});return rn(n,new Se(.026,.072,e,10),s,[0,0,0],[0,0,Math.PI/2]),rn(n,new Xe(.09,.018,6,14),I(11897666,{metalness:.55}),[-e*.37,0,0],[0,Math.PI/2,0]),_e.add(n),n.userData.glowMaterials=[s],n}function U_(i){const e=ll([i.x,1.2,1.25],1.45,i.color),t=I(i.id==="holly"?3235637:i.id==="oak"?4859924:2363662,{roughness:.92});if(i.id==="oak"){for(const n of[-.45,-.12,.28])rn(e,new Xe(.085,.018,6,12),t,[n,0,0],[0,Math.PI/2,0]);rn(e,new ge(.11,10,7),t,[-.68,0,0],[0,0,0],[1.15,.72,.72])}else if(i.id==="holly"){for(const[n,s]of[[-.2,.11],[.02,-.1]])rn(e,new ge(.12,10,6),t,[n,s,.02],[0,0,.5],[1.8,.48,.16]);for(const n of[-.16,-.02,.12])rn(e,new ge(.035,8,6),I(11085355,{emissive:4917256,emissiveIntensity:.35}),[n,.15,.05])}else rn(e,new Se(.035,.065,.42,8),t,[-.58,.09,0],[0,0,.85]),rn(e,new Se(.035,.065,.42,8),t,[-.58,-.09,0],[0,0,2.3]),rn(e,new ge(.05,8,6),I(11808052,{emissive:4851723,emissiveIntensity:.4}),[-.34,.15,0]);return e}function N_(i){const e=new ht;e.position.set(i.x,1.28,-1.15);const t=I(i.color,{emissive:i.color,emissiveIntensity:.45,roughness:.42});if(i.id==="phoenix-feather"){rn(e,new Se(.018,.028,1.15,8),t,[0,0,0],[0,0,-.12]);for(const n of[-1,1])for(let s=0;s<5;s+=1)rn(e,new ut(.11,.34,6),t,[n*(.09+s*.018),-.31+s*.15,0],[0,0,n*-.78])}else if(i.id==="dragon-heartstring")rn(e,new vo(.25,.045,48,7,2,3),t,[0,0,0],[Math.PI/2,0,0],[.9,1.35,.9]),rn(e,new ut(.18,.28,5),I(2168601,{roughness:.9}),[0,-.52,0],[0,0,Math.PI]);else{for(const n of[-.07,0,.07])rn(e,new Xe(.35+Math.abs(n),.012,5,28,Math.PI*1.5),t,[n,0,0],[0,0,n*4]);rn(e,new ge(.1,12,8),I(16314584,{emissive:12569053,emissiveIntensity:.7}),[0,-.42,0])}return _e.add(e),e.userData.glowMaterials=[t],e}function O_(){de.color.setHex(12032624),de.groundColor.setHex(2365198),Kt({wall:4206623,floor:2365199,ceiling:1511435,fog:1051400}),Rt.fog.density=.034,Yt({index:2,name:Hi.name,objectiveText:Hi.objective,hint:Hi.hint,progress:Xt(N,"checklist",{wood:"○",core:"○",length:"○"})}),zt.textContent=Ce("counter.wand",{count:0,mistakes:0}),P={progress:[],unlocked:!1,mistakes:0};const i=I(2824461,{roughness:.88}),e=I(5715741,{roughness:.8}),t=[7230258,5257507,8086080,4008732];for(const a of[-1,1]){k("高魔杖柜",[.72,6.35,16.4],[a*8.35,3.18,0],i);for(let c=0;c<8;c+=1){k("柜架横梁",[.86,.1,16.1],[a*7.92,.55+c*.73,0],e);for(let l=0;l<10;l+=1){const u=t[(c+l+(a>0?1:0))%t.length],d=k("积尘的魔杖盒",[.24,.48,1.25],[a*7.77,.82+c*.73,-7.1+l*1.55],I(u,{roughness:.95}));d.rotation.x=((c+l)%3-1)*.025}}}k("奥利凡德柜台",[8.2,1.15,1.3],[0,.58,-4.5],e),k("柜台台面",[8.65,.18,1.55],[0,1.2,-4.5],I(7753770,{roughness:.55}));for(const[a,c,l]of[[-2.5,6238744,1.1],[0,2692620,1.28],[2.5,10120255,1.42]])k("打开的魔杖盒",[1.8,.16,.48],[a,1.38,-4.42],I(1511435)),ll([a,1.55,-4.42],l,c);De(Hi.wallClue,[0,2.35,-4.95],{width:5.4,size:43});for(const a of p_){k(`${a.label}样本台`,[1.8,.85,1.2],[a.x,.42,1.25],i);const c=U_(a);c.name=`${a.label}木材样本`,c.userData={...c.userData,type:"wand-wood",woodId:a.id,label:a.label,selected:!1},je.push(c),De(a.label,[a.x,a.labelHeight,1.25],{width:1.65,size:40})}for(const a of m_){const c=k(`${a.label}杖芯台`,[1.8,.85,1.2],[a.x,.42,-1.15],i);c.visible=!1;const l=N_(a);l.name=`${a.label}杖芯样本`,l.userData={...l.userData,type:"wand-core",coreId:a.id,label:a.label,selected:!1,pedestal:c},l.visible=!1,je.push(l);const u=De(a.label,[a.x,a.labelHeight,-1.15],{width:1.8,size:37});u.visible=!1,l.userData.coreLabel=u}for(const a of g_){const c=k(`${a.label}校准台`,[1.8,.85,1.2],[a.x,.42,3.85],i);c.visible=!1;const l=ll([a.x,1.2,3.85],a.length,15656132);l.name=`${a.label}冬青木魔杖`,l.userData={...l.userData,type:"wand-length",inches:a.inches,label:a.label,selected:!1,pedestal:c},l.visible=!1,je.push(l);for(let d=1;d<=a.inches;d+=1)rn(l,new Xe(.072,.009,5,10),I(12161607,{metalness:.5}),[-a.length/2+d*(a.length/(a.inches+1)),0,0],[0,Math.PI/2,0]);const u=De(a.label,[a.x,a.labelHeight,3.85],{width:1.7,size:38});u.visible=!1,l.userData.lengthLabel=u}const n=new ht;n.position.set(4.8,0,-6.15);const s=new X(new Se(.38,.58,1.7,12),I(2696235));s.position.y=.9,n.add(s);const r=new X(new ge(.3,16,12),I(13083772));r.position.y=1.95,n.add(r);const o=new X(new ge(.32,14,10,0,Math.PI*2,0,Math.PI*.58),I(14209213));o.position.y=2.06,n.add(o),_e.add(n),k("后墙梯子左",[.14,5.7,.14],[-4.7,2.85,-8.35],e),k("后墙梯子右",[.14,5.7,.14],[-3.65,2.85,-8.35],e);for(let a=.45;a<5.5;a+=.48)k("梯子横档",[1.2,.1,.12],[-4.18,a,-8.28],e);De(Hi.shopSign,[0,6.18,-8.45],{width:7.4,size:38}),wt([-5.2,4.7,-2.3],3.1,9),wt([5.2,4.7,-2.3],3.1,9),wt([0,4.5,-6.4],2.7,7);for(let a=0;a<12;a+=1){const c=new X(new ge(.025,6,6),new Fn({color:15387514})),l=[-5.5+a%6*2.2,1.3+a%4*1.15,-5.7+Math.floor(a/6)*5.8];c.position.set(...l),_e.add(c),Tt.push({object:c,baseY:l[1],phase:a*.8,spin:0,bob:.22})}Rl("登上霍格沃茨特快",3)}function k_(i){const e=new ht;e.position.set(i.x,1.25,1.4),e.scale.setScalar(.78),e.name=`${i.label}立体动物徽章`;const t=I(i.colors[0],{emissive:i.colors[0],emissiveIntensity:.16,roughness:.58}),n=I(i.colors[1],{emissive:i.colors[1],emissiveIntensity:.08,metalness:.38,roughness:.42}),s=I(1512207,{roughness:.82}),r=(o,a,c,l=[0,0,0],u=[1,1,1])=>{const d=new X(o,a);return d.position.set(...c),d.rotation.set(...l),d.scale.set(...u),d.castShadow=!0,e.add(d),d};if(r(new Se(1.08,1.08,.18,24),t,[0,0,0],[Math.PI/2,0,0]),r(new Xe(1.08,.09,8,32),n,[0,0,.12]),i.id==="lion"){r(new ge(.48,16,12),n,[0,.28,.25],[0,0,0],[1,1,.34]),r(new ge(.31,14,10),t,[0,.31,.38],[0,0,0],[1,.9,.36]),r(new ge(.15,12,8),n,[0,.15,.46],[0,0,0],[1.25,.7,.4]);for(const a of[-1,1])r(new ut(.12,.24,8),n,[a*.22,.68,.34],[0,0,a*-.18]),r(new Cn(.11,.44,5,8),n,[a*.38,-.24,.35],[0,0,a*-.55]),r(new ge(.07,8,6),s,[a*.11,.36,.51]);const o=new lo([new L(.32,-.35,.28),new L(.72,-.2,.3),new L(.72,.34,.3),new L(.52,.62,.3)]);r(new or(o,20,.075,8,!1),n,[0,0,0])}else if(i.id==="badger"){r(new ge(.58,16,12),s,[-.08,-.05,.3],[0,0,0],[1.05,.62,.34]),r(new ge(.35,14,10),s,[.28,.18,.39],[0,0,-.12],[1.05,.8,.34]),r(new Cn(.09,.5,5,8),n,[.25,.24,.51],[0,0,.16],[1,1,.5]);for(const o of[-1,1])r(new ge(.11,10,8),s,[.2+o*.22,.43,.4],[0,0,0],[1,1,.4]),r(new Cn(.1,.3,5,8),n,[o*.35,-.48,.4],[0,0,Math.PI/2]);r(new ge(.07,8,6),n,[.59,.14,.48])}else if(i.id==="eagle"){r(new ge(.28,14,10),n,[0,.32,.36],[0,0,0],[.9,1.15,.35]),r(new ut(.12,.34,8),t,[.26,.31,.43],[0,0,-Math.PI/2]);for(const o of[-1,1]){for(let a=0;a<4;a+=1){const c=o*(.45+a*.13);r(new Cn(.095,.58-a*.045,5,8),n,[o*(.34+a*.16),.05-a*.11,.33],[0,0,c])}r(new Cn(.07,.28,4,7),t,[o*.18,-.38,.4],[0,0,o*.25])}r(new ge(.045,8,6),s,[.12,.4,.5])}else{const o=new lo([new L(-.55,-.35,.34),new L(.45,-.5,.34),new L(.55,-.05,.36),new L(-.2,.02,.38),new L(-.05,.62,.4),new L(.28,.72,.42)]);r(new or(o,36,.13,10,!1),n,[0,0,0]),r(new ge(.2,12,8),n,[.34,.72,.43],[0,0,0],[1.3,.72,.42]),r(new ut(.035,.28,5),t,[.61,.69,.46],[0,0,-Math.PI/2]);for(const a of[.76,.68])r(new ge(.035,8,6),s,[.39,a,.53])}return e.userData={type:"sorting-clue",symbolId:i.id,label:i.label,selected:!1,glowMaterials:[t,n]},_e.add(e),e}function F_(){de.color.setHex(9281736),de.groundColor.setHex(1512738),Kt({wall:4208431,floor:2169624,ceiling:1119270,fog:921632}),Rt.fog.density=.022,Yt({index:3,name:Qs.name,objectiveText:Qs.objective,hint:Qs.hint,progress:"狮 ○  獾 ○  鹰 ○  蛇 ○"}),P={progress:[],unlocked:!1,mistakes:0},ad();const i=I(4992538,{roughness:.84});for(const s of[-5.6,-1.9,1.9,5.6]){k("学院长桌",[1.45,.65,11.5],[s,.72,.8],i);for(let r=-4;r<=5;r+=1.8){const o=k("悬浮蜡烛",[.08,.5,.08],[s,3.2+(r+4)%3*.3,r],I(16115128));Tt.push({object:o,baseY:o.position.y,phase:s+r,spin:0,bob:.08})}}for(const s of id){k(`${s.label}学院旗`,[2.25,3.3,.16],[s.x,4.55,-8.55],I(s.colors[0],{roughness:.9})),k(`${s.label}旗帜纵纹`,[.26,3.05,.04],[s.x,4.55,-8.43],I(s.colors[1],{metalness:.2,roughness:.55})),De(s.label,[s.x,6.25,-8.36],{width:2.35,size:36});const r=k_(s);je.push(r),De(s.clue,[s.x,5.15,-8.36],{width:2.05,size:29})}k("分院凳",[1.7,.22,1.45],[0,.72,-5.7],i);const e=new ht;e.position.set(0,.84,-5.7);const t=new X(new Se(.82,.92,.12,18),I(4863268,{roughness:.98}));t.scale.z=.72,e.add(t);const n=new X(new ut(.62,1.25,10),I(4863268,{roughness:.98}));n.position.y=.68,n.rotation.z=-.12,e.add(n),k("分院帽眉褶左",[.42,.08,.08],[-.25,.75,.48],I(2365198),!1,e).rotation.z=-.22,k("分院帽眉褶右",[.42,.08,.08],[.2,.72,.48],I(2365198),!1,e).rotation.z=.18,k("分院帽嘴褶",[.5,.08,.09],[0,.45,.5],I(2167821),!1,e).rotation.z=-.08,_e.add(e),De("分院帽",[0,2.55,-5.8],{width:2.2,size:46}),wt([-4.8,4.8,-3],3.2,11),wt([4.8,4.8,-3],3.2,11)}function z_(){de.color.setHex(8885949),de.groundColor.setHex(1382433),Kt({wall:3883336,floor:2435378,ceiling:1119520,fog:1053725}),Rt.fog.density=.019,Yt({index:0,name:"移动楼梯",objectiveText:"目标：依据钟摆与月相路线，依次稳定三座移动楼梯",hint:"路线铭文：从最低的平台起步；月光桥只在钟摆居中时停驻；最后登上最高塔。选错会让路线复位并增加 5 秒惩罚。",progress:"◇  ◇  ◇"}),P={progress:[],mistakes:0,timePenalty:0,unlocked:!1},ld(),Be&&Nt.position.set(0,1.7,Ws.mobileCameraZ);const i=I(5068386,{roughness:.97}),e=I(6716057,{roughness:.78,emissive:1517643,emissiveIntensity:.55}),t=I(7830402,{roughness:.9}),n=I(11769685,{metalness:.55,roughness:.38,emissive:3221009,emissiveIntensity:.4}),s=I(11454170,{metalness:.65,roughness:.28,emissive:2704227,emissiveIntensity:.7}),r=Be?Ws.mobileRouteX:iu.map(({position:c})=>c[0]);for(const[c,l]of iu.entries()){const u=new ht;u.position.set(r[c],0,l.position[2]),u.rotation.y=c===0?-.2:c===2?.2:0,Be&&u.scale.setScalar(Ws.mobileRouteScale),_e.add(u);const d=l.id==="moon"?e:l.id==="upper"?t:i;for(let p=0;p<7;p+=1){const h=l.id==="upper"?2.35-p*.05:2.6;k("会移动的石阶",[h,.28,.78],[0,.14+p*(l.id==="upper"?.34:.27),p*-.7],d,!0,u),k("磨损金属阶缘",[h+.04,.06,.08],[0,.29+p*(l.id==="upper"?.34:.27),p*-.7+.38],l.id==="moon"?s:n,!1,u)}const f=l.id==="lower"?2:l.id==="moon"?2.7:3.35;if(k("楼梯平台",[3.2,.34,2.2],[0,f,-4.6],d,!0,u),l.id==="lower"){for(const p of[-1.15,1.15])k("低台方柱",[.42,1.55,.42],[p,1.08,.2],i,!0,u);k("罗马数字一石刻",[.18,1.1,.16],[0,1,.36],n,!1,u)}else if(l.id==="moon"){const p=new X(new Xe(.92,.12,10,40,Math.PI*1.55),s);p.rotation.z=-Math.PI*.27,p.position.set(0,2.45,.25),u.add(p),k("钟摆中央银线",[.07,2.2,.08],[0,1.15,.34],s,!1,u)}else for(const p of[-.82,0,.82]){k("高塔尖柱",[.34,1.25,.34],[p,1.05,.25],t,!0,u);const h=new X(new ut(.36,.85,4),n);h.rotation.y=Math.PI/4,h.position.set(p,2.05,.25),u.add(h)}const m=r[c],g=l.id==="moon"?I(11454170,{metalness:.65,roughness:.28,emissive:2704227,emissiveIntensity:.4}):I(11769685,{metalness:.55,roughness:.38,emissive:3221009,emissiveIntensity:.4}),v=k(l.label,[1.7,.62,.18],[m,.82,l.position[2]+1],g);v.userData={type:"stair-route",stairId:l.id,label:l.label,selected:!1},je.push(v),De(l.clue,[m,2.25,l.position[2]+.82],{width:Be?Ws.mobileLabelWidth:2.8,size:Be?Ws.mobileLabelFontSize:30,color:l.id==="moon"?"#cce4ff":"#ead38e"}),Tt.push({object:u,baseY:0,phase:c*2.1,spin:0,bob:.16})}for(const c of[-7.1,-3.55,0,3.55,7.1])k("楼梯塔石柱",[.7,6.7,.7],[c,3.35,-7.7],i);for(const[c,l]of[[-6.5,4.8],[-3.2,3.9],[3.1,4.7],[6.4,3.7]])k("会说话的画像",[1.5,2,.18],[c,l,-8.25],I(6965285)),k("画像画布",[1.15,1.62,.1],[c,l,-8.12],I(3752027,{emissive:1515837,emissiveIntensity:.5}));const o=new ht;o.position.set(0,6.1,-6.8),_e.add(o),k("钟摆杆",[.12,3.4,.12],[0,-1.7,0],n,!0,o),k("钟摆中央对准针",[.07,.9,.08],[0,-3.9,.08],s,!1,o);const a=new X(new ge(.42,16,12),n);a.position.y=-3.4,o.add(a),Tt.push({object:o,baseY:6.1,phase:1.2,spin:.12,bob:0}),De(tl.wallClue,[0,6.45,-8.35],{width:6.3,size:36}),De(tl.routeInscription,[0,5.7,-8.34],{width:6.7,size:30,color:"#c7dafa"}),wt([-5.8,4.8,-2.5],2.5,10),wt([5.8,4.8,-2.5],2.5,10),wt([0,5.5,3.8],2.2,9)}function B_(){de.color.setHex(10192813),de.groundColor.setHex(1774880),Kt({wall:4207940,floor:2366760,ceiling:1314840,fog:1183254}),Rt.fog.density=.018,Yt({index:1,name:"会说话的画像",objectiveText:"目标：比较三幅画像的证词，按可信的发言顺序询问口令",hint:"学者说骑士不是第一位；骑士承认学者必须先发言；女士说自己在骑士之后。错误询问会惊动走廊并清空推理。",progress:"▢  ▢  ▢"}),P={progress:[],mistakes:0,suspicion:0,unlocked:!1},cd();const i=I(5326680,{roughness:.98}),e=I(10978111,{metalness:.48,roughness:.48}),t=I(11450822,{metalness:.76,roughness:.28}),n=I(13013877,{roughness:.82}),s=innerWidth<=720;s&&(Nt.position.z=Xs.mobileCameraZ);for(const l of[-6,-3,0,3,6])k("画像走廊立柱",[.65,6.5,.65],[l,3.25,-8.45],i);const r=(l,u,d,f,m,g=[1,1,1])=>{const v=new X(new ge(u,18,14),f);return v.name=l,v.position.set(...d),v.scale.set(...g),v.castShadow=!0,m.add(v),v},o=(l,u,d,f,m,g,v=[0,0,0])=>{const p=new X(new Se(u[0],u[1],d,16),m);return p.name=l,p.position.set(...f),p.rotation.set(...v),p.castShadow=!0,g.add(p),p},a=(l,u,d=6849352)=>{const f=I(d,{roughness:.78});for(const m of[-1,1])for(let g=0;g<4;g+=1){const v=-.7+g*.44,p=r("月桂叶",.18,[m*(.38+g*.08),u+g*.2,.2],f,l,[1.5,.48,.28]);p.rotation.z=m*v}};for(const[l,u]of h_.entries()){const d=new ht,f=u.position[0],m=s?[-3.65,0,3.65][l]:f;d.position.set(m,u.position[1],u.position[2]),d.scale.setScalar(s?Xs.mobilePortraitScale:1),_e.add(d),k(`${u.label}雕花画框`,[3.2,4.35,.28],[0,0,-.34],e,!0,d);const g=[2506081,4014667,6170949][l],v=k(u.label,[2.72,Xs.interactionCanvasHeight,.22],[0,Xs.interactionCanvasCenterY,-.14],I(g,{emissive:g,emissiveIntensity:.28,roughness:.9}),!0,d);if(v.userData={type:"portrait-testimony",portraitId:u.id,label:u.label,quote:u.quote,selected:!1},je.push(v),u.id==="scholar"){const p=I(1522544,{roughness:.78});o("蓝色学者长袍",[.72,1.05],1.7,[0,-.48,.06],p,d),r("学者头部",.48,[0,.78,.08],n,d,[.82,1,.58]),o("蓝色尖帽",[.04,.55],1.15,[0,1.45,.08],p,d);for(const M of[-1,1]){const b=new X(new Xe(.19,.035,8,18),e);b.position.set(M*.2,.85,.43),d.add(b)}const h=I(13876098,{roughness:.96});k("展开的羊皮卷左页",[.78,.62,.05],[-.4,-.28,.72],h,!0,d).rotation.z=.12,k("展开的羊皮卷右页",[.78,.62,.05],[.4,-.28,.72],h,!0,d).rotation.z=-.12,a(d,1.45)}else if(u.id==="knight"){o("分层银甲胸甲",[.76,.95],1.65,[0,-.34,.08],t,d),r("封闭式银盔",.57,[0,.84,.08],t,d,[.9,1,.72]);for(const h of[.72,.84,.96])k("头盔观察缝",[.68,.045,.04],[0,h,.56],I(1515565),!0,d);k("蓝釉盾牌",[.85,1.18,.12],[-.75,-.35,.48],I(2379658,{metalness:.28}),!0,d).rotation.z=-.16;const p=k("垂地银色长剑",[.14,2.35,.1],[.73,-.82,.66],t,!0,d);p.rotation.z=-.16,k("长剑十字护手",[.75,.12,.12],[.58,.22,.66],e,!0,d).rotation.z=-.16,o("头盔冠饰",[.04,.22],.8,[0,1.54,.08],I(3235225),d)}else{const p=I(8071496,{roughness:.72});o("酒红锦缎长裙",[.68,1.12],1.85,[0,-.48,.04],p,d),r("女士头部",.47,[0,.8,.06],n,d,[.82,1,.58]);for(const M of[-1,1])o("编织发辫",[.12,.15],1.1,[M*.39,.45,.18],I(4859676),d,[0,0,M*.12]);a(d,1.3,7443015);const h=new X(new Xe(.32,.075,10,22),t);h.position.set(.66,.46,.63),d.add(h),k("银钥匙长柄",[.13,1.25,.1],[.66,-.28,.63],t,!0,d),k("银钥匙双齿",[.55,.13,.1],[.86,-.84,.63],t,!0,d),k("银钥匙短齿",[.13,.35,.1],[1.08,-.7,.63],t,!0,d)}De(ye(N,u.clue),[m,1.28,-7.72],{width:s?Xs.mobileLabelWidth:2.9,size:s?21:27,color:"#d8c88b"})}De(ye(N,nl.wallClue),[0,6.72,-8.12],{width:7.3,size:s?25:32,color:"#d8c88b"}),k("走廊尽头银钥门",[3.1,5.5,.3],[0,2.75,8.55],I(1513763,{metalness:.35,roughness:.62}));const c=new X(new Xe(.48,.1,10,24),t);c.position.set(0,3.15,8.34),c.rotation.y=Math.PI,_e.add(c),k("银钥匙孔柄",[.22,.95,.12],[0,2.55,8.33],t),De(ye(N,nl.doorLabel),[0,5.9,8.3],{width:5.4,size:38});for(const[l,u]of[-3.2,0,3.2].entries()){const d=new X(new Xe(.42,.07,8,24),l===0?e:t);d.position.set(u,.04,-2.5),d.rotation.x=-Math.PI/2,_e.add(d),l<2&&k("证词链银线",[2.3,.04,.08],[u+1.6,.04,-2.5],t,!1)}for(const l of[-6.5,-2.2,2.2,6.5])wt([l,4.6,-2.2],2.2,9)}function H_(){de.color.setHex(7505569),de.groundColor.setHex(1119514),Kt({wall:3423299,floor:2106923,ceiling:1053978,fog:725013}),Rt.fog.density=.024,Yt({index:2,name:"管理员的巡夜",objectiveText:"目标：利用盔甲遮挡、猫铃声与暗门，避开管理员的灯光巡查",hint:"巡夜图记：灯光先扫过空盔甲；猫铃能把脚步引向反方向；最后掀开独角兽挂毯。走错会清空路线并提高警戒。",progress:"◇  ◇  ◇"}),ti.textContent="第一部 · 第二章 · 第 3 关",P={progress:[],mistakes:0,alert:0,unlocked:!1},ud();const i=I(4739674,{roughness:.98}),e=I(9139269,{metalness:.48,roughness:.54});for(const u of[-6.8,-3.4,0,3.4,6.8])k("巡夜拱廊立柱",[.64,6.6,.64],[u,3.3,-8.4],i);for(const u of[-5.8,-2.1,1.6,5.3])k("月光地砖",[14.8,.03,1],[0,.03,u],I(6321546,{emissive:2505037,emissiveIntensity:.32}),!1);const t=new ht;t.position.set(-5,0,.7),_e.add(t),k("空盔甲底座",[1.55,.3,1.25],[0,.15,0],i,!0,t),k("空盔甲胸甲",[1.05,1.55,.55],[0,1.35,0],e,!0,t);const n=new X(new ge(.48,12,10),e);n.position.y=2.45,t.add(n);const s=k("空盔甲阴影",[1.8,3.2,.24],[-5,1.6,1.15],I(2436405,{emissive:1515821,emissiveIntensity:.25}));s.userData={type:"patrol-cover",hidingPlaceId:"armor",label:"空盔甲阴影",selected:!1},je.push(s),De("I · 盔甲遮挡",[-5,3.55,1.05],{width:2.4,size:38}),k("猫铃机关台",[1.5,.8,1.5],[0,.4,-1.4],i);const r=new X(new ge(.48,14,10),I(10122304,{emissive:4796690,emissiveIntensity:.45}));r.position.set(0,1.05,-1.4),r.name="猫铃机关",r.userData={type:"patrol-cover",hidingPlaceId:"cat",label:"猫铃机关",selected:!1},_e.add(r),je.push(r),De("II · 猫铃诱饵",[0,2.2,-1.4],{width:2.5,size:38});const o=k("独角兽暗门挂毯",[3.5,4.7,.22],[5,2.8,-8.15],I(3231074,{emissive:1518908,emissiveIntensity:.35}));o.userData={type:"patrol-cover",hidingPlaceId:"tapestry",label:"独角兽暗门挂毯",selected:!1},je.push(o),De("III · 独角兽挂毯",[5,5.75,-8],{width:3.2,size:38});const a=new ht;a.position.set(-6.5,2.2,-5.7),_e.add(a);const c=new ei(16766602,3.2,7,2);a.add(c);const l=new X(new ge(.16,10,8),new Fn({color:16763243}));a.add(l),Tt.push({object:a,baseY:2.2,phase:.5,spin:.22,bob:.08}),De("NIGHT PATROL · 保持安静",[0,6.25,-8.35],{width:6,size:39}),wt([-6.8,4.5,5.4],1.5,7),wt([6.8,4.5,5.4],1.5,7)}function G_(){de.color.setHex(6649183),de.groundColor.setHex(1183501),Kt({wall:3487791,floor:2170136,ceiling:1184014,fog:921612}),Rt.fog.density=.022,Be&&(Nt.position.z=_s.mobileCameraZ),Yt({index:3,name:"三头犬活板门",objectiveText:"目标：按守门生物能接受的层次，奏出完整安眠旋律",hint:"褪色乐谱写着：先让气息像夜风进入梦乡，再让琴弦托住梦境，最后以发条的轻响封住鼾声。错奏会重置旋律并惊醒守卫。",progress:"·  ·  ·"}),P={progress:[],mistakes:0,wakefulness:0,unlocked:!1},dd();const i=I(4934206,{roughness:.98}),e=I(3877408,{roughness:1}),t=I(1511437,{roughness:1}),n=I(2368290,{metalness:.72,roughness:.48}),s=I(14141603,{roughness:.62});for(const d of[-6.4,-3.2,0,3.2,6.4])k("禁区石柱",[.68,6.6,.68],[d,3.3,-8.35],i);const r=new ht;r.position.set(0,.08,-5.05),_e.add(r),k("下沉式橡木活板门",[4.5,.18,4.15],[0,.08,0],I(3416342,{roughness:.9}),!1,r),k("活板门铁横箍",[4.58,.12,.22],[0,.2,0],n,!1,r),k("活板门铁纵箍",[.22,.12,4.2],[0,.2,0],n,!1,r);const o=new X(new Xe(.32,.07,10,28),n);o.rotation.x=Math.PI/2,o.position.set(0,.3,1.15),r.add(o);for(const d of[-1.45,-1.15,1.15,1.45]){const f=k("守卫爪痕",[.055,.035,.7],[d,.25,.62],I(1445386),!1,r);f.rotation.y=d<0?-.18:.18}const a=new ht;a.position.set(0,.28,-5.75),Be&&a.scale.setScalar(_s.mobileGuardianScale),_e.add(a);const c=new X(new ge(1.72,20,14),e);c.scale.set(1.75,.9,1.12),c.position.y=2.05,c.castShadow=!0,a.add(c);for(const[d,f]of[[-1.8,-.45],[1.8,-.45],[-1.75,.62],[1.75,.62]]){const m=new X(new Se(.34,.43,1.55,12),e);m.position.set(d,1.05,f),m.castShadow=!0,a.add(m);const g=new X(new ge(.48,12,9),t);g.scale.set(1.15,.5,1.35),g.position.set(d,.28,f+.12),a.add(g);for(const v of[-.2,0,.2]){const p=new X(new ut(.055,.28,7),s);p.rotation.x=Math.PI/2,p.position.set(d+v,.2,f+.58),a.add(p)}}[-1.35,0,1.35].forEach((d,f)=>{const m=new X(new Se(.52,.7,1.25,12),e);m.rotation.z=f===0?-.28:f===2?.28:0,m.position.set(d*.72,3.05,-.05),a.add(m);const g=new X(new ge(.86,18,14),e);g.scale.set(1,1.03,1.08),g.position.set(d,3.8+(f===1?.22:0),.12),a.add(g);const v=new X(new ge(.43,12,9),t);v.scale.set(1.08,.68,.88),v.position.set(d,g.position.y-.2,.78),a.add(v);for(const p of[-.25,.25]){const h=new X(new ge(.07,8,8),new Fn({color:14066493}));h.position.set(d+p,g.position.y+.14,.72),a.add(h)}for(const p of[-.2,.2]){const h=new X(new ut(.065,.3,7),s);h.position.set(d+p,g.position.y-.42,1.08),a.add(h)}for(const p of[-.48,.48]){const h=new X(new ut(.25,.65,8),e);h.position.set(d+p,g.position.y+.65,.08),a.add(h)}}),Tt.push({object:a,baseY:.28,phase:.8,spin:0,bob:.035});const l=new ei(14269314,3.2,8,2);l.position.set(0,5.5,-2.3),_e.add(l);const u=I(13482892,{emissive:3811858,emissiveIntensity:.32,roughness:.92});k("褪色三行安眠乐谱",[5.6,2.25,.12],[0,5.45,-8.12],u,!1);for(const d of[4.94,5.43,5.92])for(let f=0;f<3;f+=1)k("乐谱谱线",[4.9,.025,.025],[0,d+f*.08,-8.02],t,!1);De(el.scoreClue,[0,6.72,-7.95],{width:5.8,size:34});for(const[d,f]of d_.entries()){const[m,g,v]=f.position,p=Be?_s.mobileInstrumentX[d]:m,h=new ht;h.position.set(p,0,v),Be&&h.scale.setScalar(_s.mobileInstrumentScale),_e.add(h),k(`${f.label}谱架`,[2.35,.75,1.75],[0,.38,0],i,!0,h);let M;if(f.id==="flute"){M=new X(new Se(.12,.12,1.85,16),I(12106154,{emissive:2505799,emissiveIntensity:.55,metalness:.48,roughness:.35})),M.rotation.z=Math.PI/2,M.position.set(0,g,0),h.add(M),k("横笛银吹口",[.24,.3,.22],[-.78,g,0],n,!1,h);for(let _=0;_<7;_+=1){const w=new X(new ge(.045,8,8),t);w.position.set(-.52+_*.18,g+.02,.11),h.add(w)}const b=new X(new Xe(.56,.035,7,32,Math.PI*1.3),I(7780822,{emissive:2653348,emissiveIntensity:1.8}));b.rotation.x=Math.PI/2,b.position.set(-.92,g+.2,.1),h.add(b)}else if(f.id==="harp"){M=k("竖琴共鸣箱",[1.45,.28,.42],[0,g-.48,0],I(7357983,{emissive:4138253,emissiveIntensity:.45}),!0,h);const b=k("新月竖琴立柱",[.18,2,.25],[-.62,g+.42,0],I(9396779),!0,h);b.rotation.z=-.18;const _=k("竖琴弧颈",[1.35,.2,.26],[0,g+1.26,0],I(9396779),!0,h);_.rotation.z=.2;for(let w=0;w<9;w+=1){const T=.58+w*.08;k("月银琴弦",[.018,T,.025],[-.43+w*.11,g+.05+T/2,.05],I(14280683,{emissive:7048096,emissiveIntensity:1.1,metalness:.7}),!1,h)}}else{M=k("星纹音乐盒盒体",[1.65,.75,1.05],[0,g-.15,0],I(2637663,{emissive:1255496,emissiveIntensity:.55,metalness:.18}),!0,h);const b=k("音乐盒开启盒盖",[1.65,.12,1],[0,g+.52,-.42],I(3561340),!0,h);b.rotation.x=-.82;const _=new X(new Se(.18,.18,1.1,14),I(12882744,{metalness:.8,roughness:.28}));_.rotation.z=Math.PI/2,_.position.set(0,g+.15,.08),h.add(_);const w=new X(new Xe(.18,.045,8,20),n);w.rotation.y=Math.PI/2,w.position.set(1,g-.08,0),h.add(w);for(const T of[-.45,0,.45]){const C=new X(new Ls(.1),I(15980408,{emissive:12879908,emissiveIntensity:1.8}));C.position.set(T,g+.72,-.18),h.add(C)}}M.name=f.label,M.userData={type:"lullaby-instrument",instrumentId:f.id,label:f.label,selected:!1},je.push(M),De(f.clue,[p,Be?2.55:3.05,v],{width:Be?_s.mobileLabelWidth:2.65,size:Be?_s.mobileLabelFontSize:31})}De(el.wallClue,[0,.95,-8],{width:5.8,size:34}),wt([-6.2,4.6,1.2],1.8,8),wt([6.2,4.6,1.2],1.8,8)}function V_(){de.color.setHex(10471392),de.groundColor.setHex(2374701),Kt({wall:5401432,floor:2506540,ceiling:7902886,fog:9417669}),Rt.fog.density=.012,Yt({index:0,name:"飞行课遗失物",objectiveText:"目标：借助风向旗判断重量，依次把三件遗失物送入对应的安全轨迹",hint:"风向板写着：最轻的红色织物先借低风归队；有月纹的笔记随后穿过中环；沉重黄铜罗盘最后沿高风落到新生手中。错序会卷起乱流并吹散全部物品。",progress:"○  ○  ○"}),ti.textContent="第一部 · 第三章 · 第 1 关",P={progress:[],mistakes:0,turbulence:0,unlocked:!1},hd();const i=I(3495995,{roughness:1}),e=I(6714219,{roughness:.96}),t=I(10189117,{metalness:.42,roughness:.52});k("飞行训练草坪",[17.6,.18,17.6],[0,.02,0],i,!1);for(const r of[-7.2,-3.6,0,3.6,7.2])k("训练场石柱",[.45,4.8,.45],[r,2.4,-8.35],e);const n=[{id:"scarf-keeper",label:"红色守门员围巾",clue:"I · 低风 · 守门员",x:-4.8,y:1.15,color:10432312},{id:"notebook-scholar",label:"月纹飞行笔记",clue:"II · 中环 · 学者",x:0,y:2.05,color:5072519},{id:"compass-first-year",label:"黄铜航向罗盘",clue:"III · 高风 · 新生",x:4.8,y:2.95,color:10977598}];for(const[r,o]of n.entries()){const a=new X(new Xe(1.15,.11,10,28),t);a.position.set(o.x,o.y+1.15,-4.6),a.name=`${o.label}安全轨迹环`,_e.add(a);const c=k(o.label,[1.65,.48,.82],[o.x,o.y,1.8],I(o.color,{emissive:o.color,emissiveIntensity:.35}));c.userData={type:"flying-delivery",deliveryId:o.id,label:o.label,selected:!1},je.push(c),Tt.push({object:c,baseY:o.y,phase:r*1.7,spin:.18,bob:.14}),De(o.clue,[o.x,5.45,-8.1],{width:3,size:34,color:"#e5d79a"})}const s=new ht;s.position.set(-6.8,0,5.4),_e.add(s),k("风向旗杆",[.12,5.4,.12],[0,2.7,0],t,!0,s),k("红金风向旗",[2.3,.65,.08],[1.1,4.8,0],I(10958141,{emissive:3477524,emissiveIntensity:.3}),!0,s),Tt.push({object:s,baseY:0,phase:.4,spin:.08,bob:0}),De("FLYING LESSON · 顺风投递",[0,6.2,-8.2],{width:6,size:39}),wt([-5.5,4.2,4.6],1.2,8),wt([5.5,4.2,4.6],1.2,8)}function W_(i){const e=I(7304807,{metalness:.72,roughness:.42}),t=I(7262194,{emissive:2326183,emissiveIntensity:1.1,transparent:!0,opacity:.86}),n=I(7695715,{roughness:.98}),s=I(3422267,{metalness:.78,roughness:.52});let r;if(i.model.kind==="burst-pipe-moon-valve"){r=new X(new Xe(.62,.12,10,30),I(5602707,{emissive:1922674,emissiveIntensity:.62,metalness:.68,roughness:.38}));for(let l=0;l<6;l+=1){const u=k("月阀辐条",[1.15,.09,.09],[0,0,0],e,!0,r);u.rotation.z=l*Math.PI/3}const o=new X(new Se(.3,.3,1.55,14),e);o.rotation.z=Math.PI/2,o.position.x=-1.35,r.add(o);const a=o.clone();a.position.x=1.35,r.add(a);const c=new X(new Xe(.25,.07,8,22,Math.PI*1.45),t);c.position.set(0,0,.16),c.rotation.z=.75,r.add(c);for(const l of[-1.95,1.95]){const u=new X(new ut(.13,.85,10),t);u.rotation.z=l<0?-Math.PI/2:Math.PI/2,u.position.set(l,-.35,0),r.add(u)}}else if(i.model.kind==="levitating-rubble-cluster"){r=new X(new rr(.52,0),I(7695715,{emissive:2112067,emissiveIntensity:.48,roughness:.98})),[[-.82,.25,.12,.42],[.76,.42,-.12,.46],[-.46,-.52,.2,.34],[.55,-.45,.18,.3]].forEach(([o,a,c,l])=>{const u=new X(new rr(l,0),n);u.position.set(o,a,c),u.rotation.set(o,a,c),r.add(u)});for(const o of[.7,1.05]){const a=new X(new Xe(o,.035,8,28),t);a.rotation.x=Math.PI/2,a.position.y=o===.7?-.48:.2,r.add(a)}}else{r=new X(new mt(3.45,.46,.72),I(8476207,{emissive:4007189,emissiveIntensity:.42,roughness:.92}));for(const o of[-1.42,1.42]){const a=new X(new mt(.18,.64,.82),s);a.position.x=o,r.add(a);for(let c=0;c<5;c+=1){const l=new X(new Xe(.13,.035,7,14),s);l.position.set(o,.55+c*.27,0),l.rotation.y=c%2?Math.PI/2:0,r.add(l)}}for(const o of[-.55,.55]){const a=k("巨怪木棒凹痕",[.08,.08,.5],[o,.24,.15],s,!1,r);a.rotation.z=o<0?-.35:.35}}return r.name=i.label,r.userData={type:"troll-obstacle",obstacleId:i.id,label:i.label,selected:!1,baseEmissiveIntensity:r.material.emissiveIntensity},r}function X_(){de.color.setHex(9217704),de.groundColor.setHex(1517610),Kt({wall:4350052,floor:2373948,ceiling:2308154,fog:1651254}),Rt.fog.density=.02,Be&&(Nt.position.z=li.mobileCameraZ),Yt({index:1,name:"巨怪洗手间",objectiveText:"目标：依次稳定漏水、悬浮瓦砾，再放下横梁架出逃生路线",hint:"破裂水管正在冲散落脚点。先转动月纹阀止水，再让碎石升起清出通道，最后才能把高处横梁平稳放到沟渠上。错序会让巨怪逼近并震塌路线。",progress:"◇  ◇  ◇"}),ti.textContent="第一部 · 第三章 · 第 2 关",P={progress:[],mistakes:0,danger:0,unlocked:!1},fd();const i=I(6718599,{roughness:.82}),e=I(3361872,{roughness:.95}),t=I(6716011,{metalness:.68,roughness:.44});k("洗手间湿地砖",[17.6,.18,17.6],[0,.02,0],e,!1);for(const u of[-7.2,-4.8,-2.4,0,2.4,4.8,7.2])k("拱形瓷砖墙柱",[.42,6.4,.5],[u,3.2,-8.35],i);k("溢水沟渠",[15,.08,2.15],[0,.16,-2.6],I(1588555,{emissive:730674,emissiveIntensity:.8}),!1);for(const u of[-5.9,5.9]){const d=new X(new Se(.24,.24,4.2,14),t);d.rotation.z=Math.PI/2,d.position.set(u,4.9,-8),_e.add(d)}for(const[u,d]of[[-6.5,1.1],[6.2,1.15],[-2.9,.65]]){const f=new X(new Se(.68,.48,.35,18),i);f.position.set(u,d,-7.7),f.scale.z=.65,_e.add(f)}for(const[u,d]of e_.entries()){const[f,m,g]=d.position;k(`${d.label}基座`,[2.7,.7,1.8],[f,.35,g],i);const v=W_(d);v.position.set(f,m,g),Be&&v.scale.setScalar(li.mobileMechanismScale),_e.add(v),je.push(v),Tt.push({object:v,baseY:m,phase:u*1.4,spin:d.id==="seal-pipe"?.08:.025,bob:.04}),De(d.clue,[f,4.75,-8.05],{width:Be?li.mobileLabelWidth:li.desktopLabelWidth,size:Be?li.mobileLabelFontSize:li.desktopLabelFontSize,color:"#b9d8d7"})}const n=new ht;n.position.set(0,0,-6.2),_e.add(n);const s=I(7174246,{roughness:1}),r=I(5126185,{roughness:1}),o=new X(new ge(1.35,14,11),s);o.scale.set(1.35,1.45,.92),o.position.y=2.15,n.add(o);const a=new X(new ge(.78,12,10),s);a.position.set(0,4.05,.15),n.add(a);for(const u of[-1.35,1.35]){const d=new X(new Se(.32,.48,3,11),s);d.position.set(u,2.05,.1),d.rotation.z=u<0?-.18:.18,n.add(d)}const c=k("破旧棕色兽皮围腰",[2.45,1.05,1.55],[0,1.25,0],r,!0,n);c.rotation.z=.06;const l=k("巨怪木棒",[.62,4.8,.62],[1.85,2.15,0],I(5190689,{roughness:1}),!0,n);l.rotation.z=-.3,Tt.push({object:n,baseY:0,phase:.7,spin:.015,bob:.055}),De(Ku.wallClue,[0,6.2,Be?li.mobileWallLabelZ:-8.15],{width:Be?li.mobileWallWidth:7,size:Be?li.mobileWallFontSize:34,color:"#b9d8d7"}),wt([-6.2,4.8,4.5],1.35,8),wt([6.2,4.8,4.5],1.35,8)}function q_(){de.color.setHex(6714779),de.groundColor.setHex(1381149),Kt({wall:3354427,floor:2104100,ceiling:1315098,fog:855060}),Rt.fog.density=.024,Yt({index:2,name:"图书馆禁书区",objectiveText:"目标：依据馆藏年代，按从古到今的顺序点亮三本安全书脊",hint:"目录铜牌记载：四学院建校录最古老；龙灾账册写于其后数百年；月蚀纪事刚完成修订。避开锁链缠绕、会尖叫的无年卷。",progress:"▱  ▱  ▱"}),ti.textContent="第一部 · 第三章 · 第 3 关",P={progress:[],mistakes:0,noise:0,unlocked:!1},pd();const i=I(3023132,{roughness:.92}),e=I(9401668,{metalness:.48,roughness:.5}),t=I(4538699,{roughness:.98});for(const s of[-7.2,-3.6,0,3.6,7.2])k("禁书区拱柱",[.52,6.6,.65],[s,3.3,-8.38],t);for(const s of[-5.8,0,5.8]){k("高层书架",[4.1,5.7,.75],[s,3,-7.9],i);for(const r of[1.25,2.55,3.85,5.15])k("书架横板",[3.8,.13,1.05],[s,r,-7.55],e)}const n=[{id:"founders-index",label:"四学院建校录",clue:"I · 建校之初",x:-5.1,color:8008760},{id:"dragon-ledger",label:"北境龙灾账册",clue:"II · 第七次龙灾",x:-1.7,color:8610107},{id:"moon-chronicle",label:"银月蚀纪事",clue:"III · 本年修订",x:1.7,color:4217722},{id:"screaming-codex",label:"锁链无年卷",clue:"禁 · 年代被抹除",x:5.1,color:4533331}];for(const[s,r]of n.entries()){k(`${r.label}阅览台`,[2.35,.85,1.7],[r.x,.42,2.3],t);const o=k(r.label,[1.45,1.85,.42],[r.x,1.75,2.3],I(r.color,{emissive:r.color,emissiveIntensity:.32}));o.userData={type:"restricted-book",bookId:r.id,label:r.label,selected:!1},je.push(o),Tt.push({object:o,baseY:1.75,phase:s*1.35,spin:.04,bob:.07}),De(r.clue,[r.x,3.25,2.3],{width:2.45,size:34,color:"#b9c8ef"})}k("禁书区出口封印",[3.2,5.5,.3],[0,2.75,8.55],I(2499125,{emissive:2370133,emissiveIntensity:.55})),De("RESTRICTED SECTION · 历史书脊",[0,6.2,-8.15],{width:6.4,size:38,color:"#b9c8ef"}),wt([-6.4,4.7,4.8],1.35,8),wt([6.4,4.7,4.8],1.35,8)}function j_(){de.color.setHex(8885688),de.groundColor.setHex(1578278),Kt({wall:3880268,floor:2170155,ceiling:1512223,fog:1118234}),Rt.fog.density=.018,Yt({index:3,name:"厄里斯魔镜",objectiveText:"目标：比较镜中欲望与现实处境，依次选择真正需要的三件物品",hint:"镜中人戴着王冠、捧着奖杯，却在现实的寒风中发抖。先御寒，再为黑暗出口照路；最后记住：能共同离开的人，比独占的荣誉更重要。",progress:"◇  ◇  ◇"}),ti.textContent="第一部 · 第三章 · 第 4 关",P={progress:[],mistakes:0,illusion:0,unlocked:!1},md();const i=I(11187398,{metalness:.72,roughness:.24}),e=I(2433335,{roughness:.9});for(const n of[-7.2,-4.8,4.8,7.2])k("镜廊石柱",[.52,6.5,.52],[n,3.25,-8.35],e);k("魔镜银框",[5.7,6.25,.42],[0,3.2,-8.42],i),k("魔镜镜面",[4.75,5.35,.18],[0,3.15,-8.12],I(7373478,{emissive:3754096,emissiveIntensity:.9,metalness:.82,roughness:.16}),!1),De("镜中所见 ≠ 现实所需",[0,6.35,-8.02],{width:5.5,size:38,color:"#d9ddf2"});const t=[{id:"wool-cloak",label:"旧羊毛斗篷",clue:"I · 现实：寒风",x:-6.1,color:7558730},{id:"brass-lantern",label:"黄铜提灯",clue:"II · 现实：暗路",x:-3.05,color:10779189},{id:"shared-token",label:"同伴木牌",clue:"III · 现实：同行",x:0,color:5207647},{id:"jeweled-crown",label:"镜中宝冠",clue:"欲望 · 独占荣耀",x:3.05,color:9254493},{id:"victory-cup",label:"镜中金杯",clue:"欲望 · 空洞胜利",x:6.1,color:9333553}];for(const[n,s]of t.entries()){k(`${s.label}石台`,[2.45,.8,1.7],[s.x,.4,2.5],e);const r=k(s.label,[1.45,1.05,.8],[s.x,1.45,2.5],I(s.color,{emissive:s.color,emissiveIntensity:.34,metalness:s.id.includes("crown")||s.id.includes("cup")?.45:.08}));r.userData={type:"mirror-choice",itemId:s.id,label:s.label,selected:!1},je.push(r),Tt.push({object:r,baseY:1.45,phase:n*1.1,spin:.06,bob:.06}),De(s.clue,[s.x,3,2.5],{width:2.45,size:31,color:"#d9ddf2"})}wt([-6.4,4.8,4.7],1.25,8),wt([6.4,4.8,4.7],1.25,8)}function Y_(i,e){const t=i.points.map(c=>new L(...c)),n=new lo(t),s=I(i.layer==="exit"?3234356:2573613,{emissive:1390879,emissiveIntensity:i.layer==="exit"?.58:.36,roughness:.94}),r=new X(new or(n,28,i.radius,9,!1),s);r.name=i.id,r.castShadow=!0,r.receiveShadow=!0,_e.add(r);const o=I(5078341,{emissive:1919014,emissiveIntensity:.4,roughness:.9});for(let c=0;c<i.leaves;c+=1){const l=(c+1)/(i.leaves+1),u=new X(new ge(.18,10,7),o);u.name=`${i.id}-leaf`,u.scale.set(1.65,.32,.72),u.position.copy(n.getPoint(l)),u.rotation.set(e*.31,c*1.7,e%2?.55:-.55),u.castShadow=!0,_e.add(u)}const a=I(7304513,{roughness:.82});for(let c=0;c<i.thorns;c+=1){const l=(c+1)/(i.thorns+1),u=new X(new ut(.07,.34,7),a);u.name=`${i.id}-thorn`,u.position.copy(n.getPoint(l)).add(new L(.1,.05,0)),u.rotation.z=e%2?1.05:-1.05,_e.add(u)}Tt.push({object:r,baseY:0,phase:e*.43,spin:0,bob:.012})}function K_(i){const e=new X(new ge(.34,18,14),I(i.color,{emissive:i.color,emissiveIntensity:.5,transparent:!0,opacity:.92}));e.name=i.label;const t=new Fu({color:i.model.flameColor??i.model.breathColor,emissive:i.model.flameColor??i.model.breathColor,emissiveIntensity:1.45,roughness:.28,transparent:!0,opacity:.9});if(i.model.kind==="breath-orb")for(let n=0;n<i.model.rings;n+=1){const s=new X(new Xe(.48+n*.16,.025,8,28),t);s.rotation.set(Math.PI/2,n*.45,n*.32),e.add(s)}else if(i.model.kind==="bluebell-flame"){for(let s=0;s<i.model.petals;s+=1){const r=s/i.model.petals*Math.PI*2,o=new X(new ge(.22,12,8),t);o.scale.set(.55,1.45,.42),o.position.set(Math.cos(r)*.34,-.12,Math.sin(r)*.34),o.rotation.z=Math.cos(r)*.5,e.add(o)}const n=new X(new ut(.25,.82,14),t);n.position.y=.56,e.add(n)}else if(i.model.kind==="steady-lantern"){const n=I(5468288,{metalness:.65,roughness:.35});for(const s of[-.42,.42])for(const r of[-.3,.3])k("恒光灯框",[.07,1.15,.07],[s,0,r],n,!0,e);for(let s=0;s<i.model.pulses;s+=1){const r=new X(new Xe(.28+s*.12,.035,8,24),t);r.rotation.x=Math.PI/2,r.position.y=-.2+s*.3,e.add(r)}}else for(let n=0;n<i.model.flameCount;n+=1){const s=n/i.model.flameCount*Math.PI*2,r=new X(new ut(.16,.82+n%2*.3,9),t);r.position.set(Math.cos(s)*.48,.25+n%2*.18,Math.sin(s)*.48),r.rotation.z=Math.cos(s)*.75,r.rotation.x=Math.sin(s)*.75,e.add(r)}return e}function $_(){de.color.setHex(7179368),de.groundColor.setHex(1317653),Kt({wall:2701100,floor:1516313,ceiling:1120273,fog:857615}),Rt.fog.density=.024,Yt({index:0,name:"魔鬼网",objectiveText:"目标：保持镇静，按正确节奏控制蓝铃火焰，让藤蔓松开地下出口",hint:"挣扎会让藤蔓收紧。先放松摆脱缠绕，再点燃冷焰，最后维持稳定光照；猛烈爆燃只会惊动整片根网。",progress:"○  ○  ○"}),P={progress:[],mistakes:0,constriction:0,unlocked:!1},gd(),k("根网出口",[5,.24,4.5],[0,.06,-2.1],I(461832,{emissive:1524519,emissiveIntensity:.7,roughness:1}),!1);const i=I(5398605,{roughness:.98});for(let t=0;t<18;t+=1){const n=t/18*Math.PI*2,s=k("破裂出口石环",[.62,.32,.76],[Math.cos(n)*2.55,.16,-2.1+Math.sin(n)*2.3],i);s.rotation.y=-n,s.rotation.z=(t%3-1)*.12}i_.forEach(Y_);for(const[t,n]of s_.entries()){const s=new X(new Se(1.05,1.22,.62,10),I(2502951,{roughness:.96}));s.name=`${n.label}石台`,s.position.set(n.x,.31,3.6),s.castShadow=!0,s.receiveShadow=!0,_e.add(s);const r=K_(n);r.position.set(n.x,1.5,3.6),r.userData={type:"devils-snare-action",actionId:n.id,label:n.label,selected:!1},_e.add(r),je.push(r),Tt.push({object:r,baseY:1.5,phase:t*1.2,spin:.07,bob:.06}),De(n.clue,[n.x,2.85,3.6],{width:1.9,size:27,color:"#b9e2c0"})}De(Zu.wallClue,[0,6.05,-8.1],{width:7.2,size:34,color:"#b9e2c0"});const e=new ei(7321343,3.2,12,2);e.position.set(0,4.5,1.2),e.castShadow=!0,_e.add(e)}function Z_(i){const{model:e}=i,t=I(i.color,{emissive:i.color,emissiveIntensity:.48,metalness:.82,roughness:e.metal==="gold"?.2:.3}),n=new Se(.105,.105,e.shaftLength,14);n.rotateZ(Math.PI/2);const s=new X(n,t);s.name=i.label,s.castShadow=!0;const r=new X(new Xe(e.bowRadius,.105,10,28),t);r.name=`${i.label}钥匙环`,r.position.x=-(e.shaftLength/2+e.bowRadius*.72),r.rotation.z=-Math.PI/2,s.add(r);const o=t.clone();for(let c=0;c<e.teeth;c+=1){const l=new X(new mt(.16,.22+c*.035,.12),o);l.name=`${i.label}锁齿`,l.position.set(e.shaftLength/2-c*.16,-.14-c*.025,0),s.add(l)}const a=I(11454952,{emissive:4349826,emissiveIntensity:.42,transparent:!0,opacity:.86,roughness:.5,side:Sn});for(const c of e.wings){const l=c.side==="left"?-1:1,u=new ht;u.name=`${i.label}${c.side==="left"?"左翼":"右翼"}`,u.position.set(l*.22,.04,0),u.rotation.z=c.bend;for(let d=0;d<c.feathers;d+=1){const f=new X(new ge(.24,12,8),a);f.name=`${u.name}羽片`,f.scale.set(1.5-d*.12,.34,.18),f.position.set(l*(.22+d*.16),.3+d*.12,0),f.rotation.z=l*(.42+d*.09),u.add(f)}s.add(u)}if(e.metal==="gold")for(let c=0;c<6;c+=1){const l=new X(new ge(.055,10,8),I(14241123,{emissive:61e5,emissiveIntensity:.7,metalness:.35,roughness:.25})),u=c/6*Math.PI*2;l.position.set(r.position.x+Math.cos(u)*e.bowRadius,Math.sin(u)*e.bowRadius,.08),s.add(l)}return s}function J_(i){const e=I(7907552,{emissive:3234706,emissiveIntensity:1.1});for(let t=0;t<i.evidence.orbitMarkers;t+=1){const n=-t*.72,s=new X(new ge(.075+t*.008,10,8),e);s.name="顺时针下沉轨迹标记",s.position.set(i.x+Math.cos(n)*(.85-t*.04),2.28-t*.12,i.display.z+Math.sin(n)*.48),_e.add(s)}}function Q_(){de.color.setHex(8558262),de.groundColor.setHex(1514283),Kt({wall:3556189,floor:2107450,ceiling:1251367,fog:1120038}),Rt.fog.density=.021,Yt({index:1,name:"飞钥匙房",objectiveText:"目标：依次确认翅膀损伤、飞行轨迹和锁孔材质，锁定唯一真钥匙",hint:"门锁留下银屑；真正用过的钥匙左翼弯折，负重后会沿顺时针轨迹下沉。先观察损伤，再追踪轨迹，最后核对银色钥匙。",progress:"◇  ◇  ◇"}),ti.textContent=Ce("hud.roomKicker",{book:1,chapter:4,room:2}),P={progress:[],mistakes:0,pursuit:0,unlocked:!1},vd();const i=I(6582925,{metalness:.32,roughness:.66});for(const n of[-7.2,-4.8,4.8,7.2])k("钥匙厅高柱",[.55,6.4,.55],[n,3.2,-8.3],i);k("银屑锁门",[4.1,5.4,.3],[0,2.7,-8.45],I(3160138,{metalness:.62,roughness:.35}));const e=I(14280946,{emissive:6256784,emissiveIntensity:.9,metalness:.9,roughness:.22});for(let n=0;n<12;n+=1){const s=new X(new Ls(.035+n%3*.012),e);s.name="锁孔银屑",s.position.set(-.22+n%4*.13,2.2+Math.floor(n/4)*.11,-8.22),s.rotation.set(n*.3,n*.5,0),_e.add(s)}De($u.wallClue,[0,6.15,-8.05],{width:7.4,size:32,color:"#c9dcff"});for(const[n,s]of n_.entries()){k(`${s.label}观察台`,[2.55,.65,1.55],[s.x,.33,s.display.z],I(2699847));const r=Z_(s);r.position.set(s.x,1.75,s.display.z),r.rotation.x=-.16,_e.add(r),s.evidence.motion==="clockwise-descending"&&J_(s),r.userData={type:"flying-key-clue",clueId:s.id,label:s.label,selected:!1},je.push(r),Tt.push({object:r,baseY:1.75,phase:n*1.35,spin:.1,bob:.18}),De(s.clue,[s.x,3.05,s.display.z],{width:2.45,size:28,color:"#c9dcff"})}const t=new ei(9091327,3.1,13,2);t.position.set(0,5.7,1.2),_e.add(t)}function ca(i,e){const t=new X(new Se(.56,.66,.24,16),e);t.position.y=.12,t.castShadow=!0,t.receiveShadow=!0;const n=(s,r,o=[0,0,0])=>{const a=new X(s,e);return a.position.set(...r),a.rotation.set(...o),a.castShadow=!0,a.receiveShadow=!0,t.add(a),a};if(n(new Se(.45,.53,.18,16),[0,.23,0]),i.piece==="pawn")n(new Se(.25,.42,.72,14),[0,.65,0]),n(new Xe(.29,.07,8,16),[0,1.02,0],[Math.PI/2,0,0]),n(new ge(i.headRadius??.24,16,10),[0,1.25,0]);else if(i.piece==="rook"){n(new Se(.37,.46,.88,12),[0,.72,0]),n(new Se(.52,.39,.28,12),[0,1.28,0]);const s=i.battlements??6;for(let r=0;r<s;r+=1){const o=r/s*Math.PI*2;n(new mt(.2,.3,.22),[Math.sin(o)*.38,1.55,Math.cos(o)*.38],[0,o,0])}}else if(i.piece==="knight"){n(new Se(.28,.45,.62,12),[0,.58,0]),n(new Cn(.29,.65,5,10),[-.08,1.08,0],[0,0,-.38]),n(new mt(.62,.38,.46),[.25,1.43,0],[0,0,-.12]),n(new mt(.42,.2,.38),[.65,1.32,0],[0,0,-.08]);for(const r of[-.14,.14])n(new ut(.11,.34,8),[.08,1.78,r],[0,0,-.18]);const s=i.maneRidges??4;for(let r=0;r<s;r+=1)n(new ut(.1,.32,6),[-.35+r*.08,1.5-r*.18,0],[0,0,-1.15])}else if(n(new Se(.27,.45,.86,14),[0,.7,0]),n(new Xe(.32,.07,8,18),[0,1.13,0],[Math.PI/2,0,0]),i.piece==="bishop")n(new ge(.27,14,10),[0,1.4,0]),n(new ut(.19,.48,12),[0,1.74,0]);else if(i.piece==="queen"){n(new ge(.24,14,10),[0,1.38,0]);const s=i.crownSpikes??6;for(let r=0;r<s;r+=1){const o=r/s*Math.PI*2;n(new ut(.09,.38,7),[Math.sin(o)*.27,1.72,Math.cos(o)*.27])}n(new ge(.11,10,8),[0,1.94,0])}else n(new ge(.25,14,10),[0,1.39,0]),n(new mt(.13,.58,.13),[0,1.84,0]),n(new mt(.48,.13,.13),[0,1.9,0]);return t.scale.setScalar((i.height??1.75)/1.75),t}function e1(){de.color.setHex(10132646),de.groundColor.setHex(1513243),Kt({wall:4013379,floor:2105381,ceiling:1381658,fog:1052692}),Rt.fog.density=.018,Be&&(Nt.position.z=Ut.mobileCameraZ),Yt({index:2,name:"巫师棋",objectiveText:"目标：用最少牺牲打开通往对岸的安全棋路",hint:"黑后封锁中央。先用边兵引开主教，再让骑士双攻国王与城堡，最后直车沿空出的纵线推进；贸然冲后会让已投入的棋子全部被吃。",progress:"◇  ◇  ◇"}),P={progress:[],mistakes:0,captured:0,unlocked:!1},_d();const i=I(12170666,{roughness:.78}),e=I(2697777,{roughness:.86}),t=I(5592671,{roughness:.96});for(let s=0;s<8;s+=1)for(let r=0;r<8;r+=1)k("巫师棋盘格",[Ut.cellSize,.16,Ut.cellSize],[Ut.boardStartX+r*Ut.cellSize,.05,Ut.boardStartZ+s*Ut.cellSize],(s+r)%2?e:i,!1);const n=["rook","knight","bishop","queen","king","bishop","knight","rook"];for(const[s,r,o]of[[0,"黑方",e],[7,"白方",i]]){for(let c=0;c<8;c+=1){const l=ca({piece:n[c],height:1.7},o);l.name=`${r}${n[c]}巨型棋子`,l.position.set(Ut.boardStartX+c*Ut.cellSize,.18,Ut.boardStartZ+s*Ut.cellSize),_e.add(l),Tt.push({object:l,baseY:.18,phase:c*.55,spin:0,bob:.025})}const a=s===0?1:6;for(let c=0;c<8;c+=1){const l=ca({piece:"pawn",height:1.48,headRadius:.22},o);l.name=`${r}巨型兵`,l.position.set(Ut.boardStartX+c*Ut.cellSize,.18,Ut.boardStartZ+a*Ut.cellSize),_e.add(l)}}for(const[s,r]of r_.entries()){const o=Be?r.mobileDisplay:{x:r.x,z:r.display.z,scale:1,plaqueWidth:2.05};k(`${r.label}棋钟台`,[o.plaqueWidth,.65,1.55],[o.x,.33,o.z],t);const a=ca(r.model,I(r.color,{emissive:r.color,emissiveIntensity:.36,metalness:.12,roughness:.72}));a.name=r.label,a.scale.multiplyScalar(o.scale),a.position.set(o.x,.58,o.z),_e.add(a),a.userData={type:"wizard-chess-move",moveId:r.id,label:r.label,selected:!1},je.push(a),Tt.push({object:a,baseY:.58,phase:s*1.25,spin:.025,bob:.055}),De(r.clue,[o.x,.48,o.z+.82],{width:o.plaqueWidth-.05,size:Be?21:27,color:"#e1dfd5"})}De(Ju.wallClue,[0,6.15,-8.15],{width:7.5,size:Be?Ut.mobileWallLabelSize:31,color:"#e1dfd5"}),wt([-6.2,4.8,5.5],1.5,8),wt([6.2,4.8,5.5],1.5,8)}function Md(i,e=1){const t=I(i.color,{emissive:i.color,emissiveIntensity:.48,metalness:.46,roughness:.28}),n=new X(new Se(.4,.48,.16,16),t);n.castShadow=!0;const s=I(13223132,{transparent:!0,opacity:.52,metalness:.22,roughness:.12}),r=I(2364975,{emissive:5973880,emissiveIntensity:1.8,transparent:!0,opacity:.88}),o=new X(new Se(.26,.38,.64,14),s);o.position.y=.48,n.add(o);const a=new X(new Se(.22,.34,.36,14),r);a.position.y=.36,n.add(a);const c=new X(new Se(.13,.18,.3,12),s);c.position.y=.92,n.add(c);const l=new X(new Se(.16,.14,.18,10),I(11052466,{metalness:.78,roughness:.3}));return l.position.y=1.12,n.add(l),n.scale.setScalar(e),n}function t1(i){const e=I(i.color,{emissive:i.color,emissiveIntensity:.4,roughness:.56}),t=new X(new Se(.54,.64,.2,16),e);t.castShadow=!0;const n=I(11904399,{roughness:.72}),s=I(7440040,{emissive:2570581,emissiveIntensity:.75,metalness:.46,roughness:.18}),r=I(13214043,{emissive:16761948,emissiveIntensity:1.65,metalness:.34,roughness:.24}),o=(a,c,l=n,u=[0,0,0])=>{const d=new X(a,l);return d.position.set(...c),d.rotation.set(...u),d.castShadow=!0,t.add(d),d};if(i.model.kind==="mirror-figure"){o(new mt(1.28,1.8,.12),[0,1.15,-.18],s),o(new ge(.25,14,10),[0,1.72,.02]),o(new ut(.54,1.16,12),[0,.85,.02]);const a=o(new mt(.5,.38,.08),[.24,.86,.5],I(13811855,{emissive:6115631,emissiveIntensity:.65}));a.rotation.z=-.08,o(new mt(.32,.18,.08),[.24,.9,.56],I(1512476))}else if(i.model.kind==="protective-hands"){for(const a of[-1,1]){o(new Cn(.2,.62,5,10),[a*.56,.82,0],n,[0,0,a*.62]);for(let c=0;c<4;c+=1)o(new Cn(.065,.38+c*.025,4,8),[a*(.28+c*.1),1.34+c*.04,0],n,[0,0,a*(.2+c*.07)])}o(new Ls(.34,1),[0,1.2,-.48],r),o(new Xe(.7,.055,8,28),[0,1.15,-.3],I(14204787,{emissive:10254633,emissiveIntensity:1.2}),[Math.PI/2,0,0])}else{o(new Cn(.24,.72,6,12),[0,.78,0],n,[0,0,-.28]);for(let a=0;a<5;a+=1){const c=-.9+a*.45;o(new Cn(.075,.46,4,8),[Math.sin(c)*.35,1.25+Math.cos(c)*.18,0],n,[0,0,c])}o(new Ls(.31,1),[.1,1.18,.02],I(10824506,{emissive:16719927,emissiveIntensity:2}));for(let a=0;a<5;a+=1)o(new mt(.035,.62,.04),[-.35+a*.17,.64+a*.12,.27],I(15019589,{emissive:16717359,emissiveIntensity:2.2}),[0,0,-.5+a*.22])}return t}function n1(i){return i.model.kind==="potion-bottle"?Md(i,1.38):t1(i)}function i1(){de.color.setHex(10258354),de.groundColor.setHex(1380635),Kt({wall:3879237,floor:2169640,ceiling:1380379,fog:854290}),Rt.fog.density=.019,Yt({index:3,name:"魔法石密室",objectiveText:"目标：穿过黑焰，解读镜像，并证明你只想保护魔法石",hint:"七瓶药剂中，最小的瓶子可穿过黑焰。镜中真正的守护者口袋仍空着；想夺取魔法石的手只会触发密室腐化。",progress:"◇  ◇  ◇"}),ti.textContent=Ce("hud.roomKicker",{book:1,chapter:4,room:4}),P={progress:[],mistakes:0,corruption:0,unlocked:!1},xd();const i=I(2827314,{roughness:.9}),e=I(11110734,{metalness:.62,roughness:.36});Be&&(Nt.position.z=bn.mobileCameraZ),k("厄里斯镜面",[4.5,4.55,.18],[0,2.85,-8.1],I(6839426,{emissive:3747160,emissiveIntensity:.95,metalness:.76,roughness:.18}),!1);for(const o of[-2.55,2.55])k("厄里斯镜金柱",[.46,4.75,.42],[o,2.6,-8],e);const t=new X(new Xe(2.55,.24,12,36,Math.PI),e);t.rotation.z=Math.PI,t.position.set(0,4.95,-8),_e.add(t);for(const o of[-2.85,2.85])for(const a of[1.2,2.35,3.5]){const c=new X(new vo(.14,.045,32,6),e);c.position.set(o,a,-7.88),c.scale.set(1,1.5,.45),_e.add(c)}for(const o of[-7.2,-5,5,7.2])k("密室黑石柱",[.62,6.4,.62],[o,3.2,-8.25],i);const n=[1.18,.96,1.42,.58,1.06,1.3,.88];for(let o=0;o<bn.potionRow.count;o+=1){const a={color:o===bn.potionRow.smallestIndex?10127805:7627346},c=Md(a,n[o]);c.name=o===bn.potionRow.smallestIndex?"七瓶中最小的银瓶":"药剂逻辑候选瓶",c.position.set(-3.6+o*1.2,2.42,bn.potionRow.z),_e.add(c)}k("七瓶药剂长桌",[9.3,.42,1.35],[0,2.28,bn.potionRow.z],i);const s=I(591630,{emissive:2692155,emissiveIntensity:1.8,transparent:!0,opacity:.94});for(let o=0;o<bn.blackFlame.columns;o+=1){const a=new X(new ut(.48+o%2*.12,bn.blackFlame.height-o%3*.22,8),s);a.name="黑焰药剂屏障",a.position.set(-5.5+o*1.1,1.25,bn.blackFlame.z),a.rotation.z=o%2?.1:-.1,_e.add(a),Tt.push({object:a,baseY:1.25,phase:o*.6,spin:.16,bob:.12})}for(const[o,a]of o_.entries()){const c=Be?a.mobileDisplay:a.display;k(`${a.label}石台`,[c.plaqueWidth??2.05,.65,1.45],[c.x,.33,c.z],i);const l=n1(a);l.name=a.label,l.position.set(c.x,.62,c.z),l.scale.multiplyScalar(c.scale??1),_e.add(l),l.userData={type:"stone-chamber-clue",clueId:a.id,label:a.label,selected:!1},je.push(l),Tt.push({object:l,baseY:.62,phase:o*1.2,spin:.035,bob:.055}),De(a.clue,[c.x,.58,c.z],{width:Math.min(c.plaqueWidth??2.05,1.9),size:Be?20:28,color:"#dfcef2"})}De(Qa.wallClue,[0,6.72,-8.05],{width:Be?bn.mobileWallLabelWidth:7.4,size:Be?bn.mobileWallLabelSize:30,color:"#dfcef2"}),De(Qa.mirrorInscription,[0,6.08,-8.02],{width:Be?2.8:4.6,size:Be?17:24,color:"#d9bd78"});const r=new ei(13016319,3,12,2);r.position.set(0,5.5,.5),_e.add(r)}function s1(){de.color.setHex(8494477),de.groundColor.setHex(1121048),Kt({wall:3426111,floor:1911076,ceiling:1581598,fog:725776}),Rt.fog.density=.024,Yt({index:0,name:"精灵的封锁",objectiveText:"目标：循魔力残痕解除住宅中的三重封锁，赶往国王十字车站",hint:"绿色干扰从邮槽进入，绕过悬浮蛋糕，最后汇入壁炉封印。错碰尖叫灯会让封锁重新闭合。",progress:"◇  ◇  ◇"}),ti.textContent="第二部 · 第一章 · 第 1 关",P={progress:[],mistakes:0,interference:0,unlocked:!1},bd();const i=I(2704955,{roughness:.86}),e=I(9861959,{metalness:.52,roughness:.42});k("住宅楼梯平台",[3.1,.35,4.8],[-6.8,.18,-3],i);for(let u=0;u<7;u+=1)k("封锁楼梯踏板",[2.5,.28,.72],[-6.8,.35+u*.3,-.8-u*.58],i);k("封死的住宅正门",[3.2,5.1,.28],[0,2.55,-8.45],i),k("黄铜门链",[3.6,.18,.18],[0,3,-8.18],e),k("壁炉背墙",[4.3,4.5,.5],[5.7,2.25,-7.9],I(2634542)),k("壁炉冷焰",[2.4,2.1,.35],[5.7,1.05,-7.55],I(2518871,{emissive:1530951,emissiveIntensity:1.15}));const t=I(4573312,{emissive:1874781,emissiveIntensity:1.35,roughness:.3}),n=I(2696996,{roughness:.96}),s=I(8410245,{roughness:.48}),r=I(14470051,{roughness:.92}),o=I(2500393,{metalness:.64,roughness:.56}),a=I(12006717,{emissive:15017525,emissiveIntensity:1.4}),c=(u,d,f,m,g)=>{const v=new X(u,d);return v.name=g,v.position.set(...f),v.castShadow=!0,m.add(v),v};for(const[u,d]of l_.entries()){const[f,,m]=d.position;k(`${d.label}底座`,[2.65,.48,1.55],[f,.24,m],i);const g=new ht;g.position.set(f,.56,m),_e.add(g);let v;if(d.id==="jammed-post"){k("深绿正门切片",[2.15,2,.24],[0,1,0],i,!0,g),v=k(d.label,[1.5,.42,.16],[0,1.22,.2],e,!0,g),v.rotation.x=-.28,k("被夹裂的象牙信封",[1.02,.48,.06],[.2,.86,.31],r,!0,g).rotation.z=-.14;for(const p of[-.52,-.22,.1,.4])c(new ge(.055,8,6),t,[p,.62-Math.abs(p)*.12,.4],g,"邮槽绿色粉尘")}else if(d.id==="levitating-cake"){c(new Se(.9,.95,.12,24),I(15261906,{roughness:.3}),[0,.24,0],g,"白瓷蛋糕盘"),v=c(new Se(.72,.78,.62,24),s,[0,.62,0],g,d.label),c(new Se(.48,.58,.48,24),I(13804637),[0,1.12,0],g,"金色双层蛋糕芯"),c(new Xe(.86,.045,8,30),t,[0,.7,0],g,"绕行魔力丝线").rotation.x=Math.PI/2;for(const p of[0,2.1,4.2]){const h=c(new ge(.09,8,6),I(11109309),[Math.cos(p)*.34,1.39,Math.sin(p)*.34],g,"糖渍紫罗兰");h.scale.y=.35}}else if(d.id==="sealed-floo"){k("积灰壁炉主体",[2.2,1.85,.46],[0,.94,0],n,!0,g),k("飞路炉冷绿炉膛",[1.4,1.18,.18],[0,.64,.32],t,!0,g),v=c(new Xe(.72,.08,10,28),e,[0,.88,.48],g,d.label);for(const p of[.48,.25])c(new Xe(p,.055,9,28),t,[0,.88,.5],g,"飞路炉封印环");k("壁炉石楣",[2.55,.28,.72],[0,1.88,0],n,!0,g)}else{v=c(new Se(.55,.72,.9,12),I(6768464,{transparent:!0,opacity:.72,emissive:7280675,emissiveIntensity:.5}),[0,.92,0],g,d.label),c(new Xe(.72,.07,8,20),o,[0,1.25,0],g,"油灯环形提手").rotation.x=Math.PI/2,c(new ut(.42,.85,10),a,[0,.88,.02],g,"嘴形尖叫红焰").rotation.z=Math.PI,k("油灯玻璃裂口",[.06,.78,.05],[.2,.96,.42],a,!1,g).rotation.z=.42;const p=c(new Xe(.9,.035,7,20,Math.PI*1.35),a,[0,.3,0],g,"红色报警回路线");p.rotation.x=Math.PI/2}g.userData={type:"elf-blockade-trace",objectId:d.id,label:d.label,selected:!1},g.material=v.material,je.push(g),Tt.push({object:g,baseY:.56,phase:u*1.15,spin:.015,bob:.045}),De(d.clue,[f,2.72,m],{width:Be?ms.mobileClueWidth:ms.desktopClueWidth,size:Be?ms.mobileClueFontSize:ms.desktopClueFontSize,color:"#b9ddc8"})}De(Qu.wallClue,[0,6.1,-8.05],{width:Be?ms.mobileWallWidth:6.8,size:Be?ms.mobileWallFontSize:35,color:"#b9ddc8"});const l=new ei(6476957,2.8,13,2);l.position.set(0,5.4,1.2),_e.add(l),wt([-6.4,4.8,5.8],1.4,7)}function r1(){de.color.setHex(7440544),de.groundColor.setHex(1120547),Kt({wall:2504260,floor:1515819,ceiling:1450545,fog:659737}),Rt.fog.density=.021,Yt({index:1,name:"飞车失控",objectiveText:"目标：在撞上高架桥前依次稳定配重、航向与油门",hint:"后备箱先把车头拉高；红色铁路信号给出航向；发动机过热时只能脉冲给油。猛踩油门会让飞车再次翻滚。",progress:"◇  ◇  ◇"}),P={progress:[],mistakes:0,turbulence:0,unlocked:!1},yd();const i=I(10201002,{metalness:.78,roughness:.24}),e=I(4016978,{metalness:.66,roughness:.38}),t=I(3114658,{metalness:.45,roughness:.26,emissive:865605,emissiveIntensity:.55}),n=I(8570333,{metalness:.2,roughness:.1,transparent:!0,opacity:.62}),s=I(1053205,{roughness:.92}),r=I(5978149,{roughness:.88}),o=I(10976053,{metalness:.72,roughness:.34}),a=I(12926518,{emissive:16721439,emissiveIntensity:1.25,roughness:.38}),c=I(5028328,{emissive:2268640,emissiveIntensity:1.3,metalness:.35}),l=(d,f,m,g=_e,v="")=>{const p=new X(d,f);return p.name=v,p.position.set(...m),p.castShadow=!0,p.receiveShadow=!0,g.add(p),p};k("圆角蓝色飞车下车身",[3.35,.82,6.15],[0,1.18,-2.2],t),k("飞车长引擎盖",[3.15,.5,1.75],[0,1.72,-4.35],t),k("飞车后备箱",[3.15,.56,1.45],[0,1.68,.08],t),k("飞车玻璃座舱",[2.85,1.18,2.65],[0,2.25,-1.95],n,!1),k("飞车蓝色车顶",[3,.22,2.75],[0,2.9,-1.95],t);for(const d of[-1.72,1.72])for(const f of[-3.65,-.65]){const m=l(new Se(.58,.58,.38,24),s,[d,.84,f],_e,"黑橡胶车轮");m.rotation.z=Math.PI/2;const g=l(new Se(.24,.24,.4,16),i,[d,.84,f],_e,"镀铬轮毂");g.rotation.z=Math.PI/2}k("前镀铬保险杠",[3.5,.18,.2],[0,1.05,-5.32],i),k("后镀铬保险杠",[3.5,.18,.2],[0,1.05,.92],i);for(const d of[-1.05,1.05])l(new ge(.28,14,10),I(16769952,{emissive:16766571,emissiveIntensity:2}),[d,1.65,-5.22],_e,"圆形前灯");for(const d of[-.45,0,.45]){const f=l(new ge(.18,12,8),c,[d,.85+Math.abs(d),1.18],_e,"蓝色排气魔法");Tt.push({object:f,baseY:f.position.y,phase:d*3,spin:.02,bob:.12})}for(let d=0;d<7;d+=1)k("悬空铁路枕木",[7.8,.16,.46],[0,.35,-7.7+d*2.4],I(5325617));k("左铁轨",[.16,.18,17],[-2.35,.55,0],i),k("右铁轨",[.16,.18,17],[2.35,.55,0],i),k("远方列车红灯",[.55,.55,.22],[0,3.6,-8.55],I(14108479,{emissive:16720925,emissiveIntensity:2.4}));for(const[d,f]of c_.entries()){const[m,g,v]=f.position,p=new ht;p.position.set(m,g,v),_e.add(p),k(`${f.label}仪表台`,[2.65,.58,1.5],[0,.29,0],e,!0,p);let h;if(f.id==="balance-luggage"){h=k(f.label,[1.55,1.18,.92],[0,1.22,0],r,!0,p);for(const M of[-.48,.48])k("皮箱交叉束带",[.14,1.24,.96],[M,1.24,0],o,!0,p);for(const M of[-.68,.68])for(const b of[-.38,.38])k("黄铜护角",[.16,.16,.16],[M,1.72,b],o,!0,p);for(const M of[-.38,0,.38])k("后移发光箭头",[.24,.12,.42],[M,2,0],c,!0,p).rotation.y=Math.PI/4}else if(f.id==="align-railway"){h=l(new Xe(.58,.1,12,28),s,[0,1.18,0],p,f.label),h.rotation.x=Math.PI/2;for(const b of[0,Math.PI*2/3,Math.PI*4/3]){const _=k("方向盘辐条",[.08,.08,.58],[Math.sin(b)*.22,1.18,Math.cos(b)*.22],i,!0,p);_.rotation.y=b}const M=l(new Xe(.3,.035,8,20),n,[0,1.72,0],p,"玻璃校向准星");M.rotation.x=Math.PI/2,l(new ut(.09,.4,10),a,[0,1.72,.02],p,"红色信号针").rotation.z=Math.PI}else if(f.id==="pulse-throttle"){h=k(f.label,[.22,1.1,.22],[0,1.22,0],i,!0,p),h.rotation.z=-.28,l(new ge(.2,12,8),c,[-.15,1.78,0],p,"蓝色油门球头");for(const b of[-.5,0,.5])k("蓝区短推刻痕",[.22,.12,.12],[b,.82,.48],c,!0,p);const M=l(new Xe(.38,.07,10,24),n,[0,1.28,.48],p,"冷却温度表");M.rotation.x=Math.PI/2}else{h=k(f.label,[.82,.18,1.05],[0,.92,0],I(2698029,{metalness:.6}),!0,p),h.rotation.x=-.18;const M=l(new Xe(.42,.08,10,24),a,[0,1.52,.35],p,"红区过热表");M.rotation.x=Math.PI/2,k("开裂散热胶管",[.22,.22,1.2],[.65,1,0],s,!0,p).rotation.z=.55;for(const b of[1.5,1.85,2.18])l(new ge(.14,10,8),a,[.75,b,0],p,"过热蒸汽")}p.userData={type:"flying-car-control",controlId:f.id,label:f.label,selected:!1},p.material=h.material,je.push(p),Tt.push({object:p,baseY:g,phase:d*1.1,spin:.012,bob:.035}),De(f.clue,[m,2.48,v],{width:Be?gs.mobileClueWidth:gs.desktopClueWidth,size:Be?gs.mobileClueFontSize:gs.desktopClueFontSize,color:"#b9d9e8"})}De(ed.wallClue,[0,6.15,-8.05],{width:Be?gs.mobileWallWidth:6.8,size:Be?gs.mobileWallFontSize:35,color:"#b9d9e8"});const u=new ei(9423359,3,14,2);u.position.set(0,5.6,1),_e.add(u)}function o1(){de.color.setHex(8228772),de.groundColor.setHex(1515544),Kt({wall:2570285,floor:1714976,ceiling:1582365,fog:726288}),Rt.fog.density=.024,Yt({index:2,name:"打人柳下",objectiveText:"目标：读懂枝条的高扫、低返与露根间隙，安全抵达树洞",hint:"粗枝先从头顶横扫；回摆会贴近地面。只有第二次攻击收势后，发光树根之间才会短暂露出通道。",progress:"◇  ◇  ◇"}),ti.textContent=Ce("hud.roomKicker",{book:2,chapter:1,room:3}),P={progress:[],mistakes:0,bruises:0,unlocked:!1},Sd();const i=I(4862756,{roughness:1}),e=I(12158802,{roughness:.82}),t=I(6503206,{roughness:.94,emissive:2953992,emissiveIntensity:.3}),n=I(3427893,{roughness:1}),s=I(6720079,{roughness:.92,emissive:1517073,emissiveIntensity:.35,side:Sn}),r=I(8249211,{emissive:4185186,emissiveIntensity:1.8,roughness:.45}),o=new ht;o.name="古老攻击性打人柳",o.position.set(0,0,Be?-6.15:-5.15),Be&&o.scale.setScalar(.72);const a=new X(new Se(1.45,2.35,6.7,15),i);a.position.y=3.35,a.castShadow=!0,o.add(a);for(const[f,m]of[[-1.05,-.24],[1.05,.24]]){const g=new X(new Se(.52,.95,2.9,11),t);g.position.set(f,5.55,0),g.rotation.z=m,g.castShadow=!0,o.add(g)}const c=new X(new ge(1,20,16),I(66049,{roughness:1}));c.scale.set(.82,1.32,.14),c.position.set(0,1.45,2.12),o.add(c);const l=new X(new Xe(.78,.16,9,20,Math.PI),n);l.scale.y=1.55,l.position.set(0,1.25,2.2),o.add(l);for(const f of[-.75,.75]){const m=new X(new Xe(.32,.13,8,16),t);m.position.set(f,4.15,1.35),o.add(m)}for(const[f,m]of[-1.08,-.58,.58,1.08].entries()){const g=new ht;g.position.set(Math.sin(m)*1.65,4.05,0),g.rotation.z=m;const v=new X(new Se(.18,.5,3.8,9),t);v.position.y=1.55,v.castShadow=!0,g.add(v);for(const p of[-1,1]){const h=new X(new Se(.08,.2,2.2,7),i);h.position.set(p*.55,2.55,0),h.rotation.z=p*.6,g.add(h)}for(const[p,h]of[[-.8,2.15],[.7,2.35],[-.3,2.75]]){const M=new X(new ge(.72,10,7),s);M.scale.set(1.35,.55,.75),M.position.set(p,h,0),g.add(M)}o.add(g),Tt.push({object:g,baseY:g.position.y,phase:f*1.4,spin:.012,bob:.08})}for(const[f,m,g]of[[-4.4,4.3,1.5],[-3.1,5.35,1.7],[3.1,5.35,1.7],[4.4,4.3,1.5]]){const v=new X(new ge(.9,11,8),s);v.scale.set(g,.72,.82),v.position.set(f,m,.2),o.add(v);for(const p of[-.45,0,.45]){const h=new X(new Se(.035,.07,1.3,6),n);h.position.set(f+p,m-.85,.35),o.add(h)}}for(const f of[-4.2,-2.35,-.9,.9,2.35,4.2]){const m=new X(new Se(.16,.52,4.4,8),f===-.9||f===.9?r:n);m.rotation.z=Math.PI/2,m.rotation.y=f*.1,m.position.set(f,.3,.8+Math.abs(f)*.18),o.add(m)}for(const f of[-1.35,1.35]){const m=new X(new ut(.2,.8,7),e);m.position.set(f,5.3,1.25),m.rotation.z=f<0?-1:1,o.add(m)}_e.add(o);const u=I(3556408,{roughness:1});for(const f of u_){const[m,g,v]=f.position,p=Be?m*.56:m,h=Be?-.35:v;k(`${f.label}石台`,[Be?1.3:2.3,.36,1.25],[p,.18,h],u);const M=new ht;M.name=f.label,M.position.set(p,g+.38,h),Be&&M.scale.setScalar(.68);const b=I(f.color,{emissive:f.color,emissiveIntensity:.42,roughness:.7});if(f.model.kind==="overhead-branch-arc"){const _=new X(new Se(.11,.28,2.25,8),t);_.rotation.z=Math.PI/2,_.position.y=1.25,M.add(_);const w=new X(new Xe(.72,.065,8,22,Math.PI),b);w.rotation.z=Math.PI,w.position.y=.8,M.add(w);for(const T of[-.65,0,.65])k("飞散柳叶",[.2,.04,.1],[T,1.55-Math.abs(T)*.25,0],s,!1,M)}else if(f.model.kind==="ground-skimming-return"){const _=new X(new Se(.1,.26,2.25,8),n);_.rotation.z=Math.PI/2,_.position.y=.42,M.add(_);const w=new X(new Xe(.55,.09,8,18,Math.PI),b);w.position.y=.65,M.add(w);for(const T of[-.75,-.25,.25,.75])k("贴地落叶",[.22,.03,.12],[T,.12,.15],s,!1,M)}else if(f.model.kind==="illuminated-root-passage"){for(const w of[-1,1]){const T=new X(new Se(.12,.28,1.65,8),n);T.position.set(w*.48,.72,0),T.rotation.z=w*-.45,M.add(T)}const _=new X(new ge(.52,14,10),b);_.scale.set(.8,1.25,.18),_.position.y=.58,M.add(_);for(const w of[-.35,0,.35])k("安全脚印",[.22,.04,.34],[0,.1,w],r,!1,M)}else{const _=new X(new Se(.15,.36,2.3,8),t);_.rotation.z=-.72,_.position.set(-.3,1,0),M.add(_);for(const T of[-1,1]){const C=new X(new ut(.11,.7,6),e);C.position.set(T*.52,.35,0),C.rotation.z=T*.7,M.add(C)}const w=new X(new Xe(.48,.1,8,12),b);w.position.y=.48,M.add(w)}M.userData={type:"willow-rhythm",actionId:f.id,label:f.label,selected:!1},je.push(M),_e.add(M),De(f.clue,[p,Be?1.95:2.45,h],{width:Be?vs.mobileClueWidth:vs.desktopClueWidth,size:Be?vs.mobileClueFontSize:vs.desktopClueFontSize,color:"#c7d9bd"})}De(td.wallClue,[0,6.2,-8.05],{width:Be?vs.mobileWallWidth:7.2,size:Be?vs.mobileWallFontSize:34,color:"#c7d9bd"});const d=new ei(10143619,2.7,14,2);d.position.set(0,5.8,.8),_e.add(d)}function Wt(i){R_(),yt=i,Nt.position.set(0,1.7,6.7),Nt.quaternion.identity(),i===0?L_():i===1?D_():i===2?O_():i===3?F_():i===4?z_():i===5?B_():i===6?H_():i===7?G_():i===8?V_():i===9?X_():i===10?q_():i===11?j_():i===12?$_():i===13?Q_():i===14?e1():i===15?i1():i===16?s1():i===17?r1():i===18&&o1(),Ed()}function a1(){for(const i of je)i.userData.type==="owl-letter"&&!i.userData.decoy&&(i.visible=!0,i.userData.selected=!1)}function l1(i){if(i.userData.selected)return;const e=__(P,i.userData.clueId),t=ye(N,i.userData.destination);if(e.reset){P=e,a1(),au(),le(Vs(N,"wrong",{destination:t}),3200);return}P=e,i.userData.selected=!0,i.visible=!1,au(),le(Vs(N,"progress",{destination:t,count:P.progress.length})),P.unlocked&&(wi.userData.unlocked=!0,$e.textContent=Vs(N,"completeObjective"),et.textContent=Vs(N,"completeHint"),le(Vs(N,"completeMessage"),3800))}function c1(){for(const i of je)i.userData.type==="shopping-item"&&(i.visible=!0,i.userData.selected=!1)}function u1(i){if(i.userData.selected)return;const e=x_(P,i.userData.itemId);if(e.reset){P=e,c1(),lu(),le(qs(N,"wrong",{label:ye(N,i.userData.label)}),3200);return}P=e,i.userData.selected=!0,i.visible=!1,lu(),le(qs(N,"purchased",{label:ye(N,i.userData.label),price:i.userData.price})),P.unlocked&&(wi.userData.unlocked=!0,$e.textContent=qs(N,"completeObjective"),et.textContent=qs(N,"completeHint"),le(qs(N,"completeMessage"),3600))}function d1(i){if(!P.progress.includes("wood")){if(P=b_(P,i.userData.woodId),Cl(),!P.accepted){de.color.setHex(11745838),i.rotation.y+=Math.PI/5,le(Xt(N,"wrongWood",{label:ye(N,i.userData.label)}),3200),setTimeout(()=>{yt===2&&de.color.setHex(12032624)},480);return}i.userData.selected=!0;for(const e of i.userData.glowMaterials)e.emissive.setHex(14858319),e.emissiveIntensity=1.6;for(const e of je)e.userData.type==="wand-core"&&(e.visible=!0,e.userData.pedestal.visible=!0,e.userData.coreLabel.visible=!0);$e.textContent=Xt(N,"coreObjective"),et.textContent=Xt(N,"coreHint"),le(Xt(N,"woodSuccess"),3600)}}function h1(i){if(!P.progress.includes("core")){if(P=y_(P,i.userData.coreId),Cl(),!P.accepted){de.color.setHex(7022716),i.rotation.z+=Math.PI/4,le(Xt(N,"wrongCore",{label:ye(N,i.userData.label)}),3400),setTimeout(()=>{yt===2&&de.color.setHex(12032624)},480);return}i.userData.selected=!0;for(const e of i.userData.glowMaterials)e.emissiveIntensity=1.8;$e.textContent=Xt(N,"lengthObjective"),et.textContent=Xt(N,"lengthHint");for(const e of je)e.userData.type==="wand-length"&&(e.visible=!0,e.userData.pedestal.visible=!0,e.userData.lengthLabel.visible=!0);le(Xt(N,"coreSuccess"),3800)}}function f1(i){if(!P.progress.includes("length")){if(P=S_(P,i.userData.inches),Cl(),!P.accepted){const e=Xt(N,P.feedback==="too-short"?"tooShort":"tooLong");de.color.setHex(3302042),i.rotation.y+=Math.PI/3,le(Xt(N,"wrongLength",{label:ye(N,i.userData.label),direction:e}),3300),setTimeout(()=>{yt===2&&de.color.setHex(12032624)},480);return}i.userData.selected=!0;for(const e of i.userData.glowMaterials)e.emissive.setHex(16042333),e.emissiveIntensity=2;wi.userData.unlocked=!0,$e.textContent=Xt(N,"completeObjective"),et.textContent=Xt(N,"completeHint"),le(Xt(N,"completeMessage"),4600)}}function p1(i){if(!i.userData.selected){if(P=M_(P,i.userData.symbolId),ad(),!P.accepted){i.rotation.z+=Math.PI/12;const e=Qs.reminders[P.progress.length];le(cn(N,"wrong",{label:ye(N,i.userData.label),reminder:ye(N,e)}),3600);return}i.userData.selected=!0;for(const e of i.userData.glowMaterials)e.emissive.setHex(15774780),e.emissiveIntensity=1.8;if(P.trait==="courage"){$e.textContent=cn(N,"courageObjective"),et.textContent=cn(N,"courageHint"),le(cn(N,"courageMessage"),3800);return}if(P.trait==="loyalty"){$e.textContent=cn(N,"loyaltyObjective"),et.textContent=cn(N,"loyaltyHint"),le(cn(N,"loyaltyMessage"),3800);return}if(P.trait==="wisdom"){$e.textContent=cn(N,"wisdomObjective"),et.textContent=cn(N,"wisdomHint"),le(cn(N,"wisdomMessage"),3800);return}$e.textContent=cn(N,"completeObjective"),et.textContent=cn(N,"completeHint"),xo(localStorage,{book:1,chapter:1,room:4}),Qt.textContent=cn(N,"completeKicker"),tn.textContent=cn(N,"completeTitle"),ot.classList.remove("hidden"),setTimeout(()=>ot.classList.add("hidden"),2200),le(cn(N,"completeMessage"),5200)}}function m1(i){if(!(i.userData.selected||P.unlocked)){if(P=Bv(P,i.userData.stairId),ld(),!P.accepted){for(const e of je)e.userData.type==="stair-route"&&(e.userData.selected=!1,e.material.emissiveIntensity=.4);de.color.setHex(10106950),le(qn(N,"wrong",{label:ye(N,i.userData.label)}),3600),setTimeout(()=>{yt===4&&de.color.setHex(8885949)},520);return}if(i.userData.selected=!0,i.material.emissive.setHex(14138724),i.material.emissiveIntensity=1.8,!P.unlocked){const e=["firstHint","secondHint"];$e.textContent=qn(N,"progress",{count:P.progress.length}),et.textContent=qn(N,e[P.progress.length-1]),le(qn(N,"accepted",{label:ye(N,i.userData.label)}),3e3);return}$e.textContent=qn(N,"completeObjective"),et.textContent=qn(N,"completeHint"),ft(localStorage,{book:1,chapter:2,room:1}),Qt.textContent=qn(N,"transitionKicker"),tn.textContent=qn(N,"transitionTitle"),ot.classList.remove("hidden"),le(qn(N,"completionMessage"),4200),setTimeout(()=>{Wt(5),ft(localStorage,{book:1,chapter:2,room:2})},700),setTimeout(()=>{ot.classList.add("hidden"),le(qn(N,"nextRoomMessage"),4200)},1600)}}function g1(i){if(i.userData.selected||P.unlocked)return;if(P=Hv(P,i.userData.portraitId),cd(),!P.accepted){for(const t of je)t.userData.type==="portrait-testimony"&&(t.userData.selected=!1,t.material.emissiveIntensity=.28);de.color.setHex(10697814),le(jn(N,"wrong",{label:ye(N,i.userData.label),count:P.suspicion}),3600),setTimeout(()=>{yt===5&&de.color.setHex(10192813)},520);return}if(i.userData.selected=!0,i.material.emissive.setHex(13940836),i.material.emissiveIntensity=1.5,!P.unlocked){const t=["firstHint","secondHint"];$e.textContent=jn(N,"progress",{count:P.progress.length}),et.textContent=jn(N,t[P.progress.length-1]),le(jn(N,"accepted",{quote:ye(N,i.userData.quote)}),3800);return}const e=ye(N,P.password);$e.textContent=jn(N,"completeObjective"),et.textContent=jn(N,"completeHint",{password:e}),ft(localStorage,{book:1,chapter:2,room:2}),Qt.textContent=jn(N,"transitionKicker"),tn.textContent=jn(N,"transitionTitle"),ot.classList.remove("hidden"),le(jn(N,"completionMessage",{password:e}),5200),setTimeout(()=>{Wt(6),ft(localStorage,{book:1,chapter:2,room:3})},700),setTimeout(()=>{ot.classList.add("hidden"),le(jn(N,"nextRoomMessage"),4400)},1600)}function v1(i){if(!(i.userData.selected||P.unlocked)){if(P=Gv(P,i.userData.hidingPlaceId),ud(),!P.accepted){for(const e of je)e.userData.type==="patrol-cover"&&(e.userData.selected=!1,e.material.emissiveIntensity=e.userData.hidingPlaceId==="tapestry"?.35:.25);de.color.setHex(10631986),le(`“${i.userData.label}”暴露在灯光下！路线清空，警戒升至 ${P.alert}。`,3800),setTimeout(()=>{yt===6&&de.color.setHex(7505569)},560);return}if(i.userData.selected=!0,i.material.emissive.setHex(7780260),i.material.emissiveIntensity=1.6,!P.unlocked){const e=["灯光从盔甲旁掠过。趁管理员背对走廊，拨动猫铃把脚步引开。","猫铃在反方向响起。现在沿阴影抵达独角兽挂毯后的暗门。"];$e.textContent=`潜行路线已完成 ${P.progress.length} / 3`,et.textContent=e[P.progress.length-1],le(`${i.userData.label}生效，巡夜灯光没有发现你。`,3400);return}$e.textContent="管理员的巡夜完成：独角兽挂毯后的暗门已经打开",et.textContent="盔甲遮住身形，猫铃引开脚步，挂毯后传来三道低沉的呼吸声。",ft(localStorage,{book:1,chapter:2,room:3}),Qt.textContent="第一部 · 第二章 · 第 3 关完成",tn.textContent="活板门后的呼吸",ot.classList.remove("hidden"),le("暗门无声开启——正在进入三头犬守卫的禁区！",5200),setTimeout(()=>{Wt(7),ft(localStorage,{book:1,chapter:2,room:4})},700),setTimeout(()=>{ot.classList.add("hidden"),le("第四关已加载：解读乐谱，用三件乐器让守门生物沉睡。",4400)},1600)}}function _1(i){if(!(i.userData.selected||P.unlocked)){if(P=zv(P,i.userData.instrumentId),dd(),!P.accepted){for(const e of je)e.userData.type==="lullaby-instrument"&&(e.userData.selected=!1,e.material.emissiveIntensity=.28);de.color.setHex(10697519),le(Xn(N,"wrong",{label:ye(N,i.userData.label),count:P.wakefulness}),3900),setTimeout(()=>{yt===7&&de.color.setHex(6649183)},620);return}if(i.userData.selected=!0,i.material.emissive.setHex(7907971),i.material.emissiveIntensity=1.7,!P.unlocked){const e=P.progress.length===1?"firstHint":"secondHint";$e.textContent=Xn(N,"progress",{count:P.progress.length}),et.textContent=Xn(N,e),le(Xn(N,"accepted",{label:ye(N,i.userData.label)}),3500);return}$e.textContent=Xn(N,"completeObjective"),et.textContent=Xn(N,"completeHint"),xo(localStorage,{book:1,chapter:2,room:4}),Qt.textContent=Xn(N,"transitionKicker"),tn.textContent=Xn(N,"transitionTitle"),ot.classList.remove("hidden"),le(Xn(N,"completionMessage"),5600),setTimeout(()=>{Wt(8),ft(localStorage,{book:1,chapter:3,room:1})},900),setTimeout(()=>{ot.classList.add("hidden"),le(Xn(N,"nextRoomMessage"),4800)},1900)}}function x1(i){if(!(i.userData.selected||P.unlocked)){if(P=qv(P,i.userData.deliveryId),hd(),!P.accepted){for(const e of je)e.userData.type==="flying-delivery"&&(e.userData.selected=!1,e.material.emissiveIntensity=.35);de.color.setHex(11950946),le(`“${i.userData.label}”撞入逆风！遗失物重新散落，乱流升至 ${P.turbulence}。`,3900),setTimeout(()=>{yt===8&&de.color.setHex(10471392)},620);return}if(i.userData.selected=!0,i.material.emissive.setHex(15912551),i.material.emissiveIntensity=1.7,!P.unlocked){const e=["轻围巾顺着低风回到守门员手中。接着让月纹笔记穿过中央风环。","笔记平稳落到学者怀里。最后把最重的黄铜罗盘送上高风。"];$e.textContent=`遗失物已安全送回 ${P.progress.length} / 3`,et.textContent=e[P.progress.length-1],le(`${i.userData.label}沿安全轨迹完成投递。`,3400);return}$e.textContent="飞行课完成：三件遗失物全部回到主人手中",et.textContent="低风托轻物，中环承纸页，高风送黄铜。远处洗手间传来沉重脚步，下一道悬浮机关即将开启。",ft(localStorage,{book:1,chapter:3,room:1}),Qt.textContent="第一部 · 第三章 · 第 1 关完成",tn.textContent="顺风归还",ot.classList.remove("hidden"),le("罗盘越过最高风环——正在赶往传出沉重脚步的洗手间！",5200),setTimeout(()=>{Wt(9),ft(localStorage,{book:1,chapter:3,room:2})},800),setTimeout(()=>{ot.classList.add("hidden"),le("第二关已加载：稳定三道悬浮机关，在巨怪逼近前架出逃生路线。",4800)},1750)}}function b1(i){if(!(i.userData.selected||P.unlocked)){if(P=Xv(P,i.userData.obstacleId),fd(),!P.accepted){for(const e of je)e.userData.type==="troll-obstacle"&&(e.userData.selected=!1,e.material.emissiveIntensity=e.userData.baseEmissiveIntensity);de.color.setHex(11750975),le(Bn(N,"wrong",{label:ye(N,i.userData.label),count:P.danger}),3900),setTimeout(()=>{yt===9&&de.color.setHex(9217704)},620);return}if(i.userData.selected=!0,i.material.emissive.setHex(6669746),i.material.emissiveIntensity=1.7,!P.unlocked){const e=P.progress.length===1?"firstHint":"secondHint";$e.textContent=Bn(N,"progress",{count:P.progress.length}),et.textContent=Bn(N,e),le(Bn(N,"accepted",{label:ye(N,i.userData.label)}),3400);return}$e.textContent=Bn(N,"completeObjective"),et.textContent=Bn(N,"completeHint"),ft(localStorage,{book:1,chapter:3,room:2}),Qt.textContent=Bn(N,"transitionKicker"),tn.textContent=Bn(N,"transitionTitle"),ot.classList.remove("hidden"),le(Bn(N,"completionMessage"),5200),setTimeout(()=>{Wt(10),ft(localStorage,{book:1,chapter:3,room:3})},800),setTimeout(()=>{ot.classList.add("hidden"),le(Bn(N,"nextRoomMessage"),4800)},1750)}}function y1(i){if(!(i.userData.selected||P.unlocked)){if(P=Wv(P,i.userData.bookId),pd(),!P.accepted){for(const e of je)e.userData.type==="restricted-book"&&(e.userData.selected=!1,e.material.emissiveIntensity=.32);de.color.setHex(11615587),le(`“${i.userData.label}”发出尖叫！书脊时间线清空，噪声升至 ${P.noise}。`,3900),setTimeout(()=>{yt===10&&de.color.setHex(6714779)},620);return}if(i.userData.selected=!0,i.material.emissive.setHex(7311316),i.material.emissiveIntensity=1.8,!P.unlocked){const e=["建校录的四枚徽记亮起。下一本应记录数百年后的北境灾变。","龙灾账册安静归位。最后选择本年刚修订的天象纪事。"];$e.textContent=`历史时间线已恢复 ${P.progress.length} / 3`,et.textContent=e[P.progress.length-1],le(`${i.userData.label}年代吻合，出口封印出现一道裂纹。`,3400);return}$e.textContent="禁书区完成：三本历史书脊已按年代归位，镜廊出口显现",et.textContent="建校、龙灾、月蚀串成完整时间线。书架深处的银镜映出下一道谜题。",ft(localStorage,{book:1,chapter:3,room:3}),Qt.textContent="第一部 · 第三章 · 第 3 关完成",tn.textContent="无声时间线",ot.classList.remove("hidden"),le("最后一本纪事归位——银镜正在把你引向镜廊深处！",5200),setTimeout(()=>{Wt(11),ft(localStorage,{book:1,chapter:3,room:4})},800),setTimeout(()=>{ot.classList.add("hidden"),le("第四关已加载：比较镜像与现实，选择真正需要而非渴望的物品。",4800)},1750)}}function S1(i){if(!(i.userData.selected||P.unlocked)){if(P=Vv(P,i.userData.itemId),md(),!P.accepted){for(const e of je)e.userData.type==="mirror-choice"&&(e.userData.selected=!1,e.material.emissiveIntensity=.34);de.color.setHex(10303596),le(`“${i.userData.label}”只是镜中的欲望！现实线索消散，幻象增强至 ${P.illusion}。`,4200),setTimeout(()=>{yt===11&&de.color.setHex(8885688)},650);return}if(i.userData.selected=!0,i.material.emissive.setHex(12114112),i.material.emissiveIntensity=1.8,!P.unlocked){const e=["斗篷挡住镜廊寒风。出口仍一片漆黑，寻找能照清现实道路的物品。","提灯照出两组脚印。最后选择代表共同离开、而非独占荣耀的信物。"];$e.textContent=`现实所需已确认 ${P.progress.length} / 3`,et.textContent=e[P.progress.length-1],le(`${i.userData.label}没有出现在华丽镜像中，却解决了眼前的真实困境。`,3900);return}$e.textContent="镜中秘密完成：你选择了御寒、照路与同行，而非王冠和金杯",et.textContent="魔镜的幻象退去，现实出口在同伴木牌的微光中显现。地下传来藤蔓摩擦石壁的声音。",xo(localStorage,{book:1,chapter:3,room:4}),Qt.textContent="第一部 · 第三章完成",tn.textContent="现实所需",ot.classList.remove("hidden"),le("同伴木牌照亮出口——正在下降至地下试炼的魔鬼网！",5600),setTimeout(()=>{Wt(12),ft(localStorage,{book:1,chapter:4,room:1})},900),setTimeout(()=>{ot.classList.add("hidden"),le(Yn(N,"roomLoadedMessage"),5e3)},1900)}}function M1(i){if(!(i.userData.selected||P.unlocked)){if(P=$v(P,i.userData.actionId),gd(),!P.accepted){for(const e of je)e.userData.type==="devils-snare-action"&&(e.userData.selected=!1,e.material.emissiveIntensity=.5);de.color.setHex(10961976),le(Yn(N,"wrong",{label:ye(N,i.userData.label),count:P.constriction}),4100),setTimeout(()=>{yt===12&&de.color.setHex(7179368)},680);return}if(i.userData.selected=!0,i.material.emissive.setHex(7981032),i.material.emissiveIntensity=1.9,!P.unlocked){const e=P.progress.length===1?"firstHint":"secondHint";$e.textContent=Yn(N,"progress",{count:P.progress.length}),et.textContent=Yn(N,e),le(Yn(N,"accepted",{label:ye(N,i.userData.label)}),3600);return}$e.textContent=Yn(N,"completeObjective"),et.textContent=Yn(N,"completeHint"),ft(localStorage,{book:1,chapter:4,room:1}),Qt.textContent=Yn(N,"transitionKicker"),tn.textContent=Yn(N,"transitionTitle"),ot.classList.remove("hidden"),le(Yn(N,"completionMessage"),5200),setTimeout(()=>{Wt(13),ft(localStorage,{book:1,chapter:4,room:2})},900),setTimeout(()=>{ot.classList.add("hidden"),le(Dn(N,"roomLoadedMessage"),4800)},1900)}}function E1(i){if(!(i.userData.selected||P.unlocked)){if(P=Kv(P,i.userData.clueId),vd(),!P.accepted){for(const e of je)e.userData.type==="flying-key-clue"&&(e.userData.selected=!1,e.material.emissiveIntensity=.48);de.color.setHex(10898514),le(Dn(N,"wrong",{label:ye(N,i.userData.label),count:P.pursuit}),4200),setTimeout(()=>{yt===13&&de.color.setHex(8558262)},700);return}if(i.userData.selected=!0,i.material.emissive.setHex(12575743),i.material.emissiveIntensity=1.9,!P.unlocked){const e=P.progress.length===1?"firstHint":"secondHint";$e.textContent=Dn(N,"progress",{count:P.progress.length}),et.textContent=Dn(N,e),le(Dn(N,"accepted",{label:ye(N,i.userData.label)}),3700);return}$e.textContent=Dn(N,"completeObjective"),et.textContent=Dn(N,"completeHint"),ft(localStorage,{book:1,chapter:4,room:2}),Qt.textContent=Dn(N,"transitionKicker"),tn.textContent=Dn(N,"transitionTitle"),ot.classList.remove("hidden"),le(Dn(N,"completionMessage"),5400),setTimeout(()=>{Wt(14),ft(localStorage,{book:1,chapter:4,room:3})},900),setTimeout(()=>{ot.classList.add("hidden"),le(Dn(N,"nextRoomMessage"),4800)},1900)}}function w1(i){if(!(i.userData.selected||P.unlocked)){if(P=Yv(P,i.userData.moveId),_d(),!P.accepted){for(const e of je)e.userData.type==="wizard-chess-move"&&(e.userData.selected=!1,e.material.emissiveIntensity=.36);de.color.setHex(10569547),le(Hn(N,"wrong",{label:ye(N,i.userData.label),count:P.captured}),4300),setTimeout(()=>{yt===14&&de.color.setHex(10132646)},720);return}if(i.userData.selected=!0,i.material.emissive.setHex(14214084),i.material.emissiveIntensity=1.9,!P.unlocked){const e=P.progress.length===1?"firstHint":"secondHint";$e.textContent=Hn(N,"progress",{count:P.progress.length}),et.textContent=Hn(N,e),le(Hn(N,"accepted",{label:ye(N,i.userData.label)}),3800);return}$e.textContent=Hn(N,"completeObjective"),et.textContent=Hn(N,"completeHint"),ft(localStorage,{book:1,chapter:4,room:3}),Qt.textContent=Hn(N,"transitionKicker"),tn.textContent=Hn(N,"transitionTitle"),ot.classList.remove("hidden"),le(Hn(N,"completionMessage"),5400),setTimeout(()=>{Wt(15),ft(localStorage,{book:1,chapter:4,room:4})},900),setTimeout(()=>{ot.classList.add("hidden"),le(Hn(N,"nextRoomMessage"),5e3)},1900)}}function T1(i){if(!(i.userData.selected||P.unlocked)){if(P=jv(P,i.userData.clueId),xd(),!P.accepted){for(const e of je)e.userData.type==="stone-chamber-clue"&&(e.userData.selected=!1,e.material.emissiveIntensity=.4);de.color.setHex(11615564),le(Gn(N,"wrong",{label:ye(N,i.userData.label),count:P.corruption}),4400),setTimeout(()=>{yt===15&&de.color.setHex(10258354)},720);return}if(i.userData.selected=!0,i.material.emissive.setHex(14272255),i.material.emissiveIntensity=1.9,!P.unlocked){const e=P.progress.length===1?"firstHint":"secondHint";$e.textContent=Gn(N,"progress",{count:P.progress.length}),et.textContent=Gn(N,e),le(Gn(N,"accepted",{label:ye(N,i.userData.label)}),3900);return}$e.textContent=Gn(N,"completeObjective"),et.textContent=Gn(N,"completeHint"),xo(localStorage,{book:1,chapter:4,room:4}),Qt.textContent=Gn(N,"transitionKicker"),tn.textContent=Gn(N,"transitionTitle"),ot.classList.remove("hidden"),le(Gn(N,"completionMessage"),6500),setTimeout(()=>{Wt(16),ft(localStorage,{book:2,chapter:1,room:1})},1e3),setTimeout(()=>{ot.classList.add("hidden"),le(Gn(N,"nextRoomMessage"),5200)},2100)}}function A1(i){if(!(i.userData.selected||P.unlocked)){if(P=Qv(P,i.userData.objectId),bd(),!P.accepted){for(const e of je)e.userData.type==="elf-blockade-trace"&&(e.userData.selected=!1,e.material.emissiveIntensity=.38);de.color.setHex(10764108),le(Vn(N,"wrong",{label:ye(N,i.userData.label),count:P.interference}),4300),setTimeout(()=>{yt===16&&de.color.setHex(8494477)},720);return}if(i.userData.selected=!0,i.material.emissive.setHex(11004868),i.material.emissiveIntensity=1.9,!P.unlocked){const e=P.progress.length===1?"firstHint":"secondHint";$e.textContent=Vn(N,"progress",{count:P.progress.length}),et.textContent=Vn(N,e),le(Vn(N,"accepted",{label:ye(N,i.userData.label)}),3800);return}$e.textContent=Vn(N,"completeObjective"),et.textContent=Vn(N,"completeHint"),ft(localStorage,{book:2,chapter:1,room:1}),Qt.textContent=Vn(N,"transitionKicker"),tn.textContent=Vn(N,"transitionTitle"),ot.classList.remove("hidden"),le(Vn(N,"completionMessage"),6200),setTimeout(()=>{Wt(17),ft(localStorage,{book:2,chapter:1,room:2})},900),setTimeout(()=>{ot.classList.add("hidden"),le(Vn(N,"nextRoomMessage"),5e3)},1900)}}function C1(i){if(!(i.userData.selected||P.unlocked)){if(P=Jv(P,i.userData.controlId),yd(),!P.accepted){for(const e of je)e.userData.type==="flying-car-control"&&(e.userData.selected=!1,e.material.emissiveIntensity=.4);de.color.setHex(11617612),Nt.rotation.z=.08,le(Wn(N,"wrong",{label:ye(N,i.userData.label),count:P.turbulence}),4300),setTimeout(()=>{yt===17&&(de.color.setHex(7440544),Nt.rotation.z=0)},720);return}if(i.userData.selected=!0,i.material.emissive.setHex(12052223),i.material.emissiveIntensity=.8,!P.unlocked){const e=P.progress.length===1?"firstHint":"secondHint";$e.textContent=Wn(N,"progress",{count:P.progress.length}),et.textContent=Wn(N,e),le(Wn(N,"accepted",{label:ye(N,i.userData.label)}),3700);return}$e.textContent=Wn(N,"completeObjective"),et.textContent=Wn(N,"completeHint"),ft(localStorage,{book:2,chapter:1,room:2}),Qt.textContent=Wn(N,"transitionKicker"),tn.textContent=Wn(N,"transitionTitle"),ot.classList.remove("hidden"),le(Wn(N,"completionMessage"),6200),setTimeout(()=>{Wt(18),ft(localStorage,{book:2,chapter:1,room:3})},900),setTimeout(()=>{ot.classList.add("hidden"),le(Wn(N,"nextRoomMessage"),5200)},1900)}}function R1(i){if(!(i.userData.selected||P.unlocked)){if(P=Zv(P,i.userData.actionId),Sd(),!P.accepted){for(const e of je)e.userData.type==="willow-rhythm"&&(e.userData.selected=!1,e.traverse(t=>{t.material?.emissive&&(t.material.emissiveIntensity=.4)}));de.color.setHex(11750211),Nt.rotation.z=-.07,le(ci(N,"wrong",{label:ye(N,i.userData.label),count:P.bruises}),4300),setTimeout(()=>{yt===18&&(de.color.setHex(8228772),Nt.rotation.z=0)},720);return}if(i.userData.selected=!0,i.traverse(e=>{e.material?.emissive&&(e.material.emissive.setHex(13037485),e.material.emissiveIntensity=1.9)}),!P.unlocked){const e=P.progress.length===1?"firstHint":"secondHint";$e.textContent=ci(N,"progress",{count:P.progress.length}),et.textContent=ci(N,e),le(ci(N,"accepted",{label:ye(N,i.userData.label)}),3700);return}$e.textContent=ci(N,"completeObjective"),et.textContent=ci(N,"completeHint"),ft(localStorage,{book:2,chapter:1,room:3}),Qt.textContent=ci(N,"transitionKicker"),tn.textContent=ci(N,"transitionTitle"),ot.classList.remove("hidden"),setTimeout(()=>ot.classList.add("hidden"),3e3),le(ci(N,"completionMessage"),6200)}}function I1(i){if(no)return;const e=wl(i);e&&(no=!0,Qt.textContent=yt===2?Xt(N,"transitionKicker",{room:i+1}):`第一部 · 第一章 · 第 ${i+1} 关`,tn.textContent=ye(N,e.name),ot.classList.remove("hidden"),setTimeout(()=>{Wt(i),ft(localStorage,{book:1,chapter:1,room:i+1})},600),setTimeout(()=>{ot.classList.add("hidden"),no=!1;const n={1:"第二关已加载：进入对角巷，按清单顺序采购。",2:"第三关已加载：你已进入奥利凡德魔杖店。",3:Xt(N,"arrival")}[i]??`第 ${i+1} 关已加载。`;le(n,4200)},1450))}function L1(i){const e=E_({roomIndex:yt,unlocked:i.userData.unlocked});if(!e.advanced){const n=4-P.progress.length;le(`门还没有认可你：还需完成 ${n} 个正确步骤。`);return}if(i.userData.opening)return;i.userData.opening=!0;const t=wl(e.roomIndex);if(t){if(yt===2){const n=ye(N,t.name);$e.textContent=Xt(N,"doorOpening",{room:e.roomIndex+1,name:n}),le(Xt(N,"roomComplete",{name:n}),2600)}else $e.textContent=`门正在打开：准备进入第 ${e.roomIndex+1} 关“${t.name}”`,le(`第 ${yt+1} 关完成！正在前往“${t.name}”……`,2600);setTimeout(()=>I1(e.roomIndex),1050)}}function Ed(){al.setFromCamera(new we(0,0),Nt);const i=je.filter(r=>r.visible),e=al.intersectObjects(i,!0)[0]?.object??null;if(ze=yv(e,i),Ys.classList.toggle("visible",!!ze),!ze)return;const t=Ce(Be?"action.touch":"action.keyboard"),n=ze.userData,s=ye(N,n.label??n.destination??ze.name);n.type==="shopping-item"?Ys.textContent=`${t} ${s} · ${n.price} G`:n.type==="door"&&!n.unlocked?Ys.textContent=`${s} · ${Ce("campaign.locked")}`:Ys.textContent=`${t} ${s}`}function wd(){!Un.isLocked&&!mr||!ze||no||(ze.userData.type==="owl-letter"?l1(ze):ze.userData.type==="shopping-item"?u1(ze):ze.userData.type==="wand-wood"?d1(ze):ze.userData.type==="wand-core"?h1(ze):ze.userData.type==="wand-length"?f1(ze):ze.userData.type==="sorting-clue"?p1(ze):ze.userData.type==="stair-route"?m1(ze):ze.userData.type==="portrait-testimony"?g1(ze):ze.userData.type==="patrol-cover"?v1(ze):ze.userData.type==="lullaby-instrument"?_1(ze):ze.userData.type==="flying-delivery"?x1(ze):ze.userData.type==="troll-obstacle"?b1(ze):ze.userData.type==="restricted-book"?y1(ze):ze.userData.type==="mirror-choice"?S1(ze):ze.userData.type==="devils-snare-action"?M1(ze):ze.userData.type==="flying-key-clue"?E1(ze):ze.userData.type==="wizard-chess-move"?w1(ze):ze.userData.type==="stone-chamber-clue"?T1(ze):ze.userData.type==="elf-blockade-trace"?A1(ze):ze.userData.type==="flying-car-control"?C1(ze):ze.userData.type==="willow-rhythm"?R1(ze):ze.userData.type==="door"&&L1(ze))}function Td(){document.documentElement.lang=N,document.title=Ce("document.title"),document.querySelector("#start-brand").textContent=Ce("start.brand"),document.querySelector("#start-title").textContent=Ce("start.title"),document.querySelector("#start-description").textContent=Ce("start.description"),pr.textContent=Ce("start.play"),bo.textContent=Ce("start.continue"),co.textContent=Ce("start.restart"),document.querySelector("#campaign-button").textContent=Ce("start.campaign"),rd.textContent=Ce("start.language"),en.textContent=Ce(Tn==="playing"?"voice.stop":"voice.play"),en.disabled=Tn==="loading",en.setAttribute("aria-busy",String(Tn==="loading")),en.setAttribute("aria-pressed",String(Tn==="playing")),er.textContent=Ce(`voice.${Tn==="idle"?"ready":Tn}`),A_.textContent=Ce("voice.subtitle"),document.querySelector(".desktop-help").textContent=Ce("help.desktop"),document.querySelector(".mobile-help").textContent=Ce("help.mobile"),document.querySelector("#look-zone span").textContent=Ce("mobile.look"),document.querySelector("#interact-button").textContent=Ce("mobile.interact"),document.querySelector(".campaign-header h2").textContent=Ce("campaign.title"),document.querySelector("#campaign-screen").setAttribute("aria-label",Ce("campaign.title")),document.querySelector("#campaign-close").setAttribute("aria-label",Ce("campaign.close")),document.querySelector("#book-tabs").setAttribute("aria-label",Ce("campaign.selectBook")),Qt.textContent=Ce("transition.next"),od?.render()}function yo(){ol+=1,ws.pause(),ws.currentTime=0,Tn="idle",en.disabled=!1,en.setAttribute("aria-busy","false"),en.setAttribute("aria-pressed","false"),en.textContent=Ce("voice.play"),er.textContent=Ce("voice.ready")}en.addEventListener("click",async()=>{if(Tn==="playing"){yo();return}if(!kv({playbackState:Tn,muted:!1}))return;const i=Ov("intro",N),e=++ol;Tn="loading",en.disabled=!0,en.setAttribute("aria-busy","true"),er.textContent=Ce("voice.loading");const t=await Fv({audio:ws,source:i?`/Hogwarts-Escape-Room-3D-Play/${i}`:null,muted:!1});if(e!==ol){ws.pause(),ws.currentTime=0;return}en.disabled=!1,en.setAttribute("aria-busy","false"),t==="playing"?(Tn="playing",en.textContent=Ce("voice.stop"),en.setAttribute("aria-pressed","true"),er.textContent=Ce("voice.playing")):(Tn="idle",en.textContent=Ce("voice.play"),en.setAttribute("aria-pressed","false"),er.textContent=Ce("voice.failed"))});ws.addEventListener("ended",yo);for(const i of document.querySelectorAll("[data-language]"))i.addEventListener("click",()=>{yo(),N=Iv(localStorage,i.dataset.language),Ce=fr(N),Td(),Wt(yt),uo.classList.add("hidden"),uo.setAttribute("aria-hidden","true")});rd.addEventListener("click",()=>{uo.classList.remove("hidden"),uo.removeAttribute("aria-hidden")});Td();pr.addEventListener("click",()=>{yo(),Be?(mr=!0,Al.classList.add("hidden"),w_.classList.add("active")):Un.lock()});(wl(Ks)||Number.isInteger(Ks)&&Ks>=4&&Ks<=18)&&(bo.classList.remove("hidden"),co.classList.remove("hidden"));bo.addEventListener("click",()=>{Wt(Ks),pr.click()});co.addEventListener("click",()=>{Ev(localStorage),bo.classList.add("hidden"),co.classList.add("hidden"),Wt(0),pr.click()});Un.addEventListener("lock",()=>Al.classList.add("hidden"));Un.addEventListener("unlock",()=>Al.classList.remove("hidden"));od=Uv({getProgress:()=>ju(localStorage),getLanguage:()=>N,getTranslator:()=>Ce,onPlay:i=>{const t={"b1-c2-r1":4,"b1-c2-r2":5,"b1-c2-r3":6,"b1-c2-r4":7,"b1-c3-r1":8,"b1-c3-r2":9,"b1-c3-r3":10,"b1-c3-r4":11,"b1-c4-r1":12,"b1-c4-r2":13,"b1-c4-r3":14,"b1-c4-r4":15,"b2-c1-r1":16,"b2-c1-r2":17,"b2-c1-r3":18}[i.id]??0;Wt(t),t>=16?ft(localStorage,{book:2,chapter:1,room:t-15}):t>=12?ft(localStorage,{book:1,chapter:4,room:t-11}):t>=8?ft(localStorage,{book:1,chapter:3,room:t-7}):t>=4&&ft(localStorage,{book:1,chapter:2,room:t-3}),pr.click()}});const ys={};addEventListener("keydown",i=>{ys[i.code]=!0,i.code==="KeyE"&&wd()});addEventListener("keyup",i=>{ys[i.code]=!1});const yi={forward:0,right:0},ho=document.querySelector("#joystick"),Ad=document.querySelector("#joystick-knob");let fo=null,cl={x:0,y:0};function Cd(i){const e=i.clientX-cl.x,t=i.clientY-cl.y,n=Math.hypot(e,t)||1,s=34,r=Math.min(1,s/n),o=e*r,a=t*r;Ad.style.transform=`translate(${o}px, ${a}px)`,yi.right=o/s,yi.forward=-a/s}ho.addEventListener("touchstart",i=>{const e=i.changedTouches[0],t=ho.getBoundingClientRect();fo=e.identifier,cl={x:t.left+t.width/2,y:t.top+t.height/2},Cd(e),i.preventDefault()},{passive:!1});ho.addEventListener("touchmove",i=>{const e=[...i.changedTouches].find(t=>t.identifier===fo);e&&Cd(e),i.preventDefault()},{passive:!1});ho.addEventListener("touchend",i=>{[...i.changedTouches].some(e=>e.identifier===fo)&&(fo=null,yi.forward=0,yi.right=0,Ad.style.transform="translate(0,0)")},{passive:!1});const qi=document.querySelector("#look-zone");let lr=null,io={x:0,y:0};qi.addEventListener("pointerdown",i=>{!mr||lr!==null||(lr=i.pointerId,io={x:i.clientX,y:i.clientY},qi.setPointerCapture(i.pointerId),i.preventDefault())});qi.addEventListener("pointermove",i=>{if(!mr||i.pointerId!==lr)return;const e=new Rn().setFromQuaternion(Nt.quaternion,"YXZ"),t=bv({yaw:e.y,pitch:e.x},{dx:i.clientX-io.x,dy:i.clientY-io.y});e.y=t.yaw,e.x=t.pitch,Nt.quaternion.setFromEuler(e),io={x:i.clientX,y:i.clientY},i.preventDefault()});function Rd(i){i.pointerId===lr&&(qi.hasPointerCapture(i.pointerId)&&qi.releasePointerCapture(i.pointerId),lr=null)}qi.addEventListener("pointerup",Rd);qi.addEventListener("pointercancel",Rd);document.querySelector("#interact-button").addEventListener("pointerdown",i=>{i.preventDefault(),wd()});const cu=new Tf;function Id(){requestAnimationFrame(Id);const i=Math.min(cu.getDelta(),.05),e=cu.elapsedTime;for(const t of Tt)t.object.visible&&(t.object.position.y=t.baseY+Math.sin(e*1.35+t.phase)*t.bob,t.spin&&(t.object.rotation.y+=i*t.spin));if(Un.isLocked||mr){const t=5*i,n=Nt.position.clone();ys.KeyW&&Un.moveForward(t),ys.KeyS&&Un.moveForward(-t),ys.KeyA&&Un.moveRight(-t),ys.KeyD&&Un.moveRight(t),yi.forward&&Un.moveForward(t*yi.forward),yi.right&&Un.moveRight(t*yi.right),Nt.position.y=1.7,(Math.abs(Nt.position.x)>ou.x||Math.abs(Nt.position.z)>ou.z)&&Nt.position.copy(n),Ed()}wi?.userData.opening&&wi.userData.pivot.rotation.y>-Math.PI*.48&&(wi.userData.pivot.rotation.y-=i*1.55),Ci.render(Rt,Nt)}Wt(0);Id();addEventListener("resize",()=>{Nt.aspect=innerWidth/innerHeight,Nt.updateProjectionMatrix(),Ci.setSize(innerWidth,innerHeight)});
