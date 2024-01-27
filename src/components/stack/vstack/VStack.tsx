import { Flex, FlexProps } from '../flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>

export const VStack = (props: HStackProps) => {
  const { align = 'start' } = props;

  return (<Flex {...props} align={align} direction="column" />);
};
