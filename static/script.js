document.addEventListener('DOMContentLoaded', function() {
    const html = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
  
    function applyDarkMode(isDark) {
      if (isDark) {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
      } else {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
      }
    }
  
    // Initialize
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyDarkMode(savedTheme ? savedTheme === 'dark' : systemDark);
  
    // Toggle handler
    themeToggle.addEventListener('click', () => {
      const isDark = !html.classList.contains('dark');
      applyDarkMode(isDark);
    });
  });