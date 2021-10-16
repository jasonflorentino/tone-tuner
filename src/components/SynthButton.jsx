// Library Imports
import { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";

// Local Imports
import { colors, minWidth } from "../theme";
import { NOTE_INTERVAL } from "../Tone";

// Constants
const useStyles = createUseStyles(getStyles());

//
// Component
//
const SynthButton = ({
  currentlyPlaying, 
  setCurrentlyPlaying, 
  name, 
  play,
}) => {
  const classes = useStyles();
  const [clicked, setClicked] = useState(false);

  /**
   * Handles setting this local `clicked` state,
   * playing the first tone, and setting or 
   * un-setting the global currently playing value
   */
  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
      play();
      setCurrentlyPlaying(name);
    } else {
      setClicked(false);
      setCurrentlyPlaying(null);
    }
  };

  /**
   * Creates looped playback when this button's
   * name is the same value that's set in the global 
   * state for `currentlyPlaying`
   */
  useEffect(() => {
    let interval;
    if (name === currentlyPlaying) {
      interval = setInterval(play, NOTE_INTERVAL);
    } else {
      clearInterval(interval);
      if (clicked) setClicked(false);
    }

    return () => clearInterval(interval);
  }, [name, currentlyPlaying, play, clicked]);

  const buttonClass = clicked ? classes.SynthButton_active : classes.SynthButton;
  
  return (
    <button className={buttonClass} onClick={handleClick}>
      {name}
    </button>
  );
};

//
// Styles
//
function getStyles() {
  return {
    SynthButton: {
      width: "45%",
      height: "5rem",
      padding: "1rem",
      margin: ".5rem",
      borderRadius: ".5rem",
      border: "2px dashed white",
      background: "none",
      color: "white",
      fontSize: "1rem",
      fontWeight: "bold",
      "&:hover": {
        border: "2px solid white",
        cursor: "pointer",
      },
    },
    SynthButton_active: {
      extend: "SynthButton",
      backgroundColor: "white",
      color: colors.black,
    },
    [`@media (min-width: ${minWidth}px)`]: {
      SynthButton: {
        extend: "SynthButton",
        width: "100%"
      },
      SynthButton_active: {
        extend: "SynthButton_active",
        width: "100%"
      },
    }
  };
}

// Exports
export default SynthButton;
