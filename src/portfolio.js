import React from 'react';
import {
    AppRegistry,
    asset,
    Image,
    Pano,
    Text,
    View,
    VrButton,
    Video,

} from 'react-vr';
import style1 from './style1';
import style from './style';
import { NativeModules } from 'react-vr';



export default class Portfolio extends React.Component {


    render() {
        return (
            <View  style={style1.view}>
                <Pano source={asset('46720905962_887e7b8e00_o.jpg')}/>
                <VrButton onClick={()=>{
                    this.props.history.goBack()
                }}>
                    <Text
                        style={{
                            backgroundColor: 'red',
                            fontSize: 0.2,
                            fontWeight: '300',
                            layoutOrigin: [0.5, 0.5],
                            paddingLeft: 0.2,
                            paddingRight: 0.2,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            transform: [{translate: [0, 0, -3]}],
                        }}>
                        Home
                    </Text>
                </VrButton>


                <View  style={style.view}>
                    <Text
                        style={{

                            backgroundColor: 'blue',
                            fontSize: 0.3,
                            fontWeight: '400',
                            layoutOrigin: [0.5, 0.5],
                            paddingLeft: 0.1,
                            paddingRight: 0.1,
                            alignItems: 'stretch',
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            transform: [{translate: [-1, 1, -3]}],
                        }}>
                        Portfolio:
                    </Text>
                </View>


                <View style={style1.contact}>

                    <View style={style1.single}>
                        <VrButton onClick={()=> {NativeModules.LinkingManager.openURL("https://nowheremanrecords.000webhostapp.com/")}}>
                            <Text
                                style={{

                                    backgroundColor: 'blue',
                                    width: 4,
                                    fontSize: 0.3,
                                    fontWeight: '300',
                                    layoutOrigin: [0.5, 0.5],
                                    textAlign: 'center',
                                    textAlignVertical: 'center',
                                    transform: [{translate: [5.5, 0, -6.5]}, {rotateY: -90}],
                                }}>
                                Nowhere Man Records
                            </Text>
                        </VrButton>
                        <Video
                            loop={true}
                            source={{uri: '/static_assets/NMR.mp4'}}

                            style={{
                                width: 6,
                                height: 4.2,
                                transform: [{translate: [6, -0.1, -9]}, {rotateY: -90}],
                            }}
                        />
                    </View>
                    <View style={style1.single}>
                        <VrButton onClick={()=> {NativeModules.LinkingManager.openURL("https://citop.000webhostapp.com/")}}>
                            <Text
                                style={{

                                    backgroundColor: 'blue',
                                    width: 4,
                                    fontSize: 0.3,
                                    fontWeight: '300',
                                    layoutOrigin: [0.5, 0.5],
                                    textAlign: 'center',
                                    textAlignVertical: 'center',
                                    transform: [{translate: [-0.5, 0, -1.5]}, {rotateY: -90}],
                                }}>
                                Cork In The Ocean
                            </Text>
                        </VrButton>
                        <Video
                            loop={true}
                            source={asset ('CITOP.mp4', {format: 'mp4'})}

                            style={{
                                width: 6,
                                height: 4.2,
                                marginTop:0.2,
                                transform: [{translate: [0, 0.1, -2]}, {rotateY: -90}],
                            }}
                        />
                    </View>
                    <View style={style1.single}>
                        <VrButton onClick={()=> {NativeModules.LinkingManager.openURL("https://bogi-ghostbusters.netlify.com/")}}>
                            <Text
                                style={{

                                    backgroundColor: 'blue',
                                    width: 4,
                                    fontSize: 0.3,
                                    fontWeight: '300',
                                    layoutOrigin: [0.5, 0.5],
                                    textAlign: 'center',
                                    textAlignVertical: 'center',
                                    transform: [{translate: [-5.5, 0, 4]}, {rotateY: -90}],
                                }}>
                                Ghostbusters
                            </Text>
                        </VrButton>
                        <Video
                            loop={true}
                            source={asset ('GB.mp4', {format: 'mp4'})}

                            style={{
                                width: 6,
                                height: 4.2,
                                transform: [{translate: [-6, -0.1, 5]}, {rotateY: -90}],
                            }}
                        />
                    </View>
                    <View style={style1.single}>
                        <VrButton onClick={()=> {NativeModules.LinkingManager.openURL("https://doodle-pad.netlify.com/")}}>
                            <Text
                                style={{

                                    backgroundColor: 'blue',
                                    width: 4,
                                    fontSize: 0.3,
                                    fontWeight: '300',
                                    layoutOrigin: [0.5, 0.5],
                                    textAlign: 'center',
                                    textAlignVertical: 'center',
                                    transform: [{translate: [-32, 0.1, -9]}, {rotateY: 90}],
                                }}>
                                Doodle Pad
                            </Text>
                        </VrButton>

                        <Video
                            loop={true}
                            source={asset ('DP.mp4', {format: 'mp4'})}

                            style={{
                                width: 6,
                                height: 4.2,
                                transform: [{translate: [-35, 0.1, -9]}, {rotateY: 90}],
                            }}
                        />
                    </View>
                    <View style={style1.single}>
                        <VrButton onClick={()=> {NativeModules.LinkingManager.openURL("https://djolovica.000webhostapp.com/")}}>
                            <Text
                                style={{

                                    backgroundColor: 'blue',
                                    width: 4,
                                    fontSize: 0.3,
                                    fontWeight: '300',
                                    layoutOrigin: [0.5, 0.5],
                                    textAlign: 'center',
                                    textAlignVertical: 'center',
                                    transform: [{translate: [-39, 0.1, -2]}, {rotateY: 90}],
                                }}>
                                E-Market Demo
                            </Text>
                        </VrButton>
                        <Video
                            loop={true}
                            source={asset ('EM.mp4', {format: 'mp4'})}

                            style={{
                                width: 6,
                                height: 4.2,

                                transform: [{translate: [-41, 0.1, -2]}, {rotateY: 90}],
                            }}
                        />
                    </View>
                    <View style={style1.single}>
                        <VrButton onClick={()=> {NativeModules.LinkingManager.openURL("https://www.ideaengineering.rs/")}}>
                            <Text
                                style={{

                                    backgroundColor: 'blue',
                                    width: 4,
                                    fontSize: 0.3,
                                    fontWeight: '300',
                                    layoutOrigin: [0.5, 0.5],
                                    textAlign: 'center',
                                    textAlignVertical: 'center',
                                    transform: [{translate: [-43, 0.1, 4.5]}, {rotateY: 90}],
                                }}>
                                Idea Engineering
                            </Text>
                        </VrButton>

                        <Video
                            loop={true}
                            source={asset ('I.mp4', {format: 'mp4'})}

                            style={{
                                width: 6,
                                height: 4.2,
                                transform: [{translate: [-47, 0.1, 5]}, {rotateY: 90}],
                            }}
                        />
                    </View>
                    <View style={style1.single}>
                        <VrButton onClick={()=> {NativeModules.LinkingManager.openURL("https://djolovic-react-shop.netlify.com/")}}>
                            <Text
                                style={{

                                    backgroundColor: 'blue',
                                    width: 4,
                                    fontSize: 0.3,
                                    fontWeight: '300',
                                    layoutOrigin: [0.5, 0.5],
                                    textAlign: 'center',
                                    textAlignVertical: 'center',
                                    transform: [{translate: [-39, 1, 12]}, {rotateY: 180}],
                                }}>
                                React Records Store
                            </Text>
                        </VrButton>
                        <Video
                            loop={true}
                            source={asset ('RS.mp4', {format: 'mp4'})}

                            style={{
                                width: 6,
                                height: 4.2,
                                transform: [{translate: [-42, 1, 12]}, {rotateY: 180}],
                            }}
                        />
                    </View>
                </View>
            </View>


        );
    }
};

