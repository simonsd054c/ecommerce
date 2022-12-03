import { createContext, useContext } from "react"

const GlobalContext = createContext()
const useGlobalContext = () => useContext(GlobalContext)

export { GlobalContext, useGlobalContext }