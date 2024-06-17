document.getElementById('file').addEventListener('change', function(event) {
    let file = event.target.files[0];
    if (!file) {
        return;
    }

    let fileNameSpan = document.getElementById('file-name');
    fileNameSpan.textContent = file.name;

    let formData = new FormData();
    formData.append('file', file);

    let xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', function(event) {
        if (event.lengthComputable) {
            let percentComplete = (event.loaded / event.total) * 100;
            document.getElementById('progress').value = percentComplete;
            document.getElementById('progress').style.setProperty('--progress', percentComplete + '%');
            document.getElementById('progress-text').innerText = `${percentComplete.toFixed(0)}%`;
        }
    }, false);

    xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            alert('Файл успешно загружен!');
        }
    });

    xhr.open('POST', 'YOUR_UPLOAD_ENDPOINT_HERE', true);
    xhr.send(formData);
});

document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
});
