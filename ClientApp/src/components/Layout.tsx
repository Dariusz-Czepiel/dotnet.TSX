import * as React from 'react';
import { useState } from 'react';
import { Box, Button, Collapsible, Grommet, Layer, ResponsiveContext } from 'grommet';
import { FormClose } from 'grommet-icons';
import { NavMenu } from './NavMenu';

const theme = {
    global: {
      colors:{
        brand: '#228BE6'
      },
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      }
    }
  };
  
/*
  MAKE LAYOUT INTO SEPARATE AREAS
  NAVBAR, MAIN CONTENT, SIDEBAR(CUSTOM THINGIES)
  LAYOUT ONLY CHANGES HOW THOSE AREAS BEHAVE NOT THE THINGS WITHIN

  MAKE THE NAVBAR SHOW THE ROUTED CONTENT FROM THE APP

  ALL LOGIC THAT TRIGGERS A LAYOUT CHANGE SHOULD BE HANDLED IN THE LAYOUT COMPONENT? LIKE SHOWSIDEBAR?
  IF THE COMPONENT ITSELF DOESN'T CHANGE SIZE IT DOESN'E NEED TO BE HANDLED HERE
  

  ???MAKE DIFFERENT LAYOUTS FOR MOBILE ETC OR PASS SIZE TO AREAS???
  MAKE A GLOBAL VARIABLE RALATING TO SIZE/VIEWPORT IN APPCONTEXT


  NAVBAR:
    MAKE ROUTING LIKE IN ASP.NET CORE APP

*/
export const Layout = (props: any) => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);

    return (
        <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
        {size => <Box fill>
            <NavMenu showSidebar={() => setShowSidebar(!showSidebar)}/>
            <Box direction='row' flex overflow={{horizontal: 'hidden'}}>
            <Box flex align='center' justify='center'>
            <>{props.children}</>
            </Box>
            {(!showSidebar || size !== 'small') ? 
                <Collapsible direction="horizontal" open={showSidebar}>
                <Box
                    flex
                    width='medium'
                    background='light-2'
                    elevation='small'
                    align='center'
                    justify='center'
                >
                    sidebar
                </Box>
                </Collapsible>
                :
                <Layer>
                <Box
                    background='light-2'
                    tag='header'
                    justify='end'
                    align='center'
                    direction='row'
                >
                    <Button
                    icon={<FormClose />}
                    onClick={() => setShowSidebar(false)}
                    />
                </Box>
                <Box fill background='light-2' align='center' justify='center'>
                    sidebar
                </Box>
                </Layer>
            }
            </Box>
        </Box>}
        </ResponsiveContext.Consumer>
        </Grommet>
    );
}