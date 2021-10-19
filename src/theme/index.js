//libraries
import { extendTheme } from "@chakra-ui/react"

//files & styles
import styles from "./styles"
import borders from "./foundations/borders"
import Button from "./components/button"

const overrides = {
  styles,
  borders,
  // Other foundational style overrides go here
  components: {
    Button,
    // Other components go here
  },
}

export default extendTheme(overrides)