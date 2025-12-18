import { Box, Stack } from '@skybaer0804/pui/Layout';
import { Typography } from '@skybaer0804/pui/Typography';
import { Card, CardBody, CardHeader } from '@skybaer0804/pui/Card';

function CodeBlock({ code }: { code: string }) {
  return (
    <pre
      style={{
        margin: 0,
        padding: '12px 14px',
        borderRadius: 'var(--primitive-radius-md, 8px)',
        border: '1px solid var(--color-border-default, #e0e0e0)',
        background: 'var(--color-surface-default, #ffffff)',
        overflowX: 'auto',
        fontSize: '0.875rem',
        lineHeight: 1.5,
      }}
    >
      <code>{code}</code>
    </pre>
  );
}

export function DesignTokens() {
  const tokenOverridesExample = `import { ThemeProvider } from '@skybaer0804/pui';
import '@skybaer0804/pui/styles.css';

export function App() {
  return (
    <ThemeProvider
      tokenOverrides={{
        // key는 '--'를 붙여도 되고, 생략해도 됩니다.
        '--color-interactive-primary': '#6366f1',
        'primitive-radius-md': 10, // number는 px로 자동 변환됩니다 (10 -> '10px')
        '--primitive-space-4': '20px', // 단위를 직접 쓰고 싶으면 string을 사용하세요
      }}
    >
      {/* ... */}
    </ThemeProvider>
  );
}`;

  const cssRootOverrideExample = `/* 전역 오버라이드 (앱 전체에 적용) */
:root {
  --color-interactive-primary: #6366f1;
  --primitive-radius-md: 10px;
  --primitive-space-4: 20px;
}`;

  const scopedOverrideExample = `/* 특정 영역에만 오버라이드 (해당 DOM 하위로 상속됨) */
.marketingTheme {
  --color-interactive-primary: #22c55e;
  --primitive-radius-md: 16px;
}
`;

  const whereTokensAreDefined = `PUI 디자인 토큰은 CSS 변수로 정의됩니다.
- 소스: pui/src/styles/tokens/_variables-unified.scss
- 빌드 결과: @skybaer0804/pui/styles.css (import 해서 사용)

ThemeProvider는 아래 data attribute를 <html>에 부여하여 모드/프리셋을 전환합니다.
- data-theme="light | dark"
- data-contrast="standard | high"
- data-preset-color="default | theme1..theme7"`;

  return (
    <Box padding="lg">
      <Typography variant="h1">Design Tokens</Typography>
      <Box margin="md" />
      <Typography variant="body-medium">
        PUI는 컬러/타이포/스페이싱/라운드/쉐도우 등을 <b>CSS 변수(Design Tokens)</b>로 제공합니다. 앱에서 토큰 값을
        바꾸기만 하면 컴포넌트 스타일이 함께 따라오므로, 손쉽게 테마를 커스터마이징할 수 있습니다.
      </Typography>

      <Box margin="lg" />
      <Stack spacing="md">
        <Card>
          <CardHeader>
            <Typography variant="h2">어디에 정의되어 있나요?</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing="sm">
              <Typography variant="body-medium">토큰은 하나의 :root 블록으로 통합되어 정의됩니다.</Typography>
              <CodeBlock code={whereTokensAreDefined} />
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Typography variant="h2">권장: ThemeProvider tokenOverrides</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing="sm">
              <Typography variant="body-medium">
                런타임에 안전하게 오버라이드하고 싶다면 <b>{'ThemeProvider tokenOverrides'}</b>를 사용하세요. (컴포넌트
                언마운트 시 자동 cleanup)
              </Typography>
              <CodeBlock code={tokenOverridesExample} />
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Typography variant="h2">간단: CSS 변수 직접 오버라이드</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing="sm">
              <Typography variant="body-medium">정적 스타일로 충분하면 CSS에서 :root 변수만 바꿔도 됩니다.</Typography>
              <CodeBlock code={cssRootOverrideExample} />
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Typography variant="h2">팁: 범위(Scoped) 오버라이드</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing="sm">
              <Typography variant="body-medium">
                특정 페이지/섹션만 다른 토큰을 쓰고 싶으면, 컨테이너 엘리먼트에 CSS 변수를 선언해서 하위로 상속시키는
                방식이 편합니다.
              </Typography>
              <CodeBlock code={scopedOverrideExample} />
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Typography variant="h2">자주 쓰는 토큰 예시</Typography>
          </CardHeader>
          <CardBody>
            <Typography variant="body-medium">
              - <b>--color-interactive-primary</b>: Primary 인터랙션 컬러 (버튼, 탭 인디케이터 등)
              <br />- <b>--color-surface-default</b>: 기본 배경
              <br />- <b>--color-border-default</b>: 기본 보더
              <br />- <b>--primitive-space-4</b>: spacing scale (컴포넌트 padding/gap에 광범위 사용)
              <br />- <b>--primitive-radius-md</b>: 라운드 기본값
            </Typography>
          </CardBody>
        </Card>
      </Stack>
    </Box>
  );
}
