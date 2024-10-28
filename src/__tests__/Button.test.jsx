import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../components/buttons/CarreButton';

describe('Button component', () => {
  test('renders correctly with given href and label', () => {
    const testHref = 'https://example.com';
    const testLabel = 'Click me';

    render(<Button href={testHref} label={testLabel} />);

    // Check if the link is in the document and has the correct href attribute
    const linkElement = screen.getByRole('link', { name: testLabel });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', testHref);

    // Check if the link has the correct label text
    expect(linkElement).toHaveTextContent(testLabel);

    // Verify that it has the appropriate class names
    expect(linkElement).toHaveClass('bg-primary');
    expect(linkElement).toHaveClass('text-[#FFFBE6]');
    expect(linkElement).toHaveClass('py-2');
    expect(linkElement).toHaveClass('px-4');
    expect(linkElement).toHaveClass('font-bold');
    expect(linkElement).toHaveClass('hover:bg-secondary');
  });
});
