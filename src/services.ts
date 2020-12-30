import { ArtistInfoProps, ArtistEventsProps } from "./types";

const API_URL = "https://rest.bandsintown.com/artists";

// Some Random Number
const APP_ID = 123;

export const getArtistInfo = async (
  artistName: string,
  setIsLoading: (value: boolean) => void
): Promise<ArtistInfoProps | undefined> => {
  setIsLoading(true);
  try {
    const response = await fetch(`${API_URL}/${artistName}?app_id=${APP_ID}`);
    return await response.json();
  } catch (e) {
    console.log("e", e);
    setIsLoading(false);
  }
};

export const getArtistEvents = async (
  artistName: string,
  setIsLoading: (value: boolean) => void
): Promise<ArtistEventsProps[] | undefined> => {
  setIsLoading(true);
  try {
    const response = await fetch(
      `${API_URL}/${artistName}/events?app_id=${APP_ID}`
    );
    return await response.json();
  } catch (e) {
    console.log("e", e);
    setIsLoading(false);
  }
};
