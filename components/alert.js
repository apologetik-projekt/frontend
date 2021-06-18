import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Alert({ preview }) {
  if (preview == false) return null
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          Diese Seite ist im Vorschau-Modus.{' '}
          <a
            href="/api/exit-preview"
            className="underline hover:text-cyan duration-200 transition-colors"
          >
            Klicke hier
          </a>{' '}
          um ihn zu beenden.
        </div>
      </Container>
    </div>
  )
}
