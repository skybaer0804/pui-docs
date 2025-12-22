import { ComponentChildren } from 'preact';
import { Grid } from '@skybaer0804/pui/Layout';
import { DocsSidebar } from './DocsSidebar/DocsSidebar';

interface DocsLayoutProps {
  children: ComponentChildren;
  menuItems: Array<{
    id: string;
    label: string;
    onClick?: () => void;
  }>;
  selectedMenuId?: string;
}

export function DocsLayout({ children, menuItems, selectedMenuId, ...props }: DocsLayoutProps) {
  return (
    <Grid container columns="250px 1fr" sx={{ height: '100vh', overflow: 'hidden' }} {...props}>
      <DocsSidebar menuItems={menuItems} selectedMenuId={selectedMenuId} />
      {children}
    </Grid>
  );
}
