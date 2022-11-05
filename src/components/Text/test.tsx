import { render, screen } from '@testing-library/react';

import Text from '.';

describe('<Text />', () => {
  const { container } = render(<Text />);

  it('should title be the component name', () => {
    expect(screen.getByRole('heading', { name: /Text/i }));
  });

  it('should snapshot', () => {
    expect(container.firstChild).toMatchSnapshot();
  });
});
