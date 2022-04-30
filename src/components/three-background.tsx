import React, { Component } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

let root = new THREE.Object3D();
const scene = new THREE.Scene();

const loader = new GLTFLoader();
loader.load(
  'file:C:\\Users\\jinst\\OneDrive\\Desktop\\Curator Tool\\gallery-designer\\src\\models\\model.glb',
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
}
export default ThreeBackground;
