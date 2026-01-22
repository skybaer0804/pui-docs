import { ComponentPage } from '../ComponentPage';
import { Input } from '@skybaer0804/pui/Input';
import { TextField } from '@skybaer0804/pui/TextField';
import { Stack } from '@skybaer0804/pui/Stack';

export function InputPage() {
  return (
    <ComponentPage
      title="Input & TextField"
      description="Input과 TextField 컴포넌트는 사용자 입력을 받는 데 사용됩니다."
    >
      <Stack spacing="md">
        <Stack spacing="sm">
          <h3>Input</h3>
          <Input placeholder="기본 Input" />
          <Input placeholder="Disabled Input" disabled />
        </Stack>
        <Stack spacing="sm">
          <h3>TextField</h3>
          <TextField label="Label" placeholder="TextField with label" />
          <TextField label="Required" placeholder="Required field" />
          <TextField label="Error" placeholder="Error state" error helperText="에러 메시지입니다." />
        </Stack>
      </Stack>
    </ComponentPage>
  );
}

