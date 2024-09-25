import ErrorRepository from "../js/task_2/ErrorRepository";

const errorRepository = new ErrorRepository();

errorRepository.errors.set("404", "Not Found");
errorRepository.errors.set("414", "Request-URL Too Long");
errorRepository.errors.set("502", "Bad Gateway");

test("testing the translate method with a code", () => {
  expect(errorRepository.translate("404")).toBe("Not Found");
});

test("testing the translate method without a code", () => {
  expect(errorRepository.translate("500")).toBe("Unknown error");
});
