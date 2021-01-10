import { useCallback, useEffect, useState, ChangeEvent, useMemo } from "react";
import { mockDrivers, mockTasks } from "../mocks/mocks";
import { DriversData, TasksData } from "../types";

const useData = () => {
  const [driversData, setDriversData] = useState<DriversData[]>([]);
  const [tasksData, setTasksData] = useState<TasksData[]>([]);
  const [driverName, setDriverName] = useState<string>("");

  const filteredTasks = useMemo(() => {
    if (!driverName) {
      return tasksData;
    }
    return tasksData.filter((task) => {
      return task.assignedToDriver
        .toLowerCase()
        .includes(driverName.toLowerCase());
    });
  }, [tasksData, driverName]);

  const filteredDrivers = useMemo(() => {
    if (!driverName) {
      return driversData;
    }
    return driversData.filter((driver) => {
      return (
        driver.name.first.toLowerCase().includes(driverName.toLowerCase()) ||
        driver.name.last.toLowerCase().includes(driverName.toLowerCase())
      );
    });
  }, [driversData, driverName]);

  useEffect(() => {
    setDriversData(mockDrivers);
    setTasksData(mockTasks);
  }, [setDriversData, setTasksData]);

  const handleFilterByDriverName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setDriverName(e.target.value);
    },
    [setDriverName]
  );

  const assignTaskToDrivers = useCallback(
    (name: string, id: string) => {
      const updatedTasksData = tasksData.map((task) => ({
        ...task,
        assignedToDriver: id === task._id ? name : task.assignedToDriver,
      }));
      setTasksData(updatedTasksData);
    },
    [tasksData, setTasksData]
  );

  const handleFocusOnDriver = useCallback(
    (id?: string) => {
      const updatedDrivers = driversData.map((driver) => ({
        ...driver,
        isHovered: id === driver._id,
      }));
      setDriversData(updatedDrivers);
    },
    [driversData, setDriversData]
  );

  return {
    filteredDrivers,
    handleFocusOnDriver,
    handleFilterByDriverName,
    driverName,
    assignTaskToDrivers,
    filteredTasks,
  };
};

export default useData;
