import React from 'react';
import * as ChakraComps from '@chakra-ui/react';
import * as fMotion from 'framer-motion';
import * as REmotion from '@emotion/react';

import * as hi from 'react-icons/hi';

export const demoScope = {
  ...React,
  ...ChakraComps,
  ...fMotion,
  ...REmotion,
  ...hi,
};
