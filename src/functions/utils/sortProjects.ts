import { ProjectInfo } from '@/types/project/projectInfo.interface';

export const sortProjects = (projects: ProjectInfo[]) => {
  const sorted = [...projects].sort(
    (a, b) => a.projectFields.priority - b.projectFields.priority
  );
  return sorted;
};
