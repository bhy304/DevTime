import { Link } from "react-router-dom";
import HorizontalLogo from "@/shared/assets/horizontal-logo.svg?react";

const Header = () => {
  return (
    <header className="mx-auto flex w-full max-w-[1200px] justify-between pt-4">
      <nav className="flex items-center">
        <HorizontalLogo alt="DevTime Logo" className="mr-12" />
        <ul className="flex gap-9">
          <li>
            <Link to="/dashboard" className="text-body text-indigo font-semibold hover:underline">
              대시보드
            </Link>
          </li>
          <li>
            <Link to="/ranking" className="text-body text-indigo font-semibold hover:underline">
              랭킹
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="flex items-center">
        <ul className="flex gap-9">
          <li>
            <Link to="/login" className="text-body text-indigo font-semibold hover:underline">
              로그인
            </Link>
          </li>
          <li>
            <Link to="/signup" className="text-body text-indigo font-semibold hover:underline">
              회원가입
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
