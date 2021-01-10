import React from "react";
import useData from "./hooks/useData";
import { TextField, MenuItem } from "@material-ui/core";
import { Wrapper, FlexRow, FlexColumn, Header, StyledSelect } from "./styles";
import MaterialTable from "material-table";
import { tableIcons } from "./tableIcons";
import MapContainer from "./components/MapContainer";
import Card from "./components/Card";
import { TasksData } from "./types";
import { mockDrivers } from "./mocks/mocks";

const columns = (
  tasksData: TasksData[],
  assignTaskToDrivers: (name: string, id: string) => void
) => [
  { title: "Title", field: "title" },
  { title: "Latitude", field: "latitude" },
  { title: "Longitude", field: "longitude" },
  { title: "Scheduled for", field: "scheduled_for" },
  {
    title: "Assign to",
    render: (rowData: TasksData) => (
      <StyledSelect placeholder="Select A Driver">
        {mockDrivers.map((driver) => {
          return (
            <MenuItem
              onClick={() =>
                assignTaskToDrivers(driver.name.first, rowData._id)
              }
              key={driver._id}
            >
              {driver.name.first}
            </MenuItem>
          );
        })}
      </StyledSelect>
    ),
  },
  { title: "Assigned To", field: "assignedToDriver" },
];

const App: React.FC = () => {
  const {
    filteredDrivers,
    handleFocusOnDriver,
    handleFilterByDriverName,
    driverName,
    assignTaskToDrivers,
    filteredTasks,
  } = useData();

  return (
    <Wrapper>
      <FlexRow>
        <FlexColumn style={{ marginRight: 12 }}>
          <Header>Drivers List</Header>
          <TextField
            label="Filter By Name"
            value={driverName}
            onChange={handleFilterByDriverName}
            fullWidth
          />
          {filteredDrivers.map((driver) => {
            return (
              <Card
                driver={driver}
                key={driver._id}
                handleFocusOnDriver={handleFocusOnDriver}
              />
            );
          })}
        </FlexColumn>
        <MapContainer driversData={filteredDrivers} />
      </FlexRow>
      <MaterialTable<TasksData>
        options={{
          pageSize: 10,
        }}
        title="Tasks"
        style={{ width: "100%", padding: 20 }}
        icons={tableIcons}
        columns={columns(filteredTasks, assignTaskToDrivers)}
        data={filteredTasks}
      />
    </Wrapper>
  );
};

export default App;
