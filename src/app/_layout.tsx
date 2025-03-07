import { Stack } from "expo-router"// Importando o "Stack", é uma tecnica de navegação em pilha, a tela sobrepondo a outra
import { colors } from "@/styles/colors"// importando cores

export default function Layout(){
    const backgroundColor = colors.gray[950]
    
    return (
        <Stack screenOptions={{// O Stack mostra o cabeçalho de cada tela
            headerShown: false,// Negando a tela apresentada
            contentStyle: {backgroundColor}// Alterando fundo da tela
        }}
        />
    )
}