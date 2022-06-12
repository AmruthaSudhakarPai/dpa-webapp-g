// @flow 
import * as React from 'react';
import WorkBasketTabs from './../Components/WorkBasket/WorkBasketTabs';
import WorkbasketHeader from './../Components/WorkBasket/WorkbasketHeader';
import WorkBasketContainer from './../Components/WorkBasket/WorkBasketContainer';
import Box from '@mui/material/Box';
type Props = {
    
}; 
const Workbasket = (props: Props) => {
    return (
        <>
         
         <WorkbasketHeader />
            <Box>
                 <WorkBasketTabs />             
            </Box> 
         </>
    );
};
export default Workbasket;