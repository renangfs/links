import { Modal, StyleSheet, } from "react-native"

import { colors } from "@/styles/colors"

export const styles =StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 10,//Consultar o valor no video
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
        marginBottom: 20,//Consultar o valor no video
    },
    logo: {
        height: 32,
        width: 38,
    },
    links:{
        borderTopWidth: 1,
        borderTopColor: colors.gray[600],
    },
    linksContent: {
        gap: 20,
        padding: 24,
        paddingBottom: 100,
    },
    modal: {
        flex: 1,
        justifyContent: "flex-end"
    
    },
    modalContent: {
        backgroundColor: colors.gray[900],
        borderTopWidth: 1,
        borderTopColor: colors.gray[800],
        paddingBottom: 42,
        padding: 24,
    },
    modalHeader: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 32,
    },
    modalCategory: {
        flex: 1,
        fontSize: 16,
        fontWeight: 500,
        color: colors.gray[400]
    },
    modalLinkName: {
        fontSize: 18,
        fontWeight: "600",
        color: colors.gray[200],
    },
    modalUrl: {
        fontSize: 14,
        color: colors.gray[400],
    },
    modalFooter: {
        flexDirection: "row",
        marginTop: 32,
        width: "100%",
        justifyContent: "space-between",
        borderTopWidth: 1,
        borderTopColor: colors.gray[600],
        paddingVertical: 14
    },
})