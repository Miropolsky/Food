import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { geatAllCategory } from '../api';
import { CategoryList } from '../components/CategoryList';
import { Search } from '../components/Search';
import Preloader from './../components/Preloader';

export function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);
    const { search } = useLocation();
    const navigate = useNavigate();
    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter((el) =>
                el.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        );
        navigate(`?search=${str}`);
    };
    useEffect(() => {
        geatAllCategory().then((data) => {
            setCatalog(data.categories);
            setFilteredCatalog(
                search
                    ? data.categories.filter((el) =>
                          el.strCategory
                              .toLowerCase()
                              .includes(search.split('=')[1].toLowerCase())
                      )
                    : data.categories
            );
        });
    }, [search]);
    return (
        <>
            <Search cb={handleSearch} />
            {!catalog.length ? (
                <Preloader />
            ) : (
                <CategoryList catalog={filteredCatalog} />
            )}
        </>
    );
}
