import React from 'react';
import { GetStaticProps } from 'next';
import { getHomePageStaticProps } from '@/functions/wordpress/getHomepageStaticProps';
import { ProjectInfo } from '@/types/project/projectInfo.interface';
import HomepageHeader from '@/components/organisms/HomepageHeader';
import Grid from '@/components/organisms/Grid';
import Section from '@/components/containers/Section';

interface Props {
  projects: ProjectInfo[];
}

export const getStaticProps: GetStaticProps = (context) =>
  getHomePageStaticProps(context);

const Home: React.FC<Props> = ({ projects }) => (
  <div>
    <HomepageHeader />
    <Section id="portfolio" title="Selected Projects">
      <Grid projects={projects} />
    </Section>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
      repellendus molestiae maiores veritatis adipisci atque asperiores
      assumenda, quo, tempore debitis qui voluptatum eaque accusamus hic
      delectus odit eligendi. Esse incidunt at totam officia adipisci quis,
      ipsum pariatur autem fugiat quae consequuntur commodi fugit perspiciatis
      eveniet earum iste quisquam excepturi corporis porro doloribus. Aliquid
      culpa cumque quibusdam eveniet voluptatem magni aspernatur tenetur rerum
      mollitia nisi enim maiores, harum est animi, nobis sed reprehenderit
      doloremque recusandae dolor provident amet, veniam officiis neque non.
      Vitae cum quisquam quos placeat, modi maiores odio sequi doloribus fugiat
      cumque itaque repellat sapiente omnis nam iure eius.
    </p>
    {/* <pre>{JSON.stringify(projects, null, 2)}</pre> */}
  </div>
);

export default Home;
