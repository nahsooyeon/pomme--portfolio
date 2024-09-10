import { z } from "zod";

export const NAME_REGEX = /^[가-힣a-zA-Z]{2,10}$/;

export const subjectSchema = () => {
  return z.string().min(5, { message: "제목은 5~20자리 입니다." }).max(20, { message: "제목은 5~20자리 입니다." });
};

export const emailSchema = () => {
  return z.string().email({ message: "이메일 형식이 올바르지 않습니다." });
};

export const contentSchema = () => {
  return z.string().min(10, { message: "내용은 10자 이상 입력해주세요." });
};

export const formSchema = z.object({
  subject: subjectSchema(),
  email: emailSchema(),
  content: contentSchema(),
});

export type FormValues = z.infer<typeof formSchema>;
