import React, { useState } from 'react';
import { currentImage } from 'renderer/App';
import './styles.css';

const ArtBar = () => {
	const [selectedFiles, setSelectedFiles] = useState([]);
	const [dummyImage, setDummyImage] = useState('');

	function _arrayBufferToBase64( buffer ) {
		var binary = '';
		var bytes = new Uint8Array( buffer );
		var len = bytes.byteLength;
		for (var i = 0; i < len; i++) {
			binary += String.fromCharCode( bytes[ i ] );
		}
		return window.btoa( binary );
	}

	const handleImageChange = (e) => {
		// console.log(e.target.files[])
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
			// console.log("filesArray: ", filesArray);
			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) // avoid memory leak
			);
		}
	};

	const renderPhotos = (source) => {
		console.log('source: ', source);
		return source.map((photo, index) => {
			return <img src={photo} alt="" key={index} onClick={async (e) => { 
				e.persist(); 
				console.log(e.target.src); 
				let blob = await fetch(e.target.src).then(r => r.blob()).then(blobFile => new File([blobFile], "testFile", { type: "image/png" })); 
				const arrayBuffer = await blob.arrayBuffer();
				const base64String = _arrayBufferToBase64(arrayBuffer);
				console.log(base64String); 
				setDummyImage('data:image/jpeg;base64,' + base64String);
				currentImage = 'data:image/jpeg;base64,' + base64String
			}} />;
		});
	};
	return (
		<div className="ArtBar">
			<div className="heading">Select your Images</div>
			<div>
				<input type="file" id="file" multiple onChange={handleImageChange} />
				<div className="label-holder">
					<label htmlFor="file" className="label">
						<i className="material-icons">photo</i>
					</label>
				</div>
				<div className="result">{renderPhotos(selectedFiles)}</div>
			</div>
			<img src={dummyImage}></img>
		</div>
	);
}
export default ArtBar;
