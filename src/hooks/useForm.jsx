import { useState } from "react";

// useForm 커스텀 훅 정의
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  // input이 변경될 때 호출될 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // 폼 제출 시 호출될 핸들러
  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    callback();
  };

  return {
    values,
    handleChange,
    handleSubmit,
  };
}

export default useForm;
