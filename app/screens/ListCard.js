import React from 'react'
import {View , Text, TouchableOpacity} from 'react-native'

export default class ListCard extends React.Component{
    render(){
        return(
            <TouchableOpacity onPress={this.props.onPress} style={{
                paddingHorizontal: 36,
                alignSelf: "center",
                marginTop: 20,
                backgroundColor: "#fff",
                height: 182,
                elevation: 1,
                width: 270,
                borderRadius: 15
            }}>
                <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            paddingTop: 20,
                        }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontFamily: "RobotoBold",
                                    color: "#4b3ca7"
                                }}>NYC</Text>
                            <Text
                                    style={{
                                        fontSize: 20,
                                        color: "#a2a2db",
                                        paddingHorizontal: 12
                                    }}>- - - - - - - - - - -</Text>
                            <Text
                                    style={{
                                        fontSize: 20,
                                        fontFamily: "RobotoBold",
                                        color: "#4b3ca7"
                                    }}>
                                        IDN
                            </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 5,
                            alignItems: "center"
                        }}>
                            <Text style={{
                                color:"#a2a2db",
                                fontFamily: "RobotoRegular",
                                fontSize: 11
                            }}>New York</Text>
                            <Text style={{
                                color:"#a2a2db",
                                fontFamily: "RobotoRegular",
                                paddingLeft: 112,
                                fontSize: 11
                            }}>Indonesia</Text>
                    </View>

                    <View style={{
                        flexDirection: "row",
                        marginTop: 10,
                        alignItems: "center"
                    }}>
                        <Text style={{
                            color:"#522289",
                            fontFamily: "RobotoRegular",
                            fontSize: 16
                        }}> 09:00 AM </Text>

                        <Text style={{
                            color:"#522289",
                            fontFamily: "RobotoRegular",
                            fontSize: 16,
                            paddingLeft: 60
                        }}> 21:00 PM </Text>
                    </View>

                    <Text style={{
                                color:"#a2a2db",
                                fontFamily: "RobotoRegular",
                                fontSize: 12
                            }}>20June, 2021</Text>
                    <Text style={{
                                color:"#a2a2db",
                                fontFamily: "RobotoRegular",
                                fontSize: 17,
                                marginRight: -12,
                                marginVertical: 8
                            }}>- - - - - - - - - - - - - - - - - - - - - - - </Text>

                    <View style={{
                        flexDirection: "row",
                        marginTop: -8,
                        alignItems: "center"
                    }}>
                        <Text style={{
                            fontFamily: "RobotoRegular",
                            color: "#522289",
                            fontSize: 16
                        }}>
                            Lorem ipsum
                        </Text>

                        <Text style={{
                            fontFamily: "RobotoBold",
                            color: "#4b3ca7",
                            paddingLeft: 75,
                            fontSize: 16
                        }}>
                            $400
                        </Text>

                    </View>
            </TouchableOpacity>
        );
    }
}