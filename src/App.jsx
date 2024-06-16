
import './App.css'
import { CameraUploadFile } from './DocumentUploadFile/CameraUploadFile'
import { DocumentUploadFile } from './DocumentUploadFile/DocumentUploadFile'
import { useState } from 'react';

function App() {
  const [showText, setShowText] = useState(false)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    console.log(file.type)
    if (file && file.type.includes('image/')) {
      alert('Your File is uploaded')
      setShowText(true)

    } else {
      alert('Please select a valid image file.');
    }
  }

  const handleReUploadDocuments = () => {
    setShowText(false)
  }

  return (
    <>
      {!showText ?
        <div>
          <DocumentUploadFile handleFileChange={handleFileChange} />
          <CameraUploadFile handleFileChange={handleFileChange} />
        </div>
        :
        <button onClick={handleReUploadDocuments}>ReUpload</button>
      }
    </>
  )
}

export default App
