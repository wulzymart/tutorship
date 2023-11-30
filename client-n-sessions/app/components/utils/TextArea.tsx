const TextArea = ({className, rows, cols}:{className: string, rows: number, cols: number}) => {
  return (
    <div className= {className}><textarea className="w-full rounded" rows={rows} cols={cols}/></div>
  )
}

export default TextArea