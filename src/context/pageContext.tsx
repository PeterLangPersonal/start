import { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react';
import { pages } from '../types';

interface IProviderProps {
    children?: any;
}

type PageContextValues = {
    page: pages;
    setPage: Dispatch<SetStateAction<pages>>;
    isMobile: boolean;
};

export const PageContext = createContext<PageContextValues | undefined>(undefined);

export const PageProvider = (props: IProviderProps) => {
    const [page, setPage] = useState<pages>(localStorage.getItem('page') as pages || pages.START);

    const [width, setWidth] = useState<number>(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
  
    const isMobile = width <= 768;
    
    useEffect(() => {
        localStorage.setItem('page', page);
    }, [ page ]);

    return (
        <PageContext.Provider value={{
            page,
            setPage,
            isMobile,
        }}>
            {props.children}
        </PageContext.Provider>
    )
}
