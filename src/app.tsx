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
import { ContainerPage } from './pages/components/ContainerPage';

interface MenuItem {
  id: string;
  label: string;
}

interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    id: 'getting-started',
    label: 'Getting Started',
    items: [
      { id: 'introduction', label: '소개' },
      { id: 'designTokens', label: '디자인 토큰' },
    ],
  },
  {
    id: 'layout',
    label: 'Layout',
    items: [
      { id: 'container', label: 'Container' },
      { id: 'grid', label: 'Grid' },
      { id: 'box', label: 'Box' },
      { id: 'themeProvider', label: 'ThemeProvider' },
    ],
  },
  {
    id: 'inputs',
    label: 'Inputs',
    items: [
      { id: 'button', label: 'Button' },
      { id: 'checkbox', label: 'Checkbox' },
      { id: 'input', label: 'Input' },
      { id: 'select', label: 'Select' },
      { id: 'textfield', label: 'TextField' },
    ],
  },
  {
    id: 'data-display',
    label: 'Data Display',
    items: [
      { id: 'avatar', label: 'Avatar' },
      { id: 'badge', label: 'Badge' },
      { id: 'list', label: 'List' },
      { id: 'table', label: 'Table' },
      { id: 'typography', label: 'Typography' },
    ],
  },
  {
    id: 'feedback',
    label: 'Feedback',
    items: [
      { id: 'alert', label: 'Alert' },
      { id: 'dialog', label: 'Dialog' },
    ],
  },
  {
    id: 'surfaces',
    label: 'Surfaces',
    items: [
      { id: 'accordion', label: 'Accordion' },
      { id: 'card', label: 'Card' },
    ],
  },
  {
    id: 'navigation',
    label: 'Navigation',
    items: [
      { id: 'drawer', label: 'Drawer' },
      { id: 'tabs', label: 'Tabs' },
    ],
  },
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
  container: () => <ContainerPage />,
};

export function App() {
  const [selectedMenuId, setSelectedMenuId] = useState<string>('introduction');

  const handleMenuClick = (id: string) => {
    setSelectedMenuId(id);
  };

  const CurrentPage = pageMap[selectedMenuId] || (() => <Introduction />);

  return (
    <DocsLayout
      menuCategories={menuCategories}
      selectedMenuId={selectedMenuId}
      onMenuClick={handleMenuClick}
    >
      <CurrentPage />
    </DocsLayout>
  );
}
