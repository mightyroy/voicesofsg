function Init(){sceneGL=new THREE.Scene,sceneCSS=new THREE.Scene,camera=new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,.1,5e4),camera.position.set(0*g_mapScaleFactor,0*g_mapScaleFactor,4*g_mapScaleFactor),rendererGL=new THREE.WebGLRenderer,rendererGL.domElement.style.top=0,rendererGL.setSize(window.innerWidth,window.innerHeight),rendererCSS=new THREE.CSS3DRenderer,rendererCSS.setSize(window.innerWidth,window.innerHeight),rendererCSS.domElement.style.position="absolute",rendererCSS.domElement.style.top=0,document.body.appendChild(rendererGL.domElement),document.body.appendChild(rendererCSS.domElement),AddLights(),AddsceneGLElements(),AddsceneCSSElements(),axes=buildAxes(1e3),sceneGL.add(axes),raycaster=new THREE.Raycaster,mouse=new THREE.Vector2,window.addEventListener("mousemove",onMouseMove,!1),window.addEventListener("mousedown",onMouseDown,!1),window.addEventListener("resize",onWindowResize,!1),USE_MOUSE&&(controls=new THREE.OrbitControls(camera),controls.target=new THREE.Vector3(0*g_mapScaleFactor,0*g_mapScaleFactor,0*g_mapScaleFactor),controls.zoomSpeed=.3),USE_VR&&(controls=new THREE.VRControls(camera),effect=new THREE.VREffect(rendererGL),effect.setSize(window.innerWidth,window.innerHeight))}function onMouseMove(e){mouse.x=2*(e.clientX/window.innerWidth)-1,mouse.y=1-2*(e.clientY/window.innerHeight)}function onMouseDown(){m_intersectMapObjectNum>0&&g_mapObjects.children.forEach(function(e){if(e.id+1==m_intersectMapObjectID){m_intersectMapObjectName=e.Name;var o=document.getElementById("populationDisplay");o.innerHTML=populationArray[m_intersectMapObjectName].district+"<br>"+populationArray[m_intersectMapObjectName].population+" people"}})}function buildAxes(e){var o=new THREE.Object3D;return o.add(buildAxis(new THREE.Vector3(0,0,0),new THREE.Vector3(e,0,0),16711680,!1)),o.add(buildAxis(new THREE.Vector3(0,0,0),new THREE.Vector3(-e,0,0),16711680,!0)),o.add(buildAxis(new THREE.Vector3(0,0,0),new THREE.Vector3(0,e,0),65280,!1)),o.add(buildAxis(new THREE.Vector3(0,0,0),new THREE.Vector3(0,-e,0),65280,!0)),o.add(buildAxis(new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,e),255,!1)),o.add(buildAxis(new THREE.Vector3(0,0,0),new THREE.Vector3(0,0,-e),255,!0)),o}function buildAxis(e,o,t,i){var a,n=new THREE.Geometry;a=i?new THREE.LineDashedMaterial({linewidth:3,color:t,dashSize:3,gapSize:3}):new THREE.LineBasicMaterial({linewidth:3,color:t}),n.vertices.push(e.clone()),n.vertices.push(o.clone()),n.computeLineDistances();var s=new THREE.Line(n,a,THREE.LinePieces);return s}function AddLights(){var e=new THREE.AmbientLight(4210752);sceneGL.add(e),dirLight=new THREE.DirectionalLight(16777215,1),dirLight.position.set(0,0,10),sceneGL.add(dirLight)}function Animate(){RotateCommentObjects(),CheckCommentObjectTransparency(),AdjustMapPosRot(),SelectMapObject(),render(),requestAnimationFrame(Animate),controls.update()}function CheckCommentObjectTransparency(){t_camRotation=camera.rotation;var e=t_camRotation.x,o=t_camRotation.y,t=(t_camRotation.z,new THREE.Vector3);t.x=Math.sin(o),t.y=-Math.cos(o)*Math.sin(e),t.z=Math.cos(e)*Math.cos(o),t_camPosition=camera.position;for(var i=t_camPosition.dot(t),a=0;a<m_cssObjects.length;a++){var n=m_cssObjects[a],s=!0;g_mapSG.children.forEach(function(e){e.traverse(function(e){if(e instanceof THREE.Mesh){var o=new THREE.Vector3;o.subVectors(n.position,t_camPosition);var a=-1*o.dot(t);if(a-i>0){var r=i/a,c=o;c.multiplyScalar(r);var l=new THREE.Vector3;l.addVectors(t_camPosition,c);var m=(new THREE.Box3).setFromObject(e);m.expandByScalar(2);var d=m.containsPoint(l);1==d&&(s=!1)}}})}),n.element.style.backgroundColor=0==s?"rgba(255,255,255,0)":"rgba(255,255,255,"+CSS_ALPHA+")"}}function RotateCommentObjects(){g_time+=.001;for(var e,o=[30,30,30,30,30],t=[30,30,30,30,30],i=0,a=0;a<m_cssObjects.length;a++){var n=o[i];t[i]=t[i]-1,t[i]<0&&(i+=1),e=a*(2*Math.PI/n);var s=m_cssObjects[a],r=0;r=Math.abs(i)%2==1?1:-1,2>=i?(s.position.x=(3e3-300*i)*Math.sin(2*Math.PI*g_time*r+e),s.position.y=1e3+400*i,s.position.z=(3e3-300*i)*Math.cos(2*Math.PI*g_time*r+e)):(s.position.x=(3e3-300*(i-2))*Math.sin(2*Math.PI*g_time*r+e),s.position.y=1e3-400*(i-2),s.position.z=(3e3-300*(i-2))*Math.cos(2*Math.PI*g_time*r+e))}}function AdjustMapPosRot(){t_camRotation=camera.rotation,g_mapObjects.children.forEach(function(e){e.traverse(function(e){e instanceof THREE.Mesh&&e.rotation.set(t_camRotation.x,t_camRotation.y,t_camRotation.z)})}),g_mapSG.children.forEach(function(e){e.traverse(function(e){e instanceof THREE.Mesh&&e.rotation.set(t_camRotation.x,t_camRotation.y,t_camRotation.z)})});var e=t_camRotation.x,o=t_camRotation.y,t=(t_camRotation.z,Math.sin(o)),i=-Math.cos(o)*Math.sin(e),a=Math.cos(e)*Math.cos(o);dirLight.position.set(10*t*g_mapScaleFactor,10*i*g_mapScaleFactor,10*a*g_mapScaleFactor)}function SelectMapObject(){raycaster.setFromCamera(mouse,camera);var e=raycaster.intersectObjects(g_mapObjects.children,!0);if(m_intersectMapObjectNum=e.length,e.length>0){var o=e[0],t=o.object;m_intersectMapObjectID=t.id}g_mapObjects.children.forEach(function(e){var o=new THREE.MeshLambertMaterial;o.color.setRGB(1,0,0),e.traverse(function(e){e instanceof THREE.Mesh&&(e.material.color.setRGB(1,0,0),e.castShadow=!0,e.receiveShadow=!0)})});for(var i=0;i<e.length;i++){var o=e[i],t=o.object;t.traverse(function(e){e instanceof THREE.Mesh&&(e.material.color.setRGB(0,1,0),e.castShadow=!0,e.receiveShadow=!0)})}}function render(){USE_MOUSE&&(rendererGL.render(sceneGL,camera),rendererCSS.render(sceneCSS,camera)),USE_VR&&(effect.render(sceneGL,camera),rendererCSS.render(sceneCSS,camera))}function onWindowResize(){camera.aspect=window.innerWidth/window.innerHeight,camera.updateProjectionMatrix(),rendererGL.setSize(window.innerWidth,window.innerHeight),render()}function AddLights(){var e=new THREE.AmbientLight(4210752);sceneGL.add(e),dirLight=new THREE.DirectionalLight(16777215,1),dirLight.position.set(0,0,10),sceneGL.add(dirLight)}function AddsceneCSSElements(){for(var e=0;e<table.length;e++){var o=table[e],t=document.createElement("div");t.className="element",t.style.backgroundColor="rgba(255,255,255,"+CSS_ALPHA+")",t.style.width="200px",t.style.height="200px";var i=document.createElement("div");i.className="number",i.textContent=e+1,t.appendChild(i);var a=document.createElement("div");a.className="symbol",a.textContent=o[0],t.appendChild(a);var n=document.createElement("div");n.className="details",n.innerHTML=o[1]+"<br>"+o[2],t.appendChild(n);var s=new THREE.CSS3DObject(t);s.position.x=0,s.position.y=0,s.position.z=-100,sceneCSS.add(s),m_cssObjects.push(s),t.parent=s,s.element.onclick=function(){GetCSSElementInfo(this)}}}function GetCSSElementInfo(e){console.log(e.children[2].innerHTML),e.style.border="30px solid rgba(255,255,255,1.0)"}function AddsceneGLElements(){g_mapSG=new THREE.Object3D,sceneGL.add(g_mapSG),g_mapObjects=new THREE.Object3D,sceneGL.add(g_mapObjects),LoadOBJFiles("obj/SG_AngMoKio.obj",g_mapObjects,0),LoadOBJFiles("obj/SG_Bedok.obj",g_mapObjects,1),LoadOBJFiles("obj/SG_Bishan.obj",g_mapObjects,2),LoadOBJFiles("obj/SG_BoonLay.obj",g_mapObjects,3),LoadOBJFiles("obj/SG_BukitBatok.obj",g_mapObjects,4),LoadOBJFiles("obj/SG_BukitMerah.obj",g_mapObjects,5),LoadOBJFiles("obj/SG_BukitPanjang.obj",g_mapObjects,6),LoadOBJFiles("obj/SG_BukitTimah.obj",g_mapObjects,7),LoadOBJFiles("obj/SG_CCK.obj",g_mapObjects,8),LoadOBJFiles("obj/SG_CentralCatchmentArea.obj",g_mapObjects,9),LoadOBJFiles("obj/SG_CentralRegion.obj",g_mapObjects,10),LoadOBJFiles("obj/SG_Changi.obj",g_mapObjects,11),LoadOBJFiles("obj/SG_Clementi.obj",g_mapObjects,12),LoadOBJFiles("obj/SG_Geylang.obj",g_mapObjects,13),LoadOBJFiles("obj/SG_Hougang.obj",g_mapObjects,14),LoadOBJFiles("obj/SG_JurongEast.obj",g_mapObjects,15),LoadOBJFiles("obj/SG_JurongIsland.obj",g_mapObjects,16),LoadOBJFiles("obj/SG_JurongWest.obj",g_mapObjects,17),LoadOBJFiles("obj/SG_Kallang.obj",g_mapObjects,18),LoadOBJFiles("obj/SG_LimChuKang.obj",g_mapObjects,19),LoadOBJFiles("obj/SG_Mandai.obj",g_mapObjects,20),LoadOBJFiles("obj/SG_MarineParade.obj",g_mapObjects,21),LoadOBJFiles("obj/SG_Novena.obj",g_mapObjects,22),LoadOBJFiles("obj/SG_PasirRis.obj",g_mapObjects,23),LoadOBJFiles("obj/SG_PeyaLebar.obj",g_mapObjects,24),LoadOBJFiles("obj/SG_Pioneer.obj",g_mapObjects,25),LoadOBJFiles("obj/SG_Punggol.obj",g_mapObjects,26),LoadOBJFiles("obj/SG_QueensTown.obj",g_mapObjects,27),LoadOBJFiles("obj/SG_Seletar.obj",g_mapObjects,28),LoadOBJFiles("obj/SG_Sembawang.obj",g_mapObjects,29),LoadOBJFiles("obj/SG_Sengkang.obj",g_mapObjects,30),LoadOBJFiles("obj/SG_Sentosa.obj",g_mapObjects,31),LoadOBJFiles("obj/SG_Serangoon.obj",g_mapObjects,32),LoadOBJFiles("obj/SG_Simpang.obj",g_mapObjects,33),LoadOBJFiles("obj/SG_SungeiKaduh.obj",g_mapObjects,34),LoadOBJFiles("obj/SG_Tampines.obj",g_mapObjects,35),LoadOBJFiles("obj/SG_Tanglin.obj",g_mapObjects,36),LoadOBJFiles("obj/SG_Tengah.obj",g_mapObjects,37),LoadOBJFiles("obj/SG_ToaPayoh.obj",g_mapObjects,38),LoadOBJFiles("obj/SG_Tuas.obj",g_mapObjects,39),LoadOBJFiles("obj/SG_Ubin.obj",g_mapObjects,40),LoadOBJFiles("obj/SG_WestCatchmentArea.obj",g_mapObjects,41),LoadOBJFiles("obj/SG_Woodlands.obj",g_mapObjects,42),LoadOBJFiles("obj/SG_Yishun.obj",g_mapObjects,43),LoadOBJFilesTransparent("obj/Singapore.obj",g_mapSG,1)}function LoadOBJFiles(e,o,t){var i=new THREE.OBJLoader;i.load(e,function(e){var i=new THREE.MeshPhongMaterial({color:10903040});e.scale.set(g_mapScaleFactor,g_mapScaleFactor,g_mapScaleFactor),e.Name=t,e.traverse(function(e){e instanceof THREE.Mesh&&(e.material=i,e.castShadow=!0,e.receiveShadow=!0)}),o.add(e)})}function LoadOBJFilesTransparent(e,o,t){var i=new THREE.OBJLoader;i.load(e,function(e){var i=new THREE.MeshPhongMaterial({color:10903040,opacity:0,transparent:!0});e.scale.set(g_mapScaleFactor,g_mapScaleFactor,g_mapScaleFactor),e.Name=t,e.traverse(function(e){e instanceof THREE.Mesh&&(e.material=i,e.castShadow=!0,e.receiveShadow=!0)}),o.add(e)})}function transform(e,o){TWEEN.removeAll();for(var t=0;t<m_cssObjects.length;t++){var i=m_cssObjects[t],a=e[t];new TWEEN.Tween(i.position).to({x:a.position.x,y:a.position.y,z:a.position.z},Math.random()*o+o).easing(TWEEN.Easing.Exponential.InOut).start(),new TWEEN.Tween(i.rotation).to({x:a.rotation.x,y:a.rotation.y,z:a.rotation.z},Math.random()*o+o).easing(TWEEN.Easing.Exponential.InOut).start()}new TWEEN.Tween(this).to({},2*o).onUpdate(render).start()}var USE_MOUSE=!1,USE_VR=!1,CSS_ALPHA=.6,g_mapScaleFactor=400,table=[["Hello","Hihi","1.00794",1,1],["Hello","Hihi","4.002602",18,1],["Hello","Hihi","6.941",1,2],["Hello","Hihi","9.012182",2,2],["Hello","Hihi","10.811",13,2],["Hello","Hihi","12.0107",14,2],["Hello","Hihi","14.0067",15,2],["Hello","Hihi","15.9994",16,2],["Hello","Hihi","18.9984032",17,2],["Hello","Hihi","20.1797",18,2],["Hello","Hihi","22.98976...",1,3],["Hello","Hihi","24.305",2,3],["Hello","Hihi","26.9815386",13,3],["Hello","Hihi","28.0855",14,3],["Hello","Hihi","30.973762",15,3],["Hello","Hihi","32.065",16,3],["Hello","Hihi","35.453",17,3],["Hello","Hihi","39.948",18,3],["Hello","Hihi","39.948",1,4],["Hello","Hihi","39.948",1,4],["Hello","Hihi","22.98976...",1,3],["Hello","Hihi","24.305",2,3],["Hello","Hihi","26.9815386",13,3],["Hello","Hihi","28.0855",14,3],["Hello","Hihi","30.973762",15,3],["Hello","Hihi","32.065",16,3],["Hello","Hihi","35.453",17,3],["Hello","Hihi","39.948",18,3],["Hello","Hihi","39.948",1,4],["Hello","Hihi","39.948",1,4],["H","Hydrogen","1.00794",1,1],["He","Helium","4.002602",18,1],["Li","Lithium","6.941",1,2],["Be","Beryllium","9.012182",2,2],["B","Boron","10.811",13,2],["C","Carbon","12.0107",14,2],["N","Nitrogen","14.0067",15,2],["O","Oxygen","15.9994",16,2],["F","Fluorine","18.9984032",17,2],["Ne","Neon","20.1797",18,2],["Na","Sodium","22.98976...",1,3],["Mg","Magnesium","24.305",2,3],["Al","Aluminium","26.9815386",13,3],["Si","Silicon","28.0855",14,3],["P","Phosphorus","30.973762",15,3],["S","Sulfur","32.065",16,3],["Cl","Chlorine","35.453",17,3],["Ar","Argon","39.948",18,3],["K","Potassium","39.948",1,4],["K","Potassium","39.948",1,4],["Na","Sodium","22.98976...",1,3],["Mg","Magnesium","24.305",2,3],["Al","Aluminium","26.9815386",13,3],["Si","Silicon","28.0855",14,3],["P","Phosphorus","30.973762",15,3],["S","Sulfur","32.065",16,3],["Cl","Chlorine","35.453",17,3],["Ar","Argon","39.948",18,3],["K","Potassium","39.948",1,4],["K","Potassium","39.948",1,4],["H","Hydrogen","1.00794",1,1],["He","Helium","4.002602",18,1],["Li","Lithium","6.941",1,2],["Be","Beryllium","9.012182",2,2],["B","Boron","10.811",13,2],["C","Carbon","12.0107",14,2],["N","Nitrogen","14.0067",15,2],["O","Oxygen","15.9994",16,2],["F","Fluorine","18.9984032",17,2],["Ne","Neon","20.1797",18,2],["Na","Sodium","22.98976...",1,3],["Mg","Magnesium","24.305",2,3],["Al","Aluminium","26.9815386",13,3],["Si","Silicon","28.0855",14,3],["P","Phosphorus","30.973762",15,3],["S","Sulfur","32.065",16,3],["Cl","Chlorine","35.453",17,3],["Ar","Argon","39.948",18,3],["K","Potassium","39.948",1,4],["K","Potassium","39.948",1,4],["Na","Sodium","22.98976...",1,3],["Mg","Magnesium","24.305",2,3],["Al","Aluminium","26.9815386",13,3],["Si","Silicon","28.0855",14,3],["P","Phosphorus","30.973762",15,3],["S","Sulfur","32.065",16,3],["Cl","Chlorine","35.453",17,3],["Ar","Argon","39.948",18,3],["K","Potassium","39.948",1,4],["K","Potassium","39.948",1,4],["H","Hydrogen","1.00794",1,1],["He","Helium","4.002602",18,1],["Li","Lithium","6.941",1,2],["Be","Beryllium","9.012182",2,2],["B","Boron","10.811",13,2],["C","Carbon","12.0107",14,2],["N","Nitrogen","14.0067",15,2],["O","Oxygen","15.9994",16,2],["F","Fluorine","18.9984032",17,2],["Ne","Neon","20.1797",18,2],["Na","Sodium","22.98976...",1,3],["Mg","Magnesium","24.305",2,3],["Al","Aluminium","26.9815386",13,3],["Si","Silicon","28.0855",14,3],["P","Phosphorus","30.973762",15,3],["S","Sulfur","32.065",16,3],["Cl","Chlorine","35.453",17,3],["Ar","Argon","39.948",18,3],["K","Potassium","39.948",1,4],["K","Potassium","39.948",1,4],["Na","Sodium","22.98976...",1,3],["Mg","Magnesium","24.305",2,3],["Al","Aluminium","26.9815386",13,3],["Si","Silicon","28.0855",14,3],["P","Phosphorus","30.973762",15,3],["S","Sulfur","32.065",16,3],["Cl","Chlorine","35.453",17,3],["Ar","Argon","39.948",18,3],["K","Potassium","39.948",1,4],["K","Potassium","39.948",1,4],["H","Hydrogen","1.00794",1,1],["He","Helium","4.002602",18,1],["Li","Lithium","6.941",1,2],["Be","Beryllium","9.012182",2,2],["B","Boron","10.811",13,2],["C","Carbon","12.0107",14,2],["N","Nitrogen","14.0067",15,2],["O","Oxygen","15.9994",16,2],["F","Fluorine","18.9984032",17,2],["Ne","Neon","20.1797",18,2],["Na","Sodium","22.98976...",1,3],["Mg","Magnesium","24.305",2,3],["Al","Aluminium","26.9815386",13,3],["Si","Silicon","28.0855",14,3],["P","Phosphorus","30.973762",15,3],["S","Sulfur","32.065",16,3],["Cl","Chlorine","35.453",17,3],["Ar","Argon","39.948",18,3],["K","Potassium","39.948",1,4],["K","Potassium","39.948",1,4],["Na","Sodium","22.98976...",1,3],["Mg","Magnesium","24.305",2,3],["Al","Aluminium","26.9815386",13,3],["Si","Silicon","28.0855",14,3],["P","Phosphorus","30.973762",15,3],["S","Sulfur","32.065",16,3],["Cl","Chlorine","35.453",17,3],["Ar","Argon","39.948",18,3],["K","Potassium","39.948",1,4],["K","Potassium","39.948",1,4]],camera,sceneGL,rendererGL,m_intersectMapObjectNum=0,m_intersectMapObjectID=0,m_intersectMapObjectName=-1,sceneCSS,rendererCSS,dirLight,plane,g_mapObjects,g_mapSG,mouse,raycaster,g_time=0,m_cssObjects=[],targets={table:[],sphere:[],helix:[],grid:[]},effect;Init(),Animate();