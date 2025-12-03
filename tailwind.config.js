module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./components/**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#0A0A0A", // gray-950 - Deep black
          dark: "#000000", // black
          light: "#1A1A1A", // gray-900
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#FAFAF9", // stone-50 - Warm off-white
          dark: "#F5F5F4", // stone-100
          light: "#FFFFFF", // white
        },
        // Accent Colors
        accent: {
          DEFAULT: "#E8FF00", // Electric yellow
          hover: "#D4E600", // Darker yellow
          light: "#F4FF80", // Light yellow
          browse: "#E8FF00", // yellow - Browsing state
          cart: "#FF3366", // pink - Cart actions
          account: "#3B82F6", // blue-500 - Account functions
        },
        // Background Colors
        background: {
          DEFAULT: "#F5F5F4", // stone-100 - Subtle warm gray
          dark: "#E7E5E4", // stone-200
          light: "#FAFAF9", // stone-50
        },
        // Surface Colors
        surface: {
          DEFAULT: "#FFFFFF", // white - Pure white
          elevated: "#FAFAF9", // stone-50
          overlay: "rgba(10, 10, 10, 0.95)", // Primary with opacity
        },
        // Text Colors
        text: {
          primary: "#1A1A1A", // gray-900 - Near-black
          secondary: "#6B7280", // gray-500 - Medium gray
          tertiary: "#9CA3AF", // gray-400
          inverse: "#FAFAF9", // stone-50
        },
        // State Colors
        success: {
          DEFAULT: "#10B981", // emerald-500 - Emerald green
          light: "#D1FAE5", // emerald-100
          dark: "#059669", // emerald-600
        },
        warning: {
          DEFAULT: "#FF3366", // Shocking pink
          light: "#FFD6E0", // Light pink
          dark: "#E62E5C", // Dark pink
        },
        error: {
          DEFAULT: "#EF4444", // red-500 - Clear red
          light: "#FEE2E2", // red-100
          dark: "#DC2626", // red-600
        },
        // Border Colors
        border: {
          DEFAULT: "#0A0A0A", // gray-950
          light: "#E5E7EB", // gray-200
          dashed: "#D1D5DB", // gray-300
        },
      },
      fontFamily: {
        heading: ['"EB Garamond"', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1' }],
        'headline': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2' }],
        'title': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.3' }],
        'subtitle': ['clamp(1.25rem, 2.5vw, 1.5rem)', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderWidth: {
        '3': '3px',
      },
      boxShadow: {
        'editorial': '6px 6px 0px rgba(0, 0, 0, 0.1)',
        'editorial-md': '8px 8px 0px rgba(0, 0, 0, 0.15)',
        'editorial-lg': '12px 12px 0px rgba(0, 0, 0, 0.25)',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      letterSpacing: {
        'tighter': '-0.02em',
      },
    },
  },
  plugins: [],
}
