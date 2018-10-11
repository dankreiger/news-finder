import React from 'react';
import { string } from 'prop-types';

import ProgressiveImage from 'react-progressive-image';
import { CardTitle, CardText } from 'reactstrap';
import { ArticleImage, StyledCard, CardOverlayStyled } from './styles';

const Article = ({ url, urlToImage, title, description, sourceName }) => {
  return (
    <a
      className="d-block h-100"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledCard className="h-100" inverse>
        <ProgressiveImage src={urlToImage} placeholder="./images/blur_img.jpg">
          {(src, loading) => (
            <ArticleImage
              style={{ opacity: loading ? 0.5 : 1 }}
              src={src}
              alt="an image"
            />
          )}
        </ProgressiveImage>

        <CardOverlayStyled>
          <CardTitle>{title}</CardTitle>
          <CardText className="articleDescription">{description}</CardText>
          <CardText>
            <small className="text-muted">{sourceName}</small>
          </CardText>
        </CardOverlayStyled>
      </StyledCard>
    </a>
  );
};

Article.propTypes = {
  url: string,
  urlToImage: string,
  title: string,
  description: string,
  sourceName: string
};

export default Article;
