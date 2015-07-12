THREE.TrackballControls=function(e,t){function n(e){d.enabled!==!1&&(window.removeEventListener("keydown",n),m=g,g===l.NONE&&(e.keyCode!==d.keys[l.ROTATE]||d.noRotate?e.keyCode!==d.keys[l.ZOOM]||d.noZoom?e.keyCode!==d.keys[l.PAN]||d.noPan||(g=l.PAN):g=l.ZOOM:g=l.ROTATE))}function o(){d.enabled!==!1&&(g=m,window.addEventListener("keydown",n,!1))}function s(e){d.enabled!==!1&&(e.preventDefault(),e.stopPropagation(),g===l.NONE&&(g=e.button),g!==l.ROTATE||d.noRotate?g!==l.ZOOM||d.noZoom?g!==l.PAN||d.noPan||(y=M=d.getMouseOnScreen(e.clientX,e.clientY)):v=T=d.getMouseOnScreen(e.clientX,e.clientY):f=O=d.getMouseProjectionOnBall(e.clientX,e.clientY),document.addEventListener("mousemove",a,!1),document.addEventListener("mouseup",i,!1))}function a(e){d.enabled!==!1&&(e.preventDefault(),e.stopPropagation(),g!==l.ROTATE||d.noRotate?g!==l.ZOOM||d.noZoom?g!==l.PAN||d.noPan||(M=d.getMouseOnScreen(e.clientX,e.clientY)):T=d.getMouseOnScreen(e.clientX,e.clientY):O=d.getMouseProjectionOnBall(e.clientX,e.clientY))}function i(e){d.enabled!==!1&&(e.preventDefault(),e.stopPropagation(),g=l.NONE,document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",i))}function c(e){if(d.enabled!==!1){e.preventDefault(),e.stopPropagation();var t=0;e.wheelDelta?t=e.wheelDelta/40:e.detail&&(t=-e.detail/3),v.y+=1/t*.05}}function r(e){if(d.enabled!==!1)switch(e.touches.length){case 1:g=l.TOUCH_ROTATE,f=O=d.getMouseProjectionOnBall(e.touches[0].pageX,e.touches[0].pageY);break;case 2:g=l.TOUCH_ZOOM;var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY;w=b=Math.sqrt(t*t+n*n);break;case 3:g=l.TOUCH_PAN,y=M=d.getMouseOnScreen(e.touches[0].pageX,e.touches[0].pageY);break;default:g=l.NONE}}function h(e){if(d.enabled!==!1)switch(e.preventDefault(),e.stopPropagation(),e.touches.length){case 1:O=d.getMouseProjectionOnBall(e.touches[0].pageX,e.touches[0].pageY);break;case 2:var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY;w=Math.sqrt(t*t+n*n);break;case 3:M=d.getMouseOnScreen(e.touches[0].pageX,e.touches[0].pageY);break;default:g=l.NONE}}function u(e){if(d.enabled!==!1){switch(e.touches.length){case 1:f=O=d.getMouseProjectionOnBall(e.touches[0].pageX,e.touches[0].pageY);break;case 2:b=w=0;break;case 3:y=M=d.getMouseOnScreen(e.touches[0].pageX,e.touches[0].pageY)}g=l.NONE}}THREE.EventDispatcher.call(this);var d=this,l={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM:4,TOUCH_PAN:5};this.object=e,this.domElement=void 0!==t?t:document,this.enabled=!0,this.screen={width:0,height:0,offsetLeft:0,offsetTop:0},this.radius=(this.screen.width+this.screen.height)/4,this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=[65,83,68],this.target=new THREE.Vector3;var p=new THREE.Vector3,g=l.NONE,m=l.NONE,E=new THREE.Vector3,f=new THREE.Vector3,O=new THREE.Vector3,v=new THREE.Vector2,T=new THREE.Vector2,b=0,w=0,y=new THREE.Vector2,M=new THREE.Vector2;this.handleResize=function(){this.screen.width=window.innerWidth,this.screen.height=window.innerHeight,this.screen.offsetLeft=0,this.screen.offsetTop=0,this.radius=(this.screen.width+this.screen.height)/4},this.handleEvent=function(e){"function"==typeof this[e.type]&&this[e.type](e)},this.getMouseOnScreen=function(e,t){return new THREE.Vector2((e-d.screen.offsetLeft)/d.radius*.5,(t-d.screen.offsetTop)/d.radius*.5)},this.getMouseProjectionOnBall=function(e,t){var n=new THREE.Vector3((e-.5*d.screen.width-d.screen.offsetLeft)/d.radius,(.5*d.screen.height+d.screen.offsetTop-t)/d.radius,0),o=n.length();o>1?n.normalize():n.z=Math.sqrt(1-o*o),E.copy(d.object.position).sub(d.target);var s=d.object.up.clone().setLength(n.y);return s.add(d.object.up.clone().cross(E).setLength(n.x)),s.add(E.setLength(n.z)),s},this.rotateCamera=function(){var e=Math.acos(f.dot(O)/f.length()/O.length());if(e){var t=(new THREE.Vector3).crossVectors(f,O).normalize(),n=new THREE.Quaternion;e*=d.rotateSpeed,n.setFromAxisAngle(t,-e),E.applyQuaternion(n),d.object.up.applyQuaternion(n),O.applyQuaternion(n),d.staticMoving?f.copy(O):(n.setFromAxisAngle(t,e*(d.dynamicDampingFactor-1)),f.applyQuaternion(n))}},this.zoomCamera=function(){if(g===l.TOUCH_ZOOM){var e=b/w;b=w,E.multiplyScalar(e)}else{var e=1+(T.y-v.y)*d.zoomSpeed;1!==e&&e>0&&(E.multiplyScalar(e),d.staticMoving?v.copy(T):v.y+=(T.y-v.y)*this.dynamicDampingFactor)}},this.panCamera=function(){var e=M.clone().sub(y);if(e.lengthSq()){e.multiplyScalar(E.length()*d.panSpeed);var t=E.clone().cross(d.object.up).setLength(e.x);t.add(d.object.up.clone().setLength(e.y)),d.object.position.add(t),d.target.add(t),d.staticMoving?y=M:y.add(e.subVectors(M,y).multiplyScalar(d.dynamicDampingFactor))}},this.checkDistances=function(){d.noZoom&&d.noPan||(d.object.position.lengthSq()>d.maxDistance*d.maxDistance&&d.object.position.setLength(d.maxDistance),E.lengthSq()<d.minDistance*d.minDistance&&d.object.position.addVectors(d.target,E.setLength(d.minDistance)))},this.update=function(){E.subVectors(d.object.position,d.target),d.noRotate||d.rotateCamera(),d.noZoom||d.zoomCamera(),d.noPan||d.panCamera(),d.object.position.addVectors(d.target,E),d.checkDistances(),d.object.lookAt(d.target),p.distanceToSquared(d.object.position)>0&&p.copy(d.object.position)},this.domElement.addEventListener("contextmenu",function(e){e.preventDefault()},!1),this.domElement.addEventListener("mousedown",s,!1),this.domElement.addEventListener("mousewheel",c,!1),this.domElement.addEventListener("DOMMouseScroll",c,!1),this.domElement.addEventListener("touchstart",r,!1),this.domElement.addEventListener("touchend",u,!1),this.domElement.addEventListener("touchmove",h,!1),window.addEventListener("keydown",n,!1),window.addEventListener("keyup",o,!1),this.handleResize()};