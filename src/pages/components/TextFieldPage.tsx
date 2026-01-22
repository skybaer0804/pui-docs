import { ComponentPage } from '../ComponentPage';
import { TextField } from '@skybaer0804/pui/TextField';
import { Stack } from '@skybaer0804/pui/Stack';
import { useState } from 'preact/hooks';

export function TextFieldPage() {
  const [standardValue, setStandardValue] = useState('');
  const [outlinedValue, setOutlinedValue] = useState('');
  const [filledValue, setFilledValue] = useState('');

  return (
    <ComponentPage title="TextField" description="TextField 컴포넌트는 라벨과 함께 입력 필드를 제공합니다.">
      <Stack spacing="md">
        {/* 기본 사용 */}
        <Stack spacing="sm">
          <h3>기본 사용</h3>
          <TextField label="기본 TextField" placeholder="입력하세요" />
          <TextField label="레이블 없음" placeholder="레이블이 없는 TextField" />
        </Stack>

        {/* Variants */}
        <Stack spacing="sm">
          <h3>Variants</h3>
          <TextField
            variant="outlined"
            label="Outlined (기본)"
            placeholder="Outlined 스타일"
            helperText="Outlined variant는 테두리가 있는 스타일입니다."
          />
          <TextField
            variant="filled"
            label="Filled"
            placeholder="Filled 스타일"
            helperText="Filled variant는 배경색이 있는 스타일입니다."
          />
          <TextField
            variant="standard"
            label="Standard"
            placeholder="Standard 스타일"
            helperText="Standard variant는 밑줄만 있는 스타일입니다."
          />
        </Stack>

        {/* States */}
        <Stack spacing="sm">
          <h3>States</h3>
          <TextField label="Error" error helperText="에러 메시지가 표시됩니다." placeholder="에러 상태" />
          <TextField label="Disabled" disabled placeholder="비활성화된 필드" />
          <TextField label="Read Only" defaultValue="읽기 전용 값" readOnly helperText="읽기 전용 필드입니다." />
          <TextField label="Required" required placeholder="필수 입력 필드" />
        </Stack>

        {/* Helper Text */}
        <Stack spacing="sm">
          <h3>Helper Text</h3>
          <TextField
            label="도움말이 있는 TextField"
            helperText="이것은 도움말 텍스트입니다."
            placeholder="입력하세요"
          />
          <TextField label="에러와 함께 도움말" error helperText="에러 메시지가 표시됩니다." placeholder="입력하세요" />
        </Stack>

        {/* Placeholder */}
        <Stack spacing="sm">
          <h3>Placeholder</h3>
          <TextField label="옵션 선택" placeholder="옵션을 선택하세요" />
          <TextField variant="filled" label="Filled with Placeholder" placeholder="입력하세요" />
          <TextField variant="standard" label="Standard with Placeholder" placeholder="입력하세요" />
        </Stack>

        {/* Controlled Input */}
        <Stack spacing="sm">
          <h3>Controlled Input</h3>
          <TextField
            variant="standard"
            label="Standard Controlled"
            value={standardValue}
            onChange={(e) => setStandardValue((e.target as HTMLInputElement).value)}
            placeholder="입력하세요"
            helperText={`입력된 값: ${standardValue}`}
          />
          <TextField
            variant="outlined"
            label="Outlined Controlled"
            value={outlinedValue}
            onChange={(e) => setOutlinedValue((e.target as HTMLInputElement).value)}
            placeholder="입력하세요"
            helperText={`입력된 값: ${outlinedValue}`}
          />
          <TextField
            variant="filled"
            label="Filled Controlled"
            value={filledValue}
            onChange={(e) => setFilledValue((e.target as HTMLInputElement).value)}
            placeholder="입력하세요"
            helperText={`입력된 값: ${filledValue}`}
          />
        </Stack>

        {/* Multiline */}
        <Stack spacing="sm">
          <h3>Multiline (Textarea)</h3>
          <TextField
            label="Multiline Outlined"
            multiline
            rows={4}
            placeholder="여러 줄 입력이 가능합니다."
            helperText="여러 줄 텍스트를 입력할 수 있습니다."
          />
          <TextField
            variant="filled"
            label="Multiline Filled"
            multiline
            rows={4}
            placeholder="여러 줄 입력이 가능합니다."
            helperText="여러 줄 텍스트를 입력할 수 있습니다."
          />
          <TextField
            variant="standard"
            label="Multiline Standard"
            multiline
            rows={4}
            placeholder="여러 줄 입력이 가능합니다."
            helperText="여러 줄 텍스트를 입력할 수 있습니다."
          />
        </Stack>

        {/* Input Types */}
        <Stack spacing="sm">
          <h3>Input Types</h3>
          <TextField label="Email" type="email" placeholder="email@example.com" />
          <TextField label="Password" type="password" placeholder="비밀번호를 입력하세요" />
          <TextField label="Number" type="number" placeholder="숫자를 입력하세요" />
          <TextField label="Tel" type="tel" placeholder="010-1234-5678" />
          <TextField label="URL" type="url" placeholder="https://example.com" />
        </Stack>

        {/* Combined Examples */}
        <Stack spacing="sm">
          <h3>조합 예시</h3>
          <TextField
            variant="filled"
            label="이메일 주소"
            type="email"
            required
            placeholder="email@example.com"
            helperText="이메일 주소를 입력하세요."
          />
          <TextField
            variant="standard"
            label="비밀번호"
            type="password"
            required
            error
            helperText="비밀번호는 8자 이상이어야 합니다."
            placeholder="비밀번호를 입력하세요"
          />
          <TextField
            variant="outlined"
            label="메시지"
            multiline
            rows={5}
            placeholder="메시지를 입력하세요"
            helperText="최대 500자까지 입력 가능합니다."
          />
        </Stack>
      </Stack>
    </ComponentPage>
  );
}
