import React from 'react';
import NextLink from 'next/link';

interface Props {
  href: string;
}

const Link: React.FC<Props> = ({ children, href }) => (
  <NextLink href={href}>
    <a>{children}</a>
  </NextLink>
);

export default Link;
