import React, {createContext, useContext, useState} from 'react';

interface SearchContextValue {
    keyword: string | '';
    onChangeText(keyword: string): void;
}

const SearchContext = createContext<SearchContextValue | null>(null);

export function SearchContextProvider({children}: {children: React.ReactNode}) {
    const [keyword, onChangeText] = useState<string | ''>('');

    return (
        <SearchContext.Provider value={{keyword, onChangeText}}>
            {children}
        </SearchContext.Provider>
    );
}

export function useSearch() {
    const keyword = useContext(SearchContext);
    // keyword 유효성을 검사해줘야 useSearch의 반환값 타입이 SearchContextValue로 됨
    if (!keyword) {
        throw new Error('AuthContextProvider is not used'); // throw하여 null 타입 제외
    }
    return keyword;
}

export default SearchContext;