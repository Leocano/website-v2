export type Cell = {
  content: "empty" | "mine";
  status: "initial" | "clicked" | "flagged";
  bombsAround: number;
};

export type Board = Cell[][];
