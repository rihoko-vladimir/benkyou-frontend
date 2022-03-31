export const getBase64FromImage = (image, onSuccess, onError) => {
    if (image.type !== "image/png" && image.type !== "image/jpeg") {onError("Incorrect file selected"); return;}
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () =>
        onSuccess(reader.result.replace("data:", "")
            .replace(/^.+,/, ""))
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

export const openSelector = (onFileSelected) => {
    const fileSelector = window.document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute("accept", "image/png, image/jpeg")
    fileSelector.onchange = e => onFileSelected(e.target.files[0])
    fileSelector.click()
    fileSelector.blur()
}

export const displayImage = (file, callback) =>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = ()=>{
        callback(reader.result)
    }
}