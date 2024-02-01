// 質問を送信する処理
document.getElementById('question-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const question = document.getElementById('question-input').value;
    
    fetch('/ask-question', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question: question })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Server responded with an error!');
        }
    })
    .then(data => {
        // ここでユーザーに回答を表示するロジックを追加
        console.log('Answer:', data.answer);
    })
    .catch(error => {
        // ここでユーザーにエラーを通知するロジックを追加
        console.error('Error:', error);
    });
});

// ファイルをアップロードする処理
document.getElementById('file-upload-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const fileInput = document.getElementById('csv-file-input');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    
    fetch('/upload-csv', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Server responded with an error!');
        }
    })
    .then(data => {
        // ここでユーザーに処理結果を表示するロジックを追加
        console.log('File processed:', data.description);
    })
    .catch(error => {
        // ここでユーザーにエラーを通知するロジックを追加
        console.error('Error:', error);
    });
});
