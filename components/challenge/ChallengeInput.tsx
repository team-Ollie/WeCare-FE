import FlexBox from "../Flexbox";
import TextInput, { TextInputProps } from "../Input";
import TextArea from "../TextArea";

interface ChallengeInputProps extends TextInputProps {
  title: string;
  inputType: "text" | "calendar" | "textarea";
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
            <span className="h3 text-gray-700">~</span>
            <TextInput
              value={value}
              setValue={setValue}
              isError={false}
              type="date"
            />
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
    <FlexBox className="w-full gap-1 items-start" direction="col">
      <div className="h4">{title}</div>
      {returnInput()}
    </FlexBox>
  );
}
