if (!Detector.webgl) Detector.addGetWebGLMessage();

		var camera, scene, renderer;
		var geometry, amesh;
		var controls;
		var trian = [];
		var spinners = [];
		var bgc = 0x6f6f00;
		var color_cont = 0;

		var raycaster;
		var tween;
		var mouse = new THREE.Vector2(),
			INTERSECTED;
		var projector;
		var radius = 100,
			theta = 0;

//////////////settings/////////
var movementSpeed = 2;
var totalObjects = 5000;
var objectSize = 1;
var sizeRandomness = 1;

/////////////////////////////////
var dirs = [];
var parts = [];

    
    var presionados = [];




var light1, light2, light3, light4;











var cube, sphere, torus, material;
var count = 0, cubeCamera1, cubeCamera2;
			var lon = 0, lat = 0;
			var phi = 0, theta = 0;

			var textureLoader = new THREE.TextureLoader();

			textureLoader.load( 'img/mario3.jpg', function ( texture ) {

				texture.mapping = THREE.UVMapping;

				init( texture );
				animate();

			} );



		function init(texture) {

			camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
			camera.position.z = 500;

			scene = new THREE.Scene();
			scene.background = new THREE.Color(0x6f6f00);

			var light = new THREE.DirectionalLight(0xffffff, 1);
			light.position.set(1, 1, 1).normalize();
			//scene.add(light);



var sphere_l = new THREE.SphereGeometry( 0.5, 16, 8 );



					
					

light1 = new THREE.PointLight( 0xff0040, 2, 50 );
				light1.add( new THREE.Mesh( sphere_l, new THREE.MeshBasicMaterial( { color: 0xff0040 } ) ) );
				scene.add( light1 );

				light2 = new THREE.PointLight( 0x0040ff, 2, 50 );
				light2.add( new THREE.Mesh( sphere_l, new THREE.MeshBasicMaterial( { color: 0x0040ff } ) ) );
				scene.add( light2 );

				light3 = new THREE.PointLight( 0x80ff80, 2, 50 );
				light3.add( new THREE.Mesh( sphere_l, new THREE.MeshBasicMaterial( { color: 0x80ff80 } ) ) );
				scene.add( light3 );

				light4 = new THREE.PointLight( 0xffaa00, 2, 50 );
				light4.add( new THREE.Mesh( sphere_l, new THREE.MeshBasicMaterial( { color: 0xffaa00 } ) ) );
				scene.add( light4 );




//MeshLambertMaterial

var mesh = new THREE.Mesh( new THREE.SphereBufferGeometry( 500, 32, 16 ), new THREE.MeshBasicMaterial( { map: texture } ) );
				mesh.scale.x = -1;
				scene.add( mesh );



				cubeCamera1 = new THREE.CubeCamera( 1, 1000, 256 );
				cubeCamera1.renderTarget.texture.minFilter = THREE.LinearMipMapLinearFilter;
				scene.add( cubeCamera1 );

				cubeCamera2 = new THREE.CubeCamera( 1, 1000, 256 );
				cubeCamera2.renderTarget.texture.minFilter = THREE.LinearMipMapLinearFilter;
				scene.add( cubeCamera2 );
			//

				material = new THREE.MeshBasicMaterial( {
					envMap: cubeCamera2.renderTarget.texture
				} );

				sphere = new THREE.Mesh( new THREE.IcosahedronBufferGeometry( 20, 3 ), material );
				scene.add( sphere );

				cube = new THREE.Mesh( new THREE.BoxBufferGeometry( 20, 20, 20 ), material );
				scene.add( cube );

				torus = new THREE.Mesh( new THREE.TorusKnotBufferGeometry( 10, 5, 100, 25 ), material );
				scene.add( torus );

				//

















			var geometry = new THREE.CylinderGeometry(0, 10, 30, 4, 1);




			material_a = new THREE.MeshNormalMaterial({ shading: THREE.FlatShading }); ////////////////////////


			for (var i = 0; i < notas.length; i++) {

				var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
					color: 0xffcccc,
					wireframe: false
				}));
				mesh.position.x = (Math.random() - 0.5) * 1000;
				mesh.position.y = (Math.random() - 0.5) * 1000;
				mesh.position.z = (Math.random() - 0.5) * 1000;
				
				console.log("position");
				console.log(mesh.position.x);
				console.log(mesh.position.y);
				console.log(mesh.position.z);

				mesh.rotation.x = Math.random() * 2 * Math.PI;
				mesh.rotation.y = Math.random() * 2 * Math.PI;
				mesh.rotation.z = Math.random() * 2 * Math.PI;
				console.log("rotation");
				console.log(mesh.rotation.x);
				console.log(mesh.rotation.y);
				console.log(mesh.rotation.z);

				
				
				//mesh.nota = notas[Math.floor(Math.random() * notas.length)];
				
				// create a canvas element

				var canvas = document.createElement('canvas');
				canvas.width = 256;
				canvas.height = 128;
				var context = canvas.getContext('2d');
				context.font = "20px Arial";
				context.fillStyle = "#ff03a0";
				//context.textAlign = "center";   
				
				//context.fillText("texto " + i, 0, 120);

				// canvas contents will be used for a texture
				var texture = new THREE.Texture(canvas) 
				texture.needsUpdate = true;
			      
			    var material_b = new THREE.MeshBasicMaterial( {map: texture, side:THREE.DoubleSide } );
			    material_b.transparent = true;
			
			    var text = new THREE.Mesh(
			        new THREE.PlaneGeometry(canvas.width, canvas.height),
			        material_b
			      );
			//	text.position.set(0,50,0);
				
				
				mesh.canvas = canvas;
				mesh.context = context;
				mesh.texture = texture;
				mesh.text = text;
				mesh.nota = notas[i];
				mesh.numero = i;

				scene.add( mesh );
				
				
				scene.add( text );
				
				
				
				
	
	
				trian[i] = mesh;


			}
			
			var geo = new THREE.EdgesGeometry( geometry ); // or WireframeGeometry( geometry )

var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 2 } );

var wireframe = new THREE.LineSegments( geo, mat );

scene.add( wireframe );

			geometry = new THREE.CubeGeometry(40, 40, 40);


			mesh = new THREE.Mesh(geometry,  new THREE.MeshPhongMaterial( { color: 0x222222, specular: 0x555555, shininess: 20 }  ));
			
			mesh.position.z = 70;
		//			object.scale.x = object.scale.y = object.scale.z = 0.80;
			scene.add(mesh);


			geometry = new THREE.BoxGeometry(200, 200, 200);

			material_d = new THREE.MeshBasicMaterial({
				color: 0x00ff00,
				wireframe: true
			});
			amesh = new THREE.Mesh(geometry, material_d);
			scene.add(amesh);


	


			var ambient = new THREE.AmbientLight(0x444444);
			scene.add(ambient);

			var directionalLight = new THREE.DirectionalLight(0xffeedd);
			directionalLight.position.set(0, 0, 1).normalize();
			scene.add(directionalLight);


			var objectLoader = new THREE.ObjectLoader();
			/*
						for (var i = 0; i < 5; i++) {


							objectLoader.load("rifle/ksr-29-sniper-rifle.json", function(m) {

								m.scale.set(500, 500, 500);
								m.position.x = (Math.random() - 0.5) * 1000;
								m.position.y = (Math.random() - 0.5) * 1000;
								m.position.z = (Math.random() - 0.5) * 1000;
								//m.updateMatrix();
								//m.matrixAutoUpdate = false;
								scene.add(m);



							});

						}
						var objectLoader = new THREE.OBJLoader();
						objectLoader.load("Toilet.obj", function(obj) {

							obj.scale.set(1, 1, 1);
							scene.add(obj);

						});
			*/



			var mtlLoader = new THREE.MTLLoader();
			/*
						for (var i = 0; i < 25; i++) {


							mtlLoader.setPath('spinner/');
							mtlLoader.load('uuu.mtl', function(materials) {

								materials.preload();

								var objLoader = new THREE.OBJLoader();
								objLoader.setMaterials(materials);
								objLoader.setPath('spinner/');
								objLoader.load('uuu.obj', function(object) {

									object.scale.set(30, 30, 30);
									object.position.x = (Math.random() - 0.5) * 1000;
									object.position.y = (Math.random() - 0.5) * 1000;
									object.position.z = (Math.random() - 0.5) * 1000;
									//spinners[i] = object;
									scene.add(object);
									spinners.push(object);


								});

							});

						}
			*/
			/*
			for (var i = 0; i < 5; i++) {


				mtlLoader.setPath('s/');
				mtlLoader.load('obj.mtl', function(materials) {

					materials.preload();

					var objLoader = new THREE.OBJLoader();
					objLoader.setMaterials(materials);
					objLoader.setPath('s/');
					objLoader.load('obj.obj', function(object) {

						object.scale.set(30, 30, 30);
						object.position.x = (Math.random() - 0.5) * 1000;
						object.position.y = (Math.random() - 0.5) * 1000;
						object.position.z = (Math.random() - 0.5) * 1000;
						//spinners[i] = object;
						scene.add(object);
						spinners.push(object);


					});

				});

			}

			*/







			raycaster = new THREE.Raycaster();


			renderer = new THREE.WebGLRenderer( { antialias: true });

			renderer.setSize(window.innerWidth, window.innerHeight);


			document.getElementById("three-container").appendChild(renderer.domElement);
			//document.body.appendChild(renderer.domElement);
			controls = new THREE.OrbitControls(camera, renderer.domElement);

			document.addEventListener('mousemove', onDocumentMouseMove, false);

			// initialize object to perform world/screen calculations
			projector = new THREE.Projector();
			document.addEventListener('mousedown', onDocumentMouseDown, false);

			window.addEventListener('resize', onWindowResize, false);

			/*
			camera.lookAt(new THREE.Vector3(-50,0, -200));
			setTimeout(function(){ camera.lookAt(new THREE.Vector3(-150,110, 200)); }, 3000);
			*/
		}



function ExplodeAnimation(x,y,z)
{
  var geometry = new THREE.Geometry();
  
  for (i = 0; i < totalObjects; i ++) 
  { 
    var vertex = new THREE.Vector3();
    vertex.x = x;
    vertex.y = y;
    vertex.z = z;
  
    geometry.vertices.push( vertex );
    dirs.push({x:(Math.random() * movementSpeed)-(movementSpeed/2),y:(Math.random() * movementSpeed)-(movementSpeed/2),z:(Math.random() * movementSpeed)-(movementSpeed/2)});
  }
  var material_p = new THREE.ParticleBasicMaterial( { size: objectSize,  color: 0xFFFFFF });
  var particles = new THREE.ParticleSystem( geometry, material_p );
  
  this.object = particles;
  this.status = true;
  
  this.xDir = (Math.random() * movementSpeed)-(movementSpeed/2);
  this.yDir = (Math.random() * movementSpeed)-(movementSpeed/2);
  this.zDir = (Math.random() * movementSpeed)-(movementSpeed/2);
  
  this.update = function(){
    if (this.status == true){
      var pCount = totalObjects;
      while(pCount--) {
        var particle =  this.object.geometry.vertices[pCount]
        particle.y += dirs[pCount].y;
        particle.x += dirs[pCount].x;
        particle.z += dirs[pCount].z;
      }
      this.object.geometry.verticesNeedUpdate = true;
    }
  }
    scene.add( this.object  ); 

  
}



		function onWindowResize() {

			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();

			renderer.setSize(window.innerWidth, window.innerHeight);

		}


		function remoteClick(numero) {


			// create an array containing all objects in the scene with which the ray intersects
			var intersects = trian;
			// if there is one (or more) intersections
			if (intersects.length > 0) {
				// change the color of the closest face.
				//console.log(intersects);
				//console.log(intersects[0]);
				//console.log(intersects[0].material.color.getHex());
				//console.log(intersects[0].nota);
				play(0, notas[numero], 0.5);

				//	play(0, intersects[0].object.nota, 0.5);


			//	intersects[0].material.color.setHex(16761108);
			
			
			
			
			}

		}

		function onDocumentMouseDown(event) {
			// the following line would stop any other event handler from firing
			// (such as the mouse's TrackballControls)
			event.preventDefault();


			// update the mouse variable
			mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
			mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

			// find intersections


			// create a Ray with origin at the mouse position
			//   and direction into the scene (camera direction)
			var vector = new THREE.Vector3(mouse.x, mouse.y, 1);
			projector.unprojectVector(vector, camera);
			var ray = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());

			// create an array containing all objects in the scene with which the ray intersects
			var intersects = ray.intersectObjects(trian);

			// if there is one (or more) intersections
			if (intersects.length > 0) {
				// change the color of the closest face.

			//	console.log(intersects[0].object.material.color.getHex());
			//	console.log(intersects[0].object.nota);

				
				socket.emit('sendmessage', intersects[0].object.numero);
				



   
				intersects[0].object.material.color.setHex(16761108);
				//intersects[0].material.color.setHex(16761108);
				intersects[0].face.color.setRGB(0.8 * Math.random() + 0.2, 0, 0);
				intersects[0].object.geometry.colorsNeedUpdate = true;





				setTimeout(function(){ 
					intersects[0].object.material.color.setHex(0xffcccc);
				}, 1000);
			}
			














		}

		function onDocumentMouseMove(event) {

			event.preventDefault();
			mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
			mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

		}

		function animate(time) {

			requestAnimationFrame(animate);
			render(time);

		}

		function render(time) {


        var pCount = parts.length;
          while(pCount--) {
            parts[pCount].update();
          }


			for (var i = 0; i < trian.length; i++) {
				trian[i].rotation.y += 0.02;
				trian[i].position.y += Math.sin(Date.now() * 0.0001) * .2;
				

				trian[i].text.position.x = trian[i].position.x + 95;
				trian[i].text.position.y = trian[i].position.y;
				trian[i].text.position.z = trian[i].position.z;
				//trian[i].text.rotation.y += 0.02;
			}





			for (var i = 0; i < spinners.length; i++) {

				spinners[i].rotation.y += 0.2;
				spinners[i].rotation.y += 0.02;

			}

			//color_cont += 0.001;


			scene.background = new THREE.Color(Math.floor(.38 * 16777215));
			//scene.background = new THREE.Color(Math.floor(Math.random()*16777215));

			amesh.rotation.x += 0.01;
			amesh.rotation.y += 0.02;

			
			if(presionados.length > 0){


				for (var index = 0; index < presionados.length; index++ ){
					
					var numero = presionados[index].msg;
					var nombre = presionados[index].nick;
					trian[numero].context.clearRect(0, 0, trian[numero].canvas.width, trian[numero].canvas.height);
					trian[numero].context.fillText(presionados[index].nick, 0, 50);
					trian[numero].texture.needsUpdate = true;
					
					
					trian[numero].material.color.setHex(16761108);

					trian[numero].geometry.colorsNeedUpdate = true;
				
				
				
				
				var lineText;
				var loader = new THREE.FontLoader();
				loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {

					var color = 0xFFFFFF;

					var matDark = new THREE.LineBasicMaterial( {
						color: color,
						side: THREE.DoubleSide
					} );


					
					var shapes = font.generateShapes( nombre, 10, 20 );



					var holeShapes = [];

					for ( var i = 0; i < shapes.length; i ++ ) {

						var shape = shapes[ i ];

						if ( shape.holes && shape.holes.length > 0 ) {

							for ( var j = 0; j < shape.holes.length; j ++ ) {

								var hole = shape.holes[ j ];
								holeShapes.push( hole );

							}

						}

					}

					shapes.push.apply( shapes, holeShapes );

					 lineText = new THREE.Object3D();

					for ( var i = 0; i < shapes.length; i ++ ) {

						var shape = shapes[ i ];

						var lineGeometry = shape.createPointsGeometry();

						lineGeometry.translate( 0, 0, 0 );

						var lineMesh = new THREE.Line( lineGeometry, matDark );
						lineText.add( lineMesh );

					}
					lineText.position.x = trian[numero].position.x;
					lineText.position.y = trian[numero].position.y;
					lineText.position.z = trian[numero].position.z+20;

					scene.add( lineText );

				} ); //end load function
				
				
			
	
					parts.push(new ExplodeAnimation(
						trian[numero].position.x,
						trian[numero].position.y,
						trian[numero].position.z)
						);
				

					setTimeout(function(){ 
						scene.remove( lineText );
						trian[numero].material.color.setHex(0xffcccc);


					 	trian[numero].context.clearRect(0, 0, trian[numero].canvas.width, trian[numero].canvas.height);
					 	trian[numero].context.fillText("", 0, 256);
					 	trian[numero].texture.needsUpdate = true;
					}, 2000);
					
			
				}
				
				
				presionados = [];
				

			}
 
			/*
			raycaster.setFromCamera(mouse, camera);

			var intersects = raycaster.intersectObjects(scene.children);


			if (intersects.length > 0) {
				if (INTERSECTED != intersects[0].object) {

					if (INTERSECTED) INTERSECTED.material.color.setHex(INTERSECTED.currentHex);

					INTERSECTED = intersects[0].object;
					INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
					//INTERSECTED.material.emissive.setHex(0xff0000);

					tween = new TWEEN.Tween(INTERSECTED.material.color)
						.to({ r: 0, g: 25, b: 155 }, 500)
						.easing(TWEEN.Easing.Quartic.In)
						.start();

				}
				else {
					if (tween) tween.update(time);
				}

			}
			else {


				if (INTERSECTED) {
					INTERSECTED.material.color.setHex(INTERSECTED.currentHex);
				}
				INTERSECTED = null;

			}
	*/

			//camera.position.y = Math.sin( Date.now() * 0.0001 ) * 100;
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
		var time = Date.now()* 0.0005;

				lon += .15;

				lat = Math.max( - 85, Math.min( 85, lat ) );
				phi = THREE.Math.degToRad( 90 - lat );
				theta = THREE.Math.degToRad( lon );

				cube.position.x = Math.cos( time * 0.001 ) * 30;
				cube.position.y = Math.sin( time * 0.001 ) * 30;
				cube.position.z = Math.sin( time * 0.001 ) * 30;

				cube.rotation.x += 0.02;
				cube.rotation.y += 0.03;

				torus.position.x = Math.cos( time * 0.001 + 10 ) * 30;
				torus.position.y = Math.sin( time * 0.001 + 10 ) * 30;
				torus.position.z = Math.sin( time * 0.001 + 10 ) * 30;

				torus.rotation.x += 0.02;
				torus.rotation.y += 0.03;

	
				sphere.visible = false;

				// pingpong

				if ( count % 2 === 0 ) {

					material.envMap = cubeCamera1.renderTarget.texture;
					cubeCamera2.updateCubeMap( renderer, scene );

				} else {

					material.envMap = cubeCamera2.renderTarget.texture;
					cubeCamera1.updateCubeMap( renderer, scene );

				}

				count ++;

				sphere.visible = true;	
			
			
			
			
			
			light1.position.x = Math.sin( time * 0.7 ) * 30;
				light1.position.y = Math.cos( time * 0.5 ) * 40;
				light1.position.z = Math.cos( time * 0.3 ) * 30;

				light2.position.x = Math.cos( time * 0.3 ) * 30;
				light2.position.y = Math.sin( time * 0.5 ) * 40;
				light2.position.z = Math.sin( time * 0.7 ) * 30;

				light3.position.x = Math.sin( time * 0.7 ) * 30;
				light3.position.y = Math.cos( time * 0.3 ) * 40;
				light3.position.z = Math.sin( time * 0.5 ) * 30;

				light4.position.x = Math.sin( time * 0.3 ) * 30;
				light4.position.y = Math.cos( time * 0.7 ) * 40;
				light4.position.z = Math.sin( time * 0.5 ) * 30;
			
			
			
			
			
			
			
			
			renderer.render(scene, camera);

		}