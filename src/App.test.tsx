import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the company name', () => {
    render(<App />);
    const elements = screen.getAllByText('Royal Reality Groups');
    expect(elements.length).toBeGreaterThanOrEqual(1);
    expect(elements[0]).toBeInTheDocument();
  });

  it('renders the tagline', () => {
    render(<App />);
    const elements = screen.getAllByText('Key to Your Dream Home');
    expect(elements.length).toBeGreaterThanOrEqual(1);
    expect(elements[0]).toBeInTheDocument();
  });

  it('renders navigation bar', () => {
    render(<App />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('renders the main content area', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders the footer', () => {
    render(<App />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
