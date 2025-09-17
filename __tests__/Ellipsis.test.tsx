import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Ellipsis } from '../src/Ellipsis';

describe('Ellipsis', () => {
  const longText = 'This is a very long text that should be truncated when maxLines is set to a smaller number. It contains multiple sentences and should demonstrate the ellipsis functionality properly.';

  it('renders without crashing', () => {
    render(<Ellipsis>{longText}</Ellipsis>);
    expect(screen.getByText(longText)).toBeInTheDocument();
  });

  it('applies line clamp styles when not expanded', () => {
    const { container } = render(<Ellipsis maxLines={2}>{longText}</Ellipsis>);
    const element = container.firstChild as HTMLElement;
    
    expect(element.style.display).toBe('-webkit-box');
    expect(element.style.webkitLineClamp).toBe('2');
    expect(element.style.webkitBoxOrient).toBe('vertical');
    expect(element.style.overflow).toBe('hidden');
    expect(element.style.textOverflow).toBe('ellipsis');
  });

  it('renders as different HTML elements', () => {
    const { container: divContainer } = render(<Ellipsis as="div">{longText}</Ellipsis>);
    const { container: pContainer } = render(<Ellipsis as="p">{longText}</Ellipsis>);
    const { container: spanContainer } = render(<Ellipsis as="span">{longText}</Ellipsis>);

    expect(divContainer.firstChild?.nodeName).toBe('DIV');
    expect(pContainer.firstChild?.nodeName).toBe('P');
    expect(spanContainer.firstChild?.nodeName).toBe('SPAN');
  });

  it('shows expandable button when expandable prop is true', () => {
    render(<Ellipsis expandable>{longText}</Ellipsis>);
    expect(screen.getByText('Show more')).toBeInTheDocument();
  });

  it('toggles between expanded and collapsed states', () => {
    const { container } = render(<Ellipsis expandable maxLines={2}>{longText}</Ellipsis>);
    const button = screen.getByText('Show more');
    const element = container.firstChild as HTMLElement;

    // Initially collapsed
    expect(element.style.display).toBe('-webkit-box');
    expect(element.style.webkitLineClamp).toBe('2');

    // Click to expand
    fireEvent.click(button);
    expect(screen.getByText('Show less')).toBeInTheDocument();
    expect(element.style.display).toBe('');

    // Click to collapse
    fireEvent.click(screen.getByText('Show less'));
    expect(screen.getByText('Show more')).toBeInTheDocument();
    expect(element.style.display).toBe('-webkit-box');
  });

  it('respects custom maxLines prop', () => {
    const { container } = render(<Ellipsis maxLines={3}>{longText}</Ellipsis>);
    const element = container.firstChild as HTMLElement;
    
    expect(element.style.webkitLineClamp).toBe('3');
  });

  it('merges custom styles with clamp styles', () => {
    const customStyle = { color: 'red', fontSize: '16px' };
    const { container } = render(
      <Ellipsis style={customStyle} maxLines={2}>{longText}</Ellipsis>
    );
    const element = container.firstChild as HTMLElement;
    
    expect(element.style.color).toBe('red');
    expect(element.style.fontSize).toBe('16px');
    expect(element.style.display).toBe('-webkit-box');
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Ellipsis ref={ref}>{longText}</Ellipsis>);
    
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('has correct display name', () => {
    expect(Ellipsis.displayName).toBe('Ellipsis');
  });

  it('passes through other props', () => {
    const { container } = render(
      <Ellipsis data-testid="ellipsis" className="custom-class" id="test-id">
        {longText}
      </Ellipsis>
    );
    const element = container.firstChild as HTMLElement;
    
    expect(element.getAttribute('data-testid')).toBe('ellipsis');
    expect(element.getAttribute('class')).toBe('custom-class');
    expect(element.getAttribute('id')).toBe('test-id');
  });
});
