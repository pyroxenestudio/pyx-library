import { render, screen } from '@testing-library/react';
import { PyxButton } from '../../../src/styles/reactjs/components/elements/PyxButton';
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

test('Basic PyxButton', async () => {
  render(<PyxButton>Button</PyxButton>);
  expect(screen.getByRole('button')).toHaveTextContent('Button');
});


test('Basic PyxButton variants', async () => {
  render(<PyxButton variant='info'>Button</PyxButton>);

  expect(screen.getByRole('button')).toHaveClass('info-interactive');
});

test('Basic PyxButton variants', async () => {
  render(<PyxButton radius='no'>Button</PyxButton>);

  expect(screen.getByRole('button')).toHaveClass('rounded-none');
});

test('Check accesibility', async () => {
  let {container, rerender} = render(<PyxButton>Button</PyxButton>);

  let result = await axe(container);
  expect(result).toHaveNoViolations();

  rerender(<PyxButton variant='info'>Button</PyxButton>);
  result = await axe(container);
  expect(result).toHaveNoViolations();

});