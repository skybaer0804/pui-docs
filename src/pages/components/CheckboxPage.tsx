import { useState } from 'preact/hooks';
import { ComponentPage } from '../ComponentPage';
import { Checkbox } from '@skybaer0804/pui/Checkbox';
import { Stack } from '@skybaer0804/pui/Layout';

export function CheckboxPage() {
  const [checked, setChecked] = useState(false);

  return (
    <ComponentPage
      title="Checkbox"
      description="Checkbox 컴포넌트는 선택 옵션을 표시하는 데 사용됩니다."
    >
      <Stack spacing="md">
        <Checkbox checked={checked} onChange={(e) => setChecked(e.currentTarget.checked)}>
          기본 Checkbox
        </Checkbox>
        <Checkbox checked disabled>
          Disabled Checkbox
        </Checkbox>
        <Checkbox indeterminate>
          Indeterminate Checkbox
        </Checkbox>
      </Stack>
    </ComponentPage>
  );
}

