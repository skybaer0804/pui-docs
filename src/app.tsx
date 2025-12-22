import { useState } from 'preact/hooks';
import type { JSX } from 'preact';
import { DocsLayout } from './components/DocsLayout';
import { Introduction } from './pages/Introduction';
import { DesignTokens } from './pages/DesignTokens';
import { ButtonPage } from './pages/components/ButtonPage';
import { CardPage } from './pages/components/CardPage';
import { TypographyPage } from './pages/components/TypographyPage';
import { InputPage } from './pages/components/InputPage';
import { ListPage } from './pages/components/ListPage';
import { AlertPage } from './pages/components/AlertPage';
import { AccordionPage } from './pages/components/AccordionPage';
import { AvatarPage } from './pages/components/AvatarPage';
import { BadgePage } from './pages/components/BadgePage';
import { CheckboxPage } from './pages/components/CheckboxPage';
import { DialogPage } from './pages/components/DialogPage';
import { DrawerPage } from './pages/components/DrawerPage';
import { SelectPage } from './pages/components/SelectPage';
import { TablePage } from './pages/components/TablePage';
import { TabsPage } from './pages/components/TabsPage';
import { TextFieldPage } from './pages/components/TextFieldPage';
import { BoxPage } from './pages/components/BoxPage';
import { GridPage } from './pages/components/GridPage';
import { ThemeProviderPage } from './pages/components/ThemeProviderPage';

const menuItems = [
  { id: 'introduction', label: '소개' },
  { id: 'designTokens', label: '디자인 토큰' },
  { id: 'box', label: 'Box' },
  { id: 'grid', label: 'Grid' },
  { id: 'themeProvider', label: 'ThemeProvider' },
  { id: 'accordion', label: 'Accordion' },
  { id: 'alert', label: 'Alert' },
  { id: 'avatar', label: 'Avatar' },
  { id: 'badge', label: 'Badge' },
  { id: 'button', label: 'Button' },
  { id: 'card', label: 'Card' },
  { id: 'checkbox', label: 'Checkbox' },
  { id: 'dialog', label: 'Dialog' },
  { id: 'drawer', label: 'Drawer' },
  { id: 'input', label: 'Input' },
  { id: 'list', label: 'List' },
  { id: 'select', label: 'Select' },
  { id: 'table', label: 'Table' },
  { id: 'tabs', label: 'Tabs' },
  { id: 'textfield', label: 'TextField' },
  { id: 'typography', label: 'Typography' },
];

const pageMap: Record<string, () => JSX.Element> = {
  introduction: () => <Introduction />,
  designTokens: () => <DesignTokens />,
  box: () => <BoxPage />,
  grid: () => <GridPage />,
  themeProvider: () => <ThemeProviderPage />,
  accordion: () => <AccordionPage />,
  alert: () => <AlertPage />,
  avatar: () => <AvatarPage />,
  badge: () => <BadgePage />,
  button: () => <ButtonPage />,
  card: () => <CardPage />,
  checkbox: () => <CheckboxPage />,
  dialog: () => <DialogPage />,
  drawer: () => <DrawerPage />,
  input: () => <InputPage />,
  list: () => <ListPage />,
  select: () => <SelectPage />,
  table: () => <TablePage />,
  tabs: () => <TabsPage />,
  textfield: () => <TextFieldPage />,
  typography: () => <TypographyPage />,
};

export function App() {
  const [selectedMenuId, setSelectedMenuId] = useState<string>('introduction');

  const handleMenuClick = (id: string) => {
    setSelectedMenuId(id);
  };

  const CurrentPage = pageMap[selectedMenuId] || (() => <Introduction />);

  return (
    <DocsLayout
      menuItems={menuItems.map((item) => ({
        ...item,
        onClick: () => handleMenuClick(item.id),
      }))}
      selectedMenuId={selectedMenuId}
    >
      <CurrentPage />
    </DocsLayout>
  );
}
