import { motion } from 'framer-motion'
import { useViewport } from '@/hooks/useViewport'

export default function SplitText({
  text,
  className = '',
  delay = 0,
  stagger = 0.045,
  duration = 0.9,
  as: Tag = 'span',
}) {
  const { isMobile } = useViewport()

  if (isMobile) {
    return (
      <Tag className={`inline-block ${className}`}>
        <motion.span
          className="inline-block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay, ease: 'easeOut' }}
        >
          {text}
        </motion.span>
      </Tag>
    )
  }

  const words = text.split(' ')
  return (
    <Tag className={`inline-block ${className}`}>
      {words.map((word, wi) => (
        <span
          key={wi}
          className="inline-block overflow-hidden align-bottom whitespace-nowrap mr-[0.25em]"
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: '110%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration,
              delay: delay + wi * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
