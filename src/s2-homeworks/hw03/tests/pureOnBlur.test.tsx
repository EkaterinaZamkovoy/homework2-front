import React from "react";
import { pureOnBlur } from "../GreetingContainer";

let name: string;
let error: string;
const setError = (a: string) => {
  error = a;
};

beforeEach(() => {
  name = "";
  error = "";
});

test("name 1", () => {
  name = "Kate";
  pureOnBlur(name, setError as React.Dispatch<React.SetStateAction<string>>);
  expect(error).toBe("");
});
test("name 2", () => {
  name = "";
  pureOnBlur(name, setError as React.Dispatch<React.SetStateAction<string>>);
  expect(error).toBe("Ошибка! Введите имя!");
});
test("name 3", () => {
  name = "    ";
  pureOnBlur(name, setError as React.Dispatch<React.SetStateAction<string>>);
  expect(error).toBe("Ошибка! Введите имя!");
});
