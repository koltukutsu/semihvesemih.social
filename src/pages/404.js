import React from 'react';
import Layout from '../components/Layout';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <main>
          <h1>Bulunamadı</h1>
          <p>Böyle bir yazı daha yazmadık, yazalım mı?</p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/watch?v=AA4deEZjnBA"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen
          />
          <p>
            It's hard, hard not to sit on your hands And bury your head in the
            sand
          </p>
        </main>
      </Layout>
    );
  }
}

export default NotFoundPage;
