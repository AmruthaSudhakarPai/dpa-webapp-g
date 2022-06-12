
import { Typography } from '@mui/material';
import Link from 'next/link';

interface CopyrightProps {
    className: string;
}

const Copyright = ({ className }: CopyrightProps) => {
    return (<Typography variant="body2" color="text.secondary" align="center" className={className}>
        {'Copyright © '}
        <Link href="https://mui.com/">
            Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>)
}

export default Copyright;
