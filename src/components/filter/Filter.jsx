import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(addFilter(e.currentTarget.value));
  };

  return (
    <label>
      <input type="text" onChange={handleFilter} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Filter;
