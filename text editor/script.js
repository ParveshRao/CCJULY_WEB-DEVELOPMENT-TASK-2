// Function to save text to local storage
function saveText() {
    const text = document.getElementById('editor').value;
    localStorage.setItem('savedText', text);
    alert('Text saved to local storage!');
  }
  
  // Function to load text from local storage
  function loadText() {
    const savedText = localStorage.getItem('savedText');
    if (savedText !== null) {
      document.getElementById('editor').value = savedText;
      alert('Text loaded from local storage!');
    } else {
      alert('No saved text found in local storage.');
    }
  }
  