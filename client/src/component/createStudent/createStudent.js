import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      textAlign: "center",
    },
  },
  head: {
    color: "Red",
    justifyContent: "center",
    margin: "20px",
    textAlign: "center",
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div>
      <h2 className={classes.head}>Create a Student</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="RegistrationNumber"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Grade" variant="outlined" />
        <TextField id="outlined-basic" label="Section" variant="outlined" />
        <Button variant="contained" color="secondary">
          Crete Students
        </Button>
      </form>
    </div>
  );
}
