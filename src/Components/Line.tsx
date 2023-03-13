export const Line = (props: { length: number; color?: string }) => {
  return (
    <div
      style={{
        borderRadius: '4px',
        height: '4px',
        width: '100%',
        backgroundColor: '#363b44',
      }}
    >
      <div
        style={{
          borderRadius: '4px',
          height: '4px',
          width: props.length + '%',
          backgroundColor: props.color || '#FFD369',
        }}
      />
    </div>
  )
}
