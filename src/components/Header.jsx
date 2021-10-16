// Imports
import { createUseStyles } from "react-jss";
import { colors } from "../theme";

// Constants
const useStyles = createUseStyles(getStyles());

//
// Component
//
const Header = ({ currentlyPlaying, setCurrentlyPlaying }) => {
  const classes = useStyles();

  return (
    <div className={classes.HeaderContainer}>
      <h1>Synth Notes</h1>
      <button 
        className={classes.button}
        disabled={!currentlyPlaying} 
        onClick={() => setCurrentlyPlaying(null)}
      >
        {!currentlyPlaying ? "Pick a note!" : "Stop"}
      </button>
    </div>
  )
}

//
// Styles
//
function getStyles() {
  return {
    HeaderContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    StartWall: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.black,
      color: "white",
    },
    button: {
      height: "5rem",
      padding: "1rem",
      margin: ".5rem",
      borderRadius: ".5rem",
      border: "2px dashed white",
      background: "none",
      color: "white",
      fontSize: "1rem",
      fontWeight: "bold",
      cursor: "pointer",
      "&:disabled": {
        border: "2px dashed grey",
        cursor: "not-allowed",
      },
      "&:disabled:hover": {
        border: "2px dashed grey",
        cursor: "not-allowed",
      },
      "&:hover": {
        border: "2px solid white",
        cursor: "pointer",
      },
    },
  };
}

// Exports
export default Header
