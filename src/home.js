import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
    Image,
    Model,
    Animated,
    AmbientLight,
    PointLight,
    VrButton,


} from 'react-vr';
import style from "./style";
import { NativeModules } from 'react-vr';




const AnimatedModel = Animated.createAnimatedComponent(Model);


export default class Home extends React.Component {

    state = {
        rotation: new Animated.Value(0)
    };

    componentDidMount() {
        this.rotate();
    }

    rotate = () => {
        this.state.rotation.setValue(0);
        Animated.timing(
            this.state.rotation,
            {
                toValue: 360,
                duration: 10000,
            }
        ).start(this.rotate);
    };
    render() {
        return (
            <View style={style.view}>
                <Pano source={asset('homebase.png')}/>

                <AmbientLight intensity={0.5} />

                <PointLight
                    style={{
                        color:'white', transform:[{translate:[0, 0, 0]}]
                    }}
                />

                <VrButton onClick={()=>{
                    this.props.history.push('./work')
                }}>

                    <Text
                        style={{
                            backgroundColor: 'blue',
                            fontSize: 0.2,
                            fontWeight: '400',
                            layoutOrigin: [0.5, 0.5],
                            paddingLeft: 0.2,
                            paddingRight: 0.2,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            transform: [{translate: [0, 0, -3]}],
                        }}>
                        Aleksandar Djolovic

                    </Text>

                </VrButton>
                <VrButton onClick={()=>{
                    this.props.history.push('./portfolio')
                }}>
                    <Text
                        style={{
                            backgroundColor: 'blue',
                            fontSize: 0.1,
                            fontWeight: '200',
                            layoutOrigin: [0.5, 0.5],
                            paddingLeft: 0.2,
                            paddingRight: 0.2,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            transform: [{translate: [0, -0.05, -3]}],
                        }}>
                        WEB Developer

                    </Text>
                </VrButton>
                <Image style={{
                    height: 2,
                    width: 2,
                    borderWidth: 0.03,
                    borderTopLeftRadius: 75,
                    borderBottomRightRadius: 75,
                    borderTopRightRadius: 75,
                    borderBottomLeftRadius: 75,
                    borderColor: "#FFFFFF",
                    transform: [{translate: [-1, 3, -8]}],

                }}
                       source={asset('aleksandar.png')}/>

                <AnimatedModel
                    source={{
                        obj: asset('LOGO.obj')
                    }}
                    style={{
                        color: '#e9f033',
                        transform: [
                            {translate: [-60, 25, -100]},
                            {rotateY: this.state.rotation}
                        ]
                    }}
                />

                <Text style={{
                    backgroundColor: 'blue',
                    fontSize: 0.2,
                    fontWeight: '300',
                    layoutOrigin: [0.5, 0.5],
                    paddingLeft: 0.2,
                    paddingRight: 0.2,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    transform: [{translate: [3, 3.5, -2.5]},  {rotateY: -90}],
                }}>
                    Contact me
                </Text>

                <View style={style.entities}>



                    <VrButton onClick={()=> {NativeModules.LinkingManager.openURL("skype:live:djolovica")}}>
                        <Image style={{
                            width: 2,
                            height: 2,
                            transform: [{translate: [15, 6, -8]},  {rotateY: -90}],

                        }}
                               source={asset('telephone.gif')}/></VrButton>

                    <VrButton onClick={()=> {NativeModules.LinkingManager.openURL("mailto:djolovica@gmail.com")}}>

                        <Image style={{
                            width: 2,
                            height: 2,
                            transform: [{translate: [15, 6, -12]},  {rotateY: -90}],

                        }}
                               source={asset('mailbox_animation_by_vatoff-db2yz2w.gif')}

                        /></VrButton>

                    <VrButton onClick={()=> {NativeModules.LinkingManager.openURL("https://www.linkedin.com/in/aleksandar-djolovic-127592149/")}}>
                        <Image style={{
                            width: 2,
                            height: 2,
                            transform: [{translate: [15, 6, -17]},  {rotateY: -90}],

                        }}
                               source={asset('LINKEDIN-LOGO-2-Animated-Pulsating.gif')}/></VrButton>

                    <VrButton onClick={()=> {NativeModules.LinkingManager.openURL("https://www.behance.net/djolovica51ef")}}>
                        <Image style={{
                            width: 2,
                            height: 2,
                            transform: [{translate: [15, 6, -24]},  {rotateY: -90}],

                        }}
                               source={asset('Letter B.gif')}/></VrButton>


                </View>
            </View>
        );
    }
};

