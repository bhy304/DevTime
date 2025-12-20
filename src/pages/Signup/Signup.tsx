import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@/shared/ui/Button/Button";
import Checkbox from "@/shared/ui/Checkbox/Checkbox";
import TextField from "@/shared/ui/TextField/TextField";
import { TERMS_TEXT } from "@/shared/config/legal";
import VerticalWhiteLogo from "@/shared/assets/vertical-white-logo.svg";
import { useForm } from "react-hook-form";
import { type Auth } from "@/entities/auth/model/auth.model";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupSchema } from "@/entities/auth/model/auth.schema";
import { validationService } from "@/features/validation.service";
import { authService } from "@/features/auth.service";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    watch,
    setError,
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    mode: "all",
  });

  const email = watch("email");
  const nickname = watch("nickname");

  const navigate = useNavigate();

  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [isNicknameChecked, setIsNicknameChecked] = useState(false);
  const [emailCheckMessage, setEmailCheckMessage] = useState<string>("");
  const [nicknameCheckMessage, setNicknameCheckMessage] = useState<string>("");
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    setIsEmailChecked(false);
    setEmailCheckMessage("");
  }, [email]);

  useEffect(() => {
    setIsNicknameChecked(false);
    setNicknameCheckMessage("");
  }, [nickname]);

  const handleEmailBlur = () => {
    if (email?.trim() && !isEmailChecked) {
      setError("email", {
        type: "manual",
        message: "중복을 확인해 주세요.",
      });
    }
  };

  const handleNicknameBlur = () => {
    if (nickname?.trim() && !isNicknameChecked) {
      setError("nickname", {
        type: "manual",
        message: "중복을 확인해 주세요.",
      });
    }
  };

  const handleCheckEmail = async (): Promise<void> => {
    if (isChecking) return;
    setIsChecking(true);

    try {
      const { email } = getValues();
      const result = await validationService.checkEmail({ email });
      if (result?.available) {
        setEmailCheckMessage(result.message);
        setIsEmailChecked(true);
      } else {
        setError("email", { type: "manual", message: result?.message });
      }
    } catch (error) {
      console.error("이메일 중복 확인 중 오류 발생:", error);
      setError("email", {
        type: "manual",
        message: "이메일 중복 확인 중 오류가 발생했습니다. 다시 시도해 주세요.",
      });
    } finally {
      setIsChecking(false);
    }
  };

  const handleCheckNickname = async (): Promise<void> => {
    if (isChecking) return;
    setIsChecking(true);

    try {
      const { nickname } = getValues();
      const result = await validationService.checkNickname({ nickname });
      if (result?.available) {
        setNicknameCheckMessage(result.message);
        setIsNicknameChecked(true);
      } else {
        setError("nickname", { type: "manual", message: result?.message });
      }
    } catch (error) {
      console.error("닉네임 중복 확인 중 오류 발생:", error);
      setError("nickname", {
        type: "manual",
        message: "닉네임 중복 확인 중 오류가 발생했습니다. 다시 시도해 주세요.",
      });
    } finally {
      setIsChecking(false);
    }
  };

  const onSubmit = handleSubmit(async (data: Auth) => {
    const result = await authService.signup(data);

    if (result?.success) {
      navigate("/login", { replace: true });
    }
  });

  const getFieldErrorType = (field: keyof SignupSchema) => {
    if (errors[field]) return "validation";
    if (field === "email" && !!email?.trim() && !isEmailChecked) return "unverified";
    if (field === "nickname" && !!nickname?.trim() && !isNicknameChecked) return "unverified";
    return undefined;
  };

  return (
    <main className="grid h-screen w-full grid-cols-2">
      <section className="bg-primary flex flex-col items-center justify-center">
        <img src={VerticalWhiteLogo} alt="DevTime Logo" className="mb-9 h-[200px] w-[264px]" />
        <p className="text-title font-semibold text-white">개발자를 위한 타이머</p>
      </section>
      <section className="flex flex-col items-center justify-center px-6">
        <div className="mx-auto w-full max-w-sm">
          <h1 className="text-heading text-primary mb-9 text-center font-bold">회원가입</h1>
          <form onSubmit={onSubmit} className="space-y-4">
            <TextField id="email" placeholder="이메일 주소 형식으로 입력해 주세요." error={getFieldErrorType("email")}>
              <TextField.Label>아이디</TextField.Label>
              <div className="flex gap-3">
                <TextField.Input type="email" {...register("email", { onBlur: handleEmailBlur })} />
                <TextField.Button
                  type="button"
                  priority="tertiary"
                  disabled={!email?.trim() || !!errors.email}
                  onClick={handleCheckEmail}
                >
                  중복 확인
                </TextField.Button>
              </div>
              <TextField.HelperText>{errors.email?.message || emailCheckMessage}</TextField.HelperText>
            </TextField>
            <TextField id="nickname" placeholder="닉네임을 입력해 주세요." error={getFieldErrorType("nickname")}>
              <TextField.Label>닉네임</TextField.Label>
              <div className="flex gap-3">
                <TextField.Input {...register("nickname", { onBlur: handleNicknameBlur })} />
                <TextField.Button
                  type="button"
                  priority="tertiary"
                  disabled={!nickname?.trim() || !!errors.nickname}
                  onClick={handleCheckNickname}
                >
                  중복 확인
                </TextField.Button>
              </div>
              <TextField.HelperText>{errors.nickname?.message || nicknameCheckMessage}</TextField.HelperText>
            </TextField>
            <TextField id="password" placeholder="비밀번호를 입력해 주세요." error={getFieldErrorType("password")}>
              <TextField.Label>비밀번호</TextField.Label>
              <TextField.Input type="password" {...register("password")} />
              <TextField.HelperText>{errors.password?.message}</TextField.HelperText>
            </TextField>
            <TextField
              id="confirmPassword"
              placeholder="비밀번호를 입력해 주세요."
              error={getFieldErrorType("confirmPassword")}
            >
              <TextField.Label>비밀번호 확인</TextField.Label>
              <TextField.Input type="password" {...register("confirmPassword")} />
              <TextField.HelperText>{errors.confirmPassword?.message}</TextField.HelperText>
            </TextField>
            <fieldset className="mb-9 border-0 p-0">
              <div className="mb-2 flex justify-between">
                <span>이용약관</span>
                <Checkbox id="terms" label="동의함" errors={errors.terms} {...register("terms")} />
              </div>
              <div className="rounded bg-gray-50 px-4 py-3">
                <span className="text-caption no-scrollbar scrollbar-hide wrap-break-words line-clamp-5 overflow-auto leading-relaxed whitespace-pre-wrap [&::-webkit-scrollbar]:hidden">
                  {TERMS_TEXT}
                </span>
              </div>
            </fieldset>
            <Button size="large" type="submit" disabled={!isValid || !isEmailChecked || !isNicknameChecked}>
              회원가입
            </Button>
          </form>
          <div className="text-body text-primary mt-6 flex justify-center gap-3 font-normal">
            <span>회원이신가요?</span>
            <Link to="/login" className="text-primary font-bold">
              로그인 바로가기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;
