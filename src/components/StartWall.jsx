// Imports
import { createUseStyles } from "react-jss";
import { colors } from "../theme";

// Constants
const useStyles = createUseStyles(getStyles());

//
// Coponent
//
const StartWall = ({ onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.StartWall} onClick={onClick}>
      <h1 className={classes.heading}>Open Tuner</h1>
    </div>
  );
};

//
// Styles
//
function getStyles() {
  return {
    StartWall: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.black,
      color: "white",
    },
    heading: {
      padding: "1.5rem",
      border: "1px solid white",
      borderRadius: ".5rem",
      cursor: "pointer",
    },
  };
}

// Exports
export default StartWall;
