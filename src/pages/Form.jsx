import React from "react";
import { Controller, useForm } from "react-hook-form";
import ContentPreview from "../components/Form/ContentPreview";
import style from "./Form.module.css";
import DatePicker from "react-datepicker";

export default function Form() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("name")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={style.container}>
        <h3>Name</h3>
        <div>
          <input {...register("name", { required: true })} />
          {errors.name && <span> This field is required</span>}
        </div>
        <ContentPreview content={watch("name")} />

        <h3>Employment History</h3>
        <div>
          <input {...register("companyName", { required: true })} />
          {errors.name && <span> This field is required</span>}
        </div>

        <Controller
          control={control}
          name="date-input"
          render={({ field }) => (
            <DatePicker
              placeholderText="Select date"
              onChange={(date) => field.onChange(date)}
              selected={field.value}
            />
          )}
        />

        <ContentPreview content={watch("companyName")} />

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
}
