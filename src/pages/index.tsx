import React from 'react';
import { GetStaticProps } from 'next';
import { getHomePageStaticProps } from '@/functions/wordpress/getHomepageStaticProps';
import { ProjectInfo } from '@/types/project/projectInfo.interface';
import HomepageHeader from '@/components/organisms/HomepageHeader';

interface Props {
  projects: ProjectInfo[];
}

export const getStaticProps: GetStaticProps = (context) =>
  getHomePageStaticProps(context);

const Home: React.FC<Props> = ({ projects }) => (
  <div>
    <HomepageHeader />
    <div id="portfolio">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut saepe
        obcaecati impedit veritatis, ratione enim hic, amet id quisquam nemo
        facilis! Reprehenderit fugit unde quisquam hic dolorum labore tenetur
        quos optio, tempore provident voluptate ipsum aliquam soluta harum ut
        quam nostrum odio eos praesentium error qui assumenda nam. Quibusdam
        incidunt, vero qui perferendis nemo at adipisci velit vel nulla labore
        earum omnis blanditiis dolorem optio? Aperiam ipsum perferendis eos,
        reiciendis, ex aliquid mollitia rerum magni beatae veniam aut alias ad
        non ducimus sit obcaecati tenetur consequatur numquam quae! Quos est
        aliquam labore eius blanditiis libero maxime debitis. Tempore, nulla!
      </p>
    </div>
    {/* <pre>{JSON.stringify(projects, null, 2)}</pre> */}
  </div>
);

export default Home;
