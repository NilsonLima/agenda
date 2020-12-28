import React from 'react';
import cn from 'classnames';

import './Text.scss';

const VARIANTS = {
  headline1: { className: 'headline1', tag: 'h1' },
  headline2: { className: 'headline2', tag: 'h2' },
  headline3: { className: 'headline3', tag: 'h3' },
  headline4: { className: 'headline4', tag: 'h4' },
  headline5: { className: 'headline5', tag: 'h5' },
  headline6: { className: 'headline6', tag: 'h6' },
  subtitle1: { className: 'subtitle1', tag: 'span' },
  subtitle2: { className: 'subtitle2', tag: 'span' },
  body1: { className: 'body1', tag: 'p' },
  body2: { className: 'body2', tag: 'p' },
  button: { className: 'button', tag: 'span' },
  overline: { className: 'overline', tag: 'span' },
  caption: { className: 'caption', tag: 'span' },
};

const COLORS = {
  primary: 'primary',
  secondary: 'secondary',
  background: 'background',
  surface: 'surface',
  error: 'error',
};

interface Props {
  variant: keyof typeof VARIANTS;
  color?: keyof typeof COLORS;
  className?: string;
  disabled?: boolean;
}

const Text: React.FC<Props> = ({
  variant, children, color = 'surface', className = '', disabled = false,
}) => {
  const theme = COLORS[color];
  const mute = disabled ? 'disabled' : '';
  const { className: typography, tag } = VARIANTS[variant];
  return React.createElement(tag, { className: cn(typography, theme, mute, className) }, children);
};

export default Text;
