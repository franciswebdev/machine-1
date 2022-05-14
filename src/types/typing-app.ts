
// Let's expect a novel or essay
export type Article = {
  id?: string; // for looping
  headline?: string;
  contents: Content[];
}

export type Content = {
  html?: string;
  text?: string;
}