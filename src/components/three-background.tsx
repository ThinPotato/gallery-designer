import React, { Component } from 'react';
import * as THREE from 'three';
import MiniMap from './mini-map';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';

class ThreeBackground extends Component{
    [x: string]: any;
  componentDidMount(){
    const width = this.mount.clientWidth
    const height = 1080
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
    //ADD CUBE
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: '#433F81'     })
    this.cube = new THREE.Mesh(geometry, material)
    this.scene.add(this.cube)

    var testButton = document.getElementById("left-wall");
    testButton?.addEventListener("click", ()=>{
      console.log("test button pressed");
      //this.camera.position.z = 10
      this.newArtwork()
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
   this.cube.rotation.x += 0.01
   this.cube.rotation.y += 0.01
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
newArtwork(){
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    this.scene.add( cube );
    //add transform controls
    const controls = new TransformControls(this.camera, this.renderer.domElement)
    controls.attach(cube)
    this.scene.add(controls)
  }
}
export default ThreeBackground