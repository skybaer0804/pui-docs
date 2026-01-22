import { ComponentPage } from '../ComponentPage';
import { Button, IconButton } from '@skybaer0804/pui/Button';
import { Stack } from '@skybaer0804/pui/Stack';
import { Typography } from '@skybaer0804/pui/Typography';
import { IconPlus, IconTrash, IconDownload, IconSend } from '@tabler/icons-react';

export function ButtonPage() {
  return (
    <ComponentPage title="Button" description="Button 컴포넌트는 사용자 액션을 트리거하는 데 사용됩니다.">
      <Stack spacing="lg">
        {/* Basic Button */}
        <Stack spacing="sm">
          <Typography variant='h3'>Basic Button</Typography>
          <Typography>Button 컴포넌트는 세 가지 variant를 제공합니다: text (기본값), contained, outlined</Typography>
          <Stack direction="row" spacing="sm">
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
          </Stack>
        </Stack>

        {/* Text Button */}
        <Stack spacing="sm">
          <Typography variant='h3'>Text Button</Typography>
          <Typography>Text 버튼은 덜 강조된 액션에 사용되며, 다이얼로그나 카드 내부에 위치합니다.</Typography>
          <Stack direction="row" spacing="sm">
            <Button variant="text">Primary</Button>
            <Button variant="text" disabled>Disabled</Button>
            <Button variant="text" color="secondary">Secondary</Button>
          </Stack>
        </Stack>

        {/* Contained Button */}
        <Stack spacing="sm">
          <Typography variant='h3'>Contained Button</Typography>
          <Typography>Contained 버튼은 높은 강조를 가지며, elevation과 fill을 사용하여 구분됩니다. 앱의 주요 액션에 사용됩니다.</Typography>
          <Stack direction="row" spacing="sm">
            <Button variant="contained">Contained</Button>
            <Button variant="contained" disabled>Disabled</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
          </Stack>
        </Stack>

        {/* Outlined Button */}
        <Stack spacing="sm">
          <Typography variant='h3'>Outlined Button</Typography>
          <Typography>Outlined 버튼은 중간 강조 버튼입니다. 중요하지만 주요 액션은 아닌 액션에 사용됩니다.</Typography>
          <Stack direction="row" spacing="sm">
            <Button variant="outlined">Primary</Button>
            <Button variant="outlined" disabled>Disabled</Button>
            <Button variant="outlined" color="secondary">Secondary</Button>
          </Stack>
        </Stack>

        {/* Color */}
        <Stack spacing="sm">
          <Typography variant='h3'>Color</Typography>
          <Typography>color prop을 사용하여 버튼의 색상을 변경할 수 있습니다.</Typography>
          <Stack direction="row" spacing="sm">
            <Button color="secondary">Secondary</Button>
            <Button variant="contained" color="primary">Contained Primary</Button>
            <Button variant="outlined" color="secondary">Outlined Secondary</Button>
          </Stack>
        </Stack>

        {/* Sizes */}
        <Stack spacing="sm">
          <Typography variant='h3'>Sizes</Typography>
          <Typography>size prop을 사용하여 더 크거나 작은 버튼을 만들 수 있습니다.</Typography>
          <Stack spacing="sm">
            <Stack direction="row" spacing="sm" align="center">
              <Button size="small">Small</Button>
              <Button size="medium">Medium</Button>
              <Button size="large">Large</Button>
            </Stack>
            <Stack direction="row" spacing="sm" align="center">
              <Button variant="contained" size="small">Small</Button>
              <Button variant="contained" size="medium">Medium</Button>
              <Button variant="contained" size="large">Large</Button>
            </Stack>
            <Stack direction="row" spacing="sm" align="center">
              <Button variant="outlined" size="small">Small</Button>
              <Button variant="outlined" size="medium">Medium</Button>
              <Button variant="outlined" size="large">Large</Button>
            </Stack>
          </Stack>
        </Stack>

        {/* Buttons with Icons */}
        <Stack spacing="sm">
          <Typography variant='h3'>Buttons with Icons and Label</Typography>
          <Typography>특정 버튼에 아이콘을 추가하여 UX를 향상시킬 수 있습니다. startIcon과 endIcon prop을 사용합니다.</Typography>
          <Stack direction="row" spacing="sm">
            <Button variant="outlined" startIcon={<IconTrash />}>Delete</Button>
            <Button variant="contained" endIcon={<IconSend />}>Send</Button>
            <Button variant="text" startIcon={<IconPlus />}>Add</Button>
            <Button variant="contained" startIcon={<IconDownload />}>Download</Button>
          </Stack>
        </Stack>

        {/* Icon Button */}
        <Stack spacing="sm">
          <Typography variant='h3'>Icon Button</Typography>
          <Typography>Icon 버튼은 주로 앱 바나 툴바에서 발견됩니다. 아이콘만 표시하는 버튼입니다.</Typography>
          <Stack direction="row" spacing="sm">
            <IconButton>
              <IconTrash />
            </IconButton>
            <IconButton disabled>
              <IconTrash />
            </IconButton>
            <IconButton color="primary">
              <IconPlus />
            </IconButton>
            <IconButton color="secondary">
              <IconPlus />
            </IconButton>
          </Stack>
        </Stack>

        {/* Full Width */}
        <Stack spacing="sm">
          <Typography variant='h3'>Full Width</Typography>
          <Typography>fullWidth prop을 사용하여 버튼을 전체 너비로 만들 수 있습니다.</Typography>
          <Stack spacing="sm">
            <Button variant="contained" fullWidth>Full Width Button</Button>
            <Button variant="outlined" fullWidth>Full Width Outlined</Button>
            <Button variant="text" fullWidth>Full Width Text</Button>
          </Stack>
        </Stack>

        {/* Handling Clicks */}
        <Stack spacing="sm">
          <Typography variant='h3'>Handling Clicks</Typography>
          <Typography>모든 컴포넌트는 root DOM 요소에 적용되는 onClick 핸들러를 받습니다.</Typography>
          <Stack direction="row" spacing="sm">
            <Button
              variant="contained"
              onClick={() => alert('클릭되었습니다!')}
            >
              Click me
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </ComponentPage>
  );
}
