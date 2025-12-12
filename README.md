# DevTime

> 개발 공부 시간 기록용 타이머 애플리케이션

## ✨ 프로젝트 소개

## 주요 기능

| 페이지   | 설명                                                       |
| -------- | ---------------------------------------------------------- |
| 회원가입 | 계정을 생성하는 데 필요한 정보를 입력하고 회원가입을 한다. |

## 🛠️ 기술 스택

### Frontend

- **Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM (v7)
- **Form & Validation**: React Hook Form, Zod
- **API Client**: Axios
- **Utils**: clsx, tailwind-merge
- **Code Quality**: ESLint, Prettier

### Development Tools

- Node.js & npm
- TypeScript 5.9
- Vite 7.2

## 📁 프로젝트 구조

```
src/
├── api/        # API 요청 관리 (axios 인스턴스, 엔드포인트)
├── assets/     # 이미지, SVG 등 정적 리소스
├── components/ # 재사용 가능한 UI 컴포넌트
├── constants/  # 전역 상수 정의
├── hooks/      # 커스텀 React Hooks
├── layout/     # 페이지 레이아웃 컴포넌트
├── models/     # 데이터 모델 및 인터페이스 전의
├── pages/      # 라우트별 페이지 컴포넌트
├── styles/     # 전역 스타일 및 설정
├── types/      # TypeScript 타입 정의
├── utils/      # 유틸리티 함수
├── App.tsx     # 메인 애플리케이션 컴포넌트
└── main.tsx    # 애플리케이션 진입점
```
