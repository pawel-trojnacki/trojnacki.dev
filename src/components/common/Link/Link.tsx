import React from 'react';
import NextLink from 'next/link';

interface Props {
  href: string;
  className?: string;
}

const Link: React.FC<Props> = ({ children, href, className = `` }) => (
  <NextLink href={href}>
    <a className={className}>{children}</a>
  </NextLink>
);

export default Link;
