import { ComponentChildren } from 'preact';
import { Grid } from '@skybaer0804/pui/Layout';
import { DocsSidebar } from './DocsSidebar/DocsSidebar';

export interface MenuItem {
  id: string;
  label: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

interface DocsLayoutProps {
  children: ComponentChildren;
  menuCategories: MenuCategory[];
  selectedMenuId?: string;
  onMenuClick: (id: string) => void;
}

export function DocsLayout({ children, menuCategories, selectedMenuId, onMenuClick, ...props }: DocsLayoutProps) {
  return (
    <Grid container columns="250px 1fr" sx={{ height: '100vh', overflow: 'hidden' }} {...props}>
      <DocsSidebar menuCategories={menuCategories} selectedMenuId={selectedMenuId} onMenuClick={onMenuClick} />
      {children}
    </Grid>
  );
}
