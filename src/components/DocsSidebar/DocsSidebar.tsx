import { List, ListItem, ListItemText } from '@skybaer0804/pui/List';
import { Box } from '@skybaer0804/pui/Layout';

const PUI_VERSION = '1.0.0';

interface DocsSidebarProps {
    menuItems: Array<{
        id: string;
        label: string;
        onClick?: () => void;
    }>;
    selectedMenuId?: string;
}

export function DocsSidebar({ menuItems, selectedMenuId }: DocsSidebarProps) {
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
            <List>
                {menuItems.map((item) => (
                    <ListItem
                        key={item.id}
                        onClick={item.onClick}
                        sx={{
                            cursor: 'pointer',
                            backgroundColor:
                                selectedMenuId === item.id
                                    ? 'var(--color-interactive-primary-hover, rgba(0, 0, 0, 0.04))'
                                    : 'transparent',
                        }}
                    >
                        <ListItemText primary={item.label} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

