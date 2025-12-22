import { ComponentPage } from '../ComponentPage';
import { Grid } from '@skybaer0804/pui/Layout';
import { Box } from '@skybaer0804/pui/Layout';
import { Typography } from '@skybaer0804/pui/Typography';
import { Stack } from '@skybaer0804/pui/Layout';
import { Card, CardHeader, CardBody } from '@skybaer0804/pui/Card';

export function GridPage() {
    return (
        <ComponentPage title="Grid" description="Grid 컴포넌트는 반응형 레이아웃을 구성하는 데 사용됩니다.">
            <Stack spacing="md">
                <Card>
                    <CardHeader>
                        <Typography variant="h3">기본 사용법</Typography>
                    </CardHeader>
                    <CardBody>
                        <Stack spacing="sm">
                            <Typography variant="body-medium">
                                Grid는 columns prop을 사용하여 컬럼 구조를 정의합니다.
                            </Typography>
                            <Grid container columns="1fr 1fr 1fr" sx={{ gap: 'var(--primitive-space-4, 16px)' }}>
                                <Box padding="md" sx={{ backgroundColor: 'var(--color-surface-subtle, #f5f5f5)', borderRadius: 'var(--primitive-radius-md, 8px)' }}>
                                    <Typography variant="body-medium">컬럼 1</Typography>
                                </Box>
                                <Box padding="md" sx={{ backgroundColor: 'var(--color-surface-subtle, #f5f5f5)', borderRadius: 'var(--primitive-radius-md, 8px)' }}>
                                    <Typography variant="body-medium">컬럼 2</Typography>
                                </Box>
                                <Box padding="md" sx={{ backgroundColor: 'var(--color-surface-subtle, #f5f5f5)', borderRadius: 'var(--primitive-radius-md, 8px)' }}>
                                    <Typography variant="body-medium">컬럼 3</Typography>
                                </Box>
                            </Grid>
                        </Stack>
                    </CardBody>
                </Card>

                <Card>
                    <CardHeader>
                        <Typography variant="h3">고정 너비 컬럼</Typography>
                    </CardHeader>
                    <CardBody>
                        <Stack spacing="sm">
                            <Typography variant="body-medium">
                                고정 너비와 유연한 너비를 조합할 수 있습니다.
                            </Typography>
                            <Grid container columns="250px 1fr" sx={{ gap: 'var(--primitive-space-4, 16px)' }}>
                                <Box padding="md" sx={{ backgroundColor: 'var(--color-surface-subtle, #f5f5f5)', borderRadius: 'var(--primitive-radius-md, 8px)' }}>
                                    <Typography variant="body-medium">250px 고정</Typography>
                                </Box>
                                <Box padding="md" sx={{ backgroundColor: 'var(--color-surface-subtle, #f5f5f5)', borderRadius: 'var(--primitive-radius-md, 8px)' }}>
                                    <Typography variant="body-medium">나머지 공간 차지</Typography>
                                </Box>
                            </Grid>
                        </Stack>
                    </CardBody>
                </Card>

                <Card>
                    <CardHeader>
                        <Typography variant="h3">반응형 그리드</Typography>
                    </CardHeader>
                    <CardBody>
                        <Stack spacing="sm">
                            <Typography variant="body-medium">
                                반응형 디자인을 위해 다양한 컬럼 구조를 사용할 수 있습니다.
                            </Typography>
                            <Grid container columns="repeat(auto-fit, minmax(200px, 1fr))" sx={{ gap: 'var(--primitive-space-4, 16px)' }}>
                                <Box padding="md" sx={{ backgroundColor: 'var(--color-surface-subtle, #f5f5f5)', borderRadius: 'var(--primitive-radius-md, 8px)' }}>
                                    <Typography variant="body-medium">아이템 1</Typography>
                                </Box>
                                <Box padding="md" sx={{ backgroundColor: 'var(--color-surface-subtle, #f5f5f5)', borderRadius: 'var(--primitive-radius-md, 8px)' }}>
                                    <Typography variant="body-medium">아이템 2</Typography>
                                </Box>
                                <Box padding="md" sx={{ backgroundColor: 'var(--color-surface-subtle, #f5f5f5)', borderRadius: 'var(--primitive-radius-md, 8px)' }}>
                                    <Typography variant="body-medium">아이템 3</Typography>
                                </Box>
                                <Box padding="md" sx={{ backgroundColor: 'var(--color-surface-subtle, #f5f5f5)', borderRadius: 'var(--primitive-radius-md, 8px)' }}>
                                    <Typography variant="body-medium">아이템 4</Typography>
                                </Box>
                            </Grid>
                        </Stack>
                    </CardBody>
                </Card>

                <Card>
                    <CardHeader>
                        <Typography variant="h3">중첩 Grid</Typography>
                    </CardHeader>
                    <CardBody>
                        <Stack spacing="sm">
                            <Typography variant="body-medium">
                                Grid 내부에 Grid를 중첩하여 복잡한 레이아웃을 구성할 수 있습니다.
                            </Typography>
                            <Grid container columns="1fr 1fr" sx={{ gap: 'var(--primitive-space-4, 16px)' }}>
                                <Box padding="md" sx={{ backgroundColor: 'var(--color-surface-subtle, #f5f5f5)', borderRadius: 'var(--primitive-radius-md, 8px)' }}>
                                    <Typography variant="body-medium" sx={{ marginBottom: 'var(--primitive-space-2, 8px)' }}>왼쪽 영역</Typography>
                                    <Grid container columns="1fr 1fr" sx={{ gap: 'var(--primitive-space-2, 8px)' }}>
                                        <Box padding="sm" sx={{ backgroundColor: 'var(--color-surface-default, #ffffff)', borderRadius: 'var(--primitive-radius-sm, 4px)' }}>
                                            <Typography variant="body-small">서브 1</Typography>
                                        </Box>
                                        <Box padding="sm" sx={{ backgroundColor: 'var(--color-surface-default, #ffffff)', borderRadius: 'var(--primitive-radius-sm, 4px)' }}>
                                            <Typography variant="body-small">서브 2</Typography>
                                        </Box>
                                    </Grid>
                                </Box>
                                <Box padding="md" sx={{ backgroundColor: 'var(--color-surface-subtle, #f5f5f5)', borderRadius: 'var(--primitive-radius-md, 8px)' }}>
                                    <Typography variant="body-medium">오른쪽 영역</Typography>
                                </Box>
                            </Grid>
                        </Stack>
                    </CardBody>
                </Card>
            </Stack>
        </ComponentPage>
    );
}

