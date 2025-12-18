import { ComponentPage } from '../ComponentPage';
import { Avatar } from '@skybaer0804/pui/Avatar';
import { Stack } from '@skybaer0804/pui/Layout';

export function AvatarPage() {
  return (
    <ComponentPage
      title="Avatar"
      description="Avatar 컴포넌트는 사용자 프로필 이미지나 이니셜을 표시합니다."
    >
      <Stack spacing="md" direction="row" alignItems="center">
        <Avatar>A</Avatar>
        <Avatar size="medium">B</Avatar>
        <Avatar size="large">C</Avatar>
      </Stack>
    </ComponentPage>
  );
}

