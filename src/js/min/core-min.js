function init(){var e=document.getElementById("stage");e.appendChild(renderer.domElement);var n=new THREE.SphereGeometry(4.5,50,50),o=new THREE.MeshLambertMaterial({map:THREE.ImageUtils.loadTexture("img/textures/earth.jpg")});controls.rotationSpeed=5,controls.rotationDampening=.98,controls.zoom=40,controls.zoomDampening=.6,controls.zoomCutoff=.9,controls.zoomEnabled=!0,controls.rotation._x=0,controls.minZoom=10,controls.maxZoom=10;var r=new THREE.Mesh(n,o),t=new THREE.AmbientLight;scene.add(r),camera.position.z=10,t.color.setRGB(al_red,al_green,al_blue),scene.add(t),r.rotation.x+=.5;var a=function(){requestAnimationFrame(a),rotation_round_x=round2(controls.rotation._x),rotation_round_y=round2(controls.rotation._y),leap_message("[VELOCITY] x = "+round2(controls.angularVelocity.x)+" y = "+round2(controls.angularVelocity.y)+" z = "+round2(controls.angularVelocity.z),1),leap_message("[ROTATION] x = "+round2(controls.rotation._x)+" y = "+round2(controls.rotation._y)+" z = "+round2(controls.rotation._z),2),leap_message("[   DEPTH] = "+round2(controller.lastFrame.data),3),leap_message("[ GESTURE] "+controller.lastValidFrame.hands[0],4),r.rotation.y+=4e-4};a(),controller.connect(),console.log(controller),window.addEventListener("resize",onWindowResize,!1),window.setInterval(function(){console.log("[TICK]")},5e3)}function animate(){controls.update(),renderer.render(scene,camera),requestAnimationFrame(animate)}function onWindowResize(){camera.aspect=window.innerWidth/window.innerHeight,camera.updateProjectionMatrix(),renderer.setSize(window.innerWidth,window.innerHeight)}function create_tap_marker(e,n){var o=window.innerWidth;console.log(o);var r=e,t=n/450*100;console.log("Length: "+r+" Height: "+t),$("#sensor").append("<span class='marker' style='bottom: "+t+"%;left: "+r+"px;'>"+marker_count+"</span>"),marker_count++}function leap_message(e,n){$("#screen_console p:nth-child("+n+")").text(e)}function round2(e){return Math.round(100*e)/100}var light_intesity=.5,ambient_light_intensity=1,al_red=1,al_green=1,al_blue=1,scene=new THREE.Scene,camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),renderer=new THREE.WebGLRenderer;renderer.setSize(window.innerWidth,window.innerHeight);var gesture,marker_count=0,cube,controller=new Leap.Controller({enableGestures:!0}),controls=new THREE.LeapTrackballControls(camera,controller),rotation_round_x,rotation_round_y;window.onload=function(){init(),animate()};