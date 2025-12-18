import { ComponentPage } from '../ComponentPage';
import { Select } from '@skybaer0804/pui/Select';
import { Stack } from '@skybaer0804/pui/Layout';

export function SelectPage() {
  return (
    <ComponentPage
      title="Select"
      description="Select 컴포넌트는 드롭다운 선택 메뉴를 제공합니다."
    >
      <Stack spacing="md">
        <Select
          label="옵션 선택"
          options={[
            { value: 'option1', label: '옵션 1' },
            { value: 'option2', label: '옵션 2' },
            { value: 'option3', label: '옵션 3' },
          ]}
        />
      </Stack>
    </ComponentPage>
  );
}

