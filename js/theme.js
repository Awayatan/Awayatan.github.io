function randomizeThemeText() {
    var elements = document.querySelectorAll('.dt');
    elements.forEach(function(element) {
      var themeElement = element.querySelector('.theme');
      if (themeElement) {
        var originalText = themeElement.textContent;
        var randomizedText = '';
  
        for (var i = 0; i < originalText.length; i++) {
          var charCode = originalText.charCodeAt(i);
  
          // ランダムな文字コードを生成 (65 〜 90: 'A' 〜 'Z', 97 〜 122: 'a' 〜 'z')
          var randomCharCode = Math.floor(Math.random() * 26) + (charCode >= 97 ? 97 : 65);
          var randomChar = String.fromCharCode(randomCharCode);
  
          randomizedText += randomChar;
        }
  
        themeElement.textContent = randomizedText;
      }
    });
  }
  
  var dtElements = document.querySelectorAll('.dt');
  dtElements.forEach(function(element) {
    element.addEventListener('click', randomizeThemeText);
  });
  