import { z } from "zod";

export const NAME_REGEX = /^[가-힣a-zA-Z]{2,10}$/;

export const nameSchema = () => {
  return z
    .string()
    .min(5, { message: "이름은 5~10자리 입니다." })
    .max(10, { message: "이름은 5~10자리 입니다." })
    .regex(NAME_REGEX, { message: "이름은 영문 및 한글만 가능합니다." });
};

export const emailSchema = () => {
  return z.string().email({ message: "이메일 형식이 올바르지 않습니다." });
};

export const contentSchema = () => {
  return z.string().min(10, { message: "내용은 10자 이상 입력해주세요." });
};

export const formSchema = z.object({
  name: nameSchema(),
  email: emailSchema(),
  content: contentSchema(),
});

export type FormValues = z.infer<typeof formSchema>;
