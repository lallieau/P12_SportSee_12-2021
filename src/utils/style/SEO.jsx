import React from 'react';
import {Helmet} from 'react-helmet';

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
