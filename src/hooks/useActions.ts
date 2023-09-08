import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { gitHubActions } from "../store/forGitHub/gitHub.slice"

const actions ={
    ...gitHubActions
}

export const useActions = () =>{
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}