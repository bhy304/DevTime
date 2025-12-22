import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="text-informative text-9xl font-bold">404 Not Found</h1>
      <p className="text-heading my-12 text-gray-400">
        존재하지 않는 주소를 입력하셨거나, 요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
      </p>
      <Link to="/" className="text-title text-primary">
        메인으로 돌아가기
      </Link>
    </main>
  );
};

export default Error;
