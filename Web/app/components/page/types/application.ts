export interface ProjectDetails {
    projectName: string;
    projectType: string;
    deadline: string;
    description: string;
}

export interface ProjectAccompagnement {
    analyse: boolean;
    design: boolean;
    developpement: boolean;
    maintenance: boolean;
    autre: string | null;
}

export interface ProjectTech {
    technologies: string;
    hasCahier: boolean;
}

export interface FinalProjectData {
    details: ProjectDetails;
    accompagnement: ProjectAccompagnement;
    tech: ProjectTech;
}
