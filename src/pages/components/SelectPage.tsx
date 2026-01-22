import { ComponentPage } from '../ComponentPage';
import { Select } from '@skybaer0804/pui/Select';
import { Stack } from '@skybaer0804/pui/Stack';

const commonOptions = [
  { value: 'option1', label: '옵션 1' },
  { value: 'option2', label: '옵션 2' },
  { value: 'option3', label: '옵션 3' },
  { value: 'option4', label: '옵션 4' },
];

export function SelectPage() {
  return (
    <ComponentPage title="Select" description="Select 컴포넌트는 드롭다운 선택 메뉴를 제공합니다.">
      <Stack spacing="md">
        {/* 기본 사용 */}
        <Stack spacing="sm">
          <h3>기본 사용</h3>
          <Select options={commonOptions} />
          <Select label="레이블 없음" options={commonOptions} />
        </Stack>

        {/* Variants */}
        <Stack spacing="sm">
          <h3>Variants</h3>
          <Select label="Outlined (기본)" variant="outlined" options={commonOptions} />
          <Select label="Filled" variant="filled" options={commonOptions} />
          <Select label="Standard" variant="standard" options={commonOptions} />
        </Stack>

        {/* Sizes */}
        <Stack spacing="sm">
          <h3>Sizes</h3>
          <Select label="Small" size="sm" options={commonOptions} />
          <Select label="Medium (기본)" size="md" options={commonOptions} />
          <Select label="Large" size="lg" options={commonOptions} />
        </Stack>

        {/* States */}
        <Stack spacing="sm">
          <h3>States</h3>
          <Select label="Error" error helperText="에러 메시지입니다." options={commonOptions} />
          <Select label="Disabled" disabled options={commonOptions} />
          <Select label="Read Only" readOnly defaultValue="option1" options={commonOptions} />
          <Select label="Required" required options={commonOptions} />
        </Stack>

        {/* Helper Text */}
        <Stack spacing="sm">
          <h3>Helper Text</h3>
          <Select label="도움말이 있는 Select" helperText="이것은 도움말 텍스트입니다." options={commonOptions} />
          <Select label="에러와 함께 도움말" error helperText="에러 메시지가 표시됩니다." options={commonOptions} />
        </Stack>

        {/* Placeholder */}
        <Stack spacing="sm">
          <h3>Placeholder</h3>
          <Select label="옵션 선택" placeholder="옵션을 선택하세요" options={commonOptions} />
        </Stack>

        {/* Options with Disabled */}
        <Stack spacing="sm">
          <h3>비활성화된 옵션</h3>
          <Select
            label="옵션 선택"
            options={[
              { value: 'option1', label: '옵션 1' },
              { value: 'option2', label: '옵션 2', disabled: true },
              { value: 'option3', label: '옵션 3' },
              { value: 'option4', label: '옵션 4', disabled: true },
            ]}
          />
        </Stack>

        {/* Width Options */}
        <Stack spacing="sm">
          <h3>Width Options</h3>
          <Select label="Full Width (기본)" fullWidth options={commonOptions} />
          <Select label="Auto Width" autoWidth options={commonOptions} />
        </Stack>

        {/* Combined Examples */}
        <Stack spacing="sm">
          <h3>조합 예시</h3>
          <Select
            label="Small Filled Select"
            variant="filled"
            size="sm"
            placeholder="선택하세요"
            options={commonOptions}
          />
          <Select
            label="Large Standard Select with Helper"
            variant="standard"
            size="lg"
            helperText="큰 크기의 표준 스타일 Select입니다."
            options={commonOptions}
          />
          <Select
            label="Required Error Select"
            variant="outlined"
            required
            error
            helperText="필수 항목입니다."
            options={commonOptions}
          />
        </Stack>
      </Stack>
    </ComponentPage>
  );
}
