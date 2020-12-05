import React from 'react'
import {View , Text, Alert, Modal, Image, ImageBackground} from 'react-native'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import ModalCard from './ModalCard'
import ListCard from './ListCard'
import { ScrollView } from 'react-native-gesture-handler'

export default class Detail extends React.Component{
    state={
        modalVisible: false
    }

    setModalVisible = (visible) =>{
        this.setState({modalVisible: visible});
    };

    render(){
        const {modalVisible} = this.state
        return(
            <ImageBackground
                source={require('../images/back2.png')}
                style={{height: "100%", width:"100%"}}>

                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 50,
                            alignItems: "center",
                            paddingHorizontal: 40
                        }}>
                            <Icon name="menu" size={30} color="#a2a2db" style={{width: 20}} />
                            <Icon name="account-circle" size={33} color="#a2a2db" style={{marginLeft: 260}} />
                    </View>

                    <View
                        style={{
                            width: "100%",
                            marginTop: 50,
                            marginBottom: 20,
                            justifyContent: "center",
                            alignItems: "center"
                    }}>
                        <View
                            style={{
                                width: 80,
                                height: 80,
                                borderRadius: 50,
                                backgroundColor: "#5facdb",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Icon name="airplane" size={32}/>    
                        </View>
                    </View>
                    
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            paddingHorizontal: 40,
                        }}>
                            <Text
                                style={{
                                    fontSize: 24,
                                    fontFamily: "RobotoBold",
                                    color: "#fff"
                                }}>NYC</Text>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: "#a2a2db",
                                        paddingHorizontal: 15
                                    }}>- - - - - - - - - - - - - - - - - - -</Text>
                                <Text
                                    style={{
                                        fontSize: 24,
                                        fontFamily: "RobotoBold",
                                        color: "#fff"
                                    }}>
                                        IDN
                                </Text>
                    </View>
                    
                    <View
                        style={{
                            flexDirection: "row",
                            paddingHorizontal: 40,
                        }}>
                            <Text style={{
                                color:"#a2a2db",
                                fontFamily: "RobotoRegular"
                            }}>New York</Text>
                            <Text style={{
                                color:"#a2a2db",
                                fontFamily: "RobotoRegular",
                                paddingLeft: 190
                            }}>Indonesia</Text>
                    </View>
                    <Text style={{
                        color:"#a2a2db",
                        fontFamily: "RobotoRegular",
                        paddingHorizontal: 40
                    }}>20 June, 2021</Text>

                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingHorizontal: 50,
                        marginTop: 60
                    }}>
                        <Image source={require('../images/dots.png')}
                        style={{width: 18, height: 16}}/>
                        <Image source={require('../images/filter.png')}
                        style={{marginLeft: 255, width: 20, height: 18}}/>
                    </View>

                    <ScrollView style={{
                        marginVertical: 5
                    }}
                    showsVerticalScrollIndicator={false}>
                        <ListCard onPress={() => {this.setModalVisible(true);}}/>

                        <View>
                            <Modal animationType="slide"
                                    transparent={true}
                                    visible={modalVisible}
                                    onRequestClose={() => {
                                        Alert.alert("Modal is closed")
                                    }}>
                                        <ModalCard
                                            onPress = {() => {
                                                this.setModalVisible(!modalVisible)
                                            }}/>
                            </Modal>
                        </View>

                    </ScrollView>

            </ImageBackground>
        );
    }
}