import { Notifications, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import { borderRadius } from "@mui/system";
import MailIcon from '@mui/icons-material/Mail';

// Custom mui


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

// applying html div in using mui
const Search = styled("Div")(({ theme }) => ({
    backgroundColor: "white",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    padding: "0 10px",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }

}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    padding: "0 10px",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: { //it will hide UserBox when its sx and show when sm
        display: "none"
    }

}));


const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position='stick'>
            <StyledToolbar>
                <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>LAMA</Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder='Search..' /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar sx={{ width: "30", height: "30" }} onClick={e => setOpen(true)} />
                </Icons>
                <UserBox onClick={e => setOpen(true)}>
                    <Avatar sx={{ width: "30", height: "30" }} />
                    <Typography variant='span'>John</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>

        </AppBar>
    )
}

export default Navbar
