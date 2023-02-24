/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // light theme colors and shades
        lightRed: { DEFAULT: '#F28B82', 50: '#FFFFFF', 100: '#FFFFFF', 200: '#FEF2F1', 300: '#FAD0CC', 400: '#F6ADA7', 500: '#F28B82', 600: '#ED5C4F', 700: '#E72D1C', 800: '#B92013', 900: '#86180E', },
        lightOrange: { DEFAULT: '#FBBC04', 50: '#FEECB9', 100: '#FEE7A5', 200: '#FDDC7C', 300: '#FCD154', 400: '#FCC72C', 500: '#FBBC04', 600: '#C49303', 700: '#8D6902', 800: '#554001', 900: '#1E1700' },
        lightYellow: { DEFAULT: '#FFF475', 50: '#FFFFFF', 100: '#FFFFFF', 200: '#FFFEEF', 300: '#FFFBC7', 400: '#FFF79E', 500: '#FFF475', 600: '#FFF03D', 700: '#FFEB05', 800: '#CCBB00', 900: '#948800' },
        lightGreen: { DEFAULT: '#CCFF90', 50: '#FFFFFF', 100: '#FFFFFF', 200: '#FFFFFF', 300: '#F1FFE2', 400: '#DFFFB9', 500: '#CCFF90', 600: '#B2FF58', 700: '#98FF20', 800: '#7DE700', 900: '#5EAF00' },
        lightTeal: { DEFAULT: '#A7FFEB', 50: '#FFFFFF', 100: '#FFFFFF', 200: '#FFFFFF', 300: '#F9FFFE', 400: '#D0FFF4', 500: '#A7FFEB', 600: '#6FFFDE', 700: '#37FFD1', 800: '#00FEC4', 900: '#00C699' },
        lightBlue: { DEFAULT: '#CBF0F8', 50: '#FFFFFF', 100: '#FFFFFF', 200: '#FFFFFF', 300: '#FFFFFF', 400: '#EFFAFD', 500: '#CBF0F8', 600: '#9AE2F1', 700: '#68D3EB', 800: '#37C5E4', 900: '#1BA9C8' },
        lightSail: { DEFAULT: '#AECBFA', 50: '#FFFFFF', 100: '#FFFFFF', 200: '#FFFFFF', 300: '#FBFCFF', 400: '#D4E4FC', 500: '#AECBFA', 600: '#79A9F7', 700: '#4487F3', 800: '#0F65F0', 900: '#0C4FBC' },
        lightPurple: { DEFAULT: '#D7AEFB', 50: '#FFFFFF', 100: '#FFFFFF', 200: '#FFFFFF', 300: '#FDFCFF', 400: '#EAD5FD', 500: '#D7AEFB', 600: '#BD79F8', 700: '#A243F6', 800: '#880EF3', 900: '#6A09BF' },
        lightPink: { DEFAULT: '#FDCFE8', 50: '#FFFFFF', 100: '#FFFFFF', 200: '#FFFFFF', 300: '#FFFFFF', 400: '#FFF6FB', 500: '#FDCFE8', 600: '#FB99CE', 700: '#F963B4', 800: '#F62D9B', 900: '#E2097F' },
        lightBrown: { DEFAULT: '#E6C9A8', 50: '#FFFFFF', 100: '#FFFFFF', 200: '#FFFFFF', 300: '#F8F0E7', 400: '#EFDDC8', 500: '#E6C9A8', 600: '#D9AE7C', 700: '#CD9351', 800: '#B27733', 900: '#875A27' },
        lightGray: { DEFAULT: '#E8EAED', 50: '#FFFFFF', 100: '#FFFFFF', 200: '#FFFFFF', 300: '#FFFFFF', 400: '#FFFFFF', 500: '#E8EAED', 600: '#C9CDD4', 700: '#A9B1BC', 800: '#8A94A3', 900: '#6B7789' },
        lightTextPrimary: { DEFAULT: '#202124', 50: '#767A85', 100: '#6D707A', 200: '#5A5C65', 300: '#46494F', 400: '#33353A', 500: '#202124', 600: '#060606', 700: '#000000', 800: '#000000', 900: '#000000' },
        lightTextPlaceholder: { DEFAULT: '#4C4C4C', 50: '#A8A8A8', 100: '#9E9E9E', 200: '#898989', 300: '#757575', 400: '#606060', 500: '#4C4C4C', 600: '#303030', 700: '#141414', 800: '#000000', 900: '#000000' },
        lightSearchTextPlaceholder: { DEFAULT: '#ABACAD', 50: '#FFFFFF', 100: '#FEFEFE', 200: '#E9E9E9', 300: '#D4D5D5', 400: '#C0C0C1', 500: '#ABACAD', 600: '#8F9091', 700: '#737475', 800: '#575859', 900: '#3B3C3D' },
        lightPrimaryBackground: { DEFAULT: '#FFFFFF', 500: '#FFFFFF', 600: '#E3E3E3', 700: '#C7C7C7', 800: '#ABABAB', 900: '#8F8F8F' },
        lightSearchBackground: { DEFAULT: '#F1F3F4', 50: '#FFFFFF', 100: '#FFFFFF', 200: '#FFFFFF', 300: '#FFFFFF', 400: '#FFFFFF', 500: '#F1F3F4', 600: '#D2D8DB', 700: '#B2BDC3', 800: '#93A2AA', 900: '#738791' },

        // dark theme colors and shades
        darkRed: { DEFAULT: '#5C2B29', 50: '#C37C79', 100: '#BD6E6B', 200: '#B1534F', 300: '#944542', 400: '#783836', 500: '#5C2B29', 600: '#351918', 700: '#0E0706', 800: '#000000', 900: '#000000' },
        darkOrange: { DEFAULT: '#614A19', 50: '#D5AF5C', 100: '#D1A74C', 200: '#C29432', 300: '#A27B2A', 400: '#816321', 500: '#614A19', 600: '#34280E', 700: '#080602', 800: '#000000', 900: '#000000' },
        darkYellow: { DEFAULT: '#635D19', 50: '#D6CC5D', 100: '#D2C74D', 200: '#C5B932', 300: '#A49A29', 400: '#847C21', 500: '#635D19', 600: '#36330E', 700: '#090902', 800: '#000000', 900: '#000000' },
        darkGreen: { DEFAULT: '#345920', 50: '#8AC968', 100: '#7EC359', 200: '#69B340', 300: '#579536', 400: '#46772B', 500: '#345920', 600: '#1C3011', 700: '#040602', 800: '#000000', 900: '#000000' },
        darkTeal: { DEFAULT: '#16504B', 50: '#4FCFC4', 100: '#3FCABE', 200: '#30B0A5', 300: '#289087', 400: '#1F7069', 500: '#16504B', 600: '#0A2422', 700: '#000000', 800: '#000000', 900: '#000000' },
        darkBlue: { DEFAULT: '#2D555E', 50: '#80B6C2', 100: '#72AEBC', 200: '#579EAF', 300: '#478795', 400: '#3A6E7A', 500: '#2D555E', 600: '#1B3338', 700: '#091012', 800: '#000000', 900: '#000000' },
        darkSail: { DEFAULT: '#1E3A5F', 50: '#6693CF', 100: '#5688CA', 200: '#3B73BC', 300: '#32609D', 400: '#284D7E', 500: '#1E3A5F', 600: '#112034', 700: '#03060A', 800: '#000000', 900: '#000000' },
        darkPurple: { DEFAULT: '#42275E', 50: '#9E76C6', 100: '#9368C0', 200: '#7F4BB4', 300: '#6A3F98', 400: '#56337B', 500: '#42275E', 600: '#261736', 700: '#0A060F', 800: '#000000', 900: '#000000' },
        darkPink: { DEFAULT: '#5B2245', 50: '#C86CA5', 100: '#C35E9C', 200: '#B44389', 300: '#963872', 400: '#792D5C', 500: '#5B2245', 600: '#321326', 700: '#090307', 800: '#000000', 900: '#000000' },
        darkBrown: { DEFAULT: '#442F19', 50: '#C08C54', 100: '#BB8145', 200: '#9D6D3A', 300: '#80582F', 400: '#624424', 500: '#442F19', 600: '#1B130A', 700: '#000000', 800: '#000000', 900: '#000000' },
        darkGray: { DEFAULT: '#3C3F43', 50: '#969BA1', 100: '#8B9097', 200: '#767C84', 300: '#63676E', 400: '#4F5359', 500: '#3C3F43', 600: '#212325', 700: '#070708', 800: '#000000', 900: '#000000' },
        darkTextPrimary: { DEFAULT: '#E8EAED', 50: '#FFFFFF', 100: '#FFFFFF', 200: '#FFFFFF', 300: '#FFFFFF', 400: '#FFFFFF', 500: '#E8EAED', 600: '#C9CDD4', 700: '#A9B1BC', 800: '#8A94A3', 900: '#6B7789' },
        darkTextPlaceholder: { DEFAULT: '#BDBDBE', 50: '#FFFFFF', 100: '#FFFFFF', 200: '#FBFBFB', 300: '#E6E6E6', 400: '#D2D2D2', 500: '#BDBDBE', 600: '#A1A1A2', 700: '#848486', 800: '#69696A', 900: '#4D4D4E' },
        darkSearchTextPlaceholder: { DEFAULT: '#A3A3A4', 50: '#FFFFFF', 100: '#F5F5F5', 200: '#E1E1E1', 300: '#CCCCCD', 400: '#B8B8B8', 500: '#A3A3A4', 600: '#878788', 700: '#6B6B6C', 800: '#4F4F50', 900: '#333334' },
        darkPrimaryBackground: { DEFAULT: '#202124', 50: '#767A85', 100: '#6D707A', 200: '#5A5C65', 300: '#46494F', 400: '#33353A', 500: '#202124', 600: '#060606', 700: '#000000', 800: '#000000', 900: '#000000' },
        darkSearchBackground: { DEFAULT: '#525355', 50: '#AEAFB1', 100: '#A3A5A7', 200: '#8F9093', 300: '#7A7C7F', 400: '#66676A', 500: '#525355', 600: '#363738', 700: '#1B1B1C', 800: '#000000', 900: '#000000' },

        // nameless third theme
        froly: { DEFAULT: '#F8766D', 50: '#FFFFFF', 100: '#FFFFFF', 200: '#FEE4E2', 300: '#FCBFBB', 400: '#FA9B94', 500: '#F8766D', 600: '#F54437', 700: '#EA1A0B', 800: '#B41409', 900: '#7F0E06' },
        goldDrop: { DEFAULT: '#D89000', 50: '#FFDA91', 100: '#FFD37C', 200: '#FFC653', 300: '#FFB82B', 400: '#FFAB02', 500: '#D89000', 600: '#A06B00', 700: '#684500', 800: '#302000', 900: '#000000' },
        buddhaGold: { DEFAULT: '#A3A500', 50: '#FDFF5E', 100: '#FDFF49', 200: '#FCFF20', 300: '#F4F700', 400: '#CBCE00', 500: '#A3A500', 600: '#6C6D00', 700: '#343500', 800: '#000000', 900: '#000000' },
        limeade: { DEFAULT: '#39B600', 50: '#9CFF6F', 100: '#8EFF5A', 200: '#72FF31', 300: '#56FF09', 400: '#46DF00', 500: '#39B600', 600: '#277E00', 700: '#164600', 800: '#040E00', 900: '#000000' },
        caribbeanGreen: { DEFAULT: '#00BF7D', 50: '#78FFD0', 100: '#63FFC9', 200: '#3AFFBB', 300: '#12FFAD', 400: '#00E898', 500: '#00BF7D', 600: '#008758', 700: '#004F34', 800: '#00170F', 900: '#000000' },
        robinSEggBlue: { DEFAULT: '#00BFC4', 50: '#7DFCFF', 100: '#68FBFF', 200: '#3FFAFF', 300: '#17F9FF', 400: '#00E7ED', 500: '#00BFC4', 600: '#00888C', 700: '#005254', 800: '#001B1C', 900: '#000000' },
        cerulean: { DEFAULT: '#00B0F6', 50: '#AFE8FF', 100: '#9AE2FF', 200: '#71D7FF', 300: '#49CBFF', 400: '#20BFFF', 500: '#00B0F6', 600: '#0088BE', 700: '#006086', 800: '#00384E', 900: '#000F16' },
        melrose: { DEFAULT: '#9590FF', 50: '#FFFFFF', 100: '#FFFFFF', 200: '#FFFFFF', 300: '#E3E2FF', 400: '#BCB9FF', 500: '#9590FF', 600: '#5F58FF', 700: '#2A20FF', 800: '#0A00E7', 900: '#0800AF' },
        heliotrope: { DEFAULT: '#E76BF3', 50: '#FFFFFF', 100: '#FFFFFF', 200: '#F9DCFC', 300: '#F3B6F9', 400: '#ED91F6', 500: '#E76BF3', 600: '#DF37EF', 700: '#CA12DC', 800: '#9A0EA8', 900: '#6B0974' },
        hotPink: { DEFAULT: '#FF62BC', 50: '#FFFFFF', 100: '#FFFFFF', 200: '#FFDCF0', 300: '#FFB4DF', 400: '#FF8BCD', 500: '#FF62BC', 600: '#FF2AA4', 700: '#F1008A', 800: '#B9006A', 900: '#81004A' },
        cerulean: { DEFAULT: '#00B0F6', 50: '#AFE8FF', 100: '#9AE2FF', 200: '#71D7FF', 300: '#49CBFF', 400: '#20BFFF', 500: '#00B0F6', 600: '#0088BE', 700: '#006086', 800: '#00384E', 900: '#000F16' },

      },

      // border colors are needed
      // shadow colors are needed

      textColor: {
        skin: {
          "primary": 'var(--color-text-primary)',
          "placeholder": 'var(--color-text-placeholder)',
          "search-placeholder": 'var(--color-text-search-placeholder)',
          "deneme": 'var(--color-note-01)'
        },
      },
      backgroundColor: {
        skin: {
          "primary": 'var(--color-background-primary)',
          "search": 'var(--color-background-search)',
          "note-01": 'var(--color-note-01)',
          "note-02": 'var(--color-note-02)',
          "note-03": 'var(--color-note-03)',
          "note-04": 'var(--color-note-04)',
          "note-05": 'var(--color-note-05)',
          "note-06": 'var(--color-note-06)',
          "note-07": 'var(--color-note-07)',
          "note-08": 'var(--color-note-08)',
          "note-09": 'var(--color-note-09)',
          "note-10": 'var(--color-note-10)',
          "note-11": 'var(--color-note-11)',
        },
      },
      borderColor: {
        skin: {
          "primary": 'var(--color-border-primary)',
          "seperator": 'var(--color-border-seperator)',
        },
      },
      boxShadowColor: {
        skin: {
          "primary": 'var(--color-shadow-primary)',
        },
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    require('prettier-plugin-tailwindcss'),
  ],
}




