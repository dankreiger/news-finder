import React from 'react';
import { string } from 'prop-types';
import { Col, Row } from 'reactstrap';

const ApiAttribution = ({ text, href }) => (
  <Row>
    <Col>
      <p>
        <a href={href}>{text}</a>
      </p>
    </Col>
  </Row>
);

ApiAttribution.propTypes = {
  text: string,
  href: string
};

ApiAttribution.defaultProps = {
  href: '#'
};

export default ApiAttribution;
