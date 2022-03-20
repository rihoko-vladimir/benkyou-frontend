const getBase64File = (file, callback, onError) => {
    if (file.type !== "image/png" && file.type !== "image/jpeg") {onError("Incorrect file selected"); return;}
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>
        callback(reader.result.replace("data:", "")
            .replace(/^.+,/, ""))
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

export const getBase64FromUserImage = (onFileSelected, onError) => {
    const fileSelector = window.document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute("accept", "image/png, image/jpeg")
    fileSelector.onchange = e => getBase64File(e.target.files[0], onFileSelected, onError)
    fileSelector.click()
}