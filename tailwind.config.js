
module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    customForms: theme => ({
      default: {
        input: {
          borderRadius: theme('borderRadius.lg'),
          boxShadow: theme('boxShadow.sm'),
          backgroundColor: theme('colors.gray.100'),
          '&:focus': {
            backgroundColor: theme('colors.white'),
            ringColor: theme('colors.gray.200')
          },
        },
        textarea: {
          borderRadius: theme('borderRadius.lg'),
          boxShadow: theme('boxShadow.sm'),
          backgroundColor: theme('colors.gray.100'),
          '&:focus': {
            backgroundColor: theme('colors.white'),
            ringColor: theme('colors.gray.200')
          },
        },
        select: {
          backgroundColor: theme('colors.gray.100'),
          borderRadius: theme('borderRadius.lg'),
          boxShadow: theme('boxShadow.sm'),
        },
        checkbox: {
          width: theme('spacing.6'),
          height: theme('spacing.6'),
        },
        radio: {
          iconColor: theme('colors.green.200')
        },
      },
    }),
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
};
