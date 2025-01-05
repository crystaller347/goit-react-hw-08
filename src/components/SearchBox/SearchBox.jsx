import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice.js';
import { selectNameFilter } from '../../redux/filters/selectors.js';

export default function SearchBox() {
    const dispatch = useDispatch();
    const selectFilter = useSelector(selectNameFilter);

    const handleFilter = (event) => {
        const input = event.target;
        dispatch(
            changeFilter(input.value.trim())
        );
    }

    return (
        <div>
            <p className={css.label}>Find contacts by name</p>
            <input className={css.input} type="text" value={selectFilter} onChange={handleFilter} />
        </div>
    )
}