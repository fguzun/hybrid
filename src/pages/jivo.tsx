import useExternalScripts from "@/hooks/useExternalScripts"
import { Helmet } from "react-helmet"

function App() {
  return (
    <>
      <Helmet>
        <script
          src="http://code.jivosite.com/widget/Ro6TyTJR9t"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          async
        ></script>
      </Helmet>
      <div className="App"></div>
    </>
  )
}

export default App