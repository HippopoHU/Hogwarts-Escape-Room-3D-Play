(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Ya="179",bd=0,Sl=1,yd=2,$c=1,Kc=2,ni=3,_i=0,hn=1,xn=2,pi=0,ps=1,Ml=2,El=3,wl=4,Sd=5,Pi=100,Md=101,Ed=102,wd=103,Td=104,Ad=200,Cd=201,Rd=202,Id=203,Ko=204,Zo=205,Pd=206,Ld=207,Dd=208,Ud=209,Nd=210,Od=211,Fd=212,kd=213,zd=214,Jo=0,Qo=1,ea=2,_s=3,ta=4,na=5,ia=6,sa=7,Zc=0,Bd=1,Hd=2,mi=0,Gd=1,Vd=2,Wd=3,Xd=4,qd=5,Yd=6,jd=7,Jc=300,xs=301,bs=302,ra=303,oa=304,Qr=306,aa=1e3,Di=1001,la=1002,Dn=1003,$d=1004,rr=1005,Xn=1006,lo=1007,Ui=1008,Yn=1009,Qc=1010,eu=1011,Ws=1012,ja=1013,Oi=1014,ii=1015,Ks=1016,$a=1017,Ka=1018,Xs=1020,tu=35902,nu=1021,iu=1022,Ln=1023,qs=1026,Ys=1027,su=1028,Za=1029,ru=1030,Ja=1031,Qa=1033,Or=33776,Fr=33777,kr=33778,zr=33779,ca=35840,ua=35841,da=35842,ha=35843,fa=36196,pa=37492,ma=37496,ga=37808,va=37809,_a=37810,xa=37811,ba=37812,ya=37813,Sa=37814,Ma=37815,Ea=37816,wa=37817,Ta=37818,Aa=37819,Ca=37820,Ra=37821,Br=36492,Ia=36494,Pa=36495,ou=36283,La=36284,Da=36285,Ua=36286,Kd=3200,Zd=3201,au=0,Jd=1,hi="",dn="srgb",ys="srgb-linear",Xr="linear",mt="srgb",Hi=7680,Tl=519,Qd=512,eh=513,th=514,lu=515,nh=516,ih=517,sh=518,rh=519,Na=35044,Al="300 es",qn=2e3,qr=2001;class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],co=Math.PI/180,Oa=180/Math.PI;function gi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function nt(i,e,t){return Math.max(e,Math.min(t,i))}function oh(i,e){return(i%e+e)%e}function uo(i,e,t){return(1-t)*i+t*e}function Wn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zs{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3];const h=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==h||c!==p||u!==g){let m=1-a;const f=l*h+c*p+u*g+d*_,E=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const w=Math.sqrt(b),T=Math.atan2(w,f*E);m=Math.sin(m*T)/w,a=Math.sin(a*T)/w}const v=a*E;if(l=l*m+h*v,c=c*m+p*v,u=u*m+g*v,d=d*m+_*v,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=w,c*=w,u*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*d+l*p-c*h,e[t+1]=l*g+u*h+c*d-a*p,e[t+2]=c*g+u*p+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),d=a(r/2),h=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ho.copy(this).projectOnVector(e),this.sub(ho)}reflect(e){return this.sub(ho.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ho=new P,Cl=new Zs;class Ke{constructor(e,t,n,s,r,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],E=s[1],b=s[4],v=s[7],w=s[2],T=s[5],C=s[8];return r[0]=o*_+a*E+l*w,r[3]=o*m+a*b+l*T,r[6]=o*f+a*v+l*C,r[1]=c*_+u*E+d*w,r[4]=c*m+u*b+d*T,r[7]=c*f+u*v+d*C,r[2]=h*_+p*E+g*w,r[5]=h*m+p*b+g*T,r[8]=h*f+p*v+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,p=c*r-o*l,g=t*d+n*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(fo.makeScale(e,t)),this}rotate(e){return this.premultiply(fo.makeRotation(-e)),this}translate(e,t){return this.premultiply(fo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fo=new Ke;function cu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ah(){const i=Yr("canvas");return i.style.display="block",i}const Rl={};function ms(i){i in Rl||(Rl[i]=!0,console.warn(i))}function lh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Il=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pl=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ch(){const i={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mt&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(s.r=gs(s.r),s.g=gs(s.g),s.b=gs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?Xr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ms("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ms("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ys]:{primaries:e,whitePoint:n,transfer:Xr,toXYZ:Il,fromXYZ:Pl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:Il,fromXYZ:Pl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),i}const ct=ch();function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gi;class uh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gi===void 0&&(Gi=Yr("canvas")),Gi.width=e.width,Gi.height=e.height;const s=Gi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Gi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=si(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(si(t[n]/255)*255):t[n]=si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dh=0;class el{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(po(s[o].image)):r.push(po(s[o]))}else r=po(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function po(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hh=0;const mo=new P;class ln extends zi{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,n=Di,s=Di,r=Xn,o=Ui,a=Ln,l=Yn,c=ln.DEFAULT_ANISOTROPY,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=gi(),this.name="",this.source=new el(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(mo).x}get height(){return this.source.getSize(mo).y}get depth(){return this.source.getSize(mo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case aa:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case la:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case aa:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case la:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Jc;ln.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,n=0,s=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,v=(p+1)/2,w=(f+1)/2,T=(u+h)/4,C=(d+_)/4,L=(g+m)/4;return b>v&&b>w?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=C/n):v>w?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=L/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=C/r,s=L/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-_)/E,this.z=(h-u)/E,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fh extends zi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new ln(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new el(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends fh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class uu extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ph extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Js{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),or.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(e.matrixWorld),this.union(or)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),ar.subVectors(this.max,As),Vi.subVectors(e.a,As),Wi.subVectors(e.b,As),Xi.subVectors(e.c,As),oi.subVectors(Wi,Vi),ai.subVectors(Xi,Wi),Mi.subVectors(Vi,Xi);let t=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Mi.z,Mi.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Mi.z,0,-Mi.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Mi.y,Mi.x,0];return!go(t,Vi,Wi,Xi,ar)||(t=[1,0,0,0,1,0,0,0,1],!go(t,Vi,Wi,Xi,ar))?!1:(lr.crossVectors(oi,ai),t=[lr.x,lr.y,lr.z],go(t,Vi,Wi,Xi,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Kn=[new P,new P,new P,new P,new P,new P,new P,new P],An=new P,or=new Js,Vi=new P,Wi=new P,Xi=new P,oi=new P,ai=new P,Mi=new P,As=new P,ar=new P,lr=new P,Ei=new P;function go(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ei.fromArray(i,r);const a=s.x*Math.abs(Ei.x)+s.y*Math.abs(Ei.y)+s.z*Math.abs(Ei.z),l=e.dot(Ei),c=t.dot(Ei),u=n.dot(Ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const mh=new Js,Cs=new P,vo=new P;class tl{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cs.subVectors(e,this.center);const t=Cs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Cs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cs.copy(e.center).add(vo)),this.expandByPoint(Cs.copy(e.center).sub(vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Zn=new P,_o=new P,cr=new P,li=new P,xo=new P,ur=new P,bo=new P;class du{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){_o.copy(e).add(t).multiplyScalar(.5),cr.copy(t).sub(e).normalize(),li.copy(this.origin).sub(_o);const r=e.distanceTo(t)*.5,o=-this.direction.dot(cr),a=li.dot(this.direction),l=-li.dot(cr),c=li.lengthSq(),u=Math.abs(1-o*o);let d,h,p,g;if(u>0)if(d=o*l-a,h=o*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(_o).addScaledVector(cr,h),p}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const n=Zn.dot(this.direction),s=Zn.dot(Zn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,n,s,r){xo.subVectors(t,e),ur.subVectors(n,e),bo.crossVectors(xo,ur);let o=this.direction.dot(bo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,e);const l=a*this.direction.dot(ur.crossVectors(li,ur));if(l<0)return null;const c=a*this.direction.dot(xo.cross(li));if(c<0||l+c>o)return null;const u=-a*li.dot(bo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,t,n,s,r,o,a,l,c,u,d,h,p,g,_,m){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,d,h,p,g,_,m)}set(e,t,n,s,r,o,a,l,c,u,d,h,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/qi.setFromMatrixColumn(e,0).length(),r=1/qi.setFromMatrixColumn(e,1).length(),o=1/qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,p=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,g=c*u,_=c*d;t[0]=h+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,g=c*u,_=c*d;t[0]=h-_*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gh,e,vh)}lookAt(e,t,n){const s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),ci.crossVectors(n,mn),ci.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),ci.crossVectors(n,mn)),ci.normalize(),dr.crossVectors(mn,ci),s[0]=ci.x,s[4]=dr.x,s[8]=mn.x,s[1]=ci.y,s[5]=dr.y,s[9]=mn.y,s[2]=ci.z,s[6]=dr.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],E=n[3],b=n[7],v=n[11],w=n[15],T=s[0],C=s[4],L=s[8],S=s[12],y=s[1],R=s[5],B=s[9],H=s[13],W=s[2],Z=s[6],K=s[10],ee=s[14],X=s[3],he=s[7],ve=s[11],De=s[15];return r[0]=o*T+a*y+l*W+c*X,r[4]=o*C+a*R+l*Z+c*he,r[8]=o*L+a*B+l*K+c*ve,r[12]=o*S+a*H+l*ee+c*De,r[1]=u*T+d*y+h*W+p*X,r[5]=u*C+d*R+h*Z+p*he,r[9]=u*L+d*B+h*K+p*ve,r[13]=u*S+d*H+h*ee+p*De,r[2]=g*T+_*y+m*W+f*X,r[6]=g*C+_*R+m*Z+f*he,r[10]=g*L+_*B+m*K+f*ve,r[14]=g*S+_*H+m*ee+f*De,r[3]=E*T+b*y+v*W+w*X,r[7]=E*C+b*R+v*Z+w*he,r[11]=E*L+b*B+v*K+w*ve,r[15]=E*S+b*H+v*ee+w*De,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*l*d-s*c*d-r*a*h+n*c*h+s*a*p-n*l*p)+_*(+t*l*p-t*c*h+r*o*h-s*o*p+s*c*u-r*l*u)+m*(+t*c*d-t*a*p-r*o*d+n*o*p+r*a*u-n*c*u)+f*(-s*a*u-t*l*d+t*a*h+s*o*d-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],E=d*m*c-_*h*c+_*l*p-a*m*p-d*l*f+a*h*f,b=g*h*c-u*m*c-g*l*p+o*m*p+u*l*f-o*h*f,v=u*_*c-g*d*c+g*a*p-o*_*p-u*a*f+o*d*f,w=g*d*l-u*_*l-g*a*h+o*_*h+u*a*m-o*d*m,T=t*E+n*b+s*v+r*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=E*C,e[1]=(_*h*r-d*m*r-_*s*p+n*m*p+d*s*f-n*h*f)*C,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*f+n*l*f)*C,e[3]=(d*l*r-a*h*r-d*s*c+n*h*c+a*s*p-n*l*p)*C,e[4]=b*C,e[5]=(u*m*r-g*h*r+g*s*p-t*m*p-u*s*f+t*h*f)*C,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*C,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*p+t*l*p)*C,e[8]=v*C,e[9]=(g*d*r-u*_*r-g*n*p+t*_*p+u*n*f-t*d*f)*C,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*f+t*a*f)*C,e[11]=(u*a*r-o*d*r-u*n*c+t*d*c+o*n*p-t*a*p)*C,e[12]=w*C,e[13]=(u*_*s-g*d*s+g*n*h-t*_*h-u*n*m+t*d*m)*C,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*C,e[15]=(o*d*s-u*a*s+u*n*l-t*d*l-o*n*h+t*a*h)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,p=r*u,g=r*d,_=o*u,m=o*d,f=a*d,E=l*c,b=l*u,v=l*d,w=n.x,T=n.y,C=n.z;return s[0]=(1-(_+f))*w,s[1]=(p+v)*w,s[2]=(g-b)*w,s[3]=0,s[4]=(p-v)*T,s[5]=(1-(h+f))*T,s[6]=(m+E)*T,s[7]=0,s[8]=(g+b)*C,s[9]=(m-E)*C,s[10]=(1-(h+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=qi.set(s[0],s[1],s[2]).length();const o=qi.set(s[4],s[5],s[6]).length(),a=qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Cn.copy(this);const c=1/r,u=1/o,d=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=d,Cn.elements[9]*=d,Cn.elements[10]*=d,t.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=qn,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),p=(n+s)/(n-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===qn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===qr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=qn,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),p=-(n+s)/(n-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===qn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===qr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qi=new P,Cn=new Pt,gh=new P(0,0,0),vh=new P(1,1,1),ci=new P,dr=new P,mn=new P,Ll=new Pt,Dl=new Zs;class wn{constructor(e=0,t=0,n=0,s=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ll.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ll,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dl.setFromEuler(this),this.setFromQuaternion(Dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class nl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _h=0;const Ul=new P,Yi=new Zs,Jn=new Pt,hr=new P,Rs=new P,xh=new P,bh=new Zs,Nl=new P(1,0,0),Ol=new P(0,1,0),Fl=new P(0,0,1),kl={type:"added"},yh={type:"removed"},ji={type:"childadded",child:null},yo={type:"childremoved",child:null};class Zt extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new P,t=new wn,n=new Zs,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Ke}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(Nl,e)}rotateY(e){return this.rotateOnAxis(Ol,e)}rotateZ(e){return this.rotateOnAxis(Fl,e)}translateOnAxis(e,t){return Ul.copy(e).applyQuaternion(this.quaternion),this.position.add(Ul.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nl,e)}translateY(e){return this.translateOnAxis(Ol,e)}translateZ(e){return this.translateOnAxis(Fl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hr.copy(e):hr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Rs,hr,this.up):Jn.lookAt(hr,Rs,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),Yi.setFromRotationMatrix(Jn),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kl),ji.child=e,this.dispatchEvent(ji),ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yh),yo.child=e,this.dispatchEvent(yo),yo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kl),ji.child=e,this.dispatchEvent(ji),ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,e,xh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,bh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Zt.DEFAULT_UP=new P(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new P,Qn=new P,So=new P,ei=new P,$i=new P,Ki=new P,zl=new P,Mo=new P,Eo=new P,wo=new P,To=new _t,Ao=new _t,Co=new _t;class En{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Rn.subVectors(e,t),s.cross(Rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Rn.subVectors(s,t),Qn.subVectors(n,t),So.subVectors(e,t);const o=Rn.dot(Rn),a=Rn.dot(Qn),l=Rn.dot(So),c=Qn.dot(Qn),u=Qn.dot(So),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return To.setScalar(0),Ao.setScalar(0),Co.setScalar(0),To.fromBufferAttribute(e,t),Ao.fromBufferAttribute(e,n),Co.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(To,r.x),o.addScaledVector(Ao,r.y),o.addScaledVector(Co,r.z),o}static isFrontFacing(e,t,n,s){return Rn.subVectors(n,t),Qn.subVectors(e,t),Rn.cross(Qn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Rn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return En.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;$i.subVectors(s,n),Ki.subVectors(r,n),Mo.subVectors(e,n);const l=$i.dot(Mo),c=Ki.dot(Mo);if(l<=0&&c<=0)return t.copy(n);Eo.subVectors(e,s);const u=$i.dot(Eo),d=Ki.dot(Eo);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector($i,o);wo.subVectors(e,r);const p=$i.dot(wo),g=Ki.dot(wo);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ki,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return zl.subVectors(r,s),a=(d-u)/(d-u+(p-g)),t.copy(s).addScaledVector(zl,a);const f=1/(m+_+h);return o=_*f,a=h*f,t.copy(n).addScaledVector($i,o).addScaledVector(Ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},fr={h:0,s:0,l:0};function Ro(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class st{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=oh(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ro(o,r,e+1/3),this.g=Ro(o,r,e),this.b=Ro(o,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=dn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){const n=hu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return ct.workingToColorSpace(nn.copy(this),e),Math.round(nt(nn.r*255,0,255))*65536+Math.round(nt(nn.g*255,0,255))*256+Math.round(nt(nn.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(nn.copy(this),t);const n=nn.r,s=nn.g,r=nn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=dn){ct.workingToColorSpace(nn.copy(this),e);const t=nn.r,n=nn.g,s=nn.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(fr);const n=uo(ui.h,fr.h,t),s=uo(ui.s,fr.s,t),r=uo(ui.l,fr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new st;st.NAMES=hu;let Sh=0;class Es extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=ps,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ko,this.blendDst=Zo,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ko&&(n.blendSrc=this.blendSrc),this.blendDst!==Zo&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Nn extends Es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new P,pr=new Se;let Mh=0;class Un{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Na,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix3(e),this.setXY(t,pr.x,pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Na&&(e.usage=this.usage),e}}class fu extends Un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pu extends Un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xt extends Un{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Eh=0;const Sn=new Pt,Io=new Zt,Zi=new P,gn=new Js,Is=new Js,Kt=new P;class sn extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cu(e)?pu:fu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return Io.lookAt(e),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Is.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(gn.min,Is.min),gn.expandByPoint(Kt),Kt.addVectors(gn.max,Is.max),gn.expandByPoint(Kt)):(gn.expandByPoint(Is.min),gn.expandByPoint(Is.max))}gn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Kt.fromBufferAttribute(a,c),l&&(Zi.fromBufferAttribute(e,c),Kt.add(Zi)),s=Math.max(s,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new P,l[L]=new P;const c=new P,u=new P,d=new P,h=new Se,p=new Se,g=new Se,_=new P,m=new P;function f(L,S,y){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,y),h.fromBufferAttribute(r,L),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),u.sub(c),d.sub(c),p.sub(h),g.sub(h);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(R),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),a[L].add(_),a[S].add(_),a[y].add(_),l[L].add(m),l[S].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,S=E.length;L<S;++L){const y=E[L],R=y.start,B=y.count;for(let H=R,W=R+B;H<W;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const b=new P,v=new P,w=new P,T=new P;function C(L){w.fromBufferAttribute(s,L),T.copy(w);const S=a[L];b.copy(S),b.sub(w.multiplyScalar(w.dot(S))).normalize(),v.crossVectors(T,S);const R=v.dot(l[L])<0?-1:1;o.setXYZW(L,b.x,b.y,b.z,R)}for(let L=0,S=E.length;L<S;++L){const y=E[L],R=y.start,B=y.count;for(let H=R,W=R+B;H<W;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,u=new P,d=new P;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let f=0;f<u;f++)h[g++]=c[p++]}return new Un(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bl=new Pt,wi=new du,mr=new tl,Hl=new P,gr=new P,vr=new P,_r=new P,Po=new P,xr=new P,Gl=new P,br=new P;class J extends Zt{constructor(e=new sn,t=new Nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Po.fromBufferAttribute(d,e),o?xr.addScaledVector(Po,u):xr.addScaledVector(Po.sub(t),u))}t.add(xr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(r),wi.copy(e.ray).recast(e.near),!(mr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(mr,Hl)===null||wi.origin.distanceToSquared(Hl)>(e.far-e.near)**2))&&(Bl.copy(r).invert(),wi.copy(e.ray).applyMatrix4(Bl),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,w=b;v<w;v+=3){const T=a.getX(v),C=a.getX(v+1),L=a.getX(v+2);s=yr(this,f,e,n,c,u,d,T,C,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=a.getX(m),b=a.getX(m+1),v=a.getX(m+2);s=yr(this,o,e,n,c,u,d,E,b,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,w=b;v<w;v+=3){const T=v,C=v+1,L=v+2;s=yr(this,f,e,n,c,u,d,T,C,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=m,b=m+1,v=m+2;s=yr(this,o,e,n,c,u,d,E,b,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function wh(i,e,t,n,s,r,o,a){let l;if(e.side===hn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===_i,a),l===null)return null;br.copy(a),br.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(br);return c<t.near||c>t.far?null:{distance:c,point:br.clone(),object:i}}function yr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,gr),i.getVertexPosition(l,vr),i.getVertexPosition(c,_r);const u=wh(i,e,t,n,gr,vr,_r,Gl);if(u){const d=new P;En.getBarycoord(Gl,gr,vr,_r,d),s&&(u.uv=En.getInterpolatedAttribute(s,a,l,c,d,new Se)),r&&(u.uv1=En.getInterpolatedAttribute(r,a,l,c,d,new Se)),o&&(u.normal=En.getInterpolatedAttribute(o,a,l,c,d,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new P,materialIndex:0};En.getNormal(gr,vr,_r,h.normal),u.face=h,u.barycoord=d}return u}class vt extends sn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(d,2));function g(_,m,f,E,b,v,w,T,C,L,S){const y=v/C,R=w/L,B=v/2,H=w/2,W=T/2,Z=C+1,K=L+1;let ee=0,X=0;const he=new P;for(let ve=0;ve<K;ve++){const De=ve*R-H;for(let Qe=0;Qe<Z;Qe++){const Lt=Qe*y-B;he[_]=Lt*E,he[m]=De*b,he[f]=W,c.push(he.x,he.y,he.z),he[_]=0,he[m]=0,he[f]=T>0?1:-1,u.push(he.x,he.y,he.z),d.push(Qe/C),d.push(1-ve/L),ee+=1}}for(let ve=0;ve<L;ve++)for(let De=0;De<C;De++){const Qe=h+De+Z*ve,Lt=h+De+Z*(ve+1),bt=h+(De+1)+Z*(ve+1),$=h+(De+1)+Z*ve;l.push(Qe,Lt,$),l.push(Lt,bt,$),X+=6}a.addGroup(p,X,S),p+=X,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ss(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function an(i){const e={};for(let t=0;t<i.length;t++){const n=Ss(i[t]);for(const s in n)e[s]=n[s]}return e}function Th(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function mu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const Ah={clone:Ss,merge:an};var Ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends Es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ch,this.fragmentShader=Rh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=Th(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gu extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new P,Vl=new Se,Wl=new Se;class _n extends gu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oa*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,Vl,Wl),t.subVectors(Wl,Vl)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(co*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ji=-90,Qi=1;class Ih extends Zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(Ji,Qi,e,t);s.layers=this.layers,this.add(s);const r=new _n(Ji,Qi,e,t);r.layers=this.layers,this.add(r);const o=new _n(Ji,Qi,e,t);o.layers=this.layers,this.add(o);const a=new _n(Ji,Qi,e,t);a.layers=this.layers,this.add(a);const l=new _n(Ji,Qi,e,t);l.layers=this.layers,this.add(l);const c=new _n(Ji,Qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class vu extends ln{constructor(e=[],t=xs,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ph extends Fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new vu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vt(5,5,5),r=new xi({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:pi});r.uniforms.tEquirect.value=t;const o=new J(s,r),a=t.minFilter;return t.minFilter===Ui&&(t.minFilter=Xn),new Ih(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class Tt extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lh={type:"move"};class Lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lh)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class il{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new st(e),this.density=t}clone(){return new il(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Dh extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Uh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Na,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new P;class jr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new jr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class _u extends Es{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let es;const Ps=new P,ts=new P,ns=new P,is=new Se,Ls=new Se,xu=new Pt,Sr=new P,Ds=new P,Mr=new P,Xl=new Se,Do=new Se,ql=new Se;class Nh extends Zt{constructor(e=new _u){if(super(),this.isSprite=!0,this.type="Sprite",es===void 0){es=new sn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Uh(t,5);es.setIndex([0,1,2,0,2,3]),es.setAttribute("position",new jr(n,3,0,!1)),es.setAttribute("uv",new jr(n,2,3,!1))}this.geometry=es,this.material=e,this.center=new Se(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ts.setFromMatrixScale(this.matrixWorld),xu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ns.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ts.multiplyScalar(-ns.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Er(Sr.set(-.5,-.5,0),ns,o,ts,s,r),Er(Ds.set(.5,-.5,0),ns,o,ts,s,r),Er(Mr.set(.5,.5,0),ns,o,ts,s,r),Xl.set(0,0),Do.set(1,0),ql.set(1,1);let a=e.ray.intersectTriangle(Sr,Ds,Mr,!1,Ps);if(a===null&&(Er(Ds.set(-.5,.5,0),ns,o,ts,s,r),Do.set(0,1),a=e.ray.intersectTriangle(Sr,Mr,Ds,!1,Ps),a===null))return;const l=e.ray.origin.distanceTo(Ps);l<e.near||l>e.far||t.push({distance:l,point:Ps.clone(),uv:En.getInterpolation(Ps,Sr,Ds,Mr,Xl,Do,ql,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Er(i,e,t,n,s,r){is.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ls.x=r*is.x-s*is.y,Ls.y=s*is.x+r*is.y):Ls.copy(is),i.copy(e),i.x+=Ls.x,i.y+=Ls.y,i.applyMatrix4(xu)}const Uo=new P,Oh=new P,Fh=new Ke;class Ri{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Uo.subVectors(n,t).cross(Oh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Uo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Fh.getNormalMatrix(e),s=this.coplanarPoint(Uo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new tl,kh=new Se(.5,.5),wr=new P;class sl{constructor(e=new Ri,t=new Ri,n=new Ri,s=new Ri,r=new Ri,o=new Ri){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],p=r[7],g=r[8],_=r[9],m=r[10],f=r[11],E=r[12],b=r[13],v=r[14],w=r[15];if(s[0].setComponents(c-o,p-u,f-g,w-E).normalize(),s[1].setComponents(c+o,p+u,f+g,w+E).normalize(),s[2].setComponents(c+a,p+d,f+_,w+b).normalize(),s[3].setComponents(c-a,p-d,f-_,w-b).normalize(),n)s[4].setComponents(l,h,m,v).normalize(),s[5].setComponents(c-l,p-h,f-m,w-v).normalize();else if(s[4].setComponents(c-l,p-h,f-m,w-v).normalize(),t===qn)s[5].setComponents(c+l,p+h,f+m,w+v).normalize();else if(t===qr)s[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){Ti.center.set(0,0,0);const t=kh.distanceTo(e.center);return Ti.radius=.7071067811865476+t,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(wr.x=s.normal.x>0?e.max.x:e.min.x,wr.y=s.normal.y>0?e.max.y:e.min.y,wr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zh extends ln{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bu extends ln{constructor(e,t,n=Oi,s,r,o,a=Dn,l=Dn,c,u=qs,d=1){if(u!==qs&&u!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new el(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ni extends sn{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],u=t/2,d=Math.PI/2*e,h=t,p=2*d+h,g=n*2+r,_=s+1,m=new P,f=new P;for(let E=0;E<=g;E++){let b=0,v=0,w=0,T=0;if(E<=n){const S=E/n,y=S*Math.PI/2;v=-u-e*Math.cos(y),w=e*Math.sin(y),T=-e*Math.cos(y),b=S*d}else if(E<=n+r){const S=(E-n)/r;v=-u+S*t,w=e,T=0,b=d+S*h}else{const S=(E-n-r)/n,y=S*Math.PI/2;v=u+e*Math.sin(y),w=e*Math.cos(y),T=e*Math.sin(y),b=d+h+S*d}const C=Math.max(0,Math.min(1,b/p));let L=0;E===0?L=.5/s:E===g&&(L=-.5/s);for(let S=0;S<=s;S++){const y=S/s,R=y*Math.PI*2,B=Math.sin(R),H=Math.cos(R);f.x=-w*H,f.y=v,f.z=w*B,a.push(f.x,f.y,f.z),m.set(-w*H,T,w*B),m.normalize(),l.push(m.x,m.y,m.z),c.push(y+L,C)}if(E>0){const S=(E-1)*_;for(let y=0;y<s;y++){const R=S+y,B=S+y+1,H=E*_+y,W=E*_+y+1;o.push(R,B,H),o.push(B,W,H)}}}this.setIndex(o),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Ie extends sn{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],p=[];let g=0;const _=[],m=n/2;let f=0;E(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new xt(d,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(p,2));function E(){const v=new P,w=new P;let T=0;const C=(t-e)/n;for(let L=0;L<=r;L++){const S=[],y=L/r,R=y*(t-e)+e;for(let B=0;B<=s;B++){const H=B/s,W=H*l+a,Z=Math.sin(W),K=Math.cos(W);w.x=R*Z,w.y=-y*n+m,w.z=R*K,d.push(w.x,w.y,w.z),v.set(Z,C,K).normalize(),h.push(v.x,v.y,v.z),p.push(H,1-y),S.push(g++)}_.push(S)}for(let L=0;L<s;L++)for(let S=0;S<r;S++){const y=_[S][L],R=_[S+1][L],B=_[S+1][L+1],H=_[S][L+1];(e>0||S!==0)&&(u.push(y,R,H),T+=3),(t>0||S!==r-1)&&(u.push(R,B,H),T+=3)}c.addGroup(f,T,0),f+=T}function b(v){const w=g,T=new Se,C=new P;let L=0;const S=v===!0?e:t,y=v===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,m*y,0),h.push(0,y,0),p.push(.5,.5),g++;const R=g;for(let B=0;B<=s;B++){const W=B/s*l+a,Z=Math.cos(W),K=Math.sin(W);C.x=S*K,C.y=m*y,C.z=S*Z,d.push(C.x,C.y,C.z),h.push(0,y,0),T.x=Z*.5+.5,T.y=K*.5*y+.5,p.push(T.x,T.y),g++}for(let B=0;B<s;B++){const H=w+B,W=R+B;v===!0?u.push(W,W+1,H):u.push(W+1,W,H),L+=3}c.addGroup(f,L,v===!0?1:2),f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ie(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class It extends Ie{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new It(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class eo extends sn{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new xt(r,3)),this.setAttribute("normal",new xt(r.slice(),3)),this.setAttribute("uv",new xt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const b=new P,v=new P,w=new P;for(let T=0;T<t.length;T+=3)p(t[T+0],b),p(t[T+1],v),p(t[T+2],w),l(b,v,w,E)}function l(E,b,v,w){const T=w+1,C=[];for(let L=0;L<=T;L++){C[L]=[];const S=E.clone().lerp(v,L/T),y=b.clone().lerp(v,L/T),R=T-L;for(let B=0;B<=R;B++)B===0&&L===T?C[L][B]=S:C[L][B]=S.clone().lerp(y,B/R)}for(let L=0;L<T;L++)for(let S=0;S<2*(T-L)-1;S++){const y=Math.floor(S/2);S%2===0?(h(C[L][y+1]),h(C[L+1][y]),h(C[L][y])):(h(C[L][y+1]),h(C[L+1][y+1]),h(C[L+1][y]))}}function c(E){const b=new P;for(let v=0;v<r.length;v+=3)b.x=r[v+0],b.y=r[v+1],b.z=r[v+2],b.normalize().multiplyScalar(E),r[v+0]=b.x,r[v+1]=b.y,r[v+2]=b.z}function u(){const E=new P;for(let b=0;b<r.length;b+=3){E.x=r[b+0],E.y=r[b+1],E.z=r[b+2];const v=m(E)/2/Math.PI+.5,w=f(E)/Math.PI+.5;o.push(v,1-w)}g(),d()}function d(){for(let E=0;E<o.length;E+=6){const b=o[E+0],v=o[E+2],w=o[E+4],T=Math.max(b,v,w),C=Math.min(b,v,w);T>.9&&C<.1&&(b<.2&&(o[E+0]+=1),v<.2&&(o[E+2]+=1),w<.2&&(o[E+4]+=1))}}function h(E){r.push(E.x,E.y,E.z)}function p(E,b){const v=E*3;b.x=e[v+0],b.y=e[v+1],b.z=e[v+2]}function g(){const E=new P,b=new P,v=new P,w=new P,T=new Se,C=new Se,L=new Se;for(let S=0,y=0;S<r.length;S+=9,y+=6){E.set(r[S+0],r[S+1],r[S+2]),b.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),T.set(o[y+0],o[y+1]),C.set(o[y+2],o[y+3]),L.set(o[y+4],o[y+5]),w.copy(E).add(b).add(v).divideScalar(3);const R=m(w);_(T,y+0,E,R),_(C,y+2,b,R),_(L,y+4,v,R)}}function _(E,b,v,w){w<0&&E.x===1&&(o[b]=E.x-1),v.x===0&&v.z===0&&(o[b]=w/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.vertices,e.indices,e.radius,e.details)}}class rl extends eo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new rl(e.radius,e.detail)}}class ri{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],h=n[s+1]-u,p=(o-u)/h;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Se:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,s=[],r=[],o=[],a=new P,l=new Pt;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(nt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(nt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class yu extends ri{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Se){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*d+this.aX,c=h*d+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Bh extends yu{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ol(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,p*=u,s(o,a,h,p)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Tr=new P,No=new ol,Oo=new ol,Fo=new ol;class Su extends ri{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Tr.subVectors(s[0],s[1]).add(s[0]),c=Tr);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Tr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Tr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),No.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,_,m),Oo.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,_,m),Fo.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(No.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Oo.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Fo.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(No.calc(l),Oo.calc(l),Fo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Yl(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Hh(i,e){const t=1-i;return t*t*e}function Gh(i,e){return 2*(1-i)*i*e}function Vh(i,e){return i*i*e}function Bs(i,e,t,n){return Hh(i,e)+Gh(i,t)+Vh(i,n)}function Wh(i,e){const t=1-i;return t*t*t*e}function Xh(i,e){const t=1-i;return 3*t*t*i*e}function qh(i,e){return 3*(1-i)*i*i*e}function Yh(i,e){return i*i*i*e}function Hs(i,e,t,n,s){return Wh(i,e)+Xh(i,t)+qh(i,n)+Yh(i,s)}class jh extends ri{constructor(e=new Se,t=new Se,n=new Se,s=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Se){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hs(e,s.x,r.x,o.x,a.x),Hs(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $h extends ri{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hs(e,s.x,r.x,o.x,a.x),Hs(e,s.y,r.y,o.y,a.y),Hs(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Kh extends ri{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zh extends ri{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jh extends ri{constructor(e=new Se,t=new Se,n=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Se){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Bs(e,s.x,r.x,o.x),Bs(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mu extends ri{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Bs(e,s.x,r.x,o.x),Bs(e,s.y,r.y,o.y),Bs(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qh extends ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Yl(a,l.x,c.x,u.x,d.x),Yl(a,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Se().fromArray(s))}return this}}var ef=Object.freeze({__proto__:null,ArcCurve:Bh,CatmullRomCurve3:Su,CubicBezierCurve:jh,CubicBezierCurve3:$h,EllipseCurve:yu,LineCurve:Kh,LineCurve3:Zh,QuadraticBezierCurve:Jh,QuadraticBezierCurve3:Mu,SplineCurve:Qh});class Ms extends eo{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ms(e.radius,e.detail)}}class to extends sn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const E=f*h-o;for(let b=0;b<c;b++){const v=b*d-r;g.push(v,-E,0),_.push(0,0,1),m.push(b/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){const b=E+c*f,v=E+c*(f+1),w=E+1+c*(f+1),T=E+1+c*f;p.push(b,v,T),p.push(v,w,T)}this.setIndex(p),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(_,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.widthSegments,e.heightSegments)}}class Le extends sn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new P,h=new P,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const E=[],b=f/n;let v=0;f===0&&o===0?v=.5/t:f===n&&l===Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){const T=w/t;d.x=-e*Math.cos(s+T*r)*Math.sin(o+b*a),d.y=e*Math.cos(o+b*a),d.z=e*Math.sin(s+T*r)*Math.sin(o+b*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(T+v,1-b),E.push(c++)}u.push(E)}for(let f=0;f<n;f++)for(let E=0;E<t;E++){const b=u[f][E+1],v=u[f][E],w=u[f+1][E],T=u[f+1][E+1];(f!==0||o>0)&&p.push(b,v,T),(f!==n-1||l<Math.PI)&&p.push(v,w,T)}this.setIndex(p),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(_,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Le(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class rt extends sn{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new P,d=new P,h=new P;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,E=(s+1)*p+g;o.push(_,m,E),o.push(m,f,E)}this.setIndex(o),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rt(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class al extends sn{constructor(e=1,t=.4,n=64,s=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:s,p:r,q:o},n=Math.floor(n),s=Math.floor(s);const a=[],l=[],c=[],u=[],d=new P,h=new P,p=new P,g=new P,_=new P,m=new P,f=new P;for(let b=0;b<=n;++b){const v=b/n*r*Math.PI*2;E(v,r,o,e,p),E(v+.01,r,o,e,g),m.subVectors(g,p),f.addVectors(g,p),_.crossVectors(m,f),f.crossVectors(_,m),_.normalize(),f.normalize();for(let w=0;w<=s;++w){const T=w/s*Math.PI*2,C=-t*Math.cos(T),L=t*Math.sin(T);d.x=p.x+(C*f.x+L*_.x),d.y=p.y+(C*f.y+L*_.y),d.z=p.z+(C*f.z+L*_.z),l.push(d.x,d.y,d.z),h.subVectors(d,p).normalize(),c.push(h.x,h.y,h.z),u.push(b/n),u.push(w/s)}}for(let b=1;b<=n;b++)for(let v=1;v<=s;v++){const w=(s+1)*(b-1)+(v-1),T=(s+1)*b+(v-1),C=(s+1)*b+v,L=(s+1)*(b-1)+v;a.push(w,T,L),a.push(T,C,L)}this.setIndex(a),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(u,2));function E(b,v,w,T,C){const L=Math.cos(b),S=Math.sin(b),y=w/v*b,R=Math.cos(y);C.x=T*(2+R)*.5*L,C.y=T*(2+R)*S*.5,C.z=T*Math.sin(y)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class ll extends sn{constructor(e=new Mu(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,l=new P,c=new Se;let u=new P;const d=[],h=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new xt(d,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(p,2));function _(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),E(),f()}function m(b){u=e.getPointAt(b/t,u);const v=o.normals[b],w=o.binormals[b];for(let T=0;T<=s;T++){const C=T/s*Math.PI*2,L=Math.sin(C),S=-Math.cos(C);l.x=S*v.x+L*w.x,l.y=S*v.y+L*w.y,l.z=S*v.z+L*w.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,d.push(a.x,a.y,a.z)}}function f(){for(let b=1;b<=t;b++)for(let v=1;v<=s;v++){const w=(s+1)*(b-1)+(v-1),T=(s+1)*b+(v-1),C=(s+1)*b+v,L=(s+1)*(b-1)+v;g.push(w,T,L),g.push(T,C,L)}}function E(){for(let b=0;b<=t;b++)for(let v=0;v<=s;v++)c.x=b/t,c.y=v/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ll(new ef[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Eu extends Es{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=au,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tf extends Es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nf extends Es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cl extends Zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class sf extends cl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ko=new Pt,jl=new P,$l=new P;class wu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sl,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;jl.setFromMatrixPosition(e.matrixWorld),t.position.copy(jl),$l.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($l),t.updateMatrixWorld(),ko.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ko,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ko)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Kl=new Pt,Us=new P,zo=new P;class rf extends wu{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Us.setFromMatrixPosition(e.matrixWorld),n.position.copy(Us),zo.copy(n.position),zo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(zo),n.updateMatrixWorld(),s.makeTranslation(-Us.x,-Us.y,-Us.z),Kl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kl,n.coordinateSystem,n.reversedDepth)}}class jn extends cl{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new rf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Tu extends gu{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class of extends wu{constructor(){super(new Tu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class af extends cl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new of}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lf extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class cf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Zl=new Pt;class uf{constructor(e,t,n=0,s=1/0){this.ray=new du(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new nl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zl),this}intersectObject(e,t=!0,n=[]){return Fa(e,this,n,t),n.sort(Jl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Fa(e[s],this,n,t);return n.sort(Jl),n}}function Jl(i,e){return i.distance-e.distance}function Fa(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Fa(r[o],e,t,!0)}}class df extends zi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Ql(i,e,t,n){const s=hf(n);switch(t){case nu:return i*e;case su:return i*e/s.components*s.byteLength;case Za:return i*e/s.components*s.byteLength;case ru:return i*e*2/s.components*s.byteLength;case Ja:return i*e*2/s.components*s.byteLength;case iu:return i*e*3/s.components*s.byteLength;case Ln:return i*e*4/s.components*s.byteLength;case Qa:return i*e*4/s.components*s.byteLength;case Or:case Fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case kr:case zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ua:case ha:return Math.max(i,16)*Math.max(e,8)/4;case ca:case da:return Math.max(i,8)*Math.max(e,8)/2;case fa:case pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case va:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _a:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case xa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ba:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ya:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case wa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ca:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ra:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Br:case Ia:case Pa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ou:case La:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Da:case Ua:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hf(i){switch(i){case Yn:case Qc:return{byteLength:1,components:1};case Ws:case eu:case Ks:return{byteLength:2,components:1};case $a:case Ka:return{byteLength:2,components:4};case Oi:case ja:case ii:return{byteLength:4,components:1};case tu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ya}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ya);function Au(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ff(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mf=`#ifdef USE_ALPHAHASH
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
#endif`,gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_f=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bf=`#ifdef USE_AOMAP
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
#endif`,yf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sf=`#ifdef USE_BATCHING
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
#endif`,Mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Af=`#ifdef USE_IRIDESCENCE
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
#endif`,Cf=`#ifdef USE_BUMPMAP
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ff=`#define PI 3.141592653589793
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
} // validated`,kf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zf=`vec3 transformedNormal = objectNormal;
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
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qf=`#ifdef USE_ENVMAP
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
#endif`,Yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tp=`#ifdef USE_GRADIENTMAP
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
}`,np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rp=`uniform bool receiveShadow;
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
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dp=`PhysicalMaterial material;
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
#endif`,hp=`struct PhysicalMaterial {
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
}`,fp=`
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
#endif`,pp=`#if defined( RE_IndirectDiffuse )
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
#endif`,mp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mp=`#if defined( USE_POINTS_UV )
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
#endif`,Ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ip=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Op=`#ifdef USE_NORMALMAP
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
#endif`,Fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jp=`float getShadowMask() {
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
}`,Qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,em=`#ifdef USE_SKINNING
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
#endif`,tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nm=`#ifdef USE_SKINNING
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
#endif`,im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,om=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,am=`#ifdef USE_TRANSMISSION
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
#endif`,lm=`#ifdef USE_TRANSMISSION
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pm=`uniform sampler2D t2D;
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`#include <common>
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
}`,bm=`#if DEPTH_PACKING == 3200
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
}`,ym=`#define DISTANCE
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
}`,Sm=`#define DISTANCE
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`uniform float scale;
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Am=`#include <common>
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Rm=`#define LAMBERT
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
}`,Im=`#define LAMBERT
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
}`,Pm=`#define MATCAP
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
}`,Lm=`#define MATCAP
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
}`,Dm=`#define NORMAL
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
}`,Um=`#define NORMAL
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
}`,Nm=`#define PHONG
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
}`,Om=`#define PHONG
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
}`,Fm=`#define STANDARD
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
}`,km=`#define STANDARD
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
}`,zm=`#define TOON
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
}`,Bm=`#define TOON
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
}`,Hm=`uniform float size;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Vm=`#include <common>
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
}`,Wm=`uniform vec3 color;
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
}`,Xm=`uniform float rotation;
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
}`,qm=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:pf,alphahash_pars_fragment:mf,alphamap_fragment:gf,alphamap_pars_fragment:vf,alphatest_fragment:_f,alphatest_pars_fragment:xf,aomap_fragment:bf,aomap_pars_fragment:yf,batching_pars_vertex:Sf,batching_vertex:Mf,begin_vertex:Ef,beginnormal_vertex:wf,bsdfs:Tf,iridescence_fragment:Af,bumpmap_pars_fragment:Cf,clipping_planes_fragment:Rf,clipping_planes_pars_fragment:If,clipping_planes_pars_vertex:Pf,clipping_planes_vertex:Lf,color_fragment:Df,color_pars_fragment:Uf,color_pars_vertex:Nf,color_vertex:Of,common:Ff,cube_uv_reflection_fragment:kf,defaultnormal_vertex:zf,displacementmap_pars_vertex:Bf,displacementmap_vertex:Hf,emissivemap_fragment:Gf,emissivemap_pars_fragment:Vf,colorspace_fragment:Wf,colorspace_pars_fragment:Xf,envmap_fragment:qf,envmap_common_pars_fragment:Yf,envmap_pars_fragment:jf,envmap_pars_vertex:$f,envmap_physical_pars_fragment:op,envmap_vertex:Kf,fog_vertex:Zf,fog_pars_vertex:Jf,fog_fragment:Qf,fog_pars_fragment:ep,gradientmap_pars_fragment:tp,lightmap_pars_fragment:np,lights_lambert_fragment:ip,lights_lambert_pars_fragment:sp,lights_pars_begin:rp,lights_toon_fragment:ap,lights_toon_pars_fragment:lp,lights_phong_fragment:cp,lights_phong_pars_fragment:up,lights_physical_fragment:dp,lights_physical_pars_fragment:hp,lights_fragment_begin:fp,lights_fragment_maps:pp,lights_fragment_end:mp,logdepthbuf_fragment:gp,logdepthbuf_pars_fragment:vp,logdepthbuf_pars_vertex:_p,logdepthbuf_vertex:xp,map_fragment:bp,map_pars_fragment:yp,map_particle_fragment:Sp,map_particle_pars_fragment:Mp,metalnessmap_fragment:Ep,metalnessmap_pars_fragment:wp,morphinstance_vertex:Tp,morphcolor_vertex:Ap,morphnormal_vertex:Cp,morphtarget_pars_vertex:Rp,morphtarget_vertex:Ip,normal_fragment_begin:Pp,normal_fragment_maps:Lp,normal_pars_fragment:Dp,normal_pars_vertex:Up,normal_vertex:Np,normalmap_pars_fragment:Op,clearcoat_normal_fragment_begin:Fp,clearcoat_normal_fragment_maps:kp,clearcoat_pars_fragment:zp,iridescence_pars_fragment:Bp,opaque_fragment:Hp,packing:Gp,premultiplied_alpha_fragment:Vp,project_vertex:Wp,dithering_fragment:Xp,dithering_pars_fragment:qp,roughnessmap_fragment:Yp,roughnessmap_pars_fragment:jp,shadowmap_pars_fragment:$p,shadowmap_pars_vertex:Kp,shadowmap_vertex:Zp,shadowmask_pars_fragment:Jp,skinbase_vertex:Qp,skinning_pars_vertex:em,skinning_vertex:tm,skinnormal_vertex:nm,specularmap_fragment:im,specularmap_pars_fragment:sm,tonemapping_fragment:rm,tonemapping_pars_fragment:om,transmission_fragment:am,transmission_pars_fragment:lm,uv_pars_fragment:cm,uv_pars_vertex:um,uv_vertex:dm,worldpos_vertex:hm,background_vert:fm,background_frag:pm,backgroundCube_vert:mm,backgroundCube_frag:gm,cube_vert:vm,cube_frag:_m,depth_vert:xm,depth_frag:bm,distanceRGBA_vert:ym,distanceRGBA_frag:Sm,equirect_vert:Mm,equirect_frag:Em,linedashed_vert:wm,linedashed_frag:Tm,meshbasic_vert:Am,meshbasic_frag:Cm,meshlambert_vert:Rm,meshlambert_frag:Im,meshmatcap_vert:Pm,meshmatcap_frag:Lm,meshnormal_vert:Dm,meshnormal_frag:Um,meshphong_vert:Nm,meshphong_frag:Om,meshphysical_vert:Fm,meshphysical_frag:km,meshtoon_vert:zm,meshtoon_frag:Bm,points_vert:Hm,points_frag:Gm,shadow_vert:Vm,shadow_frag:Wm,sprite_vert:Xm,sprite_frag:qm},ue={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Vn={basic:{uniforms:an([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:an([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new st(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:an([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:an([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:an([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new st(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:an([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:an([ue.points,ue.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:an([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:an([ue.common,ue.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:an([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:an([ue.sprite,ue.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:an([ue.common,ue.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:an([ue.lights,ue.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Vn.physical={uniforms:an([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Ar={r:0,b:0,g:0},Ai=new wn,Ym=new Pt;function jm(i,e,t,n,s,r,o){const a=new st(0);let l=r===!0?0:1,c,u,d=null,h=0,p=null;function g(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?t:e).get(v)),v}function _(b){let v=!1;const w=g(b);w===null?f(a,l):w&&w.isColor&&(f(w,1),v=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,v){const w=g(v);w&&(w.isCubeTexture||w.mapping===Qr)?(u===void 0&&(u=new J(new vt(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Ss(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ai.copy(v.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ym.makeRotationFromEuler(Ai)),u.material.toneMapped=ct.getTransfer(w.colorSpace)!==mt,(d!==w||h!==w.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=w,h=w.version,p=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new J(new to(2,2),new xi({name:"BackgroundMaterial",uniforms:Ss(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ct.getTransfer(w.colorSpace)!==mt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||h!==w.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=w,h=w.version,p=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,v){b.getRGB(Ar,mu(i)),n.buffers.color.setClear(Ar.r,Ar.g,Ar.b,v,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,v=1){a.set(b),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(a,l)},render:_,addToRenderList:m,dispose:E}}function $m(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(y,R,B,H,W){let Z=!1;const K=d(H,B,R);r!==K&&(r=K,c(r.object)),Z=p(y,H,B,W),Z&&g(y,H,B,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,v(y,R,B,H),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function d(y,R,B){const H=B.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let Z=W[R.id];Z===void 0&&(Z={},W[R.id]=Z);let K=Z[H];return K===void 0&&(K=h(l()),Z[H]=K),K}function h(y){const R=[],B=[],H=[];for(let W=0;W<t;W++)R[W]=0,B[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:H,object:y,attributes:{},index:null}}function p(y,R,B,H){const W=r.attributes,Z=R.attributes;let K=0;const ee=B.getAttributes();for(const X in ee)if(ee[X].location>=0){const ve=W[X];let De=Z[X];if(De===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(De=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(De=y.instanceColor)),ve===void 0||ve.attribute!==De||De&&ve.data!==De.data)return!0;K++}return r.attributesNum!==K||r.index!==H}function g(y,R,B,H){const W={},Z=R.attributes;let K=0;const ee=B.getAttributes();for(const X in ee)if(ee[X].location>=0){let ve=Z[X];ve===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor));const De={};De.attribute=ve,ve&&ve.data&&(De.data=ve.data),W[X]=De,K++}r.attributes=W,r.attributesNum=K,r.index=H}function _(){const y=r.newAttributes;for(let R=0,B=y.length;R<B;R++)y[R]=0}function m(y){f(y,0)}function f(y,R){const B=r.newAttributes,H=r.enabledAttributes,W=r.attributeDivisors;B[y]=1,H[y]===0&&(i.enableVertexAttribArray(y),H[y]=1),W[y]!==R&&(i.vertexAttribDivisor(y,R),W[y]=R)}function E(){const y=r.newAttributes,R=r.enabledAttributes;for(let B=0,H=R.length;B<H;B++)R[B]!==y[B]&&(i.disableVertexAttribArray(B),R[B]=0)}function b(y,R,B,H,W,Z,K){K===!0?i.vertexAttribIPointer(y,R,B,W,Z):i.vertexAttribPointer(y,R,B,H,W,Z)}function v(y,R,B,H){_();const W=H.attributes,Z=B.getAttributes(),K=R.defaultAttributeValues;for(const ee in Z){const X=Z[ee];if(X.location>=0){let he=W[ee];if(he===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&(he=y.instanceColor)),he!==void 0){const ve=he.normalized,De=he.itemSize,Qe=e.get(he);if(Qe===void 0)continue;const Lt=Qe.buffer,bt=Qe.type,$=Qe.bytesPerElement,fe=bt===i.INT||bt===i.UNSIGNED_INT||he.gpuType===ja;if(he.isInterleavedBufferAttribute){const ae=he.data,ze=ae.stride,Be=he.offset;if(ae.isInstancedInterleavedBuffer){for(let Xe=0;Xe<X.locationSize;Xe++)f(X.location+Xe,ae.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Xe=0;Xe<X.locationSize;Xe++)m(X.location+Xe);i.bindBuffer(i.ARRAY_BUFFER,Lt);for(let Xe=0;Xe<X.locationSize;Xe++)b(X.location+Xe,De/X.locationSize,bt,ve,ze*$,(Be+De/X.locationSize*Xe)*$,fe)}else{if(he.isInstancedBufferAttribute){for(let ae=0;ae<X.locationSize;ae++)f(X.location+ae,he.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ae=0;ae<X.locationSize;ae++)m(X.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Lt);for(let ae=0;ae<X.locationSize;ae++)b(X.location+ae,De/X.locationSize,bt,ve,De*$,De/X.locationSize*ae*$,fe)}}else if(K!==void 0){const ve=K[ee];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(X.location,ve);break;case 3:i.vertexAttrib3fv(X.location,ve);break;case 4:i.vertexAttrib4fv(X.location,ve);break;default:i.vertexAttrib1fv(X.location,ve)}}}}E()}function w(){L();for(const y in n){const R=n[y];for(const B in R){const H=R[B];for(const W in H)u(H[W].object),delete H[W];delete R[B]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const R=n[y.id];for(const B in R){const H=R[B];for(const W in H)u(H[W].object),delete H[W];delete R[B]}delete n[y.id]}function C(y){for(const R in n){const B=n[R];if(B[y.id]===void 0)continue;const H=B[y.id];for(const W in H)u(H[W].object),delete H[W];delete B[y.id]}}function L(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Km(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,n,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*h[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Ln&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const L=C===Ks&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Yn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ii&&!L)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:w,maxSamples:T}}function Jm(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Ri,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||s;return s=h,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const E=r?0:n,b=E*4;let v=f.clippingState||null;l.value=v,v=u(g,h,b,p);for(let w=0;w!==b;++w)v[w]=t[w];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,v=p;b!==_;++b,v+=4)o.copy(d[b]).applyMatrix4(E,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Qm(i){let e=new WeakMap;function t(o,a){return a===ra?o.mapping=xs:a===oa&&(o.mapping=bs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ra||a===oa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ph(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const hs=4,ec=[.125,.215,.35,.446,.526,.582],Li=20,Bo=new Tu,tc=new st;let Ho=null,Go=0,Vo=0,Wo=!1;const Ii=(1+Math.sqrt(5))/2,ss=1/Ii,nc=[new P(-Ii,ss,0),new P(Ii,ss,0),new P(-ss,0,Ii),new P(ss,0,Ii),new P(0,Ii,-ss),new P(0,Ii,ss),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],e0=new P;class ic{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=e0}=r;Ho=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),Wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ho,Go,Vo),this._renderer.xr.enabled=Wo,e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xs||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ho=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),Wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:Ks,format:Ln,colorSpace:ys,depthBuffer:!1},s=sc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t0(r)),this._blurMaterial=n0(r,e,t)}return s}_compileMaterial(e){const t=new J(this._lodPlanes[0],e);this._renderer.compile(t,Bo)}_sceneToCubeUV(e,t,n,s,r){const l=new _n(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(tc),d.toneMapping=mi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const _=new Nn({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),m=new J(new vt,_);let f=!1;const E=e.background;E?E.isColor&&(_.color.copy(E),e.background=null,f=!0):(_.color.copy(tc),f=!0);for(let b=0;b<6;b++){const v=b%3;v===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):v===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const w=this._cubeSize;Cr(s,v*w,b>2?w:0,w,w),d.setRenderTarget(s),f&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=h,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===xs||e.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new J(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Cr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Bo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=nc[(s-r-1)%nc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new J(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Li-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Li;m>Li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);const f=[];let E=0;for(let C=0;C<Li;++C){const L=C/_,S=Math.exp(-L*L/2);f.push(S),C===0?E+=S:C<m&&(E+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/E;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-n;const v=this._sizeLods[s],w=3*v*(s>b-hs?s-b+hs:0),T=4*(this._cubeSize-v);Cr(t,w,T,3*v,2*v),l.setRenderTarget(t),l.render(d,Bo)}}function t0(i){const e=[],t=[],n=[];let s=i;const r=i-hs+1+ec.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-hs?l=ec[o-i+hs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,_=3,m=2,f=1,E=new Float32Array(_*g*p),b=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let T=0;T<p;T++){const C=T%3*2/3-1,L=T>2?0:-1,S=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];E.set(S,_*g*T),b.set(h,m*g*T);const y=[T,T,T,T,T,T];v.set(y,f*g*T)}const w=new sn;w.setAttribute("position",new Un(E,_)),w.setAttribute("uv",new Un(b,m)),w.setAttribute("faceIndex",new Un(v,f)),e.push(w),s>hs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sc(i,e,t){const n=new Fi(i,e,t);return n.texture.mapping=Qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function n0(i,e,t){const n=new Float32Array(Li),s=new P(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ul(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function rc(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function oc(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function ul(){return`

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
	`}function i0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ra||l===oa,u=l===xs||l===bs;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new ic(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new ic(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function s0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ms("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function r0(i,e,t,n){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],i.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let b=0,v=E.length;b<v;b+=3){const w=E[b+0],T=E[b+1],C=E[b+2];h.push(w,T,T,C,C,w)}}else if(g!==void 0){const E=g.array;_=g.version;for(let b=0,v=E.length/3-1;b<v;b+=3){const w=b+0,T=b+1,C=b+2;h.push(w,T,T,C,C,w)}}else return;const m=new(cu(h)?pu:fu)(h,1);m.version=_;const f=r.get(d);f&&e.remove(f),r.set(d,m)}function u(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function o0(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,p){i.drawElements(n,p,r,h*o),t.update(p,n,1)}function c(h,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,h*o,g),t.update(p,n,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function d(h,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,h,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E]*_[E];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function a0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function l0(i,e,t){const n=new WeakMap,s=new _t;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let y=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var p=y;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let w=a.attributes.position.count*v,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*T*4*d),L=new uu(C,w,T,d);L.type=ii,L.needsUpdate=!0;const S=v*4;for(let R=0;R<d;R++){const B=f[R],H=E[R],W=b[R],Z=w*T*4*R;for(let K=0;K<B.count;K++){const ee=K*S;g===!0&&(s.fromBufferAttribute(B,K),C[Z+ee+0]=s.x,C[Z+ee+1]=s.y,C[Z+ee+2]=s.z,C[Z+ee+3]=0),_===!0&&(s.fromBufferAttribute(H,K),C[Z+ee+4]=s.x,C[Z+ee+5]=s.y,C[Z+ee+6]=s.z,C[Z+ee+7]=0),m===!0&&(s.fromBufferAttribute(W,K),C[Z+ee+8]=s.x,C[Z+ee+9]=s.y,C[Z+ee+10]=s.z,C[Z+ee+11]=W.itemSize===4?s.w:1)}}h={count:d,texture:L,size:new Se(w,T)},n.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function c0(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Cu=new ln,ac=new bu(1,1),Ru=new uu,Iu=new ph,Pu=new vu,lc=[],cc=[],uc=new Float32Array(16),dc=new Float32Array(9),hc=new Float32Array(4);function ws(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=lc[s];if(r===void 0&&(r=new Float32Array(s),lc[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function no(i,e){let t=cc[e];t===void 0&&(t=new Int32Array(e),cc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function u0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function d0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function h0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function f0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function p0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;hc.set(n),i.uniformMatrix2fv(this.addr,!1,hc),qt(t,n)}}function m0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;dc.set(n),i.uniformMatrix3fv(this.addr,!1,dc),qt(t,n)}}function g0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;uc.set(n),i.uniformMatrix4fv(this.addr,!1,uc),qt(t,n)}}function v0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function _0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function x0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function b0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function y0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function S0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function M0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function E0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function w0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ac.compareFunction=lu,r=ac):r=Cu,t.setTexture2D(e||r,s)}function T0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Iu,s)}function A0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Pu,s)}function C0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ru,s)}function R0(i){switch(i){case 5126:return u0;case 35664:return d0;case 35665:return h0;case 35666:return f0;case 35674:return p0;case 35675:return m0;case 35676:return g0;case 5124:case 35670:return v0;case 35667:case 35671:return _0;case 35668:case 35672:return x0;case 35669:case 35673:return b0;case 5125:return y0;case 36294:return S0;case 36295:return M0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return T0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return C0}}function I0(i,e){i.uniform1fv(this.addr,e)}function P0(i,e){const t=ws(e,this.size,2);i.uniform2fv(this.addr,t)}function L0(i,e){const t=ws(e,this.size,3);i.uniform3fv(this.addr,t)}function D0(i,e){const t=ws(e,this.size,4);i.uniform4fv(this.addr,t)}function U0(i,e){const t=ws(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function N0(i,e){const t=ws(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function O0(i,e){const t=ws(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function F0(i,e){i.uniform1iv(this.addr,e)}function k0(i,e){i.uniform2iv(this.addr,e)}function z0(i,e){i.uniform3iv(this.addr,e)}function B0(i,e){i.uniform4iv(this.addr,e)}function H0(i,e){i.uniform1uiv(this.addr,e)}function G0(i,e){i.uniform2uiv(this.addr,e)}function V0(i,e){i.uniform3uiv(this.addr,e)}function W0(i,e){i.uniform4uiv(this.addr,e)}function X0(i,e,t){const n=this.cache,s=e.length,r=no(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Cu,r[o])}function q0(i,e,t){const n=this.cache,s=e.length,r=no(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Iu,r[o])}function Y0(i,e,t){const n=this.cache,s=e.length,r=no(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Pu,r[o])}function j0(i,e,t){const n=this.cache,s=e.length,r=no(t,s);Xt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ru,r[o])}function $0(i){switch(i){case 5126:return I0;case 35664:return P0;case 35665:return L0;case 35666:return D0;case 35674:return U0;case 35675:return N0;case 35676:return O0;case 5124:case 35670:return F0;case 35667:case 35671:return k0;case 35668:case 35672:return z0;case 35669:case 35673:return B0;case 5125:return H0;case 36294:return G0;case 36295:return V0;case 36296:return W0;case 35678:case 36198:case 36298:case 36306:case 35682:return X0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return j0}}class K0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=R0(t.type)}}class Z0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$0(t.type)}}class J0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Xo=/(\w+)(\])?(\[|\.)?/g;function fc(i,e){i.seq.push(e),i.map[e.id]=e}function Q0(i,e,t){const n=i.name,s=n.length;for(Xo.lastIndex=0;;){const r=Xo.exec(n),o=Xo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){fc(t,c===void 0?new K0(a,i,e):new Z0(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new J0(a),fc(t,d)),t=d}}}class Hr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Q0(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function pc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const eg=37297;let tg=0;function ng(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const mc=new Ke;function ig(i){ct._getMatrix(mc,ct.workingColorSpace,i);const e=`mat3( ${mc.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case Xr:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function gc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+ng(i.getShaderSource(e),a)}else return r}function sg(i,e){const t=ig(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function rg(i,e){let t;switch(e){case Gd:t="Linear";break;case Vd:t="Reinhard";break;case Wd:t="Cineon";break;case Xd:t="ACESFilmic";break;case Yd:t="AgX";break;case jd:t="Neutral";break;case qd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rr=new P;function og(){ct.getLuminanceCoefficients(Rr);const i=Rr.x.toFixed(4),e=Rr.y.toFixed(4),t=Rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ag(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function lg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Fs(i){return i!==""}function vc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _c(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ug=/^[ \t]*#include +<([\w\d./]+)>/gm;function ka(i){return i.replace(ug,hg)}const dg=new Map;function hg(i,e){let t=Je[e];if(t===void 0){const n=dg.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ka(t)}const fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xc(i){return i.replace(fg,pg)}function pg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function mg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$c?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function gg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xs:case bs:e="ENVMAP_TYPE_CUBE";break;case Qr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vg(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===bs&&(e="ENVMAP_MODE_REFRACTION"),e}function _g(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zc:e="ENVMAP_BLENDING_MULTIPLY";break;case Bd:e="ENVMAP_BLENDING_MIX";break;case Hd:e="ENVMAP_BLENDING_ADD";break}return e}function xg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function bg(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=mg(t),c=gg(t),u=vg(t),d=_g(t),h=xg(t),p=ag(t),g=lg(r),_=s.createProgram();let m,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fs).join(`
`),f.length>0&&(f+=`
`)):(m=[bc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),f=[bc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?Je.tonemapping_pars_fragment:"",t.toneMapping!==mi?rg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,sg("linearToOutputTexel",t.outputColorSpace),og(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fs).join(`
`)),o=ka(o),o=vc(o,t),o=_c(o,t),a=ka(a),a=vc(a,t),a=_c(a,t),o=xc(o),a=xc(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Al?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=E+m+o,v=E+f+a,w=pc(s,s.VERTEX_SHADER,b),T=pc(s,s.FRAGMENT_SHADER,v);s.attachShader(_,w),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(R){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(w)||"",W=s.getShaderInfoLog(T)||"",Z=B.trim(),K=H.trim(),ee=W.trim();let X=!0,he=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,T);else{const ve=gc(s,w,"vertex"),De=gc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+Z+`
`+ve+`
`+De)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(K===""||ee==="")&&(he=!1);he&&(R.diagnostics={runnable:X,programLog:Z,vertexShader:{log:K,prefix:m},fragmentShader:{log:ee,prefix:f}})}s.deleteShader(w),s.deleteShader(T),L=new Hr(s,_),S=cg(s,_)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,eg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=T,this}let yg=0;class Sg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Mg(e),t.set(e,n)),n}}class Mg{constructor(e){this.id=yg++,this.code=e,this.usedTimes=0}}function Eg(i,e,t,n,s,r,o){const a=new nl,l=new Sg,c=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,R,B,H){const W=B.fog,Z=H.geometry,K=S.isMeshStandardMaterial?B.environment:null,ee=(S.isMeshStandardMaterial?t:e).get(S.envMap||K),X=ee&&ee.mapping===Qr?ee.image.height:null,he=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ve=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,De=ve!==void 0?ve.length:0;let Qe=0;Z.morphAttributes.position!==void 0&&(Qe=1),Z.morphAttributes.normal!==void 0&&(Qe=2),Z.morphAttributes.color!==void 0&&(Qe=3);let Lt,bt,$,fe;if(he){const ht=Vn[he];Lt=ht.vertexShader,bt=ht.fragmentShader}else Lt=S.vertexShader,bt=S.fragmentShader,l.update(S),$=l.getVertexShaderID(S),fe=l.getFragmentShaderID(S);const ae=i.getRenderTarget(),ze=i.state.buffers.depth.getReversed(),Be=H.isInstancedMesh===!0,Xe=H.isBatchedMesh===!0,zt=!!S.map,at=!!S.matcap,D=!!ee,Et=!!S.aoMap,Oe=!!S.lightMap,ut=!!S.bumpMap,Pe=!!S.normalMap,Dt=!!S.displacementMap,ye=!!S.emissiveMap,et=!!S.metalnessMap,$t=!!S.roughnessMap,Bt=S.anisotropy>0,A=S.clearcoat>0,x=S.dispersion>0,z=S.iridescence>0,j=S.sheen>0,te=S.transmission>0,q=Bt&&!!S.anisotropyMap,Re=A&&!!S.clearcoatMap,oe=A&&!!S.clearcoatNormalMap,Te=A&&!!S.clearcoatRoughnessMap,Ae=z&&!!S.iridescenceMap,se=z&&!!S.iridescenceThicknessMap,ge=j&&!!S.sheenColorMap,Ge=j&&!!S.sheenRoughnessMap,Ce=!!S.specularMap,pe=!!S.specularColorMap,$e=!!S.specularIntensityMap,N=te&&!!S.transmissionMap,re=te&&!!S.thicknessMap,le=!!S.gradientMap,xe=!!S.alphaMap,ne=S.alphaTest>0,Q=!!S.alphaHash,Ee=!!S.extensions;let qe=mi;S.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(qe=i.toneMapping);const wt={shaderID:he,shaderType:S.type,shaderName:S.name,vertexShader:Lt,fragmentShader:bt,defines:S.defines,customVertexShaderID:$,customFragmentShaderID:fe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Xe,batchingColor:Xe&&H._colorsTexture!==null,instancing:Be,instancingColor:Be&&H.instanceColor!==null,instancingMorph:Be&&H.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:ys,alphaToCoverage:!!S.alphaToCoverage,map:zt,matcap:at,envMap:D,envMapMode:D&&ee.mapping,envMapCubeUVHeight:X,aoMap:Et,lightMap:Oe,bumpMap:ut,normalMap:Pe,displacementMap:h&&Dt,emissiveMap:ye,normalMapObjectSpace:Pe&&S.normalMapType===Jd,normalMapTangentSpace:Pe&&S.normalMapType===au,metalnessMap:et,roughnessMap:$t,anisotropy:Bt,anisotropyMap:q,clearcoat:A,clearcoatMap:Re,clearcoatNormalMap:oe,clearcoatRoughnessMap:Te,dispersion:x,iridescence:z,iridescenceMap:Ae,iridescenceThicknessMap:se,sheen:j,sheenColorMap:ge,sheenRoughnessMap:Ge,specularMap:Ce,specularColorMap:pe,specularIntensityMap:$e,transmission:te,transmissionMap:N,thicknessMap:re,gradientMap:le,opaque:S.transparent===!1&&S.blending===ps&&S.alphaToCoverage===!1,alphaMap:xe,alphaTest:ne,alphaHash:Q,combine:S.combine,mapUv:zt&&_(S.map.channel),aoMapUv:Et&&_(S.aoMap.channel),lightMapUv:Oe&&_(S.lightMap.channel),bumpMapUv:ut&&_(S.bumpMap.channel),normalMapUv:Pe&&_(S.normalMap.channel),displacementMapUv:Dt&&_(S.displacementMap.channel),emissiveMapUv:ye&&_(S.emissiveMap.channel),metalnessMapUv:et&&_(S.metalnessMap.channel),roughnessMapUv:$t&&_(S.roughnessMap.channel),anisotropyMapUv:q&&_(S.anisotropyMap.channel),clearcoatMapUv:Re&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&_(S.sheenRoughnessMap.channel),specularMapUv:Ce&&_(S.specularMap.channel),specularColorMapUv:pe&&_(S.specularColorMap.channel),specularIntensityMapUv:$e&&_(S.specularIntensityMap.channel),transmissionMapUv:N&&_(S.transmissionMap.channel),thicknessMapUv:re&&_(S.thicknessMap.channel),alphaMapUv:xe&&_(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Pe||Bt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Z.attributes.uv&&(zt||xe),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ze,skinning:H.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Qe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:qe,decodeVideoTexture:zt&&S.map.isVideoTexture===!0&&ct.getTransfer(S.map.colorSpace)===mt,decodeVideoTextureEmissive:ye&&S.emissiveMap.isVideoTexture===!0&&ct.getTransfer(S.emissiveMap.colorSpace)===mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===xn,flipSided:S.side===hn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ee&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&S.extensions.multiDraw===!0||Xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function f(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)y.push(R),y.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(E(y,S),b(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function E(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function b(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const y=g[S.type];let R;if(y){const B=Vn[y];R=Ah.clone(B.uniforms)}else R=S.uniforms;return R}function w(S,y){let R;for(let B=0,H=u.length;B<H;B++){const W=u[B];if(W.cacheKey===y){R=W,++R.usedTimes;break}}return R===void 0&&(R=new bg(i,y,S,r),u.push(R)),R}function T(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:w,releaseProgram:T,releaseShaderCache:C,programs:u,dispose:L}}function wg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Tg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function yc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,h,p,g,_,m){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function a(d,h,p,g,_,m){const f=o(d,h,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(d,h,p,g,_,m){const f=o(d,h,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||Tg),n.length>1&&n.sort(h||yc),s.length>1&&s.sort(h||yc)}function u(){for(let d=e,h=i.length;d<h;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Ag(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Sc,i.set(n,[o])):s>=r.length?(o=new Sc,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Cg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new st};break;case"SpotLight":t={position:new P,direction:new P,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Rg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ig=0;function Pg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Lg(i){const e=new Cg,t=Rg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new Pt,o=new Pt;function a(c){let u=0,d=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,E=0,b=0,v=0,w=0,T=0,C=0;c.sort(Pg);for(let S=0,y=c.length;S<y;S++){const R=c[S],B=R.color,H=R.intensity,W=R.distance,Z=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=B.r*H,d+=B.g*H,h+=B.b*H;else if(R.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(R.sh.coefficients[K],H);C++}else if(R.isDirectionalLight){const K=e.get(R);if(K.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const ee=R.shadow,X=t.get(R);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=Z,n.directionalShadowMatrix[p]=R.shadow.matrix,E++}n.directional[p]=K,p++}else if(R.isSpotLight){const K=e.get(R);K.position.setFromMatrixPosition(R.matrixWorld),K.color.copy(B).multiplyScalar(H),K.distance=W,K.coneCos=Math.cos(R.angle),K.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),K.decay=R.decay,n.spot[_]=K;const ee=R.shadow;if(R.map&&(n.spotLightMap[w]=R.map,w++,ee.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[_]=ee.matrix,R.castShadow){const X=t.get(R);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=Z,v++}_++}else if(R.isRectAreaLight){const K=e.get(R);K.color.copy(B).multiplyScalar(H),K.halfWidth.set(R.width*.5,0,0),K.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=K,m++}else if(R.isPointLight){const K=e.get(R);if(K.color.copy(R.color).multiplyScalar(R.intensity),K.distance=R.distance,K.decay=R.decay,R.castShadow){const ee=R.shadow,X=t.get(R);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,X.shadowCameraNear=ee.camera.near,X.shadowCameraFar=ee.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=R.shadow.matrix,b++}n.point[g]=K,g++}else if(R.isHemisphereLight){const K=e.get(R);K.skyColor.copy(R.color).multiplyScalar(H),K.groundColor.copy(R.groundColor).multiplyScalar(H),n.hemi[f]=K,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==E||L.numPointShadows!==b||L.numSpotShadows!==v||L.numSpotMaps!==w||L.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=E,L.numPointShadows=b,L.numSpotShadows=v,L.numSpotMaps=w,L.numLightProbes=C,n.version=Ig++)}function l(c,u){let d=0,h=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const b=c[f];if(b.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(b.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Mc(i){const e=new Lg(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Dg(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Mc(i),e.set(s,[a])):r>=o.length?(a=new Mc(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ug=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ng=`uniform sampler2D shadow_pass;
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
}`;function Og(i,e,t){let n=new sl;const s=new Se,r=new Se,o=new _t,a=new tf({depthPacking:Zd}),l=new nf,c={},u=t.maxTextureSize,d={[_i]:hn,[hn]:_i,[xn]:xn},h=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:Ug,fragmentShader:Ng}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new sn;g.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new J(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$c;let f=this.type;this.render=function(T,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),B=i.state;B.setBlending(pi),B.buffers.depth.getReversed()?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=f!==ni&&this.type===ni,W=f===ni&&this.type!==ni;for(let Z=0,K=T.length;Z<K;Z++){const ee=T[Z],X=ee.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const he=X.getFrameExtents();if(s.multiply(he),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/he.x),s.x=r.x*he.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/he.y),s.y=r.y*he.y,X.mapSize.y=r.y)),X.map===null||H===!0||W===!0){const De=this.type!==ni?{minFilter:Dn,magFilter:Dn}:{};X.map!==null&&X.map.dispose(),X.map=new Fi(s.x,s.y,De),X.map.texture.name=ee.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const ve=X.getViewportCount();for(let De=0;De<ve;De++){const Qe=X.getViewport(De);o.set(r.x*Qe.x,r.y*Qe.y,r.x*Qe.z,r.y*Qe.w),B.viewport(o),X.updateMatrices(ee,De),n=X.getFrustum(),v(C,L,X.camera,ee,this.type)}X.isPointLightShadow!==!0&&this.type===ni&&E(X,L),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,R)};function E(T,C){const L=e.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Fi(s.x,s.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,L,h,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,L,p,_,null)}function b(T,C,L,S){let y=null;const R=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)y=R;else if(y=L.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const B=y.uuid,H=C.uuid;let W=c[B];W===void 0&&(W={},c[B]=W);let Z=W[H];Z===void 0&&(Z=y.clone(),W[H]=Z,C.addEventListener("dispose",w)),y=Z}if(y.visible=C.visible,y.wireframe=C.wireframe,S===ni?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:d[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=i.properties.get(y);B.light=L}return y}function v(T,C,L,S,y){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===ni)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const H=e.update(T),W=T.material;if(Array.isArray(W)){const Z=H.groups;for(let K=0,ee=Z.length;K<ee;K++){const X=Z[K],he=W[X.materialIndex];if(he&&he.visible){const ve=b(T,he,S,y);T.onBeforeShadow(i,T,C,L,H,ve,X),i.renderBufferDirect(L,null,H,ve,T,X),T.onAfterShadow(i,T,C,L,H,ve,X)}}}else if(W.visible){const Z=b(T,W,S,y);T.onBeforeShadow(i,T,C,L,H,Z,null),i.renderBufferDirect(L,null,H,Z,T,null),T.onAfterShadow(i,T,C,L,H,Z,null)}}const B=T.children;for(let H=0,W=B.length;H<W;H++)v(B[H],C,L,S,y)}function w(T){T.target.removeEventListener("dispose",w);for(const L in c){const S=c[L],y=T.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const Fg={[Jo]:Qo,[ea]:ia,[ta]:sa,[_s]:na,[Qo]:Jo,[ia]:ea,[sa]:ta,[na]:_s};function kg(i,e){function t(){let N=!1;const re=new _t;let le=null;const xe=new _t(0,0,0,0);return{setMask:function(ne){le!==ne&&!N&&(i.colorMask(ne,ne,ne,ne),le=ne)},setLocked:function(ne){N=ne},setClear:function(ne,Q,Ee,qe,wt){wt===!0&&(ne*=qe,Q*=qe,Ee*=qe),re.set(ne,Q,Ee,qe),xe.equals(re)===!1&&(i.clearColor(ne,Q,Ee,qe),xe.copy(re))},reset:function(){N=!1,le=null,xe.set(-1,0,0,0)}}}function n(){let N=!1,re=!1,le=null,xe=null,ne=null;return{setReversed:function(Q){if(re!==Q){const Ee=e.get("EXT_clip_control");Q?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),re=Q;const qe=ne;ne=null,this.setClear(qe)}},getReversed:function(){return re},setTest:function(Q){Q?ae(i.DEPTH_TEST):ze(i.DEPTH_TEST)},setMask:function(Q){le!==Q&&!N&&(i.depthMask(Q),le=Q)},setFunc:function(Q){if(re&&(Q=Fg[Q]),xe!==Q){switch(Q){case Jo:i.depthFunc(i.NEVER);break;case Qo:i.depthFunc(i.ALWAYS);break;case ea:i.depthFunc(i.LESS);break;case _s:i.depthFunc(i.LEQUAL);break;case ta:i.depthFunc(i.EQUAL);break;case na:i.depthFunc(i.GEQUAL);break;case ia:i.depthFunc(i.GREATER);break;case sa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=Q}},setLocked:function(Q){N=Q},setClear:function(Q){ne!==Q&&(re&&(Q=1-Q),i.clearDepth(Q),ne=Q)},reset:function(){N=!1,le=null,xe=null,ne=null,re=!1}}}function s(){let N=!1,re=null,le=null,xe=null,ne=null,Q=null,Ee=null,qe=null,wt=null;return{setTest:function(ht){N||(ht?ae(i.STENCIL_TEST):ze(i.STENCIL_TEST))},setMask:function(ht){re!==ht&&!N&&(i.stencilMask(ht),re=ht)},setFunc:function(ht,$n,On){(le!==ht||xe!==$n||ne!==On)&&(i.stencilFunc(ht,$n,On),le=ht,xe=$n,ne=On)},setOp:function(ht,$n,On){(Q!==ht||Ee!==$n||qe!==On)&&(i.stencilOp(ht,$n,On),Q=ht,Ee=$n,qe=On)},setLocked:function(ht){N=ht},setClear:function(ht){wt!==ht&&(i.clearStencil(ht),wt=ht)},reset:function(){N=!1,re=null,le=null,xe=null,ne=null,Q=null,Ee=null,qe=null,wt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,p=[],g=null,_=!1,m=null,f=null,E=null,b=null,v=null,w=null,T=null,C=new st(0,0,0),L=0,S=!1,y=null,R=null,B=null,H=null,W=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ee=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(X)[1]),K=ee>=1):X.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),K=ee>=2);let he=null,ve={};const De=i.getParameter(i.SCISSOR_BOX),Qe=i.getParameter(i.VIEWPORT),Lt=new _t().fromArray(De),bt=new _t().fromArray(Qe);function $(N,re,le,xe){const ne=new Uint8Array(4),Q=i.createTexture();i.bindTexture(N,Q),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ee=0;Ee<le;Ee++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(re+Ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return Q}const fe={};fe[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(i.DEPTH_TEST),o.setFunc(_s),ut(!1),Pe(Sl),ae(i.CULL_FACE),Et(pi);function ae(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function ze(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Be(N,re){return d[N]!==re?(i.bindFramebuffer(N,re),d[N]=re,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=re),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=re),!0):!1}function Xe(N,re){let le=p,xe=!1;if(N){le=h.get(re),le===void 0&&(le=[],h.set(re,le));const ne=N.textures;if(le.length!==ne.length||le[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Ee=ne.length;Q<Ee;Q++)le[Q]=i.COLOR_ATTACHMENT0+Q;le.length=ne.length,xe=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,xe=!0);xe&&i.drawBuffers(le)}function zt(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const at={[Pi]:i.FUNC_ADD,[Md]:i.FUNC_SUBTRACT,[Ed]:i.FUNC_REVERSE_SUBTRACT};at[wd]=i.MIN,at[Td]=i.MAX;const D={[Ad]:i.ZERO,[Cd]:i.ONE,[Rd]:i.SRC_COLOR,[Ko]:i.SRC_ALPHA,[Nd]:i.SRC_ALPHA_SATURATE,[Dd]:i.DST_COLOR,[Pd]:i.DST_ALPHA,[Id]:i.ONE_MINUS_SRC_COLOR,[Zo]:i.ONE_MINUS_SRC_ALPHA,[Ud]:i.ONE_MINUS_DST_COLOR,[Ld]:i.ONE_MINUS_DST_ALPHA,[Od]:i.CONSTANT_COLOR,[Fd]:i.ONE_MINUS_CONSTANT_COLOR,[kd]:i.CONSTANT_ALPHA,[zd]:i.ONE_MINUS_CONSTANT_ALPHA};function Et(N,re,le,xe,ne,Q,Ee,qe,wt,ht){if(N===pi){_===!0&&(ze(i.BLEND),_=!1);return}if(_===!1&&(ae(i.BLEND),_=!0),N!==Sd){if(N!==m||ht!==S){if((f!==Pi||v!==Pi)&&(i.blendEquation(i.FUNC_ADD),f=Pi,v=Pi),ht)switch(N){case ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ml:i.blendFunc(i.ONE,i.ONE);break;case El:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ml:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case El:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,b=null,w=null,T=null,C.set(0,0,0),L=0,m=N,S=ht}return}ne=ne||re,Q=Q||le,Ee=Ee||xe,(re!==f||ne!==v)&&(i.blendEquationSeparate(at[re],at[ne]),f=re,v=ne),(le!==E||xe!==b||Q!==w||Ee!==T)&&(i.blendFuncSeparate(D[le],D[xe],D[Q],D[Ee]),E=le,b=xe,w=Q,T=Ee),(qe.equals(C)===!1||wt!==L)&&(i.blendColor(qe.r,qe.g,qe.b,wt),C.copy(qe),L=wt),m=N,S=!1}function Oe(N,re){N.side===xn?ze(i.CULL_FACE):ae(i.CULL_FACE);let le=N.side===hn;re&&(le=!le),ut(le),N.blending===ps&&N.transparent===!1?Et(pi):Et(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const xe=N.stencilWrite;a.setTest(xe),xe&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ye(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):ze(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(N){y!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),y=N)}function Pe(N){N!==bd?(ae(i.CULL_FACE),N!==R&&(N===Sl?i.cullFace(i.BACK):N===yd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ze(i.CULL_FACE),R=N}function Dt(N){N!==B&&(K&&i.lineWidth(N),B=N)}function ye(N,re,le){N?(ae(i.POLYGON_OFFSET_FILL),(H!==re||W!==le)&&(i.polygonOffset(re,le),H=re,W=le)):ze(i.POLYGON_OFFSET_FILL)}function et(N){N?ae(i.SCISSOR_TEST):ze(i.SCISSOR_TEST)}function $t(N){N===void 0&&(N=i.TEXTURE0+Z-1),he!==N&&(i.activeTexture(N),he=N)}function Bt(N,re,le){le===void 0&&(he===null?le=i.TEXTURE0+Z-1:le=he);let xe=ve[le];xe===void 0&&(xe={type:void 0,texture:void 0},ve[le]=xe),(xe.type!==N||xe.texture!==re)&&(he!==le&&(i.activeTexture(le),he=le),i.bindTexture(N,re||fe[N]),xe.type=N,xe.texture=re)}function A(){const N=ve[he];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(N){Lt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Lt.copy(N))}function Ge(N){bt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),bt.copy(N))}function Ce(N,re){let le=c.get(re);le===void 0&&(le=new WeakMap,c.set(re,le));let xe=le.get(N);xe===void 0&&(xe=i.getUniformBlockIndex(re,N.name),le.set(N,xe))}function pe(N,re){const xe=c.get(re).get(N);l.get(re)!==xe&&(i.uniformBlockBinding(re,xe,N.__bindingPointIndex),l.set(re,xe))}function $e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},he=null,ve={},d={},h=new WeakMap,p=[],g=null,_=!1,m=null,f=null,E=null,b=null,v=null,w=null,T=null,C=new st(0,0,0),L=0,S=!1,y=null,R=null,B=null,H=null,W=null,Lt.set(0,0,i.canvas.width,i.canvas.height),bt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ae,disable:ze,bindFramebuffer:Be,drawBuffers:Xe,useProgram:zt,setBlending:Et,setMaterial:Oe,setFlipSided:ut,setCullFace:Pe,setLineWidth:Dt,setPolygonOffset:ye,setScissorTest:et,activeTexture:$t,bindTexture:Bt,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:z,texImage2D:Ae,texImage3D:se,updateUBOMapping:Ce,uniformBlockBinding:pe,texStorage2D:oe,texStorage3D:Te,texSubImage2D:j,texSubImage3D:te,compressedTexSubImage2D:q,compressedTexSubImage3D:Re,scissor:ge,viewport:Ge,reset:$e}}function zg(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return p?new OffscreenCanvas(A,x):Yr("canvas")}function _(A,x,z){let j=1;const te=Bt(A);if((te.width>z||te.height>z)&&(j=z/Math.max(te.width,te.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor(j*te.width),Re=Math.floor(j*te.height);d===void 0&&(d=g(q,Re));const oe=x?g(q,Re):d;return oe.width=q,oe.height=Re,oe.getContext("2d").drawImage(A,0,0,q,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+q+"x"+Re+")."),oe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,x,z,j,te=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=x;if(x===i.RED&&(z===i.FLOAT&&(q=i.R32F),z===i.HALF_FLOAT&&(q=i.R16F),z===i.UNSIGNED_BYTE&&(q=i.R8)),x===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(q=i.R8UI),z===i.UNSIGNED_SHORT&&(q=i.R16UI),z===i.UNSIGNED_INT&&(q=i.R32UI),z===i.BYTE&&(q=i.R8I),z===i.SHORT&&(q=i.R16I),z===i.INT&&(q=i.R32I)),x===i.RG&&(z===i.FLOAT&&(q=i.RG32F),z===i.HALF_FLOAT&&(q=i.RG16F),z===i.UNSIGNED_BYTE&&(q=i.RG8)),x===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(q=i.RG8UI),z===i.UNSIGNED_SHORT&&(q=i.RG16UI),z===i.UNSIGNED_INT&&(q=i.RG32UI),z===i.BYTE&&(q=i.RG8I),z===i.SHORT&&(q=i.RG16I),z===i.INT&&(q=i.RG32I)),x===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(q=i.RGB8UI),z===i.UNSIGNED_SHORT&&(q=i.RGB16UI),z===i.UNSIGNED_INT&&(q=i.RGB32UI),z===i.BYTE&&(q=i.RGB8I),z===i.SHORT&&(q=i.RGB16I),z===i.INT&&(q=i.RGB32I)),x===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),z===i.UNSIGNED_INT&&(q=i.RGBA32UI),z===i.BYTE&&(q=i.RGBA8I),z===i.SHORT&&(q=i.RGBA16I),z===i.INT&&(q=i.RGBA32I)),x===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),x===i.RGBA){const Re=te?Xr:ct.getTransfer(j);z===i.FLOAT&&(q=i.RGBA32F),z===i.HALF_FLOAT&&(q=i.RGBA16F),z===i.UNSIGNED_BYTE&&(q=Re===mt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function v(A,x){let z;return A?x===null||x===Oi||x===Xs?z=i.DEPTH24_STENCIL8:x===ii?z=i.DEPTH32F_STENCIL8:x===Ws&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Oi||x===Xs?z=i.DEPTH_COMPONENT24:x===ii?z=i.DEPTH_COMPONENT32F:x===Ws&&(z=i.DEPTH_COMPONENT16),z}function w(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Dn&&A.minFilter!==Xn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function T(A){const x=A.target;x.removeEventListener("dispose",T),L(x),x.isVideoTexture&&u.delete(x)}function C(A){const x=A.target;x.removeEventListener("dispose",C),y(x)}function L(A){const x=n.get(A);if(x.__webglInit===void 0)return;const z=A.source,j=h.get(z);if(j){const te=j[x.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(A),Object.keys(j).length===0&&h.delete(z)}n.remove(A)}function S(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const z=A.source,j=h.get(z);delete j[x.__cacheKey],o.memory.textures--}function y(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let te=0;te<x.__webglFramebuffer[j].length;te++)i.deleteFramebuffer(x.__webglFramebuffer[j][te]);else i.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)i.deleteFramebuffer(x.__webglFramebuffer[j]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const z=A.textures;for(let j=0,te=z.length;j<te;j++){const q=n.get(z[j]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(z[j])}n.remove(A)}let R=0;function B(){R=0}function H(){const A=R;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),R+=1,A}function W(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function Z(A,x){const z=n.get(A);if(A.isVideoTexture&&et(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(z,A,x);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+x)}function K(A,x){const z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){fe(z,A,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+x)}function ee(A,x){const z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){fe(z,A,x);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+x)}function X(A,x){const z=n.get(A);if(A.version>0&&z.__version!==A.version){ae(z,A,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+x)}const he={[aa]:i.REPEAT,[Di]:i.CLAMP_TO_EDGE,[la]:i.MIRRORED_REPEAT},ve={[Dn]:i.NEAREST,[$d]:i.NEAREST_MIPMAP_NEAREST,[rr]:i.NEAREST_MIPMAP_LINEAR,[Xn]:i.LINEAR,[lo]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},De={[Qd]:i.NEVER,[rh]:i.ALWAYS,[eh]:i.LESS,[lu]:i.LEQUAL,[th]:i.EQUAL,[sh]:i.GEQUAL,[nh]:i.GREATER,[ih]:i.NOTEQUAL};function Qe(A,x){if(x.type===ii&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Xn||x.magFilter===lo||x.magFilter===rr||x.magFilter===Ui||x.minFilter===Xn||x.minFilter===lo||x.minFilter===rr||x.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,he[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,he[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,he[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ve[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ve[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,De[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Dn||x.minFilter!==rr&&x.minFilter!==Ui||x.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Lt(A,x){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",T));const j=x.source;let te=h.get(j);te===void 0&&(te={},h.set(j,te));const q=W(x);if(q!==A.__cacheKey){te[q]===void 0&&(te[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[q].usedTimes++;const Re=te[A.__cacheKey];Re!==void 0&&(te[A.__cacheKey].usedTimes--,Re.usedTimes===0&&S(x)),A.__cacheKey=q,A.__webglTexture=te[q].texture}return z}function bt(A,x,z){return Math.floor(Math.floor(A/z)/x)}function $(A,x,z,j){const q=A.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,z,j,x.data);else{q.sort((se,ge)=>se.start-ge.start);let Re=0;for(let se=1;se<q.length;se++){const ge=q[Re],Ge=q[se],Ce=ge.start+ge.count,pe=bt(Ge.start,x.width,4),$e=bt(ge.start,x.width,4);Ge.start<=Ce+1&&pe===$e&&bt(Ge.start+Ge.count-1,x.width,4)===pe?ge.count=Math.max(ge.count,Ge.start+Ge.count-ge.start):(++Re,q[Re]=Ge)}q.length=Re+1;const oe=i.getParameter(i.UNPACK_ROW_LENGTH),Te=i.getParameter(i.UNPACK_SKIP_PIXELS),Ae=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let se=0,ge=q.length;se<ge;se++){const Ge=q[se],Ce=Math.floor(Ge.start/4),pe=Math.ceil(Ge.count/4),$e=Ce%x.width,N=Math.floor(Ce/x.width),re=pe,le=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,$e),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,$e,N,re,le,z,j,x.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,oe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ae)}}function fe(A,x,z){let j=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=i.TEXTURE_3D);const te=Lt(A,x),q=x.source;t.bindTexture(j,A.__webglTexture,i.TEXTURE0+z);const Re=n.get(q);if(q.version!==Re.__version||te===!0){t.activeTexture(i.TEXTURE0+z);const oe=ct.getPrimaries(ct.workingColorSpace),Te=x.colorSpace===hi?null:ct.getPrimaries(x.colorSpace),Ae=x.colorSpace===hi||oe===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let se=_(x.image,!1,s.maxTextureSize);se=$t(x,se);const ge=r.convert(x.format,x.colorSpace),Ge=r.convert(x.type);let Ce=b(x.internalFormat,ge,Ge,x.colorSpace,x.isVideoTexture);Qe(j,x);let pe;const $e=x.mipmaps,N=x.isVideoTexture!==!0,re=Re.__version===void 0||te===!0,le=q.dataReady,xe=w(x,se);if(x.isDepthTexture)Ce=v(x.format===Ys,x.type),re&&(N?t.texStorage2D(i.TEXTURE_2D,1,Ce,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Ce,se.width,se.height,0,ge,Ge,null));else if(x.isDataTexture)if($e.length>0){N&&re&&t.texStorage2D(i.TEXTURE_2D,xe,Ce,$e[0].width,$e[0].height);for(let ne=0,Q=$e.length;ne<Q;ne++)pe=$e[ne],N?le&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,pe.width,pe.height,ge,Ge,pe.data):t.texImage2D(i.TEXTURE_2D,ne,Ce,pe.width,pe.height,0,ge,Ge,pe.data);x.generateMipmaps=!1}else N?(re&&t.texStorage2D(i.TEXTURE_2D,xe,Ce,se.width,se.height),le&&$(x,se,ge,Ge)):t.texImage2D(i.TEXTURE_2D,0,Ce,se.width,se.height,0,ge,Ge,se.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){N&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Ce,$e[0].width,$e[0].height,se.depth);for(let ne=0,Q=$e.length;ne<Q;ne++)if(pe=$e[ne],x.format!==Ln)if(ge!==null)if(N){if(le)if(x.layerUpdates.size>0){const Ee=Ql(pe.width,pe.height,x.format,x.type);for(const qe of x.layerUpdates){const wt=pe.data.subarray(qe*Ee/pe.data.BYTES_PER_ELEMENT,(qe+1)*Ee/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,qe,pe.width,pe.height,1,ge,wt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,se.depth,ge,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Ce,pe.width,pe.height,se.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?le&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,se.depth,ge,Ge,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Ce,pe.width,pe.height,se.depth,0,ge,Ge,pe.data)}else{N&&re&&t.texStorage2D(i.TEXTURE_2D,xe,Ce,$e[0].width,$e[0].height);for(let ne=0,Q=$e.length;ne<Q;ne++)pe=$e[ne],x.format!==Ln?ge!==null?N?le&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,pe.width,pe.height,ge,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Ce,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?le&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,pe.width,pe.height,ge,Ge,pe.data):t.texImage2D(i.TEXTURE_2D,ne,Ce,pe.width,pe.height,0,ge,Ge,pe.data)}else if(x.isDataArrayTexture)if(N){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Ce,se.width,se.height,se.depth),le)if(x.layerUpdates.size>0){const ne=Ql(se.width,se.height,x.format,x.type);for(const Q of x.layerUpdates){const Ee=se.data.subarray(Q*ne/se.data.BYTES_PER_ELEMENT,(Q+1)*ne/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,se.width,se.height,1,ge,Ge,Ee)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ge,Ge,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,se.width,se.height,se.depth,0,ge,Ge,se.data);else if(x.isData3DTexture)N?(re&&t.texStorage3D(i.TEXTURE_3D,xe,Ce,se.width,se.height,se.depth),le&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ge,Ge,se.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,se.width,se.height,se.depth,0,ge,Ge,se.data);else if(x.isFramebufferTexture){if(re)if(N)t.texStorage2D(i.TEXTURE_2D,xe,Ce,se.width,se.height);else{let ne=se.width,Q=se.height;for(let Ee=0;Ee<xe;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,Ce,ne,Q,0,ge,Ge,null),ne>>=1,Q>>=1}}else if($e.length>0){if(N&&re){const ne=Bt($e[0]);t.texStorage2D(i.TEXTURE_2D,xe,Ce,ne.width,ne.height)}for(let ne=0,Q=$e.length;ne<Q;ne++)pe=$e[ne],N?le&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ge,Ge,pe):t.texImage2D(i.TEXTURE_2D,ne,Ce,ge,Ge,pe);x.generateMipmaps=!1}else if(N){if(re){const ne=Bt(se);t.texStorage2D(i.TEXTURE_2D,xe,Ce,ne.width,ne.height)}le&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Ge,se)}else t.texImage2D(i.TEXTURE_2D,0,Ce,ge,Ge,se);m(x)&&f(j),Re.__version=q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ae(A,x,z){if(x.image.length!==6)return;const j=Lt(A,x),te=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);const q=n.get(te);if(te.version!==q.__version||j===!0){t.activeTexture(i.TEXTURE0+z);const Re=ct.getPrimaries(ct.workingColorSpace),oe=x.colorSpace===hi?null:ct.getPrimaries(x.colorSpace),Te=x.colorSpace===hi||Re===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ae=x.isCompressedTexture||x.image[0].isCompressedTexture,se=x.image[0]&&x.image[0].isDataTexture,ge=[];for(let Q=0;Q<6;Q++)!Ae&&!se?ge[Q]=_(x.image[Q],!0,s.maxCubemapSize):ge[Q]=se?x.image[Q].image:x.image[Q],ge[Q]=$t(x,ge[Q]);const Ge=ge[0],Ce=r.convert(x.format,x.colorSpace),pe=r.convert(x.type),$e=b(x.internalFormat,Ce,pe,x.colorSpace),N=x.isVideoTexture!==!0,re=q.__version===void 0||j===!0,le=te.dataReady;let xe=w(x,Ge);Qe(i.TEXTURE_CUBE_MAP,x);let ne;if(Ae){N&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,$e,Ge.width,Ge.height);for(let Q=0;Q<6;Q++){ne=ge[Q].mipmaps;for(let Ee=0;Ee<ne.length;Ee++){const qe=ne[Ee];x.format!==Ln?Ce!==null?N?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,0,0,qe.width,qe.height,Ce,qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,$e,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,0,0,qe.width,qe.height,Ce,pe,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,$e,qe.width,qe.height,0,Ce,pe,qe.data)}}}else{if(ne=x.mipmaps,N&&re){ne.length>0&&xe++;const Q=Bt(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,$e,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(se){N?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ge[Q].width,ge[Q].height,Ce,pe,ge[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$e,ge[Q].width,ge[Q].height,0,Ce,pe,ge[Q].data);for(let Ee=0;Ee<ne.length;Ee++){const wt=ne[Ee].image[Q].image;N?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,0,0,wt.width,wt.height,Ce,pe,wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,$e,wt.width,wt.height,0,Ce,pe,wt.data)}}else{N?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ce,pe,ge[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$e,Ce,pe,ge[Q]);for(let Ee=0;Ee<ne.length;Ee++){const qe=ne[Ee];N?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,0,0,Ce,pe,qe.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,$e,Ce,pe,qe.image[Q])}}}m(x)&&f(i.TEXTURE_CUBE_MAP),q.__version=te.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ze(A,x,z,j,te,q){const Re=r.convert(z.format,z.colorSpace),oe=r.convert(z.type),Te=b(z.internalFormat,Re,oe,z.colorSpace),Ae=n.get(x),se=n.get(z);if(se.__renderTarget=x,!Ae.__hasExternalTextures){const ge=Math.max(1,x.width>>q),Ge=Math.max(1,x.height>>q);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,q,Te,ge,Ge,x.depth,0,Re,oe,null):t.texImage2D(te,q,Te,ge,Ge,0,Re,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ye(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,te,se.__webglTexture,0,Dt(x)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,te,se.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(A,x,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const j=x.depthTexture,te=j&&j.isDepthTexture?j.type:null,q=v(x.stencilBuffer,te),Re=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=Dt(x);ye(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,q,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,A)}else{const j=x.textures;for(let te=0;te<j.length;te++){const q=j[te],Re=r.convert(q.format,q.colorSpace),oe=r.convert(q.type),Te=b(q.internalFormat,Re,oe,q.colorSpace),Ae=Dt(x);z&&ye(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,Te,x.width,x.height):ye(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,Te,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Te,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Xe(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(x.depthTexture);j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z(x.depthTexture,0);const te=j.__webglTexture,q=Dt(x);if(x.depthTexture.format===qs)ye(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(x.depthTexture.format===Ys)ye(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function zt(A){const x=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const te=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",te)};j.addEventListener("dispose",te),x.__depthDisposeCallback=te}x.__boundDepthTexture=j}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const j=A.texture.mipmaps;j&&j.length>0?Xe(x.__webglFramebuffer[0],A):Xe(x.__webglFramebuffer,A)}else if(z){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=i.createRenderbuffer(),Be(x.__webglDepthbuffer[j],A,!1);else{const te=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,q)}}else{const j=A.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Be(x.__webglDepthbuffer,A,!1);else{const te=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function at(A,x,z){const j=n.get(A);x!==void 0&&ze(j.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&zt(A)}function D(A){const x=A.texture,z=n.get(A),j=n.get(x);A.addEventListener("dispose",C);const te=A.textures,q=A.isWebGLCubeRenderTarget===!0,Re=te.length>1;if(Re||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=x.version,o.memory.textures++),q){z.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[oe]=[];for(let Te=0;Te<x.mipmaps.length;Te++)z.__webglFramebuffer[oe][Te]=i.createFramebuffer()}else z.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let oe=0;oe<x.mipmaps.length;oe++)z.__webglFramebuffer[oe]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Re)for(let oe=0,Te=te.length;oe<Te;oe++){const Ae=n.get(te[oe]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&ye(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let oe=0;oe<te.length;oe++){const Te=te[oe];z.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[oe]);const Ae=r.convert(Te.format,Te.colorSpace),se=r.convert(Te.type),ge=b(Te.internalFormat,Ae,se,Te.colorSpace,A.isXRRenderTarget===!0),Ge=Dt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,ge,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,z.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,x);for(let oe=0;oe<6;oe++)if(x.mipmaps&&x.mipmaps.length>0)for(let Te=0;Te<x.mipmaps.length;Te++)ze(z.__webglFramebuffer[oe][Te],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Te);else ze(z.__webglFramebuffer[oe],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(x)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let oe=0,Te=te.length;oe<Te;oe++){const Ae=te[oe],se=n.get(Ae);let ge=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ge=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,se.__webglTexture),Qe(ge,Ae),ze(z.__webglFramebuffer,A,Ae,i.COLOR_ATTACHMENT0+oe,ge,0),m(Ae)&&f(ge)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(oe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,j.__webglTexture),Qe(oe,x),x.mipmaps&&x.mipmaps.length>0)for(let Te=0;Te<x.mipmaps.length;Te++)ze(z.__webglFramebuffer[Te],A,x,i.COLOR_ATTACHMENT0,oe,Te);else ze(z.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,oe,0);m(x)&&f(oe),t.unbindTexture()}A.depthBuffer&&zt(A)}function Et(A){const x=A.textures;for(let z=0,j=x.length;z<j;z++){const te=x[z];if(m(te)){const q=E(A),Re=n.get(te).__webglTexture;t.bindTexture(q,Re),f(q),t.unbindTexture()}}}const Oe=[],ut=[];function Pe(A){if(A.samples>0){if(ye(A)===!1){const x=A.textures,z=A.width,j=A.height;let te=i.COLOR_BUFFER_BIT;const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(A),oe=x.length>1;if(oe)for(let Ae=0;Ae<x.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const Te=A.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ae=0;Ae<x.length;Ae++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Ae]);const se=n.get(x[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,z,j,0,0,z,j,te,i.NEAREST),l===!0&&(Oe.length=0,ut.length=0,Oe.push(i.COLOR_ATTACHMENT0+Ae),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Oe.push(q),ut.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ut)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let Ae=0;Ae<x.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Ae]);const se=n.get(x[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Dt(A){return Math.min(s.maxSamples,A.samples)}function ye(A){const x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function et(A){const x=o.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function $t(A,x){const z=A.colorSpace,j=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==ys&&z!==hi&&(ct.getTransfer(z)===mt?(j!==Ln||te!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),x}function Bt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=Z,this.setTexture2DArray=K,this.setTexture3D=ee,this.setTextureCube=X,this.rebindTextures=at,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=ye}function Bg(i,e){function t(n,s=hi){let r;const o=ct.getTransfer(s);if(n===Yn)return i.UNSIGNED_BYTE;if(n===$a)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qc)return i.BYTE;if(n===eu)return i.SHORT;if(n===Ws)return i.UNSIGNED_SHORT;if(n===ja)return i.INT;if(n===Oi)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===Ks)return i.HALF_FLOAT;if(n===nu)return i.ALPHA;if(n===iu)return i.RGB;if(n===Ln)return i.RGBA;if(n===qs)return i.DEPTH_COMPONENT;if(n===Ys)return i.DEPTH_STENCIL;if(n===su)return i.RED;if(n===Za)return i.RED_INTEGER;if(n===ru)return i.RG;if(n===Ja)return i.RG_INTEGER;if(n===Qa)return i.RGBA_INTEGER;if(n===Or||n===Fr||n===kr||n===zr)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ca||n===ua||n===da||n===ha)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ca)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fa||n===pa||n===ma)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fa||n===pa)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ma)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ga||n===va||n===_a||n===xa||n===ba||n===ya||n===Sa||n===Ma||n===Ea||n===wa||n===Ta||n===Aa||n===Ca||n===Ra)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ga)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===va)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_a)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xa)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ba)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ya)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sa)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ma)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ea)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wa)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ta)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Aa)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ca)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ra)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Br||n===Ia||n===Pa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Br)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ia)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ou||n===La||n===Da||n===Ua)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Br)return r.COMPRESSED_RED_RGTC1_EXT;if(n===La)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Da)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ua)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Lu extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const Hg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gg=`
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

}`;class Vg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Lu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new xi({vertexShader:Hg,fragmentShader:Gg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new J(new to(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wg extends zi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null;const _=new Vg,m={},f=t.getContextAttributes();let E=null,b=null;const v=[],w=[],T=new Se;let C=null;const L=new _n;L.viewport=new _t;const S=new _n;S.viewport=new _t;const y=[L,S],R=new lf;let B=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let fe=v[$];return fe===void 0&&(fe=new Lo,v[$]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function($){let fe=v[$];return fe===void 0&&(fe=new Lo,v[$]=fe),fe.getGripSpace()},this.getHand=function($){let fe=v[$];return fe===void 0&&(fe=new Lo,v[$]=fe),fe.getHandSpace()};function W($){const fe=w.indexOf($.inputSource);if(fe===-1)return;const ae=v[fe];ae!==void 0&&(ae.update($.inputSource,$.frame,c||o),ae.dispatchEvent({type:$.type,data:$.inputSource}))}function Z(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",K);for(let $=0;$<v.length;$++){const fe=w[$];fe!==null&&(w[$]=null,v[$].disconnect(fe))}B=null,H=null,_.reset();for(const $ in m)delete m[$];e.setRenderTarget(E),p=null,h=null,d=null,s=null,b=null,bt.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",K),f.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(T),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(s,t)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,ze=null,Be=null;f.depth&&(Be=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=f.stencil?Ys:qs,ze=f.stencil?Xs:Oi);const Xe={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:r};h=d.createProjectionLayer(Xe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new Fi(h.textureWidth,h.textureHeight,{format:Ln,type:Yn,depthTexture:new bu(h.textureWidth,h.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ae={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Fi(p.framebufferWidth,p.framebufferHeight,{format:Ln,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),bt.setContext(s),bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K($){for(let fe=0;fe<$.removed.length;fe++){const ae=$.removed[fe],ze=w.indexOf(ae);ze>=0&&(w[ze]=null,v[ze].disconnect(ae))}for(let fe=0;fe<$.added.length;fe++){const ae=$.added[fe];let ze=w.indexOf(ae);if(ze===-1){for(let Xe=0;Xe<v.length;Xe++)if(Xe>=w.length){w.push(ae),ze=Xe;break}else if(w[Xe]===null){w[Xe]=ae,ze=Xe;break}if(ze===-1)break}const Be=v[ze];Be&&Be.connect(ae)}}const ee=new P,X=new P;function he($,fe,ae){ee.setFromMatrixPosition(fe.matrixWorld),X.setFromMatrixPosition(ae.matrixWorld);const ze=ee.distanceTo(X),Be=fe.projectionMatrix.elements,Xe=ae.projectionMatrix.elements,zt=Be[14]/(Be[10]-1),at=Be[14]/(Be[10]+1),D=(Be[9]+1)/Be[5],Et=(Be[9]-1)/Be[5],Oe=(Be[8]-1)/Be[0],ut=(Xe[8]+1)/Xe[0],Pe=zt*Oe,Dt=zt*ut,ye=ze/(-Oe+ut),et=ye*-Oe;if(fe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(et),$.translateZ(ye),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Be[10]===-1)$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const $t=zt+ye,Bt=at+ye,A=Pe-et,x=Dt+(ze-et),z=D*at/Bt*$t,j=Et*at/Bt*$t;$.projectionMatrix.makePerspective(A,x,z,j,$t,Bt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ve($,fe){fe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(fe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let fe=$.near,ae=$.far;_.texture!==null&&(_.depthNear>0&&(fe=_.depthNear),_.depthFar>0&&(ae=_.depthFar)),R.near=S.near=L.near=fe,R.far=S.far=L.far=ae,(B!==R.near||H!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),B=R.near,H=R.far),R.layers.mask=$.layers.mask|6,L.layers.mask=R.layers.mask&3,S.layers.mask=R.layers.mask&5;const ze=$.parent,Be=R.cameras;ve(R,ze);for(let Xe=0;Xe<Be.length;Xe++)ve(Be[Xe],ze);Be.length===2?he(R,L,S):R.projectionMatrix.copy(L.projectionMatrix),De($,R,ze)};function De($,fe,ae){ae===null?$.matrix.copy(fe.matrixWorld):($.matrix.copy(ae.matrixWorld),$.matrix.invert(),$.matrix.multiply(fe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Oa*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(R)},this.getCameraTexture=function($){return m[$]};let Qe=null;function Lt($,fe){if(u=fe.getViewerPose(c||o),g=fe,u!==null){const ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let ze=!1;ae.length!==R.cameras.length&&(R.cameras.length=0,ze=!0);for(let at=0;at<ae.length;at++){const D=ae[at];let Et=null;if(p!==null)Et=p.getViewport(D);else{const ut=d.getViewSubImage(h,D);Et=ut.viewport,at===0&&(e.setRenderTargetTextures(b,ut.colorTexture,ut.depthStencilTexture),e.setRenderTarget(b))}let Oe=y[at];Oe===void 0&&(Oe=new _n,Oe.layers.enable(at),Oe.viewport=new _t,y[at]=Oe),Oe.matrix.fromArray(D.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(D.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Et.x,Et.y,Et.width,Et.height),at===0&&(R.matrix.copy(Oe.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ze===!0&&R.cameras.push(Oe)}const Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const at=d.getDepthInformation(ae[0]);at&&at.isValid&&at.texture&&_.init(at,s.renderState)}if(Be&&Be.includes("camera-access")&&(e.state.unbindTexture(),d))for(let at=0;at<ae.length;at++){const D=ae[at].camera;if(D){let Et=m[D];Et||(Et=new Lu,m[D]=Et);const Oe=d.getCameraImage(D);Et.sourceTexture=Oe}}}for(let ae=0;ae<v.length;ae++){const ze=w[ae],Be=v[ae];ze!==null&&Be!==void 0&&Be.update(ze,fe,c||o)}Qe&&Qe($,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),g=null}const bt=new Au;bt.setAnimationLoop(Lt),this.setAnimationLoop=function($){Qe=$},this.dispose=function(){}}}const Ci=new wn,Xg=new Pt;function qg(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,mu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,b,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,E,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===hn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===hn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=e.get(f),b=E.envMap,v=E.envMapRotation;b&&(m.envMap.value=b,Ci.copy(v),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),m.envMapRotation.value.setFromMatrix4(Xg.makeRotationFromEuler(Ci)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===hn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Yg(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){const v=b.program;n.uniformBlockBinding(E,v)}function c(E,b){let v=s[E.id];v===void 0&&(g(E),v=u(E),s[E.id]=v,E.addEventListener("dispose",m));const w=b.program;n.updateUBOMapping(E,w);const T=e.render.frame;r[E.id]!==T&&(h(E),r[E.id]=T)}function u(E){const b=d();E.__bindingPointIndex=b;const v=i.createBuffer(),w=E.__size,T=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,w,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,v),v}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const b=s[E.id],v=E.uniforms,w=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,C=v.length;T<C;T++){const L=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,y=L.length;S<y;S++){const R=L[S];if(p(R,T,S,w)===!0){const B=R.__offset,H=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let Z=0;Z<H.length;Z++){const K=H[Z],ee=_(K);typeof K=="number"||typeof K=="boolean"?(R.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,B+W,R.__data)):K.isMatrix3?(R.__data[0]=K.elements[0],R.__data[1]=K.elements[1],R.__data[2]=K.elements[2],R.__data[3]=0,R.__data[4]=K.elements[3],R.__data[5]=K.elements[4],R.__data[6]=K.elements[5],R.__data[7]=0,R.__data[8]=K.elements[6],R.__data[9]=K.elements[7],R.__data[10]=K.elements[8],R.__data[11]=0):(K.toArray(R.__data,W),W+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,b,v,w){const T=E.value,C=b+"_"+v;if(w[C]===void 0)return typeof T=="number"||typeof T=="boolean"?w[C]=T:w[C]=T.clone(),!0;{const L=w[C];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return w[C]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(E){const b=E.uniforms;let v=0;const w=16;for(let C=0,L=b.length;C<L;C++){const S=Array.isArray(b[C])?b[C]:[b[C]];for(let y=0,R=S.length;y<R;y++){const B=S[y],H=Array.isArray(B.value)?B.value:[B.value];for(let W=0,Z=H.length;W<Z;W++){const K=H[W],ee=_(K),X=v%w,he=X%ee.boundary,ve=X+he;v+=he,ve!==0&&w-ve<ee.storage&&(v+=w-ve),B.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=ee.storage}}}const T=v%w;return T>0&&(v+=w-T),E.__size=v,E.__cache={},this}function _(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const v=o.indexOf(b.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class jg{constructor(e={}){const{canvas:t=ah(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const E=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let w=!1;this._outputColorSpace=dn;let T=0,C=0,L=null,S=-1,y=null;const R=new _t,B=new _t;let H=null;const W=new st(0);let Z=0,K=t.width,ee=t.height,X=1,he=null,ve=null;const De=new _t(0,0,K,ee),Qe=new _t(0,0,K,ee);let Lt=!1;const bt=new sl;let $=!1,fe=!1;const ae=new Pt,ze=new P,Be=new _t,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function at(){return L===null?X:1}let D=n;function Et(M,O){return t.getContext(M,O)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ya}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",ne,!1),D===null){const O="webgl2";if(D=Et(O,M),D===null)throw Et(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Oe,ut,Pe,Dt,ye,et,$t,Bt,A,x,z,j,te,q,Re,oe,Te,Ae,se,ge,Ge,Ce,pe,$e;function N(){Oe=new s0(D),Oe.init(),Ce=new Bg(D,Oe),ut=new Zm(D,Oe,e,Ce),Pe=new kg(D,Oe),ut.reversedDepthBuffer&&h&&Pe.buffers.depth.setReversed(!0),Dt=new a0(D),ye=new wg,et=new zg(D,Oe,Pe,ye,ut,Ce,Dt),$t=new Qm(v),Bt=new i0(v),A=new ff(D),pe=new $m(D,A),x=new r0(D,A,Dt,pe),z=new c0(D,x,A,Dt),se=new l0(D,ut,et),oe=new Jm(ye),j=new Eg(v,$t,Bt,Oe,ut,pe,oe),te=new qg(v,ye),q=new Ag,Re=new Dg(Oe),Ae=new jm(v,$t,Bt,Pe,z,p,l),Te=new Og(v,z,ut),$e=new Yg(D,Dt,ut,Pe),ge=new Km(D,Oe,Dt),Ge=new o0(D,Oe,Dt),Dt.programs=j.programs,v.capabilities=ut,v.extensions=Oe,v.properties=ye,v.renderLists=q,v.shadowMap=Te,v.state=Pe,v.info=Dt}N();const re=new Wg(v,D);this.xr=re,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const M=Oe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Oe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(M){M!==void 0&&(X=M,this.setSize(K,ee,!1))},this.getSize=function(M){return M.set(K,ee)},this.setSize=function(M,O,G=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=M,ee=O,t.width=Math.floor(M*X),t.height=Math.floor(O*X),G===!0&&(t.style.width=M+"px",t.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(K*X,ee*X).floor()},this.setDrawingBufferSize=function(M,O,G){K=M,ee=O,X=G,t.width=Math.floor(M*G),t.height=Math.floor(O*G),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(De)},this.setViewport=function(M,O,G,V){M.isVector4?De.set(M.x,M.y,M.z,M.w):De.set(M,O,G,V),Pe.viewport(R.copy(De).multiplyScalar(X).round())},this.getScissor=function(M){return M.copy(Qe)},this.setScissor=function(M,O,G,V){M.isVector4?Qe.set(M.x,M.y,M.z,M.w):Qe.set(M,O,G,V),Pe.scissor(B.copy(Qe).multiplyScalar(X).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(M){Pe.setScissorTest(Lt=M)},this.setOpaqueSort=function(M){he=M},this.setTransparentSort=function(M){ve=M},this.getClearColor=function(M){return M.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,G=!0){let V=0;if(M){let F=!1;if(L!==null){const ie=L.texture.format;F=ie===Qa||ie===Ja||ie===Za}if(F){const ie=L.texture.type,me=ie===Yn||ie===Oi||ie===Ws||ie===Xs||ie===$a||ie===Ka,Me=Ae.getClearColor(),_e=Ae.getClearAlpha(),He=Me.r,Ve=Me.g,Ue=Me.b;me?(g[0]=He,g[1]=Ve,g[2]=Ue,g[3]=_e,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=He,_[1]=Ve,_[2]=Ue,_[3]=_e,D.clearBufferiv(D.COLOR,0,_))}else V|=D.COLOR_BUFFER_BIT}O&&(V|=D.DEPTH_BUFFER_BIT),G&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),Ae.dispose(),q.dispose(),Re.dispose(),ye.dispose(),$t.dispose(),Bt.dispose(),z.dispose(),pe.dispose(),$e.dispose(),j.dispose(),re.dispose(),re.removeEventListener("sessionstart",On),re.removeEventListener("sessionend",gl),yi.stop()};function le(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const M=Dt.autoReset,O=Te.enabled,G=Te.autoUpdate,V=Te.needsUpdate,F=Te.type;N(),Dt.autoReset=M,Te.enabled=O,Te.autoUpdate=G,Te.needsUpdate=V,Te.type=F}function ne(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Q(M){const O=M.target;O.removeEventListener("dispose",Q),Ee(O)}function Ee(M){qe(M),ye.remove(M)}function qe(M){const O=ye.get(M).programs;O!==void 0&&(O.forEach(function(G){j.releaseProgram(G)}),M.isShaderMaterial&&j.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,G,V,F,ie){O===null&&(O=Xe);const me=F.isMesh&&F.matrixWorld.determinant()<0,Me=pd(M,O,G,V,F);Pe.setMaterial(V,me);let _e=G.index,He=1;if(V.wireframe===!0){if(_e=x.getWireframeAttribute(G),_e===void 0)return;He=2}const Ve=G.drawRange,Ue=G.attributes.position;let it=Ve.start*He,ft=(Ve.start+Ve.count)*He;ie!==null&&(it=Math.max(it,ie.start*He),ft=Math.min(ft,(ie.start+ie.count)*He)),_e!==null?(it=Math.max(it,0),ft=Math.min(ft,_e.count)):Ue!=null&&(it=Math.max(it,0),ft=Math.min(ft,Ue.count));const kt=ft-it;if(kt<0||kt===1/0)return;pe.setup(F,V,Me,G,_e);let Rt,yt=ge;if(_e!==null&&(Rt=A.get(_e),yt=Ge,yt.setIndex(Rt)),F.isMesh)V.wireframe===!0?(Pe.setLineWidth(V.wireframeLinewidth*at()),yt.setMode(D.LINES)):yt.setMode(D.TRIANGLES);else if(F.isLine){let Fe=V.linewidth;Fe===void 0&&(Fe=1),Pe.setLineWidth(Fe*at()),F.isLineSegments?yt.setMode(D.LINES):F.isLineLoop?yt.setMode(D.LINE_LOOP):yt.setMode(D.LINE_STRIP)}else F.isPoints?yt.setMode(D.POINTS):F.isSprite&&yt.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))yt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Fe=F._multiDrawStarts,Nt=F._multiDrawCounts,lt=F._multiDrawCount,fn=_e?A.get(_e).bytesPerElement:1,Bi=ye.get(V).currentProgram.getUniforms();for(let pn=0;pn<lt;pn++)Bi.setValue(D,"_gl_DrawID",pn),yt.render(Fe[pn]/fn,Nt[pn])}else if(F.isInstancedMesh)yt.renderInstances(it,kt,F.count);else if(G.isInstancedBufferGeometry){const Fe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Nt=Math.min(G.instanceCount,Fe);yt.renderInstances(it,kt,Nt)}else yt.render(it,kt)};function wt(M,O,G){M.transparent===!0&&M.side===xn&&M.forceSinglePass===!1?(M.side=hn,M.needsUpdate=!0,sr(M,O,G),M.side=_i,M.needsUpdate=!0,sr(M,O,G),M.side=xn):sr(M,O,G)}this.compile=function(M,O,G=null){G===null&&(G=M),f=Re.get(G),f.init(O),b.push(f),G.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),M!==G&&M.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const V=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ie=F.material;if(ie)if(Array.isArray(ie))for(let me=0;me<ie.length;me++){const Me=ie[me];wt(Me,G,F),V.add(Me)}else wt(ie,G,F),V.add(ie)}),f=b.pop(),V},this.compileAsync=function(M,O,G=null){const V=this.compile(M,O,G);return new Promise(F=>{function ie(){if(V.forEach(function(me){ye.get(me).currentProgram.isReady()&&V.delete(me)}),V.size===0){F(M);return}setTimeout(ie,10)}Oe.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let ht=null;function $n(M){ht&&ht(M)}function On(){yi.stop()}function gl(){yi.start()}const yi=new Au;yi.setAnimationLoop($n),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(M){ht=M,re.setAnimationLoop(M),M===null?yi.stop():yi.start()},re.addEventListener("sessionstart",On),re.addEventListener("sessionend",gl),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(O),O=re.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,O,L),f=Re.get(M,b.length),f.init(O),b.push(f),ae.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),bt.setFromProjectionMatrix(ae,qn,O.reversedDepth),fe=this.localClippingEnabled,$=oe.init(this.clippingPlanes,fe),m=q.get(M,E.length),m.init(),E.push(m),re.enabled===!0&&re.isPresenting===!0){const ie=v.xr.getDepthSensingMesh();ie!==null&&oo(ie,O,-1/0,v.sortObjects)}oo(M,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(he,ve),zt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,zt&&Ae.addToRenderList(m,M),this.info.render.frame++,$===!0&&oe.beginShadows();const G=f.state.shadowsArray;Te.render(G,M,O),$===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,F=m.transmissive;if(f.setupLights(),O.isArrayCamera){const ie=O.cameras;if(F.length>0)for(let me=0,Me=ie.length;me<Me;me++){const _e=ie[me];_l(V,F,M,_e)}zt&&Ae.render(M);for(let me=0,Me=ie.length;me<Me;me++){const _e=ie[me];vl(m,M,_e,_e.viewport)}}else F.length>0&&_l(V,F,M,O),zt&&Ae.render(M),vl(m,M,O);L!==null&&C===0&&(et.updateMultisampleRenderTarget(L),et.updateRenderTargetMipmap(L)),M.isScene===!0&&M.onAfterRender(v,M,O),pe.resetDefaultState(),S=-1,y=null,b.pop(),b.length>0?(f=b[b.length-1],$===!0&&oe.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function oo(M,O,G,V){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||bt.intersectsSprite(M)){V&&Be.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ae);const me=z.update(M),Me=M.material;Me.visible&&m.push(M,me,Me,G,Be.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||bt.intersectsObject(M))){const me=z.update(M),Me=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Be.copy(M.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Be.copy(me.boundingSphere.center)),Be.applyMatrix4(M.matrixWorld).applyMatrix4(ae)),Array.isArray(Me)){const _e=me.groups;for(let He=0,Ve=_e.length;He<Ve;He++){const Ue=_e[He],it=Me[Ue.materialIndex];it&&it.visible&&m.push(M,me,it,G,Be.z,Ue)}}else Me.visible&&m.push(M,me,Me,G,Be.z,null)}}const ie=M.children;for(let me=0,Me=ie.length;me<Me;me++)oo(ie[me],O,G,V)}function vl(M,O,G,V){const F=M.opaque,ie=M.transmissive,me=M.transparent;f.setupLightsView(G),$===!0&&oe.setGlobalState(v.clippingPlanes,G),V&&Pe.viewport(R.copy(V)),F.length>0&&ir(F,O,G),ie.length>0&&ir(ie,O,G),me.length>0&&ir(me,O,G),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function _l(M,O,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new Fi(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Ks:Yn,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const ie=f.state.transmissionRenderTarget[V.id],me=V.viewport||R;ie.setSize(me.z*v.transmissionResolutionScale,me.w*v.transmissionResolutionScale);const Me=v.getRenderTarget(),_e=v.getActiveCubeFace(),He=v.getActiveMipmapLevel();v.setRenderTarget(ie),v.getClearColor(W),Z=v.getClearAlpha(),Z<1&&v.setClearColor(16777215,.5),v.clear(),zt&&Ae.render(G);const Ve=v.toneMapping;v.toneMapping=mi;const Ue=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),$===!0&&oe.setGlobalState(v.clippingPlanes,V),ir(M,G,V),et.updateMultisampleRenderTarget(ie),et.updateRenderTargetMipmap(ie),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let ft=0,kt=O.length;ft<kt;ft++){const Rt=O[ft],yt=Rt.object,Fe=Rt.geometry,Nt=Rt.material,lt=Rt.group;if(Nt.side===xn&&yt.layers.test(V.layers)){const fn=Nt.side;Nt.side=hn,Nt.needsUpdate=!0,xl(yt,G,V,Fe,Nt,lt),Nt.side=fn,Nt.needsUpdate=!0,it=!0}}it===!0&&(et.updateMultisampleRenderTarget(ie),et.updateRenderTargetMipmap(ie))}v.setRenderTarget(Me,_e,He),v.setClearColor(W,Z),Ue!==void 0&&(V.viewport=Ue),v.toneMapping=Ve}function ir(M,O,G){const V=O.isScene===!0?O.overrideMaterial:null;for(let F=0,ie=M.length;F<ie;F++){const me=M[F],Me=me.object,_e=me.geometry,He=me.group;let Ve=me.material;Ve.allowOverride===!0&&V!==null&&(Ve=V),Me.layers.test(G.layers)&&xl(Me,O,G,_e,Ve,He)}}function xl(M,O,G,V,F,ie){M.onBeforeRender(v,O,G,V,F,ie),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(v,O,G,V,M,ie),F.transparent===!0&&F.side===xn&&F.forceSinglePass===!1?(F.side=hn,F.needsUpdate=!0,v.renderBufferDirect(G,O,V,F,M,ie),F.side=_i,F.needsUpdate=!0,v.renderBufferDirect(G,O,V,F,M,ie),F.side=xn):v.renderBufferDirect(G,O,V,F,M,ie),M.onAfterRender(v,O,G,V,F,ie)}function sr(M,O,G){O.isScene!==!0&&(O=Xe);const V=ye.get(M),F=f.state.lights,ie=f.state.shadowsArray,me=F.state.version,Me=j.getParameters(M,F.state,ie,O,G),_e=j.getProgramCacheKey(Me);let He=V.programs;V.environment=M.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(M.isMeshStandardMaterial?Bt:$t).get(M.envMap||V.environment),V.envMapRotation=V.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,He===void 0&&(M.addEventListener("dispose",Q),He=new Map,V.programs=He);let Ve=He.get(_e);if(Ve!==void 0){if(V.currentProgram===Ve&&V.lightsStateVersion===me)return yl(M,Me),Ve}else Me.uniforms=j.getUniforms(M),M.onBeforeCompile(Me,v),Ve=j.acquireProgram(Me,_e),He.set(_e,Ve),V.uniforms=Me.uniforms;const Ue=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ue.clippingPlanes=oe.uniform),yl(M,Me),V.needsLights=gd(M),V.lightsStateVersion=me,V.needsLights&&(Ue.ambientLightColor.value=F.state.ambient,Ue.lightProbe.value=F.state.probe,Ue.directionalLights.value=F.state.directional,Ue.directionalLightShadows.value=F.state.directionalShadow,Ue.spotLights.value=F.state.spot,Ue.spotLightShadows.value=F.state.spotShadow,Ue.rectAreaLights.value=F.state.rectArea,Ue.ltc_1.value=F.state.rectAreaLTC1,Ue.ltc_2.value=F.state.rectAreaLTC2,Ue.pointLights.value=F.state.point,Ue.pointLightShadows.value=F.state.pointShadow,Ue.hemisphereLights.value=F.state.hemi,Ue.directionalShadowMap.value=F.state.directionalShadowMap,Ue.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ue.spotShadowMap.value=F.state.spotShadowMap,Ue.spotLightMatrix.value=F.state.spotLightMatrix,Ue.spotLightMap.value=F.state.spotLightMap,Ue.pointShadowMap.value=F.state.pointShadowMap,Ue.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Ve,V.uniformsList=null,Ve}function bl(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=Hr.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function yl(M,O){const G=ye.get(M);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function pd(M,O,G,V,F){O.isScene!==!0&&(O=Xe),et.resetTextureUnits();const ie=O.fog,me=V.isMeshStandardMaterial?O.environment:null,Me=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ys,_e=(V.isMeshStandardMaterial?Bt:$t).get(V.envMap||me),He=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ve=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ue=!!G.morphAttributes.position,it=!!G.morphAttributes.normal,ft=!!G.morphAttributes.color;let kt=mi;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(kt=v.toneMapping);const Rt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,yt=Rt!==void 0?Rt.length:0,Fe=ye.get(V),Nt=f.state.lights;if($===!0&&(fe===!0||M!==y)){const rn=M===y&&V.id===S;oe.setState(V,M,rn)}let lt=!1;V.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Nt.state.version||Fe.outputColorSpace!==Me||F.isBatchedMesh&&Fe.batching===!1||!F.isBatchedMesh&&Fe.batching===!0||F.isBatchedMesh&&Fe.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Fe.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Fe.instancing===!1||!F.isInstancedMesh&&Fe.instancing===!0||F.isSkinnedMesh&&Fe.skinning===!1||!F.isSkinnedMesh&&Fe.skinning===!0||F.isInstancedMesh&&Fe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Fe.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Fe.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Fe.instancingMorph===!1&&F.morphTexture!==null||Fe.envMap!==_e||V.fog===!0&&Fe.fog!==ie||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==oe.numPlanes||Fe.numIntersection!==oe.numIntersection)||Fe.vertexAlphas!==He||Fe.vertexTangents!==Ve||Fe.morphTargets!==Ue||Fe.morphNormals!==it||Fe.morphColors!==ft||Fe.toneMapping!==kt||Fe.morphTargetsCount!==yt)&&(lt=!0):(lt=!0,Fe.__version=V.version);let fn=Fe.currentProgram;lt===!0&&(fn=sr(V,O,F));let Bi=!1,pn=!1,Ts=!1;const Ot=fn.getUniforms(),bn=Fe.uniforms;if(Pe.useProgram(fn.program)&&(Bi=!0,pn=!0,Ts=!0),V.id!==S&&(S=V.id,pn=!0),Bi||y!==M){Pe.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ot.setValue(D,"projectionMatrix",M.projectionMatrix),Ot.setValue(D,"viewMatrix",M.matrixWorldInverse);const cn=Ot.map.cameraPosition;cn!==void 0&&cn.setValue(D,ze.setFromMatrixPosition(M.matrixWorld)),ut.logarithmicDepthBuffer&&Ot.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ot.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,pn=!0,Ts=!0)}if(F.isSkinnedMesh){Ot.setOptional(D,F,"bindMatrix"),Ot.setOptional(D,F,"bindMatrixInverse");const rn=F.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Ot.setValue(D,"boneTexture",rn.boneTexture,et))}F.isBatchedMesh&&(Ot.setOptional(D,F,"batchingTexture"),Ot.setValue(D,"batchingTexture",F._matricesTexture,et),Ot.setOptional(D,F,"batchingIdTexture"),Ot.setValue(D,"batchingIdTexture",F._indirectTexture,et),Ot.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&Ot.setValue(D,"batchingColorTexture",F._colorsTexture,et));const yn=G.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&se.update(F,G,fn),(pn||Fe.receiveShadow!==F.receiveShadow)&&(Fe.receiveShadow=F.receiveShadow,Ot.setValue(D,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(bn.envMap.value=_e,bn.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(bn.envMapIntensity.value=O.environmentIntensity),pn&&(Ot.setValue(D,"toneMappingExposure",v.toneMappingExposure),Fe.needsLights&&md(bn,Ts),ie&&V.fog===!0&&te.refreshFogUniforms(bn,ie),te.refreshMaterialUniforms(bn,V,X,ee,f.state.transmissionRenderTarget[M.id]),Hr.upload(D,bl(Fe),bn,et)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Hr.upload(D,bl(Fe),bn,et),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ot.setValue(D,"center",F.center),Ot.setValue(D,"modelViewMatrix",F.modelViewMatrix),Ot.setValue(D,"normalMatrix",F.normalMatrix),Ot.setValue(D,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const rn=V.uniformsGroups;for(let cn=0,ao=rn.length;cn<ao;cn++){const Si=rn[cn];$e.update(Si,fn),$e.bind(Si,fn)}}return fn}function md(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function gd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(M,O,G){const V=ye.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),ye.get(M.texture).__webglTexture=O,ye.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:G,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){const G=ye.get(M);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0};const vd=D.createFramebuffer();this.setRenderTarget=function(M,O=0,G=0){L=M,T=O,C=G;let V=!0,F=null,ie=!1,me=!1;if(M){const _e=ye.get(M);if(_e.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(_e.__webglFramebuffer===void 0)et.setupRenderTarget(M);else if(_e.__hasExternalTextures)et.rebindTextures(M,ye.get(M.texture).__webglTexture,ye.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ue=M.depthTexture;if(_e.__boundDepthTexture!==Ue){if(Ue!==null&&ye.has(Ue)&&(M.width!==Ue.image.width||M.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(M)}}const He=M.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(me=!0);const Ve=ye.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ve[O])?F=Ve[O][G]:F=Ve[O],ie=!0):M.samples>0&&et.useMultisampledRTT(M)===!1?F=ye.get(M).__webglMultisampledFramebuffer:Array.isArray(Ve)?F=Ve[G]:F=Ve,R.copy(M.viewport),B.copy(M.scissor),H=M.scissorTest}else R.copy(De).multiplyScalar(X).floor(),B.copy(Qe).multiplyScalar(X).floor(),H=Lt;if(G!==0&&(F=vd),Pe.bindFramebuffer(D.FRAMEBUFFER,F)&&V&&Pe.drawBuffers(M,F),Pe.viewport(R),Pe.scissor(B),Pe.setScissorTest(H),ie){const _e=ye.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,_e.__webglTexture,G)}else if(me){const _e=O;for(let He=0;He<M.textures.length;He++){const Ve=ye.get(M.textures[He]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+He,Ve.__webglTexture,G,_e)}}else if(M!==null&&G!==0){const _e=ye.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_e.__webglTexture,G)}S=-1},this.readRenderTargetPixels=function(M,O,G,V,F,ie,me,Me=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=ye.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e){Pe.bindFramebuffer(D.FRAMEBUFFER,_e);try{const He=M.textures[Me],Ve=He.format,Ue=He.type;if(!ut.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-V&&G>=0&&G<=M.height-F&&(M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Me),D.readPixels(O,G,V,F,Ce.convert(Ve),Ce.convert(Ue),ie))}finally{const He=L!==null?ye.get(L).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(M,O,G,V,F,ie,me,Me=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=ye.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e)if(O>=0&&O<=M.width-V&&G>=0&&G<=M.height-F){Pe.bindFramebuffer(D.FRAMEBUFFER,_e);const He=M.textures[Me],Ve=He.format,Ue=He.type;if(!ut.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,it),D.bufferData(D.PIXEL_PACK_BUFFER,ie.byteLength,D.STREAM_READ),M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Me),D.readPixels(O,G,V,F,Ce.convert(Ve),Ce.convert(Ue),0);const ft=L!==null?ye.get(L).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,ft);const kt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await lh(D,kt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,it),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ie),D.deleteBuffer(it),D.deleteSync(kt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,G=0){const V=Math.pow(2,-G),F=Math.floor(M.image.width*V),ie=Math.floor(M.image.height*V),me=O!==null?O.x:0,Me=O!==null?O.y:0;et.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,me,Me,F,ie),Pe.unbindTexture()};const _d=D.createFramebuffer(),xd=D.createFramebuffer();this.copyTextureToTexture=function(M,O,G=null,V=null,F=0,ie=null){ie===null&&(F!==0?(ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=F,F=0):ie=0);let me,Me,_e,He,Ve,Ue,it,ft,kt;const Rt=M.isCompressedTexture?M.mipmaps[ie]:M.image;if(G!==null)me=G.max.x-G.min.x,Me=G.max.y-G.min.y,_e=G.isBox3?G.max.z-G.min.z:1,He=G.min.x,Ve=G.min.y,Ue=G.isBox3?G.min.z:0;else{const yn=Math.pow(2,-F);me=Math.floor(Rt.width*yn),Me=Math.floor(Rt.height*yn),M.isDataArrayTexture?_e=Rt.depth:M.isData3DTexture?_e=Math.floor(Rt.depth*yn):_e=1,He=0,Ve=0,Ue=0}V!==null?(it=V.x,ft=V.y,kt=V.z):(it=0,ft=0,kt=0);const yt=Ce.convert(O.format),Fe=Ce.convert(O.type);let Nt;O.isData3DTexture?(et.setTexture3D(O,0),Nt=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(et.setTexture2DArray(O,0),Nt=D.TEXTURE_2D_ARRAY):(et.setTexture2D(O,0),Nt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const lt=D.getParameter(D.UNPACK_ROW_LENGTH),fn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Bi=D.getParameter(D.UNPACK_SKIP_PIXELS),pn=D.getParameter(D.UNPACK_SKIP_ROWS),Ts=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Rt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Rt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,He),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ve),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ue);const Ot=M.isDataArrayTexture||M.isData3DTexture,bn=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){const yn=ye.get(M),rn=ye.get(O),cn=ye.get(yn.__renderTarget),ao=ye.get(rn.__renderTarget);Pe.bindFramebuffer(D.READ_FRAMEBUFFER,cn.__webglFramebuffer),Pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,ao.__webglFramebuffer);for(let Si=0;Si<_e;Si++)Ot&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.get(M).__webglTexture,F,Ue+Si),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ye.get(O).__webglTexture,ie,kt+Si)),D.blitFramebuffer(He,Ve,me,Me,it,ft,me,Me,D.DEPTH_BUFFER_BIT,D.NEAREST);Pe.bindFramebuffer(D.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(F!==0||M.isRenderTargetTexture||ye.has(M)){const yn=ye.get(M),rn=ye.get(O);Pe.bindFramebuffer(D.READ_FRAMEBUFFER,_d),Pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,xd);for(let cn=0;cn<_e;cn++)Ot?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yn.__webglTexture,F,Ue+cn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,yn.__webglTexture,F),bn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,rn.__webglTexture,ie,kt+cn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,rn.__webglTexture,ie),F!==0?D.blitFramebuffer(He,Ve,me,Me,it,ft,me,Me,D.COLOR_BUFFER_BIT,D.NEAREST):bn?D.copyTexSubImage3D(Nt,ie,it,ft,kt+cn,He,Ve,me,Me):D.copyTexSubImage2D(Nt,ie,it,ft,He,Ve,me,Me);Pe.bindFramebuffer(D.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else bn?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(Nt,ie,it,ft,kt,me,Me,_e,yt,Fe,Rt.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Nt,ie,it,ft,kt,me,Me,_e,yt,Rt.data):D.texSubImage3D(Nt,ie,it,ft,kt,me,Me,_e,yt,Fe,Rt):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ie,it,ft,me,Me,yt,Fe,Rt.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ie,it,ft,Rt.width,Rt.height,yt,Rt.data):D.texSubImage2D(D.TEXTURE_2D,ie,it,ft,me,Me,yt,Fe,Rt);D.pixelStorei(D.UNPACK_ROW_LENGTH,lt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Bi),D.pixelStorei(D.UNPACK_SKIP_ROWS,pn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ts),ie===0&&O.generateMipmaps&&D.generateMipmap(Nt),Pe.unbindTexture()},this.copyTextureToTexture3D=function(M,O,G=null,V=null,F=0){return ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,O,G,V,F)},this.initRenderTarget=function(M){ye.get(M).__webglFramebuffer===void 0&&et.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?et.setTextureCube(M,0):M.isData3DTexture?et.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?et.setTexture2DArray(M,0):et.setTexture2D(M,0),Pe.unbindTexture()},this.resetState=function(){T=0,C=0,L=null,Pe.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}const rs=new wn(0,0,0,"YXZ"),os=new P,$g={type:"change"},Kg={type:"lock"},Zg={type:"unlock"},Ec=.002,wc=Math.PI/2;class Jg extends df{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Qg.bind(this),this._onPointerlockChange=ev.bind(this),this._onPointerlockError=tv.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(e){super.connect(e),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;os.setFromMatrixColumn(t.matrix,0),os.crossVectors(t.up,os),t.position.addScaledVector(os,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;os.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(os,e)}lock(e=!1){this.domElement.requestPointerLock({unadjustedMovement:e})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function Qg(i){if(this.enabled===!1||this.isLocked===!1)return;const e=this.object;rs.setFromQuaternion(e.quaternion),rs.y-=i.movementX*Ec*this.pointerSpeed,rs.x-=i.movementY*Ec*this.pointerSpeed,rs.x=Math.max(wc-this.maxPolarAngle,Math.min(wc-this.minPolarAngle,rs.x)),e.quaternion.setFromEuler(rs),this.dispatchEvent($g)}function ev(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(Kg),this.isLocked=!0):(this.dispatchEvent(Zg),this.isLocked=!1)}function tv(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const nv=.008,Tc=Math.PI/2.1;function iv(i,e,t=nv){return{yaw:i.yaw-e.dx*t,pitch:Math.max(-Tc,Math.min(Tc,i.pitch-e.dy*t))}}function sv(i,e){const t=new Set(e);let n=i;for(;n;){if(t.has(n))return n;n=n.parent}return null}function rv(i,e,t,n,s,r){return{id:`book-${i}-chapter-${e}`,title:t,theme:n,rooms:r.map(([o,a],l)=>({id:`b${i}-c${e}-r${l+1}`,title:o,theme:n,puzzle:a,difficulty:Number((s+l*.2).toFixed(1)),status:i===1&&(e===1||e===2&&l<=3||e===3&&l<=3||e===4&&l<=3)||i===2&&e===1&&l<=2?"playable":"planned"}))}}const pt=rv,Gs=[{id:"book-1",number:1,title:"魔法石",subtitle:"霍格沃茨的第一道门",palette:["#7a1f2b","#d3a84b","#19151d"],visualTheme:"温暖烛光、哥特学院、深红与金色、古老石墙",chapters:[pt(1,1,"初入魔法世界","猫头鹰信件、对角巷、魔杖与分院仪式",1,[["猫头鹰来信","重组地址碎片并找出被信件覆盖的隐藏出口"],["对角巷清单","依据课程清单匹配商店、物品和正确数量"],["魔杖选择","组合木材、杖芯、光效和声音反馈"],["分院仪式","排列四学院象征与人物品质打开宴会厅"]]),pt(1,2,"城堡禁区","移动楼梯、画像、巡夜与三头犬活板门",1.5,[["移动楼梯","观察周期并在正确时机连接三段路线"],["会说话的画像","从画像对话矛盾中推导正确口令"],["管理员的巡夜","利用盔甲、猫叫与暗门进行潜行"],["三头犬活板门","组合乐器并复现让守门生物入睡的旋律"]]),pt(1,3,"镜中秘密","飞行课、巨怪、禁书区与厄里斯魔镜",2,[["飞行课遗失物","控制漂浮轨迹把散落物送回正确位置"],["巨怪洗手间","利用悬浮机关移动障碍并建立逃生路线"],["图书馆禁书区","按历史时间线排列书脊并避开尖叫书籍"],["厄里斯魔镜","比较镜像与现实差异选择真正需要的物品"]]),pt(1,4,"地下试炼","魔鬼网、飞钥匙、巫师棋与魔法石",2.5,[["魔鬼网","控制光源与节奏摆脱收缩藤蔓"],["飞钥匙房","依据翅膀损伤、速度和锁孔锁定钥匙"],["巫师棋","规划最少牺牲路线穿过动态棋盘"],["魔法石密室","结合药剂逻辑、镜像线索与章节物品"]])]},{id:"book-2",number:2,title:"密室",subtitle:"蛇语在墙壁深处回响",palette:["#123d32","#7b9361","#0b1412"],visualTheme:"潮湿石窟、蛇形纹样、墨绿冷光、日记墨迹",chapters:[pt(2,1,"不祥警告","精灵封锁、飞车、打人柳与墙上血字",2.4,[["精灵的封锁","修复被干扰物件并找出住宅出口"],["飞车失控","在移动场景中调整动力方向与重量"],["打人柳下","观察树枝攻击规律并匹配安全节拍"],["墙上的血字","利用反射光和水迹还原消失警告"]]),pt(2,2,"决斗与变形","曼德拉草、决斗俱乐部、复方汤剂与伪装",2.9,[["曼德拉草温室","按成熟度、盆土和叫声完成移栽"],["决斗俱乐部","运用护盾、解除和反击的克制关系"],["复方汤剂仓库","按属性、火候与时间调制药剂"],["斯莱特林休息室","在伪装倒计时内筛选有效情报"]]),pt(2,3,"日记中的记忆","盥洗室、日记、蜘蛛巢与被篡改往事",3.4,[["被淹没的盥洗室","调整水管压力显露蛇形入口"],["日记墨迹","在文字消失前连接人物地点与时间"],["禁林蜘蛛巢","依据声音方向和蛛网震动逃生"],["海格往事","对比现实物证与记忆找出篡改"]]),pt(2,4,"蛇怪密室","蛇语石门、管道、凤凰与日记核心",3.9,[["蛇语石门","通过音高和节奏复现门锁序列"],["管道迷宫","依据水流回声和蛇皮判断路线"],["凤凰与毒牙","避开直视威胁并组合治疗与攻击"],["日记核心","在墨迹侵蚀倒计时中定位核心弱点"]])]},{id:"book-3",number:3,title:"阿兹卡班的囚徒",subtitle:"地图、月光与闭合的时间",palette:["#243747","#96a6b4","#17191d"],visualTheme:"暴风雨、月光、旧羊皮地图、旋转钟表",chapters:[pt(3,1,"逃犯阴影","骑士巴士、怪物书、摄魂怪与密道",3.4,[["骑士巴士","在高速变化车厢中固定行李并识别信号"],["怪物书","通过书脊束带和触摸顺序打开教材"],["摄魂怪列车","维持光源和积极记忆阻止冻结"],["霍格莫德密道","使用活点脚印破解隐藏路线"]]),pt(3,2,"时间与恐惧","博格特、月相、占卜与钟楼",3.9,[["博格特衣柜","识别恐惧规则并用荒诞变形解除"],["卢平课堂","根据月相足迹与毛发辨别形态"],["占卜教室","区分随机图案与可重复预兆"],["钟楼机关","同步三个不同时速的钟摆"]]),pt(3,3,"尖叫棚屋","打人柳、身份、斑斑与满月",4.4,[["打人柳密道","组合地图时序和树枝周期进入地道"],["棚屋身份谜题","根据足迹魔杖和证词判断身份"],["斑斑的秘密","追踪体型变化与缺失手指揭示伪装"],["满月倒计时","在环境变化前配置防护与撤离路线"]]),pt(3,4,"时间转换器","守护神、双时间线、塔楼与闭环",4.9,[["湖边守护神","收集记忆碎片构筑完整守护神"],["双时间线救援","让过去与现在的机关保持一致"],["塔楼营救","在不被过去自己发现时改变物件"],["闭环逃脱","同时满足三项事件且不制造时间矛盾"]])]},{id:"book-4",number:4,title:"火焰杯",subtitle:"荣耀背后隐藏着门钥匙",palette:["#1d3f5e","#59a6bd","#d67533"],visualTheme:"国际赛事、蓝色火焰、深湖、龙巢与活体迷宫",chapters:[pt(4,1,"黑魔标记","门钥匙、世界杯营地、骚乱与标记",4.6,[["门钥匙山丘","通过异常触感和空间残影找出门钥匙"],["世界杯营地","依据旗帜语言和空间结构找到营地"],["骚乱撤离","在受限视野中利用声音与地标撤离"],["黑魔标记","重建事件顺序并找出施法位置"]]),pt(4,2,"争霸赛开启","火焰杯、金蛋、龙巢与水下歌声",5.1,[["火焰杯契约","解读年龄线契约符号与参赛规则"],["金蛋线索","按龙种巢穴与护甲选择策略"],["龙巢夺蛋","动态躲避攻击并用场景机关夺蛋"],["水下歌声","改变声音介质后解析旋律密码"]]),pt(4,3,"黑湖营救","鳃囊草、深湖、人鱼村与超额救援",5.6,[["鳃囊草配方","限时辨别水下呼吸材料"],["深湖导航","管理氧气光照和水流寻找地标"],["人鱼村契约","通过符号语言确认人质与规则"],["超额救援","在资源不足时规划多人救援顺序"]]),pt(4,4,"迷宫与墓地","移动树篱、斯芬克斯、奖杯与墓地",6.1,[["会移动的树篱","记录路径变化规律避免循环"],["斯芬克斯问题","在时间压力下完成文字拆分谜题"],["奖杯门钥匙","识别被替换的终点机关并反制"],["墓地决战","组合护盾闪避与环境互动完成逃脱"]])]},{id:"book-5",number:5,title:"凤凰社",subtitle:"规则、反抗与预言之门",palette:["#9e6174","#ead6d6","#111217"],visualTheme:"压抑粉色办公室、秘密训练室、宣传墙与神秘事务司",chapters:[pt(5,1,"审判与监视","巷道、听证会、调查官与血字惩罚",5.8,[["摄魂怪巷道","在照明失效时保护同伴"],["魔法部听证会","按时间证词和法条建立辩护链"],["高级调查官","从不断新增规则中找出逻辑冲突"],["血字惩罚室","利用镜像书写与转印解除机关"]]),pt(5,2,"邓布利多军","有求必应屋、防御阵列、名单与突袭",6.3,[["有求必应屋","用准确需求召唤训练空间"],["基础防御阵列","让位置和咒语方向组成完整护盾"],["秘密成员名单","通过墨水魔法识别泄密路径"],["突袭逃脱","在空间收缩时疏散成员并销毁证据"]]),pt(5,3,"预言梦境","大脑封闭术、壁炉网络、禁林与诱饵",6.8,[["大脑封闭术","区分真实记忆诱导画面与植入信息"],["壁炉网络","连接正确地点并绕过被监控节点"],["禁林审判","利用生物规则化解冲突"],["虚假营救","从不完整梦境中发现诱饵"]]),pt(5,4,"神秘事务司","旋转门厅、时间厅、预言大厅与帷幔",7.3,[["旋转门厅","旋转后依靠非视觉线索确认出口"],["时间厅","控制不同时间方向的物体"],["预言大厅","按人物关系和编号找到预言球"],["帷幔之战","跨房间协同并保护预言撤离"]])]},{id:"book-6",number:6,title:"混血王子",subtitle:"批注、记忆与海边洞穴",palette:["#4c493b","#b89a59","#14221d"],visualTheme:"旧课本批注、液态记忆、暗金墨绿与海边洞穴",chapters:[pt(6,1,"王子的课本","魔药、解毒剂、无声咒与身份批注",6.8,[["魔药教室","比较标准配方与手写批注判断改动"],["解毒剂链","从症状反推毒素与材料"],["无声咒语","依据目标反馈调整施法意图"],["身份批注","分析字迹知识和年代锁定主人"]]),pt(6,2,"记忆之谜","记忆储藏、宴会、篡改与魂器",7.3,[["记忆储藏室","按人物地点和情绪整理液态记忆"],["斯拉格霍恩宴会","从社交关系和回避话题提取线索"],["被篡改的记忆","比较音画不同步与缺失帧"],["魂器真相","连接跨越数十年的物件和人物关系"]]),pt(6,3,"消失柜","有求必应屋、双柜、毒物与入侵计划",7.8,[["有求必应屋迷藏","在堆积物三维迷宫定位同一物件"],["双柜共振","让两个远端房间状态实时联动"],["项链与毒酒","建立受害者传递路径与目标因果图"],["马尔福的计划","在不触发防御时拆解入侵路线"]]),pt(6,4,"海边洞穴","岩壁、黑湖小船、石盆与天文塔",8.3,[["岩壁入口","通过潮汐血液和岩层发现入口"],["黑湖小船","平衡重量人数与魔法强度"],["毒药石盆","规划每次取药后的空间和资源变化"],["天文塔","在多重倒计时中结合洞穴与入侵信息"]])]},{id:"book-7",number:7,title:"死亡圣器",subtitle:"七年线索汇聚于最后一夜",palette:["#252525","#b9b4a4","#7e2e25"],visualTheme:"战争废墟、荒野营地、银色牝鹿、古老符号与燃烧城堡",chapters:[pt(7,1,"逃亡之路","七个波特、婚礼、荒野与魔法部",8,[["七个波特","按身份细节与路线限制分配护送"],["婚礼警报","场景突变后判断出口与可信人物"],["荒野营地","管理保护咒食物方向与广播情报"],["魔法部潜入","三种伪装权限交叉配合完成任务"]]),pt(7,2,"圣器传说","家族遗物、山谷、银色牝鹿与三兄弟",8.5,[["格里莫广场遗物","按家族树和房间历史追踪挂坠盒"],["戈德里克山谷","组合墓碑童话和历史记录"],["银色牝鹿","追踪守护神并管理冰湖资源"],["三兄弟传说","让三件圣器机制在同一模型中成立"]]),pt(7,3,"古灵阁劫案","贝壳小屋、妖精通道、复制金库与巨龙",9,[["贝壳小屋审讯","用魔杖归属和证词制定潜入计划"],["妖精通道","高速切换轨道岔路制动与伪装"],["复制金库","规划最少接触路线避免指数复制"],["巨龙逃生","解除锁链打开穹顶并利用巨龙行为"]]),pt(7,4,"霍格沃茨决战","冠冕、厉火、城堡防线与终局密室",9.4,[["寻找冠冕","整合七部历史线索定位最后魂器"],["厉火密室","在扩散火焰中边移动边改变地形"],["城堡防线","把画像盔甲植物和咒语部署到战区"],["终局密室","综合魔杖归属魂器状态与前关信息"]])]}],ov={books:Gs.length,chapters:Gs.reduce((i,e)=>i+e.chapters.length,0),rooms:Gs.flatMap(i=>i.chapters).reduce((i,e)=>i+e.rooms.length,0)},js="hogwarts-escape-progress";function av(i){i.removeItem(js)}function Du(i){const e=JSON.parse(i.getItem(js));return e?{completedChapter:e.completedChapter,continueFrom:e.continueFrom}:null}function lv(i){const{book:e,chapter:t,room:n}=i.continueFrom;return(e-1)*16+(t-1)*4+n-1}function cv(i,{book:e,chapter:t}){const n=i?.completedChapter;return n?.book===e&&n.chapter+1===t||n?.book+1===e&&n.chapter===4&&t===1}function dt(i,{book:e,chapter:t,room:n}){const s=JSON.parse(i.getItem(js));i.setItem(js,JSON.stringify({version:1,...s?.completedChapter?{completedChapter:s.completedChapter}:{},continueFrom:{book:e,chapter:t,room:n}}))}function io(i,{book:e,chapter:t,room:n}){i.setItem(js,JSON.stringify({version:1,completedChapter:{book:e,chapter:t},continueFrom:{book:e,chapter:t,room:n}}))}const uv={en:{"《标准咒语·初级》":"The Standard Book of Spells, Grade 1",二号锡制坩埚:"Size 2 pewter cauldron",雪白猫头鹰:"Snowy owl",等待主人的魔杖盒:"Wand case awaiting its wizard",飞天扫帚:"Flying broomstick",水晶球:"Crystal ball",黄铜天平:"Brass scales",高级魔药学:"Advanced Potion-Making","霍格沃茨一年级采购清单 · 预算 12 加隆":"Hogwarts first-year shopping list · Budget: 12 Galleons","按清单顺序：课本 → 二号锡制坩埚 → 猫头鹰 → 魔杖盒":"Follow the list: textbook → Size 2 pewter cauldron → owl → wand case","清单顺序错误：“{label}”不该现在购买。采购篮被清空！":"Wrong order: “{label}” should not be purchased yet. The basket was emptied!","已购入：{label}（{price} 加隆）":"Purchased: {label} ({price} Galleons)","采购完成：前往破釜酒吧出口":"Shopping complete: head for the Leaky Cauldron exit","清单上的四枚墨点连成了一条通往下一段旅程的路线。":"The four ink marks on the list now form a route toward the next stage of the journey.","霍格沃茨采购清单完成——出口已经开启！":"The Hogwarts shopping list is complete—the exit is open!",魔法石:"Philosopher's Stone",密室:"Chamber of Secrets",阿兹卡班的囚徒:"Prisoner of Azkaban",火焰杯:"Goblet of Fire",凤凰社:"Order of the Phoenix",混血王子:"Half-Blood Prince",死亡圣器:"Deathly Hallows",霍格沃茨的第一道门:"The First Gate of Hogwarts","温暖烛光、哥特学院、深红与金色、古老石墙":"Warm candlelight, Gothic halls, deep crimson and gold, and ancient stone walls.",初入魔法世界:"Entering the Wizarding World",城堡禁区:"Forbidden Castle Corridors",镜中秘密:"Secrets in the Mirror",地下试炼:"Underground Trials",重组地址碎片并找出被信件覆盖的隐藏出口:"Reassemble address fragments and uncover the hidden exit buried beneath the letters.","依据课程清单匹配商店、物品和正确数量":"Match each shop, item, and quantity to the school supply list.","组合木材、杖芯、光效和声音反馈":"Combine wood, core, light, and sound feedback to find the right wand.",排列四学院象征与人物品质打开宴会厅:"Match the four house emblems with their defining traits to open the Great Hall.",观察周期并在正确时机连接三段路线:"Observe the cycle and connect three route segments at the right moment.",从画像对话矛盾中推导正确口令:"Use contradictions in the portraits’ testimony to deduce the password.","利用盔甲、猫叫与暗门进行潜行":"Use armor, a cat’s bell, and a secret door to slip past the patrol.",组合乐器并复现让守门生物入睡的旋律:"Combine instruments and recreate the melody that sends the guardian to sleep.",控制漂浮轨迹把散落物送回正确位置:"Control floating trajectories to return each lost object to its proper place.",利用悬浮机关移动障碍并建立逃生路线:"Use levitation mechanisms to clear obstacles and build an escape route.",按历史时间线排列书脊并避开尖叫书籍:"Order book spines by historical date while avoiding the screaming volume.",比较镜像与现实差异选择真正需要的物品:"Compare reflection and reality to choose what is truly needed.",控制光源与节奏摆脱收缩藤蔓:"Control light and rhythm to escape the tightening vines.","依据翅膀损伤、速度和锁孔锁定钥匙":"Identify the key by wing damage, speed, and the lock’s keyhole.",规划最少牺牲路线穿过动态棋盘:"Plan a route across the living board with the fewest sacrifices.","结合药剂逻辑、镜像线索与章节物品":"Combine potion logic, mirror clues, and items gathered throughout the chapter.",猫头鹰来信:"Owl Post","目标：按弗农改变藏身处的时间顺序检查四封信":"Objective: inspect the four letters in the order the Dursleys changed hiding places.","地址会追着哈利变化。错误选择会让已确认的信全部重新飞散。":"The address follows Harry wherever he goes. A wrong choice scatters every confirmed letter.",对角巷清单:"Diagon Alley List","目标：按霍格沃茨清单采购四件合规格物品，预算 12 加隆":"Objective: buy four correctly specified school items in list order with a budget of 12 Galleons.","课本 → 二号锡制坩埚 → 猫头鹰 → 魔杖盒。核对规格与价签，买错会清空采购篮。":"Textbook → size 2 pewter cauldron → owl → wand case. Check every specification and price; a wrong purchase empties the basket.",魔杖选择:"The Wand Chooses","目标：第一阶段，从三种木材中找出与你产生稳定共鸣的一种":"Objective: first, find the one wood among three that resonates steadily with you.","木材线索：闪电形旧伤旁，常青叶不会在严冬凋零。选错会触发失控魔法。":"Wood clue: beside the lightning-shaped scar, an evergreen leaf never fades in winter. A wrong choice unleashes wild magic.",分院仪式:"Sorting Ceremony","目标：走近分院帽，观察大厅里的四学院象征":"Objective: approach the Sorting Hat and study the four house emblems in the Great Hall.","勇气、忠诚、智慧与野心各有象征；分院帽正在等待你的选择。":"Courage, loyalty, wisdom, and ambition each have an emblem. The Sorting Hat awaits your choice.",移动楼梯:"Moving Staircases","目标：依据钟摆与月相路线，依次稳定三座移动楼梯":"Objective: use the pendulum and moon-route clues to stabilize three moving staircases in order.","路线铭文：从最低的平台起步；月光桥只在钟摆居中时停驻；最后登上最高塔。选错会让路线复位并增加 5 秒惩罚。":"Route inscription: begin at the lowest landing; the moonlit bridge stops only when the pendulum is centered; finish at the highest tower. A mistake resets the route and adds five seconds.",会说话的画像:"Talking Portraits","目标：比较三幅画像的证词，按可信的发言顺序询问口令":"Objective: compare three portraits’ testimony and question them in the credible order to reveal the password.","学者说骑士不是第一位；骑士承认学者必须先发言；女士说自己在骑士之后。错误询问会惊动走廊并清空推理。":"The scholar says the knight is not first; the knight admits the scholar must speak first; the lady says she follows the knight. A wrong question alerts the corridor and clears your deductions.",管理员的巡夜:"The Caretaker’s Patrol","目标：利用盔甲遮挡、猫铃声与暗门，避开管理员的灯光巡查":"Objective: use the suit of armor, the cat’s bell, and the secret door to evade the caretaker’s lantern patrol.","巡夜图记：灯光先扫过空盔甲；猫铃能把脚步引向反方向；最后掀开独角兽挂毯。走错会清空路线并提高警戒。":"Patrol notes: the light first sweeps the empty armor; the cat’s bell draws footsteps away; finally lift the unicorn tapestry. A wrong move resets the route and raises the alert.",三头犬活板门:"Three-Headed Guardian","目标：按守门生物能接受的层次，奏出完整安眠旋律":"Objective: perform the complete lullaby in the layers the guardian can tolerate.","褪色乐谱写着：先让气息像夜风进入梦乡，再让琴弦托住梦境，最后以发条的轻响封住鼾声。错奏会重置旋律并惊醒守卫。":"The faded score says: let breath drift into sleep like a night wind, let strings cradle the dream, then seal the snoring with a soft clockwork chime. A wrong note resets the melody and wakes the guardian.",飞行课遗失物:"Flying Lesson: Lost Property","目标：借助风向旗判断重量，依次把三件遗失物送入对应的安全轨迹":"Objective: read the windsock and send three lost objects into their safe flight paths in weight order.","风向板写着：最轻的红色织物先借低风归队；有月纹的笔记随后穿过中环；沉重黄铜罗盘最后沿高风落到新生手中。错序会卷起乱流并吹散全部物品。":"The wind board says: the light red cloth rides the low wind first; the moon-marked notebook follows through the middle ring; the heavy brass compass returns last on the high current. A wrong order creates turbulence and scatters everything.",巨怪洗手间:"Troll Washroom","目标：依次稳定漏水、悬浮瓦砾，再放下横梁架出逃生路线":"Objective: stop the leak, levitate the rubble, then lower the beam to build an escape route.","破裂水管正在冲散落脚点。先转动月纹阀止水，再让碎石升起清出通道，最后才能把高处横梁平稳放到沟渠上。错序会让巨怪逼近并震塌路线。":"The burst pipe is washing away every foothold. Turn the moon-marked valve first, raise the rubble to clear the passage, then lower the high beam across the channel. A wrong order brings the troll closer and collapses the route.",图书馆禁书区:"Restricted Section","目标：依据馆藏年代，按从古到今的顺序点亮三本安全书脊":"Objective: use the catalogue dates to illuminate three safe book spines from oldest to newest.","目录铜牌记载：四学院建校录最古老；龙灾账册写于其后数百年；月蚀纪事刚完成修订。避开锁链缠绕、会尖叫的无年卷。":"The brass catalogue says: the Founders’ Record is oldest; the Dragon Calamity Ledger came centuries later; the Eclipse Chronicle was just revised. Avoid the chained, dateless volume that screams.",厄里斯魔镜:"Mirror of Erised","目标：比较镜中欲望与现实处境，依次选择真正需要的三件物品":"Objective: compare desire with reality and choose the three things you truly need, in order.","镜中人戴着王冠、捧着奖杯，却在现实的寒风中发抖。先御寒，再为黑暗出口照路；最后记住：能共同离开的人，比独占的荣誉更重要。":"The reflection wears a crown and holds a trophy, yet shivers in the real cold. Choose warmth first, then light for the dark exit, and remember: a companion who leaves with you matters more than glory kept alone.",魔鬼网:"Devil’s Snare","目标：保持镇静，按正确节奏控制蓝铃火焰，让藤蔓松开地下出口":"Objective: stay calm and control the bluebell flames in the right rhythm to make the vines release the underground exit.","挣扎会让藤蔓收紧。先放松摆脱缠绕，再点燃冷焰，最后维持稳定光照；猛烈爆燃只会惊动整片根网。":"Struggling tightens the vines. Relax first, ignite the cool flame, then hold a steady light; a violent burst only alarms the entire root network.","停止挣扎 · 蓝铃冷焰 · 三拍恒光":"STOP STRUGGLING · BLUEBELL FLAME · THREE STEADY PULSES",放松呼吸:"Relax and breathe","I · 停止挣扎":"I · STOP STRUGGLING",点燃蓝铃冷焰:"Kindle bluebell flame","II · 微光驱藤":"II · COOL LIGHT REPELS VINES",维持恒定光照:"Hold steady light","III · 稳住三拍":"III · HOLD THREE PULSES",猛烈爆燃:"Wild flare","诱饵 · 惊动根网":"DECOY · ALARMS ROOT NET","地下试炼已加载：放松藤蔓缠绕，以蓝铃冷焰和三拍恒光打开根网。":"Underground Trial loaded: relax the vines, then use bluebell flame and three steady pulses to open the root net.","“{label}”打乱节奏！根网骤然收紧至 {count} 级；先放松，再重新开始。":"“{label}” broke the rhythm! The root net tightened to level {count}; begin again by relaxing.","你停止挣扎，第一层藤蔓松开。现在点燃不会灼伤施法者的蓝铃冷焰。":"You stopped struggling and the first vines loosened. Now kindle the bluebell flame that will not burn its caster.","冷焰逼退根须。最后保持三拍恒光，不要让亮度突然爆发。":"The cool flame drives back the roots. Hold three steady pulses now; do not let the light flare.","魔鬼网光照节奏已完成 {count} / 3":"Light rhythm completed: {count} / 3","{label}奏效，地下出口上方的藤蔓正在退缩。":"{label} worked; the vines above the underground exit are retreating.","魔鬼网完成：稳定冷焰驱散根网，通往飞钥匙房的地下出口已经开启":"Devil’s Snare complete: steady cool flame dispersed the root net and opened the underground exit to Flying Keys.","镇静削弱缠绕，蓝铃冷焰逼退藤蔓，三拍恒光打开根网。前方传来成群翅膀的振动声。":"Calm weakened the grip, bluebell flame repelled the vines, and three steady pulses opened the roots. A swarm of wings hums ahead.","第一部 · 第四章 · 第 1 关完成":"Book 1 · Chapter 4 · Room 1 complete",冷焰退藤:"Vines Before Cool Flame","魔鬼网缩回石缝——正在进入飞钥匙房！":"The Devil’s Snare withdraws into the stone—entering Flying Keys!",飞钥匙房:"Flying Keys","目标：依次确认翅膀损伤、飞行轨迹和锁孔材质，锁定唯一真钥匙":"Objective: identify wing damage, flight path, and keyhole material in order to find the one true key.","门锁留下银屑；真正用过的钥匙左翼弯折，负重后会沿顺时针轨迹下沉。先观察损伤，再追踪轨迹，最后核对银色钥匙。":"The lock left silver filings. The used key has a bent left wing and sinks clockwise under weight. Inspect the damage, trace the path, then confirm the silver key.","左翼折痕 · 顺时针下沉 · 银屑锁孔":"BENT LEFT WING · CLOCKWISE DESCENT · SILVER LOCK",左翼弯折的钥影:"Key with a bent left wing","I · 使用损伤":"I · WEAR DAMAGE",顺时针下沉轨迹:"Clockwise descending trail","II · 负重飞行":"II · WEIGHTED FLIGHT",小型银钥匙:"Small silver key","III · 银屑吻合":"III · SILVER MATCH",华丽金钥匙:"Ornate golden key","诱饵 · 锁孔无金屑":"DECOY · NO GOLD IN LOCK","飞钥匙房已加载：依次核对折翼、飞行轨迹和锁孔银屑。":"Flying Keys loaded: inspect the bent wing, clockwise trail, and silver filings in order.","“{label}”惊散了钥匙群！追逐失误升至 {count}，三条证据需要重新确认。":"“{label}” scattered the flock! Pursuit errors rose to {count}; recheck all three clues.","左翼折痕与门框刮痕一致。现在观察负重钥匙群，寻找顺时针下沉的轨迹。":"The bent left wing matches the frame scratch. Now watch the weighted flock for a clockwise descending path.","下沉轨迹锁定了小型钥匙。最后核对锁孔银屑，排除华丽但材质不符的金钥匙。":"The descending path identifies a small key. Compare the lock’s silver filings last and reject the ornate golden mismatch.","飞钥匙证据已确认 {count} / 3":"Flying-key clues confirmed: {count} / 3","{label}与现场证据吻合，钥匙群的范围缩小了。":"{label} matches the physical evidence; the flock narrows.","飞钥匙房完成：折翼银钥匙准确嵌入门锁，通往巫师棋盘的石门已经开启":"Flying Keys complete: the bent-wing silver key fits, opening the stone door to Wizard Chess.","折翼证明它被使用过，顺时针下沉暴露负重，银屑完成最终材质核对。前方传来巨大棋子的脚步声。":"The bent wing proves prior use, the clockwise descent reveals its weight, and the filings confirm silver. Giant chess pieces stir ahead.","第一部 · 第四章 · 第 2 关完成":"Book 1 · Chapter 4 · Room 2 complete",折翼银钥匙:"The Bent-Wing Silver Key","银钥匙旋转一周，棋盘石门轰然开启——正在进入巫师棋盘！":"The silver key turns once and the stone door crashes open—entering Wizard Chess!","巫师棋已加载：先诱敌，再双攻，最后沿空线推进。":"Wizard Chess loaded: decoy first, fork second, then advance along the open file.",巫师棋:"Wizard Chess","目标：用最少牺牲打开通往对岸的安全棋路":"Objective: open a safe route across the board with the fewest sacrifices.","黑后封锁中央。先用边兵引开主教，再让骑士双攻国王与城堡，最后直车沿空出的纵线推进；贸然冲后会让已投入的棋子全部被吃。":"The black queen controls the center. Use the edge pawn to draw off the bishop, fork king and rook with the knight, then advance the rook along the open file. Charging the queen too soon loses every committed piece.","边兵牵制主教 · 骑士双攻 · 城堡穿过空线":"EDGE PAWN DRAWS BISHOP · KNIGHT FORK · ROOK CROSSES OPEN FILE",边兵诱敌:"Edge-pawn decoy","I · 引开主教":"I · DRAW OFF BISHOP",骑士双攻:"Knight fork","II · 将军攻车":"II · CHECK KING AND ROOK",城堡沿空线推进:"Rook along open file","III · 空线抵岸":"III · CROSS THE OPEN FILE",王后强攻:"Queen charge","诱饵 · 暴露全线":"DECOY · EXPOSES THE FILE","“{label}”暴露了棋路！巨棋吃掉已投入棋子，被吃总数升至 {count}。":"“{label}” exposed the route! Giant pieces captured the committed force; {count} pieces lost in total.","边兵引开了黑主教。现在用骑士同时威胁国王与城堡，迫使黑方让出中央。":"The edge pawn drew off the black bishop. Now fork the king and rook with the knight to force the center open.","骑士双攻奏效，纵线已经清空。最后让城堡沿直线推进到对岸。":"The knight fork worked and cleared the file. Send the rook straight across to the far rank.","安全棋步已确认 {count} / 3":"Safe moves confirmed: {count} / 3","{label}成立，巨型黑棋被迫改换阵形。":"{label} works; the giant black pieces are forced to change formation.","巫师棋完成：仅以边兵诱敌，骑士与城堡已安全抵达对岸":"Wizard Chess complete: only the edge pawn was sacrificed; the knight and rook reached the far side safely.","诱敌打开斜线，双攻迫使让位，城堡穿过空线。最后的魔法石密室就在棋盘后方。":"The decoy opened a diagonal, the fork forced a retreat, and the rook crossed the open file. The Stone Chamber lies beyond the board.","第一部 · 第四章 · 第 3 关完成":"Book 1 · Chapter 4 · Room 3 complete",最少牺牲棋路:"The Least-Sacrifice Route","白色城堡抵达对岸，火门显现——正在进入魔法石密室！":"The white rook reaches the far rank and a fire door appears—entering the Stone Chamber!","最终密室已加载：先解药剂逻辑，再辨镜像，最后证明守护意图。":"Final chamber loaded: solve the potions, read the mirror, then prove your protective intent.",魔法石密室:"The Stone Chamber","目标：穿过黑焰，解读镜像，并证明你只想保护魔法石":"Objective: cross the black flames, interpret the mirror, and prove you seek only to protect the Stone.","七瓶药剂中，最小的瓶子可穿过黑焰。镜中真正的守护者口袋仍空着；想夺取魔法石的手只会触发密室腐化。":"Of seven potions, the smallest bottle crosses the black fire. In the mirror, a true guardian’s pocket remains empty; a hand reaching to take the Stone only awakens the chamber’s corruption.","七瓶取最小 · 镜中口袋为空 · 双手只作守护":"SMALLEST OF SEVEN · EMPTY MIRROR POCKET · OPEN HANDS PROTECT","厄里斯 · 欲望倒写显形":"ERISED · DESIRE REVEALED IN REVERSE",最小银瓶:"Smallest silver bottle","I · 穿越黑焰":"I · CROSS BLACK FIRE",空口袋镜影:"Empty-pocket reflection","II · 不占有":"II · CLAIM NOTHING",守护石的誓言:"Vow to protect the Stone","III · 只为保护":"III · PROTECT ONLY",夺取石的手:"Grasping hand","诱饵 · 占有欲":"DECOY · POSSESSIVE INTENT","“{label}”暴露了占有欲！线索消散，腐化诱惑升至 {count}。":"“{label}” revealed possessive intent! The clues dissolved and corruption rose to {count}.","最小银瓶让你穿过黑焰。现在观察镜中衣袋：真正不求占有的人，口袋里不会出现石头。":"The smallest silver bottle carried you through the black fire. Now inspect the reflected pocket: someone who seeks no possession will find no Stone there.","空口袋镜影证明你没有取石欲望。最后明确你的意图：保护它，而不是拥有它。":"The empty reflected pocket proves you do not seek the Stone. Declare your final intent: protect it, never possess it.","魔法石密室线索已确认 {count} / 3":"Stone Chamber clues confirmed: {count} / 3","{label}通过了密室检验，镜面中的金光更加清晰。":"{label} passed the chamber’s test; gold light sharpens in the mirror.","第一部完成：魔法石只向无意占有、决心守护的人显现":"Book One complete: the Stone appears only to one who will protect it without possessing it.","药剂穿过黑焰，空口袋识破欲望，守护誓言让魔法石安全显现。新的绿色干扰正在住宅中聚集。":"The potion crossed the black fire, the empty pocket exposed desire, and the protective vow revealed the Stone safely. Green interference is gathering at Privet Drive.","第一部 · 魔法石完成":"Book 1 · Philosopher’s Stone complete","第二部 · 不祥警告":"Book 2 · An Ominous Warning","守护之石化作金光——正在返回住宅，调查精灵留下的三重封锁！":"The protected Stone dissolves into gold light—returning to Privet Drive to investigate the elf’s triple blockade!","第二部首关已加载：沿邮槽、蛋糕与飞路炉追踪绿色魔力残痕。":"Book Two’s first room loaded: follow the green traces from the letter slot to the cake, then the fireplace.",精灵的封锁:"The Elf’s Blockade","目标：循魔力残痕解除住宅中的三重封锁，赶往国王十字车站":"Objective: follow the magical residue, break the house’s triple blockade, and reach King’s Cross.","绿色干扰从邮槽进入，绕过悬浮蛋糕，最后汇入壁炉封印。错碰尖叫灯会让封锁重新闭合。":"Green interference enters through the letter slot, circles the floating cake, then flows into the fireplace seal. Touching the shrieking lamp closes the blockade again.",飞车失控:"Runaway Flying Car","目标：在撞上高架桥前依次稳定配重、航向与油门":"Objective: stabilize the load, heading, and throttle in order before hitting the viaduct.","后备箱先把车头拉高；红色铁路信号给出航向；发动机过热时只能脉冲给油。猛踩油门会让飞车再次翻滚。":"The boot first pulls the nose high; the red railway signal gives the heading; an overheating engine accepts only pulsed throttle. Flooring it sends the car rolling again.",打人柳下:"Beneath the Whomping Willow","目标：读懂枝条的高扫、低返与露根间隙，安全抵达树洞":"Objective: read the high sweep, low return, and exposed-root opening to reach the hollow safely.","粗枝先从头顶横扫；回摆会贴近地面。只有第二次攻击收势后，发光树根之间才会短暂露出通道。":"A heavy branch sweeps overhead first; its return cuts close to the ground. Only after the second strike settles does a passage briefly open between the glowing roots.","楼梯下 · 楼上小卧室 · 17 号房 · 海上小屋":"STAIRS · BEDROOM · ROOM 17 · ROCK HUT","H. Potter · 楼梯下的储物间":"H. Potter · Cupboard under the Stairs","I · 楼梯下储物间":"I · CUPBOARD UNDER STAIRS","H. Potter · 楼上最小的卧室":"H. Potter · Smallest Bedroom Upstairs","II · 楼上最小卧室":"II · SMALLEST BEDROOM","H. Potter · 铁路景观酒店 17 号房":"H. Potter · Railview Hotel, Room 17","III · 铁路旅馆 17 号房":"III · RAILVIEW ROOM 17","H. Potter · 海上岩礁小屋":"H. Potter · Hut on the Rock, at Sea","IV · 海上岩礁小屋":"IV · HUT ON THE ROCK",楼梯下的储物间:"CUPBOARD UNDER THE STAIRS",通往对角巷:"DOOR TO DIAGON ALLEY","V. Dursley · 女贞路前门":"V. Dursley · Privet Drive Front Door","D. Dursley · 厨房餐桌":"D. Dursley · Kitchen Table","H. Potter · 动物园爬虫馆":"H. Potter · Zoo Reptile House","H. Potter · 石墙中学":"H. Potter · Stonewall High","顺序错误：“{destination}”不是下一处藏身地。四封信重新飞散！":"Wrong chronology: “{destination}” is not the next hiding place. All four letters scatter again!","时间线正确：{destination} · {count} / 4":"Chronology confirmed: {destination} · {count} / 4","时间线完成：循红蜡封印前往通往对角巷的门":"Chronology complete: follow the crimson wax seals to the door into Diagon Alley.","四处藏身地首尾相接，信上的猩红 H 蜡印化成了门钥匙。":"The four hiding places form one journey; the crimson H seals have become a door key.","四封信按时间顺序排列完成——通往对角巷的门已开启！":"The four letters are in chronological order—the door to Diagon Alley is open!","邮槽绿粉 · 蛋糕丝线 · 壁炉三环":"LETTER-SLOT POWDER · CAKE THREAD · THREE HEARTH RINGS",堵塞的黄铜邮槽:"Jammed brass letter slot","I · 绿粉由门外进入":"I · GREEN POWDER ENTERS FROM OUTSIDE",悬浮的紫罗兰布丁蛋糕:"Levitating violet pudding cake","II · 奶油下有绕行丝线":"II · ORBITING THREAD UNDER ICING",三环封印的飞路炉:"Floo fireplace with three seals","III · 三环汇聚于炉心":"III · THREE RINGS CONVERGE AT HEARTH",裂口尖叫油灯:"Cracked shrieking oil lamp","诱饵 · 红线接回警报":"DECOY · RED WIRE CLOSES ALARM","“{label}”接通了报警回路！封锁重置，干扰增强至 {count}。":"“{label}” closed the alarm circuit! The blockade reset; interference rose to {count}.","邮槽里的绿色粉尘来自室外。残痕没有走直线，而是绕向被悬浮咒托起的蛋糕。":"The green powder in the letter slot came from outside. Its trail bends toward the levitating cake instead of crossing the room directly.","蛋糕下方的魔力丝线指向壁炉。最后解除飞路炉上的三环封印。":"The magical thread beneath the cake points to the fireplace. Break the three Floo seals last.","住宅封锁痕迹已确认 {count} / 3":"House-blockade traces confirmed: {count} / 3","{label}的残痕已固定，绿色干扰显露下一段走向。":"The residue on {label} is fixed; the green interference reveals its next direction.","精灵的封锁完成：邮槽、悬浮蛋糕与飞路炉的干扰链已全部解除":"Elf blockade complete: the interference chain through letter slot, levitating cake, and Floo fireplace is broken.","绿色粉尘标出入口，悬浮蛋糕暴露绕行，飞路封印是最终汇聚点。住宅出口重新打开。":"Green powder marked the entrance, the floating cake exposed the detour, and the Floo seals marked the convergence. The house exit is open again.","第二部 · 第一章 · 第 1 关完成":"Book 2 · Chapter 1 · Room 1 complete","三重封锁碎成绿色星屑——正在登上失控飞车，追赶霍格沃茨特快！":"The triple blockade bursts into green sparks—boarding the runaway car to catch the Hogwarts Express!","飞车关卡已加载：先调整行李配重，再对准铁路，最后短促给油。":"Flying Car loaded: shift the luggage, align with the railway, then pulse the throttle.","禁区守卫 · 三首同眠 · 活板门在爪下":"FORBIDDEN GUARD · THREE HEADS ASLEEP · HATCH BENEATH THE PAWS","褪色乐谱：气息 → 琴弦 → 发条":"FADED SCORE: BREATH → STRINGS → CLOCKWORK",银木横笛:"Silverwood flute","I · 七孔夜风之息":"I · NIGHT WIND THROUGH SEVEN HOLES",月弦竖琴:"Moon-string harp","II · 新月琴框托梦":"II · CRESCENT FRAME CRADLES DREAMS",星纹发条音乐盒:"Star-inlaid music box","III · 黄铜滚筒封住鼾声":"III · BRASS CYLINDER SEALS THE SNORE","“{label}”打乱了旋律！三颗头同时睁眼，惊醒次数：{count}。":"“{label}” broke the melody! All three heads opened their eyes; wake-ups: {count}.","横笛的七孔送出夜风，左首已经合眼。现在用月弦托住刚形成的梦境。":"Night wind passed through the flute’s seven holes and closed the left head’s eyes. Now cradle the forming dream with moon strings.","竖琴的九根银弦让中首伏下。最后转动黄铜滚筒，以稳定发条节拍封住鼾声。":"The harp’s nine silver strings lowered the middle head. Finally turn the brass cylinder and seal the snoring with steady clockwork.","安眠旋律已完成 {count} / 3":"Lullaby completed: {count} / 3","{label}奏效，一颗头缓缓合上琥珀色双眼。":"{label} worked; one head slowly closes its amber eyes.","城堡禁区完成：三颗头都已沉睡，爪下的活板门安全开启":"Forbidden Corridor complete: all three heads sleep and the hatch beneath their paws is safe to open.","七孔夜风、九根月弦与黄铜发条叠成摇篮曲。铁箍活板门下吹来潮湿植物的气息。":"Seven-hole night wind, nine moon strings, and brass clockwork form the lullaby. Damp plant air rises through the iron-braced hatch.","第一部 · 第二章完成":"Book 1 · Chapter 2 complete",禁区守门人:"Guardian of the Forbidden Corridor","三头守卫沉入梦乡——第二章通关，正在前往“镜中秘密”！":"The three-headed guardian falls asleep—Chapter 2 complete; entering Secrets in the Mirror!","第三章已加载：在飞行训练场按风向与重量送回三件遗失物。":"Chapter 3 loaded: return three lost objects by wind direction and weight on the flying field.","行李后移 · 红灯校向 · 蓝区脉冲":"LUGGAGE BACK · ALIGN RED SIGNAL · PULSE IN BLUE",后移行李配重:"Shift luggage rearward","I · 皮箱压低车尾":"I · TRUNK WEIGHS DOWN REAR",对准红色铁路灯:"Align with red rail signal","II · 准星重合红灯":"II · SIGHT MEETS RED SIGNAL",短促脉冲油门:"Pulse the throttle","III · 蓝区三次短推":"III · THREE SHORT BLUE PULSES",一脚踩死油门:"Floor the throttle","诱饵 · 红区持续过热":"DECOY · REDLINE OVERHEAT","“{label}”让引擎过热！飞车翻滚，乱流升至 {count}。":"“{label}” overheated the engine! The car rolled and turbulence rose to {count}.","皮箱后移后车尾下沉，车头恢复水平。现在让方向盘准星与铁路尽头的红色信号灯重合。":"The rearward trunk lowers the tail and levels the nose. Now align the steering-wheel sight with the red signal at the end of the track.","航向已经锁定，但水温仍在红区。把细油门杆短推三次，不能踩住宽踏板。":"The heading is locked, but the temperature remains in the red. Give the slender throttle three short pushes; do not hold down the wide pedal.","飞车稳定步骤已完成 {count} / 3":"Stabilization steps completed: {count} / 3","{label}生效，飞车姿态恢复了一部分。":"{label} worked; the flying car regained some stability.","飞车失控完成：配重、航向与脉冲油门让车辆安全追上列车":"Flying Car complete: balanced weight, corrected heading, and pulsed throttle safely caught the train.","皮箱后移压低车尾，红灯准星校正航向，蓝区三次脉冲避免引擎过热。远处的打人柳正在挥动枝条。":"The rearward trunk lowered the tail, the red-signal sight corrected the heading, and three blue-zone pulses prevented overheating. The Whomping Willow thrashes ahead.","第二部 · 第一章 · 第 2 关完成":"Book 2 · Chapter 1 · Room 2 complete","飞车擦过高架桥，稳稳落在城堡草地——打人柳的粗枝突然苏醒！":"The car skims the viaduct and lands on the castle lawn—the Whomping Willow’s heavy branches suddenly awaken!","打人柳关卡已加载：等待高扫、俯身避低返，再冲过树根间隙。":"Whomping Willow loaded: wait for the high sweep, duck under the low return, then dash through the root gap.","破风高扫 · 落叶低返 · 绿根开隙":"HIGH SWEEP IN THE WIND · LOW RETURN THROUGH LEAVES · GREEN ROOT GAP",等待高枝扫过:"Wait for the high sweep","I · 风声在头顶":"I · WIND OVERHEAD",俯身避开低返:"Duck under the low return","II · 落叶贴地":"II · LEAVES SKIM THE GROUND",冲过露根间隙:"Dash through the root gap","III · 树洞显露":"III · THE HOLLOW OPENS",立刻直冲树洞:"Charge straight at the hollow","诱饵 · 粗枝蓄力":"DECOY · HEAVY BRANCH COCKED","“{label}”踩错节拍！粗枝扫中肩膀，擦伤升至 {count}。":"“{label}” broke the rhythm! A branch struck your shoulder; bruises: {count}.","高枝带着破风声从头顶扫过。枝梢正在贴着落叶低低返程，立刻俯身。":"The high branch tears through the air overhead. Its tip is returning low through the fallen leaves—duck now.","低枝擦过背后，主干短暂失去平衡。发光树根之间的缝隙就是第三拍。":"The low branch scrapes past your back and the trunk loses balance. The gap between the glowing roots is the third beat.","打人柳安全节拍已完成 {count} / 3":"Safe beats confirmed: {count} / 3","{label}：动作与枝条节拍吻合。":"{label}: your movement matches the branch rhythm.","打人柳下完成：高扫、低返、露根三拍全部避开，树洞通道已经打开":"Whomping Willow complete: high sweep, low return, and root-gap beats avoided; the hollow passage is open.","破风声预告高扫，贴地落叶暴露低返，两次攻击后的收势形成通往树洞的安全窗口。":"Rushing air warned of the high sweep, ground-skimming leaves revealed the low return, and the pause after both attacks opened a safe window to the hollow.","第二部 · 第一章 · 第 3 关完成":"Book 2 · Chapter 1 · Room 3 complete",树洞开启:"The Hollow Opens","你滑入树根下的安全通道。城堡走廊尽头，一行血字正从潮湿石墙上浮现……":"You slip into the passage beneath the roots. At the end of a castle corridor, bloody writing is emerging on the damp stone…"},fr:{"《标准咒语·初级》":"Le Livre des sorts et enchantements, niveau 1",二号锡制坩埚:"Chaudron en étain, taille 2",雪白猫头鹰:"Harfang des neiges",等待主人的魔杖盒:"Écrin de baguette en attente de son sorcier",飞天扫帚:"Balai volant",水晶球:"Boule de cristal",黄铜天平:"Balance en laiton",高级魔药学:"Manuel avancé de potions","霍格沃茨一年级采购清单 · 预算 12 加隆":"Liste de fournitures de première année · Budget : 12 Gallions","按清单顺序：课本 → 二号锡制坩埚 → 猫头鹰 → 魔杖盒":"Suivez la liste : manuel → chaudron en étain taille 2 → hibou → écrin de baguette","清单顺序错误：“{label}”不该现在购买。采购篮被清空！":"Mauvais ordre : « {label} » ne doit pas encore être achetée. Le panier a été vidé !","已购入：{label}（{price} 加隆）":"Achat effectué : {label} ({price} Gallions)","采购完成：前往破釜酒吧出口":"Achats terminés : rejoignez la sortie du Chaudron Baveur","清单上的四枚墨点连成了一条通往下一段旅程的路线。":"Les quatre taches d’encre de la liste dessinent désormais le chemin vers la prochaine étape.","霍格沃茨采购清单完成——出口已经开启！":"La liste de fournitures de Poudlard est complète : la sortie est ouverte !",魔法石:"La Pierre philosophale",密室:"La Chambre des secrets",阿兹卡班的囚徒:"Le Prisonnier d’Azkaban",火焰杯:"La Coupe de feu",凤凰社:"L’Ordre du Phénix",混血王子:"Le Prince de sang-mêlé",死亡圣器:"Les Reliques de la Mort",霍格沃茨的第一道门:"La première porte de Poudlard","温暖烛光、哥特学院、深红与金色、古老石墙":"Lueurs de bougies, architecture gothique, rouge profond, or et antiques murs de pierre.",初入魔法世界:"Entrée dans le monde des sorciers",城堡禁区:"Les couloirs interdits du château",镜中秘密:"Les secrets du miroir",地下试炼:"Les épreuves souterraines",重组地址碎片并找出被信件覆盖的隐藏出口:"Reconstituez les fragments d’adresse et découvrez la sortie cachée sous les lettres.","依据课程清单匹配商店、物品和正确数量":"Associez chaque boutique, objet et quantité à la liste des fournitures.","组合木材、杖芯、光效和声音反馈":"Combinez bois, cœur, lumière et réactions sonores pour trouver la bonne baguette.",排列四学院象征与人物品质打开宴会厅:"Associez les quatre emblèmes à leurs qualités pour ouvrir la Grande Salle.",观察周期并在正确时机连接三段路线:"Observez le cycle et reliez les trois segments du parcours au bon moment.",从画像对话矛盾中推导正确口令:"Exploitez les contradictions des portraits pour déduire le mot de passe.","利用盔甲、猫叫与暗门进行潜行":"Servez-vous de l’armure, de la clochette du chat et d’une porte secrète pour éviter la ronde.",组合乐器并复现让守门生物入睡的旋律:"Combinez les instruments et reproduisez la mélodie qui endort le gardien.",控制漂浮轨迹把散落物送回正确位置:"Maîtrisez les trajectoires flottantes pour rendre chaque objet perdu.",利用悬浮机关移动障碍并建立逃生路线:"Utilisez la lévitation pour déplacer les obstacles et créer une issue.",按历史时间线排列书脊并避开尖叫书籍:"Classez les dos des livres par époque tout en évitant le volume hurleur.",比较镜像与现实差异选择真正需要的物品:"Comparez le reflet à la réalité pour choisir ce qui est réellement nécessaire.",控制光源与节奏摆脱收缩藤蔓:"Maîtrisez la lumière et le rythme pour échapper aux lianes qui se resserrent.","依据翅膀损伤、速度和锁孔锁定钥匙":"Identifiez la clé grâce à son aile abîmée, sa vitesse et la serrure.",规划最少牺牲路线穿过动态棋盘:"Planifiez un passage sur l’échiquier vivant avec un minimum de sacrifices.","结合药剂逻辑、镜像线索与章节物品":"Combinez la logique des potions, les indices du miroir et les objets du chapitre.",猫头鹰来信:"Le courrier des hiboux","目标：按弗农改变藏身处的时间顺序检查四封信":"Objectif : examinez les quatre lettres dans l’ordre des cachettes choisies par les Dursley.","地址会追着哈利变化。错误选择会让已确认的信全部重新飞散。":"L’adresse suit Harry partout. Une erreur disperse toutes les lettres déjà confirmées.",对角巷清单:"La liste du Chemin de Traverse","目标：按霍格沃茨清单采购四件合规格物品，预算 12 加隆":"Objectif : achetez quatre fournitures conformes, dans l’ordre de la liste, avec douze Gallions.","课本 → 二号锡制坩埚 → 猫头鹰 → 魔杖盒。核对规格与价签，买错会清空采购篮。":"Manuel → chaudron en étain taille 2 → hibou → étui à baguette. Vérifiez les caractéristiques et les prix : une erreur vide le panier.",魔杖选择:"La baguette choisit son sorcier","目标：第一阶段，从三种木材中找出与你产生稳定共鸣的一种":"Objectif : trouvez d’abord, parmi trois bois, celui qui entre en résonance stable avec vous.","木材线索：闪电形旧伤旁，常青叶不会在严冬凋零。选错会触发失控魔法。":"Indice : près d’une ancienne cicatrice en forme d’éclair, une feuille persistante ne fane jamais en hiver. Un mauvais choix déchaîne une magie incontrôlée.",分院仪式:"La cérémonie de la Répartition","目标：走近分院帽，观察大厅里的四学院象征":"Objectif : approchez-vous du Choixpeau et observez les emblèmes des quatre maisons dans la Grande Salle.","勇气、忠诚、智慧与野心各有象征；分院帽正在等待你的选择。":"Courage, loyauté, sagesse et ambition ont chacun leur emblème. Le Choixpeau attend votre décision.",移动楼梯:"Les escaliers mouvants","目标：依据钟摆与月相路线，依次稳定三座移动楼梯":"Objectif : suivez les indices du pendule et de la lune pour stabiliser trois escaliers dans le bon ordre.","路线铭文：从最低的平台起步；月光桥只在钟摆居中时停驻；最后登上最高塔。选错会让路线复位并增加 5 秒惩罚。":"Inscription : partez du palier le plus bas ; le pont lunaire s’immobilise lorsque le pendule est centré ; terminez par la plus haute tour. Une erreur réinitialise le parcours et ajoute cinq secondes.",会说话的画像:"Les portraits bavards","目标：比较三幅画像的证词，按可信的发言顺序询问口令":"Objectif : confrontez les témoignages de trois portraits et interrogez-les dans l’ordre crédible pour obtenir le mot de passe.","学者说骑士不是第一位；骑士承认学者必须先发言；女士说自己在骑士之后。错误询问会惊动走廊并清空推理。":"L’érudit affirme que le chevalier n’est pas le premier ; le chevalier reconnaît que l’érudit doit parler avant lui ; la dame dit venir après le chevalier. Une mauvaise question alerte le couloir et efface vos déductions.",管理员的巡夜:"La ronde du concierge","目标：利用盔甲遮挡、猫铃声与暗门，避开管理员的灯光巡查":"Objectif : utilisez l’armure, la clochette du chat et la porte secrète pour échapper à la lanterne du concierge.","巡夜图记：灯光先扫过空盔甲；猫铃能把脚步引向反方向；最后掀开独角兽挂毯。走错会清空路线并提高警戒。":"Notes de ronde : la lumière balaie d’abord l’armure vide ; la clochette attire les pas ailleurs ; soulevez enfin la tapisserie à la licorne. Une erreur efface l’itinéraire et renforce l’alerte.",三头犬活板门:"Le gardien à trois têtes","目标：按守门生物能接受的层次，奏出完整安眠旋律":"Objectif : jouez la berceuse complète selon les couches sonores que le gardien peut supporter.","褪色乐谱写着：先让气息像夜风进入梦乡，再让琴弦托住梦境，最后以发条的轻响封住鼾声。错奏会重置旋律并惊醒守卫。":"La partition effacée indique : que le souffle mène d’abord au sommeil comme un vent nocturne, que les cordes portent ensuite le rêve, puis qu’un léger mécanisme scelle le ronflement. Une fausse note recommence la mélodie et réveille le gardien.",飞行课遗失物:"Cours de vol : objets perdus","目标：借助风向旗判断重量，依次把三件遗失物送入对应的安全轨迹":"Objectif : lisez la manche à air et renvoyez trois objets perdus sur leur trajectoire sûre, du plus léger au plus lourd.","风向板写着：最轻的红色织物先借低风归队；有月纹的笔记随后穿过中环；沉重黄铜罗盘最后沿高风落到新生手中。错序会卷起乱流并吹散全部物品。":"Le panneau indique : le tissu rouge, très léger, prend d’abord le courant bas ; le carnet marqué d’une lune traverse ensuite l’anneau central ; la lourde boussole en laiton revient enfin par le courant haut. Une erreur soulève des turbulences et disperse tout.",巨怪洗手间:"Les toilettes du troll","目标：依次稳定漏水、悬浮瓦砾，再放下横梁架出逃生路线":"Objectif : stoppez la fuite, faites léviter les gravats, puis abaissez la poutre pour créer une issue.","破裂水管正在冲散落脚点。先转动月纹阀止水，再让碎石升起清出通道，最后才能把高处横梁平稳放到沟渠上。错序会让巨怪逼近并震塌路线。":"La conduite rompue emporte les appuis. Tournez d’abord la vanne marquée d’une lune, soulevez les gravats pour dégager le passage, puis posez la poutre au-dessus du canal. Une erreur rapproche le troll et fait s’effondrer l’itinéraire.",图书馆禁书区:"La Réserve","目标：依据馆藏年代，按从古到今的顺序点亮三本安全书脊":"Objectif : d’après les dates du catalogue, éclairez trois dos de livres sûrs du plus ancien au plus récent.","目录铜牌记载：四学院建校录最古老；龙灾账册写于其后数百年；月蚀纪事刚完成修订。避开锁链缠绕、会尖叫的无年卷。":"Le catalogue de cuivre précise : le Registre des Fondateurs est le plus ancien ; le Livre du Fléau des dragons vient plusieurs siècles après ; la Chronique de l’éclipse vient d’être révisée. Évitez le volume sans date, enchaîné et hurleur.",厄里斯魔镜:"Le Miroir du Riséd","目标：比较镜中欲望与现实处境，依次选择真正需要的三件物品":"Objectif : confrontez le désir du miroir à la réalité et choisissez, dans l’ordre, les trois choses dont vous avez vraiment besoin.","镜中人戴着王冠、捧着奖杯，却在现实的寒风中发抖。先御寒，再为黑暗出口照路；最后记住：能共同离开的人，比独占的荣誉更重要。":"Le reflet porte une couronne et un trophée, mais grelotte dans le froid réel. Choisissez d’abord de quoi vous réchauffer, puis une lumière pour la sortie obscure ; souvenez-vous enfin qu’un compagnon qui part avec vous vaut mieux qu’une gloire solitaire.",魔鬼网:"Le Filet du Diable","目标：保持镇静，按正确节奏控制蓝铃火焰，让藤蔓松开地下出口":"Objectif : gardez votre calme et maîtrisez les flammes bleues au bon rythme pour que les lianes libèrent la sortie souterraine.","挣扎会让藤蔓收紧。先放松摆脱缠绕，再点燃冷焰，最后维持稳定光照；猛烈爆燃只会惊动整片根网。":"Se débattre resserre les lianes. Détendez-vous d’abord, allumez ensuite la flamme froide, puis maintenez une lumière stable ; une flambée brutale alerterait tout le réseau de racines.","停止挣扎 · 蓝铃冷焰 · 三拍恒光":"CESSER DE LUTTER · FLAMME BLEUE · TROIS PULSATIONS STABLES",放松呼吸:"Se détendre et respirer","I · 停止挣扎":"I · CESSER DE LUTTER",点燃蓝铃冷焰:"Allumer la flamme de jacinthe","II · 微光驱藤":"II · LA LUEUR REPOUSSE LES LIANES",维持恒定光照:"Maintenir une lumière stable","III · 稳住三拍":"III · TENIR TROIS PULSATIONS",猛烈爆燃:"Flambée violente","诱饵 · 惊动根网":"LEURRE · ALERTE LE RÉSEAU","地下试炼已加载：放松藤蔓缠绕，以蓝铃冷焰和三拍恒光打开根网。":"Épreuve souterraine chargée : relâchez les lianes, puis ouvrez le réseau avec la flamme bleue et trois pulsations stables.","“{label}”打乱节奏！根网骤然收紧至 {count} 级；先放松，再重新开始。":"« {label} » a brisé le rythme ! Le réseau s’est resserré au niveau {count} ; détendez-vous avant de recommencer.","你停止挣扎，第一层藤蔓松开。现在点燃不会灼伤施法者的蓝铃冷焰。":"Vous cessez de lutter et les premières lianes se relâchent. Allumez maintenant la flamme bleue qui ne brûle pas son lanceur.","冷焰逼退根须。最后保持三拍恒光，不要让亮度突然爆发。":"La flamme froide repousse les racines. Maintenez trois pulsations régulières sans provoquer de flambée.","魔鬼网光照节奏已完成 {count} / 3":"Rythme lumineux accompli : {count} / 3","{label}奏效，地下出口上方的藤蔓正在退缩。":"{label} fonctionne ; les lianes au-dessus de la sortie souterraine reculent.","魔鬼网完成：稳定冷焰驱散根网，通往飞钥匙房的地下出口已经开启":"Filet du Diable terminé : la flamme froide et stable disperse le réseau et ouvre la sortie vers la salle des clés.","镇静削弱缠绕，蓝铃冷焰逼退藤蔓，三拍恒光打开根网。前方传来成群翅膀的振动声。":"Le calme affaiblit l’étreinte, la flamme bleue repousse les lianes et trois pulsations ouvrent les racines. Un essaim d’ailes vrombit plus loin.","第一部 · 第四章 · 第 1 关完成":"Tome 1 · Chapitre 4 · Salle 1 terminée",冷焰退藤:"Les lianes cèdent à la flamme froide","魔鬼网缩回石缝——正在进入飞钥匙房！":"Le Filet du Diable se retire dans la pierre — entrée dans la salle des clés !",飞钥匙房:"La salle des clés volantes","目标：依次确认翅膀损伤、飞行轨迹和锁孔材质，锁定唯一真钥匙":"Objectif : identifiez successivement l’aile abîmée, la trajectoire et le métal de la serrure pour isoler la bonne clé.","门锁留下银屑；真正用过的钥匙左翼弯折，负重后会沿顺时针轨迹下沉。先观察损伤，再追踪轨迹，最后核对银色钥匙。":"La serrure a laissé de la limaille d’argent. La clé déjà utilisée a l’aile gauche tordue et descend en tournant dans le sens horaire. Observez l’usure, suivez la trajectoire, puis confirmez la clé d’argent.","左翼折痕 · 顺时针下沉 · 银屑锁孔":"AILE GAUCHE TORDUE · DESCENTE HORAIRE · SERRURE ARGENTÉE",左翼弯折的钥影:"Clé à l’aile gauche tordue","I · 使用损伤":"I · TRACE D’USURE",顺时针下沉轨迹:"Trajectoire descendante horaire","II · 负重飞行":"II · VOL SOUS CHARGE",小型银钥匙:"Petite clé d’argent","III · 银屑吻合":"III · ARGENT CONFIRMÉ",华丽金钥匙:"Clé dorée ouvragée","诱饵 · 锁孔无金屑":"LEURRE · AUCUNE TRACE D’OR","飞钥匙房已加载：依次核对折翼、飞行轨迹和锁孔银屑。":"Salle des clés chargée : examinez dans l’ordre l’aile tordue, la trajectoire horaire et la limaille d’argent.","“{label}”惊散了钥匙群！追逐失误升至 {count}，三条证据需要重新确认。":"« {label} » a dispersé l’essaim ! Les erreurs montent à {count} ; revérifiez les trois indices.","左翼折痕与门框刮痕一致。现在观察负重钥匙群，寻找顺时针下沉的轨迹。":"L’aile gauche tordue correspond à la rayure du chambranle. Observez maintenant l’essaim chargé et sa descente horaire.","下沉轨迹锁定了小型钥匙。最后核对锁孔银屑，排除华丽但材质不符的金钥匙。":"La descente désigne une petite clé. Comparez enfin la limaille d’argent et écartez la clé dorée, malgré ses ornements.","飞钥匙证据已确认 {count} / 3":"Indices de clé confirmés : {count} / 3","{label}与现场证据吻合，钥匙群的范围缩小了。":"{label} correspond aux traces matérielles ; l’essaim se réduit.","飞钥匙房完成：折翼银钥匙准确嵌入门锁，通往巫师棋盘的石门已经开启":"Salle des clés terminée : la clé d’argent à l’aile tordue ouvre la porte de pierre vers l’échiquier.","折翼证明它被使用过，顺时针下沉暴露负重，银屑完成最终材质核对。前方传来巨大棋子的脚步声。":"L’aile tordue prouve l’usure, la descente horaire révèle le poids et la limaille confirme l’argent. Des pièces géantes s’ébranlent plus loin.","第一部 · 第四章 · 第 2 关完成":"Tome 1 · Chapitre 4 · Salle 2 terminée",折翼银钥匙:"La clé d’argent à l’aile tordue","银钥匙旋转一周，棋盘石门轰然开启——正在进入巫师棋盘！":"La clé d’argent accomplit un tour et la porte de pierre s’ouvre avec fracas — entrée sur l’échiquier !","巫师棋已加载：先诱敌，再双攻，最后沿空线推进。":"Échiquier chargé : diversion, fourchette, puis avancée sur la colonne libre.",巫师棋:"Les échecs version sorcier","目标：用最少牺牲打开通往对岸的安全棋路":"Objectif : ouvrez un passage sûr sur l’échiquier en sacrifiant le moins de pièces possible.","黑后封锁中央。先用边兵引开主教，再让骑士双攻国王与城堡，最后直车沿空出的纵线推进；贸然冲后会让已投入的棋子全部被吃。":"La dame noire verrouille le centre. Attirez d’abord le fou avec le pion de l’aile, réalisez ensuite une fourchette sur le roi et la tour avec le cavalier, puis avancez la tour sur la colonne libérée. Charger la dame trop tôt condamne toutes les pièces engagées.","边兵牵制主教 · 骑士双攻 · 城堡穿过空线":"LE PION ATTIRE LE FOU · FOURCHETTE DU CAVALIER · TOUR SUR COLONNE LIBRE",边兵诱敌:"Diversion du pion","I · 引开主教":"I · ÉCARTER LE FOU",骑士双攻:"Fourchette du cavalier","II · 将军攻车":"II · ROI ET TOUR MENACÉS",城堡沿空线推进:"Tour sur colonne libre","III · 空线抵岸":"III · TRAVERSER LA COLONNE",王后强攻:"Charge de la dame","诱饵 · 暴露全线":"LEURRE · COLONNE EXPOSÉE","“{label}”暴露了棋路！巨棋吃掉已投入棋子，被吃总数升至 {count}。":"« {label} » a exposé le passage ! Les pièces géantes capturent les forces engagées ; {count} pièces perdues au total.","边兵引开了黑主教。现在用骑士同时威胁国王与城堡，迫使黑方让出中央。":"Le pion de l’aile a écarté le fou noir. Menacez maintenant le roi et la tour avec le cavalier pour libérer le centre.","骑士双攻奏效，纵线已经清空。最后让城堡沿直线推进到对岸。":"La fourchette du cavalier a libéré la colonne. Faites enfin avancer la tour en ligne droite jusqu’au bord opposé.","安全棋步已确认 {count} / 3":"Coups sûrs confirmés : {count} / 3","{label}成立，巨型黑棋被迫改换阵形。":"{label} fonctionne ; les pièces noires géantes doivent changer de formation.","巫师棋完成：仅以边兵诱敌，骑士与城堡已安全抵达对岸":"Échiquier terminé : seul le pion de l’aile est sacrifié ; le cavalier et la tour atteignent l’autre bord.","诱敌打开斜线，双攻迫使让位，城堡穿过空线。最后的魔法石密室就在棋盘后方。":"La diversion ouvre une diagonale, la fourchette force le repli et la tour traverse la colonne libre. La chambre de la Pierre se trouve au-delà.","第一部 · 第四章 · 第 3 关完成":"Tome 1 · Chapitre 4 · Salle 3 terminée",最少牺牲棋路:"Le passage au moindre sacrifice","白色城堡抵达对岸，火门显现——正在进入魔法石密室！":"La tour blanche atteint l’autre bord et une porte de feu apparaît — entrée dans la chambre de la Pierre !","最终密室已加载：先解药剂逻辑，再辨镜像，最后证明守护意图。":"Chambre finale chargée : résolvez les potions, lisez le miroir, puis prouvez votre intention protectrice.",魔法石密室:"La chambre de la Pierre","目标：穿过黑焰，解读镜像，并证明你只想保护魔法石":"Objectif : traversez les flammes noires, interprétez le miroir et prouvez que vous voulez seulement protéger la Pierre.","七瓶药剂中，最小的瓶子可穿过黑焰。镜中真正的守护者口袋仍空着；想夺取魔法石的手只会触发密室腐化。":"Parmi les sept potions, le plus petit flacon permet de franchir les flammes noires. Dans le miroir, la poche du véritable gardien reste vide ; une main tendue pour prendre la Pierre ne fait qu’éveiller la corruption de la chambre.","七瓶取最小 · 镜中口袋为空 · 双手只作守护":"LE PLUS PETIT DES SEPT · POCHE VIDE DANS LE MIROIR · MAINS OUVERTES PROTECTRICES","厄里斯 · 欲望倒写显形":"RISÉD · LE DÉSIR SE RÉVÈLE À L’ENVERS",最小银瓶:"Le plus petit flacon d’argent","I · 穿越黑焰":"I · FRANCHIR LE FEU NOIR",空口袋镜影:"Reflet à la poche vide","II · 不占有":"II · NE RIEN POSSÉDER",守护石的誓言:"Serment de protéger la Pierre","III · 只为保护":"III · PROTÉGER SEULEMENT",夺取石的手:"Main avide","诱饵 · 占有欲":"LEURRE · DÉSIR DE POSSESSION","“{label}”暴露了占有欲！线索消散，腐化诱惑升至 {count}。":"« {label} » a révélé un désir de possession ! Les indices se dissipent et la corruption monte à {count}.","最小银瓶让你穿过黑焰。现在观察镜中衣袋：真正不求占有的人，口袋里不会出现石头。":"Le plus petit flacon d’argent vous a fait franchir le feu noir. Observez maintenant la poche dans le miroir : qui ne cherche rien à posséder n’y trouvera aucune Pierre.","空口袋镜影证明你没有取石欲望。最后明确你的意图：保护它，而不是拥有它。":"La poche vide prouve que vous ne convoitez pas la Pierre. Affirmez enfin votre intention : la protéger, jamais la posséder.","魔法石密室线索已确认 {count} / 3":"Indices de la chambre confirmés : {count} / 3","{label}通过了密室检验，镜面中的金光更加清晰。":"{label} réussit l’épreuve de la chambre ; la lumière dorée se précise dans le miroir.","第一部完成：魔法石只向无意占有、决心守护的人显现":"Tome 1 terminé : la Pierre n’apparaît qu’à qui veut la protéger sans la posséder.","药剂穿过黑焰，空口袋识破欲望，守护誓言让魔法石安全显现。新的绿色干扰正在住宅中聚集。":"La potion a franchi le feu noir, la poche vide a démasqué le désir et le serment protecteur a révélé la Pierre sans danger. Une interférence verte se rassemble à Privet Drive.","第一部 · 魔法石完成":"Tome 1 · La Pierre philosophale terminé","第二部 · 不祥警告":"Tome 2 · Un sinistre avertissement","守护之石化作金光——正在返回住宅，调查精灵留下的三重封锁！":"La Pierre protégée se dissout en lumière dorée — retour à Privet Drive pour enquêter sur le triple blocus de l’elfe !","第二部首关已加载：沿邮槽、蛋糕与飞路炉追踪绿色魔力残痕。":"Première salle du tome 2 chargée : suivez les traces vertes de la fente aux lettres au gâteau, puis à la cheminée.",精灵的封锁:"Le blocus de l’elfe","目标：循魔力残痕解除住宅中的三重封锁，赶往国王十字车站":"Objectif : suivez les traces magiques, levez le triple blocus de la maison et rejoignez King’s Cross.","绿色干扰从邮槽进入，绕过悬浮蛋糕，最后汇入壁炉封印。错碰尖叫灯会让封锁重新闭合。":"L’interférence verte entre par la fente aux lettres, contourne le gâteau flottant, puis rejoint le sceau de la cheminée. Toucher la lampe hurlante referme le blocus.",飞车失控:"La voiture volante hors de contrôle","目标：在撞上高架桥前依次稳定配重、航向与油门":"Objectif : stabilisez le chargement, le cap puis l’accélérateur avant de heurter le viaduc.","后备箱先把车头拉高；红色铁路信号给出航向；发动机过热时只能脉冲给油。猛踩油门会让飞车再次翻滚。":"Le coffre cabre d’abord la voiture ; le signal ferroviaire rouge indique le cap ; un moteur en surchauffe exige des impulsions d’accélérateur. Écraser la pédale fait de nouveau tonneau.",打人柳下:"Sous le Saule cogneur","目标：读懂枝条的高扫、低返与露根间隙，安全抵达树洞":"Objectif : déchiffrez le balayage haut, le retour bas et l’ouverture entre les racines pour atteindre le tronc sans danger.","粗枝先从头顶横扫；回摆会贴近地面。只有第二次攻击收势后，发光树根之间才会短暂露出通道。":"Une grosse branche balaie d’abord au-dessus de votre tête ; son retour rase le sol. Le passage entre les racines lumineuses ne s’ouvre brièvement qu’après la fin de la deuxième attaque.","楼梯下 · 楼上小卧室 · 17 号房 · 海上小屋":"ESCALIER · CHAMBRE · N° 17 · CABANE","H. Potter · 楼梯下的储物间":"H. Potter · Placard sous l’escalier","I · 楼梯下储物间":"I · PLACARD SOUS L’ESCALIER","H. Potter · 楼上最小的卧室":"H. Potter · Plus petite chambre à l’étage","II · 楼上最小卧室":"II · PLUS PETITE CHAMBRE","H. Potter · 铁路景观酒店 17 号房":"H. Potter · Hôtel Railview, chambre 17","III · 铁路旅馆 17 号房":"III · CHAMBRE 17 DU RAILVIEW","H. Potter · 海上岩礁小屋":"H. Potter · Cabane sur le rocher, en mer","IV · 海上岩礁小屋":"IV · CABANE SUR LE ROCHER",楼梯下的储物间:"PLACARD SOUS L’ESCALIER",通往对角巷:"PORTE DU CHEMIN DE TRAVERSE","V. Dursley · 女贞路前门":"V. Dursley · Porte d’entrée de Privet Drive","D. Dursley · 厨房餐桌":"D. Dursley · Table de la cuisine","H. Potter · 动物园爬虫馆":"H. Potter · Vivarium du zoo","H. Potter · 石墙中学":"H. Potter · Collège Stonewall","顺序错误：“{destination}”不是下一处藏身地。四封信重新飞散！":"Chronologie incorrecte : « {destination} » n’est pas la prochaine cachette. Les quatre lettres se dispersent à nouveau !","时间线正确：{destination} · {count} / 4":"Chronologie confirmée : {destination} · {count} / 4","时间线完成：循红蜡封印前往通往对角巷的门":"Chronologie terminée : suivez les sceaux de cire cramoisie jusqu’à la porte du Chemin de Traverse.","四处藏身地首尾相接，信上的猩红 H 蜡印化成了门钥匙。":"Les quatre cachettes forment un seul voyage ; les sceaux H cramoisis sont devenus une clé.","四封信按时间顺序排列完成——通往对角巷的门已开启！":"Les quatre lettres sont dans l’ordre chronologique — la porte du Chemin de Traverse est ouverte !","邮槽绿粉 · 蛋糕丝线 · 壁炉三环":"POUDRE DE LA FENTE · FIL DU GÂTEAU · TROIS ANNEAUX DU FOYER",堵塞的黄铜邮槽:"Fente aux lettres en laiton bloquée","I · 绿粉由门外进入":"I · LA POUDRE VERTE VIENT DU DEHORS",悬浮的紫罗兰布丁蛋糕:"Gâteau-pudding violet en lévitation","II · 奶油下有绕行丝线":"II · FIL ORBITAL SOUS LE GLAÇAGE",三环封印的飞路炉:"Cheminée de poudre de Cheminette aux trois sceaux","III · 三环汇聚于炉心":"III · TROIS ANNEAUX VERS LE FOYER",裂口尖叫油灯:"Lampe à huile fendue et hurlante","诱饵 · 红线接回警报":"LEURRE · LE FIL ROUGE FERME L’ALARME","“{label}”接通了报警回路！封锁重置，干扰增强至 {count}。":"« {label} » a refermé le circuit d’alarme ! Le blocus recommence ; l’interférence monte à {count}.","邮槽里的绿色粉尘来自室外。残痕没有走直线，而是绕向被悬浮咒托起的蛋糕。":"La poudre verte de la fente vient du dehors. Sa trace contourne la pièce vers le gâteau en lévitation.","蛋糕下方的魔力丝线指向壁炉。最后解除飞路炉上的三环封印。":"Le fil magique sous le gâteau désigne la cheminée. Brisez enfin les trois sceaux de Cheminette.","住宅封锁痕迹已确认 {count} / 3":"Traces du blocus confirmées : {count} / 3","{label}的残痕已固定，绿色干扰显露下一段走向。":"La trace de {label} est fixée ; l’interférence verte révèle la direction suivante.","精灵的封锁完成：邮槽、悬浮蛋糕与飞路炉的干扰链已全部解除":"Blocus de l’elfe terminé : la chaîne entre la fente, le gâteau flottant et la cheminée est rompue.","绿色粉尘标出入口，悬浮蛋糕暴露绕行，飞路封印是最终汇聚点。住宅出口重新打开。":"La poudre verte marquait l’entrée, le gâteau le détour et les sceaux le point de convergence. La sortie de la maison est rouverte.","第二部 · 第一章 · 第 1 关完成":"Tome 2 · Chapitre 1 · Salle 1 terminée","三重封锁碎成绿色星屑——正在登上失控飞车，追赶霍格沃茨特快！":"Le triple blocus éclate en étincelles vertes — embarquement dans la voiture folle pour rattraper le Poudlard Express !","飞车关卡已加载：先调整行李配重，再对准铁路，最后短促给油。":"Voiture volante chargée : déplacez les bagages, alignez-vous sur la voie, puis accélérez par impulsions.","禁区守卫 · 三首同眠 · 活板门在爪下":"GARDIEN INTERDIT · TROIS TÊTES ENDORMIES · TRAPPE SOUS LES PATTES","褪色乐谱：气息 → 琴弦 → 发条":"PARTITION EFFACÉE : SOUFFLE → CORDES → MÉCANISME",银木横笛:"Flûte traversière en bois argenté","I · 七孔夜风之息":"I · VENT NOCTURNE PAR SEPT TROUS",月弦竖琴:"Harpe aux cordes lunaires","II · 新月琴框托梦":"II · LE CROISSANT PORTE LE RÊVE",星纹发条音乐盒:"Boîte à musique étoilée","III · 黄铜滚筒封住鼾声":"III · LE CYLINDRE SCELLE LE RONFLEMENT","“{label}”打乱了旋律！三颗头同时睁眼，惊醒次数：{count}。":"« {label} » a brisé la mélodie ! Les trois têtes ouvrent les yeux ; réveils : {count}.","横笛的七孔送出夜风，左首已经合眼。现在用月弦托住刚形成的梦境。":"Le vent nocturne traverse les sept trous de la flûte et ferme les yeux de la tête gauche. Portez maintenant le rêve naissant avec les cordes lunaires.","竖琴的九根银弦让中首伏下。最后转动黄铜滚筒，以稳定发条节拍封住鼾声。":"Les neuf cordes d’argent abaissent la tête centrale. Tournez enfin le cylindre de laiton pour sceller le ronflement sur un rythme régulier.","安眠旋律已完成 {count} / 3":"Berceuse accomplie : {count} / 3","{label}奏效，一颗头缓缓合上琥珀色双眼。":"{label} fonctionne ; une tête ferme lentement ses yeux ambrés.","城堡禁区完成：三颗头都已沉睡，爪下的活板门安全开启":"Couloir interdit terminé : les trois têtes dorment et la trappe sous leurs pattes peut être ouverte.","七孔夜风、九根月弦与黄铜发条叠成摇篮曲。铁箍活板门下吹来潮湿植物的气息。":"Le vent des sept trous, neuf cordes lunaires et le mécanisme de laiton composent la berceuse. Un air de plantes humides monte de la trappe ferrée.","第一部 · 第二章完成":"Tome 1 · Chapitre 2 terminé",禁区守门人:"Le gardien du couloir interdit","三头守卫沉入梦乡——第二章通关，正在前往“镜中秘密”！":"Le gardien à trois têtes s’endort — chapitre 2 terminé, en route vers Les secrets du miroir !","第三章已加载：在飞行训练场按风向与重量送回三件遗失物。":"Chapitre 3 chargé : rendez trois objets perdus selon le vent et leur poids sur le terrain de vol.","行李后移 · 红灯校向 · 蓝区脉冲":"BAGAGES À L’ARRIÈRE · SIGNAL ROUGE · IMPULSIONS BLEUES",后移行李配重:"Reculer les bagages","I · 皮箱压低车尾":"I · LA MALLE ABAISSE L’ARRIÈRE",对准红色铁路灯:"S’aligner sur le signal rouge","II · 准星重合红灯":"II · VISEUR SUR LE SIGNAL ROUGE",短促脉冲油门:"Accélérer par impulsions","III · 蓝区三次短推":"III · TROIS BREVES IMPULSIONS BLEUES",一脚踩死油门:"Écraser l’accélérateur","诱饵 · 红区持续过热":"LEURRE · SURCHAUFFE DANS LE ROUGE","“{label}”让引擎过热！飞车翻滚，乱流升至 {count}。":"« {label} » a fait surchauffer le moteur ! La voiture a fait un tonneau et les turbulences montent à {count}.","皮箱后移后车尾下沉，车头恢复水平。现在让方向盘准星与铁路尽头的红色信号灯重合。":"La malle reculée abaisse l’arrière et remet le capot à niveau. Alignez maintenant le viseur du volant sur le signal rouge au bout de la voie.","航向已经锁定，但水温仍在红区。把细油门杆短推三次，不能踩住宽踏板。":"Le cap est verrouillé, mais la température reste dans le rouge. Poussez trois fois brièvement la fine manette ; ne maintenez pas la large pédale.","飞车稳定步骤已完成 {count} / 3":"Étapes de stabilisation : {count} / 3","{label}生效，飞车姿态恢复了一部分。":"{label} fonctionne ; la voiture volante retrouve une partie de sa stabilité.","飞车失控完成：配重、航向与脉冲油门让车辆安全追上列车":"Voiture volante terminée : le lest, le cap et les impulsions d’accélérateur permettent de rattraper le train sans danger.","皮箱后移压低车尾，红灯准星校正航向，蓝区三次脉冲避免引擎过热。远处的打人柳正在挥动枝条。":"La malle reculée a abaissé l’arrière, le viseur rouge a corrigé le cap et trois impulsions bleues ont évité la surchauffe. Le Saule cogneur s’agite au loin.","第二部 · 第一章 · 第 2 关完成":"Tome 2 · Chapitre 1 · Salle 2 terminée","飞车擦过高架桥，稳稳落在城堡草地——打人柳的粗枝突然苏醒！":"La voiture frôle le viaduc et se pose sur la pelouse du château — les lourdes branches du Saule cogneur s’éveillent soudain !","打人柳关卡已加载：等待高扫、俯身避低返，再冲过树根间隙。":"Saule cogneur chargé : attendez le balayage haut, baissez-vous sous le retour bas, puis foncez entre les racines.","破风高扫 · 落叶低返 · 绿根开隙":"BALAYAGE HAUT DANS LE VENT · RETOUR BAS DANS LES FEUILLES · PASSAGE VERT",等待高枝扫过:"Attendre le balayage haut","I · 风声在头顶":"I · VENT AU-DESSUS",俯身避开低返:"Se baisser sous le retour bas","II · 落叶贴地":"II · FEUILLES AU RAS DU SOL",冲过露根间隙:"Foncer entre les racines","III · 树洞显露":"III · LE CREUX S’OUVRE",立刻直冲树洞:"Foncer tout de suite vers le creux","诱饵 · 粗枝蓄力":"LEURRE · GROSSE BRANCHE ARMÉE","“{label}”踩错节拍！粗枝扫中肩膀，擦伤升至 {count}。":"« {label} » a rompu le rythme ! Une branche frappe votre épaule ; contusions : {count}.","高枝带着破风声从头顶扫过。枝梢正在贴着落叶低低返程，立刻俯身。":"La branche haute fend l’air au-dessus de vous. Son extrémité revient bas parmi les feuilles mortes : baissez-vous.","低枝擦过背后，主干短暂失去平衡。发光树根之间的缝隙就是第三拍。":"La branche basse frôle votre dos et le tronc perd brièvement l’équilibre. Le passage entre les racines lumineuses forme le troisième temps.","打人柳安全节拍已完成 {count} / 3":"Temps sûrs confirmés : {count} / 3","{label}：动作与枝条节拍吻合。":"{label} : votre mouvement suit le rythme des branches.","打人柳下完成：高扫、低返、露根三拍全部避开，树洞通道已经打开":"Saule cogneur terminé : balayage haut, retour bas et passage entre les racines évités ; le creux est ouvert.","破风声预告高扫，贴地落叶暴露低返，两次攻击后的收势形成通往树洞的安全窗口。":"L’air fendu annonçait le balayage haut, les feuilles au sol révélaient le retour bas et la pause après les deux attaques ouvrait une fenêtre sûre vers le creux.","第二部 · 第一章 · 第 3 关完成":"Tome 2 · Chapitre 1 · Salle 3 terminée",树洞开启:"Le creux s’ouvre","你滑入树根下的安全通道。城堡走廊尽头，一行血字正从潮湿石墙上浮现……":"Vous vous glissez dans le passage sous les racines. Au bout d’un couloir du château, une inscription sanglante apparaît sur la pierre humide…"}},Uu="hogwarts-escape-language",dv=[{code:"zh-CN",label:"中文",nativeLabel:"简体中文"},{code:"en",label:"English",nativeLabel:"English"},{code:"fr",label:"Français",nativeLabel:"Français"}],Ac={"zh-CN":{"document.title":"霍格沃茨密室逃脱 3D","start.brand":"霍格沃茨","start.title":"密室逃脱","start.description":"横跨 7 部曲、28 章与 112 套密室关卡，从第一封猫头鹰来信走到霍格沃茨最终决战。","start.play":"进入第一关","start.continue":"继续游戏","start.restart":"重新开始","start.campaign":"七部曲地图","start.language":"🌐 中文","voice.play":"▶ 播放中文旁白","voice.stop":"■ 停止旁白","voice.ready":"按下后播放，不会自动播放","voice.loading":"正在加载旁白…","voice.playing":"正在播放中文旁白","voice.failed":"旁白暂时不可用，字幕仍可阅读","voice.subtitle":"欢迎来到霍格沃茨。猫头鹰送来的四封信，藏着逃离密室的正确顺序。请观察地址变化，准备好后开始探索。","help.desktop":"WASD 移动 · 鼠标观察 · E 互动 · ESC 释放鼠标","help.mobile":"左侧摇杆移动 · 右半屏滑动观察 · 点击“互动”操作","mobile.look":"滑动转向","mobile.interact":"互动","campaign.title":"七部曲密室地图","campaign.stats":"{books} 部曲 · {chapters} 章 · {rooms} 关","campaign.book":"第 {number} 部","campaign.chapter":"第 {number} 章","campaign.difficulty":"难度 {start}–{end}","campaign.play":"开始本章","campaign.upcoming":"已解锁 · 即将启程","campaign.locked":"尚未解锁","campaign.close":"关闭地图","campaign.selectBook":"选择部曲","hud.roomKicker":"第 {book} 部 · 第 {chapter} 章 · 第 {room} 关","transition.next":"下一关","action.touch":"点击互动","action.keyboard":"按 E","counter.letters":"信件顺序 {count} / 4","counter.shopping":"采购 {count} / 4 · 余 {remaining} G","counter.wand":"匹配阶段 {count} / 3 · 失控反馈 {mistakes}","counter.sorting":"分院线索 {count} / 4 · 误判 {mistakes}","counter.stairs":"路线 {count} / 3 · 时间惩罚 {penalty} 秒","counter.portraits":"证词 {count} / 3 · 怀疑 {value}","counter.patrol":"潜行节点 {count} / 3 · 警戒 {value}","counter.lullaby":"安眠旋律 {count} / 3 · 惊醒 {value}","counter.flying":"安全投递 {count} / 3 · 乱流 {value}","counter.troll":"逃生机关 {count} / 3 · 危险 {value}","counter.library":"历史书脊 {count} / 3 · 尖叫 {value}","counter.mirror":"现实所需 {count} / 3 · 幻象增强 {value}","counter.snare":"光照节奏 {count} / 3 · 藤蔓收紧 {value}","counter.keys":"钥匙线索 {count} / 3 · 追逐失误 {value}","counter.chess":"安全棋路 {count} / 3 · 被吃棋子 {value}","counter.stone":"密室线索 {count} / 3 · 腐化诱惑 {value}","counter.elf":"封锁痕迹 {count} / 3 · 干扰增强 {value}","counter.car":"飞车校准 {count} / 3 · 乱流 {value}","counter.willow":"安全节拍 {count} / 3 · 擦伤 {value}","test.chineseOnly":"仅中文"},en:{"document.title":"Hogwarts Escape Room 3D","start.brand":"HOGWARTS","start.title":"Escape Room","start.description":"A journey across 7 books, 28 chapters, and 112 escape rooms—from the first owl letter to the final battle at Hogwarts.","start.play":"Enter Room One","start.continue":"Continue","start.restart":"Start Over","start.campaign":"Seven-Book Map","start.language":"🌐 English","voice.play":"▶ Play English narration","voice.stop":"■ Stop narration","voice.ready":"Plays only when pressed—never automatically","voice.loading":"Loading narration…","voice.playing":"Playing English narration","voice.failed":"Narration is unavailable; subtitles remain available","voice.subtitle":"Welcome to Hogwarts. Four owl-delivered letters hide the correct order for escaping this chamber. Observe how each address changes, then begin your search.","help.desktop":"WASD move · Mouse look · E interact · ESC release mouse","help.mobile":"Left stick to move · Swipe right to look · Tap Interact","mobile.look":"Swipe to look","mobile.interact":"Interact","campaign.title":"Seven-Book Escape Map","campaign.stats":"{books} books · {chapters} chapters · {rooms} rooms","campaign.book":"Book {number}","campaign.chapter":"Chapter {number}","campaign.difficulty":"Difficulty {start}–{end}","campaign.play":"Begin Chapter","campaign.upcoming":"Unlocked · Coming Soon","campaign.locked":"Locked","campaign.close":"Close map","campaign.selectBook":"Select a book","hud.roomKicker":"Book {book} · Chapter {chapter} · Room {room}","transition.next":"Next Room","action.touch":"Tap","action.keyboard":"Press E to","counter.letters":"Letter order {count} / 4","counter.shopping":"Shopping {count} / 4 · {remaining} G left","counter.wand":"Wand match {count} / 3 · Wild feedback {mistakes}","counter.sorting":"Sorting clues {count} / 4 · Mistakes {mistakes}","counter.stairs":"Route {count} / 3 · Time penalty {penalty}s","counter.portraits":"Testimony {count} / 3 · Suspicion {value}","counter.patrol":"Stealth nodes {count} / 3 · Alert {value}","counter.lullaby":"Lullaby {count} / 3 · Wakefulness {value}","counter.flying":"Safe deliveries {count} / 3 · Turbulence {value}","counter.troll":"Escape devices {count} / 3 · Danger {value}","counter.library":"Historical spines {count} / 3 · Noise {value}","counter.mirror":"Real needs {count} / 3 · Illusion {value}","counter.snare":"Light rhythm {count} / 3 · Constriction {value}","counter.keys":"Key clues {count} / 3 · Pursuit errors {value}","counter.chess":"Safe moves {count} / 3 · Pieces lost {value}","counter.stone":"Chamber clues {count} / 3 · Corruption {value}","counter.elf":"Blockade traces {count} / 3 · Interference {value}","counter.car":"Car calibration {count} / 3 · Turbulence {value}","counter.willow":"Safe rhythm {count} / 3 · Bruises {value}"},fr:{"document.title":"Hogwarts — Salle d’évasion 3D","start.brand":"POUDLARD","start.title":"Salle d’évasion","start.description":"Un voyage à travers 7 tomes, 28 chapitres et 112 salles, de la première lettre apportée par un hibou jusqu’à la bataille finale de Poudlard.","start.play":"Entrer dans la première salle","start.continue":"Continuer","start.restart":"Recommencer","start.campaign":"Carte des sept tomes","start.language":"🌐 Français","voice.play":"▶ Écouter la narration en français","voice.stop":"■ Arrêter la narration","voice.ready":"Lecture uniquement sur demande, jamais automatique","voice.loading":"Chargement de la narration…","voice.playing":"Narration en français en cours","voice.failed":"La narration est indisponible ; les sous-titres restent affichés","voice.subtitle":"Bienvenue à Poudlard. Quatre lettres apportées par des hiboux cachent l’ordre qui permet de quitter cette salle. Observez chaque changement d’adresse, puis commencez vos recherches.","help.desktop":"WASD : avancer · Souris : regarder · E : interagir · Échap : libérer la souris","help.mobile":"Joystick gauche : avancer · Balayer à droite : regarder · Toucher Interagir","mobile.look":"Balayer pour regarder","mobile.interact":"Interagir","campaign.title":"Carte d’évasion des sept tomes","campaign.stats":"{books} tomes · {chapters} chapitres · {rooms} salles","campaign.book":"Tome {number}","campaign.chapter":"Chapitre {number}","campaign.difficulty":"Difficulté {start}–{end}","campaign.play":"Commencer le chapitre","campaign.upcoming":"Déverrouillé · Bientôt disponible","campaign.locked":"Verrouillé","campaign.close":"Fermer la carte","campaign.selectBook":"Choisir un tome","hud.roomKicker":"Tome {book} · Chapitre {chapter} · Salle {room}","transition.next":"Salle suivante","action.touch":"Toucher pour","action.keyboard":"Appuyer sur E pour","counter.letters":"Ordre des lettres {count} / 4","counter.shopping":"Achats {count} / 4 · reste {remaining} G","counter.wand":"Accord de la baguette {count} / 3 · réactions {mistakes}","counter.sorting":"Indices de Répartition {count} / 4 · erreurs {mistakes}","counter.stairs":"Parcours {count} / 3 · pénalité {penalty} s","counter.portraits":"Témoignages {count} / 3 · soupçon {value}","counter.patrol":"Étapes furtives {count} / 3 · alerte {value}","counter.lullaby":"Berceuse {count} / 3 · éveil {value}","counter.flying":"Livraisons sûres {count} / 3 · turbulences {value}","counter.troll":"Mécanismes de fuite {count} / 3 · danger {value}","counter.library":"Dos historiques {count} / 3 · vacarme {value}","counter.mirror":"Besoins réels {count} / 3 · illusion {value}","counter.snare":"Rythme lumineux {count} / 3 · constriction {value}","counter.keys":"Indices de clé {count} / 3 · erreurs {value}","counter.chess":"Coups sûrs {count} / 3 · pièces perdues {value}","counter.stone":"Indices de la chambre {count} / 3 · corruption {value}","counter.elf":"Traces du blocus {count} / 3 · interférence {value}","counter.car":"Réglage de la voiture {count} / 3 · turbulences {value}","counter.willow":"Rythme sûr {count} / 3 · contusions {value}"}};function Qs(i){return dv.some(({code:e})=>e===i)?i:"zh-CN"}function hv(i){return Qs(i.getItem(Uu))}function fv(i,e){const t=Qs(e);return i.setItem(Uu,t),t}function pv(i,e){return i.replace(/\{(\w+)\}/g,(t,n)=>e[n]??`{${n}}`)}function er(i){const e=Qs(i);return(t,n={})=>{const s=Ac[e][t]??Ac["zh-CN"][t]??t;return pv(s,n)}}function Ye(i,e){const t=Qs(i);return t==="zh-CN"?e:uv[t]?.[e]??e}function mv(i,{book:e,chapter:t,room:n,name:s,objectiveText:r,hint:o}){const a=Qs(i);return{kicker:er(a)("hud.roomKicker",{book:e,chapter:t,room:n}),name:Ye(a,s),objectiveText:Ye(a,r),hint:Ye(a,o)}}function gv({progress:i,book:e,chapter:t,playable:n,t:s=er("zh-CN")}){const r=e===1&&t===1||cv(i,{book:e,chapter:t});return n&&r?{className:"chapter-action playable",text:s("campaign.play"),disabled:!1}:r?{className:"chapter-action unlocked",text:s("campaign.upcoming"),disabled:!0}:{className:"chapter-action",text:s("campaign.locked"),disabled:!0}}function vv({onPlay:i,getProgress:e=()=>null,getLanguage:t=()=>"zh-CN",getTranslator:n=()=>er(t())}){const s=document.querySelector("#campaign-screen"),r=document.querySelector("#book-tabs"),o=document.querySelector("#chapter-grid"),a=document.querySelector("#campaign-book-title"),l=document.querySelector("#campaign-book-subtitle"),c=document.querySelector("#campaign-theme"),u=document.querySelector("#campaign-stats");let d=0;function h(){const f=n(),E=t();r.replaceChildren(...Gs.map((b,v)=>{const w=document.createElement("button");return w.className=`book-tab${v===d?" active":""}`,w.type="button",w.innerHTML=`<span>${f("campaign.book",{number:b.number})}</span><strong>${Ye(E,b.title)}</strong>`,w.addEventListener("click",()=>{d=v,g()}),w}))}function p(f){const E=n(),b=t();o.replaceChildren(...f.chapters.map((v,w)=>{const T=document.createElement("article");T.className="chapter-card";const C=v.rooms[0].difficulty,L=v.rooms.at(-1).difficulty,S=v.rooms.some(W=>W.status==="playable"),y=gv({progress:e(),book:f.number,chapter:w+1,playable:S,t:E});T.classList.toggle("unlocked",y.className.includes("unlocked"));const R=document.createElement("div");R.className="chapter-heading",R.innerHTML=`<span>${E("campaign.chapter",{number:String(w+1).padStart(2,"0")})}</span><strong>${Ye(b,v.title)}</strong><em>${E("campaign.difficulty",{start:C,end:L})}</em>`;const B=document.createElement("ol");B.className="room-list";for(const W of v.rooms){const Z=document.createElement("li");Z.innerHTML=`<span>${Ye(b,W.title)}</span><small>${Ye(b,W.puzzle)}</small>`,B.appendChild(Z)}const H=document.createElement("button");return H.type="button",H.className=y.className,H.textContent=y.text,H.disabled=y.disabled,S&&H.addEventListener("click",()=>{m(),i(v.rooms.find(W=>W.status==="playable"))}),T.append(R,B,H),T}))}function g(){const f=n(),E=t(),b=Gs[d];u.textContent=f("campaign.stats",ov),s.style.setProperty("--campaign-primary",b.palette[0]),s.style.setProperty("--campaign-accent",b.palette[1]),s.style.setProperty("--campaign-dark",b.palette[2]),a.textContent=`${f("campaign.book",{number:b.number})} · ${Ye(E,b.title)}`,l.textContent=Ye(E,b.subtitle),c.textContent=Ye(E,b.visualTheme),h(),p(b)}function _(){g(),s.classList.remove("hidden"),document.body.classList.add("campaign-open")}function m(){s.classList.add("hidden"),document.body.classList.remove("campaign-open")}return document.querySelector("#campaign-button").addEventListener("click",_),document.querySelector("#campaign-close").addEventListener("click",m),addEventListener("keydown",f=>{f.code==="Escape"&&!s.classList.contains("hidden")&&m()}),g(),{openCampaign:_,closeCampaign:m,render:g}}const _v={intro:{"zh-CN":"audio/intro-zh-CN.mp3",en:"audio/intro-en.mp3",fr:"audio/intro-fr.mp3"}};function xv(i,e){const t=_v[i];return t?t[e]??t["zh-CN"]??null:null}function bv({playbackState:i,muted:e}){return i==="idle"&&!e}async function yv({audio:i,source:e,muted:t}){if(!e)return t?"muted":"unavailable";i.src=e;try{return await i.play(),"playing"}catch{return"failed"}}const Cc=["lower","moon","upper"],Rc=["scholar","knight","lady"],Ic=["armor","cat","tapestry"],Pc=["flute","harp","music-box"];function Sv(i,e){const t=Pc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,wakefulness:(i.wakefulness??0)+1,unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Pc.length,accepted:!0}}function Mv(i,e){const t=Cc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,timePenalty:(i.timePenalty??0)+5,unlocked:!1,accepted:!1};const n=[...i.progress,e];return{progress:n,mistakes:i.mistakes,...i.timePenalty!==void 0?{timePenalty:i.timePenalty}:{},unlocked:n.length===Cc.length,accepted:!0}}function Ev(i,e){const t=Rc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,suspicion:(i.suspicion??0)+1,unlocked:!1,accepted:!1};const n=[...i.progress,e],s=n.length===Rc.length;return{progress:n,mistakes:i.mistakes,...i.suspicion!==void 0?{suspicion:i.suspicion}:{},unlocked:s,accepted:!0,...s?{password:"月桂之后，银钥先行"}:{}}}function wv(i,e){const t=Ic[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,alert:(i.alert??0)+1,unlocked:!1,accepted:!1};const n=[...i.progress,e];return{progress:n,mistakes:i.mistakes,...i.alert!==void 0?{alert:i.alert}:{},unlocked:n.length===Ic.length,accepted:!0}}const Lc=["scarf-keeper","notebook-scholar","compass-first-year"],Dc=["seal-pipe","levitate-rubble","lower-beam"],Uc=["founders-index","dragon-ledger","moon-chronicle"],Nc=["wool-cloak","brass-lantern","shared-token"];function Tv(i,e){const t=Nc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,illusion:(i.illusion??0)+1,feedback:"desire-not-need",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Nc.length,accepted:!0}}function Av(i,e){const t=Uc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,noise:(i.noise??0)+1,unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Uc.length,accepted:!0}}function Cv(i,e){const t=Dc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,danger:(i.danger??0)+1,unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Dc.length,accepted:!0}}function Rv(i,e){const t=Lc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,turbulence:(i.turbulence??0)+1,unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Lc.length,accepted:!0}}const Oc=["black-flame-potion","empty-pocket-reflection","protect-the-stone"];function Iv(i,e){const t=Oc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,corruption:i.corruption+1,feedback:"intent-rejected",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Oc.length,accepted:!0}}const Fc=["pawn-decoy","knight-fork","rook-advance"];function Pv(i,e){const t=Fc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,captured:i.captured+i.progress.length+1,feedback:"piece-captured",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Fc.length,accepted:!0}}const kc=["relax-grip","kindle-bluebell","hold-light"],zc=["bent-wing","clockwise-drift","silver-key"];function Lv(i,e){const t=zc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,pursuit:i.pursuit+1,feedback:"key-swarm-scattered",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===zc.length,accepted:!0}}function Dv(i,e){const t=kc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,constriction:(i.constriction??0)+1,feedback:"vines-tightened",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===kc.length,accepted:!0}}const Bc=["wait-high-swing","duck-low-return","dash-root-gap"];function Uv(i,e){const t=Bc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,bruises:i.bruises+1,feedback:"branch-hit",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Bc.length,accepted:!0}}const Hc=["balance-luggage","align-railway","pulse-throttle"];function Nv(i,e){const t=Hc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,turbulence:i.turbulence+1,feedback:"car-spinning",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Hc.length,accepted:!0}}const Gc=["jammed-post","levitating-cake","sealed-floo"];function Ov(i,e){const t=Gc[i.progress.length];if(e!==t)return{progress:[],mistakes:i.mistakes+1,interference:i.interference+1,feedback:"blockade-strengthened",unlocked:!1,accepted:!1};const n=[...i.progress,e];return{...i,progress:n,unlocked:n.length===Gc.length,accepted:!0}}const Fv=[{side:"left",feathers:4,bend:0},{side:"right",feathers:4,bend:0}],Ir=(i={})=>({axis:"horizontal",shaftLength:1.55,bowRadius:.42,teeth:3,metal:"steel",wings:Fv.map(e=>({...e})),...i}),kv=[{id:"bent-wing",label:"左翼弯折的钥影",clue:"I · 使用损伤",x:-4.8,display:{z:.7},color:9283527,model:Ir({wings:[{side:"left",feathers:4,bend:-.48},{side:"right",feathers:4,bend:0}]}),evidence:{damage:"bent-left-wing"}},{id:"clockwise-drift",label:"顺时针下沉轨迹",clue:"II · 负重飞行",x:-1.6,display:{z:.7},color:7507640,model:Ir({shaftLength:1.72}),evidence:{motion:"clockwise-descending",orbitMarkers:7}},{id:"silver-key",label:"小型银钥匙",clue:"III · 银屑吻合",x:1.6,display:{z:.7},color:12175579,model:Ir({shaftLength:1.4,bowRadius:.36,metal:"silver"}),evidence:{lockMaterial:"silver"}},{id:"gold-key",label:"华丽金钥匙",clue:"诱饵 · 锁孔无金屑",x:4.8,display:{z:.7},color:12093749,model:Ir({shaftLength:1.68,bowRadius:.58,teeth:4,metal:"gold"}),evidence:{lockMaterial:"mismatch"}}],Nu={wallClue:"左翼折痕 · 顺时针下沉 · 银屑锁孔",dynamic:{roomLoadedMessage:"飞钥匙房已加载：依次核对折翼、飞行轨迹和锁孔银屑。",wrong:"“{label}”惊散了钥匙群！追逐失误升至 {count}，三条证据需要重新确认。",firstHint:"左翼折痕与门框刮痕一致。现在观察负重钥匙群，寻找顺时针下沉的轨迹。",secondHint:"下沉轨迹锁定了小型钥匙。最后核对锁孔银屑，排除华丽但材质不符的金钥匙。",progress:"飞钥匙证据已确认 {count} / 3",accepted:"{label}与现场证据吻合，钥匙群的范围缩小了。",completeObjective:"飞钥匙房完成：折翼银钥匙准确嵌入门锁，通往巫师棋盘的石门已经开启",completeHint:"折翼证明它被使用过，顺时针下沉暴露负重，银屑完成最终材质核对。前方传来巨大棋子的脚步声。",transitionKicker:"第一部 · 第四章 · 第 2 关完成",transitionTitle:"折翼银钥匙",completionMessage:"银钥匙旋转一周，棋盘石门轰然开启——正在进入巫师棋盘！",nextRoomMessage:"巫师棋已加载：先诱敌，再双攻，最后沿空线推进。"}};function In(i,e,t={}){const n=Nu.dynamic[e];return Ye(i,n).replace(/\{(\w+)\}/g,(r,o)=>t[o]??`{${o}}`)}const un=(i,e,t,n=.12,s=4,r=3)=>({id:i,layer:e,points:t,radius:n,leaves:s,thorns:r}),zv=[un("exit-crown-left","exit",[[-3.8,.2,-2.8],[-2.9,1,-2.3],[-2,2,-2],[-.8,2.6,-1.9]],.2,7,5),un("exit-crown-right","exit",[[3.8,.2,-2.8],[2.9,1,-2.3],[2,2,-2],[.8,2.6,-1.9]],.2,7,5),un("exit-lattice-left","exit",[[-3.5,.1,-1],[-2.6,.9,-1.5],[-1.8,1.4,-2.2],[-1.2,.2,-2.8]],.16,6,4),un("exit-lattice-right","exit",[[3.5,.1,-1],[2.6,.9,-1.5],[1.8,1.4,-2.2],[1.2,.2,-2.8]],.16,6,4),un("west-climber-a","wall",[[-8.6,.1,2.5],[-8.2,1.8,1.7],[-8.5,3.9,.5],[-7.7,6.6,-.6]],.14,6,4),un("west-climber-b","wall",[[-8.5,.1,-5],[-7.9,1.7,-4.1],[-8.4,4.2,-3.2],[-7.6,6.7,-2]],.11,5,4),un("east-climber-a","wall",[[8.6,.1,2.1],[8,2,1.2],[8.5,4,0],[7.7,6.6,-1]],.14,6,4),un("east-climber-b","wall",[[8.5,.1,-5.2],[7.8,1.8,-4.3],[8.4,4,-3.1],[7.5,6.7,-1.8]],.11,5,4),un("ceiling-arch-a","ceiling",[[-7.5,6.7,1.8],[-4.8,6.4,.6],[-1.8,6.8,-.5],[1,6.35,-1.4]],.12,7,4),un("ceiling-arch-b","ceiling",[[7.5,6.7,2.2],[4.8,6.3,.9],[2,6.8,-.4],[-.9,6.35,-1.5]],.12,7,4),un("ceiling-cross-a","ceiling",[[-6.5,6.65,-5.8],[-3.5,6.25,-4.4],[.1,6.75,-3.2],[3.5,6.35,-2.2]],.1,6,3),un("ceiling-cross-b","ceiling",[[6.6,6.65,-5.6],[3.5,6.3,-4.5],[.2,6.7,-3.1],[-3.3,6.3,-2.1]],.1,6,3),un("floor-runner-left","exit",[[-7.8,.08,5.8],[-5.6,.2,3.7],[-4.1,.12,1.1],[-2.7,.3,-1.3]],.15,6,5),un("floor-runner-right","exit",[[7.8,.08,5.8],[5.6,.2,3.7],[4.1,.12,1.1],[2.7,.3,-1.3]],.15,6,5)],Bv=[{id:"relax-grip",label:"放松呼吸",clue:"I · 停止挣扎",x:-3.9,color:7977372,model:{kind:"breath-orb",rings:3,breathColor:11067852}},{id:"kindle-bluebell",label:"点燃蓝铃冷焰",clue:"II · 微光驱藤",x:-1.3,color:5213905,model:{kind:"bluebell-flame",petals:6,flameColor:7584255}},{id:"hold-light",label:"维持恒定光照",clue:"III · 稳住三拍",x:1.3,color:8637672,model:{kind:"steady-lantern",pulses:3,flameColor:10411263}},{id:"flare-brightly",label:"猛烈爆燃",clue:"诱饵 · 惊动根网",x:3.9,color:14048317,model:{kind:"wild-flare",flameCount:7,flameColor:16738866,safe:!1}}],Ou={wallClue:"停止挣扎 · 蓝铃冷焰 · 三拍恒光",dynamic:{roomLoadedMessage:"地下试炼已加载：放松藤蔓缠绕，以蓝铃冷焰和三拍恒光打开根网。",wrong:"“{label}”打乱节奏！根网骤然收紧至 {count} 级；先放松，再重新开始。",firstHint:"你停止挣扎，第一层藤蔓松开。现在点燃不会灼伤施法者的蓝铃冷焰。",secondHint:"冷焰逼退根须。最后保持三拍恒光，不要让亮度突然爆发。",progress:"魔鬼网光照节奏已完成 {count} / 3",accepted:"{label}奏效，地下出口上方的藤蔓正在退缩。",completeObjective:"魔鬼网完成：稳定冷焰驱散根网，通往飞钥匙房的地下出口已经开启",completeHint:"镇静削弱缠绕，蓝铃冷焰逼退藤蔓，三拍恒光打开根网。前方传来成群翅膀的振动声。",transitionKicker:"第一部 · 第四章 · 第 1 关完成",transitionTitle:"冷焰退藤",completionMessage:"魔鬼网缩回石缝——正在进入飞钥匙房！"}};function Gn(i,e,t={}){const n=Ou.dynamic[e];return Ye(i,n).replace(/\{(\w+)\}/g,(r,o)=>t[o]??`{${o}}`)}const Pr=(i,e={})=>({piece:i,height:1.75,material:"carved-stone",...e}),Ut={cellSize:1.3,boardStartX:-4.55,boardStartZ:-7.9,galleryZ:3,mobileCameraZ:8.8,mobileWallLabelSize:18},Hv=[{id:"pawn-decoy",label:"边兵诱敌",clue:"I · 引开主教",x:-3.3,display:{z:Ut.galleryZ,labelStyle:"pedestal-plaque"},mobileDisplay:{x:-1.35,z:Ut.galleryZ,scale:.68,plaqueWidth:1.15},color:10455404,model:Pr("pawn",{headRadius:.24})},{id:"knight-fork",label:"骑士双攻",clue:"II · 将军攻车",x:-1.1,display:{z:Ut.galleryZ,labelStyle:"pedestal-plaque"},mobileDisplay:{x:-.45,z:Ut.galleryZ,scale:.68,plaqueWidth:1.15},color:7902138,model:Pr("knight",{profile:"horse-head",maneRidges:4})},{id:"rook-advance",label:"城堡沿空线推进",clue:"III · 空线抵岸",x:1.1,display:{z:Ut.galleryZ,labelStyle:"pedestal-plaque"},mobileDisplay:{x:.45,z:Ut.galleryZ,scale:.68,plaqueWidth:1.15},color:8364420,model:Pr("rook",{battlements:6})},{id:"queen-charge",label:"王后强攻",clue:"诱饵 · 暴露全线",x:3.3,display:{z:Ut.galleryZ,labelStyle:"pedestal-plaque"},mobileDisplay:{x:1.35,z:Ut.galleryZ,scale:.68,plaqueWidth:1.15},color:11686492,model:Pr("queen",{crownSpikes:6})}],Fu={wallClue:"边兵牵制主教 · 骑士双攻 · 城堡穿过空线",dynamic:{wrong:"“{label}”暴露了棋路！巨棋吃掉已投入棋子，被吃总数升至 {count}。",firstHint:"边兵引开了黑主教。现在用骑士同时威胁国王与城堡，迫使黑方让出中央。",secondHint:"骑士双攻奏效，纵线已经清空。最后让城堡沿直线推进到对岸。",progress:"安全棋步已确认 {count} / 3",accepted:"{label}成立，巨型黑棋被迫改换阵形。",completeObjective:"巫师棋完成：仅以边兵诱敌，骑士与城堡已安全抵达对岸",completeHint:"诱敌打开斜线，双攻迫使让位，城堡穿过空线。最后的魔法石密室就在棋盘后方。",transitionKicker:"第一部 · 第四章 · 第 3 关完成",transitionTitle:"最少牺牲棋路",completionMessage:"白色城堡抵达对岸，火门显现——正在进入魔法石密室！",nextRoomMessage:"最终密室已加载：先解药剂逻辑，再辨镜像，最后证明守护意图。"}};function Fn(i,e,t={}){const n=Fu.dynamic[e];return Ye(i,n).replace(/\{(\w+)\}/g,(r,o)=>t[o]??`{${o}}`)}const vn=Object.freeze({galleryZ:3.05,mobileCameraZ:9,mobileWallLabelSize:18,mobileWallLabelWidth:3.2,potionRow:Object.freeze({count:7,smallestIndex:3,z:-5.65}),blackFlame:Object.freeze({columns:11,height:2.6,z:-3.9}),mirror:Object.freeze({frame:"ornate-gold-arch",inscription:"erised-reversed"})}),Lr=i=>({z:vn.galleryZ,labelStyle:"pedestal-plaque",x:i}),Dr=i=>({x:i,z:vn.galleryZ,scale:.55,plaqueWidth:.85}),Gv=Object.freeze([Object.freeze({id:"black-flame-potion",label:"最小银瓶",clue:"I · 穿越黑焰",x:-3.3,color:8485030,display:Lr(-3.3),mobileDisplay:Dr(-.9),model:Object.freeze({kind:"potion-bottle",rank:"smallest-of-seven",height:.68,liquid:"violet-black-flame-antidote"})}),Object.freeze({id:"empty-pocket-reflection",label:"空口袋镜影",clue:"II · 不占有",x:-1.1,color:6717345,display:Lr(-1.1),mobileDisplay:Dr(-.3),model:Object.freeze({kind:"mirror-figure",pocket:"empty-and-visible",stoneVisible:!1})}),Object.freeze({id:"protect-the-stone",label:"守护石的誓言",clue:"III · 只为保护",x:1.1,color:7705713,display:Lr(1.1),mobileDisplay:Dr(.3),model:Object.freeze({kind:"protective-hands",gesture:"open-shield",stonePosition:"beyond-reach"})}),Object.freeze({id:"seize-the-stone",label:"夺取石的手",clue:"诱饵 · 占有欲",x:3.3,color:10305356,display:Lr(3.3),mobileDisplay:Dr(.9),model:Object.freeze({kind:"grasping-hand",gesture:"closed-grasp",corruption:"red-cracks"})})]),za=Object.freeze({wallClue:"七瓶取最小 · 镜中口袋为空 · 双手只作守护",mirrorInscription:"厄里斯 · 欲望倒写显形",dynamic:Object.freeze({wrong:"“{label}”暴露了占有欲！线索消散，腐化诱惑升至 {count}。",firstHint:"最小银瓶让你穿过黑焰。现在观察镜中衣袋：真正不求占有的人，口袋里不会出现石头。",secondHint:"空口袋镜影证明你没有取石欲望。最后明确你的意图：保护它，而不是拥有它。",progress:"魔法石密室线索已确认 {count} / 3",accepted:"{label}通过了密室检验，镜面中的金光更加清晰。",completeObjective:"第一部完成：魔法石只向无意占有、决心守护的人显现",completeHint:"药剂穿过黑焰，空口袋识破欲望，守护誓言让魔法石安全显现。新的绿色干扰正在住宅中聚集。",transitionKicker:"第一部 · 魔法石完成",transitionTitle:"第二部 · 不祥警告",completionMessage:"守护之石化作金光——正在返回住宅，调查精灵留下的三重封锁！",nextRoomMessage:"第二部首关已加载：沿邮槽、蛋糕与飞路炉追踪绿色魔力残痕。"})});function kn(i,e,t={}){const n=za.dynamic[e];return Ye(i,n).replace(/\{(\w+)\}/g,(r,o)=>t[o]??`{${o}}`)}const Ur=i=>({material:"parchment",seal:"crimson-wax-h",width:.82,height:.5,wear:i}),Vv=[{id:"cupboard",chronology:1,destination:"H. Potter · 楼梯下的储物间",clue:"I · 楼梯下储物间",addressMark:"STAIRS",position:[-6.45,1,-3.1],rotation:[0,.55,0],envelope:Ur(["creased-corners","dust-smudges"]),model:{kind:"cupboard-door",landmarks:["sloped-door","stair-treads","brass-vent"]}},{id:"bedroom",chronology:2,destination:"H. Potter · 楼上最小的卧室",clue:"II · 楼上最小卧室",addressMark:"WINDOW",position:[6.3,1.5,3.7],rotation:[0,-.65,0],envelope:Ur(["creased-corners","window-scratches"]),model:{kind:"bedroom-window",landmarks:["blue-window","narrow-bed","roofline"]}},{id:"hotel-room-17",chronology:3,destination:"H. Potter · 铁路景观酒店 17 号房",clue:"III · 铁路旅馆 17 号房",addressMark:"ROOM 17",position:[-4.7,1.85,4.35],rotation:[0,.2,0],envelope:Ur(["rain-speckles","luggage-scuffs"]),model:{kind:"hotel-key",landmarks:["brass-17","rail-signal","suitcase"]}},{id:"island-hut",chronology:4,destination:"H. Potter · 海上岩礁小屋",clue:"IV · 海上岩礁小屋",addressMark:"ROCK HUT",position:[5.55,2.15,-4.6],rotation:[0,-.3,0],envelope:Ur(["salt-stains","torn-edge"]),model:{kind:"storm-hut",landmarks:["black-rock","timber-hut","wave-rings"]}}],Gr={wallClue:"楼梯下 · 楼上小卧室 · 17 号房 · 海上小屋",mobileWallWidth:5,mobileWallFontSize:29,dynamic:{wrong:"顺序错误：“{destination}”不是下一处藏身地。四封信重新飞散！",progress:"时间线正确：{destination} · {count} / 4",completeObjective:"时间线完成：循红蜡封印前往通往对角巷的门",completeHint:"四处藏身地首尾相接，信上的猩红 H 蜡印化成了门钥匙。",completeMessage:"四封信按时间顺序排列完成——通往对角巷的门已开启！"}};function Ns(i,e,t={}){const n=Gr.dynamic[e];return Ye(i,n).replace(/\{(\w+)\}/g,(r,o)=>t[o]??`{${o}}`)}const Wv=[{id:"jammed-post",label:"堵塞的黄铜邮槽",clue:"I · 绿粉由门外进入",position:[-4.8,0,2],model:{kind:"brass-letter-slot",landmarks:["hinged-brass-flap","split-envelope","green-powder-trail"],materials:["aged-brass","ivory-parchment","emerald-residue"],damageOrMagic:["powder-packed-hinge"]}},{id:"levitating-cake",label:"悬浮的紫罗兰布丁蛋糕",clue:"II · 奶油下有绕行丝线",position:[-1.6,0,2],model:{kind:"violet-pudding-cake",landmarks:["two-tier-sponge","violet-frosting","sugared-violets"],materials:["golden-sponge","violet-icing","porcelain-plate"],damageOrMagic:["green-thread-orbit"]}},{id:"sealed-floo",label:"三环封印的飞路炉",clue:"III · 三环汇聚于炉心",position:[1.6,0,2],model:{kind:"triple-ring-fireplace-seal",landmarks:["brick-arch","three-rune-rings","cold-green-hearth"],materials:["soot-black-brick","verdigris-copper","floo-embers"],damageOrMagic:["three-converging-residue-streams"]}},{id:"shrieking-lamp",label:"裂口尖叫油灯",clue:"诱饵 · 红线接回警报",position:[4.8,0,2],model:{kind:"shrieking-oil-lamp",landmarks:["loop-handle","cracked-glass","mouth-shaped-flame"],materials:["blackened-iron","smoked-glass","alarm-red-flame"],damageOrMagic:["red-alarm-wire"]}}],as=Object.freeze({mobileClueWidth:2.45,mobileClueFontSize:23,desktopClueWidth:2.75,desktopClueFontSize:28,mobileWallWidth:5,mobileWallFontSize:24}),ku={wallClue:"邮槽绿粉 · 蛋糕丝线 · 壁炉三环",dynamic:{wrong:"“{label}”接通了报警回路！封锁重置，干扰增强至 {count}。",firstHint:"邮槽里的绿色粉尘来自室外。残痕没有走直线，而是绕向被悬浮咒托起的蛋糕。",secondHint:"蛋糕下方的魔力丝线指向壁炉。最后解除飞路炉上的三环封印。",progress:"住宅封锁痕迹已确认 {count} / 3",accepted:"{label}的残痕已固定，绿色干扰显露下一段走向。",completeObjective:"精灵的封锁完成：邮槽、悬浮蛋糕与飞路炉的干扰链已全部解除",completeHint:"绿色粉尘标出入口，悬浮蛋糕暴露绕行，飞路封印是最终汇聚点。住宅出口重新打开。",transitionKicker:"第二部 · 第一章 · 第 1 关完成",transitionTitle:"飞车失控",completionMessage:"三重封锁碎成绿色星屑——正在登上失控飞车，追赶霍格沃茨特快！",nextRoomMessage:"飞车关卡已加载：先调整行李配重，再对准铁路，最后短促给油。"}};function zn(i,e,t={}){const n=ku.dynamic[e];return Ye(i,n).replace(/\{(\w+)\}/g,(r,o)=>t[o]??`{${o}}`)}const Xv=[{id:"balance-luggage",label:"后移行李配重",clue:"I · 皮箱压低车尾",position:[-4.8,0,3.45],model:{kind:"strapped-luggage-trunk",landmarks:["brown-travel-trunk","crossed-leather-straps","brass-corner-guards"],materials:["scuffed-leather","aged-brass"],damageOrMagic:["rearward-motion-arrow"]}},{id:"align-railway",label:"对准红色铁路灯",clue:"II · 准星重合红灯",position:[-1.6,0,3.45],model:{kind:"railway-alignment-wheel",landmarks:["three-spoke-steering-wheel","glass-sighting-ring","red-signal-needle"],materials:["black-leather","chrome","red-enamel"],damageOrMagic:["needle-points-to-rail-signal"]}},{id:"pulse-throttle",label:"短促脉冲油门",clue:"III · 蓝区三次短推",position:[1.6,0,3.45],model:{kind:"cool-pulse-throttle",landmarks:["slender-throttle-lever","three-blue-notch-marks","coolant-temperature-dial"],materials:["brushed-steel","blue-enamel","clear-glass"],damageOrMagic:["three-cool-pulse-glows"]}},{id:"floor-throttle",label:"一脚踩死油门",clue:"诱饵 · 红区持续过热",position:[4.8,0,3.45],model:{kind:"overheated-throttle-decoy",landmarks:["wide-floor-pedal","redline-temperature-dial","split-radiator-hose"],materials:["scorched-steel","warning-red-enamel","black-rubber"],damageOrMagic:["steam-burst","orange-overheat-cracks"]}}],ls=Object.freeze({mobileClueWidth:1.55,mobileClueFontSize:18,desktopClueWidth:2.45,desktopClueFontSize:25,mobileWallWidth:3.8,mobileWallFontSize:20}),zu={wallClue:"行李后移 · 红灯校向 · 蓝区脉冲",dynamic:{wrong:"“{label}”让引擎过热！飞车翻滚，乱流升至 {count}。",firstHint:"皮箱后移后车尾下沉，车头恢复水平。现在让方向盘准星与铁路尽头的红色信号灯重合。",secondHint:"航向已经锁定，但水温仍在红区。把细油门杆短推三次，不能踩住宽踏板。",progress:"飞车稳定步骤已完成 {count} / 3",accepted:"{label}生效，飞车姿态恢复了一部分。",completeObjective:"飞车失控完成：配重、航向与脉冲油门让车辆安全追上列车",completeHint:"皮箱后移压低车尾，红灯准星校正航向，蓝区三次脉冲避免引擎过热。远处的打人柳正在挥动枝条。",transitionKicker:"第二部 · 第一章 · 第 2 关完成",transitionTitle:"打人柳下",completionMessage:"飞车擦过高架桥，稳稳落在城堡草地——打人柳的粗枝突然苏醒！",nextRoomMessage:"打人柳关卡已加载：等待高扫、俯身避低返，再冲过树根间隙。"}};function Bn(i,e,t={}){const n=zu.dynamic[e];return Ye(i,n).replace(/\{(\w+)\}/g,(r,o)=>t[o]??`{${o}}`)}const qv=[{id:"wait-high-swing",label:"等待高枝扫过",clue:"I · 风声在头顶",position:[-4.8,0,1.6],color:5797258,model:{kind:"overhead-branch-arc",landmarks:["raised-forked-branch","curved-wind-arc","airborne-willow-leaves"],materials:["dark-bark","blue-wind-glass","green-leaves"],damageOrMagic:["overhead-motion-streaks"]}},{id:"duck-low-return",label:"俯身避开低返",clue:"II · 落叶贴地",position:[-1.6,0,1.6],color:7045461,model:{kind:"ground-skimming-return",landmarks:["low-horizontal-branch","bent-crouching-arch","ground-level-leaf-trail"],materials:["mossy-bark","worn-stone","olive-leaves"],damageOrMagic:["scraped-ground-line"]}},{id:"dash-root-gap",label:"冲过露根间隙",clue:"III · 树洞显露",position:[1.6,0,1.6],color:9598019,model:{kind:"illuminated-root-passage",landmarks:["paired-arched-roots","dark-hollow-opening","forward-footprint-path"],materials:["root-bark","black-hollow","luminous-green-resin"],damageOrMagic:["green-safe-window-glow"]}},{id:"run-before-swing",label:"立刻直冲树洞",clue:"诱饵 · 粗枝蓄力",position:[4.8,0,1.6],color:10109249,model:{kind:"splintered-impact-decoy",landmarks:["cocked-heavy-branch","shattered-warning-post","red-impact-burst"],materials:["angry-bark","fresh-splinter-wood","warning-red-magic"],damageOrMagic:["fresh-impact-splinters","red-danger-pulse"]}}],cs=Object.freeze({mobileClueWidth:1.8,mobileClueFontSize:19,desktopClueWidth:2.7,desktopClueFontSize:28,mobileWallWidth:4.2,mobileWallFontSize:20}),Bu={wallClue:"破风高扫 · 落叶低返 · 绿根开隙",dynamic:{wrong:"“{label}”踩错节拍！粗枝扫中肩膀，擦伤升至 {count}。",firstHint:"高枝带着破风声从头顶扫过。枝梢正在贴着落叶低低返程，立刻俯身。",secondHint:"低枝擦过背后，主干短暂失去平衡。发光树根之间的缝隙就是第三拍。",progress:"打人柳安全节拍已完成 {count} / 3",accepted:"{label}：动作与枝条节拍吻合。",completeObjective:"打人柳下完成：高扫、低返、露根三拍全部避开，树洞通道已经打开",completeHint:"破风声预告高扫，贴地落叶暴露低返，两次攻击后的收势形成通往树洞的安全窗口。",transitionKicker:"第二部 · 第一章 · 第 3 关完成",transitionTitle:"树洞开启",completionMessage:"你滑入树根下的安全通道。城堡走廊尽头，一行血字正从潮湿石墙上浮现……"}};function ti(i,e,t={}){const n=Bu.dynamic[e];return Ye(i,n).replace(/\{(\w+)\}/g,(r,o)=>t[o]??`{${o}}`)}const Yv=[{id:"flute",label:"银木横笛",clue:"I · 七孔夜风之息",position:[-5.1,1.45,2.8],model:{kind:"silverwood-transverse-flute",landmarks:["slender-bore","seven-tone-holes","silver-mouthpiece"],materials:["pale-silverwood","tarnished-silver"],soundCue:["blue-breath-ribbon"]}},{id:"harp",label:"月弦竖琴",clue:"II · 新月琴框托梦",position:[-1.9,1.25,2.8],model:{kind:"crescent-frame-harp",landmarks:["crescent-pillar","arched-neck","nine-vertical-strings"],materials:["warm-walnut","moon-silver-strings"],soundCue:["golden-string-ripples"]}},{id:"music-box",label:"星纹发条音乐盒",clue:"III · 黄铜滚筒封住鼾声",position:[4.4,1.25,2.8],model:{kind:"star-inlaid-clockwork-box",landmarks:["open-hinged-lid","pinned-brass-cylinder","side-winding-key"],materials:["midnight-blue-lacquer","polished-brass"],soundCue:["three-clockwork-note-stars"]}}],us=Object.freeze({mobileCameraZ:7.5,mobileGuardianScale:.72,mobileInstrumentX:[0,-1.4,1.4],mobileInstrumentScale:.68,mobileLabelWidth:2.1,mobileLabelFontSize:22}),Ba={wallClue:"禁区守卫 · 三首同眠 · 活板门在爪下",scoreClue:"褪色乐谱：气息 → 琴弦 → 发条",dynamic:{wrong:"“{label}”打乱了旋律！三颗头同时睁眼，惊醒次数：{count}。",firstHint:"横笛的七孔送出夜风，左首已经合眼。现在用月弦托住刚形成的梦境。",secondHint:"竖琴的九根银弦让中首伏下。最后转动黄铜滚筒，以稳定发条节拍封住鼾声。",progress:"安眠旋律已完成 {count} / 3",accepted:"{label}奏效，一颗头缓缓合上琥珀色双眼。",completeObjective:"城堡禁区完成：三颗头都已沉睡，爪下的活板门安全开启",completeHint:"七孔夜风、九根月弦与黄铜发条叠成摇篮曲。铁箍活板门下吹来潮湿植物的气息。",transitionKicker:"第一部 · 第二章完成",transitionTitle:"禁区守门人",completionMessage:"三头守卫沉入梦乡——第二章通关，正在前往“镜中秘密”！",nextRoomMessage:"第三章已加载：在飞行训练场按风向与重量送回三件遗失物。"}};function Hn(i,e,t={}){const n=Ba.dynamic[e];return Ye(i,n).replace(/\{(\w+)\}/g,(r,o)=>t[o]??`{${o}}`)}const Hu=[{id:"spellbook",label:"《标准咒语·初级》",position:[-4.9,1,-5],labelHeight:1.2,color:8070194,model:{kind:"embossed-hardback-spellbook",landmarks:["thick-page-block","raised-leather-covers","gold-spell-star-emblem","ribbon-bookmark"],materials:["burgundy-leather","aged-paper","gold-leaf"]}},{id:"cauldron",label:"二号锡制坩埚",position:[5,.7,-4.9],labelHeight:1.45,model:{kind:"pewter-size-two-cauldron",landmarks:["deep-open-bowl","thick-rolled-rim","two-ring-handles","three-short-legs","size-two-stamp"],materials:["hammered-pewter","soot-darkened-iron"]}},{id:"owl",label:"雪白猫头鹰",position:[-5,1.25,.6],labelHeight:1.65,model:{kind:"snowy-owl-on-perch",landmarks:["round-feathered-body","two-folded-wings","facial-disc-and-beak","talons-on-perch"],materials:["snow-white-feathers","amber-eyes","dark-wood-perch"]}},{id:"wand-box",label:"等待主人的魔杖盒",position:[5,1,.7],labelHeight:1.35,color:6966058,model:{kind:"open-velvet-wand-case",landmarks:["long-narrow-case","open-hinged-lid","velvet-lined-channel","visible-wand-in-velvet-channel"],materials:["walnut","violet-velvet","holly-wood"]}},{id:"broomstick",label:"飞天扫帚",position:[5,1.2,5.8],labelHeight:1.2,model:{kind:"bound-twig-broomstick",landmarks:["long-tapered-shaft","dense-twig-bristles","brass-binding-bands","small-footrests"],materials:["polished-ash","birch-twigs","brass"]}},{id:"crystal-ball",label:"水晶球",position:[-5,1,5.7],labelHeight:1.7,color:6707589,model:{kind:"glass-orb-on-tripod",landmarks:["translucent-glass-orb","inner-violet-mist","three-claw-cradle","tripod-base"],materials:["clear-crystal","violet-mist","antique-brass"]}},{id:"gold-scales",label:"黄铜天平",position:[-3.2,1,-1.8],labelHeight:2.05,color:11041845,model:{kind:"balanced-brass-scales",landmarks:["central-pillar","horizontal-balance-beam","two-chain-sets","two-hanging-pans"],materials:["polished-brass","dark-mahogany"]}},{id:"advanced-potions",label:"高级魔药学",position:[3.1,1,-2.5],labelHeight:1.25,color:2706741,model:{kind:"green-potions-textbook",landmarks:["thick-page-block","green-leather-covers","silver-cauldron-emblem","bottle-shaped-clasp"],materials:["green-leather","aged-paper","silver-inlay"]}}],Ha={wallClue:"霍格沃茨一年级采购清单 · 预算 12 加隆",listTitle:"按清单顺序：课本 → 二号锡制坩埚 → 猫头鹰 → 魔杖盒",dynamic:{wrong:"清单顺序错误：“{label}”不该现在购买。采购篮被清空！",purchased:"已购入：{label}（{price} 加隆）",completeObjective:"采购完成：前往破釜酒吧出口",completeHint:"清单上的四枚墨点连成了一条通往下一段旅程的路线。",completeMessage:"霍格沃茨采购清单完成——出口已经开启！"}};function jv(i){return Hu.find(e=>e.id===i)}function Os(i,e,t={}){const n=Ha.dynamic[e];return Ye(i,n).replace(/\{(\w+)\}/g,(r,o)=>t[o]??`{${o}}`)}const Ga=["cupboard","bedroom","hotel-room-17","island-hut"],Va=["spellbook","cauldron","owl","wand-box"],Gu=Object.freeze({spellbook:2,cauldron:3,owl:4,"wand-box":3}),$v=Object.freeze([Object.freeze({id:"owl-letters",name:"猫头鹰来信"}),Object.freeze({id:"diagon-alley-list",name:"对角巷清单"}),Object.freeze({id:"wand-selection",name:"魔杖选择"}),Object.freeze({id:"sorting-ceremony",name:"分院仪式"})]);function dl(i){return $v[i]??null}function Kv(i,e){const t=Ga[i.progress.length];if(e!==t)return{progress:[],unlocked:!1,reset:!0};const n=[...i.progress,e];return{progress:n,unlocked:n.length===Ga.length,reset:!1}}function Zv(i,e){const t=Va[i.progress.length];if(e!==t)return{progress:[],unlocked:!1,spent:0,reset:!0};const n=[...i.progress,e];return{progress:n,spent:(i.spent??0)+Gu[e],unlocked:n.length===Va.length,reset:!1}}function Jv(i,e){return e!=="holly"?{...i,mistakes:i.mistakes+1,accepted:!1,feedback:"unstable"}:{...i,progress:["wood"],accepted:!0}}function Qv(i,e){return i.progress.includes("wood")?e!=="phoenix-feather"?{...i,mistakes:i.mistakes+1,accepted:!1,feedback:"resisted"}:{...i,progress:[...i.progress,"core"],accepted:!0}:{...i,accepted:!1,feedback:"unavailable"}}function e_(i,e){return e===11?{...i,progress:[...i.progress,"length"],unlocked:!0,accepted:!0,feedback:"chosen"}:{...i,mistakes:i.mistakes+1,accepted:!1,feedback:e<11?"too-short":"too-long"}}function t_(i,e){const t=["lion","badger","eagle","snake"],n={lion:"courage",badger:"loyalty",eagle:"wisdom",snake:"ambition"},s=t[i.progress.length];if(e!==s)return{...i,mistakes:i.mistakes+1,accepted:!1,feedback:"wrong-order"};const r=[...i.progress,e],o=r.length===t.length;return{...i,progress:r,unlocked:o,accepted:!0,trait:n[e],...o?{chapterComplete:!0}:{}}}function n_({roomIndex:i,unlocked:e}){return e?{roomIndex:i+1,advanced:!0}:{roomIndex:i,advanced:!1}}const Ct=new Dh,Ht=new _n(70,innerWidth/innerHeight,.1,100),bi=new jg({antialias:!0});bi.setPixelRatio(Math.min(devicePixelRatio,2));bi.setSize(innerWidth,innerHeight);bi.shadowMap.enabled=!0;bi.shadowMap.type=Kc;bi.outputColorSpace=dn;document.querySelector("#app").appendChild(bi.domElement);const de=new sf(10201809,2957592,1.05);Ct.add(de);const hl=new af(12899583,1.5);hl.position.set(-4,8,5);hl.castShadow=!0;Ct.add(hl);const Pn=new Jg(Ht,document.body),fl=document.querySelector("#start-screen"),tr=document.querySelector("#start-button"),so=document.querySelector("#continue-button"),$r=document.querySelector("#restart-button"),i_=document.querySelector("#mobile-controls"),je=document.querySelector("#objective"),Ft=document.querySelector("#counter"),ks=document.querySelector("#prompt"),qo=document.querySelector("#message"),Tn=document.querySelector("#room-kicker"),s_=document.querySelector("#room-name"),Ze=document.querySelector("#puzzle-hint"),Vt=document.querySelector("#puzzle-progress"),ot=document.querySelector("#room-transition"),Jt=document.querySelector("#transition-kicker"),en=document.querySelector("#transition-title"),Kr=document.querySelector("#language-screen"),Vu=document.querySelector("#language-button"),Qt=document.querySelector("#narration-button"),Vs=document.querySelector("#narration-status"),r_=document.querySelector("#narration-subtitle"),vs=document.querySelector("#narration-audio");let Mn="idle",Wa=0;const tt=matchMedia("(pointer: coarse)").matches||matchMedia("(max-width: 820px)").matches||navigator.maxTouchPoints>0,Vc=Du(localStorage),zs=Vc?lv(Vc):null;let Y=hv(localStorage),we=er(Y),Wu,nr=!1,be=new Tt;Ct.add(be);let We=[],Mt=[],vi=null,ke=null,At=0,I={progress:[],unlocked:!1},Wc,Vr=!1;const Xc={x:8.25,z:8.25},Xa=new uf;Xa.far=4.2;function U(i,e={}){return new Eu({color:i,roughness:.82,...e})}function k(i,e,t,n,s=!0,r=be){const o=new J(new vt(...e),n);return o.name=i,o.position.set(...t),o.castShadow=s,o.receiveShadow=!0,r.add(o),o}function o_(i){i.traverse(e=>{e.geometry?.dispose?.();const t=Array.isArray(e.material)?e.material:[e.material];for(const n of t)n&&(n.map?.dispose?.(),n.dispose?.())})}function a_(){Ct.remove(be),o_(be),be=new Tt,Ct.add(be),We=[],Mt=[],vi=null,ke=null,ks.classList.remove("visible")}function Ne(i,e,{color:t="#f2d28b",width:n=4.8,size:s=54}={}){i=Ye(Y,i);const r=document.createElement("canvas");r.width=1024,r.height=220;const o=r.getContext("2d");o.fillStyle="rgba(7, 5, 10, 0.82)",o.fillRect(0,0,r.width,r.height),o.strokeStyle=t,o.lineWidth=8,o.strokeRect(8,8,r.width-16,r.height-16),o.fillStyle=t,o.font=`600 ${s}px -apple-system, BlinkMacSystemFont, sans-serif`,o.textAlign="center",o.textBaseline="middle",o.fillText(i,r.width/2,r.height/2);const a=new zh(r);a.colorSpace=dn;const l=new Nh(new _u({map:a,transparent:!0,depthTest:!0}));return l.position.set(...e),l.scale.set(n,n*.215,1),be.add(l),l}function ce(i,e=2400){qo.textContent=Ye(Y,i),qo.classList.add("show"),clearTimeout(Wc),Wc=setTimeout(()=>qo.classList.remove("show"),e)}function Yt({index:i,name:e,objectiveText:t,hint:n,progress:s}){const r=At>=16?{book:2,chapter:1,room:At-15}:{book:1,chapter:Math.floor(At/4)+1,room:At%4+1},o=mv(Y,{...r,name:e,objectiveText:t,hint:n});Tn.textContent=o.kicker,s_.textContent=o.name,je.textContent=o.objectiveText,Ze.textContent=o.hint,Vt.textContent=s}function qc(){const i=I.progress.length;Ft.textContent=we("counter.letters",{count:i}),Vt.textContent=Ga.map((e,t)=>t<i?"●":"○").join("  ")}function Yc(){const i=I.progress.length;Ft.textContent=we("counter.shopping",{count:i,remaining:12-(I.spent??0)}),Vt.textContent=Va.map((e,t)=>t<i?"✓":"□").join("  ")}function pl(){const i=I.progress.includes("wood"),e=I.progress.includes("core"),t=I.progress.includes("length");Ft.textContent=we("counter.wand",{count:I.progress.length,mistakes:I.mistakes}),Vt.textContent=`木材 ${i?"✓":"○"}  杖芯 ${e?"✓":"○"}  长度 ${t?"✓":"○"}`}function l_(){Ft.textContent=we("counter.sorting",{count:I.progress.length,mistakes:I.mistakes}),Vt.textContent=`狮 ${I.progress.includes("lion")?"✓":"○"}  獾 ${I.progress.includes("badger")?"✓":"○"}  鹰 ${I.progress.includes("eagle")?"✓":"○"}  蛇 ${I.progress.includes("snake")?"✓":"○"}`}function Xu(){Ft.textContent=we("counter.stairs",{count:I.progress.length,penalty:I.timePenalty}),Vt.textContent=["lower","moon","upper"].map((i,e)=>e<I.progress.length?"◆":"◇").join("  ")}function qu(){Ft.textContent=we("counter.portraits",{count:I.progress.length,value:I.suspicion}),Vt.textContent=["scholar","knight","lady"].map((i,e)=>e<I.progress.length?"▣":"▢").join("  ")}function Yu(){Ft.textContent=we("counter.patrol",{count:I.progress.length,value:I.alert}),Vt.textContent=["armor","cat","tapestry"].map((i,e)=>e<I.progress.length?"◆":"◇").join("  ")}function ju(){Ft.textContent=we("counter.lullaby",{count:I.progress.length,value:I.wakefulness}),Vt.textContent=["flute","harp","music-box"].map((i,e)=>e<I.progress.length?"♪":"·").join("  ")}function $u(){Ft.textContent=we("counter.flying",{count:I.progress.length,value:I.turbulence}),Vt.textContent=["围巾","笔记","罗盘"].map((i,e)=>e<I.progress.length?"➤":"○").join("  ")}function Ku(){Ft.textContent=we("counter.troll",{count:I.progress.length,value:I.danger}),Vt.textContent=["止水","清障","架桥"].map((i,e)=>e<I.progress.length?"✦":"◇").join("  ")}function Zu(){Ft.textContent=we("counter.library",{count:I.progress.length,value:I.noise}),Vt.textContent=["建校","龙灾","月蚀"].map((i,e)=>e<I.progress.length?"▰":"▱").join("  ")}function Ju(){Ft.textContent=we("counter.mirror",{count:I.progress.length,value:I.illusion}),Vt.textContent=["御寒","照路","同行"].map((i,e)=>e<I.progress.length?"◈":"◇").join("  ")}function Qu(){Ft.textContent=we("counter.snare",{count:I.progress.length,value:I.constriction}),Vt.textContent=[0,1,2].map((i,e)=>e<I.progress.length?"✺":"○").join("  ")}function ed(){Ft.textContent=we("counter.keys",{count:I.progress.length,value:I.pursuit}),Vt.textContent=["折翼","轨迹","锁孔"].map((i,e)=>e<I.progress.length?"🗝":"◇").join("  ")}function td(){Ft.textContent=we("counter.chess",{count:I.progress.length,value:I.captured}),Vt.textContent=["兵诱敌","马双攻","车开路"].map((i,e)=>e<I.progress.length?"♟":"◇").join("  ")}function nd(){Ft.textContent=we("counter.stone",{count:I.progress.length,value:I.corruption}),Vt.textContent=["药剂","镜像","意图"].map((i,e)=>e<I.progress.length?"◆":"◇").join("  ")}function id(){Ft.textContent=we("counter.elf",{count:I.progress.length,value:I.interference}),Vt.textContent=["邮槽","蛋糕","飞路"].map((i,e)=>e<I.progress.length?"✦":"◇").join("  ")}function sd(){Ft.textContent=we("counter.car",{count:I.progress.length,value:I.turbulence}),Vt.textContent=["配重","航向","油门"].map((i,e)=>e<I.progress.length?"➤":"◇").join("  ")}function rd(){Ft.textContent=we("counter.willow",{count:I.progress.length,value:I.bruises}),Vt.textContent=["等","伏","冲"].map((i,e)=>e<I.progress.length?"♩":"◇").join("  ")}function jt({wall:i=5787455,floor:e=2892828,ceiling:t=2696479,fog:n=1512207}){Ct.background=new st(n),Ct.fog=new il(n,.028);const s=U(i,{roughness:.96}),r=U(e,{roughness:1});k("地板",[18,.25,18],[0,-.12,0],r,!1),k("天花板",[18,.25,18],[0,7,0],U(t),!1),k("北墙",[18,7,.3],[0,3.5,-9],s,!1),k("南墙",[18,7,.3],[0,3.5,9],s,!1),k("西墙",[.3,7,18],[-9,3.5,0],s,!1),k("东墙",[.3,7,18],[9,3.5,0],s,!1)}function St(i,e=2.5,t=8){const n=new jn(16753737,e,t,2);n.position.set(...i),n.castShadow=!0,be.add(n);const s=new J(new Le(.09,12,12),new Nn({color:16762216}));s.position.copy(n.position),be.add(s)}function ml(i,e){const t=U(5256734,{roughness:.72}),n=U(2430735,{roughness:.75,metalness:.08});k("左门框",[.22,5.5,.42],[-1.72,2.75,-8.63],t),k("右门框",[.22,5.5,.42],[1.72,2.75,-8.63],t),k("上门框",[3.65,.22,.42],[0,5.45,-8.63],t);const s=new Tt;s.position.set(-1.58,0,-8.48),be.add(s);const r=k(i,[3.16,5.15,.22],[1.58,2.58,0],n,!0,s);return r.userData={type:"door",label:i,unlocked:!1,opening:!1,pivot:s,nextRoomIndex:e},We.push(r),vi=r,Ne(i,[0,6.05,-8.35],{width:4.2,size:48}),r}function Yo({position:i,rotation:e=[0,0,0],clueId:t=null,destination:n="",addressMark:s="",decoy:r=!1,decorative:o=!1,phase:a=0}){const l=U(15261117,{roughness:.72,emissive:t?2365197:0,emissiveIntensity:t?.35:0}),c=new J(new vt(.86,.54,.05),l);c.position.set(...i),c.rotation.set(...e),c.castShadow=!0,be.add(c);const u=new J(new Ie(.095,.095,.032,18),U(8328736,{roughness:.55}));if(u.rotation.x=Math.PI/2,u.position.set(0,-.05,.055),c.add(u),t){const h=U(14000474,{metalness:.2,roughness:.5});k("H 蜡印左竖",[.018,.095,.014],[-.031,-.05,.078],h,!1,c),k("H 蜡印右竖",[.018,.095,.014],[.031,-.05,.078],h,!1,c),k("H 蜡印横",[.075,.018,.014],[0,-.05,.078],h,!1,c);const p=U(3418917,{roughness:1});for(const[g,_]of[.48,.38,.3].entries())k("地址墨线",[_,.018,.009],[0,.11-g*.065,.041],p,!1,c)}const d=new J(new sn().setFromPoints([new P(-.38,.22,.031),new P(.38,.22,.031),new P(0,-.05,.031)]),new Nn({color:13615775,side:xn}));return c.add(d),o||(c.name=n,c.userData={type:"owl-letter",clueId:t,destination:n,addressMark:s,decoy:r,selected:!1},We.push(c)),Mt.push({object:c,baseY:i[1],phase:a,spin:o?.08:.025,bob:o?.16:.07}),c}function Nr(i,e=1,t=!1){const n=new Tt;n.position.set(...i),n.scale.setScalar(e);const s=U(15328209,{roughness:1}),r=new J(new Le(.34,18,18),s);r.scale.y=1.35,r.castShadow=!0,n.add(r);const o=new J(new Le(.29,18,18),s);o.position.y=.48,n.add(o);for(const l of[-.11,.11]){const c=new J(new Le(.055,12,12),new Nn({color:15911244}));c.position.set(l,.53,.25),n.add(c);const u=new J(new Le(.025,10,10),new Nn({color:592137}));u.position.set(l,.53,.295),n.add(u)}const a=new J(new It(.07,.18,4),U(14064444));return a.rotation.x=Math.PI/2,a.position.set(0,.4,.31),n.add(a),be.add(n),t&&(r.userData={type:"shopping-item",itemId:"owl",label:"雪白猫头鹰"},We.push(r)),Mt.push({object:n,baseY:i[1],phase:i[0]+i[2],spin:0,bob:.04}),n}function c_(i){const[e,,t]=i.position,n=new Tt;n.position.set(e,0,t),be.add(n);const s=U(5387551,{roughness:.94}),r=U(12159288,{metalness:.72,roughness:.34}),o=U(4681358,{emissive:1322826,emissiveIntensity:.85,roughness:.28});if(i.model.kind==="cupboard-door"){k("斜顶储物间门",[1.5,1.8,.16],[0,.9,-.28],s,!0,n);for(const a of[.52,.66,.8])k("黄铜通风槽",[.52,.045,.035],[0,a,-.18],r,!1,n);for(let a=0;a<4;a+=1)k("楼梯踏步剪影",[1.8-a*.25,.18,.52],[-.7+a*.15,1.9+a*.18,-.18],s,!0,n)}else if(i.model.kind==="bedroom-window"){k("窄床",[1.65,.28,.72],[0,.35,-.15],U(7107919),!0,n),k("小卧室蓝窗",[1.22,1.28,.1],[0,1.35,-.45],o,!1,n),k("窗棂横",[1.3,.07,.13],[0,1.35,-.37],s,!1,n),k("窗棂竖",[.07,1.35,.13],[0,1.35,-.37],s,!1,n);const a=new J(new It(1.18,.64,4),U(4337704));a.rotation.y=Math.PI/4,a.position.set(0,2.25,-.34),n.add(a)}else if(i.model.kind==="hotel-key"){k("旅行箱",[1.55,.92,.5],[0,.52,-.18],U(6898987),!0,n),k("旅行箱带",[.16,.96,.54],[0,.52,-.18],s,!0,n);const a=new J(new rt(.27,.055,10,24),r);a.position.set(0,1.55,-.12),n.add(a),k("17 号黄铜钥匙牌",[.75,.5,.1],[0,1.18,-.12],r,!0,n),Ne("ROOM 17",[e,1.2,t+.02],{width:1.1,size:48,color:"#2c2117"}),k("铁路红色信号",[.16,1.4,.16],[-.75,1,-.35],U(3487030),!0,n);const l=new J(new Le(.16,12,12),U(12991538,{emissive:7999498,emissiveIntensity:1.5}));l.position.set(-.75,1.7,-.35),n.add(l)}else{const a=new J(new rl(1.18,0),U(3225661,{roughness:1}));a.scale.set(1.2,.58,.95),a.position.set(0,.55,-.2),n.add(a),k("暴风小屋",[1.25,1.05,.9],[0,1.25,-.2],s,!0,n);const l=new J(new It(1.05,.72,4),U(2498588));l.rotation.y=Math.PI/4,l.position.set(0,2.08,-.2),n.add(l);for(const c of[1.25,1.55]){const u=new J(new rt(c,.045,8,36,Math.PI),U(4750739,{emissive:1456973,emissiveIntensity:1}));u.rotation.x=Math.PI/2,u.rotation.z=Math.PI/2,u.position.set(0,.2,.1),n.add(u)}}Ne(i.clue,[e,2.85,t],{width:2.25,size:31})}function u_(){de.color.setHex(10985609),de.groundColor.setHex(3352093),jt({wall:6709064,floor:3745566,ceiling:3881005,fog:1577487}),Yt({index:0,name:"猫头鹰来信",objectiveText:"目标：按弗农改变藏身处的时间顺序检查四封信",hint:"地址会追着哈利变化。错误选择会让已确认的信全部重新飞散。",progress:"○  ○  ○  ○"}),Ft.textContent=we("counter.letters",{count:0}),I={progress:[],unlocked:!1};const i=U(4861208),e=U(2956049),t=U(7035201,{roughness:1}),n=U(5975587,{roughness:1});for(let o=0;o<7;o+=1)k("楼梯",[3.8-o*.32,.32,1.05],[-6.7+o*.2,.16+o*.32,-4.6+o*.72],e);k("楼梯下储物间",[2.4,2.15,.16],[-7.7,1.08,-3.7],i),Ne("楼梯下的储物间",[-7.42,2.55,-3.52],{width:3.2,size:42}),k("壁炉背板",[4.1,3.6,.38],[0,1.8,-8.58],n),k("壁炉洞口",[2.3,2,.46],[0,1,-8.3],U(1182472)),k("壁炉台",[4.6,.28,.72],[0,3.45,-8.2],i),St([0,1.05,-7.85],4.2,8);for(const o of[-.55,0,.55])St([o,.55+Math.abs(o)*.3,-7.75],1.25,4);k("沙发座",[4.2,.65,1.45],[3.9,.62,2.6],t),k("沙发背",[4.2,1.45,.45],[3.9,1.35,3.05],t),k("茶几",[3.1,.22,1.7],[1.7,.75,.2],i);for(const[o,a]of[[.45,-.45],[2.95,-.45],[.45,.85],[2.95,.85]])k("茶几腿",[.16,.75,.16],[o,.37,a],e);const s=U(6455968,{emissive:1915224,emissiveIntensity:1.8,roughness:.25});k("窗户",[5.1,2.7,.12],[0,3.8,8.78],s,!1),k("窗框横",[5.3,.16,.2],[0,3.8,8.65],i),k("窗框竖",[.16,2.9,.2],[0,3.8,8.65],i),Nr([-2,5.4,8.2],.8),Nr([0,5.65,8.2],.72),Nr([2.1,5.25,8.2],.85),Nr([-3.9,2.15,-1.4],1.05),Ne("4 PRIVET DRIVE",[0,6.15,8.45],{width:5.2,size:52}),Ne("NO POST ON SUNDAYS!",[3.85,4.7,-8.3],{color:"#e4b55e",width:4,size:42}),Vv.forEach((o,a)=>{c_(o),Yo({...o,clueId:o.id,phase:a*1.4})}),[["front-door","V. Dursley · 女贞路前门",[-2.8,1.45,2.3]],["kitchen","D. Dursley · 厨房餐桌",[4.6,1.5,.2]],["zoo","H. Potter · 动物园爬虫馆",[-5.9,1.75,1.9]],["school","H. Potter · 石墙中学",[.1,1.35,3.75]]].forEach(([o,a,l],c)=>Yo({clueId:o,destination:a,position:l,decoy:!0,rotation:[0,c*.7,0],phase:2+c}));for(let o=0;o<34;o+=1){const a=o*.73,l=1.4+o%7*.72;Yo({position:[Math.sin(a)*l,1.1+o%9*.54,-6.8+Math.cos(a)*l*.62],rotation:[Math.sin(o)*.45,a,Math.cos(o*.4)*.3],decorative:!0,phase:o*.37})}Ne(Gr.wallClue,[0,6.25,-8.05],{width:Gr.mobileWallWidth,size:Gr.mobileWallFontSize}),ml("通往对角巷",1)}function ds(i,e,t,n){const s=U(n,{roughness:.9});k(`${t}店面`,[3.2,5.6,.55],[i,2.8,e],s),k(`${t}橱窗`,[2.15,2.15,.12],[i,2.85,e+(e<0?.34:-.34)],U(4284528,{emissive:1587271,emissiveIntensity:.8,roughness:.2})),Ne(t,[i,5.3,e+(e<0?.42:-.42)],{width:3,size:38,color:"#e8c871"})}function d_(i,e,t,n,s=9069888){const r=jv(i),o=new Tt;o.position.set(...t),o.scale.setScalar(1.18),o.name=e,be.add(o);const a=(c,u,d,h=[0,0,0],p=[0,0,0])=>{const g=new J(u,d);return g.name=c,g.position.set(...h),g.rotation.set(...p),g.castShadow=!0,g.receiveShadow=!0,o.add(g),g},l=({cover:c,emblem:u,potion:d=!1})=>{const h=U(c,{roughness:.82});if(a("厚实书页",new vt(1.18,.22,.78),U(14206877,{roughness:1})),a("上层皮革封面",new vt(1.3,.08,.88),h,[0,.15,0]),a("下层皮革封面",new vt(1.3,.08,.88),h,[0,-.15,0]),a("圆脊书背",new Ie(.13,.13,.88,12),h,[-.63,0,0],[Math.PI/2,0,0]),d)a("银色坩埚徽记",new Ie(.2,.15,.13,16),U(u,{metalness:.75}),[.08,.22,0],[0,0,Math.PI/2]),a("药瓶形书扣",new Ie(.06,.09,.26,10),U(u,{metalness:.75}),[.52,.22,0],[0,0,Math.PI/2]);else{for(let p=0;p<5;p+=1){const g=p*Math.PI*.8;a("金色咒语星纹",new Le(.055,8,8),U(u,{metalness:.7,emissive:6044680,emissiveIntensity:.45}),[Math.cos(g)*.22,.22,Math.sin(g)*.22])}a("红色书签",new vt(.09,.03,.58),U(10299186),[.35,-.18,.22])}};if(i==="spellbook")l({cover:8070194,emblem:13936965});else if(i==="advanced-potions")l({cover:2706741,emblem:12042950,potion:!0});else if(i==="cauldron"){const c=U(7830397,{metalness:.72,roughness:.42,side:xn});a("二号深腹锅身",new Ie(.56,.38,.74,28,1,!0),c,[0,.38,0]),a("坩埚黑色内腔",new Ie(.49,.49,.035,28),U(1118997),[0,.77,0]),a("厚卷边",new rt(.55,.065,10,30),c,[0,.78,0],[Math.PI/2,0,0]);for(const u of[-1,1])a("锡制环形提手",new rt(.22,.04,8,20,Math.PI*1.55),c,[u*.58,.5,0],[0,Math.PI/2,u*Math.PI/2]);for(const u of[0,Math.PI*2/3,Math.PI*4/3])a("三脚支架",new Ie(.065,.09,.34,9),U(3487544,{metalness:.6}),[Math.cos(u)*.31,-.12,Math.sin(u)*.31],[0,0,Math.cos(u)*.18]);a("II 号压印",new vt(.18,.16,.035),U(12699077,{metalness:.8}),[0,.48,.52])}else if(i==="owl"){const c=U(15920868,{roughness:1});a("雪鸮圆润身体",new Le(.38,18,16),c,[0,.28,0]).scale.set(1,1.35,.88),a("雪鸮面盘",new Le(.32,18,16),c,[0,.84,.03]).scale.set(1.08,.95,.72);for(const u of[-1,1])a("收拢的雪白羽翼",new Le(.24,14,12),c,[u*.28,.04,-.03],[0,0,u*.2]).scale.set(.45,1.25,.65);for(const u of[-1,1])a("琥珀色眼睛",new Le(.065,12,10),new Nn({color:14792258}),[u*.12,.88,.25]),a("黑色瞳孔",new Le(.03,10,8),new Nn({color:592137}),[u*.12,.88,.305]);a("弯曲短喙",new It(.075,.2,5),U(2894116),[0,.75,.31],[Math.PI/2,0,0]),a("猫头鹰木栖架",new Ie(.055,.055,1.15,10),U(6833188),[0,-.52,0],[0,0,Math.PI/2]);for(const u of[-1,1])a("抓住栖架的脚爪",new rt(.08,.018,6,12,Math.PI),U(13672777),[u*.12,-.46,.04],[Math.PI/2,0,0])}else if(i==="wand-box"){const c=U(5650207,{roughness:.72}),u=U(3416125,{roughness:1});a("胡桃木长盒底",new vt(1.8,.22,.52),c),a("紫绒内衬凹槽",new vt(1.58,.07,.32),u,[0,.15,0]),a("打开的铰链盒盖",new vt(1.8,.12,.52),c,[0,.47,-.35],[-.7,0,0]),a("盒盖紫绒衬里",new vt(1.58,.04,.34),u,[0,.43,-.31],[-.7,0,0]),a("绒槽中的冬青木魔杖",new Ie(.025,.052,1.46,10),U(14272932),[0,.25,0],[0,0,Math.PI/2])}else if(i==="broomstick"){a("长锥形白蜡木柄",new Ie(.045,.075,2.5,12),U(8015141),[.35,.35,0],[0,0,Math.PI/2]),a("密集桦木枝束",new It(.42,1.12,18),U(10121280,{roughness:1}),[-1.25,.35,0],[0,0,-Math.PI/2]);for(const c of[-.74,-.62])a("黄铜捆扎环",new rt(.18,.035,8,20),U(12094013,{metalness:.7}),[c,.35,0],[0,Math.PI/2,0]);for(const c of[-1,1])a("扫帚脚踏",new vt(.46,.045,.08),U(12094013,{metalness:.7}),[.25,.13,c*.18],[0,c*.28,0])}else if(i==="crystal-ball"){a("透明水晶球",new Le(.52,28,22),U(12048361,{transparent:!0,opacity:.42,roughness:.05,metalness:.08}),[0,.65,0]),a("球内紫色星雾",new Le(.35,16,12),U(8415402,{transparent:!0,opacity:.55,emissive:5059192,emissiveIntensity:1.5}),[0,.65,0]);const c=U(11041845,{metalness:.78,roughness:.35});a("三爪托环",new rt(.42,.055,10,28),c,[0,.28,0],[Math.PI/2,0,0]);for(const u of[0,Math.PI*2/3,Math.PI*4/3])a("三脚底座",new Ie(.045,.07,.65,8),c,[Math.cos(u)*.26,-.02,Math.sin(u)*.26],[Math.sin(u)*.3,0,Math.cos(u)*.3])}else if(i==="gold-scales"){const c=U(12159541,{metalness:.82,roughness:.28});a("红木秤座",new Ie(.46,.58,.18,16),U(4859928),[0,.08,0]),a("黄铜中央立柱",new Ie(.055,.075,1.45,12),c,[0,.86,0]),a("水平平衡梁",new vt(1.75,.08,.08),c,[0,1.5,0]),a("梁顶指针",new It(.08,.38,8),c,[0,1.76,0]);for(const u of[-1,1]){for(const d of[-.16,.16])a("垂挂细链",new Ie(.012,.012,.62,6),c,[u*.72,1.13,d]);a("黄铜秤盘",new Le(.34,18,8,0,Math.PI*2,0,Math.PI/2),c,[u*.72,.82,0],[Math.PI,0,0])}}return o.userData={type:"shopping-item",itemId:i,label:e,price:n,selected:!1,modelKind:r?.model.kind},We.push(o),Ne(`${e} · ${n} G`,[t[0],t[1]+(r?.labelHeight??1.12),t[2]],{width:2.2,size:25}),o}function h_(){de.color.setHex(7305376),de.groundColor.setHex(1775393),jt({wall:3156026,floor:3617336,ceiling:1512477,fog:1051927}),Yt({index:1,name:"对角巷清单",objectiveText:"目标：按霍格沃茨清单采购四件合规格物品，预算 12 加隆",hint:"课本 → 二号锡制坩埚 → 猫头鹰 → 魔杖盒。核对规格与价签，买错会清空采购篮。",progress:"□  □  □  □"}),Ft.textContent=we("counter.shopping",{count:0,remaining:12}),I={progress:[],unlocked:!1,spent:0},Ct.fog.density=.022;for(let e=-7;e<=7;e+=1.1)for(let t=-2.8;t<=2.8;t+=1.1){const n=k("鹅卵石",[.95,.08,.95],[t+e*10%2*.22,.02,e],U(4801613,{roughness:1}),!1);n.rotation.y=(t+e)*.08}ds(-6.9,-5.8,"丽痕书店",5058601),ds(6.9,-5.8,"坩埚店",2440250),ds(-6.9,.3,"咿啦猫头鹰商店",4799784),ds(6.9,.3,"奥利凡德魔杖店",3353414),ds(-6.9,6.2,"药剂材料铺",4075071),ds(6.9,6.2,"魁地奇精品店",4073769);for(const e of[[-3.2,4.5,-4.2],[3.2,4.2,-1.8],[-2.1,4.8,3.8],[2.8,4.4,6.5]])St(e,2.6,7);for(const[e,t]of[[-5,-5],[5,-5],[-5,.6],[5,.7],[-5,5.7],[5,5.8]]){const n=new jn(16766618,1.45,4.2,2);n.position.set(e,2.4,t+.35),be.add(n)}const i={...Gu,broomstick:7,"crystal-ball":5,"gold-scales":4,"advanced-potions":6};for(const e of Hu)d_(e.id,e.label,e.position,i[e.id],e.color);Ne(Ha.wallClue,[0,6.2,8.45],{width:6.4,size:38}),Ne(Ha.listTitle,[0,5.55,8.43],{width:7.8,size:32,color:"#f0d99c"}),ml("进入奥利凡德魔杖店",2)}function jo(i,e,t,n=0){const s=new J(new Ie(.025,.065,e,10),U(t,{roughness:.7}));return s.position.set(...i),s.rotation.z=Math.PI/2,s.rotation.y=n,s.castShadow=!0,be.add(s),s}function f_(){de.color.setHex(12032624),de.groundColor.setHex(2365198),jt({wall:4206623,floor:2365199,ceiling:1511435,fog:1051400}),Ct.fog.density=.034,Yt({index:2,name:"魔杖选择",objectiveText:"目标：第一阶段，从三种木材中找出与你产生稳定共鸣的一种",hint:"木材线索：闪电形旧伤旁，常青叶不会在严冬凋零。选错会触发失控魔法。",progress:"木材 ○  杖芯 ○  长度 ○"}),Ft.textContent=we("counter.wand",{count:0,mistakes:0}),I={progress:[],unlocked:!1,mistakes:0};const i=U(2824461,{roughness:.88}),e=U(5715741,{roughness:.8}),t=[7230258,5257507,8086080,4008732];for(const u of[-1,1]){k("高魔杖柜",[.72,6.35,16.4],[u*8.35,3.18,0],i);for(let d=0;d<8;d+=1){k("柜架横梁",[.86,.1,16.1],[u*7.92,.55+d*.73,0],e);for(let h=0;h<10;h+=1){const p=t[(d+h+(u>0?1:0))%t.length],g=k("积尘的魔杖盒",[.24,.48,1.25],[u*7.77,.82+d*.73,-7.1+h*1.55],U(p,{roughness:.95}));g.rotation.x=((d+h)%3-1)*.025}}}k("奥利凡德柜台",[8.2,1.15,1.3],[0,.58,-4.5],e),k("柜台台面",[8.65,.18,1.55],[0,1.2,-4.5],U(7753770,{roughness:.55}));for(const[u,d,h]of[[-2.5,6238744,1.1],[0,2692620,1.28],[2.5,10120255,1.42]])k("打开的魔杖盒",[1.8,.16,.48],[u,1.38,-4.42],U(1511435)),jo([u,1.55,-4.42],h,d);Ne("木材  ·  杖芯  ·  长度",[0,2.35,-4.95],{width:5.4,size:43});const n=[{id:"oak",label:"橡木",x:-3.2,color:9067051},{id:"holly",label:"冬青木",x:0,color:15656132},{id:"yew",label:"紫杉木",x:3.2,color:4792340}];for(const u of n){k(`${u.label}样本台`,[1.8,.85,1.2],[u.x,.42,1.25],i);const d=jo([u.x,1.16,1.25],1.35,u.color);d.name=`${u.label}木材样本`,d.userData={type:"wand-wood",woodId:u.id,label:u.label,selected:!1},We.push(d),Ne(u.label,[u.x,2,1.25],{width:1.65,size:40})}const s=[{id:"dragon-heartstring",label:"龙心弦",x:-3.2,color:10959653},{id:"phoenix-feather",label:"凤凰羽毛",x:0,color:15906891},{id:"unicorn-hair",label:"独角兽毛",x:3.2,color:15196623}];for(const u of s){const d=k(`${u.label}杖芯台`,[1.8,.85,1.2],[u.x,.42,-1.15],i);d.visible=!1;const h=new J(new Ie(.14,.14,1.05,14),U(u.color,{emissive:u.color,emissiveIntensity:.45}));h.position.set(u.x,1.25,-1.15),h.name=`${u.label}杖芯样本`,h.userData={type:"wand-core",coreId:u.id,label:u.label,selected:!1,pedestal:d},h.visible=!1,be.add(h),We.push(h)}const r=[{inches:9,label:"九英寸",x:-3.2,length:1.05},{inches:11,label:"十一英寸",x:0,length:1.3},{inches:13,label:"十三英寸",x:3.2,length:1.55}];for(const u of r){const d=k(`${u.label}校准台`,[1.8,.85,1.2],[u.x,.42,3.85],i);d.visible=!1;const h=jo([u.x,1.2,3.85],u.length,15656132);h.name=`${u.label}冬青木魔杖`,h.userData={type:"wand-length",inches:u.inches,label:u.label,selected:!1,pedestal:d},h.visible=!1,We.push(h);const p=Ne(u.label,[u.x,2.05,3.85],{width:1.7,size:38});p.visible=!1,h.userData.lengthLabel=p}const o=new Tt;o.position.set(4.8,0,-6.15);const a=new J(new Ie(.38,.58,1.7,12),U(2696235));a.position.y=.9,o.add(a);const l=new J(new Le(.3,16,12),U(13083772));l.position.y=1.95,o.add(l);const c=new J(new Le(.32,14,10,0,Math.PI*2,0,Math.PI*.58),U(14209213));c.position.y=2.06,o.add(c),be.add(o),k("后墙梯子左",[.14,5.7,.14],[-4.7,2.85,-8.35],e),k("后墙梯子右",[.14,5.7,.14],[-3.65,2.85,-8.35],e);for(let u=.45;u<5.5;u+=.48)k("梯子横档",[1.2,.1,.12],[-4.18,u,-8.28],e);Ne("OLLIVANDERS · 公元前 382 年",[0,6.18,-8.45],{width:6.5,size:42}),St([-5.2,4.7,-2.3],3.1,9),St([5.2,4.7,-2.3],3.1,9),St([0,4.5,-6.4],2.7,7);for(let u=0;u<12;u+=1){const d=new J(new Le(.025,6,6),new Nn({color:15387514})),h=[-5.5+u%6*2.2,1.3+u%4*1.15,-5.7+Math.floor(u/6)*5.8];d.position.set(...h),be.add(d),Mt.push({object:d,baseY:h[1],phase:u*.8,spin:0,bob:.22})}ml("登上霍格沃茨特快",3)}function p_(){de.color.setHex(9281736),de.groundColor.setHex(1512738),jt({wall:4208431,floor:2169624,ceiling:1119270,fog:921632}),Ct.fog.density=.022,Yt({index:3,name:"分院仪式",objectiveText:"目标：走近分院帽，观察大厅里的四学院象征",hint:"勇气、忠诚、智慧与野心各有象征；分院帽正在等待你的选择。",progress:"狮 ○  獾 ○  鹰 ○  蛇 ○"}),Ft.textContent=we("counter.sorting",{count:0,mistakes:0}),I={progress:[],unlocked:!1,mistakes:0};const i=U(4992538,{roughness:.84});for(const n of[-5.6,-1.9,1.9,5.6]){k("学院长桌",[1.45,.65,11.5],[n,.72,.8],i);for(let s=-4;s<=5;s+=1.8){const r=k("悬浮蜡烛",[.08,.5,.08],[n,3.2+(s+4)%3*.3,s],U(16115128));Mt.push({object:r,baseY:r.position.y,phase:n+s,spin:0,bob:.08})}}const e=[{id:"lion",symbol:"狮",label:"狮 · 勇气",x:-5.7,color:9184818},{id:"badger",symbol:"獾",label:"獾 · 忠诚",x:-1.9,color:11962927},{id:"eagle",symbol:"鹰",label:"鹰 · 智慧",x:1.9,color:2706554},{id:"snake",symbol:"蛇",label:"蛇 · 野心",x:5.7,color:2579523}];for(const n of e){k(`${n.label}学院旗`,[2.25,3.3,.16],[n.x,4.55,-8.55],U(n.color,{roughness:.9})),Ne(n.label,[n.x,4.55,-8.4],{width:2,size:40});const s=k(`${n.label}石徽`,[1.25,1.25,.32],[n.x,1.35,4.2],U(n.color,{emissive:n.color,emissiveIntensity:.12}));s.userData={type:"sorting-clue",symbolId:n.id,label:n.label,selected:!1},We.push(s),Ne(n.symbol,[n.x,1.35,4],{width:.85,size:74})}k("分院凳",[1.7,.22,1.45],[0,.72,-5.7],i);const t=new J(new It(.62,1.25,10),U(4863268,{roughness:.98}));t.position.set(0,1.45,-5.7),t.rotation.z=-.12,be.add(t),Ne("分院帽",[0,2.55,-5.8],{width:2.2,size:46}),St([-4.8,4.8,-3],3.2,11),St([4.8,4.8,-3],3.2,11)}function m_(){de.color.setHex(8885949),de.groundColor.setHex(1382433),jt({wall:3883336,floor:2435378,ceiling:1119520,fog:1053725}),Ct.fog.density=.019,Yt({index:0,name:"移动楼梯",objectiveText:"目标：依据钟摆与月相路线，依次稳定三座移动楼梯",hint:"路线铭文：从最低的平台起步；月光桥只在钟摆居中时停驻；最后登上最高塔。选错会让路线复位并增加 5 秒惩罚。",progress:"◇  ◇  ◇"}),Tn.textContent="第一部 · 第二章 · 第 1 关",I={progress:[],mistakes:0,timePenalty:0,unlocked:!1},Xu();const i=U(5857643,{roughness:.96}),e=U(10390104,{emissive:3221009,emissiveIntensity:.4}),t=[{id:"lower",label:"低塔 · 起点",x:-5.1,z:1.9,height:.3,symbol:"I"},{id:"moon",label:"月光桥 · 居中",x:0,z:-2,height:1,symbol:"☾"},{id:"upper",label:"高塔 · 终点",x:5.1,z:1.9,height:1.7,symbol:"III"}];for(const[r,o]of t.entries()){const a=new Tt;a.position.set(o.x,0,o.z),a.rotation.y=r===1?Math.PI:r===0?-.28:.28,be.add(a);for(let c=0;c<7;c+=1)k("会移动的石阶",[2.6,.28,.78],[0,.14+c*.27,c*-.7],i,!0,a);k("楼梯平台",[3.2,.3,2.2],[0,2+o.height,-4.6],i,!0,a);const l=k(o.label,[1.25,1.25,.26],[o.x,1.25,o.z+1],e);l.userData={type:"stair-route",stairId:o.id,label:o.label,selected:!1},We.push(l),Ne(o.symbol,[o.x,1.25,o.z+.84],{width:.8,size:72,color:"#d9c27b"}),Mt.push({object:a,baseY:0,phase:r*2.1,spin:0,bob:.16})}for(const r of[-7.1,-3.55,0,3.55,7.1])k("楼梯塔石柱",[.7,6.7,.7],[r,3.35,-7.7],i);for(const[r,o]of[[-6.5,4.8],[-3.2,3.9],[3.1,4.7],[6.4,3.7]])k("会说话的画像",[1.5,2,.18],[r,o,-8.25],U(6965285)),k("画像画布",[1.15,1.62,.1],[r,o,-8.12],U(3752027,{emissive:1515837,emissiveIntensity:.5}));const n=new Tt;n.position.set(0,6.1,-6.8),be.add(n),k("钟摆杆",[.12,3.4,.12],[0,-1.7,0],e,!0,n);const s=new J(new Le(.42,16,12),e);s.position.y=-3.4,n.add(s),Mt.push({object:n,baseY:6.1,phase:1.2,spin:.12,bob:0}),Ne("GRAND STAIRCASE · 月相路线",[0,6.2,-8.35],{width:6.3,size:40}),St([-5.8,4.8,-2.5],2.5,10),St([5.8,4.8,-2.5],2.5,10),St([0,5.5,3.8],2.2,9)}function g_(){de.color.setHex(10192813),de.groundColor.setHex(1774880),jt({wall:4207940,floor:2366760,ceiling:1314840,fog:1183254}),Ct.fog.density=.018,Yt({index:1,name:"会说话的画像",objectiveText:"目标：比较三幅画像的证词，按可信的发言顺序询问口令",hint:"学者说骑士不是第一位；骑士承认学者必须先发言；女士说自己在骑士之后。错误询问会惊动走廊并清空推理。",progress:"▢  ▢  ▢"}),Tn.textContent="第一部 · 第二章 · 第 2 关",I={progress:[],mistakes:0,suspicion:0,unlocked:!1},qu();const i=U(5326680,{roughness:.98}),e=U(9399605,{metalness:.35,roughness:.55});for(const n of[-6,-3,0,3,6])k("画像走廊立柱",[.65,6.5,.65],[n,3.25,-8.45],i);const t=[{id:"scholar",label:"蓝袍学者",quote:"“骑士绝不是第一位；我的月桂框知道开头。”",x:-4.7,color:3166069},{id:"knight",label:"银甲骑士",quote:"“学者必须先发言，女士保管最后一词。”",x:0,color:6975352},{id:"lady",label:"月桂女士",quote:"“我在骑士之后，银钥只为完整证词转动。”",x:4.7,color:7356511}];for(const n of t){k(`${n.label}画框`,[3.15,4.25,.26],[n.x,3.8,-8.42],e);const s=k(n.label,[2.65,3.72,.24],[n.x,3.8,-8.2],U(n.color,{emissive:n.color,emissiveIntensity:.28}));s.userData={type:"portrait-testimony",portraitId:n.id,label:n.label,quote:n.quote,selected:!1},We.push(s),Ne(n.label,[n.x,6.35,-8.05],{width:2.5,size:42})}k("走廊尽头银钥门",[3.1,5.5,.3],[0,2.75,8.55],U(2433835,{metalness:.5,roughness:.5})),Ne("SILVER KEY CORRIDOR",[0,5.9,8.35],{width:5.4,size:38});for(const n of[-6.5,-2.2,2.2,6.5])St([n,4.6,-2.2],2.2,9)}function v_(){de.color.setHex(7505569),de.groundColor.setHex(1119514),jt({wall:3423299,floor:2106923,ceiling:1053978,fog:725013}),Ct.fog.density=.024,Yt({index:2,name:"管理员的巡夜",objectiveText:"目标：利用盔甲遮挡、猫铃声与暗门，避开管理员的灯光巡查",hint:"巡夜图记：灯光先扫过空盔甲；猫铃能把脚步引向反方向；最后掀开独角兽挂毯。走错会清空路线并提高警戒。",progress:"◇  ◇  ◇"}),Tn.textContent="第一部 · 第二章 · 第 3 关",I={progress:[],mistakes:0,alert:0,unlocked:!1},Yu();const i=U(4739674,{roughness:.98}),e=U(9139269,{metalness:.48,roughness:.54});for(const u of[-6.8,-3.4,0,3.4,6.8])k("巡夜拱廊立柱",[.64,6.6,.64],[u,3.3,-8.4],i);for(const u of[-5.8,-2.1,1.6,5.3])k("月光地砖",[14.8,.03,1],[0,.03,u],U(6321546,{emissive:2505037,emissiveIntensity:.32}),!1);const t=new Tt;t.position.set(-5,0,.7),be.add(t),k("空盔甲底座",[1.55,.3,1.25],[0,.15,0],i,!0,t),k("空盔甲胸甲",[1.05,1.55,.55],[0,1.35,0],e,!0,t);const n=new J(new Le(.48,12,10),e);n.position.y=2.45,t.add(n);const s=k("空盔甲阴影",[1.8,3.2,.24],[-5,1.6,1.15],U(2436405,{emissive:1515821,emissiveIntensity:.25}));s.userData={type:"patrol-cover",hidingPlaceId:"armor",label:"空盔甲阴影",selected:!1},We.push(s),Ne("I · 盔甲遮挡",[-5,3.55,1.05],{width:2.4,size:38}),k("猫铃机关台",[1.5,.8,1.5],[0,.4,-1.4],i);const r=new J(new Le(.48,14,10),U(10122304,{emissive:4796690,emissiveIntensity:.45}));r.position.set(0,1.05,-1.4),r.name="猫铃机关",r.userData={type:"patrol-cover",hidingPlaceId:"cat",label:"猫铃机关",selected:!1},be.add(r),We.push(r),Ne("II · 猫铃诱饵",[0,2.2,-1.4],{width:2.5,size:38});const o=k("独角兽暗门挂毯",[3.5,4.7,.22],[5,2.8,-8.15],U(3231074,{emissive:1518908,emissiveIntensity:.35}));o.userData={type:"patrol-cover",hidingPlaceId:"tapestry",label:"独角兽暗门挂毯",selected:!1},We.push(o),Ne("III · 独角兽挂毯",[5,5.75,-8],{width:3.2,size:38});const a=new Tt;a.position.set(-6.5,2.2,-5.7),be.add(a);const l=new jn(16766602,3.2,7,2);a.add(l);const c=new J(new Le(.16,10,8),new Nn({color:16763243}));a.add(c),Mt.push({object:a,baseY:2.2,phase:.5,spin:.22,bob:.08}),Ne("NIGHT PATROL · 保持安静",[0,6.25,-8.35],{width:6,size:39}),St([-6.8,4.5,5.4],1.5,7),St([6.8,4.5,5.4],1.5,7)}function __(){de.color.setHex(6649183),de.groundColor.setHex(1183501),jt({wall:3487791,floor:2170136,ceiling:1184014,fog:921612}),Ct.fog.density=.022,tt&&(Ht.position.z=us.mobileCameraZ),Yt({index:3,name:"三头犬活板门",objectiveText:"目标：按守门生物能接受的层次，奏出完整安眠旋律",hint:"褪色乐谱写着：先让气息像夜风进入梦乡，再让琴弦托住梦境，最后以发条的轻响封住鼾声。错奏会重置旋律并惊醒守卫。",progress:"·  ·  ·"}),I={progress:[],mistakes:0,wakefulness:0,unlocked:!1},ju();const i=U(4934206,{roughness:.98}),e=U(3877408,{roughness:1}),t=U(1511437,{roughness:1}),n=U(2368290,{metalness:.72,roughness:.48}),s=U(14141603,{roughness:.62});for(const d of[-6.4,-3.2,0,3.2,6.4])k("禁区石柱",[.68,6.6,.68],[d,3.3,-8.35],i);const r=new Tt;r.position.set(0,.08,-5.05),be.add(r),k("下沉式橡木活板门",[4.5,.18,4.15],[0,.08,0],U(3416342,{roughness:.9}),!1,r),k("活板门铁横箍",[4.58,.12,.22],[0,.2,0],n,!1,r),k("活板门铁纵箍",[.22,.12,4.2],[0,.2,0],n,!1,r);const o=new J(new rt(.32,.07,10,28),n);o.rotation.x=Math.PI/2,o.position.set(0,.3,1.15),r.add(o);for(const d of[-1.45,-1.15,1.15,1.45]){const h=k("守卫爪痕",[.055,.035,.7],[d,.25,.62],U(1445386),!1,r);h.rotation.y=d<0?-.18:.18}const a=new Tt;a.position.set(0,.28,-5.75),tt&&a.scale.setScalar(us.mobileGuardianScale),be.add(a);const l=new J(new Le(1.72,20,14),e);l.scale.set(1.75,.9,1.12),l.position.y=2.05,l.castShadow=!0,a.add(l);for(const[d,h]of[[-1.8,-.45],[1.8,-.45],[-1.75,.62],[1.75,.62]]){const p=new J(new Ie(.34,.43,1.55,12),e);p.position.set(d,1.05,h),p.castShadow=!0,a.add(p);const g=new J(new Le(.48,12,9),t);g.scale.set(1.15,.5,1.35),g.position.set(d,.28,h+.12),a.add(g);for(const _ of[-.2,0,.2]){const m=new J(new It(.055,.28,7),s);m.rotation.x=Math.PI/2,m.position.set(d+_,.2,h+.58),a.add(m)}}[-1.35,0,1.35].forEach((d,h)=>{const p=new J(new Ie(.52,.7,1.25,12),e);p.rotation.z=h===0?-.28:h===2?.28:0,p.position.set(d*.72,3.05,-.05),a.add(p);const g=new J(new Le(.86,18,14),e);g.scale.set(1,1.03,1.08),g.position.set(d,3.8+(h===1?.22:0),.12),a.add(g);const _=new J(new Le(.43,12,9),t);_.scale.set(1.08,.68,.88),_.position.set(d,g.position.y-.2,.78),a.add(_);for(const m of[-.25,.25]){const f=new J(new Le(.07,8,8),new Nn({color:14066493}));f.position.set(d+m,g.position.y+.14,.72),a.add(f)}for(const m of[-.2,.2]){const f=new J(new It(.065,.3,7),s);f.position.set(d+m,g.position.y-.42,1.08),a.add(f)}for(const m of[-.48,.48]){const f=new J(new It(.25,.65,8),e);f.position.set(d+m,g.position.y+.65,.08),a.add(f)}}),Mt.push({object:a,baseY:.28,phase:.8,spin:0,bob:.035});const c=new jn(14269314,3.2,8,2);c.position.set(0,5.5,-2.3),be.add(c);const u=U(13482892,{emissive:3811858,emissiveIntensity:.32,roughness:.92});k("褪色三行安眠乐谱",[5.6,2.25,.12],[0,5.45,-8.12],u,!1);for(const d of[4.94,5.43,5.92])for(let h=0;h<3;h+=1)k("乐谱谱线",[4.9,.025,.025],[0,d+h*.08,-8.02],t,!1);Ne(Ba.scoreClue,[0,6.72,-7.95],{width:5.8,size:34});for(const[d,h]of Yv.entries()){const[p,g,_]=h.position,m=tt?us.mobileInstrumentX[d]:p,f=new Tt;f.position.set(m,0,_),tt&&f.scale.setScalar(us.mobileInstrumentScale),be.add(f),k(`${h.label}谱架`,[2.35,.75,1.75],[0,.38,0],i,!0,f);let E;if(h.id==="flute"){E=new J(new Ie(.12,.12,1.85,16),U(12106154,{emissive:2505799,emissiveIntensity:.55,metalness:.48,roughness:.35})),E.rotation.z=Math.PI/2,E.position.set(0,g,0),f.add(E),k("横笛银吹口",[.24,.3,.22],[-.78,g,0],n,!1,f);for(let v=0;v<7;v+=1){const w=new J(new Le(.045,8,8),t);w.position.set(-.52+v*.18,g+.02,.11),f.add(w)}const b=new J(new rt(.56,.035,7,32,Math.PI*1.3),U(7780822,{emissive:2653348,emissiveIntensity:1.8}));b.rotation.x=Math.PI/2,b.position.set(-.92,g+.2,.1),f.add(b)}else if(h.id==="harp"){E=k("竖琴共鸣箱",[1.45,.28,.42],[0,g-.48,0],U(7357983,{emissive:4138253,emissiveIntensity:.45}),!0,f);const b=k("新月竖琴立柱",[.18,2,.25],[-.62,g+.42,0],U(9396779),!0,f);b.rotation.z=-.18;const v=k("竖琴弧颈",[1.35,.2,.26],[0,g+1.26,0],U(9396779),!0,f);v.rotation.z=.2;for(let w=0;w<9;w+=1){const T=.58+w*.08;k("月银琴弦",[.018,T,.025],[-.43+w*.11,g+.05+T/2,.05],U(14280683,{emissive:7048096,emissiveIntensity:1.1,metalness:.7}),!1,f)}}else{E=k("星纹音乐盒盒体",[1.65,.75,1.05],[0,g-.15,0],U(2637663,{emissive:1255496,emissiveIntensity:.55,metalness:.18}),!0,f);const b=k("音乐盒开启盒盖",[1.65,.12,1],[0,g+.52,-.42],U(3561340),!0,f);b.rotation.x=-.82;const v=new J(new Ie(.18,.18,1.1,14),U(12882744,{metalness:.8,roughness:.28}));v.rotation.z=Math.PI/2,v.position.set(0,g+.15,.08),f.add(v);const w=new J(new rt(.18,.045,8,20),n);w.rotation.y=Math.PI/2,w.position.set(1,g-.08,0),f.add(w);for(const T of[-.45,0,.45]){const C=new J(new Ms(.1),U(15980408,{emissive:12879908,emissiveIntensity:1.8}));C.position.set(T,g+.72,-.18),f.add(C)}}E.name=h.label,E.userData={type:"lullaby-instrument",instrumentId:h.id,label:h.label,selected:!1},We.push(E),Ne(h.clue,[m,tt?2.55:3.05,_],{width:tt?us.mobileLabelWidth:2.65,size:tt?us.mobileLabelFontSize:31})}Ne(Ba.wallClue,[0,.95,-8],{width:5.8,size:34}),St([-6.2,4.6,1.2],1.8,8),St([6.2,4.6,1.2],1.8,8)}function x_(){de.color.setHex(10471392),de.groundColor.setHex(2374701),jt({wall:5401432,floor:2506540,ceiling:7902886,fog:9417669}),Ct.fog.density=.012,Yt({index:0,name:"飞行课遗失物",objectiveText:"目标：借助风向旗判断重量，依次把三件遗失物送入对应的安全轨迹",hint:"风向板写着：最轻的红色织物先借低风归队；有月纹的笔记随后穿过中环；沉重黄铜罗盘最后沿高风落到新生手中。错序会卷起乱流并吹散全部物品。",progress:"○  ○  ○"}),Tn.textContent="第一部 · 第三章 · 第 1 关",I={progress:[],mistakes:0,turbulence:0,unlocked:!1},$u();const i=U(3495995,{roughness:1}),e=U(6714219,{roughness:.96}),t=U(10189117,{metalness:.42,roughness:.52});k("飞行训练草坪",[17.6,.18,17.6],[0,.02,0],i,!1);for(const r of[-7.2,-3.6,0,3.6,7.2])k("训练场石柱",[.45,4.8,.45],[r,2.4,-8.35],e);const n=[{id:"scarf-keeper",label:"红色守门员围巾",clue:"I · 低风 · 守门员",x:-4.8,y:1.15,color:10432312},{id:"notebook-scholar",label:"月纹飞行笔记",clue:"II · 中环 · 学者",x:0,y:2.05,color:5072519},{id:"compass-first-year",label:"黄铜航向罗盘",clue:"III · 高风 · 新生",x:4.8,y:2.95,color:10977598}];for(const[r,o]of n.entries()){const a=new J(new rt(1.15,.11,10,28),t);a.position.set(o.x,o.y+1.15,-4.6),a.name=`${o.label}安全轨迹环`,be.add(a);const l=k(o.label,[1.65,.48,.82],[o.x,o.y,1.8],U(o.color,{emissive:o.color,emissiveIntensity:.35}));l.userData={type:"flying-delivery",deliveryId:o.id,label:o.label,selected:!1},We.push(l),Mt.push({object:l,baseY:o.y,phase:r*1.7,spin:.18,bob:.14}),Ne(o.clue,[o.x,5.45,-8.1],{width:3,size:34,color:"#e5d79a"})}const s=new Tt;s.position.set(-6.8,0,5.4),be.add(s),k("风向旗杆",[.12,5.4,.12],[0,2.7,0],t,!0,s),k("红金风向旗",[2.3,.65,.08],[1.1,4.8,0],U(10958141,{emissive:3477524,emissiveIntensity:.3}),!0,s),Mt.push({object:s,baseY:0,phase:.4,spin:.08,bob:0}),Ne("FLYING LESSON · 顺风投递",[0,6.2,-8.2],{width:6,size:39}),St([-5.5,4.2,4.6],1.2,8),St([5.5,4.2,4.6],1.2,8)}function b_(){de.color.setHex(9217704),de.groundColor.setHex(1517610),jt({wall:4350052,floor:2373948,ceiling:2308154,fog:1651254}),Ct.fog.density=.02,Yt({index:1,name:"巨怪洗手间",objectiveText:"目标：依次稳定漏水、悬浮瓦砾，再放下横梁架出逃生路线",hint:"破裂水管正在冲散落脚点。先转动月纹阀止水，再让碎石升起清出通道，最后才能把高处横梁平稳放到沟渠上。错序会让巨怪逼近并震塌路线。",progress:"◇  ◇  ◇"}),Tn.textContent="第一部 · 第三章 · 第 2 关",I={progress:[],mistakes:0,danger:0,unlocked:!1},Ku();const i=U(6718599,{roughness:.82}),e=U(3361872,{roughness:.95});k("洗手间湿地砖",[17.6,.18,17.6],[0,.02,0],e,!1);for(const l of[-7.2,-4.8,-2.4,0,2.4,4.8,7.2])k("拱形瓷砖墙柱",[.42,6.4,.5],[l,3.2,-8.35],i);k("溢水沟渠",[15,.08,2.15],[0,.16,-2.6],U(1588555,{emissive:730674,emissiveIntensity:.8}),!1);const t=[{id:"seal-pipe",label:"月纹止水阀",clue:"I · 先止住洪水",x:-4.8,y:1.35,color:5602707},{id:"levitate-rubble",label:"悬浮碎石阵",clue:"II · 再清出通道",x:0,y:1.6,color:7695715},{id:"lower-beam",label:"锁链橡木横梁",clue:"III · 最后架桥",x:4.8,y:2.5,color:8476207}];for(const[l,c]of t.entries()){k(`${c.label}基座`,[2.5,.7,1.8],[c.x,.35,2.6],i);const u=k(c.label,[1.85,.55,1.15],[c.x,c.y,2.6],U(c.color,{emissive:c.color,emissiveIntensity:.32}));u.userData={type:"troll-obstacle",obstacleId:c.id,label:c.label,selected:!1},We.push(u),Mt.push({object:u,baseY:c.y,phase:l*1.4,spin:.08,bob:.06}),Ne(c.clue,[c.x,4.55,-8.05],{width:2.9,size:35,color:"#b9d8d7"})}const n=new Tt;n.position.set(0,0,-6.2),be.add(n);const s=U(7174246,{roughness:1}),r=new J(new Le(1.35,14,11),s);r.scale.set(1.25,1.55,.9),r.position.y=2.15,n.add(r);const o=new J(new Le(.78,12,10),s);o.position.set(0,4.05,.15),n.add(o);const a=k("巨怪木棒",[.48,4.4,.48],[1.5,2.15,0],U(5190689),!0,n);a.rotation.z=-.3,Mt.push({object:n,baseY:0,phase:.7,spin:.015,bob:.055}),Ne("TROLL WASHROOM · 悬浮逃生",[0,6.2,-8.15],{width:6.2,size:38,color:"#b9d8d7"}),St([-6.2,4.8,4.5],1.35,8),St([6.2,4.8,4.5],1.35,8)}function y_(){de.color.setHex(6714779),de.groundColor.setHex(1381149),jt({wall:3354427,floor:2104100,ceiling:1315098,fog:855060}),Ct.fog.density=.024,Yt({index:2,name:"图书馆禁书区",objectiveText:"目标：依据馆藏年代，按从古到今的顺序点亮三本安全书脊",hint:"目录铜牌记载：四学院建校录最古老；龙灾账册写于其后数百年；月蚀纪事刚完成修订。避开锁链缠绕、会尖叫的无年卷。",progress:"▱  ▱  ▱"}),Tn.textContent="第一部 · 第三章 · 第 3 关",I={progress:[],mistakes:0,noise:0,unlocked:!1},Zu();const i=U(3023132,{roughness:.92}),e=U(9401668,{metalness:.48,roughness:.5}),t=U(4538699,{roughness:.98});for(const s of[-7.2,-3.6,0,3.6,7.2])k("禁书区拱柱",[.52,6.6,.65],[s,3.3,-8.38],t);for(const s of[-5.8,0,5.8]){k("高层书架",[4.1,5.7,.75],[s,3,-7.9],i);for(const r of[1.25,2.55,3.85,5.15])k("书架横板",[3.8,.13,1.05],[s,r,-7.55],e)}const n=[{id:"founders-index",label:"四学院建校录",clue:"I · 建校之初",x:-5.1,color:8008760},{id:"dragon-ledger",label:"北境龙灾账册",clue:"II · 第七次龙灾",x:-1.7,color:8610107},{id:"moon-chronicle",label:"银月蚀纪事",clue:"III · 本年修订",x:1.7,color:4217722},{id:"screaming-codex",label:"锁链无年卷",clue:"禁 · 年代被抹除",x:5.1,color:4533331}];for(const[s,r]of n.entries()){k(`${r.label}阅览台`,[2.35,.85,1.7],[r.x,.42,2.3],t);const o=k(r.label,[1.45,1.85,.42],[r.x,1.75,2.3],U(r.color,{emissive:r.color,emissiveIntensity:.32}));o.userData={type:"restricted-book",bookId:r.id,label:r.label,selected:!1},We.push(o),Mt.push({object:o,baseY:1.75,phase:s*1.35,spin:.04,bob:.07}),Ne(r.clue,[r.x,3.25,2.3],{width:2.45,size:34,color:"#b9c8ef"})}k("禁书区出口封印",[3.2,5.5,.3],[0,2.75,8.55],U(2499125,{emissive:2370133,emissiveIntensity:.55})),Ne("RESTRICTED SECTION · 历史书脊",[0,6.2,-8.15],{width:6.4,size:38,color:"#b9c8ef"}),St([-6.4,4.7,4.8],1.35,8),St([6.4,4.7,4.8],1.35,8)}function S_(){de.color.setHex(8885688),de.groundColor.setHex(1578278),jt({wall:3880268,floor:2170155,ceiling:1512223,fog:1118234}),Ct.fog.density=.018,Yt({index:3,name:"厄里斯魔镜",objectiveText:"目标：比较镜中欲望与现实处境，依次选择真正需要的三件物品",hint:"镜中人戴着王冠、捧着奖杯，却在现实的寒风中发抖。先御寒，再为黑暗出口照路；最后记住：能共同离开的人，比独占的荣誉更重要。",progress:"◇  ◇  ◇"}),Tn.textContent="第一部 · 第三章 · 第 4 关",I={progress:[],mistakes:0,illusion:0,unlocked:!1},Ju();const i=U(11187398,{metalness:.72,roughness:.24}),e=U(2433335,{roughness:.9});for(const n of[-7.2,-4.8,4.8,7.2])k("镜廊石柱",[.52,6.5,.52],[n,3.25,-8.35],e);k("魔镜银框",[5.7,6.25,.42],[0,3.2,-8.42],i),k("魔镜镜面",[4.75,5.35,.18],[0,3.15,-8.12],U(7373478,{emissive:3754096,emissiveIntensity:.9,metalness:.82,roughness:.16}),!1),Ne("镜中所见 ≠ 现实所需",[0,6.35,-8.02],{width:5.5,size:38,color:"#d9ddf2"});const t=[{id:"wool-cloak",label:"旧羊毛斗篷",clue:"I · 现实：寒风",x:-6.1,color:7558730},{id:"brass-lantern",label:"黄铜提灯",clue:"II · 现实：暗路",x:-3.05,color:10779189},{id:"shared-token",label:"同伴木牌",clue:"III · 现实：同行",x:0,color:5207647},{id:"jeweled-crown",label:"镜中宝冠",clue:"欲望 · 独占荣耀",x:3.05,color:9254493},{id:"victory-cup",label:"镜中金杯",clue:"欲望 · 空洞胜利",x:6.1,color:9333553}];for(const[n,s]of t.entries()){k(`${s.label}石台`,[2.45,.8,1.7],[s.x,.4,2.5],e);const r=k(s.label,[1.45,1.05,.8],[s.x,1.45,2.5],U(s.color,{emissive:s.color,emissiveIntensity:.34,metalness:s.id.includes("crown")||s.id.includes("cup")?.45:.08}));r.userData={type:"mirror-choice",itemId:s.id,label:s.label,selected:!1},We.push(r),Mt.push({object:r,baseY:1.45,phase:n*1.1,spin:.06,bob:.06}),Ne(s.clue,[s.x,3,2.5],{width:2.45,size:31,color:"#d9ddf2"})}St([-6.4,4.8,4.7],1.25,8),St([6.4,4.8,4.7],1.25,8)}function M_(i,e){const t=i.points.map(l=>new P(...l)),n=new Su(t),s=U(i.layer==="exit"?3234356:2573613,{emissive:1390879,emissiveIntensity:i.layer==="exit"?.58:.36,roughness:.94}),r=new J(new ll(n,28,i.radius,9,!1),s);r.name=i.id,r.castShadow=!0,r.receiveShadow=!0,be.add(r);const o=U(5078341,{emissive:1919014,emissiveIntensity:.4,roughness:.9});for(let l=0;l<i.leaves;l+=1){const c=(l+1)/(i.leaves+1),u=new J(new Le(.18,10,7),o);u.name=`${i.id}-leaf`,u.scale.set(1.65,.32,.72),u.position.copy(n.getPoint(c)),u.rotation.set(e*.31,l*1.7,e%2?.55:-.55),u.castShadow=!0,be.add(u)}const a=U(7304513,{roughness:.82});for(let l=0;l<i.thorns;l+=1){const c=(l+1)/(i.thorns+1),u=new J(new It(.07,.34,7),a);u.name=`${i.id}-thorn`,u.position.copy(n.getPoint(c)).add(new P(.1,.05,0)),u.rotation.z=e%2?1.05:-1.05,be.add(u)}Mt.push({object:r,baseY:0,phase:e*.43,spin:0,bob:.012})}function E_(i){const e=new J(new Le(.34,18,14),U(i.color,{emissive:i.color,emissiveIntensity:.5,transparent:!0,opacity:.92}));e.name=i.label;const t=new Eu({color:i.model.flameColor??i.model.breathColor,emissive:i.model.flameColor??i.model.breathColor,emissiveIntensity:1.45,roughness:.28,transparent:!0,opacity:.9});if(i.model.kind==="breath-orb")for(let n=0;n<i.model.rings;n+=1){const s=new J(new rt(.48+n*.16,.025,8,28),t);s.rotation.set(Math.PI/2,n*.45,n*.32),e.add(s)}else if(i.model.kind==="bluebell-flame"){for(let s=0;s<i.model.petals;s+=1){const r=s/i.model.petals*Math.PI*2,o=new J(new Le(.22,12,8),t);o.scale.set(.55,1.45,.42),o.position.set(Math.cos(r)*.34,-.12,Math.sin(r)*.34),o.rotation.z=Math.cos(r)*.5,e.add(o)}const n=new J(new It(.25,.82,14),t);n.position.y=.56,e.add(n)}else if(i.model.kind==="steady-lantern"){const n=U(5468288,{metalness:.65,roughness:.35});for(const s of[-.42,.42])for(const r of[-.3,.3])k("恒光灯框",[.07,1.15,.07],[s,0,r],n,!0,e);for(let s=0;s<i.model.pulses;s+=1){const r=new J(new rt(.28+s*.12,.035,8,24),t);r.rotation.x=Math.PI/2,r.position.y=-.2+s*.3,e.add(r)}}else for(let n=0;n<i.model.flameCount;n+=1){const s=n/i.model.flameCount*Math.PI*2,r=new J(new It(.16,.82+n%2*.3,9),t);r.position.set(Math.cos(s)*.48,.25+n%2*.18,Math.sin(s)*.48),r.rotation.z=Math.cos(s)*.75,r.rotation.x=Math.sin(s)*.75,e.add(r)}return e}function w_(){de.color.setHex(7179368),de.groundColor.setHex(1317653),jt({wall:2701100,floor:1516313,ceiling:1120273,fog:857615}),Ct.fog.density=.024,Yt({index:0,name:"魔鬼网",objectiveText:"目标：保持镇静，按正确节奏控制蓝铃火焰，让藤蔓松开地下出口",hint:"挣扎会让藤蔓收紧。先放松摆脱缠绕，再点燃冷焰，最后维持稳定光照；猛烈爆燃只会惊动整片根网。",progress:"○  ○  ○"}),I={progress:[],mistakes:0,constriction:0,unlocked:!1},Qu(),k("根网出口",[5,.24,4.5],[0,.06,-2.1],U(461832,{emissive:1524519,emissiveIntensity:.7,roughness:1}),!1);const i=U(5398605,{roughness:.98});for(let t=0;t<18;t+=1){const n=t/18*Math.PI*2,s=k("破裂出口石环",[.62,.32,.76],[Math.cos(n)*2.55,.16,-2.1+Math.sin(n)*2.3],i);s.rotation.y=-n,s.rotation.z=(t%3-1)*.12}zv.forEach(M_);for(const[t,n]of Bv.entries()){const s=new J(new Ie(1.05,1.22,.62,10),U(2502951,{roughness:.96}));s.name=`${n.label}石台`,s.position.set(n.x,.31,3.6),s.castShadow=!0,s.receiveShadow=!0,be.add(s);const r=E_(n);r.position.set(n.x,1.5,3.6),r.userData={type:"devils-snare-action",actionId:n.id,label:n.label,selected:!1},be.add(r),We.push(r),Mt.push({object:r,baseY:1.5,phase:t*1.2,spin:.07,bob:.06}),Ne(n.clue,[n.x,2.85,3.6],{width:1.9,size:27,color:"#b9e2c0"})}Ne(Ou.wallClue,[0,6.05,-8.1],{width:7.2,size:34,color:"#b9e2c0"});const e=new jn(7321343,3.2,12,2);e.position.set(0,4.5,1.2),e.castShadow=!0,be.add(e)}function T_(i){const{model:e}=i,t=U(i.color,{emissive:i.color,emissiveIntensity:.48,metalness:.82,roughness:e.metal==="gold"?.2:.3}),n=new Ie(.105,.105,e.shaftLength,14);n.rotateZ(Math.PI/2);const s=new J(n,t);s.name=i.label,s.castShadow=!0;const r=new J(new rt(e.bowRadius,.105,10,28),t);r.name=`${i.label}钥匙环`,r.position.x=-(e.shaftLength/2+e.bowRadius*.72),r.rotation.z=-Math.PI/2,s.add(r);const o=t.clone();for(let l=0;l<e.teeth;l+=1){const c=new J(new vt(.16,.22+l*.035,.12),o);c.name=`${i.label}锁齿`,c.position.set(e.shaftLength/2-l*.16,-.14-l*.025,0),s.add(c)}const a=U(11454952,{emissive:4349826,emissiveIntensity:.42,transparent:!0,opacity:.86,roughness:.5,side:xn});for(const l of e.wings){const c=l.side==="left"?-1:1,u=new Tt;u.name=`${i.label}${l.side==="left"?"左翼":"右翼"}`,u.position.set(c*.22,.04,0),u.rotation.z=l.bend;for(let d=0;d<l.feathers;d+=1){const h=new J(new Le(.24,12,8),a);h.name=`${u.name}羽片`,h.scale.set(1.5-d*.12,.34,.18),h.position.set(c*(.22+d*.16),.3+d*.12,0),h.rotation.z=c*(.42+d*.09),u.add(h)}s.add(u)}if(e.metal==="gold")for(let l=0;l<6;l+=1){const c=new J(new Le(.055,10,8),U(14241123,{emissive:61e5,emissiveIntensity:.7,metalness:.35,roughness:.25})),u=l/6*Math.PI*2;c.position.set(r.position.x+Math.cos(u)*e.bowRadius,Math.sin(u)*e.bowRadius,.08),s.add(c)}return s}function A_(i){const e=U(7907552,{emissive:3234706,emissiveIntensity:1.1});for(let t=0;t<i.evidence.orbitMarkers;t+=1){const n=-t*.72,s=new J(new Le(.075+t*.008,10,8),e);s.name="顺时针下沉轨迹标记",s.position.set(i.x+Math.cos(n)*(.85-t*.04),2.28-t*.12,i.display.z+Math.sin(n)*.48),be.add(s)}}function C_(){de.color.setHex(8558262),de.groundColor.setHex(1514283),jt({wall:3556189,floor:2107450,ceiling:1251367,fog:1120038}),Ct.fog.density=.021,Yt({index:1,name:"飞钥匙房",objectiveText:"目标：依次确认翅膀损伤、飞行轨迹和锁孔材质，锁定唯一真钥匙",hint:"门锁留下银屑；真正用过的钥匙左翼弯折，负重后会沿顺时针轨迹下沉。先观察损伤，再追踪轨迹，最后核对银色钥匙。",progress:"◇  ◇  ◇"}),Tn.textContent=we("hud.roomKicker",{book:1,chapter:4,room:2}),I={progress:[],mistakes:0,pursuit:0,unlocked:!1},ed();const i=U(6582925,{metalness:.32,roughness:.66});for(const n of[-7.2,-4.8,4.8,7.2])k("钥匙厅高柱",[.55,6.4,.55],[n,3.2,-8.3],i);k("银屑锁门",[4.1,5.4,.3],[0,2.7,-8.45],U(3160138,{metalness:.62,roughness:.35}));const e=U(14280946,{emissive:6256784,emissiveIntensity:.9,metalness:.9,roughness:.22});for(let n=0;n<12;n+=1){const s=new J(new Ms(.035+n%3*.012),e);s.name="锁孔银屑",s.position.set(-.22+n%4*.13,2.2+Math.floor(n/4)*.11,-8.22),s.rotation.set(n*.3,n*.5,0),be.add(s)}Ne(Nu.wallClue,[0,6.15,-8.05],{width:7.4,size:32,color:"#c9dcff"});for(const[n,s]of kv.entries()){k(`${s.label}观察台`,[2.55,.65,1.55],[s.x,.33,s.display.z],U(2699847));const r=T_(s);r.position.set(s.x,1.75,s.display.z),r.rotation.x=-.16,be.add(r),s.evidence.motion==="clockwise-descending"&&A_(s),r.userData={type:"flying-key-clue",clueId:s.id,label:s.label,selected:!1},We.push(r),Mt.push({object:r,baseY:1.75,phase:n*1.35,spin:.1,bob:.18}),Ne(s.clue,[s.x,3.05,s.display.z],{width:2.45,size:28,color:"#c9dcff"})}const t=new jn(9091327,3.1,13,2);t.position.set(0,5.7,1.2),be.add(t)}function $o(i,e){const t=new J(new Ie(.56,.66,.24,16),e);t.position.y=.12,t.castShadow=!0,t.receiveShadow=!0;const n=(s,r,o=[0,0,0])=>{const a=new J(s,e);return a.position.set(...r),a.rotation.set(...o),a.castShadow=!0,a.receiveShadow=!0,t.add(a),a};if(n(new Ie(.45,.53,.18,16),[0,.23,0]),i.piece==="pawn")n(new Ie(.25,.42,.72,14),[0,.65,0]),n(new rt(.29,.07,8,16),[0,1.02,0],[Math.PI/2,0,0]),n(new Le(i.headRadius??.24,16,10),[0,1.25,0]);else if(i.piece==="rook"){n(new Ie(.37,.46,.88,12),[0,.72,0]),n(new Ie(.52,.39,.28,12),[0,1.28,0]);const s=i.battlements??6;for(let r=0;r<s;r+=1){const o=r/s*Math.PI*2;n(new vt(.2,.3,.22),[Math.sin(o)*.38,1.55,Math.cos(o)*.38],[0,o,0])}}else if(i.piece==="knight"){n(new Ie(.28,.45,.62,12),[0,.58,0]),n(new Ni(.29,.65,5,10),[-.08,1.08,0],[0,0,-.38]),n(new vt(.62,.38,.46),[.25,1.43,0],[0,0,-.12]),n(new vt(.42,.2,.38),[.65,1.32,0],[0,0,-.08]);for(const r of[-.14,.14])n(new It(.11,.34,8),[.08,1.78,r],[0,0,-.18]);const s=i.maneRidges??4;for(let r=0;r<s;r+=1)n(new It(.1,.32,6),[-.35+r*.08,1.5-r*.18,0],[0,0,-1.15])}else if(n(new Ie(.27,.45,.86,14),[0,.7,0]),n(new rt(.32,.07,8,18),[0,1.13,0],[Math.PI/2,0,0]),i.piece==="bishop")n(new Le(.27,14,10),[0,1.4,0]),n(new It(.19,.48,12),[0,1.74,0]);else if(i.piece==="queen"){n(new Le(.24,14,10),[0,1.38,0]);const s=i.crownSpikes??6;for(let r=0;r<s;r+=1){const o=r/s*Math.PI*2;n(new It(.09,.38,7),[Math.sin(o)*.27,1.72,Math.cos(o)*.27])}n(new Le(.11,10,8),[0,1.94,0])}else n(new Le(.25,14,10),[0,1.39,0]),n(new vt(.13,.58,.13),[0,1.84,0]),n(new vt(.48,.13,.13),[0,1.9,0]);return t.scale.setScalar((i.height??1.75)/1.75),t}function R_(){de.color.setHex(10132646),de.groundColor.setHex(1513243),jt({wall:4013379,floor:2105381,ceiling:1381658,fog:1052692}),Ct.fog.density=.018,tt&&(Ht.position.z=Ut.mobileCameraZ),Yt({index:2,name:"巫师棋",objectiveText:"目标：用最少牺牲打开通往对岸的安全棋路",hint:"黑后封锁中央。先用边兵引开主教，再让骑士双攻国王与城堡，最后直车沿空出的纵线推进；贸然冲后会让已投入的棋子全部被吃。",progress:"◇  ◇  ◇"}),I={progress:[],mistakes:0,captured:0,unlocked:!1},td();const i=U(12170666,{roughness:.78}),e=U(2697777,{roughness:.86}),t=U(5592671,{roughness:.96});for(let s=0;s<8;s+=1)for(let r=0;r<8;r+=1)k("巫师棋盘格",[Ut.cellSize,.16,Ut.cellSize],[Ut.boardStartX+r*Ut.cellSize,.05,Ut.boardStartZ+s*Ut.cellSize],(s+r)%2?e:i,!1);const n=["rook","knight","bishop","queen","king","bishop","knight","rook"];for(const[s,r,o]of[[0,"黑方",e],[7,"白方",i]]){for(let l=0;l<8;l+=1){const c=$o({piece:n[l],height:1.7},o);c.name=`${r}${n[l]}巨型棋子`,c.position.set(Ut.boardStartX+l*Ut.cellSize,.18,Ut.boardStartZ+s*Ut.cellSize),be.add(c),Mt.push({object:c,baseY:.18,phase:l*.55,spin:0,bob:.025})}const a=s===0?1:6;for(let l=0;l<8;l+=1){const c=$o({piece:"pawn",height:1.48,headRadius:.22},o);c.name=`${r}巨型兵`,c.position.set(Ut.boardStartX+l*Ut.cellSize,.18,Ut.boardStartZ+a*Ut.cellSize),be.add(c)}}for(const[s,r]of Hv.entries()){const o=tt?r.mobileDisplay:{x:r.x,z:r.display.z,scale:1,plaqueWidth:2.05};k(`${r.label}棋钟台`,[o.plaqueWidth,.65,1.55],[o.x,.33,o.z],t);const a=$o(r.model,U(r.color,{emissive:r.color,emissiveIntensity:.36,metalness:.12,roughness:.72}));a.name=r.label,a.scale.multiplyScalar(o.scale),a.position.set(o.x,.58,o.z),be.add(a),a.userData={type:"wizard-chess-move",moveId:r.id,label:r.label,selected:!1},We.push(a),Mt.push({object:a,baseY:.58,phase:s*1.25,spin:.025,bob:.055}),Ne(r.clue,[o.x,.48,o.z+.82],{width:o.plaqueWidth-.05,size:tt?21:27,color:"#e1dfd5"})}Ne(Fu.wallClue,[0,6.15,-8.15],{width:7.5,size:tt?Ut.mobileWallLabelSize:31,color:"#e1dfd5"}),St([-6.2,4.8,5.5],1.5,8),St([6.2,4.8,5.5],1.5,8)}function od(i,e=1){const t=U(i.color,{emissive:i.color,emissiveIntensity:.48,metalness:.46,roughness:.28}),n=new J(new Ie(.4,.48,.16,16),t);n.castShadow=!0;const s=U(13223132,{transparent:!0,opacity:.52,metalness:.22,roughness:.12}),r=U(2364975,{emissive:5973880,emissiveIntensity:1.8,transparent:!0,opacity:.88}),o=new J(new Ie(.26,.38,.64,14),s);o.position.y=.48,n.add(o);const a=new J(new Ie(.22,.34,.36,14),r);a.position.y=.36,n.add(a);const l=new J(new Ie(.13,.18,.3,12),s);l.position.y=.92,n.add(l);const c=new J(new Ie(.16,.14,.18,10),U(11052466,{metalness:.78,roughness:.3}));return c.position.y=1.12,n.add(c),n.scale.setScalar(e),n}function I_(i){const e=U(i.color,{emissive:i.color,emissiveIntensity:.4,roughness:.56}),t=new J(new Ie(.54,.64,.2,16),e);t.castShadow=!0;const n=U(11904399,{roughness:.72}),s=U(7440040,{emissive:2570581,emissiveIntensity:.75,metalness:.46,roughness:.18}),r=U(13214043,{emissive:16761948,emissiveIntensity:1.65,metalness:.34,roughness:.24}),o=(a,l,c=n,u=[0,0,0])=>{const d=new J(a,c);return d.position.set(...l),d.rotation.set(...u),d.castShadow=!0,t.add(d),d};if(i.model.kind==="mirror-figure"){o(new vt(1.28,1.8,.12),[0,1.15,-.18],s),o(new Le(.25,14,10),[0,1.72,.02]),o(new It(.54,1.16,12),[0,.85,.02]);const a=o(new vt(.5,.38,.08),[.24,.86,.5],U(13811855,{emissive:6115631,emissiveIntensity:.65}));a.rotation.z=-.08,o(new vt(.32,.18,.08),[.24,.9,.56],U(1512476))}else if(i.model.kind==="protective-hands"){for(const a of[-1,1]){o(new Ni(.2,.62,5,10),[a*.56,.82,0],n,[0,0,a*.62]);for(let l=0;l<4;l+=1)o(new Ni(.065,.38+l*.025,4,8),[a*(.28+l*.1),1.34+l*.04,0],n,[0,0,a*(.2+l*.07)])}o(new Ms(.34,1),[0,1.2,-.48],r),o(new rt(.7,.055,8,28),[0,1.15,-.3],U(14204787,{emissive:10254633,emissiveIntensity:1.2}),[Math.PI/2,0,0])}else{o(new Ni(.24,.72,6,12),[0,.78,0],n,[0,0,-.28]);for(let a=0;a<5;a+=1){const l=-.9+a*.45;o(new Ni(.075,.46,4,8),[Math.sin(l)*.35,1.25+Math.cos(l)*.18,0],n,[0,0,l])}o(new Ms(.31,1),[.1,1.18,.02],U(10824506,{emissive:16719927,emissiveIntensity:2}));for(let a=0;a<5;a+=1)o(new vt(.035,.62,.04),[-.35+a*.17,.64+a*.12,.27],U(15019589,{emissive:16717359,emissiveIntensity:2.2}),[0,0,-.5+a*.22])}return t}function P_(i){return i.model.kind==="potion-bottle"?od(i,1.38):I_(i)}function L_(){de.color.setHex(10258354),de.groundColor.setHex(1380635),jt({wall:3879237,floor:2169640,ceiling:1380379,fog:854290}),Ct.fog.density=.019,Yt({index:3,name:"魔法石密室",objectiveText:"目标：穿过黑焰，解读镜像，并证明你只想保护魔法石",hint:"七瓶药剂中，最小的瓶子可穿过黑焰。镜中真正的守护者口袋仍空着；想夺取魔法石的手只会触发密室腐化。",progress:"◇  ◇  ◇"}),Tn.textContent=we("hud.roomKicker",{book:1,chapter:4,room:4}),I={progress:[],mistakes:0,corruption:0,unlocked:!1},nd();const i=U(2827314,{roughness:.9}),e=U(11110734,{metalness:.62,roughness:.36});tt&&(Ht.position.z=vn.mobileCameraZ),k("厄里斯镜面",[4.5,4.55,.18],[0,2.85,-8.1],U(6839426,{emissive:3747160,emissiveIntensity:.95,metalness:.76,roughness:.18}),!1);for(const o of[-2.55,2.55])k("厄里斯镜金柱",[.46,4.75,.42],[o,2.6,-8],e);const t=new J(new rt(2.55,.24,12,36,Math.PI),e);t.rotation.z=Math.PI,t.position.set(0,4.95,-8),be.add(t);for(const o of[-2.85,2.85])for(const a of[1.2,2.35,3.5]){const l=new J(new al(.14,.045,32,6),e);l.position.set(o,a,-7.88),l.scale.set(1,1.5,.45),be.add(l)}for(const o of[-7.2,-5,5,7.2])k("密室黑石柱",[.62,6.4,.62],[o,3.2,-8.25],i);const n=[1.18,.96,1.42,.58,1.06,1.3,.88];for(let o=0;o<vn.potionRow.count;o+=1){const a={color:o===vn.potionRow.smallestIndex?10127805:7627346},l=od(a,n[o]);l.name=o===vn.potionRow.smallestIndex?"七瓶中最小的银瓶":"药剂逻辑候选瓶",l.position.set(-3.6+o*1.2,2.42,vn.potionRow.z),be.add(l)}k("七瓶药剂长桌",[9.3,.42,1.35],[0,2.28,vn.potionRow.z],i);const s=U(591630,{emissive:2692155,emissiveIntensity:1.8,transparent:!0,opacity:.94});for(let o=0;o<vn.blackFlame.columns;o+=1){const a=new J(new It(.48+o%2*.12,vn.blackFlame.height-o%3*.22,8),s);a.name="黑焰药剂屏障",a.position.set(-5.5+o*1.1,1.25,vn.blackFlame.z),a.rotation.z=o%2?.1:-.1,be.add(a),Mt.push({object:a,baseY:1.25,phase:o*.6,spin:.16,bob:.12})}for(const[o,a]of Gv.entries()){const l=tt?a.mobileDisplay:a.display;k(`${a.label}石台`,[l.plaqueWidth??2.05,.65,1.45],[l.x,.33,l.z],i);const c=P_(a);c.name=a.label,c.position.set(l.x,.62,l.z),c.scale.multiplyScalar(l.scale??1),be.add(c),c.userData={type:"stone-chamber-clue",clueId:a.id,label:a.label,selected:!1},We.push(c),Mt.push({object:c,baseY:.62,phase:o*1.2,spin:.035,bob:.055}),Ne(a.clue,[l.x,.58,l.z],{width:Math.min(l.plaqueWidth??2.05,1.9),size:tt?20:28,color:"#dfcef2"})}Ne(za.wallClue,[0,6.72,-8.05],{width:tt?vn.mobileWallLabelWidth:7.4,size:tt?vn.mobileWallLabelSize:30,color:"#dfcef2"}),Ne(za.mirrorInscription,[0,6.08,-8.02],{width:tt?2.8:4.6,size:tt?17:24,color:"#d9bd78"});const r=new jn(13016319,3,12,2);r.position.set(0,5.5,.5),be.add(r)}function D_(){de.color.setHex(8494477),de.groundColor.setHex(1121048),jt({wall:3426111,floor:1911076,ceiling:1581598,fog:725776}),Ct.fog.density=.024,Yt({index:0,name:"精灵的封锁",objectiveText:"目标：循魔力残痕解除住宅中的三重封锁，赶往国王十字车站",hint:"绿色干扰从邮槽进入，绕过悬浮蛋糕，最后汇入壁炉封印。错碰尖叫灯会让封锁重新闭合。",progress:"◇  ◇  ◇"}),Tn.textContent="第二部 · 第一章 · 第 1 关",I={progress:[],mistakes:0,interference:0,unlocked:!1},id();const i=U(2704955,{roughness:.86}),e=U(9861959,{metalness:.52,roughness:.42});k("住宅楼梯平台",[3.1,.35,4.8],[-6.8,.18,-3],i);for(let u=0;u<7;u+=1)k("封锁楼梯踏板",[2.5,.28,.72],[-6.8,.35+u*.3,-.8-u*.58],i);k("封死的住宅正门",[3.2,5.1,.28],[0,2.55,-8.45],i),k("黄铜门链",[3.6,.18,.18],[0,3,-8.18],e),k("壁炉背墙",[4.3,4.5,.5],[5.7,2.25,-7.9],U(2634542)),k("壁炉冷焰",[2.4,2.1,.35],[5.7,1.05,-7.55],U(2518871,{emissive:1530951,emissiveIntensity:1.15}));const t=U(4573312,{emissive:1874781,emissiveIntensity:1.35,roughness:.3}),n=U(2696996,{roughness:.96}),s=U(8410245,{roughness:.48}),r=U(14470051,{roughness:.92}),o=U(2500393,{metalness:.64,roughness:.56}),a=U(12006717,{emissive:15017525,emissiveIntensity:1.4}),l=(u,d,h,p,g)=>{const _=new J(u,d);return _.name=g,_.position.set(...h),_.castShadow=!0,p.add(_),_};for(const[u,d]of Wv.entries()){const[h,,p]=d.position;k(`${d.label}底座`,[2.65,.48,1.55],[h,.24,p],i);const g=new Tt;g.position.set(h,.56,p),be.add(g);let _;if(d.id==="jammed-post"){k("深绿正门切片",[2.15,2,.24],[0,1,0],i,!0,g),_=k(d.label,[1.5,.42,.16],[0,1.22,.2],e,!0,g),_.rotation.x=-.28,k("被夹裂的象牙信封",[1.02,.48,.06],[.2,.86,.31],r,!0,g).rotation.z=-.14;for(const m of[-.52,-.22,.1,.4])l(new Le(.055,8,6),t,[m,.62-Math.abs(m)*.12,.4],g,"邮槽绿色粉尘")}else if(d.id==="levitating-cake"){l(new Ie(.9,.95,.12,24),U(15261906,{roughness:.3}),[0,.24,0],g,"白瓷蛋糕盘"),_=l(new Ie(.72,.78,.62,24),s,[0,.62,0],g,d.label),l(new Ie(.48,.58,.48,24),U(13804637),[0,1.12,0],g,"金色双层蛋糕芯"),l(new rt(.86,.045,8,30),t,[0,.7,0],g,"绕行魔力丝线").rotation.x=Math.PI/2;for(const m of[0,2.1,4.2]){const f=l(new Le(.09,8,6),U(11109309),[Math.cos(m)*.34,1.39,Math.sin(m)*.34],g,"糖渍紫罗兰");f.scale.y=.35}}else if(d.id==="sealed-floo"){k("积灰壁炉主体",[2.2,1.85,.46],[0,.94,0],n,!0,g),k("飞路炉冷绿炉膛",[1.4,1.18,.18],[0,.64,.32],t,!0,g),_=l(new rt(.72,.08,10,28),e,[0,.88,.48],g,d.label);for(const m of[.48,.25])l(new rt(m,.055,9,28),t,[0,.88,.5],g,"飞路炉封印环");k("壁炉石楣",[2.55,.28,.72],[0,1.88,0],n,!0,g)}else{_=l(new Ie(.55,.72,.9,12),U(6768464,{transparent:!0,opacity:.72,emissive:7280675,emissiveIntensity:.5}),[0,.92,0],g,d.label),l(new rt(.72,.07,8,20),o,[0,1.25,0],g,"油灯环形提手").rotation.x=Math.PI/2,l(new It(.42,.85,10),a,[0,.88,.02],g,"嘴形尖叫红焰").rotation.z=Math.PI,k("油灯玻璃裂口",[.06,.78,.05],[.2,.96,.42],a,!1,g).rotation.z=.42;const m=l(new rt(.9,.035,7,20,Math.PI*1.35),a,[0,.3,0],g,"红色报警回路线");m.rotation.x=Math.PI/2}g.userData={type:"elf-blockade-trace",objectId:d.id,label:d.label,selected:!1},g.material=_.material,We.push(g),Mt.push({object:g,baseY:.56,phase:u*1.15,spin:.015,bob:.045}),Ne(d.clue,[h,2.72,p],{width:tt?as.mobileClueWidth:as.desktopClueWidth,size:tt?as.mobileClueFontSize:as.desktopClueFontSize,color:"#b9ddc8"})}Ne(ku.wallClue,[0,6.1,-8.05],{width:tt?as.mobileWallWidth:6.8,size:tt?as.mobileWallFontSize:35,color:"#b9ddc8"});const c=new jn(6476957,2.8,13,2);c.position.set(0,5.4,1.2),be.add(c),St([-6.4,4.8,5.8],1.4,7)}function U_(){de.color.setHex(7440544),de.groundColor.setHex(1120547),jt({wall:2504260,floor:1515819,ceiling:1450545,fog:659737}),Ct.fog.density=.021,Yt({index:1,name:"飞车失控",objectiveText:"目标：在撞上高架桥前依次稳定配重、航向与油门",hint:"后备箱先把车头拉高；红色铁路信号给出航向；发动机过热时只能脉冲给油。猛踩油门会让飞车再次翻滚。",progress:"◇  ◇  ◇"}),I={progress:[],mistakes:0,turbulence:0,unlocked:!1},sd();const i=U(10201002,{metalness:.78,roughness:.24}),e=U(4016978,{metalness:.66,roughness:.38}),t=U(3114658,{metalness:.45,roughness:.26,emissive:865605,emissiveIntensity:.55}),n=U(8570333,{metalness:.2,roughness:.1,transparent:!0,opacity:.62}),s=U(1053205,{roughness:.92}),r=U(5978149,{roughness:.88}),o=U(10976053,{metalness:.72,roughness:.34}),a=U(12926518,{emissive:16721439,emissiveIntensity:1.25,roughness:.38}),l=U(5028328,{emissive:2268640,emissiveIntensity:1.3,metalness:.35}),c=(d,h,p,g=be,_="")=>{const m=new J(d,h);return m.name=_,m.position.set(...p),m.castShadow=!0,m.receiveShadow=!0,g.add(m),m};k("圆角蓝色飞车下车身",[3.35,.82,6.15],[0,1.18,-2.2],t),k("飞车长引擎盖",[3.15,.5,1.75],[0,1.72,-4.35],t),k("飞车后备箱",[3.15,.56,1.45],[0,1.68,.08],t),k("飞车玻璃座舱",[2.85,1.18,2.65],[0,2.25,-1.95],n,!1),k("飞车蓝色车顶",[3,.22,2.75],[0,2.9,-1.95],t);for(const d of[-1.72,1.72])for(const h of[-3.65,-.65]){const p=c(new Ie(.58,.58,.38,24),s,[d,.84,h],be,"黑橡胶车轮");p.rotation.z=Math.PI/2;const g=c(new Ie(.24,.24,.4,16),i,[d,.84,h],be,"镀铬轮毂");g.rotation.z=Math.PI/2}k("前镀铬保险杠",[3.5,.18,.2],[0,1.05,-5.32],i),k("后镀铬保险杠",[3.5,.18,.2],[0,1.05,.92],i);for(const d of[-1.05,1.05])c(new Le(.28,14,10),U(16769952,{emissive:16766571,emissiveIntensity:2}),[d,1.65,-5.22],be,"圆形前灯");for(const d of[-.45,0,.45]){const h=c(new Le(.18,12,8),l,[d,.85+Math.abs(d),1.18],be,"蓝色排气魔法");Mt.push({object:h,baseY:h.position.y,phase:d*3,spin:.02,bob:.12})}for(let d=0;d<7;d+=1)k("悬空铁路枕木",[7.8,.16,.46],[0,.35,-7.7+d*2.4],U(5325617));k("左铁轨",[.16,.18,17],[-2.35,.55,0],i),k("右铁轨",[.16,.18,17],[2.35,.55,0],i),k("远方列车红灯",[.55,.55,.22],[0,3.6,-8.55],U(14108479,{emissive:16720925,emissiveIntensity:2.4}));for(const[d,h]of Xv.entries()){const[p,g,_]=h.position,m=new Tt;m.position.set(p,g,_),be.add(m),k(`${h.label}仪表台`,[2.65,.58,1.5],[0,.29,0],e,!0,m);let f;if(h.id==="balance-luggage"){f=k(h.label,[1.55,1.18,.92],[0,1.22,0],r,!0,m);for(const E of[-.48,.48])k("皮箱交叉束带",[.14,1.24,.96],[E,1.24,0],o,!0,m);for(const E of[-.68,.68])for(const b of[-.38,.38])k("黄铜护角",[.16,.16,.16],[E,1.72,b],o,!0,m);for(const E of[-.38,0,.38])k("后移发光箭头",[.24,.12,.42],[E,2,0],l,!0,m).rotation.y=Math.PI/4}else if(h.id==="align-railway"){f=c(new rt(.58,.1,12,28),s,[0,1.18,0],m,h.label),f.rotation.x=Math.PI/2;for(const b of[0,Math.PI*2/3,Math.PI*4/3]){const v=k("方向盘辐条",[.08,.08,.58],[Math.sin(b)*.22,1.18,Math.cos(b)*.22],i,!0,m);v.rotation.y=b}const E=c(new rt(.3,.035,8,20),n,[0,1.72,0],m,"玻璃校向准星");E.rotation.x=Math.PI/2,c(new It(.09,.4,10),a,[0,1.72,.02],m,"红色信号针").rotation.z=Math.PI}else if(h.id==="pulse-throttle"){f=k(h.label,[.22,1.1,.22],[0,1.22,0],i,!0,m),f.rotation.z=-.28,c(new Le(.2,12,8),l,[-.15,1.78,0],m,"蓝色油门球头");for(const b of[-.5,0,.5])k("蓝区短推刻痕",[.22,.12,.12],[b,.82,.48],l,!0,m);const E=c(new rt(.38,.07,10,24),n,[0,1.28,.48],m,"冷却温度表");E.rotation.x=Math.PI/2}else{f=k(h.label,[.82,.18,1.05],[0,.92,0],U(2698029,{metalness:.6}),!0,m),f.rotation.x=-.18;const E=c(new rt(.42,.08,10,24),a,[0,1.52,.35],m,"红区过热表");E.rotation.x=Math.PI/2,k("开裂散热胶管",[.22,.22,1.2],[.65,1,0],s,!0,m).rotation.z=.55;for(const b of[1.5,1.85,2.18])c(new Le(.14,10,8),a,[.75,b,0],m,"过热蒸汽")}m.userData={type:"flying-car-control",controlId:h.id,label:h.label,selected:!1},m.material=f.material,We.push(m),Mt.push({object:m,baseY:g,phase:d*1.1,spin:.012,bob:.035}),Ne(h.clue,[p,2.48,_],{width:tt?ls.mobileClueWidth:ls.desktopClueWidth,size:tt?ls.mobileClueFontSize:ls.desktopClueFontSize,color:"#b9d9e8"})}Ne(zu.wallClue,[0,6.15,-8.05],{width:tt?ls.mobileWallWidth:6.8,size:tt?ls.mobileWallFontSize:35,color:"#b9d9e8"});const u=new jn(9423359,3,14,2);u.position.set(0,5.6,1),be.add(u)}function N_(){de.color.setHex(8228772),de.groundColor.setHex(1515544),jt({wall:2570285,floor:1714976,ceiling:1582365,fog:726288}),Ct.fog.density=.024,Yt({index:2,name:"打人柳下",objectiveText:"目标：读懂枝条的高扫、低返与露根间隙，安全抵达树洞",hint:"粗枝先从头顶横扫；回摆会贴近地面。只有第二次攻击收势后，发光树根之间才会短暂露出通道。",progress:"◇  ◇  ◇"}),Tn.textContent=we("hud.roomKicker",{book:2,chapter:1,room:3}),I={progress:[],mistakes:0,bruises:0,unlocked:!1},rd();const i=U(4862756,{roughness:1}),e=U(12158802,{roughness:.82}),t=U(6503206,{roughness:.94,emissive:2953992,emissiveIntensity:.3}),n=U(3427893,{roughness:1}),s=U(6720079,{roughness:.92,emissive:1517073,emissiveIntensity:.35,side:xn}),r=U(8249211,{emissive:4185186,emissiveIntensity:1.8,roughness:.45}),o=new Tt;o.name="古老攻击性打人柳",o.position.set(0,0,tt?-6.15:-5.15),tt&&o.scale.setScalar(.72);const a=new J(new Ie(1.45,2.35,6.7,15),i);a.position.y=3.35,a.castShadow=!0,o.add(a);for(const[h,p]of[[-1.05,-.24],[1.05,.24]]){const g=new J(new Ie(.52,.95,2.9,11),t);g.position.set(h,5.55,0),g.rotation.z=p,g.castShadow=!0,o.add(g)}const l=new J(new Le(1,20,16),U(66049,{roughness:1}));l.scale.set(.82,1.32,.14),l.position.set(0,1.45,2.12),o.add(l);const c=new J(new rt(.78,.16,9,20,Math.PI),n);c.scale.y=1.55,c.position.set(0,1.25,2.2),o.add(c);for(const h of[-.75,.75]){const p=new J(new rt(.32,.13,8,16),t);p.position.set(h,4.15,1.35),o.add(p)}for(const[h,p]of[-1.08,-.58,.58,1.08].entries()){const g=new Tt;g.position.set(Math.sin(p)*1.65,4.05,0),g.rotation.z=p;const _=new J(new Ie(.18,.5,3.8,9),t);_.position.y=1.55,_.castShadow=!0,g.add(_);for(const m of[-1,1]){const f=new J(new Ie(.08,.2,2.2,7),i);f.position.set(m*.55,2.55,0),f.rotation.z=m*.6,g.add(f)}for(const[m,f]of[[-.8,2.15],[.7,2.35],[-.3,2.75]]){const E=new J(new Le(.72,10,7),s);E.scale.set(1.35,.55,.75),E.position.set(m,f,0),g.add(E)}o.add(g),Mt.push({object:g,baseY:g.position.y,phase:h*1.4,spin:.012,bob:.08})}for(const[h,p,g]of[[-4.4,4.3,1.5],[-3.1,5.35,1.7],[3.1,5.35,1.7],[4.4,4.3,1.5]]){const _=new J(new Le(.9,11,8),s);_.scale.set(g,.72,.82),_.position.set(h,p,.2),o.add(_);for(const m of[-.45,0,.45]){const f=new J(new Ie(.035,.07,1.3,6),n);f.position.set(h+m,p-.85,.35),o.add(f)}}for(const h of[-4.2,-2.35,-.9,.9,2.35,4.2]){const p=new J(new Ie(.16,.52,4.4,8),h===-.9||h===.9?r:n);p.rotation.z=Math.PI/2,p.rotation.y=h*.1,p.position.set(h,.3,.8+Math.abs(h)*.18),o.add(p)}for(const h of[-1.35,1.35]){const p=new J(new It(.2,.8,7),e);p.position.set(h,5.3,1.25),p.rotation.z=h<0?-1:1,o.add(p)}be.add(o);const u=U(3556408,{roughness:1});for(const h of qv){const[p,g,_]=h.position,m=tt?p*.56:p,f=tt?-.35:_;k(`${h.label}石台`,[tt?1.3:2.3,.36,1.25],[m,.18,f],u);const E=new Tt;E.name=h.label,E.position.set(m,g+.38,f),tt&&E.scale.setScalar(.68);const b=U(h.color,{emissive:h.color,emissiveIntensity:.42,roughness:.7});if(h.model.kind==="overhead-branch-arc"){const v=new J(new Ie(.11,.28,2.25,8),t);v.rotation.z=Math.PI/2,v.position.y=1.25,E.add(v);const w=new J(new rt(.72,.065,8,22,Math.PI),b);w.rotation.z=Math.PI,w.position.y=.8,E.add(w);for(const T of[-.65,0,.65])k("飞散柳叶",[.2,.04,.1],[T,1.55-Math.abs(T)*.25,0],s,!1,E)}else if(h.model.kind==="ground-skimming-return"){const v=new J(new Ie(.1,.26,2.25,8),n);v.rotation.z=Math.PI/2,v.position.y=.42,E.add(v);const w=new J(new rt(.55,.09,8,18,Math.PI),b);w.position.y=.65,E.add(w);for(const T of[-.75,-.25,.25,.75])k("贴地落叶",[.22,.03,.12],[T,.12,.15],s,!1,E)}else if(h.model.kind==="illuminated-root-passage"){for(const w of[-1,1]){const T=new J(new Ie(.12,.28,1.65,8),n);T.position.set(w*.48,.72,0),T.rotation.z=w*-.45,E.add(T)}const v=new J(new Le(.52,14,10),b);v.scale.set(.8,1.25,.18),v.position.y=.58,E.add(v);for(const w of[-.35,0,.35])k("安全脚印",[.22,.04,.34],[0,.1,w],r,!1,E)}else{const v=new J(new Ie(.15,.36,2.3,8),t);v.rotation.z=-.72,v.position.set(-.3,1,0),E.add(v);for(const T of[-1,1]){const C=new J(new It(.11,.7,6),e);C.position.set(T*.52,.35,0),C.rotation.z=T*.7,E.add(C)}const w=new J(new rt(.48,.1,8,12),b);w.position.y=.48,E.add(w)}E.userData={type:"willow-rhythm",actionId:h.id,label:h.label,selected:!1},We.push(E),be.add(E),Ne(h.clue,[m,tt?1.95:2.45,f],{width:tt?cs.mobileClueWidth:cs.desktopClueWidth,size:tt?cs.mobileClueFontSize:cs.desktopClueFontSize,color:"#c7d9bd"})}Ne(Bu.wallClue,[0,6.2,-8.05],{width:tt?cs.mobileWallWidth:7.2,size:tt?cs.mobileWallFontSize:34,color:"#c7d9bd"});const d=new jn(10143619,2.7,14,2);d.position.set(0,5.8,.8),be.add(d)}function Wt(i){a_(),At=i,Ht.position.set(0,1.7,6.7),Ht.quaternion.identity(),i===0?u_():i===1?h_():i===2?f_():i===3?p_():i===4?m_():i===5?g_():i===6?v_():i===7?__():i===8?x_():i===9?b_():i===10?y_():i===11?S_():i===12?w_():i===13?C_():i===14?R_():i===15?L_():i===16?D_():i===17?U_():i===18&&N_(),ad()}function O_(){for(const i of We)i.userData.type==="owl-letter"&&!i.userData.decoy&&(i.visible=!0,i.userData.selected=!1)}function F_(i){if(i.userData.selected)return;const e=Kv(I,i.userData.clueId),t=Ye(Y,i.userData.destination);if(e.reset){I=e,O_(),qc(),ce(Ns(Y,"wrong",{destination:t}),3200);return}I=e,i.userData.selected=!0,i.visible=!1,qc(),ce(Ns(Y,"progress",{destination:t,count:I.progress.length})),I.unlocked&&(vi.userData.unlocked=!0,je.textContent=Ns(Y,"completeObjective"),Ze.textContent=Ns(Y,"completeHint"),ce(Ns(Y,"completeMessage"),3800))}function k_(){for(const i of We)i.userData.type==="shopping-item"&&(i.visible=!0,i.userData.selected=!1)}function z_(i){if(i.userData.selected)return;const e=Zv(I,i.userData.itemId);if(e.reset){I=e,k_(),Yc(),ce(Os(Y,"wrong",{label:Ye(Y,i.userData.label)}),3200);return}I=e,i.userData.selected=!0,i.visible=!1,Yc(),ce(Os(Y,"purchased",{label:Ye(Y,i.userData.label),price:i.userData.price})),I.unlocked&&(vi.userData.unlocked=!0,je.textContent=Os(Y,"completeObjective"),Ze.textContent=Os(Y,"completeHint"),ce(Os(Y,"completeMessage"),3600))}function B_(i){if(!I.progress.includes("wood")){if(I=Jv(I,i.userData.woodId),pl(),!I.accepted){de.color.setHex(11745838),i.rotation.y+=Math.PI/5,ce(`“${i.userData.label}”迸出危险火花！失控反馈 +1，重新观察常青叶线索。`,3200),setTimeout(()=>{At===2&&de.color.setHex(12032624)},480);return}i.userData.selected=!0,je.textContent="木材匹配成功：冬青木发出温暖金光，准备进行杖芯匹配",Ze.textContent="第一阶段完成。冬青木认可了那道闪电形旧伤；下一步要解读杖芯反馈。",i.material.emissive.setHex(14858319),i.material.emissiveIntensity=1.6;for(const e of We)e.userData.type==="wand-core"&&(e.visible=!0,e.userData.pedestal.visible=!0);je.textContent="第二阶段：在三种杖芯中找出会回应守护、忠诚与重生的一种",Ze.textContent="杖芯线索：它来自浴火重生的鸟，曾送来两根命运彼此呼应的羽毛。",ce("稳定共鸣！冬青木完成了第一阶段匹配。",3600)}}function H_(i){if(!I.progress.includes("core")){if(I=Qv(I,i.userData.coreId),pl(),!I.accepted){de.color.setHex(7022716),i.rotation.z+=Math.PI/4,ce(`“${i.userData.label}”抗拒了冬青木！失控反馈 +1，重新解读浴火重生的线索。`,3400),setTimeout(()=>{At===2&&de.color.setHex(12032624)},480);return}i.userData.selected=!0,i.material.emissiveIntensity=1.8,je.textContent="杖芯匹配成功：凤凰羽毛与冬青木稳定共鸣，准备校准长度",Ze.textContent="长度线索：短杖的火星触不到远处，长杖的光弧越过目标；让光准确停在十一道刻痕。";for(const e of We)e.userData.type==="wand-length"&&(e.visible=!0,e.userData.pedestal.visible=!0,e.userData.lengthLabel.visible=!0);ce("凤凰羽毛释放出温暖金光——第二阶段匹配完成！",3800)}}function G_(i){if(!I.progress.includes("length")){if(I=e_(I,i.userData.inches),pl(),!I.accepted){const e=I.feedback==="too-short"?"火星在目标前坠落":"光弧越过了目标";de.color.setHex(3302042),i.rotation.y+=Math.PI/3,ce(`“${i.userData.label}”${e}！失控反馈 +1。`,3300),setTimeout(()=>{At===2&&de.color.setHex(12032624)},480);return}i.userData.selected=!0,i.material.emissive.setHex(16042333),i.material.emissiveIntensity=2,vi.userData.unlocked=!0,je.textContent="魔杖选择完成：带上魔杖，从车站门前往霍格沃茨分院仪式",Ze.textContent="三阶段共鸣稳定。奥利凡德为魔杖系上金色封签，通往霍格沃茨的门已经开启。",ce("十一道刻痕同时亮起——魔杖选择了巫师！前往已开启的车站门。",4600)}}function V_(i){if(!i.userData.selected){if(I=t_(I,i.userData.symbolId),l_(),!I.accepted){i.rotation.z+=Math.PI/12;const t=["先找敢于直面恐惧的象征","现在要找不求荣耀、始终守护同伴的象征","现在要找以思考照亮未知的象征","最后要找意志坚定、善于为目标开辟道路的象征"][I.progress.length];ce(`“${i.userData.label}”不符合诗谜顺序。分院帽低声提醒：${t}。`,3600);return}if(i.userData.selected=!0,i.material.emissive.setHex(15774780),i.material.emissiveIntensity=1.8,I.trait==="courage"){je.textContent="勇气线索已确认：继续解读“留在朋友身边”的学院象征",Ze.textContent="第一句已解：狮代表直面恐惧的勇气。下一句赞美不求荣耀、始终守护同伴的品格。",ce("狮徽亮起金光——勇气是分院诗谜的第一条线索！",3800);return}if(I.trait==="loyalty"){je.textContent="忠诚线索已确认：继续寻找“以思考照亮未知”的学院象征",Ze.textContent="第二句已解：獾代表不求荣耀的忠诚。下一句属于用问题、观察与求知驱散迷雾的人。",ce("獾徽泛起暖黄光芒——忠诚是分院诗谜的第二条线索！",3800);return}if(I.trait==="wisdom"){je.textContent="智慧线索已确认：继续寻找“为目标开辟道路”的学院象征",Ze.textContent="第三句已解：鹰代表以思考照亮未知的智慧。最后一句属于意志坚定、善于实现目标的人。",ce("鹰徽闪过清澈蓝光——智慧是分院诗谜的第三条线索！",3800);return}je.textContent="第一章完成：四种品格共同照亮了你的分院之路",Ze.textContent="勇气、忠诚、智慧与野心并非互斥；分院帽认可了你完整读懂诗谜的选择。",io(localStorage,{book:1,chapter:1,room:4}),Jt.textContent="第一部 · 第一章完成",en.textContent="霍格沃茨的新生",ot.classList.remove("hidden"),setTimeout(()=>ot.classList.add("hidden"),2200),ce("蛇徽亮起翠光——四学院诗谜完成，第一章通关！",5200)}}function W_(i){if(!(i.userData.selected||I.unlocked)){if(I=Mv(I,i.userData.stairId),Xu(),!I.accepted){for(const e of We)e.userData.type==="stair-route"&&(e.userData.selected=!1,e.material.emissiveIntensity=.4);de.color.setHex(10106950),ce(`“${i.userData.label}”转离了路线！三座楼梯重新移动，时间惩罚 +5 秒。`,3600),setTimeout(()=>{At===4&&de.color.setHex(8885949)},520);return}if(i.userData.selected=!0,i.material.emissive.setHex(14138724),i.material.emissiveIntensity=1.8,!I.unlocked){const e=["低塔已固定。等待钟摆穿过中央刻线，寻找月牙铭文。","月光桥已固定。最后选择通往最高平台的三道刻痕。"];je.textContent=`路线已稳定 ${I.progress.length} / 3`,Ze.textContent=e[I.progress.length-1],ce(`${i.userData.label}停止旋转，路线的一段已稳定。`,3e3);return}je.textContent="移动楼梯关卡完成：通往画像走廊的路线已经稳定",Ze.textContent="低塔、月光桥和高塔首尾相接。路线尽头的三幅画像正在争论一道银钥口令。",dt(localStorage,{book:1,chapter:2,room:1}),Jt.textContent="第一部 · 第二章 · 第 1 关完成",en.textContent="通往画像走廊",ot.classList.remove("hidden"),ce("三座楼梯在钟声中连接——正在前往“会说话的画像”！",4200),setTimeout(()=>{Wt(5),dt(localStorage,{book:1,chapter:2,room:2})},700),setTimeout(()=>{ot.classList.add("hidden"),ce("第二关已加载：比较画像证词，推导正确询问顺序。",4200)},1600)}}function X_(i){if(!(i.userData.selected||I.unlocked)){if(I=Ev(I,i.userData.portraitId),qu(),!I.accepted){for(const e of We)e.userData.type==="portrait-testimony"&&(e.userData.selected=!1,e.material.emissiveIntensity=.28);de.color.setHex(10697814),ce(`${i.userData.label}高声反驳！证词链断裂，画像怀疑 +1。`,3600),setTimeout(()=>{At===5&&de.color.setHex(10192813)},520);return}if(i.userData.selected=!0,i.material.emissive.setHex(13940836),i.material.emissiveIntensity=1.5,!I.unlocked){const e=["学者的月桂框亮起。她确认：银甲骑士应当接着发言。","骑士放下剑并指向女士：最后一个词藏在她的银钥之后。"];je.textContent=`可信证词已连接 ${I.progress.length} / 3`,Ze.textContent=e[I.progress.length-1],ce(`${i.userData.quote}——这段证词与前文一致。`,3800);return}je.textContent="画像谜题完成：银钥口令已经显现",Ze.textContent=`三段证词一致。完整口令：“${I.password}”。`,dt(localStorage,{book:1,chapter:2,room:2}),Jt.textContent="第一部 · 第二章 · 第 2 关完成",en.textContent="银钥口令",ot.classList.remove("hidden"),ce(`画像齐声念出：“${I.password}”——正在进入管理员的巡夜路线！`,5200),setTimeout(()=>{Wt(6),dt(localStorage,{book:1,chapter:2,room:3})},700),setTimeout(()=>{ot.classList.add("hidden"),ce("第三关已加载：借助盔甲、猫铃与挂毯避开巡夜灯光。",4400)},1600)}}function q_(i){if(!(i.userData.selected||I.unlocked)){if(I=wv(I,i.userData.hidingPlaceId),Yu(),!I.accepted){for(const e of We)e.userData.type==="patrol-cover"&&(e.userData.selected=!1,e.material.emissiveIntensity=e.userData.hidingPlaceId==="tapestry"?.35:.25);de.color.setHex(10631986),ce(`“${i.userData.label}”暴露在灯光下！路线清空，警戒升至 ${I.alert}。`,3800),setTimeout(()=>{At===6&&de.color.setHex(7505569)},560);return}if(i.userData.selected=!0,i.material.emissive.setHex(7780260),i.material.emissiveIntensity=1.6,!I.unlocked){const e=["灯光从盔甲旁掠过。趁管理员背对走廊，拨动猫铃把脚步引开。","猫铃在反方向响起。现在沿阴影抵达独角兽挂毯后的暗门。"];je.textContent=`潜行路线已完成 ${I.progress.length} / 3`,Ze.textContent=e[I.progress.length-1],ce(`${i.userData.label}生效，巡夜灯光没有发现你。`,3400);return}je.textContent="管理员的巡夜完成：独角兽挂毯后的暗门已经打开",Ze.textContent="盔甲遮住身形，猫铃引开脚步，挂毯后传来三道低沉的呼吸声。",dt(localStorage,{book:1,chapter:2,room:3}),Jt.textContent="第一部 · 第二章 · 第 3 关完成",en.textContent="活板门后的呼吸",ot.classList.remove("hidden"),ce("暗门无声开启——正在进入三头犬守卫的禁区！",5200),setTimeout(()=>{Wt(7),dt(localStorage,{book:1,chapter:2,room:4})},700),setTimeout(()=>{ot.classList.add("hidden"),ce("第四关已加载：解读乐谱，用三件乐器让守门生物沉睡。",4400)},1600)}}function Y_(i){if(!(i.userData.selected||I.unlocked)){if(I=Sv(I,i.userData.instrumentId),ju(),!I.accepted){for(const e of We)e.userData.type==="lullaby-instrument"&&(e.userData.selected=!1,e.material.emissiveIntensity=.28);de.color.setHex(10697519),ce(Hn(Y,"wrong",{label:Ye(Y,i.userData.label),count:I.wakefulness}),3900),setTimeout(()=>{At===7&&de.color.setHex(6649183)},620);return}if(i.userData.selected=!0,i.material.emissive.setHex(7907971),i.material.emissiveIntensity=1.7,!I.unlocked){const e=I.progress.length===1?"firstHint":"secondHint";je.textContent=Hn(Y,"progress",{count:I.progress.length}),Ze.textContent=Hn(Y,e),ce(Hn(Y,"accepted",{label:Ye(Y,i.userData.label)}),3500);return}je.textContent=Hn(Y,"completeObjective"),Ze.textContent=Hn(Y,"completeHint"),io(localStorage,{book:1,chapter:2,room:4}),Jt.textContent=Hn(Y,"transitionKicker"),en.textContent=Hn(Y,"transitionTitle"),ot.classList.remove("hidden"),ce(Hn(Y,"completionMessage"),5600),setTimeout(()=>{Wt(8),dt(localStorage,{book:1,chapter:3,room:1})},900),setTimeout(()=>{ot.classList.add("hidden"),ce(Hn(Y,"nextRoomMessage"),4800)},1900)}}function j_(i){if(!(i.userData.selected||I.unlocked)){if(I=Rv(I,i.userData.deliveryId),$u(),!I.accepted){for(const e of We)e.userData.type==="flying-delivery"&&(e.userData.selected=!1,e.material.emissiveIntensity=.35);de.color.setHex(11950946),ce(`“${i.userData.label}”撞入逆风！遗失物重新散落，乱流升至 ${I.turbulence}。`,3900),setTimeout(()=>{At===8&&de.color.setHex(10471392)},620);return}if(i.userData.selected=!0,i.material.emissive.setHex(15912551),i.material.emissiveIntensity=1.7,!I.unlocked){const e=["轻围巾顺着低风回到守门员手中。接着让月纹笔记穿过中央风环。","笔记平稳落到学者怀里。最后把最重的黄铜罗盘送上高风。"];je.textContent=`遗失物已安全送回 ${I.progress.length} / 3`,Ze.textContent=e[I.progress.length-1],ce(`${i.userData.label}沿安全轨迹完成投递。`,3400);return}je.textContent="飞行课完成：三件遗失物全部回到主人手中",Ze.textContent="低风托轻物，中环承纸页，高风送黄铜。远处洗手间传来沉重脚步，下一道悬浮机关即将开启。",dt(localStorage,{book:1,chapter:3,room:1}),Jt.textContent="第一部 · 第三章 · 第 1 关完成",en.textContent="顺风归还",ot.classList.remove("hidden"),ce("罗盘越过最高风环——正在赶往传出沉重脚步的洗手间！",5200),setTimeout(()=>{Wt(9),dt(localStorage,{book:1,chapter:3,room:2})},800),setTimeout(()=>{ot.classList.add("hidden"),ce("第二关已加载：稳定三道悬浮机关，在巨怪逼近前架出逃生路线。",4800)},1750)}}function $_(i){if(!(i.userData.selected||I.unlocked)){if(I=Cv(I,i.userData.obstacleId),Ku(),!I.accepted){for(const e of We)e.userData.type==="troll-obstacle"&&(e.userData.selected=!1,e.material.emissiveIntensity=.32);de.color.setHex(11750975),ce(`“${i.userData.label}”触发过早！路线震塌，巨怪危险升至 ${I.danger}。`,3900),setTimeout(()=>{At===9&&de.color.setHex(9217704)},620);return}if(i.userData.selected=!0,i.material.emissive.setHex(6669746),i.material.emissiveIntensity=1.7,!I.unlocked){const e=["月纹阀合拢，水势减弱。现在悬浮沟渠前的碎石，清出横梁落点。","瓦砾升到巨怪头顶，通道已经清空。最后放下锁链横梁跨过水沟。"];je.textContent=`逃生机关已稳定 ${I.progress.length} / 3`,Ze.textContent=e[I.progress.length-1],ce(`${i.userData.label}稳定生效，巨怪被机关拖慢。`,3400);return}je.textContent="巨怪洗手间完成：横梁已跨过沟渠，安全逃生路线建立",Ze.textContent="止水阀保护落脚点，悬浮瓦砾清出通路，横梁连接出口。禁书区的门缝里透出幽蓝微光。",dt(localStorage,{book:1,chapter:3,room:2}),Jt.textContent="第一部 · 第三章 · 第 2 关完成",en.textContent="悬浮逃生",ot.classList.remove("hidden"),ce("横梁稳稳落下——正在穿过幽蓝门廊，前往图书馆禁书区！",5200),setTimeout(()=>{Wt(10),dt(localStorage,{book:1,chapter:3,room:3})},800),setTimeout(()=>{ot.classList.add("hidden"),ce("第三关已加载：按历史年代排列安全书脊，千万别惊醒锁链无年卷。",4800)},1750)}}function K_(i){if(!(i.userData.selected||I.unlocked)){if(I=Av(I,i.userData.bookId),Zu(),!I.accepted){for(const e of We)e.userData.type==="restricted-book"&&(e.userData.selected=!1,e.material.emissiveIntensity=.32);de.color.setHex(11615587),ce(`“${i.userData.label}”发出尖叫！书脊时间线清空，噪声升至 ${I.noise}。`,3900),setTimeout(()=>{At===10&&de.color.setHex(6714779)},620);return}if(i.userData.selected=!0,i.material.emissive.setHex(7311316),i.material.emissiveIntensity=1.8,!I.unlocked){const e=["建校录的四枚徽记亮起。下一本应记录数百年后的北境灾变。","龙灾账册安静归位。最后选择本年刚修订的天象纪事。"];je.textContent=`历史时间线已恢复 ${I.progress.length} / 3`,Ze.textContent=e[I.progress.length-1],ce(`${i.userData.label}年代吻合，出口封印出现一道裂纹。`,3400);return}je.textContent="禁书区完成：三本历史书脊已按年代归位，镜廊出口显现",Ze.textContent="建校、龙灾、月蚀串成完整时间线。书架深处的银镜映出下一道谜题。",dt(localStorage,{book:1,chapter:3,room:3}),Jt.textContent="第一部 · 第三章 · 第 3 关完成",en.textContent="无声时间线",ot.classList.remove("hidden"),ce("最后一本纪事归位——银镜正在把你引向镜廊深处！",5200),setTimeout(()=>{Wt(11),dt(localStorage,{book:1,chapter:3,room:4})},800),setTimeout(()=>{ot.classList.add("hidden"),ce("第四关已加载：比较镜像与现实，选择真正需要而非渴望的物品。",4800)},1750)}}function Z_(i){if(!(i.userData.selected||I.unlocked)){if(I=Tv(I,i.userData.itemId),Ju(),!I.accepted){for(const e of We)e.userData.type==="mirror-choice"&&(e.userData.selected=!1,e.material.emissiveIntensity=.34);de.color.setHex(10303596),ce(`“${i.userData.label}”只是镜中的欲望！现实线索消散，幻象增强至 ${I.illusion}。`,4200),setTimeout(()=>{At===11&&de.color.setHex(8885688)},650);return}if(i.userData.selected=!0,i.material.emissive.setHex(12114112),i.material.emissiveIntensity=1.8,!I.unlocked){const e=["斗篷挡住镜廊寒风。出口仍一片漆黑，寻找能照清现实道路的物品。","提灯照出两组脚印。最后选择代表共同离开、而非独占荣耀的信物。"];je.textContent=`现实所需已确认 ${I.progress.length} / 3`,Ze.textContent=e[I.progress.length-1],ce(`${i.userData.label}没有出现在华丽镜像中，却解决了眼前的真实困境。`,3900);return}je.textContent="镜中秘密完成：你选择了御寒、照路与同行，而非王冠和金杯",Ze.textContent="魔镜的幻象退去，现实出口在同伴木牌的微光中显现。地下传来藤蔓摩擦石壁的声音。",io(localStorage,{book:1,chapter:3,room:4}),Jt.textContent="第一部 · 第三章完成",en.textContent="现实所需",ot.classList.remove("hidden"),ce("同伴木牌照亮出口——正在下降至地下试炼的魔鬼网！",5600),setTimeout(()=>{Wt(12),dt(localStorage,{book:1,chapter:4,room:1})},900),setTimeout(()=>{ot.classList.add("hidden"),ce(Gn(Y,"roomLoadedMessage"),5e3)},1900)}}function J_(i){if(!(i.userData.selected||I.unlocked)){if(I=Dv(I,i.userData.actionId),Qu(),!I.accepted){for(const e of We)e.userData.type==="devils-snare-action"&&(e.userData.selected=!1,e.material.emissiveIntensity=.5);de.color.setHex(10961976),ce(Gn(Y,"wrong",{label:Ye(Y,i.userData.label),count:I.constriction}),4100),setTimeout(()=>{At===12&&de.color.setHex(7179368)},680);return}if(i.userData.selected=!0,i.material.emissive.setHex(7981032),i.material.emissiveIntensity=1.9,!I.unlocked){const e=I.progress.length===1?"firstHint":"secondHint";je.textContent=Gn(Y,"progress",{count:I.progress.length}),Ze.textContent=Gn(Y,e),ce(Gn(Y,"accepted",{label:Ye(Y,i.userData.label)}),3600);return}je.textContent=Gn(Y,"completeObjective"),Ze.textContent=Gn(Y,"completeHint"),dt(localStorage,{book:1,chapter:4,room:1}),Jt.textContent=Gn(Y,"transitionKicker"),en.textContent=Gn(Y,"transitionTitle"),ot.classList.remove("hidden"),ce(Gn(Y,"completionMessage"),5200),setTimeout(()=>{Wt(13),dt(localStorage,{book:1,chapter:4,room:2})},900),setTimeout(()=>{ot.classList.add("hidden"),ce(In(Y,"roomLoadedMessage"),4800)},1900)}}function Q_(i){if(!(i.userData.selected||I.unlocked)){if(I=Lv(I,i.userData.clueId),ed(),!I.accepted){for(const e of We)e.userData.type==="flying-key-clue"&&(e.userData.selected=!1,e.material.emissiveIntensity=.48);de.color.setHex(10898514),ce(In(Y,"wrong",{label:Ye(Y,i.userData.label),count:I.pursuit}),4200),setTimeout(()=>{At===13&&de.color.setHex(8558262)},700);return}if(i.userData.selected=!0,i.material.emissive.setHex(12575743),i.material.emissiveIntensity=1.9,!I.unlocked){const e=I.progress.length===1?"firstHint":"secondHint";je.textContent=In(Y,"progress",{count:I.progress.length}),Ze.textContent=In(Y,e),ce(In(Y,"accepted",{label:Ye(Y,i.userData.label)}),3700);return}je.textContent=In(Y,"completeObjective"),Ze.textContent=In(Y,"completeHint"),dt(localStorage,{book:1,chapter:4,room:2}),Jt.textContent=In(Y,"transitionKicker"),en.textContent=In(Y,"transitionTitle"),ot.classList.remove("hidden"),ce(In(Y,"completionMessage"),5400),setTimeout(()=>{Wt(14),dt(localStorage,{book:1,chapter:4,room:3})},900),setTimeout(()=>{ot.classList.add("hidden"),ce(In(Y,"nextRoomMessage"),4800)},1900)}}function ex(i){if(!(i.userData.selected||I.unlocked)){if(I=Pv(I,i.userData.moveId),td(),!I.accepted){for(const e of We)e.userData.type==="wizard-chess-move"&&(e.userData.selected=!1,e.material.emissiveIntensity=.36);de.color.setHex(10569547),ce(Fn(Y,"wrong",{label:Ye(Y,i.userData.label),count:I.captured}),4300),setTimeout(()=>{At===14&&de.color.setHex(10132646)},720);return}if(i.userData.selected=!0,i.material.emissive.setHex(14214084),i.material.emissiveIntensity=1.9,!I.unlocked){const e=I.progress.length===1?"firstHint":"secondHint";je.textContent=Fn(Y,"progress",{count:I.progress.length}),Ze.textContent=Fn(Y,e),ce(Fn(Y,"accepted",{label:Ye(Y,i.userData.label)}),3800);return}je.textContent=Fn(Y,"completeObjective"),Ze.textContent=Fn(Y,"completeHint"),dt(localStorage,{book:1,chapter:4,room:3}),Jt.textContent=Fn(Y,"transitionKicker"),en.textContent=Fn(Y,"transitionTitle"),ot.classList.remove("hidden"),ce(Fn(Y,"completionMessage"),5400),setTimeout(()=>{Wt(15),dt(localStorage,{book:1,chapter:4,room:4})},900),setTimeout(()=>{ot.classList.add("hidden"),ce(Fn(Y,"nextRoomMessage"),5e3)},1900)}}function tx(i){if(!(i.userData.selected||I.unlocked)){if(I=Iv(I,i.userData.clueId),nd(),!I.accepted){for(const e of We)e.userData.type==="stone-chamber-clue"&&(e.userData.selected=!1,e.material.emissiveIntensity=.4);de.color.setHex(11615564),ce(kn(Y,"wrong",{label:Ye(Y,i.userData.label),count:I.corruption}),4400),setTimeout(()=>{At===15&&de.color.setHex(10258354)},720);return}if(i.userData.selected=!0,i.material.emissive.setHex(14272255),i.material.emissiveIntensity=1.9,!I.unlocked){const e=I.progress.length===1?"firstHint":"secondHint";je.textContent=kn(Y,"progress",{count:I.progress.length}),Ze.textContent=kn(Y,e),ce(kn(Y,"accepted",{label:Ye(Y,i.userData.label)}),3900);return}je.textContent=kn(Y,"completeObjective"),Ze.textContent=kn(Y,"completeHint"),io(localStorage,{book:1,chapter:4,room:4}),Jt.textContent=kn(Y,"transitionKicker"),en.textContent=kn(Y,"transitionTitle"),ot.classList.remove("hidden"),ce(kn(Y,"completionMessage"),6500),setTimeout(()=>{Wt(16),dt(localStorage,{book:2,chapter:1,room:1})},1e3),setTimeout(()=>{ot.classList.add("hidden"),ce(kn(Y,"nextRoomMessage"),5200)},2100)}}function nx(i){if(!(i.userData.selected||I.unlocked)){if(I=Ov(I,i.userData.objectId),id(),!I.accepted){for(const e of We)e.userData.type==="elf-blockade-trace"&&(e.userData.selected=!1,e.material.emissiveIntensity=.38);de.color.setHex(10764108),ce(zn(Y,"wrong",{label:Ye(Y,i.userData.label),count:I.interference}),4300),setTimeout(()=>{At===16&&de.color.setHex(8494477)},720);return}if(i.userData.selected=!0,i.material.emissive.setHex(11004868),i.material.emissiveIntensity=1.9,!I.unlocked){const e=I.progress.length===1?"firstHint":"secondHint";je.textContent=zn(Y,"progress",{count:I.progress.length}),Ze.textContent=zn(Y,e),ce(zn(Y,"accepted",{label:Ye(Y,i.userData.label)}),3800);return}je.textContent=zn(Y,"completeObjective"),Ze.textContent=zn(Y,"completeHint"),dt(localStorage,{book:2,chapter:1,room:1}),Jt.textContent=zn(Y,"transitionKicker"),en.textContent=zn(Y,"transitionTitle"),ot.classList.remove("hidden"),ce(zn(Y,"completionMessage"),6200),setTimeout(()=>{Wt(17),dt(localStorage,{book:2,chapter:1,room:2})},900),setTimeout(()=>{ot.classList.add("hidden"),ce(zn(Y,"nextRoomMessage"),5e3)},1900)}}function ix(i){if(!(i.userData.selected||I.unlocked)){if(I=Nv(I,i.userData.controlId),sd(),!I.accepted){for(const e of We)e.userData.type==="flying-car-control"&&(e.userData.selected=!1,e.material.emissiveIntensity=.4);de.color.setHex(11617612),Ht.rotation.z=.08,ce(Bn(Y,"wrong",{label:Ye(Y,i.userData.label),count:I.turbulence}),4300),setTimeout(()=>{At===17&&(de.color.setHex(7440544),Ht.rotation.z=0)},720);return}if(i.userData.selected=!0,i.material.emissive.setHex(12052223),i.material.emissiveIntensity=.8,!I.unlocked){const e=I.progress.length===1?"firstHint":"secondHint";je.textContent=Bn(Y,"progress",{count:I.progress.length}),Ze.textContent=Bn(Y,e),ce(Bn(Y,"accepted",{label:Ye(Y,i.userData.label)}),3700);return}je.textContent=Bn(Y,"completeObjective"),Ze.textContent=Bn(Y,"completeHint"),dt(localStorage,{book:2,chapter:1,room:2}),Jt.textContent=Bn(Y,"transitionKicker"),en.textContent=Bn(Y,"transitionTitle"),ot.classList.remove("hidden"),ce(Bn(Y,"completionMessage"),6200),setTimeout(()=>{Wt(18),dt(localStorage,{book:2,chapter:1,room:3})},900),setTimeout(()=>{ot.classList.add("hidden"),ce(Bn(Y,"nextRoomMessage"),5200)},1900)}}function sx(i){if(!(i.userData.selected||I.unlocked)){if(I=Uv(I,i.userData.actionId),rd(),!I.accepted){for(const e of We)e.userData.type==="willow-rhythm"&&(e.userData.selected=!1,e.traverse(t=>{t.material?.emissive&&(t.material.emissiveIntensity=.4)}));de.color.setHex(11750211),Ht.rotation.z=-.07,ce(ti(Y,"wrong",{label:Ye(Y,i.userData.label),count:I.bruises}),4300),setTimeout(()=>{At===18&&(de.color.setHex(8228772),Ht.rotation.z=0)},720);return}if(i.userData.selected=!0,i.traverse(e=>{e.material?.emissive&&(e.material.emissive.setHex(13037485),e.material.emissiveIntensity=1.9)}),!I.unlocked){const e=I.progress.length===1?"firstHint":"secondHint";je.textContent=ti(Y,"progress",{count:I.progress.length}),Ze.textContent=ti(Y,e),ce(ti(Y,"accepted",{label:Ye(Y,i.userData.label)}),3700);return}je.textContent=ti(Y,"completeObjective"),Ze.textContent=ti(Y,"completeHint"),dt(localStorage,{book:2,chapter:1,room:3}),Jt.textContent=ti(Y,"transitionKicker"),en.textContent=ti(Y,"transitionTitle"),ot.classList.remove("hidden"),setTimeout(()=>ot.classList.add("hidden"),3e3),ce(ti(Y,"completionMessage"),6200)}}function rx(i){if(Vr)return;const e=dl(i);e&&(Vr=!0,Jt.textContent=`第一部 · 第一章 · 第 ${i+1} 关`,en.textContent=e.name,ot.classList.remove("hidden"),setTimeout(()=>{Wt(i),dt(localStorage,{book:1,chapter:1,room:i+1})},600),setTimeout(()=>{ot.classList.add("hidden"),Vr=!1;const n={1:"第二关已加载：进入对角巷，按清单顺序采购。",2:"第三关已加载：你已进入奥利凡德魔杖店。",3:"第四关已加载：你已抵达霍格沃茨礼堂，分院仪式即将开始。"}[i]??`第 ${i+1} 关已加载。`;ce(n,4200)},1450))}function ox(i){const e=n_({roomIndex:At,unlocked:i.userData.unlocked});if(!e.advanced){const n=4-I.progress.length;ce(`门还没有认可你：还需完成 ${n} 个正确步骤。`);return}if(i.userData.opening)return;i.userData.opening=!0;const t=dl(e.roomIndex);t&&(je.textContent=`门正在打开：准备进入第 ${e.roomIndex+1} 关“${t.name}”`,ce(`第 ${At+1} 关完成！正在前往“${t.name}”……`,2600),setTimeout(()=>rx(e.roomIndex),1050))}function ad(){Xa.setFromCamera(new Se(0,0),Ht);const i=We.filter(r=>r.visible),e=Xa.intersectObjects(i,!0)[0]?.object??null;if(ke=sv(e,i),ks.classList.toggle("visible",!!ke),!ke)return;const t=we(tt?"action.touch":"action.keyboard"),n=ke.userData,s=Ye(Y,n.label??n.destination??ke.name);n.type==="shopping-item"?ks.textContent=`${t} ${s} · ${n.price} G`:n.type==="door"&&!n.unlocked?ks.textContent=`${s} · ${we("campaign.locked")}`:ks.textContent=`${t} ${s}`}function ld(){!Pn.isLocked&&!nr||!ke||Vr||(ke.userData.type==="owl-letter"?F_(ke):ke.userData.type==="shopping-item"?z_(ke):ke.userData.type==="wand-wood"?B_(ke):ke.userData.type==="wand-core"?H_(ke):ke.userData.type==="wand-length"?G_(ke):ke.userData.type==="sorting-clue"?V_(ke):ke.userData.type==="stair-route"?W_(ke):ke.userData.type==="portrait-testimony"?X_(ke):ke.userData.type==="patrol-cover"?q_(ke):ke.userData.type==="lullaby-instrument"?Y_(ke):ke.userData.type==="flying-delivery"?j_(ke):ke.userData.type==="troll-obstacle"?$_(ke):ke.userData.type==="restricted-book"?K_(ke):ke.userData.type==="mirror-choice"?Z_(ke):ke.userData.type==="devils-snare-action"?J_(ke):ke.userData.type==="flying-key-clue"?Q_(ke):ke.userData.type==="wizard-chess-move"?ex(ke):ke.userData.type==="stone-chamber-clue"?tx(ke):ke.userData.type==="elf-blockade-trace"?nx(ke):ke.userData.type==="flying-car-control"?ix(ke):ke.userData.type==="willow-rhythm"?sx(ke):ke.userData.type==="door"&&ox(ke))}function cd(){document.documentElement.lang=Y,document.title=we("document.title"),document.querySelector("#start-brand").textContent=we("start.brand"),document.querySelector("#start-title").textContent=we("start.title"),document.querySelector("#start-description").textContent=we("start.description"),tr.textContent=we("start.play"),so.textContent=we("start.continue"),$r.textContent=we("start.restart"),document.querySelector("#campaign-button").textContent=we("start.campaign"),Vu.textContent=we("start.language"),Qt.textContent=we(Mn==="playing"?"voice.stop":"voice.play"),Qt.disabled=Mn==="loading",Qt.setAttribute("aria-busy",String(Mn==="loading")),Qt.setAttribute("aria-pressed",String(Mn==="playing")),Vs.textContent=we(`voice.${Mn==="idle"?"ready":Mn}`),r_.textContent=we("voice.subtitle"),document.querySelector(".desktop-help").textContent=we("help.desktop"),document.querySelector(".mobile-help").textContent=we("help.mobile"),document.querySelector("#look-zone span").textContent=we("mobile.look"),document.querySelector("#interact-button").textContent=we("mobile.interact"),document.querySelector(".campaign-header h2").textContent=we("campaign.title"),document.querySelector("#campaign-screen").setAttribute("aria-label",we("campaign.title")),document.querySelector("#campaign-close").setAttribute("aria-label",we("campaign.close")),document.querySelector("#book-tabs").setAttribute("aria-label",we("campaign.selectBook")),Jt.textContent=we("transition.next"),Wu?.render()}function ro(){Wa+=1,vs.pause(),vs.currentTime=0,Mn="idle",Qt.disabled=!1,Qt.setAttribute("aria-busy","false"),Qt.setAttribute("aria-pressed","false"),Qt.textContent=we("voice.play"),Vs.textContent=we("voice.ready")}Qt.addEventListener("click",async()=>{if(Mn==="playing"){ro();return}if(!bv({playbackState:Mn,muted:!1}))return;const i=xv("intro",Y),e=++Wa;Mn="loading",Qt.disabled=!0,Qt.setAttribute("aria-busy","true"),Vs.textContent=we("voice.loading");const t=await yv({audio:vs,source:i?`/Hogwarts-Escape-Room-3D-Play/${i}`:null,muted:!1});if(e!==Wa){vs.pause(),vs.currentTime=0;return}Qt.disabled=!1,Qt.setAttribute("aria-busy","false"),t==="playing"?(Mn="playing",Qt.textContent=we("voice.stop"),Qt.setAttribute("aria-pressed","true"),Vs.textContent=we("voice.playing")):(Mn="idle",Qt.textContent=we("voice.play"),Qt.setAttribute("aria-pressed","false"),Vs.textContent=we("voice.failed"))});vs.addEventListener("ended",ro);for(const i of document.querySelectorAll("[data-language]"))i.addEventListener("click",()=>{ro(),Y=fv(localStorage,i.dataset.language),we=er(Y),cd(),Wt(At),Kr.classList.add("hidden"),Kr.setAttribute("aria-hidden","true")});Vu.addEventListener("click",()=>{Kr.classList.remove("hidden"),Kr.removeAttribute("aria-hidden")});cd();tr.addEventListener("click",()=>{ro(),tt?(nr=!0,fl.classList.add("hidden"),i_.classList.add("active")):Pn.lock()});(dl(zs)||Number.isInteger(zs)&&zs>=4&&zs<=18)&&(so.classList.remove("hidden"),$r.classList.remove("hidden"));so.addEventListener("click",()=>{Wt(zs),tr.click()});$r.addEventListener("click",()=>{av(localStorage),so.classList.add("hidden"),$r.classList.add("hidden"),Wt(0),tr.click()});Pn.addEventListener("lock",()=>fl.classList.add("hidden"));Pn.addEventListener("unlock",()=>fl.classList.remove("hidden"));Wu=vv({getProgress:()=>Du(localStorage),getLanguage:()=>Y,getTranslator:()=>we,onPlay:i=>{const t={"b1-c2-r1":4,"b1-c2-r2":5,"b1-c2-r3":6,"b1-c2-r4":7,"b1-c3-r1":8,"b1-c3-r2":9,"b1-c3-r3":10,"b1-c3-r4":11,"b1-c4-r1":12,"b1-c4-r2":13,"b1-c4-r3":14,"b1-c4-r4":15,"b2-c1-r1":16,"b2-c1-r2":17,"b2-c1-r3":18}[i.id]??0;Wt(t),t>=16?dt(localStorage,{book:2,chapter:1,room:t-15}):t>=12?dt(localStorage,{book:1,chapter:4,room:t-11}):t>=8?dt(localStorage,{book:1,chapter:3,room:t-7}):t>=4&&dt(localStorage,{book:1,chapter:2,room:t-3}),tr.click()}});const fs={};addEventListener("keydown",i=>{fs[i.code]=!0,i.code==="KeyE"&&ld()});addEventListener("keyup",i=>{fs[i.code]=!1});const fi={forward:0,right:0},Zr=document.querySelector("#joystick"),ud=document.querySelector("#joystick-knob");let Jr=null,qa={x:0,y:0};function dd(i){const e=i.clientX-qa.x,t=i.clientY-qa.y,n=Math.hypot(e,t)||1,s=34,r=Math.min(1,s/n),o=e*r,a=t*r;ud.style.transform=`translate(${o}px, ${a}px)`,fi.right=o/s,fi.forward=-a/s}Zr.addEventListener("touchstart",i=>{const e=i.changedTouches[0],t=Zr.getBoundingClientRect();Jr=e.identifier,qa={x:t.left+t.width/2,y:t.top+t.height/2},dd(e),i.preventDefault()},{passive:!1});Zr.addEventListener("touchmove",i=>{const e=[...i.changedTouches].find(t=>t.identifier===Jr);e&&dd(e),i.preventDefault()},{passive:!1});Zr.addEventListener("touchend",i=>{[...i.changedTouches].some(e=>e.identifier===Jr)&&(Jr=null,fi.forward=0,fi.right=0,ud.style.transform="translate(0,0)")},{passive:!1});const ki=document.querySelector("#look-zone");let $s=null,Wr={x:0,y:0};ki.addEventListener("pointerdown",i=>{!nr||$s!==null||($s=i.pointerId,Wr={x:i.clientX,y:i.clientY},ki.setPointerCapture(i.pointerId),i.preventDefault())});ki.addEventListener("pointermove",i=>{if(!nr||i.pointerId!==$s)return;const e=new wn().setFromQuaternion(Ht.quaternion,"YXZ"),t=iv({yaw:e.y,pitch:e.x},{dx:i.clientX-Wr.x,dy:i.clientY-Wr.y});e.y=t.yaw,e.x=t.pitch,Ht.quaternion.setFromEuler(e),Wr={x:i.clientX,y:i.clientY},i.preventDefault()});function hd(i){i.pointerId===$s&&(ki.hasPointerCapture(i.pointerId)&&ki.releasePointerCapture(i.pointerId),$s=null)}ki.addEventListener("pointerup",hd);ki.addEventListener("pointercancel",hd);document.querySelector("#interact-button").addEventListener("pointerdown",i=>{i.preventDefault(),ld()});const jc=new cf;function fd(){requestAnimationFrame(fd);const i=Math.min(jc.getDelta(),.05),e=jc.elapsedTime;for(const t of Mt)t.object.visible&&(t.object.position.y=t.baseY+Math.sin(e*1.35+t.phase)*t.bob,t.spin&&(t.object.rotation.y+=i*t.spin));if(Pn.isLocked||nr){const t=5*i,n=Ht.position.clone();fs.KeyW&&Pn.moveForward(t),fs.KeyS&&Pn.moveForward(-t),fs.KeyA&&Pn.moveRight(-t),fs.KeyD&&Pn.moveRight(t),fi.forward&&Pn.moveForward(t*fi.forward),fi.right&&Pn.moveRight(t*fi.right),Ht.position.y=1.7,(Math.abs(Ht.position.x)>Xc.x||Math.abs(Ht.position.z)>Xc.z)&&Ht.position.copy(n),ad()}vi?.userData.opening&&vi.userData.pivot.rotation.y>-Math.PI*.48&&(vi.userData.pivot.rotation.y-=i*1.55),bi.render(Ct,Ht)}Wt(0);fd();addEventListener("resize",()=>{Ht.aspect=innerWidth/innerHeight,Ht.updateProjectionMatrix(),bi.setSize(innerWidth,innerHeight)});
