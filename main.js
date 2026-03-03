

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/innerHeight,0.1,500);
camera.position.set(0,0,10);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// add our renderer to the page     
document.body.appendChild(renderer.domElement);


scene.background = new THREE.Color(0xffff);

const light = new THREE.DirectionalLight(0xffffff, 1);

scene.add(light);

let ImpObject; 

// import this on your HTML
window.addEventListener('load', () => {
    ImpObject = document.getElementById('model');

    const camera = document.querySelector('[camera]');
    const marker = document.querySelector('a-marker');
    let check;
});

window.addEventListener('click',(Event) => {
    console.log(ImpObject.object3D3.scale);
})
