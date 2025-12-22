import { ComponentPage } from '../ComponentPage';
import { ThemeProvider } from '@skybaer0804/pui';
import { Box } from '@skybaer0804/pui/Layout';
import { Typography } from '@skybaer0804/pui/Typography';
import { Stack } from '@skybaer0804/pui/Layout';
import { Card, CardHeader, CardBody } from '@skybaer0804/pui/Card';
import { Button } from '@skybaer0804/pui/Button';
import { useState } from 'preact/hooks';

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

export function ThemeProviderPage() {
    const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
    const [contrast, setContrast] = useState<'standard' | 'high'>('standard');

    const basicExample = `import { ThemeProvider } from '@skybaer0804/pui';
import '@skybaer0804/pui/styles.css';

export function App() {
  return (
    <ThemeProvider>
      {/* 앱 내용 */}
    </ThemeProvider>
  );
}`;

    const tokenOverridesExample = `import { ThemeProvider } from '@skybaer0804/pui';

export function App() {
  return (
    <ThemeProvider
      tokenOverrides={{
        '--color-interactive-primary': '#6366f1',
        'primitive-radius-md': 10,
        '--primitive-space-4': '20px',
      }}
    >
      {/* 앱 내용 */}
    </ThemeProvider>
  );
}`;

    const themeModeExample = `import { ThemeProvider } from '@skybaer0804/pui';

export function App() {
  return (
    <ThemeProvider theme="dark">
      {/* 다크 모드 적용 */}
    </ThemeProvider>
  );
}`;

    const contrastExample = `import { ThemeProvider } from '@skybaer0804/pui';

export function App() {
  return (
    <ThemeProvider contrast="high">
      {/* 고대비 모드 적용 */}
    </ThemeProvider>
  );
}`;

    return (
        <ComponentPage title="ThemeProvider" description="ThemeProvider는 앱 전체에 테마와 디자인 토큰을 제공하는 컨텍스트 컴포넌트입니다.">
            <Stack spacing="md">
                <Card>
                    <CardHeader>
                        <Typography variant="h3">기본 사용법</Typography>
                    </CardHeader>
                    <CardBody>
                        <Stack spacing="sm">
                            <Typography variant="body-medium">
                                ThemeProvider는 앱의 최상위에 배치하여 전체 앱에 테마를 적용합니다.
                            </Typography>
                            <CodeBlock code={basicExample} />
                        </Stack>
                    </CardBody>
                </Card>

                <Card>
                    <CardHeader>
                        <Typography variant="h3">토큰 오버라이드</Typography>
                    </CardHeader>
                    <CardBody>
                        <Stack spacing="sm">
                            <Typography variant="body-medium">
                                tokenOverrides prop을 사용하여 디자인 토큰을 런타임에 오버라이드할 수 있습니다.
                            </Typography>
                            <CodeBlock code={tokenOverridesExample} />
                            <Typography variant="body-small" sx={{ color: 'var(--color-text-secondary, rgba(0,0,0,0.6))' }}>
                                • key는 '--'를 붙여도 되고, 생략해도 됩니다.
                                <br />
                                • number 값은 px로 자동 변환됩니다 (10 → '10px').
                                <br />
                                • string 값은 그대로 사용됩니다.
                            </Typography>
                        </Stack>
                    </CardBody>
                </Card>

                <Card>
                    <CardHeader>
                        <Typography variant="h3">테마 모드</Typography>
                    </CardHeader>
                    <CardBody>
                        <Stack spacing="sm">
                            <Typography variant="body-medium">
                                theme prop을 사용하여 라이트/다크 모드를 설정할 수 있습니다.
                            </Typography>
                            <CodeBlock code={themeModeExample} />
                            <Box margin="sm" />
                            <Stack direction="row" spacing="sm">
                                <Button variant={themeMode === 'light' ? 'primary' : 'secondary'} onClick={() => setThemeMode('light')}>
                                    Light 모드
                                </Button>
                                <Button variant={themeMode === 'dark' ? 'primary' : 'secondary'} onClick={() => setThemeMode('dark')}>
                                    Dark 모드
                                </Button>
                            </Stack>
                            <Typography variant="body-small" sx={{ color: 'var(--color-text-secondary, rgba(0,0,0,0.6))' }}>
                                현재 모드: {themeMode}
                            </Typography>
                        </Stack>
                    </CardBody>
                </Card>

                <Card>
                    <CardHeader>
                        <Typography variant="h3">대비 모드</Typography>
                    </CardHeader>
                    <CardBody>
                        <Stack spacing="sm">
                            <Typography variant="body-medium">
                                contrast prop을 사용하여 표준/고대비 모드를 설정할 수 있습니다.
                            </Typography>
                            <CodeBlock code={contrastExample} />
                            <Box margin="sm" />
                            <Stack direction="row" spacing="sm">
                                <Button variant={contrast === 'standard' ? 'primary' : 'secondary'} onClick={() => setContrast('standard')}>
                                    표준 대비
                                </Button>
                                <Button variant={contrast === 'high' ? 'primary' : 'secondary'} onClick={() => setContrast('high')}>
                                    고대비
                                </Button>
                            </Stack>
                            <Typography variant="body-small" sx={{ color: 'var(--color-text-secondary, rgba(0,0,0,0.6))' }}>
                                현재 대비: {contrast}
                            </Typography>
                        </Stack>
                    </CardBody>
                </Card>

                <Card>
                    <CardHeader>
                        <Typography variant="h3">Data Attributes</Typography>
                    </CardHeader>
                    <CardBody>
                        <Stack spacing="sm">
                            <Typography variant="body-medium">
                                ThemeProvider는 &lt;html&gt; 요소에 다음 data attribute를 부여합니다:
                            </Typography>
                            <Box padding="sm" sx={{ backgroundColor: 'var(--color-surface-subtle, #f5f5f5)', borderRadius: 'var(--primitive-radius-md, 8px)' }}>
                                <Typography variant="body-medium" sx={{ fontFamily: 'monospace' }}>
                                    data-theme="light | dark"
                                    <br />
                                    data-contrast="standard | high"
                                    <br />
                                    data-preset-color="default | theme1..theme7"
                                </Typography>
                            </Box>
                        </Stack>
                    </CardBody>
                </Card>
            </Stack>
        </ComponentPage>
    );
}

