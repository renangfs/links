import { View, Image, TouchableOpacity } from "react-native"// Biblioteca de componentes do react native
import {MaterialIcons} from "@expo/vector-icons"//Biblioteca de icones

import { styles } from "./styles"
import { colors } from "@/styles/colors"
import { categories } from "@/utils/categories"

import { Category } from "@/components/category"

export default function Index(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo}/>

                <TouchableOpacity /*activeOpacity={0.3}*/>
                    <MaterialIcons name="add" size={32} color={colors.green[300]} />
                </TouchableOpacity>
            </View>
            
            <Category
                name={categories[0].name}
                icon={categories[0].icon} 
                isSelected={true} 
            />
            <Category name="Site" icon="language"isSelected={false}/>
            <Category name="Video" icon="movie"isSelected={false}/>
        </View>
    )
}
