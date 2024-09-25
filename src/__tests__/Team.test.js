import Team from "../js/task_1/Team";

test("testing add method", () => {
  const team = new Team();
  team.add("magician");
  team.add("vampire");

  expect([...team.members]).toEqual(["magician", "vampire"]);
});

test("testing add method with the member that has already been added", () => {
  const team = new Team();
  team.add("magician");
  team.add("vampire");
  expect(() => {
    team.add("magician");
  }).toThrow("Такой персонаж уже добавлен");
});

test("testing the addAll method", () => {
  const team = new Team();
  team.addAll("vampire", "magician", "zombie");
  expect(team.toArray()).toEqual(["vampire", "magician", "zombie"]);
});
