@@ -19,15 +19,12 @@ if (theme) {
    // Button Event Handlers
    
    darkButton.onclick = () => {
      body.classList.remove('light');
      body.classList.add('dark');
    
      body.classList.replace('light', 'dark');
      localStorage.setItem('theme', 'dark');
    };
    
    lightButton.onclick = () => {
      body.classList.remove('dark');
      body.classList.add('light');
      body.classList.replace('dark', 'light');
    
      localStorage.setItem('theme', 'light');
    };
    