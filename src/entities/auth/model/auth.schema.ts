import z from 'zod';

export const loginSchema = z.object({
  email: z.string().trim().min(1, '이메일 형식으로 작성해 주세요.').email('이메일 형식으로 작성해 주세요.'),
  password: z
    .string()
    .min(8, '비밀번호는 8자 이상, 영문과 숫자 조합이어야 합니다.')
    .regex(/^\S+$/, '비밀번호는 8자 이상, 영문과 숫자 조합이어야 합니다.')
    .regex(/^(?=.*[A-Za-z])(?=.*\d).+$/, '비밀번호는 8자 이상, 영문과 숫자 조합이어야 합니다.'),
});

export const signupSchema = z
  .object({
    email: z
      .string()
      .trim() // 앞뒤 공백 제거(공백만 입력 방지에 핵심)
      .min(1, '이메일 형식으로 작성해 주세요.') // 비어있을 때도 같은 메시지로 처리하고 싶다면
      .email('이메일 형식으로 작성해 주세요.'),
    nickname: z.string().trim().min(1, '닉네임을 입력해 주세요.'),
    password: z
      .string()
      .min(8, '비밀번호는 8자 이상, 영문과 숫자 조합이어야 합니다.')
      .regex(/^\S+$/, '비밀번호는 8자 이상, 영문과 숫자 조합이어야 합니다.') // 공백 포함 불가
      .regex(/^(?=.*[A-Za-z])(?=.*\d).+$/, '비밀번호는 8자 이상, 영문과 숫자 조합이어야 합니다.'),
    confirmPassword: z.string().min(1, '비밀번호가 일치하지 않습니다.'),
    terms: z.literal(true, { message: '이용약관에 동의해 주세요.' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: '비밀번호가 일치하지 않습니다.',
  });

export type SignupSchema = z.infer<typeof signupSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
