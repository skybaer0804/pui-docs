import { render } from 'preact';
import { ThemeProvider } from '@skybaer0804/pui';
import '@skybaer0804/pui/styles';
import { App } from './app';
import './index.css';

render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
    document.getElementById('root')!
);
