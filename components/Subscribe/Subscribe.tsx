import React, { useContext, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { Htag } from "../Htag/Htag";
import TextField from "../TextField/TextField";
import { ISubscribeForm } from "./Subscribe.props";
import styles from "./Subscribe.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { subscribeThunk } from "../../service/subscribe.service";
import { ModalContext } from "../../context/MadalContext";
import { Thanks } from "../Thanks/Thanks";

const postCreateSchema = yup.object().shape({
  email: yup.string().email().required(),
});

export const Subscribe = (): JSX.Element => {
  const [response, setResponse] = useState<any>();
  const [serverErr, setServerErr] = useState<any>(null);
  const context = useContext(ModalContext);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ISubscribeForm>({
    resolver: yupResolver(postCreateSchema),
  });

  const onSubmit = async ({ email }: ISubscribeForm) => {
    const response = await subscribeThunk(email);
    setResponse(response);
  };

  useEffect(() => {
    if (Object.prototype.hasOwnProperty.call(response, "errors")) {
      setServerErr(response?.errors);
    } else {
      setServerErr(null);
      setValue("email", "");
      context.setContent(<Thanks />);
      context.open();
    }
  }, [response]);

  return (
    <div id="subscribe" className={styles["subscribe__wrapper"]}>
      <Htag className={styles["subscribe__title"]} align="center" tag="h2">
        Subscribe for HERA updates
      </Htag>
      <form
        method="post"
        onSubmit={handleSubmit(onSubmit)}
        id="formData"
        className={styles["subscribe__form"]}
      >
        <TextField
          {...register("email")}
          type="email"
          className={styles["subscribe__input"]}
          placeholder="Enter your email"
          error={!!errors.email || serverErr?.email?.[0]}
          message={errors?.email?.message || serverErr?.email?.[0]}
        />
        <Button appearance="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
