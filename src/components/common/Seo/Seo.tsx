import React from 'react';
import Head from 'next/head';

interface Props {
  title?: string;
  description?: string;
}

const defaultTitle = `Paweł Trojnacki`;
const defaultDescription = `I'm front-end developer specializes in JavaScript, React and WordpPress`;

const Seo: React.FC<Props> = ({ title, description = defaultDescription }) => (
  <Head>
    <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
    <meta name="description" content={description} />
  </Head>
);

export default Seo;
