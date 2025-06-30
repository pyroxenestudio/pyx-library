interface Footer {
  children: React.ReactNode[];
}

export function PyxFooter({children}: Footer) {
  
  return (
    <footer>
      {children}
    </footer>
  )
}