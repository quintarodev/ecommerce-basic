import { VariantProps, cva } from 'class-variance-authority'
import { HtmlHTMLAttributes } from 'react'

const style = cva('max-w-5xl mx-auto', {
  variants: {
    intent: {
      header: 'py-6',
      default: '',
      section: 'py-20',
      footer: 'py-12',
    },
  },
  defaultVariants: {
    intent: 'default',
  },
})

interface Props
  extends HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof style> {}

const Wrapper = ({ intent, className, ...rest }: Props) => {
  return <div className={style({ intent, className })} {...rest} />
}

export { Wrapper }
