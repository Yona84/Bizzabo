import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  FlexBoxWrapper,
  FlexBox,
  ArtistName,
  ArtistImage,
  SubTitle,
  ListOfEvents,
  Event,
  FlexBoxWithSelf,
  FavEvent,
} from "../styles";
import { ArtistEventsProps, ArtistInfoProps } from "../types";
import star from "../icons/star.svg";

interface ArtistMetaInfoProps {
  artistInfo: ArtistInfoProps | null | undefined;
  artistEvents: ArtistEventsProps[] | null | undefined;
  setEventData: (event: ArtistEventsProps) => void;
  eventsFavIds: string[];
}

const ArtistMetaInfo: React.FC<ArtistMetaInfoProps> = ({
  artistInfo,
  artistEvents,
  setEventData,
  eventsFavIds,
}) => {
  const [favEvents, setFavEvents] = useState<
    ArtistEventsProps[] | null | undefined
  >([]);

  const showArtistEvents = useMemo(() => {
    if (
      artistEvents &&
      artistEvents.length > 0 &&
      Array.isArray(artistEvents)
    ) {
      return true;
    }
  }, [artistEvents]);

  useEffect(() => {
    let ids = JSON.parse(localStorage.getItem("eventsFavIds") || "[]");
    if (showArtistEvents && ids) {
      setFavEvents(artistEvents?.filter((event) => ids.includes(event.id)));
    }
  }, [artistEvents, showArtistEvents, eventsFavIds]);

  const handleEventData = useCallback(
    (event) => {
      setEventData(event);
    },
    [setEventData]
  );
  return (
    <FlexBoxWrapper>
      <FlexBox>
        <ArtistName> {artistInfo?.name}</ArtistName>
        {artistInfo?.image_url && (
          <ArtistImage src={artistInfo?.image_url} alt="artist_image" />
        )}
      </FlexBox>
      <FlexBoxWithSelf>
        <SubTitle> Artist Events </SubTitle>
        <ListOfEvents>
          {showArtistEvents ? (
            artistEvents?.map((event) => {
              return (
                <FlexBox key={event.id}>
                  <Event onClick={() => handleEventData(event)}>
                    {event.venue.name}
                  </Event>
                </FlexBox>
              );
            })
          ) : (
            <span>No Events For This Artist</span>
          )}
        </ListOfEvents>
      </FlexBoxWithSelf>
      <FlexBoxWithSelf>
        <SubTitle> User Favorite Events </SubTitle>
        <ListOfEvents>
          {favEvents ? (
            favEvents.map((event) => {
              return (
                <FlexBox key={event.id}>
                  <FlexBox style={{ flexDirection: "row" }}>
                    <img src={star} alt="star" />
                    <FavEvent style={{ cursor: "auto" }}>
                      {event.venue.name}
                    </FavEvent>
                  </FlexBox>
                </FlexBox>
              );
            })
          ) : (
            <span>No Favorite For This Artist</span>
          )}
        </ListOfEvents>
      </FlexBoxWithSelf>
    </FlexBoxWrapper>
  );
};

export default ArtistMetaInfo;
