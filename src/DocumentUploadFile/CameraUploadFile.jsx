import { useRef } from 'react';
import { isMobile } from 'react-device-detect';

export const CameraUploadFile = (props) => {
    const { handleFileChange } = props

    const cameraInputRef = useRef(null);

    const handleSelectFile = () => {
        if (isMobile) {
            cameraInputRef.current.click();
        } else {
            alert('Use your mobile to use this feature')
        }
    }

    return (
        <>
            <input
                accept="image/*,.png, .jpg, .jpeg"
                ref={cameraInputRef}
                type="file"
                capture="environment"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <button onClick={handleSelectFile}>Open Camera</button>
        </>
    )
}
