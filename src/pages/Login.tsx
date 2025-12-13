import { Link, useNavigate } from 'react-router-dom';
import SymbolLogo from '@/assets/symbol-logo.svg?react';
import VerticalLogo from '@/assets/vertical-logo.svg?react';
import Button from '@/components/common/Button';
import TextField from '@/components/common/TextField';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { loginSchema, type LoginSchema } from '@/schemas/auth.schema';
import { useAuth } from '@/hooks/useAuth';
import Dialog from '@/components/Dialog/Dialog';
import { useState } from 'react';
import { setTokens } from '@/utils/auth';

type DialogState = {
  isOpen: boolean;
  title: string;
  content?: string;
  onClose?: () => void;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors, isValid },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: 'all',
  });
  const navigate = useNavigate();
  const { login } = useAuth();
  const [dialogState, setDialogState] = useState<DialogState>({
    isOpen: false,
    title: '',
    content: '',
    onClose: undefined,
  });

  const closeDialog = () => {
    const { onClose } = dialogState;
    setDialogState((prev) => ({ ...prev, isOpen: false }));
    onClose?.();
  };

  const onSubmit = handleSubmit(async (data: LoginSchema) => {
    const { success, accessToken, refreshToken, isDuplicateLogin, isFirstLogin } = await login(data);

    if (success) {
      setTokens(accessToken, refreshToken);

      if (isDuplicateLogin) {
        setDialogState({
          isOpen: true,
          title: '중복 로그인이 불가능합니다.',
          content:
            '다른 기기에 중복 로그인 된 상태입니다. [확인] 버튼을 누르면 다른 기기에서 강제 로그아웃되며, 진행중이던 타이머가 있다면 기록이 자동 삭제됩니다.',
          onClose: () => {
            if (isFirstLogin) {
              navigate('/profile', { replace: true });
            } else {
              navigate('/', { replace: true });
            }
          },
        });
        return;
      }

      if (isFirstLogin) {
        navigate('/profile', { replace: true });
      } else {
        navigate('/', { replace: true });
      }
    } else {
      setDialogState({
        isOpen: true,
        title: '로그인 정보를 다시 확인해 주세요.',
        content: '',
        onClose: () => {
          setFocus('email');
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
              type="email"
              label="아이디"
              placeholder="이메일 주소를 입력해 주세요."
              errors={errors.email}
              {...register('email')}
            />
            <TextField
              id="password"
              type="password"
              label="비밀번호"
              placeholder="비밀번호를 입력해 주세요."
              errors={errors.password}
              {...register('password')}
            />
            <Button size="large" type="submit" priority="primary" disabled={!isValid}>
              로그인
            </Button>
            <div className="text-body text-primary-default mt-6 flex justify-center gap-3 font-normal">
              <Link to="/signup" className="text-primary-default text-bodysmall">
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
            <Button priority="primary" size="large" onClick={closeDialog}>
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </main>
  );
};

export default Login;
