### PUI Docs

PUI(`@skybaer0804/pui`) 컴포넌트/가이드 문서 사이트입니다.  
Vite + Preact 기반이며, UI는 PUI 컴포넌트를 사용해 구성합니다.

### 요구사항

- **Node.js**: 18+ 권장
- **npm**: 9+ 권장

### 실행(로컬 개발)

이 저장소는 멀티 워크스페이스 구조로, `pui-docs`는 `@skybaer0804/pui`를 참조합니다.
로컬에서 개발할 때는 아래 중 한 가지 방식으로 PUI를 연결하세요.

#### 방법 A) npm link (권장: 가장 단순)

PUI를 먼저 빌드+링크:

```bash
cd ../pui
npm install
npm run link
```

docs에서 링크 연결:

```bash
cd ../pui-docs
npm install
npm link @skybaer0804/pui
npm run dev
```

#### 방법 B) tgz(pack)로 설치 (배포 전 검증용)

```bash
cd ../pui
npm install
npm run pack
```

생성된 `*.tgz`를 docs에서 설치:

```bash
cd ../pui-docs
npm install
npm i ../pui/*.tgz
npm run dev
```

> 참고: `npm pack` 산출물(`*.tgz`)은 저장소에 커밋하지 않습니다. (`pui/.gitignore`에 제외 처리되어 있습니다)

### 빌드/미리보기

```bash
cd ../pui-docs
npm run build
npm run preview
```

### 프로젝트 구조

- `src/app.tsx`: 좌측 메뉴 선택에 따라 페이지를 스왑하는 엔트리(라우터 없이 동작)
- `src/components/DocsLayout.tsx`: 좌측 사이드바 + 우측 컨텐츠 레이아웃
- `src/pages/*`: 문서 페이지
  - `src/pages/components/*`: 컴포넌트별 예제 페이지
  - `src/pages/DesignTokens.tsx`: 디자인 토큰(오버라이드) 가이드

### 컴포넌트 문서 페이지 추가 방법

1. 페이지 파일 생성: `src/pages/components/MyComponentPage.tsx`
2. `src/app.tsx`에 아래를 추가:

- `menuItems`에 메뉴 항목 추가
- `pageMap`에 페이지 매핑 추가

### 디자인 토큰(Design Tokens) 오버라이드

PUI는 CSS 변수 기반 디자인 토큰을 제공하며, 아래 두 방식으로 오버라이드할 수 있습니다.

- **권장**: `ThemeProvider tokenOverrides` (런타임 오버라이드 + cleanup 포함)
- **간단**: CSS에서 `:root { --token: value; }`로 직접 오버라이드

자세한 내용/예시는 문서의 **Design Tokens** 페이지를 참고하세요.
