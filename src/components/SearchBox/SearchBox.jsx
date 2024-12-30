import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice.js';

export default function SearchBox() {
    const dispatch = useDispatch();
    const selectNameFilter = useSelector(state => state.filters.name);

    const handleFilter = (event) => {
        const input = event.target;
        dispatch(
            changeFilter(input.value.trim())
        );
    }

    return (
        <div>
            <p className={css.label}>Find contacts by name</p>
            <input className={css.input} type="text" value={selectNameFilter} onChange={handleFilter} />
        </div>
    )
}