import React, { useState } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import style from "./ideasStyle"
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router';

type Area = 'TI' | 'Gastronomia' | 'Saúde' | 'Educação' | 'Entretenimento';

type IdeaSet = {
    tipos: string[];
    publicos: string[];
    problemas: string[];
};

type Ideas = {
    [key in Area]: IdeaSet;
};


export default function ideas() {
    const home = (): void => {
        router.push('/home');
    };

    const areas: Area[] = ['TI', 'Gastronomia', 'Saúde', 'Educação', 'Entretenimento'];

    const ideas: Ideas = {
        TI: {
            tipos: ['app', 'site', 'sistema', 'jogo', 'ferramenta'],
            publicos: [
                'frequentadores de academia',
                'estudantes universitários',
                'pequenos empresários',
                'profissionais freelancers',
                'entusiastas de tecnologia'
            ],
            problemas: [
                'organizar tarefas diárias de forma mais eficiente',
                'conectar pessoas com interesses similares',
                'automatizar processos manuais repetitivos',
                'melhorar a produtividade no trabalho',
                'facilitar o aprendizado de novas habilidades'
            ]
        },
        Gastronomia: {
            tipos: ['app', 'receitas', 'sistema de delivery', 'rede social'],
            publicos: [
                'chefs amadores',
                'donos de restaurantes',
                'pessoas que querem cozinhar em casa',
                'entusiastas de comida saudável'
            ],
            problemas: [
                'encontrar receitas com ingredientes disponíveis',
                'gerenciar estoque de restaurante',
                'conectar cozinheiros amadores com clientes',
                'planejar refeições semanais'
            ]
        },
        // Adicione os outros áreas com valores padrão ou completos
        Saúde: {
            tipos: [],
            publicos: [],
            problemas: []
        },
        Educação: {
            tipos: [],
            publicos: [],
            problemas: []
        },
        Entretenimento: {
            tipos: [],
            publicos: [],
            problemas: []
        }
    };

    // Estados - agora tipados
    const [selectedArea, setSelectedArea] = useState<Area>('TI');
    const [currentIdea, setCurrentIdea] = useState<{
        tipo: string;
        publico: string;
        problema: string;
    }>({
        tipo: '',
        publico: '',
        problema: ''
    });

    // Gerar nova ideia - agora com tipagem segura
    const generateIdea = () => {
        const areaIdeas = ideas[selectedArea]; // Agora não há mais erro
        const randomTipo = areaIdeas.tipos[Math.floor(Math.random() * areaIdeas.tipos.length)];
        const randomPublico = areaIdeas.publicos[Math.floor(Math.random() * areaIdeas.publicos.length)];
        const randomProblema = areaIdeas.problemas[Math.floor(Math.random() * areaIdeas.problemas.length)];

        setCurrentIdea({
            tipo: randomTipo,
            publico: randomPublico,
            problema: randomProblema
        });
    };

    return (
        <ScrollView contentContainerStyle={style.container}>
            <View style={style.headerContainer}>
                <Image
                    source={require('../../assets/images/logo.png')}
                    style={style.logo}
                />
                <View style={style.header}>
                    <View style={style.searchContainer}>
                        <TextInput
                            style={style.searchInput}
                            placeholder=""
                            placeholderTextColor="#999"
                        />
                        <TouchableOpacity style={style.searchButton}>
                            <Ionicons name="search-outline" size={22} color="#ec701c" />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={style.backButton} onPress={home}>
                    <Text style={style.backButtonText}>◀ Voltar</Text>
                </TouchableOpacity>
            </View>
            <View style={style.contentBox}>
                <Text style={style.title}>Escolha sua área:</Text>

                {/* Substituição dos botões pelo Picker */}
                <View style={style.pickerContainer}>
                        <Picker
                            selectedValue={selectedArea}
                            onValueChange={(itemValue) => setSelectedArea(itemValue as Area)}
                            style={style.picker}
                            dropdownIconColor="#6200ee"
                        >
                            {areas.map((area) => (
                                <Picker.Item key={area} label={area} value={area} />
                            ))}
                        </Picker>
                </View>

                <View style={style.ideaContainer}>
                    <Text style={style.ideaText}>
                        Faça um <Text style={style.highlight}>#{currentIdea.tipo || 'Tipo'}</Text> para{' '}
                        <Text style={style.highlight}>#{currentIdea.publico || 'Público'}</Text> que ajuda a{' '}
                        <Text style={style.highlight}>#{currentIdea.problema || 'Problema'}</Text>
                    </Text>
                </View>

                <View style={style.divider} />

                <TouchableOpacity style={style.generateButton} onPress={generateIdea}>
                    <Text style={style.generateButtonText}>Gerar Ideia</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}