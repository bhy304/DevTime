# TailwindCSS 커스텀 스타일 사용 가이드

프로젝트에서 정의한 커스텀 색상과 폰트 사이즈를 TailwindCSS 유틸리티 클래스로 사용하는 방법을 안내합니다.

## 🎨 색상 사용법

CSS 변수 `--color-{name}`은 `bg-{name}`, `text-{name}`, `border-{name}` 등으로 사용합니다:

```tsx
// Primary 색상
<button className="bg-primary-default text-white">기본 버튼</button>
<div className="bg-primary-light">밝은 배경</div>

// Secondary 색상
<p className="text-secondary-indigo">인디고 텍스트</p>
<div className="bg-secondary-positive">성공 배경</div>
<button className="border-2 border-secondary-negative">에러 테두리</button>

// Gray 색상
<div className="bg-gray-100 text-gray-800">컨텐츠</div>
<div className="bg-gray-50 border border-gray-200">카드</div>

// State 색상
<button disabled className="bg-state-disabled cursor-not-allowed">
  비활성화
</button>
```

## 📝 폰트 사이즈 사용법

CSS 변수 `--font-size-{name}`은 `text-{name}`으로 사용합니다 (line-height는 자동 적용):

```tsx
<h1 className="text-heading">제목 (1.5rem / 30px)</h1>
<h2 className="text-title">타이틀 (1.25rem / 24px)</h2>
<h3 className="text-subtitle">서브타이틀 (1.125rem / 22px)</h3>
<p className="text-body">본문 텍스트 (1rem / 20px)</p>
<p className="text-bodysmall">작은 본문 (0.875rem / 18px)</p>
<span className="text-caption">캡션 (0.75rem / 16px)</span>
<label className="text-label">라벨 (0.5rem / 12px)</label>
```

## ✅ 실제 사용 예시 (Button 컴포넌트)

현재 `Button.tsx`에서 이렇게 사용하고 있습니다:

```tsx
// Primary 버튼
bg-primary-default text-white

// Focus 상태
focus-visible:border-secondary-fuchsia

// Disabled 상태
disabled:bg-gray-400 disabled:text-gray-300

// 폰트 사이즈
text-subtitle  // 1.125rem / 22px line-height
```

## 🎯 더 많은 활용 예시

### 1️⃣ 색상 조합

```tsx
// 정보성 메시지
<div className="bg-blue-50 border-l-4 border-secondary-informative text-secondary-indigo p-4">
  <p className="text-body">중요한 안내사항입니다.</p>
</div>

// 성공 메시지
<div className="bg-green-50 border border-secondary-positive text-secondary-positive p-3">
  저장되었습니다!
</div>

// 경고 메시지
<div className="bg-yellow-50 border border-secondary-notice text-gray-800">
  주의가 필요합니다.
</div>

// 에러 메시지
<div className="bg-red-50 border border-secondary-negative text-secondary-negative">
  오류가 발생했습니다.
</div>
```

### 2️⃣ 폰트 사이즈 조합

```tsx
<article className="p-6">
  <h1 className="text-heading mb-4 text-gray-800">메인 제목</h1>
  <h2 className="text-title text-primary-default mb-3">섹션 제목</h2>
  <h3 className="text-subtitle mb-2 text-gray-700">서브 제목</h3>
  <p className="text-body mb-4 text-gray-600">
    본문 내용입니다. 일반적인 텍스트에 사용합니다.
  </p>
  <p className="text-bodysmall text-gray-500">작은 부가 설명</p>
  <span className="text-caption text-gray-400">이미지 캡션</span>
</article>
```

### 3️⃣ 카드 컴포넌트

```tsx
<div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
  <h3 className="text-title mb-2 text-gray-800">카드 제목</h3>
  <p className="text-body mb-4 text-gray-600">카드 설명</p>
  <button className="bg-primary-default text-bodysmall rounded px-4 py-2 text-white hover:brightness-90">
    자세히 보기
  </button>
</div>
```

### 4️⃣ Form 요소

```tsx
<form className="space-y-4">
  <div>
    <label className="text-bodysmall mb-1 block text-gray-700">이메일</label>
    <input
      type="email"
      className="text-body focus:border-primary-default w-full rounded border border-gray-300 px-3 py-2 focus:outline-none"
    />
  </div>

  <button
    type="submit"
    className="bg-primary-default text-subtitle rounded px-6 py-3 text-white hover:brightness-90 active:brightness-85"
  >
    제출하기
  </button>
</form>
```

## 📋 전체 색상 클래스 목록

| CSS 변수                        | 클래스 사용 예시                                                       | 색상 코드 |
| ------------------------------- | ---------------------------------------------------------------------- | --------- |
| `--color-primary-default`       | `bg-primary-default`, `text-primary-default`, `border-primary-default` | #4c79ff   |
| `--color-primary-light`         | `bg-primary-light`, `text-primary-light`                               | #78b0ff   |
| `--color-secondary-indigo`      | `bg-secondary-indigo`, `text-secondary-indigo`                         | #023e99   |
| `--color-secondary-informative` | `bg-secondary-informative`                                             | #2563eb   |
| `--color-secondary-negative`    | `text-secondary-negative`, `border-secondary-negative`                 | #dc2626   |
| `--color-secondary-notice`      | `bg-secondary-notice`                                                  | #fbbf24   |
| `--color-secondary-positive`    | `bg-secondary-positive`                                                | #22c55e   |
| `--color-secondary-fuchsia`     | `border-secondary-fuchsia`                                             | #fd28ec   |
| `--color-gray-50`               | `bg-gray-50`                                                           | #f9fafb   |
| `--color-gray-100`              | `bg-gray-100`                                                          | #f0f2f5   |
| `--color-gray-200`              | `bg-gray-200`, `border-gray-200`                                       | #e5e7eb   |
| `--color-gray-300`              | `bg-gray-300`                                                          | #ccd0d6   |
| `--color-gray-400`              | `bg-gray-400`, `text-gray-400`                                         | #969da8   |
| `--color-gray-500`              | `text-gray-500`                                                        | #717887   |
| `--color-gray-600`              | `text-gray-600`                                                        | #4b5563   |
| `--color-gray-700`              | `text-gray-700`                                                        | #394252   |
| `--color-gray-800`              | `text-gray-800`, `bg-gray-800`                                         | #1f2937   |
| `--color-state-disabled`        | `bg-state-disabled`                                                    | #969da8   |

## 📋 전체 폰트 사이즈 클래스 목록

| CSS 변수                | 클래스           | 크기            | Line Height |
| ----------------------- | ---------------- | --------------- | ----------- |
| `--font-size-heading`   | `text-heading`   | 1.5rem (24px)   | 30px        |
| `--font-size-title`     | `text-title`     | 1.25rem (20px)  | 24px        |
| `--font-size-subtitle`  | `text-subtitle`  | 1.125rem (18px) | 22px        |
| `--font-size-body`      | `text-body`      | 1rem (16px)     | 20px        |
| `--font-size-bodysmall` | `text-bodysmall` | 0.875rem (14px) | 18px        |
| `--font-size-caption`   | `text-caption`   | 0.75rem (12px)  | 16px        |
| `--font-size-label`     | `text-label`     | 0.5rem (8px)    | 12px        |

## 💡 유용한 팁

### 조건부 스타일링

```tsx
<button
  className={` ${isActive ? "bg-primary-default" : "bg-gray-200"} ${isLarge ? "text-title" : "text-body"} rounded px-4 py-2 text-white`}
>
  버튼
</button>
```

### 반응형 디자인

```tsx
<div className="text-body md:text-title lg:text-heading">
  반응형 텍스트
</div>

<div className="bg-gray-100 md:bg-primary-light lg:bg-primary-default">
  반응형 배경
</div>
```

### Hover, Focus, Active 상태

```tsx
<button className="bg-primary-default focus:border-secondary-fuchsia text-white hover:brightness-90 active:brightness-85">
  상호작용 버튼
</button>
```

## 🔍 설정 파일 위치

커스텀 색상과 폰트 사이즈는 [`src/styles/global.css`](file:///Users/baekhayeon/workspace/DevTime/src/styles/global.css)의 `@theme` 블록에서 정의되어 있습니다.

새로운 색상이나 폰트 사이즈를 추가하려면 해당 파일을 수정하세요.
