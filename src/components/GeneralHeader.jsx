import React from "react";
import { NavLink, useHistory } from "react-router-dom";

export default function GeneralHeader({
  itemParameters,
  itemOptions,
  stateArray,
  settersArray,
  includeText = true,
  includeIcon = "inherit",
}) {
  const history = useHistory();
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
        itemOptions[indexOptionSelected].selected();
      } else {
        changeState = () => setter(itemParameters.notSelectedDivClass);
        changeState();
        if (itemOptions[index].activeActions) {
          itemOptions[index].notSelected();
        }
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
              history.push(item.route);
            }}
            className={`${itemParameters.divClass} ${item.state}`}
          >
            <img
              style={{ display: `${includeIcon}` }}
              src={item.icon}
              alt={item.name}
            />
            <NavLink exact className={itemParameters.linkclass} to={item.route}>
              {includeText && item.name}
            </NavLink>
          </div>
        );
      })}
    </section>
  );
}
