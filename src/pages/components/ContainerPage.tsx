import { Container } from "@skybaer0804/pui/Layout";
import { Box } from "@skybaer0804/pui/Box";
import { ComponentPage } from "../ComponentPage";
import { Typography } from "@skybaer0804/pui/Typography";

export function ContainerPage() {
  return (
    <ComponentPage title="Container" description="Container 컴포넌트는 컨테이너를 구성하는 데 사용됩니다.">
      <Container maxWidth="sm">
        <Box sx={{ backgroundColor: 'var(--color-surface-subtle, #f5f5f5)', borderRadius: 'var(--primitive-radius-md, 8px)', height: '30vh' }}>
          <Typography variant="body-medium">Container maxWidth="sm"</Typography>
        </Box>
      </Container>
      <br />
      <Container maxWidth="md">
        <Box sx={{ backgroundColor: 'var(--color-surface-subtle, #f5f5f5)', borderRadius: 'var(--primitive-radius-md, 8px)', height: '30vh' }}>
          <Typography variant="body-medium">Container maxWidth="md"</Typography>
        </Box>
      </Container>
      <br />
      <Container maxWidth="lg">
        <Box sx={{ backgroundColor: 'var(--color-surface-subtle, #f5f5f5)', borderRadius: 'var(--primitive-radius-md, 8px)', height: '30vh' }}>
          <Typography variant="body-medium">Container maxWidth="lg"</Typography>
        </Box>
      </Container>
      <br />
      <Container maxWidth="xl">
        <Box sx={{ backgroundColor: 'var(--color-surface-subtle, #f5f5f5)', borderRadius: 'var(--primitive-radius-md, 8px)', height: '30vh' }}>
          <Typography variant="body-medium">Container maxWidth="xl"</Typography>
        </Box>
      </Container>
      <br />
      <Container maxWidth={false}>
        <Box sx={{ backgroundColor: 'var(--color-surface-subtle, #f5f5f5)', borderRadius: 'var(--primitive-radius-md, 8px)', height: '30vh' }}>
          <Typography variant="body-medium">Container maxWidth="false"</Typography>
        </Box>
      </Container>
    </ComponentPage>
  );
}