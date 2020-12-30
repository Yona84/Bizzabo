import { useEffect, useState } from "react";
import { getArtistInfo, getArtistEvents } from "../services";
import { ArtistInfoProps, ArtistEventsProps } from "../types";

export function useData(artistName: string) {
  const [artistInfo, setArtistInfo] = useState<ArtistInfoProps | null>();
  const [artistEvents, setArtistEvents] = useState<
    ArtistEventsProps[] | null
  >();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (artistName !== "") {
      getArtistInfo(artistName, setIsLoading)
        .then((artistInfo) => {
          setArtistInfo(artistInfo);
        })
        .then(() => getArtistEvents(artistName, setIsLoading))
        .then((artistsEvents) => {
          setArtistEvents(artistsEvents);
          setIsLoading(false);
        });
    } else {
      setArtistInfo(null);
      setArtistEvents(null);
    }
  }, [setArtistInfo, artistName, setIsLoading]);

  return {
    artistInfo,
    artistEvents,
    isLoading,
  };
}
