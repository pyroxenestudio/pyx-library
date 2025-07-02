import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PyxNavbar } from '../../../src/styles/reactjs/components/compound/PyxNavbar';
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

let links;
beforeEach(() => {
  links = [<a href='#'>Link 1</a>, <a href='#'>Link 2</a>, <a href='#'>Link 3</a>];
});

test('Basic PyxNavbar', async () => {
  render(<PyxNavbar logo='LOGO' links={links}/>);
  expect(screen.getByRole('navigation')).toHaveTextContent('Link 1');
  // expect(screen.getByRole('navigation')).toHaveTextContent('LOGO');
});

test('PyxNavbar open and close', async () => {
  const user = userEvent.setup();
  render(<PyxNavbar logo='LOGO' links={links} callback={() => {}}/>);
  const buttonToOpenAndClose = screen.getByRole('button');

  await user.click(buttonToOpenAndClose);
  expect(screen.getByRole('banner')).toHaveClass('open');

  await user.click(buttonToOpenAndClose);
  expect(screen.getByRole('banner')).not.toHaveClass('open');
});


test('PyxNavbar check Links', async () => {
  const user = userEvent.setup();
  render(<PyxNavbar logo='LOGO' links={links} callback={() => {}}/>);
  const buttonToOpenAndClose = screen.getByRole('button');

  await user.click(buttonToOpenAndClose);
  await user.click(screen.getByRole('link', {name: 'Link 1'}));
  expect(screen.getByRole('banner')).not.toHaveClass('open');

});

test('Check Accesibility', async () => {
  const {container} = render(<PyxNavbar logo='LOGO' links={links}/>);
  let result = await axe(container);
  expect(result).toHaveNoViolations();
});