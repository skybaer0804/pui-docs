import { ComponentPage } from '../ComponentPage';
import { Alert } from '@skybaer0804/pui/Alert';
import { Stack } from '@skybaer0804/pui/Stack';

export function AlertPage() {
  return (
    <ComponentPage
      title="Alert"
      description="Alert 컴포넌트는 중요한 메시지를 사용자에게 알리는 데 사용됩니다."
    >
      <Stack spacing="md">
        <Alert severity="info">정보 메시지입니다.</Alert>
        <Alert severity="success">성공 메시지입니다.</Alert>
        <Alert severity="warning">경고 메시지입니다.</Alert>
        <Alert severity="error">에러 메시지입니다.</Alert>
      </Stack>
    </ComponentPage>
  );
}

