import { ComponentPage } from '../ComponentPage';
import { Button, IconButton } from '@skybaer0804/pui/Button';
import { Stack } from '@skybaer0804/pui/Layout';
import { IconPlus } from '@tabler/icons-react';

export function ButtonPage() {
  return (
    <ComponentPage
      title="Button"
      description="Button 컴포넌트는 사용자 액션을 트리거하는 데 사용됩니다."
    >
      <Stack spacing="md">
        <Stack spacing="sm">
          <h3>Variants</h3>
          <Stack direction="row" spacing="sm">
            <Button variant="filled">Filled</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="text">Text</Button>
          </Stack>
        </Stack>
        <Stack spacing="sm">
          <h3>Colors</h3>
          <Stack direction="row" spacing="sm">
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="error">Error</Button>
          </Stack>
        </Stack>
        <Stack spacing="sm">
          <h3>Sizes</h3>
          <Stack direction="row" spacing="sm" alignItems="center">
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </Stack>
        </Stack>
        <Stack spacing="sm">
          <h3>IconButton</h3>
          <Stack direction="row" spacing="sm">
            <IconButton>
              <IconPlus />
            </IconButton>
            <IconButton color="primary">
              <IconPlus />
            </IconButton>
            <IconButton color="secondary">
              <IconPlus />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </ComponentPage>
  );
}

