import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Row, Col } from 'reactstrap';
import Article from './../Article/Article';

// functional (stateless) component
const Articles = ({ articles }) => (
  <Row noGutters>
    {articles.map((article, i) => (
      <Col key={i} xs="12" md="6" className="h-100">
        <Article
          url={article.url}
          urlToImage={article.urlToImage}
          title={article.title}
          description={article.description}
          sourceName={article.source.name}
        />
      </Col>
    ))}
  </Row>
);

Articles.propTypes = {
  articles: arrayOf(
    shape({
      article: arrayOf(
        shape({
          author: string,
          content: string,
          description: string,
          publishedAt: string,
          source: shape({
            id: string,
            name: string
          }),
          url: string,
          urlToImage: string
        })
      )
    })
  ).isRequired
};

export default Articles;
