import { useState } from 'preact/hooks';
import { ComponentPage } from '../ComponentPage';
import { Drawer } from '@skybaer0804/pui/Drawer';
import { Button } from '@skybaer0804/pui/Button';
import { Stack } from '@skybaer0804/pui/Layout';

export function DrawerPage() {
  const [open, setOpen] = useState(false);

  return (
    <ComponentPage
      title="Drawer"
      description="Drawer 컴포넌트는 사이드 패널을 표시합니다."
    >
      <Stack spacing="md">
        <Button onClick={() => setOpen(true)}>Drawer 열기</Button>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <p>Drawer 콘텐츠입니다.</p>
        </Drawer>
      </Stack>
    </ComponentPage>
  );
}

