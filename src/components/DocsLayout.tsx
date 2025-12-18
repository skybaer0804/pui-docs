import { ComponentChildren } from 'preact';
import { Grid } from '@skybaer0804/pui/Layout';
import { List, ListItem, ListItemText } from '@skybaer0804/pui/List';
import { Box } from '@skybaer0804/pui/Layout';

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
    <Grid container columns="250px 1fr" style={{ height: '100vh', overflow: 'hidden' }} {...props}>
      <Box
        style={{
          height: '100%',
          overflowY: 'auto',
          borderRight: '1px solid var(--color-border-default, #e0e0e0)',
          backgroundColor: 'var(--color-surface-default, #ffffff)',
        }}
      >
        <Box padding="md" style={{ position: 'sticky', top: 0, backgroundColor: 'var(--color-surface-default, #ffffff)', zIndex: 10 }}>
          <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>PUI Components</h2>
        </Box>
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.id}
              onClick={item.onClick}
              style={{
                cursor: 'pointer',
                backgroundColor: selectedMenuId === item.id ? 'var(--color-interactive-primary-hover, rgba(0, 0, 0, 0.04))' : 'transparent',
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box
        style={{
          height: '100%',
          overflowY: 'auto',
          backgroundColor: 'var(--color-surface-default, #ffffff)',
        }}
      >
        {children}
      </Box>
    </Grid>
  );
}

