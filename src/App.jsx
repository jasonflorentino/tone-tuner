// Library Imports
import { useState } from "react";
import { createUseStyles } from "react-jss";

// Local Imports
import Tone, { tuningsSets } from "./Tone";
import { colors } from "./theme";
import SynthButton from "./components/SynthButton";
import TuningSet from "./components/TuningSet"; 
import StartWall from "./components/StartWall";
import Header from "./components/Header";

// Constants
const useStyles = createUseStyles(getStyles());

//
// Component
//
function App() {
  const classes = useStyles();
  const [ready, setReady] = useState(false);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  // The user needs to interact so we can start Tone JS
  const startAudio = async () => {
    await Tone.start();
    setReady(true);
  };

  // Compose SynthButton with currentlyPlaying state
  const makeSynthButton = (props) => (
    <SynthButton 
      currentlyPlaying={currentlyPlaying} 
      setCurrentlyPlaying={setCurrentlyPlaying} 
      {...props}
    />
  );
  
  return !ready ? (
    <StartWall onClick={startAudio} />
  ) : (
    <div className={classes.App}>
      <Header
        currentlyPlaying={currentlyPlaying}
        setCurrentlyPlaying={setCurrentlyPlaying}
      />
      {tuningsSets.map((props, i) => (
        <TuningSet key={i} makeSynthButton={makeSynthButton} {...props} />
      ))}
    </div>
  );
}

//
// Styles
//
function getStyles() {
  return {
    App: {
      width: "100vw",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      padding: "1rem",
      alignItems: "center",
      backgroundColor: colors.black,
      color: "white",
    },
  };
}

// Exports
export default App;
