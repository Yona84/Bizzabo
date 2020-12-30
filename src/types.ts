export interface ArtistInfoProps {
  image_url?: string;
  name: string;
  favEvents?: string[];
}

export interface ArtistEventsProps {
  venue: EventVenue;
  id: string;
  description: string;
  lineup: string[];
  datetime: string;
  offers: Offer[];
}

interface Offer {
  status: string;
  type: string;
}

interface EventVenue {
  city: string;
  country: string;
  latitude: string;
  location: string;
  longitude: string;
  name: string;
}
