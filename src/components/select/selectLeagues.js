import { Select } from "antd";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

import getDataFromApi from "../../api/configApi";

const { Option } = Select;
function SelectLeagues(props) {
  const {
    label,
    name,
    required = false,
    optNull = true,
    disabled = false,
    control,
  } = props;

  const [array, setArray] = useState([]);
  const getData = () => {
    getDataFromApi("leagues", "GET").then((res) => {
      console.log(res);
      setArray(res.data.response);
    });
  };

  const onFocus = () => {
    if (array.length === 0) {
      getData();
    }
  };

  return (
    <React.Fragment>
      <label className={required ? "label-require" : ""}>{label}</label>
      <Controller
        name={name}
        control={control}
        defaultValue={array[0]?.league?.name}
        rules={{ required: required }}
        render={({ field }) => (
          <Select
            {...field}
            showSearch
            disabled={disabled}
            onFocus={onFocus}
            style={{
              width: 200,
            }}
            filterOption={(input, option) => {
              if (option.key !== null) {
                return option.children.includes(input);
              }
              // _.includes(_.lowerCase(option.children), _.lowerCase(input))
            }}
          >
            {array.map((item, idx) => {
              return (
                <Option value={item.league.id} key={idx}>
                  {item.league.name}
                </Option>
              );
            })}
          </Select>
        )}
      />
    </React.Fragment>
  );
}

SelectLeagues.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  isValid: PropTypes.bool,
  errorMessage: PropTypes.string,
  arrayItem: PropTypes.array,
  valueOpt: PropTypes.string,
  nameOpt: PropTypes.string,
  optNull: PropTypes.bool,
};

export default React.memo(SelectLeagues);
