import { ComponentPage } from '../ComponentPage';
import { Typography } from '@skybaer0804/pui/Typography';
import { Stack } from '@skybaer0804/pui/Layout';

export function TypographyPage() {
  return (
    <ComponentPage
      title="Typography"
      description="Typography 컴포넌트는 텍스트를 다양한 스타일로 표시합니다."
    >
      <Stack spacing="md">
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="h5">Heading 5</Typography>
        <Typography variant="h6">Heading 6</Typography>
        <Typography variant="body1">Body 1 - 기본 본문 텍스트입니다.</Typography>
        <Typography variant="body2">Body 2 - 작은 본문 텍스트입니다.</Typography>
        <Typography variant="caption">Caption - 캡션 텍스트입니다.</Typography>
      </Stack>
    </ComponentPage>
  );
}

