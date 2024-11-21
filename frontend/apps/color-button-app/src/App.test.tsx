import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const COLOR_RED = 'medium-violet-red';
const COLOR_BLUE = 'midnight-blue';

describe('button color', () => {
    it('button starts wit the correct color', () => {
        render(<App />);
        const buttonEl = screen.getByRole('button', { name: /blue/i });
        expect(buttonEl).toHaveClass(COLOR_RED);
    });

    it('button has correct color after click', () => {
        render(<App />);
        const buttonEl = screen.getByRole('button', { name: /blue/i });
        expect(buttonEl).toHaveClass(COLOR_RED);
        fireEvent.click(buttonEl);
        expect(buttonEl).toHaveClass(COLOR_BLUE);
        expect(buttonEl).toHaveTextContent(/red/i);
    });
});

describe('button disabled', () => {
    it('button starts enabled', () => {
        render(<App />);
        const buttonEl = screen.getByRole('button', { name: /blue/i });
        expect(buttonEl).toBeEnabled();
    });

    it('button disabled after checkbox click', () => {
        render(<App />);
        const buttonEl = screen.getByRole('button', { name: /blue/i });
        const checkboxEl = screen.getByRole('checkbox', { name: /disable button/i });
        expect(buttonEl).toBeEnabled();
        expect(checkboxEl).not.toBeChecked();
        fireEvent.click(checkboxEl);
        expect(buttonEl).toBeDisabled();
        expect(checkboxEl).toBeChecked();
    });
});
