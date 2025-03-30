export interface ResearchModel {
  id: number,
  title: string,
  authors: string[],
  event: string
  date:Date,
  img: string,
  full_paper: string,
  github_link: string | null,
  link: string
}
