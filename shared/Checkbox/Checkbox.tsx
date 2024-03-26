import React, { useState } from 'react'

const Checkbox = () => {
  // const [checkedboxes, setCheckedBoxes] = useState<any[]>([brandFilterData])
  const [search, setSearch] = useState<string>('')
  // const [checkedboxes, setCheckedBoxes] = useState(() => {
  //   const initialState: CheckboxState = {};
  //   brandFilterData.map((el: brandFilterProps) => {
  //     initialState[el.brand] = el.isChecked;
  //   });
  //   return initialState;
  // });
  // const handleCheckboxChange = (event: any) => {
  //   setCheckedBoxes({...checkedboxes, [event?.target.name]: event?.target.checked})
  //   console.log(event?.target.value, event?.target.checked);
  // }

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, checked } = event.target;
  //   setCheckedBoxes((prevCheckedBoxes) => ({
  //     ...prevCheckedBoxes,
  //     [name]: checked,
  //   }));
  // };
  return (
    <div>Checkbox</div>
  )
}

export default Checkbox