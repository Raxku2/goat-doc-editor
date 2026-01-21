
import { useState, useEffect } from 'preact/hooks';

export const useTheme = () => {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  const themes = [
    { id: 'light', name: 'Light', emoji: '☀️', color: 'bg-amber-50' },
    { id: 'dark', name: 'Dark', emoji: '🌙', color: 'bg-gray-900' },
    { id: 'pink', name: 'Pink', emoji: '🌸', color: 'bg-pink-100' },
    { id: 'green', name: 'Green', emoji: '🍃', color: 'bg-green-100' },
    { id: 'blue', name: 'Blue', emoji: '🌊', color: 'bg-blue-900' },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme') || 'light';
    setTheme(themes.find(t => t.id === savedTheme) ? savedTheme : 'light');
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);

    // Update mobile theme color
    const colors = {
      light: '#F9F8F6',
      dark: '#222831',
      pink: '#FFC4C4',
      green: '#a4c496',
      blue: '#1B3C53',
    };

    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'theme-color';
      document.head.appendChild(meta);
    }
    meta.content = colors[theme] || colors.light;
  }, [theme, mounted]);

  const setThemeMode = (themeId) => {
    if (themes.some(t => t.id === themeId)) {
      setTheme(themeId);
    }
  };

  return {
    theme,
    themes,
    setTheme: setThemeMode,
    mounted,
    currentTheme: themes.find(t => t.id === theme) || themes[0],
    isDark: theme === 'dark',
    isLight: theme === 'light',
  };
};
