import { ComponentChildren } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import { Box, Container } from '@skybaer0804/pui/Layout';
import { Typography } from '@skybaer0804/pui/Typography';

interface ContentLayoutProps {
  title: string;
  children: ComponentChildren;
}

export function ContentLayout({ title, children }: ContentLayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      style={{
        height: '100%',
        overflowY: 'auto',
        backgroundColor: 'var(--color-surface-default, #ffffff)',
      }}
    >
      <Container maxWidth="xl">
        <Box
          padding="lg"
          sx={{
            paddingTop: isScrolled ? 'calc(var(--primitive-space-lg, 24px) + 64px)' : 'var(--primitive-space-lg, 24px)',
            transition: 'padding-top 0.2s ease-in-out',
          }}
        >
          <Box
            sx={{
              position: isScrolled ? 'sticky' : 'static',
              top: 0,
              zIndex: 10,
              paddingTop: isScrolled ? 'var(--primitive-space-lg, 24px)' : 0,
              paddingBottom: isScrolled ? 'var(--primitive-space-md, 16px)' : 0,
              marginBottom: isScrolled ? 'var(--primitive-space-md, 16px)' : 0,
              backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
              backdropFilter: isScrolled ? 'blur(4px)' : 'none',
              WebkitBackdropFilter: isScrolled ? 'blur(4px)' : 'none',
              transition: 'all 0.2s linear',
              borderBottom: isScrolled ? '1px solid var(--color-border-default, #e0e0e0)' : 'none',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: isScrolled ? '1.5rem' : '2rem',
                fontWeight: 600,
                margin: 0,
                transition: 'font-size 0.2s linear',
              }}
            >
              {title}
            </Typography>
          </Box>
          {children}
        </Box>
      </Container>
    </div>
  );
}
