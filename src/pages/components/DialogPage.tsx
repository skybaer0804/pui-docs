import { useState } from 'preact/hooks';
import { ComponentPage } from '../ComponentPage';
import { Dialog } from '@skybaer0804/pui/Dialog';
import { Button } from '@skybaer0804/pui/Button';
import { Stack } from '@skybaer0804/pui/Layout';

export function DialogPage() {
  const [open, setOpen] = useState(false);

  return (
    <ComponentPage
      title="Dialog"
      description="Dialog 컴포넌트는 모달 대화상자를 표시합니다."
    >
      <Stack spacing="md">
        <Button onClick={() => setOpen(true)}>Dialog 열기</Button>
        <Dialog open={open} onClose={() => setOpen(false)} title="Dialog 제목">
          <p>Dialog 콘텐츠입니다.</p>
        </Dialog>
      </Stack>
    </ComponentPage>
  );
}

