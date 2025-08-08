export type QuestionModel = {
  ownerId: string;
  question: String;
  answer: String;
  tags: Array<String>;
  _createdAt: Date;
};
