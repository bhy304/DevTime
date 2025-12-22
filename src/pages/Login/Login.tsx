import { Link, useNavigate } from "react-router-dom";
import SymbolLogo from "@/shared/assets/symbol-logo.svg?react";
import VerticalLogo from "@/shared/assets/vertical-logo.svg?react";
import Button from "@/shared/ui/Button/Button";
import TextField from "@/shared/ui/TextField/TextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginSchema } from "@/entities/auth/model/auth.schema";
import Dialog from "@/shared/ui/Dialog/Dialog";
import { useState } from "react";
import { type DialogState } from "@/shared/types/dialog.type";
import { useAuthStore } from "@/entities/auth/model/authStore";
import { authService } from "@/features/auth/api/auth.service";

const Login = () => {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isValid },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "all",
  });
  const navigate = useNavigate();
  const setAuthTokens = useAuthStore((state) => state.setTokens);
  const [dialogState, setDialogState] = useState<DialogState>({
    isOpen: false,
    title: "",
    content: "",
    onClose: undefined,
  });

  const closeDialog = () => {
    const { onClose } = dialogState;
    setDialogState((prev) => ({ ...prev, isOpen: false }));
    onClose?.();
  };

  const onSubmit = handleSubmit(async (data: LoginSchema) => {
    const response = await authService.login(data);

    if (response && response.success) {
      const { accessToken, refreshToken, isFirstLogin, isDuplicateLogin } = response;
      setAuthTokens(accessToken, refreshToken);

      const targetPath = isFirstLogin ? "/profile" : "/";

      if (isDuplicateLogin) {
        setDialogState({
          isOpen: true,
          title: "중복 로그인이 불가능합니다.",
          content:
            "다른 기기에 중복 로그인 된 상태입니다. [확인] 버튼을 누르면 다른 기기에서 강제 로그아웃되며, 진행중이던 타이머가 있다면 기록이 자동 삭제됩니다.",
          onClose: () => {
            navigate(targetPath, { replace: true });
          },
        });
        return;
      }

      navigate(targetPath, { replace: true });
    } else {
      setDialogState({
        isOpen: true,
        title: "로그인 정보를 다시 확인해 주세요.",
        content: "",
        onClose: () => {
          setFocus("email");
        },
      });
    }
  });

  return (
    <main className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <div className="absolute top-1/2 -right-[100px] -z-10 -translate-y-[90%]">
        <SymbolLogo width={1090} height={530} className="opacity-100" />
      </div>
      <section className="mx-20 min-h-[598px] min-w-[500px] rounded-[10px] bg-white/50 shadow-[0_40px_100px_40px_rgba(3,104,255,0.05)] backdrop-blur-[50px]">
        <div className="mx-[86px]">
          <form onSubmit={onSubmit} className="">
            <VerticalLogo width={132} height={100} className="mx-auto mt-[72px] mb-12" aria-label="DevTime Logo" />
            <TextField
              id="email"
              placeholder="이메일 주소를 입력해 주세요."
              error={errors.email ? "validation" : undefined}
            >
              <TextField.Label>아이디</TextField.Label>
              <TextField.Input type="email" {...register("email")} />
              <TextField.HelperText>{errors.email?.message}</TextField.HelperText>
            </TextField>
            <TextField
              id="password"
              placeholder="비밀번호를 입력해 주세요."
              error={errors.password ? "validation" : undefined}
            >
              <TextField.Label>비밀번호</TextField.Label>
              <TextField.Input type="password" {...register("password")} />
              <TextField.HelperText>{errors.password?.message}</TextField.HelperText>
            </TextField>
            <Button size="large" type="submit" disabled={!isValid}>
              로그인
            </Button>
            <div className="text-body text-primary mt-6 flex justify-center gap-3 font-normal">
              <Link to="/signup" className="text-primary text-bodysmall">
                회원가입
              </Link>
            </div>
          </form>
        </div>
      </section>
      <Dialog open={dialogState.isOpen} onOpenChange={closeDialog}>
        <Dialog.Content>
          <Dialog.Title>{dialogState.title}</Dialog.Title>
          <Dialog.Description>{dialogState.content}</Dialog.Description>
          <Dialog.Footer>
            <Button size="large" onClick={closeDialog}>
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </main>
  );
};

export default Login;
