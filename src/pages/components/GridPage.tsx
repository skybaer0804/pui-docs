import { ComponentPage } from '../ComponentPage';
import { Grid } from '@skybaer0804/pui/Grid';
import { Box } from '@skybaer0804/pui/Layout';
import { Typography } from '@skybaer0804/pui/Typography';
import { Stack } from '@skybaer0804/pui/Layout';
import { Card, CardHeader, CardBody } from '@skybaer0804/pui/Card';

// Item 컴포넌트 (데모용)
function Item({ children }: { children: any }) {
  return (
    <Box
      padding="md"
      sx={{
        width: '100%',
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

export function GridPage() {
  return (
    <ComponentPage
      title="Grid"
      description="반응형 레이아웃 그리드는 화면 크기와 방향에 맞춰 조정되어 레이아웃 전반에 걸쳐 일관성을 보장합니다."
    >
      <Stack spacing="lg">
        {/* How it works */}
        <Card>
          <CardHeader>
            <Typography variant="h2">작동 방식</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing="sm">
              <Typography variant="body-medium">
                Grid 시스템은 <code>Grid</code> 컴포넌트로 구현됩니다:
              </Typography>
              <ul style={{ paddingLeft: '24px' }}>
                <li>
                  <Typography variant="body-medium">
                    높은 유연성을 위해 CSS Flexbox를 사용합니다 (CSS Grid가 아닙니다).
                  </Typography>
                </li>
                <li>
                  <Typography variant="body-medium">
                    Grid는 항상 flex item입니다. <code>container</code> prop을 사용하여 flex container를 추가하세요.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body-medium">
                    아이템 너비는 백분율로 설정되므로 항상 유동적이며 부모 요소에 상대적으로 크기가 조정됩니다.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body-medium">
                    기본 그리드 breakpoint는 5개입니다: xs, sm, md, lg, xl
                  </Typography>
                </li>
                <li>
                  <Typography variant="body-medium">
                    각 breakpoint에 대해 정수 값을 지정하여 뷰포트 너비가 breakpoint 제약 조건을 만족할 때 12개 사용 가능한 컬럼 중 몇 개가 컴포넌트에 의해 차지되는지 나타낼 수 있습니다.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body-medium">
                    아이템 간 간격을 추가하기 위해 gap CSS 속성을 사용합니다.
                  </Typography>
                </li>
              </ul>
            </Stack>
          </CardBody>
        </Card>

        {/* Basic grid */}
        <Card>
          <CardHeader>
            <Typography variant="h2">기본 그리드</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing="sm">
              <Typography variant="body-medium">
                그리드 레이아웃을 만들려면 container가 필요합니다. <code>container</code> prop을 사용하여 그리드 아이템을 감싸는 그리드 컨테이너를 만드세요 (Grid는 항상 아이템입니다).
              </Typography>
              <Typography variant="body-medium">
                컬럼 너비는 1과 12 사이의 정수 값입니다. 예를 들어, <code>size={8}</code>인 아이템은 그리드 컨테이너 너비의 절반을 차지합니다. spacing prop을 지정하지 않으면 기본값 2가 적용됩니다.
              </Typography>
              <Grid container>
                <Grid size={8}>
                  <Item>size=8</Item>
                </Grid>
                <Grid size={4}>
                  <Item>size=4</Item>
                </Grid>
                <Grid size={4}>
                  <Item>size=4</Item>
                </Grid>
                <Grid size={8}>
                  <Item>size=8</Item>
                </Grid>
              </Grid>
            </Stack>
          </CardBody>
        </Card>

        {/* Multiple breakpoints */}
        <Card>
          <CardHeader>
            <Typography variant="h2">여러 Breakpoint</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing="sm">
              <Typography variant="body-medium">
                아이템은 여러 너비를 가질 수 있으며, 정의된 breakpoint에서 레이아웃이 변경됩니다. 너비 값은 모든 더 넓은 breakpoint에 적용되며, 더 큰 breakpoint는 더 작은 breakpoint에 지정된 값을 재정의합니다.
              </Typography>
              <Typography variant="body-medium">
                예를 들어, <code>{`size={{ xs: 12, sm: 6 }}`}</code>인 컴포넌트는 뷰포트 너비가 600px 미만일 때 전체 뷰포트 너비를 차지합니다. 이 크기를 초과하면 컴포넌트는 전체 너비의 절반(12개 중 6개 컬럼)을 차지합니다.
              </Typography>
              <Grid container>
                <Grid size={{ xs: 6, md: 8 }}>
                  <Item>xs=6 md=8</Item>
                </Grid>
                <Grid size={{ xs: 6, md: 4 }}>
                  <Item>xs=6 md=4</Item>
                </Grid>
                <Grid size={{ xs: 6, md: 4 }}>
                  <Item>xs=6 md=4</Item>
                </Grid>
                <Grid size={{ xs: 6, md: 8 }}>
                  <Item>xs=6 md=8</Item>
                </Grid>
              </Grid>
            </Stack>
          </CardBody>
        </Card>

        {/* Spacing */}
        <Card>
          <CardHeader>
            <Typography variant="h2">Spacing</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing="sm">
              <Typography variant="body-medium">
                <code>spacing</code> prop을 사용하여 자식 요소 간의 공간을 제어합니다. spacing 값은 양수(소수 포함) 또는 문자열일 수 있습니다. 기본값은 2입니다.
              </Typography>
              <Typography variant="body-small" sx={{ marginBottom: '8px', color: 'var(--color-text-secondary, #666)' }}>
                기본 spacing (spacing prop 없음, 기본값 2)
              </Typography>
              <Grid container>
                <Grid size={6}>
                  <Item>기본 spacing=2</Item>
                </Grid>
                <Grid size={6}>
                  <Item>기본 spacing=2</Item>
                </Grid>
              </Grid>
              <Typography variant="body-small" sx={{ marginTop: '16px', marginBottom: '8px', color: 'var(--color-text-secondary, #666)' }}>
                spacing=0
              </Typography>
              <Grid container spacing={0}>
                <Grid size={6}>
                  <Item>spacing=0</Item>
                </Grid>
                <Grid size={6}>
                  <Item>spacing=0</Item>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid size={6}>
                  <Item>spacing=1</Item>
                </Grid>
                <Grid size={6}>
                  <Item>spacing=1</Item>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid size={6}>
                  <Item>spacing=2</Item>
                </Grid>
                <Grid size={6}>
                  <Item>spacing=2</Item>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid size={6}>
                  <Item>spacing=3</Item>
                </Grid>
                <Grid size={6}>
                  <Item>spacing=3</Item>
                </Grid>
              </Grid>
            </Stack>
          </CardBody>
        </Card>

        {/* Row and column spacing */}
        <Card>
          <CardHeader>
            <Typography variant="h2">행 및 열 간격</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing="sm">
              <Typography variant="body-medium">
                <code>rowSpacing</code> 및 <code>columnSpacing</code> prop을 사용하면 행과 열 간격을 독립적으로 지정할 수 있습니다. CSS Grid의 <code>row-gap</code> 및 <code>column-gap</code> 속성과 유사하게 동작합니다.
              </Typography>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid size={6}>
                  <Item>1</Item>
                </Grid>
                <Grid size={6}>
                  <Item>2</Item>
                </Grid>
                <Grid size={6}>
                  <Item>3</Item>
                </Grid>
                <Grid size={6}>
                  <Item>4</Item>
                </Grid>
              </Grid>
            </Stack>
          </CardBody>
        </Card>

        {/* Responsive values */}
        <Card>
          <CardHeader>
            <Typography variant="h2">반응형 값</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing="sm">
              <Typography variant="body-medium">
                prop 값을 설정하여 주어진 breakpoint가 활성화될 때 변경할 수 있습니다. 다음 데모는 반응형 레이아웃 그리드를 구현합니다:
              </Typography>
              <Typography variant="body-medium" sx={{ marginTop: '16px' }}>
                반응형 값은 다음 prop에서 지원됩니다:
              </Typography>
              <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                <li><code>size</code></li>
                <li><code>columns</code></li>
                <li><code>columnSpacing</code></li>
                <li><code>direction</code></li>
                <li><code>rowSpacing</code></li>
                <li><code>spacing</code></li>
                <li><code>offset</code></li>
              </ul>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={12}>
                {Array.from(Array(6)).map((_, index) => (
                  <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}>
                    <Item>{index + 1}</Item>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </CardBody>
        </Card>

        {/* Auto-layout */}
        <Card>
          <CardHeader>
            <Typography variant="h2">Auto-layout</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing="sm">
              <Typography variant="body-medium">
                Auto-layout 기능은 모든 아이템에 동일한 공간을 제공합니다. 하나의 아이템 너비를 설정하면 다른 아이템이 자동으로 크기를 조정하여 일치시킵니다.
              </Typography>
              <Grid container spacing={3}>
                <Grid size="grow">
                  <Item>size=grow</Item>
                </Grid>
                <Grid size={6}>
                  <Item>size=6</Item>
                </Grid>
                <Grid size="grow">
                  <Item>size=grow</Item>
                </Grid>
              </Grid>
            </Stack>
          </CardBody>
        </Card>

        {/* Variable width content */}
        <Card>
          <CardHeader>
            <Typography variant="h2">가변 너비 콘텐츠</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing="sm">
              <Typography variant="body-medium">
                breakpoint의 값이 <code>"auto"</code>로 지정되면 컬럼의 크기가 콘텐츠 너비에 맞게 자동으로 조정됩니다. 아래 데모는 이것이 어떻게 작동하는지 보여줍니다:
              </Typography>
              <Grid container spacing={3}>
                <Grid size="auto">
                  <Item>size=auto</Item>
                </Grid>
                <Grid size={6}>
                  <Item>size=6</Item>
                </Grid>
                <Grid size="grow">
                  <Item>size=grow</Item>
                </Grid>
              </Grid>
            </Stack>
          </CardBody>
        </Card>

        {/* Nested grid */}
        <Card>
          <CardHeader>
            <Typography variant="h2">중첩 그리드</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing="sm">
              <Typography variant="body-medium">
                다른 그리드 컨테이너 내부에 직접 자식으로 렌더링되는 그리드 컨테이너는 상위 레벨에서 컬럼과 spacing을 상속하는 중첩 그리드입니다. 또한 해당 prop을 받으면 상위 레벨 그리드의 prop도 상속합니다.
              </Typography>
              <Grid container spacing={2}>
                <Grid size={8}>
                  <Item>size=8</Item>
                </Grid>
                <Grid size={4}>
                  <Item>size=4</Item>
                </Grid>
                <Grid size={4}>
                  <Item>size=4</Item>
                </Grid>
                <Grid size={8}>
                  <Grid container spacing={1}>
                    <Grid size={6}>
                      <Item>Nested size=6</Item>
                    </Grid>
                    <Grid size={6}>
                      <Item>Nested size=6</Item>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Stack>
          </CardBody>
        </Card>

        {/* Columns */}
        <Card>
          <CardHeader>
            <Typography variant="h2">Columns</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing="sm">
              <Typography variant="body-medium">
                <code>columns</code> {`prop을 사용하여 그리드의 기본 컬럼 수(12 -> 16)를 변경할 수 있습니다`}
              </Typography>
              <Grid container columns={16}>
                <Grid size={8}>
                  <Item>size=8</Item>
                </Grid>
                <Grid size={8}>
                  <Item>size=8</Item>
                </Grid>
              </Grid>
            </Stack>
          </CardBody>
        </Card>

        {/* Offset */}
        <Card>
          <CardHeader>
            <Typography variant="h2">Offset</Typography>
          </CardHeader>
          <CardBody>
            <Stack spacing="sm">
              <Typography variant="body-medium">
                <code>offset</code> prop은 아이템을 그리드의 오른쪽으로 밀어냅니다. 이 prop은 다음을 허용합니다:
              </Typography>
              <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                <li>
                  <Typography variant="body-medium">
                    숫자 — 예를 들어, <code>{`offset={{ md: 2 }}`}</code>는 뷰포트 크기가 <code>md</code> breakpoint와 같거나 클 때 아이템을 두 컬럼 오른쪽으로 밀어냅니다.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body-medium">
                    <code>"auto"</code> — 이것은 아이템을 그리드 컨테이너의 맨 오른쪽으로 밀어냅니다.
                  </Typography>
                </li>
              </ul>
              <Grid container spacing={3} sx={{ flexGrow: 1 }}>
                <Grid size={{ xs: 6, md: 2 }} offset={{ xs: 3, md: 0 }}>
                  <Item>1</Item>
                </Grid>
                <Grid size={{ xs: 4, md: 2 }} offset={{ md: 'auto' }}>
                  <Item>2</Item>
                </Grid>
                <Grid size={{ xs: 4, md: 2 }} offset={{ xs: 4, md: 0 }}>
                  <Item>3</Item>
                </Grid>
                <Grid size={{ xs: 'grow', md: 6 }} offset={{ md: 2 }}>
                  <Item>4</Item>
                </Grid>
              </Grid>
            </Stack>
          </CardBody>
        </Card>
      </Stack>
    </ComponentPage>
  );
}
