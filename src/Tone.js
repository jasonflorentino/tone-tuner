import * as Tone from "tone";

export const NOTE_VALUE = "4n";
export const NOTE_INTERVAL = 2000; // 2 seconds

const synth = new Tone.Synth().toDestination();

export const tuningsSets = [
  {
    name: "Standard Tuning",
    notes: [
      { name: "E2" },
      { name: "A2" },
      { name: "D3" },
      { name: "G3" },
      { name: "B3" },
      { name: "E4" },
    ],
  }, {
    name: "1/2 Step Down",
    notes: [
      { name: "Eb2" },
      { name: "Ab2" },
      { name: "Db3" },
      { name: "Gb3" },
      { name: "Bb3" },
      { name: "Eb4" },
    ],
  }, {
    name: "1 Step Down",
    notes: [
      { name: "D2" },
      { name: "G2" },
      { name: "C3" },
      { name: "F3" },
      { name: "A3" },
      { name: "D4" },
    ],
  },
  {
    name: "Uke",
    notes: [
      { name: "G4" },
      { name: "C4" },
      { name: "E4" },
      { name: "A4" },
    ],
  },
];

for (const tuning of tuningsSets) {
  addPlayFunction(tuning);
}

function addPlayFunction(tuning) {
  for (const note of tuning.notes) {
    note.play = () => synth.triggerAttackRelease(note.name, NOTE_VALUE);
  }
}

export default Tone;

