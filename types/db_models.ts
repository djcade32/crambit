export type QuestionModel = {
  _createdAt: Date;
  ownerId: string;
  question: string;
  answer: string;
  tags: string[];
  guideIds: string[];
};

export type GuideModel = {
  _createdAt: Date;
  _updatedAt: Date;
  id?: string;
  ownerId: string;
  title: string;
  progress: number;
};
