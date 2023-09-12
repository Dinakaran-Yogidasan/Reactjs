import { useEffect, useState } from "react";

const Flag = () => {
  const [inputValue, setInputValue] = useState("");
  const [countryName, setCountryName] = useState("");
  const [loading, setLoading] = useState(undefined);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCountryName(inputValue);
    setInputValue("");
  };

  const getCountryName = async (name) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${name}`
    );
    const [data] = await response.json();
    setLoading(data);
  };

  useEffect(() => {
    if (countryName !== "") {
      getCountryName(countryName);
    }
  }, [countryName]);

  return (
    <div>
      <input
        type="text"
        name="country"
        id="country"
        value={inputValue}
        placeholder="country"
        onChange={handleInputChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Get The Flag
      </button>
      {loading && <div>
        <h1>{loading.name.common}</h1>
        <img src={loading.flags.png} alt={loading.name.alt} />
        </div>}
    </div>
  );
};

export default Flag;
