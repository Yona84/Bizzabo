import React, { useCallback, useState, ChangeEvent, useMemo } from "react";
import { useData } from "./hooks/useData";
import { TextField } from "@material-ui/core";
import { ArtistEventsProps } from "./types";
import ArtistInfo from "./components/ArtistMetaInfo";
import {
  Wrapper,
  TextFieldWrapper,
  Title,
  LinearProgressWithColor,
} from "./styles";
import EventMetaInfo from "./components/EventMetaInfo";

const App: React.FC = () => {
  const [artistName, setArtistName] = useState<string>("");
  const [eventData, setEventData] = useState<ArtistEventsProps | null>();
  const [eventsFavIds, setEventsFavIds] = useState<string[]>([]);

  const { artistInfo, artistEvents, isLoading } = useData(artistName);

  const shotArtistInfo = useMemo(() => {
    if (artistInfo && !artistInfo.hasOwnProperty("error")) {
      return true;
    }
  }, [artistInfo]);

  const handleAddress = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setArtistName(e.target.value);
      setEventData(null);
    },
    [setArtistName]
  );

  return (
    <Wrapper>
      <Title style={{ margin: "auto" }}> Artist Info </Title>
      <TextFieldWrapper>
        <TextField
          label="Enter Artist Name"
          value={artistName}
          onChange={handleAddress}
          fullWidth
          helperText={
            <span>Recommended band with proper events: Maroon 5</span>
          }
        />
      </TextFieldWrapper>
      {isLoading ? (
        <LinearProgressWithColor />
      ) : (
        shotArtistInfo && (
          <ArtistInfo
            artistInfo={artistInfo}
            artistEvents={artistEvents}
            setEventData={setEventData}
            eventsFavIds={eventsFavIds}
          />
        )
      )}
      {eventData && (
        <EventMetaInfo
          eventData={eventData}
          setEventsFavIds={setEventsFavIds}
        />
      )}
    </Wrapper>
  );
};

export default App;
