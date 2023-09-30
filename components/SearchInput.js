const SearchInput = ({value, onChange}) => {
    return (
        <input type="text" value ={value} onChange={onChange}
        placeholder="Search Hear.."></input>
    );
};

export default SearchInput;