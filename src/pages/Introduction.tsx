import { Box } from '@skybaer0804/pui/Layout';
import { Typography } from '@skybaer0804/pui/Typography';
import { Card, CardHeader, CardBody } from '@skybaer0804/pui/Card';

export function Introduction() {
  return (
    <Box padding="lg">
      <Typography variant="h1">PUI Library 소개</Typography>
      <Box margin="md" />
      <Card>
        <CardHeader>
          <Typography variant="h2">PUI란?</Typography>
        </CardHeader>
        <CardBody>
          <Typography variant="body1">
            PUI는 Preact 기반의 UI 컴포넌트 라이브러리입니다. 현대적인 웹 애플리케이션을 빠르고 쉽게 구축할 수 있도록 다양한 컴포넌트를 제공합니다.
          </Typography>
        </CardBody>
      </Card>
      <Box margin="lg" />
      <Card>
        <CardHeader>
          <Typography variant="h2">주요 특징</Typography>
        </CardHeader>
        <CardBody>
          <Typography variant="body1">
            • Preact 기반의 경량 컴포넌트<br />
            • TypeScript 지원<br />
            • 반응형 디자인<br />
            • 테마 커스터마이징 지원<br />
            • 접근성 고려
          </Typography>
        </CardBody>
      </Card>
    </Box>
  );
}

