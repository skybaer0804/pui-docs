import { ComponentPage } from '../ComponentPage';
import { Avatar } from '@skybaer0804/pui/Avatar';
import { Stack } from '@skybaer0804/pui/Stack';

export function AvatarPage() {
    return (
        <ComponentPage title="Avatar" description="Avatar 컴포넌트는 사용자 프로필 이미지나 이니셜을 표시합니다.">
            <Stack spacing="md" direction="row" align="center">
                <Avatar>A</Avatar>
                <Avatar size="md">B</Avatar>
                <Avatar size="lg">C</Avatar>
            </Stack>
        </ComponentPage>
    );
}
