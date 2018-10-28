import { withLogger } from '@hyperapp/logger';
import { app, h } from 'hyperapp';

const state = {
  count: 0,
};

const actions = {
  log: (value) => (state) => console.warn(value, state),
};

interface ButtonProps {
  title: string;
  disabled?: boolean;
  onClick: (event: MouseEvent) => void;
}

const Button = ({ title, disabled, onClick }: ButtonProps) => (
  <button type="button" disabled={disabled} onclick={onClick}>
    { title }
  </button>
);

const view = (state, actions) => (
  <div>
    <Button title="blaa" onClick={actions.log} />
  </div>
);

withLogger(app)(state, actions, view, document.body);
