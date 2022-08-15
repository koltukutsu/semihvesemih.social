import React from 'react';
import Layout from '../components/Layout';
import get from 'lodash/get';
import { graphql } from 'gatsby';

class Confirm extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <main>
          <h1>Yalnızca birşey daha...</h1>
          <p>
            Talkip ettiğiniz için teşekkürler. Posta kutunuzu üyeliğinizi
            onaylamanız için kontrol etmeniz gerekecek.
          </p>
        </main>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query ConfirmSiteData {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Confirm;
