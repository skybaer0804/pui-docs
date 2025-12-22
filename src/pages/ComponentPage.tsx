import { ComponentChildren } from 'preact';
import { Box } from '@skybaer0804/pui/Layout';
import { Typography } from '@skybaer0804/pui/Typography';
import { Card, CardHeader, CardBody } from '@skybaer0804/pui/Card';
import { ContentLayout } from '../components/PageLayout/ContentLayout';

interface ComponentPageProps {
  title: string;
  description?: string;
  children: ComponentChildren;
}

export function ComponentPage({ title, description, children }: ComponentPageProps) {
  return (
    <ContentLayout title={title}>
      {description && (
        <>
          <Box margin="md" />
          <Typography variant="body-medium">{description}</Typography>
        </>
      )}
      <Box margin="lg" />
      <Card>
        <CardHeader>
          <Typography variant="h3">예제</Typography>
        </CardHeader>
        <CardBody>{children}</CardBody>
      </Card>
    </ContentLayout>
  );
}
