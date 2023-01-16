import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

describe("save new question", () => {
  it("will throw an error if incorrect data is passed to the function.", async () => {
    const questionA = {
      optionOneText: "",
      optionTwoText: "",
      author: "",
    };
    try {
      await _saveQuestion(questionA);
    } catch (e) {
      expect(e).toBe("Please provide optionOneText, optionTwoText, and author");
    }
  });

  it("will return the saved question with expected fields when correct data is passed", async () => {
    const questionA = {
      optionOneText: "Option One",
      optionTwoText: "Option Two",
      author: "Author",
    };
    const optionOneExpected = {
      votes: [],
      text: "Option One",
    };
    const optionTwoExpected = {
      votes: [],
      text: "Option Two",
    };
    const savedQuestion = await _saveQuestion(questionA);

    expect(savedQuestion).toHaveProperty("id");
    expect(savedQuestion).toHaveProperty("optionOne");
    expect(savedQuestion.optionOne).toEqual(
      expect.objectContaining(optionOneExpected)
    );
    expect(savedQuestion).toHaveProperty("optionTwo");
    expect(savedQuestion.optionTwo).toEqual(
      expect.objectContaining(optionTwoExpected)
    );
    expect(savedQuestion).toHaveProperty("author", "Author");
  });
});

describe("_saveQuestionAnswer", () => {
  it("will resolve to true when called with correct data", async () => {
    const myAnswer = {
      authedUser: "sarahedo",
      qid: "vthrdm985a262al8qx3do",
      answer: "optionOne",
    };

    await expect(_saveQuestionAnswer(myAnswer)).resolves.toBe(true);
  });

  it("should throw an error if authedUser, qid and answer are not provided", async () => {
    const testAnswer = {
      authedUser: null,
      qid: null,
      answer: null,
    };
    try {
      await _saveQuestionAnswer(testAnswer);
    } catch (e) {
      expect(e).toBe("Please provide authedUser, qid, and answer");
    }
  });
});
