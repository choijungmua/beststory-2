import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange: handleChange,
    reset: () => setValue(initialValue), // 초기 값으로 리셋하는 함수
  };
}

export default useInput;
