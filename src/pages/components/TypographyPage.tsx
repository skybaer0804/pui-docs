import { ComponentPage } from '../ComponentPage';
import { Typography } from '@skybaer0804/pui/Typography';
import { Stack } from '@skybaer0804/pui/Stack';

export function TypographyPage() {
  return (
    <ComponentPage
      title="Typography"
      description="Typography 컴포넌트는 텍스트를 다양한 스타일로 표시합니다."
    >
      <Stack spacing="md">
        <Typography variant="display-large">Display Large</Typography>
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="body-large">Body Large - 큰 본문 텍스트입니다.</Typography>
        <Typography variant="body-medium">Body Medium - 기본 본문 텍스트입니다.</Typography>
        <Typography variant="body-small">Body Small - 작은 본문 텍스트입니다.</Typography>
        <Typography variant="caption">Caption - 캡션 텍스트입니다.</Typography>
      </Stack>
    </ComponentPage>
  );
}

