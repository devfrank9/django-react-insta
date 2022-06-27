import React from "react";
import * as S from "./style";

interface Prop {
  inputType: string;
  placeholder?: string;
}

const CommInput = ({ inputType, placeholder }: Prop) => {
  return (
    <div>
      <S.Input type={inputType} placeholder={placeholder} />
    </div>
  );
};

export default CommInput;
