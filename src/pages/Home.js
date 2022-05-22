import React , {useState} from "react";
import { View,
   Text,
    StyleSheet,
     TextInput,
      Platform, 
       
    } from "react-native";
import { Button } from "./components/Button";
import { SkillCard } from "./components/SkillCard";

export default function Home(){
  const [newSkill, setNewSkill] =useState('');
  const [myskills, setMySkills]= useState([])

  function handleAddNewSkill(){
    setMySkills(oldState => [...oldState,newSkill]);

  }
  return(
    
    <View style={styles.container}>
      <Text style={styles.title}>
      Welcome, Manna
      </Text>
      <TextInput 
      style={styles.input}
      placeholder="New Skill"
      placeholderTextColor="#555"
      onChangeText={setNewSkill}/>
      <Button/>
     
      <Text style={[styles.title,{marginVertical: 50}]}>
        My skills
      </Text>

      {

        myskills.map(skill =>(
    <SkillCard/>
      ))
       
      }
     
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
     backgroundColor: '#121015',
     paddingHorizontal: 30,
     paddingVertical: 70,

  },
  title: {
     color: '#fff',
     fontSize: 24,
     fontWeight: "bold"

  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  }

});