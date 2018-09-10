import React from 'react';

import icon from 'assets/images/icon-help-3.svg';
import './Help.scss';

type Size = 'x1' | 'x2' | 'x3';

interface Props {
  link?: string;
  size?: Size;
  className?: string;
  title?: string;
}

const Help = ({ size = 'x1', link, className, title }: Props) => {
  return (
    <a
      href={link}
      className={`Help Help-${size} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
    >
      <img src={icon} alt="help" />
    </a>
  );
};

export default Help;
