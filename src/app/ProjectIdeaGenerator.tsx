import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Picker } from '@react-native-picker/picker';

type Area = 'TI' | 'Gastronomia' | 'Saúde' | 'Educação' | 'Entretenimento';

type IdeaSet = {
    tipos: string[];
    publicos: string[];
    problemas: string[];
};

type Ideas = {
    [key in Area]: IdeaSet;
};

const ProjectIdeaGenerator = () => {
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
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Escolha sua área:</Text>

            {/* Substituição dos botões pelo Picker */}
            <View style={styles.pickerContainer}>
                <TouchableWithoutFeedback>
                    <Picker
                        selectedValue={selectedArea}
                        onValueChange={(itemValue) => setSelectedArea(itemValue as Area)}
                        style={styles.picker}
                        dropdownIconColor="#6200ee"
                    >
                        {areas.map((area) => (
                            <Picker.Item key={area} label={area} value={area} />
                        ))}
                    </Picker>
                </TouchableWithoutFeedback>
            </View>

            <Text style={styles.subtitle}>Selecione:</Text>

            <View style={styles.ideaContainer}>
                <Text style={styles.ideaText}>
                    Faça um <Text style={styles.highlight}>#{currentIdea.tipo || 'Tipo'}</Text> para{' '}
                    <Text style={styles.highlight}>#{currentIdea.publico || 'Público'}</Text> que ajuda{' '}
                    <Text style={styles.highlight}>#{currentIdea.problema || 'Problema'}</Text>
                </Text>
            </View>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.generateButton} onPress={generateIdea}>
                <Text style={styles.generateButtonText}>Gerar Ideia</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 15,
        color: '#555',
    },
    areaSelector: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
    },
    areaButton: {
        padding: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#e0e0e0',
    },
    pickerContainer: {
        marginBottom: 20,
        overflow: 'hidden', // Importante para bordas arredondadas no Picker
    },
    picker: {
        borderRadius: 20,
        padding: 10,
        width: '100%',
        color: '#333',
    },
    selectedAreaButton: {
        backgroundColor: '#6200ee',
    },
    areaButtonText: {
        color: '#333',
    },
    selectedAreaButtonText: {
        color: '#fff',
    },
    ideaContainer: {
        padding: 15,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        marginBottom: 20,
    },
    ideaText: {
        fontSize: 18,
        lineHeight: 28,
    },
    highlight: {
        color: '#6200ee',
        fontWeight: 'bold',
    },
    divider: {
        height: 1,
        backgroundColor: '#ddd',
        marginVertical: 20,
    },
    flavourText: {
        fontSize: 20,
        color: '#6200ee',
        fontWeight: 'bold',
        marginBottom: 30,
    },
    generateButton: {
        backgroundColor: '#6200ee',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    generateButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ProjectIdeaGenerator;