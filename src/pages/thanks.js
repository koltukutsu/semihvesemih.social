import React from 'react';
import Layout from '../components/Layout';
import get from 'lodash/get';
import { graphql } from 'gatsby';

class Thanks extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <main>
          <h1>Takip Ettiğiniz İçin Teşekkürler.</h1>
          <p>Şuan onaylandınız. Artık Semihlerden haber alabilirsiniz.</p>
        </main>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query ThanksSiteData {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Thanks;
