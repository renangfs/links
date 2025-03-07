import { StyleSheet } from "react-native"

import { colors } from "@/styles/colors"

export const styles =StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        //flexDirection: "row",
    },
    Title:{
        color: colors.green[900],
        fontSize: 22,
    },
})