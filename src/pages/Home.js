import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { ImageBackground } from 'react-native-web';

const Home = ({ navigation }) => {
    return (
        <View>
            <Text>Meu curriculo </Text>

            <Button
                title="Sobre"
                onPress={() => navigation.navigate('Sobre')}
            />
            <Button
                title="Formacao"
                onPress={() => navigation.navigate('Formacao')}
            />
            <Button
                title="Experiencia"
                onPress={() => navigation.navigate('Experiencia')}
            />
            <Button
                title="Cursos"
                onPress={() => navigation.navigate('Cursos')}
            />

        </View>
    );
}

export default Home;