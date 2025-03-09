import { StyleSheet } from "react-native"

import { colors } from "@/styles/colors"

export const styles =StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 62,
        //justifyContent: "center",
        //alignItems: "center",
        //flexDirection: "row",
    },
    Title:{
        color: colors.green[900],
        fontSize: 22,
    },
    header:{
        paddingHorizontal: 24,
        width: "100%",// Ocupar 100% da largura
        flexDirection: "row", // Componetes ao lado do outro
        justifyContent: "space-between",// Cada componente de um lado (Em cada ponta da tela)
        alignItems: "center", // Centralizar os componentes
        marginBottom: 32,
    },
    logo: {
        height: 32,
        width: 38,
    },
})