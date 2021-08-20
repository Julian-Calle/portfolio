import React from "react";
import { NavLink } from "react-router-dom";

export default function GeneralHeader({
  itemParameters,
  itemOptions,
  stateArray,
  settersArray,
  includeText = true,
}) {
  const itemOptionsWithState = itemOptions.map((item, index) => {
    return { ...item, state: stateArray[index] };
  });

  const switchToBrigth = (title, array) => {
    const name = array.map((item) => item.name);

    const indexOptionSelected = name.indexOf(title);

    settersArray.forEach((setter, index) => {
      let changeState;
      if (index === indexOptionSelected) {
        changeState = () => setter(itemParameters.selectedDivClass);
        changeState();
      } else {
        changeState = () => setter(itemParameters.notSelectedDivClass);
        changeState();
      }
    });
  };
  return (
    <section className={itemParameters.sectionClass}>
      {itemOptionsWithState.map((item, index, array) => {
        return (
          <div
            key={item.name}
            onClick={() => {
              switchToBrigth(item.name, array);
            }}
            className={`${itemParameters.divClass} ${item.state}`}
          >
            <img src={item.icon} alt={item.name} />
            <NavLink exact className={itemParameters.linkclass} to={item.route}>
              {includeText && item.name}
            </NavLink>
          </div>
        );
      })}
    </section>
  );
}
