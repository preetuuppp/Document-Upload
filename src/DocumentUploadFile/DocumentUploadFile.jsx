import { useRef } from "react";

export const DocumentUploadFile = (props) => {
    const { handleFileChange } = props;

    const fileRef = useRef(null);

    const handleSelectFile = () => {
        console.log('fileRef.current', fileRef.current)
        fileRef.current.click();
    }

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0]
    //     console.log('file', file)
    //     if (file) {
    //         alert('Your File is uploaded')
    //         setShowText(true)
    //     }
    // }

    return (
        <>
            <input
                ref={fileRef}
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                style={{ display: 'none' }}
            />

            <button onClick={handleSelectFile}>Upload Attachment</button>

        </>
    )
}
