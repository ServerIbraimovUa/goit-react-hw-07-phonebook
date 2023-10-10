import { Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/Contacts/contactFilter';

const Filter = () => {
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <>
      <Input
        placeholder="Search name"
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </>
  );
};

export default Filter;
