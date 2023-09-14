import { useState, useContext, useEffect, createContext } from "react";
const SearchContext = createContext()



const SearchProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        keyword: null,
        results: []
    })


    return (
        <SearchContext.Provider value={[auth, setAuth]}>{children}</SearchContext.Provider>
    )
}

const useSearch = () => useContext(SearchContext)

export { useSearch, SearchProvider }