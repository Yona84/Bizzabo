import { DriversData, TasksData } from "../types";

export const mockDrivers: DriversData[] = [
  {
    _id: "5ff70abd2da4b5292820e25c",
    picture: "https://picsum.photos/54/50",
    age: 32,
    name: {
      first: "Leigh",
      last: "Lang",
    },
    latitude: "31.01",
    longitude: "31",
  },
  {
    _id: "5ff70abd11c621e8f83acdec",
    picture: "https://picsum.photos/51/50",
    age: 33,
    name: {
      first: "Gay",
      last: "Anderson",
    },
    latitude: "31.02",
    longitude: "31",
  },
  {
    _id: "5ff70abd1d53da8eda8dcd4e",
    picture: "https://picsum.photos/50/50",
    age: 34,
    name: {
      first: "Robles",
      last: "Terrell",
    },
    latitude: "31",
    longitude: "31.01",
  },
  {
    _id: "5ff70abd5e28d5866f80f4ef",
    picture: "https://picsum.photos/52/50",
    age: 35,
    name: {
      first: "Leann",
      last: "Kirby",
    },
    latitude: "31",
    longitude: "31.02",
  },
  {
    _id: "5ff70abdcb257026b98e3aca",
    picture: "https://picsum.photos/53/50",
    age: 36,
    name: {
      first: "Salazar",
      last: "Dorsey",
    },
    latitude: "31.01",
    longitude: "31.01",
  },
];

export const mockTasks: TasksData[] = [
  {
    _id: "5ff70c582eb0e4a27424507a",
    title: "Task 1",
    latitude: "-78.743019",
    longitude: "66.527577",
    scheduled_for: "Monday, January 4, 2021 3:18 PM",
    assignedToDriver: "Leann",
  },
  {
    _id: "5ff70c582a11663ac6c6ced6",
    title: "Task 2",
    latitude: "-36.722265",
    longitude: "-117.529864",
    scheduled_for: "Tuesday, January 5, 2021 6:12 AM",
    assignedToDriver: "Salazar",
  },
  {
    _id: "5ff70c5893d20c10568a156e",
    title: "Task 3",
    latitude: "12.687367",
    longitude: "-4.215548",
    scheduled_for: "Thursday, January 7, 2021 9:44 AM",
    assignedToDriver: "Gay",
  },
  {
    _id: "5ff70c583cbeaf85c9f07b90",
    title: "Task 4",
    latitude: "-70.423142",
    longitude: "-109.810364",
    scheduled_for: "Saturday, January 2, 2021 5:35 PM",
    assignedToDriver: "Robles",
  },
  {
    _id: "5ff70c588a0484168c8b204a",
    title: "Task 5",
    latitude: "-53.757865",
    longitude: "-165.927305",
    scheduled_for: "Tuesday, January 5, 2021 12:14 PM",
    assignedToDriver: "Leigh",
  },
];
