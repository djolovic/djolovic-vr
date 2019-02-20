import React from 'react';
import {
    AppRegistry,
    asset,
    Image,
    Pano,
    Text,
    View,
    VrButton,

} from 'react-vr';
import style1 from './style1';
import { NativeModules } from 'react-vr';


export default class Work extends React.Component {
    render() {
        return (
            <View  style={style1.view}>
                <Pano source={asset('chess-world.jpg')}/>
                <VrButton onClick={()=>{
                    this.props.history.goBack()
                }}>
                    <Text
                        style={{
                            backgroundColor: 'red',
                            fontSize: 0.3,
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


                <View >
                    <Text
                        style={{

                            backgroundColor: 'blue',
                            fontSize: 0.5,
                            fontWeight: '400',
                            layoutOrigin: [0.5, 0.5],
                            paddingLeft: 0.1,
                            paddingRight: 0.1,
                            alignItems: 'stretch',
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            transform: [{translate: [-12, 1, 0]},  {rotateY: 90}],
                        }}>
                        Technologies:
                    </Text>

                    <View style={style1.contact}>
                        <VrButton onClick={()=> {NativeModules.LinkingManager.openURL("https://www.adobe.com/products/photoshop.html")}}>
                            <Image style={{
                                width: 0.5,
                                height: 0.5,

                                transform: [{translate: [-10, 1, 3]},  {rotateY: 90}],

                            }}
                                   source={asset('Adobe_Photoshop_CS3_icon.png')}

                            /></VrButton>
                        <VrButton onClick={()=> {NativeModules.LinkingManager.openURL("https://www.w3.org/TR/html/")}}>
                            <Image style={{
                                width: 0.5,
                                height: 0.5,

                                transform: [{translate: [-10, 1, 2]},  {rotateY: 90}],

                            }}
                                   source={asset('HTML.png')}

                            /></VrButton>
                        <VrButton onClick={()=> {NativeModules.LinkingManager.openURL("https://www.w3.org/Style/CSS/")}}>
                            <Image style={{
                                width: 0.5,
                                height: 0.5,

                                transform: [{translate: [-10, 1, 1]},  {rotateY: 90}],

                            }}
                                   source={asset('CSS3.png')}

                            />
                        </VrButton>
                        <VrButton onClick={()=> {NativeModules.LinkingManager.openURL("https://developer.mozilla.org/en-US/docs/Web/JavaScript")}}>
                            <Image style={{
                                width: 0.5,
                                height: 0.5,

                                transform: [{translate: [-10, 1, 0]},  {rotateY: 90}],

                            }}
                                   source={asset('JS.png')}

                            />
                        </VrButton>
                        <VrButton onClick={()=> {NativeModules.LinkingManager.openURL("http://php.net/")}}>
                            <Image style={{
                                width: 0.5,
                                height: 0.5,

                                transform: [{translate: [-10, 1, -1]},  {rotateY: 90}],

                            }}
                                   source={asset('php7.png')}

                            />
                        </VrButton>
                        <VrButton onClick={()=> {NativeModules.LinkingManager.openURL("https://www.mysql.com/")}}>
                            <Image style={{
                                width: 0.5,
                                height: 0.5,

                                transform: [{translate: [-10, 1, -2]},  {rotateY: 90}],

                            }}
                                   source={asset('mysql.png')}

                            />
                        </VrButton>
                        <VrButton onClick={()=> {NativeModules.LinkingManager.openURL("https://getbootstrap.com/")}}>
                            <Image style={{
                                width: 0.5,
                                height: 0.5,

                                transform: [{translate: [-13, 0.3, 3]},  {rotateY: 90}],

                            }}
                                   source={asset('bootstrap-stack.png')}

                            />
                        </VrButton>
                        <VrButton onClick={()=> {NativeModules.LinkingManager.openURL("https://sass-lang.com/")}}>
                            <Image style={{
                                width: 0.5,
                                height: 0.5,

                                transform: [{translate: [-13, 0.3, 2]},  {rotateY: 90}],

                            }}
                                   source={asset('sass.png')}

                            />
                        </VrButton>
                        <VrButton onClick={()=> {NativeModules.LinkingManager.openURL("https://jquery.com/")}}>
                            <Image style={{
                                width: 0.5,
                                height: 0.5,

                                transform: [{translate: [-13, 0.3, 1]},  {rotateY: 90}],

                            }}
                                   source={asset('jquery.png')}

                            />
                        </VrButton>
                        <VrButton onClick={()=> {NativeModules.LinkingManager.openURL("https://wordpress.org/")}}>
                            <Image style={{
                                width: 0.5,
                                height: 0.5,

                                transform: [{translate: [-13, 0.3, 0]},  {rotateY: 90}],

                            }}
                                   source={asset('wordpress.png')}

                            />
                        </VrButton>
                        <VrButton onClick={()=> {NativeModules.LinkingManager.openURL("https://laravel.com/")}}>
                            <Image style={{
                                width: 0.5,
                                height: 0.5,

                                transform: [{translate: [-13, 0.3, -1]},  {rotateY: 90}],

                            }}
                                   source={asset('laravel.png')}

                            />
                        </VrButton>
                        <VrButton onClick={()=> {NativeModules.LinkingManager.openURL("https://reactjs.org/")}}>
                            <Image style={{
                                width: 0.5,
                                height: 0.5,

                                transform: [{translate: [-13, 0.3, -2]},  {rotateY: 90}],

                            }}
                                   source={asset('react.png')}

                            />
                        </VrButton>
                    </View>
                </View>


                <View >
                    <Text
                        style={{

                            backgroundColor: 'blue',
                            fontSize: 0.5,
                            fontWeight: '400',
                            layoutOrigin: [0.5, 0.5],
                            paddingLeft: 0.1,
                            paddingRight: 0.1,
                            alignItems: 'stretch',
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            transform: [{translate: [8, 1, -5]},  {rotateY: -90}],
                        }}>
                        Working Process:
                    </Text>
                    <View style={style1.contact}>

                        <View style={style1.single}>

                            <Text
                                style={{

                                    backgroundColor: 'blue',
                                    width: 3,
                                    fontSize: 0.3,
                                    fontWeight: '200',
                                    layoutOrigin: [0.5, 0.5],
                                    textAlign: 'center',
                                    textAlignVertical: 'center',
                                    transform: [{translate: [7, -3, -9]}, {rotateY: -90}],
                                }}>
                                Brainstorming
                            </Text>
                            <Image style={{
                                width: 2,
                                height: 2,

                                transform: [{translate: [6, -0.1, -9]},  {rotateY: -90}],

                            }}
                                   source={asset('hmm.gif')}

                            />

                        </View>
                        <Image style={{
                            width: 0.7,
                            height: 0.7,
                            marginTop: 0.5,
                            transform: [{translate: [5.5, -2, -9]}, {rotateY: -90}],

                        }}
                               source={asset('cute-arrow-icon-transparent.png')}

                        />
                        <View style={style1.single}>

                            <Text
                                style={{

                                    backgroundColor: 'blue',
                                    width: 3,
                                    fontSize: 0.3,
                                    fontWeight: '200',
                                    layoutOrigin: [0.5, 0.5],
                                    textAlign: 'center',
                                    textAlignVertical: 'center',
                                    transform: [{translate: [0.2, -3, -5]}, {rotateY: -90}],
                                }}>
                                Development
                            </Text>
                            <Image style={{
                                width: 2,
                                height: 2,
                                transform: [{translate: [-1, -0.1, -5]},  {rotateY: -90}],

                            }}
                                   source={asset('working.gif')}

                            />
                        </View>
                        <Image style={{
                            width: 0.7,
                            height: 0.7,
                            marginTop: 0.4,
                            transform: [{translate: [-2.5, -1.8, -4]},  {rotateY: -90}],

                        }}
                               source={asset('cute-arrow-icon-transparent.png')}

                        />
                        <View style={style1.single}>
                            <Text
                                style={{

                                    backgroundColor: 'blue',
                                    width: 3,
                                    fontSize: 0.3,
                                    fontWeight: '200',
                                    layoutOrigin: [0.5, 0.5],
                                    textAlign: 'center',
                                    textAlignVertical: 'center',
                                    transform: [{translate: [-6.5, -3, -1.5]}, {rotateY: -90}],
                                }}>
                                Satisfied client
                            </Text>
                            <Image style={{
                                width: 2,
                                height: 2,
                                transform: [{translate: [-7, -0.1, -2]},  {rotateY: -90}],

                            }}
                                   source={asset('happy.gif')}

                            />
                        </View>
                    </View>
                </View>

            </View>
        );
    }
};

