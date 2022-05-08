
// Let's expect a novel or essay
export type Article = {
  headline?: string;
  contents: Content[];
}

export type Content = {
  html?: string;
  text?: string;
}