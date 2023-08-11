import { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react';
import { pages } from '../types';

interface IProviderProps {
    children?: any;
}

type PageContextValues = {
    page: pages;
    setPage: Dispatch<SetStateAction<pages>>;
};

export const PageContext = createContext<PageContextValues | undefined>(undefined);

export const PageProvider = (props: IProviderProps) => {
    const [page, setPage] = useState<pages>(localStorage.getItem('page') as pages || pages.START);

    useEffect(() => {
        localStorage.setItem('page', page);
    }, [ page ]);

    return (
        <PageContext.Provider value={{
            page,
            setPage,
        }}>
            {props.children}
        </PageContext.Provider>
    )
}
