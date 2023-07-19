import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/actions';
// import { useSelector } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  // const nameContact = useSelector(state => state.contact);

  const handleFilter = e => {
    dispatch(addFilter(e.currentTarget.value));
    // const nameValue = nameContact.
    // console.log(nameValue);
    // if (nameValue) {
    //   dispatch(addFilter(...nameValue));
    //   return;
    // }
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
