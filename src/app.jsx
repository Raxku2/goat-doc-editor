import { h, Component } from 'preact';
import { Auth, DocEditor, FileOpen, HomePage, Navbar, Settings, Test } from './components';
import { Router } from 'preact-router';
import { UseBackend, useTheme } from './hooks';
import { useEffect } from 'preact/hooks';


const App = () => {
  const { getUserFromLocalStorage } = UseBackend();
  useEffect(() => {
    getUserFromLocalStorage();
    
  }, [])

  useTheme();

  return (
    <div class="bg-(--bg-color) h-dvh text-(--text-color) overflow-hidden   ">
      <Navbar />

      <Router>
        <HomePage path="/" />
        <Settings path="/settings" />
        <FileOpen path="/open" />
        <DocEditor path="/editor" />
        <Auth path='/auth' />
        <Test path="/test" />
      </Router>

    </div>
  );
};

export default App;