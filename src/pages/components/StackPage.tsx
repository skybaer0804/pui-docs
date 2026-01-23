import { ComponentPage } from '../ComponentPage';
import { Stack } from '@skybaer0804/pui/Stack';
import { Typography } from '@skybaer0804/pui/Typography';
import { Box } from '@skybaer0804/pui/Box';
import { Card, CardHeader, CardBody } from '@skybaer0804/pui/Card';
import { Divider } from '@skybaer0804/pui/Divider';

// Item 컴포넌트 (데모용)
function Item({ children }: { children: any }) {
  return (
    <Box
      padding="md"
      sx={{
        backgroundColor: 'var(--color-surface-subtle, #f5f5f5)',
        borderRadius: 'var(--primitive-radius-md, 8px)',
        textAlign: 'center',
        minHeight: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="body-medium">{children}</Typography>
    </Box>
  );
}

export function StackPage() {
  return (
    <ComponentPage
      title="Stack"
      description="Stack은 요소를 수직 또는 수평으로 배치하는 컨테이너 컴포넌트입니다."
    >
      <Stack spacing={2}>
        {/* Introduction */}
        <Card>
          <CardHeader>
            <Typography variant="h3">소개</Typography>
          </CardHeader>
          <CardBody>
            <Stack>
              <Typography variant="body-medium">
                Stack 컴포넌트는 즉시 자식 요소들을 수직 또는 수평 축을 따라 레이아웃을 관리하며, 각 자식 사이에 선택적 간격과 구분선을 제공합니다.
              </Typography>
              <Typography variant="body-medium">
                Stack은 1차원 레이아웃에 이상적이며, 수직 및 수평 배치가 모두 필요한 경우 Grid를 사용하는 것이 좋습니다.
              </Typography>
            </Stack>
          </CardBody>
        </Card>

        {/* Basics */}
        <Card>
          <CardHeader>
            <Typography variant="h3">기본 사용법</Typography>
          </CardHeader>
          <CardBody>
            <Stack>
              <Typography variant="body-medium">
                Stack 컴포넌트는 일반 컨테이너 역할을 하며, 배치할 요소들을 감쌉니다.
              </Typography>
              <Typography variant="body-medium">
                <code>spacing</code> prop을 사용하여 자식 요소 간의 공간을 제어합니다. spacing 값은 숫자(소수 포함) 또는 문자열일 수 있습니다.
              </Typography>
              <Stack spacing={2}>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
              </Stack>
            </Stack>
          </CardBody>
        </Card>

        {/* Direction */}
        <Card>
          <CardHeader>
            <Typography variant="h3">방향 (Direction)</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing={2} useFlexGap>
              <Typography variant="body-medium">
                기본적으로 Stack은 항목을 열(column)에서 수직으로 배치합니다. <code>direction</code> prop을 사용하여 항목을 행(row)에서 수평으로 배치하세요:
              </Typography>
              <Typography variant="body-small" sx={{ marginBottom: '8px', color: 'var(--color-text-secondary, #666)' }}>
                direction="row" (기본값: "column")
              </Typography>
              <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
              </Stack>
              <Typography variant="body-small" sx={{ marginTop: '16px', marginBottom: '8px', color: 'var(--color-text-secondary, #666)' }}>
                direction="column" (기본값)
              </Typography>
              <Stack direction="column" spacing={2}>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
              </Stack>
              <Typography variant="body-small" sx={{ marginTop: '16px', marginBottom: '8px', color: 'var(--color-text-secondary, #666)' }}>
                direction="row-reverse"
              </Typography>
              <Stack direction="row-reverse" spacing={2} sx={{ justifyContent: 'center' }}>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
              </Stack>
              <Typography variant="body-small" sx={{ marginTop: '16px', marginBottom: '8px', color: 'var(--color-text-secondary, #666)' }}>
                direction="column-reverse"
              </Typography>
              <Stack direction="column-reverse" spacing={2}>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
              </Stack>
            </Stack>
          </CardBody>
        </Card>

        {/* Dividers */}
        <Card>
          <CardHeader>
            <Typography variant="h3">구분선 (Dividers)</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing={2}>
              <Typography variant="body-medium">
                <code>divider</code> prop을 사용하여 각 자식 사이에 요소를 삽입합니다. 아래와 같이 Divider 컴포넌트와 함께 사용하면 특히 잘 작동합니다:
              </Typography>
              <Typography variant="body-small" sx={{ marginBottom: '8px', color: 'var(--color-text-secondary, #666)' }}>
                수평 Stack with 수직 Divider
              </Typography>
              <Stack direction="row" useFlexGap divider={<Divider orientation="vertical" flexItem />} spacing={2}>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
              </Stack>
              <Typography variant="body-small" sx={{ marginTop: '16px', marginBottom: '8px', color: 'var(--color-text-secondary, #666)' }}>
                수직 Stack with 수평 Divider
              </Typography>
              <Stack direction="column" useFlexGap divider={<Divider flexItem />} spacing={2}>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
              </Stack>
            </Stack>
          </CardBody>
        </Card>

        {/* Spacing */}
        <Card>
          <CardHeader>
            <Typography variant="h3">간격 (Spacing)</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing={2}>
              <Typography variant="body-medium">
                <code>spacing</code> prop을 사용하여 자식 요소 간의 공간을 제어합니다. spacing 값은 숫자(소수 포함) 또는 문자열일 수 있습니다.
              </Typography>
              <Typography variant="body-small" sx={{ marginBottom: '8px', color: 'var(--color-text-secondary, #666)' }}>
                spacing={0} (기본값)
              </Typography>
              <Stack spacing={0} direction="row">
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
              </Stack>
              <Typography variant="body-small" sx={{ marginTop: '16px', marginBottom: '8px', color: 'var(--color-text-secondary, #666)' }}>
                spacing={1}
              </Typography>
              <Stack spacing={1} direction="row">
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
              </Stack>
              <Typography variant="body-small" sx={{ marginTop: '16px', marginBottom: '8px', color: 'var(--color-text-secondary, #666)' }}>
                spacing={2}
              </Typography>
              <Stack spacing={2} direction="row">
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
              </Stack>
              <Typography variant="body-small" sx={{ marginTop: '16px', marginBottom: '8px', color: 'var(--color-text-secondary, #666)' }}>
                spacing={4}
              </Typography>
              <Stack spacing={4} direction="row">
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
              </Stack>
              <Typography variant="body-small" sx={{ marginTop: '16px', marginBottom: '8px', color: 'var(--color-text-secondary, #666)' }}>
                spacing="16px" (문자열 값)
              </Typography>
              <Stack spacing="16px" direction="row">
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
              </Stack>
            </Stack>
          </CardBody>
        </Card>

        {/* Responsive values */}
        <Card>
          <CardHeader>
            <Typography variant="h3">반응형 값</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing={2}>
              <Typography variant="body-medium">
                활성 breakpoint에 따라 <code>direction</code> 또는 <code>spacing</code> 값을 전환할 수 있습니다.
              </Typography>
              <Typography variant="body-small" sx={{ marginBottom: '8px', color: 'var(--color-text-secondary, #666)' }}>
                <code>{`direction={{ xs: 'row', md: 'column' }}, spacing={{ xs: 1, md: 2, lg: 4, xl: 8 }}`}</code>
              </Typography>
              <Stack direction={{ xs: 'row', md: 'column' }} spacing={{ xs: 1, md: 2, lg: 4, xl: 8 }}>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
              </Stack>
              <Typography variant="body-medium" sx={{ marginTop: '16px' }}>
                작은 화면에서는 수직으로 배치되고, 큰 화면에서는 수평으로 배치됩니다.
              </Typography>
            </Stack>
          </CardBody>
        </Card>

        {/* Flexbox gap */}
        <Card>
          <CardHeader>
            <Typography variant="h3">Flexbox Gap</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing={2}>
              <Typography variant="body-medium">
                간격 구현에 flexbox gap을 사용하려면 <code>useFlexGap</code> prop을 <code>true</code>로 설정하세요.
              </Typography>
              <Typography variant="body-medium">
                이는 CSS 중첩 선택자를 사용하는 기본 구현의 알려진 제한 사항을 제거합니다. 그러나 CSS flexbox gap은 일부 브라우저에서 완전히 지원되지 않습니다.
              </Typography>
              <Typography variant="body-small" sx={{ marginBottom: '8px', color: 'var(--color-text-secondary, #666)' }}>
                useFlexGap={true} with flexWrap
              </Typography>
              <Stack spacing={2} direction="row" useFlexGap sx={{ flexWrap: 'wrap' }}>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Long content that wraps</Item>
              </Stack>
              <Typography variant="body-medium" sx={{ marginTop: '16px' }}>
                <code>useFlexGap</code>을 사용하면 자식 요소의 margin을 커스터마이징할 수 있습니다.
              </Typography>
            </Stack>
          </CardBody>
        </Card>

        {/* Limitations */}
        <Card>
          <CardHeader>
            <Typography variant="h3">제한 사항</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing={2}>
              <Typography variant="body-medium">
                <strong>자식 요소의 margin:</strong> 기본적으로 자식 요소의 margin을 커스터마이징하는 것은 지원되지 않습니다. 이 제한을 극복하려면 <code>useFlexGap</code> prop을 <code>true</code>로 설정하여 CSS flexbox gap 구현으로 전환하세요.
              </Typography>
              <Typography variant="body-medium">
                <strong>white-space: nowrap:</strong> flex 항목의 초기 설정은 <code>min-width: auto</code>입니다. 자식이 <code>white-space: nowrap</code>을 사용할 때 위치 충돌이 발생할 수 있습니다. 이 경우 <code>{`sx={{ minWidth: 0 }}`}</code>을 설정하세요.
              </Typography>
            </Stack>
          </CardBody>
        </Card>
      </Stack>
    </ComponentPage>
  );
}