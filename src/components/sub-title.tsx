type SubTitleProps = {
  message: string
  severity?: 'error' | 'warning' | 'info' | 'success'
}

export function SubTitle(props: SubTitleProps) {

  const severityMap = {
    error: 'text-red-300',
    warning: 'text-yellow-300',
    info: 'text-blue-300',
    success: 'text-green-300',
  }

  return (
    <p className={`text-grey-300 text-3xl underline ${severityMap[props.severity ?? 'info']}`}>
      {
        props.message
      }
    </p>
  )
}