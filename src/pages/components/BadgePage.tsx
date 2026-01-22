import { ComponentPage } from '../ComponentPage';
import { Badge } from '@skybaer0804/pui/Badge';
import { Stack } from '@skybaer0804/pui/Stack';

export function BadgePage() {
    return (
        <ComponentPage title="Badge" description="Badge 컴포넌트는 알림이나 상태를 표시하는 데 사용됩니다.">
            <Stack spacing="md" direction="row">
                <Badge>기본</Badge>
                <Badge color="primary">Primary</Badge>
                <Badge color="secondary">Secondary</Badge>
                <Badge color="success">Success</Badge>
                <Badge color="error">Error</Badge>
            </Stack>
        </ComponentPage>
    );
}
