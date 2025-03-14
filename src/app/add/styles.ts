import { StyleSheet } from "react-native"
import { colors } from "@/styles/colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,//Consultar valor no video
    },
    header:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        marginBottom: 20
    },
    title:{
        color: colors.gray[200],
        fontSize: 24,
        fontWeight: "600",
    },
    label: {
        color: colors.gray[400],
        fontSize: 14,
        paddingHorizontal: 24,
    },
    form: {
       padding: 24,
       gap: 16,
    }
})