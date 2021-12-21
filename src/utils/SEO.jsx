import React from 'react';
import {Helmet} from 'react-helmet';
import PropTypes from 'prop-types';

/**
 * Renders a component that handles all changes made to the header of the document.
 * @param {string} title
 * @param {string} description
 * @returns {JSX}
 */
export const SEO = ({title, description}) => {
  return (
    <Helmet
      title={title}
      htmlAttributes={{lang: 'fr'}}
      meta={[
        {
          name: `description`,
          content: description,
        },
      ]}
    />
  );
};

// PropTypes
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
