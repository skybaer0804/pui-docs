import { ComponentPage } from '../ComponentPage';
import { Card, CardHeader, CardBody, CardFooter } from '@skybaer0804/pui/Card';
import { Button } from '@skybaer0804/pui/Button';
import { Typography } from '@skybaer0804/pui/Typography';
import { Stack } from '@skybaer0804/pui/Layout';

export function CardPage() {
  return (
    <ComponentPage
      title="Card"
      description="Card 컴포넌트는 콘텐츠를 그룹화하고 표시하는 데 사용됩니다."
    >
      <Stack spacing="md">
        <Card>
          <CardHeader>
            <Typography variant="h3">기본 Card</Typography>
          </CardHeader>
          <CardBody>
            <Typography variant="body1">
              이것은 기본 Card 컴포넌트입니다. CardHeader, CardBody, CardFooter를 사용하여 구조화할 수 있습니다.
            </Typography>
          </CardBody>
          <CardFooter>
            <Button variant="text">자세히 보기</Button>
          </CardFooter>
        </Card>
      </Stack>
    </ComponentPage>
  );
}

