import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
const TextInputExample = () => {

  const [text, onChangetest] = React.useState('');

  const [Nome, onChangeNome] = React.useState('');
  const [Email, onChangeEmail] = React.useState('');
  const [Senha, onChangeSenha] = React.useState('');
 const [CEP, onChangeCEP] = React.useState('');
const [Numero, onChangeNumero] = React.useState('');
     const [Rua, onChangeRua] = React.useState('');
      const [Cidade, onChangeCidade] = React.useState('');
     
     

  
  const [number, onChangeNumber] = React.useState('');

  return (z
    

    <SafeAreaProvider>
      <SafeAreaView>

      
        Nome
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={Nome}
          
    
        />
           Email
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={Email}
          
    
        />
        
           Senha
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={Senha}
          
    
        />
        <View style={styles.inputContainer}>
                <View>
                <Text>CEP</Text>
                  <TextInput
                    style={styles.inputSmall}
                    onChangeText={onChangeText}
                    value={CEP}
                    
              
                  />
                </View>
                <View>
                <Text>Numero</Text>
                <TextInput
                  style={styles.inputSmall}
                  onChangeText={onChangeText}
                  value={Numero}
                  
            
                />
                </View>
                
        </View>

           Rua
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={Rua}
          
    
        />

           Cidade
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={Cidade}
          
    
        />
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
 });

const styles = StyleSheet.create({
    input: {
    justifyContent: 'center',
    paddingTop: 20,
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 20,
    backgroundColor: '#fffff',
  
   
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: "space-around"

  },
  inputSmall:{
     justifyContent: 'center',
    paddingTop: 20,
    height: 40,
    width: 100,
    margin: 20,
    borderWidth: 1,
    padding: 20,
    backgroundColor: '#fffff',
  }
  
});

export default TextInputExample;