import FlexBox from "../Flexbox";
import TextInput, { TextInputProps } from "../Input";
import TextArea from "../TextArea";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const locationOptions = ["서울", "경기", "그 외"];
const typeOptions = ["학술", "운동", "예술", "기타"];

interface ChallengeInputProps extends TextInputProps {
  title: string;
  inputType: "text" | "calendar" | "textarea" | "dropdown";
  value2?: string;
  setValue2?: React.Dispatch<React.SetStateAction<string>>;
}

export default function ChallengeInput({
  title,
  value,
  setValue,
  value2,
  setValue2,
  isError,
  type,
  placeholder,
  inputType,
}: ChallengeInputProps) {
  const returnInput = () => {
    switch (inputType) {
      case "text":
        return (
          <TextInput
            value={value}
            setValue={setValue}
            isError={isError}
            type={type}
            placeholder={placeholder}
          />
        );
        break;
      case "calendar":
        return (
          <FlexBox className="w-full justify-between gap-2">
            <TextInput
              value={value}
              setValue={setValue}
              isError={false}
              type="date"
            />
            <span className="h3 text-grey-700">~</span>
            <TextInput
              value={value2}
              setValue={setValue2}
              isError={false}
              type="date"
            />
          </FlexBox>
        );
        break;
      case "dropdown":
        return (
          <FlexBox className="w-full justify-between gap-2 text-Black">
            <Dropdown options={locationOptions} placeholder="지역" />
            <Dropdown options={typeOptions} placeholder="종류" />
          </FlexBox>
        );
        break;
      default:
        return (
          <TextArea
            value={value}
            setValue={setValue}
            isError={false}
            placeholder={placeholder}
          />
        );
        break;
    }
  };

  return (
    <FlexBox className="w-full items-start" direction="col">
      <div className="h4">{title}</div>
      {returnInput()}
    </FlexBox>
  );
}
