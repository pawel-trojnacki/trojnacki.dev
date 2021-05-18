import React from 'react';
import { GetStaticProps } from 'next';
import { getHomePageStaticProps } from '@/functions/wordpress/getHomepageStaticProps';
import { ProjectInfo } from '@/types/project/projectInfo.interface';
import HomepageHeader from '@/components/organisms/HomepageHeader';
import Grid from '@/components/organisms/Grid';
import Section from '@/components/containers/Section';
import Text from '@/components/common/Text';
import ContactForm from '@/components/organisms/ContactForm';
import Seo from '@/components/common/Seo';

interface Props {
  projects: ProjectInfo[];
}

export const getStaticProps: GetStaticProps = (context) =>
  getHomePageStaticProps(context);

const Home: React.FC<Props> = ({ projects }) => (
  <>
    <Seo />
    <HomepageHeader />
    <Section id="portfolio" title="Selected Projects">
      <Grid projects={projects} />
    </Section>
    <Section id="about" title="About" slim>
      <Text large center>
        I’m focused especially on front-end development, so{` `}
        <strong>HTML</strong>,{` `}
        <strong>CSS</strong>, and <strong>SASS</strong> are my bread and butter.
        I speak fluent <strong>JavaScript</strong> and a bit ineloquent{` `}
        <strong>TypeScript</strong>
        {` `}
        and <strong>PHP</strong>.
      </Text>
      <Text large center>
        <strong>React</strong> is my favorite framework and I’m no stranger to
        {` `}
        <strong>Redux</strong>, testing libraries, or static site generators.
        I’ve been working with <strong>WordPress</strong>
        {` `}
        while freelancing and I’m a huge fan of theme development.
      </Text>
      <Text large center>
        A few of my training projects are created using <strong>Node</strong> as
        a backend, so I have a basic knowledge about <strong>Express</strong>
        {` `}
        and
        {` `}
        <strong>Nest</strong>.
      </Text>
    </Section>
    <Section id="contact" title="Wanna hire me?" slim>
      <ContactForm />
    </Section>
  </>
);

export default Home;
