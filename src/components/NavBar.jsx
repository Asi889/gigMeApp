import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import { Link, useHistory } from 'react-router-dom';
import authReducer from '../services/authReducers';
import { action, runInAction } from 'mobx';
import { inject, observer } from 'mobx-react';
import {navBarStyles} from './componentStyles/navBarStyles'
const authManager = new authReducer()

const ButtonAppBar = inject("gigList", "profileList", "profile", "theme")(observer((props) => {
  
  const navBarStyles1= navBarStyles

  const classes = navBarStyles1();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = event => {

    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    // console.log(pageURL)

    if (pageURL === "dark-M") {
      props.theme.changeTheme()
      setAnchorEl(null);

    } else {

      history.push(pageURL);
      setAnchorEl(null);
    }
  };

  const handleLogOut = async () => {
    authManager.logOut()
    window.location.reload();
    // history.push("/")
    setAnchorEl(null);

  }

  const menuItems = [
    {
      menuTitle: "Feed",
      pageURL: "/"
    },
    {
      menuTitle: "Profile",
      pageURL: "/profilePage"
    },
    {
      menuTitle: "AddGig",
      pageURL: "/addGig"
    },
    {
      menuTitle: "MyGigs",
      pageURL: "/myGigs"
    },
    {
      menuTitle: "Logout",
      pageURL: "/"
    },
    {
      menuTitle: "Chat",
      pageURL: "/chat"
    },
    {
      menuTitle: "dark-M",
      pageURL: "dark-M"

    },

  ];

  return (
    <div className={classes.rootp}>
      <AppBar position="static" className={props.theme.theme ? classes.darkBar : classes.bar}>
        <Toolbar>
          <span onClick={() => history.push('/')}>

            <Typography variant="h4" className={props.theme.theme ? classes.darkTitle : classes.title}>
              G
           {/* <img className={classes.logo} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDk2IDQ5NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDk2IDQ5NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBvbHlnb24gc3R5bGU9ImZpbGw6I0ZGQTY0RDsiIHBvaW50cz0iMzAwLjQ5NiwyMzUuNTA0IDI0OCwyODggMjcyLDMxMiAyODgsMjk2IDI5OC45NzYsMjg1LjAyNCAzNTIsMjMyIDMyMi44OCwyMjQgCSIvPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGRkE2NEQ7IiBwb2ludHM9IjE5NC43NTIsMjM0Ljc1MiAyOTYsMzM2IDI4MCwzNTIgMjY0LDM1MiAxNDQsMjMyIDE2OCwyMjQgCSIvPg0KPC9nPg0KPGc+DQoJPHJlY3QgeD0iMjgwIiB5PSIxMjAiIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiB3aWR0aD0iNDgiIGhlaWdodD0iMTYiLz4NCgk8cmVjdCB4PSIxNjgiIHk9IjEyMCIgc3R5bGU9ImZpbGw6IzMzMzMzMzsiIHdpZHRoPSI0OCIgaGVpZ2h0PSIxNiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiBkPSJNNDI0LDM1MmgtMTZ2LTYwLjA5NmMwLTE0LjU0NC00LjgxNi0yOC45NzYtMTMuNTQ0LTQwLjY0Yy04LjgxNi0xMS43NTItMjEuNDU2LTIwLjQ0OC0zNS41NzYtMjQuNDgNCgkJbC0yMi40ODgtNi40MzJjMTIuMDY0LTExLjU0NCwyMS44OC0yNS4zOTIsMjguNzEyLTQwLjg2NGwyLjg0LDEuNDI0YzE3LjY3Miw4LjgzMiwzNy4yNDgsMTMuMzc2LDU2Ljg4OCwxMy4zNzYNCgkJYzguMjgsMCwxNi41NzYtMC44MTYsMjQuNzQ0LTIuNDQ4bDExLjEzNi0yLjIyNGwtNS44NDgtOS43MzZjLTEzLjE5Mi0yMS45OTItMzAuNzkyLTQxLjE2OC01MS4zOTItNTYuMzg0DQoJCWM1LjItMi4zOTIsMTAuMDE2LTUuNjcyLDE0LjE4NC05Ljg0QzQyNi45MDQsMTA0LjQwOCw0MzIsOTIuMTEyLDQzMiw3OS4wMzJjMC0xMy4xMjgsNC4zNDQtMjYuMTQ0LDEyLjIxNi0zNi42NTZMNDY0LDE2aC0yOC43NzYNCgkJYy0zMi4xOTIsMC02Mi4yNDgsMTMuMzg0LTgzLjg5NiwzNi43NjhDMzI4LjAzMiwyMC44NTYsMjkwLjQ0OCwwLDI0OCwwYy02Ny44OCwwLTEyMy40MzIsNTMuMTUyLTEyNy41OTIsMTIwSDEyMA0KCQljMCwxLjM1MiwwLjEyOCwyLjY2NCwwLjIsNGMtMC4wNCwxLjMzNi0wLjIsMi42NDgtMC4yLDRjMCwzNi4yOTYsMTUuMjU2LDY5LjA0LDM5LjYxNiw5Mi4zNmwtMjIuNDg4LDYuNDMyDQoJCWMtMTQuMTI4LDQuMDMyLTI2Ljc2LDEyLjcyOC0zNS41ODQsMjQuNDg4QzkyLjgxNiwyNjIuOTI4LDg4LDI3Ny4zNiw4OCwyOTEuOTA0VjM1Mkg3MmMtMzkuNzA0LDAtNzIsMzIuMjk2LTcyLDcyczMyLjI5Niw3Miw3Miw3Mg0KCQloMTM2aDhoNDBoMjRoMTZoMTI4YzM5LjcwNCwwLDcyLTMyLjI5Niw3Mi03MlM0NjMuNzA0LDM1Miw0MjQsMzUyeiBNMzM1Ljg0LDIzNi44NDhsLTQyLjUyLDQyLjUybDExLjMxMiwxMS4zMTJsNDguOC00OC44DQoJCWwxLjA0OCwwLjMwNGMxMC43ODQsMy4wOCwyMC40NCw5LjcxMiwyNy4xNjgsMTguNjg4QzM4OC4zMjgsMjY5Ljc3NiwzOTIsMjgwLjgsMzkyLDI5MS45MDR2NjcuMTI4DQoJCWMwLDguNjgtMy41MiwxNy4xNjgtOS42NTYsMjMuMzEyQzM3Ni4yLDM4OC40OCwzNjcuNzEyLDM5MiwzNTkuMDMyLDM5MkgyOTZ2LTQ4aDQ4di01NmgtMTZ2NDBoLTI4LjY4OGwtMTYtMTZsMTAuMzQ0LTEwLjM0NA0KCQlsLTExLjMxMi0xMS4zMTJMMjcyLDMwMC42ODhMMjU5LjMxMiwyODhsNDUuNDQtNDUuNDRjNS44LTIuODg4LDExLjM2LTYuMTQ0LDE2LjYyNC05Ljg0TDMzNS44NCwyMzYuODQ4eiBNMjgwLDQxNmgtMjRoLTQwdi04aDgNCgkJYzkuNjA4LDAsMTguMTI4LTQuMzM2LDI0LTExLjA1NmM1Ljg3Miw2LjcyLDE0LjM5MiwxMS4wNTYsMjQsMTEuMDU2aDhWNDE2eiBNMjE2LDM2MGg4YzguODE2LDAsMTYsNy4xNzYsMTYsMTYNCgkJYzAsOC44MTYtNy4xODQsMTYtMTYsMTZoLThWMzYweiBNMjcyLDM5MmMtOC44MjQsMC0xNi03LjE4NC0xNi0xNmMwLTguODI0LDcuMTc2LTE2LDE2LTE2aDh2MzJIMjcyeiBNMjI1LjE1MiwyNTMuODQNCgkJYzcuNDMyLDEuMzQ0LDE1LjA0LDIuMTYsMjIuODQ4LDIuMTZjNy44MDgsMCwxNS40MTYtMC44MTYsMjIuODQ4LTIuMTZMMjQ4LDI3Ni42ODhMMjI1LjE1MiwyNTMuODR6IE0zNTkuOCwxMjQNCgkJYy0yLjA3MiwyOS4wMDgtMjYuMjcyLDUyLTU1LjgsNTJjLTIwLjM0NCwwLTM5LjEyLTExLjA4LTQ5LTI4LjkxMmwtNy0xMi42MzJsLTcsMTIuNjMyQzIzMS4xMiwxNjQuOTIsMjEyLjM0NCwxNzYsMTkyLDE3Ng0KCQljLTI5LjUyOCwwLTUzLjcyOC0yMi45OTItNTUuOC01MmMwLjM0NC05LjY4OCwxLjg0OC0xOS4wOCw0LjUxMi0yOEgzNTUuMjhDMzU3Ljk1MiwxMDQuOTIsMzU5LjQ1NiwxMTQuMzEyLDM1OS44LDEyNHoNCgkJIE00MzQuNDk2LDE3Ny44NjRjLTIwLjMzNiwxLjc4NC00MS4wNjQtMi4wODgtNTkuNDA4LTExLjI2NGwtNC40NC0yLjIxNkMzNzQuMDg4LDE1Mi44NCwzNzYsMTQwLjY0OCwzNzYsMTI4aDUuNTc2DQoJCUM0MDIuMzkyLDE0MC44MTYsNDIwLjUxMiwxNTcuODQsNDM0LjQ5NiwxNzcuODY0eiBNNDMxLjk2LDMyLjA1NmwtMC41MzYsMC43MjhDNDIxLjQ4LDQ2LjA0LDQxNiw2Mi40NzIsNDE2LDc5LjAzMg0KCQljMCw4LjY4LTMuNTIsMTcuMTY4LTkuNjU2LDIzLjMxMkM0MDAuMiwxMDguNDgsMzkxLjcxMiwxMTIsMzgzLjAzMiwxMTJoLTguMTQ0Yy0yLjA0LTE2LjIzMi03LjAzMi0zMS41NTItMTQuNTc2LTQ1LjMxMg0KCQlDMzc4LjM3Niw0NS40ODgsNDA0LjEyOCwzMi45Niw0MzEuOTYsMzIuMDU2eiBNMjQ4LDE2YzQ0LjU2OCwwLDgzLjAxNiwyNi4yMjQsMTAxLjA0LDY0SDE0Ni45NkMxNjQuOTg0LDQyLjIyNCwyMDMuNDMyLDE2LDI0OCwxNnoNCgkJIE0xNDcuMDI0LDE3Ni4xMzZDMTU5LjM2LDE4Ni4wNCwxNzQuOTkyLDE5MiwxOTIsMTkyYzIxLjkzNiwwLDQyLjQ2NC0xMC4wMTYsNTYtMjYuNzc2QzI2MS41MzYsMTgxLjk4NCwyODIuMDY0LDE5MiwzMDQsMTkyDQoJCWMxNy4wMDgsMCwzMi42NC01Ljk2LDQ0Ljk3Ni0xNS44NjRDMzMwLjkyOCwyMTMuODMyLDI5Mi41MTIsMjQwLDI0OCwyNDBTMTY1LjA3MiwyMTMuODMyLDE0Ny4wMjQsMTc2LjEzNnogTTE5MS43MjgsMjQyLjc5Mg0KCQlsLTAuMTI4LDAuMTI4bDg4LjQsODguMzkyVjM0NGgtOGMtMS40NTYsMC0yLjg0OCwwLjI0LTQuMjU2LDAuNDMyTDE2MC4xNiwyMzYuODQ4bDE0LjQ2NC00LjEzNg0KCQlDMTgwLjAyNCwyMzYuNTEyLDE4NS43NTIsMjM5Ljg0OCwxOTEuNzI4LDI0Mi43OTJ6IE0xMDQsMjkxLjkwNGMwLTExLjExMiwzLjY3Mi0yMi4xMzYsMTAuMzQ0LTMxLjAzMg0KCQljNi43MzYtOC45ODQsMTYuMzkyLTE1LjYxNiwyNy4xNjgtMTguNjk2bDEuMDQ4LTAuMzA0bDEwOS4zODQsMTA5LjM4NGMtMS40MjQsMS4xNi0yLjc0NCwyLjQxNi0zLjk1MiwzLjc5Mg0KCQlDMjQyLjEyOCwzNDguMzM2LDIzMy42MDgsMzQ0LDIyNCwzNDRoLTh2LTE2aC00OHYtNDBoLTE2djU2aDQ4djQ4aC02My4wMzJjLTguNjgsMC0xNy4xNjgtMy41Mi0yMy4zMTItOS42NTYNCgkJQzEwNy41MiwzNzYuMiwxMDQsMzY3LjcxMiwxMDQsMzU5LjAzMlYyOTEuOTA0eiBNNzIsNDgwYy0zMC44NzIsMC01Ni0yNS4xMjgtNTYtNTZzMjUuMTI4LTU2LDU2LTU2aDE2Ljg0DQoJCWMxLjc4NCw5LjY2NCw2LjQsMTguNTYsMTMuNTA0LDI1LjY1NmM5LjI0OCw5LjI0OCwyMS41NDQsMTQuMzQ0LDM0LjYyNCwxNC4zNDRIMjAwdjcySDcyeiBNMjE2LDQ1NnYtMjRoOC4yMDgNCgkJQzIxOS4xMjgsNDM4LjcwNCwyMTYsNDQ2Ljk2LDIxNiw0NTZzMy4xMjgsMTcuMjk2LDguMjA4LDI0SDIxNlY0NTZ6IE0yODAsNDgwaC0yNGMtMTMuMjMyLDAtMjQtMTAuNzY4LTI0LTI0czEwLjc2OC0yNCwyNC0yNGgyNA0KCQlWNDgweiBNNDI0LDQ4MEgyOTZ2LTY0di04aDYzLjAzMmMxMy4wOCwwLDI1LjM3Ni01LjA5NiwzNC42MjQtMTQuMzQ0YzcuMDk2LTcuMDk2LDExLjcyLTE1Ljk5MiwxMy41MDQtMjUuNjU2SDQyNA0KCQljMzAuODcyLDAsNTYsMjUuMTI4LDU2LDU2UzQ1NC44NzIsNDgwLDQyNCw0ODB6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" /> */}
              <img className={props.theme.theme ? classes.darkLogo : classes.logo} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzguMzA5IDM4LjMwOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzguMzA5IDM4LjMwOTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNMjIuNTM5LDI0LjEwN2MtMS43MTIsMC4xNjMtMy41NjQtMS45MzQtNS41LTEuOTM0Yy0yLjA3MSwwLTQuMDQ4LDIuMDgzLTUuODU5LDEuODk3DQoJCQljLTQuOTU4LTAuNTA3LTguNjc0LTEuNjM5LTkuNjcxLTMuMDE0YzAuMjg0LDIuMDQ0LDAuNzk4LDMuOTc3LDEuNDg3LDUuNzY4YzAuMTc3LDAuMTc4LDAuMzUzLDAuMzUzLDAuNTM3LDAuNTM2DQoJCQljMC41MTQsMC41NjksMS4xOTIsMS4wMjMsMS44MDUsMS41OGMwLjY4OSwwLjQ2NiwxLjM2NywwLjk5NCwyLjE0LDEuNGMwLjczNiwwLjQ2OSwxLjU1OSwwLjgwMSwyLjM1OSwxLjE3NA0KCQkJYzAuODMzLDAuMjkyLDEuNjUzLDAuNjMyLDIuNTA3LDAuODEyYzAuODM3LDAuMjQ4LDEuNjksMC4zNDcsMi41MDksMC40OTZjMC44MjgsMC4wMzEsMS42MywwLjE4LDIuMzk1LDAuMTM1DQoJCQljMC4zODMtMC4wMDQsMC43NTYtMC4wMDYsMS4xMTctMC4wMWMwLjM1OS0wLjAzNywwLjcwNi0wLjA3NiwxLjAzOS0wLjExMWMwLjY3MS0wLjA1MywxLjI3My0wLjE3NiwxLjgxNC0wLjI3OA0KCQkJYzAuMjcxLTAuMDUsMC41MjMtMC4wOTksMC43NTgtMC4xNDJjMC4yMjktMC4wNjYsMC40MzgtMC4xMjcsMC42MjgtMC4xODNjMC43NjctMC4yMTIsMS4yMDYtMC4zMzMsMS4yMDYtMC4zMzMNCgkJCXMtMC40MTUsMC4xODgtMS4xNDMsMC41MThjLTAuMTg0LDAuMDgtMC4zODgsMC4xNjgtMC42MDksMC4yNjRjLTAuMjMsMC4wNzItMC40NzksMC4xNTItMC43NDUsMC4yMzYNCgkJCWMtMC41MzIsMC4xNzUtMS4xMzYsMC4zOC0xLjgyMSwwLjQ3NWMtMC4zNDEsMC4wNjItMC42OTUsMC4xMjgtMS4wNjIsMC4xOTVjLTAuMzczLDAuMDMxLTAuNzU4LDAuMDYzLTEuMTU0LDAuMDk4DQoJCQljLTAuNzk0LDAuMTA1LTEuNjM2LDAuMDI4LTIuNTA4LDAuMDE0Yy0wLjg2LTAuMTI5LTEuNzY5LTAuMTc3LTIuNjUyLTAuNDM2Yy0wLjkwMi0wLjE4LTEuNzcyLTAuNTIxLTIuNjU0LTAuODI0DQoJCQljLTAuODQxLTAuNDAyLTEuNzAyLTAuNzY2LTIuNDcyLTEuMjdjLTAuODExLTAuNDM0LTEuNDk1LTEuMDMzLTIuMTk5LTEuNTQ1Yy0wLjMyMi0wLjMwMy0wLjY0OC0wLjU5Mi0wLjk1Ny0wLjg4Mw0KCQkJYzIuODIxLDUuNzU0LDcuNjczLDkuNTY3LDEzLjIwNiw5LjU2N2M3Ljc0LDAsMTQuMTY5LTcuNDM4LDE1LjUzLTE3LjI1M0MzMS41NDgsMjIuNDY2LDI3LjY3NSwyMy42MTgsMjIuNTM5LDI0LjEwN3oiLz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6IzAxMDAwMjsiIGQ9Ik0yMi4zOTYsMjEuNTgyYzEuOTcxLTAuMzc3LDEuOTI4LTAuODIsMS45MTEtMC45ODljLTAuMDQ4LTAuNDUxLTAuNjg5LTAuNDUxLTAuOTk3LTAuNDUxDQoJCQljLTAuMzI1LDAtMC43MTIsMC4wMzEtMS4xMiwwLjA4OWMtMC4zNTMsMC4wNTEtMS41MjgsMC4yNDUtMS44MzUsMC42NjVjLTAuMDc2LDAuMTA2LTAuMTA3LDAuMjI5LTAuMDg4LDAuMzQ5DQoJCQljMC4wNzYsMC40NjEsMC43MywwLjQ2MSwwLjk3NywwLjQ2MUMyMS41NzIsMjEuNzA3LDIxLjk4MiwyMS42NjIsMjIuMzk2LDIxLjU4MnoiLz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6IzAxMDAwMjsiIGQ9Ik0xMi4xMjYsMjEuNzJjMC4yMTksMCwwLjg4MywwLDAuOTYyLTAuNDYxYzAuMDIxLTAuMTE5LTAuMDEtMC4yNDQtMC4wODYtMC4zNTENCgkJCWMtMC4yOTYtMC40MTQtMS4zODctMC42MTUtMS43MTQtMC42NjZjLTAuMzc2LTAuMDYtMC43MzUtMC4wOTEtMS4wMzktMC4wOTFjLTAuMjc0LDAtMC45MTgsMC0wLjk3OSwwLjQ1Mw0KCQkJYy0wLjA1NywwLjQyNSwwLjU0NywwLjc2MSwxLjc5MiwxLjAwMkMxMS40NDYsMjEuNjgxLDExLjgxNCwyMS43MiwxMi4xMjYsMjEuNzJ6Ii8+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNMzcuMDY3LDYuNTM4YzAsMC0wLjEwNi0wLjIzOC0wLjM2OS0wLjU5NmMtMC4xMy0wLjE4Mi0wLjMwMS0wLjM5LTAuNTEzLTAuNjINCgkJCWMtMC4yMDgtMC4yNDEtMC40NzEtMC40NjYtMC43ODQtMC42NTRjLTAuMzEtMC4yMDItMC42NjEtMC40MDMtMS4wNDUtMC41OTJjLTAuMzgyLTAuMTk4LTAuODE3LTAuMjY5LTEuMjY3LTAuMzY0DQoJCQljLTAuMTQxLTAuMDIxLTAuMjg1LTAuMDMyLTAuNDMtMC4wNDZjMC4zMjItMC4xMjQsMC42MzUtMC4yNDUsMC45MjItMC4zODZjMC4zMDktMC4xMzIsMC41OTgtMC4yNjQsMC44NTctMC4zOTUNCgkJCWMwLjI1OS0wLjE0MywwLjQ5Mi0wLjIzOCwwLjY4Ni0wLjM1YzAuMzg5LTAuMjA5LDAuNjIxLTAuMzc5LDAuNjIxLTAuMzc5bDAuMDA4LTAuMDA1YzAuMDE1LTAuMDExLDAuMDI4LTAuMDI1LDAuMDM5LTAuMDQyDQoJCQljMC4wNTEtMC4wNzYsMC4wMy0wLjE3OS0wLjA0Ny0wLjIyOWMwLDAtMC4yMzEtMC4xNTQtMC42NTgtMC4zMzVjLTAuMjEzLTAuMDg5LTAuNDc2LTAuMjAxLTAuNzgtMC4yNw0KCQkJYy0wLjMwNC0wLjA2OS0wLjY1NC0wLjE0Ny0xLjAzNi0wLjE5MmMtMC4zODEtMC4wMjYtMC43OTktMC4wNDQtMS4yMzctMC4wMTRjLTAuNDM1LDAuMDQ4LTAuODk5LDAuMS0xLjM1NCwwLjI1Nw0KCQkJYy0wLjQ1NiwwLjE1My0wLjkwOSwwLjM2Ni0xLjM0MiwwLjY0Yy0wLjQ0MywwLjI0My0wLjg2MSwwLjU2MS0xLjI5MSwwLjgyOGMtMC4wNzgsMC4wNTgtMC4xNTUsMC4xMTYtMC4yMzMsMC4xNzMNCgkJCWMwLjM3NSwwLjMzNywwLjczMywwLjY5NSwxLjA4MSwxLjA2OWMwLjE3NCwwLjE5MiwwLjM0NSwwLjM4OCwwLjUxNCwwLjU4OGMwLjM4MywwLjQ1MiwwLjc0LDAuOTI4LDEuMDc4LDEuNDIzDQoJCQljMC4zMzYsMC4wNjIsMC42NzIsMC4xMzEsMC45OTQsMC4yMDZjMC4zOTEsMC4wNywwLjc1MiwwLjIxOCwxLjExMSwwLjI5NGMwLjM1NiwwLjA3NywwLjcyNiwwLjA2OSwxLjA1OSwwLjExNw0KCQkJYzAuMzMyLDAuMDUxLDAuNjU5LDAuMDc2LDAuOTc1LDAuMDgyYzAuMTU3LDAuMDA3LDAuMzE0LDAuMDAxLDAuNDY1LTAuMDA0YzAuMTQ1LDAuMDA5LDAuMjcyLDAuMDQsMC40MDgsMC4wNDENCgkJCWMwLjI2MiwwLjAxOCwwLjUwNiwwLjAyNywwLjcxNywwLjAyM2MwLjQyLTAuMDAyLDAuNzAzLTAuMDM2LDAuNzAzLTAuMDM2bDAuMDItMC4wMDJjMC4wMTYtMC4wMDIsMC4wMzEtMC4wMDYsMC4wNDctMC4wMTMNCgkJCUMzNy4wNjcsNi43MTgsMzcuMTA0LDYuNjIxLDM3LjA2Nyw2LjUzOHoiLz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6IzAxMDAwMjsiIGQ9Ik0yOS4zOCw3LjU3NWMtMC43MzYtMC40NjktMS41Ni0wLjgwMS0yLjM1OS0xLjE3NGMtMC44MzMtMC4yOTItMS42NTMtMC42MzItMi41MDgtMC44MTENCgkJCWMtMC44MzYtMC4yNDgtMS42ODktMC4zNDctMi41MDgtMC40OTdjLTAuODI4LTAuMDMxLTEuNjMxLTAuMTc5LTIuMzk2LTAuMTM0Yy0wLjM4MywwLjAwMy0wLjc1NiwwLjAwNi0xLjExNywwLjAwOQ0KCQkJYy0wLjM1OCwwLjAzOC0wLjcwNiwwLjA3Ni0xLjAzOSwwLjExMWMtMC42NzEsMC4wNTMtMS4yNzQsMC4xNzctMS44MTQsMC4yNzljLTAuMjcxLDAuMDUtMC41MjQsMC4wOTgtMC43NTgsMC4xNDENCgkJCWMtMC4yMjgsMC4wNjctMC40MzgsMC4xMjgtMC42MjgsMC4xODNjLTAuNzY3LDAuMjEyLTEuMjA2LDAuMzMzLTEuMjA2LDAuMzMzczAuNDE1LTAuMTg4LDEuMTQyLTAuNTE3DQoJCQljMC4xODQtMC4wNzksMC4zODgtMC4xNjcsMC42MS0wLjI2M2MwLjIzLTAuMDczLDAuNDc5LTAuMTUzLDAuNzQ1LTAuMjM3YzAuNTMyLTAuMTc0LDEuMTM1LTAuMzc5LDEuODIxLTAuNDc0DQoJCQljMC4zNDEtMC4wNjMsMC42OTYtMC4xMjgsMS4wNjMtMC4xOTVjMC4zNzMtMC4wMzIsMC43NTgtMC4wNjQsMS4xNTQtMC4wOThjMC43OTMtMC4xMDUsMS42MzUtMC4wMjgsMi41MDgtMC4wMTMNCgkJCWMwLjg1OSwwLjEyOCwxLjc2OSwwLjE3NiwyLjY1MSwwLjQzNWMwLjkwMiwwLjE4LDEuNzcyLDAuNTIyLDIuNjU0LDAuODI0YzAuNTU1LDAuMjY2LDEuMTA4LDAuNTMsMS42NDksMC44MTMNCgkJCWMtMC4xODctMC4yNDgtMC4zNjItMC41MDctMC41NjItMC43NDNjLTAuMTY5LTAuMi0wLjMzOS0wLjM5Ni0wLjUxNi0wLjU4NmMtMC4zNDYtMC4zNzQtMC43MDUtMC43MzEtMS4wODItMS4wNjkNCgkJCUMyNC4xODIsMS40NjIsMjAuNzYzLDAsMTcuMDM1LDBDOC4zMDUsMCwxLjIyOCw3Ljk2OSwxLjIyOCwxNy44YzAsMC43NTEsMC4wNTUsMS40ODYsMC4xMzUsMi4yMTMNCgkJCWMwLjk3My0xLjY4Myw3LjYxMi0yLjk4NSwxNS42NzUtMi45ODVzMTQuNzAzLDEuMzAyLDE1LjY3MiwyLjk4M2MwLjA4LTAuNzI3LDAuMTM1LTEuNDYyLDAuMTM1LTIuMjEzDQoJCQljMC0zLjU2NC0wLjk0MS02Ljg3NS0yLjU0NS05LjY1NkMzMC4wMDQsNy45NDMsMjkuNzA1LDcuNzQ1LDI5LjM4LDcuNTc1eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
            G
          </Typography >
            <Typography variant="h5" className={props.theme.theme ? classes.darkTitle1 : classes.title1}>
              me
          </Typography>
          </span>


          <IconButton
            edge="start"
            position="static"
            className={props.theme.theme ? classes.darkMenuButton : classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={open}
            onClose={() => setAnchorEl(null)}
          >
            {menuItems.map((menuItem, index) => {
              const { menuTitle, pageURL } = menuItem;
              if (menuTitle === "Logout") {
                return (
                  <MenuItem key={index} onClick={handleLogOut}>
                    {menuTitle}
                  </MenuItem>
                );
              }
              else {
                return (
                  <MenuItem key={index}  onClick={() => handleMenuClick(pageURL)}>
                    {menuTitle}
                  </MenuItem>
                );
              }
            })}
          </Menu>

        </Toolbar>
      </AppBar>
    </div>
  );
}))

export default ButtonAppBar
