// ===================================================================================================  
// Variable declaration
// =================================================================================================== 
var USE_MOUSE = true;
var USE_VR = false;
var CSS_ALPHA = 0.6;

var g_mapScaleFactor = 400;

var table = [
    ["Hello", "Hihi", "1.00794", 1, 1],
    ["Hello", "Hihi", "4.002602", 18, 1],
    ["Hello", "Hihi", "6.941", 1, 2],
    ["Hello", "Hihi", "9.012182", 2, 2],
    ["Hello", "Hihi", "10.811", 13, 2],
    ["Hello", "Hihi", "12.0107", 14, 2],
    ["Hello", "Hihi", "14.0067", 15, 2],
    ["Hello", "Hihi", "15.9994", 16, 2],
    ["Hello", "Hihi", "18.9984032", 17, 2],
    ["Hello", "Hihi", "20.1797", 18, 2],
    ["Hello", "Hihi", "22.98976...", 1, 3],
    ["Hello", "Hihi", "24.305", 2, 3],
    ["Hello", "Hihi", "26.9815386", 13, 3],
    ["Hello", "Hihi", "28.0855", 14, 3],
    ["Hello", "Hihi", "30.973762", 15, 3],
    ["Hello", "Hihi", "32.065", 16, 3],
    ["Hello", "Hihi", "35.453", 17, 3],
    ["Hello", "Hihi", "39.948", 18, 3],
    ["Hello", "Hihi", "39.948", 1, 4],
    ["Hello", "Hihi", "39.948", 1, 4],
    ["Hello", "Hihi", "22.98976...", 1, 3],
    ["Hello", "Hihi", "24.305", 2, 3],
    ["Hello", "Hihi", "26.9815386", 13, 3],
    ["Hello", "Hihi", "28.0855", 14, 3],
    ["Hello", "Hihi", "30.973762", 15, 3],
    ["Hello", "Hihi", "32.065", 16, 3],
    ["Hello", "Hihi", "35.453", 17, 3],
    ["Hello", "Hihi", "39.948", 18, 3],
    ["Hello", "Hihi", "39.948", 1, 4],
    ["Hello", "Hihi", "39.948", 1, 4],

    ["H", "Hydrogen", "1.00794", 1, 1],
    ["He", "Helium", "4.002602", 18, 1],
    ["Li", "Lithium", "6.941", 1, 2],
    ["Be", "Beryllium", "9.012182", 2, 2],
    ["B", "Boron", "10.811", 13, 2],
    ["C", "Carbon", "12.0107", 14, 2],
    ["N", "Nitrogen", "14.0067", 15, 2],
    ["O", "Oxygen", "15.9994", 16, 2],
    ["F", "Fluorine", "18.9984032", 17, 2],
    ["Ne", "Neon", "20.1797", 18, 2],
    ["Na", "Sodium", "22.98976...", 1, 3],
    ["Mg", "Magnesium", "24.305", 2, 3],
    ["Al", "Aluminium", "26.9815386", 13, 3],
    ["Si", "Silicon", "28.0855", 14, 3],
    ["P", "Phosphorus", "30.973762", 15, 3],
    ["S", "Sulfur", "32.065", 16, 3],
    ["Cl", "Chlorine", "35.453", 17, 3],
    ["Ar", "Argon", "39.948", 18, 3],
    ["K", "Potassium", "39.948", 1, 4],
    ["K", "Potassium", "39.948", 1, 4],
    ["Na", "Sodium", "22.98976...", 1, 3],
    ["Mg", "Magnesium", "24.305", 2, 3],
    ["Al", "Aluminium", "26.9815386", 13, 3],
    ["Si", "Silicon", "28.0855", 14, 3],
    ["P", "Phosphorus", "30.973762", 15, 3],
    ["S", "Sulfur", "32.065", 16, 3],
    ["Cl", "Chlorine", "35.453", 17, 3],
    ["Ar", "Argon", "39.948", 18, 3],
    ["K", "Potassium", "39.948", 1, 4],
    ["K", "Potassium", "39.948", 1, 4],

    ["H", "Hydrogen", "1.00794", 1, 1],
    ["He", "Helium", "4.002602", 18, 1],
    ["Li", "Lithium", "6.941", 1, 2],
    ["Be", "Beryllium", "9.012182", 2, 2],
    ["B", "Boron", "10.811", 13, 2],
    ["C", "Carbon", "12.0107", 14, 2],
    ["N", "Nitrogen", "14.0067", 15, 2],
    ["O", "Oxygen", "15.9994", 16, 2],
    ["F", "Fluorine", "18.9984032", 17, 2],
    ["Ne", "Neon", "20.1797", 18, 2],
    ["Na", "Sodium", "22.98976...", 1, 3],
    ["Mg", "Magnesium", "24.305", 2, 3],
    ["Al", "Aluminium", "26.9815386", 13, 3],
    ["Si", "Silicon", "28.0855", 14, 3],
    ["P", "Phosphorus", "30.973762", 15, 3],
    ["S", "Sulfur", "32.065", 16, 3],
    ["Cl", "Chlorine", "35.453", 17, 3],
    ["Ar", "Argon", "39.948", 18, 3],
    ["K", "Potassium", "39.948", 1, 4],
    ["K", "Potassium", "39.948", 1, 4],
    ["Na", "Sodium", "22.98976...", 1, 3],
    ["Mg", "Magnesium", "24.305", 2, 3],
    ["Al", "Aluminium", "26.9815386", 13, 3],
    ["Si", "Silicon", "28.0855", 14, 3],
    ["P", "Phosphorus", "30.973762", 15, 3],
    ["S", "Sulfur", "32.065", 16, 3],
    ["Cl", "Chlorine", "35.453", 17, 3],
    ["Ar", "Argon", "39.948", 18, 3],
    ["K", "Potassium", "39.948", 1, 4],
    ["K", "Potassium", "39.948", 1, 4],

    ["H", "Hydrogen", "1.00794", 1, 1],
    ["He", "Helium", "4.002602", 18, 1],
    ["Li", "Lithium", "6.941", 1, 2],
    ["Be", "Beryllium", "9.012182", 2, 2],
    ["B", "Boron", "10.811", 13, 2],
    ["C", "Carbon", "12.0107", 14, 2],
    ["N", "Nitrogen", "14.0067", 15, 2],
    ["O", "Oxygen", "15.9994", 16, 2],
    ["F", "Fluorine", "18.9984032", 17, 2],
    ["Ne", "Neon", "20.1797", 18, 2],
    ["Na", "Sodium", "22.98976...", 1, 3],
    ["Mg", "Magnesium", "24.305", 2, 3],
    ["Al", "Aluminium", "26.9815386", 13, 3],
    ["Si", "Silicon", "28.0855", 14, 3],
    ["P", "Phosphorus", "30.973762", 15, 3],
    ["S", "Sulfur", "32.065", 16, 3],
    ["Cl", "Chlorine", "35.453", 17, 3],
    ["Ar", "Argon", "39.948", 18, 3],
    ["K", "Potassium", "39.948", 1, 4],
    ["K", "Potassium", "39.948", 1, 4],
    ["Na", "Sodium", "22.98976...", 1, 3],
    ["Mg", "Magnesium", "24.305", 2, 3],
    ["Al", "Aluminium", "26.9815386", 13, 3],
    ["Si", "Silicon", "28.0855", 14, 3],
    ["P", "Phosphorus", "30.973762", 15, 3],
    ["S", "Sulfur", "32.065", 16, 3],
    ["Cl", "Chlorine", "35.453", 17, 3],
    ["Ar", "Argon", "39.948", 18, 3],
    ["K", "Potassium", "39.948", 1, 4],
    ["K", "Potassium", "39.948", 1, 4],

    ["H", "Hydrogen", "1.00794", 1, 1],
    ["He", "Helium", "4.002602", 18, 1],
    ["Li", "Lithium", "6.941", 1, 2],
    ["Be", "Beryllium", "9.012182", 2, 2],
    ["B", "Boron", "10.811", 13, 2],
    ["C", "Carbon", "12.0107", 14, 2],
    ["N", "Nitrogen", "14.0067", 15, 2],
    ["O", "Oxygen", "15.9994", 16, 2],
    ["F", "Fluorine", "18.9984032", 17, 2],
    ["Ne", "Neon", "20.1797", 18, 2],
    ["Na", "Sodium", "22.98976...", 1, 3],
    ["Mg", "Magnesium", "24.305", 2, 3],
    ["Al", "Aluminium", "26.9815386", 13, 3],
    ["Si", "Silicon", "28.0855", 14, 3],
    ["P", "Phosphorus", "30.973762", 15, 3],
    ["S", "Sulfur", "32.065", 16, 3],
    ["Cl", "Chlorine", "35.453", 17, 3],
    ["Ar", "Argon", "39.948", 18, 3],
    ["K", "Potassium", "39.948", 1, 4],
    ["K", "Potassium", "39.948", 1, 4],
    ["Na", "Sodium", "22.98976...", 1, 3],
    ["Mg", "Magnesium", "24.305", 2, 3],
    ["Al", "Aluminium", "26.9815386", 13, 3],
    ["Si", "Silicon", "28.0855", 14, 3],
    ["P", "Phosphorus", "30.973762", 15, 3],
    ["S", "Sulfur", "32.065", 16, 3],
    ["Cl", "Chlorine", "35.453", 17, 3],
    ["Ar", "Argon", "39.948", 18, 3],
    ["K", "Potassium", "39.948", 1, 4],
    ["K", "Potassium", "39.948", 1, 4],

];

var camera;

// WebGL variables
var sceneGL;
var rendererGL;
var m_intersectMapObjectNum = 0;
var m_intersectMapObjectID = 0;
var m_intersectMapObjectName = -1;

// CSS variables
var sceneCSS;
var rendererCSS;

var dirLight;
var plane;
var g_mapObjects;
var g_mapSG;
var mouse;
var raycaster;
var g_time = 0;

var m_cssObjects = [];
var targets = { table: [], sphere: [], helix: [], grid: [] };

var effect;

// ===================================================================================================
// Main function
// ===================================================================================================
Init();
Animate();


// ===================================================================================================  
function Init() 
{  
	// Create the sceneGL
    sceneGL = new THREE.Scene();
	sceneCSS = new THREE.Scene();
	
	// Add the camera
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 50000);
    camera.position.set(0 * g_mapScaleFactor, 0 * g_mapScaleFactor, 4 * g_mapScaleFactor);
	
	// Create the WebGL Renderer
	rendererGL = new THREE.WebGLRenderer();
	//rendererGL.domElement.style.position = 'absolute';
	rendererGL.domElement.style.top = 0;
    rendererGL.setSize( window.innerWidth, window.innerHeight );
	
	// Create the CSS3D Renderer
	rendererCSS = new THREE.CSS3DRenderer();
	rendererCSS.setSize( window.innerWidth, window.innerHeight );
	rendererCSS.domElement.style.position = 'absolute';
	rendererCSS.domElement.style.top = 0;
	
    // Append the renderer to the document body
	//rendererGL.domElement.appendChild(rendererCSS.domElement);
	document.body.appendChild(rendererGL.domElement);
	document.body.appendChild(rendererCSS.domElement);
	
	// Add lights
	AddLights();
	
	// Add sceneGL elements
    AddsceneGLElements();
	AddsceneCSSElements();
	  
	// Add axes
	axes = buildAxes( 1000 );
	sceneGL.add( axes );
	
	// Variables for picking things inside the virtual environment
	raycaster = new THREE.Raycaster();
	mouse = new THREE.Vector2();
	
	// User interaction
	window.addEventListener('mousemove', onMouseMove, false);
	window.addEventListener('mousedown', onMouseDown, false);
	window.addEventListener( 'resize', onWindowResize, false );

    // Add the orbit controls
	if (USE_MOUSE)
	{
	    controls = new THREE.OrbitControls(camera);
	    //controls = new THREE.TrackballControls( camera );
	    controls.target = new THREE.Vector3(0 * g_mapScaleFactor, 0 * g_mapScaleFactor, 0 * g_mapScaleFactor);
	    controls.zoomSpeed = 0.3;
        
	}

    
	if (USE_VR)
	{
	    // Apply VR headset positional data to camera.
	    controls = new THREE.VRControls(camera);

	    // Apply VR stereo rendering to renderer    
	    effect = new THREE.VREffect(rendererGL);
	    effect.setSize(window.innerWidth, window.innerHeight);
	}	

    
	//
    //// Event handling for button interactions
	//var button = document.getElementById( 'table' );
	//button.addEventListener( 'click', function ( event )
	//{
     //
	//}, false );
    //
	//var button = document.getElementById( 'sphere' );
	//button.addEventListener( 'click', function ( event )
	//{
    //
	//}, false );
    //
	//var button = document.getElementById( 'helix' );
	//button.addEventListener( 'click', function ( event )
	//{
	//
	//}, false );
    //
    //
	//var button = document.getElementById( 'grid' );
	//button.addEventListener( 'click', function ( event )
	//{
	//
	//}, false);
}


// ===================================================================================================  
function onMouseMove( event ) 
{
	mouse.x = 2 * (event.clientX / window.innerWidth) - 1;
	mouse.y = 1 - 2 * ( event.clientY / window.innerHeight );
}

// =================================================================================================== 
function onMouseDown( event )
{
    if (m_intersectMapObjectNum > 0)
    {
        g_mapObjects.children.forEach(function (object) {
            if ((object.id + 1) == m_intersectMapObjectID) {
                m_intersectMapObjectName = object.Name;
                //window.alert(m_intersectMapObjectName);
                //console.log(m_intersectMapObjectName);

                //Roy stuff here
                var popBox = document.getElementById("populationDisplay");
                popBox.innerHTML = populationArray[m_intersectMapObjectName ]["district"] + "<br>" +populationArray[m_intersectMapObjectName ]["population"] + " people" ;
                window.alert(populationArray[m_intersectMapObjectName ]["district"]);
            }
        });
    }
    else
    {
        //console.log("No region selected!");
    }
}

// ===================================================================================================  
function buildAxes( length ) {
	var axes = new THREE.Object3D();

	axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( length, 0, 0 ), 0xFF0000, false ) ); // +X
	axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( -length, 0, 0 ), 0xFF0000, true) ); // -X
	axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, length, 0 ), 0x00FF00, false ) ); // +Y
	axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, -length, 0 ), 0x00FF00, true ) ); // -Y
	axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, length ), 0x0000FF, false ) ); // +Z
	axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, -length ), 0x0000FF, true ) ); // -Z

	return axes;

}

// ===================================================================================================  
function buildAxis( src, dst, colorHex, dashed ) 
{
	var geom = new THREE.Geometry(),
		mat; 

	if(dashed) 
	{
		mat = new THREE.LineDashedMaterial({ linewidth: 3, color: colorHex, dashSize: 3, gapSize: 3 });
	} 
	else 
	{
		mat = new THREE.LineBasicMaterial({ linewidth: 3, color: colorHex });
	}

	geom.vertices.push( src.clone() );
	geom.vertices.push( dst.clone() );
	geom.computeLineDistances();

	var axis = new THREE.Line( geom, mat, THREE.LinePieces );

	return axis;
}

// ===================================================================================================  
function AddLights()
{
	var ambLight = new THREE.AmbientLight(0x404040);
	sceneGL.add(ambLight);
	
	dirLight = new THREE.DirectionalLight(0xffffff, 1);
	dirLight.position.set(0, 0, 10);
	sceneGL.add(dirLight);
}


// ===================================================================================================    
function Animate() 
{
    // Rotate the comment m_cssObjects about the center
    RotateCommentObjects();

    // Check for comment object rendering
    CheckCommentObjectTransparency();

    // Update the orientation of the Singapore map so that it is always facing the camera
    AdjustMapPosRot();

    // Perform ray intersection to determine which obj object the mouse is point to
    SelectMapObject()

    // Perform the WebGL and CSS rendering
    render();

    requestAnimationFrame(Animate);
    controls.update();
}

// ===================================================================================================
function CheckCommentObjectTransparency()
{
    // Get the orientation of the camera
    t_camRotation = camera.rotation;
    var x = t_camRotation.x;
    var y = t_camRotation.y;
    var z = t_camRotation.z;
    var t_zaxis = new THREE.Vector3();
    t_zaxis.x = Math.sin(y);
    t_zaxis.y = -Math.cos(y) * Math.sin(x);
    t_zaxis.z = Math.cos(x) * Math.cos(y);

    // Get camera position
    t_camPosition = camera.position;
    var t_camtoIslandDistance = t_camPosition.dot(t_zaxis);

    // Iterate through the different CSS objects (comments) and adjust their position around globe
    for (var i = 0; i < m_cssObjects.length; i++)
    {
        var t_object = m_cssObjects[i];

        // Check whether the object is behind any of the WebGL objects
        var t_render = true;
        g_mapSG.children.forEach(function (object)
        {
            object.traverse(function (child)
            {
                if (child instanceof THREE.Mesh)
                {
                    // Get the vector from camera to object
                    var t_cameraToObject = new THREE.Vector3();
                    t_cameraToObject.subVectors(t_object.position, t_camPosition);

                    // Get the projection length along the z-axis of the camera
                    var t_projectLength = t_cameraToObject.dot(t_zaxis) * -1;

                    if ((t_projectLength - (t_camtoIslandDistance) > 0))
                    {

                        // Calculate the ratio
                        var t_ratio = (t_camtoIslandDistance) / t_projectLength;

                        // Scale the distance from camera to object
                        var t_cameraToObjectScaled = t_cameraToObject;                        
                        t_cameraToObjectScaled.multiplyScalar(t_ratio);

                        // Get the point from camera to the island plane
                        var t_islandPlanePoint = new THREE.Vector3();
                        t_islandPlanePoint.addVectors(t_camPosition, t_cameraToObjectScaled);

                        // Get the bounding box
                        var bbox = new THREE.Box3().setFromObject(child);
                        bbox.expandByScalar(2.0);
                        var intersectFlag = bbox.containsPoint(t_islandPlanePoint);

                        if (intersectFlag == true)
                        {
                            t_render = false;
                        }
                    }

                }
            });
        });



        if (t_render == false) {
            t_object.element.style.backgroundColor = 'rgba(255,255,255,' + (0.0) + ')';
        }
        else {
            t_object.element.style.backgroundColor = 'rgba(255,255,255,' + (CSS_ALPHA) + ')';
        }

    }
}

// ===================================================================================================
function RotateCommentObjects()
{
    g_time = g_time + 0.001;
   
 
    var m_layerTableSize = [30, 30, 30, 30, 30];
    var m_sizeLeft = [30, 30, 30, 30, 30];
    var m_layerNum = 0;

    // Iterate through the different CSS objects (comments) and adjust their position around globe
    var phi;

    for (var i = 0; i < m_cssObjects.length; i++)
    {
        var m_sizeTotal = m_layerTableSize[m_layerNum];
        m_sizeLeft[m_layerNum] = m_sizeLeft[m_layerNum] - 1;

        if (m_sizeLeft[m_layerNum] < 0)
        {
            m_layerNum = m_layerNum + 1;
        }

        phi = i  * (Math.PI * 2 / m_sizeTotal);

        var t_object = m_cssObjects[i];
        var t_dir = 0;

        if (Math.abs(m_layerNum) % 2 == 1)
        {
            t_dir = 1;
        }
        else
        {
            t_dir = -1;
        }

        if (m_layerNum <= 2)
        {
            t_object.position.x = (3000 - m_layerNum * 300) * Math.sin(2 * Math.PI * g_time * t_dir + phi);
            t_object.position.y = 1000 + m_layerNum * 400;
            t_object.position.z = (3000 - m_layerNum * 300) * Math.cos(2 * Math.PI * g_time * t_dir + phi);
        }
        else
        {
            t_object.position.x = (3000 - (m_layerNum - 2) * 300) * Math.sin(2 * Math.PI * g_time * t_dir + phi);
            t_object.position.y = 1000 - (m_layerNum-2) * 400;
            t_object.position.z = (3000 - (m_layerNum - 2) * 300) * Math.cos(2 * Math.PI * g_time * t_dir + phi);
        }
    }
    

    /*
    // Iterate through the different CSS objects (comments) and adjust their position around globe
    var phi;
    var vector = new THREE.Vector3();
    var speedup = 20;
    for (var i = 0; i < m_cssObjects.length; i++)
    {
        phi = (i + 1) * 0.3 + Math.PI + (g_time - 0.2) * speedup;

        var t_object = m_cssObjects[i];
        
        t_object.position.x = 4000 * Math.sin(phi);
        t_object.position.y = 1000;
        t_object.position.z = 4000 * Math.cos(phi);
    }
    */

    /*
    var phi;
    var vector = new THREE.Vector3();
    var speedup = 20;

    for (var i = 0; i < m_cssObjects.length; i += 1)
    {
        phi = (i + 1) * 0.3 + Math.PI + (g_time - 0.2) * speedup;
        m_cssObjects[i].position.x = 4000 * Math.sin(phi);
        m_cssObjects[i].position.z = 4000 * Math.cos(phi);

        vector.x = m_cssObjects[i].position.x * 2;
        vector.y = m_cssObjects[i].position.y;
        vector.z = m_cssObjects[i].position.z * 2;

        m_cssObjects[i].lookAt(vector);
    }
    */

    
}

// ===================================================================================================  
function AdjustMapPosRot()
{
    // Get the orientation of the camera
    t_camRotation = camera.rotation;    

    g_mapObjects.children.forEach(function (object)
    {
        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                // apply custom material
                child.rotation.set(t_camRotation.x, t_camRotation.y, t_camRotation.z);             
            }
        });
    });

    g_mapSG.children.forEach(function (object) {
        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                // apply custom material
                child.rotation.set(t_camRotation.x, t_camRotation.y, t_camRotation.z);
            }
        });
    });

    //axes.rotation.set(t_camRotation.x, t_camRotation.y, t_camRotation.z);

    // Adjust the light source
    var x = t_camRotation.x;
    var y = t_camRotation.y;
    var z = t_camRotation.z;
    var t_zaxis_x = Math.sin(y);
    var t_zaxis_y = -Math.cos(y) * Math.sin(x);
    var t_zaxis_z = Math.cos(x) * Math.cos(y);
    dirLight.position.set(t_zaxis_x * 10 * g_mapScaleFactor, t_zaxis_y * 10 * g_mapScaleFactor, t_zaxis_z * 10 * g_mapScaleFactor);
    
}

// ===================================================================================================  
function SelectMapObject()
{
    // update the picking ray with the camera and mouse position	
    raycaster.setFromCamera(mouse, camera);

    // calculate m_cssObjects intersecting the picking ray
    var intersects = raycaster.intersectObjects(g_mapObjects.children, true);

    m_intersectMapObjectNum = intersects.length;
    if (intersects.length > 0)
    {
        var intersection = intersects[0],
	    obj = intersection.object;

        m_intersectMapObjectID = obj.id;
    }

    // Set each of the map children color to red
    g_mapObjects.children.forEach(function (object)
    {
        var material3 = new THREE.MeshLambertMaterial();
        material3.color.setRGB(1, 0, 0);

        object.traverse(function (child)
        {
            if (child instanceof THREE.Mesh)
            {
                // apply custom material
                child.material.color.setRGB(1, 0, 0);

                // enable casting shadows
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
    })
    ;

    for (var i = 0; i < intersects.length; i++)
    {
        var intersection = intersects[i],
			obj = intersection.object;

        obj.traverse(function (child)
        {
            if (child instanceof THREE.Mesh)
            {
                // apply custom material
                child.material.color.setRGB(0, 1, 0);

                // enable casting shadows
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
    }
}
  
// ===================================================================================================
function render() 
{
    if (USE_MOUSE)
    {
        rendererGL.render(sceneGL, camera);	
        rendererCSS.render(sceneCSS, camera);
    }

    if (USE_VR)
    {
        effect.render(sceneGL, camera);
        rendererCSS.render(sceneCSS, camera);
    }
    
    

}

  
// ===================================================================================================
function onWindowResize() 
{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    rendererGL.setSize( window.innerWidth, window.innerHeight );
    render();
}

// ===================================================================================================
function AddLights()
{
	var ambLight = new THREE.AmbientLight(0x404040);
	sceneGL.add(ambLight);
	
	dirLight = new THREE.DirectionalLight(0xffffff, 1);
	dirLight.position.set(0, 0, 10);
	sceneGL.add(dirLight);
}

// ===================================================================================================
function AddsceneCSSElements()
{
	for ( var i = 0; i < table.length; i ++ ) 
	{

		var item = table[ i ];

		var element = document.createElement( 'div' );
		element.className = 'element';
		element.style.backgroundColor = 'rgba(255,255,255,' + (CSS_ALPHA) + ')';
		element.style.width = "200px";
		element.style.height = "200px";

		var number = document.createElement( 'div' );
		number.className = 'number';
		number.textContent = i + 1;
		element.appendChild( number );

		var symbol = document.createElement( 'div' );
		symbol.className = 'symbol';
		symbol.textContent = item[ 0 ];
		element.appendChild( symbol );

		var details = document.createElement( 'div' );
		details.className = 'details';
		details.innerHTML = item[ 1 ] + '<br>' + item[ 2 ];
		element.appendChild( details );

		var object = new THREE.CSS3DObject( element );
		object.position.x = 0;
		object.position.y = 0;
		object.position.z = -100;
		sceneCSS.add( object );

		m_cssObjects.push(object);

		element.parent = object;
		object.element.onclick = function () { GetCSSElementInfo(this); };
	}
}

// ===================================================================================================
function GetCSSElementInfo(element)
{
    console.log(element.children[2].innerHTML);
    element.style.border = '30px solid rgba(255,255,255,1.0)';
}

// ===================================================================================================
function AddsceneGLElements()
{
    g_mapSG = new THREE.Object3D();
    sceneGL.add(g_mapSG);

	g_mapObjects = new THREE.Object3D();
	sceneGL.add( g_mapObjects );

    
	LoadOBJFiles('obj/SG_AngMoKio.obj', g_mapObjects, 0);    
	LoadOBJFiles('obj/SG_Bedok.obj', g_mapObjects,1);
	LoadOBJFiles('obj/SG_Bishan.obj', g_mapObjects, 2);
	LoadOBJFiles('obj/SG_BoonLay.obj', g_mapObjects, 3);
	LoadOBJFiles('obj/SG_BukitBatok.obj', g_mapObjects, 4);
	LoadOBJFiles('obj/SG_BukitMerah.obj', g_mapObjects, 5);
	LoadOBJFiles('obj/SG_BukitPanjang.obj', g_mapObjects, 6);
	LoadOBJFiles('obj/SG_BukitTimah.obj', g_mapObjects, 7);
	LoadOBJFiles('obj/SG_CCK.obj', g_mapObjects, 8);
	LoadOBJFiles('obj/SG_CentralCatchmentArea.obj', g_mapObjects, 9);
	LoadOBJFiles('obj/SG_CentralRegion.obj', g_mapObjects, 10);
	LoadOBJFiles('obj/SG_Changi.obj', g_mapObjects, 11);
	LoadOBJFiles('obj/SG_Clementi.obj', g_mapObjects, 12);
	LoadOBJFiles('obj/SG_Geylang.obj', g_mapObjects, 13);
	LoadOBJFiles('obj/SG_Hougang.obj', g_mapObjects, 14);
	LoadOBJFiles('obj/SG_JurongEast.obj', g_mapObjects, 15);
	LoadOBJFiles('obj/SG_JurongIsland.obj', g_mapObjects, 16);
	LoadOBJFiles('obj/SG_JurongWest.obj', g_mapObjects, 17);
	LoadOBJFiles('obj/SG_Kallang.obj', g_mapObjects, 18);
	LoadOBJFiles('obj/SG_LimChuKang.obj', g_mapObjects, 19);
	LoadOBJFiles('obj/SG_Mandai.obj', g_mapObjects, 20);
	LoadOBJFiles('obj/SG_MarineParade.obj', g_mapObjects, 21);
	LoadOBJFiles('obj/SG_Novena.obj', g_mapObjects, 22);
	LoadOBJFiles('obj/SG_PasirRis.obj', g_mapObjects, 23);
	LoadOBJFiles('obj/SG_PeyaLebar.obj', g_mapObjects, 24);
	LoadOBJFiles('obj/SG_Pioneer.obj', g_mapObjects, 25);
	LoadOBJFiles('obj/SG_Punggol.obj', g_mapObjects, 26);
	LoadOBJFiles('obj/SG_QueensTown.obj', g_mapObjects, 27);
	LoadOBJFiles('obj/SG_Seletar.obj', g_mapObjects, 28);
	LoadOBJFiles('obj/SG_Sembawang.obj', g_mapObjects, 29);
	LoadOBJFiles('obj/SG_Sengkang.obj', g_mapObjects, 30);
	LoadOBJFiles('obj/SG_Sentosa.obj', g_mapObjects, 31);
	LoadOBJFiles('obj/SG_Serangoon.obj', g_mapObjects, 32);
	LoadOBJFiles('obj/SG_Simpang.obj', g_mapObjects, 33);
	LoadOBJFiles('obj/SG_SungeiKaduh.obj', g_mapObjects, 34);
	LoadOBJFiles('obj/SG_Tampines.obj', g_mapObjects, 35);
	LoadOBJFiles('obj/SG_Tanglin.obj', g_mapObjects, 36);
	LoadOBJFiles('obj/SG_Tengah.obj', g_mapObjects, 37);
	LoadOBJFiles('obj/SG_ToaPayoh.obj', g_mapObjects, 38);
	LoadOBJFiles('obj/SG_Tuas.obj', g_mapObjects, 39);
	LoadOBJFiles('obj/SG_Ubin.obj', g_mapObjects, 40);
	LoadOBJFiles('obj/SG_WestCatchmentArea.obj', g_mapObjects, 41);
	LoadOBJFiles('obj/SG_Woodlands.obj', g_mapObjects, 42);
	LoadOBJFiles('obj/SG_Yishun.obj', g_mapObjects, 43);
    
    
	LoadOBJFilesTransparent('obj/Singapore.obj', g_mapSG, 1);
   
}

// ===================================================================================================
function LoadOBJFiles(a_filename, a_parent, a_name)
{
	// instantiate a loader
	var loader = new THREE.OBJLoader();
	
	// load a resource
	loader.load
	(
		// resource URL
		a_filename,
		// Function when resource is loaded
		function ( object, materials ) 
		{			
			// var material = new THREE.MeshFaceMaterial(materials);
		    var material2 = new THREE.MeshPhongMaterial({ color: 0xa65e00});
            

			object.scale.set(g_mapScaleFactor, g_mapScaleFactor, g_mapScaleFactor);
			object.Name = a_name;
			
			object.traverse( function(child) 
			{
				if (child instanceof THREE.Mesh) 
				{
				    

					// apply custom material
				    child.material = material2;

					// enable casting shadows
					child.castShadow = true;
					child.receiveShadow = true;
				}
			}); 
			
			a_parent.add(object);
		}		
	);	
}

// ===================================================================================================
function LoadOBJFilesTransparent(a_filename, a_parent, a_name) {
    // instantiate a loader
    var loader = new THREE.OBJLoader();

    // load a resource
    loader.load
	(
		// resource URL
		a_filename,
		// Function when resource is loaded
		function (object, materials) {
		    // var material = new THREE.MeshFaceMaterial(materials);
		    var material2 = new THREE.MeshPhongMaterial({ color: 0xa65e00, opacity: 0.0, transparent: true });


		    object.scale.set(g_mapScaleFactor, g_mapScaleFactor, g_mapScaleFactor);
		    object.Name = a_name;

		    object.traverse(function (child) {
		        if (child instanceof THREE.Mesh) {


		            // apply custom material
		            child.material = material2;

		            // enable casting shadows
		            child.castShadow = true;
		            child.receiveShadow = true;
		        }
		    });

		    a_parent.add(object);
		}
	);
}


// ===================================================================================================
function transform( targets, duration ) 
{

	TWEEN.removeAll();

	for ( var i = 0; i < m_cssObjects.length; i ++ ) {

		var object = m_cssObjects[ i ];
		var target = targets[ i ];

		new TWEEN.Tween( object.position )
			.to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
			.easing( TWEEN.Easing.Exponential.InOut )
			.start();

		new TWEEN.Tween( object.rotation )
			.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
			.easing( TWEEN.Easing.Exponential.InOut )
			.start();

	}

	new TWEEN.Tween( this )
		.to( {}, duration * 2 )
		.onUpdate( render )
		.start();

}





