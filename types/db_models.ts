export type QuestionModel = {
  ownerId: string;
  question: string;
  answer: string;
  tags: Array<string>;
  _createdAt: Date;
};
