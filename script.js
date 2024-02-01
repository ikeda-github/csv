document.getElementById('question-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const question = document.getElementById('question-input').value;
    
    // ここでサーバーに質問を送信
    fetch('/ask-question', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question: question })
    })
    .then(response => response.json())
    .then(data => {
        // ここで回答を表示
        console.log('Answer:', data.answer);
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('file-upload-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const fileInput = document.getElementById('csv-file-input');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    
    // ここでファイルをサーバーにアップロード
    fetch('/upload-csv', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // ここで処理結果を表示
        console.log('File processed:', data.description);
    })
    .catch(error => console.error('Error:', error));
});
