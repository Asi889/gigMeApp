import Button from '@material-ui/core/Button';
import { observer, inject } from 'mobx-react'
import { useState } from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import AddGigDate from './AddGigDate';

const useStyles = makeStyles((theme) => ({
    root6: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '25px 45px',
        padding: '0 20px'
    },
    root1: {


    },
    darkRoot: {
        backgroundColor: "#18191a"
    },
    root2: {
        // backgroundColor: "#121212"


    },

    h2: {
        flex: 1
    },

    tex: {
        height: '140px',
        background: 'transparent',
        // color: "#121212",
        boxShadow: '0 1px 2px 1px #73bfb8',

    },
    darkTex: {
        height: '140px',
        background: '#968888',
        // color: "#121212",
        boxShadow: '0 1px 2px 1px #73bfb8',

    },
    img: {
        // height: "85px",
        width: "50%",
        // display: "block",


    },
    title:{

    },
    darkTitle:{
        color: "#e3dcdc",
    }
}));

const AddGigCategory = inject("profileList", "profile","theme")(observer((props) => {
    const classes = useStyles();
    const [category, setCategory] = useState('');
    const [open, setOpen] = useState(false);
    const history = useHistory();



    const getTextContent = (e) => {
        // console.log(e.target.innerText)
        // console.log(e.target.name)

        setCategory(e.target.innerText.toLowerCase())
        // console.log(e.target.innerText.toLowerCase());
        setTimeout(() => {

            setOpen(true)
        }, 300);
    }

    if (open === true) {
        return (
            <div>
                <AddGigDate category={category} />

            </div>
        )
    }

    

    if (open === false) {
        return (
            <div className={props.theme.theme ? classes.darkRoot : classes.root1}  >
            {/* <div className={props.darkMode ? classes.root1 : classes.root2}  > */}
                <h2 className={props.theme.theme ? classes.darkTitle : classes.title }>
                    Nedd help with...
                </h2>

                <div className={classes.root6}>
                    <Button name="Handyman" variant="contained" className={props.theme.theme ? classes.darkTex : classes.tex} onClick={getTextContent}   >
                        <img className={classes.img} value="Handyman" src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfNSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGNpcmNsZSBjeD0iMjUiIGN5PSIxNiIgcj0iMSIvPjxjaXJjbGUgY3g9IjE5IiBjeT0iMTYiIHI9IjEiLz48cGF0aCBkPSJtMjIgMjNjMi4yMDYgMCA0LTEuNzk0IDQtNGgtMmMwIDEuMTAzLS44OTcgMi0yIDJzLTItLjg5Ny0yLTJoLTJjMCAyLjIwNiAxLjc5NCA0IDQgNHoiLz48cGF0aCBkPSJtNTkuNzA4IDMxLjUzMy05Ljc2Ny02Ljc2MWMuMDM5LS4yNjYuMDU5LS41MjIuMDU5LS43NzIgMC0zLjMwOS0yLjY5MS02LTYtNi0xLjI1IDAtMi40NTUuMzkxLTMuNDg2IDEuMTMxLS4yNjUuMTg5LS40Mi40OTYtLjQxNy44MjFzLjE2My42MjguNDMxLjgxM2wyLjA0MSAxLjQxM2MuNDUzLjMxNC41NjcuOTM4LjI1NCAxLjM5MS0uMzA0LjQzOC0uOTUyLjU1OC0xLjM5Mi4yNTRsLTEuODAxLTEuMjQ3Yy0uMjg4LS4xOTktLjY1OS0uMjM0LS45NzktLjA5LS4zMTkuMTQzLS41NDEuNDQzLS41ODMuNzlsLS4wMTguMTMyYy0uMDI3LjE5NS0uMDUuMzktLjA1LjU5MiAwIDMuMzA5IDIuNjkxIDYgNiA2IC43NzcgMCAxLjU0LS4xNTcgMi4yNzQtLjQ2OGwuNDkzLjM0MS00LjAxNCA1LjczNC02LjczOS00LjcxOGMtMS43MjUtMS4yMDctMy43MzgtMi4wMDMtNS44MjMtMi4zMDJsLTMuMzg0LS40ODItLjU3OS0yLjMxM2MxLjA1OS0uNjgyIDEuOTM0LTEuNjI5IDIuNTczLTIuNzkzaDEuMTk5YzIuMjA2IDAgNC0xLjc5NCA0LTR2LTZoMWMxLjY1NCAwIDMtMS4zNDYgMy0zcy0xLjM0Ni0zLTMtM2gtMS44MzJjLTEuNTc5LTMuNjE1LTUuMTc4LTUuOTk5LTkuMTY4LTUuOTk5aC00Yy01LjUxNCAwLTEwIDQuNDg2LTEwIDEwdjEgMSA2YzAgMi4yMDYgMS43OTQgNCA0IDRoMS4xOThjLjYzOCAxLjE2MyAxLjUxMyAyLjExMSAyLjU3MyAyLjc5M2wtLjU3OSAyLjMxMy00LjIwOS42MDFjLTEuNTM3LjIyMS0zLjAzMi43OTEtNC4zMjQgMS42NTItMi45MTcgMS45NDQtNC42NTkgNS4xOTktNC42NTkgOC43MDV2OC45MzZjMCAyLjc1NyAyLjI0MyA1IDUgNWgxdjEwaDI0di0yMS40NjFsNi41MzkgMi45MDVjLjgyNi4zNjkgMS43MDYuNTU2IDIuNjE0LjU1NiAyLjExIDAgNC4wODgtMS4wMzYgNS4yODktMi43NzFsNS4yNC03LjU2OCAyLjYxIDEuODA3Yy41MDYuMzQ3IDEuMDk2LjUzMiAxLjcwNy41MzIuOTgzIDAgMS45MDYtLjQ4MiAyLjQ2OC0xLjI5Mi45NDEtMS4zNTkuNjAxLTMuMjMyLS43NTktNC4xNzV6bS0zOS4yMy41NzUtMi40NzggMi40Nzh2LTQuMzM2em0xLjUyMiAxLjMwNiAyLjU4NiAyLjU4NmgtNS4xNzJ6bTQtMy4xNjR2NC4zMzZsLTIuNDc4LTIuNDc4em00LTkuMjVoLS4zOTVjLjI1NC0uOTI0LjM5NS0xLjkyNy4zOTUtM3YtMWMxLjEwMyAwIDIgLjg5NyAyIDJzLS44OTcgMi0yIDJ6bTItNS40NDRjLS41OTEtLjM0NC0xLjI2OC0uNTU2LTItLjU1NnYtMmgyem0zLTYuNTU2Yy41NTIgMCAxIC40NDggMSAxcy0uNDQ4IDEtMSAxaC0xMi44MjljLjQxMy0xLjE2NCAxLjUyNS0yIDIuODI5LTJ6bS0xNS02aDRjMi44ODkgMCA1LjUyIDEuNTYxIDYuOTMxIDRoLTUuOTMxYy0yLjQxNSAwLTQuNDM1IDEuNzIxLTQuODk5IDRoLTguMTAxYzAtNC40MTEgMy41ODktOCA4LTh6bS02IDEwdjJjLS43MzIgMC0xLjQwOS4yMTItMiAuNTU2di0yLjU1NnptMCA4Yy0xLjEwMyAwLTItLjg5Ny0yLTJzLjg5Ny0yIDItMnYxYzAgMS4wNzMuMTQxIDIuMDc2LjM5NSAzem0yLTN2LTVoMTJ2NWMwIDQuMjUyLTIuMzU1IDctNiA3cy02LTIuNzQ4LTYtN3ptNiA5Yy44NDQgMCAxLjY0LS4xMjMgMi4zODMtLjM0OWwuNDg2IDEuOTQ4LTIuODY5IDIuMTUxLTIuODY5LTIuMTUxLjQ4Ni0xLjk0OGMuNzQzLjIyNiAxLjUzOS4zNDkgMi4zODMuMzQ5em0tOC43MzMgMy42ODcgMi43MzMtLjM5MXY3LjcwNGgxMnYtNy43MDRsMS45MDguMjczYy43MTMuMTAyIDEuNDEuMjkgMi4wOTIuNTI0djIzLjkwN2gtMnYtMTVoLTE2djVoLTJ2LTE0LjAxOGMuNDE2LS4xMjcuODM3LS4yMzQgMS4yNjctLjI5NXptMi43MzMgMjYuMzEzdi00aDRjMi4yMDYgMCA0LTEuNzk0IDQtNHMtMS43OTQtNC00LTRoLTR2LTNoMTJ2MTV6bTQtMTBjMS4xMDMgMCAyIC44OTcgMiAycy0uODk3IDItMiAyaC0ydi00em0tMTQgMXYtOC45MzZjMC0yLjgzNyAxLjQwOS01LjQ2OSAzLjc2OS03LjA0Mi4wNzQtLjA1LjE1NS0uMDg5LjIzMS0uMTM2djEzLjExNCAxIDFoNnY0aC03Yy0xLjY1NCAwLTMtMS4zNDYtMy0zem04IDV2MmgtMnYtMnptLTIgNGgydjJoN3YyaC05em0xMSA0di0yaDd2LTJoMnY0em0yMy43OTgtMTkuOTFjLS44MjggMS4xOTYtMi4xOTEgMS45MS0zLjY0NSAxLjkxLS42MjYgMC0xLjIzMS0uMTI5LTEuODAxLS4zODNsLTcuMzUyLTMuMjY3di03LjM1NmMuMjk1LjE2OS41OS4zMzkuODY4LjUzNGw4LjM3OCA1Ljg2NCAyLjg2MS00LjA4NyAzLjYwNCAyLjU3N3ptNC4wNTEtNS44NTItMy41OTYtMi41NzEgMS4xNTgtMS42NTUgMy42MjYgMi41MXptNy45NzQtLjY3Yy0uMzA0LjQzOC0uOTUyLjU1OC0xLjM5Mi4yNTRsLTEwLjQ5Ni03LjI2NmMtLjE3MS0uMTE4LS4zNy0uMTc4LS41NjktLjE3OC0uMTY0IDAtLjMyOC4wNC0uNDc4LjEyMS0uNjEuMzMzLTEuMjQ1LjUwMS0xLjg4OC41MDEtMS42OTIgMC0zLjE0My0xLjA1Ny0zLjcyNy0yLjU0NWwuMDE5LjAxM2MxLjMxNy45MDkgMy4yNjQuNTU1IDQuMTc0LS43NTkuOTQxLTEuMzU5LjYwMi0zLjIzMi0uNzU5LTQuMTc1bC0uNjE3LS40MjdjLjI5Ny0uMDcxLjYwMS0uMTA3LjkxLS4xMDcgMi4yMDYgMCA0IDEuNzk0IDQgNCAwIC4yOTYtLjA0NC42MDUtLjEzOC45NzUtLjEwMy40MDUuMDU4LjgzMS40IDEuMDY4bDEwLjMwNyA3LjEzNWMuMjE5LjE1MS4zNjYuMzguNDE0LjY0NHMtLjAwOS41MjktLjE2Ljc0NnoiLz48L2c+PC9zdmc+" />
                 Handyman
                    </Button>


                    <Button className={props.theme.theme ? classes.darkTex : classes.tex} variant="contained" value="Delivery" onClick={getTextContent} >
                        <img className={classes.img} value="Delivery" src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTQ4NC44MjcgMTU3Ljk3NGgtODYuODI1Yy0xNC45ODMgMC0yNy4xNzMgMTIuMTk2LTI3LjE3MyAyNy4xODh2OTkuOTM0aC0zMi40NzZjMS44MDUtNi41NjEgMi40NzQtMTQuMyAyLjAzNS0yMy4zMDZ2LS4wMDFjLS43MDUtMzguMDU5LTcuNjExLTcwLjEzNS0yMC41MjgtOTUuMzM3LTEwLjAzLTE5LjU2Ny0yMS43MzUtMzEuMjk4LTMxLjc3OS0zOC4zMTEgMTEuNzg5LTEyLjEyMSAxOC42MDUtMjkuMzY0IDE4LjYwNS00OS4yNTEgMC0zNS43ODEtMjguNTQzLTY0Ljg5LTYzLjYyNi02NC44OXMtNjMuNjI2IDI5LjEwOS02My42MjYgNjQuODljMCA0LjE0MyAzLjM1OCA3LjUgNy41IDcuNWg1LjA5NmMtLjQ2OSAyLjgzLS43MTkgNS43MTQtLjcxOSA4LjY0MyAwIDI1LjIxNiAxOC4wMTggNDYuMjkxIDQxLjg0IDUxLjAxNC0yLjQ5NyA5LjI3Mi0zLjczOCAyMC4yMDUtMy43MzMgMzIuNjI1bC0xOC43MDYgMTYuMDg5LTQ1LjUxNSAzLjY4MS01Mi41MDMtMTcuMzU2Yy00LjgxMi0xLjYtMTAuMjY2LTMuNDA4LTE0Ljk5OC4wMDQtNC42NjMgMy4zNjUtNC42NjMgOS4yNTYtNC42NjMgMTEuMTkxdjM5LjAzNWMwIDQuMTQzIDMuMzU4IDcuNSA3LjUgNy41aDguOTI5bC0xMy42OTUgNDcuMzI0Yy0xLjE1MSAzLjk3OCAxLjE0MSA4LjEzOCA1LjEyIDkuMjg5IDMuOTgxIDEuMTU3IDguMTM4LTEuMTQxIDkuMjktNS4xMTlsMTQuOTAyLTUxLjQ5NGgyMS4zMjJjLTI2LjUyIDgwLjg3Mi0xMS4zODggMTM0Ljg1NCAxMS44NzEgMTg5LjQ4NWgtMTMuNDgybC01Ni4xNTMtNjIuNzg2IDExLjg3NC00MS4wMmMxLjE1Mi0zLjk3OS0xLjE0LTguMTM4LTUuMTE5LTkuMjg5cy04LjEzOCAxLjE0MS05LjI5IDUuMTE5bC0xMS4zNTcgMzkuMjM3Yy0zNS4xMjYtLjU4Ni02Ni41NDYgMjMuNjMyLTc0LjU1MyA1OC40NzUtLjkyNyA0LjAzNiAxLjU5MiA4LjA2IDUuNjI3IDguOTg4bDEwLjY0NyAyLjQ1Yy0yLjcyIDI4LjI1MiAxNS44ODUgNTQuOTA3IDQ0LjI1OSA2MS40MzggNC4zMDkuOTkzIDguNjU1IDEuNDgzIDEyLjk3MSAxLjQ4MyAxMC42NDQgMCAyMS4xMDEtMi45ODQgMzAuMzUtOC43ODEgMTAuODU1LTYuODAyIDE4Ljk0My0xNi44MDIgMjMuMzItMjguNjJsOC40MDEgMS45MzNjMi41MDMuNTc5IDQuODc3Ljg3MiA3LjI0OS0uNDA1IDIuMjA3LTEuMTg4IDMuNjc0LTMuMzMzIDQuMjI0LTUuNzU0LjUyOC0yLjQ1NS45My00Ljk1IDEuMjA5LTcuNDY4aDE1Ni44NThjNS4wMTYgMzEuMTg3IDMxLjU1MSA1NC42OTYgNjMuMjQyIDU0LjY5NnM1OC4yMjctMjMuNTA5IDYzLjI0My01NC42OTZoNS43MjRzMS4xMzYuMDEzIDEuMzk1LjAxM2MyLjE0NSAwIDUuMjQzLS4yMzggNy43ODctMi44MjYgMS4yNzMtMS4yOTUgMi43NjctMy42MTIgMi42NTItNy4yOTMtLjIxMS03LjA0My0xLjI2OC0xMy44NDgtMy4wNzItMjAuMzE2IDUuOTc0LTM2LjI2OC4yMjYtNTguMzU3LTguMjk1LTc1LjY0NCA1LjM4Ny0zLjUzMSA4Ljk1OS05LjYxNSA4Ljk1OS0xNi41Mjd2LTIwLjYxM2gzNy44ODNjMTQuOTgzIDAgMjcuMTczLTEyLjE5NiAyNy4xNzMtMjcuMTg4di04Ny43NDZjLjAwMi0xNC45OTEtMTIuMTg3LTI3LjE4Ny0yNy4xNzEtMjcuMTg3em0tMzg4Ljc0NiAzMTIuOTMzYy05LjYwMSA2LjAxNy0yMC45NjEgNy45My0zMS45ODkgNS4zOTFoLS4wMDFjLTIwLjI5OC00LjY3Mi0zMy44NC0yMy4yODUtMzIuODUzLTQzLjQxMWw4MS4zNTMgMTguNzI0Yy0zLjM2NiA3LjkyNS05LjA2MSAxNC42MjgtMTYuNTEgMTkuMjk2em0zNy41MjgtMjkuODY2LTExNi42NjUtMjYuODQ2YzkuMDAzLTI0LjY1NCAzMy4yMzEtNDAuOTc0IDU5LjcxNC0zOS41N2w1Ny4xNTEgNjMuOTAxYy0uMDUuODQzLS4xMTYgMS42ODEtLjIgMi41MTV6bTExMy4yODUtMTMwLjY5NWMtMi4xNzcgNS43NDItMi4xNzcgMTIuODIxLTIuMTc3IDIyLjYydjI4LjMwMmgtMjcuNDYzdi0zOC44MjhjMC00My44OTggMjMuOTU4LTUxLjcyMSAzNC43MS01My4wMTJoNzMuNTI5Yy0uMjk2IDkuOTYzLTIuNTQ0IDE3LjA0NS02LjgxMiAyMS41NC00Ljk3NCA1LjIzOC0xMy40ODUgNy43OS0yNi4wMjEgNy44MDJsLTI2LjkyMS4wMjhjLTkuNi4wMDEtMTUuOTQgMy44ODUtMTguODQ1IDExLjU0OHptLTIuMTc3IDY1LjkyMXYxNy45MDhjLS4wNjggMC0uMTM4IDAtLjIxIDBoLTUzLjI3M2MuNTk5LTUuNTU0IDIuMzI5LTkuODUyIDUuMTctMTIuODI2IDQuMjI2LTQuNDIyIDEwLjE3OC01LjA4MiAxMy4zNS01LjA4MnptODAuNDQ1LTEyMS44MzhoLTY4LjIwN2MtMi43MzktOC42MTktNS4xODEtMTguMDU3LTcuMTg5LTI3Ljc1N2wyMC43MzctMTMuNDZjMTEuMzItNy4zNTEgMTcuMjA5LTE3LjczOCAxNi4xNTctMjguNDk5LS45MzItOS41MzktNy40MTctMTguMDYtMTYuNTIxLTIxLjcwNy04LjMxNC0zLjMzLTE3LjI2My0yLjI4NC0yNS4xNzIgMi43NzMuNjUyLTcuMTc0IDEuODY2LTEzLjU3OCAzLjYyMi0xOS4wMTQgMy4xOTctLjMzIDYuMzcyLS45NTUgOS40OS0xLjg3MiA2LjM0Ny0xLjQ3NCAxMi4yMTItMy44MjMgMTcuNTA3LTYuOTM4IDE0LjQ0NSA4LjYzIDQ2LjIxNSAzNi42MjIgNDkuNTc2IDExNi40NzR6bS0xMzAuMTc5LTE4My4wMzhjMy41MzctMjMuOTY0IDIzLjc0OS00Mi4zOSA0OC4wNzctNDIuMzkgMjYuODEyIDAgNDguNjI2IDIyLjM4MSA0OC42MjYgNDkuODkgMCAyMi4zNzQtMTAuNzI5IDQwLjQwNy0yOC4wMjkgNDguMzQzdi0zOS40NjNjMC02LjgzMy0yLjYxNS0xNS4yMTUtMTUuMDY5LTE2LjM0OS0uMjI2LS4wMjEtLjQ1My0uMDMxLS42OC0uMDMxem0xMS4zMjkgMjMuNjQzYzAtMi45Ni4zMzctNS44NTEgMS04LjY0M2g0MC4yMjhjLjQ2My4wNS44MDEuMTA0IDEuMDQzLjE1My4wMzkuMjc4LjA3My42NzguMDczIDEuMjI3djQzLjg3NmMtMS43ODcuMjYzLTMuNTg1LjM5Ni01LjM4Mi4zOTctLjAxNyAwLS4wMzQgMC0uMDUgMC0yMC4zNTYtLjAxOS0zNi45MTItMTYuNjE0LTM2LjkxMi0zNy4wMXptLTkuNzIzIDExNS45MiAxNy43NjQtMS40MzdjMS41ODMtLjEyNyAzLjA4NC0uNzU0IDQuMjg5LTEuNzg5bDMyLjA2LTI3LjU3NS4wMDUtLjAwNWMzLjEtMi42NzEgNi40MDktNC4wNDEgOS42MzEtNC4wNDEgMS40MzQgMCAyLjg1MS4yNzIgNC4yMjQuODIyIDMuOTYzIDEuNTg3IDYuNzc3IDUuMjE1IDcuMTcxIDkuMjQxLjQ5NSA1LjA2Ny0yLjg0MyAxMC4yMDMtOS4zOTYgMTQuNDU5bC0zNS43MjUgMjMuMTg4aC0zMC4wMjF2LTEyLjg2M3ptLTMxLjY5NiAyLjU2NCAxNi42OTYtMS4zNXYxMS42NTFoLTE5LjQwMWMtMi41MTUgMC0zLjEyOC0yLjA5LTMuMi0zLjg0My0uMDQxLS45OTQuMDUzLTUuOTc4IDUuOTA1LTYuNDU4em0tMTcuNzUxLTUuMTc4Yy0yLjI1OSAzLjcwNC0zLjMxNCA4LjAzNy0zLjE0MSAxMi4yNS4wNDUgMS4wOTEuMTg0IDIuMTQyLjM3OCAzLjE2NiAwIC4wMjEtLjAxMi4wNDItLjAwOC4wNjJoLTM2LjMzNnYtMjguNDczbDM5LjEzNiAxMi45MzdjLS4wMTIuMDItLjAxOC4wMzktLjAyOS4wNTh6bTE1LjA4OCAzMC40NzhoNjYuNjAxYzEuNDQ5IDAgMi44NjgtLjQyIDQuMDgzLTEuMjA5bDMuMzk1LTIuMjA0YzEuNjMzIDcuMjE4IDMuNDkzIDE0LjI0MiA1LjUxOSAyMC44NzYtMTUuMjk2IDQuNTE1LTM5LjU3NSAxOS4xMDYtMzkuNTc1IDY2LjE1OHYzOS41ODFjLTUuMjYyIDEuMDYyLTExLjQ4NyAzLjUxNi0xNi42OTQgOC45NjUtNS40ODkgNS43NDQtOC42MjQgMTMuNTI3LTkuMzc2IDIzLjE4OWgtMTUuMTNjLTE1LjI0Ni00My45MzgtMjEuMDQ0LTkwLjY5NCAxLjE3Ny0xNTUuMzU2em0xMi4zNjIgMTg5LjQ1OGMtMi43NzItNi4zNzUtNS40NDQtMTIuNzI2LTcuOTYtMTkuMTAxaDc3Ljg3NGMxMC4wOTMgMCAxNS4yMS00LjU5NSAxNS4yMS0xMy42NTZ2LTI2Ljc1Mi0yOC4zMDJoNTkuMTk5YzQuMTQzIDAgNy41LTMuMzU3IDcuNS03LjVzLTMuMzU3LTcuNS03LjUtNy41aC01OS4xNDVjLjA5Ni00LjI2LjM2OS03Ljc0NCAxLjE1LTkuODAyLjM3OS0xLjAwMS43MDctMS44NjUgNC44MjYtMS44NjVsMjYuOTI4LS4wMjhjMTYuODY1LS4wMTYgMjguOTMtNC4wOTYgMzYuODg1LTEyLjQ3NC4zNjgtLjM4OC43MTYtLjc5NSAxLjA2NS0xLjJoNDcuNzA2IDUzLjYxNXYyMC42MTNjMCAyLjU3OC0yLjE3MyA0Ljc1Ni00Ljc0NSA0Ljc1NmgtNzQuNjY1Yy00LjE0MyAwLTcuNSAzLjM1Ny03LjUgNy41czMuMzU3IDcuNSA3LjUgNy41aDcwLjI1OGM1LjkyOCAxMS4wMDMgMTEuMjYgMjQuNjk0IDEwLjk0MyA0Ni4zMjUtMTQuODM4LTIwLjYxMS0zOC44NTktMzMuODY0LTY2LjEyMS0zMy44NjQtMjEuODk0IDAtNDIuNDM4IDguNTg4LTU3Ljg0OSAyNC4xODMtMTMuNjc1IDEzLjgzNy0yMS44ODggMzEuNzk2LTIzLjU3OCA1MS4xOTJ6bTE5My45NTggNTQuNzIzYy0yMy40NDYgMC00My4yMi0xNi44OTMtNDguMDA0LTM5LjY5Nmg5Ni4wMDhjLTQuNzg1IDIyLjgwMS0yNC41NTkgMzkuNjk2LTQ4LjAwNCAzOS42OTZ6bTU2LjUyNC01NC42OTZoLTExMy4wNDYtMTAuNzc1YzMuNjgyLTMzLjkxMyAzMi4wMzgtNjAuMzc3IDY2LjM2Mi02MC4zNzcgMzAuMTM1IDAgNTUuNDQyIDE5Ljg3MSA2My44MjMgNDcuNjg4LjAyNy4wODguMDU0LjE3Ni4wODQuMjYzIDEuMTg1IDMuOTkxIDIuMDIyIDguMTQ1IDIuNDc1IDEyLjQyNnptNzEuOTI2LTE1NS4zOTVjMCA2LjcyMS01LjQ2MSAxMi4xODgtMTIuMTczIDEyLjE4OGgtOTguOTk4di0zOC43MzFoMTExLjE3MXptMC00MS41NDNoLTExMS4xNzF2LTE1Ljk1MWgxMTEuMTcxem0wLTMwLjk1MWgtMTExLjE3MXYtMTUuMjUyYzAtNi43MjEgNS40NjEtMTIuMTg4IDEyLjE3My0xMi4xODhoODYuODI1YzYuNzEyIDAgMTIuMTczIDUuNDY4IDEyLjE3MyAxMi4xODh6Ii8+PC9nPjwvc3ZnPg==" />
                 Delivery
                    </Button>

                    <Button className={props.theme.theme ? classes.darkTex : classes.tex} value="Moving" variant="contained" onClick={getTextContent} >
                        <img className={classes.img} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zMjgsMjE2Yy00LjQyNCwwLTgsMy41NzYtOCw4djEzNmMwLDQuNDI0LDMuNTc2LDgsOCw4czgtMy41NzYsOC04VjIyNEMzMzYsMjE5LjU3NiwzMzIuNDI0LDIxNiwzMjgsMjE2eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNTA0LDQxNmgtMjMuODMyYy00LjQyNCwwLTgsMy41NzYtOCw4czMuNTc2LDgsOCw4SDUwNGM0LjQyNCwwLDgtMy41NzYsOC04UzUwOC40MjQsNDE2LDUwNCw0MTZ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik01MDQsNDE2Yy00LjQyNCwwLTgsMy41NzYtOCw4djMyYzAsNC40MjQsMy41NzYsOCw4LDhzOC0zLjU3Niw4LTh2LTMyQzUxMiw0MTkuNTc2LDUwOC40MjQsNDE2LDUwNCw0MTZ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik04MCw0NDhjLTAuMDA4LDAtMC4wMTYsMC0wLjAyNCwwbC01NiwwLjE2OGMtNC40MjQsMC4wMTYtNy45OTIsMy42LTcuOTc2LDguMDI0YzAuMDE2LDQuNDE2LDMuNTkyLDcuOTc2LDgsNy45NzYNCgkJCWMwLjAwOCwwLDAuMDE2LDAsMC4wMjQsMGw1Ni0wLjE2OGM0LjQyNC0wLjAxNiw3Ljk5Mi0zLjYsNy45NzYtOC4wMjRDODcuOTg0LDQ1MS41Niw4NC40MDgsNDQ4LDgwLDQ0OHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQ5NiwzNzZoLThjLTQuNDI0LDAtOCwzLjU3Ni04LDhzMy41NzYsOCw4LDhoOGM0LjQyNCwwLDgtMy41NzYsOC04UzUwMC40MjQsMzc2LDQ5NiwzNzZ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00OTYsMzIwYy00LjQyNCwwLTgsMy41NzYtOCw4djk2YzAsNC40MjQsMy41NzYsOCw4LDhzOC0zLjU3Niw4LTh2LTk2QzUwNCwzMjMuNTc2LDUwMC40MjQsMzIwLDQ5NiwzMjB6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00NDgsMjE2SDMyOGMtNC40MjQsMC04LDMuNTc2LTgsOHMzLjU3Niw4LDgsOGgxMjBjNC40MjQsMCw4LTMuNTc2LDgtOFM0NTIuNDI0LDIxNiw0NDgsMjE2eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNTAzLjI2NCwzMjQuNjQ4bC00OC0xMDRjLTEuODQ4LTQuMDE2LTYuNTkyLTUuNzYtMTAuNjE2LTMuOTEyYy00LjAxNiwxLjg0OC01Ljc2LDYuNjA4LTMuOTEyLDEwLjYxNmw0OCwxMDQNCgkJCWMxLjM1MiwyLjkyOCw0LjI0OCw0LjY0OCw3LjI3Miw0LjY0OGMxLjEyLDAsMi4yNTYtMC4yMzIsMy4zNDQtMC43MzZDNTAzLjM2OCwzMzMuNDE2LDUwNS4xMTIsMzI4LjY1Niw1MDMuMjY0LDMyNC42NDh6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yNCw0MTZjLTQuNDI0LDAtOCwzLjU3Ni04LDh2MzIuNTA0YzAsNC40MjQsMy41NzYsOCw4LDhzOC0zLjU4NCw4LThWNDI0QzMyLDQxOS41NzYsMjguNDI0LDQxNiwyNCw0MTZ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik04LDMxMmMtNC40MjQsMC04LDMuNTc2LTgsOHYxMDRjMCw0LjQyNCwzLjU3Niw4LDgsOHM4LTMuNTc2LDgtOFYzMjBDMTYsMzE1LjU3NiwxMi40MjQsMzEyLDgsMzEyeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMzI4LDMxMkg4Yy00LjQyNCwwLTgsMy41NzYtOCw4czMuNTc2LDgsOCw4aDMyMGM0LjQyNCwwLDgtMy41NzYsOC04UzMzMi40MjQsMzEyLDMyOCwzMTJ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00OCw0MTZIOGMtNC40MjQsMC04LDMuNTc2LTgsOHMzLjU3Niw4LDgsOGg0MGM0LjQyNCwwLDgtMy41NzYsOC04UzUyLjQyNCw0MTYsNDgsNDE2eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMTI4LDQwMGMtMzAuODcyLDAtNTYsMjUuMTI4LTU2LDU2czI1LjEyOCw1Niw1Niw1NnM1Ni0yNS4xMjgsNTYtNTZTMTU4Ljg3Miw0MDAsMTI4LDQwMHogTTEyOCw0OTYNCgkJCWMtMjIuMDU2LDAtNDAtMTcuOTQ0LTQwLTQwYzAtMjIuMDU2LDE3Ljk0NC00MCw0MC00MGMyMi4wNTYsMCw0MCwxNy45NDQsNDAsNDBDMTY4LDQ3OC4wNTYsMTUwLjA1Niw0OTYsMTI4LDQ5NnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTEyOCw0MzJjLTEzLjIzMiwwLTI0LDEwLjc2OC0yNCwyNHMxMC43NjgsMjQsMjQsMjRzMjQtMTAuNzY4LDI0LTI0UzE0MS4yMzIsNDMyLDEyOCw0MzJ6IE0xMjgsNDY0Yy00LjQxNiwwLTgtMy41ODQtOC04DQoJCQljMC00LjQxNiwzLjU4NC04LDgtOHM4LDMuNTg0LDgsOEMxMzYsNDYwLjQxNiwxMzIuNDE2LDQ2NCwxMjgsNDY0eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMzkyLDQzMmMtMTMuMjMyLDAtMjQsMTAuNzY4LTI0LDI0czEwLjc2OCwyNCwyNCwyNHMyNC0xMC43NjgsMjQtMjRTNDA1LjIzMiw0MzIsMzkyLDQzMnogTTM5Miw0NjRjLTQuNDE2LDAtOC0zLjU4NC04LTgNCgkJCWMwLTQuNDE2LDMuNTg0LTgsOC04YzQuNDE2LDAsOCwzLjU4NCw4LDhDNDAwLDQ2MC40MTYsMzk2LjQxNiw0NjQsMzkyLDQ2NHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTM5Miw0MDBjLTMwLjg3MiwwLTU2LDI1LjEyOC01Niw1NnMyNS4xMjgsNTYsNTYsNTZzNTYtMjUuMTI4LDU2LTU2UzQyMi44NzIsNDAwLDM5Miw0MDB6IE0zOTIsNDk2DQoJCQljLTIyLjA1NiwwLTQwLTE3Ljk0NC00MC00MGMwLTIyLjA1NiwxNy45NDQtNDAsNDAtNDBjMjIuMDU2LDAsNDAsMTcuOTQ0LDQwLDQwQzQzMiw0NzguMDU2LDQxNC4wNTYsNDk2LDM5Miw0OTZ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zNDQuMiw0NDhIMTc2Yy00LjQyNCwwLTgsMy41NzYtOCw4czMuNTc2LDgsOCw4aDE2OC4yYzQuNDI0LDAsOC0zLjU3Niw4LThTMzQ4LjYyNCw0NDgsMzQ0LjIsNDQ4eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNTA0LDQ0OGgtNjRjLTQuNDI0LDAtOCwzLjU3Ni04LDhzMy41NzYsOCw4LDhoNjRjNC40MjQsMCw4LTMuNTc2LDgtOFM1MDguNDI0LDQ0OCw1MDQsNDQ4eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDk2LDMyMGgtOTZjLTQuNDI0LDAtOCwzLjU3Ni04LDhzMy41NzYsOCw4LDhoOTZjNC40MjQsMCw4LTMuNTc2LDgtOFM1MDAuNDI0LDMyMCw0OTYsMzIweiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDAwLDMyMGMtMTMuMjMyLDAtMjQtMTAuNzY4LTI0LTI0YzAtNC40MjQtMy41NzYtOC04LThzLTgsMy41NzYtOCw4YzAsMjIuMDU2LDE3Ljk0NCw0MCw0MCw0MGM0LjQyNCwwLDgtMy41NzYsOC04DQoJCQlTNDA0LjQyNCwzMjAsNDAwLDMyMHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTM2OCwyMTZjLTQuNDI0LDAtOCwzLjU3Ni04LDh2NzJjMCw0LjQyNCwzLjU3Niw4LDgsOHM4LTMuNTc2LDgtOHYtNzJDMzc2LDIxOS41NzYsMzcyLjQyNCwyMTYsMzY4LDIxNnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTM1MiwxMjBjLTQuNDI0LDAtOCwzLjU3Ni04LDh2MzJjMCw0LjQyNCwzLjU3Niw4LDgsOHM4LTMuNTc2LDgtOHYtMzJDMzYwLDEyMy41NzYsMzU2LjQyNCwxMjAsMzUyLDEyMHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQwLDEzNC44NTZjLTQuNDI0LDAtOCwzLjU3Ni04LDhWMzIwYzAsNC40MjQsMy41NzYsOCw4LDhzOC0zLjU3Niw4LThWMTQyLjg1NkM0OCwxMzguNDMyLDQ0LjQyNCwxMzQuODU2LDQwLDEzNC44NTZ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zMjgsMTM0Ljg1NmMtNC40MjQsMC04LDMuNTc2LTgsOFYzMjBjMCw0LjQyNCwzLjU3Niw4LDgsOHM4LTMuNTc2LDgtOFYxNDIuODU2QzMzNiwxMzguNDMyLDMzMi40MjQsMTM0Ljg1NiwzMjgsMTM0Ljg1Ng0KCQkJeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMzU2LjY0LDEyMS40ODhsLTE2OC0xMjBjLTIuNzg0LTEuOTg0LTYuNTEyLTEuOTg0LTkuMjk2LDBsLTE2OCwxMjBjLTMuNTkyLDIuNTY4LTQuNDMyLDcuNTY4LTEuODU2LDExLjE2DQoJCQljMi41NzYsMy41OTIsNy41NzYsNC40MzIsMTEuMTYsMS44NTZMMTg0LDE3LjgzMmwxNjMuMzUyLDExNi42NzJjMS40MDgsMS4wMDgsMy4wMzIsMS40OTYsNC42NCwxLjQ5Ng0KCQkJYzIuNTA0LDAsNC45NTItMS4xNjgsNi41MDQtMy4zNTJDMzYxLjA3MiwxMjkuMDQ4LDM2MC4yMzIsMTI0LjA0OCwzNTYuNjQsMTIxLjQ4OHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTM1Ni42NCwxNTMuNDg4bC0xNjgtMTIwYy0yLjc4NC0xLjk4NC02LjUxMi0xLjk4NC05LjI5NiwwbC0xNjgsMTIwYy0zLjU5MiwyLjU2OC00LjQzMiw3LjU2OC0xLjg1NiwxMS4xNg0KCQkJYzIuNTc2LDMuNTkyLDcuNTc2LDQuNDI0LDExLjE2LDEuODU2TDE4NCw0OS44MzJsMTYzLjM1MiwxMTYuNjcyYzEuNDA4LDEuMDA4LDMuMDMyLDEuNDk2LDQuNjQsMS40OTYNCgkJCWMyLjUwNCwwLDQuOTUyLTEuMTY4LDYuNTA0LTMuMzUyQzM2MS4wNzIsMTYxLjA0OCwzNjAuMjMyLDE1Ni4wNDgsMzU2LjY0LDE1My40ODh6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0xNiwxMjBjLTQuNDI0LDAtOCwzLjU3Ni04LDh2MzJjMCw0LjQyNCwzLjU3Niw4LDgsOHM4LTMuNTc2LDgtOHYtMzJDMjQsMTIzLjU3NiwyMC40MjQsMTIwLDE2LDEyMHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTIwOCwyMTZjLTQuNDI0LDAtOCwzLjU3Ni04LDh2OTZjMCw0LjQyNCwzLjU3Niw4LDgsOHM4LTMuNTc2LDgtOHYtOTZDMjE2LDIxOS41NzYsMjEyLjQyNCwyMTYsMjA4LDIxNnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTIwOCwyMTZoLTQ4Yy00LjQyNCwwLTgsMy41NzYtOCw4czMuNTc2LDgsOCw4aDQ4YzQuNDI0LDAsOC0zLjU3Niw4LThTMjEyLjQyNCwyMTYsMjA4LDIxNnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTE2MCwyMTZjLTQuNDI0LDAtOCwzLjU3Ni04LDh2OTZjMCw0LjQyNCwzLjU3Niw4LDgsOHM4LTMuNTc2LDgtOHYtOTZDMTY4LDIxOS41NzYsMTY0LjQyNCwyMTYsMTYwLDIxNnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTEyOCwxNzZINzJjLTQuNDI0LDAtOCwzLjU3Ni04LDh2NTZjMCw0LjQyNCwzLjU3Niw4LDgsOGg1NmM0LjQyNCwwLDgtMy41NzYsOC04di01NkMxMzYsMTc5LjU3NiwxMzIuNDI0LDE3NiwxMjgsMTc2eg0KCQkJIE0xMjAsMjMySDgwdi00MGg0MFYyMzJ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yOTYsMTc2aC01NmMtNC40MjQsMC04LDMuNTc2LTgsOHY1NmMwLDQuNDI0LDMuNTc2LDgsOCw4aDU2YzQuNDI0LDAsOC0zLjU3Niw4LTh2LTU2QzMwNCwxNzkuNTc2LDMwMC40MjQsMTc2LDI5NiwxNzZ6DQoJCQkgTTI4OCwyMzJoLTQwdi00MGg0MFYyMzJ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0xODQsMTA0Yy0xNy42NDgsMC0zMiwxNC4zNTItMzIsMzJzMTQuMzUyLDMyLDMyLDMyczMyLTE0LjM1MiwzMi0zMlMyMDEuNjQ4LDEwNCwxODQsMTA0eiBNMTg0LDE1Mg0KCQkJYy04LjgyNCwwLTE2LTcuMTc2LTE2LTE2czcuMTc2LTE2LDE2LTE2YzguODI0LDAsMTYsNy4xNzYsMTYsMTZDMjAwLDE0NC44MjQsMTkyLjgyNCwxNTIsMTg0LDE1MnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
                 Moving
                    </Button>

                    <Button className={props.theme.theme ? classes.darkTex : classes.tex} value="Gardening" variant="contained" onClick={getTextContent}>
                        <img className={classes.img} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnIGlkPSJPdXRfbGluZSIgZGF0YS1uYW1lPSJPdXQgbGluZSI+PHBhdGggZD0iTTQyOC4xMjk4OCwyMzQuODIwMDdsNTkuNzMtMTE0LjAzYTM4LjM3NTQsMzguMzc1NCwwLDAsMC02Ny45ODk3NC0zNS42MTAxMWwtNTkuNzMsMTE0LjAzYTM4LjEzOTc1LDM4LjEzOTc1LDAsMCwwLS4xNzAxNywzNS4yNEwzNDEuNDcsMjY5Ljc4bC0yNS44ODk4OS0xMi45NDAxOWE4LjAxNDI5LDguMDE0MjksMCwwLDAtMTAuNTMsMy4xOTAxOWwtNDkuMTQwMTQsODUuOTlhODguMDQyNTIsODguMDQyNTIsMCwwLDAtMTEuNTU5ODEsNDIuNUE0OC4wMjc4MSw0OC4wMjc4MSwwLDAsMCwyMjQsMzg0Yy0uMzQwMDksMC0uNjY5OTIuMDItMS4wMS4wM0EzMi4wNTU4MywzMi4wNTU4MywwLDAsMCwxOTIsMzYwVjI5Nmg4YTg4LjEwNCw4OC4xMDQsMCwwLDAsODgtODhWMTc2YTI0LjAzMTg5LDI0LjAzMTg5LDAsMCwwLTI0LTI0SDIwMmE4OS41NTM1Nyw4OS41NTM1NywwLDAsMC03Mi4yNywzNi4zNzk4OEE4OS41ODkzMyw4OS41ODkzMywwLDAsMCwxMDIsMTg0SDQwYTI0LjAzMTg5LDI0LjAzMTg5LDAsMCwwLTI0LDI0djMyYTg4LjEwNCw4OC4xMDQsMCwwLDAsODgsODhoNDB2MzMuMDFhMzIuMDUzNDUsMzIuMDUzNDUsMCwwLDAtMTQuNjI5ODgsOC4zODk4OUEzMi4wMDU2LDMyLjAwNTYsMCwwLDAsODguNzMsMzkzLjIyLDMxLjk4MzA3LDMxLjk4MzA3LDAsMCwwLDQ5LjAxLDQxNkgzMnYxNkg1NmE3Ljk5NzksNy45OTc5LDAsMCwwLDgtOCwxNiwxNiwwLDAsMSwzMiwwaDE2YTMxLjg1MTE5LDMxLjg1MTE5LDAsMCwwLTcuNjU5OTEtMjAuNzRBMTUuOTgwNjMsMTUuOTgwNjMsMCwwLDEsMTIwLDM4NGMuMzQwMDksMCwuNjY5OTIuMDMsMSwuMDVBMTYuMDQwMTEsMTYuMDQwMTEsMCwwLDEsMTM2LDQwMGgxNmEzMS45MTM1NywzMS45MTM1NywwLDAsMC04LjM5OTktMjEuNTkwMDksMTUuOTE1NzMsMTUuOTE1NzMsMCwwLDEsMTguNzk5OCwxLjQ0MDE5QTMxLjkwNjI0LDMxLjkwNjI0LDAsMCwwLDE2MCwzOTJoMTZhMTUuOTkzMTQsMTUuOTkzMTQsMCwwLDEsMzEuMi00Ljk2QTQ4LjA3Nzg0LDQ4LjA3Nzg0LDAsMCwwLDE3Niw0MzJoMTZhMzEuOTkxMjUsMzEuOTkxMjUsMCwwLDEsNTYuODMwMDgtMjAuMTY5OTJBMzIuMDI4NCwzMi4wMjg0LDAsMCwwLDIzMiw0NDBoMTZhMTYsMTYsMCwwLDEsMzIsMGgxNmEzMS44MTQsMzEuODE0LDAsMCwwLTIuOTM5OTQtMTMuMzcwMTIsMjQuMDA2NzQsMjQuMDA2NzQsMCwwLDEsMjEuODY5ODcuMDEwMjZBMzEuOTEyOTEsMzEuOTEyOTEsMCwwLDAsMzEyLDQ0MGgxNmExNiwxNiwwLDAsMSwzMiwwaDE2YTMxLjkwNjI0LDMxLjkwNjI0LDAsMCwwLTIuMzk5OS0xMi4xNDk5QTE1Ljk5MjIxLDE1Ljk5MjIxLDAsMCwxLDQwMCw0NDBhNy45OTc5LDcuOTk3OSwwLDAsMCw4LDhoNjRWNDMySDQxNC45OWEzMS45OTE4NSwzMS45OTE4NSwwLDAsMC00NS4zMTAwNi0yMC42MDk4Niw4OC4zOTQyMiw4OC4zOTQyMiwwLDAsMCw1LjI1LTkuNjEwMTFMNDE1LjI1LDMxNS4zNzk4OGE4LjAxMjQ2LDguMDEyNDYsMCwwLDAtMy42Njk5Mi0xMC41NEwzODEuNDM5OTQsMjg5Ljc3bDE4LjI2LTM0Ljg2MDExQTM4LjQ0NjMsMzguNDQ2MywwLDAsMCw0MjguMTI5ODgsMjM0LjgyMDA3Wk0xNzYsMzY0LjMxMDA2YTMyLjEzNDA2LDMyLjEzNDA2LDAsMCwwLTMuOTgsMi43MkEzMi4wMjYxMywzMi4wMjYxMywwLDAsMCwxNjAsMzYxLjAyVjMyMGE3Ljk5NzksNy45OTc5LDAsMCwwLTgtOEgxMzZhNzIuMDgyODEsNzIuMDgyODEsMCwwLDEtNzItNzJ2LThINDh2OGE4Ny44NjIzNiw4Ny44NjIzNiwwLDAsMCwzMi4wODAwOCw2Ny44OTk5QTcyLjExMDQ1LDcyLjExMDQ1LDAsMCwxLDMyLDI0MFYyMDhhOC4wMTA1OCw4LjAxMDU4LDAsMCwxLDgtOGg2MmE3NC4wODg1NSw3NC4wODg1NSwwLDAsMSw3NCw3NFpNMTQ0LjkxOTkyLDE5NC45MDk5MUE3My42MzE4LDczLjYzMTgsMCwwLDEsMjAyLDE2OGg2MmE4LjAxMDU4LDguMDEwNTgsMCwwLDEsOCw4djMyYTcyLjEwMjcsNzIuMTAyNywwLDAsMS00OC4xMjAxMiw2Ny45MDk5MUE4OC4yMDUzMyw4OC4yMDUzMywwLDAsMCwyNTYsMjA4di04SDI0MHY4YTcyLjI1NzY2LDcyLjI1NzY2LDAsMCwxLTQ4LDY3Ljg5OTlWMjc0QTkwLjA3ODM2LDkwLjA3ODM2LDAsMCwwLDE0NC45MTk5MiwxOTQuOTA5OTFabTI1Mi41NCwxMjAuNzYtMzcuMDMsNzkuMzUwMWE3MS45MjE0MSw3MS45MjE0MSwwLDAsMS04LjU3OTgzLDEzLjk2QTMxLjkwNjUzLDMxLjkwNjUzLDAsMCwwLDMyNS4yNCw0MTQuMTAwMSwzOS44NDk2MywzOS44NDk2MywwLDAsMCwzMDQsNDA4Yy0uMzU5ODYsMC0uNzIuMDItMS4wODAwOC4wM0wzMjcuMDIsMzYzLjgzMDA4bC0xNC4wNC03LjY2MDE2LTMxLjIyLDU3LjIzQTMxLjgxOTgsMzEuODE5OCwwLDAsMCwyNjUuNjAwMSw0MDguMDRhNDcuOTYxNTEsNDcuOTYxNTEsMCwwLDAtNC4yMjAyMi02LjE2OTkyQTcxLjk0OTY4LDcxLjk0OTY4LDAsMCwxLDI2OS44MTAwNiwzNTMuOTZMMzE1LjE4OTk0LDI3NC41NCwzMzQuMDQsMjgzLjk2LDMxOC45MDk5MSwzMTIuODUwMUEyMi4zNDIzNCwyMi4zNDIzNCwwLDEsMCwzNTguNDksMzMzLjU4OTg0TDM3NC4wMSwzMDMuOTVabS01My4xMzk4OSwxMC40OWE2LjM3NTUzLDYuMzc1NTMsMCwwLDEtNS42NTAxNSwzLjQxMDE2LDYuMjM5Miw2LjIzOTIsMCwwLDEtMy40OS0xLjA3MDA3LDYuMzExNjUsNi4zMTE2NSwwLDAsMS0yLjA5OTg1LTguMjJsMzguMDItNzIuNjAwMUEzOC4wNjc1OSwzOC4wNjc1OSwwLDAsMCwzNzkuMDIsMjUyLjI4YTM1LjU4NTI3LDM1LjU4NTI3LDAsMCwwLDMuMzM5ODQsMS4yNVptNDEtODguNTc5ODNhMjIuMzgzNzQsMjIuMzgzNzQsMCwwLDEtMTEtMzAuOTUwMmw1OS43My0xMTQuMDI5NzhhMjIuNDc5MzEsMjIuNDc5MzEsMCwwLDEsMjguNjI5ODgtMTAuMTgwMTgsMjIuMzgzNzQsMjIuMzgzNzQsMCwwLDEsMTEsMzAuOTUwMkw0MTMuOTUsMjI3LjM5OTlBMjIuNDc5MzEsMjIuNDc5MzEsMCwwLDEsMzg1LjMyMDA3LDIzNy41ODAwOFoiLz48L2c+PC9zdmc+Cg==" />
                    Gardening
                    </Button>

                    <Button className={props.theme.theme ? classes.darkTex : classes.tex} value="Office-Work" variant="contained" onClick={getTextContent} >
                        <img className={classes.img} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48ZyBpZD0id29ya2hvbWUtdmlydXMtY292aWQxOS1jb3JvbmF2aXJ1cy1ob21lIj48cGF0aCBkPSJNNDksMzdhMSwxLDAsMCwwLDEtMVYzNWExLDEsMCwwLDAtMiwwdjFBMSwxLDAsMCwwLDQ5LDM3WiIvPjxwYXRoIGQ9Ik00NSwzN2ExLDEsMCwwLDAsMS0xVjM1YTEsMSwwLDAsMC0yLDB2MUExLDEsMCwwLDAsNDUsMzdaIi8+PHBhdGggZD0iTTQ4LjI5MywzOS4yOTNhMS44MzEsMS44MzEsMCwwLDEtMi41ODYsMCwxLDEsMCwwLDAtMS40MTQsMS40MTQsMy44MzEsMy44MzEsMCwwLDAsNS40MTQsMCwxLDEsMCwwLDAtMS40MTQtMS40MTRaIi8+PHBhdGggZD0iTTU1LDQ3SDUyYTEsMSwwLDAsMS0xLTFWNDQuNzRBNy4wMSw3LjAxLDAsMCwwLDU0LDM5YTMuMDA5LDMuMDA5LDAsMCwwLDMtM1YzNWEyLjk4NiwyLjk4NiwwLDAsMC0xLTIuMjJWMjhhNSw1LDAsMCwwLTUtNVYyMS40NGwxLjU3Ljg0YTMuNDY2LDMuNDY2LDAsMCwwLDMuNTguMTcsMy41MTEsMy41MTEsMCwwLDAsLjItNi4wN0wzMC40OCwyLjEyYTEuMDIsMS4wMiwwLDAsMC0uOTYsMEwzLjU4LDE2LjQyYTMuNTE1LDMuNTE1LDAsMCwwLC4yNyw2LjAzLDMuNjA1LDMuNjA1LDAsMCwwLDEuNjguNDIsMy4yMzksMy4yMzksMCwwLDAsMS44Mi0uNTRMOSwyMS40NFY0Mkg3LjQ5YTMsMywwLDAsMC0yLjkzLDMuNjVsMy4xMiwxNEEyLjk3NiwyLjk3NiwwLDAsMCwxMC42LDYySDYxYTEsMSwwLDAsMCwxLTFWNTRBNy4wMDgsNy4wMDgsMCwwLDAsNTUsNDdabS0zLjQ4LDEuOTVhNi4wMDgsNi4wMDgsMCwwLDEtOS4wNCwwQTIuOTksMi45OSwwLDAsMCw0NSw0NnYtLjI5YTcuMDQyLDcuMDQyLDAsMCwwLDQsMFY0NkEyLjk5LDIuOTksMCwwLDAsNTEuNTIsNDguOTVaTTUyLDM5YTUsNSwwLDAsMS0xMCwwbC4wOC03YTUuMDksNS4wOSwwLDAsMCwyLjI3LS41NGwuNjUtLjM0LjU4LjMxQTUuMSw1LjEsMCwwLDAsNDcuOSwzMkg1MlptMy00djFhMSwxLDAsMCwxLTEsMVYzNEExLDEsMCwwLDEsNTUsMzVabS0xLTd2NGEyLjAwNiwyLjAwNiwwLDAsMC0yLTJINDcuOWEzLjA2OCwzLjA2OCwwLDAsMS0xLjM5LS4zNGwtMS4wNC0uNTVhMSwxLDAsMCwwLS45MiwwbC0xLjExLjU2QTMuMDI5LDMuMDI5LDAsMCwxLDQyLDMwYTIuMDA2LDIuMDA2LDAsMCwwLTIsMlYyOGEyLjAwNiwyLjAwNiwwLDAsMSwyLTJoMWExLDEsMCwwLDEsMSwxLDEsMSwwLDAsMCwyLDBWMjZhMSwxLDAsMCwxLDEtMWg0QTMuMDA5LDMuMDA5LDAsMCwxLDU0LDI4Wk02LjMzLDIwLjYyQTEuNSwxLjUsMCwwLDEsNCwxOS4zNmExLjQ4MSwxLjQ4MSwwLDAsMSwuNjEtMS4yMkwzMCw0LjE0LDU1LjMyLDE4LjFhMS41MTEsMS41MTEsMCwwLDEtLjExLDIuNTksMS41NjYsMS41NjYsMCwwLDEtMS42Mi0uMTJMMzAuNDcsOC4xMmEuOTguOTgsMCwwLDAtLjk0LDBaTTEwLjYsNjBhLjk4NS45ODUsMCwwLDEtLjk3LS43OGwtMy4xMS0xNGExLDEsMCwwLDEsLjE5LS44NUExLjAyMiwxLjAyMiwwLDAsMSw3LjQ5LDQ0SDI5LjRhLjk4NS45ODUsMCwwLDEsLjk3Ljc4TDMzLjc1LDYwWk0zMy41MSw0OS43bC0xLjE5LTUuMzVBMi45NzYsMi45NzYsMCwwLDAsMjkuNCw0MkgxMVYyMC44NWExLjA0MywxLjA0MywwLDAsMC0uMS0uNDNMMzAsMTAuMTQsNDksMjAuMzZWMjNINDdhMywzLDAsMCwwLTIuNTMsMS4zOUEyLjkzNCwyLjkzNCwwLDAsMCw0MywyNEg0MmE0LDQsMCwwLDAtNCw0djQuNzhBMi45ODYsMi45ODYsMCwwLDAsMzcsMzV2MWEzLjAwOSwzLjAwOSwwLDAsMCwzLDMsNy4wMSw3LjAxLDAsMCwwLDMsNS43NFY0NmExLDEsMCwwLDEtMSwxSDM5QTcuMDQxLDcuMDQxLDAsMCwwLDMzLjUxLDQ5LjdaTTQwLDM0djNhMSwxLDAsMCwxLTEtMVYzNUExLDEsMCwwLDEsNDAsMzRabTQsMjZIMzUuOGwtLjQ0LTJINDZBMi4wMDYsMi4wMDYsMCwwLDEsNDQsNjBabTE2LDBINTZWNTVhMSwxLDAsMCwwLTIsMHY1SDQ3LjQ0QTMuOTA2LDMuOTA2LDAsMCwwLDQ4LDU4VjU3YTEsMSwwLDAsMC0xLTFIMzQuOTFsLS43My0zLjI5QTUuMDIsNS4wMiwwLDAsMSwzOSw0OWgxLjFhNy45NTEsNy45NTEsMCwwLDAsMTMuOCwwSDU1YTUsNSwwLDAsMSw1LDVaIi8+PHBhdGggZD0iTTIwLDU1YTMsMywwLDEsMSwzLTNBMywzLDAsMCwxLDIwLDU1Wm0wLTRhMSwxLDAsMSwwLDEsMUExLDEsMCwwLDAsMjAsNTFaIi8+PHBhdGggZD0iTTE2LDM2aDUuNjQ3bDQuNywzLjc3OUExLDEsMCwwLDAsMjYuOTcsNDBhMSwxLDAsMCwwLDEtLjk5MkwyNy45OTIsMzZIMzJhMywzLDAsMCwwLDMtM1YyM2EzLDMsMCwwLDAtMy0zSDE2YTMsMywwLDAsMC0zLDNWMzNBMywzLDAsMCwwLDE2LDM2Wk0xNSwyM2ExLDEsMCwwLDEsMS0xSDMyYTEsMSwwLDAsMSwxLDFWMzNhMSwxLDAsMCwxLTEsMUgyN2ExLDEsMCwwLDAtMSwuOTkybC0uMDE1LDEuOTMyLTMuMzU4LTIuN0ExLDEsMCwwLDAsMjIsMzRIMTZhMSwxLDAsMCwxLTEtMVoiLz48cGF0aCBkPSJNMTgsMjZoMWExLDEsMCwwLDAsMC0ySDE4YTEsMSwwLDAsMCwwLDJaIi8+PHBhdGggZD0iTTIyLDI2aDhhMSwxLDAsMCwwLDAtMkgyMmExLDEsMCwwLDAsMCwyWiIvPjxwYXRoIGQ9Ik0yMiwyOWg4YTEsMSwwLDAsMCwwLTJIMjJhMSwxLDAsMCwwLDAsMloiLz48cGF0aCBkPSJNMTgsMjloMWExLDEsMCwwLDAsMC0ySDE4YTEsMSwwLDAsMCwwLDJaIi8+PHBhdGggZD0iTTE4LDMyaDFhMSwxLDAsMCwwLDAtMkgxOGExLDEsMCwwLDAsMCwyWiIvPjxwYXRoIGQ9Ik0yMiwzMmg4YTEsMSwwLDAsMCwwLTJIMjJhMSwxLDAsMCwwLDAsMloiLz48L2c+PC9zdmc+Cg==" />
                 Office-Work
                    </Button>

                    <Button className={props.theme.theme ? classes.darkTex : classes.tex} value="Cleaning" variant="contained" onClick={getTextContent} >
                         <img className={classes.img} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDgwIDQ4MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDgwIDQ4MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MTYsMzM2aC0xMi41MjhjLTguNzg2LDAuMDA4LTE3LjQ1LDIuMDUzLTI1LjMxMiw1Ljk3NmMtMTEuNDM5LDUuNjg2LTI0Ljg4MSw1LjY4Ni0zNi4zMiwwDQoJCQljLTQuNTYzLTIuMjM5LTkuNDA2LTMuODU0LTE0LjQtNC44TDM0My4wMzIsMjE2SDM2MGM0LjQxOCwwLDgtMy41ODIsOC04di0zMmMwLTQuNDE4LTMuNTgyLTgtOC04aC0zMnYtMjQNCgkJCWMwLTIuMTIyLTAuODQ0LTQuMTU2LTIuMzQ0LTUuNjU2TDI4OCwxMDAuNjg4Vjc1Ljg0bDEyLjEyOC05LjY5NmwyMC43MTIsNDEuNDMybDE0LjMyLTcuMTUyTDMxMi45MDQsNTUuOTJMMzIyLjgsNDhIMzUyDQoJCQljNC40MTgsMCw4LTMuNTgyLDgtOFY4YzAtNC40MTgtMy41ODItOC04LThoLTgwYy0zOS43NDQsMC4wNDgtNzEuOTUyLDMyLjI1Ni03Miw3MmMwLDQuNDE4LDMuNTgyLDgsOCw4aDE2djIwLjY4OGwtMjEuNjU2LDIxLjY1Ng0KCQkJYy0xLjUsMS41LTIuMzQ0LDMuNTM0LTIuMzQ0LDUuNjU2djQwaC0xNnYtNjRjLTAuMDEyLTAuOTkxLTAuMjEtMS45Ny0wLjU4NC0yLjg4OGMtMC4xNDYtMC4zMTEtMC4zMTItMC42MTMtMC40OTYtMC45MDQNCgkJCWMtMC4xOTItMC40MTktMC40MTctMC44MjMtMC42NzItMS4yMDhMMTUyLDYxLjJWOGMwLTQuNDE4LTMuNTgyLTgtOC04SDk2Yy00LjQxOCwwLTgsMy41ODItOCw4djUzLjJMNTcuNzUyLDk5DQoJCQljLTAuMjU1LDAuMzg1LTAuNDgsMC43ODktMC42NzIsMS4yMDhjLTAuMTg0LDAuMjkxLTAuMzUsMC41OTMtMC40OTYsMC45MDRDNTYuMjEsMTAyLjAzLDU2LjAxMiwxMDMuMDA5LDU2LDEwNHY2NEgyNA0KCQkJYy00LjQxOCwwLTgsMy41ODItOCw4djMyYzAsNC40MTgsMy41ODIsOCw4LDhoMTYuOTY4bDMxLjA5NiwyNDEuMDI0YzAuNTE1LDMuOTksMy45MTMsNi45NzcsNy45MzYsNi45NzZoMTg4LjMyDQoJCQljOS4wNzMsMTAuMTcsMjIuMDUxLDE1Ljk5LDM1LjY4LDE2aDEyLjUyOGM4Ljc4Ni0wLjAwOCwxNy40NS0yLjA1MywyNS4zMTItNS45NzZjMTEuNDM5LTUuNjg2LDI0Ljg4MS01LjY4NiwzNi4zMiwwDQoJCQljNy44NjIsMy45MjMsMTYuNTI2LDUuOTY4LDI1LjMxMiw1Ljk3Nkg0MTZjMjYuNDk5LTAuMDI2LDQ3Ljk3NC0yMS41MDEsNDgtNDh2LTQ4QzQ2My45NzQsMzU3LjUwMSw0NDIuNDk5LDMzNi4wMjYsNDE2LDMzNnoNCgkJCSBNMzI4LDE2aDE2djE2aC0xNlYxNnogTTM1MiwxODR2MTZIMjQwdi0xNkgzNTJ6IE0yMTYuNTY4LDY0YzQuMDEzLTI3LjUzNSwyNy42MDYtNDcuOTY1LDU1LjQzMi00OGg0MHYyMC4xNkwyNzcuMTkyLDY0SDIxNi41Njh6DQoJCQkgTTI3Miw4MHYxNmgtMzJWODBIMjcyeiBNMjE2LDEzMS4zMTJMMjM1LjMxMiwxMTJoNDEuMzc2TDMxMiwxNDcuMzEyVjE2OGgtOTZWMTMxLjMxMnogTTIwOCwxODRoMTZ2NTYNCgkJCWMtMC4wMTcsMy4wNDcsMS42OTksNS44MzgsNC40MjQsNy4ybDQ4LDI0YzIuMzQxLDEuMTU0LDQuMTE1LDMuMjA1LDQuOTIsNS42ODhjMC44MjksMi42NjUsMC41NDEsNS41NTItMC44LDgNCgkJCWMtMi4zMDIsNC42MTktNy45MTIsNi40OTctMTIuNTMxLDQuMTk0Yy0wLjAwNy0wLjAwMy0wLjAxNC0wLjAwNy0wLjAyMS0wLjAxbC0zMi40OC0xNi4yNGMtMy45Ny0xLjk0LTguNzYtMC4yOTQtMTAuNywzLjY3Ng0KCQkJYy0wLjUzMSwxLjA4OC0wLjgwOSwyLjI4Mi0wLjgxMiwzLjQ5MnY4MGMwLDguODM3LTcuMTYzLDE2LTE2LDE2di03MmgtMTZ2NzJoLTE2di03MmgtMTZ2NzJoLTE2di03MmgtMTZ2NzINCgkJCWMtOC44MzcsMC0xNi03LjE2My0xNi0xNlYxODRIMjA4eiBNMTA0LDE2aDMydjQwaC0zMlYxNnogTTk5Ljg0LDcyaDQwLjMybDE5LjIsMjRIODAuNjRMOTkuODQsNzJ6IE03MiwxMTJoOTZ2NTZINzJWMTEyeiBNMzIsMjAwDQoJCQl2LTE2aDY0djE2SDMyeiBNMjU2LDM4NHY0OGMwLjAxNCw1LjQ1NCwwLjk2MSwxMC44NjUsMi44LDE2SDg3LjAzMkw1Ny4wOTYsMjE2SDk2djE0NGMwLDE3LjY3MywxNC4zMjcsMzIsMzIsMzJoODANCgkJCWMxNy42NzMsMCwzMi0xNC4zMjcsMzItMzJ2LTY3LjA1NmwyMC44OTYsMTAuNDQ4YzEyLjYyNyw2LjIzMiwyNy45MTUsMS4wNDgsMzQuMTQ3LTExLjU3OWMwLjAyNi0wLjA1MiwwLjA1MS0wLjEwNSwwLjA3Ny0wLjE1Nw0KCQkJYzMuMDk5LTYuMTQzLDMuNjI2LTEzLjI2OCwxLjQ2NC0xOS44Yy0yLjEzMi02LjUzNS02LjgwMi0xMS45MzctMTIuOTYtMTQuOTkyTDI0MCwyMzUuMDU2VjIxNmg4Ni45MDRsLTE1LjQ4OCwxMjBIMzA0DQoJCQlDMjc3LjUwMSwzMzYuMDI2LDI1Ni4wMjYsMzU3LjUwMSwyNTYsMzg0eiBNNDQ4LDQzMmMwLDE3LjY3My0xNC4zMjcsMzItMzIsMzJoLTEyLjUyOGMtNi4zMDEtMC4wMDktMTIuNTE0LTEuNDc2LTE4LjE1Mi00LjI4OA0KCQkJYy0xNS45NS03LjkyNS0zNC42OS03LjkyNS01MC42NCwwYy01LjYzOCwyLjgxMi0xMS44NTEsNC4yNzktMTguMTUyLDQuMjg4SDMwNGMtMTcuNjczLDAtMzItMTQuMzI3LTMyLTMydi0xMi4zMg0KCQkJYzguNzczLDcuOTI3LDIwLjE3NiwxMi4zMTcsMzIsMTIuMzJoMTIuNTI4YzguNzg2LTAuMDA4LDE3LjQ1LTIuMDUzLDI1LjMxMi01Ljk3NmMxMS40MzktNS42ODYsMjQuODgxLTUuNjg2LDM2LjMyLDANCgkJCWM3Ljg2MiwzLjkyMywxNi41MjYsNS45NjgsMjUuMzEyLDUuOTc2SDQxNmMxMS44MjQtMC4wMDMsMjMuMjI3LTQuMzkzLDMyLTEyLjMyVjQzMnogTTQxNiw0MTZoLTEyLjUyOA0KCQkJYy02LjMwMS0wLjAwOS0xMi41MTQtMS40NzYtMTguMTUyLTQuMjg4Yy0xNS45NS03LjkyNS0zNC42OS03LjkyNS01MC42NCwwYy01LjYzOCwyLjgxMi0xMS44NTEsNC4yNzktMTguMTUyLDQuMjg4SDMwNA0KCQkJYy0xNy42NzMsMC0zMi0xNC4zMjctMzItMzJjMC0xNy42NzMsMTQuMzI3LTMyLDMyLTMyaDEyLjUyOGM2LjMwMSwwLjAwOSwxMi41MTQsMS40NzYsMTguMTUyLDQuMjg4DQoJCQljMTUuOTUxLDcuOTIsMzQuNjg5LDcuOTIsNTAuNjQsMGM1LjYzOC0yLjgxMiwxMS44NTEtNC4yNzksMTguMTUyLTQuMjg4SDQxNmMxNy42NzMsMCwzMiwxNC4zMjcsMzIsMzINCgkJCUM0NDgsNDAxLjY3Myw0MzMuNjczLDQxNiw0MTYsNDE2eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cmVjdCB4PSI0MDgiIHk9IjM2OCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxyZWN0IHg9IjMyOCIgeT0iMzY4IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHJlY3QgeD0iMjk2IiB5PSIzNzYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cmVjdCB4PSIzNzYiIHk9IjM3NiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
                 Cleaning
                    </Button>

                    <Button className={props.theme.theme ? classes.darkTex : classes.tex} value="Other" variant="contained" onClick={getTextContent} >
                        Other..
                    </Button>
                </div>
            </div>
        )

    }



}))
export default AddGigCategory;