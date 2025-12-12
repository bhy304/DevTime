import { Link } from "react-router-dom";
import SymbolLogo from "@/assets/symbol-logo.svg?react";
import VerticalLogo from "@/assets/vertical-logo.svg?react";
import Button from "@/components/common/Button";
import TextField from "@/components/common/TextField";

const Login = (): React.JSX.Element => {
  return (
    <main className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <div className="absolute top-1/2 -right-[100px] -z-10 -translate-y-[90%]">
        <SymbolLogo width={1090} height={530} className="opacity-100" />
      </div>

      <section className="mx-20 min-h-[598px] min-w-[500px] rounded-[10px] bg-white/50 shadow-[0_40px_100px_40px_rgba(3,104,255,0.05)] backdrop-blur-[50px]">
        <div className="mx-[86px]">
          <form onSubmit={() => {}} className="">
            <VerticalLogo
              width={132}
              height={100}
              className="mx-auto mt-[72px] mb-12"
              aria-label="DevTime Logo"
            />
            <TextField
              id="email"
              type="email"
              name="email"
              label="아이디"
              placeholder="이메일 주소를 입력해 주세요."
            />
            <TextField
              id="password"
              type="password"
              name="password"
              label="비밀번호"
              placeholder="비밀번호를 입력해 주세요."
            />
          </form>
          <Button size="large" type="submit">
            로그인
          </Button>
          <div className="text-body text-primary-default mt-6 flex justify-center gap-3 font-normal">
            <Link to="/signup" className="text-primary-default text-bodysmall">
              회원가입
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
