(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const va="179",Lu=0,qa=1,Iu=2,vc=1,xc=2,Vn=3,ai=0,an=1,xn=2,ii=0,tr=1,Ya=2,ja=3,$a=4,Uu=5,Si=100,Nu=101,Fu=102,Ou=103,ku=104,zu=200,Bu=201,Hu=202,Gu=203,Eo=204,To=205,Vu=206,Wu=207,Xu=208,qu=209,Yu=210,ju=211,$u=212,Ku=213,Zu=214,wo=0,Ao=1,Co=2,sr=3,Ro=4,Do=5,Po=6,Lo=7,yc=0,Ju=1,Qu=2,ri=0,ed=1,td=2,nd=3,id=4,rd=5,sd=6,od=7,Sc=300,or=301,ar=302,Io=303,Uo=304,Ps=306,No=1e3,bi=1001,Fo=1002,Cn=1003,ad=1004,Vr=1005,Un=1006,zs=1007,Ei=1008,Fn=1009,Mc=1010,bc=1011,Cr=1012,xa=1013,Ti=1014,Wn=1015,Ur=1016,ya=1017,Sa=1018,Rr=1020,Ec=35902,Tc=1021,wc=1022,An=1023,Dr=1026,Pr=1027,Ac=1028,Ma=1029,Cc=1030,ba=1031,Ea=1033,ms=33776,gs=33777,_s=33778,vs=33779,Oo=35840,ko=35841,zo=35842,Bo=35843,Ho=36196,Go=37492,Vo=37496,Wo=37808,Xo=37809,qo=37810,Yo=37811,jo=37812,$o=37813,Ko=37814,Zo=37815,Jo=37816,Qo=37817,ea=37818,ta=37819,na=37820,ia=37821,xs=36492,ra=36494,sa=36495,Rc=36283,oa=36284,aa=36285,la=36286,ld=3200,cd=3201,Dc=0,ud=1,ti="",on="srgb",lr="srgb-linear",bs="linear",ut="srgb",Pi=7680,Ka=519,dd=512,hd=513,fd=514,Pc=515,pd=516,md=517,gd=518,_d=519,ca=35044,Za="300 es",Nn=2e3,Es=2001;class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bs=Math.PI/180,ua=180/Math.PI;function si(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function vd(n,e){return(n%e+e)%e}function Hs(n,e,t){return(1-t)*n+t*e}function In(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],m=s[o+1],_=s[o+2],M=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=M;return}if(h!==M||l!==f||c!==m||u!==_){let p=1-a;const d=l*f+c*m+u*_+h*M,E=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const A=Math.sqrt(b),R=Math.atan2(A,d*E);p=Math.sin(p*R)/A,a=Math.sin(a*R)/A}const S=a*E;if(l=l*p+f*S,c=c*p+m*S,u=u*p+_*S,h=h*p+M*S,p===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],m=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*m-c*f,e[t+1]=l*_+u*f+c*h-a*m,e[t+2]=c*_+u*m+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"YXZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"ZXY":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"ZYX":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"YZX":this._x=f*u*h+c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h-f*m*_;break;case"XZY":this._x=f*u*h-c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ja.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ja.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gs.copy(this).projectOnVector(e),this.sub(Gs)}reflect(e){return this.sub(Gs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gs=new U,Ja=new Nr;class qe{constructor(e,t,i,r,s,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],_=i[8],M=r[0],p=r[3],d=r[6],E=r[1],b=r[4],S=r[7],A=r[2],R=r[5],D=r[8];return s[0]=o*M+a*E+l*A,s[3]=o*p+a*b+l*R,s[6]=o*d+a*S+l*D,s[1]=c*M+u*E+h*A,s[4]=c*p+u*b+h*R,s[7]=c*d+u*S+h*D,s[2]=f*M+m*E+_*A,s[5]=f*p+m*b+_*R,s[8]=f*d+m*S+_*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,m=c*s-o*l,_=t*h+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=h*M,e[1]=(r*c-u*i)*M,e[2]=(a*i-r*o)*M,e[3]=f*M,e[4]=(u*t-r*l)*M,e[5]=(r*s-a*t)*M,e[6]=m*M,e[7]=(i*l-c*t)*M,e[8]=(o*t-i*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Vs.makeScale(e,t)),this}rotate(e){return this.premultiply(Vs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vs=new qe;function Lc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ts(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xd(){const n=Ts("canvas");return n.style.display="block",n}const Qa={};function nr(n){n in Qa||(Qa[n]=!0,console.warn(n))}function yd(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const el=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tl=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sd(){const n={enabled:!0,workingColorSpace:lr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ut&&(r.r=qn(r.r),r.g=qn(r.g),r.b=qn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(r.r=ir(r.r),r.g=ir(r.g),r.b=ir(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ti?bs:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return nr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return nr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[lr]:{primaries:e,whitePoint:i,transfer:bs,toXYZ:el,fromXYZ:tl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:el,fromXYZ:tl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),n}const rt=Sd();function qn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ir(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Li;class Md{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Li===void 0&&(Li=Ts("canvas")),Li.width=e.width,Li.height=e.height;const r=Li.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Li}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ts("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=qn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qn(t[i]/255)*255):t[i]=qn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bd=0;class Ta{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ws(r[o].image)):s.push(Ws(r[o]))}else s=Ws(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ws(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Md.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ed=0;const Xs=new U;class nn extends Ri{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,i=bi,r=bi,s=Un,o=Ei,a=An,l=Fn,c=nn.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=si(),this.name="",this.source=new Ta(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xs).x}get height(){return this.source.getSize(Xs).y}get depth(){return this.source.getSize(Xs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case No:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case Fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case No:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case Fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Sc;nn.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],_=l[9],M=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-M)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+M)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(m+1)/2,A=(d+1)/2,R=(u+f)/4,D=(h+M)/4,L=(_+p)/4;return b>S&&b>A?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=R/i,s=D/i):S>A?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=L/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=D/s,r=L/s),this.set(i,r,s,t),this}let E=Math.sqrt((p-_)*(p-_)+(h-M)*(h-M)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(p-_)/E,this.y=(h-M)/E,this.z=(f-u)/E,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Td extends Ri{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new nn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ta(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends Td{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ic extends nn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wd extends nn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fr{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mn):Mn.fromBufferAttribute(s,o),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wr.copy(i.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),Xr.subVectors(this.max,fr),Ii.subVectors(e.a,fr),Ui.subVectors(e.b,fr),Ni.subVectors(e.c,fr),jn.subVectors(Ui,Ii),$n.subVectors(Ni,Ui),fi.subVectors(Ii,Ni);let t=[0,-jn.z,jn.y,0,-$n.z,$n.y,0,-fi.z,fi.y,jn.z,0,-jn.x,$n.z,0,-$n.x,fi.z,0,-fi.x,-jn.y,jn.x,0,-$n.y,$n.x,0,-fi.y,fi.x,0];return!qs(t,Ii,Ui,Ni,Xr)||(t=[1,0,0,0,1,0,0,0,1],!qs(t,Ii,Ui,Ni,Xr))?!1:(qr.crossVectors(jn,$n),t=[qr.x,qr.y,qr.z],qs(t,Ii,Ui,Ni,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const kn=[new U,new U,new U,new U,new U,new U,new U,new U],Mn=new U,Wr=new Fr,Ii=new U,Ui=new U,Ni=new U,jn=new U,$n=new U,fi=new U,fr=new U,Xr=new U,qr=new U,pi=new U;function qs(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){pi.fromArray(n,s);const a=r.x*Math.abs(pi.x)+r.y*Math.abs(pi.y)+r.z*Math.abs(pi.z),l=e.dot(pi),c=t.dot(pi),u=i.dot(pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ad=new Fr,pr=new U,Ys=new U;class wa{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ad.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);const t=pr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(pr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ys.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(Ys)),this.expandByPoint(pr.copy(e.center).sub(Ys))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const zn=new U,js=new U,Yr=new U,Kn=new U,$s=new U,jr=new U,Ks=new U;class Uc{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){js.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(js);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Yr),a=Kn.dot(this.direction),l=-Kn.dot(Yr),c=Kn.lengthSq(),u=Math.abs(1-o*o);let h,f,m,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const M=1/u;h*=M,f*=M,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(js).addScaledVector(Yr,f),m}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const i=zn.dot(this.direction),r=zn.dot(zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,i,r,s){$s.subVectors(t,e),jr.subVectors(i,e),Ks.crossVectors($s,jr);let o=this.direction.dot(Ks),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,e);const l=a*this.direction.dot(jr.crossVectors(Kn,jr));if(l<0)return null;const c=a*this.direction.dot($s.cross(Kn));if(c<0||l+c>o)return null;const u=-a*Kn.dot(Ks);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,t,i,r,s,o,a,l,c,u,h,f,m,_,M,p){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,f,m,_,M,p)}set(e,t,i,r,s,o,a,l,c,u,h,f,m,_,M,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=_,d[11]=M,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Fi.setFromMatrixColumn(e,0).length(),s=1/Fi.setFromMatrixColumn(e,1).length(),o=1/Fi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*h,_=a*u,M=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=f-M*c,t[9]=-a*l,t[2]=M-f*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,_=c*u,M=c*h;t[0]=f+M*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=M+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,_=c*u,M=c*h;t[0]=f-M*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=M-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,_=a*u,M=a*h;t[0]=l*u,t[4]=_*c-m,t[8]=f*c+M,t[1]=l*h,t[5]=M*c+f,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=a*l,M=a*c;t[0]=l*u,t[4]=M-f*h,t[8]=_*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+_,t[10]=f-M*h}else if(e.order==="XZY"){const f=o*l,m=o*c,_=a*l,M=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+M,t[5]=o*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*u,t[10]=M*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cd,e,Rd)}lookAt(e,t,i){const r=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Zn.crossVectors(i,dn),Zn.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Zn.crossVectors(i,dn)),Zn.normalize(),$r.crossVectors(dn,Zn),r[0]=Zn.x,r[4]=$r.x,r[8]=dn.x,r[1]=Zn.y,r[5]=$r.y,r[9]=dn.y,r[2]=Zn.z,r[6]=$r.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],_=i[2],M=i[6],p=i[10],d=i[14],E=i[3],b=i[7],S=i[11],A=i[15],R=r[0],D=r[4],L=r[8],y=r[12],v=r[1],w=r[5],k=r[9],z=r[13],G=r[2],K=r[6],j=r[10],J=r[14],V=r[3],ue=r[7],me=r[11],Ce=r[15];return s[0]=o*R+a*v+l*G+c*V,s[4]=o*D+a*w+l*K+c*ue,s[8]=o*L+a*k+l*j+c*me,s[12]=o*y+a*z+l*J+c*Ce,s[1]=u*R+h*v+f*G+m*V,s[5]=u*D+h*w+f*K+m*ue,s[9]=u*L+h*k+f*j+m*me,s[13]=u*y+h*z+f*J+m*Ce,s[2]=_*R+M*v+p*G+d*V,s[6]=_*D+M*w+p*K+d*ue,s[10]=_*L+M*k+p*j+d*me,s[14]=_*y+M*z+p*J+d*Ce,s[3]=E*R+b*v+S*G+A*V,s[7]=E*D+b*w+S*K+A*ue,s[11]=E*L+b*k+S*j+A*me,s[15]=E*y+b*z+S*J+A*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],_=e[3],M=e[7],p=e[11],d=e[15];return _*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*m-i*l*m)+M*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*u-s*l*u)+p*(+t*c*h-t*a*m-s*o*h+i*o*m+s*a*u-i*c*u)+d*(-r*a*u-t*l*h+t*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],_=e[12],M=e[13],p=e[14],d=e[15],E=h*p*c-M*f*c+M*l*m-a*p*m-h*l*d+a*f*d,b=_*f*c-u*p*c-_*l*m+o*p*m+u*l*d-o*f*d,S=u*M*c-_*h*c+_*a*m-o*M*m-u*a*d+o*h*d,A=_*h*l-u*M*l-_*a*f+o*M*f+u*a*p-o*h*p,R=t*E+i*b+r*S+s*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/R;return e[0]=E*D,e[1]=(M*f*s-h*p*s-M*r*m+i*p*m+h*r*d-i*f*d)*D,e[2]=(a*p*s-M*l*s+M*r*c-i*p*c-a*r*d+i*l*d)*D,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*m-i*l*m)*D,e[4]=b*D,e[5]=(u*p*s-_*f*s+_*r*m-t*p*m-u*r*d+t*f*d)*D,e[6]=(_*l*s-o*p*s-_*r*c+t*p*c+o*r*d-t*l*d)*D,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*m+t*l*m)*D,e[8]=S*D,e[9]=(_*h*s-u*M*s-_*i*m+t*M*m+u*i*d-t*h*d)*D,e[10]=(o*M*s-_*a*s+_*i*c-t*M*c-o*i*d+t*a*d)*D,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*m-t*a*m)*D,e[12]=A*D,e[13]=(u*M*r-_*h*r+_*i*f-t*M*f-u*i*p+t*h*p)*D,e[14]=(_*a*r-o*M*r-_*i*l+t*M*l+o*i*p-t*a*p)*D,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*f+t*a*f)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,m=s*u,_=s*h,M=o*u,p=o*h,d=a*h,E=l*c,b=l*u,S=l*h,A=i.x,R=i.y,D=i.z;return r[0]=(1-(M+d))*A,r[1]=(m+S)*A,r[2]=(_-b)*A,r[3]=0,r[4]=(m-S)*R,r[5]=(1-(f+d))*R,r[6]=(p+E)*R,r[7]=0,r[8]=(_+b)*D,r[9]=(p-E)*D,r[10]=(1-(f+M))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Fi.set(r[0],r[1],r[2]).length();const o=Fi.set(r[4],r[5],r[6]).length(),a=Fi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],bn.copy(this);const c=1/s,u=1/o,h=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=h,bn.elements[9]*=h,bn.elements[10]*=h,t.setFromRotationMatrix(bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Nn,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(i-r),f=(t+e)/(t-e),m=(i+r)/(i-r);let _,M;if(l)_=s/(o-s),M=o*s/(o-s);else if(a===Nn)_=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(a===Es)_=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Nn,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-r),f=-(t+e)/(t-e),m=-(i+r)/(i-r);let _,M;if(l)_=1/(o-s),M=o/(o-s);else if(a===Nn)_=-2/(o-s),M=-(o+s)/(o-s);else if(a===Es)_=-1/(o-s),M=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Fi=new U,bn=new wt,Cd=new U(0,0,0),Rd=new U(1,1,1),Zn=new U,$r=new U,dn=new U,nl=new wt,il=new Nr;class Sn{constructor(e=0,t=0,i=0,r=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return nl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return il.setFromEuler(this),this.setFromQuaternion(il,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class Aa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dd=0;const rl=new U,Oi=new Nr,Bn=new wt,Kr=new U,mr=new U,Pd=new U,Ld=new Nr,sl=new U(1,0,0),ol=new U(0,1,0),al=new U(0,0,1),ll={type:"added"},Id={type:"removed"},ki={type:"childadded",child:null},Zs={type:"childremoved",child:null};class qt extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new U,t=new Sn,i=new Nr,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new qe}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(sl,e)}rotateY(e){return this.rotateOnAxis(ol,e)}rotateZ(e){return this.rotateOnAxis(al,e)}translateOnAxis(e,t){return rl.copy(e).applyQuaternion(this.quaternion),this.position.add(rl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sl,e)}translateY(e){return this.translateOnAxis(ol,e)}translateZ(e){return this.translateOnAxis(al,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Kr.copy(e):Kr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(mr,Kr,this.up):Bn.lookAt(Kr,mr,this.up),this.quaternion.setFromRotationMatrix(Bn),r&&(Bn.extractRotation(r.matrixWorld),Oi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ll),ki.child=e,this.dispatchEvent(ki),ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Id),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ll),ki.child=e,this.dispatchEvent(ki),ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,Pd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,Ld,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}qt.DEFAULT_UP=new U(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new U,Hn=new U,Js=new U,Gn=new U,zi=new U,Bi=new U,cl=new U,Qs=new U,eo=new U,to=new U,no=new ht,io=new ht,ro=new ht;class yn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),En.subVectors(e,t),r.cross(En);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){En.subVectors(r,t),Hn.subVectors(i,t),Js.subVectors(e,t);const o=En.dot(En),a=En.dot(Hn),l=En.dot(Js),c=Hn.dot(Hn),u=Hn.dot(Js),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return no.setScalar(0),io.setScalar(0),ro.setScalar(0),no.fromBufferAttribute(e,t),io.fromBufferAttribute(e,i),ro.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(no,s.x),o.addScaledVector(io,s.y),o.addScaledVector(ro,s.z),o}static isFrontFacing(e,t,i,r){return En.subVectors(i,t),Hn.subVectors(e,t),En.cross(Hn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),En.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return yn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;zi.subVectors(r,i),Bi.subVectors(s,i),Qs.subVectors(e,i);const l=zi.dot(Qs),c=Bi.dot(Qs);if(l<=0&&c<=0)return t.copy(i);eo.subVectors(e,r);const u=zi.dot(eo),h=Bi.dot(eo);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(zi,o);to.subVectors(e,s);const m=zi.dot(to),_=Bi.dot(to);if(_>=0&&m<=_)return t.copy(s);const M=m*c-l*_;if(M<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Bi,a);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return cl.subVectors(s,r),a=(h-u)/(h-u+(m-_)),t.copy(r).addScaledVector(cl,a);const d=1/(p+M+f);return o=M*d,a=f*d,t.copy(i).addScaledVector(zi,o).addScaledVector(Bi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function so(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=rt.workingColorSpace){if(e=vd(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=so(o,s,e+1/3),this.g=so(o,s,e),this.b=so(o,s,e-1/3)}return rt.colorSpaceToWorking(this,r),this}setStyle(e,t=on){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const i=Nc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return rt.workingToColorSpace(Jt.copy(this),e),Math.round(Qe(Jt.r*255,0,255))*65536+Math.round(Qe(Jt.g*255,0,255))*256+Math.round(Qe(Jt.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Jt.copy(this),t);const i=Jt.r,r=Jt.g,s=Jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=on){rt.workingToColorSpace(Jt.copy(this),e);const t=Jt.r,i=Jt.g,r=Jt.b;return e!==on?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(Zr);const i=Hs(Jn.h,Zr.h,t),r=Hs(Jn.s,Zr.s,t),s=Hs(Jn.l,Zr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new et;et.NAMES=Nc;let Ud=0;class ur extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=si(),this.name="",this.type="Material",this.blending=tr,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eo,this.blendDst=To,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ka,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(i.blending=this.blending),this.side!==ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Eo&&(i.blendSrc=this.blendSrc),this.blendDst!==To&&(i.blendDst=this.blendDst),this.blendEquation!==Si&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ka&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Yn extends ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new U,Jr=new He;let Nd=0;class Rn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ca,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXY(t,Jr.x,Jr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=In(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),r=dt(r,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ca&&(e.usage=this.usage),e}}class Fc extends Rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Oc extends Rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Pt extends Rn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Fd=0;const _n=new wt,oo=new qt,Hi=new U,hn=new Fr,gr=new Fr,Xt=new U;class ln extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lc(e)?Oc:Fc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,i){return _n.makeTranslation(e,t,i),this.applyMatrix4(_n),this}scale(e,t,i){return _n.makeScale(e,t,i),this.applyMatrix4(_n),this}lookAt(e){return oo.lookAt(e),oo.updateMatrix(),this.applyMatrix4(oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(hn.min,gr.min),hn.expandByPoint(Xt),Xt.addVectors(hn.max,gr.max),hn.expandByPoint(Xt)):(hn.expandByPoint(gr.min),hn.expandByPoint(gr.max))}hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Xt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Xt.fromBufferAttribute(a,c),l&&(Hi.fromBufferAttribute(e,c),Xt.add(Hi)),r=Math.max(r,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new U,l[L]=new U;const c=new U,u=new U,h=new U,f=new He,m=new He,_=new He,M=new U,p=new U;function d(L,y,v){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,v),f.fromBufferAttribute(s,L),m.fromBufferAttribute(s,y),_.fromBufferAttribute(s,v),u.sub(c),h.sub(c),m.sub(f),_.sub(f);const w=1/(m.x*_.y-_.x*m.y);isFinite(w)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(w),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(w),a[L].add(M),a[y].add(M),a[v].add(M),l[L].add(p),l[y].add(p),l[v].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,y=E.length;L<y;++L){const v=E[L],w=v.start,k=v.count;for(let z=w,G=w+k;z<G;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const b=new U,S=new U,A=new U,R=new U;function D(L){A.fromBufferAttribute(r,L),R.copy(A);const y=a[L];b.copy(y),b.sub(A.multiplyScalar(A.dot(y))).normalize(),S.crossVectors(R,y);const w=S.dot(l[L])<0?-1:1;o.setXYZW(L,b.x,b.y,b.z,w)}for(let L=0,y=E.length;L<y;++L){const v=E[L],w=v.start,k=v.count;for(let z=w,G=w+k;z<G;z+=3)D(e.getX(z+0)),D(e.getX(z+1)),D(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),M=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,M),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let M=0,p=l.length;M<p;M++){a.isInterleavedBufferAttribute?m=l[M]*a.data.stride+a.offset:m=l[M]*u;for(let d=0;d<u;d++)f[_++]=c[m++]}return new Rn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ul=new wt,mi=new Uc,Qr=new wa,dl=new U,es=new U,ts=new U,ns=new U,ao=new U,is=new U,hl=new U,rs=new U;class Ae extends qt{constructor(e=new ln,t=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){is.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(ao.fromBufferAttribute(h,e),o?is.addScaledVector(ao,u):is.addScaledVector(ao.sub(t),u))}t.add(is)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(s),mi.copy(e.ray).recast(e.near),!(Qr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Qr,dl)===null||mi.origin.distanceToSquared(dl)>(e.far-e.near)**2))&&(ul.copy(s).invert(),mi.copy(e.ray).applyMatrix4(ul),!(i.boundingBox!==null&&mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){const p=f[_],d=o[p.materialIndex],E=Math.max(p.start,m.start),b=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=E,A=b;S<A;S+=3){const R=a.getX(S),D=a.getX(S+1),L=a.getX(S+2);r=ss(this,d,e,i,c,u,h,R,D,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let p=_,d=M;p<d;p+=3){const E=a.getX(p),b=a.getX(p+1),S=a.getX(p+2);r=ss(this,o,e,i,c,u,h,E,b,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,M=f.length;_<M;_++){const p=f[_],d=o[p.materialIndex],E=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=E,A=b;S<A;S+=3){const R=S,D=S+1,L=S+2;r=ss(this,d,e,i,c,u,h,R,D,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=_,d=M;p<d;p+=3){const E=p,b=p+1,S=p+2;r=ss(this,o,e,i,c,u,h,E,b,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Od(n,e,t,i,r,s,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ai,a),l===null)return null;rs.copy(a),rs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(rs);return c<t.near||c>t.far?null:{distance:c,point:rs.clone(),object:n}}function ss(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,es),n.getVertexPosition(l,ts),n.getVertexPosition(c,ns);const u=Od(n,e,t,i,es,ts,ns,hl);if(u){const h=new U;yn.getBarycoord(hl,es,ts,ns,h),r&&(u.uv=yn.getInterpolatedAttribute(r,a,l,c,h,new He)),s&&(u.uv1=yn.getInterpolatedAttribute(s,a,l,c,h,new He)),o&&(u.normal=yn.getInterpolatedAttribute(o,a,l,c,h,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new U,materialIndex:0};yn.getNormal(es,ts,ns,f.normal),u.face=f,u.barycoord=h}return u}class pn extends ln{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(h,2));function _(M,p,d,E,b,S,A,R,D,L,y){const v=S/D,w=A/L,k=S/2,z=A/2,G=R/2,K=D+1,j=L+1;let J=0,V=0;const ue=new U;for(let me=0;me<j;me++){const Ce=me*w-z;for(let $e=0;$e<K;$e++){const bt=$e*v-k;ue[M]=bt*E,ue[p]=Ce*b,ue[d]=G,c.push(ue.x,ue.y,ue.z),ue[M]=0,ue[p]=0,ue[d]=R>0?1:-1,u.push(ue.x,ue.y,ue.z),h.push($e/D),h.push(1-me/L),J+=1}}for(let me=0;me<L;me++)for(let Ce=0;Ce<D;Ce++){const $e=f+Ce+K*me,bt=f+Ce+K*(me+1),pt=f+(Ce+1)+K*(me+1),Y=f+(Ce+1)+K*me;l.push($e,bt,Y),l.push(bt,pt,Y),V+=6}a.addGroup(m,V,y),m+=V,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function tn(n){const e={};for(let t=0;t<n.length;t++){const i=cr(n[t]);for(const r in i)e[r]=i[r]}return e}function kd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function kc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const zd={clone:cr,merge:tn};var Bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bd,this.fragmentShader=Hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=kd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class zc extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new U,fl=new He,pl=new He;class fn extends zc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ua*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ua*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,fl,pl),t.subVectors(pl,fl)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gi=-90,Vi=1;class Gd extends qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(Gi,Vi,e,t);r.layers=this.layers,this.add(r);const s=new fn(Gi,Vi,e,t);s.layers=this.layers,this.add(s);const o=new fn(Gi,Vi,e,t);o.layers=this.layers,this.add(o);const a=new fn(Gi,Vi,e,t);a.layers=this.layers,this.add(a);const l=new fn(Gi,Vi,e,t);l.layers=this.layers,this.add(l);const c=new fn(Gi,Vi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Nn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Es)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Bc extends nn{constructor(e=[],t=or,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vd extends wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Bc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new pn(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:ii});s.uniforms.tEquirect.value=t;const o=new Ae(r,s),a=t.minFilter;return t.minFilter===Ei&&(t.minFilter=Un),new Gd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class $t extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wd={type:"move"};class lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,i),d=this._getHandJoint(c,M);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wd)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new $t;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ca{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new et(e),this.density=t}clone(){return new Ca(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Xd extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class qd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ca,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new U;class ws{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=In(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),r=dt(r,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ws(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Hc extends ur{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Wi;const _r=new U,Xi=new U,qi=new U,Yi=new He,vr=new He,Gc=new wt,os=new U,xr=new U,as=new U,ml=new He,co=new He,gl=new He;class Yd extends qt{constructor(e=new Hc){if(super(),this.isSprite=!0,this.type="Sprite",Wi===void 0){Wi=new ln;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new qd(t,5);Wi.setIndex([0,1,2,0,2,3]),Wi.setAttribute("position",new ws(i,3,0,!1)),Wi.setAttribute("uv",new ws(i,2,3,!1))}this.geometry=Wi,this.material=e,this.center=new He(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xi.setFromMatrixScale(this.matrixWorld),Gc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xi.multiplyScalar(-qi.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;ls(os.set(-.5,-.5,0),qi,o,Xi,r,s),ls(xr.set(.5,-.5,0),qi,o,Xi,r,s),ls(as.set(.5,.5,0),qi,o,Xi,r,s),ml.set(0,0),co.set(1,0),gl.set(1,1);let a=e.ray.intersectTriangle(os,xr,as,!1,_r);if(a===null&&(ls(xr.set(-.5,.5,0),qi,o,Xi,r,s),co.set(0,1),a=e.ray.intersectTriangle(os,as,xr,!1,_r),a===null))return;const l=e.ray.origin.distanceTo(_r);l<e.near||l>e.far||t.push({distance:l,point:_r.clone(),uv:yn.getInterpolation(_r,os,xr,as,ml,co,gl,new He),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ls(n,e,t,i,r,s){Yi.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(vr.x=s*Yi.x-r*Yi.y,vr.y=r*Yi.x+s*Yi.y):vr.copy(Yi),n.copy(e),n.x+=vr.x,n.y+=vr.y,n.applyMatrix4(Gc)}const uo=new U,jd=new U,$d=new qe;class xi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=uo.subVectors(i,t).cross(jd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(uo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||$d.getNormalMatrix(e),r=this.coplanarPoint(uo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new wa,Kd=new He(.5,.5),cs=new U;class Ra{constructor(e=new xi,t=new xi,i=new xi,r=new xi,s=new xi,o=new xi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Nn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],m=s[7],_=s[8],M=s[9],p=s[10],d=s[11],E=s[12],b=s[13],S=s[14],A=s[15];if(r[0].setComponents(c-o,m-u,d-_,A-E).normalize(),r[1].setComponents(c+o,m+u,d+_,A+E).normalize(),r[2].setComponents(c+a,m+h,d+M,A+b).normalize(),r[3].setComponents(c-a,m-h,d-M,A-b).normalize(),i)r[4].setComponents(l,f,p,S).normalize(),r[5].setComponents(c-l,m-f,d-p,A-S).normalize();else if(r[4].setComponents(c-l,m-f,d-p,A-S).normalize(),t===Nn)r[5].setComponents(c+l,m+f,d+p,A+S).normalize();else if(t===Es)r[5].setComponents(l,f,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){gi.center.set(0,0,0);const t=Kd.distanceTo(e.center);return gi.radius=.7071067811865476+t,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(cs.x=r.normal.x>0?e.max.x:e.min.x,cs.y=r.normal.y>0?e.max.y:e.min.y,cs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zd extends nn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vc extends nn{constructor(e,t,i=Ti,r,s,o,a=Cn,l=Cn,c,u=Dr,h=1){if(u!==Dr&&u!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ta(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Da extends ln{constructor(e=1,t=1,i=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:r,heightSegments:s},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const o=[],a=[],l=[],c=[],u=t/2,h=Math.PI/2*e,f=t,m=2*h+f,_=i*2+s,M=r+1,p=new U,d=new U;for(let E=0;E<=_;E++){let b=0,S=0,A=0,R=0;if(E<=i){const y=E/i,v=y*Math.PI/2;S=-u-e*Math.cos(v),A=e*Math.sin(v),R=-e*Math.cos(v),b=y*h}else if(E<=i+s){const y=(E-i)/s;S=-u+y*t,A=e,R=0,b=h+y*f}else{const y=(E-i-s)/i,v=y*Math.PI/2;S=u+e*Math.sin(v),A=e*Math.cos(v),R=e*Math.sin(v),b=h+f+y*h}const D=Math.max(0,Math.min(1,b/m));let L=0;E===0?L=.5/r:E===_&&(L=-.5/r);for(let y=0;y<=r;y++){const v=y/r,w=v*Math.PI*2,k=Math.sin(w),z=Math.cos(w);d.x=-A*z,d.y=S,d.z=A*k,a.push(d.x,d.y,d.z),p.set(-A*z,R,A*k),p.normalize(),l.push(p.x,p.y,p.z),c.push(v+L,D)}if(E>0){const y=(E-1)*M;for(let v=0;v<r;v++){const w=y+v,k=y+v+1,z=E*M+v,G=E*M+v+1;o.push(w,k,z),o.push(k,G,z)}}}this.setIndex(o),this.setAttribute("position",new Pt(a,3)),this.setAttribute("normal",new Pt(l,3)),this.setAttribute("uv",new Pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Ut extends ln{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],m=[];let _=0;const M=[],p=i/2;let d=0;E(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Pt(h,3)),this.setAttribute("normal",new Pt(f,3)),this.setAttribute("uv",new Pt(m,2));function E(){const S=new U,A=new U;let R=0;const D=(t-e)/i;for(let L=0;L<=s;L++){const y=[],v=L/s,w=v*(t-e)+e;for(let k=0;k<=r;k++){const z=k/r,G=z*l+a,K=Math.sin(G),j=Math.cos(G);A.x=w*K,A.y=-v*i+p,A.z=w*j,h.push(A.x,A.y,A.z),S.set(K,D,j).normalize(),f.push(S.x,S.y,S.z),m.push(z,1-v),y.push(_++)}M.push(y)}for(let L=0;L<r;L++)for(let y=0;y<s;y++){const v=M[y][L],w=M[y+1][L],k=M[y+1][L+1],z=M[y][L+1];(e>0||y!==0)&&(u.push(v,w,z),R+=3),(t>0||y!==s-1)&&(u.push(w,k,z),R+=3)}c.addGroup(d,R,0),d+=R}function b(S){const A=_,R=new He,D=new U;let L=0;const y=S===!0?e:t,v=S===!0?1:-1;for(let k=1;k<=r;k++)h.push(0,p*v,0),f.push(0,v,0),m.push(.5,.5),_++;const w=_;for(let k=0;k<=r;k++){const G=k/r*l+a,K=Math.cos(G),j=Math.sin(G);D.x=y*j,D.y=p*v,D.z=y*K,h.push(D.x,D.y,D.z),f.push(0,v,0),R.x=K*.5+.5,R.y=j*.5*v+.5,m.push(R.x,R.y),_++}for(let k=0;k<r;k++){const z=A+k,G=w+k;S===!0?u.push(G,G+1,z):u.push(G+1,G,z),L+=3}c.addGroup(d,L,S===!0?1:2),d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ut(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xn extends Ut{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Xn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pa extends ln{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new Pt(s,3)),this.setAttribute("normal",new Pt(s.slice(),3)),this.setAttribute("uv",new Pt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const b=new U,S=new U,A=new U;for(let R=0;R<t.length;R+=3)m(t[R+0],b),m(t[R+1],S),m(t[R+2],A),l(b,S,A,E)}function l(E,b,S,A){const R=A+1,D=[];for(let L=0;L<=R;L++){D[L]=[];const y=E.clone().lerp(S,L/R),v=b.clone().lerp(S,L/R),w=R-L;for(let k=0;k<=w;k++)k===0&&L===R?D[L][k]=y:D[L][k]=y.clone().lerp(v,k/w)}for(let L=0;L<R;L++)for(let y=0;y<2*(R-L)-1;y++){const v=Math.floor(y/2);y%2===0?(f(D[L][v+1]),f(D[L+1][v]),f(D[L][v])):(f(D[L][v+1]),f(D[L+1][v+1]),f(D[L+1][v]))}}function c(E){const b=new U;for(let S=0;S<s.length;S+=3)b.x=s[S+0],b.y=s[S+1],b.z=s[S+2],b.normalize().multiplyScalar(E),s[S+0]=b.x,s[S+1]=b.y,s[S+2]=b.z}function u(){const E=new U;for(let b=0;b<s.length;b+=3){E.x=s[b+0],E.y=s[b+1],E.z=s[b+2];const S=p(E)/2/Math.PI+.5,A=d(E)/Math.PI+.5;o.push(S,1-A)}_(),h()}function h(){for(let E=0;E<o.length;E+=6){const b=o[E+0],S=o[E+2],A=o[E+4],R=Math.max(b,S,A),D=Math.min(b,S,A);R>.9&&D<.1&&(b<.2&&(o[E+0]+=1),S<.2&&(o[E+2]+=1),A<.2&&(o[E+4]+=1))}}function f(E){s.push(E.x,E.y,E.z)}function m(E,b){const S=E*3;b.x=e[S+0],b.y=e[S+1],b.z=e[S+2]}function _(){const E=new U,b=new U,S=new U,A=new U,R=new He,D=new He,L=new He;for(let y=0,v=0;y<s.length;y+=9,v+=6){E.set(s[y+0],s[y+1],s[y+2]),b.set(s[y+3],s[y+4],s[y+5]),S.set(s[y+6],s[y+7],s[y+8]),R.set(o[v+0],o[v+1]),D.set(o[v+2],o[v+3]),L.set(o[v+4],o[v+5]),A.copy(E).add(b).add(S).divideScalar(3);const w=p(A);M(R,v+0,E,w),M(D,v+2,b,w),M(L,v+4,S,w)}}function M(E,b,S,A){A<0&&E.x===1&&(o[b]=E.x-1),S.x===0&&S.z===0&&(o[b]=A/2/Math.PI+.5)}function p(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.vertices,e.indices,e.radius,e.details)}}class La extends Pa{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new La(e.radius,e.detail)}}class Ls extends ln{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,m=[],_=[],M=[],p=[];for(let d=0;d<u;d++){const E=d*f-o;for(let b=0;b<c;b++){const S=b*h-s;_.push(S,-E,0),M.push(0,0,1),p.push(b/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){const b=E+c*d,S=E+c*(d+1),A=E+1+c*(d+1),R=E+1+c*d;m.push(b,S,R),m.push(S,A,R)}this.setIndex(m),this.setAttribute("position",new Pt(_,3)),this.setAttribute("normal",new Pt(M,3)),this.setAttribute("uv",new Pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.width,e.height,e.widthSegments,e.heightSegments)}}class ft extends ln{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new U,f=new U,m=[],_=[],M=[],p=[];for(let d=0;d<=i;d++){const E=[],b=d/i;let S=0;d===0&&o===0?S=.5/t:d===i&&l===Math.PI&&(S=-.5/t);for(let A=0;A<=t;A++){const R=A/t;h.x=-e*Math.cos(r+R*s)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(r+R*s)*Math.sin(o+b*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),M.push(f.x,f.y,f.z),p.push(R+S,1-b),E.push(c++)}u.push(E)}for(let d=0;d<i;d++)for(let E=0;E<t;E++){const b=u[d][E+1],S=u[d][E],A=u[d+1][E],R=u[d+1][E+1];(d!==0||o>0)&&m.push(b,S,R),(d!==i-1||l<Math.PI)&&m.push(S,A,R)}this.setIndex(m),this.setAttribute("position",new Pt(_,3)),this.setAttribute("normal",new Pt(M,3)),this.setAttribute("uv",new Pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ft(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ai extends ln{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new U,h=new U,f=new U;for(let m=0;m<=i;m++)for(let _=0;_<=r;_++){const M=_/r*s,p=m/i*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(M),h.y=(e+t*Math.cos(p))*Math.sin(M),h.z=t*Math.sin(p),a.push(h.x,h.y,h.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(_/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let _=1;_<=r;_++){const M=(r+1)*m+_-1,p=(r+1)*(m-1)+_-1,d=(r+1)*(m-1)+_,E=(r+1)*m+_;o.push(M,p,E),o.push(p,d,E)}this.setIndex(o),this.setAttribute("position",new Pt(a,3)),this.setAttribute("normal",new Pt(l,3)),this.setAttribute("uv",new Pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Jd extends ur{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qd extends ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eh extends ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ia extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class th extends Ia{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ho=new wt,_l=new U,vl=new U;class Wc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ra,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;_l.setFromMatrixPosition(e.matrixWorld),t.position.copy(_l),vl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vl),t.updateMatrixWorld(),ho.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ho,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ho)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const xl=new wt,yr=new U,fo=new U;class nh extends Wc{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),yr.setFromMatrixPosition(e.matrixWorld),i.position.copy(yr),fo.copy(i.position),fo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(fo),i.updateMatrixWorld(),r.makeTranslation(-yr.x,-yr.y,-yr.z),xl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xl,i.coordinateSystem,i.reversedDepth)}}class ci extends Ia{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new nh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Xc extends zc{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ih extends Wc{constructor(){super(new Xc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rh extends Ia{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new ih}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sh extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class oh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const yl=new wt;class ah{constructor(e,t,i=0,r=1/0){this.ray=new Uc(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Aa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return yl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yl),this}intersectObject(e,t=!0,i=[]){return da(e,this,i,t),i.sort(Sl),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)da(e[r],this,i,t);return i.sort(Sl),i}}function Sl(n,e){return n.distance-e.distance}function da(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)da(s[o],e,t,!0)}}class lh extends Ri{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Ml(n,e,t,i){const r=ch(i);switch(t){case Tc:return n*e;case Ac:return n*e/r.components*r.byteLength;case Ma:return n*e/r.components*r.byteLength;case Cc:return n*e*2/r.components*r.byteLength;case ba:return n*e*2/r.components*r.byteLength;case wc:return n*e*3/r.components*r.byteLength;case An:return n*e*4/r.components*r.byteLength;case Ea:return n*e*4/r.components*r.byteLength;case ms:case gs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case _s:case vs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ko:case Bo:return Math.max(n,16)*Math.max(e,8)/4;case Oo:case zo:return Math.max(n,8)*Math.max(e,8)/2;case Ho:case Go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case qo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case jo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case $o:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Zo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Jo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ea:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ta:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case na:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ia:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case xs:case ra:case sa:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Rc:case oa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case aa:case la:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ch(n){switch(n){case Fn:case Mc:return{byteLength:1,components:1};case Cr:case bc:case Ur:return{byteLength:2,components:1};case ya:case Sa:return{byteLength:2,components:4};case Ti:case xa:case Wn:return{byteLength:4,components:1};case Ec:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=va);function qc(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function uh(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<h.length;m++){const _=h[f],M=h[m];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++f,h[f]=M)}h.length=f+1;for(let m=0,_=h.length;m<_;m++){const M=h[m];n.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var dh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hh=`#ifdef USE_ALPHAHASH
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
#endif`,fh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ph=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_h=`#ifdef USE_AOMAP
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
#endif`,vh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xh=`#ifdef USE_BATCHING
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
#endif`,yh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Eh=`#ifdef USE_IRIDESCENCE
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
#endif`,Th=`#ifdef USE_BUMPMAP
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
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ch=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ih=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Uh=`#define PI 3.141592653589793
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
} // validated`,Nh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fh=`vec3 transformedNormal = objectNormal;
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
#endif`,Oh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vh=`#ifdef USE_ENVMAP
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
#endif`,Wh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xh=`#ifdef USE_ENVMAP
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
#endif`,qh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yh=`#ifdef USE_ENVMAP
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
#endif`,jh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$h=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jh=`#ifdef USE_GRADIENTMAP
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
}`,Qh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nf=`uniform bool receiveShadow;
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
#endif`,rf=`#ifdef USE_ENVMAP
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
#endif`,sf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,af=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cf=`PhysicalMaterial material;
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
#endif`,uf=`struct PhysicalMaterial {
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
}`,df=`
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
#endif`,hf=`#if defined( RE_IndirectDiffuse )
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
#endif`,ff=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_f=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sf=`#if defined( USE_POINTS_UV )
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
#endif`,Mf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ef=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Af=`#ifdef USE_MORPHTARGETS
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
#endif`,Cf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Df=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,If=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uf=`#ifdef USE_NORMALMAP
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
#endif`,Nf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ff=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Of=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$f=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kf=`float getShadowMask() {
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
}`,Zf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jf=`#ifdef USE_SKINNING
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
#endif`,Qf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ep=`#ifdef USE_SKINNING
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
#endif`,tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sp=`#ifdef USE_TRANSMISSION
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
#endif`,op=`#ifdef USE_TRANSMISSION
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
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hp=`uniform sampler2D t2D;
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
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`#include <common>
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
}`,vp=`#if DEPTH_PACKING == 3200
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
}`,xp=`#define DISTANCE
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
}`,yp=`#define DISTANCE
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`uniform float scale;
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
}`,Ep=`uniform vec3 diffuse;
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
}`,Tp=`#include <common>
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
}`,wp=`uniform vec3 diffuse;
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
}`,Ap=`#define LAMBERT
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
}`,Cp=`#define LAMBERT
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
}`,Rp=`#define MATCAP
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
}`,Dp=`#define MATCAP
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
}`,Pp=`#define NORMAL
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
}`,Lp=`#define NORMAL
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
}`,Ip=`#define PHONG
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
}`,Up=`#define PHONG
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
}`,Np=`#define STANDARD
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
}`,Fp=`#define STANDARD
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
}`,Op=`#define TOON
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
}`,kp=`#define TOON
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
}`,zp=`uniform float size;
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
}`,Bp=`uniform vec3 diffuse;
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
}`,Hp=`#include <common>
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
}`,Gp=`uniform vec3 color;
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
}`,Vp=`uniform float rotation;
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
}`,Wp=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:dh,alphahash_pars_fragment:hh,alphamap_fragment:fh,alphamap_pars_fragment:ph,alphatest_fragment:mh,alphatest_pars_fragment:gh,aomap_fragment:_h,aomap_pars_fragment:vh,batching_pars_vertex:xh,batching_vertex:yh,begin_vertex:Sh,beginnormal_vertex:Mh,bsdfs:bh,iridescence_fragment:Eh,bumpmap_pars_fragment:Th,clipping_planes_fragment:wh,clipping_planes_pars_fragment:Ah,clipping_planes_pars_vertex:Ch,clipping_planes_vertex:Rh,color_fragment:Dh,color_pars_fragment:Ph,color_pars_vertex:Lh,color_vertex:Ih,common:Uh,cube_uv_reflection_fragment:Nh,defaultnormal_vertex:Fh,displacementmap_pars_vertex:Oh,displacementmap_vertex:kh,emissivemap_fragment:zh,emissivemap_pars_fragment:Bh,colorspace_fragment:Hh,colorspace_pars_fragment:Gh,envmap_fragment:Vh,envmap_common_pars_fragment:Wh,envmap_pars_fragment:Xh,envmap_pars_vertex:qh,envmap_physical_pars_fragment:rf,envmap_vertex:Yh,fog_vertex:jh,fog_pars_vertex:$h,fog_fragment:Kh,fog_pars_fragment:Zh,gradientmap_pars_fragment:Jh,lightmap_pars_fragment:Qh,lights_lambert_fragment:ef,lights_lambert_pars_fragment:tf,lights_pars_begin:nf,lights_toon_fragment:sf,lights_toon_pars_fragment:of,lights_phong_fragment:af,lights_phong_pars_fragment:lf,lights_physical_fragment:cf,lights_physical_pars_fragment:uf,lights_fragment_begin:df,lights_fragment_maps:hf,lights_fragment_end:ff,logdepthbuf_fragment:pf,logdepthbuf_pars_fragment:mf,logdepthbuf_pars_vertex:gf,logdepthbuf_vertex:_f,map_fragment:vf,map_pars_fragment:xf,map_particle_fragment:yf,map_particle_pars_fragment:Sf,metalnessmap_fragment:Mf,metalnessmap_pars_fragment:bf,morphinstance_vertex:Ef,morphcolor_vertex:Tf,morphnormal_vertex:wf,morphtarget_pars_vertex:Af,morphtarget_vertex:Cf,normal_fragment_begin:Rf,normal_fragment_maps:Df,normal_pars_fragment:Pf,normal_pars_vertex:Lf,normal_vertex:If,normalmap_pars_fragment:Uf,clearcoat_normal_fragment_begin:Nf,clearcoat_normal_fragment_maps:Ff,clearcoat_pars_fragment:Of,iridescence_pars_fragment:kf,opaque_fragment:zf,packing:Bf,premultiplied_alpha_fragment:Hf,project_vertex:Gf,dithering_fragment:Vf,dithering_pars_fragment:Wf,roughnessmap_fragment:Xf,roughnessmap_pars_fragment:qf,shadowmap_pars_fragment:Yf,shadowmap_pars_vertex:jf,shadowmap_vertex:$f,shadowmask_pars_fragment:Kf,skinbase_vertex:Zf,skinning_pars_vertex:Jf,skinning_vertex:Qf,skinnormal_vertex:ep,specularmap_fragment:tp,specularmap_pars_fragment:np,tonemapping_fragment:ip,tonemapping_pars_fragment:rp,transmission_fragment:sp,transmission_pars_fragment:op,uv_pars_fragment:ap,uv_pars_vertex:lp,uv_vertex:cp,worldpos_vertex:up,background_vert:dp,background_frag:hp,backgroundCube_vert:fp,backgroundCube_frag:pp,cube_vert:mp,cube_frag:gp,depth_vert:_p,depth_frag:vp,distanceRGBA_vert:xp,distanceRGBA_frag:yp,equirect_vert:Sp,equirect_frag:Mp,linedashed_vert:bp,linedashed_frag:Ep,meshbasic_vert:Tp,meshbasic_frag:wp,meshlambert_vert:Ap,meshlambert_frag:Cp,meshmatcap_vert:Rp,meshmatcap_frag:Dp,meshnormal_vert:Pp,meshnormal_frag:Lp,meshphong_vert:Ip,meshphong_frag:Up,meshphysical_vert:Np,meshphysical_frag:Fp,meshtoon_vert:Op,meshtoon_frag:kp,points_vert:zp,points_frag:Bp,shadow_vert:Hp,shadow_frag:Gp,sprite_vert:Vp,sprite_frag:Wp},le={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Ln={basic:{uniforms:tn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:tn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new et(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:tn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:tn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:tn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new et(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:tn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:tn([le.points,le.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:tn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:tn([le.common,le.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:tn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:tn([le.sprite,le.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:tn([le.common,le.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:tn([le.lights,le.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Ln.physical={uniforms:tn([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const us={r:0,b:0,g:0},_i=new Sn,Xp=new wt;function qp(n,e,t,i,r,s,o){const a=new et(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function _(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function M(b){let S=!1;const A=_(b);A===null?d(a,l):A&&A.isColor&&(d(A,1),S=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(b,S){const A=_(S);A&&(A.isCubeTexture||A.mapping===Ps)?(u===void 0&&(u=new Ae(new pn(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:cr(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),_i.copy(S.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Xp.makeRotationFromEuler(_i)),u.material.toneMapped=rt.getTransfer(A.colorSpace)!==ut,(h!==A||f!==A.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,m=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Ae(new Ls(2,2),new li({name:"BackgroundMaterial",uniforms:cr(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=rt.getTransfer(A.colorSpace)!==ut,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=A,f=A.version,m=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,S){b.getRGB(us,kc(n)),i.buffers.color.setClear(us.r,us.g,us.b,S,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(a,l)},render:M,addToRenderList:p,dispose:E}}function Yp(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(v,w,k,z,G){let K=!1;const j=h(z,k,w);s!==j&&(s=j,c(s.object)),K=m(v,z,k,G),K&&_(v,z,k,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(v,w,k,z),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function h(v,w,k){const z=k.wireframe===!0;let G=i[v.id];G===void 0&&(G={},i[v.id]=G);let K=G[w.id];K===void 0&&(K={},G[w.id]=K);let j=K[z];return j===void 0&&(j=f(l()),K[z]=j),j}function f(v){const w=[],k=[],z=[];for(let G=0;G<t;G++)w[G]=0,k[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:k,attributeDivisors:z,object:v,attributes:{},index:null}}function m(v,w,k,z){const G=s.attributes,K=w.attributes;let j=0;const J=k.getAttributes();for(const V in J)if(J[V].location>=0){const me=G[V];let Ce=K[V];if(Ce===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(Ce=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(Ce=v.instanceColor)),me===void 0||me.attribute!==Ce||Ce&&me.data!==Ce.data)return!0;j++}return s.attributesNum!==j||s.index!==z}function _(v,w,k,z){const G={},K=w.attributes;let j=0;const J=k.getAttributes();for(const V in J)if(J[V].location>=0){let me=K[V];me===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(me=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(me=v.instanceColor));const Ce={};Ce.attribute=me,me&&me.data&&(Ce.data=me.data),G[V]=Ce,j++}s.attributes=G,s.attributesNum=j,s.index=z}function M(){const v=s.newAttributes;for(let w=0,k=v.length;w<k;w++)v[w]=0}function p(v){d(v,0)}function d(v,w){const k=s.newAttributes,z=s.enabledAttributes,G=s.attributeDivisors;k[v]=1,z[v]===0&&(n.enableVertexAttribArray(v),z[v]=1),G[v]!==w&&(n.vertexAttribDivisor(v,w),G[v]=w)}function E(){const v=s.newAttributes,w=s.enabledAttributes;for(let k=0,z=w.length;k<z;k++)w[k]!==v[k]&&(n.disableVertexAttribArray(k),w[k]=0)}function b(v,w,k,z,G,K,j){j===!0?n.vertexAttribIPointer(v,w,k,G,K):n.vertexAttribPointer(v,w,k,z,G,K)}function S(v,w,k,z){M();const G=z.attributes,K=k.getAttributes(),j=w.defaultAttributeValues;for(const J in K){const V=K[J];if(V.location>=0){let ue=G[J];if(ue===void 0&&(J==="instanceMatrix"&&v.instanceMatrix&&(ue=v.instanceMatrix),J==="instanceColor"&&v.instanceColor&&(ue=v.instanceColor)),ue!==void 0){const me=ue.normalized,Ce=ue.itemSize,$e=e.get(ue);if($e===void 0)continue;const bt=$e.buffer,pt=$e.type,Y=$e.bytesPerElement,de=pt===n.INT||pt===n.UNSIGNED_INT||ue.gpuType===xa;if(ue.isInterleavedBufferAttribute){const se=ue.data,Ie=se.stride,Ue=ue.offset;if(se.isInstancedInterleavedBuffer){for(let Ge=0;Ge<V.locationSize;Ge++)d(V.location+Ge,se.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ge=0;Ge<V.locationSize;Ge++)p(V.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let Ge=0;Ge<V.locationSize;Ge++)b(V.location+Ge,Ce/V.locationSize,pt,me,Ie*Y,(Ue+Ce/V.locationSize*Ge)*Y,de)}else{if(ue.isInstancedBufferAttribute){for(let se=0;se<V.locationSize;se++)d(V.location+se,ue.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let se=0;se<V.locationSize;se++)p(V.location+se);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let se=0;se<V.locationSize;se++)b(V.location+se,Ce/V.locationSize,pt,me,Ce*Y,Ce/V.locationSize*se*Y,de)}}else if(j!==void 0){const me=j[J];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(V.location,me);break;case 3:n.vertexAttrib3fv(V.location,me);break;case 4:n.vertexAttrib4fv(V.location,me);break;default:n.vertexAttrib1fv(V.location,me)}}}}E()}function A(){L();for(const v in i){const w=i[v];for(const k in w){const z=w[k];for(const G in z)u(z[G].object),delete z[G];delete w[k]}delete i[v]}}function R(v){if(i[v.id]===void 0)return;const w=i[v.id];for(const k in w){const z=w[k];for(const G in z)u(z[G].object),delete z[G];delete w[k]}delete i[v.id]}function D(v){for(const w in i){const k=i[w];if(k[v.id]===void 0)continue;const z=k[v.id];for(const G in z)u(z[G].object),delete z[G];delete k[v.id]}}function L(){y(),o=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:p,disableUnusedAttributes:E}}function jp(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_];t.update(m,i,1)}function l(c,u,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let M=0;M<h;M++)_+=u[M]*f[M];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $p(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==An&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const L=D===Ur&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Fn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Wn&&!L)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:A,maxSamples:R}}function Kp(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new xi,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,M=h.clipIntersection,p=h.clipShadows,d=n.get(h);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const E=s?0:i,b=E*4;let S=d.clippingState||null;l.value=S,S=u(_,f,b,m);for(let A=0;A!==b;++A)S[A]=t[A];d.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,m,_){const M=h!==null?h.length:0;let p=null;if(M!==0){if(p=l.value,_!==!0||p===null){const d=m+M*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<d)&&(p=new Float32Array(d));for(let b=0,S=m;b!==M;++b,S+=4)o.copy(h[b]).applyMatrix4(E,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}function Zp(n){let e=new WeakMap;function t(o,a){return a===Io?o.mapping=or:a===Uo&&(o.mapping=ar),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Io||a===Uo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Vd(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ji=4,bl=[.125,.215,.35,.446,.526,.582],Mi=20,po=new Xc,El=new et;let mo=null,go=0,_o=0,vo=!1;const yi=(1+Math.sqrt(5))/2,ji=1/yi,Tl=[new U(-yi,ji,0),new U(yi,ji,0),new U(-ji,0,yi),new U(ji,0,yi),new U(0,yi,-ji),new U(0,yi,ji),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Jp=new U;class wl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=Jp}=s;mo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mo,go,_o),this._renderer.xr.enabled=vo,e.scissorTest=!1,ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Ur,format:An,colorSpace:lr,depthBuffer:!1},r=Al(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Al(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qp(s)),this._blurMaterial=em(s,e,t)}return r}_compileMaterial(e){const t=new Ae(this._lodPlanes[0],e);this._renderer.compile(t,po)}_sceneToCubeUV(e,t,i,r,s){const l=new fn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(El),h.toneMapping=ri,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const M=new Yn({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),p=new Ae(new pn,M);let d=!1;const E=e.background;E?E.isColor&&(M.color.copy(E),e.background=null,d=!0):(M.color.copy(El),d=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):S===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));const A=this._cubeSize;ds(r,S*A,b>2?A:0,A,A),h.setRenderTarget(r),d&&h.render(p,l),h.render(e,l)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=m,h.autoClear=f,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===or||e.mapping===ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ae(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ds(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,po)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Tl[(r-s-1)%Tl.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ae(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Mi-1),M=s/_,p=isFinite(s)?1+Math.floor(u*M):Mi;p>Mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Mi}`);const d=[];let E=0;for(let D=0;D<Mi;++D){const L=D/M,y=Math.exp(-L*L/2);d.push(y),D===0?E+=y:D<p&&(E+=2*y)}for(let D=0;D<d.length;D++)d[D]=d[D]/E;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-i;const S=this._sizeLods[r],A=3*S*(r>b-Ji?r-b+Ji:0),R=4*(this._cubeSize-S);ds(t,A,R,3*S,2*S),l.setRenderTarget(t),l.render(h,po)}}function Qp(n){const e=[],t=[],i=[];let r=n;const s=n-Ji+1+bl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ji?l=bl[o-n+Ji-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,M=3,p=2,d=1,E=new Float32Array(M*_*m),b=new Float32Array(p*_*m),S=new Float32Array(d*_*m);for(let R=0;R<m;R++){const D=R%3*2/3-1,L=R>2?0:-1,y=[D,L,0,D+2/3,L,0,D+2/3,L+1,0,D,L,0,D+2/3,L+1,0,D,L+1,0];E.set(y,M*_*R),b.set(f,p*_*R);const v=[R,R,R,R,R,R];S.set(v,d*_*R)}const A=new ln;A.setAttribute("position",new Rn(E,M)),A.setAttribute("uv",new Rn(b,p)),A.setAttribute("faceIndex",new Rn(S,d)),e.push(A),r>Ji&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Al(n,e,t){const i=new wi(n,e,t);return i.texture.mapping=Ps,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ds(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function em(n,e,t){const i=new Float32Array(Mi),r=new U(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Cl(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Rl(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Ua(){return`

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
	`}function tm(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Io||l===Uo,u=l===or||l===ar;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new wl(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new wl(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function nm(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&nr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function im(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)e.update(f[m],n.ARRAY_BUFFER)}function c(h){const f=[],m=h.index,_=h.attributes.position;let M=0;if(m!==null){const E=m.array;M=m.version;for(let b=0,S=E.length;b<S;b+=3){const A=E[b+0],R=E[b+1],D=E[b+2];f.push(A,R,R,D,D,A)}}else if(_!==void 0){const E=_.array;M=_.version;for(let b=0,S=E.length/3-1;b<S;b+=3){const A=b+0,R=b+1,D=b+2;f.push(A,R,R,D,D,A)}}else return;const p=new(Lc(f)?Oc:Fc)(f,1);p.version=M;const d=s.get(h);d&&e.remove(d),s.set(h,p)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function rm(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,m){n.drawElements(i,m,s,f*o),t.update(m,i,1)}function c(f,m,_){_!==0&&(n.drawElementsInstanced(i,m,s,f*o,_),t.update(m,i,_))}function u(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,_);let p=0;for(let d=0;d<_;d++)p+=m[d];t.update(p,i,1)}function h(f,m,_,M){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/o,m[d],M[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,M,0,_);let d=0;for(let E=0;E<_;E++)d+=m[E]*M[E];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function sm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function om(n,e,t){const i=new WeakMap,r=new ht;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let v=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",v)};var m=v;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),M===!0&&(S=2),p===!0&&(S=3);let A=a.attributes.position.count*S,R=1;A>e.maxTextureSize&&(R=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const D=new Float32Array(A*R*4*h),L=new Ic(D,A,R,h);L.type=Wn,L.needsUpdate=!0;const y=S*4;for(let w=0;w<h;w++){const k=d[w],z=E[w],G=b[w],K=A*R*4*w;for(let j=0;j<k.count;j++){const J=j*y;_===!0&&(r.fromBufferAttribute(k,j),D[K+J+0]=r.x,D[K+J+1]=r.y,D[K+J+2]=r.z,D[K+J+3]=0),M===!0&&(r.fromBufferAttribute(z,j),D[K+J+4]=r.x,D[K+J+5]=r.y,D[K+J+6]=r.z,D[K+J+7]=0),p===!0&&(r.fromBufferAttribute(G,j),D[K+J+8]=r.x,D[K+J+9]=r.y,D[K+J+10]=r.z,D[K+J+11]=G.itemSize===4?r.w:1)}}f={count:h,texture:L,size:new He(A,R)},i.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const M=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function am(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Yc=new nn,Dl=new Vc(1,1),jc=new Ic,$c=new wd,Kc=new Bc,Pl=[],Ll=[],Il=new Float32Array(16),Ul=new Float32Array(9),Nl=new Float32Array(4);function dr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Pl[r];if(s===void 0&&(s=new Float32Array(r),Pl[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Is(n,e){let t=Ll[e];t===void 0&&(t=new Int32Array(e),Ll[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function lm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function cm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),Ht(t,e)}}function um(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),Ht(t,e)}}function dm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),Ht(t,e)}}function hm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Bt(t,i))return;Nl.set(i),n.uniformMatrix2fv(this.addr,!1,Nl),Ht(t,i)}}function fm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Bt(t,i))return;Ul.set(i),n.uniformMatrix3fv(this.addr,!1,Ul),Ht(t,i)}}function pm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Bt(t,i))return;Il.set(i),n.uniformMatrix4fv(this.addr,!1,Il),Ht(t,i)}}function mm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function gm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),Ht(t,e)}}function _m(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),Ht(t,e)}}function vm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),Ht(t,e)}}function xm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ym(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),Ht(t,e)}}function Sm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),Ht(t,e)}}function Mm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),Ht(t,e)}}function bm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Dl.compareFunction=Pc,s=Dl):s=Yc,t.setTexture2D(e||s,r)}function Em(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||$c,r)}function Tm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Kc,r)}function wm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||jc,r)}function Am(n){switch(n){case 5126:return lm;case 35664:return cm;case 35665:return um;case 35666:return dm;case 35674:return hm;case 35675:return fm;case 35676:return pm;case 5124:case 35670:return mm;case 35667:case 35671:return gm;case 35668:case 35672:return _m;case 35669:case 35673:return vm;case 5125:return xm;case 36294:return ym;case 36295:return Sm;case 36296:return Mm;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return Tm;case 36289:case 36303:case 36311:case 36292:return wm}}function Cm(n,e){n.uniform1fv(this.addr,e)}function Rm(n,e){const t=dr(e,this.size,2);n.uniform2fv(this.addr,t)}function Dm(n,e){const t=dr(e,this.size,3);n.uniform3fv(this.addr,t)}function Pm(n,e){const t=dr(e,this.size,4);n.uniform4fv(this.addr,t)}function Lm(n,e){const t=dr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Im(n,e){const t=dr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Um(n,e){const t=dr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Nm(n,e){n.uniform1iv(this.addr,e)}function Fm(n,e){n.uniform2iv(this.addr,e)}function Om(n,e){n.uniform3iv(this.addr,e)}function km(n,e){n.uniform4iv(this.addr,e)}function zm(n,e){n.uniform1uiv(this.addr,e)}function Bm(n,e){n.uniform2uiv(this.addr,e)}function Hm(n,e){n.uniform3uiv(this.addr,e)}function Gm(n,e){n.uniform4uiv(this.addr,e)}function Vm(n,e,t){const i=this.cache,r=e.length,s=Is(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Yc,s[o])}function Wm(n,e,t){const i=this.cache,r=e.length,s=Is(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||$c,s[o])}function Xm(n,e,t){const i=this.cache,r=e.length,s=Is(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Kc,s[o])}function qm(n,e,t){const i=this.cache,r=e.length,s=Is(t,r);Bt(i,s)||(n.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||jc,s[o])}function Ym(n){switch(n){case 5126:return Cm;case 35664:return Rm;case 35665:return Dm;case 35666:return Pm;case 35674:return Lm;case 35675:return Im;case 35676:return Um;case 5124:case 35670:return Nm;case 35667:case 35671:return Fm;case 35668:case 35672:return Om;case 35669:case 35673:return km;case 5125:return zm;case 36294:return Bm;case 36295:return Hm;case 36296:return Gm;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return Xm;case 36289:case 36303:case 36311:case 36292:return qm}}class jm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Am(t.type)}}class $m{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ym(t.type)}}class Km{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const xo=/(\w+)(\])?(\[|\.)?/g;function Fl(n,e){n.seq.push(e),n.map[e.id]=e}function Zm(n,e,t){const i=n.name,r=i.length;for(xo.lastIndex=0;;){const s=xo.exec(i),o=xo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Fl(t,c===void 0?new jm(a,n,e):new $m(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Km(a),Fl(t,h)),t=h}}}class ys{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Zm(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ol(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Jm=37297;let Qm=0;function eg(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const kl=new qe;function tg(n){rt._getMatrix(kl,rt.workingColorSpace,n);const e=`mat3( ${kl.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case bs:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function zl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+eg(n.getShaderSource(e),a)}else return s}function ng(n,e){const t=tg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ig(n,e){let t;switch(e){case ed:t="Linear";break;case td:t="Reinhard";break;case nd:t="Cineon";break;case id:t="ACESFilmic";break;case sd:t="AgX";break;case od:t="Neutral";break;case rd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hs=new U;function rg(){rt.getLuminanceCoefficients(hs);const n=hs.x.toFixed(4),e=hs.y.toFixed(4),t=hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function og(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ag(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Sr(n){return n!==""}function Bl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ha(n){return n.replace(lg,ug)}const cg=new Map;function ug(n,e){let t=je[e];if(t===void 0){const i=cg.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ha(t)}const dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gl(n){return n.replace(dg,hg)}function hg(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vl(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===xc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function pg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case or:case ar:e="ENVMAP_TYPE_CUBE";break;case Ps:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mg(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ar&&(e="ENVMAP_MODE_REFRACTION"),e}function gg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yc:e="ENVMAP_BLENDING_MULTIPLY";break;case Ju:e="ENVMAP_BLENDING_MIX";break;case Qu:e="ENVMAP_BLENDING_ADD";break}return e}function _g(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function vg(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=fg(t),c=pg(t),u=mg(t),h=gg(t),f=_g(t),m=sg(t),_=og(s),M=r.createProgram();let p,d,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Sr).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Sr).join(`
`),d.length>0&&(d+=`
`)):(p=[Vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),d=[Vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?je.tonemapping_pars_fragment:"",t.toneMapping!==ri?ig("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,ng("linearToOutputTexel",t.outputColorSpace),rg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),o=ha(o),o=Bl(o,t),o=Hl(o,t),a=ha(a),a=Bl(a,t),a=Hl(a,t),o=Gl(o),a=Gl(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Za?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Za?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=E+p+o,S=E+d+a,A=Ol(r,r.VERTEX_SHADER,b),R=Ol(r,r.FRAGMENT_SHADER,S);r.attachShader(M,A),r.attachShader(M,R),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function D(w){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(M)||"",z=r.getShaderInfoLog(A)||"",G=r.getShaderInfoLog(R)||"",K=k.trim(),j=z.trim(),J=G.trim();let V=!0,ue=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,A,R);else{const me=zl(r,A,"vertex"),Ce=zl(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+K+`
`+me+`
`+Ce)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(j===""||J==="")&&(ue=!1);ue&&(w.diagnostics={runnable:V,programLog:K,vertexShader:{log:j,prefix:p},fragmentShader:{log:J,prefix:d}})}r.deleteShader(A),r.deleteShader(R),L=new ys(r,M),y=ag(r,M)}let L;this.getUniforms=function(){return L===void 0&&D(this),L};let y;this.getAttributes=function(){return y===void 0&&D(this),y};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(M,Jm)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qm++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=R,this}let xg=0;class yg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Sg(e),t.set(e,i)),i}}class Sg{constructor(e){this.id=xg++,this.code=e,this.usedTimes=0}}function Mg(n,e,t,i,r,s,o){const a=new Aa,l=new yg,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,v,w,k,z){const G=k.fog,K=z.geometry,j=y.isMeshStandardMaterial?k.environment:null,J=(y.isMeshStandardMaterial?t:e).get(y.envMap||j),V=J&&J.mapping===Ps?J.image.height:null,ue=_[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const me=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ce=me!==void 0?me.length:0;let $e=0;K.morphAttributes.position!==void 0&&($e=1),K.morphAttributes.normal!==void 0&&($e=2),K.morphAttributes.color!==void 0&&($e=3);let bt,pt,Y,de;if(ue){const at=Ln[ue];bt=at.vertexShader,pt=at.fragmentShader}else bt=y.vertexShader,pt=y.fragmentShader,l.update(y),Y=l.getVertexShaderID(y),de=l.getFragmentShaderID(y);const se=n.getRenderTarget(),Ie=n.state.buffers.depth.getReversed(),Ue=z.isInstancedMesh===!0,Ge=z.isBatchedMesh===!0,Lt=!!y.map,nt=!!y.matcap,P=!!J,_t=!!y.aoMap,De=!!y.lightMap,st=!!y.bumpMap,we=!!y.normalMap,Et=!!y.displacementMap,ve=!!y.emissiveMap,Ke=!!y.metalnessMap,Wt=!!y.roughnessMap,It=y.anisotropy>0,T=y.clearcoat>0,g=y.dispersion>0,O=y.iridescence>0,q=y.sheen>0,Q=y.transmission>0,X=It&&!!y.anisotropyMap,Te=T&&!!y.clearcoatMap,re=T&&!!y.clearcoatNormalMap,Se=T&&!!y.clearcoatRoughnessMap,be=O&&!!y.iridescenceMap,ne=O&&!!y.iridescenceThicknessMap,pe=q&&!!y.sheenColorMap,Fe=q&&!!y.sheenRoughnessMap,Ee=!!y.specularMap,he=!!y.specularColorMap,Xe=!!y.specularIntensityMap,I=Q&&!!y.transmissionMap,ie=Q&&!!y.thicknessMap,oe=!!y.gradientMap,_e=!!y.alphaMap,ee=y.alphaTest>0,Z=!!y.alphaHash,ye=!!y.extensions;let Ve=ri;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Ve=n.toneMapping);const vt={shaderID:ue,shaderType:y.type,shaderName:y.name,vertexShader:bt,fragmentShader:pt,defines:y.defines,customVertexShaderID:Y,customFragmentShaderID:de,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Ge,batchingColor:Ge&&z._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&z.instanceColor!==null,instancingMorph:Ue&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:lr,alphaToCoverage:!!y.alphaToCoverage,map:Lt,matcap:nt,envMap:P,envMapMode:P&&J.mapping,envMapCubeUVHeight:V,aoMap:_t,lightMap:De,bumpMap:st,normalMap:we,displacementMap:f&&Et,emissiveMap:ve,normalMapObjectSpace:we&&y.normalMapType===ud,normalMapTangentSpace:we&&y.normalMapType===Dc,metalnessMap:Ke,roughnessMap:Wt,anisotropy:It,anisotropyMap:X,clearcoat:T,clearcoatMap:Te,clearcoatNormalMap:re,clearcoatRoughnessMap:Se,dispersion:g,iridescence:O,iridescenceMap:be,iridescenceThicknessMap:ne,sheen:q,sheenColorMap:pe,sheenRoughnessMap:Fe,specularMap:Ee,specularColorMap:he,specularIntensityMap:Xe,transmission:Q,transmissionMap:I,thicknessMap:ie,gradientMap:oe,opaque:y.transparent===!1&&y.blending===tr&&y.alphaToCoverage===!1,alphaMap:_e,alphaTest:ee,alphaHash:Z,combine:y.combine,mapUv:Lt&&M(y.map.channel),aoMapUv:_t&&M(y.aoMap.channel),lightMapUv:De&&M(y.lightMap.channel),bumpMapUv:st&&M(y.bumpMap.channel),normalMapUv:we&&M(y.normalMap.channel),displacementMapUv:Et&&M(y.displacementMap.channel),emissiveMapUv:ve&&M(y.emissiveMap.channel),metalnessMapUv:Ke&&M(y.metalnessMap.channel),roughnessMapUv:Wt&&M(y.roughnessMap.channel),anisotropyMapUv:X&&M(y.anisotropyMap.channel),clearcoatMapUv:Te&&M(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&M(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&M(y.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&M(y.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&M(y.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&M(y.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&M(y.sheenRoughnessMap.channel),specularMapUv:Ee&&M(y.specularMap.channel),specularColorMapUv:he&&M(y.specularColorMap.channel),specularIntensityMapUv:Xe&&M(y.specularIntensityMap.channel),transmissionMapUv:I&&M(y.transmissionMap.channel),thicknessMapUv:ie&&M(y.thicknessMap.channel),alphaMapUv:_e&&M(y.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(we||It),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&(Lt||_e),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ie,skinning:z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:$e,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Lt&&y.map.isVideoTexture===!0&&rt.getTransfer(y.map.colorSpace)===ut,decodeVideoTextureEmissive:ve&&y.emissiveMap.isVideoTexture===!0&&rt.getTransfer(y.emissiveMap.colorSpace)===ut,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===xn,flipSided:y.side===an,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ye&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&y.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function d(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const w in y.defines)v.push(w),v.push(y.defines[w]);return y.isRawShaderMaterial===!1&&(E(v,y),b(v,y),v.push(n.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function E(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function b(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function S(y){const v=_[y.type];let w;if(v){const k=Ln[v];w=zd.clone(k.uniforms)}else w=y.uniforms;return w}function A(y,v){let w;for(let k=0,z=u.length;k<z;k++){const G=u[k];if(G.cacheKey===v){w=G,++w.usedTimes;break}}return w===void 0&&(w=new vg(n,v,y,s),u.push(w)),w}function R(y){if(--y.usedTimes===0){const v=u.indexOf(y);u[v]=u[u.length-1],u.pop(),y.destroy()}}function D(y){l.remove(y)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:S,acquireProgram:A,releaseProgram:R,releaseShaderCache:D,programs:u,dispose:L}}function bg(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Eg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Wl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Xl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,m,_,M,p){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:M,group:p},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=M,d.group=p),e++,d}function a(h,f,m,_,M,p){const d=o(h,f,m,_,M,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(h,f,m,_,M,p){const d=o(h,f,m,_,M,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||Eg),i.length>1&&i.sort(f||Wl),r.length>1&&r.sort(f||Wl)}function u(){for(let h=e,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Tg(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Xl,n.set(i,[o])):r>=s.length?(o=new Xl,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function wg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new et};break;case"SpotLight":t={position:new U,direction:new U,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function Ag(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Cg=0;function Rg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Dg(n){const e=new wg,t=Ag(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new wt,o=new wt;function a(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let m=0,_=0,M=0,p=0,d=0,E=0,b=0,S=0,A=0,R=0,D=0;c.sort(Rg);for(let y=0,v=c.length;y<v;y++){const w=c[y],k=w.color,z=w.intensity,G=w.distance,K=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=k.r*z,h+=k.g*z,f+=k.b*z;else if(w.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(w.sh.coefficients[j],z);D++}else if(w.isDirectionalLight){const j=e.get(w);if(j.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const J=w.shadow,V=t.get(w);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,i.directionalShadow[m]=V,i.directionalShadowMap[m]=K,i.directionalShadowMatrix[m]=w.shadow.matrix,E++}i.directional[m]=j,m++}else if(w.isSpotLight){const j=e.get(w);j.position.setFromMatrixPosition(w.matrixWorld),j.color.copy(k).multiplyScalar(z),j.distance=G,j.coneCos=Math.cos(w.angle),j.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),j.decay=w.decay,i.spot[M]=j;const J=w.shadow;if(w.map&&(i.spotLightMap[A]=w.map,A++,J.updateMatrices(w),w.castShadow&&R++),i.spotLightMatrix[M]=J.matrix,w.castShadow){const V=t.get(w);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,i.spotShadow[M]=V,i.spotShadowMap[M]=K,S++}M++}else if(w.isRectAreaLight){const j=e.get(w);j.color.copy(k).multiplyScalar(z),j.halfWidth.set(w.width*.5,0,0),j.halfHeight.set(0,w.height*.5,0),i.rectArea[p]=j,p++}else if(w.isPointLight){const j=e.get(w);if(j.color.copy(w.color).multiplyScalar(w.intensity),j.distance=w.distance,j.decay=w.decay,w.castShadow){const J=w.shadow,V=t.get(w);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,i.pointShadow[_]=V,i.pointShadowMap[_]=K,i.pointShadowMatrix[_]=w.shadow.matrix,b++}i.point[_]=j,_++}else if(w.isHemisphereLight){const j=e.get(w);j.skyColor.copy(w.color).multiplyScalar(z),j.groundColor.copy(w.groundColor).multiplyScalar(z),i.hemi[d]=j,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==m||L.pointLength!==_||L.spotLength!==M||L.rectAreaLength!==p||L.hemiLength!==d||L.numDirectionalShadows!==E||L.numPointShadows!==b||L.numSpotShadows!==S||L.numSpotMaps!==A||L.numLightProbes!==D)&&(i.directional.length=m,i.spot.length=M,i.rectArea.length=p,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=S+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=D,L.directionalLength=m,L.pointLength=_,L.spotLength=M,L.rectAreaLength=p,L.hemiLength=d,L.numDirectionalShadows=E,L.numPointShadows=b,L.numSpotShadows=S,L.numSpotMaps=A,L.numLightProbes=D,i.version=Cg++)}function l(c,u){let h=0,f=0,m=0,_=0,M=0;const p=u.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){const b=c[d];if(b.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),h++}else if(b.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(b.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const S=i.hemi[M];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(p),M++}}}return{setup:a,setupView:l,state:i}}function ql(n){const e=new Dg(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Pg(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ql(n),e.set(r,[a])):s>=o.length?(a=new ql(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ig=`uniform sampler2D shadow_pass;
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
}`;function Ug(n,e,t){let i=new Ra;const r=new He,s=new He,o=new ht,a=new Qd({depthPacking:cd}),l=new eh,c={},u=t.maxTextureSize,h={[ai]:an,[an]:ai,[xn]:xn},f=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Lg,fragmentShader:Ig}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new ln;_.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ae(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vc;let d=this.type;this.render=function(R,D,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const y=n.getRenderTarget(),v=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),k=n.state;k.setBlending(ii),k.buffers.depth.getReversed()?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const z=d!==Vn&&this.type===Vn,G=d===Vn&&this.type!==Vn;for(let K=0,j=R.length;K<j;K++){const J=R[K],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ue=V.getFrameExtents();if(r.multiply(ue),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ue.x),r.x=s.x*ue.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ue.y),r.y=s.y*ue.y,V.mapSize.y=s.y)),V.map===null||z===!0||G===!0){const Ce=this.type!==Vn?{minFilter:Cn,magFilter:Cn}:{};V.map!==null&&V.map.dispose(),V.map=new wi(r.x,r.y,Ce),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const me=V.getViewportCount();for(let Ce=0;Ce<me;Ce++){const $e=V.getViewport(Ce);o.set(s.x*$e.x,s.y*$e.y,s.x*$e.z,s.y*$e.w),k.viewport(o),V.updateMatrices(J,Ce),i=V.getFrustum(),S(D,L,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===Vn&&E(V,L),V.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(y,v,w)};function E(R,D){const L=e.update(M);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new wi(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(D,null,L,f,M,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(D,null,L,m,M,null)}function b(R,D,L,y){let v=null;const w=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)v=w;else if(v=L.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const k=v.uuid,z=D.uuid;let G=c[k];G===void 0&&(G={},c[k]=G);let K=G[z];K===void 0&&(K=v.clone(),G[z]=K,D.addEventListener("dispose",A)),v=K}if(v.visible=D.visible,v.wireframe=D.wireframe,y===Vn?v.side=D.shadowSide!==null?D.shadowSide:D.side:v.side=D.shadowSide!==null?D.shadowSide:h[D.side],v.alphaMap=D.alphaMap,v.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,v.map=D.map,v.clipShadows=D.clipShadows,v.clippingPlanes=D.clippingPlanes,v.clipIntersection=D.clipIntersection,v.displacementMap=D.displacementMap,v.displacementScale=D.displacementScale,v.displacementBias=D.displacementBias,v.wireframeLinewidth=D.wireframeLinewidth,v.linewidth=D.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const k=n.properties.get(v);k.light=L}return v}function S(R,D,L,y,v){if(R.visible===!1)return;if(R.layers.test(D.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===Vn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const z=e.update(R),G=R.material;if(Array.isArray(G)){const K=z.groups;for(let j=0,J=K.length;j<J;j++){const V=K[j],ue=G[V.materialIndex];if(ue&&ue.visible){const me=b(R,ue,y,v);R.onBeforeShadow(n,R,D,L,z,me,V),n.renderBufferDirect(L,null,z,me,R,V),R.onAfterShadow(n,R,D,L,z,me,V)}}}else if(G.visible){const K=b(R,G,y,v);R.onBeforeShadow(n,R,D,L,z,K,null),n.renderBufferDirect(L,null,z,K,R,null),R.onAfterShadow(n,R,D,L,z,K,null)}}const k=R.children;for(let z=0,G=k.length;z<G;z++)S(k[z],D,L,y,v)}function A(R){R.target.removeEventListener("dispose",A);for(const L in c){const y=c[L],v=R.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const Ng={[wo]:Ao,[Co]:Po,[Ro]:Lo,[sr]:Do,[Ao]:wo,[Po]:Co,[Lo]:Ro,[Do]:sr};function Fg(n,e){function t(){let I=!1;const ie=new ht;let oe=null;const _e=new ht(0,0,0,0);return{setMask:function(ee){oe!==ee&&!I&&(n.colorMask(ee,ee,ee,ee),oe=ee)},setLocked:function(ee){I=ee},setClear:function(ee,Z,ye,Ve,vt){vt===!0&&(ee*=Ve,Z*=Ve,ye*=Ve),ie.set(ee,Z,ye,Ve),_e.equals(ie)===!1&&(n.clearColor(ee,Z,ye,Ve),_e.copy(ie))},reset:function(){I=!1,oe=null,_e.set(-1,0,0,0)}}}function i(){let I=!1,ie=!1,oe=null,_e=null,ee=null;return{setReversed:function(Z){if(ie!==Z){const ye=e.get("EXT_clip_control");Z?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),ie=Z;const Ve=ee;ee=null,this.setClear(Ve)}},getReversed:function(){return ie},setTest:function(Z){Z?se(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(Z){oe!==Z&&!I&&(n.depthMask(Z),oe=Z)},setFunc:function(Z){if(ie&&(Z=Ng[Z]),_e!==Z){switch(Z){case wo:n.depthFunc(n.NEVER);break;case Ao:n.depthFunc(n.ALWAYS);break;case Co:n.depthFunc(n.LESS);break;case sr:n.depthFunc(n.LEQUAL);break;case Ro:n.depthFunc(n.EQUAL);break;case Do:n.depthFunc(n.GEQUAL);break;case Po:n.depthFunc(n.GREATER);break;case Lo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=Z}},setLocked:function(Z){I=Z},setClear:function(Z){ee!==Z&&(ie&&(Z=1-Z),n.clearDepth(Z),ee=Z)},reset:function(){I=!1,oe=null,_e=null,ee=null,ie=!1}}}function r(){let I=!1,ie=null,oe=null,_e=null,ee=null,Z=null,ye=null,Ve=null,vt=null;return{setTest:function(at){I||(at?se(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(at){ie!==at&&!I&&(n.stencilMask(at),ie=at)},setFunc:function(at,On,Dn){(oe!==at||_e!==On||ee!==Dn)&&(n.stencilFunc(at,On,Dn),oe=at,_e=On,ee=Dn)},setOp:function(at,On,Dn){(Z!==at||ye!==On||Ve!==Dn)&&(n.stencilOp(at,On,Dn),Z=at,ye=On,Ve=Dn)},setLocked:function(at){I=at},setClear:function(at){vt!==at&&(n.clearStencil(at),vt=at)},reset:function(){I=!1,ie=null,oe=null,_e=null,ee=null,Z=null,ye=null,Ve=null,vt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,m=[],_=null,M=!1,p=null,d=null,E=null,b=null,S=null,A=null,R=null,D=new et(0,0,0),L=0,y=!1,v=null,w=null,k=null,z=null,G=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,J=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),j=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),j=J>=2);let ue=null,me={};const Ce=n.getParameter(n.SCISSOR_BOX),$e=n.getParameter(n.VIEWPORT),bt=new ht().fromArray(Ce),pt=new ht().fromArray($e);function Y(I,ie,oe,_e){const ee=new Uint8Array(4),Z=n.createTexture();n.bindTexture(I,Z),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ye=0;ye<oe;ye++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,ee):n.texImage2D(ie+ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ee);return Z}const de={};de[n.TEXTURE_2D]=Y(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=Y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=Y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=Y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(n.DEPTH_TEST),o.setFunc(sr),st(!1),we(qa),se(n.CULL_FACE),_t(ii);function se(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function Ie(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Ue(I,ie){return h[I]!==ie?(n.bindFramebuffer(I,ie),h[I]=ie,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ie),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ge(I,ie){let oe=m,_e=!1;if(I){oe=f.get(ie),oe===void 0&&(oe=[],f.set(ie,oe));const ee=I.textures;if(oe.length!==ee.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,ye=ee.length;Z<ye;Z++)oe[Z]=n.COLOR_ATTACHMENT0+Z;oe.length=ee.length,_e=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,_e=!0);_e&&n.drawBuffers(oe)}function Lt(I){return _!==I?(n.useProgram(I),_=I,!0):!1}const nt={[Si]:n.FUNC_ADD,[Nu]:n.FUNC_SUBTRACT,[Fu]:n.FUNC_REVERSE_SUBTRACT};nt[Ou]=n.MIN,nt[ku]=n.MAX;const P={[zu]:n.ZERO,[Bu]:n.ONE,[Hu]:n.SRC_COLOR,[Eo]:n.SRC_ALPHA,[Yu]:n.SRC_ALPHA_SATURATE,[Xu]:n.DST_COLOR,[Vu]:n.DST_ALPHA,[Gu]:n.ONE_MINUS_SRC_COLOR,[To]:n.ONE_MINUS_SRC_ALPHA,[qu]:n.ONE_MINUS_DST_COLOR,[Wu]:n.ONE_MINUS_DST_ALPHA,[ju]:n.CONSTANT_COLOR,[$u]:n.ONE_MINUS_CONSTANT_COLOR,[Ku]:n.CONSTANT_ALPHA,[Zu]:n.ONE_MINUS_CONSTANT_ALPHA};function _t(I,ie,oe,_e,ee,Z,ye,Ve,vt,at){if(I===ii){M===!0&&(Ie(n.BLEND),M=!1);return}if(M===!1&&(se(n.BLEND),M=!0),I!==Uu){if(I!==p||at!==y){if((d!==Si||S!==Si)&&(n.blendEquation(n.FUNC_ADD),d=Si,S=Si),at)switch(I){case tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ya:n.blendFunc(n.ONE,n.ONE);break;case ja:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $a:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ya:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ja:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $a:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,b=null,A=null,R=null,D.set(0,0,0),L=0,p=I,y=at}return}ee=ee||ie,Z=Z||oe,ye=ye||_e,(ie!==d||ee!==S)&&(n.blendEquationSeparate(nt[ie],nt[ee]),d=ie,S=ee),(oe!==E||_e!==b||Z!==A||ye!==R)&&(n.blendFuncSeparate(P[oe],P[_e],P[Z],P[ye]),E=oe,b=_e,A=Z,R=ye),(Ve.equals(D)===!1||vt!==L)&&(n.blendColor(Ve.r,Ve.g,Ve.b,vt),D.copy(Ve),L=vt),p=I,y=!1}function De(I,ie){I.side===xn?Ie(n.CULL_FACE):se(n.CULL_FACE);let oe=I.side===an;ie&&(oe=!oe),st(oe),I.blending===tr&&I.transparent===!1?_t(ii):_t(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const _e=I.stencilWrite;a.setTest(_e),_e&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ve(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function st(I){v!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),v=I)}function we(I){I!==Lu?(se(n.CULL_FACE),I!==w&&(I===qa?n.cullFace(n.BACK):I===Iu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),w=I}function Et(I){I!==k&&(j&&n.lineWidth(I),k=I)}function ve(I,ie,oe){I?(se(n.POLYGON_OFFSET_FILL),(z!==ie||G!==oe)&&(n.polygonOffset(ie,oe),z=ie,G=oe)):Ie(n.POLYGON_OFFSET_FILL)}function Ke(I){I?se(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function Wt(I){I===void 0&&(I=n.TEXTURE0+K-1),ue!==I&&(n.activeTexture(I),ue=I)}function It(I,ie,oe){oe===void 0&&(ue===null?oe=n.TEXTURE0+K-1:oe=ue);let _e=me[oe];_e===void 0&&(_e={type:void 0,texture:void 0},me[oe]=_e),(_e.type!==I||_e.texture!==ie)&&(ue!==oe&&(n.activeTexture(oe),ue=oe),n.bindTexture(I,ie||de[I]),_e.type=I,_e.texture=ie)}function T(){const I=me[ue];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(I){bt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),bt.copy(I))}function Fe(I){pt.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),pt.copy(I))}function Ee(I,ie){let oe=c.get(ie);oe===void 0&&(oe=new WeakMap,c.set(ie,oe));let _e=oe.get(I);_e===void 0&&(_e=n.getUniformBlockIndex(ie,I.name),oe.set(I,_e))}function he(I,ie){const _e=c.get(ie).get(I);l.get(ie)!==_e&&(n.uniformBlockBinding(ie,_e,I.__bindingPointIndex),l.set(ie,_e))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ue=null,me={},h={},f=new WeakMap,m=[],_=null,M=!1,p=null,d=null,E=null,b=null,S=null,A=null,R=null,D=new et(0,0,0),L=0,y=!1,v=null,w=null,k=null,z=null,G=null,bt.set(0,0,n.canvas.width,n.canvas.height),pt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:Ie,bindFramebuffer:Ue,drawBuffers:Ge,useProgram:Lt,setBlending:_t,setMaterial:De,setFlipSided:st,setCullFace:we,setLineWidth:Et,setPolygonOffset:ve,setScissorTest:Ke,activeTexture:Wt,bindTexture:It,unbindTexture:T,compressedTexImage2D:g,compressedTexImage3D:O,texImage2D:be,texImage3D:ne,updateUBOMapping:Ee,uniformBlockBinding:he,texStorage2D:re,texStorage3D:Se,texSubImage2D:q,texSubImage3D:Q,compressedTexSubImage2D:X,compressedTexSubImage3D:Te,scissor:pe,viewport:Fe,reset:Xe}}function Og(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,g){return m?new OffscreenCanvas(T,g):Ts("canvas")}function M(T,g,O){let q=1;const Q=It(T);if((Q.width>O||Q.height>O)&&(q=O/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const X=Math.floor(q*Q.width),Te=Math.floor(q*Q.height);h===void 0&&(h=_(X,Te));const re=g?_(X,Te):h;return re.width=X,re.height=Te,re.getContext("2d").drawImage(T,0,0,X,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+X+"x"+Te+")."),re}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function p(T){return T.generateMipmaps}function d(T){n.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(T,g,O,q,Q=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=g;if(g===n.RED&&(O===n.FLOAT&&(X=n.R32F),O===n.HALF_FLOAT&&(X=n.R16F),O===n.UNSIGNED_BYTE&&(X=n.R8)),g===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(X=n.R8UI),O===n.UNSIGNED_SHORT&&(X=n.R16UI),O===n.UNSIGNED_INT&&(X=n.R32UI),O===n.BYTE&&(X=n.R8I),O===n.SHORT&&(X=n.R16I),O===n.INT&&(X=n.R32I)),g===n.RG&&(O===n.FLOAT&&(X=n.RG32F),O===n.HALF_FLOAT&&(X=n.RG16F),O===n.UNSIGNED_BYTE&&(X=n.RG8)),g===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(X=n.RG8UI),O===n.UNSIGNED_SHORT&&(X=n.RG16UI),O===n.UNSIGNED_INT&&(X=n.RG32UI),O===n.BYTE&&(X=n.RG8I),O===n.SHORT&&(X=n.RG16I),O===n.INT&&(X=n.RG32I)),g===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(X=n.RGB8UI),O===n.UNSIGNED_SHORT&&(X=n.RGB16UI),O===n.UNSIGNED_INT&&(X=n.RGB32UI),O===n.BYTE&&(X=n.RGB8I),O===n.SHORT&&(X=n.RGB16I),O===n.INT&&(X=n.RGB32I)),g===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),O===n.UNSIGNED_INT&&(X=n.RGBA32UI),O===n.BYTE&&(X=n.RGBA8I),O===n.SHORT&&(X=n.RGBA16I),O===n.INT&&(X=n.RGBA32I)),g===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),g===n.RGBA){const Te=Q?bs:rt.getTransfer(q);O===n.FLOAT&&(X=n.RGBA32F),O===n.HALF_FLOAT&&(X=n.RGBA16F),O===n.UNSIGNED_BYTE&&(X=Te===ut?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function S(T,g){let O;return T?g===null||g===Ti||g===Rr?O=n.DEPTH24_STENCIL8:g===Wn?O=n.DEPTH32F_STENCIL8:g===Cr&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ti||g===Rr?O=n.DEPTH_COMPONENT24:g===Wn?O=n.DEPTH_COMPONENT32F:g===Cr&&(O=n.DEPTH_COMPONENT16),O}function A(T,g){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Cn&&T.minFilter!==Un?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function R(T){const g=T.target;g.removeEventListener("dispose",R),L(g),g.isVideoTexture&&u.delete(g)}function D(T){const g=T.target;g.removeEventListener("dispose",D),v(g)}function L(T){const g=i.get(T);if(g.__webglInit===void 0)return;const O=T.source,q=f.get(O);if(q){const Q=q[g.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(T),Object.keys(q).length===0&&f.delete(O)}i.remove(T)}function y(T){const g=i.get(T);n.deleteTexture(g.__webglTexture);const O=T.source,q=f.get(O);delete q[g.__cacheKey],o.memory.textures--}function v(T){const g=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let Q=0;Q<g.__webglFramebuffer[q].length;Q++)n.deleteFramebuffer(g.__webglFramebuffer[q][Q]);else n.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)n.deleteFramebuffer(g.__webglFramebuffer[q]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=T.textures;for(let q=0,Q=O.length;q<Q;q++){const X=i.get(O[q]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(O[q])}i.remove(T)}let w=0;function k(){w=0}function z(){const T=w;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),w+=1,T}function G(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function K(T,g){const O=i.get(T);if(T.isVideoTexture&&Ke(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){const q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(O,T,g);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+g)}function j(T,g){const O=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){de(O,T,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+g)}function J(T,g){const O=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){de(O,T,g);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+g)}function V(T,g){const O=i.get(T);if(T.version>0&&O.__version!==T.version){se(O,T,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+g)}const ue={[No]:n.REPEAT,[bi]:n.CLAMP_TO_EDGE,[Fo]:n.MIRRORED_REPEAT},me={[Cn]:n.NEAREST,[ad]:n.NEAREST_MIPMAP_NEAREST,[Vr]:n.NEAREST_MIPMAP_LINEAR,[Un]:n.LINEAR,[zs]:n.LINEAR_MIPMAP_NEAREST,[Ei]:n.LINEAR_MIPMAP_LINEAR},Ce={[dd]:n.NEVER,[_d]:n.ALWAYS,[hd]:n.LESS,[Pc]:n.LEQUAL,[fd]:n.EQUAL,[gd]:n.GEQUAL,[pd]:n.GREATER,[md]:n.NOTEQUAL};function $e(T,g){if(g.type===Wn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Un||g.magFilter===zs||g.magFilter===Vr||g.magFilter===Ei||g.minFilter===Un||g.minFilter===zs||g.minFilter===Vr||g.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ue[g.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ue[g.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ue[g.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,me[g.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,me[g.minFilter]),g.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Ce[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Cn||g.minFilter!==Vr&&g.minFilter!==Ei||g.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function bt(T,g){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",R));const q=g.source;let Q=f.get(q);Q===void 0&&(Q={},f.set(q,Q));const X=G(g);if(X!==T.__cacheKey){Q[X]===void 0&&(Q[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[X].usedTimes++;const Te=Q[T.__cacheKey];Te!==void 0&&(Q[T.__cacheKey].usedTimes--,Te.usedTimes===0&&y(g)),T.__cacheKey=X,T.__webglTexture=Q[X].texture}return O}function pt(T,g,O){return Math.floor(Math.floor(T/O)/g)}function Y(T,g,O,q){const X=T.updateRanges;if(X.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,O,q,g.data);else{X.sort((ne,pe)=>ne.start-pe.start);let Te=0;for(let ne=1;ne<X.length;ne++){const pe=X[Te],Fe=X[ne],Ee=pe.start+pe.count,he=pt(Fe.start,g.width,4),Xe=pt(pe.start,g.width,4);Fe.start<=Ee+1&&he===Xe&&pt(Fe.start+Fe.count-1,g.width,4)===he?pe.count=Math.max(pe.count,Fe.start+Fe.count-pe.start):(++Te,X[Te]=Fe)}X.length=Te+1;const re=n.getParameter(n.UNPACK_ROW_LENGTH),Se=n.getParameter(n.UNPACK_SKIP_PIXELS),be=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let ne=0,pe=X.length;ne<pe;ne++){const Fe=X[ne],Ee=Math.floor(Fe.start/4),he=Math.ceil(Fe.count/4),Xe=Ee%g.width,I=Math.floor(Ee/g.width),ie=he,oe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Xe,I,ie,oe,O,q,g.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,re),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Se),n.pixelStorei(n.UNPACK_SKIP_ROWS,be)}}function de(T,g,O){let q=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=n.TEXTURE_3D);const Q=bt(T,g),X=g.source;t.bindTexture(q,T.__webglTexture,n.TEXTURE0+O);const Te=i.get(X);if(X.version!==Te.__version||Q===!0){t.activeTexture(n.TEXTURE0+O);const re=rt.getPrimaries(rt.workingColorSpace),Se=g.colorSpace===ti?null:rt.getPrimaries(g.colorSpace),be=g.colorSpace===ti||re===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let ne=M(g.image,!1,r.maxTextureSize);ne=Wt(g,ne);const pe=s.convert(g.format,g.colorSpace),Fe=s.convert(g.type);let Ee=b(g.internalFormat,pe,Fe,g.colorSpace,g.isVideoTexture);$e(q,g);let he;const Xe=g.mipmaps,I=g.isVideoTexture!==!0,ie=Te.__version===void 0||Q===!0,oe=X.dataReady,_e=A(g,ne);if(g.isDepthTexture)Ee=S(g.format===Pr,g.type),ie&&(I?t.texStorage2D(n.TEXTURE_2D,1,Ee,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Ee,ne.width,ne.height,0,pe,Fe,null));else if(g.isDataTexture)if(Xe.length>0){I&&ie&&t.texStorage2D(n.TEXTURE_2D,_e,Ee,Xe[0].width,Xe[0].height);for(let ee=0,Z=Xe.length;ee<Z;ee++)he=Xe[ee],I?oe&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,he.width,he.height,pe,Fe,he.data):t.texImage2D(n.TEXTURE_2D,ee,Ee,he.width,he.height,0,pe,Fe,he.data);g.generateMipmaps=!1}else I?(ie&&t.texStorage2D(n.TEXTURE_2D,_e,Ee,ne.width,ne.height),oe&&Y(g,ne,pe,Fe)):t.texImage2D(n.TEXTURE_2D,0,Ee,ne.width,ne.height,0,pe,Fe,ne.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){I&&ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,Ee,Xe[0].width,Xe[0].height,ne.depth);for(let ee=0,Z=Xe.length;ee<Z;ee++)if(he=Xe[ee],g.format!==An)if(pe!==null)if(I){if(oe)if(g.layerUpdates.size>0){const ye=Ml(he.width,he.height,g.format,g.type);for(const Ve of g.layerUpdates){const vt=he.data.subarray(Ve*ye/he.data.BYTES_PER_ELEMENT,(Ve+1)*ye/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,Ve,he.width,he.height,1,pe,vt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,ne.depth,pe,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,Ee,he.width,he.height,ne.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,he.width,he.height,ne.depth,pe,Fe,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,Ee,he.width,he.height,ne.depth,0,pe,Fe,he.data)}else{I&&ie&&t.texStorage2D(n.TEXTURE_2D,_e,Ee,Xe[0].width,Xe[0].height);for(let ee=0,Z=Xe.length;ee<Z;ee++)he=Xe[ee],g.format!==An?pe!==null?I?oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,he.width,he.height,pe,he.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,Ee,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?oe&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,he.width,he.height,pe,Fe,he.data):t.texImage2D(n.TEXTURE_2D,ee,Ee,he.width,he.height,0,pe,Fe,he.data)}else if(g.isDataArrayTexture)if(I){if(ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,Ee,ne.width,ne.height,ne.depth),oe)if(g.layerUpdates.size>0){const ee=Ml(ne.width,ne.height,g.format,g.type);for(const Z of g.layerUpdates){const ye=ne.data.subarray(Z*ee/ne.data.BYTES_PER_ELEMENT,(Z+1)*ee/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,ne.width,ne.height,1,pe,Fe,ye)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,pe,Fe,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,ne.width,ne.height,ne.depth,0,pe,Fe,ne.data);else if(g.isData3DTexture)I?(ie&&t.texStorage3D(n.TEXTURE_3D,_e,Ee,ne.width,ne.height,ne.depth),oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,pe,Fe,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,ne.width,ne.height,ne.depth,0,pe,Fe,ne.data);else if(g.isFramebufferTexture){if(ie)if(I)t.texStorage2D(n.TEXTURE_2D,_e,Ee,ne.width,ne.height);else{let ee=ne.width,Z=ne.height;for(let ye=0;ye<_e;ye++)t.texImage2D(n.TEXTURE_2D,ye,Ee,ee,Z,0,pe,Fe,null),ee>>=1,Z>>=1}}else if(Xe.length>0){if(I&&ie){const ee=It(Xe[0]);t.texStorage2D(n.TEXTURE_2D,_e,Ee,ee.width,ee.height)}for(let ee=0,Z=Xe.length;ee<Z;ee++)he=Xe[ee],I?oe&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,pe,Fe,he):t.texImage2D(n.TEXTURE_2D,ee,Ee,pe,Fe,he);g.generateMipmaps=!1}else if(I){if(ie){const ee=It(ne);t.texStorage2D(n.TEXTURE_2D,_e,Ee,ee.width,ee.height)}oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Fe,ne)}else t.texImage2D(n.TEXTURE_2D,0,Ee,pe,Fe,ne);p(g)&&d(q),Te.__version=X.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function se(T,g,O){if(g.image.length!==6)return;const q=bt(T,g),Q=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+O);const X=i.get(Q);if(Q.version!==X.__version||q===!0){t.activeTexture(n.TEXTURE0+O);const Te=rt.getPrimaries(rt.workingColorSpace),re=g.colorSpace===ti?null:rt.getPrimaries(g.colorSpace),Se=g.colorSpace===ti||Te===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const be=g.isCompressedTexture||g.image[0].isCompressedTexture,ne=g.image[0]&&g.image[0].isDataTexture,pe=[];for(let Z=0;Z<6;Z++)!be&&!ne?pe[Z]=M(g.image[Z],!0,r.maxCubemapSize):pe[Z]=ne?g.image[Z].image:g.image[Z],pe[Z]=Wt(g,pe[Z]);const Fe=pe[0],Ee=s.convert(g.format,g.colorSpace),he=s.convert(g.type),Xe=b(g.internalFormat,Ee,he,g.colorSpace),I=g.isVideoTexture!==!0,ie=X.__version===void 0||q===!0,oe=Q.dataReady;let _e=A(g,Fe);$e(n.TEXTURE_CUBE_MAP,g);let ee;if(be){I&&ie&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,Xe,Fe.width,Fe.height);for(let Z=0;Z<6;Z++){ee=pe[Z].mipmaps;for(let ye=0;ye<ee.length;ye++){const Ve=ee[ye];g.format!==An?Ee!==null?I?oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,0,0,Ve.width,Ve.height,Ee,Ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,Xe,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,0,0,Ve.width,Ve.height,Ee,he,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,Xe,Ve.width,Ve.height,0,Ee,he,Ve.data)}}}else{if(ee=g.mipmaps,I&&ie){ee.length>0&&_e++;const Z=It(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,Xe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ne){I?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pe[Z].width,pe[Z].height,Ee,he,pe[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,pe[Z].width,pe[Z].height,0,Ee,he,pe[Z].data);for(let ye=0;ye<ee.length;ye++){const vt=ee[ye].image[Z].image;I?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,0,0,vt.width,vt.height,Ee,he,vt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,Xe,vt.width,vt.height,0,Ee,he,vt.data)}}else{I?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ee,he,pe[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Xe,Ee,he,pe[Z]);for(let ye=0;ye<ee.length;ye++){const Ve=ee[ye];I?oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,0,0,Ee,he,Ve.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,Xe,Ee,he,Ve.image[Z])}}}p(g)&&d(n.TEXTURE_CUBE_MAP),X.__version=Q.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Ie(T,g,O,q,Q,X){const Te=s.convert(O.format,O.colorSpace),re=s.convert(O.type),Se=b(O.internalFormat,Te,re,O.colorSpace),be=i.get(g),ne=i.get(O);if(ne.__renderTarget=g,!be.__hasExternalTextures){const pe=Math.max(1,g.width>>X),Fe=Math.max(1,g.height>>X);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,X,Se,pe,Fe,g.depth,0,Te,re,null):t.texImage2D(Q,X,Se,pe,Fe,0,Te,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ve(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Q,ne.__webglTexture,0,Et(g)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Q,ne.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(T,g,O){if(n.bindRenderbuffer(n.RENDERBUFFER,T),g.depthBuffer){const q=g.depthTexture,Q=q&&q.isDepthTexture?q.type:null,X=S(g.stencilBuffer,Q),Te=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=Et(g);ve(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,X,g.width,g.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,X,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,X,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,T)}else{const q=g.textures;for(let Q=0;Q<q.length;Q++){const X=q[Q],Te=s.convert(X.format,X.colorSpace),re=s.convert(X.type),Se=b(X.internalFormat,Te,re,X.colorSpace),be=Et(g);O&&ve(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,Se,g.width,g.height):ve(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,Se,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Se,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ge(T,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(g.depthTexture);q.__renderTarget=g,(!q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),K(g.depthTexture,0);const Q=q.__webglTexture,X=Et(g);if(g.depthTexture.format===Dr)ve(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(g.depthTexture.format===Pr)ve(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Lt(T){const g=i.get(T),O=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){const Q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),g.__depthDisposeCallback=Q}g.__boundDepthTexture=q}if(T.depthTexture&&!g.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const q=T.texture.mipmaps;q&&q.length>0?Ge(g.__webglFramebuffer[0],T):Ge(g.__webglFramebuffer,T)}else if(O){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=n.createRenderbuffer(),Ue(g.__webglDepthbuffer[q],T,!1);else{const Q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,X)}}else{const q=T.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Ue(g.__webglDepthbuffer,T,!1);else{const Q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,X)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function nt(T,g,O){const q=i.get(T);g!==void 0&&Ie(q.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Lt(T)}function P(T){const g=T.texture,O=i.get(T),q=i.get(g);T.addEventListener("dispose",D);const Q=T.textures,X=T.isWebGLCubeRenderTarget===!0,Te=Q.length>1;if(Te||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=g.version,o.memory.textures++),X){O.__webglFramebuffer=[];for(let re=0;re<6;re++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[re]=[];for(let Se=0;Se<g.mipmaps.length;Se++)O.__webglFramebuffer[re][Se]=n.createFramebuffer()}else O.__webglFramebuffer[re]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let re=0;re<g.mipmaps.length;re++)O.__webglFramebuffer[re]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Te)for(let re=0,Se=Q.length;re<Se;re++){const be=i.get(Q[re]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&ve(T)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let re=0;re<Q.length;re++){const Se=Q[re];O.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[re]);const be=s.convert(Se.format,Se.colorSpace),ne=s.convert(Se.type),pe=b(Se.internalFormat,be,ne,Se.colorSpace,T.isXRRenderTarget===!0),Fe=Et(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,pe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,O.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),$e(n.TEXTURE_CUBE_MAP,g);for(let re=0;re<6;re++)if(g.mipmaps&&g.mipmaps.length>0)for(let Se=0;Se<g.mipmaps.length;Se++)Ie(O.__webglFramebuffer[re][Se],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Se);else Ie(O.__webglFramebuffer[re],T,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);p(g)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let re=0,Se=Q.length;re<Se;re++){const be=Q[re],ne=i.get(be);let pe=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,ne.__webglTexture),$e(pe,be),Ie(O.__webglFramebuffer,T,be,n.COLOR_ATTACHMENT0+re,pe,0),p(be)&&d(pe)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(re=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,q.__webglTexture),$e(re,g),g.mipmaps&&g.mipmaps.length>0)for(let Se=0;Se<g.mipmaps.length;Se++)Ie(O.__webglFramebuffer[Se],T,g,n.COLOR_ATTACHMENT0,re,Se);else Ie(O.__webglFramebuffer,T,g,n.COLOR_ATTACHMENT0,re,0);p(g)&&d(re),t.unbindTexture()}T.depthBuffer&&Lt(T)}function _t(T){const g=T.textures;for(let O=0,q=g.length;O<q;O++){const Q=g[O];if(p(Q)){const X=E(T),Te=i.get(Q).__webglTexture;t.bindTexture(X,Te),d(X),t.unbindTexture()}}}const De=[],st=[];function we(T){if(T.samples>0){if(ve(T)===!1){const g=T.textures,O=T.width,q=T.height;let Q=n.COLOR_BUFFER_BIT;const X=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(T),re=g.length>1;if(re)for(let be=0;be<g.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Se=T.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let be=0;be<g.length;be++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[be]);const ne=i.get(g[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ne,0)}n.blitFramebuffer(0,0,O,q,0,0,O,q,Q,n.NEAREST),l===!0&&(De.length=0,st.length=0,De.push(n.COLOR_ATTACHMENT0+be),T.depthBuffer&&T.resolveDepthBuffer===!1&&(De.push(X),st.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,st)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let be=0;be<g.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,Te.__webglColorRenderbuffer[be]);const ne=i.get(g[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const g=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Et(T){return Math.min(r.maxSamples,T.samples)}function ve(T){const g=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Ke(T){const g=o.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function Wt(T,g){const O=T.colorSpace,q=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==lr&&O!==ti&&(rt.getTransfer(O)===ut?(q!==An||Q!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),g}function It(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=k,this.setTexture2D=K,this.setTexture2DArray=j,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=nt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=ve}function kg(n,e){function t(i,r=ti){let s;const o=rt.getTransfer(r);if(i===Fn)return n.UNSIGNED_BYTE;if(i===ya)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Sa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ec)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mc)return n.BYTE;if(i===bc)return n.SHORT;if(i===Cr)return n.UNSIGNED_SHORT;if(i===xa)return n.INT;if(i===Ti)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===Ur)return n.HALF_FLOAT;if(i===Tc)return n.ALPHA;if(i===wc)return n.RGB;if(i===An)return n.RGBA;if(i===Dr)return n.DEPTH_COMPONENT;if(i===Pr)return n.DEPTH_STENCIL;if(i===Ac)return n.RED;if(i===Ma)return n.RED_INTEGER;if(i===Cc)return n.RG;if(i===ba)return n.RG_INTEGER;if(i===Ea)return n.RGBA_INTEGER;if(i===ms||i===gs||i===_s||i===vs)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ms)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ms)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_s)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Oo||i===ko||i===zo||i===Bo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Oo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ko)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ho||i===Go||i===Vo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ho||i===Go)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Vo)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Wo||i===Xo||i===qo||i===Yo||i===jo||i===$o||i===Ko||i===Zo||i===Jo||i===Qo||i===ea||i===ta||i===na||i===ia)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Wo)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xo)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qo)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yo)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jo)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$o)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ko)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zo)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jo)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qo)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ea)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ta)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===na)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ia)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xs||i===ra||i===sa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===xs)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ra)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rc||i===oa||i===aa||i===la)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===xs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===oa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===aa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===la)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Zc extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const zg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bg=`
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

}`;class Hg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Zc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new li({vertexShader:zg,fragmentShader:Bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ae(new Ls(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gg extends Ri{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,_=null;const M=new Hg,p={},d=t.getContextAttributes();let E=null,b=null;const S=[],A=[],R=new He;let D=null;const L=new fn;L.viewport=new ht;const y=new fn;y.viewport=new ht;const v=[L,y],w=new sh;let k=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let de=S[Y];return de===void 0&&(de=new lo,S[Y]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Y){let de=S[Y];return de===void 0&&(de=new lo,S[Y]=de),de.getGripSpace()},this.getHand=function(Y){let de=S[Y];return de===void 0&&(de=new lo,S[Y]=de),de.getHandSpace()};function G(Y){const de=A.indexOf(Y.inputSource);if(de===-1)return;const se=S[de];se!==void 0&&(se.update(Y.inputSource,Y.frame,c||o),se.dispatchEvent({type:Y.type,data:Y.inputSource}))}function K(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",j);for(let Y=0;Y<S.length;Y++){const de=A[Y];de!==null&&(A[Y]=null,S[Y].disconnect(de))}k=null,z=null,M.reset();for(const Y in p)delete p[Y];e.setRenderTarget(E),m=null,f=null,h=null,r=null,b=null,pt.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",K),r.addEventListener("inputsourceschange",j),d.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&(h=new XRWebGLBinding(r,t)),h!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Ie=null,Ue=null;d.depth&&(Ue=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=d.stencil?Pr:Dr,Ie=d.stencil?Rr:Ti);const Ge={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:s};f=h.createProjectionLayer(Ge),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new wi(f.textureWidth,f.textureHeight,{format:An,type:Fn,depthTexture:new Vc(f.textureWidth,f.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const se={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new wi(m.framebufferWidth,m.framebufferHeight,{format:An,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),pt.setContext(r),pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function j(Y){for(let de=0;de<Y.removed.length;de++){const se=Y.removed[de],Ie=A.indexOf(se);Ie>=0&&(A[Ie]=null,S[Ie].disconnect(se))}for(let de=0;de<Y.added.length;de++){const se=Y.added[de];let Ie=A.indexOf(se);if(Ie===-1){for(let Ge=0;Ge<S.length;Ge++)if(Ge>=A.length){A.push(se),Ie=Ge;break}else if(A[Ge]===null){A[Ge]=se,Ie=Ge;break}if(Ie===-1)break}const Ue=S[Ie];Ue&&Ue.connect(se)}}const J=new U,V=new U;function ue(Y,de,se){J.setFromMatrixPosition(de.matrixWorld),V.setFromMatrixPosition(se.matrixWorld);const Ie=J.distanceTo(V),Ue=de.projectionMatrix.elements,Ge=se.projectionMatrix.elements,Lt=Ue[14]/(Ue[10]-1),nt=Ue[14]/(Ue[10]+1),P=(Ue[9]+1)/Ue[5],_t=(Ue[9]-1)/Ue[5],De=(Ue[8]-1)/Ue[0],st=(Ge[8]+1)/Ge[0],we=Lt*De,Et=Lt*st,ve=Ie/(-De+st),Ke=ve*-De;if(de.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ke),Y.translateZ(ve),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ue[10]===-1)Y.projectionMatrix.copy(de.projectionMatrix),Y.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Wt=Lt+ve,It=nt+ve,T=we-Ke,g=Et+(Ie-Ke),O=P*nt/It*Wt,q=_t*nt/It*Wt;Y.projectionMatrix.makePerspective(T,g,O,q,Wt,It),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function me(Y,de){de===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(de.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let de=Y.near,se=Y.far;M.texture!==null&&(M.depthNear>0&&(de=M.depthNear),M.depthFar>0&&(se=M.depthFar)),w.near=y.near=L.near=de,w.far=y.far=L.far=se,(k!==w.near||z!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),k=w.near,z=w.far),w.layers.mask=Y.layers.mask|6,L.layers.mask=w.layers.mask&3,y.layers.mask=w.layers.mask&5;const Ie=Y.parent,Ue=w.cameras;me(w,Ie);for(let Ge=0;Ge<Ue.length;Ge++)me(Ue[Ge],Ie);Ue.length===2?ue(w,L,y):w.projectionMatrix.copy(L.projectionMatrix),Ce(Y,w,Ie)};function Ce(Y,de,se){se===null?Y.matrix.copy(de.matrixWorld):(Y.matrix.copy(se.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(de.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(de.projectionMatrix),Y.projectionMatrixInverse.copy(de.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ua*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(w)},this.getCameraTexture=function(Y){return p[Y]};let $e=null;function bt(Y,de){if(u=de.getViewerPose(c||o),_=de,u!==null){const se=u.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let Ie=!1;se.length!==w.cameras.length&&(w.cameras.length=0,Ie=!0);for(let nt=0;nt<se.length;nt++){const P=se[nt];let _t=null;if(m!==null)_t=m.getViewport(P);else{const st=h.getViewSubImage(f,P);_t=st.viewport,nt===0&&(e.setRenderTargetTextures(b,st.colorTexture,st.depthStencilTexture),e.setRenderTarget(b))}let De=v[nt];De===void 0&&(De=new fn,De.layers.enable(nt),De.viewport=new ht,v[nt]=De),De.matrix.fromArray(P.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(P.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(_t.x,_t.y,_t.width,_t.height),nt===0&&(w.matrix.copy(De.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Ie===!0&&w.cameras.push(De)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){const nt=h.getDepthInformation(se[0]);nt&&nt.isValid&&nt.texture&&M.init(nt,r.renderState)}if(Ue&&Ue.includes("camera-access")&&(e.state.unbindTexture(),h))for(let nt=0;nt<se.length;nt++){const P=se[nt].camera;if(P){let _t=p[P];_t||(_t=new Zc,p[P]=_t);const De=h.getCameraImage(P);_t.sourceTexture=De}}}for(let se=0;se<S.length;se++){const Ie=A[se],Ue=S[se];Ie!==null&&Ue!==void 0&&Ue.update(Ie,de,c||o)}$e&&$e(Y,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),_=null}const pt=new qc;pt.setAnimationLoop(bt),this.setAnimationLoop=function(Y){$e=Y},this.dispose=function(){}}}const vi=new Sn,Vg=new wt;function Wg(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,kc(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,E,b,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),h(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,S)):d.isMeshMatcapMaterial?(s(p,d),_(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),M(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,E,b):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===an&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===an&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const E=e.get(d),b=E.envMap,S=E.envMapRotation;b&&(p.envMap.value=b,vi.copy(S),vi.x*=-1,vi.y*=-1,vi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),p.envMapRotation.value.setFromMatrix4(Vg.makeRotationFromEuler(vi)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,E,b){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*E,p.scale.value=b*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,E){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===an&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function M(p,d){const E=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Xg(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){const S=b.program;i.uniformBlockBinding(E,S)}function c(E,b){let S=r[E.id];S===void 0&&(_(E),S=u(E),r[E.id]=S,E.addEventListener("dispose",p));const A=b.program;i.updateUBOMapping(E,A);const R=e.render.frame;s[E.id]!==R&&(f(E),s[E.id]=R)}function u(E){const b=h();E.__bindingPointIndex=b;const S=n.createBuffer(),A=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,A,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const b=r[E.id],S=E.uniforms,A=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let R=0,D=S.length;R<D;R++){const L=Array.isArray(S[R])?S[R]:[S[R]];for(let y=0,v=L.length;y<v;y++){const w=L[y];if(m(w,R,y,A)===!0){const k=w.__offset,z=Array.isArray(w.value)?w.value:[w.value];let G=0;for(let K=0;K<z.length;K++){const j=z[K],J=M(j);typeof j=="number"||typeof j=="boolean"?(w.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,k+G,w.__data)):j.isMatrix3?(w.__data[0]=j.elements[0],w.__data[1]=j.elements[1],w.__data[2]=j.elements[2],w.__data[3]=0,w.__data[4]=j.elements[3],w.__data[5]=j.elements[4],w.__data[6]=j.elements[5],w.__data[7]=0,w.__data[8]=j.elements[6],w.__data[9]=j.elements[7],w.__data[10]=j.elements[8],w.__data[11]=0):(j.toArray(w.__data,G),G+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,b,S,A){const R=E.value,D=b+"_"+S;if(A[D]===void 0)return typeof R=="number"||typeof R=="boolean"?A[D]=R:A[D]=R.clone(),!0;{const L=A[D];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return A[D]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function _(E){const b=E.uniforms;let S=0;const A=16;for(let D=0,L=b.length;D<L;D++){const y=Array.isArray(b[D])?b[D]:[b[D]];for(let v=0,w=y.length;v<w;v++){const k=y[v],z=Array.isArray(k.value)?k.value:[k.value];for(let G=0,K=z.length;G<K;G++){const j=z[G],J=M(j),V=S%A,ue=V%J.boundary,me=V+ue;S+=ue,me!==0&&A-me<J.storage&&(S+=A-me),k.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=J.storage}}}const R=S%A;return R>0&&(S+=A-R),E.__size=S,E.__cache={},this}function M(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function p(E){const b=E.target;b.removeEventListener("dispose",p);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function d(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class qg{constructor(e={}){const{canvas:t=xd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const _=new Uint32Array(4),M=new Int32Array(4);let p=null,d=null;const E=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let A=!1;this._outputColorSpace=on;let R=0,D=0,L=null,y=-1,v=null;const w=new ht,k=new ht;let z=null;const G=new et(0);let K=0,j=t.width,J=t.height,V=1,ue=null,me=null;const Ce=new ht(0,0,j,J),$e=new ht(0,0,j,J);let bt=!1;const pt=new Ra;let Y=!1,de=!1;const se=new wt,Ie=new U,Ue=new ht,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function nt(){return L===null?V:1}let P=i;function _t(x,N){return t.getContext(x,N)}try{const x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${va}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",ee,!1),P===null){const N="webgl2";if(P=_t(N,x),P===null)throw _t(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let De,st,we,Et,ve,Ke,Wt,It,T,g,O,q,Q,X,Te,re,Se,be,ne,pe,Fe,Ee,he,Xe;function I(){De=new nm(P),De.init(),Ee=new kg(P,De),st=new $p(P,De,e,Ee),we=new Fg(P,De),st.reversedDepthBuffer&&f&&we.buffers.depth.setReversed(!0),Et=new sm(P),ve=new bg,Ke=new Og(P,De,we,ve,st,Ee,Et),Wt=new Zp(S),It=new tm(S),T=new uh(P),he=new Yp(P,T),g=new im(P,T,Et,he),O=new am(P,g,T,Et),ne=new om(P,st,Ke),re=new Kp(ve),q=new Mg(S,Wt,It,De,st,he,re),Q=new Wg(S,ve),X=new Tg,Te=new Pg(De),be=new qp(S,Wt,It,we,O,m,l),Se=new Ug(S,O,st),Xe=new Xg(P,Et,st,we),pe=new jp(P,De,Et),Fe=new rm(P,De,Et),Et.programs=q.programs,S.capabilities=st,S.extensions=De,S.properties=ve,S.renderLists=X,S.shadowMap=Se,S.state=we,S.info=Et}I();const ie=new Gg(S,P);this.xr=ie,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const x=De.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=De.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(x){x!==void 0&&(V=x,this.setSize(j,J,!1))},this.getSize=function(x){return x.set(j,J)},this.setSize=function(x,N,B=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=x,J=N,t.width=Math.floor(x*V),t.height=Math.floor(N*V),B===!0&&(t.style.width=x+"px",t.style.height=N+"px"),this.setViewport(0,0,x,N)},this.getDrawingBufferSize=function(x){return x.set(j*V,J*V).floor()},this.setDrawingBufferSize=function(x,N,B){j=x,J=N,V=B,t.width=Math.floor(x*B),t.height=Math.floor(N*B),this.setViewport(0,0,x,N)},this.getCurrentViewport=function(x){return x.copy(w)},this.getViewport=function(x){return x.copy(Ce)},this.setViewport=function(x,N,B,H){x.isVector4?Ce.set(x.x,x.y,x.z,x.w):Ce.set(x,N,B,H),we.viewport(w.copy(Ce).multiplyScalar(V).round())},this.getScissor=function(x){return x.copy($e)},this.setScissor=function(x,N,B,H){x.isVector4?$e.set(x.x,x.y,x.z,x.w):$e.set(x,N,B,H),we.scissor(k.copy($e).multiplyScalar(V).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(x){we.setScissorTest(bt=x)},this.setOpaqueSort=function(x){ue=x},this.setTransparentSort=function(x){me=x},this.getClearColor=function(x){return x.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(x=!0,N=!0,B=!0){let H=0;if(x){let F=!1;if(L!==null){const te=L.texture.format;F=te===Ea||te===ba||te===Ma}if(F){const te=L.texture.type,fe=te===Fn||te===Ti||te===Cr||te===Rr||te===ya||te===Sa,xe=be.getClearColor(),ge=be.getClearAlpha(),Ne=xe.r,Oe=xe.g,Re=xe.b;fe?(_[0]=Ne,_[1]=Oe,_[2]=Re,_[3]=ge,P.clearBufferuiv(P.COLOR,0,_)):(M[0]=Ne,M[1]=Oe,M[2]=Re,M[3]=ge,P.clearBufferiv(P.COLOR,0,M))}else H|=P.COLOR_BUFFER_BIT}N&&(H|=P.DEPTH_BUFFER_BIT),B&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),be.dispose(),X.dispose(),Te.dispose(),ve.dispose(),Wt.dispose(),It.dispose(),O.dispose(),he.dispose(),Xe.dispose(),q.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Dn),ie.removeEventListener("sessionend",Ba),di.stop()};function oe(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const x=Et.autoReset,N=Se.enabled,B=Se.autoUpdate,H=Se.needsUpdate,F=Se.type;I(),Et.autoReset=x,Se.enabled=N,Se.autoUpdate=B,Se.needsUpdate=H,Se.type=F}function ee(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Z(x){const N=x.target;N.removeEventListener("dispose",Z),ye(N)}function ye(x){Ve(x),ve.remove(x)}function Ve(x){const N=ve.get(x).programs;N!==void 0&&(N.forEach(function(B){q.releaseProgram(B)}),x.isShaderMaterial&&q.releaseShaderCache(x))}this.renderBufferDirect=function(x,N,B,H,F,te){N===null&&(N=Ge);const fe=F.isMesh&&F.matrixWorld.determinant()<0,xe=wu(x,N,B,H,F);we.setMaterial(H,fe);let ge=B.index,Ne=1;if(H.wireframe===!0){if(ge=g.getWireframeAttribute(B),ge===void 0)return;Ne=2}const Oe=B.drawRange,Re=B.attributes.position;let Ze=Oe.start*Ne,lt=(Oe.start+Oe.count)*Ne;te!==null&&(Ze=Math.max(Ze,te.start*Ne),lt=Math.min(lt,(te.start+te.count)*Ne)),ge!==null?(Ze=Math.max(Ze,0),lt=Math.min(lt,ge.count)):Re!=null&&(Ze=Math.max(Ze,0),lt=Math.min(lt,Re.count));const Dt=lt-Ze;if(Dt<0||Dt===1/0)return;he.setup(F,H,xe,B,ge);let Mt,mt=pe;if(ge!==null&&(Mt=T.get(ge),mt=Fe,mt.setIndex(Mt)),F.isMesh)H.wireframe===!0?(we.setLineWidth(H.wireframeLinewidth*nt()),mt.setMode(P.LINES)):mt.setMode(P.TRIANGLES);else if(F.isLine){let Pe=H.linewidth;Pe===void 0&&(Pe=1),we.setLineWidth(Pe*nt()),F.isLineSegments?mt.setMode(P.LINES):F.isLineLoop?mt.setMode(P.LINE_LOOP):mt.setMode(P.LINE_STRIP)}else F.isPoints?mt.setMode(P.POINTS):F.isSprite&&mt.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)nr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))mt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Pe=F._multiDrawStarts,At=F._multiDrawCounts,it=F._multiDrawCount,cn=ge?T.get(ge).bytesPerElement:1,Di=ve.get(H).currentProgram.getUniforms();for(let un=0;un<it;un++)Di.setValue(P,"_gl_DrawID",un),mt.render(Pe[un]/cn,At[un])}else if(F.isInstancedMesh)mt.renderInstances(Ze,Dt,F.count);else if(B.isInstancedBufferGeometry){const Pe=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,At=Math.min(B.instanceCount,Pe);mt.renderInstances(Ze,Dt,At)}else mt.render(Ze,Dt)};function vt(x,N,B){x.transparent===!0&&x.side===xn&&x.forceSinglePass===!1?(x.side=an,x.needsUpdate=!0,Gr(x,N,B),x.side=ai,x.needsUpdate=!0,Gr(x,N,B),x.side=xn):Gr(x,N,B)}this.compile=function(x,N,B=null){B===null&&(B=x),d=Te.get(B),d.init(N),b.push(d),B.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),x!==B&&x.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();const H=new Set;return x.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const te=F.material;if(te)if(Array.isArray(te))for(let fe=0;fe<te.length;fe++){const xe=te[fe];vt(xe,B,F),H.add(xe)}else vt(te,B,F),H.add(te)}),d=b.pop(),H},this.compileAsync=function(x,N,B=null){const H=this.compile(x,N,B);return new Promise(F=>{function te(){if(H.forEach(function(fe){ve.get(fe).currentProgram.isReady()&&H.delete(fe)}),H.size===0){F(x);return}setTimeout(te,10)}De.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let at=null;function On(x){at&&at(x)}function Dn(){di.stop()}function Ba(){di.start()}const di=new qc;di.setAnimationLoop(On),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(x){at=x,ie.setAnimationLoop(x),x===null?di.stop():di.start()},ie.addEventListener("sessionstart",Dn),ie.addEventListener("sessionend",Ba),this.render=function(x,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(N),N=ie.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,N,L),d=Te.get(x,b.length),d.init(N),b.push(d),se.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),pt.setFromProjectionMatrix(se,Nn,N.reversedDepth),de=this.localClippingEnabled,Y=re.init(this.clippingPlanes,de),p=X.get(x,E.length),p.init(),E.push(p),ie.enabled===!0&&ie.isPresenting===!0){const te=S.xr.getDepthSensingMesh();te!==null&&Os(te,N,-1/0,S.sortObjects)}Os(x,N,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(ue,me),Lt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Lt&&be.addToRenderList(p,x),this.info.render.frame++,Y===!0&&re.beginShadows();const B=d.state.shadowsArray;Se.render(B,x,N),Y===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=p.opaque,F=p.transmissive;if(d.setupLights(),N.isArrayCamera){const te=N.cameras;if(F.length>0)for(let fe=0,xe=te.length;fe<xe;fe++){const ge=te[fe];Ga(H,F,x,ge)}Lt&&be.render(x);for(let fe=0,xe=te.length;fe<xe;fe++){const ge=te[fe];Ha(p,x,ge,ge.viewport)}}else F.length>0&&Ga(H,F,x,N),Lt&&be.render(x),Ha(p,x,N);L!==null&&D===0&&(Ke.updateMultisampleRenderTarget(L),Ke.updateRenderTargetMipmap(L)),x.isScene===!0&&x.onAfterRender(S,x,N),he.resetDefaultState(),y=-1,v=null,b.pop(),b.length>0?(d=b[b.length-1],Y===!0&&re.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function Os(x,N,B,H){if(x.visible===!1)return;if(x.layers.test(N.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(N);else if(x.isLight)d.pushLight(x),x.castShadow&&d.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||pt.intersectsSprite(x)){H&&Ue.setFromMatrixPosition(x.matrixWorld).applyMatrix4(se);const fe=O.update(x),xe=x.material;xe.visible&&p.push(x,fe,xe,B,Ue.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||pt.intersectsObject(x))){const fe=O.update(x),xe=x.material;if(H&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ue.copy(x.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ue.copy(fe.boundingSphere.center)),Ue.applyMatrix4(x.matrixWorld).applyMatrix4(se)),Array.isArray(xe)){const ge=fe.groups;for(let Ne=0,Oe=ge.length;Ne<Oe;Ne++){const Re=ge[Ne],Ze=xe[Re.materialIndex];Ze&&Ze.visible&&p.push(x,fe,Ze,B,Ue.z,Re)}}else xe.visible&&p.push(x,fe,xe,B,Ue.z,null)}}const te=x.children;for(let fe=0,xe=te.length;fe<xe;fe++)Os(te[fe],N,B,H)}function Ha(x,N,B,H){const F=x.opaque,te=x.transmissive,fe=x.transparent;d.setupLightsView(B),Y===!0&&re.setGlobalState(S.clippingPlanes,B),H&&we.viewport(w.copy(H)),F.length>0&&Hr(F,N,B),te.length>0&&Hr(te,N,B),fe.length>0&&Hr(fe,N,B),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Ga(x,N,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new wi(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?Ur:Fn,minFilter:Ei,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const te=d.state.transmissionRenderTarget[H.id],fe=H.viewport||w;te.setSize(fe.z*S.transmissionResolutionScale,fe.w*S.transmissionResolutionScale);const xe=S.getRenderTarget(),ge=S.getActiveCubeFace(),Ne=S.getActiveMipmapLevel();S.setRenderTarget(te),S.getClearColor(G),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),Lt&&be.render(B);const Oe=S.toneMapping;S.toneMapping=ri;const Re=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),Y===!0&&re.setGlobalState(S.clippingPlanes,H),Hr(x,B,H),Ke.updateMultisampleRenderTarget(te),Ke.updateRenderTargetMipmap(te),De.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let lt=0,Dt=N.length;lt<Dt;lt++){const Mt=N[lt],mt=Mt.object,Pe=Mt.geometry,At=Mt.material,it=Mt.group;if(At.side===xn&&mt.layers.test(H.layers)){const cn=At.side;At.side=an,At.needsUpdate=!0,Va(mt,B,H,Pe,At,it),At.side=cn,At.needsUpdate=!0,Ze=!0}}Ze===!0&&(Ke.updateMultisampleRenderTarget(te),Ke.updateRenderTargetMipmap(te))}S.setRenderTarget(xe,ge,Ne),S.setClearColor(G,K),Re!==void 0&&(H.viewport=Re),S.toneMapping=Oe}function Hr(x,N,B){const H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,te=x.length;F<te;F++){const fe=x[F],xe=fe.object,ge=fe.geometry,Ne=fe.group;let Oe=fe.material;Oe.allowOverride===!0&&H!==null&&(Oe=H),xe.layers.test(B.layers)&&Va(xe,N,B,ge,Oe,Ne)}}function Va(x,N,B,H,F,te){x.onBeforeRender(S,N,B,H,F,te),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),F.onBeforeRender(S,N,B,H,x,te),F.transparent===!0&&F.side===xn&&F.forceSinglePass===!1?(F.side=an,F.needsUpdate=!0,S.renderBufferDirect(B,N,H,F,x,te),F.side=ai,F.needsUpdate=!0,S.renderBufferDirect(B,N,H,F,x,te),F.side=xn):S.renderBufferDirect(B,N,H,F,x,te),x.onAfterRender(S,N,B,H,F,te)}function Gr(x,N,B){N.isScene!==!0&&(N=Ge);const H=ve.get(x),F=d.state.lights,te=d.state.shadowsArray,fe=F.state.version,xe=q.getParameters(x,F.state,te,N,B),ge=q.getProgramCacheKey(xe);let Ne=H.programs;H.environment=x.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(x.isMeshStandardMaterial?It:Wt).get(x.envMap||H.environment),H.envMapRotation=H.environment!==null&&x.envMap===null?N.environmentRotation:x.envMapRotation,Ne===void 0&&(x.addEventListener("dispose",Z),Ne=new Map,H.programs=Ne);let Oe=Ne.get(ge);if(Oe!==void 0){if(H.currentProgram===Oe&&H.lightsStateVersion===fe)return Xa(x,xe),Oe}else xe.uniforms=q.getUniforms(x),x.onBeforeCompile(xe,S),Oe=q.acquireProgram(xe,ge),Ne.set(ge,Oe),H.uniforms=xe.uniforms;const Re=H.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Re.clippingPlanes=re.uniform),Xa(x,xe),H.needsLights=Cu(x),H.lightsStateVersion=fe,H.needsLights&&(Re.ambientLightColor.value=F.state.ambient,Re.lightProbe.value=F.state.probe,Re.directionalLights.value=F.state.directional,Re.directionalLightShadows.value=F.state.directionalShadow,Re.spotLights.value=F.state.spot,Re.spotLightShadows.value=F.state.spotShadow,Re.rectAreaLights.value=F.state.rectArea,Re.ltc_1.value=F.state.rectAreaLTC1,Re.ltc_2.value=F.state.rectAreaLTC2,Re.pointLights.value=F.state.point,Re.pointLightShadows.value=F.state.pointShadow,Re.hemisphereLights.value=F.state.hemi,Re.directionalShadowMap.value=F.state.directionalShadowMap,Re.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Re.spotShadowMap.value=F.state.spotShadowMap,Re.spotLightMatrix.value=F.state.spotLightMatrix,Re.spotLightMap.value=F.state.spotLightMap,Re.pointShadowMap.value=F.state.pointShadowMap,Re.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Oe,H.uniformsList=null,Oe}function Wa(x){if(x.uniformsList===null){const N=x.currentProgram.getUniforms();x.uniformsList=ys.seqWithValue(N.seq,x.uniforms)}return x.uniformsList}function Xa(x,N){const B=ve.get(x);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function wu(x,N,B,H,F){N.isScene!==!0&&(N=Ge),Ke.resetTextureUnits();const te=N.fog,fe=H.isMeshStandardMaterial?N.environment:null,xe=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:lr,ge=(H.isMeshStandardMaterial?It:Wt).get(H.envMap||fe),Ne=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Oe=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Re=!!B.morphAttributes.position,Ze=!!B.morphAttributes.normal,lt=!!B.morphAttributes.color;let Dt=ri;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Dt=S.toneMapping);const Mt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,mt=Mt!==void 0?Mt.length:0,Pe=ve.get(H),At=d.state.lights;if(Y===!0&&(de===!0||x!==v)){const Qt=x===v&&H.id===y;re.setState(H,x,Qt)}let it=!1;H.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==At.state.version||Pe.outputColorSpace!==xe||F.isBatchedMesh&&Pe.batching===!1||!F.isBatchedMesh&&Pe.batching===!0||F.isBatchedMesh&&Pe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Pe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Pe.instancing===!1||!F.isInstancedMesh&&Pe.instancing===!0||F.isSkinnedMesh&&Pe.skinning===!1||!F.isSkinnedMesh&&Pe.skinning===!0||F.isInstancedMesh&&Pe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Pe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Pe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Pe.instancingMorph===!1&&F.morphTexture!==null||Pe.envMap!==ge||H.fog===!0&&Pe.fog!==te||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==re.numPlanes||Pe.numIntersection!==re.numIntersection)||Pe.vertexAlphas!==Ne||Pe.vertexTangents!==Oe||Pe.morphTargets!==Re||Pe.morphNormals!==Ze||Pe.morphColors!==lt||Pe.toneMapping!==Dt||Pe.morphTargetsCount!==mt)&&(it=!0):(it=!0,Pe.__version=H.version);let cn=Pe.currentProgram;it===!0&&(cn=Gr(H,N,F));let Di=!1,un=!1,hr=!1;const Ct=cn.getUniforms(),mn=Pe.uniforms;if(we.useProgram(cn.program)&&(Di=!0,un=!0,hr=!0),H.id!==y&&(y=H.id,un=!0),Di||v!==x){we.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Ct.setValue(P,"projectionMatrix",x.projectionMatrix),Ct.setValue(P,"viewMatrix",x.matrixWorldInverse);const sn=Ct.map.cameraPosition;sn!==void 0&&sn.setValue(P,Ie.setFromMatrixPosition(x.matrixWorld)),st.logarithmicDepthBuffer&&Ct.setValue(P,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ct.setValue(P,"isOrthographic",x.isOrthographicCamera===!0),v!==x&&(v=x,un=!0,hr=!0)}if(F.isSkinnedMesh){Ct.setOptional(P,F,"bindMatrix"),Ct.setOptional(P,F,"bindMatrixInverse");const Qt=F.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),Ct.setValue(P,"boneTexture",Qt.boneTexture,Ke))}F.isBatchedMesh&&(Ct.setOptional(P,F,"batchingTexture"),Ct.setValue(P,"batchingTexture",F._matricesTexture,Ke),Ct.setOptional(P,F,"batchingIdTexture"),Ct.setValue(P,"batchingIdTexture",F._indirectTexture,Ke),Ct.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&Ct.setValue(P,"batchingColorTexture",F._colorsTexture,Ke));const gn=B.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&ne.update(F,B,cn),(un||Pe.receiveShadow!==F.receiveShadow)&&(Pe.receiveShadow=F.receiveShadow,Ct.setValue(P,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(mn.envMap.value=ge,mn.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(mn.envMapIntensity.value=N.environmentIntensity),un&&(Ct.setValue(P,"toneMappingExposure",S.toneMappingExposure),Pe.needsLights&&Au(mn,hr),te&&H.fog===!0&&Q.refreshFogUniforms(mn,te),Q.refreshMaterialUniforms(mn,H,V,J,d.state.transmissionRenderTarget[x.id]),ys.upload(P,Wa(Pe),mn,Ke)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ys.upload(P,Wa(Pe),mn,Ke),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ct.setValue(P,"center",F.center),Ct.setValue(P,"modelViewMatrix",F.modelViewMatrix),Ct.setValue(P,"normalMatrix",F.normalMatrix),Ct.setValue(P,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Qt=H.uniformsGroups;for(let sn=0,ks=Qt.length;sn<ks;sn++){const hi=Qt[sn];Xe.update(hi,cn),Xe.bind(hi,cn)}}return cn}function Au(x,N){x.ambientLightColor.needsUpdate=N,x.lightProbe.needsUpdate=N,x.directionalLights.needsUpdate=N,x.directionalLightShadows.needsUpdate=N,x.pointLights.needsUpdate=N,x.pointLightShadows.needsUpdate=N,x.spotLights.needsUpdate=N,x.spotLightShadows.needsUpdate=N,x.rectAreaLights.needsUpdate=N,x.hemisphereLights.needsUpdate=N}function Cu(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(x,N,B){const H=ve.get(x);H.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),ve.get(x.texture).__webglTexture=N,ve.get(x.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:B,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,N){const B=ve.get(x);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0};const Ru=P.createFramebuffer();this.setRenderTarget=function(x,N=0,B=0){L=x,R=N,D=B;let H=!0,F=null,te=!1,fe=!1;if(x){const ge=ve.get(x);if(ge.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(P.FRAMEBUFFER,null),H=!1;else if(ge.__webglFramebuffer===void 0)Ke.setupRenderTarget(x);else if(ge.__hasExternalTextures)Ke.rebindTextures(x,ve.get(x.texture).__webglTexture,ve.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Re=x.depthTexture;if(ge.__boundDepthTexture!==Re){if(Re!==null&&ve.has(Re)&&(x.width!==Re.image.width||x.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ke.setupDepthRenderbuffer(x)}}const Ne=x.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(fe=!0);const Oe=ve.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Oe[N])?F=Oe[N][B]:F=Oe[N],te=!0):x.samples>0&&Ke.useMultisampledRTT(x)===!1?F=ve.get(x).__webglMultisampledFramebuffer:Array.isArray(Oe)?F=Oe[B]:F=Oe,w.copy(x.viewport),k.copy(x.scissor),z=x.scissorTest}else w.copy(Ce).multiplyScalar(V).floor(),k.copy($e).multiplyScalar(V).floor(),z=bt;if(B!==0&&(F=Ru),we.bindFramebuffer(P.FRAMEBUFFER,F)&&H&&we.drawBuffers(x,F),we.viewport(w),we.scissor(k),we.setScissorTest(z),te){const ge=ve.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,ge.__webglTexture,B)}else if(fe){const ge=N;for(let Ne=0;Ne<x.textures.length;Ne++){const Oe=ve.get(x.textures[Ne]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ne,Oe.__webglTexture,B,ge)}}else if(x!==null&&B!==0){const ge=ve.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ge.__webglTexture,B)}y=-1},this.readRenderTargetPixels=function(x,N,B,H,F,te,fe,xe=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=ve.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge){we.bindFramebuffer(P.FRAMEBUFFER,ge);try{const Ne=x.textures[xe],Oe=Ne.format,Re=Ne.type;if(!st.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=x.width-H&&B>=0&&B<=x.height-F&&(x.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xe),P.readPixels(N,B,H,F,Ee.convert(Oe),Ee.convert(Re),te))}finally{const Ne=L!==null?ve.get(L).__webglFramebuffer:null;we.bindFramebuffer(P.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(x,N,B,H,F,te,fe,xe=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=ve.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge)if(N>=0&&N<=x.width-H&&B>=0&&B<=x.height-F){we.bindFramebuffer(P.FRAMEBUFFER,ge);const Ne=x.textures[xe],Oe=Ne.format,Re=Ne.type;if(!st.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ze),P.bufferData(P.PIXEL_PACK_BUFFER,te.byteLength,P.STREAM_READ),x.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xe),P.readPixels(N,B,H,F,Ee.convert(Oe),Ee.convert(Re),0);const lt=L!==null?ve.get(L).__webglFramebuffer:null;we.bindFramebuffer(P.FRAMEBUFFER,lt);const Dt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await yd(P,Dt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ze),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,te),P.deleteBuffer(Ze),P.deleteSync(Dt),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,N=null,B=0){const H=Math.pow(2,-B),F=Math.floor(x.image.width*H),te=Math.floor(x.image.height*H),fe=N!==null?N.x:0,xe=N!==null?N.y:0;Ke.setTexture2D(x,0),P.copyTexSubImage2D(P.TEXTURE_2D,B,0,0,fe,xe,F,te),we.unbindTexture()};const Du=P.createFramebuffer(),Pu=P.createFramebuffer();this.copyTextureToTexture=function(x,N,B=null,H=null,F=0,te=null){te===null&&(F!==0?(nr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=F,F=0):te=0);let fe,xe,ge,Ne,Oe,Re,Ze,lt,Dt;const Mt=x.isCompressedTexture?x.mipmaps[te]:x.image;if(B!==null)fe=B.max.x-B.min.x,xe=B.max.y-B.min.y,ge=B.isBox3?B.max.z-B.min.z:1,Ne=B.min.x,Oe=B.min.y,Re=B.isBox3?B.min.z:0;else{const gn=Math.pow(2,-F);fe=Math.floor(Mt.width*gn),xe=Math.floor(Mt.height*gn),x.isDataArrayTexture?ge=Mt.depth:x.isData3DTexture?ge=Math.floor(Mt.depth*gn):ge=1,Ne=0,Oe=0,Re=0}H!==null?(Ze=H.x,lt=H.y,Dt=H.z):(Ze=0,lt=0,Dt=0);const mt=Ee.convert(N.format),Pe=Ee.convert(N.type);let At;N.isData3DTexture?(Ke.setTexture3D(N,0),At=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ke.setTexture2DArray(N,0),At=P.TEXTURE_2D_ARRAY):(Ke.setTexture2D(N,0),At=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const it=P.getParameter(P.UNPACK_ROW_LENGTH),cn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Di=P.getParameter(P.UNPACK_SKIP_PIXELS),un=P.getParameter(P.UNPACK_SKIP_ROWS),hr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Mt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Mt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ne),P.pixelStorei(P.UNPACK_SKIP_ROWS,Oe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Re);const Ct=x.isDataArrayTexture||x.isData3DTexture,mn=N.isDataArrayTexture||N.isData3DTexture;if(x.isDepthTexture){const gn=ve.get(x),Qt=ve.get(N),sn=ve.get(gn.__renderTarget),ks=ve.get(Qt.__renderTarget);we.bindFramebuffer(P.READ_FRAMEBUFFER,sn.__webglFramebuffer),we.bindFramebuffer(P.DRAW_FRAMEBUFFER,ks.__webglFramebuffer);for(let hi=0;hi<ge;hi++)Ct&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ve.get(x).__webglTexture,F,Re+hi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ve.get(N).__webglTexture,te,Dt+hi)),P.blitFramebuffer(Ne,Oe,fe,xe,Ze,lt,fe,xe,P.DEPTH_BUFFER_BIT,P.NEAREST);we.bindFramebuffer(P.READ_FRAMEBUFFER,null),we.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(F!==0||x.isRenderTargetTexture||ve.has(x)){const gn=ve.get(x),Qt=ve.get(N);we.bindFramebuffer(P.READ_FRAMEBUFFER,Du),we.bindFramebuffer(P.DRAW_FRAMEBUFFER,Pu);for(let sn=0;sn<ge;sn++)Ct?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,gn.__webglTexture,F,Re+sn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,gn.__webglTexture,F),mn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Qt.__webglTexture,te,Dt+sn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Qt.__webglTexture,te),F!==0?P.blitFramebuffer(Ne,Oe,fe,xe,Ze,lt,fe,xe,P.COLOR_BUFFER_BIT,P.NEAREST):mn?P.copyTexSubImage3D(At,te,Ze,lt,Dt+sn,Ne,Oe,fe,xe):P.copyTexSubImage2D(At,te,Ze,lt,Ne,Oe,fe,xe);we.bindFramebuffer(P.READ_FRAMEBUFFER,null),we.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else mn?x.isDataTexture||x.isData3DTexture?P.texSubImage3D(At,te,Ze,lt,Dt,fe,xe,ge,mt,Pe,Mt.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(At,te,Ze,lt,Dt,fe,xe,ge,mt,Mt.data):P.texSubImage3D(At,te,Ze,lt,Dt,fe,xe,ge,mt,Pe,Mt):x.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,te,Ze,lt,fe,xe,mt,Pe,Mt.data):x.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,te,Ze,lt,Mt.width,Mt.height,mt,Mt.data):P.texSubImage2D(P.TEXTURE_2D,te,Ze,lt,fe,xe,mt,Pe,Mt);P.pixelStorei(P.UNPACK_ROW_LENGTH,it),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,cn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Di),P.pixelStorei(P.UNPACK_SKIP_ROWS,un),P.pixelStorei(P.UNPACK_SKIP_IMAGES,hr),te===0&&N.generateMipmaps&&P.generateMipmap(At),we.unbindTexture()},this.copyTextureToTexture3D=function(x,N,B=null,H=null,F=0){return nr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,N,B,H,F)},this.initRenderTarget=function(x){ve.get(x).__webglFramebuffer===void 0&&Ke.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Ke.setTextureCube(x,0):x.isData3DTexture?Ke.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Ke.setTexture2DArray(x,0):Ke.setTexture2D(x,0),we.unbindTexture()},this.resetState=function(){R=0,D=0,L=null,we.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const $i=new Sn(0,0,0,"YXZ"),Ki=new U,Yg={type:"change"},jg={type:"lock"},$g={type:"unlock"},Yl=.002,jl=Math.PI/2;class Kg extends lh{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Zg.bind(this),this._onPointerlockChange=Jg.bind(this),this._onPointerlockError=Qg.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(e){super.connect(e),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;Ki.setFromMatrixColumn(t.matrix,0),Ki.crossVectors(t.up,Ki),t.position.addScaledVector(Ki,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;Ki.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(Ki,e)}lock(e=!1){this.domElement.requestPointerLock({unadjustedMovement:e})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function Zg(n){if(this.enabled===!1||this.isLocked===!1)return;const e=this.object;$i.setFromQuaternion(e.quaternion),$i.y-=n.movementX*Yl*this.pointerSpeed,$i.x-=n.movementY*Yl*this.pointerSpeed,$i.x=Math.max(jl-this.maxPolarAngle,Math.min(jl-this.minPolarAngle,$i.x)),e.quaternion.setFromEuler($i),this.dispatchEvent(Yg)}function Jg(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(jg),this.isLocked=!0):(this.dispatchEvent($g),this.isLocked=!1)}function Qg(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const e0=.008,$l=Math.PI/2.1;function t0(n,e,t=e0){return{yaw:n.yaw-e.dx*t,pitch:Math.max(-$l,Math.min($l,n.pitch-e.dy*t))}}function n0(n,e){const t=new Set(e);let i=n;for(;i;){if(t.has(i))return i;i=i.parent}return null}function i0(n,e,t,i,r,s){return{id:`book-${n}-chapter-${e}`,title:t,theme:i,rooms:s.map(([o,a],l)=>({id:`b${n}-c${e}-r${l+1}`,title:o,theme:i,puzzle:a,difficulty:Number((r+l*.2).toFixed(1)),status:n===1&&(e===1||e===2&&l<=3||e===3&&l<=3||e===4&&l<=3)||n===2&&e===1&&l<=2?"playable":"planned"}))}}const ct=i0,wr=[{id:"book-1",number:1,title:"魔法石",subtitle:"霍格沃茨的第一道门",palette:["#7a1f2b","#d3a84b","#19151d"],visualTheme:"温暖烛光、哥特学院、深红与金色、古老石墙",chapters:[ct(1,1,"初入魔法世界","猫头鹰信件、对角巷、魔杖与分院仪式",1,[["猫头鹰来信","重组地址碎片并找出被信件覆盖的隐藏出口"],["对角巷清单","依据课程清单匹配商店、物品和正确数量"],["魔杖选择","组合木材、杖芯、光效和声音反馈"],["分院仪式","排列四学院象征与人物品质打开宴会厅"]]),ct(1,2,"城堡禁区","移动楼梯、画像、巡夜与三头犬活板门",1.5,[["移动楼梯","观察周期并在正确时机连接三段路线"],["会说话的画像","从画像对话矛盾中推导正确口令"],["管理员的巡夜","利用盔甲、猫叫与暗门进行潜行"],["三头犬活板门","组合乐器并复现让守门生物入睡的旋律"]]),ct(1,3,"镜中秘密","飞行课、巨怪、禁书区与厄里斯魔镜",2,[["飞行课遗失物","控制漂浮轨迹把散落物送回正确位置"],["巨怪洗手间","利用悬浮机关移动障碍并建立逃生路线"],["图书馆禁书区","按历史时间线排列书脊并避开尖叫书籍"],["厄里斯魔镜","比较镜像与现实差异选择真正需要的物品"]]),ct(1,4,"地下试炼","魔鬼网、飞钥匙、巫师棋与魔法石",2.5,[["魔鬼网","控制光源与节奏摆脱收缩藤蔓"],["飞钥匙房","依据翅膀损伤、速度和锁孔锁定钥匙"],["巫师棋","规划最少牺牲路线穿过动态棋盘"],["魔法石密室","结合药剂逻辑、镜像线索与章节物品"]])]},{id:"book-2",number:2,title:"密室",subtitle:"蛇语在墙壁深处回响",palette:["#123d32","#7b9361","#0b1412"],visualTheme:"潮湿石窟、蛇形纹样、墨绿冷光、日记墨迹",chapters:[ct(2,1,"不祥警告","精灵封锁、飞车、打人柳与墙上血字",2.4,[["精灵的封锁","修复被干扰物件并找出住宅出口"],["飞车失控","在移动场景中调整动力方向与重量"],["打人柳下","观察树枝攻击规律并匹配安全节拍"],["墙上的血字","利用反射光和水迹还原消失警告"]]),ct(2,2,"决斗与变形","曼德拉草、决斗俱乐部、复方汤剂与伪装",2.9,[["曼德拉草温室","按成熟度、盆土和叫声完成移栽"],["决斗俱乐部","运用护盾、解除和反击的克制关系"],["复方汤剂仓库","按属性、火候与时间调制药剂"],["斯莱特林休息室","在伪装倒计时内筛选有效情报"]]),ct(2,3,"日记中的记忆","盥洗室、日记、蜘蛛巢与被篡改往事",3.4,[["被淹没的盥洗室","调整水管压力显露蛇形入口"],["日记墨迹","在文字消失前连接人物地点与时间"],["禁林蜘蛛巢","依据声音方向和蛛网震动逃生"],["海格往事","对比现实物证与记忆找出篡改"]]),ct(2,4,"蛇怪密室","蛇语石门、管道、凤凰与日记核心",3.9,[["蛇语石门","通过音高和节奏复现门锁序列"],["管道迷宫","依据水流回声和蛇皮判断路线"],["凤凰与毒牙","避开直视威胁并组合治疗与攻击"],["日记核心","在墨迹侵蚀倒计时中定位核心弱点"]])]},{id:"book-3",number:3,title:"阿兹卡班的囚徒",subtitle:"地图、月光与闭合的时间",palette:["#243747","#96a6b4","#17191d"],visualTheme:"暴风雨、月光、旧羊皮地图、旋转钟表",chapters:[ct(3,1,"逃犯阴影","骑士巴士、怪物书、摄魂怪与密道",3.4,[["骑士巴士","在高速变化车厢中固定行李并识别信号"],["怪物书","通过书脊束带和触摸顺序打开教材"],["摄魂怪列车","维持光源和积极记忆阻止冻结"],["霍格莫德密道","使用活点脚印破解隐藏路线"]]),ct(3,2,"时间与恐惧","博格特、月相、占卜与钟楼",3.9,[["博格特衣柜","识别恐惧规则并用荒诞变形解除"],["卢平课堂","根据月相足迹与毛发辨别形态"],["占卜教室","区分随机图案与可重复预兆"],["钟楼机关","同步三个不同时速的钟摆"]]),ct(3,3,"尖叫棚屋","打人柳、身份、斑斑与满月",4.4,[["打人柳密道","组合地图时序和树枝周期进入地道"],["棚屋身份谜题","根据足迹魔杖和证词判断身份"],["斑斑的秘密","追踪体型变化与缺失手指揭示伪装"],["满月倒计时","在环境变化前配置防护与撤离路线"]]),ct(3,4,"时间转换器","守护神、双时间线、塔楼与闭环",4.9,[["湖边守护神","收集记忆碎片构筑完整守护神"],["双时间线救援","让过去与现在的机关保持一致"],["塔楼营救","在不被过去自己发现时改变物件"],["闭环逃脱","同时满足三项事件且不制造时间矛盾"]])]},{id:"book-4",number:4,title:"火焰杯",subtitle:"荣耀背后隐藏着门钥匙",palette:["#1d3f5e","#59a6bd","#d67533"],visualTheme:"国际赛事、蓝色火焰、深湖、龙巢与活体迷宫",chapters:[ct(4,1,"黑魔标记","门钥匙、世界杯营地、骚乱与标记",4.6,[["门钥匙山丘","通过异常触感和空间残影找出门钥匙"],["世界杯营地","依据旗帜语言和空间结构找到营地"],["骚乱撤离","在受限视野中利用声音与地标撤离"],["黑魔标记","重建事件顺序并找出施法位置"]]),ct(4,2,"争霸赛开启","火焰杯、金蛋、龙巢与水下歌声",5.1,[["火焰杯契约","解读年龄线契约符号与参赛规则"],["金蛋线索","按龙种巢穴与护甲选择策略"],["龙巢夺蛋","动态躲避攻击并用场景机关夺蛋"],["水下歌声","改变声音介质后解析旋律密码"]]),ct(4,3,"黑湖营救","鳃囊草、深湖、人鱼村与超额救援",5.6,[["鳃囊草配方","限时辨别水下呼吸材料"],["深湖导航","管理氧气光照和水流寻找地标"],["人鱼村契约","通过符号语言确认人质与规则"],["超额救援","在资源不足时规划多人救援顺序"]]),ct(4,4,"迷宫与墓地","移动树篱、斯芬克斯、奖杯与墓地",6.1,[["会移动的树篱","记录路径变化规律避免循环"],["斯芬克斯问题","在时间压力下完成文字拆分谜题"],["奖杯门钥匙","识别被替换的终点机关并反制"],["墓地决战","组合护盾闪避与环境互动完成逃脱"]])]},{id:"book-5",number:5,title:"凤凰社",subtitle:"规则、反抗与预言之门",palette:["#9e6174","#ead6d6","#111217"],visualTheme:"压抑粉色办公室、秘密训练室、宣传墙与神秘事务司",chapters:[ct(5,1,"审判与监视","巷道、听证会、调查官与血字惩罚",5.8,[["摄魂怪巷道","在照明失效时保护同伴"],["魔法部听证会","按时间证词和法条建立辩护链"],["高级调查官","从不断新增规则中找出逻辑冲突"],["血字惩罚室","利用镜像书写与转印解除机关"]]),ct(5,2,"邓布利多军","有求必应屋、防御阵列、名单与突袭",6.3,[["有求必应屋","用准确需求召唤训练空间"],["基础防御阵列","让位置和咒语方向组成完整护盾"],["秘密成员名单","通过墨水魔法识别泄密路径"],["突袭逃脱","在空间收缩时疏散成员并销毁证据"]]),ct(5,3,"预言梦境","大脑封闭术、壁炉网络、禁林与诱饵",6.8,[["大脑封闭术","区分真实记忆诱导画面与植入信息"],["壁炉网络","连接正确地点并绕过被监控节点"],["禁林审判","利用生物规则化解冲突"],["虚假营救","从不完整梦境中发现诱饵"]]),ct(5,4,"神秘事务司","旋转门厅、时间厅、预言大厅与帷幔",7.3,[["旋转门厅","旋转后依靠非视觉线索确认出口"],["时间厅","控制不同时间方向的物体"],["预言大厅","按人物关系和编号找到预言球"],["帷幔之战","跨房间协同并保护预言撤离"]])]},{id:"book-6",number:6,title:"混血王子",subtitle:"批注、记忆与海边洞穴",palette:["#4c493b","#b89a59","#14221d"],visualTheme:"旧课本批注、液态记忆、暗金墨绿与海边洞穴",chapters:[ct(6,1,"王子的课本","魔药、解毒剂、无声咒与身份批注",6.8,[["魔药教室","比较标准配方与手写批注判断改动"],["解毒剂链","从症状反推毒素与材料"],["无声咒语","依据目标反馈调整施法意图"],["身份批注","分析字迹知识和年代锁定主人"]]),ct(6,2,"记忆之谜","记忆储藏、宴会、篡改与魂器",7.3,[["记忆储藏室","按人物地点和情绪整理液态记忆"],["斯拉格霍恩宴会","从社交关系和回避话题提取线索"],["被篡改的记忆","比较音画不同步与缺失帧"],["魂器真相","连接跨越数十年的物件和人物关系"]]),ct(6,3,"消失柜","有求必应屋、双柜、毒物与入侵计划",7.8,[["有求必应屋迷藏","在堆积物三维迷宫定位同一物件"],["双柜共振","让两个远端房间状态实时联动"],["项链与毒酒","建立受害者传递路径与目标因果图"],["马尔福的计划","在不触发防御时拆解入侵路线"]]),ct(6,4,"海边洞穴","岩壁、黑湖小船、石盆与天文塔",8.3,[["岩壁入口","通过潮汐血液和岩层发现入口"],["黑湖小船","平衡重量人数与魔法强度"],["毒药石盆","规划每次取药后的空间和资源变化"],["天文塔","在多重倒计时中结合洞穴与入侵信息"]])]},{id:"book-7",number:7,title:"死亡圣器",subtitle:"七年线索汇聚于最后一夜",palette:["#252525","#b9b4a4","#7e2e25"],visualTheme:"战争废墟、荒野营地、银色牝鹿、古老符号与燃烧城堡",chapters:[ct(7,1,"逃亡之路","七个波特、婚礼、荒野与魔法部",8,[["七个波特","按身份细节与路线限制分配护送"],["婚礼警报","场景突变后判断出口与可信人物"],["荒野营地","管理保护咒食物方向与广播情报"],["魔法部潜入","三种伪装权限交叉配合完成任务"]]),ct(7,2,"圣器传说","家族遗物、山谷、银色牝鹿与三兄弟",8.5,[["格里莫广场遗物","按家族树和房间历史追踪挂坠盒"],["戈德里克山谷","组合墓碑童话和历史记录"],["银色牝鹿","追踪守护神并管理冰湖资源"],["三兄弟传说","让三件圣器机制在同一模型中成立"]]),ct(7,3,"古灵阁劫案","贝壳小屋、妖精通道、复制金库与巨龙",9,[["贝壳小屋审讯","用魔杖归属和证词制定潜入计划"],["妖精通道","高速切换轨道岔路制动与伪装"],["复制金库","规划最少接触路线避免指数复制"],["巨龙逃生","解除锁链打开穹顶并利用巨龙行为"]]),ct(7,4,"霍格沃茨决战","冠冕、厉火、城堡防线与终局密室",9.4,[["寻找冠冕","整合七部历史线索定位最后魂器"],["厉火密室","在扩散火焰中边移动边改变地形"],["城堡防线","把画像盔甲植物和咒语部署到战区"],["终局密室","综合魔杖归属魂器状态与前关信息"]])]}],r0={books:wr.length,chapters:wr.reduce((n,e)=>n+e.chapters.length,0),rooms:wr.flatMap(n=>n.chapters).reduce((n,e)=>n+e.rooms.length,0)},Lr="hogwarts-escape-progress";function s0(n){n.removeItem(Lr)}function Jc(n){const e=JSON.parse(n.getItem(Lr));return e?{completedChapter:e.completedChapter,continueFrom:e.continueFrom}:null}function o0(n){const{book:e,chapter:t,room:i}=n.continueFrom;return(e-1)*16+(t-1)*4+i-1}function a0(n,{book:e,chapter:t}){const i=n?.completedChapter;return i?.book===e&&i.chapter+1===t||i?.book+1===e&&i.chapter===4&&t===1}function ot(n,{book:e,chapter:t,room:i}){const r=JSON.parse(n.getItem(Lr));n.setItem(Lr,JSON.stringify({version:1,...r?.completedChapter?{completedChapter:r.completedChapter}:{},continueFrom:{book:e,chapter:t,room:i}}))}function Us(n,{book:e,chapter:t,room:i}){n.setItem(Lr,JSON.stringify({version:1,completedChapter:{book:e,chapter:t},continueFrom:{book:e,chapter:t,room:i}}))}const l0={en:{魔法石:"Philosopher's Stone",密室:"Chamber of Secrets",阿兹卡班的囚徒:"Prisoner of Azkaban",火焰杯:"Goblet of Fire",凤凰社:"Order of the Phoenix",混血王子:"Half-Blood Prince",死亡圣器:"Deathly Hallows",霍格沃茨的第一道门:"The First Gate of Hogwarts","温暖烛光、哥特学院、深红与金色、古老石墙":"Warm candlelight, Gothic halls, deep crimson and gold, and ancient stone walls.",初入魔法世界:"Entering the Wizarding World",城堡禁区:"Forbidden Castle Corridors",镜中秘密:"Secrets in the Mirror",地下试炼:"Underground Trials",重组地址碎片并找出被信件覆盖的隐藏出口:"Reassemble address fragments and uncover the hidden exit buried beneath the letters.","依据课程清单匹配商店、物品和正确数量":"Match each shop, item, and quantity to the school supply list.","组合木材、杖芯、光效和声音反馈":"Combine wood, core, light, and sound feedback to find the right wand.",排列四学院象征与人物品质打开宴会厅:"Match the four house emblems with their defining traits to open the Great Hall.",观察周期并在正确时机连接三段路线:"Observe the cycle and connect three route segments at the right moment.",从画像对话矛盾中推导正确口令:"Use contradictions in the portraits’ testimony to deduce the password.","利用盔甲、猫叫与暗门进行潜行":"Use armor, a cat’s bell, and a secret door to slip past the patrol.",组合乐器并复现让守门生物入睡的旋律:"Combine instruments and recreate the melody that sends the guardian to sleep.",控制漂浮轨迹把散落物送回正确位置:"Control floating trajectories to return each lost object to its proper place.",利用悬浮机关移动障碍并建立逃生路线:"Use levitation mechanisms to clear obstacles and build an escape route.",按历史时间线排列书脊并避开尖叫书籍:"Order book spines by historical date while avoiding the screaming volume.",比较镜像与现实差异选择真正需要的物品:"Compare reflection and reality to choose what is truly needed.",控制光源与节奏摆脱收缩藤蔓:"Control light and rhythm to escape the tightening vines.","依据翅膀损伤、速度和锁孔锁定钥匙":"Identify the key by wing damage, speed, and the lock’s keyhole.",规划最少牺牲路线穿过动态棋盘:"Plan a route across the living board with the fewest sacrifices.","结合药剂逻辑、镜像线索与章节物品":"Combine potion logic, mirror clues, and items gathered throughout the chapter.",猫头鹰来信:"Owl Post","目标：按弗农改变藏身处的时间顺序检查四封信":"Objective: inspect the four letters in the order the Dursleys changed hiding places.","地址会追着哈利变化。错误选择会让已确认的信全部重新飞散。":"The address follows Harry wherever he goes. A wrong choice scatters every confirmed letter.",对角巷清单:"Diagon Alley List","目标：按霍格沃茨清单采购四件合规格物品，预算 12 加隆":"Objective: buy four correctly specified school items in list order with a budget of 12 Galleons.","课本 → 二号锡制坩埚 → 猫头鹰 → 魔杖盒。核对规格与价签，买错会清空采购篮。":"Textbook → size 2 pewter cauldron → owl → wand case. Check every specification and price; a wrong purchase empties the basket.",魔杖选择:"The Wand Chooses","目标：第一阶段，从三种木材中找出与你产生稳定共鸣的一种":"Objective: first, find the one wood among three that resonates steadily with you.","木材线索：闪电形旧伤旁，常青叶不会在严冬凋零。选错会触发失控魔法。":"Wood clue: beside the lightning-shaped scar, an evergreen leaf never fades in winter. A wrong choice unleashes wild magic.",分院仪式:"Sorting Ceremony","目标：走近分院帽，观察大厅里的四学院象征":"Objective: approach the Sorting Hat and study the four house emblems in the Great Hall.","勇气、忠诚、智慧与野心各有象征；分院帽正在等待你的选择。":"Courage, loyalty, wisdom, and ambition each have an emblem. The Sorting Hat awaits your choice.",移动楼梯:"Moving Staircases","目标：依据钟摆与月相路线，依次稳定三座移动楼梯":"Objective: use the pendulum and moon-route clues to stabilize three moving staircases in order.","路线铭文：从最低的平台起步；月光桥只在钟摆居中时停驻；最后登上最高塔。选错会让路线复位并增加 5 秒惩罚。":"Route inscription: begin at the lowest landing; the moonlit bridge stops only when the pendulum is centered; finish at the highest tower. A mistake resets the route and adds five seconds.",会说话的画像:"Talking Portraits","目标：比较三幅画像的证词，按可信的发言顺序询问口令":"Objective: compare three portraits’ testimony and question them in the credible order to reveal the password.","学者说骑士不是第一位；骑士承认学者必须先发言；女士说自己在骑士之后。错误询问会惊动走廊并清空推理。":"The scholar says the knight is not first; the knight admits the scholar must speak first; the lady says she follows the knight. A wrong question alerts the corridor and clears your deductions.",管理员的巡夜:"The Caretaker’s Patrol","目标：利用盔甲遮挡、猫铃声与暗门，避开管理员的灯光巡查":"Objective: use the suit of armor, the cat’s bell, and the secret door to evade the caretaker’s lantern patrol.","巡夜图记：灯光先扫过空盔甲；猫铃能把脚步引向反方向；最后掀开独角兽挂毯。走错会清空路线并提高警戒。":"Patrol notes: the light first sweeps the empty armor; the cat’s bell draws footsteps away; finally lift the unicorn tapestry. A wrong move resets the route and raises the alert.",三头犬活板门:"Three-Headed Guardian","目标：按守门生物能接受的层次，奏出完整安眠旋律":"Objective: perform the complete lullaby in the layers the guardian can tolerate.","褪色乐谱写着：先让气息像夜风进入梦乡，再让琴弦托住梦境，最后以发条的轻响封住鼾声。错奏会重置旋律并惊醒守卫。":"The faded score says: let breath drift into sleep like a night wind, let strings cradle the dream, then seal the snoring with a soft clockwork chime. A wrong note resets the melody and wakes the guardian.",飞行课遗失物:"Flying Lesson: Lost Property","目标：借助风向旗判断重量，依次把三件遗失物送入对应的安全轨迹":"Objective: read the windsock and send three lost objects into their safe flight paths in weight order.","风向板写着：最轻的红色织物先借低风归队；有月纹的笔记随后穿过中环；沉重黄铜罗盘最后沿高风落到新生手中。错序会卷起乱流并吹散全部物品。":"The wind board says: the light red cloth rides the low wind first; the moon-marked notebook follows through the middle ring; the heavy brass compass returns last on the high current. A wrong order creates turbulence and scatters everything.",巨怪洗手间:"Troll Washroom","目标：依次稳定漏水、悬浮瓦砾，再放下横梁架出逃生路线":"Objective: stop the leak, levitate the rubble, then lower the beam to build an escape route.","破裂水管正在冲散落脚点。先转动月纹阀止水，再让碎石升起清出通道，最后才能把高处横梁平稳放到沟渠上。错序会让巨怪逼近并震塌路线。":"The burst pipe is washing away every foothold. Turn the moon-marked valve first, raise the rubble to clear the passage, then lower the high beam across the channel. A wrong order brings the troll closer and collapses the route.",图书馆禁书区:"Restricted Section","目标：依据馆藏年代，按从古到今的顺序点亮三本安全书脊":"Objective: use the catalogue dates to illuminate three safe book spines from oldest to newest.","目录铜牌记载：四学院建校录最古老；龙灾账册写于其后数百年；月蚀纪事刚完成修订。避开锁链缠绕、会尖叫的无年卷。":"The brass catalogue says: the Founders’ Record is oldest; the Dragon Calamity Ledger came centuries later; the Eclipse Chronicle was just revised. Avoid the chained, dateless volume that screams.",厄里斯魔镜:"Mirror of Erised","目标：比较镜中欲望与现实处境，依次选择真正需要的三件物品":"Objective: compare desire with reality and choose the three things you truly need, in order.","镜中人戴着王冠、捧着奖杯，却在现实的寒风中发抖。先御寒，再为黑暗出口照路；最后记住：能共同离开的人，比独占的荣誉更重要。":"The reflection wears a crown and holds a trophy, yet shivers in the real cold. Choose warmth first, then light for the dark exit, and remember: a companion who leaves with you matters more than glory kept alone.",魔鬼网:"Devil’s Snare","目标：保持镇静，按正确节奏控制蓝铃火焰，让藤蔓松开地下出口":"Objective: stay calm and control the bluebell flames in the right rhythm to make the vines release the underground exit.","挣扎会让藤蔓收紧。先放松摆脱缠绕，再点燃冷焰，最后维持稳定光照；猛烈爆燃只会惊动整片根网。":"Struggling tightens the vines. Relax first, ignite the cool flame, then hold a steady light; a violent burst only alarms the entire root network.",飞钥匙房:"Flying Keys","目标：依次确认翅膀损伤、飞行轨迹和锁孔材质，锁定唯一真钥匙":"Objective: identify wing damage, flight path, and keyhole material in order to find the one true key.","门锁留下银屑；真正用过的钥匙左翼弯折，负重后会沿顺时针轨迹下沉。先观察损伤，再追踪轨迹，最后核对银色钥匙。":"The lock left silver filings. The used key has a bent left wing and sinks clockwise under weight. Inspect the damage, trace the path, then confirm the silver key.","左翼折痕 · 顺时针下沉 · 银屑锁孔":"BENT LEFT WING · CLOCKWISE DESCENT · SILVER LOCK",左翼弯折的钥影:"Key with a bent left wing","I · 使用损伤":"I · WEAR DAMAGE",顺时针下沉轨迹:"Clockwise descending trail","II · 负重飞行":"II · WEIGHTED FLIGHT",小型银钥匙:"Small silver key","III · 银屑吻合":"III · SILVER MATCH",华丽金钥匙:"Ornate golden key","诱饵 · 锁孔无金屑":"DECOY · NO GOLD IN LOCK","飞钥匙房已加载：依次核对折翼、飞行轨迹和锁孔银屑。":"Flying Keys loaded: inspect the bent wing, clockwise trail, and silver filings in order.","“{label}”惊散了钥匙群！追逐失误升至 {count}，三条证据需要重新确认。":"“{label}” scattered the flock! Pursuit errors rose to {count}; recheck all three clues.","左翼折痕与门框刮痕一致。现在观察负重钥匙群，寻找顺时针下沉的轨迹。":"The bent left wing matches the frame scratch. Now watch the weighted flock for a clockwise descending path.","下沉轨迹锁定了小型钥匙。最后核对锁孔银屑，排除华丽但材质不符的金钥匙。":"The descending path identifies a small key. Compare the lock’s silver filings last and reject the ornate golden mismatch.","飞钥匙证据已确认 {count} / 3":"Flying-key clues confirmed: {count} / 3","{label}与现场证据吻合，钥匙群的范围缩小了。":"{label} matches the physical evidence; the flock narrows.","飞钥匙房完成：折翼银钥匙准确嵌入门锁，通往巫师棋盘的石门已经开启":"Flying Keys complete: the bent-wing silver key fits, opening the stone door to Wizard Chess.","折翼证明它被使用过，顺时针下沉暴露负重，银屑完成最终材质核对。前方传来巨大棋子的脚步声。":"The bent wing proves prior use, the clockwise descent reveals its weight, and the filings confirm silver. Giant chess pieces stir ahead.","第一部 · 第四章 · 第 2 关完成":"Book 1 · Chapter 4 · Room 2 complete",折翼银钥匙:"The Bent-Wing Silver Key","银钥匙旋转一周，棋盘石门轰然开启——正在进入巫师棋盘！":"The silver key turns once and the stone door crashes open—entering Wizard Chess!","巫师棋已加载：先诱敌，再双攻，最后沿空线推进。":"Wizard Chess loaded: decoy first, fork second, then advance along the open file.",巫师棋:"Wizard Chess","目标：用最少牺牲打开通往对岸的安全棋路":"Objective: open a safe route across the board with the fewest sacrifices.","黑后封锁中央。先用边兵引开主教，再让骑士双攻国王与城堡，最后直车沿空出的纵线推进；贸然冲后会让已投入的棋子全部被吃。":"The black queen controls the center. Use the edge pawn to draw off the bishop, fork king and rook with the knight, then advance the rook along the open file. Charging the queen too soon loses every committed piece.","边兵牵制主教 · 骑士双攻 · 城堡穿过空线":"EDGE PAWN DRAWS BISHOP · KNIGHT FORK · ROOK CROSSES OPEN FILE",边兵诱敌:"Edge-pawn decoy","I · 引开主教":"I · DRAW OFF BISHOP",骑士双攻:"Knight fork","II · 将军攻车":"II · CHECK KING AND ROOK",城堡沿空线推进:"Rook along open file","III · 空线抵岸":"III · CROSS THE OPEN FILE",王后强攻:"Queen charge","诱饵 · 暴露全线":"DECOY · EXPOSES THE FILE","“{label}”暴露了棋路！巨棋吃掉已投入棋子，被吃总数升至 {count}。":"“{label}” exposed the route! Giant pieces captured the committed force; {count} pieces lost in total.","边兵引开了黑主教。现在用骑士同时威胁国王与城堡，迫使黑方让出中央。":"The edge pawn drew off the black bishop. Now fork the king and rook with the knight to force the center open.","骑士双攻奏效，纵线已经清空。最后让城堡沿直线推进到对岸。":"The knight fork worked and cleared the file. Send the rook straight across to the far rank.","安全棋步已确认 {count} / 3":"Safe moves confirmed: {count} / 3","{label}成立，巨型黑棋被迫改换阵形。":"{label} works; the giant black pieces are forced to change formation.","巫师棋完成：仅以边兵诱敌，骑士与城堡已安全抵达对岸":"Wizard Chess complete: only the edge pawn was sacrificed; the knight and rook reached the far side safely.","诱敌打开斜线，双攻迫使让位，城堡穿过空线。最后的魔法石密室就在棋盘后方。":"The decoy opened a diagonal, the fork forced a retreat, and the rook crossed the open file. The Stone Chamber lies beyond the board.","第一部 · 第四章 · 第 3 关完成":"Book 1 · Chapter 4 · Room 3 complete",最少牺牲棋路:"The Least-Sacrifice Route","白色城堡抵达对岸，火门显现——正在进入魔法石密室！":"The white rook reaches the far rank and a fire door appears—entering the Stone Chamber!","最终密室已加载：先解药剂逻辑，再辨镜像，最后证明守护意图。":"Final chamber loaded: solve the potions, read the mirror, then prove your protective intent.",魔法石密室:"The Stone Chamber","目标：穿过黑焰，解读镜像，并证明你只想保护魔法石":"Objective: cross the black flames, interpret the mirror, and prove you seek only to protect the Stone.","七瓶药剂中，最小的瓶子可穿过黑焰。镜中真正的守护者口袋仍空着；想夺取魔法石的手只会触发密室腐化。":"Of seven potions, the smallest bottle crosses the black fire. In the mirror, a true guardian’s pocket remains empty; a hand reaching to take the Stone only awakens the chamber’s corruption.",精灵的封锁:"The Elf’s Blockade","目标：循魔力残痕解除住宅中的三重封锁，赶往国王十字车站":"Objective: follow the magical residue, break the house’s triple blockade, and reach King’s Cross.","绿色干扰从邮槽进入，绕过悬浮蛋糕，最后汇入壁炉封印。错碰尖叫灯会让封锁重新闭合。":"Green interference enters through the letter slot, circles the floating cake, then flows into the fireplace seal. Touching the shrieking lamp closes the blockade again.",飞车失控:"Runaway Flying Car","目标：在撞上高架桥前依次稳定配重、航向与油门":"Objective: stabilize the load, heading, and throttle in order before hitting the viaduct.","后备箱先把车头拉高；红色铁路信号给出航向；发动机过热时只能脉冲给油。猛踩油门会让飞车再次翻滚。":"The boot first pulls the nose high; the red railway signal gives the heading; an overheating engine accepts only pulsed throttle. Flooring it sends the car rolling again.",打人柳下:"Beneath the Whomping Willow","目标：读懂枝条的高扫、低返与露根间隙，安全抵达树洞":"Objective: read the high sweep, low return, and exposed-root opening to reach the hollow safely.","粗枝先从头顶横扫；回摆会贴近地面。只有第二次攻击收势后，发光树根之间才会短暂露出通道。":"A heavy branch sweeps overhead first; its return cuts close to the ground. Only after the second strike settles does a passage briefly open between the glowing roots."},fr:{魔法石:"La Pierre philosophale",密室:"La Chambre des secrets",阿兹卡班的囚徒:"Le Prisonnier d’Azkaban",火焰杯:"La Coupe de feu",凤凰社:"L’Ordre du Phénix",混血王子:"Le Prince de sang-mêlé",死亡圣器:"Les Reliques de la Mort",霍格沃茨的第一道门:"La première porte de Poudlard","温暖烛光、哥特学院、深红与金色、古老石墙":"Lueurs de bougies, architecture gothique, rouge profond, or et antiques murs de pierre.",初入魔法世界:"Entrée dans le monde des sorciers",城堡禁区:"Les couloirs interdits du château",镜中秘密:"Les secrets du miroir",地下试炼:"Les épreuves souterraines",重组地址碎片并找出被信件覆盖的隐藏出口:"Reconstituez les fragments d’adresse et découvrez la sortie cachée sous les lettres.","依据课程清单匹配商店、物品和正确数量":"Associez chaque boutique, objet et quantité à la liste des fournitures.","组合木材、杖芯、光效和声音反馈":"Combinez bois, cœur, lumière et réactions sonores pour trouver la bonne baguette.",排列四学院象征与人物品质打开宴会厅:"Associez les quatre emblèmes à leurs qualités pour ouvrir la Grande Salle.",观察周期并在正确时机连接三段路线:"Observez le cycle et reliez les trois segments du parcours au bon moment.",从画像对话矛盾中推导正确口令:"Exploitez les contradictions des portraits pour déduire le mot de passe.","利用盔甲、猫叫与暗门进行潜行":"Servez-vous de l’armure, de la clochette du chat et d’une porte secrète pour éviter la ronde.",组合乐器并复现让守门生物入睡的旋律:"Combinez les instruments et reproduisez la mélodie qui endort le gardien.",控制漂浮轨迹把散落物送回正确位置:"Maîtrisez les trajectoires flottantes pour rendre chaque objet perdu.",利用悬浮机关移动障碍并建立逃生路线:"Utilisez la lévitation pour déplacer les obstacles et créer une issue.",按历史时间线排列书脊并避开尖叫书籍:"Classez les dos des livres par époque tout en évitant le volume hurleur.",比较镜像与现实差异选择真正需要的物品:"Comparez le reflet à la réalité pour choisir ce qui est réellement nécessaire.",控制光源与节奏摆脱收缩藤蔓:"Maîtrisez la lumière et le rythme pour échapper aux lianes qui se resserrent.","依据翅膀损伤、速度和锁孔锁定钥匙":"Identifiez la clé grâce à son aile abîmée, sa vitesse et la serrure.",规划最少牺牲路线穿过动态棋盘:"Planifiez un passage sur l’échiquier vivant avec un minimum de sacrifices.","结合药剂逻辑、镜像线索与章节物品":"Combinez la logique des potions, les indices du miroir et les objets du chapitre.",猫头鹰来信:"Le courrier des hiboux","目标：按弗农改变藏身处的时间顺序检查四封信":"Objectif : examinez les quatre lettres dans l’ordre des cachettes choisies par les Dursley.","地址会追着哈利变化。错误选择会让已确认的信全部重新飞散。":"L’adresse suit Harry partout. Une erreur disperse toutes les lettres déjà confirmées.",对角巷清单:"La liste du Chemin de Traverse","目标：按霍格沃茨清单采购四件合规格物品，预算 12 加隆":"Objectif : achetez quatre fournitures conformes, dans l’ordre de la liste, avec douze Gallions.","课本 → 二号锡制坩埚 → 猫头鹰 → 魔杖盒。核对规格与价签，买错会清空采购篮。":"Manuel → chaudron en étain taille 2 → hibou → étui à baguette. Vérifiez les caractéristiques et les prix : une erreur vide le panier.",魔杖选择:"La baguette choisit son sorcier","目标：第一阶段，从三种木材中找出与你产生稳定共鸣的一种":"Objectif : trouvez d’abord, parmi trois bois, celui qui entre en résonance stable avec vous.","木材线索：闪电形旧伤旁，常青叶不会在严冬凋零。选错会触发失控魔法。":"Indice : près d’une ancienne cicatrice en forme d’éclair, une feuille persistante ne fane jamais en hiver. Un mauvais choix déchaîne une magie incontrôlée.",分院仪式:"La cérémonie de la Répartition","目标：走近分院帽，观察大厅里的四学院象征":"Objectif : approchez-vous du Choixpeau et observez les emblèmes des quatre maisons dans la Grande Salle.","勇气、忠诚、智慧与野心各有象征；分院帽正在等待你的选择。":"Courage, loyauté, sagesse et ambition ont chacun leur emblème. Le Choixpeau attend votre décision.",移动楼梯:"Les escaliers mouvants","目标：依据钟摆与月相路线，依次稳定三座移动楼梯":"Objectif : suivez les indices du pendule et de la lune pour stabiliser trois escaliers dans le bon ordre.","路线铭文：从最低的平台起步；月光桥只在钟摆居中时停驻；最后登上最高塔。选错会让路线复位并增加 5 秒惩罚。":"Inscription : partez du palier le plus bas ; le pont lunaire s’immobilise lorsque le pendule est centré ; terminez par la plus haute tour. Une erreur réinitialise le parcours et ajoute cinq secondes.",会说话的画像:"Les portraits bavards","目标：比较三幅画像的证词，按可信的发言顺序询问口令":"Objectif : confrontez les témoignages de trois portraits et interrogez-les dans l’ordre crédible pour obtenir le mot de passe.","学者说骑士不是第一位；骑士承认学者必须先发言；女士说自己在骑士之后。错误询问会惊动走廊并清空推理。":"L’érudit affirme que le chevalier n’est pas le premier ; le chevalier reconnaît que l’érudit doit parler avant lui ; la dame dit venir après le chevalier. Une mauvaise question alerte le couloir et efface vos déductions.",管理员的巡夜:"La ronde du concierge","目标：利用盔甲遮挡、猫铃声与暗门，避开管理员的灯光巡查":"Objectif : utilisez l’armure, la clochette du chat et la porte secrète pour échapper à la lanterne du concierge.","巡夜图记：灯光先扫过空盔甲；猫铃能把脚步引向反方向；最后掀开独角兽挂毯。走错会清空路线并提高警戒。":"Notes de ronde : la lumière balaie d’abord l’armure vide ; la clochette attire les pas ailleurs ; soulevez enfin la tapisserie à la licorne. Une erreur efface l’itinéraire et renforce l’alerte.",三头犬活板门:"Le gardien à trois têtes","目标：按守门生物能接受的层次，奏出完整安眠旋律":"Objectif : jouez la berceuse complète selon les couches sonores que le gardien peut supporter.","褪色乐谱写着：先让气息像夜风进入梦乡，再让琴弦托住梦境，最后以发条的轻响封住鼾声。错奏会重置旋律并惊醒守卫。":"La partition effacée indique : que le souffle mène d’abord au sommeil comme un vent nocturne, que les cordes portent ensuite le rêve, puis qu’un léger mécanisme scelle le ronflement. Une fausse note recommence la mélodie et réveille le gardien.",飞行课遗失物:"Cours de vol : objets perdus","目标：借助风向旗判断重量，依次把三件遗失物送入对应的安全轨迹":"Objectif : lisez la manche à air et renvoyez trois objets perdus sur leur trajectoire sûre, du plus léger au plus lourd.","风向板写着：最轻的红色织物先借低风归队；有月纹的笔记随后穿过中环；沉重黄铜罗盘最后沿高风落到新生手中。错序会卷起乱流并吹散全部物品。":"Le panneau indique : le tissu rouge, très léger, prend d’abord le courant bas ; le carnet marqué d’une lune traverse ensuite l’anneau central ; la lourde boussole en laiton revient enfin par le courant haut. Une erreur soulève des turbulences et disperse tout.",巨怪洗手间:"Les toilettes du troll","目标：依次稳定漏水、悬浮瓦砾，再放下横梁架出逃生路线":"Objectif : stoppez la fuite, faites léviter les gravats, puis abaissez la poutre pour créer une issue.","破裂水管正在冲散落脚点。先转动月纹阀止水，再让碎石升起清出通道，最后才能把高处横梁平稳放到沟渠上。错序会让巨怪逼近并震塌路线。":"La conduite rompue emporte les appuis. Tournez d’abord la vanne marquée d’une lune, soulevez les gravats pour dégager le passage, puis posez la poutre au-dessus du canal. Une erreur rapproche le troll et fait s’effondrer l’itinéraire.",图书馆禁书区:"La Réserve","目标：依据馆藏年代，按从古到今的顺序点亮三本安全书脊":"Objectif : d’après les dates du catalogue, éclairez trois dos de livres sûrs du plus ancien au plus récent.","目录铜牌记载：四学院建校录最古老；龙灾账册写于其后数百年；月蚀纪事刚完成修订。避开锁链缠绕、会尖叫的无年卷。":"Le catalogue de cuivre précise : le Registre des Fondateurs est le plus ancien ; le Livre du Fléau des dragons vient plusieurs siècles après ; la Chronique de l’éclipse vient d’être révisée. Évitez le volume sans date, enchaîné et hurleur.",厄里斯魔镜:"Le Miroir du Riséd","目标：比较镜中欲望与现实处境，依次选择真正需要的三件物品":"Objectif : confrontez le désir du miroir à la réalité et choisissez, dans l’ordre, les trois choses dont vous avez vraiment besoin.","镜中人戴着王冠、捧着奖杯，却在现实的寒风中发抖。先御寒，再为黑暗出口照路；最后记住：能共同离开的人，比独占的荣誉更重要。":"Le reflet porte une couronne et un trophée, mais grelotte dans le froid réel. Choisissez d’abord de quoi vous réchauffer, puis une lumière pour la sortie obscure ; souvenez-vous enfin qu’un compagnon qui part avec vous vaut mieux qu’une gloire solitaire.",魔鬼网:"Le Filet du Diable","目标：保持镇静，按正确节奏控制蓝铃火焰，让藤蔓松开地下出口":"Objectif : gardez votre calme et maîtrisez les flammes bleues au bon rythme pour que les lianes libèrent la sortie souterraine.","挣扎会让藤蔓收紧。先放松摆脱缠绕，再点燃冷焰，最后维持稳定光照；猛烈爆燃只会惊动整片根网。":"Se débattre resserre les lianes. Détendez-vous d’abord, allumez ensuite la flamme froide, puis maintenez une lumière stable ; une flambée brutale alerterait tout le réseau de racines.",飞钥匙房:"La salle des clés volantes","目标：依次确认翅膀损伤、飞行轨迹和锁孔材质，锁定唯一真钥匙":"Objectif : identifiez successivement l’aile abîmée, la trajectoire et le métal de la serrure pour isoler la bonne clé.","门锁留下银屑；真正用过的钥匙左翼弯折，负重后会沿顺时针轨迹下沉。先观察损伤，再追踪轨迹，最后核对银色钥匙。":"La serrure a laissé de la limaille d’argent. La clé déjà utilisée a l’aile gauche tordue et descend en tournant dans le sens horaire. Observez l’usure, suivez la trajectoire, puis confirmez la clé d’argent.","左翼折痕 · 顺时针下沉 · 银屑锁孔":"AILE GAUCHE TORDUE · DESCENTE HORAIRE · SERRURE ARGENTÉE",左翼弯折的钥影:"Clé à l’aile gauche tordue","I · 使用损伤":"I · TRACE D’USURE",顺时针下沉轨迹:"Trajectoire descendante horaire","II · 负重飞行":"II · VOL SOUS CHARGE",小型银钥匙:"Petite clé d’argent","III · 银屑吻合":"III · ARGENT CONFIRMÉ",华丽金钥匙:"Clé dorée ouvragée","诱饵 · 锁孔无金屑":"LEURRE · AUCUNE TRACE D’OR","飞钥匙房已加载：依次核对折翼、飞行轨迹和锁孔银屑。":"Salle des clés chargée : examinez dans l’ordre l’aile tordue, la trajectoire horaire et la limaille d’argent.","“{label}”惊散了钥匙群！追逐失误升至 {count}，三条证据需要重新确认。":"« {label} » a dispersé l’essaim ! Les erreurs montent à {count} ; revérifiez les trois indices.","左翼折痕与门框刮痕一致。现在观察负重钥匙群，寻找顺时针下沉的轨迹。":"L’aile gauche tordue correspond à la rayure du chambranle. Observez maintenant l’essaim chargé et sa descente horaire.","下沉轨迹锁定了小型钥匙。最后核对锁孔银屑，排除华丽但材质不符的金钥匙。":"La descente désigne une petite clé. Comparez enfin la limaille d’argent et écartez la clé dorée, malgré ses ornements.","飞钥匙证据已确认 {count} / 3":"Indices de clé confirmés : {count} / 3","{label}与现场证据吻合，钥匙群的范围缩小了。":"{label} correspond aux traces matérielles ; l’essaim se réduit.","飞钥匙房完成：折翼银钥匙准确嵌入门锁，通往巫师棋盘的石门已经开启":"Salle des clés terminée : la clé d’argent à l’aile tordue ouvre la porte de pierre vers l’échiquier.","折翼证明它被使用过，顺时针下沉暴露负重，银屑完成最终材质核对。前方传来巨大棋子的脚步声。":"L’aile tordue prouve l’usure, la descente horaire révèle le poids et la limaille confirme l’argent. Des pièces géantes s’ébranlent plus loin.","第一部 · 第四章 · 第 2 关完成":"Tome 1 · Chapitre 4 · Salle 2 terminée",折翼银钥匙:"La clé d’argent à l’aile tordue","银钥匙旋转一周，棋盘石门轰然开启——正在进入巫师棋盘！":"La clé d’argent accomplit un tour et la porte de pierre s’ouvre avec fracas — entrée sur l’échiquier !","巫师棋已加载：先诱敌，再双攻，最后沿空线推进。":"Échiquier chargé : diversion, fourchette, puis avancée sur la colonne libre.",巫师棋:"Les échecs version sorcier","目标：用最少牺牲打开通往对岸的安全棋路":"Objectif : ouvrez un passage sûr sur l’échiquier en sacrifiant le moins de pièces possible.","黑后封锁中央。先用边兵引开主教，再让骑士双攻国王与城堡，最后直车沿空出的纵线推进；贸然冲后会让已投入的棋子全部被吃。":"La dame noire verrouille le centre. Attirez d’abord le fou avec le pion de l’aile, réalisez ensuite une fourchette sur le roi et la tour avec le cavalier, puis avancez la tour sur la colonne libérée. Charger la dame trop tôt condamne toutes les pièces engagées.","边兵牵制主教 · 骑士双攻 · 城堡穿过空线":"LE PION ATTIRE LE FOU · FOURCHETTE DU CAVALIER · TOUR SUR COLONNE LIBRE",边兵诱敌:"Diversion du pion","I · 引开主教":"I · ÉCARTER LE FOU",骑士双攻:"Fourchette du cavalier","II · 将军攻车":"II · ROI ET TOUR MENACÉS",城堡沿空线推进:"Tour sur colonne libre","III · 空线抵岸":"III · TRAVERSER LA COLONNE",王后强攻:"Charge de la dame","诱饵 · 暴露全线":"LEURRE · COLONNE EXPOSÉE","“{label}”暴露了棋路！巨棋吃掉已投入棋子，被吃总数升至 {count}。":"« {label} » a exposé le passage ! Les pièces géantes capturent les forces engagées ; {count} pièces perdues au total.","边兵引开了黑主教。现在用骑士同时威胁国王与城堡，迫使黑方让出中央。":"Le pion de l’aile a écarté le fou noir. Menacez maintenant le roi et la tour avec le cavalier pour libérer le centre.","骑士双攻奏效，纵线已经清空。最后让城堡沿直线推进到对岸。":"La fourchette du cavalier a libéré la colonne. Faites enfin avancer la tour en ligne droite jusqu’au bord opposé.","安全棋步已确认 {count} / 3":"Coups sûrs confirmés : {count} / 3","{label}成立，巨型黑棋被迫改换阵形。":"{label} fonctionne ; les pièces noires géantes doivent changer de formation.","巫师棋完成：仅以边兵诱敌，骑士与城堡已安全抵达对岸":"Échiquier terminé : seul le pion de l’aile est sacrifié ; le cavalier et la tour atteignent l’autre bord.","诱敌打开斜线，双攻迫使让位，城堡穿过空线。最后的魔法石密室就在棋盘后方。":"La diversion ouvre une diagonale, la fourchette force le repli et la tour traverse la colonne libre. La chambre de la Pierre se trouve au-delà.","第一部 · 第四章 · 第 3 关完成":"Tome 1 · Chapitre 4 · Salle 3 terminée",最少牺牲棋路:"Le passage au moindre sacrifice","白色城堡抵达对岸，火门显现——正在进入魔法石密室！":"La tour blanche atteint l’autre bord et une porte de feu apparaît — entrée dans la chambre de la Pierre !","最终密室已加载：先解药剂逻辑，再辨镜像，最后证明守护意图。":"Chambre finale chargée : résolvez les potions, lisez le miroir, puis prouvez votre intention protectrice.",魔法石密室:"La chambre de la Pierre","目标：穿过黑焰，解读镜像，并证明你只想保护魔法石":"Objectif : traversez les flammes noires, interprétez le miroir et prouvez que vous voulez seulement protéger la Pierre.","七瓶药剂中，最小的瓶子可穿过黑焰。镜中真正的守护者口袋仍空着；想夺取魔法石的手只会触发密室腐化。":"Parmi les sept potions, le plus petit flacon permet de franchir les flammes noires. Dans le miroir, la poche du véritable gardien reste vide ; une main tendue pour prendre la Pierre ne fait qu’éveiller la corruption de la chambre.",精灵的封锁:"Le blocus de l’elfe","目标：循魔力残痕解除住宅中的三重封锁，赶往国王十字车站":"Objectif : suivez les traces magiques, levez le triple blocus de la maison et rejoignez King’s Cross.","绿色干扰从邮槽进入，绕过悬浮蛋糕，最后汇入壁炉封印。错碰尖叫灯会让封锁重新闭合。":"L’interférence verte entre par la fente aux lettres, contourne le gâteau flottant, puis rejoint le sceau de la cheminée. Toucher la lampe hurlante referme le blocus.",飞车失控:"La voiture volante hors de contrôle","目标：在撞上高架桥前依次稳定配重、航向与油门":"Objectif : stabilisez le chargement, le cap puis l’accélérateur avant de heurter le viaduc.","后备箱先把车头拉高；红色铁路信号给出航向；发动机过热时只能脉冲给油。猛踩油门会让飞车再次翻滚。":"Le coffre cabre d’abord la voiture ; le signal ferroviaire rouge indique le cap ; un moteur en surchauffe exige des impulsions d’accélérateur. Écraser la pédale fait de nouveau tonneau.",打人柳下:"Sous le Saule cogneur","目标：读懂枝条的高扫、低返与露根间隙，安全抵达树洞":"Objectif : déchiffrez le balayage haut, le retour bas et l’ouverture entre les racines pour atteindre le tronc sans danger.","粗枝先从头顶横扫；回摆会贴近地面。只有第二次攻击收势后，发光树根之间才会短暂露出通道。":"Une grosse branche balaie d’abord au-dessus de votre tête ; son retour rase le sol. Le passage entre les racines lumineuses ne s’ouvre brièvement qu’après la fin de la deuxième attaque."}},Qc="hogwarts-escape-language",c0=[{code:"zh-CN",label:"中文",nativeLabel:"简体中文"},{code:"en",label:"English",nativeLabel:"English"},{code:"fr",label:"Français",nativeLabel:"Français"}],Kl={"zh-CN":{"document.title":"霍格沃茨密室逃脱 3D","start.brand":"霍格沃茨","start.title":"密室逃脱","start.description":"横跨 7 部曲、28 章与 112 套密室关卡，从第一封猫头鹰来信走到霍格沃茨最终决战。","start.play":"进入第一关","start.continue":"继续游戏","start.restart":"重新开始","start.campaign":"七部曲地图","start.language":"🌐 中文","voice.play":"▶ 播放中文旁白","voice.stop":"■ 停止旁白","voice.ready":"按下后播放，不会自动播放","voice.loading":"正在加载旁白…","voice.playing":"正在播放中文旁白","voice.failed":"旁白暂时不可用，字幕仍可阅读","voice.subtitle":"欢迎来到霍格沃茨。猫头鹰送来的四封信，藏着逃离密室的正确顺序。请观察地址变化，准备好后开始探索。","help.desktop":"WASD 移动 · 鼠标观察 · E 互动 · ESC 释放鼠标","help.mobile":"左侧摇杆移动 · 右半屏滑动观察 · 点击“互动”操作","mobile.look":"滑动转向","mobile.interact":"互动","campaign.title":"七部曲密室地图","campaign.stats":"{books} 部曲 · {chapters} 章 · {rooms} 关","campaign.book":"第 {number} 部","campaign.chapter":"第 {number} 章","campaign.difficulty":"难度 {start}–{end}","campaign.play":"开始本章","campaign.upcoming":"已解锁 · 即将启程","campaign.locked":"尚未解锁","campaign.close":"关闭地图","campaign.selectBook":"选择部曲","hud.roomKicker":"第 {book} 部 · 第 {chapter} 章 · 第 {room} 关","transition.next":"下一关","action.touch":"点击互动","action.keyboard":"按 E","counter.letters":"信件顺序 {count} / 4","counter.shopping":"采购 {count} / 4 · 余 {remaining} G","counter.wand":"匹配阶段 {count} / 3 · 失控反馈 {mistakes}","counter.sorting":"分院线索 {count} / 4 · 误判 {mistakes}","counter.stairs":"路线 {count} / 3 · 时间惩罚 {penalty} 秒","counter.portraits":"证词 {count} / 3 · 怀疑 {value}","counter.patrol":"潜行节点 {count} / 3 · 警戒 {value}","counter.lullaby":"安眠旋律 {count} / 3 · 惊醒 {value}","counter.flying":"安全投递 {count} / 3 · 乱流 {value}","counter.troll":"逃生机关 {count} / 3 · 危险 {value}","counter.library":"历史书脊 {count} / 3 · 尖叫 {value}","counter.mirror":"现实所需 {count} / 3 · 幻象增强 {value}","counter.snare":"光照节奏 {count} / 3 · 藤蔓收紧 {value}","counter.keys":"钥匙线索 {count} / 3 · 追逐失误 {value}","counter.chess":"安全棋路 {count} / 3 · 被吃棋子 {value}","counter.stone":"密室线索 {count} / 3 · 腐化诱惑 {value}","counter.elf":"封锁痕迹 {count} / 3 · 干扰增强 {value}","counter.car":"飞车校准 {count} / 3 · 乱流 {value}","counter.willow":"安全节拍 {count} / 3 · 擦伤 {value}","test.chineseOnly":"仅中文"},en:{"document.title":"Hogwarts Escape Room 3D","start.brand":"HOGWARTS","start.title":"Escape Room","start.description":"A journey across 7 books, 28 chapters, and 112 escape rooms—from the first owl letter to the final battle at Hogwarts.","start.play":"Enter Room One","start.continue":"Continue","start.restart":"Start Over","start.campaign":"Seven-Book Map","start.language":"🌐 English","voice.play":"▶ Play English narration","voice.stop":"■ Stop narration","voice.ready":"Plays only when pressed—never automatically","voice.loading":"Loading narration…","voice.playing":"Playing English narration","voice.failed":"Narration is unavailable; subtitles remain available","voice.subtitle":"Welcome to Hogwarts. Four owl-delivered letters hide the correct order for escaping this chamber. Observe how each address changes, then begin your search.","help.desktop":"WASD move · Mouse look · E interact · ESC release mouse","help.mobile":"Left stick to move · Swipe right to look · Tap Interact","mobile.look":"Swipe to look","mobile.interact":"Interact","campaign.title":"Seven-Book Escape Map","campaign.stats":"{books} books · {chapters} chapters · {rooms} rooms","campaign.book":"Book {number}","campaign.chapter":"Chapter {number}","campaign.difficulty":"Difficulty {start}–{end}","campaign.play":"Begin Chapter","campaign.upcoming":"Unlocked · Coming Soon","campaign.locked":"Locked","campaign.close":"Close map","campaign.selectBook":"Select a book","hud.roomKicker":"Book {book} · Chapter {chapter} · Room {room}","transition.next":"Next Room","action.touch":"Tap","action.keyboard":"Press E to","counter.letters":"Letter order {count} / 4","counter.shopping":"Shopping {count} / 4 · {remaining} G left","counter.wand":"Wand match {count} / 3 · Wild feedback {mistakes}","counter.sorting":"Sorting clues {count} / 4 · Mistakes {mistakes}","counter.stairs":"Route {count} / 3 · Time penalty {penalty}s","counter.portraits":"Testimony {count} / 3 · Suspicion {value}","counter.patrol":"Stealth nodes {count} / 3 · Alert {value}","counter.lullaby":"Lullaby {count} / 3 · Wakefulness {value}","counter.flying":"Safe deliveries {count} / 3 · Turbulence {value}","counter.troll":"Escape devices {count} / 3 · Danger {value}","counter.library":"Historical spines {count} / 3 · Noise {value}","counter.mirror":"Real needs {count} / 3 · Illusion {value}","counter.snare":"Light rhythm {count} / 3 · Constriction {value}","counter.keys":"Key clues {count} / 3 · Pursuit errors {value}","counter.chess":"Safe moves {count} / 3 · Pieces lost {value}","counter.stone":"Chamber clues {count} / 3 · Corruption {value}","counter.elf":"Blockade traces {count} / 3 · Interference {value}","counter.car":"Car calibration {count} / 3 · Turbulence {value}","counter.willow":"Safe rhythm {count} / 3 · Bruises {value}"},fr:{"document.title":"Hogwarts — Salle d’évasion 3D","start.brand":"POUDLARD","start.title":"Salle d’évasion","start.description":"Un voyage à travers 7 tomes, 28 chapitres et 112 salles, de la première lettre apportée par un hibou jusqu’à la bataille finale de Poudlard.","start.play":"Entrer dans la première salle","start.continue":"Continuer","start.restart":"Recommencer","start.campaign":"Carte des sept tomes","start.language":"🌐 Français","voice.play":"▶ Écouter la narration en français","voice.stop":"■ Arrêter la narration","voice.ready":"Lecture uniquement sur demande, jamais automatique","voice.loading":"Chargement de la narration…","voice.playing":"Narration en français en cours","voice.failed":"La narration est indisponible ; les sous-titres restent affichés","voice.subtitle":"Bienvenue à Poudlard. Quatre lettres apportées par des hiboux cachent l’ordre qui permet de quitter cette salle. Observez chaque changement d’adresse, puis commencez vos recherches.","help.desktop":"WASD : avancer · Souris : regarder · E : interagir · Échap : libérer la souris","help.mobile":"Joystick gauche : avancer · Balayer à droite : regarder · Toucher Interagir","mobile.look":"Balayer pour regarder","mobile.interact":"Interagir","campaign.title":"Carte d’évasion des sept tomes","campaign.stats":"{books} tomes · {chapters} chapitres · {rooms} salles","campaign.book":"Tome {number}","campaign.chapter":"Chapitre {number}","campaign.difficulty":"Difficulté {start}–{end}","campaign.play":"Commencer le chapitre","campaign.upcoming":"Déverrouillé · Bientôt disponible","campaign.locked":"Verrouillé","campaign.close":"Fermer la carte","campaign.selectBook":"Choisir un tome","hud.roomKicker":"Tome {book} · Chapitre {chapter} · Salle {room}","transition.next":"Salle suivante","action.touch":"Toucher pour","action.keyboard":"Appuyer sur E pour","counter.letters":"Ordre des lettres {count} / 4","counter.shopping":"Achats {count} / 4 · reste {remaining} G","counter.wand":"Accord de la baguette {count} / 3 · réactions {mistakes}","counter.sorting":"Indices de Répartition {count} / 4 · erreurs {mistakes}","counter.stairs":"Parcours {count} / 3 · pénalité {penalty} s","counter.portraits":"Témoignages {count} / 3 · soupçon {value}","counter.patrol":"Étapes furtives {count} / 3 · alerte {value}","counter.lullaby":"Berceuse {count} / 3 · éveil {value}","counter.flying":"Livraisons sûres {count} / 3 · turbulences {value}","counter.troll":"Mécanismes de fuite {count} / 3 · danger {value}","counter.library":"Dos historiques {count} / 3 · vacarme {value}","counter.mirror":"Besoins réels {count} / 3 · illusion {value}","counter.snare":"Rythme lumineux {count} / 3 · constriction {value}","counter.keys":"Indices de clé {count} / 3 · erreurs {value}","counter.chess":"Coups sûrs {count} / 3 · pièces perdues {value}","counter.stone":"Indices de la chambre {count} / 3 · corruption {value}","counter.elf":"Traces du blocus {count} / 3 · interférence {value}","counter.car":"Réglage de la voiture {count} / 3 · turbulences {value}","counter.willow":"Rythme sûr {count} / 3 · contusions {value}"}};function Or(n){return c0.some(({code:e})=>e===n)?n:"zh-CN"}function u0(n){return Or(n.getItem(Qc))}function d0(n,e){const t=Or(e);return n.setItem(Qc,t),t}function h0(n,e){return n.replace(/\{(\w+)\}/g,(t,i)=>e[i]??`{${i}}`)}function kr(n){const e=Or(n);return(t,i={})=>{const r=Kl[e][t]??Kl["zh-CN"][t]??t;return h0(r,i)}}function kt(n,e){const t=Or(n);return t==="zh-CN"?e:l0[t]?.[e]??e}function f0(n,{book:e,chapter:t,room:i,name:r,objectiveText:s,hint:o}){const a=Or(n);return{kicker:kr(a)("hud.roomKicker",{book:e,chapter:t,room:i}),name:kt(a,r),objectiveText:kt(a,s),hint:kt(a,o)}}function p0({progress:n,book:e,chapter:t,playable:i,t:r=kr("zh-CN")}){const s=e===1&&t===1||a0(n,{book:e,chapter:t});return i&&s?{className:"chapter-action playable",text:r("campaign.play"),disabled:!1}:s?{className:"chapter-action unlocked",text:r("campaign.upcoming"),disabled:!0}:{className:"chapter-action",text:r("campaign.locked"),disabled:!0}}function m0({onPlay:n,getProgress:e=()=>null,getLanguage:t=()=>"zh-CN",getTranslator:i=()=>kr(t())}){const r=document.querySelector("#campaign-screen"),s=document.querySelector("#book-tabs"),o=document.querySelector("#chapter-grid"),a=document.querySelector("#campaign-book-title"),l=document.querySelector("#campaign-book-subtitle"),c=document.querySelector("#campaign-theme"),u=document.querySelector("#campaign-stats");let h=0;function f(){const d=i(),E=t();s.replaceChildren(...wr.map((b,S)=>{const A=document.createElement("button");return A.className=`book-tab${S===h?" active":""}`,A.type="button",A.innerHTML=`<span>${d("campaign.book",{number:b.number})}</span><strong>${kt(E,b.title)}</strong>`,A.addEventListener("click",()=>{h=S,_()}),A}))}function m(d){const E=i(),b=t();o.replaceChildren(...d.chapters.map((S,A)=>{const R=document.createElement("article");R.className="chapter-card";const D=S.rooms[0].difficulty,L=S.rooms.at(-1).difficulty,y=S.rooms.some(G=>G.status==="playable"),v=p0({progress:e(),book:d.number,chapter:A+1,playable:y,t:E});R.classList.toggle("unlocked",v.className.includes("unlocked"));const w=document.createElement("div");w.className="chapter-heading",w.innerHTML=`<span>${E("campaign.chapter",{number:String(A+1).padStart(2,"0")})}</span><strong>${kt(b,S.title)}</strong><em>${E("campaign.difficulty",{start:D,end:L})}</em>`;const k=document.createElement("ol");k.className="room-list";for(const G of S.rooms){const K=document.createElement("li");K.innerHTML=`<span>${kt(b,G.title)}</span><small>${kt(b,G.puzzle)}</small>`,k.appendChild(K)}const z=document.createElement("button");return z.type="button",z.className=v.className,z.textContent=v.text,z.disabled=v.disabled,y&&z.addEventListener("click",()=>{p(),n(S.rooms.find(G=>G.status==="playable"))}),R.append(w,k,z),R}))}function _(){const d=i(),E=t(),b=wr[h];u.textContent=d("campaign.stats",r0),r.style.setProperty("--campaign-primary",b.palette[0]),r.style.setProperty("--campaign-accent",b.palette[1]),r.style.setProperty("--campaign-dark",b.palette[2]),a.textContent=`${d("campaign.book",{number:b.number})} · ${kt(E,b.title)}`,l.textContent=kt(E,b.subtitle),c.textContent=kt(E,b.visualTheme),f(),m(b)}function M(){_(),r.classList.remove("hidden"),document.body.classList.add("campaign-open")}function p(){r.classList.add("hidden"),document.body.classList.remove("campaign-open")}return document.querySelector("#campaign-button").addEventListener("click",M),document.querySelector("#campaign-close").addEventListener("click",p),addEventListener("keydown",d=>{d.code==="Escape"&&!r.classList.contains("hidden")&&p()}),_(),{openCampaign:M,closeCampaign:p,render:_}}const g0={intro:{"zh-CN":"audio/intro-zh-CN.mp3",en:"audio/intro-en.mp3",fr:"audio/intro-fr.mp3"}};function _0(n,e){const t=g0[n];return t?t[e]??t["zh-CN"]??null:null}function v0({playbackState:n,muted:e}){return n==="idle"&&!e}async function x0({audio:n,source:e,muted:t}){if(!e)return t?"muted":"unavailable";n.src=e;try{return await n.play(),"playing"}catch{return"failed"}}const Zl=["lower","moon","upper"],Jl=["scholar","knight","lady"],Ql=["armor","cat","tapestry"],ec=["flute","harp","music-box"];function y0(n,e){const t=ec[n.progress.length];if(e!==t)return{progress:[],mistakes:n.mistakes+1,wakefulness:(n.wakefulness??0)+1,unlocked:!1,accepted:!1};const i=[...n.progress,e];return{...n,progress:i,unlocked:i.length===ec.length,accepted:!0}}function S0(n,e){const t=Zl[n.progress.length];if(e!==t)return{progress:[],mistakes:n.mistakes+1,timePenalty:(n.timePenalty??0)+5,unlocked:!1,accepted:!1};const i=[...n.progress,e];return{progress:i,mistakes:n.mistakes,...n.timePenalty!==void 0?{timePenalty:n.timePenalty}:{},unlocked:i.length===Zl.length,accepted:!0}}function M0(n,e){const t=Jl[n.progress.length];if(e!==t)return{progress:[],mistakes:n.mistakes+1,suspicion:(n.suspicion??0)+1,unlocked:!1,accepted:!1};const i=[...n.progress,e],r=i.length===Jl.length;return{progress:i,mistakes:n.mistakes,...n.suspicion!==void 0?{suspicion:n.suspicion}:{},unlocked:r,accepted:!0,...r?{password:"月桂之后，银钥先行"}:{}}}function b0(n,e){const t=Ql[n.progress.length];if(e!==t)return{progress:[],mistakes:n.mistakes+1,alert:(n.alert??0)+1,unlocked:!1,accepted:!1};const i=[...n.progress,e];return{progress:i,mistakes:n.mistakes,...n.alert!==void 0?{alert:n.alert}:{},unlocked:i.length===Ql.length,accepted:!0}}const tc=["scarf-keeper","notebook-scholar","compass-first-year"],nc=["seal-pipe","levitate-rubble","lower-beam"],ic=["founders-index","dragon-ledger","moon-chronicle"],rc=["wool-cloak","brass-lantern","shared-token"];function E0(n,e){const t=rc[n.progress.length];if(e!==t)return{progress:[],mistakes:n.mistakes+1,illusion:(n.illusion??0)+1,feedback:"desire-not-need",unlocked:!1,accepted:!1};const i=[...n.progress,e];return{...n,progress:i,unlocked:i.length===rc.length,accepted:!0}}function T0(n,e){const t=ic[n.progress.length];if(e!==t)return{progress:[],mistakes:n.mistakes+1,noise:(n.noise??0)+1,unlocked:!1,accepted:!1};const i=[...n.progress,e];return{...n,progress:i,unlocked:i.length===ic.length,accepted:!0}}function w0(n,e){const t=nc[n.progress.length];if(e!==t)return{progress:[],mistakes:n.mistakes+1,danger:(n.danger??0)+1,unlocked:!1,accepted:!1};const i=[...n.progress,e];return{...n,progress:i,unlocked:i.length===nc.length,accepted:!0}}function A0(n,e){const t=tc[n.progress.length];if(e!==t)return{progress:[],mistakes:n.mistakes+1,turbulence:(n.turbulence??0)+1,unlocked:!1,accepted:!1};const i=[...n.progress,e];return{...n,progress:i,unlocked:i.length===tc.length,accepted:!0}}const sc=["black-flame-potion","empty-pocket-reflection","protect-the-stone"];function C0(n,e){const t=sc[n.progress.length];if(e!==t)return{progress:[],mistakes:n.mistakes+1,corruption:n.corruption+1,feedback:"intent-rejected",unlocked:!1,accepted:!1};const i=[...n.progress,e];return{...n,progress:i,unlocked:i.length===sc.length,accepted:!0}}const oc=["pawn-decoy","knight-fork","rook-advance"];function R0(n,e){const t=oc[n.progress.length];if(e!==t)return{progress:[],mistakes:n.mistakes+1,captured:n.captured+n.progress.length+1,feedback:"piece-captured",unlocked:!1,accepted:!1};const i=[...n.progress,e];return{...n,progress:i,unlocked:i.length===oc.length,accepted:!0}}const ac=["relax-grip","kindle-bluebell","hold-light"],lc=["bent-wing","clockwise-drift","silver-key"];function D0(n,e){const t=lc[n.progress.length];if(e!==t)return{progress:[],mistakes:n.mistakes+1,pursuit:n.pursuit+1,feedback:"key-swarm-scattered",unlocked:!1,accepted:!1};const i=[...n.progress,e];return{...n,progress:i,unlocked:i.length===lc.length,accepted:!0}}function P0(n,e){const t=ac[n.progress.length];if(e!==t)return{progress:[],mistakes:n.mistakes+1,constriction:(n.constriction??0)+1,feedback:"vines-tightened",unlocked:!1,accepted:!1};const i=[...n.progress,e];return{...n,progress:i,unlocked:i.length===ac.length,accepted:!0}}const cc=["wait-high-swing","duck-low-return","dash-root-gap"];function L0(n,e){const t=cc[n.progress.length];if(e!==t)return{progress:[],mistakes:n.mistakes+1,bruises:n.bruises+1,feedback:"branch-hit",unlocked:!1,accepted:!1};const i=[...n.progress,e];return{...n,progress:i,unlocked:i.length===cc.length,accepted:!0}}const uc=["balance-luggage","align-railway","pulse-throttle"];function I0(n,e){const t=uc[n.progress.length];if(e!==t)return{progress:[],mistakes:n.mistakes+1,turbulence:n.turbulence+1,feedback:"car-spinning",unlocked:!1,accepted:!1};const i=[...n.progress,e];return{...n,progress:i,unlocked:i.length===uc.length,accepted:!0}}const dc=["jammed-post","levitating-cake","sealed-floo"];function U0(n,e){const t=dc[n.progress.length];if(e!==t)return{progress:[],mistakes:n.mistakes+1,interference:n.interference+1,feedback:"blockade-strengthened",unlocked:!1,accepted:!1};const i=[...n.progress,e];return{...n,progress:i,unlocked:i.length===dc.length,accepted:!0}}const N0=[{side:"left",feathers:4,bend:0},{side:"right",feathers:4,bend:0}],fs=(n={})=>({axis:"horizontal",shaftLength:1.55,bowRadius:.42,teeth:3,metal:"steel",wings:N0.map(e=>({...e})),...n}),F0=[{id:"bent-wing",label:"左翼弯折的钥影",clue:"I · 使用损伤",x:-4.8,display:{z:.7},color:9283527,model:fs({wings:[{side:"left",feathers:4,bend:-.48},{side:"right",feathers:4,bend:0}]}),evidence:{damage:"bent-left-wing"}},{id:"clockwise-drift",label:"顺时针下沉轨迹",clue:"II · 负重飞行",x:-1.6,display:{z:.7},color:7507640,model:fs({shaftLength:1.72}),evidence:{motion:"clockwise-descending",orbitMarkers:7}},{id:"silver-key",label:"小型银钥匙",clue:"III · 银屑吻合",x:1.6,display:{z:.7},color:12175579,model:fs({shaftLength:1.4,bowRadius:.36,metal:"silver"}),evidence:{lockMaterial:"silver"}},{id:"gold-key",label:"华丽金钥匙",clue:"诱饵 · 锁孔无金屑",x:4.8,display:{z:.7},color:12093749,model:fs({shaftLength:1.68,bowRadius:.58,teeth:4,metal:"gold"}),evidence:{lockMaterial:"mismatch"}}],eu={wallClue:"左翼折痕 · 顺时针下沉 · 银屑锁孔",dynamic:{roomLoadedMessage:"飞钥匙房已加载：依次核对折翼、飞行轨迹和锁孔银屑。",wrong:"“{label}”惊散了钥匙群！追逐失误升至 {count}，三条证据需要重新确认。",firstHint:"左翼折痕与门框刮痕一致。现在观察负重钥匙群，寻找顺时针下沉的轨迹。",secondHint:"下沉轨迹锁定了小型钥匙。最后核对锁孔银屑，排除华丽但材质不符的金钥匙。",progress:"飞钥匙证据已确认 {count} / 3",accepted:"{label}与现场证据吻合，钥匙群的范围缩小了。",completeObjective:"飞钥匙房完成：折翼银钥匙准确嵌入门锁，通往巫师棋盘的石门已经开启",completeHint:"折翼证明它被使用过，顺时针下沉暴露负重，银屑完成最终材质核对。前方传来巨大棋子的脚步声。",transitionKicker:"第一部 · 第四章 · 第 2 关完成",transitionTitle:"折翼银钥匙",completionMessage:"银钥匙旋转一周，棋盘石门轰然开启——正在进入巫师棋盘！",nextRoomMessage:"巫师棋已加载：先诱敌，再双攻，最后沿空线推进。"}};function Tn(n,e,t={}){const i=eu.dynamic[e];return kt(n,i).replace(/\{(\w+)\}/g,(s,o)=>t[o]??`{${o}}`)}const ps=(n,e={})=>({piece:n,height:1.75,material:"carved-stone",...e}),Tt={cellSize:1.3,boardStartX:-4.55,boardStartZ:-7.9,galleryZ:3,mobileCameraZ:8.8,mobileWallLabelSize:18},O0=[{id:"pawn-decoy",label:"边兵诱敌",clue:"I · 引开主教",x:-3.3,display:{z:Tt.galleryZ,labelStyle:"pedestal-plaque"},mobileDisplay:{x:-1.35,z:Tt.galleryZ,scale:.68,plaqueWidth:1.15},color:10455404,model:ps("pawn",{headRadius:.24})},{id:"knight-fork",label:"骑士双攻",clue:"II · 将军攻车",x:-1.1,display:{z:Tt.galleryZ,labelStyle:"pedestal-plaque"},mobileDisplay:{x:-.45,z:Tt.galleryZ,scale:.68,plaqueWidth:1.15},color:7902138,model:ps("knight",{profile:"horse-head",maneRidges:4})},{id:"rook-advance",label:"城堡沿空线推进",clue:"III · 空线抵岸",x:1.1,display:{z:Tt.galleryZ,labelStyle:"pedestal-plaque"},mobileDisplay:{x:.45,z:Tt.galleryZ,scale:.68,plaqueWidth:1.15},color:8364420,model:ps("rook",{battlements:6})},{id:"queen-charge",label:"王后强攻",clue:"诱饵 · 暴露全线",x:3.3,display:{z:Tt.galleryZ,labelStyle:"pedestal-plaque"},mobileDisplay:{x:1.35,z:Tt.galleryZ,scale:.68,plaqueWidth:1.15},color:11686492,model:ps("queen",{crownSpikes:6})}],tu={wallClue:"边兵牵制主教 · 骑士双攻 · 城堡穿过空线",dynamic:{wrong:"“{label}”暴露了棋路！巨棋吃掉已投入棋子，被吃总数升至 {count}。",firstHint:"边兵引开了黑主教。现在用骑士同时威胁国王与城堡，迫使黑方让出中央。",secondHint:"骑士双攻奏效，纵线已经清空。最后让城堡沿直线推进到对岸。",progress:"安全棋步已确认 {count} / 3",accepted:"{label}成立，巨型黑棋被迫改换阵形。",completeObjective:"巫师棋完成：仅以边兵诱敌，骑士与城堡已安全抵达对岸",completeHint:"诱敌打开斜线，双攻迫使让位，城堡穿过空线。最后的魔法石密室就在棋盘后方。",transitionKicker:"第一部 · 第四章 · 第 3 关完成",transitionTitle:"最少牺牲棋路",completionMessage:"白色城堡抵达对岸，火门显现——正在进入魔法石密室！",nextRoomMessage:"最终密室已加载：先解药剂逻辑，再辨镜像，最后证明守护意图。"}};function Pn(n,e,t={}){const i=tu.dynamic[e];return kt(n,i).replace(/\{(\w+)\}/g,(s,o)=>t[o]??`{${o}}`)}const fa=["cupboard","bedroom","hotel-room-17","island-hut"],pa=["spellbook","cauldron","owl","wand-box"],Mr=Object.freeze({spellbook:2,cauldron:3,owl:4,"wand-box":3}),k0=Object.freeze([Object.freeze({id:"owl-letters",name:"猫头鹰来信"}),Object.freeze({id:"diagon-alley-list",name:"对角巷清单"}),Object.freeze({id:"wand-selection",name:"魔杖选择"}),Object.freeze({id:"sorting-ceremony",name:"分院仪式"})]);function Na(n){return k0[n]??null}function z0(n,e){const t=fa[n.progress.length];if(e!==t)return{progress:[],unlocked:!1,reset:!0};const i=[...n.progress,e];return{progress:i,unlocked:i.length===fa.length,reset:!1}}function B0(n,e){const t=pa[n.progress.length];if(e!==t)return{progress:[],unlocked:!1,spent:0,reset:!0};const i=[...n.progress,e];return{progress:i,spent:(n.spent??0)+Mr[e],unlocked:i.length===pa.length,reset:!1}}function H0(n,e){return e!=="holly"?{...n,mistakes:n.mistakes+1,accepted:!1,feedback:"unstable"}:{...n,progress:["wood"],accepted:!0}}function G0(n,e){return n.progress.includes("wood")?e!=="phoenix-feather"?{...n,mistakes:n.mistakes+1,accepted:!1,feedback:"resisted"}:{...n,progress:[...n.progress,"core"],accepted:!0}:{...n,accepted:!1,feedback:"unavailable"}}function V0(n,e){return e===11?{...n,progress:[...n.progress,"length"],unlocked:!0,accepted:!0,feedback:"chosen"}:{...n,mistakes:n.mistakes+1,accepted:!1,feedback:e<11?"too-short":"too-long"}}function W0(n,e){const t=["lion","badger","eagle","snake"],i={lion:"courage",badger:"loyalty",eagle:"wisdom",snake:"ambition"},r=t[n.progress.length];if(e!==r)return{...n,mistakes:n.mistakes+1,accepted:!1,feedback:"wrong-order"};const s=[...n.progress,e],o=s.length===t.length;return{...n,progress:s,unlocked:o,accepted:!0,trait:i[e],...o?{chapterComplete:!0}:{}}}function X0({roomIndex:n,unlocked:e}){return e?{roomIndex:n+1,advanced:!0}:{roomIndex:n,advanced:!1}}const yt=new Xd,zt=new fn(70,innerWidth/innerHeight,.1,100),ui=new qg({antialias:!0});ui.setPixelRatio(Math.min(devicePixelRatio,2));ui.setSize(innerWidth,innerHeight);ui.shadowMap.enabled=!0;ui.shadowMap.type=xc;ui.outputColorSpace=on;document.querySelector("#app").appendChild(ui.domElement);const ce=new th(10201809,2957592,1.05);yt.add(ce);const Fa=new rh(12899583,1.5);Fa.position.set(-4,8,5);Fa.castShadow=!0;yt.add(Fa);const wn=new Kg(zt,document.body),Oa=document.querySelector("#start-screen"),zr=document.querySelector("#start-button"),Ns=document.querySelector("#continue-button"),As=document.querySelector("#restart-button"),q0=document.querySelector("#mobile-controls"),We=document.querySelector("#objective"),Rt=document.querySelector("#counter"),br=document.querySelector("#prompt"),yo=document.querySelector("#message"),rn=document.querySelector("#room-kicker"),Y0=document.querySelector("#room-name"),Ye=document.querySelector("#puzzle-hint"),Ft=document.querySelector("#puzzle-progress"),tt=document.querySelector("#room-transition"),Yt=document.querySelector("#transition-kicker"),Kt=document.querySelector("#transition-title"),Cs=document.querySelector("#language-screen"),nu=document.querySelector("#language-button"),jt=document.querySelector("#narration-button"),Ar=document.querySelector("#narration-status"),j0=document.querySelector("#narration-subtitle"),rr=document.querySelector("#narration-audio");let vn="idle",ma=0;const Qi=matchMedia("(pointer: coarse)").matches||matchMedia("(max-width: 820px)").matches||navigator.maxTouchPoints>0,hc=Jc(localStorage),Er=hc?o0(hc):null;let Je=u0(localStorage),Me=kr(Je),iu,Br=!1,Be=new $t;yt.add(Be);let ke=[],St=[],oi=null,Le=null,xt=0,C={progress:[],unlocked:!1},fc,Ss=!1;const pc={x:8.25,z:8.25},ga=new ah;ga.far=4.2;function $(n,e={}){return new Jd({color:n,roughness:.82,...e})}function W(n,e,t,i,r=!0,s=Be){const o=new Ae(new pn(...e),i);return o.name=n,o.position.set(...t),o.castShadow=r,o.receiveShadow=!0,s.add(o),o}function $0(n){n.traverse(e=>{e.geometry?.dispose?.();const t=Array.isArray(e.material)?e.material:[e.material];for(const i of t)i&&(i.map?.dispose?.(),i.dispose?.())})}function K0(){yt.remove(Be),$0(Be),Be=new $t,yt.add(Be),ke=[],St=[],oi=null,Le=null,br.classList.remove("visible")}function ze(n,e,{color:t="#f2d28b",width:i=4.8,size:r=54}={}){n=kt(Je,n);const s=document.createElement("canvas");s.width=1024,s.height=220;const o=s.getContext("2d");o.fillStyle="rgba(7, 5, 10, 0.82)",o.fillRect(0,0,s.width,s.height),o.strokeStyle=t,o.lineWidth=8,o.strokeRect(8,8,s.width-16,s.height-16),o.fillStyle=t,o.font=`600 ${r}px -apple-system, BlinkMacSystemFont, sans-serif`,o.textAlign="center",o.textBaseline="middle",o.fillText(n,s.width/2,s.height/2);const a=new Zd(s);a.colorSpace=on;const l=new Yd(new Hc({map:a,transparent:!0,depthTest:!0}));return l.position.set(...e),l.scale.set(i,i*.215,1),Be.add(l),l}function ae(n,e=2400){yo.textContent=kt(Je,n),yo.classList.add("show"),clearTimeout(fc),fc=setTimeout(()=>yo.classList.remove("show"),e)}function Gt({index:n,name:e,objectiveText:t,hint:i,progress:r}){const s=xt>=16?{book:2,chapter:1,room:xt-15}:{book:1,chapter:Math.floor(xt/4)+1,room:xt%4+1},o=f0(Je,{...s,name:e,objectiveText:t,hint:i});rn.textContent=o.kicker,Y0.textContent=o.name,We.textContent=o.objectiveText,Ye.textContent=o.hint,Ft.textContent=r}function mc(){const n=C.progress.length;Rt.textContent=Me("counter.letters",{count:n}),Ft.textContent=fa.map((e,t)=>t<n?"●":"○").join("  ")}function gc(){const n=C.progress.length;Rt.textContent=Me("counter.shopping",{count:n,remaining:12-(C.spent??0)}),Ft.textContent=pa.map((e,t)=>t<n?"✓":"□").join("  ")}function ka(){const n=C.progress.includes("wood"),e=C.progress.includes("core"),t=C.progress.includes("length");Rt.textContent=Me("counter.wand",{count:C.progress.length,mistakes:C.mistakes}),Ft.textContent=`木材 ${n?"✓":"○"}  杖芯 ${e?"✓":"○"}  长度 ${t?"✓":"○"}`}function Z0(){Rt.textContent=Me("counter.sorting",{count:C.progress.length,mistakes:C.mistakes}),Ft.textContent=`狮 ${C.progress.includes("lion")?"✓":"○"}  獾 ${C.progress.includes("badger")?"✓":"○"}  鹰 ${C.progress.includes("eagle")?"✓":"○"}  蛇 ${C.progress.includes("snake")?"✓":"○"}`}function ru(){Rt.textContent=Me("counter.stairs",{count:C.progress.length,penalty:C.timePenalty}),Ft.textContent=["lower","moon","upper"].map((n,e)=>e<C.progress.length?"◆":"◇").join("  ")}function su(){Rt.textContent=Me("counter.portraits",{count:C.progress.length,value:C.suspicion}),Ft.textContent=["scholar","knight","lady"].map((n,e)=>e<C.progress.length?"▣":"▢").join("  ")}function ou(){Rt.textContent=Me("counter.patrol",{count:C.progress.length,value:C.alert}),Ft.textContent=["armor","cat","tapestry"].map((n,e)=>e<C.progress.length?"◆":"◇").join("  ")}function au(){Rt.textContent=Me("counter.lullaby",{count:C.progress.length,value:C.wakefulness}),Ft.textContent=["flute","harp","music-box"].map((n,e)=>e<C.progress.length?"♪":"·").join("  ")}function lu(){Rt.textContent=Me("counter.flying",{count:C.progress.length,value:C.turbulence}),Ft.textContent=["围巾","笔记","罗盘"].map((n,e)=>e<C.progress.length?"➤":"○").join("  ")}function cu(){Rt.textContent=Me("counter.troll",{count:C.progress.length,value:C.danger}),Ft.textContent=["止水","清障","架桥"].map((n,e)=>e<C.progress.length?"✦":"◇").join("  ")}function uu(){Rt.textContent=Me("counter.library",{count:C.progress.length,value:C.noise}),Ft.textContent=["建校","龙灾","月蚀"].map((n,e)=>e<C.progress.length?"▰":"▱").join("  ")}function du(){Rt.textContent=Me("counter.mirror",{count:C.progress.length,value:C.illusion}),Ft.textContent=["御寒","照路","同行"].map((n,e)=>e<C.progress.length?"◈":"◇").join("  ")}function hu(){Rt.textContent=Me("counter.snare",{count:C.progress.length,value:C.constriction}),Ft.textContent=["镇静","点火","恒光"].map((n,e)=>e<C.progress.length?"✺":"○").join("  ")}function fu(){Rt.textContent=Me("counter.keys",{count:C.progress.length,value:C.pursuit}),Ft.textContent=["折翼","轨迹","锁孔"].map((n,e)=>e<C.progress.length?"🗝":"◇").join("  ")}function pu(){Rt.textContent=Me("counter.chess",{count:C.progress.length,value:C.captured}),Ft.textContent=["兵诱敌","马双攻","车开路"].map((n,e)=>e<C.progress.length?"♟":"◇").join("  ")}function mu(){Rt.textContent=Me("counter.stone",{count:C.progress.length,value:C.corruption}),Ft.textContent=["药剂","镜像","意图"].map((n,e)=>e<C.progress.length?"◆":"◇").join("  ")}function gu(){Rt.textContent=Me("counter.elf",{count:C.progress.length,value:C.interference}),Ft.textContent=["邮槽","蛋糕","飞路"].map((n,e)=>e<C.progress.length?"✦":"◇").join("  ")}function _u(){Rt.textContent=Me("counter.car",{count:C.progress.length,value:C.turbulence}),Ft.textContent=["配重","航向","油门"].map((n,e)=>e<C.progress.length?"➤":"◇").join("  ")}function vu(){Rt.textContent=Me("counter.willow",{count:C.progress.length,value:C.bruises}),Ft.textContent=["等","伏","冲"].map((n,e)=>e<C.progress.length?"♩":"◇").join("  ")}function Vt({wall:n=5787455,floor:e=2892828,ceiling:t=2696479,fog:i=1512207}){yt.background=new et(i),yt.fog=new Ca(i,.028);const r=$(n,{roughness:.96}),s=$(e,{roughness:1});W("地板",[18,.25,18],[0,-.12,0],s,!1),W("天花板",[18,.25,18],[0,7,0],$(t),!1),W("北墙",[18,7,.3],[0,3.5,-9],r,!1),W("南墙",[18,7,.3],[0,3.5,9],r,!1),W("西墙",[.3,7,18],[-9,3.5,0],r,!1),W("东墙",[.3,7,18],[9,3.5,0],r,!1)}function gt(n,e=2.5,t=8){const i=new ci(16753737,e,t,2);i.position.set(...n),i.castShadow=!0,Be.add(i);const r=new Ae(new ft(.09,12,12),new Yn({color:16762216}));r.position.copy(i.position),Be.add(r)}function za(n,e){const t=$(5256734,{roughness:.72}),i=$(2430735,{roughness:.75,metalness:.08});W("左门框",[.22,5.5,.42],[-1.72,2.75,-8.63],t),W("右门框",[.22,5.5,.42],[1.72,2.75,-8.63],t),W("上门框",[3.65,.22,.42],[0,5.45,-8.63],t);const r=new $t;r.position.set(-1.58,0,-8.48),Be.add(r);const s=W(n,[3.16,5.15,.22],[1.58,2.58,0],i,!0,r);return s.userData={type:"door",label:n,unlocked:!1,opening:!1,pivot:r,nextRoomIndex:e},ke.push(s),oi=s,ze(n,[0,6.05,-8.35],{width:4.2,size:48}),s}function So({position:n,rotation:e=[0,0,0],clueId:t=null,destination:i="",decoy:r=!1,decorative:s=!1,phase:o=0}){const a=$(15261117,{roughness:.72,emissive:t?2365197:0,emissiveIntensity:t?.35:0}),l=new Ae(new pn(.86,.54,.05),a);l.position.set(...n),l.rotation.set(...e),l.castShadow=!0,Be.add(l);const c=new Ae(new Ut(.095,.095,.032,18),$(8328736,{roughness:.55}));c.rotation.x=Math.PI/2,c.position.set(0,-.05,.055),l.add(c);const u=new Ae(new ln().setFromPoints([new U(-.38,.22,.031),new U(.38,.22,.031),new U(0,-.05,.031)]),new Yn({color:13615775,side:xn}));return l.add(u),s||(l.name=i,l.userData={type:"owl-letter",clueId:t,destination:i,decoy:r,selected:!1},ke.push(l)),St.push({object:l,baseY:n[1],phase:o,spin:s?.08:.025,bob:s?.16:.07}),l}function Tr(n,e=1,t=!1){const i=new $t;i.position.set(...n),i.scale.setScalar(e);const r=$(15328209,{roughness:1}),s=new Ae(new ft(.34,18,18),r);s.scale.y=1.35,s.castShadow=!0,i.add(s);const o=new Ae(new ft(.29,18,18),r);o.position.y=.48,i.add(o);for(const l of[-.11,.11]){const c=new Ae(new ft(.055,12,12),new Yn({color:15911244}));c.position.set(l,.53,.25),i.add(c);const u=new Ae(new ft(.025,10,10),new Yn({color:592137}));u.position.set(l,.53,.295),i.add(u)}const a=new Ae(new Xn(.07,.18,4),$(14064444));return a.rotation.x=Math.PI/2,a.position.set(0,.4,.31),i.add(a),Be.add(i),t&&(s.userData={type:"shopping-item",itemId:"owl",label:"雪白猫头鹰"},ke.push(s)),St.push({object:i,baseY:n[1],phase:n[0]+n[2],spin:0,bob:.04}),i}function J0(){ce.color.setHex(10985609),ce.groundColor.setHex(3352093),Vt({wall:6709064,floor:3745566,ceiling:3881005,fog:1577487}),Gt({index:0,name:"猫头鹰来信",objectiveText:"目标：按弗农改变藏身处的时间顺序检查四封信",hint:"地址会追着哈利变化。错误选择会让已确认的信全部重新飞散。",progress:"○  ○  ○  ○"}),Rt.textContent=Me("counter.letters",{count:0}),C={progress:[],unlocked:!1};const n=$(4861208),e=$(2956049),t=$(7035201,{roughness:1}),i=$(5975587,{roughness:1});for(let a=0;a<7;a+=1)W("楼梯",[3.8-a*.32,.32,1.05],[-6.7+a*.2,.16+a*.32,-4.6+a*.72],e);W("楼梯下储物间",[2.4,2.15,.16],[-7.7,1.08,-3.7],n),ze("楼梯下的储物间",[-7.42,2.55,-3.52],{width:3.2,size:42}),W("壁炉背板",[4.1,3.6,.38],[0,1.8,-8.58],i),W("壁炉洞口",[2.3,2,.46],[0,1,-8.3],$(1182472)),W("壁炉台",[4.6,.28,.72],[0,3.45,-8.2],n),gt([0,1.05,-7.85],4.2,8);for(const a of[-.55,0,.55])gt([a,.55+Math.abs(a)*.3,-7.75],1.25,4);W("沙发座",[4.2,.65,1.45],[3.9,.62,2.6],t),W("沙发背",[4.2,1.45,.45],[3.9,1.35,3.05],t),W("茶几",[3.1,.22,1.7],[1.7,.75,.2],n);for(const[a,l]of[[.45,-.45],[2.95,-.45],[.45,.85],[2.95,.85]])W("茶几腿",[.16,.75,.16],[a,.37,l],e);const r=$(6455968,{emissive:1915224,emissiveIntensity:1.8,roughness:.25});W("窗户",[5.1,2.7,.12],[0,3.8,8.78],r,!1),W("窗框横",[5.3,.16,.2],[0,3.8,8.65],n),W("窗框竖",[.16,2.9,.2],[0,3.8,8.65],n),Tr([-2,5.4,8.2],.8),Tr([0,5.65,8.2],.72),Tr([2.1,5.25,8.2],.85),Tr([-3.9,2.15,-1.4],1.05),ze("4 PRIVET DRIVE",[0,6.15,8.45],{width:5.2,size:52}),ze("NO POST ON SUNDAYS!",[3.85,4.7,-8.3],{color:"#e4b55e",width:4,size:42}),[{clueId:"cupboard",destination:"H. Potter · 楼梯下的储物间",position:[-6.45,1,-3.1],rotation:[0,.55,0]},{clueId:"bedroom",destination:"H. Potter · 楼上最小的卧室",position:[6.3,1.5,3.7],rotation:[0,-.65,0]},{clueId:"hotel-room-17",destination:"H. Potter · 铁路景观酒店 17 号房",position:[-4.7,1.85,4.35],rotation:[0,.2,0]},{clueId:"island-hut",destination:"H. Potter · 海上岩礁小屋",position:[5.55,2.15,-4.6],rotation:[0,-.3,0]}].forEach((a,l)=>So({...a,phase:l*1.4})),[["front-door","V. Dursley · 女贞路前门",[-2.8,1.45,2.3]],["kitchen","D. Dursley · 厨房餐桌",[4.6,1.5,.2]],["zoo","H. Potter · 动物园爬虫馆",[-5.9,1.75,1.9]],["school","H. Potter · 石墙中学",[.1,1.35,3.75]]].forEach(([a,l,c],u)=>So({clueId:a,destination:l,position:c,decoy:!0,rotation:[0,u*.7,0],phase:2+u}));for(let a=0;a<34;a+=1){const l=a*.73,c=1.4+a%7*.72;So({position:[Math.sin(l)*c,1.1+a%9*.54,-6.8+Math.cos(l)*c*.62],rotation:[Math.sin(a)*.45,l,Math.cos(a*.4)*.3],decorative:!0,phase:a*.37})}za("通往对角巷",1)}function Zi(n,e,t,i){const r=$(i,{roughness:.9});W(`${t}店面`,[3.2,5.6,.55],[n,2.8,e],r),W(`${t}橱窗`,[2.15,2.15,.12],[n,2.85,e+(e<0?.34:-.34)],$(4284528,{emissive:1587271,emissiveIntensity:.8,roughness:.2})),ze(t,[n,5.3,e+(e<0?.42:-.42)],{width:3,size:38,color:"#e8c871"})}function ei(n,e,t,i,r=9069888){let s;if(n==="cauldron"){s=new Ae(new Ut(.48,.62,.62,24,1,!0),$(2697771,{metalness:.65,roughness:.38,side:xn})),s.position.set(...t),Be.add(s);const o=new Ae(new Ai(.5,.06,10,24),$(5592922,{metalness:.8}));o.rotation.x=Math.PI/2,o.position.y=.32,s.add(o)}else n==="owl"?s=Tr(t,1.1,!0).children[0]:n==="broomstick"?(s=new Ae(new Ut(.055,.055,2.2,10),$(6898719)),s.rotation.z=Math.PI/2.7,s.position.set(...t),Be.add(s)):s=W(e,n==="spellbook"?[1.15,.28,.82]:n==="wand-box"?[1.55,.24,.42]:[.85,.85,.85],t,$(r,{emissive:r,emissiveIntensity:.08}));return s.name=e,s.userData={type:"shopping-item",itemId:n,label:e,price:i},ke.includes(s)||ke.push(s),ze(`${e} · ${i} G`,[t[0],t[1]+1.05,t[2]],{width:2.8,size:32}),s}function Q0(){ce.color.setHex(7305376),ce.groundColor.setHex(1775393),Vt({wall:3156026,floor:3617336,ceiling:1512477,fog:1051927}),Gt({index:1,name:"对角巷清单",objectiveText:"目标：按霍格沃茨清单采购四件合规格物品，预算 12 加隆",hint:"课本 → 二号锡制坩埚 → 猫头鹰 → 魔杖盒。核对规格与价签，买错会清空采购篮。",progress:"□  □  □  □"}),Rt.textContent=Me("counter.shopping",{count:0,remaining:12}),C={progress:[],unlocked:!1,spent:0},yt.fog.density=.022;for(let n=-7;n<=7;n+=1.1)for(let e=-2.8;e<=2.8;e+=1.1){const t=W("鹅卵石",[.95,.08,.95],[e+n*10%2*.22,.02,n],$(4801613,{roughness:1}),!1);t.rotation.y=(e+n)*.08}Zi(-6.9,-5.8,"丽痕书店",5058601),Zi(6.9,-5.8,"坩埚店",2440250),Zi(-6.9,.3,"咿啦猫头鹰商店",4799784),Zi(6.9,.3,"奥利凡德魔杖店",3353414),Zi(-6.9,6.2,"药剂材料铺",4075071),Zi(6.9,6.2,"魁地奇精品店",4073769);for(const n of[[-3.2,4.5,-4.2],[3.2,4.2,-1.8],[-2.1,4.8,3.8],[2.8,4.4,6.5]])gt(n,2.6,7);ei("spellbook","《标准咒语·初级》",[-4.9,1,-5],Mr.spellbook,8070194),ei("cauldron","二号锡制坩埚",[5,.7,-4.9],Mr.cauldron),ei("owl","雪白猫头鹰",[-5,1.25,.6],Mr.owl),ei("wand-box","等待主人的魔杖盒",[5,1,.7],Mr["wand-box"],6966058),ei("broomstick","飞天扫帚",[5,1.2,5.8],7),ei("crystal-ball","水晶球",[-5,1,5.7],5,6707589),ei("gold-scales","黄铜天平",[-3.2,1,-1.8],4,11041845),ei("advanced-potions","高级魔药学",[3.1,1,-2.5],6,2706741),za("进入奥利凡德魔杖店",2)}function Mo(n,e,t,i=0){const r=new Ae(new Ut(.025,.065,e,10),$(t,{roughness:.7}));return r.position.set(...n),r.rotation.z=Math.PI/2,r.rotation.y=i,r.castShadow=!0,Be.add(r),r}function e_(){ce.color.setHex(12032624),ce.groundColor.setHex(2365198),Vt({wall:4206623,floor:2365199,ceiling:1511435,fog:1051400}),yt.fog.density=.034,Gt({index:2,name:"魔杖选择",objectiveText:"目标：第一阶段，从三种木材中找出与你产生稳定共鸣的一种",hint:"木材线索：闪电形旧伤旁，常青叶不会在严冬凋零。选错会触发失控魔法。",progress:"木材 ○  杖芯 ○  长度 ○"}),Rt.textContent=Me("counter.wand",{count:0,mistakes:0}),C={progress:[],unlocked:!1,mistakes:0};const n=$(2824461,{roughness:.88}),e=$(5715741,{roughness:.8}),t=[7230258,5257507,8086080,4008732];for(const u of[-1,1]){W("高魔杖柜",[.72,6.35,16.4],[u*8.35,3.18,0],n);for(let h=0;h<8;h+=1){W("柜架横梁",[.86,.1,16.1],[u*7.92,.55+h*.73,0],e);for(let f=0;f<10;f+=1){const m=t[(h+f+(u>0?1:0))%t.length],_=W("积尘的魔杖盒",[.24,.48,1.25],[u*7.77,.82+h*.73,-7.1+f*1.55],$(m,{roughness:.95}));_.rotation.x=((h+f)%3-1)*.025}}}W("奥利凡德柜台",[8.2,1.15,1.3],[0,.58,-4.5],e),W("柜台台面",[8.65,.18,1.55],[0,1.2,-4.5],$(7753770,{roughness:.55}));for(const[u,h,f]of[[-2.5,6238744,1.1],[0,2692620,1.28],[2.5,10120255,1.42]])W("打开的魔杖盒",[1.8,.16,.48],[u,1.38,-4.42],$(1511435)),Mo([u,1.55,-4.42],f,h);ze("木材  ·  杖芯  ·  长度",[0,2.35,-4.95],{width:5.4,size:43});const i=[{id:"oak",label:"橡木",x:-3.2,color:9067051},{id:"holly",label:"冬青木",x:0,color:15656132},{id:"yew",label:"紫杉木",x:3.2,color:4792340}];for(const u of i){W(`${u.label}样本台`,[1.8,.85,1.2],[u.x,.42,1.25],n);const h=Mo([u.x,1.16,1.25],1.35,u.color);h.name=`${u.label}木材样本`,h.userData={type:"wand-wood",woodId:u.id,label:u.label,selected:!1},ke.push(h),ze(u.label,[u.x,2,1.25],{width:1.65,size:40})}const r=[{id:"dragon-heartstring",label:"龙心弦",x:-3.2,color:10959653},{id:"phoenix-feather",label:"凤凰羽毛",x:0,color:15906891},{id:"unicorn-hair",label:"独角兽毛",x:3.2,color:15196623}];for(const u of r){const h=W(`${u.label}杖芯台`,[1.8,.85,1.2],[u.x,.42,-1.15],n);h.visible=!1;const f=new Ae(new Ut(.14,.14,1.05,14),$(u.color,{emissive:u.color,emissiveIntensity:.45}));f.position.set(u.x,1.25,-1.15),f.name=`${u.label}杖芯样本`,f.userData={type:"wand-core",coreId:u.id,label:u.label,selected:!1,pedestal:h},f.visible=!1,Be.add(f),ke.push(f)}const s=[{inches:9,label:"九英寸",x:-3.2,length:1.05},{inches:11,label:"十一英寸",x:0,length:1.3},{inches:13,label:"十三英寸",x:3.2,length:1.55}];for(const u of s){const h=W(`${u.label}校准台`,[1.8,.85,1.2],[u.x,.42,3.85],n);h.visible=!1;const f=Mo([u.x,1.2,3.85],u.length,15656132);f.name=`${u.label}冬青木魔杖`,f.userData={type:"wand-length",inches:u.inches,label:u.label,selected:!1,pedestal:h},f.visible=!1,ke.push(f);const m=ze(u.label,[u.x,2.05,3.85],{width:1.7,size:38});m.visible=!1,f.userData.lengthLabel=m}const o=new $t;o.position.set(4.8,0,-6.15);const a=new Ae(new Ut(.38,.58,1.7,12),$(2696235));a.position.y=.9,o.add(a);const l=new Ae(new ft(.3,16,12),$(13083772));l.position.y=1.95,o.add(l);const c=new Ae(new ft(.32,14,10,0,Math.PI*2,0,Math.PI*.58),$(14209213));c.position.y=2.06,o.add(c),Be.add(o),W("后墙梯子左",[.14,5.7,.14],[-4.7,2.85,-8.35],e),W("后墙梯子右",[.14,5.7,.14],[-3.65,2.85,-8.35],e);for(let u=.45;u<5.5;u+=.48)W("梯子横档",[1.2,.1,.12],[-4.18,u,-8.28],e);ze("OLLIVANDERS · 公元前 382 年",[0,6.18,-8.45],{width:6.5,size:42}),gt([-5.2,4.7,-2.3],3.1,9),gt([5.2,4.7,-2.3],3.1,9),gt([0,4.5,-6.4],2.7,7);for(let u=0;u<12;u+=1){const h=new Ae(new ft(.025,6,6),new Yn({color:15387514})),f=[-5.5+u%6*2.2,1.3+u%4*1.15,-5.7+Math.floor(u/6)*5.8];h.position.set(...f),Be.add(h),St.push({object:h,baseY:f[1],phase:u*.8,spin:0,bob:.22})}za("登上霍格沃茨特快",3)}function t_(){ce.color.setHex(9281736),ce.groundColor.setHex(1512738),Vt({wall:4208431,floor:2169624,ceiling:1119270,fog:921632}),yt.fog.density=.022,Gt({index:3,name:"分院仪式",objectiveText:"目标：走近分院帽，观察大厅里的四学院象征",hint:"勇气、忠诚、智慧与野心各有象征；分院帽正在等待你的选择。",progress:"狮 ○  獾 ○  鹰 ○  蛇 ○"}),Rt.textContent=Me("counter.sorting",{count:0,mistakes:0}),C={progress:[],unlocked:!1,mistakes:0};const n=$(4992538,{roughness:.84});for(const i of[-5.6,-1.9,1.9,5.6]){W("学院长桌",[1.45,.65,11.5],[i,.72,.8],n);for(let r=-4;r<=5;r+=1.8){const s=W("悬浮蜡烛",[.08,.5,.08],[i,3.2+(r+4)%3*.3,r],$(16115128));St.push({object:s,baseY:s.position.y,phase:i+r,spin:0,bob:.08})}}const e=[{id:"lion",symbol:"狮",label:"狮 · 勇气",x:-5.7,color:9184818},{id:"badger",symbol:"獾",label:"獾 · 忠诚",x:-1.9,color:11962927},{id:"eagle",symbol:"鹰",label:"鹰 · 智慧",x:1.9,color:2706554},{id:"snake",symbol:"蛇",label:"蛇 · 野心",x:5.7,color:2579523}];for(const i of e){W(`${i.label}学院旗`,[2.25,3.3,.16],[i.x,4.55,-8.55],$(i.color,{roughness:.9})),ze(i.label,[i.x,4.55,-8.4],{width:2,size:40});const r=W(`${i.label}石徽`,[1.25,1.25,.32],[i.x,1.35,4.2],$(i.color,{emissive:i.color,emissiveIntensity:.12}));r.userData={type:"sorting-clue",symbolId:i.id,label:i.label,selected:!1},ke.push(r),ze(i.symbol,[i.x,1.35,4],{width:.85,size:74})}W("分院凳",[1.7,.22,1.45],[0,.72,-5.7],n);const t=new Ae(new Xn(.62,1.25,10),$(4863268,{roughness:.98}));t.position.set(0,1.45,-5.7),t.rotation.z=-.12,Be.add(t),ze("分院帽",[0,2.55,-5.8],{width:2.2,size:46}),gt([-4.8,4.8,-3],3.2,11),gt([4.8,4.8,-3],3.2,11)}function n_(){ce.color.setHex(8885949),ce.groundColor.setHex(1382433),Vt({wall:3883336,floor:2435378,ceiling:1119520,fog:1053725}),yt.fog.density=.019,Gt({index:0,name:"移动楼梯",objectiveText:"目标：依据钟摆与月相路线，依次稳定三座移动楼梯",hint:"路线铭文：从最低的平台起步；月光桥只在钟摆居中时停驻；最后登上最高塔。选错会让路线复位并增加 5 秒惩罚。",progress:"◇  ◇  ◇"}),rn.textContent="第一部 · 第二章 · 第 1 关",C={progress:[],mistakes:0,timePenalty:0,unlocked:!1},ru();const n=$(5857643,{roughness:.96}),e=$(10390104,{emissive:3221009,emissiveIntensity:.4}),t=[{id:"lower",label:"低塔 · 起点",x:-5.1,z:1.9,height:.3,symbol:"I"},{id:"moon",label:"月光桥 · 居中",x:0,z:-2,height:1,symbol:"☾"},{id:"upper",label:"高塔 · 终点",x:5.1,z:1.9,height:1.7,symbol:"III"}];for(const[s,o]of t.entries()){const a=new $t;a.position.set(o.x,0,o.z),a.rotation.y=s===1?Math.PI:s===0?-.28:.28,Be.add(a);for(let c=0;c<7;c+=1)W("会移动的石阶",[2.6,.28,.78],[0,.14+c*.27,c*-.7],n,!0,a);W("楼梯平台",[3.2,.3,2.2],[0,2+o.height,-4.6],n,!0,a);const l=W(o.label,[1.25,1.25,.26],[o.x,1.25,o.z+1],e);l.userData={type:"stair-route",stairId:o.id,label:o.label,selected:!1},ke.push(l),ze(o.symbol,[o.x,1.25,o.z+.84],{width:.8,size:72,color:"#d9c27b"}),St.push({object:a,baseY:0,phase:s*2.1,spin:0,bob:.16})}for(const s of[-7.1,-3.55,0,3.55,7.1])W("楼梯塔石柱",[.7,6.7,.7],[s,3.35,-7.7],n);for(const[s,o]of[[-6.5,4.8],[-3.2,3.9],[3.1,4.7],[6.4,3.7]])W("会说话的画像",[1.5,2,.18],[s,o,-8.25],$(6965285)),W("画像画布",[1.15,1.62,.1],[s,o,-8.12],$(3752027,{emissive:1515837,emissiveIntensity:.5}));const i=new $t;i.position.set(0,6.1,-6.8),Be.add(i),W("钟摆杆",[.12,3.4,.12],[0,-1.7,0],e,!0,i);const r=new Ae(new ft(.42,16,12),e);r.position.y=-3.4,i.add(r),St.push({object:i,baseY:6.1,phase:1.2,spin:.12,bob:0}),ze("GRAND STAIRCASE · 月相路线",[0,6.2,-8.35],{width:6.3,size:40}),gt([-5.8,4.8,-2.5],2.5,10),gt([5.8,4.8,-2.5],2.5,10),gt([0,5.5,3.8],2.2,9)}function i_(){ce.color.setHex(10192813),ce.groundColor.setHex(1774880),Vt({wall:4207940,floor:2366760,ceiling:1314840,fog:1183254}),yt.fog.density=.018,Gt({index:1,name:"会说话的画像",objectiveText:"目标：比较三幅画像的证词，按可信的发言顺序询问口令",hint:"学者说骑士不是第一位；骑士承认学者必须先发言；女士说自己在骑士之后。错误询问会惊动走廊并清空推理。",progress:"▢  ▢  ▢"}),rn.textContent="第一部 · 第二章 · 第 2 关",C={progress:[],mistakes:0,suspicion:0,unlocked:!1},su();const n=$(5326680,{roughness:.98}),e=$(9399605,{metalness:.35,roughness:.55});for(const i of[-6,-3,0,3,6])W("画像走廊立柱",[.65,6.5,.65],[i,3.25,-8.45],n);const t=[{id:"scholar",label:"蓝袍学者",quote:"“骑士绝不是第一位；我的月桂框知道开头。”",x:-4.7,color:3166069},{id:"knight",label:"银甲骑士",quote:"“学者必须先发言，女士保管最后一词。”",x:0,color:6975352},{id:"lady",label:"月桂女士",quote:"“我在骑士之后，银钥只为完整证词转动。”",x:4.7,color:7356511}];for(const i of t){W(`${i.label}画框`,[3.15,4.25,.26],[i.x,3.8,-8.42],e);const r=W(i.label,[2.65,3.72,.24],[i.x,3.8,-8.2],$(i.color,{emissive:i.color,emissiveIntensity:.28}));r.userData={type:"portrait-testimony",portraitId:i.id,label:i.label,quote:i.quote,selected:!1},ke.push(r),ze(i.label,[i.x,6.35,-8.05],{width:2.5,size:42})}W("走廊尽头银钥门",[3.1,5.5,.3],[0,2.75,8.55],$(2433835,{metalness:.5,roughness:.5})),ze("SILVER KEY CORRIDOR",[0,5.9,8.35],{width:5.4,size:38});for(const i of[-6.5,-2.2,2.2,6.5])gt([i,4.6,-2.2],2.2,9)}function r_(){ce.color.setHex(7505569),ce.groundColor.setHex(1119514),Vt({wall:3423299,floor:2106923,ceiling:1053978,fog:725013}),yt.fog.density=.024,Gt({index:2,name:"管理员的巡夜",objectiveText:"目标：利用盔甲遮挡、猫铃声与暗门，避开管理员的灯光巡查",hint:"巡夜图记：灯光先扫过空盔甲；猫铃能把脚步引向反方向；最后掀开独角兽挂毯。走错会清空路线并提高警戒。",progress:"◇  ◇  ◇"}),rn.textContent="第一部 · 第二章 · 第 3 关",C={progress:[],mistakes:0,alert:0,unlocked:!1},ou();const n=$(4739674,{roughness:.98}),e=$(9139269,{metalness:.48,roughness:.54});for(const u of[-6.8,-3.4,0,3.4,6.8])W("巡夜拱廊立柱",[.64,6.6,.64],[u,3.3,-8.4],n);for(const u of[-5.8,-2.1,1.6,5.3])W("月光地砖",[14.8,.03,1],[0,.03,u],$(6321546,{emissive:2505037,emissiveIntensity:.32}),!1);const t=new $t;t.position.set(-5,0,.7),Be.add(t),W("空盔甲底座",[1.55,.3,1.25],[0,.15,0],n,!0,t),W("空盔甲胸甲",[1.05,1.55,.55],[0,1.35,0],e,!0,t);const i=new Ae(new ft(.48,12,10),e);i.position.y=2.45,t.add(i);const r=W("空盔甲阴影",[1.8,3.2,.24],[-5,1.6,1.15],$(2436405,{emissive:1515821,emissiveIntensity:.25}));r.userData={type:"patrol-cover",hidingPlaceId:"armor",label:"空盔甲阴影",selected:!1},ke.push(r),ze("I · 盔甲遮挡",[-5,3.55,1.05],{width:2.4,size:38}),W("猫铃机关台",[1.5,.8,1.5],[0,.4,-1.4],n);const s=new Ae(new ft(.48,14,10),$(10122304,{emissive:4796690,emissiveIntensity:.45}));s.position.set(0,1.05,-1.4),s.name="猫铃机关",s.userData={type:"patrol-cover",hidingPlaceId:"cat",label:"猫铃机关",selected:!1},Be.add(s),ke.push(s),ze("II · 猫铃诱饵",[0,2.2,-1.4],{width:2.5,size:38});const o=W("独角兽暗门挂毯",[3.5,4.7,.22],[5,2.8,-8.15],$(3231074,{emissive:1518908,emissiveIntensity:.35}));o.userData={type:"patrol-cover",hidingPlaceId:"tapestry",label:"独角兽暗门挂毯",selected:!1},ke.push(o),ze("III · 独角兽挂毯",[5,5.75,-8],{width:3.2,size:38});const a=new $t;a.position.set(-6.5,2.2,-5.7),Be.add(a);const l=new ci(16766602,3.2,7,2);a.add(l);const c=new Ae(new ft(.16,10,8),new Yn({color:16763243}));a.add(c),St.push({object:a,baseY:2.2,phase:.5,spin:.22,bob:.08}),ze("NIGHT PATROL · 保持安静",[0,6.25,-8.35],{width:6,size:39}),gt([-6.8,4.5,5.4],1.5,7),gt([6.8,4.5,5.4],1.5,7)}function s_(){ce.color.setHex(6649183),ce.groundColor.setHex(1183501),Vt({wall:3487791,floor:2170136,ceiling:1184014,fog:921612}),yt.fog.density=.022,Gt({index:3,name:"三头犬活板门",objectiveText:"目标：按守门生物能接受的层次，奏出完整安眠旋律",hint:"褪色乐谱写着：先让气息像夜风进入梦乡，再让琴弦托住梦境，最后以发条的轻响封住鼾声。错奏会重置旋律并惊醒守卫。",progress:"·  ·  ·"}),rn.textContent="第一部 · 第二章 · 第 4 关",C={progress:[],mistakes:0,wakefulness:0,unlocked:!1},au();const n=$(4934206,{roughness:.98}),e=$(3220765,{roughness:1}),t=$(1840401,{roughness:1});for(const o of[-6.4,-3.2,0,3.2,6.4])W("禁区石柱",[.68,6.6,.68],[o,3.3,-8.35],n);const i=new $t;i.position.set(0,0,-5.6),Be.add(i);const r=new Ae(new ft(1.75,16,12),e);r.scale.set(1.65,1.05,.9),r.position.y=2.1,r.castShadow=!0,i.add(r),[-1.35,0,1.35].forEach((o,a)=>{const l=new Ae(new ft(.82,14,12),e);l.position.set(o,3.55+(a===1?.25:0),.12),i.add(l);const c=new Ae(new ft(.43,12,9),t);c.scale.set(1,.7,.75),c.position.set(o,l.position.y-.18,.72),i.add(c);for(const u of[-.25,.25]){const h=new Ae(new ft(.07,8,8),new Yn({color:14066493}));h.position.set(o+u,l.position.y+.14,.72),i.add(h)}for(const u of[-.48,.48]){const h=new Ae(new Xn(.25,.65,8),e);h.position.set(o+u,l.position.y+.65,.08),i.add(h)}}),St.push({object:i,baseY:0,phase:.8,spin:.012,bob:.045}),W("活板门边框",[4.8,.18,4.8],[0,.08,-4.9],n,!1),W("活板门",[4.25,.2,4.25],[0,.2,-4.9],$(2299663,{metalness:.12}));const s=[{id:"flute",label:"银木长笛",clue:"I · 夜风之息",x:-4.6,color:11449774},{id:"harp",label:"月弦竖琴",clue:"II · 托梦之弦",x:0,color:10187060},{id:"music-box",label:"星纹音乐盒",clue:"III · 发条封音",x:4.6,color:5859960}];for(const o of s){W(`${o.label}谱架`,[2.25,1,1.7],[o.x,.5,2.3],n);const a=W(o.label,[1.75,.4,1.15],[o.x,1.2,2.3],$(o.color,{emissive:o.color,emissiveIntensity:.28,metalness:.25}));a.userData={type:"lullaby-instrument",instrumentId:o.id,label:o.label,selected:!1},ke.push(a),ze(o.clue,[o.x,2.15,2.3],{width:2.7,size:36})}ze("FORBIDDEN CORRIDOR · 安眠乐谱",[0,6.2,-8.2],{width:6.3,size:38}),gt([-6.2,4.6,1.2],1.8,8),gt([6.2,4.6,1.2],1.8,8)}function o_(){ce.color.setHex(10471392),ce.groundColor.setHex(2374701),Vt({wall:5401432,floor:2506540,ceiling:7902886,fog:9417669}),yt.fog.density=.012,Gt({index:0,name:"飞行课遗失物",objectiveText:"目标：借助风向旗判断重量，依次把三件遗失物送入对应的安全轨迹",hint:"风向板写着：最轻的红色织物先借低风归队；有月纹的笔记随后穿过中环；沉重黄铜罗盘最后沿高风落到新生手中。错序会卷起乱流并吹散全部物品。",progress:"○  ○  ○"}),rn.textContent="第一部 · 第三章 · 第 1 关",C={progress:[],mistakes:0,turbulence:0,unlocked:!1},lu();const n=$(3495995,{roughness:1}),e=$(6714219,{roughness:.96}),t=$(10189117,{metalness:.42,roughness:.52});W("飞行训练草坪",[17.6,.18,17.6],[0,.02,0],n,!1);for(const s of[-7.2,-3.6,0,3.6,7.2])W("训练场石柱",[.45,4.8,.45],[s,2.4,-8.35],e);const i=[{id:"scarf-keeper",label:"红色守门员围巾",clue:"I · 低风 · 守门员",x:-4.8,y:1.15,color:10432312},{id:"notebook-scholar",label:"月纹飞行笔记",clue:"II · 中环 · 学者",x:0,y:2.05,color:5072519},{id:"compass-first-year",label:"黄铜航向罗盘",clue:"III · 高风 · 新生",x:4.8,y:2.95,color:10977598}];for(const[s,o]of i.entries()){const a=new Ae(new Ai(1.15,.11,10,28),t);a.position.set(o.x,o.y+1.15,-4.6),a.name=`${o.label}安全轨迹环`,Be.add(a);const l=W(o.label,[1.65,.48,.82],[o.x,o.y,1.8],$(o.color,{emissive:o.color,emissiveIntensity:.35}));l.userData={type:"flying-delivery",deliveryId:o.id,label:o.label,selected:!1},ke.push(l),St.push({object:l,baseY:o.y,phase:s*1.7,spin:.18,bob:.14}),ze(o.clue,[o.x,5.45,-8.1],{width:3,size:34,color:"#e5d79a"})}const r=new $t;r.position.set(-6.8,0,5.4),Be.add(r),W("风向旗杆",[.12,5.4,.12],[0,2.7,0],t,!0,r),W("红金风向旗",[2.3,.65,.08],[1.1,4.8,0],$(10958141,{emissive:3477524,emissiveIntensity:.3}),!0,r),St.push({object:r,baseY:0,phase:.4,spin:.08,bob:0}),ze("FLYING LESSON · 顺风投递",[0,6.2,-8.2],{width:6,size:39}),gt([-5.5,4.2,4.6],1.2,8),gt([5.5,4.2,4.6],1.2,8)}function a_(){ce.color.setHex(9217704),ce.groundColor.setHex(1517610),Vt({wall:4350052,floor:2373948,ceiling:2308154,fog:1651254}),yt.fog.density=.02,Gt({index:1,name:"巨怪洗手间",objectiveText:"目标：依次稳定漏水、悬浮瓦砾，再放下横梁架出逃生路线",hint:"破裂水管正在冲散落脚点。先转动月纹阀止水，再让碎石升起清出通道，最后才能把高处横梁平稳放到沟渠上。错序会让巨怪逼近并震塌路线。",progress:"◇  ◇  ◇"}),rn.textContent="第一部 · 第三章 · 第 2 关",C={progress:[],mistakes:0,danger:0,unlocked:!1},cu();const n=$(6718599,{roughness:.82}),e=$(3361872,{roughness:.95});W("洗手间湿地砖",[17.6,.18,17.6],[0,.02,0],e,!1);for(const l of[-7.2,-4.8,-2.4,0,2.4,4.8,7.2])W("拱形瓷砖墙柱",[.42,6.4,.5],[l,3.2,-8.35],n);W("溢水沟渠",[15,.08,2.15],[0,.16,-2.6],$(1588555,{emissive:730674,emissiveIntensity:.8}),!1);const t=[{id:"seal-pipe",label:"月纹止水阀",clue:"I · 先止住洪水",x:-4.8,y:1.35,color:5602707},{id:"levitate-rubble",label:"悬浮碎石阵",clue:"II · 再清出通道",x:0,y:1.6,color:7695715},{id:"lower-beam",label:"锁链橡木横梁",clue:"III · 最后架桥",x:4.8,y:2.5,color:8476207}];for(const[l,c]of t.entries()){W(`${c.label}基座`,[2.5,.7,1.8],[c.x,.35,2.6],n);const u=W(c.label,[1.85,.55,1.15],[c.x,c.y,2.6],$(c.color,{emissive:c.color,emissiveIntensity:.32}));u.userData={type:"troll-obstacle",obstacleId:c.id,label:c.label,selected:!1},ke.push(u),St.push({object:u,baseY:c.y,phase:l*1.4,spin:.08,bob:.06}),ze(c.clue,[c.x,4.55,-8.05],{width:2.9,size:35,color:"#b9d8d7"})}const i=new $t;i.position.set(0,0,-6.2),Be.add(i);const r=$(7174246,{roughness:1}),s=new Ae(new ft(1.35,14,11),r);s.scale.set(1.25,1.55,.9),s.position.y=2.15,i.add(s);const o=new Ae(new ft(.78,12,10),r);o.position.set(0,4.05,.15),i.add(o);const a=W("巨怪木棒",[.48,4.4,.48],[1.5,2.15,0],$(5190689),!0,i);a.rotation.z=-.3,St.push({object:i,baseY:0,phase:.7,spin:.015,bob:.055}),ze("TROLL WASHROOM · 悬浮逃生",[0,6.2,-8.15],{width:6.2,size:38,color:"#b9d8d7"}),gt([-6.2,4.8,4.5],1.35,8),gt([6.2,4.8,4.5],1.35,8)}function l_(){ce.color.setHex(6714779),ce.groundColor.setHex(1381149),Vt({wall:3354427,floor:2104100,ceiling:1315098,fog:855060}),yt.fog.density=.024,Gt({index:2,name:"图书馆禁书区",objectiveText:"目标：依据馆藏年代，按从古到今的顺序点亮三本安全书脊",hint:"目录铜牌记载：四学院建校录最古老；龙灾账册写于其后数百年；月蚀纪事刚完成修订。避开锁链缠绕、会尖叫的无年卷。",progress:"▱  ▱  ▱"}),rn.textContent="第一部 · 第三章 · 第 3 关",C={progress:[],mistakes:0,noise:0,unlocked:!1},uu();const n=$(3023132,{roughness:.92}),e=$(9401668,{metalness:.48,roughness:.5}),t=$(4538699,{roughness:.98});for(const r of[-7.2,-3.6,0,3.6,7.2])W("禁书区拱柱",[.52,6.6,.65],[r,3.3,-8.38],t);for(const r of[-5.8,0,5.8]){W("高层书架",[4.1,5.7,.75],[r,3,-7.9],n);for(const s of[1.25,2.55,3.85,5.15])W("书架横板",[3.8,.13,1.05],[r,s,-7.55],e)}const i=[{id:"founders-index",label:"四学院建校录",clue:"I · 建校之初",x:-5.1,color:8008760},{id:"dragon-ledger",label:"北境龙灾账册",clue:"II · 第七次龙灾",x:-1.7,color:8610107},{id:"moon-chronicle",label:"银月蚀纪事",clue:"III · 本年修订",x:1.7,color:4217722},{id:"screaming-codex",label:"锁链无年卷",clue:"禁 · 年代被抹除",x:5.1,color:4533331}];for(const[r,s]of i.entries()){W(`${s.label}阅览台`,[2.35,.85,1.7],[s.x,.42,2.3],t);const o=W(s.label,[1.45,1.85,.42],[s.x,1.75,2.3],$(s.color,{emissive:s.color,emissiveIntensity:.32}));o.userData={type:"restricted-book",bookId:s.id,label:s.label,selected:!1},ke.push(o),St.push({object:o,baseY:1.75,phase:r*1.35,spin:.04,bob:.07}),ze(s.clue,[s.x,3.25,2.3],{width:2.45,size:34,color:"#b9c8ef"})}W("禁书区出口封印",[3.2,5.5,.3],[0,2.75,8.55],$(2499125,{emissive:2370133,emissiveIntensity:.55})),ze("RESTRICTED SECTION · 历史书脊",[0,6.2,-8.15],{width:6.4,size:38,color:"#b9c8ef"}),gt([-6.4,4.7,4.8],1.35,8),gt([6.4,4.7,4.8],1.35,8)}function c_(){ce.color.setHex(8885688),ce.groundColor.setHex(1578278),Vt({wall:3880268,floor:2170155,ceiling:1512223,fog:1118234}),yt.fog.density=.018,Gt({index:3,name:"厄里斯魔镜",objectiveText:"目标：比较镜中欲望与现实处境，依次选择真正需要的三件物品",hint:"镜中人戴着王冠、捧着奖杯，却在现实的寒风中发抖。先御寒，再为黑暗出口照路；最后记住：能共同离开的人，比独占的荣誉更重要。",progress:"◇  ◇  ◇"}),rn.textContent="第一部 · 第三章 · 第 4 关",C={progress:[],mistakes:0,illusion:0,unlocked:!1},du();const n=$(11187398,{metalness:.72,roughness:.24}),e=$(2433335,{roughness:.9});for(const i of[-7.2,-4.8,4.8,7.2])W("镜廊石柱",[.52,6.5,.52],[i,3.25,-8.35],e);W("魔镜银框",[5.7,6.25,.42],[0,3.2,-8.42],n),W("魔镜镜面",[4.75,5.35,.18],[0,3.15,-8.12],$(7373478,{emissive:3754096,emissiveIntensity:.9,metalness:.82,roughness:.16}),!1),ze("镜中所见 ≠ 现实所需",[0,6.35,-8.02],{width:5.5,size:38,color:"#d9ddf2"});const t=[{id:"wool-cloak",label:"旧羊毛斗篷",clue:"I · 现实：寒风",x:-6.1,color:7558730},{id:"brass-lantern",label:"黄铜提灯",clue:"II · 现实：暗路",x:-3.05,color:10779189},{id:"shared-token",label:"同伴木牌",clue:"III · 现实：同行",x:0,color:5207647},{id:"jeweled-crown",label:"镜中宝冠",clue:"欲望 · 独占荣耀",x:3.05,color:9254493},{id:"victory-cup",label:"镜中金杯",clue:"欲望 · 空洞胜利",x:6.1,color:9333553}];for(const[i,r]of t.entries()){W(`${r.label}石台`,[2.45,.8,1.7],[r.x,.4,2.5],e);const s=W(r.label,[1.45,1.05,.8],[r.x,1.45,2.5],$(r.color,{emissive:r.color,emissiveIntensity:.34,metalness:r.id.includes("crown")||r.id.includes("cup")?.45:.08}));s.userData={type:"mirror-choice",itemId:r.id,label:r.label,selected:!1},ke.push(s),St.push({object:s,baseY:1.45,phase:i*1.1,spin:.06,bob:.06}),ze(r.clue,[r.x,3,2.5],{width:2.45,size:31,color:"#d9ddf2"})}gt([-6.4,4.8,4.7],1.25,8),gt([6.4,4.8,4.7],1.25,8)}function u_(){ce.color.setHex(7179368),ce.groundColor.setHex(1317653),Vt({wall:2701100,floor:1516313,ceiling:1120273,fog:857615}),yt.fog.density=.024,Gt({index:0,name:"魔鬼网",objectiveText:"目标：保持镇静，按正确节奏控制蓝铃火焰，让藤蔓松开地下出口",hint:"挣扎会让藤蔓收紧。先放松摆脱缠绕，再点燃冷焰，最后维持稳定光照；猛烈爆燃只会惊动整片根网。",progress:"○  ○  ○"}),rn.textContent="第一部 · 第四章 · 第 1 关",C={progress:[],mistakes:0,constriction:0,unlocked:!1},hu();const n=$(2706223,{emissive:1522978,emissiveIntensity:.42,roughness:.95}),e=$(4288063,{emissive:1918500,emissiveIntensity:.3});for(let r=0;r<14;r+=1){const s=r/14*Math.PI*2,o=2.2+r%3*.72,a=W("缠绕藤蔓",[.25,3.4+r%2,.25],[Math.cos(s)*o,2,-1.8+Math.sin(s)*o],n);a.rotation.z=Math.sin(s)*.48,St.push({object:a,baseY:a.position.y,phase:r*.47,spin:.02,bob:.035})}W("根网出口",[4.4,.3,4.4],[0,.08,-2],$(725260,{emissive:1454109,emissiveIntensity:.45}),!1);for(const r of[-6.7,-5.5,5.5,6.7])W("藤叶石柱",[.55,5.8,.55],[r,2.9,-7.9],e);const t=[{id:"relax-grip",label:"放松呼吸",clue:"I · 停止挣扎",x:-6,color:4946531},{id:"kindle-bluebell",label:"点燃蓝铃冷焰",clue:"II · 微光驱藤",x:-2,color:4353699},{id:"hold-light",label:"维持恒定光照",clue:"III · 稳住三拍",x:2,color:7055815},{id:"flare-brightly",label:"猛烈爆燃",clue:"诱饵 · 惊动根网",x:6,color:12078389}];for(const[r,s]of t.entries()){W(`${s.label}石台`,[2.7,.75,1.8],[s.x,.38,3.5],$(2502951));const o=W(s.label,[1.25,1.25,.85],[s.x,1.45,3.5],$(s.color,{emissive:s.color,emissiveIntensity:.38}));o.userData={type:"devils-snare-action",actionId:s.id,label:s.label,selected:!1},ke.push(o),St.push({object:o,baseY:1.45,phase:r*1.2,spin:.07,bob:.06}),ze(s.clue,[s.x,3,3.5],{width:2.7,size:31,color:"#b9e2c0"})}ze("UNDERGROUND TRIALS · 魔鬼网",[0,6.15,-8.15],{width:6.1,size:39,color:"#b9e2c0"});const i=new ci(7321343,2.6,10,2);i.position.set(0,4.8,1.5),Be.add(i)}function d_(n){const{model:e}=n,t=$(n.color,{emissive:n.color,emissiveIntensity:.48,metalness:.82,roughness:e.metal==="gold"?.2:.3}),i=new Ut(.105,.105,e.shaftLength,14);i.rotateZ(Math.PI/2);const r=new Ae(i,t);r.name=n.label,r.castShadow=!0;const s=new Ae(new Ai(e.bowRadius,.105,10,28),t);s.name=`${n.label}钥匙环`,s.position.x=-(e.shaftLength/2+e.bowRadius*.72),s.rotation.z=-Math.PI/2,r.add(s);const o=t.clone();for(let l=0;l<e.teeth;l+=1){const c=new Ae(new pn(.16,.22+l*.035,.12),o);c.name=`${n.label}锁齿`,c.position.set(e.shaftLength/2-l*.16,-.14-l*.025,0),r.add(c)}const a=$(11454952,{emissive:4349826,emissiveIntensity:.42,transparent:!0,opacity:.86,roughness:.5,side:xn});for(const l of e.wings){const c=l.side==="left"?-1:1,u=new $t;u.name=`${n.label}${l.side==="left"?"左翼":"右翼"}`,u.position.set(c*.22,.04,0),u.rotation.z=l.bend;for(let h=0;h<l.feathers;h+=1){const f=new Ae(new ft(.24,12,8),a);f.name=`${u.name}羽片`,f.scale.set(1.5-h*.12,.34,.18),f.position.set(c*(.22+h*.16),.3+h*.12,0),f.rotation.z=c*(.42+h*.09),u.add(f)}r.add(u)}if(e.metal==="gold")for(let l=0;l<6;l+=1){const c=new Ae(new ft(.055,10,8),$(14241123,{emissive:61e5,emissiveIntensity:.7,metalness:.35,roughness:.25})),u=l/6*Math.PI*2;c.position.set(s.position.x+Math.cos(u)*e.bowRadius,Math.sin(u)*e.bowRadius,.08),r.add(c)}return r}function h_(n){const e=$(7907552,{emissive:3234706,emissiveIntensity:1.1});for(let t=0;t<n.evidence.orbitMarkers;t+=1){const i=-t*.72,r=new Ae(new ft(.075+t*.008,10,8),e);r.name="顺时针下沉轨迹标记",r.position.set(n.x+Math.cos(i)*(.85-t*.04),2.28-t*.12,n.display.z+Math.sin(i)*.48),Be.add(r)}}function f_(){ce.color.setHex(8558262),ce.groundColor.setHex(1514283),Vt({wall:3556189,floor:2107450,ceiling:1251367,fog:1120038}),yt.fog.density=.021,Gt({index:1,name:"飞钥匙房",objectiveText:"目标：依次确认翅膀损伤、飞行轨迹和锁孔材质，锁定唯一真钥匙",hint:"门锁留下银屑；真正用过的钥匙左翼弯折，负重后会沿顺时针轨迹下沉。先观察损伤，再追踪轨迹，最后核对银色钥匙。",progress:"◇  ◇  ◇"}),rn.textContent=Me("hud.roomKicker",{book:1,chapter:4,room:2}),C={progress:[],mistakes:0,pursuit:0,unlocked:!1},fu();const n=$(6582925,{metalness:.32,roughness:.66});for(const i of[-7.2,-4.8,4.8,7.2])W("钥匙厅高柱",[.55,6.4,.55],[i,3.2,-8.3],n);W("银屑锁门",[4.1,5.4,.3],[0,2.7,-8.45],$(3160138,{metalness:.62,roughness:.35}));const e=$(14280946,{emissive:6256784,emissiveIntensity:.9,metalness:.9,roughness:.22});for(let i=0;i<12;i+=1){const r=new Ae(new La(.035+i%3*.012),e);r.name="锁孔银屑",r.position.set(-.22+i%4*.13,2.2+Math.floor(i/4)*.11,-8.22),r.rotation.set(i*.3,i*.5,0),Be.add(r)}ze(eu.wallClue,[0,6.15,-8.05],{width:7.4,size:32,color:"#c9dcff"});for(const[i,r]of F0.entries()){W(`${r.label}观察台`,[2.55,.65,1.55],[r.x,.33,r.display.z],$(2699847));const s=d_(r);s.position.set(r.x,1.75,r.display.z),s.rotation.x=-.16,Be.add(s),r.evidence.motion==="clockwise-descending"&&h_(r),s.userData={type:"flying-key-clue",clueId:r.id,label:r.label,selected:!1},ke.push(s),St.push({object:s,baseY:1.75,phase:i*1.35,spin:.1,bob:.18}),ze(r.clue,[r.x,3.05,r.display.z],{width:2.45,size:28,color:"#c9dcff"})}const t=new ci(9091327,3.1,13,2);t.position.set(0,5.7,1.2),Be.add(t)}function bo(n,e){const t=new Ae(new Ut(.56,.66,.24,16),e);t.position.y=.12,t.castShadow=!0,t.receiveShadow=!0;const i=(r,s,o=[0,0,0])=>{const a=new Ae(r,e);return a.position.set(...s),a.rotation.set(...o),a.castShadow=!0,a.receiveShadow=!0,t.add(a),a};if(i(new Ut(.45,.53,.18,16),[0,.23,0]),n.piece==="pawn")i(new Ut(.25,.42,.72,14),[0,.65,0]),i(new Ai(.29,.07,8,16),[0,1.02,0],[Math.PI/2,0,0]),i(new ft(n.headRadius??.24,16,10),[0,1.25,0]);else if(n.piece==="rook"){i(new Ut(.37,.46,.88,12),[0,.72,0]),i(new Ut(.52,.39,.28,12),[0,1.28,0]);const r=n.battlements??6;for(let s=0;s<r;s+=1){const o=s/r*Math.PI*2;i(new pn(.2,.3,.22),[Math.sin(o)*.38,1.55,Math.cos(o)*.38],[0,o,0])}}else if(n.piece==="knight"){i(new Ut(.28,.45,.62,12),[0,.58,0]),i(new Da(.29,.65,5,10),[-.08,1.08,0],[0,0,-.38]),i(new pn(.62,.38,.46),[.25,1.43,0],[0,0,-.12]),i(new pn(.42,.2,.38),[.65,1.32,0],[0,0,-.08]);for(const s of[-.14,.14])i(new Xn(.11,.34,8),[.08,1.78,s],[0,0,-.18]);const r=n.maneRidges??4;for(let s=0;s<r;s+=1)i(new Xn(.1,.32,6),[-.35+s*.08,1.5-s*.18,0],[0,0,-1.15])}else if(i(new Ut(.27,.45,.86,14),[0,.7,0]),i(new Ai(.32,.07,8,18),[0,1.13,0],[Math.PI/2,0,0]),n.piece==="bishop")i(new ft(.27,14,10),[0,1.4,0]),i(new Xn(.19,.48,12),[0,1.74,0]);else if(n.piece==="queen"){i(new ft(.24,14,10),[0,1.38,0]);const r=n.crownSpikes??6;for(let s=0;s<r;s+=1){const o=s/r*Math.PI*2;i(new Xn(.09,.38,7),[Math.sin(o)*.27,1.72,Math.cos(o)*.27])}i(new ft(.11,10,8),[0,1.94,0])}else i(new ft(.25,14,10),[0,1.39,0]),i(new pn(.13,.58,.13),[0,1.84,0]),i(new pn(.48,.13,.13),[0,1.9,0]);return t.scale.setScalar((n.height??1.75)/1.75),t}function p_(){ce.color.setHex(10132646),ce.groundColor.setHex(1513243),Vt({wall:4013379,floor:2105381,ceiling:1381658,fog:1052692}),yt.fog.density=.018,Qi&&(zt.position.z=Tt.mobileCameraZ),Gt({index:2,name:"巫师棋",objectiveText:"目标：用最少牺牲打开通往对岸的安全棋路",hint:"黑后封锁中央。先用边兵引开主教，再让骑士双攻国王与城堡，最后直车沿空出的纵线推进；贸然冲后会让已投入的棋子全部被吃。",progress:"◇  ◇  ◇"}),C={progress:[],mistakes:0,captured:0,unlocked:!1},pu();const n=$(12170666,{roughness:.78}),e=$(2697777,{roughness:.86}),t=$(5592671,{roughness:.96});for(let r=0;r<8;r+=1)for(let s=0;s<8;s+=1)W("巫师棋盘格",[Tt.cellSize,.16,Tt.cellSize],[Tt.boardStartX+s*Tt.cellSize,.05,Tt.boardStartZ+r*Tt.cellSize],(r+s)%2?e:n,!1);const i=["rook","knight","bishop","queen","king","bishop","knight","rook"];for(const[r,s,o]of[[0,"黑方",e],[7,"白方",n]]){for(let l=0;l<8;l+=1){const c=bo({piece:i[l],height:1.7},o);c.name=`${s}${i[l]}巨型棋子`,c.position.set(Tt.boardStartX+l*Tt.cellSize,.18,Tt.boardStartZ+r*Tt.cellSize),Be.add(c),St.push({object:c,baseY:.18,phase:l*.55,spin:0,bob:.025})}const a=r===0?1:6;for(let l=0;l<8;l+=1){const c=bo({piece:"pawn",height:1.48,headRadius:.22},o);c.name=`${s}巨型兵`,c.position.set(Tt.boardStartX+l*Tt.cellSize,.18,Tt.boardStartZ+a*Tt.cellSize),Be.add(c)}}for(const[r,s]of O0.entries()){const o=Qi?s.mobileDisplay:{x:s.x,z:s.display.z,scale:1,plaqueWidth:2.05};W(`${s.label}棋钟台`,[o.plaqueWidth,.65,1.55],[o.x,.33,o.z],t);const a=bo(s.model,$(s.color,{emissive:s.color,emissiveIntensity:.36,metalness:.12,roughness:.72}));a.name=s.label,a.scale.multiplyScalar(o.scale),a.position.set(o.x,.58,o.z),Be.add(a),a.userData={type:"wizard-chess-move",moveId:s.id,label:s.label,selected:!1},ke.push(a),St.push({object:a,baseY:.58,phase:r*1.25,spin:.025,bob:.055}),ze(s.clue,[o.x,.48,o.z+.82],{width:o.plaqueWidth-.05,size:Qi?21:27,color:"#e1dfd5"})}ze(tu.wallClue,[0,6.15,-8.15],{width:7.5,size:Qi?Tt.mobileWallLabelSize:31,color:"#e1dfd5"}),gt([-6.2,4.8,5.5],1.5,8),gt([6.2,4.8,5.5],1.5,8)}function m_(){ce.color.setHex(10258354),ce.groundColor.setHex(1380635),Vt({wall:3879237,floor:2169640,ceiling:1380379,fog:854290}),yt.fog.density=.019,Gt({index:3,name:"魔法石密室",objectiveText:"目标：穿过黑焰，解读镜像，并证明你只想保护魔法石",hint:"七瓶药剂中，最小的瓶子可穿过黑焰。镜中真正的守护者口袋仍空着；想夺取魔法石的手只会触发密室腐化。",progress:"◇  ◇  ◇"}),rn.textContent="第一部 · 第四章 · 第 4 关",C={progress:[],mistakes:0,corruption:0,unlocked:!1},mu();const n=$(2827314,{roughness:.9}),e=$(11110734,{metalness:.62,roughness:.36});W("厄里斯镜框",[5.8,6,.45],[0,3.1,-8.42],e),W("厄里斯镜面",[4.85,5.1,.18],[0,3.05,-8.1],$(6839426,{emissive:3747160,emissiveIntensity:.95,metalness:.76,roughness:.18}),!1);for(const r of[-7.2,-5,5,7.2])W("密室黑石柱",[.62,6.4,.62],[r,3.2,-8.25],n);const t=[{id:"black-flame-potion",label:"最小银瓶",clue:"I · 穿越黑焰",x:-6,color:8485030},{id:"empty-pocket-reflection",label:"空口袋镜影",clue:"II · 不占有",x:-2,color:6717345},{id:"protect-the-stone",label:"守护石的誓言",clue:"III · 只为保护",x:2,color:7705713},{id:"seize-the-stone",label:"夺取石的手",clue:"诱饵 · 占有欲",x:6,color:10305356}];for(const[r,s]of t.entries()){W(`${s.label}石台`,[2.7,.72,1.65],[s.x,.36,4],n);const o=W(s.label,[1.3,1.3,.78],[s.x,1.42,4],$(s.color,{emissive:s.color,emissiveIntensity:.4}));o.userData={type:"stone-chamber-clue",clueId:s.id,label:s.label,selected:!1},ke.push(o),St.push({object:o,baseY:1.42,phase:r*1.2,spin:.055,bob:.065}),ze(s.clue,[s.x,3,4],{width:2.7,size:31,color:"#dfcef2"})}ze("STONE CHAMBER · 欲望无法取得守护之石",[0,6.15,-8.05],{width:7,size:34,color:"#dfcef2"});const i=new ci(13016319,3,12,2);i.position.set(0,5.5,.5),Be.add(i)}function g_(){ce.color.setHex(8494477),ce.groundColor.setHex(1121048),Vt({wall:3426111,floor:1911076,ceiling:1581598,fog:725776}),yt.fog.density=.024,Gt({index:0,name:"精灵的封锁",objectiveText:"目标：循魔力残痕解除住宅中的三重封锁，赶往国王十字车站",hint:"绿色干扰从邮槽进入，绕过悬浮蛋糕，最后汇入壁炉封印。错碰尖叫灯会让封锁重新闭合。",progress:"◇  ◇  ◇"}),rn.textContent="第二部 · 第一章 · 第 1 关",C={progress:[],mistakes:0,interference:0,unlocked:!1},gu();const n=$(2704955,{roughness:.86}),e=$(9861959,{metalness:.52,roughness:.42});W("住宅楼梯平台",[3.1,.35,4.8],[-6.8,.18,-3],n);for(let r=0;r<7;r+=1)W("封锁楼梯踏板",[2.5,.28,.72],[-6.8,.35+r*.3,-.8-r*.58],n);W("封死的住宅正门",[3.2,5.1,.28],[0,2.55,-8.45],n),W("黄铜门链",[3.6,.18,.18],[0,3,-8.18],e),W("壁炉背墙",[4.3,4.5,.5],[5.7,2.25,-7.9],$(2634542)),W("壁炉冷焰",[2.4,2.1,.35],[5.7,1.05,-7.55],$(2518871,{emissive:1530951,emissiveIntensity:1.15}));const t=[{id:"jammed-post",label:"堵塞的邮槽",clue:"I · 绿色粉尘入口",x:-5.8,color:7178091},{id:"levitating-cake",label:"悬浮蛋糕",clue:"II · 魔力绕行处",x:-1.9,color:9139797},{id:"sealed-floo",label:"封死的飞路炉",clue:"III · 干扰汇聚点",x:2,color:4162156},{id:"shrieking-lamp",label:"尖叫油灯",clue:"诱饵 · 报警回路",x:5.9,color:9519947}];for(const[r,s]of t.entries()){W(`${s.label}底座`,[2.65,.65,1.55],[s.x,.33,4.5],n);const o=W(s.label,[1.28,1.35,.78],[s.x,1.4,4.5],$(s.color,{emissive:s.color,emissiveIntensity:.38}));o.userData={type:"elf-blockade-trace",objectId:s.id,label:s.label,selected:!1},ke.push(o),St.push({object:o,baseY:1.4,phase:r*1.15,spin:.05,bob:.06}),ze(s.clue,[s.x,2.95,4.5],{width:2.75,size:30,color:"#b9ddc8"})}ze("HOUSE BLOCKADE · 追踪绿色魔力残痕",[0,6.1,-8.05],{width:6.8,size:35,color:"#b9ddc8"});const i=new ci(6476957,2.8,13,2);i.position.set(0,5.4,1.2),Be.add(i),gt([-6.4,4.8,5.8],1.4,7)}function __(){ce.color.setHex(7440544),ce.groundColor.setHex(1120547),Vt({wall:2504260,floor:1515819,ceiling:1450545,fog:659737}),yt.fog.density=.021,Gt({index:1,name:"飞车失控",objectiveText:"目标：在撞上高架桥前依次稳定配重、航向与油门",hint:"后备箱先把车头拉高；红色铁路信号给出航向；发动机过热时只能脉冲给油。猛踩油门会让飞车再次翻滚。",progress:"◇  ◇  ◇"}),rn.textContent="第二部 · 第一章 · 第 2 关",C={progress:[],mistakes:0,turbulence:0,unlocked:!1},_u();const n=$(4809844,{metalness:.62,roughness:.34}),e=$(3764618,{metalness:.5,roughness:.3,emissive:1060668,emissiveIntensity:.5}),t=$(8631494,{metalness:.35,roughness:.16,transparent:!0,opacity:.72});W("飞车车身",[6.4,1.2,3.2],[0,1.35,-1.8],e),W("飞车车顶",[3.7,1.25,2.75],[-.5,2.55,-1.8],e),W("飞车前窗",[.14,1,2.25],[1.38,2.55,-1.8],t,!1),W("方向盘",[.18,.9,.9],[1,2.05,-.9],n);for(const s of[-2.15,2.15])for(const o of[-3.15,-.45]){const a=new Ae(new Ut(.58,.58,.34,20),$(1118998));a.rotation.x=Math.PI/2,a.position.set(s,.75,o),Be.add(a)}for(let s=0;s<7;s+=1)W("悬空铁路枕木",[7.8,.16,.46],[0,.35,-7.7+s*2.4],$(5325617));W("左铁轨",[.16,.18,17],[-2.35,.55,0],n),W("右铁轨",[.16,.18,17],[2.35,.55,0],n),W("远方列车红灯",[.55,.55,.22],[0,3.6,-8.55],$(14108479,{emissive:16720925,emissiveIntensity:2.4}));const i=[{id:"balance-luggage",label:"后移行李配重",clue:"I · 抬高车头",x:-6,color:9138254},{id:"align-railway",label:"对准红色铁路灯",clue:"II · 修正航向",x:-2,color:5341075},{id:"pulse-throttle",label:"短促脉冲油门",clue:"III · 冷却加速",x:2,color:6720098},{id:"floor-throttle",label:"一脚踩死油门",clue:"诱饵 · 引擎过热",x:6,color:10305865}];for(const[s,o]of i.entries()){W(`${o.label}仪表台`,[2.7,.72,1.55],[o.x,.36,5],n);const a=W(o.label,[1.28,1.32,.72],[o.x,1.42,5],$(o.color,{emissive:o.color,emissiveIntensity:.4}));a.userData={type:"flying-car-control",controlId:o.id,label:o.label,selected:!1},ke.push(a),St.push({object:a,baseY:1.42,phase:s*1.1,spin:.045,bob:.065}),ze(o.clue,[o.x,2.95,5],{width:2.7,size:30,color:"#b9d9e8"})}ze("FLYING CAR · 在铁路上空恢复控制",[0,6.15,-8.05],{width:6.8,size:35,color:"#b9d9e8"});const r=new ci(9423359,3,14,2);r.position.set(0,5.6,1),Be.add(r)}function v_(){ce.color.setHex(8228772),ce.groundColor.setHex(1515544),Vt({wall:2570285,floor:1714976,ceiling:1582365,fog:726288}),yt.fog.density=.024,Gt({index:2,name:"打人柳下",objectiveText:"目标：读懂枝条的高扫、低返与露根间隙，安全抵达树洞",hint:"粗枝先从头顶横扫；回摆会贴近地面。只有第二次攻击收势后，发光树根之间才会短暂露出通道。",progress:"◇  ◇  ◇"}),rn.textContent="第二部 · 第一章 · 第 3 关",C={progress:[],mistakes:0,bruises:0,unlocked:!1},vu();const n=$(5060648,{roughness:1}),e=$(6832941,{roughness:.9,emissive:2953992,emissiveIntensity:.35}),t=$(3691067,{roughness:1}),i=new Ae(new Ut(1.7,2.35,6.8,14),n);i.position.set(0,3.4,-5.2),i.castShadow=!0,Be.add(i);for(const[o,a]of[-1,-.45,.35,.95].entries()){const l=new Ae(new Ut(.24,.52,7.2,9),e);l.rotation.z=a,l.rotation.x=o%2?.5:-.4,l.position.set(Math.sin(a)*2.7,5.4,-4.8+o*.25),Be.add(l),St.push({object:l,baseY:l.position.y,phase:o*1.4,spin:.025,bob:.12})}for(const o of[-3.8,-2,0,2,3.8]){const a=new Ae(new Ut(.18,.48,4.2,8),t);a.rotation.z=Math.PI/2,a.rotation.y=o*.12,a.position.set(o,.35,-4.2+Math.abs(o)*.25),Be.add(a)}W("树洞阴影",[1.7,2.4,.22],[0,1.25,-6.8],$(526856,{emissive:1585695,emissiveIntensity:.5}));const r=[{id:"wait-high-swing",label:"等待高枝扫过",clue:"I · 风声在头顶",x:-6,color:5797258},{id:"duck-low-return",label:"俯身避开低返",clue:"II · 落叶贴地",x:-2,color:7045461},{id:"dash-root-gap",label:"冲过露根间隙",clue:"III · 树洞显露",x:2,color:9598019},{id:"run-before-swing",label:"立刻直冲树洞",clue:"诱饵 · 粗枝蓄力",x:6,color:10109249}];for(const[o,a]of r.entries()){W(`${a.label}石台`,[2.65,.64,1.5],[a.x,.32,4.8],t);const l=W(a.label,[1.24,1.28,.7],[a.x,1.38,4.8],$(a.color,{emissive:a.color,emissiveIntensity:.4}));l.userData={type:"willow-rhythm",actionId:a.id,label:a.label,selected:!1},ke.push(l),St.push({object:l,baseY:1.38,phase:o*1.05,spin:.04,bob:.06}),ze(a.clue,[a.x,2.85,4.8],{width:2.7,size:30,color:"#c7d9bd"})}ze("WHOMPING WILLOW · 听风辨认三拍攻击",[0,6.2,-8.05],{width:7.2,size:34,color:"#c7d9bd"});const s=new ci(10143619,2.7,14,2);s.position.set(0,5.8,.8),Be.add(s)}function Ot(n){K0(),xt=n,zt.position.set(0,1.7,6.7),zt.quaternion.identity(),n===0?J0():n===1?Q0():n===2?e_():n===3?t_():n===4?n_():n===5?i_():n===6?r_():n===7?s_():n===8?o_():n===9?a_():n===10?l_():n===11?c_():n===12?u_():n===13?f_():n===14?p_():n===15?m_():n===16?g_():n===17?__():n===18&&v_(),xu()}function x_(){for(const n of ke)n.userData.type==="owl-letter"&&!n.userData.decoy&&(n.visible=!0,n.userData.selected=!1)}function y_(n){if(n.userData.selected)return;const e=z0(C,n.userData.clueId);if(e.reset){C=e,x_(),mc(),ae(`顺序错误：“${n.userData.destination}”不是下一站。四封信重新飞散！`,3200);return}C=e,n.userData.selected=!0,n.visible=!1,mc(),ae(`时间线正确：${n.userData.destination}`),C.unlocked&&(oi.userData.unlocked=!0,We.textContent="时间线完成：前往“通往对角巷”的门",Ye.textContent="四个地址首尾相接，信上的红蜡封印化成了门钥匙。",ae("四封信按时间顺序排列完成——通往对角巷的门已开启！",3800))}function S_(){for(const n of ke)n.userData.type==="shopping-item"&&(n.visible=!0,n.userData.selected=!1)}function M_(n){if(n.userData.selected)return;const e=B0(C,n.userData.itemId);if(e.reset){C=e,S_(),gc(),ae(`清单顺序错误：“${n.userData.label}”不该现在购买。采购篮被清空！`,3200);return}C=e,n.userData.selected=!0,n.visible=!1,gc(),ae(`已购入：${n.userData.label}（${n.userData.price} 加隆）`),C.unlocked&&(oi.userData.unlocked=!0,We.textContent="采购完成：前往破釜酒吧出口",Ye.textContent="清单上的四枚墨点连成了一条通往下一段旅程的路线。",ae("霍格沃茨采购清单完成——出口已经开启！",3600))}function b_(n){if(!C.progress.includes("wood")){if(C=H0(C,n.userData.woodId),ka(),!C.accepted){ce.color.setHex(11745838),n.rotation.y+=Math.PI/5,ae(`“${n.userData.label}”迸出危险火花！失控反馈 +1，重新观察常青叶线索。`,3200),setTimeout(()=>{xt===2&&ce.color.setHex(12032624)},480);return}n.userData.selected=!0,We.textContent="木材匹配成功：冬青木发出温暖金光，准备进行杖芯匹配",Ye.textContent="第一阶段完成。冬青木认可了那道闪电形旧伤；下一步要解读杖芯反馈。",n.material.emissive.setHex(14858319),n.material.emissiveIntensity=1.6;for(const e of ke)e.userData.type==="wand-core"&&(e.visible=!0,e.userData.pedestal.visible=!0);We.textContent="第二阶段：在三种杖芯中找出会回应守护、忠诚与重生的一种",Ye.textContent="杖芯线索：它来自浴火重生的鸟，曾送来两根命运彼此呼应的羽毛。",ae("稳定共鸣！冬青木完成了第一阶段匹配。",3600)}}function E_(n){if(!C.progress.includes("core")){if(C=G0(C,n.userData.coreId),ka(),!C.accepted){ce.color.setHex(7022716),n.rotation.z+=Math.PI/4,ae(`“${n.userData.label}”抗拒了冬青木！失控反馈 +1，重新解读浴火重生的线索。`,3400),setTimeout(()=>{xt===2&&ce.color.setHex(12032624)},480);return}n.userData.selected=!0,n.material.emissiveIntensity=1.8,We.textContent="杖芯匹配成功：凤凰羽毛与冬青木稳定共鸣，准备校准长度",Ye.textContent="长度线索：短杖的火星触不到远处，长杖的光弧越过目标；让光准确停在十一道刻痕。";for(const e of ke)e.userData.type==="wand-length"&&(e.visible=!0,e.userData.pedestal.visible=!0,e.userData.lengthLabel.visible=!0);ae("凤凰羽毛释放出温暖金光——第二阶段匹配完成！",3800)}}function T_(n){if(!C.progress.includes("length")){if(C=V0(C,n.userData.inches),ka(),!C.accepted){const e=C.feedback==="too-short"?"火星在目标前坠落":"光弧越过了目标";ce.color.setHex(3302042),n.rotation.y+=Math.PI/3,ae(`“${n.userData.label}”${e}！失控反馈 +1。`,3300),setTimeout(()=>{xt===2&&ce.color.setHex(12032624)},480);return}n.userData.selected=!0,n.material.emissive.setHex(16042333),n.material.emissiveIntensity=2,oi.userData.unlocked=!0,We.textContent="魔杖选择完成：带上魔杖，从车站门前往霍格沃茨分院仪式",Ye.textContent="三阶段共鸣稳定。奥利凡德为魔杖系上金色封签，通往霍格沃茨的门已经开启。",ae("十一道刻痕同时亮起——魔杖选择了巫师！前往已开启的车站门。",4600)}}function w_(n){if(!n.userData.selected){if(C=W0(C,n.userData.symbolId),Z0(),!C.accepted){n.rotation.z+=Math.PI/12;const t=["先找敢于直面恐惧的象征","现在要找不求荣耀、始终守护同伴的象征","现在要找以思考照亮未知的象征","最后要找意志坚定、善于为目标开辟道路的象征"][C.progress.length];ae(`“${n.userData.label}”不符合诗谜顺序。分院帽低声提醒：${t}。`,3600);return}if(n.userData.selected=!0,n.material.emissive.setHex(15774780),n.material.emissiveIntensity=1.8,C.trait==="courage"){We.textContent="勇气线索已确认：继续解读“留在朋友身边”的学院象征",Ye.textContent="第一句已解：狮代表直面恐惧的勇气。下一句赞美不求荣耀、始终守护同伴的品格。",ae("狮徽亮起金光——勇气是分院诗谜的第一条线索！",3800);return}if(C.trait==="loyalty"){We.textContent="忠诚线索已确认：继续寻找“以思考照亮未知”的学院象征",Ye.textContent="第二句已解：獾代表不求荣耀的忠诚。下一句属于用问题、观察与求知驱散迷雾的人。",ae("獾徽泛起暖黄光芒——忠诚是分院诗谜的第二条线索！",3800);return}if(C.trait==="wisdom"){We.textContent="智慧线索已确认：继续寻找“为目标开辟道路”的学院象征",Ye.textContent="第三句已解：鹰代表以思考照亮未知的智慧。最后一句属于意志坚定、善于实现目标的人。",ae("鹰徽闪过清澈蓝光——智慧是分院诗谜的第三条线索！",3800);return}We.textContent="第一章完成：四种品格共同照亮了你的分院之路",Ye.textContent="勇气、忠诚、智慧与野心并非互斥；分院帽认可了你完整读懂诗谜的选择。",Us(localStorage,{book:1,chapter:1,room:4}),Yt.textContent="第一部 · 第一章完成",Kt.textContent="霍格沃茨的新生",tt.classList.remove("hidden"),setTimeout(()=>tt.classList.add("hidden"),2200),ae("蛇徽亮起翠光——四学院诗谜完成，第一章通关！",5200)}}function A_(n){if(!(n.userData.selected||C.unlocked)){if(C=S0(C,n.userData.stairId),ru(),!C.accepted){for(const e of ke)e.userData.type==="stair-route"&&(e.userData.selected=!1,e.material.emissiveIntensity=.4);ce.color.setHex(10106950),ae(`“${n.userData.label}”转离了路线！三座楼梯重新移动，时间惩罚 +5 秒。`,3600),setTimeout(()=>{xt===4&&ce.color.setHex(8885949)},520);return}if(n.userData.selected=!0,n.material.emissive.setHex(14138724),n.material.emissiveIntensity=1.8,!C.unlocked){const e=["低塔已固定。等待钟摆穿过中央刻线，寻找月牙铭文。","月光桥已固定。最后选择通往最高平台的三道刻痕。"];We.textContent=`路线已稳定 ${C.progress.length} / 3`,Ye.textContent=e[C.progress.length-1],ae(`${n.userData.label}停止旋转，路线的一段已稳定。`,3e3);return}We.textContent="移动楼梯关卡完成：通往画像走廊的路线已经稳定",Ye.textContent="低塔、月光桥和高塔首尾相接。路线尽头的三幅画像正在争论一道银钥口令。",ot(localStorage,{book:1,chapter:2,room:1}),Yt.textContent="第一部 · 第二章 · 第 1 关完成",Kt.textContent="通往画像走廊",tt.classList.remove("hidden"),ae("三座楼梯在钟声中连接——正在前往“会说话的画像”！",4200),setTimeout(()=>{Ot(5),ot(localStorage,{book:1,chapter:2,room:2})},700),setTimeout(()=>{tt.classList.add("hidden"),ae("第二关已加载：比较画像证词，推导正确询问顺序。",4200)},1600)}}function C_(n){if(!(n.userData.selected||C.unlocked)){if(C=M0(C,n.userData.portraitId),su(),!C.accepted){for(const e of ke)e.userData.type==="portrait-testimony"&&(e.userData.selected=!1,e.material.emissiveIntensity=.28);ce.color.setHex(10697814),ae(`${n.userData.label}高声反驳！证词链断裂，画像怀疑 +1。`,3600),setTimeout(()=>{xt===5&&ce.color.setHex(10192813)},520);return}if(n.userData.selected=!0,n.material.emissive.setHex(13940836),n.material.emissiveIntensity=1.5,!C.unlocked){const e=["学者的月桂框亮起。她确认：银甲骑士应当接着发言。","骑士放下剑并指向女士：最后一个词藏在她的银钥之后。"];We.textContent=`可信证词已连接 ${C.progress.length} / 3`,Ye.textContent=e[C.progress.length-1],ae(`${n.userData.quote}——这段证词与前文一致。`,3800);return}We.textContent="画像谜题完成：银钥口令已经显现",Ye.textContent=`三段证词一致。完整口令：“${C.password}”。`,ot(localStorage,{book:1,chapter:2,room:2}),Yt.textContent="第一部 · 第二章 · 第 2 关完成",Kt.textContent="银钥口令",tt.classList.remove("hidden"),ae(`画像齐声念出：“${C.password}”——正在进入管理员的巡夜路线！`,5200),setTimeout(()=>{Ot(6),ot(localStorage,{book:1,chapter:2,room:3})},700),setTimeout(()=>{tt.classList.add("hidden"),ae("第三关已加载：借助盔甲、猫铃与挂毯避开巡夜灯光。",4400)},1600)}}function R_(n){if(!(n.userData.selected||C.unlocked)){if(C=b0(C,n.userData.hidingPlaceId),ou(),!C.accepted){for(const e of ke)e.userData.type==="patrol-cover"&&(e.userData.selected=!1,e.material.emissiveIntensity=e.userData.hidingPlaceId==="tapestry"?.35:.25);ce.color.setHex(10631986),ae(`“${n.userData.label}”暴露在灯光下！路线清空，警戒升至 ${C.alert}。`,3800),setTimeout(()=>{xt===6&&ce.color.setHex(7505569)},560);return}if(n.userData.selected=!0,n.material.emissive.setHex(7780260),n.material.emissiveIntensity=1.6,!C.unlocked){const e=["灯光从盔甲旁掠过。趁管理员背对走廊，拨动猫铃把脚步引开。","猫铃在反方向响起。现在沿阴影抵达独角兽挂毯后的暗门。"];We.textContent=`潜行路线已完成 ${C.progress.length} / 3`,Ye.textContent=e[C.progress.length-1],ae(`${n.userData.label}生效，巡夜灯光没有发现你。`,3400);return}We.textContent="管理员的巡夜完成：独角兽挂毯后的暗门已经打开",Ye.textContent="盔甲遮住身形，猫铃引开脚步，挂毯后传来三道低沉的呼吸声。",ot(localStorage,{book:1,chapter:2,room:3}),Yt.textContent="第一部 · 第二章 · 第 3 关完成",Kt.textContent="活板门后的呼吸",tt.classList.remove("hidden"),ae("暗门无声开启——正在进入三头犬守卫的禁区！",5200),setTimeout(()=>{Ot(7),ot(localStorage,{book:1,chapter:2,room:4})},700),setTimeout(()=>{tt.classList.add("hidden"),ae("第四关已加载：解读乐谱，用三件乐器让守门生物沉睡。",4400)},1600)}}function D_(n){if(!(n.userData.selected||C.unlocked)){if(C=y0(C,n.userData.instrumentId),au(),!C.accepted){for(const e of ke)e.userData.type==="lullaby-instrument"&&(e.userData.selected=!1,e.material.emissiveIntensity=.28);ce.color.setHex(10697519),ae(`“${n.userData.label}”打乱了旋律！三颗头同时睁眼，惊醒 ${C.wakefulness} 次。`,3900),setTimeout(()=>{xt===7&&ce.color.setHex(6649183)},620);return}if(n.userData.selected=!0,n.material.emissive.setHex(7907971),n.material.emissiveIntensity=1.7,!C.unlocked){const e=["长笛的气息让左首合眼。现在用琴弦托住刚形成的梦境。","竖琴的和声让中首伏下。最后用稳定的发条节拍封住鼾声。"];We.textContent=`安眠旋律已完成 ${C.progress.length} / 3`,Ye.textContent=e[C.progress.length-1],ae(`${n.userData.label}奏效，一颗头缓缓合上双眼。`,3500);return}We.textContent="城堡禁区完成：三颗头都已沉睡，活板门安全开启",Ye.textContent="夜风、琴弦与发条叠成稳定摇篮曲。活板门下方吹来潮湿植物与古老机关的气息。",Us(localStorage,{book:1,chapter:2,room:4}),Yt.textContent="第一部 · 第二章完成",Kt.textContent="禁区守门人",tt.classList.remove("hidden"),ae("三头守卫沉入梦乡——第二章通关，正在前往“镜中秘密”！",5600),setTimeout(()=>{Ot(8),ot(localStorage,{book:1,chapter:3,room:1})},900),setTimeout(()=>{tt.classList.add("hidden"),ae("第三章已加载：在飞行训练场按风向与重量送回三件遗失物。",4800)},1900)}}function P_(n){if(!(n.userData.selected||C.unlocked)){if(C=A0(C,n.userData.deliveryId),lu(),!C.accepted){for(const e of ke)e.userData.type==="flying-delivery"&&(e.userData.selected=!1,e.material.emissiveIntensity=.35);ce.color.setHex(11950946),ae(`“${n.userData.label}”撞入逆风！遗失物重新散落，乱流升至 ${C.turbulence}。`,3900),setTimeout(()=>{xt===8&&ce.color.setHex(10471392)},620);return}if(n.userData.selected=!0,n.material.emissive.setHex(15912551),n.material.emissiveIntensity=1.7,!C.unlocked){const e=["轻围巾顺着低风回到守门员手中。接着让月纹笔记穿过中央风环。","笔记平稳落到学者怀里。最后把最重的黄铜罗盘送上高风。"];We.textContent=`遗失物已安全送回 ${C.progress.length} / 3`,Ye.textContent=e[C.progress.length-1],ae(`${n.userData.label}沿安全轨迹完成投递。`,3400);return}We.textContent="飞行课完成：三件遗失物全部回到主人手中",Ye.textContent="低风托轻物，中环承纸页，高风送黄铜。远处洗手间传来沉重脚步，下一道悬浮机关即将开启。",ot(localStorage,{book:1,chapter:3,room:1}),Yt.textContent="第一部 · 第三章 · 第 1 关完成",Kt.textContent="顺风归还",tt.classList.remove("hidden"),ae("罗盘越过最高风环——正在赶往传出沉重脚步的洗手间！",5200),setTimeout(()=>{Ot(9),ot(localStorage,{book:1,chapter:3,room:2})},800),setTimeout(()=>{tt.classList.add("hidden"),ae("第二关已加载：稳定三道悬浮机关，在巨怪逼近前架出逃生路线。",4800)},1750)}}function L_(n){if(!(n.userData.selected||C.unlocked)){if(C=w0(C,n.userData.obstacleId),cu(),!C.accepted){for(const e of ke)e.userData.type==="troll-obstacle"&&(e.userData.selected=!1,e.material.emissiveIntensity=.32);ce.color.setHex(11750975),ae(`“${n.userData.label}”触发过早！路线震塌，巨怪危险升至 ${C.danger}。`,3900),setTimeout(()=>{xt===9&&ce.color.setHex(9217704)},620);return}if(n.userData.selected=!0,n.material.emissive.setHex(6669746),n.material.emissiveIntensity=1.7,!C.unlocked){const e=["月纹阀合拢，水势减弱。现在悬浮沟渠前的碎石，清出横梁落点。","瓦砾升到巨怪头顶，通道已经清空。最后放下锁链横梁跨过水沟。"];We.textContent=`逃生机关已稳定 ${C.progress.length} / 3`,Ye.textContent=e[C.progress.length-1],ae(`${n.userData.label}稳定生效，巨怪被机关拖慢。`,3400);return}We.textContent="巨怪洗手间完成：横梁已跨过沟渠，安全逃生路线建立",Ye.textContent="止水阀保护落脚点，悬浮瓦砾清出通路，横梁连接出口。禁书区的门缝里透出幽蓝微光。",ot(localStorage,{book:1,chapter:3,room:2}),Yt.textContent="第一部 · 第三章 · 第 2 关完成",Kt.textContent="悬浮逃生",tt.classList.remove("hidden"),ae("横梁稳稳落下——正在穿过幽蓝门廊，前往图书馆禁书区！",5200),setTimeout(()=>{Ot(10),ot(localStorage,{book:1,chapter:3,room:3})},800),setTimeout(()=>{tt.classList.add("hidden"),ae("第三关已加载：按历史年代排列安全书脊，千万别惊醒锁链无年卷。",4800)},1750)}}function I_(n){if(!(n.userData.selected||C.unlocked)){if(C=T0(C,n.userData.bookId),uu(),!C.accepted){for(const e of ke)e.userData.type==="restricted-book"&&(e.userData.selected=!1,e.material.emissiveIntensity=.32);ce.color.setHex(11615587),ae(`“${n.userData.label}”发出尖叫！书脊时间线清空，噪声升至 ${C.noise}。`,3900),setTimeout(()=>{xt===10&&ce.color.setHex(6714779)},620);return}if(n.userData.selected=!0,n.material.emissive.setHex(7311316),n.material.emissiveIntensity=1.8,!C.unlocked){const e=["建校录的四枚徽记亮起。下一本应记录数百年后的北境灾变。","龙灾账册安静归位。最后选择本年刚修订的天象纪事。"];We.textContent=`历史时间线已恢复 ${C.progress.length} / 3`,Ye.textContent=e[C.progress.length-1],ae(`${n.userData.label}年代吻合，出口封印出现一道裂纹。`,3400);return}We.textContent="禁书区完成：三本历史书脊已按年代归位，镜廊出口显现",Ye.textContent="建校、龙灾、月蚀串成完整时间线。书架深处的银镜映出下一道谜题。",ot(localStorage,{book:1,chapter:3,room:3}),Yt.textContent="第一部 · 第三章 · 第 3 关完成",Kt.textContent="无声时间线",tt.classList.remove("hidden"),ae("最后一本纪事归位——银镜正在把你引向镜廊深处！",5200),setTimeout(()=>{Ot(11),ot(localStorage,{book:1,chapter:3,room:4})},800),setTimeout(()=>{tt.classList.add("hidden"),ae("第四关已加载：比较镜像与现实，选择真正需要而非渴望的物品。",4800)},1750)}}function U_(n){if(!(n.userData.selected||C.unlocked)){if(C=E0(C,n.userData.itemId),du(),!C.accepted){for(const e of ke)e.userData.type==="mirror-choice"&&(e.userData.selected=!1,e.material.emissiveIntensity=.34);ce.color.setHex(10303596),ae(`“${n.userData.label}”只是镜中的欲望！现实线索消散，幻象增强至 ${C.illusion}。`,4200),setTimeout(()=>{xt===11&&ce.color.setHex(8885688)},650);return}if(n.userData.selected=!0,n.material.emissive.setHex(12114112),n.material.emissiveIntensity=1.8,!C.unlocked){const e=["斗篷挡住镜廊寒风。出口仍一片漆黑，寻找能照清现实道路的物品。","提灯照出两组脚印。最后选择代表共同离开、而非独占荣耀的信物。"];We.textContent=`现实所需已确认 ${C.progress.length} / 3`,Ye.textContent=e[C.progress.length-1],ae(`${n.userData.label}没有出现在华丽镜像中，却解决了眼前的真实困境。`,3900);return}We.textContent="镜中秘密完成：你选择了御寒、照路与同行，而非王冠和金杯",Ye.textContent="魔镜的幻象退去，现实出口在同伴木牌的微光中显现。地下传来藤蔓摩擦石壁的声音。",Us(localStorage,{book:1,chapter:3,room:4}),Yt.textContent="第一部 · 第三章完成",Kt.textContent="现实所需",tt.classList.remove("hidden"),ae("同伴木牌照亮出口——正在下降至地下试炼的魔鬼网！",5600),setTimeout(()=>{Ot(12),ot(localStorage,{book:1,chapter:4,room:1})},900),setTimeout(()=>{tt.classList.add("hidden"),ae("第四章已加载：停止挣扎，以冷焰和稳定节奏迫使魔鬼网退开。",5e3)},1900)}}function N_(n){if(!(n.userData.selected||C.unlocked)){if(C=P0(C,n.userData.actionId),hu(),!C.accepted){for(const e of ke)e.userData.type==="devils-snare-action"&&(e.userData.selected=!1,e.material.emissiveIntensity=.38);ce.color.setHex(10961976),ae(`“${n.userData.label}”打乱节奏！根网骤然收紧，缠绕强度升至 ${C.constriction}。`,4100),setTimeout(()=>{xt===12&&ce.color.setHex(7179368)},680);return}if(n.userData.selected=!0,n.material.emissive.setHex(7981032),n.material.emissiveIntensity=1.9,!C.unlocked){const e=["你停止挣扎，第一层藤蔓松开。现在点燃不会灼伤施法者的蓝铃冷焰。","冷焰逼退根须。最后保持三拍恒光，不要让亮度突然爆发。"];We.textContent=`魔鬼网光照节奏已完成 ${C.progress.length} / 3`,Ye.textContent=e[C.progress.length-1],ae(`${n.userData.label}奏效，地下出口上方的藤蔓正在退缩。`,3600);return}We.textContent="魔鬼网完成：稳定冷焰驱散根网，通往飞钥匙房的地下出口已经开启",Ye.textContent="镇静削弱缠绕，蓝铃冷焰逼退藤蔓，三拍恒光打开根网。前方传来成群翅膀的振动声。",ot(localStorage,{book:1,chapter:4,room:1}),Yt.textContent="第一部 · 第四章 · 第 1 关完成",Kt.textContent="冷焰退藤",tt.classList.remove("hidden"),ae("魔鬼网缩回石缝——正在进入飞钥匙房！",5200),setTimeout(()=>{Ot(13),ot(localStorage,{book:1,chapter:4,room:2})},900),setTimeout(()=>{tt.classList.add("hidden"),ae(Tn(Je,"roomLoadedMessage"),4800)},1900)}}function F_(n){if(!(n.userData.selected||C.unlocked)){if(C=D0(C,n.userData.clueId),fu(),!C.accepted){for(const e of ke)e.userData.type==="flying-key-clue"&&(e.userData.selected=!1,e.material.emissiveIntensity=.48);ce.color.setHex(10898514),ae(Tn(Je,"wrong",{label:kt(Je,n.userData.label),count:C.pursuit}),4200),setTimeout(()=>{xt===13&&ce.color.setHex(8558262)},700);return}if(n.userData.selected=!0,n.material.emissive.setHex(12575743),n.material.emissiveIntensity=1.9,!C.unlocked){const e=C.progress.length===1?"firstHint":"secondHint";We.textContent=Tn(Je,"progress",{count:C.progress.length}),Ye.textContent=Tn(Je,e),ae(Tn(Je,"accepted",{label:kt(Je,n.userData.label)}),3700);return}We.textContent=Tn(Je,"completeObjective"),Ye.textContent=Tn(Je,"completeHint"),ot(localStorage,{book:1,chapter:4,room:2}),Yt.textContent=Tn(Je,"transitionKicker"),Kt.textContent=Tn(Je,"transitionTitle"),tt.classList.remove("hidden"),ae(Tn(Je,"completionMessage"),5400),setTimeout(()=>{Ot(14),ot(localStorage,{book:1,chapter:4,room:3})},900),setTimeout(()=>{tt.classList.add("hidden"),ae(Tn(Je,"nextRoomMessage"),4800)},1900)}}function O_(n){if(!(n.userData.selected||C.unlocked)){if(C=R0(C,n.userData.moveId),pu(),!C.accepted){for(const e of ke)e.userData.type==="wizard-chess-move"&&(e.userData.selected=!1,e.material.emissiveIntensity=.36);ce.color.setHex(10569547),ae(Pn(Je,"wrong",{label:kt(Je,n.userData.label),count:C.captured}),4300),setTimeout(()=>{xt===14&&ce.color.setHex(10132646)},720);return}if(n.userData.selected=!0,n.material.emissive.setHex(14214084),n.material.emissiveIntensity=1.9,!C.unlocked){const e=C.progress.length===1?"firstHint":"secondHint";We.textContent=Pn(Je,"progress",{count:C.progress.length}),Ye.textContent=Pn(Je,e),ae(Pn(Je,"accepted",{label:kt(Je,n.userData.label)}),3800);return}We.textContent=Pn(Je,"completeObjective"),Ye.textContent=Pn(Je,"completeHint"),ot(localStorage,{book:1,chapter:4,room:3}),Yt.textContent=Pn(Je,"transitionKicker"),Kt.textContent=Pn(Je,"transitionTitle"),tt.classList.remove("hidden"),ae(Pn(Je,"completionMessage"),5400),setTimeout(()=>{Ot(15),ot(localStorage,{book:1,chapter:4,room:4})},900),setTimeout(()=>{tt.classList.add("hidden"),ae(Pn(Je,"nextRoomMessage"),5e3)},1900)}}function k_(n){if(!(n.userData.selected||C.unlocked)){if(C=C0(C,n.userData.clueId),mu(),!C.accepted){for(const e of ke)e.userData.type==="stone-chamber-clue"&&(e.userData.selected=!1,e.material.emissiveIntensity=.4);ce.color.setHex(11615564),ae(`“${n.userData.label}”暴露了占有欲！线索消散，腐化诱惑升至 ${C.corruption}。`,4400),setTimeout(()=>{xt===15&&ce.color.setHex(10258354)},720);return}if(n.userData.selected=!0,n.material.emissive.setHex(14272255),n.material.emissiveIntensity=1.9,!C.unlocked){const e=["最小银瓶让你穿过黑焰。现在观察镜中衣袋：真正不求占有的人，口袋里不会出现石头。","空口袋镜影证明你没有取石欲望。最后明确你的意图：保护它，而不是拥有它。"];We.textContent=`魔法石密室线索已确认 ${C.progress.length} / 3`,Ye.textContent=e[C.progress.length-1],ae(`${n.userData.label}通过了密室检验，镜面中的金光更加清晰。`,3900);return}We.textContent="第一部完成：魔法石只向无意占有、决心守护的人显现",Ye.textContent="药剂穿过黑焰，空口袋识破欲望，守护誓言让魔法石安全显现。新的绿色干扰正在住宅中聚集。",Us(localStorage,{book:1,chapter:4,room:4}),Yt.textContent="第一部 · 魔法石完成",Kt.textContent="第二部 · 不祥警告",tt.classList.remove("hidden"),ae("守护之石化作金光——正在返回住宅，调查精灵留下的三重封锁！",6500),setTimeout(()=>{Ot(16),ot(localStorage,{book:2,chapter:1,room:1})},1e3),setTimeout(()=>{tt.classList.add("hidden"),ae("第二部首关已加载：沿邮槽、蛋糕与飞路炉追踪绿色魔力残痕。",5200)},2100)}}function z_(n){if(!(n.userData.selected||C.unlocked)){if(C=U0(C,n.userData.objectId),gu(),!C.accepted){for(const e of ke)e.userData.type==="elf-blockade-trace"&&(e.userData.selected=!1,e.material.emissiveIntensity=.38);ce.color.setHex(10764108),ae(`“${n.userData.label}”接通了报警回路！封锁重置，干扰增强至 ${C.interference}。`,4300),setTimeout(()=>{xt===16&&ce.color.setHex(8494477)},720);return}if(n.userData.selected=!0,n.material.emissive.setHex(11004868),n.material.emissiveIntensity=1.9,!C.unlocked){const e=["邮槽里的绿色粉尘来自室外。残痕没有走直线，而是绕向被悬浮咒托起的蛋糕。","蛋糕下方的魔力丝线指向壁炉。最后解除飞路炉上的三环封印。"];We.textContent=`住宅封锁痕迹已确认 ${C.progress.length} / 3`,Ye.textContent=e[C.progress.length-1],ae(`${n.userData.label}的残痕已固定，绿色干扰显露下一段走向。`,3800);return}We.textContent="精灵的封锁完成：邮槽、悬浮蛋糕与飞路炉的干扰链已全部解除",Ye.textContent="绿色粉尘标出入口，悬浮蛋糕暴露绕行，飞路封印是最终汇聚点。住宅出口重新打开。",ot(localStorage,{book:2,chapter:1,room:1}),Yt.textContent="第二部 · 第一章 · 第 1 关完成",Kt.textContent="飞车失控",tt.classList.remove("hidden"),ae("三重封锁碎成绿色星屑——正在登上失控飞车，追赶霍格沃茨特快！",6200),setTimeout(()=>{Ot(17),ot(localStorage,{book:2,chapter:1,room:2})},900),setTimeout(()=>{tt.classList.add("hidden"),ae("飞车关卡已加载：先调整行李配重，再对准铁路，最后短促给油。",5e3)},1900)}}function B_(n){if(!(n.userData.selected||C.unlocked)){if(C=I0(C,n.userData.controlId),_u(),!C.accepted){for(const e of ke)e.userData.type==="flying-car-control"&&(e.userData.selected=!1,e.material.emissiveIntensity=.4);ce.color.setHex(11617612),zt.rotation.z=.08,ae(`“${n.userData.label}”让引擎过热！飞车翻滚，乱流升至 ${C.turbulence}。`,4300),setTimeout(()=>{xt===17&&(ce.color.setHex(7440544),zt.rotation.z=0)},720);return}if(n.userData.selected=!0,n.material.emissive.setHex(12052223),n.material.emissiveIntensity=1.9,!C.unlocked){const e=["行李后移后车头恢复水平。现在让车头与铁路尽头的红色信号灯重合。","航向已经锁定，但水温仍在红区。用短促油门越过高架桥，不能持续加速。"];We.textContent=`飞车稳定步骤已完成 ${C.progress.length} / 3`,Ye.textContent=e[C.progress.length-1],ae(`${n.userData.label}生效，飞车姿态恢复了一部分。`,3700);return}We.textContent="飞车失控完成：配重、航向与脉冲油门让车辆安全追上列车",Ye.textContent="后移配重压低车尾，铁路红灯校正航向，脉冲油门避免引擎过热。远处的打人柳正在风中挥动枝条。",ot(localStorage,{book:2,chapter:1,room:2}),Yt.textContent="第二部 · 第一章 · 第 2 关完成",Kt.textContent="打人柳下",tt.classList.remove("hidden"),ae("飞车擦过高架桥，稳稳落在城堡草地——打人柳的粗枝突然苏醒！",6200),setTimeout(()=>{Ot(18),ot(localStorage,{book:2,chapter:1,room:3})},900),setTimeout(()=>{tt.classList.add("hidden"),ae("打人柳关卡已加载：等待高扫、俯身避低返，再冲过树根间隙。",5200)},1900)}}function H_(n){if(!(n.userData.selected||C.unlocked)){if(C=L0(C,n.userData.actionId),vu(),!C.accepted){for(const e of ke)e.userData.type==="willow-rhythm"&&(e.userData.selected=!1,e.material.emissiveIntensity=.4);ce.color.setHex(11750211),zt.rotation.z=-.07,ae(`“${n.userData.label}”踩错节拍！粗枝扫中肩膀，擦伤升至 ${C.bruises}。`,4300),setTimeout(()=>{xt===18&&(ce.color.setHex(8228772),zt.rotation.z=0)},720);return}if(n.userData.selected=!0,n.material.emissive.setHex(13037485),n.material.emissiveIntensity=1.9,!C.unlocked){const e=["高枝带着破风声从头顶扫过。枝梢正在贴着落叶低低返程，立刻俯身。","低枝擦过背后，主干短暂失去平衡。发光树根之间的缝隙就是第三拍。"];We.textContent=`打人柳安全节拍已完成 ${C.progress.length} / 3`,Ye.textContent=e[C.progress.length-1],ae(`${n.userData.label}：动作与枝条节拍吻合。`,3700);return}We.textContent="打人柳下完成：高扫、低返、露根三拍全部避开，树洞通道已经打开",Ye.textContent="破风声预告高扫，贴地落叶暴露低返，两次攻击后的收势形成通往树洞的安全窗口。",ot(localStorage,{book:2,chapter:1,room:3}),Yt.textContent="第二部 · 第一章 · 第 3 关完成",Kt.textContent="树洞开启",tt.classList.remove("hidden"),setTimeout(()=>tt.classList.add("hidden"),3e3),ae("你滑入树根下的安全通道。城堡走廊尽头，一行血字正从潮湿石墙上浮现……",6200)}}function G_(n){if(Ss)return;const e=Na(n);e&&(Ss=!0,Yt.textContent=`第一部 · 第一章 · 第 ${n+1} 关`,Kt.textContent=e.name,tt.classList.remove("hidden"),setTimeout(()=>{Ot(n),ot(localStorage,{book:1,chapter:1,room:n+1})},600),setTimeout(()=>{tt.classList.add("hidden"),Ss=!1;const i={1:"第二关已加载：进入对角巷，按清单顺序采购。",2:"第三关已加载：你已进入奥利凡德魔杖店。",3:"第四关已加载：你已抵达霍格沃茨礼堂，分院仪式即将开始。"}[n]??`第 ${n+1} 关已加载。`;ae(i,4200)},1450))}function V_(n){const e=X0({roomIndex:xt,unlocked:n.userData.unlocked});if(!e.advanced){const i=4-C.progress.length;ae(`门还没有认可你：还需完成 ${i} 个正确步骤。`);return}if(n.userData.opening)return;n.userData.opening=!0;const t=Na(e.roomIndex);t&&(We.textContent=`门正在打开：准备进入第 ${e.roomIndex+1} 关“${t.name}”`,ae(`第 ${xt+1} 关完成！正在前往“${t.name}”……`,2600),setTimeout(()=>G_(e.roomIndex),1050))}function xu(){ga.setFromCamera(new He(0,0),zt);const n=ke.filter(s=>s.visible),e=ga.intersectObjects(n,!0)[0]?.object??null;if(Le=n0(e,n),br.classList.toggle("visible",!!Le),!Le)return;const t=Me(Qi?"action.touch":"action.keyboard"),i=Le.userData,r=kt(Je,i.label??i.destination??Le.name);i.type==="shopping-item"?br.textContent=`${t} ${r} · ${i.price} G`:i.type==="door"&&!i.unlocked?br.textContent=`${r} · ${Me("campaign.locked")}`:br.textContent=`${t} ${r}`}function yu(){!wn.isLocked&&!Br||!Le||Ss||(Le.userData.type==="owl-letter"?y_(Le):Le.userData.type==="shopping-item"?M_(Le):Le.userData.type==="wand-wood"?b_(Le):Le.userData.type==="wand-core"?E_(Le):Le.userData.type==="wand-length"?T_(Le):Le.userData.type==="sorting-clue"?w_(Le):Le.userData.type==="stair-route"?A_(Le):Le.userData.type==="portrait-testimony"?C_(Le):Le.userData.type==="patrol-cover"?R_(Le):Le.userData.type==="lullaby-instrument"?D_(Le):Le.userData.type==="flying-delivery"?P_(Le):Le.userData.type==="troll-obstacle"?L_(Le):Le.userData.type==="restricted-book"?I_(Le):Le.userData.type==="mirror-choice"?U_(Le):Le.userData.type==="devils-snare-action"?N_(Le):Le.userData.type==="flying-key-clue"?F_(Le):Le.userData.type==="wizard-chess-move"?O_(Le):Le.userData.type==="stone-chamber-clue"?k_(Le):Le.userData.type==="elf-blockade-trace"?z_(Le):Le.userData.type==="flying-car-control"?B_(Le):Le.userData.type==="willow-rhythm"?H_(Le):Le.userData.type==="door"&&V_(Le))}function Su(){document.documentElement.lang=Je,document.title=Me("document.title"),document.querySelector("#start-brand").textContent=Me("start.brand"),document.querySelector("#start-title").textContent=Me("start.title"),document.querySelector("#start-description").textContent=Me("start.description"),zr.textContent=Me("start.play"),Ns.textContent=Me("start.continue"),As.textContent=Me("start.restart"),document.querySelector("#campaign-button").textContent=Me("start.campaign"),nu.textContent=Me("start.language"),jt.textContent=Me(vn==="playing"?"voice.stop":"voice.play"),jt.disabled=vn==="loading",jt.setAttribute("aria-busy",String(vn==="loading")),jt.setAttribute("aria-pressed",String(vn==="playing")),Ar.textContent=Me(`voice.${vn==="idle"?"ready":vn}`),j0.textContent=Me("voice.subtitle"),document.querySelector(".desktop-help").textContent=Me("help.desktop"),document.querySelector(".mobile-help").textContent=Me("help.mobile"),document.querySelector("#look-zone span").textContent=Me("mobile.look"),document.querySelector("#interact-button").textContent=Me("mobile.interact"),document.querySelector(".campaign-header h2").textContent=Me("campaign.title"),document.querySelector("#campaign-screen").setAttribute("aria-label",Me("campaign.title")),document.querySelector("#campaign-close").setAttribute("aria-label",Me("campaign.close")),document.querySelector("#book-tabs").setAttribute("aria-label",Me("campaign.selectBook")),Yt.textContent=Me("transition.next"),iu?.render()}function Fs(){ma+=1,rr.pause(),rr.currentTime=0,vn="idle",jt.disabled=!1,jt.setAttribute("aria-busy","false"),jt.setAttribute("aria-pressed","false"),jt.textContent=Me("voice.play"),Ar.textContent=Me("voice.ready")}jt.addEventListener("click",async()=>{if(vn==="playing"){Fs();return}if(!v0({playbackState:vn,muted:!1}))return;const n=_0("intro",Je),e=++ma;vn="loading",jt.disabled=!0,jt.setAttribute("aria-busy","true"),Ar.textContent=Me("voice.loading");const t=await x0({audio:rr,source:n?`/Hogwarts-Escape-Room-3D-Play/${n}`:null,muted:!1});if(e!==ma){rr.pause(),rr.currentTime=0;return}jt.disabled=!1,jt.setAttribute("aria-busy","false"),t==="playing"?(vn="playing",jt.textContent=Me("voice.stop"),jt.setAttribute("aria-pressed","true"),Ar.textContent=Me("voice.playing")):(vn="idle",jt.textContent=Me("voice.play"),jt.setAttribute("aria-pressed","false"),Ar.textContent=Me("voice.failed"))});rr.addEventListener("ended",Fs);for(const n of document.querySelectorAll("[data-language]"))n.addEventListener("click",()=>{Fs(),Je=d0(localStorage,n.dataset.language),Me=kr(Je),Su(),Ot(xt),Cs.classList.add("hidden"),Cs.setAttribute("aria-hidden","true")});nu.addEventListener("click",()=>{Cs.classList.remove("hidden"),Cs.removeAttribute("aria-hidden")});Su();zr.addEventListener("click",()=>{Fs(),Qi?(Br=!0,Oa.classList.add("hidden"),q0.classList.add("active")):wn.lock()});(Na(Er)||Number.isInteger(Er)&&Er>=4&&Er<=18)&&(Ns.classList.remove("hidden"),As.classList.remove("hidden"));Ns.addEventListener("click",()=>{Ot(Er),zr.click()});As.addEventListener("click",()=>{s0(localStorage),Ns.classList.add("hidden"),As.classList.add("hidden"),Ot(0),zr.click()});wn.addEventListener("lock",()=>Oa.classList.add("hidden"));wn.addEventListener("unlock",()=>Oa.classList.remove("hidden"));iu=m0({getProgress:()=>Jc(localStorage),getLanguage:()=>Je,getTranslator:()=>Me,onPlay:n=>{const t={"b1-c2-r1":4,"b1-c2-r2":5,"b1-c2-r3":6,"b1-c2-r4":7,"b1-c3-r1":8,"b1-c3-r2":9,"b1-c3-r3":10,"b1-c3-r4":11,"b1-c4-r1":12,"b1-c4-r2":13,"b1-c4-r3":14,"b1-c4-r4":15,"b2-c1-r1":16,"b2-c1-r2":17,"b2-c1-r3":18}[n.id]??0;Ot(t),t>=16?ot(localStorage,{book:2,chapter:1,room:t-15}):t>=12?ot(localStorage,{book:1,chapter:4,room:t-11}):t>=8?ot(localStorage,{book:1,chapter:3,room:t-7}):t>=4&&ot(localStorage,{book:1,chapter:2,room:t-3}),zr.click()}});const er={};addEventListener("keydown",n=>{er[n.code]=!0,n.code==="KeyE"&&yu()});addEventListener("keyup",n=>{er[n.code]=!1});const ni={forward:0,right:0},Rs=document.querySelector("#joystick"),Mu=document.querySelector("#joystick-knob");let Ds=null,_a={x:0,y:0};function bu(n){const e=n.clientX-_a.x,t=n.clientY-_a.y,i=Math.hypot(e,t)||1,r=34,s=Math.min(1,r/i),o=e*s,a=t*s;Mu.style.transform=`translate(${o}px, ${a}px)`,ni.right=o/r,ni.forward=-a/r}Rs.addEventListener("touchstart",n=>{const e=n.changedTouches[0],t=Rs.getBoundingClientRect();Ds=e.identifier,_a={x:t.left+t.width/2,y:t.top+t.height/2},bu(e),n.preventDefault()},{passive:!1});Rs.addEventListener("touchmove",n=>{const e=[...n.changedTouches].find(t=>t.identifier===Ds);e&&bu(e),n.preventDefault()},{passive:!1});Rs.addEventListener("touchend",n=>{[...n.changedTouches].some(e=>e.identifier===Ds)&&(Ds=null,ni.forward=0,ni.right=0,Mu.style.transform="translate(0,0)")},{passive:!1});const Ci=document.querySelector("#look-zone");let Ir=null,Ms={x:0,y:0};Ci.addEventListener("pointerdown",n=>{!Br||Ir!==null||(Ir=n.pointerId,Ms={x:n.clientX,y:n.clientY},Ci.setPointerCapture(n.pointerId),n.preventDefault())});Ci.addEventListener("pointermove",n=>{if(!Br||n.pointerId!==Ir)return;const e=new Sn().setFromQuaternion(zt.quaternion,"YXZ"),t=t0({yaw:e.y,pitch:e.x},{dx:n.clientX-Ms.x,dy:n.clientY-Ms.y});e.y=t.yaw,e.x=t.pitch,zt.quaternion.setFromEuler(e),Ms={x:n.clientX,y:n.clientY},n.preventDefault()});function Eu(n){n.pointerId===Ir&&(Ci.hasPointerCapture(n.pointerId)&&Ci.releasePointerCapture(n.pointerId),Ir=null)}Ci.addEventListener("pointerup",Eu);Ci.addEventListener("pointercancel",Eu);document.querySelector("#interact-button").addEventListener("pointerdown",n=>{n.preventDefault(),yu()});const _c=new oh;function Tu(){requestAnimationFrame(Tu);const n=Math.min(_c.getDelta(),.05),e=_c.elapsedTime;for(const t of St)t.object.visible&&(t.object.position.y=t.baseY+Math.sin(e*1.35+t.phase)*t.bob,t.spin&&(t.object.rotation.y+=n*t.spin));if(wn.isLocked||Br){const t=5*n,i=zt.position.clone();er.KeyW&&wn.moveForward(t),er.KeyS&&wn.moveForward(-t),er.KeyA&&wn.moveRight(-t),er.KeyD&&wn.moveRight(t),ni.forward&&wn.moveForward(t*ni.forward),ni.right&&wn.moveRight(t*ni.right),zt.position.y=1.7,(Math.abs(zt.position.x)>pc.x||Math.abs(zt.position.z)>pc.z)&&zt.position.copy(i),xu()}oi?.userData.opening&&oi.userData.pivot.rotation.y>-Math.PI*.48&&(oi.userData.pivot.rotation.y-=n*1.55),ui.render(yt,zt)}Ot(0);Tu();addEventListener("resize",()=>{zt.aspect=innerWidth/innerHeight,zt.updateProjectionMatrix(),ui.setSize(innerWidth,innerHeight)});
