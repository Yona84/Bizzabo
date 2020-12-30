import React, { useCallback } from "react";
import {
  FlexBox,
  SubTitle,
  Title,
  InfoSpan,
  FlexRow,
  StyledButton,
} from "../styles";
import { ArtistEventsProps } from "../types";
import moment from "moment";
import MapContainer from "./MapContainer";

interface EventMetaInfoProps {
  eventData: ArtistEventsProps | null;
  setEventsFavIds: (value: string[]) => void;
}

const EventMetaInfo: React.FC<EventMetaInfoProps> = ({
  eventData,
  setEventsFavIds,
}) => {
  const handleSetEventToFavorite = useCallback(() => {
    const castedEventData = eventData as ArtistEventsProps;
    let ids = JSON.parse(localStorage.getItem("eventsFavIds") || "[]");
    let newEventsFavIds = [...ids, castedEventData.id];
    setEventsFavIds(newEventsFavIds);
    localStorage.setItem("eventsFavIds", JSON.stringify(newEventsFavIds));
  }, [eventData]);

  return (
    <FlexBox style={{ width: "100%", marginTop: 100 }}>
      <Title> Event Info </Title>
      <SubTitle> Description </SubTitle>
      <InfoSpan>{eventData?.description || "None"}</InfoSpan>
      <SubTitle> Date </SubTitle>
      <InfoSpan>{moment(eventData?.datetime).format("lll") || "None"}</InfoSpan>
      <SubTitle> Special offers </SubTitle>
      {eventData?.offers.map((offer, index) => {
        return (
          <React.Fragment key={index}>
            <FlexRow>
              <span style={{ fontWeight: 600 }}>Status: </span>
              <InfoSpan>{offer.status}</InfoSpan>
            </FlexRow>
            <FlexRow>
              <span style={{ fontWeight: 600 }}>Type: </span>
              <InfoSpan>{offer.type}</InfoSpan>
            </FlexRow>
          </React.Fragment>
        );
      })}
      <StyledButton
        onClick={handleSetEventToFavorite}
        disabled={JSON.parse(
          localStorage.getItem("eventsFavIds") || "[]"
        ).includes(eventData?.id || "")}
        variant="contained"
      >
        Add To Favorites
      </StyledButton>
      <MapContainer
        lat={Number(eventData?.venue.latitude)}
        lng={Number(eventData?.venue.longitude)}
      />
    </FlexBox>
  );
};

export default EventMetaInfo;
