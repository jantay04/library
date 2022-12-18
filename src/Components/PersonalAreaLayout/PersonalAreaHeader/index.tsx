import IconButton from '@mui/material/IconButton/IconButton'
import React from 'react'
import SearchHeader from '../../UI/SearchHeader'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge/Badge';
import styled from '@emotion/styled';
import { Avatar } from '@mui/material';

type Props = {}

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

function PersonalAreaHeader({ }: Props) {
    return (
        <div className='flex items-center justify-between w-full pb-[30px] border-b'>
            <SearchHeader />
            <div className='flex items-center gap-2'>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge variant="dot" color="error">
                        <NotificationsNoneIcon />
                    </Badge>
                </IconButton>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    variant="dot"
                >
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </StyledBadge>
            </div>
        </div>
    )
}

export default PersonalAreaHeader