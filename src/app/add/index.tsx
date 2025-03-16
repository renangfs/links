import { useState } from "react";
import { View, Text, TouchableOpacity, Alert} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router"

import { styles } from "./styles"
import { colors } from '@/styles/colors'

import { Categories } from "@/components/categories"
import { Input } from "@/components/input"
import { Button } from "@/components/Button"
import { linkStorage } from "@/storage/link-storage";


export default function Add(){
    const [category, setCategory] = useState("")
    const [name,setName] = useState("")
    const [url,setUrl] = useState("")

    async function handleAdd(){
        try{
            if(!category){
                return Alert.alert("Categoria","Selecione a categoria")
            }
            if(!name.trim){
                return Alert.alert("Categoria","insira um nome")
            }
            if(!url.trim){
                return Alert.alert("Categoria","insira um link")
            }
            
            await linkStorage.save({
                id: new Date().getTime().toString(),
                name,
                url,
                category
            })
            Alert.alert("Sucesso","Novo link adicionado",[
                {
                text: "OK",
                onPress: () => router.back(),
                },
        ])
            //const data = await linkStorage.get()
            //console.log(data)

        }catch (error){
            Alert.alert("Erro","Não foi possível salvar o link")
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]}/>
                </TouchableOpacity>

            <Text style={styles.title}>Novo</Text>
            </View>
            <Text style={styles.label}>Selecione uma categoria</Text>
            <Categories onChange={setCategory} selected={category}/>
   
            
            <View style={styles.form}>
                <Input 
                    placeholder="Nome" 
                    onChangeText={(setName)} 
                    autoCorrect={false}/>
                <Input 
                    placeholder="URL"
                    onChangeText={(setUrl)} 
                    autoCorrect={false}
                    autoCapitalize="none"//Não deixa a letra em maiusculo?
                    />
                <Button title="Adicionar" onPress={handleAdd}/>
            </View>
            

        </View>
    )
}