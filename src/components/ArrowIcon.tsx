type Props = {
  direction?: 'right' | 'left' | 'up-right'
}

export function ArrowIcon({ direction = 'right' }: Props) {
  const path =
    direction === 'left'
      ? 'M12.5 8H3.5M7 3.5 2.5 8 7 12.5'
      : direction === 'up-right'
        ? 'M3.5 12.5 12.5 3.5M5.5 3.5h7v7'
        : 'M3.5 8h9M9 3.5 13.5 8 9 12.5'

  return (
    <svg
      className="icon"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={path} />
    </svg>
  )
}
