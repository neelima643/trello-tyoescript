import React, { ChangeEvent } from "react";
import "./InputSelect.css";

interface arr {
  key?: string;
  val?: string;
}

interface selectprops {
  options?: arr[];
  label?: string;
  selectclass?: string;
  divname?: string;
  optionclass?: string;
}

const inputSelect: React.FC<selectprops> = ({
  options,
  label,
  selectclass,
  divname,
  optionclass,
}) => {
  return (
    <div className={divname}>
      <select className={selectclass} name={label}>
        {options?.map((item) => (
          <option className={optionclass} value={item.key}>
            {item.val}
          </option>
        ))}
      </select>
    </div>
  );
};

export default inputSelect;
