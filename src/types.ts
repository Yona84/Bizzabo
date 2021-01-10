export interface DriversData {
  _id: string;
  name: Name;
  latitude: string;
  longitude: string;
  picture: string;
  age: number;
}

interface Name {
  first: string;
  last: string;
}

export interface TasksData {
  _id: string;
  title: string;
  latitude: string;
  longitude: string;
  scheduled_for: string;
  assignedToDriver: string;
}
