import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide transition-all duration-200',
  {
    variants: {
      variant: {
        default:
          'border-slate-300 bg-slate-900 text-white dark:border-slate-700 dark:bg-slate-100 dark:text-slate-900',

        success:
          'border-emerald-600 bg-emerald-50 text-emerald-700 dark:border-emerald-500 dark:bg-emerald-950/40 dark:text-emerald-300',

        warning:
          'border-amber-500 bg-amber-50 text-amber-700 dark:border-amber-500 dark:bg-amber-950/40 dark:text-amber-300',

        danger:
          'border-red-600 bg-red-50 text-red-700 dark:border-red-500 dark:bg-red-950/40 dark:text-red-300',

        info: 'border-blue-600 bg-blue-50 text-blue-700 dark:border-blue-500 dark:bg-blue-950/40 dark:text-blue-300',
      },
    },

    defaultVariants: {
      variant: 'default',
    },
  }
);
