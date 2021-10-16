// Imports
import { createUseStyles } from "react-jss";
import { minWidth } from "../theme";

// Constants
const useStyles = createUseStyles(getStyles());

//
// Component
//
const TuningSet = ({
  name, 
  notes, 
  makeSynthButton, 
}) => {
  const classes = useStyles();
  return (
    <div className={classes.TuningSet}>
      <h2>{name}</h2>
      <div className={classes.notesContainter}>
        {notes.map((note, i) => {
          const { name, play } = note;
          return makeSynthButton({ key: i, name, play })
        })}
      </div>
    </div>
  );
};

//
// Styles
//
function getStyles() {
  return {
    TuningSet: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    notesContainter: {
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
    },
    [`@media (min-width: ${minWidth}px)`]: {
      notesContainter: {
        extend: "notesContainter",
        flexWrap: "nowrap",
      }
    }
  };
}

// Exports
export default TuningSet;