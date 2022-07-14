import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import React from "react";
import Menu from "@mui/material/Menu";
import { SubMenuUser } from "../SubMenuUser";
import { Link } from "react-router-dom";
import { HomeButton } from "../../Pages/DashCliente/style";

export default function FallbackAvatars({ children }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div
    /*  style={{
        minWidth: "100px",
        maxWidth: "400px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "flex-end",
        cursor: "pointer",
      }} */
    >
      <Link
        to="/home/"
        style={{ width: "55px", display: "inline-flex", alignItems: "center" }}
      >
        <HomeButton>Home</HomeButton>
      </Link>
      <Stack
        direction="row"
        spacing={2}
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Avatar
          sx={{ bgcolor: "gray" }}
          alt=""
          src="/broken-image.jpg"
          size="large"
        >
          {children}
        </Avatar>
      </Stack>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <SubMenuUser />
      </Menu>
    </div>
  );
}
