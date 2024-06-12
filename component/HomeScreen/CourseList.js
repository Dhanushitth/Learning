import { View, Text, Image, TouchableOpacity } from 'react-native'
import  { useEffect, useState } from 'react'
import React from 'react'
import { getCourseList } from '../../app/Services/Index'
import SubHeading from '../../component/HomeScreen/SubHeading'
import { FlatList } from 'react-native'
//import { Ionicons } from '@expo/vector-icons';
import CourseItem from '../../component/HomeScreen/CourseItem'
import { useNavigation } from '@react-navigation/native'
import CourseDetailScreen from 'Screen/CourseDetailScreen'

export default function CourseList({ level }) {
    const [courseList, setCourseList] = useState([]);
    const navigation=useNavigation();
    useEffect(() => {
        getCourses();
    }, [])
    const getCourses = () => {
        getCourseList(level).then(resp => {
            console.log("RESP--", resp);
            setCourseList(resp?.courses)
        })
    }
    return (
        <View>
            <SubHeading text={ level+ 'Courses'} color={level=='Basic'&&'white'}/>
            <FlatList
                data={courseList}
                key={courseList.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={()=>navigation.navigate('CourseDetailScreen')}>
                         <CourseItem item={item}/>
                    </TouchableOpacity>
                
                )}
            />
        </View>
    )
}