import React from "react";

import {
  Sales,
  InfoPanel,
  NotesData,
  NotesUploads,
  SavedProcess,
  PercentualData,
} from "./styles";

export default function InformationPainel() {
  return (
    <InfoPanel>
      <Sales>
        <strong>Sales</strong>
        <p>
          You had <strong>0 uploads</strong> and <strong>0 lines</strong> added.
        </p>
      </Sales>

      <NotesData>
        <NotesUploads>
          <PercentualData>0%</PercentualData>
          <SavedProcess>upload success</SavedProcess>
        </NotesUploads>
        <NotesUploads>
          <PercentualData>0%</PercentualData>
          <SavedProcess>lines saved</SavedProcess>
        </NotesUploads>
      </NotesData>
    </InfoPanel>
  );
}
