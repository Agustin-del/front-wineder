import React, { useState } from 'react';
import axios from 'axios';

const UploadImage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [images, setImages] = useState([]);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post('http://localhost:8080/api/products/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Image uploaded successfully:', response.data);
            fetchImages();
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const fetchImages = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/images/all');
            setImages(response.data);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    return (
        <div>
            <h2>Upload Image</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            <h2>Uploaded Images</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {images.map((image) => (
                    <div key={image.id} style={{ margin: '10px' }}>
                        <img
                            src={`data:${image.type};base64,${Buffer.from(image.data).toString('base64')}`}
                            alt={image.name}
                            style={{ width: '100px', height: '100px' }}
                        />
                        <p>{image.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UploadImage;
