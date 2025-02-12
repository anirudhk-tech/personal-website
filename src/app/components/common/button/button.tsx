import { Touchable } from "./button.styles";

export const Button = ({ label }: { label: string }) => {
  return <Touchable>{label}</Touchable>;
};
