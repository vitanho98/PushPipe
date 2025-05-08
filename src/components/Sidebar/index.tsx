"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Separator } from "../ui/separator";
import {
  PanelLeftClose,
  PanelLeftOpen,
  PanelRightClose,
  PanelRightOpen,
} from "lucide-react";
import { ReactNode, createContext, useContext, useState } from "react";
import { Button } from "../ui/button";

type SidebarPosition = "left" | "right";

interface SidebarContextProps {
  id: string;
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
  toggle: () => void;
  close: () => void;
  open: () => void;
  getToggleSidebarIcon: (size?: number) => ReactNode;
  position: SidebarPosition;
  isAnimating: boolean;
  setIsAnimating: (value: boolean) => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar deve ser usado dentro de um SidebarProvider");
  }
  return context;
}

interface SidebarProviderProps {
  sidebarId: string;
  children: ReactNode;
  defaultIsCollapsed?: boolean;
  position?: SidebarPosition;
}

const ANIMATION_DURATION_IN_MS = 200;
const MOBILE_BREAKPOINT = 600;

function SidebarProvider({
  sidebarId,
  children,
  defaultIsCollapsed = false,
  position = "left",
}: SidebarProviderProps) {
  const [isCollapsed, setIsCollapsed] = useLocalStorage<boolean>(
    `sidebar-${sidebarId}-collapsed`,
    defaultIsCollapsed
  );
  const [isAnimating, setIsAnimating] = useState(false);

  const contextValue: SidebarContextProps = {
    id: sidebarId,
    isCollapsed,
    setIsCollapsed,
    toggle: () => {
      setIsAnimating(true);
      setIsCollapsed((prev) => !prev);
      setTimeout(() => setIsAnimating(false), ANIMATION_DURATION_IN_MS);
    },
    close: () => {
      setIsAnimating(true);
      setIsCollapsed(true);
      setTimeout(() => setIsAnimating(false), ANIMATION_DURATION_IN_MS);
    },
    open: () => {
      setIsAnimating(true);
      setIsCollapsed(false);
      setTimeout(() => setIsAnimating(false), ANIMATION_DURATION_IN_MS);
    },
    getToggleSidebarIcon: (size?: number) =>
      getCollapseIcon(position, isCollapsed, size),
    position,
    isAnimating,
    setIsAnimating,
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
}

function getCollapseIcon(
  position: SidebarPosition,
  isCollapsed: boolean,
  size?: number
) {
  const iconSize = size || 20;
  const AVAILABLE_ICONS = {
    left: {
      open: PanelLeftOpen,
      closed: PanelLeftClose,
    },
    right: {
      open: PanelRightOpen,
      closed: PanelRightClose,
    },
  };

  const panelState = isCollapsed ? "open" : "closed";
  const Icon =
    AVAILABLE_ICONS[position][panelState] || AVAILABLE_ICONS.left.open;

  return <Icon size={iconSize} />;
}

interface CommonComponentsProps {
  className?: string;
  children?: ReactNode;
}

interface SidebarProps extends CommonComponentsProps {
  expandedWidth?: string;
  collapsedWidth?: string;
  position?: SidebarPosition;
  showInternalTrigger?: boolean;
  sidebarResponsiveBreakpoint?: number;
  className?: string;
  children?: ReactNode;
}

interface SidebarHeaderProps extends CommonComponentsProps {
  children: ReactNode;
}

interface SidebarSectionProps extends CommonComponentsProps {
  title?: string;
  icon?: ReactNode;
  separator?: boolean;
  showPulseIndicator?: boolean;
}

interface SidebarFooterProps extends CommonComponentsProps {
  children: ReactNode;
}

const SidebarHeader = ({ children, className = "" }: SidebarHeaderProps) => (
  <header className={`${className}`}>{children}</header>
);

const SidebarSection = ({
  children,
  title,
  icon,
  className = "",
  separator = false,
  showPulseIndicator = false,
}: SidebarSectionProps) => (
  <div>
    <section className={`${className}`}>
      {title && (
        <header className="flex items-center gap-2">
          {icon && icon}
          <h2 className="font-bold">{title}</h2>
          {showPulseIndicator && (
            <div className="bg-adstart-gradient rounded-full w-2 h-2 animate-pulse" />
          )}
        </header>
      )}

      {children}
    </section>

    {separator && <Separator className="my-4" />}
  </div>
);

const SidebarFooter = ({ children, className = "" }: SidebarFooterProps) => (
  <footer className={`${className}`}>{children}</footer>
);

function Sidebar({
  children,
  className = "",
  expandedWidth = "250px",
  collapsedWidth = "80px",
  position = "left",
  showInternalTrigger = false,
  sidebarResponsiveBreakpoint,
}: SidebarProps) {
  const contextValue = useContext(SidebarContext);
  const isMobile = useIsMobile(sidebarResponsiveBreakpoint);
  const isCollapsed = contextValue?.isCollapsed || false;

  const responsiveExpandedWidth = isMobile ? "400px" : expandedWidth;
  const responsiveCollapsedWidth = isMobile ? "0px" : collapsedWidth;
  const responsiveStyle = isMobile ? "fixed top-0 right-0 z-50" : "relative";

  const sidebarWidth = isCollapsed
    ? responsiveCollapsedWidth
    : responsiveExpandedWidth;
  const borderSide = position === "left" ? "border-r" : "border-l";
  const textNowrap = contextValue?.isAnimating
    ? "text-nowrap overflow-x-hidden"
    : "";

  return (
    <aside
      className={`h-full overflow-x-hidden transition-all duration-300 ${textNowrap} ${borderSide} border-border bg-sidebar text-sidebar-foreground ${className} ${responsiveStyle}`}
      style={{
        width: sidebarWidth,
        ...(typeof window !== "undefined" &&
          window.innerWidth < MOBILE_BREAKPOINT && {
            width: isCollapsed ? "0px" : "100%",
          }),
      }}
      data-collapsed={isCollapsed}
      data-position={position}
    >
      <div className="h-full flex-grow overflow-y-auto p-4">{children}</div>

      {(showInternalTrigger || isMobile) && !isCollapsed && (
        <Button
          onClick={contextValue?.toggle}
          variant="ghost"
          size="icon"
          className={`absolute right-4 top-4 text-sidebar-foreground`}
        >
          {getCollapseIcon(position, isCollapsed)}
        </Button>
      )}
    </aside>
  );
}

export {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarSection,
  SidebarFooter,
};
