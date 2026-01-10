export const theme = {
  colors: {
    background: {
      primary: "#060e26",
      secondary: "#151740",
      tertiary: "#1a1f3a",
      elevated: "#252b47",
      hover: "#1f2644"
    },
    text: {
      primary: "#e8e8ec",
      secondary: "#d2d2d4",
      tertiary: "rgba(144, 152, 175, 0.9)",
      highlighted: "#c6c6c6",
      disabled: "rgba(144, 152, 175, 0.5)"
    },
    blue: {
      300: "#6561d9",
      400: "#4d49c7",
      500: "#3a37a6",
      600: "#2d2a8a"
    },
    purple: {
      300: "#7252a6",
      400: "#5a3d99",
      500: "#432d73",
      600: "#34235a"
    },
    magenta: {
      300: "#d44784",
      400: "#b8326f",
      500: "#8c2756",
      600: "#6f1e43"
    },
    gold: {
      300: "#f5d674",
      400: "#f2c94c",
      500: "#e6a209",
      600: "#cc8f08"
    },
    status: {
      success: "#10b981",
      "success-dark": "#059669",
      error: "#ef4444",
      "error-dark": "#dc2626",
      warning: "#f59e0b",
      "warning-dark": "#d97706",
      info: "#3b82f6",
      "info-dark": "#2563eb"
    },
    element: {
      fire: "#f97316",
      "fire-dark": "#ea580c",
      water: "#0ea5e9",
      "water-dark": "#0284c7",
      earth: "#84cc16",
      "earth-dark": "#65a30d",
      air: "#a78bfa",
      "air-dark": "#8b5cf6",
      light: "#fbbf24",
      "light-dark": "#f59e0b",
      dark: "#6b21a8",
      "dark-dark": "#581c87"
    },
    rarity: {
      common: "#9ca3af",
      uncommon: "#10b981",
      rare: "#3b82f6",
      epic: "#a855f7",
      legendary: "#f59e0b",
      mythic: "#ec4899"
    },
    border: {
      primary: "rgba(144, 152, 175, 0.2)",
      secondary: "rgba(144, 152, 175, 0.1)",
      accent: "rgba(58, 55, 166, 0.5)",
      hover: "rgba(58, 55, 166, 0.8)",
      focus: "#3a37a6"
    },
    shadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.4)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 10px 10px -5px rgba(0, 0, 0, 0.3)",
      "glow-blue": "0 0 20px rgba(58, 55, 166, 0.5)",
      "glow-purple": "0 0 20px rgba(67, 45, 115, 0.5)",
      "glow-gold": "0 0 20px rgba(242, 201, 76, 0.4)"
    }
  },
  fontFamily: {
    sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    heading:
      '"Poppins", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    mono: '"JetBrains Mono", "Fira Code", "Consolas", monospace'
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem"
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800
  },
  lineHeight: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  spacing: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem"
  },
  borderRadius: {
    none: "0",
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.5rem",
    full: "9999px"
  },
  breakpoints: {
    xs: "320px",
    sm: "480px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    "2xl": "1536px"
  },
  transition: {
    fast: "150ms",
    normal: "250ms",
    slow: "350ms",
    easing: {
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
    }
  }
} as const;

export type Theme = typeof theme;
