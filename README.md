# DevTime

> 개발 공부 시간 기록용 타이머 애플리케이션

## ✨ 프로젝트 소개

## 주요 기능

| 페이지      | 설명                                                                                                     |
| ----------- | -------------------------------------------------------------------------------------------------------- |
| 회원가입    | 계정을 생성하는 데 필요한 정보를 입력하고 회원가입을 한다.                                               |
| 로그인      | 로그인 정보를 확인해 유저 정보를 인증하고, 권한이 필요한 페이지에 접근할 수 있도록 인가 권한을 부여한다. |
| 프로필 설정 | 사용자의 프로필 정보를 입력하고 수정할 수 있다.                                                          |

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

## 📁 프로젝트 구조 (Feature-Sliced Design)

[FSD](https://feature-sliced.design/) 아키텍처를 적용한 폴더 구조입니다.

```
src/
├── app/                    # 앱 초기화, 라우팅, 전역 설정
│   ├── App.tsx
│   ├── main.tsx
│   ├── layouts/
│   └── styles/
│
├── pages/                  # 페이지별 슬라이스
│   ├── Home/
│   ├── Login/
│   ├── Signup/
│   └── Profile/
│
├── widgets/                # 독립적인 UI 블록
│   └── header/
│
├── entities/               # 비즈니스 엔티티
│   └── auth/
│
└── shared/                 # 재사용 가능한 공유 리소스
    ├── api/                # API 클라이언트
    ├── assets/             # 이미지, 아이콘 등
    ├── config/             # 상수, 설정 값
    ├── lib/                # 유틸리티 함수
    ├── types/              # 공통 타입 정의
    └── ui/                 # 공통 UI 컴포넌트
```

### FSD 레이어 설명

| Layer      | 설명                                      |
| ---------- | ----------------------------------------- |
| `app`      | 앱 진입점, 라우팅, 전역 스타일/프로바이더 |
| `pages`    | 페이지 컴포넌트 (라우트별 분리)           |
| `widgets`  | 독립적인 UI 블록 (Header, Footer 등)      |
| `entities` | 비즈니스 엔티티 (User, Auth 등)           |
| `shared`   | 프로젝트 전반에서 재사용되는 리소스       |
