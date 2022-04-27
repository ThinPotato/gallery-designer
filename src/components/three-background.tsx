import React, { Component } from 'react';
import * as THREE from 'three';
import MiniMap from './mini-map';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';

class ThreeBackground extends Component{
    [x: string]: any;
  componentDidMount(){
    const width = this.mount.clientWidth
    const height = 780
    //ADD SCENE
    this.scene = new THREE.Scene()
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    )
    this.camera.position.z = 4
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setClearColor('#000000')
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)

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
      this.newArtwork("file:/Users/bryce/Downloads/DSCF0125.jpeg")
    });

    leftWall?.addEventListener("click",()=>{
      //TODO: Move camer to wall
    });

    rightWall?.addEventListener("click",()=>{
      //TODO: Move camer to wall
      this.moveCamera(1,0.5,1)
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
this.start()
  }

componentWillUnmount(){
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }
start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }
stop = () => {
    cancelAnimationFrame(this.frameId)
  }
animate = () => {
   this.renderScene()
   this.frameId = window.requestAnimationFrame(this.animate)
 }
renderScene = () => {
  this.renderer.render(this.scene, this.camera)
}
render(){
    return(
      <div
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
newArtwork(texture: string){
  const loader = new THREE.TextureLoader();
  const geometry = new THREE.BoxGeometry(2,2, 0.1);
  const material = new THREE.MeshBasicMaterial( { map: loader.load(texture) } );
  const cube = new THREE.Mesh( geometry, material );
  this.scene.add( cube );
  //add transform controls
  const controls = new TransformControls(this.camera, this.renderer.domElement)
  controls.showZ = false
  controls.setMode("rotate")
  controls.attach(cube)
  this.scene.add(controls)
  }

moveCamera(x: number,y: number,z: number){
  this.camera.position.x = x
  this.camera.position.y = y
  this.camera.position.z = z
}
}
export default ThreeBackground