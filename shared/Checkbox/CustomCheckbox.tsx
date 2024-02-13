import React, { useState } from 'react'

const CheckboxComponent = () => {
    const [selectAll, setSelectAll] = useState(false);
    const [tokenSelects, setTokenSelects] = useState<any[]>([
      {
        id: 1,
        token: "luminiaToken",
        depositAmount: 8492749349,
        poolQuota: 12.64,
        PSWAPAmount: 4398409320,
        isSelected: false,
      },
      {
        id: 2,
        token: "solaraToken",
        depositAmount: 8492749349,
        poolQuota: 12.64,
        PSWAPAmount: 4398409320,
        isSelected: false,
      },
      {
        id: 3,
        token: "pool slab",
        depositAmount: 8492749349,
        poolQuota: 12.64,
        PSWAPAmount: 4398409320,
        isSelected: false,
      },
      {
        id: 4,
        token: "solaraToken",
        depositAmount: 8492749349,
        poolQuota: 12.64,
        PSWAPAmount: 4398409320,
        isSelected: false,
      },
      {
        id: 5,
        token: "pool slab",
        depositAmount: 8492749349,
        poolQuota: 12.64,
        PSWAPAmount: 4398409320,
        isSelected: false,
      },
    ]);
	const handleCheckBox = (id: number) => {
		const updatedTokens = [...tokenSelects];

		const tokenIndex = updatedTokens.findIndex(token => token.id === id);
		if (tokenIndex !== -1) {
			updatedTokens[tokenIndex].option = !updatedTokens[tokenIndex].option;
			setTokenSelects(updatedTokens);
 
			// Check if all tokens are selected or not
			const allSelected = updatedTokens.every(token => token.option);
			setSelectAll(allSelected);
		}
	};
 
	const handleClearAll = () => {
		const updatedTokens = [...tokenSelects];
		const newSelectAll = !selectAll;
 
		updatedTokens.forEach(token => {
			token.isSelected = newSelectAll;
		});
 
		setTokenSelects(updatedTokens);
		setSelectAll(newSelectAll);
	};
  return (
    <div onChange={() => handleCheckBox}>
      checkbox
    </div>
  )
}

export default CheckboxComponent