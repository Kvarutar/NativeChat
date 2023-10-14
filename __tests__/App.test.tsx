import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../static/App';

describe('App Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<App />);
    expect(getByText('Вход')).toBeDefined(); // Проверка, что компонент содержит текст "Вход"
  });
});