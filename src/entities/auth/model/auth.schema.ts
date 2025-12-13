import z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "이메일 형식으로 작성해 주세요.")
    .email("이메일 형식으로 작성해 주세요."),
  password: z
    .string()
    .min(8, "비밀번호는 8자 이상, 영문과 숫자 조합이어야 합니다.")
    .regex(/^\S+$/, "비밀번호는 8자 이상, 영문과 숫자 조합이어야 합니다.")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d).+$/,
      "비밀번호는 8자 이상, 영문과 숫자 조합이어야 합니다.",
    ),
});

export type LoginSchema = z.infer<typeof loginSchema>;
