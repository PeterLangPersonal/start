import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { projects } from '../types';

interface IProviderProps {
    children?: any;
}

type ProjectContextValues = {
    project: projects | undefined;
    setProject: Dispatch<SetStateAction<projects | undefined>>;
};

export const ProjectContext = createContext<ProjectContextValues | undefined>(undefined);

export const ProjectProvider = (props: IProviderProps) => {
    const [project, setProject] = useState<projects | undefined>(undefined);

    return (
        <ProjectContext.Provider value={{
            project,
            setProject,
        }}>
            {props.children}
        </ProjectContext.Provider>
    )
}
