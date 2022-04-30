import React, { Component } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';

let root = new THREE.Object3D();
const scene = new THREE.Scene();

const loader = new GLTFLoader();
loader.load(
  'file:Users/bryce/Documents/Classwork/Spring 2022/ISE 329/gallery-designer/src/models/model.glb',
  function (glb) {
    console.log(glb);
    root = glb.scene;
    root.scale.set(0.05, 0.05, 0.05);
    root.rotation.set(90, 0, 0);
    scene.add(root);
  },
  // called while loading is progressing
  function (xhr) {
    console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
  },
  // called when loading has errors
  function (error) {
    console.log(`An error happened:${error}`);
  }
);

class ThreeBackground extends Component {
  [x: string]: any;

  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = 1080;
    // ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 4;
    // ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor('#000000');
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(2, 2, 5);
    scene.add(light);
       //BUTTON CONNECTIONS
       var testButton = document.getElementById("left-wall");
       var leftWall = document.getElementById("left-wall")
       var rightWall = document.getElementById("right-wall")
       var middleLeftWall = document.getElementById("middle-wall-left")
       var middleRightWall = document.getElementById("middle-wall-right")
       var littleWall = document.getElementById("little-wall")
       var backWall = document.getElementById("back-wall")
   
       testButton?.addEventListener("click", ()=>{
         console.log("test button pressed");
         this.newArtwork("file:/Users/bryce/Downloads/temp_photo_file.jpg")
       });
   
       leftWall?.addEventListener("click",()=>{
         //TODO: Move camer to wall
       });
   
       rightWall?.addEventListener("click",()=>{
         //TODO: Move camer to wall
         //this.moveCamera(1,0.5,1)
         this.rotateCamera(0,50,0)
       });
   
       middleLeftWall?.addEventListener("click",()=>{
         //TODO: Move camer to wall
       });
   
       middleRightWall?.addEventListener("click",()=>{
         //TODO: Move camer to wall
       });
   
       littleWall?.addEventListener("click",()=>{
         //TODO: Move camer to wall
       });
   
       backWall?.addEventListener("click",()=>{
         //TODO: Move camer to wall
       });
    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }

  };

  stop = () => {
    cancelAnimationFrame(this.frameId);
  };

  animate = () => {
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };

  renderScene = () => {
    this.renderer.render(scene, this.camera);
  };

  render() {
    return (
      <div
        ref={(mount) => {
          this.mount = mount;
        }}
      />
    );
  }
newArtwork(texture: string){
  const loader = new THREE.TextureLoader();
  const geometry = new THREE.BoxGeometry(2,2, 0.1);
  const material = new THREE.MeshBasicMaterial( { map: loader.load(texture) } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
  //add transform controls
  const controls = new TransformControls(this.camera, this.renderer.domElement)
  controls.showZ = false
  controls.setMode("scale")
  controls.attach(cube)
  scene.add(controls)
  }

moveCamera(x: number,y: number,z: number){
  this.camera.position.x = x
  this.camera.position.y = y
  this.camera.position.z = z
}

rotateCamera(x:number, y: number, z:number){
  this.camera.rotation.x = x
  this.camera.rotation.y = y
  this.camera.rotation.z = z
}
}
export default ThreeBackground;
