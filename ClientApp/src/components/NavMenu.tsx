import * as React from 'react';
import { memo, useState } from 'react';
import { Box, Button, Heading, Tabs, Tab, Anchor, RoutedAnchor } from 'grommet';
import { Notification } from 'grommet-icons';

const AppBar = memo((props: any) => 
    <Box 
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ left: 'medium', right: 'small', vertical: 'small'}}
      elevation='medium'
      style={{zIndex: '1'}}
      {...props}
  />);

export const NavMenu = memo(({showSidebar}: {showSidebar: Function}) => {
const [index, setIndex] = useState<number>(-1);

const onActive = (nextIndex: number) => setIndex(nextIndex);

return(
    <AppBar>
        <Heading level='3' margin='none'>My App</Heading>
        <RoutedAnchor margin={{right: '10px'}} path="/1">Tab 1</RoutedAnchor>
        <RoutedAnchor margin={{right: '10px'}} path="/2">Tab 2</RoutedAnchor>
        <RoutedAnchor path="/3">Tab 3</RoutedAnchor>
        <Button icon={<Notification />} onClick={() => showSidebar()}></Button>
    </AppBar>);
});