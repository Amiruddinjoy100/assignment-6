'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

import type { Workout } from "@/types/workout";


type AddPlanResult = "added" | "duplicate" | "full";
type SaveResult = "added" | "duplicate";


interface WorkoutContextType {
  todaysPlan: Workout[];
  saveForLater: Workout[];

  addToPlan: (workout: Workout) => AddPlanResult;
  saveWorkout: (workout: Workout) => SaveResult;

  removeFromPlan: (id: number) => void;
  removeSaved: (id: number) => void;
}


interface WorkoutProviderProps {
  children: ReactNode;
}


export const WorkoutContext =
  createContext<WorkoutContextType | undefined>(
    undefined
  );


const WorkoutProvider = ({
  children,
}: WorkoutProviderProps) => {

  const [todaysPlan, setTodaysPlan] =
    useState<Workout[]>([]);

  const [saveForLater, setSaveForLater] =
    useState<Workout[]>([]);

  const addToPlan = (
    workout: Workout
  ): AddPlanResult => {

    const alreadyAdded = todaysPlan.some(
      (item) => item.id === workout.id
    );

    if (alreadyAdded) {
      return "duplicate";
    }


    if (todaysPlan.length >= 5) {
      return "full";
    }


    setTodaysPlan((prev) => [...prev,workout,]);
    return "added";
  };

  const saveWorkout = (
    workout: Workout
  ): SaveResult => {

    const alreadySaved = saveForLater.some(
      (item) => item.id === workout.id
    );


    if (alreadySaved) {
      return "duplicate";
    }


    setSaveForLater((prev) =>[...prev,workout,]);
    return "added";
  };


  const removeFromPlan = (id: number) => {

    setTodaysPlan((prev) =>
      prev.filter(
        (workout) => workout.id !== id
      )
    );

  };

  const removeSaved = (id: number) => {

    setSaveForLater((prev) =>
      prev.filter(
        (workout) => workout.id !== id
      )
    );

  };


  return (

    <WorkoutContext.Provider
      value={{
        todaysPlan,
        saveForLater,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        removeSaved,
      }}
    >

      {children}

    </WorkoutContext.Provider>

  );
};


export default WorkoutProvider;


export const useWorkoutContext = () => {

  const context = useContext(WorkoutContext);


  if (!context) {

    throw new Error(
      "useWorkoutContext WorkoutProvider er vetor thaka lagbe"
    );

  }

  return context;
};