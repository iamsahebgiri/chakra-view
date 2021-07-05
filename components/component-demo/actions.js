import {
  Flex,
  IconButton,
  Tooltip,
  Box,
  useClipboard,
  chakra,
} from '@chakra-ui/react';
import { MdRefresh } from 'react-icons/md';
import { BiLinkExternal } from 'react-icons/bi';
import { AiOutlineCodeSandbox } from 'react-icons/ai';
import { IoIosCopy, IoMdCode } from 'react-icons/io';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { VscWindow } from 'react-icons/vsc';

import { editOnlineCds } from './edit-online';
import Confetti from 'react-dom-confetti';
const config = {
  angle: 180,
  spread: 100,
  startVelocity: 40,
  elementCount: 100,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: '10px',
  height: '10px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
};

const ActionButton = (props) => {
  return (
    <Tooltip hasArrow placement="top" label={props.label}>
      <IconButton
        fontSize="xl"
        color={props.color}
        icon={props.icon}
        aria-label={props.label}
        variant="ghost"
        rounded="full"
        onClick={props.onClick}
        _focus={{ boxShadow: 'none' }}
      />
    </Tooltip>
  );
};
export default function CodeActions(props) {
  const { hasCopied, onCopy } = useClipboard(props.code);
  const { hasCopied: hasCopiedOriginal, onCopy: onCopyOriginal } = useClipboard(
    props.preCode
  );

  return (
    <Flex>
      <Box
        as={Confetti}
        active={hasCopied || hasCopiedOriginal}
        config={config}
        zIndex="tooltip"
      />
      <ActionButton
        icon={<IoMdCode />}
        label={`${
          props.codeEditor.isOpen ? 'Hide' : 'Show'
        } Editable Component Code`}
        onClick={() => props.codeEditor.onToggle()}
      />

      {props.isDirty && (
        <Box color={hasCopied && 'green.500'}>
          <ActionButton
            icon={hasCopied ? <IoCheckmarkDoneSharp /> : <VscWindow />}
            onClick={onCopy}
            label={hasCopied ? 'Copied!' : 'Copy Editor Code'}
          />
        </Box>
      )}
      <Box color={hasCopiedOriginal && 'green.500'}>
        <ActionButton
          icon={hasCopiedOriginal ? <IoCheckmarkDoneSharp /> : <IoIosCopy />}
          onClick={onCopyOriginal}
          label={hasCopiedOriginal ? 'Copied!' : 'Copy Original Code'}
        />
      </Box>
      <chakra.a
        target="_blank"
        href={`/preview/${props.path}`}
        aria-label="Open Demo in New Tab"
      >
        <ActionButton icon={<BiLinkExternal />} label="Open Demo in New Tab" />{' '}
      </chakra.a>
      <chakra.a
        target="_blank"
        rel="noreferrer"
        href={editOnlineCds(props.preCode, props.path)}
        aria-label="Open Code in Codesandbox"
      >
        <ActionButton
          icon={<AiOutlineCodeSandbox />}
          label="Open Code in Codesandbox"
        />
      </chakra.a>
      <ActionButton
        icon={<MdRefresh />}
        onClick={props.resetDemo}
        label="Reset Demo Code"
      />
    </Flex>
  );
}
