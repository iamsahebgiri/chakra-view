import React from 'react';
import { Alert, Stack, Box } from '@chakra-ui/react';

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { demoScope } from '@/components/component-demo/demo-scope';
import { cleanCode } from '@/components/component-demo/clean-code';
import BaseLayout from '@/layouts/base';

const Element = ({ category, section }) => {
  const code = require(`!!raw-loader!pages/preview/alerts/error`).default;
  return (
    <BaseLayout title="Home">
    
      {/* <Box>
      <LiveProvider
        code={cleanCode(code, 'alerts/error')}
        scope={{ ...demoScope }}
      >
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    </Box> */}
    </BaseLayout>
  );
};

Element.getInitialProps = async (ctx) => {
  return { category: ctx.query.category, section: ctx.query.section };
};

export default Element;
