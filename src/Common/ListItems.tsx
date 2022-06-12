import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import WorkIcon from '@mui/icons-material/Work';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
const SmallerListItemIcon = styled(ListItemIcon)({
    color: 'white'
});
export const mainListItems = (
    <React.Fragment>
        <ListItemButton>
            <SmallerListItemIcon>
                <HomeIcon />
            </SmallerListItemIcon>
            <Link href="/">
                <ListItemText primary="Home" />
            </Link>
        </ListItemButton>
        <ListItemButton>
            <SmallerListItemIcon>
                <WorkIcon />
            </SmallerListItemIcon>

            <Link href="/Workbasket" >
                <ListItemText primary="Work Basket" />
            </Link>

        </ListItemButton>
        <ListItemButton>
            <SmallerListItemIcon>
                <SearchIcon />
            </SmallerListItemIcon>
            <Link href="/Search" >
                <ListItemText primary="Search" />
            </Link>
        </ListItemButton>

    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Saved reports
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItemButton>
    </React.Fragment>
);