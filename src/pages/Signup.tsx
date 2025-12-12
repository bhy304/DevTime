import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import z from "zod";
import Button from "@/components/common/Button";
import Checkbox from "@/components/common/Checkbox";
import TextField from "@/components/common/TextField";
import { TERMS_TEXT } from "@/constants/legal";
import VerticalWhiteLogo from "@/assets/vertical-white-logo.svg";
import { useAuth } from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import { type Auth } from "@/models/auth.model";
import { zodResolver } from "@hookform/resolvers/zod";

const SignupPage = (): React.JSX.Element => {
  const signupSchema = z
    .object({
      email: z
        .string()
        .trim() // 앞뒤 공백 제거(공백만 입력 방지에 핵심)
        .min(1, "이메일 형식으로 작성해 주세요.") // 비어있을 때도 같은 메시지로 처리하고 싶다면
        .email("이메일 형식으로 작성해 주세요."),
      nickname: z.string().trim().min(1, "닉네임을 입력해 주세요."),
      password: z
        .string()
        .min(8, "비밀번호는 8자 이상, 영문과 숫자 조합이어야 합니다.")
        .regex(/^\S+$/, "비밀번호는 8자 이상, 영문과 숫자 조합이어야 합니다.") // 공백 포함 불가
        .regex(
          /^(?=.*[A-Za-z])(?=.*\d).+$/,
          "비밀번호는 8자 이상, 영문과 숫자 조합이어야 합니다.",
        ),
      confirmPassword: z
        .string()
        .regex(/^\S+$/, "비밀번호가 일치하지 않습니다.")
        .min(1, "비밀번호가 일치하지 않습니다."),
      terms: z.literal(true, { message: "이용약관에 동의해 주세요." }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "비밀번호가 일치하지 않습니다.",
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
    setError,
  } = useForm<Auth>({
    resolver: zodResolver(signupSchema),
    mode: "all",
  });

  // 컴포넌트 렌더링 시에만 호출되어야 하며, 이벤트 핸들러 내에서 사용하면 제대로 작동하지 않습니다.
  const email = watch("email");
  const nickname = watch("nickname");

  const navigate = useNavigate();
  const { signup, checkEmail, checkNickname } = useAuth();

  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);
  const [emailCheckMessage, setEmailCheckMessage] = useState<string>("");
  const [nicknameCheckMessage, setNicknameCheckMessage] = useState<string>("");

  const handleCheckEmail = async () => {
    const { email } = getValues();
    const result = await checkEmail({ email });
    if (result?.available) {
      setEmailCheckMessage(result.message);
    } else {
      setError("email", { type: "manual", message: result?.message });
    }
    setIsEmailChecked(true);
  };

  const handleCheckNickname = async () => {
    const { nickname } = getValues();
    const result = await checkNickname({ nickname });

    if (result?.available) {
      setNicknameCheckMessage(result.message);
    } else {
      setError("nickname", { type: "manual", message: result?.message });
    }
    setIsNicknameChecked(true);
  };

  const onSubmit = async (data: Auth) => {
    console.log(errors);

    const result = await signup(data);

    if (result?.success) {
      navigate("/login", { replace: true });
    }

    console.log(result);
  };

  return (
    <main className="grid h-screen w-full grid-cols-2">
      <section className="bg-primary-default flex flex-col items-center justify-center">
        <img
          src={VerticalWhiteLogo}
          alt="DevTime Logo"
          className="mb-9 h-56 w-66"
          style={{ width: "264px", height: "200px" }}
        />
        <p className="text-title font-semibold text-white">
          개발자를 위한 타이머
        </p>
      </section>
      <section className="flex flex-col items-center justify-center px-6">
        <div className="mx-auto w-full max-w-sm">
          <h1 className="text-heading text-primary-default mb-9 text-center font-bold">
            회원가입
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <TextField
              id="email"
              type="email"
              label="아이디"
              placeholder="이메일 주소 형식으로 입력해 주세요."
              errors={errors.email}
              helperText={emailCheckMessage}
              {...register("email")}
              button={
                <Button
                  type="button"
                  priority="tertiary"
                  disabled={!email?.trim() || !!errors.email}
                  onClick={handleCheckEmail}
                >
                  중복 확인
                </Button>
              }
            />
            <TextField
              id="nickname"
              type="text"
              label="닉네임"
              placeholder="닉네임을 입력해 주세요."
              errors={errors.nickname}
              helperText={nicknameCheckMessage}
              {...register("nickname")}
              button={
                <Button
                  type="button"
                  priority="tertiary"
                  disabled={!nickname?.trim() || !!errors.nickname}
                  onClick={handleCheckNickname}
                >
                  중복 확인
                </Button>
              }
            />

            <TextField
              id="password"
              type="password"
              label="비밀번호"
              placeholder="비밀번호를 입력해 주세요."
              errors={errors.password}
              {...register("password")}
            />
            <TextField
              id="confirmPassword"
              type="password"
              label="비밀번호 확인"
              placeholder="비밀번호를 다시 입력해 주세요."
              errors={errors.confirmPassword}
              {...register("confirmPassword")}
            />

            <fieldset className="mb-9 border-0 p-0">
              <div className="mb-2 flex justify-between">
                <span>이용약관</span>
                <Checkbox
                  id="terms"
                  label="동의함"
                  errors={errors.terms}
                  {...register("terms")}
                />
              </div>

              <div className="rounded bg-gray-50 px-4 py-3">
                <span className="text-caption no-scrollbar wrap-break-words line-clamp-5 overflow-auto leading-relaxed whitespace-pre-wrap">
                  {TERMS_TEXT}
                </span>
              </div>
            </fieldset>
            <Button
              size="large"
              type="submit"
              disabled={
                Object.keys(errors).length > 0 ||
                !isEmailChecked ||
                !isNicknameChecked
              }
            >
              회원가입
            </Button>
          </form>

          <div className="text-body text-primary-default mt-6 flex justify-center gap-3 font-normal">
            <span>회원이신가요?</span>
            <Link to="/login" className="text-primary-default font-bold">
              로그인 바로가기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignupPage;
