import { useRef, useState } from 'preact/hooks';
import { ComponentPage } from '../ComponentPage';
import { Box } from '@skybaer0804/pui/Box';
import { Typography } from '@skybaer0804/pui/Typography';
import { Stack } from '@skybaer0804/pui/Stack';
import { Card, CardHeader, CardBody } from '@skybaer0804/pui/Card';
import { Button } from '@skybaer0804/pui/Button';

export function BoxPage() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [refText, setRefText] = useState('버튼을 눌러 Ref를 확인하세요');

  const handleRefCheck = () => {
    if (boxRef.current) {
      boxRef.current.style.backgroundColor = '#e3f2fd'; // Light Blue
      boxRef.current.style.borderColor = '#2196f3'; // Blue
      setRefText(`Ref로 DOM 접근 성공! 태그: ${boxRef.current.tagName}`);
    }
  };

  return (
    <ComponentPage title="Box" description="Box는 대부분의 CSS 유틸리티 요구사항을 위한 래퍼(Wrapper) 컴포넌트입니다.">
      <Stack spacing={2}>

        {/* Introduction */}
        <Card>
          <CardHeader>
            <Typography variant="h3">소개</Typography>
          </CardHeader>
          <CardBody>
            <Typography variant="body-medium">
              Box 컴포넌트는 UI 요소를 감싸는 기본 컨테이너 역할을 합니다.
              `div`와 같은 기본 HTML 요소처럼 작동하지만, 시스템의 스타일링 유틸리티(margin, padding, colors 등)에 쉽게 접근할 수 있습니다.
            </Typography>
          </CardBody>
        </Card>

        {/* Basic Usage */}
        <Card>
          <CardHeader>
            <Typography variant="h3">기본 사용법</Typography>
          </CardHeader>
          <CardBody>
            <Typography variant="body-medium">
              Box 컴포넌트는 UI 요소를 감싸는 기본 컨테이너 역할을 합니다.
              `div`와 같은 기본 HTML 요소처럼 작동하지만, 시스템의 스타일링 유틸리티(margin, padding, colors 등)에 쉽게 접근할 수 있습니다.
            </Typography>
            <Box
              padding="md"
              sx={{
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--primitive-radius-md)',
                backgroundColor: 'var(--color-surface-subtle)',
              }}
            >
              <Typography variant="body-medium">
                기본 Box 컴포넌트입니다.
              </Typography>
            </Box>
          </CardBody>
        </Card>

        {/* Props & Styling */}
        <Card>
          <CardHeader>
            <Typography variant="h3">스타일링 (Props & sx)</Typography>
          </CardHeader>
          <CardBody>
            <Typography variant="body-medium">
              `padding`, `margin`과 같은 유틸리티 props나 `sx` prop을 사용하여 스타일을 적용할 수 있습니다.
            </Typography>
            <Stack spacing={2}>
              <Box
                padding="lg"
                sx={{
                  backgroundColor: '#1976d2',
                  color: 'white',
                  borderRadius: '8px',
                  textAlign: 'center',
                }}
              >
                <Typography variant="body-medium" color="inherit">
                  커스텀 스타일 (sx prop)
                </Typography>
              </Box>
              <Stack direction="row" spacing={2}>
                <Box padding="sm" sx={{ border: '1px dashed grey' }}>Padding SM</Box>
                <Box padding="md" sx={{ border: '1px dashed grey' }}>Padding MD</Box>
                <Box padding="lg" sx={{ border: '1px dashed grey' }}>Padding LG</Box>
              </Stack>
            </Stack>
          </CardBody>
        </Card>

        {/* Accessing the DOM (Ref) */}
        <Card>
          <CardHeader>
            <Typography variant="h3">DOM 접근 (Ref)</Typography>
          </CardHeader>
          <CardBody>
            <Typography variant="body-medium">
              Box 컴포넌트는 `ref`를 전달받아 하위 DOM 요소(기본적으로 `div`)에 연결할 수 있습니다.
              이를 통해 포커스 관리, 스크롤 위치 제어, 크기 측정 등 직접적인 DOM 조작이 가능합니다.
            </Typography>

            <Stack spacing={2}>
              <Stack direction="row" spacing={2}>
                <Button onClick={handleRefCheck}>
                  Ref 테스트 실행
                </Button>
                <Typography variant="body-small" color="text-subtle">
                  {refText}
                </Typography>
              </Stack>

              <Box
                ref={boxRef}
                padding="md"
                sx={{
                  border: '2px dashed var(--color-border-subtle)',
                  borderRadius: 'var(--primitive-radius-md)',
                  transition: 'all 0.3s ease',
                }}
              >
                <Typography variant="body-medium">
                  이 Box는 useRef를 통해 제어됩니다. 버튼을 클릭하면 스타일이 변경됩니다.
                </Typography>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Stack>
    </ComponentPage>
  );
}
