import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/entities/auth/model/authStore";
import Dropdown from "@/shared/ui/Dropdown/Dropdown";
import HorizontalLogo from "@/shared/assets/horizontal-logo.svg?react";
import Avatar from "@/shared/assets/avatar.svg?react";
import User from "@/shared/assets/user.svg?react";
import Logout from "@/shared/assets/logout.svg?react";
import { authService } from "@/features/auth/api/auth.service";

const Header = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <header className="mx-auto flex w-full max-w-[1200px] justify-between pt-4">
      <nav className="flex items-center">
        <Link to="/">
          <HorizontalLogo alt="DevTime Logo" className="mr-12" />
        </Link>
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
          {isAuthenticated ? (
            <li className="relative">
              <Dropdown>
                <Dropdown.Trigger className="flex items-center gap-2">
                  <Avatar width={40} height={40} />
                  <span>DevTime</span>
                </Dropdown.Trigger>
                <Dropdown.Content>
                  <Dropdown.Item onClick={() => navigate("/profile")}>
                    <div className="flex gap-4">
                      <User width={20} height={20} />
                      마이페이지
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Separator />
                  <Dropdown.Item onClick={() => authService.logout()}>
                    <div className="flex gap-4">
                      <Logout width={20} height={20} />
                      로그아웃
                    </div>
                  </Dropdown.Item>
                </Dropdown.Content>
              </Dropdown>
            </li>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
