export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// export const decorators = [
//   (Story) => (
//     <ThemeProvider theme={baseTheme}>
//       <div style={{ 
//         backgroundColor: 'black', 
//         display: 'flex',
//         justifyContent: 'center' 
//       }}>
//         <Story />
//       </div>
//     </ThemeProvider>
//   ),
// ];