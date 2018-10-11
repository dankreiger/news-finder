import styled from 'styled-components';
import { Card, CardImg, CardImgOverlay } from 'reactstrap';

export const StyledCard = styled(Card)`
  position: relative;
  padding-bottom: ${(2 / 3) * 100}%;
  overflow: hidden;
  border: none;
  border-radius: 0;
  background-color: transparent;
  &:hover {
    img {
      transform: scale(1.01);
    }
    .card-img-overlay {
      padding-bottom: 40px;
    }
  }
`;

export const ArticleImage = styled(CardImg)`
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  vertical-align: middle;
  object-fit: cover;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: transform 250ms;
  border-radius: 0;
`;

export const CardOverlayStyled = styled(CardImgOverlay)`
  top: unset;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0, transparent);
  transition: padding-bottom 250ms;
`;
