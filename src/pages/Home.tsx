import useResponsive from "../hook/useResposive"

export default function Home() {
  const { isSmall } = useResponsive();

  if (isSmall) {
    return (
      <>
        <div>Hello World Phone!</div>
      </>
    )
  }
  else {
    return (
      <>
        <div>Hello World Monitor!</div>
      </>
    )
  }
}

