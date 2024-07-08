import React from "react";
import { UserType, pureAddUserCallback } from "../HW3";

let initialState: UserType[];
const setName = (users: UserType[]) => {
  initialState = users;
};

beforeEach(() => {
  initialState = [];
});

test("add user", () => {
  pureAddUserCallback(
    "Kate",
    setName as React.Dispatch<React.SetStateAction<UserType[]>>,
    initialState
  );
  expect(initialState.length).toBe(1);
  expect(initialState[0].name).toBe("Kate");
  expect(!!initialState[0]._id).toBe(true);
});
