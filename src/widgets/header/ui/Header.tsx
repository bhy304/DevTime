import { Link } from "react-router-dom";
import horizontalLogo from "@/assets/horizontal-logo.svg";

const Header = () => {
  return (
    <header className="flex w-full justify-between">
      <nav className="flex items-center">
        <img src={horizontalLogo} alt="DevTime Logo" className="mr-12" />
        <ul className="flex gap-9">
          <li>
            <Link
              to="/dashboard"
              className="text-body text-secondary-indigo font-semibold hover:underline"
            >
              대시보드
            </Link>
          </li>
          <li>
            <Link
              to="/ranking"
              className="text-body text-secondary-indigo font-semibold hover:underline"
            >
              랭킹
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="flex items-center">
        <ul className="flex gap-9">
          <li>
            <Link
              to="/login"
              className="text-body text-secondary-indigo font-semibold hover:underline"
            >
              로그인
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="text-body text-secondary-indigo font-semibold hover:underline"
            >
              회원가입
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
