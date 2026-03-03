import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/innerHeight,0.1,500);
camera.position.set(0,0,10);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls( camera, renderer.domElement );

// add our renderer to the page     
document.body.appendChild(renderer.domElement);


scene.background = new THREE.Color(0xffff);

const light = new THREE.DirectionalLight(0xffffff, 1);

scene.add(light);

var mouse = new THREE.Vector2();

window.addEventListener('pointerenter', (event) => {

    // Calculates pointer position in normalized device coordinates (-1 to +1)
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    const raycaster = new THREE.Raycaster();
    // In your animate loop or click handler:
    raycaster.setFromCamera(mouse, camera);

    // Intersect with specific objects
    const intersects = raycaster.intersectObjects(scene.children);
    if (intersects.length > 0) 
    {
 
    }
});


window.addEventListener('mousedown', (event) =>{
    console.log("touching");
});

window.addEventListener('mouseup', (event) =>{
    console.log("stop touching");
});


window.addEventListener("resize", () => {
    // Mise à jour du ratio de la caméra
    camera.aspect = window.innerWidth / window.innerHeight;
    // Mise à jour de la matrice de projection
    camera.updateProjectionMatrix();
    // Mise à jour de la taille du renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
});


const timer = new THREE.Timer();

function animate(timestamp) {
  requestAnimationFrame(animate);
  // timestamp is optional
  timer.update(timestamp);
  const delta = timer.getDelta();
  const elapsedTime = timer.getElapsed();



  renderer.render(scene, camera);
}

animate();
