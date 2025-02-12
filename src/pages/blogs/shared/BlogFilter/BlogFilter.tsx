import { StyledSelect } from "./blogFilter.styled";
import { ESortBy } from "../../../../config/constants/_constants";

export const BlogFilter = () => {
  const handleChange = () => {
    // TODO - Integration with Services to sort/filter
    return;
  };

  return (
    <StyledSelect
      onChange={handleChange}
      placeholder="Filter/Sort By"
      options={[
        { value: ESortBy.DESC, label: ESortBy.Descending },
        { value: ESortBy.ASC, label: ESortBy.Ascending },
      ]}
    />
  );
};
