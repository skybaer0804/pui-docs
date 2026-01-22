import { ComponentChildren } from 'preact';
import { Box } from '@skybaer0804/pui/Layout';
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

export function DocsLayout({ children, menuCategories, selectedMenuId, onMenuClick }: DocsLayoutProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '250px 1fr',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <DocsSidebar menuCategories={menuCategories} selectedMenuId={selectedMenuId} onMenuClick={onMenuClick} />
      <Box sx={{ overflow: 'auto' }}>{children}</Box>
    </Box>
  );
}
