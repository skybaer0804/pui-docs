import { ComponentPage } from '../ComponentPage';
import { TextField } from '@skybaer0804/pui/TextField';
import { Stack } from '@skybaer0804/pui/Layout';

export function TextFieldPage() {
  return (
    <ComponentPage
      title="TextField"
      description="TextField 컴포넌트는 라벨과 함께 입력 필드를 제공합니다."
    >
      <Stack spacing="md">
        <TextField label="기본 TextField" placeholder="입력하세요" />
        <TextField label="Required" placeholder="필수 입력" required />
        <TextField label="Error" placeholder="에러 상태" error helperText="에러 메시지" />
        <TextField label="Disabled" placeholder="비활성화" disabled />
      </Stack>
    </ComponentPage>
  );
}

