import React from 'react';
import {
  Box,
  useRadio,
  UseRadioProps,
  useColorModeValue,
} from '@chakra-ui/react';

const RadioCard = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="lg"
        _checked={{
          bg: useColorModeValue('orange.500', 'orange.900'),
          color: 'white',
          borderColor: useColorModeValue('orange.500', 'orange.900'),
        }}
        _focus={{
          boxShadow: 'none',
        }}
        p={2}>
        {props.children}
      </Box>
    </Box>
  );
};
export default RadioCard;
