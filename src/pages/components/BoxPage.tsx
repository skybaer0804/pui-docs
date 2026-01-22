import { ComponentPage } from '../ComponentPage';
import { Box } from '@skybaer0804/pui/Layout';
import { Typography } from '@skybaer0804/pui/Typography';
import { Stack } from '@skybaer0804/pui/Stack';
import { Card, CardHeader, CardBody } from '@skybaer0804/pui/Card';

export function BoxPage() {
  return (
    <ComponentPage title="Box" description="Box 컴포넌트는 레이아웃과 스타일링을 위한 기본 컨테이너입니다.">
      <Stack spacing="md">
        <Card>
          <CardHeader>
            <Typography variant="h4">기본 사용법</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing="sm">
              <Typography variant="body-medium">
                Box는 padding, margin, 배경색 등을 쉽게 설정할 수 있는 유틸리티 컴포넌트입니다.
              </Typography>
              <Box
                padding="md"
                sx={{
                  backgroundColor: 'var(--color-surface-subtle, #f5f5f5)',
                  borderRadius: 'var(--primitive-radius-md, 8px)',
                }}
              >
                <Typography variant="body-medium">padding="md"가 적용된 Box</Typography>
              </Box>
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Typography variant="h3">Padding 예제</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing="sm">
              <Box
                padding="xs"
                sx={{
                  backgroundColor: 'var(--color-surface-subtle, #f5f5f5)',
                  borderRadius: 'var(--primitive-radius-md, 8px)',
                }}
              >
                <Typography variant="body-medium">padding="xs"</Typography>
              </Box>
              <Box
                padding="sm"
                sx={{
                  backgroundColor: 'var(--color-surface-subtle, #f5f5f5)',
                  borderRadius: 'var(--primitive-radius-md, 8px)',
                }}
              >
                <Typography variant="body-medium">padding="sm"</Typography>
              </Box>
              <Box
                padding="md"
                sx={{
                  backgroundColor: 'var(--color-surface-subtle, #f5f5f5)',
                  borderRadius: 'var(--primitive-radius-md, 8px)',
                }}
              >
                <Typography variant="body-medium">padding="md"</Typography>
              </Box>
              <Box
                padding="lg"
                sx={{
                  backgroundColor: 'var(--color-surface-subtle, #f5f5f5)',
                  borderRadius: 'var(--primitive-radius-md, 8px)',
                }}
              >
                <Typography variant="body-medium">padding="lg"</Typography>
              </Box>
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Typography variant="h3">Margin 예제</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing="sm">
              <Box
                margin="xs"
                padding="sm"
                sx={{
                  backgroundColor: 'var(--color-surface-subtle, #f5f5f5)',
                  borderRadius: 'var(--primitive-radius-md, 8px)',
                }}
              >
                <Typography variant="body-medium">margin="xs"</Typography>
              </Box>
              <Box
                margin="sm"
                padding="sm"
                sx={{
                  backgroundColor: 'var(--color-surface-subtle, #f5f5f5)',
                  borderRadius: 'var(--primitive-radius-md, 8px)',
                }}
              >
                <Typography variant="body-medium">margin="sm"</Typography>
              </Box>
              <Box
                margin="md"
                padding="sm"
                sx={{
                  backgroundColor: 'var(--color-surface-subtle, #f5f5f5)',
                  borderRadius: 'var(--primitive-radius-md, 8px)',
                }}
              >
                <Typography variant="body-medium">margin="md"</Typography>
              </Box>
              <Box
                margin="lg"
                padding="sm"
                sx={{
                  backgroundColor: 'var(--color-surface-subtle, #f5f5f5)',
                  borderRadius: 'var(--primitive-radius-md, 8px)',
                }}
              >
                <Typography variant="body-medium">margin="lg"</Typography>
              </Box>
            </Stack>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Typography variant="h3">sx prop 사용</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing="sm">
              <Typography variant="body-medium">sx prop을 사용하여 커스텀 스타일을 적용할 수 있습니다.</Typography>
              <Box
                padding="md"
                sx={{
                  backgroundColor: 'var(--color-interactive-primary, #1976d2)',
                  color: 'white',
                  borderRadius: 'var(--primitive-radius-md, 8px)',
                  textAlign: 'center',
                }}
              >
                <Typography variant="body-medium">커스텀 스타일이 적용된 Box</Typography>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Stack>
    </ComponentPage>
  );
}
