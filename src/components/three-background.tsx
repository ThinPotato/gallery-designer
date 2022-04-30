import React, { Component } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';

let root = new THREE.Object3D();
const scene = new THREE.Scene();
let artSpawnSpot = [0,0,0,0]

const loader = new GLTFLoader();
let allControls: TransformControls[] = []
let mode = "scale"
loader.load(
  'file:Users/bryce/Documents/Classwork/Spring 2022/ISE 329/gallery-designer/src/models/model.glb',
  function (glb) {
    console.log(glb);
    root = glb.scene;
    root.scale.set(0.3, 0.3, 0.3);
    root.rotation.set(0, 0, 0);
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
    const width = this.mount.clientWidth +300;
    const height = 800;
    // ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.moveCamera(8,1.5,-10.3)
    this.rotateCamera(0,1.6,0)
    // ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor('#000000');
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    var light = new THREE.HemisphereLight(0x404040, 0xFFFFFF, 1);
    scene.add(light);
       //BUTTON CONNECTIONS
       var testButton = document.getElementById("left-wall");
       var leftWall = document.getElementById("left-wall")
       var rightWall = document.getElementById("right-wall")
       var middleLeftWall = document.getElementById("middle-wall-left")
       var middleRightWall = document.getElementById("middle-wall-right")
       var littleWall = document.getElementById("little-wall")
       var backWall = document.getElementById("back-wall")
       var switchTools = document.getElementById("tool-switch")
   
       switchTools?.addEventListener("click", ()=>{
         for (var controller of allControls){
            if (mode == "scale"){
                controller.setMode("translate")
                mode = "translate"
              }
              else{
                controller.setMode("scale")
                mode = "scale"
              }
            }
         console.log("changed tools");
       });
   
       leftWall?.addEventListener("click",()=>{
         //TODO: Move camer to wall
         this.moveCamera(8,1.5,-10.3)
         this.rotateCamera(0,1.6,0)
         artSpawnSpot = [0.1, 1.5, -8, 1.6]
       });
   
       rightWall?.addEventListener("click",()=>{
         //this.moveCamera(9.8,1.5,-8.8)
         //this.rotateCamera(0,-1.6,0)
         this.newArtwork("file:/Users/bryce/Downloads/temp_photo_file.jpg")
       });
   
       middleLeftWall?.addEventListener("click",()=>{
         //TODO: Move camer to wall
         this.moveCamera(4.9,1.5,-8.2)
         this.rotateCamera(0,-1.6,0)
         artSpawnSpot = [9, 1.5, -8, -1.6]
       });
   
       middleRightWall?.addEventListener("click",()=>{
         //TODO: Move camer to wall
         this.moveCamera(12.1,1.5,-8.4)
         this.rotateCamera(0,1.6,0)
       });
   
       littleWall?.addEventListener("click",()=>{
         //TODO: Move camer to wall
         this.moveCamera(0.89,1.5,-9.89)
         this.rotateCamera(0,0,0)
         artSpawnSpot = [2, 1.5, -13.4, 0]
       });
   
       backWall?.addEventListener("click",()=>{
         //TODO: Move camer to wall
         this.moveCamera(6.8,1.5,-10.6)
         this.rotateCamera(0,0,0)
         artSpawnSpot = [5, 1.5, -17.9, 0]
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
  cube.rotateY(artSpawnSpot[3])
  cube.position.set(artSpawnSpot[0], artSpawnSpot[1], artSpawnSpot[2])
  console.log(cube.position)
  scene.add( cube );
  //add transform controls
  let controls = new TransformControls(this.camera, this.renderer.domElement)
  controls.addEventListener( 'change', this.render );
  allControls.push(controls)
  //controls.setMode("translate")
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
