import { List, ListItem, ListItemText } from '@skybaer0804/pui/List';
import { Box } from '@skybaer0804/pui/Box';
import { Collapsible } from '@skybaer0804/pui/Collapsible';
import type { MenuCategory } from '../DocsLayout';

const PUI_VERSION = '1.0.0';

interface DocsSidebarProps {
  menuCategories: MenuCategory[];
  selectedMenuId?: string;
  onMenuClick: (id: string) => void;
}

export function DocsSidebar({ menuCategories, selectedMenuId, onMenuClick }: DocsSidebarProps) {
  // 선택된 메뉴가 속한 카테고리를 찾아서 기본으로 열어둠
  const getDefaultOpenCategory = () => {
    if (!selectedMenuId) return 'getting-started';
    for (const category of menuCategories) {
      if (category.items.some((item) => item.id === selectedMenuId)) {
        return category.id;
      }
    }
    return 'getting-started';
  };

  return (
    <Box
      sx={{
        height: '100%',
        overflowY: 'auto',
        borderRight: '1px solid var(--color-border-default, #e0e0e0)',
        backgroundColor: 'var(--color-surface-default, #ffffff)',
      }}
    >
      <Box
        padding="md"
        sx={{ position: 'sticky', top: 0, backgroundColor: 'var(--color-surface-default, #ffffff)', zIndex: 10 }}
      >
        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap' }}>
          <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>PUI Components</h2>
          <span style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary, rgba(0,0,0,0.6))' }}>
            v{PUI_VERSION}
          </span>
        </Box>
      </Box>
      <Box sx={{ padding: '8px' }}>
        {menuCategories.map((category) => (
          <Collapsible
            key={category.id}
            title={category.label}
            defaultOpen={category.id === getDefaultOpenCategory()}
            sx={{ marginBottom: '4px' }}
          >
            <List sx={{ padding: 0 }}>
              {category.items.map((item) => (
                <ListItem
                  key={item.id}
                  onClick={() => onMenuClick(item.id)}
                  sx={{
                    cursor: 'pointer',
                    paddingLeft: '24px',
                    backgroundColor:
                      selectedMenuId === item.id
                        ? 'var(--color-interactive-primary-hover, rgba(0, 0, 0, 0.04))'
                        : 'transparent',
                    '&:hover': {
                      backgroundColor: 'var(--color-interactive-primary-hover, rgba(0, 0, 0, 0.04))',
                    },
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItem>
              ))}
            </List>
          </Collapsible>
        ))}
      </Box>
    </Box>
  );
}

