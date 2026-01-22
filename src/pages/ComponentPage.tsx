import { ComponentChildren } from 'preact';
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
          <Typography variant="body-medium" sx={{ marginBottom: '16px' }}>{description}</Typography>
        </>
      )}
      {children}
    </ContentLayout>
  );
}
