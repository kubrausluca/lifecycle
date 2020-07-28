import React, { useState } from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, Image, TextInput, FlatList, Dimensions, Pressable } from 'react-native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import Modal from 'react-native-modal';


const PlansDetail = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [planTitle, setPlanTitle] = useState("")
    const [planDetail, setPlanDetail] = useState("")
    const [planDate, setPlanDate] = useState("")
    const [allPlans, setAllPlans] = useState([])
    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight = Dimensions.get("window").height;
    const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
    const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
    const workout = { key: 'workout', color: 'green' };

    /*
       1. OPTIONAL İNSANLARI EKLEME
       2. PLAN DETAYI 
       3. PLAN BAŞLIĞI VE OPTIONAL PARA EKLEME
       4. TÜM BUNLARI DÜZENLEME
       5. OPTIONAL TARİH-SAAT EKLEME
       
   */

   function addPlan () {
       //push details to allplans
   }

    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity>
                    <Text>Plans</Text>
                </TouchableOpacity>
                <Modal
                    isVisible={modalVisible}
                    deviceWidth={deviceWidth}
                    deviceHeight={deviceHeight}
                    onSwipeComplete={() => setModalVisible(false)}
                    swipeDirection="down"
                    style={{ margin: 15, marginTop: 300, }}
                >
                    <View style={{ flex: 1, backgroundColor: '#f2f2f2', borderRadius: 20, }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                            <Text
                                style={{ fontSize: 15 }}
                            >Plan:</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../../assets/checklist.png')} />
                                <TextInput
                                    autoCapitalize="none"
                                    placeholder="Plan"
                                    style={{ margin: 0, padding: 3 }}
                                />
                            </View>
                                <Pressable
                                    style={{
                                        backgroundColor: "#2196F3",
                                    }}
                                    onPress={() => addPlan()} >
                                    <Text>Ekle</Text>
                                </Pressable>
                        </View>
                    </View>
                </Modal>

                <CalendarList
                    // Callback which gets executed when visible months change in scroll view. Default = undefined
                    onVisibleMonthsChange={(months) => { console.log('now these months are visible', months); }}

                    scrollEnabled={true}
                    
                    //  selected day {"dateString": "2020-08-28", "day": 28, "month": 8, 
                    //"timestamp": 1598572800000, "year": 2020}
                    onDayPress={(day) => { setPlanDate(day), console.log('selected day', planDate); setModalVisible(!modalVisible) }}
                    onMonthChange={(month) => { console.log('month changed', month) }}

                    markedDates={{
                        '2020-05-25': { dots: [vacation, massage, workout], selected: true, selectedColor: 'red' },
                        '2020-05-26': { dots: [massage, workout], disabled: true }
                    }}
                    markingType={'multi-dot'}


                    style={{
                        borderWidth: 1,
                        borderColor: 'gray',
                        height: 350
                    }}
                    firstDay={1}
                />
            </View>
        </SafeAreaView>
    )
}

export { PlansDetail }