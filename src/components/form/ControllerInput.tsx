import { InputHTMLAttributes } from "react";
import {
  Controller,
  ControllerProps,
  FieldValues,
  Path,
} from "react-hook-form";

export interface ControllerInputProps<T extends FieldValues>
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "name" | "defaultValue" | "disabled"
    >,
    Pick<
      ControllerProps<T, Path<T>>,
      "control" | "name" | "rules" | "defaultValue" | "disabled"
    > {
  label?: string;
}

const ControllerInput = <T extends FieldValues>({
  name,
  control,
  rules,
  disabled,
  defaultValue,
  label,
  ...rest
}: ControllerInputProps<T>) => {
  return (
    <Controller
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      name={name}
      disabled={disabled}
      render={({ field, fieldState: { error } }) => (
        <>
          <div className='label'>
            <span className='label-text'>{label}</span>
          </div>
          <input
            {...rest}
            {...field}
            className='input input-bordered w-full max-w-xs'
          />
          {error?.message && (
            <div className='label'>
              <span className='label-text-alt text-red-500'>
                {error?.message}
              </span>
            </div>
          )}
        </>
      )}
    />
  );
};

export default ControllerInput;
