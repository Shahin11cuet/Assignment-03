module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
    daisyui: {
        themes: ["light", "dark", "cupcake"],
      },
      theme: {
        extend: {
          colors: {
            'regal-blue': '#243c5a',
          },
        }
      }
  }