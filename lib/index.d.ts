declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.ico" {
  const content: string;
  export default content;
}

type PersonNode =
  | Queries.PeopleTplQuery["overlords"]["edges"][0]["node"]
  | Queries.PeopleTplQuery["members"]["edges"][0]["node"]
  | Queries.PeopleTplQuery["accomplices"]["edges"][0]["node"];

type ProjectList = Queries.ProjectsTplQuery["projects"]["edges"];
type ProjectNode = ProjectList[0]["node"];
