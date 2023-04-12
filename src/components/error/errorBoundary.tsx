import Router from 'next/router'
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'

import errorDisplay from './errorDisplay'

type ErrorBoundaryProps = {
  children: React.ReactNode
}

function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const onReset = () => {
    Router.reload()
  }

  return (
    <ReactErrorBoundary FallbackComponent={errorDisplay} onReset={onReset}>
      {children}
    </ReactErrorBoundary>
  )
}

export default ErrorBoundary
